# enterprise-trust

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 14 个文件 / raw 1.9 MB / formatted 3.4 MB，模块级文案 2077 条（172 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `66689.b13f7bff3c.js` | 551478 | 247 | mandatory |
| `899333.11d349e59b.js` | 267286 | 358 | mandatory |
| `185223.93b5e63728.js` | 189437 | 351 | mandatory |
| `583345.e569e2b948.js` | 163963 | 240 | mandatory |
| `840125.83666371b5.js` | 147870 | 216 | namespace-score |
| `962147.d4f75d1ba0.js` | 124198 | 128 | namespace-score |
| `699245.f92cb736f2.js` | 112218 | 53 | namespace-score |
| `549927.361b5037c4.js` | 92962 | 107 | namespace-score |
| `305126.aaab4df98e.js` | 82784 | 84 | namespace-score |
| `825699.997a1f71dc.js` | 74280 | 104 | namespace-score |
| `936926.57a49561de.js` | 60840 | 150 | namespace-score |
| `39295.b979f21ec6.js` | 47966 | 67 | namespace-score |
| `678000.2a4f5cde23.js` | 35432 | 48 | namespace-score |
| `356876.10d9c55373.js` | 16451 | 30 | mandatory |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `chatgpt.rosalind_access` | 314 |
| `restricted.environmentSetup` | 233 |
| `restricted.aeonMessaging` | 135 |
| `chatgpt.privacy_center` | 128 |
| `restricted.aeon` | 123 |
| `security.scanDetail` | 74 |
| `security.repositories` | 61 |
| `security.findingReview` | 56 |

## 开发者描述（节选）

- `artifactHandoff.untitledDocument` — Untitled document
  - Fallback name for a shared local document without a title
- `composer.appshotCapture.attach.error` — Unable to attach appshot
  - Toast shown when attaching an appshot fails
- `environmentSetup.conflict.reapplyPromptWithEditorState` — The published environment changed, so a new draft based on the latest published version is now loaded in this chat. Reapply the environment changes we discussed in this conversation to this new draft, preserving the newer published changes. Ask me if the changes conflict.{hasUnsavedChanges, select, true { My unsaved editor changes haven\u2019t been applied to this draft.} other {}}
  - User message sent after same-chat environment conflict recovery. Include the final sentence only when local editor changes or inputs are preserved separately from the replacement draft.
- `environmentSetup.publicationHandoff.prompt` — The environment was published. A new draft based on the latest published version is now loaded in this chat. Wait for my next changes; do not reapply previous changes or publish anything.
  - Message sent automatically after Publish attaches the next editable draft to the same environment setup chat. The agent should wait for new editing instructions.
- `orbit.browserAnnotations.restoreUnavailable` — Couldn't restore all queued annotations. Reopen this chat to try again
  - Durable annotation uploads could not be read; saved request identities remain available for retry and no data is removed
- `orbit.feedback.openError` — Couldn\u2019t open feedback. Please try again
  - Error shown when the Dots feedback form cannot open

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
