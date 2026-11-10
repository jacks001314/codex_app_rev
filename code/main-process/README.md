# main-process — Electron 主进程与 preload

**84 个文件 / 10.36 MB**，来自 `app.asar:.vite/build/`（20 个）与 `app.asar:native-menu-locales/`（64 个）。

`package.json` 的 `main` 是 `early-bootstrap.js`，它只做三件事再动态 import 真正的启动流程：

```js
require("./src-KMpTO78a.js");
require("./desktop-open-path-queue-BtqbTQxD.js").r(process.platform === "darwin");
Promise.resolve().then(() => require("./bootstrap-Cv3cpqAG.js"));
```

| 文件                                                                                               |         大小 | 职责                                                                                           |
| -------------------------------------------------------------------------------------------------- | -----------: | ---------------------------------------------------------------------------------------------- |
| `early-bootstrap.js`                                                                               |       0.2 KB | 入口，见上                                                                                     |
| `bootstrap-Cv3cpqAG.js`                                                                            |      18.6 KB | 启动流程：flavor 判定、userData 路径、Intel-on-Apple-Silicon 警告、Chromium 开关、安装进度窗口 |
| `main-CMBCj4XL.js`                                                                                 |       3.0 MB | 主进程业务：窗口管理、全部 `codex_desktop:*` IPC、更新、browser-use、通知                      |
| `src-B6LqG3ek.js`                                                                                  |       1.5 MB | 主进程共享库（环境、配置、平台适配）                                                           |
| `worker.js`                                                                                        |       1.8 MB | 主进程侧 worker（对应 `codex_desktop:worker:<name>:*` 频道）                                   |
| `window-all-closed-DnjtB60s.js`                                                                    |       556 KB | 窗口全关后的生命周期、原生菜单与多语言                                                         |
| `browser-page-preload.js`                                                                          |       503 KB | 内嵌浏览器页的 preload                                                                         |
| `desktop-log-archive-5MAvINpZ.js`                                                                  |        95 KB | 日志打包（反馈用）                                                                             |
| `core-CShdJPiO.js` / `service-fwho9bdp.js`                                                         |   53 / 29 KB | 服务与核心工具                                                                                 |
| `preload.js`                                                                                       |       6.7 KB | ★ 渲染进程桥，见 `ipc-protocol.md`                                                             |
| `sandbox-preload.js`                                                                               |       2.0 KB | 沙箱页（MCP App）preload                                                                       |
| `file-based-logger` / `logger`                                                                     | 7.6 / 2.9 KB | 日志                                                                                           |
| `capture` / `upload` / `windows-file-copy` / `desktop-open-path-queue` / `electron-resources-path` |   <3 KB each | 截图、上传、Windows 文件复制、打开路径队列、resources 路径解析                                 |

`native-menu-locales/` 是 64 份原生菜单标签的本地化表。

## 从主进程能确认的事实

- **Build flavor 三档**：`prod` / `Dev` / `agent`（`package.json` 的 `codexBuildFlavor: "prod"`）。
- **userData 路径规则**：`%APPDATA%\Codex`；非 prod flavor 为 `Codex (<flavor>)`；`agent` flavor 且有 `CODEX_ELECTRON_AGENT_RUN_ID` 时为 `Codex/agent/<runId>`。可被 `CODEX_ELECTRON_USER_DATA_PATH` 覆盖。
- **调试开关**：`CODEX_ELECTRON_CHROMIUM_SWITCHES` 必须是 JSON 对象，且**仅 Dev flavor 生效**，否则抛错。
- **窗口形态**由 `createWindow({appearance, initialRoute, ...})` 的 `appearance` 决定：主窗口 / `avatarOverlay` / `detached` / `globalDictation`，另有一个 1×1 透明、`javascript:false` 的隐形辅助窗。
- **安全基线**：所有窗口都是 `contextIsolation:true`、`nodeIntegration:false`、`sandbox:true`；安装/提示窗口额外 `devTools:false` 且只加载 `data:text/html`，并 `setWindowOpenHandler(() => ({action:"deny"}))` + 拦截 `will-navigate`。

---

## 文件清单

### `build/`

| 文件                                  |      原始 |    格式化 | formatter | 来源                    |
| ------------------------------------- | --------: | --------: | --------- | ----------------------- |
| `main-CMBCj4XL.js`                    | 3026.3 KB | 3659.9 KB | light     | 路径规则 `.vite/build/` |
| `worker.js`                           | 1870.9 KB | 2214.3 KB | light     | 路径规则 `.vite/build/` |
| `src-B6LqG3ek.js`                     | 1558.0 KB | 1897.5 KB | light     | 路径规则 `.vite/build/` |
| `window-all-closed-DnjtB60s.js`       |  556.5 KB |  762.4 KB | prettier  | 路径规则 `.vite/build/` |
| `browser-page-preload.js`             |  503.4 KB |  819.0 KB | prettier  | 路径规则 `.vite/build/` |
| `desktop-log-archive-5MAvINpZ.js`     |   95.0 KB |  144.0 KB | prettier  | 路径规则 `.vite/build/` |
| `core-CShdJPiO.js`                    |   53.1 KB |   73.0 KB | prettier  | 路径规则 `.vite/build/` |
| `service-fwho9bdp.js`                 |   28.9 KB |   41.6 KB | prettier  | 路径规则 `.vite/build/` |
| `bootstrap-Cv3cpqAG.js`               |   18.6 KB |   23.7 KB | prettier  | 路径规则 `.vite/build/` |
| `src-KMpTO78a.js`                     |   10.7 KB |   17.1 KB | prettier  | 路径规则 `.vite/build/` |
| `file-based-logger-BEXzjhGa.js`       |    7.6 KB |   11.3 KB | prettier  | 路径规则 `.vite/build/` |
| `preload.js`                          |    6.7 KB |    9.1 KB | prettier  | 路径规则 `.vite/build/` |
| `logger-DkO6GWbX.js`                  |    2.9 KB |    4.2 KB | prettier  | 路径规则 `.vite/build/` |
| `sandbox-preload.js`                  |    2.0 KB |    2.5 KB | prettier  | 路径规则 `.vite/build/` |
| `upload-CumCVI_l.js`                  |    1.9 KB |    2.8 KB | prettier  | 路径规则 `.vite/build/` |
| `capture-DTd6sk5l.js`                 |    1.9 KB |    2.8 KB | prettier  | 路径规则 `.vite/build/` |
| `windows-file-copy-Dm31CRG0.js`       |    1.7 KB |    2.2 KB | prettier  | 路径规则 `.vite/build/` |
| `desktop-open-path-queue-BtqbTQxD.js` |    1.2 KB |    1.9 KB | prettier  | 路径规则 `.vite/build/` |
| `electron-resources-path-BDLw2lp0.js` |    0.2 KB |    0.3 KB | prettier  | 路径规则 `.vite/build/` |
| `early-bootstrap.js`                  |    0.2 KB |    0.2 KB | prettier  | 路径规则 `.vite/build/` |

### `native-menu-locales/`

| 文件          |    原始 |  格式化 | formatter | 来源                            |
| ------------- | ------: | ------: | --------- | ------------------------------- |
| `ta-IN.json`  | 20.4 KB | 21.1 KB | prettier  | 路径规则 `native-menu-locales/` |
| `ml.json`     | 20.3 KB | 21.0 KB | prettier  | 路径规则 `native-menu-locales/` |
| `my-MM.json`  | 20.1 KB | 20.8 KB | prettier  | 路径规则 `native-menu-locales/` |
| `te-IN.json`  | 19.8 KB | 20.5 KB | prettier  | 路径规则 `native-menu-locales/` |
| `kn-IN.json`  | 19.3 KB | 20.1 KB | prettier  | 路径规则 `native-menu-locales/` |
| `ka-GE.json`  | 18.9 KB | 19.6 KB | prettier  | 路径规则 `native-menu-locales/` |
| `bn-BD.json`  | 17.9 KB | 18.6 KB | prettier  | 路径规则 `native-menu-locales/` |
| `hi-IN.json`  | 17.5 KB | 18.2 KB | prettier  | 路径规则 `native-menu-locales/` |
| `th-TH.json`  | 17.0 KB | 17.8 KB | prettier  | 路径规则 `native-menu-locales/` |
| `gu-IN.json`  | 17.0 KB | 17.7 KB | prettier  | 路径规则 `native-menu-locales/` |
| `mr-IN.json`  | 16.8 KB | 17.6 KB | prettier  | 路径规则 `native-menu-locales/` |
| `pa.json`     | 16.8 KB | 17.5 KB | prettier  | 路径规则 `native-menu-locales/` |
| `el-GR.json`  | 16.7 KB | 17.4 KB | prettier  | 路径规则 `native-menu-locales/` |
| `bg-BG.json`  | 15.6 KB | 16.3 KB | prettier  | 路径规则 `native-menu-locales/` |
| `mk-MK.json`  | 15.4 KB | 16.1 KB | prettier  | 路径规则 `native-menu-locales/` |
| `hy-AM.json`  | 15.4 KB | 16.1 KB | prettier  | 路径规则 `native-menu-locales/` |
| `uk-UA.json`  | 15.2 KB | 16.0 KB | prettier  | 路径规则 `native-menu-locales/` |
| `ru-RU.json`  | 15.2 KB | 15.9 KB | prettier  | 路径规则 `native-menu-locales/` |
| `kk.json`     | 14.9 KB | 15.7 KB | prettier  | 路径规则 `native-menu-locales/` |
| `sr-RS.json`  | 14.7 KB | 15.5 KB | prettier  | 路径规则 `native-menu-locales/` |
| `mn.json`     | 14.6 KB | 15.4 KB | prettier  | 路径规则 `native-menu-locales/` |
| `am.json`     | 14.2 KB | 15.0 KB | prettier  | 路径规则 `native-menu-locales/` |
| `ur.json`     | 14.2 KB | 14.9 KB | prettier  | 路径规则 `native-menu-locales/` |
| `fa.json`     | 13.9 KB | 14.7 KB | prettier  | 路径规则 `native-menu-locales/` |
| `ar.json`     | 13.9 KB | 14.7 KB | prettier  | 路径规则 `native-menu-locales/` |
| `ja-JP.json`  | 13.2 KB | 14.0 KB | prettier  | 路径规则 `native-menu-locales/` |
| `vi-VN.json`  | 12.7 KB | 13.5 KB | prettier  | 路径规则 `native-menu-locales/` |
| `fr-CA.json`  | 12.5 KB | 13.3 KB | prettier  | 路径规则 `native-menu-locales/` |
| `hu-HU.json`  | 12.5 KB | 13.2 KB | prettier  | 路径规则 `native-menu-locales/` |
| `fr-FR.json`  | 12.3 KB | 13.0 KB | prettier  | 路径规则 `native-menu-locales/` |
| `ca-ES.json`  | 12.1 KB | 12.8 KB | prettier  | 路径规则 `native-menu-locales/` |
| `lt.json`     | 12.1 KB | 12.8 KB | prettier  | 路径规则 `native-menu-locales/` |
| `ro-RO.json`  | 12.0 KB | 12.8 KB | prettier  | 路径规则 `native-menu-locales/` |
| `lv-LV.json`  | 12.0 KB | 12.8 KB | prettier  | 路径规则 `native-menu-locales/` |
| `ko-KR.json`  | 12.0 KB | 12.7 KB | prettier  | 路径规则 `native-menu-locales/` |
| `so-SO.json`  | 12.0 KB | 12.7 KB | prettier  | 路径规则 `native-menu-locales/` |
| `sk-SK.json`  | 11.9 KB | 12.6 KB | prettier  | 路径规则 `native-menu-locales/` |
| `cs-CZ.json`  | 11.9 KB | 12.6 KB | prettier  | 路径规则 `native-menu-locales/` |
| `sq-AL.json`  | 11.9 KB | 12.6 KB | prettier  | 路径规则 `native-menu-locales/` |
| `de-DE.json`  | 11.8 KB | 12.6 KB | prettier  | 路径规则 `native-menu-locales/` |
| `fi-FI.json`  | 11.8 KB | 12.6 KB | prettier  | 路径规则 `native-menu-locales/` |
| `pt-PT.json`  | 11.8 KB | 12.6 KB | prettier  | 路径规则 `native-menu-locales/` |
| `tl.json`     | 11.8 KB | 12.5 KB | prettier  | 路径规则 `native-menu-locales/` |
| `hr-HR.json`  | 11.7 KB | 12.5 KB | prettier  | 路径规则 `native-menu-locales/` |
| `it-IT.json`  | 11.7 KB | 12.5 KB | prettier  | 路径规则 `native-menu-locales/` |
| `pl-PL.json`  | 11.7 KB | 12.5 KB | prettier  | 路径规则 `native-menu-locales/` |
| `es-419.json` | 11.7 KB | 12.5 KB | prettier  | 路径规则 `native-menu-locales/` |
| `sw-TZ.json`  | 11.7 KB | 12.5 KB | prettier  | 路径规则 `native-menu-locales/` |
| `pt-BR.json`  | 11.7 KB | 12.4 KB | prettier  | 路径规则 `native-menu-locales/` |
| `tr-TR.json`  | 11.6 KB | 12.4 KB | prettier  | 路径规则 `native-menu-locales/` |
| `es-ES.json`  | 11.6 KB | 12.4 KB | prettier  | 路径规则 `native-menu-locales/` |
| `sl-SI.json`  | 11.6 KB | 12.3 KB | prettier  | 路径规则 `native-menu-locales/` |
| `nl-NL.json`  | 11.6 KB | 12.3 KB | prettier  | 路径规则 `native-menu-locales/` |
| `bs-BA.json`  | 11.6 KB | 12.3 KB | prettier  | 路径规则 `native-menu-locales/` |
| `sv-SE.json`  | 11.5 KB | 12.2 KB | prettier  | 路径规则 `native-menu-locales/` |
| `is-IS.json`  | 11.4 KB | 12.2 KB | prettier  | 路径规则 `native-menu-locales/` |
| `ms-MY.json`  | 11.4 KB | 12.2 KB | prettier  | 路径规则 `native-menu-locales/` |
| `et-EE.json`  | 11.4 KB | 12.1 KB | prettier  | 路径规则 `native-menu-locales/` |
| `id-ID.json`  | 11.3 KB | 12.1 KB | prettier  | 路径规则 `native-menu-locales/` |
| `nb-NO.json`  | 11.2 KB | 12.0 KB | prettier  | 路径规则 `native-menu-locales/` |
| `da-DK.json`  | 11.2 KB | 11.9 KB | prettier  | 路径规则 `native-menu-locales/` |
| `zh-HK.json`  | 10.9 KB | 11.7 KB | prettier  | 路径规则 `native-menu-locales/` |
| `zh-TW.json`  | 10.9 KB | 11.7 KB | prettier  | 路径规则 `native-menu-locales/` |
| `zh-CN.json`  | 10.8 KB | 11.6 KB | prettier  | 路径规则 `native-menu-locales/` |

> 完整来源档案路径与 SHA-256 见 [`_INDEX.json`](_INDEX.json)；字符串/i18n 目录见 [`_CATALOG.json`](_CATALOG.json)。
