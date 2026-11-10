# code/plugins-26908/ — 插件 / MCP 管理模块（26.908 快照）

本目录是从本机安装的 **Codex desktop app `26.908.9136.0`** 的 `app.asar` 中抽取、格式化后的
**插件（Plugins）与 MCP 管理**相关 chunk，共 **32 个文件 / 1.08 MB**（原始 0.65 MB）。

## 为什么单独一个目录

`code/` 的其余部分是 `26.903.9818.0` 的快照。插件这一族在 26.908 里**改动很大**
（**17 个名字 / 19 个文件**内容已变、**9 个名字 / 10 个文件**新增），混进 `code/settings/` 会让「同名文件两个版本」
无法区分，所以按版本单独落盘：

| 文件             | 内容                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `_INDEX.json`    | 每个 chunk 的 `archive_path` / 原始与格式化字节 / `sha256_raw` / 选中规则                         |
| `_CATALOG.json`  | 本目录 32 个文件的 i18n 描述符、字符串字面量、属性名频次、import 关系                             |
| `_MESSAGES.json` | **417 条**插件/MCP 管理相关 i18n 描述符，含来自共享 bundle（`app-initial` / `app-primary`）的部分 |

`_MESSAGES.json` 是必要的补充：`plugins.*` 命名空间里很大一部分文案（安装、分享、埋点、
错误 toast）不在本族 chunk 里，而在共享运行时中，`_CATALOG.json` 覆盖不到。

> `_INDEX.json` 里的 `sha256_raw` 是**原始（未格式化）** chunk 的哈希，可用于在 app 升级后
> 判断某个 chunk 是否真的变了。

## 未入库的部分（在 `.work/plugins908/`，gitignored）

| 内容                                                                            | 原因                                                                                       |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `app-initial-bcc2ff475eb6.js` (9.8 MB) / `app-primary-b36a719dba75.js` (5.3 MB) | 共享运行时，含设置注册表、路由、插件 store 与全部 `/ps/*` 客户端；只做 light-format 供检索 |
| `chartjs-plugin-zoom.esm-*.js`                                                  | 第三方图表库，与插件系统无关（名字里有 "plugin" 属误命中）                                 |
| `installed-26908.json` / `inventory-26908.json`                                 | 26.908 的全量清单与档案盘点，供下次升级做 diff 基线                                        |

## 命名陷阱（本族已确认）

1. **`settings-plugin-selection-3cc0bd8c294f.js` 其实是「浏览器（browser-use）」设置页**，
   不是插件选择页；它只顺带导出一个插件解析函数（按 marketplace 优先级挑出 Browser 插件）。
2. **rolldown shim**：`plugins-settings-d87b6c101c13.js`(90 B)、`plugin-detail-page-81e5d163cd3a.js`(133 B)、
   `use-plugin-installation-61b09ebaab52.js`(90 B)、`mcp-extension-view-page-8f3f7ee16988.js`(196 B)
   都只是再导出。真正实现在**同名的另一个哈希**上（如 `plugins-settings-c02739de4e70.js`）。
   本目录**两种都保留**，阅读时先看体积。
3. 同一个 chunk 名在本族里出现过**多个不同 hash** 的 `plugins-settings`（90 / 2692 B）、
   `plugin-detail-page`（133 / 161135 B）、`mcp-extension-view-frame`（104 / 8917 B）、
   `mcp-extension-view-page`（196 / 7315 B）——**不要按 chunk 名找实现**。

## 重新生成

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.908.9136.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
node <repo>\codex_app_rev\.work\plugins908\pull.mjs   $A <repo>\codex_app_rev\.work\plugins908 "(plugin|mcp)"
node <repo>\codex_app_rev\.work\plugins908\stage.mjs     # raw/pretty -> code/plugins-26908
node <repo>\codex_app_rev\.work\plugins908\harvest.mjs   # i18n 描述符
node <repo>\codex_app_rev\.work\plugins908\stage2.mjs    # -> _MESSAGES.json
node <repo>\codex_app_rev\code\tools\catalog.mjs <repo>\codex_app_rev\code\plugins-26908 <repo>\codex_app_rev\code\plugins-26908\_CATALOG.json
```

只读安装目录；`pull.mjs` 用仓库内已有的 Prettier 3.9.6 格式化（阈值 400 KB）。

## 配套文档

[`../../plugin-management.md`](../../plugin-management.md) —— 功能点与实现细节的完整分析。
