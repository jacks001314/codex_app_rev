# 26.928 Computer Use 快照

对 **26.928.3736.0**（应用 `26.928.31416`）的**定向**重抽，只覆盖 Computer Use 相关的
渲染层 chunk 与主进程构建产物。`code/` 其余部分仍是 26.903 的快照
（`code/plugins-26908/` 是 26.908 的插件快照），三者用途不同，不要混用。

生成时间：2026-10-01。源档案：

```text
C:\Program Files\WindowsApps\OpenAI.Codex_26.928.3736.0_x64__2p2nqsd0c76g0\app\resources\app.asar
```

## 内容

| 模块            | chunk 数 |              raw |         格式化后 | 说明                                                        |
| --------------- | -------: | ---------------: | ---------------: | ----------------------------------------------------------- |
| `computer-use/` |       83 |      1,052,150 B |                — | 渲染层：设置页、审批卡片、站点权限策略、浏览器 chrome、截图 |
| `main-process/` |       33 |     10,099,470 B |                — | `.vite/build/` 全量（主进程、preload、worker）              |
| 合计            |  **116** | **11,151,620 B** | **15,231,375 B** | 全部经 Prettier 格式化，无一失败                            |

`_MODULE_INDEX.json` 是模块汇总；每个模块的 `_INDEX.json` 记 `archive_path`、
`selected_by`、`raw_bytes`、`formatted_bytes`、`formatter`、`sha256_raw`。

## 子目录

```text
computer-use/
  settings/    computer-use / browser-use / appshots 设置页 + 浏览器设置子页
               （browser-extension-settings、browser-clear-browsing-data-dialog-view、
                browser-site-settings-subpages、browser-account-switcher-menu-item …）
  policy/      browser-use-policy-site-permissions（站点权限策略，52,734 B）
               browser-use-origin-state-queries、browser-use-settings-visibility
               computer-use-native-app-metadata（原生应用图标/元数据的 query）
  approvals/   computer-use-app-approval-request-card、computer-use-app-approvals-query
  capture/     request-screen、screen-*、ConnectScreenFill（截屏与连接屏幕）
  history/     computer-history-{query,suggestions,suggestion-prompt,plugin-icon}
  chrome/      browser-*（239 KB 主 chunk）、cloud-browser-*、template-browser-view、
               hidden-browser-use-webview-host、workspace-*-route.browser
  _deps/       未被规则命中、但被上述 chunk import 的共享组件（闭包一层）
main-process/
  build/       .vite/build/ 全量 33 个文件（含 browser-page-preload.js 500 KB）
_catalog/      i18n-messages.json（3,753 条 / 955 组）
_MAP.json      本次使用的分类规则（改规则后可直接重跑）
```

## 命名陷阱（务必先读）

1. **`browser-use-settings-*.js` 与 `settings-plugin-selection-*.js` 是同一个家族的两条路径。**
   `browser-use-settings` 是命名规则命中的种子；`_deps/settings-plugin-selection-*.js`
   （26,590 B）是它的闭包依赖，在 26.908 的文档里曾被误认为「浏览器设置页本体」。
   判断实现时以 `_INDEX.json` 的 `selected_by` 为准。
2. **`browser-5a5b6f86d988.js`（244,885 B）不是浏览器设置页**，
   它是浏览器 chrome（地址栏、标签页、历史菜单等）的共享实现。
3. **`computer-use-app-approval-request-card-*.js` 只有 6.5 KB**，但它承载了
   首用披露与逐应用授权两段完整逻辑 —— 小文件往往是核心。
4. **`_deps/voice-session-parameters-*.js`（51 KB）与 `mark-session-*.js`（50 KB）
   与 Computer Use 无关**，是闭包跟随带进来的通用模块。引用时注意别张冠李戴。

## 与其它快照的同名文件（不是错误）

`code/` 下现在有三份不同版本的快照，**同名但内容不同**的文件是正常的：

| 同名文件                                                                                      | 本快照（26.928） | 旧快照                                                                                           |
| --------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------ |
| `main-process/build/{preload,worker,early-bootstrap,sandbox-preload,browser-page-preload}.js` | 26.928           | `code/main-process/build/`（26.903，无 `browser-page-preload.js`）                               |
| `mcp-app-analytics-*.js`、`sidebar-plugins-icon-*.js`                                         | —                | `code/conversation/_deps/`、`code/left-nav/sidebar/`（26.903）与 `code/plugins-26908/`（26.908） |

自检脚本报出的「重复 chunk」都来自跨快照比较，同一快照内部没有重复。

## 重新生成

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.928.3736.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
$S = "D:\qax\reagent\dev\git\Syntropy\.agents\skills\revert\scripts"
$O = "D:\qax\reagent\dev\git\Syntropy\codex_app_rev\code\computer-use-26928"

node "$S\extract-modules.mjs" $A $O --map "$O\_MAP.json" --dry-run   # 先看计划
node "$S\extract-modules.mjs" $A $O --map "$O\_MAP.json" --jobs 8    # 约 9 秒

# 字符串目录（messages 入 `_catalog/`，字面量明细分流到 .work/，不入库）
node "$S\catalog.mjs" "$O\computer-use" "$O\computer-use\_CATALOG.json" --literals-out "..\..\.work\literals\computer-use-26928.json"
node "$S\catalog.mjs" "$O\main-process" "$O\main-process\_CATALOG.json" --literals-out "..\..\.work\literals\main-process-26928.json"
node "$S\harvest-messages.mjs" "$O\_catalog\i18n-messages.json" "$O\computer-use" "..\..\.work\big-26928"
```

`extract-modules.mjs` 是**幂等**的：每次运行先按当前 `_MAP.json` 清理陈旧 `.js`/`.css`，
保留 `README.md` / `_INDEX.json` / `_CATALOG.json` / `*_MAP.json`。

## 阅读顺序建议

1. [../../computer-use.md](../../computer-use.md) §1–§4（产品线、运行时、装配链路、注册表）；
2. `computer-use/approvals/computer-use-app-approvals-query-*.js`（3552 B，全部 RPC 方法名）；
3. `computer-use/policy/computer-use-native-app-metadata-*.js`（1201 B，原生应用查询）；
4. `computer-use/settings/browser-use-settings-visibility-*.js`（3034 B，可见性判定）；
5. `computer-use/settings/computer-use-settings-*.js`（112 KB，用 `_CATALOG.json` 的
   messages 当索引，不要从第一行读起）；
6. `main-process/build/main-DkWgQSQe.js`（3.6 MB，用 `ctx.mjs` 定位，不要整读）。
