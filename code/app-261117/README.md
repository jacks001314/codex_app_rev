# Codex 26.1117 全量快照代码

> 来源：本机 MSIX `OpenAI.Codex 26.1117.4957.0`（应用版本 `26.1117.41037`，build `29803`），
> 只读抽取自 `app\resources\app.asar`（443,800,006 B）。采集日 2026-11-24。
> 生产包不含 sourcemap；以下所有函数/变量名均已被压缩，README 与文档中的语义化名称不是原始名。

## 1. 这一版和 26.1106 的关系

仍是 **Rspack**，入口与 chunk 命名规则不变：

- `webview/index.html` 加载 6 个入口 chunk（`883398`、`203305`、`762515`、`727403`、
  `356023`、`348410`）；
- 异步 chunk：`webview/assets/async/<id>.<hash>.js`，由 runtime 的
  `p.u=e=>"assets/async/"+e+"."+({...})[e]+".js"` 映射；
- CSS 由 `p.miniCssF` 映射到 `assets/async/<hash>.css`；
- 每个 chunk 自带 `__rspack_esm_ids` 与 `__webpack_modules__`。

但**产物体积结构变了**：语言包不再是 JS chunk，而是
`webview/assets/locales/*.json.codex-gzip`（68 个 / 35.2 MB）；渲染 JS 从 520.6 MB
降到 225.6 MB；同时大多数 i18n `description` 被构建裁掉。详见
[changelog-26.1117.md](../../changelog-26.1117.md) §2。

本版仍按 **i18n 命名空间**聚类；数字 chunk id 每周重排，**不要用 chunk id 做跨版本 diff**。
全量 async 条目（9,577 个 / 203.8 MiB）没有入库。

## 2. 模块与体积

| 模块 | 文件 | raw MB | formatted MB |
| --- | ---: | ---: | ---: |
| main-process | 42 | 17.61 | 25.37 |
| learning | 17 | 7.69 | 10.29 |
| settings | 28 | 5.51 | 8.89 |
| conversation | 19 | 4.54 | 8.24 |
| business | 15 | 3.74 | 6.35 |
| chatgpt-surfaces | 17 | 3.06 | 5.51 |
| spaces | 13 | 3.02 | 4.97 |
| left-nav | 11 | 2.05 | 3.27 |
| enterprise-trust | 14 | 1.88 | 3.36 |
| composer | 11 | 1.70 | 3.17 |
| editors | 9 | 1.57 | 2.63 |
| workspace-agents | 10 | 1.14 | 1.99 |
| plugins | 11 | 1.09 | 2.04 |
| profile | 8 | 1.03 | 1.77 |
| app-shell | 15 | 1.37 | 2.21 |
| image-editing | 8 | 0.74 | 1.42 |
| writing | 6 | 0.44 | 0.84 |
| misc | 10 | 0.41 | 0.75 |
| voice | 5 | 0.17 | 0.32 |
| mobile | 1 | 0.14 | 0.22 |
| codex-micro | 2 | 0.12 | 0.19 |

合计 **272 个文件 / raw 59.0 MiB / formatted 93.8 MiB**（含主进程 42 个
`.vite/build/*.js`、app-shell 的 6 个入口 chunk，其余 224 个为 async webview chunk）。逐模块精确值见 `_MODULE_INDEX.json`。

本版新增模块：

- **`profile`**：`codex.projectAppearance`、贴纸/showcase/活动、emoji 与 symbol picker；
- **`mobile`**：`codexMobile.*` 的配对/设置页（只有 1 个 chunk，因为相关包体集中在共享 bundle）。

模块归类时补入了若干此前落在 `misc` 的命名空间（`codex.mcpTool`、`codex.localConversation`、
`codex.visualization`、`chatgptFilePreview.*`、`artifactTab.*`、`beacons.*`、
`connectedApps.*`、`externalAgentConfig.*`、`threadWorkspace.*`、`shareDialog.*`、
`projectSetup.*` 等），所以 `misc` 从 9 个文件缩到 10 个文件但覆盖更窄。

每个模块目录包含：

- `README.md`：该模块的文件清单、文案命名空间分布与保留下来的 `description` 节选；
- `_INDEX.json`：`archive_path`、原始大小、sha256、格式化器、选中原因、消息数；
- `_CATALOG.json`：该模块的 i18n 消息、props、import 与字面量统计
  （字面量明细在 `.work/261117/literals-*.json`，不入库）；
- 注册表：`settings/_SETTINGS_MAP.json`、`settings/_SETTINGS_CHUNKS.json`、
  `main-process/_APP_SERVER_METHODS.json`、`main-process/_IPC_CHANNELS.json`、
  `main-process/_COMMAND_TABLE.json`、`app-shell/_ROUTES.json`。

## 3. 全局文案

`_catalog/i18n-messages.json` 是本版全量英文文案目录：

| 指标 | 26.1106 | 26.1117 |
| --- | ---: | ---: |
| 消息条数 | 57,893 | **59,872** |
| 分组数 | 8,202 | **8,462** |
| 扫描文件 | 9,466 JS / 505.9 MiB | **9,599 JS / 206.5 MiB** |
| 带 `description` | 36,878 | **3,508** |

新增 3,162、移除 1,183、同 id 文案改写 268。新增集中在
`ads_manager.tools`(118)、`businessProfiles.feeds`(89)、`codex.pages`(66)、
`codex.joinApproval`(64)、`Hermes.GptStudio`(63)、`businessProfiles.adAccounts`(60)、
`maps.restaurants`(43)、`browser.bookmarks`(40)、`orbit.onboarding`(39)、
`veterans.promotion`(35)、`settings.gateways`(31)、`classroom.*`(51)。

> 本版生产构建几乎不携带 `description`。要引用开发者意图，只能对**未变化**的 id
> 回溯 `code/app-261106/_catalog/i18n-messages.json`，并标注为 26.1106 证据（B）。
> 65 个语言包已改为 gzip，旧 id 的译文仍可能滞留，不能当作功能存在的证据。

## 4. 未入库内容

- 其余约 9,300 个 async chunk（locale、vendor、可视化、媒体）；
- 600 个 CSS（14.7 MB）、784 个 png、53 个 webp、37 个 wasm；
- `orbit-character-*` 运行时与贴图、`workers/worker.*.js`；
- `node_modules/` 与原生 `.node`；
- 共享大 chunk（本版最大 `911644.eaf037cac0.js`，8.36 MB）只做了定向检索。

## 5. 重新生成

工具快照见 [`../tools/README.md`](../tools/README.md)（26.1117 脚本以 `*-261117.mjs` 结尾）。
核心步骤：

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1117.4957.0_x64__2p2nqsd0c76g0\app\resources\app.asar"

# 1. 全量清单（diff 基线）
node ..\tools\inventory.mjs $A ..\..\inventories\inventory-261117.json

# 2. Rspack chunk 表 + 扫描 i18n + 聚类
node ..\tools\chunkmap-261117.mjs
node ..\tools\scan-messages-261117.mjs
node ..\tools\cluster-261117.mjs

# 3. 生成抽取计划并抽取（Prettier <=800 KB，其余 lightformat）
node ..\tools\plan-261117.mjs
node ..\tools\extract-plan-261117.mjs
node ..\tools\extract-resume-261117.mjs   # 补抽 mandatory 但无 i18n 的 chunk

# 4. 注册表
node ..\tools\settings-map-261117.mjs
node ..\tools\commands-261117.mjs
node ..\tools\ipc-channels-261117.mjs
node ..\tools\methods-261117.mjs
node ..\tools\routes-261117.mjs
node ..\tools\manifest-261117.mjs

# 5. 每模块 README（文件清单 + 文案命名空间 + description 节选）
node ..\tools\mod-readme-261117.mjs
```

`extract-plan-261117.mjs` 对模块目录只删除“不在当前计划内”的 `.js/.css`，
保留 `README.md` / `_INDEX.json` / `_CATALOG.json` / `_*_MAP.json`。
`plan-261117.mjs` 对 mandatory chunk 会回退到 inventory，避免“无 i18n 的注册表 chunk”被漏掉。

## 6. 边界

> 本次只读安装目录，未写入 `C:\Program Files\WindowsApps`，未读取
> `auth.json`、`settings.dat`、任何 `.sqlite`、日志正文或会话缓存。
> 未做运行时插桩；文档中的“可见”是代码判定条件，不等于当前账号一定可见。

