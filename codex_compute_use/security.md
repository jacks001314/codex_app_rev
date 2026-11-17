# 安全模型与策略

## 边界

该 helper 是高权限桌面操作代理。它能够读取 UIA 文本和截图、注入键鼠、操作剪切板、启动应用、读取系统音频，并展示桌面覆盖层。安全设计不是单个 allowlist，而是“可信应用身份 + 产品配置 + 用户批准 + 动作时不变量检查”的组合。

分析时必须区分三类数据：

- 二进制内硬编码的拒绝文本和算法线索，这是代码事实。
- `configRequirements/read`、`config/read` 和 site-status 返回的运行时策略，这是远端/宿主事实。
- 当前机器实际生效的 allow/deny 规则，本次只观察到部分结果，不能从字符串推测完整策略。

## 二进制的可信性

目标文件具有有效 Authenticode：

```text
Signer:   CN="OpenAI OpCo, LLC"
Issuer:   CN=Microsoft ID Verified CS EOC CA 04
Thumbprint: 0AFCA464C235E6C6471161AA2CA4ACB56665AFBE
Timestamp: Microsoft Public RSA Time Stamping Authority
```

`Get-AuthenticodeSignature` 返回 `Valid` 和 `Signature verified.`。证书签名时间戳使签名可在证书有效期后继续验证。完整输出在 `evidence/authenticode.json`。

该签名证明文件身份，但不能证明当前策略允许它操作某个应用。

## 应用目标策略

应用解析会从 AUMID、安装路径、process path、Shell shortcut、App Paths 和 package repository 得到实际 executable。策略检查的可观察错误包括：

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
Computer Use is not allowed on this app by policy
```

导入包括 `WinVerifyTrust`、版本资源查询、`CertNameToStrW`、`VerifyApplicationUserModelId`、token/SID 和 package 相关 API。策略对象字符串包含：

```text
PolicySource
AppRules
WindowsRules
ExeRules
PolicyFeatures
aumids
exes
allow
deny
defaultAppAccess
feature_status
allowBrowserAndComputerUse
allow_browser_and_computer_use
allow_persistent_approval
```

这些是结构名和序列化字段，不是当前机器上的规则值。路径变化检测和“多个签名”检查用于降低 TOCTOU 与 signer 歧义；`0x140096ee5` 的成功反编译最终能落到 `Computer Use is not allowed on this app by policy`。

当前探测结果：

- Syntropy 窗口：`get_window_state` 被应用策略拒绝。
- Notepad 绝对路径：`launch_app` 被应用策略拒绝。
- Paint AUMID：`launch_app` 被应用策略拒绝。
- Explorer 窗口：`executable has multiple signatures`。
- 不存在的相对 `process:` 目标：`app policy requires an absolute executable path`。

## 用户批准

应用策略通过后，并不意味着自动执行。helper 可以返回 `approvalRequest`，其中给出：

```json
{
  "app": "computer-audio",
  "displayName": "computer audio",
  "riskLevel": "high",
  "allowPersistentApproval": true
}
```

Node 层把批准呈现给用户，然后以 `meta["x-oai-cua-approved-app"]` 重发。批准不是通用凭据：它绑定到具体 approval subject，且 Node transport 会在后续 approvals 链中更新 meta。音频使用 `riskLevel: high`；普通应用是否持久批准由 helper 返回值与宿主策略共同决定。

该机制的意义是把远程策略和本地人工批准分开：配置允许目标并不等于用户同意了当前操作。

## 浏览器 URL 策略

浏览器目标不只用 executable allowlist。静态证据显示 helper 通过 `codex app-server` 的认证/配置通道，再请求 `/backend-api/aura/site_status`。拒绝类别覆盖四种状态：

- URL 明确不允许。
- 无法验证 URL 是否允许。
- Windows 上无法足够确定当前 URL。
- 当前浏览器类型尚未支持 URL policy。

拒绝错误要求停止整个 turn，不会回退成“仅禁用键盘或截图”。这是最小权限设计：如果无法确认浏览器页面属于允许类别，其他 Computer Use 动作也不能继续。

本次没有获得一个允许的浏览器状态响应；Chrome 在 window owner 校验阶段已停止，因此远端 site-status body 和最终判定算法仍未验证。

## 动作时不变量

输入前保护针对 stale target 和用户并发输入：

- 目标窗口必须仍属于同一 app/process。
- 前台窗口和 input window 必须与缓存 identity 一致。
- window bounds 必须未改变。
- 当前坐标必须由已知窗口几何映射到 DPI 空间。
- 锁屏或 input desktop 不可用时停止。
- 检测到用户输入后，必须重新读取窗口状态再继续。

关键错误：

```text
verify current window before using captured target
window changed; call get_window_state before using this window
window bounds changed; call get_window_state before using this window
window is not a usable app window
window is minimized; call activate_window, refresh with get_window, then retry get_window_state
user input was detected in this window; call get_window_state before continuing
user input monitor unavailable; guarded input cannot continue
Windows desktop is locked
```

`0x1400a88e4` 的小函数反编译直接引用 `user input was detected...`，确认它不是仅由 Node 客户端生成的文本。`0x1400a95ae` 恢复出前台 window、process id 和 bounds/point 检查控制流。

## 物理 Escape 与 turn 中断

原生层安装键盘/鼠标 hook，监听物理 Escape。触发后：

- 生成 turn interrupt marker。
- 终止当前 Computer Use 工作。
- 退出 helper 时使用 `130` 表示用户停止。
- Node transport 将 130 或特定 Escape 错误转换为固定停止消息。
- 后续 Computer Use 请求在该 turn 内被拒绝。

marker 路径结构由 Node 代码确认：

```text
<cache>/computer-use/interrupts/<conversation>/<turn>
```

这是对“模型持续操作覆盖层”的直接人工撤销路径。物理 Escape 的设计优于只提供 UI 取消按钮，因为即使前台应用没有响应，全局 hook 仍能捕获。

## 覆盖层提示

D3D/D2D/DirectWrite overlay 显示：

```text
Codex is using your computer
Esc to cancel
```

光标和状态 pill 由独立 compositor 绘制，并使用系统光标压抑/恢复事件。透明度、边框呼吸、shimmer 和 accessible window name 都在字符串中出现。覆盖层的主要安全作用是明确告知用户正在发生自动操作以及中断方式。

## 完整性、锁屏和敏感数据

字符串明确提示：

```text
Accessibility is limited because the target window has higher Windows integrity than the Computer Use helper.
```

因此 UIA 文本可能不完整，不能把空树当作窗口没有内容。截图使用 Graphics Capture，仍受 Windows 权限和 capture API 行为约束。

锁屏检测调用 `OpenInputDesktop` 并识别 `Winlogon`/lock screen；检测失败不会默认当作安全，而是终止受保护输入。

`type_text` 的 clipboard 路径包含 `verify clipboard text before paste`，以避免并发或异步写入导致粘贴内容与预期不一致。分析时仍需注意：完整操作可能短暂改变用户剪贴板。

## 音频风险

音频不是普通截图：它记录系统 loopback 输出，可能包含其他应用或通知声音。因此同时存在：

- 环境变量门禁 `SKY_ENABLE_AUDIO=1`。
- `computer-audio` 独立批准。
- `riskLevel: high`。
- 100–300000 ms 时长限制。
- 最大数据大小检查 `captured computer audio is too large`。

默认 JS 类型标注最长 60 秒，但允许调用者请求到 300 秒。

## 已知异常与残余风险

- Chrome 窗口 owner 校验出现“双方都是 Chrome”的拒绝，可能导致兼容性问题；也可能是某些 Chrome 版本/窗口类型不满足更严格的隐藏 identity 条件。当前证据不能排除后者。
- 当前环境未允许真实点击、输入、应用启动和音频录制，因此策略通过后的完整副作用链没有端到端复现。
- 巨型 Rust dispatcher 没有可靠 C 伪代码。对少量未恢复分支的具体数据结构、并发细节和错误顺序仍可能不完整。
- 远端 app-server 和 site-status 策略的正常/拒绝 body 没有采集。文档只确认它们的调用路径和拒绝语义。
- 不要根据静态字符串自行构造“策略绕过”。`allow`、`deny`、AUMID 和签名条件来自运行时配置与验证结果；修改宿主 meta 也不会替代 WinVerifyTrust、进程身份和用户批准。
