# settings（26.1013）

设置外壳、52 个导航页、onboarding 与搜索索引。551 个 chunk，原始 10,181,509 B。

- `_SETTINGS_MAP.json`：**权威注册表**（52 nav / 53 slug / 54 loader）；
- `shell/`：`settings-page-*.js` 的四组导航、路由、通用行组件；
- `pages/`：各设置页实现；
- `onboarding/`：登录、onboarding、订阅；
- `search-index/`：`_virtual_settings-search-documents-*.js`。

26.1013 的 loader 格式已从 `b3(...)` 变为 `vQ(...)`，并出现
`billing:vQ(HDo)`、`general-settings:sIs` 这类别名。`code/tools/settings-map.mjs`
已支持两种格式。分析见 `../../settings-pages.md` §8.4。
