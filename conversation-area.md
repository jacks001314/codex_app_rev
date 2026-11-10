# 工作区的对话区（Thread / Transcript）

代码位置：`code/conversation/`，子目录 `pages/`（页面级）、`thread/`（线程容器）、`turn/`（回合与条目）、`scroll/`（虚拟化与滚动）、`markdown/`（正文渲染）、`nav-rail/`（用户消息导航条）、`_deps/`（闭包依赖）。

对话区有**三个并列的页面实现**，对应三种会话来源：

| 组件                      | chunk                                                     | 场景                                                      |
| ------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `LocalConversationPage`   | `pages/local-conversation-page-3f93e4c62cc7.js` (57 KB)   | 本地 Codex runtime 驱动的会话（`/local/:conversationId`） |
| `RemoteConversationPage`  | `pages/remote-conversation-page-8ce4bf8a7d6c.js` (69 KB)  | 云端任务（`/remote/:taskId`），有 `variant:"hotkey"` 变体 |
| `ChatGptConversationPage` | `pages/chatgpt-conversation-page-733818e9db52.js` (75 KB) | ChatGPT 模式的云端对话                                    |

三者在 app-initial 中都是 `lazy()` 加载：

```js
mko = lazy(() => import("./local-conversation-page-3f93e4c62cc7.js").LocalConversationPage);
hko = lazy(() => import("./remote-conversation-page-8ce4bf8a7d6c.js").RemoteConversationPage);
```

主体渲染器 `thread/local-conversation-thread-a2bcd054c9d2.js` 格式化后 **20525 行 / 345 KB**，是对话区最重的单个 chunk。

---

## 1. 三层数据模型

```
Conversation (thread)
  └── Turn                     一次模型运行；turnId + turnStartedAtMs
        ├── params.input[]     用户输入（text / image / localImage / appInput …）
        ├── items[]            流式产生的条目（见下）
        ├── status             started | completed | failed | interrupted
        ├── finalAssistantStartedAtMs
        ├── localMetadata      { fileAttachmentCount, … }
        └── itemsPagination    { openingUserMessageId }
              └── Render entry  UI 层的一行；turnKey / turnSearchKey / historyPositionKey
```

### Turn item 类型

从 `item/*` JSON-RPC 通知与 bundle 内判别式可确认的 item 类型：

```
agentMessage            最终回答（流式 item/agentMessage/delta）
reasoning               思考（textDelta / summaryTextDelta / summaryPartAdded）
commandExecution        命令执行（outputDelta / requestApproval / terminalInteraction）
fileChange              文件变更（outputDelta / patchUpdated / requestApproval）
mcpToolCall             MCP 工具调用（progress）
webSearchCall           网页搜索
dynamicToolCall         动态工具
collabAgentToolCall     子代理协作调用
imageGeneration         生成图片（带 src）
todoList / plan         计划（item/plan/delta、requestImplementation）
automaticApprovalReview 自动审批复核
contextCompaction       上下文压缩
```

### 合成条目（synthetic entries）

`app-initial` 的 `Cin()` 在判断“某条用户消息是否是本 turn 的开场消息”时，会**跳过**以下类型 —— 这份列表就是合成条目的权威定义：

```
automaticApprovalReview   contextCompaction        forkedFromConversation
modelChanged              modelRerouted            personalityChanged
remoteTaskCreated         steeringUserMessage      worktreeInit
```

此外 `local-conversation-thread-turn-entries` 里 `_()` 明确把三种**语音条目**排除出常规 turn 计数：

```
voice-nux   voice-presentation   voice-transcript
```

以及虚拟化的 `type: "gap"` 占位条目。

## 2. Turn entries：渲染前的最后一道加工

`turn/local-conversation-thread-turn-entries-3bc0985c25c6.js` 的 `y({...})` 是把 turn 数组转成渲染 entry 数组的核心函数，入参（去压缩后）非常能说明对话区的能力面：

```
compactAeonAssistantMessageRevealState   completedThreadGoal   completedThreadGoalTurnKey
conversationId   cwd   generatedImageTurnEntries   hasInheritedParentTurns
hideInitialAeonTimestampMarker   hostId   isBackgroundSubagentsEnabled
requestUserInputAsyncUiEnabled   openAIFormElicitationsEnabled   isAeonThread
isCompactAeonTranscriptReady   isProjectlessConversation   isReadOnly   modelProvider
projectlessOutputDirectory   onEditLastTurnMessage   onForkTurnMessage   previousEntries
renderMcpApps   resolvedApps   showFullTranscript   showInProgressFixedContent
showStrictReviewNotices   supersededMcpAppWidgetCallIds   threadHandoffOperation
visibleSubagentParentThreadId   renderEntries
```

产出的每个 entry 带有：

| 字段                                                                  | 作用                                                             |
| --------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `turnKey` = `historyPositionKey ?? turnSearchKey`                     | 虚拟化与 diff 的稳定 key                                         |
| `turnNumber` / `totalTurnCount` / `isLatestTurn` / `isMostRecentTurn` | 序号与末位判定                                                   |
| `timestampSeparatorAtMs`                                              | 时间分隔线（由 `timestamps` 工具按 user/assistant 首条时间推导） |
| `estimatedHeightPx` / `minHeightPx` / `gapBeforePx`                   | 虚拟化布局输入                                                   |
| `transcriptBlock`                                                     | `{type:"assistant-message", key, attachedActivityItems[]}` 等    |
| `renderMcpApps`                                                       | 最后 3 个 turn 为 `auto-expand`，其余 `default`                  |
| `threadHandoffOperation`                                              | 只挂在匹配的那一个 turn 上                                       |
| `generatedImages`                                                     | 汇总所有 turn 的 `imageGeneration` 产物                          |

**性能设计要点**：

1. **引用稳定性** —— `x(prev, next)` 是一个约 35 个字段的深度相等判断；相等就**复用旧对象**，避免虚拟化列表整列重渲染。`turn` 的相等判断还额外允许“不同对象但 items 的 id 序列完全一致”。
2. **spacer 复用** —— 对 `s(entry)` 为真的占位条目，只有 `estimatedHeightPx` 变了才替换。
3. **`previousEntries` 索引** —— 先建 `Map<turnKey, entry>` 再逐项比对。

## 3. 虚拟化：底部锚定

`scroll/thread-virtualizer-4f61d89b50be.js`（**与 26.901 版本 hash 完全相同，未变动**）是一套自研的、**以“距底部距离”为坐标系**的虚拟化器：

```js
buildLayout({collapseEmptyRows, entries, gapPx, measuredHeightsByKey}) → {
  turnKeys, turnIndexByKey, topOffsetsPx, bottomOffsetsPx,
  heightsPx, gapsBeforePx, gapKeys, totalHeightPx, collapseEmptyRows
}
computeRange({distanceFromBottomPx, layout, overscanCount, viewportHeightPx}) → {startIndex, endIndex}
anchorRange({anchorKey, layout, previousRange})            // 换布局时保持窗口大小
preserveDistanceFromBottom({anchorKey, distanceFromBottomPx, nextLayout, previousLayout})
distanceToCenterKey({layout, turnKey, viewportHeightPx})   // 滚动到某 turn 居中
```

关键实现细节：

- 行高 = `max(minHeightPx ?? 0, measured[key] ?? estimatedHeightPx ?? 280)`，**默认估算高度 280px**；
- `collapseEmptyRows` 模式下高度为 0 的行不产生 gap；
- `computeRange` 用两次**二分查找**在 `bottomOffsetsPx` 上定位可视区间，再各扩 `overscanCount`；
- 之所以选“距底部”而不是 `scrollTop`：流式输出会不断改变总高度，底部锚定能让视口天然跟随最新内容而不跳变。

## 4. 滚动控制器与常量

`scroll/thread-scroll-layout-4583603e4217.js`（29 KB）+ `thread-scroll-controller-context-value`（Context，hook 名 `useThreadScrollController`，越界抛 `useThreadScrollController must be used within ThreadScrollLayout`）。

控制器对外能力（由 `composer-provider` 的消费方式反推）：

```
getScrollElement()   scrollToBottom()   scrollToDistanceFromBottomPx(px, "instant")
getLastScrollDistanceFromBottomPx()   addUserScrollListener(cb)
```

`addUserScrollListener` 只回调**用户主动滚动**（区分程序滚动），composer 用它累计上滚距离来撑起 response spacer。

文件末尾的常量表：

| 常量       | 值    | 用途                       |
| ---------- | ----- | -------------------------- |
| `Ue`       | 260   | 默认 overscan / 估算高度   |
| `We`       | 64    | “已到末尾”阈值（px）       |
| `Ge`       | 8     | 间隙                       |
| `Ke`       | 1000  | 节流/超时（ms）            |
| `qe`       | 16    | `DOM_DELTA_LINE` → px 换算 |
| `z` / `Je` | 1 / 2 | `deltaMode` 的 LINE / PAGE |

判定函数：

- `Re(el)` = `distanceFromBottom <= 24` → “贴底”；
- `ze(el, useViewport)` = `scrollHeight - clientHeight - scrollTop <= (useViewport ? max(clientHeight, 64) : 64)` → “在末尾”；
- `Ve(event, el)` = 按 `deltaMode` 归一化滚轮增量（px / line×16 / page×clientHeight）。

CSS（`thread-scroll-layout-26a32b412ec3.css`）里有两个关键构件：

- `._Probe_*`：`height:0; visibility:hidden; pointer-events:none` 的**隐形测量元素**，宽度 `calc(max(var(--thread-content-max-width), var(--markdown-wide-block-max-width) + 8rem) + var(--padding-toolbar) * 2)`，用于在不影响布局的情况下量出 markdown 的可用宽度；
- `._compactScrollMask_*` / `._compactHeaderScrollFade_*`：`mask-image` 线性渐变，顶部按 `--edge-fade-distance`（默认 1rem）淡出，底部按 `--thread-scroll-padding-bottom` + `--spacing * 5.5` 淡出，让内容滚入 sticky header 和浮动 composer 时有柔和边缘。

## 5. Composer 占位（response spacer）

`code/composer/core/composer-provider-7434c8b2fdca.js` 里的 `M()` 是对话区与 composer 的耦合点：composer 是浮动层，会遮住 transcript 底部，所以要撑出一段动态高度的 spacer。

```
place()             计算目标高度 = max(0, clientHeight - bottomInset) * L，并启动弹簧动画
consume(deltaPx)    内容增高时抵消等量 spacer（保证不跳）
clear() / scrollToBottom()
onResponseSpacerStateChange({clear, getHeightPx, place, scrollToBottom})
```

实现要点：

- 用 `IntersectionObserver`（threshold `z`）观察 sentinel，得到 spacer 与内容的实际交叠高度，判定是否已经“顶住”（`d.current`）；
- 用户上滚时用 `requestAnimationFrame` 合帧累计 `o.current`，下一帧一次性 `consume`；
- 动画用弹簧（`x(spring, target, config)`），`i.stop()/i.jump(0)` 立即归零；
- 当 spacer 高度 ≤ 24px 时直接 `jump(0)`，避免小数抖动。

同文件还导出一个 **external store 版 ComposerProvider**：

```js
{
  (getSnapshot(), subscribe(cb), register(composer));
} // register 返回注销函数，且只在“当前就是自己”时才清空
```

即全局只有一个 active composer 实例，多个 surface（主对话、右侧面板、quick chat）通过 `register` 抢占。

## 6. 用户消息导航条

`nav-rail/thread-user-message-navigation-rail-app-4703491a5992.js`（30 KB）+ 同名 CSS。它在长对话右侧提供“跳到第 N 条用户消息”的 rail，配合命令 `codex.command.findInThread`（Find）与 `nextThreadNeedingAttention` 使用。

## 7. Steer / Queue 在对话区的落地

`app-initial` 中的对账逻辑（`Ein` / `Din` / `Oin` / `bin`）：

- 构造 steering 条目：

```js
{ type:"steeringUserMessage", id, targetTurnId, targetTurnStartedAtMs,
  status:"pending", serverUserMessageId:null, clientUserMessageId,
  input, attachments, restoreMessage,
  compareKey:{ rawText, imageCount } }
```

- 服务端确认后：`status = "accepted"`、写入 `serverUserMessageId`，并发出 `SS({type:"steered", id})`；
- 未确认的 steering 条目在 turn 结束时会转成 **queuedFollowUps**，并按 turn 状态附加 `pausedReason`：
  - `turnStatus === "interrupted"` → `Interrupted before the steer was accepted.`
  - 否则 → `Run ended before the steer was accepted.`
- 去重键 `compareKey = {rawText, imageCount}`；`rawText` 由 `min()` 从 `input[]` 里的 `text` 片段拼接，并会剥离 `<<ImageDisplayed>>` 占位行与浏览器批注用的图片前言（一组正则 `cin`），保证“用户看到的文本”与“模型收到的文本”分离：函数返回 `{rawText, displayRawText, imageCount, appInput, appInputPlaceholder}`。

这与 `state-machine.md` 描述的三层状态机一致，且补充了两个此前未记录的细节：**steer 未被接受时的降级路径**，以及 **displayRawText / rawText 双轨**。

## 8. Thread handoff（本地 ↔ worktree 迁移）

`localConversation.threadHandoff.*`（29 条）揭示了一个完整的迁移状态机，UI 上是内联进度 + 模态：

```
step.createNewWorktree            Creating a new worktree
step.checkoutWorktreeBranch       Checking out {branch} in worktree
step.applyChangesToWorktree       Applying uncommitted changes to worktree
step.detachWorktreeBranch         Detaching branch from worktree
step.checkoutLocalBranch          Checking out {branch} locally
step.applyChangesToLocal          Applying uncommitted changes locally
step.moveThreadToWorktree         Moving chat to worktree
step.moveThreadToLocal            Moving chat to local
step.moveThreadToHostWorktree     Moving chat to the destination worktree

inline.active/completed/failed/warning   Handing off to {destination} …
progress.*.title + progress.subtitle     Hang tight, this may take a few moments. You can close this modal…
error.{local,worktree,hostWorktree}.title / error.retry / error.unexpected
```

**前置校验**（禁用态 tooltip）：

- `disabled.queuedFollowUps` → `Send or remove queued messages before handing off this task`
- `disabled.loadingQueuedFollowUps` → `Checking queued messages before handing off this chat`
- `disabled.pendingPastedTextAttachments` → `Wait for pasted text attachments to finish…`
- `disabled.unavailableQueuedFollowUps` → `Unable to check queued messages before handing off this task`
- `runningWarning` → `This chat is running, so handing it off will interrupt the current turn`

也就是说 handoff 要求**队列为空**，运行中则必须先接受打断。对应命令 `codex.command.handoff` 类操作与 `mcp__codex_app__handoff_thread`。

## 9. 对话区内嵌的其他工作痕迹

`codex.localConversation.*` 共 **152 条**，覆盖对话区里所有非文本气泡：

| 类别        | 代表 id                                                                                                                                                               | 文案                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 后台代理    | `backgroundAgents.activeLabel` / `collapsedWorkingCount` / `collapsedDoneCount` / `modelTooltip` / `openSummary`                                                      | `is working`、`# working`、`# done`、`Uses {model}`、`Open subagents`    |
| 后台任务    | `backgroundTasks.title.subagents` / `.backgroundProcesses`                                                                                                            | `Subagents` / `Background processes`                                     |
| 后台终端    | `backgroundTerminals.defaultLabel` / `.stop` / `.cleanError`、`backgroundTerminalTab.noOutput`                                                                        | `Background terminal`、`Stop all background terminals`、`No output yet`  |
| 产物        | `artifacts.create` / `document` / `presentation` / `spreadsheet` / `site` / `website` / `generatedImage` / `localPreview` / `empty`                                   | `Create a file or site`、`No artifacts yet` …                            |
| 派生任务    | `createdTasks.title` / `.untitled` / `.status.{starting,working,done,failed}`                                                                                         | `Created tasks`、`Starting`/`Working`/`Done`/`Failed`                    |
| 浏览器批注  | `browserComment.selectedText` / `selectedElement` / `selectedArea` / `selectedItems` / `selectedRegionAttached`、`comment.screenshotAttached`、`comment.userGuidance` | `Selected text`、`Area {number}`、`Screenshot attached`、`Your guidance` |
| 设计微调    | `designTweak.toggleChange` / `toggleSummary`                                                                                                                          | `{property}: On → Off` 形式的可折叠摘要                                  |
| 产物批注    | `annotation.selectedContent`、`artifactAnnotation.page` / `.range`                                                                                                    | `Page {page}`、`Range: {range}`                                          |
| Chrome tabs | `chromeTabs.title` / `untitledTab` / `focusError`                                                                                                                     | `Chrome`、`New tab`、`Unable to focus Chrome tab`                        |
| 图片预览    | `closeImagePreview` / `closeGeneratedImagePreview`                                                                                                                    | `Close image preview`                                                    |

## 10. Markdown 与代码渲染

`markdown/conversation-markdown-70a42265cc66.js`（20 KB）负责正文；`markdown/chatgpt-code-block-a3d300f795d8.js`（39 KB）负责代码块；`markdown/conversation-source-3c0ae9358599.js`（27 KB）与 `chatgpt-sources-message` 负责引用来源。

字号与行高由 CSS 变量驱动（见 `ui-style.md`）：`--codex-chat-font-size`、`--codex-chat-code-font-size`、`--markdown-font-size`、`--markdown-space`、`--markdown-wide-block-max-width`。宽块（表格、代码）可以比正文宽 8rem，由 `_Probe_` 元素量出实际可用宽度后决定。
