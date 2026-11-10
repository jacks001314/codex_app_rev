# settings（26.1016）

设置外壳、53 个导航页、onboarding 与搜索索引。563 个 chunk，原始 10,070,735 B。

- `_SETTINGS_MAP.json`：权威注册表（53 nav / 54 slug / 55 loader）；
- `shell/settings-c2fddca9a1ec.js`：Model Providers / Gateways；
- `shell/settings-d7661829b85a.js`：Face / Voice verification；
- `pages/use-visible-settings-sections-f3457cb7f00e.js`：运行时可见性；
- `pages/page-a4f99675beb4.js`：usage / analytics / consumer-view 共用实现；
- `search-index/`：设置搜索文档；
- `_deps/`：USB passkey 等闭包组件。

26.1016 的 loader 包装函数为 `M$`，首键为 `gateways`。
`code/tools/settings-map.mjs` 已适配，且 `resolved_chunks_not_extracted` 为 0。

Gateways 的 `config/*`、`account/*`、`thread/*`、`turn/*` 组合与
Biometric REST 端点见 `../../../changelog-26.1016.md` §5.1–§5.2。
