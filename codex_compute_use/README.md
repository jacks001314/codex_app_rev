# `codex-computer-use.exe` 逆向分析

本目录保存对 Codex Windows Computer Use 原生 helper 的行为分析、协议重建、PE 静态证据和有约束的运行时探测。目标是解释它如何被调用、如何选择窗口、如何执行截图/可访问性/输入操作，以及它在哪些位置执行安全策略。二进制本身没有复制进项目。

## 样本身份

| 项目 | 结果 |
|---|---|
| 目标 | `@oai/cua/bin/windows/codex-computer-use.exe` |
| 大小 | `1,548,592` 字节 |
| 格式 | PE32+，x86-64，Windows CUI |
| SHA-256 | `14a5389ac4f060361748135f97434037e321afd3f465e9481295919bb7771285` |
| PE 时间戳 | `2026-11-10T22:49:19Z` |
| ImageBase / 入口 | `0x140000000` / `0x1400013f0` |
| `.pdata` 函数数 | `2826` |
| `.text` 大小 / 熵 | `1,202,464` 字节 / `6.23` |
| 签名 | Authenticode 有效，Signer `CN="OpenAI OpCo, LLC"` |
| 签名者指纹 | `0AFCA464C235E6C6471161AA2CA4ACB56665AFBE` |

同一运行时的 `@oai/sky` 目录还有一份同名文件。两份文件的整体 SHA-256 不同，但比较显示只有 PE checksum 和 Authenticode 区域不同；忽略 checksum 后的 unsigned prefix 相同，SHA-256 均为 `62cec7b1a4de27df7dc9aa5f6af86a0f9c54387f068c7a42162f7d9037685198`。因此代码主体是同一版本。

该 PE 没有版本资源字段；字符串里的 `version: 0.1.0` 是 helper 向 Codex app-server 报告的 `clientInfo.version`，不能当作 Windows 文件版本。证据见 `evidence/binary_version.json`、`evidence/authenticode.json`、`evidence/binary_comparison.json` 和 `evidence/pe/pe_summary.json`。

## 主要结论

这是一个由 Node/Codex 宿主通过子进程管道驱动的 Rust JSONL helper。宿主以 `codex-computer-use.exe --parent-pid <pid>` 启动它；随后每行发送一个 JSON 请求，每行接收一个 JSON 响应或事件。当前 window2 路径使用 JSON Lines，不是持久化命名管道或本地 socket。

二进制暴露 20 个方法：`diagnostic_state`、`list_apps`、`list_windows`、`get_window`、`launch_app`、`get_window_state`、`activate_window`、`perform_secondary_action`、`set_value`、`click_element`、`scroll_element`、`click`、`drag`、`scroll`、`type_text`、`press_key`、`start_audio_recording`、`stop_audio_recording`、`close`、`end_turn`。方法名、参数结构与错误路径见 `protocol.md` 和 `reconstructed/method_schema.json`。

窗口状态由两条数据流合成：

- Windows UI Automation 提供可访问性树、元素编号、选中文字、焦点元素和 secondary action。
- Windows Graphics Capture、D3D11 和 WIC/JPEG 编码提供窗口或显示器截图；返回值是带 `url`、`zIndex` 和可选几何信息的截图数组。

输入操作使用 `SendInput`，并在操作前检查目标窗口、窗口 bounds、前台归属、锁屏状态和用户输入干扰。原生窗口还有 D3D11/D2D1/DirectWrite 覆盖层，用于 “Codex is using your computer” 状态、光标和控制提示。物理 Escape 会写入 turn interrupt marker，并中止后续 Computer Use 调用。

安全策略在多个层次执行。应用目标会经过路径归一化、Authenticode/`WinVerifyTrust`、签名者、包身份、应用 allow/deny 规则和产品策略检查；浏览器还会通过 Codex app-server 身份读取 URL policy 状态。应用批准是独立握手：helper 返回 `approvalRequest`，宿主批准后通过 `x-oai-cua-approved-app` 重发请求。音频另有 `SKY_ENABLE_AUDIO=1`、高风险批准和时长限制。

## 已验证与未验证的边界

运行时确认了 `diagnostic_state`、`list_apps`、`list_windows`、`get_window`、`close`、`end_turn` 的成功响应，并验证了全部方法的参数解析顺序、若干窗口/应用策略拒绝和音频批准流程。

当前环境的策略拒绝了对 Syntropy、Notepad 和 Paint 的 Computer Use。对 Chrome，`get_window` 能在同一会话中取回窗口，但 `get_window_state` 即使拿到刚返回的窗口对象，仍返回 “window id ... no longer belongs to Chrome; current owner is Chrome”。这更像是应用标识归一化或所有权比较缺陷，跨进程过期无法解释，因为 `list_windows`、`get_window` 和失败请求都在同一个 helper 进程内。未执行点击、输入、拖拽、滚动、应用启动或真实音频录制，因此这些操作的最终副作用没有在当前环境中做端到端验证。

Ghidra 自动分析生成了 2,826 个函数边界和字符串 xref，但主要的 Rust dispatcher 体量过大且高度内联，批量反编译失败。针对较小的安全函数采用独立 decompiler pass 后成功得到 C 伪代码，例如 `AppApprovalRequired`、应用策略拒绝和用户输入保护。巨型 dispatcher 的结论主要由精确字符串 xref、PE 导入、函数边界、汇编和实际协议探测共同支撑，而不是完整 C 伪代码。证据见 `evidence/ghidra/small_functions.c` 和 `evidence/ghidra/key_functions.c`。

## 目录索引

- `protocol.md`：stdin/stdout JSONL 协议、方法表、必填字段、批准流程、错误与生命周期。
- `architecture.md`：进程边界、方法分发、应用目录、窗口枚举、UIA、截图、输入、覆盖层和中断链。
- `security.md`：签名、应用/URL 策略、批准、输入保护、锁屏、Escape 和音频风险控制。
- `reconstructed/method_schema.json`：机器可读的方法、参数和结果结构。
- `evidence/`：PE、字符串、xref、签名、Ghidra、协议探测和字段探测原始输出。
- `tools/`：可复现的静态分析与协议探测脚本。
- `ghidra_scripts/`：字符串 xref/关键函数导出和目标小函数反编译脚本。
- `hash_manifest.tsv`：交付物 SHA-256 清单。

## 关键证据

| 证据 | 内容 |
|---|---|
| `evidence/pe/pe_summary.json` | PE 头、节区、导入、函数数、hash、签名偏移 |
| `evidence/pe/imports.txt` | UIA、Graphics Capture、输入、策略、COM、WinHTTP 等导入 |
| `evidence/pe/anchor_xrefs.tsv` | 关键字符串到 VA/函数的精确交叉引用 |
| `evidence/ascii_strings.txt` | ASCII 字符串全集及行号 |
| `evidence/ghidra/functions.tsv` | Ghidra 函数入口与 body size |
| `evidence/ghidra/small_functions.c` | 小安全函数成功反编译结果 |
| `evidence/field_discovery.json` | 直接 helper 调用时可推断的必填字段 |
| `evidence/probe_session_syntropy.json` | 同一进程内列表、重取窗口、策略拒绝、`close` |
| `evidence/probe_session_chrome.json` | Chrome 窗口所有权比较异常 |
| `evidence/method_validation_matrix.json` | 全部方法的隔离参数错误与非破坏性探测 |
| `evidence/probe_audio_bad_duration_enabled.json` | 音频审批请求 |
| `evidence/probe_end_turn.json` | `end_turn` 成功响应 |

## 复现方法

静态分析：

```powershell
python .\codex_compute_use\tools\analyze_pe.py `
  --out .\codex_compute_use\evidence\pe

python .\codex_compute_use\tools\compare_binaries.py `
  --out .\codex_compute_use\evidence\binary_comparison.json
```

单请求探测：

```powershell
python .\codex_compute_use\tools\probe_protocol.py `
  --method diagnostic_state `
  --output .\codex_compute_use\evidence\probe_diagnostic_state.json
```

同一 helper 会话探测：

```powershell
python .\codex_compute_use\tools\probe_session.py `
  --title-contains Syntropy `
  --include-text `
  --output .\codex_compute_use\evidence\probe_session_syntropy.json
```

参数矩阵与必填字段推断：

```powershell
python .\codex_compute_use\tools\probe_matrix.py
python .\codex_compute_use\tools\probe_fields.py
```

目标小函数 Ghidra 导出：

```powershell
$env:JAVA_HOME = 'C:\Program Files\Java\jdk-23'
& 'C:\Users\huoga\scoop\apps\ghidra\current\support\analyzeHeadless.bat' `
  'C:\Users\huoga\AppData\Local\Temp\ghidra_codex_cua_1214' CodexCUA `
  -process 'codex-computer-use.exe' -noanalysis `
  -scriptPath '.\codex_compute_use\ghidra_scripts' `
  -postScript ExportSmallFunctions.java `
  '.\codex_compute_use\evidence\ghidra\small_functions.c'
```

运行探测会启动真实 helper。所有方法探测都使用无效窗口或无效应用，或使用现有的只读窗口；如果当前产品策略允许目标，调用 `click`、`type_text`、`drag`、`launch_app` 等会产生真实桌面副作用。

## 分析置信度

- **运行时确认**：成功响应、错误文本、参数缺失顺序、同一会话窗口流程、音频审批和 `close`/`end_turn`。
- **静态确认**：PE 结构、导入 API、Rust/依赖字符串、精确字符串 xref、函数边界和小函数伪代码。
- **合理推断**：把 UI Automation、Graphics Capture、D3D/D2D 覆盖层和输入保护组合成完整行为链；伪代码无法覆盖的巨型优化函数属于这一级。
- **未确认**：真实 UI 动作的成功副作用、允许目标上的截图内容结构细节、完整浏览器 URL 策略响应和远程策略内容。
