# writing

> 来源：`app.asar` → 26.1103 Rspack 数字 chunk；本目录 5 个文件 / raw 0.4MB / formatted 0.8MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `400481.351dd8d323.js` | 119731 | 70 | namespace-score |
| `678608.f43ff490bd.js` | 111944 | 42 | namespace-score |
| `720436.f41c4a9f13.js` | 79033 | 26 | namespace-score |
| `493889.10a12886ed.js` | 74702 | 29 | namespace-score |
| `897874.314ec9b5c1.js` | 47990 | 42 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `codex.writingBlock` | 128 |
| `chatgptConversations.writingBlock` | 21 |
| `chatgptFilePreview.versionHistory` | 14 |
| `writingStyle.setup` | 10 |
| `beacons.connectApp` | 6 |
| `writingStyle.apps` | 6 |
| `library.image` | 3 |
| `artifactViewer.openInLibrary` | 2 |

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
