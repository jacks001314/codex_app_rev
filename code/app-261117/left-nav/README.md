# left-nav

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 11 个文件 / raw 2.0 MB / formatted 3.3 MB，模块级文案 1381 条（325 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `881612.d5f896add0.js` | 1225243 | 512 | mandatory |
| `698453.8f3dfd0e9a.js` | 154798 | 109 | namespace-score |
| `792740.d0885daf14.js` | 149065 | 157 | mandatory |
| `981868.e49879adb7.js` | 134816 | 142 | namespace-score |
| `647832.a4407da6f8.js` | 120466 | 88 | namespace-score |
| `556779.4373af862c.js` | 119107 | 107 | namespace-score |
| `622950.84ac03d321.js` | 70948 | 79 | namespace-score |
| `687681.b8ed323cbc.js` | 62497 | 66 | namespace-score |
| `330967.1c87309970.js` | 44005 | 52 | namespace-score |
| `807357.4dae1e0fd5.js` | 40376 | 76 | namespace-score |
| `992331.2d54391773.js` | 23616 | 53 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `inbox.automations` | 188 |
| `automations.configuration` | 83 |
| `settings.automations` | 58 |
| `navigation.survey` | 49 |
| `automations.editor` | 41 |
| `sidebarElectron.priorityThreads` | 37 |
| `chatgptConversations.sidebar` | 26 |
| `automations.timeZones` | 25 |

## 开发者描述（节选）

- `appgenConversation.createPrompt.withSitesMention` — Create a new site with {sitesMention}
  - Prefilled prompt for starting a new site from the Sites page. {sitesMention} is the serialized inline mention of the Sites website-building plugin; preserve it without adding another at sign.
- `appgenConversation.editFilePrompt` — {fileMention} make these changes\u2026
  - Prompt for continuing work on a Library file in its original task
- `appgenConversation.publishPrompt` — {siteMention} publish this site
  - Prompt for asking the model to publish an existing unpublished Site
- `appgenConversation.remixPrompt` — Remix {siteMention}
  - Editable, unsent prompt in a new chat after choosing Remix in a Site preview. Asks to create a new site based on the original. {siteMention} is an inline link to the original Site; preserve it unchanged.
- `appgenPage.createMenu.imagePrompt` — Create an image of \u2026
  - Prefill prompt for creating an image from the Library
- `automations.creation.noEligibleModel` — No eligible model is available for this task
  - Error when neither the automation default nor another model in the selected Chat or Work catalog can be used to create a Goal or scheduled task

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
