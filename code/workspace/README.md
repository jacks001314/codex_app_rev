# workspace — 工作区页面

**14 个文件 / 0.19 MB**，152 条 i18n 文案。

“工作区”在本 app 里有两层含义：一是**应用主区域**（tab strip + 三向 pane，见 `../app-shell/`），二是这里的一组**工作区选择/管理页面**。

| chunk                                                        | 路由                     | 说明                                                                 |
| ------------------------------------------------------------ | ------------------------ | -------------------------------------------------------------------- |
| `select-workspace-page-7b2efabbff85.js` (16 KB)              | `/select-workspace`      | 首启/切换时选择工作区                                                |
| `workspace-agents-page-7cf536ab4a2f.js` (17 KB)              | sidebar 的 `Agents` 链接 | Workspace Agents 列表                                                |
| `workspace-agent-landing-468c3477f48b.js` (24 KB)            | —                        | Agent 落地页                                                         |
| `workspace-agent-detail-page-3d0ae7dbd6e0.js` (4 KB)         | —                        | Agent 详情                                                           |
| `workspace-agent-detail-query-ee964e0a64ba.js` (5 KB)        | —                        | 详情数据查询                                                         |
| `remote-workspace-root-dialog-5b449b8494ed.js` (21 KB)       | —                        | 远程工作区根目录对话框                                               |
| `workspace-layout-step-handler-d7284cc7accc.js` (2 KB)       | —                        | 布局分步处理（对应命令 `stepWorkspaceLayout` = “Show or hide tabs”） |
| `workspace-file-context-menu-trigger-f535672389ec.js` (1 KB) | —                        | 工作区文件右键菜单触发器                                             |
| `workspace-file-tab-context-menu-7d776c26a73d.js` (0 KB)     | —                        | 文件 tab 右键菜单（shim）                                            |
| `hotkey-window-home-page` / `home-composer-route`            | `/hotkey-window`         | Popout Window 首页                                                   |
| `terminal-workspace-warning-state-9c3cd18f8e4e.js`           | —                        | 终端的工作区警告态                                                   |

相关 i18n：`workspaceAgents.sidebar.unpin` = “Unpin agent”、`unpinFailed` = “Failed to unpin agent”；`sidebarElectron.workspaceOptions` / `remoteProjectOptions` = “Project actions for {folder}”；`sidebarElectron.addGenericWorkspaceRoot` = “Add new project”；`sidebarElectron.missingWorkspaceRoot` = “This project folder was deleted”。

工作区根目录的默认位置由 `$CODEX_HOME/worktrees` 决定（`app-initial` 里的 `XFt()`），路径统一 POSIX 化后比较，Windows 盘符路径忽略大小写。

---

## 文件清单

### `_deps/`

| 文件                                                  |   原始 | 格式化 | formatter | 来源                                             |
| ----------------------------------------------------- | -----: | -----: | --------- | ------------------------------------------------ |
| `agent-menu-ecf22be00deb.js`                          | 3.7 KB | 6.7 KB | prettier  | 闭包 ← `workspace-agent-landing-468c3477f48b.js` |
| `home-suggestion-list-c5a723041498.js`                | 3.3 KB | 5.3 KB | prettier  | 闭包 ← `workspace-agent-landing-468c3477f48b.js` |
| `use-hotkey-window-dismiss-on-escape-beb0ce766d08.js` | 0.7 KB | 0.9 KB | prettier  | 闭包 ← `hotkey-window-home-page-bfc4429f9d4f.js` |

### `pages/`

| 文件                                                  |    原始 |  格式化 | formatter | 来源     |
| ----------------------------------------------------- | ------: | ------: | --------- | -------- |
| `workspace-agent-landing-468c3477f48b.js`             | 24.1 KB | 39.8 KB | prettier  | 命名规则 |
| `hotkey-window-home-page-bfc4429f9d4f.js`             | 22.0 KB | 35.0 KB | prettier  | 命名规则 |
| `remote-workspace-root-dialog-5b449b8494ed.js`        | 20.7 KB | 37.0 KB | prettier  | 命名规则 |
| `workspace-agents-page-7cf536ab4a2f.js`               | 16.6 KB | 27.0 KB | prettier  | 命名规则 |
| `select-workspace-page-7b2efabbff85.js`               | 15.8 KB | 25.6 KB | prettier  | 命名规则 |
| `workspace-agent-detail-query-ee964e0a64ba.js`        |  5.2 KB |  7.6 KB | prettier  | 命名规则 |
| `workspace-agent-detail-page-3d0ae7dbd6e0.js`         |  4.3 KB |  6.5 KB | prettier  | 命名规则 |
| `workspace-layout-step-handler-d7284cc7accc.js`       |  2.3 KB |  3.4 KB | prettier  | 命名规则 |
| `hotkey-window-home-page-e938f981009c.css`            |  1.6 KB |  1.9 KB | prettier  | 命名规则 |
| `workspace-file-context-menu-trigger-f535672389ec.js` |  0.6 KB |  0.9 KB | prettier  | 命名规则 |
| `workspace-file-tab-context-menu-7d776c26a73d.js`     |  0.2 KB |  0.2 KB | prettier  | 命名规则 |

> 完整来源档案路径与 SHA-256 见 [`_INDEX.json`](_INDEX.json)；字符串/i18n 目录见 [`_CATALOG.json`](_CATALOG.json)。
