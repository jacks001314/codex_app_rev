# 原生 helper 协议

## 启动与传输

当前 Node 适配层通过三个标准管道启动 helper：

```text
codex-computer-use.exe --parent-pid <宿主 PID>
```

stdin 和 stdout 使用 UTF-8 JSON Lines：一个请求占一行，一个响应或事件占一行。stderr 用于进程级诊断文本。`--parent-pid` 缺值、非数字或未知参数会使进程以代码 `1` 退出；无参数且 stdin 立即关闭时，进程以代码 `0` 退出。该二进制没有 `--help` 或 `--version` 参数。

`--system-cursor-manager` 是另一个内部角色。单独调用会报 `missing system cursor manager parent pid`。静态字符串还包含 cursor manager 的 ready/ack/suppress/restore/shutdown event，说明主 helper 会协调一个系统光标管理子进程；本次没有单独运行该模式。

## 请求信封

```json
{"id":1,"method":"list_windows","params":{}}
```

- `id`：无符号整数，Rust 侧错误明确为 `u64`，用于响应关联。
- `method`：字符串，大小写和拼写严格匹配，`listapps` 不会被接受。
- `params`：JSON object。即使方法没有参数也必须提供 `{}`；漏掉时得到 `parse <method> params: invalid type: null, expected struct EmptyParams`。
- `meta`：可选 object，用来携带批准、预算和 turn 元数据。

Node 适配层会加入：

```json
{
  "x-oai-cua-request-budget-ms": 10000,
  "x-oai-cua-approved-app": "<approved subject>",
  "session_id": "<Codex session>",
  "turn_id": "<Codex turn>"
}
```

前两项由 helper 直接读取。turn 字段来自宿主传入的 `x-codex-turn-metadata`，Node 层在发送前展开进 `meta`。Node 的默认预算为普通方法 10 秒、`launch_app` 15 秒；这是适配层行为，不是 helper 的唯一固有超时。

## 响应信封

成功：

```json
{"id":1,"ok":true,"result":{}}
```

失败：

```json
{"id":1,"ok":false,"error":"unsupported method: does_not_exist"}
```

请求信封本身无法解析时，helper 用 `id: 0` 返回错误。如果 `id` 已成功解析但后续方法或参数失败，响应保留原 `id`。

没有数字 `id` 的 JSON 对象被视为事件。Node transport 将这类对象路由给事件监听器，而不是当成请求响应。

批准不是普通成功或失败：

```json
{
  "id": 3,
  "approvalRequest": {
    "app": "computer-audio",
    "displayName": "computer audio",
    "riskLevel": "high",
    "allowPersistentApproval": true
  }
}
```

宿主将 `approvalRequest.app` 填入 `meta["x-oai-cua-approved-app"]`，再重发相同请求。批准被拒绝时，Node 层抛出 “Computer Use was not approved to use ...”。

## 方法表

| 方法 | 必填参数 | 可选参数 | 返回或用途 |
|---|---|---|---|
| `diagnostic_state` | 无 | 无 | 缓存/可访问性/截图会话诊断 |
| `list_apps` | 无 | 无 | 已安装应用和其可目标窗口 |
| `list_windows` | 无 | 无 | 当前可目标窗口 |
| `get_window` | `id` | `app` | 按窗口 id 重取窗口 |
| `launch_app` | `app` | 无 | 启动已批准应用 |
| `get_window_state` | `window`, `include_text`, `include_screenshot` | 无 | UIA/截图窗口状态 |
| `activate_window` | `window` | 无 | 把目标窗口带到前台 |
| `perform_secondary_action` | `window`, `element_index`, `action` | 无 | 执行 UIA secondary action |
| `set_value` | `window`, `element_index`, `value` | 无 | 设置可编辑元素值 |
| `click_element` | `window`, `element_index` | `click_count`, `mouse_button` | 元素点击 |
| `scroll_element` | `window`, `element_index`, `direction`, `pages` | 无 | 旧式元素滚动 |
| `click` | `window`, `x`, `y` | `screenshotId`, `click_count`, `mouse_button` | 窗口相对坐标点击 |
| `drag` | `window`, `from_x`, `from_y`, `to_x`, `to_y` | `screenshotId` | 窗口相对坐标拖拽 |
| `scroll` | `window`, `x`, `y`, `scrollX`, `scrollY` | `screenshotId` | 窗口相对坐标滚动 |
| `type_text` | `window`, `text` | 无 | 向当前焦点输入 |
| `press_key` | `window`, `key` | 无 | 发送按键或组合键 |
| `start_audio_recording` | 无 | `max_duration_ms` | 开始 loopback 音频 |
| `stop_audio_recording` | 无 | 无 | 停止并返回 WAV 路径 |
| `close` | 无 | 无 | 清理并关闭 helper |
| `end_turn` | 无 | 无 | 结束 turn 并清理 turn 范围状态 |

`window` 是 `{"app": string, "id": number, "title"?: string}`。`id` 是不透明窗口编号，`app` 是应用标识；`process:C:\...\foo.exe`、AUMID 和浏览器别名都会出现。

## 参数结构细节

### 窗口枚举与状态

`list_apps` 返回数组，单项字段为：

```json
{
  "id": "OpenAI.Codex_2p2nqsd0c76g0!App",
  "displayName": "ChatGPT",
  "isRunning": true,
  "lastUsedDate": "...",
  "useCount": 4,
  "windows": [{"app":"...","id":396148,"title":"ChatGPT"}]
}
```

可选字段在无法取得时可以省略。当前探测返回 40 个应用，证明目录覆盖已安装应用，不只覆盖正在运行的应用。

`get_window_state` 直接调用时必须显式提交两个布尔值：

```json
{
  "id": 1,
  "method": "get_window_state",
  "params": {
    "window": {"app": "process:C:\\Windows\\notepad.exe", "id": 12345},
    "include_text": true,
    "include_screenshot": false
  }
}
```

公开 JS 类型把两个字段标成可选并给默认值，但 `WindowsComputerUseClientBase` 总会把默认后的值发送给原生 helper。字段探测证明原生 serde 结构要求两个字段都存在；此外至少一个必须为 `true`。返回结构为：

```json
{
  "window": {"app":"...","id":12345,"title":"..."},
  "screenshots": [
    {
      "id": "screenshot-0",
      "zIndex": 0,
      "url": "data:image/jpeg;base64,...",
      "originX": 0,
      "originY": 0,
      "width": 1280,
      "height": 720
    }
  ],
  "accessibility": {
    "tree": "...",
    "focused_element": "...",
    "selected_text": "...",
    "selected_elements": ["..."],
    "document_text": "..."
  }
}
```

截图或 accessibility 没有被请求时，相应部分可以为空。`accessibility` 可以为 `null`。

### 元素操作与坐标操作

当前 window2 JS API 把“元素点击”和“坐标点击”合成一个入口：如果传 `element_index`，它改发 `click_element`；否则要求有效 `x`、`y` 并发送 `click`。因此直接接线时应按底层方法分别构造参数。

- `perform_secondary_action.action`：例如 `Raise`、`Scroll Up`、`Scroll Down`、`Scroll Left`、`Scroll Right`、`Expand`、`Collapse`；匹配不区分大小写。
- `click_element`：`element_index` 来自最近一次 `get_window_state` 的 accessibility tree。`click_count` 至少为 1；右键双击被明确拒绝。
- `scroll_element`：属于二进制中保留的旧式 API，当前公开 window2 类型没有它。必须带 `direction` 和 `pages`。
- `click`、`drag`、`scroll` 的坐标都是窗口相对坐标。直接 helper 的 `click` 要求 `x` 和 `y` 都存在。
- `press_key` 使用 `+` 连接的 X11 keysym 风格组合，例如 `Control_L+a`、`Control_L+Shift_L+period`、`KP_0`；常见 `Ctrl`、`Alt`、`Shift`、`Numpad_0` 别名会被客户端归一化。

### 音频

音频方法只有在 `SKY_ENABLE_AUDIO=1` 时启用。未启用时 start 和 stop 都返回 `computer audio recording is not enabled`。启用但未批准时，`start_audio_recording` 返回 `computer-audio`、`riskLevel: high` 的批准请求。

`max_duration_ms` 实测范围为 `100..300000`，公开类型注明默认 60000。成功返回的 WAV 为 24 kHz stereo；Node 层从 `filepath` 读取字节并生成 `audio/wav` data URL。

### 生命周期

`close` 返回 `{"ok":true,"result":{}}`，之后客户端不再接受新的 Computer Use 请求。`end_turn` 同样可返回空对象，用于在 session/turn 变化时清理该 turn 的目标和图状态。Node transport 在发现新的 turn key 时先对旧 turn 调用 `end_turn`，并在 turn-ended handler 中处理当前 turn。

helper 以退出码 `130` 结束时，Node 层将其解释为物理 Escape 停止。transport 还会写入：

```text
<cache>/computer-use/interrupts/<conversation-id>/<turn-id>
```

并在后续请求前检查 marker。

## 错误与验证顺序

已观察到的参数层错误包括：

```text
invalid request: expected ident at line 1 column 2
invalid request: missing field `id` at line 1 column 2
parse get_window_state params: missing field `window`
parse get_window params: missing field `id`
parse click params: missing field `x`
parse scroll_element params: missing field `direction`
parse press_key params: missing field `key`
unsupported method: does_not_exist
```

窗口和策略层错误包括：

```text
window id is required
foreground window did not report a process id
window id 4294967295 was not found. Current windows: [...]
Computer Use is not allowed on this app by policy
Computer Use is disabled by policy
executable has multiple signatures
user input was detected in this window; call get_window_state before continuing
window bounds changed; call get_window_state before using this window
```

验证顺序会影响你最先看到的错误。例如给 `get_window_state` 一个无效窗口且两个状态开关都是 false 时，可能先得到窗口错误；给假窗口提供两个显式布尔值时，才会到 `foreground window did not report a process id`。原始证据在 `evidence/field_discovery.json` 和 `evidence/method_validation_matrix.json`。

## 一个已复现的异常

同一 helper 会话的 Chrome 流程：

1. `list_windows` 返回 `{"app":"Chrome","id":5113962,...}`。
2. `get_window({"id":5113962})` 成功返回同一对象。
3. `get_window_state` 立刻返回 `window id 5113962 no longer belongs to Chrome; current owner is Chrome`。
4. `close` 成功。

把 `app: "Chrome"` 加入 `get_window` 时也能单独复现该错误。错误文本的两个所有者名称相同，且请求发生在同一进程内，因此不是窗口编号跨进程失效。可合理推断 `Chrome` 是别名，而内部当前 owner 字段是实际 executable/app identity，比较代码对别名做了错误或缺失的规范化。更深层原因需要恢复对应巨型优化函数的 pcode 才能确认。证据见 `evidence/probe_session_chrome.json` 和 `evidence/probe_get_window_chrome.json`。

## 适配层与二进制 schema 的差异

- TypeScript 将 `get_window_state` 的两个开关写成可选；直接 helper 要求两者都存在。
- TypeScript 的 `click` 允许 `element_index` 替代 `x/y`；直接 helper 用独立 `click_element`，而 `click` 自身要求 `x/y`。
- 当前公开类型没有 `scroll_element`；二进制仍接受这个旧方法。
- `diagnostic_state`、`close`、`end_turn` 存在于原生方法表，但不属于普通 window2 用户调用面。
- JS 层负责应用默认值、组合键归一化、事件路由、截图 data URL 的显示和批准 UI；不要把 Node 包装负责的规则误写成原生 IPC 已经自动处理。
