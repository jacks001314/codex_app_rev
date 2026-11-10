# 内置浏览器（Browser Use）：Codex app 的功能面 与 Syntropy 本项目集成浏览器 的逐项对照

> 产出时间：2026-10-04。作者：Syntropy 通用 Agent（本仓库 project 会话）。
> 对象一：本机安装的 **OpenAI.Codex 26.928.4866.0**（`C:\Program Files\WindowsApps\OpenAI.Codex_26.928.4866.0_x64__2p2nqsd0c76g0`，进程名 `ChatGPT.exe`）。
> 对象二：本仓库 `desktop_app` / `syntropy_node` / `syntropy_master` 里落地的那套应用内嵌浏览器（iab）。
> 证据分级沿用 [README.md](README.md) 的 A/B/C：A = 安装包/本仓库代码与文案原文，B = 仓库源码（行号可能漂移），C = 结构推断。

---

## 0. 一句话结论

Codex app 的「内置浏览器」不是一个控件，而是**三块东西**：宿主里的浏览器 UI（Browser 侧边标签页/独立窗口，
带地址栏、标签条、查找、缩放、标注、下载、错误页）、**模型面**（`@oai/browser-desktop` + `browser`/`chrome`
两个插件：AX 优先 API、24 篇行为文档、`api.json` 契约）、以及**设置面**（`browser-use` 页 248 条文案、
`computer-use` 页按浏览器族分流、`extension` 页、`appshots` 页，外加 8 条子路由）。

Syntropy 把**模型面**做得相当完整（动作、capability、文档投递、标签页存活语义、CDP、MV3 扩展、
受管实例 + 随包浏览器运行时都已落地，见 [computer-use.md](computer-use.md) §8.2），
但**宿主 UI 面与设置面只落地了子集**：有 `BrowserPage` / `BrowserSettingsPage` 六个分节，
没有 DevTools 入口、书签/标签组、云浏览器、扩展商店与安装、密码与自动填充、站点权限矩阵、
CDP 授权开关、按浏览器族的 computer-use 设置等。

本次**没有**做 Codex app 的实机 UI 探索：本节点 computer-use 策略把 `ChatGPT`（Codex app）
与 `Syntropy`（本项目的桌面应用）一起放在**不可协商的自动化拒绝名单**上，理由原文是
`the assistant's own interface`。这与上游自己的安全文档同源（[computer-use.md](computer-use.md) §7.1：
`Do not automate the ChatGPT desktop app UI or Codex CLI or Codex extensions within Windows apps.`）。
所以对象一的功能面全部来自静态证据（A 级），没有运行时截图/交互证据。

---

## 1. 方法与证据边界

| 项               | 内容                                                                                                                                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 上游快照基线     | 代码与文案来自 `codex_app_rev/code/computer-use-26928/`（app `26.928.31416` / 包 `26.928.3736.0`，2026-10-01 采集）                                                                                                                                        |
| 本机实际安装版本 | `26.928.4866.0`（比基线新一个 build），因此**存在"新增/改名"的风险**；本文所有上游条目都按基线快照陈述                                                                                                                                                     |
| 上游 UI 实机探索 | **被策略拒绝，未做**。`computer` 动作读该窗口时的原文：`refusing to automate "ChatGPT": chatgpt is on the non-negotiable automation denylist (the assistant's own interface); product policy blocks this app`；对 `Syntropy` 同样拒绝                      |
| 本侧实机探测     | 只做成了**只读**部分：`browser capability_get` 对 `target=iab` 的十个命名空间逐项探测（结果见 §3.1）。随后尝试在应用内嵌浏览器里开一个标签页时，**用户用物理 Esc 中止了 Computer Use**，该轮所有后续 Computer Use 调用被终止，故本侧 UI 的"手点一遍"没有做 |
| 未做             | 未读凭据/token/SQLite/用户对话；未修改 `C:\Program Files\WindowsApps` 下任何文件；未对安装包做运行时插桩                                                                                                                                                   |

证据等级声明：§2 全部为 A 级（安装包文案与代码）或引用 [computer-use.md](computer-use.md)/[side-panel.md](side-panel.md)/
[settings-pages.md](settings-pages.md) 已登记的 A 级结论；§3 的源码条目为 B 级，`capability_get` 结果为**本次实测**。

---

## 2. Codex app 的「Built-in browser」

### 2.1 形态、后端枚举与交付方式

- **它是一个应用内 webview**，不是外部浏览器：随包有 `browser-page-preload.js`（511,863 B，26.903/26.928 两版都在，
  [changelog-26.928.md](changelog-26.928.md) §C），以及 `browser-route`、`template-browser-view`、
  `hidden-browser-use-webview-host`（隐藏 webview 宿主，给"Agent 自己开"的场景用）三个 chunk（A 级，文件名）。
- **后端枚举**（[computer-use.md](computer-use.md) §8.2，A 级）：`iab`（应用内嵌浏览器）、`chrome`、`edge`，
  另有 `mcpapps`（MCP App 标签页：不能新建/导航，点击用合成事件）。
- **云端浏览器是一等形态**：`chatgptConversations.cloudBrowser.*`（19 条）、`cloud-browser-side-panel`、
  `cloud-browser-preview`、`cloud-browser-local-live-view`、`cloud-browser-control-overlay`。
  文案给出语义：`liveView.takeControl = Click anywhere to use the browser`、`liveView.connecting = Connecting to cloud browser…`、
  `preview.timeline = Cloud browser activity timeline`、`auth.page.signingIn = Signing in to {site}`、
  `auth.disclosure = This login is shared with the remote browser session`（A 级）。
- **Agent 侧与宿主同进程**（上游形态）：模型在 `cua_repl` 的 js 工具里发声，由随包的
  `@oai/browser-desktop/service`（1.9 MB，带 `.wasm.br`）就地驱动 webview（[computer-use.md](computer-use.md) §8.2）。

### 2.2 UI 面（Browser 侧边标签页 + 独立窗口）

来源：`thread.browser.*`、`thread.sidePanel.browserTab*`、`thread.sidePanel.browserTabMenu.*`、
`browserSidebar.*`、`sidebar.browserMedia.*`、`browser.tabAudioMuteContextMenu.*`（A 级文案）。

| 能力                        | 证据（文案/代码）                                                                                                                                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 地址栏 + 地址建议 + 搜索    | `thread.browser.addressSuggestions`、`removeAddressSuggestion`、`search = Search the web`、`searchForQuery`、`url.copied`                                                                                       |
| 地址栏是否显示完整 URL      | 设置项 `showFullUrl.label = Show full URL`（"Include the path, query, and fragment in the address bar"）                                                                                                        |
| 后退 / 前进 / 重载          | `browserSidebar.contextMenu.{back,forward,reload}`；`browserSettings.navigation.{back,forward}`                                                                                                                 |
| 标签条与标签操作            | `thread.sidePanel.emptyBrowserTab = New tab`；右键菜单 `browserTabMenu.{copyUrl,duplicate,newTabToTheRight,reload,rename,openInExternalBrowser}`                                                                |
| 标签页媒体状态（14 种组合） | `thread.sidePanel.browserTab.{playingAudio,audioMuted,usingCamera,usingMicrophone,…}`（side-panel.md §6）                                                                                                       |
| 标签静音                    | `browser.tabAudioMuteContextMenu.{muteTab,unmuteTab}`                                                                                                                                                           |
| 全局媒体指示（跨会话）      | `sidebar.browserMedia.globalMenuTitle = Browser activity`、`openTab = Open`                                                                                                                                     |
| 缩放                        | `browserSidebar.zoomBanner.{zoomIn,zoomOut,reset}`                                                                                                                                                              |
| 页内查找                    | `codex.threadFindBar.*`（2 条，命中的是浏览器面）                                                                                                                                                               |
| 标注/评论（截图注释）       | `browserSidebarCommentOverlay.*`(19)、`browserSidebarCommentRuntime.*`、`thread.browser.captureScreenshot = Take a screenshot`、设置项 `browser.annotationScreenshots.*`；右键菜单 `commentWithCodex = Comment` |
| 右键菜单                    | `browserSidebar.contextMenu.{copyLink,openInBrowser,openLinkInNewTab,openExternalBrowser,inspect}` —— 其中 **`inspect = Inspect` 即开发者工具入口**                                                             |
| 浮动 composer               | `thread.browser.options.{showFloatingComposer,hideFloatingComposer}`（浏览器页里直接对页面提问/评论）                                                                                                           |
| 错误页                      | `browserSidebar.loadError.*`(19)：DNS/连接/证书/超时/代理/防火墙/离线 七类，各带 header+body+建议动作                                                                                                           |
| 与外部浏览器互跳            | `openExternalBrowser`、`linkDestinationPrompt.openInBrowser(Description)` / `openExternalBrowser(Description)`；设置项 `localUrlOpenTarget`（本地开发站点默认开在哪：内置 vs 默认浏览器）                       |
| 跨窗口/跨任务               | `browser.threadHandoff.restoreDetachedTabs`（任务迁移前把该任务的浏览器标签页从独立窗口收回来）、`unboundDraft`                                                                                                 |
| 浏览器内账号切换            | `browser-account-switcher-menu-item-*.js`（A 级 chunk）                                                                                                                                                         |

### 2.3 设置面

`browser-use` 是**一等设置页**，slug `browser-use`（`browser-use-settings-*.js`，26.928 为 92,031 → 144,166 B），
下挂 6 条子路由：`/settings/browser-use/{extensions,downloads,history,contact-info,passwords,site-settings/*}`；
`computer-use` 页另有 `/settings/computer-use/:browserFamily` 与 `/settings/computer-use/messages`
（[settings-pages.md](settings-pages.md)、[computer-use.md](computer-use.md) §6.4，A 级）。

文案量（A 级，`code/computer-use-26928/_catalog/i18n-messages.json`）：`settings.browserUse.*` **248 条**、
`settings.computerUse.*` 120 条。按分组列出的可配置项：

| 分组                  | 关键条目（原文摘录）                                                                                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 总开关 / 授权         | `control.description = Let ChatGPT control the built-in browser`、`approval.{alwaysAsk,neverAsk}.label`、`browserPluginSettings.{permissions,defaultPermission}`、`permission.{all,lowRisk,read,alwaysAsk,inheritDefault}`                                                                              |
| 网页权限矩阵          | `sitePermissions.matrix.{siteColumn,browsingColumn,downloadsColumn,uploadsColumn,actionsColumn}`、`websiteAccess = Browse`、`cdpAccess = Debug / CDP`、值 `allow/block/useDefault`、`Default permission`、`Add site permission`、`Managed by your organization`                                         |
| 站点设置子页（19 类） | `browserSettings.breadcrumb.siteSettings.*`：camera / microphone / location / notifications / javascript / images / sound / pop-ups / third-party cookies / clipboard / USB / protocol handlers / intrusive ads / automatic downloads / background sync / embedded content / protected content IDs      |
| 历史                  | `history.label`、`historyApproval.{alwaysAsk,disabled,neverAsk}`、`iabHistoryApproval`（内置浏览器历史是否对 ChatGPT 开放）、`browsingHistory.*`（搜索 / 按来源过滤 `agent`/`other`/`all` / 分页 / 删除 / `agentBadge = Agent`）                                                                        |
| 下载                  | `downloads.location.{label,change,reset,system}`、`downloads.prompt = Ask where to save downloads`、`downloadHistory.*`（暂停/续传/取消/打开/移除/搜索）；`downloads.history.label = Download history`                                                                                                  |
| 清除浏览数据          | `browser.clearBrowsingData{,.description}`、6 个可勾选类型（history / cookies / site data / cache / downloads / form data，含逐项 summary 与时间范围 lastHour/lastDay/lastWeek/lastMonth/allTime）、独立的 `browser-clear-browsing-data-dialog-view-*.js`                                               |
| 密码与自动填充        | `autofillAndPasswords.title`、`passwordManager.{label,description}`、`contactInfo.{label,description}`（地址/电话/邮箱）                                                                                                                                                                                |
| 扩展管理              | `extension` 设置节（`browser-extension-settings-*.js`）：安装/重装/移除/冲突/历史/站点工具/**全量 CDP 授权**；`fullCdp.description = Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions`，`fullCdp.elevatedRisk.label = Elevated risk`，可被组织策略禁用 |
| 站点工具（WebMCP）    | `webMcp.label = Enable site tools`、`webMcp.description`（允许 ChatGPT 发现并调用站点通过 WebMCP 暴露的工具）                                                                                                                                                                                           |
| 开发者                | `developerMode.title = Developer mode`                                                                                                                                                                                                                                                                  |
| 浏览器族设置          | `computer-use` 页的 `browser` / `chrome` / `edge` / `safari` / `moreBrowsers` / `install` / `manage`；`appshots` 页的快捷键、去向、音效                                                                                                                                                                 |

### 2.4 后端集成

1. **模型面 API**：首选无障碍树而非 DOM/坐标——`tab.ax.{write,click,setValue,pressKey,scroll,selectText,performSecondaryAction}`
   与 `drag/get/paste/typeText`；默认返回**与上一棵树的 diff**（`disableDiffing: true` 才全量）。
   `tab.capabilities.get(...)` 有 `cdp`/`webmcp`/`botDetection`/`pageAssets`，浏览器级有 `visibility`/`viewport`
   （[computer-use.md](computer-use.md) §8.2，A 级）。
2. **行为文档投递**：随包 24 篇模型面文档 + `docs/documents.json` 声明投递方式（`included` / `lookup` / `model`），
   条件有 `browserTypes` / `requiredTabCapabilities` / `requiredBrowserCapabilities` / `requiredApiMembers`。
   `browserAuth` 一篇独占 21,519 B，是最大的一份。
3. **CDP**：`tab.capabilities.get("cdp")` 的 `send` / `readEvents`；是否给"全量 CDP"由设置项 `fullCdp` 控制（默认关、可被组织禁用）。
4. **浏览器扩展链路**：Chrome 商店 ID `hehggadaopoacecdllhhajmbjkdcmajg`、Edge 商店 ID `odlomjlbamekndcpllcnffbgeohgkmjh`、
   原生消息宿主 `com.openai.codexextension`、Windows 清单目录 `AppData/Local/OpenAI/extension`、
   支持 chrome/edge/brave/opera/vivaldi；主进程 `worker.js` 暴露 `computer-use-worker` 一族方法
   （`skysightStatus/Start/Stop/Pause/Resume/GetSettings/UpdateSettings/UpdateObservationPolicy/ClearHistory`、`messagesSearchChats`）
   （[computer-use.md](computer-use.md) §8.3，A 级）。
5. **云浏览器**：远程会话 + preview/live view + 登录交接（`auth.*`）+ 活动时间线（§2.1）。
6. **装配链路**：主进程按 `surfaces` 重写 `.mcp.json` 注册 computer-use / browser 插件与 cua_node 运行时
   （[computer-use.md](computer-use.md) §2/§3，A 级）。

### 2.5 与其他模块的集成

- **侧边面板**：Browser 是右侧 pane 的一类 tab（`thread.sidePanel.openBrowserTab`），可换 pane、可拆独立窗口、可置顶
  （[side-panel.md](side-panel.md) §1/§3）。
- **对话/输入框**：浏览器标签页可被 composer 以 mention 引用（`plugin://…?mention=tab-v1`）、浏览器内浮动 composer、
  "Take a screenshot" 直接进对话、标注评论回写对话。
- **审批**：`confirmations.md` 的 **17 类风险 × 四档摩擦**（Hand-off / Always Confirm / Pre-Approval / No Confirmation）——
  删数据、过 CAPTCHA、金融交易、代表用户向第三方通信、上传文件、装新软件等；`[14]` 明确
  `Typing sensitive data into a form counts as transmission.`（[computer-use.md](computer-use.md) §7.2，A 级）。
- **Computer Use 共享**：同一个 `computer-use` 设置页管"允许的应用 + 浏览器"；`appshots`（截图即输入、快捷键、
  目的地、音效）跨浏览器与桌面复用。
- **插件体系**：`mcpapps` 作为浏览器后端之一；`browserPluginSettings` 决定插件工具默认是否需审批；
  `browser-plugin-share-page` 提供"把页面分享成插件/站点"的入口。
- **文件系统**：下载落到可配置目录（含系统 Downloads 回退）、下载历史可打开/在文件夹中显示；
  `file-type-handlers` 与"本地 URL 打开方式"决定本地站点走内置还是外部浏览器。

---

## 3. Syntropy 本项目集成浏览器（iab）现状

### 3.1 模型面（本次实测 + 源码）

**实测**（`browser capability_get`，`target=iab`，2026-10-04）：

| 命名空间                                                                                             | 结果                                                                  | 宿主给出的原因原文（摘要）                                                                                                       |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `cdp`                                                                                                | available（`evaluate`）                                               | "the in-app browser has no DevTools endpoint: evaluate runs in the page through the host, and raw page-level CDP is not exposed" |
| `management`                                                                                         | available（`tabs/open/new_tab/close/get_tab/selected_tab/title/url`） | 书签 / 标签组 / 审计轨迹**不暴露**                                                                                               |
| `user`                                                                                               | 不可用                                                                | iab 的标签页本身就是用户的标签页，要用 `tabs`                                                                                    |
| `viewport` `visibility` `webmcp` `botDetection` `pageAssets` `browserAuth` `content` `documentation` | 不可用                                                                | "driven through the desktop app's webview, which does not expose this capability"                                                |

`iab` 在 `browser list` 中的形状：`family=iab`、`name="Syntropy app browser"`、`profile_name="app"`、`user_tabs=true`、
`codex_session_id=node-…`；同一次 list 还给出受管的 `chrome` / `edge` 两档（`type=cdp`、独立 profile）。

**源码**：`syntropy_node/control/` 下 `browser_executor*.go`、`browser_locator.go`、`browser_cdp*.go`、
`browser_cua.go`、`browser_features.go`、`browser_content_exports.go`、`browser_element_info.go`、
`browser_keys.go`、`browser_external.go`、`browser_extension.go`、`browser_host*.go`、`browser_capabilities.go`、
`browser_docs.go`、`browser_backends.go`；随包文档 `syntropy_node/control/browserdocs/`（**22 篇**：10 included +
4 lookup + 8 capability，`go:embed` 进二进制），语义与上游对齐但正文自写（B 级）。

### 3.2 宿主 UI（桌面应用）

- `desktop_app/apps/desktop/src/renderer/BrowserPage.tsx`（64 KB）实测到的工具栏能力：
  后退 / 前进 / 停止-重载、地址栏（`placeholder="输入网址"`）、**在外部浏览器中打开**、**标注（Ctrl+.）**、
  **下载内容**入口、浏览器选项菜单、**缩放**（放大/缩小/重置）、**页内查找**（上一个/下一个/关闭）、
  **设备工具栏**（设备预设 / 视口宽高 / 旋转视口 / 退出设备模式）、标注评论（评论/放弃）。
  实测**没有**发现：DevTools/开发者工具入口、书签、标签组、标签静音（对 `devtools|开发者|书签|bookmark|静音|mute` 的
  全文检索命中数为 0）。
- `BrowserSettingsPage.tsx`（14.6 KB）六个分节：**浏览器**（清除 Cookie / 清除缓存 / 同时清除）、
  **历史记录**（列表、打开、单条移除、全部清除；存储是渲染层 `localStorage["syntropy.browser-history.v1"]`）、
  **下载内容**（来自宿主 `listDownloads`，进行中显示进度、完成可"在文件夹中显示"、可清除）、
  **扩展程序**（`loadExtension` 加载已解压扩展、移除）、**密码和自动填充**（当前是空态占位"没有保存的密码或联系信息"）、
  **网站设置**（按 origin 的 allow/block）。
- `browser-host-tabs.ts`：标签页存活语义与上游 iab 同义（Agent 开的回合结束回收、mark 跨回合、
  用户手开的不动、mark 是 turn 作用域）。
- `src/main/bridge/browser-tool-relay.ts` / `browser-tool-request.ts`：**iab 的后端集成**——
  取件 `GET /api/browser/tool-calls?waitMs=…`（长轮询，默认 20 s）+ 回执
  `POST /api/browser/tool-calls/{id}/respond`，主进程取件、渲染层执行（只有渲染层有那扇 webview）。

### 3.3 节点 / 主控侧

- iab 走控制面中转：Node 上抛 `domain=agent.browser` 的 `BrowserToolCall` → Master 内存登记 +
  长轮询接口 → 桌面主进程取件 → 渲染层执行 → `domain=browser action=result` 回填
  （[computer-use.md](computer-use.md) §8.2，A/B 级）。
- 受管实例：独立 `--user-data-dir` + `--remote-debugging-port=0` 握手，由**随包 Chromium for Testing**
  （`browser-runtime-<os>-<arch>.tar.gz`）拉起，便于 `--load-extension` 装随包的 MV3 扩展
  （`syntropy_node/control/browserext/`，零 host permission，只开 bookmarks/tabGroups/tabs/windows/storage）——
  即书签/标签组/审计轨迹在**受管实例**上有，但在 **iab 上没有**。
- 外部浏览器：`browsers_connect` + `user_*` 家族（接用户自己的 Chrome/Edge 的 DevTools 端点）。

---

## 4. 逐项对照

图例：✅ 具备（同义落地）｜🟡 部分（只落一档 / 只落数据面没有 UI）｜❌ 缺失｜⛔ 平台边界（上游自己也不提供）

### 4.1 模型面（Agent 能不能用）

| 能力                                                              | Codex app                   | Syntropy                            | 说明                                                                                                                  |
| ----------------------------------------------------------------- | --------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| iab / 受管 chrome / edge 三档                                     | ✅                          | ✅                                  | 本侧 `browser list` 实测三档都在（iab + cdp×2）                                                                       |
| `mcpapps` 后端                                                    | ✅                          | ❌                                  | 本侧没有 MCP App 标签页后端                                                                                           |
| AX 优先读写动作                                                   | ✅ `tab.ax.*`               | ✅ 同名动作                         | `read`/`click`/`type`/`key`/`scroll`/`set_value`/`select_text`/`paste`/`perform_secondary_action`/`drag`/`screenshot` |
| 默认返回 diff                                                     | ✅                          | ✅                                  | 本侧 `read` 同语义                                                                                                    |
| Playwright 门面（locator/element_info/wait/history/dom_snapshot） | ✅                          | ✅                                  | 本侧 `locator_*` / `element_*` / `wait_*` / `history` / `dom_snapshot`                                                |
| `cdp` capability（send/readEvents）                               | ✅                          | 🟡                                  | 受管实例上有 `cdp_call`/`cdp_events`；**iab 上只有 `evaluate`**（宿主没有 DevTools 端点，实测原文见 §3.1）            |
| `viewport` / `visibility`                                         | ✅                          | 🟡                                  | 受管实例有；iab 上宿主明确不暴露                                                                                      |
| `webmcp`（站点工具）                                              | ✅                          | ✅（受管）                          | 本侧 `webmcp_tools`/`webmcp_call` 已在 capability 表内；iab 不暴露                                                    |
| `pageAssets` / `content`（导出 pdf/html/text、后台抓正文）        | ✅                          | ✅（受管）                          | iab 不暴露                                                                                                            |
| `botDetection`                                                    | ✅（4 类原因）              | ✅（受管）                          | 只记主机名                                                                                                            |
| `browserAuth`（自助登录/密码管理）                                | ✅（21.5 KB 文档）          | ✅ 动作位（`browser_auth_request`） | 语义对齐；**宿主 UI 面没有对应界面**（见 4.2）                                                                        |
| `management`（书签/标签组/审计轨迹）                              | ✅                          | 🟡                                  | 受管实例有（MV3 扩展 + `management_call`/`management_get_audit_trail`）；**iab 明确不暴露**                           |
| 用户浏览器的 `user.*`（openTabs/claimTab）                        | ✅（extension 家族）        | ✅                                  | 本侧用 `browsers_connect` + `user_*`                                                                                  |
| 标签页存活 mark（turn 作用域）                                    | ✅（仅 extension/iab 生效） | ✅                                  | iab 与受管实例都按 iab 语义实现                                                                                       |
| 行为文档投递（included/lookup/model + when）                      | ✅ 24 篇                    | ✅ 22 篇                            | 正文自写，非搬运                                                                                                      |
| 17 类风险 / 四档摩擦审批                                          | ✅                          | ✅                                  | `confirmations.md` 已按本节点动作改写                                                                                 |
| 云浏览器（远程会话 + live view + 登录交接）                       | ✅                          | ❌                                  | 本侧没有云端浏览器概念                                                                                                |

### 4.2 宿主 UI 面（用户看得见的那扇浏览器）

| 能力                                              | Codex app                             | Syntropy     | 说明                                                                 |
| ------------------------------------------------- | ------------------------------------- | ------------ | -------------------------------------------------------------------- |
| 内嵌浏览器页 + 地址栏 + 前后退/重载               | ✅                                    | ✅           | BrowserPage 工具栏（B 级，实测源码）                                 |
| 标签条（新建/复制/重命名/右移/复制 URL/外部打开） | ✅                                    | 🟡           | 有标签页与存活记账；源码里未见"复制/重命名/新标签在右侧"这组菜单文案 |
| 标签媒体状态（14 种组合）+ 全局媒体指示 + 静音    | ✅                                    | ❌           | 本侧 BrowserPage 对 mute/媒体状态 0 命中                             |
| 缩放 / 页内查找 / 设备视口工具                    | ✅ / ✅ / （上游未见独立设备工具）    | ✅ / ✅ / ✅ | 本侧设备工具栏反而是强项                                             |
| DevTools / Inspect                                | ✅（右键 `Inspect` + `fullCdp` 设置） | ❌           | 本侧源码未见入口（0 命中）                                           |
| 书签 / 标签组                                     | ✅（受管与扩展链路）                  | ❌（UI 面）  | 数据面在受管实例上有，app UI 没有                                    |
| 页面标注 / 截图评论（`Comment with Codex`）       | ✅                                    | 🟡           | 本侧有"标注 (Ctrl+.)"与评论，但是否回写对话未见对应文案              |
| 浮动 composer（在页面上直接问）                   | ✅                                    | ❌           | 本侧未见                                                             |
| 错误页（DNS/证书/超时/代理/离线 7 类）            | ✅                                    | ❌           | 本侧未见（由 webview 默认页/空白承担）                               |
| 云浏览器 preview / live view / timeline           | ✅                                    | ❌           | —                                                                    |
| 独立窗口 + 任务迁移时收回 detached tabs           | ✅                                    | ❌           | —                                                                    |
| 浏览器内账号切换                                  | ✅                                    | ❌           | —                                                                    |
| 下载面板（暂停/续传/在文件夹中显示/清除）         | ✅                                    | 🟡           | 有列表 + 进度 + 在文件夹中显示 + 清除；未见暂停/续传                 |

### 4.3 设置面

| 设置                                                            | Codex app                                 | Syntropy                        | 说明                                                        |
| --------------------------------------------------------------- | ----------------------------------------- | ------------------------------- | ----------------------------------------------------------- |
| 独立"浏览器"设置页                                              | ✅ `browser-use`（248 条文案 / 6 子路由） | 🟡 `BrowserSettingsPage` 6 分节 | 结构像，密度差一个量级                                      |
| 总开关与审批策略（alwaysAsk/neverAsk/lowRisk/all/read）         | ✅                                        | ❌                              | 本侧权限模型在 Master/节点侧，无此 UI                       |
| 网页权限矩阵（Browse/Download/Upload/CDP × 站点）               | ✅                                        | 🟡                              | 本侧只有 origin 级 allow/block 两态                         |
| 站点设置 19 类子页                                              | ✅                                        | ❌                              | —                                                           |
| 历史（搜索/来源过滤/分页/`Agent` 徽标/是否允许 ChatGPT 读历史） | ✅                                        | 🟡                              | 本侧有本地历史列表 + 清除 + 移除；无搜索/过滤/授权开关      |
| 下载（保存位置、是否询问、历史管理）                            | ✅                                        | 🟡                              | 有历史与清除；无保存位置/询问开关                           |
| 清除浏览数据（6 类 × 5 个时间范围 + 独立对话框）                | ✅                                        | 🟡                              | 只有 Cookie / 缓存（含组合），无时间范围与站点数据/表单数据 |
| 扩展管理（安装/重装/移除/冲突/历史/全量 CDP 授权）              | ✅                                        | 🟡                              | 有"加载已解压"+"移除"；无安装/重装/冲突/CDP 授权            |
| 密码与自动填充（含联系人信息）                                  | ✅                                        | ❌                              | 本侧是空态占位                                              |
| 站点工具 WebMCP 开关                                            | ✅                                        | 🟡                              | 能力在受管实例有，无开关 UI                                 |
| 开发者模式 / 全量 CDP 开关（含组织策略禁用）                    | ✅                                        | ❌                              | —                                                           |
| 是否显示完整 URL                                                | ✅                                        | ❌                              | —                                                           |
| 本地 URL 打开去向（内置 vs 默认浏览器）                         | ✅                                        | ❌                              | —                                                           |
| 按浏览器族的 computer-use 设置（chrome/edge/safari/more）       | ✅                                        | ❌                              | 本侧设置页无浏览器族概念                                    |
| appshots（截图即输入：快捷键/去向/音效）                        | ✅                                        | ❌                              | 本侧有 screenshot 能力，没有"截图即输入"的偏好与入口        |

---

## 5. 缺口排序与建议（按"投入/收益"）

1. **iab 的能力位是宿主决定的，别在文档里假装有**：§3.1 的实测输出已经是这套诚实语义的体现（缺哪一档就 `available:false` + 原因）。
   要继续保持：新增能力前先在宿主（`BrowserPage`/relay）落地，再放开 `capability_get`。
2. **低成本高感知的 UI 补齐**：① 右键菜单（复制链接 / 在新标签打开 / 在外部浏览器打开）；② 标签条操作（复制 URL、重命名、新标签在右侧）；
   ③ 错误页分型（DNS/证书/超时/代理/离线）；④ 下载的暂停/续传。
3. **设置面**：把 `BrowserSettingsPage` 从"六个分节"扩成"六节 + 子页"，优先补
   ① 清除浏览数据的类型×时间范围与独立对话框；② 历史的搜索/来源过滤（本侧其实已有 `Agent` 概念：`openedByAgent`）；
   ③ 下载位置与"是否询问"；④ WebMCP/站点工具的开关位（能力已在受管实例）。
4. **要么做真、要么明确不做**：DevTools/Inspect 与"全量 CDP"是上游有而我们完全没有的一档。
   若受管实例已经能走 `cdp_call`，"给用户一个 Inspect 入口"是可用现有能力换来的一致性收益；
   若不打算做，建议在 `browserdocs/` 里显式写"本产品不提供 DevTools"，避免模型/用户反复猜测。
5. **不要为了对齐而上"云浏览器 / 独立窗口 / 账号切换"**：这三项与 Syntropy 的本地优先架构张力最大，
   属于产品决策而非能力补齐，建议单列议题。
6. **上游版本漂移**：本文上游快照是 `26.928.3736.0`，本机实际装的是 `26.928.4866.0`。
   下次动这块前，先按 [code/README.md](code/README.md) 重抽一次（MSIX 升级会替换整个版本目录，旧 `app.asar` 事后不可得）。

---

## 6. 复现与证据索引

```powershell
# 1) 上游设置面文案（A 级）：settings.browserUse.* 共 248 条
$j = Get-Content codex_app_rev/code/computer-use-26928/_catalog/i18n-messages.json -Raw -Encoding UTF8 | ConvertFrom-Json
$j.groups.messages | Where-Object { $_.id -like 'settings.browserUse*' } | Select-Object id, text

# 2) 上游浏览器 UI chunk 清单
Get-ChildItem codex_app_rev/code/computer-use-26928/computer-use/chrome, codex_app_rev/code/settings/pages -Filter *browser*

# 3) 上游浏览器行为文档与契约（需在安装目录只读复核）
#    24 篇，含 api.json(65,815 B) / accessibility.md / confirmations.md / capabilities/**
#    C:\Program Files\WindowsApps\OpenAI.Codex_<ver>\app\resources\app.asar（只读）

# 4) 本侧实测（只读，未做写动作）
#    browser capability_get(target=iab, capability=<cdp|viewport|visibility|webmcp|botDetection|
#      pageAssets|browserAuth|management|user|content|documentation>)
#    browser list / tabs(target=iab)
```

- 上游：`codex_app_rev/code/computer-use-26928/**`（chrome / settings / approvals / capture / policy / history / _catalog）、
  [computer-use.md](computer-use.md) §5.3/§6.4/§6.5/§7.1-§7.4/§8.2/§8.3/§9/§10、
  [side-panel.md](side-panel.md) §3/§6、[settings-pages.md](settings-pages.md) §"浏览器相关子路由"。
- 本侧：`desktop_app/apps/desktop/src/renderer/BrowserPage.tsx`、`BrowserSettingsPage.tsx`、`browser-host-tabs.ts`、
  `src/main/bridge/browser-tool-relay.ts`、`browser-tool-request.ts`、`syntropy_node/control/browser_*.go`、
  `syntropy_node/control/browserdocs/`、`desktop_app/tests/contract/browser-tool-*.contract.test.ts`。

**本次未完成的验证**：Codex app 的**实机 UI 走查**（被自动化策略拒绝，见 §1）与本侧 **iab 写动作实机往返**
（用户在 Computer Use 上按了物理 Esc，本轮所有 Computer Use 调用被终止）。这两条需要用人工操作或换一台
不把这两个 app 放进拒绝名单的节点来补。
