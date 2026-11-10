# 工作流详解

八个阶段，每个阶段给出命令模板、判定标准与"什么时候可以进入下一阶段"。
命令以 PowerShell + Windows MSIX 为例；macOS（`.app/Contents/Resources/app.asar`）与
Linux（AppImage 解包后的 `resources/app.asar`）只需替换 `$A`。

全程约定两个变量：

```powershell
$A = "<安装目录>\app\resources\app.asar"          # 目标档案
$O = "<repo>\<分析目录>\code"                     # 产物根
$W = "<repo>\<分析目录>\.work"                    # gitignore 的草稿区
```

---

## 阶段 0 — 定位与固定身份

**不要靠猜目录名**。从进程列表反查最可靠：

```powershell
# 有窗口的那个进程就是主程序
Get-Process | Where-Object { $_.MainWindowTitle -ne "" } |
  Select-Object Id, ProcessName, MainWindowTitle, Path | Format-List

# MSIX 包：拿准确的版本与安装位置
Get-AppxPackage | Where-Object { $_.Name -match "<关键词>" } |
  Select-Object Name, Version, InstallLocation, PackageFamilyName | Format-List

# 卸载注册表（普通安装版）
@("HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*",
  "HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*",
  "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*") |
  ForEach-Object { Get-ItemProperty $_ -EA SilentlyContinue } |
  Where-Object { $_.DisplayName -match "<关键词>" } |
  Select-Object DisplayName, DisplayVersion, InstallLocation | Format-List
```

> 坑：`Get-ChildItem "C:\Program Files\WindowsApps"` 通常**无权限**返回空，
> 但 `Get-AppxPackage` 给出的 `InstallLocation` 是**可以读**的。别因为 dir 失败就断定找不到。

固定身份要采的东西：

| 项                                          | 来源                                                 |
| ------------------------------------------- | ---------------------------------------------------- |
| 包身份 / 版本 / 安装根                      | `Get-AppxPackage`、`AppxManifest.xml`                |
| 应用版本 / build number / flavor / 框架版本 | `app.asar:package.json`                              |
| 关键二进制的 SHA-256 与字节数               | `Get-FileHash`                                       |
| 能力声明、协议、文件关联、防火墙规则        | `AppxManifest.xml`                                   |
| 用户数据目录（**只记名字与大小**）          | `%APPDATA%`、`%LOCALAPPDATA%\Packages\*`、`~/.<app>` |

```powershell
Get-FileHash "$R\app\resources\app.asar","$R\app\resources\<runtime>.exe","$R\app\<Main>.exe","$R\AppxManifest.xml" -Algorithm SHA256
node "$SKILL\scripts\asar-cli.mjs" cat $A package.json
```

**退出条件**：能写出 `manifest.json` 的 `package` + `files` + `paths` 三段，且 hash 是本机实算的。

> ⚠️ 如果这次分析可能是**下一次 diff 的基线**，现在就把阶段 1 的 `inventory.json`
> 一起存档并提交。升级会替换整个版本目录，事后无法补。

## 阶段 1 — 盘点容器

先看清结构，再决定抽什么。**不要一上来就全量解包**（Codex 的 app.asar 是 309 MB / 9035 条目）。

```powershell
node "$SKILL\scripts\inventory.mjs" $A "$W\inventory.json"        # 全量清单 + 按扩展名汇总
node "$SKILL\scripts\asar-cli.mjs" tree $A --depth 2              # 目录级体积分布
node "$SKILL\scripts\asar-cli.mjs" ls $A --prefix webview/assets --limit 40   # 最大的若干 chunk
```

要建立的三个判断：

1. **主进程 vs 渲染进程**在哪：Electron Forge/Vite 的惯例是 `.vite/build/*`（主）与
   `webview/` 或 `dist/`、`renderer/`（渲染）。看 `package.json` 的 `main` 字段确认入口。
2. **共享 bundle 有多大**：通常有 1–2 个 5–15 MB 的 `app-initial` / `vendor` / `index` 巨型 chunk，
   路由表、store、协议层都在里面。它们**不入库**，但要单独 light-format 到 `$W/big/` 供检索。
3. **哪些是噪声**：语言包（几十个 ×1.5 MB）、语法高亮（Shiki/Monaco worker）、
   第三方库（three.js / mapbox / katex）、用户生成的产物（Codex 有 1059 个 `visualization-*`）。
   先算清它们的体积占比，否则会污染模块分类。

```powershell
# 统计 chunk 名家族，识别噪声（成员数 >= 25 的家族基本都是批量生成物）
node -e "const i=require('./inventory.json').entries.filter(e=>!e.d&&/\.js$/.test(e.p));
const f=new Map();for(const e of i){const k=e.p.split('/').pop().replace(/\.(js|css)$/,'').replace(/-[A-Za-z0-9_]{8,16}$/,'');
const r=f.get(k)??{n:0,b:0};r.n++;r.b+=e.s;f.set(k,r)}
[...f.entries()].filter(([,v])=>v.n>=25).sort((a,b)=>b[1].n-a[1].n).forEach(([k,v])=>console.log(v.n,k,(v.b/1048576).toFixed(1)+'MB'))"
```

**退出条件**：能说出"总共多少 chunk / 多少 MB，其中噪声占多少，我要抽的大概是多少"。

## 阶段 2 — 定模块 taxonomy

**先看名字，再写规则。** 现代打包器保留 chunk 的语义名（`local-conversation-thread-a2bcd054c9d2.js`），
这批名字本身就是最好的模块地图。

```powershell
# 按关心的领域列出候选 chunk（体积降序）
node -e "const i=require('./inventory.json').entries.filter(e=>!e.d&&e.s>700&&/\.js$/.test(e.p));
const re=/conversation|composer|sidebar|panel|nav|settings|thread/i;
i.filter(e=>re.test(e.p.split('/').pop())).sort((a,b)=>b.s-a.s)
 .forEach(e=>console.log((e.s/1024).toFixed(0).padStart(6)+' KB  '+e.p.split('/').pop()))"
```

写 `module-map.json` 的三条规则：

1. **规则匹配去掉 content hash 的名字**（`^general-settings` 而不是 `^general-settings-9d83727e851d`），
   这样升级后不用改规则。
2. **规则有序，首个命中生效**。顺序要刻意安排，把更具体的放前面。
   例：`settings` 必须在 `composer` 前（否则 `keyboard-shortcuts-settings` 会被 composer 抢走）；
   `side-panel` 必须在 `conversation` 前（`*-side-panel-tab` 该归侧栏而不是对话区）。
3. **显式列出噪声家族的排除正则**（`shared_excludes.patterns`），并设闭包单文件体积上限
   （Codex 用 250 KB），否则一个 hub chunk 的 import 闭包能把上千个文件拖进来。

先 `--dry-run` 看计划，反复调到各模块数量合理：

```powershell
node "$SKILL\scripts\extract-modules.mjs" $A $O --dry-run
```

**判定标准**：没有哪个模块的文件数比其他模块高一个数量级（Codex 第一次跑时
`side-panel` 有 1841 个文件，就是因为 `^visualization` 误命中了 1059 个生成物）。

## 阶段 3 — 抽取 + 格式化

```powershell
node "$SKILL\scripts\extract-modules.mjs" $A $O --jobs 8 --max-beautify-bytes 1200000
```

三个阶段：**种子**（规则命中）→ **闭包**（跟随 `from "./x.js"` / `import("./x.js")` /
`__vite__mapDeps([...])`，未命中规则的落到该模块 `_deps/`，并在 `_INDEX.json` 记下来源）→
**格式化**（worker 线程池，≤ 阈值走 Prettier，超过或 Prettier 抛错退回 light formatter）。

Codex 的 691 chunk / 21 MB 全量跑约 **26 秒**。

Prettier 用仓库里已有的，**不要安装**：

```powershell
# 确认存在
Test-Path "<repo>\desktop_app\node_modules\prettier\index.mjs"
# extract-modules.mjs 里通过 PRETTIER_ENTRY 环境变量指定 file:// URL
```

共享大 bundle 单独处理（不入 `$O`，只入 `$W/big/`）：

```powershell
node -e "import('./lightformat.mjs').then(async ({lightFormat})=>{
  const {AsarArchive}=await import('./asar.mjs'); const fs=await import('node:fs');
  const ar=new AsarArchive(process.argv[1]);
  for(const p of ['webview/assets/<app-initial>.js','webview/assets/<app-primary>.js']){
    const t=ar.readText(p); fs.writeFileSync(process.argv[2]+'/'+p.split('/').pop(), lightFormat(t));
  }})" $A "$W\big"
```

10 MB 的 bundle light-format 约 75 秒，输出约 12 MB。**这一步值得等**：
阶段 5 的注册表猎取全靠它。

**退出条件**：`$O/_MODULE_INDEX.json` 的 `chunks` / `raw_bytes` / `formatted_bytes` 与计划一致；
抽查几个格式化后的文件确认没有被 Prettier 截断或 light formatter 破坏字符串。

## 阶段 4 — 收割字符串

```powershell
foreach ($m in (Get-ChildItem $O -Directory | Where-Object { $_.Name -notin "tools","_catalog" }).Name) {
  node "$SKILL\scripts\catalog.mjs" "$O\$m" "$O\$m\_CATALOG.json" --literals-out "$W\literals\$m.json"
}
node "$SKILL\scripts\harvest-messages.mjs" "$O\_catalog\i18n-messages.json" $O "$W\big"
```

**一定要把共享 bundle 也喂给 `harvest-messages.mjs`**，否则拿到的只是零散页面的文案，
拿不到全局命令表和路由文案。Codex 加上共享 bundle 后从 ~7000 条涨到 **13338 条 / 1919 组**。

`--literals-out` 把体量最大的字面量明细分流到 `$W`（不入库），主文件只留条数。
Codex 的 settings `_CATALOG.json` 因此从 4.2 MB 降到 1.3 MB。

看结果的顺序：先按组统计（`group_count` 最大的几个组就是这个 app 的功能重心），
再挑组精读。例：

```powershell
node -e "const c=require('./code/_catalog/i18n-messages.json');
c.groups.slice().sort((a,b)=>b.count-a.count).slice(0,25).forEach(g=>console.log(String(g.count).padStart(5)+'  '+g.group))"
```

Codex 的前几名是 `localConversation.mcpToolActivity`(901)、`electron.onboarding`(454)、
`settings.usage`(385)、`settings.browserUse`(334) —— 一眼就能看出功能密度在哪。

**退出条件**：能用一句话说出"这个 app 的功能重心在哪几块"。

## 阶段 5 — 猎取注册表

数据驱动的 UI 一定有几张静态表。方法见
[reading-bundles.md](reading-bundles.md#猎取注册表)，这里只给流程：

1. 从阶段 4 挑一个**确定是枚举成员**的字面量（例如某个设置页 slug、某个 tab kind）；
2. 用 `ctx.mjs` 在 `$W/big/` 里搜它，看它出现在哪个 `const` 声明附近；
3. 读那个声明所在的整块 —— 通常一次能拿到一整张表（有序数组、slug→组件映射、图标映射、门控映射）；
4. 把表的还原写成**可重复执行的脚本**（参考 `scripts/registry-hunt.example.mjs`），
   不要手工誊抄，否则升级后无法复现，也容易抄错。

Codex 一次就还原出：路由常量表、`<Route>` 元素树、35 个设置页的
slug→组件→chunk 映射、设置图标映射、capability 门控映射、JSON-RPC 方法全集、
12 种 ProseMirror mention 节点、23 个 IPC 频道。

**退出条件**：`code/<module>/_*_MAP.json` 之类的机器可读注册表落盘，且脚本能重跑。

## 阶段 6 — 精读高信号 chunk

先降噪：

```powershell
node "$SKILL\scripts\distill.mjs" "$O\<module>" "$W\distill\<module>"
```

Codex 的某些设置文件 90% 是内联 SVG path；distill 能砍掉 40–56%。
注意：**distill 的产物只用于阅读，不入库**，`code/` 里保留完整格式化代码。

然后按"体积从小到大"读 —— 反直觉但有效：**<10 KB 的 chunk 往往整文件都是逻辑**，
信息密度远高于 300 KB 的大 chunk。Codex 里最有价值的几个文件都是小文件：

| 文件                                          | 体积   | 价值                                      |
| --------------------------------------------- | ------ | ----------------------------------------- |
| `thread-virtualizer-*.js`                     | 2 KB   | 完整的虚拟化算法，含默认行高与二分查找    |
| `thread-side-panel-tabs-*.js`                 | 0.4 KB | 侧面板的全部公开 API + 两个禁用桩         |
| `local-conversation-thread-turn-entries-*.js` | 7 KB   | 对话区数据流的核心加工函数                |
| `composer-provider-*.js`                      | 7 KB   | 浮动 composer 的 spacer 控制 + 全局 store |
| `preload.js`                                  | 6.7 KB | 全部 IPC 频道与桥接 API                   |
| `dock-icon-setting-visibility-*.js`           | 0.3 KB | 一个完整的平台/ flavor 门控函数           |

**退出条件**：每个模块至少完整读完 2–3 个小 chunk，能画出它的数据流。

## 阶段 7 — 写文档

规范见 [deliverables.md](deliverables.md)。核心是证据分级：

- **A**：安装包直接证据（资源名、字面量、i18n description、静态逻辑）
- **B**：本仓库源码证据（做行为对照时）
- **C**：结构推断（由命名、边界、状态组合推断的行为）——**必须显式标注**

两个必须写进去的限定：

1. **"代码里的可见性判定" ≠ "当前账号下实际可见"**。没做运行时插桩就必须声明这点，
   因为 feature flag（Statsig 等）与账号态会改变结果。
2. **按语义重命名的函数名不是原名**。文档里写 `buildLayout(...)` 时要说明这是重命名，
   原符号已被压缩掉。

## 阶段 8 — 自检

```powershell
# 1. 文档内链全部可达（相对链接）
#    用一个脚本遍历所有 .md 的 ](path) 并 fs.existsSync 检查
# 2. 无重复 chunk（同名文件不应出现在两个子目录）
node -e "const fs=require('fs'),p=require('path');const s=new Map();let d=0;
const w=q=>{for(const e of fs.readdirSync(q,{withFileTypes:true})){const f=p.join(q,e.name);
if(e.isDirectory())w(f);else if(/\.(js|css)$/.test(e.name)){if(s.has(e.name))d++;else s.set(e.name,f)}}};
w('./code');console.log('duplicates:',d)"
# 3. 文档里的数字与 _MODULE_INDEX.json 一致（chunk 数、MB、文案条数）
# 4. 所有工具语法通过
Get-ChildItem "$SKILL\scripts" -Filter *.mjs | ForEach-Object { node --check $_.FullName }
# 5. 注册表脚本自检：报告"哪些实现 chunk 没被抽到本地"
node "$SKILL\scripts\registry-hunt.example.mjs" $A $O "$O\settings\_SETTINGS_MAP.json"
```

第 5 条特别重要：文档一旦引用了磁盘上不存在的 chunk，读者就无法复核。
`registry-hunt.example.mjs` 会解析 shim、对照本地文件、输出 `resolved_chunks_not_extracted`，
非空就说明抽取规则漏了东西 —— 补规则、重跑阶段 3、再自检。
