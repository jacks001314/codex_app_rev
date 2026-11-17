#!/usr/bin/env python3
"""Compare the two packaged Codex Computer Use executables."""

from __future__ import annotations

import argparse
import hashlib
import json
import struct
from pathlib import Path

DEFAULT_A = Path(
    r"C:\Users\huoga\AppData\Local\OpenAI\Codex\runtimes\cua_node"
    r"\bbc9141fe9f920ac\bin\node_modules\@oai\cua\bin\windows\codex-computer-use.exe"
)
DEFAULT_B = Path(
    r"C:\Users\huoga\AppData\Local\OpenAI\Codex\runtimes\cua_node"
    r"\bbc9141fe9f920ac\bin\node_modules\@oai\sky\bin\windows\codex-computer-use.exe"
)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--a", type=Path, default=DEFAULT_A)
    parser.add_argument("--b", type=Path, default=DEFAULT_B)
    parser.add_argument("--out", type=Path, required=True)
    args = parser.parse_args()
    left = args.a.read_bytes()
    right = args.b.read_bytes()
    if len(left) != len(right):
        raise SystemExit("Input sizes differ; structural comparison assumptions do not hold")

    pe_offset = struct.unpack_from("<I", left, 0x3C)[0]
    optional = pe_offset + 24
    checksum_offset = optional + 64
    security_entry_offset = optional + 112 + 8 * 4
    security_offset, security_size = struct.unpack_from("<II", left, security_entry_offset)

    diffs = [index for index, (x, y) in enumerate(zip(left, right)) if x != y]
    code_and_unsigned_prefix = left[:security_offset]
    code_and_unsigned_prefix = (
        code_and_unsigned_prefix[:checksum_offset]
        + b"\0\0\0\0"
        + code_and_unsigned_prefix[checksum_offset + 4:]
    )
    prefix_b = right[:security_offset]
    prefix_b = prefix_b[:checksum_offset] + b"\0\0\0\0" + prefix_b[checksum_offset + 4:]

    ranges = []
    if diffs:
        start = previous = diffs[0]
        for value in diffs[1:]:
            if value == previous + 1:
                previous = value
                continue
            ranges.append({"start": start, "end_inclusive": previous, "bytes": previous - start + 1})
            start = previous = value
        ranges.append({"start": start, "end_inclusive": previous, "bytes": previous - start + 1})

    result = {
        "a": str(args.a),
        "b": str(args.b),
        "same_size": True,
        "size": len(left),
        "sha256_a": hashlib.sha256(left).hexdigest(),
        "sha256_b": hashlib.sha256(right).hexdigest(),
        "first_diff": diffs[0] if diffs else None,
        "last_diff": diffs[-1] if diffs else None,
        "diff_byte_count": len(diffs),
        "authenticode_start": security_offset,
        "authenticode_size": security_size,
        "diffs_before_authenticode": [x for x in diffs if x < security_offset],
        "diffs_inside_authenticode": sum(1 for x in diffs if security_offset <= x < security_offset + security_size),
        "diffs_after_authenticode": [x for x in diffs if x >= security_offset + security_size],
        "diff_ranges": ranges,
        "unsigned_prefix_sha256_a": hashlib.sha256(code_and_unsigned_prefix).hexdigest(),
        "unsigned_prefix_sha256_b": hashlib.sha256(prefix_b).hexdigest(),
        "unsigned_prefix_identical_ignoring_checksum": code_and_unsigned_prefix == prefix_b,
    }
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
