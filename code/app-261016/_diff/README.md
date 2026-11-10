# 26.1013 → 26.1016 机器可读差异

- `i18n-diff-261013-to-261016.json`：完整新增 / 删除 / 同 id 改写消息，
  含 description、文件列表与按 group 汇总；
- `module-diff-261013-to-261016.json`：两侧 `_INDEX.json` 的 SHA-256 对照，
  包括每个模块的 byte-identical / added / removed 计数及完整文件列表；
- `protocol-diff-261013-to-261016.json`：共享 bundle 与抽取代码中的 namespace
  方法、`codex_desktop:*` 频道集合差异。

module diff 使用原始 chunk 的 SHA-256，因此可把“仅因共享 import hash 变化而
重写”的文件与真正新增文件区分开。i18n diff 使用完整 message id，而不是
chunk family 或文案文本。

生成脚本位于 gitignore 的 `.work/261016/`，不随代码快照入库。
