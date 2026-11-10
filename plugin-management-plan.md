# Syntropy 插件管理落地计划

把 Codex app 的插件管理能力落地到 Syntropy。总原则：**Master 管事实、Node 做物化、codex 管运行时装配**。

|          |                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 逆向依据 | [plugin-management.md](plugin-management.md)（Codex desktop `26.908.9136.0`）                                                                                                                                                                                                                                                                                                                                                                                |
| 探活证据 | [probe/README.md](probe/README.md)（codex `0.154.0`，18/18 RPC 通过，能力未被 gate）                                                                                                                                                                                                                                                                                                                                                                         |
| 计划范围 | M1 插件市场/目录/安装 + M2 插件生效与影响面                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 明确不做 | M3 协作与分享、托管插件（ChatGPT 后端 `/ps/*`）、Apps 授权引导、埋点与推广激励                                                                                                                                                                                                                                                                                                                                                                               |
| 计划状态 | **P0–P8 全部工作包已落地**：逆向/探活、Master 插件服务、模板与 Agent 插件集、Node 物化与对账、REST + 桌面 IPC、独立插件页 + 影响面一级视图（含「已生效 / 代价 / 冲突」三块）；W8 验证门全绿（含新增 REST 端到端冒烟 66/66），W10 修掉实战暴露的 Windows 长路径与 git 弹窗问题。影响面的「已生效」接 Node 回报的 `PluginsReady` 条件，「缓存」接 `AgentStatus.plugin_cache_bytes`，「重名」由 Master 按平台 MCP 名称集合算出后进 `PluginRecord.mcp_conflicts` |

## 0. 冻结决策

| #   | 决策                                   | 对实现的影响                                                                                                                                                                                                                                                                            |
| --- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D1  | **插件页独立**                         | 设置中心新增独立 section `plugins`，不复用 Skills 页做 Tab、不与 MCP 页合并；MCP 页继续只负责平台内置/共享 pool                                                                                                                                                                         |
| D2  | **支持 URL/Git 安装**                  | 添加来源表单接受四类输入：`owner/repo`、git URL、`file://` 与本地目录；可选 `refName` / `sparsePaths`。Master 只登记来源并读目录；**Git 来源的实际拉取在 Node 侧**：节点把它 sparse 检出成节点级共享镜像，再以 `source_type = "local"` 写进 per-agent `config.toml`（见 §2 运行时事实） |
| D3  | **影响面是一级视图**                   | 插件列表卡片直接显示「影响 N 个 Agent」；详情页右栏有独立「影响面」Tab，能下钻到具体 Agent/模板                                                                                                                                                                                         |
| D4  | **不抽取插件 `.mcp.json` 进 MCP pool** | pool 语义收窄为「平台内置 + 集群共享」；插件自带 MCP 归插件，按 `pluginId` 归属展示                                                                                                                                                                                                     |
| D5  | **一个 Agent 一个默认 thread**         | 不做同 Agent 多线程的差异化插件集，插件集挂在 Agent（可被模板预设）这一层                                                                                                                                                                                                               |

### 0.1 三条核心决策 → 落地位置（验收对照）

| 决策                   | 界面/接口落点                                                                                                                                                                                                                         | 数据与执行链                                                                                                                                                                                                                              | 验证                                                                                                                                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **D1 插件页独立**      | 设置中心新增 capability section `plugins`（`settings-registry.ts:99`），不复用 Skills 页做 Tab、也不并进 MCP 页；页面主体 `PluginSettings()`（`SettingsPage.tsx:2865`）                                                               | 独立通道组 `syntropy:v1:plugin-*`（8 条，`contracts.ts:80`）→ `main.ts` handler → `/api/plugin-marketplaces`、`/api/plugins` → Master `PluginService`                                                                                     | 组件测试 `settings-registry.component.test.ts` 断言导航顺序含 `plugins`，`settings-page.component.test.tsx` 断言 `PluginOverviewPanel` / `PluginImpactPanel` 渲染出重名标记与缓存列；`pnpm test:component` 541/541                                            |
| **D2 从 URL/Git 安装** | 「添加来源」表单：来源输入框 + 可选 ref + 可选 sparsePaths（`plugin-source-form`）；来源接受 `owner/repo`、Git URL（`https/http/ssh/git/git@/file`）、`file://` 与本地目录                                                            | Master `parseMarketplaceSource` 分类 → Git 来源在 Master 侧镜像一次（`clone --depth 1 [--branch ref] [--sparse]`）→ Node 侧再 sparse 检出成节点级共享镜像，并一律以 `source_type = "local"` 写进 per-agent `config.toml`（§2 运行时事实） | `tools/smoke-plugin-management.ps1`：本地目录来源 + `git://` 来源真实 clone + ref 变体 + 未知 ref（503）+ 坏来源 syncError                                                                                                                                    |
| **D3 影响面一级视图**  | 列表卡片直接显示「影响 N 个模板 · M 个 Agent · K 未生效 · J 个 MCP 重名」（`plugin-impact-line`），详情右栏有独立「影响面」Tab：模板清单 + Agent 表格（节点 / 模板 / 期望 / 已就绪 / 缓存 / 备注）；详情概览另有「平台 MCP 重名」一行 | Master `GetPluginImpact`：模板 `plugins_config` 引用 + 按模板反查 Agent；`templateCount`、`mcpConflicts` 进每条插件记录；`cacheBytes` 透传 Node 上报的 `AgentStatus.plugin_cache_bytes`                                                   | REST 冒烟覆盖 `/api/plugins/{id}/impact`、`templateCount` 与「池里加同名词 → 冲突出现 → 清空后消失」；桌面在 `PLUGIN_IMPACT_PREFETCH_LIMIT = 40` 内预取影响面；`installed`/`detail`/`cacheBytes` 分别由 `PluginsReady` 条件与缓存测量填充，两侧都有针对性单测 |

## 1. 目标

- 独立的插件管理页：市场来源管理 + 可安装目录 + 已装清单 + 插件详情（概览 / 技能 / MCP / 影响面）。
- 从 URL/Git/本地来源安装、刷新、卸载插件，秒级操作有 pending 态。
- 插件启用集按 Agent（模板给默认值）生效，并真实物化到该 Agent 的 `CODEX_HOME`。
- 影响面成为一级视图：回答「关掉/启用这个插件，会动到谁」。
- 严格验证：Go 单元测试 + 桌面冒烟 + 前端类型检查，全部走通后交付。

## 2. 分层职责

| 层           | 负责                                                                                                          | 不负责                             | 现有锚点                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| Master       | marketplace 注册表、catalog 缓存、`disabled_plugins`、模板/Agent 插件集、影响面计算                           | 不 clone 到 Agent 工作区、不启进程 | `syntropy_master/handle/{plugin,settings,agent_template,skill,task}`                      |
| Node         | 物化 per-agent `CODEX_HOME/config.toml`；spawn 后 `plugin/reconcile`；每次 spawn 重设 `skills/extraRoots/set` | 不做策略与冲突裁决                 | `runtime_driver.go:1566`（`materializeCodexPlugins`）、`:1609`（`reconcileAgentPlugins`） |
| codex 运行时 | 安装/卸载/技能命名空间/`.mcp.json` 启动                                                                       | 不做权限与编排                     | `codex_app_rev/probe/README.md`                                                           |
| web_backend  | REST ↔ gRPC 薄转发                                                                                            | 不做业务                           | `web_backend/service/plugin/plugin_service.go`、`web_backend/iris_app.go`                 |
| desktop      | IPC 契约 + 渲染                                                                                               | 不写 `config.toml`                 | `contracts.ts:80`、`settings-registry.ts:99`、`SettingsPage.tsx:2865`                     |

### 关键运行时事实（探活已证实，实现必须遵守）

- 状态落点就是 Node 已经在生成的 per-agent `config.toml`：`[marketplaces.<name>]`、`[plugins."<name>@<marketplace>"]`、`[[skills.config]]`。
- 插件内技能命名为 **`<插件名>:<技能名>`**；`extraRoots` 里的普通技能是**原名**，两类来源天然不冲突。
- **`skills/extraRoots/set` 不持久化**（不生成 `config.toml` 条目），且 app-server 会按 `IdleTimeoutSec` 回收 —— 必须在**每次 spawn 的路径上重设**。
- `skills/config/write` 要求 `path` 与 `name` **恰好二选一**。
- **`[plugins."<id>@<marketplace>"]` 的 key 必须带 `@marketplace`**：只写插件名时声明被静默忽略，`plugin/reconcile` 无任何变化。
- **物化入口是 `plugin/list`（或 `plugin/install`），不是 `plugin/reconcile`**：`plugin/reconcile` 只同步声明状态，不会把插件内容复制进 `<CODEX_HOME>/plugins/cache`；只调它会让插件永远停在「已声明、未安装」，插件技能与插件自带 MCP 都不生效，而状态条件还可能报绿。物化由 app-server 在后台完成（实测 1s 量级），所以要按 `installed` 轮询确认。见 W11。
- **声明式配置只对 `source_type = "local"` 的来源生效**：写 `source_type = "git"` 时 codex 只记录声明、不拉取内容（加载器按 `<CODEX_HOME>/plugins/cache/<marketplace>/<plugin>` 找不到内容而报 `plugin is not installed`）；先 `marketplace/add` 克隆再 reconcile 同样不物化。所以 Git 来源必须先在节点侧落成本地目录。
- **codex 自己克隆的代价**：`marketplace/add` 把仓库完整检出到 `<CODEX_HOME>/.tmp/marketplaces/<name>`，实测 190.7 MB / 10626 文件**每 Agent 一份**；节点侧 sparse 镜像只要 3 MB / 58 文件（`.agents/plugins` + 单个插件目录）。
- **`config.toml` 里 Git 来源的键是 `ref`**（不是 RPC 参数里的 `refName`），另有 `source_type` / `source` / `sparse_paths`；`sparse_paths` 必须覆盖 `.agents/plugins`，否则 codex 报 `marketplace root does not contain a supported manifest`。
- `marketplace/add` 接受 `owner/repo` 简写 / git URL / 本地路径；`refName` 锁分支、`sparsePaths` 支持部分检出（实测真实 HTTPS 拉取 5.2s，`hashgraph-online/awesome-codex-plugins` 返回 223 个插件）。
- **`mcpServerStatus/list` 会把插件携带的 MCP Server 一起报回来，并带 `pluginId` 归属**：插件里的 MCP 不在 Agent 的 `mcp_servers` 配置里，但它是同一个 Agent 的能力面，所以 Node 的 `MCPReady` 期望集合取「自配 ∪ 插件自带」（`mcpReadyConditionFromStatuses`）。

## 3. 契约基线（已落地）

| 产物                                                                             | 内容                                                                                                                                                                      |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `api/proto/model/plugin/plugin.proto`                                            | `PluginMarketplaceSourceType`、`PluginMarketplace`、`PluginCatalogEntry`、`PluginRecord`、`PluginAgentState`、`PluginImpact`、`PluginMarketplaceMap` 与全部 Request/Reply |
| `api/proto/service/plugin/plugin_service.proto`                                  | 8 个 RPC：marketplace 列表/新增/删除/刷新、插件列表/详情/启用开关/影响面                                                                                                  |
| `api/proto/model/settings/system_settings.proto`                                 | `SystemSettings` +25 `plugin_marketplaces`、+26 `disabled_plugins`；`SystemSettingsPatch` 对应两字段                                                                      |
| `api/proto/model/agent_template/agent_template.proto`                            | `AgentTemplatePluginsConfig`；`AgentTemplateSummary.plugins = 12`；`AgentTemplateSettings.plugins_config = 12`                                                            |
| `api/proto/model/plugin/plugin.proto`（W9 追加）                                 | `PluginRecord.mcp_conflicts = 4`（平台 MCP 重名）、`PluginAgentState.cache_bytes = 8`（节点量出的缓存占用）                                                               |
| `api/proto/model/agent/agent.proto`（W9 追加）                                   | `AgentStatus.plugin_cache_bytes = 15`（`map<插件标识, 字节>`，Node 上报、Master 透传）                                                                                    |
| `api/route/plugin/plugin_service_route.go`、`api/client/plugin/plugin_client.go` | Handler 接口 + 客户端薄封装                                                                                                                                               |

REST 路径：`GET|POST /api/plugin-marketplaces`、`DELETE /api/plugin-marketplaces/{name}`、`POST /api/plugin-marketplaces/{name}/refresh`、`GET /api/plugins`、`GET /api/plugins/{plugin_id}`、`PUT /api/plugins/{plugin_id}/enabled`、`GET /api/plugins/{plugin_id}/impact`。

生成产物 `plugin.pb.go` / `plugin_service*.go` 已随 proto 落地，`go build ./...` 通过、`gofmt` 干净。四个生成文件用 `gen_grpc.ps1` 的同一套参数重跑后与工作区逐字节一致（`protoc --proto_path=. --go_out=api --go_opt=module=api`、`--go-grpc_out` / `--grpc-gateway_out` 同参），可以确认没有手改生成物。

## 4. 工作分解

### W1 Master 插件服务（已落地）

- 交付物：`syntropy_master/handle/plugin/plugin_service_handle.go`（实现 `pluginroute.Handler` 8 个方法）、`handle_pool.go` 注册（紧跟 `skillService` / `agentTemplateService`）。
- 已完成：`marketplace_document.go`（解析 `.agents/plugins/marketplace.json`、`.codex-plugin/plugin.json`，`buildCatalog` / `manifestSkills` / `manifestMCPServers`）、`marketplace_source.go`（来源解析、`<dataDir>/plugin-mirrors/<sha8>` 镜像、`materializeGitSource` 支持 `refName` / `sparsePaths`）。
- 实现要点：
  - marketplace 注册表存进 `SystemSettings.plugin_marketplaces`，直接复用 `syntropy_master/handle/settings/settings_store.go` 的 protojson 落盘（`dataDir/system_settings.json`），白拿持久化与导入导出。
  - `AddPluginMarketplace`：解析来源 → 物化镜像 → 读 marketplace 文档 → 构建 catalog → 写回设置。
  - `RefreshPluginMarketplace`：重新拉取 + 重建 catalog，**保留既有 `disabled_plugins` 语义**（刷新不复活被禁用的插件）。
  - `ListPlugins`：汇总所有 marketplace 的 catalog，叠加 `disabled_plugins`；`SetPluginEnabled` 只改该集合。
  - `GetPluginImpact`：遍历模板 `plugins_config` 与 Agent 覆盖，产出「被谁引用 / 提供什么 / 冲突与代价」。
- 验收：8 个 RPC 表驱动单测覆盖正常 + 异常路径；`gofmt -l .` 无输出、`go vet` / `go test` 通过。
- 测试策略：`t.TempDir()` + 本地目录/`file://` 来源，**不打网络**（git 行为用本地 bare 仓库夹具覆盖）。
- 落地结果：8 个 RPC 全部实现；设置侧 `syntropy_master/handle/settings/normalize.go` 补齐来源映射与停用集合的合并/规范化；`agent_template_store.go` 读 `plugins.json` 并在摘要里带插件列表；`agent/bundle.go` 与 `agent/admin_helpers.go` 把 `plugins.json` 纳入模板默认文件与 bundle 白名单；`handle_pool.go` 注册为 `PluginService()`。
- 测试：`syntropy_master/handle/plugin/plugin_service_handle_test.go` 覆盖目录构建、非法来源、同名更新、刷新（保留 added_at 与停用集合）、移除并清理停用记录、关键词/来源筛选与模板引用计数、启用开关持久化、影响面（模板 + Agent 期望态）、构造函数校验；`syntropy_master` 全模块 `go test ./...` 通过。

### W2 模板与 Agent 的插件集（已落地）

- 交付物：`agent_template_store.go` 读 `plugins.json`（与现有 `mcp.json` / `skills.json` 同模式）、`AgentSpec` 透传插件集、`syntropy_master/handle/task/runtime_config.go` 解析与告警。
- 落地结果：`syntropy_master/handle/plugin/agent_plugins.go` 提供 `ResolveAgentPlugins`（校验标识、查目录、扣掉集群停用项、补齐来源声明、收集插件携带的 MCP 名称）与 `MCPNameConflicts`；`handle/task/runtime_config.go` 新增 `resolveAgentTemplate()`，一次读模板同时解析 MCP + 密钥 + 插件（保留旧签名 `resolveCodexMCPServersAndSecrets` 给只关心 MCP 的调用方），跳过项与重名告警走 `logPluginWarnings`；`handle/agent/admin_helpers.go` 让派生 Agent 与任务成员走同一套解析。
- 要点：模板给默认值 → Agent 覆盖；pool 保留名 `a2a/message/blackboard/channels/agent_admin` 由 codex 内置占用，同名 pool 条目主动忽略。插件缺失不阻塞部署：只记 `Skipped` 与告警。
- 测试：`syntropy_master/handle/plugin/agent_plugins_test.go` 覆盖解析成功、来源细节只声明一次、四类跳过原因（格式错 / 不在目录 / 已停用 / 来源无地址）、去重与空声明、`MCPNameConflicts` 三种输入。

### W3 Node 物化与对账（已落地，`skills/extraRoots/set` 见 §11）

- 交付物：`syntropy_node/agent/plugin_marketplace.go`（新增）+ `runtime_driver.go` 改造。
- 落地结果：
  - 来源物化：`resolveCodexPlugins` 把声明分成 local / git 两类；local 校验目录存在，git 走 `git clone --filter=blob:none --sparse`（支持 `--branch <ref>`，ref 是提交号时退回完整克隆 + `checkout`）到**节点级共享镜像** `<codex homes root>/plugin-mirrors/<marketplace>-<hash>`，并做两阶段 sparse checkout：先取 `.agents/plugins` 拿到清单，再按清单补齐启用插件的目录。镜像键 = `source + ref + sparse` 的 sha256 前缀，多 Agent 共用一份。
  - 写配置：`writeCodexHomeConfig` 增加 `plugins` 参数，`finishCodexHomeConfig` + `writeCodexPluginSections` 在既有 `approval_policy` / `sandbox_mode` / `project_root_markers` / `model_providers` 之后追加 `[marketplaces."<name>"]`（**一律声明 `source_type = "local"`**，指向镜像/本地目录）与 `[plugins."<id>@<marketplace>"] enabled = true`；marketplace 名与插件标识都按名排序，输出确定。
  - 时序：`materializeCodexPlugins` 在 `applyCodexSpawnEnv` 之后、`NewAgentCodex` 之前执行 —— codex 只在启动时读 `config.toml`，声明晚写等于本轮不生效。
  - 对账：spawn 收尾按 `mcpReadyCondition` 的同一模式加 `PluginsReady` 条件（`reconcileAgentPlugins`）：调用 `AgentCodex.ReconcilePlugins`（底层 `plugin/reconcile {reason: "syntropy-agent-start"}`，60s 上限），失败或来源缺失都只写成条件，**不阻塞 Agent 启动**；失败项同时以 `node.agent.runtime` / `agent.plugin.unavailable` 记日志。
- 验收：`syntropy_node/agent/plugin_marketplace_test.go` 用**本地 Git 夹具**（`git init` + 分支 + 提交号，不打网络）覆盖：镜像落在镜像根下、清单与插件目录被检出、未选中的 `vendor/` 不检出、不同 ref 不共用镜像、提交号 ref 走完整克隆分支、五类跳过原因、坏来源不影响好来源、sparse 路径归一化拒绝绝对路径与越界、镜像键稳定、`config.toml` 文本同时含插件段与原有字段、无插件时不写 config.toml。`syntropy_node` 全模块 `go test ./...` 通过。

### W4 web_backend REST（已落地）

- 交付物：`web_backend/service/plugin/plugin_service.go` + `web_backend/iris_app.go` 注册。
- 要点：照抄 `web_backend/service/skill/skill_service.go` 的 `writeGRPC` / `readProtoJSON` 模式。
- 落地结果：`web_backend/service/plugin/plugin_service.go` 暴露 `/api/plugin-marketplaces`（GET / POST / DELETE `{name}` / POST `refresh` 全量 / POST `{name}/refresh` 单个）与 `/api/plugins`（GET 带 `marketplace`+`keyword` 查询、GET `{plugin_id}`、PUT `{plugin_id}/enabled`、GET `{plugin_id}/impact`），并在 `web_backend/iris_app.go` 注册；`go build` / `go vet` 通过。

### W5 桌面 IPC 契约（已落地）

- 交付物：`contracts.ts` 8 条 `syntropy:v1:plugin-*` 通道；`preload.ts` 8 个方法；`renderer/env.d.ts` 类型与方法声明；`main/main.ts` 8 个 `ipcMain.handle`（统一走 `requestAppServer` + `isMainRendererSender`）。
- 落地结果：入参 schema 六个（加来源 / 来源名 / 刷新 / 插件 id / 启停 / 列表），结果 schema 六个（来源列表 / 插件列表 / 单插件 / 影响面 / 来源变更 / 来源移除）。schema 与 protojson（`EmitUnpopulated`）逐字段对齐：`int64` 用 `z.coerce.number()`，`addedAtMs` 这类「字符串时间戳」先转 number 再校验，避免前端拿到 `"0"` 或 `0` 两种形态。
- pending 态：刷新/启停/卸载是秒级操作，渲染层用 `busy` 字符串驱动 `PageToolbar` 的 `status` 与按钮 disabled，失败原因直接进状态行，不吞错误。

### W6 独立插件页 UI（已落地）

- 交付物：`settings-registry.ts` 增 `SettingsTarget = "plugins"` 与 section 条目（`group: "capability"`、`icon: Package`、关键词 `plugin/插件/marketplace/来源/技能包`、标题「插件管理」）；`SettingsPage.tsx` 增 `PluginSettings()`（620 行）+ 渲染分支 `{target === "plugins" ? <PluginSettings /> : null}`；`styles/settings-page.css` 增 `.settings-split-workspace.plugins` 与 `.plugin-*` 一族样式（含 1240px / 980px 两档窄屏塌陷）。
- 布局：顶部栏（刷新全部来源 / 搜索 / 来源筛选 / 添加来源）→ 左侧 420px 列表按来源分组（组头给来源类型、地址、插件数与上次读取失败原因；组头带单来源刷新与二次确认移除）→ 右侧详情（概览 / 影响面）。
- 添加来源：`plugin-source-form` 三段式输入（来源地址 / 分支或标签 / 部分检出路径，逗号或换行分隔），注册成功直接刷新列表与影响面。
- 与 D1 一致：独立 section 与独立通道组，Skills 页与 MCP 页都没有被改动；MCP 页仍只管平台内置/共享 pool。
- **偏差（有意为之）**：没有上虚拟滚动。223 条目录在滚动容器里渲染，靠「按来源分组 + 关键词搜索 + 来源筛选」把可见集合压到几十条，影响面预取也限制在 40 条；`@tanstack/react-virtual` 已在依赖里，目录涨到千级再补。风险表里这条按「已知取舍」记录。

### W7 影响面一级视图（已落地）

- 列表卡片：每张卡片底部固定一行 `plugin-impact-line` —— 「影响 N 个模板 · M 个 Agent」，已经回报但没生效的 Agent 会追加「· K 未生效」，无引用时显示「暂无模板引用」，停用的插件再追加「· 已停用」。这一行由 `pluginImpactLine()` 生成（导出以便单测）。Agent 数来自按需预取的影响面（只有 `templateCount > 0` 的插件才拉，串行、上限 40，失败只影响这一张卡片）。
- 详情「影响面」Tab：摘要行给出模板数与 Agent 数，下面先列引用该插件的模板，再给 Agent 表格（Agent / 节点 / 模板 / 期望 / 已生效 / 备注）。
- **生效回读**：`PluginAgentState.installed` / `detail` 不再恒空 —— Master 读 Node 在 spawn 收尾通过 `AgentObservedState` 报回的 `PluginsReady` 条件（`pluginAgentState()`）：条件就绪即 `已生效`，条件里提到这个插件标识的失败片段优先作为备注，其它情况退回整条条件或「节点尚未回报插件对账结果」。列头因此写「已生效 / 未生效 + 备注原因」，而不是把「没数据」冒充成「没生效」。
- 口径边界：Master 不做插件物化，`installed` 只代表「节点对账回报的就绪状态」，不代表技能真的被模型用过；`cacheBytes` 同理只是节点量出来的磁盘占用。代价与冲突两块见 W9。

### W9 影响面的「代价与冲突」（已落地）

- **代价（`plugins/cache` 占用）**：codex 按 Agent 各存一份 `<CODEX_HOME>/plugins/cache/<marketplace>/<plugin>/<version>`，只有节点量的出来。节点在 spawn 收尾的 `plugin/reconcile` 之后量一次（`pluginCacheUsage`），写进 `AgentStatus.plugin_cache_bytes`（`map<插件标识, 字节>`）随状态上报；状态重建路径（同 spec 复用、就地改模型参数、挂起重启）都把这份测量沿用下去，不重复遍历磁盘。Master 在 `GetPluginImpact` 里透传成 `PluginAgentState.cache_bytes`：0 表示节点还没回报（或该 Agent 没物化这个插件），界面显示 `-`，不冒充「零代价」。
- **冲突（与平台 MCP 重名）**：插件自带的 MCP **不进**共享 pool，但两边同名时 codex 无法用名字区分来源。Master 在 `ListPlugins` / `GetPlugin` / `SetPluginEnabled` 三条读路径上算 `PluginRecord.mcp_conflicts` = 插件声明的 MCP 名 ∩ 平台 MCP 名集合（共享 pool ∪ Node 内置保留名 `a2a / blackboard / channels / agent_admin / message`，大小写无关、按小写去重）。保留名单移到插件包（`CodexBuiltinMCPServerNames` / `IsCodexBuiltinMCPServer`），运行期告警（`MCPNameConflicts` → `logPluginWarnings`）与界面用同一份口径。
- 界面：卡片影响行追加「· N 个 MCP 重名」（重名是插件自身属性，没有模板引用时也显示）；详情概览新增「平台 MCP 重名」行，冲突项用 `.plugin-chip-warning` 标红；影响面 Tab 新增「缓存」列与「节点上的插件缓存合计 X」。
- 验证：Master `TestPluginMCPConflicts` / `TestPlatformMCPNamesSkipsReservedPoolEntries` / `TestPluginRecordReportsMCPConflicts`（含池打补丁后三条读路径都带冲突）；Node `plugin_cache_test.go`（测量、缺失目录、spawn 后测量、状态重建沿用）；桌面 `pluginImpactLine` 冲突后缀、`pluginCacheBytesText` / `pluginImpactCacheTotal`，以及 `PluginOverviewPanel` / `PluginImpactPanel` 的 SSR 渲染断言（重名标红 chip、缓存列、合计、未知显示 `-`）；REST 冒烟新增 8 项。

### W10 Windows 长路径与隐藏窗口（已落地）

用户在桌面端注册 Git 来源时踩到两个 Windows 特有问题，本轮一次性修掉（这两条是实战暴露的，不是计划内的工作包）：

- **注册失败 503 `Filename too long`**：Master 侧的 `runGit` 只设了 `GIT_TERMINAL_PROMPT=0` / `GCM_INTERACTIVE=never`，没有开 `core.longpaths`（Node 侧的 `codexGitEnvironment` 一开始就有）。插件仓库的目录层级经常超过 Windows 的 `MAX_PATH`，`git clone` 与 `git reset --hard FETCH_HEAD` 两条路径都会在写工作树时崩掉（用户报的正是后者）。现在 Master 与 Node 统一走 `gitCommand` / `codexGitCommand` → `gitEnvironment` / `codexGitEnvironment`：先剔除继承环境里已有的 `GIT_CONFIG_COUNT`、`GIT_CONFIG_KEY_*`、`GIT_CONFIG_VALUE_*`、`GIT_ASKPASS`、`GIT_TERMINAL_PROMPT`、`GCM_INTERACTIVE`（Windows 变量名大小写不敏感，比较前统一大写），再注入 `core.longpaths=true`。`core.longpaths` 让 git 自己用 `\\?\` 前缀读写，**不依赖系统级 `LongPathsEnabled`**（开发机就是 0，所以这条必须落在 git 侧）。
- **调用 git 弹出终端窗口**：Master 与 Node 都由桌面端以无窗口方式拉起，直接 `exec.Command("git")` 在 Windows 上会新建控制台窗口。两侧各加一对 `git_command_windows.go` / `git_command_unix.go`（`SysProcAttr{HideWindow: true}`，与 `engine/codex/transport_hidewindow_*.go`、`common/mdeploy/start_*.go` 同一套写法），插件线的每条 git 调用都从这两个构造函数走。
- **兜底提示**：`core.longpaths` 已默认开启仍报 `Filename too long` 时（git < 2.31，或检出路径本身过深），Master 在 git 原始 stderr 之后再补一条 `hint:`，把现象翻译成下一步该查什么。
- Node 侧顺带补上 `GCM_INTERACTIVE=never`：后台进程不该弹出凭据窗口，与 Master 保持同一口径。
- 验证：Master `marketplace_source_test.go`（深路径仓库的 clone 与 fetch+reset 两条分支都真把深路径文件落到镜像、`gitEnvironment` 的注入与剔除、`gitFailureHint`）与 `git_command_windows_test.go`（`HideWindow`）；Node `plugin_marketplace_test.go` 新增深路径物化用例与 `codexGitEnvironment` 用例、`git_command_windows_test.go`。两条深路径用例都反向验证过：把 `core.longpaths` 关掉后分别复现 `clone ... Filename too long` 与 `sparse-checkout set ... Filename too long`，再放开即通过。REST 冒烟新增长路径来源夹具（超长路径只进对象库，夹具本身不需要长路径支持）与 5 项检查，并**删掉了冒烟里原先 `$env:GIT_CONFIG_*` 的临时兜底**：那三行会随环境继承给 Master，恰好把这个缺陷掩盖掉（关掉 `core.longpaths` 重跑冒烟即可复现失败）。

### W8 端到端验证与收尾（已落地）

- Go：三个模块 `vet` 无输出、`test -count=1` 全绿（`syntropy_master` 23 包含 `handle/plugin`、`syntropy_node` 9 包含 `agent`、`web_backend` `build` + `vet`）。
- 桌面：`pnpm typecheck`、`pnpm test:unit`（9）、`pnpm test:contract`（282）、`pnpm test:component`（541）、`pnpm test:security`（34）、`pnpm check:exports` / `test:boundaries` / `test:quality-gates` 全通过（`pnpm lint` 仅剩 4 条既有 warning，见 §10 末尾）。
- 冒烟：`tools/smoke-desktop.ps1` 通过（app-server 侧车 + 本地 Master 部署 + 健康/鉴权）；`tools/smoke-plugin-management.ps1` 59/59 通过（含 W9 新增的 8 项平台 MCP 重名检查）。
- 探活：四个 codex 探针复跑结果见 §10 与 `probe/README.md`。
- 文档：本文件按「已落地」重写，`codex_app_rev/README.md` 的落地链接同步更新。

### W11 注册失败修复与导入插件可用性（已落地）

用户在桌面端注册 `hashgraph-online/awesome-codex-plugins` 报 503 后追加的一轮：定位崩溃根因、把注册过程做成可见的日志，并把「导入的插件到底能不能用」变成可复跑的验证。四条缺陷都是真库压出来的，不是计划内的偏差。

- **崩溃根因：Master `stack overflow`**。`marketplace_document.go` 的 `manifestSkills` 在插件清单**没有可用 skills 声明**且插件目录下**没有 `skills/` 目录**时，以相同参数调用自己，无限递归把 Master 进程打崩；Master 一死，桌面端 app-server 的 gRPC 连接被重置，前端就看到 `注册来源失败：后端接口返回 HTTP 503`。该库 226 个插件里有 21 个命中（`a-team` 的 `"skills":"../skills/"`、`boss` 的 `./skill/`、`morning-ai` 的 `./`、`armorcodex`、`codex-mem` 等）。修法：`manifestSkills` 只在**未声明**时才展开一次约定目录 `skills`（非递归），声明了就走新增的 `skillNamesFromPaths`；同时修掉第二个既有缺陷 —— 声明路径本身就是技能目录时（`SKILL.md` 是文件，旧的 `!isDirectory(base)` 分支永不命中），现在返回目录名。
- **镜像目录双重嵌套**。`mirrorRoot` 又拼了一层 `plugin-mirrors`，实际落在 `<data>/plugin-mirrors/plugin-mirrors/<hash>`；现在只拼镜像键。
- **sparse 路径必须覆盖清单目录**。用户填的 sparse 路径里没有 `.agents` 时，镜像里没有 marketplace 清单，注册会在最后一步报「读不到清单」，而这跟用户填的插件路径无关。现在 `sparseMirrorPaths` 强制并入 `.agents` 并排序；`mirrorKey` 把 sparse 维度也纳入哈希（同一来源不同 sparse 声明不再互相挤掉镜像）；清单缺失时补一条 `sparseCheckoutMiss` 说明，直接告诉用户该把哪一层加进 sparse。
- **注册过程在前端可见**。`SettingsPage.tsx` 的 `PluginSettings()` 新增操作日志面板（`logs` / `pending{label,startedAt}` / 秒级刷新的 `elapsedMs`，导出 `PLUGIN_LOG_LIMIT=40`、`PluginLogEntry`、`pluginLogStamp`、`pluginDurationText`、`pluginPendingLabel`、`PluginLogPanel`），注册 / 刷新 / 移除 / 加载全部落日志（含耗时、ref、sparse），失败带后端原文；主进程 `main.ts` 的 `pluginMarketplaceAdd` / `pluginMarketplaceRefresh` 同步写 `desktop.log`。Master 侧加 `plugin.marketplace.add.start` / `.failed`（带 stage=materialize|catalog、error、duration_ms）/ `.add` / `.refresh.start` / `.refresh`，把「卡在哪一段」写进日志。sparse 输入框占位符也从 `plugins/codex` 改成 `plugins/<插件目录>`，避免误导。
- **导入的插件此前根本不会生效（本轮最重要的修复）**。`plugin/reconcile` **只做声明对账，不复制插件内容**：内容物化发生在 `plugin/list`（或 `plugin/install`）。节点侧原先只调 `plugin/reconcile`，于是插件永远停在「已声明、未安装」——`skills/list` 里没有 `<插件名>:<技能名>`，插件自带 MCP 也不出现，而 `PluginsReady` 还报 Ready（假绿）。现在 `reconcileAgentPlugins` 改成三段：`plugin/reconcile`（同步声明）→ `plugin/list`（物化）→ `waitForCodexPlugins` 按 `installed` 轮询确认（500ms 间隔，共用 60s 上限），只有真的装上才报 Ready，否则条件带原因与未装上的插件标识。新增 `CodexSdkClient.ListPlugins` / `AgentCodex.ListPlugins`（`plugin/list`，返回 `PluginState{ID, Installed, Enabled}`，字段随版本演进时未知项一律忽略）。
- **验证**：
  - 崩溃回归：`syntropy_master/handle/plugin/marketplace_document_test.go` 9 个用例（崩溃回归、回退、悬空声明、声明三种写法、目录构建、sparse 强制并入 `.agents`、镜像键、镜像路径）；用真库跑目录构建：226 条、195 有技能 / 31 无技能、66 有 MCP，不崩。
  - 可用性：`syntropy_node/agent/plugin_materialization_live_test.go`（`SYNTROPY_LIVE_CODEX_ROOT` + `SYNTROPY_LIVE_CODEX_EXE` 门控）走完整节点链路 —— 物化镜像 → 声明 local 来源 → spawn 真实 codex app-server → `reconcileAgentPlugins` → 断言条件 Ready、`plugins/cache/.../1.8.2/skills` 落了 3 个技能（688,906 B）、插件自带 MCP `agent-deck` 带 `pluginId` 归属。实测 `reconcileAgentPlugins` 561ms 内完成确认。
  - 探针：新增 `codex_app_rev/probe/plugin-mirror-usability-probe.mjs`（阶段 A 证明 `plugin/reconcile` 单独不物化、阶段 B 证明 `plugin/list` 后 1.1s 内可用），复跑命令见 `probe/README.md`。
  - 冒烟：`tools/smoke-plugin-management.ps1` 66/66；加 `-PublicGitSource "hashgraph-online/awesome-codex-plugins"` 后 81/81（真库 HTTPS 注册 11.8s、226 插件、技能/MCP、sparse 用例、启停、刷新、移除）。
- **结论更正**：`probe/README.md` 结论二原先写「声明 `source_type = "local"` 后 `plugin/reconcile` 立刻物化」，这是探针自身顺序造成的误判 —— 那个用例在 `plugin/reconcile` 之前先调了 `plugin/list`，真正干活的是一前那次。README 已按实测改写。

### W12 Agent Card 的插件出口与保存覆盖（已落地）

- **缺陷一（数据丢失级）**：`AgentTemplateSettingsSchema` 没有 `pluginsConfig`，Team 的编辑态 `TeamAgentCard` 也没有插件字段 —— `cardToTemplateSettings` 不产出 `pluginsConfig`，而保存 Card 是 PUT 整个模板设置，于是「在 UI 里编辑一次 Card」就会把模板已有的 `plugins.json` 声明清空（schema 的默认值 `{plugins: []}` 参与序列化）。模板摘要同样没带 `plugins`，列表侧也看不见插件。
- **缺陷二（无路可走）**：插件页只有目录与集群级启停，Team 的 Agent Card 编辑器只有「MCP 配置」「Skills 配置」两个 fieldset，用户没有任何地方能把插件挂到某个 Agent 上 —— 插件页每张卡片都显示「暂无模板引用」，看起来像插件没有出口。
- 修法：
  - `desktop_app/packages/desktop-bridge/src/contracts.ts`：增 `AgentTemplatePluginsConfigSchema`（`plugins: string[]`，单项 ≤512、上限 5000，passthrough）与 `AgentTemplateSettingsSchema.pluginsConfig`、`AgentTemplateSummarySchema.plugins`，两者都默认空数组，兼容没有 `plugins.json` 的目录模板。
  - `desktop_app/apps/desktop/src/renderer/SettingsPage.tsx`：`TeamAgentCard` 增 `plugins`；`templateSummaryToCard` / `templateSettingsToCard` / `cardToTemplateSettings` 三处同步读写，**`cardToTemplateSettings` 产出 `pluginsConfig` 是这次的关键修复**；两个转换函数与 `TeamCardEditor` 改为导出以便回归测试。
  - `TeamCardEditor` 增第三个 fieldset「插件配置」：选项 = 插件目录 ∪ 草稿里已声明的标识；目录项显示 `displayName`，集群停用项标「（已集群级停用）」且未勾选时 disabled（**只拦新增引用，已勾选的必须能取消**）；目录里已经不存在的标识也列出来并注明「部署时会跳过」，否则存量引用既看不见也取消不掉。底部提示说明勾选后 Agent 会加载 `<插件名>:<技能名>` 与插件自带 MCP。
  - `TeamSettings` 的 `loadTeamCatalogs` 并发拉 `listPlugins()`（失败只少一列可选插件，不影响编辑与保存）；影响面空态文案改为指路。
- **生效路径（这就是「怎么让 Agent 用插件」的答案）**：
  1. Team → 编辑 Agent Card → 勾选「插件配置」→ 保存 Card。UI 保存落到 `agent_templates/<name>.json`（目录模板原本的 `plugins.json` 仍会被读取）。
  2. 部署时 `ResolveAgentPlugins`（`syntropy_master/handle/plugin/agent_plugins.go:48`）把标识解析成 `AgentSpec.runtime_config.plugins{marketplaces,enabled}`；任务成员的 spec 由 `handle/task/reconcile.go` 的 `reconcileAgentSpec` 与模板定期比对，模板改了会 `UpdateAgent` 出新 generation。
  3. Node 的 `materializeCodexPlugins` 把插件段写进该 Agent 的 `CODEX_HOME/config.toml`，再由 `reconcileAgentPlugins`（`plugin/reconcile` → `plugin/list` → 按 `installed` 轮询）确认物化；`PluginsReady` 条件与缓存占用随状态回报，界面「影响面」据此显示「已生效」。
  4. **注意**：`Restart` 只重启 app-server，不重写 `config.toml`，所以「重启 Agent」不会带上新插件；要生效必须让 spec 换代（任务对账 / 重新部署）。

### W13 Agent 插件配置到运行时的实时一致性（已落地）

本轮按 Codex 的完整闭环重新核对了 Syntropy：**目录/市场**（Master）→ **Agent 选择插件**
（Template/AgentSpec）→ **内容物化**（Node/`CODEX_HOME`）→ **认证**（per-Agent MCP OAuth）→
**会话工具面**（app-server `mcpServerStatus/list`）。缺口不在插件安装本身，而在“谁来读配置、
谁能在配置变化后立即跟上”：

| 阶段 | Codex desktop（A 级逆向） | Syntropy 本轮前的实现（B 级源码） | 本轮处理 |
| --- | --- | --- | --- |
| 目录与安装 | 托管插件 `/ps/*`；本地市场走 app-server `marketplace/*`、`plugin/*` | Master 管市场/目录，Node 管 Agent 内物化 | 保持 |
| Agent 选择 | 按 workspace/thread/plugin 配置控制当前会话可见能力 | Agent Card 已有 `plugins` 勾选，但保存模板只写模板，不立即同步现有 Agent | 模板保存后由 Agent 服务重解析插件集并 `UpdateAgent`；AgentSpec 换代触发 Node 重建 |
| 内容物化 | `plugin/list` 触发 cache 复制，`plugin/reconcile` 只同步声明 | 已按该口径实现并在 spawn 后轮询 `installed` | 保持 |
| 认证 | 普通 MCP 走 `mcpServer/oauth/login`；凭据绑定 `CODEX_HOME`。托管 App 依赖 ChatGPT 后端连接器 | 普通 MCP OAuth 已按 Agent 隔离；托管 App 连接器仍未接 | 增加授权 URL 占位符预检，阻止 `invalid_client`；Gmail 等托管 App 明确标为后续能力 |
| 会话可见 | 当前会话只看到已配置且成功加载的插件/MCP | Composer `@` 菜单此前读取“集群全局启用插件”，可能展示该 Agent 未装配的项 | `ListPluginsRequest.agent_id` 按 AgentSpec 插件集过滤；Composer 使用当前目标 Agent ID 查询 |
| 配置生效 | 配置写入后 reload/重建运行时 | 任务对账能拉回模板变化，但非任务 Agent 与紧邻保存后的状态存在窗口；Restart 不重写 config | 模板更新回调直接同步所有同名模板 Agent，仅插件配置变化时换代 |
| 跨主机认证 | Codex 的登录与 Agent 共用同一份 CLI/兼容策略 | 远端 Node 找不到 bundled Codex 时回退 PATH；Agent 用 Warn 可运行，账号页却用默认严格策略直接报 `0.154/0.163` 不匹配 | ChatGPT 登录客户端改用与 Agent 相同的兼容策略；版本不匹配时账号页提供“重新部署节点”直接复用已保存 SSH 连接 |
| 跨主机 Git 代理 | 市场来源在目标运行时主机上拉取 | 桌面导入的 `127.0.0.1:7897` 被下发到远端 Linux，回环地址指向错误主机，插件物化必然失败 | Node 对 clone/fetch/ls-remote 的 loopback 代理失败自动无代理重试一次；非回环代理与本地命令不重试 |

验证：

- Master：`TestReconcileTemplatePluginsUpdatesExistingAgents` 证明已有 Agent 的 runtime config
  被写入插件集并进入 PENDING 重建；`TestUpdateAgentTemplateReconcilesExistingAgents` 证明
  模板保存会触发同步；`TestListPluginsFiltersByAgentRuntimeConfig` 证明目录过滤严格来自 Agent 配置。
- Node：`go test -short ./...` 全绿，原有 MCP OAuth live fixture 继续覆盖授权后状态变化。
- Node：新增 loopback Git 代理跨主机回归测试；ChatGPT 登录客户端的兼容策略与 Agent 运行时一致。
- Desktop：`pnpm typecheck`、Composer/设置组件测试通过；`PluginListInputSchema` 增加 `agentId`。
- Desktop：账号页识别 Codex major/minor 不匹配并展示“重新部署节点”，走 App Server 已保存连接配置。
- 真机：当前 Syntropy Agent 的 runtime config 已出现 `github@openai-curated`，MCP 状态回读为
  `github / notLoggedIn / authenticationRequired`；说明 MCP 已从插件物化进入当前 Agent，
  完成账号授权后即可从 `notLoggedIn` 转为可调用工具。

### W14 Master 成为唯一插件供应链（已落地）

用户在远端 Node 的实测暴露了旧架构根问题：桌面系统代理 `127.0.0.1:7897` 被下发到远端
Linux，Node 用它访问 GitHub 必然失败。因此供应链统一收口到 Master：

1. Master 在注册/刷新来源时读取插件目录并构建确定性 ZIP artifact，记录
   `artifact_sha256`、`artifact_size` 和 `source_revision`。
2. artifact 存于 `<master-data>/plugin-store/artifacts/sha256/<digest>.zip`；内容相同只存一份。
3. AgentSpec schema 2 携带每插件 `digest/size/version/marketplace`，不再依赖 Node 读取 Git URL。
4. Node 通过独立 gRPC 流 `PluginDistributionService/DownloadPluginArtifact` 下载；
   请求绑定在线 `control_session_id`，Master 再校验 Agent 属于该 Node 且当前 spec 引用该 digest。
5. Node 下载后校验摘要/大小，staging 解包到 `plugin-artifacts/sha256/<digest>`，
   再按 Agent 插件集生成 `plugin-views` marketplace，最终写入 `CODEX_HOME/config.toml`。
6. Master 启动时从现有本地来源/旧 Git mirror 后台迁移旧 catalog，不需要 Node 参与。
7. catalog 变化后立即触发模板/Agent 对账；digest 改变才换代重启。
8. `PrunePluginArtifacts` 只删除 catalog 与所有 AgentSpec 都不引用的 artifact。

落地差异：首版按**每插件 artifact** 而不是整组 Bundle；Node 只生成轻量 marketplace manifest。
这比整组 Bundle 去重更好，也不要求 Node 重新引入市场解析。旧 Git/代理路径暂时保留，
仅用于滚动升级；Master 新生成的 schema 2 配置不会进入该路径。

## 5. 里程碑与依赖顺序

| 阶段 | 内容                                                        | 依赖 | 状态                                                                 |
| ---- | ----------------------------------------------------------- | ---- | -------------------------------------------------------------------- |
| P0   | 逆向分析 + 探活 + proto/route/client 契约                   | —    | 已完成                                                               |
| P1   | W1 Master 插件服务 + 单测                                   | P0   | 已完成                                                               |
| P2   | W2 模板/Agent 插件集 + 冲突校验                             | P1   | 已完成                                                               |
| P3   | W3 Node 物化与对账（含 Git 来源的节点级镜像）               | P2   | 已完成                                                               |
| P4   | W4 REST 网关 + W5 IPC 契约                                  | P1   | 已完成（8 条 REST 路由 + 8 条 IPC 通道，冒烟覆盖）                   |
| P5   | W6 独立插件页                                               | P4   | 已完成（独立 section + `PluginSettings()` + 插件页样式）             |
| P6   | W7 影响面一级视图 + W8 验证收尾                             | P5   | 已完成（卡片影响行 + 影响面 Tab + 59/59 REST 冒烟）                  |
| P7   | W9 影响面的代价与冲突                                       | P6   | 已完成（`plugin_cache_bytes` 上报 + `mcp_conflicts` + 界面三处展示） |
| P8   | W10 Windows 长路径（`core.longpaths`）与隐藏 git 控制台窗口 | P7   | 已完成（Master/Node 两侧统一注入，冒烟含长路径来源 66/66）           |

## 6. 验证门（交付前必须全绿）

```powershell
gofmt -l .
go vet ./...
go test ./...
Set-Location desktop_app
./tools/smoke-desktop.ps1
./tools/smoke-plugin-management.ps1
```

上面的每一条本轮都实际跑过，命令与结果逐条记在 §10。

## 7. 风险与对策

| 风险                                                                                  | 对策                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `plugins/cache` 是 per-agent 复制，磁盘成本随 Agent 数线性涨                          | 来源侧用节点级共享镜像规避（codex 自己克隆是 190 MB/Agent 量级，sparse 镜像 3 MB）；`plugins/cache` 仍是 per-agent，已在影响面逐 Agent 展示体积（W9）。测量只在 spawn 收尾做一次并随状态沿用，不进 reconcile 热路径 |
| 223 个插件目录渲染卡顿                                                                | W6 上虚拟滚动/分页                                                                                                                                                                                                  |
| git 拉取依赖联网，内网需镜像                                                          | Master 侧读目录、Node 侧物化都要联网；来源解析支持本地目录（Master 读目录 + Node 直接声明 local），Git 场景可用内网镜像地址                                                                                         |
| Git 来源首次 spawn 要等镜像拉取（本地夹具秒级，真实仓库 20s 量级）                    | 镜像按 `source+ref+sparse` 复用，只在首次拉取；失败只写 `PluginsReady` 条件不阻塞 Agent；后续可加后台预热                                                                                                           |
| 秒级安装操作与现有「请求→setStatus 文案」模式不匹配                                   | W5 handler 带 pending 态与错误回传                                                                                                                                                                                  |
| `skills/extraRoots/set` 不持久化、app-server 会被回收                                 | W3 在每次 spawn 路径重设，不依赖一次性设置                                                                                                                                                                          |
| 插件仓库里的路径超过 Windows `MAX_PATH`（实战踩到：注册来源 503 `Filename too long`） | Master/Node 的 git 调用统一注入 `core.longpaths=true`，不依赖系统 `LongPathsEnabled`；仍失败时错误信息补 `hint:`（W10，冒烟含长路径来源夹具）                                                                       |
| 后台进程调 git 弹出终端窗口 / 凭据窗口                                                | 两侧 git 调用统一 `SysProcAttr{HideWindow: true}`；`GIT_TERMINAL_PROMPT=0` + `GCM_INTERACTIVE=never` 关掉交互提示（W10）                                                                                            |

## 8. 待确认（不阻塞 P1）

1. ~~**marketplace 物化位置**~~：**已定**。Master 只读目录，Node 把 Git 来源 sparse 检出成节点级共享镜像并声明 `local` —— 探活证明声明 `git` 来源不会被 reconcile 物化，而 codex 自己克隆是 190 MB/Agent。
2. **插件页入口**：推荐设置中心内的独立 section（与 D1 一致）；若希望更显眼可再加侧栏入口。
3. **影响面口径**：先做「配置引用」级；「节点实际生效回读」的抓手已经有了 —— Node 侧的 `PluginsReady` 条件（含跳过项与 `plugin/reconcile` 失败列表）可以直接回传到影响面，作为 P6 之后的增强。

## 9. 进度快照

| 产物                                                                  | 状态                                                                                                                                                              |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `codex_app_rev/plugin-management.md`（46KB，15 节）                   | 已完成                                                                                                                                                            |
| `codex_app_rev/code/plugins-26908/`（32 chunk + 索引 + 417 条文案）   | 已完成                                                                                                                                                            |
| `codex_app_rev/probe/`（5 个探针 + 结论）                             | 已完成：RPC 18/18、local 声明式 11/12（1 项为预期报错）、Git 键名 8/8、Git 声明式对照 15/15、镜像可用性 2 阶段                                                    |
| proto / route / client（5 个新文件 + 2 处改）                         | 已完成，`go build` 通过                                                                                                                                           |
| `syntropy_master/handle/plugin/marketplace_document.go`               | 已落地，单测覆盖                                                                                                                                                  |
| `syntropy_master/handle/plugin/marketplace_source.go`                 | 已落地，**Git 拉取已用真实 `git://` 仓库端到端验证**（`smoke-plugin-management.ps1`：clone / 分类 / ref / 未知 ref 503 / 镜像复用刷新）                           |
| `syntropy_master/handle/plugin/plugin_service_handle.go`              | 已落地：8 个 RPC + 单测全绿                                                                                                                                       |
| `syntropy_master/handle/settings/normalize.go` 等四处接线             | 已落地                                                                                                                                                            |
| `web_backend/service/plugin/plugin_service.go` + `iris_app.go`        | 已落地                                                                                                                                                            |
| `syntropy_master/handle/plugin/agent_plugins.go` + 单测               | 已落地：模板插件集解析 + MCP 重名检测                                                                                                                             |
| `handle/task/runtime_config.go`、`handle/agent/admin_helpers.go` 接线 | 已落地                                                                                                                                                            |
| `syntropy_node/agent/plugin_marketplace.go` + 单测                    | 已落地：节点级共享镜像（Git sparse）/ local 目录校验 / 跳过项                                                                                                     |
| `syntropy_node/agent/runtime_driver.go` 插件段 + 对账条件             | 已落地：`marketplaces`/`plugins` TOML 段、`PluginsReady` 条件；`MCPReady` 期望集合并入插件自带 MCP（`mcpReadyConditionFromStatuses`）                             |
| `syntropy_node/engine/codex/codex_sdk_client.go`                      | 已落地：`MCPServerStatus.PluginID`（`mcpServerStatus/list` 的插件归属）与 `PluginReconcileSummary`                                                                |
| `codex_app_rev/probe/plugin-git-*.mjs`                                | 已落地：Git 配置键名 + 声明式差异探活                                                                                                                             |
| 桌面 IPC（W5）                                                        | 已落地：8 条 `syntropy:v1:plugin-*` 通道 + 8 个 handler，`pnpm typecheck` 与 `test:security` 通过                                                                 |
| 独立插件页（W6）                                                      | 已落地：`settings-registry.ts` 的 `plugins` section + `PluginSettings()`（620 行）+ `.plugin-*` 样式                                                              |
| 影响面一级视图（W7）                                                  | 已落地：卡片影响行 + 详情「影响面」Tab（模板 + Agent 表格）                                                                                                       |
| 影响面代价（W9）                                                      | 已落地：`AgentStatus.plugin_cache_bytes`（Node 测量）+ `PluginAgentState.cache_bytes`（Master 透传）+ 影响面「缓存」列与合计                                      |
| 影响面冲突（W9）                                                      | 已落地：`PluginRecord.mcp_conflicts`（平台 MCP 重名）+ 卡片影响行 / 详情行 / 标红 chip                                                                            |
| 生效回读（W7 补）                                                     | 已落地：Master 读 Node 报回的 `PluginsReady` 条件填 `installed`/`detail`；`handle/plugin` 条件矩阵单测 + `syntropy_node/agent/plugin_condition_test.go`           |
| `desktop_app/tools/smoke-plugin-management.ps1`                       | 新增：一次性起 app-server + 本地 Master，66 项 REST 端到端检查（含 Git 来源与超过 `MAX_PATH` 的长路径来源）                                                       |
| Windows 长路径与隐藏窗口（W10）                                       | 已落地：Master/Node 两侧 `core.longpaths` + `HideWindow`，冒烟新增长路径来源夹具并删掉 `$env:GIT_CONFIG_*` 临时兜底                                               |
| 注册失败修复（W11）                                                   | 已落地：`manifestSkills` 无限递归（真库 21/226 命中）→ Master 崩溃 → 503；另修镜像双重嵌套与 sparse 未含清单目录                                                  |
| 注册过程前端日志（W11）                                               | 已落地：`PluginSettings()` 操作日志面板（计时 / 失败原文）+ 主进程 `desktop.log` + Master 分段耗时日志                                                            |
| 导入插件可用性（W11）                                                 | 已落地：物化入口从 `plugin/reconcile` 改为 `plugin/list` + 按 `installed` 轮询确认（`waitForCodexPlugins`）；此前只会「已声明、未安装」且报假 Ready               |
| `syntropy_node/agent/plugin_materialization_live_test.go`             | 新增：真库 + 真 codex app-server 的端到端可用性用例（技能 + 插件 MCP 归属）                                                                                       |
| `codex_app_rev/probe/plugin-mirror-usability-probe.mjs`               | 新增：分离「reconcile 是否物化」与「plugin/list 后是否可用」两个阶段                                                                                              |
| Agent Card 插件出口（W12）                                            | 已落地：`AgentTemplatePluginsConfigSchema` + 摘要 `plugins` + `cardToTemplateSettings` 产出 `pluginsConfig`（修掉保存 Card 清空 `plugins.json` 的覆盖缺陷）       |
| Agent Card「插件配置」字段（W12）                                     | 已落地：`TeamCardEditor` 第三个 fieldset（目录 ∪ 草稿标识、集群停用项只拦新增、目录外标识可取消）+ `.settings-team-option-hint` 样式                              |
| 回归测试（W12）                                                       | `tests/contract/agent-template-plugins.contract.test.ts` 3 例；`tests/component/settings-page.component.test.tsx` +2 例（往返不丢 `plugins`、编辑器勾选与停用态） |

未做任何 git commit。

## 10. 本轮验证记录

```powershell
# Go：三个模块
gofmt -l .                                              # 插件相关文件全部干净
go -C syntropy_master vet ./... ; go -C syntropy_master test ./... -count=1   # 全绿（含 handle/plugin）
go -C syntropy_node   vet ./... ; go -C syntropy_node   test ./... -count=1   # 全绿（含 agent 插件镜像）
go -C web_backend     build ./... ; go -C web_backend   vet ./...             # 无输出

# 插件线的针对性用例：影响面条件矩阵 + 平台 MCP 重名（Master）+ 缓存测量 / PluginsReady / MCPReady（Node）
go -C syntropy_master test ./handle/plugin/... -count=1
go -C syntropy_node   test ./agent/...        -count=1 -run 'Plugin|MCP|Directory'

# 桌面：类型 / 单测 / 契约 / 组件 / 安全 / 产物边界
Set-Location desktop_app
pnpm typecheck        # tsc -b 通过
pnpm test:unit        # 9 passed
pnpm test:contract    # 282 passed
pnpm test:component   # 541 passed（含 settings-registry 导航顺序含 plugins、影响行冲突后缀、缓存格式化，以及概览/影响面两块的 SSR 渲染断言）
pnpm test:security    # 34 passed
pnpm check:exports ; pnpm test:boundaries ; pnpm test:quality-gates

# 端到端冒烟（需要先用 tools/build.mjs 或等价的 go build 产出 resources/bin/win32-x64）
./tools/smoke-desktop.ps1              # Handshake ready / Master online / 鉴权 401
./tools/smoke-plugin-management.ps1    # 66/66 checks passed（W9 的 8 项 + W10 的长路径来源 5 项）
# 注意：冒烟部署的 Master 产物是 resources/node/artifacts/mbot-windows-amd64.exe，改 Master 侧代码必须重建它，而不是只重建 bin/win32-x64/syntropy-master.exe

# 探活复跑（需要 codex.exe；plugin-git-* 需要网络）
node ../codex_app_rev/probe/plugin-rpc-probe.mjs              <codex.exe>   # 18/18
node ../codex_app_rev/probe/plugin-config-probe.mjs           <codex.exe>   # 11/12（12 项里 1 项是预期报错）
node ../codex_app_rev/probe/plugin-git-config-probe.mjs       <codex.exe>   # 8/8
node ../codex_app_rev/probe/plugin-git-declarative-probe.mjs  <codex.exe>   # 15/15
node ../codex_app_rev/probe/plugin-mirror-usability-probe.mjs <codex.exe> <CODEX_HOME>  # 阶段A 不物化 / 阶段B 可用
```

W11 追加的复跑（真库端到端，需要网络）：

```powershell
# 冒烟：多带一个真库来源，66/66 -> 81/81
./tools/smoke-plugin-management.ps1 -PublicGitSource "hashgraph-online/awesome-codex-plugins"

# 节点侧真库 + 真 codex 的可用性验证（先物化镜像，再由真 app-server 验证技能与插件 MCP）
$env:SYNTROPY_LIVE_CODEX_ROOT = "D:\tmp\syntropy-live"
$env:SYNTROPY_LIVE_CODEX_EXE  = "<codex.exe>"
go -C syntropy_node test ./agent/ -run TestLiveImportedPlugin -count=1 -v

# 探针：阶段 A 证明 plugin/reconcile 单独不物化，阶段 B 证明 plugin/list 后可用
node codex_app_rev/probe/plugin-mirror-usability-probe.mjs <codex.exe> <SYNTROPY_LIVE_CODEX_ROOT>\agent-live
```

`tools/smoke-plugin-management.ps1`（新增）覆盖的检查：本地目录来源注册与目录快照（id / 版本 / 技能 / MCP / 展示名）、来源列表与单来源刷新、插件列表与 `marketplace`+`keyword` 过滤、单插件读取与未知插件 404、影响面（未引用时为 0 模板 0 Agent）、**平台 MCP 重名（池里加同名 server → 列表与详情都报冲突 → 清空池后冲突消失）**、集群级停用/启用与持久化、缺目录来源 400、
`git://` 来源真实 clone（分类 / 名称 / 清单 / 技能）、镜像复用刷新、未知 ref 503 且不落注册表、未知来源刷新 404、来源消失后全量刷新的 `syncError` 与快照保留（且不影响健康来源）、移除来源后插件不可解析。W10 追加：长路径来源夹具（提交里的路径超过 Windows `MAX_PATH`，且只写进对象库）→ 注册 200 / 名称来自 clone / 目录可读 / 单来源刷新走 fetch+reset / refresh-all 保持健康。

**平台既有噪音（不是本轮引入，不在本轮修）**：`gofmt -l` 会列出全部 CRLF 检出文件（本机 `core.autocrlf=true`，diff 只是行尾）；`pnpm format:check` 同样在未改动的 CRLF 文件上失败（`tokens.css`、`tailwind.config.js`、`pnpm-workspace.yaml` 等）；`pnpm lint` 的 4 条 warning 全在未改动区域（`tests/component/local-bootstrap...:166`、`App.tsx:1574`、`main.ts:51`、`main.ts:418`）。本轮改动的文件都已按 oxfmt 格式化。

W12 的验证（只动桌面侧，Go 未改）：

```powershell
cd desktop_app
pnpm typecheck          # 通过
pnpm lint               # oxlint + depcruise（473 modules）通过
pnpm check:exports ; pnpm test:boundaries ; pnpm test:quality-gates   # 通过
pnpm test:component     # 58 files / 565 tests（+2）
pnpm test:contract      # 38 files / 302 tests（+3）
pnpm test:unit          # 2 files / 9 tests
pnpm test:security      # 8 files / 34 tests
# 改动文件的格式化校验：拷到临时目录跑 oxfmt --write 后逐行对比（忽略行尾）→ FORMAT CLEAN
```

## 11. 剩余工作与已知缺口

### 11.1 影响面的「代价与冲突」（已落地，见 W9）

原先缺的两块信息本轮补齐，实现细节在 §4 W9：

- **`plugins/cache` 磁盘占用**：Node 在 spawn 收尾量一次并写进 `AgentStatus.plugin_cache_bytes`（`map<插件标识, 字节>`），Master 透传为 `PluginAgentState.cache_bytes`，界面给「缓存」列与合计。0 = 未知（节点还没回报或该 Agent 没物化这个插件），界面显示 `-`。
- **与平台 MCP 重名**：`PluginRecord.mcp_conflicts` = 插件声明的 MCP 名 ∩（共享 pool ∪ 内置保留名），在列表卡片影响行、详情「平台 MCP 重名」行（标红 chip）与影响面里可见；运行期告警与界面共用同一份保留名单。
- 仍未接：**插件 MCP 的「声明了却没起来」判定**（见 §11.3）——重名只是冲突，不是加载结果。

### 11.2 `skills/extraRoots/set` 的共享技能镜像（未开始，属技能线不属插件线）

探活证明 `skills/extraRoots/set` 可以让 codex 直接扫描节点上的技能目录，从而绕开
`bundle.go` 的 8 MB 上限与「技能 × Agent」的重复存储；但**它不持久化、且 app-server 会按
`IdleTimeoutSec` 回收**，所以必须在每次 spawn 的路径上重设（`AgentCodex` 需要转发
`SkillsExtraRootsSet`）。前置依赖是「节点侧共享技能镜像目录」的落点与同步策略，
建议按插件镜像的同一模式（`<codex homes root>/skill-mirrors/...`）单独排一个工作包。

### 11.3 其它已知缺口

**W11 修掉的（此前列在缺口里但没意识到严重性）**：`plugin/reconcile` 不是物化入口。它只同步声明状态，内容复制发生在 `plugin/list` / `plugin/install`；节点侧原先只调前者，所以「导入插件」在 Agent 上一直是「已声明、未安装」，`PluginsReady` 还是绿的。现在 `reconcileAgentPlugins` 补上 `plugin/list` 与按 `installed` 的轮询确认，并在拿不到确认时报未装上的插件标识。这条也解释了 §2「关键运行时事实」里「Node 只调 `plugin/reconcile` 就够」的旧假设为什么站不住。

- **远程插件**（清单里 `source.source = "remote"`，内容托管在 ChatGPT 后端）在节点侧无法物化：`resolveCodexPlugins` 会把它记成跳过项。托管插件链路本轮明确不做。
- **插件 MCP 的「声明了却没起来」还没法判定**：codex 只会把加载成功的 MCP 报回 `mcpServerStatus/list`（带 `pluginId`），加载失败的插件 MCP 根本不出现，Node 也没有插件清单里的期望名单；要补需要 Node 读镜像里的 `.codex-plugin/plugin.json` 拿期望值，并注意 `MCPReady` 判定发生在 `plugin/reconcile` 之前的时序。当前能保证的是「插件 MCP 进了就绪集合与计数」，重名则由 W9 在界面上提示。
- **`marketplace/upgrade`**（Git 来源升级）没有接：来源刷新目前只做 Master 侧重新读目录，节点侧镜像按 `source+ref+sparse` 复用，不会自动跟进上游新提交。
