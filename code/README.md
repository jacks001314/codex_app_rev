# code/ — Codex desktop app 逆向代码库

> **最新全量快照：`26.1103.32239` 对应的 `app-261103/`**（201 个代表文件 /
> raw 53.1 MB / formatted 79.3 MB，18 模块，57,004 条 i18n）。上一全量是
> `app-261016/` 与 `app-261013/`。本文件其余内容仍是 26.903 基线的说明，
> 作为历史对照保留；**26.1103 的 chunk 是 Rspack 数字 id，
> 不适用下面的 Vite/rolldown 文件名规则**。

本目录是从本机安装的 Codex desktop app（Windows MSIX，`OpenAI.Codex 26.903.9818.0` / 应用版本 `26.903.71938`，build `8576`，Electron `42.3.0`）的 `app.asar` 中**抽取并格式化**后的前端/主进程代码，按 UI 模块分目录存放。

> 这是**只读逆向产物**，不是可运行工程。所有 chunk 仍是打包后的形态：标识符被压缩（`$A as n`），相对 `import "./xxx.js"` 指向的是 `webview/assets/` 里的同级 chunk，在本目录树中不一定存在。要读懂逻辑，请配合每个模块的 `_CATALOG.json`（字符串/i18n 目录）和 `codex_app_rev/` 下的说明文档。

## 目录结构

| 目录             | 模块                          | chunk 数 | 格式化后 | 内容                                                                                                                                                                                                           |
| ---------------- | ----------------------------- | -------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app-shell/`     | app-shell                     |       59 |  1.48 MB | 窗口 chrome、tab strip、三向 pane 布局、路由树、对话框系统                                                                                                                                                     |
| `composer/`      | composer                      |       45 |  0.72 MB | composer 主体、utility bar、run-location、队列 tray、quick chat、听写                                                                                                                                          |
| `conversation/`  | conversation                  |      110 |  2.07 MB | thread / turn / turn entries / 虚拟化滚动 / markdown / 导航 rail / git 操作                                                                                                                                    |
| `left-nav/`      | left-nav                      |       42 |  0.55 MB | rail 的 7 个 Lottie 图标、新手清单、Library 页与项目/文件操作                                                                                                                                                  |
| `main-process/`  | main-process                  |       84 | 10.36 MB | `.vite/build/*`：main、preload、worker、browser-page-preload、sandbox-preload、日志归档；`native-menu-locales/` 64 份原生菜单本地化                                                                            |
| `settings/`      | settings                      |      173 |  6.78 MB | 设置外壳、35 个配置页、设置搜索索引、onboarding/login/security 路由                                                                                                                                            |
| `side-panel/`    | side-panel                    |      164 |  7.89 MB | 右侧 tab 内容、Review/Browser/Files/Terminal/PR/Subagents、Popcorn Office 预览                                                                                                                                 |
| `workspace/`     | workspace                     |       14 |  0.19 MB | 选择工作区、workspace agents、Popout Window 首页                                                                                                                                                               |
| `plugins-26908/` | 插件 / MCP（**26.908 快照**） |       32 |  1.08 MB | 插件与 MCP 管理族的新版抽取（设置页 / 管理页 / 详情页 / 商店 / MCP 编辑器）。**与上面 8 个模块版本不同**：26.908 里这批同名 chunk 内容已变，故独立成目录，避免同名两版本混淆；分析见 `../plugin-management.md` |
| `app-261013/`    | **26.1013 全量快照** | **2,415** | **62.0 MB** | 17 个模块：新增 `spaces`、`aeon`、`personalized`、`chronicle`、`voice`、`writing`、`tasks`、`codex-micro`、`chatgpt-surfaces`；旧 8 个模块也按 26.1013 重抽。见 `app-261013/README.md` |
| `app-261016/`    | 26.1016 全量快照 | **2,490** | **63.7 MB** | 17 个模块；Gateways、Biometric、Passwords、Rosalind、Sites appearance 等。见 `app-261016/README.md` |
| `app-261103/`    | **26.1103 最新全量快照（Rspack）** | **201** | **79.3 MB** | 18 个模块；172 个 webview chunk + 29 个主进程文件；57,004 条 i18n。见 `app-261103/README.md` |
| `tools/`         | 分析工具                      |       25 |        — | 通用工具 + 26.1103 Rspack 专项脚本；零第三方依赖（Prettier 复用仓库） |
| `_catalog/`      | 26.903 全局字符串目录          |        1 |   3.8 MB | `i18n-messages.json`：13,338 条（历史）；26.1103 的全量目录在 `app-261103/_catalog/i18n-messages.json`（57,004 条） |

每个模块目录下：

- 子目录按职责再分（如 `conversation/{thread,turn,scroll,pages,markdown,nav-rail}`）；
- `_INDEX.json`：每个 chunk 的**来源档案路径、原始/格式化字节数、原始 SHA-256、被选中原因（规则或闭包）**；
- `_CATALOG.json`：该模块的 i18n 消息（含开发者 `description`）、import 关系、热点属性名，以及字符串字面量的**条数**；字面量明细体量大且很少查阅，用 `catalog.mjs --literals-out` 分流到 `.work/literals/<module>.json`，不入库；
- `README.md`：模块功能说明（本次新增）。

## 文件名约定

保留 asar 内的**原始文件名（含 content hash）**，例如 `local-conversation-thread-a2bcd054c9d2.js`。hash 是 Vite/rolldown 的内容指纹，app 升级后会变，因此文件名本身就是版本证据；`_INDEX.json` 里的 `archive_path` 给出 asar 内的完整路径。

`_deps/` 子目录存放“闭包依赖”：不是按名字规则命中，而是被某个命中 chunk 直接 `import` 而顺带抽取的共享组件（按钮、滑块、对话框等）。`selected_by` 字段记录了它是从哪个 chunk 拉进来的。

## 未抽取的部分

以下内容**故意没有**进入 `code/`（见 `_MODULE_INDEX.json` 的 `shared_external_refs`）：

| 内容                                                       | 原因                                                                                                    |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `app-initial-*.js` (10.0 MB) / `app-primary-*.js` (7.8 MB) | 共享运行时，含全部路由表、store、协议层；单独 light-format 到 `codex_app_rev/.work/big/` 供检索，不入库 |
| `register-*.js` (5.0 MB)、`runtime.worker-*.js` (11 MB)    | Shiki/Monaco 等第三方语法与编辑器运行时                                                                 |
| `visualization-*` (1059 个 chunk, 8.2 MB)                  | 用户生成的可视化产物，非 app UI                                                                         |
| 语言包 `zh-CN` / `ja-JP` / … (60+ × 1.5 MB)                | 翻译数据；英文原文已在 `_catalog/i18n-messages.json`                                                    |
| `node_modules/`、`*.node`、`*.wasm`、字体、图标            | 依赖与二进制资源                                                                                        |

## 重新生成

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.903.9818.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
$C = "<repo>\codex_app_rev\code"
cd $C\tools

node inventory.mjs       $A "$C\..\_work\inventory.json"          # 档案清单
node extract-modules.mjs $A $C --jobs 8 --max-beautify-bytes 1200000   # 抽取+格式化（约 25s）
node settings-map.mjs    $A $C "$C\settings\_SETTINGS_MAP.json"   # 设置页注册表
foreach ($m in "settings","conversation","composer","side-panel","left-nav","app-shell","workspace","main-process") {
  node catalog.mjs "$C\$m" "$C\$m\_CATALOG.json" --literals-out "$C\..\.work\literals\$m.json"
}
node harvest-messages.mjs "$C\_catalog\i18n-messages.json" $C "<.work>\big"   # 全局 i18n 目录
```

`extract-modules.mjs` 是**幂等**的：每次运行前会先按当前 plan 清理各模块目录下的陈旧 `.js`/`.css`（`README.md`、`_INDEX.json`、`_CATALOG.json`、`_SETTINGS_MAP.json` 一律保留），因此改了 `module-map.json` 的规则后直接重跑即可，不会留下上一次运行的孤儿文件。`--dry-run` 会先报告将被清理的数量。

`extract-modules.mjs` 的格式化策略：≤1.2 MB 用仓库内已有的 Prettier 3.9.6（`desktop_app/node_modules/prettier`）；超过则退回自带的 `lightformat.mjs`（只做换行与缩进，不改 token）。`_INDEX.json` 的 `formatter` 字段记录了每个文件用的是哪一种。

app 升级后需要改的只有两处：`tools/module-map.json` 的 `version_target`，以及上面命令里的 `$A` 路径；chunk 名变了也不用改，规则匹配的是去掉 hash 的名字前缀。

## 阅读顺序建议

1. `../architecture.md` — 整体分层与进程/窗口模型
2. `../ipc-protocol.md` — `electronBridge` 与 app-server JSON-RPC 协议
3. 各模块 `README.md` — 按你关心的界面区域进入
4. `../settings-pages.md` — 35 个配置页的注册表、可见性门控与内容分组
5. `../changelog-26.903.md` — 与上一版（26.901.6511.0）的差异
