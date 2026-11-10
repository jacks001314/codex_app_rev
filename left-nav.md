# 左边的导航（Rail + Sidebar）

代码位置：`code/left-nav/`（`sidebar/`、`library/`、`_deps/`）；主要逻辑仍在共享 bundle `app-initial`/`app-primary`，本地 chunk 提供图标与 Library 页。
文案证据：`code/left-nav/_CATALOG.json`、`code/_catalog/i18n-messages.json` 中的 `sidebarElectron.*`（**98 个子命名空间 / 280 条**）、`sidebar.*`、`sidebarHelp.*`、`sidebarOnboardingChecklist.*`、`app.sidebar.*`、`appUndo.sidebar*`。

左侧导航由**两层**组成，不要混为一谈：

```
┌────┬──────────────────────┬───────────────────────────────────────────┐
│Rail│      Sidebar         │              工作区（tab 区）              │
│图标│   列表 / 分组面板     │  tab strip + left/right/bottom pane        │
│ 条 │                      │                                           │
└────┴──────────────────────┴───────────────────────────────────────────┘
  ↑          ↑                            ↑
  48px 级    可折叠                    app-shell（见 side-panel.md）
```

- **Rail**：常驻图标条，landmark 名 `App navigation`（`sidebarElectron.appNavigation`）。
- **Sidebar**：Rail 点开后的列表面板，可用 `codex.command.toggleSidebar` / `app.sidebar.hide|show` 折叠。
- 工作区里另有 **“Move to left pane”** 的左面板，那是 app-shell 的三向面板之一，与导航 sidebar 无关。

---

## 1. Rail：7 个 Lottie 动画图标

`code/left-nav/sidebar/` 下的 7 个 chunk **不是 SVG，而是完整的 Lottie 动画 JSON**（`@lottiefiles/toolkit-js 0.71.10`，20×20，`fr:60`，`op:40`，即 60fps / 40 帧）：

| chunk                                   | Lottie 资产名                              | 语义                                                        |
| --------------------------------------- | ------------------------------------------ | ----------------------------------------------------------- |
| `sidebar-new-chat-icon-0fd80fc7b9c5.js` | `260625_CGPT_Icon_NewChatPencil_PJ_20x20`  | 新建对话（铅笔书写动画）                                    |
| `sidebar-tasks-icon-9402a5a4bccf.js`    | `260625_CGPT_Icon_Tasks_PJ_20x20`          | 任务（时钟指针转一圈，图层 `MinuteDial`/`HourDial`/`Base`） |
| `sidebar-projects-icon-67042664aebc.js` | `260625_CGPT_Icon_ProjectsFolder_PJ_20x20` | 项目（文件夹开合，路径形变动画）                            |
| `sidebar-library-icon-261fcff961c3.js`  | `260625_CGPT_Icon_Library_PJ_20x20`        | 资料库（书本翻页，图层 `Book3`）                            |
| `sidebar-plugins-icon-be5a1502d451.js`  | `260625_CGPT_Icon_Plugins_PJ_20x20`        | 插件（图钉）                                                |
| `sidebar-search-icon-3b13a7c0c06e.js`   | `260625_CGPT_Icon_Search_PJ_20x20`         | 搜索（放大镜压扁回弹）                                      |
| `sidebar-more-icon-eace1b6cd43a.js`     | `260625_CGPT_Icon_More_PJ_20x20`           | 更多（三点跳动）                                            |

另有 3 个静态 SVG 状态图标：`sidebar-open-nhB2DGWY-*`、`sidebar-close-DAkb7EIE-*`、`sidebar-CVOwfery-*`，以及面板类图标 `panel-left-D_user39-*`、`panel-left-open-*`、`panel-left-close-*`、`panel-left-dashed-*`、`panel-left-inactive-*`（`_deps/`）。

命名前缀 `260625_CGPT_Icon_*_PJ_20x20` 说明这是 2026-06-25 交付的一套统一设计资产（PJ = 设计师代号），全 app 的 rail 图标共用一套规范：20×20、描边 1.33、`stroke:#0D0D0D`(0.051)、`currentColor` 填充。

Rail 上另有两个非图标项（来自 `sidebarElectron.rail`）：

| key             | 文案     | description                                   |
| --------------- | -------- | --------------------------------------------- |
| `rail.home`     | Chats    | Returns to chats from another app destination |
| `rail.settings` | Settings | Opens app settings from the navigation rail   |

## 2. Sidebar 的模式选择器

顶部是产品模式切换（`sidebarElectron.productMode.*`），与全局 `codexAppMode ∈ {chat, work, codex}` 对应：

| 选项      | 文案                                 | 副标题                     |
| --------- | ------------------------------------ | -------------------------- |
| `codex`   | Codex                                | Build, debug, and ship     |
| `work`    | Work / ChatGPT Work（Chat 不可用时） | Create, learn, and explore |
| `chatGpt` | ChatGPT                              | —                          |

触发器 aria：`Switch mode, current mode: {mode}`。命令面板对应 `codex.command.switchToCodex|switchToWork|switchToChat`。

## 3. Sidebar 的分区

| 分区            | i18n 证据                                                                                                           | 行为                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pinned**      | `pinnedThreads`(4)、`pinnedThreads.v2`                                                                              | 置顶的 chat 与 project；有独立排序菜单 `Pinned options`，`priority` 模式说明为 “Needs input and unread pinned threads first”；顺序保存失败提示 `Couldn't save pinned order` 并回滚 |
| **Priority**    | `priorityThreads`(**36 条**)                                                                                        | “需要关注”的任务过滤视图；支持多选批量归档，含运行中任务的 `Stop and archive` 二次确认、定时任务会被移除的警告、`Recent threads won't be archived` 保证                            |
| **Chats**       | `recentChats`、`tasksSection.label/emptyState/error`                                                                | 无项目归属的会话列表；空态 `No chats`，错误态 `Could not load chats`                                                                                                               |
| **Projects**    | `projectsNavLink`、`projectHoverCard`(13)、`customSections`(16)                                                     | 项目分组；hover card 显示 `{count} active` / `# task`；支持自定义分区（文件夹）的增删改                                                                                            |
| **Connections** | `connectionsNavLink`、`connectionGroup`(5)、`connectionStatus`(3)                                                   | 远程连接分组，含 `Cloud` / `Local` 子组、`Reconnecting…`、`Connection failed`、`Reconnect this connection to start a task`                                                         |
| **Scheduled**   | `taskNavigation`、`tasksInFolder`、`inboxRouteNavLink`、`addAutomation`、`editAutomation`、`automationsMarkAllRead` | 定时任务文件夹，landmark 名 `Scheduled task folders`                                                                                                                               |
| **Agents**      | `aeonThreads.v2` = `Agents`                                                                                         | Aeon/子代理线程（内部代号 aeon）                                                                                                                                                   |
| **Archive**     | `archiveNavLink`、`archivedTasks`(**27 条**)                                                                        | 独立归档视图，带 Filters（All projects / All chats / Local / Cloud / ChatGPT chats / Type）、搜索、`No matches yet. Show more to keep searching`                                   |

分组与排序：

- **Organize sidebar**（`groupByMenu`）：`By project` / `By connection`（`flatProjectSidebar` 提供 10 条相关文案）
- **Sort chats by**（`chatsSortMenu.title` + `sortMenu`）：`Created` / `Last updated` / `Manual order` / `Priority`（后者说明 “Needs input and unread chats first”）
- **Show more / Show less**：列表分页展开

### 3.1 本仓库已落地的分区（映射）

本仓库侧边栏只有「会话」与「定时任务」两种行，分区用 `section-heading` 折叠（折叠状态是本机界面状态，不写回集群）：

| 本仓库分区 | 对齐 Codex 的                                                                           | 差异                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 置顶       | `pinnedThreads` / `pinnedThreads.v2`                                                    | 置顶是**本机偏好**（`session-list-preference`），不写回 Master；顺序就是置顶操作的顺序（最新的在前），没有 Codex 那个独立的排序菜单与保存失败回滚                                                                                                                                                                                                                                                          |
| 项目       | `projectsNavLink` + 项目分组                                                            | 一行一个项目，展开后是该项目下的会话；没有 hover card（`{count} active` / `# task`），没有自定义分区（Codex 的 `customSections` 文件夹）                                                                                                                                                                                                                                                                   |
| 即时会话   | `recentChats` / `tasksSection.*`                                                        | 语义一致：不绑定项目的会话。空态说「暂无即时会话」                                                                                                                                                                                                                                                                                                                                                         |
| 定时任务   | `inboxRouteNavLink`（Scheduled）+ `taskNavigation`（landmark `Scheduled task folders`） | 2026-09-15 落地：一栏列出全部自动化（状态点 + 名称 + 还有多久），标题栏「+」＝`addAutomation`（`Add scheduled task…`），行上悬停的笔＝`editAutomation`（`Edit scheduled task…`），点行把右栏「定时任务」面板转到那一条；见 `side-panel.md` §10。**没有 folder 分组**，所以不用 Codex 那个 `Scheduled task folders` 的 landmark 名；`automationsMarkAllRead` 不做（本仓库的自动化没有「未读运行」这个概念） |
| 归档       | `archiveNavLink` / `archivedTasks`                                                      | 只是一栏列表；Codex 的归档视图另有 Filters（All projects / All chats / Local / Cloud / ChatGPT chats / Type）与「Show more…」，本仓库用顶部的会话搜索框筛                                                                                                                                                                                                                                                  |

有意不做对齐的分区：**Priority**（`priorityThreads`，要「需要关注」的判定 + 多选批量归档 + 「Stop and archive」二次确认）、**Connections**（远程连接分组）、**Agents**（aeon 子代理线程）。它们各自的数据源在本仓库都不存在，做出来只会是一栏空壳。§4 里那批导航链接（Pull requests / Library / Plugins / Skills / Sites / GPTs / Security / Finance）同理。

## 4. 导航链接全集

`sidebarElectron.*NavLink` 共 16 项（这是 sidebar 能跳转的全部目的地）：

| 文案          | id                                 | 目标路由                               |
| ------------- | ---------------------------------- | -------------------------------------- |
| New chat      | `workNewChatNavLink` / `newThread` | `/hotkey-window/new-thread` 或新 tab   |
| Quick chat    | `quickChatNavLink`                 | `/chatgpt/quick-chat`                  |
| Scheduled     | `inboxRouteNavLink`                | `/automations`（`/inbox` 会 302 到它） |
| Pull requests | `pullRequestsRouteNavLink`         | `/pull-requests`                       |
| Projects      | `projectsNavLink`                  | `/projects`                            |
| Library       | `libraryRouteNavLink`              | `/library/*`                           |
| Plugins       | `skillsAppsRouteNavLink`           | `/skills`、`/plugins`                  |
| Skills        | `skillsRouteNavLink`               | `/skills/manage`                       |
| Agents        | `workspaceAgentsRouteNavLink`      | workspace agents 页                    |
| Sites         | `sitesRouteNavLink`                | `/sites`、`/sites/:projectId`          |
| GPTs          | `gptsRouteNavLink`                 | `/gpts`                                |
| Security      | `securityRouteNavLink`             | `/security/*`                          |
| Finance       | `personalFinanceRouteNavLink`      | `/finances`                            |
| Connections   | `connectionsNavLink`               | `/remote-connections`                  |
| Archive       | `archiveNavLink`                   | 归档视图                               |
| Debug         | `debugNavLink`                     | `/debug`、`/internal/demo-tools`       |

## 5. 行级操作

**会话行（thread row）**：`Pin/Unpin chat`、`Rename chat`（弹窗带 AI 生成标题：`Generating suggestion…`、占位 `Add a title…`、副标题 `Keep it short and recognizable`）、`Archive chat`、`Mark as read/unread`、`Move to project`（`sidebar.threadProject.moveToProject` + 确认弹窗）、`Stop chat`（失败提示 `Failed to stop chat`）、`Open in new window`、`Toggle pin`。

Hover card 区分 `Chat` / `Voice chat` / `Work task`，并显示执行位置 `Local` / `Cloud`（`sidebar.thread.hoverCard.executionLocation.*`）。

**项目行（project row）**：`Edit`、`Pin/Unpin`、`Remove project`（10 条确认文案）、`Archive chats`（13 条，含运行中 → `Stop and archive`）、`Create permanent worktree`（8 条，把临时 worktree 固化为项目）、`Open in Explorer` / `Reveal in Finder` / `Open in File Manager`（三平台文案）、`Add new project`；文件夹丢失时 `This project folder was deleted`；git worktree 分组有 tooltip `This is a git worktree`。

**拖拽重排**：`rowReorder` = `Moved to position {position} of {total}`（屏幕阅读器播报）；配套撤销项 `appUndo.sidebarItemMoved` / `sidebarOrderChanged` / `sidebarSectionCreated` / `sidebarSectionUpdated` / `sidebarSectionDeleted`，项目删除还有独立的 `sidebarProjectRemoval.undoError|redoError`。

## 6. Sidebar 内的卡片与横幅

| 元素           | i18n                                                  | 说明                                                                                                                                                               |
| -------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 用量告警卡     | `usageAlert`(**22 条**)                               | `{remaining}% usage remaining`，可关闭；含 `every day`/`every hour`/`every minute` 复数化文案                                                                      |
| Luna Reserve   | `lunaReserve`(3)                                      | `Luna Reserve remaining`、`Advanced models reset {time}`、`Luna Reserve · {remaining}% remaining`                                                                  |
| 应用更新横幅   | `sidebar.updateBanner`(**11 条**)                     | `availableStatus` → `downloading`/`downloadProgress`/`downloadingPercent` → `installedStatus` → `restart`/`restarting`；另有 `dismiss`、`openPost`（打开更新公告） |
| Alpha 构建横幅 | `internalAlphaUpdateBanner`(3)                        | `This build is {buildAgeDays} …`、`Update your alpha build`、`Update now`                                                                                          |
| 远程项目引导   | `addRemoteProjectCoachmark`(4)                        | `Add your remote project here` / `Choose Remote to select the repo on your connected machine` / `Dismiss`，角标 `Remote`                                           |
| 云仓库组提示   | `cloudRepositoryGroup`                                | `Start cloud chats from the composer`                                                                                                                              |
| 语音入口       | `sidebar.voice.label`、`sidebar.voice.startAriaLabel` | 从 sidebar 直接起语音                                                                                                                                              |
| 浏览器媒体     | `sidebar.browserMedia.*`(4)                           | 全局菜单里列出正在播放/使用摄像头的浏览器 tab                                                                                                                      |
| 内容 tab       | `sidebar.contentTab.*`(4)                             | `sourceTask`、`unavailable`、`unpinAction/unpinButton` —— sidebar 可以钉住内容 tab                                                                                 |

## 7. 新手清单与帮助菜单

**Onboarding checklist**（`code/left-nav/sidebar/sidebar-onboarding-checklist.electron-*.js` 51 KB + `sidebar-onboarding-checklist-task-config-*.js` 22 KB）：

`sidebarOnboardingChecklist.*` 定义了任务项：`exploreCodex`、`createProject`、`importAgentSetup`、`importFromClaude`、`finishConnectingImportedTools`、`enableNotifications`、`createAutomation`、`catchUpLinear`、`catchUpUpdatesAndBlockers`、`triageGithubPrs`、`reviewLatestPlans`、`summarizeCurrentPriorities`、`summarizeInbox`；配 `progressCount`、`progressCountAriaLabel`、`expandChecklist`/`collapseChecklist`、`hideSetup`、`checklistActions`、`title`。任务配置单独成 chunk，说明清单是**数据驱动**的。

**Help 菜单**（`sidebarHelp.*`）：`Help`、`What's new`、`Full changelog`、`Keyboard shortcuts`、`Set up mobile`、`Set up remote`、`Set up Chrome extension`、`Internal debug`，触发器 aria `Open help menu`。

## 8. 首屏加速

preload 提供 `getInitialSidebarBootstrap()`（`sendSync codex_desktop:get-initial-sidebar-bootstrap`），主进程在窗口创建前就把 sidebar 首屏数据准备好，渲染进程同步取回并 memo。这解释了为什么 sidebar 不需要 loading 骨架就能立刻显示列表 —— 与 TanStack Query 的异步数据是两条路径。

## 9. Library 页（Rail 目的地之一）

`code/left-nav/library/`：`unified-library-page`(172 KB) 是主体，`library-page`(102 KB) 为旧版；配套 `library-browse-state`、`library-item-model`、`library-item-actions`、`library-item-dialogs`、`library-create-dialog`、`library-name-validation`、`library-cloud-file-preview`(57 KB)、`library-file-preview-kind`、`library-file-download`、`library-output-files-query`、`library-route`。

统一 Library 支持内容类型 `all|sites|files|images|…`，并按 `localSourcesEnabled` 决定是否显示本地来源；数据来自 `/files/library*`、`/library/search` 等后端接口。它是 Rail 上 “Library” 图标的落地页，也是 sidebar `libraryRouteNavLink` 的目标。
