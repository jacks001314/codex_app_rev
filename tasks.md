# Scheduled tasks / Automations

> 版本：`26.1013.4894.0`。代码：`code/app-261013/tasks/`（20 chunks）；
> 文案：`automations.*`、`inbox.automations.*`、`settings.automations.*`。
> 静态分析，未做运行时插桩。

## 1. 一句话结论

“Scheduled” 是 26.1013 的一等页面：任务有**保存的指令**、**计划**、**运行历史**、
**通知策略**、**运行账号**与**每次运行是否开新 chat**。它同时支持
`once / hourly / daily / weekly / monthly / yearly / custom`，也支持
“监控型”任务（每 N 分钟 / 小时）与 webhook 事件触发。

## 2. 数据模型

从 `update-content-3518078bea44.js` 与 `schedule-draft-871290737b78.js` 可确认：

```text
automation.id
automation.conversation_id
automation.plan_file_id
automation.schedule_components {
  frequency: once | hourly | daily | weekly | monthly | yearly | custom
  start_time
  days_of_week?
  day_of_month?
  end_date?
  hours / minutes   // 监控型
}
automation.display_schedule
automation.status: active | paused | completed
automation.metadata.automation_requires_user_action
automation.runs[].is_unread
```

`plan_file_id` 可以是 Library 文件引用，格式形如
`file-inline-libfile<...>~...`；详情页会把它映射成
`chatgpt-file:<id>:automation-plan:<automationId>` 的 tab key
（`scheduled-goal-navigation-*.js`）。

## 3. 计划编辑

| 能力 | 文案 key |
| --- | --- |
| 频率 | `automations.editor.schedule.frequencySectionLabel` |
| 重复 | `repeat` / `every` |
| 每周几 | `daysOfWeek` |
| 每月几号 | `monthlyDate` / `everyMonthOnDay` |
| 结束重复 | `until` / `untilNever` / `untilOnDate` |
| 时间 | `time` |
| 预设时段 | `morning`(9 AM) / `afternoon`(2 PM) / `evening`(6 PM) / `night`(10 PM) |
| 监控间隔 | `monitoring.minutes` / `monitoring.hours` |
| RRULE 兜底 | `settings.automations.rruleSummaryFallback = "Custom schedule"` |

`once` 任务过期后不能直接 Resume：

```text
This task’s scheduled time has passed. Edit it to choose a future time before
resuming.
```

（`inbox.automations.status.expiredResume`）

## 4. 运行与历史

| 能力 | 文案 / API |
| --- | --- |
| 立即运行 | `automations.actions.runNow = "Run now"` |
| 保存并运行 | `saveAndRunNow` |
| 事件触发任务不可手跑 | `runNow.triggerBasedTooltip` |
| 运行状态 | `in_progress` / `failed` / `no_update` / `completed` |
| 最近一次 | `automations.runs.lastRun` |
| 历史分页 | `loadMore`、`previous`、`noPrevious` |
| 未读 | `automations.runs.unread` |
| 需要关注 | `automations.runs.attention` |

运行历史 REST：

```text
GET  /automation/{automation_id}/runs
GET  /automation/{automation_id}/runs/latest
GET  /automation/{automation_id}/runs/{run_id}
POST /automation/{automation_id}/runs/{run_id}/read
```

（`run-results-state-b1592f2a7689.js`）

## 5. 运行位置与通知

| 设置 | key | 选项 |
| --- | --- | --- |
| 运行账号 | `automations.configuration.runsAs` | 谁的身份运行 |
| 每次新 chat | `configuration.newChatEachRun` | 开 / 关 |
| 只读展示 | `runsInNewChat` / `runsInSameChat` | 已保存任务的实际行为 |
| 通知策略 | `settings.automations.notifications.*` | `All runs` / `Failed runs only` / `Important updates` |
| 暂停 | `pauseAria` / `inbox.automations.pauseTooltip` | 可恢复 |

通知策略有两套默认值：

- cron automation：`All runs`；
- heartbeat：`Important updates`。

## 6. 共享与团队

| 能力 | 文案 |
| --- | --- |
| 共享预览 | `automations.sharing.preview.*` |
| 团队运行历史 | `inbox.automations.teams.runs.*` |
| 共享运行不可用 | `inbox.automations.teams.runs.unavailable` |
| 关闭运行面板 | `teams.runs.close` |

这说明 scheduled task 可以跨账号 / 团队共享，运行结果有独立的访问控制。

## 7. 自动暂停

`task-autopause-card-*.js` 与 `restricted.aeon` / `automations` 文案里出现了
“任务需要关注 / 输入”时暂停的语义：

- `automations.runs.attention = "This task needs your attention"`
  （description：需要 approval 或 input，私有内容保持隐藏）；
- `inbox.automations.status.paused`；
- `automations.editor.webhook.pendingEventsPaused`：
  “Task is paused. Resume to process pending events.”

因此自动暂停至少有两个触发面：

1. 运行需要用户批准 / 输入；
2. webhook 任务被暂停后，待处理事件必须恢复才能继续。

## 8. 证据等级与局限

| 结论 | 等级 | 依据 |
| --- | --- | --- |
| schedule_components 字段 | A | `update-content-*.js` |
| 频率枚举 | A | `automations.sharing.preview.repeatValue` 等 |
| 运行历史 API | A | `run-results-state-*.js` |
| 通知策略三档 | A | `settings.automations.notifications.*` |
| 自动暂停 | A（文案）/ C（触发条件完整性） | `runs.attention`、`pendingEventsPaused` |
| 服务端调度器实现 | C | 只知道 REST 与状态字段 |

未确认：调度器在云端还是本机、RRULE 的实际生成、任务失败重试策略、
“运行账号”与工作区权限的具体校验位置。
