# 证据索引与取证方法

> **最新快照：26.1103.4239.0（2026-11-09）**。安装根为
> `C:\Program Files\WindowsApps\OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0`；
> 代码 `code/app-261103/`，清单 `inventories/inventory-261103.json`。
> 本文下面的 26.903 / 26.1013 / 26.1016 内容作为历史索引保留；最新锚点见 §0。

采集时间 **2026-09-11**（Asia/Hong_Kong）。安装根目录：

```
C:\Program Files\WindowsApps\OpenAI.Codex_26.903.9818.0_x64__2p2nqsd0c76g0
```

---

## 0. 26.1103 快速索引

| 项目 | 路径 |
| --- | --- |
| 安装根 | `C:\Program Files\WindowsApps\OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0` |
| `app.asar` | `app\resources\app.asar`（761,023,153 B，SHA-256 `FB47D6…266AA`） |
| 全量清单 | `inventories/inventory-261103.json`（20,127 条目 / 19,793 文件 / 334 目录） |
| 代码快照 | `code/app-261103/`（18 模块 / 201 文件；172 个 webview chunk + 29 个主进程文件） |
| 抽取计划 | `code/_plan/plan-261103.json` |
| 设置注册表 | `code/app-261103/settings/_SETTINGS_MAP.json` |
| RPC 方法表 | `code/app-261103/main-process/_APP_SERVER_METHODS.json` |
| 机器可读身份 | `manifest.json` |
| 工具链 | `code/tools/`（Rspack 专项脚本见 README） |

### 0.1 Bundle 锚点

| 面 | chunk（`webview/assets/async/` 下） |
| --- | --- |
| 渲染入口 / runtime | `webview/assets/782259.7a3e865ee5.js`、`727403.da6b00f04b.js`、`158624.0baba19172.js`、`348410.792d1c9584.js` |
| Learning / DIL | `816316.7fb0d0e0c7.js`、`442953.6e80574cdf.js`、`457705.f3ff9fbb70.js`、`708390.17710d5ff1.js`、`590108.ec478ff22c.js`、`842103.e91c773d63.js`、`204920.db637520e0.js`、`299366.cf79ea855a.js` |
| Business Hub | `182735.bb2cb0d2af.js`（8.3 MB 共享）、`394872.b88ad78e2a.js`、`272308.2509930e34.js`、`751190.45d443126d.js` |
| Workspace Agents | `935979.a5260b2a69.js`、`111761.48cb3bc76b.js`、`306668.a88d898425.js` |
| Security / Rosalind | `220821.b4a9b80850.js`、`720410.9eca2290fe.js`、`312026.87adc043a1.js`、`922492.8f97ddc9a7.js` |
| 设置注册表 | `405910.89912dbb76.js`、`499225.6d2e47bea2.js`、`324957.776af63e2a.js` |
| Spaces / Pages | `384375.45e1f0cefc.js`、`101313.c9b3ce267b.js`、`151642.8ff0baaac3.js` |
| 主进程 | `.vite/build/early-bootstrap-199-e3316cddb4ea6a6b.js`、`preload.js` |

### 0.2 可 grep 的关键锚点

| 结论 | 锚点字符串 |
| --- | --- |
| 渲染层是 Rspack | `__rspack_esm_ids`、`__webpack_modules__` |
| chunk 映射 | `p.u=e=>"assets/async/"`、`p.miniCssF` |
| DIL 运行时 | `DIL.render`、`dil-renderer`、`dil.action`、`dil.error` |
| Learning API | `/learning/courses/`、`/learning/flashcards/`、`x-openai-use-sheep` |
| Business Hub | `/business-hub/`、`businessProfiles.`、`ads_manager.` |
| Security | `security.scanSetup`、`security.findings`、`/security/findings` |
| Workspace Agents | `workspaceAgents.builder`、`addChannelAutomation` |
| 分块流 | `codex-host-chunked-message-v1`、`codex_desktop:chunked-message-ack` |

### 0.3 复核命令（全部只读）

```powershell
# 包身份
Get-AppxPackage -Name OpenAI.Codex | Select Name,Version,PackageFullName,InstallLocation

# 校验和
$R = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0"
Get-FileHash "$R\app\resources\app.asar","$R\app\ChatGPT.exe","$R\AppxManifest.xml" -Algorithm SHA256

# chunk 映射 / i18n 全扫（需改脚本顶部 archive 常量）
node codex_app_rev\code\tools\chunkmap.mjs
node codex_app_rev\code\tools\scan-messages.mjs

# 定向检索（字符窗口，适合单行 bundle）
node codex_app_rev\code\tools\search.mjs "DIL.render" --after 500 --limit 5

# 已抽取代码里按行检索
Select-String -Path codex_app_rev\code\app-261103\learning\*.js -Pattern "DIL.render"
```

### 0.4 26.1103 的证据边界

- 只抽了 172/9,326 个 webview chunk；模块归属是按 i18n 命名空间聚类（C 级）。
- `p.u` 解析出 **1 个 JS 映射文件在清单中不存在**，无法抽取。
- 未执行 DIL 组件，未调用任何 HTTP / RPC，未打开用户数据。

## 1. 证据等级

| 等级  | 定义                                                                                                                | 本次占比                                   |
| ----- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **A** | 安装包直接证据：`AppxManifest.xml`、ASAR 目录、CSS/JS bundle 中的资源名、字符串字面量、i18n `description`、静态逻辑 | 绝大多数                                   |
| **B** | 本仓库直接证据：`desktop_app`、`api/proto`、`syntropy_master`、`syntropy_node` 源码                                 | 沿用 2026-09-09 的对照，**本次未重新核验** |
| **C** | 结构推断：由 bundle 命名、组件边界、状态组合或调用形态推断的行为                                                    | 正文中逐处标注                             |

一个重要的方法论说明：**minified 代码丢失了标识符，但保留了每一个字符串字面量**。Codex 用 react-intl 描述符 `{id, defaultMessage, description}`，其中 `description` 是写给翻译者的**开发者意图说明**，信息量常常超过文案本身。本次分析的主要突破都来自这 13338 条描述符（`code/_catalog/i18n-messages.json`），而不是试图还原压缩后的控制流。

典型例子：`settings.general.followUpQueueMode.interrupt` 的 `defaultMessage` 是 `Steer`，只看 id 会以为 Steer = 打断；它的 `description` 写着 “Option label for **applying a follow-up message to the active Codex run instead of queuing it**”，才澄清了语义。

## 2. 直接检查过的文件

| 文件                                                                                 | 用途                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `AppxManifest.xml`                                                                   | 包身份、能力、协议、文件关联、COM surrogate、防火墙规则      |
| `app\owl-shell-runtime.json` / `owl-app.ini` / `app\resources\owl-electron-app.json` | Owl shell 运行时、userData 目录名、打包来源与运行时哈希      |
| `app\ChatGPT.exe` / `app\resources\codex.exe` / `app.asar` / `busy-bar.asar`         | 校验和（见 `manifest.json`）                                 |
| `app.asar:package.json`                                                              | 应用版本、build number、flavor、Electron/Vite 版本、全部依赖 |
| `app.asar:.vite/build/*`（20 个）                                                    | 主进程、preload、worker、启动链                              |
| `app.asar:webview/index.html`                                                        | 启动画面、Tailwind 层序、CSP 占位符                          |
| `app.asar:webview/assets/*`（7981 个中抽取 627 个 + 64 份菜单本地化 = 691）          | 渲染层模块                                                   |
| `app.asar:native-menu-locales/*`（64 个）                                            | 原生菜单本地化                                               |
| `app\resources\native\*.node`                                                        | 5 个原生扩展（仅列名，未反汇编）                             |
| `app\pyproto\google\protobuf\*`                                                      | Python protobuf 运行时（仅列名）                             |
| `%USERPROFILE%\.codex\`                                                              | **仅目录名与文件大小**，未打开任何数据库/凭据/日志正文       |

## 3. Bundle 路径索引（26.903）

抽取到本地的 691 个 chunk 分布在 `code/` 的 8 个模块下，逐文件的 asar 来源路径、原始/格式化字节数、SHA-256、以及“为什么被选中”都记录在各模块的 `_INDEX.json` 里。下面只列**关键锚点**。

### 入口与共享运行时（未入库，检索用 `.work/big/`）

```text
webview/index.html
webview/assets/index-5232d4cce9a2.js                     renderer 入口
webview/assets/app-initial-f094ef01c64d.js               10.0 MB  路由表/store/协议层
webview/assets/app-primary-4c40d73a1074.js                7.8 MB
webview/assets/app-initial-49fc08c26651.css               804 KB   全部设计 token
webview/assets/app-primary-d815831c9bad.css               144 KB
webview/assets/rolldown-runtime-c05d78c594d1.js           每个 chunk 都 import 它
```

### 3.1 26.1013 的关键 bundle 锚点

```text
webview/assets/app-initial-5851df3f6cb1.js     13.7 MB   路由 / 设置注册表 / 协议 / store
webview/assets/app-shared-bbfeca5e5737.js       5.5 MB   26.1013 新增共享组件层
webview/assets/app-primary-fe8a450b3b04.js      2.3 MB   主界面 / realtime voice
webview/assets/register-Civ4p15u-*.js           4.6 MB   编辑器 / 语法运行时
webview/assets/page-bootstrap-display.worker    525 KB   Pages 首屏 worker
webview/assets/orbit-character-*/runtime/*      约 17 MB dot Orbit 角色
```

共享 bundle 的 light-format 副本在 `.work/big-261013/`：app-initial 16.4 MB、
app-shared 7.0 MB、app-primary 2.9 MB。app-initial 单文件约 6 分钟，其余几秒。

`app-initial` 中的关键锚点行号（light-format 后，仅供本次复核，升级即失效）：

| 内容                                                                                                      | 行              |
| --------------------------------------------------------------------------------------------------------- | --------------- |
| 路由常量表（`/hotkey-window`、`/local`、`/remote`、插件 id 正则、thread 参数 zod schema、`codexAppMode`） | 82144           |
| 合成 item 类型判别（`automaticApprovalReview`/`contextCompaction`/…/`worktreeInit`）                      | 109230          |
| `steeringUserMessage` 构造器                                                                              | 109146          |
| steer 对账（`Ein`/`Din`/`Oin`）与 `pausedReason` 常量                                                     | 109196–109300   |
| app-server 协议版本 `0.143.0-alpha.32`                                                                    | 106840 附近     |
| 设置 slug 全表（`.` 拼接）与有序 `[{slug}]`                                                               | 334600 / 334612 |
| 设置 section → lazy loader 映射（`Bjo`）                                                                  | 336390          |
| `LocalConversationPage` / `RemoteConversationPage` 懒加载                                                 | 334720 附近     |
| 路由 `<Route>` 元素树                                                                                     | 338990–339300   |
| `codex.command.composer.*` 命令描述符                                                                     | 355745–355810   |
| `codex.commandDescription.composer.*`                                                                     | 356290–356320   |
| `settings.general.*` 描述符（含 `followUpQueueMode`）                                                     | 374370–374430   |

### 3.2 26.1016 锚点（历史）

```text
webview/assets/app-initial-ad16eaadf81f.js      14.6 MB   路由 / 设置 / 协议 / 全局 store
webview/assets/app-shared-2feb3d4c6fcc.js        5.9 MB   共享组件 / hooks / 查询层
webview/assets/app-primary-3e00728c2a4c.js       2.5 MB   安全提示 / 主界面 / realtime voice
webview/assets/app-initial-9d42883ac737.css      281 KB   初始主题与设计 token
```

共享 bundle 的 light-format 副本在 `.work/big-261016/`。26.1016 的关键本地 chunk：

| 功能 | 文件 | 可 grep 锚点 |
| --- | --- | --- |
| Gateways | `settings/shell/settings-c2fddca9a1ec.js` | `settings.gateways.title`、`account/bedrock/discover`、`Reply with exactly: gateway-ok` |
| Biometric | `settings/shell/settings-d7661829b85a.js` | `/api/identity/service/biometric-factors`、`face-voice-prototype-v1` |
| Rosalind API | `app-shell/_deps/persona-client-7dd1d4a8ca29.js` | `/rosalind/access/context`、`/rosalind/access/applications` |
| Rosalind routes | `app-shell/routing/route-e1a01c1df42e.js` | `/rosalind/application`、`/rosalind/application/status` |
| Browser auth header | `aeon/_deps/browser-auth-header-b685c2e849ed.js` | `chatgptConversations.cloudBrowser.auth.page.title` |
| USB passkey | `settings/_deps/usb-passkey-dialog-e76eaeb4d0d0.js` | `restricted.aeon.passkey.request`、`connect-key` |
| MCP approval | `aeon/_deps/mcp-request-card-6a35b7fc0e14.js` | `composer.mcpToolCallApproval.elevatedRiskLabel` |
| Sites appearance | `chatgpt-surfaces/_deps/dropdown-6c3f6bdb91ed.js` | `sitesPreview.customization.presets`、`--site-primary` |
| Business invite | `app-shell/_deps/form-64562a4532a4.js` | `WorkspaceMembers.seatTypeCodexSubtitle` |
| Template picker injection | `main-process/build/main-CT5a1yCd.js` | `artifactTemplatePicker`、`openai_artifact_template_picker` |

安装目录外但随包的源码：

```text
resources/artifact-template-picker/server.mjs
  serverInfo.name = openai_artifact_template_picker
  tools: list_artifact_templates, choose_artifact_template
```

### 五块界面

```text
# 左边导航
webview/assets/sidebar-{new-chat,tasks,projects,library,plugins,search,more}-icon-*.js   Lottie JSON
webview/assets/sidebar-onboarding-checklist.electron-1d409739925f.js
webview/assets/sidebar-onboarding-checklist-task-config-17473bd614db.js
webview/assets/unified-library-page-ef847054fa9e.js
webview/assets/library-page-f2624aa4e395.js

# 工作区对话区
webview/assets/local-conversation-page-3f93e4c62cc7.js
webview/assets/remote-conversation-page-8ce4bf8a7d6c.js
webview/assets/chatgpt-conversation-page-733818e9db52.js
webview/assets/local-conversation-thread-a2bcd054c9d2.js               345 KB / 20525 行
webview/assets/local-conversation-thread-turn-entries-3bc0985c25c6.js  ★ 完全可读
webview/assets/local-conversation-turn-8acd99401e74.js
webview/assets/thread-virtualizer-4f61d89b50be.js                        与 26.901 逐字节相同
webview/assets/thread-scroll-layout-4583603e4217.js (+ .css)
webview/assets/thread-scroll-controller-context-value-6a9e93eb1505.js
webview/assets/thread-user-message-navigation-rail-app-4703491a5992.js (+ .css)
webview/assets/conversation-markdown-70a42265cc66.js
webview/assets/local-conversation-git-actions-f27d2904645d.js

# 对话框
webview/assets/composer-provider-7434c8b2fdca.js                        ★ response spacer + store
webview/assets/composer-utility-bar-85736f3cc588.js                     export ComposerUtilityBar
webview/assets/composer-action-bar-run-location-dropdown-493913fdcca2.js
webview/assets/composer-project-selector-17ef0c338d41.js
webview/assets/composer-work-home-plugins-control-40bb3845a52f.js
webview/assets/home-composer-mode-toggle-3e742c6c7534.js
webview/assets/primary-composer-at-mention-list-f7e9ab40467d.js
webview/assets/right-panel-composer-overlay-7bbacd6f9f94.js
webview/assets/browser-composer-disclaimer-72402b5f9ca1.js
webview/assets/composer-39c510ee3609.js                                 export BrowserSkillsComposer
webview/assets/queued-message-list-16b1f97652af.js
webview/assets/quick-chat-window-e34d91db747a.js
webview/assets/global-dictation-page-526accc365c3.js
webview/assets/avatar-overlay-quick-chat-bar-6faa49a506f3.js

# 侧边页面
webview/assets/thread-side-panel-tab-content-3335e9fb2381.js            168 KB / 6144 行
webview/assets/thread-side-panel-tabs-609ba0f9f71f.js                   ★ 公开 API 全集
webview/assets/thread-side-panel-tabs-15e3c4c648ed.js                   含两个 return !1 禁用桩
webview/assets/thread-app-shell-chrome-a031dfbe4962.js                  131 KB
webview/assets/cloud-automation-detail-panel-c76d4ae4bfb4.js
webview/assets/chatgpt-sources-side-panel-tab-99e831d8b9d6.js
webview/assets/local-conversation-sources-side-panel-tab-5249bb6f5cea.js
webview/assets/thread-pull-request-tab-content-e83709e82efb.js
webview/assets/toggle-thread-summary-panel-ce87f217123a.js
webview/assets/thread-panel-toggle-button-78c146087e1c.js
webview/assets/subagent-activity-chip-group-e05e8cab2038.js             462 KB
webview/assets/text-file-editor-tab-content.electron-b517f3f85a48.js    400 KB
webview/assets/PopcornElectron{Workbook,Document,Presentation}Panel-*.js
webview/assets/DocumentFormat.OpenXml.4g1x2psnat.wasm                   4.2 MB（未入库）

# 配置
webview/assets/use-visible-settings-sections-cc4e77dbddd0.js            ★ 门控 hook
webview/assets/_virtual_settings-search-documents-1358c5ba26d1.js       475 KB，17 个 section 的文案索引
webview/assets/settings-page-ce3b564aee3c.js
webview/assets/settings-5112d5d47fbe.js                                 150 KB
webview/assets/settings-plugin-selection-995ee29263c7.js
webview/assets/general-settings-9d83727e851d.js                         114 KB（4 个 slug 复用）
webview/assets/billing-analytics-3bae5ee4e65b.js                        174 KB（2 个 slug 复用）
webview/assets/plugins-settings-711c233db56c.js                         （2 个 slug 复用）
webview/assets/onboarding-page-e52fd2822434.js                          219 KB / 454 条文案
webview/assets/security-route-363ce6c388ba.js                           212 KB
webview/assets/remote-connections-settings-c75eeb61a39d.js              165 KB

# 主进程与 IPC
.vite/build/early-bootstrap.js      .vite/build/bootstrap-Cv3cpqAG.js
.vite/build/main-CMBCj4XL.js        .vite/build/preload.js   ★ electronBridge
.vite/build/browser-page-preload.js .vite/build/sandbox-preload.js
```

## 4. 关键原生字符串（A 级）

**Steer / Queue / Interrupt**

```text
Send message                                    Send message in background
Steer prompt                                    Queue prompt
Submit the current composer prompt as a steering message
Submit the current composer prompt as a queued message
Follow-up behavior                              Queue                Steer
Submit without interrupting the model           ← Steer 的准确定义
Turn on queueing                                Turn off queueing
Queue paused because you interrupted            Resume
This queued message could not be sent
Retry, edit, or delete it to continue the queue
Try sending this queued message again           Edit or delete it if retry keeps failing
Interrupted before the steer was accepted.      Run ended before the steer was accepted.
```

**Pane / tab / 窗口**

```text
Move to left pane   Move to right pane   Move to bottom pane
Open side panel tab   Open bottom panel tab   Toggle side panel
This tab is open in a separate window   Restore tab   Show window
This tab isn't ready to fly yet
Opening tabs in a new window isn't supported yet
Task tabs   Chat toolbar   New tab   Compact tab count when more than 99 tabs are open
```

**导航 rail**

```text
App navigation   Activity   Scheduled task folders   Chats   Settings
Lottie 资产名: 260625_CGPT_Icon_{NewChatPencil,Tasks,ProjectsFolder,Library,Plugins,Search,More}_PJ_20x20
```

**设置门控 reason 字符串**

```text
statsig-disabled    config-requirement-disabled    wsl-disabled
```

**IPC / 协议 marker**

```text
codex_desktop:*                                       23 个频道
codex-host-chunked-message-v1                         分块传输 marker
array-start object-start container-end string-end
string-start key string-chunk value                   增量 JSON token
connect-app-host                                      MessagePort 握手
0.143.0-alpha.32                                      app-server 协议版本
```

**路径与环境**

```text
CODEX_HOME   $HOME/.codex   /.codex   worktrees
CODEX_ELECTRON_USER_DATA_PATH   CODEX_ELECTRON_RESOURCES_PATH
CODEX_ELECTRON_CHROMIUM_SWITCHES   CODEX_ELECTRON_AGENT_RUN_ID
Codex Desktop/{version} (Windows NT 10.0; x64)
```

## 5. 仓库证据（B，沿用 2026-09-09，未重新核验）

| 文件                                                                    | 位置/证据                                                                                                                                                                                          |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `desktop_app/apps/desktop/src/renderer/AgentConversationPanel.tsx`      | 314 localStorage；459 queue GET 轮询；658 sequence 持久化；845-862 operation/idempotency/runtimeThreadId/expectedTurnId；926 cancel；963-983 resume；1014 clearHistory；1020 composer control mode |
| `desktop_app/apps/desktop/src/renderer/TaskPage.tsx`                    | 219 turnId；387-500 按 member/turn 聚合 delta；623 构建 conversation blocks；863-868 任务阶段标签                                                                                                  |
| `desktop_app/apps/desktop/src/renderer/turn-presentation.ts`            | 22 terminal 判定；54-70 final answer 与 file change；84-125 reasoning/approval/persistent entries                                                                                                  |
| `desktop_app/apps/desktop/src/renderer/styles/tokens.css` / `shell.css` | 设计 token 的 renderer 侧映射；shell、thread/composer 布局与窗口 surface                                                                                                                           |
| `desktop_app/apps/desktop/src/renderer/agent-message-controls.ts`       | composer Send/Stop/Resume 控制判定                                                                                                                                                                 |
| `api/proto/model/message/message.proto`                                 | 51-75 DeliveryMode/MessageOperation/DeliveryState；158-173 delivery 字段、expected turn、generation                                                                                                |
| `api/proto/model/message/message_service.proto`                         | 25-27 operation/expected_turn_id；62-120 Cancel/Requeue/ListQueue                                                                                                                                  |
| `api/proto/service/message/user_message_service.proto`                  | `Edit` RPC：`POST /api/projects/{project_id}/messages/{message_id}:edit`                                                                                                                           |
| `syntropy_master/handle/message/message_service_handle.go`              | `Edit`/`editableDelivery`；306-316 Send/Steer 构造；420-429 delivery 持久化；887-892 取消 queued；1395-1483 Cancel；1506-1592 Requeue；1630 ListQueue                                              |
| `syntropy_node/engine/codex/agent_thread_codex.go`                      | `EditLastTurn`（`thread/revert`，回退 `thread/rollback`）；250-271 CancelDelivery；391-590 run loop 与 interrupted outcome；708 附近 Stop/Restart/Kill                                             |
| `syntropy_node/engine/codex/codex_sdk_client.go`                        | `RevertThread`：封装 `thread/revert` 与方法缺失时的 `thread/rollback` 回退                                                                                                                         |
| `syntropy_node/engine/message_queue.go`                                 | 228-230 取消 queued delivery                                                                                                                                                                       |

> **本次新发现与 B 级证据的交叉点**：原生 app-server 协议里 `turn/steer` 与 `turn/interrupt` 是**两个独立方法**，`thread/revert` 与 `thread/rollback` 也**并存**（fork 流程里先用 revert 语义、回退时用 rollback 的 `{threadId, numTurns}`）。这与仓库 `codex_sdk_client.go` 的 `RevertThread` 回退逻辑方向一致。

## 6. 结论 → 证据等级映射

| 结论                                                                        | 等级 | 依据                                                                                                       |
| --------------------------------------------------------------------------- | ---- | ---------------------------------------------------------------------------------------------------------- |
| Owl/Chromium 外壳 + MSIX full-trust 分发                                    | A    | `owl-*.json`、`chrome.dll`、`AppxManifest.xml` 能力                                                        |
| React 19 + React Compiler + Vite 8/rolldown + Tailwind v4                   | A    | `Symbol.for("react.memo_cache_sentinel")`、`rolldown-runtime`、`@layer theme, base, components, utilities` |
| 设计 token 精确值（字号阶梯、圆角两段式、border 透明度阶梯、composer 阴影） | A    | `app-initial-49fc08c26651.css`                                                                             |
| VS Code 主题变量映射与 `[data-codex-window-type]` 分主题                    | A    | 同上                                                                                                       |
| Rail 的 7 个图标是 Lottie 动画                                              | A    | `sidebar-*-icon` chunk 内容为 `@lottiefiles/toolkit-js` JSON                                               |
| Sidebar 8 个分区、16 个导航链接、行级操作、拖拽播报                         | A    | `sidebarElectron.*` 280 条文案（含 description）                                                           |
| 4 种窗口 appearance 与其尺寸/焦点策略                                       | A    | `main-CMBCj4XL.js` 的 `createWindow({appearance,...})` 调用点                                              |
| `electronBridge` API 与 23 个 IPC 频道                                      | A    | `preload.js` 全文                                                                                          |
| 分块流式 IPC 协议与增量 JSON token                                          | A    | `preload.js` 的 `i()`/`a()` 校验器                                                                         |
| WebCodecs 远程画中画解码                                                    | A    | `preload.js` 的 `VideoDecoder` 分支                                                                        |
| app-server JSON-RPC 方法全集与协议版本                                      | A    | `app-initial` 字面量                                                                                       |
| 对话区三层模型、合成 item 类型清单                                          | A    | `Cin()` 的类型判别                                                                                         |
| 虚拟化算法（底部锚定、280px 默认估算、二分查找）                            | A    | `thread-virtualizer` 全文可读                                                                              |
| 滚动常量（24px 贴底 / 64px 到末尾 / 16px 行增量 / 260 overscan）            | A    | `thread-scroll-layout` 尾部常量表                                                                          |
| response spacer 的 IntersectionObserver + 弹簧实现                          | A    | `composer-provider` 的 `M()`                                                                               |
| Composer 是 ProseMirror，12 种 mention 节点                                 | A    | `browserSkillMention` 等节点名 + `insertMentionAtSelection`                                                |
| 27 个斜杠命令、17 个 composer 快捷键                                        | A    | `*SlashCommand.title/description`、`codex.command.composer.*`                                              |
| Send / Steer / Queue 三语义及其协议方法                                     | A    | i18n description + `turn/steer` / `thread/queue/add`                                                       |
| Steer ≠ Interrupt（尽管 id 叫 interrupt）                                   | A    | `followUpQueueMode.interrupt` 的 description 原文                                                          |
| steer 未被接受时降级为 queuedFollowUps 并带 pausedReason                    | A    | `Oin()` 与两个 reason 常量                                                                                 |
| 侧面板 19 种 tab、三向 pane、tab 窗口化                                     | A    | `thread.sidePanel.*`、`appShell.tabs.*`、`thread-side-panel-tabs` 导出                                     |
| `openSessionSandboxSidePanel` / `openThreadTimelineSidePanel` 为禁用桩      | A    | shim 内函数体 `return !1`                                                                                  |
| Popcorn = 浏览器内 .NET/OpenXML 处理 Office 文件                            | A/C  | chunk 名 + wasm + `xlsxSaveProblem` 文案；**“可回写”属 C 级推断**                                          |
| 设置 35 个导航 section + capability 门控 + 10 个硬编码隐藏                  | A    | `fko`/`cko`/`Bjo` 三张表 + `use-visible-settings-sections` 的 switch                                       |
| rolldown shim 与跨页组件复用                                                | A    | shim 文件内容 + `delegates_to`                                                                             |
| 设置搜索索引覆盖 17 个 section（≠ 导航 35 个）                              | A    | `_virtual_settings-search-documents` 顶层键                                                                |
| thread handoff 要求队列清空、运行中会打断                                   | A    | `threadHandoff.disabled.*` 与 `runningWarning` 文案                                                        |
| `$CODEX_HOME/worktrees` 与路径归一化规则                                    | A    | `YFt`/`XFt`/`QFt`/`$Ft` 函数体                                                                             |
| 本仓库 `clearHistory` 只清浏览器本地历史                                    | B    | `AgentConversationPanel.tsx`（2026-09-09 记录）                                                            |

## 7. 可复核命令

全部只读；不写安装目录，不读凭据/数据库/会话内容。

```powershell
# 0. 包身份与安装位置
Get-AppxPackage -Name OpenAI.Codex | Select Name, Version, InstallLocation, PackageFamilyName

# 1. 校验和
$R = "C:\Program Files\WindowsApps\OpenAI.Codex_26.903.9818.0_x64__2p2nqsd0c76g0"
Get-FileHash "$R\app\resources\app.asar","$R\app\resources\codex.exe","$R\app\ChatGPT.exe","$R\AppxManifest.xml" -Algorithm SHA256

# 2. ASAR 结构（用本目录自带工具，无需安装 asar）
cd codex_app_rev\code\tools
node asar-cli.mjs tree $R\app\resources\app.asar --depth 2
node asar-cli.mjs cat  $R\app\resources\app.asar package.json
node asar-cli.mjs cat  $R\app\resources\app.asar .vite/build/preload.js

# 3. 全量抽取（约 25 秒，691 chunks / 30.1 MB）
node extract-modules.mjs $R\app\resources\app.asar ..\ --jobs 8 --max-beautify-bytes 1200000

# 4. 设置注册表（含 shim 解析与本地覆盖自检）
node settings-map.mjs $R\app\resources\app.asar ..\ ..\settings\_SETTINGS_MAP.json

# 5. 全局文案目录（13338 条）
node harvest-messages.mjs ..\_catalog\i18n-messages.json ..\ <.work>\big

# 6. 定向检索（长行 bundle 用字符窗口，不用行式 grep）
node ctx.mjs "followUpQueueMode" <.work>\big --after 400
node ctx.mjs "appearance:\s*\`" ..\main-process\build --before 60 --after 520

# 7. 在已抽取代码里核对结论
rg -n "turn/steer|thread/queue/add|turn/interrupt" <.work>\big
rg -n "Submit without interrupting the model" ..\composer
rg -n "browserSkillMention|insertMentionAtSelection" ..\composer
rg -n "codex_desktop:" ..\main-process\build

# 8. 仓库侧对照（B 级）
rg -n "expectedTurnId|idempotencyKey|clearHistory|resolveComposerControlMode" `
   ..\..\desktop_app\apps\desktop\src\renderer\AgentConversationPanel.tsx
rg -n "thread/revert|thread/rollback" ..\..\syntropy_node\engine\codex\codex_sdk_client.go
```

其中 `<.work>` = `codex_app_rev\.work`（gitignore 的隐藏目录）。共享大 bundle 需要先生成：

```powershell
node ..\..\.work\big-extract.mjs      # app-initial / app-primary 的 light-format，约 3 分钟
```

### 7.1 26.1016 定向复核

以下命令只读安装目录：

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1016.8622.0_x64__2p2nqsd0c76g0\app\resources\app.asar"

node .agents\skills\revert\scripts\asar-cli.mjs cat $A package.json
node .agents\skills\revert\scripts\ctx.mjs "settings.gateways.title" `
  codex_app_rev\code\app-261016\settings
node .agents\skills\revert\scripts\ctx.mjs "face-voice-prototype-v1" `
  codex_app_rev\code\app-261016\settings
node .agents\skills\revert\scripts\ctx.mjs "/rosalind/access/applications" `
  codex_app_rev\code\app-261016\app-shell
node .agents\skills\revert\scripts\ctx.mjs "restricted.aeon.passkey.request" `
  codex_app_rev\code\app-261016
rg -n "account/bedrock/discover|config/batchWrite|gateway-ok" `
  codex_app_rev\code\app-261016\settings
rg -n "artifactTemplatePicker|openai_artifact_template_picker" `
  codex_app_rev\code\app-261016\main-process
```

`app-initial` / `app-primary` 的文案与临时变量需在 `.work/big-261016/` 中搜：

```powershell
node .agents\skills\revert\scripts\ctx.mjs "browserAuth.setup.choiceTitle" `
  codex_app_rev\.work\big-261016 --after 500
node .agents\skills\revert\scripts\ctx.mjs "codex.safetyComposerBanner" `
  codex_app_rev\.work\big-261016 --after 500
```

## 8. 采集边界声明

| 项                                            | 状态                        |
| --------------------------------------------- | --------------------------- |
| 静态 ASAR / manifest 分析                     | ✅                          |
| 共享 bundle 的字符串与结构检索                | ✅                          |
| 仓库源码对照                                  | ⚠️ 沿用上次记录，未重新核验 |
| 运行时插桩 / 抓包 / CDP                       | ❌                          |
| 读取凭据（`auth.json`、keychain、token）      | ❌                          |
| 读取用户对话内容 / 会话缓存                   | ❌                          |
| 读取 `settings.dat`、任何 `.sqlite`、日志正文 | ❌（只记录文件名与大小）    |
| 修改原生安装目录                              | ❌                          |
| 反汇编 `.node` / `.exe` / `.wasm`             | ❌（只记录名称与大小）      |
