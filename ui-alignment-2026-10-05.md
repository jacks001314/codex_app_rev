# UI 对齐记录：Codex 26.928 → 本仓库（2026-10-05）

这一轮只做**已批准**的三批改动（P0 / P1 / P2），全部落在渲染层
（`desktop_app/apps/desktop/src/renderer/`），不改协议、不改主进程。

参照资料：`side-panel.md`、`composer.md`、`conversation-area.md`、`left-nav.md`、`ui-style.md`
（Codex 26.928 的样式 token 与组件结构）＋ 真机取样（`ChatGPT.exe` 26.928.4866.0，
Win32 `PrintWindow(PW_RENDERFULLCONTENT)` 1:1 抓图，本机 1920×1032）。

---

## P0 右侧面板：不占轨道，改浮层（已回退）

> **2026-10-05 回退**：按用户要求，本节浮层改动已全部撤销——`.app-shell` 恢复为
> `… 1px var(--inspector-width)` 五轨网格、`.inspector` 恢复为与工作区并列通高的相对定位、
> `.inspector-splitter` 恢复 1px 分隔线，窄窗分支的 `position:fixed` 降级规则与
> `window-menubar.css` 的 `top:36px` 覆盖一并恢复。只保留与浮层无关的
> `.inspector-content[data-page-kind="drawio"]` 登记。下表保留为当时的对齐记录。

| 观测量         | Codex 实测                                    | 改动前（本仓库）                                  | 改动后                                                   |
| -------------- | --------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| 与工作区的关系 | 浮在会话之上，不挤会话列                      | 网格第 5 条轨道（`… 1px var(--inspector-width)`） | `.app-shell` 网格只剩 `侧栏 / 1px / 工作区`              |
| 位置           | top ≈ 64、right ≈ 8、bottom ≈ 8（相对内容区） | 与工作区并列、通高                                | `.inspector` 绝对定位：`top:64px; right:8px; bottom:8px` |
| 圆角 / 阴影    | ≈14px 圆角 + 浮动层 elevation                 | 直角 + 与工作区之间的 1px 描边                    | `border-radius:14px` + `--elevation-prominent`           |
| 拖宽           | —                                             | 1px 分隔线占一条轨道                              | 面板左缘 7px 透明拖拽带（`.inspector-splitter`）         |

会话列中心因此回到「侧栏右侧整宽的中心」（Codex 就是这条算式），而不是被面板挤窄后的中心。
窄窗分支里那条 `position:fixed` 降级规则、以及 `window-menubar.css` 里配套的
`.app-frame[data-chrome="custom"] .inspector { top: 36px }` 覆盖都已删除——浮层在所有宽度下
同一条规则；展开态（`data-inspector-expanded`）本来就把它还原成 `position:relative`，不受影响。

**Rail 不补**（按决定）：Codex 的 rail 与侧栏是两个可折叠层，本仓库侧栏折叠后已有 48px
图标态（`.app-frame:not([data-chrome="mac"]) .app-shell[data-sidebar-collapsed="true"]`），
再造一层只会多一个状态。

## P1 composer / 侧栏 / 会话区

| 项              | Codex                        | 改动前                                                               | 改动后                                                                                                                |
| --------------- | ---------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| composer 灰条   | 没有；输入框上方只有卡片本身 | 常显灰条「● 发送给 X ⌄ · 运行中」（`.composer-conversation-status`） | 灰条下线；「发送给 X」变成卡片内左下角 chip（`.composer-target-chip`），紧跟在 `+` 之后——与 Codex 左下 utility 行同构 |
| composer 卡片   | 单块圆角卡片                 | 非草稿态也带 `border-radius: 0 0 3xl 3xl`                            | 非草稿态整块圆角；草稿态的「项目 / 范围 / 团队」栏仍在时收平上圆角拼成一整块（`:has(> .composer-project-bar > *)`）   |
| composer 宽度   | 与会话列同宽（663px）        | `min(760px, 100%)`（比会话列宽）                                     | `var(--conversation-width)`，10 处一起改                                                                              |
| 发送 / 停止按钮 | 近黑实心圆                   | 品牌蓝（`--action`）                                                 | `background: var(--text)` + `color: var(--surface)`，悬停 88% 混合                                                    |
| 会话区滚动条    | 不显示滚动条，用两端渐隐遮罩 | 原生滚动条 + `scrollbar-gutter: stable both-edges`                   | `scrollbar-width:none` + `mask` 线性渐变，两档由 `scroll() y` 时间轴驱动（`--top-fade/--bottom-fade`）                |
| 侧栏会话标题    | 常规字重（选中靠底色）       | `<strong>` 默认 700                                                  | `.task-copy strong { font-weight: 400 }`                                                                              |
| 栏目标题的操作  | 纯文本 + 悬停才出现的操作    | 常显 `⌄` 与 `+`                                                      | `.section-chevron` / `.section-heading-action` 改 `opacity:0`，`:hover` / `:focus-within`（折叠态箭头常显）才显形     |

阶段文案（运行中 / 已停止 / 失败）不再挂在输入框上：它由工作区头部的会话控制按钮
（启动 / 停止 / 恢复，`.task-control-button[data-action]`）表达，e2e 断言已改到那里。

## P2 宽度与顶部条

| 项                     | Codex                                     | 改动前                                       | 改动后                                                                                                                  |
| ---------------------- | ----------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `--conversation-width` | `--thread-content-max-width` 默认档 42rem | `min(768px, 100%)`                           | `min(42rem, 100%)`（实测 Codex 663px = 42rem − 9px 滚动条 gutter，本仓库 gutter 已为 0）                                |
| 用户气泡内边距         | ≈14px                                     | `--thread-content-margin: 24px`              | `14px`                                                                                                                  |
| 顶部条 `← / →`         | 折叠按钮左侧有返回/前进                   | 只有折叠按钮（菜单首项横向差 64px 就是它们） | `.window-toolbar-navigation` 里补两个按钮，接既有 `session.back` / `session.forward` 命令（可用性、键位、命令面板同源） |

## 验证

- 真机（本机打包 `apps/desktop/out/Syntropy-win32-x64`，`PrintWindow` 截图，P0 回退前）：
  浮层从会话上方盖过、卡片单块、卡片内左下角 `+ 发送给 syntropy ⌄`、侧栏无常显 `⌄/+`、
  顶部条 `← → ▯ 文件 编辑 视图`、会话区无滚动条。
- 产物断言：打包出的 `index-*.css` 里有 `.composer-target-chip{…}` 与
  `.send-button{…background:var(--text)}`，且已无 `composer-conversation-status`。
- 闸门：`tsc -b`、`oxlint --deny-warnings`、`oxfmt --check`、
  `vitest run --dir tests/component`（1133 passed）全绿。
- P0 回退校验（2026-10-05）：`shell.css` 的 `.app-shell` / `.inspector` / `.inspector-splitter`
  三块规则与两个窄窗媒体查询，逐字节比对 `git show HEAD:…/shell.css` 一致；`window-menubar.css`
  已与该文件 HEAD 无差异（`git diff --stat` 不再列出）；`oxfmt --check` 两个文件通过。
  P1 / P2 与 drawio 页签改动未受影响。

## 追加修复：composer 上方的灰条与点击时的蓝色描边（2026-10-05 晚）

用户报两张图：输入框卡片上方一条灰带、点击输入框后卡片出现蓝色 1px 描边。

| 现象                   | 根因                                                                                                                                                                                                                                                                                                                     | 修法                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| 卡片上方常显灰带       | `.composer-project-bar:not(:has(> *)) { display: none }` 写在基础规则 `.composer-project-bar { display: flex }` **之前**。`:not(:has(> *))` 里的 `*` 权重为 0，两条规则特指度相同，靠后的 `display: flex` 盖掉了 `display: none`，非草稿态那条空栏（`--surface-muted`、`min-height: 40px`、上圆角 20px）就一直露在卡片外 | 把整条隐藏规则移到基础规则之后（`shell.css` 里 `.composer-project-bar` 下方） |
| 点击输入框出现蓝色描边 | `.composer:focus-within` 追加了 `0 0 0 1px var(--focus)` 环                                                                                                                                                                                                                                                              | 删掉该规则，卡片聚焦态不再有任何描边（对齐 Codex 的单块 composer）            |

验证（真机 `apps/desktop/out/Syntropy-win32-x64`，19:36 重新打包，CDP 读计算样式）：

- 非草稿会话（`.composer-region.cluster-task`）：`.composer-project-bar` 计算值 `display: none`、
  `childElementCount = 0`，`.composer` `border-radius` 恢复 `20px`（整块圆角卡片），卡片上方无灰带。
- 聚焦 textarea 后 `.composer` 计算 `box-shadow` 只剩 `--elevation-composer` 三项、无蓝色分量；
  卡片与 textarea 的 `outline` 均为 `none`。
- 草稿态（`setup-composer`，栏里有「项目 / 团队」选择器）不受影响：栏仍 `display: flex`，
  与卡片拼成一整块（卡片上圆角收平）。
- 闸门：`vitest run --dir tests/component` 1133 passed，`oxfmt --check` 通过；打包产物
  `index-*.css` 里 `.composer-project-bar{…display:flex}` 之后紧跟
  `.composer-project-bar:not(:has(>*)){display:none}`，且已无 `.composer:focus-within`。
- 证据图：`.work/ui-probe/verify-composer-nobar.png`（非草稿会话抓图）、
  `.work/ui-probe/final-composer.png`（草稿态，栏有内容故仍显示）。

## 追加修复：右侧分隔线松手后仍跟着鼠标（2026-10-05 晚）

复现路径（真机打包产物 + CDP 读计算样式 + 真实鼠标注入，探针脚本在 `.work/ui-probe/`）：

1. 右栏开在「浏览器」这类面板（内容是真正的 `<webview>`，独立渲染进程）；
2. 按住右侧分隔线往右拖到面板最小宽 360px：分隔线停住、光标越过它压在 webview 上；
3. 松手——父进程收不到 `pointerup`（这次鼠标消息被 webview 消化掉了），`window` 上的
   `pointermove` 监听永远摘不掉；
4. 之后左右晃鼠标：光标一回到父进程自己的区域，面板就继续跟着鼠标伸缩
   （实测 workspace 758 → 360 → 560 → 620 反复跳，用户描述的"松手后窗口跟着晃"）。

| 项                                  | 改动前                                                         | 改动后                                                                                                                                                                                      |
| ----------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 拖拽实现（`App.tsx` `startResize`） | `window` 上挂 `pointermove` / `pointerup`，只靠 pointerup 收尾 | `pointerdown` 时对分隔线 `setPointerCapture(pointerId)`（与 Codex 的 `e.currentTarget.setPointerCapture(e.pointerId)` 同构），指针事件始终回到分隔线，压在 webview 上松手也能收到 pointerup |
| 兜底                                | 无                                                             | `pointercancel` / `window.blur` 收尾 + `pointermove.buttons === 0` 立刻收尾 + 收尾时 `releasePointerCapture`                                                                                |

验证（重新打包 `apps/desktop/out/Syntropy-win32-x64`）：

- 三条路径（松手在 webview 上、松手后在 webview 里晃、松手后在左侧对话区晃）：`resizing`
  全部回到 `false`、`pointerup` 均送达、晃动不再改变面板宽度；改动前同一脚本 `resizing`
  卡在 `true` 且鼠标一动宽度就变。
- 常规路径不回归：拖拽中面板/侧栏宽度照常实时跟随（inspector 420 → 360、sidebar 320 → 390），
  松手即停；`tsc -b`、`oxfmt --check`、`vitest run --dir tests/component`（1133 passed）全绿。

## 本轮未做（明确不做）

- Rail 图标栏（见 P0 说明）。
- Codex 的 vendor 化 `--thread-content-max-width` 八档切换：本仓库只保留桌面默认档 42rem。

## 对齐：composer 上方的「消息排队」行（composer-queue）（2026-10-05 深夜）

用户给的截图（画红线那条）里右下角其实是**本仓库合成应用**的 composer（「发送给 syntropy /
deepseek-flash 跟随模型默认」），同一位置真正的 Codex app 显示的是「使用中文 … ↳ 引导 🗑 ⋯」。
所以对齐基准取实机 Codex app（`codex-app2.png`，`PrintWindow` 抓图）+ 逆向代码
（`code/composer/queue/queue.pretty.js`、`app-primary` 里的 Row / Item 原语）。

### Codex 的事实（实机量测 + 逆向）

| 项       | Codex                                                                                                                                                                | 本仓库（改前）                                                                                          | 改后                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tray     | 独立卡片：比 composer 窄（两侧各内收 13~14px），`rounded-t-2xl`（16px），只有左/右/上 1px 边（Item = `border-x border-t`），底边压在 composer 顶边上，底色 `#fdfdfd` | 与 composer 同宽的直条：上下 1px 边、无圆角、无左右边、纯白底、`margin: 0 auto -1px`                    | `width: calc(100% - 28px)`、`border: 1px` + `border-bottom: 0`、`border-radius: var(--radius-2xl) var(--radius-2xl) 0 0`、底 `color-mix(--surface-muted 35%)` = `#fdfdfd` |
| 行高     | 28px（`min-h-token-button-composer` = 7×`--spacing`）                                                                                                                | 38px                                                                                                    | 28px                                                                                                                                                                      |
| 行内距   | `px-2.5 py-0.5`、`gap-2`                                                                                                                                             | `5px 10px 5px 12px`                                                                                     | `0 10px`、`gap: 8px`                                                                                                                                                      |
| 文案     | 13px / 20px（`text-size-chat` + `leading-5`）                                                                                                                        | 12px / 18px                                                                                             | `var(--chat-font-size)` / 20px                                                                                                                                            |
| 行首     | 常显队列图元 `icon-2xs text-text-tertiary/70`（≈30% 前景色）；拖拽手柄 `opacity-0 group-hover:opacity-100`，绝对定位在行左侧内边距里，显形不挤文案                   | 常显 ⋮⋮ `GripVertical`                                                                                  | 常显 `ListTree` 14px（30% 前景色）+ 手柄默认透明，行 hover / focus-within / 拖拽时显形                                                                                    |
| 动作区   | 右侧 `gap-1`：`↳ 引导`（Steer）→ 垃圾桶 → ⋯，图标 14px、按钮小方块、悬停才有底色，颜色 ≈ `rgb(140,141,142)`                                                          | 重试 / 「调整方向」（`CornerDownLeft`）/ 关闭排队 / 更多，28px 按钮、gap 8px、11px 字号、`--text-muted` | 动作包一层 `.composer-queue-actions`（gap 2px）、按钮 24px / 12px 字号 / `--text-faint`；文案与图标改成 Codex 中文的「引导」+ `CornerDownRight`                           |
| 行间     | `gap-px`，没有分隔线                                                                                                                                                 | 每行 `border-top: 1px`                                                                                  | 去掉分隔线                                                                                                                                                                |
| 位置文案 | 没有「下一条 / 排队中」                                                                                                                                              | 有                                                                                                      | 隐藏「下一条 / 排队中」（顺序即位置），保留瞬时状态：重试中 / 取消中 / 发送失败 / 已暂停 / 处理中 / 调整中                                                                |

### 验证（真机打包产物 + CDP）

`Emulation.setDeviceMetricsOverride(1936×1048)` 对齐 Codex 抓图宽度后注入同样的行结构量测：

- tray 宽 `644 = 672 - 28`（composer 672），相对 composer 左右各内收 14px；行高 28px；
  tray 底色 `253/253/253`（= Codex 量到的 `#fdfdfd`）；圆角 16px；文案 13px / 20px；
  动作按钮 24px / 12px 字号；`CSS.forcePseudoState(hover)` 时手柄 `opacity: 0 → 1` 且文案不位移。
- 相对 tray 左边缘逐段比对（本仓库 vs Codex）：文案起 33 vs 29、↳ 533 vs 531、引导 551 vs 547、
  垃圾桶 589 vs 587、⋯ 615 vs 613、右留白 18 vs 17 —— 差 2~4px，来源是行首图元本身
  （`ListTree` 比 Codex 的 queue 图元宽 2px）。
- 证据图：`.work/ui-probe/cmp-queue-1row.png`（上 Codex / 下本仓库）、`ours-queue-rest-zoom.png`、
  `ours-queue-hover-zoom.png`。

顺带修掉一个既有 bug：`.composer-queue-text` 用 `flex: 1 1 auto` 时，长排队消息会触发整行
`flex-wrap` 把动作挤到第二行（mock 里「帮我把这份 26.903 的逆向笔记按模块整理成周报」复现）；
改 `flex: 1 1 0` 后长文案按 ellipsis 截断，动作始终在第一行右侧。

闸门：`tsc -b`、`oxfmt --check`（App.tsx / shell.css / task-hero.css）、
`vitest run --dir tests/component`（120 files / 1133 passed）。

### 本轮未对齐（保留本仓库形态，供用户决定）

- 失败/暂停项：Codex 用「重试」**替代** Steer（`O = c ? retryQueuedMessage : sendQueuedMessageNow`），
  本仓库是额外加一个「重试」按钮并把 Steer 禁用。
- 行首图元：Codex 是自有 queue glyph，本仓库用 lucide `ListTree` 近似（形状不同、宽度差 2px）。
- 更多菜单项：Codex 有 `Open in side chat` / `Turn on|off queueing`，本仓库是「编辑消息 / 关闭排队」。

### 追加：卡住的队列项「重试替代引导」（2026-10-05 深夜）

Codex 的主动作按钮只有**一个**：`O = isPaused ? retryQueuedMessage : sendQueuedMessageNow`，
文案 / aria / 行为一起切换，图标不变（两种状态共用同一个 ↳ 图元 `Se`）。
本仓库改前是「额外一个重试按钮 + 把 Steer 禁用」，两个按钮并排。

改法（`App.tsx` 动作区）：`item.retryable`（= `failed || paused`，与 Codex 的 `isPaused` 同义）
时同一个按钮变成引号里的「重试」：

| 项                  | 改前                                             | 改后                                                                                                                |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| 按钮数              | 2（重试 + 引导，引导禁用）                       | 1                                                                                                                   |
| 文案 / aria / title | 「重试」+「引导」                                | `item.retryable ? "重试" : "引导"`（aria 带消息文本）                                                               |
| 图标                | 重试用 `RotateCw`，引导用 `CornerDownRight`      | 两种状态都用 `CornerDownRight`（对齐 Codex 共用 ↳）                                                                 |
| disabled            | 重试看 `retrying`；引导额外看 `failed/paused` 等 | retryable 分支只看 `item.retrying`；引导分支看 `!composerTurnID / retrying / canceling / processing / steerPending` |
| 行为                | 两个 onClick                                     | retryable 走 `retryComposerQueueItem`，否则 `steerComposerQueueItem`                                                |

验证：CDP 注入两行（正常项 + 卡住项）真机渲染，动作区各只有一个按钮，文案分别
「引导」/「重试」，卡住行保持红色队列图元 + 「发送失败」+ 帮助行；证据图
`.work/ui-probe/ours-queue-retry.png`、`ours-queue-retry-zoom.png`。
闸门：`oxfmt --check`、`tsc -b`、`vitest run --dir tests/component`（1133 passed）。

未对齐（保留）：Codex 卡住行在文案前额外插一个 warning 图标 + tooltip 说明，
本仓库是把行首队列图元染成红色（`.composer-queue-failed .composer-queue-marker`）+ 帮助行。

### 追加：卡住队列项的 warning 图标 + 行色对齐（2026-10-05 深夜 2）

上一节末尾记的「未对齐（保留）」这次做掉了。依据 `codex_app_rev/code/composer/queue/queue.pretty.js`：

| 位置     | Codex 逆向证据                                                                                                                 | 本仓库改前                                                                                                    | 改后                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 行首图元 | 恒为 `icon-2xs text-text-tertiary/70`（L362 / L365，与状态无关）                                                               | 卡住行被 `.composer-queue-failed .composer-queue-marker` / `.composer-queue-paused ...` 染成 danger / warning | 删掉这两条覆盖，恒为 30% 前景色                                             |
| 行文案   | `leading-5 text-secondary`（L433）                                                                                             | `--text`（正文色）                                                                                            | `--text-muted`（= token 注释里记的 Codex `--color-text-secondary`，fg 65%） |
| 卡住标记 | `icon-2xs text-warning` 的圆形感叹号，外套 tooltip（L377-405）：主文案 `pausedTooltip` + `opacity-65` 的 `pausedTooltipRemedy` | 无                                                                                                            | 文案前插 `CircleAlert` 14px（`--warning` #e25507），`title` 承载同样两行    |

Codex 的 warning 图元是自有 `Gdo`（viewBox 0 0 20 20，两段实心路径的圆形感叹号），本仓库用
lucide `CircleAlert` 近似。位置：行首图元之后、正文之前，动作区之前。

验证（重新打包后 CDP 真机渲染，注入两行 = 正常项 + 卡住项）：
`markerColor` 两行都是 `color(srgb 0.102 0.110 0.122 / 0.3)`；`textColor` 两行都是 65%；
warning = `rgb(226, 85, 7)`、14px、`title` 为两行。证据图 `.work/ui-probe/ours-queue-warn-zoom3.png`。
闸门：`oxfmt --check`、`tsc -b`、`vitest run --dir tests/component`（120 files / 1133 passed）。
产物：`desktop_app/apps/desktop/out/Syntropy-win32-x64/Syntropy.exe`。

仍未对齐（留给你决定）：

- 卡住行右侧的「发送失败」位置文案：Codex 行内没有这个标签（状态只在 tooltip 里）。
- 卡住行第二行的「可重试、编辑或删除该消息以继续队列」帮助文案：Codex 也只在 tooltip 里，
  所以 Codex 的卡住行仍是单行 28px，本仓库是 3 行 83px。
- 更多菜单项：Codex 是 `Open in side chat` / `Turn on|off queueing`，本仓库是「编辑消息 / 关闭排队」。

### 追加：移除 composer 的「工作范围」选择器（issue #95）

issue #95：[opti]「工作范围」可以移除。草稿态 composer 上方那条栏里，Codex 只有项目与团队，
本仓库多一个「工作范围：按需 · 项目根」chip，直接移除。

| 项              | 改前                                                                                                                                                                   | 改后                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| composer 草稿栏 | 项目 / 工作范围 / 团队                                                                                                                                                 | 项目 / 团队                                                                                  |
| 会话工作范围    | 界面可选 `mirror / full / stream`、paths/globs、字节上限，随 `createTask` 下发 `projectScope`                                                                          | 界面不再提供入口；`createTask` 不再携带 `projectScope`，Master 按默认（mirror + 项目根）处理 |
| 代码            | `renderer/TaskScopePicker.tsx`（草稿 ↔ 请求体翻译 + 编辑器 + 触发器）、`shell.css` 的 `.composer-scope-*` 规则、`tests/component/task-scope-picker.component.test.tsx` | 全部删除；`splitScopePatterns` 挪到 `renderer/scope-patterns.ts` 供「访问与范围」面板复用    |

保留（本次不动的协议面）：`desktop-bridge` 的 `ProjectScopeInputSchema`、主进程
`project-scope-payload.ts`、Master 的 `normalizeProjectScope` 与 `ProjectScope` proto——
范围仍可由编排 / 委派在协议层下发，只是桌面不再有设置入口。

闸门：`oxfmt --check`（`App.tsx` / `shell.css` / `scope-patterns.ts`）、`tsc -b`、
`vitest run --dir tests/component`（119 files / 1125 passed）、`vitest run --dir tests/contract`
（463 passed；1 例既有 Windows 路径大小写用例失败，与本改动无关）。
`ProjectAccessPanel.tsx` 的格式问题在 HEAD 就存在，本改动只动了它的一行 import。

真机：`package:e2e` 后跑 `task-lifecycle.spec.ts -g "controls a Task through start, stop, and resume"`，
草稿 composer 的几何断言（`.composer-project-bar` 宽度 ≤ 672、落在拓扑区内）通过 —— 说明少了
「工作范围」以后草稿栏仍然成立；该用例随后在 L472 的滚动条断言上失败，那是上一轮 hide-scrollbar
改动留下的过期断言（`scrollbar-width: none` 已是新形态），与本次移除无关。打包产物里
`工作范围` / `composer-scope-picker` 已无残留（只在 `.vite` 渲染包里有 `composer-project-bar`）。

### 追加：草稿栏「项目在左、团队在右」（2026-10-05 深夜 3）

用户反馈（截图）：少了「工作范围」以后，项目与团队两个选择器挤在一起了，要一左一右。

改法：`.composer-project-bar` 加一行 `justify-content: space-between`——项目选择器贴左内边距
（14px），团队选择器贴右内边距，中间留空；栏宽仍是 `var(--conversation-width)`，与下方输入框同宽。

真机证据（重新 `package:e2e` 后同一用例，草稿态截图 `artifacts/task-lifecycle/task-setup-aligned.png`）：
`Secondary project` 在左、`default（默认）` 在右，两端与输入框左右边缘对齐。

## 对齐：团队目标摘要条（team-goal-strip）（2026-10-08）

用户给的截图（画红圈那条）里是我们自己的「设置目标」摘要条（胶囊状态「进行中」+ 三个
文字按钮），同时给了 Codex app 同位置的真机截图：「◎ Pursuing goal 帮我分析一下 • 8s」

- 右侧三个图标动作。对齐基准取逆向代码（26.903 `app-primary`，`threadGoal` 家族）
- i18n 官方 zh-CN 译文。

### Codex 的事实（逆向 + i18n）

摘要行就是 composer 上方那条 tray 里的一个 `Row`（与队列行共用同一套原语），结构是
`icon + title + actions`：

| 部件     | Codex 证据                                                                                                  | 说明                                                                                                                                                                    |
| -------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 行首图元 | `jsx(K8, { className: 'icon-2xs text-text-tertiary/70' })`                                                  | 目标图元（开口圆环 + 铅笔），14px、30% 前景色                                                                                                                           |
| 状态词   | `composer.threadGoal.summary.*`，`<span className="shrink-0 text-default">`                                 | 正文色；`active→Pursuing goal`、`paused→Paused goal`、`blocked→Goal stalled`、`budgetLimited→Goal limited`、`usageLimited→Goal usage limited`、`complete→Goal achieved` |
| 目标正文 | `<span className="ms-1 truncate-text text-codex-description">{objective}<span aria-hidden> •</span></span>` | 次要色、单行截断；`•` 归在目标 span 里（`uHr = " •"`）                                                                                                                  |
| 数字     | `<span className="ms-1.5 shrink-0 whitespace-nowrap text-codex-description tabular-nums">`                  | **只有一个**：`(active 或 budgetLimited) && 有 token 上限 ? "{used} / {budget}" : 活跃时长`（`Xze` 紧凑时长，如 `8s`）                                                  |
| 动作     | `IconAction` × 3，顺序 `清除 / 暂停·恢复 / 编辑`                                                            | 图标 14px、按钮 24px 方块、`--text-faint`，悬停才有底色；tooltip 分别是 `清除目标 / 暂停目标·恢复目标 / 编辑目标`                                                       |
| 行交互   | `Row onClick` 打开目标编辑器                                                                                | 点行 = 编辑；暂停与恢复是同一个按钮，按 `die(status)` 算出「下一步状态」后换图标与文案                                                                                  |
| 行底色   | 不按状态换色                                                                                                | 状态只由文字表达（`text-default` vs `text-codex-description`），没有胶囊、没有状态底色                                                                                  |

zh-CN 官方译文（`composer.threadGoal.summary.*`）：`进行中的目标 / 已暂停的目标 /
目标已停滞 / 目标受限 / 目标使用受限 / 已达成目标`；动作文案 `清除目标 / 暂停目标 /
恢复目标 / 编辑目标`。

### 改动（本仓库）

| 项   | 改前                                                     | 改后                                                                                                                                                         |
| ---- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 状态 | 胶囊徽标「进行中 / 已暂停 / 已完成 / 已阻塞 / 预算用尽」 | 纯文本状态词，取 Codex 译文「进行中的目标 / 已暂停的目标 / 已达成目标 / 目标已停滞 / 目标受限」                                                              |
| 行首 | 无                                                       | `Target` 14px、30% 前景色（对齐 `icon-2xs text-text-tertiary/70`）                                                                                           |
| 数字 | 三项「1.2k/30.0m token · 3/20 轮 · 2m 3s/30m」           | 一个数（`goalSummaryMetric`）：在跑或预算用尽且有 token 上限 → `已用 / 上限`，否则活跃时长                                                                   |
| 明细 | 「你暂停了目标」等第二行常显                             | 收进 `title`（`goalSummaryTooltip` = 完整目标 + 原因 + 全部窗口用量）                                                                                        |
| 动作 | 文字按钮「编辑 / 停止 / 恢复 / 清除」                    | 三个图标动作 `清除(Trash2) / 暂停(CirclePause)·恢复(CirclePlay) / 编辑(Pencil)`，24px 方块、悬停才有底色                                                     |
| 点行 | 无                                                       | 摘要本体是可点按钮，打开目标编辑器（对齐 `Row onClick`）                                                                                                     |
| 卡片 | 与 composer 同宽、上下描边、按状态换底色、常显阴影       | 与队列 tray 同一种卡片：`width: calc(var(--conversation-width) - 28px)`、上圆角 16px、`border-bottom: 0` + `margin-bottom: -1px`、底色 `#fdfdfd`、无状态底色 |
| 行距 | `padding 7px 12px`、按状态变色                           | 行高恒 28px（`min-height: 28px`）；图元→状态 8px、状态→目标 4px、目标→数字 6px（Codex `gap-2` / `ms-1` / `ms-1.5`）                                          |

### 验证

- 独立 HTML 探针（`.work/ui-probe-goal/index.html`，加载真实的 `tokens.css` + `shell.css`，
  Playwright + msedge 截图 `.work/ui-probe-goal/light.png`）实测：tray 宽 `644 = 672 − 28`
  （左右各内收 14px）、行高 28px、上圆角 16px、底色 `253/253/253`（= 实测的 `#fdfdfd`）、
  `border-bottom: 0` + `margin-bottom: -1px`；状态词 `rgb(26,28,31)`（正文色）、目标与数字
  65% 次要色、字号 13px/20px（Codex `text-size-chat` + `leading-5`）、动作按钮 24×24、
  图元 14px/30%。空余宽度落在「数字 → 动作」之间，与 Codex 截图同构。
- 叠加态（目标 tray 压在队列 tray 上、两条 tray 再压在 composer 顶边上）单独渲染一屏，
  两条 tray 的圆角与合并边不打架。
- 产物断言：`vite build --config vite.renderer.config.ts` 后的 `index-*.css` 里有
  `.team-goal-strip{…width:calc(var(--conversation-width) - 28px)…}`、`.team-goal-summary{`、
  `.team-goal-icon-action{`、`.team-goal-metric{`，且旧规则 `.team-goal-action{` /
  `.team-goal-strip-main` 已消失；`index-*.js` 里有「进行中的目标」「已暂停的目标」
  「目标已停滞」「清除目标」「编辑目标」。
- 闸门：`oxfmt --check`（4 个文件）、`tsc -b`、`oxlint --deny-warnings`、
  `vitest run --dir tests/component`（127 files / 1199 passed）全绿。

### 有意不做 / 保留

- **不想丢的语义改走 tooltip**：暂停原因、阻塞分类、复核结论、三个窗口的完整用量仍在
  `title` 里（Codex 同样把 `pausedTooltipRemedy` 之类塞进 tooltip）。
- **例外：完成声明被独立复核驳回**（2026-10-08 补）。这条语义在状态词里完全看不出来
  （目标仍在 active），只放 tooltip 用户就只会看到「说完成了，状态还是进行中」。所以
  数字后面补了一个 14px `CircleAlert`（`--warning`，与队列行的卡住标记同一个语言），
  原因仍在 `title`。详见 `docs/team-goal-rollout.md` §10.7。
- **没有做实时秒表**：Codex 在 `active` 时按 1s 重算 `timeUsedSeconds + (now − updatedAt)`；
  本仓库直接用 Master 的 `activeSecondsUsed`，要等下一次目标更新才跳秒。改成实时需要一个
  `now` ticker，会把整棵 composer 树带上每秒渲染，留待需要时再做。
- **未对齐的两处相邻面**：会话区里用户消息下的 `Sent as goal`（`codex.userMessage.goal`
  →「设为目标」）与完成时 assistant 行的 `Goal achieved in {totalTime}`（→「已在
  {totalTime} 内达成目标」），属于消息条目而不是摘要条，这次没动。

### 追加：队列行的 ⋯ 菜单挂到 body 上（issue #122）

issue #122 的现象：点开队列行的 ⋯ 之后，菜单里的「编辑消息 / 关闭排队」只露半截，
**要把 tray 的滚动条拉到底才看得全**；而菜单里那条「关闭排队」跟行内垃圾桶本来就是同一件事。

根因在容器上：`.composer-queue` 是 `overflow-y: auto` + `max-height: 30dvh` 的滚动容器，
原来的 `.composer-queue-menu`（`position: absolute; top: calc(100% + 5px)`）是它的后代，
于是被它的裁剪吃掉——绝对定位的菜单放在滚动容器里，既出不去也稳不住位置。

Codex 侧证据（用户给的 Codex app 截图 + 逆向 `code/composer/queue/queue.pretty.js`）：

| 项       | Codex                                                                                                                | 本仓库                                                               |
| -------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 行内动作 | `↳ Steer` · 垃圾桶（`z.IconAction`，aria `Delete queued message`）· ⋯（`IconAction`，aria `Queued message actions`） | 同样三件：`引导/重试` · 关闭排队 · 更多操作                          |
| ⋯ 菜单   | `DropdownMenu`（`align: end`，触发按钮就是那个 ⋯）：**挂在 body 上**、浮在 composer 上方，不被 tray 裁剪             | 改前是行内 `absolute`（被裁）；改后 `createPortal` 到 body + `fixed` |
| 菜单项   | `Edit message` / `Open in side chat` / `Turn off queueing`——**没有删除项**                                           | `编辑消息` / `在侧聊中打开`（删除留在行内垃圾桶，不再重复）          |

改动：

| 项       | 改前                                                          | 改后                                                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 菜单落点 | 行内 `position: absolute`，被 tray 的 `overflow` 裁掉         | portal 到 body + `fixed`；落点用 `sessionMenuPlacement`（与会话行 / 项目行菜单同一套：右对齐 ⋯、下方放不下翻到上方、夹进视口，滚动 / 改尺寸重算）                                                                                                 |
| 组件     | 队列行里内联的那段 JSX + `composerQueueMenuID` 全局状态       | 新组件 `renderer/ComposerQueueMenu.tsx`：触发按钮 + portal 菜单，自己持开关与落点                                                                                                                                                                 |
| 菜单项   | 编辑消息 / 关闭排队 / 在侧聊中打开                            | 编辑消息 / 在侧聊中打开（顺序对齐 Codex 截图）                                                                                                                                                                                                    |
| 置灰     | 菜单项各自 disable                                            | 沿用原判定：编辑看 `!editable \|\| canceling \|\| steerPending \|\| retrying`，侧聊看 `canceling \|\| steerPending \|\| retrying`                                                                                                                 |
| CSS      | `.composer-queue-menu` 绝对定位 + `.composer-queue-menu-root` | 删掉这套自定义卡片，直接用共享的 `.task-menu`（`position: fixed`）；`.composer-queue-menu` 只收窄到 190px、层级提到 composer 区浮层那一档（60，同 `.composer-add-menu` / `.composer-mention-menu`）；⋯ 按钮的 `[aria-expanded="true"]` 悬停态恢复 |
| 收起方式 | 再点一次 ⋯                                                    | 再点一次 ⋯、Esc、点菜单外；菜单项执行前先收起（与会话行菜单一致）                                                                                                                                                                                 |

改动面：新增 `apps/desktop/src/renderer/ComposerQueueMenu.tsx`；
`apps/desktop/src/renderer/App.tsx`（队列行动作区换成组件）、`styles/shell.css`、
`tests/e2e/task-lifecycle.spec.ts`（队列编辑用例改成「开 ⋯ → 点菜单项」，并断言菜单不是 tray
的子树、整块落在视口里、菜单里没有重复的「关闭排队」）。

验证（真机打包 + 真窗口 e2e）：

- `tsc -b`；`vitest run --dir tests/component`（158 files / 1462 passed）。
- `SYNTROPY_E2E_BUILD=1 electron-forge package` 后跑
  `edits a queued message without dropping its attachments`：点 ⋯ → 菜单整块可见 → 点
  「编辑消息」→ 取消投递 → 正文与附件都回到输入框。证据截图
  `.work/ui-probe/issue122-queue-menu.png`（菜单浮在 composer 上方，与 Codex 截图同构）。
  这条用例在本机会间歇性卡在启动遮罩（超过配置里 5s 的 expect 超时），与本改动无关——
  `session-search` 等无关用例同样会这样。

未对齐（有意）：Codex 菜单第三条 `Turn off queueing` 是「默认排队 / 立即引导」的开关，本仓库
还没有这个开关，所以菜单只有两条；等开关落地时补进同一张清单。
另一处同款（`AgentConversationPanel` 的队列行仍是自绘的 ⋯ 下拉，菜单里同样重复一个「关闭排队」）
本次没动。
