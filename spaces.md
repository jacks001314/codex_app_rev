# Spaces / Pages / Sites

> 版本：`26.1013.4894.0`（应用版本 `26.1013.40934`）。代码：`code/app-261013/spaces/`、
`code/app-261013/personalized/`、`code/app-261013/left-nav/library/`。
> 静态分析，未做运行时插桩；feature flag、账号与工作区策略会改变实际可见性。

## 1. 这是什么

26.1013 在“会话 / 工作区”之外新增了一个**文档产品层**：

| 概念 | 含义 | 证据 |
| --- | --- | --- |
| Space | 协作容器，拥有一个 root Page、图标 / 颜色、成员与共享设置 | `codex.space.*`、`/spaces/:spaceId` |
| Page | 可嵌套的文档，正文是结构化 units（markdown / agent_instructions 等） | `space-root-setup-*.js`、`/space/:pageId` |
| Personal | 不属于任何 Space 的 Page 集合 | `space.personal.title = "Personal"` |
| Site | 由 Page 发布出的站点，挂在 Space 下 | `/space/sites/*`、`space.sites.title = "Sites"` |
| Library | 跨 Space 的页面 / 文件集合视图，含 Trash | `library-*`、`codex.space.sidebar.archive` |

文案把 Space 明确定义为 “an area or collection of Pages and files, not a proper name or
outer space”（`codex.space.creation.title` 的 `description` 原文），这是识别该产品语义最硬的证据。

## 2. 路由

| 路由 | 用途 | 证据 |
| --- | --- | --- |
| `/spaces` | Spaces 列表 / 首页 | `space-sidebar-*.js` |
| `/spaces/new?creation=<localPageId>` | 新建 Space（带本地恢复 id） | `new-space-dialog-*.js` |
| `/spaces/:spaceId` | 单个 Space | `space-route-*.js`、`space-sidebar-*.js` |
| `/space/:pageId` | 单个 Page | `space-archive-confirmation-dialog-*.js` |
| `/space/sites/*` | Space 下的 Sites | `space-sidebar-*.js` |
| `/space/sites/:siteId` | 单个 Site | `site-edit-route`（由 `/space/sites/*` 派生） |

`/spaces/:spaceId` 的组件 `SpaceDetailRoute` 从 `useParams()` 取 `spaceId`；
`spaceId == null` 时渲染 TeamSpaceHome，否则渲染 Space 详情（A 级，
`code/app-261013/spaces/pages/space-route-51db97d86172.js`）。

## 3. 数据模型

### 3.1 Space

从创建与外观代码可确认的字段（A 级）：

```text
id                 服务端 Space id
root_page_id       根 Page id（创建后立即用于初始化）
name
appearance         { emoji?, theme? }
symbol             根 Page 的 symbol（创建完成后写回）
can_edit_appearance
drive_space_id     文件 / Drive 关联（sidebar 里用于归属判断）
```

创建时本地先写一条 `backingType: "drive"`、`rootInitialization: "server"` 的
`space` 记录，再走服务端创建；本地记录以 `localPageId` 为主键，成功后同时按
`space.id` 建索引（`space-1fd481862d3e.js`）。

### 3.2 Page

Page 不是 HTML，也不是纯 Markdown 文件，而是：

```text
metadata.page_id
document.units[]     { kind: "markdown", markdown } | { kind: "agent_instructions", ... }
symbol               可选图标
access.can_read
access.can_write
版本 / checkpoint    /pages/{page_id}/versions、/pages/{page_id}/versions/{checkpoint_id}/checkpoint-bootstrap
```

新建 Space 的 root Page 初始化会写入一个 `About <space>` 标题、一段说明和一个
可点击的 prompt（`space-root-setup-695df75e5121.js`）。
写入前会检查 `metadata.kind === "page"`、`access.can_read`、写操作还要求
`access.can_write`；文档 session 必须在 30 秒内进入 `connected`，否则报
`page_menu_document_unavailable`（`page-menu-document-12e4530cb10b.js`）。

### 3.3 Site

Site 是 Page 的发布形态。代码里的信号：

- `shared-snapshot-*`、`sites-*`、`site-page-*`；
- 路由 `/space/sites/*`；
- 文案 `codex.space.sites.title = "Sites"`；
- `shared-snapshot-app-page` / `shared-snapshot-visualization` 用于只读快照。

> C 级：Site 的完整发布协议（自定义域名、到期时间、访问控制）没有在静态代码里
> 找到单一注册表；只能确认页面与路由存在。

## 4. Space 创建流程

`space-1fd481862d3e.js` 里的 `createSpace` 是一个可恢复的状态机：

```
本地记录 (localPageId)
  └─ POST 创建 Space
       ├─ 成功：保存 spaceId / rootPageId
       ├─ 失败：保留本地记录，状态 error，可 retry
       └─ 成功但 root Page 未初始化：completeSpaceRootSetup()
             ├─ 写 About 段 + prompt
             ├─ 写 symbol（可选）
             └─ flush + 检查 hasRejectedEdits
  └─ PATCH /spaces/v2/{space_id}/appearance（可选）
  └─ 邀请成员（可选）
```

关键细节（A 级）：

| 细节 | 实现 |
| --- | --- |
| 防止重复创建 | `navigator.locks.request("space-setup:<account,user,localPageId>")` |
| 创建请求可恢复 | 本地记录以 `localPageId` 为键，重新打开 `/spaces/new?creation=<id>` 可续跑 |
| 状态 | `creating` → `created` / `error`；`rootInitialized` 单独记录 |
| 错误码 | `space_account_unavailable`、`space_setup_unavailable`、`space_overview_unavailable`、`space_symbol_unavailable`、`space_setup_save_failed`、`space_creation_invitations_incomplete` |
| 邀请失败 | 不阻断 Space 创建，但会把未确认邀请标成 `failed` 并提示 “setup needs attention” |
| 页面编辑器预热 | 进入路由前 `PageEditorContent` prefetch；失败会记录 `page-editor-prefetch` |

UI 文案把创建过程拆成三种恢复语义：

- `space.teamHome.creationOutcomeUnknown`：无法确认是否已创建，先检查再重试，避免重复；
- `space.teamHome.setupIncomplete`：Space 已创建但 setup 未完成，重试会续跑同一个 Space；
- `space.teamHome.continueWithoutInvitations` / `continueWithoutAppearance`：允许跳过可选步骤。

## 5. 侧栏与回收站

Space 侧栏由 `space-sidebar-*.js` 驱动，结构（A 级，文案 id 全部来自
`codex.space.sidebar.*` / `space.*`）：

```
All / Pages / Slides / Images / Files
Pinned
Recents
Spaces
  └─ 单个 Space 的 Page 树
Trash
  ├─ Pages
  └─ Spaces
```

| 行为 | 证据 |
| --- | --- |
| Page 树展开 / 折叠 | `space.pageTree.expand` / `collapse` |
| 拖拽排序 Pinned | `space.home.pinned.reorder*`、方向键 + Space/Escape |
| 搜索 | `space.teamHome.search`、`codex.space.page.search.*` |
| 多选 / 批量操作 | `selectedCount`、`library-marquee-selection` |
| 30 天保留 | `space.empty.trash.description = "Items moved to Trash will be deleted forever after 30 days"` |
| Space 删除 | 确认框 + `archive` + 可选恢复 |
| 恢复 | `codex.space.sidebar.restoreSpace`、`/spaces/{space_id}/restore` |

Page / Space 的删除与恢复不是同一个 API：

- Space：`POST /spaces/{space_id}/restore`
- Page：`POST /pages/{page_id}/restore` 或 `POST /pages/{page_id}/delete-forever`
- 列表：`GET /pages/archived`

（`space-trash-items-67cef26fe24c.js`）

## 6. 模板与个性化 Page

### 6.1 内置 Page 模板

`space.pageTemplates.*` 当前能确认的模板：

| 模板 | 文案 key | 关键行为 |
| --- | --- | --- |
| FAQ | `space.pageTemplates.faq` | 先问主题 / 受众 / 可信来源，再生成可编辑 Page |
| Feedback tracker | `space.pageTemplates.feedback` | 选择项目，每天早上 6 点自动更新 |
| Project Home | `space.pageTemplates.projectHome` | 直接开始，不做 setup 访谈 |
| Project tracker | `space.pageTemplates.projectTracker` | 每天 6 点自动更新，检查已连接应用 |
| Release notes | `space.pageTemplates.releaseNotes` | 选择项目后生成发布说明 |
| To-do list | `space.pageTemplates.todo` | 每天 6 点勾选完成项、结转未完成项 |
| Weekly update | `space.pageTemplates.weeklyUpdate` | 面向跨职能伙伴的周报 |

模板不是静态 HTML：选择后创建一个原生 Page，并放入一条**未发送**的建议消息
（`space.pageTemplates.nonWorkByline` 的 description 明确写了
“places an unsent suggested message in Page chat”）。

### 6.2 个性化建议

`personalized-pages-f207fdb0390c.js` 从 `GET /pages/suggestions` 拉建议，
用 `POST /pages/suggestions/{suggestion_id}/create` 创建 Page，成功后跳到
`/space/{page_id}`。

门控是 Statsig 动态配置 **`3798925676`**：

```text
value.show_in_getting_started
value.show_in_template_modal
```

每次最多显示 3 条未过期建议（`expires_at > now`）；请求需要
`ChatGPT-Account-ID` 头与一个额外的账号头。失败时提示
`space.personalizedPages.createError`，并用 `place:` 状态防止重复创建。

> A 级：flag id 与字段名来自代码字面量。
> C 级：当前账号是否命中该 flag、建议的实际来源（工作区 / 连接应用）无法静态确定。

## 7. 协作、通知与共享

| 能力 | 证据 |
| --- | --- |
| Space 级共享 | `space-sharing-dialog-*.js`、`codex.space.driveSharing.subtitle` |
| Page 级共享 | `sharing-dialog-*.js`、`/pages/sharing/recipients` |
| 访问请求 | `/spaces/v2/{space_id}/access-requests/{requested,for-self,for-others}`、`/pages/{page_id}/access-requests/*` |
| 邀请 | `POST /sharing/recipients/resolve`、`GET /sharing/invitations` |
| 提及 / 通知 | `/pages/mentions/inbox/{notification_id}/read`、`codex.pages.mentions.*` |
| 活动 | `space.activity.title = "Activity"`、`space.home.pinned*` |
| 实时协作 | `multiplayer.*`、`/backend-api/pages/realtime-broker/u0s/ws` |

共享语义：Space 的访问权限**继承到其所有 Page**（`codex.space.driveSharing.subtitle`），
所以分享 Space 与分享单 Page 是两条不同的入口。

## 8. API 清单（从调用点反推）

| 方法 | 路径 | 调用点 |
| --- | --- | --- |
| GET | `/spaces/{space_id}/pages` | `page-204a4af69d3e.js` |
| PATCH | `/spaces/v2/{space_id}/appearance` | `space-1fd481862d3e.js`、`space-appearance-button-*.js` |
| POST | `/spaces/{space_id}/restore` | `space-trash-items-*.js` |
| GET | `/spaces/people` | `use-workspace-users-*.js` |
| GET | `/pages/{page_id}` | `page-menu-document-*.js`、`create-*.js` |
| GET | `/pages/{page_id}/versions` | `panel-*.js`、`workspace-e2c423bd7432.js` |
| GET | `/pages/{page_id}/versions/{checkpoint_id}/checkpoint-bootstrap` | `checkpoint-*.js` |
| GET | `/pages/archived` | `space-trash-items-*.js` |
| POST | `/pages/{page_id}/restore` / `delete-forever` | `space-trash-items-*.js` |
| POST | `/pages/import` | `page-204a4af69d3e.js` |
| GET | `/pages/suggestions` | `personalized-pages-*.js` |
| POST | `/pages/suggestions/{suggestion_id}/create` | 同上 |
| GET | `/pages/{page_id}/access-requests/requested` | `request-share-dialog-*.js` |
| POST | `/pages/{page_id}/access-requests/{for-self,for-others}` | 同上 |
| POST | `/pages/sharing/recipients` | `sharing-dialog-*.js` |
| GET | `/sharing/invitations` | `route-d39be01ea82a.js` |
| GET | `/sharing/invitations/{invitation_id}` | 同上 |
| POST | `/sharing/recipients/resolve` | `new-space-dialog-*.js` |
| POST | `/pages/mentions/inbox/{notification_id}/read` | `inbox-*.js` |

URL 形态（`/spaces/...`、`/pages/...`）与 `backend-api/pages/realtime-broker`
说明这些是 ChatGPT 后端 REST，不是 app-server JSON-RPC。

## 9. 与 26.903 的关系

26.903 的 `code/` 里没有 Spaces / Pages 这一层（只有 workspace 选择页）。
26.1013 新增的 `spaces`、`personalized` 模块与 `_deps` 中的 `page-*`、
`library-*`、`pinned-pages-*`、`space-sharing-*` 是这一层的实现证据。

## 10. 证据等级与局限

| 结论 | 等级 | 依据 |
| --- | --- | --- |
| Space / Page / Site 路由存在 | A | `space-route-*.js`、`space-sidebar-*.js` |
| Page 文档是 unit 结构 | A | `space-root-setup-*.js`、`page-menu-document-*.js` |
| 创建流程可恢复、有本地状态机 | A | `space-1fd481862d3e.js` |
| 30 天回收站 | A | `space.empty.trash.description` |
| 模板列表 | A | `space.pageTemplates.*` |
| 个性化建议受 Statsig `3798925676` 控制 | A（flag id）/ C（实际命中） |
| Site 的完整发布协议 | C | 只有路由与页面名 |
| 共享继承到所有 Page | A（文案）/ C（服务端实现） | `codex.space.driveSharing.subtitle` |

未做运行时验证：页面是否能离线编辑、并发冲突的具体合并策略、Site 的自定义域名等，
都需要真实账号与网络请求才能确认。
