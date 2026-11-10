# 三维建模板（JSCAD）：模型 ↔ 3D 建模页的双向链路

> 产出时间：2026-10-06。作者：Syntropy 通用 Agent（本仓库 project 会话）。
> 证据分级沿用 [README.md](README.md) 的 A/B/C：A = 本仓库代码/文案与真机输出原文，B = 仓库源码（行号可能漂移），C = 结构推断。
> 与 [drawio.md](drawio.md)、[geometry.md](geometry.md) 同族：这是第三块「工具集成」板，链路同构，差别在**没有第三方页面**。

---

## 0. 一句话结论

- 链路**不需要新协议**：与「应用内嵌浏览器」「几何画板」「图表板」共用同一条宿主动作通道
  （上行 `ControlEvent domain="agent.browser"` 的 `BrowserToolCall`，下行 `ControlCommand domain="browser" action="result"`），
  `api/proto`、`api/gen_grpc` 一行没动。
- 与前两块板最大的差别：**建模板不加载任何外部页面**。脚本是纯 JS 的 JSCAD 建模代码，
  在渲染层一个 **sandbox worker** 里执行，几何、预览与导出（STL / 3MF）全部在本地算出来。
- 为此新增的唯一安全面：`app://renderer/assets/jscad-worker*.js` 这一份响应头的 CSP 多一个
  `'unsafe-eval'`（`script-src 'self' 'unsafe-eval'`），其余资源与页面本身保持 `script-src 'self'`。

| 方向          | 入口                                  | 落地                                                           |
| ------------- | ------------------------------------- | -------------------------------------------------------------- |
| 建模板 → 模型 | 页面「插入到对话框」                  | 脚本文本 + 尺寸/体积/三角面统计进输入框（`jscad-template.ts`） |
| 模型 → 建模板 | 动态工具 `jscad_write` / `jscad_read` | 宿主动作通道 → 建模板页 → `renderJscadSource` / 读回脚本与统计 |

---

## 1. 链路

```
codex（Node 上）
  └─ 动态工具 jscad_write / jscad_read            syntropy_node/engine/codex/jscad_tool.go
      └─ control.CallHostTool                    syntropy_node/control/host_tool.go
          └─ ControlEvent domain="agent.browser" （BrowserToolCall，tool=jscadWrite/jscadRead）
              └─ Master 登记待取件                syntropy_master/handle/settings/browser_tool.go
                  └─ 桌面主进程长轮询取件         apps/desktop/src/main/bridge/browser-tool-relay.ts
                      └─ IPC → 渲染层             desktop-bridge BrowserToolRequestSchema
                          └─ App 按 tool 分流     apps/desktop/src/renderer/App.tsx（handleBrowserToolRequest）
                              └─ 建模板页控制器   apps/desktop/src/renderer/jscad/jscad-host.ts
                                  └─ worker 执行  jscad-runtime.ts → jscad-worker.ts
                                      └─ 脚本 → 几何 → STL/3MF + 统计（jscad-render.ts）
                                          └─ 回执原路回填（toolResponse → toolResult → 模型）
```

节点侧的装配是 `agent/jscad_host.go` 的 `applyJscadHostHandler`，与 `geometry_host.go` / `drawio_host.go`
逐行同构：`LocalRuntimeDriver` 在装配 `AgentCodexOptions` 时注入通道（`runtime_driver.go` 两处：
首启与热替换），`dynamic_tools.go` 把 `jscad_write` / `jscad_read` 路由到 `jscad_tool.go`。

## 2. 选型：为什么是 JSCAD，而不是 wazero + OpenSCAD

最初的方向是「把 OpenSCAD 编成 wasm，用 `wazero` 在 Node 里跑」，理由是它是一条成熟的
纯本地建模链路。实测否掉了，证据都是本机探针（`.tmp-wazero-probe/`，可重跑）：

### 2.1 wazero 只能跑 WASI preview1，而这些 wasm 都是 Emscripten 的 JS-glue 构建

`inspect` 探针直接用 wazero 解析模块的导入面（`go run ./inspect <wasm>`）：

| 模块                                              | 大小     | 导入面                         | 空宿主实例化                 |
| ------------------------------------------------- | -------- | ------------------------------ | ---------------------------- |
| `oscad-embedded.wasm`                             | 9.85 MB  | `[NON-WASI] a`: **155 个函数** | `module[a] not instantiated` |
| `openscad-wasm@0.0.4`（lofcz 的 `openscad.wasm`） | 10.59 MB | `a`: **156 个函数**            | 同上                         |
| `openscad-wasm-prebuilt-1.2.0`                    | 7.80 MB  | `a`: **157 个函数**            | 同上                         |
| `manifold-3d`（`manifold.wasm`）                  | 0.52 MB  | `a`: **34 个函数**             | 同上                         |

四个模块的导入模块名都只有一个 `a`，函数名是压缩后的 `$`、`Aa`、`B`、`Cc` 之类——它们是
Emscripten 生成的 JS glue（`syscalls` / `invoke_*` / 内存与异常桥接）要提供的宿主函数，
不是 WASI 接口。wazero 提供 WASI preview1/preview0 与它自带的 `imports/*`，没有（也不打算有）
一份「OpenSCAD 的 Emscripten glue」，因此**不自己实现这 155+ 个函数就跑不起来**；那等于复刻
上游的 `openscad.js`，维护成本远高于收益。

同一台机器上的 `runner` 探针证明 wazero 本身没问题：WASI 命令行模块（`guest/main.go` 编出的
`probe-guest.wasm`）在 wazero 下 argv / env / stdout / stderr / 退出码 / 目录 preopen 与
context 超时中断全部正常。**结论是「模块不是 WASI 模块」，不是「wazero 不行」**。

### 2.2 JSCAD 是纯 JS，零 wasm、零依赖

`@jscad/modeling@2.13.0` 是本仓库已安装依赖，实测：

| 项         | 值                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| 包体积     | 1.52 MB（源码 JS）                                                                                    |
| 运行时依赖 | 无（`dependencies` 为空；`stl-serializer` / `3mf-serializer` 各 0.03 MB，后者多带 `fflate` + `onml`） |
| wasm       | **0**                                                                                                 |
| 运行环境   | Node 与浏览器通用（同一份库既能在 worker 里跑，也能被 Node 测试直接调用）                             |

对本地集成来说这三点比「官方生态更大」重要得多：不需要额外二进制、不需要下载与校验资源、
不需要为 wasm 再放宽一条 CSP，桌面应用直接随包分发。

### 2.3 几何正确性与性能实测

退化几何（BSP 类 CSG 的经典弱项）三例对照，JSCAD 与 OpenSCAD 的 `CGAL` 后端结果一致：

| 用例                         | JSCAD              | OpenSCAD CGAL      | OpenSCAD manifold           |
| ---------------------------- | ------------------ | ------------------ | --------------------------- |
| 共面切割（共享一个面减一半） | 12 面，x ∈ [-5, 0] | 12 面，x ∈ [-5, 0] | 12 面                       |
| 完全重合相减（结果应为空）   | 0 面               | 0 面               | 0 面                        |
| 面贴面（零厚度接触）         | 12 面              | 12 面              | **18 面**（多了零厚度几何） |

非有限顶点：三例都是 0。也就是说 JSCAD 在这里没有出现 NaN / 自交产物，退化输入给的是
确定的正确结果（或确定的空结果）。

性能（同机同日，Node 里跑同样的两个模型；OpenSCAD 走 Emscripten + manifold 后端）：

| 模型                                | JSCAD（CSG + 二进制 STL） | OpenSCAD manifold        | 备注          |
| ----------------------------------- | ------------------------- | ------------------------ | ------------- |
| simple：20×20×10 方块减 r6 圆柱     | 9 ms + 3 ms               | 21 ms 实例化 + 8 ms 渲染 | 量级相同      |
| heavier：r12 球减 12 根 r2 圆柱     | 610 ms + 36 ms            | 同上 + 350 ms            | JSCAD 约 1.8× |
| stress：r12 球（96 段）减 24 根圆柱 | 1027 ms + 34 ms           | 未测                     | 内存 324 MB   |

结论：JSCAD 的 BSP 实现比 manifold 慢约 2 倍、内存更高（heavier 例 rss 252 MB vs 115 MB），
但都在「点一次渲染等一下」的交互预算内（`JSCAD_RENDER_TIMEOUT_MS = 20s` 是上限，不是常态）。
换来的是**零二进制、零 CSP 放宽、模型侧只交换脚本文本**。

还有一条方向性理由：JSCAD 的模型就是**代码**（`function main()` + `require('@jscad/modeling')`），
而「让模型写脚本生成各种三维模型」这个需求本身就是写代码——参数化、可迭代、可让模型自己
读回统计再做下一步。OpenSCAD 之于模型其实也是代码，但它承担了上面 2.1 的成本。

## 3. 执行位置与 CSP（本次新增的唯一安全面）

### 3.1 为什么要 eval，为什么必须放在 worker 里

JSCAD 的入口是**脚本**，执行任意脚本只有 `new Function` 一条路。有两处候选位置：

| 位置                    | 结论                                                                                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 主进程                  | 否决：脚本是同步 CPU 代码，跑飞了要拖死整个应用（含 IPC）；而且要给它 `require`/文件系统边界                                                               |
| 渲染进程主线程          | 否决：同样跑飞就卡死界面，且页面 CSP 必须整页放宽 `'unsafe-eval'`                                                                                          |
| **渲染进程里的 worker** | **采用**：跑飞了由宿主 `terminate()` 掉整个 worker 再重建；worker 里没有 Node、没有宿主文件系统、拿不到 preload 的 IPC；CSP 只需要给这一份 worker 脚本放行 |

渲染进程本身是 `sandbox: true` + `contextIsolation: true` + `nodeIntegration: false`，所以
「worker 里没有 Node」不是设计承诺而是运行时事实。

### 3.2 CSP 实测（Electron 真机，`.tmp-wazero-probe/electron-csp-test/`）

探针是一个最小 Electron 应用：`app://` 自定义协议，页面与 worker 脚本分别带不同的响应头，
对照同一份页面里的两种 eval：

| 探测                                                                                                                               | 结果                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 页面里 `new Function("return 1 + 1")`（页面 CSP = `script-src 'self'`）                                                            | **被拦**（对照组成立：整页没有放宽）        |
| 同一页面 `new Worker("./jscad-worker.js")`，该 worker 脚本响应头带 `'unsafe-eval'`，worker 内 `new Function("a","b","return a*b")` | **放行**，返回 `{eval:"allowed", value:42}` |

结论：CSP 的脚本来源判定跟随**资源自身的响应头**，所以可以做到「只放行一份 worker 脚本、
页面不放行」——这正是 `policy.ts` 的实现方式。

### 3.3 实现与范围钉死

`apps/desktop/src/main/security/policy.ts`：

```ts
const JSCAD_WORKER_ASSET_PATTERN = /\/assets\/jscad-worker[^/]*\.m?js$/;

export function contentSecurityPolicyForAsset(pathname: string): string {
  if (!JSCAD_WORKER_ASSET_PATTERN.test(pathname)) return APP_CONTENT_SECURITY_POLICY;
  const relaxed = APP_CONTENT_SECURITY_POLICY.replace(
    "script-src 'self'",
    "script-src 'self' 'unsafe-eval'",
  );
  // 兜底：CSP 文案改了、替换没命中时，宁可不放行也不能悄悄返回一份半成品策略。
  return relaxed === APP_CONTENT_SECURITY_POLICY ? APP_CONTENT_SECURITY_POLICY : relaxed;
}
```

`app-protocol.ts` 的资源分支改成 `contentSecurityPolicyForAsset(new URL(request.url).pathname)`，
其余分支（图片、404、入口）继续用全局策略。

放行范围的断言在 `desktop_app/tests/security/electron-security.security.test.ts`
（A/B，已通过）：只有放宽后的策略**恰好等于**「全局策略替换掉这一个 token」才允许，
`/index.html`、`/assets/main-*.js`、`/assets/other-worker-*.js`、`/assets/jscad/*.js`、
`*.js.map` 全部必须与全局逐字节相同。

有意不做精确哈希匹配：资产目录是 Vite 的构建产物，没有用户可控的文件名；打包器改名时
静默失效（表现是建模板报「eval 被拦」）比多放行一个构建产物更难查。

## 4. Node 侧

| 项                     | 值                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------- |
| 动态工具名（给模型看） | `jscad_write`、`jscad_read`                                                           |
| 宿主侧工具名（桌面桥） | `jscadWrite`、`jscadRead`                                                             |
| 上限                   | 单脚本 200000 字符（`maxJscadSourceRunes`，与桌面 `JSCAD_SOURCE_MAX_LENGTH` 一致）    |
| 身份                   | `agentContextFromCall` 取 AgentID，`params.ThreadID` 取线程键（与 iab 同源）          |
| 通道未接线             | 如实回 `the 3D modelling board is unavailable: this node has no desktop app attached` |

`jscad_write` 只收一个 `source` 字符串，**内容不做 trim**（缩进与空行是代码本身的一部分），
只有整体为空才算错误；`jscad_read` 是无参工具。

## 5. 桌面侧

- 建模板页是**单实例常驻页签**（`id` 固定 `jscad`，与几何 / 图表同构）：切走不销毁页面，
  模型的动作到达时 `openJscad()` 把页签切到前台，再由 `runJscadHostTool` 等控制器就位。
- `jscad-host.ts` 只保存**一份**控制器（页面挂载时登记、卸载时注销），「谁是执行者」没有歧义；
  页面起不来时如实回「三维建模板没有打开」而不是假装写进去了。
- 页面结构（`JscadPage.tsx`）：左侧 Monaco（`language="javascript"`）写脚本、右侧 three.js
  预览（`OrbitControls` + 按包围盒自动定机位 + 缩放网格），中间是可拖分隔条；工具条是
  「渲染 / 导出格式（STL·3MF）/ 导出 / 插入到对话框 / 重置示例」。切走页签会 `cancelJscadRender()`
  （掐掉 worker，别白占 CPU），切回来若还没渲染过会自动渲一次。
- 预览与统计**同源**：三角面来自同一份 `triangulate()` 结果（`generalize({snap:true,triangulate:true})`），
  所以不会出现「统计说 100 面、预览画 400 个三角」。
- 导出走 `URL.createObjectURL(new Blob([bytes]))` + `<a download>`，文件名 `模型-<时间戳>.stl|3mf`。
- 「插入到对话框」只写正文（脚本 + 尺寸/体积/三角面统计），**不加附件**：另外两块板要附 PNG，
  是因为画板内容是人类看的图；这里的载体就是脚本文本本身，模型读文本更直接。
- 设置入口：「设置 → 工具集成 → 三维建模板（JSCAD）」（`settings-registry.ts` 的
  `integrations` 分组，`SettingsPage.tsx` 的 `JscadIntegrationSettings`），两个开关——
  「启用」与「允许模型写入」——外加一行只读的运行时参数说明与「打开建模板」按钮。
  与前两块板一样，这两项在 `App.tsx` 的 `handleBrowserToolRequest` 分流处同时作用于
  「入口可用性」和「拒绝分支」：关掉整块集成时 `jscad_write` / `jscad_read` 直接回绝，
  只关写入时 `jscad_read` 仍然可用。
- 配置的落库路径与前两块板共用：`ToolIntegrationSettingsSchema` 的 `jscad: {enabled, allowModelWrite}`
  （没有 URL 字段——不加载外部页面），`desktop-store.ts` 的局部补丁合并与
  `normalizeToolIntegrations` 的逐字段兜底都已覆盖。

## 6. 证据（本仓库自动化测试，B，全部通过）

| 测试                                                         | 覆盖                                                                                                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tests/component/jscad-render.component.test.ts`             | 真跑 `@jscad/modeling`：体积/包围盒/二进制 STL 字节数（84 + 50N）/ ASCII STL / 3MF zip 魔术字 / 空脚本·缺 main·抛异常·二维几何·超长脚本的失败路径 |
| `tests/component/jscad-host.component.test.ts`               | 控制器唯一性、等待挂载与超时、先切页签再执行、空脚本不落地、读入口、页面起不来时的失败文本                                                        |
| `tests/contract/browser-tool-request.contract.test.ts`       | `jscadWrite` 脚本原样透传且不落 tabId、`jscadRead` 无参、长度上限与严格 schema                                                                    |
| `tests/contract/settings-tool-integrations.contract.test.ts` | 工具集成补丁的整块/局部写、拼错键与多余字段被拒、默认值                                                                                           |
| `tests/contract/desktop-store.contract.test.ts`              | 局部补丁不牵连其它集成、坏数据逐字段修复                                                                                                          |
| `tests/component/tool-integrations.component.test.tsx`       | 三页静态渲染（含建模板页没有地址输入框、没有「恢复默认」）、停用提示、无回调时不渲染入口行、`normalizeToolIntegrations` 兜底                      |
| `tests/component/jscad-page.component.test.tsx`              | 侧边页签外壳（不是模态）、两个方向的动作都在、未选中时不卸载                                                                                      |
| `tests/component/settings-registry.component.test.ts`        | 导航顺序与分组含 `jscad`                                                                                                                          |
| `tests/security/electron-security.security.test.ts`          | CSP 放宽只命中 worker 资源、其余资源与全局逐字节相同                                                                                              |
| `syntropy_node/engine/codex/jscad_tool_test.go`              | 转发脚本（不 trim）、缺参/空脚本/超长与恰好到达上限的边界、宿主失败三态、异物工具名                                                               |

探针证据（本机可重跑，`.tmp-wazero-probe/`，已 gitignore）：

| 探针                                                   | 用途                                                                         |
| ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `inspect/`                                             | 用 wazero 解析 wasm 导入面 → §2.1 的 155+ 非 WASI 导入                       |
| `runner/`、`guest/`                                    | 验证 wazero 对真正的 WASI preview1 模块（argv/env/stdio/preopen/超时）都正常 |
| `pkgs/jscad-test.mjs`、`node-render-test.mjs`          | §2.3 的性能对照（同机同日）                                                  |
| `pkgs/jscad-robustness.mjs`、`openscad-robustness.mjs` | §2.3 的退化几何对照                                                          |
| `electron-csp-test/`                                   | §3.2 的 CSP 实测（页面 eval 被拦 / worker eval 放行）                        |

## 7. 已知边界与后续

- **导出是下载，不是落盘**：浏览器语义的 `<a download>` 会进 Electron 的下载目录，
  没有「另存为」对话框，也没有把模型写回项目文件。需要「存到工作区」时，应该复用
  本机文件的写入通道，而不是在渲染层想办法。
- **脚本是同步的**：`main()` 返回 Promise 会被明确拒绝（`jscad-render.ts` 的检查），
  异步建模在 worker 里没有意义——挂起的微任务跑不出超时控制。
- **`require` 白名单只有一个模块**：`@jscad/modeling`。脚本拿不到 Node 模块、拿不到网络，
  这是沙箱边界的一部分，不要为了「方便」把它放宽。
- **超时靠 terminate**：20 秒上限到了就重建 worker（同步脚本没有别的中断办法）；
  正常模型都在百毫秒级，触到上限基本意味着脚本里有死循环或过重的布尔运算，回执会这么说。
- **预览不是 CAD**：three.js 只画三角面（无拾取、无尺寸标注、无装配）。要做「量尺寸 / 看剖面」
  这类事，应该走导出 STL 再用专业工具，而不是继续往预览里塞功能。
- **单实例**：建模板只有一页（与两块画板一致），同时只有一个渲染在跑（`jscad-runtime.ts`
  里的串行队列）——并行渲染只会互相抢 CPU，也让「超时该掐谁」变得含糊。
