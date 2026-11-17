#!/usr/bin/env python3
"""Static PE/string/xref extraction for codex-computer-use.exe."""

from __future__ import annotations

import argparse
import bisect
import hashlib
import json
import math
import re
import struct
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import capstone
import pefile

DEFAULT_EXE = Path(
    r"C:\Users\huoga\AppData\Local\OpenAI\Codex\runtimes\cua_node"
    r"\bbc9141fe9f920ac\bin\node_modules\@oai\cua\bin\windows\codex-computer-use.exe"
)

ANCHORS = [
    "unsupported method: ",
    "invalid request: ",
    "start_audio_recording",
    "stop_audio_recording",
    "get_window_state must request",
    "window id is required",
    "coordinate input geometry is unavailable",
    "click_count must be >= 1",
    "right double click is not supported",
    "perform UIA secondary action",
    "secondary action '",
    "no cached app state is available for ",
    "Computer Use requires approval to use ",
    "AppApprovalRequired",
    "launch_app requires an installed app id",
    "launch_app does not support pid app identifiers",
    "window bounds changed; call get_window_state",
    "user input was detected in this window",
    "window is not a usable app window",
    "window is minimized",
    "unknown screenshotId ",
    "no screenshots captured for ",
    "unsupported scroll direction: ",
    "pages must be a finite number > 0",
    "unsupported mouse_button: ",
    "unsupported key: ",
    "failed to install keyboard hook",
    "failed to install mouse hook",
    "Computer Use is disabled by policy",
    "Computer Use is not allowed on this app by policy",
    "browser URL policy",
    "is not allowed on the current browser URL",
    "computer-use turn interrupted by physical Escape key",
    "Computer Use was stopped by the user with the physical Escape key",
    "send window capture request",
    "window capture timed out",
    "get UI root element",
    "read UIA value",
    "set UIA value",
    "end_turn",
    "diagnostic_state",
    "list_apps",
    "list_windows",
    "get_window",
    "activate_window",
    "perform_secondary_action",
    "set_value",
    "click_element",
    "scroll_element",
    "click",
    "drag",
    "scroll",
    "type_text",
    "press_key",
    "close",
    "x-oai-cua-approved-app",
    "x-oai-cua-request-budget-ms",
    "--parent-pid",
    "max_duration_ms must be from ",
    "captured computer audio is too large",
]

TEXT_STRING_RE = re.compile(rb"[\x20-\x7e\t\r\n]{4,}")


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def entropy(data: bytes) -> float:
    if not data:
        return 0.0
    counts = Counter(data)
    total = len(data)
    return -sum((count / total) * math.log2(count / total) for count in counts.values())


def parse_functions(pe: pefile.PE) -> list[dict[str, int | str]]:
    result: list[dict[str, int | str]] = []
    pdata = next((s for s in pe.sections if s.Name.rstrip(b"\0") == b".pdata"), None)
    if pdata is None:
        return result
    raw = pdata.get_data()
    image_base = pe.OPTIONAL_HEADER.ImageBase
    for index in range(0, len(raw) - 11, 12):
        begin_rva, end_rva, unwind_rva = struct.unpack_from("<III", raw, index)
        if begin_rva == 0 or end_rva < begin_rva:
            continue
        result.append(
            {
                "index": index // 12,
                "rva": begin_rva,
                "va": image_base + begin_rva,
                "end_rva": end_rva,
                "end_va": image_base + end_rva,
                "size": end_rva - begin_rva,
                "unwind_rva": unwind_rva,
            }
        )
    return result


def extract_ascii_strings(pe: pefile.PE, data: bytes) -> list[dict[str, Any]]:
    image_base = pe.OPTIONAL_HEADER.ImageBase
    items: list[dict[str, Any]] = []
    for match in TEXT_STRING_RE.finditer(data):
        file_offset = match.start()
        try:
            rva = pe.get_rva_from_offset(file_offset)
        except Exception:
            continue
        if rva is None:
            continue
        raw = match.group(0)
        text = raw.decode("ascii", "replace")
        items.append(
            {
                "file_offset": file_offset,
                "rva": rva,
                "va": image_base + rva,
                "text": text,
            }
        )
    return items


def anchor_offsets(text: str) -> dict[int, list[str]]:
    result: dict[int, list[str]] = defaultdict(list)
    for anchor in ANCHORS:
        start = 0
        while True:
            index = text.find(anchor, start)
            if index < 0:
                break
            result[index].append(anchor)
            start = index + 1
    return result


def xrefs(pe: pefile.PE, functions: list[dict[str, Any]],
          strings: list[dict[str, Any]]) -> list[dict[str, Any]]:
    text = next((s for s in pe.sections if s.Name.rstrip(b"\0") == b".text"), None)
    if text is None:
        return []
    text_bytes = text.get_data()
    text_va = pe.OPTIONAL_HEADER.ImageBase + text.VirtualAddress
    targets: dict[int, list[str]] = defaultdict(list)
    for item in strings:
        for offset, matched in anchor_offsets(item["text"]).items():
            targets[int(item["va"]) + offset].extend(matched)

    starts = [int(f["va"]) for f in functions]

    def containing(va: int) -> dict[str, Any] | None:
        pos = bisect.bisect_right(starts, va) - 1
        if pos < 0:
            return None
        function = functions[pos]
        return function if int(function["va"]) <= va < int(function["end_va"]) else None

    md = capstone.Cs(capstone.CS_ARCH_X86, capstone.CS_MODE_64)
    md.detail = True
    found: list[dict[str, Any]] = []
    for insn in md.disasm(text_bytes, text_va):
        for operand in insn.operands:
            if operand.type != capstone.x86.X86_OP_MEM:
                continue
            if insn.reg_name(operand.mem.base) != "rip":
                continue
            target = insn.address + insn.size + operand.mem.disp
            if target not in targets:
                continue
            function = containing(insn.address)
            found.append(
                {
                    "target_va": target,
                    "anchors": sorted(set(targets[target])),
                    "from_va": insn.address,
                    "from_rva": insn.address - pe.OPTIONAL_HEADER.ImageBase,
                    "instruction": f"{insn.mnemonic} {insn.op_str}",
                    "function_va": int(function["va"]) if function else None,
                    "function_size": int(function["size"]) if function else None,
                }
            )
    return found


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--exe", type=Path, default=DEFAULT_EXE)
    parser.add_argument("--out", type=Path, required=True)
    args = parser.parse_args()
    data = args.exe.read_bytes()
    pe = pefile.PE(data=data, fast_load=False)
    out = args.out
    out.mkdir(parents=True, exist_ok=True)

    pe.parse_data_directories()

    sections = []
    for section in pe.sections:
        body = section.get_data()
        sections.append(
            {
                "name": section.Name.rstrip(b"\0").decode("ascii", "replace"),
                "va": pe.OPTIONAL_HEADER.ImageBase + section.VirtualAddress,
                "virtual_address": section.VirtualAddress,
                "virtual_size": section.Misc_VirtualSize,
                "raw_offset": section.PointerToRawData,
                "raw_size": section.SizeOfRawData,
                "entropy": round(entropy(body), 4),
                "sha256": sha256(body),
            }
        )

    functions = parse_functions(pe)
    strings = extract_ascii_strings(pe, data)
    anchor_strings = []
    for item in strings:
        matched = []
        for offs in anchor_offsets(item["text"]).values():
            matched.extend(offs)
        if matched:
            anchor_strings.append({**item, "anchors": sorted(set(matched))})
    xref_items = xrefs(pe, functions, strings)

    imports: dict[str, list[str]] = {}
    for entry in getattr(pe, "DIRECTORY_ENTRY_IMPORT", []):
        dll = entry.dll.decode("ascii", "replace")
        names = []
        for imported in entry.imports:
            names.append(imported.name.decode("ascii", "replace") if imported.name else f"ordinal:{imported.ordinal}")
        imports[dll] = names

    debug = []
    for entry in getattr(pe, "DIRECTORY_ENTRY_DEBUG", []):
        debug.append(
            {
                "type": entry.struct.Type,
                "size": entry.struct.SizeOfData,
                "raw_offset": entry.struct.PointerToRawData,
                "rva": entry.struct.AddressOfRawData,
                "timestamp": entry.struct.TimeDateStamp,
            }
        )

    cert_offset = pe.OPTIONAL_HEADER.DATA_DIRECTORY[pefile.DIRECTORY_ENTRY["IMAGE_DIRECTORY_ENTRY_SECURITY"]].VirtualAddress
    cert_size = pe.OPTIONAL_HEADER.DATA_DIRECTORY[pefile.DIRECTORY_ENTRY["IMAGE_DIRECTORY_ENTRY_SECURITY"]].Size
    overlay_offset = max(
        section.PointerToRawData + section.SizeOfRawData for section in pe.sections
        if section.PointerToRawData and section.SizeOfRawData
    )

    summary = {
        "input": str(args.exe),
        "file_size": len(data),
        "sha256": sha256(data),
        "machine": pe.FILE_HEADER.Machine,
        "pe_magic": hex(pe.OPTIONAL_HEADER.Magic),
        "image_base": hex(pe.OPTIONAL_HEADER.ImageBase),
        "entry_point_rva": pe.OPTIONAL_HEADER.AddressOfEntryPoint,
        "entry_point_va": hex(pe.OPTIONAL_HEADER.ImageBase + pe.OPTIONAL_HEADER.AddressOfEntryPoint),
        "timestamp_utc": datetime.fromtimestamp(pe.FILE_HEADER.TimeDateStamp, timezone.utc).isoformat(),
        "checksum": hex(pe.OPTIONAL_HEADER.CheckSum),
        "subsystem": pe.OPTIONAL_HEADER.Subsystem,
        "dll_characteristics": hex(pe.OPTIONAL_HEADER.DllCharacteristics),
        "sections": sections,
        "pdata_function_count": len(functions),
        "debug_entries": debug,
        "authenticode": {"file_offset": cert_offset, "size": cert_size},
        "last_section_end": overlay_offset,
        "overlay_size": max(0, len(data) - overlay_offset),
        "imports": imports,
        "anchor_string_count": len(anchor_strings),
        "anchor_xref_count": len(xref_items),
    }

    (out / "pe_summary.json").write_text(json.dumps(summary, indent=2) + "\n", encoding="utf-8")
    with (out / "functions.tsv").open("w", encoding="utf-8", newline="") as handle:
        handle.write("index\tva\trva\tend_va\tsize\tunwind_rva\n")
        for item in functions:
            handle.write(
                f"{item['index']}\t{int(item['va']):#x}\t{int(item['rva']):#x}\t"
                f"{int(item['end_va']):#x}\t{item['size']}\t{int(item['unwind_rva']):#x}\n"
            )

    with (out / "anchor_xrefs.tsv").open("w", encoding="utf-8", newline="") as handle:
        handle.write("anchor(s)\ttarget_va\tfrom_va\tfrom_rva\tfunction_va\tfunction_size\tinstruction\n")
        for item in xref_items:
            function_va = f"{item['function_va']:#x}" if item["function_va"] is not None else ""
            handle.write(
                f"{' | '.join(item['anchors'])}\t{item['target_va']:#x}\t"
                f"{item['from_va']:#x}\t{item['from_rva']:#x}\t"
                f"{function_va}\t{item['function_size'] or ''}\t{item['instruction']}\n"
            )

    with (out / "anchor_strings.tsv").open("w", encoding="utf-8", newline="") as handle:
        handle.write("anchor(s)\tva\trva\tfile_offset\ttext\n")
        for item in anchor_strings:
            text = item["text"].replace("\t", "\\t").replace("\n", "\\n").replace("\r", "\\r")
            handle.write(
                f"{' | '.join(item['anchors'])}\t{item['va']:#x}\t{item['rva']:#x}\t"
                f"{item['file_offset']:#x}\t{text}\n"
            )

    with (out / "imports.txt").open("w", encoding="utf-8", newline="") as handle:
        for dll, names in imports.items():
            handle.write(f"[{dll}]\n")
            for name in names:
                handle.write(f"{name}\n")
            handle.write("\n")

    yara = r'''rule CodexComputerUseWindowsHelper
{
    meta:
        description = "Codex Computer Use native Windows helper"
        sha256 = "SHA256_PLACEHOLDER"
        build_time = "TIMESTAMP_PLACEHOLDER"
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
'''.replace("SHA256_PLACEHOLDER", summary["sha256"]).replace("TIMESTAMP_PLACEHOLDER", summary["timestamp_utc"])
    (out / "codex_computer_use.yar").write_text(yara, encoding="utf-8")

    print(json.dumps({k: v for k, v in summary.items() if k not in {"imports", "sections"}}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
