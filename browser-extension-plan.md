# 把「Agent 控制用户自己的 Chrome」落到 Syntropy：实现计划（定稿）

> 产出时间：2026-10-11。三源综合：**Codex app `26.1007.2314.0`**（逆向见
> [browser-extension.md](browser-extension.md)）、**Qwen Code**（`packages/chrome-extension` +
> `packages/browser-use`，源码快照在 `.work/qwen-code`，Apache-2.0）、**本仓库现状**
> （[browser.md](browser.md) 的三档后端与逐项对照）。
> **硬约束：Windows 与 macOS 都要支持**，任何"先在一个平台糊过去"的设计都算不通过。

---

## 0 目标与非目标

### 0.1 要什么

Agent 能操作**用户自己那个已经开着、已经登录的 Chrome**（他的 cookie、登录态、扩展、标签组都在），
且这条路在本机 Node / 远端 Node、Windows / macOS 四种组合下**形状一致**。

今天的 `browser_backends.go` 有三档：`iab`（桌面 webview）、受管 `cdp`（节点拉起独立 profile）、
外部 `cdp`（`browsers_connect` 接一台已经开了调试端口的浏览器）。三档都进不了"用户默认 profile
的已登录会话"——本计划补第四档。

### 0.2 不要什么

| 不做                                                                               | 原因                                                                                                     |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 不抄 Codex 宿主的 `codexRuntime/*`、app-server HTTP 代理、`tabContextAsset/*` 落盘 | 那三件源于"Codex 把 app-server 塞进了宿主"；我们的桌面应用常驻且已经在 supervise 本地集群                |
| 不把 CDP 语义放到桌面或扩展                                                        | 语义留在 Node（`browser_cdp*.go` / `browser_locator.go` / `browser_session.go`），否则会变成两份各自漂移 |
| 不用 shell 脚本当宿主（Linux 式 `sh` 启动器）                                      | Windows 上不存在这条路；macOS 上还会给签名与隔离属性添麻烦。**宿主两平台都是真二进制**                   |
| 不为了对齐上游而引入云浏览器                                                       | 与本地优先的架构张力最大，单列议题                                                                       |

---

## 1 三源综合：从每一家拿什么

### 1.1 从 Codex app 拿（A 级，证据见 browser-extension.md）

| 事实                                                                                                       | 取用                                                                     |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 扩展 ⇄ 宿主是 **标准 JSON-RPC 2.0**（`{jsonrpc,id,method,params}` / `{id,result\|error}`；无 `id` 即通知） | ✅ 直接沿用封套                                                          |
| 请求 id 前缀 `native-host:<N>`，并用正则识别"迟到的回执"后**吞掉**                                         | ✅ 直接沿用（不吞就会把过期响应当事件送进模型上下文）                    |
| 重连：固定 5 s + MV3 `chrome.alarms` 保活 + 宿主名回退链 + 状态机 `{connected,disconnected,reconnecting}`  | ✅ 直接沿用（普通 `setTimeout` 会被 worker 回收打败）                    |
| `chrome.debugger.onDetach` / `onEvent` 被当**一等事件**上报                                                | ✅ 直接沿用（三家里最容易被漏掉的一条）                                  |
| `hello {constraints}` 做**协议版本协商**                                                                   | ✅ 改成我们的 `tunnel/hello`；错误码用 `EXTENSION_VERSION_MISMATCH` 一族 |
| 宿主是 Rust 的**有状态服务**（管进程 / 绑 HTTP 代理 / 资产分片落盘）                                       | ❌ 不采用，见 §0.2                                                       |

### 1.2 从 Qwen Code 拿（源码级，Apache-2.0）

它把同一件事做完了，而且是明文 TypeScript。**机制层面基本可以直接照搬**：

| 事实                                                                                                                                                                                           | 取用                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 宿主安装布局：内容寻址副本 `<root>/hosts/<sha256(内容)>/…` + **一条自家启动器**，manifest 的 `path` 指向启动器                                                                                 | ✅ 机制沿用（启动器我们不需要——`path` 直接指宿主二进制即可，但**内容寻址副本**与**只碰自家文件**这两条必须有） |
| 所有权标记：`isOwnedManifest` 拒绝改 `path` 不是自己、或 `allowed_origins` 里出现**别人扩展**的 manifest；卸载把非自家路径收进 `skippedForeignPaths`                                           | ✅ 必须有：用户机器上很可能同时装着别的 agent 的 native host                                                   |
| rendezvous 用**确定性推导**（`uid + platform` 的纯函数），注释明确不许读 `$TMPDIR`/`$XDG_RUNTIME_DIR`——要让 CLI 与被 Chrome 拉起的宿主在**不共享环境变量**的前提下推出同一路径                 | ✅ 采用；这也解释了我们的 rendezvous 文件为什么必须放固定 per-user 路径                                        |
| 多实例发现：每宿主写 `<hostInstanceId>.json`，读侧**先探活**（短超时连一次）→ 按 pid 回收死记录 → 按 mtime 排序 → 按实例 id 去重                                                               | ✅ 照搬（宿主被强杀留死记录是必然事件）                                                                        |
| 消息类型只四种 `hello/request/response/event`；`browserSessionId` 解复用；事件带 `tabId` + 可选 `sessionId`（out-of-process iframe）                                                           | ✅ 照搬                                                                                                        |
| 安全边界靠**路径权限**（逐级校验祖先不可被他人写、socket 属于本 uid）；**Windows 直接跳过**，交给命名管道 ACL                                                                                  | ✅ 采用，并据此把本地那一跳改成命名管道 / UDS                                                                  |
| 一套错误码（见 §4.4）                                                                                                                                                                          | ✅ 直接用，省一轮命名                                                                                          |
| **profile 归属**：每个 profile 在 `chrome.storage.local` 持久化一个随机 UUID，`hello` 带上；**首个合法握手选中**该 transport 生命周期；其它 profile 保持连接但闲置；断线保留身份、只有它能回来 | ✅ 直接采用（D7）                                                                                              |
| 超时分层：传输层 130 s > 上层操作 120 s                                                                                                                                                        | ✅ 照排                                                                                                        |
| 陷阱一：扩展 id 集合与宿主 revision **必须同一次一起 bump**（宿主把 id 集合编进去了，revision 相同就复用旧宿主）                                                                               | ✅ 照办                                                                                                        |
| 陷阱二：**破坏兼容时连宿主名一起换**（旧版首用时会把 Chrome 重新指回旧宿主）                                                                                                                   | ✅ 照办：宿主名带协议代次                                                                                      |
| **不支持 Windows**（POSIX `sh` 启动器 + 只写 POSIX manifest 目录）                                                                                                                             | ❌ 我们要补上，见 §3                                                                                           |

### 1.3 从本仓库拿（B 级）

| 现有资产                                                                                                  | 取用                                                                         |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `browser_cdp*.go` / `browser_locator*.go` / `browser_session.go` / `browser_capabilities.go`（40 个文件） | ✅ **一行不改**，只加一条 transport                                          |
| `BrowserToolCall` / `BrowserToolResult` + `ListBrowserToolCalls` / `RespondBrowserToolCall`               | ✅ 复用为**控制面**（会话建立 / 撤销 / 状态），不承载数据                    |
| `browser_backends.go` 的三档 + `capability_get` 的降级语义                                                | ✅ 加第四档，沿用"缺哪档报哪档 + 稳定原因码"                                 |
| `browserext/`（随包 MV3 扩展，钉 key，经 CDP `Runtime.evaluate` 驱动）                                    | 🟡 只借**钉 key 手法**与扩展物化流程；**不借它的传输**（那是给受管实例用的） |
| 桌面应用常驻 + `sidecar-supervisor.ts` supervise 本地 Master/Node                                         | ✅ 这是我们的结构优势：宿主不需要管进程                                      |

---

## 2 冻结决策

### D1（冻结）桌面应用是浏览器侧唯一锚点

Node 本机还是远端，只改变一段路怎么走，不改变链路形状。

### D2（冻结）链路形状

```text
扩展 (debugger + nativeMessaging)
  │  loopback WS + token A + Origin 校验        ← 扩展只能 fetch/WebSocket 到 http(s)，别无选择
  ▼
桌面应用主进程（锚点：监听 + 审批门 + 审计 + 归属仲裁；不理解 CDP 语义）
  │  本机优先 Windows 命名管道 / macOS UDS（无端口可抢，ACL 即边界，不发 token）
  │  只有远端 Node 才退化成 WS + token B
  ▼
Node（CDP 语义的唯一持有者）
  ▲
  └── native host（只做 rendezvous：把桌面的 endpoint + token A 交给扩展）
```

三个不变式：扩展永远只认桌面；桌面是透明管道（只搬帧、当审批门、记审计）；永远由桌面 dial Node。

### D3（冻结）宿主只做 rendezvous

要抄的三样见 §1.1（JSON-RPC 封套 / 重连状态机 / 迟到回执吞掉）。

> 为什么不用"固定端口 + 静态 token"省掉宿主（Qwen 的 `qwen serve` 那条路）：省得掉宿主，
> 但 token 得让用户**手工配到每个客户端**（他们 README 原话：`set QWEN_SERVER_TOKEN explicitly
and configure the same stable token in every authorized client`）。桌面应用常驻，宿主可以把
> 端点与 token 直接递过去，用户零操作。

### D4（冻结）四态如实上报，不静默降级

| 态                           | 对外错误码（§4.4）         |
| ---------------------------- | -------------------------- |
| 扩展没装                     | `EXTENSION_MISSING`        |
| 装了但被禁用 / 被策略拦      | `EXTENSION_DISABLED`       |
| 宿主未注册或 manifest 不对   | `NATIVE_HOST_UNREGISTERED` |
| 端点未就绪（桌面还没起监听） | `TRANSPORT_UNAVAILABLE`    |

### D5（冻结）宿主安装器从第一天就是平台接口

`Install / Status / Uninstall` 是接口，**Windows 与 macOS 两实现同时排期**（P0 / P0-mac），
不允许"先在 Windows 写死、macOS 以后补"。

### D6（冻结）宿主二进制装进 userData，manifest 绝不指向安装目录

Windows 的 MSIX 安装目录是**版本化**的（`…_<version>_x64__…`），升级即换路径；macOS 的 `.app`
虽稳定，也不该让 manifest 指向会被搬移 / 重签的位置。所以：

- 宿主按**内容哈希副本**装到用户目录，manifest 的 `path` 指那份副本；
- 启动时（或版本变化时）做一次 `Status`，不一致就重装并**重新写注册**。

### D7（冻结）profile 归属照 Qwen 的语义

每个 profile 在 `chrome.storage.local` 持久化一个随机 UUID，`hello` 带上它；
**首个合法握手选中**该 transport 生命周期；其它 profile 连上但闲置（不能解请求、不能发事件、
不能顶替、不能重置 tab 与分组名）；断线保留身份，只有它能回来。
**身份不是鉴权**：它区分同用户下的不同实例，不隔离同用户下的其它进程。

### D8（冻结）第一版不依赖应用商店

开发与验证用 unpacked + 受管实例；"进用户默认 profile"依赖商店上架或企业策略，是**外部依赖**（§9）。

### D9（待决）远端 Node

见 §6 P5 与 §9。本机形态定稿前不动它，但接口从第一天就不能把 `127.0.0.1` 写死。

---

## 3 平台矩阵（本次硬约束）

### 3.1 宿主注册与文件位置

| 项                    | Windows                                                                                                                          | macOS                                                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 注册方式              | 注册表 `HKCU\Software\Google\Chrome\NativeMessagingHosts\<hostName>`，默认值 = manifest 路径                                     | 目录 `~/Library/Application Support/Google/Chrome/NativeMessagingHosts/<hostName>.json`                                                               |
| 其它浏览器族          | Edge `HKCU\Software\Microsoft\Edge\NativeMessagingHosts`；Brave `HKCU\Software\BraveSoftware\Brave-Browser\NativeMessagingHosts` | Edge `…/Microsoft Edge/NativeMessagingHosts`；Brave `…/BraveSoftware/Brave-Browser/NativeMessagingHosts`；Chromium 与 Chrome for Testing 各有独立目录 |
| manifest 形状         | 同一份 JSON：`{name, description, path, type:"stdio", allowed_origins:[chrome-extension://<id>/, …]}`                            | 同                                                                                                                                                    |
| 宿主副本根            | `%LOCALAPPDATA%\Syntropy\browser-host\<sha256>\host.exe`                                                                         | `~/Library/Application Support/Syntropy/browser-host/<sha256>/host`                                                                                   |
| rendezvous 文件       | `%LOCALAPPDATA%\Syntropy\browser-extension\rendezvous.json`                                                                      | `~/Library/Application Support/Syntropy/browser-extension/rendezvous.json`                                                                            |
| Chrome 拉起时给的参数 | `host.exe <origin> <parent-window-handle>`                                                                                       | `host <origin>`                                                                                                                                       |

> 三族的注册是**三份**，不是一份。上游 `extension-ids.json` 在 Windows 只列了 Chrome 的根，
> **这一点不能照抄**——Edge 在 Windows 有自己的根。

### 3.2 本地那一跳的传输

| 跳               | Windows                                                                                        | macOS                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 扩展 → 桌面      | 只能 loopback TCP/WS + token + Origin 校验                                                     | 同（扩展没有别的能力）                                                               |
| 桌面 ↔ 本地 Node | **命名管道** `\\.\pipe\syntropy-browser-<identity>`（`identity` 取清洗过的用户名；ACL 即边界） | **UDS**，但路径**硬上限 103 字节**，必须用短路径（例：`/tmp/syntropy-<uid>/b.sock`） |
| 远端 Node（P5）  | WS + token                                                                                     | 同                                                                                   |

### 3.3 平台特有的坑（都进 P0 的验收）

**Windows**

1. **MSIX 安装目录是版本化的**：注册表 / manifest 里出现 `…\WindowsApps\OpenAI.Codex_<version>_…`
   就必定在升级后失效 → D6 的副本机制是硬要求。
2. 注册表写入来自 Electron（MSIX）应用时，`HKCU` 是真实写入、不被虚拟化
   （本机可验证：现存的 `…\NativeMessagingHosts\com.openai.codexextension` 就是被它们的应用写进去的）。
3. 命名管道的默认 ACL 要让"同一用户"可连——正好匹配 D7 的威胁模型。
4. AV / SmartScreen 会盯新出现的、被浏览器拉起的可执行文件 → **宿主二进制必须签名**，
   且副本按内容哈希换名时**签名不变**。
5. 长路径：宿主副本路径要短（这个仓库吃过 `git` 长路径的苦）。
6. **注册表里的残留会把机器锁死**：如果注册值指向一个已经被删掉的 manifest（验收用临时 home
   跑过、用户挪过目录都会留下这种），"目标位置已存在别人的东西就跳过"这条保护会让安装跳过它、
   卸载又只删指向当前 manifest 的值——既注册不上也清不掉。所以"是不是自家的"要能认路径形状
   （同名 manifest 落在自家落地目录里），而不能只看文件还在不在（真机实测，见 §10.16）。

**macOS**

1. **UDS 路径 ≤ 103 字节**（Qwen 明确记录：`/private/tmp/qwen-browser-use-<uid>` 已花掉约 40 字节）。
   discovery 目录名要短，禁止把 socket 放在长路径下。
2. **签名 / hardened runtime / 公证**：宿主二进制要签，`.app` 内的辅助可执行文件必须被签名覆盖，
   分发包要公证，否则 Gatekeeper 拦。这是独立工作流，**必须排进 P0-mac**，不能拖到 P4。
3. **不要用 shell 脚本当宿主**（Qwen 的 `#!/bin/sh` 是 POSIX-only 取巧）；两平台都用真二进制，
   签名与隔离属性都更干净。
4. **quarantine 属性**：宿主副本由我们自己的应用写盘（不是下载）→ 不带 `com.apple.quarantine`；
   若将来改成"下载后安装"，这条会立刻反咬。
5. 目录权限校验要处理 `/var` → `/private/var` 符号链接（Qwen 的做法：`resolve` 与 `realpath`
   **两条路径都校验**）。
6. 读浏览器 `Local State` / profile 目录做显示名，那是**用户浏览器数据**：要么不做（P0 用活握手判定），
   要么明示并只在已授权时做。见 §9 未决问题 6。
7. **两样东西的目录都跟着浏览器的 `--user-data-dir` 走**：native messaging manifest 在
   `<user-data-dir>/NativeMessagingHosts/`，外部扩展条目在 `<user-data-dir>/External Extensions/`
   ——都不是固定挂在 `~/Library/Application Support/<产品>/` 下面。默认 user-data-dir 下这两条
   路径与产品目录重合，所以安装器的默认落点是对的；可一旦有人用 `--user-data-dir` 起浏览器
   （我们的验收就必须这么做：不能碰用户的默认 profile），两份条目都必须放进那个 profile 目录。
   症状极具误导性——manifest 那条会让浏览器日志说 `Can't find manifest for native messaging host`
   而我们的 `status` 明明报 `ready: true`；外部扩展那条则是"什么都不发生"（真机实测，见 §10.15、§10.18）。
8. **应用包的目录名可以任意**：本机装的是 `/Applications/Google Chrome 4.app`（可执行文件名仍是
   `Google Chrome`）。只按清单里的标准路径 `/Applications/Google Chrome.app` 探测，会得出"本机
   没装浏览器"，于是节点根本不装配浏览器面（症状是动作报 `browser_list ... is not supported on
this node`）。探测要在标准路径落空后按**可执行文件名**去 `/Applications` 与 `~/Applications`
   里回捞（§10.15）。
9. **Chrome for Testing 的版本要与系统版本对齐**：macOS 12.4 上 CFT 155 的框架都加载不起来
   （`VideoToolbox` 缺 `_kVTCompressionPropertyKey_ReferenceBufferCount`，dlopen 失败、进程立刻
   退出），CFT 126 正常。验收用哪个浏览器版本，要按目标机系统版本选，别默认"越新越好"。

---

## 4 契约设计

### 4.1 隧道帧不进 proto

CDP 帧走桌面 ↔ Node 的本地通道（命名管道 / UDS / WS），**不进控制面**。理由：locator 解析一次动作
几十次往返，任何一帧过一遍 Master 都会把延迟乘上跳数；控制面该管的是"谁有权、什么时候开、
出事了怎么办"。

### 4.2 proto 改动（按 `$project` 的 7 步流程）

| 文件                                                | 改动                                                                                                                                         |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `api/proto/model/control/control.proto`             | 新增 `BrowserExtensionState`（四态 + `reason_code` + `extension_version` + `extension_instance_id` + `browser_family` + `protocol_version`） |
| 同上                                                | 新增 `BrowserTunnelGrant { node_id, endpoint, token, expires_at_ms, protocol_version }`（Master → 桌面，先持久化后投递）                     |
| 同上                                                | 新增 `BrowserTunnelRevoked { node_id, reason }`                                                                                              |
| 同上                                                | `ComputerUseBrowserBackend.Type` 增加 `"extension"`                                                                                          |
| `api/proto/service/settings/settings_service.proto` | 复用既有取件 / 回执对承载上行状态与下行 grant；**不新增长连接**                                                                              |
| `api/client/settings/`                              | 按既有风格加薄封装                                                                                                                           |

### 4.3 桌面 ↔ Node 的帧

| 方法            | 方向      | 参数                                                                                                 | 说明                                            |
| --------------- | --------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `tunnel/hello`  | 桌面→Node | `{protocolVersion, supportedProtocolVersions, extensionVersion, extensionInstanceId, browserFamily}` | 握手 + 版本协商                                 |
| `tab/attach`    | Node→桌面 | `{tabId}`                                                                                            | 扩展 `chrome.debugger.attach`                   |
| `tab/send`      | Node→桌面 | `{target, method, params}`                                                                           | 扩展 `chrome.debugger.sendCommand`              |
| `tab/detach`    | Node→桌面 | `{tabId, reason}`                                                                                    | 含扩展 `onDetach` 的主动上报（一等事件）        |
| `tab/event`     | 桌面→Node | `{source, method, params, tabId, sessionId?}`                                                        | `sessionId` 仅用于 out-of-process iframe 子目标 |
| `tabs/list`     | Node→桌面 | `{}`                                                                                                 | 列用户可见的顶层标签页                          |
| `ping` / `pong` | 双向      | —                                                                                                    | 保活；断开要能区分"对端不在"与"卡住"            |

**不做**：这一层不定义 click / type / locator——那些是 Node 侧语义，由它翻译成 `tab/send`
（`Input.*` / `Runtime.evaluate` / `DOM.*`）。

**超时分层**：隧道请求超时 > 上层操作超时（上游取 130 s 对 120 s）。两层相等就会让报错的是错的那层。

### 4.4 错误码

直接沿用 `packages/browser-use/src/core/errors.ts` 的集合：

```text
BROWSER_DISCONNECTED      EXTENSION_VERSION_MISMATCH   TRANSPORT_UNAVAILABLE
TAB_OWNERSHIP_CONFLICT    TAB_DEBUGGER_CONFLICT        TAB_NOT_GRANTED
STALE_TAB                 STALE_BROWSER_SESSION        UNSUPPORTED_TAB
PERMISSION_REQUIRED       DIALOG_OPEN                  INPUT_BLOCKED
LOCATOR_NOT_UNIQUE        INVALID_LOCATOR              NOT_FOUND
OPERATION_TIMEOUT         OPERATION_FAILED             UNKNOWN_METHOD
```

再加平台侧需要的三个（D4）：`EXTENSION_MISSING` / `EXTENSION_DISABLED` / `NATIVE_HOST_UNREGISTERED`。

### 4.5 本机 rendezvous 文件

| 项       | 值                                                                           |
| -------- | ---------------------------------------------------------------------------- |
| 路径     | 见 §3.1（固定 per-user 路径；宿主拿不到我们的环境变量，只能靠约定，见 §1.2） |
| 内容     | `{endpoint, token, protocolVersion, expiresAt, browserFamily, pid}`          |
| 写者     | 桌面应用主进程                                                               |
| 读者     | native host                                                                  |
| 失效     | 桌面退出即删；**token 每次运行重新生成**                                     |
| 防死记录 | 读侧**先探活**（短超时连一次）再相信；按 pid 回收（照 Qwen）                 |

---

## 5 分层工作分解与代码落点

| 层           | 模块                                     | 工作                                                                                                                                                             |
| ------------ | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W1 契约      | `api/`                                   | §4.2 的 proto + 客户端薄封装 + 路由                                                                                                                              |
| W2 Node      | `syntropy_node/control/`                 | `browser_tunnel.go`（本地通道服务端：命名管道 / UDS / WS + 帧编解码 + 归属仲裁）；`browser_extension_backend.go`（第四档）；`browser_capabilities.go` 文案与四态 |
| W3 桌面 main | `desktop_app/apps/desktop/src/main/`     | 扩展侧 loopback WS（token A + Origin 校验）；本地通道客户端（dial Node）；透明转发 + 审批门 + 审计；rendezvous 文件；`browser-tool-relay.ts` 扩展                |
| W4 宿主      | 新增 Go 命令 + 安装器                    | 平台接口 + **Win/mac 两实现**；内容寻址副本 + 所有权标记 + 原子写 + 幂等 `Status`；rendezvous 读取 + JSON-RPC over stdio                                         |
| W5 扩展      | 新增 MV3 扩展                            | `debugger` + `nativeMessaging` + `tabs`；钉 key；§4.3 的方法；重连状态机；`chrome.storage.local` 里的实例 id                                                     |
| W6 打包      | `desktop_app/tools/build.mjs` + 打包脚本 | 两平台把宿主二进制纳入产物矩阵（现有矩阵是 `nbot/mbot/node-repl/node-runtime/codex`，加一个槽位）；macOS 进签名与公证流程                                        |

**复用而不重写**：`browser_cdp*.go` / `browser_locator*.go` / `browser_session.go` /
`browser_capabilities.go` 不动；`browser_host.go` 的 relay 只用于控制面状态。

### 5.1 目录布局（命名）

| 路径                | 语言       | 是什么                                                                                                                                                                                                                                  | 为什么叫这个名                                                                                                                                                                                          |
| ------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chrome_extension/` | TypeScript | MV3 扩展：`src/`（`service-worker` / `native-port` / `desktop-link` / `cdp` / `rpc-client` / `reconnect` / `protocol`）、`public/manifest.json`、`test/` 单测、`scripts/build.mjs` → `dist/`、钉住 id 的 `extension-id.json`            | 直接沿用 Chrome 自己的叫法。叫 `browser_extension/` 会让人以为它能装进 Firefox / Safari——本版只做 Chromium 系的 `chrome.debugger` + `chrome.runtime.connectNative`，扩展 id 也是 Chrome 的 key 算出来的 |
| `browser_host/`     | Go         | 一个模块，两条命令：`cmd/syntropy-browser-host`（原生消息宿主，只做 rendezvous，被 Chrome 拉起）、`cmd/syntropy-browser-bridge`（桌面桥，常驻，WS ⇄ 本机隧道）；共用 `internal/{nativeio,rpc,rendezvous,install,wsserver,tunnelclient}` | 「宿主」是整条链路在浏览器这一侧的服务端：被浏览器拉起的那份、桌面常驻的那份、以及它们的安装器与注册表写入同属一件事，放一个模块而不是并列两个目录；`go.mod` 也只需要一处 `replace common`              |
| `common/mframe/`    | Go         | 「4 字节小端长度 + UTF-8 JSON」的帧编解码                                                                                                                                                                                               | 节点侧隧道与桌面桥的隧道客户端**共用一份**（原生消息那条链的宿主侧是自己那份 `browser_host/internal/nativeio`，格式相同、上限不同——这份差异本身就是不能硬塞进一个包的理由）                             |
| `codex_app_rev/`    | 文档       | 上游 Codex app 的逆向记录（`browser-extension.md`）、本计划与本计划的落地状态、探针工具                                                                                                                                                 | 沿用仓库既有目录                                                                                                                                                                                        |

---

## 6 里程碑

### P0 — Windows 最小闭环（只做 `tabs/list`）

范围：W3 监听 + W4 宿主（Windows 实现）+ W5 扩展（只 `tabs/list`）+ W2 第四档注册。

一次验掉全部真坑：

1. manifest 写对没有（`allowed_origins` 精确到扩展 id、`path` 绝对且**不在 MSIX 版本目录里**）。
2. Chrome 怎么拉起宿主（命令行参数是什么——**必须实测**）。
3. Origin + token 校验（任何本机进程都不能冒充）。
4. rendezvous 时序：扩展先连上而桌面还没起监听时，要回明确的"未就绪"而不是超时。
5. **三族注册各写一份**（Chrome / Edge / Brave）。
6. 升级路径：宿主副本换哈希后旧注册被正确替换（验 D6）。

**验收**：手工点一次"列出标签页"；D4 四态各制造一次，全部如实上报。

### P0-mac — macOS 最小闭环（与 P0 同一个动作）

范围：W4 宿主（macOS 实现）+ §3.1 的 macOS 注册路径 + **签名 / 公证**；W3/W5 复用同一套代码。

**验收**：同一个 `tabs/list`；UDS 路径长度实测（`≤103`）；`codesign --verify --deep --strict`
与 `spctl -a -vvv -t exec` 通过；arm64 / x64 各跑一次。

> P0 与 P0-mac 都做完才算 D5 达标。**不允许把 macOS 推到 P4。**

### P1 — CDP 隧道贯通（parity）

`tunnel/hello` 版本协商、`tab/attach|send|event|detach`、Node 侧 transport 接通、错误码落地。

**验收**：既有 live test 在 `extension` 档跑通；拔掉扩展时动作立刻报 `TAB_DEBUGGER_CONFLICT` /
`BROWSER_DISCONNECTED`（而不是各自超时）。**两平台各跑一次。**

### P2 — 归属、降级、审批与站点权限

profile 归属（D7）+ 四态进 `capability_get` + 审批门 + 站点 allowlist 最小集 + 撤销开关。

**验收**：两个真实 profile 同时连上（Qwen 的验收标准值得照抄：**两个 profile 共享同一通道
≥95 秒**，不能顶掉先选中的那个、不能重置它的 tab 与分组名）；未授权站点上的动作被门拦下并给可读原因；
关掉开关后隧道立刻失效且不影响 iab / 受管档。

### P3 — 设置面与审计

设置页新分节（安装引导 / 四态 / 站点权限 / 撤销 / 当前选中的 profile）、审计轨迹、
浏览器族与 profile 展示。

**验收**：`smoke-desktop.ps1` 全绿 + 新增 `smoke-browser-extension.ps1` / `.sh`。

### P4 — 分发与版本配对（**外部依赖**）

商店上架（Chrome Web Store / Edge Add-ons）；id 集合与宿主 revision 的绑定流程；
协议不兼容时给稳定错误码；企业策略模板（`ExtensionInstallForcelist` / `chrome.storage.managed`）。

**验收**：把扩展降一个版本跑，链路必须**明确报不兼容**；加一个新扩展 id 时 revision 同步 bump
且已装宿主被替换（把 §1.2 的两条陷阱写成回归测试）。

### P5 — 远端 Node（**待决**）

---

## 7 验证与交付标准（分平台）

> **能随时重跑的两条入口**（§10.17，真实栈 smoke 现为 144 checks）：
> `desktop_app/tools/smoke-browser-extension.ps1` —— 本机链路（宿主注册 + 分发产物 + 落点）；
> `browser_host/tools/mac-browser-e2e.ps1` —— 交叉编译 + 部署 + 在真 Mac 上跑两条用例。
> 下面列的是更细的分平台门。

```powershell
# Go（先 Set-Location 到模块目录）
gofmt -l .        # 应无输出
go vet ./...
go test ./...

# Node 模块
Set-Location syntropy_node; go test ./...

# 桌面（Windows）
Set-Location desktop_app
./tools/smoke-desktop.ps1
./tools/smoke-browser-extension.ps1     # 新增：P0 的四态 + P1 的一条真实页面动作
```

```bash
# 桌面（macOS）
cd desktop_app
./tools/smoke-desktop.sh
./tools/smoke-browser-extension.sh      # 新增：同一套用例

# macOS 专有门
codesign --verify --deep --strict --verbose=2 "<宿主副本>"
spctl -a -vvv -t exec "<宿主副本>"
```

新增的针对性用例：

| 类型       | 新增                                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 契约       | `desktop_app/tests/contract/browser-tunnel.contract.test.ts`（帧形状 / 版本协商 / 四态 / 错误码）                                |
| 宿主安装器 | 两平台各一组：幂等、所有权标记、非自家 manifest 不动、内容变则换副本、卸载只删自家、升级后注册被替换                             |
| Node 单测  | 通道鉴权（错 token / 错 Origin / 过期 grant / 非 loopback 端点全拒）、`onDetach` 当一等事件、归属仲裁（第二个 profile 不能顶替） |
| 端到端     | 上述两个 smoke 脚本，各平台一份                                                                                                  |

无法执行的验证必须在交付时说明原因（例如"商店上架无法在本地验证"）。

---

## 8 风险与对策

| 风险                                                                          | 平台 | 对策                                                                           |
| ----------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------ |
| **MSIX 版本化安装目录**让注册的路径升级后失效                                 | Win  | D6：副本到 userData + 启动时 `Status` 对账重装                                 |
| **Edge / Brave 各有独立注册根**，只写 Chrome 会"装了也不生效"                 | Win  | 三族各写一份，P0 验收逐族点一遍                                                |
| **UDS 路径 103 字节上限**                                                     | mac  | 短目录名 + 短 socket 名；P0-mac 实测                                           |
| **签名 / 公证**（宿主、`.app` 内辅助二进制、分发包）                          | mac  | 排进 P0-mac，不当收尾工作                                                      |
| AV / SmartScreen 拦新出现的宿主二进制                                         | Win  | 宿主机签；副本按内容哈希换名但**签名不变**                                     |
| **商店审核**是外部依赖                                                        | 全   | P0–P3 用 unpacked 完整验证；把"进用户默认 profile"与"闭环本身"解耦             |
| **商店给自己的扩展 id**，与钉 key 的 unpacked id 不同                         | 全   | 按 **id 集合**处理；id 集合与宿主 revision **同一次 bump**（§1.2）             |
| 破坏兼容时旧版把 Chrome 指回旧宿主                                            | 全   | 宿主名带协议代次（§1.2）                                                       |
| **受管策略禁用 `chrome.debugger`**（`DeveloperToolsAvailability` 需值为 `1`） | 全   | 单独一态上报（D4），不和"扩展没装"混                                           |
| **单 tab 单 debugger**（用户开 DevTools 或我们自己的网络调试器占用）          | 全   | `onDetach` 一等事件 + 互斥门 + 用户提示                                        |
| **一个 tab 只能被一个会话拥有**                                               | 全   | D7 归属仲裁；`TAB_OWNERSHIP_CONFLICT`                                          |
| **大 payload**（截图 / `getResponseBody`）                                    | 全   | 本地跳用命名管道 / UDS 二进制帧，不经 base64 JSON；必要时抬上限                |
| **版本漂移**（扩展被商店静默更新）                                            | 全   | `tunnel/hello` 强制协商；`EXTENSION_VERSION_MISMATCH`                          |
| **桌面持有 CDP 帧会引入语义**                                                 | 全   | 硬约束：桌面侧只允许 §4.3 的方法名白名单，不接受高层动作名；review 以此为准    |
| **`debugger` 权限等于完整控制**                                               | 全   | 显式授权 → 站点 allowlist → 高风险动作审批 → 一键撤销 → 全量审计，四件缺一不可 |
| 同名多 agent 的 native host 互相覆盖                                          | 全   | 所有权标记 + 只删自家（§1.2）                                                  |

---

## 9 外部依赖与未决问题

**外部依赖**

1. 应用商店上架（Chrome Web Store / Edge Add-ons）——自托管那条路已经打通（§10.14），商店
   仍然只有它是不可替代的：**用户默认 profile 里的静默安装**要么来自商店，要么来自策略。
2. macOS 签名证书与公证账号。
3. 企业策略模板（受管机群）：产物与写入逻辑已就位（§10.14），缺的是"把 update URL 指到内网
   https 服务器"以及**管理员权限**——本机实测普通用户写不进 `HKCU\Software\Policies`。
4. Chrome 的 native messaging 契约细节里，**拉起参数**已经实测清楚（Windows 传
   `<origin> <parent-window-handle>`，macOS 只传 `<origin>`）；**帧上限**仍未实测，暂时按
   保守上限处理。

**未决问题**

1. **远端隧道的地址与鉴权**（P5）：桌面拨节点地址，`endpoint` / `token B` 由 Master 下发；
   要处理节点防火墙、显式端口、以及"用户换机器后旧 grant 失效"。
2. **是否与 iab 统一 tab 身份**：mention 协议里的 family 名要不要把 extension 纳进来，
   决定 `user_open_tabs` / `claim_tab` 的寻址语义是否与外部绑定档一致。
3. **扩展渠道与代次命名**：照上游做 `dev` / `internal` / `prod` 三条宿主名，还是只做一条。
   宿主名要带协议代次（§1.2），所以这是"渠道 + 代次"两个维度。
4. **是否复用 `browserext/` 的钉 key**：钉 key 只对 unpacked 生效、商店会给自己的 id，
   所以真正要决定的是 **id 集合怎么维护**（`allowed_origins`、协议协商、revision 何时 bump）。
5. **平台接口的边界**：安装器与本地通道两处都要平台实现，是否统一成 `internal/platform` 一个包
   （Win/mac 各一文件），还是分散在各自模块。倾向前者。
6. **是否读浏览器 profile 数据做显示名**（Qwen 用 LevelDB 扫 `Local State` + `Local Extension
Settings`）：能给出"Chrome · 工作"这类名字，但那是用户浏览器数据。P0 用活握手判定即可，
   要不要为 UI 体验去读，是隐私取舍。

---

## 10 落地状态

| 里程碑                | 状态                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P0 Windows 最小闭环   | **已过验收**：真 Chrome 加载真扩展 → 真宿主 → 真桥 → 真节点（§10.2、§10.5）                                                                                                                                                                                                                                                                                                                                                                                                         |
| P0-mac macOS 最小闭环 | **已过真机验收**（§10.15）：真 Mac（Intel / macOS 12.4）+ 真 Chrome → 真扩展 → 真宿主 → 真桥 → UDS → 真节点，`Target.getTargets / attachToTarget / navigate / createTarget` 与 `browser_list` 全通；双 profile（D7）也过。**签名 / 公证仍缺证书**（外部依赖，见 §9）                                                                                                                                                                                                                |
| P1 CDP 隧道           | **已贯通**：attach → `Runtime.evaluate` → `Page.navigate` → `Target.createTarget/closeTarget` 都在真浏览器上跑过（§10.5）                                                                                                                                                                                                                                                                                                                                                           |
| P2 归属 / 降级 / 审批 | **已完成**：四态如实上报（§10.1）、桌面托管两档的撤销开关（§10.7）、站点权限矩阵与逐轴审批档位（§10.8）、**多 profile 归属（D7，§10.9）** 都已做，都有真实链路验收                                                                                                                                                                                                                                                                                                                  |
| P3 设置面与审计       | **已完成**：状态与装/卸宿主（§10.4）、两档开关（§10.7）、「浏览器」设置页接真策略（§10.8）、节点动作轨迹（§10.10）、跨重启/跨节点的长期归档（§10.12）；验收三条腿都在——配置面过真实栈 smoke（§10.11；条数随覆盖增长，现为 144 checks，见 §10.19）、归档触发过真机进程级链路（§10.12）、**设置页过真应用 Electron e2e**（§10.13，三条用例；顺带抓出并修掉站点规则整条替换的 bug）                                                                                                    |
| P4 分发与版本配对     | **自托管那一半已完成**（§10.14 + §10.16 + §10.18）：CRX3 签名（与 Chrome 自己的打包器逐字段对齐）+ `update.xml` + **三级落点都在真机验过**（Windows 策略被 ACL 拒 → Windows 外部扩展注册表项 → macOS 外部扩展文件）；真机验收"真 Chrome（Windows 与 macOS 各一次）从本机更新服务器装上我们签名的 CRX"；设置页**一键装进我的浏览器**（打包 → 本机托管 → 写落点 → 可移除）过了真应用 e2e（4 passed）。**商店上架与"把产物放到内网 https 服务器"仍是外部依赖**；版本配对回归用例已钉住 |
| P5 远端 Node          | 未开始（待决，见 D9）                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

> 本文是计划，不是记录。每完成一个里程碑在这里补状态并写明**验证命令与实际输出**，
> 沿用 [review-panel-plan.md](review-panel-plan.md) §10 的写法。

**已落地的四块（均自测通过）**

| 组件                         | 位置                                                | 验证                                                                                                                                                                                                                                      |
| ---------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W4 宿主（Go）                | `../browser_host/cmd/syntropy-browser-host`         | `gofmt -l` 无输出、`go vet` 通过、`go test` 5 包全绿；CLI 冒烟：`install` → 幂等重装 → `uninstall`（真实 HKCU 键确认被清理，其它产品的键未动）                                                                                            |
| W5 扩展（TypeScript）        | `../chrome_extension/`                              | `node scripts/build.mjs` 通过；`node --test` 14/14                                                                                                                                                                                        |
| **W2 节点侧隧道 + CDP 仿真** | `../syntropy_node/control/browser_tunnel{,_cdp}.go` | 真命名管道上跑通握手/鉴权/转发；`browser_cdp.go` 只加了一层 transport 接口，既有 40 个文件的浏览器层未改；测试覆盖浏览器级仿真、会话转发、事件与 detach 映射、立即返回契约、以及**用真实 `browserCDPClient` 走完 attach→navigate 的链路** |
| **W3 桌面桥（Go）**          | `../browser_host/cmd/syntropy-browser-bridge`       | **真链路集成测试**：真命名管道 + 真 WS 握手（含 Origin 与 `Sec-WebSocket-Accept` 校验）+ 真帧格式，覆盖鉴权通过/被拒、节点请求原样送达、扩展应答与通知回传、未知方法回 `UNKNOWN_METHOD`、节点断开后桥退出并清理 rendezvous                |
| 帧格式（共用）               | `../common/mframe/`                                 | 节点与桥共用一份实现（原节点内那份已删除，避免两侧漂移）                                                                                                                                                                                  |

**上面这张表之后补上的三处**（当时列的是"还没接进主链路"）：

1. 桌面应用**已经**拉起桥：`browser-bridge-supervisor.ts`（进程与状态）+ `browser-bridge-protocol.ts`
   （纯逻辑，契约测试钉住）+ `browser-control-ipc.ts`（通道），在 `createMainWindow` 里注册（§10.4）。
2. 宿主与桥**已经**进 `desktop_app/tools/build.mjs` 的产物矩阵（`bin/<platform>-<arch>/`），
   随包还带一份 `browser-extension.json`（期望的扩展 id 集合）。
3. 真实 Chrome 的四件套**已经**跑通（§10.5），P0 的验收项过了；剩下的分发问题（商店 / 企业策略）见 P4。

### 10.1 节点侧接线（本轮）

| 项                   | 位置                                                                                           | 证据                                                                                             |
| -------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 隧道随节点启动       | `syntropy_node/backend/backend.go` 在注入宿主通道的同一处调 `nodecontrol.StartBrowserTunnel()` | 失败只记一笔，不影响其余三档                                                                     |
| 第四档后端上报       | `browser_backends.go`：`id=extension / type=extension / host=desktop-app / user_tabs=true`     | `TestBrowserBackendsReportTheFourTiers`                                                          |
| 可用性三态           | 隧道没起来 → `tunnel-unavailable`；起来了没桥 → `no-desktop-bridge`；桥接上 → 可用             | `TestBrowserBackendsExtensionTierReflectsTunnelState`（**真拨命名管道 + 真握手**后断言变为可用） |
| 测试不写真实用户目录 | 隧道改成注入式（`StartBrowserTunnel` / `CloseBrowserTunnel`），执行器构造时**不再**启动它      | 若在构造函数里启动，每个测试都会往真实 `%LOCALAPPDATA%` 写 `tunnel.json`                         |

顺带修掉一个测试暴露的真 bug：`browserTunnelServer.Close()` 原本只关监听器、不关已接入的连接，
于是那条连接继续占着命名管道实例，同一进程再监听同名管道会拿到"拒绝访问"。

### 10.2 真实场景验收：harness 已就位，但本机被环境挡住

harness：`syntropy_node/control/browser_e2e_test.go`（`-tags browsere2e`），显式执行：

```powershell
Set-Location syntropy_node
go test ./control/ -tags browsere2e -run TestRealChromeExtensionEndToEnd -v -timeout 6m
```

它会自己构建宿主与桥、注册原生消息宿主、起真隧道与真桥、拉起浏览器加载扩展，然后经 CDP
仿真层做真动作（列目标 → attach → `Runtime.evaluate` 读标题 → `Page.navigate` →
`Target.createTarget` / `closeTarget`），最后清理注册表。

**本轮真的跑到了**（都是实跑输出）：宿主注册成功（`ready: true`，写在真注册表里）；
桥在**真命名管道 + 真 WS** 上接上了节点（`node-connected` / `ready`）；
浏览器确实打开了我们给的探测页（CDP 目标里出现 `file:///.../first.html`）。

**挡住的是"浏览器加载扩展"这一步**，两条本机事实：

| 事实                                                             | 证据                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 本机装的 **Google Chrome 154.0.8037.98 忽略 `--load-extension`** | Chrome 自己的日志：`--disable-extensions-except is not allowed in Google Chrome, ignoring`；用 CDP 列目标，只有组件扩展（Google Hangouts 等）与探测页，**没有我们的扩展 id**                                                                                 |
| **Chrome for Testing 149 / 155 在本机起不来**                    | 官方 CI 分发，解压完整（308 文件 / 416 MB）；`chrome.exe` 立即退出 `code=3`、无任何输出，连 `--headless=new --dump-dom about:blank` 也是 `code=3`，profile 目录都没创建。**原因未确证**，疑似本机安全软件拦下未签名的新二进制（装有腾讯电脑管家 + Defender） |

因此 harness 现在会**自己判定并跳过**（不是失败）：先经 CDP 确认扩展是否真的加载，没有就
`t.Skipf` 并打印原因与出路——避免把"环境不允许"误读成"链路有 bug"。

**出路（也是计划本就该走的路）**：产品路径是"商店安装 / 企业策略强推"，`--load-extension`
只是测试便利。要跑真实验收，需满足其一：换一台接受该开关的浏览器（用 `SYNTROPY_E2E_BROWSER`
指定），或先用策略把扩展装进一个隔离 profile 再跑。

### 10.3 扩展档成为**可用后端**（本轮）

之前 `BrowserBackends()` 会报出第四档，但没有任何代码从 `currentBrowserTunnel()` 建会话——
agent 看得见却用不上。现在补齐了，关键是**不为它新造动作面**：

| 项             | 位置                                                 | 说明                                                                                                                                                                         |
| -------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 会话建立       | `browser_extension_backend.go` 的 `extensionSession` | 取当前对端 → `newTunnelCDPTransport` → `newBrowserCDPClient` → 包装成 `browserProcess`（`attached: true`：这台浏览器不归我们所有，收尾只断连接）→ 注册为外部绑定 `extension` |
| 寻址           | `browserSessionFor` 的早退分支                       | `target="extension"` 与 `browsers_connect(browser="extension")` 两条入口都通；后者单独早退，免得报"extension 没装"让模型以为换个名字再试                                     |
| 对端更换即重建 | `extensionPeer` 字段                                 | 桥/扩展重连（浏览器重启、MV3 worker 被回收）后旧 CDP 连接已废；比较的必须是"建会话时的那条对端"，比较"此刻的那条"永远等于自己，等于没比                                      |
| 其余动作面     | 无需改动                                             | open / goto / read / click / locator / screenshot / tabs / `user_*` 全部照旧——它们最终都落在 `browserCDPClient` 上                                                           |

**修掉的两处真问题**（都是本轮测试逼出来的）：

1. `browserSessionFor` 里通用的 `userSessions[target]` 查询排在扩展档分支之前，于是"登记过就
   一直能用"这条外部绑定的语义被套到了扩展档上——对端换人后仍返回废掉的会话。扩展档分支
   必须排在前面。
2. `userBinding`（`user_*` 动作的解析入口）同样绕过校验，已改为对扩展档走 `extensionSession`。

**验证**：`browser_extension_backend_test.go` 5 个用例全绿——隧道没跑/桌面没接上两种错误必须
可操作（不能报"没装"）；对端接上后经"隧道 → 仿真 → 扩展"三层真的发出 CDP（`Target.getTargets`
→ `tab/attach` → `Page.navigate` 落成 `tab/send`）；重复取会话要复用、对端换人必须重建；
最后从 `execute` 入口走一遍 `user_open_tabs`，证明动作面照旧可用。
同轮 `control` 全量里本线 **27 PASS / 0 FAIL**（唯一失败是既有的 `TestWindowsExecutorActivateWindow`
——那条依赖桌面上真有某个资源管理器窗口，与本改动无关）。

### 10.4 设置面（渲染层）已接（本轮）

四段链路都接上了，**用户能在设置页看到状态并装/卸宿主**：

| 段         | 位置                                                        | 内容                                                                                                      |
| ---------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 契约       | `packages/desktop-bridge/src/contracts.ts`                  | `BrowserControlSnapshotSchema` + 5 条通道（state / refresh / installHost / uninstallHost / stateChanged） |
| 预加载     | `apps/desktop/src/preload/preload.ts` + `renderer/env.d.ts` | 4 个 invoke + 1 个订阅，逐个过 schema parse                                                               |
| 渲染层数据 | `renderer/state/desktop-shell.ts` → `App.tsx`               | 订一次推送、读一次初始值；装/卸的结果也经推送回来，所以按钮只触发动作                                     |
| 界面       | `renderer/BrowserSettingsPage.tsx`                          | 浏览器设置页新增「浏览器控制」分节：用户态说明 + 扩展 id + 检查状态 / 安装·启用 / 卸载三个动作            |

**验证**：`tsc -b` 整个 desktop_app workspace **exit 0**；契约测试 **20/20**（其中 4 条是
本轮新加的**防漂移**用例——主进程产出的快照必须能过 IPC 的 schema；两处各写一遍类型迟早会
漂移，漂移的后果是设置页在 parse 阶段抛错、用户看到"打不开那一页"）；`oxfmt --check` 与
`oxlint --deny-warnings` 在我改动的文件上干净。

**局限（如实记）**：

1. 这一节**没有组件测试**，也**没有在真机跑过 Electron 应用**——只到类型与契约层面。
2. 契约全量 93 个文件里有 3 个既有失败（`local-files` 的路径大小写、`factory-reset` 与
   `factory-reset-ownership` 的进程清扫/可执行归属探测），都是依赖本机状态的既有用例，与本
   改动无关，我没有去"修"它们。

### 10.5 **真实场景验收通过**（本轮，此前一直受阻）

```powershell
Set-Location syntropy_node
$env:SYNTROPY_E2E_BROWSER = "<Chrome for Testing 的 chrome.exe>"
go test ./control/ -tags browsere2e -run TestRealChromeExtensionEndToEnd -v -timeout 12m
```

`--- PASS: TestRealChromeExtensionEndToEnd (2.45s)`，可重复跑，跑完用户目录与注册表都干净。
覆盖的**真实动作**：真 Chrome 加载真扩展 → 扩展经真原生消息宿主建立连接 → 桥接上真节点 →
列目标（看到的是真实标签页）→ `attach` → `Runtime.evaluate` 读页面标题 → `Page.navigate`
→ `Target.createTarget`（在用户浏览器里真的新建了一个标签页）→ `closeTarget`。

**为什么之前一直连不上**：本机装的 Chrome 稳定版 **154 明确忽略 `--load-extension`**
（Chrome 自己的日志：`--load-extension is not allowed in Google Chrome, ignoring.`）。
换成 Chrome for Testing 就能加载——它接受该开关。同时记一条本机策略：带
`--remote-debugging-port` 启动时浏览器会直接退出，所以验收链路刻意不依赖浏览器自己的调试端口。

### 10.6 这一轮修掉的 5 个真 bug

都是"静态看都对、真跑才暴露"的那一类；每个都补了用例钉住：

| #   | bug                                                                              | 症状                                                                                        | 修法                                                     |
| --- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 1   | 宿主注册表路径把 `Software\` 前缀加了两遍（`destinations` 带了、注册器又加一次） | 所有键落在 `HKCU\SOFTWARE\Software\...`，浏览器一个都读不到；而我们的 `status` 还报 `ready` | 前缀只加一次，并用用例钉住三个浏览器族的**完整路径**     |
| 2   | 扩展 manifest 声明了三个不存在的图标                                             | Chrome **拒绝加载整个扩展**（日志：`Could not load icon 'icons/icon-16.png'`）              | 去掉 icons 声明（图标属上架阶段的资产）                  |
| 3   | MV3 service worker 懒启动，而扩展没有任何事件源                                  | worker 跑完就睡，连接永远不会发起；外部看起来"扩展像没加载"                                 | 加 30 秒心跳 alarm + `onInstalled`，并在每次唤醒时保心跳 |
| 4   | `NativeHostLink` 在构造函数里就完成连接，而 ready 回调在之后才注册               | 宿主被 Chrome 拉起，却**没有人跟它说话**（握手永远没发出去）                                | 晚注册时当场补发一次 ready                               |
| 5   | 扩展的 `RpcClient` 只认字符串 id，而节点侧隧道用**数字** id                      | 节点发来的请求被当成通知、永远不回；节点侧每条命令都超时                                    | 两种 id 形状都支持，回执原样带回对端的 id                |

harness 自身也修了四处同类问题：`SYNTROPY_BROWSER_TUNNEL_DIR` 只有桥看得见（宿主是 Chrome
拉起的、看不见环境变量）→ 四方统一走平台约定目录；桥给了 `--dir` 而节点没给 → 同理；
`exec.Command` 默认给子进程空设备 stdin，而桥开了 `--watch-stdin` → 一起步就退出；
cleanup 直接 kill 让桥来不及删自己发布的 `rendezvous.json`。

> 环境说明（与本仓库无关）：本轮中途本机 PowerShell 会话的内置模块与 C: 上的 Go 构建缓存/
> 工具链被外部因素破坏（`PSModulePath` 缺 `$PSHOME\Modules`、`go-build` 不可写、模块缓存
> 文件丢失）。用 `GOCACHE` 指到工作区、`GOPROXY` 指到可达镜像绕过去了；排查与结论不受影响。

顺带记两个只有真跑才会暴露的坑（已写进各自 README）：

1. **EFS 加密目录下改名会失败**：本机整个 `%LOCALAPPDATA%` 带 `Encrypted` 属性，
   `os.CreateTemp` + `os.Rename` 报 `ERROR_NOT_SAME_DEVICE`；宿主的原子写因此带一条就地写的退化路径。
2. **Windows 的 Chrome 会给宿主两个参数**（origin + 窗口句柄），macOS 只给 origin；
   宿主靠 `argv[1]` 是否以 `chrome-extension://` 开头来区分"被浏览器拉起"与"人手跑子命令"。

### 10.7 桌面托管两档的撤销开关（本轮，P2 的第一块）

**先查再改**。`browser_*` 的 target 有四类：受管实例（`chrome` / `edge`，就是集成目录里的
id）、外部绑定（`user-*`）、以及由桌面应用托管的两档（`iab` = 应用内嵌浏览器、
`extension` = 用户自己那个已经登录的 Chrome）。前两类天然被 `authorizeBrowserAction` 的
`integration_enabled` 约束；后两类不在集成目录里，`known` 判假就直接放行——于是**整条链路
在设置页上没有任何开关**：用户关不掉"让 Agent 用我的 Chrome"，也没有任何一条路径会去动那条
已经接上的隧道。这就是 P2 里"撤销开关"那一项之前的实底。

| 项             | 位置                                                               | 做了什么                                                                                                                                         |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 档位名单与判定 | `syntropy_node/control/browser_tier_policy.go`（新）               | `iab` / `extension` 进"可单独启停"的档位名单；开关沿用同一份 `integration_enabled`（**不动 proto**）；`BrowserTierLifecycle` 收口副作用          |
| 闸门           | `computer_use.go` 的 `authorizeBrowserAction` / `knownIntegration` | 档位 id 同样受单档开关约束；`SetIntegration("extension", false)` 不再报"未知集成"                                                                |
| 立即失效       | `TunnelBrowserTierLifecycle` + `backend.go` 接线                   | 关掉扩展档 → **当场**断开本机隧道并删掉 `tunnel.json`（桥看到节点断开就退出、扩展随之掉线）；重新打开 → 按需重建。只动扩展档，其余三档不受影响   |
| 设置面         | `SettingsPage.tsx` + `computer-use-client.ts`                      | 浏览器面清单里 `host=desktop-app` 的两行各带一个开关，读 `policy.integrationEnabled[id]`（缺省开）；关掉后那行改说"已停用：Agent 不会使用这一档" |
| 路由校验       | `web_backend/service/computeruse/computeruse_service.go`           | 集成开关那条路由原先只认节点上报的集成目录，现在也认 `host=desktop-app` 的档位 id                                                                |
| 默认策略       | `syntropy_master/handle/settings/computer_use.go`                  | 默认策略里显式写 `extension: true` / `iab: true`（默认开启的是能力，不是危险动作）                                                               |

**验证（实际输出）**

```text
$ go test ./control/ -run 'BrowserTier|SetIntegration' -count=1 -v
--- PASS: TestBrowserTierSwitchGovernsTheDesktopHostedTiers (0.01s)   # 关掉一档不动另外三档
--- PASS: TestSetIntegrationAcceptsBrowserTiers (0.00s)               # 档位 id 走集成那条通道，未知 id 仍报错
--- PASS: TestBrowserTierSwitchClosesAndRestartsTheTunnel (0.01s)     # 真隧道：关掉即断开、接入信息一并清掉，重开按需重建
--- PASS: TestBrowserTierLifecycleFailureDoesNotFailPolicyApply (0.01s)
ok  	syntropy_node/control	0.061s

$ go test ./control/ -tags browsere2e -run TestRealChromeExtensionEndToEnd -v -timeout 12m
--- PASS: TestRealChromeExtensionEndToEnd (7.77s)                     # 真 Chrome 那条链路不受影响
                                                                      # 同一份 harness 的耗时随首次启动 / 杀软扫描在 2.5s ~ 15s 之间波动

$ desktop_app: node_modules/.bin/tsc.cmd -b → 无输出（exit 0）
$ desktop_app: vitest run tests/contract/computer-use tests/component/settings-page
  Test Files  2 passed (2) / Tests 71 passed (71)
$ web_backend: go test . -run ComputerUse -count=1 → ok  web_backend 0.284s
```

其中 `settings-page.component.test.tsx` 新增两条：清单里 `host=desktop-app` 的行有开关、
其余行没有；开关关掉后那一行改说"已停用"且不再画可用圆点。契约测试新增一条：档位 id 走的是
集成那条路由（`/api/computer-use/integrations/extension`），且 `computerUseBrowserPolicyKey`
只对 `host=desktop-app` 返回键。

**真链路里也验了一遍关掉之后的后果**：`browser_e2e_test.go` 在原来的十步之后加了第 11 步
（`TunnelBrowserTierLifecycle` 直接驱动 harness 手里那条真隧道）——关掉扩展档 → 隧道当场断开、
接在上面的那条通道关闭、**桥进程真的退出**（节点断开是它的退出条件之一）；重新打开 → 隧道
按需重建。桥的退出判定之所以能写死在用例里，是因为 `serve` 的 `relayOutcome` 明确区分
"扩展断开"（继续等下一次连接）与"节点没了"（退出让桌面应用重启整条链路）。

**如实记两条边界**：

1. `apply_policy` 里"断连接"这一步失败**不上抛**：策略已经生效、之后的动作已经会被闸门拒绝，
   把它变成错误只会让设置页报"保存失败"——那是与事实相反的结论。代价是连接可能多留一会儿。
2. 桌面面那三条 Windows 探测用例（`TestWindowsComputerUseClickProbe` /
   `TestWindowsComputerUseDragScrollSetValueProbes` / `TestWindowsExecutorActivateWindow`）
   在本机失败，且**与本轮改动无关**：它们真的去点桌面——探测点 (0,0) 处是 Windows Terminal，
   被安全禁区拒绝；`activate_window` 则要求桌面上真有一个标题为"Downloads - 文件资源管理器"
   的窗口。本轮不碰桌面面。

### 10.8 站点权限矩阵与逐轴审批档位（本轮，P2 的第二块）

**上游形状**（`browser-live-walkthrough.md` §13.4–13.5、`browser.md` §2.3，都是 A 级证据）：
配置在 `~/.codex/browser/config.toml` + 远端 `/wham/browser/settings`，字段是
`approvalMode / downloadApprovalMode / uploadApprovalMode`（三条轴各一档）+
`allowedOrigins / deniedOrigins / allowedDownloadOrigins / …` 八张名单 + 站点权限矩阵
（browsing / downloads / uploads / cdp × 站点，值 `allow / block / useDefault`）+
**独立的「全量 CDP 访问」开关**（两个：Browser Use 会话级与扩展会话级，默认都关，
上游标注 Elevated risk）。写入后广播，热生效于正在跑的会话。

**落到 Syntropy 的形状**（一列一列对齐，但不搬运它的存储）：

| 层       | 位置                                                                               | 做了什么                                                                                                                                                                                                                                                    |
| -------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 判定     | `common/mcomputeruse/sites.go`（新）                                               | 站点键归一化（origin / 主机名两档写法、默认端口折叠、`file://` 也算一种站点）+ 四条轴的动作映射（download / upload / cdp 显式列，其余浏览器动作默认落在 browse）+ 判定：block → deny，ask → confirm，allow → 放行；缺省（没有表态）按允许，收紧必须显式设置 |
| 闸门     | `common/mcomputeruse/decision.go` 的 `Gate`                                        | 站点那一档插在「浏览器集成」之后、「读屏 / 写输入」之前——用户对"这个站点"的直接表态比能力开关更具体；**确认解不开 block**，与安全禁区同一档                                                                                                                 |
| 审批档   | 同上                                                                               | `alwaysAsk` 一律先问；`neverAsk` **只对显式站点允许生效**（默认档的允许是"没有表态"，不能当成为某个站点做过的决定，否则打开设置页就等于全站免问）                                                                                                           |
| 全量 CDP | 同上                                                                               | 开关是前置条件：关着时 `cdp_call / cdp_events` 一律拒绝，站点规则只能在其上继续收紧（block / ask），不能把它打开——否则"某个站点允许"会变成"整台浏览器都能发原始 CDP 命令"                                                                                   |
| 站点来源 | `syntropy_node/control/browser_site_policy.go`（新）                               | 载荷里带地址的动作（open / goto / new_tab / claim / tab 引用，含嵌套 `tab` 记录）用那个地址；其余动作问执行器"这一档此刻在哪张标签页上"（只读内存，不做往返）；拿不到站点按"未表态"处理                                                                     |
| 总开关   | `CodexComputerUseSurfacesForPolicy` + `classify`                                   | 设置页的「启用浏览器面」关掉时：整面不装配（新的 Agent 拿不到这些动作），并且闸门兜底拒绝既有装配——同时断开扩展档隧道（`applyBrowserTierPolicy`）                                                                                                           |
| 如实上报 | `capability_get("cdp")`                                                            | 多报两件事实：`fullCdp`、`rawCdp`（关掉时附一句"去设置里打开全量 CDP"）。能力存在与策略放行是两件事，模型不该把策略拒绝读成"这一档坏了"                                                                                                                     |
| 持久化   | `settings.BrowserUsePolicy`（**复用既有消息**，字段 5 弃用 + 新增 sites 矩阵）     | 档位收敛成封闭值域，站点键归一化，四轴全空的规则不进投影                                                                                                                                                                                                    |
| 下发     | `projectBrowserUsePolicy` + `computerUsePolicyFingerprint`                         | 浏览器策略跟电脑操控策略**同一份 apply_policy、同一个指纹**：分成两条流的话，浏览器设置改完指纹不变，节点永远收不到新版本；`UpdateSystemSettings` 收到 `browser_use` 也立刻推                                                                               |
| 路由     | `web_backend/service/computeruse`                                                  | `GET/PUT /api/computer-use/browser` + `PUT/DELETE /api/computer-use/browser/sites`（origin 走请求体 / 查询串——**不能当路径参数**，见 §10.11）：逐条增删站点规则，值域不认识就 400（静默落成"不表态"会让用户以为设置生效了）                                 |
| 界面     | `renderer/browser-use-client.ts`（新）+ `SettingsPage.tsx` 的 `BrowserUseSettings` | 原来的占位页（三个写死的开关 + 两个假按钮）换成真页面：启用浏览器面 / 全量 CDP / 三条审批档 / 默认档 + 站点权限矩阵（逐轴下拉、添加、移除）。改动即刻经 Master 下发                                                                                         |

**验证（实际输出）**

```text
$ (common) go test ./mcomputeruse/ -count=1 -v
PASS 78 / FAIL 0        # 新增 sites_test.go：归一化、轴映射、矩阵优先级、审批档、CDP 开关、Gate 落点

$ (syntropy_node) go test ./control/ -run 'TestClassifyAction|TestSite|TestBrowserSite|TestBrowserUseSwitch' -count=1
ok  	syntropy_node/control	0.062s    # 站点来源（当前标签页 / 载荷 / 嵌套）、免问、CDP 前置条件、总开关

$ (syntropy_master) go test ./handle/settings/ -run 'ComputerUse|BrowserUse' -count=1
ok  	syntropy_master/handle/settings	0.058s    # 投影收敛 + 指纹把浏览器设置算进去

$ (web_backend) go test . -run 'BrowserPolicy|BrowserSite|ComputerUseRoute' -count=1
ok  	web_backend	0.291s    # 部分更新合并、值域 400、站点增删与归一化、删除幂等

$ (desktop_app) node_modules/.bin/tsc.cmd -b  → 无输出（exit 0）
$ (desktop_app) vitest run tests/contract tests/component
  Test Files  3 failed | 232 passed (236) / Tests 3 failed | 2060 passed (2068)
  # 三条失败是既有的本机状态用例（local-files 路径大小写、factory-reset 与
  # factory-reset-ownership 的进程清扫），与本轮改动无关；本轮新加的两个文件全绿

$ (syntropy_node) go test ./control/ -tags browsere2e -run TestRealChromeExtensionEndToEnd -v -timeout 12m
    站点策略: 站点 file://（第二页）      # 真 Chrome 里列出来的真实标签页
--- PASS: TestRealChromeExtensionEndToEnd (8.37s)

$ (syntropy_master) go test ./... -count=1   → 全部 ok，0 FAIL
$ (syntropy_node) go test ./control/ -count=1
--- FAIL: TestWindowsExecutorActivateWindow        # 既有：要求桌面上真有一个资源管理器窗口
```

真实链路那一段（harness 的第 11 步）不只是比字符串：经控制器走 `user_open_tabs` 列用户自己的
标签页 → 站点设成 `block` 后同一个 `user_claim_tab` 被拒且理由里带着站点 → 改成
`allow + neverAsk` 后 claim 真的在用户浏览器里附上调试会话、`read` 读回"第二页" → 默认档收紧
成 `block` 后读动作被拒。第 12 步（撤销开关）仍在其后单独验断开与重建。

**如实记两条边界**：

1. **多 profile 归属仍未做**（D7）：一个 profile 一个 UUID、首握手选中——现在的扩展档仍是
   "谁连上来就用谁"，两个浏览器同时装扩展时只有先握手的那条链路是活的。
2. 站点键按**精确 origin + 主机名**两档匹配，没有通配符与子域后缀规则（上游的 "site or
   pattern" 里 pattern 那一半没做）；`file://` 被当成一个站点整体对待，无法按文件路径细分。

> 排障记一笔：`TestBrowserCDPLiveRoundTrip` 在与 master 的全量套件**并行**跑时挂在 TempDir
> 清理（真 Chromium 进程还没退干净、日志文件被占）。单独跑通过（0.81s）。这是那套 live 用例
> 的既有洁癖，不是本轮改动：本次改的是策略与报表面，不碰进程生命周期。

### 10.9 多 profile 归属（本轮，D7 落地）

**上游形状**：ChatGPT 的扩展装在哪个 profile 就是哪个 profile 的会话，app 侧按扩展实例区分
连接与标签页；模型面的寻址用 `agent.browsers.list()` 给出的 id（`browser-extension.md` §6.5、
`browser-contract.md` 的 `BrowserUser` 面）。这正是 D7 的来源：**一个 profile 一个身份，首握手
选中，其余闲置**。

**落到 Syntropy 的形状**（身份从扩展一路带到节点，桥做多连接复用）：

| 层   | 位置                                                                            | 做了什么                                                                                                                                                                                                                                |
| ---- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 扩展 | `chrome_extension/src/{protocol,desktop-link,service-worker}.ts`                | 鉴权与 `tunnel/hello` 里带上持久 UUID（`chrome.storage.local`，一个 profile 一个）与浏览器族（从 UA 认，`browserFamilyFromUserAgent`）                                                                                                  |
| 桥   | `browser_host/cmd/syntropy-browser-bridge/main.go`                              | 从串行 accept 改成**多连接复用**（每条扩展连接一个协程）+ `bridgeHub` 转接台：扩展接入/断开时把归属转成 `tunnel/identify` 通知给节点；节点帧按 `params.instanceId` 路由（路由字段转发前摘掉）；扩展的通知补上 `instanceId` 再转给节点   |
| 节点 | `browser_tunnel.go`                                                             | 实例表 + 选主：`tunnel/identify` 在**读协程里被截获**（不进事件队列）、首个报到者选中、掉线按接入顺序补位；每条实例一个 `tunnelInstancePeer` 视图（调用注入 instanceId、事件按实例分发），上层会话与 CDP 仿真看不出多个实例共享一条链路 |
| 寻址 | `browser_extension_backend.go`                                                  | `extension` 是「被选中那一档」的别名，`extension:<instance_id>` 是具体实例；会话按实例建（一个 profile 一份 CDP 连接），对端换人即重建；`browser_list` 一个实例一行（带 `selected`），模型据此点名                                      |
| 界面 | `computer-use-client.ts` + `ComputerUseBrowserList`                             | 扩展那一档下面挂出"此刻接上来的实例"：`chrome · 2175864a` + 「正在使用 / 已连接但闲置」                                                                                                                                                 |
| 状态 | `control.BrowserTunnelInstance`（新消息，`ComputerUseState.browser_instances`） | id / 浏览器族 / 选中位 / 接入时间，设置页与 capability 都能读                                                                                                                                                                           |

顺带修掉的两个真问题（都是这轮才暴露的）：

1. **桥是串行的**：旧 `serve` 一次只 relay 一条扩展连接，用户开着两个 profile 时第二条连接会
   一直挂在 accept 队列里（它的动作全部超时，而且从外面看不出为什么）。现在每条连接一个协程。
2. **登记与归属的时序**：桥的 `tunnel/identify` 紧跟握手而来，而服务端是"先握手、后登记链路"。
   归属回调因此改成**读协程启动之前**装上、链路登记之后启动读协程；`handshakeTunnel` 不再自己
   起读协程。测试里那条 `startBrowserTunnel` 用例第一次跑就撞上了这个窗口。
3. **命名管道是全局名字**：用户自己跑着的节点会占着 `\\.\pipe\syntropy-browser-tunnel-<user>`，
   于是"测试里起一条真隧道"与"用户的应用正在跑"会互相拒（`Access is denied`）。现在加了
   `SYNTROPY_BROWSER_TUNNEL_ENDPOINT`（与隧道目录覆盖同一性质：默认走平台约定，需要隔离时才指），
   两条真实链路验收都只覆盖端点、保留约定的目录——宿主是 Chrome 拉起来的，看不见我们的环境变量，
   目录必须靠约定对齐。

**验证（实际输出）**

```text
$ (common) go test ./mcomputeruse/ ./mframe/ -count=1        → ok
$ (syntropy_node) go test ./control/ -count=1                → 只剩既有的桌面探测用例失败（见 §10.8）
$ (browser_host) go test ./... -count=1                      → 全绿（含新增：归属转达、按实例路由、路由字段摘除）
$ (chrome_extension) node --test                             → 19/19（新增浏览器族识别）
$ (desktop_app) tsc -b → 无输出；vitest run tests/contract tests/component
  Tests 3 failed | 2062 passed (2070)   # 三条仍是既有的本机状态用例

$ (syntropy_node) go test ./control/ -tags browsere2e -run TestRealChromeExtensionEndToEnd -v
    扩展实例: a157cdc5-bd6c-448b-a446-1658ed8be596（chrome）
--- PASS: TestRealChromeExtensionEndToEnd (7.60s)

$ (syntropy_node) go test ./control/ -tags browsere2e -run TestRealChromeExtensionTwoProfiles -v
    实例 982eebc8-… 的标签页: 甲页
    实例 b5773c1a-… 的标签页: 乙页
--- PASS: TestRealChromeExtensionTwoProfiles (3.17s)
```

最后那条是这一节的关键证据：**真开两个浏览器进程（各自独立 profile），同一份扩展同时接到同一个
桥**，节点按扩展自报的 UUID 记成两个实例、只有首握手那个被选中；随后按 `extension:<id>` 分别点名，
每个实例只看得见自己那张探测页——多连接复用、实例级路由、按实例寻址三件事一次验完。

**如实记三条边界**：

1. **一台机器只接一个桥**：`acceptLoop` 里第二条桥链路仍会被拒（多出来的那条会让归属变糊）。
   同一台机器上跑第二个桌面应用属于未支持场景。
2. **实例 id 是标签，不是凭据**：它由扩展自己生成并上报，桥与节点都不据此鉴权——链路的信任来自
   WS 的 Origin 校验与 rendezvous token（每次运行重新生成、只写在本机用户目录里）。伪造一个
   id 换不到额外权限（同一份 token 才连得上），只会让设置页显示一个误导性的名字。
3. **闲置实例的连接不落盘**：它的会话只在被点名时才建（省一条 CDP 连接与一份标签页快照）；
   代价是第一次点名要多一次 `tabs/list` 往返。

### 10.10 浏览器动作的审计轨迹（本轮，P3 的第一块）

**上游形状**：`management_get_audit_trail()` 记的是**管理类改动**（书签 / 标签组的 before 快照，
见 `browser-live-walkthrough.md` §171 与 `browser-contract.md` 的 capability 表）——那一条我们早就
有了（受管实例的随包扩展负责，§10.6 的边界也写过）。这一轮补的是另一半：**动作轨迹**——
谁在什么时候、对哪个站点、做了什么动作、被放行 / 要确认 / 被拒、执行结果如何。

为什么必须在节点侧记：判定就发生在那一侧（安全禁区、站点策略、审批档位、集成开关全在本机），
Master 只看到"动作下发过"，**看不到"被拒"**。要回答"Agent 在我的浏览器上做了什么、被拒了几次、
拒在哪个站点"，数据源只能是执行侧。

| 层   | 位置                                                               | 做了什么                                                                                                                                                                                              |
| ---- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 节点 | `control/browser_audit.go`（新）+ `computer_use.go` 的 `Execute`   | 有界环形缓冲（20 条、新的在前、不落盘）：**被拒的在执行前就留痕**（`refused`），放行的在执行后按 `ok` / `error` 留痕；站点用与闸门同一套来源（载荷 / 当前标签页）；只记浏览器动作，桌面动作不进这张表 |
| 契约 | `control.ComputerUseAuditEntry` + `ComputerUseState.browser_audit` | `at_ms` / `action` / `target` / `site` / `tier` / `reason` / `detail` / `outcome` / `error`                                                                                                           |
| 界面 | `computer-use-client.ts` + 设置页「浏览器面」分节                  | 「最近的动作」：时间 · 动作（去掉内部 `browser_` 前缀）· 结果 · 站点 · 拒绝原因码；空表时说清"还没有浏览器动作"                                                                                       |

**顺带修掉一个 D7 引入的真 bug**（审计用例第一次跑就撞上）：裸 `extension` 别名不再是会话键
（会话按实例记 `extension:<id>`），于是站点解析取不到站点 → 站点策略静默退化成"没有站点"→ 走默认
档，用户设的站点规则**看着在、实际不生效**。修法：新增只读的 `sessionForTarget`（受管实例 /
外部绑定 / 扩展档含裸别名 → 解析到被选中的实例），站点判定与 `capability_get` 都走它；并补用例
`TestBareExtensionAliasResolvesToTheSelectedInstance` 钉住。

**验证（实际输出）**

```text
$ (syntropy_node) go test ./control/ -run 'TestBrowserAudit|TestBareExtensionAlias' -count=1
ok  	syntropy_node/control	0.056s    # 拒绝/成功/失败三类留痕、桌面动作不进表、有界、新的在前

$ (desktop_app) vitest run tests/contract/computer-use tests/component/settings-page
  Test Files  2 passed (2) / Tests 78 passed (78)

$ (syntropy_node) go test ./control/ -tags browsere2e -run TestRealChromeExtensionEndToEnd -v
    扩展实例: 04102eb8-181d-4f73-a6de-90fe3946aff3（chrome）
--- PASS: TestRealChromeExtensionEndToEnd (7.73s)
# 真实链路里的断言：跑完"设 block 被拒 → 改 allow+neverAsk 放行并读成功 → 默认档收紧再被拒"
# 之后，轨迹里最新一条是被拒的那次 read（reason=policy.site_blocked、site=file://），
# 往前还能找到那次放行成功的 read
```

**如实记两条边界**：

1. **只管最近 20 条、不落盘**：节点重启即清空。长期归档属于 Master，但**不能复用
   `agent.browser` 这个域**——那是 iab 工具调用的中继域（`handle/settings/browser_tool.go` 按它
   撮合待执行调用），把审计记录混进去会把"待执行调用"与"动作记录"搅在一起。要做就得另开一个
   域与一个消费者，这是下一轮的事。
2. **审计记的是"经过闸门的动作"，不是"页面里发生的一切"**：渲染器自己发起的导航、页面脚本
   自己做的事不在里面（与 §10.6 的 URL 策略同一层边界）。

### 10.11 真实栈验收：配置面跑通，并抓出两个"只有起真服务才看得见"的问题（本轮）

计算机操控那套端到端验收脚本（`desktop_app/tools/smoke-computer-use.ps1`）本来就是这条链路的
验收工具：它起真 App Server（bootstrap 模式）、经 `/api/master/deploy` 部署打包的 Master、再用
`/api/node/create` 注册一个本机 worker 节点，然后对着一整套 REST 面下断言。本轮把**浏览器面的
配置闭环**接进这套脚本（新增 30 条断言），并在修掉两个问题后跑通：

```text
$ powershell.exe -File desktop_app\tools\smoke-computer-use.ps1
Platform     : windows
Available    : True
StateLatency : 52.7135ms
Checks       : 125
computer use smoke passed (125 checks)
```

那一节覆盖：默认浏览器策略、逐轴审批档位的字段级合并与值域归一化（`AlwaysAsk` → `alwaysAsk`）、
站点矩阵（origin 与裸主机名两种键、非法值 400、缺 origin 400、删除幂等）、总开关参与**能力面
投影**（关掉后 `surfaces` 里没有 `browser`，打开后回来——策略是异步推给节点的，所以用等待而不是
读一次）、设置页渲染的两块只读事实（接上的扩展实例、最近的动作轨迹），以及**由桌面应用托管的两档
（iab / extension）用同一套集成开关路由就能启停**。

**两个只有起真服务才暴露的问题**（都修了，都钉了用例）：

1. **站点 origin 不能当路径参数**：`PUT /api/computer-use/browser/sites/https%3A%2F%2Fexample.com`
   在真 App Server 上是 **404**——路由匹配看到的是**解码后**的路径，`%2F` 被当成分隔符。httptest
   里不报（那条用例用同样的转义路径却返回 200），所以我是起真服务 + 直接打路由才看见的。改成
   origin 走请求体（PUT）与查询串（DELETE），契约测试、渲染层客户端与脚本同步更新。
2. **验收脚本自己有两处陈旧断言**：它按"每个应用条目都带 `process` / `path`"下断言，而这两样挂在
   **窗口**上（应用条目只有 `id` / `displayName` / `isRunning` / `windows[]`，装了但没在跑的应用
   只有前两个）。断言改成：运行中的应用至少有一扇带进程名的窗口、装了但闲置的应用没有窗口。
   ——这也是"脚本没跑过就不知道它对不对"的又一例。

> 复核时的边界：这次只重建了 `syntropy-app-server.exe`（脚本用到的那一个）与 `resources/` 下的
> Go 产物；`resources/release-manifest.json` 的摘要因此是上一轮的，脚本不校验它，安装器路径会
> （`desktop_app/tools/verify-installers.mjs`）。作为环境依赖记一笔：桌面面那条 `activate_window`
> 探针本机被安全禁区拦下（前台窗口是 ChatGPT，属于"不自动化助手自身界面"），脚本按既有的容忍
> 策略只打 WARNING，不算失败。

### 10.12 浏览器动作的长期归档（本轮，P3 的第二块）

§10.10 的轨迹是**节点本机的环形缓冲**：最近 20 条、进程退出即清空。它能回答"刚刚发生了什么"，
回答不了"这些天这台机器上浏览器被动过什么"。这一轮把同一条记录**长期化**到 Master。

上游对照：上线的 `management_get_audit_trail` 记的是扩展侧的**管理改动**；我们这一块是**动作
轨迹**的持久化，两者互补并不重复（管理改动那条在 §10.6 早已落地）。

| 层     | 位置                                                                               | 做了什么                                                                                                                                                                                                                                                 |
| ------ | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 节点   | `control/browser_audit.go` + `backend/backend.go`                                  | 记录落环形缓冲的同时经发布口上抛：`ControlEvent{domain:"agent.browser.audit", body=anypb(BrowserAuditEvent{entry})}`；条目里带上**发起它的 Agent**（从面请求注入的 context 取，见 `withBrowserSurfaceAgent`）                                            |
| Master | `store/browser_audit_store.go` + `handle/settings/browser_audit.go`                | 订阅该域并落 bolt（bucket `browser_audit`，主键 `<接收毫秒>-<记录 id>`：按主键遍历即按时间升序，封顶 2000 条丢最旧）；查询 `ListBrowserAudit` 支持按节点 / Agent / 时间过滤，`limit` 默认 50、上限 200，`stored`（归档总量）与 `matched`（命中数）分开报 |
| 契约   | `model/settings/system_settings.proto` + `service/settings/settings_service.proto` | `BrowserAuditRecord`、`ListBrowserAuditRequest/Reply`、`ListBrowserAudit` RPC；`api/route` 转发、`api/client` 薄封装                                                                                                                                     |
| 网关   | `web_backend/service/computeruse`                                                  | `GET /api/computer-use/audit`（`nodeId` / `agentId` / `limit` / `sinceMs`；参数非法 400，不静默取默认值）                                                                                                                                                |
| 界面   | `renderer/browser-use-client.ts` + 设置页「浏览器」                                | 「动作归档」：时间 · 动作 · 结果 · 站点 · 拒绝原因码 · Agent；查询失败时说清"归档不可用，本机最近的动作仍在「电脑操控 → 浏览器面」"                                                                                                                      |

**一条重要发现，也是本轮验证策略的转向**：**浏览器动作不经 REST 下发**——Master 的 HTTP execute
预检只认桌面动作（`masterComputerUseKnownAction`），浏览器面由 Agent（cua_repl）驱动。于是：

- smoke（全走 REST）只能验**查询面**：路由 200、`stored`/`matched` 如实报、按节点过滤、`limit`
  截断、非法 limit / sinceMs 400，并把"浏览器动作经 REST 会被如实拒成
  `policy.unsupported_action`"这条契约钉住（省得"归档为什么是空的"变成猜谜）；
- 归档的**触发**在真机上的验证放在 Node 的进程级用例：`TestBrowserSurfaceEndToEndWithNodeRepl`
  （真浏览器 + 真 node_repl + 真命名管道 + 真控制器）本轮加了审计 / 归档断言——模型侧每一次
  rpc 都留痕、每条都带发起它的 Agent、站点是归一化 origin（`http://127.0.0.1:<port>`）、
  封套是 Master 观察者认的那个类型（`BrowserAuditEvent`），且本机环形缓冲与上抛记录同一批。

**验证（实际输出）**

```text
$ (syntropy_master) go test ./store/ -run BrowserAudit -count=1     → 归档写入/筛选/封顶 全绿
$ (syntropy_master) go test ./handle/settings/ -run BrowserAudit    → 观察者落盘 + 查询 + 别的域不进表 + 无存储报 Unavailable
$ (syntropy_master) go test ./... -count=1                          → 26 个包全绿，0 FAIL
$ (web_backend)     go test . -run 'BrowserAudit|BrowserSite|BrowserPolicy|ComputerUseRoute' → 全绿
$ (syntropy_node)   go test ./control/ -run TestBrowserSurfaceEndToEndWithNodeRepl -v
--- PASS: TestBrowserSurfaceEndToEndWithNodeRepl (2.46s)            # 真浏览器那条链路 + 本轮新增的归档断言
$ (desktop_app)     tsc -b → 无输出；vitest tests/contract tests/component → 2068 passed（3 条既有本机状态失败）

$ powershell.exe -File desktop_app\tools\smoke-computer-use.ps1
Checks       : 135
computer use smoke passed (135 checks)                              # 比上一轮多 10 条（归档查询面 + 契约）
```

**如实记三条边界**：

1. **归档封顶 2000 条、丢最旧**，且记录 id 是"节点 + 发生时间 + 动作 + 站点"：同一毫秒内同动作
   打同站点会**覆盖**而不是并列——两毫秒内重复同一条动作在真实链路上没有意义，但这是取舍。
2. **服务侧代码生成用的是本地工具链**：`protoc-gen-go v1.36.11`、`protoc-gen-go-grpc v1.6.2` 与
   仓库里那份产物逐字节一致（只差 protoc 版本注释），但 **`settings_service.pb.gw.go` 没有重新
   生成**——本地 grpc-gateway 插件与仓库那份产物有 40 行生成顺序差异，而新 RPC 不需要走 Master 的
   HTTP 网关（桌面经 web_backend → gRPC）。在装好仓库工具链的机器上跑一次 `gen_grpc.ps1` 会把它
   补齐，属预期差异。
3. **逐回合归属而非逐线程**：归档能说出"哪个 Agent、什么动作、哪个站点、什么结果"，但没有
   thread / turn 关联（面请求里只带 agent_id）。要按回合追溯得先让面协议带上 thread/turn。

### 10.13 真应用里的设置页验收（本轮）+ 它抓出的一个真 bug

到这里，浏览器面的**配置**只验到类型 / 契约 / 静态渲染——设置页从来没在真实应用里跑过。本轮
补上 `desktop_app/tests/e2e/browser-control-settings.spec.ts`：真 Master + 真 App Server +
打包口径启动的 Electron，三条用例 8.6s 跑完。

覆盖：设置页渲染出策略三块（总开关 / 全量 CDP / 三条审批档位 + 默认档）、站点矩阵（空态 +
添加行）、动作归档（新集群的空态）；以及**写路径**——加站点、改某一轴、切全量 CDP、改默认档与
下载审批、移除站点，每一步都从 App Server 的 `GET /api/computer-use/browser` 读回来核对，
证明 界面 → IPC → App Server → Master 这条链是通的（不只是"请求形状对"）。

**它当场抓出一个真 bug**：站点规则在服务端是**整条替换**，而设置页每一格下拉只发它那一轴
——于是"把下载设为 block"会把同站点的"浏览: allow"**静默擦掉**。契约测试当时只断言了"发出去的
形状对"，没有断言"没提到的轴要留着"，所以是这条真机用例（改一格 → 读回策略 → browse 变成空）
把它逼出来的。修法：`updateBrowserSite` 改成**逐轴合并**（请求体里没出现的轴保持原样；四轴全空
才删行），并在 `computer_use_route_test.go` 里钉了一条往返用例。修完再跑：三条用例全过，
smoke 的 checks 照旧。

顺带记两条 e2e 自身的坑（都写进用例注释）：

1. **`app.firstWindow()` 可能拿到启动遮罩**（`startup-window.ts` 的封面窗口），它没有侧栏、随后
   会关闭，症状是"元素找不到"紧接着"页面已关闭"。改成按内容挑：哪扇窗口有「工作区导航」哪扇才是
   主窗口。
2. **开关不能直接 `check({force:true})`**：可见部分是 aria-hidden 的样式 span，而 force 又会跳过
   "可用"检查——保存中 input 是 disabled，点下去静默失败（`Clicking the checkbox did not change
its state`）。正确做法是等它 enabled，再按用户的做法点 label。

---

### 10.14 自托管分发：签名的 CRX + 更新清单 + 三级落点（本轮，P4 的可自控那一半）

P4 原先标着"外部依赖（商店上架 / 企业策略）"，但拆开看只有**托管位置**是外部的，其余全在
自己手里：签名的扩展包、更新清单、以及"把这份产物指给浏览器"的那一下。本轮把这几件做完，
新增包 `browser_host/internal/distribute` 与命令 `cmd/syntropy-browser-dist`（子命令
`keygen` / `build` / `verify` / `serve` / `policy`）。

**四件事**

1. **身份只算一次**。扩展 id = `sha256(SPKI DER)[:16]` 的每个十六进制位映射成 `a`–`p`；
   它同时出现在 CRX 的签名公钥、`update.xml` 的 `appid`、native messaging 的
   `allowed_origins`、以及策略条目里。算法只在 `identity.go` 有一份，`keygen` 造的分发私钥
   决定 id——换 key 等于换扩展身份，所以 `keygen` 拒绝覆盖已有文件。
2. **产物**。`build` 产出 `extension.crx`（CRX3：`Cr24` + 版本 + 头长 + `CrxFileHeader` +
   zip；签名覆盖 `"CRX3 SignedData\0" | u32le(len) | signed_header_data | zip`）、
   `update.xml`（Omaha）、`distribute.json`（自描述：id / 版本 / 公钥 / 摘要 / URL）。
   同一输入产出的字节可复现（zip 时间戳归零、PKCS#1 v1.5 是确定性填充），所以回归可以比摘要。
3. **三级落点**（`policy.go`）：Windows 策略 `HKCU\Software\Policies\<产品>\ExtensionInstallForcelist`
   （静默安装且自动启用）→ 策略根不可写时**回落** Windows 外部扩展注册表项
   `HKCU\Software\<厂商>\<产品>\Extensions\<id>` 的 `update_url`（不需要管理员；代价是浏览器
   把它标成非商店扩展、装上后默认禁用，要用户启用一次）→ macOS/Linux 外部扩展文件
   `<user-data>/External Extensions/<id>.json`。回落是**一等公民**而不是失败后的手工补救：
   ACL 拒策略不是异常，而是受管机器的常态。
4. **服务**。`serve` 按 Chrome 的更新协议托管 `update.xml` 与 CRX（本机自测与内网自托管同一条路径）。

**验收（真实命令与实际输出）**

```powershell
# 单元 + 与浏览器打包器的对照（含"拿 Chrome 自己打的 CRX 过我们的解析器"）
Set-Location browser_host
go test ./internal/distribute/ -v        # 24 条用例全过

# 真浏览器安装：从本机更新服务器装上我们签名的 CRX
SYNTROPY_E2E_CHROME="C:\Program Files\Google\Chrome\Application\chrome.exe" \
  go test ./internal/distribute/ -run TestRealChromeInstallsSelfHostedCRX -v
# → PASS (2.56s)
```

浏览器日志里能看到整条链路（`--enable-logging --v=1`）：

```text
NotifyBeforeURLRequest: http://127.0.0.1:17391/update.xml?os=win&arch=x64&prod=chromecrx&prodversion=154.0.8037.98
NotifyBeforeURLRequest: http://127.0.0.1:17391/extension.crx
```

装好后 profile 里是 `Default\Extensions\<id>\0.1.0_0\`（dist 的全部文件），`Secure Preferences`
里 `location: 6`（EXTERNAL_PREF）、`from_webstore: false`、`disable_reasons: [256]`。

**本机现状（决定了产品怎么做）**：这台机器的 `HKCU\Software\Policies` ACL 是
`DESKTOP-…\huoga Allow ReadKey`——普通用户**写不进策略根**（`reg add` 报 Access is denied），
所以 Windows 上"完全静默"这一档实际需要管理员 / HKLM；外部扩展那条能写、能装，代价是默认禁用。
产品路径因此是"两条都给"：能给管理员就静默，不能就装好并引导用户点一次启用。

**边界**

- 商店上架、把产物放到内网 https 服务器、企业策略模板下发到全网机器：仍是外部依赖（§9）。
- 第三方浏览器族（Edge / Brave / Chromium）的注册表根按同一命名规则给出，**只有 Chrome 那一族
  在真机核过**（上游 `extension-ids.json` 只列了一个根，正是 §3.1 记的那个坑）。
- 版本配对的回归已就位：协议不兼容时扩展侧报 `EXTENSION_VERSION_MISMATCH`（`protocol.ts` 的
  rendezvous 校验），节点侧 hello 校验直接拒绝并给出 `peer speaks protocol N, this node speaks M`
  的明文错误；"加一个扩展 id 时已装宿主被替换"由 D6 的内容哈希副本 + manifest 重写覆盖。

---

### 10.15 macOS 真机验收（本轮）+ 它抓出的三个平台差异

目标机是一台真 Mac（Intel / macOS 12.4），**上面没有 Go、没有 Node**。所以验收走的是交叉编译
那条路：Windows 侧 `GOOS=darwin GOARCH=amd64 CGO_ENABLED=0` 编出宿主与桥，`go test -c -tags
browsere2e` 编出 28 MB 的验收测试二进制，一起 scp 过去；测试里新增 `SYNTROPY_E2E_HOST_BINARY` /
`SYNTROPY_E2E_BRIDGE_BINARY` 两个口子用预编译产物（`e2eBinary`），目标机上只需要浏览器。

**结果（真机实际输出）**

```text
# 宿主注册
syntropy-browser-host install --extension-id aiadbbfpklpnkafbpmchlfbnobdinoih
  host binary : ~/Library/Application Support/Syntropy/browser-host/5d3f4f74…/syntropy-browser-host
  ready       : true
  installed   : ~/Library/Application Support/Google/Chrome/NativeMessagingHosts/com.syntropy.browserext.v1.json
  installed   : ~/Library/Application Support/Google/Chrome for Testing/NativeMessagingHosts/com.syntropy.browserext.v1.json

# 端到端（真 Chrome → 真扩展 → 真宿主 → 真桥 → UDS → 真节点）
TestRealChromeExtensionEndToEnd        --- PASS (7.36s)
TestRealChromeExtensionTwoProfiles     --- PASS (4.12s)   # D7 双 profile
```

链路细节：隧道端点是 `/tmp/syntropy-501/b.sock`（UDS，远低于 103 字节上限），桥打出
`{"endpoint":"ws://127.0.0.1:56710/","event":"ready","protocolVersion":1}`，扩展实例
`139607c3-…（chrome）`，日志依次出现 `找到目标` / `新建标签页` / `站点策略: file://`——
也就是 `Target.getTargets`、`Target.attachToTarget`、`Page.navigate`、`Target.createTarget`
与浏览器面动作都在真 Mac 上过了。**D5 到此两平台都达标**；只剩签名 / 公证缺证书（§9）。

**抓出的三个平台差异**（都已修，并写进 §3.3）

1. **manifest 目录跟着 `--user-data-dir` 走**：验收用独立 profile，于是安装器写到产品目录的那份
   manifest 浏览器看不见 → 日志 `Can't find manifest for native messaging host`。修法是
   `seedBrowserManifests` 把装好的 manifest 复制进本次 profile（安装器的默认落点不动，真实用户的
   默认 profile 正是那个目录）。
2. **应用包改名**：这台机器装的是 `Google Chrome 4.app`，节点按标准路径探测 → "本机没有浏览器" →
   浏览器面整个不装配，动作报 `browser_list ... is not supported on this node`。修法是标准路径
   落空后按**可执行文件名**在 `/Applications` 与 `~/Applications` 里回捞
   （`findRenamedBundleExecutable`，附单测；顺带发现 Windows 上 Go 报的权限位不含可执行位，
   判据要分平台）。
3. **CFT 版本要和系统版本对齐**：CFT 155 在 macOS 12.4 上 dlopen 失败
   （`VideoToolbox` 缺 `_kVTCompressionPropertyKey_ReferenceBufferCount`），进程立刻退出；
   换 CFT 126 正常。这条差点被误读成"扩展没加载"。

顺带修掉两个 harness 自身的问题：`file://` URL 改用 `url.URL` 拼（手写 `"file:///" + 路径`
在 Unix 下多出一个斜杠，症状是"目标明明在列表里却匹配不上"）；预编译产物口子（上面那条）。

---

### 10.16 「装进我的浏览器」进真应用（本轮）+ 它逼出的页面归属问题

§10.14 把分发做成了命令行工具，用户还得自己敲。本轮把它接到设置页里：**一次点击**完成
「造身份 → 打包签名 CRX → 本机托管更新清单 → 把浏览器指过来」。

**新增的四块**

| 位置                                                            | 作用                                                                                                                                                   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `browser_host/cmd/syntropy-browser-dist`                        | 每个子命令加 `--json`：桌面应用读结构化输出，人类可读的那几行留给终端（字段名由契约测试钉住）                                                          |
| `desktop_app/.../main/browser/browser-distribution-protocol.ts` | 纯逻辑：解析工具输出、把落点收敛成一句人话（可单测，不碰进程与文件）                                                                                   |
| `desktop_app/.../main/browser/browser-distribution.ts`          | 进程与文件：造 key、打包、在 loopback 上托管 `update.xml` 与 CRX、写落点。**不 import electron**（环境注入），因此这段时序能在纯 Node 下用假 runner 测 |
| `desktop_app/.../renderer/SettingsPage.tsx`                     | 设置 → 浏览器 → 「装进我的浏览器」：状态、扩展身份、更新地址、逐族落点、装/卸按钮                                                                      |

桥面新增三条通道（`browserControlDistributionState` / `browserControlInstallExtension` /
`browserControlUninstallExtension`），快照 `BrowserDistributionSnapshot` 逐字段 strict。
落点的三种机制在界面上**分开说**：策略装上=静默且自动启用；外部扩展装上=浏览器标成非商店扩展、
**默认禁用，要用户启用一次**。把它显示成"装好了"会让人以为能用了，再困惑于 Agent 为什么连不上。

**验收（真实输出）**

```powershell
# 契约：解析、收敛、安装时序（含"两个地址必须同端口"与"本机服务真的在服务这两条路由"）
Set-Location desktop_app
node_modules\.bin\vitest.cmd run tests/contract/browser-distribution.contract.test.ts   # 14 passed

# 真应用 e2e（真 Master + 真 App Server + 打包口径 Electron）
node_modules\.bin\playwright.cmd test --config playwright.config.mjs tests/e2e/browser-control-settings.spec.ts
# 4 passed (10.8s)
```

新增的那条用例走完整条链：点「装进浏览器」→ 界面报「已装进浏览器，还需要启用一次」
（本机策略根被 ACL 拒 → 回落到外部扩展注册表项）→ 界面给出扩展身份与本机更新地址 →
**测试进程自己去 fetch 那份 `update.xml` 与 CRX**（200、`<gupdate`、17809 字节）→
点「从浏览器移除」→ 回到「还没装进浏览器」。跑完注册表里那条 Chrome for Testing 的键已消失
（用例用 `SYNTROPY_BROWSER_DIST_{HOME,PRODUCTS}` 隔离到 CFT 一族 + 临时目录，不碰用户自己的 Chrome）。

**它逼出的一个问题（值得记）**：第一版我把这一块放进了 `BrowserSettingsPage`（工作区右侧那个
「浏览器」检查器页，宿主安装/卸载也在那儿），而用户的路径是 **设置 → 浏览器**
（`SettingsPage.tsx` 的 `BrowserUseSettings`）。e2e 立刻抓出来——那一页根本没有内层导航，
按钮压根不在。两个页面的分工是既有的：检查器页管"随包浏览器自身的偏好"（历史、下载、扩展、
站点设置），设置页管"Agent 被允许做什么"。而"装进我的浏览器"属于**接入/授权**这一类，
于是放进设置页；接线也顺带简化成 `window.syntropyDesktop` 直调（与那一页其余 69 处一致），
不再从 App 层层传参。教训：新界面先确认**用户从哪条路径到达**，再决定挂在哪个组件下。
同一次改动把**接入**收在一页：新增「注册原生消息宿主」一块（状态 + 注册/注销/检查状态），
与「装进我的浏览器」并列——这两件事一个都缺就跑不通，分开在两个不相关的页面里等于没配完。

**它抓出的第二个真 bug（更要紧）**：e2e 之前，本机注册表里躺着一条**指向已被删除的临时
manifest** 的残留（早先验收用临时 home 跑过，`t.TempDir()` 把目录清掉了）。我们的安装逻辑
判"注册位置被别人占着"就跳过，卸载又只删指向当前 manifest 的值——于是这台机器进入一个死结：
**既注册不上，也清不掉**，而界面上的说法是"注册位置被其它程序占用"（用户无从下手）。
修法：`registrationOurs` 把"值指向自家落地目录里的同名 manifest、但文件已经不在了"也认成
自家的残留，允许接管与清理（判据收得很紧：base name 与目录名都要对得上，别的产品如 Codex 的
`com.openai.codexextension` 不会被误伤；另有单测钉住"别家的注册一个都不能动"）。

真机上当场验收（修好前 → 修好后）：

```text
# 修好后、真实用户 home、真实 HKCU
$ syntropy-browser-host status
  ready : false
  skipped (他人所有): Software\Google\Chrome\NativeMessagingHosts\com.syntropy.browserext.v1   ← 修好前
$ syntropy-browser-host install --extension-id aiadbbfp…
  ready : true
  installed : C:\Users\huoga\AppData\Local\Syntropy\browser-extension\com.syntropy.browserext.v1.json
$ reg query HKCU\Software\Google\Chrome\NativeMessagingHosts\com.syntropy.browserext.v1
  (默认) = C:\Users\huoga\AppData\Local\Syntropy\browser-extension\com.syntropy.browserext.v1.json
$ syntropy-browser-host uninstall && reg query …        → 键已删除（同一台机器上的
                                                          com.anthropic.* / com.kingsoft.* / com.microsoft.* 原样未动）
```

**本轮的验收汇总**

```text
Go：gofmt 干净、go vet ./... 干净、go test ./...（browser_host 全包）全过
桌面：tsc -b 干净；vitest tests/contract tests/component → 233 文件通过（3 条既有失败与本改动无关：
      local-files 大小写、factory-reset×2）
e2e：browser-control-settings.spec.ts → 4 passed (12.2s)，覆盖宿主注册/注销 + 扩展安装/移除 +
      本机托管的 update.xml 与 CRX 可被外部取回
真实栈冒烟：desktop_app/tools/smoke-computer-use.ps1 → computer use smoke passed (135 checks)
```

---

### 10.17 把验收做成能随时重跑的两条命令（本轮）

到这里 P0–P4 的每条结论都有真机证据，但**证据是我手工搭出来的**：临时目录、环境变量、一串
scp。别人（包括三个月后的我）没法照着重跑一遍。本轮把这两条路补成脚本。

**一、本机冒烟：`desktop_app/tools/smoke-browser-extension.ps1`**（P3 验收项里承诺过的那条）

这条链路不依赖 Master 与 App Server——它是浏览器链路的**本机那一半**，所以冒烟只需要随包
二进制、一个扩展目录，可选再要一个真浏览器。40 条检查覆盖：

- 前置：扩展目录里有 manifest；随包副本**不带** manifest key（分发出的 id 由签名私钥决定）；
- 宿主：隔离 home 下 install / status / uninstall；manifest 的形状（name / type / stdio /
  path 指向内容哈希副本 / `allowed_origins` 同时覆盖**钉住的 unpacked id 与本次分发 id**）；
  重复注册字节级幂等；**把注册值改成指向已删除 manifest 的残留后，注册必须把它修好**
  （§10.16 那个真 bug 的回归）；收尾只删自己的键（别的产品如 Codex / Anthropic / 金山的键原样在）；
- 分发：`keygen → build → verify`（摘要一致）→ `update.xml` 的 appid/codebase 正确 →
  `serve` 起本机托管 → **通过 HTTP 把清单与 CRX 取回来比对 sha256**；
- 落点：只动 `chrome-for-testing` 这一个族（冒烟跑在开发者自己的机器上，绝不能把扩展塞进
  他日常用的 Chrome），写→读→幂等→移除，移除后回到 `missing`；
- 可选：设了 `SYNTROPY_E2E_CHROME` 且有 Go 时，顺带跑真浏览器安装那条 Go 用例。

```text
PS> powershell.exe -NoProfile -File desktop_app\tools\smoke-browser-extension.ps1
Binaries       : ...\apps\desktop\resources\bin\win32-x64
DistributionID : ieagimnndbjkngppcdikjnloompiplce
PinnedIDs      : aiadbbfpklpnkafbpmchlfbnobdinoih
UpdateServer   : http://127.0.0.1:47349
Checks         : 40
browser extension smoke passed (40 checks)

PS> $env:SYNTROPY_E2E_CHROME="C:\Program Files\Google\Chrome\Application\chrome.exe"
PS> powershell.exe -NoProfile -File desktop_app\tools\smoke-browser-extension.ps1
Checks         : 41          # 多的一条是真浏览器从本机更新服务装上自托管 CRX
browser extension smoke passed (41 checks)
```

跑完机器是干净的：我们那条原生消息注册键被还原成"跑之前的样子"（脚本会先快照）、
Chrome for Testing 的外部扩展键被删掉、serve 进程结束、临时树清掉（**成功跑完之后 `%TEMP%`
下 0 个残留**；前面几次失败的运行留下的树是我手工清的——脚本的 finally 在失败路径上会先做
注册表还原，清理放在其后，这个顺序值得保留）。

**二、macOS 真机：`browser_host/tools/mac-browser-e2e.ps1` + `.../mac-browser-e2e.sh`**

目标机上**不需要 Go、不需要 Node**：Windows 侧交叉编译出宿主 / 桥 / 分发工具与验收测试二进制
（`go test -c -tags browsere2e`），连同一份"能自洽的仓库子集"（`go.work` 桩 +
已构建的扩展目录 + `extension-id.json`）一起推过去，由目标机上的 sh 脚本跑两条用例。
一条命令，输出就是结论：

```text
PS> .\browser_host\tools\mac-browser-e2e.ps1 -Target malama@192.168.1.8 `
      -Chrome "/Users/malama/syntropy-e2e/cft126/chrome-mac-x64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
cross-compiling for darwin/amd64 ...
shipping to malama@192.168.1.8:~/syntropy-e2e ...
running real-machine acceptance on malama@192.168.1.8 ...
x86_64
12.4
--- TestRealChromeExtensionEndToEnd ---
--- PASS: TestRealChromeExtensionEndToEnd (7.49s)
--- TestRealChromeExtensionTwoProfiles ---
--- PASS: TestRealChromeExtensionTwoProfiles (3.32s)
macOS browser chain acceptance passed (2 cases)
```

脚本里写进了三条踩过的坑，免得下次再撞：CFT 的版本要与 macOS 版本对齐（macOS 12.4 上 CFT 155
起不来，126 正常）；目标机的 native messaging 目录跟着 `--user-data-dir` 走（harness 会把
安装器写的 manifest 复制进本次 profile）；`ssh` 会展开 `~` 而 `scp` 不会（所以要分别用
`~/syntropy-e2e` 与相对路径 `syntropy-e2e`）。

**顺带修掉的一个工程细节**：两个新的 `.ps1` 必须存成 **UTF-8 with BOM**。Windows PowerShell 5.1
按系统 ANSI 代码页解码没有 BOM 的脚本，中文注释的尾字节会和换行拼成非法序列——症状是**换行被吃掉、
两行代码并成一行**，报的却是一个看着毫不相干的解析错误（这次是在 `-RemoteRoot` 的默认值那一行）。
写脚本时踩一次、跑起来又踩一次，所以记在这里。

---

### 10.18 macOS 的分发落点：`External Extensions` 跟着 user-data-dir 走（本轮）

§10.14 里三级落点的第三级（macOS 的 `External Extensions/<id>.json`）当时只有单测覆盖。
本轮在真 Mac 上把它验掉，并且验它的方式是**做对照实验**，因为第一版实验把自己骗了一次。

**实验设计与结果**（Chrome for Testing 126，macOS 12.4，本机更新服务由我们的工具托管）：

| 阶段 | 落点写在哪                                                       | 启动方式                         | 结果                                            |
| ---- | ---------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| a    | 产品目录 `<产品>/External Extensions/`                           | `--user-data-dir=<临时 profile>` | **没装上**                                      |
| b    | 临时 profile 的 `External Extensions/`（但产品目录那份**没删**） | 同上                             | 装上了 ⇐ 结论**不可用**：分不清是哪一份起的作用 |
| g    | 只留临时 profile 那一份（产品目录那份先删掉）                    | 同上                             | **装上了**                                      |
| e    | 产品目录那份，且 `--user-data-dir` **就是产品目录**              | 同上                             | **装上了**                                      |
| f    | 只留产品目录那份                                                 | 同上，且把轮询拉到 150s          | **没装上**（排除"只是慢"）                      |

结论：**macOS 上这个目录跟着浏览器的 `--user-data-dir` 走**，与 native messaging manifest
是同一条规律（§3.3 第 7 条）：

- 默认 profile 下，user-data-dir 就等于产品目录 ⇒ **安装器的落点（产品目录）是对的**，用户不需要做任何事（阶段 e 证明了这条路径关系）；
- 一旦有人用 `--user-data-dir` 起浏览器（CI、验收、多 profile 用户），条目必须放进那个目录 —— 这是**已知边界**，不是缺陷：桌面应用无从知道用户自定义的 profile 目录。

**方法论上的教训（值得单独记一条）**：阶段 b 一度让我以为结论是"跟着 flag 走"，但那次实验里
产品目录的条目是阶段 a 留下的，两者同时存在 ⇒ 分不出因果。这类"两个候选同时在位"的实验必须
先清场再放一个。重做（阶段 g）之后结论才可靠。

**顺带修掉一个真 bug（只在非 Windows 上暴露）**：验收测试收尾时用了 `taskkill` 杀浏览器
（Windows 专有），在 macOS 上等于没杀；而 `httptest.Server.Close()` 会等浏览器把连接关掉
——两边互相等，测试一直挂到超时才失败。修法是分平台杀进程树（类 Unix 用 `pkill -f <user-data-dir>`）
并把更新服务的 keep-alive 关掉。这条与"测试里给出的路径推断不能写死相对层级"一起，
让用例现在能在任何工作目录下跑（`SYNTROPY_E2E_EXTENSION_DIST` 可显式指定扩展目录）。

**真机验收（一条命令，三段都在里头）**：

```text
PS> .\browser_host\tools\mac-browser-e2e.ps1 -Target malama@192.168.1.8 -Chrome "…/Google Chrome for Testing"
cross-compiling for darwin/amd64 ... shipping ... running ...
--- PASS: TestRealChromeExtensionEndToEnd (7.48s)
--- PASS: TestRealChromeExtensionTwoProfiles (3.33s)
--- PASS: TestRealChromeInstallsSelfHostedCRX (11.29s)     ← 本轮新增：真浏览器装自托管 CRX
macOS browser chain acceptance passed (3 cases)
```

Windows 侧的同一份用例（走注册表外部扩展项）复跑通过 11.39s；本机冒烟 41 checks 也照旧。
**P4 的三级落点至此都在真机上验过**：Windows 策略（被 ACL 拒）→ Windows 外部扩展注册表项
→ macOS 外部扩展文件。

---

### 10.19 走查两页：把「不可用」的出路写到用户真正能动手的地方（本轮）

本轮做的是界面走查：把「电脑操控 → 浏览器面」与「设置 → 浏览器」对着看，结论是**判定逻辑很
完整，出路写错了地方**。

**问题一：文案指向了旧入口。** 扩展档的三种不可用各有各的出路，这是 §10.1 就定下的 D4
（如实上报、不静默降级）：

| 节点侧稳定码（`browser_backends.go`） | 含义                         | 改之前那句                                                             |
| ------------------------------------- | ---------------------------- | ---------------------------------------------------------------------- |
| `tunnel-unavailable`                  | 本机隧道没起来（通道名被占） | "看节点日志，或重启节点" ✔                                             |
| `no-desktop-bridge`                   | 桌面桥没接上                 | "在「浏览器控制」里安装并启用宿主" ← 那是检查器页，且没说是哪一节      |
| `no-extension-instance`               | 桥在，但没有扩展上报         | "打开装了扩展的那个浏览器（或检查扩展是否被停用）" ← 没说去哪儿检查/装 |

改法：三句都点名**设置页里的那一节** ——「设置 → 浏览器 → 注册原生消息宿主」与
「设置 → 浏览器 → 装进我的浏览器」；最后一条还补上了现在最常见的那个真实原因：
**扩展装上了但被浏览器停用**（非商店扩展默认禁用，要在扩展页启用一次，正是 §10.14/§10.18
那条落点的必然结果）。

> **归属已于 §10.24 修正**：这两节现在在「设置 → 电脑操控 → 浏览器面」下，指路文案与契约断言同步改过。
> 本节记录的判定逻辑（三态各有出路）不变。

**问题二（走查顺带发现的语义混淆）**：两档"由桌面应用托管"的后端，判的其实是**两件事**：

```
iab       判"通道接没接线"——节点能把调用上抛给 Master 就算可用（available=true）；
          桌面应用此刻在不在场，要到真调用那一刻才知道（那时如实报
          "this node has no desktop app attached"）。
extension 判"此刻有没有桥/扩展接上来"——活的状态，没接上必须报不可用并给原因。
```

我第一版 smoke 断言写成了"iab 在没人接进来时应当不可用"，跑出来 `available=True` 才发现自己
把语义搞反了。这条区分现在被 9 条真实栈断言钉住（见下），而我把它写进了脚本注释——它是
设置页那两行说明唯一有价值的地方，也是模型侧"能不能用这一档"的判据。

**验收**

```text
# 契约：文案点名的那两节（改名就会打回）
desktop_app/tests/contract/computer-use.contract.test.ts         33 passed
# 组件：扩展档没接上时，那一行真的把用户送到那两个入口
desktop_app/tests/component/settings-page.component.test.tsx     48 passed
# 真实栈：四态如实上报（144 checks，比上一轮多 9 条）
powershell.exe -NoProfile -File desktop_app/tools/smoke-computer-use.ps1
  → computer use smoke passed (144 checks)
```

新增的 9 条里有：iab 与扩展档**都在**清单里；iab 判"通道接没接线"（接线即可用、不带原因）；
扩展档在没人接进来时不可用，且原因是「没接上」那一类（`no-desktop-bridge`，或本机跑着用户
自己的节点而占着通道时的 `tunnel-unavailable`——脚本会为此打一条警告）；**两档的原因不是同一个
码**；每个受管实例档（本机真装着的 Chrome / Edge …）报可用。

**还差一块（下一步）**：「电脑操控」这一页至今**没有 UI 级 e2e**——真实栈那侧由 smoke 覆盖
（REST），渲染那侧由组件测试覆盖（手工 props），中间"App Server → `/api/computer-use` → 渲染层
状态 → 这一页"的那段管道没人验过。要补它得让 Playwright 的 harness 会起一个真节点（照
`smoke-computer-use.ps1` 的做法：把随包的 `node/conf` 与 `nbot-<os>-<arch>.exe` 拷进 Master 的
run 目录，再 `POST /api/node/create` 等心跳），这一步留到下一轮做，并把上面这 9 条断言在
界面上一一对应地再验一次。

---

### 10.20 「电脑操控」页的 UI 级 e2e（本轮）：起一个真节点，把中间那段管道验掉

上一轮留下的缺口是：这一页（浏览器面的配置入口）只有 REST 级（smoke，144 checks）与组件级
（手工 props）证据，中间 **App Server → `/api/computer-use?nodeId=` → 渲染层状态 → 这一页**
那段管道没人验过。本轮补上 `desktop_app/tests/e2e/computer-use-settings.spec.ts`：

```
真实 Master + 真实 App Server + 真实工作节点 + 打包口径 Electron
  [1] 电脑操控页按节点真实上报渲染出控制清单与浏览器面        PASS
  [2] 关掉扩展档真的落到策略里，界面也跟着改口                PASS
  2 passed (13.3s)
```

**harness 新增的两件事**（都在 `tests/e2e/support/desktop-cluster.ts`）：

1. `startMaster` 的 `node` / `nodeArtifacts` 改为指向**随包资源**目录（`resources/node`）：
   Master 从 `cfg.Node` 读配置模板（`conf/mbot.json.tpl`）、从 `cfg.NodeArtifacts` 取要下发的
   产物（nbot 矩阵 + codex / node_repl / 浏览器运行时）。本机部署一个工作节点这两样缺一不可，
   而它们在发布产物里本来就在一处——照抄产品布局，比每次运行复制几个 GB 更接近真实形态。
2. `createLocalWorkerNode`：`POST /api/node/create`（`deployMode: "local"`，带上 Master 的
   gRPC 端口让节点回连），再等它**真的出现在电脑操控面的节点选择器里**（心跳到了不等于控制流
   挂上了，两件事分开等）。

**真机上抓到的三处坑**（都只在真跑时才会出现）：

1. **两处节点字段名不同**：`/api/node/list` 用 `id`，电脑操控面用 `nodeId`（`settingspb
.ComputerUseNode`）。照抄一边去匹配另一边 ⇒ 永远匹配不上，白等满 180 秒。修完在注释里写明。
2. **同一档的名字在行里出现两次**（显示名 + 开关的 sr-only 标签）⇒ `getByText` 撞 Playwright
   严格模式；改成按 `.settings-integration-row` 定位，说明那一行也要取
   `.settings-integration-copy span`——直接取行内最后一个 span 拿到的是开关标签。
3. **这条用例顺手抓到了"bundle 没重建"**：它第一次跑出来的是**上一轮的旧文案**，因为改了
   `computer-use-client.ts` 之后没有重新打包渲染层。断言因此失败——这正是它该有的行为。
   重建后重跑，页面上的原话是：

```text
桥接上了，但还没有浏览器扩展报上来：到「设置 → 浏览器 → 装进我的浏览器」把扩展交给浏览器；
若已经装过，检查它是不是被浏览器停用了（非商店扩展默认禁用，要在扩展页启用一次）
```

这句话同时说明两件事：§10.19 改的文案确实到了真应用的界面上；而这台机器上的桌面应用**真的把
桥接到了这个节点**（否则原因会是 `no-desktop-bridge`）——扩展档当时是"桥在、扩展还没上报"。

---

### 10.21 收尾：把验收收成命令（本轮）

前几轮攒下的验收命令都是"我记得怎么敲"。本轮把它们固化进 `desktop_app/package.json`：

```powershell
corepack pnpm run test:e2e:browser-chain   # 两条真应用 e2e（先重建 bundle 再跑）
corepack pnpm run smoke:browser-extension  # 本机链路冒烟（宿主注册 + 分发产物 + 落点）
corepack pnpm run smoke:computer-use       # 真实栈配置面（144 checks）
```

三个实现细节，都是这轮真跑出来的：

1. **e2e 入口不写 `pnpm --filter … package:e2e && playwright test …`**：那层嵌套会再起一个
   pnpm，而全局 pnpm 的版本未必等于 `engines` 里钉的那个——本机就是 11.25 vs 11.9.0，第一步
   就被 `ERR_PNPM_UNSUPPORTED_ENGINE` 拦下。改成 `tools/run-browser-chain-e2e.mjs`：直接调
   `node_modules/.bin` 下的 electron-forge 与 playwright，只要求 node 在 PATH 上；顺带把
   "先重建 bundle" 写进脚本（忘了这一步的表现是"测试跑的是上一次的界面"，本轮踩过一次）。
2. **冒烟脚本不再用 `Get-FileHash`**：它要走 PowerShell 的模块自动加载，而本机的模块状态被
   破坏过——同一份脚本手工跑正常、经 `pnpm run` 跑就报 `Get-FileHash is not recognized`。
   改成 .NET 直接算 SHA-256，密码学原语不该依赖 cmdlet 的可用性。
3. **两条 spec 都加了"窗口没了就重新取"**：应用启动早期会换一次窗口，实测还遇到"主窗口句柄
   失效但应用活得好好的"（截图里工作台照常渲染）。把 `page` 钉死在 `beforeAll` 那一份上，
   失败信息会是 `Target page … has been closed`，看起来像被测功能坏了。现在每次进测试
   先确认句柄有效、失效就按内容重挑一扇窗；失败时还会打印应用输出。

**验收（同一台机器，连续两次）**：

```text
corepack pnpm run test:e2e:browser-chain   →  6 passed (23.7s) / 6 passed (…)
corepack pnpm run smoke:browser-extension  →  browser extension smoke passed (40 checks)
```

> 环境注记：这台机器上**浏览器隧道命名管道建不起来**（`\\.\pipe\syntropy-browser-tunnel-<user>`
> 对任何进程都是 Access is denied，用户自己的节点同样没有它）。所以扩展档在界面上的原因会是
> `no-extension-instance`（桥接上了、扩展还没上报）或 `tunnel-unavailable`——两种都在 §10.19
> 的断言与 §10.7 的降级语义里，不影响其余三档。

---

### 10.22 最终验收清单（逐条可复核）与环境受损时的复原

把散在各节的验收收成一页，任何人（或三个月后的我们）照着跑就能复核"这条链路是通的"。
每条命令都在本会话真跑过，输出见括注的小节。

| #   | 命令                                                                                                       | 期望                                                                                                            | 出处           |
| --- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------- |
| 1   | `corepack pnpm run test:e2e:browser-chain`（在 `desktop_app/`）                                            | `6 passed` —— 设置→浏览器（策略 / 宿主注册 / 装进我的浏览器）+ 设置→电脑操控（真节点）                          | §10.20、§10.21 |
| 2   | `corepack pnpm run smoke:browser-extension`                                                                | `browser extension smoke passed (40 checks)`；设了 `SYNTROPY_E2E_CHROME` 且 PATH 上有 go 时为 41                | §10.17         |
| 3   | `corepack pnpm run smoke:computer-use`                                                                     | `computer use smoke passed (144 checks)`                                                                        | §10.11、§10.19 |
| 4   | `gofmt -l . && go vet ./... && go test ./...`（`browser_host/`）；`go test ./control/`（`syntropy_node/`） | 全绿；`syntropy_node` 只有与本事无关的 `TestWindowsExecutorActivateWindow` 失败（要求桌面上真有资源管理器窗口） | §10.14         |
| 5   | `.\browser_host\tools\mac-browser-e2e.ps1 -Target <user@host> -Chrome "<CFT 路径>"`                        | 真 Mac 上 3 个用例通过（端到端 / 双 profile / 自托管 CRX 安装）                                                 | §10.15、§10.18 |

**前置条件（不是脚本的问题，是这台机器）**

- **验收路径只依赖 `node` / `go` / `powershell`(5.1) / `curl` / `ssh+scp`**，不依赖 `rg`、`python`、
  `cargo`、`dotnet`、`scoop`、`code`——本机少的就是后面这一批（见下面的复原清单），所以三条命令
  仍然跑得起来。这条是审计过脚本与 spec 里的实际调用得出的，不是推测。

- 全局 pnpm 是 11.25，而仓库 `engines` 钉 11.9.0：`pnpm run` 会被
  `ERR_PNPM_UNSUPPORTED_ENGINE` 直接拦下 → 用 `corepack pnpm run …`（corepack 已可用，
  缓存里就有 11.9.0；e2e 入口也因此改成不嵌套 pnpm，见 §10.21）。
- **经 `pnpm run` 的子环境里 PowerShell 的模块自动加载会失效**（同一份脚本手工跑正常、
  经 pnpm 跑报 `Get-FileHash is not recognized`）→ 冒烟脚本里的哈希已改成纯 .NET 调用，
  不再依赖 cmdlet 的可用性。

**环境复原清单**（与代码无关，但会挡住验收：本机 12:46–12:54 有一批开发工具目录消失）

**2026-10-11 12:46–12:55 的一次"半途而废的卸载/清理"**（取证结论，只影响本机，不影响代码）：

| 受害者                                                                        | 现状                                                        | 残留元数据                                               |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------- |
| PowerShell 7（`%LOCALAPPDATA%\Programs\PowerShell\7`）                        | `pwsh.exe` 与全部 DLL 完好，但 `Modules\` 只剩 `PSReadLine` | 卸载项**已不在**注册表里                                 |
| Rust（`~/.cargo`）                                                            | 整个目录消失                                                | 「Rustup: the Rust toolchain installer」的卸载项**还在** |
| .NET 工具（`~/.dotnet`）                                                      | 整个目录消失                                                | —                                                        |
| Go 工具（`~/go/bin`）、`~/scoop\shims` 与 `scoop` 自身                        | 消失（`~/go/pkg`、`~/scoop\apps\*` 还在）                   | —                                                        |
| VS Code 用户级安装的 `bin`（`code` 命令）、`%APPDATA%\npm` 下的全部 .cmd shim | 消失（`node_modules` 还在）                                 | VS Code 卸载项还在（10-08 装的）                         |

共同点：**入口（exe/cmd/shim/modules）被删掉，元数据与数据目录留下**——这是"卸载/清理跑到一半"的形态，
不是"杀软查杀"（Defender 那段时间只有病毒库更新、无查杀记录，进程里也没有第三方 EDR）。

已经排除的：不是本项目这一轮（第一个动作 15:51:21）；不是仓库代码（无删除这些路径的逻辑，
出厂重置明确拒绝清理用户主目录）；不是资源管理器删除（回收站无记录）；不是 Codex 记录在案
的命令（12:44–12:56 四个库全无记录，最后一条命令是 12:43:03）。

**没能确定的**：具体是哪个进程。本机没开 Sysmon／对象访问审计，USN 明细需要管理员
（`fsutil usn readjournal` 返回 `Access is denied`），所以 12:46:32 那一刻的删除者没有被任何
可读日志记下。要抓下一次：给这几个目录加 SACL + `auditpol /set /subcategory:"File System" /success:enable`，
或上 Sysmon；若这台机器在域内，"整批开发工具入口被清掉"也可能是终端管理下发的，那部分日志在 IT 手里。

实测缺失：`cargo` / `rustc`（`~/.cargo` 没了）、`scoop`（`~/scoop/apps/scoop` 与 `shims` 没了）、
`rg`（ripgrep 的 shim）、`code`（VS Code 的 `bin` 没了）、`python`（商店别名）；`go` / `dotnet` /
`node` / `git` 都还在。对照检查过：仓库里没有任何代码删除这些路径——唯一带破坏性的出厂重置有
明确护栏（`factory-reset-scope.ts` 的 `assertResetPath` 遇到用户主目录内的路径直接拒绝），
`gen_grpc.ps1` 只会 `scoop install`，没有卸载动作。

```powershell
irm get.scoop.sh | iex          # 重装 scoop（它自己被卸了，其它 apps 还在）
scoop reset *                   # 用已有 apps 重建 shims：rg 等随之回来
# VS Code：命令面板 → “Shell Command: Install 'code' command in PATH”
# Rust：~/.cargo 没了 → 重装 rustup    Python：装回或删掉那条死 PATH
```

> **本轮之后的约定**：这台机器上跑验收前先确认 `node` 可用即可（三条命令都不依赖 `rg`）；
> 重负载 e2e（Electron × 多次）尽量串行、一次跑一条，跑完确认没有残留进程再继续——
> 本会话有过一次"资源紧张时新控制台起不来"的现场，虽然系统本身没问题，但没必要再制造。

---

### 10.23 全量验收（本轮，所有改动之后的一次完整重跑）

在 §10.17–§10.22 的所有改动之后，按 §10.22 的清单**串行**重跑了一遍（一次一条，跑完确认无残留再下一条）：

| #   | 命令                                                                   | 结果                                                                                                                                                                                                                 |
| --- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `corepack pnpm run test:e2e:browser-chain`                             | **6 passed (21.2s)** —— 设置→浏览器（策略/宿主/装进我的浏览器）+ 设置→电脑操控（真节点）；本次扩展档命中的是 `no-desktop-bridge` 分支，界面上显示的新文案是「到「设置 → 浏览器 → 注册原生消息宿主」装上并启用宿主…」 |
| 2   | `corepack pnpm run smoke:computer-use`                                 | **142 checks passed** —— 与上一轮 135 的差值 = 本轮新增 7 条（四态如实上报那组），不是环境变化（本机只装了 Chrome + Edge，受管实例档 2 条）                                                                          |
| 3   | `corepack pnpm run smoke:browser-extension`                            | **40 checks passed** —— 宿主注册 + 分发产物 + 本机托管 + 落点                                                                                                                                                        |
| 4   | `.\browser_host\tools\mac-browser-e2e.ps1 -Target <mac> -Chrome <CFT>` | **3 cases passed** —— 端到端 7.51s / 双 profile 5.06s / 自托管 CRX 安装 11.36s                                                                                                                                       |
| 5   | `go test ./control/ -count=1`（syntropy_node）                         | **ok 71.4s**（本轮连既有的 `TestWindowsExecutorActivateWindow` 也过了——它要求桌面上有前台资源管理器窗口）                                                                                                            |
| 6   | `go test ./...`（browser_host）                                        | 全包通过（本会话已多次重跑）                                                                                                                                                                                         |

跑完检查：`%TEMP%` 下无 `syntropy-*e2e-*` 残留、无遗留 Electron / Master / App Server / 测试节点进程；
Mac 上也没有残留进程，native messaging 与外部扩展目录都空着。

> 环境注记（§10.22）：本轮全量验收是在那台**被清掉一批开发工具**的机器上跑出来的——验收路径不依赖
> `rg`/`python`/`cargo`/`dotnet`/`scoop`/`code`，所以环境受损不影响结论。

---

### 10.24 归属修正：外部浏览器的接入归「电脑操控」，「浏览器」页回到内置浏览器（本轮）

**触发问题（用户提出）**：「设置 → 浏览器」应该是**内置浏览器**的设置，「浏览器相关的 control 设置」
不该在那儿。

**去上游核对（A 级，见 [computer-use.md](computer-use.md) §6.4、[settings-pages.md](settings-pages.md) §8、
[browser.md](browser.md) §2.3）**，Codex app 的分工是：

| 面             | 上游位置                                                                                                                                                                                                                                                                                                                    | 判据（原文）                                                                                                                                                                                                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 内置浏览器     | 设置 `browser-use`                                                                                                                                                                                                                                                                                                          | `settings.section.browser-use` 的 description 就是 **"Title for in-app browser settings section"**；页内含 `Let ChatGPT control the built-in browser`、站点权限矩阵（browse/download/upload/CDP 四条轴）、历史 / 下载 / 密码与自动填充 / 清除浏览数据 / Developer mode / 内置浏览器的扩展管理器 |
| 电脑操控       | 设置 `computer-use`                                                                                                                                                                                                                                                                                                         | Control（插件安装）、权限、读屏、始终允许的应用、**More browsers**、`settings.computerUse.browser.*`（`Install` / `Reinstall extension` / `Remove extension` / `Manage`）与 `chrome` / `edge` / `safari` 浏览器族行                                                                             |
| 外部扩展细设置 | 26.928 起是独立 slug `extension`（`settings.chromeExtension.*`：per-site permissions / site tools / history / **full CDP**），导航名 `Browser extension` / `{browserName} extension`；26.1007 的入口是 **电脑操控 → Google Chrome → 已安装浏览器扩展程序**（主进程 `computerUseSettings.openChromeExtensionInstallPage()`） |

也就是说：**外置浏览器（用户自己那个 Chrome）的接入与控制归电脑操控，内置浏览器自身的偏好与站点授权归浏览器页**。
Syntropy 之前把"接入两件套"（宿主注册、装进我的浏览器）与浏览器面总开关放在了「浏览器」页（§10.16 的决定），
与这条分界相反；浏览器页也因此没有内置浏览器该有的东西（那六节只活在面板检查器页里）。

**改法（只动渲染层归属，数据面与后端 RPC 一个字节没改）**

| 位置                                        | 改之前                                                             | 改之后                                                                                                                                                                                                     |
| ------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SettingsPage.tsx` 的 `ComputerUseSettings` | 「浏览器面」只有后端清单 + 两档开关                                | 收下**启用浏览器面**总开关（与「浏览器」页同一份 `SystemSettings.browser_use`，仍走 `/api/computer-use/browser*`）、「注册原生消息宿主」、「装进我的浏览器」                                               |
| `SettingsPage.tsx` 的 `BrowserUseSettings`  | 总开关 + 全量 CDP + 三档审批 + 站点矩阵 + 归档 + 接入两件套        | 保留 Agent 授权那一半（全量 CDP、三档审批、默认档、站点权限矩阵、动作归档），并**把面板里那一份内置浏览器设置视图（同一个组件）嵌进来**：常规 / 历史记录 / 下载内容 / 扩展程序 / 密码和自动填充 / 网站设置 |
| `BrowserSettingsPage.tsx`                   | 除了六节还带一节「浏览器控制」（用户自己那个 Chrome）              | 摘掉「浏览器控制」那一节——回到"随包浏览器自身的偏好"这一定位                                                                                                                                               |
| `computer-use-client.ts`                    | 出路文案指向「设置 → 浏览器 → …」                                  | 指向「设置 → 电脑操控 → 浏览器面 → …」                                                                                                                                                                     |
| `settings-registry.ts`                      | 浏览器页描述"管理浏览器数据、扩展和站点权限"（与页面实际内容不符） | 浏览器页 = "内置浏览器的数据与偏好，以及 Agent 使用浏览器时的站点授权"；电脑操控页 = "管理读屏、鼠标键盘、应用与浏览器接入权限"                                                                            |

> 后续（**§10.25**）：刚收进电脑操控的「装进我的浏览器」又被整个收起——扩展本体不从应用里装（普通
> 用户的 Chrome 只认商店或管理员策略）。本节只保留"宿主注册"这一半。

**顺带修掉一个真 bug（本轮 e2e 完全起不来的原因）**：`install-sync`（HEAD 刚引入的"全包安装按安装包对齐
组件根"）在**全新 userData** 上写同步记录时不建目录——组件根 `…/user-data/components/` 还不存在、且这一版
没有要覆盖的文件（组件根里没有 `bin/`）时，`writeFile(marker)` 抛 `ENOENT`，异常冒到启动流程，
应用**刚起来就退出**。表现是任何 e2e 都卡在 `beforeAll`（"打开设置"永远等不到），而不是断言失败。
修法：写记录前 `mkdir(componentRoot, { recursive: true })`；用例 `组件根整份还不存在时照样写出记录`（tests/security/install-sync.test.ts）。

**验收（本轮实跑）**

```text
# 1) 真应用 e2e（重建打包口径 bundle + 真实 Master / App Server /（电脑操控那条）真工作节点）
corepack pnpm run test:e2e:browser-chain      → 7 passed (19.2s)
   设置→浏览器：内置浏览器六节、站点矩阵、动作归档、两页归属互斥断言
   设置→电脑操控：总开关（拨一下确认落到 Master 再拨回）+ 接入两件套 + 扩展档真写落点
# 2) 渲染层与契约
vitest tests/component  → 144 files / 1380 tests passed
vitest tests/security   → 32 files / 271 tests passed（含 install-sync 新用例）
vitest tests/contract --dir tests/contract → 与本次无关的 4 个文件仍红（factory-reset×2 / local-files / ssh-file-edit，见 §10.16 记录；已核对这些文件不引用本次改动的任何模块）
# 3) 静态
tsc -b 干净；oxlint 与 depcruise 无新增问题；gofmt 无关（本轮未动 Go）
# 4) 真实栈冒烟（配置面 REST，本轮未动数据面，跑它只为确认没被带坏）
smoke-computer-use.ps1     → computer use smoke passed (144 checks)
smoke-browser-extension.ps1 → browser extension smoke passed (40 checks)
```

**已知偏差（留给后续）**：浏览器面的「全量 CDP」与三档审批仍是**一份全局策略**，而上游把它拆成
内置浏览器（`browserUse.developerMode`）与外部扩展（`chromeExtension.fullCdp`）两份；要把这条也对齐，
得动 `SystemSettings.browser_use` 的形状（Master 侧），不在本轮"只改归属"的范围内。

---

### 10.25 收起「装进我的浏览器」入口：扩展本体不从应用里装（本轮）

**触发**：用户在设置页看到「装进我的浏览器 / 从浏览器移除」，问"系统装不进浏览器扩展，只能从商店，
这块还有必要吗"。

**核实**（结论：对普通用户，他的判断成立）。三条路线的真实差别：

| 途径                                                          | 谁能用            | 静默 | 装上即启用 | 证据                                                                                                                               |
| ------------------------------------------------------------- | ----------------- | ---- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 应用商店                                                      | 所有用户          | 是   | 是         | 上游 Codex app 用的就是这条（见下）                                                                                                |
| 企业策略（`ExtensionInstallForcelist` / `ExtensionSettings`） | 管理员 / 受管机器 | 是   | 是         | §10.14：普通用户写不进 `HKCU\Software\Policies`（ACL 只有 `ReadKey`）                                                              |
| 应用内自托管分发（本机打包签名 CRX + 写落点）                 | 人人可点          | 是   | **否**     | §10.14：装好后 profile 里是 `location: 6`（EXTERNAL_PREF）、`from_webstore: false`、`disable_reasons: [256]`——默认禁用的非商店扩展 |

§9 外部依赖第 1 条本来就写着：**用户默认 profile 里的静默安装要么来自商店，要么来自策略**。也就是说
自托管那条只对"受管机器 / 内网无商店"有意义，而那种场合更该走策略（静默 + 自动启用），不该让普通用户
点一个按钮、然后在他自己的浏览器里得到一条被禁用的扩展。

**上游对照**：Codex app 的扩展本体**来自商店**（Chrome Web Store / Edge Add-ons 的固定 id，`update_url`
指向商店），桌面应用只做本机那一半——写原生消息宿主 manifest（`%LOCALAPPDATA%\OpenAI\extension\
com.openai.codexextension.json` + HKCU 注册项），以及**打开商店安装页**
（主进程 `computerUseSettings.openChromeExtensionInstallPage()`）。宿主留在本机，扩展本体从不自托管。

**决定（用户拍板"收掉"）**：**收入口、留能力**。

| 位置                                        | 动作                                                                                                                                                                                        |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SettingsPage.tsx` 的 `ComputerUseSettings` | 「浏览器面」下只留**注册原生消息宿主**（本机这一半必须留）；`BrowserExtensionDistribution` 组件与其 `BrowserDistributionSnapshot` 类型一并删除                                              |
| `computer-use-client.ts` 的扩展档出路文案   | `no-extension-instance` 不再指向应用内那一节，改说真实的三条路：商店（上架后）/ 企业策略推装，并保留"装上了但被停用"这个最常见的现场原因                                                    |
| 主进程与桥                                  | **不动**：`browser-distribution.ts` / `-protocol.ts`、三条 IPC 通道、preload、`browser-distribution.contract.test.ts`（14 条）全留，作为 CLI / 企业分发与将来"打开商店安装页"那版界面的底座 |
| 测试                                        | e2e 里那条"装进浏览器"的用例改成**注册/注销原生消息宿主**（真机写自家注册项、注销不留残余）；组件/契约里新增"这一页不该再有装进我的浏览器"的反向断言                                        |
| 文档                                        | 本节；`docs/codex-settings-integration-design.md` 的电脑操控/浏览器分工同步                                                                                                                 |

**那现在怎么给用户装扩展？** 商店上架之前，只剩两条：企业策略（受管机器，静默）与 CLI 自托管
（`syntropy-browser-dist`，装好后需在浏览器扩展页启用一次）。商店上架后，这一页的对应格子换成
「打开商店安装页」，与上游一致。

**验收（本轮实跑）**

```text
corepack pnpm run test:e2e:browser-chain   → 7 passed (39.6s)
   设置→浏览器：内置浏览器六节、站点矩阵、动作归档、两页归属互斥
   设置→电脑操控：总开关（落 Master 再拨回）+ 宿主注册/注销 + "装进我的浏览器"已消失的反向断言
vitest tests/component                     → 144 files / 1380 tests passed
vitest tests/contract computer-use browser → 9 files / 121 tests passed
smoke:browser-extension                    → browser extension smoke passed (40 checks)（CLI 级分发链未动）
tsc -b 干净；`contracts.ts` 的注释写明这三条通道现在没有界面入口
```

**仍未做（外部依赖）**：商店上架（Chrome Web Store / Edge Add-ons）、把产物放到内网 https 服务器、
企业策略模板下发。见 §9。

---

### 10.26 动作记录收成一个侧边页签：固定高度的盒子 + 自己的滚动条（本轮）

**触发（用户走查）**：三个问题——①「动作归档」「最近的动作」把页面撑得很长，应该装在**固定大小
的窗口里、用自己的滚动条**；②这两页的列表是不是重合；③这种"查看"不该待在设置页，应该单独做个
**侧边标签页**。

**① 先说重合：确实是同一批事件，只是两个副本。**

| 视图                                       | 数据来源                                                      | 生命周期       | 以后                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------- |
| 设置 → 浏览器 →「动作归档」                | Master 落 bolt 的长期归档（`ListBrowserAudit`，封顶 2000 条） | 跨重启、跨节点 | **保留**（成为唯一视图）                                                               |
| 设置 → 电脑操控 → 浏览器面 →「最近的动作」 | 节点本机有界环形缓冲（`ComputerUseState.browser_audit`）      | 节点退出即清空 | **摘掉**（同一批 `ComputerUseAuditEntry`，归档是超集，两处并排只会让人以为"两套数据"） |

**② 改法：一份视图，装在独立页签里。**

| 位置                       | 动作                                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 新页签                     | `BrowserActionsPanel`（`apps/desktop/src/renderer/BrowserActionsPanel.tsx`）：窗口级页签 `browser-actions` / kind `browserActions`，入口是窗口工具条上的一颗图标（与「用量 / 附件库」同级），面板自己每 5s 对一次账 |
| 列表容器                   | `.browser-actions-list`：**吃掉面板剩余高度（`flex: 1 1 auto`）+ `overflow-y: auto`**，动作条数无上限也不会把页面撑长；行里带动作名、时间、结果（被拒的写出原因码）、站点、agent 与 node（跨节点一眼可辨）          |
| 设置 → 浏览器              | 摘掉「动作归档」那一块（连带 `BrowserAuditList` 组件与其状态）                                                                                                                                                      |
| 设置 → 电脑操控 → 浏览器面 | 摘掉「最近的动作」那一块（连带 `ComputerUseBrowserList` 的 `audit` 入参）                                                                                                                                           |
| 契约保留                   | `fetchBrowserAudit` / `/api/computer-use/audit` / Master 的归档写读一律没动；节点侧那句"最近的动作"仍在 `ComputerUseState.browser_audit` 里，只是界面上不再重复展示                                                 |

**验收（本轮实跑）**

```text
corepack pnpm run test:e2e:browser-chain   → 8 passed (21.9s)
   新增：从窗口工具条打开「浏览器动作」→ 页签起来、空态说出来；再回两页设置，确认那里
        已经没有任何动作列表（反向断言）
vitest tests/component                     → 145 files / 1381 tests passed
   新增 browser-actions-panel.component.test.tsx：外壳 / 计数与"被拒"原因 / 空态与取不到 /
        以及 CSS 契约（吃满剩余高度 + 自己的滚动条）
tsc -b、oxlint、oxfmt（我改的文件）干净
```

> **后续修正（同日）**：第一版把列表装在**固定 420px** 的盒子里，用户走查立刻指出"页面下面空太多"
> ——固定高度在小面板里留白、在大面板里又不够用。改法：`.browser-actions` 撑满面板
> （`height: 100%` + `min-height: 0` + `overflow: hidden`），列表 `flex: 1 1 auto` 吃掉剩余高度并
> 自己滚（`min-height: 120px` 兜底）。CSS 契约测试同步改成钉「填充 + 自滚」，并显式禁止再写回固定高度。

---

### 10.27 「控制」清单里点不动的那些东西：开关读错来源，「管理」的结果看不见（本轮）

**触发（用户走查）**：「设置 → 电脑操控 → 控制」里 Chrome / Edge 的「管理」和那五档开关
**点了都没反应**。

**根因两条（都有真机证据）**

1. **开关读的是"回声"，不是它自己写的东西。** 控制行的开关画的是节点回报的
   `state.integrations[].enabled`——那是节点在念**它手里**的策略，属于"已生效"的回声；而开关写的是
   Master 的策略。写完之后 Master 回给界面的那份节点快照还是缓存里那份（TTL 内不会重新取库存），
   于是：策略已经落库 `chrome=false`，界面上开关还停在 ON、状态写着"已保存"——用户点完看不出任何
   变化，再点一次写的还是同一个值。探针（真节点 + 真 Master）实测：
   `policy={"chrome":false,...}` 而 `switch=true`。
2. **「管理」的结果只写在一行状态里，未安装那几档还画着点不动的开关。** 浏览器内部页面
   （`chrome://extensions`）没有外部拉起路径，Node 把地址交回来、界面复制到剪贴板 —— 但用户的
   感受是"点完什么都没开"；同页的 Excel / PowerPoint（未安装）还画着一个**看着能点、实际点不动**的
   蓝色开关（开关没有禁用态样式，和打开着长得一模一样）。

**改法**

| 位置                                              | 动作                                                                                                                                                                    |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SettingsPage.tsx` 的控制行开关                   | 读**策略**（`policy.integrationEnabled[id]`，与「浏览器面」那张清单同一口径），写完当场翻转；`未安装` / `即将支持` 那一档不再画开关（画一个点不动的，比不画更让人困惑） |
| `SettingsPage.tsx` 的「管理」                     | 浏览器内部页面这条路上改为**弹对话框**：说明为什么只能手动、把地址摆出来、给「再复制一次」                                                                              |
| `syntropy_master/handle/settings/computer_use.go` | 策略真正下发给节点后把该节点的能力快照标记过期（`invalidateComputerUseState`）：下一次读会重新要一份库存，而不是拿"写之前"的缓存作答                                    |

**验收（本轮实跑）**

```text
# Master（Go）
go vet ./handle/settings/ 干净；go test ./handle/settings/ ./handle/control/ 全绿
   新增 TestPolicyChangeInvalidatesCachedNodeEcho：策略一变，缓存里那份节点回声必须作废
# 真应用 e2e（真 Master + 真 App Server + 真工作节点 + 打包口径 Electron）
corepack pnpm run test:e2e:browser-chain   → 9 passed (21.0s)
   新增：控制清单的开关点一下**当场**翻转并落到 Master；「管理」弹出对话框并给出 chrome://extensions；
        未安装那一档不再有开关
# 渲染层
vitest tests/component → 145 files / 1381 tests passed；tests/security → 271 passed
```

**复现提示（留给下次）**：这类"点了没反应"的排查顺序是——先在决定写什么的地方看**写对了没有**
（策略/接口返回），再看界面**读的是不是同一个东西**。这次两处都对不上：开关写策略、读回声；
「管理」写入剪贴板、界面在页面顶部。两者都栽在"反馈离点击太远"。

---

### 10.28 电脑操控页的视觉一轮：改用应用真图标（本轮）

**触发（用户走查）**：「这页做些优化和美化吧，图标都使用这些应用真正的图标」。

**之前是什么**：「控制」清单每行画一个 emoji / 字符（`🌐` / `◉` / `🧭` / `▣` / `▤`），
「浏览器面」再各画一套（`🖼` / `🌐` / `◉`）——同一个 Chrome 在两处长得不一样，而且和用户桌面上
那个图标毫无关系。

**改法**

| 位置                          | 动作                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 品牌图标（新增）              | `apps/desktop/src/renderer/assets/app-icons/`：Chrome / Edge / Safari 取自 [gilbarbara/logos](https://github.com/gilbarbara/logos)（CC0-1.0），Excel / PowerPoint 取自 Wikimedia Commons 的**现行** Office 图标（2025–present）。来源、许可以及"商标只用于标明它是什么"的说明写在该目录的 README.md；都是自包含 SVG（无位图 / 无外链 / 无脚本） |
| `ComputerUseIcon.tsx`（新增） | 统一的图标底板（34px 圆角方块）+ 品牌 SVG；认不出品牌的用内置矢量（应用窗口 / 通用地球 / 通用应用 / 已放行盾牌）顶上，形状与底板一致                                                                                                                                                                                                            |
| 归属徽标                      | 「是你自己那个浏览器」与「节点拉起的受管实例」**不换图标**（同一个 Chrome 就是同一个图标），改用右下角一枚小徽标区分：`user`（人像，accent 色）/ `managed`（服务器）。契约由 `computerUseBrowserBadge` 钉住                                                                                                                                     |
| 不可用行                      | `data-dimmed`（未安装 / 即将支持 / 这一档被停用）：图标压暗 + 降饱和 + 虚线底板。第一版用了全灰度，Office 的绿/橙全丢，看起来像"图标没加载出来"，改成保留一点品牌色                                                                                                                                                                             |
| 行的排版                      | 行高 58→62、图标与文字间距 10→12、标题 12→12.5px、说明 11→11.5px 行高 1.45、悬停高亮；「始终允许的应用」那行的 `◎` 也换成同一套底板里的盾牌图标                                                                                                                                                                                                 |
| 纯逻辑留在 client             | `computerUseIntegrationIconKey` / `computerUseBrowserIconKey` / `computerUseBrowserBadge` 返回**键**（不是字符），JSX 只在 `ComputerUseIcon` 里                                                                                                                                                                                                 |

**验收（本轮实跑）**

```text
corepack pnpm run test:e2e:browser-chain   → 9 passed (24.3s)
vitest tests/component                     → 146 files / 1385 tests passed
   新增 computer-use-icon.component.test.tsx：五个品牌键各指不同的图（映射错位当场露馅）、
        认不出品牌的走矢量、归属靠徽标且两张图的来源必须一致、不可用行压暗
vitest tests/contract computer-use          → 41 passed（图标断言从字符改成键）
tsc -b / oxlint / oxfmt 干净
真机取图：起真 Master + 真 App Server + 真节点，Chrome / Edge / Safari / Excel / PowerPoint
        与「浏览器面」四档都画出了各自的真图标
```

---

## 11 外部先例与交叉引用

| 项目                                                            | 许可       | 关系                                                                   |
| --------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------- |
| Codex app（`extension-host.exe` + ChatGPT 扩展）                | 专有       | 逆向对象：JSON-RPC 封套、重连状态机、`onDetach` 的来源                 |
| `QwenLM/qwen-code`（`packages/{chrome-extension,browser-use}`） | Apache-2.0 | 同问题的完整实现：宿主安装器、rendezvous、多实例发现、归属语义、错误码 |
| `microsoft/playwright-mcp` 的 `--extension`                     | Apache-2.0 | 官方同构先例（上游 Playwright 自带的 `cdpRelay.js` 是它的产品化形态）  |
| `remorses/playwriter`                                           | MIT        | 扩展 + WS CDP relay 驱动真实已登录浏览器                               |

> 借代码要连许可一起借。
>
> **本次未读**：`docs/design/browser-use.md`（34.7 KB）与 `browser-use-concurrent-sessions.md`
> （24.7 KB）——它们定义"多会话共享宿主 + 会话级 tab 归属"，是 D7 的下一步；
> 我们 P2 只做单会话归属，多会话需要时再读。

- [browser-extension.md](browser-extension.md) — 上游实现细节与证据分级（§6.4–§6.6 是宿主专项）
- [browser.md](browser.md) — 三档现状与逐项对照
- [computer-use.md](computer-use.md) §7 — 17 类风险与四档摩擦（P2 沿用）
- `$project` — 模块地图、proto / gRPC 流程、验证与交付标准
