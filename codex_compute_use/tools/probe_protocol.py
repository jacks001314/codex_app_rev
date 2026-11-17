#!/usr/bin/env python3
"""Controlled JSONL probe for codex-computer-use.exe.

The helper is a line-delimited JSON service: one JSON object per request on
stdin and one JSON object per response/event on stdout. This script keeps stdin
open, correlates a response by id, and always terminates the helper afterwards.
"""

from __future__ import annotations

import argparse
import json
import os
import queue
import subprocess
import sys
import threading
import time
from pathlib import Path
from typing import Any

DEFAULT_EXE = Path(
    r"C:\Users\huoga\AppData\Local\OpenAI\Codex\runtimes\cua_node"
    r"\bbc9141fe9f920ac\bin\node_modules\@oai\cua\bin\windows\codex-computer-use.exe"
)


class LineReader(threading.Thread):
    def __init__(self, stream) -> None:
        super().__init__(daemon=True)
        self.stream = stream
        self.lines: queue.Queue[str | None] = queue.Queue()

    def run(self) -> None:
        try:
            for line in self.stream:
                self.lines.put(line.rstrip("\r\n"))
        finally:
            self.lines.put(None)


def request(proc: subprocess.Popen[str], reader: LineReader, request_id: int,
            method: str, params: dict[str, Any], timeout: float,
            events: list[Any], meta: dict[str, Any] | None = None) -> Any:
    payload: dict[str, Any] = {"id": request_id, "method": method, "params": params}
    if meta:
        payload["meta"] = meta
    proc.stdin.write(json.dumps(payload, separators=(",", ":")) + "\n")
    proc.stdin.flush()
    deadline = time.monotonic() + timeout
    while True:
        remaining = deadline - time.monotonic()
        if remaining <= 0:
            raise TimeoutError(f"No response for id={request_id} method={method}")
        try:
            line = reader.lines.get(timeout=remaining)
        except queue.Empty as exc:
            raise TimeoutError(f"No response for id={request_id} method={method}") from exc
        if line is None:
            raise RuntimeError(f"Helper stdout closed while awaiting id={request_id}")
        try:
            message = json.loads(line)
        except json.JSONDecodeError:
            events.append({"non_json_stdout": line})
            continue
        if not isinstance(message, dict) or message.get("id") != request_id:
            events.append(message)
            continue
        return message


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--exe", type=Path, default=DEFAULT_EXE)
    parser.add_argument("--method", required=True)
    parser.add_argument("--params", default="{}", help="JSON object; default: {}")
    parser.add_argument("--meta", default="{}", help="Optional request meta JSON object")
    parser.add_argument("--timeout", type=float, default=10.0)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()

    params = json.loads(args.params)
    meta = json.loads(args.meta)
    if not isinstance(params, dict):
        parser.error("--params must decode to a JSON object")
    if not isinstance(meta, dict):
        parser.error("--meta must decode to a JSON object or be omitted")

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
    assert proc.stdin is not None and proc.stdout is not None
    stdout_reader = LineReader(proc.stdout)
    stderr_reader = LineReader(proc.stderr)
    stdout_reader.start()
    stderr_reader.start()

    events: list[Any] = []
    result: dict[str, Any] = {
        "request": {"method": args.method, "params": params, "meta": meta},
        "helper_pid": proc.pid,
    }
    try:
        result["response"] = request(proc, stdout_reader, 1, args.method, params,
                                     args.timeout, events, meta=meta)
        try:
            request(proc, stdout_reader, 2, "close", {}, 3.0, events)
        except Exception as exc:
            result["close_error"] = str(exc)
    except Exception as exc:
        result["probe_error"] = f"{type(exc).__name__}: {exc}"
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
        result["exit_code"] = proc.returncode

    stderr_lines: list[str] = []
    while True:
        try:
            line = stderr_reader.lines.get_nowait()
        except queue.Empty:
            break
        if line is None:
            break
        stderr_lines.append(line)
    result["events"] = events
    result["stderr"] = stderr_lines

    text = json.dumps(result, ensure_ascii=False, indent=2)
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
