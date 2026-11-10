# 对话框里的「绘图」(Sketch) —— 实现原理

对**本机当前安装**的 Codex desktop app 中「composer `+` 菜单 → 绘图 → 画布」这条链路的静态逆向。

- 目标版本：`OpenAI.Codex 26.908.4834.0`（安装目录 `C:\Program Files\WindowsApps\OpenAI.Codex_26.908.4834.0_x64__2p2nqsd0c76g0`）
- 采集时间：2026-09-15（Asia/Hong_Kong）
- 基线对比：本文档描述的绘图能力**不在** 26.903 基线里（见 [changelog-26.903.md](changelog-26.903.md)），是 26.904–26.908 之间新增的功能
- 采集边界：只读 `app.asar`，未修改安装目录，未读取凭据/设置/数据库/会话内容

## 0. 一句话结论

「绘图」不是一个 canvas 画图小控件，而是一套**自研的矢量绘图内核 + 会话式编辑器**，共三个独立 chunk：

| chunk                                           |    大小 | 职责                                                                                                                                 |
| ----------------------------------------------- | ------: | ------------------------------------------------------------------------------------------------------------------------------------ |
| `webview/assets/sketch-697303819ae1.js`         | 93.7 KB | **绘图引擎**：文档模型、手势状态机、撤销栈、橡皮擦光栅化、命中测试、渲染、导出 PNG                                                   |
| `webview/assets/composer-host-a07bf449407a.js`  | 49.6 KB | **模态编辑器 UI**：顶部工具条、左侧笔宽滑杆、底部色板、放弃确认框、附件飞入动画（导出 `SketchComposerHost` / `SketchDiscardDialog`） |
| `webview/assets/composer-state-1bc39c965aaf.js` |  4.8 KB | **会话状态**：多张草图、脏判定、保存/上传到 composer 附件、撤销删除的保留策略（导出 `createSketchComposerState`）                    |

链路：`+` 菜单里的注册项（`app-primary`）→ 懒加载上面三个 chunk → 画布 → 导出 PNG → 作为**图片附件**进 composer（带 `sketchId`，点缩略图可回到编辑器继续改）。

---

## 1. 入口：`+` 菜单里的那一项是怎么来的

### 1.1 注册表（不是硬编码菜单项）

composer 的 `+` 菜单和 `/`、`@` 菜单共用一张**动作注册表** `Ry(...)`（从共享 chunk `app-initial-*.js` 导入，本地别名 `kp`）。注册项形如：

```js
{
  id: "sketch",
  title: "Sketch",                                  // composer.sketch.title
  description: "Draw a sketch",                     // composer.sketch.description
  triggers: ["/", "@"],                             // 同时参与 / 与 @ 触发菜单
  searchAliases: ["draw", "drawing"],               // 菜单搜索别名
  Icon: { 16: MQe, 20: _Qe },                       // 16/20 px 图标
  requiresEmptyComposer: false,
  enabled: canSave && !isSubmitting,
  onSelect: () => { launcher.openNew(); track(MENU_SELECTED); },
}
```

`onSelect` 成功后会发埋点 `CODEX_SKETCH_INTERACTION_ACTION_MENU_SELECTED`。
同一张注册表里还有 `计划模式`（`composer.planSlashCommand.*`，"Turn plan mode off"）、`目标`、`归档/重命名/模型/项目` 等 —— 所以图 2 里「目标 / 计划模式 / 绘图」是并列关系（证据 A）。

### 1.2 菜单分组

菜单标题 `chatgptConversations.composer.contextMenu.add` = **"Add"**，sections 组成是：

```
[ 内置上下文动作(chatgpt-context) ] + [ 注册动作(去掉 id==='plugins') ] + [ plugins ]
```

- 内置上下文动作由 `jyr(...)` 生成 = 「文件和文件夹」(`composer.contextAction.filesAndFolders`)、「添加照片」、「附加 appshot」、「添加远程文件」；
- 「附加 Syntropy cluster desktop console」是用户配置里的 MCP app，走的是同一菜单的 app 通道；
- 「插件」段（Documents / PDF / Spreadsheets / Presentations）来自 `resources/plugins`，被强制排到最后（`vqn`/`yqn` 两个 filter）。

（证据 A：`app-primary` 中 `chatgptConversations.composer.contextMenu.add`、`composer.contextAction.filesAndFolders`、`vqn`/`yqn`）

### 1.3 懒加载

点选后并不会立刻有编辑器，`SketchLauncher` 先动态 import 两个 chunk（失败会 toast `chatgpt.sketch.load.error` = "Sketch couldn't be opened. Please try again"）：

```js
const [{ SketchComposerHost }, { createSketchComposerState }] = await Promise.all([
  import("./composer-host-a07bf449407a.js"),
  import("./composer-state-1bc39c965aaf.js"),
]);
```

结果按 composer 缓存（`p.current ??= {...}`），所以编辑器代码不在初始 bundle 里。Launcher 通过 `useImperativeHandle` 暴露 `{ isOpen, openNew, openAttachment, retainAttachmentForUndo }`（证据 A）。

---

## 2. 图 3 这个界面是怎么搭出来的

`SketchComposerHost` 用 `useSyncExternalStore(state.subscribe, state.getSnapshot)` 订阅会话状态，`state.active != null` 时渲染编辑器模态（移动端是 sheet，桌面端是 square dialog）。

模态内部是一个 `@container/sketch-canvas` 容器，**四层叠加**：

| 层         | 实现                                                                                              | 说明                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 画布表面   | `<Surface data-sketch-canvas-surface>`                                                            | 尺寸由 `ResizeObserver` 实测；用 `style={{ zoom: 1/d }}` 抵消 app 的 UI 缩放 |
| 已提交画布 | `CommittedCanvas` + `OverlayCanvas`                                                               | 已提交对象 / 预览、选区框、吸附辅助线、笔刷圆点                              |
| 文字层     | `TextLayer` / `TextEditor`                                                                        | 文字在 canvas 上渲染（导出用），同时用透明 `<textarea>` 覆盖做可编辑与无障碍 |
| 悬浮 UI    | 顶部工具条 / 左滑杆 / 底部色板 + 勾选按钮，`absolute` + `pointer-events-none` 包裹、子元素 `auto` | 与画布交互解耦                                                               |

### 2.1 工具条

工具顺序常量：桌面 `["select","pen","text","shapes","eraser"]`，移动端 `["pen","shapes","eraser"]` —— 与截图里的 指针 / 画笔 / T / 形状 / 橡皮 完全对应。
`shapes` 是一个 4×2 popover，形状集为 `["line","arrow","rectangle","ellipse","triangle","diamond","star","heart"]`。
按钮是 `aria-pressed` 的 segmented toggle，按下时会先 `commitPendingTextEdit()` 再切工具（证据 A）。

### 2.2 左侧竖直滑杆（截图里那条细线）

同一个组件按当前上下文切换三种语义：

| 场景 | 范围                         | 绑定                       |
| ---- | ---------------------------- | -------------------------- |
| 画笔 | min 2，max max(48, 当前值)   | `editor.setStyle({width})` |
| 文字 | min min(8,w)，max max(128,w) | `setStyle`（走文字字号）   |
| 橡皮 | 4 – 96                       | `editor.setEraserSize()`   |

拖拽期间的 `setStyle` 共享同一个 `historyGroup`（`sketch-stroke-width-N`），因此**一次拖动只产生一条撤销记录**。
当选中对象是「被部分擦除过的 ink」时滑杆禁用，提示文案：

> Width cannot be changed after partial erasing. Use the selection handles to resize.

—— 这句话直接暴露了擦除的实现代价，见 §3.3（证据 A）。

### 2.3 底部色板

- 13 个预置色（light）：`#000000 #6b7280 #92400e #dc2626 #f97316 #f59e0b #16a34a #0d9488 #06b6d4 #2563eb #4f46e5 #9333ea #db2777`；dark 模式把首色换成 `#ffffff`。
- 第 1 个是自定义色：`conic-gradient` 彩虹环 + 一个 `opacity-0` 的原生 `<input type="color">` 覆盖层（默认 `#a855f7`），`change` 事件回填。
- 在橡皮 / 未选中的选择工具下点颜色会**自动切回画笔**。
- 颜色写入同样用一个 session id 做 `historyGroup`。

### 2.4 撤销 / 重做与关闭

- 右上角 undo / redo，可用性来自快照 `canUndo/canRedo`，点击前先 `commitPendingTextEdit()`。
- 关闭时若「有未保存改动」（`objects.length > 0 && !isEqual(document, savedDocument)` 且无进行中手势）→ `SketchDiscardDialog`：`Discard changes?` / `Your changes won't be saved` / `Keep editing` / `Discard changes`。
- 编辑期间禁用对话框的 Escape 关闭、点击外部关闭，并阻止传给 composer 的 pointerdown。

---

## 3. 引擎（`sketch-*.js`）

导出的入口是 `createSketchEditor({document, tool, style, eraserSizePx, drawingWidthPx, textSizePx, textLayoutResources})`。

### 3.1 文档模型

```js
document = { schemaVersion: 1, objects: [ ... ] }
```

对象 kind 有两大类：

- **矢量路径类**：`stroke`（`points[]`，逐点 `pressure`）、`line`/`arrow`（`from`/`to`）、`rectangle`/`ellipse`/`triangle`/`diamond`/`star`/`heart`（`bounds`）
- **非路径类**：`text`（text + bounds + style + format{bold,italic,underline}）、`comment`（编号气泡）、以及擦除产物的 `ink`（`coverage`，见 §3.3）

默认样式 `{color:"#111827", width:12}`；文字字号默认 24，钳位 8–128；笔画宽度钳位 1–32；橡皮 4–96；id 由 `sketch-object-N` 分配器去重生成。

### 3.2 手势状态机与撤销

指针交互统一走 `pointerDown/Move/Up/Cancel`，活跃手势只有三种：`draw` / `move` / `resize`，并绑定 `pointerId`。

- **采样**：新点与上一点距离 `< 0.5/viewportScale` 就丢弃；笔压优先用触控笔 `pressure`（经 `sin` 曲线映射到 ±42% 线宽），没有压力时退化为**速度模拟**（`source: 'speed'`）。
- **移出画布**：记 `breakBefore`，把一笔在边界处断开，避免横穿画布时出现直线。
- **按住 Shift**：line/arrow 吸附到水平/垂直/45°。
- **移动吸附**：与其他文字对象做 left/center/right 与**等间距**吸附，产出 `snapGuides`（对齐线 + 等距标记）—— 和设计工具同款逻辑。
- **撤销栈**是补丁式的：
  ```js
  {
    (before, after, selectionBefore, selectionAfter, styleBefore, styleAfter, historyGroup);
  }
  ```
  `historyGroup` 相同且位于栈顶时**合并**（滑杆拖动、方向键连按）。快照里直接暴露 `canUndo/canRedo/erasurePreview/preview/snapGuides/cursor`。

### 3.3 橡皮擦：光栅化 + 时间切片

这是整套实现里最讲究的部分。按下橡皮时就地创建一个擦除任务 `createEraser(...)`，它把「矢量对象」转成「1px 高的水平 span 覆盖行」再做扫描线裁剪：

```
对象 ──yi(obj)──▶ ink{ coverage: { width, height, rows:[{y, spans:[x0,x1,...]}] } }
     ──bi(ink, 橡皮线段, 半径)──▶ 裁剪后的 ink（可能被切成多段，首段保留原 id，其余分配新 id）
```

- 任务是一个**生成器**，由 `setTimeout(...,0)` 驱动，每片预算 8 ms、最多 65536 步，期间 `yield` 让出主线程 —— 大文档擦除不会卡死 UI。
- 命中判定分三档：`comment` 直接用点距删除整个气泡；`text` 调 `glyphHitTester.hitTest(text, [a,b], width)` 按**字形像素**判断；其余对象走 coverage 裁剪（先按包围盒粗筛）。
- 预览节流：处理过程中回调 `onPreview`，快照里的 `erasurePreview` 会替换渲染文档，做到"边擦边看到结果"。
- 松手（`finish()`）后进入 `released` 状态：继续做最终全精度一遍，并在结束后切到 `apply:false` 的撤销语义（此时按撤销是**取消这次擦除**而不是回退上一步）。
- 结果 `ink` 对象**没有可编辑的路径了**，只能靠选区手柄缩放 —— 这就是 §2.2 那句提示文案的由来。

命令式 API 还有 `insertTextBox` / `insertComment` / `updateComment` / `pasteObject` / `deleteSelection` / `nudgeSelection` / `clear` / `undo` / `redo` / `replaceDocument`，剪贴板 MIME 是自研的 `application/x-openai-sketch-canvas-object`（只认自家格式），粘贴默认偏移 12px。

### 3.4 命中测试用 128px 瓦片缓存

选区/擦除的像素级判断复用同一套瓦片缓存：把对象渲染到一张 128×128、`willReadFrequently: true` 的离屏 canvas，`getImageData` 取 alpha 通道，按 `(objectId, tileX, tileY)` 缓存（LRU 上限 64 张，`WeakMap` 绑定对象），并处理 `isContextLost`。这样"点没点到这笔画"是**按真实像素**判断的，而不是包围盒（证据 A）。

### 3.5 导出 PNG

`editor.export({ backgroundColor, padding, scale, mimeType, clipBounds, outputBounds })`：

1. 求所有对象的并集包围盒（可由 `clipBounds` 裁剪）；
2. 加 padding（默认 24，composer 传 36）；
3. 容量保护：`maxDimension = 2048`、`maxPixelCount = 4e6`，超限用 53 次二分找到可行缩放；仍不行返回 `{kind:'too-large'}`；
4. 离屏 canvas 按 `setTransform` 渲染（`ink` 用 coverage 生成并缓存 `Path2D`；`stroke` 有压力时描可变宽轮廓，否则普通描边）；
5. 扫描 alpha 求**实际内容边界**裁掉空白；
6. 填背景色 → `toBlob('image/png')`，返回 `{kind:'success', blob, width, height, bounds}`。

其它返回值：`busy`（有进行中手势）、`empty`、`unavailable`（环境无 canvas/2d context）。渲染文字需要 `textLayoutResources`（`attachTextLayoutResources`），没有就返回 `unavailable`。

---

## 4. 从画布到 composer 附件

`createSketchComposerState(store, attachments)` 维护：多张草图（`Map<id, entry>`）、打开栈、`active`、`confirmingDiscard`、`transition`。

保存流程：

1. `editor.export({ backgroundColor: isDarkMode ? "#212121" : "#ffffff", padding: 36, scale: 1, mimeType: "image/png" })`
2. `new File([blob], fileName, { type: "image/png" })`
   - Codex 文案：`Codex Sketch.png`（`composer.sketch.fileName`）
   - ChatGPT 文案：`ChatGPT Sketch {date} {time}.png`（会去掉控制字符、把 `/` 换成 `-`）
3. 交给 composer 的附件系统：`save(file, { id, replaceUploadId, signal, isAvailable, onQueued, onComplete })`，落地成一条**图片附件** `{ id, src, sketchId, filename }`，重新保存时用 `replaceImageId = replaceUploadId` 原地替换。
4. 成功后把当前文档记进 `savedDocument`，`uploadId` 记进该草图条目。

几个配套行为：

- **点缩略图回编辑**：附件卡片如果带 `sketchId`，点击不弹图片灯箱，而是 `onSketchEdit(uploadId)` → `state.openAttachment(uploadId)`。**前提是该附件还在，且编辑器实例还在内存 Map 里**（换句话说：同一次 app 会话内可回编辑，重启后只能看图片）。
- **撤销删除的保留**：`retainAttachmentForUndo(uploadId)` 用引用计数（`undoRetentionCount`）压住草图条目，只有计数归零且附件真的被删了才销毁编辑器 —— 这样"删掉附件再撤销"能拿回可编辑的草图。
- **飞入动画**：保存时算出一张 `transition{ source:{left,top,width,height,borderRadius,backgroundColor}, imageUrl, targetUploadId }`，`SketchTransition` 用 `createPortal` 往 `document.body` 插一张 `fixed` 的 `<img>`，`requestAnimationFrame` 让它在画布框 → 附件卡之间沿正弦弧线平移+轻微旋转，结束后 `URL.revokeObjectURL`。
- **埋点**：`CODEX_SKETCH_INTERACTION_ACTION_{MENU_SELECTED,OPENED,REOPENED,SAVE_COMPLETED}`；上传分三步 `CODEX_SKETCH_UPLOAD_STEP_{CREATE_FILE_ENTRY,BLOB_UPLOAD,MARK_UPLOADED}`，状态 succeeded/failed/canceled/blocked，错误类型 http/network/unknown。ChatGPT 风味的实现改用 `CHATGPT_SKETCH_COUNTER_*`。
- **首页建议**：`SketchHomeSuggestions`（`followup-suggestions-*.js`）仅在「composer 为空 **且全部附件都是草图**」时出现，拉 `/images/prompt-items?surface=sketch_followups`。

---

## 5. 什么时候能用（门控）

```js
eligibility = f({
  isFileUploadAvailable,
  remainingFileUploads,
  isTemporaryChat,
  canModelUploadSketch,
  hasReachedMaxFiles,
});
// canEditSketch = 上传可用 && (剩余额度 == null || > 0) && !临时会话 && 模型支持
// canOpenSketch = canEditSketch && 未达文件上限
```

其中 `isFileUploadAvailable` 在本机 build 里的判定包含 **`authMethod === "chatgpt"` 且有 ChatGPT token**（即用 API key 登录时不可用）、未禁用、非临时会话。`canModelUploadSketch` 由共享模型元数据模块按当前模型 slug 判定。
Codex 侧的 Launcher 另外要求 `canOpenSketch = canSave && !isSubmitting`（提交中不能开新草图），而 `canEditSketch = canSave`（已存在的草图仍可回编辑）。证据等级 A（判定条件），**实际可见性还受账号/服务端能力的约束**。

---

## 6. 与其它 chunk 的边界（避免误判）

- `webview/assets/drawing-frame-geometry-*.js` 名字很像，但它被 **Popcorn Office 预览**（Word/Excel/PPT 面板）导入，是文档里图形框的几何/手柄工具，**与绘图无关**。
- `rough.esm-*.js`（手绘风格渲染库）被图表/可视化使用，草图不使用它。
- i18n 里 `chatgpt.sketch.composer_modal.eraser_size.aria_label` 的描述提到 "…in the ChatGPT sketch editor **or image markup editor**"，说明这套编辑器在 ChatGPT 侧同时被图片标注复用；本机 Codex build 里**只找到 composer 草图这一条入口**（证据 C）。

---

## 7. 复现

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.908.4834.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
$D = "<repo>\codex_app_rev\.work\sketch908"; New-Item -ItemType Directory -Force $D
cd <repo>\codex_app_rev\code\tools
node asar-cli.mjs get $A "webview/assets/sketch-697303819ae1.js"          "$D\sketch.js"
node asar-cli.mjs get $A "webview/assets/composer-host-a07bf449407a.js"  "$D\composer-host.js"
node asar-cli.mjs get $A "webview/assets/composer-state-1bc39c965aaf.js" "$D\composer-state.js"
node asar-cli.mjs get $A "webview/assets/app-primary-17b54400f32a.js"    "$D\app-primary.js"
```

抽出的原始文件校验和（SHA-256）：

| 文件                                   |   大小 | SHA-256                                                            |
| -------------------------------------- | -----: | ------------------------------------------------------------------ |
| `sketch-697303819ae1.js`               | 95 941 | `779690a997a48917a3307f9f75ec44189770cf30cf6dccb78616c7c28e4ad1bc` |
| `composer-host-a07bf449407a.js`        | 50 790 | `a7cedf5541f5018de6fce267cb1bb35cb5cb00a71872508f980b68595e5055b8` |
| `composer-state-1bc39c965aaf.js`       |  4 877 | `46f5843e87119fa1bb07da0eb577e45223503ad87dce70da0ddfb1991ba0f940` |
| `sketch-69b3386ad884.css`              |  2 958 | `a3295b4c9976cdb1c8ba255992a4442ffdaad241c6f34ba48fe951f27b060f4f` |
| `followup-suggestions-1bd67b85e2e6.js` |  4 227 | `23696e38a54a0d0e75bfc7ad27c0b27b0c9fcec3f9a7b37f19f69eebfea175de` |

格式化：≤1.2 MB 用仓库内 Prettier（`codex_app_rev\.work\sketch908\fmt.mjs`），大共享 bundle 用 `lightformat.mjs`。
`.work/` 是 gitignore 的中间产物目录，上面的抽取结果不随仓库提交。

## 8. 在本仓库（Syntropy desktop_app）的落地

上面 1–7 节是对 Codex desktop app 26.908 的逆向结果；本节记录这套能力在 `desktop_app/` 里的位置与
有意保留的差异，方便后续对照与升级（app 升级后 chunk hash 会变，但文件前缀规则不变）。

### 8.1 文件映射

| 上游 chunk / 导出                           | 本仓库                                                                                                                                                                                                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sketch-*.js`（绘图引擎）                   | `desktop_app/apps/desktop/src/renderer/sketch/sketch-editor.ts`（入口 `createSketchEditor`），按职责拆成 `sketch-types/objects/geometry/transforms/ink/pressure/text/glyph-hit-test/hit-test/render/export/canvas`        |
| `composer-host-*.js` → `SketchComposerHost` | `sketch/SketchComposerHost.tsx`                                                                                                                                                                                           |
| 模态 `jt`                                   | `sketch/SketchEditor.tsx`（导出 `SketchEditorModal`）                                                                                                                                                                     |
| 工具条 `vt` / 工具按钮 `yt` / 形状九宫格    | `SketchEditor.tsx` 的 `DESKTOP_TOOLS` / `MOBILE_TOOLS` / `SHAPE_TOOLS` + `styles/sketch.css` 的 `.sketch-tools` / `.sketch-tool` / `.sketch-shapes`                                                                       |
| 滑杆包装 `bt` + Radix Slider                | `sketch/SketchVerticalSlider.tsx`（不引 Radix，按同一语义重写：细线 ↔ 梯形展开、一次交互一个 `historyGroup`、`preserveTextFocus`、Home/End/PageUp/PageDown/方向键、按下即跳值、点在圆点上只聚焦）                         |
| 色板 `tt`                                   | `SketchEditor.tsx` 的 `LIGHT_PALETTE` / `DARK_PALETTE` + `.sketch-palette` / `.sketch-swatch`；自定义色用原生 `<input type="color">`，`click` 开一个会话 `historyGroup`、`input` 连续落色、`change` 提交、`cancel` 只收尾 |
| `SketchDiscardDialog`                       | `sketch/SketchDiscardDialog.tsx`                                                                                                                                                                                          |
| 飞入动画                                    | `sketch/SketchTransition.tsx`（`createPortal` 到 `document.body`，正弦弧线 + `corner-shape` 跟随目标卡）                                                                                                                  |
| `composer-state-*.js`                       | `sketch/sketch-composer-state.ts`（多草图、脏判定、保存/就地替换、`retainAttachmentForUndo` 引用计数、`transition`）                                                                                                      |
| 埋点常量与分步器 `UXn`                      | `sketch/sketch-telemetry.ts`                                                                                                                                                                                              |
| `sketch-*.css`（引擎层样式）                | `styles/sketch.css`（z-index 层级、笔刷游标、批注气泡与气泡指针）                                                                                                                                                         |
| `+` 菜单里的注册项                          | `apps/desktop/src/renderer/App.tsx` 的 `composer-add-menu` 段 + `openSketch()`                                                                                                                                            |

### 8.2 门控

上游那条 `isFileUploadAvailable && authMethod === "chatgpt" && canModelUploadSketch && !hasReachedMaxFiles`
的链路在本仓库退化为附件能力判定：

| 上游            | 本仓库（`App.tsx`）                  |
| --------------- | ------------------------------------ |
| `canEditSketch` | `attachmentInputEnabled && !sending` |
| `canOpenSketch` | 上面再叠 `attachments.length < 10`   |

### 8.3 有意保留的差异

1. **附件管线**：上游云端是 `create-file-entry → blob-upload → mark-uploaded` 三段；本仓库是本地管线，
   只有「读文件 + 落条目」与「登记到 composer」两段，但分步埋点仍按同一契约上报
   （起始的 `upload/started` 由 `createSketchUploadTelemetry` 自动补，`finish` 会补齐没有结束事件的那一步）。
2. **埋点 sink**：本仓库没有分析后端，`setSketchTelemetrySink` 默认空实现，测试可接管断言；
   事件名、动作枚举、错误类型与上游一一对应，会话状态通过附件端口的 `track(action)` 上报。
3. **`SketchHomeSuggestions`（首页草图建议）没有移植**：它依赖服务端 `/images/prompt-items?surface=sketch_followups`
   下发建议标题与 `prompt_text`，本仓库没有这条接口，硬编码等于臆造文案。
4. **`+` 菜单**：上游的 `+` / `/` / `@` 共用一张动作注册表（`Ry(...)`，带 `triggers` / `searchAliases`）；
   本仓库的 `+` 菜单是自研列表，只保留「文件和文件夹」与「绘图」，文案与截图一致（`绘图 绘制草图`）。
5. **视觉 token**：上游把色块选中环写死 `#2c67c5`、环形偏移写 `ring-offset-white` / `#212121`；
   本仓库映射到 `--accent` 与画布底色（浅色 `#ffffff` / 深色 `#212121`）。其余逐项对齐：20px 色块、
   8px 色块间距、选中 `ring-2 + ring-offset-2`、未选中悬停 `scale(1.05)`、色板无卡片外壳、
   工具按钮与勾选按钮同尺寸（本仓库 composer 的 30px）。

## 9. 局限

1. **纯静态分析**，没有运行时插桩；Statsig feature flag、账号能力与后端下发的 model metadata 会改变实际可见性。
2. 标识符已被压缩，本文里的 `createSketchEditor`、`createEraser` 等名字是**按语义重命名**，不是原始名。
3. 本文只对 26.908.4834.0 负责；app 升级后 chunk hash 会变（文件名规则不变，去掉 hash 的前缀仍然可用）。
4. 未逆向上传链路的服务端部分（`codex.exe` app-server 的附件接口），`sketchId` 在服务端如何存储未验证。
