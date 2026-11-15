# workspace-agents

> 来源：`app.asar` → 26.1106 Rspack 数字 chunk；本目录 9 个文件 / raw 1.1MB / formatted 1.9MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `487049.d418d07682.js` | 623415 | 430 | mandatory |
| `696716.eb951d6a77.js` | 85625 | 50 | namespace-score |
| `306668.38f15a0b60.js` | 80837 | 60 | namespace-score |
| `496004.b9edf1ab30.js` | 66359 | 52 | namespace-score |
| `108374.12227b4bf1.js` | 65447 | 57 | namespace-score |
| `292001.62624bdd67.js` | 62920 | 86 | namespace-score |
| `377793.dfb044e751.js` | 59361 | 127 | namespace-score |
| `111761.10e93b24ec.js` | 56148 | 72 | namespace-score |
| `967975.71529e809c.js` | 30124 | 39 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `workspaceAgents.builder` | 334 |
| `teams.icons` | 100 |
| `workspaceAgents.schedules` | 63 |
| `workspaceAgents.skillIcon` | 49 |
| `workspaceAgents.index` | 44 |
| `workspaceOwnerOnboarding.invitations` | 44 |
| `workspaceAgents.resources` | 40 |
| `inbox.automations` | 32 |

## 开发者描述（节选）

- `admin-invite.domainCompletion.hint` — Press Tab to complete the email address with @{domain}.
  - Screen reader hint while entering a workspace invitation. The domain is the part of the inviter's email after the at sign. Tab accepts the suggested address.
- `admin-invite.domainCompletion.key` — Tab
  - Small keyboard key label after a suggested email domain in workspace invites. Use the local name of the Tab key.
- `appearanceOptionGroup.next` — Next options
  - Accessible label for scrolling to the next page of appearance options in this section
- `appearanceOptionGroup.previous` — Previous options
  - Accessible label for scrolling to the previous page of appearance options in this section
- `automation.schedule.unsupportedInterval` — Unsupported
  - Badge beside a selected automation interval that the current owner's schedule policy does not allow. The user must choose a supported interval to save.
- `automations.schedule.intervalUnit` — {unit, select, hour {hours} other {minutes}}
  - Unit option beside a task's numeric repeat interval; unit is hour or minute

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
