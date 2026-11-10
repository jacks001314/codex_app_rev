# Codex App 本机逆向分析

对本机安装的 **Codex desktop app（Windows MSIX 发行版）** 的静态逆向分析。

- **最新全量基线：`26.1103.4239.0`（应用版本 `26.1103.32239`，build `25471`），2026-11-09 采集**，
  覆盖 `.vite/build` 与 `webview/assets` 全量清单、18 个模块、201 个代表文件、
  **57,004 条 i18n 文案**；渲染层已迁移到 **Rspack**，见
  [changelog-26.1103.md](changelog-26.1103.md)、`code/app-261103/`、
  `inventories/inventory-261103.json`
- **上一全量基线：`26.1016.8622.0`（应用版本 `26.1016.62342`，build `21477`），2026-10-23 采集**，
  覆盖 `.vite/build` 与 `webview/assets` 全量清单、17 个模块、2,490 个 chunk、
  22,073 条 i18n 文案；见 [changelog-26.1016.md](changelog-26.1016.md)、
  `code/app-261016/`、`inventories/inventory-261016.json`
- **上一全量基线：`26.1013.4894.0`（应用版本 `26.1013.40934`，build `20770`），2026-10-17 采集**，
  覆盖 `.vite/build` 与 `webview/assets` 全量清单、17 个模块、2,415 个 chunk、
  21,620 条 i18n 文案；见 [changelog-26.1013.md](changelog-26.1013.md)、
  `code/app-261013/`、`inventories/inventory-261013.json`
- 面板基线（五块界面 + 协议）：`OpenAI.Codex 26.903.9818.0`（应用版本 `26.903.71938`，build `8576`，Electron `42.3.0`，app-server 协议 `0.143.0-alpha.32`），**2026-09-11** 采集
- 上一版基线：`26.901.6511.0`（2026-09-09 采集），差异见 [changelog-26.903.md](changelog-26.903.md)
- 插件 / MCP 管理：`26.908.9136.0`（2026-09-16 采集），见 [plugin-management.md](plugin-management.md)、`code/plugins-26908/`
- **Computer Use：`26.928.3736.0`（应用版本 `26.928.31416`，build `12553`），2026-10-01 采集**，见 [computer-use.md](computer-use.md)、[changelog-26.928.md](changelog-26.928.md)、`code/computer-use-26928/`
- **外部浏览器扩展链路：`26.1007.2314.0`，2026-10-11 采集**，见 [browser-extension.md](browser-extension.md)（只覆盖 Chrome / Edge 扩展链路，未做全量抽取）

也就是说本目录里有**七个不同版本**的快照，按主题分开：最新全量是 26.1103，
上一全量是 26.1016 与 26.1013，面板与协议基线是 26.903，插件管理是 26.908，
Computer Use 是 26.928，外部浏览器扩展链路是 26.1007。
引用 chunk / 产物前先确认它属于哪一版。

分析对象是安装包中的 `app.asar`（26.903 为 309.5 MB，26.1013 为 582.1 MB，
26.1016 为 625.9 MB，**26.1103 为 761.0 MB**）、`AppxManifest.xml` 与安装目录结构；
仓库侧对照仍未针对最新版重新核验。
**未修改 `C:\Program Files\WindowsApps` 下任何文件，未读取凭据、token、设置内容、
SQLite 数据库或用户对话内容。**

## 本次范围

> 下表是 **26.903 基线**的五块界面与支撑模块（历史对照）。最新模块、
> chunk 数与代码路径见下面的“26.1103 最新结论”与 `code/app-261103/README.md`。

按用户要求重点覆盖五块界面，外加支撑它们的外壳与协议：

| 关注点                              | 文档                                                                           | 代码                                    |
| ----------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------- |
| 工作区的对话区                      | [conversation-area.md](conversation-area.md)                                   | `code/conversation/` (110 chunks)       |
| 对话框                              | [composer.md](composer.md)                                                     | `code/composer/` (45 chunks)            |
| 侧边页面                            | [side-panel.md](side-panel.md)                                                 | `code/side-panel/` (164 chunks)         |
| 左边的导航                          | [left-nav.md](left-nav.md)                                                     | `code/left-nav/` (42 chunks)            |
| 配置及各配置页面                    | [settings-pages.md](settings-pages.md)                                         | `code/settings/` (173 chunks)           |
| （支撑）应用外壳与路由              | [side-panel.md](side-panel.md) §1、[architecture.md](architecture.md)          | `code/app-shell/`、`code/workspace/`    |
| （支撑）主进程与 IPC                | [architecture.md](architecture.md)、[ipc-protocol.md](ipc-protocol.md)         | `code/main-process/` (84 chunks)        |
| **Computer Use**（26.928 追加范围） | [computer-use.md](computer-use.md)、[changelog-26.928.md](changelog-26.928.md) | `code/computer-use-26928/` (116 chunks) |

## 26.1103 最新结论

26.1103 是本目录当前**最新的全量快照**，也是一次**打包器迁移**。与 26.1016 相比：

| 指标 | 26.1016 | 26.1103 |
| --- | ---: | ---: |
| MSIX / 应用版本 | `26.1016.8622.0` / `26.1016.62342` | **`26.1103.4239.0` / `26.1103.32239`** |
| build | `21477` | **`25471`** |
| Chromium（Owl shell） | `155.0.8059.80` | **`157.0.8103.39`** |
| 渲染打包器 | Vite 8 / rolldown | **Rspack** |
| chunk 命名 | 语义名 + content hash | **数字 id**（`async/<id>.<hash>.js`） |
| 异步 chunk | 2,490（抽取口径） | **9,326 JS / 1,567 CSS 映射** |
| asar 文件 / 目录 | 21,236 / 323 | **19,793 / 334** |
| asar 清单总字节 | 636,080,907 B | **772,828,333 B** |
| asar 本体 | 625,947,531 B | **761,023,153 B（+21.6%）** |
| i18n 文案 / 分组 | 22,073 / 3,926 | **57,004 / 7,909** |
| 设置导航 | 53 nav / 54 slug | **4 组 / 53 slug** |

五个最大的新增面：

- **Learning**：`/learning`、课程/课时、语言学习、闪卡，以及 **1,631 组 /
  19,916 条** `learningBlock*` 文案；UI 由 **DIL** 生成式运行时执行字符串组件。
  见 [learning.md](learning.md)。
- **Business Hub / Ads Manager**：`/business-hub/{id}/{dashboard|insights|products|members|agent|edit/*|verification/*}`，
  商家资料、产品 feed、Business Agent 与最多 10 个自定义 Action。见 [business-hub.md](business-hub.md)。
- **Workspace Agents**：文案从 337 变为 **982**（新增 670、移除 25），出现完整 builder（appearance、apps、
  skills、starter prompts、resources、connections、schedules）。见 [workspace-agents.md](workspace-agents.md)。
- **Codex Security**：`/security`、`/security/new`、`/security/findings`，
  含 Deep scan、攻击面/攻击向量、仓库与发现项。见 [security-and-trust.md](security-and-trust.md)。
- **GPT-Rosalind**：`rosalind.*` 从 5 条扩到 **259 条**，另有
  `chatgpt.rosalind_access.*` 307 条；加入研究范围、高等级实验室、
  基因驱动与 ChatGPT 内使用申请。见 [security-and-trust.md](security-and-trust.md) §2。

安装层新增 `chatgpt-desktop.exe` 执行别名、登录启动项（`windows.startupTask`）
与 Copilot 键提供者扩展；`cua_node` 仍是最大的随包运行时（2,461 文件 / 301.1 MiB）。
完整差异见 [changelog-26.1103.md](changelog-26.1103.md)。

> Rspack 之后**不能按 chunk 文件名做版本 diff**：26.1103 的模块划分来自
> runtime 的 `p.u` 映射 + i18n 命名空间聚类。26.1103 只入库 201 个代表文件
> （其中 172 个 webview chunk），不是 9,326 个全量。

## 26.1016 上一全量基线

26.1016 是上一份**静态全量基线**。与 26.1013 相比：

| 指标 | 26.1013 | 26.1016 |
| --- | ---: | ---: |
| MSIX / 应用版本 | `26.1013.4894.0` / `26.1013.40934` | **`26.1016.8622.0` / `26.1016.62342`** |
| asar 文件 / 目录 | 21,073 / 323 | **21,236 / 323** |
| asar 清单总字节 | 566.2 MB | **606.6 MB** |
| `.vite/build/` | 35 files / 10.2 MB | **37 files / 10.5 MB** |
| `webview/assets/` | 20,045 files / 529.3 MB | **20,206 files / 571.0 MB** |
| i18n 文案 | 21,620 / 3,839 组 | **22,073 / 3,926 组** |
| 设置 nav / slug / loader | 52 / 53 / 54 | **53 / 54 / 55** |
| 抽取 chunk | 2,415 | **2,490** |

本轮新增功能集中在：

| 功能 | 主要证据 | 代码 |
| --- | --- | --- |
| Model Providers / Gateways | `settings.gateways.*`、`settings-c2fddca9a1ec.js` | `code/app-261016/settings/` |
| Face / Voice verification | `/api/identity/service/biometric-factors` | `settings-d7661829b85a.js` |
| OpenAI Passwords / 1Password | `browserAuth.setup.*`、`browserAuth.confirmation.*` | `app-initial`（共享层） |
| GPT-Rosalind / Trusted Access | `/rosalind/access/*`、`persona-client-*` | `app-shell/_deps/` |
| USB passkey / email OTP | `restricted.aeon.passkey.*`、`aeon.messaging.browserAuth.*` | `aeon/_deps/` |
| Enterprise / Business workspace | `admin-invite.*`、`chatgpt.enterprise_migration.*` | `app-shell/_deps/` |
| Sites appearance editor | `sitesPreview.customization.*` | `chatgpt-surfaces/_deps/` |
| Artifact Template Picker MCP | `openai_artifact_template_picker` | `resources/artifact-template-picker/` |

详细行为、REST 路径、协议复用、限制与证据等级见
[changelog-26.1016.md](changelog-26.1016.md)。全量 i18n diff 的新增量为
767 条、删除 314 条、同 id 改写 45 条。

## 26.1013 上一全量基线

26.1013 是本目录的上一份全量快照，与 26.928 相比：

| 指标 | 26.928 | 26.1013 |
| --- | ---: | ---: |
| asar 文件数 | 20,660 | **21,073** |
| asar 字节 | 523.7 MB | **566.2 MB** |
| `.vite/build/` | 33 files / 9.6 MB | **35 files / 10.2 MB** |
| `webview/assets/` | 19,634 files / 486.3 MB | **20,045 files / 529.3 MB** |
| i18n 文案 | 13,338（26.903 全量口径） | **21,620** |
| 设置 nav / slug / loader | 50 / 51 / — | **52 / 53 / 54** |

新增的五个功能面：

| 功能 | 文档 | 代码 |
| --- | --- | --- |
| Spaces / Pages / Sites | [spaces.md](spaces.md) | `code/app-261013/{spaces,personalized}/` |
| dot（Aeon） | [aeon-dot.md](aeon-dot.md) | `code/app-261013/aeon/` |
| Realtime Voice | [realtime-voice.md](realtime-voice.md) | `code/app-261013/voice/` |
| Writing blocks | [writing-blocks.md](writing-blocks.md) | `code/app-261013/writing/` |
| Computer History（Chronicle） | [chronicle.md](chronicle.md) | `code/app-261013/chronicle/` |

外加 Scheduled tasks：见 [tasks.md](tasks.md) 与 `code/app-261013/tasks/`。

安装层同时新增了 `packagedServices` / `localSystemServices` /
`graphicsCaptureProgrammatic` / `graphicsCaptureWithoutBorder` 四项能力、
`CodexSandboxService.OpenAI.Codex` 后台服务、`codex-core-command-runner.exe`
执行别名，以及 6 个新的随包插件（`code-review`、`codex-app-tools`、
`deep-research`、`image-guided-assets`、`latex`、`visualize`），随包插件共 10 个。

## 结论摘要

> 以下摘要以 **26.903 基线**为主（五块界面与协议），26.1103 / 26.1016 /
> 26.1013 的增量结论见上节；Rspack 迁移后的架构变化另见
> [architecture.md](architecture.md) §26.1103。

**架构**：Codex desktop 不是普通 Electron 发行版，而是把 Electron 应用装进一个自带的完整 Chromium（内部代号 **Owl**，`chrome.dll` 322.7 MB）里，再以 MSIX full-trust 包分发。渲染层是 React 19 + React Compiler + Tailwind v4 的 SPA；**26.903–26.1016 用 Vite 8/rolldown，26.1103 已迁移到 Rspack**（数字 chunk id，9,326 个异步 JS）。主进程通过 `window.electronBridge` 与页面通信，再经 JSON-RPC 驱动 `resources\codex.exe`（app-server，352 MB）。

**界面模型**：工作区不是“侧栏 + 对话”两栏，而是 **Rail（7 个 Lottie 图标）→ Sidebar（列表/分组）→ tab strip → 三向 pane（left / right / bottom）** 的四层结构。tab 可以在三个 pane 间移动、拆到独立窗口、置顶；侧边页面（Review / Browser / Files / Side chat / PR / Sources / Subagents / Automation / Goal / Plan / Artifact / MCP App / New tab）就是右 pane 的 tab。

**对话区**：底部锚定的自研虚拟化器（默认估算行高 280px，二分查找定区间，`thread-virtualizer` 在两个版本间**逐字节未变**），turn entry 用约 35 字段的深度相等判断复用旧对象引用来避免整列重渲染；浮动 composer 用 IntersectionObserver + 弹簧动画撑起 response spacer。

**三种提交语义**：Send（`turn/start`）、**Steer**（`turn/steer`，注入当前 turn 且**不打断**模型，tooltip 原文 `Submit without interrupting the model`）、**Queue**（`thread/queue/add`，排队到当前 turn 结束）。默认策略由设置项 `settings.general.followUpQueueMode` 决定。注意 Steer 的 i18n id 是 `followUpQueueMode.interrupt` —— 历史命名，容易误读，须以 `description` 为准。steer 未被接受时会降级成 `queuedFollowUps` 并带 `pausedReason`。

**配置**：完全数据驱动，35 个导航 section + 2 个不在导航中的（`environments`、`teams`）。每个 section 有 capability 门控（`chatGpt` / `codex` / `codexLocal` / `codexOrWorkLocal`）与逐 slug 的 `visible`/`isLoading` 判定。**当前 build 有 10 个 section 的 `visible` 硬编码为 `false`**（`notifications`、`security`、`account`、`storage`、`cloud-settings`、`cloud-environments`、`code-review`、`billing`、`skills-settings`、`teams`），代码仍在包内，属已实现未放开。多个 section 复用同一实现（`analytics`/`consumer-view` 共用 `billing-analytics` 靠 `scope` 区分；`mcp-settings` 复用 `plugins-settings` 传 `manageOnly`）。

**代码产物**：26.903 基线是 `code/` 下 **691 个 chunk / 30.1 MB**（原始 20.9 MB），
按 8 个模块分目录，全部经 Prettier 3.9.6 格式化；配套 **13,338 条 i18n 文案目录**。
**26.1016 快照**是 `code/app-261016/` 下 **2,490 个 chunk / 63.7 MB**（原始 43.4 MB），
17 个模块，配套 **22,073 条文案 / 3,926 组**、设置注册表与每模块的字符串目录。
**26.1103 最新快照**是 `code/app-261103/` 下 **201 个代表文件 / 79.3 MB**
（原始 53.1 MB；172 个 webview chunk + 29 个主进程文件），配套
**57,004 条文案 / 7,909 组**、设置注册表与方法表。更早的 26.1013 快照保留在
`code/app-261013/`。

**Computer Use（26.928 专项）**：这条能力在 26.903 只是雏形（`resources/cua_node/` 仅 `{bin, manifest.json}`），26.928 已经是一个 **239.7 MB 的独立运行时**：自带 Node `24.21.0-cua.1`、`node_repl.exe`、`@oai/{cua,sky,cua-repl,browser-desktop}`、Playwright 与 sharp，配合 asar 外的随包 marketplace（`computer-use` / `unified-computer-use` / `chrome` / `browser` 四个插件）。模型侧只看到两个 MCP server：`computer-use`（10 个原生应用工具）与隐藏的 `cua_repl`（一个 `js` 工具）；**启用哪些面由主进程在运行时改写插件 `.mcp.json` 决定**，不在磁盘上有静态答案。安全上区分「硬拒绝」（Windows 终端/密码管理器/Windows 键等 13 条）与「允许但需确认」（浏览器面 17 类风险分四档摩擦），授权模型是「一次性首用披露 + 逐应用授权」。详见 [computer-use.md](computer-use.md) 与 [changelog-26.928.md](changelog-26.928.md)。

## 文档索引

### 26.1103 新功能面

- [changelog-26.1103.md](changelog-26.1103.md)：26.1016 → 26.1103 的身份、容器、
  **Rspack 迁移**、i18n +35,813 条、设置重组与新增功能面的证据链。
- [learning.md](learning.md)：`/learning` 课程/课时/闪卡、DIL 生成式 UI、1,631 组学习块。
- [business-hub.md](business-hub.md)：Business Hub 路由、商家资料、产品 feed、
  Business Agent 与 Ads Manager。
- [workspace-agents.md](workspace-agents.md)：agent builder、ChatGPT 频道外观、
  apps / skills / starter prompts / schedules。
- [security-and-trust.md](security-and-trust.md)：Codex Security 工作台、
  GPT-Rosalind 研究准入、Aeon/restricted 环境与认证。
- [spaces-pages-261103.md](spaces-pages-261103.md)：Spaces / Pages 在 26.1103 的路由与分享模型。
- [settings-pages-261103.md](settings-pages-261103.md)：53 slug、4 导航组、41 项能力门控。
- 代码：[code/app-261103/README.md](code/app-261103/README.md)（201 个代表文件 /
  raw 53.1 MB；设置注册表 `settings/_SETTINGS_MAP.json`；方法表
  `main-process/_APP_SERVER_METHODS.json`）。
- 清单：[inventories/inventory-261103.json](inventories/inventory-261103.json)。

### 26.1016 新功能面

- [changelog-26.1016.md](changelog-26.1016.md)：26.1013 → 26.1016 的身份、容器、
  chunk、i18n 与设置差异；Model Providers / Gateways、Face/Voice verification、
  OpenAI Passwords / 1Password、GPT-Rosalind、USB passkey、企业工作区、
  Sites 外观编辑与 Artifact Template Picker MCP 的证据链。
- 代码：[code/app-261016/README.md](code/app-261016/README.md)（2,490 chunk；
  `settings/_SETTINGS_MAP.json` 覆盖 53 nav / 54 slug / 55 loader，未抽取 0）。
- 清单：[inventories/inventory-261016.json](inventories/inventory-261016.json)。

### 26.1013 新功能面

- [changelog-26.1013.md](changelog-26.1013.md)：26.928 → 26.1013 的容器、chunk、文案、设置与安装层差异。
- [spaces.md](spaces.md)：Spaces / Pages / Sites 的路由、数据模型、创建状态机、侧栏、回收站、模板与 REST API。
- [aeon-dot.md](aeon-dot.md)：dot 个人 agent 的路由、五种消息通道、云电脑、Orbit 角色与生命周期。
- [realtime-voice.md](realtime-voice.md)：Realtime Voice 与听写的分界、设置、`thread/realtime/*` 协议、VAD / AudioWorklet。
- [writing-blocks.md](writing-blocks.md)：Writing block 的块类型、斜杠菜单、AI 改写、保存链、邮件、演示大纲与导出。
- [chronicle.md](chronicle.md)：Computer History 的配置键、三个 list 方法、allow/block 权限模型、Memories 依赖与隐私边界。
- [tasks.md](tasks.md)：Scheduled tasks 的计划字段、运行历史、通知策略、共享与自动暂停。

### 对照与缺口（本仓库 ↔ Codex app）

- [browser-gap-analysis-2026-10-12.md](browser-gap-analysis-2026-10-12.md)：内置浏览器（含扩展 / 受管实例 / 宿主 iab 四档）与 Codex app 的**设置管理、控制、功能、跨模块交互**逐项对照，前后端分开列缺口并带代码位置；含已完成项与"明确不做"清单，滚动更新。

### 架构与协议

- [architecture.md](architecture.md)：五层结构、Owl shell、主进程启动链、窗口模型、渲染层技术栈、三条通信链路、三种产品模式、本地数据目录。
- [ipc-protocol.md](ipc-protocol.md)：`electronBridge` 全量 API、23 个 `codex_desktop:*` 频道、分块流式传输协议、WebCodecs 画中画、app-server JSON-RPC 方法全集（thread / turn / item / queue / account / config / model / mcpServer / plugin / realtime）、沙箱 MCP App 的 MessagePort 通道。

### 五块界面

- [left-nav.md](left-nav.md)：Rail 的 7 个 Lottie 图标、模式选择器、8 个分区、16 个导航链接、行级操作、卡片横幅、新手清单与帮助菜单、Library 页。
- [conversation-area.md](conversation-area.md)：三个页面实现、turn/item/合成条目类型、turn entries 加工与引用稳定性、虚拟化算法、滚动控制器与常量、response spacer、导航 rail、Steer/Queue 落地、thread handoff 状态机、152 条对话区内嵌痕迹。
- [composer.md](composer.md)：ProseMirror 基座、12 种 mention 节点、27 个斜杠命令、Send/Steer/Queue 三语义、队列 tray 16 条文案、utility bar 与 run-location、worktree/环境/分支选择、quick chat 与听写、17 个 composer 快捷键、11 种免责声明变体。
- [side-panel.md](side-panel.md)：三向 pane 模型、tab 类型、19 种侧面板 tab、New tab 聚合页、bottom panel、tab 窗口化、tab 缩略图、浏览器 tab 的 14 种媒体状态、PR 侧面板、Subagents、Artifact/Office 预览（Popcorn + OpenXML WASM）、Automation。
- [settings-pages.md](settings-pages.md)：注册表还原方法、35 项导航顺序与实现 chunk 对照表、capability 门控、逐 slug 的可见性与加载态、10 个隐藏 section、组件复用与 shim、设置搜索索引、174 个分组标题、页面统一骨架、持久化路径、onboarding。

### Git 专题

- [git.md](git.md)：把散在五个模块里的 Git / GitHub 能力串成一条链。五层结构（页面 → 查询层 → main 进程 git worker → 本机 git → gh CLI）、worker 方法表（读 / 写 / worktree 三组，写操作是唯一入口）、随包 git 的装配（`CODEX_PREFERRED_GIT_EXECUTABLE`、`GIT_EXEC_PATH`、临时索引 `GIT_INDEX_FILE` 做 stage/unstage）、25 个 gh-* 适配操作；六个页面面（Review 面板的 7 种变更来源与三级 stage/revert、Git actions 三个对话框、composer 分支切换与工作区位置、worktree 生命周期、PR 侧面板与 `/pull-requests` 页、三个设置页）、命令注册表（`git.*` 7 条 + `gitReview.*` 2 条）、Watch and fix PR 的 heartbeat 自动化提示词原文，以及与本仓库 `desktop_app` 的对照。
- [review-panel.md](review-panel.md)：右栏 **Review / 审查**面板的专项拆解 —— 7 种变更来源与各自对应的 git 参数、`review-*` 读方法与 `apply-review-section-changes` 写方法、快照世代与 live query 失效白名单、32 MiB / 64 MiB / 5 MiB / 256 / 250 五个上限、文件树的两个 pane 形态、`@pierre/diffs` 渲染与 find-in-diff 的三层滚动对齐、已读状态 `review-viewed-file-v1`、降级矩阵，以及 109 条 `codex.review.*` 文案的读法。
- 落地：[review-panel-plan.md](review-panel-plan.md)：把 Review 面板落到 Syntropy 的方案与计划（**已决**：方案 G，Master 侧 git worker；**冻结**：只做「本轮 / 未提交 / 未暂存 / 已暂存」四个来源、只做 revert 不做 stage/unstage；含 proto 契约示意与落地偏差、Master git 引擎参数、P0–P6 里程碑与验证门、风险对策、验证记录与落地状态。P0–P5 均已落地，见 §11）。

### 会话行菜单（基于更新的 26.908 采集）

- [thread-row-menu.md](thread-row-menu.md)：会话行菜单的逐项对齐。Codex 侧证据来自 26.908 版 `.work/sketch908/big/`：七节分节（`primary` / `organization` / `copy` / `continuation` / `notifications` / `window` / `internal`）与「非空节除首节外各前置一条分隔线」的规则、「打开方式」是工作区级子菜单（`open-workspace-in`）、永久删除走确认对话框、分叉是带三种目的地的子菜单；本仓库侧的菜单模型（`session-list.ts`）、分叉链路、先停后删的删除 saga、窗口路由 `#task=<id>` 与有意不做对齐的项（share / deeplink / side chat / 快捷键）。

### Computer Use（基于最新的 26.928 采集）

- [computer-use.md](computer-use.md)：**桌面应用控制与浏览器控制**的专项拆解。三条产品线
  （原生桌面应用 / 应用内浏览器与 Chrome / 云浏览器）、asar 之外的 CUA 运行时
  （`resources/cua_node/`，239.7 MB，自带 Node 24 + `@oai/{cua,sky,cua-repl,browser-desktop}`）、
  主进程**改写插件 `.mcp.json`** 的装配链路与全部环境变量、MCP server 注册表
  （15 个 server，含 `installWhenMissingRequiresOptIn` 这类门控标志）、模型可见的 10 个
  原生应用工具与 46 条工具文案、应用级审批卡片（首用披露 + `always`/`session` 授权）、
  `computerUseSettings.*` 全部 RPC、设置面（3 个一等页 + 8 条子路由）、
  Windows 自动化的 13 条硬拒绝项与浏览器面的 17 类风险分级、`@oai/sky` 与浏览器
  AX/CDP/WebMCP 能力面、Chrome 扩展四个浏览器族的安装面、`computer-use-worker`
  的 `skysight*` 方法表，以及与 Syntropy 的四条结构性对照。
- [changelog-26.928.md](changelog-26.928.md)：26.903 → 26.928 的量化差异。身份与版本、
  容器规模（8,867 → 20,660 文件 / 305.3 → 523.7 MB）、按扩展名分布、
  `.vite/build/` 从 20 个文件增至 33 个、设置导航 slug 从 37 增至 51
  （含 14 个新增项）、与 Computer Use 相关的 6 条结论，以及**方法论与坑**：
  为什么「共享 bundle 里的文案消失」和「按 chunk family 对比」都会给出错误结论。
- 代码：[code/computer-use-26928/](code/computer-use-26928/)（116 chunk / 11.2 MB raw，
  26.928 定向重抽；含 `_MAP.json` 与 i18n 目录）。

### 外部浏览器扩展链路（基于 26.1007 采集）

- [browser-extension.md](browser-extension.md)：设置页「电脑操控 → Google Chrome → 已安装浏览器扩展程序」
  背后的机制。三个独立部件（MV3 扩展 / 原生消息宿主 `com.openai.codexextension` →
  `extension-host.exe` / 模型面运行时 `browser-client.mjs`）、扩展的 manifest 与权限清单
  （`debugger` + `nativeMessaging` 是这条链路的根）、`chrome.debugger.attach/sendCommand/onEvent`
  与直接命中的 CDP 方法、`playwright_locator_*` 在扩展内实现这一事实、
  原生消息清单与注册表安装契约（含 `extension-host-config.json` 与发行渠道矩阵）、
  四种后端与 mention/`claimTab` 交付语义、**宿主与扩展之间的 JSON-RPC 2.0 协议与宿主方法表**
  （§6.5）、宿主真实职责的四件事（§6.6），外加**一条排除结论**
  （随包 Playwright 的 `cdpRelay.js` 不是这条链路的证据）。
- [browser-extension-plan.md](browser-extension-plan.md)：把这条链路**落到 Syntropy** 的实现计划（定稿）。
  三源综合（Codex app 逆向 / Qwen Code 的 `packages/{chrome-extension,browser-use}` 源码 /
  本仓库现有 40 个 chunk 的 CDP 语义层），九条冻结决策，**Windows 与 macOS 的平台矩阵**
  （注册方式、宿主副本位置、本地跳用命名管道 / UDS、UDS 路径 103 字节上限、签名与公证、
  MSIX 版本化安装目录），契约设计（**隧道帧不进 proto**、控制面只管会话建立与撤销、
  错误码直接沿用 Qwen 那套、超时分层），W1–W6 分层分解与代码落点，
  P0（Windows 最小闭环）／P0-mac／P1 CDP 隧道／P2 profile 归属与审批／P3 设置面／P4 分发
  的里程碑与验证门，分平台风险表与外部依赖、六个未决问题；**§5.1 是目录布局**（`chrome_extension/`
  TypeScript 扩展、`browser_host/` Go 宿主与桥、`common/mframe/` 共用帧），**§10 是逐轮落地与
  验证记录**（最新：§10.28 **电脑操控页改用应用真图标**——Chrome/Edge/Safari/Excel/PowerPoint 换成打包的品牌 SVG（来源与许可见 assets/app-icons/README.md），归属靠徽标而不是换图标，不可用行压暗；真机 e2e 9 passed、组件 146 files/1385；§10.27 **「控制」清单点不动的根因与修法**——开关读的是节点回报的回声而不是它自己写的策略，写完界面停在旧值（看着就是点了没反应），且未安装那档画着点不动的开关；「管理」的结果只写在一行状态里。改为：开关读策略、未安装不画开关、内部页面的管理结果弹对话框、Master 在策略下发后作废旧的能力快照；真机 e2e 9 passed；§10.26 **动作记录收成一个侧边页签**——「动作归档」与「最近的动作」本是同一批事件的两份副本，现在只留「浏览器动作」窗口页签一份（吃满面板剩余高度 + 自己的滚动条），两处设置页摘掉，真应用 e2e 8 passed；§10.24 **归属修正**——外部浏览器（用户自己那个 Chrome）的接入与控制移回「设置 → 电脑操控 → 浏览器面」，「设置 → 浏览器」回到内置浏览器的设置面（面板那一份设置视图嵌进设置页：六节 + Agent 站点授权），真应用 e2e 7 passed，顺带修掉 `install-sync` 在全新 userData 上写同步记录不建目录、应用启动即退的 bug（它会让本机所有 e2e 卡在 beforeAll）；§10.25 **收起「装进我的浏览器」入口**——扩展本体不从应用里装（普通用户的 Chrome 只认商店或管理员策略，应用内代装只会留下一条默认禁用的非商店扩展），只留宿主注册，能力转 CLI / 企业策略，等商店上架后换成「打开商店安装页」；§10.23 **全量验收**——所有改动之后串行重跑：真应用 e2e 6 passed、真实栈配置面 142 checks、本机链路 40 checks、Mac 真机 3 cases、Go 套件全绿，跑完无残留；§10.22 **最终验收清单**（五条命令逐条可复核）+ 环境复原清单（本机 12:46–12:54 有一批开发工具目录消失，已对照确认与仓库代码无关）；§10.21 **把验收收成命令**（`corepack pnpm run test:e2e:browser-chain` / `smoke:browser-extension` / `smoke:computer-use`，连续两次 6 passed）——顺带修掉 pnpm 嵌套的引擎拦截、PowerShell 模块缺失导致的 Get-FileHash 失败、以及 Electron 窗口句柄过期带来的假失败；§10.20 **「电脑操控」页的 UI 级 e2e**——真实 Master + 真 App Server + **真工作节点** + 打包口径 Electron（2 passed），把「配置面到界面」那段管道验掉，顺带抓出 bundle 未重建；§10.19 **走查两页**——把「不可用」的出路写到用户真正能动手的地方（点名「设置 → 浏览器」的两个小节，并补上「扩展装上了但被浏览器停用」这个真实原因），真实栈 smoke 增到 144 checks；§10.18 **macOS 分发落点在真机验掉**——`External Extensions` 跟着 user-data-dir 走（默认 profile 下等于产品目录，所以安装器落点是对的），三级落点至此全部真机验过，并顺带修掉一个只在 macOS 暴露的测试挂死；§10.17 **验收做成两条可重跑的命令**——本机冒烟脚本（40+ checks，含
  "残留注册必须被修好"的回归）与 macOS 真机驱动程序（交叉编译 + 部署 + 两条用例，一条命令）；
  §10.16 **「装进我的浏览器」进真应用**——设置页一键完成
  打包签名 CRX → 本机托管更新清单 → 写浏览器落点，真应用 e2e 4 passed，顺带修掉"新界面挂错
  组件（检查器页 vs 设置页）"；§10.15 **macOS 真机验收**——真 Mac + 真 Chrome → 宿主 → 桥 → UDS → 节点
  （端到端 7.36s、双 profile 4.12s），并抓出三条平台差异（manifest 目录跟 `--user-data-dir`
  走、应用包改名导致探测不到浏览器、CFT 版本要与系统版本对齐）；§10.14 **自托管分发**——
  签名 CRX3 + `update.xml` + 三级落点（策略 → 外部扩展注册表 → macOS 外部扩展文件），
  真 Chrome 从本机更新服务器装上；同轮还有 §10.13 设置页过真应用 Electron e2e——真 Master + 真 App Server + 打包口径
  Electron，三条用例覆盖渲染与**写路径**（界面 → IPC → App Server → Master），并抓出"站点
  规则整条替换会擦掉其它轴"这个真 bug；§10.12 浏览器动作的长期归档——节点上抛控制事件、
  Master 落 bolt、查询 RPC 与设置页「动作归档」，触发链路由真机进程级用例验（真浏览器 +
  真 node_repl + 真管道）；
  §10.11 配置面过真实栈验收（`smoke-computer-use.ps1` 135 checks），并抓出"站点 origin 不能当
  路径参数"这种只有起真服务才看得见的问题；§10.10 节点侧动作轨迹；§10.9 多 profile 归属（两个
  真浏览器 profile 的验收在内）；§10.8 站点权限矩阵与逐轴审批档位；§10.7 撤销开关；真 Chrome
  端到端见 §10.5）。

### 风格与行为（沿用并更新上一版）

- [ui-style.md](ui-style.md)：设计 token、排版、shell/thread/composer/queue 的视觉与交互风格。
- [conversation-behavior.md](conversation-behavior.md)：任务行为与本仓库实现的对照。
- [state-machine.md](state-machine.md)：message / delivery / turn 三层状态机。

### 插件与 MCP 管理（基于更新的 26.908 采集）

- [plugin-management.md](plugin-management.md)：插件 / MCP 管理的功能点与实现细节。六个入口（设置节 `plugins-settings`、`mcp-settings`、侧栏 `/plugins`、composer 选择器、详情深链、MCP App 菜单）、**三条数据平面**（托管走 ChatGPT 后端 `/ps/plugins/*`，本机市场/配置走 app-server 的 `plugin/*` + `marketplace/*` + `config/*` JSON-RPC，外加 `.agents/plugins/marketplace.json` 与分层 config 两个文件契约）、五个管理 Tab 与计数规则、插件卡片的三种动作形态、安装/启停/卸载链路与乐观更新、市场增删升级、MCP 服务器编辑器（stdio / streamable_http 两套字段、OAuth 与 CIMD/DCR 注册策略、`config/value/write` 与 `config/batchWrite` 两条写接口）、详情页的 Includes / Works with / Connected accounts、分享与协作、五层门控与 `CODEX_PLUGIN_*` 埋点 taxonomy，以及与 26.903 的逐 chunk 差异。
- 代码：[code/plugins-26908/](code/plugins-26908/)（32 chunk / 1.08 MB，26.908 重抽）。
- 落地：[plugin-management-plan.md](plugin-management-plan.md)：把插件管理落到 Syntropy 的落地计划与结果（Master 管事实 / Node 做物化 / codex 管运行时装配，含冻结决策、工作分解、里程碑、验证门、验证记录与剩余缺口）。**P0–P8 已全部落地**（含影响面的「已生效 / 代价 / 冲突」三块：`PluginsReady` 条件、`AgentStatus.plugin_cache_bytes`、`PluginRecord.mcp_conflicts`），端到端验证为 `desktop_app/tools/smoke-plugin-management.ps1`（66/66）。W10 修掉实战暴露的 Windows 长路径（`core.longpaths`，注册 Git 来源 503 `Filename too long`）与后台调 git 弹出终端窗口。

### 文件与媒体处理

- [file-handling.md](file-handling.md)：文件类型处理流水线（4 KiB 内容嗅探 → 产物卡片 → 预览器选择 → 打开方式动作）、工作区与产物两条链路的支持矩阵、阈值总表（4 KiB / 10 MiB / 40 MiB / 738 行 / 缓存 5）、本仓库差距 G1–G10 与 P0–P3 对齐方案。

### 取证

- [installation.md](installation.md)：包身份、能力声明、防火墙规则、Shell 扩展、完整安装目录树、app.asar 内部布局、文件校验和、用户数据目录。
- [changelog-26.903.md](changelog-26.903.md)：与 26.901.6511.0 的逐项差异、19 个 chunk 的 hash 对照、本次新记录的结构、对上次结论的复核。
- [evidence.md](evidence.md)：证据等级、可复核命令、bundle 路径索引。
- [manifest.json](manifest.json)：机器可读的安装信息、校验和、抽取范围与证据边界。

### 代码

- [code/README.md](code/README.md)：`code/` 的目录结构、命名约定、未抽取的部分、重新生成步骤、阅读顺序。
- [code/plugins-26908/README.md](code/plugins-26908/README.md)：插件 / MCP 家族在 **26.908.9136.0** 的单独快照（`code/` 其余部分仍是 26.903），含 `_MESSAGES.json` 与命名陷阱说明。
- [code/tools/README.md](code/tools/README.md)：25 个工具（含 26.1103 Rspack 专项脚本）的用法与实现要点。
- 每个模块目录下的 `README.md`：该模块的功能说明与完整文件清单。

## 证据等级

- **A：安装包直接证据**。来自 `AppxManifest.xml`、ASAR 目录、CSS/JS bundle 中的资源名、字符串字面量、i18n `description` 与静态逻辑。
- **B：仓库直接证据**。来自 `desktop_app`、`api/proto`、`syntropy_master`、`syntropy_node` 的源代码（沿用 2026-09-09 的对照，本次未重新核验行号）。
- **C：结构推断**。由 bundle 命名、组件边界、状态组合或函数调用形态推断的行为，正文中已明确标注。

## 已知局限

1. **未做运行时插桩**。所有结论来自静态分析；feature flag（Statsig）与账号态会改变实际可见的界面，文档中标注的“可见性”是代码里的判定条件，不等于当前账号下一定能看到。
2. **共享 bundle 未入库**。26.1016 的 `app-initial`（14.6 MB）、
   `app-shared`（5.9 MB）与 `app-primary`（2.5 MB）含路由表、store、协议层，
   只在 `.work/big-261016/` 做 light-format 供检索（`.work/` 是 gitignore 的隐藏目录）。
   需要时可按 `code/app-261016/README.md` 的步骤重新生成。
   **全量 `inventory.json` 基线已入库**，见 [inventories/](inventories/)。
3. **标识符已丢失**。生产包不含 sourcemap（528 处 `//# sourceMappingURL` 均指向不存在的 `.map`），因此函数/变量名是压缩后的。本文档中的“去压缩”命名（如 `buildLayout`、`visible(slug)`）是**按语义重命名**，不是原始名。
4. **26.901 基线太薄，26.908 没有基线**。26.901 只记录了 20 个 chunk 名，所以 `changelog-26.903.md` 的“新增能力”一节只能说明“上次未记录”；26.908（2026-09-16）当时只重抽了插件模块，**没有跑全量清单**，因此 26.903 → 26.928 之间的中间态无法回填。MSIX 升级会替换整个版本目录，旧 `app.asar` 事后不可得。
5. **26.928 只做了定向重抽**。`computer-use.md` 与 `code/computer-use-26928/` 只覆盖
   Computer Use 相关 chunk 与 `.vite/build/`；`code/` 其余模块仍是 26.903 快照。
   本次**没有**对 26.928 做全量 i18n 收割（只收割相关面，得 3,753 条 / 955 组，
   而 26.903 全量为 13,338 条 / 1,919 组），所以文档里不给「文案增删」统计。
6. **`computer-use.md` 中标注为 C 级的部分依赖文件名与配置字段推断**。其中最需要注意的是：
   macOS 侧的原生服务行为（`Codex Computer Use.app` 及其四个内部组件）只从
   `publishConfig.executableFiles` 与主进程常量推断；Windows 侧「谁真正调用
   Windows.Graphics.Capture」无法从静态产物确认。
7. **不要把 `.mcp.json` 的当前磁盘内容当作能力已启用的证据**。主进程会在运行时按
   `surfaces` 重写它（`computer-use.md` §3），只有主进程代码是权威。
8. **B 级证据的行号可能已漂移**。仓库代码自 2026-09-09 后有改动。
9. **26.1013 是静态全量，但没有运行时验证**。Spaces、dot、Realtime Voice、
   Writing blocks、Computer History 的“当前账号是否可用”仍由 Statsig / 工作区策略决定；
   文中标 A 的只是安装包内可见的代码与文案。
10. **26.1013 的 `app-shared` 未入库**。它是 26.1013 新增的 5.5 MB 共享层，
    很多设置页 shim 会直接指向它；复核时需要 `.work/big-261013/` 的 light-format 副本。
11. **26.928 没有完整设置注册表**，所以 26.1013 的“新增 slug”只能按旧文档 nav 列表做差集，
    已在 [changelog-26.1013.md](changelog-26.1013.md) §7 标 C 级。
12. **26.1016 也只做静态全量**。Gateways、Biometric、Passwords、Rosalind 与 Daybreak
    的门控依赖远程 feature availability、账号和组织权限；本资料证明客户端实现与请求
    契约，不证明当前账号可用。
13. **26.1016 的共享 bundle 未入库**。`app-initial` / `app-shared` / `app-primary`
    分别约 14.6 / 5.9 / 2.5 MB，只在 `.work/big-261016/` 保留 light-format 副本。
14. **26.1016 的 Artifact Template Picker 是 asar 外文件**。正文引用了
    `resources/artifact-template-picker/server.mjs` 与主进程装配点，但没有把该文件
    复制进代码快照，也没有执行它。
15. **26.1103 只入库代表性 chunk**。Rspack 有 9,326 个异步 JS / 1,567 个 CSS 映射，
    `code/app-261103/` 只保留 **172 个 webview chunk**（加 29 个主进程文件，共 201）。
    “新增功能”判断依赖路由、i18n 命名空间与代表 chunk 三方佐证，不是逐 chunk diff。
16. **26.1103 的模块归属是启发式（C 级）**。数字 id 没有语义，模块是按 i18n 命名空间
    得分聚类出来的；共享 chunk 可能落在 `misc` 或被多个模块引用。另解析 `p.u` 时发现
    **1 个 JS 映射文件在清单中不存在**，未纳入抽取。
17. **DIL 组件未执行**。Learning 的学习块与部分生成式 UI 以字符串源码 + `eval`
    / 函数构造执行；本分析只读源码，不运行组件，也不枚举全部 1,631 组学习块。
18. **26.1103 的新面全部依赖服务端/账号门控**。Learning、Business Hub、Codex Security、
    GPT-Rosalind、Workspace Agents 的“可见/可用”无法由静态包确认；文中 A 级只表示
    客户端实现与文案存在。

## 复现

见 [code/README.md](code/README.md#重新生成) 与 [code/tools/README.md](code/tools/README.md)。
**26.1103 的 Rspack 链路**是 `chunkmap.mjs` → `scan-messages.mjs` → `cluster.mjs`
→ `plan.mjs` → `extract-plan.mjs`（命令见
[code/app-261103/README.md](code/app-261103/README.md#5-重新生成)）。
26.903 的 691 个 chunk 约 25 秒；26.1013 的 2,415 个 chunk 约 94 秒；
**26.1016 的 2,490 个 chunk 约 155 秒**（第二次受磁盘缓存影响；
8 线程，命令见 [code/app-261016/README.md](code/app-261016/README.md#重新生成)）。
共享 `app-initial` 的 light-format 单文件约 153 秒。
全流程只读安装目录。

Computer Use 快照单独一份：见
[code/computer-use-26928/README.md](code/computer-use-26928/README.md)，
116 个 chunk 约 9 秒，命令见 [computer-use.md](computer-use.md) §11.3。

> ⚠️ **升级前先存档**。MSIX 升级会替换整个版本目录，旧 `app.asar` 事后不可恢复。
> 目前 26.903、26.928、26.1013、26.1016、26.1103 都有全量 `inventory.json`
> （`inventories/inventory-26903.json`、`inventory-26928.json`、
> `inventory-261013.json`、`inventory-261016.json`、`inventory-261103.json`），
> 26.908 与 26.1007 缺失。
