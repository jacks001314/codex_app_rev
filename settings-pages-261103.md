# 设置页注册表（26.1103）

> 证据等级：A。来源：`405910.89912dbb76.js`（slug 表 / 导航组）、
> `499225.6d2e47bea2.js`（有序描述符 / 默认 section）、
> `324957.776af63e2a.js`（可见性 switch / 能力门控）。

> 未做运行时插桩；“恒真/恒假/条件”是代码判定，不等于当前账号实际可见。

## 1. 总量

- slug 全表：**53** 个；
- 有序描述符：**53** 个；
- 导航组：**4** 组（personal / teams / integrations / coding）；
- 默认 section：`general-settings`；
- 非 Electron 允许的 section：**13** 个；
- 能力门控映射：**41** 项。

## 2. slug 表

| # | slug | 导航组 | 可见性条件 | 候选 chunk（按文案命中） |
| ---: | --- | --- | --- | --- |
| 1 | `general-settings` | personal | 恒真（`visible:!0`） | `107421.a695473920.js` (2) |
| 2 | `notifications` | personal | `e9 && allowed` | `906413.d516cc1a4f.js` (7) |
| 3 | `import` | personal | `!tE && e6 && !e2` | `837769.5833a3e219.js` (84) |
| 4 | `profile` | personal | `isProfileVisible`（tW） | `107421.a695473920.js` (2) |
| 5 | `security` | personal | 恒假 | `107421.a695473920.js` (2) |
| 6 | `account` | personal | authMethod 为 chatgpt/chatgptAuthTokens | `107421.a695473920.js` (2) |
| 7 | `age` | — | `e8` | — |
| 8 | `agreements` | personal | `te.status === "allowed"` | — |
| 9 | `parental-controls` | personal | `tt.status === "allowed"` | `107421.a695473920.js` (1) |
| 10 | `trusted-contact` | personal | `allowed && tr === true` | — |
| 11 | `safety` | personal | `!tE && tc` | — |
| 12 | `time-management` | — | 恒假 | `107421.a695473920.js` (1) |
| 13 | `appearance` | personal | 恒真 | `553834.8bcca01908.js` (30) |
| 14 | `voice` | personal | `appServices.dictationHistory != null || tV || tT || tH || tj` | `970028.44e55a22de.js` (27) |
| 15 | `storage` | personal | `appServices.managedWorktrees != null && eP` | `258250.86a3c8cb72.js` (46) |
| 16 | `pets` | personal | `eq`；移动端直接恒假 | `792994.52836b339c.js` (28) |
| 17 | `chronicle` | integrations | `eV && 可用 && 非加载` | `836008.08f49bd4ec.js` (143) |
| 18 | `appshots` | integrations | `tI` | `909697.9f403bd31f.js` (17) |
| 19 | `git-settings` | coding | 恒真 | `107421.a695473920.js` (2) |
| 20 | `connections` | coding | `eD && !eR` | `107421.a695473920.js` (2) |
| 21 | `cloud-settings` | coding | `!tE && tC.visible` | — |
| 22 | `codex-cloud` | coding | `cloudAccess === true` 且 `tG` | — |
| 23 | `cloud-environments` | coding | `tG` 时走 `tC`，否则隐藏 | — |
| 24 | `code-review` | coding | `cloud.visible || app.visible` | — |
| 25 | `local-environments` | coding | 恒真 | `107421.a695473920.js` (2) |
| 26 | `worktrees` | coding | 恒真 | `851065.6d7fb580fa.js` (49) |
| 27 | `agent` | personal | `eW || (e9 && tk.isCapable && allowed)` | `309406.7154f09b4b.js` (56) |
| 28 | `work-settings` | — | `tk.isCapable && ty.status === "allowed"` | — |
| 29 | `personalization` | personal | 恒真 | `338923.5e5c677ceb.js` (27) |
| 30 | `keyboard-shortcuts` | personal | 恒真 | `107421.a695473920.js` (2) |
| 31 | `codex-micro` | integrations | `eY && eX === true` | `107421.a695473920.js` (2) |
| 32 | `usage` | personal | `tY`（usage 可见性 hook） | `832672.5d5bbf639a.js` (146) |
| 33 | `billing` | personal | 恒假 | `107421.a695473920.js` (1) |
| 34 | `analytics` | personal | `tY && (企业 plan 校验 || tS || t$)` | `107421.a695473920.js` (2) |
| 35 | `consumer-view` | personal | `!tE && !tK && t6` | — |
| 36 | `usage-code-review` | personal | `t3 && !!t4` | — |
| 37 | `debug` | personal | `allowDebugMenu("prod") || GPU tearing debug` | `851255.4d8ab51350.js` (4) |
| 38 | `browser-use` | integrations | `nn || t_` | `107421.a695473920.js` (2) |
| 39 | `extension` | integrations | 恒假 | — |
| 40 | `computer-use` | integrations | `nt`（本机/云端能力） | `107421.a695473920.js` (1) |
| 41 | `mcp-settings` | integrations | 恒真 | `107421.a695473920.js` (2) |
| 42 | `gateways` | coding | `e3 && !tE`（gateway 能力 + 非加载中） | `680701.36ae631051.js` (84) |
| 43 | `hooks-settings` | coding | 恒真 | `107421.a695473920.js` (2) |
| 44 | `plugins-settings` | integrations | `eG` | `107421.a695473920.js` (2) |
| 45 | `file-type-handlers` | integrations | `ej.visible || (ej.enabled && 当前 section 是该页)` | `107421.a695473920.js` (1) |
| 46 | `rosalind` | integrations | `eG && eN != null`（实验室/访问状态） | `107421.a695473920.js` (1) |
| 47 | `skills-settings` | integrations | 恒假 | `107421.a695473920.js` (2) |
| 48 | `data-controls` | personal | authMethod 为 chatgpt/chatgptAuthTokens | — |
| 49 | `archived-chats` | personal | 恒真（`pending: na`） | `107421.a695473920.js` (1) |
| 50 | `ads-controls` | personal | `e5` | `107421.a695473920.js` (1) |
| 51 | `teams` | teams | `e4 && e9 && authMethod==="chatgpt" && workspace 结构 && id 匹配` | `424391.8693f01cd4.js` (112) |
| 52 | `cloud-computer` | integrations | `e9 && (允许状态)` | — |
| 53 | `passwords` | integrations | `tg || tm` | `615197.759a20d54a.js` (8) |

## 3. 导航顺序

```text
[personal] (settings.nav.heading.personal)
general-settings → notifications → import → profile → appearance → security → account → data-controls → archived-chats → ads-controls → parental-controls → trusted-contact → safety → voice → storage → agent → personalization → pets → keyboard-shortcuts → usage → billing → analytics → consumer-view → usage-code-review → debug → agreements

[teams]
teams

[integrations]
plugins-settings → file-type-handlers → rosalind → passwords → computer-use → chronicle → appshots → codex-micro → mcp-settings → skills-settings → browser-use → cloud-computer → extension

[coding] (settings.nav.heading.coding)
hooks-settings → gateways → connections → cloud-settings → codex-cloud → cloud-environments → code-review → git-settings → local-environments → environments → worktrees

```

## 4. 能力门控

| slug | 能力键 |
| --- | --- |
| `account` | `chatGpt` |
| `age` | `chatGpt` |
| `agreements` | `chatGpt` |
| `work-settings` | `chatGpt` |
| `notifications` | `chatGpt` |
| `ads-controls` | `chatGpt` |
| `parental-controls` | `chatGpt` |
| `trusted-contact` | `chatGpt` |
| `safety` | `chatGpt` |
| `billing` | `chatGpt` |
| `agent` | `chatGptOrCodex` |
| `analytics` | `codex` |
| `usage-code-review` | `codex` |
| `appshots` | `codexOrWorkLocal` |
| `extension` | `chatGpt` |
| `cloud-computer` | `chatGpt` |
| `passwords` | `chatGpt` |
| `chronicle` | `codexOrWorkLocal` |
| `codex-micro` | `codexLocal` |
| `computer-use` | `codexOrWorkLocal` |
| `connections` | `codexLocal` |
| `consumer-view` | `codex` |
| `data-controls` | `chatGptOrCodex` |
| `archived-chats` | `chatGptOrCodex` |
| `git-settings` | `codexLocal` |
| `hooks-settings` | `codexLocal` |
| `gateways` | `codexLocal` |
| `import` | `codexOrWorkLocal` |
| `keyboard-shortcuts` | `codex` |
| `local-environments` | `codexLocal` |
| `mcp-settings` | `codexOrWorkLocal` |
| `plugins-settings` | `codexOrWorkLocal` |
| `file-type-handlers` | `codexOrWorkLocal` |
| `rosalind` | `codexOrWorkLocal` |
| `profile` | `codex` |
| `security` | `chatGpt` |
| `storage` | `chatGptOrCodex` |
| `skills-settings` | `codexOrWorkLocal` |
| `usage` | `codex` |
| `voice` | `chatGptOrCodex` |
| `worktrees` | `codexLocal` |

## 5. 非 Electron 允许的 section

```text
profile, agent, personalization, mcp-settings, plugins-settings, file-type-handlers, hooks-settings, gateways, local-environments, worktrees, storage, archived-chats, voice
```

## 6. 结构性问题

- 导航组 `coding` 仍包含 `environments`，但 descriptor 表与 slug 表都没有它，属于悬空项；
- `age`、`time-management` 不在任何导航组中，只能从其他页面（Account / Safety）跳转；
- `family` 在可见性 switch 中有分支，但不在 slug 表内，可能是旧功能残留；
- `extension` 被硬编码隐藏，但 integrations 组仍引用它。
