# 高价值字符串与地址索引

这里只收录能定位协议、功能和安全边界的字符串。完整 ASCII 字符串在 `evidence/ascii_strings.txt`，锚点附近可打印文本在 `evidence/pe/anchor_strings.tsv`，精确引用地址在 `evidence/pe/anchor_xrefs.tsv` 与 `evidence/ghidra/string_xrefs.tsv`。

## 方法表

VA `0x1401325b2` 的连续字符串给出完整方法顺序：

```text
start_audio_recording
stop_audio_recording
get_window_state
list_apps
launch_app
list_windows
get_window
diagnostic_state
activate_window
perform_secondary_action
set_value
click_element
scroll_element
click
drag
scroll
type_text
press_key
close
end_turn
```

`unsupported method: ` 位于 `0x1401326ac`。这些字符串由 dispatcher `0x1400897d1` 和大型参数处理函数 `0x140097d4e` 引用。

## 请求/结果字段

VA `0x1401308f6`：

```text
selected_text selected_elements document_text meta app title window
screenshots accessibility cacheDiagnostics zIndex url originX originY
width height appId processId rootHwnd inputHwnd processName bounds
snapshotRevision accessibilityRevision accessibilitySnapshotCount
captureCachedSessionCount lastCaptureInvalidationReason displayName
windows lastUsedDate useCount isRunning ok result approvalRequest
max_duration_ms include_text include_screenshot element_index action
click_count mouse_button direction pages from_x from_y to_x to_y
screenshotId x y scrollX scrollY text filepath
```

这组字段与黑盒字段探测和随包 TypeScript 类型相互吻合。

## Meta 与请求信封

```text
x-oai-cua-approved-app      0x1401322b6
x-oai-cua-request-budget-ms 0x140132880
--parent-pid                0x140136570
invalid request:            0x1401368f3
unsupported method:         0x1401326ac
```

`x-oai-cua-approved-app` 和 budget 字符串都在 `0x1400897d1` 内有精确引用。

## 窗口与输入保护

VA `0x140135160`：

```text
get_window_state must request include_text, include_screenshot, or both
window id is required
verify current window before using captured target
read current window bounds before input
window bounds changed; call get_window_state before using this window
window changed; call get_window_state before using this window
call get_window_state before using this window
window bounds changed before coordinate input
window changed before coordinate input
coordinate input target is unavailable
```

VA `0x1401354fb`：

```text
user input was detected in this window; call get_window_state before continuing
user input monitor unavailable; guarded input cannot continue
window is not a usable app window
window is minimized; call activate_window, refresh with get_window, then retry get_window_state
```

`0x1400a88e4` 的小函数伪代码直接引用用户输入错误；`0x1400a95ae` 恢复出前台窗口、process id、bounds 和 point 检查。

## 鼠标、键盘与滚动

```text
right double click is not supported          0x1401326c2
click_count must be >= 1                     0x1401326c2
coordinate input geometry is unavailable     0x1401326c2
unsupported scroll direction:                0x140138008
pages must be a finite number > 0            0x140138028
unsupported mouse_button:                    0x140138051
unsupported key:                             0x1401387a7
verify clipboard text before paste           0x1401354fb
CTRL+V                                       0x1401354fb
```

UIA secondary actions：

```text
Raise
Scroll Up
Scroll Down
Scroll Left
Scroll Right
Expand
Collapse
```

首地址为 `0x1401333f0`，另有大小写小写匹配版本。

## UIA 与可访问性

VA `0x140137180` 及附近：

```text
read UIA value
read-only state
set UIA value
Cannot set a value for an element that is not settable
read UIA range value
set UIA range value
Selected text:
Document text:
The focused UI element is
get app UIA element
app window is not a snapshot candidate
computer-use accessibility refresh failed
```

控件角色表包含 browser、element、tree item、tooltip、toolbar、thumb、tab、status bar、split button、spinner、slider、separator、semantic zoom、scroll bar、radio button、progress bar、pane、menu item、list、hyperlink、text field、document、data grid、combo box、checkbox、calendar、button、app bar 等名称。

## 截图与覆盖层

```text
send window capture request
window capture timed out
exclude display overlay from capture
show cursor overlay windows
raise display overlay
raise cursor overlay
resize display overlay
resize cursor overlay
raise resized overlay windows
poll system cursor manager after operation timeout
system cursor manager exited with ...
```

Windows Runtime 类名字符串：

```text
Windows.Graphics.Capture.GraphicsCaptureItem
Windows.Graphics.Capture.Direct3D11CaptureFramePool
Windows.Graphics.Imaging.SoftwareBitmap
SoftwareBitmap.CreateCopyFromSurfaceAsync failed
BitmapEncoder.CreateAsync failed
create JPEG encoder failed
image/jpeg
ImageQuality
```

覆盖层用户提示：

```text
Codex is using your computer
Esc to cancel
codex-computer-use-status-pill
```

## 策略与签名

```text
Computer Use is disabled by policy
Computer Use is not allowed on this app by policy
policy cache mutex poisoned
configRequirements/read did not return requirements
config/read did not return config
```

VA `0x140133988`。签名和路径错误：

```text
executable publisher could not be read
executable publisher is missing
executable signer is invalid
executable has no unambiguous signer
executable has multiple signatures
executable signature is not trusted (...)
executable path changed while resolving it
executable path could not be resolved
app policy requires an absolute executable path
app policy requires a resolved executable path
app policy requires an executable launch target
app catalog identity changed before launch
app policy requires a registered packaged app
app package is not in a valid state
app package is not signed
registered app identity does not match the launch target
```

VA `0x140133980` 到 `0x140136000` 之间有连续簇。`0x140096ee5` 反编译明确落到应用策略拒绝字符串。

## 浏览器 URL 策略

覆盖层字符串块 `0x140133597` 同时包含四类 turn 终止理由：

```text
is not allowed on the current browser URL
could not verify whether the current browser URL is allowed
could not determine the current browser URL on Windows with enough confidence to enforce policy
browser URL policy enforcement is not yet supported for the current Windows browser
```

另见：

```text
/backend-api/aura/site_status
x-codex-browser-use-security-mode
includeToken
refreshToken
getAuthStatus
```

## Escape 与 turn

```text
computer-use turn interrupted by physical Escape key   0x140137b61
cache/computer-use/interrupts                           0x140137c9e
Computer Use was stopped by the user with the physical Escape key
computer-use-escape-stop
wait for computer-use turn key
create computer-use interrupt marker directory
write computer-use interrupt marker
failed to install keyboard hook                        0x140137e8a
failed to install mouse hook                           0x140137f10
```

## 音频

```text
SKY_ENABLE_AUDIO
1
computer audio recording is not enabled
computer-audio
max_duration_ms must be from ...
captured computer audio is too large
RIFF
WAVE
fmt 
data
initialize computer audio capture
open computer audio capture stream
start computer audio capture
computer audio recording caller stopped
read computer audio packet size
write captured computer audio
```

音频 API 表现为 WASAPI/COM loopback；输出格式由随包类型标注为 24 kHz stereo WAV。

## App-server

```text
codex app-server
initialize
getAuthStatus
configRequirements/read
config/read
clientInfo
name codex-computer-use
Windows Computer Use Helper
version 0.1.0
capabilities experimentalApi optOutNotificationMethods
failed to read app-server response
failed to parse app-server JSON-RPC response
codex app-server did not return an auth token
```

`version 0.1.0` 是 app-server clientInfo 的静态值，不是 PE version resource。

## Rust 与依赖线索

```text
Rust commit: 8bab26f4f68e0e26f0bb7960be334d5b520ea452
anyhow-1.0.102
base64-0.22.1
hashbrown-0.17.1
indexmap-2.14.0
itoa-1.0.18
serde_core-1.0.228
serde_json-1.0.149
toml-0.8.23
toml_datetime-0.6.11
toml_edit-0.22.27
toml_write-0.1.2
windows-0.61.3
windows-core-0.61.2
windows-strings-0.4.2
winnow-0.7.15
```

这些是构建依赖线索，不表示运行时加载了全部 crate 的独立 DLL。
