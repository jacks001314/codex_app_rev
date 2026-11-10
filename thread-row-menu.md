# 会话行菜单（thread row context menu）对齐

本仓库对 Codex desktop **会话行菜单**（右键 / `⋯` 弹出的那一栏，截图里的红框）的实现记录。

- Codex 侧证据基线：本机 26.908 版 `app.asar`（pretty bundle 在 `codex_app_rev/.work/sketch908/big/`）
- 本仓库侧证据：`desktop_app`、`web_backend`、`api/proto`、`syntropy_master`、`syntropy_node`（行号按 2026-09-15 工作区，会漂移）
- 相关文档：[left-nav.md](left-nav.md) §5 行级操作（侧边栏整体）、[file-handling.md](file-handling.md)（产物与打开方式）

## 1. 结论

Codex 的行菜单是**七节数据驱动**的清单：`primary → organization → copy → continuation → notifications → window → internal`，过滤掉空节之后，**除第一节外每节之前插一条 separator**（`app-primary.pretty.js:90183-90222`）。本节把其中与「会话」有关、且本仓库有对应概念的项全部落地（含快捷键列），并明确列出有意不做对齐的项（share、deeplink、conversation markdown、side chat）。

两种打开方式（右键、`⋯`）与落点、快捷键的作用对象见 §3.2：右键落在指针处，`⋯` 落在按钮下方；菜单 portal 到 `body` 用 fixed 定位，避开侧边栏这个滚动容器的裁剪。

本仓库的对应实现也是数据驱动的：菜单结构在 `desktop_app/apps/desktop/src/renderer/session-list.ts:73` 的 `sessionRowMenu()`，渲染在 `desktop_app/apps/desktop/src/renderer/App.tsx:537` 的 `SessionRow`，动作由 `App` 注入（`App.tsx:2381` `renderSessionRow`）。这样「菜单里有哪些项、什么顺序、何时置灰」是可以单测的事实（`desktop_app/tests/component/session-list.component.test.ts`）。

## 2. Codex 侧结构（证据）

### 2.1 分节与条目

`app-primary.pretty.js:89997-90222` 是行菜单的构造点。各节的条目：

| 节              | 条目 id                                              | 文案（i18n id）                                        | 出现条件                            |
| --------------- | ---------------------------------------------------- | ------------------------------------------------------ | ----------------------------------- |
| `primary`       | `pin`                                                | `Pin chat` / `Unpin chat`                              | 未归档、非侧栏模式                  |
|                 | `rename-thread`                                      | `Rename chat`                                          | 同上                                |
|                 | `readState`                                          | `Mark as unread` / `Mark as read`                      | `o === "sidebar"`                   |
|                 | `archive-thread`                                     | `Archive chat` / `Unarchive chat`                      | 未归档                              |
|                 | `delete-thread`                                      | `Permanently delete`（`sidebarElectron.deleteThread`） | Codex 模式                          |
| `organization`  | `move-to-project` 系列（`Y3t(f6t(...))`、`nH(...)`） | `Move to project`                                      | —                                   |
| `copy`          | `copy-working-directory`                             | `Copy working directory`                               | 有 cwd                              |
|                 | `copy-deeplink`                                      | `Copy deeplink`                                        | —                                   |
|                 | `copy-conversation-markdown`                         | `Copy conversation as Markdown`                        | —                                   |
|                 | `share`（`uke(...)`）                                | 分享                                                   | 可分享时                            |
| `continuation`  | `scheduled-task`                                     | `Add/Edit scheduled task`                              | header 模式、有定时任务能力         |
|                 | `open-side-chat`                                     | `New side chat`                                        | header 模式                         |
|                 | `fork` ▸                                             | `Fork`                                                 | header 模式                         |
|                 | ├ `fork-into-local`                                  | `Fork into local` / `Fork into same worktree`          | —                                   |
|                 | ├ `fork-into-worktree`                               | `Fork into worktree`                                   | 有 worktree                         |
|                 | ├ `new-chat-in-worktree`                             | `New chat in worktree`                                 | 本地 + 有 worktree + 非 projectless |
| `notifications` | `P2t(...)`                                           | 通知类                                                 | 有通知能力时                        |
| `window`        | `open-workspace-in` ▸（`UEe`）                       | `Open in …`                                            | 有工作区路径                        |
|                 | ├ `open-workspace-in-<target>`                       | 每个目标一条（编辑器 / 终端 / 文件管理器）             | 目标可用                            |
|                 | ├ `open-workspace-in-loading`                        | `Loading…` 占位                                        | 目标列表未回来                      |
|                 | `open-in-new-window`                                 | `Open in new window`                                   | 非侧栏模式                          |
| `internal`      | —                                                    | 调试项                                                 | 内部构建                            |

「打开方式」是**工作区级**而不是会话级的：`UEe` 在 `app-initial.pretty.js:211507-211530` 定义，输入是 `cwd` + `hostId`，产出本机可用目标的子菜单。这一点决定本仓库的取舍（见 §4）。

### 2.2 分隔线

```js
.filter(({items}) => items.length > 0)
.flatMap(({id, items}, n) => n === 0 ? items : [{ id: `${id}-separator`, type: "separator" }, ...items])
```

即：空的节整节消失，非空节除第一节外**每节前都有一条线**。本仓库按同样规则实现（`sessionRowMenu` 的 `divider` 字段 + `App.tsx:782`）。

### 2.3 破坏性动作与分叉的确认

- `delete-thread` 不当场删：`onSelect` 里 `await import("./delete-thread-dialog-…js")` 再 `ud(e, DeleteThreadDialog, { conversationId, hostId, returnFocusTo })`。删除是**带对话框确认**的破坏性动作（`selectAfterClose: true`：菜单先关，焦点交回触发点）。
- `fork` 是子菜单而不是单项：因为 Codex 有三种分叉目的地（local / same worktree / worktree）。

## 3. 本仓库实现映射

| Codex 项                                                               | 本仓库实现                                                                                                                                                                                                                              | 状态                                                                    |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `rename-thread`                                                        | `App.tsx:647` `runMenuEntry("rename")` → `SessionRow` 行内就地编辑（`App.tsx:695-720`）→ `renameSession`（`App.tsx:1535`）→ `taskRename`                                                                                                | 已对齐（就地编辑而非弹窗）                                              |
| `pin` / `unpin`                                                        | `runMenuEntry("pin")` → `togglePinSession`（`App.tsx:2359`）→ `pinnedSessionsSet`                                                                                                                                                       | 已对齐（细节：置顶是**本机偏好**，不写回 Master，见 `contracts.ts:99`） |
| `readState`                                                            | `runMenuEntry("mark-read"/"mark-unread")` → `markSessionRead`（`App.tsx:1552`）/ `markSessionUnread`（`App.tsx:2588`）→ `taskRead` / `taskUnread` → Master `MarkTaskUnread`（`syntropy_master/handle/task/task_service_handle.go:545`） | 已对齐                                                                  |
| `archive-thread`                                                       | → `archiveSession`（`App.tsx:1542`）→ `taskArchive`                                                                                                                                                                                     | 已对齐                                                                  |
| `delete-thread`                                                        | `runMenuEntry("delete")` → `requestSessionDelete` 打开应用内 `ConfirmDialog`（`ConfirmDialog.tsx`），确认后 `confirmSessionDelete` 先停再删 → `taskDeleteForever`（`main.ts:2603`）                                                     | 已对齐（确认框也是自绘的，见 §6）                                       |
| `organization` / `move-to-project`                                     | `SessionMenuGroup`「项目」（`App.tsx:785`）→ `moveSessionProject`（`App.tsx:2597`）→ `taskMoveProject` → Master `MoveTaskProject`（`task_service_handle.go:568`）                                                                       | 已对齐                                                                  |
| `copy-working-directory`                                               | 「复制 ▸ 工作目录」→ `copySessionWorkingDirectory`（`App.tsx:2685`）→ `taskWorkingDirectory`（`main.ts:2631`，取入口成员 `spec.workspace`）                                                                                             | 已对齐                                                                  |
| `copy-deeplink` / `copy-conversation-markdown` / `share`               | —                                                                                                                                                                                                                                       | 不做（本仓库没有 deeplink 协议、没有「分享」，见 §7）                   |
| `fork`（三目的地）                                                     | 单项「分叉」→ `forkSession`（`App.tsx:3216`）→ `taskFork` → Master `ForkTask`（`task_service_handle.go:731`）；对话区每条回答另有入口（见 §5.1）                                                                                        | 已对齐（只保留「继承源线程」一种目的地，见 §5）                         |
| `scheduled-task`                                                       | 「延续」节第一项「添加定时任务 / 编辑定时任务」→ 打开右栏「定时任务」页签并把面板转到这条会话上（`App.tsx` `openSessionScheduledTask`）                                                                                                 | 已对齐（文案随这条会话有没有定时任务换向，见 §3.1）                     |
| `open-side-chat`                                                       | —                                                                                                                                                                                                                                       | 不做（本仓库没有 side chat，即临时右栏会话）                            |
| `open-workspace-in` ▸ / `open-in-new-window`                           | 「打开方式 ▸ 远程项目文件 / 远程终端」与「在新窗口中打开」（`App.tsx:778-829`）                                                                                                                                                         | 有意差异，见 §4                                                         |
| 快捷键列（`Alt+Ctrl+R`、`Alt+Ctrl+P`、`Ctrl+Shift+U`、`Ctrl+Shift+A`） | 菜单里显示键位（`session-list.ts:68` `sessionMenuShortcuts`），键位真的可用：`App.tsx:4457` `shortcutSession` + `App.tsx:4463` `handleSessionShortcut`                                                                                  | 已对齐（作用对象是「当前会话」，见 §3.2）                               |

### 3.2 打开手势、落点与快捷键

Codex 的行菜单有两种打开方式（右键、`⋯`），落点都跟着手势走：右键落在指针处，
`⋯` 落在按钮下方并右对齐。本仓库同样两种都给：

| 环节           | 做法                                                                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 右键           | 行上 `onContextMenu`（`App.tsx:890`）拦下系统菜单，`openMenuAt({kind:"pointer", x, y})` 记下指针                                                                                                              |
| 键盘           | 行上 Shift+F10 / 菜单键（`ContextMenu`）= 右键这一行，落点回到 `⋯` 按钮                                                                                                                                       |
| `⋯`            | 落点回到按钮（上一次可能是右键开的，指针位置已经过期）                                                                                                                                                        |
| 落点计算       | 纯函数 `session-menu-anchor.ts` `sessionMenuPlacement`：指针贴右下缘会翻边，最后统一夹进窗口 8px 内；单测 `tests/component/session-menu-anchor.component.test.ts`                                             |
| 挂载位置       | 菜单 portal 到 `body` + `position: fixed`。侧边栏（`.navigation-groups`）是滚动容器，菜单留在行内会被裁掉——这也是「打开方式」子菜单要给 `data-side` 的原因（左边放不下翻到右边，同文件 `sessionSubmenuSide`） |
| 收口           | 点外面 / Esc 关掉；列表滚动、窗口改尺寸则**重算落点**而不是收掉（点 `⋯` 本身可能让容器把按钮滚进视野，收掉就成了「刚打开就没了」）                                                                            |
| 快捷键作用对象 | 菜单开着的那一行优先，没有打开的菜单就用列表里选中的会话（右键不改选中态）。Codex 按的是「当前对话」，本仓库没有全局焦点这回事，所以把「当前会话」定义成这两者的顺序                                          |
| 快捷键做实     | 菜单里写 `Alt+Ctrl+R` 就必须按得动：`App.tsx:4463` 直接拿 `sessionMenuShortcuts` 的 `key` 去比对键位，不另写一份文案                                                                                          |

### 3.1 `scheduled-task`：从会话行打开定时任务

Codex 的 `scheduled-task` 只在「header 模式 + 有定时任务能力」时出现，文案是
`Add scheduled task` / `Edit scheduled task` 一项两态。本仓库对齐方式：

| 环节         | 做法                                                                                                                                                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 文案换向     | 「这条会话有没有定时任务」存在 Master 的自动化记录里（`automation.last_task_id` 与 `runs[].task_id`），所以**打开行菜单时按需拉一次** `listAutomations`，把结果当一串会话 id 用（`automation-format.ts` `automationTaskIds`）。不常驻一份清单：常驻要么跟着面板里的增删同步，要么在别处改了集群之后说谎 |
| 点击后       | 打开右栏「定时任务」页签，并把这次「关注哪条会话」带进去（`InspectorPage.focus`）。面板已经在开着时，页签清单里就地换成带新关注点的版本；已经在关注同一条会话则不动，免得把没保存的编辑顶掉                                                                                                             |
| 面板里的判定 | 「是编辑还是新建」由面板决定而不是 App：它手里就是集群当前那份清单。命中已有的就选中它（`findAutomationForTask`），没命中就按这条会话起一份新表单（`formStateFromTask`：名字与指令都用会话标题占位、项目跟着会话走）                                                                                    |
| 有意差异     | 本仓库的定时任务是「一段指令 + 一条规则，每次到点新建一条会话」，没有 Codex 那种「直接排某条会话」的形态，所以这里**不会**把会话内容复制进自动化（自动化与它拉起的会话之间只有指针，见 `side-panel.md` §10）                                                                                            |

## 4. 「打开方式」为什么不是本机应用列表

Codex 的 `open-workspace-in` 列出的是**本机**能打开该 cwd 的目标（编辑器 / 终端 / 文件管理器），前提是工作区就在本机。本仓库的会话工作区在**节点**上：`spec.workspace` 由 Master 侧 Agent 部署决定（`main.ts:2631` 就是为此专门读一次 Master）。所以「打开方式」给的是这台机器真正能打开它的两条路：

- **远程项目文件**：右侧 inspector 的远程文件页（`openRemoteFilesForProject`）
- **远程终端**：节点终端页（`openRemoteTerminalForProject`）

即时会话（没有项目工作区）两项都置灰——没有可打开的远端工作区。这条差异是**有意的**，不是未实现。

## 5. 分叉（fork）的端到端链路

Codex 的 fork 是 `conversation/fork` 语义：新会话继承源会话线程的历史。本仓库的链路：

1. 渲染层 `forkSession`（`App.tsx:3216`）POST `taskFork`，幂等键 `requestId`；
2. `main.ts:2897` 转发到 web_backend `POST /api/tasks/{id}/fork`（`web_backend/service/task/task_service.go:60` 注册，`task_service.go:219` 处理）；
3. Master `ForkTask`（`task_service_handle.go:731`）：
   - 幂等：`last_fork_request_id` 命中就返回同一条会话（`syntropy_master/store/task_store.go:89` `FindByForkRequestID`）；
   - 拒绝已删除、未部署、Agent 不存在、非 RUNNING 的源会话；
   - 克隆 members / edges / initial content，冻结项目 revision；清空 `agent_id` / `operation_id` / `default_thread_id` / phase；
   - **只有入口成员**写 `fork_from_agent_id`（`TaskMember.fork_from_agent_id`），并把新会话记成 `forked_from_task_id`；
   - 返回 **CREATED/STOPPED** 的新会话（不自动启动）；
4. 渲染层拿到新会话后立刻 `startTask`，并进入和新建会话一样的「等部署完成」流程；部署完成后节点侧按 `fork_from_agent_id` 走 provider 原生 fork 继承源线程（`syntropy_node/agent/recovery.go:106`、`runtime_driver.go:323`、`forkSourceThreadID`（`runtime_driver.go:608`））；
5. 分叉会话**不重发** initial content（`syntropy_master/handle/task/reconcile.go:295`），否则历史会重复一遍；源成员从当前部署拷回（`reconcile.go:341`），避免源 Agent 消失后重启分叉会话时解析不到源线程。

列表里分叉会话会带一个分叉标记（`App.tsx:922-925`，悬停显示「分叉自 <源标题>」）。

写入顺序是本仓库与 Codex 对齐过程里最容易做错的一处（issue #130）：**继承前缀必须先一次
事务写进分支的事件日志，然后才登记分支会话**。会话列表读 `tasks` 桶、会话内容读事件日志，
顺序反过来就会出现「左侧行已经出现、点开却停在旧历史中途」的窗口——而且那时分支连 Agent
都还没部署。回归测试 `syntropy_master/handle/task/fork_publish_test.go`；真实链路验收
`desktop_app/tools/e2e-fork-session.ps1`（真实 Master + 真实 Node + 真实模型，单 Agent 与
双 Agent 团队各一条）。分支的时间线还会在继承段之后画一条分隔（按 `history.inherited` 的
`throughSequence` 定位，`TaskPage.tsx` 的 `InheritedHistoryDivider`），对齐 Codex 的
`localConversation.forkedFromConversation`（"Continued from chat"）。

### 5.1 从某条回答分叉（对话区）

Codex 的分叉入口不止会话行菜单一处：**每条助手回答的动作行里也有一个**，`assistantMessageContent.forkAriaLabel` = `Fork chat from here`（`code/_catalog/i18n-messages.json:5643`）。点到较早的一轮时先弹一个目的地对话框（`localConversation.forkFromOlderTurnDialog.*`，标题同为 `Fork chat from here`，按钮 `Fork in this workspace` / `Fork in this worktree` / `Fork in a new worktree`，`local-conversation-thread-a2bcd054c9d2.js:13631`），因为新会话要从那一轮往后重新长。

本仓库把这条入口落在对话区：`response-actions` 里多一个分叉按钮（`VirtualTimeline.tsx:1181`，aria-label 与 title 都是「从此分叉到新聊天」），并且只对**已结束的轮次**出现——`canForkFromTurn`（`VirtualTimeline.tsx:1113`）要求 `turnId` 非空且状态不是 pending / running / streaming，对应协议里那句「被引用的 turn 不能在跑」。

链路复用 §5 那条，只多一个**截断点**：

1. `FinalAnswer` 把 `item.turnId` 交给 `onForkFromTurn` → `App.tsx:3253` `forkTaskFromTurn` → `forkSession(task, turnId)`（`App.tsx:3216`；草稿会话没有可继承的线程，直接返回）；
2. `TaskForkInputSchema.forkFromTurnId`（`contracts.ts:2308`，可选、≤256 字符）→ `main.ts:2897` `taskFork` → web_backend `POST /api/tasks/{id}/fork`；
3. Master `ForkTask` 把它写在**入口成员**上（`TaskMember.fork_from_turn_id`，`task_service_handle.go:797`）——非入口成员本来就不继承历史；
4. 部署时 `agentSpec` 透传到 `AgentSpec.fork_from_turn_id`（`runtime_config.go:106`）；`reconcile.go:343` 和 `fork_from_*` 一样从现有部署拷回，源会话删除后重启分叉会话也不会把截断点弄丢；
5. 节点侧 `recovery.go:164` → `ForkThreadInto`（`agent_codex.go:237`）→ `threadForkOptions`（`agent_codex.go:277`）填进 SDK 的 `ThreadForkOptions.LastTurnID`，落成协议 `thread/fork.lastTurnId`：「包含该轮，其后的轮次不进分叉，且该轮不能正在跑」（`third_party/codex-sdk-go/protocol/types_gen.go:7268`）。

本机 `codex-cli 0.154.0` 自报的 schema（`codex app-server generate-json-schema --experimental`，`v2/ThreadForkParams.json`）确认了这套语义：`lastTurnId` 是**含**该轮，另有 `beforeTurnId` 是**不含**该轮，两者互斥。对话区的分叉点取「含」，和 Codex 一样保留用户点的那条回答。

两条容易记错的语义：

- 分支保留到**用户点的那一轮为止（inclusive）**，不是「那一轮之前」；
- turn id 对 Master 始终不透明：Master 只记录与透传，只有持有源 app-server 的那个节点能解释它。`fork_from_turn_id` 为空＝整条线程，会话列表的分叉走的就是这条空路径（`App.tsx:2887`）。

运行内的 `forkThread`（`agent_codex.go:690`）不传截断点：它复制整条线程，截断点只有这条「从某条消息分叉」的会话需要。

验证：`tests/contract/task-events.contract.test.ts` 断言 `forkFromTurnId` 可选且原样透传；`tests/component/task-conversation.component.test.tsx` 断言每条结束的回答都有入口、正在流式输出时没有、宿主不给回调时也没有；`syntropy_master/handle/task/fork_task_test.go` 断言截断点只落在入口成员并进 `AgentSpec`；`syntropy_node/engine/codex/agent_test.go` 断言 `lastTurnId` 只在带截断点时出现。

## 6. 「永久删除」是 saga

Codex 的 `delete-thread` 是本地记录的删除；本仓库的会话由 Master 的 Agent 部署支撑，所以删除必须是**先停后删**：

`main.ts:2603` `taskDeleteForever` → 先 POST `/stop`（失败不阻断，因为可能本来就停着）→ 再 POST `/delete`。渲染层在**应用内确认框**（`ConfirmDialog.tsx`，Codex 也是自绘的 `DeleteThreadDialog`）里点过确认才发请求；请求在跑时框上写着「删除中…」，成功后把该行从列表移除、清掉本机置顶记录、清空选中，并提示一句「已永久删除…」；失败（含主进程那一步直接断掉）同样给提示，不再静默返回。Master 侧 `ListTasks` 在未显式指定 phase 时**隐藏 DELETING/DELETED 的会话**（`syntropy_master/store/task_store.go:162-180`），所以删除 saga 跑完前后列表都不会再把这条会话顶回来。

确认框不用 `window.confirm`：它是渲染进程之外的另一个原生窗口，主窗口被别的窗口盖住/没在前台时可能不显示，而渲染进程已经被它挡住——用户看到的就是「点了永久删除，没反应」（Master 日志里也查不到这次删除）。画在窗口里的对话框既盖不住，也不会让界面卡在一个看不见的模态上。同一处问题在「已归档的聊天」页的批量/单条永久删除上也一并改掉了（`ArchivedChatsSettings.tsx`）。

## 7. 有意不做对齐的项

| Codex 能力                                                                      | 不做的原因                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `share` / `copy-deeplink`                                                       | 本仓库没有可分享的托管 URL，也没有 deeplink 协议（`#task=<id>` 是窗口路由，不是可分享链接）                                                                                                                                   |
| `copy-conversation-markdown`                                                    | 需要客户端侧整段导出会话；当前时间线是分页拉取的，导出会引入一条新的读取链路，暂不引入                                                                                                                                        |
| `open-side-chat`                                                                | 本仓库没有 side chat（临时右栏会话）这一概念                                                                                                                                                                                  |
| `notifications` 节                                                              | Master 的告警走左侧时间线面板（`task-events-locate`），不在会话行里重复一份                                                                                                                                                   |
| 快捷键的全局焦点语义                                                            | Codex 的快捷键作用在「当前对话」上；本仓库没有全局焦点，改成「打开菜单的那一行，否则选中的会话」（见 §3.2），所以菜单开着时按键与 Codex 一致、没开菜单时按键对象由选中态决定                                                  |
| `fork-into-worktree` / `new-chat-in-worktree`、「从某条回答分叉」的目的地对话框 | 本仓库的 Agent 工作区由节点侧 `spec.workspace` 决定，没有 git worktree 的创建与管理，所以分叉只有「继承源会话的部署」一种目的地（§5.1）；Codex 那三个目的地（当前工作区 / 同一 worktree / 新 worktree）在这儿只有第一项有意义 |

## 8. 「在新窗口中打开」的路由

Codex 的 `open-in-new-window` 派发 `open-in-new-window` 消息给壳层。本仓库的对应实现：

- 主进程 `main.ts:4521` `windowHash()` 产出 `#task=<id>`，`main.ts:4529` `taskIdFromHash()` 从窗口 URL 读回；窗口记录（`ConsoleWindowRecord.taskId`）跟着写盘，退出后重启窗口仍落回同一条会话；
- 渲染层 `desktop_app/apps/desktop/src/renderer/main.tsx:20` 解析 `#task=<id>` 并作为 `initialTaskId` 传给 `App`；
- `App` 等会话列表回来之后再选中它（`App.tsx:3625-3631`，只生效一次），列表里没有这条会话（比如刚被删除）就什么都不做。

## 9. 测试与验证

```
pnpm -C desktop_app typecheck
pnpm -C desktop_app test:component   # 菜单结构：tests/component/session-list.component.test.ts、落点：tests/component/session-menu-anchor.component.test.ts、定时任务反查：tests/component/automation.component.test.tsx、删除确认框：tests/component/confirm-dialog.component.test.tsx
pnpm -C desktop_app test:contract    # 通道与载荷：tests/contract/task-events.contract.test.ts
cd syntropy_master; go test ./...    # MarkTaskUnread / MoveTaskProject / ForkTask / 列表隐藏
cd web_backend;   go test ./...
```

菜单结构（分节、顺序、分组线、置灰、勾选、快捷键列）在 `session-list.component.test.ts` 里逐条断言——这是对齐上游最容易走样的部分；菜单落在哪儿（翻边、夹进窗口）在 `session-menu-anchor.component.test.ts` 里断言，因为这条逻辑一旦走样就是「菜单飘在窗口外」，而它在浏览器里几乎点不出来。删除确认框（模态语义、破坏性主按钮、busy 时点不动、以及「会话删除不许再用 window.confirm」）在 `confirm-dialog.component.test.tsx` 里断言。
