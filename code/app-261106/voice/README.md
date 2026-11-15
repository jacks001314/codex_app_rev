# voice

> 来源：`app.asar` → 26.1106 Rspack 数字 chunk；本目录 5 个文件 / raw 0.2MB / formatted 0.4MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `723410.270e83f1ed.js` | 61615 | 10 | namespace-score |
| `679632.037e0f1624.js` | 46710 | 40 | namespace-score |
| `963873.bf36d0a6bb.js` | 42321 | 9 | namespace-score |
| `904323.912e5ace55.js` | 28595 | 25 | namespace-score |
| `126704.70469770cb.js` | 18569 | 25 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `realtimeVoice.onboarding` | 15 |
| `settings.general` | 14 |
| `speechSettings.content` | 13 |
| `settings.voice` | 12 |
| `realtimeVoice.nux` | 10 |
| `realtimeVoice.launch` | 9 |
| `codex.profileDropdown` | 2 |
| `composer.modelSettings` | 2 |

## 开发者描述（节选）

- `codex.profileDropdown.openConfigToml` — Open config.toml
  - Action to open the MCP configuration file
- `codex.profileDropdown.openConfigToml.wsl` — Open config.toml in WSL environment
  - Action to open the MCP configuration file inside Windows Subsystem for Linux
- `composer.modelSettings.errorConfigValidation` — Couldn’t update model settings. Check your config.toml.{br}{br}{message}
  - Error shown when updating model settings fails because the configuration is invalid
- `composer.modelSettings.errorGeneric` — Couldn’t update model settings
  - Error shown when updating model settings fails for a non-auth reason
- `composer.pluginSelectionRequiresSupportedRuntime` — This Codex runtime does not support chat plugin selection. Update the runtime before sending this chat
  - Error when a chat excludes plugins but the selected execution host cannot enforce those exclusions
- `composer.realtime.createThreadError` — Unable to start voice chat
  - Toast shown when creating a new thread for realtime voice fails

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
