# Codex App 插件管理（Plugins / MCP）逆向分析

对 Codex desktop app **插件与 MCP 管理**这一块的静态逆向，回答两个问题：**有哪些功能点**、
**在代码里是怎么实现的**。

|            |                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| 分析基线   | **`OpenAI.Codex 26.908.9136.0`**（本机当前安装版本）                                                   |
| 采集时间   | 2026-09-16（Asia/Hong_Kong）                                                                           |
| 代码产物   | [`code/plugins-26908/`](code/plugins-26908/)（32 chunk / 1.08 MB）+ `_MESSAGES.json`（417 条）         |
| 上一版对照 | `code/settings/`、`code/composer/`、`code/conversation/`、`code/side-panel/` 是 **26.903.9818.0** 快照 |

> **为什么不能直接读 `code/` 里的插件代码**：插件这一族在 26.908 里改得很厉害——
> **17 个 chunk 名**的内容已变（19 个文件，其中 2 组是 shim+实现双 hash），**9 个名字**（10 个文件）是新增的。
> 例如 `plugins-page` 122062→124548 B、`plugins-page-section` 49144→**82420 B**（+68%）、
> `plugin-detail-page` 158998→161135 B 且多出一个 133 B 的 shim、`settings-plugin-selection` 109372→71559 B。
> 本文所有代码级结论都来自 26.908 的重新抽取，见 §13、§15。
>
> 未修改 `C:\Program Files\WindowsApps` 下任何文件；未读取凭据、token、`config.toml` 内容、
> 会话数据或数据库，只记录**文件名与结构**。

## 证据等级

- **A** — 安装包（26.908.9136.0）直接证据：chunk 里的字符串字面量、i18n 描述符、静态逻辑、路由与注册表。
- **A(26.903)** — 来自前一次快照（`code/` 的既有文档），本次**未重新核验**。
- **C** — 结构推断：由组件边界、状态组合、调用形态推断，正文已标注。

---

## 0. 一句话结论

Codex 的「插件」不是传统意义上的扩展包，而是一个**跨三层的东西**：
**插件（Plugin）= 若干 App 连接 + Skills + MCP servers + Hooks 的打包体**，
它的管理界面因此同时扮演四个角色——**目录/商店**、**已安装清单**、**MCP 服务器配置器**、
**分享与权限控制台**。而它的后端是**双平面**的：托管的插件走 ChatGPT 后端的 `/ps/plugins/*`，
本地文件夹/Git 市场走 **app-server 的 `plugin/*` JSON-RPC**，两者在同一个 UI 里被抹平。

---

## 1. 入口：插件管理从哪进（A）

一共 **6 个入口**，全部指向同一套组件：

| #   | 入口                                    | 路由 / 触发                                                                                                                                    | 证据                           |
| --- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 1   | 设置 → 集成 → **插件**                  | settings slug `plugins-settings`，导航标题 `settings.nav.plugins-settings` = `Plugins`                                                         | 注册表 `app-initial`:308990    |
| 2   | 设置 → **MCP 服务器**                   | slug `mcp-settings`，复用**同一个组件**并传 `manageOnly: true`                                                                                 | `mcp-settings-da7749534a45.js` |
| 3   | 侧栏 rail「Plugins / Skills」           | `navigate('/plugins')`，带 `state.pluginDirectoryEntrypoint = CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR`                                       | `app-primary`:78010            |
| 4   | Composer 的 @ 提及 / 工作模式插件选择器 | `composer-work-home-plugins-control-*.js` + `plugin-picker-menu-content-*.js`，含 `composer.workMode.plugins.browseAll` = `Browse all plugins` | A                              |
| 5   | 插件详情页深链                          | `/plugins/:pluginId`（`PluginDetailPage` / `ManagePluginDetailPage` 同一实现）                                                                 | 路由 `app-initial`:310866 起   |
| 6   | MCP App 的右键菜单                      | `type: 'navigate-to-route'`, `path: '/settings/mcp-settings'`（`mcpCapability.openMcpSettings` = `Open in MCP Settings`）                      | `app-initial`:189873           |

补充：

- **MCP App 深链页**：`plugin-mcp-app-deep-link-page-*.js`（`entrypoint: 'global'` + `pluginId` + `toolName`）。
- **工作区管理页**：`/admin/plugins/{pluginId}`（`plugins.management.manageForWorkspace` = `Manage for workspace`）。
- **Web 侧分享链接**：`https://chatgpt.com/plugins/{remotePluginId}?no_universal_links=1`，
  桌面端附加 hash `#settings/Plugins/{id}?product-sku=CODEX`（`app-initial`:363259）。
- 从设置页点「Browse directory」不是路由跳转，而是 `navigate('/plugins', { state: { initialHostId, initialTab, pluginDirectoryEntrypoint: ..._SETTINGS } })`。

### 1.1 设置页骨架（A）

`plugins-settings-c02739de4e70.js` 只有 135 行，它的全部工作就是**把通用插件页包进设置页骨架**：

```js
SettingsSection({ title: <SettingsSectionTitle slug="plugins-settings">,
                  subtitle: "Manage plugins, skills, and MCPs",
                  action: [ <Button>Browse directory</Button>, <AddMenu/> ],
                  children: <PluginsPage manageOnly initialManageTab="plugins"
                                              directoryEntrypoint={...ENTRYPOINT_SETTINGS}
                                              mcpServerCreation={...} /> })

// mcp-settings 版本： initialManageTab="mcps"，没有 Browse directory
```

即 **`mcp-settings` 不是独立页面，只是同一个 `PluginsPage` 以 `manageOnly` + 初始 Tab 不同来渲染**。

### 1.2 与截图对齐（A）

用户截图（zh-CN，设置 → 插件）与代码逐项对得上：

| 截图元素                                     | i18n id / 代码                                       | 说明                                                                   |
| -------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| 标题「插件」/ 副标题「管理插件、技能和 MCP」 | `settings.section.plugins-settings` / `.subtitle`    | `Plugins` / `Manage plugins, skills, and MCPs`                         |
| 右上「浏览目录」                             | `settings.section.plugins-settings.browseDirectory`  | `Browse directory`                                                     |
| 右上「添加 ▾」                               | `skills.appsPage.add`                                | 主按钮色，下拉菜单见 §3.3                                              |
| 「插件 5」「MCP 2」                          | `skills.appsPage.manageTab.plugins` / `.mcps` + 计数 | 计数是**动态**的，见 §4                                                |
| 「搜索 MCP 服务器」                          | `skills.appsPage.search.mcps`                        | 宽度 `w-56`，占位与无障碍标签同文案                                    |
| 「服务器」分组 + `node_repl` + 齿轮 + 开关   | `settings.mcp.myServers` = `Servers`，行组件 `ts`    | 齿轮=`settings.mcp.server.settings`，开关=`settings.mcp.server.enable` |

---

## 2. 三条数据平面（理解一切的关键）（A）

插件管理界面上看起来是「一个列表」，底下其实有**三套完全不同的数据源**，按插件来源分流：

### 2.1 托管插件 → ChatGPT 后端 REST（`/ps/*`）

客户端是 `DS.safeGet / safePost / safePut`，统一附加认证头 `additionalHeaders: sO(scope)`。

| 方法      | 路径                                                                                                      | 关键参数                                                                                       | 出处                               |
| --------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------- |
| GET       | `/ps/plugins/installed`                                                                                   | 分页 `pageToken` → `pagination.next_page_token`（**循环拉全量**）                              | `app-initial`:135237               |
| POST      | `/ps/plugins/{plugin_id}/install`                                                                         | query `includeAppsNeedingAuth=true`，body `{install_attempt_id}` → 返回 `app_ids_needing_auth` | `app-initial`:366391               |
| POST      | `/ps/plugins/{plugin_id}/uninstall`                                                                       | —                                                                                              | `app-initial`:191652               |
| POST      | `/ps/plugins/{plugin_id}/enable` / `/disable`                                                             | 按 `remotePluginId` 寻址                                                                       | `app-initial`:191451               |
| POST      | `/ps/plugins/{plugin_id}/skills/{skill_name}/enable` / `/disable`                                         | 单个 skill 开关                                                                                | `app-initial`:355238               |
| GET       | `/ps/plugins/{plugin_id}`                                                                                 | 详情（`release` / `interface` / 作者）                                                         | `plugins-page-section`:2391        |
| GET / PUT | `/ps/plugins/{plugin_id}/shares`                                                                          | 分享目标；PUT body `{targets, discoverability}`                                                | `plugins-page-section`:2502 / 2533 |
| GET       | `/ps/plugin-categories/{category_slug}/plugins`                                                           | `scope: 'GLOBAL'`, `limit`, `pageToken`                                                        | `category-plugins-query-*.js`      |
| GET       | `/ps/plugins/list`、`/ps/plugins/search`、`/ps/plugins/workspace/created`、`/ps/plugins/workspace/shared` | 目录 / 搜索 / 工作区                                                                           | `plugins-store-page`               |

> `/ps/mcp` 也存在，但那是 **Sites 连接器**的 JSON-RPC 端点（`tools/call`、`tools/list`，`_meta.connector_name: 'Sites'`），
> **与 MCP 服务器管理无关**——按名字找会踩空。

### 2.2 本地插件 / 市场 / 配置 → app-server JSON-RPC

统一走 `Dm(scope, hostId).sendRequest(method, params)`。安装包里有一张**方法→域**的映射表
（`app-initial`:105121 起），可以直接读出插件域的完整方法集：

```
plugins    : plugin/install, plugin/installed, plugin/list, plugin/read, plugin/reconcile,
             plugin/search, plugin/skill/read, plugin/uninstall,
             plugin/share/list, plugin/share/save, plugin/share/delete, plugin/share/updateTargets
marketplace: marketplace/add, marketplace/remove, marketplace/upgrade
mcp        : mcpServer/oauth/login, mcpServerStatus/list, mcpServer/tool/call,
             mcpServer/resource/read, mcpServer/event/stream/start, mcpServer/event/stream/stop
config     : config/read, config/value/write, config/batchWrite, configRequirements/read,
             config/mcpServer/reload
skills     : skills/list, skills/config/write, skills/extraRoots/set
```

关键调用形态：

```js
plugin/list      { cwds, marketplaceKinds: ['local'] }
                 → { featuredPluginIds, marketplaceLoadErrors, marketplaces[] }
plugin/reconcile { reason: 'plugin_suggestion_connected' } → { failedRemotePluginIds, ... }
marketplace/add  { source, refName, sparsePaths } → { alreadyAdded, marketplaceName, installedRoot? }
marketplace/upgrade { marketplaceName }        // 传 null 表示全部升级
marketplace/remove  { marketplaceName }
config/read      { includeLayers: true, cwd } → { config, origins, layers }
config/value/write { keyPath, value, mergeStrategy: 'upsert', filePath, expectedVersion }
config/batchWrite  { edits: [...], filePath, expectedVersion, reloadUserConfig: true }
```

### 2.3 本地文件与目录约定（A）

| 路径                                               | 用途                                        |
| -------------------------------------------------- | ------------------------------------------- |
| `{project}/.agents/plugins/marketplace.json`       | 项目级文件夹市场清单（`app-primary`:77403） |
| `/marketplace.json`                                | 仓库根市场清单                              |
| `codexHome/skills/.system/plugin-creator/SKILL.md` | 「Create plugin」预填提示词的来源           |
| `codexHome/skills/.system/skill-creator/SKILL.md`  | 「Create skill」预填提示词                  |
| 分层 config（`origins` / `layers`）                | MCP 服务器与插件开关的落盘位置，见 §8.5     |

**市场种类（`marketplaceKinds`）**：`local`、`vertical`、`shared-with-me`；
另外还有远程侧的 `openai-curated` / `openai-curated-remote` / `chatgpt-workspace` /
`workspace-shared-with-me-private` / `workspace-shared-with-me-unlisted`。

**内置插件 ID 白名单**（`app-primary`:77403，用于「安装时自动补齐/opt-in」判断）：
`computer-use@…`、`chrome@…`、`chrome-internal@…`、`spreadsheets@openai-primary-runtime`、
`presentations@openai-primary-runtime`（外加一个内部插件占位符 `zqe`）。

---

## 3. 管理页的界面结构（A）

`plugins-page-6d15a974f108.js`（124 KB / 7220 行）同时承担**设置内嵌**和**独立 `/plugins` 页**两种形态，
靠 `manageOnly` 区分；组件签名：

```js
PluginsPage({
  directoryEntrypoint,
  hostId,
  initialManageTab,
  manageOnly,
  mcpServerCreation,
  onManageTabSelect,
  children,
});
```

### 3.1 布局

```
[Tab 条: 插件 / Apps / MCPs / Skills / Marketplace(带计数)]      [搜索框 w-56]
└── 内容区（按当前 Tab 切换）
```

管理 Tab 的实现是 `Wc`（`plugins-page`:6985），Tab 定义顺序固定 **plugins → apps → mcps → skills → marketplace**。

### 3.2 Tab 过滤规则（A，逐字）

```js
const options = tabs.filter((e) => e.id === "mcps" || (showNonMcpTabs && e.count > 0));
```

- **`mcps` 永远显示**（即使数量为 0）；
- 其余 Tab 只有 `showNonMcpTabs`（= 插件功能总开关）为真**且计数 > 0** 时才出现。

这正好解释截图里**只有「插件 5」和「MCP 2」两个 Tab**：Apps / Skills / Marketplace 计数为 0 被过滤掉了。

### 3.3 顶部「添加 ▾」下拉（A）

管理模式下菜单项由能力位拼装（`plugin-request-empty-state` 的 `wi`）：

| 菜单项            | i18n id                                 | 条件                                                                                                                    |
| ----------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Create plugin     | `skills.appsPage.createPlugin`          | `canCreatePlugin = f && (hostId === 'local' \|\| activeProject != null) && creatorSkillPath != null`；不满足则 disabled |
| Create skill      | `skills.appsPage.createSkill`           | 同式，路径换成 `skill-creator/SKILL.md`；browse 态且当前是 Skills Tab 时才出现                                          |
| Add a marketplace | `skills.appsPage.addMarketplace`        | 有 `onAddMarketplace` 且（manage 态或 plugins Tab）                                                                     |
| Add MCP server    | `settings.mcp.addServerFromPluginsMenu` | **仅 manage 态**（就是截图的「添加」菜单里那一项）                                                                      |

「Create plugin / Create skill」不创建文件，而是**预填提示词并新开一个任务**，把
`plugin-creator` / `skill-creator` 的 `SKILL.md` 路径塞进 prompt（`gi({ creatorPath, isFirstOpen, kind })`），
并用 `has-opened-plugin-creator-prefill-v1` 记录是否首次打开。

### 3.4 搜索（A）

搜索框的占位/无障碍标签**按 Tab 取**（表在 `app-initial`:190548 起，函数 `Q$r(intl, tab)`）：

| Tab         | placeholder / label   |
| ----------- | --------------------- |
| plugins     | `Search plugins`      |
| apps        | `Search apps`         |
| mcps        | `Search MCP servers`  |
| skills      | `Search skills`       |
| marketplace | `Search marketplaces` |

元素 id 为 `plugins-page-manage-search`（管理态）/ `plugins-page-search`（浏览态）。

---

## 4. 五个管理 Tab 的内容与计数（A）

Tab 计数对象（`plugins-page`:6040 附近，逐字）：

```js
tabCounts = {
  apps:        installedApps.length,
  marketplace: isManagePage ? configMarketplaceNames.filter(...).length : marketplaces.length,
  mcps:        Object.keys(config.servers).length,   // 来自 config/read 的 mcp_servers
  plugins:     installedPlugins.length,              // createdByMe + installed + sharedWithYou + workspace
  skills:      skills.length,
}
```

| Tab             | 内容                                     | 主要组件                                             |
| --------------- | ---------------------------------------- | ---------------------------------------------------- |
| **Plugins**     | 已装插件（分组）+ 可安装插件；卡片见 §5  | `ea`（卡片，`installedStateAction: 'toggle'`，单列） |
| **Apps**        | 已连接 App 列表 + 推荐 App               | `ds`（`installedStateAction: 'toggle'`）             |
| **MCPs**        | MCP 服务器列表 + 详情编辑器              | `qo`（列表）/ `Po`（编辑器），见 §8                  |
| **Skills**      | 已装 Skills、推荐、Computer History 建议 | `Hs` / `zs` / `Bs`                                   |
| **Marketplace** | 市场列表：升级、移除、部分加载失败       | `_s` / `vs` / `ys` / `xs`                            |

**Marketplace Tab 的动作**：`skills.appsPage.marketplace.upgrade`（升级单个 / 全部）、
`remove`（带确认对话框 `removeDialog.*`），并按类型禁用：
`upgrade.builtInDisabled` / `upgrade.localDisabled`、`remove.builtInDisabled` / `remove.configuredDisabled`。

**插件 Tab 的分组（browse 态）**：`Created by you`（`skills.appsPage.section.createdByYou`）、
`Shared with you`（`.sharedWithYou`）、按市场分组 `plugins-marketplace-{name}`；
目录侧有三个 Tab：`openai`（公共）/ `workspace` / `personal`（`skills.appsPage.directoryTabs.*`），
另有 `directoryTabs.ariaLabel` = `Choose plugin directory`。
空状态：`skills.appsPage.empty.plugins`（`No plugins found`）等。

---

## 5. 插件卡片：状态与动作（A）

卡片组件 `ea`（`plugin-request-empty-state-e0c7cff2d8cb.js`:1922，131 个 memo 槽）是列表里的最小单元，
被插件 Tab、商店页、详情页共用同一套 `plugins.card.*` 文案。

### 5.1 卡片数据模型

远程插件摘要（`SYn`，`app-initial`:135237 附近）字段：

```js
{ canonicalAppId, displayName, description, logoPath, logoDarkPath, keywords,
  marketplaceName, marketplaceDisplayName, marketplacePath, remoteMarketplaceName,
  requiresLocalExecutor,
  plugin: { id: `${name}@${marketplace}`, name, installed, enabled, installedAt,
            authPolicy: 'ON_USE' | …, availability: 'AVAILABLE' | 'DISABLED_BY_ADMIN',
            disabledReason, eligiblePlanTypes, remotePluginId, shareContext, source: { type } } }
```

注意 `plugin.id` 是 **`名称@市场`** 的复合键，而 `remotePluginId` 才是后端 ID；
代码里到处是 `plugin.remotePluginId ?? plugin.shareContext?.remotePluginId ?? plugin.id` 的三级回退。

### 5.2 三种动作形态

`installedStateAction` 决定右侧渲染什么：`'toggle'`（管理列表，开关 + 悬浮「more」菜单）、
`'menu'`（菜单式，含 Enable/Disable/Uninstall）、`'status'`（只读状态）。

`'toggle'` 的「more」菜单项（按条件出现）：

| 菜单项                         | id                                                                          | 出现条件                                                                       |
| ------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Try now                        | `plugins.card.tryItNowMenuItem`                                             | 有 `onTryInChat` 且未被管理员禁用                                              |
| Share                          | `plugins.card.shareMenuItem`                                                | 插件可分享（有本地副本）                                                       |
| Copy link                      | `plugins.card.copyShareLinkMenuItem`                                        | 有 `copyLinkUrl` 或回调                                                        |
| Edit                           | `plugins.card.editMenuItem`                                                 | 个人本地插件 → 直接打开插件目录文件（`Ft({path, cwd: null})`）                 |
| Uninstall / Installed by admin | `plugins.card.uninstallMenuItem` / `plugins.installedByDefault.actionLabel` | 管理员预装时**换成不可点的「Installed by admin」**，红色 danger 只在可卸时出现 |

### 5.3 来源徽标（A）

卡片左侧图标按来源切换，全部有 tooltip：

| 来源         | 文案                                        | tooltip                                                                 |
| ------------ | ------------------------------------------- | ----------------------------------------------------------------------- |
| 本地个人市场 | `plugins.card.localPlugin` = `Local plugin` | `From your personal marketplace on this machine`                        |
| 文件夹市场   | `folderMarketplacePlugin`                   | `From a folder marketplace` / `From {marketplaceName}`                  |
| Git 市场     | `gitMarketplacePlugin`                      | `From a Git marketplace` / `From the {marketplaceName} Git marketplace` |
| 工作区       | `workspacePlugin`                           | `From your workspace` / `From your {workspaceName} workspace`           |
| 云端个人     | `userCloudPlugin`                           | `Created by you in the cloud`                                           |
| 远程开发机   | `remoteHostPlugin`                          | `From your remote host`                                                 |

### 5.4 状态与禁用（A）

- `plugins.card.enabledStatus` / `disabledStatus`、`enableButton`、`enable/disableToggleTooltip`；
- **管理员禁用**：`disabledByAdmin` = `Disabled by admin`，安装态 tooltip 为
  `disabledInstallTooltip` = `Access is turned off by your admin`，开关被禁用；
- **当前上下文不可用**：`unavailableInCurrentContext` = `Unavailable in this context`；
- **仅桌面端**：`plugins.card.desktopOnly` = `Desktop only`（浏览器目录里可见但不可装）；
- **不可用原因**：`plugins.disabledReason.planNotEligible` = `Not available on your plan`、
  `.requiredAppUnavailable` = `Required app unavailable`、`.unknown` = `Unavailable`；
- **分享者署名**：`plugins.card.sharedBy` = `Shared by {name}`；个人本地插件署名 `plugins.card.creator.you` = `You`。

Toast（都在共享 bundle 里）：`plugins.card.disableSuccess/enableSuccess/uninstallSuccess`、
`toggleError` = `Failed to update plugin`、`uninstallError` = `Failed to uninstall plugin`。

---

## 6. 插件生命周期与乐观更新（A）

### 6.1 安装 `installPlugin`

出处在 `app-primary`（`use-plugin-installation-*.js` 只是 90 B 的再导出 shim）。核心流程：

```
1. 账号守卫：f(accountId) 为假 → throw 'Plugin account changed before installing plugin'
2. requires_local_executor 检查：先 fetchQuery 插件详情，
   若 release.requires_local_executor === true → throw 'This plugin requires the desktop app'
3. 分流：
   托管插件 → POST /ps/plugins/{id}/install?includeAppsNeedingAuth=1  body {install_attempt_id}
              返回 app_ids_needing_auth → 组装 appsNeedingAuth（带 category/description/installUrl）
   本地插件 → S1r(...)（app-server 侧路径）
4. 埋点：CODEX_PLUGIN_INSTALL_OUTCOME_FAILED/SUCCEEDED + performance.now() 计时（毫秒）
5. 成功后刷新插件列表
```

对应的用户可见状态机在 `plugins.installModal.*`：安装前（`title` / `install`）、安装中（`installing`）、
装完引导连 App（`needsApps.title` = `Connect your apps to {pluginName}`、
`needsApps.tryInChat` = `Try {pluginName} now`、`needsApps.viewDetails`）、
依赖浏览器扩展（`browserExtension.*`、`codexChrome.description`、`edgeBrowserExtension.description`）。

失败与边界文案（都在共享 bundle）：`plugins.install.oauthTimedOut`（**OAuth 宽限期到点后回滚安装**）、
`plugins.install.refreshError`（装上了但列表刷新失败）、`plugins.install.skillCatalogRefreshError`
与 `plugins.skillCatalog.reloadError`（**插件变了但运行时技能目录刷不动**）、
`plugins.install.connectorUnavailable` = `App unavailable`。

另有 `plugins.install.bundleSuccess` = `{count} plugins installed`——**一次 OAuth 可装一组插件**。

### 6.2 启用 / 禁用（含乐观更新）

```js
// 托管插件
POST /ps/plugins/{plugin_id}/enable | /disable      // plugin_id = remotePluginId ?? id
// 本地插件
sendRequest('config/batchWrite', { edits: xSn({ pluginId, enabled }),
                                   filePath, expectedVersion, reloadUserConfig: true })
```

本地路径在请求前先做**乐观更新**：`cancelQueries([...])` → 遍历所有插件列表 query 打补丁（`z1r`）
→ 同时补丁 user config（`R1r`），并把 `previousPluginLists` / `previousUserConfig` 存下来供回滚。
埋点 `CODEX_PLUGIN_ACTION_TYPE_ENABLE|DISABLE` + `RESULT_INITIATED`。

### 6.3 卸载

```js
托管：POST /ps/plugins/{plugin_id}/uninstall
本地：C1r(scope, hostId, { pluginId: requestPluginId ?? pluginId })
```

卸载后会**额外刷新 App 列表**（`bZr`）——因为插件卸载会带走它带来的 App 连接；
失败日志为 `Failed to refresh apps after plugin uninstall`。

### 6.4 MCP 服务器

见 §8.5（走配置分层写入，不是插件接口）。

### 6.5 Skill 级开关

`POST /ps/plugins/{plugin_id}/skills/{skill_name}/enable|disable`——**插件内的单个 Skill 可以独立开关**。

---

## 7. 插件来源与市场（A）

### 7.1 来源枚举（`source.type`）

`curated`（官方精选）、`workspace`、`personal`、`external_agent_import`（从外部 agent 配置导入）、
`other`、`unspecified`。UI 上对应「Imported plugins」（`plugins.importedConnectors.*`：
`title` = `Imported plugins`、`finishSetup` = `Finish setup`、`connectApp` = `Connect app`、
`empty` = `No imported plugins`）。

### 7.2 添加市场对话框（A）

`plugin-request-empty-state` 的 `ri`（第 275 行起）：

| 字段         | id                                      | 说明                                                      |
| ------------ | --------------------------------------- | --------------------------------------------------------- |
| Source       | `skills.appsPage.addMarketplace.source` | 副标题写明支持 **GitHub repo / Git URL / 本地文件夹**三种 |
| Git ref      | `.refLabel`                             | 可选，占位 `main`                                         |
| Sparse paths | `.sparsePathsLabel`                     | 可选，占位 `plugins/codex`，按 `[\n,]+` 切分              |

提交时序列化为 `{ source, refName: string|null, sparsePaths: string[]|null }` → `marketplace/add`，
返回 `{ alreadyAdded, marketplaceName }`；`alreadyAdded` 为真表示重复添加。随后自动刷新插件列表。

### 7.3 市场的发现与升级

- 发现：项目内 `.agents/plugins/marketplace.json`、仓库根 `/marketplace.json`，
  以及 app-server 的 `plugin/list { cwds, marketplaceKinds }`；
- 远程目录：`includeRemoteCatalog`、`includeVerticalCatalog`、`hiddenMarketplaceNames`；
- 升级：`marketplace/upgrade { marketplaceName }`（`null` = 全部），
  结果里 `errors[]` 非空时提示 `plugins.marketplace.upgradeAllError` = `Some marketplaces failed to upgrade`；
- 移除：`marketplace/remove { marketplaceName }`。

---

## 8. MCP 服务器管理（A）

这是截图里「MCP 2」那个 Tab，也是整块功能里**实现得最独立**的一部分：它不碰 `/ps/*`，
完全围绕 **codex 分层配置** 转。

### 8.1 数据来源

```js
sendRequest('config/read', { includeLayers: true, cwd })
  → { config, origins, layers }
  → select 后得到：
     servers:          config.mcp_servers           // name → server
     configWriteTarget: 哪个 layer 可写 + filePath（keyPath = 'mcp_servers'）
     serverOrigins:     每个 server key 来自哪一层（probe 字段：enabled / command / url）
```

服务器对象形状（默认新服务器 `ss`）：

```js
{ command: '', args: [], env_vars: [], enabled: true }
```

**只读判定**：`serverOrigins[key].name.type === 'project'` → 该行只读（项目层配置不可在 UI 改）。

### 8.2 列表

| 区块       | 标题                                        | 内容                                                                                                                                                                                 |
| ---------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 我的服务器 | `settings.mcp.myServers` = `Servers`        | `config.mcp_servers` 里的服务器                                                                                                                                                      |
| 插件带来   | `settings.mcp.fromPlugins` = `From plugins` | 已装插件提供、但不在配置文件里的服务器。过滤条件：`ai(name)` 判为内部者排除、已在配置里排除、刚被卸载的排除（`_e` 记录），其余按 `Jo` 排序（`ai` / `Jo` 的真实语义未逐行确认，C 级） |

- 搜索：按 name / 显示名做小写包含匹配；
- 空状态：`settings.mcp.empty` = `No MCP servers connected`；搜索无结果 → `skills.appsPage.empty.mcps` = `No MCP servers found`；
- 头部动作：`settings.mcp.addServer` = `Add server`、`settings.mcp.restartApp` = `Restart`；
- **Restart 不是重启进程，而是发消息总线事件**：
  `dispatchMessage('codex-app-server-restart', { hostId, intent: 'restart' })`；
  另外订阅 `'codex-app-server-initialized'` 来清理本地鉴权状态。

行内动作（`ts` 组件）：`settings.mcp.server.login` = `Authenticate`（进行中 → `.authenticationStarting` = `Starting…`）、
`settings.mcp.server.settings` = `Settings`（齿轮）、`settings.mcp.server.enable` = `Enable`（开关）。

### 8.3 服务器编辑器（`Po`）

**名称** + **类型** 两个基础字段，类型是二选一的 segmented control：

| 传输              | 值                | 字段                                                                                                                                                                                      |
| ----------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `STDIO`           | `stdio`           | Command to launch（占位 `openai-dev-mcp serve-sqlite`）、Arguments（数组）、Environment variables（Record）、Environment variable passthrough（数组）、Working directory（占位 `~/code`） |
| `Streamable HTTP` | `streamable_http` | URL（占位 `https://mcp.example.com/mcp`）、Bearer token env var（占位 `MCP_BEARER_TOKEN`）、Headers（Record）、Headers from environment variables（Record）                               |

> 编辑态内部字段名和落盘名不同：`stdio.env`（Record）vs `stdio.envVars`（数组透传）、
> `http.httpHeaders` vs `http.envHttpHeaders`，保存时经 `Ro(draft)` 转换。

- 标题：已有 → `settings.mcp.detail.titleExisting` = `Update {name} MCP`；新增 → `.titleNew` = `Connect to a custom MCP`；
- **换传输类型必须先卸载**：`settings.mcp.detail.switchTransportNotice` = `If you would like to switch MCP server type, please uninstall first.`（编辑态只显示这句提示，不显示类型选择器）；
- 底部：`settings.mcp.detail.save` = `Save`、`.uninstall` = `Uninstall`（danger，仅已有服务器）；
- 错误：`.saveError` = `Could not save MCP server`、`.uninstallError` = `Could not uninstall MCP server`；
- 新增页右侧有 `settings.mcp.detail.docs.link` = `Docs`（外链 `target="_blank"`）。

### 8.4 OAuth 与客户端注册（A）

```js
sendRequest('mcpServer/oauth/login', { name, ...(supportsOauthClientRegistration && strategy !== 'auto'
                                             ? { clientRegistration: strategy } : {}) })
  → { authorizationUrl }
  然后用 open_in_browser_bridge 在外部浏览器打开（_n({ href, initiator: 'open_in_browser_bridge',
                                                  openTarget: 'external-browser' })）
```

- `authorizationUrl` 为空串或打开失败 → toast `Failed to start login for MCP server`（带 serverName 与 hostId 去重 id）；
- **能力门控**：`supportsOauthClientRegistration = appServerVersion === '0.0.0' || version >= '0.148.0-alpha.9'`，
  版本不够时**不发送** `clientRegistration` 字段；
- 注册策略三选一：`auto`（Automatic，默认）/ `cimd`（Client ID metadata document）/ `dcr`（Dynamic client registration），
  下拉的无障碍标签会把当前值读进句子（`settings.mcp.server.clientRegistration.label`）；
- 登录完成后调 `config/mcpServer/reload` 让 app-server 重载 MCP 服务器；
- 鉴权状态来自 `mcpServerStatus/list`（客户端方法 `listMcpServers`，按 `{options, params}` JSON 去重缓存），
  值 `notLoggedIn` 表示需要登录。

**真机复核（本仓库探针，A 级）**：上面这条链路已用
`probe/mcp-oauth-probe.mjs`（codex 0.154.0，自带受 OAuth 保护的 MCP server fixture）跑通，
细节见 [probe/README.md](probe/README.md) 结论九。三处需要写下来：① `oauthLogin/completed`
到达时 Server 已经变 `oAuth` / `connected`，紧接着的 `config/mcpServer/reload` 是冗余而非必需；
② 凭据落在 `<CODEX_HOME>/secrets/mcp_oauth.age`（age + scrypt，无明文），且**与 CODEX_HOME
路径绑定** —— 同一路径换进程仍有效，整份复制到新路径或只搬该文件都读不出来；③ `cimd` 需要授权
服务器元数据声明 `client_id_metadata_document_supported` 且 token 端点鉴权为 `none`，否则
`mcpServer/oauth/login` 直接报错。Syntropy 侧待接线（落到 [mcp-settings-integration.md](../docs/mcp-settings-integration.md) §7）。

### 8.5 写入路径（A，逐字）

```js
// 开关单个服务器
sendRequest("config/value/write", {
  keyPath: `mcp_servers.${key}.enabled`,
  value,
  mergeStrategy: "upsert",
  filePath: null,
  expectedVersion: null,
});

// 保存 / 卸载（走当前可写层，filePath 来自 configWriteTarget.filePath；
// 卸载 = value: null）。若找不到可写 config.toml：
throw Error("MCP server settings are unavailable"); // settings.mcp.noWritableConfig
```

本地插件的 enable/disable 用的是 `config/batchWrite`（§6.2），MCP 用的是 `config/value/write`——
**同一个「开关」概念，两条不同的写接口**，这是读这段代码最容易混的地方。

### 8.6 运行期

MCP 服务器装好之后的使用链路在 `conversation/` 与 `side-panel/`：`mcpServer/tool/call`（注入 `_meta.thread_id`）、
`mcpServer/resource/read`、`mcpServer/event/stream/start|stop`；MCP App 在侧栏以 iframe 渲染
（`mcp-extension-view-frame` / `mcp-extension-view-page` / `mcp-app-sandbox`），
并有 `mcp-app-follow-up-confirmation-dialog`、`mcp-extension-quick-action-dialog`、
`local-conversation-webmcp-tools-model`（WebMCP 工具模型）等配套件。**这些属于「用」而不是「管」，本文不展开。**

---

## 9. 插件详情页（A）

实现是 `plugin-detail-page-2f770d1328da.js`（161 KB / 8907 行，本族最大），
路由 `/plugins/:pluginId`，`PluginDetailPage` 与 `ManagePluginDetailPage` **共用同一实现**
（`plugin-detail-page-81e5d163cd3a.js` 是 133 B 的 shim，两个导出都指向它）。
它拥有本族最多的文案：`plugins.detail.*` 共 **136 条**。

### 9.1 页面骨架

| 区块               | 标题 id                                                                                                                                                       | 内容                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 面包屑             | `plugins.detail.breadcrumb.root` = `Plugins` / `.manage` = `Manage`                                                                                           | 从管理页进来时返回文案变成 `Manage`                                                  |
| 主操作             | `plugins.detail.enableInCodex` = `Enable`、`.addingToCodex` = `Installing`、`.disabledByAdminButton`、`.desktopOnly`、`.tryInCodex` = `Try now`、`.uninstall` | 与卡片同源的状态逻辑                                                                 |
| Includes           | `.includes.apps.title`、`.includes.skills.title`、`.includes.mcpServers.title`、`.includes.hooks.title`                                                       | **插件的「内容物」一览**，支持 `showMore` 折叠                                       |
| App setup          | `.includes.appSetup.title`                                                                                                                                    | 未配置的 App 依赖                                                                    |
| Works with         | `plugins.dependencies.heading`                                                                                                                                | 依赖的 provider 插件，见 §9.2                                                        |
| Connected accounts | `.accounts.title`                                                                                                                                             | 已连接账号，见 §9.3                                                                  |
| Information        | `.information`                                                                                                                                                | Category / Developer / Capabilities / Privacy Policy / Terms of Service / 不可用占位 |
| Hooks              | `.hooks.settings` = `Manage in settings`、`.includes.hooks.needsReview`、`.includes.hooks.trustAll`                                                           | 需要 review 才能跑的 hook                                                            |
| 试跑               | `.tryPluginOptions` = `More ways to try this plugin`                                                                                                          | 多个入口的下拉                                                                       |

`Includes` 的语义由开发者写在描述里，很能说明「插件是什么」：
**Apps + Skills + MCP servers + Hooks**（`includes.hooks.description` = `Run deterministic scripts during the task lifecycle`）。
另有 `plugins.detail.scheduledTasks.*`（`use-plugin-scheduled-tasks-*.js`）——插件可以带定时任务
（`pluginScheduledTasks.list(hostId)`，需要 `automations.local` 能力 + 两个 gate + `hostId === 'local'`）。

### 9.2 「Works with」依赖清单（A）

这是**最容易被忽略但信息量最大**的一节：它把插件声明的 provider 依赖按类别展示，
每项四态：

| 状态         | 文案 id                            | 语义（取自 description）                                                 |
| ------------ | ---------------------------------- | ------------------------------------------------------------------------ |
| 正常         | `plugins.dependencies.statusLabel` | `Required` / `Optional`；disabled 仅在**服务端明确回报 disabled** 时为真 |
| 计划限制     | `.planLabel`                       | `Not available on your plan`                                             |
| 管理员禁用   | `.adminLabel`                      | `Disabled by admin`                                                      |
| 需要工作区   | `.workspaceLabel`                  | `Requires a workspace`                                                   |
| 需工作区配置 | `.setupLabel`                      | `Requires workspace setup`                                               |
| 不可用       | `.unavailableLabel`                | `Not available`                                                          |

交互：`.expandLabel` / `.collapseLabel` 展开折叠、`.overflow` = `+{count}`、
`.error` = `Couldn't load dependencies`、`.retry`。

> `statusLabel` 的 description 特意强调：**它不代表已鉴权，也不是「请安装」的指令**——
> 这是个典型的「id 会骗人、description 才是真相」的例子。

### 9.3 已连接账号管理（A）

`.accounts.*`（24 条）描述了一个完整的**多账号**模型：

- 一个 provider 可以连**多个账号**（`.connectAnother` = `Connect another account`），
  每个账号可重命名（`.rename`、`.nickname`，**上限 64 字符**：`.nicknameTooLong`）；
- `.reconnect` 只重连该账号、`.disconnect` 只断开该账号（描述明确写「**不断开兄弟账号、不卸载插件**」）；
- 新账号按类型给默认昵称建议：`.suggestion.work` / `.personal` / `.school`；
- 边界：`.reconnectFirst`（旧 OAuth 账号缺 provider 身份时，必须先重连才能加新账号）、
  `.refreshError` = `Account updated, but couldn't refresh accounts`（**改成功了但刷新失败**——这类「半成功」文案在本族里反复出现，是刻意设计的）；
- 断开整 App：`plugins.detail.appDisconnected` / `appDisconnectError` / `appDisconnectRefreshError`。

### 9.4 分享状态提示（A）

详情页把「这个个人插件分享到什么程度」做成 tooltip：
`.shareNotSharedTooltip` = `Not shared`、`.shareSharedTooltip` = `Shared`、
`.shareInvitedTooltip` = `Only those invited`、`.shareWorkspaceTooltip` = `Anyone at workspace with the link`；
编辑分享需要**本地有副本**（`.shareLocalCopyRequiredTooltip`），
从外部市场导入的插件**不能分享**（`.importedExternalMarketplaceShareTooltip`）。

---

## 10. 分享与协作（A）

分享是「个人插件 → 云端 hosted 插件」的发布动作，实现在 `plugins-page-section-66d80bf4709b.js`。

### 10.1 分享对话框 `plugins.detail.shareDialog.*`

| 能力       | id                                                                                                                                           | 说明                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 标题       | `title` = `Share {name}`                                                                                                                     |                                                                       |
| 可见性     | `discoverability.*`                                                                                                                          | `PRIVATE` ↔ `UNLISTED`；保存时若目标里有工作区主体则自动取 `UNLISTED` |
| 工作区主体 | `workspaceShareTargetPlaceholder` / `workspaceShareTargetSearch` = `Add people or groups`、`removeSelectedUser`、`workspaceGroupMemberCount` | 支持**人 + 组**的自动补全                                             |
| 复制链接   | `copyLink` / `copied` = `Copied` / `copyShareLinkError`                                                                                      |                                                                       |
| 版本落后   | `sharedVersionOutOfDate` = `Shared version is out of date` + `updateSharedVersion` = `Update`                                                | **把本地更新版本重新上传**到已有分享                                  |
| 进行中     | `uploadingPlugin` = `Uploading`、`saving` = `Saving`                                                                                         | 两个阶段的文案不同                                                    |

服务端接口：`GET/PUT /ps/plugins/{plugin_id}/shares`（`expectedErrorStatuses: [400,403,404,409,422]`），
保存成功后**无条件刷新插件列表**（`ar(queryClient)`）；另外还有 app-server 侧的
`plugin/share/list`、`plugin/share/save`、`plugin/share/updateTargets`、`plugin/share/delete`。

### 10.2 个人插件生命周期

分享相关的错误文案自成一族（`plugins.manage.*` + `plugins.detail.*`）：
`loadSharingError` = `Couldn't load plugin sharing`、`updateSharingError`、`updateSharedVersionSuccess` = `Shared version updated`、
`updateSharedVersionError`。**托管插件**另有管理动作（`plugins.management.*`，属于 `/admin` 或创作者视图）：
`download` = `Download plugin ZIP`、`upload` = `Upload new version`、`delete` = `Delete plugin`、
`share` = `Share plugin`、`manageForWorkspace` = `Manage for workspace`、`loading` = `Loading controls…`。

---

## 11. 门控与限制（A）

插件管理的可见性/可用性由**五层**条件叠加，读代码时必须逐层看：

| 层               | 机制                                                                                                                                                                                                                                          | 证据                                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| 1. 功能总开关    | General 设置里的 `Plugins` 行：`Allow ChatGPT to use installed plugins`，切换调 `mutate({ featureName: 'plugins', enabled })`，**需要重启生效**（`restartNotice` = `Restart {appName} to apply this change`）                                 | `plugins-settings-row-87288c1b8f45.js` |
| 2. 设置节可见性  | slug 的 `visible()`；**26.903 记录：`plugins-settings` 与 `mcp-settings` 互斥**（开了插件，MCP 那一节从导航里被过滤掉），`skills-settings` 恒 false（`A(26.903)`，本次未重抽 settings shell 核验；当前截图「有插件、无 MCP 服务器」与其一致） | `settings-pages.md`                    |
| 3. 能力门控      | section capability `codexOrWorkLocal`                                                                                                                                                                                                         | `A(26.903)`                            |
| 4. 账号 / 计划   | `disabledReason.planNotEligible`、`eligiblePlanTypes`、`authPolicy: 'ON_USE'`、管理员 `DISABLED_BY_ADMIN` / 预装 `Installed by admin`                                                                                                         | A                                      |
| 5. 主机 / 执行器 | `requiresLocalExecutor` → `This plugin requires the desktop app`；远程开发机（`remoteHostPlugin`）；Host 不支持插件时整页替换为 `skills.appsPage.pluginsUnsupportedHost.title` / `.description`                                               | A                                      |

另外散落在代码里的 **Statsig gate id 字面量**（说明大量分支仍在灰度）：
`3350594700`（插件目录入口）、`2712711964`、`521320455`、`973546965`、`782250190`（托管插件管理能力位）、
`403472035`（新 App 生命周期）、`3309093858` / `4218407052`（插件定时任务）、`1349514884`（`hiddenPluginIds`）。

**账号守卫**：安装/卸载前都会校验账号未变（`Plugin account changed before installing/uninstalling plugin`），
分享保存前也校验（`Plugin account changed before updating plugin`）——因为插件是**账号级资源**。

### 11.1 推广激励（A）

`plugins.incentive.*`（21 条）是一套完整的**工作区积分推广**流程：安装插件可赚 workspace credits，
但需要**用户显式接受**（`consent.title` / `accept` = `Accept and install` / `installWithout` = `Install without reward`）、
**装 + 成功使用**两个条件（`consent.installStep` + `consent.useStep`）、
有**领取窗口**（`consent.windowDuration`）、
有**账号/工作区一致性要求**（`hostIdentityMismatch`：桌面与执行主机必须是同一账号+工作区）。
文案里明确「普通 ChatGPT 对话不算数」（`useStep` 的 description），
且 `workspaceCreditsAdded` 的 description 强调**只在 Billing 确认发放后**才提示。

---

## 12. 埋点 taxonomy（A）

安装包里带一整套 `CODEX_PLUGIN_*` 枚举字面量（proto 生成），可当作**功能地图**读：

| 枚举族                     | 取值                                                                                                                                                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SOURCE`                   | `UNSPECIFIED` / `CURATED` / `WORKSPACE` / `PERSONAL` / `OTHER` / `EXTERNAL_AGENT_IMPORT`                                                                                                                        |
| `DIRECTORY_ENTRYPOINT`     | `UNSPECIFIED` / `DIRECT` / `SETTINGS` / `SIDEBAR` / `OTHER`                                                                                                                                                     |
| `PAGE_NAME`                | `UNSPECIFIED` / `DIRECTORY` / `CATEGORY` / `WORKSPACE` / `PERSONAL` / `SEARCH` / `DETAILS`                                                                                                                      |
| `PAGE_REFERRER`            | 同上一族 + `DEEP_LINK`                                                                                                                                                                                          |
| `MARKETPLACE_SURFACE`      | `DIRECTORY` / `DETAILS` / `CONNECTOR_SETUP` / `DIRECTORY_SEARCH` / `SETTINGS` / `COMPOSER` / `AMBIENT_SUGGESTION` / `ONBOARDING` / `ONBOARDING_ROLE_PREINSTALL` / `GLOBAL_ANNOUNCEMENT` / `IN_CHAT_SUGGESTIONS` |
| `INSTALL_OUTCOME`          | `SUCCEEDED` / `FAILED`                                                                                                                                                                                          |
| `ACTION_TYPE`              | `INSTALL` / `ENABLE` / `DISABLE` / `REMOVE` / `PREPARE` / `IMPRESSION` / `OPEN_CONNECTOR_SETUP` / `CONNECT_CONNECTOR` / `SUGGESTION_INSTALL_CLICK`                                                              |
| `ACTION_RESULT`            | `INITIATED` / `SUCCESS` / `FAILURE` / `BLOCKED`                                                                                                                                                                 |
| `CLICK_TARGET`             | `PLUGIN_ROW` / `SUBMIT_SEARCH` / `STARTER_PROMPT` / `TRY_IN_TASK`                                                                                                                                               |
| `CREATOR_INVENTORY_RESULT` | `SUCCEEDED` / `FAILED`                                                                                                                                                                                          |

从这组枚举可以反推产品面：插件有**六个入口/页面**、**十一类曝光面**，
并且「创作者清单（creator inventory）」这条链路也已经在代码里了。

---

## 13. 与 26.903 快照的差异（A）

把插件族 36 个 chunk 在 26.908.9136.0 的实际字节数与 `code/`（26.903）逐模块索引对比：

**内容已变（17 个名字 / 19 个文件）**：`plugins-page` 122062→124548、`plugins-page-section` 49144→**82420**（+68%）、
`plugin-detail-page` 158998→161135、`settings-plugin-selection` 109372→**71559**（−35%）、
`plugins-store-page` 66752→67453、`plugin-request-empty-state` 77810→78619、
`mcp-settings` 729→811、`plugins-settings-row` 1945→2067、`plugins-settings` 90/2536→2692、
`category-plugins-query` 1773→1775、`thread-mcp-app-side-panel-tab` 533→572、
`mcp-extension-view-frame` 8708→8917、`mcp-tool-item-content` 33318→30580、
`composer-work-home-plugins-control` 6494→6651、`plugin-picker-menu-content` 8779→9005、
`local-conversation-webmcp-tools-model` 9683→9840、`webmcp-tool-calls` 978→956。

**新增（9 个名字 / 10 个文件）**：`plugin-mcp-app-deep-link-page`、`use-plugin-scheduled-tasks`、`use-plugin-installation`、
`mcp-extension-view-page`（196 B shim + 7315 B 实现）、`mcp-extension-quick-action-dialog`、
`mcp-app-sandbox`、`mcp-app-follow-up-confirmation-dialog`、`legacy-video-plugins`、`chartjs-plugin-zoom`（第三方，误命中）。

**未变（4 个名字）**：`sidebar-plugins-icon`、`mcp-app-analytics`、`mcp-extension-thread-side-panel-tab`，
以及 `plugins-settings` 那个 90 B 的 shim。

**同名多 hash / shim 现象**（26.908 新出现，读代码必踩）：
`plugins-settings` 有 90 B 与 2692 B 两个；`plugin-detail-page` 有 133 B 与 161135 B 两个；
`mcp-extension-view-frame` 有 104 B 与 8917 B 两个；`mcp-extension-view-page` 有 196 B 与 7315 B 两个。
**小的是 rolldown shim，大的才是实现。**

结论：**任何基于 `code/settings/plugins-*.js` 的插件结论都需要按本文重新核对**；
`code/plugins-26908/` 是 26.908 的可读版本。

---

## 14. 命名陷阱与读码提示

1. **`settings-plugin-selection-*.js` 名不副实**：它是**浏览器（browser-use）设置页**
   （42 条 `settings.browserUse.sitePermissions.*`），只顺带导出插件解析函数
   `Sr(plugins, pluginName, homeDirectory)`——按「当前市场 → `openai-curated` → 路径匹配」的优先级挑插件。
   该函数另有 2 条 `settings.plugins.controls.*` 文案。
2. **`chartjs-plugin-zoom`** 是第三方库，因名字含 "plugin" 进入本族，与插件系统无关。
3. **`/ps/mcp`** 是 Sites 连接器的 JSON-RPC 端点，不是 MCP 服务器管理。
4. **同名多 hash**：见 §13，先看体积再看名字。
5. **id 会骗人，description 才是真相**：例如 `plugins.dependencies.statusLabel` 的描述明确
   「不代表鉴权、不是安装指令」，`plugins.incentive.workspaceCreditsAdded` 的描述限定
   「只在 Billing 确认后才提示」。一次分析里最重要的信息几乎都在 `description` 里。
6. **`plugins.skills.appsPage.*` 是共享命名空间**：插件页和 Skills&Apps 页共用同一批 id，
   只靠 `skills.appsPage.manageTab.*` 之类的子命名空间区分；读 `skills.appsPage.*` 时不要默认它是 Skills。

---

## 15. 复现与证据索引

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.908.9136.0_x64__2p2nqsd0c76g0\app\resources\app.asar"

# 1. 先给当前版本存档（下次升级才有 diff 基线）
node codex_app_rev\code\tools\inventory.mjs $A codex_app_rev\.work\plugins908\inventory-26908.json

# 2. 抽取插件族（含 app-initial / app-primary 共享 bundle，light-format）
node codex_app_rev\.work\plugins908\pull.mjs  $A codex_app_rev\.work\plugins908 "(plugin|mcp)"

# 3. 收割 i18n 描述符 -> 417 条插件/MCP 管理文案
node codex_app_rev\.work\plugins908\harvest.mjs

# 4. 落盘到 code/plugins-26908（32 chunk + _INDEX.json + _MESSAGES.json）
node codex_app_rev\.work\plugins908\stage.mjs
node codex_app_rev\.work\plugins908\stage2.mjs
node codex_app_rev\code\tools\catalog.mjs codex_app_rev\code\plugins-26908 codex_app_rev\code\plugins-26908\_CATALOG.json

# 5. 版本差异（对比 code/ 的 26.903 全模块索引）
node codex_app_rev\.work\plugins908\cmp3.mjs
```

**产物索引**

| 产物                                    | 内容                                                                                        |
| --------------------------------------- | ------------------------------------------------------------------------------------------- |
| `code/plugins-26908/`                   | 26.908 插件族代码（32 chunk / 1.08 MB）+ `_INDEX.json` + `_CATALOG.json` + `_MESSAGES.json` |
| `.work/plugins908/pretty/`              | 含共享 bundle 的完整格式化副本（gitignored）                                                |
| `.work/plugins908/i18n-all.json`        | 35 个文件里全部 7383 条描述符（插件族 + 共享 bundle）                                       |
| `.work/plugins908/rpc-methods.json`     | 从这 35 个文件里抽出的全部 `sendRequest` 方法名                                             |
| `.work/plugins908/inventory-26908.json` | 26.908.9136.0 的 9213 条档案清单（下次升级的 diff 基线）                                    |
| `plugin-management.md`                  | 本文                                                                                        |

**关键 chunk 定位（26.908.9136.0）**

| 关注点                                           | chunk                                                                               |
| ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| 管理页主体 / Tab / MCP 列表与编辑器              | `plugins-page-6d15a974f108.js`                                                      |
| 设置页包装（含 `manageOnly`）                    | `plugins-settings-c02739de4e70.js`、`mcp-settings-da7749534a45.js`                  |
| 插件卡片 / 添加市场对话框 / 顶部 Add 菜单        | `plugin-request-empty-state-e0c7cff2d8cb.js`                                        |
| 分享对话框 / 托管插件管理                        | `plugins-page-section-66d80bf4709b.js`                                              |
| 详情页（含依赖、账号）                           | `plugin-detail-page-2f770d1328da.js`                                                |
| 目录 / 商店 / 分类                               | `plugins-store-page-39507f93baff.js`、`category-plugins-query-83e1d3fb8cd4.js`      |
| 安装 / 启停 / 卸载 / 市场 / `config/read` 等实现 | `app-initial-bcc2ff475eb6.js`、`app-primary-b36a719dba75.js`（共享 bundle，未入库） |

### 已知局限

1. **未做运行时验证**：全部结论来自静态分析；Statsig gate 与账号态会改变实际可见性，
   §11 里列的 gate id 只是「代码里存在的判定」，不等于当前账号下一定走到哪支。
2. **`code/` 的其余部分仍是 26.903**：本文只重抽了插件族；引用 `App` / `Skills` / `Hooks` 等
   邻近功能的细节时，仍以 26.903 的既有文档为准。
3. **settings 外壳的 `visible()` 未重抽**：§11 第 2 层（`plugins-settings` 与 `mcp-settings` 互斥）沿用 26.903 结论。
4. **标识符已丢失**：文中出现的函数名（`Ro`、`xSn`、`ea`、`qo`、`Po`、`Wc`、`wi`、`Sr` 等）都是
   压缩后的真实名字，不是语义重命名；用它们可以在 `code/plugins-26908/` 里**直接搜到**。
