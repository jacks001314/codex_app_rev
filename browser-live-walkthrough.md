# §12 Codex app 内置浏览器 · 实机走查记录（2026-10-04）

> 本轮定位：**补充实机证据**，不是替换 `browser.md` / `browser-contract.md`。
> 阅读顺序建议：`browser.md`（产品级对照）→ `browser-contract.md`（上游契约 + §9/§10 活体探测 + §11 缺陷）→ 本文（本轮 Computer Use 准入实测 + 本机真实运行态取证）。
> 采集机器：本机（Windows，`huoga`），Codex app `26.928.4866.0`，采集时刻 2026-10-04 17:24–17:27 (+08:00)。

---

## 12.0 本轮做了什么 / 没做什么

| 项                                                            | 状态                                          |
| ------------------------------------------------------------- | --------------------------------------------- |
| 用 Computer Use 亲自操作 Codex app（打开/切前台/读窗口/点击） | ❌ 被硬性策略拒绝，3 条 verbatim 拒绝见 §12.1 |
| 全屏截图                                                      | ✅ 允许（271,523 B，1920×1080 PNG）           |
| 读取 Codex app 安装目录 / 插件实现 / 设置文件                 | ✅ §12.2–§12.6                                |
| 读取本机 Chrome 托管 profile / 扩展宿主注册表                 | ✅ §12.4                                      |
| 现场复测 Syntropy 侧 iab                                      | ✅ §12.7                                      |
| 改代码 / 驱动 Codex app UI / 绕过安全策略                     | ❌ 未做（明确不做）                           |

结论一句话：**"我自己用 CU 走查 Codex app 界面"在本仓库当前策略下不是偏好问题，而是不可能**；替代通道已把 Codex app 的内置浏览器挖到本机能挖的极限（真实设置文件 + 真实后端实现 + 真实扩展链路）。

---

## 12.1 Computer Use 准入实测（本轮 3 次 verbatim）

| 动作                                                            | 目标      | 结果                                                                                                                                                      |
| --------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `window`（`window:264848, text:true, include_screenshot:true`） | `ChatGPT` | ❌ `refusing to automate "ChatGPT": chatgpt is on the non-negotiable automation denylist (the assistant's own interface); product policy blocks this app` |
| `activate_window`（`window:264848`）                            | `ChatGPT` | ❌ 同上，一字不差                                                                                                                                         |
| `screenshot`（无窗口目标，全屏）                                | —         | ✅ `ok:true, tier:"allow", reason:"allow.granted"`，1920×1080 / 271,523 B                                                                                 |

现场状态（`list_windows`）：`ChatGPT.exe` pid **14764**，windowId **264848**，进程名 `ChatGPT`，路径 `C:\Program Files\WindowsApps\OpenAI.Codex_26.928.4866.0_x64__2p2nqsd0c76g0\app\ChatGPT.exe`；同机还有 `Syntropy.exe` pid 25652 两窗（其中一窗全屏）。

### 12.1.1 限制的根因（代码级，不可配置）

- `common/mcomputeruse/safety.go` → `DeniedGroups[0]`：Key `assistant`，Processes `chatgpt, codex, syntropy, syntropy-app-server`。
- `common/mcomputeruse/decision.go` → `TierDeny` **不被用户确认、也不被 always-allow 覆盖**。
- 唯一环境开关 `SYNTROPY_COMPUTER_USE_OVERLAY` 不改变 denylist。上游同样表态：`computer-use.md` §7.1 要求不要自动化 ChatGPT 桌面 app 的 UI。

### 12.1.2 直接后果

不是"点不动"，而是**连只读都拿不到**：`window` 读 AX 树被拒 → 无法枚举 Codex app 的控件；`activate_window` 被拒 → 无法把 Codex 窗口切到前台，而它此刻被 Syntropy 全屏窗完全遮挡 → **连它的截图都拿不到**（全屏截图只截到 Syntropy）。见 `probe/desktop-2026-10-04-codex-occluded.png`。

### 12.1.3 可行的两条路（需要你决策，我不擅自做）

- **A（零改动）**：你手动把 Codex 窗口切到前台，并按 `codex_app_rev/.work/codex-app-walkthrough-checklist.md` 做若干次点击；我全程只读（全屏截图 + 分析 + 追问）。截图是允许通道，已验证。
- **B（改产品策略）**：把 `safety.go` 的 denylist 改成可配置（例如仅对 `codex`/`chatgpt` 放开只读 tier）。这是产品安全策略变更，必须你明确同意；我默认不做。

---

## 12.2 Codex app 运行时画像（本机实测）

| 项          | 实测值                                                                                                                                    |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 安装包      | `OpenAI.Codex_26.928.4866.0_x64__2p2nqsd0c76g0`                                                                                           |
| 进程 / 窗口 | `ChatGPT.exe` pid 14764 / windowId 264848                                                                                                 |
| 内核        | **Chromium 154**：`chrome.dll` 327 MB、`chrome_proxy.exe`、`chrome_pwa_launcher.exe`、`chrome_elf.dll`、`154.0.8037.57.manifest`          |
| 壳          | **Owl**：`resources\owl-app.ini` → `[Owl] UserDataDirectoryName=Codex / AppVersion=26.928.40906`                                          |
| 前端        | `app.asar` 548 MB（未解包）                                                                                                               |
| CLI / 宿主  | `codex.exe` 324 MB、`resources\codex` 287 MB、`codex-code-mode-host.exe`、`codex-command-runner.exe`、`codex-windows-sandbox-service.exe` |
| 用户数据    | `%LOCALAPPDATA%\Codex` **存在但当前为空（0 项）** → iab 的 Chromium 数据不在默认路径，或按需创建                                          |
| 其他数据    | `%LOCALAPPDATA%\OpenAI\Codex\{bin,runtimes}`（含 `runtimes\cua_node`）、`%LOCALAPPDATA%\OpenAI\extension\`                                |

> 说明：Codex app 是"Chromium 壳 + Codex 引擎"，它的浏览器能力和它的 Chromium 内核、以及和用户已装 Chrome 的关系，是这套设计的关键（§12.4）。

---

## 12.3 设置面（本机真实值）

### 12.3.1 内置浏览器自己的设置文件

`C:\Users\huoga\.codex\browser\config.toml`（96 B，最后写入 **2026/10/3 21:47:04**）：

```toml
full_cdp_access_enabled = true
approval_mode = "never_ask"
download_approval_mode = "never_ask"
```

- 三个键分别对应：**完整 CDP 访问**、**动作批准模式**、**下载批准模式**，均为宿主层可持久化设置。
- `full_cdp_access_enabled = true` 与 `docs/capabilities/tab/cdp.md`（raw CDP、按 origin 作用域、事件 cursor 分页）互相印证：**上游的浏览器后端默认开满 CDP**。
- `approval_mode="never_ask"` 属**宿主/浏览器壳层**的批准；`docs/confirmations.md` 的"分级确认"属**模型行为层**。两层是叠加关系，不要混为一谈（这一点是我们做设置面设计时要抄的分层）。

### 12.3.2 设置入口（用户可见）

- **Settings → Computer use** 是安装 ChatGPT 浏览器扩展的入口 —— `skills/control-in-app-browser/SKILL.md` 与 `chrome/.codex-plugin/plugin.json` 的 longDescription 均明确写 "direct them to **Settings → Computer use** to install it"。
- 插件市场：`plugins\openai-bundled\.agents\plugins\marketplace.json` 列 9 个插件（codex-app-tools / browser / unified-computer-use / chrome / computer-use / latex / code-review / deep-research / visualize），policy 一律 `installation: AVAILABLE`、`authentication: ON_INSTALL`。

### 12.3.3 与 Syntropy 的差距

Syntropy 侧目前**没有等价的、可持久化的浏览器设置面**：能力集是编译期固定的（`syntropy_node/control/browser_executor.go` 的 116 个 action case），探测只读（`capability_get`）。也就是"能不能用 CDP""要不要审批下载"这类开关，我们无处可设。

---

## 12.4 浏览器后端与跨模块集成（本机文件级证据）

### 12.4.1 上游有 5 个后端（family）

| family      | 语义                                                               | Syntropy 对应                         |
| ----------- | ------------------------------------------------------------------ | ------------------------------------- |
| `iab`       | 内置浏览器（默认优先；本地开发 / file:// / localhost 首选）        | ✅ `iab`（Syntropy app browser）      |
| `chrome`    | 装好的 Chrome，可带用户既有登录态                                  | ✅ `chrome`（CDP, managed）           |
| `edge`      | 同上，Edge                                                         | ✅ `edge`（CDP, managed，本机未运行） |
| `extension` | **通过 ChatGPT 浏览器扩展接管用户真实浏览器里已打开的 tab**        | ❌ **无对应后端**                     |
| `mcpapps`   | 侧栏 MCP App 面板（`docs/mcp-apps.md`，合成事件、无原生指针/键盘） | ❌ 无对应                             |

`BROWSER_USE_AVAILABLE_BACKENDS = "chrome,iab,mcpapps"`（见 `~/.codex/config.toml` 的 `[mcp_servers.node_repl.env]`）、`BROWSER_USE_TINYSKY_ENABLED=1`。

### 12.4.2 选择策略（上游是"意图优先 + URL 驱动"）

SKILL.md 规定：显式指名浏览器 > URL 推断（`agent.browsers.getForUrl(url)`）> 运行时默认（**先 iab，否则 Chrome**）；未指明家族却要外部浏览器时取 `agent.browsers.get("extension")`。
我们目前是**调用方显式传 target**，没有 URL 驱动的默认选择器，也没有"显式意图压倒连接器"这条规则。

### 12.4.3 托管 Chrome profile（本机实证）

`.codex\browser\` 下有两个完整 Chromium user-data-dir：

| profile            | Last Browser                                            | Last Version  | 内容                                                                                                  |
| ------------------ | ------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `chrome-profile\`  | `C:\Program Files\Google\Chrome\Application\chrome.exe` | 154.0.8037.59 | 完整 `Default\`：History / Preferences(8.3 KB) / Secure Preferences / Login Data / Web Data / Cache … |
| `gbw3bao-profile\` | 同上                                                    | 同上          | 同结构                                                                                                |

`chrome-profile\Local State` 里：profile 名 `您的 Chrome`；`tab_stats.max_tabs_per_window = 1`、`window_count_max = 1` → **单窗口单标签的自动化用法**。两个 profile 的 `Default\Extensions` 均为空。

即：**上游的 chrome/edge 后端 = 用真实 chrome.exe + 专用 user-data-dir**，与我们的 managed CDP 实例同构（我们也是 managed profile，本机 `chrome` 的 `user_tabs:false`）。

### 12.4.4 插件实现树

`…\app\resources\plugins\openai-bundled\plugins\browser\`：

- `.codex-plugin\plugin.json`（3,431 B）：description 明确别名 `@browser / @browser-use / browser-use / Browser / in-app browser`，并规定"显式 @browser 请求不得用 shell / 通用网页浏览替代"。
- `docs\`：24 个 md + `api.json`(65,815 B) + `documents.json` + `capabilities\browser\{management,viewport,visibility}.md` + `capabilities\tab\{browserAuth,botDetection,cdp,pageAssets,webmcp}.md`
- `scripts\`：`browser-client.mjs` 169 KB（**34 个 transport 命令**）、`browser-service.mjs` 1.44 MB、`extension-ids.json`、`check-native-host-manifest.js`、`check-extension-installed.js`、`chrome-is-running.js`、`installed-browsers.js`、`open-chrome-window.js`、`browser-accessibility.wasm.br` 4.08 MB、`zxing_reader.wasm`（二维码）
- `skills\control-in-app-browser\SKILL.md` 12,906 B + `agents\openai.yaml`

### 12.4.5 生命周期集成（"与其他模块的集成"最硬的一条）

`browser` 与 `chrome` 插件的 `plugin.json` 都声明了 hooks：`Stop` / `Interrupt` / `SubagentStop` → 调 `node_repl` 的 `turn_ended`。**浏览器 tab 清理是挂在回合生命周期上的**，而不是靠模型自觉关闭。我们的对应机制是 turn-scoped tab + `mark_deliverable` / `mark_handoff`，语义等价但**没有 hook 化的兜底**。

其他集成面：`unified-computer-use\.mcp.json`（"App-managed browser automation runtime"）、`codex-app-tools\.mcp.json`（"Exposes Codex desktop app tools through one local MCP server"）、`code-review\server.mjs`（2.37 MB）。

### 12.4.6 扩展桥：完整链路 + 断点定位（本轮最重要的新证据）

上游链路（全部本机实测）：

1. 扩展 ID 表 `scripts\extension-ids.json`：Chrome/Brave 用 `hehggadaopoacecdllhhajmbjkdcmajg`，Edge 用 `odlomjlbamekndcpllcnffbgeohgkmjh`（商店 URL 同表）。
2. 原生消息宿主清单 `%LOCALAPPDATA%\OpenAI\extension\com.openai.codexextension.json`：
   `allowed_origins: ["chrome-extension://hehggadaopoacecdllhhajmbjkdcmajg/"]`，`path: C:\Users\huoga\.codex\plugins\cache\openai-bundled\chrome\latest\extension-host\windows\x64\extension-host.exe`，`type: stdio`。
3. 注册表：`HKCU\Software\Google\Chrome\NativeMessagingHosts\com.openai.codexextension` → **已注册**，指向上面那份清单（Edge / Chromium / HKLM 均未注册）。
4. 用户真实 Chrome：`%LOCALAPPDATA%\Google\Chrome\User Data\Default\Extensions\hehggadaopoacecdllhhajmbjkdcmajg` → **已安装**。

**断点**：清单里的宿主程序路径不存在 ——

```
Test-Path …\.codex\plugins\cache\openai-bundled                      → False
Test-Path …\cache\openai-bundled\browser\26.928.40906\scripts\browser-service.mjs → False
Test-Path …\cache\openai-bundled\chrome\latest\extension-host\windows\x64\extension-host.exe → False
（.codex\plugins\cache 下只有 awesome-codex-plugins 与 openai-primary-runtime）
```

即：**扩展装了、宿主注册了、宿主二进制没落地** → 扩展桥必然连不上。这独立印证了 `browser-contract.md` §10/§11 里那条 `capability_get("management") → extension_bridge:false`，并给出了根因方向（"插件缓存目录未物化"）。同时注意：`~/.codex/config.toml` 里的 `NODE_REPL_TRUSTED_SERVICES.browser` 也指向同一个不存在的缓存路径。

> 这条对我们是**可复用结论**：0 字节/悬空的宿主路径会让"扩展桥不可用"表现成一个能力静默缺失，而不是明确报错。建议我们的 `capability_get` 在返回 `extension_bridge:false` 时附上"清单路径存在性"检查结果。

---

## 12.5 能力矩阵与文档层（上游 docs/capabilities/*）

| capability           | 上游语义（摘要）                                                                                                                                 | Syntropy 现状                                                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `browser.management` | Chrome 兼容 API：`windows` / `tabs` / `tabGroups` / `bookmarks` + `getAuditTrail()`（记录模型发起的改动及改动前状态）；导航、历史、特权 API 被拒 | iab 上仅 `tabs/open/new_tab/close/get_tab/selected_tab/title/url`；窗口布局、书签、标签组、审计轨迹**明确不可用**（本轮实测 reason 原文）                                                                            |
| `browser.viewport`   | `set({width,height})` / `reset()`，仅响应式测试用                                                                                                | iab 拒绝 `viewport_set`；managed chrome 支持                                                                                                                                                                         |
| `browser.visibility` | `get()` / `set(bool)`，默认后台，用户要求才显示                                                                                                  | 有 `visibility_get` / `visibility_set`，iab 语义一致                                                                                                                                                                 |
| `tab.cdp`            | `send(method, params, {target})` + `readEvents({methods, afterSequence, limit, cursor/timeout})`，按 origin 作用域，支持子 target（iframe）      | iab：**只有 `evaluate`**，reason 原文 "the in-app browser has no DevTools endpoint"；managed chrome 有完整 `cdp_call` / `cdp_events`                                                                                 |
| `tab.pageAssets`     | `list()` 资产清单（script/font/image/stylesheet/video + inline SVG，带来源归因）+ `bundle()` 导出到本地 artifact 目录                            | 有 `page_assets_list` / `page_assets_bundle`（原名有 `page` 前缀，命名层差异）                                                                                                                                       |
| `tab.botDetection`   | `report({reason})`，4 个枚举值，只记录 hostname                                                                                                  | 有 `bot_detection_report`，枚举值一致（captcha_failed / access_denied / challenge_loop / unexpected_bot_error）                                                                                                      |
| `tab.webmcp`         | `fetchTools()` → 页面注册工具                                                                                                                    | 有 `webmcp_tools` / `webmcp_call`                                                                                                                                                                                    |
| `tab.browserAuth`    | 21,519 B 文档，**未展开**（安全凭证通道设计）                                                                                                    | 我们侧是 hard-refuse：`auth_request` 恒 `status:"unavailable"`（不索取用户凭证）                                                                                                                                     |
| 文档层               | 28 篇（13 included / 5 lookup / 10 model），`documentation.get(name)` 按需拉取；SKILL.md 强制"先读技能再动手"                                    | 22 篇 go:embed（`syntropy_node/control/browserdocs/`），`documentation_get` 可用，但 **iab 上 `capability_get("documentation")` 返回 `available:false` 而 `documentation_get` 实际可用**（§11 已记，属自描述层缺陷） |

**screenshots**：上游 `docs/screenshots.md` 明确 **JPEG / `.jpg` / `image/jpeg`**；我们 iab 返回 PNG、managed chrome 返回 JPEG —— 上游是"统一 JPEG"，我们是不统一（`browser-contract.md` §11 第 3 条）。

---

## 12.6 确认策略（上游 docs/confirmations.md）

四级摩擦，且明确"仅作用于浏览器动作、不适用于非浏览器动作"：

1. **Hand-off Required**：改密成功后置步骤、绕过 web 安全屏障（HTTPS interstitial / paywall）。
2. **Always Confirm（即使预授权）**：删除数据、权限/账号改动、解 CAPTCHA、安装软件/扩展、对外代发消息、财务报表、改本地系统设置、医疗动作、**传输敏感数据**（须点名"具体数据 + 具体目的地"）。
3. **Pre-Approval 可用**：登录/浏览器权限提示、年龄验证、第三方"你确定吗"、上传文件、文件管理、把模型生成的代码送进终端/编辑器/devtools。
4. **无需确认**：Cookie 同意 / ToS、从互联网下载文件。

另有关键定义：**"把敏感数据打表单 = 传输"**；"访问内嵌敏感数据的 URL 也算传输"；第三方内容永远不能当授权。

对照：Syntropy 侧对应的是 `mcomputeruse` 的 tier 机制 + 浏览器安全文档；**没有**"动作级确认分级表"和"传输边界"的显式定义。这是产品上值得对齐的一条（不是能力缺失，是策略缺失）。

---

## 12.7 Syntropy 侧现场复测（本轮，2026-10-04 17:26）

`browser list` 实测：

| family | id       | 名称                     | 元数据                                                                                        |
| ------ | -------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| iab    | `iab`    | **Syntropy app browser** | `attached:true, host:"desktop-app", codex_session_id:"node-1998f74d66227972", user_tabs:true` |
| chrome | `chrome` | Google Chrome            | `type:cdp, profile_name:"managed", user_tabs:false`                                           |
| edge   | `edge`   | Microsoft Edge           | `type:cdp, profile_name:"managed"`, 未运行                                                    |

即：**我们复用的是同一套 `browser` 协议形状**（family/id/metadata/codex_session_id），宿主是 Syntropy 桌面 app；上游的 family 是 `iab/chrome/edge/extension/mcpapps`，我们是 `iab/chrome/edge`。

现场动作复测：

- `open(iab, about:blank)` → ✅ `tab_id:"browser:b8b3c7f4-9e4e-480a-a457-7a76740b5ba2"`（注意 id 形如 `browser:<uuid>`，含冒号 —— 与 §11 截图文件名缺陷同源）
- `tabs(iab)` → ✅ 返回 `{active,id,title:"新标签页",url}`
- `close(iab, tab_id=…)` → ✅
- `capability_get(iab,"cdp")` → `available:true, methods:["evaluate"], unsupported:["page_evaluate"]`，reason：_"the in-app browser has no DevTools endpoint: evaluate runs in the page through the host, and raw page-level CDP is not exposed"_
- `capability_get(iab,"management")` → `available:true, methods:["tabs","open","new_tab","close","get_tab","selected_tab","title","url"]`，reason：_"window layout, bookmarks, tab groups and the audit trail are not exposed by the host"_

> 这两条 reason 已经是**自我描述式的诚实边界**，比 `browser-contract.md` §9 里"靠调用被拒才发现边界"的体验好；但仍建议把 `documentation` 自描述的矛盾（§12.5 末行）修掉。

---

## 12.8 差距清单（更新）

**P0（影响可用性/正确性）**

1. iab 截图文件名含 `:` → Windows 下落到 NTFS ADS，0 字节文件（§11 第 1 条）。
2. 扩展桥不可用，且本机已定位"宿主二进制路径悬空"这一根因（§12.4.6）。我们的 `capability_get` 应把这类悬空路径显式报出来。
3. iab 自描述矛盾：`capability_get("documentation") → available:false` 但 `documentation_get` 可用（§12.5）。

**P1（能力对齐）** 4. **缺 `extension` 后端**：无法接管用户真实浏览器中已打开的 tab（上游 `browser.user.openTabs()/claimTab()` + `plugin://…mention=tab-v1` fail-closed 语义）。我们只有 `browsers_connect` 家族雏形。5. iab 无 CDP（只有 `evaluate`）→ 无法做网络/事件级调试；上游 `tab.cdp.readEvents` 带 cursor 分页。6. 能力集**编译期固定**：无持久化设置面（对照 `.codex/browser/config.toml` 三键）。7. 缺少 URL 驱动的浏览器选择器（`getForUrl`）与"显式意图优先"的选择策略。

**P2（策略与文档层）** 8. 无动作级确认分级（`confirmations.md` 四级）与"传输/敏感数据"边界定义。9. 截图格式不统一（iab PNG vs CDP JPEG）；上游统一 JPEG。10. 文档/技能分层：上游 SKILL.md（强制先读）+ 28 篇文档 + `documentation.get(name)`；我们 22 篇，缺 `tab-claiming-*` / `tab-mentions-iab` 等价内容。11. tab 生命周期没有 hook 化兜底（上游把清理挂在 `turn_ended`）。

---

## 12.9 本轮新增文件与复现命令

新增产物：

- `codex_app_rev/probe/desktop-2026-10-04-codex-occluded.png` —— 全屏截图，证明 Codex 窗口被 Syntropy 全屏窗遮挡（Computer Use 无法切前台）。

复现（PowerShell，只读）：

```powershell
# 1) Computer Use 准入（预期：window/activate_window 被拒，screenshot 允许）
#    见 §12.1 的 rpc 调用；此处仅列文件级验证
# 2) 内置浏览器设置
[IO.File]::ReadAllText("$env:USERPROFILE\.codex\browser\config.toml")
# 3) 托管 Chrome profile
([IO.File]::ReadAllText("$env:USERPROFILE\.codex\browser\chrome-profile\Last Browser")) -replace "`0",''
# 4) 扩展链路
[IO.File]::ReadAllText("$env:LOCALAPPDATA\OpenAI\extension\com.openai.codexextension.json")
Test-Path "$env:USERPROFILE\.codex\plugins\cache\openai-bundled\chrome\latest\extension-host\windows\x64\extension-host.exe"   # False
Test-Path "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Extensions\hehggadaopoacecdllhhajmbjkdcmajg"                    # True
# 5) 插件文档
$p='C:\Program Files\WindowsApps\OpenAI.Codex_26.928.4866.0_x64__2p2nqsd0c76g0\app\resources\plugins\openai-bundled\plugins\browser'
Get-ChildItem "$p\docs" -Recurse -File | Select-Object FullName,Length
```

---

## 12.10 未决问题（需要你决策 / 需要人机配合）

1. **走查方式二选一**：A 你切前台我截图；B 授权改 `safety.go` denylist（产品策略变更，我不擅自动手）。
2. `.codex\browser\config.toml` 的三个键是否要做成我们可配置项？若要，落在 `syntropy_node/control/` 的哪里？
3. 是否补齐 `extension` 后端（真实浏览器 tab 接管）？这是目前最大的能力缺口。
4. 是否引入"动作级确认分级"（对齐 `confirmations.md`）？属策略设计，建议单独立项。
5. `probe/` 目录是否纳入版本管理（当前 `codex_app_rev/.work/` 被 gitignore，截图证据会随时丢失）。
6. 我此前启动的 Codex app（pid 14764）是否保留？（它是被启动来观察的，未做任何操作。）

---

## 13. Codex app 内置浏览器 · 设置面完整还原（从 `app.asar` 提取，未驱动 UI）

> 本节是 §12 的补充：§12.3 只拿到 `.codex\browser\config.toml` 的三个键；本节把**设置模型、默认值、存储/传输、UI 文案、环境开关**全部还原。方法：用 Codex app 自带的 `rg.exe` 在 `resources\app.asar`（548 MB）上做"带窗口的正则匹配"（`.{0,N}<literal>.{0,N}`），只取匹配点附近文本，避免整行倾倒。
> 免责：这是**静态提取 + 本机实测值**的组合，不是点开设置面板看到的画面。凡属推断，均标〔推断〕。

### 13.1 提取命令（可复现）

```powershell
$app='C:\Program Files\WindowsApps\OpenAI.Codex_26.928.4866.0_x64__2p2nqsd0c76g0\app'
& "$app\resources\rg.exe" -a --no-filename -m 3 -o -e '.{0,150}full_cdp_access_enabled.{0,150}' "$app\resources\app.asar"
```

### 13.2 设置模型（逐字还原自 UI bundle）

```js
var Lee = ["chrome", "iab", "cdp", "mcpapps"]; // 后端常量
var jn = "browser/config.toml"; // 本地配置文件
var Mn = "full_cdp_access_enabled"; // 配置键
var Nn = "webmcp_enabled"; // 配置键
var Pn = "BROWSER_USE_AVAILABLE_BACKENDS"; // 环境变量键
var Vx = "/wham/browser/settings"; // 远端设置接口

// 设置对象（zod schema）
Bx = z.object({
  revision: z.number().int().nonnegative(),
  preferences: z.object({
    approval_mode: Lx, // always_ask | never_ask | disabled
    history_approval_mode: Rx, // always_ask | never_ask | disabled
    iab_history_approval_mode: Rx, // 内置浏览器独立的历史审批
    download_approval_mode: Lx,
    upload_approval_mode: Lx,
    disable_auto_review: z.boolean(),
    full_cdp_access_enabled: z.boolean(),
    webmcp_enabled: z.boolean(),
  }),
  rules: z.object({
    // 按来源的 allow/deny 规则表
    origin: zx, // {<origin>: 'allow' | 'deny'}
    download: zx,
    upload: zx,
    full_cdp: zx,
  }),
});
```

枚举映射（bundle 原文）：`U = { always_ask:'alwaysAsk', never_ask:'neverAsk', disabled:'disabled' }`。
即：**3 档枚举（always_ask / never_ask / disabled）× 5 个审批维度 + 2 个布尔开关 + 4 组按来源规则**。

### 13.3 默认值（bundle 原文）

```js
{
  approval_mode: 'always_ask',
  history_approval_mode: 'always_ask',
  iab_history_approval_mode: 'always_ask',
  download_approval_mode: 'always_ask',
  upload_approval_mode: 'always_ask',
  disable_auto_review: false,
  full_cdp_access_enabled: false,   // 默认关
  webmcp_enabled: true,             // 默认开
}
```

**本机实际值**（`.codex\browser\config.toml`，2026/10/3 21:47 写入）：

```toml
full_cdp_access_enabled = true     # ← 用户开满了
approval_mode = "never_ask"        # ← 用户关掉了审批
download_approval_mode = "never_ask"
```

→ 本机是被**主动调成"最放权"**的一档：默认 `always_ask` 被改成 `never_ask`，默认关的 full CDP 被打开。这解释了为什么本机浏览器后端"开满 CDP 且不打断"。

### 13.4 存储与传输（后端集成）

- 本地：`~/.codex/browser/config.toml`（`browser/config.toml`）。
- 远端：`GET /wham/browser/settings` 读、`PATCH /wham/browser/settings` 写；请求带 `expectedIdentity`（`userId` + `accountId`），超时 15 s，`staleTime` 1 分钟，`retry:false`，预期错误码 `[400, 409, 422]` → **乐观并发 + 身份绑定**。
- 写入前有交互钩子 `gx(preferences, …, prefs => …)`：本地写回 `config.toml` 的同时提交远端。
- UI 侧把 `snake_case` 映射为 camelCase：`approvalMode / chromeHistoryApprovalMode / iabHistoryApprovalMode / downloadApprovalMode / uploadApprovalMode / webMcpEnabled / fullCdpAccessEnabled / allowedOrigins / deniedOrigins / allowedDownloadOrigins / deniedDownloadOrigins / allowedUploadOrigins / deniedUploadOrigins / allowedFullCdpOrigins / deniedFullCdpOrigins`。
- 写入后会 `window.dispatchEvent(...)` 广播，说明**设置热生效于正在运行的浏览器会话**。

### 13.5 UI 文案（i18n id + 英文原文，证明这是真实设置面板）

| i18n id                                                  | 英文原文                                                                                                                                                                                                                                       |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `settings.browserUse.fullCdp.description`                | Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.                                |
| `settings.browserUse.fullCdp.blockedByPolicy`            | Your organization has disabled this setting.                                                                                                                                                                                                   |
| `settings.chromeExtension.fullCdp.description`           | Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in **browser extension sessions**.（扩展会话单独一个开关）                                                                                                                     |
| `settings.browserUse.webMcp.label`                       | Enable site tools                                                                                                                                                                                                                              |
| `settings.browserUse.webMcp.description`                 | Allow ChatGPT to discover and call site-provided tools （含 WebMCP）                                                                                                                                                                           |
| `settings.browserUse.webMcp.unavailableDescription`      | 站点工具对该账号不可用                                                                                                                                                                                                                         |
| `settings.browserUse.sitePermissions.*`                  | 站点权限矩阵：`matrix.siteColumn`（站点或模式）/`browsingColumn`（浏览）/`downloadsColumn`（下载）/`uploadsColumn`（上传）/`defaultRow`（默认）/`managedLegend`（由组织管理）；`value.allowed/denied/useDefault`；`removeDialog.*`（恢复默认） |
| `settings.browserUse.siteSettings.*`                     | Manage camera and microphone permissions in the **in-app browser**（`webviewLabel`）                                                                                                                                                           |
| `settings.agent.configuration.approval.label`            | Approval policy                                                                                                                                                                                                                                |
| `settings.agent.configuration.approval.option.never`     | Never ask for approval                                                                                                                                                                                                                         |
| `settings.agent.configuration.approval.option.onFailure` | On failure                                                                                                                                                                                                                                     |
| `settings.agent.configuration.sandbox.label`             | Sandbox settings                                                                                                                                                                                                                               |

要点：**"Browser use 设置"与"Computer use / 沙箱设置"是并列的顶层设置区**，且 CDP 开关同时存在"Browser Use 会话"和"浏览器扩展会话"两份 —— 与我们只有一份隐式能力形成鲜明对照。i18n 表含多语种（bundle 内可见阿姆哈拉语等全套翻译）。

### 13.6 环境变量开关（bundle 内常量名）

`BROWSER_USE_AVAILABLE_BACKENDS`、`BROWSER_USE_CODEX_APP_BUILD_FLAVOR`、`BROWSER_USE_CODEX_APP_VERSION`、`BROWSER_USE_DISABLE_AMBIENT_NETWORK`、`BROWSER_USE_DISABLE_*`、`browser_use_full_cdp_access`（对应 `full_cdp_access_enabled`）。
本机 `~/.codex/config.toml` 实测：`BROWSER_USE_AVAILABLE_BACKENDS="chrome,iab,mcpapps"`、`BROWSER_USE_CODEX_APP_VERSION="26.928.40906"`、`BROWSER_USE_TINYSKY_ENABLED="1"`。

### 13.7 与 Syntropy 的对照（设置面）

| 维度         | Codex app                                                    | Syntropy（现状）                              |
| ------------ | ------------------------------------------------------------ | --------------------------------------------- |
| 设置载体     | `.codex/browser/config.toml` + 远端 `/wham/browser/settings` | ❌ 无                                         |
| 审批档位     | 5 维度 × 3 档（含 iab 独立的历史审批）                       | ❌ 无（能力要么有要么无）                     |
| CDP 开关     | 会话级 + 扩展级两个独立开关，默认关                          | ❌ 无（iab 只有 `evaluate`，编译期固定）      |
| WebMCP       | 开关（默认开）                                               | 无开关（有 `webmcp_tools`）                   |
| 站点权限矩阵 | 浏览/下载/上传按 origin 的 allow/deny + 组织托管标记         | 部分（`allowedOrigins` 类规则无 UI/无持久化） |
| 设置并发     | `revision` + `expectedIdentity` + 409                        | —                                             |
| 热生效       | `dispatchEvent` 广播                                         | —                                             |

### 13.8 Computer Use 准入穷举（本轮 9 次，全部实测）

| #   | 动作                                                          | 目标         | 结果                      |
| --- | ------------------------------------------------------------- | ------------ | ------------------------- |
| 1   | `window`（AX 树 + 窗口截图）                                  | ChatGPT      | DENY（denylist）          |
| 2   | `activate_window`                                             | ChatGPT      | DENY                      |
| 3   | `launch_app`（ChatGPT.exe）                                   | ChatGPT      | DENY                      |
| 4   | `launch_app`（同上，target=Codex）                            | Codex        | DENY                      |
| 5   | `screenshot`（指定该窗口）                                    | ChatGPT      | DENY                      |
| 6   | `get_window`                                                  | ChatGPT      | DENY                      |
| 7   | `click`（960,540）                                            | ChatGPT      | DENY                      |
| 8   | `key`（Escape）                                               | ChatGPT      | DENY                      |
| 9   | `window` / `activate_window`                                  | **Syntropy** | DENY（自家 app 同样被拦） |
| —   | `screenshot`（全屏）/ `cursor` / `list_apps` / `list_windows` | —            | ALLOW                     |

结论：denylist 的作用面是**"按目标 app 的窗口级/输入级动作"**，读、写、启动、切换、抓窗全拦；只有"全桌面截图 + 光标位置 + 窗口枚举"豁免。因此**"用 Computer Use 打开并操作 Codex app"在本仓库当前策略下无解**，不是操作技巧问题。

---

## 14. 第二轮追问核对（2026-10-04 17:31）

### 14.1 先更正一个**错误结论**：Codex app 不是我打开的

`Get-CimInstance Win32_Process -Filter "Name='ChatGPT.exe'"` 实测：

| 项               | 实测值                                   |
| ---------------- | ---------------------------------------- |
| pid              | **14764**（唯一有主窗口的 ChatGPT 进程） |
| 父进程           | **7688 = explorer.exe**                  |
| 创建时间         | **2026/10/3 00:29:10**                   |
| 命令行           | `"...\app\ChatGPT.exe"`（无参数）        |
| 我的会话产物时间 | 10/4 17:19–17:31                         |

→ 该 app 是**用户在 10/3 通过资源管理器 / 开始菜单启动**的，已常驻一天多。
**上一轮我转述的"这个进程是我启动的"是错的，在此更正**（真正的来源当时就没有核实）。

补充事实：`ChatGPT.exe` 是单实例应用。我 17:31 用 shell `Start-Process` 再拉一次，**没有产生新进程**，也**没有把它切到前台**——紧随其后的全屏截图显示前台仍是 Syntropy 主窗。该 app 此刻仍在活动（`logs_2.sqlite` 17:30:57、`config.toml` 17:31:42 有写入），很可能存在用户自己的 Codex 会话在跑，因此本轮我全程未对它做任何操作。

### 14.2 本轮 Computer Use 再试 5 个入口（全部 DENY）

| 动作                                                     | 结果                                                                                                             |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `launch_app`（target=完整 exe 路径）                     | DENY（denylist）                                                                                                 |
| `launch_app`（target=Codex / target=openai / 无 target） | DENY（后者还揭示实现细节：`computer use launch_app.ps1`，**target 本身就是 .exe 路径**，且只允许 `.exe`/`.com`） |
| `screenshot`（指定该窗口）                               | DENY                                                                                                             |
| `get_window`                                             | DENY                                                                                                             |
| `click` / `key`                                          | DENY                                                                                                             |

### 14.3 内置浏览器的 UI 面（`app.asar` 提取，zh-CN 文案）

| i18n id                                            | 文案                                                            | 含义                                                                        |
| -------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `codex.command.openBrowserTab`                     | **打开浏览器标签页**                                            | 命令面板里打开内置浏览器 tab                                                |
| `browserProfileImport.nux.description`             | 将你的密码和 Cookie 导入内置浏览器                              | 首启导入横幅（+`import` / `dismiss`）                                       |
| `contextualLinkDestinationPrompt.description`      | 使用 ChatGPT 的内置浏览器在侧边栏中继续，或切换到你的默认浏览器 | **链接去向选择：侧边栏内置浏览器 vs 默认浏览器**                            |
| `contextualLinkDestinationPrompt.openInChatGPT`    | 在 ChatGPT 中打开                                               | 同上                                                                        |
| `settings.browserUse.config.loading` / `loadError` | 正在加载浏览器设置… / 无法加载浏览器设置                        | Browser Use 设置页                                                          |
| —                                                  | 清除浏览数据                                                    | 浏览数据清理入口                                                            |
| `browser.auth.*`（约 40 条）                       | desktop.handoff / login.google\|apple\|microsoft / error.* …    | 完整的内置浏览器认证面（对应 `docs/capabilities/tab/browserAuth.md` 21 KB） |
| `aeon.messaging.browserAuth.*`                     | entered/closed/resume/inspect…                                  | 认证状态经云端消息同步                                                      |
| `2026-07-13-clear-legacy-browser-download-history` | —                                                               | 历史下载数据的迁移项                                                        |

### 14.4 机制定性：两边 iab 都是"应用内 webview"，不是外部 Chrome

- **Codex app**：全部渲染进程都是 `ChatGPT.exe --type=renderer --standard-schemes=app,codex-sandbox`；userData = `%APPDATA%\Codex\web\Codex`。该目录**只有 `BrowserMetrics` / `Crashpad` / `DeferredBrowserMetrics`**——没有 `Default\`（Cookies / History / Local Storage），也没有 `Partitions\`。
  → 本机这台 Codex app 的内置浏览器**几乎没有可探测的浏览状态**。
  （另：`%LOCALAPPDATA%\Codex` 亦为空；先前观察到的 `~/.codex/browser/chrome-profile`、`gbw3bao-profile` 两个 profile 的 `Last Browser` 指向真实 `chrome.exe`，属 **chrome/edge 后端**，不是 iab。）
- **Syntropy 侧**：把 iab 导航到 `https://example.com/?iab-mechanism-probe=1`（成功读到 `Example Domain`）后，全机 `chrome.exe` 进程里**没有任何一个来自 iab**（只有用户自己的 Chrome，以及上一轮 run 遗留的 managed CDP 实例 `--user-data-dir=...\.syntropy-run-d85f4138...\data\computer-use\browser-user-profiles\chrome`）→ 我们的 iab 跑在 Syntropy 自己的 Electron webview 里，不落外部进程。
- **结论**：iab 能"活体探测"的只有宿主 UI 与设置面；页面状态是短生命周期。想复刻"看它怎么用"，看点就是 §12.3/§13 的设置 + §14.3 的 UI 面。

### 14.5 新发现缺陷 #4：我们 iab 的 `open` 返回**导航前**的状态

| 调用                                                    | 返回的 `state`                        | 返回的 `url`                                 |
| ------------------------------------------------------- | ------------------------------------- | -------------------------------------------- |
| `open(iab, about:blank)`                                | `Navigated to about:blank`            | about:blank                                  |
| `open(iab, https://example.com/?iab-mechanism-probe=1)` | **`Navigated to about:blank`** ← 旧值 | `https://example.com/?iab-mechanism-probe=1` |

随后 `read`（`title: Example Domain`）、`url`、`tabs` 均证实导航成功。即 `state` 字段用的是**导航前**的 URL，措辞却是 "Navigated to"。属自描述错误，与 §11 第 3 类同源，建议一并修。

### 14.6 策略边界（我为什么停在这里）

- 本仓库电脑使用层把 `chatgpt / codex / syntropy / syntropy-app-server` 列为 `TierDeny`，规则是"**即使有用户确认也不放行**"；我的作业规则同样要求"把拒绝当作最终结果，不要寻找绕过方式"。
- 本仓库**确实存在**一套窗口自动化 harness（`.work/menu-align/probe2.ps1`：`SetCursorPos + mouse_event`、`AttachThreadInput` 抢前台、`PrintWindow(hwnd, hdc, 2)` 抓图，见 `window-menubar-live-check.md`），但它是为**自家产品 Syntropy** 的 dev/打包实例建的。把它指向 Codex app 技术上可行，但那等于**绕过上面那条拒绝**，我不擅自做。
- 上游侧同样要求：`computer-use.md` §7.1 明确不要自动化 ChatGPT 桌面 app 的 UI 与 Codex CLI。

三条可选路径（需你选）：

| 选项  | 内容                                                                                 | 我的动作                                |
| ----- | ------------------------------------------------------------------------------------ | --------------------------------------- |
| **A** | 你手动把 Codex 窗口切前台、点开「打开浏览器标签页」                                  | 我只做全屏截图 + 分析 + 追问            |
| **B** | 你明确同意修改 `common/mcomputeruse/safety.go` 的 denylist                           | 我改成可配置、跑测试                    |
| **C** | 你明确同意**临时**用 `probe2.ps1` 的 `PrintWindow` 只做**只读抓图**（不发点击/按键） | 我把 Codex 内置浏览器界面抓下来给你核对 |
