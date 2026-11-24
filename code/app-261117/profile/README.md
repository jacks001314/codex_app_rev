# profile

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 8 个文件 / raw 1.0 MB / formatted 1.8 MB，模块级文案 474 条（119 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `752759.4138b8f3b5.js` | 259293 | 108 | namespace-score |
| `192656.1020aa3fa3.js` | 254409 | 75 | mandatory |
| `403035.6125ee3031.js` | 202432 | 150 | mandatory |
| `584510.c1d851429e.js` | 148090 | 112 | mandatory |
| `690257.756fe5dfef.js` | 62276 | 50 | namespace-score |
| `351719.df098f4545.js` | 55606 | 49 | namespace-score |
| `211440.f313ef3e83.js` | 49577 | 69 | namespace-score |
| `997680.117d42adff.js` | 46777 | 54 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `codex.referralInviteModal` | 49 |
| `profile.showcase` | 40 |
| `codex.projectAppearance` | 39 |
| `profile.sticker` | 28 |
| `profile.edit` | 27 |
| `chatgpt.profile` | 20 |
| `profile.activity` | 18 |
| `space.teamHome` | 13 |

## 开发者描述（节选）

- `chatgpt.profile.usage.chart.activity.aria_label` — Activity
  - Accessible label for the unified profile chart showing chat and token activity. Daily and weekly views use the stronger of the independently scaled chat and token levels; cumulative accumulates unified weekly activity.
- `chatgpt.profile.usage.chart.aria_label` — Codex token activity
  - Accessible label for the colored grid displaying the current user's daily, weekly, or cumulative Codex token activity on their profile page.
- `chatgpt.profile.usage.chart.chats.aria_label` — Chat activity
  - Accessible label for the profile chart showing daily, weekly, or cumulative chat counts.
- `chatgpt.profile.usage.tooltip.activity` — {view, select, daily {{chats, plural, one {# chat} other {# chats}} \xb7 {tokens} tokens on {date}} weekly {{chats, plural, one {# chat} other {# chats}} \xb7 {tokens} tokens on week of {date}} other {{chats, plural, one {# chat} other {# chats}} \xb7 {tokens} tokens through week of {date}}}
  - Tooltip for the unified profile activity chart, showing separate chat and token counts. chats is a nonnegative chat count, tokens is a localized compact token count, and date is a localized UTC date. view selects daily totals, weekly totals, or running totals from the start of the chart through that week.
- `chatgpt.profile.usage.tooltip.chats` — {view, select, daily {{count, plural, one {# chat} other {# chats}} on {date}} weekly {{count, plural, one {# chat} other {# chats}} on week of {date}} other {{count, plural, one {# chat} other {# chats}} through week of {date}}}
  - Tooltip for the profile chat activity chart. count is the nonnegative number of chats, date is a localized UTC date, and view selects daily, weekly, or cumulative totals.
- `chatgpt.profile.usage.tooltip.cumulative` — {tokens} tokens through week of {date}
  - Short tooltip and accessible label for a column in the user's profile cumulative Codex token-activity chart. {tokens} is the localized compact running token total from the start of the chart through that week, possibly zero; {date} is the localized UTC date and year of the week's first day. This is a cumulative total, not the total for only that week.

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
