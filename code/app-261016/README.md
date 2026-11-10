# Codex desktop app 26.1016 逆向快照

本目录从本机 MSIX `OpenAI.Codex 26.1016.8622.0`（应用版本 `26.1016.62342`，
build `21477`）的 `app.asar` 抽取并格式化，按 UI 模块分目录。

> 这是只读逆向产物，不是可运行工程。生产包没有 sourcemap，标识符已被压缩；
> 相对 `import "./x.js"` 指向 asar 内 `webview/assets/` 的同级 chunk，
> 在本目录树中不一定存在。

## 规模

| 指标 | 值 |
| --- | ---: |
| 模块 | **17** |
| chunk | **2,490** |
| 原始字节 | **45,495,346**（43.4 MiB） |
| 格式化后 | **66,829,689**（63.7 MiB） |
| 全局 i18n | **22,073 条 / 3,926 组** |
| 设置 nav / slug / loader | **53 / 54 / 55** |

## 目录

| 目录 | 内容 | 26.1016 重点 |
| --- | --- | --- |
| `aeon/` | dot 的对话、创建、消息与认证 | USB passkey、邮箱 OTP、MCP elicitation、消息回执 |
| `app-shell/` | 窗口 chrome、路由、layout、对话框 | Rosalind 路由、浏览器认证页、业务 onboarding 表单 |
| `chatgpt-surfaces/` | ChatGPT 首页、会话、设置公共面 | Sites 外观编辑 |
| `chronicle/` | Computer History | 无独立新模块 |
| `codex-micro/` | Work Louder 硬件 | 延续 |
| `composer/` | composer、队列、Quick Chat、听写 | Quick start、附件与 MCP approval 依赖 |
| `conversation/` | thread / turn / 虚拟化 / markdown | 延续与增量更新 |
| `left-nav/` | 侧栏、Library、项目 / 文件操作 | 延续 |
| `main-process/` | `.vite/build/*` 与原生菜单本地化 | Artifact Template Picker 注入、feature availability |
| `personalized/` | 个性化 Page、Appgen、Sites | 与 Sites 外观编辑相邻 |
| `settings/` | 设置外壳、53 个导航页、搜索索引 | Gateways、Biometric、Passwords 依赖 |
| `side-panel/` | 右栏 tab、预览、终端、subagents | 延续 |
| `spaces/` | Spaces / Pages / Sites | browser instance 路由、演示 Quick start |
| `tasks/` | Scheduled tasks | 延续 |
| `voice/` | Realtime Voice / 听写 | 延续 |
| `workspace/` | 工作区选择、workspace agents、Popout | 延续 |
| `writing/` | Writing block 编辑器、AI 工具 | 延续 |

大量新增组件是通过 import 闭包进入 `_deps/` 的，例如：

- `aeon/_deps/usb-passkey-dialog-e76eaeb4d0d0.js`
- `aeon/_deps/mcp-request-card-6a35b7fc0e14.js`
- `app-shell/_deps/persona-client-7dd1d4a8ca29.js`
- `chatgpt-surfaces/_deps/dropdown-6c3f6bdb91ed.js`

它们在 `_INDEX.json` 的 `selected_by` 中记录了来源 chunk。

## 元数据

- `_MODULE_INDEX.json`：模块汇总、external refs 与 totals；
- `_catalog/i18n-messages.json`：全局文案目录（含开发者 `description`）；
- `_diff/`：与 26.1013 的完整 i18n、模块 hash 与协议集合差异；
- `<module>/_INDEX.json`：来源、原始 / 格式化大小、SHA-256、选中原因；
- `<module>/_CATALOG.json`：模块 i18n、import 图与热点属性；
- `settings/_SETTINGS_MAP.json`：设置导航、slug、loader、shim 与本地覆盖自检。

## 未抽取

| 内容 | 原因 |
| --- | --- |
| `app-initial-ad16eaadf81f.js`（14.6 MB） | 路由、设置注册表、协议、全局 store |
| `app-shared-2feb3d4c6fcc.js`（5.9 MB） | 共享组件、hooks、查询层 |
| `app-primary-3e00728c2a4c.js`（2.5 MB） | 主界面、安全提示、realtime voice |
| `register-*`、`runtime.worker-*` | 编辑器 / 语言运行时 |
| `visualization-*` | 用户生成的可视化产物 |
| 语言包、Orbit wasm、字体、媒体 | 批量资源 |
| `node_modules/`、`*.node`、`*.wasm` | 依赖与二进制资源 |

三个共享 bundle 的 light-format 副本在
`codex_app_rev/.work/big-261016/`，不入库。

## 重新生成

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1016.8622.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
$O = (Resolve-Path "codex_app_rev\code\app-261016").Path
$M = "codex_app_rev\code\tools\module-map-261016.json"

node codex_app_rev\code\tools\extract-modules.mjs $A $O --map $M `
  --jobs 8 --max-beautify-bytes 1200000
node codex_app_rev\code\tools\settings-map.mjs $A $O "$O\settings\_SETTINGS_MAP.json"
node .agents\skills\revert\scripts\harvest-messages.mjs `
  "$O\_catalog\i18n-messages.json" $O "codex_app_rev\.work\big-261016"
```

`extract-modules.mjs` 的 worker 在 Node 24 上要求绝对路径，因此 `$O` 必须先
`Resolve-Path`。

## 阅读顺序

1. [`../../changelog-26.1016.md`](../../changelog-26.1016.md)
2. `settings/_SETTINGS_MAP.json` 与 `settings/shell/settings-c2fddca9a1ec.js`
3. `settings/shell/settings-d7661829b85a.js`
4. `app-shell/_deps/persona-client-7dd1d4a8ca29.js`
5. `aeon/_deps/usb-passkey-dialog-e76eaeb4d0d0.js`
6. `aeon/_deps/mcp-request-card-6a35b7fc0e14.js`
7. `_catalog/i18n-messages.json` 的 `description`
