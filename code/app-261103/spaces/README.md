# spaces

> 来源：`app.asar` → 26.1103 Rspack 数字 chunk；本目录 12 个文件 / raw 2.6MB / formatted 4.2MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `384375.45e1f0cefc.js` | 1565747 | 663 | mandatory |
| `151642.8ff0baaac3.js` | 376263 | 165 | namespace-score |
| `101313.c9b3ce267b.js` | 132477 | 82 | namespace-score |
| `715082.ce68381cc7.js` | 115120 | 74 | namespace-score |
| `129222.89d655aa76.js` | 113746 | 95 | namespace-score |
| `59817.40ca0302bd.js` | 86204 | 78 | namespace-score |
| `43725.f8e104493e.js` | 70238 | 42 | namespace-score |
| `768271.c1494458e9.js` | 69051 | 42 | namespace-score |
| `656792.065b046301.js` | 64286 | 54 | namespace-score |
| `146502.f329604e0b.js` | 63308 | 45 | mandatory |
| `236683.463da52c65.js` | 54010 | 44 | mandatory |
| `337184.1781c2146a.js` | 40031 | 42 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `codex.space` | 598 |
| `codex.page` | 124 |
| `codex.pages` | 80 |
| `space.welcome` | 48 |
| `space.pageTemplates` | 47 |
| `space.introduction` | 38 |
| `libraryNext.delete` | 23 |
| `pages.media` | 18 |

## 开发者描述（节选）

- `App.forceLogInModalButton` — Log in
  - Button that signs out the expired ChatGPT session and takes the user to login
- `App.forceLogInModalDescription` — Please log in again to continue using the app
  - Explains that the user must log in again after their current ChatGPT session expires
- `App.forceLogInModalTitle` — Your session has expired
  - Title of the blocking dialog shown when the user's current ChatGPT session has expired
- `appgenConversation.createPrompt.withSitesMention` — Create a new site with {sitesMention}
  - Prefilled prompt for starting a new site from the Sites page. {sitesMention} is the serialized inline mention of the Sites website-building plugin; preserve it without adding another at sign.
- `appgenConversation.editFilePrompt` — {fileMention} make these changes…
  - Prompt for continuing work on a Library file in its original task
- `appgenConversation.publishPrompt` — {siteMention} publish this site
  - Prompt for asking the model to publish an existing unpublished Site

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
