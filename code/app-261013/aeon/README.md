# aeon（dot）

dot 个人 agent 的可见实现。34 个 chunk，原始 308,379 B。

- `dot/orbit-conversation-route-*.js`：`/dots/thread/:threadId` 入口；
- `dot/aeon-thread-detail-*.js`：对话时间线与 turn 分组；
- `dot/aeon-onboarding-*.js` / `dot-onboarding-*.js`：介绍、名字、动画、交接；
- `dot/aeon-appearance-*.js`：头像 / 颜色；
- `dot/aeon-summary-panel-identity-*.js`：身份卡片与摘要面板；
- `dot/dot-*.js`：图标类 shim。

主体 UI 与文案在 `app-initial` / `app-shared`；本目录只是可抽取的部分。
分析见 `../../aeon-dot.md`。
