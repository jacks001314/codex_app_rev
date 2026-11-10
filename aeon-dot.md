# dot（内部代号 Aeon）

> 版本：`26.1013.4894.0`。代码：`code/app-261013/aeon/`；主体 UI 在
> `app-initial-5851df3f6cb1.js` 与 `app-shared-bbfeca5e5737.js` 里。
> 静态分析，未做运行时插桩。`dot` 是产品名，代码与文案都要求保持小写、不翻译。

## 1. 一句话结论

dot 是一个**常驻的个人 agent**：有一个可命名 / 可定制的身份，可通过电话短信、邮件、
Slack、Teams 联系；有一个可实时观看和接管的云电脑；有一组“最近活动”（任务、聊天、
定时任务）；还能被暂停、重置或永久删除。

最硬的语义证据来自 i18n 的 `description`：

```text
restricted.aeon.slack.setup.unavailable.dot
  description: "A dot is an always-on agent; use dot as a common noun and preserve
                user-chosen names. Keep the singular term dot untranslated."

restricted.aeon.resetOrbit.action.named.dot
  description: "Permanently delete the dot, archive its conversations, and delete
                its memories and scheduled tasks."
```

## 2. 路由

`app-initial-5851df3f6cb1.js` 的路由常量（A 级）：

```text
/dots                 首页 / 列表
/dots/start           创建入口
/dots/home            当前 dot 的主页
/dots/new             新建
/dots/thread/:threadId
/dots/:id             单个 dot
/dots/claim-email     领取邮箱
/dots/approve         审批
```

路由判断函数还区分：

- `/dots` 与 `/dots/:id`（`Yl("/dots", e) != null`）；
- `/dots/thread/:threadId`（`PJt`）；
- `/dots/home`（`xy`）、`/dots/new`（`Sy`）；
- `orbitId != null` 或 routeTemplate 命中时，视为 dot 路由。

## 3. 身份与外观

| 能力 | 证据 |
| --- | --- |
| 可命名 | `aeonName` 占位符；“named dot” 文案 |
| 私有昵称 | `restricted.aeon.contact.callPreview.defaultName.dot` 的 description 提到 “no private nickname” |
| 头像 | `aeon-appearance-picker-*.js`、`aeon-appearance-colors-*.js` |
| Orbit 角色 | `orbit-character-a46c99f7e8749621/`、`orbit-conversation-route-*.js` |
| Legacy 角色 | `restricted.aeonOnboarding.legacyName = "{name} (Legacy)"` |

### 3.1 Orbit 角色运行时

`webview/assets/orbit-character-a46c99f7e8749621/` 是随包的角色系统，包含：

| 文件 | 大小 |
| --- | ---: |
| `runtime/orbit-characters.wasm` | 6,413 KB |
| `runtime/single-thread/orbit-characters.wasm` | 6,496 KB |
| `runtime/orbit-characters.data` | 3,466 KB |
| `runtime/single-thread/orbit-characters.data` | 3,466 KB |
| `runtime/orbit-characters.mjs` | 235 KB |
| `runtime/picker-thumbnails.mjs` | 8 KB |
| `runtime/orbit-thumbnails/index.json` | 67 KB |
| 大量缩略图 PNG | 约 1 KB 级 |

形态枚举包括 `capsule`、`circle`、`circle_two_ears`、`crested_rounded_cube`、
`four_lobed_butterfly`、`heart`、`jojo_heart`、`round_head_small_lobes`、
`rounded_cube`、`rounded_diamond`、`rounded_head_two_ears`、`rounded_triangle`、
`six_lobed_flower`、`twelve_scalloped_rosette` 等；每个形态都有
accessory / eyes / eyewear 的 dark/light 缩略图。

> C 级：这是“可组合角色”而非单一 Lottie。wasm/data 的具体渲染管线无法仅凭静态文件确认。

## 4. 消息通道

`restricted.aeonMessaging.contactMethods` 的 description 直接列出五种通道：

```text
phone / text / email / Slack / Microsoft Teams
```

| 通道 | 关键证据 | 说明 |
| --- | --- | --- |
| 电话 / 短信 | `restricted.aeon.messaging.summary.textTitle.*`、`textQrCode.*` | 有目的地电话号码、二维码、复制号码、加入联系人；可移除已验证手机号 |
| 邮件 | `restricted.aeon.email.*`、`restricted.aeon.contact.emailAddress.yourDot` | Personal dot 可 claim 一个永久邮箱；工作账号使用固定员工别名；可链接已有地址、启用发送、断开链接 |
| Slack | `restricted.aeon.slack.*` | Add to Slack / Open in Slack / Reconnect，按工作区名称展示 |
| Teams | `restricted.aeon.teams.*` | Add to Teams / Manage，安装前检查工作区权限 |

共同约束（A 级）：

- 通道设置需要“active cloud dot”；归档或本地 dot 不能拥有云邮箱绑定
  （`restricted.aeon.email.settings.cloudRequired.dot`）；
- 工作区管理员可以禁用 Email / dot（`workspace_disabled`）；
- 邮箱 handle 规则：1–30 个字母、数字、连字符或点，不能以点开头/结尾、不能连续点；
- 错误码覆盖 `ineligible`、`workspace_disabled`、`invalid_address`、
  `disallowed_address`、`address_unavailable`、`quota_exceeded`、
  `workspace_setup`、`permission_required`、`conflict`、`access_denied`。

## 5. 云电脑

| 操作 | 文案 key | 行为 |
| --- | --- | --- |
| 显示 / 隐藏 | `restricted.aeon.computer.toggle = "Computer"` | 展开实时云电脑 |
| 观看 | `restricted.aeon.computer.video = "Live computer"` | 实时视频 |
| 接管 | `takeOver = "Take over"` / `takingControl` | 请求鼠标键盘控制 |
| 已接管 | `humanControl = "You have control"` | 接管状态 |
| 归还 | `returnControl = "Return control"` | 把控制权还给 dot |
| 打开 | `handoffOpen = "Open computer"` | 在浏览器 tab 中打开共享电脑 |
| 恢复 | `retryStartup` | 重新创建失败的云电脑 |

错误状态：`startupError = "Couldn't start computer"`、`unavailable = "Computer unavailable"`。
内部用户才看技术细节（description 明说 “Technical failure details are shown instead only
to authorized internal users”）。

## 6. 最近活动与任务

`restricted.aeonMessaging.activity.*` 给出一个活动模型：

```text
status: inProgress | completed | failed | interrupted | needsInput | loading
rowLabel: {title}, {status}
stop: "Stop task"
workingFor: "Working for {duration}"
```

说明 dot 自己会跑任务 / 子 agent，并把结果作为活动流展示；用户可以停止当前任务。
`restricted.aeon.attachedThread.fallback = "Created task"` 说明活动可以挂到某个会话。

## 7. Onboarding

`aeon-onboarding-f2670fbf5798.js` 与 `aeon-onboarding-start-*.js` 确认存在一个
“介绍 → 角色 / 名字 → 开始”的流程；`dot-onboarding-flight` / `dot-onboarding-ring`
是过渡动画；`dot-onboarding-handoff-state` 是交接状态。

文案里还能确认：

- `restricted.aeonOnboarding.introductionAriaLabel.productName.dot`
  = “Your {productName} introduction”；
- `restricted.aeonOnboarding.legacyName` 用于把旧 agent 标成 Legacy；
- `cloud-aeon-onboarding-*.js` 是云版本的 onboarding。

## 8. 生命周期

| 操作 | 证据 | 副作用 |
| --- | --- | --- |
| Pause / Resume | `restricted.aeon.contextMenu.pauseResumeAction.short` | 暂停当前 dot assistant |
| Delete | `resetOrbit.action.named.dot` | 永久删除 dot、归档会话、删除 memories 与 scheduled tasks |
| 重试删除 | `resetOrbit.retry` | 删除失败后重试 |
| 账号不可用 | `accountUnavailable.dot` | 当前账号不能启动新的 dot 工作 |
| 云访问缺失 | `composer.orbit.cloudRequired.productName = "Your {dot} needs cloud access before it can start"` | 草稿保留，可重试 |

## 9. 与其他面的关系

| 关系 | 证据 |
| --- | --- |
| 与 Spaces / Pages | `space.pageTemplates.*` 的自动化会把结果写入 Page；dot 的活动可生成 Page / task |
| 与 Scheduled tasks | `resetOrbit` 会删除 dot 的 scheduled tasks；`inbox.automations` 有 cloud scheduled tasks |
| 与 Realtime Voice | 语音会话是 `thread/realtime/*`，dot 是独立 agent 产品线；两者都使用 cloud computer / screen context |
| 与 Memory | 删除 dot 会删除 memories；Computer History 也依赖 Memories |

## 10. 证据等级与局限

| 结论 | 等级 | 依据 |
| --- | --- | --- |
| 路由与页面存在 | A | `app-initial` 路由常量 |
| 五种联系通道 | A | `restricted.aeonMessaging.contactMethods` description |
| 云电脑可接管 / 归还 | A | `restricted.aeon.computer.*` |
| 删除会归档会话、删 memories / scheduled tasks | A | `resetOrbit` description |
| 邮箱 claim / 工作区别名 | A | `restricted.aeon.email.*` |
| Orbit 角色是可组合角色 | A（文件）/ C（渲染管线） | `orbit-character-*` |
| dot 的实际可用性 | C | 受账号 / 工作区 / feature flag 控制，未做运行时验证 |

未确认：dot 的服务端 API 域名与完整方法表、短信通道的运营商接入、Teams 安装的实际
manifest、云电脑的底层虚拟化实现。这些都需要运行时或服务端契约才能定论。
