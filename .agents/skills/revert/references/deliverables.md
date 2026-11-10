# 产出约定

一次完整的逆向分析应该产出**两类东西**：可复核的代码（`code/`）与有证据分级的文档（`*.md`）。
参考实现：`codex_app_rev/`。

---

## 1. 目录布局

```
<分析目录>/                        例：codex_app_rev/
├── README.md                     ★ 入口：版本、范围、结论摘要、文档索引、证据等级、已知局限
├── manifest.json                 ★ 机器可读：包身份、hash、路径、抽取范围、采集边界
├── installation.md                 包身份 / 能力 / 防火墙 / 目录树 / 校验和 / 用户数据目录
├── architecture.md                 分层、进程与窗口模型、技术栈、通信链路、数据目录
├── ipc-protocol.md                 preload 桥 + IPC 频道 + RPC 方法全集
├── <界面区域>.md                   每个用户关心的区域一篇（对话区/输入框/侧栏/导航/设置…）
├── ui-style.md                     设计 token、排版、组件视觉与交互风格
├── changelog-<version>.md          与上一版的差异（有基线才写）
├── evidence.md                   ★ 证据等级、bundle 路径索引、关键字符串、可复核命令
└── code/
    ├── README.md                 ★ 目录结构、命名约定、未抽取的部分、重新生成步骤
    ├── _MODULE_INDEX.json          模块汇总 + shared_external_refs + totals
    ├── _catalog/
    │   └── i18n-messages.json    ★ 全局文案目录（含 description）
    ├── tools/                      本次运行的工具**冻结快照** + README
    ├── <module>/
    │   ├── README.md             ★ 模块功能说明
    │   ├── _INDEX.json             每 chunk 的来源/大小/sha256/选中原因
    │   ├── _CATALOG.json           模块字符串目录
    │   ├── _<X>_MAP.json           该模块的注册表（若有）
    │   └── <subdir>/*.js|*.css     格式化后的代码
    └── ...
```

**入库 vs 不入库**：

| 入库                                            | 不入库（放 `.work/`，靠 `.gitignore` 的 `.*/` 规则忽略） |
| ----------------------------------------------- | -------------------------------------------------------- |
| 模块 chunk（格式化后）                          | 共享大 bundle 的 light-format 产物（`big/`）             |
| `_INDEX.json` / `_CATALOG.json` / `_*_MAP.json` | 字面量明细（`literals/`）                                |
| `_catalog/i18n-messages.json`                   | distill 降噪产物（`distill/`）                           |
| `inventory.json`（diff 基线，**建议入库**）     | 一次性补丁脚本（`patch*.mjs`）                           |
| `code/tools/` 冻结快照                          | 冒烟测试临时目录                                         |

判断标准：**读者复核结论时需要它 → 入库；只是我分析时的脚手架 → 不入库**。
`inventory.json` 是唯一例外 —— 它体积不大（~1 MB）且是下次 diff 的唯一基线，值得入库。

## 2. 命名约定

- **保留原始文件名（含 content hash）**：`local-conversation-thread-a2bcd054c9d2.js`。
  hash 是版本证据；改名会丢掉可追溯性。
- 模块目录用小写连字符（`side-panel`、`left-nav`、`main-process`）。
- 子目录按职责分（`conversation/{thread,turn,scroll,pages,markdown,nav-rail}`）。
- `_deps/` 专放"闭包依赖"——不是按名命中、而是被某个命中 chunk import 进来的共享组件。
- 元数据文件一律 `_` 前缀 + 大写：`_INDEX.json`、`_CATALOG.json`、`_MODULE_INDEX.json`、`_SETTINGS_MAP.json`。
- 文档用英文小写连字符：`side-panel.md`、`settings-pages.md`；带版本的用 `changelog-<version>.md`。

## 3. `_INDEX.json` 字段

```jsonc
{
  "module": "conversation",
  "generated_at": "2026-09-11T11:51:43.632Z",
  "source_archive": "C:\\...\\app.asar",
  "app_version": "26.903.71938",
  "files": [{
    "archive_path": "webview/assets/thread-virtualizer-4f61d89b50be.js",  // asar 内完整路径
    "file": "scroll/thread-virtualizer-4f61d89b50be.js",                  // 模块内相对路径
    "selected_by": "rule" | "path:.vite/build/" | "closure:d1:<来源chunk>",
    "raw_bytes": 2043,
    "formatted_bytes": 2618,
    "formatter": "prettier" | "light" | "failed",
    "sha256_raw": "..."                                                    // 原始字节哈希
  }]
}
```

`selected_by` 是关键：它让读者知道**为什么这个文件在这里**，以及顺着哪个 chunk 能找到上下文。

## 4. 证据分级

每篇文档开头或 `evidence.md` 里定义三级，正文中按需标注：

| 级    | 定义                                                               | 例                                          |
| ----- | ------------------------------------------------------------------ | ------------------------------------------- |
| **A** | 安装包直接证据：资源名、字符串字面量、i18n `description`、静态逻辑 | `thread.sidePanel.diffTab = "Review"`       |
| **B** | 本仓库源码证据（做行为对照时）                                     | `AgentConversationPanel.tsx:459 queue 轮询` |
| **C** | 结构推断：由命名、组件边界、状态组合推断                           | "Popcorn 面板应能回写 Office 文件"          |

**规则**：

1. C 级必须在正文里显式标注，不能和 A 级混写；
2. B 级要写文件路径 + 行号，并注明"以某日工作树为准，行号可能漂移"；
3. 一篇文档里 A/B/C 混用时，给一张"结论 → 等级 → 依据"映射表（见 `codex_app_rev/evidence.md` §6）。

## 5. 必须写进文档的限定语

这几条不是客套，是**避免误导读者**：

```markdown
> 未做运行时插桩。所有结论来自静态分析；feature flag 与账号态会改变实际可见的界面，
> 文档中标注的"可见性"是代码里的判定条件，不等于当前账号下一定能看到。

> 生产包不含 sourcemap，函数/变量名已被压缩。本文中的"去压缩"命名（如 buildLayout）
> 是按语义重命名，不是原始名。

> 文件关联只说明"双击这类文件可以打开本 app"，不能据此推断 app 会自动上传或解析所有关联文件。

> 本次分析只读取了目录名、文件名与大小，没有打开 settings.dat、任何 .sqlite、
> auth.json、日志正文或会话缓存。

> 共享 bundle（app-initial / app-primary）未入库，需要时按 code/README.md 的步骤重新生成。
```

## 6. "已知局限"章节

README 里必须有，且要写**具体的**局限，不要写套话。有价值的局限长这样：

- 上一版基线太薄（只记了 20 个 chunk 名），所以"新增功能"一节只能说明"上次未记录"；
- 共享 bundle 未入库，读者要自行生成才能复核路由表；
- B 级证据的行号可能已漂移；
- 某个能力在当前 build 是禁用桩（`return !1`），无法确认其真实行为；
- 某个结论依赖 feature flag，无法静态确定默认值。

**写出局限比假装完整更有用** —— 下一个接手的人（包括未来的你）才知道哪里不能信。

## 7. 可复核命令

`evidence.md` 末尾给一段**能直接粘贴运行**的命令，覆盖：

```powershell
# 0. 包身份
Get-AppxPackage -Name <Name> | Select Name, Version, InstallLocation, PackageFamilyName
# 1. 校验和
Get-FileHash "<...>\app.asar","<...>\<runtime>.exe","<...>\AppxManifest.xml" -Algorithm SHA256
# 2. 结构盘点
node scripts/inventory.mjs $A "$W/inventory.json"
node scripts/asar-cli.mjs tree $A --depth 2
# 3. 全量抽取（可重跑）
node scripts/extract-modules.mjs $A $O --jobs 8 --max-beautify-bytes 1200000
# 4. 注册表 + 自检
node scripts/registry-hunt.example.mjs $A $O "$O/settings/_SETTINGS_MAP.json"
# 5. 定向核对某条结论
node scripts/ctx.mjs "<关键字符串>" "$W/big" --after 400
rg -n "<标识符>" "$O/<module>"
# 6. 仓库侧对照（B 级）
rg -n "<字段名>" <repo>/<path>
```

每条命令都要注明它是只读的。**采集过程中不得对安装目录执行写操作**，这句话要明写。

## 8. 文档写作要点

从 `codex_app_rev/` 的实践里总结：

1. **表格优于散文**。注册表、字段清单、常量表、文案对照，一律用表格。
   读者是来查东西的，不是来读文章的。
2. **原文照抄关键字符串**，用代码块，不翻译。`Submit without interrupting the model`
   比"提交时不打断模型"更有证据力 —— 读者可以自己 grep 验证。
3. **每个断言给出处**。`（见 code/conversation/scroll/thread-virtualizer-*.js）`
   或 `（app-initial L334600）`。行号会漂移，所以要同时给可 grep 的锚点字符串。
4. **画出层次**。ASCII 图比文字描述布局有效得多（见 `side-panel.md` §1 的三向 pane 图）。
5. **区分"代码里有"和"用户能看到"**。10 个隐藏的设置页要明说是隐藏的。
6. **写"为什么这样设计"**。例如"选择距底部而非 scrollTop 作为坐标系，
   是因为流式输出会不断改变总高度，底部锚定能让视口天然跟随最新内容" ——
   这种解释比罗列字段有价值。
7. **交叉引用**。文档之间用相对链接互相指，最后跑一遍链接可达性检查（workflow 阶段 8）。
8. **中文文档里保留英文原文**。术语、字符串、标识符一律不翻译，
   只翻译解释性文字。混排时中英文之间留空格。

## 9. 交付前自检清单

```
□ 文档内相对链接全部可达（写个脚本遍历 ](path) 并 existsSync）
□ 无重复 chunk（同名 .js/.css 不应出现在两个子目录）
□ 文档里的数字与 _MODULE_INDEX.json / _CATALOG.json 一致（chunk 数、MB、文案条数）
□ 注册表脚本的 resolved_chunks_not_extracted 为空
□ 所有工具 node --check 通过，且至少各跑一次冒烟
□ manifest.json 的 hash 是本机实算的，不是抄来的
□ README 的文档索引覆盖所有 .md，无孤儿文档
□ 采集边界声明在 README 和 evidence.md 里都有
□ .work/ 确认被 gitignore（git check-ignore -v <path>）
□ inventory.json 已入库（下次的 diff 基线）
```
