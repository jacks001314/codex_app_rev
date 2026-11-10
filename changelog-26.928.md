# 26.903 → 26.928 差异

基线：`26.903.9818.0`（应用 `26.903.71938`，build `8576`，2026-09-11 采集，
全量清单 8,867 文件）。
目标：`26.928.3736.0`（应用 `26.928.31416`，build `12553`，2026-10-01 采集，
全量清单 20,660 文件）。

> 采集边界：只读。没有打开 `settings.db`、任何 `.sqlite`、`auth.json`、
> 日志正文或会话缓存，没有运行应用。所有数字都可由本节末尾的命令复算。

## A. 身份与版本

| 项                     | 26.903                                          | 26.928                                          |
| ---------------------- | ----------------------------------------------- | ----------------------------------------------- |
| MSIX 包                | `OpenAI.Codex_26.903.9818.0_x64__2p2nqsd0c76g0` | `OpenAI.Codex_26.928.3736.0_x64__2p2nqsd0c76g0` |
| `package.json` version | `26.903.71938`                                  | `26.928.31416`                                  |
| `codexBuildNumber`     | `8576`                                          | `12553`                                         |
| `codexBuildFlavor`     | `prod`                                          | `prod`                                          |
| Electron               | `42.3.0`                                        | `42.3.0`                                        |
| Vite（devDeps）        | `8.1.5`                                         | `8.2.0`                                         |
| TypeScript（devDeps）  | —                                               | `^7.0.2`                                        |
| `app.asar` 大小        | 309,520,237 B                                   | 540,844,574 B                                   |
| `chrome.dll`           | 322,698,032 B                                   | 327,478,064 B                                   |
| `resources\codex.exe`  | 295,408,944 B                                   | 324,702,000 B                                   |

`package.json` 新增的构建/E2E 脚本里有一条直接暴露了本主题的存在（A 级原文）：

```json
"e2e:computer-use-native-pipe": "node --import tsx ./scripts/computer-use-native-pipe-e2e.mjs"
```

## B. 容器规模

| 范围                 |                26.903 |                 26.928 | 变化                     |
| -------------------- | --------------------: | ---------------------: | ------------------------ |
| 全部条目（不含目录） | 8,867 文件 / 305.3 MB | 20,660 文件 / 523.7 MB | +11,793 文件 / +218.4 MB |
| `webview/assets/`    | 7,981 文件 / 275.9 MB | 19,634 文件 / 486.3 MB | +11,653 文件 / +210.4 MB |
| `.vite/build/`       |      20 文件 / 7.6 MB |       33 文件 / 9.6 MB | +13 文件 / +2.0 MB       |

按扩展名：

| 扩展名  |           26.903 |            26.928 |
| ------- | ---------------: | ----------------: |
| `.js`   | 7,232 / 201.0 MB | 14,741 / 358.8 MB |
| `.css`  |     208 / 1.2 MB |      308 / 2.5 MB |
| `.json` |     127 / 1.0 MB |     998 / 13.4 MB |
| `.png`  |     74 / 13.4 MB |     690 / 30.0 MB |
| `.webp` |    585 / 44.0 MB |     937 / 61.0 MB |
| `.wasm` |     32 / 13.5 MB |      33 / 20.1 MB |
| `.svg`  |      31 / 0.4 MB |    2,346 / 2.5 MB |

`.svg` 从 31 涨到 2,346 主要是图标被拆成独立资源；`.json` 从 127 涨到 998，
其中包含新增的 1,735 个 `visualization-*` 生成物与 `orbit-character` 资产
（448 张缩略图）。

## C. `.vite/build/`（主进程）

20 文件 / 7.6 MB → 33 文件 / 9.6 MB。按 raw 字节比对（去 hash 的 stem）：

**新增**（A 级）：

| 文件                                                                                                                                                         |         raw | 备注                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------: | -------------------------------------------------------------------------------------------------- |
| `bootstrap-DvSEn4qy.js`                                                                                                                                      |   2,231,742 | 26.903 的启动链拆在 `bootstrap`(19 KB) + `window-all-closed`(570 KB) + `src-B6LqG3ek`(1.6 MB) 三处 |
| `application-network-startup-D74LEWDz.js`                                                                                                                    |     286,802 | 网络启动、运行时组件解析（含 `cua_node` 常量）                                                     |
| `zod-ClKgiFhi.js`                                                                                                                                            |     281,343 | 独立的 zod 校验包                                                                                  |
| `app-protocol-DaeIspKt.js`                                                                                                                                   |     143,527 | 自定义协议处理                                                                                     |
| `startup-requirements-Da3KfG8r.js`                                                                                                                           |     112,820 | 启动前置条件                                                                                       |
| `mcp-app-attachment-FKHSY4wH.js`                                                                                                                             |      39,811 | MCP App 附件                                                                                       |
| `path-browserify-win32-DubphUXU.js`                                                                                                                          |      11,592 |                                                                                                    |
| `skills-Ucm9jp26.js`                                                                                                                                         |       2,843 |                                                                                                    |
| `_baseSlice` / `build-flavor` / `rolldown-runtime` / `character-preview` / `browser-background-switches` / `record-aeon-assistant-message-delivery` / `dist` | 130 – 3,618 | 若干小工具 chunk，其中 `browser-background-switches` 与浏览器面相关                                |

**显著变化**：

| 文件                      |    26.903 |                                                                              26.928 |
| ------------------------- | --------: | ----------------------------------------------------------------------------------: |
| `main-*.js`               | 3,098,947 |                                                                           3,712,144 |
| `worker.js`               | 1,915,845 | 2,377,100（新增 `computer-use-worker`，见 [computer-use.md](computer-use.md) §8.3） |
| `browser-page-preload.js` |   515,490 |                                                   511,863（**两版都有**，不是新增） |
| `preload.js`              |     6,875 |                                                                               6,909 |

**消失**：`window-all-closed-*`、`desktop-log-archive-*`、`file-based-logger-*`
（逻辑并入 `bootstrap` / `main`）。

## D. 设置导航注册表

`app-initial` 里两张表（A 级，可 grep `slug:`）：

- `pDa` —— 有序描述符数组（决定导航顺序）：**26.903 = 35 项 → 26.928 = 50 项**；
- slug 全表：**26.903 = 37 个（35 导航 + `environments`、`teams`）→ 26.928 = 51 个**。

新增的 14 个 slug（26.928 有、26.903 无；无删除项）：

```text
age  agreements  parental-controls  trusted-contact  safety  time-management
work-settings  ads-controls  codex-cloud  usage-code-review  extension
file-type-handlers  cloud-computer  passwords
```

与本主题直接相关的是 `extension`（浏览器扩展）、`passwords`、`cloud-computer`。

## E. 与 Computer Use 相关的差异

已单独成篇，见 [computer-use.md](computer-use.md) §9。摘要：

1. `cua_repl` MCP server 与 `unified-computer-use` 插件**首次被记录**（此前文档未出现
   `unified-computer-use` / `openai-bundled` 这两个名字）。
2. `cua_node/` 从 `{bin, manifest.json}` 骨架扩张到 **239.7 MB / 2,367 文件**，
   自带 Node `24.21.0-cua.1`、`node_repl.exe`、`@oai/{cua,sky,cua-repl,browser-desktop}`、
   Playwright、sharp。
3. `tectonic/tectonic.exe`（55.1 MB LaTeX 引擎）在 26.903 的目录树里不存在。
4. 设置面从 2 页（`computer-use`、`browser-use`）扩展为 3 个一等页 + 8 条子路由，
   并新增独立模块 `browser-use-policy-site-permissions`（52,734 B）。
5. `cua_repl` 的浏览器面提示词被改写（原文对比见 computer-use.md §5.3）。
6. `browser-page-preload.js` **两版都有**（515,490 → 511,863 B），因此「浏览器 webview
   有独立 preload」不是 26.928 的新变化。真正新增的是
   `browser-background-switches-*.js`（480 B）与主进程里的
   `browser-page-preload` 消费方（见 §C）。

## F. i18n 文案

26.903 全量收割得 **13,338 条 / 1,919 组**。
本次只对 Computer Use 相关面重新收割（`code/computer-use-26928/` + 共享大 bundle），
得 **3,753 条 / 955 组**，其中：

| 组                     |                         条数 |
| ---------------------- | ---------------------------: |
| `settings.browserUse`  |                          248 |
| `settings.computerUse` |                          120 |
| `codex.mcpTool`        | 46（全部是 `computerUse.*`） |
| `settings.nav`         |                           56 |
| `settings.section`     |                           33 |

**没有做全量重收割**，因此本文不给出「文案增删」的统计。

## G. 方法论与坑

1. **不要用「共享 bundle 里的文案消失了」当功能下线的证据。**
   26.928 的 `app-initial` + `app-shared` 只有 3,892 条 `id` 字面量，
   而 26.903 的 `app-initial` + `app-primary` 有 6,208 条 —— 差值主要来自
   **消息被拆进了几百个按路由切分的新 chunk**，而不是被删掉。
   实例：`composer.computerUseAppApproval.disclosure` 在共享 bundle 对比里显示为
   「removed」，但它在 26.928 的
   `code/computer-use-26928/computer-use/approvals/*.js` 里确实存在。
2. **按 family（去 hash 的 stem）对比会严重高估新增。**
   26.928 的 chunk 命名粒度变细（`webview/assets` 的 family 数从 3,861 涨到 11,233），
   绝大多数「新增 family」是同名代码换了 hash 或被拆分，不是新功能。
   可靠的增量信号是**目录级体积、注册表 slug、以及显式命名的少数新 chunk**。
3. **26.908 没有全量清单。** 本机在 2026-09-16 装过 `26.908.9136.0`，
   当时只重抽了插件模块（`code/plugins-26908/`），没有跑 `inventory.mjs`，
   所以 26.903 → 26.928 之间的中间态无法回填。

## H. 复现

```powershell
$S   = "D:\qax\reagent\dev\git\Syntropy\.agents\skills\revert\scripts"
$new = "C:\Program Files\WindowsApps\OpenAI.Codex_26.928.3736.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
$W   = "D:\qax\reagent\dev\git\Syntropy\codex_app_rev\.work"

# 1. 存档新版本全量清单（diff 基线，务必提交）
node "$S\inventory.mjs" $new "$W\inventory-26928.json"

# 2. 逐扩展名/目录的体积对比
#    （.work/inventory.json 是 26.903 的清单）
node "$W\inv-diff.mjs" "$W\inventory.json" "$W\inventory-26928.json"

# 3. 设置导航 slug 对比
node "$W\slugs-26928.mjs" "$W\big-26928\app-initial-3916b423772b.js"

# 4. 共享 bundle 的 id 级对比（注意 §G.1 的坑）
node "$W\id-diff-26928.mjs" "$W\big" "$W\big-26928" "computerUse|browserUse|appshot"
```

第 2–4 步的辅助脚本（`inv-diff.mjs`、`slugs-26928.mjs`、`id-diff-26928.mjs`、
`big-26928.mjs`）是本次分析的一次性工具，放在 `.work/`（gitignore），**未入库**。
它们都很短（每个 30–90 行，只做正则与统计），按本节的输入输出说明可重写；
步骤 1 与 3 依赖的清单和共享 bundle 都在 `inventories/`（清单已入库）与
`.work/big*`（bundle 未入库）里。

⚠️ **本次已把新版本的 `inventory-26928.json` 存档。** MSIX 升级会替换整个版本目录，
旧 `app.asar` 事后不可恢复；下次升级前请先重跑第 1 步。

两份清单都已入库到 [inventories/](inventories/)（`inventory-26903.json`、
`inventory-26928.json`），`.work/` 里的副本是脚本的默认读写位置。
