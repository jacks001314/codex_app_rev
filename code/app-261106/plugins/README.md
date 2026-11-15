# plugins

> 来源：`app.asar` → 26.1106 Rspack 数字 chunk；本目录 10 个文件 / raw 1.1MB / formatted 2.1MB。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `168352.2a867650b7.js` | 207944 | 193 | mandatory |
| `638374.f9fd58b41c.js` | 206296 | 88 | mandatory |
| `548929.433a0aeeb6.js` | 127984 | 137 | namespace-score |
| `74892.d82a21b997.js` | 106649 | 67 | namespace-score |
| `141666.17761a09b1.js` | 93333 | 74 | namespace-score |
| `368728.be135637e9.js` | 93267 | 59 | namespace-score |
| `604319.1165d277e4.js` | 85401 | 67 | namespace-score |
| `557957.a6328a1ea3.js` | 84050 | 57 | namespace-score |
| `819365.7e67588602.js` | 82217 | 134 | mandatory |
| `474358.b061305c13.js` | 63520 | 54 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `plugins.create` | 131 |
| `plugins.detail` | 127 |
| `plugins.editor` | 76 |
| `skills.appsPage` | 55 |
| `settings.mcp` | 53 |
| `workspace-plugins.template` | 45 |
| `browserSkills.editor` | 42 |
| `workspace-plugins.mcp-template-setup` | 37 |

## 开发者描述（节选）

- `admin.plugins.v2.detail.create_custom_connector_modal.custom_name.label` — Custom name
  - Label above the editable suffix of the custom plugin name in the redesigned plugin admin template creation modal. The template name is shown as a fixed prefix inside the same field.
- `admin.plugins.v2.detail.create_custom_connector_modal.custom_name.placeholder` — Custom name
  - Placeholder inside the editable suffix portion of the custom plugin name field on the redesigned plugin admin template creation modal.
- `admin.plugins.v2.detail.create_custom_connector_modal.custom_name.workspace_placeholder` — for {workspaceName}
  - Placeholder for the editable custom plugin name suffix, after the fixed template name. workspaceName is the current workspace's display name; for example, the full field reads Oracle Analytics for HC Test Workspace.
- `admin.plugins.v2.detail.create_custom_connector_modal.description.label_220` — Description (220 characters)
  - Label and character limit for the description used by ChatGPT to select a custom plugin. The limit matches the installed-plugin prompt formatter.
- `admin.plugins.v2.detail.create_custom_connector_modal.description.placeholder` — Tell the model when to use this plugin
  - Placeholder in the optional description field when a workspace administrator creates a plugin instance from a plugin template in Admin Console. Asks the administrator to describe when the AI model should use this plugin. Keep the instruction concise.
- `admin.plugins.v2.detail.create_custom_connector_modal.risk_acknowledgment.verified_template_data_access_description` — This {templateName} template is verified by OpenAI, but OpenAI has not reviewed this specific MCP server. An untrusted server may access or steal information shared through app use, or trick ChatGPT into using tools in unintended ways, including changing or deleting data.
  - Warning shown beside the required risk-acknowledgment checkbox when a workspace administrator creates a custom MCP server from an OpenAI-verified provider template in the redesigned plugin admin creation modal. Explains that provider-template verification does not establish trust in the particular workspace-supplied server. An untrusted server can access information shared through app use and manipulate tool use to change or delete data. Placeholder {templateName} is the provider name, such as Snowflake.

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`。模块级文案索引见 `_CATALOG.json`。
