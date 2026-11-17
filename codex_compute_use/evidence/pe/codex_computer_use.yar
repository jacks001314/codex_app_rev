rule CodexComputerUseWindowsHelper
{
    meta:
        description = "Codex Computer Use native Windows helper"
        sha256 = "14a5389ac4f060361748135f97434037e321afd3f465e9481295919bb7771285"
        build_time = "2026-11-10T22:49:19+00:00"
    strings:
        $mz = { 4D 5A }
        $pe = { 50 45 00 00 }
        $name1 = "codex-computer-use" ascii nocase
        $name2 = "Windows Computer Use Helper" ascii
        $rpc1 = "unsupported method: " ascii
        $rpc2 = "x-oai-cua-approved-app" ascii
        $capture = "Windows.Graphics.Capture.GraphicsCaptureItem" wide
        $input = "SendInput" ascii
        $uia = "initialize COM for UI Automation" ascii
        $escape = "computer-use turn interrupted by physical Escape key" ascii
    condition:
        $mz at 0 and $pe and $name1 and $name2 and all of ($rpc*) and 2 of ($capture, $input, $uia, $escape)
}
