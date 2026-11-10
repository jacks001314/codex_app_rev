# app-shell

> 来源：`app.asar` → 26.1103 Rspack 数字 chunk；本目录 8 个文件 / raw 0.5MB / formatted 0.8MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `654172.b64b14661b.js` | 172400 | 423 | namespace-score |
| `739641.9e136530d2.js` | 106018 | 367 | namespace-score |
| `892801.3384f97430.js` | 88184 | 383 | namespace-score |
| `437750.efeec419ad.js` | 87123 | 380 | namespace-score |
| `183385.ec39b3691f.js` | 50386 | 55 | namespace-score |
| `480596.8ed31e9907.js` | 40006 | 27 | namespace-score |
| `632692.b5fd7e03e9.js` | 21009 | 18 | namespace-score |
| `428876.9889d86ec1.js` | 9469 | 13 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `codex.command` | 171 |
| `codex.commandDescription` | 154 |
| `browser.auth` | 68 |
| `codex.commandMenuTitle` | 45 |
| `AuthError.csamAccountClosure` | 36 |
| `codex.commandMenu` | 32 |
| `codexMicro.joystickFeedback` | 13 |
| `keyboardShortcutsDialog.section` | 8 |

## 开发者描述（节选）

- `AcceptInvitePage.sso.button.company` — Continue with company SSO
  - Primary button on the workspace invitation login-method picker for an invited end user. Opens their company's single sign-on provider. Other buttons offer password and social login when company SSO is optional. Keep the label short.
- `AcceptInvitePage.sso.button.password` — Continue with password
  - Button on the workspace invitation login-method picker for an invited end user when company single sign-on is optional. Selects password login or signup directly, instead of displaying another SSO picker. Other buttons offer company SSO and social login. Keep the label short.
- `AuthError.csamAccountClosure.acknowledgment.button.confirm` — I understand
  - Primary button on the CSAM suspension acknowledgment modal. Acknowledges the warning and reveals the suspension status page; it does not lift the suspension.
- `AuthError.csamAccountClosure.acknowledgment.duration.first` — <strong>We’ve suspended your account for 24 hours.</strong> If this activity continues, we’ll permanently close your account.
  - Second bullet in the first CSAM suspension acknowledgment modal. Gives the fixed 24-hour suspension duration and warns of permanent closure. The strong tag emphasizes the duration sentence; this is not a countdown.
- `AuthError.csamAccountClosure.acknowledgment.duration.repeat` — <strong>Your account is suspended for 48 hours.</strong> You’ve already received a warning about this activity. If it happens again, we’ll permanently close your account.
  - Second bullet in the repeat CSAM suspension acknowledgment modal. Gives the fixed 48-hour duration and final warning before permanent closure. The strong tag emphasizes the duration sentence; this is not a countdown.
- `AuthError.csamAccountClosure.acknowledgment.policy.first` — <strong>Content that sexualizes children is harmful, whether AI-generated or not.</strong> Seeking it violates OpenAI’s <policies>Usage Policies</policies>.
  - First bullet in the 24-hour CSAM suspension acknowledgment modal. Explains harm and policy. The strong tag emphasizes the first sentence; policies links to OpenAI Usage Policies.

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
