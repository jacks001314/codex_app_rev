# left-nav — 左侧导航（Rail + Sidebar + Library）

**42 个文件 / 0.55 MB**，267 条 i18n 文案。
完整分析见 [`../../left-nav.md`](../../left-nav.md)。

## sidebar/

7 个 rail 图标 chunk 是**完整的 Lottie 动画 JSON**（`@lottiefiles/toolkit-js 0.71.10`，20×20，60fps / 40 帧），资产名统一为 `260625_CGPT_Icon_<Name>_PJ_20x20`：

| chunk                                   | Lottie 资产                                  |
| --------------------------------------- | -------------------------------------------- |
| `sidebar-new-chat-icon-0fd80fc7b9c5.js` | `NewChatPencil`                              |
| `sidebar-tasks-icon-9402a5a4bccf.js`    | `Tasks`（图层 MinuteDial / HourDial / Base） |
| `sidebar-projects-icon-67042664aebc.js` | `ProjectsFolder`                             |
| `sidebar-library-icon-261fcff961c3.js`  | `Library`（图层 Book3）                      |
| `sidebar-plugins-icon-be5a1502d451.js`  | `Plugins`                                    |
| `sidebar-search-icon-3b13a7c0c06e.js`   | `Search`                                     |
| `sidebar-more-icon-eace1b6cd43a.js`     | `More`                                       |

设计参数：描边 `strokeWidth: 1.33`、`strokeLinecap/Linejoin: round`、颜色 `rgb(0.051,0.051,0.051)` 或 `currentColor`。

另有两个开关状态图标 `sidebar-open-nhB2DGWY-*` / `sidebar-close-DAkb7EIE-*`，以及 `sidebar-CVOwfery-*`。

**新手清单**：`sidebar-onboarding-checklist.electron-1d409739925f.js`（51 KB）+ `sidebar-onboarding-checklist-task-config-17473bd614db.js`（22 KB）。清单任务与配置分离，说明它是数据驱动的；任务项包括 `exploreCodex`、`createProject`、`importAgentSetup`、`importFromClaude`、`finishConnectingImportedTools`、`enableNotifications`、`createAutomation`、`catchUpLinear`、`catchUpUpdatesAndBlockers`、`triageGithubPrs`、`reviewLatestPlans`、`summarizeCurrentPriorities`、`summarizeInbox`。

> **sidebar 的列表逻辑本体不在此目录** —— 它在共享 bundle `app-initial` / `app-primary` 中。本地 chunk 只提供图标、新手清单与 Library 页。要读列表渲染、分组、排序、拖拽逻辑，需检索 `.work/big/`（见 `../README.md`）里的 `sidebarElectron.*`（98 个子命名空间 / 280 条文案）。

## library/

Rail 上 “Library” 图标的落地页（路由 `/library/*`）：

- `unified-library-page-ef847054fa9e.js`（172 KB）—— 统一版主体，支持 `contentType ∈ {all, sites, files, images, ...}`、`viewMode`、`fileFilter`、分页 `hasNextSitesPage` / `onFetchNextSitesPage`；
- `library-page-f2624aa4e395.js`（102 KB）—— 旧版页面；
- `library-browse-state` / `library-item-model` / `library-item-actions` / `library-item-dialogs` / `library-create-dialog` / `library-name-validation` —— 浏览状态、数据模型、行操作、对话框、创建与命名校验；
- `library-cloud-file-preview-e9b210a27555.js`（57 KB）+ `library-file-preview-kind` + `library-file-download` —— 云文件预览与下载；
- `library-output-files-query` / `library-route` —— 数据查询与路由。

后端接口形如 `/files/library`、`/files/library/nodes`、`/files/library/recents`、`/files/library/search`、`/files/library/directories[/path]`、`/files/library/mounted/{search,materialize}`、`/files/library/storage/usage`、`/library/search`、`/library/d/`。

---

## 文件清单

### `_deps/`

| 文件                                                   |    原始 |  格式化 | formatter | 来源                                                           |
| ------------------------------------------------------ | ------: | ------: | --------- | -------------------------------------------------------------- |
| `sites-default-thumbnail-36d2e0dce693.js`              | 17.7 KB | 28.3 KB | prettier  | 闭包 ← `library-route-bcea5f58f7d2.js`                         |
| `artifact-creation-prompts-a41340b52c1a.js`            |  1.7 KB |  2.2 KB | prettier  | 闭包 ← `library-page-f2624aa4e395.js`                          |
| `filter-932d71dfa025.js`                               |  1.1 KB |  1.5 KB | prettier  | 闭包 ← `library-route-bcea5f58f7d2.js`                         |
| `trending-topics-fd625d5ea6e1.js`                      |  1.0 KB |  1.2 KB | prettier  | 闭包 ← `library-route-bcea5f58f7d2.js`                         |
| `use-element-in-view-a1799199db67.js`                  |  0.8 KB |  1.3 KB | prettier  | 闭包 ← `library-route-bcea5f58f7d2.js`                         |
| `use-searchable-page-title-visibility-337a615c9e59.js` |  0.6 KB |  0.8 KB | prettier  | 闭包 ← `library-route-bcea5f58f7d2.js`                         |
| `square-library-2rA4qKxk-1f43f2c8acf1.js`              |  0.4 KB |  0.5 KB | prettier  | 闭包 ← `library-square-Cb1PKEMj-f6c7963ad4ea.js`               |
| `panel-left-close-8R4TFhVW-779881372eca.js`            |  0.4 KB |  0.5 KB | prettier  | 闭包 ← `sidebar-close-DAkb7EIE-88b084ffcdef.js`                |
| `panel-left-open-BcV0PZVh-238172f27957.js`             |  0.4 KB |  0.5 KB | prettier  | 闭包 ← `sidebar-open-nhB2DGWY-f05dc694346f.js`                 |
| `panel-left-D_user39-7d4fd680ea01.js`                  |  0.3 KB |  0.4 KB | prettier  | 闭包 ← `sidebar-CVOwfery-d7bf66b38646.js`                      |
| `external-agent-config-import-flow-8695b432465d.js`    |  0.1 KB |  0.1 KB | prettier  | 闭包 ← `sidebar-onboarding-checklist.electron-1d409739925f.js` |

### `library/`

| 文件                                         |     原始 |   格式化 | formatter | 来源     |
| -------------------------------------------- | -------: | -------: | --------- | -------- |
| `unified-library-page-ef847054fa9e.js`       | 102.6 KB | 171.6 KB | prettier  | 命名规则 |
| `library-page-f2624aa4e395.js`               |  64.5 KB | 102.0 KB | prettier  | 命名规则 |
| `library-cloud-file-preview-e9b210a27555.js` |  35.3 KB |  56.9 KB | prettier  | 命名规则 |
| `library-item-dialogs-4b286cae5986.js`       |  10.7 KB |  16.9 KB | prettier  | 命名规则 |
| `library-browse-state-beabc6601918.js`       |   6.0 KB |   9.0 KB | prettier  | 命名规则 |
| `library-route-bcea5f58f7d2.js`              |   5.1 KB |   6.6 KB | prettier  | 命名规则 |
| `library-item-actions-17d69ae9b8cf.js`       |   4.6 KB |   6.5 KB | prettier  | 命名规则 |
| `library-create-dialog-71a30cbe9a09.js`      |   4.3 KB |   6.7 KB | prettier  | 命名规则 |
| `library-item-model-a6df7901bc6c.js`         |   3.2 KB |   4.4 KB | prettier  | 命名规则 |
| `library-file-preview-kind-2b10eb692a6f.js`  |   2.8 KB |   3.8 KB | prettier  | 命名规则 |
| `library-file-download-379f2e28fa84.js`      |   1.0 KB |   1.2 KB | prettier  | 命名规则 |
| `library-output-files-query-efc5c7a4cfd0.js` |   0.8 KB |   1.2 KB | prettier  | 命名规则 |
| `library-big-YcldEQZU-e4eb75156fe5.js`       |   0.5 KB |   0.7 KB | prettier  | 命名规则 |
| `library-name-validation-1174fdece49a.js`    |   0.4 KB |   0.5 KB | prettier  | 命名规则 |
| `library-C8mfnrOi-14494b635ca8.js`           |   0.4 KB |   0.5 KB | prettier  | 命名规则 |
| `library-square-Cb1PKEMj-f6c7963ad4ea.js`    |   0.2 KB |   0.2 KB | prettier  | 命名规则 |
| `library-cloud-file-preview-91e6546d461a.js` |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `library-big-YcldEQZU-4c4161b1dd42.js`       |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `library-C8mfnrOi-c1a1b5fe97f5.js`           |   0.1 KB |   0.1 KB | prettier  | 命名规则 |

### `sidebar/`

| 文件                                                       |    原始 |  格式化 | formatter | 来源     |
| ---------------------------------------------------------- | ------: | ------: | --------- | -------- |
| `sidebar-onboarding-checklist.electron-1d409739925f.js`    | 31.3 KB | 51.1 KB | prettier  | 命名规则 |
| `sidebar-onboarding-checklist-task-config-17473bd614db.js` | 16.1 KB | 21.9 KB | prettier  | 命名规则 |
| `sidebar-new-chat-icon-0fd80fc7b9c5.js`                    |  6.4 KB | 17.8 KB | prettier  | 命名规则 |
| `sidebar-plugins-icon-be5a1502d451.js`                     |  4.0 KB | 13.2 KB | prettier  | 命名规则 |
| `sidebar-projects-icon-67042664aebc.js`                    |  3.2 KB | 12.2 KB | prettier  | 命名规则 |
| `sidebar-library-icon-261fcff961c3.js`                     |  2.9 KB |  8.2 KB | prettier  | 命名规则 |
| `sidebar-more-icon-eace1b6cd43a.js`                        |  2.5 KB |  7.1 KB | prettier  | 命名规则 |
| `sidebar-tasks-icon-9402a5a4bccf.js`                       |  1.9 KB |  5.2 KB | prettier  | 命名规则 |
| `sidebar-search-icon-3b13a7c0c06e.js`                      |  1.4 KB |  3.7 KB | prettier  | 命名规则 |
| `sidebar-close-DAkb7EIE-88b084ffcdef.js`                   |  0.2 KB |  0.2 KB | prettier  | 命名规则 |
| `sidebar-open-nhB2DGWY-f05dc694346f.js`                    |  0.2 KB |  0.2 KB | prettier  | 命名规则 |
| `sidebar-CVOwfery-d7bf66b38646.js`                         |  0.2 KB |  0.2 KB | prettier  | 命名规则 |

> 完整来源档案路径与 SHA-256 见 [`_INDEX.json`](_INDEX.json)；字符串/i18n 目录见 [`_CATALOG.json`](_CATALOG.json)。
