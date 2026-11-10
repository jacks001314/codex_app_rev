# 外部浏览器扩展链路（Browser Use / Chrome）

> 产出时间：2026-10-11。作者：Syntropy 通用 Agent。
> 采集对象：本机安装的 **`OpenAI.Codex 26.1007.2314.0`**（`C:\Program Files\WindowsApps\OpenAI.Codex_26.1007.2314.0_x64__2p2nqsd0c76g0`，主程序 `app\ChatGPT.exe`）。
> 触发问题：设置页「电脑操控 / Computer use」里的 **Google Chrome → 已安装浏览器扩展程序** 到底是什么原理。
> 证据分级沿用 [README.md](README.md)：**A** = 安装包 / 扩展包直接证据，**B** = 本仓库源码，**C** = 结构推断。

> 未做运行时插桩、未抓包、未反汇编原生二进制。所有结论来自静态产物与只读的注册表 / 文件系统检查。
> **本次只读取了目录名、文件名、大小、manifest 与 JS 字面量**；没有打开 Chrome 的
> Cookies / Login Data / Web Data / Local State 正文，没有读任何凭据、token、会话缓存或 SQLite。
>
> 唯一的例外是 §6.4–§6.6：为判定 `extension-host.exe` 的身份与它对扩展的接口，
> 对该二进制做了 **PE 头 / 段表 / 导入表 + NUL 结尾字符串收割**（`code/tools/pe-probe.mjs`、
> `.work/host-strings.mjs`），并**通读了它的对端**——扩展的 `background.js`（明文 JS）。
> 这属于**识别与接口发现**，不是反汇编——没有反汇编器参与，不还原控制流。

---

## 0. 一句话结论

「用 ChatGPT 控制 Chrome」**不是**让桌面应用去遥控 `chrome.exe`，而是把一个
**MV3 扩展装进用户自己的 Chrome 当遥控器**，该扩展用 Chrome 官方 API
`chrome.debugger`（即 **DevTools Protocol / CDP**）直接驱动被交付给它的标签页；
扩展与桌面应用之间用 **native messaging（原生消息，stdio JSON）** 接一条通道，
由随包的 `extension-host.exe` 承接。

这条链路上有三个独立的东西，任何一篇文章把三者混为一谈都会错：

| #   | 东西                                                                       | 在哪                                                             | 干什么                                                                |
| --- | -------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| 1   | **扩展** "ChatGPT"                                                         | 用户自己的 Chrome，来自 Chrome 应用商店                          | 持有 `debugger` 权限，对标签页发 CDP；渲染 Chrome 侧边栏里的 Codex UI |
| 2   | **原生消息宿主** `com.openai.codexextension` → `extension-host.exe`        | `…\plugins\openai-bundled\plugins\chrome\`                       | Chrome 按清单把它拉起，承接扩展的 stdio 消息，转给本机运行时          |
| 3   | **模型面运行时** `browser-client.mjs` / `browser-service.mjs` + Playwright | 同上 `plugins\chrome\scripts\`（`browser` 插件里有一份同源副本） | 给模型提供 `agent.browsers.*` API，把动作翻译成 CDP / Playwright 调用 |

截图里那行「已安装浏览器扩展程序」，判据只有两条：**扩展在 Chrome 里装着且启用**
（`check-extension-installed.js`），以及**原生消息清单 + 注册表项正确**
（`check-native-host-manifest.js`）。两者都是**静态检查**，不代表当时通信是通的。

---

## 1. 采集边界与包身份

| 项                       | 值                                                                               |
| ------------------------ | -------------------------------------------------------------------------------- |
| 包名 / 版本              | `OpenAI.Codex` / **`26.1007.2314.0`**（Publisher `CN=50BDFD77-…`）               |
| 安装根                   | `C:\Program Files\WindowsApps\OpenAI.Codex_26.1007.2314.0_x64__2p2nqsd0c76g0`    |
| 主程序                   | `app\ChatGPT.exe`（Electron 外壳，内嵌完整 Chromium `chrome.dll`）               |
| 插件版本                 | `chrome` / `browser` 两个插件的 `plugin.json` 均为 `26.1007.21434`               |
| 扩展（Chrome 商店）      | ID `hehggadaopoacecdllhhajmbjkdcmajg`，名称 `ChatGPT`，**版本 `1.26.901.11451`** |
| 扩展（Edge 加载项）      | ID `odlomjlbamekndcpllcnffbgeohgkmjh`                                            |
| 扩展（Codex beta，商店） | ID `lfkehkpjohcoelkpembgemeipeppanef`（`releaseChannel: beta`）                  |
| 原生消息宿主名           | `com.openai.codexextension`（dev / internal 加后缀 `.dev` / `.internal`）        |
| 清单目录（Windows）      | `%LOCALAPPDATA%\OpenAI\extension\com.openai.codexextension.json`                 |
| 注册表根（Windows）      | `HKCU\Software\Google\Chrome\NativeMessagingHosts`                               |
| 支持的浏览器族           | chrome / edge / brave / opera / vivaldi（`browserDiagnostics` 五族）             |

关键文件与 SHA-256（本机实算，只读）：

| 文件                                                                | 字节    | SHA-256                                                            |
| ------------------------------------------------------------------- | ------- | ------------------------------------------------------------------ |
| `AppxManifest.xml`                                                  | 8,634   | `D6A739D1B47E8FA38356B4FC40422A37D3DA5972D2E24A69E8FC3ECF19F69B74` |
| `plugins\chrome\extension-host\windows\x64\extension-host.exe`      | 879,408 | `35CF46D3966A98EE4EA0BEE2A572198E02A173CC0918AE6020DD936CEE5F674F` |
| `plugins\chrome\scripts\installManifest.mjs`                        | —       | `AD99F90B9A50203FE656413546F2050982AB88215B0227EBE53120F1D99D03B6` |
| `plugins\chrome\scripts\extension-ids.json`                         | 11,890  | `7E321E8C9D1CE0310EE144DE51198FCB25C0C42C0004C15AD095493DD384630A` |
| `plugins\chrome\scripts\browser-client.mjs`                         | 169,521 | `CE253A7FDAAAC7F1845283BE71A57510FEDA7422E7E7B2194A72EB2B2BA1522E` |
| `<Chrome profile>\Extensions\hehgg…\1.26.901.11451_0\manifest.json` | 2,801   | `D1EC11D7A07F5B4DBE9B72BC8209CDA4CD892D198BCAE4E2845A7198CDC6F652` |
| 同上 `background.js`                                                | 355,753 | `83B7B7708AB82ECC9AA2CCAD20A2167941A706B38A9467DEE0BB124D13F0033E` |

> ⚠️ 本机装的这个包比 [README.md](README.md) 里记录的最新的 `26.928.3736.0` **还要新一个 build**。
> 本文所有上游条目都按 `26.1007.2314.0` 陈述；引用 [browser.md](browser.md) /
> [computer-use.md](computer-use.md) 的结论时注意它们的基线是 26.928。

---

## 2. 端到端拓扑

```text
模型（Codex app 会话）
  │  node_repl `js` 工具
  ▼
agent.browsers.get("chrome"|"edge"|"iab"|"extension")     ← browser-client.mjs / setupBrowserRuntime()
  │
  ├── iab  ──▶ 应用内 webview（见 browser.md）
  └── extension / chrome / edge ──▶ 用户自己的 Chromium
            │
            ▼
     扩展 "ChatGPT" service worker (background.js)
            │  chrome.debugger.attach({ tabId }, "1.3")
            │  chrome.debugger.sendCommand(target, method, params)   ← 真正的 CDP
            │  chrome.debugger.onEvent → sendCdpEvent
            ▼
     被交付（mention / claimTab）的那个标签页
            ▲
            │  chrome.runtime.connectNative("com.openai.codexextension")
            │        ↕ stdio JSON（原生消息）
            │  extension-host.exe    ← Chrome 按 native host manifest 拉起
            │        ↕（逐跳承载方式见 §6.3，C 级）
            └─ 本机 app-server / node 运行时（extension-host-config.json 给出路径与 127.0.0.1 端口）
```

一句话读法：**CDP 是被扩展"注入"浏览器的**（扩展内部完成），而扩展的"控制面"走原生消息
回到桌面应用。两条通道方向不同、载体不同。

---

## 3. 桌面应用侧（A 级）

### 3.1 两个插件的分工

| 插件      | 目录               | displayName                                | 面向                                                 |
| --------- | ------------------ | ------------------------------------------ | ---------------------------------------------------- |
| `browser` | `plugins\browser\` | **Browser** — _Control the in-app browser_ | 应用内嵌浏览器（`iab`）、localhost 与 `file://` 目标 |
| `chrome`  | `plugins\chrome\`  | **Chrome** — _Control Chrome with ChatGPT_ | 用户自己的 Chrome / Edge 等                          |

两者的 `scripts/` 与 `docs/` 是**同源副本**（`browser-client.mjs` / `browser-service.mjs` /
`extension-ids.json` / `chromium-browser-diagnostics.mjs` / `docs\**`），
差异在 `skills/`：`browser` 是 `control-in-app-browser`，`chrome` 是 `control-chrome`。
`chrome` 插件多一样东西：`extension-host\windows\x64\extension-host.exe`。

`chrome\.codex-plugin\plugin.json` 的 `interface.longDescription` 是**面向用户的授权披露**原文（节选）：

```text
Chrome lets ChatGPT use your Chrome browser for tasks that need your existing browser state,
including open tabs, page content, and websites you're already signed into.
It can navigate, view, click, type, and take screenshots while working. You stay in control:
ChatGPT asks before interacting with new sites, you can stop actions at any time, and you can
manage or remove Chrome access in settings. … Browser data from using this plugin may be used
for training, subject to your OpenAI account data controls.
```

`defaultPrompt` 三条也直接说明了目标场景：`file my expenses for me` /
`review my messages on social media` / `put in a PTO request in Workday`。

### 3.2 `plugin.json` 里一条容易忽略的钩子

两个插件都注册了同一组 hooks，且**都指向 `node_repl` 的 `turn_ended`**：

```json
"hooks": { "hooks": { "Stop": [ { "hooks": [ {
  "type": "mcp_tool", "server": "node_repl", "tool": "turn_ended",
  "input": { "hook_event_name": "${hook_event_name}", "session_id": "${session_id}", "turn_id": "${turn_id}" }
} ] } ] } }
```

即：**turn 结束 / 被打断 / 子 agent 停止**（`Stop` / `Interrupt` / `SubagentStop`）时，
浏览器运行时会被通知一次。这与 [browser.md](browser.md) 记的「Agent 开的标签页在回合结束回收」
是同一件事的机械实现——回收不是由 UI 触发的，而是由 hook 触发的。

### 3.3 扩展身份与宿主安装：`extension-ids.json` + `installManifest.mjs`

`scripts\extension-ids.json` 是**单一事实源**（插件、诊断脚本、扩展 bundle 自身各有一份副本）：

```json
{
  "extensionIds": ["hehggadaopoacecdllhhajmbjkdcmajg", "odlomjlbamekndcpllcnffbgeohgkmjh"],
  "extensionHostName": "com.openai.codexextension",
  "windowsNativeMessaging": {
    "manifestDirectory": "AppData/Local/OpenAI/extension",
    "registryRoot": "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts"
  }
}
```

`scripts\installManifest.mjs`（压缩版，字符串字面量完整）做四件事：

1. **解析宿主二进制**：`extension-host/{macos|windows|linux}/{arm64|x64}/…`；
   macOS 侧名字是 `ChatGPT for Chrome`，Windows 是 `extension-host.exe`，Linux 是 `extension-host`。
2. **写原生消息清单**到每个目标目录（Windows 只有一个：`AppData/Local/OpenAI/extension`）：

```json
{
  "allowed_origins": [
    "chrome-extension://hehggadaopoacecdllhhajmbjkdcmajg/",
    "chrome-extension://odlomjlbamekndcpllcnffbgeohgkmjh/"
  ],
  "description": "ChatGPT browser native messaging host",
  "name": "com.openai.codexextension",
  "path": "<…>\\extension-host\\windows\\x64\\extension-host.exe",
  "type": "stdio"
}
```

3. **写 Windows 注册表**（这就是截图那行状态背后的东西）：

```text
reg add HKCU\Software\Google\Chrome\NativeMessagingHosts\com.openai.codexextension \
        /ve /t REG_SZ /d <manifestPath> /f
```

4. **写宿主配置** `extension-host-config.json`（与宿主二进制同目录）：

```json
{
  "schemaVersion": 1,
  "channel": "prod",
  "browserClientPath": "<plugin>\\scripts\\browser-client.mjs",
  "codexCliPath": "<…>",
  "nodePath": "<…>",
  "nodeReplPath": "<…>",
  "proxyHost": "127.0.0.1",
  "proxyPort": 0
}
```

`proxyPort: 0` 是**临时端口**约定（代码里校验范围是 `0–65535`，且 `allowZero`）。
`proxyHost` / `proxyPort` 组合起来就是「宿主该去哪里找本机运行时」。

另外 `installManifest.mjs` 里内建了一组采集上限常量，可作为"这条链路允许多大的数据"的旁证：
`fetchTimeoutMs: 8000`、`maxItems: 5000`、`maxJsonBytes: 5 MiB`、`maxTextBytes: 500000`、
`observationTimeoutMs: 4000`。

### 3.4 发行渠道矩阵（A 级）

| channel    | 宿主名                               | 加载方式                                                                                        |
| ---------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `dev`      | `com.openai.codexextension.dev`      | `local-development`（`file`）+ `managed-self-hosted`（`file`）+ Codex beta 商店扩展             |
| `internal` | `com.openai.codexextension.internal` | `managed-self-hosted`（`file` + `blobstore`）+ Codex beta 商店扩展                              |
| `prod`     | `com.openai.codexextension`          | `managed-self-hosted`（`file`）+ **Chrome 应用商店**扩展 `hehgg…`（Edge 走加载项商店 `odlom…`） |

这说明除"商店安装"外，还备着 **`managed-self-hosted` 形态的离线分发**
（`outputModes: ["file","blobstore"]`），用于企业 / 受管环境。

### 3.5 诊断脚本的判据（决定了 UI 上那几个字怎么来的）

| 脚本                            | 它检查什么                                                                                                                                                                         | 退出码语义                                          |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `check-extension-installed.js`  | 逐个 profile 读 `Preferences` / `Secure Preferences` 的 `extensions.settings`，并看 `<profile>\Extensions\<id>\<version>` 是否存在（`state==0` 或 `disableReasons` 非空 = 已禁用） | 0 已装且启用 / 1 已装未启用 / 2 未装 / 3 运行时错误 |
| `check-native-host-manifest.js` | 注册表默认值指向的清单是否存在、`name` 是否等于宿主名、`allowed_origins` 是否覆盖全部 extension id、注册表路径与清单路径是否一致                                                   | 0 全部正确 / 1 存在缺失或错误 / 2 用法错误          |
| `chrome-is-running.js`          | 目标浏览器进程在不在                                                                                                                                                               | 0 运行中 / 1 未运行 / 2 用法错误                    |
| `installed-browsers.js`         | 五族里哪些装了                                                                                                                                                                     | —                                                   |
| `open-chrome-window.js`         | 用选定 profile 打开 `about:blank`；支持 `--dry-run` 只打印命令                                                                                                                     | —                                                   |

可覆盖的环境变量（只读调试用）：`CODEX_CHROMIUM_USER_DATA_DIR`、
`CODEX_CHROMIUM_PREFERENCES_PATH`（遗留别名 `CODEX_CHROME_*`）、
`CODEX_CHROMIUM_NATIVE_HOST_MANIFEST_PATH`。

### 3.6 插件自带的模型面文档

`docs\` 下有 **28 篇 markdown**（顶层 20 篇 + `capabilities\browser\` 3 篇 +
`capabilities\tab\` 5 篇，与 `documents.json` 里 `documents: 28` 一致），
外加 `api.json`（66,289 B）与 `documents.json`（3,899 B，声明每篇的投递方式）。
其中 `browserAuth.md` 独占 21,464 B。这些是本条链路的**权威行为文档**，§6、§7 会直接引用。

---

## 4. 浏览器侧：装进 Chrome 的那个扩展（A 级）

### 4.1 manifest 全貌（`manifest_version: 3`）

```json
"name": "ChatGPT",
"description": "Control your browser with ChatGPT.",
"version": "1.26.901.11451",
"minimum_chrome_version": "116",
"update_url": "https://clients2.google.com/service/update2/crx",
"background": { "service_worker": "background.js" },
"side_panel": { "default_path": "codex-sidepanel/index.html" },
"commands": { "_execute_action": { "suggested_key": { "default": "Ctrl+Shift+Period" } },
              "open-codex-side-panel": { "description": "Open ChatGPT side panel" } },
"host_permissions": ["<all_urls>"],
"optional_permissions": ["downloads.open"],
"content_scripts": [
  { "matches": ["https://chatgpt.com/*"], "js": ["content-scripts/chatgpt-website.js"], "run_at": "document_end" },
  { "matches": ["https://chatgpt.com/*"], "js": ["content-scripts/codex-work-media-permission.js"],
    "run_at": "document_start", "all_frames": true, "world": "MAIN" } ]
```

**权限清单**（原文，逐项）：

```text
alarms  bookmarks  debugger  declarativeNetRequestWithHostAccess  downloads  favicon  history
nativeMessaging  notifications  scripting  sessions  storage  tabGroups  tabs  topSites
webNavigation  contextMenus  sidePanel
```

其中两项是**这条链路的根**：

- `debugger` —— 唯一能拿到 `chrome.debugger`（完整 CDP）的权限。没有它，这条路不存在。
- `nativeMessaging` —— 唯一能 `connectNative` 到本地宿主的权限。

其余权限基本一一对应 [browser.md](browser.md) §2.3 记的那些设置面：书签 / 标签组 / 历史 /
下载 / 会话（最近关闭）/ 顶栏常访站点 / favicon / 侧边栏 / 右键菜单。

`content_security_policy.extension_pages` 的 `connect-src` 白名单是**本机地址 + OpenAI 域名**：

```text
connect-src 'self' http://127.0.0.1:* http://localhost:* ws://127.0.0.1:* ws://localhost:*
            https://ab.chatgpt.com https://chatgpt.com https://api.openai.com https://api.openai.org
```

### 4.2 包里有什么

| 路径                                             | 字节       | 说明                                                                                                     |
| ------------------------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------- |
| `background.js`                                  | 355,753    | MV3 service worker，全部浏览器控制逻辑                                                                   |
| `manifest.json`                                  | 2,801      | 见 §4.1                                                                                                  |
| `codex-sidepanel\index.html`                     | 4,777      | 侧边栏入口；`data-codex-window-type="chrome-extension"`，`<title>ChatGPT</title>`                        |
| `codex-sidepanel\assets\*`                       | 1,583 文件 | 整个 Codex/ChatGPT 前端（React、shiki 语言包、walnut PDF 解码 worker 等）；扩展包共 1,636 个文件         |
| `content-scripts\chatgpt-website.js`             | 17,039     | chatgpt.com 上的桥接脚本                                                                                 |
| `content-scripts\codex-work-media-permission.js` | 1,872      | `world: "MAIN"`，处理媒体权限                                                                            |
| `content-scripts\codex.js`                       | 35,143     | **未在 manifest 声明**，应由 `chrome.scripting` 主动注入（C 级）                                         |
| `content-scripts\foreign-frame-monitor.js`       | 5,158      | 同上，跨域 iframe 监视（C 级）                                                                           |
| `codex-work-sidepanel.html`                      | 596        | 另一处侧栏壳                                                                                             |
| `codex\build-info.json`                          | 116        | `{"build_flavor":"release","release_channel":"stable","sha":"834ab2c3159a7637c75db757ad053344da009e8b"}` |

`codex-sidepanel\assets\` 里有两件值得单独记的东西：

- `chrome-extension-app-server-transport-*.js`（28,433 B）——**侧边栏与本机 Codex app-server 的传输层**，
  内含 `__codex_sidepanel_initialize__`、`0.140.0-alpha.21` / `0.141.0` 版本号、
  `Codex app-server transport is disconnected`、`SAVE_TAB_CONTEXT_ASSET_{CREATE,APPEND_CHUNK,FINISH,ABORT}`。
  也就是说：**Chrome 的侧边栏是一个完整的 Codex 会话界面**，不是轻量控件。
- `agent-activity-units-*.js`、`app-server-manager-signals-*.js`、`chatgpt-conversation-client-*.js` ——
  活动时间线、app-server 连接管理、会话客户端。

### 4.3 service worker 里的几个生命周期钩子

| 钩子                         | 行为（A 级字面量）                                                                                                    |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `chrome.runtime.onInstalled` | 安装时打开 `${chatgptOrigin}/work/extension/installed`                                                                |
| `chrome.alarms`              | 建一个 `client-heartbeat-alarm`，`periodInMinutes: 0.5`（即 30 秒）                                                   |
| 重连                         | 原生消息端口断开后走 `runReconnectAttempt()` + `clearReconnectAlarm()`，失败时 `selectFallbackApplication()` 换宿主名 |

> 30 秒心跳 + 退避重连说明：**原生消息端口是会被 Chrome 回收的**（service worker 休眠、
> 浏览器重启都会断），所以"装了扩展"和"当前能控制"是两件不同的事——这正是
> `chrome-troubleshooting.md` 要求"首个任务先做一次轻量调用、失败等 2 秒重试一次"的原因。

---

## 5. 扩展如何驱动浏览器（A 级）

这段是整条链路的答案：**它就是 CDP，而且是几乎没有包装的 CDP**。

### 5.1 attach / sendCommand / onEvent

`background.js` 里的实现（按语义去压缩命名）：

```js
// attach：对标签页，或对子目标（iframe / OOPIF）
async function attachTab(tabId, …) {
  try { await chrome.debugger.attach({ tabId }, "1.3") } catch (e) { if (!isAlreadyAttached(e)) throw e }
  …
}
async function attachTarget(targetId, sessionId) {
  try { await chrome.debugger.attach({ targetId }, "1.3") } catch (e) { if (!isAlreadyAttached(e)) throw e }
}

// send：Target.getTargets 有专用 API，其余原样转发
function sendCdp(req) {
  if (req.method === "Target.getTargets") return chrome.debugger.getTargets().then(r => ({ targetInfos: r }));
  const target = typeof req.target.targetId === "string" ? { targetId: req.target.targetId } : req.target;
  return chrome.debugger.sendCommand(target, req.method, req.commandParams);
}

// events：正向上报给运行时
chrome.debugger.onEvent.addListener((source, method, params) => hub.sendCdpEvent({ source, method, params }));
chrome.debugger.onDetach.addListener(v => hub.sendCdpDetach(v));
```

要点：

1. **协议版本写死 `"1.3"`**（`chrome.debugger` 接受的版本号）。
2. **有超时包装**（给每条命令套 `Promise.race` 超时）——CDP 里有些命令会挂很久。
3. **子目标（iframe / OOPIF）走 `targetId`**：从 `Target.attachedToTarget` 事件拿
   `sessionId` / `targetId` 后再 attach 一次。这与 `docs\capabilities\tab\cdp.md` 里写的
   `Discover child target selectors from Target.attachedToTarget events` 完全吻合。
4. **`onDetach` 被单独上报**（`sendCdpDetach`），即"调试会话断开"在运行时侧是**一等事件**，
   不是被降级成普通错误。

### 5.2 直接 grep 到的 CDP 方法

扩展 bundle 里能直接命中的 CDP 方法名很少，因为绝大多数方法名是**运行时传进来的字符串**：

```text
Emulation.setDeviceMetricsOverride      Emulation.clearDeviceMetricsOverride
Target.getTargets                       Target.closeTarget        Page.close
```

它们分别对应 `docs\capabilities\browser\viewport.md`（视口 / 设备模拟）与
`docs\tab-cleanup-chrome.md`（收尾时关标签页）。

### 5.3 Playwright 语义是**在扩展里实现**的

最容易误解的一点：模型看到的是 `tab.playwright`（locator 风格），
但 **Playwright 并不直接接触浏览器**。扩展 bundle 里有一整组 `playwright_locator_*` 方法名：

```text
playwright_locator_click          playwright_locator_dblclick        playwright_locator_fill
playwright_locator_press          playwright_locator_press_sequentially
playwright_locator_set_checked    playwright_locator_select_option   playwright_locator_wait_for
playwright_locator_count          playwright_locator_read_all        playwright_locator_all_text_contents
playwright_locator_inner_text     playwright_locator_text_content    playwright_locator_get_attribute
playwright_locator_is_visible     playwright_locator_is_enabled      playwright_locator_download_media
playwright_evaluate
```

这一层的语义（严格模式、等待可操作性、可见性判定）由扩展在页面里实现，CDP 只是底座。

### 5.4 其余能力的方法名（同一批字面量，全部 A 级）

| 方法名                                                                               | 对应能力（见 `docs\capabilities\**`）                                                                     |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `tab_cdp_call` / `tab_cdp_events`                                                    | `tab.capabilities.get("cdp")` 的 `send` / `readEvents`                                                    |
| `tab_page_assets_list` / `tab_page_assets_bundle`                                    | `pageAssets.list()` / `bundle()`（字体、图片、样式、视频 + 内联 SVG）                                     |
| `tab_bot_detection_report`                                                           | `botDetection.report()`，**只记 hostname**，不记完整 URL                                                  |
| `tab_browser_auth_handoff`                                                           | 登录交接（`browserAuth.md`，21,464 B，全套里最大的一篇）                                                  |
| `browser_management_call` / `browser_management_get_audit_trail`                     | `browser.capabilities.get("management")`：Chrome 兼容的 windows / tabs / tabGroups / bookmarks + 审计轨迹 |
| `browser_viewport_set` / `browser_viewport_reset`                                    | `viewport` 能力                                                                                           |
| `browser_visibility_get` / `browser_visibility_set`                                  | `visibility` 能力（要不要把浏览器显示出来）                                                               |
| `browser_tab_mentions_invalidated`                                                   | 用户 mention 的标签页失效通知                                                                             |
| `native_host_unreachable` / `browser_offline` / `chrome_extension_update_required`   | 三条健康状态上报                                                                                          |
| `codex_chrome_extension_{sidechat_open,toolbar_state,app_server_connection_failure}` | 侧边栏 UI 遥测                                                                                            |

---

## 6. 传输通道：原生消息是主干（A 级），逐跳衔接是 C 级

### 6.1 确定的部分

- 扩展侧：`chrome.runtime.connectNative(this.application)`，`application` 取
  `com.openai.codexextension`（或 `.dev` / `.internal`），失败时 `selectFallbackApplication()`。
  **这是扩展唯一的本机通道**。
- Chrome 侧：按 `NativeMessagingHosts\com.openai.codexextension` 的清单拉起
  `extension-host.exe`，`type: "stdio"`，`allowed_origins` 限定到具体 extension id。
- 宿主侧：`extension-host.exe` 从同目录的 `extension-host-config.json` 拿
  `nodePath` / `nodeReplPath` / `browserClientPath` / `codexCliPath` 与 `127.0.0.1:<port>`。
- 运行时侧：`browser-client.mjs` 暴露 `setupBrowserRuntime()`；`browser-service.mjs`
  （1,450,470 B）是本地服务端，含 `listen` / `localhost` / `"host"` / `"port"` / `token` 字面量
  ——即一个**带 token 的本机 HTTP 服务**。

### 6.2 一条**排除**结论（避免以讹传讹）

随包的 Playwright（`resources\cua_node\…\node_modules\playwright`）确实带了一套 CDP 中继：

| 文件                                           | 内容                                                                                                                                                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lib\mcp\extension\cdpRelay.js`                | `CDPRelayServer`：起 HTTP server，暴露 `/cdp/<uuid>`（给 Playwright）与 `/extension/<uuid>`（给扩展），`forwardCDPCommand` / `forwardCDPEvent` / `attachToTab`           |
| `lib\mcp\extension\extensionContextFactory.js` | `chromium.connectOverCDP(relay.cdpEndpoint())`，并 `spawn` 浏览器打开 `chrome-extension://jakfalbnbhgkpmoaakfflhflbfpkailf/connect.html?mcpRelayUrl=…&protocolVersion=1` |

但**装进用户 Chrome 的那个扩展里没有 `WebSocket` 字面量**，宿主名也不是
`jakfalbnbhgkpmoaakfflhflbfpkailf`（那是上游 Playwright MCP 自己的 bridge 扩展，
与 OpenAI 的扩展不是同一个东西）。它出现的 `http://127.0.0.1` / `http://localhost`
只是**内容脚本注入的 origin 白名单**（dev / staging 用）：

```js
const prodOrigin = "https://chatgpt.com",
  stagingOrigin = "https://chatgpt-staging.com";
const devOrigins = ["http://localhost", "http://127.0.0.1"];
```

**不要把 `cdpRelay.js` 当作"Chrome 扩展链路"的证据。** 它只说明 OpenAI fork 的 Playwright
具备这套原语，推不出线上链路走 WebSocket。

### 6.3 曾经的两条推断，现已结案

| 原推断                              | 结论                                                     | 依据                                                                                                                                                  |
| ----------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extension-host-config.json` 由谁读 | **A 级：宿主自己读**                                     | 该文件名连同 `schemaVersion` / `proxyHost` / `proxyPort` / `codexHome` 等键就在 `extension-host.exe` 的字面量里（§6.4、§6.6）                         |
| `proxyHost` / `proxyPort` 指向谁    | **A 级：宿主给 Codex app-server 绑的本机 HTTP 代理端口** | `failed to bind Codex app-server proxy to …` / `Codex app-server proxy connection failed` / `connection closed before HTTP headers completed`（§6.6） |

**仍未确认的一条**：`tab_cdp_call` / `tab_cdp_events` 这两个方法名到底走哪条通道——扩展的
静态调用点里没有它们（9 个调用点全是 `codexRuntime/*` + `ping`），而 CDP 事件是通过另一族
方法名（`sendCdpEvent` → `onCDPEvent` 通知）发出的，且那一族挂在一个**可插拔 transport**
的 JSON-RPC 客户端上（`this.transport.sendMessage`），不是 §6.1 的原生消息端口。
要坐实只能做运行时观测或读宿主控制流。**本文不猜。**

### 6.4 宿主二进制 `extension-host.exe` 是什么（A 级）

身份：**Windows x86-64 控制台程序（PE32+ / `WINDOWS_CUI`），用 Rust 写的、MSVC 目标**。

| PE 事实         | 值                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| machine / magic | `x86-64` / `PE32+ (64-bit)`                                                                                   |
| subsystem       | `WINDOWS_CUI`（控制台程序，无窗口——与 stdio 宿主一致）                                                        |
| sections        | 6 个：`.text` `.rdata` `.data` `.pdata` `.fptable` `.reloc`                                                   |
| 资源目录        | **无**（所以 `Get-Item \| Select VersionInfo` 全是空——版本信息被剥掉了）                                      |
| 时间戳          | `2026-10-08T23:06:15Z`（`0x6ac821e7`）                                                                        |
| 导入 DLL        | 只有 7 个：`kernel32` `api-ms-win-core-synch-l1-2-0` `shell32` `bcryptprimitives` `KERNEL32` `ntdll` `WS2_32` |
| 大小            | 879,408 B                                                                                                     |

**判定为 Rust 的证据**（全部为二进制内字面量）：

```text
rustc/8bab26f4f68e0e26f0bb7960be334d5b520ea452     ← 编译它的 rustc commit
.cargo        RUST_BACKTRACE
library\alloc\src\collections\btree\navigate.rs
library\std\src\sync\mpmc\{mod,context,waker,array,list,zero}.rs
library\std\src\thread_local\native\lazy.rs
library\std\src\io\mod.rs
```

即 **符号没有被剥**：std 的 panic / unwind 路径字符串还在（这也是为什么体积只有 859 KB
而字符串表里能翻出几 MB 的源码路径）。`std::sync::mpmc` 属于较新的 std（`mpsc` 由它支撑），
但要不要把它换算成具体 rustc 版本需要联网解析那个 commit，本文不做（C 级不猜）。

**项目自身的痕迹同样漏出来了**（反斜杠 = 本项目源码树，与上面的 `library\...` 工具链路径可区分）：

```text
src\client_writer.rs
extension-host-client        extension-host-config
extension-host-disconnect    extension-host-writer
client writers mutex poisoned
```

再加上配置键 `extension-host-config.json` / `schemaVersion` / `proxyHost` / `proxyPort` /
`browserClientPath` / `codexCliPath` / `nodeReplPath` 都在二进制里 —— 它就是这个配置文件的
**消费方**（此前 §6.3 的推断，现为 A 级）。

**反向证据（同样有价值，A 级）**：`com.openai.codexextension`、`allowed_origins`、
`ChatGPT browser native messaging host` 都**不在**二进制里。也就是说宿主名没有硬编码，
由 Chrome 按 native host manifest 拉起时从参数 / 清单得到。

**它做 TCP，且会把 socket 交给别的进程**（导入表 + 符号字面量）：

```text
WS2_32  →  WSASocketW   WSADuplicateSocketW   getaddrinfo   socket
```

### 6.5 宿主与扩展之间的协议：JSON-RPC 2.0（A 级）

**不是自定义协议**。扩展侧的实现（去压缩后）在 `background.js` 里完整可读：

```js
// 请求：id 前缀固定，便于识别"迟到的回执"
requestHost(method, params, { timeoutMs }) {
  const id = `native-host:${++this.nextHostRequestId}`;   // 常量 Sg="native-host:"，正则 Tg=/^native-host:\d+$/
  port.postMessage({ jsonrpc: "2.0", id, method, ...(params === undefined ? {} : { params }) });
}

// 响应：无 id 即通知；有 id 即应答；迟到的按前缀吞掉
handleHostResponse(msg) {
  if (!("id" in msg)) return false;                       // 通知 → messageCallback
  const pending = this.takePendingHostRequest(String(msg.id));
  if (pending) {
    if ("error" in msg) pending.reject(new NativeHostRequestError(msg.error.message, msg.error.data));
    else if ("result" in msg) pending.resolve(msg.result);
  }
  return Tg.test(id) && ("error" in msg || "result" in msg);
}
```

宿主那边也印证了：二进制里有一段它自己构造的响应，连序列化失败都按 JSON-RPC 规范回：

```text
{"jsonrpc":"2.0","id":null,"error":{"code":1,"message":"Failed to serialize native host response: …
```

**宿主的方法表**（扩展的 9 个静态调用点 + 二进制里的分发表，两边一致；方法名在二进制里因
LLVM 字符串合并而被叠在一起，以下为还原后的集合）：

| method                                                     | 参数                    | 超时 | 作用                                                            |
| ---------------------------------------------------------- | ----------------------- | ---- | --------------------------------------------------------------- |
| `ping`                                                     | —                       | —    | 保活                                                            |
| `codexRuntime/hello`                                       | `{constraints}`         | 5 s  | 握手 + **协议版本协商**（二进制有 `supportedProtocolVersions`） |
| `codexRuntime/ensure`                                      | `{constraints, cli?}`   | —    | 确保 / 拉起 codex 运行时                                        |
| `codexRuntime/restart`                                     | 同上                    | —    | 重启运行时                                                      |
| `codexRuntime/status`                                      | —                       | —    | 运行时状态（扩展的静态调用点里没有，属动态调用）                |
| `codexRuntime/openLocalFile`                               | `{path}`                | 10 s | 打开本地文件                                                    |
| `codexRuntime/tabContextAsset/create`                      | `{fileName}`            | —    | 建资产                                                          |
| `codexRuntime/tabContextAsset/appendChunk`                 | `{assetId, dataBase64}` | —    | **分片追加**                                                    |
| `codexRuntime/tabContextAsset/finish` / `abort` / `remove` | `{assetId}`             | —    | 收尾 / 中止 / 删除                                              |

反向也有：宿主**主动向扩展发请求**，扩展用 `registerRequestHandlerObject` 注册应答者
（已知 `moveMouse`、`webMcpToolInvoked`）；扩展向宿主推**通知**（无 id）：
`onCDPEvent`、`onCDPDetach`、`onDownloadChange`、`onPageEvent`、`onBrowserTabMentionsInvalidated`。

**重连与保活常量**（A 级）：

```text
Sg = "native-host:"            wg = "native-transport-reconnect"（alarm 名，拼接宿主名）
Pr = 5000                      yg = 0.5（alarm periodInMinutes，为了熬过 MV3 worker 回收）
Tg = /^native-host:\d+$/
错误类：NativeHostRequestError{errorType} / NativeHostRequestTimeoutError{method,timeoutMs}
        / NativeTransportConnectionError
状态：{state: connected|disconnected|reconnecting, hostName, lastChecked, reconnectAttempt}
```

错误码字符串里与本链路直接相关的：`native_host_unreachable`、`manifest_invalid`、
`manifest_required_field_invalid`、`chrome_extension_update_required`、`codex_app_update_required`
（另有 `app_server_*` 与 `websocket_connection_failed`，属于侧边栏那条链）。

### 6.6 纠正 §6.4 的两处结论（A 级）

宿主二进制的日志文案把它真正的职责说全了，此前"带配置来源的 stdio ↔ TCP 转接器"这个描述**是错的**：

```text
extension-host: stdin read failed; exiting: …      /  stdout write failed; exiting: …
extension-host: app-server stderr: …               /  app-server stdout read failed: …
extension-host: Codex app-server proxy connection failed: …
extension-host: failed to bind Codex app-server proxy to …
extension-host: dropped app-server message while side panel is detached
connection closed before HTTP headers completed
extension-host: failed to prepare client message: … / failed to route platform message: …
codex-tab-context-assets   tab-context.txt   preferred-non-full-access-agent-mode-by-host-id
chrome-native-hosts-v2.json   OpenAI   Codex   origin   LOCALAPPDATA
```

于是它的真实职责是**四件事**，而不是当管道：

| #   | 职责                                                                                                      | 证据                                                                                                                    |
| --- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1   | stdio 上的 JSON-RPC 2.0 端点（对 Chrome / 扩展）                                                          | §6.5                                                                                                                    |
| 2   | **codex 运行时的进程管理**：spawn app-server，转发它的 stdout / stderr                                    | `app-server stderr:` / `stdout read failed`                                                                             |
| 3   | **给 app-server 绑一个本机 HTTP 代理端口**（`proxyHost` / `proxyPort` 就是它），侧边栏经它访问 app-server | `failed to bind Codex app-server proxy` / `proxy connection failed` / `connection closed before HTTP headers completed` |
| 4   | **tab 上下文资产的落盘暂存**（`codex-tab-context-assets/`，base64 分片写文件）                            | `tabContextAsset/*` + `tab-context.txt`                                                                                 |

这也终于解释了 `WSADuplicateSocketW` 的用途：把 accept 到的 socket 交给子进程（app-server），
而不是"把 socket 转给 node 运行时"。

**同时纠正 §4.2 之外的一处判断**：`SAVE_TAB_CONTEXT_ASSET_APPEND_CHUNK` 那套分片
**不在侧边栏走 HTTP 的那条链上**，而是 `codexRuntime/tabContextAsset/appendChunk {dataBase64}`
——**就走原生消息**。所以"大 payload 别放 stdio"这个判断成立，但理由不是"上游没这么做"，
恰恰相反：上游正是因为原生消息帧有上限才要分片。

**PDB**：`extension_host.pdb`（crate 名 `extension_host`，RSDS GUID `fdd5583d03b47d489715260d0c6f4d7e`，
age 1）。没漏源码目录，只漏了文件名——比预期干净。

**一处读写不一致（值得留意）**：`installManifest.mjs` 写配置时只写
`browserClientPath / codexCliPath / nodePath / nodeReplPath / proxyHost / proxyPort`，
而宿主读的是**含 `browserServicePath` 与 `codexHome` 的超集**；并且
`chrome-native-hosts-v2.json` / `browserServicePath` / `codexHome` 在插件 JS 里**一处引用都没有**。
要么宿主容忍缺键，要么还有第二个写入方。这条链的配置契约在它们内部并未被单一化——
这也是我们该自己写宿主的一个理由。

> `.fptable` 不是常见 MSVC 默认段名，未深究（不猜）；`bcryptprimitives` 暗示用到系统 RNG
> （token / 随机名一类），但没有证据说明用在哪。
>
> 本节的做法是**读对端的明文 JS + 收宿主二进制的字符串**，没有反汇编、没有还原控制流。
> 工具：`code/tools/pe-probe.mjs`；一次性字符串收割脚本在 `.work/host-strings.mjs`（不入库）。
> 落地规划见 [browser-extension-plan.md](browser-extension-plan.md)。

---

## 7. 模型面 API 与"交付"语义（A 级）

### 7.1 四种后端

`browser-client.mjs` 里的 schema 直接给出后端类型：

```ts
type = enum(["iab", "extension", "cdp", "mcpapps"])
metadata = { extensionInstanceId?: string, codexSessionId?: string }
```

| 选择器                                         | 语义                                                         |
| ---------------------------------------------- | ------------------------------------------------------------ |
| `agent.browsers.get("iab")`                    | 应用内嵌浏览器                                               |
| `agent.browsers.get("chrome")` / `get("edge")` | 按浏览器族取（explicit 请求时用，稳定选择器，不传不透明 ID） |
| `agent.browsers.get("extension")`              | 用户说"用我的外部浏览器"但没点名族时，取第一个已连接扩展实例 |
| `agent.browsers.getForUrl(url)`                | 没点名族但有目标 URL 时由运行时挑                            |
| `agent.browsers.getDefault()`                  | 都没说时用默认（优先 iab，否则 Chrome）                      |

拿到句柄后必须**整篇**读 `await browser.documentation()`——`control-chrome` skill 明文要求
`emit and read the complete documentation returned by its documentation() call in one go`，
不许截断、摘要或分页。

### 7.2 mention 协议决定"控制哪一个标签页"

`docs\tab-claiming-chrome.md` 给出两类入口，都是**用户显式交付**，不是模型自己挑：

```text
plugin://browser@openai-bundled?mention=tab-v1&source=extension&browserId=…&tabId=…&title=…&url=…
plugin://chrome@openai-bundled?mention=tab-v1&browserId=…&tabId=…&title=…&url=…
```

流程：`agent.browsers.list()` → 取 `metadata.extensionInstanceId === browserId` 的那台 →
`mentionedBrowser.user.openTabs()` → **精确匹配 `providerTabId` + `title` + `url`** →
`mentionedBrowser.user.claimTab(tab)`。

两个安全细节值得抄给本仓库（原文）：

- `The title and URL are an accepted snapshot used to fail closed if a numeric browser tab id was reused after a restart.`
  —— 标题 + URL 是**快照**，浏览器重启后 tabId 复用时要 fail closed。
- `Do not guess tab ids. Only claim ids that came from the current openTabs() result.`

### 7.3 模型面的纪律（`control-chrome` skill 摘要）

- **显式浏览器意图优先**：用户点名了 iab 或 Chrome，就不许换别的面，也不许用
  connector / API / CLI 替代；反之，语义任务要先查 connector，查完了才轮到 Browser。
- `Do not inspect browser cookies, local storage, profiles, passwords, or session stores.`
  `Browser discovery must remain read-only.`
- 拿不到 Chrome 时的**唯一**提示语（原文）：

```text
tell them that browser needs the ChatGPT browser extension and direct them to
Settings → Computer use to install it.
```

—— 这就是用户截图里那个页面的官方名字与位置。

- 故障处理：先一次轻量调用（如列标签页），失败**等 2 秒重试一次**；仍不行再读
  `chrome-troubleshooting`。且明文禁止用 AppleScript / shell 自动化替代
  （`do not attempt to complete the request with AppleScript, shell automation,
or another scripting substitute`），也禁止自行安装 / 修复 native host
  （`Do not install or repair the native host yourself.`）。

---

## 8. 与 Syntropy 的对照（B 级）

[computer-use.md](computer-use.md) §8.3 已记录：本节点**不安装、也不驱动** ChatGPT 浏览器扩展，
因此没有 `com.openai.codexextension` 宿主；同一套 `extension` 语义改由浏览器自己的
DevTools 端点实现（`browsers_connect` + `user.openTabs` / `claimTab`）。

本文补几条**机制层面**的差异，供落地时对照：

| 维度                          | Codex app（本文）                                                             | Syntropy                                   |
| ----------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------ |
| 进入用户浏览器的通道          | 官方商店扩展 + native messaging 宿主                                          | 直连 `--remote-debugging-port` 端点        |
| 是否依赖浏览器保持"被 attach" | 是，`chrome.debugger.attach(tabId,"1.3")`                                     | 否，走 DevTools 端点                       |
| CDP 事件如何立项              | `onDetach` / `onEvent` 显式建模为一等事件（`sendCdpDetach` / `sendCdpEvent`） | 见 `syntropy_node/control/browser_cdp*.go` |
| 标签页交付语义                | 用户 mention → `claimTab` → fail-closed 快照校验                              | 同源语义（`user.openTabs` / `claimTab`）   |

一条**值得单独考虑采纳**的点：Codex app 把 `chrome.debugger.onDetach` 当一等事件上报，
而 Syntropy 侧目前没有等价物——attach 掉线若只表现为"后续命令超时"，
会把"浏览器把我踢了"和"页面卡了"混成同一个错误。

---

## 9. 本机现状与已知局限

### 9.1 一个现场发现

注册表项**存在**：

```text
HKCU\Software\Google\Chrome\NativeMessagingHosts\com.openai.codexextension
  (默认) = C:\Users\huoga\AppData\Local\OpenAI\extension\com.openai.codexextension.json
```

但该路径**当前不存在**（`%LOCALAPPDATA%\OpenAI\` 下只有 `Codex\`）。
按 §3.5 的判据，`check-native-host-manifest.js` 现在会返回 **1**
（`Native host manifest does not exist`），即原生消息通道此刻**不完整**，
正常应提示"从插件界面重装 Browser 插件"。

不应据此断定"功能坏了"——清单可能在使用时才写入（本次未做运行时观测，无法区分）。
但**如果哪天 Chrome 控制失灵，这是第一个该看的地方**。

交叉证据：扩展里存在 `native_host_unreachable` 这个状态字面量，说明"宿主连不上"在产品里
是一个被显式建模的状态，而不是静默失败。

### 9.2 局限（按重要性）

1. **未做运行时插桩 / 抓包**。CDP 事件那一族方法名走哪条通道仍未确认（§6.3），
   而这直接决定这套链路的安全边界（stdio 由 Chrome 管，本地端口要自己鉴权），
   值得后续补一次观测。
2. **`extension-host.exe` 已做到"身份 + 导入 + 字面量 + 对端 JS"（§6.4–§6.6），
   但没反汇编、没动态调试**。接口层面基本拿到（JSON-RPC 方法表、配置键、重连常量、
   错误码），**控制流与 native messaging 的具体帧上限仍无证据**；§6.3 里那条
   `tab_cdp_call` / `tab_cdp_events` 走哪条通道也仍未确认。
3. **有一处内部不一致没能解释**：写侧（`installManifest.mjs`）与读侧（宿主字面量）
   的配置键集合不同（§6.6 末）。要么宿主容忍缺键，要么存在第二个写入方——没找到。
4. **扩展版本 ≠ 应用版本**。扩展来自商店（`update_url: clients2.google.com`），
   版本 `1.26.901.11451` 与应用 `26.1007.2314.0` 不同步；商店静默更新会让本文的
   扩展侧结论（manifest、字面量）漂移，而应用侧结论不动。
5. **未核对扩展的 `verified_contents.json`**（262 KB）。若要确认扩展未被本地篡改，
   这是正路。
6. **B 级对照未重新核验行号**。§8 引用的本仓库文件沿用既有记录。
7. **没有做 26.928 → 26.1007 的逐 chunk diff**。本文只针对这一条链路取证据，
   不构成版本 changelog。

---

## 10. 复现（全部只读）

```powershell
# 0) 定位包（不要猜目录，从进程反查）
Get-Process ChatGPT | Select-Object -First 1 -ExpandProperty Path
Get-AppxPackage -Name OpenAI.Codex | Select-Object Name,Version,InstallLocation

# 1) 只列 chrome 插件的非 node_modules 文件（不要解包整个安装目录）
$C = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1007.2314.0_x64__2p2nqsd0c76g0\app\resources\plugins\openai-bundled\plugins\chrome"
cmd /c "dir /s /b ""$C"" 2>nul | findstr /v /i node_modules"

# 2) 宿主身份与安装契约（minified 文件用 -o 只取命中，避免整行刷屏）
rg -o -N 'extensionHostName|com\.openai\.codexextension[a-z.]*|"stdio"|allowed_origins|proxyPort|proxyHost' "$C\scripts\installManifest.mjs"
rg -o -N 'manifestDirectory|registryRoot|extensionIds' "$C\scripts\extension-ids.json"

# 3) 注册表与清单现状（只读）
(Get-Item 'HKCU:\SOFTWARE\Google\Chrome\NativeMessagingHosts\com.openai.codexextension').GetValue('')
Test-Path "$env:LOCALAPPDATA\OpenAI\extension\com.openai.codexextension.json"

# 4) 扩展身份与 CDP 用法（只读；<profile> 换成实际 profile 名）
$E = "$env:LOCALAPPDATA\Google\Chrome\User Data\Profile 2\Extensions\hehggadaopoacecdllhhajmbjkdcmajg\1.26.901.11451_0"
Get-Content "$E\manifest.json" -Raw
rg -o -N 'chrome\.debugger\.[A-Za-z]+' "$E\background.js" | Sort-Object -Unique
rg -o -N '"tab_cdp_[a-z]+"|"playwright_locator_[a-z_]+"' "$E\background.js" | Sort-Object -Unique

# 5) 校验和
Get-FileHash "$C\extension-host\windows\x64\extension-host.exe","$E\manifest.json","$E\background.js" -Algorithm SHA256

# 6) 应用自带的诊断（只读；注意它会读 Chrome 的 Preferences）
node "$C\scripts\check-native-host-manifest.js" --json
node "$C\scripts\check-extension-installed.js" --browser chrome --json
node "$C\scripts\installed-browsers.js" --json

# 7) 宿主二进制的身份（只读；PE 头 / 段表 / 导入表 + 字面量扫描，**不是**反汇编）
node code/tools/pe-probe.mjs "$C\extension-host\windows\x64\extension-host.exe"
# 想只看决定性证据的话，两条 grep 足够：
rg -a -o -N 'rustc/[0-9a-f]{40}' "$C\extension-host\windows\x64\extension-host.exe"
rg -a -o -N 'WSADuplicateSocketW|WSASocketW|extension-host-config|extension-host-[a-z]+' "$C\extension-host\windows\x64\extension-host.exe" | Sort-Object -Unique

# 8) 宿主的方法表 / 配置键 / 日志文案 / PDB（NUL 结尾字符串收割，含 UTF-16）
#    脚本是一次性的，按需重建；判读要点：方法名在二进制里会被 LLVM 字符串合并叠在一起，
#    不能直接按行读，要跟扩展的静态调用点对表
node .work/host-strings.mjs "$C\extension-host\windows\x64\extension-host.exe"

# 9) 协议的另一半（这是最省事的一条路：对端是明文 JS）
$E2 = "$env:LOCALAPPDATA\Google\Chrome\User Data\Profile 2\Extensions\hehggadaopoacecdllhhajmbjkdcmajg\1.26.901.11451_0"
rg -o -N 'requestHost\([^)]{0,90}' "$E2\background.js" | Sort-Object -Unique      # 方法表与调用点
rg -o -N 'sendNotification\("[A-Za-z]+"|\.jsonrpc:"2\.0"' "$E2\background.js" | Sort-Object -Unique  # 通知族
```

> 采集过程中**没有对 `C:\Program Files\WindowsApps` 下任何文件执行写操作**；
> 所有产物都在本仓库内。

---

## 11. 交叉引用

- [README.md](README.md) — 版本基线、证据分级、采集边界。
- [browser.md](browser.md) — 浏览器功能面总览与 Syntropy 逐项对照（含 iab、云端浏览器、设置面）。
  其 §2.4.4 记录"扩展 ID + 宿主名"，**本文补上机制**。
- [computer-use.md](computer-use.md) §8.3 — Chrome 扩展链路的既有一级摘录；
  §7 — 17 类风险与四档摩擦的审批模型（本条链路同样受它约束）。
- `plugins\chrome\docs\`（安装包内，只读）— `chrome-troubleshooting.md`、
  `browser-safety.md`、`tab-claiming-chrome.md`、`capabilities\tab\cdp.md` 等 28 篇，
  是本条链路的权威行为文档。
- `plugins\chrome\skills\control-chrome\SKILL.md` — 模型可见的入口 skill。
- [code/tools/pe-probe.mjs](code/tools/pe-probe.mjs) — §6.4 用到的二进制身份识别探针；
  用法与判读见 [code/tools/README.md](code/tools/README.md)。
- [browser-extension-plan.md](browser-extension-plan.md) — 把这条链路**落到 Syntropy** 的
  方案与计划（冻结决策、契约设计、P0–P5 里程碑与验证门、外部依赖）。
