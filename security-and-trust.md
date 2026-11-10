# Codex Security / GPT-Rosalind / 受限能力（26.1103）

> 证据等级：A（路由、字面量、静态门控）。未做运行时插桩；安全扫描、
> 研究准入与受限环境都需要服务端授权，代码存在不等于可用。
> 代码路径相对 `code/app-261103/enterprise-trust/`。

## 1. Codex Security

### 1.1 路由

`220821.b4a9b80850.js`：

```text
/security
/security/new
/security/findings
/security/findings/:findingId
```

### 1.2 扫描设置

`security.scanSetup.*`（50 条）定义了原生扫描表单：

| 字段 | 文案/说明 |
| --- | --- |
| 目标分支 | `currentBranch`；detached HEAD 单独显示 |
| Deep scan | `deepScan` 选项 |
| 附加上下文 | `additionalContext.*`（例如“优先认证、文件上传、管理端点”） |
| 攻击向量 | `attackVectors.*`（认证绕过、账号接管、prompt injection） |
| 范围 | 整个仓库 / 指定路径（由 `security.repositories.detail.entireRepository` 佐证） |

### 1.3 仓库与发现项

`security.repositories.detail.*`：

- 最近一次 codebase scan / deep scan；
- 文件数、发现项数、commit（缺失时显示 `Unavailable`）；
- 扫描 checkout 不存在时显示 `Checkout unavailable`；
- 取消状态 `Cancelled`。

`security.findings.*`：

- 按 query、severity、status、repository 过滤；
- 详情抽屉：`security.findings.detail.close`、`loading`、`unavailable`；
- 空态：`No findings yet`。

## 2. GPT-Rosalind（研究准入）

`720410.9eca2290fe.js`（252 条 `rosalind.*`）+ `462190.f83fe20c3b.js`。

申请流程的关键维度：

| 维度 | 文案示例 |
| --- | --- |
| 研究范围 | 生物毒素、基因驱动（`geneDrive`）、高等级湿实验室（`highContainment`） |
| 使用位置 | `chatgptAccess = "Use in ChatGPT"`、`chatgptAccessDescription` |
| 研究详情 | `researchDetails.heading`、`researchDetails.*` |
| 实验室激活 | `rosalind.labActivation.*` |
| 访问状态 | `chatgpt.rosalind_access.*`（307 条，新增 146） |

`settings.nav.rosalind` 的标题是 **GPT-Rosalind**，设置页 slug 为 `rosalind`，
位于 integrations 导航组。

## 3. Aeon / restricted

`restricted.*` 新增 388 条，主要集中在三块：

### 3.1 dot 任务附件

| 文案 | 含义 |
| --- | --- |
| `restricted.aeon.attachedThread.activity` | 任务/子 agent 的 Working/Loading 状态 |
| `attachedThread.environment` | 任务使用的 code environment |
| `attachedThread.localEnvironment` | “Environment: This computer” |
| `attachedThread.unread` | 未读更新 |
| `composer.placeholder.dot` | 给 dot 发消息时的占位符（使用自定义名字） |

### 3.2 环境设置

`restricted.environmentSetup.*` + `environmentSetup.*`（合计约 578 条）：

- 选择仓库，让 Codex 判断如何安装/配置；
- 创建云环境（`create.title = "Create a cloud environment"`）；
- secret 管理（添加/删除/缺失/用户提供）；
- 访问范围 `Just me`；
- 启动 skill（`configuration.startSkill.title`）；
- 打开环境面板。

### 3.3 认证与 passkey

`restricted.aeon*`、`browserAuth.*`、`settings.passwords` 相关文案覆盖：

- USB security key / passkey；
- 邮件 OTP；
- 浏览器内网站登录；
- 1Password / OpenAI Passwords 链路。

## 4. 设置层的门控

`324957.776af63e2a.js` 中：

- `security`：**硬编码 `visible: false`**；
- `rosalind`：`visible: eG && null != eN`（依赖实验室/访问状态）；
- `computer-use`：依赖 `nt`（本机能力 + 云端能力）；
- `passwords`：`visible: tg || tm`；
- `cloud-computer`：workspace + 服务端允许状态；
- `browser-use`：本地/云端可用性组合；
- `teams`：需要 workspace 结构、账号类型与管理员角色。

完整表见 [settings-pages-261103.md](settings-pages-261103.md)。

## 5. 代码地图

| 文件 | 作用 |
| --- | --- |
| `220821.b4a9b80850.js` | Codex Security findings / repositories / scan workbench |
| `720410.9eca2290fe.js` | GPT-Rosalind 申请与实验室激活 |
| `462190.f83fe20c3b.js` | Rosalind 辅助 |
| `312026.87adc043a1.js` | restricted 环境/任务 |
| `922492.8f97ddc9a7.js` | restricted 环境设置 |
| `920910.8d98fd9b96.js` | restricted / 认证 |
| `85236.c194df1024.js` | restricted / 其他 |
| `122578.2cc9765ee9.js` | enterprise / 访问控制 |
| `2463.22de500d36.js` | 企业辅助 |
| `233731.4acbde3801.js` | 企业辅助 |
| `889222.ccb66779fe.js` | 云环境创建对话框依赖 |

## 6. 已知局限

- 安全扫描的规则、检测器与后端模型不在客户端包内；
- Rosalind 的准入标准与地区限制由服务端决定；
- passkey/OTP 的真实流程需要运行时与硬件，静态包只能确认文案与 API 形状。
