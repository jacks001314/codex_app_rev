# 本机安装信息

> **最新：26.1103.4239.0（2026-11-09，安装于 2026-11-08 06:34）**。完整差异与资源清单见
> [changelog-26.1103.md](changelog-26.1103.md) §2 与 [manifest.json](manifest.json)。
> 下面 26.1016 / 26.903 的表格是历史记录。

## 26.1103 最新安装身份

| 项目 | 值 |
| --- | --- |
| DisplayName | `ChatGPT` |
| Publisher | `OpenAI` / `CN=50BDFD77-8903-4850-9FFE-6E8522F64D5B` |
| Package family | `OpenAI.Codex_2p2nqsd0c76g0` |
| Package ID | `OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0` |
| MSIX version | `26.1103.4239.0` |
| App version | `26.1103.32239`（`app.asar:package.json`、`resources/owl-app.ini`） |
| Build | `25471`（`package.json:codexBuildNumber`） |
| Flavor | `prod`（`package.json:codexBuildFlavor`） |
| Chromium | `157.0.8103.39`（`app/157.0.8103.39.manifest`） |
| Runtime | Owl shell（`resources/owl-electron-app.json`，archive sha `0ded5465…a52bec`） |
| Architecture | `x64` |
| SignatureKind | `Store`，非 development mode |
| Install root | `C:\Program Files\WindowsApps\OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0` |

`app.asar:package.json` 还声明了 `codexWindowsAppContainedCore: "1"` 与
`codexWindowsPackageIdentity: "OpenAI.Codex"`。

### 能力与系统集成

```text
rescap:runFullTrust, rescap:unvirtualizedResources, rescap:packagedServices,
rescap:localSystemServices, internetClient,
uap11:graphicsCaptureProgrammatic, uap11:graphicsCaptureWithoutBorder

protocol:      codex://  (Parameters="--single-argument %1")
service:       CodexSandboxService.OpenAI.Codex
               app/resources/codex-windows-sandbox-service.exe, auto, localSystem
COM surrogate: CLSID d28d30e7-17f3-41d9-93f0-9bae6dc4884b
               app/resources/native/windows-account.node, STA
context menu:  Directory → OpenProjectInCodex (same CLSID)
startup task:  App (Enabled=true, DisplayName=ChatGPT)
app extension: com.microsoft.windows.copilotkeyprovider
aliases:       chatgpt-desktop.exe
               codex-chrome-native-host.exe
               codex-core-command-runner.exe
```

防火墙入站规则（`Profile="all"`）：

| 可执行文件 | TCP 端口 |
| --- | --- |
| `app/ChatGPT.exe` | 1455、1457 |
| `app/resources/codex.exe` | 1455、1457、3128–3159、8081–8112 |

文件关联共 8 种：`.csv` `.tsv` `.xls` `.xlsx` `.xlsm` `.docx` `.pptx`（spreadsheet
关联，`AllowSilentDefaultTakeOver=true`）与 `.skill`（codex-file）。
文件关联只表示“可以作为打开方式”，不表示应用会自动上传或解析所有关联文件。

写虚拟化排除：目录 `%LOCALAPPDATA%\OpenAI`，注册表
`HKCU\Software\Google\Chrome\NativeMessagingHosts`。

### 关键文件校验和

| 文件 | 大小 | SHA-256 |
| --- | ---: | --- |
| `app/resources/app.asar` | 761,023,153 B | `FB47D6491DC3006B708CB1E14DE479B882BF50F88B7DAA81818F154C253266AA` |
| `app/ChatGPT.exe` | 4,471,600 B | `5586707AF6624C04959BA2C5B4AD6D216A1D8ED17C04937A757495649DE44B92` |
| `app/Codex.exe` | 20,272 B | `A0CFA7AA6C94969D5E00FDDB6E856BC786639200DC816E846D577BFAD1EDB6A8` |
| `app/resources/codex.exe` | 369,018,160 B | `4B3286E35D7FE866C6B0EB3F07D7A4CDB5E96489576170DFD6B3A15AA1C67382` |
| `app/chrome.dll` | 337,069,360 B | `5B49A79CE8E495725DFD1C38EA79CFAB87B8DA9488C897DC2E44F3BFBCB070C6` |
| `AppxManifest.xml` | 9,395 B | `612836D54E389E5FC861401D852C74C9B9075EA1D1932F2F1C04650C59F7D7BF` |

### 随包资源

```text
resources/cua_node/                 2,461 files / 315,705,906 B
resources/plugins/                    860 files /  35,191,141 B
  browser, chrome, codex-app-tools, computer-use, deep-research,
  latex, unified-computer-use, visualize
resources/plugin-signatures/           25 files /  18,197,188 B
resources/skills/                      29 files /     310,634 B
  hatch-pet, onboard-new-user
resources/tectonic/                     5 files /  55,104,965 B
resources/native/                       6 files /   5,089,568 B
resources/artifact-template-picker/     2 files /      41,736 B
resources/accessibility/                1 file  /       2,400 B
app/locales/                          220 files
```

`cua_node` 仍是最大的随包运行时（301.1 MiB）；8 个 bundled plugin 比 26.1016
少两个（`code-review`、`image-guided-assets` 不再单独打包）。

### 目录树（浅层）

```text
OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0/
├── AppxManifest.xml / AppxBlockMap.xml / AppxSignature.p7x
├── app/
│   ├── ChatGPT.exe          4,471,600 B   MSIX entry
│   ├── Codex.exe               20,272 B
│   ├── chrome.dll         337,069,360 B   Owl / Chromium 157.0.8103.39
│   ├── 157.0.8103.39.manifest
│   ├── resources/
│   │   ├── app.asar        761,023,153 B
│   │   ├── codex.exe       369,018,160 B   app-server
│   │   ├── codex-windows-sandbox-service.exe
│   │   ├── cua_node/ plugins/ skills/ tectonic/ native/
│   │   └── owl-app.ini (UserDataDirectoryName=Codex)
│   ├── locales/ (220 files)
│   ├── tools/ pyproto/ MEIPreload/ IwaKeyDistribution/
│   └── resources.pak / icudtl.dat / *.dll
└── assets/ resources.pri
```

用户数据目录名由 `owl-app.ini` 指定为 **`Codex`**（不是包名）。
本次只读取目录名、文件名与大小，**没有打开** `settings.dat`、任何 `.sqlite`、
`auth.json`、日志正文或会话缓存。

## 26.1016 历史安装身份

| 项目 | 值 |
| --- | --- |
| DisplayName | `ChatGPT` |
| Publisher | `OpenAI` / `CN=50BDFD77-8903-4850-9FFE-6E8522F64D5B` |
| Package family | `OpenAI.Codex_2p2nqsd0c76g0` |
| Package ID | `OpenAI.Codex_26.1016.8622.0_x64__2p2nqsd0c76g0` |
| MSIX version | `26.1016.8622.0` |
| App version | `26.1016.62342` |
| Build | `21477` |
| Flavor | `prod` |
| Chromium | `155.0.8059.80`（从 `chrome.dll` / `*.manifest` 读取） |
| Architecture | `x64` |
| Install root | `C:\Program Files\WindowsApps\OpenAI.Codex_26.1016.8622.0_x64__2p2nqsd0c76g0` |

能力、协议、文件关联、后台服务、防火墙与 COM surrogate 与 26.1013 相同：

```text
runFullTrust, unvirtualizedResources, packagedServices, localSystemServices,
internetClient, graphicsCaptureProgrammatic, graphicsCaptureWithoutBorder
codex://
CodexSandboxService.OpenAI.Codex
app/resources/native/windows-account.node
CLSID d28d30e7-17f3-41d9-93f0-9bae6dc4884b
```

文件关联仍为 `.csv` `.tsv` `.xls` `.xlsx` `.xlsm` `.docx` `.pptx` `.skill`。
文件关联只表示“可以作为打开方式”，不表示应用会自动上传或解析内容。

关键文件：

| 文件 | 大小 | SHA-256 |
| --- | ---: | --- |
| `app/resources/app.asar` | 625,947,531 B | `A05DFD86CA508148C83C25590639CF91A52C6647733CDF200723D85357052B49` |
| `app/ChatGPT.exe` | 4,795,184 B | `F7F605CCEB2E75DCA52E03362329A889F917CC1F8D1036CD26386727A2319415` |
| `app/resources/codex.exe` | 336,134,960 B | `C81ED464E5E7CAFD09A5FA26AF390C480BED8E9FAB2A87A54B285FBD56E7122A` |
| `AppxManifest.xml` | 8,671 B | `D2F593A2B94C0258EC30FEFF2623CA896F3209378EF8C6B838364A5AC97E85EF` |

新增 / 更新的随包资源：

```text
resources/cua_node/                2,384 files / 252,751,041 B
  Node                             24.21.0-cua.2
  CUA runtime                      0.0.33/20261020111233-d92591792fee
resources/plugins/                   846 files /  49,579,951 B
resources/plugin-signatures/          31 files /  22,112,535 B
resources/artifact-template-picker/    2 files /      34,734 B
resources/accessibility/               1 file  /       2,400 B
resources/tectonic/                    1 file  /  55,059,760 B
```

`artifact-template-picker` 是新增的本地 stdio MCP；`accessibility` 是 Chromium
自带的 Reading Mode Google Docs helper manifest。两者都没有被执行。

> 采集时间 **2026-09-11**（Asia/Hong_Kong）。上一版记录（2026-09-09，26.901.6511.0）的差异见 [changelog-26.903.md](changelog-26.903.md)。

## MSIX 包身份

| 项目                                   | 值                                                                              |
| -------------------------------------- | ------------------------------------------------------------------------------- |
| Display name                           | `ChatGPT`                                                                       |
| Publisher                              | `OpenAI`（`CN=50BDFD77-8903-4850-9FFE-6E8522F64D5B`）                           |
| Package family                         | `OpenAI.Codex_2p2nqsd0c76g0`                                                    |
| Package ID                             | `OpenAI.Codex_26.903.9818.0_x64__2p2nqsd0c76g0`                                 |
| MSIX Version                           | `26.903.9818.0`                                                                 |
| 应用版本（package.json / owl-app.ini） | `26.903.71938`，`codexBuildNumber: 8576`，`codexBuildFlavor: prod`              |
| Architecture                           | `x64`                                                                           |
| Install root                           | `C:\Program Files\WindowsApps\OpenAI.Codex_26.903.9818.0_x64__2p2nqsd0c76g0`    |
| PhoneProductId / PublisherId           | `53bf120e-f20a-474e-892d-d87c803a0e39` / `7d1e4745-d434-4fde-a9ef-c9c97f199413` |
| TargetDeviceFamily                     | `Windows.Desktop`，Min `10.0.19041.0`，MaxVersionTested `10.0.26100.0`          |

这是 Microsoft Store / MSIX 安装，不是用户目录下的普通 Electron unpacked 安装。`WindowsApps` 目录由系统管理，不能把本文中的路径当作稳定的可写配置路径。安装目录 mtime 为 `2026-09-11 10:23`，即本次升级发生的时间。

## 能力声明（Capabilities）

```
rescap:appLicensing   rescap:runFullTrust   rescap:unvirtualizedResources   internetClient
```

`unvirtualizedResources` + 两处显式排除，意味着写入**不**被 MSIX 重定向：

- 目录：`%LOCALAPPDATA%\OpenAI`
- 注册表：`HKEY_CURRENT_USER\Software\Google\Chrome\NativeMessagingHosts`（Chrome 原生消息宿主注册）

`desktop6:RegistryWriteVirtualization` 与 `desktop6:FileSystemWriteVirtualization` 均为 `disabled`。

## 防火墙规则

| 可执行文件                | 方向 | 协议 | 端口                |
| ------------------------- | ---- | ---- | ------------------- |
| `app/ChatGPT.exe`         | in   | TCP  | 1455、1457          |
| `app/resources/codex.exe` | in   | TCP  | 1455、1457          |
| `app/resources/codex.exe` | in   | TCP  | 3128–3159（代理段） |
| `app/resources/codex.exe` | in   | TCP  | 8081–8112（代理段） |

manifest 里有注释指明代理端口段需与 `openai/codex-internal` PR #4267 保持一致。1455 是 Codex CLI 的 OAuth 回调端口。

## Shell 扩展与文件关联

| 类型                   | 内容                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 自定义协议             | `codex://`                                                                                                         |
| 目录右键菜单           | Verb `OpenProjectInCodex`（`ItemType Type="Directory"`）                                                           |
| COM Surrogate          | CLSID `d28d30e7-17f3-41d9-93f0-9bae6dc4884b` → `app/resources/native/windows-account.node`，`ThreadingModel="STA"` |
| 文件关联 `spreadsheet` | `.csv` `.tsv` `.xls` `.xlsx` `.xlsm` `.docx` `.pptx`，`AllowSilentDefaultTakeOver="true"`                          |
| 文件关联 `codex-file`  | `.skill`                                                                                                           |
| 视觉元素               | `assets/Square44x44Logo.png`、`Square150x150Logo.png`，`BackgroundColor="#3143FF"`                                 |

> 文件关联只说明“双击这类文件可以打开本 app”，不能据此推断 app 会自动上传或解析这些文件；实际行为由运行时与用户操作决定。

本仓库落地时两侧都是 `open-with-only`（不抢系统默认，只出现在「打开方式」里）：
Windows 由 `apps/desktop/nsis-maker.ts` 写 `Software\Classes\Syntropy.<ext>` +
`OpenWithProgids` + `Applications\Syntropy.exe\SupportedTypes`；macOS 由
`apps/desktop/forge.config.ts` 的 `extendInfo.CFBundleDocumentTypes`（`macDocumentTypes()`）声明，
`LSHandlerRank = Alternate`、`CFBundleTypeRole = Viewer`。清单同源于 `apps/desktop/file-associations.ts`。

> 运行时对各类文件的实际处理规则（嗅探、预览、打开方式、阈值）见 [file-handling.md](file-handling.md)。

## 安装目录结构

```
OpenAI.Codex_26.903.9818.0_x64__2p2nqsd0c76g0\
├── AppxManifest.xml            6,043 B
├── AppxBlockMap.xml        3,198,332 B
├── AppxSignature.p7x          12,187 B
├── priconfig.xml               1,480 B
├── resources.pri             787,376 B   (+ .language-is/ms/no、.scale-200)
├── assets\                                  Store logo
├── AppxMetadata\
└── app\
    ├── ChatGPT.exe         4,620,592 B    MSIX 入口（Chromium/Owl 启动器）
    ├── Codex.exe           1,105,200 B
    ├── chrome.dll        322,698,032 B    自带完整 Chromium
    ├── chrome_elf.dll / chrome_proxy.exe / chrome_pwa_launcher.exe / chrome_wer.dll
    ├── resources.pak      22,627,673 B    chrome_100/200_percent.pak
    ├── icudtl.dat         10,876,560 B    snapshot_blob.bin / v8_context_snapshot.bin
    ├── libEGL.dll / libGLESv2.dll / vk_swiftshader.dll / vulkan-1.dll
    ├── dxcompiler.dll / dxil.dll / d3dcompiler_47.dll / dbghelp.dll / dbgcore.dll
    ├── elevation_service.exe / elevated_tracing_service.exe / notification_helper.exe
    ├── eventlog_provider.dll
    ├── owl-shell-runtime.json    104 B    {schemaVersion:1, platform:win32, arch:x64, msixPackageDependencies:[]}
    ├── 152.0.7977.83.manifest   Chromium 152 特性清单
    ├── vk_swiftshader_icd.json
    ├── locales\  MEIPreload\  IwaKeyDistribution\  PrivacySandboxAttestationsPreloaded\
    ├── pyproto\google\protobuf\           Python protobuf 运行时（21 + 12 文件）
    ├── tools\rebuild_native_modules.py    48,461 B（构建脚本残留）
    └── resources\
        ├── app.asar        309,520,237 B   ★ Electron 应用（本次分析主体）
        ├── app.asar.unpacked\node_modules\  原生模块（better-sqlite3、node-pty 等）
        ├── busy-bar.asar     1,013,392 B   19 个 Lottie 状态药丸
        ├── codex.exe       295,408,944 B   ★ Codex runtime / app-server
        ├── codex                803,720 B  (非 Windows 版对应物)
        ├── codex-code-mode-host.exe  72,475,952 B
        ├── codex-command-runner.exe   8,204,592 B
        ├── codex-windows-sandbox-setup.exe  15,413,040 B
        ├── rg.exe / rg                  ripgrep（两份，Windows + 非 Windows）
        ├── owl-app.ini                     [Owl] UserDataDirectoryName=Codex / AppVersion=26.903.71938
        ├── owl-electron-app.json           packagedFrom / runtimeArchiveSha / runtimeName=owl
        ├── THIRD_PARTY_NOTICES.txt   2,908,503 B
        ├── icon-chatgpt.ico / chatgpt-app-{dark,light}.ico / chatgpt-tray-{dark,light}.ico
        ├── codex-notification.wav    164,492 B
        ├── native\                     windows-account.node / windows-updater.node /
        │                               remote-control-device-key.node / hid-topology-watcher.node /
        │                               computer-use-app-icons.node
        ├── skills\skills\              内置技能
        ├── plugins\openai-bundled\     内置插件（openai-primary-runtime 等）
        ├── cua_node\{bin,manifest.json}   computer-use agent 节点
        ├── artifact-template-picker\{server.mjs, server.test.mjs}
        ├── accessibility\reading_mode_gdocs_helper_manifest.json
        └── default_app\                Electron 默认应用兜底（main.js/preload.js/index.html/styles.css）
```

## app.asar 内部布局

| 顶层                   |   文件数 |         大小 | 内容                                                                                                                                                                                                                                                                                         |
| ---------------------- | -------: | -----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `package.json`         |        1 |       5.5 KB | `openai-codex-electron`，`main: .vite/build/early-bootstrap.js`                                                                                                                                                                                                                              |
| `.vite/build/`         |       20 |       7.6 MB | 主进程 + preload + worker                                                                                                                                                                                                                                                                    |
| `webview/index.html`   |        1 |      14.0 KB | 渲染进程入口                                                                                                                                                                                                                                                                                 |
| `webview/assets/`      | **7981** | **275.9 MB** | 渲染层全部 chunk（6990 个 JS / 208 个 CSS / wasm / 字体 / 媒体）                                                                                                                                                                                                                             |
| `webview/apps/`        |       29 |     268.8 KB | IDE 与终端图标（vscode、cursor、zed、warp、kitty、ghostty、intellij、goland、pycharm、webstorm、rider、phpstorm、rustrover、android-studio、xcode、sublime-text、bbedit、emacs、textmate、cmder、terminal、microsoft-terminal、iterm2、finder、file-explorer、devin、antigravity、windsurf） |
| `webview/licenses/`    |        1 |       1.1 KB | —                                                                                                                                                                                                                                                                                            |
| `native-menu-locales/` |       64 |     874.1 KB | 原生菜单多语言                                                                                                                                                                                                                                                                               |
| `node_modules/`        |        — |            — | `better-sqlite3`、`node-pty`、`bindings`、`file-uri-to-path`、`node-addon-api`、`tslib`、`@worklouder`（大部分标记 unpacked）                                                                                                                                                                |

`webview/index.html` 标题为 `ChatGPT`，`lang="en"`，含 `PROD_BUILD_TAG_HERE` / `PROD_BASE_TAG_HERE` / `PROD_CSP_TAG_HERE` 三个构建期占位符；内联 `<style>` 里先声明 `@layer theme, base, components, utilities`（Tailwind v4 层序），再定义启动画面变量：`--startup-background: transparent`、`--startup-logo-shimmer-{base,peak,soft,tail}`、`--startup-logo-mask`（内联 SVG data URI 的 OpenAI blossom）。`:root.electron-dark` 与 `@media (prefers-color-scheme: dark)` 分别覆盖 shimmer 基色 —— 后者正是 preload 同步加 `electron-dark`/`electron-light` class 的原因（避免首帧闪白）。

## 关键文件校验（本机直接计算）

| 文件                          |        大小 | SHA-256                                                            |
| ----------------------------- | ----------: | ------------------------------------------------------------------ |
| `app\ChatGPT.exe`             |   4,620,592 | `49E7E8F5DB0A4C8A12A666B70DAC40E0E88A1873D02E8AAFB82C3E8CABECA49C` |
| `app\resources\codex.exe`     | 295,408,944 | `3D6CA7085C932B62EF4EE4877E92F15B050FB94B2EB8E6C10A346A06248C6004` |
| `app\resources\app.asar`      | 309,520,237 | `5D9B0399491060B2756FCA70C2E5CCA746FA8EB38372B7AD8F236DC69BDA0BC6` |
| `app\resources\busy-bar.asar` |   1,013,392 | `B7DBED1121ABEC0831A4F84F69554F4573B114C143699039508AEB10839E510C` |
| `AppxManifest.xml`            |       6,043 | `7534220585AD2C0889D98B625EBED79A699BA6ACC34EF65D98475B2F7CEC5AAF` |

## 渲染层入口

| 角色                | 路径                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| Electron 主进程入口 | `app.asar:.vite/build/early-bootstrap.js`                                                                 |
| 实际启动流程        | `app.asar:.vite/build/bootstrap-Cv3cpqAG.js`                                                              |
| 主进程业务          | `app.asar:.vite/build/main-CMBCj4XL.js`（3.0 MB）                                                         |
| Preload             | `app.asar:.vite/build/preload.js`（6.7 KB）                                                               |
| 浏览器页 preload    | `app.asar:.vite/build/browser-page-preload.js`（503 KB）                                                  |
| 沙箱 preload        | `app.asar:.vite/build/sandbox-preload.js`（2.0 KB）                                                       |
| Webview 入口 HTML   | `app.asar:webview/index.html`                                                                             |
| 渲染入口 JS         | `app.asar:webview/assets/index-5232d4cce9a2.js`                                                           |
| 共享运行时          | `app.asar:webview/assets/app-initial-f094ef01c64d.js`（10.0 MB）+ `app-primary-4c40d73a1074.js`（7.8 MB） |
| 预加载 CSS          | `app.asar:webview/assets/app-initial-49fc08c26651.css`（804 KB）                                          |

## 用户数据目录（仅目录级取证）

**MSIX 包数据根**：`C:\Users\huoga\AppData\Local\Packages\OpenAI.Codex_2p2nqsd0c76g0`

```
AC\  AppData\  LocalCache\  LocalState\  RoamingState\  Settings\  SystemAppData\  TempState\
LocalCache\Local\Codex\Logs
LocalCache\Roaming\Codex\web
Settings\roaming.lock  settings.dat  settings.dat.LOG1  settings.dat.LOG2
```

**Electron userData**（由 `owl-app.ini` 的 `UserDataDirectoryName=Codex` 决定）：`C:\Users\huoga\AppData\Roaming\Codex\web`

**Codex runtime 家目录**：`C:\Users\huoga\.codex\`

```
config.toml  auth.json  models.json  version.json  installation_id  qwen.json  cap_sid
history.jsonl  session_index.jsonl  transcription-history.jsonl
state_5.sqlite  queue_1.sqlite  goals_1.sqlite  memories_1.sqlite
thread_history_1.sqlite (421 MB)  logs_2.sqlite (490 MB)   (+ 各自 -shm / -wal)
.codex-global-state.json (+ .bak)
sessions\  skills\  plugins\  rules\  cache\  tmp\  .tmp\  attachments\  browser\
computer-use\  node_repl\  pets\  visualizations\  ambient-suggestions\
dictation-history\  backups_state\  rollout-migrations\  thread-writer-locks\
mcp-oauth-locks\  sqlite\  vendor_imports\  .sandbox\  .sandbox-bin\  .sandbox-secrets\
AGENTS.md（0 B）  sandbox.<date>.log
```

`version.json` 内容：`{"latest_version":"0.154.0","last_checked_at":"2026-09-11T02:01:25Z","dismissed_version":null}` —— 这是 **Codex CLI** 的更新检查（0.154.0），与桌面 app 的 26.903 是两条独立的版本线。

> 本次分析**只读取了目录名、文件名与大小**，没有打开 `settings.dat`、任何 `.sqlite`、`auth.json`、日志正文或会话缓存，因此不能从这些目录推导账号、历史会话或隐私信息。
