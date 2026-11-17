#!/usr/bin/env python3
"""Discover required JSON fields from the helper's serde parse errors.

Every case targets an intentionally invalid window. Once parsing succeeds, the
helper stops at validation/policy checks; no real UI target is used.
"""

from __future__ import annotations

import json
import os
import queue
import subprocess
import sys
from pathlib import Path
from typing import Any

from probe_protocol import DEFAULT_EXE, LineReader, request

FAKE_WINDOW = {"app": "process:does-not-exist.exe", "id": 4294967295}
METHODS = [
    "get_window_state",
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
]
PLACEHOLDERS = {
    "action": "Raise",
    "click_count": 1,
    "direction": "down",
    "element_index": 0,
    "key": "a",
    "max_duration_ms": 1000,
    "mouse_button": "left",
    "pages": 1,
    "screenshotId": "probe",
    "scrollX": 0,
    "scrollY": 0,
    "text": "probe",
    "value": "probe",
    "x": 1,
    "y": 1,
    "from_x": 1,
    "from_y": 1,
    "to_x": 2,
    "to_y": 2,
    "id": 4294967295,
}
INITIAL = {
    "get_window_state": {"window": FAKE_WINDOW, "include_text": True,
                         "include_screenshot": False},
    "get_window": {"id": 4294967295},
    "activate_window": {"window": FAKE_WINDOW},
    "perform_secondary_action": {"window": FAKE_WINDOW},
    "set_value": {"window": FAKE_WINDOW},
    "click_element": {"window": FAKE_WINDOW},
    "scroll_element": {"window": FAKE_WINDOW},
    "click": {"window": FAKE_WINDOW},
    "drag": {"window": FAKE_WINDOW},
    "scroll": {"window": FAKE_WINDOW},
    "type_text": {"window": FAKE_WINDOW},
    "press_key": {"window": FAKE_WINDOW},
}


def missing_field(error: str) -> str | None:
    marker = "missing field `"
    start = error.find(marker)
    if start < 0:
        return None
    start += len(marker)
    end = error.find("`", start)
    return error[start:end] if end >= 0 else None


def main() -> int:
    parser_output = Path(__file__).resolve().parent.parent / "evidence" / "field_discovery.json"
    proc = subprocess.Popen(
        [str(DEFAULT_EXE), "--parent-pid", str(os.getpid())],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        encoding="utf-8",
        errors="replace",
        bufsize=1,
        creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0),
    )
    assert proc.stdin is not None and proc.stdout is not None and proc.stderr is not None
    reader = LineReader(proc.stdout)
    stderr_reader = LineReader(proc.stderr)
    reader.start()
    stderr_reader.start()
    events: list[Any] = []
    output: dict[str, Any] = {"helper_pid": proc.pid, "cases": []}
    request_id = 0
    try:
        for method in METHODS:
            params = dict(INITIAL[method])
            history: list[dict[str, Any]] = []
            inferred_required = list(params)
            terminal: dict[str, Any] | None = None
            for _ in range(12):
                request_id += 1
                response = request(proc, reader, request_id, method, params,
                                   10.0, events)
                history.append({"params": params, "response": response})
                field = missing_field(response.get("error", "")) if not response.get("ok") else None
                if field is None:
                    terminal = response
                    break
                if field not in inferred_required:
                    inferred_required.append(field)
                params[field] = PLACEHOLDERS.get(field, 1)
            output["cases"].append({
                "method": method,
                "inferred_required_fields": inferred_required,
                "final_params": params,
                "terminal_response": terminal,
                "history": history,
            })
        request_id += 1
        output["close_response"] = request(proc, reader, request_id, "close", {},
                                           3.0, events)
    except Exception as exc:
        output["probe_error"] = f"{type(exc).__name__}: {exc}"
    finally:
        try:
            proc.stdin.close()
        except OSError:
            pass
        try:
            proc.wait(timeout=2)
        except subprocess.TimeoutExpired:
            proc.terminate()
            proc.wait(timeout=2)
        output["exit_code"] = proc.returncode
    stderr_lines: list[str] = []
    while True:
        try:
            line = stderr_reader.lines.get_nowait()
        except queue.Empty:
            break
        if line is None:
            break
        stderr_lines.append(line)
    output["events"] = events
    output["stderr"] = stderr_lines
    parser_output.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n",
                             encoding="utf-8")
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="backslashreplace")
    except AttributeError:
        pass
    for case in output["cases"]:
        response = case.get("terminal_response") or {}
        print(f"{case['method']}: required={case['inferred_required_fields']} "
              f"terminal={response.get('error') or response.get('ok')}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
