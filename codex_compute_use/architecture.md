# 运行架构

## 进程边界

Codex 的 Node 运行层拥有会话、批准 UI 和 tool turn 生命周期；原生 helper 负责 Windows 桌面感知与操作。两者之间只有子进程 stdin/stdout JSONL 和退出状态，不依赖本地 HTTP 端口。

```text
Codex / Node window2 client
        |
        | spawn: codex-computer-use.exe --parent-pid <pid>
        | one JSON object per line on stdin/stdout
        v
Rust native helper
  request dispatcher
        |
        +--> app catalog + executable/package policy
        +--> window identity + input guards
        +--> UI Automation
        +--> Windows Graphics Capture + D3D11/WIC
        +--> SendInput + clipboard + hooks
        +--> D2D1/DirectWrite overlay
        +--> Codex app-server (auth/config/browser policy)
        `--> audio capture (optional environment gate)
```

`--parent-pid` 让 helper 绑定宿主生命周期。`--system-cursor-manager` 是协调系统光标掩盖和恢复的内部子角色。静态字符串中有 ready、ack、suppress、restore、shutdown 事件和 `codex-computer-use-status-pill` 等 overlay window 名称。

## 请求分发

PE 入口是 `0x1400013f0`。`--parent-pid` 字符串的精确 xref 位于巨型函数 `0x140081694` 内；这里同时完成参数解析和启动协调，因此没有可靠地把它拆成浅层参数函数。

JSON dispatcher 的 Ghidra 函数边界是：

| VA | Ghidra body size | 作用 |
|---|---:|---|
| `0x1400897d1` | 12,336 | 请求循环、方法名匹配、meta、响应序列化 |
| `0x140097d4e` | 50,045 | 大型参数处理和操作分发主体 |
| `0x140096ee5` | 1,427 | 应用允许/拒绝判断，能恢复至明确的 policy error |
| `0x1400a95ae` | 718 | 坐标输入前的窗口、前台和几何检查 |
| `0x1400a88e4` | 285 | “user input was detected”保护 |
| `0x1400a7db2` | 283 | turn 结束时的清理路径 |
| `0x1400a7235` | 132 | cursor overlay 状态读取 |
| `0x14000572d` | 75 | 序列化 `AppApprovalRequired` |

`0x1400897d1` 的字符串 xref 同时落在 `x-oai-cua-approved-app` 和 `x-oai-cua-request-budget-ms`。方法名表中的 `start_audio_recording` 到 `end_turn` 也位于这一层。`0x140097d4e` 持有 `right double click is not supported`、`click_count must be >= 1`、`launch_app` 等操作字符串，说明它承担了大部分 method-specific parsing/validation。

这两个函数高度内联，Ghidra 批量还原 C 失败。小函数成功伪代码和全部字符串 xref 在 `evidence/ghidra/`。

## 应用目录

应用目录并非只枚举当前进程。静态字符串明确覆盖：

- 用户与机器的 Start Menu Programs 目录。
- `LOCALAPPDATA\Microsoft\WindowsApps` execution aliases。
- `HKLM/HKCU\Software\Microsoft\Windows\CurrentVersion\App Paths`。
- `HKCU/HKLM` 的 Uninstall 与 WOW6432Node Uninstall。
- Windows AppModel Package Repository 和 Appx AllUserStore Applications。
- Explorer `UserAssist` 的 recently used/use count 信息。

这解释了 `list_apps` 同时返回未运行应用、Windows Store AUMID、传统 executable 和应用使用统计。应用标识可以是 AUMID、完整 `process:<path>`、安装目录路径或 Chrome/Edge 等别名。

启动路径分散到 `ShellExecuteExW`、`ShellExecuteW` 和 `WaitForInputIdle`。启动前后还会检查 app catalog identity、签名者、路径是否变化和 package identity。当前环境对被测试的 Paint 与 Notepad 路径都在实际启动前返回应用策略错误。

## 窗口枚举与身份

`EnumWindows`、`GetWindowThreadProcessId`、`GetWindowTextW`、`GetWindowLongPtrW`、`GetForegroundWindow`、`GetAncestor` 和 Shell window property store 组合成窗口枚举和 owner 识别。`get_window_state` 的缓存记录字段可从序列化字符串读出：

```text
appId, processId, rootHwnd, inputHwnd, processName, bounds,
snapshotRevision, accessibilityRevision, accessibilitySnapshotCount,
captureCachedSessionCount, lastCaptureInvalidationReason
```

输入路径不单纯信任 `Window.id`。字符串和 `0x1400a95ae` 的检查表明它会在动作前比较当前窗口、前台归属、process id、窗口 bounds 和缓存的几何/身份快照。错误文本包括：

```text
verify current window before using captured target
read current window bounds before input
window bounds changed; call get_window_state before using this window
window changed; call get_window_state before using this window
window bounds changed before coordinate input
window changed before coordinate input
coordinate input geometry is unavailable
```

Chrome 的同一会话测试暴露了 owner 比较异常：返回对象和应用字段都写 `Chrome`，但校验仍声称当前所有者是 `Chrome`。这是行为事实；具体规范化实现未能由可读伪代码确认。

## UI Automation

`uiautomationcore.dll` 和 COM/OLE 导入提供：

- UIA element/tree 查询与 element index。
- `Raise`、scroll、`Expand`、`Collapse` 等 secondary action。
- value get/set。
- focused element、selected text/elements、document text。
- bounds、runtime identity 和事件通知。

字符串中的 `initialize COM for UI Automation`、`src/accessibility/monitor.rs`、`send secondary action request to accessibility monitor`、`wait for accessibility secondary action` 说明 UIA 操作由一个 monitor/worker 层串行协调，而不是在 JSON 循环里直接阻塞全部 COM 调用。

可访问性结果以带元素编号的格式化文本 `tree` 返回；坐标/元素操作依赖最近一次状态快照的 revision。若目标进程完整性高于 helper，字符串明确会生成可访问性受限提示。

## 截图

截图栈由以下导入和字符串共同确认：

- `Windows.Graphics.Capture.GraphicsCaptureItem`
- `Direct3D11CaptureFramePool`
- `D3D11CreateDevice`
- `CreateDirect3D11DeviceFromDXGIDevice`
- `Direct3D11CaptureFrame.Surface`
- `SoftwareBitmap`、`InMemoryRandomAccessStream`、`BitmapEncoder`
- `image/jpeg`、`BitmapPropertySet`、`ImageQuality`

capture worker 会枚举显示器、建立 D3D11 capture session、等待 `FrameArrived`、把 D3D surface 复制为 `SoftwareBitmap`，再编码为 JPEG。返回条目包含 `url`、`zIndex`、`originX/Y` 和 width/height，以支持窗口和瞬态 UI 的多区域裁剪。相关字符串包括 `send window capture request`、`window capture timed out` 和 `create JPEG encoder`。

## 输入与干扰保护

输入由 `SendInput`、`SetCursorPos`、剪切板 API、键盘/鼠标全局 hook 和窗口前台/焦点 API 组成。静态字符串与导入显示的操作链包括：

- 确认当前目标和前台窗口。
- 检查锁屏/active input desktop 与窗口状态。
- 检查窗口 identity/bounds 是否在状态快照后改变。
- 检查用户是否在目标窗口产生输入；若有，要求重新调用 `get_window_state`。
- 激活/聚焦目标，更新坐标和 DPI。
- 使用 `SendInput` 发送鼠标/键盘事件。
- `type_text` 路径可用 clipboard 加 `Ctrl+V`，并要求粘贴前验证剪贴板文本。

`SetWindowsHookExW` 同时用于用户干扰中的物理 Escape 检测。`0x14005ed56` 附近有 `failed keyboard hook`、`failed mouse hook` 和 `physical Escape` 字符串；底层 C 伪代码未成功恢复，但 Node 行为与 130 退出码、marker 文件相互印证。

锁屏检查通过 `OpenInputDesktop`。字符串包含：

```text
OpenInputDesktop failed
DefaultWindows
Default Lock Screen
Windows desktop is locked (input desktop is ...
```

这些检查表明 helper 不会把“输入没有生效”简单当作操作成功。

## 覆盖层与光标

D3D11、D2D1、DirectWrite、DWM 和 Windows.UI.Composition 导入用于绘制透明桌面覆盖层。字符串包含：

```text
Codex is using your computer
Esc to cancel
codex-computer-use-status-pill
create display overlay root
create cursor composition root
start display overlay enter animation
create text shimmer
```

另有一套系统光标管理事件，用 `SetSystemCursor`、`CreateCursor` 和命名 event 来压抑和恢复光标。它的目的应是让用户清楚看到 Computer Use 正在操作以及如何中断，而不是普通的窗口截图水印。

## Codex app-server 与 URL policy

静态字符串包含：

```text
codex app-server
initialize
getAuthStatus
configRequirements/read
config/read
clientInfo
name = codex-computer-use
version = 0.1.0
/backend-api/aura/site_status
```

这说明原生 helper 会启动 `codex app-server`，通过 JSON-RPC 获取认证、配置需求、feature policy，并为浏览器目标请求站点策略。`WinHttp` 导入与该站点状态调用一致。失败类别包括：

- 当前 URL 不允许。
- 当前 URL 无法验证是否允许。
- 无法足够确定浏览器 URL。
- 当前 Windows 浏览器尚不支持 URL policy enforcement。

这些错误被描述成终止整个 computer-use turn，而不是只拒绝一次操作。静态字符串指出即使用户随后自己导航到该 URL，该 turn 仍应保持停止。

## 音频

音频路径以 `SKY_ENABLE_AUDIO=1` 为环境开关，使用 WASAPI/COM loopback 字符串、一个独立 capture thread、RIFF/WAVE 头写入和 24 kHz stereo 输出。产品表面要求高风险批准，原因是它记录系统输出而非某个目标窗口。`start_audio_recording` 的时长限制为 100–300000 ms，最大时长的默认值由 JS 类型注明为 60 秒。

## 为什么没有完整 C 逆向结果

Rust release 构建、LTO/内联、异常展开和巨型控制流使该样本的 `.pdata` 边界看起来规整，但 Ghidra pcode/type recovery 无法稳定还原主要 dispatcher。已采用三种互相独立的证据补齐：

1. PE 函数边界和原汇编。
2. 精确字符串地址与 xref，把安全错误关联到具体函数。
3. 运行 helper 的 JSONL 黑盒探测，直接确认 schema、错误和生命周期。

小函数成功伪代码只用于验证策略和枚举，不冒充完整源码复原。
