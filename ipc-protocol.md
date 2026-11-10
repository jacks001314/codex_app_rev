# IPC 与协议面

## 26.1103 复核（2026-11-09）

> 静态提取自 `code/app-261103/main-process/build/preload.js` 与同目录的
> `early-bootstrap-*.js`。未做运行时抓包；请求 / 响应 / 通知的**方向**由方法名
> 与调用点推断，属 **C 级**，不要当成协议规范。机器可读全集见
> `code/app-261103/main-process/_APP_SERVER_METHODS.json`。

### 26.1103.1 Preload 暴露面

形状与旧版一致：preload 不把 `ipcRenderer` 交给页面，只暴露三样东西：

```js
contextBridge.exposeInMainWorld("codexWindowType", "electron");
contextBridge.exposeInMainWorld("electronBridge", { ... });
contextBridge.exposeInMainWorld("__SENTRY_IPC__", { "sentry-ipc": { ... } });
```

`electronBridge` 的方法：

```text
windowType                     acknowledgeChunkedMessage      getPreloadStartedAtMs
sendMessageFromView            getPathForFile                startFileDrag
startLinkDrag                  connectGitWorker              sendWorkerMessageFromView
subscribeToWorkerMessages      showContextMenu               getFastModeRolloutMetrics
getInitialSidebarBootstrap     getSystemThemeVariant         subscribeToSystemThemeVariant
triggerSentryTestError         getSentryInitOptions          getDesktopUserAgent
getAppSessionId                getBuildFlavor                isDeviceCheckSupported
isIntelMacBuild
```

页面还监听 `message`：当 `event.data.type === "connect-app-host"` 时，把携带的
`MessagePort` 通过 `ipcRenderer.postMessage("codex_desktop:connect-app-host", undefined, [port])`
转交主进程——沙箱化 MCP App 与宿主建立直连通道的方式没有变。

### 26.1103.2 `codex_desktop:*` 频道（25 个具名 + 2 个动态 worker）

| 频道 | 用途 |
| --- | --- |
| `codex_desktop:browser-page-event` | 浏览器页事件（页面 → 主进程或反向转发） |
| `codex_desktop:browser-sidebar-runtime-message` | 浏览器侧栏 runtime 消息 |
| `codex_desktop:check-for-updates` | 触发更新检查 |
| `codex_desktop:chunked-message-ack` | 大 payload 分块流的反压 ACK |
| `codex_desktop:connect-app-host` | 把沙箱 MCP App 的 MessagePort 交给主进程 |
| `codex_desktop:connect-git-worker` | 连接 git worker |
| `codex_desktop:get-browser-annotation-api-policy` | 读取浏览器标注 API 策略 |
| `codex_desktop:get-browser-webmcp-policy` | 读取浏览器 WebMCP 策略 |
| `codex_desktop:get-build-flavor` | 同步读取 build flavor（preload 启动时） |
| `codex_desktop:get-fast-mode-rollout-metrics` | 读取 fast mode rollout 指标 |
| `codex_desktop:get-initial-sidebar-bootstrap` | 同步读取首屏 sidebar bootstrap |
| `codex_desktop:get-sentry-init-options` | 同步读取 Sentry 初始化参数 |
| `codex_desktop:get-system-theme-variant` | 同步读取系统主题 |
| `codex_desktop:git-worker-port` | 主进程下发 git worker 端口 |
| `codex_desktop:mcp-app-sandbox-guest-message` | MCP App 沙箱 guest 消息 |
| `codex_desktop:mcp-app-sandbox-host-message` | MCP App 沙箱 host 消息 |
| `codex_desktop:message-for-view` | 主进程 → 页面消息（含分块流） |
| `codex_desktop:message-from-view` | 页面 → 主进程消息（invoke） |
| `codex_desktop:remote-hosted-pip-video-frame` | 远程画中画视频帧（WebCodecs） |
| `codex_desktop:show-context-menu` | 显示原生上下文菜单 |
| `codex_desktop:start-file-drag` | 开始原生文件拖拽（sendSync） |
| `codex_desktop:start-link-drag` | 开始链接拖拽 |
| `codex_desktop:system-theme-variant-updated` | 系统主题变化通知 |
| `codex_desktop:take-initial-switch-status` | 读取桌面切换启动状态（一次性） |
| `codex_desktop:trigger-sentry-test` | 触发 Sentry 测试错误 |
| `codex_desktop:worker:${id}:from-view` | 页面 → 指定 worker |
| `codex_desktop:worker:${id}:for-view` | 指定 worker → 页面 |

> `worker:` 频道由 worker id 动态拼接：`codex_desktop:worker:${id}:from-view` 与
> `...:for-view`。另有浏览器标注面使用 `codex:*` 前缀（见 §26.1103.4）。

### 26.1103.3 app-server / RPC 方法

从主进程 bundle 提取到 **189 个**带命名空间的方法字面量（含 `fs/*`、`process/*`、
`command/*` 等非会话侧 RPC）。按首段分组：

> **计数口径**：26.1016 文档里的 246 来自共享 bundle 的另一种抽取口径，本文的
> 189 只统计 `code/app-261103/main-process/build/*.js` 的字符串字面量；两者不能直接相减。
> Rspack 后渲染层的协议常量被拆到数字 chunk 中，未做全量合并统计。

| 命名空间 | 数量 | 主要用途 |
| --- | ---: | --- |
| `account` | 21 | 登录、会话、速率限制、Bedrock/GCP/Gateway OAuth |
| `app` | 4 | app 列表与读取 |
| `browser` | 1 | 浏览器访问 |
| `command` | 4 | 命令执行与 PTY 写入 |
| `config` | 4 | 配置读写与 MCP reload |
| `experimental` | 1 | 服务状态 |
| `feedback` | 2 | 反馈保存/上传 |
| `fs` | 11 | 文件系统 RPC |
| `hook` | 2 | hook 生命周期 |
| `item` | 22 | turn 内的 item 流、审批、工具调用 |
| `mcpServer` | 7 | MCP 工具调用、elicitation、事件流 |
| `model` | 4 | 模型列表、路由、安全缓冲、验证 |
| `plugin` | 5 | 插件安装/卸载/列表 |
| `process` | 6 | 子进程与 PTY |
| `skills` | 2 | 技能列表与变更 |
| `thread` | 83 | 会话生命周期、队列、goal、realtime、附件 |
| `turn` | 10 | turn 开始/打断/steer、diff、plan |
| **合计** | **189** | |

**account**（21）

```text
account/bedrock/checkGovCloudRequirements
account/bedrock/discover
account/bedrock/setup
account/chatgptAuthTokens/refresh
account/gatewayOAuth/cancel
account/gatewayOAuth/changed
account/gatewayOAuth/login
account/gatewayOAuth/read
account/gcp/setup
account/login/cancel
account/login/completed
account/login/start
account/logout
account/rateLimitResetCredit/consume
account/rateLimits/read
account/rateLimits/updated
account/read
account/sessions/add
account/sessions/logout
account/sessions/switch
account/updated
```

**app**（4）

```text
app/installed
app/list
app/list/updated
app/read
```

**browser**（1）

```text
browser/access
```

**command**（4）

```text
command/exec
command/exec/outputDelta
command/exec/terminate
command/exec/write
```

**config**（4）

```text
config/batchWrite
config/mcpServer/reload
config/read
config/value/write
```

**experimental**（1）

```text
experimental/serverStatus
```

**feedback**（2）

```text
feedback/save
feedback/upload
```

**fs**（11）

```text
fs/changed
fs/copy
fs/createDirectory
fs/getMetadata
fs/promises
fs/readDirectory
fs/readFile
fs/remove
fs/unwatch
fs/watch
fs/writeFile
```

**hook**（2）

```text
hook/completed
hook/started
```

**item**（22）

```text
item/agentMessage/delta
item/autoApprovalReview/completed
item/autoApprovalReview/started
item/commandExecution/outputDelta
item/commandExecution/requestApproval
item/commandExecution/terminalInteraction
item/completed
item/fileChange/outputDelta
item/fileChange/patchUpdated
item/fileChange/requestApproval
item/mcpToolCall/progress
item/permissions/requestApproval
item/plan/delta
item/plan/requestImplementation
item/reasoning/summaryPartAdded
item/reasoning/summaryTextDelta
item/reasoning/textDelta
item/started
item/tool/call
item/tool/requestOptionPicker
item/tool/requestSetupCodexContextPicker
item/tool/requestUserInput
```

**mcpServer**（7）

```text
mcpServer/elicitation/request
mcpServer/event/stream/notification
mcpServer/event/stream/start
mcpServer/event/stream/stop
mcpServer/oauthLogin/completed
mcpServer/startupStatus/updated
mcpServer/tool/call
```

**model**（4）

```text
model/list
model/rerouted
model/safetyBuffering/updated
model/verification
```

**plugin**（5）

```text
plugin/install
plugin/installed
plugin/list
plugin/read
plugin/uninstall
```

**process**（6）

```text
process/exited
process/kill
process/outputDelta
process/resizePty
process/spawn
process/writeStdin
```

**skills**（2）

```text
skills/changed
skills/list
```

**thread**（83）

```text
thread/approveGuardianDeniedAction
thread/archive
thread/archived
thread/attachment/add
thread/attachment/list
thread/attachment/remove
thread/attachment/updated
thread/attachmentOwner/list
thread/backgroundTerminals/clean
thread/closed
thread/compact/start
thread/compacted
thread/delete
thread/deleted
thread/environment/connected
thread/environment/disconnected
thread/environmentReady
thread/fork
thread/goal/clear
thread/goal/cleared
thread/goal/get
thread/goal/set
thread/goal/updated
thread/inject_items
thread/items/list
thread/list
thread/loaded/list
thread/memory/read
thread/metadata/update
thread/name/set
thread/name/updated
thread/prediction/updated
thread/prewarm
thread/project/updated
thread/queue/add
thread/queue/changed
thread/queue/delete
thread/queue/list
thread/queue/reorder
thread/queue/start
thread/queue/update
thread/read
thread/readState/changed
thread/readState/update
thread/realtime/appendAudio
thread/realtime/appendSpeech
thread/realtime/appendText
thread/realtime/closed
thread/realtime/error
thread/realtime/item/completed
thread/realtime/item/started
thread/realtime/item/transcript/delta
thread/realtime/itemAdded
thread/realtime/listVoices
thread/realtime/outputAudio/delta
thread/realtime/sdp
thread/realtime/start
thread/realtime/started
thread/realtime/stop
thread/realtime/transcript/delta
thread/realtime/transcript/done
thread/resume
thread/revert
thread/reverted
thread/rollback
thread/sample
thread/sample/cancel
thread/search
thread/section/changed
thread/section/move
thread/settings/update
thread/settings/updated
thread/start
thread/startAeon
thread/started
thread/status/changed
thread/stop
thread/timeline/list
thread/tokenUsage/updated
thread/turns/list
thread/unarchive
thread/unarchived
thread/unsubscribe
```

**turn**（10）

```text
turn/addUserMessage
turn/completed
turn/diff/updated
turn/interrupt
turn/moderationMetadata
turn/plan/updated
turn/settings/update
turn/start
turn/started
turn/steer
```

### 26.1103.4 浏览器标注通道

浏览器扩展 / 标注面还有一组 `codex:*` 频道（与 `codex_desktop:*` 分开）：

```text
codex:annotation-shadow-root-attached      codex:annotation-surface-available
codex:annotation-surface-pending          codex:annotation-surface-request
codex:annotation-surface-response         codex:annotation-surfaces-remove
codex:dispose-annotation-controls         codex:open-annotation
codex:register-annotation-controls        codex:update-annotation-controls
codex:project:${id}                       codex:thread:local:${id}
codex:thread:remote:${id}
```

### 26.1103.5 未变的三条链路

- 渲染进程仍不持有 Node 能力：`contextIsolation:!0`、`nodeIntegration:!1`、`sandbox:!0`。
- 大 payload 仍走 `codex-host-chunked-message-v1` 分块协议，token 词法为
  `array-start` / `object-start` / `container-end` / `string-start` / `key` /
  `string-chunk` / `value`，由 `codex_desktop:chunked-message-ack` 反压。
- 远程画中画仍由 preload 直接 `VideoDecoder` 解码，再以 transferable `VideoFrame` 投递。

---

## 26.903 历史正文

> 以下内容以 26.903 基线与 26.1013 / 26.1016 复核为准；26.1103 的频道与方法全集见上文。

本文汇总三条接口契约：**渲染进程 ↔ 主进程**（Electron IPC）、**主进程 ↔ Codex runtime**（app-server JSON-RPC）、以及**渲染进程 ↔ 沙箱内 MCP App**（MessagePort）。

来源：`code/main-process/build/preload.js`、`main-CMBCj4XL.js`，以及共享 bundle `.work/big/app-initial-*.js`。

> **26.1016 复核（2026-10-23）**：对 26.1013 / 26.1016 的全部抽取代码和三个共享
> bundle 做字符串集合 diff，app-server/namespace 方法集合仍为 **246**，
> `codex_desktop:*` 频道仍为 **25**，没有新增或删除名称。Gateway、Rosalind、
> 浏览器凭证等功能通过已有方法的新参数或 REST 路径实现。另新增 asar 外的 stdio
> MCP `openai_artifact_template_picker`，它不属于 Electron IPC；详见
> [changelog-26.1016.md](changelog-26.1016.md) §5.7、§6–§7。

---

## 1. Preload 暴露面

preload 只做三件事，没有把 `ipcRenderer` 直接交给页面：

```js
contextBridge.exposeInMainWorld("codexWindowType", "electron");
contextBridge.exposeInMainWorld("electronBridge", { ... });
contextBridge.exposeInMainWorld("__SENTRY_IPC__", { "sentry-ipc": {...} });
```

页面侧还监听 `message` 事件：当 `event.data.type === "connect-app-host"` 时，把携带的 `MessagePort` 通过 `ipcRenderer.postMessage("codex_desktop:connect-app-host", undefined, [port])` 转交主进程 —— 这是沙箱化 MCP App 与宿主建立直连通道的方式。

### `window.electronBridge` API

| 方法                                                                           | 底层 IPC                                                                      | 说明                                                                                                                          |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `sendMessageFromView(msg)`                                                     | `invoke codex_desktop:message-from-view`                                      | 页面→主进程主通道；`type:"shared-object-set"` 会先本地写入共享对象缓存                                                        |
| `getSharedObjectSnapshotValue(key)`                                            | `sendSync codex_desktop:get-shared-object-snapshot`                           | 启动时一次性取回的共享状态快照                                                                                                |
| `subscribeToSystemThemeVariant(cb)` / `getSystemThemeVariant()`                | `sendSync …:get-system-theme-variant` + 广播 `…:system-theme-variant-updated` | 返回 `"dark"`/`"light"`；preload 同步给 `<html>` 加 `electron-dark`/`electron-light` class，避免首帧闪白                      |
| `getInitialSidebarBootstrap()`                                                 | `sendSync …:get-initial-sidebar-bootstrap`                                    | 侧边栏首屏数据（结果 memo 在 `F`），让左导航不必等首个 RPC 往返                                                               |
| `getPathForFile(file)`                                                         | `webUtils.getPathForFile`                                                     | 拖拽文件的真实路径，取不到返回 `null`                                                                                         |
| `startFileDrag(payload)`                                                       | `sendSync …:start-file-drag`                                                  | 由主进程发起系统级拖拽，返回布尔                                                                                              |
| `showContextMenu(spec)`                                                        | `invoke …:show-context-menu`                                                  | 原生右键菜单                                                                                                                  |
| `sendWorkerMessageFromView(name, msg)` / `subscribeToWorkerMessages(name, cb)` | `invoke/on codex_desktop:worker:<name>:from-view` / `…:for-view`              | 每个 worker 一对频道；订阅是**每 worker 一个 ipcRenderer listener + 本地 Set 多播**，退订时自动 `removeListener`              |
| `getFastModeRolloutMetrics(arg)`                                               | `invoke …:get-fast-mode-rollout-metrics`                                      | Fast mode 灰度指标                                                                                                            |
| `getSentryInitOptions()` / `triggerSentryTestError()`                          | `sendSync …:get-sentry-init-options` / `invoke …:trigger-sentry-test`         | 崩溃上报                                                                                                                      |
| `getDesktopUserAgent()`                                                        | —                                                                             | `Codex Desktop/<version> (Windows NT 10.0; x64)`，平台串映射 `{darwin:"Mac OS", linux:"X11; Linux", win32:"Windows NT 10.0"}` |
| `getAppSessionId()`                                                            | —                                                                             | Sentry init options 里的 `codexAppSessionId`                                                                                  |
| `getBuildFlavor()`                                                             | `sendSync …:get-build-flavor`                                                 | `prod` / `dev` / `agent`                                                                                                      |
| `preloadStartedAtMs()`                                                         | —                                                                             | `performance.timeOrigin`                                                                                                      |
| `isDeviceCheckSupported()` / `isIntelMacBuild()`                               | —                                                                             | `darwin&&arm64` / `darwin&&x64`                                                                                               |

### 全部 IPC 频道

```
codex_desktop:message-from-view            invoke   页面 → 主进程（主通道）
codex_desktop:message-for-view             on       主进程 → 页面（主通道，转发为 window message 事件）
codex_desktop:chunked-message-ack          —        分块传输反压确认
codex_desktop:get-shared-object-snapshot   sendSync
codex_desktop:get-system-theme-variant     sendSync
codex_desktop:system-theme-variant-updated on       主题变化广播
codex_desktop:get-initial-sidebar-bootstrap sendSync
codex_desktop:get-build-flavor             sendSync
codex_desktop:get-sentry-init-options      sendSync
codex_desktop:trigger-sentry-test          invoke
codex_desktop:show-context-menu            invoke
codex_desktop:start-file-drag              sendSync
codex_desktop:get-fast-mode-rollout-metrics invoke
codex_desktop:connect-app-host             postMessage(+MessagePort)
codex_desktop:mcp-app-sandbox-host-message on → window.postMessage(msg, origin, ports)
codex_desktop:mcp-app-sandbox-guest-message  主进程侧对端
codex_desktop:remote-hosted-pip-video-frame on → WebCodecs 解码
codex_desktop:browser-page-event           主进程内部（browser 页事件）
codex_desktop:browser-sidebar-runtime-message  浏览器侧栏运行时
codex_desktop:check-for-updates            更新检查
codex_desktop:get-browser-webmcp-policy    浏览器 WebMCP 策略
codex_desktop:worker:<name>:from-view      invoke
codex_desktop:worker:<name>:for-view       on
```

### 主进程 → 页面的消息类型

`message-for-view` 上收到的对象若不是分块消息，会先按 `type` 做副作用再原样 `dispatchEvent(new MessageEvent("message", {data}))`：

- `shared-object-updated` → 更新 preload 内的共享对象缓存
- `remote-hosted-pip-content-layout-state-changed` → 关闭不再出现在 `state.orderedPresentationIDs` 中、且属于 `state.activeThreadID` 的 `VideoDecoder`

### 分块消息协议

```ts
type ChunkedMessage = {
  marker: "codex-host-chunked-message-v1";
  transferId: string;
  sequence: number; // 必须是 safe integer
  kind: "start" | "chunk" | "end";
  tokens?: StreamToken[]; // 仅 kind === "chunk"
};
type StreamToken =
  | { type: "array-start" | "object-start" | "container-end" | "string-end" }
  | { type: "string-start"; target: "key" | "value" }
  | { type: "key" | "string-chunk"; value: string }
  | { type: "value"; value?: null | boolean | number | string };
```

即：大对象被**增量词法化**后分片传输，接收端边收边重建 JSON，避免一次性序列化巨型 payload（典型场景是 thread 历史、日志、diff）。preload 里 `i()`/`a()` 是这套结构的运行时校验器。

### 远程画中画视频

`remote-hosted-pip-video-frame` 携带 `{presentationID, threadID, codec, decoderConfiguration, videoData, timestamp, isKeyFrame}` 或 `{stopped, threadID}`。preload 按 `presentationID` 维护 `VideoDecoder`：

- 首帧必须是 key frame 且有 `decoderConfiguration`，否则丢弃；
- `configure({codec, description, hardwareAcceleration:"prefer-hardware", optimizeForLatency:true})`；
- 后续 key frame 的 `decoderConfiguration` 变化 → `reset()` + 重新 `configure()`；
- 解码出的 `VideoFrame` 以 transferable 形式 `window.postMessage` 给页面；
- `origin === "null"` 时直接 `close()`（防 sandboxed iframe 泄漏）。

---

## 2. app-server JSON-RPC 协议

主进程与 `resources\codex.exe` 之间是 JSON-RPC。在 `app-initial` 中发现协议版本常量 **`0.143.0-alpha.32`**。以下方法名均为 bundle 内直接字面量（请求用 `sendRequest(method, params)`，通知用 `method` 分派）。

### thread 生命周期

```
thread/list            thread/read           thread/start          thread/started
thread/resume          thread/stop           thread/delete         thread/deleted
thread/archive         thread/archived       thread/unarchive      thread/unarchived
thread/fork            thread/revert         thread/rollback       thread/inject_items
thread/items/list      thread/turns/list     thread/timeline/list  thread/search
thread/name/set        thread/name/updated   thread/metadata/update
thread/settings/update thread/settings/updated
thread/status/changed  thread/tokenUsage/updated
thread/compact/start   thread/memoryMode/set
thread/goal/get  thread/goal/set  thread/goal/clear  thread/goal/updated
thread/environment/connected      thread/backgroundTerminals/clean
thread/approveGuardianDeniedAction
thread/shellCommand    thread/startAeon      thread/unsubscribe
```

`thread/revert` 是新版回退语义，`thread/rollback`（参数 `{threadId, numTurns}`）是旧版回退；fork 流程里能看到两者配合使用：fork 完成后用 `thread/rollback` 把多余的 turn 撤掉，再 `applyRollbackResponseToConversation`，最后插入 `forkedFromConversation` 合成项。

### thread 队列

```
thread/queue/list  thread/queue/add   thread/queue/update  thread/queue/delete
thread/queue/reorder  thread/queue/start  thread/queue/changed
```

这就是 composer “Queue” 策略的服务端权威来源；`thread/queue/changed` 用于快照校正。

### turn

```
turn/start  turn/started  turn/completed  turn/interrupt  turn/steer
turn/diff/updated  turn/plan/updated  turn/settings/update
```

**`turn/steer` 与 `turn/interrupt` 是两个独立方法** —— 印证了 Steer（不打断地注入）与 Interrupt（停止当前 turn）在协议层就是分开的语义。

### item 流式通知

```
item/started  item/completed
item/agentMessage/delta
item/reasoning/textDelta  item/reasoning/summaryTextDelta  item/reasoning/summaryPartAdded
item/commandExecution/outputDelta  item/commandExecution/requestApproval
item/commandExecution/terminalInteraction
item/fileChange/outputDelta  item/fileChange/patchUpdated  item/fileChange/requestApproval
item/permissions/requestApproval
item/mcpToolCall/progress
item/plan/delta  item/plan/requestImplementation
item/tool/call   item/tool/requestOptionPicker
item/tool/requestUserInput  item/tool/requestSetupCodexContextPicker
item/autoApprovalReview/started  item/autoApprovalReview/completed
```

### account / config / model

```
account/read  account/updated  account/logout
account/login/start  account/login/completed  account/login/cancel
account/chatgptAuthTokens/refresh
account/rateLimits/read  account/rateLimits/updated
account/rateLimitResetCredit/consume
config/read  config/value/write  config/batchWrite  config/mcpServer/reload
model/list  model/rerouted  model/verification  model/safetyBuffering/updated
```

设置页的写入统一走 `config/value/write` / `config/batchWrite`（即 `~/.codex/config.toml` 的路径化读写），而不是各自发明接口。

### MCP server / plugin

```
mcpServer/tool/call      mcpServer/resource/read
mcpServer/oauth/login    mcpServer/oauthLogin/completed    mcp/www_authenticate
mcpServer/elicitation/request
mcpServer/event/stream/start | stop | notification
mcpServer/startupStatus/updated
plugin/list  plugin/read  plugin/search  plugin/install  plugin/installed
plugin/uninstall  plugin/share/list  plugin/skill/read
codex/artifactSession  codex/toolSurface  codex/event/skills_update_available
```

### realtime（语音）

```
thread/realtime/start  started  stop  closed  error  sdp
thread/realtime/appendText  appendSpeech  listVoices  itemAdded
thread/realtime/transcript/delta  transcript/done
```

### 语音/实时相关的渲染层类型

preload 之外，渲染层还有 `thread/realtime/` 前缀的分派，以及 `voice-nux` / `voice-presentation` / `voice-transcript` 三种 thread entry（在 `local-conversation-thread-turn-entries` 中被显式排除出常规 turn 计数）。

---

## 3. 沙箱内 MCP App 通道

MCP App（含插件 UI）运行在独立沙箱页，双方通过 `MessagePort` 直连：

```
沙箱 guest ──postMessage──> 主进程 (codex_desktop:mcp-app-sandbox-guest-message)
                                      │
                                      ▼
页面 host  <──window.postMessage(msg, origin, ports)── (…-host-message)
```

建立连接的握手是页面侧 `window.postMessage({type:"connect-app-host", port})`，由 preload 捕获并 `ipcRenderer.postMessage("codex_desktop:connect-app-host", undefined, [port])` 把 port 转交主进程。相关路由：`/mcp-app`、`/mcp-app/:server/:toolName`、`/mcp-app/plugins`、`/mcp-app/plugins/:pluginId/:toolName`。

另有 `codex_desktop:get-browser-webmcp-policy` 用于浏览器内 WebMCP 的策略下发，对应渲染层的 `local-conversation-webmcp-tools-model`。
