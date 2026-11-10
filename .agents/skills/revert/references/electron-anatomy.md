# Electron / MSIX 包解剖

"东西都在哪"的速查。以 Codex desktop（Windows MSIX）为实例，其他平台给出对应位置。

---

## 1. 三种分发形态

| 形态                        | 安装位置                                                                   | 入口                    | asar 位置                            |
| --------------------------- | -------------------------------------------------------------------------- | ----------------------- | ------------------------------------ |
| **Windows MSIX / Store**    | `C:\Program Files\WindowsApps\<Publisher>.<Name>_<Version>_<arch>__<PFN>\` | `app\<Main>.exe`        | `app\resources\app.asar`             |
| **Windows NSIS / Squirrel** | `%LOCALAPPDATA%\Programs\<Name>\` 或 `Program Files\<Name>\`               | `<Name>.exe`            | `resources\app.asar`                 |
| **macOS**                   | `/Applications/<Name>.app/`                                                | `Contents/MacOS/<Name>` | `Contents/Resources/app.asar`        |
| **Linux AppImage**          | 挂载到 `/tmp/.mount_*`                                                     | `<Name>`                | `usr/lib/<name>/resources/app.asar`  |
| **VS Code 扩展形态**        | `~/.vscode/extensions/<publisher>.<name>-<version>-<platform>/`            | —                       | 通常无 asar，直接是 `dist/` + `bin/` |

> 同一个产品可能**同时**以多种形式存在。Codex 在本机就有三套：MSIX 桌面 app、
> VS Code 扩展（`openai.chatgpt-*`，三个版本并存）、npm CLI（`@openai/codex`）。
> 分析前先确认用户指的是哪一个 —— 用进程列表反查，别猜。

MSIX 的两个特点：

1. `C:\Program Files\WindowsApps` 的**目录列举通常无权限**，但 `Get-AppxPackage`
   返回的 `InstallLocation` 下的文件**可以读**；
2. 升级会创建**新的版本目录**并删除旧的，所以旧包不可恢复（traps D1）。

## 2. 目录树（MSIX 实例）

```
<Publisher>.<Name>_<Version>_<arch>__<PFN>\
├── AppxManifest.xml          ★ 包身份、能力、协议、文件关联、COM、防火墙规则
├── AppxBlockMap.xml            分块哈希（完整性校验）
├── AppxSignature.p7x           签名
├── priconfig.xml / resources*.pri   Windows 资源索引
├── assets\                     Store 图标
└── app\
    ├── <Main>.exe            ★ 可执行入口
    ├── <Other>.exe             可能有多入口（Codex 有 ChatGPT.exe + Codex.exe）
    ├── chrome.dll              若体积 >100 MB，说明自带完整 Chromium（非标准 Electron）
    ├── *.pak / icudtl.dat / *_snapshot.bin     Chromium 资源
    ├── libEGL/libGLESv2/vk_swiftshader/vulkan-1/d3dcompiler_*   图形栈
    ├── locales\                Chromium 语言包
    └── resources\
        ├── app.asar          ★★ Electron 应用本体
        ├── app.asar.unpacked\  原生模块（.node 不能放进 asar）
        ├── <runtime>.exe     ★ 附带的独立运行时（Codex 的是 295 MB 的 codex.exe）
        ├── native\*.node       原生扩展
        ├── skills\ plugins\    内置扩展资源
        ├── rg(.exe)            附带的 ripgrep
        ├── busy-bar.asar       其他 asar（Codex 的动画资源包）
        └── owl-*.json/.ini     自定义外壳的元数据
```

### 判断"是不是标准 Electron"

看 `resources/` 同级有没有 `chrome.dll`（Windows）或 `Frameworks/`（macOS）：

- **标准 Electron**：`electron.exe` 改名而来，体积约 150–200 MB，有 `resources/default_app.asar`；
- **自带 Chromium 的外壳**（Codex 的 "Owl"）：有独立的 `chrome.dll`（322 MB）、
  `chrome_proxy.exe`、`chrome_pwa_launcher.exe`、`owl-shell-runtime.json`。
  这类外壳通常在 Electron 之外还有一层自己的窗口/更新管理，
  分析时要把它当成**独立一层**记录，不能混进 Electron 主进程。

`package.json` 里的线索：

```json
{
  "main": ".vite/build/early-bootstrap.js", // electron-forge + vite 插件
  "codexBuildFlavor": "prod",
  "codexBuildNumber": "8576",
  "devDependencies": { "electron": "42.3.0", "@electron-forge/cli": "...", "vite": "8.1.5" }
}
```

`main` 字段直接给出主进程入口；`devDependencies` 暴露构建工具链；
自定义字段（`codexBuildFlavor` 等）常藏着 flavor / 环境判定逻辑的取值范围。

## 3. app.asar 内部布局

Electron Forge + Vite 的惯例：

```
app.asar
├── package.json              ★ 版本、main、依赖、自定义元数据
├── .vite\build\              ★ 主进程 + preload + worker
│   ├── early-bootstrap.js      入口（通常极小，只做 require 转发）
│   ├── bootstrap-*.js          真正的启动流程
│   ├── main-*.js               主进程业务（最大）
│   ├── preload.js            ★ 渲染进程桥（小但信息密度最高）
│   ├── *-preload.js            其他窗口/webview 的 preload
│   ├── sandbox-preload.js      沙箱页 preload
│   ├── worker.js               主进程侧 worker
│   └── logger/file-based-logger/desktop-log-archive/...
├── webview\ 或 dist\ 或 renderer\   ★ 渲染进程
│   ├── index.html              SPA 入口（含启动画面内联样式、CSP 占位符）
│   ├── assets\                 所有 chunk（可能数千个 / 数百 MB）
│   └── apps\ licenses\         静态资源
├── native-menu-locales\        原生菜单多语言
└── node_modules\               仅 pure-JS 依赖；原生模块在 app.asar.unpacked\
```

`webview/index.html` 值得完整读一遍 —— 它通常内联了：

- Tailwind 层序声明（`@layer theme, base, components, utilities`）；
- **启动画面**的背景色、logo mask（data URI SVG）、shimmer 动画变量；
- 主题 class 的初值（配合 preload 同步设置，避免首帧闪白）；
- CSP 与 base 的构建期占位符（`PROD_CSP_TAG_HERE` 之类）。

这些是"应用还没加载任何 JS 时的样子"，对理解启动体验很重要。

## 4. 主进程启动链

Electron Forge 的入口通常是个转发壳，真正逻辑在下一层：

```
package.json.main = early-bootstrap.js
   ├─ require("./src-<hash>.js")            环境/路径工具
   ├─ require("./desktop-open-path-queue-*.js").r(platform === "darwin")
   └─ import("./bootstrap-<hash>.js")        启动流程
         ├─ src-<hash>.js                    主进程共享库
         ├─ window-all-closed-*.js            窗口生命周期 + 原生菜单
         ├─ logger / file-based-logger
         └─ main-<hash>.js                    窗口管理、IPC、更新、集成
```

在 `bootstrap` 里能稳定找到这几类事实：

| 事实                  | 找法                                                                       |
| --------------------- | -------------------------------------------------------------------------- |
| build flavor 有哪几档 | 搜 `flavor`、`Dev`、`prod`、`agent` 的比较                                 |
| userData 目录名规则   | 搜 `appDataPath` / `setPath("userData")`                                   |
| 有哪些环境变量覆盖    | 搜 `<PREFIX>_ELECTRON_` 或 `process.env.`                                  |
| 平台差异分支          | 搜 `process.platform === "darwin"`                                         |
| 更新机制              | 搜 `sparkle`（macOS）/ `squirrel` / `autoUpdater` / `windows-updater.node` |
| 特殊窗口的尺寸与选项  | 搜 `new <X>.BrowserWindow({`                                               |

窗口创建点的 `webPreferences` 是安全基线的直接证据，照抄下来：

```js
webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true,
                  spellcheck: false, devTools: false }
```

## 5. 用户数据目录

三处，容易混：

| 位置                             | 内容                                                                                          |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| `%APPDATA%\<AppName>\`           | Electron `userData`（`app.getPath("userData")`）                                              |
| `%LOCALAPPDATA%\Packages\<PFN>\` | **MSIX 重定向**后的 `LocalCache\Local\...`、`LocalCache\Roaming\...`、`Settings\settings.dat` |
| `%USERPROFILE%\.<appname>\`      | 应用自己的家目录（Codex 的 `~/.codex`：config、auth、sessions、sqlite）                       |

MSIX 的 `unvirtualizedResources` 能力 + `FileSystemWriteVirtualization` 排除项
决定了哪些写入**不**被重定向 —— 这在 `AppxManifest.xml` 里是显式声明的，照抄：

```xml
<virtualization:ExcludedDirectory>$(KnownFolder:LocalAppData)\OpenAI</virtualization:ExcludedDirectory>
<virtualization:ExcludedKey>HKEY_CURRENT_USER\Software\Google\Chrome\NativeMessagingHosts</virtualization:ExcludedKey>
```

**只记目录名与文件大小**，不打开内容（traps E1）。

## 6. AppxManifest.xml 要抄的东西

```
Identity            Name / Version / ProcessorArchitecture / Publisher
Properties          DisplayName / PublisherDisplayName / Logo / BackgroundColor
Dependencies        TargetDeviceFamily（MinVersion / MaxVersionTested）
Capabilities        rescap:runFullTrust / unvirtualizedResources / appLicensing / internetClient ...
Extensions
  windows.protocol            自定义 URL scheme
  windows.fileTypeAssociation 文件关联（+ AllowSilentDefaultTakeOver）
  windows.fileExplorerContextMenus  右键菜单 Verb + ItemType
  windows.comServer           COM surrogate（CLSID → .node 路径，ThreadingModel）
  windows.firewallRules       放行端口（注意注释里可能写了"与某 PR 对齐"）
Applications        Id / Executable / EntryPoint / VisualElements
```

防火墙规则里的端口常能反推出内嵌服务的用途（Codex 的 1455 是 OAuth 回调，
3128–3159 / 8081–8112 是代理段）。

## 7. 附带的独立运行时

大型 AI/开发工具类应用常把一个完整的 CLI/runtime 塞进 `resources/`。
Codex 有四个：

```
codex.exe                       295 MB   app-server（主进程用 JSON-RPC 驱动它）
codex-code-mode-host.exe         72 MB   code-mode 宿主
codex-command-runner.exe        8.2 MB   命令执行
codex-windows-sandbox-setup.exe  15 MB   Windows 沙箱安装
```

**不要反汇编它们**（traps E4）。但可以从渲染层/主进程的**调用点**还原协议：
搜 JSON-RPC 方法名、搜 spawn 参数、搜环境变量注入。
Codex 的 130+ 个 `thread/* item/* turn/*` 方法全部是从 bundle 字面量里捞出来的，
一个字节都没反汇编。

## 8. 其他平台的差异速记

- **macOS**：`Contents/Info.plist` 对应 `AppxManifest.xml`（bundle id、URL scheme、
  文件关联、entitlements 在 `*.entitlements` / `codesign -d --entitlements -`）；
  公证信息用 `spctl -a -vv` 或 `stapler validate`；更新走 Sparkle（`SUFeedURL`）。
- **Linux**：`.desktop` 文件给出入口与 MIME 关联；AppImage 用 `--appimage-extract` 解包；
  Flatpak 的沙箱权限用 `flatpak info --show-permissions`。
- **VS Code 扩展形态**：`package.json` 的 `contributes` 是完整的 UI 注册表
  （commands / menus / keybindings / configuration / views），比 Electron 版更容易读；
  `extension.js` 通常已 bundle 但不 minify 到同等程度。
