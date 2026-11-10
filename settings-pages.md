# 配置及其各个配置页面（Settings）

> **26.1016 快照（历史）**。53 项导航、54 个 slug、55 个 loader；
> 代码在 `code/app-261016/settings/`，注册表在
> `code/app-261016/settings/_SETTINGS_MAP.json`。旧的 26.903 / 26.928 /
> 26.1013 数据保留作为对照；**26.1103 的设置注册表见
> [settings-pages-261103.md](settings-pages-261103.md)**（53 slug / 4 导航组 / 41 门控）。

代码位置：`code/settings/`，子目录 `shell/`（设置窗口外壳与通用行组件）、`pages/`（35 个配置页）、`onboarding/`、`search-index/`、`_deps/`。
权威注册表：**`code/settings/_SETTINGS_MAP.json`**（由 `code/tools/settings-map.mjs` 从 `app.asar` 自动生成）。
文案证据：`code/_catalog/i18n-messages.json` 中 `settings.*` 共约 **2400 条**。

设置界面是**完全数据驱动**的：三个静态注册表 + 一个可见性 hook 决定用户看到什么。

```
app-initial 里的三张表                        use-visible-settings-sections
┌────────────────────────────┐               ┌──────────────────────────────┐
│ 1. slug 列表（36 个，"."拼接）│               │ visible(slug)  → 布尔        │
│ 2. [{slug}] 有序数组（35 个） │  ───────────▶ │ isLoading(slug) → 布尔       │
│ 3. {slug: lazy(import)} 加载表│               │ → visibleSettingsSections    │
└────────────────────────────┘               │ → settingsNavigationSections   │
        + 图标映射表（34 项）                  │ → activeSettingsSection        │
        + capability 映射表（34 项）           │ → shouldRedirect…/shouldRender…│
                                             └──────────────────────────────┘
```

---

## 1. 导航顺序与实现 chunk（35 项）

`_SETTINGS_MAP.json` 的 `nav_order` 就是设置左栏的显示顺序。“可见性”一列来自 `use-visible-settings-sections-cc4e77dbddd0.js` 里的 `switch (e.slug)`，`true` = 无条件显示，`false` = 本版直接隐藏，其余为条件门控。

|   # | slug                 | 组件                           | 实现 chunk                                         |   大小 | capability       | 可见性                           |
| --: | -------------------- | ------------------------------ | -------------------------------------------------- | -----: | ---------------- | -------------------------------- |
|   1 | `general-settings`   | GeneralSettings                | `general-settings-9d83727e851d.js` ⤷shim           | 114 KB | —                | true                             |
|   2 | `notifications`      | NotificationsSettingsPage      | `notifications-settings-dfc383906b35.js` ⤷shim     |   9 KB | —                | **false**                        |
|   3 | `import`             | ImportSettings                 | `import-settings-8fbd0a960585.js`                  |  49 KB | codexOrWorkLocal | 条件                             |
|   4 | `profile`            | Profile                        | `profile-bf2928c08023.js`                          |  98 KB | codex            | 条件（`isProfileVisible`）       |
|   5 | `security`           | ChatGptSecuritySettings        | `security-settings-f2893aaee7b5.js`                |  84 KB | chatGpt          | **false**                        |
|   6 | `account`            | ChatGptAccountSettings         | `account-settings-df083ac9d1a2.js`                 |  33 KB | chatGpt          | **false**                        |
|   7 | `appearance`         | AppearanceSettings             | `general-settings-9d83727e851d.js` ⤷shim           | 114 KB | —                | true                             |
|   8 | `voice`              | VoiceSettings                  | `voice-settings-c8dc0e3ed346.js`                   |  33 KB | codex            | 条件                             |
|   9 | `storage`            | ChatGptStorageSettings         | `storage-settings-91be4866b893.js`                 |   4 KB | chatGpt          | **false**                        |
|  10 | `pets`               | PetsSettingsRoute              | `pets-settings-route-c75a444800aa.js`              |  32 KB | codex            | true                             |
|  11 | `chronicle`          | ComputerHistorySettingsPage    | `chronicle-settings-page-cd85637c8d44.js`          |  85 KB | codexOrWorkLocal | 条件                             |
|  12 | `appshots`           | AppshotsSettings               | `appshots-settings-3d0ba53e7730.js`                |  12 KB | codexOrWorkLocal | 条件                             |
|  13 | `git-settings`       | GitSettings                    | `git-settings-19e05f7b3976.js`                     |  24 KB | codexLocal       | true                             |
|  14 | `connections`        | RemoteConnectionsSettings      | `remote-connections-settings-c75eeb61a39d.js`      | 165 KB | codexLocal       | 条件                             |
|  15 | `cloud-settings`     | CloudPreferencesSettings       | `cloud-preferences-settings-b8c60aa76a25.js`       |   9 KB | codexLocal       | **false**                        |
|  16 | `cloud-environments` | CloudEnvironmentsSettingsPage  | `cloud-environments-settings-page-7765ca09b9af.js` |  70 KB | codexLocal       | **false**                        |
|  17 | `code-review`        | CodeReviewSettings             | `code-review-settings-f64eacc74392.js`             |  14 KB | codexLocal       | **false**                        |
|  18 | `local-environments` | LocalEnvironmentsSettings      | `local-environments-settings-page-2caf15c22d59.js` |  28 KB | codexLocal       | true                             |
|  19 | `worktrees`          | WorktreesSettingsPage          | `worktrees-settings-page-8aff7d1210a1.js`          |  27 KB | codexLocal       | true                             |
|  20 | `agent`              | AgentSettings                  | `agent-settings-bfb770313a62.js`                   |  57 KB | codexOrWorkLocal | true                             |
|  21 | `personalization`    | ChatGptPersonalizationSettings | `personalization-settings-c65fe8b8e131.js`         | 116 KB | —                | true                             |
|  22 | `keyboard-shortcuts` | KeyboardShortcutsSettings      | `keyboard-shortcuts-settings-d3c0c97703d3.js`      |  22 KB | codex            | true                             |
|  23 | `codex-micro`        | CodexMicroSettings             | `codex-micro-settings-4c6e164f0143.js`             | 106 KB | codexLocal       | 条件                             |
|  24 | `usage`              | UsageSettings                  | `settings-5112d5d47fbe.js`                         |  91 KB | codex            | 条件（`isUsageSettingsVisible`） |
|  25 | `billing`            | GeneralSettings                | `general-settings-9d83727e851d.js` ⤷shim           | 114 KB | chatGpt          | **false**                        |
|  26 | `analytics`          | UsageAnalyticsSettings         | `billing-analytics-3bae5ee4e65b.js` ⤷shim          | 174 KB | codex            | 条件                             |
|  27 | `consumer-view`      | ConsumerViewSettings           | `billing-analytics-3bae5ee4e65b.js` ⤷shim          | 174 KB | codex            | 条件                             |
|  28 | `debug`              | DebugSettings                  | `debug-settings-12f9552b6e39.js`                   |   7 KB | —                | 条件（debug 菜单）               |
|  29 | `browser-use`        | BrowserUseSettings             | `browser-use-settings-8363eb67ab73.js`             |  87 KB | codexOrWorkLocal | 条件                             |
|  30 | `computer-use`       | ComputerUseSettings            | `computer-use-settings-9e45b1da4782.js`            |  61 KB | codexOrWorkLocal | 条件                             |
|  31 | `mcp-settings`       | McpSettings                    | `plugins-settings-711c233db56c.js` ⤷shim           |   2 KB | codexOrWorkLocal | true                             |
|  32 | `hooks-settings`     | HooksSettings                  | `hooks-settings-901cef002341.js`                   |  35 KB | codexLocal       | true                             |
|  33 | `plugins-settings`   | PluginsSettings                | `plugins-settings-711c233db56c.js` ⤷shim           |   2 KB | codexOrWorkLocal | 条件                             |
|  34 | `skills-settings`    | SkillsSettings                 | `skills-page-3b7157309058.js` ⤷shim                |  16 KB | codexOrWorkLocal | **false**                        |
|  35 | `data-controls`      | DataControlsSettings           | `data-controls-8fe0b8b2caf1.js`                    |  34 KB | codex            | 条件                             |

不在 `nav_order` 里但存在于注册表的两个 slug：

- `environments` → `SettingsExternalSection`，文案 `settings.section.external` = **“Opens in your browser during Alpha”**，即 Alpha 期占位页；
- `teams` → 复用 `GeneralSettings`，且 `visible` 直接 `return !1`；app-initial 里还有一条兜底 `if (e === "teams") return M3["general-settings"]`。

### 组件复用关系（`delegates_to`）

| slug                             | 实际渲染的实现                                                                |
| -------------------------------- | ----------------------------------------------------------------------------- |
| `appearance`、`billing`、`teams` | 复用 `general-settings-9d83727e851d.js` 导出的子组件                          |
| `analytics`、`consumer-view`     | 复用 `billing-analytics-3bae5ee4e65b.js`，靠 `scope: "workspace"              | "business" | "consumer"`与`workspaceTaskUsage` 区分 |
| `mcp-settings`                   | 复用 `plugins-settings-711c233db56c.js`，传 **`manageOnly: true`**            |
| `skills-settings`                | 复用 `skills-page-3b7157309058.js`                                            |
| `cloud-settings`                 | 复用 `cloud-preferences-534ab4bdf935.js` + `segmented-toggle-30e6111a9bfb.js` |
| `code-review`                    | 复用 `cloud-preferences-534ab4bdf935.js`                                      |

**shim 现象**：`general-settings-5a1b38565b24.js` 这类 0.1 KB 文件是 rolldown 的再导出壳：

```js
import { i as e, o as t } from "./general-settings-9d83727e851d.js";
t();
export { e as GeneralSettings };
```

因此“按 chunk 名找页面”会踩坑，必须按 `_SETTINGS_MAP.json` 的 `resolved_chunk` 定位。`code/tools/settings-map.mjs` 会自动跟随 shim（并跳过每个 chunk 都会 import 的 `rolldown-runtime` / `app-initial` / `app-primary`）。

## 2. capability 门控

`Yt` 表把每个 slug 映射到一个能力键，四个能力键由四个 hook 提供 `{available, isLoading, reason}`：

| capability         | 含义                                                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatGpt`          | ChatGPT 账号态能力（`account`/`billing`/`security`/`storage`）                                                                                       |
| `codex`            | Codex 登录态能力（`analytics`/`consumer-view`/`data-controls`/`keyboard-shortcuts`/`pets`/`profile`/`usage`/`voice`）                                |
| `codexLocal`       | Codex **本地**执行能力（`cloud-*`/`code-review`/`codex-micro`/`connections`/`git-settings`/`hooks-settings`/`local-environments`/`worktrees`）       |
| `codexOrWorkLocal` | Codex 或 Work 的本地能力（`agent`/`appshots`/`browser-use`/`chronicle`/`computer-use`/`import`/`mcp-settings`/`plugins-settings`/`skills-settings`） |

门控逻辑（去压缩）：

```js
visible = (section) => {
  const capKey = Yt[section.slug];
  if (capKey != null && !capabilities[capKey]) return false; // 能力不可用 → 隐藏
  if (!isElectron && !ALLOWED_ON_WEB.includes(section.slug)) return false;
  switch (section.slug) {
    /* 每 slug 的额外条件 */
  }
};
```

`ALLOWED_ON_WEB`（`qt`）= 非 Electron 环境也允许的 10 项：

```
profile, agent, personalization, mcp-settings, plugins-settings,
hooks-settings, local-environments, worktrees, data-controls, voice
```

默认落地页：Electron 下是 `Ce`（另一常量），非 Electron 下是 `agent`（`Jt = "agent"`）。找不到目标 section 时会回落到 `Z.find(slug===default)?.slug ?? Z[0]?.slug ?? default`。

### 逐 slug 的条件（`visible` switch）

```
appshots           → 该能力开关为真
plugins-settings   → 插件功能开关（且会同时把 mcp-settings 从导航里过滤掉，二者互斥）
skills-settings    → false
connections        → 有远程能力 且 非（某互斥态）
usage              → isUsageSettingsVisible
billing            → false
analytics          → isUsageSettingsVisible && (是企业计划 ? 计划判定 && 开关 : 开关)
consumer-view      → !isLoading && !isUsageAccessLoading && 计划属于 {FREE, GO} 之外的企业试用组合
teams              → false
profile            → isProfileVisible
computer-use       → 远程可用 || 本地可用 || 显示“被禁用”态
browser-use        → statsig 可用 || 本地可用 || 显示“被禁用”态
appearance         → true
chronicle          → isElectron && !chronicle.isLoading && chronicle.available
voice              → 语音开关 || dictation.composer 可用 || dictation.global 可用
debug              → allowDebugMenu(buildFlavor) || isGpuTearingDebugEnabled
pets / git-settings / worktrees / local-environments / environments → true
import             → !isLoading && 导入开关 && !mcp 互斥态
data-controls      → !某开关 || false
account / security / storage / code-review / cloud-settings / cloud-environments / notifications → false
general-settings / agent / personalization / hooks-settings / mcp-settings / keyboard-shortcuts → true
codex-micro        → 硬件开关 && 设备已连接 === true
```

`computer-use` / `browser-use` 的“被禁用”态有明确的 reason 字符串，值得记录：

```
statsig-disabled                 实验平台关闭
config-requirement-disabled      配置要求不满足
wsl-disabled                     WSL 环境不支持
```

### `isLoading` switch（决定路由是否显示骨架）

`shouldRenderRouteContent = !isLoading`，即目标 section 仍在探测能力时先不渲染内容。各 slug 的 loading 来源：`chronicle → chronicle.isLoading`；`voice → isLoading || dictation.composer.loading || dictation.global.loading`；`computer-use → remote.isLoading || local.isLoading`；`browser-use → statsig.isLoading || local.isLoading || 通用 loading`；`usage → isUsageSettingsAccessLoading || (FREE/GO 计划 && 余额加载中)`；`profile → isProfileVisibilityLoading`；`appshots`/`analytics`/`consumer-view`/`debug`/`import`/`codex-micro` → 通用 loading；其余（`appearance`、`pets`、`general-settings`、`agent`、`git-settings`、`data-controls`、`code-review`、`cloud-*`、`personalization`、`storage`、`account`、`security`、`notifications`、`keyboard-shortcuts`、`local-environments`、`worktrees`、`environments`、`mcp-settings`、`connections`、`plugins-settings`、`skills-settings`、`hooks-settings`、`billing`、`teams`）→ `false`。

Hook 的完整返回值：

```js
{
  (activeSettingsSection, // 当前应显示的 slug（含回落）
    settingsNavigationSections, // 左栏项（已剔除被 plugins 互斥掉的 mcp-settings）
    visibleSettingsSections, // 通过门控的全集
    showEnterpriseUsageLabel, // 企业计划 && 存在 analytics section
    shouldRedirectToVisibleSettingsSection,
    shouldRenderRouteContent);
}
```

## 3. 设置搜索索引

`search-index/_virtual_settings-search-documents-1358c5ba26d1.js`（**475 KB**，虚拟模块，文件名以 `_virtual_` 开头）是设置内搜索的离线索引：把每个 section 的**全部可搜索文案**预先展开成 `{defaultMessage, id}` 数组。它覆盖 **17 个 section**：

```
account  agent  analytics  appearance  appshots  billing  chronicle
connections  debug  personalization  pets  profile  security  storage
usage  voice  worktrees
```

注意这 17 个与导航的 35 个**不一致**：搜索索引只覆盖“文案量大、用户会搜”的部分，`general-settings`、`keyboard-shortcuts`、`mcp-settings` 等未建索引（它们本身项少或有独立 UI）。这个文件因此也是一份极好的**按 section 归类的完整文案清单**。

## 4. 各配置页的内容分组

从 i18n id 的 `*.groupTitle` / `*.sectionTitle` 后缀可还原每页的分组结构（共 174 个标题）：

| 页                                                   | 分组                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **general**                                          | General、Preferences、Theme（含 `Import theme`）、Composer（`Plain text composer`、`Send shortcut`、`Follow-up behavior`、`Show context window usage`）、Branch format、Notifications（`Turn completion notifications`、`Enable permission notifications`）、`Show in menu bar`(macOS)、`Prevent sleep while running`、`Popout Window`（+ `Popout Window hotkey`、`Default to standalone chat`）、`Open source licenses`、Language（`Auto detect`）、IDE |
| **agent**                                            | Agent defaults、Model features、Default permissions、Permissions、Full access、`Make Full Access available?`、`Allow Codex to change its settings?`、Custom config.toml settings、Workspace Dependencies、Import external agent config、Suggested prompts（`settings.agent.ambientSuggestions.groupTitle`）                                                                                                                                              |
| **personalization**                                  | Codex instructions、Codex memory                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **usage**                                            | Plan usage、Credits used、Credits history / Credit usage history、Auto-reload credits、Usage history、Messages、Lines of code、Tool activity、Product activity、Code review（含 `{chart, select, issues {Issues found} reviews {PRs reviewed} priorities {Issues by priority} reactions {Reactions} sentiment {Reaction sentiment}}`）                                                                                                                   |
| **browserUse**                                       | General、Permissions、Custom permissions、`Add site permission`、Extensions、Downloads / Download history、Browsing history、Autofill and passwords、Clear browsing data、Developer mode、`Enforce CSP in developer mode`、Import from your browser、`Administrator approval required`                                                                                                                                                                   |
| **computerUse**                                      | Control、Permissions、Read access、Always-allowed apps、`Always allowed to send`、Any App、More browsers、Add a chat、以及删除已保存权限的确认弹窗                                                                                                                                                                                                                                                                                                       |
| **chatGpt**（account/security/storage 共享命名空间） | Saved memories、Saved memories history、`About memory`、Filter、Sort、Advanced account security、Multi-factor authentication (MFA)、Trusted Access for Cyber、`Sign in with ChatGPT`、`Delete account—are you sure?`、`Turn off automatic management?`                                                                                                                                                                                                   |
| **chronicle**                                        | `Let ChatGPT follow your work`、History、Permissions、`You're in control.`                                                                                                                                                                                                                                                                                                                                                                               |
| **remoteConnections**                                | `Control other devices from this Mac`、`Devices you can control from this Mac`、`Devices that can control this Mac`、Add SSH Connection、Add a device、`Allow devices to control this connection?`、`Approve on your device to use this connection remotely`、Login required、Other settings、`Couldn't load device list`                                                                                                                                |
| **cloudEnvironments**                                | Cloud environment、Create / Edit / Delete `{environmentName}?`、`Reset cached containers?`                                                                                                                                                                                                                                                                                                                                                               |
| **localEnvironments**                                | Actions、Create / Edit local environment、Setup script environment variables、Cleanup script、Select a project、`Local environments unavailable`                                                                                                                                                                                                                                                                                                         |
| **worktrees**                                        | Worktree、`No worktrees yet`、`Unable to load worktrees`、`Disable automatic worktree deletion?`                                                                                                                                                                                                                                                                                                                                                         |
| **codexMicro**                                       | Layout、Knob、Knob controls、Analog stick、`Assign agent key {position}`、Edit keycap、`Remove {deviceName}?`、`Reset keyboard layout?`                                                                                                                                                                                                                                                                                                                  |
| **mcp**                                              | `Connect {appName}`、`Grant access to GitHub repositories`、`Choose Google plugins to install`、`Choose Microsoft plugins to install`                                                                                                                                                                                                                                                                                                                    |
| **import**                                           | Automatic sync、Needs attention                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **keyboardShortcuts**                                | Number shortcuts、`Open web link in default browser`、`Reset all keyboard shortcuts?`                                                                                                                                                                                                                                                                                                                                                                    |
| **codeReview**                                       | Personal preferences、Personal security review preferences                                                                                                                                                                                                                                                                                                                                                                                               |
| **git**                                              | `Watch and fix pull requests`                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **dataControls**                                     | `Delete archived chat?`、`Delete all archived local chats?`、`Delete all in project?`                                                                                                                                                                                                                                                                                                                                                                    |
| **debug**                                            | Chrome debug pages                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **appshots**                                         | `Take an appshot to show ChatGPT your frontmost window`                                                                                                                                                                                                                                                                                                                                                                                                  |
| **pets / mini / toys**                               | Pick a pet、Custom pets、Create pet、Appearance、My pets、Mini、Toys、None                                                                                                                                                                                                                                                                                                                                                                               |
| **automations**                                      | Notifications                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **hostDropdown**                                     | Host（切换设置作用域到某个 host）                                                                                                                                                                                                                                                                                                                                                                                                                        |

## 5. 设置页的通用外壳

每个页面都是同一个骨架（以 `mcp-settings` 为例，去压缩后）：

```jsx
<SettingsSectionShell // app-initial 导出的 JS
  title={<SettingsSectionTitle slug="mcp-settings" />} // BS
  subtitle={
    <FormattedMessage
      id="settings.section.mcp-settings.subtitle"
      defaultMessage="Connect external tools and data sources"
    />
  }
>
  <PluginsSettings manageOnly />
</SettingsSectionShell>
```

外壳相关 chunk 在 `settings/shell/`：

| chunk                                                                              | 作用                                       |
| ---------------------------------------------------------------------------------- | ------------------------------------------ |
| `settings-page-ce3b564aee3c.js` (35 KB)                                            | 设置窗口页面骨架（左栏 + 内容区）          |
| `settings-5112d5d47fbe.js` (150 KB)                                                | 设置核心：section 渲染、`usage` 页实现     |
| `settings-plugin-selection-995ee29263c7.js` (107 KB)                               | 插件勾选 UI（Google/Microsoft 插件安装流） |
| `use-visible-settings-sections-cc4e77dbddd0.js` (31 KB)                            | 本文 §2 的可见性 hook                      |
| `settings-route-state-24ba1ff4c511.js`                                             | 路由状态（当前 slug）                      |
| `settings-host-dropdown-a80e924edf7c.js`                                           | Host 作用域下拉                            |
| `settings-command-menu-section-items-9ce3208ec6f0.js`                              | 命令面板里的设置项                         |
| `settings-row-disclosure-d65042756aaf.js` / `settings-loading-row-de4ab81779d6.js` | 通用行组件                                 |
| `settings-external-section-944b703ae6e4.js`                                        | “Opens in your browser during Alpha” 占位  |
| `settings-70b07b20c870.js` / `settings-8KXOPtTT-*.js`                              | 小 shim                                    |

浏览器深链：`account` → `https://chatgpt.com/#settings`，`securitySettings` → `https://chatgpt.com/open-security-settings`（两者的图标与文案在 `use-visible-settings-sections` 里以 `yt` 映射表定义）。

## 6. 设置的持久化路径

- **Codex 侧配置**（agent / git / hooks / mcp / worktrees / local-environments 等）→ `config/value/write`、`config/batchWrite`、`config/read`、`config/mcpServer/reload` JSON-RPC，最终落到 `%USERPROFILE%\.codex\config.toml`。`agent` 页还提供 `codex.profileDropdown.openConfigToml` = **“Open config.toml”** 与 **“Open config.toml in WSL environment”** 直接打开文件。
- **ChatGPT 账号侧配置**（account / security / storage / personalization / data-controls）→ `https://api.openai.com/...` 与 `chatgpt.com` 后端接口。
- **应用侧 UI 偏好**（主题、侧栏排序、tab 布局、pinned 顺序）→ Electron userData 与 `.codex-global-state.json`。
- **实验开关** → Statsig（`api.oaistatsig.com` / `statsigcdn.openai.com` / `statsigapi.net`），reason 字符串 `statsig-disabled` 即来源于此。

## 7. Onboarding / 首启

`settings/onboarding/`：

| chunk                                                                                         | 大小         | 说明                                                                             |
| --------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------- |
| `onboarding-page-e52fd2822434.js`                                                             | 219 KB       | 首启引导主页（`electron.onboarding.*` **454 条**文案，是单个命名空间里第二大的） |
| `login-route-ad8eaa2aab78.js`                                                                 | 43 KB        | `/login` 路由                                                                    |
| `security-route-363ce6c388ba.js`                                                              | 212 KB       | `/security/*` 安全工作台                                                         |
| `chatgpt-onboarding-dialog-4f379e2138db.js`                                                   | 6 KB         | ChatGPT 引导弹窗                                                                 |
| `onboarding-login-content-cfb6f644e3a7.js`                                                    | 3 KB         | 登录内容                                                                         |
| `wallet-onboarding-announcement-{content,modal}`                                              | 41 KB / 8 KB | 钱包/支付引导公告                                                                |
| `worktree-onboarding-banner-controller` / `worktree-onboarding-state`                         | 3 KB / 2 KB  | worktree 引导横幅                                                                |
| `onboarding-entrypoint` / `onboarding-interactive-dynamic-tools` / `onboarding-mail-provider` | ~0–1 KB      | 入口与子能力 shim                                                                |

路由侧还有 `/first-run`、`/welcome`、`/select-workspace`（见 `code/workspace/`）。

---

## 8. 26.928 的注册表变化（2026-10-01 采集，**本节是 A 级**）

> 本节结论来自 **`26.928.3736.0`**（应用 `26.928.31416`）的实测，与本文 §1–§7 的
> 26.903 表格**不是同一版本**。chunk hash 已全部变化，§1 的实现 chunk 列不要跨版本引用。
> Computer Use / Browser / Appshots 三个页面的完整拆解见
> [computer-use.md](computer-use.md)。

### 8.1 导航表规模

| 表                         |                                     26.903 |                           26.928 |
| -------------------------- | -----------------------------------------: | -------------------------------: |
| 有序描述符数组（导航顺序） |                                      35 项 |                        **50 项** |
| slug 全表                  | 37 个（35 导航 + `environments`、`teams`） | **51 个**（50 + `environments`） |

新增的 14 个 slug（无删除项）：

```text
age  agreements  parental-controls  trusted-contact  safety  time-management
work-settings  ads-controls  codex-cloud  usage-code-review  extension
file-type-handlers  cloud-computer  passwords
```

新增顺序里值得注意的是：

- `age` / `agreements` / `parental-controls` / `trusted-contact` / `safety` /
  `time-management` 集中在注册表**最前面**（紧跟 `account`），属于账号与家庭安全的一整组；
- `extension` 紧随 `browser-use`，`cloud-computer` 与 `passwords` 排在最后。

### 8.2 三个相关页面的实现 chunk 更新

| slug           | 26.903 实现 chunk                               | 26.928 实现 chunk                       | 26.903 → 26.928 体积 |
| -------------- | ----------------------------------------------- | --------------------------------------- | -------------------- |
| `computer-use` | `computer-use-settings-9e45b1da4782.js` (61 KB) | `computer-use-settings-c4ea738a6555.js` | 62,136 → 72,325 B    |
| `browser-use`  | `browser-use-settings-8363eb67ab73.js` (87 KB)  | `browser-use-settings-5e9404c168c2.js`  | 89,065 → 92,031 B    |
| `appshots`     | `appshots-settings-3d0ba53e7730.js` (12 KB)     | `appshots-settings-c20accccaf65.js`     | 12,136 → 13,095 B    |

新增的独立模块（§1 表格里没有对应行）：

| 文件                                           |     大小 | 说明                                                                                                    |
| ---------------------------------------------- | -------: | ------------------------------------------------------------------------------------------------------- |
| `browser-use-policy-site-permissions-*.js`     | 52,734 B | 站点权限策略；26.903 的 settings 模块里只有 `browser-use-settings` 与 `browser-use-settings-visibility` |
| `browser-use-origin-state-queries-*.js`        | 11,479 B | 按 origin 查站点权限状态                                                                                |
| `browser-extension-settings-*.js`              | 14,380 B | 新的 `extension` 设置节                                                                                 |
| `browser-clear-browsing-data-dialog-view-*.js` | 31,618 B | 清除浏览数据对话框                                                                                      |
| `browser-account-switcher-menu-item-*.js`      | 25,971 B | 浏览器内的账号切换菜单项                                                                                |

### 8.3 新增的设置子路由

`/settings` 下与浏览器相关的子路由（A 级，摘自 `app-initial` 的路由表）：

```text
/settings/computer-use/:browserFamily     → ComputerUseSettings（browserFamily 为空时重定向回 /settings/computer-use）
/settings/computer-use/messages           → slug computer-use
/settings/browser-use/extensions          → slug browser-use
/settings/browser-use/downloads           → slug browser-use
/settings/browser-use/history             → slug browser-use
/settings/browser-use/contact-info        → slug browser-use
/settings/browser-use/passwords           → slug browser-use
/settings/browser-use/site-settings/*     → slug browser-use
```

`computer-use` 页的文案从 26.903 的若干条扩展到 **120 条** `settings.computerUse.*`，
`browser-use` 页达到 **248 条** `settings.browserUse.*`
（口径：`code/computer-use-26928/_catalog/i18n-messages.json`，只覆盖 26.928 的相关面）。

---

## 8.4 26.1013.4894.0：52 项导航、四组

本节是 **26.1013** 的完整注册表，数据来自
`code/app-261013/settings/_SETTINGS_MAP.json`（由 `code/tools/settings-map.mjs` 生成）。

### 8.4.1 规模与格式

| 表 | 26.903 | 26.928（文档记录） | 26.1013 |
| --- | ---: | ---: | ---: |
| 有序 nav descriptor | 35 | 50 | **52** |
| slug 全表 | 37 | 51 | **53** |
| loader | 37 | 51 | **54** |
| resolved chunk 未抽取 | 0 | 0 | **0** |

26.1013 的对象字面量不再是 `billing:b3(...)`，而是：

```js
{ rosalind: vQ(async () => { ... import(`./settings-274d95cb16b5.js`) ... }),
  billing: vQ(HDo),
  "general-settings": sIs,
  notifications: vQ(async () => { ... import(`./notifications-settings-59071f7a140d.js`) ... }) }
```

`HDo` 是 `async function HDo()`，`sIs` 是 `vQ(async () => ...)` 的别名。
`settings-map.mjs` 现在会：

1. 同时识别 `b3` / `vQ`；
2. 对 `vQ(HDo)` / `general-settings:sIs` 解析别名；
3. 用“entry chunk 或 resolved chunk 任一在本地”判定 `extracted`。

### 8.4.2 导航分组

`settings-page-3320f8f55cf7.js` 里的 `mi` 把导航分成四组：

| 组 | slug |
| --- | --- |
| Personal | `general-settings`、`notifications`、`import`、`profile`、`appearance`、`security`、`account`、`data-controls`、`archived-chats`、`ads-controls`、`parental-controls`、`trusted-contact`、`safety`、`voice`、`storage`、`agent`、`personalization`、`pets`、`keyboard-shortcuts`、`usage`、`billing`、`analytics`、`consumer-view`、`usage-code-review`、`debug`、`agreements` |
| Teams | `teams` |
| Integrations | `plugins-settings`、`file-type-handlers`、`rosalind`、`passwords`、`computer-use`、`chronicle`、`appshots`、`codex-micro`、`mcp-settings`、`skills-settings`、`browser-use`、`cloud-computer`、`extension` |
| Coding | `hooks-settings`、`connections`、`cloud-settings`、`codex-cloud`、`cloud-environments`、`code-review`、`git-settings`、`local-environments`、`environments`、`worktrees` |

### 8.4.3 导航顺序与实现 chunk（52 项）

| # | slug | 组件 | 入口 chunk | 解析 | entry bytes |
| --: | --- | --- | --- | --- | ---: |
| 1 | `general-settings` | — | `general-settings-9c6418b93a79.js` | ⤷ `general-settings-a68a0de66803.js` | 170 |
| 2 | `notifications` | NotificationsSettingsPage | `notifications-settings-59071f7a140d.js` | ⤷ `notifications-settings-ea08d8372834.js` | 148 |
| 3 | `import` | ImportSettings | `import-settings-b20488a510b5.js` | 直接 | 50607 |
| 4 | `profile` | ProfileSettings | `profile-settings-62cf7c7f62d0.js` | 直接 | 3502 |
| 5 | `security` | ChatGptSecuritySettings | `security-settings-c0b289a3e75a.js` | 直接 | 151984 |
| 6 | `account` | ChatGptAccountSettings | `account-settings-59ebe4159d73.js` | 直接 | 57546 |
| 7 | `age` | ChatGptAgeSettings | `age-settings-3c23be1a446c.js` | ⤷ `age-settings-5123a71e7f48.js` | 131 |
| 8 | `agreements` | AgreementsSettings | `agreements-settings-c3ae10460000.js` | 直接 | 8358 |
| 9 | `parental-controls` | — | `settings-d269bfe92350.js` | 直接 | 23682 |
| 10 | `trusted-contact` | ChatGptTrustedContactSettings | `trusted-contact-settings-9b8ef1cace0d.js` | 直接 | 44991 |
| 11 | `safety` | ChatGptSafetySettings | `safety-settings-6b5b7756a156.js` | 直接 | 28211 |
| 12 | `time-management` | ChatGptTimeManagementSettings | `time-management-settings-d1a45eabfc57.js` | ⤷ `app-shared-bbfeca5e5737.js` | 963 |
| 13 | `appearance` | AppearanceSettings | `appearance-settings-db37cb1d28c1.js` | 直接 | 807 |
| 14 | `voice` | VoiceSettings | `voice-settings-70bb1f84fad8.js` | 直接 | 41561 |
| 15 | `storage` | DeviceStorageSettings | `device-storage-520feb70e463.js` | 直接 | 27870 |
| 16 | `pets` | PetsSettingsRoute | `pets-settings-route-76e2572780b5.js` | 直接 | 40770 |
| 17 | `chronicle` | ComputerHistorySettingsPage | `chronicle-settings-page-71e1cb42fb82.js` | 直接 | 60948 |
| 18 | `appshots` | AppshotsSettings | `appshots-settings-39e061aa1405.js` | 直接 | 13399 |
| 19 | `git-settings` | GitSettings | `git-settings-98cfb7877613.js` | 直接 | 27515 |
| 20 | `connections` | RemoteConnectionsSettings | `remote-connections-settings-f19178ff0038.js` | 直接 | 168242 |
| 21 | `cloud-settings` | CloudPreferencesSettings | `cloud-preferences-settings-cd3d0ff17e61.js` | ⤷ `cloud-preferences-settings-c04168cf2ce0.js` | 151 |
| 22 | `codex-cloud` | CodexCloudSettings | `settings-45fc8d43fc96.js` | 直接 | 38802 |
| 23 | `cloud-environments` | CloudEnvironmentsSettingsPage | `cloud-environments-settings-page-42d45a0ebd17.js` | 直接 | 32854 |
| 24 | `code-review` | CodeReviewPluginSettings | `settings-cf3019aa2078.js` | 直接 | 68568 |
| 25 | `local-environments` | LocalEnvironmentsSettings | `local-environments-settings-page-29f3cefc14fe.js` | 直接 | 1424 |
| 26 | `worktrees` | WorktreesSettingsPage | `worktrees-settings-page-46e1c8735d13.js` | 直接 | 32790 |
| 27 | `agent` | ConfigurationPanel | `configuration-panel-11eaa92300eb.js` | 直接 | 49817 |
| 28 | `work-settings` | WorkSettingsPanel | `panel-bd8b53e796cb.js` | ⤷ `panel-8ba44374bdf7.js` | 123 |
| 29 | `personalization` | ChatGptPersonalizationSettings | `personalization-settings-f4781a8a1f5b.js` | 直接 | 121858 |
| 30 | `keyboard-shortcuts` | KeyboardShortcutsSettings | `keyboard-shortcuts-settings-b5cae7266306.js` | ⤷ `keyboard-shortcuts-settings-d2d4f6ef52f3.js` | 148 |
| 31 | `codex-micro` | CodexMicroSettings | `codex-micro-settings-e26c9caffecc.js` | 直接 | 113116 |
| 32 | `usage` | — | `page-9ec3bf63ff1f.js` | 直接 | 179309 |
| 33 | `billing` | — | `billing-settings-ecd239bd65b8.js` | 直接 | 95184 |
| 34 | `analytics` | — | `page-9ec3bf63ff1f.js` | 直接 | 179309 |
| 35 | `consumer-view` | — | `page-9ec3bf63ff1f.js` | 直接 | 179309 |
| 36 | `usage-code-review` | — | `page-9ec3bf63ff1f.js` | 直接 | 179309 |
| 37 | `debug` | DebugSettings | `debug-settings-746984af2654.js` | 直接 | 7085 |
| 38 | `browser-use` | BrowserUseSettings | `browser-use-settings-9e983558442e.js` | 直接 | 92835 |
| 39 | `extension` | BrowserExtensionSettings | `browser-extension-settings-1109280fa563.js` | 直接 | 15394 |
| 40 | `computer-use` | ComputerUseSettings | `computer-use-settings-28bb30591e3b.js` | 直接 | 73341 |
| 41 | `mcp-settings` | McpSettings | `mcp-settings-289ad5c222f2.js` | 直接 | 798 |
| 42 | `hooks-settings` | HooksSettings | `hooks-settings-a249b26c1ef5.js` | 直接 | 26077 |
| 43 | `plugins-settings` | PluginsSettings | `plugins-settings-da410e02a346.js` | ⤷ `plugins-settings-7cb8fa6a6c92.js` | 127 |
| 44 | `file-type-handlers` | FileTypeHandlersSettings | `file-type-handlers-44df4f53223f.js` | 直接 | 6023 |
| 45 | `rosalind` | RosalindSettings | `settings-274d95cb16b5.js` | 直接 | 726 |
| 46 | `skills-settings` | SkillsSettings | `skills-settings-a347bf7dd36d.js` | 直接 | 530 |
| 47 | `data-controls` | ChatGptDataControlsSettings | `data-controls-settings-d9bc0b2ecbfc.js` | 直接 | 45145 |
| 48 | `archived-chats` | DataControlsSettings | `data-controls-90f916160de4.js` | 直接 | 41408 |
| 49 | `ads-controls` | AdsControlsSettings | `route-d301b07bc046.js` | 直接 | 23497 |
| 50 | `teams` | TeamSettingsPage | `team-settings-page-45446db116cc.js` | 直接 | 75176 |
| 51 | `cloud-computer` | ChatGptCloudBrowserSettings | `settings-9aafd1906a04.js` | 直接 | 41225 |
| 52 | `passwords` | PasswordsSettings | `settings-e8442dfdfad6.js` | 直接 | 25225 |

不在 nav 里的 loader：`family`（`general-settings` 别名）、`environments`
（`SettingsExternalSection`，shim 到 `app-shared`）。

### 8.4.4 26.1013 新增 / 变化的页面

| slug | 实现 chunk | 变化 |
| --- | --- | --- |
| `chronicle` | `chronicle-settings-page-71e1cb42fb82.js` | Computer History，全新 |
| `voice` | `voice-settings-70bb1f84fad8.js` | 听写 + Realtime Voice |
| `codex-micro` | `codex-micro-settings-e26c9caffecc.js` | Work Louder 硬件 |
| `pets` | `pets-settings-route-76e2572780b5.js` | 宠物 / 角色 |
| `appshots` | `appshots-settings-39e061aa1405.js` | 应用截图 |
| `agent` | `configuration-panel-11eaa92300eb.js` | Agent 配置 |
| `file-type-handlers` | `file-type-handlers-44df4f53223f.js` | 文件类型处理，全新 |
| `rosalind` | `settings-274d95cb16b5.js` | 新的设置节 |
| `passwords` | `settings-e8442dfdfad6.js` | 密码 |
| `cloud-computer` | `settings-9aafd1906a04.js` | 云浏览器 / 云电脑 |
| `teams` | `team-settings-page-45446db116cc.js` | 从隐藏项进入 nav |

> 可见性仍然是 `use-visible-settings-sections` 的运行时判定（`app-shared`）。
> 本表只说明“注册存在 + 实现 chunk 已抽取”，不声称当前账号一定能看到。

## 8.5 26.1016.8622.0：53 项导航，新增 Gateways

本节来自 [code/app-261016/settings/_SETTINGS_MAP.json](code/app-261016/settings/_SETTINGS_MAP.json)。
静态注册表与 26.1013 的差异只有一个 nav slug：

```text
gateways
```

| 表 | 26.1013 | 26.1016 |
| --- | ---: | ---: |
| nav order | 52 | **53** |
| slug 全表 | 53 | **54** |
| lazy loader | 54 | **55** |
| 缺失 loader | 0 | **0** |
| resolved chunk 未抽取 | 0 | **0** |

26.1016 导航顺序：

```text
general-settings
notifications
import
profile
security
account
age
agreements
parental-controls
trusted-contact
safety
time-management
appearance
voice
storage
pets
chronicle
appshots
git-settings
connections
cloud-settings
codex-cloud
cloud-environments
code-review
local-environments
worktrees
agent
work-settings
personalization
keyboard-shortcuts
codex-micro
usage
billing
analytics
consumer-view
usage-code-review
debug
browser-use
extension
computer-use
mcp-settings
gateways
hooks-settings
plugins-settings
file-type-handlers
rosalind
skills-settings
data-controls
archived-chats
ads-controls
teams
cloud-computer
passwords
```

### 8.5.1 新增与重点页面

| slug | 入口 chunk | 解析实现 | 变化 |
| --- | --- | --- | --- |
| `gateways` | `settings-c2fddca9a1ec.js` | 直接，60,524 B | 全新 Model Providers / Gateways |
| `security` | `security-settings-98d075740c14.js` | 直接，152,927 B | 内含 Face / Voice verification 依赖 |
| `passwords` | `settings-4c3b679da3a6.js` | 直接，23,303 B | OpenAI Passwords / 网站登录凭证设置 |
| `rosalind` | `settings-979ea27dffc3.js` | 直接，726 B | 新准入流程入口 |
| `usage` / `analytics` / `usage-code-review` / `consumer-view` | `page-a4f99675beb4.js` | 四个 slug 复用，180,734 B | 用量页重构 |
| `teams` | `team-settings-page-432378a4c839.js` | 直接，77,490 B | seat、成员与企业迁移入口 |

### 8.5.2 可见性

`use-visible-settings-sections` 继续由运行时能力与 feature availability 控制。
26.1016 中固定返回 `visible:false` 的 section 包括：

```text
family
billing
skills-settings
extension
security
time-management
```

`gateways` 是 `codexLocal` 能力，条件是 `me && !M`；
`rosalind` 是 `codexOrWorkLocal`，条件是 `h && re != null`；
`passwords` 是 `chatGpt`，条件是布尔值 `Ne`。这些都是代码判定，不能替代
当前账号的实际验证（C）。

### 8.5.3 loader 解析格式再次变化

26.1016 的 loader 对象首键从 `rosalind` 变为 `gateways`，且 lazy 包装函数从
`vQ` 变为 `M$`：

```js
{ gateways: M$(async () => { ... }),
  rosalind: M$(async () => { ... }),
  billing: M$(lUo),
  "general-settings": eUs,
  ... }
```

`code/tools/settings-map.mjs` 已改为：

1. 同时识别 `b3` / `vQ` / `M$`；
2. 扫描 `slug:lazy(...)`，验证候选对象至少含 10 个合法 slug，再回溯提取完整对象；
3. 对 `$` 开头的别名（例如 `$Hs`）使用标识符边界而不是 `\b`；
4. 回归结果为 55 loader、0 missing、0 resolved chunk 未抽取。
