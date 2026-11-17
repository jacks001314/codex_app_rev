#!/usr/bin/env python3
"""Run isolated, non-destructive validation probes for each helper method."""

from __future__ import annotations

import json
import subprocess
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
PROBE = HERE / "probe_protocol.py"
OUT = HERE.parent / "evidence" / "method_validation_matrix.json"
FAKE_WINDOW = {"app": "process:does-not-exist.exe", "id": 4294967295}

CASES = [
    ("unknown_method", "does_not_exist", {}),
    ("start_audio_bad_duration", "start_audio_recording", {"max_duration_ms": 0}),
    ("get_window_state_missing", "get_window_state", {}),
    ("get_window_missing", "get_window", {}),
    ("activate_window_missing", "activate_window", {}),
    ("perform_secondary_action_missing", "perform_secondary_action", {}),
    ("set_value_missing", "set_value", {}),
    ("click_element_missing", "click_element", {}),
    ("scroll_element_missing", "scroll_element", {}),
    ("click_missing", "click", {}),
    ("drag_missing", "drag", {}),
    ("scroll_missing", "scroll", {}),
    ("type_text_missing", "type_text", {}),
    ("press_key_missing", "press_key", {}),
    ("launch_app_missing", "launch_app", {}),
    (
        "get_window_state_both_disabled",
        "get_window_state",
        {
            "window": {"app": "process:does-not-exist.exe", "id": 0},
            "include_text": False,
            "include_screenshot": False,
        },
    ),
    ("get_window_state_fake_window", "get_window_state", {
        "window": FAKE_WINDOW, "include_text": True, "include_screenshot": False,
    }),
    ("get_window_fake_window", "get_window", {"id": FAKE_WINDOW["id"]}),
    ("activate_window_fake_window", "activate_window", {"window": FAKE_WINDOW}),
    ("perform_secondary_action_fake_window", "perform_secondary_action", {"window": FAKE_WINDOW}),
    ("set_value_fake_window", "set_value", {"window": FAKE_WINDOW}),
    ("click_element_fake_window", "click_element", {"window": FAKE_WINDOW}),
    ("scroll_element_fake_window", "scroll_element", {"window": FAKE_WINDOW}),
    ("click_fake_window", "click", {"window": FAKE_WINDOW}),
    ("drag_fake_window", "drag", {"window": FAKE_WINDOW}),
    ("scroll_fake_window", "scroll", {"window": FAKE_WINDOW}),
    ("type_text_fake_window", "type_text", {"window": FAKE_WINDOW}),
    ("press_key_fake_window", "press_key", {"window": FAKE_WINDOW}),
    ("launch_app_unknown", "launch_app", {"app": "process:does-not-exist.exe"}),
]


def main() -> int:
    results = []
    with tempfile.TemporaryDirectory(prefix="cua-probe-") as temp:
        for index, (label, method, params) in enumerate(CASES):
            raw_path = Path(temp) / f"{index}-{label}.json"
            completed = subprocess.run(
                [
                    sys.executable,
                    str(PROBE),
                    "--method",
                    method,
                    "--params",
                    json.dumps(params, separators=(",", ":")),
                    "--timeout",
                    "15",
                    "--output",
                    str(raw_path),
                ],
                text=True,
                encoding="utf-8",
                errors="replace",
                stdout=subprocess.DEVNULL,
                stderr=subprocess.PIPE,
                timeout=30,
            )
            item = {
                "case": label,
                "method": method,
                "params": params,
                "probe_exit": completed.returncode,
                "probe_stderr": completed.stderr,
            }
            if raw_path.exists():
                raw = json.loads(raw_path.read_text(encoding="utf-8"))
                response = raw.get("response", {})
                item["ok"] = response.get("ok")
                item["error"] = response.get("error")
                item["approval_request"] = response.get("approvalRequest")
                item["result_type"] = type(response.get("result")).__name__ if "result" in response else None
                item["helper_exit_code"] = raw.get("exit_code")
            results.append(item)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(results, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="backslashreplace")
    except AttributeError:
        pass
    for item in results:
        print(f"{item['case']}: {item.get('error') or item.get('ok')}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
