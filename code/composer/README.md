# composer — 对话框

**45 个文件 / 0.72 MB**，274 条 i18n 文案。
完整分析见 [`../../composer.md`](../../composer.md)。

> **composer 主体在共享 bundle `app-primary` 里**，本目录是围绕它的可插拔部分。

## core/

| chunk                                                              | 导出 / 作用                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| `composer-utility-bar-85736f3cc588.js` (29 KB)                     | `ComposerUtilityBar` —— composer 下方工具条容器                       |
| `composer-action-bar-run-location-dropdown-493913fdcca2.js` (6 KB) | Run location 下拉（On your computer / In the cloud）                  |
| `composer-project-selector-17ef0c338d41.js` (5 KB)                 | 项目选择器                                                            |
| `composer-work-home-plugins-control-40bb3845a52f.js` (10 KB)       | Work 模式的插件控制                                                   |
| `home-composer-mode-toggle-3e742c6c7534.js` (9 KB)                 | 首页 Chat/Work 分段开关                                               |
| `primary-composer-at-mention-list-f7e9ab40467d.js` (5 KB)          | `@` 提及列表（按 source 分流，sites 走 `typedSitesMentionRef`）       |
| `composer-provider-7434c8b2fdca.js` (7 KB)                         | ★ response spacer 控制器 + 全局唯一 active composer 的 external store |
| `unified-floating-composer.electron-d188e27a467a.js` (0.6 KB)      | 统一浮动 composer 的 Electron 装配 shim                               |
| `composer-overlay-f2c80b19233e.js`                                 | overlay 容器                                                          |
| `right-panel-composer-overlay-7bbacd6f9f94.js` (23 KB)             | 右侧面板（side chat）内的 composer                                    |
| `browser-composer-disclaimer-72402b5f9ca1.js` (11 KB)              | 浏览器场景免责声明（11 种工作区变体）                                 |
| `composer-39c510ee3609.js` (3.7 KB)                                | `BrowserSkillsComposer` —— 浏览器技能的 `@`/ `/` 命令注册             |
| `use-chatgpt-composer-controller-f59d12db17ed.js`                  | ChatGPT 模式 composer 控制器 hook                                     |
| `codex-micro-mini-game-composer-c8ff379120bd.js` (22 KB)           | Codex Micro 硬件的迷你游戏 composer                                   |

### composer-provider 的两个导出

**1. response spacer（`M()`）** —— composer 是浮动层会遮住 transcript 底部，因此需要撑出动态高度的占位：

```
place()      目标高度 = max(0, clientHeight - bottomInset) * L，弹簧动画启动
consume(px)  内容增高时抵消等量 spacer，避免跳动
clear()      立即归零（stop + jump(0)）
scrollToBottom()
onResponseSpacerStateChange({clear, getHeightPx, place, scrollToBottom})
```

用 `IntersectionObserver` 观察 sentinel 得到实际交叠高度；用户上滚时用 `requestAnimationFrame` 合帧累计后一次性 `consume`；spacer ≤ 24px 时直接 `jump(0)` 消除小数抖动。

**2. ComposerProvider（`q()` / `J()`）** —— external store：

```js
{
  (getSnapshot(), subscribe(cb), register(composer));
}
```

`register` 返回注销函数，且**只在“当前注册的就是自己”时才清空** —— 即全局只有一个 active composer，主对话 / 右侧面板 / quick chat 互相抢占。

### ProseMirror 与 mention

composer 是 ProseMirror 编辑器（`prosemirror-view/-model/-placeholder/-highlight`）。`BrowserSkillsComposer` 展示了完整的操作方式：

```js
// 注册命令建议
{ id, title, description, searchAliases, triggers: ["@", "/"],
  requiresEmptyComposer: false, group, Icon: {16, 20}, onSelect }

// 编程式插入 mention
editor.insertMentionAtSelection({ kind, name, displayName, path, description, iconSmall });
editor.focus();

// 遍历文档清理失效节点
view.state.tr → doc.descendants(node => node.type.name === "browserSkillMention" && 账号不匹配 → tr.delete(...))
```

12 种 mention 节点：`agentMention`、`appMention`、`atMention`、`browserSkillMention`、`browserTabMention`、`chatGptConversationMention`、`chatGptLibraryFileMention`、`pageReferenceMention`、`pluginMention`、`resourceMention`、`sitesProjectMention`、`skillMention`。

## queue/

`queued-message-list-16b1f97652af.js`（18 KB）—— 队列 tray。文案全集见 `../../composer.md` §4。关键语义：

- `sendNow` 的显示文案是 **Steer**，tooltip `Submit without interrupting the model`；
- 打断后 `interruptedQueue` = `Queue paused because you interrupted` + `Resume`；
- 卡住项 `pausedTooltip` + `retryTooltipRemedy`；
- 队列总开关 `Turn on/off queueing`；
- 协议侧对应 `thread/queue/{list,add,update,delete,reorder,start,changed}`。

## quick-chat/

`quick-chat-window-e34d91db747a.js`（52 KB，独立窗口，路由 `/chatgpt/quick-chat`，另有 `-prewarm` 预热路由）、`quick-chat-window-page`、`quick-chat-frame`、`quick-chat-floating-position`（位置记忆）、`content-quick-chat-overlay`（19 KB）、`avatar-overlay-quick-chat-bar`（56 KB，语音浮层上的快捷条：Start new chat / Start voice chat / Restore Quick Chat / Show-Hide activity / Mute-Unmute microphone / Mute-Unmute voice chat / Stop voice chat）、`local-conversation-quick-chat-overlay`、`global-dictation-page`（23 KB，720×84 独立非聚焦窗口）、`dictation-audio-worklet`（AudioWorklet）。

听写由两个**独立** feature flag 门控：`{name:"dictation.composer"}` 与 `{name:"dictation.global"}`。

---

## 文件清单

### `_deps/`

| 文件                                                             |     原始 |   格式化 | formatter | 来源                                                               |
| ---------------------------------------------------------------- | -------: | -------: | --------- | ------------------------------------------------------------------ |
| `local-remote-dropdown-3788d6591891.js`                          | 101.9 KB | 170.1 KB | prettier  | 闭包 ← `composer-utility-bar-85736f3cc588.js`                      |
| `worktree-environment-dropdown-ea1f88351d40.js`                  |  22.6 KB |  37.0 KB | prettier  | 闭包 ← `composer-utility-bar-85736f3cc588.js`                      |
| `avatar-mascot-button-13f6c2a71e01.js`                           |   9.2 KB |  14.7 KB | prettier  | 闭包 ← `avatar-overlay-quick-chat-bar-6faa49a506f3.js`             |
| `plugin-picker-menu-content-8fa056f43456.js`                     |   8.6 KB |  14.7 KB | prettier  | 闭包 ← `composer-work-home-plugins-control-40bb3845a52f.js`        |
| `state-42e575f64eb1.js`                                          |   3.8 KB |   5.4 KB | prettier  | 闭包 ← `composer-39c510ee3609.js`                                  |
| `use-floating-window-pointer-interactivity-4227999c8c97.js`      |   3.2 KB |   5.2 KB | prettier  | 闭包 ← `global-dictation-page-526accc365c3.js`                     |
| `realtime-voice-handoff-target-8621c40e6e89.js`                  |   2.5 KB |   3.7 KB | prettier  | 闭包 ← `avatar-overlay-quick-chat-bar-6faa49a506f3.js`             |
| `use-create-git-repository-c0b61d3a555e.js`                      |   2.2 KB |   3.6 KB | prettier  | 闭包 ← `composer-utility-bar-85736f3cc588.js`                      |
| `codex-micro-mini-games-a9011e7b6c9f.js`                         |   2.1 KB |   3.0 KB | prettier  | 闭包 ← `codex-micro-mini-game-composer-c8ff379120bd.js`            |
| `lock-light-16-53cceab671fe.js`                                  |   1.8 KB |   2.2 KB | prettier  | 闭包 ← `composer-action-bar-run-location-dropdown-493913fdcca2.js` |
| `chevron-up-right-chevron-down-left-sm-light-16-6ab4d5271af9.js` |   1.4 KB |   1.8 KB | prettier  | 闭包 ← `quick-chat-window-e34d91db747a.js`                         |
| `connector-logo-stack-25292da058a9.js`                           |   1.3 KB |   2.0 KB | prettier  | 闭包 ← `composer-work-home-plugins-control-40bb3845a52f.js`        |

### `core/`

| 文件                                                        |    原始 |  格式化 | formatter | 来源     |
| ----------------------------------------------------------- | ------: | ------: | --------- | -------- |
| `composer-utility-bar-85736f3cc588.js`                      | 29.3 KB | 48.4 KB | prettier  | 命名规则 |
| `right-panel-composer-overlay-7bbacd6f9f94.js`              | 22.7 KB | 35.8 KB | prettier  | 命名规则 |
| `codex-micro-mini-game-composer-c8ff379120bd.js`            | 22.1 KB | 33.6 KB | prettier  | 命名规则 |
| `browser-composer-disclaimer-72402b5f9ca1.js`               |  8.8 KB | 11.3 KB | prettier  | 命名规则 |
| `composer-work-home-plugins-control-40bb3845a52f.js`        |  6.3 KB | 10.1 KB | prettier  | 命名规则 |
| `composer-action-bar-run-location-dropdown-493913fdcca2.js` |  6.1 KB |  9.1 KB | prettier  | 命名规则 |
| `home-composer-mode-toggle-3e742c6c7534.js`                 |  5.8 KB |  8.6 KB | prettier  | 命名规则 |
| `composer-provider-7434c8b2fdca.js`                         |  4.3 KB |  7.3 KB | prettier  | 命名规则 |
| `primary-composer-at-mention-list-f7e9ab40467d.js`          |  3.4 KB |  5.4 KB | prettier  | 命名规则 |
| `composer-project-selector-17ef0c338d41.js`                 |  3.0 KB |  5.4 KB | prettier  | 命名规则 |
| `composer-39c510ee3609.js`                                  |  2.4 KB |  3.7 KB | prettier  | 命名规则 |
| `right-panel-composer-overlay-c2ae7a9bcecb.css`             |  1.2 KB |  1.5 KB | prettier  | 命名规则 |
| `use-chatgpt-composer-controller-f59d12db17ed.js`           |  1.1 KB |  1.6 KB | prettier  | 命名规则 |
| `composer-overlay-f2c80b19233e.js`                          |  0.7 KB |  1.0 KB | prettier  | 命名规则 |
| `home-composer-mode-toggle-d4fb6b284241.css`                |  0.5 KB |  0.7 KB | prettier  | 命名规则 |
| `unified-floating-composer.electron-d188e27a467a.js`        |  0.4 KB |  0.6 KB | prettier  | 命名规则 |
| `browser-composer-disclaimer-755dbab88ba7.js`               |  0.1 KB |  0.1 KB | prettier  | 命名规则 |
| `home-composer-route-e3a303d39166.js`                       |  0.1 KB |  0.1 KB | prettier  | 命名规则 |

### `queue/`

| 文件                                  |    原始 |  格式化 | formatter | 来源     |
| ------------------------------------- | ------: | ------: | --------- | -------- |
| `queued-message-list-16b1f97652af.js` | 18.3 KB | 27.5 KB | prettier  | 命名规则 |

### `quick-chat/`

| 文件                                                    |    原始 |  格式化 | formatter | 来源     |
| ------------------------------------------------------- | ------: | ------: | --------- | -------- |
| `avatar-overlay-quick-chat-bar-6faa49a506f3.js`         | 55.9 KB | 88.4 KB | prettier  | 命名规则 |
| `quick-chat-window-e34d91db747a.js`                     | 52.4 KB | 82.9 KB | prettier  | 命名规则 |
| `global-dictation-page-526accc365c3.js`                 | 22.8 KB | 34.9 KB | prettier  | 命名规则 |
| `content-quick-chat-overlay-4f38c1f284d2.js`            | 19.2 KB | 34.1 KB | prettier  | 命名规则 |
| `quick-chat-floating-position-50d00104d2ad.js`          |  6.6 KB | 10.9 KB | prettier  | 命名规则 |
| `avatar-overlay-quick-chat-bar-e3c7ceb09c39.css`        |  2.9 KB |  3.4 KB | prettier  | 命名规则 |
| `quick-chat-frame-3ad7b171952a.js`                      |  2.6 KB |  4.3 KB | prettier  | 命名规则 |
| `quick-chat-window-page-374d1c3ded75.js`                |  1.8 KB |  2.8 KB | prettier  | 命名规则 |
| `global-dictation-page-d50f91776b56.css`                |  1.1 KB |  1.3 KB | prettier  | 命名规则 |
| `local-conversation-quick-chat-overlay-1161a9f8caa4.js` |  0.9 KB |  1.2 KB | prettier  | 命名规则 |
| `dictation-audio-worklet-1eeea41db57c.js`               |  0.7 KB |  0.9 KB | prettier  | 命名规则 |
| `quick-chat-floating-position-0afcb876a112.css`         |  0.4 KB |  0.4 KB | prettier  | 命名规则 |
| `quick-chat-frame-c43842ed21cc.css`                     |  0.2 KB |  0.2 KB | prettier  | 命名规则 |
| `quick-chat-window-a0d320c264f8.js`                     |  0.1 KB |  0.1 KB | prettier  | 命名规则 |

> 完整来源档案路径与 SHA-256 见 [`_INDEX.json`](_INDEX.json)；字符串/i18n 目录见 [`_CATALOG.json`](_CATALOG.json)。
