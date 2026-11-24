# spaces

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 13 个文件 / raw 3.0 MB / formatted 5.0 MB，模块级文案 1458 条（140 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `767143.c9b25c9c6e.js` | 1681124 | 651 | mandatory |
| `919312.4cf0502f45.js` | 375076 | 202 | mandatory |
| `143641.dd9eda399b.js` | 191359 | 95 | namespace-score |
| `40994.879eff8806.js` | 137499 | 105 | namespace-score |
| `176964.9b2d84150e.js` | 127700 | 78 | namespace-score |
| `461009.abb1bd4b6b.js` | 118184 | 60 | namespace-score |
| `2923.00d52a66c7.js` | 100023 | 59 | namespace-score |
| `315383.260060e7d1.js` | 98221 | 113 | namespace-score |
| `303047.bfdf47b7ff.js` | 88777 | 55 | namespace-score |
| `59817.d7c56b9e00.js` | 77440 | 78 | namespace-score |
| `878742.5d8e8f378b.js` | 69283 | 99 | mandatory |
| `999385.7f46b0d064.js` | 62751 | 109 | namespace-score |
| `337184.fa7c28dcd1.js` | 36363 | 42 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `codex.space` | 625 |
| `codex.page` | 127 |
| `codex.pages` | 126 |
| `space.pageTemplates` | 94 |
| `space.welcome` | 48 |
| `space.introduction` | 38 |
| `pages.media` | 18 |
| `codex.threadFindBar` | 17 |

## 开发者描述（节选）

- `codex.page.dot.ownerLabel.productName` — {mention, select, true {@} other {}}{hasOwner, select, true {{name}\u2019s {dot}} other {{dot}}}
  - Shared Page label for a dot, an always-on agent, using the responsible person's first name when known. dot is a common noun for the agent and must remain untranslated. Mention labels start with @. Never use the agent's private nickname.
- `codex.page.taskMention.checkboxDotSendError` — Could not send this assignment to your {dot}.
  - Shown to the editor if their checkbox assignment could not reach their personal agent.
- `codex.page.taskMention.ownerLabel` — @{name}\u2019s ChatGPT
  - ChatGPT task mention shown to someone other than its owner, using the owner's first name
- `codex.page.taskMention.selfLabel` — @ChatGPT
  - ChatGPT task mention shown to its owner or when the owner\u2019s name is unavailable; keep the product name
- `codex.pages.comments.markReadError` — Could not mark this discussion as read. Reopen it to try again.
  - Error when saving the read state of a Page comment discussion
- `codex.pages.mentions.cannotShare` — Mention saved, but people without page access won\u2019t be notified. Ask an owner to share the page.
  - Explains that tagging someone does not grant access or notify them when the author cannot share the Page

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
