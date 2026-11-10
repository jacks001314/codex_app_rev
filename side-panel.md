# 侧边页面（Side Panel / Pane 系统）

代码位置：`code/side-panel/`（`tabs/`、`previews/`、`terminal/`、`subagents/`、`_deps/`）与 `code/app-shell/`（`chrome/`、`layout/`、`routing/`）。
文案证据：`thread.sidePanel.*`(34)、`thread.bottomPanel.*`、`thread.fileTreePanel.*`、`threadWorkspace.*`、`appShell.tabs.*`、`tabThumbnail.*`、`pullRequestSidePanel.*`、`automation.sidePanel.*`、`localConversation.subagentsPanel.*`、`browserSidebar*`、`artifactTab.*`。

---

## 1. 先厘清三个概念

Codex desktop 的“侧边”其实是**三向面板系统**，不是单一右侧栏：

```
┌────┬───────────────┬──────────────────────────────┬───────────────┐
│Rail│   Sidebar     │   tab strip（工作区标签条）   │  right pane   │
│    │  (left-nav)   ├──────────────────────────────┤  ← 侧边页面    │
│    │               │      main pane (Chat)         │               │
│    │               ├──────────────────────────────┤               │
│    │               │      bottom pane             │               │
└────┴───────────────┴──────────────────────────────┴───────────────┘
   另有 left pane：app-shell 支持 "Move to left pane"
```

| 术语           | 含义                                     | 代码                                                               |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------ |
| **app shell**  | 窗口 chrome + tab strip + 三向 pane 布局 | `app-shell/chrome/thread-app-shell-chrome-*.js` (131 KB)           |
| **side panel** | thread 的右侧面板（默认落点）            | `side-panel/tabs/thread-side-panel-tab-content-*.js` (168 KB)      |
| **pane**       | tab 的三种落位：left / right / bottom    | `Move to left pane` / `Move to right pane` / `Move to bottom pane` |

`thread-app-shell-chrome` 里的 DOM 语义标记印证了这套结构：`app-shell-tab-strip`、`app-shell-tab`、`app-shell-route-tab`、`app-shell-tab-drop-target`。

## 2. Tab 类型

工作区 tab 的 kind（来自 `thread-app-shell-chrome` 的字面量）：

```
local-thread   client-local-thread   new-tab   library-file   external-resource
mcp_app_resource   generated-image   open-file   file   image   google-drive
appgen-app   browser.in-app   browser
```

侧边面板 tab 的公开 API（`side-panel/tabs/thread-side-panel-tabs-609ba0f9f71f.js` 的完整导出）：

```js
export {
  THREAD_SIDE_PANEL_TAB, // tab 类型枚举（定义在 app-initial）
  openThreadMcpAppSidePanelTab,
  closeThreadMcpAppSidePanelTab,
  getThreadMcpAppSidePanelTabId,
  openSessionSandboxSidePanel,
  openThreadTimelineSidePanel,
};
```

另有一个同名 shim `thread-side-panel-tabs-15e3c4c648ed.js`，其中两个函数体直接 `return !1`（`openSessionSandboxSidePanel` / `openThreadTimelineSidePanel` 的**禁用桩**）—— 说明这两个能力在当前 build 里被关闭或以 feature flag 兜底。

### 侧边面板 tab 清单

| Tab                            | 打开方式                                                      | 关键 chunk                                                                                                                                 | 文案                                                                                                   |
| ------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **Review**（diff）             | `codex.command.openReviewTab` / `toggleReviewPanel`           | `thread-pull-request-tab-content`、`app-shell` 的 diff 相关                                                                                | `thread.sidePanel.diffTab` = Review                                                                    |
| **Browser**                    | `codex.command.openBrowserTab` / `toggleBrowserPanel`         | `previews/cloud-browser-side-panel-*.js` (28 KB)                                                                                           | `thread.sidePanel.openBrowserTab` = Browser；空 tab 标题 `New tab`                                     |
| **Files**（工作区文件浏览器）  | `thread.sidePanel.openFile`                                   | `threadSidePanel.workspaceBrowser.*`                                                                                                       | `Add to chat`、`Open in…`、`Open in {target}`、`No files in this folder`、`Loading directory entries…` |
| **Side chat**                  | `codex.command.openSideChat` / `focusSideChat`                | `right-panel-composer-overlay-*.js`                                                                                                        | `Side chat`；失败 `Failed to open side chat` / `Error opening side chat`                               |
| **PR #N**                      | `open-thread-pull-request-side-panel-tab-*.js`                | `thread-pull-request-tab-content-*.js`、`pullRequestSidePanel.*`                                                                           | `thread.sidePanel.pullRequestTab.title` = `PR #{number}`                                               |
| **Local Sources**              | `open-local-conversation-sources-side-panel-tab-*.js`         | `local-conversation-sources-side-panel-tab-*.js` (22 KB)                                                                                   | `tabThumbnail.localSources.*`(11)                                                                      |
| **ChatGPT Sources**            | `open-sources-side-panel-tab-*.js`                            | `chatgpt-sources-side-panel-tab-*.js` (43 KB)                                                                                              | —                                                                                                      |
| **Subagents**                  | `open-local-conversation-subagents-panel-*.js`                | `subagents/`                                                                                                                               | `localConversation.subagentsPanel.*`(17)                                                               |
| **Scheduled task**             | `open-automation-side-panel-tab-*.js`                         | `automation-side-panel-tab-*.js` (27 KB)、`cloud-automation-detail-panel-*.js` (96 KB)                                                     | `automation.sidePanel.*`(7)                                                                            |
| **Goal**                       | —                                                             | `thread-goal-side-panel-content-*.js` (12 KB)                                                                                              | 配合 `thread/goal/*` JSON-RPC                                                                          |
| **Plan**                       | —                                                             | `plan-side-panel-e22fc1aa0e4a.js`                                                                                                          | 配合 `turn/plan/updated`                                                                               |
| **Artifact / 文件预览**        | `open-artifact-side-panel-tab-*.js`                           | `previews/pdf-preview-panel`(57 KB)、`docx-preview-panel`(48 KB)、`notebook-preview-panel`(22 KB)、`artifact-tab-content.electron`(194 KB) | `artifactTab.*`                                                                                        |
| **Text file editor**           | `open-text-file-editor-side-panel-tab.electron-*.js`          | `previews/text-file-editor-tab-content.electron-*.js` (400 KB)                                                                             | —                                                                                                      |
| **MCP App**                    | `openThreadMcpAppSidePanelTab`                                | `thread-mcp-app-side-panel-tab-*.js`、`mcp-extension-thread-side-panel-tab-*.js`                                                           | 路由 `/mcp-app/:server/:toolName`                                                                      |
| **Entity**                     | —                                                             | `chatgpt-entity-side-panel-tab-*.js`                                                                                                       | —                                                                                                      |
| **Background agent**           | `open-local-conversation-background-agent-*.js`               | —                                                                                                                                          | `localConversation.backgroundAgents.*`                                                                 |
| **Summary（pinned）**          | `codex.command.togglePinnedSummary`                           | `toggle-thread-summary-panel-*.js` (14 KB)、`local-conversation-summary-panel-sources-model-*.js`                                          | —                                                                                                      |
| **New tab**                    | `thread.sidePanel.openNewTab`                                 | `new-thread-panel-page-*.js`                                                                                                               | 见下                                                                                                   |
| **Timeline / Session sandbox** | `openThreadTimelineSidePanel` / `openSessionSandboxSidePanel` | —                                                                                                                                          | **当前 build 为禁用桩**                                                                                |

### 本仓库已落地的 tab（映射）

Codex 这一排 tab 里只有一部分在本仓库有对应的数据源；下表按「已落地 / 有意不做」记录差异，写法与 `thread-row-menu.md` §3 一致。

| Codex tab                                      | 本仓库实现                                                                                                                                               | 差异                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Review**（diff，`thread.sidePanel.diffTab`） | 右栏「改动」页签：`desktop_app/apps/desktop/src/renderer/ProjectChangesPage.tsx`；取数 `DiffProjectRevision` → `POST /api/projects/{project_id}/fs/diff` | 读的是 **Master 的 revision 清单**（`ProjectRevision.ManifestJson`）而不是工作树 git diff：未提交到 Master 的改动看不到。没有 PR / GitHub 数据源，因此 **PR #N tab 不做**。对比区间默认是「head vs 它的父」，用 `baseParentRevisionId` 可以逐版往回退一版——与 Codex 的 Review 语义一致（永远是某个已提交版本 vs 它的父）。变更条数默认上限 500、最大 5000，超出时界面明示「只列出了前 500 个文件」。 |

> ⚠️ 上一行已过时：revision / changeset 与 `DiffProjectRevision` 已随 `docs/project-delivery-redesign.md` 删除，「改动」页现在读的是写入日志（`ProjectChangesPage.tsx` + `projectFsChanges`）。Review 面板的现状对照与落地计划见 [review-panel.md](review-panel.md) §9 与 [review-panel-plan.md](review-panel-plan.md)。

### New tab 页（统一入口）

`threadWorkspace.newTab.*` 定义了一个聚合页：

| 区块             | 文案                                                                                                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Recents          | `threadWorkspace.newTab.recentWork.heading` = Recents —— 当前任务的近期产物 + Library 近期文件                                                                          |
| Tools            | `…tools.heading` = Tools                                                                                                                                                |
| Plugins and MCPs | `…plugins.heading` = Plugins and MCPs                                                                                                                                   |
| 文件类型标签     | `{fileType, select, artifactDocument/document {Document} image {Image} pdf {PDF} presentation {Presentation} spreadsheet {Spreadsheet} website {Website} other {File}}` |
| 空态             | `thread.sidePanel.newTab.empty` = No tabs are available for this chat                                                                                                   |
| 建议             | `thread.sidePanel.newTab.suggested.heading` = Suggested                                                                                                                 |
| 终端入口         | `thread.sidePanel.newTab.terminal.title` = Terminal                                                                                                                     |

## 3. Bottom panel（底部面板）

```
thread.bottomPanel.close        Close
thread.bottomPanel.hide         Hide bottom panel
thread.bottomPanel.openTab      Open bottom panel tab
threadPage.toggleBottomPanel    Toggle bottom panel        （命令 toggleBottomPanel）
```

底部面板主要承载 **Terminal**（`terminal.tabs.title` = `Terminal {index}`，即多终端编号）与**后台终端**（`Background terminal`、`No output yet`、`Stop all background terminals`、`Unable to stop background terminals`）。终端错误态：`The terminal encountered an error` / `Try reloading the terminal to continue` / `Reload`。

相关 chunk：`terminal/terminal-panel-*.js`(16 KB)、`xterm-output-panel-*.js`、`exec-shell-container-*.css`、`xterm-window-zoom-*.js`(292 KB)、`terminal-workspace-warning-state-*.js`。

文件树面板有独立的搜索态：`thread.fileTreePanel.searchingFiles` = `Searching files…`、`noMatchingFiles` = `No matching files`。

## 4. Tab 的窗口化操作

app-shell 支持把 tab **拆到独立窗口**（`appearance:"detached"`，见 `architecture.md` §3）：

| 文案 id                                                 | 内容                                                                     |
| ------------------------------------------------------- | ------------------------------------------------------------------------ |
| `appShell.tabs.detachedDescription`                     | This tab is open in a separate window（原 tab 位置的占位说明）           |
| `appShell.tabs.restoreToTab`                            | Restore tab（把内容搬回 tab）                                            |
| `appShell.tabs.showDetachedWindow`                      | Show window（把独立窗口带到前台）                                        |
| `appShell.tabs.dragOutsideUnsupported.title`            | This tab isn't ready to fly yet                                          |
| `appShell.tabs.dragOutsideUnsupported.description`      | Opening tabs in a new window isn't supported yet（拖出窗口外时的 toast） |
| `appShell.tabs.windowMoveFailed`                        | Couldn't open this tab in a new window                                   |
| `appShell.tabs.windowRestoreFailed`                     | Couldn't restore this tab                                                |
| `appShell.singleTab.close`                              | Close                                                                    |
| `appShell.tabPanel.worktreeProvisioning`                | worktree 制备中的占位                                                    |
| `appShell.tabPanelRenderError.title` / `.retry`         | 渲染错误兜底 + Retry                                                     |
| `appShell.detachedWindow.pin` / `unpin` / `focusSource` | 独立窗口的置顶与回焦（含 `…Failed` 变体）                                |
| `appShell.header.bottomPanel`                           | Bottom panel                                                             |

`codex.command.openThreadInNewWindow` = `Open in new window`；`showWorkspaceTabView` = `Full view`；`stepWorkspaceLayout` = `Show or hide tabs`；`toggleMaximizeSidePanel` = `Toggle maximize side panel`（侧面板可最大化）。

面板可见性状态分散在三个极小的 chunk 里，说明它们是**独立的原子 store**：`thread-panel-state-5e1fd0dc8ac2.js`(0.2 KB)、`thread-right-panel-state-3ca2cc72f23f.js`(0.1 KB)、`panel-visibility-6143cd2f2ec9.js`(2.2 KB)；开关按钮 `thread-panel-toggle-button-78c146087e1c.js` 用的是 `sidebar-hidden-light-16` 图标（16×16，`paint.kind:"monochrome"`）。

## 5. Tab 缩略图

工作区 tab 与侧面板 tab 都有缩略图状态（`tabThumbnail.*`），是“不点开也能看到进展”的设计：

| 类型             | 字段                                                                                                                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| conversation     | `working` = Working                                                                                                                                                                                      |
| localSources     | `count`（`# source(s)`）、`webSearches`（`# search(es)`）、`webPages`（`# page(s)`）、`webMcpCalls`（`# call(s)`）、以及 6 个动作标签 `Read`/`Created`/`Updated`/`Attached`/`Provided`/`Searched`/`Used` |
| pullRequest      | `identity` = `{repo} #{number}`、`reviews.approved` = Approved、`reviews.changesRequested` = Changes requested、`reviews.required` = Review required                                                     |
| subagents        | `loadedCount` = `# loaded agent(s)`（可能小于总数）、`runtimeStatus` = `{status, select, active {Working} idle {Idle} systemError {Failed}}`                                                             |
| chatGptSubagents | 单独一组                                                                                                                                                                                                 |

## 6. Browser tab 的媒体状态

侧面板里的浏览器 tab 会在 tab 上标注媒体占用状态，`thread.sidePanel.browserTab.*` 共 **14 种组合**，全部是 accessible label：

```
Playing audio / Audio muted / Using microphone / Using camera
Using camera and microphone / Using camera or microphone
…AndPlayingAudio / …WithAudioMuted   （上述每种再 × {playing, muted}）
```

浏览器 tab 的右键菜单（`thread.sidePanel.browserTabMenu.*`）：`Reload`、`Duplicate`、`New tab to the right`、`Rename`、`Copy URL`、`Open in external browser`。

浏览器侧栏本身还有一整套独立命名空间：`browserSidebar.contextMenu`(9)、`browserSidebar.loadError`(19)、`browserSidebar.zoomBanner`(3)、`browserSidebarCommentOverlay.*`(19)、`browserSidebarCommentRuntime.*`、`browserSidebarDesignEditor.*`(**60+**，一个完整的可视化 CSS 编辑器：flex 方向/对齐/分布、gap、margin/padding、字体、颜色、圆角、边框、锁定比例、拖拽样式控件)。

## 7. Pull Request 侧面板

`pullRequestSidePanel.*` 是侧面板里功能最密的一块：

| 分组      | 能力                                                                                                                                                                                                              |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Overview  | `overview.checks.failing` = Failing、`overview.checks.none` = No CI checks                                                                                                                                        |
| Checks    | 状态 `passed/failed/inProgress/neutral/skipped/unknown`；`Fix all`、`Remove all`（各带 `…Accessible` 变体）                                                                                                       |
| Comments  | `Fix comment`、`Fix all`、`Remove all`                                                                                                                                                                            |
| Conflicts | `Merge conflicts`、`Fix`、`Remove`                                                                                                                                                                                |
| Auto fix  | `Automatic fix started/paused/viewProgress`、`Could not start automatic fix`、`Automatic fix will retry on schedule`、`Automatic fix is paused until task setup succeeds`                                         |
| Approvals | `Request approvals`、`Manage reviewers`、`Request reviewers`、GitHub 用户搜索（`Search by name or GitHub username`、`No users found`、`Couldn't search GitHub users`、`Searching…`、`Retry`）、`Review submitted` |
| 导航      | `Open pull request on GitHub`、`Copy link`、`Couldn't load this pull request URL`、`Couldn't load this pull request section`                                                                                      |
| Tab       | `pullRequestDetail.tabs` = Pull request view，子 tab `Summary` / `Code`                                                                                                                                           |

配套的自动化：`open-pull-request-fix-automation-panel-*.js` + `pull-request-code-review-navigation-*.js`；Git-Based Review 的开关命令 `codex.command.gitReview.full` = `Enable Git-Based Review`（`Restore Git-Based Review sources`）与 `gitReview.lastTurnOnly` = `Disable Git-Based Review`（`Only show Last Turn in the Review panel`）。

## 8. Subagents 面板

```
title            Subagents
active           Active · {count}
done             Done · {count}
working          Working
noActive         No active subagents
back             Back to subagents
status.waiting   Waiting
summary.waiting  # waiting
status.completedAgo   {time} ago
```

活动摘要（`localConversation.subagentActivity.*`）：`{displayName} started working` / `updated` / `finished` / `interrupted`，未命名时回落 `Agent`，动作 `Open {displayName} subagent`。折叠态摘要 `subagents.activity.summary` 用 ICU select 处理 1/2/多个子代理的不同措辞。

另有 `subagents/subagent-activity-chip-group-*.js`（**462 KB**，含大量动画）—— 对话区里的子代理活动 chip 组。

## 9. Artifact / 文件预览

`artifactTab.*`：

```
preview.download / downloadCopy(Save as…) / downloading / downloadFailure(Could not download artifact)
preview.open / openInFolder / openInGitHub / openOptions / openPrimaryTarget.tooltip(Open in {target})
preview.loadingAvailableApps
loading(Loading preview...) / previewLoading(Preparing preview…) / previewError(Couldn't load this preview)
previewTooLarge(This file is too large to preview in the side panel)
refreshForLatest / dismissRefreshForLatest
sourceOptions(Artifact viewer options) / sourceOptions.viewSource(View source)
docx.showRedlines / docx.hideRedlines          ← Word 修订痕迹开关
xlsxSaveProblem(Changes may not be written to the XLSX file. Keep this workbook open…) / .retry(Try again)
```

预览器实现：`previews/pdf-preview-panel-*.js`(57 KB) + `pdf-*.js`(386 KB)、`docx-preview-panel-*.js`(48 KB)、`notebook-preview-panel-*.js`(22 KB)、`file-editor-theme-*.js`(250 KB)、`artifact-source-bootstrap-*.js`(330 KB)。另有 `PopcornElectronWorkbookPanel`(472 KB) / `PopcornElectronDocumentPanel`(394 KB) / `PopcornElectronPresentationPanel` —— 内部代号 **Popcorn** 的 Office 三件套面板，依赖 `DocumentFormat.OpenXml.*.wasm`(4.2 MB) 与 `dotnet.runtime.*.js`，即在浏览器里跑 .NET/OpenXML 处理 Office 文件。

> 逐文件类型的完整规则（内容嗅探、产物 vs 工作区两条链路的支持矩阵、预览器选择、阈值）见 [file-handling.md](file-handling.md)。

## 10. Scheduled task（Automation）侧面板

```
automation.sidePanel.createSuggestion    Create scheduled task
automation.sidePanel.applySuggestion     Apply changes
automation.sidePanel.cancel              Cancel
automation.sidePanel.retrySave           Retry save
automation.sidePanel.openScheduledTask   Open settings
automation.sidePanel.missingTitleUnavailable        Scheduled task unavailable
automation.sidePanel.missingDescriptionDevice       This scheduled task may have been deleted or is no longer available on this device
```

对话区内还会以 `localConversation.heartbeatUserMessage.automationTabTitle` = `Scheduled task` 的形式出现。云端版是 `cloud-automation-detail-panel-*.js`(96 KB)。设置侧的自动化文案在 `settings.automations.*`(91) 与 `inbox.automations.*`(95)。

### 本仓库已落地：定时任务 / 自动化（映射）

Codex 的 Scheduled task 在本仓库已落地成右栏的**「定时任务」页签**：`desktop_app/apps/desktop/src/renderer/AutomationsPage.tsx`（纯展示逻辑在同目录的 `automation-format.ts`），入口是窗口工具条第 2 个图标、右侧面板「+」菜单与命令面板的「定时任务」。取数走 6 个通道 → `GET/POST /api/automations…`，落库在 Master 的 `syntropy_master/handle/automation/automation_service_handle.go`（bbolt bucket `automations`）。

| 能力     | 本仓库实现                                                                                                                                                                                                                                                                                                                           | 差异                                                                                                                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 规则     | `interval`（1 分钟 ~ 7 天，`interval_minutes`）与 `daily`（本机墙钟 `hour:minute`）                                                                                                                                                                                                                                                  | Codex 云端版还有 GitHub / PR 事件、inbox 摘要这类**事件型触发器**，以及 `createSuggestion` / `applySuggestion` 式的编辑建议；本仓库没有那些数据源，所以面板是「直接编辑 + 保存」，不做建议态。 |
| 触发结果 | 到点用 `CreateTask` + `StartTask` 拉起一条**单成员会话**（`member-1`，标题＝自动化名称，首条消息＝`prompt`）                                                                                                                                                                                                                         | 与 Codex 一致：自动化不复制会话内容，只在 `last_task_id` / `runs[].task_id` 里留指针，删自动化不删会话。                                                                                       |
| 调度位置 | **只在 Master** 跑：单点 tick（30s）扫描到期项                                                                                                                                                                                                                                                                                       | 集群里只有 Master 知道全局时间与节点可用性；让 Node 各自判断会重复拉起。                                                                                                                       |
| 停机错过 | 超过 5 分钟窗口不补跑，只顺延到下一个未来时刻，**且不写运行记录**                                                                                                                                                                                                                                                                    | 与 Codex 的补跑策略不同：补跑要么一次性拉起一串会话，要么让 `failure_count` 说谎。                                                                                                             |
| 立即运行 | 手动跑一次，不动 `next_run_at_ms`                                                                                                                                                                                                                                                                                                    | 语义是「验证配置」，不把后续节奏往前拽。                                                                                                                                                       |
| 运行历史 | 自动化记录上保留最近 8 条（新的在前）                                                                                                                                                                                                                                                                                                | Codex 另有独立的 automations 收件箱 / 设置页（`settings.automations.*`、`inbox.automations.*`）；本仓库只在详情区列出这 8 条，点「打开会话」跳回会话列表。                                     |
| 幂等     | 创建用 `create_request_id`；每次运行用 `automation-run-<id>-<trigger>-<at>` 当 `CreateTask.request_id`                                                                                                                                                                                                                               | 双击「新建」、调度循环重入都不会多拉起一条会话。                                                                                                                                               |
| 入口     | 窗口工具条第 2 个图标、右侧面板「+」菜单、命令面板的「定时任务」、**左栏「定时任务」一栏**（对齐 Codex 侧栏的 Scheduled：标题栏「+」＝`addAutomation`、行上的笔＝`editAutomation`、点行把面板转到那一条，见 `left-nav.md` §3.1），以及**会话行菜单的「添加 / 编辑定时任务」**（对齐 `scheduled-task`，见 `thread-row-menu.md` §3.1） | Codex 另有 automations 收件箱页与设置页里的自动化项；本仓库只有这一个面板。                                                                                                                    |
| 未读运行 | —                                                                                                                                                                                                                                                                                                                                    | 不做：Codex 的 `automationsMarkAllRead`（Mark all as read）要靠「哪几次运行还没看过」这套未读状态；本仓库的自动化只有运行记录（`runs[]`），没有已读水位，凭空造一个只会在多窗口之间对不上。    |

## 11. 相关命令速查

```
toggleSidebar  toggleReviewPanel  toggleBrowserPanel  toggleBottomPanel
toggleMaximizeSidePanel  togglePinnedSummary  toggleReviewTab
openSideChat  openBrowserTab  openReviewTab  openControlWindow
focusMainChat  focusSideChat  focusBrowserAddressBar
showWorkspaceTabView(Full view)  stepWorkspaceLayout(Show or hide tabs)
nextTab / previousTab / focusTab1..9 / closeOtherTabs / reopenClosedTab
openThreadInNewWindow  toggleTerminal(Open terminal)  toggleDebugModal
```
