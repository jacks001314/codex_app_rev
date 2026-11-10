# Workspace Agents（26.1103 扩张）

> 证据等级：A（`workspaceAgents.*` 字面量与静态组件）。未做运行时插桩。
> 代码路径相对 `code/app-261103/workspace-agents/`。

## 1. 规模变化

| 指标 | 26.1016 | 26.1103 |
| --- | ---: | ---: |
| `workspaceAgents*` 文案 | 337 | **982** |
| 新增 / 移除 / 改写 id | — | 670 / 25 / 8 |
| 本模块代表 chunk | — | 8 个 / 1.0 MB |

26.1016 只有零散的 workspace agent 文案；26.1103 出现了完整的 builder、
发现页、详情页、资源/连接/排程与发布流程。

## 2. 产品结构

| 区块 | 关键文案 | 说明 |
| --- | --- | --- |
| 列表/发现 | `workspaceAgents.index.*`、`workspaceAgents.discovery.*` | 加载、重试、草稿状态、发布时间 |
| Builder | `workspaceAgents.builder.*` | 编辑 agent 的主界面 |
| ChatGPT 频道 | `builder.appearance*`、`addChannelAutomation` | 频道外观、自动化 |
| Apps | `builder.apps*` | 选择 app、加载 actions、已添加状态 |
| Skills | `builder.addSkill`、`workspaceAgents.skillIcon` | skill picker、图标 |
| Starter prompts | `builder.addStarterPrompt`、`addFirstStarterPrompt` | 首屏建议问题 |
| 资源 | `workspaceAgents.resources.*` | 资源列表与添加 |
| 连接 | `workspaceAgents.connections.*` | 外部连接 |
| 排程 | `workspaceAgents.schedules.*` | 定时运行 |
| API | `workspaceAgents.api.*` | agent 的 API 能力 |
| 详情 | `workspaceAgents.detail.*` | 查看/编辑/发布 |

## 3. Builder 的关键交互

从 `935979.a5260b2a69.js`（430 条文案）可见：

- **草稿/发布**：`index.draftEdited = "Draft · Edited {time}"`；
  未发布 agent 有独立的最后编辑时间；
- **频道预览**：`appearanceComposer = "Ask {name}"` 是外观预览里的禁用输入框；
- **App actions**：`apps.actionsError = "Couldn’t load this app’s actions. Try again."`，
  说明 app 选择后会按 app 拉取 actions；
- **Starter prompt**：空态提供 “Add first prompt”，非空态是 “Add prompt”；
- **Skill picker**：从紧凑资源行打开；
- **Automation**：`addChannelAutomation` 打开 ChatGPT 频道自动化编辑器；
- **资源行**：`resources.*` 与 `skillIcon.*` 负责展示 agent 绑定的资源。

## 4. 与 ChatGPT 频道的关系

`workspaceAgents.builder.appearanceDescription = "Customize how your agent looks
in ChatGPT"`，`appearance` 是 “ChatGPT channel appearance settings” 的标题。
因此 Workspace Agent 不是独立的聊天产品，而是**发布到 ChatGPT 频道的可配置 agent**：
外观、starter prompts、apps、skills、automation 都在同一个 builder 中配置。

## 5. 代码地图

| 文件 | 作用 |
| --- | --- |
| `935979.a5260b2a69.js` | Builder 主实现（430 条文案） |
| `111761.48cb3bc76b.js` | 发现/连接（72 条） |
| `306668.a88d898425.js` | 详情/排程（60 条） |
| `340441.2eb62c8a93.js` | 资源（57 条） |
| `278867.6019d877a2.js` | Builder 辅助（51 条） |
| `666535.19b6f124eb.js` | Builder 辅助（86 条） |
| `880915.62ba2647bd.js` | 团队/图标（136 条，与 settings 共享） |
| `690759.779649148e.js` | 团队/图标（115 条，与 settings 共享） |

## 6. 已知局限

- 没有还原 agent 的持久化 schema（只看到 UI 字段与动作）；
- 发布后的运行时行为（频道内如何路由到 agent、如何执行 actions/skills）
  需要服务端与 app-server 配合，静态包只能看到客户端契约；
- 部分 chunk 与 `settings.teams` 共享，模块边界按文案主命名空间划分。
