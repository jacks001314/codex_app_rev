# app-shell

> 来源：`app.asar` → 26.1106 Rspack 数字 chunk；本目录 8 个文件 / raw 0.8MB / formatted 1.4MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `534163.f7cf5f48cf.js` | 309320 | 291 | namespace-score |
| `401845.8b91e60f6b.js` | 169075 | 423 | namespace-score |
| `739641.366d8e5238.js` | 106514 | 369 | namespace-score |
| `892801.93c7ef0759.js` | 88613 | 385 | namespace-score |
| `437750.f618b78ba8.js` | 87568 | 382 | namespace-score |
| `399031.4c7825f0c7.js` | 50507 | 55 | namespace-score |
| `330351.b2baa98371.js` | 41365 | 27 | namespace-score |
| `113915.7a56450569.js` | 25248 | 23 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `codex.command` | 172 |
| `codex.commandDescription` | 155 |
| `thread.browser` | 94 |
| `browser.permission` | 76 |
| `browser.auth` | 58 |
| `codex.commandMenuTitle` | 45 |
| `AuthError.csamAccountClosure` | 36 |
| `codex.commandMenu` | 30 |

## 开发者描述（节选）

- `AcceptInvitePage.sso.button.company` — Continue with company SSO
  - Primary button on the workspace invitation login-method picker for an invited end user. Opens their company's single sign-on provider. Other buttons offer password and social login when company SSO is optional. Keep the label short.
- `AcceptInvitePage.sso.button.password` — Continue with password
  - Button on the workspace invitation login-method picker for an invited end user when company single sign-on is optional. Selects password login or signup directly, instead of displaying another SSO picker. Other buttons offer company SSO and social login. Keep the label short.
- `accountSwitch.loading.primary` — Switching accounts
  - Primary loading message shown while ChatGPT switches to another account or loads the destination account
- `accountSwitch.loading.secondary` — Please wait
  - Secondary loading message asking the user to wait while ChatGPT switches accounts
- `AuthError.csamAccountClosure.acknowledgment.button.confirm` — I understand
  - Primary button on the CSAM suspension acknowledgment modal. Acknowledges the warning and reveals the suspension status page; it does not lift the suspension.
- `AuthError.csamAccountClosure.acknowledgment.duration.first` — <strong>We’ve suspended your account for 24 hours.</strong> If this activity continues, we’ll permanently close your account.
  - Second bullet in the first CSAM suspension acknowledgment modal. Gives the fixed 24-hour suspension duration and warns of permanent closure. The strong tag emphasizes the duration sentence; this is not a countdown.

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
