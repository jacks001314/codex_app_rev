# 对话框（Composer）

代码位置：`code/composer/`，子目录 `core/`（主体与 action bar）、`queue/`（队列 tray）、`quick-chat/`（快捷聊天与听写）、`_deps/`。
文案证据：`code/composer/_CATALOG.json`（274 条）与 `code/_catalog/i18n-messages.json` 中 `composer.*`、`codex.command.composer.*`、`chatgptConversations.composer.*`。

> Composer 的**主体组件在共享 bundle `app-primary` 里**，本地 chunk 是围绕它的可插拔部分：utility bar、run-location 下拉、project 选择器、@ 提及列表、队列列表、quick chat、听写。

---

## 1. 编辑器基座：ProseMirror

Composer 不是 `<textarea>`，而是一个 **ProseMirror** 富文本编辑器（`prosemirror-view` / `-model` / `-placeholder` / `-highlight`）。因此支持：

- **富文本降级开关**：设置项 `settings.general.composer.plainTextMode.label` = `Plain text composer`，description 明确写着 “disables automatic code blocks, lists, and rich links in the message composer”；
- **mention 节点**（12 种，见 `architecture.md`）：`agentMention`、`appMention`、`atMention`、`browserSkillMention`、`browserTabMention`、`chatGptConversationMention`、`chatGptLibraryFileMention`、`pageReferenceMention`、`pluginMention`、`resourceMention`、`sitesProjectMention`、`skillMention`；
- **编程式插入**：`insertMentionAtSelection({kind, name, displayName, path, description, iconSmall})` + `focus()`；
- **跨账号清理**：`composer-39c510ee3609.js`（`BrowserSkillsComposer`）在 `useLayoutEffect` 中遍历文档，把 `accountId`/`userId` 不匹配的 `browserSkillMention` 节点整段删除 —— 切账号后不会残留上一个账号的技能提及。

## 2. 命令面板：`@` 与 `/`

`@` 与 `/` 都会打开命令建议列表。注册项的字段结构（取自 `BrowserSkillsComposer` 的注册代码）：

```js
{ id, title, description, searchAliases:[...], triggers:["@", "/"],
  requiresEmptyComposer:false, group:<本地化分组名>, Icon:{16, 20}, onSelect:async () => {} }
```

要点：`triggers` 决定哪个符号能唤起；`requiresEmptyComposer` 决定“有文字时还能不能用”；`group` 用于分组标题（如 `Skills`）；`Icon` 按尺寸提供两档。

### `/` 斜杠命令全集（27 个 title）

| 命令                                    | 说明                                                                                                                                                                                                                                                                   |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **New chat**                            | Start a blank chat in the same workspace                                                                                                                                                                                                                               |
| **New**（Popout）                       | Return to the Popout Window home                                                                                                                                                                                                                                       |
| **Resume**（Popout）                    | Resume a recent chat                                                                                                                                                                                                                                                   |
| **Side**                                | Start a temporary side chat                                                                                                                                                                                                                                            |
| **Chat**                                | Don't work in a project                                                                                                                                                                                                                                                |
| **Work in a project**                   | Choose project for new chats（Codex 与 ChatGPT 各一份，后者为 Start a chat in a project）                                                                                                                                                                              |
| **Add custom GPT**                      | Start a chat with one of your GPTs                                                                                                                                                                                                                                     |
| **Model**                               | Change from `{model}`                                                                                                                                                                                                                                                  |
| **Reasoning**                           | 调整 reasoning effort                                                                                                                                                                                                                                                  |
| **Plan mode**                           | 切换 plan mode                                                                                                                                                                                                                                                         |
| **Goal**                                | Set a goal to keep pursuing                                                                                                                                                                                                                                            |
| **Compact**                             | Compact this chat's context；带用量时显示 `({usage}% full)`；运行中禁用并提示 `Compact is disabled while a chat is in progress`                                                                                                                                        |
| **Init**                                | Create an AGENTS.md file with instructions for Codex                                                                                                                                                                                                                   |
| **Status**                              | Show chat ID, context usage, and rate limits                                                                                                                                                                                                                           |
| **MCP**                                 | Show MCP server status                                                                                                                                                                                                                                                 |
| **Memories**                            | 查看/管理记忆                                                                                                                                                                                                                                                          |
| **IDE context**                         | 注入 IDE 上下文                                                                                                                                                                                                                                                        |
| **Rename**                              | Rename the current chat                                                                                                                                                                                                                                                |
| **Pin chat**                            | Keep this chat in the sidebar                                                                                                                                                                                                                                          |
| **Archive**                             | Archive the current chat                                                                                                                                                                                                                                               |
| **Share chat**                          | Create a link to a snapshot of this chat                                                                                                                                                                                                                               |
| **Fork chat**                           | Fork this chat in the current workspace or a new worktree；projectless 版为 `Fork this chat`；worktree 版为 `Fork this chat in the same worktree or a new worktree`；两个子选项 `Fork chat`（当前工作区/同一 worktree）与 `Fork chat in new worktree`（隔离 worktree） |
| **Approve**                             | Approve a recent auto-review denial；`Select an auto-review denial to approve one retry.`；无 rationale 时显示 `Auto-review did not include a rationale`                                                                                                               |
| **Feedback**                            | Send feedback about this chat                                                                                                                                                                                                                                          |
| **Pet**                                 | Wake or tuck away the desktop pet                                                                                                                                                                                                                                      |
| **Lockdown**                            | Turn on/off for this chat，带 `Lockdown mode turned on for this chat` 反馈                                                                                                                                                                                             |
| **Usage**                               | Open usage and billing settings                                                                                                                                                                                                                                        |
| **Local / Worktree / Cloud**（mode 类） | Run this chat locally / in a new worktree / in the cloud；Popout Window 下另有同名一组                                                                                                                                                                                 |

## 3. 三种提交语义：Send / Steer / Queue

这是 composer 最关键的行为分叉，**三者在协议层是独立方法**：

| UI 动作            | i18n                                                                                                                           | JSON-RPC                  | 语义                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------- | ----------------------------- |
| Send               | `codex.command.composer.submit` = `Send message`                                                                               | `turn/start`              | 无活动 turn 时开启新 turn     |
| Send in background | `…submitInBackground` = `Send message in background`，description `Send the current composer message without opening its chat` | `turn/start` + 不打开 tab | 起了任务但不切过去            |
| **Steer**          | `…steer` = `Steer prompt`，description `Submit the current composer prompt as a steering message`                              | **`turn/steer`**          | 注入当前 turn，**不打断模型** |
| **Queue**          | `…queue` = `Queue prompt`，description `Submit the current composer prompt as a queued message`                                | **`thread/queue/add`**    | 存到队列，等当前 turn 结束    |
| Interrupt          | `turn/interrupt`                                                                                                               | **`turn/interrupt`**      | 停止当前 turn                 |

默认走哪一种由设置项 **Follow-up behavior** 决定：

```
settings.general.followUpQueueMode.label    = "Follow-up behavior"
  description: Label for a setting that chooses how a follow-up message sent
               during an active Codex run is handled
settings.general.followUpQueueMode.queue    = "Queue"
  description: Option label for holding a follow-up message until the active Codex run finishes
settings.general.followUpQueueMode.interrupt = "Steer"
  description: Option label for applying a follow-up message to the active Codex run instead of queuing it
```

注意 **Steer 的 i18n id 是 `…interrupt`** —— 这是历史命名遗留，容易误导。以 description 为准：Steer 是“应用到当前运行”，不是打断。这一点在 `state-machine.md` 中已明确，本次复核仍成立。

## 4. 队列 tray

`queue/queued-message-list-16b1f97652af.js`（18 KB）。文案全集（`composer.queuedMessage.*`，16 条）：

| id 后缀                                                    | 文案                                                         | 用途               |
| ---------------------------------------------------------- | ------------------------------------------------------------ | ------------------ |
| `sendNow`                                                  | **Steer**                                                    | 队列项立即注入     |
| `sendNowTooltip`                                           | Submit without interrupting the model                        | ← Steer 的准确定义 |
| `retry` / `retryTooltip`                                   | Retry / Try sending this queued message again                | 失败重试           |
| `retryTooltipRemedy`                                       | Edit or delete it if retry keeps failing                     | 重试仍失败的引导   |
| `edit`                                                     | Edit message                                                 | 编辑               |
| `delete`                                                   | Delete queued message                                        | 删除               |
| `more`                                                     | Queued message actions                                       | 溢出菜单 aria      |
| `openInSideChat`                                           | Open in side chat                                            | 在侧聊打开         |
| `turnOn` / `turnOff`                                       | Turn on queueing / Turn off queueing                         | 队列总开关         |
| `interruptedQueue`                                         | Queue paused because you interrupted                         | 打断后暂停         |
| `resumeInterruptedQueue`                                   | Resume                                                       | 恢复队列           |
| `pausedTooltip`                                            | This queued message could not be sent                        | 卡住的项           |
| `pausedTooltipRemedy`                                      | Retry, edit, or delete it to continue the queue              | 解卡引导           |
| `imageAttachments` / `imagePreview`                        | `# image(s)` / Image attachment                              | 附件摘要           |
| `pastedTextAttachment` / `additionalPastedTextAttachments` | Pasted text / `{preview} (+# more pasted text attachment)`   | 粘贴文本附件       |
| `pullRequestActions`                                       | `Pull latest` / `# Pull latest actions · {targets} — {text}` | PR 类队列项        |

对应协议：`thread/queue/{list,add,update,delete,reorder,start,changed}`。UI 的乐观更新以 `thread/queue/changed` 快照为准校正。

## 5. Utility bar 与 action bar

`core/composer-utility-bar-85736f3cc588.js`（29 KB，导出 `ComposerUtilityBar`）是 composer 下方的工具条容器，聚合：模型选择、reasoning effort、plan mode、fast mode、附件、run location、project、plugins。

`core/composer-action-bar-run-location-dropdown-493913fdcca2.js`（6 KB）是 **Run location** 下拉，文案：

```
composer.runLocation.title.question        Where should this chat run?
composer.runLocation.triggerLabel          Choose where to run this chat
composer.runLocation.triggerLabel.localExecutorStarting
                                           Choose where to run this task. Local execution is starting…
composer.runLocation.local.optionLabel     On your computer
composer.runLocation.local.description     Read and edit local files with permission
composer.runLocation.cloud                 In the cloud
composer.runLocation.cloud.description     Can't access local files unless attached
composer.runLocation.cloud.description.localExecutor   Can read and edit local files
禁用态 tooltip：
  cloud.tooltip.workspaceDisabled          Your workspace administrator has disabled Work in the cloud
  local.tooltip.workspaceDisabled          Your workspace administrator has disabled Work on your computer
  cloud.tooltip.projectOnlyMemory          Cloud is unavailable for projects with project-only memory
```

注意 `cloud.description.localExecutor` —— **云环境也能读写本地文件**（当存在 local executor 时），这是 26.903 的一个能力细化。

其他 utility bar 组件：

| chunk                                                         | 作用                                                                                                                                                                                                        |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `core/composer-project-selector-17ef0c338d41.js`              | 项目选择器（`codex.command.composer.openProjectPicker`）                                                                                                                                                    |
| `core/composer-work-home-plugins-control-40bb3845a52f.js`     | Work 模式插件控制：`Plugins`、`Connect plugins`、`Browse all plugins`、`Search plugins…`、`No connected plugins`、`Installing/Loading {pluginName}`、tooltip `Work with ChatGPT across your favorite tools` |
| `core/home-composer-mode-toggle-3e742c6c7534.js`              | 首页 Chat/Work 分段开关：aria `Composer mode`；`Chat`（Ask questions and explore ideas）/ `Work`（Get tasks done with your files and apps，不可用时后缀 `Requires upgrade`）                                |
| `core/primary-composer-at-mention-list-f7e9ab40467d.js`       | `@` 提及列表；按 `source` 分流到两个子实现，其中 sites 提及走 `typedSitesMentionRef`                                                                                                                        |
| `core/unified-floating-composer.electron-*.js`                | 统一浮动 composer 的 Electron 装配层（0.6 KB shim）                                                                                                                                                         |
| `core/composer-overlay-f2c80b19233e.js`                       | overlay 容器                                                                                                                                                                                                |
| `core/right-panel-composer-overlay-7bbacd6f9f94.js` (23 KB)   | **右侧面板内的 composer**；即 side chat / 侧面板也能直接输入                                                                                                                                                |
| `core/browser-composer-disclaimer-72402b5f9ca1.js`            | 浏览器场景免责声明（见下）                                                                                                                                                                                  |
| `core/use-chatgpt-composer-controller-f59d12db17ed.js`        | ChatGPT 模式的 composer 控制器 hook                                                                                                                                                                         |
| `core/codex-micro-mini-game-composer-c8ff379120bd.js` (22 KB) | Codex Micro 硬件的迷你游戏 composer                                                                                                                                                                         |

### 模型选择器：chip 触发器 + power 滑杆

模型与推理强度不是两个控件，而是**同一个选择器**：composer 右下角的 chip 显示当前模型与强度，
点开是一张紧凑浮层。实现全在共享 bundle `app-primary`（不在本地 `code/` 的 chunk 里），
以下是字面量与 i18n 描述符层面的证据（复核命令：`node code/tools/ctx.mjs "<字面量>" .work/big/app-primary-4c40d73a1074.js`）。

触发器文案来自 `composer.intelligenceDropdown.*`（`title` = `Reasoning`、`model.title` = `Model`、
`tooltip` = `Select model`）；正在调的是一个**显式选中的模型**时，触发器占位文案换成
`composer.modelPicker.selectEffort.label` = `Select effort`。模型名本身来自
`composer.mode.local.model.custom` = `Custom`（description：`Custom model from config`）——
即「来自用户 config 的模型」一律显示为 Custom，这也是判断某个模型是不是内置模型的直接依据。

浮层有两种视图（代码里的 `menuView` 字面量：`simple` / `advanced`）：

| 视图       | 内容                                                              | 证据                                                                                                                            |
| ---------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `simple`   | 一条离散滑杆（代码里叫 **Power**），把「模型 + 强度」组合逐档铺开 | `composer.modelPicker.workPower.*`                                                                                              |
| `advanced` | 模型列表（`menuitemradio`）+ 强度子菜单 + 服务档位                | `composer.modelPicker.modelList.heading` = `Select model`、`composer.intelligenceDropdown.speed.rowAriaLabel` = `Speed {speed}` |

滑杆的几个关键细节（A 级，均可在 `app-primary` 里复核，字符窗口 235111 / 262110 / 262724）：

- **档位数随模型而变**：内部模型按 `supportedReasoningEfforts` 过滤；「来自 config 的模型」直接
  逐档 `map` 出一项，`modelLabel` 固定 `Custom`。所以轨道上不一定是几档，也不一定从「关闭」开始。
- **档位标签**：基础表是 `composer.mode.local.reasoning.<effort>.label`
  （`none` / `minimal` / `low` / `medium` / `high` / `xhigh` = `Extra High` / `max` / `ultra` /
  `persistent`）；Work 滑杆另把 `medium` 覆盖成 `Standard`、`high` 覆盖成 `Extended`
  （`composer.modelPicker.work.reasoning.standard|extended.label`）。默认标签是
  `${modelLabel} ${effortLabel}`（`sliderLabel` 可覆盖），所以滑杆上的名字读作
  「模型 + 强度」的组合，不是单纯的强度。
- **键盘**：`aria-keyshortcuts="ArrowLeft ArrowRight"`、`aria-label` = `Power`
  （`composer.modelPicker.workPower.keyboardControl.ariaLabel`），屏幕阅读器提示
  `Use Left and Right arrow keys to adjust power`；改档后播报
  `{value}, {position} of {total}.`（`...keyboardControl.value`，`{value}` 是
  「5.6 Sol Standard」这种组合标签）。另有 `codex.command.composer.increase|decrease|cycleReasoningEffort`
  三条独立快捷键命令。
- **重置**：头部有 `composer.modelPicker.resetToDefault` = `Reset to default`，description
  写明语义是「清掉显式模型覆盖、回到推荐模型」。
- **最高档的代价**：拖到 Ultra 时滑杆下方出现
  `composer.modelPicker.power.ultraUsageWarning` = `Consumes usage limits faster`
  （description 特意提醒译者：说的是额度消耗速度，不是响应速度或思考速度）；同一句也作为 Ultra
  在 advanced 的强度子菜单里常驻。Ultra 是否进滑杆由设置项
  `settings.agent.modelFeatures.modelPickerSliderUltra.label` = `Ultra in model picker slider`
  控制，模型控件里出现哪些档位由 `settings.agent.modelFeatures.reasoningEfforts.label`
  = `Available reasoning efforts` 控制。
- **提交时机**：拖动只改预览，松手/点击才提交；拖到最高档还会额外触发一次「额度」提示。

### 免责声明的 11 种变体

`codex.composer.browserDisclaimer.*` 按工作区类型细分，这是判断数据训练策略的直接证据：

| 变体                                 | 文案                                                                                                                                                               |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| （默认）                             | ChatGPT can make mistakes. Check important info.                                                                                                                   |
| `workspace`                          | ChatGPT can make mistakes. Workspace data isn't used to train models.                                                                                              |
| `encryptedWorkspace[WithoutName]`    | … OpenAI **doesn't** use `{workspaceName}` workspace data to train its models. The content of this workspace is **encrypted with your organization managed keys**. |
| `earlyAccessWorkspace[WithoutName]`  | … OpenAI **uses** `{workspaceName}` workspace data to train its models.                                                                                            |
| `k12Workspace[WithoutName]`          | **ChatGPT for Teachers** can make mistakes. OpenAI doesn't use …                                                                                                   |
| `encryptedK12Workspace[WithoutName]` | K12 + 组织托管密钥加密                                                                                                                                             |
| `temporaryChat`                      | For safety, we may keep a copy of this chat for up to **30 days**.                                                                                                 |
| `workspaceTemporaryChat`             | Workspace data isn't used to train models by default. For safety, we may keep a copy of this chat for up to 30 days.                                               |
| `workspaceResearchPartner`           | … This workspace is opted in to the **ChatGPT Business Research Partner Program**. `<link>Learn more</link>`                                                       |

## 6. Worktree / 环境选择

`composer.mode.*`（76 条）定义了 composer 的**运行位置模式**，是一个分段控件 + 菜单：

```
Work in            composer.mode.startTask.header
├─ Work locally    composer.mode.local / workLocally        tooltip: Work on {branchName}
├─ Worktree        composer.mode.worktreeSegment            New local worktree
│                                     tooltip: Create a copy of {repoName} to work in parallel.
│                                     多根项目: … Other project source folders will be accessed directly.
│                                     子模块警告: This repo has git submodules. Worktree creation may fail
└─ Cloud           composer.mode.runInCloud                 Cloud · {repoName}
                                      tooltip: Checkout {repoName} in a cloud environment.
                                      PR 会话禁用: Cloud is unavailable for pull request chats
```

其他相关文案：`Continue in`、`Select where to run the chat`、`This local worktree` / `This remote worktree`（`{host, select, local … remote …}`）、`New remote worktree`、`Connect Codex web`、`Set up an environment via Codex web to enable sending tasks to the cloud`、`Work locally` 的用量后缀 `{usage}%`、`Starting from`（footer 分类）、`Detached HEAD`、`Loading branch…`。

**环境选择器**（`composer.environmentSelector.*` + `composer.worktreeEnvironment.*`）：

```
Select environment / Search environments / Create new / No environments found / Error loading environments
Environment · {repoName}      Select a local environment
Default environment           Work without environment
Set up project                Give Codex access to your project's full dependencies and setup
Environment settings          Learn more
```

**分支选择**（`composer.remote.*`）：`What branch should this chat start from?`、`What code should this chat start from?`、分组 `Branches` / `Local branches` / `Remote branches`、`{branch} (current)`、`Use local changes` / `Don't use local changes`（`Local file state`）、`Create a new chat that references this cloud chat.`、`with local code changes`、`Error loading branches`、`Loading…`、`Search {repoName} branches`。

## 7. Quick chat 与听写

`quick-chat/` 子目录：

| chunk                                                                         | 说明                                                                                                                                                                                |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `quick-chat-window-e34d91db747a.js` (52 KB)                                   | 独立 quick chat 窗口（路由 `/chatgpt/quick-chat`，另有 `-prewarm` 预热路由）                                                                                                        |
| `quick-chat-window-page-374d1c3ded75.js` / `quick-chat-frame-3ad7b171952a.js` | 页面与 iframe 装配                                                                                                                                                                  |
| `quick-chat-floating-position-50d00104d2ad.js`                                | 浮动位置记忆                                                                                                                                                                        |
| `content-quick-chat-overlay-4f38c1f284d2.js` (19 KB)                          | 内容区快捷聊天浮层                                                                                                                                                                  |
| `avatar-overlay-quick-chat-bar-6faa49a506f3.js` (56 KB)                       | 语音形象浮层上的快捷聊天条：`Start new chat`、`Start voice chat`、`Restore Quick Chat`、`Show/Hide activity`、`Mute/Unmute microphone`、`Mute/Unmute voice chat`、`Stop voice chat` |
| `local-conversation-quick-chat-overlay-1161a9f8caa4.js`                       | 对话页内的快捷聊天浮层                                                                                                                                                              |
| `global-dictation-page-526accc365c3.js` (23 KB)                               | 全局听写页（720×84 独立窗口）                                                                                                                                                       |
| `dictation-audio-worklet-1eeea41db57c.js`                                     | AudioWorklet 处理器                                                                                                                                                                 |

听写能力由两个 feature flag 控制，且**分别门控 composer 内与全局**：`{name:"dictation.composer"}` 与 `{name:"dictation.global"}`（见 `use-visible-settings-sections` 中 `pe(Ve, {name:"dictation.composer"})` 的调用）。

## 8. 键盘快捷键

`codex.command.composer.*` 共 17 条，全部可在 `settings/keyboard-shortcuts` 重绑：

```
submit                    Send message
submitInBackground        Send message in background
steer                     Steer prompt
queue                     Queue prompt
clear                     Clear prompt
openModelPicker           Open model picker
openProjectPicker         Open project picker
startVoiceMode            Toggle voice chat
startDictation            Start dictation
addPhotos                 Add photos
addFiles                  Attach files and folders
toggleFastMode            Toggle Fast mode
togglePlanMode            Toggle plan mode
toggleWorktreeMode        Toggle Local/Worktree
toggleWorkRunLocation     Toggle Cloud/Local
increaseReasoningEffort   Increase reasoning effort
decreaseReasoningEffort   Decrease reasoning effort
cycleReasoningEffort      Cycle reasoning effort
captureAppshot            Capture appshot
```

配套的审批快捷键：`codex.command.approval.approve` = `Approve request`、`approval.decline` = `Decline request`。

## 9. 与其他模块的耦合

| 方向     | 机制                                                                                                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| → 对话区 | `composer-provider` 的 response spacer（见 `conversation-area.md` §5）；`register()` 抢占全局唯一 active composer                                                                |
| → 滚动   | 直接 `import { r } from "./thread-scroll-layout-*.js"` 与 `thread-scroll-controller-context-value`，即 composer 持有滚动控制器                                                   |
| → 侧面板 | `right-panel-composer-overlay` 让侧面板（side chat）内也有完整 composer                                                                                                          |
| → 设置   | Follow-up behavior、Plain text composer、Send shortcut（`settings.general.enterBehavior.rowLabel`）、Show context window usage（`settings.general.contextUsageIndicator.label`） |
| → 队列   | `thread/queue/*` JSON-RPC                                                                                                                                                        |
| → 浏览器 | `browser-composer-disclaimer`、`browserSkillMention`、`browserTabMention`                                                                                                        |

## 10. 本仓库落地（2026-09-15）

§2 的两个触发符号在本仓库各有归属，接口形状也照搬了 Codex 的注册项字段：

| Codex 概念              | 本仓库实现                                                                                                                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@` 提及（会话类）      | `desktop_app/apps/desktop/src/renderer/session-reference.ts` + `api/proto/model/message/session_reference.go`：`@标题` 是用户看得见的 mention，消息同时保留结构化任务 ID；Node 只注入“这是实时引用”的声明，模型必须调用 `read_thread` 才能按需读取内容 |
| `/` 命令面板            | `desktop_app/apps/desktop/src/renderer/composer-commands.ts`（目录 + 词法/筛选/分组）+ `ComposerCommandMenu.tsx`（列表）+ `App.tsx` 的接线                                                                                                             |
| `searchAliases`         | `searchAliases` 字段，同时参与 `composerCommandRank` 的排序档位                                                                                                                                                                                        |
| `requiresEmptyComposer` | 同名字段；输入框里除命令词外还有正文时不列出该命令                                                                                                                                                                                                     |
| `group`                 | `COMPOSER_COMMAND_GROUPS`（会话 / 取用 / 打开 / 输入框 / 界面），列表按组切段                                                                                                                                                                          |
| `onSelect`              | `bindComposerCommands` 注入的 `run`；`Partial<Record<ComposerCommandId, ...>>` 让「目录新增但忘记接线」变成编译错误                                                                                                                                    |

**触发判定更严**：Codex 的 `/` 可以在任意位置唤起，本仓库只在正文最前面（`composerCommandToken` 的
`start` 恒为 0）——`src/app.ts`、除号这类日常文本不该弹列表。

**模型 / 推理强度（chip + 浮层）**：§5 的模型选择器在本仓库是输入框右下角那个 chip，点开是
`SessionRuntimePopover.tsx`，Codex 的两个视图照搬（`RuntimePickerView`）：`simple` 是一条推理强度
滑杆，`advanced` 才是列表。入口决定先看到哪一样——点 chip 与 `/推理强度` 进 `simple`，`/模型` 进
`advanced`，用户敲的哪个词已经说明了他想先改什么；头部那个箭头随时能在两个视图之间来回切。

候选来自集群的模型配置（`modelProfiles`），不是 Codex 的模型目录——本仓库的 Agent 按「哪个配置
拥有这个模型」解析 Provider，列一条没有配置的模型名，用户选了也只会被 Master 拒掉。列表沿用 §2 的
命令列表：`ComposerCommandMenu` 的行类型放宽成 `ComposerMenuRow`（`description` /
`disabledReason` / `group` / `id` / `run` / `title`），命令列表与二级列表共用同一个组件与同一套
键盘处理，浮层里的那份用 `composer-command-menu-inline` 去掉外框。

**浮层不抢输入框的焦点**：滑杆在指针按下时 `preventDefault`（与 §2 的命令列表同一条规矩——
焦点一离开 textarea 光标位置就丢了），输入框的 `onBlur` 也只把「焦点落进这张浮层」当成还在这一组
控件里，不收起它（`runtimePopoverOwnsFocusTarget` 认浮层根节点上的 `data-composer-runtime-popover`）。
这不是洁癖：浮层里全是能聚焦的控件（滑杆、切视图、重置），焦点一动就把浮层从用户手底下抽走，
真机上表现为「点了没反应，档位怎么都改不了」。e2e 里有一条专门盯着这件事
（`tests/e2e/task-lifecycle.spec.ts` 的运行时滑杆段）。

写回链路与 Codex 的 `thread/settings/update` 不同：本仓库把模型参数放在**会话成员的部署计划**上
（`model` / `model_provider` / `reasoning_effort` / `service_tier`），`SetTaskMemberRuntime` 只改计划，
Master 的 reconcile 循环再把新 spec 推给节点；节点比较新旧 spec，只差模型参数时就地热更新运行时
（`runtime_driver.applyTurnRuntime` → `SetTurnRuntime`，按轮次覆盖 `turn/start`），不重建运行时
也不动线程。于是「换模型」是会话级设置，线程与历史都留在原地，正在跑的那一轮照旧、下一轮起用新参数。

| Codex 概念                        | 本仓库实现                                                                                                                                                                                               |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Model` / `Reasoning` 命令        | `composer-commands.ts` 的 `model` / `reasoning` + `session-runtime-picker.ts` 的二级候选；挑完命令还要再挑一条配置，所以是两级                                                                           |
| `menuView`：`simple` / `advanced` | `RuntimePickerView`：`simple` 画滑杆，`advanced` 画 `ComposerCommandMenu`（chip → `simple`、`/模型` → `advanced`、`/推理强度` → `simple`）                                                               |
| `Power` 滑杆                      | `runtimeSlider` / `runtimeSliderStepAt` / `runtimeSliderIndexAt`（等距档位 + 比例定位），`SessionRuntimePopover.tsx` 画 rail / fill / dot / thumb                                                        |
| `keyboardControl.value` 播报      | `runtimeSliderStatus`（「`{档位名}`，第 N 档，共 M 档」），写进 `aria-live`                                                                                                                              |
| `ArrowLeft` / `ArrowRight`        | `runtimeSliderArrowEffort` / `runtimeSliderKeyEffort`。本仓库的 composer 不抢焦点，左右键得留给正文光标，所以滑杆在输入框上认的是**上下键**；只有焦点真落在滑杆上时才认左右与 Home / End，到头夹紧不回卷 |
| `resetToDefault`                  | `runtimeResetChoice` + `runtimeResetHint`：请求只带模型名，Master 用配置自带的 `reasoning_effort` / `service_tier` 补上                                                                                  |
| `power.ultraUsageWarning`         | `runtimeEffortWarning`，只在最高档出现                                                                                                                                                                   |
| `Change from {model}`             | binding 覆盖 description 为「当前 `<model>`，换成别的模型配置」                                                                                                                                          |
| `thread/settings/update`          | `SetTaskMemberRuntime`（proto → Master handle → web_backend `/api/tasks/{id}/runtime` → 桌面 `setTaskRuntime`）                                                                                          |
| 当前项标记                        | 正在用的模型配置排最前并标「当前正在使用」；它不给 `run`，点了也不会发请求                                                                                                                               |

**写回的是模型名，不是配置名**：候选的 `id` 只用来认行，真正写进会话的是 `RuntimePickerOption.model`
（即 `profile.model`）。Master 的 `modelProfileByModel` 按模型名找配置，拿配置名去查必然落空——
「换模型」这条入口曾经就是这么坏的。滑杆守着同一条线：拖动只改预览、松手才写回，与当前档相同的选择
不发请求（`commitComposerRuntimeEffort`），否则拖回原位也会重新推出一句「正在跑的这一轮仍用旧参数」。

**本轮照旧、下一轮才换**：模型参数是唯一能就地热更新的变更。节点先按解析出来的运行时参数比较新旧
spec（`runtime_driver.turnRuntimeChange`，比参数而不是原始 JSON，键序与等价别名不会被误判）：只差
`model` / `reasoning_effort` / `service_tier` 时走 `applyTurnRuntime`，把新参数写进运行时的按轮次
覆盖（`SetTurnRuntime`），运行时、线程与队列都不动，**正在跑的那一轮仍用旧参数**，从下一轮
`turn/start` 起换新参数——与 Codex 的 `thread/settings/update` 语义一致。

界面要把这段时间差说清楚，否则 chip 上的名字立刻变了、回复却还出自旧模型，用户只会以为换没生效：
运行中换完在输入框下面给一行「已切换到 X · 高：正在跑的这一轮仍用 Y · 中，下一轮起生效」
（`session-runtime-picker.runtimeSwitchNotice`，渲染成 `.composer-notice`）。会话空闲时不提示，
因为下一次回复本来就用新参数；只改服务档位这类 chip 文案不变的写回也不提示，那会写出
「已切换到 X，本轮仍用 X」。「正在跑的那一轮」由 `composerActiveTurn` 判定，那一轮结束时清掉这行
提示——在那之后它就不再成立了。

**其余变更等运行为空再重建**：Provider（凭据写在 `CODEX_HOME` 里）、`args`、沙箱、环境变量、MCP
这类变更仍走 `runtime_driver.replace`（spec hash 变 → 重建 → 按 id 恢复线程）。为了避免掐掉正在跑
的那一轮，这类变更会被暂缓：节点给成员挂上 `RuntimeUpdatePending` 条件，等运行时空闲（没有在跑的
轮次、队列里也没有排队消息）再由后台 worker 应用，Master 把这条条件原样呈现给用户。

**有能力差异的取舍**：27 条命令里只列了本产品真的有后端支撑的 17 条，Share / Cloud / Side chat /
Init / MCP / Memories / Pet / Lockdown / Approve 这些没有对应实现的一律不列（避免做出点了没有反应的
空命令）；`Rename` 也没进列表——它需要输入框式弹窗才能做得像样，本仓库目前只有侧边栏行内的就地重命名，
宁可少一条也不要一个会把改名结果丢掉的入口。用不了的命令走禁用态 + 原因，不隐藏。

## 长文本粘贴（issue #24 补充核验）

- **A 级**：26.903 快照 `.work/big/app-primary-4c40d73a1074.js` 的 `handlePaste`（61193 行起）在 `text/plain` 长度达到 `5e3` 时派发 `pasted-text`；处理成功后消费粘贴事件。284603 行起以 `Pasted text.txt` 保存文件，记录字符数、预览与代码块语言，并检查生成期间的 composer 状态变化以丢弃过期结果。此结论来自安装包静态代码，不涉及用户数据。
- **B 级**：Syntropy 在 `desktop_app/apps/desktop/src/renderer/App.tsx` 的粘贴事件中采用同一 5,000 UTF-16 单元阈值，通过 `attachment.createText` 与 `AttachmentBroker.issueText` 保存 UTF-8 文本文件，复用既有附件上传与发送链路。短文本仍由输入框处理；长文本不进入 textarea，也不做 Markdown 渲染。
- **本仓库边界**：文本粘贴 IPC 限制为 4 MiB UTF-8，超过时提示保存为文件再添加附件（普通文件仍使用既有 45 MiB 上限）。生成期间阻止发送；清空或切换任务后释放迟到的文件。仅附件发送会附上默认任务说明。未实现 Codex 的“恢复到输入框”动作。
- **验证**：Electron 回归覆盖近百万字符 Markdown 粘贴、原输入保留和附件移除；附件代理测试核验 UTF-8 字节完整性、大小边界与删除清理。
