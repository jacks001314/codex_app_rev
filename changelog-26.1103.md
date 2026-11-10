# 26.1016 → 26.1103 差异与新增功能

> 基线：本机 MSIX `OpenAI.Codex 26.1103.4239.0`（应用版本 `26.1103.32239`，
> build `25471`），2026-11-09 采集。对照为 2026-10-23 的
> `26.1016.8622.0`（应用版本 `26.1016.62342`，build `21477`）。
>
> 只读安装目录；未运行时代理，未读取凭据、`settings.dat`、SQLite、日志正文或会话缓存。
> 未做运行时插桩，因此“代码里存在 / 门控允许”不等于当前账号一定可见。

## 1. 一句话结论

26.1103 是一次**底层打包器迁移 + 产品面大幅扩张**的版本：

1. 渲染层从 **Vite/rolldown** 换成 **Rspack**，chunk 从“有名”变成“数字 id”，
   异步 chunk 从 2,490 个（26.1016 抽取口径）变为 **9,326 个 async chunk**；
2. 新增 **Learning**：`/learning` 仪表盘、课程/课时、语言学习、闪卡，
   以及 1,600 余个交互式学习块；i18n 消息从 213 条增至 **19,916 条**；
3. 新增 **Business Hub / Ads Manager**：`/business-hub/*` 下的商家资料、
   产品 feed、成员、Business Agent、验证、洞察，以及广告账户的 Business Agent
   与自定义 Action；
4. **Workspace Agents** 从 337 条文案变为 **982 条**（新增 670、移除 25），出现完整的 agent builder、
   ChatGPT 频道外观、Apps/Skills/Schedules/Automations；
5. 新增 **Codex Security** 工作台：`/security`、`/security/new`、
   `/security/findings`，含 Deep scan、攻击面/攻击向量、仓库与发现项；
6. **GPT-Rosalind** 研究准入从 5 条文案扩到 300 余条，加入研究范围、
   高等级实验室、基因驱动、ChatGPT 内使用等申请步骤；
7. 设置导航重组为 **4 组 / 53 个 slug**。slug 表只**移除**了 `environments`
   （54 → 53）；`teams`、`ads-controls`、`passwords`、`cloud-computer` 在
   26.1016 已存在，本版变化在导航顺序与可见性（见 §10）。

asar 从 625,947,531 B 增至 **761,023,153 B**（+135,075,622 B / +21.6%），
但文件数从 21,236 降到 19,793：体积增长主要来自更大的打包 chunk 与媒体资源，
而不是文件数量。

## 2. 身份、容器与安装层

| 项目 | 26.1016 | 26.1103 | 变化 |
| --- | --- | --- | --- |
| MSIX 版本 | `26.1016.8622.0` | `26.1103.4239.0` | 新包 |
| 应用版本 | `26.1016.62342` | `26.1103.32239` | 新应用版本 |
| build number | `21477` | `25471` | +3,994 |
| Chromium | `155.0.8059.80` | **`157.0.8103.39`** | 大版本升级 |
| `app.asar` | 625,947,531 B | **761,023,153 B** | +135,075,622 B |
| asar 条目 / 文件 / 目录 | 21,559 / 21,236 / 323 | **20,127 / 19,793 / 334** | 文件 -1,443 |
| asar 清单总字节 | 636,080,907 B | **772,828,333 B** | +136,747,426 B |
| `.vite/build/` | 37 files / 10.96 MB | **29 files / 11.9 MB** | 文件更少、单文件更大 |
| `webview/assets/` | 20,206 files / 598.66 MB | **18,761 files / 699.4 MB** | 文件 -1,445 / +100.7 MB |
| `webview/assets/async/` | 不存在 | **13,492 files / 498.3 MB** | 新增 |
| JS | 15,231 files / 433.7 MB | **9,640 files / 510.1 MB** | 文件 -5,591 / +76.4 MB |
| CSS | — | 587 files / 13.9 MB | — |

本机实算 SHA-256：

| 文件 | 大小 | SHA-256 |
| --- | ---: | --- |
| `app/resources/app.asar` | 761,023,153 B | `FB47D6491DC3006B708CB1E14DE479B882BF50F88B7DAA81818F154C253266AA` |
| `app/ChatGPT.exe` | 4,471,600 B | `5586707AF6624C04959BA2C5B4AD6D216A1D8ED17C04937A757495649DE44B92` |
| `app/Codex.exe` | 20,272 B | `A0CFA7AA6C94969D5E00FDDB6E856BC786639200DC816E846D577BFAD1EDB6A8` |
| `app/resources/codex.exe` | 369,018,160 B | `4B3286E35D7FE866C6B0EB3F07D7A4CDB5E96489576170DFD6B3A15AA1C67382` |
| `app/chrome.dll` | 337,069,360 B | `5B49A79CE8E495725DFD1C38EA79CFAB87B8DA9488C897DC2E44F3BFBCB070C6` |
| `AppxManifest.xml` | 9,395 B | `612836D54E389E5FC861401D852C74C9B9075EA1D1932F2F1C04650C59F7D7BF` |

安装层能力与 26.1016 相同（7 项 capability、`codex` 协议、8 种文件关联、
`CodexSandboxService.OpenAI.Codex` 服务、COM surrogate `d28d30e7-...`），
但新增：

- 执行别名 **`chatgpt-desktop.exe`**；
- `windows.startupTask`（登录启动项）；
- 随包资源结构变化：`cua_node` 2,461 files / 315,705,906 B（301.1 MiB）；
  `plugins` 860 files / 35,191,141 B（33.6 MiB，8 个 bundled plugin，26.1016 为 10 个）；
  `plugin-signatures` 25 files / 18,197,188 B；`skills` 29 files / 310,634 B；
  `tectonic` 5 files / 55,104,965 B。

Owl runtime 打包哈希为
`0ded5465a53b809f1676d1f9797961cfc48dbfe5b09d48472239ddc293a52bec`。

## 3. 打包器迁移：Vite/rolldown → Rspack

这是本版最重要的结构性变化，直接导致旧文档的 chunk 路径全部失效。

| 特征 | 26.1016 | 26.1103 |
| --- | --- | --- |
| 打包器标记 | `import { n as e } from "./rolldown-runtime-*.js"` | `export const __rspack_esm_ids=[...]`、`__webpack_modules__` |
| chunk 命名 | `settings-…`、`thread-virtualizer-…`、`app-initial-…` | `async/<id>.<hash>.js` |
| 入口 | `app-initial` / `app-primary` / `app-shared` | `webview/index.html` 的 4 个数字 chunk |
| 异步 chunk 数 | 2,490（抽取口径） | **9,326**（`p.u` 映射） |
| 共享 CSS | `app-initial-*.css` | `p.miniCssF` → `async/<hash>.css` |
| sourcemap | 无 | 无 |

入口四件套：

```text
webview/assets/782259.7a3e865ee5.js   3.6 KB   zod 等小模块
webview/assets/727403.da6b00f04b.js   7.8 KB   React 19.2.7
webview/assets/158624.0baba19172.js   137 KB   共享运行时/工具
webview/assets/348410.792d1c9584.js   272 KB   Rspack runtime + chunk 映射
```

`348410` 中的映射是重建依赖图的钥匙：

```js
p.u = e => "assets/async/" + e + "." + ({10012:"826cd11a09", ...})[e] + ".js"
p.miniCssF = e => "assets/async/" + ({10012:"80ce53e4b46c", ...})[e] + ".css"
```

因此本版的分析流程改为：

1. 解析 `p.u` / `p.miniCssF` 得到 9,326 个 chunk id → 文件；
2. 扫描全部 9,388 个 JS 的 i18n 描述符，得到每个 chunk 的命名空间分布；
3. 按命名空间把数字 chunk 聚到模块（`_work/cluster.mjs`）；
4. 只抽取每模块的高信息密度 chunk，而不是按文件名匹配。

## 4. i18n 总量与新增功能面

| 指标 | 26.1016 | 26.1103 | 变化 |
| --- | ---: | ---: | ---: |
| 消息条数 | 22,073 | **57,004** | +34,931 |
| 分组数 | 3,926 | **7,909** | +3,983 |
| 新增 id | — | **35,813** | — |
| 删除 id | — | **882** | — |
| 同 id 改写 | — | **276** | — |

> 口径提醒：26.1016 的目录来自当时的模块抽取 + 共享 bundle；26.1103 扫描了全部
> 9,388 个渲染 JS。少量“新增”可能只是上一轮未覆盖，但 `learningBlock`
> 从 213 条到 19,916 条有独立 chunk 与路由佐证，属于真实扩张。

新增量前 20 个一级命名空间：

| 命名空间 | 新增条数 | 说明 |
| --- | ---: | --- |
| `learningBlock` | 18,786 | 交互式学习块内容 |
| `businessProfiles` | 2,094 | Business Hub 商家资料 |
| `codex` | 1,362 | 工作区/页面/命令等 |
| `chatgpt` | 1,239 | ChatGPT 表面（onboarding、privacy、checkout 等） |
| `localConversation` | 1,047 | MCP 工具活动、审批、多 agent 动作 |
| `workspaceAgents` | 670 | Workspace Agent builder |
| `settings` | 562 | 设置页 |
| `learningBlocks` | 525 | 另一套学习块命名 |
| `ads_manager` | 448 | Ads Manager / Business Agent |
| `restricted` | 388 | Aeon、环境设置、受限能力 |
| `chatgptConversations` | 338 | ChatGPT 会话 |
| `plugins` | 286 | 插件创建/详情 |
| `merchantSettings` | 277 | 商家 feed 诊断 |
| `rosalind` | 259 | GPT-Rosalind 研究准入 |
| `shopping` | 255 | 购物/商品 |
| `environmentSetup` | 249 | 云环境创建向导 |
| `composer` | 242 | 输入框 |
| `spreadsheetEditor` | 222 | 表格编辑器 |
| `pricing` | 215 | 定价页重构 |
| `orbit` | 195 | Orbit onboarding |

删除量最大的是 `chatgpt`（120）、`restricted`（82）、`codex`（76）、
`settings`（75）；多为旧 onboarding / 迁移提示 / 旧设置项的清理。

## 5. Learning：本版最大的新增面

**证据**：`learning.page.title` = `Learning`；路由 `/learning`；
`learning.courses.*`、`learning.course.*`、`learningBlock.*`、`learningBlocks.*`。

### 5.1 产品结构

| 层 | 证据 | 说明 |
| --- | --- | --- |
| 仪表盘 | `learning.page.title`、`learning.courses.empty` | `/learning`，列出课程；空态文案 “Courses with lessons from Language Learning will appear here” |
| 课程 | `learning/courses/{course_id}?lesson_limit=100&lesson_cursor=…` | 课程面板分页拉取课时；响应校验 `course_id` 与当前课程一致 |
| 课时 | `learning.course.completed`、`learning.course.customize.*` | 课程/课时状态与“按聊天改课” |
| 闪卡 | `GET/PATCH /learning/flashcards/{library_file_id}`、`GET/POST …/progress` | 闪卡编辑与练习进度，绑定 Library 文件 |
| 学习块 | 1,631 个 `learningBlock*` 分组 / 19,916 条 | 周期表、水循环、Krebs 循环、快排、CPU 取指、生态演替等 |

### 5.2 课程是 ChatGPT 会话，改课是“一回合开发者指令”

`457705.f3ff9fbb70.js` 的 `CourseCustomize` 对话框：

```js
await submitChatGptFollowUp(z, {
  conversationId: TF(v),
  prompt: e,
  requireDispatchAcceptance: true,
  oneTurnDeveloperInstructions: [S.z(b)],   // b = courseId
})
```

改课选项是结构化的（`learning.course.customize.*`）：内容（更基础 / 更深）、
课时长度（更短 / 更长）、主题与目标（工作沟通 / 旅行短语 / 日常对话）、
练习方式（更多口语 / 不写作 / 更多图片）。提交时把选中项与自由文本合并成
**一个 chat turn**，而不是调用独立课程编辑 API。

### 5.3 学习块是 DIL 应用，不是手写 React 页面

`816316.7fb0d0e0c7.js` 的 `LearningPage` 内嵌 DIL 源码：

```js
function LearningCourses() {
  const data = DIL.useAppData();
  return __dil.jsx("grid", { columns: data.columns, gap: 4 },
    data.learningCourseOrder.map(id =>
      __dil.jsx(LearningCourse, { key: id, __resolutionId: id })
    )
  );
}
DIL.render(__dil.jsx(LearningCourses, null));
```

其他 chunk 以字符串形式携带 DIL 组件源码（`componentSource: '(() => { ... })'`），
由 DIL runtime 解释执行；`opGenui.componentResults` 按 `__resolutionId` 注入数据。
这与 `dil.modelWrittenV2.*`（“interactive assistant response”）共用同一套
生成式 UI 基础设施。

## 6. Business Hub / Ads Manager

**路由证据**：`/business-hub`；`/business-hub/{id}/{dashboard|insights|products|members|agent|edit/…|verification/…}`；
资料页分区 `about / contact / photos / location / hours / delivery / returns`。

| 面 | 证据 | 说明 |
| --- | --- | --- |
| 商家资料 | `businessProfiles.about.*`（998 条） | 分类、简介、保存/丢弃、审核与发布状态 |
| 产品 feed | `businessProfiles.feeds.*` | 拖拽/选择文件、预览、提交服务端校验与 ingestion、查看状态 |
| 商家诊断 | `merchantSettings.issueDetails.*` | 上传记录、accepted rows、字段级诊断、下一步；区分“未记录”和 0 |
| Business Agent | `businessProfiles.agentBuilder.*`、`ads_manager.tools.business_agent.*` | 草稿/发布、目录选择、外观、Actions |
| 自定义 Action | `ads_manager.tools.business_agent.builder.actions.*` | OpenAPI URL/schema 导入；API key / Basic / Bearer / 自定义 header / OAuth；最多 10 个 |
| 广告联动 | `business_agent.action.disable.confirm.description` | 停用已发布 agent 会让关联广告停止投放、既有会话失效 |
| 验证 | `businessProfiles.verification.*` | 电话/邮箱验证、尝试次数限制、审核中状态 |
| 成员/团队 | `settings.teams.*`、`business-hub/.../members` | 团队活动、成员、邀请 |

同轮还出现 **commerce** 面：`shopping.forYou`（89）、`pricing.pageRedesign`（78）、
`checkout.businessReactivation`（47）、`CheckoutPlanSelector.businessPlanSetup`（49）、
`chatgpt.checkout`（156 新增），说明商家/订阅结账也在同一条链路上扩展。

## 7. Workspace Agents

`workspaceAgents.*` 从 337 条变为 **982 条**（新增 670、移除 25、改写 8；净 +645）。
新增的是完整 builder：

| 区块 | 关键文案 | 含义 |
| --- | --- | --- |
| 频道 | `workspaceAgents.builder.appearance*`、`addChannelAutomation` | 配置 agent 在 ChatGPT 频道的外观与自动化 |
| Apps | `workspaceAgents.builder.apps*` | 选择 app、加载其 actions、已添加状态 |
| Skills | `workspaceAgents.builder.addSkill`、`workspaceAgents.skillIcon` | 从 skill picker 添加能力 |
| Starter prompts | `addStarterPrompt`、`addFirstStarterPrompt` | 首屏建议问题 |
| 资源/连接 | `workspaceAgents.resources`、`workspaceAgents.connections` | 资源与外部连接 |
| 排程 | `workspaceAgents.schedules` | 定时任务 |
| 草稿/发布 | `workspaceAgents.index.draftEdited`、`error.retry` | 未发布草稿、最后编辑时间 |

## 8. Codex Security、GPT-Rosalind 与受限能力

### 8.1 Codex Security

路由：`/security`、`/security/new`、`/security/findings`、
`/security/findings/:findingId`。

| 能力 | 证据 |
| --- | --- |
| 原生扫描 | `security.scanSetup.*`、`security.workbench.newScan` |
| Deep scan | `security.scanSetup.deepScan` |
| 攻击面/攻击向量 | `security.scanSetup.attackVectors.*`（认证绕过、账号接管、prompt injection） |
| 仓库与扫描记录 | `security.repositories.detail.*`（整个仓库、文件数、最近扫描、commit） |
| 发现项 | `security.findings.*`（按仓库/严重度/状态过滤、详情抽屉） |

### 8.2 GPT-Rosalind

`rosalind.*`（259 条，全部新增）+ `chatgpt.rosalind_access.*`（307 条，新增 146）
合计 566 条。申请步骤包括
研究范围（生物毒素、基因驱动、高等级实验室）、ChatGPT 内使用、实验室激活
（`rosalind.labActivation`）等。

### 8.3 Aeon / restricted

`restricted.*` 新增 388 条，集中在：dot 任务附件与状态
（`restricted.aeon.attachedThread.*`）、环境（本机/云）、
`restricted.environmentSetup.*`（选择仓库、创建云环境、secret、
“Just me” 访问）、浏览器认证 / passkey / 消息 OTP。

## 9. Spaces / Pages 与 ChatGPT 表面

- **Spaces**：`/space`、`/space/files`、`/space/d/:directoryId`、`/space/sites/*`、
  `/spaces/:spaceId`、`/spaces/new`、`/library/*`、`/sites`。
  新增：删除进 Trash、保留期后永久删除、workspace 默认空间、邀请 people/teams、
  继承权限冲突提示（`codex.space.driveSharing.*`）。
- **Pages**：`/pages/archived`、`/spaces/v2?status=archived`、页面的 parent/child 分页。
- **ChatGPT 表面**：新增/扩张 onboarding 领域（health、K-12、work、college）、
  `chatgpt.privacy_center`（127）、`chatgpt.localBusiness`（73）、`chatgpt.cme`（83）、
  `chatgpt.tpp`（136）、`home.newChatPageSuggestions`（102）。
- **编辑器**：`spreadsheetEditor.validation/chart/conditional`（222）、
  `presentationEditor.*`（167）。

## 10. 设置导航重组

`405910.89912dbb76.js` + `499225.6d2e47bea2.js` + `324957.776af63e2a.js`：

- slug 全表 **53** 个（26.1016 为 54）；
- 导航 **4 组**：personal（26）、teams（1）、integrations（13）、coding（11）；
- 默认 section 仍为 `general-settings`；
- slug 表**只移除了 `environments`**（54 → 53）；`teams`、`ads-controls`、
  `passwords`、`cloud-computer` 在 26.1016 的 slug 表中已存在；
- `environments` 仍被 coding 导航组引用，属于悬空项；
- `age`、`time-management` 不在导航组内，只能从其他页面跳转；
- 硬编码隐藏：`family`、`skills-settings`、`time-management`、`billing`、`security`、`extension`；
- 硬编码永远可见：`appearance`、`git-settings`、`worktrees`、`local-environments`、
  `environments`、`general-settings`、`personalization`、`hooks-settings`、
  `mcp-settings`、`keyboard-shortcuts`。

完整的 slug → 可见性条件表见 [settings-pages-261103.md](settings-pages-261103.md)。

## 11. 已知局限

- 26.1016 与 26.1103 的 chunk 命名体系不同，**不能按文件名做 chunk 级 diff**；
  本版的 9,326 个 async chunk 只抽取了 172 个代表，未做逐 chunk 对比。
- i18n 新增量包含“上一轮覆盖不足”的成分；本文只对能被新 chunk/路由/命名空间
  三方佐证的面做“新增功能”判断。
- 学习块的内容文案量极大，本文只归类，没有逐块阅读 1,600 余个 block。
- Feature flag、账号 plan、workspace 结构会改变实际可见性；本文的“可见”是代码条件。
