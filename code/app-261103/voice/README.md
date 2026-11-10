# voice

> 来源：`app.asar` → 26.1103 Rspack 数字 chunk；本目录 4 个文件 / raw 0.1MB / formatted 0.3MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `723410.56b974f189.js` | 63734 | 12 | namespace-score |
| `679632.b502a10a11.js` | 46028 | 40 | namespace-score |
| `904323.c376207ffd.js` | 28561 | 25 | namespace-score |
| `126704.becefcdeca.js` | 18569 | 25 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `realtimeVoice.onboarding` | 15 |
| `settings.general` | 14 |
| `speechSettings.content` | 13 |
| `settings.voice` | 12 |
| `realtimeVoice.nux` | 10 |
| `realtimeVoice.launch` | 9 |
| `codex.composer` | 2 |
| `composer.pluginSelectionRequiresSupportedRuntime` | 1 |

## 开发者描述（节选）

- `codex.composer.appMessage` — App message
  - Attachment containing images or data sent by an app
- `codex.composer.appMessageContext` — App message context
  - Attachment holding app-supplied images and data when the user edits an app-generated message
- `composer.pluginSelectionRequiresSupportedRuntime` — This Codex runtime does not support chat plugin selection. Update the runtime before sending this chat
  - Error when a chat excludes plugins but the selected execution host cannot enforce those exclusions
- `composer.realtime.createThreadError` — Unable to start voice chat
  - Toast shown when creating a new thread for realtime voice fails
- `realtimeVoice.launch.back` — Back
  - Button that dismisses a failed realtime voice launch and returns to the previous surface
- `realtimeVoice.launch.failedDescription` — Try again, or go back
  - Description shown when an optimistic realtime voice launch fails

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
