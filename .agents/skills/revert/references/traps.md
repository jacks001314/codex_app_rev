# 踩坑清单

全部是实际踩过的，每条给出**症状 → 原因 → 修法**。按类别排。

---

## A. Shell 与环境

### A1. PowerShell 吃掉 `node -e` 里的转义 ★必踩

**症状**：`Invalid string escape` / `Expression expected` / `Missing property name after reference operator`，
指向一段看起来完全合法的 JS。

**原因**：`node -e "..."` 里的 `\"`、反引号、`$` 会被 PowerShell 先解析一遍。
反引号在 PowerShell 里是转义符，`$` 触发插值，`\"` 的配对规则与 JS 不同。

**修法**：**凡是超过一行的分析或补丁脚本，一律写文件再执行**。用单引号 here-string，
它是完全字面的，不做任何插值：

```powershell
$w = "<repo>\<分析目录>\.work"
$s = @'   # 单引号 here-string 开始
import fs from "node:fs";
// ... 任意 JS，可自由使用双引号、反引号、美元符、反斜杠
   '@    # 结束标记；真实脚本里必须顶格，此处缩进只为避开本文档自身的 here-string
Set-Content -Path "$w\patch.mjs" -Value $s -Encoding utf8
node "$w\patch.mjs"
```

**唯一禁忌**：内容里出现顶格的结束标记（单引号紧跟 at 符号）。写文档或生成脚本时
若需要展示它，必须缩进或改写，否则外层 here-string 会在那里提前结束 ——
而且 PowerShell 在**解析期**就报错，报错行号指向被误解析的正文，非常有迷惑性
（本文件就是因为这个连失败两次）。

`node -e` 只在**不含引号嵌套、不含反引号、不含美元符**的极短命令里用。

### A1b. here-string 写出的文件是 LF，多行字符串锚点会失配

**症状**：补丁脚本报告 anchor missing，但目标文本肉眼看上去一模一样。

**原因**：`Set-Content` **不会**把 here-string 里的 LF 转成 CRLF —— 它按原样写。
而从工具调用传入的 here-string 内容是 LF 的，于是写出的文件是 LF（或混合）。
补丁脚本里若用 `.join("\r\n")` 构造多行锚点，就永远匹配不上。
实测一个文件里是 `CRLF 1 / bare LF 67` —— 混合ending，连 `s.includes("\r\n")` 这种
EOL 探测都会给出误导性的答案。

**修法**（按可靠度排序）：

1. **按行索引打补丁**，不要按多行字符串匹配：
   ```js
   const L = raw.split(/\r?\n/); // 归一化读取
   const i = L.findIndex((l) => l.startsWith("# 2. 准备分类规则"));
   L[i + 1] = "新内容";
   fs.writeFileSync(p, L.join(nl)); // nl 从原文件探测
   ```
2. 单行锚点用 `s.includes(单行)` + `s.replace(单行, 新单行)`，不涉及 EOL；
3. 必须用多行锚点时，先打印 `(raw.match(/\r\n/g)||[]).length` 与
   `(raw.match(/(?<!\r)\n/g)||[]).length` 确认到底是哪种，再决定 join 的分隔符。

调试技巧：`console.log(String(i+1).padStart(3)+': '+JSON.stringify(L[i]))`
能把不可见字符暴露出来，比肉眼看文件快得多。

### A2. PowerShell 先整体解析再执行

**症状**：脚本里第一条 `Set-Content` 明明在报错行之前，但文件根本没被写出来。

**原因**：PowerShell 把整个 `-Command` 字符串**解析完**才执行。任何一处语法错
（哪怕在最后一行）都会导致**全部**语句不执行。

**修法**：把"写文件"和"用文件"拆成两次 `exec`，或写完后立刻 `Test-Path` 验证。
不要因为看到前面的输出就假定前面的语句跑了。

### A3. `Remove-Item -Recurse -Force` 被沙箱策略拦截

**症状**：`Rejected(... blocked by policy)`，整条命令不执行。

**原因**：对**计算出来的路径**做递归删除属于高危操作，会被策略拦。

**修法**：先列出要删的东西，再用 `-LiteralPath` 逐个删已知文件，最后删空目录：

```powershell
Get-ChildItem -LiteralPath $dir -Recurse -Force | Select-Object FullName   # 先看清楚
Remove-Item -LiteralPath "$dir\known-file.json"
Remove-Item -LiteralPath $dir                                             # 目录已空，不需要 -Recurse
```

工具本身也应避免"清空输出目录"这种设计；`extract-modules.mjs` 用的是
**按 plan 精确删除陈旧 `.js`/`.css`**，而不是递归强删。

### A4. `console.table` 的输出被 PowerShell 截断/换行

**症状**：想解析 `asar-cli.mjs ls` 的输出，结果只拿到 48 条（实际 9035 条），
因为表格被控制台宽度折行了。

**修法**：**不要解析人类可读输出**。需要数据就让工具直接写 JSON
（`inventory.mjs` 存在的唯一理由就是这个）。

### A5. `rg` 默认不支持 look-around

**症状**：`error: look-around, including look-ahead and look-behind, is not supported`。

**修法**：加 `-P`（PCRE2），或改写正则避开前瞻/后顾断言。
Windows 上若 `rg` 不在 PATH，Codex 安装目录里就带了一个：`app\resources\rg.exe`。

---

## B. 打包产物本身

### B1. 生产包不含 sourcemap ★

**症状**：每个 chunk 末尾都有 `//# sourceMappingURL=x.js.map`，但档案里 `.map` 条目数为 **0**。

**结论**：标识符永久丢失。不要花时间找 map、不要指望还原原名。
把精力转向**字符串字面量**（见 SKILL.md 的核心认知）。

### B2. i18n 的 id 会与文案矛盾 ★

**实例**：

```js
id: "settings.general.followUpQueueMode.interrupt"   // id 说 interrupt
defaultMessage: "Steer"                              // 文案说 Steer
description: "Option label for applying a follow-up message to the active Codex run
              instead of queuing it"                 // 真相：不打断
```

**修法**：**永远以 `description` 为准**，`defaultMessage` 次之，`id` 只当命名空间用。
凡是只按 id 关键字做的推断（包括自己以前写的文档）都要重新核。

### B3. chunk 名的 content hash 每次都变

**症状**：升级后按旧文件名找不到文件；或误以为某个 chunk 被删了。

**修法**：

1. 分类规则匹配**去掉 hash 的 stem**（`^general-settings` 而非全名）；
2. 落盘时**保留原始文件名**（含 hash），hash 本身就是版本证据；
3. 在 `_INDEX.json` 里同时记 `archive_path` 与 `sha256_raw`，让对照可以自动化。

### B4. 同一个 stem 常有多个实体

**实例**（Codex 26.903）：

```
general-settings-5a1b38565b24.js        0.1 KB   rolldown 再导出 shim
general-settings-9d83727e851d.js        114 KB   真正实现
thread-scroll-layout-4583603e4217.js     18 KB   JS
thread-scroll-layout-26a32b412ec3.css  1.7 KB   同名 CSS
thread-app-shell-chrome-86fff7ba1590.js   0 KB   shim
thread-app-shell-chrome-a031dfbe4962.js  81 KB   实现
```

做版本 diff 时若只按 stem 分组，会把"JS + CSS"或"shim + 实现"误报成"一个变成了两个"。
**必须按扩展名和体积分别处理。**

### B5. 0 字节 shim 会骗过"按名找实现"

**修法**：解析 shim 要**递归**，且**跳过每个 chunk 都会 import 的框架模块**：

```js
function resolve(name, seen = new Set()) {
  if (!name || seen.has(name)) return name;
  seen.add(name);
  const node = ar.stat(ASSETS + name);
  if (!node) return null;
  if (Number(node.size) > 3000) return name; // 有实体内容，停
  const src = ar.readText(ASSETS + name) ?? "";
  const froms = [...src.matchAll(/from\s*"\.\/([^"]+\.js)"/g)]
    .map((x) => x[1])
    .filter((f) => !/^rolldown-runtime-|^app-initial-|^app-primary-/.test(f)); // ★ 关键
  if (froms.length !== 1) return name;
  return resolve(froms[0], seen);
}
```

少了那个 `filter`，`appearance-settings` 会被解析成 `rolldown-runtime-*.js`
（因为 shim 里第一个 `from` 就是运行时），一次得到 9 个完全错误的结论。
`froms.length !== 1` 的判断也很重要：shim 可能同时引运行时和实现，
过滤后剩一个才是可靠的"再导出目标"。

### B6. 巨型 bundle 里的逻辑行长度

**症状**：`app-initial.js` 10 MB，light-format 后仍有单行数千字符；
行式 grep 命中后打印出来完全没法读。

**修法**：用**字符窗口**检索（`scripts/ctx.mjs`），输出 `文件:行号` + 命中点前后固定字符数：

```powershell
node "$SKILL\scripts\ctx.mjs" "followUpQueueMode" "$W\big" --before 120 --after 400
```

### B7. 内联 SVG / Lottie 占掉大部分体积

**症状**：`use-visible-settings-sections.js` 1020 行里 900 行是 SVG path；
侧栏图标 chunk 整个是 Lottie JSON。

**修法**：`scripts/distill.mjs` 折叠它们。**产物只用于阅读，不入库** ——
`code/` 必须保留完整格式化代码，否则就是篡改证据。

顺带一提：Lottie chunk 里的资产名是有信息的
（`260625_CGPT_Icon_Tasks_PJ_20x20` = 交付日期 + 产品 + 图标名 + 设计师代号 + 尺寸），
可以据此还原整套设计资产体系。

---

## C. 工具实现

### C1. Prettier 在多兆字节压缩文件上卡死 / OOM ★

**修法**：体积阈值 + 兜底。

```
≤ 1.2 MB → Prettier（parser 按扩展名选：babel / css / json）
> 1.2 MB → lightformat.mjs（只插入换行与缩进，绝不改写 token）
Prettier 抛错 → 也退回 lightformat
```

light formatter 必须维护足够的词法状态，否则会在这五种东西里断行：
单引号串、双引号串、模板串（含插值嵌套）、行/块注释、正则字面量。
实测 10 MB → 12.3 MB 约 75 秒，可接受。

**parser 一定要按扩展名选**：`.json` 用 `babel` 会失败，然后静默退回 light formatter，
把 JSON 格式化成 JS 风格 —— 结果看着"能用"，很难察觉出错了。

### C2. 正则字面量 vs 除法的歧义

**症状**：light formatter 在 `var re=/[/]{};(;)/;` 处断行，输出被切碎。

**修法**：扫描器遇到 `/` 时判断"这里能不能是正则开头"：前一个有效字符属于
`( , = : [ ! & | ? { } ; + - * % ~ ^ < >` 之一，或尾部关键字属于
`return typeof instanceof in of new delete void throw case do else yield await`。
见 `scripts/lightformat.mjs` 的 `regexAllowed()`。

### C3. 平衡括号扫描要从**调用**括号开始，不是分组括号

**症状**：想把 `(0, x.jsx)("svg", {...})` 整体折叠成 `<SvgIcon/>`，
结果输出成了 `<SvgIcon/>("path", {...})` —— 只吃掉了前半截。

**原因**：`(0, x.jsx)` 本身是一个带括号的表达式，从它开始配对会在**它自己的右括号**处停下。

**修法**：先定位 `)(` 里那个 `(`，从它开始配对：

```js
const groupClose = text.indexOf(")(", m.index);
const callOpen = groupClose + 1; // ★ 不是 m.index + m[0].length - 1
```

正则匹配到的 `m[0]` 结尾是字符串字面量的收尾引号，`length - 1` 指向的是引号而不是括号 ——
差一位，而且差得很隐蔽。

### C4. 提取对象字面量要**向后回溯**找左花括号

**症状**：想抓 `{ billing: lazy(...), "general-settings": lazy(...), ... }` 这张表，
但对象名（`Bjo`）是 build 相关的，每次升级都变，不能写死。

**修法**：锚定**第一个键**，然后 `lastIndexOf("{", at)` 回溯到开括号，再做平衡扫描：

```js
function enclosingObject(src, marker) {
  const at = src.indexOf(marker); // marker = "billing:b3("
  if (at < 0) return null;
  const open = src[at] === "{" ? at : src.lastIndexOf("{", at); // ★ marker 以 { 开头时直接用
  // ...平衡扫描，跳过字符串/模板/注释...
}
```

从 `marker` **向前**找左花括号会找到对象内部第一个嵌套的左花括号，得到完全错误的切片。
这个 bug 的表现是"解析出 0 条记录"，**不报错**，因此很难发现 —— 一定要在脚本里
打印解析条数并和预期对比。

### C4b. 26.1013 的 loader 表换了函数名与写法

26.903 是 `billing:b3(...)`；26.1013 变成：

```js
{ rosalind: vQ(async () => { ... import(`./x.js`) ... }),
  billing: vQ(HDo),
  "general-settings": sIs,
  notifications: vQ(async () => { ... }) }
```

`HDo` 是 `async function HDo()`，`sIs` 是 `vQ(async () => ...)` 的别名。
如果仍只认 `billing:b3(`，结果同样是 **0 个 loader**。

修法：

1. 锚点优先用 `{rosalind:`（marker 自带左花括号，见 C4 的 `src[at] === "{"` 分支）；
2. 同时识别 `b3` / `vQ`；
3. 对 `vQ(HDo)` 解开参数，对 `general-settings:sIs` 解开别名；
4. `extracted` 用 “resolved chunk 或 entry chunk 任一在本地”，否则 shim 会误报缺失。

### C5. 目录聚合统计漏掉扁平档案

**症状**：`asar-cli.mjs tree busy-bar.asar` 输出空表，但 `ls` 明明有 19 个文件。

**原因**：`busy-bar.asar` 的文件全在根目录（`parts.length === 1`），
`for (let i = 1; i < parts.length; i++)` 一次都不执行。

**修法**：给根级文件一个合成桶 `(root)`，其余按祖先目录正常归属。

### C6. 抽取不幂等 → 跨子目录的重复文件

**症状**：改了分类规则重跑后，同一个 chunk 同时出现在 `side-panel/previews/` 和
`side-panel/_deps/`（上一次运行留下的孤儿）。

**修法**：每次运行**先按当前 plan 清理**模块目录下的陈旧 `.js`/`.css`，再写新文件。
清理时必须保留 authored/generated 文件：

```js
if (!/\.(js|css|mjs)$/.test(e.name)) continue;   // README.md / _INDEX.json / _CATALOG.json 一律跳过
if (wanted.has(rel)) continue;                   // 在当前 plan 里的保留
fs.unlinkSync(full);
```

清理完还要删掉变空的子目录。**`--dry-run` 必须先报告将清理多少条**，否则会静默删东西。

自检：跑完后统计同名文件出现次数，必须为 0。

### C7. `_CATALOG.json` 体积失控

**症状**：settings 的 catalog 4.2 MB、main-process 3.7 MB，比代码本身还占地方。

**原因**：字面量表给每条字符串都记了"出现在哪些文件"，而 main-process 有 32009 条字面量。

**修法**：加 `--literals-out <file>` 把字面量明细分流到 `.work`（不入库），
主文件只留 `literal_count`；同时把 messages 的 `files` 数组**截断到 4 条**并另记 `file_count`。
Codex 的 settings catalog 从 4.2 MB 降到 1.3 MB，信息量没损失。

### C8. 不要把整个档案读进内存

309 MB 的 asar 用 `fs.readFileSync` 会直接爆。`AsarArchive` 的所有读取都走
`fs.readSync(fd, buf, offset, length, position)` 定位读，写出用 1 MB 分块。
`walk()` 只遍历 JSON 头部，不碰数据区。

### C9. ASAR 头部偏移

```
off 0   UInt32  size-pickle 的 payload 长度（恒为 4）
off 4   UInt32  header pickle 序列化后的字节数   ← 数据区起点 = 8 + 这个值
off 8   UInt32  header pickle 的 payload 长度
off 12  UInt32  JSON 头字符串长度
off 16  ...     JSON 头（目录树）
```

文件节点：`{ size, offset(字符串，相对数据区), unpacked?, executable?, integrity? }`。
`unpacked: true` 的条目实体在 `<archive>.unpacked/<path>`，`read()` 应返回 `null`
而不是去数据区读（那里没有内容）。

---

## D. 流程与版本

### D1. 升级会毁掉 diff 基线 ★

**实例**：Codex 从 26.901 升到 26.903，MSIX 直接替换了整个
`C:\Program Files\WindowsApps\OpenAI.Codex_<version>_...` 目录。
上一次分析只记录了 20 个 chunk 名，没有全量清单，导致"新增了什么功能"**无法回答**，
只能说"上次未记录"。

**修法**：**每次分析都提交 `inventory.json`**（9035 条，约 1 MB，值得）。
下次升级后一对比就是精确 diff。这是成本最低、收益最高的一条纪律。

### D2. 版本号有多条独立的线

**实例**（Codex）：

| 版本                    | 值                 | 含义                                |
| ----------------------- | ------------------ | ----------------------------------- |
| MSIX Package Version    | `26.903.9818.0`    | 商店包版本                          |
| `package.json` version  | `26.903.71938`     | 应用版本                            |
| `codexBuildNumber`      | `8576`             | 构建号                              |
| `~/.codex/version.json` | `0.154.0`          | **CLI 的更新检查**，与桌面 app 无关 |
| app-server 协议         | `0.143.0-alpha.32` | runtime 协议版本                    |

写文档时必须说清"哪个版本"，否则读者会以为它们是同一个东西。

### D3. 目录 mtime 可能比目录名里的版本新

`OpenAI.Codex_26.903.9818.0_...` 目录名里的版本号和内部文件的 mtime 是两回事。
判断"什么时候更新的"看 mtime，判断"是哪个版本"看 `package.json`。

---

## E. 边界与安全

### E1. 不要打开这些文件

`auth.json`、keychain、任何 token 文件、`*.sqlite`（含 `-wal` / `-shm`）、
`settings.dat`、日志正文、会话/transcript 缓存、`history.jsonl`。

**只允许记录文件名与大小**，并在文档里显式声明这条边界：

```markdown
> 本次分析只读取了目录名、文件名与大小，没有打开 settings.dat、任何 .sqlite、
> auth.json、日志正文或会话缓存，因此不能从这些目录推导账号、历史会话或隐私信息。
```

### E2. 文件关联 ≠ 会自动处理该文件

`AppxManifest.xml` 里声明支持 `.xlsx` / `.docx` 只说明"双击可以打开本 app"。
**不能据此推断 app 会自动上传或解析所有这类文件**。写文档时要加这句限定。

### E3. 能力声明要照抄，不要演绎

`runFullTrust` / `unvirtualizedResources` / 防火墙端口 / COM surrogate CLSID 这些是事实，
直接列出来。但"因此它可以做 X"属于推断，要么标 C 级，要么不写。

### E4. 目标是理解，不是破解

不反汇编 `.exe` / `.node` / `.wasm`（只记名称与大小），不做授权绕过、
许可规避、校验跳过。遇到这类需求应当拒绝并说明边界。
