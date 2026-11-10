# 应用架构与分层

> **26.1103 增量（2026-11-09）**：安装根为
> `OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0`，应用版本 `26.1103.32239`，
> build `25471`，`app.asar` **761,023,153 B（725.8 MiB）**，Owl Chromium
> **157.0.8103.39**。**渲染层从 Vite/rolldown 迁移到 Rspack**，这是本版最大的
> 结构变化，详见 §4.1。五层结构、Owl shell、主进程启动链与三条通信链路保持不变。

> **26.1016 增量（2026-10-23）**：安装根为
> `OpenAI.Codex_26.1016.8622.0_x64__2p2nqsd0c76g0`，应用版本 `26.1016.62342`，
> build `21477`，`app.asar` **625.9 MB**，Owl Chromium **155.0.8059.80**。
> 三层共享 bundle 仍为 `app-initial`（14.6 MB）、`app-shared`（5.9 MB）与
> `app-primary`（2.5 MB）。主进程新增按 `artifactTemplatePicker` feature flag
> 注入的 **stdio MCP** `openai_artifact_template_picker`，用于 Office / Google
> 文档模板选择。其余架构变化见 [changelog-26.1016.md](changelog-26.1016.md)。

> **26.1013 增量（2026-10-17）**：最新快照的安装根为
> `OpenAI.Codex_26.1013.4894.0_x64__2p2nqsd0c76g0`，应用版本 `26.1013.40934`，
> build `20770`，app.asar **582 MB**。共享层从 2 个变成 3 个：
> `app-initial-5851df3f6cb1.js`（13.7 MB）+ **`app-shared-bbfeca5e5737.js`（5.5 MB，新）**
> + `app-primary-fe8a450b3b04.js`（2.3 MB）。新增 `CodexSandboxService` 后台服务、
> `graphicsCapture*` 能力与 Spaces / dot / Realtime Voice / Writing blocks /
> Computer History 五个功能面。详见 [changelog-26.1013.md](changelog-26.1013.md)。

> 以下分层图是 **26.903 历史基线**。其证据来源为本机 MSIX 安装目录
> `C:\Program Files\WindowsApps\OpenAI.Codex_26.903.9818.0_x64__2p2nqsd0c76g0`
> 与其中 `app\resources\app.asar`，分析时间 2026-09-11（Asia/Hong_Kong）。
> 最新路径与尺寸以顶部 26.1103 说明和 [manifest.json](manifest.json) 为准。

## 1. 五层结构

```
┌──────────────────────────────────────────────────────────────────────────┐
│ 1. MSIX 包  OpenAI.Codex 26.903.9818.0 (DisplayName=ChatGPT, OpenAI)      │
│    runFullTrust + unvirtualizedResources + appLicensing + internetClient  │
├──────────────────────────────────────────────────────────────────────────┤
│ 2. Owl shell / Chromium  app\ChatGPT.exe + chrome.dll (322.7 MB)          │
│    owl-shell-runtime.json {schemaVersion:1, platform:win32, arch:x64}     │
│    owl-app.ini [Owl] UserDataDirectoryName=Codex AppVersion=26.903.71938  │
├──────────────────────────────────────────────────────────────────────────┤
│ 3. Electron 应用  app\resources\app.asar (309.5 MB)                       │
│    package.json: openai-codex-electron 26.903.71938, build 8576, flavor   │
│    prod, electron 42.3.0, vite 8.1.5, main=.vite/build/early-bootstrap.js │
│    ├─ .vite/build/  主进程 + preload + worker          (20 files, 7.6 MB) │
│    └─ webview/      渲染进程 (React SPA)   (7981 files, 275.9 MB)         │
├──────────────────────────────────────────────────────────────────────────┤
│ 4. Codex runtime  app\resources\codex.exe (295.4 MB) = app-server         │
│    + codex-code-mode-host.exe (72.5 MB) + codex-command-runner.exe        │
│    + codex-windows-sandbox-setup.exe + rg.exe                             │
├──────────────────────────────────────────────────────────────────────────┤
│ 5. 原生扩展  resources\native\*.node                                      │
│    windows-account (COM 右键菜单) / windows-updater /                     │
│    remote-control-device-key / hid-topology-watcher /                     │
│    computer-use-app-icons                                                 │
└──────────────────────────────────────────────────────────────────────────┘
```

第 2 层是重点：Codex desktop 不是普通 Electron 发行版，而是把 Electron 应用**塞进一个自带的 Chromium（内部代号 “Owl”）**里运行。`owl-electron-app.json` 记录了打包来源与运行时哈希：

```json
{
  "packagedFrom": "D:\\codex-apps-workspace\\codex\\codex-apps\\electron\\out\\Codex-win32-x64",
  "runtimeArchiveSha": "6f13a09dc294fc4b20568919433212c90be20898f3cde3fa845c4cb556aa7f7e",
  "runtimeName": "owl"
}
```

因此 `app\` 下同时存在 `ChatGPT.exe`、`Codex.exe`、`chrome_proxy.exe`、`chrome_pwa_launcher.exe`、`elevated_tracing_service.exe`、`notification_helper.exe` 等 Chromium 家族可执行文件，以及 `pyproto\google\protobuf\*`（Python protobuf 运行时，供 code-mode / 工具宿主使用）。

## 2. 主进程启动链

```
early-bootstrap.js                     (package.json 的 main)
  ├─ require ./src-KMpTO78a.js         环境与路径工具
  ├─ require ./desktop-open-path-queue-BtqbTQxD.js   .r(platform==='darwin')
  └─ import  ./bootstrap-Cv3cpqAG.js   真正的启动流程
        ├─ src-B6LqG3ek.js             1.5 MB 主进程业务
        ├─ window-all-closed-*.js      556 KB 窗口生命周期
        ├─ logger / file-based-logger  日志
        └─ main-CMBCj4XL.js            3.0 MB 窗口管理、IPC、更新、browser-use
```

`bootstrap` 中可确认的启动期行为：

| 行为                                                                                                                                                                          | 证据                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Build flavor 有 `prod` / `Dev` / `agent` 三档                                                                                                                                 | `i.i.Dev`、`n === "agent"` 分支                                       |
| userData 目录 = `%APPDATA%\Codex`，非 prod flavor 为 `Codex (<flavor>)`                                                                                                       | `w({appDataPath, buildFlavor, env})`                                  |
| `agent` flavor + `CODEX_ELECTRON_AGENT_RUN_ID` → `Codex/agent/<runId>`                                                                                                        | 同上                                                                  |
| 环境变量覆盖：`CODEX_ELECTRON_USER_DATA_PATH`、`CODEX_ELECTRON_RESOURCES_PATH`、`CODEX_ELECTRON_CHROMIUM_SWITCHES`（仅 Dev，必须是 JSON 对象）、`CODEX_ELECTRON_AGENT_RUN_ID` | `bootstrap` / `electron-resources-path-*.js`                          |
| Intel 版跑在 Apple Silicon 上会弹原生对话框劝阻                                                                                                                               | `desktop.intelLaunchWarning.*`，通过 `sysctl.proc_translated` 检测    |
| macOS 更新走 Sparkle                                                                                                                                                          | `com.openai.chat-sparkle-updater` / `-progress`，Team ID `2DC432GLL2` |
| 安装/进度对话框是 420×176 的沙箱化 `data:text/html` 窗口，无 devTools                                                                                                         | `bootstrap` 与 `main` 各一处 `BrowserWindow`                          |

## 3. 窗口模型

主进程用统一的 `windowManager.createWindow({...})` 创建所有窗口，关键字段是 **`appearance`**（决定窗口形态）与 **`initialRoute`**（决定加载哪个 SPA 路由）：

| appearance        | initialRoute                    | 尺寸/特性                                                             | 用途                   |
| ----------------- | ------------------------------- | --------------------------------------------------------------------- | ---------------------- |
| （主窗口）        | `/`、`/local/:conversationId` … | 可平铺 `supportsWindowTiling`                                         | 工作台主窗口           |
| `avatarOverlay`   | `/avatar-overlay`               | `focusable:!1, show:!1`，不可平铺                                     | 语音/形象悬浮层        |
| `detached`        | `/detached-window`              | `min(960, 源宽, 屏宽×0.8) × min(720, 源高, 屏高×0.8)`，`lockTitle:!0` | 从 tab 拖出的独立窗口  |
| `globalDictation` | `/global-dictation`             | 720×84，`focusable:!1`，支持 `prewarm()`                              | 全局听写条             |
| —（隐形辅助窗）   | `about:blank`                   | 1×1、透明、`alwaysOnTop`、`javascript:!1`、`setIgnoreMouseEvents(!0)` | 取色/测量类辅助        |
| —（安装/提示）    | `data:text/html`                | 420×176，`sandbox:!0`，`devTools:!1`                                  | 安装进度、原生风格提示 |

其他相关路由：`/hotkey-window`（含 `/hotkey-window/new-thread`、`/hotkey-window/thread/:conversationId`、`/hotkey-window/remote/:taskId`）、`/chatgpt/quick-chat`、`/chatgpt/quick-chat-prewarm`、`/chatgpt/quick-chat/:conversationId`、`/debug`、`/share/:sharedConversationId`、`/first-run`、`/welcome`、`/login`。

`resources\busy-bar.asar`（19 个 Lottie：`pill-0`…`pill-5`、`pill-neutral`、`pill-ultra-reveal`、`status-pending` + 静帧）是这套窗口体系里的“忙碌状态药丸”动画资源，按 6 档强度分级。

## 4. 渲染进程技术栈

以下特征对应 **26.903–26.1016（Vite/rolldown）**；26.1103 的 Rspack 迁移见 §4.1。

| 维度        | 结论                                                                              | 证据                                                                 |
| ----------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 打包器      | Vite 8 + **rolldown**（Rust 版 Rollup）                                           | 每个 chunk 都 `import {n,o} from "./rolldown-runtime-*.js"`          |
| UI 框架     | React 19 + **React Compiler**                                                     | `(0, X.c)(42)` 记忆缓存槽、`Symbol.for("react.memo_cache_sentinel")` |
| 路由        | react-router（`<Route>` 元素树 + `RouterProvider`）                               | `app-initial` 中的 `path:`/`element:` JSX 树                         |
| 国际化      | react-intl 风格描述符 `{id, defaultMessage, description}`                         | 共 **13338** 条，见 `code/_catalog/i18n-messages.json`               |
| 数据层      | TanStack Query（`useQuery`/`useMutation` 形态）+ 自研 external store              | `use-visible-settings-sections`、`composer-provider`                 |
| 样式        | Tailwind v4 + 语义 CSS 变量 token                                                 | `index.html` 里 `@layer theme, base, components, utilities`          |
| 富文本输入  | **ProseMirror**                                                                   | `prosemirror-view/-model/-placeholder/-highlight`；mention 节点见下  |
| 编辑器/高亮 | Monaco、Shiki、CodeMirror 类运行时                                                | `runtime.worker-*.js`(3 个 ×3.5 MB)、`register-*.js`(4.9 MB)         |
| 其他重型库  | KaTeX、MathLive、jsxgraph、three.js、drei、cytoscape、mapbox-gl、xterm、WebCodecs | `webview/assets/*`                                                   |
| 协同/增量   | yjs（CRDT）、capnweb                                                              | `package.json` dependencies                                          |
| 图标        | 内联 SVG + **Lottie**（`@lottiefiles/toolkit-js 0.71.10`）                        | `sidebar-*-icon` chunk 是 Lottie JSON                                |

Composer 的 ProseMirror mention 节点类型（`@`/`/` 触发）共 12 种：

```
agentMention  appMention  atMention  browserSkillMention  browserTabMention
chatGptConversationMention  chatGptLibraryFileMention  pageReferenceMention
pluginMention  resourceMention  sitesProjectMention  skillMention
```

### 4.1 26.1103：Rspack

26.1103 的 `webview/index.html` 只加载四个数字 chunk：

| chunk | 大小 | 作用 |
| --- | ---: | --- |
| `assets/782259.7a3e865ee5.js` | 3,625 B | 启动引导 |
| `assets/727403.da6b00f04b.js` | 7,762 B | React 19.2.7 vendor |
| `assets/158624.0baba19172.js` | 137,126 B | 应用入口 |
| `assets/348410.792d1c9584.js` | 272,412 B | Rspack runtime + `p.u` / `p.miniCssF` 映射 |

每个异步 chunk 自带：

```js
export const __rspack_esm_ids=[123456];
export const __webpack_modules__={ AbCd(e,t,a){ /* ... */ } }
```

模块 id 是 4 字符短 base62；chunk 名是纯数字。runtime 的
`p.u=e=>"assets/async/"+e+"."+({...})[e]+".js"` 把 id 映射到
`webview/assets/async/<id>.<hash>.js`，`p.miniCssF` 映射到
`webview/assets/async/<hash>.css`。本版解析出 **9,326 个 JS / 1,567 个 CSS** id，
`async/` 下共 13,492 个文件 / 498.3 MiB。

主进程仍是 `.vite/build/` 产物（29 files / 11.9 MiB），入口
`early-bootstrap.js` 先加载 `early-bootstrap-199-*.js`（5.8 MB），再按数字后缀
拆出 preload、worker 与 sandbox preload。主进程 bundle 保留了大量可读方法名
（如 `loginWithApiKey`），比渲染层更适合读协议。

**DIL** 是本版新增的生成式 UI 运行时（包内只出现缩写，本文按 “declarative UI”
理解，属 **C 级**）：组件以字符串源码打包，
由 `dil-renderer` 自定义元素与 `DIL.render(...)` 执行，支持 `grid` / `box` /
`row` / `text` / `input` / `select` / `segmented-control` 等标签，并通过
`dil.action` / `dil.error` / `dil.load` 事件与宿主交互。Learning 的学习块与
“interactive assistant response” 共用这套运行时（见 [learning.md](learning.md) §5）。

## 5. 三条通信链路

```
渲染进程 (webview)
   │  window.electronBridge / window.postMessage
   │  频道前缀 codex_desktop:*        → 详见 ipc-protocol.md
Electron 主进程 (.vite/build/main)
   │  JSON-RPC (stdin/stdout, app-server 协议 0.143.0-alpha.32)
   │  thread/* item/* turn/* account/* config/* model/* plugin/* mcpServer/*
resources\codex.exe (Codex runtime)
   │  沙箱 / 命令执行 / git / LSP / MCP
本地文件系统、git、终端、浏览器
```

- 渲染进程**不直接**持有 Node 能力：preload 只暴露 `electronBridge` 一个对象，`contextIsolation:!0`、`nodeIntegration:!1`、`sandbox:!0`。
- 大 payload 走**分块流式协议**：marker `codex-host-chunked-message-v1`，`{transferId, sequence, kind: start|chunk|end, tokens[]}`，token 是一套 JSON 增量词法（`array-start`/`object-start`/`container-end`/`string-start`/`key`/`string-chunk`/`value`），配合 `codex_desktop:chunked-message-ack` 反压。
- 远程桌面的画中画视频不走 IPC JSON，而是在 preload 里直接用 **WebCodecs `VideoDecoder`** 解码 `codex_desktop:remote-hosted-pip-video-frame`，再以 `VideoFrame` transferable 投递给页面。

## 6. 三种产品模式

`codexAppMode` 是贯穿全应用的一等状态，取值 **`chat` | `work` | `codex`**（zod: `kh(["chat","work","codex"])`）。左侧导航的模式选择器对应文案：

| 模式    | 文案                | 副标题                     |
| ------- | ------------------- | -------------------------- |
| `codex` | Codex               | Build, debug, and ship     |
| `work`  | Work / ChatGPT Work | Create, learn, and explore |
| `chat`  | ChatGPT             | —                          |

对应命令：`codex.command.switchToCodex` / `switchToWork` / `switchToChat`。设置页的可见性也按模式门控（见 `settings-pages.md` 的 capability 表：`chatGpt` / `codex` / `codexLocal` / `codexOrWorkLocal`）。

## 7. 本地状态与数据目录

| 位置                                                  | 内容                                                                                                                                                                                                                                                  |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `%APPDATA%\Codex`（roaming）                          | Electron userData（`web/` 等）                                                                                                                                                                                                                        |
| `%LOCALAPPDATA%\Packages\OpenAI.Codex_2p2nqsd0c76g0\` | MSIX 重定向的 `LocalCache\Local\Codex\Logs`、`LocalCache\Roaming\Codex\web`、`Settings\settings.dat`                                                                                                                                                  |
| `%USERPROFILE%\.codex\`                               | Codex runtime 家目录：`config.toml`、`auth.json`、`models.json`、`sessions/`、`skills/`、`plugins/`、`history.jsonl`、`session_index.jsonl`，以及 SQLite：`state_5`、`queue_1`、`goals_1`、`memories_1`、`thread_history_1`(421 MB)、`logs_2`(490 MB) |
| `%USERPROFILE%\.codex\worktrees\`                     | worktree 根（`$CODEX_HOME/worktrees`，见 `XFt()`）                                                                                                                                                                                                    |

`CODEX_HOME` 解析规则（渲染侧同名逻辑）：`process.env.CODEX_HOME` 优先，否则 `path.posix.join($HOME, ".codex")`，兜底字面量 `"/.codex"`；路径统一 `replaceAll("\\","/")` 后 `normalize`，Windows 盘符路径比较时忽略大小写。

> 本次分析**只读取了目录名与文件大小**，没有打开 `settings.dat`、任何 `.sqlite`、`auth.json`、日志正文或会话缓存。
