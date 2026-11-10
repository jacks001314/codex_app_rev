# app-shell — 窗口 chrome、tab 工作区与路由

**59 个文件 / 1.48 MB**，731 条 i18n 文案。

这是“工作区”的骨架：窗口 chrome + tab strip + **三向 pane**（left / right / bottom）+ 路由树。侧边页面本身在 `../side-panel/`，左侧导航在 `../left-nav/`。

## chrome/

`thread-app-shell-chrome-a031dfbe4962.js`（131 KB 格式化后）是核心。它定义了：

- DOM 语义标记：`app-shell-tab-strip`、`app-shell-tab`、`app-shell-route-tab`、`app-shell-tab-drop-target`；
- tab 的 kind：`local-thread`、`client-local-thread`、`new-tab`、`library-file`、`external-resource`、`mcp_app_resource`、`generated-image`、`open-file`、`file`、`image`、`google-drive`、`appgen-app`、`browser.in-app`、`browser`；
- pane 迁移：`Move to left pane` / `Move to right pane` / `Move to bottom pane`；
- 窗口化：`appShell.tabs.detachedDescription`、`restoreToTab`、`showDetachedWindow`、拖出窗口外的 toast `This tab isn't ready to fly yet`；
- tab 数超过 99 时的紧凑计数（`Compact tab count when more than 99 tabs are open`）；
- Chat pane 的 a11y 标签、`Chat toolbar`、`Task tabs`（`threadWorkspace.tabList`）；
- 兜底：`appShell.tabPanelRenderError.title/retry`、`appShell.tabPanel.worktreeProvisioning`。

## routing/

`tab-content-e2e2a8df4c1f.js`（380 KB）与 `tab-content-d61f09bbfe58.js`（177 KB）是 tab 内容分发器，内部含 `__vite__mapDeps([...])` 数字索引数组 —— 这是**还原懒加载依赖图**的入口。`tabs-efdcd8aaf082.js` 提供 tabs 原语。

路由常量集中在 `app-initial`（未入库，见 `../README.md` 的“未抽取部分”）：

```
/local  /local/:conversationId              /remote  /remote/:taskId
/hotkey-window  /hotkey-window/new-thread   /hotkey-window/thread/:conversationId
/hotkey-window/remote/:taskId               /share/:sharedConversationId
/chatgpt/quick-chat  /chatgpt/quick-chat-prewarm  /chatgpt/quick-chat/:conversationId
/global-dictation   /avatar-overlay   /detached-window   /debug
/settings  /settings/{personalization,usage,data-controls,keyboard-shortcuts,mcp-settings,codex-micro,plugins}
/library/*  /projects  /plugins  /plugins/:pluginId  /skills  /skills/plugins
/skills/manage  /skills/manage/plugins/:pluginId  /sites  /sites/:projectId
/pull-requests  /automations  /inbox→/automations  /remote-connections
/security/*  /select-workspace  /first-run  /welcome  /login  /plan-summary
/extension/panel/new  /connector/oauth_callback  /internal/demo-tools
/mcp-app  /mcp-app/:server/:toolName  /mcp-app/plugins  /mcp-app/plugins/:pluginId/:toolName
/settings/plugins/:server/:toolName  /codex-mobile  /diff  /gpts  /finances
browser-use/{history,downloads,passwords,extensions,contact-info,site-settings/*}
computer-use/messages   cloud-environments/*   connections/:connectionsTab[/:connectionsAction]
open-source-licenses   global-dictation/*   hotkey-window/*   library/*
```

thread 路由的 URL 参数有 zod 校验：`conversationId` 必须是 UUID，`diffFilter ∈ {branch, last-turn}`（nullable），`host = "threads"`，`protocol = "codex:"`，`view = "review"`（nullable），另有 `extraPathSegments` 与 `reviewPath`。

全局 `codexAppMode ∈ {chat, work, codex}` 通过 `NFt` schema 传递。

插件 id 有严格正则：

```
/^(?:plugins_[0-9a-f]{32}|(?:plugins~)?Plugin_[0-9a-f]{32}|plugin_[A-Za-z0-9][A-Za-z0-9_-]{0,247})$/
/^(?:plugins~)?Plugin_[0-9a-f]{32}$/      // 更严格的变体
```

保留 id：`openai-curated`、`openai-curated-remote`、`openai-primary-runtime`、`chatgpt-workspace`。

## layout/

`dialog-*.js`（6 个，合计约 500 KB）+ `dialog-host-1d92d05de566.js`（118 KB）+ `modal-ae0d5c4ae47c.js` + `dialog-action-cd89a4b0ac08.js` 构成对话框系统；`layout-33ea0ace304f.js`（33 KB）是布局原语；`panel-c0077b6fd5d1.js`（241 KB）是通用面板容器。

---

## 文件清单

### `_deps/`

| 文件                                        |    原始 |  格式化 | formatter | 来源                                               |
| ------------------------------------------- | ------: | ------: | --------- | -------------------------------------------------- |
| `use-pdf-pager-4c5c1a42c12a.js`             | 27.6 KB | 43.8 KB | prettier  | 闭包 ← `dialog-6755a5ca395c.js`                    |
| `cursor-chat-34408bd74625.js`               | 12.3 KB | 16.3 KB | prettier  | 闭包 ← `tab-content-e2e2a8df4c1f.js`               |
| `provider-52164e44ec28.js`                  | 11.5 KB | 19.2 KB | prettier  | 闭包 ← `tab-content-e2e2a8df4c1f.js`               |
| `tab-input-b06d4d1e6897.js`                 | 10.4 KB | 17.0 KB | prettier  | 闭包 ← `tab-content-e2e2a8df4c1f.js`               |
| `messages-e7d64bad4efd.js`                  |  6.7 KB |  8.5 KB | prettier  | 闭包 ← `dialog-6755a5ca395c.js`                    |
| `webview-c25ad6876dc9.js`                   |  3.6 KB |  6.1 KB | prettier  | 闭包 ← `tab-content-e2e2a8df4c1f.js`               |
| `view-control-labels-12b31a484acb.js`       |  3.1 KB |  4.6 KB | prettier  | 闭包 ← `thread-app-shell-chrome-a031dfbe4962.js`   |
| `model-780fee08912f.js`                     |  2.6 KB |  3.6 KB | prettier  | 闭包 ← `dialog-176b9c39862c.js`                    |
| `open-image-preview-d7d21c13ffb5.js`        |  2.4 KB |  3.3 KB | prettier  | 闭包 ← `dialog-6755a5ca395c.js`                    |
| `twitter-6618edee0f61.js`                   |  2.1 KB |  2.5 KB | prettier  | 闭包 ← `dialog-176b9c39862c.js`                    |
| `state-32f25f68addd.js`                     |  2.0 KB |  3.0 KB | prettier  | 闭包 ← `tab-content-e2e2a8df4c1f.js`               |
| `permission-dropdown-62b3ddc52f74.js`       |  2.0 KB |  3.3 KB | prettier  | 闭包 ← `dialog-176b9c39862c.js`                    |
| `file-preview-c9ab3ff2ac64.js`              |  1.4 KB |  2.0 KB | prettier  | 闭包 ← `dialog-6755a5ca395c.js`                    |
| `createLucideIcon-BrIFp4GW-ffee9f8c5e9f.js` |  1.0 KB |  1.8 KB | prettier  | 闭包 ← `layout-dashboard-C2kepW0N-7a897bbcae8b.js` |
| `read-error-f695c821b3d2.js`                |  1.0 KB |  1.5 KB | prettier  | 闭包 ← `dialog-fe98a7d2ac27.js`                    |
| `profile-state-f8d49dfda54b.js`             |  0.8 KB |  1.3 KB | prettier  | 闭包 ← `tab-content-e2e2a8df4c1f.js`               |
| `detail-section-state-48ff67356906.js`      |  0.8 KB |  1.2 KB | prettier  | 闭包 ← `dialog-fe98a7d2ac27.js`                    |
| `pointer-outline-5320026036ca.js`           |  0.8 KB |  1.0 KB | prettier  | 闭包 ← `tab-content-e2e2a8df4c1f.js`               |
| `chatgpt_projects-e9a551b28a0b.js`          |  0.5 KB |  0.5 KB | prettier  | 闭包 ← `dialog-86a8d8eb325a.js`                    |
| `panels-top-left-CeimgzDC-a355b5ed49f1.js`  |  0.4 KB |  0.5 KB | prettier  | 闭包 ← `layout-Dv_xhgkr-d4becf517b44.js`           |
| `tiny-invariant-e6f85c6caa3f.js`            |  0.2 KB |  0.2 KB | prettier  | 闭包 ← `dialog-6755a5ca395c.js`                    |

### `chrome/`

| 文件                                       |    原始 |   格式化 | formatter | 来源     |
| ------------------------------------------ | ------: | -------: | --------- | -------- |
| `thread-app-shell-chrome-a031dfbe4962.js`  | 80.7 KB | 130.8 KB | prettier  | 命名规则 |
| `thread-app-shell-chrome-e5c85156ae8a.css` |  0.3 KB |   0.4 KB | prettier  | 命名规则 |
| `thread-app-shell-chrome-86fff7ba1590.js`  |  0.1 KB |   0.1 KB | prettier  | 命名规则 |

### `layout/`

| 文件                                         |    原始 |   格式化 | formatter | 来源     |
| -------------------------------------------- | ------: | -------: | --------- | -------- |
| `dialog-ac1180167d3a.js`                     | 95.6 KB | 146.8 KB | prettier  | 命名规则 |
| `dialog-host-1d92d05de566.js`                | 74.1 KB | 118.4 KB | prettier  | 命名规则 |
| `dialog-6755a5ca395c.js`                     | 68.3 KB | 103.5 KB | prettier  | 命名规则 |
| `dialog-fe98a7d2ac27.js`                     | 46.9 KB |  67.1 KB | prettier  | 命名规则 |
| `dialog-a5737eeeef79.js`                     | 46.5 KB |  72.3 KB | prettier  | 命名规则 |
| `dialog-176b9c39862c.js`                     | 41.9 KB |  66.3 KB | prettier  | 命名规则 |
| `dialog-86a8d8eb325a.js`                     | 26.4 KB |  40.3 KB | prettier  | 命名规则 |
| `layout-33ea0ace304f.js`                     | 22.0 KB |  33.0 KB | prettier  | 命名规则 |
| `modal-ae0d5c4ae47c.js`                      |  6.0 KB |   9.7 KB | prettier  | 命名规则 |
| `dialog-action-cd89a4b0ac08.js`              |  2.2 KB |   3.6 KB | prettier  | 命名规则 |
| `dialog-formatting-fc43957278e1.js`          |  1.5 KB |   1.9 KB | prettier  | 命名规则 |
| `dialog-5d8305439615.css`                    |  1.0 KB |   1.2 KB | prettier  | 命名规则 |
| `layout-list-DRym2XZ1-bcac6f5c5d8e.js`       |  0.5 KB |   0.7 KB | prettier  | 命名规则 |
| `layout-dashboard-C2kepW0N-7a897bbcae8b.js`  |  0.5 KB |   0.7 KB | prettier  | 命名规则 |
| `layout-grid-sfxt1Jvs-fd96f44295ca.js`       |  0.5 KB |   0.6 KB | prettier  | 命名规则 |
| `layout-panel-left-CvSYlb6N-ac1f639402a2.js` |  0.4 KB |   0.6 KB | prettier  | 命名规则 |
| `layout-panel-top-ByVYquQ6-4f3f56dcb7ce.js`  |  0.4 KB |   0.6 KB | prettier  | 命名规则 |
| `layout-template-CNJVRQZN-e9b599f2d48f.js`   |  0.4 KB |   0.6 KB | prettier  | 命名规则 |
| `layout-Dv_xhgkr-d4becf517b44.js`            |  0.2 KB |   0.2 KB | prettier  | 命名规则 |
| `layout-panel-left-CvSYlb6N-db4a7ad74c69.js` |  0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `layout-dashboard-C2kepW0N-4ec5e7440327.js`  |  0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `layout-panel-top-ByVYquQ6-773b6027bbbb.js`  |  0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `layout-template-CNJVRQZN-752911e8758b.js`   |  0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `layout-grid-sfxt1Jvs-5de791e122fb.js`       |  0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `layout-list-DRym2XZ1-f9faa7a98d7f.js`       |  0.1 KB |   0.1 KB | prettier  | 命名规则 |

### `routing/`

| 文件                                 |     原始 |   格式化 | formatter | 来源     |
| ------------------------------------ | -------: | -------: | --------- | -------- |
| `tab-content-e2e2a8df4c1f.js`        | 237.8 KB | 380.4 KB | prettier  | 命名规则 |
| `tab-content-d61f09bbfe58.js`        | 110.0 KB | 177.3 KB | prettier  | 命名规则 |
| `tabs-efdcd8aaf082.js`               |   5.8 KB |   9.1 KB | prettier  | 命名规则 |
| `tab-content-3c4398fc3679.css`       |   3.8 KB |   5.1 KB | prettier  | 命名规则 |
| `route-off-DnnrIBjW-b5aa44ac9ad7.js` |   0.6 KB |   0.7 KB | prettier  | 命名规则 |
| `router-5NUb6VhQ-131583c78baa.js`    |   0.5 KB |   0.7 KB | prettier  | 命名规则 |
| `route-b6ohBPAk-9020ccdecec4.js`     |   0.4 KB |   0.5 KB | prettier  | 命名规则 |
| `route-off-DnnrIBjW-5c5eadf54189.js` |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `router-5NUb6VhQ-8eac2916cf4b.js`    |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `route-b6ohBPAk-44536109b42b.js`     |   0.1 KB |   0.1 KB | prettier  | 命名规则 |

> 完整来源档案路径与 SHA-256 见 [`_INDEX.json`](_INDEX.json)；字符串/i18n 目录见 [`_CATALOG.json`](_CATALOG.json)。
