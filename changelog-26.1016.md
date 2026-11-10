# 26.1013 → 26.1016 差异与新增功能

> 基线：本机 MSIX `OpenAI.Codex 26.1016.8622.0`（应用版本 `26.1016.62342`，
> build `21477`），2026-10-23 采集。对照为 2026-10-17 的
> `26.1013.4894.0`（应用版本 `26.1013.40934`，build `20770`）。
>
> 本次只读安装目录，未运行时代理，未读取凭据、`settings.dat`、SQLite、日志正文或会话缓存。
> 未做运行时插桩，因此“代码里存在 / 门控允许”不等于当前账号一定可见。

## 1. 一句话结论

26.1016 是一次以 **身份与凭证、模型供应商、企业工作区、研究准入和模板工具** 为重点的
增量更新。最明确的新增面是：

1. 设置中新增 **Model Providers / Gateways**，可选 OpenAI、Ollama、LM Studio、
   Amazon Bedrock Mantle/Runtime，以及 OpenAI-compatible 自定义 Gateway；
2. 新增 **Face / Voice verification** 原型与 **OpenAI Passwords / 1Password**
   网站登录凭证链路；
3. Aeon（dot）云电脑可通过本机 **USB security key / passkey** 完成远端网站认证，
   消息侧加入邮件 OTP 授权、已读/送达回执、回复线程、位置共享与 Appshot；
4. 新增 **GPT-Rosalind** 研究用途准入申请、Persona 企业验证、地区/安全审查与
   Trusted Access 路径；
5. 企业工作区增加 seat 类型、成员邀请、Enterprise personal-workspace 迁移提示；
6. 新增本地 stdio MCP **Artifact Template Picker**，为 Office / Google
   Document/Slides/Sheets 提供模板选择；
7. Sites 预览新增颜色、字体、字号、间距、圆角和预设编辑。

这是一次实质升级，不是只换 hash：asar 比 26.1013 大约多 44 MB，i18n 净增 453 条，
全量快照从 2,415 个 chunk 增到 2,490 个。

## 2. 身份、容器与安装层

| 项目 | 26.1013 | 26.1016 | 变化 |
| --- | --- | --- | --- |
| MSIX 版本 | `26.1013.4894.0` | `26.1016.8622.0` | 新包 |
| 应用版本 | `26.1013.40934` | `26.1016.62342` | 新应用版本 |
| build number | `20770` | `21477` | +707 |
| MSIX DisplayName | `ChatGPT` | `ChatGPT` | 不变 |
| Chromium 文件版本 | 未在本轮旧清单独立 | **`155.0.8059.80`** | 从 `chrome.dll` / manifest 直接读取 |
| `app.asar` 文件大小 | 582,072,504 B | **625,947,531 B** | +43,875,027 B |
| asar 清单元数据总字节 | 593,720,176 B | **636,080,907 B** | +42,360,731 B |
| asar 文件 / 目录 | 21,073 / 323 | **21,236 / 323** | +163 files |
| `.vite/build/` | 35 files / 10,746,938 B | **37 files / 10,960,734 B** | +2 files |
| `webview/assets/` | 20,045 files / 555,046,415 B | **20,206 files / 598,661,595 B** | +161 files / +43,615,180 B |

本机实算 SHA-256：

| 文件 | 大小 | SHA-256 |
| --- | ---: | --- |
| `app/resources/app.asar` | 625,947,531 B | `A05DFD86CA508148C83C25590639CF91A52C6647733CDF200723D85357052B49` |
| `app/ChatGPT.exe` | 4,795,184 B | `F7F605CCEB2E75DCA52E03362329A889F917CC1F8D1036CD26386727A2319415` |
| `app/resources/codex.exe` | 336,134,960 B | `C81ED464E5E7CAFD09A5FA26AF390C480BED8E9FAB2A87A54B285FBD56E7122A` |
| `AppxManifest.xml` | 8,671 B | `D2F593A2B94C0258EC30FEFF2623CA896F3209378EF8C6B838364A5AC97E85EF` |

Owl runtime 打包哈希变为
`eedf863d0fa33f66d8cf3fd9c092fd8a4c122c1c854cfb3b8a724385f8801f41`。
`chrome.dll` 的 ProductVersion 为 `155.0.8059.80`，不能再沿用旧文档中的 Chromium 152。

安装层没有新增 MSIX capability、协议、文件关联、服务或执行别名，仍为：

```text
runFullTrust, unvirtualizedResources, packagedServices, localSystemServices,
internetClient, graphicsCaptureProgrammatic, graphicsCaptureWithoutBorder
codex://
CodexSandboxService.OpenAI.Codex
codex-chrome-native-host.exe
codex-core-command-runner.exe
```

随包资源的变化：

| 资源 | 26.1016 | 说明 |
| --- | --- | --- |
| `resources/cua_node/` | 2,384 files / 252,751,041 B | runtime `0.0.33/20261020111233-d92591792fee`，Node `24.21.0-cua.2` |
| `resources/plugins/` | 846 files / 49,579,951 B | 仍是 10 个 bundled plugin，但内容已升级 |
| `resources/plugin-signatures/` | 31 files / 22,112,535 B | 插件签名材料 |
| `resources/artifact-template-picker/` | 2 files / 34,734 B | 新增本地 stdio MCP |
| `resources/accessibility/` | 1 file / 2,400 B | Chromium 自带 Reading Mode Google Docs helper |
| `resources/tectonic/` | 55,059,760 B | LaTeX 引擎，不变 |

## 3. 渲染层与全量快照

| 指标 | 26.1013 | 26.1016 |
| --- | ---: | ---: |
| 抽取模块 | 17 | **17** |
| 抽取 chunk | 2,415 | **2,490** |
| 原始字节 | 44,277,848 B | **45,495,346 B** |
| 格式化后字节 | 64,991,399 B | **66,829,689 B** |
| 格式化失败 | 0 | **0** |
| 全局 i18n | 21,620 / 3,839 组 | **22,073 / 3,926 组** |

模块分布：

| 模块 | files | raw bytes |
| --- | ---: | ---: |
| `aeon` | 44 | 501,765 |
| `app-shell` | 213 | 2,843,077 |
| `chatgpt-surfaces` | 528 | 6,381,672 |
| `chronicle` | 7 | 103,716 |
| `codex-micro` | 16 | 328,069 |
| `composer` | 94 | 1,038,482 |
| `conversation` | 80 | 1,196,867 |
| `left-nav` | 90 | 827,993 |
| `main-process` | 101 | 12,161,023 |
| `personalized` | 181 | 2,303,234 |
| `settings` | 563 | 10,070,735 |
| `side-panel` | 329 | 5,440,830 |
| `spaces` | 52 | 491,764 |
| `tasks` | 20 | 94,968 |
| `voice` | 27 | 385,140 |
| `workspace` | 118 | 654,703 |
| `writing` | 27 | 486,581 |

全量快照位于 [`code/app-261016/`](code/app-261016/)。所有新增文案涉及的 chunk，
除刻意不入库的 `app-initial` / `app-primary` 外，都能在本地快照中找到；
两者在 `.work/big-261016/` 有 light-format 检索副本。

## 4. 文案差异

按完整 message id 做集合比较：

| 指标 | 值 |
| --- | ---: |
| 26.1013 文案 | 21,620 |
| 26.1016 文案 | 22,073 |
| 新增 id | **767** |
| 删除 id | **314** |
| 同 id 但 text/description 改变 | **45** |

新增量最大的组：

| 新增条数 | group | 含义 |
| ---: | --- | --- |
| 177 | `chatgpt.rosalind_access` | GPT-Rosalind 组织准入、研究范围、地区与安全承诺 |
| 86 | `settings.gateways` | 模型供应商与 Gateway |
| 53 | `settings.biometric` | Face / Voice verification 原型 |
| 49 | `restricted.aeon` | dot 任务附件、消息回执、USB passkey |
| 17 | `aeon.messaging` | dot 网站登录与邮件 OTP |
| 17 | `sitesPreview.customization` | Sites 外观预设与样式编辑 |
| 15 | `settings.chatGpt` | ChatGPT 账号设置补充 |
| 13 | `restricted.aeonMessaging` | dot 消息请求、连接与权限 |
| 12 | `restricted.orbitCreation` | dot 首次创建进度 |
| 11 | `composer.mcpToolCallApproval` | MCP 工具参数与审批展示 |
| 10 | `codex.safetyComposerBanner` | Biology / Cyber Trusted Access 安全提示 |

`settings.usage` 同时删除了 191 条旧文案，主要是 credits/billing 文案重构或迁移；
不能据此判断功能被删除。

## 5. 新增功能面

### 5.1 Model Providers / Gateways

**证据等级：A（静态代码与文案）；当前账号可见性：C。**

26.1016 新增设置导航项 `gateways`，标题原文：

```text
Model Providers
Connect Codex to a model provider or gateway.
```

实现主 chunk：
[`settings/shell/settings-c2fddca9a1ec.js`](code/app-261016/settings/shell/settings-c2fddca9a1ec.js)。

内置 / 可识别 provider 名：

```text
openai
ollama
lmstudio
amazon-bedrock
amazon-bedrock-runtime
custom
```

Bedrock 两个入口的默认 Base URL 由代码直接拼出：

```text
Bedrock Mantle  https://bedrock-mantle.<region>.api.aws/openai/v1
Bedrock Runtime https://bedrock-runtime.<region>.amazonaws.com/openai/v1
```

配置与验证链路：

| 动作 | 方法 / 字段 | 证据 |
| --- | --- | --- |
| 读取配置与组织要求 | `config/read`、`configRequirements/read` | `settings-c2fddca9a1ec.js` |
| 探测 AWS 环境凭证 | `account/bedrock/discover` | 同上 |
| 写入 provider | `config/batchWrite`，`reloadUserConfig:false` | 同上 |
| Bedrock API key 登录 | `account/login/start`，`type:amazonBedrock` | 同上 |
| Bedrock access key 登录 | `account/login/start`，`type:amazonBedrockAccessKeys` | 同上 |
| 模型目录 | `model/list` | 同上 |
| 运行前检查 | `thread/loaded/list` + 每个 `thread/read`，有 active thread 则拒绝凭据替换 | 同上 |
| 连接测试 | 临时 `thread/start` + `turn/start` | 同上 |

连接测试不是简单 ping，而是启动 ephemeral thread，要求模型只回复 `gateway-ok`，
并显式关闭工具、web search、MCP、Computer Use、Browser Use、hooks、plugins 等能力；
审批策略 `never`，沙箱 `read-only`，超时 30 秒。测试结束后中断并 unsubscribe。

行为约束（A）：

- 修改 provider 只影响新会话，已有会话保留原 provider；
- provider 变化需要 reload Codex 才能载入新模型目录；
- 组织管理的 provider 不可编辑 / 删除；
- AWS access key / secret / session token 以密码输入框输入，不进入 URL；
- base URL 禁止 username/password、fragment 和非 `http(s)` scheme；
- 支持的凭证保存方式包括环境变量、AWS profile、Bedrock API key、access keys
  和已有共享凭证。

本次静态协议集合比较为 **246 → 246 个方法，25 → 25 个 IPC 频道，名称集合不变**。
Gateway 是通过既有的 `config/*`、`account/*`、`model/*`、`thread/*`、`turn/*`
组合出的产品能力，而不是新增长期 app-server namespace（A）。

### 5.2 身份、Face / Voice 与 Passwords

#### Face / Voice verification

**证据等级：A；实际可见性：C。**

实现：
[`settings/shell/settings-d7661829b85a.js`](code/app-261016/settings/shell/settings-d7661829b85a.js)。

接口：

```text
GET    /api/identity/service/biometric-factors
POST   /api/identity/service/biometric-factors/{modality}
DELETE /api/identity/service/biometric-factors/{modality}/{factor_id}
```

其中 `modality` 为 `FACE` 或 `VOICE`。该模块是实验性能力：

```text
consent_version = face-voice-prototype-v1
```

Face 流程要求显式同意，打开相机，显示正方形裁剪与 zoom，拍照后才能提交；
文案明确说明 **没有自动对齐或 liveness check**，照片用于生成加密表示且不保存，
表示 30 天后过期。Voice 流程要求显式同意，录制任意短句 5 秒，录音不保存，
只保存加密表示。

写入参数同时包含：

```text
capture
consent_version
expected_generation
expected_factor_id
```

因此是带乐观并发的“替换”语义。提交后必须返回新的 `factor_id` 与递增
`generation` 才算成功；结果不确定时，UI 要求先刷新状态，不能盲目重传。
删除同样要求返回新的 generation，且不确定删除只能用同一 factor id retry，
不能误删后来创建的新 enrollment。

安全/隐私边界（A）：

- 相机和麦克风权限失败有独立错误文案；
- 录入前显示用途、存储期限和“不改变当前登录方式”的说明；
- 删除 enrollment 不改变密码或其他 sign-in method；
- 状态读取失败不能解释为“没有 enrollment”。

当前 `use-visible-settings-sections` 仍把顶层 `security` section 的可见性硬编码为
`false`，但 `/security/*` 路由与 `ChatGptSecuritySettings` 实现仍在包内；
Face/Voice 还额外要求 capability
`enrollment === "enabled"` 与匹配的 consent version。

#### 网站密码管理器

**证据等级：A；实际账号支持范围：C。**

新增 `browserAuth.setup` 文案与共享凭证页。两条 provider 路径：

| provider | interaction | 含义 |
| --- | --- | --- |
| `openai_passwords` | `inline` | OpenAI Passwords，无需额外 setup；保存网站密码仍需单独同意 |
| `onepassword` | `external` | 1Password；通过外部 approval URL 完成连接 |

准备数据包含 `password_managers[]`，每项可有 `next_cursor`；候选登录按页加载。
流程明确要求用户确认：

```text
Use saved account
Save login
Authorize
Take over to sign in
Check status
```

不会因为存在匹配登录就自动填充或自动提交。代码文案明确：

- 保存的密码在确认界面只显示 `Password hidden`；
- 保存、授权、使用和提交是不同动作；
- 提交结果不确定时检查状态或转人工，不重放 private submission；
- “Sign-in details entered”只表示浏览器完成输入，不表示网站认证成功；
- 远端浏览器登录会显示“This login is shared with the remote browser session”。

证据主要在
`.work/big-261016/app-initial-ad16eaadf81f.js` 的
`browser-auth-preparation` / `messaging-credential-preparation` 区段；
完整 UI 检索锚点包括 `browserAuth.signInTitle`、`browserAuth.setup.choiceTitle`、
`browserAuth.confirmation.use`、`browserAuth.receipt.unknown`。

### 5.3 Aeon（dot）云电脑：USB Passkey、邮件 OTP 与消息

**证据等级：A。**

26.1016 把远端云电脑的网站认证进一步接到本机硬件：

[`settings/_deps/usb-passkey-dialog-e76eaeb4d0d0.js`](code/app-261016/settings/_deps/usb-passkey-dialog-e76eaeb4d0d0.js)

状态机覆盖：

```text
connect-key -> select-account -> enter-pin / touch-key
-> registration | authentication
```

错误码包括：

```text
device-unavailable
pin-blocked
pin-not-set
no-credentials
unsupported
timeout
error
```

UI 先显示 remote website 的 relying party，再展示本机 key 的账号；PIN 错误可显示
剩余尝试次数。这是“远端网站认证、本机 USB security key 执行”的桥接，不是把
云端 PIN 明文返回给页面。

邮件 OTP 链路新增：

```text
Auto-fill OTP code from email
Use the code sent to your connected email
```

每次填充需要一次明确 Allow。文案明确写着 `ChatGPT cannot see the code`，
代码只暴露一次性授权请求，不把邮件验证码作为普通对话内容。

dot 消息侧新增：

- `Delivered` / `Read {time}` 回执；
- 回复线程与回复数；
- Page 评论来源标签 `Sent in page`；
- Appshot 附件重试；
- 位置请求 `Share location`；
- connector / plugin elicitation 的 Allow / Cancel / Check status；
- 新任务或 subagent 挂到消息时显示 environment、running 与 unread 状态。

主要 chunk：

- [`aeon/_deps/card-d6f4690fc654.js`](code/app-261016/aeon/_deps/card-d6f4690fc654.js)
- [`aeon/_deps/mcp-request-card-6a35b7fc0e14.js`](code/app-261016/aeon/_deps/mcp-request-card-6a35b7fc0e14.js)
- [`aeon/_deps/browser-auth-header-b685c2e849ed.js`](code/app-261016/aeon/_deps/browser-auth-header-b685c2e849ed.js)

### 5.4 GPT-Rosalind 准入与 Trusted Access

**证据等级：A；正式开放范围：C。**

新增路由（`app-shell/routing/route-e1a01c1df42e.js`）：

```text
/rosalind/application
/rosalind/application/status
```

`/rosalind/lab/application` 在 26.1013 已存在，本轮没有删除。

客户流程为四步：

1. 选择唯一一个真实 OpenAI organization；
2. 填写研究目的与产品面；
3. 填写主要/额外国别与科研安全措施；
4. 复核并提交。

产品面包括：

```text
ChatGPT / Codex
API · internal applications
```

后端 REST 路径（A）：

```text
GET  /rosalind/access/context
POST /rosalind/access/applications
POST /rosalind/access/persona/start
POST /rosalind/access/persona/status
```

Persona 用于企业身份验证。申请响应要求：

- 返回的 `organizationId` 与提交一致；
- `bioagentsApplicationReference` 为 64 位十六进制字符串；
- 有幂等键；
- `requestedResearchMode` 与提交一致；
- Persona inquiry / environment 只能同时存在或同时不存在。

错误处理区分：

```text
already_submitted
application_history_limit
application_unprocessable
fresh_persona_required
suitability_admission_conflict
organization_unavailable
submissions_disabled
```

研究范围选项包含 pathogen engineering、biological toxins、high-containment
wet-lab、gene drives、human/animal infection studies；安全承诺覆盖人工复核、
institutional oversight、incident escalation 与 dual-use/biosecurity review。

隐私说明明确：

- `Standard Data Retention` 与 `Enhanced Privacy` 是独立审批；
- model access approval 不会自动改变 privacy setting；
- 提交申请不等于立即获准；
- 不要求申请人提交 patient data、基因组序列、实验室协议等敏感材料。

代码文件：

- [`app-shell/_deps/persona-client-7dd1d4a8ca29.js`](code/app-261016/app-shell/_deps/persona-client-7dd1d4a8ca29.js)
- [`app-shell/routing/route-e1a01c1df42e.js`](code/app-261016/app-shell/routing/route-e1a01c1df42e.js)
- `app-primary` 中的 `codex.safetyComposerBanner.*`

安全提示会按来源区分 user request、file content、web search、tool result 与
assistant response，并给出 biology / cyber 分类下的 overview 文本和
Trusted Access 链接。提示原文可在
`code/app-261016/_catalog/i18n-messages.json` 直接检索。

### 5.5 企业工作区、seat 与迁移

**证据等级：A；当前账号可用性：C。**

主要证据：

- [`app-shell/_deps/form-64562a4532a4.js`](code/app-261016/app-shell/_deps/form-64562a4532a4.js)
- `chatgpt.enterprise_migration.*`
- `personalMigration.*`
- `transferBilling.*`

成员邀请实现支持：

- 手动添加多个邮箱；
- CSV 导入；
- role：member / admin / owner / analytics viewer；
- seat：Standard / Premium / ChatGPT / Codex；
- Business 的 fixed-price 与 usage-based seat；
- 域名不匹配提示、重复邮箱、文件类型/大小校验；
- 免费试用 10 人上限；
- unpaid subscription 的 owner/member 分流提示；
- 邀请成功后刷新 members；
- SCIM 工作区与手动邀请分开处理。

Enterprise 管理提示会统计使用公司已验证域名创建 personal workspace 的人数，
存在上限 / incomplete search 时使用 lower-bound 文案；`Invite all` 只打开
Members 的 Personal workspaces 页，不直接发送邀请。

### 5.6 Sites 外观编辑

**证据等级：A；是否开放：C。**

实现：
[`chatgpt-surfaces/_deps/dropdown-6c3f6bdb91ed.js`](code/app-261016/chatgpt-surfaces/_deps/dropdown-6c3f6bdb91ed.js)。

编辑模型：

| 字段 | 含义 | 范围 |
| --- | --- | --- |
| `appearance` | `custom` / `simple` | 枚举 |
| `primary` / `secondary` / `background` | 页面颜色 | CSS color |
| font variables | `--site-font-body` / `--site-font-heading` | 原站字体或预设 |
| `spacing` | padding / gap 比例 | 0.5–1.5 |
| `roundness` | corner radius 比例 | 0–2 |
| `headingScale` | 标题比例 | 0.75–1.5 |

`custom` 保留模型作者样式；`simple` 使用中性色、系统字体和较弱装饰。
字体预设包括 Original、Modern、Classic、Technical。

实现通过 `--site-primary`、`--site-secondary`、`--site-background`、
`--site-spacing-scale`、`--site-radius-scale`、`--site-heading-scale`
注入样式。代码还处理对比色、`light-dark()`、背景图移除和 `!important`
覆盖，以保证预览与发布一致。

该编辑入口在代码里还受 `enable_customization_controls` 与 layer
`933354605` 控制；这只是代码门控，不能证明当前账号已放开（C）。

### 5.7 Artifact Template Picker：新增本地 MCP

**证据等级：A。**

新增随包 stdio MCP：

```text
app/resources/artifact-template-picker/server.mjs
serverInfo.name = openai_artifact_template_picker
serverInfo.version = 1.0.0
```

主进程在 Feature Availability 的 `artifactTemplatePicker` 开启时注入：

```text
mcp_servers.openai_artifact_template_picker
CODEX_ARTIFACT_TEMPLATE_SKILLS
```

主进程实现位于
[`main-process/build/main-CT5a1yCd.js`](code/app-261016/main-process/build/main-CT5a1yCd.js)
的 `Kw(...)` / `Lve(...)` 区段。

工具：

```text
list_artifact_templates
choose_artifact_template
```

支持：

```text
document       -> .docx
presentation   -> .pptx
spreadsheet    -> .xlsx
google-docs
google-slides
google-sheets
```

它从已启用 skill / plugin 中筛选
`artifact-template-[a-z0-9][a-z0-9._-]*`，最多读取 100 个模板，向模型提供
最多 10 个相关候选，再通过 `openai/elicitation/create`（兼容旧的 `openai/form`）
让用户选择。模板描述最多 600 字符；catalog 环境变量上限 24 KiB。

新的 form extension 用 `x-openai-input.type = "file"` 展示带缩略图的文件选择器，
并只接受目标扩展名；旧协议回退为 `openai/imagePicker`，同时提供
`Upload a reference` 入口。用户可 decline / cancel，选择结果再回到工具调用。

预览限制：

```text
single preview image <= 8 MiB
total preview bytes    <= 32 MiB
single preview pixel   <= 16,777,216
total preview pixels   <= 33,554,432
```

预览必须是本地 `.png`，校验 PNG 签名、IHDR、尺寸与路径边界；不会接受 JPEG
或任意文件。

### 5.8 MCP 审批、Pages 演示与其它增量

- MCP tool approval 现在可格式化 connector + tool 名、显示完整参数、折叠长值，
  对高风险请求显示 `Elevated Risk`，并在服务端允许时提供 session / always 批准。
  证据：[`mcp-request-card-6a35b7fc0e14.js`](code/app-261016/aeon/_deps/mcp-request-card-6a35b7fc0e14.js)。
- Page 内新建 Presentation 增加 Quick start：`Start from scratch`、
  `Create from a file`、`Create from spaces`。
- Space browser 路由从 `/space/browser/:url` 扩展为
  `/space/browser/:url/:instanceId?`，支持同 URL 多实例定位。
- 新增 `/students/claim`、`/students/verify`、`/w/:slug/:username` 路由。
- Daybreak 相关文案出现硬件安全密钥和网络安全能力扩展提示，但本次只看到 2 条
  新增描述符，未抽到完整产品流程，不能把它写成已发布功能（局限）。

## 6. 设置注册表

数据：
[`code/app-261016/settings/_SETTINGS_MAP.json`](code/app-261016/settings/_SETTINGS_MAP.json)。

| 表 | 26.1013 | 26.1016 |
| --- | ---: | ---: |
| nav order | 52 | **53** |
| slug list | 53 | **54** |
| loader | 54 | **55** |
| 缺失 loader | 0 | **0** |
| resolved chunk 未抽取 | 0 | **0** |

唯一新增 nav slug 是 **`gateways`**，位于 `mcp-settings` 与
`hooks-settings` 之间。loader 实现是
`GatewaysSettings` → `settings-c2fddca9a1ec.js`（60,524 B）。

当前代码中的固定隐藏 section（A）：

```text
family
billing
skills-settings
extension
security
time-management
```

另外 `codex-cloud`、`cloud-environments` 等仍有条件隐藏。Gateways、
Rosalind、Passwords 的可见性分别是运行时表达式 `me && !M`、
`h && re != null`、`Ne`，静态分析不能确定当前账号结果。

`settings-map.mjs` 在本次分析中做了两处兼容修正：

1. 新增识别 `M$(...)` lazy loader；
2. 不再依赖 `{rosalind:` 为首键，而是扫描 `slug:lazy(...)` 并验证对象内至少有
   10 个设置 loader，适配 26.1016 把 `gateways` 排到首位。

## 7. 协议与 IPC

对 26.1013 / 26.1016 的全部抽取代码和三个共享 bundle 做字符串集合 diff：

| 项 | 旧 | 新 |
| --- | ---: | ---: |
| app-server / namespace 方法名 | 246 | **246** |
| `codex_desktop:*` IPC 频道 | 25 | **25** |
| 新增 / 删除方法或频道 | — | **0 / 0** |

这并不表示协议实现没变：参数、兼容判断、query invalidation 和同一方法的新
使用方式都有变化。例如 Gateway 用 `config/batchWrite` 的
`reloadUserConfig:false`，再通过 ephemeral `thread/start` 做真实推理测试。

此外新增的是 **MCP JSON-RPC over stdio**，不是 Electron IPC：

```text
initialize
ping
tools/list
tools/call
openai/elicitation/create
```

## 8. 复现

全部命令只读安装目录：

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1016.8622.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
$O = "codex_app_rev\code\app-261016"
$W = "codex_app_rev\.work\261016"

node .agents\skills\revert\scripts\inventory.mjs $A codex_app_rev\inventories\inventory-261016.json
node codex_app_rev\code\tools\extract-modules.mjs $A (Resolve-Path $O) `
  --map codex_app_rev\code\tools\module-map-261016.json `
  --jobs 8 --max-beautify-bytes 1200000
node codex_app_rev\code\tools\settings-map.mjs $A $O "$O\settings\_SETTINGS_MAP.json"
node .agents\skills\revert\scripts\harvest-messages.mjs `
  "$O\_catalog\i18n-messages.json" $O "codex_app_rev\.work\big-261016"
```

共享 bundle 的 light-format 与 i18n / module / protocol diff 脚本位于
`codex_app_rev/.work/261016/`，不进仓库。

## 9. 局限

1. 未做运行时插桩。所有可见性和账号资格判断都是静态条件，Statsig、workspace
   plan、角色和远程 feature availability 会改变实际界面。
2. Face/Voice、Passwords、Rosalind、Daybreak 的完整服务端行为不在安装包内；
   本文能证明客户端如何请求、校验与呈现，不能证明服务端当前对某账号开放。
3. `.work/big-261016` 的 `app-initial` / `app-primary` 未入库；需要复核相关
   文案或临时变量时，按上面的命令重新生成。
4. 生产包没有 sourcemap。文中的 `gateways`、`persona-client` 等名称是 chunk
   或语义名称，不是还原后的原函数名。
5. 没有读取用户配置、凭证、数据库、日志或会话。因此不能从本资料判断本机是否
   已配置 Gateway、Passwords、Biometric 或 Rosalind。
6. `artifact-template-picker/server.mjs` 是随包可读源码，不在 `app.asar`；
   本文只读取该包内源码与主进程装配点，没有执行它，也没有读取用户模板内容。
