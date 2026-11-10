# 内置浏览器「模型面契约」实证：Codex app 26.928.4866.0 ↔ Syntropy node

> 2026-10-04。配套文档：[browser.md](browser.md)（功能面总览与产品级对照）。
> 本文只补一件事：**上游随包契约文件的逐条实证**，以及它与本仓库 node 侧动作面的**命名层差异**。
> 证据等级 A（安装目录只读直读；未修改任何文件、未插桩）。

## 0. 证据源（全部在 asar 之外，文件级可核对）

根目录：`C:\Program Files\WindowsApps\OpenAI.Codex_26.928.4866.0_x64__2p2nqsd0c76g0\app\resources\plugins\openai-bundled\plugins\`

该目录下共 **9 个插件**：`browser`、`chrome`、`code-review`、`codex-app-tools`、`computer-use`、`deep-research`、`latex`、`unified-computer-use`、`visualize`。
`browser` 与 `chrome` 各自持有**同一份文档集的两个副本**（[computer-use.md](computer-use.md) §8.2 的结论，本次文件级复核成立）。

`plugins\browser\` 非 node_modules 文件清单（实测大小）：

| 文件                                                                                                                                                                  | 大小                                                         | 作用                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| `.codex-plugin\plugin.json`                                                                                                                                           | 3,431 B                                                      | 插件声明（别名、hooks、interface 元数据）                           |
| `docs\api.json`                                                                                                                                                       | 65,815 B                                                     | **模型面 API 契约（接口树）**                                       |
| `docs\documents.json`                                                                                                                                                 | 3,899 B                                                      | **28 篇文档的投递声明**                                             |
| `docs\*.md`                                                                                                                                                           | 20 篇                                                        | 行为/安全/排障文档                                                  |
| `docs\capabilities\{browser,tab}\*.md`                                                                                                                                | 8 篇                                                         | 能力文档（`browserAuth.md` 独占 21,519 B）                          |
| `scripts\browser-service.mjs`                                                                                                                                         | 1,443,910 B                                                  | 浏览器服务实现（传输层、命令 schema）                               |
| `scripts\browser-client.mjs`                                                                                                                                          | 169,286 B                                                    | 客户端（工具/命令注册）                                             |
| `scripts\browser-accessibility.wasm.br`                                                                                                                               | 4,084,148 B                                                  | **无障碍树引擎（wasm，brotli）**                                    |
| `scripts\zxing_reader.wasm`                                                                                                                                           | 1,065,866 B                                                  | **二维码识别（browserAuth 扫码登录用）**                            |
| `scripts\{extension-ids,installed-browsers,open-chrome-window,chrome-is-running,check-native-host-manifest,check-extension-installed,chromium-browser-diagnostics}.*` | 7 个                                                         | 外部浏览器/扩展的探测与拉起                                         |
| `skills\control-in-app-browser\SKILL.md`                                                                                                                              | 12,906 B                                                     | 应用内浏览器技能（含 §7.4 引用的"不要读 cookie/密码/会话存储"原文） |
| `assets\*.{png,svg}`                                                                                                                                                  | chrome/edge/brave/opera/vivaldi 五家浏览器图标 + plugin 图标 | UI                                                                  |

## 1. 接口树：`docs/api.json`

顶层键只有三个：`interfaces` / `root` / `types`。`interfaces` 下逐成员带旗标
（`unsupportedByDefaultIn` / `documented:false`），实测全文如下（A 级）：

```text
Agent            browsers | documentation[skip:mcpapps]
Browsers         get | getDefault[skip:mcpapps, undocumented] | getForUrl[skip:mcpapps, undocumented] | list
Browser          browserId[skip:mcpapps] | capabilities[skip:mcpapps] | tabs | user[skip:iab,cdp,mcpapps]
                 documentation | history[skip:iab,cdp,mcpapps] | nameSession[skip:mcpapps]
BrowserUser      claimTab[skip:mcpapps] | getTabContext[skip:extension,iab,cdp,mcpapps, undocumented] | openTabs[skip:mcpapps]
Tabs             content[skip:iab,extension,cdp,mcpapps] | get | list | new[skip:mcpapps] | selected[skip:mcpapps]
Tab              ax[skip:iab,extension,cdp,mcpapps] | capabilities[skip:mcpapps] | clipboard[skip:mcpapps] | content[skip:mcpapps]
                 cua[skip:mcpapps] | dev[skip:mcpapps] | dom_cua[skip:mcpapps] | id | playwright
                 back/close/forward/getJsDialog/goto/reload[skip:mcpapps]
                 markDeliverable[skip:cdp,mcpapps] | markHandoff[skip:cdp,mcpapps]
                 requestManualHandoff[skip:extension,iab,cdp,mcpapps] | screenshot | title | url
AXAPI            click drag get paste performSecondaryAction pressKey scroll selectText setValue typeText write  (全部 skip:mcpapps)
ContentAPI       export[skip:iab,extension,cdp,mcpapps] | exportGsuite | exportYouTubeTranscript  (后两者 skip:mcpapps)
CUAAPI           click double_click downloadMedia[skip:iab,mcpapps, undocumented] drag keypress move scroll type
DomCUAAPI        click double_click downloadMedia[skip:iab,mcpapps, undocumented] get_visible_dom keypress scroll type
PlaywrightAPI    domSnapshot | elementInfo[undocumented] | elementScreenshot[undocumented] | evaluate | expectNavigation
                 frameLocator getByLabel getByPlaceholder getByRole getByTestId getByText locator
                 waitForEvent waitForLoadState waitForTimeout waitForURL
PlaywrightLocator all allTextContents and check click count dblclick downloadMedia evaluate evaluateAll fill filter
                 first getAttribute getBy* innerText isEnabled isVisible last locator nth or press pressSequentially
                 selectOption setChecked textContent type uncheck waitFor
PlaywrightFrameLocator / PlaywrightDownload / PlaywrightFileChooser(isMultiple,setFiles)
TabClipboardAPI  read readText write writeText      TabDevAPI  logs
AlertDialog / BeforeUnloadDialog(type,dismiss) / ConfirmDialog(type,accept,dismiss) / PromptDialog(type,accept,dismiss)
Documentation    get
```

四条读法（都比"有没有这个功能"更有信息量）：

1. **后端差异由契约自己声明**，不是靠猜：`mcpapps` 几乎全线不支持（不能新建/导航）；
   `cdp` / `extension` 不支持 `markDeliverable` / `markHandoff`（标签页存活由宿主决定）；
   `iab` 额外不支持 `Browser.user`、`Browser.history`、`Tabs.content`、`Tab.ax`。
2. **`Tab.ax`（无障碍树）不是所有后端都有**——它在 `iab`/`extension`/`cdp`/`mcpapps` 上都被标记为默认不提供，
   而 [computer-use.md](computer-use.md) §8.2 把 AX 描述成"首选 API"。两件事同时成立意味着：
   AX 是**默认后端**（应用自带浏览器视图）上的首选路径，跨浏览器后端时模型要退到 `playwright` / `cua` / `dom_cua`。
3. **有一档"实现了但不写文档"**（`documented:false`）：`Browsers.getDefault/getForUrl`、
   `PlaywrightAPI.elementInfo/elementScreenshot`、`cua.downloadMedia`、`domCua.downloadMedia`、`BrowserUser.getTabContext`。
   本仓库的对照实现里，`element_info` / `element_screenshot` 是**当成正式动作**落地的——属于"本侧更宽"的一处。
4. **两个全局动作名与文档强绑定**：`confirmation` 与 `cdp`/`webmcp` 文档用 `requiredFor` 指向
   `tab_cdp_call` / `tab_cdp_events` / `webmcp_list_tools` / `webmcp_invoke_tool` / `tab_browser_auth_handoff`（见 §3）。

## 2. 文档投递：`docs/documents.json`（28 条声明，覆盖全部 28 篇 .md）

| mode                                      | 篇数 | 名单                                                                                                                                                                                                                                             |
| ----------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `included`（满足条件整篇进上下文）        | 13   | `browser-safety`、`confirmations`、`visibility`、`session-naming`、`tab-claiming-chrome`、`mcp-apps`、`tab-mentions-iab`、`tab-cleanup-chrome`、`tab-cleanup-iab`、`browser-control-interruption`、`api-use-behavior`、`accessibility`、`webmcp` |
| `lookup`（只列 name+description，按需取） | 5    | `browser-troubleshooting`、`local-web-development`、`file-uploads`、`chrome-file-upload-troubleshooting`、`screenshots`                                                                                                                          |
| `model`（能力文档，按需取）               | 10   | `bootstrap-troubleshooting`、`chrome-troubleshooting` + `capabilities/{browser/{management,visibility,viewport},tab/{cdp,botDetection,browserAuth,pageAssets,webmcp}}`                                                                           |

条件字段实测出现的五种：`when.browserTypes`、`when.requiredBrowserCapabilities`、`when.requiredTabCapabilities`、
`when.requiredApiMembers`、以及顶层 `requiredFor`（指向命令名）。**逐条原文示例**：

```json
{ "mode": "included", "name": "tab-cleanup-iab",
  "when": { "browserTypes": ["iab"], "requiredApiMembers": ["Tab.markDeliverable", "Tab.markHandoff"] } }
{ "mode": "included", "name": "confirmations",
  "requiredFor": ["tab_cdp_call", "tab_cdp_events", "webmcp_list_tools", "webmcp_invoke_tool"] }
{ "mode": "lookup", "name": "file-uploads", "description": "read before uploading files through a webpage",
  "when": { "requiredApiMembers": ["PlaywrightAPI.waitForEvent", "PlaywrightFileChooser.setFiles"] } }
```

与 [computer-use.md](computer-use.md) §8.2 记的"四种 when 条件"一致，并补上第五种（`requiredFor`）。
本侧的 `browser_docs.go` 需按同一张表核对（本次未逐条 diff，见 §5 待办）。

## 3. 传输层命令名（34 个，`browser-client.mjs` 实证）

上游在 JS API 之下还有一层**具名命令 + zod 载荷 schema**（`browser-client.mjs` 里以 `commandType` 常量出现，
每个命令都有 `PayloadSchema` / `ResultSchema`）：

```text
tab_ax_action  tab_ax_get_state  tab_bot_detection_report  tab_browser_auth_handoff
tab_cdp_call  tab_cdp_events  tab_clipboard_read  tab_clipboard_read_text  tab_clipboard_write  tab_clipboard_write_text
tab_content_export  tab_content_export_gsuite  tab_content_export_youtube_transcript
tab_dev_logs  tab_get_js_dialog  tab_handle_js_dialog  tab_manual_handoff_request
tab_page_assets_bundle  tab_page_assets_list  tab_screenshot
browser_management_call  browser_management_get_audit_trail  browser_user_claim_tab
browser_user_get_tab_context  browser_user_history  browser_user_open_tabs
browser_viewport_reset  browser_viewport_set  browser_visibility_get  browser_visibility_set
webmcp_invoke_tool  webmcp_list_tools
（另有 browser_security_restricted / browser_security_unavailable 两个安全态标识）
```

`tab_cdp_call` 的载荷 schema 原文（便于逐字段对齐我们的 `cdp_call`）：

```js
sc = z.object({
  browser_id: str,
  tab_id: str,
  method: str.min(1),
  params: record(str, unknown).optional(),
  target: z.object({ session_id: str.optional(), target_id: str.optional() }).refine(恰好提供一个),
  timeout_ms: int.positive.optional(),
});
```

## 4. 插件装配：`.codex-plugin\plugin.json`

- `version: 26.928.40906`（**插件自身版本，与 app 版本 `26.928.4866.0` 不是同一个号**）。
- `name: browser`，别名（写进 description）：`@browser`、`@browser-use`、`browser-use`、`Browser`、`in-app browser`。
- 适用场景原文：用户要求"打开/检查/导航/测试/点击/输入/截图"**本地目标**（`localhost`、`127.0.0.1`、`::1`、`file://`、
  或当前内置浏览器标签页）时使用；前端改动后"在已知或显然的本地目标上"用它；
  **明确要求**：显式 `@browser` / `@browser-use` 请求不得用 macOS `open`、shell 命令或通用网页浏览来搪塞。
- `hooks`：三个事件都打到 `node_repl.turn_ended` ——
  `Interrupt`（`session_id=${session_id}`）、`Stop`（同上）、`SubagentStop`（`session_id=${agent_id}`）。
  与 [computer-use.md](computer-use.md) §5.4 的记录一致（本侧刻意跳过 `SubagentStop`，理由见该节）。
- `interface.capabilities = [Interactive, Read, Write]`、`category: Engineering`、`defaultPrompt: "Test my checkout flow on localhost"`。
- `skills: ./skills/`（即 `control-in-app-browser`）。

## 5. 本侧动作全集与**命名层差异**（这是本次最值得记的一条）

`syntropy_node/control/browser_executor.go` 的 `case` 实测（**116 个动作名**），按家族：

| 家族                    | 动作                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 页面读取/输入/交互      | `read` `click` `type` `key` `scroll` `select_text` `set_value` `paste` `perform_secondary_action` `drag` `screenshot` `evaluate` `page_evaluate` `element_info` `element_screenshot` `dom_snapshot`                                                                                                                                                                                                                                                     |
| 定位（Playwright 风格） | `locator`（含 `_all/_all_text/_attribute/_checked/_click/_count/_dblclick/_download_media/_enabled/_evaluate/_evaluate_all/_fill/_press/_press_sequentially/_screenshot/_select_option/_set_checked/_text/_type/_uncheck/_value/_visible/_wait`）、`frame_locator`                                                                                                                                                                                      |
| 等待/历史/对话框        | `wait_for_load_state` `wait_for_url` `wait_for_timeout` `expect_navigation` `wait_for_event` `history` `dialog` `dialog_accept` `dialog_dismiss` `file_chooser_set_files`                                                                                                                                                                                                                                                                               |
| 标签页/浏览器           | `list` `open` `new_tab` `tabs` `get_tab` `selected_tab` `close` `goto` `back` `forward` `reload` `title` `url` `name_session` `mark_deliverable` `mark_handoff` `request_manual_handoff` `tab_mention_resolve`                                                                                                                                                                                                                                          |
| 能力层                  | `capability_get` `viewport_set` `viewport_reset` `visibility_get` `visibility_set` `webmcp_tools` `webmcp_call` `bot_detection_report` `page_assets_list` `page_assets_bundle` `content_export` `content_export_gsuite` `content_export_youtube_transcript` `tabs_content` `clipboard_read` `clipboard_read_text` `clipboard_write` `clipboard_write_text` `logs` `management_call` `management_get_audit_trail` `management_tabs` `management_windows` |
| CDP                     | `cdp_call` `cdp_events`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CUA / DOM-CUA           | `cua_{click,double_click,move,scroll,type,keypress,drag,download_media}`、`dom_cua_{get_visible_dom,click,double_click,keypress,type,scroll,download_media}`                                                                                                                                                                                                                                                                                            |
| 外部浏览器              | `browsers_connect` `browsers_disconnect` `user_open_tabs` `user_claim_tab` `user_get_tab_context`                                                                                                                                                                                                                                                                                                                                                       |
| 会话/鉴权               | `auth_request`                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 文档                    | `documentation_get`                                                                                                                                                                                                                                                                                                                                                                                                                                     |

**差异（结构性）**：

1. 上游是**两层**：JS API（`api.json` 的接口树）＋ 34 个具名命令（§3），后者通常按同名暴露成 MCP 工具。
   本侧只有**一层**：`nodeRepl.rpc("browser", {action, target, payload})` 的动作名。
2. 本侧动作名对齐的是 `api.json` 的**语义**（`write→read`、`typeText→type`、`setValue→set_value`…），
   **不是**上游的命令名。实测在 `syntropy_node/control/*.go` 里 grep 上游命令名：
   `tab_cdp_call` / `tab_ax_action` / `tab_screenshot` / `tab_dev_logs` / `browser_viewport_set` /
   `browser_user_claim_tab` / `webmcp_invoke_tool` / `tab_browser_auth_handoff` **全部 0 命中**；
   只有 `browser_management_call` 有 2 处命中（在 `browser_capabilities.go` 的能力叙述里，不是可调用名）。
   → **结论：按上游工具名来对接本侧会全部落空；跨实现对照必须按语义比对。**
3. 本侧**更宽**的地方：`PlaywrightAPI.elementInfo/elementScreenshot`（上游 `documented:false`）在本侧是正式动作；
   `locator_*` 家族比上游 `PlaywrightLocator` 多出 `_value`/`_checked`/`_enabled`/`_visible`/`_all_text` 等读档动词。
   本侧**更窄**的地方：没有 `mcpapps` 后端，没有 `Tabs.new/selected` 的独立动作（合在 `new_tab`/`selected_tab`），
   没有 `TabDevAPI` 之外的 DevTools 面，`Browser.capabilities` 由单一 `capability_get` 承担。

## 6. 文档集差异（上游 28 篇 ↔ 本侧 22 篇）

| 上游有、本侧无                                                                                | 说明                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bootstrap-troubleshooting` / `chrome-troubleshooting` / `chrome-file-upload-troubleshooting` | 面向"扩展/CDP 版外部浏览器"的排障；本侧外部浏览器走 `browsers_connect`，没有这条链路                                                                                                                       |
| `mcp-apps`                                                                                    | 本侧无 `mcpapps` 后端，因此不需要                                                                                                                                                                          |
| `tab-claiming-chrome`                                                                         | 本侧对应能力在 `browserdocs` 里并入了 `browser-safety` / `confirmations`；**建议补一篇**（`user_open_tabs → user_claim_tab` 的语义与"未标记即解绑"目前只在代码与 [computer-use.md](computer-use.md) 里有） |
| `tab-cleanup-chrome`                                                                          | 本侧以 `tab-cleanup-cdp` 取代（命名不同、语义同源）                                                                                                                                                        |
| `tab-mentions-iab`                                                                            | **本侧缺**：`tab_mention_resolve` 动作已实现，但没有面向模型的"何时/如何用 mention 引用标签页"文档                                                                                                         |
| `capabilities/tab/browserAuth`（21.5 KB）                                                     | 本侧同名文档只有约 1/15 体量                                                                                                                                                                               |

## 7. 待办（给下一次做的清单）

1. 把 `browser_docs.go` 的声明表与上游 `documents.json` 做一次**逐条 diff**（本次只做了文件级清点）。
2. 补 `tab-claiming-*` 与 `tab-mentions-iab` 两篇文档（能力已实现、文档缺失，属"模型行为约束"缺口）。
3. 决定是否要提供上游那层**具名工具**（34 个命令名）作为别名，让按上游名对接的宿主不至于落空。
4. `api.json` 的 `documented:false` 档值得再挖一遍：那里可能还藏着"已实现但未文档化"的能力（本次只列了名称）。

## 8. 复现

```powershell
$b = "C:\Program Files\WindowsApps\OpenAI.Codex_26.928.4866.0_x64__2p2nqsd0c76g0\app\resources\plugins\openai-bundled\plugins\browser"
Get-ChildItem "$b\docs" -Recurse -File | Select-Object FullName,Length          # 28 篇文档 + api.json + documents.json
Get-Content "$b\docs\documents.json" -Raw -Encoding UTF8                        # 投递声明
Get-Content "$b\docs\api.json" -Raw -Encoding UTF8 | ConvertFrom-Json            # 接口树
Select-String -Path "$b\scripts\browser-client.mjs" -Pattern '"[a-z_]+_[a-z_]+"' # 命令名
# 本侧：
Select-String -Path syntropy_node\control\browser_executor.go -Pattern 'case "'  # 116 个动作名
```

---

## 9. 应用内浏览器（iab）实测：宿主真实服务集

2026-10-04 本轮实测（`browser` 动作，`target=iab`，宿主为 Syntropy 桌面应用；全程只读+两个自建标签页，结束时已全部关闭）。
下表每一行都来自真实调用返回，不是推断。

### 9.1 已服务（调用成功）

| 动作                                                      | 实测返回（摘）                                                                                                                                           |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`                                                    | `{opened:true, tab_id:"browser:74a009d7-…", url:"https://example.com"}`                                                                                  |
| `url` / `title`                                           | `https://example.com/` / `Example Domain`                                                                                                                |
| `read`                                                    | `"title: Example Domain\nurl: https://example.com/\n- 0: link \"Learn more\""`（编号树 + 头两行）                                                        |
| `click`                                                   | `{acted:"click", selector:"html > body > a", state:"{…\"url\":\"https://example.com/\"}"}`；随后 `url` 变为 `https://www.iana.org/help/example-domains`  |
| `evaluate`                                                | `Example Domains \| https://www.iana.org/help/example-domains`                                                                                           |
| `scroll`                                                  | `{acted:"scroll", direction:"down", pages:1, state:"{\"scrollX\":0,\"scrollY\":0,…}"}`                                                                   |
| `back`                                                    | `{acted:"back", state:"Navigated back."}`                                                                                                                |
| `reload`                                                  | `{acted:"reload", state:"Reloaded the page."}`                                                                                                           |
| `forward`                                                 | 被服务但在无前进栈时报宿主错误 `the in-app browser action failed`（**不是**"未服务"）                                                                    |
| `set_value`                                               | 报 `browser element index 0 is unknown on the in-app browser; call read first` → **在服务集内**，只是要求先 `read` 拿编号                                |
| `screenshot`                                              | 落盘 `…browser:<tab>-<ts>.png`（49,636 B）——**PNG**，而 CDP 三处已改 JPEG（[computer-use.md](computer-use.md) §8.2 的"顺带对齐"），两条链路格式不一致    |
| `tabs` / `new_tab` / `get_tab` / `selected_tab` / `close` | 标签页增删查正常；`close` 后 `tabs` 回 `[]`                                                                                                              |
| `mark_deliverable`                                        | `{mark:"deliverable", survives_turn:true}`；此后 `tabs` / `get_tab` 的条目**多一个 `mark` 键**（与上游 `BrowserTabInfo` 形状一致），未标记的条目形状不变 |
| `capability_get`                                          | 节点级服务：`management` 返回 `available:true` + 8 个方法名 + `unsupported:[bookmarks,tabGroups,getAuditTrail]`                                          |
| `documentation_get`                                       | 节点级服务：返回本节点文档集（`included` 10 / `lookup` 4 / `names` 22）+ 拼接正文（`# Browser surface on this node` …）                                  |

### 9.2 未服务（宿主逐动作拒绝，原文可复核）

拒绝文案统一为：`the in-app browser does not serve "<action>"; read / click / type / key / scroll / open / goto / close work on it`。

| 家族            | 实测被拒的动作                                                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 定位层          | `locator_text`（同族 `locator_*` / `element_info` / `dom_snapshot` 同源）                                                                                                                                          |
| 等待/历史       | `wait_for_timeout`、`expect_navigation`、`history`（`wait_for_load_state` / `wait_for_url` 未逐条测，按同一宿主能力位推断为同一档）                                                                                |
| 剪贴板/文本     | `paste`、`select_text`、`perform_secondary_action`、`drag`                                                                                                                                                         |
| 能力层          | `viewport_set`（`viewport_reset` / `visibility_*` / `webmcp_*` / `page_assets_*` / `content_export` / `bot_detection_report` 同族）                                                                                |
| 会话/标签页扩展 | `name_session`、`tab_mention_resolve`、`user_open_tabs`                                                                                                                                                            |
| 调试            | `logs`                                                                                                                                                                                                             |
| CDP             | `cdp_call` → `browser "iab" is not installed on this node (installed: chrome, edge)`（措辞有误导性：iab 装着，是 CDP 后端不适用；与 `capability_get("cdp")` 报 `available:true, methods:["evaluate"]` 也自相矛盾） |

### 9.3 三条需要修的语义问题（本轮新发现）

1. **`capability_get` 与 `documentation_get` 对 `documentation` 的说法不一致**：
   `capability_get("documentation")` 在 iab 上回 `available:false`（"the desktop app's webview does not expose this capability"），
   但 `documentation_get` 实际可用并返回完整 22 篇文档集。前者是按**宿主能力**判定，后者是**节点自带**能力，两者没对齐。
2. **宿主服务集没有进 `capability_get`**：iab 上 `capability_get` 只详细报告 `management`、`cdp`、`user` 三档，
   其余一律"webview does not expose"；而实测真正被服务的还有 `read/click/type/key/scroll/set_value/screenshot/evaluate/
back/forward/reload/title/url/tabs/new_tab/get_tab/selected_tab/close/mark_*`。
   今天模型只能靠"调用→被拒"来发现边界（上游是 `api.json` 的 `unsupportedByDefaultIn`，**提交前就知道**）。
   建议把这份"宿主服务集"写进 `capability_get`（哪怕只是一个动作名数组），让边界可预知。
3. **上游 API 面 ≫ 本侧 iab 宿主面**：上游 `api.json` 的 14 个接口 / 约 100 个成员里，iab 只"默认不提供"
   `Browser.user`、`Browser.history`、`Tabs.content`、`Tab.ax` 四项；本侧 iab 宿主不服务的动作有 20 余个
   （见 §9.2）。**这不是缺陷**——本侧是"宿主只服务它真做得到的一档"的诚实取舍，但差距值得写进产品说明，
   否则用户/模型会按上游文档预期 iab 能跑定位器与等待原语。

### 9.4 上游 vs 本侧 iab 的对照补记

| 维度                 | 上游 iab                                               | 本侧 iab                                      |
| -------------------- | ------------------------------------------------------ | --------------------------------------------- |
| 边界声明方式         | `api.json` 的 `unsupportedByDefaultIn`（静态、可预知） | 运行时逐动作拒绝 + 可执行提示（动态、事后）   |
| 无障碍树             | **不支持**（`Tab.ax` 在 iab 上 skip）                  | 支持（`read` 返回编号树 + diff）              |
| 定位层 / 等待 / 历史 | 支持（`playwright` 是 iab 上唯一可用的交互面之一）     | **不支持**（§9.2）                            |
| 截图格式             | JPEG                                                   | PNG                                           |
| 标签页 mark          | `markDeliverable` / `markHandoff` 生效（turn 作用域）  | 生效且形状对齐（实测 `mark:"deliverable"`）   |
| 文档投递             | 28 篇（13 included / 5 lookup / 10 model）             | 22 篇（10 / 4 / 8，实测 `documentation_get`） |

**一句话**：两边都"只服务自己做得到的一档"，但**服务的那一档不一样**——上游 iab 强在 Playwright 定位与等待原语、
弱在无障碍树；本侧 iab 正好相反。跨实现选型时这条比"有没有这个功能"更重要。

---

## 10. 受管 `chrome`（CDP）后端实测：同一批动作的对照面

2026-10-04 同一轮实测（`target=chrome`，节点自拉的受管实例；实例以 **headless** 方式运行，未弹出可见窗口；
结束时标签页已关闭）。这一节用来和 §9 的 iab 做**同一动作、两个后端**的对照。

### 10.1 实测结果

| 动作                                                        | iab（§9）                                | 受管 chrome（本节）                                                                          |
| ----------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| `open`                                                      | `{opened, tab_id, url}`                  | 返回 **AX 树**：`- RootWebArea "Example Domain"` + 6 段 paragraph + `- 6: link "Learn more"` |
| `locator_text`                                              | ❌ 未服务                                | ✅ `{count:1, text:"Learn more"}`                                                            |
| `dom_snapshot`                                              | ❌ 未服务                                | ✅ `{bytes:2358, html:"<html lang=\"en\">…"}`                                                |
| `viewport_set`                                              | ❌ 未服务                                | ✅ `{width:800, height:600}`                                                                 |
| `cdp_call`                                                  | ❌（`browser "iab" is not installed …`） | ✅ `Runtime.evaluate` 回 `{type:"string", value:"Example Domain"}`                           |
| `history`                                                   | ❌ 未服务                                | ✅ `{entries:[{at:"2026-10-04T09:20:55Z", title, url}]}`                                     |
| `logs`                                                      | ❌ 未服务                                | ✅ `{logs:[], truncated:false}`                                                              |
| `mark_deliverable`                                          | ✅ `{mark:"deliverable"}`                | ✅ 同                                                                                        |
| `screenshot`                                                | **`.png`**                               | **`.jpg`**（JPEG，与 [computer-use.md](computer-use.md) §8.2 的"三处改 JPEG"一致）           |
| `page_assets_list`                                          | ❌ 未服务                                | ✅ 资产清单（`s.js` + inline SVG，含来源归因 `attribute/property`）                          |
| `management_windows` / `management_tabs`                    | ❌ 未服务                                | ✅ 窗口 bounds + tab 列表（含 `mark` 键、`window_id`）                                       |
| `management_call`(bookmarks) / `management_get_audit_trail` | ❌ 未服务                                | ❌ **扩展未应答**，见 10.2                                                                   |
| `capability_get`                                            | 只详细报 management / cdp / user 三档    | 全套可查：`cdp`、`viewport`、`pageAssets`、`documentation`、`management`、`user`             |

`capability_get` 在受管档上的信息量（实测原文摘要）：

```text
cdp        available  headless:true  methods:[cdp_call, cdp_events, evaluate, page_evaluate]
           refused:[Browser.close, Browser.crash, Browser.quit, Browser.crashGpuProcess]
           scope:"the managed instance's own tab session; payload.session_id can address an attached child target, \"*\" means any session"
viewport   available  methods:[viewport_set, viewport_reset]
pageAssets available  methods:[page_assets_list, page_assets_bundle]
documentation available methods:[documentation_get] modes:[included, lookup, model] names:22 篇
           note:"text is this node's own documentation set … it is not the upstream Codex documentation"
management available  extension_bridge:false  namespaces:[windows, tabs, tabGroups, bookmarks]
           reason:"… bookmarks / tabGroups / getAuditTrail need the bundled browser extension and it is not answering in this instance (context deadline exceeded)"
user       unavailable methods:[browsers_connect, browsers_disconnect, user_open_tabs, user_claim_tab,
           user_get_tab_context, tab_mention_resolve]
           reason:"no external browser is attached: call browsers_connect with a DevTools endpoint … upstream reaches
           this through the ChatGPT browser extension and its native messaging host, which this node does not install or drive"
```

### 10.2 本轮新发现：随包扩展在受管实例上**没有应答**（与既有文档不符）

- [computer-use.md](computer-use.md) §8.2 记录的是：**"扩展独有的 tabGroups / bookmarks / auditTrail 已在受管实例上落地（A 级，本轮）"**，
  机制是"拉起实例时 `--load-extension` 装上随包 MV3 扩展，节点经同一条 CDP 连接附到它的 service worker 上"。
- 本次实测两条动作都失败，原文一致：
  `the Syntropy browser extension is not running in this instance: bookmarks / tab groups / the audit trail need the bundled
extension, which only the instances this node launches carry (an attached browser keeps its own extensions)`；
  `capability_get("management")` 另给出 `reason: … it is not answering in this instance (context deadline exceeded)`。
- 该实例**就是节点自己拉起的**（`headless:true`，节点管的 profile），所以"只有节点拉起的实例才带扩展"这句解释对不上现象。
  三个待查方向：① headless 模式下 `--load-extension` 未生效或 service worker 未被 attach；
  ② 扩展 bridge 的 attach 超时预算过短；③ 随包浏览器运行时版本与扩展不匹配。
  **建议单独立项复核**（这是"能力已宣称、实测不工作"的典型，优先级应高于任何新增能力）。

### 10.3 结论

1. **两档后端的分工在实测中成立**：iab = 宿主 WebView 的窄面（读/点/输/滚/跳转/标签页/截图/求值）；
   受管 CDP = 全套（原始 CDP、定位器、视口、资源采集、历史、日志、窗口/标签页管理）。
   §9.4 那句"两边都只服务自己做得到的一档，但服务的那一档不一样"在受管档上同样适用。
2. **`capability_get` 的分档粒度是本侧优于上游的地方**：`headless` / `extension_bridge` / `tab_count` / `transport` /
   `unsupported` / `refused` 这些字段让"哪一档为什么不行"当场可读；上游 `api.json` 只有布尔 `unsupportedByDefaultIn`。
   建议：把这套粒度推广到 iab 档（现在 iab 的可用动作集只能靠"调用→被拒"发现，见 §9.3 第 2 条）。
3. **一处不一致需要收口**：截图格式在 iab 是 PNG、在 CDP 是 JPEG。要么统一为 JPEG（与上游 browser 文档一致），
   要么在 `browserdocs/screenshots.md` 里写清"哪一档是什么格式"，别让模型按单一预期去解析。

---

## 11. 本轮实测暴露的两个缺陷（可直接复现）

### 11.1 iab 截图在 Windows 上落成 NTFS 备用数据流（图片实际不可见）

- 现象：`screenshot`（`target=iab`）返回 `{bytes:49636, path:"…\browser-screenshots\browser:74a009d7-6ae4-420b-8096-59a37ac3c020-1791105589044686500.png"}`。
  该"文件名"里的冒号来自标签页 id（`browser:<uuid>`），被原样当作文件名。
- Windows 后果：目录里只出现一个**名为 `browser`、长度 0 字节**的文件；
  真正的 PNG（49,636 B）落在它的**备用数据流**里：

```text
Get-Item $f -Stream *   #  $f = …\browser-screenshots\browser
Stream                                                         Length
:$DATA                                                              0
74a009d7-6ae4-420b-8096-59a37ac3c020-1791105589044686500.png  49636
```

- 影响：任何按返回路径去读图的消费者（用户、脚本、后续 agent）都会拿到 0 字节文件；
  同一条链路上 `locator_screenshot` / `element_screenshot` 若在 iab 上被服务，会踩同一个坑
  （受管 CDP 档的 id 形如 `tab-<hex>`，不含冒号，因此**不受影响**——实测 `tab-7db827aafba03aa2-….jpg` 正常落盘）。
- 建议：落盘文件名对 id 做转义（`:` → `_` 或去掉 `browser:` 前缀），并在 `browserdocs/screenshots.md` 记一句。
- 本轮取证：已把该数据流内容抽出来另存为 `codex_app_rev/.work/iab-page.png`（49,636 B，可正常打开）。

### 11.2 随包扩展在受管实例上未应答（见 §10.2）

`management_call` / `management_get_audit_trail` 失败，`capability_get("management")` 给出
`extension_bridge:false` + `reason: … not answering in this instance (context deadline exceeded)`。
与 [computer-use.md](computer-use.md) §8.2"已在受管实例上落地"的记载冲突，建议立项复核。

### 11.3 本轮留下的运行痕迹

- 两个标签页（iab 一个、受管 chrome 一个）都已 `close`，`tabs` 复核为空；
- 受管实例在回合结束后**没有残留进程**（按 `ExecutablePath` 过滤 `chrom*` 只剩用户自己的 Google Chrome）；
- 桌面侧只多了一个文件：`codex_app_rev/.work/iab-ui.png`（应用内浏览器 UI 的全屏截图，252,478 B）与
  `codex_app_rev/.work/iab-page.png`（页面截图）。两者都是 `.work/`（gitignore），不污染仓库。
