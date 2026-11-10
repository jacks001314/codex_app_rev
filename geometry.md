# 几何画板（GeoGebra）：模型 ↔ 画板的双向链路

> 产出时间：2026-10-05。作者：Syntropy 通用 Agent（本仓库 project 会话）。
> 证据分级沿用 [README.md](README.md) 的 A/B/C：A = 本仓库代码/文案与真机输出原文，B = 仓库源码（行号可能漂移），C = 结构推断。

---

## 0. 一句话结论

模型到画板这一半**不需要新协议**：它与「应用内嵌浏览器」（iab）共用同一条宿主动作通道
（上行 `ControlEvent domain="agent.browser"` 的 `BrowserToolCall`，下行 `ControlCommand domain="browser" action="result"`），
控制面只把它当**容器**用（`tool` + `arguments_json` 由宿主自己解释），桌面侧按 `tool` 名路由到对应的页面。
因此 `api/proto`、`api/gen_grpc` 一行都不用动。

双向都通了：

| 方向        | 入口                                       | 落地                                                            |
| ----------- | ------------------------------------------ | --------------------------------------------------------------- |
| 画板 → 模型 | 画板页「插入到对话框」                     | 构造/LaTeX/geogebra 命令块/PNG 进输入框（`geometry-export.ts`） |
| 模型 → 画板 | 动态工具 `geometry_draw` / `geometry_read` | 宿主动作通道 → 画板页 → `ggbApplet.evalCommand` / 读回构造      |

---

## 1. 链路

```
codex（Node 上）
  └─ 动态工具 geometry_draw / geometry_read        syntropy_node/engine/codex/geometry_tool.go
      └─ control.CallHostTool                      syntropy_node/control/host_tool.go
          └─ ControlEvent domain="agent.browser"   （BrowserToolCall，tool=geometryDraw/geometryRead）
              └─ Master 登记待取件                  syntropy_master/handle/settings/browser_tool.go
                  └─ 桌面主进程长轮询取件           apps/desktop/src/main/bridge/browser-tool-relay.ts
                      └─ IPC → 渲染层               desktop-bridge BrowserToolRequestSchema
                          └─ App 按 tool 分流        apps/desktop/src/renderer/App.tsx（handleBrowserToolRequest）
                              └─ 画板页控制器        apps/desktop/src/renderer/geometry/geometry-host.ts
                                  └─ webview 注入    geometry-applet.ts → ggbApplet.evalCommand / getAllObjectNames…
                                      └─ 回执原路回填（geometryText → toolResult → 模型）
```

## 2. 为什么复用宿主动作通道

- 控制面里 `BrowserToolCall` 的 `tool` / `arguments_json` 本来就是**不解释**的容器（见 `api/proto/model/control/control.proto`），
  iab 的十个工具名只是第一批使用者。新增 `geometryDraw` / `geometryRead` 两个值即可，协议零改动。
- 宿主「在场 / 不在场」的语义、长轮询取件、40s 待决 TTL、30s 调用超时全部复用，不需要各写一套。
- 路由是**桌面侧**的事：`BrowserToolRequestSchema` 是 `tool` 上的判别联合（`packages/desktop-bridge/src/contracts.ts`），
  所以「哪些工具归哪个页面」这个选择由契约层强制，漏一个就编译不过（`BrowserPage.tsx` 里那条显式 throw 就是这个穷尽性检查）。

## 3. Node 侧

| 项                     | 值                                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| 动态工具名（给模型看） | `geometry_draw`、`geometry_read`                                                                |
| 宿主侧工具名（桌面桥） | `geometryDraw`、`geometryRead`                                                                  |
| 上限                   | 一次 40 条命令、每条 400 字符（`maxGeometryCommands` / `maxGeometryCommandRunes`）              |
| 身份                   | `agentContextFromCall` 取 AgentID，`params.ThreadID` 取线程键（与 iab 同源）                    |
| 通道未接线             | 如实回 `the geometry board is unavailable: this node has no desktop app attached`，不假装画上了 |

空白命令会被丢掉而不是让整次作图失败；全空才是错误（模型常把一个空行塞进数组）。

## 4. 桌面侧

- 画板页是**单实例常驻页签**（`id` 固定 `geometry`，与浏览器页同构）：切走不销毁画板，模型的动作到达时
  `openGeometry()` 会把它切到前台，再由 `runGeometryHostTool` 等控制器就位。
- `geometry-host.ts` 只保存**一份**控制器（画板页挂载时登记、卸载时注销），所以「谁是执行者」没有歧义。
- 画板页没打开时动作会自己把页签打开；页签刚打开、webview 还没 `dom-ready` 时**先等加载完成再执行**
  （`GEOMETRY_WEBVIEW_READY_TIMEOUT_MS`）——这是真机踩到的第一个坑：那一刻调 `executeJavaScript` 会当场抛错，
  而模型下发的第一批命令正好落在这个窗口里。
- 画板地址（`GeometryPage.sourceUrl`）与「模型能不能写」（宿主动作分流处的 `allowModelWrite` 门）
  在「设置 → 工具集成 → 几何画板」里配置，与 drawio 页同构；落地细节见
  [drawio.md](drawio.md) §7。同组的第三块板（三维建模板 / JSCAD）走同一条设置管线但没有
  「服务地址」这一项——它不加载外部页面，脚本在渲染层 worker 里跑，见 [jscad.md](jscad.md)。

## 5. 真机证据

### 5.1 画板 API 只读探针（Chromium，直连 www.geogebra.org/geometry）

| 探测                               | 结果                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| `window.ggbApplet`                 | 存在（顶层全局，非 iframe），页面标题 `Geometry - GeoGebra`                                 |
| `evalCommand`                      | `A = (-2, 0)` / `p = Polygon(A, B, C)` / `f(x) = x^2` 全部返回 `true`，非法命令返回 `false` |
| `getAllObjectNames`                | `A B C p c a b f`（多边形自动生成三条边，与页内行为一致）                                   |
| `getObjectType` / `getValueString` | `p:triangle` / `p = 6`、`f:function` / `f(x) = x²`                                          |
| `getXML`                           | `format="5.0" app="geometry"`                                                               |

### 5.2 端到端（真 Master + 真 App Server + 真 worker 节点 + 打包后的 Electron）

`desktop_app/tests/e2e/geometry-tool.spec.ts`：本地假模型（Responses SSE）按 codex 实际发上来的工具清单
回一条 `geometry_draw` 的 function_call，再回一条 `geometry_read`。实测（2026-10-05，1 passed / 21.4s）：

````
模型看到的工具：… agent_admin_restart,goal_report_* ,geometry_draw,geometry_read

geometry_draw 回执：执行了 5 条命令，新建 A、B、C、p、c、a、b、f。

geometry_read 回执：
【几何作图】来源：geogebra。
视口：x ∈ [-4.16, 10.24]，y ∈ [-6.84, 5.56]
对象（8 个）：
- A：点，值 A = (-2, 0)
- B：点，值 B = (2, 0)
- C：点，值 C = (0, 3)
- p：多边形，定义 多边形 A, B, C，值 p = 6
- c：线段，定义 线段AB，值 c = 4
- a：线段，定义 线段BC，值 a = 3.6
- b：线段，定义 线段CA，值 b = 3.6
- f：函数，值 f(x) = x²
代数式（LaTeX）：$$x^{2}$$
重建命令（按顺序执行即可复原这张图）：```geogebra …```
````

判据都是**画板自己说的**：`新建 A、B、…` 来自 `evalCommand` 前后的对象名差集，「对象（8 个）」来自
`getAllObjectNames`，视口来自 `getCoordSystem`；不是调用方编的文本。

### 5.3 回归

改动集中在宿主动作通道的**失败回执**上（失败时把回执文本放进 `error`，否则 Node 只回一句
`the in-app browser action failed`），所以顺带跑了 iab 的整条 E2E：4 passed / 38.8s，无回归。

## 6. 已知边界与后续

- 画板默认加载 `https://www.geogebra.org/geometry`（`GeometryPage.tsx` 的 `DEFAULT_GEOMETRY_URL`）：
  **需要外网**；商用分发前应改为自托管资源并复核 GeoGebra 的许可（`sourceUrl` 这个 prop 已经预留）。
- 画板是第三方页面，注入脚本对拿不到的东西（跨源 iframe、找不到 applet）一律如实回 `no-applet`；
  读回的构造有上限（清单 80 条、命令块 200 行、字段 800 字符），避免把模型上下文撑爆。
- 一次调用串行执行：画板动作与 iab 共用一条取件循环，模型侧的一次调用 = 一次宿主往返。
