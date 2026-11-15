# 26.1103 → 26.1106 差异与新增功能

> 基线：本机 MSIX `OpenAI.Codex 26.1106.6628.0`（应用版本 `26.1106.51428`，
> build `26605`），2026-11-15 采集。对照为 2026-11-09 的
> `26.1103.4239.0`（应用版本 `26.1103.32239`，build `25471`）。
>
> 只读安装目录；未做运行时插桩，未读取凭据、`settings.dat`、SQLite、日志正文或会话缓存。
> 因此下文“代码里存在 / 门控允许”不等于当前账号一定可见，也不等于服务端已开启。
> 所有函数/变量名在生产包中已被压缩，文中的语义化名称都是按用途重命名。

## 1. 一句话结论

26.1106 是一次**纯产品迭代、无架构迁移**的版本：Rspack、Owl shell、主进程结构都与
26.1103 相同，asar 只增长 11.8 MB（+1.5%）。真正的变化集中在 UI 功能面：

1. **图片文字直接编辑（Edit Text）** 是本次最大新增面：160 条 `imageTextEditing.*`
   文案 + 新接口 `/image-gen/layer-extractions`，把图片里“烤死”的文字提取成可编辑图层，
   支持逐块批注、字形基准线/字高引导线、格式刷、图层顺序，最后把整批修改连同原图
   一起发回模型重绘；
2. **GPT builder 补齐 Actions 编辑器**（62 条）与**分享面板**（17 条）：
   OpenAPI schema 导入/校验、OAuth/PKCE、操作列表与测试；
3. **Workspace 插件模板 / MCP 自定义插件 v2 安装向导**（84 条）：URL 模板、自定义
   header、OAuth 自动发现与高级设置（CIMD/DCR/User-defined client）；
4. **插件文件编辑器与发布流程**（`plugins.editor` 从 37 增至 76 条）：文件树、重命名、
   文件夹、skill、发布对话框与版本号校验；
5. **浏览器书签**（28 条）与命令 `browser.bookmarkPage`（`CmdOrCtrl+D`）；
6. **Level Up 提示目录**（51 条 `learningHub.cards`）与 `/learning-hub/tips` 接口；
7. 设置新增**存储清理**（15 条）、线程级**网络策略**编辑（15 条）、
   dot **活动侧栏**（19 条）、**共享 dot 的设备授权**（10 条）；
8. **移除实验性的 face / voice 验证设置**：`settings.biometric` 68 条英文文案整组消失。

i18n 口径：57,004 → **57,893 条**（+1,342 / -453 / 70 条改写），分组 7,909 → **8,202**。

## 2. 身份、容器与安装层

| 项目 | 26.1103 | 26.1106 | 变化 |
| --- | --- | --- | --- |
| MSIX 版本 | `26.1103.4239.0` | **`26.1106.6628.0`** | 新包 |
| 应用版本 | `26.1103.32239` | **`26.1106.51428`** | 新应用版本 |
| build number | `25471` | **`26605`** | +2,134 |
| Chromium（Owl shell） | `157.0.8103.39` | **`157.0.8103.51`** | 补丁号 +12 |
| Owl runtime 包哈希 | `0ded5465…52bec` | **`ca1e7e35…85bae`** | 新运行时 |
| `app.asar` | 761,023,153 B | **772,825,694 B** | +11,802,541 B（+1.55%） |
| asar 条目 / 文件 / 目录 | 20,127 / 19,793 / 334 | **20,220 / 19,886 / 334** | 文件 +93 |
| asar 清单总字节 | 772,828,333 B | **784,605,736 B** | +11,777,403 B |
| `.vite/build/` | 29 files / 11.9 MiB | 29 files / **12.0 MiB** | 单文件变大 |
| `webview/assets/` | 18,761 / 699.4 MiB | **18,854 / 710.5 MiB** | +93 / +11.1 MiB |
| `webview/assets/async/` | 13,492 / 498.3 MiB | **13,584 / 509.1 MiB** | +92 / +10.8 MiB |
| JS | 9,640 / 510.1 MiB | **9,718 / 520.6 MiB** | +78 / +10.5 MiB |
| CSS | 587 / 13.9 MiB | 603 / 14.3 MiB | +16 / +0.4 MiB |
| i18n 文案 / 分组 | 57,004 / 7,909 | **57,893 / 8,202** | +889 / +293 |

本机实算 SHA-256：

| 文件 | 大小 | SHA-256 |
| --- | ---: | --- |
| `app/resources/app.asar` | 772,825,694 B | `54B74A9131680FC9EEAD711ED5D9F718F6127C22222CA60D2E3B577A707E2485` |
| `app/ChatGPT.exe` | 4,471,600 B | `D2C25E7739221D80F0BD0A64F2F2CB0671630073BC9E9A6AB47868103635A83C` |
| `app/Codex.exe` | 20,272 B | `F502D7775B08F3F62A03F5A9C9F57E8915430F29FEAA83E0A42F988CC70FD2D4` |
| `app/resources/codex.exe` | 373,698,352 B | `83F5C2DD2AC2902E0D96BA5D8CCDD27D513F57DF4A9AB73E06A5A518028E9A2F` |
| `app/chrome.dll` | 337,058,608 B | `18FD2723C7359468FD4E8DAFA4C539CE2A077BD3DC3F314EB4ABB22E64E39650` |
| `AppxManifest.xml` | 9,395 B | `1ADBAB3F6DB02E9D7536679CED25B1BEFF4749FFE3AC18018F1C485A0FDC6FBF` |

安装层**没有变化**：仍是 7 项 capability、`codex` 协议、`.skill` + 7 种表格/文档关联、
`chatgpt-desktop.exe` / `codex-chrome-native-host.exe` / `codex-core-command-runner.exe`
三个执行别名、`windows.startupTask`、`CodexSandboxService.OpenAI.Codex` 服务、
COM surrogate `d28d30e7-…` 与 Copilot 键提供者扩展。

随包资源（只记数量与字节）：

| 目录 | 26.1103 | 26.1106 |
| --- | ---: | ---: |
| `cua_node` | 2,461 files / 315,705,906 B | **2,436 / 309,317,367 B** |
| `plugins` | 860 / 35,191,141 B | **846 / 28,922,197 B**（8 个 bundled plugin，名字未变） |
| `plugin-signatures` | 25 / 18,197,188 B | **25 / 15,380,341 B** |
| `skills` | 29 / 310,634 B | **30 / 302,123 B**（`.curated`） |
| `tectonic` | 5 / 55,104,965 B | **5 / 55,131,589 B** |
| `locales` | 220 files | 220 files |

## 3. 文案面：新增、移除与改写

| 指标 | 26.1103 | 26.1106 |
| --- | ---: | ---: |
| 扫描 JS | 9,388 / 495.5 MiB | **9,466 / 505.9 MiB** |
| 含文案的 chunk | 3,210 | **3,253** |
| 消息条数 | 57,004 | **57,893** |
| 分组 | 7,909 | **8,202** |
| 新增消息 / 移除 / 改写 | — | **+1,342 / -453 / 70** |
| 新分组 / 消失分组 | — | **+325 / -32** |

新增消息最多的命名空间：

| 命名空间 | 新增 | 说明 |
| --- | ---: | --- |
| `gptBuilder.actions` | 62 | GPT 自定义 Action 编辑器（OpenAPI/OAuth） |
| `learningHub.cards` | 51 | Level Up 个性化提示目录 |
| `workspace-plugins.template` | 45 | 工作区插件模板实例化 |
| `plugins.editor` | 39 | 插件文件编辑器与发布 |
| `workspace-plugins.mcp-template-setup` | 37 | MCP v2 模板安装向导 |
| `businessProfiles.adAccounts` | 36 | Business Hub 广告账户接入 |
| `codex.space` | 31 | Page 评论上限、复制 Page |
| `browser.bookmarks` | 28 | 浏览器书签 |
| `wham.usageDashboard` | 25 | Codex 自动充值折扣 |
| `adManager.businessAgent` | 22 | Business Agent 准备/恢复流程 |
| `businessProfiles.agentBuilder` | 21 | Agent Builder 地区/行业门控 |
| `businessProfiles.members` | 21 | 成员与广告账户授权 |
| `businessProfiles.getStarted` | 20 | Business Hub Get started 建议 |
| `codex.pages` | 20 | Pages 分享/协作 |
| `orbit.activity` | 19 | dot 活动侧栏 |
| `businessProfiles.searchClaim` | 18 | 商家认领搜索 |
| `gptBuilder.share` | 17 | GPT 分享 |
| `imageTextEditing.*` | 160 | 图片文字编辑（分散在 50+ 子组） |
| `settings.storage` | 15 | 存储清理与目录 |
| `threadEnvironment.network` | 15 | 线程网络策略 |

移除最多的命名空间：

| 命名空间 | 移除 | 判断 |
| --- | ---: | --- |
| `settings.biometric` | 68 | 整组英文文案消失（face/voice 验证实验回退） |
| `ads_manager.tools` | 116 | 不是功能消失：`adManager.businessAgent` 新增 22 条，属于同一广告面的重组 |
| `sidebarElectron.usageAlert` | 23 | 侧栏用量告警文案撤下 |
| `settings.usage` | 17 | 用量页改写（净 -9） |
| `chatgpt.rosalind_access` | 13 | 研究准入文案微调（净 -11） |
| `codex.safetyComposerBanner` | 13 | 安全横幅改写（净 -9） |
| `restricted.environmentSetup` | 12 | 环境设置改写（净 -1） |

70 条改写里值得注意的语义变化（A 级，`description` 与文案同时变）：

- `businessProfiles.activity.productFeeds`：`Product feeds` → **`Upload history`**；
- `businessProfiles.editor.title`：`Edit business info` → **`Edit business details`**；
- `businessProfiles.creation.match.none`：`None of these is my business` → **`None of these are mine`**；
- `businessAdsCreditOffer.disclaimer`：新增 **“Only a workspace owner can claim ad credits.”**；
- `businessProfiles.agentBuilder.catalog.selected`：从“不能搜索商品、要清空选择再发布”
  改为 **“可以带着已选 catalog 发布”**，说明该限制被放开。

## 4. 新增功能面

### 4.1 图片文字编辑：Edit Text（最大新增面，A 级）

代表 chunk：`code/app-261106/image-editing/87804.fcae5854d3.js`（348 KB，158 条文案）。

流程（全部来自静态代码，证据 A）：

1. **提取**：`POST /image-gen/layer-extractions` body `{source_file_id}` → `{id}`；
2. **轮询**：`GET /image-gen/layer-extractions/{extraction_id}`，`status` 为
   `preparing` / `completed` / `failed`；完成后返回 `document{document_id, version, image_asset_pointer}`；
3. **读文档**：`GET /image-gen/layer-extractions/documents/{document_id}`，返回
   `reference{version, image_asset_pointer}`、`content{background_asset, source_asset, …}`
   与 `items`（文字图层：`text`、`polygon`、`alignment`、`baseline`、`font` 等）；
4. **保存新版本**：先把渲染结果作为文件上传（`use_case:"multimodal"`、
   `metadata.store_in_library:false`），再
   `POST /image-gen/layer-extractions/documents/{document_id}/snapshots`
   body `{rendered_file_id, items}`，返回新的 `document_id/version/image_asset_pointer`；
5. **批量改图**：把逐块批注拼成一条指令发给模型，模板原文为
   `Apply these comments together to the attached {width} × {height} image. Harmonize the edited lettering with the surrounding image and preserve content outside the requested changes.`
   区域移动/改写则用 `Apply these edits to the attached {width} × {height} image. Coordinates use the top-left corner of the image as the origin. Keep surrounding content intact.`

编辑器能力（文案与组件结构，A 级）：新增/删除/复制文字块、拖动与方向键微调、
图层前后顺序、字号/字宽/字距/行高、颜色、对齐、格式刷、撤销/重做、
基准线与上轮廓**引导线**（弯曲字形、局部字高）、逐块批注与“应用到请求”、
保存为新副本/覆盖、Library 回查，以及 `saving` 状态下的
`render` / `upload` 两阶段失败标记（无法确认时进入 `uncertain` 而不是静默重试）。

安全/一致性细节（A 级）：提取结果里的资源名必须匹配 `^[a-zA-Z0-9._]{1,30}$`
且不能是 `.`/`..`；图片 pointer 必须以 `file_` 开头且不含 `#`；几何越界会阻止保存
（`invalidGeometry`）；未知保存结果会提示去 Library 核对。

### 4.2 GPT builder：Actions 与分享（A 级）

代表 chunk：`code/app-261106/chatgpt-surfaces/301564.5becb451f7.js`（216 KB）。

- 接口：`/gizmos/fetch_openapi`、`/gizmos/validate_openapi`、
  `/gizmos/{gizmo_id}/share`、`/gizmos/{gizmo_id}/version/{version}`；
- Actions：从 URL 导入或粘贴 OpenAPI JSON/YAML；校验状态
  `validating → validationFailed / available operations`；按域名去重
  （`duplicateDomain`）；支持 None / API key（Bearer、Basic、自定义 header）/
  OAuth（authorization/token URL、scope、PKCE、token exchange 方式、callback URL 拷贝）；
  工作区可限制允许域名（`allowedDomains` / `noDomains`）；
- 分享：按工作区成员/组搜索，权限三档 `Can chat` / `Can view settings` / `Can edit`，
  并明确“改分享不会发布草稿，也不改链接访问”。
- 还新增 `gizmo.actions`（4 条）与 `gptBuilder.share`（17 条）两组补充文案。
- 路由里出现 `/gpts/editor/:gizmoId?`、`/gptbuilder` 相关路径与
  `/g/g-TYEliDU6A-actionsgpt`（ActionsGPT 帮助入口，文案说明它会打开外部 ActionsGPT）。

### 4.3 Workspace 插件模板 / MCP v2 安装向导（A 级）

代表 chunk：`code/app-261106/plugins/168352.2a867650b7.js`（203 KB，84 条文案）。

- 模板实例化：URL 模板支持内联占位符，可整段复制/校验后创建；可选 PNG 图标
  （≤5 MB，建议 ≥256×256）；创建结果有 `created-pending` / `created-lookup-failed`
  两态，且**刷新不会重复创建**；对“可能已创建”的情况保留创建标记并要求用户先核对
  （`previous-attempt` / `reviewed-attempt`），避免重复建 app；
- 连接：MCP server URL、自定义 header（名称/值成对、去重、禁换行）、tunnel 或自定义 URL；
- 鉴权：自动 OAuth 摘要（CIMD / DCR / existing client / user-defined client）、
  高级设置可覆盖 endpoints、scope、resource、OIDC、token endpoint auth method；
  失败可单独重试“只读元数据”的 discovery；
- 风险提示：OpenAI 验证过的模板并不代表具体 MCP server 被审过，
  安装前必须勾选风险确认（`risk_acknowledgment.verified_template_data_access_description`）；
- 企业连接器模板另有 GitHub App（webhook URL/secret、私钥 PEM 上传）、
  GitLab self-managed（hostname + OAuth scopes）、Snowflake 的专用表单
  （`chatgpt.connector_settings.service_template.*`）。

### 4.4 插件编辑器与发布（A 级）

代表 chunk：`code/app-261106/plugins/638374.f9fd58b41c.js`（201 KB，76 条文案）。

- 两种编辑模式：简单表单（name/description + `plugin.json` 校验）与完整文件树编辑器；
- 文件树：新建文件夹、重命名（禁止含 `/`、禁止 `.`/`..`）、删除（文件夹含内容）、
  移动回根目录、下载单文件、breadcrumb；
- Skills：在插件内创建/删除 skill 目录与 `SKILL.md`，编辑 frontmatter 的 name/description；
  路径越界会拒绝并提示用完整编辑器修 `plugin.json`；
- 发布：`Publish plugin` 对话框会读取已发布版本，要求版本号必须递增，
  可一键 `Fix` 把 manifest 提到“已发布版本的下一 minor”；权限/版本检查失败会禁用发布；
- 接口：`/public/plugins/workspace`、`/public/plugins/workspace/{plugin_id}`、
  `/public/plugins/workspace/upload-url`、`/ps/plugins/{plugin_id}/archive`、
  `/ps/plugins/{plugin_id}/skills/{skill_name}`、`/ps/plugins/canonical-app/{app_id}`。

### 4.5 浏览器书签（A 级）

代表 chunk：`code/app-261106/app-shell/534163.f7cf5f48cf.js`（540 KB）。

- 地址栏星标：空星 `Bookmark this page` / 实星 `Edit bookmark`；
- 编辑器：名称、文件夹选择、新建/重命名/删除文件夹（删除文件夹会把内容上移而不是删除）、
  只读书签（原生策略保护）、缺失书签/文件夹的错误态、保存失败可重试；
- 命令表新增 `browser.bookmarkPage`，默认键 **`CmdOrCtrl+D`**（主进程命令注册表，A 级）；
- 策略限制：`savingNotAllowed` / `editNotAllowed` 会在原生书签策略或文件夹权限拒绝时出现。

### 4.6 Level Up：学习提示目录（A 级）

代表 chunk：`code/app-261106/learning/866688.e994d16685.js`（55 KB，51 条文案 + 3 条页级）。

- 接口：`/learning-hub/tips`；页面分 `For you` 与 `All tips` 两个 tab；
- 个性化：根据工作区活动生成 headline 与推荐 tips，空结果有兜底文案；
- 提示项覆盖：附件/截图、浏览应用、建表格/文档/演示、建项目、建 skill、
  定时 skill、连接日历/邮箱/应用、语音模式、记忆、通知、个性化、搜索网页等；
- 每条提示可“Try in chat”并预填 `Help me try this in ChatGPT. {description}`。

### 4.7 设置：存储清理（A 级）

代表 chunk：`code/app-261106/settings/729009.c37af37fb0.js`（60 条文案）。
新增按目录统计（`Workspace folder`、聊天 transcript、共享历史数据库、可视化），
可 `Browse` 打开系统文件管理器；清理聊天会显示 transcript 大小（含 subagents）、
删除后给出 `Chats deleted / skipped / failed / freed` 的实测结果，并明确不可恢复。

### 4.8 线程级网络策略（A 级）

代表 chunk：`code/app-261106/enterprise-trust/150595.08945a16f7.js`（203 KB）。
运行中的会话可编辑网络开关与域名；但“已发布策略”可能限制：
全部公网、包管理器域名、或具体域名。用户可以 `Apply allowed changes`（丢弃被拒项），
或 `Remove blocked` 只移除被拒编辑；后端超限、策略变化、策略不可读都有独立恢复路径。
作用域明确为 **仅当前线程**。

### 4.9 Business Hub / Ads（A 级）

- `businessProfiles.getStarted`（20 条）：Business Hub 建议轮播——地址、类别、
  商品目录、广告账户、团队邀请、升级 Business 计划、推广 agent；
- `businessProfiles.adAccounts`（36 条）：连接广告账户的确认对话框、账户下拉、
  邀请时的广告账户授权与部分失败重试；
- `businessProfiles.agentBuilder`：新增地区/行业门控（`entryUnavailable.region` /
  `entryUnavailable.localBusiness`），catalog 可带筛选发布（见 §3 改写）；
- `adManager.businessAgent`（22 条）：网站调研 → 可编辑草稿的准备流程，
  含“结果不确定时先查已保存 agent”的恢复按钮；
- `merchantSettings.*` 新增国家/币种参考列表与校验错误。

### 4.10 dot / Orbit：活动侧栏与共享设备（A 级）

- `orbit.activity`（22 条）：dot 侧栏的 `Activity` 列表、任务详情时间线、
  按今天/昨天/近 7 天/本月分组、`Show more` 每次 15 条、Scheduled 折叠区；
- `sharedDot.devices`（10 条）：把本机共享给 shared dot 前有两段警告
  （当前与未来成员都能访问；成员可读写文件/跑命令，可能触达本机凭据），
  必须逐级确认后才授权。

### 4.11 计费：Codex 自动充值折扣（A 级）

`wham.usageDashboard.autoTopOff.*`（+25，共 44 条）：自动充值的折扣横幅
（base / limited-time offer / reward 三态）、金额卡片的折扣百分比、
自定义金额、本地化价格加载失败与重试、以及“启用后每次低于阈值会自动扣款”的提示。

### 4.12 其他新增（简）

- `settings.storage` 之外的 `settings.*` 变化很小；`settings.codexMicro` 仍是 225 条；
- `images.nova`（7 条）：图片模板预览、Remix（原型，无动作）、作为风格参考；
- `chatgpt.businessTeamInviteHeader`（12 条）、`onboarding.inviteAll`（11 条）；
- `composer.audioAttachment`（3 条）、`composer.executorSkill`（2 条）、
  `codex.savedAccount`（2 条）、`home.desktopFeed`（1 条）；
- `health.developerTools`（6 条）、`finance.citations`（1 条）等健康/金融小面。

## 5. 移除与回退

### 5.1 face / voice 验证设置整组移除（A 级）

`settings.biometric` 的 68 条英文文案（`faceEnrollment.*`、`removal.*`、
`entryDescription` 等）在 26.1106 的英文源里**全部消失**；只剩
`composer.userVerification.biometricsUnavailable`
（“Biometric verification is currently unavailable on this device”）。
设置导航的 slug 表没有 `biometric` 项，因此这不是“页面改名”，而是该实验面被撤下。

> 重要方法学提醒：**65 个语言包 chunk 仍保留这些旧 id 的译文**
> （例如 `settings.biometric.face` 仍是 “Rostro”/“Лице”）。
> 只按字符串存在性判断功能会得出相反结论；必须以英文 descriptor
> （`id + defaultMessage + description`）为准。

### 5.2 其他撤下或收敛

- `sidebarElectron.usageAlert` 23 条：侧栏用量告警文案撤下（可能改由 `wham` 承载，
  但未在本次文案中确认对应新组，属 C 级推断）；
- `app.interruptedChats`、`codex.rateLimitResetHomeBanner`、`coreUsage.cta`、
  `sidebarElectron.lunaReserve` 等小面消失；
- `tortilla.gallery` 从 96 条降到 0（模板画廊并入 `space.pageTemplates` 的可能性高，
  但未逐条核对，C 级）；
- `ads_manager.tools` 净减 116 条属于重构，不是功能删除（见 §3）。

## 6. 协议与注册表

| 注册表 | 26.1103 | 26.1106 | 结论 |
| --- | ---: | ---: | --- |
| 设置页 slug | 53 | **53** | 无增删；4 个导航组、41 项 capability、13 项 web 可见均相同 |
| app-server 方法字面量 | 189 | **189** | 无增删（`_APP_SERVER_METHODS.json`） |
| `codex_desktop:*` IPC | 25 + 2 动态 worker | **26 + 2** | 新增 `codex_desktop:network-online` |
| 命令表 | 159 | **160** | 新增 `browser.bookmarkPage`（`CmdOrCtrl+D`） |
| 路由字符串 | — | **170** | 110 个 `path:"/…"` + 40 个 `RQ)()` 匹配 + 34 个 `to` + 4 个 `navigate` |

- `codex_desktop:network-online`：仅在 **macOS + prod** 的 preload 里监听
  `window` 的 `online` 事件并 `send`（无参数），用于主进程感知网络恢复；
- 设置注册表位置迁移：26.1103 的 descriptor 在 `499225.*`、导航在 `405910.*`，
  26.1106 合并到 **`885910.79b4f4977c.js`（descriptor/order/default）** 与
  **`21225.709d5925a9.js`（nav 分组 + slug→标题）**，能力表在
  **`160740.8d93ddc2e4.js`**。数字 chunk id 每周会重排，文档里引用路径时务必带版本。

## 7. 打包与体积：语言包是最大成本项

本次确认了一个此前未量化的结构：**翻译不是英文 descriptor 的一部分，而是独立的
“id → 译文”映射 chunk**。26.1106 有 **65 个 async chunk / 282.4 MiB** 含有这种映射
（占 asar 文件字节的 **37.7%**），覆盖 **57 种语言**；同一语言可能出现在两个 chunk 里。
单个语言包约 3.4 万条 id→text、3.7–3.8 MB，`defaultMessage` 出现次数为 0。

这意味着：

- 不能把“字符串出现次数”当作功能存在证据（旧功能译文会滞留数周）；
- 体积统计若把语言包与业务 chunk 混在一起，会误判“功能膨胀”；
- 本次 `webview/assets/async` 增长 10.8 MiB，主要来自业务 chunk 与语言包的自然更新，
  没有新增打包器或运行时。

另：runtime 的 `p.u` 映射里有 **1 个悬空条目** `async/3.8d72d210eb.js`（id=3），
asar 中不存在该文件；26.1103 也是 1 个缺失条目，属打包产物的既有现象。

## 8. 未变化、局限与证据等级

- **未变化**：Rspack 结构、四个入口 chunk id（782259 / 727403 / 158624 / 348410，
  hash 变化）、`package.json` 依赖集合、主进程 29 个 `.vite/build/*.js` 的文件名结构、
  设置 slug/能力表、app-server 方法表、安装层能力声明。
- **局限**：未做运行时插桩；feature flag 与账号态会改变实际可见性；
  服务端接口只看到调用点与请求体，无法确认后端是否已全量开放；
  路由字符串来自静态注册，不能证明每条路由都有可达入口。
- **证据等级**：§2/§6/§7 的计数与哈希为 A（本机实算）；
  §4 的功能描述为 A（文案 description + 静态调用链）；
  功能之间的因果（如“usageAlert 被 wham 取代”）为 C。
