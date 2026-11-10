# Spaces / Pages（26.1103 更新）

> 证据等级：A（路由、字面量、静态逻辑）。未做运行时插桩。
> 代码路径相对 `code/app-261103/spaces/`。

## 1. 路由

`101313.c9b3ce267b.js` 中的路由匹配表：

```text
/space
/space/files
/space/d/:directoryId
/space/files/d/:directoryId
/space/sites/*
/spaces/:spaceId
/spaces/new
/library/*
/sites
/sites/:projectId
```

另有 `/spaces/v2?status=archived`（归档空间列表）与 `/pages/archived`
（归档页面列表），见 `104742` / `101939` 的检索结果。

## 2. 数据模型

从 `codex.space.*`（882 条）与 `/spaces/{space_id}/pages` 调用可见：

- **Space**：一组 Pages 与文件的集合；可设为 workspace 默认空间；
- **Page**：有 `parent_page_id`，可形成页面树；分页参数 `limit=100`；
- **Files**：`/space/files`、`/space/files/d/:directoryId`，目录也可作为父级；
- **Sites**：`/space/sites/*`、`/sites/:projectId`，空间内可托管站点；
- **Trash**：Space 与其 Pages 可移动到 Trash；可配置保留天数后永久删除。

## 3. 创建与邀请

`codex.space.creation.*`：

| 文案 | 含义 |
| --- | --- |
| `creation.title = "Create a space"` | 创建对话框 |
| `creation.invitePeople` / `invitedRecipients` | 邀请 people/teams |
| `creation.workspaceDefault` | 设为 workspace 默认空间 |
| `creation.invitationsUnavailable` | 邀请服务不可用时仍可先创建 |
| `creation.overview.aboutPrompt` | 用 ChatGPT 帮忙写空间介绍 |
| `creation.discard*` | 关闭前确认丢弃 |

## 4. 分享与权限

`codex.space.driveSharing.*` 描述了一套接近云盘的权限模型：

- 访问权限作用于空间内每个页面；
- 支持 person / team / workspace link；
- 继承访问：`inheritedAccessConflictSource` 会说明权限来自父页面、父文件夹还是空间；
- 降低权限时有二次确认，并提示可能失去对继承项（页面/表格/幻灯片）的编辑权；
- 管理员可关闭分享或 workspace link；
- `refreshSpacePermissions` 用于权限列表未刷新时重新拉取。

## 5. 删除与保留

| 文案 | 含义 |
| --- | --- |
| `archive.descriptionWithoutRestore` | 移入 Trash，可从 Library Trash 恢复 |
| `archive.descriptionWithRetention` | 保留 `{days}` 天后永久删除 |
| `archive.title = "Delete {title}?"` | 二次确认 |

## 6. 代码地图

| 文件 | 作用 |
| --- | --- |
| `384375.45e1f0cefc.js` | Space 主界面/文案（663 条） |
| `151642.8ff0baaac3.js` | Pages/文件面板（165 条） |
| `129222.89d655aa76.js` | Space 辅助（95 条） |
| `146502.f329604e0b.js` | Space 辅助（42 条） |
| `236683.463da52c65.js` | Space 辅助 |
| `101313.c9b3ce267b.js` | 路由匹配与 `/spaces/people` 请求 |
| `337184.1781c2146a.js` / `59817.40ca0302bd.js` / `656792.065b046301.js` / `715082.ce68381cc7.js` / `768271.c1494458e9.js` / `43725.f8e104493e.js` | 分享、文件、页面、辅助 |

## 7. 已知局限

- 未逐页还原 Space 的完整权限继承算法；
- `/spaces/v2` 与 `/spaces` 两套接口并存，哪一套是默认路径依赖服务端；
- Sites 的实际发布/托管流程不在本模块内。
