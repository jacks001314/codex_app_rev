# 26.928 → 26.1013 差异

> 基线：本机 MSIX `OpenAI.Codex 26.1013.4894.0`（应用版本 `26.1013.40934`，
build `20770`），2026-10-17 采集。对照基线为 2026-10-01 的 `26.928.3736.0`
（`26.928.31416`，build `12553`）。
> 本次只读安装目录，未运行时代理、未读取凭据 / SQLite / `settings.dat` / 会话内容。

## 1. 一句话结论

26.1013 不是一次小版本：渲染层新增约 **36.6 MB JavaScript**，文案从 **13,338 条增至
21,620 条**（净增 8,282，新增 11,060、删除 2,778）。新增能力集中在五个方向：

1. **Spaces / Pages / Sites**：从“聊天 + 工作区”扩成带协作页面、文件、回收站与发布的文档产品；
2. **dot（内部代号 Aeon）**：一个可通过电话 / 短信 / 邮件 / Slack / Teams 联系、带云电脑的个人 agent；
3. **Realtime Voice**：独立的双向语音会话，与听写分离，支持屏幕上下文、摄像头与屏幕共享；
4. **Writing blocks / Pages 编辑器**：对话内可编辑文档块，支持斜杠菜单、AI 选区改写、模板、导出与存入 Library/Space；
5. **Computer History（内部代号 Chronicle）**：把本机活动摘要成可检索历史，并依赖 Memories。

设置导航也从 26.928 文档记录的 50 项增加到 **52 项**，并首次在代码里明确分成
`Personal` / `Teams` / `Integrations` / `Coding` 四组。

## 2. 身份与容器

| 项目 | 26.928 | 26.1013 | 变化 |
| --- | --- | --- | --- |
| MSIX 版本 | `26.928.3736.0` | `26.1013.4894.0` | — |
| 应用版本 | `26.928.31416` | `26.1013.40934` | — |
| build number | `12553` | `20770` | +8,217 |
| Electron | `42.3.0` | `42.3.0` | 不变 |
| Vite | 未记录 | `8.2.0` | 新记录 |
| app.asar | 约 514 MB | **582,072,504 B** | +约 68 MB |
| asar 文件数 | 20,660 | **21,073** | +413 |
| asar 总字节 | 523.7 MB | **566.2 MB** | +42.5 MB |
| `.vite/build/` | 33 files / 9.6 MB | **35 files / 10.2 MB** | +2 |
| `webview/assets/` | 19,634 files / 486.3 MB | **20,045 files / 529.3 MB** | +411 / +43.0 MB |

关键 hash（本机实算）：

| 文件 | SHA-256 |
| --- | --- |
| `app/resources/app.asar` | `BBEC1D64E135B718A154B31655BB8AD9A39472BAC1B2CABBA991A9D97A339DD8` |
| `app/ChatGPT.exe` | `2F61EAEB01DCEE7FD18D572FBB338C88B686C0D891427487FDD182AFDD64B4F6` |
| `AppxManifest.xml` | `F4D8BBA5AC3EC8801077B9AB8CC8F403284AB785CE22CD5FC1A30A7EA1837937` |

Owl 运行时哈希也变了：

```json
{
  "packagedFrom": "C:\\a\\minirepo\\minirepo\\codex\\codex-apps\\electron\\out\\Codex-win32-x64",
  "runtimeArchiveSha": "1487ec3563a0989f8af4eb9daab8ca4e232ecda6ddee5d668326b44cdc781740",
  "runtimeName": "owl"
}
```

## 3. 安装层：新增服务、截图能力与随包插件

`AppxManifest.xml` 与 26.928 的差异（A 级）：

| 项 | 26.928 | 26.1013 |
| --- | --- | --- |
| capabilities | `runFullTrust` / `unvirtualizedResources` / `internetClient` | 追加 `packagedServices`、`localSystemServices`、`graphicsCaptureProgrammatic`、`graphicsCaptureWithoutBorder` |
| 后台服务 | 无 | `CodexSandboxService.OpenAI.Codex`，`codex-windows-sandbox-service.exe`，`auto` / `localSystem` |
| 执行别名 | 仅 Chrome 原生消息宿主 | 追加 `codex-core-command-runner.exe` |
| 启动任务 | 无 | `StartupTask TaskId=App` |
| 文件关联 | `.skill` / Office | 不变（`.csv` `.docx` `.pptx` `.tsv` `.xls` `.xlsm` `.xlsx` `.skill`） |

新增的两个 `graphicsCapture*` 能力与 Computer History、Computer Use、屏幕共享同向，
但**静态包只能证明声明存在，不能证明运行时一定调用**（C 级）。

随包资源（只统计文件名与大小）：

| 目录 | 26.1013 |
| --- | --- |
| `resources/cua_node/` | 2,369 files / **240.6 MB**，Node `24.21.0-cua.1`，runtime `0.0.30/20261014203459-0849368674e2` |
| `resources/plugins/` | 838 files / **46.9 MB** |
| `resources/tectonic/` | 1 file / 52.5 MB |
| `resources/native/` | 5 个 `.node`，含 `computer-use-app-icons` / `hid-topology-watcher` / `remote-control-device-key` / `windows-account` / `windows-updater` |

`resources/plugins/openai-bundled/plugins/` 下的随包插件从 26.928 的 4 个扩到 **10 个**：

```text
browser  chrome  code-review  codex-app-tools  computer-use
deep-research  image-guided-assets  latex  unified-computer-use  visualize
```

新增的三个值得单列：

- `code-review`：与设置页 `code-review` 和 Review 面板对应；
- `codex-app-tools`：Writing block / Pages 的应用工具面；
- `deep-research` / `visualize` / `latex` / `image-guided-assets`：研究、可视化与排版类工具。

## 4. 渲染层：新增 514 个 chunk family

按去掉 content hash 的 family 统计（`webview/assets`）：

| 指标 | 26.928 | 26.1013 |
| --- | ---: | ---: |
| family 数 | 11,233 | **11,561** |
| 新增 family | — | **514** |
| 移除 family | — | **186** |
| 成员数变化 | — | 197 |

新增 family 里体积最大的不是业务页面，而是运行时与批量资源：

| family / 文件 | 体积 | 判断 |
| --- | ---: | --- |
| `register-Civ4p15u-*`（2 chunks） | 4.7 MB | 编辑器 / 语法注册运行时 |
| `mapbox-gl-C3M74ox6` | 1.59 MB | 地图 |
| `ValdiRuntimeProvider` | 631 KB | 新的 UI 运行时 provider |
| `page-bootstrap-display.worker` | 525 KB | Pages 首屏 worker |
| `offline-tailwind` | 399 KB | 离线样式 |
| `RealtimeEngineBuilder` | 299 KB | 实时语音引擎 |
| `application-route` / `routes` | 200 KB / 130 KB | 路由层重组 |

业务 chunk 的新增信号包括 `space-sidebar`、`personalized-pages`、`writing-style-setup`、
`tasks`、`feed`、`chronicle-*`、`codex-micro-*`、`subscription-onboarding`、
`onboarding-starter-tasks`、`agreement`、`member-settings` 等。

> 注意：`visualization-*` 仍是最大噪声源（1,735 个 / 9.6 MB），
> 26.1013 的 hash 变成 12 位十六进制。按 16 位 hash 写死的排除规则会漏掉它们，
> 本次已把规则改为 `^visualization-[0-9a-f]{8,20}\\.(js|css)$`。

## 5. 文案增量：+11,060 条

全局目录：`code/app-261013/_catalog/i18n-messages.json`。

| 指标 | 26.903（全量基线） | 26.1013 |
| --- | ---: | ---: |
| 消息数 | 13,338 | **21,620** |
| 分组数 | 1,919 | **3,839** |
| 新增 id | — | **11,060** |
| 删除 id | — | **2,778** |

新增量最大的组（按 `id` 前两段）：

| 新增条数 | 组 | 含义 |
| ---: | --- | --- |
| 506 | `settings.chatGpt` | ChatGPT 账号 / 设置页扩张 |
| 310 | `codex.space` | Spaces |
| 262 | `restricted.environmentSetup` | 云环境配置（内部命名） |
| 244 | `restricted.aeon` | dot 个人 agent |
| 165 | `settings.teams` | Teams / 工作区管理 |
| 163 | `restricted.aeonMessaging` | dot 的消息与活动 |
| 160 | `chatgptConversations.gpts` | GPTs / 应用目录 |
| 145 | `onboarding.health_department` | 健康 / 部门类 onboarding |
| 138 | `codex.page` | 单个 Page |
| 122 | `codex.pages` | Page 集合、导入、通知 |
| 100 | `teams.icons` | Teams 图标 |
| 85 | `space.pageTemplates` | Page 模板 |
| 76 | `automations.configuration` | 定时任务配置 |
| 76 | `browser.permission` | 浏览器站点权限 |
| 76 | `settings.codeReview` | Code Review 设置 |
| 74 | `chatgpt.work` | ChatGPT Work |

删除的 2,778 条主要集中在旧 onboarding、旧设置页和旧编辑器文案；
不能简单解读成功能删除，很多是改名或拆分。

## 6. 五个新功能面

### 6.1 Spaces / Pages / Sites

新的文档产品层，路由与 API 见 [spaces.md](spaces.md)。一句话：
**Space = 协作容器，Page = 可嵌套的文档，Site = 由 Page 发布出的站点**。

最硬的证据：

- 路由 `/spaces/:spaceId`、`/spaces/new?creation=...`、`/space/:pageId`、`/space/sites/*`；
- REST：`/spaces/{space_id}/pages`、`/spaces/v2/{space_id}/appearance`、
  `/spaces/{space_id}/restore`、`/pages/{page_id}`、`/pages/suggestions`；
- 创建流程有 `creating` / `created` / `error` 状态与 `space_setup_save_failed`、
  `space_symbol_unavailable`、`space_overview_unavailable` 等错误码。

### 6.2 dot（Aeon）

新的个人 agent 产品线，路由 `/dots`、`/dots/home`、`/dots/start`、`/dots/new`、
`/dots/thread/:threadId`、`/dots/:id`。它有三块能力：

1. 消息通道：电话 / 短信 / 邮件 / Slack / Teams；
2. 云电脑：实时画面、接管 / 归还控制；
3. 个性化：Orbit 角色运行时（wasm + data + 缩略图，约 17 MB）。

详见 [aeon-dot.md](aeon-dot.md)。

### 6.3 Realtime Voice

与听写（dictation）分离的双向语音。新增的 app-server 方法：

```text
thread/realtime/start        thread/realtime/started
thread/realtime/itemAdded    thread/realtime/item/started
thread/realtime/item/completed
thread/realtime/transcript/delta
thread/realtime/closed       thread/realtime/error
```

`thread/realtime/start` 的参数包含 `outputModality`、`realtimeStartInstructions`、
`realtimeEndInstructions`、`codexResponseHandoffMode`、
`codexResponseHandoffChannelPrefixes`、`transport` 等。详见 [realtime-voice.md](realtime-voice.md)。

### 6.4 Writing blocks

对话内的可编辑文档块，支持：

- 斜杠菜单：文本 / H1-H3 / 无序列表 / 有序列表 / checklist / 表格 / 分隔线 / emoji / AI 生成；
- 浮动工具栏：加粗 / 斜体 / 行内代码 / 链接；
- 选区 AI 改写（Ask for changes）；
- 版本历史 / undo / redo；
- 保存为 Page、保存到 Library、保存到 Space；
- Email block（To/Cc/Bcc/Subject）；
- Presentation outline（幻灯片数、模板、PowerPoint / Google Slides 导出）；
- `Write Like Me` 语气变体。

详见 [writing-blocks.md](writing-blocks.md)。

### 6.5 Computer History（Chronicle）

把本机活动摘要成可查询历史，依赖 Memories 开关。设置页是
`settings/chronicle`，配置键 `chronicle`，客户端方法：

```text
listHistory()
listHistorySuggestions()
listHistorySummaryIntervals({ sinceMs })
```

权限模型是 **allowlist / blocklist + 默认观察 / 默认不观察**，同时区分 app 与 URL。
详见 [chronicle.md](chronicle.md)。

## 7. 设置导航：52 项、四组

`code/app-261013/settings/_SETTINGS_MAP.json`：

| 表 | 数量 |
| --- | ---: |
| 有序 nav descriptor | **52** |
| slug 全表 | **53**（多 `environments`） |
| loader | **54**（多一个 `family` 别名，指向 `general-settings`） |
| `resolved_chunks_not_extracted` | **0** |

四组（`settings-page-3320f8f55cf7.js` 的 `mi`）：

| 组 | 成员 |
| --- | --- |
| `personal` | `general-settings`、`notifications`、`import`、`profile`、`appearance`、`security`、`account`、`data-controls`、`archived-chats`、`ads-controls`、`parental-controls`、`trusted-contact`、`safety`、`voice`、`storage`、`agent`、`personalization`、`pets`、`keyboard-shortcuts`、`usage`、`billing`、`analytics`、`consumer-view`、`usage-code-review`、`debug`、`agreements` |
| `teams` | `teams`（无组标题） |
| `integrations` | `plugins-settings`、`file-type-handlers`、`rosalind`、`passwords`、`computer-use`、`chronicle`、`appshots`、`codex-micro`、`mcp-settings`、`skills-settings`、`browser-use`、`cloud-computer`、`extension` |
| `coding` | `hooks-settings`、`connections`、`cloud-settings`、`codex-cloud`、`cloud-environments`、`code-review`、`git-settings`、`local-environments`、`environments`、`worktrees` |

与 26.903 的 35 项相比，新增的是账号 / 家庭安全、Teams、导入、Code Review、
Codex Micro、Rosalind、File type handlers、Cloud computer、Passwords 等一整批。
与 26.928 文档记录的 50 项相比，26.1013 多出 **`rosalind`、`teams`** 两项
（C 级，依据是旧文档的 nav 列表与本次 `nav_order` 的差集；26.928 的 50 项已包含
`archived-chats`）。

### 7.1 loader 格式变了（工具必须跟着改）

26.903 的 loader 表是 `billing:b3(...)`；26.1013 变成：

```js
{ rosalind: vQ(async () => { ... import(`./settings-274d95cb16b5.js`) ... }),
  billing: vQ(HDo),
  "general-settings": sIs,
  notifications: vQ(async () => { ... import(`./notifications-settings-59071f7a140d.js`) ... }) }
```

`HDo` / `sIs` 是预先声明的 lazy 变量或 `function`，不在对象字面量里内联
`import()`。旧的 `settings-map.mjs` 只认 `b3(`，在新包上会得到 0 个 loader。
本次已把它改成同时支持 `b3` / `vQ`、别名变量与 `function HDo()`，
并把 `extracted` 判定改为“resolved chunk 或 entry chunk 任一在本地”。

### 7.2 新增 / 变化的设置页

| slug | 实现 chunk（26.1013） | 证据 |
| --- | --- | --- |
| `chronicle` | `chronicle-settings-page-71e1cb42fb82.js` | Computer History |
| `voice` | `voice-settings-70bb1f84fad8.js` | 听写 + 实时语音 |
| `codex-micro` | `codex-micro-settings-e26c9caffecc.js` | Work Louder 硬件 |
| `pets` | `pets-settings-route-76e2572780b5.js` | 宠物 / 角色 |
| `appshots` | `appshots-settings-39e061aa1405.js` | 应用截图 |
| `personalization` | `personalization-settings-f4781a8a1f5b.js` | ChatGPT 个人化 |
| `connections` | `remote-connections-settings-f19178ff0038.js` | 远程连接 |
| `agent` | `configuration-panel-11eaa92300eb.js` | Agent 配置 |
| `file-type-handlers` | `file-type-handlers-44df4f53223f.js` | 文件类型处理 |
| `rosalind` | `settings-274d95cb16b5.js` | 新设置节 |
| `passwords` | `settings-e8442dfdfad6.js` | 密码 |
| `cloud-computer` | `settings-9aafd1906a04.js` | 云浏览器 / 云电脑 |

完整 54 行表见 [settings-pages.md](settings-pages.md) 的新增章节。

## 8. 共享 bundle 的变化

26.1013 的共享层从两个变成三个：

| 文件 | 体积 | 角色 |
| --- | ---: | --- |
| `app-initial-5851df3f6cb1.js` | 13.7 MB | 路由、设置注册表、app-server 协议、全局 store |
| `app-shared-bbfeca5e5737.js` | **5.5 MB（新）** | 被页面大量复用的组件 / hooks / 查询层 |
| `app-primary-fe8a450b3b04.js` | 2.3 MB | 主界面与实时语音等 |

`app-shared` 是本次最容易被漏掉的结构变化：很多设置页 shim 现在直接
`import { ... } from "./app-shared-bbfeca5e5737.js"`，实现不在自己的 chunk 里。
本轮已把它 light-format 到 `.work/big-261013/` 并纳入文案收割。

## 9. 复现

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1013.4894.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
$O = "codex_app_rev\code\app-261013"

node .agents\skills\revert\scripts\inventory.mjs $A codex_app_rev\inventories\inventory-261013.json
node codex_app_rev\code\tools\extract-modules.mjs $A $O `
  --map codex_app_rev\code\tools\module-map-261013.json --jobs 8 --max-beautify-bytes 1200000
node codex_app_rev\code\tools\settings-map.mjs $A $O "$O\settings\_SETTINGS_MAP.json"
```

共享 bundle 的 light-format 与文案收割见 [code/README.md](code/README.md) 与
[evidence.md](evidence.md)。

## 10. 局限

1. 未做运行时插桩。所有“可见 / 不可见”“是否默认开启”的判断都来自静态代码与文案，
   Statsig / 账号态 / 工作区策略会改变结果。
2. `app-shared` 与 `app-initial` 未入库，只保留 light-format 的 `.work/` 副本；
   文档引用这两个 bundle 时给的是可 grep 的 chunk 名与锚点字符串。
3. 26.928 没有完整的设置注册表存档，因此 26.928 → 26.1013 的“新增 slug”只能是
   基于旧文档 nav 列表的差集，标为 C 级。
4. `visualization-*`、语言包、`register-*`、`runtime.worker-*` 未入库；
   它们会污染 family 统计，本文的数字已按 `webview/assets` 全量计算并单独标注。
5. 本文不把“随包插件存在”当成“已启用”。插件的启用面仍由主进程按账号 / 配置改写。
