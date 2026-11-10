# aeon（dot，26.1016）

dot 云电脑与消息 UI 的可抽取部分。44 个 chunk，原始 501,765 B。

26.1016 新增链路：

- `_deps/usb-passkey-dialog-*`：远端网站 passkey → 本机 USB security key，
  覆盖 connect / select account / PIN / touch 与错误码；
- `_deps/mcp-request-card-*`：MCP tool call approval、elevated risk、
  session / always、参数展开；
- `_deps/card-d6f4690fc654.js`：消息回执、回复线程、任务附件、
  connector / location elicitation；
- `_deps/browser-auth-header-*`：远端浏览器登录页标题和结果状态；
- `_deps/creation-placeholder-*`：首次创建 dot 时的分阶段进度。

邮件 OTP、OpenAI Passwords / 1Password 的主体在 `app-initial`；
本目录只包含闭包可见的实现。上层说明见
`../../../changelog-26.1016.md` §5.2–§5.3 与 `../../aeon-dot.md`。
