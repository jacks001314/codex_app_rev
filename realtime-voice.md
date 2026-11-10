# Realtime Voice 与听写

> 版本：`26.1013.4894.0`。代码：`code/app-261013/voice/`、`app-initial-5851df3f6cb1.js`、
> `app-primary-fe8a450b3b04.js`。静态分析，未做运行时插桩。

## 1. 两条独立的产品线

26.1013 把语音拆成两个明确不同的能力，文案的 `description` 是最硬的证据：

| 能力 | 文案 key | 语义 |
| --- | --- | --- |
| 听写（dictation） | `settings.general.dictation` | 单向把语音转成文本，插入 composer 或全局输入框 |
| 实时语音（realtime voice） | `settings.general.realtimeVoice` | **双向、连续**的 spoken conversation |

原文：

```text
settings.general.realtimeVoice
  "Voice chat"
  description: "Heading for settings that configure live two-way spoken conversations
                with ChatGPT, distinct from one-way dictation"
```

因此不要把 26.903 的 dictation 代码与 26.1013 的 `thread/realtime/*` 混为一谈。

## 2. 设置项

### 2.1 实时语音

| 设置 | key | 说明 |
| --- | --- | --- |
| 总开关 / 入口 | `settings.general.realtimeVoice` | 新会话使用哪种语音 |
| 音色 | `settings.general.realtimeVoice.voice` | 选择合成音色 |
| 全局快捷键 | `settings.general.realtimeVoiceHotkey` | 从任意桌面应用启动语音会话；`Off` 可关闭 |
| 屏幕上下文 | `settings.general.realtimeVoiceScreenContext` | 允许语音会话检查前台应用；macOS 首次会请求权限 |
| 麦克风 | `settings.general.microphoneInput` | 语音聊天与听写共用 |

`realtimeVoiceScreenContext` 的 description 原文：

```text
Let ChatGPT inspect the foreground app when you refer to what's on screen.
macOS asks for access the first time ChatGPT needs it
```

### 2.2 听写

| 设置 | key |
| --- | --- |
| 按住说话 / 双击免提 | `settings.general.globalDictationHotkey` |
| 单击开始 / 再按结束 | `settings.general.globalDictationToggleHotkey` |
| 听写声音 | `settings.voice.dictationSounds` |
| 听写词典 | `settings.general.dictationDictionary` / `speechSettings.content.customDictionary.page.title` |
| 最近录音 | `settings.general.globalDictationHistory` |
| 重试转写 | `settings.general.globalDictationHistory.retryTranscription` |

听写录音保存在本机 recent recordings（文案 `Your last {count} recordings are saved on
this device`），失败可以重试转写；这与实时语音的会话记录是两条存储链。

## 3. app-server 方法

从 `app-initial` 的调用点可确认（A 级）：

```text
thread/realtime/start
thread/realtime/stop

thread/realtime/started
thread/realtime/closed
thread/realtime/error
thread/realtime/itemAdded
thread/realtime/item/started
thread/realtime/item/completed
thread/realtime/item/transcript/delta
thread/realtime/transcript/delta
thread/realtime/transcript/done
```

`thread/realtime/start` 的关键参数：

```js
{
  threadId,
  outputModality,
  realtimeStartInstructions,
  realtimeEndInstructions,
  realtimeSessionId,
  realtimeSessionOverrides,
  codexResponseHandoffMode,
  codexResponseHandoffChannelPrefixes,
  codexResponseItemPrefix,
  codexResponsesAsItems,
  flushTranscriptTailOnSessionEnd: true,
  includeStartupContext: false,
  transport: { type: "existingCall", callId },
  version: "v3"
}
```

`thread/realtime/stop` 只需要 `{ threadId }`。

这说明语音不是本地 VAD + 一次转写，而是：

1. 先建立一个 call / transport；
2. 用 `existingCall` 把 app-server 的 realtime session 挂到该 call；
3. 通过 `thread/realtime/item/*`、`transcript/*` 把语音条目并入对话时间线；
4. 结束时 flush transcript tail。

## 4. 音频管线

`voice-dsp-818032a745b6.js` 里有：

| 组件 | 证据 |
| --- | --- |
| VAD | `silero-vad-*.js`，`vadType = "silero_v6"` |
| 输入缓冲 | `realtime-buffered-audio-worklet`，`registerProcessor("codex-realtime-buffered-audio")` |
| 连接中缓冲 | `bufferInputWhileConnecting` |
| 回放 / 采集状态 | `buffering` phase |
| 语音历史 | `voiceHistory`，主进程里由 Electron SQLite 支撑 |

`voice-session-parameters` 里还能看到 `backend_reasoning_effort` 的默认值
`instant`，以及 `realtimeVoice.reasoningNotice.*` 的提示：

```text
Switch to Light for faster Voice replies
Use Light
```

即语音会话有自己的一套“智能 / 速度”档位，不等同于文本会话的 reasoning 设置。

## 5. UI 形态

### 5.1 浮动的 Voice orb

| 状态 / 操作 | 文案 key |
| --- | --- |
| 显示 / 隐藏 | `voiceFloatingOrb.addMenu.*` |
| 摄像头 | `voiceFloatingOrb.addMenu.camera` / `stopVideo` |
| 屏幕共享 | `voiceFloatingOrb.addMenu.screenshare` / `stopScreenshare` |
| 连接中 | `voiceFloatingOrb.stillConnecting = "Still connecting…"` |
| 进入 / 退出专注 | `browserVoice.enterFocus` / `exitFocus` |
| 通话中设置 | `voiceFloatingOrbSettingsModal.*` |

通话中的设置包括：

- `intelligence`：`instant` / `medium` / `high`；
- `language`；
- `voice`。

### 5.2 首次使用

`wingman-voice-nux` / `voice_wingman_disclosure_*` 定义了一个首次使用披露：

```text
Meet Voice
Say what's on your mind. ChatGPT listens, responds, and keeps the conversation flowing naturally.
```

披露会区分 consumer / enterprise、是否录制视频：

- consumer：`Audio recordings are saved...` / `Audio and video recordings are saved...`
- enterprise：`Your audio recordings are saved but not used for training...`

### 5.3 会话结束与导航

| 场景 | 文案 |
| --- | --- |
| 离开页面 | `voice-navigation-blocker.* = "Voice is still active"` |
| 断线 | `hintMessage.lostConnection` + `voice.lostConnection.retry` |
| 配额 | `voice.rateLimitModal.dismiss` |
| 容量不足 | `chatgpt.voice.globalCapacityUnavailableModal.*` / `temporarilyUnavailableModal.*` |
| 麦克风被拒 | `micMessages.*`、`realtimeVoice.launch.microphonePermissionDenied*` |

## 6. 与 Codex 任务的耦合

`realtimeVoice.codexStatus.*` 说明语音会话可以同时观察 Codex 的工作：

```text
Thinking
Running command
Searching the web
Searching the web for {query}
Editing {count} files
Waiting for chat
+{count} more
```

`thread/realtime/start` 的 `codexResponseHandoffMode` / `codexResponseHandoffChannelPrefixes`
则说明文本 Codex 响应可以 handoff 到语音会话。

## 7. 与 26.903 的差异

| 项 | 26.903 | 26.1013 |
| --- | --- | --- |
| 语音 | 主要是 dictation + 语音按钮 | 独立 realtime voice + orb + 摄像头 / 屏幕共享 |
| 设置 | `settings.general.dictation` | `settings.general.realtimeVoice`、`realtimeVoiceHotkey`、`realtimeVoiceScreenContext` |
| 协议 | 无 `thread/realtime/*` | 完整 start / stop / item / transcript 事件族 |
| 音频 | 未确认 VAD | Silero VAD v6 + AudioWorklet |

## 8. 证据等级与局限

| 结论 | 等级 | 依据 |
| --- | --- | --- |
| 实时语音与听写是两条产品线 | A | `settings.general.realtimeVoice` 的 description |
| `thread/realtime/start` 参数 | A | `app-initial` 调用点 |
| Silero VAD v6 | A | `voice-dsp-*.js` |
| 屏幕上下文开关 | A | `settings.general.realtimeVoiceScreenContext` |
| 摄像头 / 屏幕共享 | A（文案 / 菜单） | `voiceFloatingOrb.addMenu.*` |
| 实际音质、延迟、回声消除 | C | 需要运行时测量 |
| 会话记录存储格式 | C | 只确认 `voiceHistory` + Electron SQLite，未打开数据库 |

未确认：语音后端（Realtime API / WebRTC）的实际端点、transport 的服务端实现、
不同账号的可用音色列表。这些都需要抓包或运行时配置。
