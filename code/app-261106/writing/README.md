# writing

> 来源：`app.asar` → 26.1106 Rspack 数字 chunk；本目录 6 个文件 / raw 0.5MB / formatted 0.9MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `132733.05a7a825a3.js` | 137091 | 114 | namespace-score |
| `678608.7204be3cda.js` | 112096 | 42 | namespace-score |
| `720436.aca6725ab2.js` | 79684 | 26 | namespace-score |
| `493889.efa40b5c17.js` | 75296 | 29 | namespace-score |
| `740827.07c9446873.js` | 47935 | 42 | namespace-score |
| `240269.c69a812fa3.js` | 29419 | 8 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `codex.writingBlock` | 128 |
| `codex.projectAppearance` | 38 |
| `chatgptConversations.writingBlock` | 21 |
| `chatgptFilePreview.versionHistory` | 14 |
| `writingStyle.setup` | 10 |
| `writingStyle.settings` | 7 |
| `beacons.connectApp` | 6 |
| `symbolPicker.icons` | 6 |

## 开发者描述（节选）

- `appConnectModal.loadError` — Couldn’t open app connection
  - Title when downloading the app connection dialog fails after retrying
- `apps.disable.success` — {appName} app disabled
  - Toast shown after successfully disabling an app
- `apps.enable.success` — {appName} app enabled
  - Toast shown after successfully enabling an app
- `apps.update.error` — Failed to update app
  - Toast shown when enabling or disabling an app fails
- `artifactComments.heading` — Comments
  - Heading of the sidebar containing native file comments and persistent ChatGPT comment threads; leave the product name ChatGPT unchanged
- `artifactViewer.openInLibrary` — Open in Library
  - Artifact title menu action for opening the saved artifact in Library

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
