# 版本差异：26.901.6511.0 → 26.903.9818.0

采集时间 2026-09-11（Asia/Hong_Kong）。上一版基线来自本目录 2026-09-09 的分析记录（`manifest.json` / `evidence.md` 的旧值）。

> **基线的局限**：上次分析只记录了 20 个 chunk 名，没有全量清单。因此下面第 2 节的 chunk 对照是**精确**的（逐个 hash 比对），而第 3 节的“新增能力”只能说明**上次未记录**，不能等同于“本版本新增”。要做严格 diff，需要保留旧版 `app.asar`；MSIX 升级会直接替换 `C:\Program Files\WindowsApps\OpenAI.Codex_<version>_...` 目录，旧包已不可得。

---

## 1. 包与二进制

| 项目                          | 26.901.6511.0                                                                       | 26.903.9818.0                                                                       | 变化                                                      |
| ----------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------- |
| MSIX Package ID               | `OpenAI.Codex_26.901.6511.0_x64__2p2nqsd0c76g0`                                     | `OpenAI.Codex_26.903.9818.0_x64__2p2nqsd0c76g0`                                     | 版本目录更换                                              |
| `package.json` version        | （未记录）                                                                          | `26.903.71938`                                                                      | —                                                         |
| `codexBuildNumber`            | （未记录）                                                                          | `8576`                                                                              | —                                                         |
| `owl-app.ini` AppVersion      | （未记录）                                                                          | `26.903.71938`                                                                      | 与 package.json 一致                                      |
| Electron                      | （未记录）                                                                          | `42.3.0`                                                                            | —                                                         |
| `app\ChatGPT.exe`             | 4,621,104 B<br>`814E9FBD141CFA2AAEFA33220BC3A7170824E18089946BF1947617597353851D`   | 4,620,592 B<br>`49E7E8F5DB0A4C8A12A666B70DAC40E0E88A1873D02E8AAFB82C3E8CABECA49C`   | −512 B，**重新构建**                                      |
| `app\resources\codex.exe`     | 295,408,944 B<br>`E5AA76D19C7C94E2E9EF9B707D590206A73AC0E97C8DDC8382181242494BEF75` | 295,408,944 B<br>`3D6CA7085C932B62EF4EE4877E92F15B050FB94B2EB8E6C10A346A06248C6004` | 字节数完全相同但 hash 不同 → **重新编译**（非仅重签名）   |
| `app\resources\app.asar`      | 299,109,787 B<br>`E75BAE2B8A02F174C7CEEED6D631AAFF355E44F8AF5C798FA3628089F11D659E` | 309,520,237 B<br>`5D9B0399491060B2756FCA70C2E5CCA746FA8EB38372B7AD8F236DC69BDA0BC6` | **+10,410,450 B (+3.48%)**                                |
| `AppxManifest.xml`            | 6,043 B<br>`7F8F16899205235E89A8404595D8578E9EE36522C8BB8D712930F7BD34FE647A`       | 6,043 B<br>`7534220585AD2C0889D98B625EBED79A699BA6ACC34EF65D98475B2F7CEC5AAF`       | 同尺寸、hash 变 → 仅 `Version="26.903.9818.0"` 字符串变化 |
| `app\resources\busy-bar.asar` | （未记录）                                                                          | 1,013,392 B<br>`B7DBED1121ABEC0831A4F84F69554F4573B114C143699039508AEB10839E510C`   | 19 个 Lottie 状态药丸                                     |
| app-server 协议版本           | （未记录）                                                                          | `0.143.0-alpha.32`                                                                  | `app-initial` 内常量                                      |
| 安装目录 mtime                | —                                                                                   | `2026-09-11 10:23`                                                                  | 本次升级为当天上午                                        |

`AppxManifest.xml` 的能力声明**没有变化**：仍是 `codex://` 协议、`.skill` + Office 文件关联、`Directory` 右键 `OpenProjectInCodex`、防火墙端口 1455/1457 与 3128-3159/8081-8112。

## 2. 渲染层 chunk 对照（逐个 hash 比对）

上次记录的 19 个 chunk，本次状态：

| 26.901 记录的 chunk                                            | 状态         | 26.903 对应                                                    |    大小 |
| -------------------------------------------------------------- | ------------ | -------------------------------------------------------------- | ------: |
| `index-8d5aebaddd4a.js`（renderer 入口）                       | 重新哈希     | `index-5232d4cce9a2.js`                                        |  1.9 KB |
| `app-initial-5b0a474bff5e.css`                                 | 重新哈希     | `app-initial-49fc08c26651.css`                                 |  804 KB |
| `app-primary-7fe7c6486695.css`                                 | 重新哈希     | `app-primary-d815831c9bad.css`                                 |  144 KB |
| `local-conversation-page-9e35a185ef27.js`                      | 重新哈希     | `local-conversation-page-3f93e4c62cc7.js`                      | 57.3 KB |
| `local-conversation-thread-df04e2edbb6d.js`                    | 重新哈希     | `local-conversation-thread-a2bcd054c9d2.js`                    |  345 KB |
| `local-conversation-turn-cad50250a35c.js`                      | 重新哈希     | `local-conversation-turn-8acd99401e74.js`                      | 46.3 KB |
| `local-conversation-thread-turn-entries-d1c58843e9e1.js`       | 重新哈希     | `local-conversation-thread-turn-entries-3bc0985c25c6.js`       |  7.1 KB |
| `queued-message-list-6971c0f01904.js`                          | 重新哈希     | `queued-message-list-16b1f97652af.js`                          | 18.3 KB |
| `thread-app-shell-chrome-1fde9accf634.js`                      | 重新哈希     | `thread-app-shell-chrome-a031dfbe4962.js`                      |   81 KB |
| `thread-overflow-menu-d1e3fb111f8c.js`                         | 重新哈希     | `thread-overflow-menu-242a94915c0b.js`                         | 11.4 KB |
| `thread-scroll-layout-99b3ea3429c1.js`                         | 重新哈希     | `thread-scroll-layout-4583603e4217.js`                         |   18 KB |
| `thread-user-message-navigation-rail-app-3b2a67daad6b.js`      | 重新哈希     | `thread-user-message-navigation-rail-app-4703491a5992.js`      |   30 KB |
| **`thread-virtualizer-4f61d89b50be.js`**                       | **完全未变** | `thread-virtualizer-4f61d89b50be.js`                           |  2.0 KB |
| `response-d9fb0f46b851.js`                                     | 重新哈希     | `response-928d7dce6579.js`                                     |  5.9 KB |
| `composer-utility-bar-cddbdfb015e1.js`                         | 重新哈希     | `composer-utility-bar-85736f3cc588.js`                         | 29.3 KB |
| `composer-action-bar-run-location-dropdown-65b2bb888597.js`    | 重新哈希     | `composer-action-bar-run-location-dropdown-493913fdcca2.js`    |  6.1 KB |
| `conversation-markdown-2f9432a70bec.js`                        | 重新哈希     | `conversation-markdown-70a42265cc66.js`                        |   20 KB |
| `use-resume-conversation-if-needed-bd7bf615bc70.js`            | 重新哈希     | `use-resume-conversation-if-needed-88b53f9297c7.js`            |  6.7 KB |
| `local-conversation-stream-role-product-event-95400fc7f2ff.js` | 重新哈希     | `local-conversation-stream-role-product-event-28e61d930003.js` |  1.6 KB |

**唯一逐字节未变的是 `thread-virtualizer`** —— 底部锚定的虚拟化算法在这两个版本间稳定。这与其“纯函数 + 二分查找”的实现风格一致：它不依赖任何业务字段，因此不受周边改动影响。

另外本次发现每个 stem 常同时存在**一个 JS + 一个 CSS**（如 `thread-scroll-layout-4583603e4217.js` / `thread-scroll-layout-26a32b412ec3.css`），以及**一个 0 字节 shim + 一个实体 chunk**（如 `thread-app-shell-chrome-86fff7ba1590.js` 是 0 KB 壳，实体是 `-a031dfbe4962.js`）。旧记录未区分这两类，做名字比对时必须注意。

## 3. 本次新记录的结构（上次未覆盖）

以下是 26.903 中**本次首次系统记录**的部分。除明确标注外，均不能断定为本版本新增。

### 3.1 三向 pane 的 app shell

`thread-app-shell-chrome` 现在明确支持 tab 在 **left / right / bottom** 三个 pane 间移动，以及拆到独立窗口：

```
Move to left pane / Move to right pane / Move to bottom pane
appShell.tabs.detachedDescription / restoreToTab / showDetachedWindow
appShell.tabs.dragOutsideUnsupported.title = "This tab isn't ready to fly yet"
```

### 3.2 设置体系的完整注册表

本次首次还原了 **35 个导航 section + 2 个隐藏 section（`environments`、`teams`）** 的完整注册表、capability 门控（`chatGpt`/`codex`/`codexLocal`/`codexOrWorkLocal`）、逐 slug 的 `visible`/`isLoading` switch，以及 rolldown shim 的解析关系。见 `settings-pages.md` 与 `code/settings/_SETTINGS_MAP.json`。

其中 **10 个 section 在当前 build 里 `visible` 直接 `return !1`**：`notifications`、`security`、`account`、`storage`、`cloud-settings`、`cloud-environments`、`code-review`、`billing`、`skills-settings`、`teams`。代码仍在包里（`security-settings` 84 KB、`cloud-environments-settings-page` 70 KB 等），属于**已实现但未放开**。

### 3.3 Popcorn：浏览器内的 Office 处理栈

```
PopcornElectronWorkbookPanel-*.js       472 KB
PopcornElectronDocumentPanel-*.js       394 KB
PopcornElectronPresentationPanel-*.js   （+ CSS）
DocumentFormat.OpenXml.*.wasm           4.2 MB
dotnet.runtime.x4l8oxbjyh.js            190 KB
```

配合 `artifactTab.xlsxSaveProblem` = “Changes may not be written to the XLSX file. Keep this workbook open…” 与 `artifactTab.docx.showRedlines/hideRedlines`，说明侧面板能**就地编辑** Word/Excel/PPT 并回写文件。

### 3.4 浏览器侧栏的设计编辑器

`browserSidebarDesignEditor.*` 有 **60+ 条**文案，构成一个可视化 CSS 编辑器（flex 方向/对齐/分布、gap、margin/padding、字体、颜色、圆角、边框、锁定比例、`Drag styling controls`），配合 `browserSidebarCommentOverlay.*`（19 条，页面元素批注 + 截图）与 `browserSidebarCommentRuntime.*`。这是 browser-use 深度集成的一部分。

### 3.5 Thread handoff 状态机

`localConversation.threadHandoff.*`（29 条）暴露了本地 ↔ worktree ↔ host worktree 的完整迁移步骤、内联进度、错误恢复，以及**前置校验：队列必须清空**（`Send or remove queued messages before handing off this task`）、运行中会打断当前 turn。

### 3.6 Codex Micro 硬件设置

`codex-micro-settings`（106 KB）+ `settings.codexMicro.*`（216 条）：旋钮（Knob / Knob controls）、模拟摇杆（Analog stick）、按键映射（`Assign agent key {position}`、Edit keycap、`Reset keyboard layout?`）、设备移除（`Remove {deviceName}?`）。可见性条件是 `硬件开关 && 设备已连接 === true`。

### 3.7 Chronicle（计算机历史）

`chronicle-settings-page`（85 KB）+ `settings.chronicle.*`（147 条），核心文案 `Let ChatGPT follow your work`、`You're in control.`、`History`、`Permissions`。可见性条件 `isElectron && !isLoading && available`。

### 3.8 其他新记录项

| 项                           | 证据                                                                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Luna Reserve（高级模型配额） | `sidebarElectron.lunaReserve.*`：`Luna Reserve remaining`、`Advanced models reset {time}`                                |
| 全局听写独立窗口             | `global-dictation-page`、`dictation.composer` / `dictation.global` 两个独立 feature flag、720×84 非聚焦窗口 + prewarm    |
| WebCodecs 远程画中画         | preload 内 `VideoDecoder`，见 `ipc-protocol.md` §1                                                                       |
| 分块 IPC 传输协议            | marker `codex-host-chunked-message-v1` + 增量 JSON 词法 token                                                            |
| Popout Window                | `settings.general.popoutWindow`、`Popout Window hotkey`、`Default to standalone chat`、`/hotkey-window/*` 路由族         |
| 宠物（desktop pet）          | `pets-settings-route`、`settings.mini.*`、`settings.toys.*`、命令 `openPetOverlay`/`tuckAwayPetOverlay`/`wakePetOverlay` |
| Aeon（子代理线程内部代号）   | `isAeonThread`、`thread/startAeon`、`sidebarElectron.aeonThreads.v2` = Agents                                            |
| Auto-review denials 审批     | `/approve` 斜杠命令、`composer.autoReviewDenialsSlashCommand.*`                                                          |
| 企业用量分析双视图           | `analytics` 与 `consumer-view` 复用 `billing-analytics`，靠 `scope` 区分                                                 |

## 4. 对上次结论的复核

| 上次结论                                                               | 本次复核                                                                                                                                                                                                     |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Queue / Steer 两种 follow-up 策略                                      | **仍成立**，且更精确：`turn/steer` 与 `thread/queue/add` 是两个独立 JSON-RPC 方法，默认策略由 `settings.general.followUpQueueMode` 决定                                                                      |
| Steer 的语义是“注入但不打断”                                           | **仍成立**，tooltip 原文 `Submit without interrupting the model` 未变；注意 i18n id 是 `followUpQueueMode.interrupt`（历史命名，易误读）                                                                     |
| 队列项支持拖拽排序 / Retry / Steer / Edit / Delete / Open in side chat | **仍成立**，另补充 `Turn on/off queueing` 总开关与 `pullRequestActions` 类队列项                                                                                                                             |
| 打断后队列暂停并显示 Resume                                            | **仍成立**，且补充了 steer 未被接受时的降级：未确认的 steering 条目会转成 `queuedFollowUps` 并带 `pausedReason`（`Interrupted before the steer was accepted.` / `Run ended before the steer was accepted.`） |
| 语义 surface token、4px 基准、虚拟化滚动                               | **仍成立**，补充虚拟化默认估算行高 280px、贴底阈值 24px、到末尾阈值 64px                                                                                                                                     |
| `clearHistory` 只清浏览器本地历史（仓库侧差异）                        | 该结论针对**本仓库 desktop_app**，与原生 app 无关，本次未复核                                                                                                                                                |
