# chatgpt-surfaces

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 17 个文件 / raw 3.1 MB / formatted 5.5 MB，模块级文案 2337 条（323 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `191628.7c4ce6e8ec.js` | 695711 | 316 | namespace-score |
| `35015.1e5f235976.js` | 330655 | 221 | mandatory |
| `323764.6d76b66079.js` | 323756 | 171 | mandatory |
| `442499.5c30651de2.js` | 257300 | 363 | mandatory |
| `715004.afca727b16.js` | 253084 | 150 | namespace-score |
| `361976.a36c0a4ae6.js` | 230851 | 157 | mandatory |
| `108287.6a09530a37.js` | 174504 | 213 | namespace-score |
| `29761.32b25894b1.js` | 166147 | 110 | namespace-score |
| `852152.682ba1ee46.js` | 138908 | 173 | namespace-score |
| `750100.a0e08077cb.js` | 121021 | 158 | namespace-score |
| `135839.d6a2f77de3.js` | 114003 | 72 | mandatory |
| `867815.d8ff1378d3.js` | 104408 | 94 | namespace-score |
| `280944.44f33a3dc4.js` | 101795 | 110 | namespace-score |
| `578056.237c37e0c3.js` | 99380 | 79 | namespace-score |
| `677003.e96c722267.js` | 41457 | 74 | namespace-score |
| `581340.42417af9f6.js` | 33999 | 51 | mandatory |
| `101248.28fff59425.js` | 26130 | 0 | mandatory |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `electron.onboarding` | 506 |
| `onboarding.health_department` | 145 |
| `home.newChatPageSuggestions` | 102 |
| `chatgpt.tpp` | 99 |
| `orbit.onboarding` | 81 |
| `chatgpt.work` | 74 |
| `chatgpt.logout` | 63 |
| `gptBuilder.actions` | 62 |

## 开发者描述（节选）

- `artifactHandoff.untitledDocument` — Untitled document
  - Fallback name for a shared local document without a title
- `chatgpt.resurrected-onboarding.conversation.title` — Welcome back
  - Title shown in ChatGPT conversation history for the one-time welcome-back conversation created when a returning personal-account user resumes ChatGPT after at least 30 days of inactivity. Short conversation title with no placeholders.
- `chatgpt.tpp.onboarding.conversation.title.default` — Getting started
  - Default title for a Work onboarding conversation
- `chatgpt.tpp.onboarding.mock_setup.writing_style.prompt.fallback` — Learn how I write based on my past conversations and emails! Help me connect my email if I haven't already and show me different examples of how I write so I can confirm it's like me!
  - Fallback user-visible prompt submitted when an end user selects the writing style card in the mock ChatGPT Work setup and separate hidden skill-routing instructions are unavailable. It asks ChatGPT to infer the user's writing style from past conversations and emails, help the user connect their email if needed, and show writing examples for the user to confirm. Multi-sentence request with an enthusiastic tone. No markup or placeholders.
- `chatgpt.tpp.onboarding.mock_setup.writing_style.prompt.user_request` — Learn my writing style
  - User-visible prompt submitted when an end user selects the writing style card in the mock ChatGPT Work setup. It asks ChatGPT to learn the user's writing style. Internal skill-routing instructions are provided separately, so this short standalone request must not name a skill or internal agent. No markup or placeholders.
- `chatgpt.tpp.onboarding.personalize.next_steps.daily_briefing.prompt.user_request` — Create a daily automation that prepares a concise briefing focused on my connected apps like email, calendar, and Slack. Show me the automation before enabling it.
  - User-visible prompt submitted when an end user selects Send me a daily briefing in the ChatGPT Work personalization onboarding conversation. It asks ChatGPT to prepare a recurring daily briefing using connected tools such as email, calendar, and Slack, then show the proposed scheduled automation for approval before activating it. Slack is a product name and must remain unchanged. No markup or placeholders.

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
