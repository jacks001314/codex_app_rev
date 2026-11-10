# Learning（26.1103 新增）

> 证据等级：A（安装包字面量、路由、静态逻辑）。未做运行时插桩；
> 功能是否对当前账号开放取决于 plan、地区与 feature flag。
> 代码路径均相对 `code/app-261103/learning/`；原始 asar 路径见 `_INDEX.json`。

## 1. 它是什么

26.1103 新增了一个完整的 **Learning** 产品面：

- 顶部入口路由 **`/learning`**，页面标题 `learning.page.title = "Learning"`；
- 仪表盘列出课程（`learning.courses.*`），空态文案是
  “Courses with lessons from Language Learning will appear here”；
- 课程由课时组成（`learning.course.completed`），课时内容是大量
  **交互式学习块**（周期表、水循环、Krebs 循环、快排、CPU 取指、生态演替……）；
- 支持 **闪卡**（flashcards），闪卡绑定 Library 文件，并有练习进度。

这不是“把一组静态插图塞进聊天”，而是一套独立的课程/课时/闪卡数据模型，
加上一个可解释执行的 UI 运行时（DIL）。

## 2. 路由与 HTTP 接口

从 `442953.6e80574cdf.js`、`708390.17710d5ff1.js`、`590108.ec478ff22c.js` 提取：

| 方法 | 路径 | 用途 | 关键参数 |
| --- | --- | --- | --- |
| GET | `/learning/courses/{course_id}` | 拉取课程与课时 | `lesson_limit: 100`、`lesson_cursor`、`x-openai-use-sheep: 1` |
| GET | `/learning/courses` | 课程列表（由课程面板/仪表盘复用） | — |
| GET | `/learning/flashcards/{library_file_id}` | 读取闪卡 | `library_file_id` |
| PATCH | `/learning/flashcards/{library_file_id}` | 保存闪卡编辑 | `artifact`、`expected_current_version` |
| GET | `/learning/flashcards/{library_file_id}/progress` | 读取练习进度 | — |
| POST | `/learning/flashcards/{library_file_id}/progress` | 写入一次练习结果 | `item_id`、`outcome` |

课程响应有强校验：`e.course_id !== n` 会抛 `Course response does not match requested course`；
请求还带 `expectedIdentity: {accountId, userId}`，账号切换时中止。

## 3. 仪表盘与课程面板

`816316.7fb0d0e0c7.js` 导出 `LearningPage`：

- `learning.courses.loading` 是骨架屏的无障碍标签；
- `learning.courses.empty` / `loadError` / `retry` 分别对应空态、错误与重试；
- 课程卡片由 `data.learningCourseOrder` 排序，每张卡带 `__resolutionId`，
  数据由 `opGenui.componentResults` 注入。

课程面板（`442953`）按游标分页拉课时，把 `lesson_limit=100` 固定为首屏批量，
再用 `lesson_cursor` 续拉。面板要求当前路由仍是该课程的 `pathname`、
账号/用户未变，否则抛 “Course panel is unavailable”。

## 4. “按聊天改课”：一回合开发者指令

`457705.f3ff9fbb70.js` 的 `CourseCustomize` 对话框把改课做成一次 ChatGPT 追问：

```js
await submitChatGptFollowUp(store, {
  conversationId: TF(conversationId),
  prompt,
  requireDispatchAcceptance: true,
  oneTurnDeveloperInstructions: [courseInstruction(courseId)],
  isSubmissionCurrent,
})
```

选项是结构化的，来自 `learning.course.customize.*`：

| 类别 | 选项（原文） |
| --- | --- |
| Content | `More basics`、`Go deeper`、自由文本 |
| Lesson length | `Shorter`、`Longer`、自由文本（例如“5 分钟能上完”） |
| Topics & goals | `Work communication`、`Travel phrases`、`Everyday conversation`、自由文本 |
| Practice | `More speaking`、`No writing`、`More images`、自由文本 |

提交按钮 `learning.course.customize.send = "Send request"`；失败时保留选择与文本
（`learning.course.customize.failed`）。这意味着**改课不调用独立课程编辑 API**，
而是把课程 ID 作为一次性开发者指令注入 ChatGPT 会话。

## 5. 学习块：1,600 余个 DIL 应用

全量 i18n 中 `learningBlock*` 共 **1,631 组 / 19,916 条**（26.1016 仅 213 条）。
按组大小排序的前几名：

| 分组 | 条数 | 主题 |
| --- | ---: | --- |
| `learningBlock.periodicTableExplorer` | 155 | 元素周期表探索 |
| `learningBlock.evolutionaryTime` | 103 | 进化时间轴 |
| `learningBlock.pathogensAndImmuneDefense` | 98 | 病原体与免疫防御 |
| `learningBlock.plantHormones` | 75 | 植物激素 |
| `learningBlock.bloodPressure` | 66 | 血压 |
| `learningBlock.vertebrateDiversity` | 62 | 脊椎动物多样性 |
| `learningBlock.climateFeedbackLoops` | 59 | 气候反馈回路 |
| `learningBlock.ecologicalSuccession` | 54 | 生态演替 |
| `learningBlock.negativeFeedback` | 54 | 负反馈 |
| `learningBlock.asymmetricKeyRoles` | 53 | 非对称密钥角色 |
| `learningBlock.loopBreakControlFlow` | 49 | 循环/break 控制流 |
| `learningBlock.quicksort` | 39 | 快速排序 |
| `learningBlock.cpuFetchDecodeExecute` | 38 | CPU 取指-译码-执行 |

主题横跨生物、化学、物理、地球科学、计算机科学、统计、经济与音乐，
说明 Learning 不是单一学科，而是一套可扩展的课程内容库。

### 5.1 DIL 运行时

`learningBlock` 的 UI 不是手写 React，而是 DIL 源码（缩写未在包内展开，
本文按 “declarative UI” 理解，属 **C 级**）：

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

DIL 组件以字符串形式打包（`componentSource: '(() => { ... })'`），由 runtime
`eval`/函数构造后执行；可用标签包括 `grid`、`box`、`row`、`text`、`input`、
`select`、`segmented-control` 等。`opGenui.componentResults[__resolutionId]`
负责把服务端数据注入组件。

同一套 DIL 也用于 “interactive assistant response”（`dil.modelWrittenV2.*`），
以及临床评分卡等场景，因此它不是 Learning 专属，而是本版新增的**生成式 UI 层**。

## 6. 代码地图

| 文件 | 作用 |
| --- | --- |
| `816316.7fb0d0e0c7.js` | `LearningPage`、课程骨架屏、DIL 入口 |
| `442953.6e80574cdf.js` | 课程面板、`/learning/courses/{course_id}` 分页 |
| `457705.f3ff9fbb70.js` | 改课对话框 `CourseCustomize` |
| `106556.4ebe1efe51.js` | 课程编辑的 suggestion pills（Shorter/Basics/Conversation） |
| `708390.17710d5ff1.js` | 闪卡进度 GET/POST |
| `590108.ec478ff22c.js` | 闪卡 PATCH |
| `842103.e91c773d63.js` | 多个学习块的实现集合（2.0 MB） |
| `865314.861ab492d6.js` | 元素周期表学习块（155 条文案） |
| `204920.db637520e0.js` / `299366.cf79ea855a.js` | 学习块渲染/小组件运行时 |

## 7. 已知局限

- 没有枚举完整的学习块注册表（1,631 组分散在大量 chunk 中），本文只列了头部主题；
- 课程/闪卡的实际 UI 依赖服务端数据与 feature flag，静态代码不能确认默认可见；
- `x-openai-use-sheep: 1` 是内部请求头，含义只能从命名推断（C 级）。
