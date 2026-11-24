# Codex 26.1117 版本差异（相对 26.1106）

> 采集：2026-11-24，本机 MSIX `OpenAI.Codex 26.1117.4957.0`（应用版本 `26.1117.41037`，build `29803`，
> Chromium `158.0.8127.37`，Owl runtime `8d311320…`）。
> 安装根：`C:\Program Files\WindowsApps\OpenAI.Codex_26.1117.4957.0_x64__2p2nqsd0c76g0`。
> 证据分级：**A** = 安装包直接证据（chunk / 字面量 / i18n 描述符）；**B** = 仓库内源码或上一版基线；
> **C** = 由命名、路由与状态组合推断，未做运行时验证。

## 1. 结论摘要

这一版是**打包瘦身 + 新一轮产品面扩张**同时发生：

- `app.asar` 从 772.8 MB 降到 **443.8 MB（-42.6%）**。主因是 65 个语言包从 JS chunk
  改成 **gzip 后的 `webview/assets/locales/*.json.codex-gzip`**（68 个文件 / 35.2 MB），
  而 26.1106 里 >3 MB 的 65 个语言 chunk 合计约 280 MB（A）。
- 渲染层 JS 从 520.6 MB 降到 **225.6 MB**；`>3 MB` 的 JS chunk 从 68 个降到 **3 个**（A）。
  同时入口 chunk 从 4 个变成 **6 个**，且全部很小（最大 283 KB）。
- 生产构建**裁掉了大多数 i18n `description` 字段**：带描述的文案从 36,878 条降到 **3,508 条**（A）。
  这会让“只靠 description 理解意图”的方法在本版对旧功能失效；未变化的旧 id 仍可引用 26.1106 的描述（B）。
- 功能面新增较大：Ads Manager / Business Profile 工具化、工作区加入审批、GPT Studio（Hermes）、
  Classroom 课程、餐厅地图、退伍军人优惠、Presence workstream、Orbit 的 Gmail/Slack onboarding、
  设置导航重排（4 组 → 7 组）。
- 移除：hotkey window（命令、路由、文案整组消失）、multiplayer 的 debug/image/liveNotes、
  Learning 的 course 定制、`space.list`、账号迁移（account_transfer）、`composer.newTask`、
  `codex.remoteConversation`、`threadWorkspace.newTab`。

## 2. 包与清单

| 指标 | 26.1106 | 26.1117 | 变化 |
| --- | ---: | ---: | ---: |
| MSIX / 应用版本 | `26.1106.6628.0` / `26.1106.51428` | **`26.1117.4957.0` / `26.1117.41037`** | — |
| build / Chromium | `26605` / `157.0.8103.51` | **`29803` / `158.0.8127.37`** | — |
| `app.asar` 本体 | 772,825,694 B | **443,800,006 B** | **-42.6%** |
| asar 条目 / 文件 / 目录 | 20,220 / 19,886 / 334 | **15,862 / 15,520 / 342** | -4,358 文件 |
| 清单文件总字节 | 784,605,736 B | **454,135,151 B** | -42.1% |
| `.js`（清单口径） | 9,718 / 520.6 MB | **9,849 / 225.6 MB** | **-56.7%** |
| `.codex-gzip` | 0 | **68 / 35.2 MB** | 新增 |
| `.webp` | 960 / 64.9 MB | **53 / 15.4 MB** | -76.3% |
| `.png` | 715 / 41.2 MB | 784 / 42.1 MB | 基本持平 |
| `.css` | 603 / 14.3 MB | 602 / 14.0 MB | 持平 |
| async JS 文件 / 字节 | 13,584 / 533,876,668 B | **9,577 / 213,664,813 B** | **-60.0%** |
| async CSS 文件 | 601 | **600 / 14.7 MB** | 持平 |

证据：`inventories/inventory-261117.json`、`manifest.json`、`code/app-261117/_MODULE_INDEX.json`。

### 2.1 渲染入口与 runtime

`webview/index.html` 现在按顺序加载 6 个入口 chunk（A）：

| chunk | 字节 | 备注 |
| --- | ---: | --- |
| `883398.12d9a6e686.js` | 7,112 | |
| `203305.36534d55d5.js` | 757 | |
| `762515.d5670636b1.js` | 20,318 | |
| `727403.b9dd20a8a9.js` | 8,201 | React 侧入口 |
| `356023.a13734b863.js` | 86,592 | |
| `348410.35ea11b6a0.js` | 283,386 | Rspack runtime + `p.u` / `p.miniCssF` |

runtime 映射仍为 `assets/async/<id>.<hash>.js`，共 **9,535 个 JS id / 1,595 个 CSS id**。
仅 1 个映射目标缺失：`async/3.8d72d210eb.js`（不在档案内，A）。

### 2.2 语言包改为 gzip

`webview/assets/locales/<lang>.keys.<hash>.<hash>.json.codex-gzip`，68 个文件，gzip magic `1f 8b`（A）。
其中 `my-MM` 最大（682,934 B）。这是 asar 体积下降的最大单一原因。

### 2.3 i18n `description` 被裁掉

| 指标 | 26.1106 | 26.1117 |
| --- | ---: | ---: |
| 消息条数 | 57,893 | **59,872** |
| 分组数 | 8,202 | **8,462** |
| 带 `description` | 36,878 | **3,508** |
| 扫描 JS | 9,466 / 505.9 MB | **9,599 / 206.5 MB** |

剩下的描述集中在少数新功能 chunk：`business/480092`（848 条）、`business/281600`（493 条）、
`chatgpt-surfaces/191628`（238 条）、`business/256943`（200 条）、
`plugins/958430`（193 条）、`learning/576019`、`learning/8387` 等（A）。
对旧功能，若要引用“开发者意图”，需回到 `code/app-261106/_catalog/i18n-messages.json`，
并明确标注是上一版证据（B）。

## 3. i18n diff

| 指标 | 数量 |
| --- | ---: |
| 新增 id | **3,162** |
| 删除 id | **1,183** |
| 同 id 文案改写 | **268** |
| 同 id 描述新增/删除 | 2 / 32,503（删除主要是构建裁剪，不代表语义变化） |

新增最多的组（A）：

| 组 | 新增 | 承载 chunk |
| --- | ---: | --- |
| `ads_manager.tools` | 118 | `business/281600.56dd86d557.js` |
| `businessProfiles.feeds` | 89 | `237710` / `567441` / `132931` / `750321` |
| `codex.pages` | 66 | `spaces/919312`、`828040`、`561703` |
| `codex.joinApproval` | 64 | `conversation/80397.6b9c0244bc.js` |
| `Hermes.GptStudio` | 63 | `workspace-agents/648406.402b135744.js` |
| `businessProfiles.adAccounts` | 60 | `business/422435.e631161594.js` |
| `codex.space` | 56 | `spaces/767143`、`108374`、`919312` |
| `space.pageTemplates` | 46 | `spaces/315383`、`878742`、`999385` |
| `maps.restaurants` | 43 | `chatgpt-surfaces/135839.d6a2f77de3.js` |
| `businessProfiles.activity` | 42 | `business/281600.56dd86d557.js` |
| `restricted.aeon` | 42 | `enterprise-trust/356876.10d9c55373.js` 等 |
| `browser.bookmarks` | 40 | `app-shell/969257.d0a46e6410.js` |
| `orbit.onboarding` | 39 | `chatgpt-surfaces/323764.6d76b66079.js` |
| `businessProfiles.feedField` / `feedFormat` | 37 / 36 | `business/281600` |
| `veterans.promotion` | 35 | `chatgpt-surfaces/101248.28fff59425.js` |
| `settings.gateways` | 31 | `settings/978336`、`433468` |
| `settings.voice` | 30 | `app-shell/506449`、`settings/499154` |
| `settings.codeNavigation` | 28 | `settings/71320.1460eb0aa0.js` |
| `classroom.instructor` / `connected` | 26 / 25 | `chatgpt-surfaces/581340.42417af9f6.js` |
| `presence.workstream` | 25 | `conversation/827769.2fb54763d3.js` |
| `orbit.slack` | 23 | `plugins/947156.998208fdbe.js` |

删除最多的组（A）：`codex.space` 48、`learning.course` 38、`multiplayer.debug` 37、
`restricted.aeon` 32、`multiplayer.image` 26、`multiplayer.liveNotes` 26、`space.list` 21、
`chatgpt.account_transfer` 20、`settings.gateways` 19、`settings.general` 19。

## 4. 新增功能（A 级证据）

以下“可见性”均指**代码里存在入口/文案/路由**，不等于当前账号一定可见（feature flag 未验证，C）。

### 4.1 Ads Manager：Business Profile 工具化与商品 Feed

`business/281600.56dd86d557.js` 携带 342 条 `ads_manager.tools` 与 107 条
`ads_manager.agent_insights` 文案，且保留完整 `description`（A）：

- Business Profile 品牌资产：Logo 上传或 URL 提取、品牌色板（`assets.color_palette.*`）、
  `Edit source` 分项编辑、保存/取消。
- Business Agent：发布前检查清单（缺名称/缺指令）、内容审核拒绝
  （`publication_review.publish_rejected` / `save_rejected`）、Business Profile 管理员权限校验。
- 商品 Feed：`businessProfiles.feedField.format.*` 覆盖 amount/category/condition/gtin/
  dimensions/extraImages 等字段格式；`businessProfiles.feedFormat.*` 覆盖
  CSV/TSV/JSONL/Parquet、gzip 头、UTF-8、HTML 页面误当 feed 等失败原因。
- Ad account 连接：`business/422435.e631161594.js`（`businessProfiles.adAccounts.*`，60 条）——
  管理员自动共享上限 100、群组管理员名单不支持、重复连接、断开/重连、组织策略登录失败。

### 4.2 工作区加入审批

`conversation/80397.6b9c0244bc.js`（`codex.joinApproval.*`，64 条）显示一个完整的审批面板（A）：

- 待处理请求列表（邮箱、角色、席位类型、请求日期、分页）。
- 批量同意/拒绝、Accept all、按席位类型筛选。
- 席位不足时触发购买流程：`purchase.title` / `confirmPurchase` / `checkout` / `billing`，
  并处理支付 pending/失败/已处理。
- 角色与席位变更：`modal.changeSeat`、`changeRole`、`seatSyncing`。

> 名字里的 `acceptAllWithCount`、`bulkDetail` 等只是 i18n id；行为由上述文案组合推断（C）。

### 4.3 GPT Studio / Hermes 智能体构建器

`workspace-agents/648406.402b135744.js` 同时承载 `workspaceAgents.builder` 与
`Hermes.GptStudio`（A）：

- 发布检查：`PublishCurrentDraft.missingName` / `missingPrompt` / `noChanges`。
- 连接约束：workspace 不允许 agent-owned app connections；Slack 必须使用 agent-owned connection；
  未发布的 Custom MCP 必须改为 agent-owned 才能发布。
- 冲突与失败：`SaveConflict`（他人已保存，需要 Refresh）、`SaveError`（Slack 频道连接失效）、
  `autosaveFailedFallback`。
- 实时预览覆盖层：`Chat.PlutoOverlayMessages.adding_app` / `adding_skill` /
  `adding_schedule` / `running_preview` 等。

### 4.4 Classroom / Courses

新增路由 `/classes`、`/classes/*`、`/classes/instructor`、`/classes/new`、
`/classes/offerings/:offeringReceipt`（`code/app-261117/app-shell/_ROUTES.json`，A）。
`chatgpt-surfaces/581340.42417af9f6.js` 提供（A）：

- 课程（Course）→ offering（`Add an offering`）→ content set（`Create a content set`）三层。
- 将 Space 附加到 offering，并按 audience（Students / Instructors / Everyone）授权。
- 讲师侧：`classroom.instructor.*`（26 条）；学员/成员侧：`classroom.connected.*`（25 条）。
- 失败态：非教育 workspace、无权限、Space 不可用、版本过期。

### 4.5 餐厅地图

`chatgpt-surfaces/135839.d6a2f77de3.js`（`maps.restaurants.*`，43 条，A）：

- 附近餐厅预览、价格/评分/营业中筛选、保存地点（账号不支持时降级提示）。
- 建议 prompt：brunch / date night / dinner / family / friends / lunch / vegetarian。
- 登录引导横幅与“基于你的偏好”个性化推荐；位置使用 approximate area 或 shared location。

### 4.6 退伍军人优惠

`chatgpt-surfaces/101248.28fff59425.js`（`veterans.promotion.*`，35 条）+ 路由
`/:locale?/veterans-claim`（A）：

- 面向 12 个月内退役/过渡期军人，提供一年 ChatGPT Plus。
- 资格通过 **ID.me** 验证；已有 Plus 也可领取；Apple/Google Play 订阅需先取消。
- 页面含 FAQ（active duty / veteran / retiree / mobile / verification / restart）与浏览器继续入口。

### 4.7 Presence workstream

`conversation/827769.2fb54763d3.js`（`presence.workstream.*`，25 条，A）：

- workstream 与 Git 分支/worktree 绑定：`branchMismatch`、`branchUnavailable`、
  `branchCheckedOut`、`managedWorktreeRequired`。
- 创建前置条件：项目需允许 workstream、需要 Git authoring 与 snapshot 权限
  （`creationNotAllowed`、`draftProjectUnavailable`）。
- 草稿审批：`draftPendingSubmission`、`draftRequestChanged`、`draftProjectChanged`、
  `pendingLimit`。

### 4.8 Orbit / Dot 的 Gmail 与 Slack onboarding

- `chatgpt-surfaces/323764.6d76b66079.js`（`orbit.onboarding.*`，39 条，A）：
  Gmail 连接（只读 / 读+发送）、桌面通知、欢迎语轮播、data controls 说明。
- `plugins/947156.998208fdbe.js`（`orbit.slack.*`，23 条，A）：Slack 组织/工作区选择、
  管理员审批等待、公共频道读取授权（`publicReads.*`）、待审批状态。

### 4.9 账号、资料与设置面

- **Pages 任务/自动化**：`spaces/919312.4cf0502f45.js` 等新增 `codex.pages.assigned.*`
  （任务指派人、Dot 指派、状态筛选）与 `codex.pages.automations.*`（页面定时刷新、
  建议日程、usage limit）。
- **Profile / 项目外观**：新增 `profile` 模块（`profile/403035`、`192656`、`584510`）：
  贴纸、showcase、活动、`codex.projectAppearance`、emoji/symbol picker。
- **Code Navigation**：`settings/71320.1460eb0aa0.js`（28 条）：启停语言服务器、
  查看已安装 server、删除（被占用/链接缓存只读）、支持 Java/JS/Kotlin/LaTeX/Python/Rust/Swift/TS。
- **语音/听写**：`app-shell/506449.997239b562.js` 与 `settings/499154`：听写快捷键（长按/双击）、
  其他应用内听写、录音历史与回放、降低其他应用音量（Bluetooth 例外）。
- **Gateways**：`settings/978336.8c5d1c9527.js` / `433468.338ed49a79.js`：
  Amazon Bedrock Runtime/Mantle、Google Cloud、ADC/凭据文件、连接测试、切换当前 provider。
- **浏览器书签**：`app-shell/969257.d0a46e6410.js`（40 条）：书签栏、目录管理、搜索、
  拖动排序、只读/托管目录、可见性（始终/从不/仅新标签页）。

## 5. 移除与收缩（A）

| 功能 | 证据 |
| --- | --- |
| Hotkey window | 命令 `hotkeyWindow` 消失；路由 `/hotkey-window/...`、`/remote/:conversationId` 消失；`hotkeyWindow.home.*` 13 条文案消失 |
| Multiplayer 调试/图片/Live Notes | `multiplayer.debug` 37、`multiplayer.image` 26、`multiplayer.liveNotes` 26 条文案消失；`/backend-api/multiplayer/documents/` 路由消失 |
| Learning 课程定制 | `learning.course.*` 38 条消失（learningBlock 仍在） |
| Space 列表页 | `space.list.*` 21 条消失；`/space/personal` 路由消失 |
| 个人→工作区账号迁移 | `chatgpt.account_transfer.*` 20 条消失 |
| 新任务环境选择器 | `composer.newTask.*` 17 条消失 |
| 远程会话 UI | `codex.remoteConversation.*` 15 条消失 |
| 线程工作区新标签页 | `threadWorkspace.newTab.*` 15 条消失 |
| 全屏退出命令 | `exitWorkspaceFullView` 从命令表消失 |

## 6. 注册表与协议

### 6.1 设置

`code/app-261117/settings/_SETTINGS_MAP.json`：

- slug 集合仍为 **53**，与 26.1106 完全相同（A）。
- 导航从 4 组变为 **7 组**：`profile`(1)、`account`(10)、`app`(9)、`data-privacy`(6)、
  `teams`(1)、`integrations`(13)、`coding`(11)（A）。
- capability 40 条（26.1106 为 41）：**`notifications` 不再受 capability 门控**（A）。
- `allowed_on_web` 仍为 13 个 slug（A）。
- slug → 实现 chunk 的懒加载表已解析到 `slug_chunks`（47 项；`billing` 等别名项缺 chunk id，C）。

证据 chunk：`settings/364313.d749d31da5.js`（描述符 `HX:[…]`）、
`settings/468418.d29c9693b2.js`（`eB` 顺序表、`eY` 导航组）、
`settings/559869.1b50ec65da.js`（`eu` capability、`eC` web 可见表）、
`left-nav/881612.d5f896add0.js`（slug → `n.e(id)` 加载表）。

### 6.2 命令 / IPC / 协议方法 / 路由

| 表 | 26.1106 | 26.1117 | 差异 |
| --- | ---: | ---: | --- |
| 命令 | 160 | **159** | +`presentation.editLink`；-`exitWorkspaceFullView`、-`hotkeyWindow` |
| IPC 频道 | 26 | **30** | +7 / -3（见下） |
| app-server 方法 | 189 | **191** | +`thread/items/read`、+`thread/search/partial` |
| 路由字符串 | 170 | **177** | +12 / -5 |

新增 IPC：`app-server-window-port`、`app-server-window-ready`、`connect-app-server-manager`、
`get-initial-window-appearance`、`get-preload-bootstrap-info`、`read-dragged-image`、
`startup-progress`。移除：`get-build-flavor`、`get-sentry-init-options`、
`get-system-theme-variant`（A）。

新增路由：`/classes*`、`/business-hub/:profileId/products`、`/onboarding/owner`、
`/:locale?/veterans-claim`、`/settings/:section`、
`/settings/billing?expense_invoice=latest`、`/settings/cloud-environments`、
`/backend-api/aip/ledger/tax_checkup`（A）。

## 7. 安装层

- 主程序：`ChatGPT.exe` 5,003,568 B（26.1106：4,471,600 B），`codex.exe` 407,428,400 B，
  `chrome.dll` 341,041,456 B（Chromium 158.0.8127.37）。
- AppxManifest：`startupTask Enabled=false`（26.1106 为 true）——默认不再开机自启（A）。
- 服务仍是 `CodexSandboxService.OpenAI.Codex`，但可执行文件为
  `app/resources/codex-windows-sandbox-service.exe`（A）。
- 执行别名：`chatgpt-desktop.exe`、`codex-chrome-native-host.exe`、
  `codex-core-command-runner.exe`（A）。
- 随包资源：`cua_node` 2,258 文件 / 294.7 MiB；`plugins` 421 文件 / 25.0 MiB，
  插件列表新增 **`plan`**（原：browser、chrome、codex-app-tools、computer-use、
  deep-research、latex、unified-computer-use、visualize）；`tectonic` 只剩 4 文件 / 46 KB（A）。

## 8. 复现

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1117.4957.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
node code\tools\inventory.mjs $A inventories\inventory-261117.json
node code\tools\chunkmap-261117.mjs
node code\tools\scan-messages-261117.mjs
node code\tools\cluster-261117.mjs
node code\tools\plan-261117.mjs
node code\tools\extract-plan-261117.mjs
node code\tools\extract-resume-261117.mjs
node code\tools\settings-map-261117.mjs
node code\tools\commands-261117.mjs
node code\tools\ipc-channels-261117.mjs
node code\tools\methods-261117.mjs
node code\tools\routes-261117.mjs
node code\tools\manifest-261117.mjs
```

## 9. 边界

只读安装目录；未写入 `C:\Program Files\WindowsApps`；未读取 `auth.json`、`settings.dat`、
任何 `.sqlite`、日志正文或会话缓存；未做运行时插桩。文中“新增/可见”是静态代码与文案证据，
实际可见性仍受账号、workspace 与 feature flag 影响（C）。

