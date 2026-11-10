# conversation — 工作区的对话区

**110 个文件 / 2.07 MB**，934 条 i18n 文案。
完整分析见 [`../../conversation-area.md`](../../conversation-area.md)。

三个并列的页面实现，对应三种会话来源：

| 组件                      | chunk                                                     | 路由                     |
| ------------------------- | --------------------------------------------------------- | ------------------------ |
| `LocalConversationPage`   | `pages/local-conversation-page-3f93e4c62cc7.js` (57 KB)   | `/local/:conversationId` |
| `RemoteConversationPage`  | `pages/remote-conversation-page-8ce4bf8a7d6c.js` (69 KB)  | `/remote/:taskId`        |
| `ChatGptConversationPage` | `pages/chatgpt-conversation-page-733818e9db52.js` (75 KB) | ChatGPT 模式             |

## thread/

`local-conversation-thread-a2bcd054c9d2.js` 格式化后 **20525 行 / 345 KB**，是对话区最重的单个 chunk —— transcript 的容器与全部行渲染。同目录还有 0 KB 的 shim `local-conversation-thread-69ea3d5cb325.js`。

配套：`thread-overflow-menu`（thread 溢出菜单）、`thread-pin-shortcut-bridge`（置顶快捷键桥）、`thread-usage-breakdown`（上下文用量明细）、`local-conversation-git-actions`（50 KB，git 操作条）、`local-conversation-plan-model`、`local-conversation-webmcp-tools-model`、`use-conversation-diff-comments`、`local-conversation-background-agent` / `open-local-conversation-background-agent`。

## turn/

`local-conversation-thread-turn-entries-3bc0985c25c6.js`（7 KB）是把 turn 数组加工成渲染 entry 数组的核心，**代码完全可读**，是理解对话区数据流的最佳入口。要点：

- entry 的稳定 key 是 `turnKey = historyPositionKey ?? turnSearchKey`；
- `x(prev, next)` 是约 35 个字段的深度相等判断，相等就**复用旧对象引用**，避免虚拟化列表整列重渲染；
- `renderMcpApps` 对最后 3 个 turn 取 `auto-expand`，其余 `default`；
- 语音条目 `voice-nux` / `voice-presentation` / `voice-transcript` 与 `type:"gap"` 占位条目被排除出 turn 计数；
- `generatedImages` 汇总所有 turn 的 `imageGeneration` 产物。

`local-conversation-turn-8acd99401e74.js`（46 KB）是单个 turn 的渲染；`local-conversation-stream-role-product-event` 处理流式角色事件。

## scroll/

`thread-virtualizer-4f61d89b50be.js`（2 KB，**与 26.901 版本逐字节相同**）是底部锚定的自研虚拟化器：

```js
buildLayout({ collapseEmptyRows, entries, gapPx, measuredHeightsByKey });
computeRange({ distanceFromBottomPx, layout, overscanCount, viewportHeightPx });
anchorRange({ anchorKey, layout, previousRange });
preserveDistanceFromBottom({ anchorKey, distanceFromBottomPx, nextLayout, previousLayout });
distanceToCenterKey({ layout, turnKey, viewportHeightPx });
```

行高 = `max(minHeightPx ?? 0, measured[key] ?? estimatedHeightPx ?? 280)`，**默认估算 280px**；`computeRange` 用两次二分查找定位区间再各扩 `overscanCount`。

`thread-scroll-layout-4583603e4217.js`（29 KB）提供滚动控制器（`useThreadScrollController`，越界抛 `must be used within ThreadScrollLayout`）：`getScrollElement()`、`scrollToBottom()`、`scrollToDistanceFromBottomPx(px, "instant")`、`getLastScrollDistanceFromBottomPx()`、`addUserScrollListener(cb)`。常量：贴底阈值 **24px**、到末尾阈值 **64px**、`DOM_DELTA_LINE` 换算 **16px**、节流 **1000ms**、默认 overscan **260**。

CSS 里的 `._Probe_*` 是一个 `height:0; visibility:hidden` 的**隐形测量元素**，宽度
`calc(max(var(--thread-content-max-width), var(--markdown-wide-block-max-width) + 8rem) + var(--padding-toolbar) * 2)`，用于量出 markdown 可用宽度；`._compactScrollMask_*` / `._compactHeaderScrollFade_*` 用 `mask-image` 在 sticky header 与浮动 composer 处做柔和淡出（`--edge-fade-distance` 默认 1rem）。

## markdown/

`conversation-markdown-70a42265cc66.js`（20 KB）正文渲染；`chatgpt-code-block-a3d300f795d8.js`（39 KB）代码块；`conversation-source-3c0ae9358599.js`（27 KB）与 `chatgpt-sources-message` 引用来源。字号由 `--codex-chat-font-size`、`--codex-chat-code-font-size`、`--markdown-font-size`、`--markdown-space` 控制。

## nav-rail/

`thread-user-message-navigation-rail-app-4703491a5992.js`（30 KB）+ 同名 CSS：长对话中“跳到第 N 条用户消息”的导航条。

---

## 文件清单

### `_deps/`

| 文件                                                                   |    原始 |   格式化 | formatter | 来源                                                    |
| ---------------------------------------------------------------------- | ------: | -------: | --------- | ------------------------------------------------------- |
| `git-branch-picker-dropdown-content-16bc93de7d03.js`                   | 69.5 KB | 112.2 KB | prettier  | 闭包 ← `local-conversation-git-actions-f27d2904645d.js` |
| `plan-summary-item-content-88eb5c2fafb8.js`                            | 35.9 KB |  56.1 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `pull-request-fix-workflow-527420cd2c1d.js`                            | 35.1 KB |  54.5 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `mcp-tool-item-content-5427b9fecd85.js`                                | 32.5 KB |  52.8 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `agent-activity-item-99bed1259d6b.js`                                  | 32.2 KB |  45.3 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `local-environment-editor-1e185852cf27.js`                             | 30.6 KB |  53.0 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `chatgpt-temporary-chat-ui-74ff09208d4a.js`                            | 26.9 KB |  36.2 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `environment-labels-655533fc7a67.js`                                   | 25.0 KB |  40.7 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `open-tab-72525c02e449.js`                                             | 22.0 KB |  32.5 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `content-reference-markers-baac3407713e.js`                            | 21.0 KB |  28.4 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `worktree-setup-auto-fix-47aace51921d.js`                              | 16.5 KB |  24.6 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `circle-exclamation-mark-light-16-474b9ca832b4.js`                     |  8.4 KB |  11.0 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `runtime-7426498e860b.js`                                              |  7.1 KB |  10.0 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `optimistic-metadata-a01dfc49514b.js`                                  |  6.1 KB |  10.6 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `response-928d7dce6579.js`                                             |  5.9 KB |   8.3 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `skill-exploration-labels-375728b900a9.js`                             |  5.7 KB |   7.5 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `remote-hosted-pip-anchor-bridge-ef1041f240d2.js`                      |  5.4 KB |   7.7 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `safety-buffering-status-transition-32d2dc8853a3.js`                   |  5.4 KB |   8.4 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `chatgpt-gizmo-header-b574da470fab.js`                                 |  5.1 KB |   7.1 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `split-items-into-render-groups-752e1f581d99.js`                       |  5.0 KB |   7.6 KB | prettier  | 闭包 ← `conversation-markdown-70a42265cc66.js`          |
| `realtime-voice-stage-layout-c0879068638f.js`                          |  4.3 KB |   7.1 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `invoice-c62eda8816cf.js`                                              |  4.0 KB |   4.2 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `source-bf02458f5659.js`                                               |  3.1 KB |   4.7 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `ChevronRight-9ebd4395b90f.js`                                         |  3.0 KB |   4.1 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `cursor-interactive-light-16-68e3de2313db.js`                          |  2.7 KB |   3.1 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `client-dbffaaa9512f.js`                                               |  2.7 KB |   4.0 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `preview-footer-controls-38ae3d627c7c.js`                              |  2.4 KB |   3.8 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `tool-activity-disclosure-6103c5aa72b1.js`                             |  2.3 KB |   3.6 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `preview-footer-a1f7b6ebe21f.js`                                       |  2.2 KB |   3.5 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `pull-request-f6a81f1ccc2f.js`                                         |  2.2 KB |   2.6 KB | prettier  | 闭包 ← `local-conversation-git-actions-f27d2904645d.js` |
| `use-codex-worktrees-4816d4e23919.js`                                  |  2.2 KB |   3.2 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `book-open-1c76ceab8565.js`                                            |  2.0 KB |   2.2 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `work-with-apps-6946d5f7e5de.js`                                       |  2.0 KB |   2.4 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `arrow-branch-light-16-cdf94f439042.js`                                |  2.0 KB |   2.3 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `eye-3fd8cd7cd66d.js`                                                  |  2.0 KB |   2.3 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `circle-person-light-16-db04082bce15.js`                               |  1.9 KB |   2.2 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `detail-section-f9ad9cac9a53.js`                                       |  1.8 KB |   3.0 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `flask-5f81bf18fd17.js`                                                |  1.8 KB |   2.0 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `chatgpt-source-icon-18c04bb49eff.js`                                  |  1.7 KB |   2.7 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `sectioned-page-section-header-fe28a4700b8d.js`                        |  1.6 KB |   2.3 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `timestamps-2a227dd4bcfa.js`                                           |  1.3 KB |   1.8 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `pull-request-status-label-5a6c4f7bce5d.js`                            |  1.3 KB |   2.0 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `commit-2c0030d3a535.js`                                               |  1.2 KB |   1.6 KB | prettier  | 闭包 ← `local-conversation-git-actions-f27d2904645d.js` |
| `collapse-f3eca6f029fa.js`                                             |  1.2 KB |   1.4 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `dock-de9acbce75c2.js`                                                 |  1.2 KB |   1.5 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `star-9cc19634d573.js`                                                 |  1.1 KB |   1.3 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `open-target-ad587ef7a716.js`                                          |  1.1 KB |   1.5 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `generated-image-output-visibility-453ae5a0de52.js`                    |  1.0 KB |   1.3 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `webmcp-tool-calls-f4b709411704.js`                                    |  1.0 KB |   1.3 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `computer-use-native-app-metadata-ce3a8605f5bd.js`                     |  0.8 KB |   1.1 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `use-git-submodule-paths-2adf56e7dea1.js`                              |  0.8 KB |   1.1 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `automation-status-messages-8323ed1c597b.js`                           |  0.6 KB |   0.8 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `use-git-config-value-160824d3b3c6.js`                                 |  0.6 KB |   0.9 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `chat-tab-metadata-bridge-113ca5f6f676.js`                             |  0.6 KB |   1.0 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `respond-663242d03ba1.js`                                              |  0.5 KB |   0.7 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `shell-label-6a4df03fd369.js`                                          |  0.5 KB |   0.6 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `use-hotkey-window-detail-layout-c05db7c47d12.js`                      |  0.5 KB |   0.8 KB | prettier  | 闭包 ← `hotkey-window-new-thread-page-48ec2a7a4cc4.js`  |
| `command-execution-command-fda2ded549ba.js`                            |  0.4 KB |   0.5 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `side-chat-tab-content-c74f2d2b0d25.js`                                |  0.4 KB |   0.6 KB | prettier  | 闭包 ← `thread-pin-shortcut-bridge-692ac0843530.js`     |
| `mcp-app-analytics-d4aac36ba72c.js`                                    |  0.4 KB |   0.5 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `use-realtime-voice-native-overlay-transition-enabled-6ea7698e3ad4.js` |  0.4 KB |   0.5 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `git-action-review-state-fd1544c9df12.js`                              |  0.3 KB |   0.4 KB | prettier  | 闭包 ← `local-conversation-page-3f93e4c62cc7.js`        |
| `turn-preview-body-items-ffb40ca1c7b1.js`                              |  0.3 KB |   0.4 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `diff-summary-5c18416871fa.js`                                         |  0.3 KB |   0.3 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `partition-fe47690951b4.js`                                            |  0.3 KB |   0.3 KB | prettier  | 闭包 ← `chatgpt-conversation-page-733818e9db52.js`      |
| `registered-4d5b306e0eb1.js`                                           |  0.1 KB |   0.1 KB | prettier  | 闭包 ← `thread-pin-shortcut-bridge-692ac0843530.js`     |
| `loading-page-904cda4435ce.js`                                         |  0.1 KB |   0.1 KB | prettier  | 闭包 ← `thread-pin-shortcut-bridge-692ac0843530.js`     |

### `markdown/`

| 文件                                      |    原始 |  格式化 | formatter | 来源     |
| ----------------------------------------- | ------: | ------: | --------- | -------- |
| `chatgpt-code-block-a3d300f795d8.js`      | 38.7 KB | 59.6 KB | prettier  | 命名规则 |
| `conversation-source-3c0ae9358599.js`     | 27.5 KB | 44.5 KB | prettier  | 命名规则 |
| `conversation-markdown-70a42265cc66.js`   | 19.6 KB | 26.4 KB | prettier  | 命名规则 |
| `chatgpt-sources-message-510147b6e789.js` |  4.1 KB |  5.3 KB | prettier  | 命名规则 |
| `conversation-markdown-2bae28adae1e.js`   |  0.1 KB |  0.1 KB | prettier  | 命名规则 |
| `chatgpt-code-block-12bf995a0419.css`     |  0.1 KB |  0.1 KB | prettier  | 命名规则 |

### `nav-rail/`

| 文件                                                       |    原始 |  格式化 | formatter | 来源     |
| ---------------------------------------------------------- | ------: | ------: | --------- | -------- |
| `thread-user-message-navigation-rail-app-4703491a5992.js`  | 29.9 KB | 46.3 KB | prettier  | 命名规则 |
| `thread-user-message-navigation-rail-app-33e1d82a93e0.css` |  3.5 KB |  4.3 KB | prettier  | 命名规则 |

### `pages/`

| 文件                                                  |    原始 |   格式化 | formatter | 来源     |
| ----------------------------------------------------- | ------: | -------: | --------- | -------- |
| `chatgpt-conversation-page-733818e9db52.js`           | 75.4 KB | 119.2 KB | prettier  | 命名规则 |
| `remote-conversation-page-8ce4bf8a7d6c.js`            | 69.5 KB | 110.2 KB | prettier  | 命名规则 |
| `local-conversation-page-3f93e4c62cc7.js`             | 57.3 KB |  90.7 KB | prettier  | 命名规则 |
| `use-resume-conversation-if-needed-88b53f9297c7.js`   |  6.7 KB |  11.4 KB | prettier  | 命名规则 |
| `start-appgen-conversation-389745f7419d.js`           |  3.7 KB |   5.1 KB | prettier  | 命名规则 |
| `hotkey-window-thread-page-8dd2de95295e.js`           |  3.2 KB |   5.4 KB | prettier  | 命名规则 |
| `use-local-conversation-sources-733990c21ff1.js`      |  2.9 KB |   4.3 KB | prettier  | 命名规则 |
| `hotkey-window-new-thread-page-48ec2a7a4cc4.js`       |  2.1 KB |   3.1 KB | prettier  | 命名规则 |
| `share-conversation-action-d44b236b4916.js`           |  1.9 KB |   2.6 KB | prettier  | 命名规则 |
| `unrestored-thread-tab-route-51d605a80a8f.js`         |  1.7 KB |   2.5 KB | prettier  | 命名规则 |
| `conversation-2aefcc6a5de7.js`                        |  1.5 KB |   2.3 KB | prettier  | 命名规则 |
| `local-conversation-sources-signals-4de97ec9f993.js`  |  1.5 KB |   2.3 KB | prettier  | 命名规则 |
| `local-environment-workflow-messages-6e2a4950d847.js` |  1.2 KB |   1.5 KB | prettier  | 命名规则 |
| `chatgpt-conversation-client-defcb2d6f5ce.js`         |  0.2 KB |   0.2 KB | prettier  | 命名规则 |

### `scroll/`

| 文件                                                     |    原始 |  格式化 | formatter | 来源     |
| -------------------------------------------------------- | ------: | ------: | --------- | -------- |
| `thread-scroll-layout-4583603e4217.js`                   | 17.5 KB | 28.9 KB | prettier  | 命名规则 |
| `thread-virtualizer-4f61d89b50be.js`                     |  2.0 KB |  2.6 KB | prettier  | 命名规则 |
| `thread-scroll-layout-26a32b412ec3.css`                  |  1.4 KB |  1.7 KB | prettier  | 命名规则 |
| `thread-scroll-controller-context-value-6a9e93eb1505.js` |  0.4 KB |  0.5 KB | prettier  | 命名规则 |
| `thread-context-3e6dbe446c9b.js`                         |  0.3 KB |  0.3 KB | prettier  | 命名规则 |
| `thread-tab-route-checkpoint-7234efcec5da.js`            |  0.1 KB |  0.1 KB | prettier  | 命名规则 |

### `thread/`

| 文件                                                    |     原始 |   格式化 | formatter | 来源     |
| ------------------------------------------------------- | -------: | -------: | --------- | -------- |
| `local-conversation-thread-a2bcd054c9d2.js`             | 345.2 KB | 559.1 KB | prettier  | 命名规则 |
| `local-conversation-git-actions-f27d2904645d.js`        |  50.2 KB |  83.1 KB | prettier  | 命名规则 |
| `thread-pin-shortcut-bridge-692ac0843530.js`            |  13.2 KB |  19.0 KB | prettier  | 命名规则 |
| `thread-overflow-menu-242a94915c0b.js`                  |  11.4 KB |  19.7 KB | prettier  | 命名规则 |
| `thread-usage-breakdown-f26f6335d0fb.js`                |  10.7 KB |  17.5 KB | prettier  | 命名规则 |
| `local-conversation-webmcp-tools-model-40d1a7153ca0.js` |   9.5 KB |  13.2 KB | prettier  | 命名规则 |
| `use-conversation-diff-comments-ab6bb05add1f.js`        |   2.1 KB |   3.2 KB | prettier  | 命名规则 |
| `local-conversation-plan-model-f754ec01e101.js`         |   0.6 KB |   0.7 KB | prettier  | 命名规则 |
| `local-conversation-thread-69ea3d5cb325.js`             |   0.1 KB |   0.1 KB | prettier  | 命名规则 |

### `turn/`

| 文件                                                           |    原始 |  格式化 | formatter | 来源     |
| -------------------------------------------------------------- | ------: | ------: | --------- | -------- |
| `local-conversation-turn-8acd99401e74.js`                      | 46.3 KB | 76.8 KB | prettier  | 命名规则 |
| `artifact-originating-turn-1d99e170e424.js`                    | 15.1 KB | 23.7 KB | prettier  | 命名规则 |
| `local-conversation-thread-turn-entries-3bc0985c25c6.js`       |  7.1 KB |  9.2 KB | prettier  | 命名规则 |
| `revision-review-unavailable-message-adbe72fc0fd9.js`          |  3.2 KB |  4.8 KB | prettier  | 命名规则 |
| `visualization-thread-frames-a72ae01725ba.js`                  |  2.7 KB |  4.1 KB | prettier  | 命名规则 |
| `local-conversation-stream-role-product-event-28e61d930003.js` |  1.6 KB |  2.6 KB | prettier  | 命名规则 |

> 完整来源档案路径与 SHA-256 见 [`_INDEX.json`](_INDEX.json)；字符串/i18n 目录见 [`_CATALOG.json`](_CATALOG.json)。
