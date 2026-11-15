# image-editing

> 来源：`app.asar` → 26.1106 Rspack 数字 chunk；本目录 8 个文件 / raw 0.8MB / formatted 1.4MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `87804.fcae5854d3.js` | 356669 | 208 | mandatory |
| `115354.67ef35607b.js` | 109559 | 44 | namespace-score |
| `606947.ebfe970e6f.js` | 88562 | 40 | namespace-score |
| `741194.3d08c62211.js` | 69160 | 19 | namespace-score |
| `744843.d27b33e6a3.js` | 65665 | 22 | namespace-score |
| `35357.3096a2d8e9.js` | 63480 | 27 | namespace-score |
| `45428.a2da397739.js` | 39230 | 19 | namespace-score |
| `42415.613e6ec86b.js` | 8897 | 4 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `images.preview` | 29 |
| `codex.localConversation` | 17 |
| `imageTextEditing.layer` | 17 |
| `images.reference` | 11 |
| `images.history` | 5 |
| `images.nova` | 5 |
| `imagesApp.promptSections` | 5 |
| `imageSidePanel.aspectRatio` | 5 |

## 开发者描述（节选）

- `artifactComments.close` — Close comments
  - Accessible label for the button that closes the artifact comments sidebar
- `artifactComments.deleteAllResolved` — Delete all
  - Action that permanently deletes every resolved artifact comment thread
- `artifactComments.empty` — No comments yet
  - Empty state shown when the open artifact has no native file comments or persistent ChatGPT comment threads; leave the product name ChatGPT unchanged
- `artifactComments.filteredEmpty` — Adjust filters to see comments
  - Empty state when existing artifact comment threads do not match the selected open or resolved filter
- `artifactComments.filterLabel` — Filter comments
  - Accessible label for the menu that filters artifact comments by open or resolved status
- `artifactComments.filterOpen` — Open
  - Filter option showing artifact comment threads that have not been resolved

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
