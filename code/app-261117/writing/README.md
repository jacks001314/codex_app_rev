# writing

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 6 个文件 / raw 0.4 MB / formatted 0.8 MB，模块级文案 217 条（21 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `645403.1084c42095.js` | 111574 | 69 | namespace-score |
| `639670.66a9154c73.js` | 108460 | 68 | namespace-score |
| `591210.be229a2122.js` | 99858 | 40 | namespace-score |
| `493889.907634cbcf.js` | 72335 | 29 | namespace-score |
| `867839.8af34c80aa.js` | 40777 | 12 | namespace-score |
| `996976.d6a767f3a0.js` | 28787 | 2 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `codex.writingBlock` | 136 |
| `chatgptConversations.writingBlock` | 23 |
| `chatgptFilePreview.versionHistory` | 14 |
| `writingStyle.setup` | 10 |
| `beacons.connectApp` | 6 |
| `writingStyle.apps` | 6 |
| `chatgptConversations.libraryWritingBlock` | 3 |
| `library.image` | 3 |

## 开发者描述（节选）

- `codex.writingBlock.documentTabTitle` — Document
  - Title of a document writing block tab when the document has no title.
- `codex.writingBlock.header.title.fallback` — Writing
  - Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.
- `codex.writingBlock.history.restoreError` — {conflict, select, yes {The document changed. Review the latest version and try again.} other {Could not restore this version. Try again.}}
  - Error when restoring a saved writing-block revision fails; the selected historical preview stays open
- `codex.writingBlock.messageTabTitle` — Message
  - Title of an expanded chat-message writing block tab when the block has no custom title.

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
