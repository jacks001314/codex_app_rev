#!/usr/bin/env python3
"""Probe one helper process across multiple JSONL requests.

This keeps the window object returned by list_windows in the same helper process
that later calls get_window and get_window_state. It is useful for distinguishing
real schema/policy behavior from stale cross-process window identifiers.
"""

from __future__ import annotations

import argparse
import json
import os
import queue
import subprocess
import sys
from pathlib import Path
from typing import Any

from probe_protocol import DEFAULT_EXE, LineReader, request


def drain_lines(reader: LineReader) -> list[str]:
    lines: list[str] = []
    while True:
        try:
            line = reader.lines.get_nowait()
        except queue.Empty:
            break
        if line is None:
            break
        lines.append(line)
    return lines


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--exe", type=Path, default=DEFAULT_EXE)
    parser.add_argument("--title-contains", default="Syntropy")
    parser.add_argument("--include-text", action="store_true")
    parser.add_argument("--include-screenshot", action="store_true")
    parser.add_argument("--timeout", type=float, default=15.0)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()

    if not args.include_text and not args.include_screenshot:
        parser.error("the helper requires include_text and/or include_screenshot")

    proc = subprocess.Popen(
        [str(args.exe), "--parent-pid", str(os.getpid())],
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
    stdout_reader = LineReader(proc.stdout)
    stderr_reader = LineReader(proc.stderr)
    stdout_reader.start()
    stderr_reader.start()

    events: list[Any] = []
    transcript: dict[str, Any] = {
        "helper_pid": proc.pid,
        "selection": {"title_contains": args.title_contains},
        "requests": [],
    }
    selected_window: dict[str, Any] | None = None
    try:
        listed = request(proc, stdout_reader, 1, "list_windows", {},
                         args.timeout, events)
        transcript["requests"].append({"id": 1, "method": "list_windows",
                                       "response": listed})
        windows = listed.get("result") if listed.get("ok") else None
        if isinstance(windows, list):
            for window in windows:
                title = window.get("title") if isinstance(window, dict) else None
                if isinstance(title, str) and args.title_contains.lower() in title.lower():
                    selected_window = window
                    break
        transcript["selected_window"] = selected_window

        if selected_window is not None:
            get_window = request(
                proc, stdout_reader, 2, "get_window",
                {"id": selected_window.get("id")}, args.timeout, events,
            )
            transcript["requests"].append({"id": 2, "method": "get_window",
                                           "response": get_window})

            state = request(
                proc, stdout_reader, 3, "get_window_state",
                {
                    "window": {
                        "app": selected_window.get("app"),
                        "id": selected_window.get("id"),
                    },
                    "include_text": args.include_text,
                    "include_screenshot": args.include_screenshot,
                },
                args.timeout,
                events,
            )
            transcript["requests"].append({"id": 3, "method": "get_window_state",
                                           "response": state})

        try:
            close_response = request(proc, stdout_reader, 4, "close", {},
                                     3.0, events)
            transcript["requests"].append({"id": 4, "method": "close",
                                           "response": close_response})
        except Exception as exc:
            transcript["close_error"] = f"{type(exc).__name__}: {exc}"
    except Exception as exc:
        transcript["probe_error"] = f"{type(exc).__name__}: {exc}"
    finally:
        try:
            if proc.stdin and not proc.stdin.closed:
                proc.stdin.close()
        except OSError:
            pass
        try:
            proc.wait(timeout=2)
        except subprocess.TimeoutExpired:
            proc.terminate()
            try:
                proc.wait(timeout=2)
            except subprocess.TimeoutExpired:
                proc.kill()
                proc.wait(timeout=2)
        transcript["exit_code"] = proc.returncode

    transcript["events"] = events
    transcript["stderr"] = drain_lines(stderr_reader)
    text = json.dumps(transcript, ensure_ascii=False, indent=2)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(text + "\n", encoding="utf-8")
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="backslashreplace")
    except AttributeError:
        pass
    print(text)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
