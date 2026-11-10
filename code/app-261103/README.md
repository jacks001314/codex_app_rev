# Codex 26.1103 全量快照代码

> 来源：本机 MSIX `OpenAI.Codex 26.1103.4239.0`（应用版本 `26.1103.32239`，build `25471`），
> 只读抽取自 `app\resources\app.asar`。采集日 2026-11-09。
> 生产包不含 sourcemap；以下所有函数/变量名均已被压缩，README 与文档中的语义化名称不是原始名。

## 1. 这一版和 26.1016 的根本区别

26.1103 的渲染层已从 **Vite + rolldown** 迁移到 **Rspack**：

```js
export const __rspack_esm_ids=[782259];
export const __webpack_modules__={ac24(e,t,i){...}}
```

因此：

- 没有 `app-initial-*` / `settings-*` / `thread-virtualizer-*` 这类“有意义”的 chunk 名；
- 渲染层入口是 `webview/index.html` 中四个数字 chunk：
  `782259.*.js`、`727403.*.js`（React 19.2.7）、`158624.*.js`、`348410.*.js`（runtime）；
- 其余 9,326 个异步 chunk 位于 `webview/assets/async/<id>.<hash>.js`，由 runtime 中的
  `p.u=e=>"assets/async/"+e+"."+({...})[e]+".js"` 映射；CSS 由 `p.miniCssF` 映射到
  `assets/async/<hash>.css`；
- 每个 chunk 自带 `__rspack_esm_ids` 与 `__webpack_modules__`，模块 id 是 4 字符短 base62。

`_work/` 下的分析脚本按 **i18n 命名空间**给数字 chunk 聚类，而不是按文件名猜模块。
本目录只放每个模块的代表性 chunk；全量 13,492 个 async 条目没有入库（体积 498.3 MB）。

## 2. 模块与体积

| 模块 | 文件 | raw MB | formatted MB |
| --- | ---: | ---: | ---: |
| main-process | 29 | 11.85 | 16.59 |
| business | 13 | 11.05 | 13.53 |
| learning | 20 | 7.55 | 10.24 |
| settings | 24 | 3.68 | 6.58 |
| conversation | 12 | 3.67 | 6.13 |
| spaces | 12 | 2.62 | 4.24 |
| chatgpt-surfaces | 10 | 2.01 | 3.40 |
| left-nav | 10 | 1.99 | 3.26 |
| enterprise-trust | 12 | 1.82 | 3.18 |
| composer | 10 | 1.69 | 3.15 |
| editors | 6 | 1.34 | 2.24 |
| workspace-agents | 8 | 1.01 | 1.73 |
| misc | 8 | 0.90 | 1.60 |
| plugins | 8 | 0.71 | 1.35 |
| app-shell | 8 | 0.55 | 0.84 |
| writing | 5 | 0.41 | 0.78 |
| voice | 4 | 0.15 | 0.29 |
| codex-micro | 2 | 0.12 | 0.20 |

合计 **201 个文件 / raw 53.1 MB / formatted 79.3 MB**（含主进程 29 个 `.vite/build/*.js`，
其余 172 个为 webview chunk）。逐模块精确值见 `_MODULE_INDEX.json`。

每个模块目录包含：

- `_INDEX.json`：`archive_path`、原始大小、sha256、格式化器、选中原因、消息数；
- `_CATALOG.json`：该模块的 i18n 消息、props、import 与字面量统计（字面量明细在 `.work/literals/`，不入库）；
- `README.md`：本模块的文件清单与主要命名空间；
- 设置模块另有 `_SETTINGS_MAP.json` 与 `_SETTINGS_CHUNKS.json`；
  主进程模块另有 `_APP_SERVER_METHODS.json`（189 个带命名空间的方法字面量）。

## 3. 全局文案

`_catalog/i18n-messages.json` 是本版全量 i18n 目录：

| 指标 | 26.1016 | 26.1103 |
| --- | ---: | ---: |
| 消息条数 | 22,073 | **57,004** |
| 分组数 | 3,926 | **7,909** |
| 扫描文件 | — | 9,388 个 JS / 495.5 MB |
| 含消息的 chunk | — | 3,210 |

数量增长的最大来源是 **Learning**：`learningBlock*` 从 213 条增至 19,916 条
（1,631 组，含 `learningBlocks` / `learning-block` / `learning_blocks` 变体），
对应 1,600 余个交互式学习块。其余大面按**本版总量 / 本版新增**列：
`businessProfiles` 2,095 / +2,094、`ads_manager` 448 / +448、
`workspaceAgents` 982 / +670（另移除 25、改写 8）、`restricted` 1,201 / +388、
`merchantSettings` 277 / +277、`security` 333 / +12。

## 4. 未入库内容

- 其余约 9,150 个 async chunk（含 vendor、locale、可视化、媒体）；
- 587 个 CSS（13.9 MB）、959 个 webp、719 个 png、38 个 wasm；
- `orbit-character-*` 运行时与贴图、`workers/worker.*.js`；
- `node_modules/`（770 文件 / 19.2 MB）与原生 `.node`；
- 共享大 chunk（如 `182735.bb2cb0d2af.js`，8.3 MB）只做了定向检索，未整体入库。

## 5. 重新生成

工具快照见 [`../tools/`](../tools/README.md)（26.1103 专项脚本在其中的
「Rspack 专项脚本」一节）。核心步骤：

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0\app\resources\app.asar"

# 1. 全量清单（diff 基线）
node ..\tools\inventory.mjs $A ..\..\inventories\inventory-261103.json

# 2. 解析 Rspack chunk 表 + 扫描 i18n + 聚类
node ..\tools\chunkmap.mjs
node ..\tools\scan-messages.mjs
node ..\tools\cluster.mjs

# 3. 生成抽取计划并抽取（Prettier <=800 KB，其余 lightformat）
node ..\tools\plan.mjs
node ..\tools\extract-plan.mjs ..\_plan\plan-261103.json

# 4. 设置注册表
node ..\tools\settings-map-261103.mjs
```

脚本中的 archive 路径与输出根目录按本次执行位置写死；换机器时改文件顶部常量。
`extract-plan.mjs` 对模块目录只删除“不在当前计划内”的 `.js/.css`，保留
`README.md` / `_INDEX.json` / `_CATALOG.json` / `_*_MAP.json`。

## 6. 边界

> 本次只读安装目录，未写入 `C:\Program Files\WindowsApps`，未读取
> `auth.json`、`settings.dat`、任何 `.sqlite`、日志正文或会话缓存。
> 未做运行时插桩；文档中的“可见”是代码判定条件，不等于当前账号一定可见。
