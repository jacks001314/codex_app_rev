# 窗口菜单栏对齐：文件 / 编辑 / 视图 / 帮助

本文记录「把 Syntropy 桌面端窗口菜单栏对齐 Codex 桌面应用」的参照值、实测取样、落地改动与验证结果。
参照物是 `codex_app_rev/` 里的 Codex 26.903 逆向产物；实测取样对象是本机安装的 Codex 桌面应用。

- 目标：Windows/Linux 自绘标题栏里的 **文件 / 编辑 / 视图 / 帮助** 菜单栏，在**条目清单、顺序**、
  盒子尺寸、间距、字号、圆角、颜色与所在顶部条高度上与 Codex 一致，并且**每一项点下去都真的做事**。
- 非目标：菜单**弹层内部**（每项高度/内边距/分隔线高度）的像素级档位、顶层菜单之外的窗口导航按钮
  （Codex 顶部条里侧栏折叠按钮左侧的 ← / →）、macOS 分支（Codex 在 macOS 用原生菜单栏，
  本仓库用 `data-chrome="mac"` 分支）。其中 ←/→ 已于 2026-10-05 补上（§9.3），
  macOS 那条工具栏已于 2026-10-15 补上、但窗口内仍不画四个菜单（§12）。

---

## 1. 参照值（Codex 26.903 逆向资料）

| 项             | Codex 取值                                                                                                                                                                                       | 出处                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| 顶层四项       | 文件 / 编辑 / 视图 / 帮助（Windows 无「窗口」；窗口菜单只在 macOS）                                                                                                                              | `code/main-process/native-menu-locales/zh-CN.json` 的 `windowsMenuBar.file                    | edit                                                     | view | help`；`main-CMBCj4XL.js`的`Vt=[...i?[jt,At]:[At],zt,Mt,...i?[Bt]:[],{help}]` |
| 菜单栏 aria    | `windowsMenuBar.applicationMenu` = 「应用菜单」                                                                                                                                                  | 同上 locale + 渲染层 `FQa`                                                                    |
| 顶部条         | `._ApplicationMenuTopBar_`：`height: var(--height-toolbar-sm)`，`align-items:center`，`padding-inline: --spacing-token-safe-header-left                                                          | right`，`-webkit-app-region: drag`                                                            | `app-initial-*.css`（`._ApplicationMenuTopBar_ihb90_2`） |
| 高度令牌       | `--height-toolbar:46px`、`--height-toolbar-sm:36px`、`--height-toolbar-pane:40px`                                                                                                                | 同上 token 块                                                                                 |
| 菜单容器       | `flex items-center gap-0.5 ps-1 pe-2` → gap 2px、左 4px、右 8px                                                                                                                                  | 渲染层 `FQa`：`className:'flex items-center gap-0.5 ps-1 pe-2'`                               |
| 菜单项         | `px-2.5 py-1 text-base font-normal leading-none rounded-md border border-transparent` → 左右 10px、上下 4px、1px 透明描边、`rounded-md`、行高 1                                                  | 渲染层 `FQa` 的 `MenubarTrigger` className                                                    |
| 菜单项盒子     | 4 + 13 + 4 + 1 + 1 = **23px** 高；2 字 CJK = 48px 宽                                                                                                                                             | 由上行算式推导（字号见下）                                                                    |
| 字号           | `text-base`；electron 窗口档位 `--text-sm:13px`（`[data-codex-window-type=electron]{--text-sm:13px;--text-xs:12px}`）                                                                            | `app-initial-*.css`                                                                           |
| 圆角           | 菜单项 `--radius-md`（base 8px）；工具栏按钮 `rounded-button-toolbar` = `--radius-lg`（base 10px）                                                                                               | `app-initial-*.css` 的 `--radius-*-base`                                                      |
| 工具栏按钮     | `button-toolbar{height:var(--spacing-token-button-composer);padding-inline:var(--spacing-button-toolbar-inline)}`，`--spacing-token-button-composer = --spacing*7 = 28px`，图标 `icon-xs` = 16px | `app-initial-*.css` + 渲染层按钮尺寸表 `toolbar:'button-toolbar py-0 text-sm leading-[18px]'` |
| 色板           | 空闲 `text-tertiary`；hover `bg-text/5`；展开 `bg-[--color-codex-application-menu-selection]`（= `--vscode-menubar-selectionBackground`）                                                        | 渲染层 `FQa` className + `app-initial-*.css`                                                  |
| 侧栏折叠按钮组 | `flex items-center gap-1`，每个按钮 28px（`uniform`），图标 `icon-xs` = 16px                                                                                                                     | 渲染层 `D$a` / `A$a`                                                                          |
| 菜单 id / 锚点 | `application-menu-trigger-<id>`、`application-menu-content`、`application-menu-content-anchor`                                                                                                   | 渲染层 `LQa()` / `HQa` / `UQa`                                                                |
| 菜单模板       | 主进程 `Menu.buildFromTemplate(template)`，每一项 `{ label, accelerator, click }`；渲染层只画不决策                                                                                              | `main-CMBCj4XL.js` 的 `eIe` / `ZFe`                                                           |

本仓库 `styles/tokens.css` 的圆角 base 值本来就按这份 Codex CSS 抄（`--radius-md-base:8px`、
`--radius-lg-base:10px`），所以直接复用 `var(--radius-md)` / `var(--radius-lg)` 即可，不需要新令牌。

---

## 2. 实测取样（运行中的 Codex 桌面应用）

### 2.1 尺寸取样

方法：`PrintWindow(hwnd, hdc, 2)`（`PW_RENDERFULLCONTENT`）在 DPI 96 / 缩放 100% 下 1:1 抓取窗口，
再对像素做「列墨迹带 / 行剖面」分析，得到字形墨迹的精确包围盒。窗口被遮挡也不影响 PrintWindow，
所以取样时不需要把 Codex 窗口调到前台。

取样对象：`ChatGPT.exe`（WindowsApps `OpenAI.Codex_26.928.3736.0_x64`），窗口 1280×820。

| 观测量                      | 实测值                                                            |
| --------------------------- | ----------------------------------------------------------------- |
| 戻退 / 前进 / 折叠 图标墨迹 | 13..23、43..52、73..84（中心 18 / 47.5 / 78.5 → 按钮 pitch ≈ 30） |
| 菜单项字形墨迹起点          | 111 / 158 / 205 / 252 → **pitch 47.0px**                          |
| 菜单项字形墨迹尺寸          | 25 × 12px（阈值 232）                                             |
| 菜单墨迹所在行              | 10..21（中心 15.5）                                               |
| 顶部条底色区                | 0..38，第 39 行为内容面顶边的分隔线，40 起为内容                  |

同一套方法测本仓库当前实现（安装版 `Syntropy.exe`，1936×1048，与用户提供的附件图逐像素一致）：

| 观测量             | 实测值                                  |
| ------------------ | --------------------------------------- |
| 折叠图标墨迹       | 22..36（中心 29）                       |
| 菜单项字形墨迹起点 | 66 / 118 / 170 / 222 → **pitch 52.0px** |
| 菜单项字形墨迹尺寸 | 26 × 12px                               |
| 菜单墨迹所在行     | 18..29（顶部条 48px，居中）             |

### 2.2 条目清单取样（逐项点开）

用鼠标探针（`SetCursorPos` + `mouse_event` 左键、`SetForegroundWindow`、必要时 `ShowWindow(SW_RESTORE)`）
把四个菜单逐个点开，每个状态各抓一张 `PrintWindow` 全窗图：

| 截图                   | 状态                      |
| ---------------------- | ------------------------- |
| `c0-base.png`          | 菜单全部收起              |
| `c1-file.png`          | 文件                      |
| `c2-edit.png`          | 编辑                      |
| `c3-view.png`          | 视图                      |
| `c3b-view-browser.png` | 视图 ▸ 浏览器（二级菜单） |
| `c4-help.png`          | 帮助                      |

菜单标签的字形墨迹起点仍是 123 / 170 / 217 / 264（pitch 47），点开位置即由它推导。
逐项读数见 §7。

> 取样脚本（本机复现用）：`.work/menu-align/` 下的 `print-window.ps1`、`probe.ps1`、
> `probe-rows.ps1`、`analyze-bands.ps1`、`row-profile.ps1`、`render-preview.mjs`、`harness.mjs`
> 与 `c*.png` / `shots/`（临时产物，不进版本库）。

---

## 3. 落地改动

### 3.1 新增 `desktop_app/apps/desktop/src/renderer/styles/window-menubar.css`

按上表把 `shell.css` 里的旧档位覆盖成 Codex 档位：

| 选择器                                            | 旧值（shell.css）                                            | 新值（对齐 Codex）                                                                                                           |
| ------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `.app-frame[data-chrome="custom"]`                | `grid-template-rows: 48px 1fr`                               | `36px 1fr`（`--height-toolbar-sm`）                                                                                          |
| `.window-toolbar`                                 | `height:48px; gap:8px; padding:0 144px 0 12px`               | `height:36px; gap:0; padding:0 138px 0 0`（右 138 = 3×46 自绘窗口按钮）                                                      |
| `.window-toolbar-navigation`                      | `gap:4px`                                                    | `gap:2px; padding-inline-start:4px`（`gap-0.5` + 左内缩）                                                                    |
| `.window-toolbar-icon`                            | `34×34`                                                      | `28×28`（`button-toolbar`）+ `border-radius: var(--radius-lg)`；`svg` 固定 16px（`icon-xs`）                                 |
| `.window-menus`                                   | `gap:2px`                                                    | `gap:2px; padding-inline:4px 8px`（`ps-1 pe-2`）                                                                             |
| `.window-menus > .window-menu-anchor > button`    | `height:34px; padding:0 12px; border-radius:var(--radius-2)` | `padding:4px 10px; border:1px solid transparent; border-radius:var(--radius-md); font-size:13px; line-height:1`（盒高 23px） |
| `.window-menu-popover`                            | `top:39px`                                                   | `top:30px`（顶部条变矮后弹层仍紧贴条外沿）                                                                                   |
| `.notification-panel`                             | `top:40px`                                                   | `top:32px`（锚点按钮由 34px 变 28px）                                                                                        |
| `.window-controls`                                | `48px` / 三列 48px                                           | `36px` / 三列 46px（Windows 标题栏按钮宽度约定）                                                                             |
| ~~`.app-frame[data-chrome="custom"] .inspector`~~ | `top:48px`                                                   | 已删除：右侧面板改成浮层后不再需要让开顶部条，见 `ui-alignment-2026-10-05.md`                                                |

菜单项档位限定在 `.window-menus > .window-menu-anchor > button`（顶层四项），弹层里的项另给档位，
二者盒子不同，选择器不能混用；子菜单的父行用 `.window-menu-popover .window-menu-submenu > button`
把高度交回 `auto`，否则它比同级兄弟行高 2px、行距不齐。

色板沿用仓库既有令牌，映射关系本来就是对得上的：`text-tertiary → var(--text-faint)`、
`bg-text/5 → var(--surface-hover)`、展开态沿用同一 hover 底色。

### 3.2 `desktop_app/apps/desktop/src/renderer/styles.css`

在 `shell.css` **之后**追加 `@import "./styles/window-menubar.css";`。覆盖靠加载顺序生效，
所以这条 import 必须排在 `shell.css` 后面。

### 3.3 未改动但已知的旧值

`styles/shell.css` 里第 48–231 行（`.window-toolbar` ~ `.window-controls` 整块）与第 11719 行
仍是旧档位，靠上面的 import 顺序被覆盖。**这些值没有被删除**，因为改动工具只支持整文件写入，
32 万字节的 `shell.css` 整文件重写不适合在对话框里完成。下一次整体整理 `shell.css` 时应当把
`window-menubar.css` 的内容并回那一整块，然后删掉这个文件。

### 3.4 菜单的条目与动作（`renderer/` 三个文件）

Codex 把这层拆成「主进程模板（条目 + accelerator + click）+ 渲染层只画」，本仓库的菜单栏画在渲染进程里，
于是照同一条缝拆成三层，装载点不变（`App.tsx` 仍只 `<WindowToolbar commands sidebarCollapsed trailing />`）：

| 文件                                         | 职责                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `renderer/window-menubar.ts`（新增）         | 结构层：`buildWindowMenus(host)` 返回四个菜单的条目、顺序、分隔线与加速键；命令项（`command:<id>`）的可用性/键位取自 App 注册的 `shellCommands`，与命令面板同源；被禁用的项在 `run()` 里再挡一次，保证「直接调用模型」也不产生副作用                                                                                                                            |
| `renderer/window-menubar-actions.ts`（新增） | 动作层：新建窗口（`listMasterRegistry` → `openMasterConsoleWindow`，未部署 Master 时退回 `openMasterSetupWindow`）、界面缩放（`settings.write{zoomFactor}`，主进程写完库即 `setZoomFactor`，0.8–2 / 步长 0.1）、全屏（DOM `requestFullscreen`）、检查更新（`update.check`）、帮助外链（`external.open`）、`formatAccelerator`、`openSessionTerminal`（见 §5.6） |
| `renderer/WindowToolbar.tsx`（重写）         | 渲染层：按模型画菜单，管开合、二级子菜单、菜单自带的 `window-menubar-dialog`（关于/检查更新），`onMouseDown={preventDefault}` 保住焦点（编辑命令作用在当前焦点元素上，焦点跑到按钮上等于没反应），并接住菜单独有的加速键（`Ctrl+= / Ctrl+- / Ctrl+0 / F11 / Ctrl+W`）——App 已经全局处理的键位不重复注册                                                         |

---

## 4. 验证

### 4.1 渲染测量（真实 CSS 离屏渲染）

用真实样式做了 A/B 静态渲染：把 `tokens.css` / `shell.css`（+ 新文件）直接链接进一份与
`WindowToolbar.tsx` 同构的静态 HTML，用无头 Edge（`--force-device-scale-factor=1`）1:1 截图，
再用同一套墨迹带分析测量。

**先验证测量方法本身**：只链接 `tokens.css + shell.css` 的「改前」渲染结果，与安装版 Syntropy
实机截图完全重合（折叠图标墨迹 22..36 / 行 17..31；菜单项墨迹起点 66/118/170/222；行 18..29），
说明这条离屏渲染链路可以作为回归工具。

| 观测量           | 改前渲染            | 改后渲染                           | Codex 参照                                                                                                                                             |
| ---------------- | ------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 顶部条高度       | 48px                | **36px**                           | 36px（`--height-toolbar-sm`）                                                                                                                          |
| 菜单项盒子       | 34px 高 / 左右 12px | **23px 高 / 左右 10px / 1px 描边** | 23px / 10px / 1px                                                                                                                                      |
| 菜单项 pitch     | 52px                | **50px**                           | 实测 47px（见 §5）                                                                                                                                     |
| 折叠按钮         | 34×34，图标 17px    | **28×28，图标 16px**               | 28px，图标 16px                                                                                                                                        |
| 菜单墨迹行       | 18..29（48 居中）   | **13..24（36 居中）**              | 10..21（顶部条 36，居中）                                                                                                                              |
| 首项字形墨迹起点 | 66                  | **47**                             | 111（差 64px＝Codex 多了 ←/→ 两个 28px 按钮 + 2px 间距；这两个按钮已于 2026-10-05 补进 `.window-toolbar-navigation`，见 `ui-alignment-2026-10-05.md`） |

改后渲染里「菜单项盒子 = 23px、pitch = 50px、墨迹在 36px 条里居中」与 Codex 的 CSS 算式完全一致。

### 4.2 点击行为断言

`.work/menu-align/harness.mjs` 用 Node 24 的 TS 类型擦除直接跑真实模块（`mod/` 下是被测模块的副本），
把 `window.syntropyDesktop` / `document` / `window.dispatchEvent` 换成记录桩，跑 **35 项断言全绿**：

- 结构：顶层四项文案与顺序、四个菜单的逐条清单（含分隔线位置）、13 项加速键文案、快捷键子菜单内容只读。
- 行为：新聊天 → App 的 `new-task`；复制/粘贴等 → 桥接命令 `edit.perform`（主进程执行 `webContents` 编辑命令）；放大/缩小/到上限 → `settings.read` + `settings.write`；
  全屏两个方向 → `requestFullscreen` / `exitFullscreen`；关闭窗口 → `controlWindow('close')`；
  新建窗口 → `listMasterRegistry` + `openMasterConsoleWindow`，未部署 Master 时退回 setup 窗口；
  文档 → `external.open` 到仓库 README；检查更新 → `update.check` 且结果回填对话框；关于 → `getBuildInfo`；
  打开终端 → 向 App 派发 `Ctrl+\``（接住/放行两条路径）；被禁用的命令项点了不执行。

### 4.3 工程闸门（真实仓库）

在 `desktop_app/` 下用仓库自带的工具链跑：

| 闸门          | 命令                                                                                        | 结果           |
| ------------- | ------------------------------------------------------------------------------------------- | -------------- |
| 类型          | `tsc -b --pretty false`（并单独 `-b apps/desktop/tsconfig.renderer.json --force` 强制重建） | 通过（无输出） |
| 链接/静态检查 | `oxlint --deny-warnings`（三个文件）                                                        | 通过           |
| 格式          | `oxfmt --check`（三个文件 + `styles/window-menubar.css`）                                   | 通过           |

---

## 5. 残余差异与风险

1. **pitch 50 vs 参照实机 47。** 三项都按 Codex 26.903 的 CSS 原值落地（`px-2.5`=10px、
   `gap-0.5`=2px、1px 描边、2 字 CJK = 26px），算式给 50px。参照实机量到 47px，差 3px/项，可能的
   来源有二：(a) 本机装的是 **26.928**，比逆向语料 **26.903** 新 25 个版本，档位可能已微调；
   (b) 参照实例的界面缩放不是 100%（`fj()` 的 zoom 会整体缩放，但实测按钮 pitch ≈30px 又指向
   未缩放，两条证据互相矛盾，无法用单一缩放因子解释）。若要与参照实机逐像素重合，把
   `window-menubar.css` 里菜单项的 `padding: 4px 10px` 改成 `4px 9px` 即可（pitch 变 47）。
2. **首项横向位置差 64px，不是对齐缺陷**：Codex 顶部条在折叠按钮左侧还有返回/前进两个按钮，
   并且折叠按钮组与菜单栏之间是 `gap-1`。本轮按「菜单栏」范围对齐，没有引入这两个窗口导航按钮；
   若要求左上角完全重合，需要额外加这两个按钮（超出本次范围）。
3. **原生应用菜单（Alt 键菜单）仍是 5 项**：`desktop_app/apps/desktop/src/main/main.ts` 的
   `installApplicationMenu()` 在 Windows 上仍含「窗口」菜单，Codex 在 Windows 只有 4 项
   （窗口菜单只在 macOS）。该菜单在 Windows 上被 `autoHideMenuBar: true` 隐藏，本轮未改；
   改法是让「窗口」项只在 `process.platform === "darwin"` 时进入模板，与 Codex 的
   `[...i?[jt,At]:[At],zt,Mt,...i?[Bt]:[],{help}]` 一致。
4. **影响面**：顶部条由 48px 变 36px 会同时改变折叠按钮、通知中心铃铛与自绘窗口按钮的尺寸，
   以及紧凑浮层模式下右侧面板的 `top`；上面表格里的取值已一并处理。macOS 分支（`data-chrome="mac"`）
   完全不受影响。
5. **整包真机回归已补做**：类型 / lint / 格式闸门跑的是真实仓库；随后用 `SYNTROPY_PACKAGE_OUT_DIR` 把包
   打到临时目录（不覆盖仓库里用户自己的 `out/`），在隔离配置（`--user-data-dir=%TEMP%\syntropy-menubar-verify`）
   下真机点开四个菜单，并点击了三项动作（视图→放大 / 视图→实际大小 / 帮助→关于 Syntropy）。过程与截图见
   `window-menubar-live-check.md` §5。**仍未做**：在**用户正在用的那个实例**上换上新菜单——桌面端当前运行的实例
   （`desktop_app/apps/desktop/out/Syntropy-win32-x64/Syntropy.exe`，构建于本轮改动之前）里，文件菜单还只有 4 项
   （`新会话 / 新建浏览器标签页 / 打开项目… / 设置`）；要让它换上新菜单必须重新打包进 `out/` 并重启应用，
   会打断它正在跑的会话任务，本轮有意不做。
6. **「打开终端」用的是同一键位的再派发**：终端属于当前会话的工作区，开关状态是 App 的会话态，
   菜单栏拿不到。菜单项因此不自己开终端，而是向 `window` 派发一次货真价实的 `Ctrl+\``（`keydown`），
   让 App 已有的全局处理去开；App 没有选中会话时会直接放行，此时菜单弹一句提示而不是静默无反应。
   如果将来 App 改变了这条通道（改键位或改成别的机制），菜单项会退化成一个纯提示项——这是这一项
   与其余项的差别，也是它唯一的脆弱点。
7. **菜单栏自带的加速键**：`Ctrl+W`（关闭窗口）与 `F11`（全屏）只在 `WindowToolbar` 里接，
   与 App 的全局键位处理不重叠。界面缩放（放大/缩小/实际大小）后来改成了 shell 命令
   （`zoom.in` / `zoom.out` / `zoom.reset`，见 issue #131）：渲染层由 App 的全局键位处理接住，
   主进程再用同一批命令注册原生菜单加速键，于是 mac（没有自绘菜单栏）与浏览器页 / 终端
   拿到焦点时也按得动。同一次按键只会生效一次——Chromium 在页面 `preventDefault` 之后
   不再把该按键当成菜单加速键（实测：不 consume 时菜单会响应，consume 时不响应）。
   真键验证、别名（加号 / 小键盘）的注册规则与改键 / 解绑后的行为见 §10。
8. **`Ctrl+Shift+[` / `Ctrl+]` 需要一个按键归一化**：按住 Shift 时 `event.key` 拿到的是 `{` / `}`，
   而菜单上按 Codex 的文案写成方括号。`App.tsx` 的 `normalizeBracketShortcut()` 在比对前把这对花括号
   折回方括号，菜单里显示的键位才按得动（发真键验证见 `window-menubar-live-check.md` §7）。

---

## 6. 复现步骤

```powershell
# 1) 抓取运行中的 Codex 窗口（DPI 96 / 100% 缩放），得到 1:1 截图
.\print-window.ps1 -Handle <codexMainHwnd> -Out codex-pw-top.png -CropH 220

# 2) 测量菜单项墨迹带（起点 / 尺寸 / 行）
.\analyze-bands.ps1 -Path .\codex-pw-top.png -X0 0 -X1 500 -Y0 0 -Y1 34 -Thresh 232

# 3) 逐项点开四个菜单并抓图（-X/-Y 是相对窗口原点的坐标，菜单标签起点 123/170/217/264）
.\probe.ps1 -Handle <codexMainHwnd> -X 123 -Y 26 -Out c1-file.png

# 4) 改前 / 改后 A/B：用真实菜单模型 + 真实 CSS 离屏渲染再测同一批指标
node render-preview.mjs
msedge --headless=new --user-data-dir=%TEMP%\edge-menubar-shot --force-device-scale-factor=1 `
  --window-size=900,470 --screenshot=shots/preview2-view.png preview2-view.html

# 5) 行为断言（Node 24 直接跑真实模块）
node harness.mjs
```

---

## 7. Codex 四个菜单的条目清单（实测）

按 §2.2 的方法逐项点开读出；「—」是分隔线。加速键列是菜单右侧显示的原文。

### 文件

| 条目         | 加速键         |
| ------------ | -------------- |
| 新建窗口     |                |
| 新聊天       | `Ctrl+N`       |
| 新建临时聊天 | `Ctrl+Shift+N` |
| —            |                |
| 打开文件夹   | `Ctrl+O`       |
| —            |                |
| 关闭         | `Ctrl+W`       |
| 退出登录     |                |
| 退出 ChatGPT | `Ctrl+Q`       |

### 编辑

| 条目 | 加速键   |
| ---- | -------- |
| 撤销 | `Ctrl+Z` |
| 重做 | `Ctrl+Y` |
| —    |          |
| 剪切 | `Ctrl+X` |
| 复制 | `Ctrl+C` |
| 粘贴 | `Ctrl+V` |
| 删除 |          |
| —    |          |
| 全选 | `Ctrl+A` |
| —    |          |
| 设置 | `Ctrl+,` |

### 视图

| 条目                         | 加速键         |
| ---------------------------- | -------------- |
| 显示/隐藏侧边栏              | `Ctrl+Shift+S` |
| 显示/隐藏底部面板            | `Ctrl+J`       |
| 切换置顶摘要                 |                |
| 打开终端                     | `Ctrl+\``      |
| 显示/隐藏导航面板            | `Ctrl+Shift+E` |
| Switch between Chat and tabs | `Alt+Ctrl+B`   |
| 浏览器 ▸                     |                |
| —                            |                |
| 查找                         | `Ctrl+F`       |
| —                            |                |
| 上一个聊天                   | `Ctrl+Shift+[` |
| 下一个聊天                   | `Ctrl+Shift+]` |
| 返回                         | `Ctrl+[`       |
| 前进                         | `Ctrl+]`       |
| —                            |                |
| 放大                         | `Ctrl+Shift+=` |
| 缩小                         | `Ctrl+-`       |
| 实际大小                     | `Ctrl+0`       |
| —                            |                |
| 切换全屏                     | `F11`          |

「浏览器 ▸」二级菜单：打开浏览器标签页 `Ctrl+T`、聚焦浏览器地址栏、重新加载页面 `Ctrl+R`。

### 帮助

| 条目           | 加速键   |
| -------------- | -------- |
| 文档           |          |
| 显示键盘快捷键 | `Ctrl+/` |
| 新功能         |          |
| —              |          |
| 故障排除       |          |
| 系统状态       |          |
| 反馈           |          |
| —              |          |
| 任务管理器     |          |
| 开始性能跟踪   |          |
| —              |          |
| 检查更新…      |          |
| 关于 ChatGPT   |          |

---

## 8. 条目 → 落地实现对照

「实现」列写的是点下去实际发生的事（代码位置在括号里）。命令类条目的可用性与键位都跟着 App 注册的
`shellCommands` 走（`App.tsx` 里那 8 条），所以用户在设置页改过的键位会同步反映到菜单上。

### 文件

| Codex 条目            | Syntropy 菜单项   | 实现                                                                                                                                                                        |
| --------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 新建窗口              | 新建窗口          | 给当前 Master 再开一个窗口：`listMasterRegistry` → `openMasterConsoleWindow`；未部署 Master 时退回 `openMasterSetupWindow`，任何状态都有反馈（`window-menubar-actions.ts`） |
| 新聊天 `Ctrl+N`       | 新聊天            | 走 App 的 `new-task` 命令（新建会话），键位与命令面板同源                                                                                                                   |
| 新建临时聊天          | —                 | 本仓库没有「临时会话」概念，不出现                                                                                                                                          |
| 打开文件夹 `Ctrl+O`   | 打开文件夹        | 走 App 的 `project.open` 命令（打开项目选择器）                                                                                                                             |
| 关闭 `Ctrl+W`         | 关闭窗口 `Ctrl+W` | `controlWindow("close")`；`Ctrl+W` 同时被菜单栏接住                                                                                                                         |
| 退出登录              | —                 | 本仓库没有登录态                                                                                                                                                            |
| 退出 ChatGPT `Ctrl+Q` | —                 | 桥接层只有 `close / minimize / toggle-maximize` 三个窗口动作（`contracts.ts` 的 `WindowControlActionSchema`），没有「退出应用」通道，不做假条目                             |

### 编辑

| Codex 条目                         | Syntropy 菜单项 | 实现                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 撤销/重做/剪切/复制/粘贴/删除/全选 | 同名            | 桥接命令 `edit.perform`：主进程对发起窗口执行 `webContents` 的编辑命令（Codex 这七项是 Electron `role`，与原生菜单同一条路径）。不能退回渲染层的 `document.execCommand`——Chromium 的 `execCommand('paste')` 恒为 false（剪贴板读取被禁），粘贴必须由主进程发起；菜单按钮 `onMouseDown` 阻止默认行为，焦点与选区留在原处，粘贴作用于真正的输入框 |
| 设置 `Ctrl+,`                      | 设置            | 走 App 的 `settings` 命令（设置页打开时该命令 disabled，菜单项随之置灰且点击无副作用）                                                                                                                                                                                                                                                          |

### 视图

| Codex 条目                   | Syntropy 菜单项           | 实现                                                                                                                                                                                                                                                                                                                               |
| ---------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 显示/隐藏侧边栏              | 显示/隐藏侧边栏           | App 的 `sidebar.toggle`；键位显示 `Ctrl+B`（Codex 是 `Ctrl+Shift+S`，以本仓库真实绑定为准）                                                                                                                                                                                                                                        |
| 显示/隐藏底部面板 / 导航面板 | 显示/隐藏右侧面板         | App 的 `inspector.toggle`；本仓库的常驻检查器就是右侧面板，键位 `Ctrl+Alt+I`                                                                                                                                                                                                                                                       |
| 打开终端 `Ctrl+\``           | 打开终端 `Ctrl+\``        | 向 App 派发同一键位（见 §5.6）；没有选中会话时弹提示                                                                                                                                                                                                                                                                               |
| 浏览器 ▸ 打开浏览器标签页    | 打开浏览器标签页          | App 的 `browser.new`（`Ctrl+T`，与 Codex 同键）                                                                                                                                                                                                                                                                                    |
| —                            | 显示/隐藏浏览器           | App 的 `browser.toggle`（`Ctrl+Shift+B`）                                                                                                                                                                                                                                                                                          |
| 上一个聊天 `Ctrl+Shift+[`    | 上一个聊天 `Ctrl+Shift+[` | App 的 `session.previous`：按侧边栏自上而下的会话清单（置顶 → 项目内 → 即时会话，去重后）选上一条；到头了菜单项置灰                                                                                                                                                                                                                |
| 下一个聊天 `Ctrl+Shift+]`    | 下一个聊天 `Ctrl+Shift+]` | App 的 `session.next`：同上，选下一条                                                                                                                                                                                                                                                                                              |
| 返回 `Ctrl+[`                | 返回 `Ctrl+[`             | App 的 `session.back`：访问历史里后退一步。历史由 `selectedTaskId` 的 effect 记账（每选中一条记一条），回退时先挪游标再切会话，不会重复入栈；没有可退的项时置灰                                                                                                                                                                    |
| 前进 `Ctrl+]`                | 前进 `Ctrl+]`             | App 的 `session.forward`：访问历史里前进一步，同上                                                                                                                                                                                                                                                                                 |
| 放大/缩小/实际大小           | 同名                      | shell 命令 `zoom.in` / `zoom.out` / `zoom.reset`：`settings.write{zoomFactor}`，区间 0.8–2、步长 0.1，与设置页滑杆同一条路径。键位（`⌘/Ctrl+=`、`-`、`0`）在设置页「界面 → 放大/缩小/界面实际大小」里可改可解绑；App 的全局键位处理与主进程的原生菜单加速键（mac / 浏览器页焦点，另含 `Ctrl+加号` 与小键盘 ±0 别名）投递同一批命令 |
| 切换全屏 `F11`               | 切换全屏 `F11`            | DOM 全屏（`documentElement.requestFullscreen` / `exitFullscreen`），菜单栏同时接住 `F11`                                                                                                                                                                                                                                           |
| 切换置顶摘要                 | —                         | 本仓库没有置顶摘要                                                                                                                                                                                                                                                                                                                 |
| Switch between Chat and tabs | —                         | 本仓库没有 Chat/tabs 双态                                                                                                                                                                                                                                                                                                          |
| 查找                         | —                         | 「查找」在 Codex 指会话内查找；本仓库的会话搜索是另一套入口且快捷键由 App 独占，菜单栏不伪装                                                                                                                                                                                                                                       |

### 帮助

| Codex 条目                           | Syntropy 菜单项 | 实现                                                                                                                                                                               |
| ------------------------------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 文档                                 | 文档            | `external.open` 打开仓库 README（主进程用 `trustedExternalHttpsUrl` 校验）                                                                                                         |
| 显示键盘快捷键 `Ctrl+/`              | 键盘快捷键 ▸    | Codex 打开一张面板；本仓库那张面板在设置页，菜单栏拿不到它的开关，于是就地列出当前生效的绑定（只读）。清单 = 所有带键位的命令 + 菜单独有项（新建窗口/关闭窗口/打开终端/缩放/全屏） |
| 新功能                               | 新功能          | `external.open` 到仓库 releases                                                                                                                                                    |
| 故障排除 / 反馈                      | 同名            | `external.open` 到仓库 issues / issues/new                                                                                                                                         |
| 检查更新…                            | 检查更新…       | `update.check`，结果（已是最新 / 有新版本 / 服务不可用）原样回填到菜单自带对话框                                                                                                   |
| 关于 ChatGPT                         | 关于 Syntropy   | `getBuildInfo()` 渲染对话框：版本、Electron 版本、平台、正式/开发构建                                                                                                              |
| 系统状态 / 任务管理器 / 开始性能跟踪 | —               | 本仓库没有这三条链路                                                                                                                                                               |

### 与 Codex 的三处有意偏差

1. 「键盘快捷键」从「打开面板」改成「就地列出当前绑定」——面板在设置页，菜单栏没有开关它的通道。
2. 帮助里的外链指向 Syntropy 仓库，不是 OpenAI 的链接。
3. 侧边栏/右侧面板/浏览器这几项的键位沿用本仓库真实绑定（`Ctrl+B` / `Ctrl+Alt+I` / `Ctrl+Shift+B`），
   而不是照抄 Codex 的 `Ctrl+Shift+S` / `Ctrl+J` / `Ctrl+Shift+E`。

---

## 9. 未落地的条目与补法

### 9.1 已补上：会话导航（上一个/下一个聊天、返回/前进）

这四项要靠 App 的会话态（`selectedTaskId`、会话清单），菜单栏本身拿不到，所以走的是「注册成
`shellCommands`」这条路——菜单模型一行没改（`commandItem` 自动带上可用性与键位）：

- `ShellCommandIdSchema` 加 `session.previous` / `session.next` / `session.back` / `session.forward`
  （`packages/desktop-bridge/src/contracts.ts`）。
- `App.tsx` 里新增 `orderedSessionIds`（侧边栏自上而下的清单）、`stepSession()`、
  `stepSessionHistory()` 与那段访问历史，并把这四条命令连同默认键位（`Mod+Shift+[` / `Mod+Shift+]` /
  `Mod+[` / `Mod+]`）注册进 `shellCommands`；键位因此同时出现在设置 → 键盘快捷键里（可直接改绑）。
- 生效范围：命令面板、菜单点击、键盘快捷键三条入口共用同一条命令。

顺带说明了上一轮「`App.tsx` 341KB 不好改」这个顾虑的**实际解**：仓库在 `D:\qax\reagent\dev\git\Syntropy`
有一份完整 checkout，用脚本做定点插入 + `tsc`/`oxlint`/`oxfmt` 三道闸门 + 真机点击，比整文件重写安全得多。

### 9.2 仍未落地：没有对应能力的那些

| 条目                         | 为什么不做                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------- |
| 显示/隐藏底部面板            | 本仓库没有底部面板（常驻检查器在右侧，已映射到「显示/隐藏右侧面板」）                       |
| 显示/隐藏导航面板            | 本仓库的导航就是侧边栏，已由「显示/隐藏侧边栏」覆盖，不再造第二个开关                       |
| 切换置顶摘要                 | 没有置顶摘要这个能力                                                                        |
| Switch between Chat and tabs | 本仓库没有 Chat / tabs 双态                                                                 |
| 查找 `Ctrl+F`                | Codex 的「查找」是会话内查找；本仓库的会话搜索是另一套入口、快捷键由 App 独占，菜单栏不伪装 |
| 审阅面板                     | 没有对应面板                                                                                |

补法（如果将来要做）：`Cmd/Ctrl+F` 那条要等 App 有会话内查找；其余几项要先有对应的能力，
再照 §9.1 的路径注册成 `shellCommands`——菜单模型同样不用改。

### 9.3 已补上：顶部条里的 ←/→（2026-10-05）

§4.1 里「首项横向差 64px」的那两个按钮已经落到
`.window-toolbar-navigation`：`返回` / `前进` 复用 §9.1 的 `session.back` / `session.forward`
（同一份 `shellCommands`，所以菜单、命令面板、快捷键、按钮四处共用一条命令；按钮的
`disabled` 与 `title` 里的键位都从命令上取）。同批还有右侧面板浮层化与 composer
去灰条，逐项记录见 `ui-alignment-2026-10-05.md`。

---

## 10. 界面缩放（issue #131）：真键验证与别名规则（2026-10-14）

issue #131 要的是「全局快捷键放大 / 缩小界面倍率」（参考 Codex：mac `⌘+`/`⌘-`，
Windows `Ctrl+` 系列）。落地形态是 §8 视图那三行：`zoom.in` / `zoom.out` / `zoom.reset`
三条 shell 命令 + `settings.write{zoomFactor}`；§5 第 7 条解释了双注册者（渲染层全局键位处理
与主进程原生菜单加速键）为什么不重复生效。本轮补的是「按下去真的缩放没有」和
「改键 / 解绑之后键位还认不认」这两件只能真机回答的事。

### 10.1 怎么量

临时脚本在 `.work/zoom-check/`（不进版本库）：

| 脚本            | 作用                                                                                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `launch.ps1`    | 起隔离实例：`--user-data-dir=<临时目录>` + `--remote-debugging-port`（渲染层）+ `--inspect`（主进程）。用户自己的实例不受影响                                                          |
| `sendkeys.ps1`  | 发**真键**：`keybd_event` + 「`ShowWindow` → `SetWindowPos` → `AttachThreadInput` → `SetForegroundWindow`」三段式抢前台，发送前校验 `GetForegroundWindow()` 就是目标窗口，抢不到就拒发 |
| `zoom-read.mjs` | 通过 CDP 读渲染层的 `settings.read.zoomFactor`（权威值，主进程写完库 apply 的那一个）                                                                                                  |
| `main-read.mjs` | 连主进程 inspector，读 `Menu.getApplicationMenu()` 里这七项**实际注册**的加速键（含隐藏别名），与焦点无关                                                                              |

为什么两套读数都要：别名只注册在原生菜单上（渲染层看不见，`Mod+Shift++` 这种记号在渲染层
根本解析不出来，`shortcutFromKeyboardEvent` 会返回空串），而真键又要求窗口抢到前台——
本机同时开着用户自己的实例时抢前台会失败，所以「注册了什么」用主进程读数，
「按下去生效没有」用真键读数，两边互为佐证。

### 10.2 结果（本轮改完重新打包后的构建，隔离实例，全新配置目录）

| 状态                          | 主进程注册的加速键                                                                                                                          | 真键实测（`settings.read` 的 `zoomFactor`）                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 默认键位                      | `放大` ← `Ctrl+=` + 别名 `Ctrl+Plus` / `Ctrl+小键盘+`；`缩小` ← `Ctrl+-` + 别名 `Ctrl+小键盘-`；`实际大小` ← `Ctrl+0` + 别名 `Ctrl+小键盘0` | `Ctrl+=` 1→1.1→1.2、`Ctrl+Shift+=` 1.3、`Ctrl+小键盘+` 1.4、`Ctrl+-` 1.3、`Ctrl+小键盘-` 1.2、`Ctrl+小键盘0` 1、`Ctrl+0` 1 —— 每次**恰好一档** |
| 改键位（改绑成 `Ctrl+Alt+=`） | `放大` ← `Ctrl+Alt+=`，**无别名**；`缩小` / `实际大小` 及其别名不变                                                                         | `Ctrl+Alt+=` 1→1.1→1.2；`Ctrl+=`、`Ctrl+Shift+=`、`Ctrl+小键盘+` 全部**不动**；`Ctrl+-` 照旧 1.1                                               |
| 解绑                          | `放大` 无加速键、无别名；另外两条不变                                                                                                       | `Ctrl+Alt+=`、`Ctrl+=` 都不动                                                                                                                  |

边界与全局性也一并量过：从 100% 连按 6 次 `Ctrl+-` 停在 **0.8**、连按 14 次 `Ctrl+=` 停在 **2**
（同时 `window.devicePixelRatio` 变成 2，说明缩放真的 apply 到了页面）、`Ctrl+0` 回 100%；
设置页开着时 `Ctrl+=` 照样生效（1.1 → 1.2），符合「窗口级动作不受面板状态影响」的定位。
设置页「键盘快捷键」里能看到新建的 **界面** 分组三项——`放大界面 Ctrl+=`、
`缩小界面 Ctrl+-`、`界面实际大小 Ctrl+0`，并带「快捷键在当前应用窗口中生效」的说明。

### 10.3 本轮修的问题：改键之后旧键位那一族别名还在

原实现只在**显式解绑**（`overrides[id] === ""`）时撤下别名。于是把「放大界面」改绑成
`Ctrl+Alt+=` 之后，`Ctrl+Shift+=` 与 `Ctrl+小键盘+` 仍然放大——设置页上写着
`Ctrl+Alt+=`，旧键位那一族却还按得动，就是 §5 第 7 条自己反对的那种「假信息」。

改法：别名是**默认键位那一族**按键的另一副面孔（加号要按住 Shift、小键盘另有 `+ - 0`），
所以只在命令仍用默认键位时注册。判据不能写成「有没有这项」——渲染层每次键位变化都会把
**整张生效表**同步给主进程（默认值也在里面，见 `App.tsx` 里那个 `configureKeyboardShortcuts`
effect），因此要比对它是否仍等于默认键位。规则抽到
`apps/desktop/src/main/window-zoom-menu.ts` 的 `buildZoomMenuItems()`（主进程逻辑，便于单测），
`main.ts` 只负责传 `defaultShortcut` 与 `override`。

回归锁在 `tests/component/window-zoom-shortcuts.component.test.ts` 的 `zoom menu aliases`
两条用例里：默认键位（`undefined` 或 `Mod+=`）保留别名，改键与解绑都只剩主项。
（这条边界最初写错过一次：第一版按 `overrides?.[id] === undefined` 判断，结果默认状态下
别名被全部撤下——正是主进程读数 `Menu.getApplicationMenu()` 把它照出来的，
所以 §10.1 那套「注册什么」的读数是必要的，不只是为了留证据。）

---

## 11. 界面缩放的浮动倍率药丸（2026-10-14）

§10 把缩放命令本身验完了，但 Codex 按缩放键时还会在窗口右上角浮出一枚药丸
（`170% − + | 重置`，用户给的正是这张图），本仓库当时没有。本章记它的来源、落地与验证。

### 11.1 Codex 侧的来源与规格（A 级：安装包直接证据）

药丸组件（Codex 内部叫 zoom banner）在 26.903 的逆向产物与已安装的 26.1007 里**逐字一致**：

| 项 | 出处 |
| --- | --- |
| 组件本体 | `codex_app_rev/code/app-shell/routing/tab-content-e2e2a8df4c1f.js` 的 `Hd`（约 8067 行）；已安装 26.1007 的 `webview/assets/tab-content-778abc7028b4.js` 同款 |
| 它也给「窗口缩放」当反馈 | 主进程菜单把窗口缩放三项的标签取自同一组 i18n：`browserSidebar.zoomBanner.zoomIn` / `.zoomOut`、`electron.appMenu.view.actualSize`（`codex_app_rev/code/main-process/build/main-CMBCj4XL.js:77439` 的 `Lt` 数组）；点下去走 `St(1)`/`St(-1)`/`Ct()`，没有浏览器页可缩时就 `sendMessageToWindow({type:'step-window-zoom'})` |
| 卡片 | `rounded-[12px] border border-default bg-surface-elevated-secondary/90 py-2 pe-2 ps-4 text-default shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.12)] ring-[0.5px] ring-border backdrop-blur-sm` → 12px 圆角、1px 描边、90% 底色 + 4px 背景模糊、内边距 8/8/8/16、0.5px 内环 + `0 8px 16px -4px rgba(0,0,0,.12)` |
| 百分比 | `w-10 text-center text-sm font-semibold tabular-nums` → 40px 居中、13px（electron 窗口的 `--text-sm`）、半粗、tabular-nums |
| 缩小 / 放大 | 28px 图标按钮（`size: toolbar`）+ 16px 图标；两枚之间一根 `h-4 w-px bg-border/60` |
| 重置 | 纯文字按钮，`color: ghost`；`isResetDisabled = zoomPercent === 100` |
| 按下动画 | `._Icon_*[data-animating=true]{animation:.22s cubic-bezier(.23,1,.32,1) both _zoomIconPress_*}`，关键帧 `scale(1) → 1.1(44%) → 1`，`prefers-reduced-motion` 时关掉 |
| 停留时长 | `Qd = 2e3`：2 秒后自己消失 |
| 悬停 | 到点时鼠标还在药丸上就先记「待消失」，移开再消失（`m.current` / `h.current`） |
| 方向动画键 | 每次改档把对应那侧递增、另一侧不动；动画播完由 `onAnimationEnd` 清回 `null` |
| 程序化改缩放不弹 | 调用点带 `{showBanner:false}`（例如设备工具栏改缩放） |

### 11.2 我们的落地

| 文件 | 职责 |
| --- | --- |
| `apps/desktop/src/renderer/zoom-indicator.ts`（新增） | 纯模型：百分比文案、100% 置灰、显示/消失/悬停/动画键的状态迁移，以及 `ZOOM_CHANGED_EVENT` 事件名 |
| `apps/desktop/src/renderer/ZoomIndicator.tsx`（新增） | 订阅缩放事件、开关那个 2 秒计时器、画药丸（`ZoomIndicatorView` 单独导出，便于静态渲染核对版面） |
| `apps/desktop/src/renderer/styles/zoom-indicator.css`（新增） | 上表那套档位，按本仓库 token 落地（`--radius-xl` / `--line` / `--elevation-stroke` / `--surface-hover` / `--text-faint`） |
| `window-menubar-actions.ts` | `writeZoomFactor` 写完库广播一次变化（带 `previous`，命令没读到旧值时由组件拿上一次显示的倍率补） |
| `App.tsx` | 药丸挂在 `.app-frame` 里（顶部条之后、`app-shell` 之前） |

位置：Codex 把它钉在面板右上角（`absolute right-0 px-3 pt-3`）；本仓库的缩放是**整窗**缩放，
所以锚在窗口右上角、顶部条下方 12px（mac 档没有自绘顶部条，直接贴顶 12px）。

触发范围：只有用户触发的缩放会弹（快捷键、视图菜单、命令面板、药丸自己的按钮）；
设置页拖「界面缩放」滑杆直连 `settings.write`，不弹——与 Codex 的 `showBanner:false` 同一条口径。

### 11.3 真机验证（隔离实例 + CDP）

脚本在 `.work/zoom-pill/`（`launch` 复用 `.work/zoom-check/launch.ps1`）：
`live.mjs` 驱动整条链路，`shot.mjs` 抓渲染层画面，`analyze.ps1` 量参考截图的墨迹。

为什么用 CDP 抓图而不是 `PrintWindow`：这台机器上同时开着用户自己的实例，被测主窗口在
启动阶段是「存在但不可见」的（Electron 自己 show 过一次，被遮挡后不再合成帧），
`PrintWindow` 只拿得到窗口边框 + 黑块；CDP 抓的是渲染层自己的画面，抓到的是真实 UI。

| 步骤 | `settings.read` 的倍率 | 药丸 | 重置按钮 |
| --- | --- | --- | --- |
| 工作台（未缩放） | 100% | 未显示 | — |
| 按一次 `Ctrl+=` | 110% | 显示 `181×46 @右12 上48` | 可点 |
| 再等 2.5 秒 | 110% | **已自己消失** | — |
| 悬停 2.4 秒 | 120% | **仍在**（悬停把消失延后） | 可点 |
| 移开鼠标 | 120% | 已消失 | — |
| 点药丸上的 `+` | 140% | 显示（按钮有 hover 底色） | 可点 |
| 点药丸上的 `−` | 130% | 显示 | 可点 |
| 点药丸上的「重置」 | 100% | 显示 | **置灰**（100%） |
| 指针移开后再等 2.5 秒 | 100% | 已消失 | — |

证据图：`.work/zoom-pill/31-110.png`（110%）、`33-after-plus.png`（140%，`+` 处于 hover）、
`35-after-reset.png`（100%，「重置」置灰）、`32-hover.png`（悬停中仍在）。

悬停那一步在 CDP 里用的是页面内派发的 `mouseover`/`mouseout`：隐藏窗口上 CDP 的
`Input.dispatchMouseEvent` 要等约 5 秒才落地，那时药丸早过 2 秒计时了——验到的是「事件太慢」
而不是「悬停不消失」。React 的 `onMouseEnter/onMouseLeave` 正是从 `mouseover`/`mouseout`
合成的，所以走的仍是同一条组件路径；真实指针那一路的差别只剩「事件由谁派发」。

### 11.4 有意偏差与已知边界

1. **分隔线位置按用户给的截图**：放在「`+` 与 重置 之间」。Codex 那个组件的分隔线在
   「`−` 与 `+` 之间」（`children: [D, O, N]`，且两枚按钮带 `bg-text/5` 的分段底色）。
   两版 Codex（26.903 / 26.1007）都是后者，所以这一处是照着**用户给的图**而不是照着源码做的；
   要逐像素贴源码，把那根 `span` 挪进 `−`/`+` 那一组、并给这组加回 `--surface-hover` 底色即可。
2. **不新开 IPC**：变化事件用 `window` 上的 `CustomEvent`（与 `SHORTCUTS_CHANGED_EVENT` 同一风格），
   主进程不需要知道药丸的存在。
3. **设置页滑杆不弹药丸**：与 Codex 一致；如果哪天希望拖滑杆也看到倍率，把广播挪进设置页那条
   写入路径即可（`writeZoomFactor` 已经在同一个通道上）。

---

## 12. macOS 也画这条工具栏（2026-10-15）

用户报：「macos 上看不到上面的工具栏」（附的是 Windows 那条）。此前 mac 档按 §1 的非目标
有意不做自绘顶部条，代价是**这一条上的东西在 macOS 上全都没有入口**：

| Windows 工具栏里的东西 | 改之前 macOS 上的去处 |
| --- | --- |
| ← / → | 无按钮（只剩快捷键） |
| 折叠侧栏 | 红绿灯右侧一枚悬浮按钮 |
| 文件 / 编辑 / 视图 / 帮助 | 只在系统菜单栏（本来就该如此） |
| 定时任务 / 用量 | 无按钮（右栏「+」、`/定时任务`、`/用量` 里能开） |
| 附件库 / 浏览器动作 | **没有入口**（两个面板只有这条工具栏能打开） |
| 通知铃 | **没有入口** |
| 「更新 x.y.z」 | **没有入口**（只能进 设置 → 升级） |

### 12.1 落地形状

mac 档从「侧栏自带 40px 标题行（红绿灯内嵌）+ 悬浮折叠按钮」改成
**窗口最上方一条 40px 自绘工具栏**，与 Windows 那条同构、同组件（`WindowToolbar`）：

| 项 | Windows | macOS |
| --- | --- | --- |
| 条高 | 36px | **40px**（与 mac 档工作区头部、右栏头部、设置导航顶部同高） |
| 窗口按钮 | 自绘三枚（46×3，右端留 138px） | **原生红绿灯**（`hiddenInset`；`trafficLightPosition {x:12,y:14}` 不动：40px 条心 y20 = 灯心） |
| 左端 | 导航组自带 4px 内缩 | **76px 让开灯组**（灯组 x12..~72），加导航组那 4px 后第一枚按钮正好落在 x80——与改之前那枚悬浮折叠按钮同位置 |
| 右端 | 138px 让开自绘窗口按钮 | 12px |
| 应用菜单 | 窗口内画（原生菜单被 `autoHideMenuBar` 隐藏） | **不画**：mac 的 文件/编辑/视图/窗口/帮助 归系统菜单栏（与 Codex 在 mac 的做法一致，也是 §1 记下的非目标） |
| 与 `WindowToolbar` 的关系 | `<WindowToolbar platform="win32" />` | `<WindowToolbar platform="darwin" />`：菜单与 `.window-controls` 按 platform 跳过 |

随之清掉的三处 mac 专属让位（红绿灯不再落在工作区/设置页左上角）：
`shell.css` 里工作区头部与节点管理页签头的 `padding-left: 118px`、右栏整页展开时
`inspector-page-header` 的 `max(0px, calc(120px - var(--sidebar-width)))`、
`settings-page.css` 里 `.settings-navigation-top` 的 `padding-top: 42px`；
窄窗分支（≤760px）里为「灯组溢出到工作区顶部」写的 `.workspace { padding-top: 40px }`
也一并删掉。另有四处随顶部条高度跟着动的档位：mac 的 `.app-frame` 网格行
（`40px minmax(0,1fr)`）、紧凑浮层模式浮层右栏 `top: 40px`、缩放药丸 `top: 52px`。

红绿灯仍在原来那条 40px 上、仍是 x12/y14，所以 `main.ts` 的窗口参数**没有改动**，
只更新了那里的注释。

### 12.2 验证

mac 真机不在本机，所以分两段验：

1. **结构**：`tests/component/window-toolbar.component.test.tsx`（新增）钉住两个平台各画什么——
   `win32` 有 `.window-menus` + `.window-controls` 与四个菜单文案，`darwin` 有导航三枚与右侧入口、
   没有菜单与窗口按钮（`vitest run --dir tests/component`：161 文件 / 1504 用例全绿）。
2. **版面**：`.work/mac-toolbar/probe.mjs`（新增，`cd desktop_app && node .work/mac-toolbar/probe.mjs`）
   用真实 `styles.css` + 与 `WindowToolbar` 两分支同构的标记、无头 Edge 1:1 渲染，两侧都量：
   mac 档——条高 40、条贴顶、第一枚导航按钮 x=80、按钮 28px、导航间距 2px、右端入口右内缩 12px、
   「更新」药丸右边缘 12px、`.app-shell` 起点 40px、工作区头部 40px、**没有**窗口内菜单与自绘窗口按钮；
   Windows 档（回归对照）——条高 36、第一枚导航按钮 x=4、四个菜单齐全、三枚自绘窗口按钮、
   「更新」药丸右边缘 138px（让开窗口按钮）。全部通过；截图 `.work/mac-toolbar/mac.png`
   与 `windows.png`（mac 那张的红绿灯用三个 12px 圆点占位，真机上是原生按钮）。
3. **工程闸门**：`oxfmt --check`、`tsc -b`、`depcruise`、`vitest --dir packages|tests/component|tests/security`
   全绿。`oxlint` 在 `tests/e2e/{browser-control-settings,computer-use-settings}.spec.ts` 与
   `tests/e2e/support/desktop-cluster.ts` 上各有 1 条 warning（与本次改动无关的文件，本轮未动）；
   `tests/contract` 有 4 例失败（factory-reset 进程清扫、local-files 的临时目录大小写），同样与工具栏无关。

### 12.3 仍未做 / 边界

1. **没在真 Mac 上跑过**：机器不在这儿。本机能验的是结构与版面（上面两段），真机还需要确认
   红绿灯与这条工具栏的相对位置、以及原生拖拽区（条本身上 `.window-toolbar` 的 `drag`）手感。
2. **窗口内不画四个菜单**：mac 上系统菜单栏本来就有同样四项，画两份是重复。要逐像素照用户那张
   Windows 截图（含 文件/编辑/视图/帮助），把 `WindowToolbar` 里 `windowsChrome ? <nav …> : null`
   那处判断去掉即可，`.window-menus` 的档位已经就位（只是弹层 `top` 需要按 40px 条再调一次）。
3. **全屏覆盖类页面会盖住这条工具栏**：模型配置门禁 / 初始化向导是 `position: fixed; inset: 0`
   的整窗浮层（Windows 上同样盖住顶部条），它们内部仍按红绿灯让位（`setup-wizard.css` 的 84px）。
