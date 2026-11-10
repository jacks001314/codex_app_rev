# 图表板（drawio）：模型 ↔ 图表板的双向链路

> 产出时间：2026-10-05。作者：Syntropy 通用 Agent（本仓库 project 会话）。
> 证据分级沿用 [README.md](README.md) 的 A/B/C：A = 本仓库代码/文案与真机输出原文，B = 仓库源码（行号可能漂移），C = 结构推断。

---

## 0. 一句话结论

模型到图表板这一半**不需要新协议**：它与「应用内嵌浏览器」（iab）、几何画板共用同一条宿主动作通道
（上行 `ControlEvent domain="agent.browser"` 的 `BrowserToolCall`，下行 `ControlCommand domain="browser" action="result"`），
控制面只把它当**容器**用（`tool` + `arguments_json` 由宿主自己解释）。因此 `api/proto`、`api/gen_grpc`
一行都不用动，新增的只是两个工具名（`drawioApply` / `drawioRead`）。

与 GeoGebra 的唯一结构性差别：**drawio 编辑器没有顶层全局对象**。`embed=1` 的编辑器只跟它的
parent / opener 用 `postMessage` 通信，而 `executeJavaScript` 进不去跨源 iframe，所以图表板页的
webview 顶层文档是**我们自己造的宿主页**（`about:blank` + 注入脚本），由它建一扇承载编辑器的
iframe 并充当 parent。见 §4。

---

## 1. 链路

```
codex（Node 上）
  └─ 动态工具 drawio_apply / drawio_read        syntropy_node/engine/codex/drawio_tool.go
      └─ control.CallHostTool                    syntropy_node/control/host_tool.go
          └─ ControlEvent domain="agent.browser" （BrowserToolCall，tool=drawioApply/drawioRead）
              └─ Master 登记待取件                 syntropy_master/handle/settings/browser_tool.go
                  └─ 桌面主进程长轮询取件           apps/desktop/src/main/bridge/browser-tool-relay.ts
                      └─ IPC → 渲染层               desktop-bridge BrowserToolRequestSchema
                          └─ App 按 tool 分流        apps/desktop/src/renderer/App.tsx（handleBrowserToolRequest）
                              └─ 图表板页控制器      apps/desktop/src/renderer/drawio/drawio-host.ts
                                  └─ webview 注入    drawio-bridge.ts → 宿主页建 iframe(embed.diagrams.net)
                                      └─ postMessage 官方 JSON 协议：load / merge / export
                                          └─ 回执原路回填（结构文本 → toolResult → 模型）
```

---

## 2. 与 GeoGebra 集成的差异

| 关注点           | GeoGebra 画板                               | drawio 图表板                                                        |
| ---------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| webview 顶层文档 | 第三方页面 `www.geogebra.org/geometry`      | **自有宿主页** `about:blank`（注入脚本建 iframe）                    |
| 与编辑器对话     | 顶层全局 `ggbApplet.evalCommand` / `getXML` | `postMessage` + `proto=json`（`init` / `load` / `merge` / `export`） |
| 数据形态         | 命令流（文本）                              | 文档（mxGraphModel XML）+ 拓扑结构 JSON                              |
| 读回             | `getAllObjectNames` 等逐对象 API            | `{action:'export', format:'xml'}` + `format:'json'`                  |
| 图片             | `getPNGBase64`                              | `{action:'export', format:'png'}` → data URI                         |
| 许可 / 外网      | 在线版商用需复核许可                        | 编辑器 Apache-2.0，可自托管（MVP 先用官方 embed）                    |

---

## 3. Node 侧

| 项                     | 值                                                                                                                                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 动态工具名（给模型看） | `drawio_apply`、`drawio_read`                                                                                                            |
| 宿主侧工具名（桌面桥） | `drawioApply`、`drawioRead`                                                                                                              |
| 上限                   | 一次 200 个节点、300 条连线、标签 200 字符、XML 200000 字符、id 64 字符                                                                  |
| 入参形态               | `{mode?: "merge"                                                                                                                         | "replace", title?, nodes?: [{id,label,x?,y?,w?,h?,shape?}], edges?: [{from,to,label?}], xml?}` |
| 校验范围               | 只做「规模与形状」：mode 白名单、id 字符集与唯一性、连线两端必须引用本次给出的节点、坐标必须是有限数；节点 / 连线怎么变成 XML 交给桌面端 |
| 通道未接线             | 如实回 `the diagram board is unavailable: this node has no desktop app attached`                                                         |

`xml` 给了就以它为准（仍是单页 mxGraphModel，长度有界、必须以 `<` 开头）；三条路径全空才是错误。

---

## 4. 桌面侧

- 图表板页是**单实例常驻页签**（`id` 固定 `drawio`，与浏览器、几何页同构）：切走不销毁，模型的动作
  到达时 `openDrawio()` 会把它切到前台，再由 `runDrawioHostTool` 等控制器就位。
- webview 的 `src` 是 `about:blank`（`isAllowedBrowserNavigation("about:blank")` 为真，`will-attach-webview`
  放行；partition 仍被安全钩子强制成 `persist:syntropy-browser-app`）。注入脚本第一次执行时建 iframe、
  挂 message 监听，并把 bridge 挂在访客的 `window.__syntropyDrawioBridge` 上；后续调用复用同一份。
- **ready 的定义**：收到 `init` → 先 `load` 一张空图 → 空图的回执到了才算 ready。这样紧跟其后的
  `apply` 不会和空图抢同一个 `load` 回执。
- 注入函数是**自包含**的（`toString()` 后不能引用模块作用域的值），所以 editorUrl / 超时 / 上限都从动作
  参数进来；模块作用域的类型可以随便用（编译后消失）。
- 编译（`drawio-model.ts`）是确定的：形状白名单 → style，缺省坐标按 4 列自动排布，标签**转义后**才进
  属性，控制字符丢掉。读回（`structureToDiagram`）按信任边界处理：只认 `pages[].cells[]` 里 `type` 为
  node / edge 的条目，字段白名单 + 限量（≤500 cell、单字段 200 字符），认不出的丢掉。
- 「插入到对话框」沿用几何页的写法：结构文本 + 可往返的 ```drawio XML 块 + PNG 附件。

---

## 5. 证据

### 5.1 真机探针：drawio 官方嵌入页（Chromium over CDP，直连 embed.diagrams.net）

| 探测                                                      | 结果                                                                                                                                                      |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 顶层直连 `embed.diagrams.net/?embed=1&proto=json`         | 页面加载正常（标题 `draw.io`，全局有 `EditorUi` / `Draw` / `App` / `mxGraph`），但**自 postMessage 不被编辑器接受**：发 `load` / `export` 没有任何回执    |
| 宿主页 + iframe（宿主是 `about:blank`，origin 为 `null`） | 编辑器正常向 parent 发 `{event:'init'}`（消息是 **JSON 字符串**，必须 `JSON.parse`）                                                                      |
| `{action:'load', xml, autosave:1}`                        | 回 `{event:'load', xml, bounds, scale, modelBounds, page, currentPage, ...}`                                                                              |
| `{action:'merge', xml}`                                   | 回 `{event:'merge', error:null, message:{action,xml}}`                                                                                                    |
| `{action:'export', format:'xml'}`                         | 回 `{event:'export', format:'xml', xml, bounds}`（最快，不渲染图片）                                                                                      |
| `{action:'export', format:'json'}`                        | 回 `{event:'export', format:'json', data:{version, currentPage, pages:[{id,name,cells:[{id,type:'layer'\|'node'\|'edge',parent,label,source,target}]}]}}` |
| `{action:'export', format:'png', scale:1}`                | 回 `{event:'export', format:'png', xml, data:'data:image/png;base64,…'}`                                                                                  |

结论（A）：宿主页 + iframe 这条设计成立，且**不要求宿主页有特定 origin**（`null` 也行）；官方协议
覆盖了 load / merge / read / png 四件本仓库需要的事。

### 5.2 本仓库自动化测试（B，全部通过）

| 位置                                                                    | 覆盖                                                                                                                                                                                 |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `syntropy_node/engine/codex/drawio_tool_test.go`                        | 入参归一化与转发、xml 优先、8 类非法输入、四类上限、nil 通道、宿主失败、工具名外泄                                                                                                   |
| `desktop_app/tests/component/drawio-bridge.component.test.ts`           | 用 `new Function` 跑**真实注入脚本**（假 DOM + 仿真编辑器协议）：建 iframe、复用 bridge、ready 时序、超时、忽略异地消息、merge/read 往返、replace 用 load、png、以及适配器的错误归类 |
| `…/drawio-model.component.test.ts`                                      | 编译确定性、坐标兜底、标签转义、xml 覆盖、非法输入、结构 JSON 归一化与限量                                                                                                           |
| `…/drawio-export.component.test.ts` / `drawio-insert.component.test.ts` | 提示文本各通道与上限；插入的文本 / 附件互不拖累                                                                                                                                      |
| `…/drawio-host.component.test.ts` / `drawio-page.component.test.tsx`    | 控制器唯一性、切前台、超时文案；页面静态渲染                                                                                                                                         |
| `desktop_app/tests/component/composer-at-menu.component.test.tsx`       | `@` 菜单新增「图表」入口与别名过滤                                                                                                                                                   |
| `desktop_app/tests/contract/browser-tool-request.contract.test.ts`      | drawioApply / drawioRead 的翻译契约：节点 / 连线原样通过、不落 tabId、200 节点 / 300 连线 / label 200 / XML 200000 上限、严格 schema                                                 |
| `desktop_app/tests/e2e/drawio-tool.spec.ts`                             | 打包 Electron 上的真机闭环（见 5.3）                                                                                                                                                 |

命令：`Set-Location syntropy_node; go test ./...`（全绿）；`Set-Location desktop_app; pnpm typecheck && pnpm lint && pnpm test:contract && pnpm test:component && pnpm test:unit`（全绿，仅有既有的 `local-files.contract.test.ts` 临时目录大小写用例与本改动无关，一直失败）。

### 5.3 打包 Electron 上的真机闭环（C，已跑通）

`desktop_app/tests/e2e/drawio-tool.spec.ts`：真 Master + 真 App Server + 真 worker 节点 + 打包 Electron，
节点侧由本地假 Responses 模型驱动（provider 的 base_url 指向用例自己起的 Responses 服务，不需要模型凭据）。
2026-10-05 在本机执行 `pnpm exec playwright test --config playwright.config.mjs tests/e2e/drawio-tool.spec.ts`
→ **1 passed**。实测证明：

- `about:blank` 的 `<webview>` 在真机上照常 `dom-ready`，`executeJavaScript` 能把宿主页注入脚本注进去；
- 注入脚本创建的 iframe 能载入 `https://embed.diagrams.net`，编辑器按协议回 `init`；
- 模型下发的 `drawio_apply`（3 个节点、2 条连线）真的画进编辑器，回执摘要是「图表板已更新：替换为 3 个节点、2 条连线」；
- `drawio_read` 读回 `【图表】来源：drawio。`，含 3 个节点、2 条连线（连线标签「有货」）与可复原的 `mxGraphModel` XML；
- 桌面上 `.drawio-page` 与 `webview[webviewrole="drawio"]` 各一。

复现：`Set-Location desktop_app; pnpm --filter @syntropy/desktop package:e2e; pnpm exec playwright test --config playwright.config.mjs tests/e2e/drawio-tool.spec.ts`。
（若本机缺 Node-API 头文件导致 `package:e2e` 的 native 步骤失败，可跳过该步骤直接跑 `pnpm exec cross-env NODE_ENV=production SYNTROPY_E2E_BUILD=1 electron-forge package`——native `.node` 产物已存在于 `apps/desktop/resources/native/`。）

---

## 6. 已知边界与后续

- 默认编辑器是 `https://embed.diagrams.net/…`：**需要外网**（与 GeoGebra 现状相同）。生产化应改为
  自托管 drawio 静态构建（Apache-2.0）；自托管后 iframe 与宿主同源，还能省掉对第三方域名的依赖。
- 宿主页是 `about:blank`，没有 CSP。它只承载「一个指向 drawio 的 iframe」，注入脚本也只做协议转发；
  但如果以后要在宿主页里放更多东西，应该改成由主进程提供带 CSP 的本地页面（或走 `app://` 白名单，
  但那需要动 `security/policy.ts`，MVP 刻意没动）。
- 读回上限：结构清单 ≤500 cell、提示文本里的 XML ≤20000 字符（超出改为省略并让模型按需再读）。
- 一次调用串行执行：图表板动作与 iab、画板共用一条取件循环，模型侧的一次调用 = 一次宿主往返。
- `drawio_apply` 的 `merge` 会把同 id 的 cell 视为更新（drawio 语义），`replace` 才清空重画；
  工具描述里已写清。

---

## 7. 设置入口：工具集成（2026-10-05 追加）

设置中心新增一组 **「工具集成」**（`settings-registry.ts` 的 `integrations` 组），下挂两页：
**图表板（drawio）** 与 **几何画板（GeoGebra）**（2026-10-06 又加了第三页
**三维建模板（JSCAD）**，它没有「服务地址」这一项，见 [jscad.md](jscad.md) §5）。
两块 webview 画板的参数同构，每页三项——都是改动即刻生效、不需要「保存」的本机偏好：

| 参数         | 落点                              | 作用                                                                                                                                                                                       |
| ------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 启用         | `toolIntegrations.drawio.enabled` | 关掉后侧边栏「图表」入口、`@` 菜单项、命令面板入口与 `drawio_apply` / `drawio_read` 一并停用（`drawioCanOpen = sketchCanOpen && enabled`；宿主动作直接回绝而不是丢给一个不会注册的控制器） |
| 允许模型写入 | `.allowModelWrite`                | 关掉后 `drawio_apply` 被拒，`drawio_read` 仍放行（只读不拦）                                                                                                                               |
| 编辑器地址   | `.editorUrl`                      | 注入脚本建 iframe 时用的地址；默认是 drawio 官方嵌入页（需外网），自托管时改成内网实例。改地址会让图表板页重建 webview，新地址即刻生效                                                     |

几何画板页同构：`geometry.enabled` / `geometry.allowModelWrite` / `geometry.boardUrl`（默认
`https://www.geogebra.org/geometry`，接 `GeometryPage` 的 `sourceUrl`）。

**落地方式（沿用现有设置管线，不新增 IPC）**：

- 契约：`desktop-bridge` 的 `ToolIntegrationSettingsSchema` +
  `DEFAULT_TOOL_INTEGRATIONS` + `normalizeToolIntegrations`；`settings.write` 的补丁允许只带
  改动的那一半（`ToolIntegrationSettingsPatchSchema`），`SettingsViewSchema` 里整块带出来。
- 存储：本机 `ui_state` 的 `settings`（与主题 / 字号同一条记录）。读取时**逐字段**兜底——本地库
  里的半截 / 旧数据只回退自己那一项，不会把另一块画板的配置一起抹掉；写入时也只覆盖补丁里带的字段。
- 页面：`SettingsPage.tsx` 的 `DrawioIntegrationSettings` / `GeometryIntegrationSettings`，由
  `settings-registry.ts` 驱动导航与搜索；每页还有一个「打开画板」按钮，先离开设置页再把侧边页签
  开到前台（入口与参数在同一页上闭环）。
- 生效点：`App.tsx` 的 `toolIntegrations` 派生值同时喂给三处——入口可用性、宿主工具分流处的
  拒绝分支、以及 `DrawioPage.editorUrl` / `GeometryPage.sourceUrl`（建模板页不接地址，只接两个开关）。

自动化证据：
`desktop_app/tests/component/tool-integrations.component.test.tsx`（三页静态渲染、停用提示、
无回调时不渲染入口行、`normalizeToolIntegrations` 兜底）、
`desktop_app/tests/contract/settings-tool-integrations.contract.test.ts`（补丁严格性 / 上限）、
`desktop_app/tests/contract/desktop-store.contract.test.ts`（写入只覆盖补丁字段、坏数据逐字段修复）、
`desktop_app/tests/component/settings-registry.component.test.ts`（导航顺序与分组）。

---

## 8. 文件入口：`.drawio` 直接用图表板打开（2026-10-05 追加）

打开一个 `.drawio` 文件的默认走法是文本预览（Monaco + `PLAINTEXT` 标签）——用户看到的是一屏
mxfile。现在两条打开链路都先按后缀分流（`renderer/drawio/drawio-file.ts` 的 `isDrawioFilePath`）：

| 入口                                    | 分流点                                | 落点                                                        |
| --------------------------------------- | ------------------------------------- | ----------------------------------------------------------- |
| 会话里的文件引用 / 产物卡片（项目文件） | `App.tsx` 的 `openProjectFilePreview` | 图表板页 + `source = {kind:"projectFile", projectId, path}` |
| 系统「打开方式」与本机文件选择器        | `App.tsx` 的 `openLocalFilePreview`   | 图表板页 + `source = {kind:"localFile", path}`              |

装载过程：`DrawioPage` 在 webview `dom-ready` 后读回文件文本（项目文件走 `readProjectFile`、
本机文件走 `readLocalFile`，都是只读通道），再用与「模型 → 图表板」同一条
`applyDiagramToWebview`（`mode:"replace"`）把内容交给编辑器——`.drawio` 就是 mxfile，编辑器能
直接 `load`。标题栏随后显示文件名。

已知边界（有意为之）：

- **不回写文件**：读回来的内容只落在图表板上，改名 / 保存到磁盘不在这一版里，标题栏也写明了
  「改动只留在图表板，不会写回文件」，避免用户以为已经在改文件。
- **单实例页签**：图表板只有一页，打开第二个 `.drawio` 是替换当前装载的文件（也会顶掉图表板上
  没保存的改动）；`source.nonce` 让同一个文件可以被重新打开并重新读盘。
- **「重新加载图表板」会重装文件**：重开 webview 后 `loadedSourceNonceRef` 被清掉，文件来源
  会再装一遍，而不是留一张空白图表板。
- **只在集成开启时生效**：「设置 → 工具集成 → 图表板」关掉后，`.drawio` 回到原来的文本/产物
  预览，不会因为分流而丢文件。
- 只认 `.drawio`；裸 `.xml` 仍走文本编辑器（通用 XML 交给图表板更容易误伤）。

自动化证据：`desktop_app/tests/component/drawio-file.component.test.ts`（后缀边界、展示名、
来源参数）与 `desktop_app/tests/component/drawio-page.component.test.tsx`（带来源时标题栏报
文件名并声明不回写）。
