# app-shell

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 15 个文件 / raw 1.4 MB / formatted 2.2 MB，模块级文案 1041 条（42 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `entry/348410.35ea11b6a0.js` | 283386 | — | entry |
| `975992.b641496678.js` | 235119 | 600 | mandatory |
| `864349.a618a3ad07.js` | 163819 | 427 | mandatory |
| `506449.997239b562.js` | 150659 | 511 | namespace-score |
| `69751.3a13e513e3.js` | 116848 | 413 | namespace-score |
| `58193.bdce3ca988.js` | 116813 | 454 | namespace-score |
| `928366.784ad82eec.js` | 87840 | 406 | namespace-score |
| `entry/356023.a13734b863.js` | 86592 | — | entry |
| `892801.9032ebdfa7.js` | 60868 | 383 | namespace-score |
| `437750.ceb57a5518.js` | 57322 | 380 | namespace-score |
| `969257.d0a46e6410.js` | 44525 | 57 | mandatory |
| `entry/762515.d5670636b1.js` | 20318 | — | entry |
| `entry/727403.b9dd20a8a9.js` | 8201 | — | entry |
| `entry/883398.12d9a6e686.js` | 7112 | — | entry |
| `entry/203305.36534d55d5.js` | 757 | — | entry |

子目录：`entry/`。

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `settings.codexMicro` | 225 |
| `codex.command` | 171 |
| `codex.commandDescription` | 154 |
| `settings.chatGpt` | 86 |
| `browser.bookmarks` | 57 |
| `settings.general` | 48 |
| `settings.voice` | 47 |
| `codex.commandMenuTitle` | 45 |

## 开发者描述（节选）

- `codex.space.sidebar.spaceSetupNeedsAttention` — Space setup needs attention
  - Toast displayed when a shared Space setup needs retry or recovery. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.
- `space.teamHome.setupUnavailable` — This space is no longer available
  - Shown when an unfinished Space can no longer be opened.

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
