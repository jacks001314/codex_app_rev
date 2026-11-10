# plugins

> 来源：`app.asar` → 26.1103 Rspack 数字 chunk；本目录 8 个文件 / raw 0.7MB / formatted 1.3MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `548929.7a0b4cbb28.js` | 132632 | 137 | namespace-score |
| `74892.e8d00acc45.js` | 106324 | 66 | namespace-score |
| `978887.6bf7a8b897.js` | 94751 | 58 | namespace-score |
| `192666.161cacd23a.js` | 93105 | 68 | namespace-score |
| `473177.a69adbc5b9.js` | 91687 | 74 | namespace-score |
| `604319.7947499c94.js` | 85358 | 67 | namespace-score |
| `890583.86cdb604a9.js` | 81956 | 134 | namespace-score |
| `474358.951967df78.js` | 63520 | 54 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `plugins.create` | 131 |
| `plugins.detail` | 125 |
| `settings.mcp` | 53 |
| `skills.appsPage` | 53 |
| `browserSkills.editor` | 42 |
| `skills.card` | 25 |
| `plugins.card` | 21 |
| `browserSkills.sharing` | 17 |

## 开发者描述（节选）

- `artifactTemplate.customizePrompt` — Help me customize a personal copy of {template} using {templateCreator}
  - Composer prompt for editing a built-in or shared template by creating a personal copy
- `artifactTemplate.resultCard.editPrompt` — Help me make updates to {template} using {templateCreator}
  - Composer prompt appended when editing an artifact template
- `browserPluginSettings.skills` — Skills
  - Skills included in an installed plugin
- `browserSkills.createChatPrompt` — Use {skillCreator} to help me create a skill. Keep it conversational, and start by asking what the skill should do.
  - Editable prompt prefilled in a new chat after an end user selects Create with chat in the Skills directory. Asks the assistant to help author a skill conversationally, starting with what the skill should do. The skillCreator placeholder is the selected @skill-creator mention; keep it intact. This text is not sent until the user submits it.
- `browserSkills.duplicateTitle` — Skill already exists
  - Title of the shared confirmation dialog for a duplicate name when creating or uploading a skill
- `browserSkills.editor.accessDenied` — Skills aren't available for this account
  - Error when opening the browser skill editor without Skills access

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
