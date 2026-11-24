# image-editing

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 8 个文件 / raw 0.7 MB / formatted 1.4 MB，模块级文案 381 条（277 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `915524.f8563bce31.js` | 224198 | 99 | namespace-score |
| `216721.353f71a396.js` | 208573 | 190 | mandatory |
| `769550.c57ec748e4.js` | 100609 | 51 | namespace-score |
| `500617.e5260bbb0f.js` | 67702 | 26 | namespace-score |
| `570369.7bf6f653b0.js` | 61368 | 22 | namespace-score |
| `409136.98a46e28f4.js` | 46691 | 19 | namespace-score |
| `45428.67134ed709.js` | 41369 | 19 | namespace-score |
| `975443.145d887523.js` | 25972 | 5 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `images.preview` | 29 |
| `imageTextEditing.layer` | 17 |
| `images.reference` | 11 |
| `images.history` | 9 |
| `gifEditor.comments` | 6 |
| `image-gen.images-app` | 5 |
| `images.nova` | 5 |
| `imagesApp.promptSections` | 5 |

## 开发者描述（节选）

- `composer.executorSkill.computerChanged` — The computer or folder changed. Choose the skill again before sending.
  - Error when the selected skill no longer belongs to the cloud task's workspace
- `images.sketch.unavailable` — Sketch is unavailable right now
  - Error toast when an Images sketch card cannot open the drawing editor because the composer is not ready or cannot accept a sketch attachment. The user can select the card again to retry.

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
