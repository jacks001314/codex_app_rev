# enterprise-trust

> 来源：`app.asar` → 26.1103 Rspack 数字 chunk；本目录 12 个文件 / raw 1.8MB / formatted 3.2MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `312026.87adc043a1.js` | 427079 | 220 | mandatory |
| `220821.b4a9b80850.js` | 296372 | 353 | mandatory |
| `720410.9eca2290fe.js` | 200694 | 253 | mandatory |
| `922492.8f97ddc9a7.js` | 143339 | 209 | mandatory |
| `233731.4acbde3801.js` | 143290 | 127 | namespace-score |
| `85236.c194df1024.js` | 137996 | 127 | mandatory |
| `122578.2cc9765ee9.js` | 136086 | 256 | namespace-score |
| `377631.ba30eb7339.js` | 110818 | 76 | namespace-score |
| `462190.f83fe20c3b.js` | 97285 | 60 | namespace-score |
| `920910.8d98fd9b96.js` | 91410 | 81 | mandatory |
| `2463.22de500d36.js` | 71337 | 145 | namespace-score |
| `889222.ccb66779fe.js` | 53705 | 71 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `chatgpt.rosalind_access` | 277 |
| `restricted.environmentSetup` | 236 |
| `restricted.aeonMessaging` | 131 |
| `chatgpt.privacy_center` | 127 |
| `security.scanDetail` | 74 |
| `security.repositories` | 61 |
| `security.findingReview` | 56 |
| `restricted.aeon` | 52 |

## 开发者描述（节选）

- `account.currentOrganization.heading` — Current organization:
  - Label above the currently selected organization’s name and avatar
- `artifactTemplate.customizePrompt` — Help me customize a personal copy of {template} using {templateCreator}
  - Composer prompt for editing a built-in or shared template by creating a personal copy
- `artifactTemplate.resultCard.editPrompt` — Help me make updates to {template} using {templateCreator}
  - Composer prompt appended when editing an artifact template
- `avatarOverlay.quickChatBar.enableAppshotsInThread` — Enable Appshots in a thread first
  - Explains why attaching an Appshot from Mini is disabled before completing setup in the main window
- `chatgpt.privacy_center.account_security.description` — Add an extra verification step to help protect your account when you log in.
  - Explanatory subtitle and card description for the ChatGPT Privacy Center multi-factor authentication topic.
- `chatgpt.privacy_center.account_security.faq.benefits.answer` — MFA makes it harder for someone else to sign in because they need another way to verify it’s you, even if they know your password.
  - Expanded answer in the ChatGPT Privacy Center account-security dialog explaining that multi-factor authentication protects users even if a password is compromised.

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
