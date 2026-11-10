# 主界面与对话区风格

> 本文基于 26.903 的 `webview/assets/app-initial-49fc08c26651.css`（804 KB）与 `app-primary-d815831c9bad.css`（144 KB），以及 `index.html` 的内联启动样式。上一版（26.901）的定性结论仍然成立，本次把 token 值补全为精确数字，并新增了 **VS Code 主题变量映射** 与 **窗口类型分主题** 两块此前未记录的内容。

## 1. 总体视觉语言

面向长时间工作的桌面工作台，不是营销型首页。层次靠**语义 token**建立：低透明度边框、OKLCH 色板、`color-mix` 派生、4px 基准间距、可缩放的圆角与一个专属的 composer 阴影。几乎没有渐变和高饱和装饰。

主题层叠顺序（后者优先级更高）：

```
:root, :host                     基础 token（Tailwind v4 theme 层）
  └─ .electron-light / .electron-dark      preload 在首帧同步加的 class
       └─ [data-codex-window-type=browser] 按窗口类型分主题
            └─ @supports (color: color-mix(in lab, red, red))  渐进增强
                 └─ var(--vscode-*)         嵌入 VS Code 时继承编辑器主题
```

两个关键机制：

1. **`@supports` + hex 兜底**：每个用 `color-mix()` 的 token 都先写一份十六进制回退值。例如 `--color-border-error` 先给 `#e02e2a26`（light）/ `#fa423e66`（dark），再在 `@supports` 块里升级为 `color-mix(in oklab, var(--red-500) 15%, transparent)`。
2. **`--lightningcss-light` / `--lightningcss-dark` 拼接**：形如
   `--color-control-thumb-foreground: var(--lightningcss-light, var(--color-text)) var(--lightningcss-dark, var(--black));`
   由 Lightning CSS 在构建期按主题裁掉不适用的一支，从而在一个声明里表达“亮色用 A、暗色用 B”，避免重复选择器。

## 2. 尺寸与排版

### 基准

| token                   | 值                                                          |
| ----------------------- | ----------------------------------------------------------- |
| `--spacing`             | `.25rem`（**4px 基准**，所有间距按倍数组合）                |
| `--padding-toolbar`     | `calc(var(--spacing) * 2)` = 8px，或 `* 4` = 16px（按密度） |
| `--container-3xs … 5xl` | 16 / 20 / 24 / 28 / 32 / 36 / 42 / 48 / 56 / 64 rem         |

### 字号阶梯（自定义 px，非 Tailwind 默认 rem）

| token         |       值 | line-height                  |
| ------------- | -------: | ---------------------------- |
| `--text-xs`   | **11px** | `calc(1 / .75)` ≈ 1.333      |
| `--text-sm`   | **12px** | `calc(1.25 / .875)` ≈ 1.428  |
| `--text-base` | **14px** | `calc(1.5 / 1)` = 1.5        |
| `--text-lg`   | **16px** | `calc(1.75 / 1.125)` ≈ 1.556 |
| `--text-xl`   | **28px** | `calc(1.75 / 1.25)` = 1.4    |
| `--text-2xl`  |     36px | `calc(2 / 1.5)`              |
| `--text-3xl`  |     48px | `calc(2.25 / 1.875)` = 1.2   |
| `--text-4xl`  |     72px | `calc(2.5 / 2.25)`           |
| `--text-5xl`  |     3rem | 1                            |

注意 11/12/14/16 这四档明显比 Web 常规（12/14/16/18）更紧凑 —— 这是桌面工作台为了信息密度刻意压低的。`xl` 直接跳到 28px，说明大字号只用于极少数场景（空态标题、数字指标）。

字重 300/400/500/600/700；字距 `tight -.025em` / `normal 0` / `wide .025em`；行高 `tight 1.25` / `snug 1.375` / `normal 1.5` / `relaxed 1.625`。

### 字体族

```css
--font-sans: var(--vscode-font-family, var(--font-sans-default));
--font-mono: var(--vscode-editor-font-family, var(--font-mono-default));
--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;

--font-sans-default:
  -apple-system-body, ui-sans-serif, -apple-system, system-ui, "Segoe UI", "Helvetica",
  "Apple Color Emoji", "Ar…";
/* 另一分支: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif */
--font-mono-default:
  ui-monospace, "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
```

Windows 上实际落到 `Segoe UI` + `Consolas`。`-apple-system-body` 排第一位是 macOS 的 Dynamic Type 字体。

### Markdown 与代码

```css
--markdown-font-size: var(--text-sm) | var(--text-base) | var(--text-lg) |
  var(--markdown-host-font-size) --markdown-space: calc(var(--markdown-font-size) / 4)
  --markdown-wide-block-max-width: 56rem | 64rem | 100% --codex-chat-font-size: 16px（browser 窗口）
  | var(--vscode-chat-font-size, var(--vscode-font-size, 13px))
  --codex-chat-code-font-size: var(
    --vscode-chat-editor-font-size,
    var(--vscode-editor-font-size, 12px)
  );
```

正文行高 `calc(var(--markdown-font-size) * var(--leading-relaxed))` = 1.625 倍；段落/列表间距由 `--markdown-space`（字号的 1/4）派生。代码内容另有一条硬下限：

```css
._CodeContent_1f1nx_6 {
  line-height: max(1.5em, calc(var(--spacing) * 5));
} /* ≥ 20px */
```

宽块（表格、代码）可以比正文宽：`_Probe_` 测量元素的宽度是
`calc(max(var(--thread-content-max-width), var(--markdown-wide-block-max-width) + 8rem) + var(--padding-toolbar) * 2)`。

### 对话区宽度

`--thread-content-max-width` 有 8 种取值，按窗口/密度切换：`40rem`、`42rem`、`48rem`、`var(--container-3xl)`（=48rem）、`480px`、`500px`、`100%`、`none`。窄窗口用 px 值，宽窗口用 rem，超宽直接放开。

## 3. 圆角与阴影

### 圆角是「基准 × 缩放」两段式

```css
--radius-xs: calc(var(--radius-xs-base) * var(--corner-radius-scale));
/* sm md lg xl 2xl 3xl 4xl 同理 */

--corner-radius-scale: 1; /* 默认 */
--corner-radius-scale: var(--codex-corner-radius-scale); /* 可被宿主覆盖 */
```

基准值有两套（按 surface 类型选用）：

| 档位  |          基准 A |    基准 B |
| ----- | --------------: | --------: |
| `2xs` | `.125rem` (2px) |         — |
| `xs`  |       `.125rem` |  `.25rem` |
| `sm`  |        `.25rem` | `.375rem` |
| `md`  |       `.375rem` |   `.5rem` |
| `lg`  |         `.5rem` | `.625rem` |
| `xl`  |        `.75rem` |  `.75rem` |
| `2xl` |          `1rem` |    `1rem` |
| `3xl` |       `1.25rem` |  `1.5rem` |
| `4xl` |        `1.5rem` |    `2rem` |

### `corner-shape: superellipse()`

Codex 用了 CSS 的 `corner-shape`（Chrome 139+ 的 squircle）：

```css
._Surface_1f1nx_1 {
  corner-shape: superellipse(1.1);
}
._cell_152et_1 {
  corner-shape: var(--codex-corner-shape, superellipse(1.5));
  transition: background-color 0.3s ease-out;
}
```

主 surface 用 1.1（接近正圆角），下拉/菜单单元格用 1.5（更“方”的超椭圆）。这让大圆角不显得软塌。

### 阴影

```css
--shadow-sm: 0 1px 2px -1px #00000014;
--shadow-md: 0 2px 4px -1px #00000014;
--shadow-lg: 0 4px 8px -2px #0000001a;
--shadow-xl: 0 8px 16px -4px #0000001f;

/* composer 专属，三层叠加：1px 描边 + 近距 + 远距大范围 */
--elevation-composer: 0 0 0 1px #0000000a, 0 2px 8px 0 #0000000a, 0 4px 40px 8px #00000006;
/* 另有 80px 扩散的变体，用于更宽的浮动场景 */
--elevation-composer: 0 0 0 1px #0000000a, 0 2px 8px 0 #0000000a, 0 4px 80px 8px #00000006;
```

composer 的阴影 alpha 极低（4%、4%、2%），靠 40–80px 的大扩散制造“浮起”而不是“投影”。

## 4. 颜色

### 色板是 OKLCH

```css
--color-red-400: oklch(70.4% 0.191 22.216);
--color-red-500: oklch(63.7% 0.237 25.331);
--color-red-600: oklch(57.7% 0.245 27.325);
--color-red-700: oklch(50.5% 0.213 27.518);
--color-orange-300: oklch(83.7% 0.128 66.29);
--color-orange-400: oklch(75% 0.183 55.934);
--color-green-400: oklch(79.2% 0.209 151.711);
--color-green-500: oklch(72.3% 0.219 149.579);
--color-blue-100: oklch(93.2% 0.032 255.585);
--color-blue-500: oklch(62.3% 0.214 259.815);
--color-slate-950: oklch(12.9% 0.042 264.695);
--color-gray-400: oklch(70.7% 0.022 261.325);
--color-black: #000;
--color-white: #fff;
```

只保留了实际用到的档位（不是完整 Tailwind 色板），全部在 OKLCH 空间，保证同等 lightness 下感知亮度一致。

### 语义层：surface / text / border

**Surface**

```css
--color-surface: var(--color-background-surface)
  --color-surface-secondary: var(--vscode-sideBar-background)
  --color-surface-tertiary: color-mix(in srgb, var(--color-surface-secondary) 92%, transparent)
  /* 或 var(--vscode-editor-background) */ --color-surface-elevated: var(--color-surface) |
  var(--vscode-menu-background)
  --color-surface-elevated-secondary: var(--vscode-dropdown-background)
  --color-surface-recovery: var(--color-background-recovery, var(--color-surface-secondary));
```

**Text**（透明度阶梯 100% → 80% → 65% → tertiary）

```css
--color-text:
  var(--color-text-foreground)
    --color-text-secondary: color-mix(in srgb, var(--vscode-foreground) 65%, transparent)
    --color-text-mode-toggle-inactive: color-mix(in oklab, var(--color-text) 80%, transparent)
    --color-text-tertiary: var(--vscode-descriptionForeground)
    --color-text-disabled: var(--vscode-disabledForeground)
    --color-text-info: var(--vscode-textLink-foreground)
    --color-text-danger: var(--vscode-errorForeground)
    --color-text-warning: var(--vscode-editorWarning-foreground) --color-text-{info,
  danger,
  warning}-soft / success / caution /
    discovery: var(--vscode-charts-{blue, red, orange, green, yellow, purple})
    --color-text-user-message: var(--color-text)
    --color-text-composer-primary: var(--color-text-primary-solid)
    --color-text-execution-output: var(--color-text)
    --color-text-execution-output-label: var(--color-text-tertiary)
    --color-text-execution-output-error: var(--color-text-danger)
    --color-text-execution-traceback: var(--white) --color-text-coachmark / danger-solid /
    success-solid: var(--white) --color-text-inverse: var(--vscode-button-foreground);
```

**Border**（透明度阶梯 4% → 5% → 8% → 12% → 16%）

```css
--color-border-light:
  color-mix(in oklab, var(--color-text-foreground) 5%, transparent) /* light */
    color-mix(in oklab, var(--white) 4%, transparent) /* dark */ 兜底 #ffffff0a
    --color-border: color-mix(in oklab, var(--color-text-foreground) 8%, transparent) 兜底 #ffffff14
    --color-border-heavy: color-mix(in oklab, var(--color-text-foreground) 12%, transparent)
    /* light */ color-mix(in oklab, var(--white) 16%, transparent) /* dark */ 兜底 #ffffff29
    --color-border-subtle: var(--color-border-light)
    --color-border-strong: var(--color-border-heavy)
    --color-border-focus: color-mix(in oklab, var(--blue-300) 70%, transparent) 兜底 #339cffb3
    --color-border-error: color-mix(in oklab, var(--red-500) 15%, transparent) 兜底 #e02e2a26 /
    #fa423e66 --color-border-warning: color-mix(in oklab, var(--orange-500) 15%, transparent) 兜底
    #e2550726 / #ff854966 --color-border-{danger,
  warning,
  primary}-outline: var(--vscode-inputValidation- * Border / --vscode-input-border)
    --color-border-application-menu-separator: color-mix(
      in srgb,
      var(--color-background-application-menu),
      var(--color-text-fo…)
    );
```

**按钮背景**是一条精确的百分比阶梯（primary / secondary / tertiary × base / hover / active / inactive）：

| 层级      | base                            | hover | active | inactive |
| --------- | ------------------------------- | ----- | ------ | -------- |
| primary   | `gray-1000` / `text-foreground` | 6–8%  | 10–16% | 3–24%    |
| secondary | `gray-0` 5%                     | 8%    | 12%    | 4%       |
| tertiary  | `gray-0` 3%（light 下甚至 0%）  | 7–10% | 10–20% | —        |

即：**主要按钮靠实色，次要按钮靠 5%→8%→12% 的白色/前景色叠加**，而不是不同的颜色。这是低对比度工作台界面的典型做法。

### 文件类型与产物配色

```css
--color-file-document: var(--blue-400) --color-file-image: var(--pink-400)
  --color-file-pdf: var(--red-400) --color-file-presentation: var(--red-400)
  --color-file-spreadsheet: var(--green-400) --color-artifact-powerpoint: var(--red-600)
  --color-media-foreground: var(--white) --color-media-background: var(--black)
  --color-media-control-background: color-mix(in srgb, var(--white) 35%, var(--gray-1000)) 兜底
  #626262 --color-media-control-hover: color-mix(in srgb, var(--white) 40%, var(--gray-1000)) 兜底
  #6e6e6e --color-background-coachmark: var(--blue-500)
  --color-background-callout-surface: var(--vscode-editorWidget-background);
```

## 5. VS Code 主题变量映射（本次新记录）

渲染层大量语义 token 直接指向 `--vscode-*`。这意味着**在 VS Code 扩展宿主里运行时，Codex 的面板会完全继承编辑器主题**，不需要单独的主题同步逻辑。用到的 VS Code 变量至少包括：

```
字体   --vscode-font-family  --vscode-editor-font-family
       --vscode-font-size    --vscode-chat-font-size
       --vscode-editor-font-size  --vscode-chat-editor-font-size
前景   --vscode-foreground   --vscode-descriptionForeground  --vscode-disabledForeground
       --vscode-button-foreground  --vscode-badge-foreground
链接/状态 --vscode-textLink-foreground  --vscode-errorForeground  --vscode-editorWarning-foreground
背景   --vscode-sideBar-background  --vscode-editor-background  --vscode-menu-background
       --vscode-dropdown-background  --vscode-editorWidget-background
输入   --vscode-input-border  --vscode-inputValidation-errorBorder  --vscode-inputValidation-warningBorder
图表   --vscode-charts-{blue,green,orange,purple,red,yellow}
```

独立桌面 app 里这些变量由应用自己定义（`.electron-light` / `.electron-dark`），因此同一套组件代码在两种宿主下都能取到值。

`[data-codex-window-type=browser]` 是**按窗口类型分主题**的选择器：内嵌浏览器窗口的 chat 字号固定为 `16px`（而不是继承 `--vscode-chat-font-size`），border/surface 也有一整套 browser 专属取值。这与 `architecture.md` §3 的窗口 `appearance` 体系对应。

## 6. 滚动、遮罩与虚拟化

```css
._compactHeaderScrollFade_1bcyj_1 {
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    black var(--edge-fade-distance, 1rem),
    black 100%
  );
}
._compactScrollMask_1bcyj_16 {
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    black var(--edge-fade-distance, 1rem),
    black calc(100% - var(--thread-scroll-padding-bottom, 0px)),
    transparent calc(100% - var(--thread-scroll-padding-bottom, 0px) + var(--spacing) * 5.5),
    transparent 100%
  );
}
```

`--edge-fade-distance` 有 1 / 1.5 / 2 / 2.5rem 四档，另有 `calc(var(--thread-content-margin, 24px) * 4)`（=96px）用于宽内容场景。上下两端都用 mask 淡出，让内容滚入 sticky header 与浮动 composer 时有柔和边界，而不是被硬切。

`._StickyActionBar_1f1nx_10` 的定位是 `top: calc(-1px - var(--thread-sticky-header-top, 0px))` —— 用 −1px 吃掉边框重叠。

滚动条默认透明、hover 显示细滑块，`scrollbar-width: thin`，部分容器 `scrollbar-gutter: stable` 防止出现滚动条时内容横向跳动。虚拟化细节见 [conversation-area.md](conversation-area.md) §3。

## 7. 动效

```css
._cell_152et_1 {
  transition: background-color 0.3s ease-out;
}
._animatedCell_152et_6 {
  animation: 0.52s cubic-bezier(0.22, 1, 0.36, 1) both _reveal_152et_1;
}
@keyframes _reveal_152et_1 {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    /* 1 */
  }
}
@keyframes _cadencedLoadingShimmerHighlight_a3m57_1 {
  from {
    transform: translate(50%);
  }
  to {
    transform: translate(-125%);
  }
}
```

- `cubic-bezier(.22, 1, .36, 1)` 是 easeOutQuint 类的“快出慢收”曲线，用于菜单/单元格揭示；
- 揭示动画从 `scale(.7)` 起，配合 opacity，时长 0.52s；
- 加载态用 shimmer 高光平移，而非骨架屏闪烁；
- 启动画面（`index.html` 内联）：logo 约 180ms fade-in、shimmer 约 2.2s，`prefers-reduced-motion` 下降级；
- 侧边栏 rail 图标是 **60fps / 40 帧的 Lottie**（见 [left-nav.md](left-nav.md) §1）；
- `resources\busy-bar.asar` 提供 6 档强度的状态药丸动画（`pill-0`…`pill-5` + `pill-neutral` + `pill-ultra-reveal` + `status-pending`）。

## 8. Shell、侧栏与 thread

- Electron 主 surface 有左上角圆角，thread 内容保留 top inset 以容纳 sticky header / 窗口 chrome；
- 内容区支持 sticky header、用户消息导航 rail、滚动到底部按钮与虚拟化渲染；
- transcript 按 turn 分组，工作过程（reasoning、工具调用、动态工具）与最终回答在展示层分离；
- 非 terminal turn 的 reasoning summary 默认折叠；terminal turn 优先展示 final answer 并汇总 file changes；
- 等待 approval 或 user input 的条目**持续显示**，避免用户错过阻塞点。

关键实现 bundle（26.903 名称）：

```
conversation/pages/local-conversation-page-3f93e4c62cc7.js
conversation/thread/local-conversation-thread-a2bcd054c9d2.js      （345 KB / 20525 行）
conversation/turn/local-conversation-turn-8acd99401e74.js
conversation/turn/local-conversation-thread-turn-entries-3bc0985c25c6.js
conversation/scroll/thread-virtualizer-4f61d89b50be.js             （两版逐字节相同）
conversation/scroll/thread-scroll-layout-4583603e4217.js + .css
conversation/nav-rail/thread-user-message-navigation-rail-app-4703491a5992.js + .css
app-shell/chrome/thread-app-shell-chrome-a031dfbe4962.js
```

## 9. Composer

- 独立浮动层，背景用 `surface-secondary` 的透明混合，配大圆角与专属 `--elevation-composer`；
- `--color-background-composer-action-bar` 按主题分别取 `--color-surface-secondary` / 暗色变体；
- 顶部 tray / expanded tray 承载附件、上下文、队列等扩展状态；展开时不改变 thread 主体的语义顺序；
- 输入为空时主按钮按上下文显示 Send / Stop / Resume；有文字时优先 Send；
- action bar 与 run-location dropdown 用 icon + tooltip 的紧凑控制；
- 底部工具条含 `Show context window usage` 指示器（设置项 `settings.general.contextUsageIndicator.label`）。

原生文案（26.903 复核，全部仍在）：

```
Send message                       Send message in background
Steer prompt                       Queue prompt
Submit the current composer prompt as a steering message
Submit the current composer prompt as a queued message
Follow-up behavior   Queue   Steer
Interrupt   Stop   Resume
Working   Working for {time}   You stopped after {time}
Queue paused because you interrupted
This queued message could not be sent
Retry, edit, or delete it to continue the queue
Submit without interrupting the model
```

## 10. Queue tray 与操作行

`composer/queue/queued-message-list-16b1f97652af.js`（18 KB）：紧凑可滚动 tray，而非大型卡片列表。

- 最大高度 `30dvh`，超出垂直滚动，配 `vertical-scroll-fade-mask` 与 `hide-scrollbar`；
- 拖拽重排，激活距离 **6px**；
- 每行用小尺寸 icon action + tooltip + 菜单 + 过渡动画承载 Retry / Steer(Send now) / Edit / Delete / Open in side chat；
- 队列总开关在 tray 内（`Turn on/off queueing`）；默认策略在设置里用 Queue/Steer 分段控件；
- 当前 turn 被打断后显示 `Queue paused because you interrupted` + `Resume`；
- 发送失败项显示 `This queued message could not be sent` + `Retry, edit, or delete it to continue the queue`；
- `onSendNowMessage` 的显示文案是 **Steer**，tooltip `Submit without interrupting the model` —— 因此 Steer 的交互含义是“立即注入但不停止模型”，不是 Stop + 新建 turn。

组件 props（静态可见）：`onEditMessage`、`onDeleteMessage`、`onSendNowMessage`、`onReorderMessages`、`onResumeInterruptedQueue`。

## 11. 可访问性

- 不熟悉的 icon 一律通过 tooltip 暴露语义；按钮尺寸稳定，不因文本或状态变化导致布局抖动；
- 大量 `*Accessible` 后缀的重复文案（如 `pullRequestSidePanel.checks.fixAllAccessible`）专为屏幕阅读器提供更完整的表述；
- 拖拽有等价的键盘路径与播报文案（`sidebarElectron.rowReorder` = `Moved to position {position} of {total}`）；
- 侧栏与活动区用 landmark（`App navigation`、`Activity`、`Scheduled task folders`、`Task tabs`）；
- 浏览器 tab 的媒体占用状态有 **14 种**组合的 accessible label（见 [side-panel.md](side-panel.md) §6）；
- `prefers-reduced-motion` 降级启动动效；
- 细滚动条、稳定 gutter、虚拟化与底部浮动按钮共同服务于高密度长对话浏览。

## 12. 复现

```powershell
# 导出共享 CSS 供检索（.work/ 不入库）
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.903.9818.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
cd codex_app_rev\code\tools
node asar-cli.mjs get $A "webview/assets/app-initial-49fc08c26651.css" "..\..\.work\big\app-initial-49fc08c26651.css"
node asar-cli.mjs get $A "webview/index.html"                         "..\..\.work\big\index.html"

# token 检索
rg -o --no-filename '\-\-(radius-[a-z0-9]*-base|corner-radius-scale|elevation-composer|thread-content-max-width|markdown-[a-z-]*)\s*:\s*[^;}]+' `
   ..\..\.work\big\app-initial-49fc08c26651.css | Sort-Object -Unique
```
