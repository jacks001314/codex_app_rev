# plugins

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 11 个文件 / raw 1.1 MB / formatted 2.0 MB，模块级文案 954 条（161 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `958430.41a0eac9a5.js` | 207928 | 194 | mandatory |
| `375488.651e5ccf3a.js` | 163037 | 120 | namespace-score |
| `737004.691c04328c.js` | 151164 | 109 | mandatory |
| `587355.0f810f85cc.js` | 98789 | 64 | namespace-score |
| `249533.8c8e57d069.js` | 93191 | 77 | namespace-score |
| `604319.2bc75ad42a.js` | 84962 | 81 | namespace-score |
| `947156.998208fdbe.js` | 80430 | 0 | mandatory |
| `771643.297732358d.js` | 77988 | 74 | namespace-score |
| `74892.c785770f67.js` | 74291 | 67 | namespace-score |
| `819365.8f30b55acf.js` | 66507 | 134 | mandatory |
| `686745.58101adba7.js` | 47745 | 57 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `plugins.create` | 133 |
| `plugins.detail` | 115 |
| `plugins.editor` | 89 |
| `skills.appsPage` | 51 |
| `workspace-plugins.template` | 44 |
| `browserSkills.editor` | 42 |
| `workspace-plugins.mcp-template-setup` | 38 |
| `restricted.aeon` | 33 |

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

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
