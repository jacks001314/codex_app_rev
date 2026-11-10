# 读打包产物

针对 **Vite/rolldown + React 19 + React Compiler** 的产物（Codex、以及越来越多同类应用）。
换成 webpack/esbuild 产物时，识别特征不同，但方法论一样：**先找不变量，再找注册表，最后才读逻辑**。

---

## 1. 认出打包器与框架

每个 chunk 的第一行就能判断：

```js
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";   // rolldown
import { n as e } from "./chunk-XXXX.js";                              // rollup/vite
__webpack_require__(...)                                               // webpack
```

React Compiler 的痕迹（**这是读懂逻辑的关键**）：

```js
function Foo(e) {
  let t = (0, X.c)(42),                       // 42 = 记忆缓存槽数量
      ...
  t[0] === dep1 || t[1] === dep2
    ? ((result = 计算(dep1, dep2)), (t[0] = dep1), (t[1] = dep2), (t[2] = result))
    : (result = t[2]);                        // 命中缓存
  ...
  r[11] === Symbol.for("react.memo_cache_sentinel")   // 首次渲染标记
}
```

读法：**把所有 `t[N] === x ? (...) : (y = t[N])` 三元式在脑子里折叠掉**，
只看"计算"那一支。缓存槽数组（`t`、`r`、`e`）是噪声，不是逻辑。
折叠后上面的例子就是 `result = 计算(dep1, dep2)`，memo 依赖 `[dep1, dep2]`。

这套模式一旦认出来，React Compiler 产物的可读性会大幅提升 —— 它其实把
`useMemo`/`useCallback` 的依赖数组**显式写出来了**，比源码更容易看清依赖关系。

JSX 编译产物：

```js
(0, X.jsx)(Component, { prop: value, children: ... })
(0, X.jsxs)(Tag, { children: [ ... ] })       // 多个子节点
(0, X.jsx)(X.Fragment, { children: [...] })
```

`jsx` 的第二个参数就是 props 对象，**props 名全部保留**，这是还原组件契约的主要途径。

## 2. i18n 描述符是最大的信息源

react-intl / formatjs 风格：

```js
K({ key: { id: "ns.name", defaultMessage: "Text", description: "Why this exists" } });
```

用 `harvest-messages.mjs` 批量收割，按 id 前两段分组。然后：

1. **先看组的大小排名** —— 最大的组就是功能重心；
2. **再读 `description`** —— 它写的是开发者意图，比文案准确；
3. **最后才回头看代码** —— 带着"这个控件是干什么的"去读，效率高一个数量级。

`id` 的命名空间本身就是一份功能地图。Codex 的 `codex.command.*`（159 条）
直接给出了**全部可绑定快捷键的命令**，等于一份完整的能力清单：

```
composer.submit / submitInBackground / steer / queue / clear
composer.openModelPicker / openProjectPicker / startVoiceMode / startDictation
composer.addPhotos / addFiles / toggleFastMode / togglePlanMode
composer.toggleWorktreeMode / toggleWorkRunLocation
composer.increaseReasoningEffort / decreaseReasoningEffort / cycleReasoningEffort
toggleSidebar / toggleReviewPanel / toggleBrowserPanel / toggleBottomPanel
toggleMaximizeSidePanel / togglePinnedSummary / openSideChat / openThreadInNewWindow
switchToChat / switchToWork / switchToCodex / newThread / forkThread / archiveThread
git.commit / createBranch / createPullRequest / createDraftPullRequest / mergePullRequest
...
```

看到这种清单，就不需要再逐个组件去猜"这个 app 能做什么"。

## 3. 猎取注册表

数据驱动的 UI（路由、设置页、tab、导航项、命令面板）一定有静态表。找法：

### 3.1 从一个已知枚举成员反查

```powershell
# 已知某个设置页 slug，找它在共享 bundle 里的所有出现
node "$SKILL\scripts\ctx.mjs" "general-settings" "$W\big\app-initial-*.js" --before 200 --after 600
```

命中点附近通常就是一整块声明。Codex 的三张表全在相邻 30 行内：

```js
cko = "general-settings.notifications.import.profile...".split(".")   // 1. slug 全表
fko = [{slug:"general-settings"},{slug:"notifications"},...]          // 2. 有序描述符
Bjo = { billing: lazy(...), "general-settings": lazy(async()=>{        // 3. slug → 组件
        let { GeneralSettings: e } = await import("./general-settings-5a1b38565b24.js");
        return { GeneralSettings: e }
      }, __vite__mapDeps([727,728,1,426,...]), import.meta.url)).GeneralSettings, ... }
```

### 3.2 锚定与提取

对象名（`cko`/`fko`/`Bjo`）**每次构建都变**，不能写死。锚定第一个稳定的键，
然后**向后回溯**找左花括号（见 traps C4）：

```js
const loaderBody = enclosingObject(text, "billing:b3(");
```

条目用正则逐个抓：

```js
const re = /(?:[{,])\s*(?:`([a-z0-9-]+)`|"([a-z0-9-]+)"|([a-z0-9-]+))\s*:\s*b3\(/g;
// 组件名： let { GeneralSettings: e } = await import(`./chunk.js`)
const component = /let\s*\{\s*([A-Za-z0-9_$]+)\s*:\s*e\s*\}/.exec(after)?.[1];
const chunk = /await import\(`\.\/([^`]+)`\)/.exec(after)?.[1];
```

抓完必须**解析 shim**（traps B5）并**对照本地文件自检**，
输出"哪些实现 chunk 没抽到"。这一步能抓住分类规则的漏洞。

### 3.3 `__vite__mapDeps` 是懒加载依赖图

```js
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./a.js","./b.js",...]))) => ...
__vite__mapDeps([551, 1, 426, 427, ...], import.meta.url)
```

`m.f` 那个数组是**全部懒加载 chunk 的有序表**，调用处的数字是下标。
拿到它就能重建"哪个路由加载哪些 chunk"的完整依赖图 —— 比逐个读 import 语句高效得多。
这个数组通常在入口 chunk（Codex 是 `tab-content-*.js` 与 `app-initial`）的开头。

### 3.4 门控逻辑往往紧跟注册表

Codex 的 `use-visible-settings-sections` 一个文件里就有四张表 + 两个 switch：

```js
ALLOWED_ON_WEB   = ["profile","agent","personalization","mcp-settings",...]   // 非 Electron 也允许
DEFAULT_SECTION  = "agent"
CAPABILITY       = { account:"chatGpt", agent:"codexOrWorkLocal", ... }        // slug → 能力键
visible(slug)    = switch (slug) { case "appshots": return FLAG; case "billing": return false; ... }
isLoading(slug)  = switch (slug) { case "chronicle": return q.isLoading; ... }
```

**`return false` 的分支是金矿** —— 它告诉你"哪些功能已实现但未放开"。
Codex 有 10 个设置页处于这个状态，代码全在包里（`security-settings` 84 KB、
`cloud-environments-settings-page` 70 KB），只是可见性硬编码为假。

## 4. 找协议面

### 4.1 IPC 频道

preload 是最小的文件之一（Codex 的 `preload.js` 只有 6.7 KB），但**信息密度最高**：
它列出了全部频道名和暴露给页面的 API。直接完整读它。

```powershell
node "$SKILL\scripts\asar-cli.mjs" cat $A ".vite/build/preload.js"
# 频道名总表
rg -o --no-filename "`<前缀>:[a-z0-9\-_:*${}]+" "$O\main-process\build"  | Sort-Object -Unique
```

### 4.2 JSON-RPC / WebSocket 方法名

方法名是字面量，一次正则全捞：

```powershell
rg -o --no-filename "`(?:thread|item|turn|account|config|model|plugin|mcpServer)/[a-zA-Z_/]+`" "$W\big" | Sort-Object -Unique
```

Codex 这样捞出 130+ 个方法，直接还原了 app-server 协议。
**注意区分请求与通知**：`sendRequest(method, params)` 是请求，
`switch (notification.method) { case "item/started": ... }` 是通知分派。

### 4.3 zod / 校验 schema

参数校验常用 zod，编译后是 `Y({...})`、`J()`、`kh([...])`、`Ah("literal")`、`Sh(...)` 这类调用。
认出来后能直接读出参数类型：

```js
Y({
  conversationId: J().regex(UUID_RE),
  diffFilter: kh(["branch", "last-turn"]).nullable().catch(null),
  host: Ah("threads"),
  protocol: Ah("codex:"),
  view: Ah("review").nullable(),
});
MFt = kh(["chat", "work", "codex"]); // ← 一个枚举
```

### 4.4 HTTP 端点

```powershell
rg -o --no-filename "`/[a-z0-9_/\-{}:.]{3,60}`" "$W\big" | Sort-Object -Unique
```

会混进路由路径，需要人工分辨；但一次能看到全部后端接口面。

## 5. 找设计 token

CSS 里的 `:root, :host { ... }` 块就是完整 token 表：

```powershell
rg -o --no-filename "\-\-(spacing|radius-[a-z0-9\-]*|text-[a-z0-9]*|elevation-[a-z\-]*|font-[a-z\-]*)\s*:\s*[^;}]{1,90}" "<app-initial>.css" | Sort-Object -Unique
```

值得特别留意的模式：

- **两段式圆角**：`--radius-md: calc(var(--radius-md-base) * var(--corner-radius-scale))`
  —— 宿主可以整体缩放圆角；
- **`@supports (color: color-mix(...))` + hex 兜底** —— 每个动态色都有一份静态回退；
- **`--lightningcss-light` / `--lightningcss-dark`** —— Lightning CSS 的主题分支技巧，
  一个声明里表达两套值；
- **`[data-*-window-type=...]`** —— 按窗口类型分主题；
- **`var(--vscode-*)`** —— 嵌入 IDE 时继承宿主主题。

这几条能直接推出应用的主题架构，比读组件代码快得多。

## 6. 读代码的优先顺序

给定一个模块的几十个 chunk，按这个顺序读，收益递减但成本递增：

1. **`_CATALOG.json` 的 messages** —— 先知道"有哪些控件、各自干什么"；
2. **导出名**（`export { x as Foo }`）—— 知道这个 chunk 对外提供什么；
3. **最小的 3–5 个 chunk 全文** —— 小文件往往整块都是逻辑，且常是核心算法
   （Codex 的虚拟化器只有 2 KB，却是理解整个对话区滚动的钥匙）；
4. **props 对象**（`jsx(Comp, {...})` 的第二参）—— 还原组件契约；
5. **`_INDEX.json` 的 `selected_by`** —— 顺着闭包来源找到"谁用了它"；
6. **最后才是大 chunk 的函数体** —— 带着前面积累的上下文去读。

反过来说：**不要一上来就啃最大的那个文件**。Codex 的 `local-conversation-thread` 有
20525 行，直接读会淹死；先读完 7 KB 的 `turn-entries` 和 2 KB 的 `virtualizer`，
再回头看它就知道该找什么。
