# tools/ — 逆向分析工具链

全部是**零第三方依赖**的 Node ESM 脚本（唯一外部依赖是仓库里已有的 Prettier 3.9.6，且只在格式化时有 fallback）。只读访问安装目录，不写入 `C:\Program Files\WindowsApps`。

分析流程与工具对应关系：

```
app.asar ──inventory.mjs──▶ inventory.json（9035 条清单）
    │                            │
    │                            ▼
    │                    module-map.json（分类规则）
    │                            │
    ├──extract-modules.mjs───────┴──▶ code/<module>/<subdir>/*.js  (691 chunks, 30.1 MB)
    │        │                            + _INDEX.json（来源/大小/SHA-256/选中原因）
    │        └─ prettier 3.9.6（≤1.2 MB）
    │        └─ lightformat.mjs（>1.2 MB 的兜底）
    │
    ├──settings-map.mjs──────────────▶ code/settings/_SETTINGS_MAP.json
    ├──module-map-261016.json────────▶ 26.1016 的模块分类规则
    ├──module-map-261013.json────────▶ 26.1013 的历史规则
    │        （还原 35 个 section 的注册表 + 跟随 rolldown shim）
    │
    ├──catalog.mjs───────────────────▶ code/<module>/_CATALOG.json（每模块字符串目录）
    ├──harvest-messages.mjs──────────▶ code/_catalog/i18n-messages.json（13338 条全局文案）
    │
    ├──distill.mjs───────────────────▶ .work/distill/（剥离 SVG/Lottie/class soup，仅供阅读）
    ├──ctx.mjs───────────────────────▶ 字符窗口检索（长行 bundle 的 grep 替代）
    └──asar-cli.mjs──────────────────▶ ls / tree / cat / get / pull / grep
```

> `extract-modules.mjs` 还支持 `--map <file>` 指定规则文件（默认取同目录的
> `module-map.json`）。本目录同时保留了 26.903/26.1013 的规则；最新全量使用
> `module-map-261016.json`。通用副本在 `.agents/skills/revert/scripts/`，
> 那边只带了 `module-map.example.json`，需要用 `--map`。

## 各工具

### `asar.mjs` — ASAR 读取库

`AsarArchive` 类，按偏移量定位读取，**不会把整个档案载入内存**（对 309 MB 的 app.asar 很重要）。

```js
import { AsarArchive } from "./asar.mjs";
const ar = new AsarArchive("C:/.../app.asar");
ar.stat("webview/index.html"); // → { size, offset, unpacked, integrity }
ar.readText("webview/assets/x.js"); // → string | null
ar.read("..."); // → Buffer | null
ar.extractTo("...", "/dest/path"); // 1 MB 分块流式写出
for (const { path, node, dir } of ar.walk("webview/assets")) {
  /* ... */
}
ar.close();
```

ASAR 头部布局（文件内注释也有）：

```
off 0  UInt32  size-pickle 的 payload 长度（恒为 4）
off 4  UInt32  header pickle 序列化后的字节数
off 8  UInt32  header pickle 的 payload 长度
off 12 UInt32  JSON 头字符串长度
off 16 ...     JSON 头（目录树）
off 8 + value@4  数据区起点
```

`node.unpacked === true` 的条目实体在 `<archive>.unpacked/<path>`，`read()` 会返回 `null`。

### `asar-cli.mjs` — 命令行入口

```powershell
node asar-cli.mjs ls   <archive> [--depth N] [--all] [--filter RE] [--ext .js,.css] [--prefix p] [--limit N]
node asar-cli.mjs tree <archive> [--depth N]
node asar-cli.mjs cat  <archive> <entryPath>
node asar-cli.mjs get  <archive> <entryPath> <destFile>
node asar-cli.mjs pull <archive> <destDir> [--prefix a,b] [--ext .js] [--filter RE] [--max-bytes N] [--dry-run]
node asar-cli.mjs grep <archive> <regex> [--ext .js] [--filter RE] [--limit N] [--ctx N]
```

`ls` 按大小降序并打印总量；`tree` 把文件归到每个祖先目录（扁平档案归入合成桶 `(root)`，例如 `busy-bar.asar`）；`grep` 每个文件只报第一处命中以免刷屏。

### `inventory.mjs` — 清单导出

```powershell
node inventory.mjs <archive> <outJson> [pathPrefix]
```

产出 `{p, s, u, d, x}` 扁平数组 + 按扩展名的汇总。`extract-modules.mjs` 与 `.work/` 下的各种统计脚本都以它为输入，避免反复解析 309 MB 档案的头部。

### `module-map.json` — 分类规则

三段配置：

- `path_rules`：按 asar 路径前缀分类（`.vite/build/` → `main-process`，`native-menu-locales/` → `main-process`）；
- `rules`：**有序**的 chunk 名正则 → `{module, subdir}`，**首个命中生效**。顺序是刻意的：`settings` 在 `composer` 前（避免 `keyboard-shortcuts-settings` 被 composer 抢走），`side-panel` 在 `conversation` 前（`*-side-panel-tab` 归侧栏而非对话区）；
- `shared_excludes` + `max_closure_bytes`：共享运行时、语言包、语法高亮、可视化产物等**不入库**的家族，以及闭包依赖的单文件体积上限（250 KB）。

规则匹配的是**去掉 content hash 的名字**，所以 app 升级、chunk 重新哈希后不用改规则。

### `extract-modules.mjs` — 抽取 + 格式化主流程

```powershell
node extract-modules.mjs <archive> <outRoot> [--inventory f.json] [--dry-run]
                         [--no-closure] [--closure-depth N] [--jobs N]
                         [--only modA,modB] [--max-beautify-bytes N] [--max-closure-bytes N]
```

三个阶段：

1. **种子**：`path_rules` 命中的条目 + `rules` 命中的 `webview/assets/*.{js,css}`；
2. **闭包**：从种子出发解析 `from "./x.js"` / `import("./x.js")` / `__vite__mapDeps([...])` 引用的本地 chunk，跳过 `shared_excludes` 与超过 `max_closure_bytes` 的（这些记为 external），未命中任何规则的落到该模块的 `_deps/`，并在 `_INDEX.json` 的 `selected_by` 里记下 `closure:d1:<来源chunk>`；已由 `path_rules` 全量种入的目录不再展开闭包；
3. **格式化**：worker 线程池（默认 `cpus-1`，上限 8）。≤ `max-beautify-bytes`（默认 1.2 MB）走 Prettier（`babel` / `css` / `json` 按扩展名选 parser），超过或 Prettier 抛错则退回 `lightformat.mjs`。

`--dry-run` 只打印计划并把 `plan.json` 写到 `<outRoot>/_plan/`，用来调规则。691 个 chunk / 20 MB 全量跑约 **25 秒**。

### `lightformat.mjs` — 兜底格式化器

Prettier 在多兆字节的压缩 bundle 上要几分钟甚至 OOM。这个格式化器**只插入换行与缩进，绝不改写 token**，因此输出与原文件是 1:1 的，可安全搜索与 diff。它维护足够的词法状态以免在下列内容里断行：

```
'...'   "..."   `...${ 嵌套 }...`   // ...   /* ... */   /regex/
```

正则字面量的判定用「前一个有效字符 ∈ `(,=:[!&|?{};+-*%~^<>`」或「尾部关键字 ∈ `return typeof instanceof in of new delete void throw case do else yield await`」。10 MB 的 `app-initial` 约 75 秒，输出 12.3 MB。

### `distill.mjs` — 阅读用降噪

Codex 把上千个内联 SVG 图标和 Lottie 动画直接打进了 JS chunk，某些文件 90% 是路径数据。`distill` 做五类替换（全部限定在字符串字面量内）：

```
1. 整个内联 SVG JSX 调用   (0,x.jsx)(`svg`,{...})   →  <SvgIcon 20x20/>
2. SVG path 数据           d="M12 3L4 5..."         →  "<svg-path 1153ch>"
3. data: URI                                        →  "<data-uri Nb>"
4. 长 base64/hex 串                                  →  "<blob Nb>"
5. Tailwind class soup（≥12 个 kebab token）          →  "<classes N>"
```

第 1 条用平衡括号扫描，且必须从 `(0, x.jsx)` 分组**之后**的那个 `(` 开始配对 —— 否则会停在分组自己的右括号上（这个坑修过一次）。产物只写到 `.work/distill/`，**不入库**：`code/` 里保留的是完整格式化代码。

### `catalog.mjs` — 每模块字符串目录

```powershell
node catalog.mjs <moduleDir> <outJson>
```

抽取四类信息：react-intl 描述符（`id` / `defaultMessage` / `description`）、全部字符串字面量及其出现文件、对象属性名频次 Top 250、import 关系（`from` → 导入名集合）。**minified 代码丢了标识符但保留了每一个字符串**，这是读压缩 bundle 最有效的一条路。

### `harvest-messages.mjs` — 全局 i18n 目录

```powershell
node harvest-messages.mjs <outJson> <fileOrDir>...
```

跨模块 + 共享 bundle 汇总所有描述符，按 id 前两段分组（`settings.general`、`composer.mode` …），产出 `code/_catalog/i18n-messages.json`：**13338 条 / 1887 组**。

`description` 字段是开发者写的、面向翻译者的说明，信息量常常**超过**文案本身。例如：

```
id: settings.general.followUpQueueMode.interrupt
defaultMessage: Steer
description: Option label for applying a follow-up message to the active Codex run instead of queuing it
```

单看 `id` 会以为 Steer 等于打断，看 `description` 才知道是“应用到当前运行而非排队”。

### `settings-map.mjs` — 设置注册表还原

```powershell
node settings-map.mjs <archive> <codeRoot> <outJson>
```

从 `app-initial` 里定位三样东西：`.` 拼接的 slug 全表、有序的 `[{slug}]` 描述符数组、`{slug: lazy(() => import(...))}` 加载表。

- 26.903 的加载表以 `billing:b3(...)` 开头；
- 26.1013 改成 `{ rosalind: vQ(...), billing: vQ(HDo), "general-settings": sIs, ... }`，
  其中 `HDo` 是 `async function HDo()`，`sIs` 是 `vQ(async () => ...)` 的别名。
- 26.1016 改成 `{ gateways: M$(...), rosalind: M$(...),
  billing: M$(lUo), "general-settings": eUs, ... }`，首键与包装函数都变了。

脚本会同时识别 `b3` / `vQ` / `M$`，对 `vQ(HDo)`、`M$(lUo)` 与
`general-settings:sIs` 解析别名。26.1016 起不再依赖固定首键：它会扫描所有
`slug:lazy(...)` 候选，回退到外层对象并验证其中至少有 10 个合法 slug，
因此 `gateways` 排到首位时也无需改脚本。

之后**跟随 rolldown shim**：小于 3 KB 的 chunk 若只从一个非框架模块再导出，就递归解析到实体 chunk（跳过 `rolldown-runtime` / `app-initial` / `app-primary`，否则会把运行时误当成实现）。最后对照 `codeRoot` 报告哪些 section 的实现 chunk 没被抽到本地 —— 这个自检很重要，否则文档会引用磁盘上不存在的文件。

### `ctx.mjs` — 字符窗口检索

```powershell
node ctx.mjs <pattern> <fileOrDir>... [--before N] [--after N] [--limit N] [--flags gi] [--ext .js,.css]
```

打包后的代码逻辑行极长，行式 grep 要么吐出几千字符要么丢掉关键上下文。`ctx` 改为打印**命中点前后固定字符数**的窗口（默认 −90/+220），并标注 `文件:行号`。检索 `.work/big/` 里 12 MB 的 `app-initial` 时比 `Select-String` 好用得多。

### `pe-probe.mjs` — 原生二进制身份识别（26.1007 轮加入）

```powershell
node pe-probe.mjs <file.exe>
```

读 PE 头（机器类型 / subsystem / 时间戳 / 特征位）、段表、导入 DLL 列表，并对整个文件做
字面量签名扫描（Go / Rust / MSVC / Swift / Node-V8 / Zig / .NET / 扩展宿主标记）。

**边界：不做反汇编、不含反汇编器、不还原控制流。** 它只回答"这是什么、用什么写的、
链了哪些库"，不回答"它怎么工作"。产出的"命中"对短模式（`swift_` / `cef`）有假阳性，
报告里要把假阳性标出来，别当成证据。

典型用途与判读：`WS2_32` + `WSADuplicateSocketW` 说明它做 TCP 且会把 socket 复用给别的进程；
`rustc/<40hex>` 是编译它的 rustc commit；`library\std\src\...` 与 `src\<项目文件>.rs\u0000`
混在一起说明**符号没被剥**，项目自身的文件名会直接漏出来——这是识别"谁写的"最省事的入口。
样例见 `browser-extension.md` §6.4（`extension-host.exe`）。

## 约定

- 所有工具都支持 `--help` 式的用法输出（无参数运行 `asar-cli.mjs` / `ctx.mjs` 会打印文件头注释）。
- 路径参数一律接受正斜杠；Windows 上 `URL.pathname` 需要 `.replace(/^\/([A-Za-z]:)/, "$1")` 还原盘符（`extract-modules.mjs` 里已处理）。
- **在 PowerShell 里给这些脚本打补丁时，务必把补丁写成 here-string 文件再 `node patch.mjs`**。`node -e "...\"..."` 里的转义会被 PowerShell 反复吃掉，这个坑在本次分析中踩了四次。

## 26.1103 Rspack 专项脚本

> 26.1103 的渲染层从 Vite/rolldown 换成 **Rspack**：没有 `settings-*.js` 这类可读
> chunk 名，异步 chunk 全部是 `webview/assets/async/<数字 id>.<hash>.js`。
> `module-map.json` 与 `extract-modules.mjs` 的命名规则在这一版失效，
> 因此新增了下面这条「runtime 映射 → i18n 命名空间聚类 → 抽取计划」的链路。
>
> 这些脚本把 **archive 路径与输出根写死在文件顶部**（`26.1103.4239.0`、`code/app-261103`），
> 换机器或换版本时先改常量。它们都只读 asar。

| 脚本 | 作用 |
| --- | --- |
| `chunkmap.mjs` | 从 runtime chunk `348410.*.js` 里解析 `p.u`（JS）与 `p.miniCssF`（CSS）映射，产出 `.work/chunk-map.json`；再对照 inventory 检查映射目标是否存在。26.1103 解析出 **9,326 个 JS / 1,567 个 CSS** id，其中 1 个 JS 映射文件在清单中不存在（已知局限）。 |
| `scan-messages.mjs` | 扫描 `webview/assets/` 下全部 JS 的 react-intl 描述符，产出逐 chunk 汇总与全局 i18n 目录。26.1103 扫描 9,388 文件 / 495.5 MB，得到 **57,004 条 / 7,909 组**。 |
| `cluster.mjs` | 按 **i18n 命名空间正则**（而不是文件名）给数字 chunk 聚类，产出 `.work/chunk-modules-261103.json`。learning / business / enterprise-trust 等模块就是这样定出来的。 |
| `plan.mjs` | 按模块设文件数与字节上限，并强制加入人工确认过的高信号 chunk，产出 `.work/extract-plan.json`。 |
| `extract-plan.mjs [plan.json]` | 按计划抽取并格式化：≤800 KB 走 Prettier，>800 KB 走 `lightformat`；写 `_INDEX.json` / `_MODULE_INDEX.json`。只删除计划外的 `.js/.css`，保留 `README.md` / `_CATALOG.json` / `_*_MAP.json`。默认读 `.work/extract-plan.json`，也可显式传 `code/_plan/plan-261103.json`。 |
| `settings-map-261103.mjs` | 解析 `499225`（53 个 slug 描述符）、`405910`（4 个导航组）、`324957`（capability 门控与 `allowed_on_web`），产出 `settings/_SETTINGS_MAP.json`。 |
| `settings-chunks.mjs` | 把每个设置 slug 映射到承载其文案最多的 chunk，产出 `settings/_SETTINGS_CHUNKS.json`。 |
| `search.mjs <regex>` | 对全 asar 的 JS 做**字符窗口**检索（默认 −160/+420），替代对单行 bundle 无效的 `rg -n`。 |
| `fmt.mjs <in> <out>` | 一次性 Prettier 格式化（复用 `desktop_app/node_modules/prettier`，绝对路径按机器修改）。 |
| `dup.mjs` | 检查 `code/app-261103/` 下是否有同名 chunk 落在两个目录。自检用。 |

**已知边界**：`cluster.mjs` 的规则是启发式，一个 chunk 若同时命中多个命名空间，
只归给得分最高的模块；共享组件因此可能落在 `misc` 或被重复引用。抽取的是
**代表性 chunk**（172 个 webview chunk），不是 9,326 个全量。
