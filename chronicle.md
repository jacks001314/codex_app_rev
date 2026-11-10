# Computer History（内部代号 Chronicle）

> 版本：`26.1013.4894.0`。代码：`code/app-261013/chronicle/`、`settings` 模块中的
> `chronicle-settings-page-*.js`、主进程 `main-C4DYk222.js`。静态分析，未做运行时插桩。

## 1. 一句话结论

Computer History 把本机活动**摘要成文本记录**，让 ChatGPT 能回答“我刚才在做什么”
“昨天答应给谁发什么”之类的问题；它不录屏、不录音，但会保存活动摘要，并且**依赖
Memories**。开启后还会增加 token 使用量。

原文（A 级，`settings.chronicle.off.privacyDisclaimerWithLearnMore` 的 description）：

```text
When turned on, ChatGPT saves text summaries of your activity across allowed apps
and websites, potentially including communications. Audio and private-mode web
browsing are never included ... This feature increases token usage.
```

## 2. 开关与配置

设置页 `settings/chronicle` 的实现是 `chronicle-settings-page-71e1cb42fb82.js`。
配置写入不是普通的设置 store，而是 app-server 的 `config/batchWrite`：

```js
sendRequest("config/batchWrite", {
  edits: [{ keyPath: "chronicle", value: enabled, mergeStrategy: "upsert" }],
  filePath: configWriteTarget?.filePath ?? null,
  expectedVersion: null,
  reloadUserConfig: true
})
```

证据：`chronicle-service-queries-fa2c40e5d4fe.js`，配置键字面量在
`chronicle-settings-d16251f05467.js` 里是 `"chronicle"`。

### 2.1 总是先要 Memories

开启 Computer History 前会弹一个“先开 Memories”的对话框：

| 文案 key | 文本 |
| --- | --- |
| `settings.chronicle.enableMemoriesTitle` | `Turn on Memories to use Computer history?` |
| `settings.chronicle.enableMemoriesDescriptionWithLearnMore` | `Computer history requires Memories so ChatGPT can remember your activity across tasks...` |
| `settings.chronicle.enableMemoriesConfirm` | `Turn on Memories` |
| `settings.chronicle.enableMemoriesErrorToast` | `Memories could not be turned on` |

onboarding 里还有一条 `electron.onboarding.computerHistory.enableMemoriesTitle`
（`Turn on Memories to use Computer History`），说明首次引导也走同一依赖。

## 3. 历史查询

客户端 service（A 级）：

```text
listHistory()                                  → chronicle-history
listHistorySuggestions()                       → chronicle-history.suggestions
listHistorySummaryIntervals({ sinceMs })       → chronicle-history.summary-intervals
```

默认查询窗口是 `6048e5` ms = **7 天**；查询 `staleTime: 0`，窗口聚焦与挂载都会刷新。

历史 UI 的分组与范围：

| 范围 / 分组 | 文案 key |
| --- | --- |
| 今天 / 昨天 | `settings.chronicle.history.today` / `yesterday` |
| 上午 / 下午 / 晚上 / 夜间 | `morning` / `afternoon` / `evening` / `overnight`（6 小时一段） |
| 清除 10 分钟 | `clearTenMinutes` |
| 清除 1 小时 | `clearHour` |
| 清除 1 天 | `clearDay` |
| 清除全部 | `clearAll` |

清除成功提示：

```text
History cleared — ChatGPT memory may take up to 6 hours to update
```

即“历史记录”与“已 consolidated 的 memory”是两个层，删除历史不会立刻重写已生成的记忆。

## 4. 权限模型

`chronicle-service-queries-fa2c40e5d4fe.js` 里的 observation 结构：

```text
observation.defaultApplicationBehavior   "observe" | ...
observation.defaultURLBehavior
observation.allowlist[]                  { scope: "app" | "url", bundleID, urlDomain }
observation.blocklist[]
```

规则：

```text
默认 observe  → 只有在 blocklist 里才排除
默认不 observe → 只有在 allowlist 里才包含
```

UI 提供两种策略：

- `Include only these apps` / `Include only these websites`（allowlist）；
- `Exclude these apps` / `Exclude these websites`（blocklist）。

其他隐私细节：

| 项 | 文案 / 证据 |
| --- | --- |
| 不录屏 / 不录音 | `off.description`：“without ever recording your screen or audio” |
| 私密浏览永不包含 | `permissions.privateBrowsingWithLearnMore` |
| 敏感应用建议排除 | `consent.sensitiveApps`：“health or finance” |
| 与他人通信时要暂停 | `consent.otherPeople` |
| 用户可以随时暂停 / 清除 | `consent.controls` |
| 菜单栏录制点 | `showIndicatorInMenuBar` |

## 5. 设置页与状态

| 状态 / 操作 | 文案 key |
| --- | --- |
| 开启 | `settings.chronicle.turnOn` |
| 暂停 / 恢复 | `settings.chronicle.pause` / `resume` |
| 关闭 | `turnOffAriaLabel` |
| 权限 | `permissions.dialogTitle = "Computer history permissions"` |
| 不可用 | `unavailableWithLearnMore` |
| 配置加载中 | `off.configurationLoadingTooltip` |
| 服务不可用 | `off.serviceUnavailableTooltip` |
| Memories 不可用 | `off.memoryFeatureUnavailableTooltip` |

`settings.chronicle` 组共 **155 条**文案，是 26.1013 新增的最大设置组之一。

## 6. 从历史生成自动化 / Skill

Computer History 不只展示历史，还会生成建议：

| 建议 | 文案 key |
| --- | --- |
| 建议 automation | `settings.chronicle.history.suggestedAutomation` |
| 建议 skill | `settings.chronicle.history.suggestedSkill` |
| 创建 automation | `createSuggestedAutomation = "Create {name} automation"` |
| 创建 skill | `createSuggestedSkill = "Create {name} skill"` |

创建时的 prompt 会显式引用 memory 文件与 `events.jsonl`：

```text
Consult the memory at {memoryFilePath} and the events.jsonl files cited there ...
```

这说明历史记录的落盘形态至少包含：

```text
memory 文件（Markdown 或类似）
events.jsonl（逐事件）
```

> C 级：目录布局与文件格式来自文案中的路径变量，没有打开用户目录验证。

## 7. 主进程与插件

主进程里能确认（A 级，`main-C4DYk222.js`）：

- 插件生命周期里出现 `computer-history-lifecycle`；
- 存在 `.codex-chronicle-assets-to-install.marker`；
- 有 `legacy-chronicle-skill` 迁移标记；
- 插件显示名是 **Computer History**（`settings.chronicle.history.pluginDisplayName`）。

这说明 Computer History 不是一个纯前端页面，而是：

1. 主进程负责安装 / 升级插件资产；
2. 前端设置页负责开关、权限与时间线；
3. app-server 的 `chronicle` service 负责 list / suggestions / summary；
4. 模型侧通过插件 / memory 文件访问历史。

## 8. 与其他能力的关系

| 能力 | 关系 |
| --- | --- |
| Memories | 强依赖；没有 Memories 不能开 |
| dot / Aeon | dot 可以有自己的 memories；删除 dot 会删 memories |
| Scheduled tasks | 历史建议可以直接生成 automation |
| Skills | 历史建议可以生成 reusable skill |
| Computer Use | 都涉及本机活动，但 Chronicle 是“文本摘要”，Computer Use 是“实时控制” |

## 9. 证据等级与局限

| 结论 | 等级 | 依据 |
| --- | --- | --- |
| 配置键 `chronicle` + `config/batchWrite` | A | `chronicle-service-queries-*.js` |
| 三个 list 方法 | A | `computer-history-query-*.js` |
| 7 天默认窗口 | A | `6048e5` 常量 |
| allow / block + app / URL | A | `observation` 结构 |
| 依赖 Memories | A | `enableMemories*` 文案 |
| 文本摘要、不录屏录音 | A（文案） | `off.description` |
| memory / events.jsonl 文件 | C | 来自 prompt 变量，未读用户目录 |
| 实际采集频率、摘要模型 | C | 需要运行时 |

未确认：History 的服务端存储位置、是否跨设备同步、摘要生成的具体模型与频率、
清除后 memory 重写的真实时序。
