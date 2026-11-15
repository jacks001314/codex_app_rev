# Codex 26.1106 全量快照代码

> 来源：本机 MSIX `OpenAI.Codex 26.1106.6628.0`（应用版本 `26.1106.51428`，build `26605`），
> 只读抽取自 `app\resources\app.asar`（772,825,694 B）。采集日 2026-11-15。
> 生产包不含 sourcemap；以下所有函数/变量名均已被压缩，README 与文档中的语义化名称不是原始名。

## 1. 这一版和 26.1103 的关系

打包器、入口与目录结构完全一致，仍是 **Rspack**：

- 入口：`webview/index.html` 的四个 chunk
  `782259.*.js`、`727403.*.js`（React 19.2.7）、`158624.*.js`、`348410.*.js`（runtime）；
- 异步 chunk：`webview/assets/async/<id>.<hash>.js`，由 runtime 的
  `p.u=e=>"assets/async/"+e+"."+({...})[e]+".js"` 映射；
- CSS 由 `p.miniCssF` 映射到 `assets/async/<hash>.css`；
- 每个 chunk 自带 `__rspack_esm_ids` 与 `__webpack_modules__`。

本版只改产品面，没有架构迁移。模块划分仍按 **i18n 命名空间**聚类；数字 chunk id
每周会重排（26.1103 的 `394872` 在本版变成 `951361`），所以**不要用 chunk id 做跨版本 diff**。
全量 async 条目（13,584 个 / 509.1 MiB）没有入库。

## 2. 模块与体积

| 模块 | 文件 | raw MB | formatted MB |
| --- | ---: | ---: | ---: |
| main-process | 29 | 11.95 | 17.75 |
| learning | 17 | 7.39 | 9.97 |
| settings | 26 | 3.81 | 6.83 |
| conversation | 14 | 3.58 | 6.26 |
| business | 14 | 3.05 | 4.70 |
| spaces | 13 | 2.93 | 4.73 |
| chatgpt-surfaces | 12 | 2.03 | 3.52 |
| left-nav | 11 | 1.95 | 3.18 |
| enterprise-trust | 13 | 1.89 | 3.32 |
| composer | 11 | 1.81 | 3.38 |
| editors | 7 | 1.36 | 2.27 |
| plugins | 10 | 1.10 | 2.07 |
| workspace-agents | 9 | 1.08 | 1.86 |
| misc | 9 | 0.98 | 1.77 |
| app-shell | 8 | 0.84 | 1.35 |
| image-editing | 8 | 0.76 | 1.41 |
| writing | 6 | 0.46 | 0.86 |
| voice | 5 | 0.19 | 0.36 |
| codex-micro | 2 | 0.13 | 0.20 |

合计 **224 个文件 / raw 47.3 MiB / formatted 75.8 MiB**（含主进程 29 个
`.vite/build/*.js`，其余 195 个为 webview chunk）。逐模块精确值见 `_MODULE_INDEX.json`。

本版新增模块 **`image-editing`**（图片文字编辑，见
[changelog-26.1106.md](../../changelog-26.1106.md) §4.1）；`learning` 增加 Level Up 提示目录。

每个模块目录包含：

- `_INDEX.json`：`archive_path`、原始大小、sha256、格式化器、选中原因、消息数；
- `_CATALOG.json`：该模块的 i18n 消息、props、import 与字面量统计
  （字面量明细在 `.work/261106/literals-*.json`，不入库）；
- `README.md`：本模块的文件清单与主要命名空间；
- 注册表：`settings/_SETTINGS_MAP.json`、`settings/_SETTINGS_CHUNKS.json`、
  `main-process/_APP_SERVER_METHODS.json`、`main-process/_IPC_CHANNELS.json`、
  `main-process/_COMMAND_TABLE.json`、`app-shell/_ROUTES.json`。

## 3. 全局文案

`_catalog/i18n-messages.json` 是本版全量英文文案目录：

| 指标 | 26.1103 | 26.1106 |
| --- | ---: | ---: |
| 消息条数 | 57,004 | **57,893** |
| 分组数 | 7,909 | **8,202** |
| 扫描文件 | 9,388 JS / 495.5 MiB | 9,466 JS / 505.9 MiB |
| 含消息的 chunk | 3,210 | 3,253 |

本次新增 1,342、移除 453、改写 70。新增最多的是 `gptBuilder.actions`（62）、
`learningHub.cards`（51）、`workspace-plugins.*`（82）、`plugins.editor`（39）、
`businessProfiles.adAccounts`（36）、`browser.bookmarks`（28）与
分散在 50 多个子组的 `imageTextEditing.*`（160）。

> 注意：asar 里还有 **65 个语言包 chunk（282.4 MiB / 57 种语言）**，
> 它们是纯 `id → 译文` 映射，不属于英文 descriptor，也没有 `defaultMessage`。
> 旧功能（如已撤下的 `settings.biometric`）的译文会滞留，不能当作功能存在的证据。

## 4. 未入库内容

- 其余约 13,300 个 async chunk（vendor、locale、可视化、媒体）；
- 601 个 CSS（14.3 MiB）、960 个 webp、715 个 png、38 个 wasm；
- `orbit-character-*` 运行时与贴图、`workers/worker.*.js`；
- `node_modules/`（约 770 文件）与原生 `.node`；
- 共享大 chunk（本版最大 `739301.37a39f26d6.js`，8.46 MB）只做了定向检索。

## 5. 重新生成

工具快照见 [`../tools/README.md`](../tools/README.md)（26.1106 脚本见其
「Rspack 专项脚本」一节）。核心步骤：

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1106.6628.0_x64__2p2nqsd0c76g0\app\resources\app.asar"

# 1. 全量清单（diff 基线）
node ..\tools\inventory.mjs $A ..\..\inventories\inventory-261106.json

# 2. Rspack chunk 表 + 扫描 i18n + 聚类
node ..\tools\chunkmap-261106.mjs
node ..\tools\scan-messages-261106.mjs
node ..\tools\cluster-261106.mjs

# 3. 生成抽取计划并抽取（Prettier <=800 KB，其余 lightformat）
node ..\tools\plan-261106.mjs
node ..\tools\extract-plan-261106.mjs ..\..\_plan\plan-261106.json

# 4. 注册表
node ..\tools\settings-map-261106.mjs
node ..\tools\commands-261106.mjs
node ..\tools\ipc-channels-261106.mjs
node ..\tools\routes-261106.mjs
```

脚本里的 archive 路径按本次执行位置固定；换机器时改文件顶部常量。
`extract-plan-261106.mjs` 对模块目录只删除“不在当前计划内”的 `.js/.css`，
保留 `README.md` / `_INDEX.json` / `_CATALOG.json` / `_*_MAP.json`。

## 6. 边界

> 本次只读安装目录，未写入 `C:\Program Files\WindowsApps`，未读取
> `auth.json`、`settings.dat`、任何 `.sqlite`、日志正文或会话缓存。
> 未做运行时插桩；文档中的“可见”是代码判定条件，不等于当前账号一定可见。
