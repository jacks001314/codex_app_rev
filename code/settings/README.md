# settings — 配置及各配置页面

**173 个文件 / 6.78 MB**，4369 条 i18n 文案。
完整分析见 [`../../settings-pages.md`](../../settings-pages.md)；机器可读注册表见 [`_SETTINGS_MAP.json`](_SETTINGS_MAP.json)。

设置界面完全数据驱动：`app-initial` 里的三张静态表（slug 列表 / 有序 `[{slug}]` / `{slug: lazy(import)}` 加载表）+ 图标映射表 + capability 映射表，交给 `use-visible-settings-sections` 做门控。

## pages/ — 35 个导航 section

`nav_order` 即左栏显示顺序：

```
general-settings > notifications > import > profile > security > account > appearance >
voice > storage > pets > chronicle > appshots > git-settings > connections > cloud-settings >
cloud-environments > code-review > local-environments > worktrees > agent > personalization >
keyboard-shortcuts > codex-micro > usage > billing > analytics > consumer-view > debug >
browser-use > computer-use > mcp-settings > hooks-settings > plugins-settings >
skills-settings > data-controls
```

注册表里还有两个**不在导航中**的 slug：`environments`（→ `SettingsExternalSection`，文案 “Opens in your browser during Alpha”）与 `teams`（→ 复用 `GeneralSettings`，`visible` 直接 `false`）。

**10 个 section 在当前 build 里 `visible` 硬编码为 `false`**（代码仍在包内，属已实现未放开）：
`notifications`、`security`、`account`、`storage`、`cloud-settings`、`cloud-environments`、`code-review`、`billing`、`skills-settings`、`teams`。

### rolldown shim

`general-settings-5a1b38565b24.js` 这类 0.1 KB 文件是再导出壳：

```js
import { i as e, o as t } from "./general-settings-9d83727e851d.js";
t();
export { e as GeneralSettings };
```

按 chunk 名找页面会踩坑，必须按 `_SETTINGS_MAP.json` 的 `resolved_chunk` 定位。`code/tools/settings-map.mjs` 会自动跟随 shim（并跳过每个 chunk 都会 import 的 `rolldown-runtime` / `app-initial` / `app-primary`）。

### 组件复用

| slug                             | 实际实现                                                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `appearance`、`billing`、`teams` | 复用 `general-settings-9d83727e851d.js` 的子组件                                                              |
| `analytics`、`consumer-view`     | 复用 `billing-analytics-3bae5ee4e65b.js`，靠 `scope: workspace/business/consumer` + `workspaceTaskUsage` 区分 |
| `mcp-settings`                   | 复用 `plugins-settings-711c233db56c.js`，传 **`manageOnly: true`**                                            |
| `skills-settings`                | 复用 `skills-page-3b7157309058.js`                                                                            |
| `cloud-settings`、`code-review`  | 复用 `cloud-preferences-534ab4bdf935.js`（前者再加 `segmented-toggle`）                                       |

## shell/

| chunk                                                                                     | 作用                                         |
| ----------------------------------------------------------------------------------------- | -------------------------------------------- |
| `settings-page-ce3b564aee3c.js` (35 KB)                                                   | 设置窗口骨架（左栏 + 内容区）                |
| `settings-5112d5d47fbe.js` (150 KB)                                                       | 设置核心 + `usage` 页实现                    |
| `settings-plugin-selection-995ee29263c7.js` (107 KB)                                      | 插件勾选 UI（Google / Microsoft 插件安装流） |
| `use-visible-settings-sections-cc4e77dbddd0.js` (31 KB)                                   | ★ 可见性/加载态门控 hook                     |
| `settings-route-state` / `settings-host-dropdown` / `settings-command-menu-section-items` | 路由状态、Host 作用域下拉、命令面板设置项    |
| `settings-row-disclosure` / `settings-loading-row` / `settings-external-section`          | 通用行组件与占位页                           |

每页的统一骨架：

```jsx
<SettingsSectionShell
  title={<SettingsSectionTitle slug="mcp-settings" />}
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

## search-index/

`_virtual_settings-search-documents-1358c5ba26d1.js`（**475 KB**，文件名以 `_virtual_` 开头 = Vite 虚拟模块）是设置内搜索的离线索引，把每个 section 的全部可搜索文案预展开成 `{defaultMessage, id}`。覆盖 **17 个** section：

```
account  agent  analytics  appearance  appshots  billing  chronicle  connections
debug  personalization  pets  profile  security  storage  usage  voice  worktrees
```

与导航的 35 个不一致 —— 只索引“文案量大、用户会搜”的部分。这个文件同时也是一份**按 section 归类的完整文案清单**，查某个设置项的原文时比全局搜索更快。

## onboarding/

`onboarding-page-e52fd2822434.js`（219 KB，`electron.onboarding.*` 共 **454 条**文案，是第二大命名空间）、`login-route`（43 KB，`/login`）、`security-route`（212 KB，`/security/*` 安全工作台）、`chatgpt-onboarding-dialog`、`onboarding-login-content`、`wallet-onboarding-announcement-{content,modal}`、`worktree-onboarding-{banner-controller,state}`、`onboarding-entrypoint`、`onboarding-interactive-dynamic-tools`、`onboarding-mail-provider`。

---

## 文件清单

### `_deps/`

| 文件                                                      |     原始 |   格式化 | formatter | 来源                                                      |
| --------------------------------------------------------- | -------: | -------: | --------- | --------------------------------------------------------- |
| `color-icon-f67e1ba0765e.js`                              | 175.6 KB | 180.7 KB | prettier  | 闭包 ← `chronicle-settings-page-cd85637c8d44.js`          |
| `use-imported-setup-opportunity-41a4c6eae93c.js`          | 163.1 KB | 237.9 KB | prettier  | 闭包 ← `onboarding-page-e52fd2822434.js`                  |
| `plugin-detail-page-eb5ff5839527.js`                      | 155.3 KB | 256.9 KB | prettier  | 闭包 ← `skills-page-3b7157309058.js`                      |
| `plugins-page-275f0d3fc353.js`                            | 119.2 KB | 207.3 KB | prettier  | 闭包 ← `plugins-settings-711c233db56c.js`                 |
| `codex-mobile-setup-dialog-2b571bdc4cdd.js`               | 105.4 KB | 142.7 KB | prettier  | 闭包 ← `remote-connections-settings-c75eeb61a39d.js`      |
| `plugin-request-empty-state-41e04cfd3e39.js`              |  76.0 KB | 128.6 KB | prettier  | 闭包 ← `plugins-settings-711c233db56c.js`                 |
| `persona-77b058e71ca5.js`                                 |  68.3 KB | 131.7 KB | prettier  | 闭包 ← `account-settings-df083ac9d1a2.js`                 |
| `plugins-store-page-dac62b2aebdd.js`                      |  65.2 KB | 110.1 KB | prettier  | 闭包 ← `skills-page-3b7157309058.js`                      |
| `esm-14f726ca820a.js`                                     |  63.2 KB | 111.2 KB | prettier  | 闭包 ← `cloud-environments-settings-page-7765ca09b9af.js` |
| `plugins-page-section-651a6ff2d45b.js`                    |  48.0 KB |  71.4 KB | prettier  | 闭包 ← `skills-page-3b7157309058.js`                      |
| `rosalind-helix-5119095c9471.js`                          |  32.5 KB |  42.8 KB | prettier  | 闭包 ← `onboarding-page-e52fd2822434.js`                  |
| `codex-micro-keyboard-surface-edf52db34789.js`            |  29.9 KB |  38.0 KB | prettier  | 闭包 ← `codex-micro-settings-4c6e164f0143.js`             |
| `use-ascii-engine-923490881fd3.js`                        |  28.2 KB |  47.4 KB | prettier  | 闭包 ← `login-route-ad8eaa2aab78.js`                      |
| `use-external-agent-import-setup-actions-b950217bf4da.js` |  23.3 KB |  38.6 KB | prettier  | 闭包 ← `import-settings-8fbd0a960585.js`                  |
| `browser-2cc7a64d9f80.js`                                 |  23.0 KB |  38.0 KB | prettier  | 闭包 ← `security-settings-f2893aaee7b5.js`                |
| `cadence-dialog-857e209dc1e9.js`                          |  12.6 KB |  19.4 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `queries-82a0d88b0673.js`                                 |  12.4 KB |  19.5 KB | prettier  | 闭包 ← `billing-analytics-3bae5ee4e65b.js`                |
| `subscription-update-dialog-47ff984f1157.js`              |  11.5 KB |  18.2 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `browser-use-origin-state-queries-f68e66dda925.js`        |  11.1 KB |  16.1 KB | prettier  | 闭包 ← `browser-use-settings-8363eb67ab73.js`             |
| `saved-memory-history-256cc198efa9.js`                    |  11.0 KB |  18.2 KB | prettier  | 闭包 ← `personalization-settings-c65fe8b8e131.js`         |
| `status-f9c96846d856.js`                                  |  10.4 KB |  14.5 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `appgen-site-detail-layout-6b9d3aae0fc8.js`               |  10.0 KB |  16.1 KB | prettier  | 闭包 ← `appgen-settings-page-deb3b5079c3d.js`             |
| `codex-mobile-setup-flow-a0aae97976bd.js`                 |   8.8 KB |  14.5 KB | prettier  | 闭包 ← `remote-connections-settings-c75eeb61a39d.js`      |
| `cookies-35a81e307103.js`                                 |   8.4 KB |  10.3 KB | prettier  | 闭包 ← `browser-use-settings-visibility-4d900196f919.js`  |
| `appgen-change-slug-dialog-daf64fab05ba.js`               |   8.3 KB |  12.6 KB | prettier  | 闭包 ← `appgen-settings-page-deb3b5079c3d.js`             |
| `renewal-dialog-af4be22cc044.js`                          |   7.6 KB |  11.7 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `appgen-access-state-messages-d450c4a57b22.js`            |   6.5 KB |   8.3 KB | prettier  | 闭包 ← `appgen-settings-page-deb3b5079c3d.js`             |
| `pull-request-fix-automation-d39ed4e2b4ea.js`             |   6.4 KB |   7.7 KB | prettier  | 闭包 ← `git-settings-19e05f7b3976.js`                     |
| `codex-micro-slot-signals-3a7fc1172911.js`                |   6.2 KB |   9.7 KB | prettier  | 闭包 ← `codex-micro-settings-4c6e164f0143.js`             |
| `codex-micro-layout-45f0a143dc6c.js`                      |   5.4 KB |   7.4 KB | prettier  | 闭包 ← `codex-micro-settings-4c6e164f0143.js`             |
| `cadence-events-65227a5e872f.js`                          |   5.1 KB |   6.5 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `platform-dialog-e648bb41ce12.js`                         |   4.8 KB |   6.7 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `session-c33967fa604f.js`                                 |   4.8 KB |   6.5 KB | prettier  | 闭包 ← `account-settings-df083ac9d1a2.js`                 |
| `queries-d729b9d20ea6.js`                                 |   4.7 KB |   6.3 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `query-9d5dcdeccdca.js`                                   |   4.2 KB |   6.2 KB | prettier  | 闭包 ← `browser-use-settings-visibility-4d900196f919.js`  |
| `stripe-client-1366773f0ed5.js`                           |   4.2 KB |   6.3 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `delete-archived-chats-dialog-b764183e8ea2.js`            |   3.4 KB |   5.2 KB | prettier  | 闭包 ← `data-controls-8fe0b8b2caf1.js`                    |
| `login-handoff-page-9233440fb9a8.js`                      |   3.1 KB |   4.6 KB | prettier  | 闭包 ← `login-route-ad8eaa2aab78.js`                      |
| `segmented-toggle-30e6111a9bfb.js`                        |   2.8 KB |   4.9 KB | prettier  | 闭包 ← `billing-analytics-3bae5ee4e65b.js`                |
| `setup-e2fbeaf3d961.js`                                   |   2.8 KB |   4.8 KB | prettier  | 闭包 ← `import-settings-8fbd0a960585.js`                  |
| `appgen-access-e530f599dd35.js`                           |   2.5 KB |   3.3 KB | prettier  | 闭包 ← `appgen-settings-page-deb3b5079c3d.js`             |
| `linked-app-logo-d20801ff95ab.js`                         |   2.5 KB |   4.0 KB | prettier  | 闭包 ← `security-settings-f2893aaee7b5.js`                |
| `page-layout-945837a6eba3.js`                             |   2.3 KB |   3.5 KB | prettier  | 闭包 ← `login-route-ad8eaa2aab78.js`                      |
| `chatgpt-desktop-auth-url-2a0627f4c041.js`                |   2.2 KB |   3.0 KB | prettier  | 闭包 ← `login-route-ad8eaa2aab78.js`                      |
| `browser-session-queries-af80e2e8f50b.js`                 |   2.2 KB |   3.3 KB | prettier  | 闭包 ← `login-route-ad8eaa2aab78.js`                      |
| `keyboard-shortcut-command-order-d509233d7b05.js`         |   2.2 KB |   3.0 KB | prettier  | 闭包 ← `keyboard-shortcuts-dialog-ea7a0e3db299.js`        |
| `document-search-838cda7f3680.js`                         |   1.9 KB |   2.2 KB | prettier  | 闭包 ← `onboarding-page-e52fd2822434.js`                  |
| `animated-segmented-toggle-ee8d2d190de7.js`               |   1.9 KB |   3.1 KB | prettier  | 闭包 ← `billing-analytics-3bae5ee4e65b.js`                |
| `remote-connection-editor-draft-82bd39e6a7c1.js`          |   1.8 KB |   2.3 KB | prettier  | 闭包 ← `remote-connections-settings-c75eeb61a39d.js`      |
| `category-plugins-query-7ca0a2ae5684.js`                  |   1.7 KB |   2.8 KB | prettier  | 闭包 ← `onboarding-page-e52fd2822434.js`                  |
| `computer-history-suggestions-7b96a293b088.js`            |   1.7 KB |   2.4 KB | prettier  | 闭包 ← `skills-page-3b7157309058.js`                      |
| `computer-history-suggestion-prompt-2b08a74743d6.js`      |   1.7 KB |   2.2 KB | prettier  | 闭包 ← `chronicle-settings-page-cd85637c8d44.js`          |
| `toolbar-breadcrumb-76687ef37675.js`                      |   1.6 KB |   2.8 KB | prettier  | 闭包 ← `browser-use-settings-8363eb67ab73.js`             |
| `entry-point-availability-5cc8d92da9e6.js`                |   1.6 KB |   2.3 KB | prettier  | 闭包 ← `settings-5112d5d47fbe.js`                         |
| `middle-truncated-text-3230b5cffad1.js`                   |   1.5 KB |   2.3 KB | prettier  | 闭包 ← `general-settings-9d83727e851d.js`                 |
| `bar-chart-e191767787f2.js`                               |   1.4 KB |   1.6 KB | prettier  | 闭包 ← `security-route-363ce6c388ba.js`                   |
| `appgen-site-card-086b2aabeb08.js`                        |   1.3 KB |   1.8 KB | prettier  | 闭包 ← `appgen-settings-page-deb3b5079c3d.js`             |
| `format-amount-47aa133b47a5.js`                           |   1.3 KB |   1.7 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `google-chrome-38e9ab83c385.js`                           |   1.3 KB |   1.7 KB | prettier  | 闭包 ← `browser-use-settings-visibility-4d900196f919.js`  |
| `pet-model-d94a9150a181.js`                               |   1.1 KB |   1.6 KB | prettier  | 闭包 ← `personalization-settings-c65fe8b8e131.js`         |
| `theme-font-face-loader-1d47d562eb8e.js`                  |   1.1 KB |   1.4 KB | prettier  | 闭包 ← `general-settings-9d83727e851d.js`                 |
| `codex-pet-assets-16127cbc3056.js`                        |   1.1 KB |   1.5 KB | prettier  | 闭包 ← `profile-bf2928c08023.js`                          |
| `computer-history-query-5e050ffaae9e.js`                  |   1.1 KB |   1.6 KB | prettier  | 闭包 ← `chronicle-settings-page-cd85637c8d44.js`          |
| `open-appgen-share-dialog-5b55c8a7fe5b.js`                |   1.0 KB |   1.3 KB | prettier  | 闭包 ← `appgen-settings-page-deb3b5079c3d.js`             |
| `permissions-mode-visibility-db970a26e43f.js`             |   1.0 KB |   1.3 KB | prettier  | 闭包 ← `general-settings-9d83727e851d.js`                 |
| `avatar-artwork-a609915b617a.js`                          |   1.0 KB |   1.4 KB | prettier  | 闭包 ← `personalization-settings-c65fe8b8e131.js`         |
| `plus-sm-f82863230f20.js`                                 |   0.9 KB |   1.1 KB | prettier  | 闭包 ← `profile-bf2928c08023.js`                          |
| `billing-state-ce45584c1590.js`                           |   0.8 KB |   1.0 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `pricing-a70e18580c5f.js`                                 |   0.8 KB |   1.0 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `triangle-warning-aaa5211a40eb.js`                        |   0.8 KB |   1.2 KB | prettier  | 闭包 ← `general-settings-9d83727e851d.js`                 |
| `use-avatar-options-25c4fda3035d.js`                      |   0.8 KB |   1.1 KB | prettier  | 闭包 ← `pets-settings-route-c75a444800aa.js`              |
| `theme-font-family-550a581dca1f.js`                       |   0.7 KB |   0.9 KB | prettier  | 闭包 ← `general-settings-9d83727e851d.js`                 |
| `recommended-skill-statsig-overrides-f5eb16d6092b.js`     |   0.7 KB |   0.9 KB | prettier  | 闭包 ← `pets-settings-route-c75a444800aa.js`              |
| `events-7d2329d3e619.js`                                  |   0.7 KB |   0.9 KB | prettier  | 闭包 ← `billing-settings-5fe9d46a4f09.js`                 |
| `detail-page-8ad79819368d.js`                             |   0.7 KB |   0.9 KB | prettier  | 闭包 ← `security-route-363ce6c388ba.js`                   |
| `filter-alt-badged-2fd13f51bda4.js`                       |   0.7 KB |   0.9 KB | prettier  | 闭包 ← `security-route-363ce6c388ba.js`                   |
| `codex-micro-analog-action-title-dd9a4b370f08.js`         |   0.5 KB |   0.7 KB | prettier  | 闭包 ← `codex-micro-settings-4c6e164f0143.js`             |
| `format-bytes-12269d1f155b.js`                            |   0.5 KB |   0.6 KB | prettier  | 闭包 ← `browser-use-settings-visibility-4d900196f919.js`  |
| `codex-micro-commands-86f6cdcdb48d.js`                    |   0.5 KB |   0.6 KB | prettier  | 闭包 ← `codex-micro-settings-4c6e164f0143.js`             |
| `availability-99f8b82618ec.js`                            |   0.5 KB |   0.7 KB | prettier  | 闭包 ← `browser-use-settings-8363eb67ab73.js`             |
| `experimental-feature-visibility-ceccd69526a3.js`         |   0.5 KB |   0.6 KB | prettier  | 闭包 ← `agent-settings-bfb770313a62.js`                   |
| `control-group-1ab27e5eeaa6.js`                           |   0.5 KB |   0.6 KB | prettier  | 闭包 ← `data-controls-8fe0b8b2caf1.js`                    |
| `model-and-reasoning-effort-translations-550629a13cba.js` |   0.4 KB |   0.6 KB | prettier  | 闭包 ← `agent-settings-bfb770313a62.js`                   |
| `use-home-directory-7c94567c4147.js`                      |   0.4 KB |   0.5 KB | prettier  | 闭包 ← `browser-use-settings-8363eb67ab73.js`             |
| `dock-icon-setting-visibility-8d5eb7504bc6.js`            |   0.3 KB |   0.4 KB | prettier  | 闭包 ← `general-settings-9d83727e851d.js`                 |
| `is-available-f419fd226def.js`                            |   0.3 KB |   0.3 KB | prettier  | 闭包 ← `browser-use-settings-8363eb67ab73.js`             |

### `onboarding/`

| 文件                                                     |     原始 |   格式化 | formatter | 来源     |
| -------------------------------------------------------- | -------: | -------: | --------- | -------- |
| `onboarding-page-e52fd2822434.js`                        | 219.1 KB | 343.8 KB | prettier  | 命名规则 |
| `security-route-363ce6c388ba.js`                         | 212.4 KB | 349.1 KB | prettier  | 命名规则 |
| `login-route-ad8eaa2aab78.js`                            |  42.9 KB |  69.4 KB | prettier  | 命名规则 |
| `wallet-onboarding-announcement-content-206f7de02567.js` |  40.8 KB |  53.3 KB | prettier  | 命名规则 |
| `wallet-onboarding-announcement-modal-e5003772560d.js`   |   8.1 KB |  12.6 KB | prettier  | 命名规则 |
| `chatgpt-onboarding-dialog-4f379e2138db.js`              |   5.6 KB |   8.3 KB | prettier  | 命名规则 |
| `onboarding-login-content-cfb6f644e3a7.js`               |   3.2 KB |   5.1 KB | prettier  | 命名规则 |
| `worktree-onboarding-banner-controller-dd9405d4f5e8.js`  |   2.8 KB |   4.1 KB | prettier  | 命名规则 |
| `wallet-onboarding-announcement-modal-4d6d539a3471.css`  |   2.2 KB |   2.8 KB | prettier  | 命名规则 |
| `worktree-onboarding-state-450b17d8c7bc.js`              |   1.6 KB |   2.3 KB | prettier  | 命名规则 |
| `onboarding-mail-provider-6c35f2fbcf24.js`               |   0.9 KB |   1.2 KB | prettier  | 命名规则 |
| `onboarding-page-ba3c4616d86d.css`                       |   0.3 KB |   0.4 KB | prettier  | 命名规则 |
| `onboarding-entrypoint-bf1d09b604e3.js`                  |   0.3 KB |   0.3 KB | prettier  | 命名规则 |
| `onboarding-interactive-dynamic-tools-2c2db897345c.js`   |   0.1 KB |   0.1 KB | prettier  | 命名规则 |

### `pages/`

| 文件                                               |     原始 |   格式化 | formatter | 来源     |
| -------------------------------------------------- | -------: | -------: | --------- | -------- |
| `billing-analytics-3bae5ee4e65b.js`                | 174.1 KB | 290.8 KB | prettier  | 命名规则 |
| `remote-connections-settings-c75eeb61a39d.js`      | 165.4 KB | 269.6 KB | prettier  | 命名规则 |
| `billing-settings-5fe9d46a4f09.js`                 | 123.3 KB | 198.6 KB | prettier  | 命名规则 |
| `personalization-settings-c65fe8b8e131.js`         | 115.6 KB | 178.6 KB | prettier  | 命名规则 |
| `general-settings-9d83727e851d.js`                 | 114.3 KB | 179.7 KB | prettier  | 命名规则 |
| `codex-micro-settings-4c6e164f0143.js`             | 106.5 KB | 171.6 KB | prettier  | 命名规则 |
| `profile-bf2928c08023.js`                          |  98.4 KB | 151.5 KB | prettier  | 命名规则 |
| `browser-use-settings-8363eb67ab73.js`             |  87.0 KB | 134.9 KB | prettier  | 命名规则 |
| `chronicle-settings-page-cd85637c8d44.js`          |  85.2 KB | 134.5 KB | prettier  | 命名规则 |
| `security-settings-f2893aaee7b5.js`                |  83.5 KB | 133.3 KB | prettier  | 命名规则 |
| `cloud-environments-settings-page-7765ca09b9af.js` |  69.7 KB | 122.3 KB | prettier  | 命名规则 |
| `computer-use-settings-9e45b1da4782.js`            |  60.7 KB |  94.0 KB | prettier  | 命名规则 |
| `agent-settings-bfb770313a62.js`                   |  56.7 KB |  90.5 KB | prettier  | 命名规则 |
| `appgen-settings-page-deb3b5079c3d.js`             |  52.7 KB |  85.3 KB | prettier  | 命名规则 |
| `import-settings-8fbd0a960585.js`                  |  49.0 KB |  79.7 KB | prettier  | 命名规则 |
| `hooks-settings-901cef002341.js`                   |  35.0 KB |  60.1 KB | prettier  | 命名规则 |
| `review-preferences-model-c2edfefe5a2c.js`         |  34.8 KB |  60.2 KB | prettier  | 命名规则 |
| `data-controls-8fe0b8b2caf1.js`                    |  34.4 KB |  56.6 KB | prettier  | 命名规则 |
| `browser-use-settings-visibility-4d900196f919.js`  |  33.9 KB |  52.2 KB | prettier  | 命名规则 |
| `voice-settings-c8dc0e3ed346.js`                   |  33.2 KB |  53.9 KB | prettier  | 命名规则 |
| `account-settings-df083ac9d1a2.js`                 |  32.6 KB |  50.3 KB | prettier  | 命名规则 |
| `pets-settings-route-c75a444800aa.js`              |  32.2 KB |  52.9 KB | prettier  | 命名规则 |
| `use-visible-settings-sections-cc4e77dbddd0.js`    |  30.6 KB |  40.5 KB | prettier  | 命名规则 |
| `local-environments-settings-page-2caf15c22d59.js` |  27.6 KB |  47.0 KB | prettier  | 命名规则 |
| `worktrees-settings-page-8aff7d1210a1.js`          |  27.1 KB |  43.8 KB | prettier  | 命名规则 |
| `git-settings-19e05f7b3976.js`                     |  24.3 KB |  37.8 KB | prettier  | 命名规则 |
| `keyboard-shortcuts-settings-d3c0c97703d3.js`      |  22.5 KB |  40.4 KB | prettier  | 命名规则 |
| `skills-page-3b7157309058.js`                      |  16.5 KB |  26.6 KB | prettier  | 命名规则 |
| `code-review-settings-f64eacc74392.js`             |  13.8 KB |  21.7 KB | prettier  | 命名规则 |
| `appshots-settings-3d0ba53e7730.js`                |  11.9 KB |  18.4 KB | prettier  | 命名规则 |
| `memory-settings-analytics-4ae383b0618d.js`        |   9.8 KB |  14.2 KB | prettier  | 命名规则 |
| `cloud-preferences-settings-b8c60aa76a25.js`       |   9.4 KB |  14.3 KB | prettier  | 命名规则 |
| `notifications-settings-dfc383906b35.js`           |   9.0 KB |  14.3 KB | prettier  | 命名规则 |
| `keyboard-shortcuts-dialog-ea7a0e3db299.js`        |   7.8 KB |  12.7 KB | prettier  | 命名规则 |
| `debug-settings-12f9552b6e39.js`                   |   6.8 KB |   9.6 KB | prettier  | 命名规则 |
| `hooks-settings-copy-1a7d90350f27.js`              |   5.7 KB |   7.4 KB | prettier  | 命名规则 |
| `hooks-settings-route-dc9cfc2985b4.js`             |   4.9 KB |   6.6 KB | prettier  | 命名规则 |
| `storage-settings-91be4866b893.js`                 |   4.0 KB |   6.1 KB | prettier  | 命名规则 |
| `plugins-settings-711c233db56c.js`                 |   2.5 KB |   3.7 KB | prettier  | 命名规则 |
| `keyboard-shortcuts-search-input-be03b5a70e1b.js`  |   2.1 KB |   3.4 KB | prettier  | 命名规则 |
| `plugins-settings-row-b1558f4c4634.js`             |   1.9 KB |   2.9 KB | prettier  | 命名规则 |
| `connector-settings-redirect-2fa39171de65.js`      |   1.8 KB |   2.7 KB | prettier  | 命名规则 |
| `appgen-settings-dialog-2092ca4c6374.js`           |   1.6 KB |   2.4 KB | prettier  | 命名规则 |
| `chronicle-settings-page-4ebdbb0f996e.css`         |   1.6 KB |   2.0 KB | prettier  | 命名规则 |
| `cloud-preferences-534ab4bdf935.js`                |   1.5 KB |   2.1 KB | prettier  | 命名规则 |
| `analytics-settings-f138eec12776.js`               |   1.5 KB |   2.2 KB | prettier  | 命名规则 |
| `profile-043904880e7d.css`                         |   1.1 KB |   1.4 KB | prettier  | 命名规则 |
| `skills-page-grid-8e6b72ab693e.js`                 |   0.9 KB |   1.3 KB | prettier  | 命名规则 |
| `mcp-settings-6f1dc95531bf.js`                     |   0.7 KB |   1.0 KB | prettier  | 命名规则 |
| `appearance-settings-db0a1acdf1a6.js`              |   0.5 KB |   0.7 KB | prettier  | 命名规则 |
| `skills-settings-6e96bfe6bb14.js`                  |   0.5 KB |   0.6 KB | prettier  | 命名规则 |
| `billing-analytics-20c2ee680fe0.css`               |   0.2 KB |   0.3 KB | prettier  | 命名规则 |
| `import-settings-gate-87de8615686e.js`             |   0.2 KB |   0.2 KB | prettier  | 命名规则 |
| `skills-page-f64ede281de7.js`                      |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `notifications-settings-fb3e3d90ccba.js`           |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `appgen-settings-page-94246c029811.js`             |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `general-settings-5a1b38565b24.js`                 |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `plugins-settings-496471ed0f00.js`                 |   0.1 KB |   0.1 KB | prettier  | 命名规则 |

### `search-index/`

| 文件                                                 |     原始 |   格式化 | formatter | 来源     |
| ---------------------------------------------------- | -------: | -------: | --------- | -------- |
| `_virtual_settings-search-documents-1358c5ba26d1.js` | 394.6 KB | 474.9 KB | prettier  | 命名规则 |

### `shell/`

| 文件                                                  |     原始 |   格式化 | formatter | 来源     |
| ----------------------------------------------------- | -------: | -------: | --------- | -------- |
| `settings-plugin-selection-995ee29263c7.js`           | 106.8 KB | 176.0 KB | prettier  | 命名规则 |
| `settings-5112d5d47fbe.js`                            |  91.3 KB | 149.8 KB | prettier  | 命名规则 |
| `settings-page-ce3b564aee3c.js`                       |  35.5 KB |  58.9 KB | prettier  | 命名规则 |
| `settings-host-dropdown-a80e924edf7c.js`              |   3.2 KB |   5.2 KB | prettier  | 命名规则 |
| `settings-command-menu-section-items-9ce3208ec6f0.js` |   3.0 KB |   4.7 KB | prettier  | 命名规则 |
| `settings-70b07b20c870.js`                            |   1.0 KB |   1.4 KB | prettier  | 命名规则 |
| `settings-8KXOPtTT-1a58c18eac1d.js`                   |   0.9 KB |   1.0 KB | prettier  | 命名规则 |
| `settings-route-state-24ba1ff4c511.js`                |   0.8 KB |   0.9 KB | prettier  | 命名规则 |
| `settings-loading-row-de4ab81779d6.js`                |   0.7 KB |   1.0 KB | prettier  | 命名规则 |
| `settings-external-section-944b703ae6e4.js`           |   0.7 KB |   0.9 KB | prettier  | 命名规则 |
| `settings-row-disclosure-d65042756aaf.js`             |   0.6 KB |   0.8 KB | prettier  | 命名规则 |
| `settings-2-CTBBUiFs-1b2583e71836.js`                 |   0.4 KB |   0.5 KB | prettier  | 命名规则 |
| `settings-2-CTBBUiFs-ddc6add5f9fd.js`                 |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `settings-8KXOPtTT-fdfa58f22c48.js`                   |   0.1 KB |   0.1 KB | prettier  | 命名规则 |

> 完整来源档案路径与 SHA-256 见 [`_INDEX.json`](_INDEX.json)；字符串/i18n 目录见 [`_CATALOG.json`](_CATALOG.json)。
