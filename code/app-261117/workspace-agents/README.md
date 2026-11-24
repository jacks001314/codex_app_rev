# workspace-agents

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 10 个文件 / raw 1.1 MB / formatted 2.0 MB，模块级文案 988 条（47 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `648406.402b135744.js` | 643736 | 489 | mandatory |
| `443855.0649a1f046.js` | 92313 | 58 | namespace-score |
| `201745.cfeebbf3e6.js` | 79946 | 67 | namespace-score |
| `306668.c5ce1bbaba.js` | 76533 | 60 | namespace-score |
| `309293.532a3692fc.js` | 63168 | 118 | namespace-score |
| `219033.2aa5c1c391.js` | 59706 | 41 | namespace-score |
| `292001.a8b57383af.js` | 56194 | 86 | mandatory |
| `111761.08fca884ac.js` | 49776 | 72 | namespace-score |
| `122960.3fef7b24de.js` | 47085 | 129 | namespace-score |
| `506627.b391bfc0e1.js` | 24820 | 39 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `workspaceAgents.builder` | 318 |
| `teams.icons` | 100 |
| `Hermes.GptStudio` | 83 |
| `workspaceAgents.schedules` | 63 |
| `workspaceAgents.skillIcon` | 49 |
| `workspaceOwnerOnboarding.invitations` | 45 |
| `workspaceAgents.index` | 44 |
| `inbox.automations` | 34 |

## 开发者描述（节选）

- `admin-invite.domainCompletion.hint` — Press Tab to complete the email address with @{domain}.
  - Screen reader hint while entering a workspace invitation. The domain is the part of the inviter's email after the at sign. Tab accepts the suggested address.
- `admin-invite.domainCompletion.key` — Tab
  - Small keyboard key label after a suggested email domain in workspace invites. Use the local name of the Tab key.
- `workspaceAgents.schedules.errors.accountChanged` — Your account or workspace changed. Reopen the agent and try again
  - Error when the authenticated user or workspace changes while editing a schedule
- `workspaceAgents.schedules.errors.connections` — Connect or reconnect this agent's apps before creating an automation
  - Error when required personal app connections prevent schedule creation
- `workspaceAgents.schedules.errors.draftPermission` — You do not have permission to configure this agent draft
  - Error when creating an automation from an agent draft without editor access
- `workspaceAgents.schedules.errors.identityMissing` — Your workspace identity could not be loaded. Try again
  - Error when the current workspace user identity is unavailable

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
