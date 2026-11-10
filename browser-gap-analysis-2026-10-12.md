# 内置浏览器 ↔ Codex app 内置浏览器：设置 / 控制 / 功能 / 跨模块交互的缺口清单

> 2026-10-12。基准：本机 Codex app 逆向资料（`codex_app_rev/browser.md`、`browser-contract.md`、
> `browser-live-walkthrough.md` §12–§14、`settings-pages.md` §8.3、`side-panel.md` §6、
> `browser-extension*.md`）↔ 本仓库**当天代码**（10-04 的 `browser.md` 之后的 11 个提交：
> `d1b09073`/`29d00a68`/`c9d0d0de`/`45ad9756`/`ecc4f860` 等）。
>
> 与 `browser.md` 的关系：那份是 10-04 的**功能面总览**，本文是 8 天后的**重新比对**——
> 凡 `browser.md` 已定性为"平台边界/产品决策"的条目（云浏览器、独立窗口、账号切换）本文只做索引；
> 重点是这 8 天新增的扩展链路、站点策略矩阵、审计归档带来的**新缺口**，以及**仍然没修的老缺陷**。
>
> 证据级别沿用 `README.md`：A = 安装包/逆向原文，B = 本仓库源码，C = 结构推断。

---

## 0. 一句话结论

**能力面（模型能做什么）我们已经超过上游；设置面与控制面（用户能管什么）我们仍落后一个量级；
跨模块交互面（浏览器和其它模块怎么互相看见）是缺口最集中、也最容易被用户感知的地方。**

**这份清单的当前状态（10-12 收尾后）**：下面那三条是**首次诊断时**的结论；其中 1、2 已在当天落地并
验证（逐条见 §0.1），第 3 条里的"清除数据类型 / 下载位置与询问 / 历史搜索与来源过滤 / 错误页分型 /
标签静音与全局声音指示 / 浮动 composer / 逐类网页权限 / 两套'站点'对照"也都已补。**真正剩下的只有三类**：

- **需要你拍板的一件**：随包浏览器运行时的**生产方**（§6.5：补生产方 vs 明确不做）。
  （原先与它并列的 **proto 工具链**已在 10-12 实测解掉——本机 `codex_app_rev/.work/` 里那份
  `protoc 36.2` + `protoc-gen-go v1.36.11` 与仓库产物**逐字节一致**，见 §6.9；"加字段"这条线不再阻塞。）
- **产品决策类**：云浏览器、独立窗口（含任务迁移收标签）、书签/标签组、浏览器侧栏可视化 CSS 编辑器、
  浏览器动作进对话时间线——这些是**形态选择**，不是能力缺口。
- **前端细节类**（不阻塞交付，价值中低）：~~下载暂停/续传/取消~~、~~地址栏补全~~、~~`showFullUrl`~~
  （✅ 均已补，见 §0.1）、**地址栏搜索回退**（要先定搜索提供方）、设置分节可深链、扩展分节
  改成"链路状态页"、"明确不做"文案进设置页。
- **三件事看着像"加个开关"，实际是我们这边没有那条链路**（10-12 复查后改写，见 §2.3 的对应行）：
  ① ~~**本地 URL 打开去向（`localUrlOpenTarget`）**~~ → **10-12 已补**（见 §0.1）。上一轮我说"界面根本
  没有可点的链接"**是错的**：`RichText` 里链接是有的（markdown 的 `<a>` 渲染成按钮，点了走
  `openExternalInWorkspace` → 开成应用内浏览器页）；真正的缺口是本地 `http://localhost` 这类地址
  **两关都被拦下**（消毒器只放行 https、`urlTransform` 对非 https 返回空串），所以点了没反应。
  ② **组织托管标记位**——上游那套的前提是"组织能把某项设置**锁死**"；我们现有的企业能力是
  `syntropy-browser-dist policy install`（把扩展**装进**浏览器），并不锁我们的设置。没有锁，
  标记位就没有对象。
  ③ ~~**开发者模式 / DevTools**~~ → **10-12 已补**（见 §0.1）。上一轮我把 `browserdocs` 里那句
  "本产品不提供开发者工具"当成了产品立场，复查后发现它说的是**节点**（"There is no DevTools /
  Inspect surface **on this node**"）——桌面应用那一侧本来就没有这条约束。于是按 §2.4 的口径做成
  **本机偏好**（不动那个集群级 proto 字段），并把那句文档改写成"开关在桌面应用的浏览器设置里、
  节点看不到它"。

三条最该动手的（**首次判断原文保留并标注落地情况**，以便对照）：

1. ~~**P0 · 修**：iab 截图落盘把 `browser:<uuid>` 原样当文件名 → Windows 上写进 NTFS 备用数据流，
   用户拿到 0 字节文件（`browser_host_actions.go:782`）。~~ → **✅ 已修**：文件名里的 `:` 转义成 `_`，
   且两档截图统一为 JPEG（§6.1 / §6.2）。
2. ~~**P1 · 对齐**：`capability_get` 在 iab 上仍不列出"宿主真正服务的那 19 个动作"，
   且 `documentation` 自相矛盾（报 `available:false`，但 `documentation_get` 可用）。~~ →
   **✅ 已修**：`served_actions`（**23 个**动作，单一事实源）进每一份 iab 快照，`documentation`
   单列一档报 `available:true`，拒绝文案由同一份切片生成（§6.3）。
3. **P1 · 补**：设置面缺"清除浏览数据的类型×时间范围""下载保存位置/是否询问""历史搜索与来源过滤"
   "WebMCP 开关""开发者模式/全量 CDP 的按会话分档"这几项**低成本高感知**的补齐；
   跨模块缺**输入框侧的浏览器标签页 mention 生成器**（节点侧 `tab_mention_resolve` 已实现，界面没有产出口）。
   → **已补**：前四项（时间范围与自动填充**如实不做**并写明原因）、**WebMCP（站点工具）总开关**、
   **扩展会话的全量 CDP 分档**（这两处是 proto 加字段 + Master 投影 + 节点闸门 + 设置页控件），
   以及 **mention 的界面产出口**（`@` 菜单直接指认一张页；节点侧同时改为接受宿主签名的引用）。
   逐条见 §0.1。

---

## 0.1 落地进度（滚动更新）

**已完成（2026-10-12，节点侧 `syntropy_node/control/`）**

| 项                                                                           | 落点                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 验证                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iab 截图文件名转义（P0）                                                     | `browserScreenshotFileID`（`browser_host_actions.go`）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `TestBrowserHostScreenshotLandsWhereTheConsumerCanReadIt`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| iab 截图统一 JPEG（原 §6.2）                                                 | `browserScreenshotJPEG`，与受管档同质量档                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 同上（含"已是 JPEG 不二次编码"）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `capability_get` 暴露宿主服务集（原 §6.3）                                   | `served_actions` 进每一份 iab 快照；拒绝文案由同一份切片生成                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `TestBrowserHostServedActionsMatchTheImplementation`、`TestBrowserHostCapabilitySnapshotReportsTheServedSurface`                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| iab 的 `documentation` 不再自相矛盾（原 §6.3 第 1 条）                       | `browserHostCapabilitySnapshot` 单独一档报 `available:true` + 文档名                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 同上                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **in-app tab 引用能解析到宿主标签页**（新补齐）                              | `hostTabMentionResolve`：先宿主、后受管，带 title/url 快照核对与 fail closed；解析成功后把省略 `tab_id` 的动作引到那张页                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `TestBrowserHostTabMentionResolvesTheTabsTheUserSees`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 补齐两篇缺失文档（原 §4.1 / §5.2）                                           | `browserdocs/tab-claiming-chrome.md`、`browserdocs/tab-mentions-iab.md`（included 投递，注册表同步）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `TestBrowserDocumentationIncludedCoversBothBackends`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 修掉与 URL 策略矛盾的文档（`file://`）                                       | `browserdocs/local-web-development.md`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 人工核对 + 文档测试                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 截图格式与"不服务"边界的模型面说明                                           | `browserdocs/screenshots.md`、`browserdocs/browser-troubleshooting.md`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 人工核对                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 随包运行时缺失变成**可诊断**（§6.5 的落地前置）                              | `browserRuntimeDeploymentHint` / `browserRuntimeTargetHint`（点 `chromium` 时给出"去哪儿补"）；`browserExtensionFailureReason`（本机浏览器拉起的实例上扩展桥失败时点名 `--load-extension` 与随包运行时）                                                                                                                                                                                                                                                                                                                                                                                                                                    | `TestBrowserRuntimeTargetHintOnlyAnswersForTheBundledRuntime`、`TestBrowserExtensionFailureReasonNamesTheRootCause`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 复验：扩展桥本身可用                                                         | 用真 Chromium for Testing 跑 `TestBrowserExtensionLiveRoundTrip` **通过**（`extension_bridge:true`）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 见 §6.5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **接来的浏览器不再假装能被显示/隐藏**（扩展档与 `browsers_connect` 档）      | `setVisible` 对 attached 的浏览器如实拒绝（此前它会 `Close()` 那个进程——对 attached 等于把用户的浏览器从节点上摘下来——还回"已设为可见"）；`visibility_get` 回 `managed:false` + 原因；`attachedBrowserCapabilitySnapshot` 让 `capability_get` 在**动手之前**就报出扩展档的 `visibility` 不可用、`management` 的 windows/bookmarks/tabGroups/auditTrail 不支持                                                                                                                                                                                                                                                                               | `TestAttachedBrowserRefusesVisibilityControl`、`TestAttachedTierCapabilitySnapshotTellsTheTruth`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| live 用例不再假设浏览器版本（webmcp）                                        | Chrome 155 已经带 `navigator.modelContext`，用例原先把"这台机器的浏览器没有这个 API"当契约；改成两种合法状态都收（`available:false` + 原因 / `available:true` + 空清单）                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `TestBrowserCapabilityLiveRoundTrip` 在系统 Chrome 与 CfT 155 上**都通过**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **错误页按错误码分型**（前端，§4.2 的那一项）                                | 新增 `desktop_app/apps/desktop/src/renderer/browser-error.ts`：DNS / 离线 / 超时 / 连接 / 证书族（-200…-299 整段）/ 代理 / 防火墙 + 崩溃 + 地址无效，各给 title + detail（带站点名）+ advice，并保留 `errorCode · 描述` 作排障行；`BrowserPage` 的状态从一句 `error: string` 换成带分型的 `failure`                                                                                                                                                                                                                                                                                                                                         | `tests/component/browser-error.component.test.ts`（含"段外不误判"与"不认识就回落"）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **页签媒体状态 + 静音**（前端，§4.2）                                        | 新增 `renderer/browser-audio.ts`（标记与文案的唯一判断：静音优先于"正在出声"）；`BrowserPage` 读 `<webview>` 的 `isCurrentlyAudible()` / `isAudioMuted()`，跟 `media-started-playing` / `media-paused` 刷新，工具条在有声音时给一颗静音/取消静音按钮；`App` 把状态挂到页签（`InspectorPageTab` 的 `indicator` 槽）并在页签右键菜单里给同一条动作（走 `set-muted` 页面命令，与工具条同源）                                                                                                                                                                                                                                                   | `tests/component/browser-audio.component.test.ts`；`tests/component` 148 文件 / 1395 用例全通过；`tsc -b`、`oxlint`、`oxfmt --check` 干净                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **清除浏览数据：类型可勾选**（§2.3）                                         | 契约 `browser.data.clear` 的值域 2 类 → 3 类（加 `storage`；`.max(3)`，并导出 `BrowserDataType`）；主进程对 `storage` 走 `session.clearData`（`satisfies Electron.ClearDataOptions`，让类型名拼错在编译期就失败）；设置页把三颗固定按钮换成"勾选类型 + 一次清除"，并写明做不到的两件                                                                                                                                                                                                                                                                                                                                                        | `tests/contract/browser-data-clear.contract.test.ts`（三类可发、未知类型拒绝、结果侧同值域）、`tests/component/browser-settings-page.component.test.tsx` 更新                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **下载保存位置 / 是否询问**（§2.3）                                          | 新增本机设置 `SettingsView.browserDownloadDirectory`（空串 = 每次询问）+ 新命令 `browser.download.pick-directory`（系统目录选择器）；`BrowserSessionService` 在 `will-download` 时按该值定死落点（`nextDownloadPath`：重名顺延 `(n)`、目录不存在或失败则**退回询问**而不是把下载丢掉）；设置页「下载内容」加了保存位置一行（选择文件夹 / 改为每次询问）并说明它只对本机生效                                                                                                                                                                                                                                                                 | `tests/security/browser-download-path.security.test.ts`（5 条：落点、**文件名不能逃出目录**、重名顺延、扩展名处理、排满即报错）；`desktop-store` / `settings-tool-integrations` 两个契约测试的字面量同步补字段                                                                                                                                                                                                                                                                                                                                                                            |
| **历史：来源标记 + 搜索 + 来源过滤 + Agent 徽标**（§2.3）                    | `BrowserHistoryEntry` 加 `source: "agent" \| "user"`（更早的记录按用户归，代码里注明）；`BrowserPage` 在 Agent 动作上打标、在**用户自己发起的导航**上清标（`will-navigate` 覆盖页面内点击/JS 跳转，另 9 处工具条/地址栏/右键菜单/快捷键入口显式清），加载收尾时消费一次；`browser-workspace.ts` 加纯函数 `filterBrowserHistory`（标题与网址同时匹配、不重排）                                                                                                                                                                                                                                                                               | `tests/component/browser-workspace.component.test.ts`（来源记录/旧记录归用户/筛选匹配与大小写/空白不筛/不重排）、`browser-settings-page.component.test.tsx`（筛选控件与 **Agent 徽标只出现在那一条上**）                                                                                                                                                                                                                                                                                                                                                                                  |
| **跨面板的全局声音指示**（§4.2 剩的另一半）                                  | `browser-audio.ts` 加纯函数 `browserAudioTabs`（正在出声排在静音之前、组内按 id 稳定排序、空白标签退化成 id）；`App` 在窗口工具条加一个"浏览器声音"入口（**只在真有事可做时出现**），浮层列出别处的页面，点一行先切到它所属的任务再按作用域打开（与告警深链同一套做法）                                                                                                                                                                                                                                                                                                                                                                     | `tests/component/browser-audio.component.test.ts` 新增一条（排序/标签退化/无声页面不进清单）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **iab `open` 的 state 不再依赖时机**（原 §6.6）                              | `waitForBrowserSettle` 等到 `did-navigate` / `did-stop-loading` / 8s 到点再读地址；回报文案由纯函数 `browserNavigationStateText` 生成（请求地址 + 落定地址，一致时只说一遍，重定向可见）                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `browser-workspace.component.test.ts` 新增三条（一致/重定向/读不到时不编地址）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **浏览器页签菜单补两条**（§4.2）                                             | `复制网址` / `在外部浏览器中打开`，只在页面上真有 http(s) 地址时出现                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `tsc -b`（无单测：菜单是纯 JSX，行为由既有 copyText / openExternalUrl 提供）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **两套"站点"的命名与对照 +「明确不做」四处**（§6.4 / §7 P3）                 | 宿主那一节改叫「网页权限」并在两处互指（网页能力 vs Agent 站点授权）；密码一节从空态占位改成明确声明（不保存密码/联系人、不读系统浏览器密码）；历史一节写明"只存在本机、Agent 读不到"；`browserdocs/browser-troubleshooting.md` 补"本节点没有 DevTools/Inspect、也从不读用户浏览历史"                                                                                                                                                                                                                                                                                                                                                       | `browser-settings-page.component.test.tsx`（新标题 + 两句对照 + 三处声明）、`settings-page.component.test.tsx`（分节名同步）、Go 侧 `TestBrowserDocs*`                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **网页权限逐类化**（§6.4 的第二半）                                          | 存储 v2：逐类表态（`overrides`）+ **申请记录**（`requested`，由权限请求钩子写入、不改判定）+ 旧数组文件迁移；判定改为"逐类优先于整站"；契约加 `permission` 与 `BrowserSiteRule.permissions`，共享常量 `BROWSER_PERMISSION_NAMES`；界面按站点渲染"整站一档 + 申请过的能力逐类开关（跟随整站/允许/阻止）"                                                                                                                                                                                                                                                                                                                                     | `tests/security/browser-permission-store.security.test.ts`（4 条：逐类优先、清回跟随、未知能力既不写也不放行、申请≠放行、旧文件迁移）、`browser-permission-labels.component.test.ts`（认不出的名字照原样显示）                                                                                                                                                                                                                                                                                                                                                                            |
| **「问这一页」（浮动 composer 的等价物）**（§4.2 / §5.2）                    | `BrowserPage` 工具条加常驻入口（空白页不给），点开在页面底部出现输入条（回车即发、Esc 关）；`App` 的 `handleBrowserAskPage`：能直发就直发，否则落回主输入框并提示原因。`submitPrompt` 加一个可选的 override 参数——先 `setPrompt` 再调用会读到旧值（React 闭包），所以直发必须走显式入参                                                                                                                                                                                                                                                                                                                                                     | `tests/component/browser-page.component.test.tsx`（新增：空白页不给入口、有页面时常驻、输入条点开前不占位）；发送路径本身签名兼容（既有调用不传参），e2e 未在本机跑                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **扩展档：等不到的事件立刻说清，而不是等超时**（§6.4 同族）                  | `browserProcess.tunnelEmulated`（只有扩展档置位：它的 CDP 是仿真隧道，浏览器级事件到不了）；`wait_for_event("download"/"popup")` 命中即**立刻**返回"根因 + 出路"（不含 `dialog`/`filechooser`/`console` 这些标签页级事件）；`capability_get("cdp")` 在扩展档按档作答，把这个边界写在动手之前的 `note` 里                                                                                                                                                                                                                                                                                                                                    | `TestBrowserWaitForEventFailsFastOnTheTunnelBackend`（两种事件拒绝、三种不受影响、返回耗时 < 2s）、`TestAttachedTierCapabilitySnapshotTellsTheTruth` 扩了 cdp 一档；真机：扩展档/定位器/能力面 live 用例在系统 Chrome 与 CfT 155 上全绿                                                                                                                                                                                                                                                                                                                                                   |
| **外部浏览器：清单不再丢地址 + 读文档不再静默空**（§6.8 的修复半）           | 去掉"为标题去 attach"，改成会话级目标身份缓存（`applyCachedTargetInfo`，只补 url/title）；`readTargetText` 有界等文档、渲染文本为空退回 `textContent`、并在"清单地址 ≠ 文档地址"时给出可行动的报错；只读路径的 CDP 会话按目标复用（不再反复 attach/detach）                                                                                                                                                                                                                                                                                                                                                                                 | 真机：`TestBrowserExternalBrowserLiveRoundTrip` 在本机 Chrome 154 上**通过**（含放宽后的标题断言）；CfT 155 上以**指明根因**的方式失败（`about:blank` 那条）。三条假设（detach / 未激活 / 偶发）都已实测排除                                                                                                                                                                                                                                                                                                                                                                              |
| **用户窗口起始页没提交（§6.8 的最后一块）**                                  | `navigateUserWindowStartURL`：用户窗口拉起后对起始地址**显式导航一次**（不做"先检查再修"——检查要 attach，而 attach 正是把目标身份弄空的动作）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 真机**两个运行时都过**：`TestBrowserExternalBrowserLiveTrip` 在 CfT 155 与 Chrome 154 上都通过；`control` 全量通过                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **站点工具（WebMCP）总开关**（§2.3 / §2.5，原被 §6.9 挡住）                  | 新增 proto 字段 `BrowserUsePolicy.site_tools`(12) 与 `BrowserUsePolicyRuntime.site_tools`(8)，**用字符串而不是 bool**（空 = 未表态 → 按开启处理，老设置不会在升级后被静默关掉）；Master 投影时收敛值域；节点 `classify` 在浏览器面总开关之后、站点策略之前判它——关掉时 `webmcp_tools` 与 `webmcp_call` **都被拒**（`policy.site_tools_disabled`），连列举都拒；`capability_get("webmcp")` 动手前就报 `available:false` + `siteTools:false` + 原因；`web_backend` 的 PUT 路由按同一值域 400 掉拼错的值；设置页在「全量 CDP」下面加一颗开关                                                                                                   | Go：`TestClassifyActionHonorsTheSiteToolsSwitch`、`TestCapabilitySnapshotReportsSiteToolsState`、`TestProjectBrowserUsePolicyNormalizesSites`、`TestComputerUsePolicyFingerprintTracksBrowserSettings`、`TestBrowserPolicyRouteMergesAndNormalizes` / `RejectsUnknownValues`；前端：`browser-use.contract.test.ts` 7/7（含 summary 与补丁转发）、component 150 文件/1408 例全过；真机：`browser-control-settings.spec.ts` **9/9** + `smoke-computer-use.ps1` **148 checks**（见下）                                                                                                       |
| **扩展会话的全量 CDP 分档**（§2.3，原被 §6.9 挡住）                          | 新增 `BrowserUsePolicy.full_cdp_extension`(13) 与 `BrowserUsePolicyRuntime.full_cdp_extension`(9)，同样是**三态字符串**（空 = 未表态 → 沿用 `full_cdp`，所以升级不改行为）；Master 投影收敛值域；节点把"这次动作落在哪一档"做成只读判定（`BrowserIsExtensionTier`：裸 `extension` 解析到被选中的实例、空 target 落到最近用过的那一档，与站点判定同一口径），闸门据此**按档**取 `full_cdp`；`capability_get("cdp")` 报的是这一档**实际生效**的值，并在表态不是总开关时加 `fullCdpSource`；App Server 路由同值域 400；设置页在「全量 CDP」下面加一个三态下拉（跟随总开关 / 允许 / 禁止）                                                      | Go：`TestClassifyActionHonorsTheExtensionFullCDPSwitch`（两个方向 + 空 target 落到扩展档）、`TestBrowserSiteFactsOverrideFullCDPForTheExtensionTierOnly`（含"拼错的值当成未表态"）、`TestCapabilitySnapshotReportsFullCDPPerTier`、Master 投影与指纹两条；前端：contract 7/7、component 全过；真机：`browser-control-settings.spec.ts` **9/9** + `smoke-computer-use.ps1` **148 checks**                                                                                                                                                                                                  |
| **下载：暂停 / 续传 / 取消**（§2.3）                                         | 新命令 `browser.download.control`（`pause` / `resume` / `cancel`，回执带**动作之后的整份清单**）；`BrowserDownload` 加 `paused` 位——Electron 暂停期间**照样报 progressing**，不看这一位就分不出"正在下"与"已暂停"；动作值域收在契约里（`BROWSER_DOWNLOAD_CONTROL_ACTIONS`，主进程与渲染层共用一份）；先决条件抽成纯函数 `main/browser/download-control.ts`：只能暂停还在跑且服务器**支持续传**的下载（不支持时暂停等于让用户重下）、只能恢复真的停住的、只能取消还在跑的，不满足就报清原因而不是静默 no-op；设置页那一行按状态给「暂停/继续」与「取消」（策略另抽成 `browserDownloadActions`）                                              | 契约与主进程：`browser-download-control.contract.test.ts`（三个动作可发、未知动作拒绝、`paused` 必填）、`browser-download-control.security.test.ts`（三支判定逐条）、`browser-settings-page` 里的 `browserDownloadActions`（什么时候给暂停/继续/取消）；component **151 文件/1415 例**、security **34 文件/282 例**、contract 同基线（只剩 3 条既有环境失败，本行新增的文件通过）、`tsc -b` 干净。**注意**：主进程那几个 `DownloadItem` 调用与按钮点击要真 Electron 才跑得到，这一层没有 e2e                                                                                              |
| **地址栏补全（本机历史）**（§4.2）                                           | 新增纯模块 `renderer/browser-address-suggestions.ts`：命中顺序 **地址前缀 → 地址里 → 标题前缀 → 标题里**（同级按最近访问，同址只留一条，空白页与空输入不进候选）；"地址前缀"先把 `https://` 切掉再比——用户敲的是裸主机名，拿整条 URL 去 startsWith 这一档几乎永远命中不了（这一条是**测试先抓出来的**）；地址栏接上：敲字时现算候选、上/下键移动、回车走高亮那行（没高亮仍是原来的"按地址导航"）、Esc 只收列表不动用户敲的字、鼠标按下即选（失焦会先把列表收掉），**用户敲字之前列表不占位置**                                                                                                                                              | 前端：`browser-address-suggestions.component.test.ts`（四档命中顺序、同级按最近访问、同址去重、标题空了用地址、空输入与空白页不给、大小写不敏感、条数上限、敲了 `https://` 也命中前缀档）、`browser-page.component.test.tsx`（静态外壳里没有那枚列表）；component **152 文件/1424 例**全过、`tsc -b` 与 `oxfmt` 干净。**注意**：键盘/鼠标的交互本身要真应用才点得到，这条只到纯逻辑与静态外壳，没有 e2e                                                                                                                                                                                   |
| **地址栏显示口径（`showFullUrl`）**（§2.3）                                  | 本机偏好 `browserShowFullUrl`（默认 **true** = 今天的行为，所以升级不改任何东西）：走本地设置那条既有链路（desktop-store schema + 默认值 + `SettingsView` + 写入补丁白名单 + 主进程快照），设置页「常规」里加一节「地址栏」；显示口径抽成纯函数 `browserAddressDisplay`：关掉时**非编辑态**只显主机名那段（收 `https://` 与 `www.`、去掉孤零零的尾斜杠），**编辑态仍给完整地址**。地址栏的编辑态因此从"只有 ref"改成"ref + 一份 state"（显示口径要跟着重渲染），全选交给 effect——在 `onFocus` 里 `select()` 选中的还是**改口径之前**的值                                                                                                    | 前端：`browser-address.component.test.ts`（开着时一个字不动、关掉时的四种取值、编辑态回到完整地址）、`browser-settings-page.component.test.tsx`（「常规」里有这个入口，且开关一动勾选数正好差一）；契约：`desktop-store.contract.test.ts` / `settings-tool-integrations.contract.test.ts` 的字面量同步（这两条正是"加字段必须同步的名单"，漏了它们会红）；component 全过、`tsc -b` 与 `oxfmt` 干净                                                                                                                                                                                        |
| **本地开发地址的去向（`localUrlOpenTarget`）**（§2.3）                       | 本机偏好 `browserLocalUrlTarget`（默认 **builtin** = 正文外链今天的行为；可改 `system`）。**两关一起改**才真的能点：① `RichText` 的消毒器 `protocols.href` 放行 `http`（注释里写明"放开这里不等于可点"）；② `urlTransform` 留住本地地址（否则 href 会被清成空串，按钮永远看不到它）；③ 判定收在一处 `renderer/link-target.ts`——**本地地址**（localhost / `127.x.y.z` / `::1`）可点且按设置去内置或系统浏览器，**非本地 `https:`** 仍是内置浏览器页（今天的行为），**非本地 `http:`** 仍然只当纯文本（不把降级链接做成可点的），带凭据的地址与别的协议一律不给；④ App 的路由与 RichText 的按钮文案取同一份判定，不会"提示说去 A、实际去了 B" | 前端：`link-target.component.test.ts`（本地/非本地、大小写、`[::1]`、**内网 10.x/192.168.x 不算本机开发地址**、非本地 http 不可点、带凭据不给点）、`rich-content.component.test.tsx` 新增一条（本地地址出现 `data-local` 与"在内置浏览器中打开"文案、切 `system` 文案跟着变、降级链接没有按钮、https 外链照旧——并且**依旧不产生可导航的 `<a>`**）、`browser-settings-page.component.test.tsx`（「常规」里有这个入口，默认内置）；契约两处字面量同步；component **153 文件/1429 例**、security **34 文件/282 例**、contract 748 例全过（只剩 3 条既有环境失败）、`tsc -b` 与 `oxfmt` 干净  |
| **开发者模式 / DevTools 入口**（§2.3 / §4.2，原被 safety 口径挡住）          | 按 §2.4 的口径做成**本机偏好** `browserDeveloperMode`（默认 **false**），不动集群级的 proto 字段 `developer_mode`（它仍然悬空，去留见 §2.4）：`electron-security` 上开一个**窄口子**——判定抽成 `main/security/devtools-policy.ts`，只有"用户显式打开 + 内置浏览器那一 partition + `type === 'webview'`"三条同时成立才允许留着 DevTools，应用自己的窗口照旧一律关掉；`will-attach-webview` 里那一句 `devTools = !production` 也走同一份判定；内置浏览器的右键菜单在打开后多一条「检查元素」（`webview.inspectElement(x, y)`，位置取右键时的页面坐标而不是菜单坐标）                                                                          | 主进程：`browser-devtools-policy.security.test.ts`（三条缺一不可、默认关时一律不许、非浏览器 partition 不许、`window`/`browserView`/`remote` 等一律不许）；前端：`browser-settings-page.component.test.tsx`（入口默认关、文案写清只作用于内置浏览器这一页）；契约两处字面量同步；security **35 文件/286 例**、component **153 文件/1430 例**全过、`tsc -b` 与 `oxfmt` 干净。**注意**：真点一下右键菜单、以及 DevTools 真的留住，都要真应用（而且要在打包口径下）才验得了，这条停在纯判定与设置面两层                                                                                      |
| **原始 CDP 轴的审批档**（§2.3）                                              | 新增 proto 字段 `BrowserUsePolicy.cdp_approval`(14) 与 `BrowserUsePolicyRuntime.cdp_approval`(10)（三态字符串：空 = 不表态 → 沿用全局 `require_confirmation`）；Master 投影收敛；节点把它放进 `facts.Approval[SiteAxisCDP]`——`SiteGate` 本来就是按轴取审批的，所以这条只是把第四条轴接上；App Server 路由按同一值域收（认不出的值 400）；设置页在三条审批档下面加第四个「CDP 审批」                                                                                                                                                                                                                                                         | Go：`TestClassifyActionAppliesCDPApprovalMode`（alwaysAsk → 确认档、站点规则只能继续收紧不能免掉；neverAsk 只对"这个站点这一轴显式允许"生效）、Master 投影与路由两条扩写；前端：`browser-use.contract.test.ts`（补丁转发与解析）；contract / security / component 全过、`tsc -b` 与 `oxfmt` 干净                                                                                                                                                                                                                                                                                          |
| **扩展程序一节的分工说明**（§2.3）                                           | 在那一节顶上写明"这里管的是随包浏览器（受管实例）里加载的扩展；把你自己的 Chrome 接进来、以及装进它的那枚扩展，在「设置 → 电脑操控 → 浏览器面」"——两件事同名不同义，用户最容易在这里找错地方                                                                                                                                                                                                                                                                                                                                                                                                                                                | 前端：`browser-settings-page.component.test.tsx` 新增一条（出现"随包浏览器 / 电脑操控 / 浏览器面"）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **下载面板：移除单条 / 搜索 / 打开文件**（§2.3 / §4.2）                      | 新命令 `browser.download.remove`（回执带新的整份清单；**正在跑的不给删**——记录会在下一次事件里复活，所以先取消再移除，判定在 `download-control.ts` 里逐支可测）与 `browser.download.open`（`shell.openPath`，路径取自与"在文件夹中显示"同一套"确实落盘"的判定）；面板加一个按文件名/地址筛的搜索框（`filterBrowserDownloads`，空白不筛、不重排，与历史那一节同一取舍）与每行两颗按钮：打开文件 / 在文件夹中显示                                                                                                                                                                                                                             | 契约：`browser-download-control.contract.test.ts`（remove 的请求与回执形状、open 的命令与回执）；主进程：`browser-download-control.security.test.ts` 扩了"只让已结束的记录被移除"；前端：`browser-settings-page.component.test.tsx` 里的 `filterBrowserDownloads`（文件名/地址命中、大小写、空白不筛、顺序不重排）；component **153 文件/1432 例**、security **35 文件/287 例**全过。**注意**：真点"移除/打开"要真应用才走得到，这条停在契约与纯函数两层                                                                                                                                  |
| **审批档的第三档 `disabled`**（§2.3）                                        | 三轴审批档多一档"直接禁用"：`common/mcomputeruse` 里加常量 + 值域收敛 + `SiteGate` 的前置条件（**放在全量 CDP 那道之后**，所以 cdp 轴上两条同时成立时报的是更常见的 `policy.cdp_disabled`）；报稳定原因码 `policy.axis_disabled`；界面下拉加「禁用」一项                                                                                                                                                                                                                                                                                                                                                                                    | Go：`TestSiteGateApprovalDisabledTurnsOneAxisOff`（显式禁用的那条轴被拒、**站点规则写着允许也打不开**、别的轴不受影响、大小写收敛、拼错的值仍按"不表态"处理）、契约里的文案与**"界面给得出的值 = 判定认得的封闭值域"**（把审批档选项表导出后逐项对文案）；`web_backend` 的取值错误文案同步成 `alwaysAsk, neverAsk or disabled` 并多了一条 400 用例；节点面向模型的 `browserdocs/confirmations.md` 写清第三档                                                                                                                                                                              |
| **历史分页**（§2.3）                                                         | 历史一节首屏只渲染一页（`BROWSER_HISTORY_PAGE_SIZE = 50`），其余给「显示更多（还有 N 条）」按需展开；换搜索词或来源时回到第一页。理由是本机历史上限 500 条、一次全铺出来对滚动与渲染都是负担（上游历史页有分页，我们按"显示更多"而不是页码翻）                                                                                                                                                                                                                                                                                                                                                                                              | 前端：`browser-settings-page.component.test.tsx` 里新增一条**渲染级**用例（60 条历史 → 首屏正好 50 条行、出现「显示更多（还有 10 条）」；3 条 → 只渲染 3 行、不出现该按钮），另有 `browserHistoryPage` 的纯函数边界（limit 非法时回落到一页）。**注意**：真点「显示更多」要真应用才走得到，这条的渲染级证据止于首屏                                                                                                                                                                                                                                                                       |
| **设置并发保护（`revision` + 409）**（§2.3 / §6.7）                          | `BrowserUsePolicy.revision` + `SystemSettingsPatch.expected_browser_revision`（可选，缺席＝旧行为）；Master 在**自己的锁里**比对（不是路由里那个读-改-写窗口），不一致回 `Aborted` → 路由 409；三个写入入口都带令牌、都回落盘之后的那一份；桌面端记住读到的那一代，冲突时自动刷新并提示重做                                                                                                                                                                                                                                                                                                                                                 | Go：`TestBrowserPolicyRevisionGuardsConcurrentWrites`（第一次写入推进到 1；带正确令牌成功并推进到 2；**过期令牌被拒且不落地、不推进**）、路由两条（令牌原样转给 Master；不带令牌时不凭空造一个；`Aborted` → **409**）；前端：`browser-use.contract.test.ts`（读回的那一代成为写入令牌、回执的新一代成为下一次的令牌、站点写入也带令牌）；**真机**：打包后 `browser-control-settings.spec.ts` **6/6**（页面上每一次开关/审批档/站点增删都真的走令牌路径）+ 冒烟 148 checks（不带令牌的老调用方行为不变）。**注意**：这条的第一次真机跑**失败了**，根因是站点路由回了旧代数——见 §6.7 的记录 |
| **页签生命周期与上游对齐的说明**（§5.2）                                     | `browserdocs/tab-cleanup-iab.md` 补一条：本节点**没有 detach / restore 这一步**（桌面应用是单窗口，Agent 开的页签归属发起它的那个会话），切任务不会搬走或关掉那些页、回来还在；不要叫用户"把标签页交回"，也不要以为 detach 过的页需要重新接上                                                                                                                                                                                                                                                                                                                                                                                               | Go：`TestBrowserDocumentation*`（文档注册表与投递）；真机已由既有 `browser-tool-iab` 覆盖文档投递那一段                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **两个悬空字段在 proto 里就地写清**（§2.4）                                  | `developer_mode`(3) 与 `enforce_csp`(4) 各加一段字段注释：前者"本侧没有读写方，功能落在本机偏好"，后者"没有读写方、语义也未定，别当成已生效的开关"。注释会跟着 `protoc-gen-go` 生成到 Go 里，所以**读代码的人也不会再以为它们接上了**；真正弃用（保留号）或按-node 映射仍待拍板                                                                                                                                                                                                                                                                                                                                                             | `protoc` 重生成（`api/proto/model/settings/system_settings.pb.go` 头部与注释同步）+ Master/web_backend 构建与套件全绿                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **「明确不做」的最后一半：云浏览器 / 独立窗口 / 书签管理器**（§2.5 / §7 P3） | 设置页「常规」多一节「本产品不提供」：内置浏览器就是本地那一扇（不提供云浏览器，页面数据不出这台机器）、不提供把页签拖成独立窗口或账号切换（页签始终属于打开它的会话）、也没有书签管理器（书签与标签组只在受管实例上经扩展提供）；`browserdocs/browser-troubleshooting.md` 补一条给模型看的同义声明（别对用户承诺"存到云端""拖成独立窗口"）                                                                                                                                                                                                                                                                                                 | 前端：`browser-settings-page.component.test.tsx` 新增一条（「本产品不提供」/不提供云浏览器/独立窗口/没有书签）；后端文档：`TestBrowserDocumentation*` 通过；component 全过、`tsc -b` 干净                                                                                                                                                                                                                                                                                                                                                                                                 |
| **输入框侧的浏览器标签页 mention 产出口**（§5.2 第一行，被称作"最后一公里"） | 两条腿：**节点侧**接受宿主自己签名的 in-app 引用（`browserId` = 内置浏览器的 target id `iab`，或节点自己的会话标识；别的一律 fail closed——桌面应用是宿主，拿不到节点私有的 spool 派生会话标识）；**前端侧**新增 `renderer/browser-tab-mention.ts`（按上游形态拼 `plugin://browser@local?mention=tab-v1&browserId=iab&tabId=…&title=…&url=…`，正文里以反引号包住、与"引用文件"同一套两半结构），`@` 菜单多一节「浏览器标签页」列出内置浏览器当前开着的页（空白页不收）、选中即把引用写进正文并在输入框上挂一枚可移除的 chip                                                                                                                  | Go：`TestBrowserHostTabMentionResolvesTheTabsTheUserSees` 扩了「宿主签名被接受」与「别的会话的引用仍被拒」两条；前端：`browser-tab-mention.component.test.ts`（链接形状/转义、替换 `@` 词与空格取舍、删链接后 chip 消失、候选筛选与上限）、`composer-at-menu.component.test.tsx`（新分节与链接作为副标题）；component 151 文件/1414 例全过、`tsc -b` 干净。**注意**：驱动输入框的那条 e2e 目前是 mock-App-Server 的 `task-lifecycle`（另属主、当前红），所以这条只到组件级，没有真机 e2e                                                                                                  |

**待办（只剩一件需要你拍板，其余都已落地并验证）**：**随包运行时生产方（§6.5，补生产方 vs 明确不做）**——§6.8 那条"别随包 155"的约束已经解除，现在唯一的硬约束是"Chrome 154 拒绝命令行 `--load-extension`，所以才需要 CfT 这类构建"。**proto 工具链已不再是阻塞**（§6.9：本机那份工具链与仓库产物逐字节一致，"加字段"这条线开了），**站点工具（WebMCP）总开关、扩展会话的全量 CDP 分档、输入框侧的标签页 mention 产出口都已落地**（§0.1）；设置面不再有"改变行为却做不了"的开关，跨模块那条"最后一公里"也通了。**之后又补了三件不改任何策略的细节**：下载的暂停/续传/取消、地址栏补全，以及把两处判定从"藏在 JSX 里"提到可测的纯函数。剩下还能直接做的是 `developer_mode` / `enforce_csp` 的去留（§2.4）与 §0 第三类里那几件前端细节。

> 说明：本文里**不需要外部决策的缺口**已落地并验证（§0.1 是逐条清单）；**proto 这一层也不再是阻塞**（§6.9 实测解掉，"按档表态"的两处开关与标签页 mention 的节点侧都是用它/按它做的）。仍**未做**的见 §0 顶部那张小清单，只有四类：① 需要你拍板的一件（随包运行时生产方 §6.5）；② 产品决策类（云浏览器、独立窗口、书签与标签组、CSS 编辑器、动作进对话时间线——其中**云浏览器 / 独立窗口 / 书签**已按"本产品不提供"写进设置页与 `browserdocs`，见 §2.5，要做就得改那段文案）；③ **看着像加开关、其实缺的是它下面那条链路**的一件（组织托管标记位——我们没有任何"锁死某项设置"的机制，schema 里那个 `source: "policy"` 至今没有生产方）；④ 只剩两件：**地址栏搜索回退**（要先定搜索提供方，是产品选择）与 `developer_mode` / `enforce_csp` 两个 proto 字段的去留（§2.4）。第①类会改动交付形态（安装包体积 / 真机验收），所以那一件停在这里等你拍板。

### 验证入口实测（2026-10-12，两条真机命令）

本轮把手边两条**端到端**入口跑了一遍，用来给上面那些改动收口（此前只跑过单测/组件/契约）：

```powershell
# 1) 扩展链路自包含冒烟（原生消息宿主注册 + 分发产物 + 三级落点）
Set-Location desktop_app
powershell.exe -NoProfile -File tools/smoke-browser-extension.ps1
#   → browser extension smoke passed (40 checks)
$env:SYNTROPY_E2E_CHROME = "<Chromium for Testing 的 chrome.exe>"
powershell.exe -NoProfile -File tools/smoke-browser-extension.ps1
#   → browser extension smoke passed (41 checks)   ← 多出来的那条是「真浏览器从本机更新服务
#      装上我们自签的 CRX」（TestRealChromeInstallsSelfHostedCRX）

# 2) 浏览器链路 e2e（打包口径 Electron + 真 Master + 真 App Server + 真工作节点）
node tools/run-browser-chain-e2e.mjs
#   → 9 passed (24.7s)
```

第 2 条**当场抓到一处我自己造成的破坏**：这次把宿主那一节从「网站设置」改名成「网页权限」时，
我更新了组件测试却漏了 `tests/e2e/browser-control-settings.spec.ts` 里那份同名断言（第一轮
`1 failed, 5 skipped`——serial 模式下首个失败会跳过其余）。补上后 9/9 全绿。教训写在这里：
**改文案时 `tests/e2e` 也在影响面里**，它是唯一跑真应用的那一层，漏了只有真跑才看得见。

```powershell
# 3) iab 三层闭环（真 Master + 真 App Server + 真 worker 节点 + 打包 Electron + 本地假模型）
Set-Location desktop_app
node node_modules/@playwright/test/cli.js test --config playwright.config.mjs `
  tests/e2e/browser-tool-iab.spec.ts
#   → 4 passed (35.5s)
```

第 3 条同样抓到一处**我自己造成的破坏**：`browser-tool-iab.spec.ts` 原来断言 iab 截图带 **PNG 头**，
而我这次按 §6.2 把宿主截图统一成了 JPEG。改断言时顺手把理由写在旁边（宿主给 PNG、节点落盘前统一）
——现在这条断言验的正是统一后的行为。跑真机前先把二进制对齐：`build.mjs node` 重建 nbot（这台机器
没有 macOS，用仓库自己文档里的 CI 开关 `SYNTROPY_MAC_CUA_ARTIFACTS` 指向随包的那两份 mac 产物即可
过掉那一步），再把新 nbot 覆盖进 `resources/node/artifacts/`（该目录 gitignore，属构建输出）。

真机返回的载荷本身就是证据（摘）：截图路径
`…\.syntropy-run-<id>\data\computer-use\browser-screenshots\browser_138b3eaf-…-1791782628139151900.jpg`
——**句柄里的 `:` 已被转义成 `_`、扩展名是 `.jpg`**（§6.1/§6.2 两处修复）；`read` 给出编号清单
`0: textbox "type here" / 1: button "Click me"`，按编号点击后重读是 `1: button "Clicked"`；
`mark=deliverable`、`survives_turn=true`，次回合 `marks=0`（mark 是 turn 作用域）。

**一条环境观察（不是代码问题，但会浪费排障时间）**：这条 spec 连跑三次，结果分别是
`1 failed`（测试 3 在"窗口里挂上 webview"那一步看到页面已关）/ `1 failed`（测试 4 点「打开设置」时
`Target page, context or browser has been closed`）/ **`4 passed`**。同一个二进制、同一台机器，
只有时序不同——4 个用例各起一套真应用（master + app server + 节点），Windows 上偶发窗口提前消失。
遇到它先重跑一遍再查代码；要留证据用 `SYNTROPY_E2E_KEEP_WORKSPACE=1`（保留工作目录含桌面日志）。

**扫尾（把改动影响面里剩下的 spec 也跑一遍）与一条**不归我的**红**：

```powershell
node node_modules/@playwright/test/cli.js test --config playwright.config.mjs `
  tests/e2e/node-tab-menu-drag.spec.ts tests/e2e/session-search.spec.ts
#   → node-tab-menu-drag 通过（我在页签上加的媒体指示与两条菜单项没打破它）
#   → session-search 3/3 稳定失败
```

`session-search` 的症状是**卡在启动页**（`main "Syntropy 正在启动" / 马上就好）然后窗口关闭。归属判断
（做了三条检查，都指向"不是我的"）：

1. 这条 spec **不跑真集群**，而是用 mock App Server（`SYNTROPY_E2E_APP_SERVER_OVERRIDE=1`）；
   它的 `/api/settings` mock 返回的是**集群设置**（agentTeams / modelProfiles…），不是我这次改动的
   那个桌面 `SettingsView`（后者由主进程 IPC 提供），所以我的 schema 改动不在这条路径上；
2. 我怀疑过"主进程在 import 期崩"，直接验了打包 bundle：`main-*.js` 里含我新增的权限名（2 处）与新
   设置字段（3 处）、`preload.js` 含 1 处 → 我的模块初始化是好的；
3. 会挂载应用外壳的其他 spec（browser-control-settings / computer-use-settings / browser-tool-iab）
   在**真 App Server** 下全部通过 → 渲染层外壳本身没问题。

结论：这条属于**并发会话正在做的侧栏/搜索/归档那一块**（`b6685034 feat: enhance archived chat search
and filters`，工作树里 `App.tsx` 还有 +255 行未提交、外加新的 `keyboard-shortcuts.ts`），我没有去改它
——那是别人的进行中工作，动它只会制造冲突。另外注意：**CI 的 release workflow 根本不跑 Playwright**，
这些本地 e2e 会在会话之间悄悄腐坏，这正是它们能抓出两处陈旧断言、也留下这一条红的原因。

### 验证入口实测（续）：两处"按档表态"开关的真机闭环（2026-10-12）

本轮补的两处设置面缺口——**站点工具（WebMCP）总开关**与**扩展会话的全量 CDP 分档**（都是 §6.9
解掉之后做的）——收口证据是**真机三件套**（真 Master + 真 App Server + 打包口径 Electron）跑出来的，
不是单测：

```powershell
node tools/run-browser-chain-e2e.mjs
#   → 先按打包口径重建 Electron bundle（渲染层改动必须进 bundle，否则测的是上一次的界面）
#   → 9 passed (24.8s)   ← browser-control-settings 7 条 + computer-use-settings 2 条

# 再加一条自包含的 REST 级冒烟（自己起 App Server + 部署随包 Master + 注册本机节点，
# 全部走 /api/computer-use*；这一条是设置面在 REST 这一层的唯一门禁）
$env:SYNTROPY_MAC_CUA_ARTIFACTS = "desktop_app\output\mac-cua"   # 本机没有 macOS 时的 CI 开关
node tools/build.mjs resources --skip-tests                      # 先让随包 Master / App Server 跟上源码
powershell.exe -NoProfile -File tools/smoke-computer-use.ps1
#   → computer use smoke passed (148 checks)
```

新加/加严的断言（全部在真应用上点出来）：

- 设置页「Agent 的浏览器授权」那一排里出现「站点工具（WebMCP）」，默认**勾选**，而且从 Master
  读回的策略是 `siteTools: ""`——"没写过"就是空串，不是界面自己编的一个 true；
- 点一下关掉 → 策略里落成 `"disabled"`；再点一下打开 → 落成 `"enabled"`（显式表态）；
- 之后**移除一条站点规则**，读回的 `siteTools` 仍是 `"enabled"`：写一个字段不会把别的字段写没
  （这条顺带覆盖了 `web_backend` 路由里那份逐字段合并的老坑，见 §0.1 的验证列）。
- 扩展会话的全量 CDP 是**三态下拉**：默认值是空串（"跟随总开关"），选「禁止」后读回
  `fullCdpExtension: "disabled"`——而**总开关这时是开着的**，正是"给受管实例开、但不动用户
  自己那个浏览器"这条授权形状；随后移除站点规则时它同样不受影响。
- REST 级那一条（`smoke-computer-use.ps1`，**148 checks**）另外钉住：两处表态默认都是 **空串**
  （不是 false 或"关"）、拼错的值是 **400** 而不是静默落成"不表态"。**改这条冒烟时踩到一个真实的坑**：
  它自己的假 SettingsServer 里有一份**逐字段**的 `cloneBrowserUse`，注释就写着"漏一个字段，路由回的
  策略就会缺键"——我加字段时它先失败了，正是这类"proto 有、某一层名单没有"的缺口的现场演示。

**同一轮补的第三件：输入框侧的标签页 mention（§5.2 的"最后一公里"）**。它的证据在**两层**，
而且第二层的边界要说清楚：

- 节点侧（Go，`TestBrowserHostTabMentionResolvesTheTabsTheUserSees` 扩写）：in-app 引用除了节点
  自己的会话标识，还接受宿主签名的内置浏览器 id（`iab`）——桌面应用就是宿主，拿不到节点私有的
  spool 派生标识；给别的会话签发的引用仍然 fail closed。这是"放宽的是签名的写法，不是判据"
  那句注释的实测。
- 前端侧（component）：`browser-tab-mention.component.test.ts` 钉住链接形状与转义、替换 `@` 词的
  语义与前后空格取舍、删掉正文里的链接后 chip 跟着消失、候选只收落过地的页并按词筛；
  `composer-at-menu.component.test.tsx` 钉住新分节的位置与"链接作为副标题"。`tsc -b` 干净、
  component **151 文件 / 1414 例**全过。
- **没有真机 e2e**：唯一驱动输入框的 spec 是 mock-App-Server 的 `task-lifecycle`（属主是另一个
  会话、当前正是红的），而真集群那几条 spec 都不碰输入框。所以这条的验证停在组件级——写在这里，
  免得下一个人把它当成"跑过真机"。

**同一轮的第四件：下载的暂停 / 续传 / 取消（§2.3）**。它的证据也分两层，边界同样写清楚：

- 契约层（`browser-download-control.contract.test.ts`）：三个动作都发得出去、未知动作被拒、
  回执里 `paused` 是必填（少了它界面分不出"正在下"与"已暂停"）。
- 判定层（`browser-download-control.security.test.ts`，纯函数 `main/browser/download-control.ts`）：
  不可续传不给暂停、没暂停不给恢复、结束的不给取消——**这一层抽出来测**正是因为"静默 no-op
  比报错更糟"：用户按了暂停、按钮也变了，下载其实还在跑，事后没人说得清。
- 界面策略层（`browser-settings-page.component.test.tsx` 里的 `browserDownloadActions`）：还在跑的
  才给按钮，暂停与继续按 `paused` 切。组件用例跑在 node 环境、只做静态渲染（列表里的按钮渲染
  不到），所以这条纯函数是它唯一的自动证据。
- **没有 e2e**：真正调 `DownloadItem.pause()/resume()/cancel()` 的那几行要跑在真 Electron 里，
  而现有的浏览器链路 e2e 不下载文件；按钮点击同样没被点到过。这条同样记在这里，别当成"跑过真机"。

**同一轮的第五件：地址栏补全（§4.2）**，证据同样分两层：

- 纯逻辑层（`browser-address-suggestions.component.test.ts`）：四档命中顺序、同级按最近访问、
  同址去重、标题空了用地址顶、空输入与 `about:blank` 不给候选、大小写不敏感、条数上限。
  其中**"地址前缀要先把 `https://` 切掉再比"这一条是测试先抓出来的**：我按整条 URL 写
  `startsWith`，结果用户敲裸主机名时最高那一档永远命中不了——测试立刻给了反例，改成切掉
  scheme 再比（敲了 `https://` 的人照样命中，两条都留着）。
- 外壳层（`browser-page.component.test.tsx`）：静态外壳里没有那枚列表——与"问这一页"那条
  一样，用户没动手之前不该占位置。
- **没有 e2e**：上/下键、回车、Esc、鼠标按住选这些交互要真应用才点得到；组件用例跑在 node
  环境、只做静态渲染，列表根本渲染不到。这条也写在这里。

**同一轮的第六件：地址栏显示口径（`showFullUrl`，§2.3）**。它是**本机偏好**而不是集群策略
（同 `browserDownloadDirectory` 的理由：这是你这台机器上看着顺不顺眼的事），默认 **true** = 今天
的行为，所以升级不改任何东西。证据：

- 纯函数层（`browser-address.component.test.ts`）：开着时一个字符都不动；关掉时
  `https://www.example.com/page?x=1` → `example.com/page?x=1`、`https://example.com/` →
  `example.com`、`http://localhost:3000/` → `localhost:3000`（端口留着）、`about:blank` 与空串
  原样返回；**编辑态回到完整地址**。
- 界面层（`browser-settings-page.component.test.tsx`）：「常规」里出现这个入口，且开关一动
  勾选数正好差一（不锁绝对值——同节里还有清除数据那几枚复选框）。
- 契约层：`desktop-store.contract.test.ts` 与 `settings-tool-integrations.contract.test.ts` 的
  字面量同步。**这两条是"加本地设置字段必须同步的名单"**，我第一次跑就红了——留下记录，免得
  下次加字段再踩。
- 这轮顺手改掉的一处**真实缺陷**：地址栏的编辑态原本只有 `addressEditingRef`（不触发重渲染）。
  显示口径要跟着编辑态变，就必须同时有 state；而"聚焦时全选"如果留在 `onFocus` 里，选中的是
  **改口径之前**那串字——所以全选挪进了 effect。

**同时复查出三件"看着像加开关、其实我们这边没有那条链路"的事**（已改进 §0 第三类）：本地 URL
打开去向没有可点的链接可管（渲染层没做 linkify）、组织托管标记位没有"锁"可标（我们的企业能力
是装扩展，不是锁设置）、开发者模式与我们自己面向模型的"不提供开发者工具"那句承诺冲突。

**同一轮的第七件：本地开发地址的去向（`localUrlOpenTarget`，§2.3）——它同时是对上一轮一处
错判的更正**。上一轮我写"渲染层没有可点的链接"，那是**错的**：正文里的链接一直是可点的
（`RichText` 把 markdown 的 `<a>` 渲染成按钮 → App 的 `openExternalInWorkspace` → 开成应用内
浏览器页）。逐个关卡查下去才看清真正的缺口，而且它**卡在两关**上：

1. 消毒器 `markdownSchema.protocols.href` 只放行 `https:`；
2. `urlTransform` 对"不是外部 https 主机、也不是工作区路径"的地址一律返回空串。

两关都拦，所以 `http://localhost:4173` 既不显示成链接、点了也没反应——而"Agent 起了个本地服务、
把地址贴进正文、你点开看一眼"正是开发流里最常用的那一步。改法是把**判定收在一处**
（`renderer/link-target.ts`）：消毒器与 `urlTransform` 只管放行，能不能点、点了去哪由这一份纯函数
说了算，App 的路由与按钮文案都取它。证据：

- 纯函数层（`link-target.component.test.ts`）：本地/非本地、大小写不敏感、`[::1]`、
  **内网 `10.x` / `192.168.x` 不算"本机开发地址"**（它们不是回环）、非本地 `http:` 不可点、
  带凭据的地址不给点、`javascript:` / `file:` 不给点。
- 渲染层（`rich-content.component.test.tsx` 新增一条）：本地地址出现 `data-local="true"` 与
  「在内置浏览器中打开：localhost」；切到 `system` 文案变成「在系统浏览器中打开」；降级链接
  **没有**按钮（只当纯文本）；`https` 外链照旧；而且**依旧不产生可导航的 `<a>`**——这一条与
  该文件原有那条"不产生可执行 HTML 或可导航链接"的断言是同一个姿态。
- **没有真机 e2e**：点按钮那一下要真应用才走得到；这条停在纯函数与静态渲染两层。

**同一轮的第八件：开发者模式 / DevTools（§4.2 最后一个 ❌，也是 §2.3 那一行）**。做的路上先
纠正了自己上一轮的判断：`browserdocs/browser-troubleshooting.md` 那句"本产品不提供开发者工具"
说的是**节点**（"There is no DevTools / Inspect surface **on this node**"），不是桌面应用的产品
立场——所以这不是一个"要先定立场"的决策，而是可以直接补的缺口。落法按 §2.4 的口径：

- **做成本机偏好**（`browserDeveloperMode`，默认 `false`），**不动**那个集群级 proto 字段
  `developer_mode`——"我这台机器上要不要开调试"是随机器走的事，和 `download_directory` 同一个
  理由。字段仍未接，建议弃用（§2.4）。
- **安全边界只有一处判定**：`main/security/devtools-policy.ts`。三个条件缺一不可——用户显式
  打开 + 内置浏览器那一 partition + `type === "webview"`；应用自己的窗口照旧一律关掉。生产构建
  里原有的两道（`will-attach-webview` 的 `devTools = false`、`devtools-opened → closeDevTools`）
  都改走这一份判定，所以"例外"只有一条实现。
- 证据：`browser-devtools-policy.security.test.ts`（三条缺一不可、默认关时一律不许、非浏览器
  partition 不许、`window`/`browserView`/`remote`/`backgroundPage`/`offscreen` 一律不许）、
  `browser-settings-page.component.test.tsx`（入口默认关、文案写清只作用于内置浏览器这一页）、
  契约两处字面量同步；security **35 文件/286 例**、component **153 文件/1430 例**全过。
- **没有真机 e2e**：右键点「检查元素」、以及 DevTools 真的留住，都要在**打包口径**的真应用里
  才验得了（生产构建才走那条兜底路径）。这条停在纯判定与设置面两层——写在这里，别当成"验过"。
- 顺带把面向模型的那句文档改写成："这一页的开发者模式在桌面应用的浏览器设置里，**本节点看不到
  它**"——否则模型会对用户说"本产品不提供开发者工具"，而用户其实自己开着。

**同一轮的第九件：原始 CDP 轴的审批档（§2.3 的"审批档位维度"）**。它是四条轴里唯一没有审批档
的一条——而 `cdp_call` 恰好是这一面权限最大的动作，"全量 CDP 开着、但每次调用都要问一次"这个
最该能表达的组合，原来反而表达不出来。改法是把它接上**既有的那条通路**（不是新机制）：
proto 加三态字符串字段、Master 收值域、节点把它塞进 `facts.Approval[SiteAxisCDP]`——`SiteGate`
本来就是"按轴取审批"的，所以节点侧只是第四条轴接上；设置页在三条审批档下面多一个下拉。
证据：`TestClassifyActionAppliesCDPApprovalMode`（alwaysAsk → 落到确认档，且站点规则在这一层
之上只能继续收紧、不能把它免掉；neverAsk 只对"这个站点这一轴显式允许"生效——与另外三条轴
同一条规则）、Master 投影与路由两条扩写（认不出的值 400）、前端契约测试（补丁转发与解析）。

**同一轮的第十件（小）：扩展程序一节的分工说明**。这一节管的是**随包浏览器**里加载的扩展，
而用户真正要管的往往是"装进我自己那个 Chrome 的扩展"（那在电脑操控 → 浏览器面）。两句同名
不同义，所以在这一节顶上写明分工。**整体改成"扩展链路状态页"这一步没做**，理由记在 §2.3 那一行：
那会把一个在用的功能换掉，而链路事实在另一页已经有一份。

**同一轮（收尾）的第十一件：把这一轮攒下来的改动在真机上重新验一遍。** 从"两处按档表态"起到
这一轮，桌面上积了五条本机偏好、RichText 的消毒器与链接路由、`electron-security` 的 DevTools
例外、以及 proto 的三个新字段——单测是分层的，但**真应用才验得到"这些新行真的画出来了、
真的往返到 Master"**。三件事：

```powershell
# 1) 自包含 REST 冒烟（真 Master + 真 App Server + 本机节点）
powershell.exe -NoProfile -File tools/smoke-computer-use.ps1
#   → computer use smoke passed (150 checks)      ← 比上一轮 +2（新增的策略字段）

# 2) 打包口径 Electron + 真 Master + 真 App Server 的浏览器链路
node tools/run-browser-chain-e2e.mjs
#   → 9 passed (30.3s)

# 3) 只跑设置页那一条（这次加了三处断言）
node node_modules/@playwright/test/cli.js test --config playwright.config.mjs `
  tests/e2e/browser-control-settings.spec.ts
#   → 6 passed (9.6s)
```

第 3 条这次**加了三处真机断言**：①「CDP 审批」这一条新的审批档在真设置页上可见，且选
`alwaysAsk` 之后从 Master 读回来就是 `alwaysAsk`（与另外三条审批档同一条往返）；②内置浏览器
那一半的「常规」里，本轮新增的三项本机偏好（显示完整网址 / 本地地址打开方式 / 开发者模式）
都在；③移除站点规则之后这些设置一个都没被写没。**这是本轮唯一"真应用"级的证据**，其余几条
（下载控制、地址栏补全、mention、DevTools 的点击路径）仍停在各层的单测。

顺带**复查掉一条我自己写错的记录**：§2.3 原先把"独立浏览器设置页 + 子页"记成"无子路由/深链"，
实际 `openBrowserSettings(section)` 早就能把六个分节各自开成一页，内置浏览器工具条上那颗下载
按钮走的就是它——桌面应用里没有"URL 可直链"这回事，这一条的实质（分节能被别处直接打开）**已经
满足**。已改写该行。
**收尾（本轮最后一件）：审批档第三档 `disabled`**。三条轴的审批档多了一档"这一轴直接禁用"——
它与"全量 CDP 没开"同一层（站点规则写着允许也打不开），是上游那三档里的第三档。落下的是既有
通路：`common/mcomputeruse` 加常量与值域收敛 + `SiteGate` 里加一道前置条件（刻意放在全量 CDP
那道**之后**：cdp 轴上两条同时成立时报的是更常见的 `policy.cdp_disabled`）+ 界面下拉多一项
「禁用」。证据分三层：

- Go：`TestSiteGateApprovalDisabledTurnsOneAxisOff`——显式禁用的那条轴被拒（原因码
  `policy.axis_disabled`）、**站点规则写着允许也打不开**、别的轴不受影响、大小写收敛、拼错的
  值仍按"不表态"处理；`web_backend` 的取值错误文案同步成 `alwaysAsk, neverAsk or disabled`
  并多了一条 400 用例。
- 前端契约：文案（「禁用」）与**"界面给得出的值 = 判定认得的封闭值域"**——把审批档选项表
  导出后逐项对文案，加了一档却忘了加选项（或反过来）会红。
- 真机：重新打包后再跑设置页那一条，**6 passed**——新加一处断言：在真设置页把「上传审批」
  选成「禁用」，**从 Master 读回来就是 `disabled`**（与另外三条档位同一条往返）。节点侧的
  拒绝语义由上面那条 Go 用例覆盖（e2e 不驱动节点动作）。
  **收尾（本轮最后一件）：设置并发保护（§6.7，P2）**。它原来是"多端才痛"的一条，动手之后发现
  **真正要防的不只是两个客户端同时写**，还有路由里那段"读-改-写"：`PUT /api/computer-use/browser`
  先读当前策略、在内存里合并、再整体写回（因为 proto3 的标量分不出"没带这个字段"与"显式设成空"，
  所以合并只能在看得见 JSON 缺席的那一层做）。所以令牌的比对放在 **Master 自己的锁里**，放在路由
  里比对只是把窗口挪个位置。证据：

- Go（Master）：`TestBrowserPolicyRevisionGuardsConcurrentWrites`——第一次写入把 `revision` 推到 1；
  带正确令牌的写入成功并推到 2；**过期令牌被拒（`Aborted`）且策略不落地、代数不推进**。
- Go（路由）：令牌原样转给 Master、不带令牌时不凭空造一个、`Aborted` 映射成 **409**。
- 前端契约：读回的那一代成为写入令牌、回执里的新一代成为下一次的令牌（不带就会把自己刚写的那
  次拒掉）、站点写入同样带令牌。
- **真机**：打包后 `browser-control-settings.spec.ts` **6/6**（页面上每一次开关、四条审批档、站点
  增删都真的走令牌路径），冒烟 **148 checks**（不带令牌的老调用方行为不变）。
- **这条的第一次真机跑是红的，而且红得飘忽**（先"点开关不生效"、后"加完站点找不到移除按钮"）。
  查 trace 才看清：我只把"主策略"那条写入改成回**落盘之后**的策略，忘了站点增/删那两条——它们回
  本地那份（旧代数），客户端于是拿着旧令牌，**下一次写入必然 409**。单测发现不了（路由测试的假
  Master 不推进代数），**真机 e2e 才是唯一能抓到它的那一层**。修完复跑 6/6。教训写进 §6.7：
  乐观并发这类改动里，**读回值必须与写入值同源**。

> **环境观察（本轮新踩到，值得记）**：节点 `control` 里那几条 **Windows 真桌面探针**
> （`TestWindowsComputerUse*OnRealDesktop` / `*ClickProbe` / `*DragScrollSetValueProbes` /
> `TestWindowsExecutorActivateWindow`）读的是**当前前台窗口**：这台机器上有人把 Windows Terminal
> 放在前台时，它们会以
> `refusing to automate 'windowsterminal' - the non-negotiable Windows automation denylist...` 失败。
> 这不是回归——**那条拒绝恰恰是安全禁区在正常工作**（终端/密码管理器/助手自身界面不可自动化）。
> 判据：错误里点名的是 `windowsterminal`，而且同一套用例在前台是别的窗口时通过。所以扫描
> "全量通过"之前先看一眼前台是什么。

> 一处**数字更正**：本轮初稿里 component 的"1421 例"是**在 `browser-address.component.test.ts`
> 被误覆盖的状态下**测出来的——我用"新增文件"覆盖了一个已有同名测试（少 3 条），发现后已按 git
> 里的原文恢复并把自己的用例接在后面。现在这一层的真值是 **152 文件 / 1424 例**（已同步到 §0.1）。
> 教训：写"新增文件"之前先 `git log -1 -- <path>` 确认它真的不存在。

> 本轮为它做了一次真机回归（`browser-tool-iab.spec.ts`——全仓库唯一挂载浏览器页的 spec，先
> `electron-forge package` 重建 bundle 再跑）：**2/4 通过，余下两条卡在"Agent 必须先进入 RUNNING"
> 这一步**。查过 trace（`artifacts/playwright-results/…/trace.zip` 里的 `test.trace`）之后可以确定
> **与本次改动无关**：失败发生在**任何浏览器页被挂出来之前**（所以 `webview` 数不到），trace 里没有
> 任何渲染层报错，而 Master 输出尾部显示那条 agent 部署命令在**超时后几毫秒**就走完了 RECEIVED →
> RUNNING → SUCCEEDED。原因基本可以定位到环境：这台机器从 12:03 起另有一套在线集群（一个 `mbot` +
> 六个 `nbot` + 一个在跑的桌面应用）——脚本自己那条注释（"多半是用户自己的节点占着那条命名管道/套接字"）
> 说的就是这件事。那套进程不是本次任务起的，**没有去动它**。

### 扫尾（续）：`task-lifecycle` 与"哪一层能跑"的规律（2026-10-12）

```powershell
node node_modules/@playwright/test/cli.js test --config playwright.config.mjs `
  tests/e2e/task-lifecycle.spec.ts
#   → 13 failed / 2 passed
```

把两次扫尾放在一起看，规律很清楚：**用真集群的 spec 全过，用 mock App Server 的 spec 全红**。

| spec                                                                                     | 起的集群                                               | 结果                     |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------ |
| browser-control-settings / computer-use-settings / browser-tool-iab / node-tab-menu-drag | 真 Master + 真 App Server（或纯 Electron 无 override） | ✅ 全过（9/9、4/4、1/1） |
| session-search                                                                           | mock（`SYNTROPY_E2E_APP_SERVER_OVERRIDE=1`）           | ❌ 3/3，卡在启动页       |
| task-lifecycle                                                                           | mock（同一条 override）                                | ❌ 13/15                 |

`task-lifecycle` 那 13 条里，**观察到的两类原因**（都不是本次改动带来的）：

1. **窗口根本没起来**：第一条失败的原文是 `locator.click: Target page, context or browser has been closed`
   ——与 `session-search` 同一种症状（app 停在启动页 / 窗口消失）。
2. **一条确实陈旧的断言**：`task-lifecycle.spec.ts:475` 要求对话区
   `scrollbar-gutter: "stable both-edges"` 且 `scrollbar-width: "auto"`，而**全仓库没有任何 CSS 设置
   `both-edges`**（真机计算值是 `auto` / `none`）。这条与我在 `shell.css` 的改动无关——我的改动全是追加块
   （`browser-*` 与 `.window-toolbar-audio*`），该文件的未提交 diff 里没有任何 scrollbar 行。

**结论**：我这次改动碰到的界面（浏览器页、浏览器设置页、电脑操控页、页签条）在真集群那一层**已经由真应用
验过**（上表第一行）；mock 那条路的红需要它的属主来看（`session-search` / `task-lifecycle` 覆盖的是侧栏、
会话生命周期与对话区样式），我没有替别人改"设计意图未明"的断言。

> ⚠️ 落地时注意：`desktop_app/apps/desktop/src/renderer/{SettingsPage,App,BrowserPage}.tsx` 与
> `settings-registry.ts` / `computer-use-client.ts` / `contracts.ts` 在 2026-10-12 当天有另一个会话
> 正在并发编辑（工作树里是未提交状态）。动前端那一批前先与用户确认，别覆盖对方的工作。

### 扫尾（续 2）：`drawio-tool` 与"共用宿主通道"的那条（2026-10-12）

```powershell
node node_modules/@playwright/test/cli.js test --config playwright.config.mjs `
  tests/e2e/drawio-tool.spec.ts
#   → 1 failed；隔一段再跑一次仍是同一条
#      expect(desktop.locator('.drawio-page')).toHaveCount(1) → Received: undefined
```

`drawio-tool` 与浏览器**共用同一条 `BrowserToolRequest` 通道**（§5.1 表最后一行），所以它在本次改动的影响面里。
两次复现都是同一种失败：`.drawio-page` 期望 1 条、实际 `undefined`——`toHaveCount` 只有在"页面/窗口已经不在"
时才回 `undefined`（正常应是 0 / 1 / …），所以这又是 `browser-tool-iab` / `task-lifecycle` 那条
"Windows 上偶发窗口提前消失"的家族（见上面那条环境观察）。

归属判断（三条，都指向"不是本次改动"）：① 工作树里 `drawio*` / `geometry*` / `jscad*` 源文件**零改动**；
② `App.tsx` 里 drawio 分流（`runDrawioHostTool` / `openDrawio`）在 diff 中只有**重新缩进**，没有逻辑变化；
③ 同族的 `browser-tool-iab` 4/4、`node-tab-menu-drag` 1/1、`geometry-tool` 1/1 均通过。
**结论：按"环境/偶发"记，不是回归**；若后续稳定复现，从
`artifacts/playwright-results/…/trace.zip` 里看窗口是何时关的（`SYNTROPY_E2E_KEEP_WORKSPACE=1` 可留工作目录）。

---

## 1. 两边的基准（各自的事实源）

| 侧面           | Codex app                                                                                                              | 本仓库                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 内置浏览器本体 | 应用内 webview（`browser-page-preload.js` + `hidden-browser-use-webview-host`），A 级                                  | Electron `<webview>`（`BrowserPage.tsx`，`partition=syntropy.browser`），B 级                                               |
| 后端分档       | `iab` / `chrome` / `edge` / `mcpapps`（+ 云端浏览器一等形态），A 级                                                    | `iab`（宿主中转）/ 受管 `chrome`+`edge`（CDP）/ `extension`（用户自己的 Chrome）/ `browsers_connect`（外部 CDP 端点），B 级 |
| 设置载体       | 本机 `~/.codex/browser/config.toml` + 远端 `GET/PATCH /wham/browser/settings`（`revision` + `expectedIdentity`），A 级 | Master `SystemSettings.browser_use`（bbolt）+ `GET/PUT /api/computer-use/browser`（无 revision），B 级                      |
| 审批模型       | 5 维 × 3 档（`alwaysAsk` / `neverAsk` / `disabled`）+ 按来源的 allow/deny 规则表，A 级                                 | 3 维 × 3 档（`""`沿用全局 / `alwaysAsk` / `neverAsk`）+ 站点 4 轴 × 4 档（`""` / `allow` / `ask` / `block`），B 级          |
| 扩展链路       | 装进用户的 Chrome/Edge（商店 id + native host `com.openai.codexextension`），A 级                                      | 自带 MV3 扩展（`chrome.debugger`）+ 桥 + 本机隧道 + 原生消息宿主（`browser_host`/`chrome_extension`），B 级                 |
| 受管实例       | 随包 Chromium（`--user-data-dir` + `--load-extension` 随包扩展），A 级                                                 | 同左（`browser-runtime-<os>-<arch>.tar.gz` + `syntropy_node/control/browserext/`），B 级                                    |

---

## 2. 设置管理

### 2.1 Codex app 的设置模型（A 级，逆向原文）

`browser-live-walkthrough.md` §13.2–§13.4 逐字还原：

```js
preferences: {
  approval_mode, history_approval_mode, iab_history_approval_mode,
  download_approval_mode, upload_approval_mode,   // 5 维 × (always_ask|never_ask|disabled)
  disable_auto_review, full_cdp_access_enabled, webmcp_enabled,
}
rules: { origin, download, upload, full_cdp }     // 4 张按来源的 allow|deny 表
```

默认值：5 维审批全 `always_ask`；`full_cdp_access_enabled=false`；`webmcp_enabled=true`。
写入是**乐观并发**（`revision` + `expectedIdentity`，冲突走 400/409/422），写后 `dispatchEvent`
广播 → **热生效于正在运行的浏览器会话**。

页面/子路由（A 级，`settings-pages.md` §8.3）：

```text
/settings/browser-use/{extensions,downloads,history,contact-info,passwords,site-settings/*}
/settings/computer-use/:browserFamily     # chrome / edge / safari / moreBrowsers / install / manage
/settings/computer-use/messages
```

`settings.browserUse.*` **248 条**、`settings.computerUse.*` **120 条**文案；站点设置下挂 **19 类**子页
（camera / microphone / location / notifications / javascript / images / sound / pop-ups / 3rd-party cookies /
clipboard / USB / protocol handlers / intrusive ads / automatic downloads / background sync / embedded content /
protected content IDs …）；另有 `showFullUrl`、`localUrlOpenTarget`、站点工具（WebMCP）、开发者模式、
清除浏览数据（6 类 × 5 个时间范围）、扩展的**会话级**全量 CDP（`settings.chromeExtension.fullCdp`）、
组织策略位（`fullCdp.blockedByPolicy` = "Your organization has disabled this setting."、
矩阵里的 `managedLegend` = "Managed by your organization"）。

### 2.2 本仓库现状（B 级）

| 位置                                                                      | 内容                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 设置 → **浏览器**（`browserUse`，`SettingsPage.tsx` §BrowserUseSettings） | 授权半区：`fullCdp` 开关、3 个审批档（浏览/下载/上传）、`defaultPermission`、站点权限矩阵（4 轴 × {默认, 允许, 每次询问, 禁止}，可增删站点）+ 内置浏览器半区（复用 `BrowserSettingsPage` 的 6 个分节）                                                                                                                                                                                                                                                      |
| 设置 → **电脑操控**（`computerUse`）                                      | 浏览器面总开关、后端清单（iab / extension / chrome / edge）逐档开关、扩展实例清单、注册原生消息宿主；macOS 系统权限                                                                                                                                                                                                                                                                                                                                         |
| 设置 → **应用快照**（`appshots`）                                         | 与上游 `appshots` 页同义（快捷键/去向/音效）——**已对齐**                                                                                                                                                                                                                                                                                                                                                                                                    |
| 内置浏览器 6 分节（`BrowserSettingsPage.tsx`）                            | 常规（**清除数据类型可勾选**：缓存 / Cookie / 网站数据，一次清除；时间范围与表单数据如实不做）、历史记录（本机列表+单条移除+全清，**+关键词搜索 + 来源过滤 + Agent 徽标**）、下载内容（进度+在文件夹中显示+清除，**+保存位置 / 每次询问**）、扩展程序（加载已解压 + 移除）、密码和自动填充（**明确声明：不保存密码/联系人、不读系统浏览器密码**）、**网页权限**（origin 级整档 allow/block + **该站点申请过的能力逐类开关**，与「Agent 的浏览器授权」互指） |
| 下发链路                                                                  | Master `projectBrowserUsePolicy` → `ComputerUsePolicyRuntime.browser` → 节点 `SiteGate` 执行（`common/mcomputeruse/sites.go`）                                                                                                                                                                                                                                                                                                                              |

### 2.3 逐项对照

图例：✅ 同义落地｜🟡 部分（有数据面没界面 / 只落一档）｜❌ 缺｜⛔ 上游也没有

| 设置项                                  | Codex app                                                                       | 本仓库                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 缺什么 / 归属                                                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 独立"浏览器"设置页 + 子页               | ✅ 6 个子路由                                                                   | 🟡 **10-12 复查后改写**：上游是**子路由**（`/settings/browserUse.history` 这类可直链的 URL），我们是**可分节寻址的面板页**——`openBrowserSettings(section)` 能把六个分节各自开成一页（页签标题就叫「下载内容」「扩展程序」这类），内置浏览器工具条上那颗下载按钮（`aria-label="下载内容"`）走的就是它。桌面应用里没有"URL 可直链"这回事，所以这一条的实质是"分节能不能被别处直接打开"——**能**。**不打算再拆成上游那种子路由**                                                                                                                                                                                                  | 复核记录（原先写成"无深链"是没查这一处）                                                                                                      |
| 审批档位维度                            | ✅ 5 维（含 **历史读取** 与 **iab 历史读取**）                                  | ✅ **10-12 已补 CDP 轴审批** → 四维（浏览/下载/上传/CDP）。上游那两维"历史读取授权"**照 §0.1 的明确声明不做**（Agent 读不到浏览器历史，没有可授权的通道）                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 见 §0.1                                                                                                                                       |
| 审批档取值                              | 3 档：alwaysAsk / neverAsk / **disabled（硬关）**                               | ✅ **10-12 已补第三档 `disabled`**（"这一轴直接禁用"）：与"全量 CDP 没开"同一层的前置条件——站点规则写着允许也打不开，只作用于它自己那条轴，报稳定原因码 `policy.axis_disabled`；界面下拉多一项「禁用」                                                                                                                                                                                                                                                                                                                                                                                                                        | 见 §0.1                                                                                                                                       |
| 全量 CDP 开关                           | ✅ 且**按会话分两档**（Browser Use 会话 / 浏览器扩展会话各一个）                | ✅ **10-12 已补**：**扩展档**（用户自己那个已登录的 Chrome）可以单独表态，其余档位（iab 宿主 / 受管实例 / 外部绑定）看总开关。取值是三态字符串——空 = 未表态 → 沿用总开关（升级不改行为）、enabled / disabled 显式表态；它比上游"两个独立 bool"多一个"未表态"档，效果是后者的**超集**：既能"总开关开着但不动用户自己的浏览器"，也能反过来                                                                                                                                                                                                                                                                                      | 见 §0.1                                                                                                                                       |
| 全量 CDP 的组织策略位                   | ✅ `blockedByPolicy` 文案                                                       | ❌                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 后端：策略层加"被托管禁用"标记位（企业分发已具备写策略能力，缺这条读口）                                                                      |
| 站点权限矩阵                            | ✅ 浏览/下载/上传/**全量 CDP** × 站点，`allow/deny/useDefault` + 组织托管标记   | 🟡 4 轴 × {默认,允许,每次询问,禁止}，无托管标记                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 前端：加"由组织管理"禁用态；语义上我们多一档 `ask`（上游没有），可保留                                                                        |
| 未列出站点的默认档                      | ✅ `defaultRow`                                                                 | ✅ `defaultPermission`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | —                                                                                                                                             |
| 站点设置 19 类子页                      | ✅                                                                              | 🟡 **10-12 做完两件**：① 这一节改叫「网页权限」并写明它与「Agent 的浏览器授权」的分工；② **逐类权限落地**——站点整档决定默认，**这个站点申请过的能力**会单独列出来（跟随整站 / 允许 / 阻止），申请与放行分开存（申请由权限请求钩子记下，不代表放行）。仍差：上游那 19 类子页的完整清单（我们按"实际申请过的能力"出现，不预先摆出十几栏空表）                                                                                                                                                                                                                                                                                   | 见 §6.4                                                                                                                                       |
| 历史：搜索/来源过滤/分页/Agent 徽标     | ✅                                                                              | 🟡 **10-12 补了搜索 + 来源过滤 + Agent 徽标**：记录里带上"这一次导航是 Agent 发起还是用户自己发起"（Agent 动作打标、用户自己发起的导航清标，见 §0.1），列表上方给关键词与来源两个控件，Agent 条目带徽标。**10-12 又补了分页**：本机历史上限 500 条，一次全铺出来对滚动与渲染都是负担，所以首屏渲染一页（50 条），其余给「显示更多（还有 N 条）」按需展开；换搜索词或来源时回到第一页                                                                                                                                                                                                                                          | 见 §0.1                                                                                                                                       |
| 历史：是否允许 Agent 读取               | ✅ `iabHistoryApproval`                                                         | ⛔（Agent 侧无读取路径）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 产品：若不做，写进 `browserdocs/` 明确说不提供                                                                                                |
| 下载：保存位置 / 是否询问               | ✅ `downloads.location.{change,reset,system}`、`downloads.prompt`               | ✅ **10-12 已补**：保存位置是**本机**偏好（主进程 `SettingsView.browserDownloadDirectory`，空串 = 每次询问）；「选择文件夹…」走系统目录选择器；主进程在 `will-download` 时定死落点（重名顺延 `(n)`、目录不存在或失败则退回询问）                                                                                                                                                                                                                                                                                                                                                                                              | 见 §0.1。**proto 里那个 `download_directory` 我们刻意没用**：见 §2.4 的说明                                                                   |
| 下载：暂停/续传/取消/打开               | ✅                                                                              | ✅ **10-12 已补**：新命令 `browser.download.control`（pause / resume / cancel），回执带**动作之后的整份清单**（界面不必再打一次 list），`BrowserDownload` 增加 `paused` 位（Electron 暂停期间照样报 progressing，光看状态位分不出"正在下"与"已暂停"）；每个动作的先决条件在 `main/browser/download-control.ts` 里逐支可测，不满足就报清原因而不是静默 no-op（服务器不支持续传时不给暂停——那等于让用户重下）；**10-12 又补了"移除单条记录""按文件名/地址搜索""用系统默认应用打开文件"**（原先只有"在文件夹中显示"）。至此上游那一档（暂停/续传/取消/打开/移除/搜索）**齐了**                                                   | 见 §0.1                                                                                                                                       |
| 清除浏览数据                            | ✅ 6 类 × 5 时间范围 + 独立对话框                                               | 🟡 **10-12 改进**：三类（缓存 / Cookie / 网站数据）可勾选，一次清除；时间范围与"表单数据"**如实不做**，并把原因写在界面那一行（Chromium 没开放时间范围、本产品没有自动填充存储），历史与下载各自分节清                                                                                                                                                                                                                                                                                                                                                                                                                        | 见 §0.1；上游的独立对话框我们做成同页内联（能力等价、少一层弹窗）                                                                             |
| 密码与自动填充                          | ✅ 密码管理器 + 联系人信息（地址/电话/邮箱）                                    | ✅ **10-12 已改成明确声明**：那一节不再留空态占位，而是写明"本产品不保存密码/联系人、也不读系统浏览器的密码库"（避免"以后会有"的暗示）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 见 §0.1（§7 P3）                                                                                                                              |
| 扩展管理                                | ✅ 安装/重装/移除/冲突/历史/站点工具/会话级全量 CDP                             | 🟡 **10-12 补了分工说明**：明写"这里管的是随包浏览器里的扩展；把你自己的 Chrome 接进来、以及装进它的那枚扩展，在电脑操控 → 浏览器面"。列表仍是"受管实例里加载的扩展"（在用的功能）。**整体改成"扩展链路状态页"这一步没做**                                                                                                                                                                                                                                                                                                                                                                                                    | 不做的理由：那会把一个在用的功能换掉，而链路事实在「电脑操控 → 浏览器面」已经有一份（历史上刻意避免同一批事实两处各列一遍）。先停在"说清分工" |
| 站点工具（WebMCP）开关                  | ✅ 默认开                                                                       | ✅ **10-12 已补**：proto 加 `site_tools`（**字符串三态**：空 = 未表态 → 默认开，老设置升级不会被静默关掉）、Master 投影、节点闸门（关掉时 `webmcp_tools` / `webmcp_call` 都被拒，连列举都拒）、`capability_get("webmcp")` 动手前报 `available:false`、设置页一颗开关                                                                                                                                                                                                                                                                                                                                                          | 见 §0.1（§6.9 解掉之后做的）                                                                                                                  |
| 开发者模式 / DevTools 入口              | ✅ `developerMode` + 右键 `Inspect`                                             | ✅ **10-12 已补**（按 §2.4 的口径做成**本机偏好** `browserDeveloperMode`，默认关，不动那个集群级 proto 字段）：给 `electron-security` 开了一个**窄口子**——只有"用户显式打开 + 内置浏览器那一 partition + `type === "webview"`"三条同时成立才允许留着 DevTools（判定抽成 `main/security/devtools-policy.ts`，逐条可测），应用自己的窗口照旧一律关掉；内置浏览器右键菜单在打开后多一条「检查元素」（`webview.inspectElement(x, y)`）                                                                                                                                                                                            | 见 §0.1                                                                                                                                       |
| 是否显示完整 URL                        | ✅ `showFullUrl`                                                                | ✅ **10-12 已补**：本机偏好 `browserShowFullUrl`（默认开 = 今天的行为）。关掉后**非编辑态**只显主机名那段（收 `https://` 与 `www.`、去掉孤零零的尾斜杠），**编辑态仍给完整地址**——用户正要改的就是它；判定是纯函数 `browserAddressDisplay`                                                                                                                                                                                                                                                                                                                                                                                    | 见 §0.1                                                                                                                                       |
| 本地 URL 打开去向（内置 vs 默认浏览器） | ✅ `localUrlOpenTarget`                                                         | ✅ **10-12 已补**（含一处**更正**）：正文里的链接**本来就有**（`RichText` 把 markdown 的 `<a>` 渲染成按钮，点它走 App 的 `openExternalInWorkspace` → 开成应用内浏览器页），我上一轮说"没有可点的链接"是错的。真正的缺口是**本地开发地址根本点不动**：消毒器 `protocols.href` 只放行 `https:`，`urlTransform` 又对非 https 一律返回空串 → `http://localhost:4173` 两关都被拦下。现在：消毒器放行 `http`、`urlTransform` 留住本地地址，**点不点得动由 `link-target.ts` 一处判定**（本地地址可点；非本地 `http:` 仍然只当纯文本，不把降级链接做成可点的），去向按本机偏好（默认内置浏览器 = 今天正文外链的去向；可改系统浏览器） | 见 §0.1                                                                                                                                       |
| 按浏览器族的 computer-use 设置          | ✅ `/settings/computer-use/:browserFamily`（chrome/edge/safari/install/manage） | 🟡 **10-12 复查**：上游是**族子页**；我们是**一页里的后端清单 + 逐档开关**（iab / extension / chrome / edge / 外部绑定），"族"就是清单里的一项。**install / manage 子页我们刻意没有**：应用内代装扩展已按 §10.25 收起（普通用户的 Chrome 只认商店或管理员策略），"装"这条链路在本侧是"宿主注册 + 分发"，而且就住在同一节里。**不打算再拆成子页**                                                                                                                                                                                                                                                                              | 复核记录                                                                                                                                      |
| 设置并发与热生效                        | ✅ `revision` + 409 + 写后广播                                                  | ✅ **10-12 已补**：`BrowserUsePolicy.revision` + `SystemSettingsPatch.expected_browser_revision`，**比对在 Master 自己的锁里**（不是路由里那个"读-改-写"窗口——那一段正是要防的东西），不一致回 `Aborted` → 路由 409；三个写入入口（主策略 / 站点增 / 站点删）都带令牌、都回**落盘之后**的那一份；桌面端记住"我读到的那一代"，冲突时自动刷新并提示"已被另一处改动，请重做刚才那一步"。**不带令牌＝旧行为**，所以老调用方（含冒烟脚本）不必一起升级。写后广播本来就有（策略一变立刻推给在线节点）                                                                                                                               | 见 §0.1                                                                                                                                       |
| 浏览器 profile 导入（密码+Cookie）      | ✅ `browserProfileImport.nux` 首启横幅                                          | ❌                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 产品决策（与"密码与自动填充"同组）                                                                                                            |

### 2.4 三个"槽位留好了、线没接"的字段（本次新发现；10-12 两件已有结论）

`api/proto/model/settings/system_settings.proto:297` 的 `BrowserUsePolicy` 除了我们在用的七个字段，
还有三个**全链路没有读写方**的字段：

| 字段                 | proto 行 | 上游对应               | 断在哪几段                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `download_directory` | `:302`   | `downloads.location.*` | **10-12 结论：不该按原样接**。保存位置是**每台机器**的偏好（路径在别的机器上没有意义），而 `SystemSettings.browser_use` 是**集群级**策略——把它接上去等于让每台桌面应用都去用同一台机器的路径。所以这一项落在主进程的本机设置库（`SettingsView.browserDownloadDirectory`，见 §0.1），proto 字段建议**弃用**（或改成按 node 的映射，若确实要集中管控）                                       |
| `developer_mode`     | `:303`   | `developerMode`        | **10-12 结论：功能做了，但没走这个字段**（同 `download_directory` 的理由——"我这台机器上要不要开调试"是随机器走的事）。落点是本机偏好 `SettingsView.browserDeveloperMode` + `electron-security` 的窄口子 + 右键「检查元素」，见 §0.1 与 §4.2。**10-12 又在 proto 里就地写清了"本侧没有读写方"**（注释会跟着生成到 Go 里），所以读代码的人不会再以为它是接上的；真正弃用（保留号）仍待你拍板 |
| `enforce_csp`        | `:304`   | （上游未见对应设置项） | 完全悬空——**需要决定删还是接**：接就要说清"enforce"是什么（我方能做的是给浏览器分区加 CSP 注入/响应头策略），删就走 proto 弃用号。**10-12 已把这个"未定"写进字段注释**，免得被当成一个已生效的开关                                                                                                                                                                                         |

它们能被发现是因为 `docs/codex-settings-integration-design.md:71` 早就按上游把 `BrowserPolicy`
列成了五项；而 `browser-use-client.ts` 的 `BrowserUsePolicy` 接口与 `updateBrowserPolicy` 的字段白名单
都只认后来那七个。**这类"proto 有、白名单没有"的字段最危险**：前端写错字段名时 Master 会静默丢掉
（`browser-use-client.ts` 顶部的注释正是这么警告的），用户看到的是"设置保存了但没生效"。

### 2.5 这一节的判断

- **结构上我们已经对齐**（6 分节 ↔ 6 子路由；`appshots` 已对齐），差的是**每节的深度**。
- **必须写清楚的"不做"**：密码/联系人（✅ 已写）、浏览器历史读取授权（✅ 已在设置页与
  `browserdocs/` 写明"Agent 读不到"）、云浏览器与独立窗口（✅ **10-12 已写**：设置页「常规」多一节
  「本产品不提供」——云浏览器（页面数据不出这台机器）、独立窗口/账号切换、书签管理器（书签与标签组
  只在受管实例上经扩展提供）；`browserdocs/browser-troubleshooting.md` 同步一条给模型看的同义声明，
  免得它对用户承诺"存到云端""拖成独立窗口"）。
  上游都有明确文案；我们留空态会让用户以为"以后会有"。
- ~~**最便宜的三个前端改动**：下载位置与询问、历史搜索/来源过滤、清除数据对话框。~~ →
  **✅ 三个都已在 10-12 补上**（见 §0.1）。剩下的前端细节是地址栏搜索回退/补全、下载暂停续传取消、
  `showFullUrl`、本地 URL 打开去向（均不阻塞交付）。
- **最该补的两处后端表达**：站点工具（WebMCP）与"扩展会话的 full CDP"——它们对应的是
  "哪些能力对 Agent 开放"，属于设置管理里唯一还会**改变行为**的缺口。**两处都已在 10-12 落地**
  （见 §0.1），proto 这条线也不再阻塞（§6.9）。

---

## 3. 控制（授权、审批、审计、生命周期）

| 控制面                           | Codex app                                                                                            | 本仓库                                                                                                                    | 差距判断                                                                                                                                                                                                                                                                                                   |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 硬禁区（不可协商）               | `computer-use.md` §7.1 + 17 类风险 × 四档摩擦                                                        | ✅ `common/mcomputeruse/safety.go`（deny 档 + 原因码）+ `confirmations.md`                                                | 已对齐；**我们的 deny 名单还额外覆盖自家 app**，属更严                                                                                                                                                                                                                                                     |
| 逐轴站点闸门                     | 规则表 + 审批档                                                                                      | ✅ `SiteGate`（总开关 → 全量 CDP → 站点规则 → 审批档），稳定原因码 `policy.*` / `confirmation.*`                          | 我们的顺序与原因码更可读，**这套是本侧强项**                                                                                                                                                                                                                                                               |
| 写动作确认                       | 按风险分档                                                                                           | ✅ `actions.go` 三档（read/write/state）+ 节点确认闸门                                                                    | 已对齐                                                                                                                                                                                                                                                                                                     |
| 分档开关（能单独关掉某一档后端） | 上游靠设置页的 backend 清单                                                                          | ✅ `browser_tier_policy.go`：`iab` / `extension` 走 `integration_enabled`，关掉**立即断开隧道**                           | 本侧强项（上游没有"关掉立刻断链"这条语义）                                                                                                                                                                                                                                                                 |
| 会话级暂停/恢复                  | ✅ worker `computer-use-worker` 一族：`Start/Stop/Pause/Resume/UpdateObservationPolicy/ClearHistory` | 🟡 有回合作用域（`turnEnded`）与档位开关，没有"暂停正在跑的一轮浏览器动作"                                                | **10-12 复查后仍停在"设计"**：软停需要一条"节点上的软停"控制路径（现在 Master→节点只有策略下发）以及"谁来解停、模型怎么等"的产品语义（与 elicitation 联动）；而**档位开关**（断链、立即生效）与 **Escape 紧急打断**（§3 已对齐）已经覆盖大部分用途。它不是"实现缺工"，是"形态未定"，所以不在本轮动手范围内 |
| 审计/动作记录                    | ✅ extension 侧 `messagesSearchChats` 等；UI 侧有历史页                                              | ✅ 节点环形缓冲 + **Master KV 长期归档**（`browser_audit_store.go`，带 prune）+ 侧边「浏览器动作」面板（固定高度+自滚动） | 本侧强项（跨节点、跨重启、含 outcome/reason/site/agent/node）                                                                                                                                                                                                                                              |
| 生命周期                         | `turn_ended` hook + `markDeliverable`/`markHandoff`；任务迁移时 `restoreDetachedTabs`                | ✅ 同义（`openedByAgent`/`scope`/`mark`/`turnEnded`），**缺** `restoreDetachedTabs`（我们没有独立窗口）                   | 独立窗口属产品决策（`browser.md` §5.5 已列）                                                                                                                                                                                                                                                               |
| 紧急打断                         | 物理 Escape（`escape-stop`）                                                                         | ✅ 已对齐                                                                                                                 | —                                                                                                                                                                                                                                                                                                          |
| 组织/企业策略                    | 组织可禁全量 CDP、站点矩阵显示托管                                                                   | 🟡 企业**分发**能力有（`syntropy-browser-dist policy install`），设置页**不显示**托管态                                   | 前端+后端：托管标记位（同 §2.3）                                                                                                                                                                                                                                                                           |

---

## 4. 功能

### 4.1 模型面（Agent 能做什么）

| 能力                                                                             | Codex app                                          | 本仓库                                                                                                                                         | 判断                                                                                                                                                         |
| -------------------------------------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 动作全集                                                                         | 14 接口 / ~100 成员 + 34 个具名命令                | ✅ **116 个动作名**（`browser_executor.go`）；`element_info`/`element_screenshot` 等上游 `documented:false` 的档我们是正式动作                 | 本侧**更宽**                                                                                                                                                 |
| 宿主 UI（iab）的锚定方式                                                         | ✅ AX 树优先（`tab.ax.*`），iab 上反而 **skip** AX | ✅ `read` 走宿主 DOM 编号清单 + 行级 diff                                                                                                      | **两边正好相反**（`browser-contract.md` §9.4 已记）：我们 iab 强在"读"，弱在定位/等待原语                                                                    |
| iab 的定位/等待/历史                                                             | ✅ `playwright` 是 iab 上唯一可用的交互面之一      | ❌ 宿主明确不服务 `locator_*` / `wait_*` / `history` / `logs` / `dom_snapshot`                                                                 | **平台边界**（我们的宿主是 Electron webview，不是随包引擎），但**必须写进 `capability_get` 让边界可预知**                                                    |
| `cdp` capability                                                                 | ✅ 全量（`send`/`readEvents`）                     | 🟡 受管档全量；iab 只有 `evaluate`                                                                                                             | 平台边界 + 需如实声明                                                                                                                                        |
| `webmcp` / `pageAssets` / `content` / `viewport` / `visibility` / `botDetection` | ✅                                                 | 🟡 受管档✅、iab❌                                                                                                                             | 同上                                                                                                                                                         |
| `management`（书签/标签组/审计轨迹）                                             | ✅（经扩展）                                       | 🟡 受管实例上有（随包 MV3 扩展，10-12 复验**确实可用**）；**iab 不暴露**；但整条链的前提是那份**随包运行时**，而仓库当前没有它的生产方（§6.5） | 见 §6.5：能力没问题，**发布形态有问题**（真实安装里这一档不可用）                                                                                            |
| 用户浏览器接管                                                                   | ✅ extension 家族 + `plugin://…?mention=tab-v1`    | ✅ `browsers_connect` + `user_*` + `tab_mention_resolve`（`extension` 档真实可用）                                                             | 已对齐                                                                                                                                                       |
| `mcpapps` 后端                                                                   | ✅                                                 | ❌                                                                                                                                             | 平台边界（我们没有 MCP App 标签页宿主）                                                                                                                      |
| 云浏览器                                                                         | ✅ 一等形态                                        | ⛔                                                                                                                                             | 产品决策                                                                                                                                                     |
| 行为文档投递                                                                     | ✅ 28 篇（13 included / 5 lookup / 10 model）      | 🟡 → **24 篇**（12 included / 4 lookup / 8 model；10-12 补了 `tab-claiming-chrome` 与 `tab-mentions-iab`，见 §0.1）                            | 仍缺上游那 4 篇"面向外部浏览器排障"的（`bootstrap-` / `chrome-` / `chrome-file-upload-troubleshooting`、`mcp-apps`）——本侧没有那两条链路，属平台差异而非缺口 |
| 截图格式                                                                         | JPEG（统一）                                       | ✅ **10-12 已统一**：宿主（iab）落盘前把 PNG 转成 JPEG（`browserScreenshotJPEG`），与受管档同质量档；已是 JPEG 的不二次编码                    | 见 §6.2（原缺口：不一致会误导模型按单一预期解析，`browser-contract.md` §10.3 第 3 条）                                                                       |

### 4.2 宿主 UI 面（用户看得见的那扇浏览器）

| 能力                                                                       | Codex app                                                                      | 本仓库（`BrowserPage.tsx`，实测源码）                                                                                                                                                                                                                                                                  | 缺什么                                                                  |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 地址栏 / 前进后退 / 停止重载                                               | ✅                                                                             | ✅                                                                                                                                                                                                                                                                                                     | —                                                                       |
| 地址建议 + 搜索词                                                          | ✅ `addressSuggestions` / `search`                                             | 🟡 **10-12 补了地址建议**：地址栏按本机历史补全（命中顺序=地址前缀 → 地址里 → 标题前缀 → 标题里，同级按最近访问；上/下键、回车、Esc 与鼠标都能选；**用户敲字之前不占位置**）。**搜索回退仍缺**——"不是网址就搜索"要先决定"用哪个搜索引擎"（上游用的是它自己的默认引擎），那是一个产品决定               | 见 §0.1（搜索回退记在 §0 第三类）                                       |
| 标签条操作                                                                 | ✅ 复制 URL / 复制副本 / 右侧新标签 / 重命名 / 外部打开                        | 🟡 **10-12 补了 `复制网址` 与 `在外部浏览器中打开`**（只在页面上真有 http(s) 地址时出现）；已有的"复制标签页 / 重新加载 / 关闭 / 关左右其他"不变。**不打算做"重命名"**：浏览器页签的标题归页面所有（`page-title-updated` 同步），给一个会被页面改回去的名字只会误导                                    | 见 §0.1                                                                 |
| 标签媒体状态 + 全局媒体指示 + 静音                                         | ✅ 14 种组合 + 跨会话的 `sidebar.browserMedia.*` + `tabAudioMuteContextMenu.*` | ✅ **10-12 补了三样**：每页签标记（正在播放声音 / 已静音）、静音/取消静音（工具条按钮 + 页签右键菜单）、**跨面板的全局声音指示**（工具条入口 + 浮层，列出别处还在出声/已静音的页面并可一键跳过去）。判断与文案都在 `browser-audio.ts`。**摄像头/麦克风占用不做**（Electron 的 webview 读不到，不假装） | 见 §0.1                                                                 |
| 缩放 / 页内查找                                                            | ✅                                                                             | ✅（缩放还带 banner 语义）                                                                                                                                                                                                                                                                             | —                                                                       |
| 设备工具栏                                                                 | （上游未见独立设备工具）                                                       | ✅ 设备预设 / 视口宽高 / 旋转 / 拖拽调尺寸                                                                                                                                                                                                                                                             | **本侧强项**                                                            |
| 右键菜单                                                                   | ✅ 复制链接 / 新标签打开 / 外部打开 / **Inspect**                              | ✅ **10-12 补齐**：打开链接 / 新标签 / 外部打开 / 复制链接 / 撤销剪切复制粘贴全选 / 复制所选 / 加入输入框 / 前后退重载 / 标注，**并在开发者模式打开时给出「检查元素」**                                                                                                                                | 见下面那条 DevTools 行                                                  |
| 标注 / 截图评论（`Comment with Codex`）                                    | ✅ 叠加层 + 回写对话                                                           | ✅ 标注模式（Ctrl+.）+ 评论 + 截图进输入框附件 + 选区追加正文                                                                                                                                                                                                                                          | 已对齐（形态不同：我们回写输入框而不是独立卡片）                        |
| 浮动 composer（页面上直接问）                                              | ✅ `thread.browser.options.*`                                                  | ✅ **10-12 已补**：工具条上一个「问这一页」入口（**不是在页面上常驻的浮层**，避免遮挡内容），点开后在页面底部出现一条输入条（与查找条同一套出现方式），回车即发。能直发就直发，发不出去（没选会话 / 正在发）就落回主输入框并提示——不静默失败                                                           | 见 §0.1                                                                 |
| 错误页分型                                                                 | ✅ 7 类（DNS/连接/证书/超时/代理/防火墙/离线），各带 header+body+建议动作      | ✅ **10-12 已补**：`browser-error.ts` 按 Chromium net 错误码分型（DNS / 离线 / 超时 / 连接 / 证书族 / 代理 / 防火墙 + 崩溃 / 地址无效），每类给 title + detail + advice，并保留错误码与原始描述作排障行；认不出的码回落通用建议**不猜**                                                                | 见 §0.1                                                                 |
| DevTools / Inspect                                                         | ✅ 右键 Inspect + 全量 CDP 设置                                                | ✅ **10-12 已补**：设置 → 浏览器 → 常规 里打开「开发者模式」之后，右键菜单多一条「检查元素」（`webview.inspectElement(x, y)`）。默认关；生产构建里那三条"一律 closeDevTools"的兜底只对**内置浏览器那一扇 webview** 开例外（见 §2.3 的同一行）                                                          | 见 §0.1                                                                 |
| 书签 / 标签组                                                              | ✅                                                                             | ❌（受管实例的数据面有）                                                                                                                                                                                                                                                                               | 产品决策：iab 用 Electron 的 bookmark 概念要自建存储                    |
| 独立窗口 / 任务迁移收标签 / 账号切换 / 云浏览器 preview-live view-timeline | ✅                                                                             | ⛔                                                                                                                                                                                                                                                                                                     | 产品决策（与本地优先架构张力最大）                                      |
| 浏览器侧栏可视化 CSS 编辑器（`browserSidebarDesignEditor.*` 60+ 条）       | ✅ 完整一套                                                                    | ❌                                                                                                                                                                                                                                                                                                     | 产品决策；但**这一项恰好是"让 Agent 改前端"最直接的交互**，值得单列议题 |
| 下载面板                                                                   | ✅ 暂停/续传/取消/打开/移除/搜索                                               | 🟡 **10-12 补了暂停 / 继续 / 取消**（列表、进度、在文件夹中显示、清除原本就有）；仍**没有**"移除单条"与"搜索"                                                                                                                                                                                          | 见 §2.3（那两项没做，价值低）                                           |
| 新建标签页/起始页                                                          | ✅ `emptyBrowserTab` / "New tab"                                               | ✅（"开始浏览"空态）                                                                                                                                                                                                                                                                                   | —                                                                       |

### 4.3 后端分档服务集（本侧 iab 与上游 iab 的边界差异）

本侧 iab 宿主**真正服务**的动作（`BrowserPage.tsx:executeBrowserTool` + `browser_host_actions.go`）：

```text
导航: open / navigate / back / forward / reload
读:   read(snapshot) / screenshot / evaluate / title / url
写:   click / hover / type / key / scroll / set_value
标签: tabs / new_tab / get_tab / selected_tab / close / mark_deliverable / mark_handoff
窗口级: turnEnded（回合回收，不暴露给模型）
```

**未服务**（宿主逐动作拒绝）：`locator_*` 全族、`element_info`、`element_screenshot`、`dom_snapshot`、
`wait_for_*`、`history`、`logs`、`paste`、`select_text`、`perform_secondary_action`、`drag`、
`cdp_call`、`viewport_*`、`visibility_*`、`webmcp_*`、`page_assets_*`、`content_export*`、
`auth_request`、`name_session`、`tab_mention_resolve`、`user_*`、`bot_detection_report`。

> 这与上游 iab（支持 playwright 定位、不支持 AX）**正好互补**。差异本身不是缺陷，
> 缺陷是**模型事前不知道**——见 §6.3。

---

## 5. 与其他模块的交互

### 5.1 已接上并工作（本仓库）

| 交互对象              | 机制                                                                                                                                            | 落点                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 右侧面板（inspector） | 浏览器是面板里的一类页签；另有 `browserActions`（动作记录）与 `browserSettings` 两页                                                            | `App.tsx` inspector 页签体系                                  |
| 会话/上下文           | `buildBrowserAmbientContext` 把"当前开了几个标签页、在哪个 URL"作为 **ambient UI state** 注入引言（明确标注"不是用户请求"）                     | `browser-workspace.ts`                                        |
| 输入框（正向）        | 标注评论、选区引用（`Browser selection from <url>`）追加进正文；截图作为附件进输入框                                                            | `App.tsx:handleBrowserAnnotationText/handleBrowserScreenshot` |
| 审计与监控            | 节点 → Master 归档 → 「浏览器动作」侧边页签（5s 轮询、固定高度盒）                                                                              | `BrowserActionsPanel.tsx`                                     |
| 画板类模块            | drawio / GeoGebra / JSCAD 与浏览器**共用**同一条 `BrowserToolRequest` 通道（`drawioApply`/`geometryRead`/`jscadWrite`…），由 App 分流到各自页面 | `App.tsx` 分流                                                |
| 电脑操控              | 浏览器面总开关、后端清单、逐档开关与 `computer-use` 策略同一份                                                                                  | `SettingsPage.tsx` §ComputerUseSettings                       |
| MCP                   | 内置 `cua_repl` 的装配事实在 MCP 页只读展示，闸门指回电脑操控策略                                                                               | `SettingsPage.tsx` §MCP                                       |
| 扩展分发              | 宿主注册（设置页）+ CRX 签名/托管更新清单（CLI + 企业策略）                                                                                     | `browser_host`、`browser-distribution.ts`                     |

### 5.2 缺口

| 缺口                                                                  | 上游怎么做的                                                                                                             | 影响                                                                                                                                                                                                                                                                                                                               | 归属                         |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| ~~输入框侧没有"浏览器标签页 mention"的产出口~~                        | composer 的 `@` 可插入 `plugin://…?mention=tab-v1&browserId=…&tabId=…`，上游 `docs/api.json` 的 fail-closed 语义由此驱动 | ✅ **10-12 已补**：`@` 菜单多一节「浏览器标签页」，列出内置浏览器当前开着的页，选中即把那条引用写进正文（并挂一枚可移除的 chip）；节点侧同时接受宿主自己签名的 `browserId`（内置浏览器的 target id），因为桌面应用拿不到节点私有的会话标识                                                                                         | 见 §0.1                      |
| 浏览器没有浮动 composer                                               | `thread.browser.options.{show,hide}FloatingComposer`                                                                     | ✅ 10-12 已补（§4.2）。形态与上游不同：不常驻浮层、也不开侧边对话，而是工具条入口 + 底部输入条，问题直接进当前会话（**它靠会话里已有的内置浏览器环境块带上"哪一页"**，所以正文只写问题本身）                                                                                                                                       | —                            |
| ~~没有"跨窗口/跨任务把浏览器标签页收回来"~~                           | `browser.threadHandoff.restoreDetachedTabs`                                                                              | ✅ **10-12 已按"与上游对齐描述"处理**：本节点没有 detach/restore 这一步（桌面应用是单窗口，Agent 开的页签归属发起它的那个会话），这条**写进了 `browserdocs/tab-cleanup-iab.md`**——"切任务不会搬走或关掉那些页，回来还在；不要叫用户把手里的标签页交回，也不要以为 detach 过的页需要重新接上"。形态差异本身仍属产品决策（独立窗口） | 文档已补（见 §0.1 的文档行） |
| ~~没有全局媒体指示~~（跨会话"哪个浏览器页在放声音"）                  | `sidebar.browserMedia.globalMenuTitle`                                                                                   | ✅ **10-12 已补**：窗口工具条上的「浏览器声音」入口 + 浮层，列出别处还在出声/已静音的页面，点一行先切到它所属的任务再打开（与告警深链同一套做法）                                                                                                                                                                                  | —                            |
| 浏览器动作没有进对话时间线                                            | 上游动作/审批在对话里有对应卡片                                                                                          | 我们只有侧边面板那一份；对话里只能看到模型自述                                                                                                                                                                                                                                                                                     | 产品决策                     |
| ~~`documentation_get` 与 `capability_get("documentation")` 互相矛盾~~ | 上游 `api.json` 单一事实源                                                                                               | ✅ **已修**（§6.3）：iab 的 `documentation` 单列一档报 `available:true` + 文档名，不再自相矛盾；模型不会因此不去读那 24 篇                                                                                                                                                                                                         | 后端（见 §6.3）              |
| ~~站点工具（WebMCP）没有设置位~~                                      | `webMcp.label = Enable site tools`                                                                                       | ✅ **10-12 已补**：设置页有了这颗开关，节点按它收口（关掉时列举与调用都被拒，且 `capability_get` 动手前就报不可用）                                                                                                                                                                                                                | 见 §0.1                      |

---

## 6. 待修缺陷与需复验项（逐条带代码位置）

### 6.1 P0 · iab 截图落到 NTFS 备用数据流（10-04 发现，**✅ 10-12 已修**，见 §0.1）

`syntropy_node/control/browser_host_actions.go` 的 `writeHostScreenshot`（`:782`，落盘那行在 `:792`）：
文件名直接用 `tabID`，而 iab 的标签页 id 形如
`browser:<uuid>`（`App.tsx:4868` 生成）。Windows 上 `browser:74a0…-<nano>.png` 会被解释为
`browser` 的备用数据流 → 目录里只有 0 字节文件，按返回路径读图的消费者拿到空文件。

**修法**：落盘前对 id 做转义（`:` → `_`，或去掉 `browser:` 前缀并退化为 `iab`），
并在 `browserdocs/screenshots.md` 写一句。同族的 `writeScreenshot`（受管档 id 形如 `tab-<hex>`）不受影响。

### 6.2 P1 · 两档截图格式不一致（**✅ 10-12 已修**：宿主 PNG 落盘前统一转 JPEG）

`writeHostScreenshot` 落 PNG（宿主 `capturePage()` 给的就是 PNG），`writeScreenshot` 落 JPEG。
上游 `screenshots.md` 只讲 JPEG，模型会按单一预期解析。**修法**：宿主侧 `capturePage()` 后转 JPEG
（或接受 PNG 但把差异写进文档与 `capability_get`）。

### 6.3 P1 · `capability_get` 在 iab 上仍是"事后发现边界"（**✅ 10-12 已修**：`served_actions` + `documentation` 分档）

`browser_capabilities.go:browserHostCapabilitySnapshot` 只详细报 `cdp` / `management` / `user` 三档，
其余落 `default` 一律 `available:false` + "webview does not expose this capability"。两个具体问题：

1. **`documentation` 被错误地报成 `available:false`**，但 `documentation_get` 实际可用并返回 22 篇——
   同一份代码里两处说法不一致（10-04 已记，未修）。
2. **宿主真正服务的那 19 个动作没有出现在任何快照里**。模型要么读
   `browserdocs/`（而它又被第 1 条劝退），要么靠"调用→被拒"摸索。

**修法**：`documentation` 走独立分支报 `available:true`；再补一个字段（例如
`served: ["read","click",…,"tabs"]` 与 `unserved: [...]`），数据源就是 `executeHostAction` 的
`case` 集合——与实现同源，不会漂移。

### 6.4 P1 · 两套"站点"概念同名不同义，用户会混（**两半都已修**）

|        | Master 站点矩阵（Agent 行为）         | 宿主 `BrowserPermissionStore`（网页 Web API）                                                                                                                                                           |
| ------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 位置   | 设置 → 浏览器 → "站点权限"            | 设置 → 浏览器 → 内置浏览器 → "网站设置"                                                                                                                                                                 |
| 管什么 | browse / download / upload / cdp 四轴 | `media`（camera/mic）/ geolocation / notifications / clipboard-read / clipboard-sanitized-write / midi / pointerLock / fullscreen / idle-detection / storage-access / top-level-storage-access（11 类） |
| 取值   | 默认 / 允许 / 每次询问 / 禁止         | allow / block                                                                                                                                                                                           |
| 存储   | Master `SystemSettings.browser_use`   | 本机 JSON（`browser-permission-store.ts`）                                                                                                                                                              |

上游也是两套，但**界面分得很清**：矩阵叫 `sitePermissions.matrix`，camera/mic 那套挂在
`siteSettings.*` 且文案点名 `in-app browser`（`webviewLabel`）。

**10-12 已做（命名这一半）**：宿主那一节从「网站设置」改成 **「网页权限」**，并在两处各写一句
对照——网页权限那节说清"这是这个网页自己能用的浏览器能力（摄像头、麦克风、位置、通知、剪贴板…），
Agent 在站点上能做什么是另一处"，Agent 站点矩阵那节反过来指向网页权限那一节。
`tests/component/browser-settings-page.component.test.tsx` 与 `settings-page.component.test.tsx`
钉住新标题与两句对照。

**10-12 也做了（逐类这一半）**：`BrowserPermissionStore` 升到 v2（旧文件是裸数组，开读时按
"整站一档、没有逐类表态"迁移，用户设过的放行不会丢）。判定变成"逐类表态优先于整站那一档"，
而**申请与放行是两件事**：

- 权限请求钩子在页面申请时记下"这个站点问过什么"（`record`，**不改判定**——否则页面一申请就
  等于自己拿到了权限）；
- 用户逐类表态写 `overrides`，选「跟随整站」时删掉那一类，回到整站档；
- 认不出来的能力名**既不写进去、也永不放行**（宁严勿宽），但界面上照原样显示，方便新版本
  浏览器多出一类能力时看得见。

界面按"整站一档 + 申请过的那几类"渲染，不预先摆十几栏空表。契约（`browser.permission.write`
带 `permission`、`BrowserSiteRule.permissions`）与共享常量 `BROWSER_PERMISSION_NAMES` 同步，
用例见 `tests/security/browser-permission-store.security.test.ts`（4 条：逐类优先/清回跟随/
未知能力拒绝/申请不等于放行/旧文件迁移）与 `browser-permission-labels.component.test.ts`。

### 6.5 已复验 · 随包扩展本身是好的；缺的是**随包运行时的生产方**（结论已改写）

**复验结论（2026-10-12，决定性证据）**：把 `SYNTROPY_BROWSER_RUNTIME` 指向一份 Chromium for
Testing，`TestBrowserExtensionLiveRoundTrip` **通过**（`extension_bridge:true`，四个 management
命名空间齐，bookmarks / tabGroups / getAuditTrail 都答），受管实例的扩展桥**当前是工作的**。
`browser-contract.md` §10.2 那条"不应答"在当前代码上不再成立（10-04 之后 `ababbb52` 的随包
扩展改造与 10-11 的隧道/身份提交已经覆盖了它）。

**但复验同时暴露出一个更根本的缺口（本次新发现，P1 · 需要产品决策）**：

```powershell
# 产物目录里没有随包浏览器运行时
Get-ChildItem desktop_app/apps/desktop/resources/node/artifacts |
  Where-Object { $_.Name -like "browser-runtime*" }      # → 空
# 构建脚本里也没有任何浏览器产物的步骤
Select-String -Path desktop_app/tools/build.mjs -Pattern "browser-runtime|chromium"   # → 空
```

而消费方是齐全的：Master `GetBrowserRuntimeArtifact` 找 `browser-runtime-<os>-<arch>.tar.gz`
（`syntropy_master/core/context.go:170`，在 `nodeArtifacts` 目录里找）、`common/mdeploy` 把它
解到 `<staging>/browser_runtime/`、`nbot install` 把 installer 同级的 `browser_runtime/` 整体
复制进安装目录、节点从"可执行文件同级的 `browser_runtime/`"解析
（`syntropy_node/control/browser_runtime.go`）。**链条只缺生产方**——这与
`docs/system-upgrade-review-2026-10-09.md` 记的"`browser-runtime` 有消费方无生产方"是同一条。

**影响（为什么这不是小事）**：真实安装里节点拿不到随包运行时 → 受管实例回退到目标机的
Chrome/Edge → Chrome 稳定版从 154 起静默忽略命令行 `--load-extension` → **bookmarks /
tabGroups / audit trail 这一档在装出来的应用里永远不可用**，而 `computer-use.md` §8.2 与本表
其他地方都写着"已落地"。用户看到的是"能力在，但永远报不可用"。

**两条出路（需要你选一条）**：

1. **补生产方**（推荐，与仓库既有先例一致）：照 `fetch-codex.mjs` / `fetch-node-runtime.mjs`
   的样子加一份 `tools/fetch-browser-runtime.mjs` + `tools/browser-runtime-release.json`
   （钉 CfT 版本与 sha256，下载到 `.cache/`、校验、解包），在 `resources` 构建里落到
   `resources/bin/<platform>-<arch>/browser_runtime/` 与
   `resources/node/artifacts/browser-runtime-<os>-<arch>.tar.gz`，并把版本写进
   `release-manifest.json` 与组件清单。**代价**：安装包与产物每平台增加约 150–200 MB，
   且 macOS 侧要走签名/公证；跨平台的四份归档需要各自的 sha256 钉值。
2. **明确不做**：把 `browser-runtime` 从组件/部署清单里摘掉，并在 `browserdocs/` 与设置页写清
   "本节点不提供随包浏览器：bookmarks / 标签组 / 审计轨迹不可用"，让能力清单与实现一致。

在你拍板之前，我先把这条缺口做成**可诊断的**（见 §0.1：模型点 `chromium` 时给出"这一份安装
没带随包运行时、去哪儿补"的说明；本机浏览器拉起的实例上扩展桥答不上来时，原因里点名
`--load-extension` 与随包运行时，而不是只回一句探测超时）。

### 6.6 已修 · iab `open` 不再可能回导航**前**状态

原来的实现是 `await webview.loadURL(target)` 之后立刻读 `webview.getURL()`——它在赌 `loadURL`
的 promise "一定在导航提交之后才 resolve"，而 Electron 并没有承诺这一点（10-04 的实机记录里
`open` 就把上一页的地址当结果报了出去）。现在不赌了：`waitForBrowserSettle` 等到 `did-navigate`
（地址此刻已提交）或 `did-stop-loading`、或者 8 秒到点，再读地址；回报文案由纯函数
`browserNavigationStateText` 生成——请求的地址 + 落定的地址，一样时只说一遍，重定向因此看得见。
**在两种 resolve 语义下都准确**，所以这条不再需要"先复验再决定"。

`desktop_app/tests/component/browser-workspace.component.test.ts` 钉住三种情况（落定一致只说一遍、
重定向两个都报、读不到落定地址时不编一个）。

### 6.7 **已修（10-12）** · 设置无并发保护：`revision` + Master 锁里的比对 + 409

**原诊断**：Master 侧 `browser_use` 是"后写覆盖先写"，无 `revision`，两个桌面端同时改站点矩阵会
静默丢改动。原先被 §6.9 的 proto 工具链挡着。

**10-12 已修，实现比原诊断多学了一件事**：真正需要保护的不只是"两个客户端同时写"，还有
**路由里那段"读-改-写"窗口**（`PUT /api/computer-use/browser` 先读当前策略、在内存里合并、再整体
写回）。所以比对必须放在 **Master 自己的锁里**，放在路由里比对只是把窗口挪了个位置：

```text
proto: BrowserUsePolicy.revision(15)              # 写入代数，Master 每次写入自增
       SystemSettingsPatch.expected_browser_revision(35)  # 可选令牌（optional，缺席＝旧行为）
Master: UpdateSystemSettings 在 h.mu.Lock() 里比对 → 不一致回 Aborted → 写成功则 revision+1
路由:   把令牌转给 Master；Aborted 由 writeGRPC 映射成 409；**回落盘之后的那一份**（含新代数）
桌面:   记住"我读到的那一代"，每次写入带上；冲突就自动刷新并提示"已被另一处改动，请重做刚才那一步"
```

**这条路踩到过一个真 bug，而且是真机 e2e 抓出来的**：我只把"主策略"那条写入改成回**落盘之后**
的策略，忘了站点增/删那两条路由——它们回的是本地那份（旧代数），于是客户端拿着旧令牌，
**下一次写入必然 409**。表现是 e2e 里"点了开关不生效 / 加完站点找不到移除按钮"这种飘忽的失败
（单测发现不了：路由测试的假 Master 不推进代数）。修法是把 `mutateBrowserSites` 也改成回落盘
之后的那一份。这条记在这里，因为它是"乐观并发"这类改动的典型坑：**读回值必须和写入值同源**。

---

### 6.8 已修（含根因）· `browsers_connect{launch:true}` 在 Chromium for Testing 155 上列不出标签页

**根因（2026-10-12 实测；四条假设被逐一测掉后剩下的解释）**：

在 CfT 155 上，**命令行起始地址那一次导航没有真的提交**：目标在 `Target.getTargets` 里一直报
`url="…/page.html"`（不是 pending 又被清掉——15 秒内都稳），但 attach 进去 `location.href` 是
`about:blank`、正文为空。于是用户看到一个空白窗口，Agent 也读不到它。至于"清单里的 url 会消失"，
那是**我们自己的动作**造成的次要现象：只要 attach 过这张目标，它之后在清单里就报 `url/title` 为空
——而 `userOpenTabs` 原本逐条回填标题（要 attach），所以第一次列清单就把 URL 弄没了，那条用例的
轮询从此再也等不到它。

**被证伪的四个假设**（都实测过，记在这里免得下一个人重跑）：

1. "是我们的 `detach` 让文档回退"——把会话改成**复用、不解开**后现象不变；
2. "是目标没被激活"——attach 前先 `Target.activateTarget` 后现象不变；
3. "是本机负载/偶发"——同一台机器上本机 Chrome 154 走同一条路径**完全正常**（那条 live 用例
   默认配置下通过），只有 CfT 155 如此；
4. "是 headless、或是随包扩展干扰"——把窗口改成**可见**后一样停在 `about:blank`；而用**同一套启动
   参数**（含 `--load-extension`）另起一个进程、改用 `Target.createTarget` 开页则**完全正常**。
   → 问题只出在"命令行起始地址"这一条路上。

**已修（真机验过：154 全绿；155 上 URL 不再消失）**：

- **不再为了标题去 attach**（那条路正是弄空字段的元凶），改成**会话级目标身份缓存**
  `applyCachedTargetInfo`：每次拿到清单先把非空字段记下来，之后遇到空字段就用缓存补——清单不会再
  丢地址。
- `readTargetText` 会**有界地等文档可用**、渲染文本为空时退回 `textContent`，并且**回报地址不一致**：
  "清单说 A、进去是 B"从此是一句可行动的报错，而不是一个看起来正常的空正文。
- 那条 live 用例的断言按浏览器版本放宽（轮询只按地址匹配；标题"要么对、要么空"），并把理由写在旁边。

**修法（已实现并验过两个运行时）**：用户窗口拉起后**显式导航一次**那段起始地址
（`navigateUserWindowStartURL`）。为什么不是"先检查再修"：判断"页有没有提交"本身就得 attach 进去
读文档，而 attach 正是会把目标身份弄空的那个动作——检查的代价就是要修的东西。直接导航一次没有这个
副作用：实测同一个 run 里 500ms 后就读到真实正文（`href=…/page.html`、`text="user-tab-body"`）。
代价只是 154 上多一次同址重载，而那是一个刚拉起来、没有页内状态需要保留的窗口。

**验证**：`TestBrowserExternalBrowserLiveRoundTrip`（用户窗口三层闭环）在 **CfT 155 上通过**、
在**本机 Chrome 154 上同样通过**；`control` 包全量通过。

> **对 §6.5 的影响**：这里原来那条"要随包就别随包 155"的约束**解除**——155 上这条链路现在是通的。
> 反过来，"154 拒绝命令行 `--load-extension`"仍然成立，那才是需要 CfT 这类构建的理由。

**顺带得到的一条好消息**：CfT 155 仍然尊重命令行 `--load-extension`（扩展档 live 用例在 155 上
`extension_bridge:true`），所以 §6.5 里"只有 Chromium for Testing 这类构建还接受该开关"这条前提
在 155 上依然成立——钉版本时 `155.0.8059.39` 是一个已在本机验过的候选。

### 6.9 **已解（10-12 实测）** · proto 工具链其实就在本机，且能逐字节复现仓库产物

本轮准备做设置面最后两个开关（WebMCP / 扩展会话 full CDP）时发现：**这台机器上没有 `protoc`**。

```powershell
Get-Command protoc                        # → 找不到
Get-Command protoc-gen-go                 # → C:\Users\huoga\go\bin\protoc-gen-go.exe  v1.36.12
Select-String api/proto/model/settings/system_settings.pb.go -Pattern "protoc"
#   //  protoc-gen-go v1.36.11
#   //  protoc        v7.36.2      ← 仓库里的产物是这两个版本生成的
```

两个后果：

1. 任何 `.proto` 改动都无法生成对应代码，所以**所有"加字段"的工作都停在这里**：设置面最后两处
   开关（WebMCP 总开关、扩展会话 full CDP 分档）、`developer_mode` / `enforce_csp` 的去留、
   设置 `revision` 并发保护，以及下面这条——
2. **输入框侧 mention 产出口的最后一环也在这里**：它需要渲染层知道节点会话 id，而
   `ComputerUseBrowserBackend`（`control.proto:69`）没有 metadata 字段，`codex_session_id`
   在 `desktop_app` / `web_backend` / `api/route` 里**一次都不出现**（实测 grep 为 0）。
   所以只能靠"改 proto 加一个字段"或"放宽节点的 browserId 校验"来解决，两条都需要决策。

**转机（10-12 实测，决定性证据）**：这台机器上**已经有一份钉好版本的工具链**，就在
`codex_app_rev/.work/` 下（逆向工作留下的）：

```powershell
codex_app_rev/.work/protoc/bin/protoc.exe --version              # libprotoc 36.2
codex_app_rev/.work/gobin/protoc-gen-go.exe --version            # v1.36.11   ← 与仓库产物同版本
codex_app_rev/.work/gobin/protoc-gen-go-grpc.exe --version       # 1.6.2
codex_app_rev/.work/gobin/protoc-gen-grpc-gateway.exe --version  # v2.31.0
```

**预检：把 66 个 `.proto` 全部重生成到临时目录，再与仓库里已提交的产物逐字节比对**：

```powershell
$env:PATH = "$PWD\codex_app_rev\.work\gobin;$env:PATH"
& codex_app_rev\.work\protoc\bin\protoc.exe --proto_path=. --go_out=$scratch --go_opt=module=api @files
# → 66 个文件全部生成成功（exit 0）；与仓库产物逐字节比较：
#     3 个完全相同
#    59 个**只差 `// protoc` 那一行**（这份工具链写 `v7.36.2`，仓库里那批旧产物写的是 `v7.35.0`）
#     4 个只差 `protoc-gen-go` 版本行（v1.36.11 vs 仓库的 v1.36.12，代码体相同）
```

关键点：**`api/proto/model/settings/system_settings.pb.go` 的头部本来就是 `protoc-gen-go v1.36.11` +
`protoc v7.36.2`——正是这份工具链写出来的，重生成逐字节相同。** 所以用这份工具链改
`system_settings.proto`，**diff 只会含新字段，连版本行都不会动**。

**这把整条阻塞线解掉了**：设置面最后两个开关（站点工具 / WebMCP、扩展会话的 full CDP 分档）、
mention 产出口的会话 id 字段、`developer_mode` / `enforce_csp` 的去留、设置 `revision` 并发保护
——都可以做了。用法：**只为改动的 `.proto` 文件重生成并核对 diff**；**不要**跑 `gen_grpc.ps1`，
它会把另外 60 多个无关产物的版本行一起改写（下面的实测记录）。

> 背景（为什么原先看起来"必须钉死"）：仓库里已提交的产物**本来就是异构的**——实测头部版本分布是
> 75 个 `protoc v7.35.0`、5 个 `v7.36.1`、4 个 `v7.36.2`、6 个 `(unknown)`；而 `gen_grpc.ps1`
> 里四个插件全部按 `@latest` 安装（第 214–217 行），protoc 也交给 winget/choco/scoop 装最新版
> ——**脚本本身从没有钉过版本**。"与产物完全一致"这条严格口径在仓库里从未被满足过，所以真正的
> 选择只有"只重生成改动的文件"与"全量重生成"两种，前者显然更小。

> 遗留（低优先，不阻塞）：`gen_grpc.ps1` 仍按 `@latest` 装工具链，换台机器跑它就会再引入一次版本
> 漂移。要收口就把这份 `.work/` 里的版本写成脚本里的钉值（或在 CI 镜像里固定）。

### 6.10 WebMCP 一项的再判断（先降级，随后已把总开关补上）

原本把"WebMCP 开关"列成缺口，这轮看清了它的一半其实已经覆盖：`webmcp_call`（真正会传数据的那个）
落在**站点权限矩阵的 browse 轴**上，用户已经能按站点 allow / ask / block；`webmcp_tools`（只列举）
不传数据。所以缺的只是上游那个**总开关**的便利性，不是一条不设防的通道。

**10-12 后续：这颗总开关已经补上了**（见 §0.1）。取值用三态字符串而不是 bool，正是为了不改动
"默认开"的语义：空 = 未表态（按开启处理，老设置升级不受影响）、`enabled` / `disabled` 显式表态。
关掉时 `webmcp_tools` 与 `webmcp_call` **都被拒**（连列举都拒——只关调用会让模型先拿到清单再撞墙），
`capability_get("webmcp")` 在动手之前就报 `available:false`，站点规则里写 `allow` 也打不开它。

### 6.11 已修 · 扩展档上"等不到的事件"从超时改成立刻说清

扩展档（用户自己的 Chrome）的 CDP 是**仿真隧道**：`chrome.debugger` 只有标签页级，浏览器级命令
被本地应答或如实拒绝（见 `browser_tunnel_cdp.go`），而浏览器级**事件**根本不会转发。受影响的
是 `wait_for_event`：

- `download` 等的是 `Browser.downloadProgress`（完成状态只从这里来），
- `popup` 等的是 `Target.targetCreated`。

两者以前会一路等到调用方给的超时（默认 10s，可到 30s），然后回一句含糊的 `timed out`——模型
只能猜。现在 `browserProcess.tunnelEmulated`（只有扩展档置位）让这两个事件**当场**返回根因与
出路："这个节点驱动的是用户自己的浏览器，下载进度到不了我们这里；文件仍会在那个浏览器里下载，
需要把字节拿回来时用受管实例，或在页面里用 `cua_download_media`"。`dialog` / `filechooser` /
`console` 是标签页级事件，照旧可用——界限按事件名划，不按后端一刀切。

顺带把这块边界写进 `capability_get("cdp")` 的按档快照（动手前就能看见），并顺带确认了
`cua_download_media` / `dom_cua_download_media` / `locator_download_media` **不受影响**：它们是
在页面里 `fetch` 字节再落盘，跟浏览器的下载管道无关。

## 7. 建议排期（按投入/收益）

| 优先级 | 项                                                                                                                                                                          | 归属                                         | 备注                                                                                                                                                                                                                                                                                                      |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P0     | iab 截图文件名转义（§6.1）                                                                                                                                                  | 后端 Node                                    | ✅ 已修（§0.1）                                                                                                                                                                                                                                                                                           |
| P0     | `capability_get("documentation")` 说法收口 + 补"宿主服务集"（§6.3）                                                                                                         | 后端 Node                                    | ✅ 已修（§0.1）——24 篇文档现在真的是"可发现的"                                                                                                                                                                                                                                                            |
| P1     | 扩展档的最后一公里：输入框 `@` 插入浏览器标签页 mention（§5.2）                                                                                                             | 前端 + 后端 Node                             | ✅ **已补**（§0.1）：`@` 菜单新分节 + 引用链接写进正文；节点侧改为接受宿主签名的 `browserId`（不再需要把节点会话 id 送进渲染层，也就不必给 proto 加字段）                                                                                                                                                 |
| P1     | 设置面补齐：~~清除数据对话框~~、~~下载位置/询问~~、~~历史搜索与来源过滤（含 Agent 徽标）~~、~~站点工具（WebMCP）开关~~、~~扩展会话的全量 CDP 分档~~（✅ 全部已补，见 §0.1） | 前端 + 后端                                  | 设置面里"会改变行为"的开关已经补齐；剩下的是低价值前端细节（见 §0 第三类）                                                                                                                                                                                                                                |
| P1     | 错误页按 `errorCode` 分型（§4.2）                                                                                                                                           | 前端                                         | ✅ 已修（§0.1）                                                                                                                                                                                                                                                                                           |
| P1     | 标签媒体状态 + 静音 + 全局媒体指示（§4.2）                                                                                                                                  | 前端                                         | ✅ 全部已补（§0.1）：页签标记、静音/取消静音（工具条 + 页签菜单）、跨面板全局声音指示；**摄像头/麦克风占用不做**（Electron webview 读不到，不假装）                                                                                                                                                       |
| P2     | 两套"站点"命名与逐类权限（§6.4）                                                                                                                                            | 前端 + 主进程                                | ✅ 两半都已完成（§0.1）：命名/对照 + 逐类权限（含旧文件迁移与"申请≠放行"）                                                                                                                                                                                                                                |
| P2     | 设置 `revision` 并发保护（§6.7）                                                                                                                                            | 后端 Master + proto                          | ✅ 已修（§0.1）：比对在 Master 锁里，三个写入入口都带令牌；真机 6/6                                                                                                                                                                                                                                       |
| P2     | 补 `tab-claiming-*` / `tab-mentions-iab` 两篇文档；截图格式统一                                                                                                             | 后端 Node                                    | ✅ 已修（§0.1），含 in-app mention 解析到宿主标签页                                                                                                                                                                                                                                                       |
| P1     | **随包浏览器运行时的生产方**（§6.5，有消费方无生产方）                                                                                                                      | 构建流水线（`desktop_app/tools/`）+ 产品决策 | 需要你选"补生产方"还是"明确不做"；代价是安装包每平台 +150–200 MB                                                                                                                                                                                                                                          |
| P1     | `browsers_connect{launch:true}` 在 CfT 155 上列不出标签页（§6.8）                                                                                                           | 后端 Node                                    | ✅ **已修**：根因是"命令行起始地址那次导航没提交"，拉起后显式导航一次即可；两个运行时（CfT 155 / Chrome 154）都验过。原先对 §6.5 的"别随包 155"约束随之解除                                                                                                                                               |
| P2     | 受管实例扩展应答复验（§6.5）                                                                                                                                                | 后端 Node                                    | ✅ 已复验：桥可用；真正的缺口是上面那条生产方                                                                                                                                                                                                                                                             |
| P2     | `open` 状态复验（§6.6）                                                                                                                                                     | 前端（BrowserPage.tsx）                      | ✅ 已修：改成不依赖 `loadURL` 的 resolve 时机（§0.1）                                                                                                                                                                                                                                                     |
| P3     | "明确不做"清单写进设置页与 `browserdocs/`：密码/联系人、历史读取授权、DevTools、云浏览器、独立窗口                                                                          | 前端 + 后端文档                              | ✅ **全部已补**：密码与自动填充（设置页）、历史"Agent 读不到它"（设置页）、DevTools 与历史读取（`browserdocs/browser-troubleshooting.md`），以及 10-12 补的**云浏览器 / 独立窗口 / 书签管理器**（设置页「常规 → 本产品不提供」+ `browserdocs/` 同义一条）。这些形态本身仍属产品决策（要做就得改这段文案） |

---

## 8. 复现与证据索引

```powershell
# 本侧：设置面
rg -n "BrowserUseSettings|BrowserSettingsPage|sitePermissions" desktop_app/apps/desktop/src/renderer/SettingsPage.tsx
Get-Content desktop_app/apps/desktop/src/renderer/browser-use-client.ts -Raw      # 策略值域与路由
Get-Content syntropy_master/handle/settings/browser_tool.go -Raw                  # iab 中转（租约/长轮询/TTL）
Get-Content common/mcomputeruse/sites.go -Raw                                     # SiteGate 唯一判定

# 本侧：宿主服务集与缺陷点
rg -n "case \"" syntropy_node/control/browser_host_actions.go                      # iab 服务的动作
rg -n "executeBrowserTool" -A 60 desktop_app/apps/desktop/src/renderer/BrowserPage.tsx
rg -n "writeHostScreenshot" -A 18 syntropy_node/control/browser_host_actions.go     # §6.1
rg -n "browserHostCapabilitySnapshot" -A 45 syntropy_node/control/browser_capabilities.go  # §6.3

# 上游：设置模型与 UI 面
Get-Content codex_app_rev/browser-live-walkthrough.md | Select-Object -Skip 281 -First 140   # §13.2-§13.4
Get-Content codex_app_rev/settings-pages.md | Select-Object -Skip 317 -First 40              # §8.3 子路由
rg -n "browserSidebar|browserTab|browserMedia" codex_app_rev/side-panel.md
```

**本文未做的**：没有实机走查 Codex app 的浏览器 UI（策略拒绝，见 `browser-live-walkthrough.md` §12.1），
也没有在真环境里重跑 §6.5/§6.6 两项复验——这两项需要一次真实节点 + 真桌面应用的验收。
