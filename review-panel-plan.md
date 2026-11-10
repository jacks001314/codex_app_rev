# 把 Review（审查）面板落到 Syntropy：方案与计划

- 逆向依据：[review-panel.md](review-panel.md)（Codex Review 面板逐层拆解）、
  [git.md](git.md)（Git 能力面）。
- 本仓库权威设计：`docs/project-delivery-redesign.md`（项目内容与写入日志）。
- 写法沿用 [plugin-management-plan.md](plugin-management-plan.md)：**冻结决策 → 工作分解 →
  里程碑 → 验证门 → 验证记录 → 剩余缺口**。每条决策标明状态：**冻结** / **待决** / **未开始**。
- 证据等级：**B** = 本仓库源码，**A** = 安装包直接证据（引用自 review-panel.md），
  **C** = 推断。

---

## 0 目标与非目标

### 0.1 要什么

给桌面应用加一个右栏页签「**审查**」，让用户能在一个地方看到**项目当前有哪些改动**、
**每一处改动具体改了什么**，并且可以**把某处改动撤掉**。

拆开就是四件事：

1. **改动清单**：文件级列表 + 每文件增删行数 + 状态徽章（新增/修改/删除/重命名/冲突）。
2. **并排 diff**：选中一个文件就能看到逐行差异（unified / split 可切）。
3. **来源切换**：至少支持「本轮」「未提交」两种口径（见 §3）。
4. **撤销**：文件级 / hunk 级撤销，带二次确认与成功/部分成功/失败三档反馈。

### 0.2 不要什么（本计划明确不做）

| 不做                                               | 理由                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------- |
| Stage / Unstage                                    | Syntropy 没有 commit 流程，暂存区没有下游消费者。做出来是一排永远没人点的按钮。 |
| Commit / Push / Create PR / Merge PR 对话框        | 无数据源（没有 GitHub 集成），见 [git.md](git.md) §10。                         |
| PR 栈 / Cloud changes 两个来源                     | 同上。                                                                          |
| Worktree 生命周期                                  | Syntropy 的 Agent 工作区由节点侧物化，不是 git worktree。                       |
| `@pierre/diffs` 级别的自研虚拟化渲染器             | P2 先用现成的 Monaco diff；只有实测证明撑不住才换（见 §7 P6）。                 |
| 已生成的产物清理（如误建的 `%SystemDrive%/` 目录） | 审查面板只**报告**被略过的未跟踪文件，不替用户删。                              |

---

## 1 现状（B）

| 事实                                                                                                                                              | 位置                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 项目 = Master 主机上的一个普通目录；proto 注释写明「**不在 Master 侧复制或版本化**，唯一事实来源就是 `workspace_path` 指向的目录」                | `api/proto/model/project/project.proto`                                                                                                             |
| 内容读写走 `WorkspaceFSService`：list / stat / 流式 read / 三段式 write（etag CAS）/ delete / fetch / watch / 资源 / ACL                          | `api/proto/service/workspace_fs/workspace_fs_service.proto`                                                                                         |
| 每次落笔写一条审计记录 `ProjectWriteJournalEntry`（cursor / path / change / previous_etag / etag / size / actor / task_id / result / ts_ms）      | `api/proto/model/workspace_fs/workspace_fs.proto`                                                                                                   |
| 「改动」页读这份日志：倒序流水账 + 选中行右侧**单文件只读预览**                                                                                   | `desktop_app/apps/desktop/src/renderer/ProjectChangesPage.tsx`、`project-changes-format.ts`                                                         |
| 三段通路已通：Master gRPC → `api/route` → `web_backend`（`/api/projects/{id}/fs/…`）→ desktop main（`projectFs*` IPC）→ bridge/preload → renderer | `web_backend/service/workspace_fs/workspace_fs_service.go`、`desktop_app/apps/desktop/src/main/main.ts`、`packages/desktop-bridge/src/contracts.ts` |
| 已有 diff 渲染零件：Monaco diff editor 封装、`diff@9.0.0`、highlight.js、仓库自带的文件类型图标（Codex `@pierre/trees` 的 sprite）                | `renderer/MonacoDiffView.tsx`、`apps/desktop/package.json`、`renderer/codex-file-icon-registry.ts`                                                  |
| Master 已经在跑 git：插件市场用 `git` clone/fetch，并且已经处理了 Windows 隐藏窗口与 `core.longpaths`                                             | `syntropy_master/handle/plugin/marketplace_source.go`（`gitCommand` / `gitEnvironment` / `gitAvailable`）、`git_command_windows.go`                 |

**结论**：缺的只有**能算出 diff 的那一层**，以及把它接上界面的通路。渲染零件、IPC 通路、文件树
数据都已经存在。

---

## 2 决策一：diff 从哪来（**待决**）

这是整个功能的唯一硬分叉。三个方案：

### 方案 G — Master 侧 git worker（**推荐**）

把项目目录当成 git 工作树，Master 侧跑 `git diff` / `git apply`。

- 与 Codex 同构：`source` → git 参数 → unified diff 的映射可以逐条照搬
  （[review-panel.md](review-panel.md) §2.1）。
- **不需要新增存储**：历史就是 git 对象库，不用给每个文件留版本。
- Master 已经有 git 依赖与进程封装（§1 最后一行），成本比看起来低。
- 代价：项目目录必须是一个 git 仓库。用户已有的仓库直接用；不是仓库的要先问用户
  （对应 Codex 的 `codex.review.noDiff.gitRepoRequired.*` 空态 + "Create git repository" 按钮）。

### 方案 J — Master 侧内容版本库

在 Master 建内容寻址版本库（`blobs/<sha256>`），写入时保留旧版本，journal 补 `sha256` /
`previous_sha256`，diff 自己算。

- 优点：不要求项目是 git 仓库；完全贴合「Master 是唯一事实来源」。
- 代价：**与 `project.proto` 现有注释直接冲突**（「不复制或版本化」）；要给每个文件留历史 →
  存储增长需要 GC 策略；要自己实现 diff（rename 检测、二进制判定、大文件上限都得自己写）。
  仓库里可用的只有 `github.com/pmezard/go-difflib`（已在 `syntropy_master/go.sum` 里，可直接提为
  直接依赖），但它只做行级 unified diff，rename/二进制/大文件全都要自己补。

### 方案 C — Node 侧 git

在 Agent 工作区里跑 git。

- 否决：Agent 工作区是可重建的物化副本（`FetchProjectContent` 的产物），git 状态不可靠；
  多 Node 各自为政会破坏「Master 唯一事实来源」。

### 对比

| 维度                     | G（git worker）                          | J（版本库）                         | C（Node git） |
| ------------------------ | ---------------------------------------- | ----------------------------------- | ------------- |
| 与现有设计冲突           | 无（目录仍是唯一事实来源，git 只是旁挂） | **有**（要改 proto 注释与既有约定） | 有            |
| 新增存储                 | 无                                       | 有，且需要 GC                       | 无            |
| 「本轮 / 未提交」口径    | git 原生                                 | 要自己定义                          | —             |
| rename / 二进制 / 大文件 | git 全包                                 | 自己写                              | git 全包      |
| 前置条件                 | 目录是 git 仓库                          | 无                                  | 无            |
| 实现量                   | 中                                       | 大                                  | 小但错误      |

**推荐 G**，并且把 J 降级为「如果以后要支持非 git 项目再做」的备选——G 建立的 UI 与契约
（文件清单 / diff 文本 / hunk 结构）在 J 下可以原样复用，只有「算 diff」那一层要换。

> ⚠️ **需要业主确认**：G 会让 Master 对项目目录执行 git 命令，并且可能（在用户点按钮后）
> 在项目目录里 `git init`。这是对用户数据的副作用，必须在实现前拿到明确同意。

已知反例：本次截图里这个仓库的 Review 面板列出了一堆 `%SystemDrive%/ProgramData/...`
路径——那是误生成到仓库根下的目录（本仓库根目录确实有一个名为 `%SystemDrive%` 的目录）。
G 方案下这类噪声靠「未跟踪文件数上限 + 报告被略过」处理，**不自动清理**（§0.2）。

---

## 3 决策二：支持哪些来源（**冻结**）

按「有数据源 && 用户真的会用」筛，只做前四行：

| 来源          | source id     | 本期    | 对应 git 参数（照搬 review-panel.md §2.1）          |
| ------------- | ------------- | ------- | --------------------------------------------------- |
| 本轮          | `last-turn`   | ✅ P4   | 回合开始/结束两棵树之差（录制，见 §7 P4）           |
| 未提交        | `uncommitted` | ✅ P1   | `git diff HEAD`；无提交时用空树 SHA                 |
| 未暂存        | `unstaged`    | ✅ P1   | `git diff`                                          |
| 已暂存        | `staged`      | ✅ P1   | `git diff --cached`                                 |
| 分支对比      | `branch`      | ⛔ 暂缓 | `git diff $(merge-base base)`；先要 base 分支选择器 |
| 单条提交      | `commit`      | ⛔ 暂缓 | `git diff parent sha`；先要提交列表                 |
| PR 栈 / Cloud | —             | ❌ 不做 | 无数据源                                            |

保留 `staged` 的理由：它是 `unstaged` 的镜像，Master 侧成本几乎为零，且能回答
「用户手动 `git add` 过的东西长什么样」。界面里默认落在 `uncommitted`。

---

## 4 决策三：撤销语义（**冻结**）

**只做 revert，三级粒度**：

```
file    : 撤销这个文件的全部改动
hunk    : 撤销这一个 hunk
```

- 实现方式与 Codex 一致：把选中片段拼成 unified diff，`git apply -R`
  （A，review-panel.md §5.2）。untracked 文件（git 里没有基线）走**删除**路径，
  对应 Codex 的 `Ime` 分支；本项目里因为不删未跟踪文件，untracked 的「撤销」按钮直接不给。
- 结果语义照搬：`success` / `partialSuccess` / `error`，其中 `partialSuccess` 必须显式提示
  （部分文件被冲突挡住），不能报成功。
- 二次确认弹窗，带「不再询问」勾选。
- 撤销前后各记一条 journal（actor 标为 `owner`），这样「改动」页能看见谁撤的。

---

## 5 契约设计

### 5.1 proto（新增在既有 workspace_fs 下）

放在 `api/proto/model/workspace_fs/` 与 `api/proto/service/workspace_fs/`，理由：project 查找、
`resolveLocalPath` 的路径逃逸校验、ACL 判定、快照世代语义都在 `WorkspaceFSService` 里，
另起一个服务要把这些再抄一遍。

```proto
// 新增 model（设计期示意；落地时的偏差见 5.1.1）
enum ProjectReviewSource {  // 只列本期实现的
  PROJECT_REVIEW_SOURCE_UNSPECIFIED = 0;
  PROJECT_REVIEW_SOURCE_UNCOMMITTED = 1;   // 未提交（HEAD → 工作区）
  PROJECT_REVIEW_SOURCE_UNSTAGED    = 2;   // 未暂存（索引 → 工作区）
  PROJECT_REVIEW_SOURCE_STAGED      = 3;   // 已暂存（HEAD → 索引）
  PROJECT_REVIEW_SOURCE_LAST_TURN   = 4;   // 本轮
}

message ProjectReviewFile {
  string path = 1;
  string previous_path = 2;      // 重命名时的旧路径
  string change_kind = 3;        // added/modified/deleted/renamed/untracked/unmerged/type-changed
  uint32 additions = 4;
  uint32 deletions = 5;
  string revision = 6;           // 乐观并发基线：写操作要带回来核对
}

message ProjectReviewSummary {
  ProjectReviewSource source = 1;
  repeated ProjectReviewFile files = 2;
  string snapshot_generation = 3; // 与读取时的版本对齐
  bool untracked_omitted = 4;     // 未跟踪被略过
  uint32 untracked_omitted_count = 5;
  bool truncated = 6;             // 超出文件/字节上限
  string git_state = 7;           // ok / not-a-repo / git-unavailable
}

message GetProjectReviewDiffRequest {
  string project_id = 1;
  ProjectReviewSource source = 2;
  string path = 3;               // 单文件
  bool hide_whitespace = 4;
  uint64 max_bytes = 5;          // 0 = 服务端默认（32 MiB，对齐 Codex）
}
message GetProjectReviewDiffReply {
  string path = 1;
  string diff = 2;               // unified diff 文本（含 `diff --git` 头）
  uint64 diff_bytes = 3;
  bool too_large = 4;
  uint64 limit_bytes = 5;
}

message ApplyProjectReviewChangeRequest {
  string project_id = 1;
  ProjectReviewSource source = 2;
  string path = 3;
  string revision = 4;           // 必填：与 summary 的 revision 不符则拒绝
  repeated string hunk_ids = 5;  // 空 = 整个文件
  string hunk_ids_digest = 6;    // hunk 片段指纹（见下）
  string change_kind = 7;
}
message ApplyProjectReviewChangeReply {
  string status = 1;             // success / partial-success / error
  repeated string applied_paths = 2;
  repeated string skipped_paths = 3;
  repeated string conflicted_paths = 4;
  string error_code = 5;         // not-git-repo / stale / ...
}

message InitProjectGitRepositoryRequest { string project_id = 1; }
message InitProjectGitRepositoryReply { bool created = 1; string detail = 2; }
```

#### 5.1.1 落地时的偏差

真正写进 `api/proto/model/workspace_fs/workspace_fs.proto` 的契约与上面这份示意有七处偏差，
以实现的为准：

- **`source` 是字符串而不是枚举**，取值 `uncommitted / unstaged / staged / last-turn`。
  同一条链路上的 `change_kind`、`status`、`git_state` 全是字符串；用枚举会让 protojson 在网线上
  发 `PROJECT_REVIEW_SOURCE_*` 这样的名字，前端与 web_backend 都得再翻译一次。
- **`ProjectReviewFile` 多一个 `status`**：git 的原始状态字母（`M` / `A` / `D` / `R100` / `??` / `UU`），
  清单直接显示它；`previous_path` 只在重命名/复制时有值。
- **取 diff 是按文件列表进、按文件列表出**：请求是 `repeated ProjectReviewFileRef files`（每个 ref
  带 `path` + `revision`），回复是 `repeated ProjectReviewFileDiff files`，每个文件自己带
  `stale` / `too_large` / `error`，再加 `omitted_paths` 与 `budget_bytes`。没有用 map：前端本来就是
  一个文件一次请求，预算不够时按 `omitted_paths` 再发一轮。
- **没有 `hunk_ids_digest`**。原计划想给选中的 hunk 片段做指纹，但 `git diff --raw` 只覆盖索引/对象
  内容，工作区那一侧 git 从不给哈希（§2.1 的实测），指纹天然覆盖不到工作区。改成「revision 混入
  工作区内容摘要」：清单里每个文件的 revision 由两侧 blob、模式与 `reviewWorktreeDigest`
  （工作区文件的 sha256，文件不存在时是 `absent`）合成，撤销时按同一个 revision 对账。语义更强
  ——不只挡住改 hunk，也挡住任何内容漂移。
- **`hunk_ids` 是 `repeated uint32`**（diff 文本里的 hunk 序号，0 起），不是字符串；请求还要带上与
  取 diff 时一致的 `hide_whitespace`，否则 hunk 边界会变、序号就对不上了。
- **多了一个 `recording_state`（`GetProjectReviewSummaryReply.recording_state`）与一个内部消息
  `ProjectReviewTurnRecording`**（P4 落地时补的）：`last-turn` 的清单不是现算的，而是录制的，
  所以「清单为空」必须区分「没有录制」（`none`）、「这一回合还在跑」（`pending`）与「有录制、
  真的没有改动」（`ready`）。这是 P4 才出现的状态，前三个来源一律为空串。
  只靠 `files` / `git_state` 表达不了它：`git_state=ok` 且 `files=[]` 对 `uncommitted`
  是「没有改动」，对 `last-turn` 却可能是「还没录」。
- **多了整段撤销的消息与 RPC**：`ProjectReviewRevertTarget`（`path` + `revision`）、
  `ApplyProjectReviewSectionRequest{project_id, source, targets[], hide_whitespace}`、
  `ApplyProjectReviewSectionReply{status, reverted_paths[], deleted_paths[], error_code, detail}`
  与 RPC `ApplyProjectReviewSection`（HTTP `.../fs/review/apply-section`）。设计期只排了 file / hunk
  两级，Codex 的第三级粒度是 `revertSection`（"Revert all"）：界面把此刻列出的文件连 revision
  一起发过来，服务端核对后拼成一份补丁反向应用。放进同一套契约（同一个 ACL、同一把项目级写锁、
  同一套 revision 对账），比另起一条链路划算。

服务侧新增 5 个 RPC（沿用现有 `WorkspaceFSService`）：

```
GetProjectReviewSummary(GetProjectReviewSummaryRequest)   returns (ProjectReviewSummary)
GetProjectReviewDiff(GetProjectReviewDiffRequest)         returns (GetProjectReviewDiffReply)
ApplyProjectReviewChange(ApplyProjectReviewChangeRequest) returns (ApplyProjectReviewChangeReply)
ApplyProjectReviewSection(ApplyProjectReviewSectionRequest) returns (ApplyProjectReviewSectionReply)
InitProjectGitRepository(...)                             returns (InitProjectGitRepositoryReply)
```

**hunk 传输决策**：Master 只回 unified diff 文本，hunk 的切分放在两端各做一次——
前端为了渲染必须切，Master 为了撤销必须切。**不把 hunk 二进制化**（Codex 也是文本），
但撤销请求本要带 `hunk_ids_digest`（对选中 hunk 原文做的 sha256；落地时改成了「revision 混入工作区内容摘要」，见 5.1.1 第四条），让 Master 在重算 diff 后
核对同一批 hunk 仍然存在，避免「界面上看着是这三行、实际撤掉另外三行」。

### 5.2 路由与 web_backend

按 `$project` 的标准流程走一遍（proto → 生成 → `api/client` → Master handler → `api/route`
→ `web_backend`）：

```
POST /api/projects/{id}/fs/review/summary   → GetProjectReviewSummary
POST /api/projects/{id}/fs/review/diff      → GetProjectReviewDiff
POST /api/projects/{id}/fs/review/apply     → ApplyProjectReviewChange
POST /api/projects/{id}/fs/review/apply-section → ApplyProjectReviewSection
POST /api/projects/{id}/fs/git/init         → InitProjectGitRepository
```

`fs/review/apply` 是**写操作**：要进审计、要受 ACL 约束（只读授权不得撤销改动）、
要触发 `WatchProjectChanges` 让其它订阅者看到。

### 5.3 desktop 三段

| 层                                         | 改动                                                                                                                                                 |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/desktop-bridge/src/contracts.ts` | 新增 5 个 channel：`projectReviewSummary` / `projectReviewDiff` / `projectReviewApply` / `projectReviewApplySection` / `projectGitInit` + zod schema |
| `src/preload/preload.ts`                   | 透传                                                                                                                                                 |
| `src/main/main.ts`                         | `requestAppServer("POST", "/api/projects/{id}/fs/review/…")`；形状校验与错误归一化照抄 `projectFsChanges` 的写法                                     |
| `src/renderer/`                            | 新页签组件（§6）                                                                                                                                     |

---

## 6 分层工作分解

| 层             | 文件                                                                                                           | 动作                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| proto          | `api/proto/model/workspace_fs/workspace_fs.proto`、`api/proto/service/workspace_fs/workspace_fs_service.proto` | 加模型与 4 个 RPC；跑 `./gen_grpc.ps1`                                                                               |
| 客户端         | `api/client/workspace_fs/workspace_fs_client.go`                                                               | 4 个薄封装                                                                                                           |
| Master         | **新** `syntropy_master/handle/workspace_fs/project_review.go`                                                 | git worker：repo 发现 / summary / diff / apply / init；输出上限、untracked 上限、rename 后处理                       |
| Master         | `syntropy_master/handle/workspace_fs/workspace_fs_handle.go`                                                   | 4 个 RPC 的入口：project 查找 → ACL → 调 project_review                                                              |
| Master         | **复用** `syntropy_master/handle/plugin/{marketplace_source.go,git_command_windows.go}`                        | `gitCommand` / `gitEnvironment` / `hideGitWindow` / `gitAvailable` 提到 `common/`（或 local 包）复用，**不要第二份** |
| 路由           | `api/route/workspace_fs/workspace_fs_route.go`                                                                 | 4 条                                                                                                                 |
| 后端           | `web_backend/service/workspace_fs/workspace_fs_service.go`                                                     | 4 条 HTTP                                                                                                            |
| 桌面 main      | `desktop_app/apps/desktop/src/main/main.ts`                                                                    | 4 个 IPC handler                                                                                                     |
| bridge/preload | `contracts.ts`、`preload.ts`                                                                                   | 4 个通道                                                                                                             |
| 渲染           | **新** `renderer/ProjectReviewPage.tsx`（页面）+ `renderer/project-review-format.ts`（纯展示逻辑，可单测）     | 见 §7 P2                                                                                                             |
| 渲染           | **复用** `MonacoDiffView.tsx`                                                                                  | 加 `viewType: "unified" \| "split"`（现在是写死 `renderSideBySide: true`）                                           |
| 渲染           | `renderer/App.tsx`                                                                                             | 注册右栏页签「审查」+ 右侧面板「+」菜单项 + 命令面板项                                                               |
| 渲染           | `renderer/ui-labels.ts` 同族的文案                                                                             | 新增中文文案（**不要**照抄 Codex 的 i18n id）                                                                        |

---

## 7 里程碑

### P0 — 契约贯通（只读，无 UI）

proto + client + route + web_backend + desktop 4 段全打通，`GetProjectReviewSummary` 返回
**真实 git 数据**（哪怕 UI 还没做，用 curl/测试断言）。

**验证门**：`gen_grpc.ps1` 产物无 diff 残留；`go vet ./...`、`go test ./...`（api / syntropy_master /
web_backend 三个模块）全绿；`syntropy_master` 里一个真实 git 仓库夹具的单测通过。

### P1 — Master git 引擎

`project_review.go` 实现 `uncommitted` / `unstaged` / `staged` 三个 source，参数逐条对齐
[review-panel.md](review-panel.md) §2.1：

```
git -c diff.mnemonicPrefix=false -c diff.noprefix=false -c core.quotePath=false
    diff --no-ext-diff --no-textconv --color=never --src-prefix=a/ --dst-prefix=b/
    <source args> [--ignore-all-space] --full-index --find-renames -- <paths>
```

外加：`allowedNonZeroExitCodes=[0,1]`（1 是「有差异」不是错误）、输出 32 MiB 上限、
未跟踪文件 256 上限、状态字母 → `changeKind` 映射（`M/T/U/A/D/R`）、
「删了一个 + 加了一个且内容哈希前缀相同」的 rename 归并。

**验证门**：单测覆盖 4 种 status 组合、重命名、二进制、超限（用 `git` 造夹具，参考
`handle/plugin/marketplace_source_test.go` 的 `fixtureGit` 写法）；`git` 不存在时返回
`git_state = "git-unavailable"` 而不是崩。

### P2 — 前端只读面板

右栏新页签「审查」：来源选择（默认「未提交」）+ 改动文件树（复用现有文件类型图标）+
diff 视图（Monaco，unified/split 可切）+ 文件级增删行数 + 空态。

**验证门**：`pnpm verify`（format:check / lint / typecheck / 单测 / 契约测试）；
`tests/component` 新增 `project-review-format` 的纯函数测试；`docs/` 无需改动。

### P3 — 降级与保护

大 diff（单文件模式 + 上一个/下一个）、`diffTooLarge`、未跟踪被略过的横幅、
刷新、`not-a-repo` 空态 + `git init` 按钮（对应 `InitProjectGitRepository`）。

**验证门**：手工构造一个未跟踪文件 > 256 的项目，横幅文案与计数正确；非 git 目录下
页签不报错、只给初始化入口。

### P4 — 「本轮」

**落地的做法**（与下面最初的设想有两处不同，理由见本条）：

Master 监听 Agent 运行时事件里的回合生命周期（`turn.started` / `turn.completed` /
`turn.failed` / `turn.reverted`，见 `project_review_turn.go` 的 `HandleAgentRuntimeEvent`），
在回合开始与结束各抓一次工作区快照——每次快照都把工作区写成一棵 **git 树对象**——两棵树之差
就是这一回合写下的内容。录制按项目存在 Master 的 KV 桶 `project_review_turn`（键为项目 id，
只留最近一回合）；`GetProjectReviewSummary(source=last-turn)`、取 diff、撤销都直接以这对树
对象作为 `git diff` 的位置参数，其余管线（revision 对账、hunk 切分、`git apply -R`）与前三个
来源完全共用。

- **抓快照用临时索引**（`GIT_INDEX_FILE` 指向临时文件）：录制是只读旁路，绝不能动用户自己的
  索引，也不能与别处正在跑的 git 抢 `.git/index.lock`。临时索引先复制一份真实索引，索引里带的
  stat 缓存还在，因此只重新哈希真正变过的文件；没有索引时先 `read-tree HEAD` 铺一层，否则这一
  回合的改动会整批漏录。索引为空（仓库还没有第一个提交）时 `add -u` 是空操作而不是失败，
  快照照样能记下这一回合新写下的未跟踪文件。
- **未跟踪文件也进快照**（上限 512，超出只计数）：否则「这一回合新建的文件」与「这一回合又改了
  一个已存在的未跟踪文件」都看不见。`.syntropy` 下的运行时元数据不录。
- **不做 journal 的 `turn_id`**：那是「按写入日志反推本回合改了什么」那条路线的需要。录制改用
  树对象之后，「本回合改了什么」由两棵树直接回答，写入日志不必再承担版本语义（改动页仍然只
  回答「谁在什么时候写了什么」）。
- **事件只入队、后台串行抓取**：运行时事件处理是控制面的关键路径，抓快照要跑好几条 git 命令，
  不能压住它。串行保证同一回合的 start 一定先于 finish 被处理；只有 `turn_id` 与待结算的回合
  一致才结算，迟到的结束事件不会把别人刚记好的起点配成一对。
- **录制只有一个入口**：挂在 Agent 运行时事件的观察者链上（`handle_pool.go`），不再重复投影
  task 事件。

**与 Codex 的一处语义偏差**：Codex 的录制在提交/回退之后会宣布「上一回合的 diff 已经不在了」
（`codex.review.noDiff.revertedOrCommitted`）。我们的录制**不可变**：它记的就是那一回合写下的
东西，之后的提交、回退、继续改都不改变它——因为两侧都是树对象，这份 diff 与工作区当前内容
无关。好处是同一回合的多次部分撤销互不影响（Codex 在第一次撤销之后整份录制就失效了）；代价是
撤销一份已经被改回去的录制时 `git apply -R` 会失败，界面按 `apply-failed` 的原话报错，而不是
悄悄什么都不做。页签的提示语也因此写成「录制，不随之后的改动变化」。

**已知限制**：两棵树在对象库里是「没有引用」的对象，用户自己跑 `git gc`（且已过 prune 期限）
会把它们回收；那时再打开「本轮」会落到「还没有本轮的录制」空态，而不是给出错内容——`git diff`
读不到树对象就会失败，我们按 `none` 处理。另一个限制是快照只在 Master 的项目目录上抓，所以
它是「Master 看到的这一回合」，与 Node 工作区里尚未回写成功的内容（`.syntropy/pending-writes`）
无关。

**验证门**：单测里摆一个回合开始前就已经很脏的工作区，回合里只动其中一部分文件，断言
「本轮」清单只含这一回合真正改过的文件（`TestReviewLastTurnSeesOnlyTurnChanges`）、撤销回到
**回合开始**的内容而不是 HEAD（`TestReviewLastTurnRevertRestoresTurnStart`）、抓快照不动用户
索引（`TestReviewCaptureTreeKeepsUserIndex`）、生命周期各态（无录制 / 未结算 / `turn.reverted`）
（`TestReviewLastTurnLifecycle`）、事件到动作的映射（`TestReviewTurnActionForEvents`）。
另有两例专门钉住「索引不在」与「还没有第一个提交」这两个退化场景：`.git/index` 被删掉时要按
HEAD 铺一层起点树，否则「修改」会被记成「新增」（`TestReviewCaptureTreeSeedsFromHeadWithoutIndex`）；
仓库没有提交时索引本来就是空的，`add -u` 必须是空操作而不是报错
（`TestReviewLastTurnWithoutCommits`）。
真机走查仍待做（需要 `apps/desktop/resources` 重新打包出 app-server 与 master 二进制）。

### P5 — 撤销

`ApplyProjectReviewChange`（文件级 / hunk 级）+ `ApplyProjectReviewSection`（「撤销全部」，
对应 Codex 的 `revertSection` / "Revert all"）+ 确认弹窗 + 三档反馈 + 每次撤销各一条 journal。

**验证门**：撤销后工作区内容逐字节回到撤销前快照（单测里比对 sha256）；
`revision` 不匹配时必须拒绝（并发写测试）；`partial-success` 不报成功。
整段撤销另有一条真实链路的门：E2E-28 在真实 Master 上把五类改动一次撤干净（二进制 / 删除 /
改名 / 未跟踪 + 单文件撤销），并覆盖 `staged` 的两步撤销与非仓库 / 无录制退化，见 §10。

**并发**：撤销要改索引与工作区，同一项目上并发跑会先在 git 自己的 `.git/index.lock` 上撞车，
用户等到的只是一句「Unable to create ... index.lock: File exists. Another git process seems to
be running」。handler 层因此按项目加了一把 git 写锁（`lockReviewGit`）：撤销与 git init 共用，
清单与 diff 是只读的不取锁（否则一次慢 `git status` 会把用户的撤销一起压住），锁按项目分开，
不同项目互不阻塞。P4 的快照抓取仍然不取锁：它用 `GIT_INDEX_FILE` 指向临时索引，既不写索引，
也读不到半个索引（git 换索引是 rename 原子替换）。

**整段撤销（`ApplyProjectReviewSection`，对齐 Codex 的 `revertSection`）**：界面把此刻列出的文件
（含未跟踪）连 `revision` 一起发回来，服务端逐个核对后把它们拼成**一份**补丁，一次 `git apply -R`
反向应用——所以要么全撤、要么一个字节都不动（Codex 的 `revertSection` 也是「把界面上这些文件拼成
一个补丁」）。未跟踪文件没有版本库基线，排在补丁之后逐个删除，删不掉就是 `partial-success`。

三个与 Codex 一致、但值得写下来的细节：

- **重命名的 pathspec 必须给两侧**：`git diff -M -- <只给新路径>` 会把这个文件降级成「新增」，
  反向应用就成了「删掉新文件」，旧路径的内容再也回不来。`reviewPatchPaths` 因此同时给出
  `previous_path` 与 `path`。实测只给新路径时 E2E-28 当场红在 `docs/renamed.txt` 读不回来。
- **整段补丁多带 `--binary`**：单文件 diff 是给人看的（二进制那一条只写 `Binary files ... differ`），
  整段撤销要真把二进制撤回去，所以只有 `reviewSectionPatch` 加 `--binary`。
- **「未提交 / 未暂存」只撤工作区**：`uncommitted`（工作区 vs HEAD）里的已暂存部分在撤销后仍留在
  索引里。这是 Codex 的行为（非 `staged` 来源只做一次 `git apply -R`），也是刻意的：用户手动
  `git add` 过的东西不该被「撤销未提交」顺手取消暂存。要连索引一起撤，就切到 `staged` 来源再撤
  一次（两步：先 `-R --cached`，再 `-R`）。

### P6 — 可选增强（**未排期**）

| 项                                      | 触发条件                                                  |
| --------------------------------------- | --------------------------------------------------------- |
| diff 内查找                             | 用户反馈 Monaco 内置查找不够用                            |
| 空白/词级/wrap 选项                     | 同上                                                      |
| 上下文菜单（复制路径 / 在编辑器中打开） | 复用现有 `file-viewer-actions.tsx`                        |
| 换成自研虚拟化 diff 渲染器              | 只有实测证明 Monaco 在几千文件 / 十万行 diff 下不可用才做 |
| 方案 J（非 git 项目）                   | 有真实用户提出且不同意 `git init`                         |

---

## 8 风险与对策

| 风险                                              | 对策                                                                                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **对用户目录执行 `git init` 是数据副作用**        | 只在用户显式点击时执行；空态文案把后果写清楚；执行前检查目录非空时的行为（`git init` 对非空目录是安全的，但会产生 `.gitignore` 需求） |
| Windows 下每次 git 调用弹终端窗口                 | 复用 `hideGitWindow`（`git_command_windows.go`）；这是 [plugin-management-plan.md](plugin-management-plan.md) W10 已经踩过的坑        |
| 长路径（`Filename too long`）                     | 复用 `gitEnvironment()` 的 `core.longpaths=true` 与 `GIT_CONFIG_*` 去重逻辑                                                           |
| 大仓库 `git status` 很慢                          | 只在该项目的「审查」页签打开时才查；结果短期缓存；输出上限 32 MiB                                                                     |
| 误生成的未跟踪目录（如 `%SystemDrive%/`）淹没清单 | 未跟踪文件数上限 + 「已略过 N 个未跟踪文件」横幅；**不删除**                                                                          |
| 撤销打错行                                        | `revision` + `hunk_ids_digest` 双重核对；不一致直接拒绝并提示刷新                                                                     |
| 与「改动」页重复                                  | 「审查」= 看内容，「改动」= 看时间线（谁在什么时候写、成功/冲突）。两者共用同一个 project 与 ACL，但**数据源不同**，不合并            |
| 只读授权用户撤销改动                              | `ApplyProjectReviewChange` 走与写入同一套 ACL 判定                                                                                    |

---

## 9 未决问题

1. **§2 的方案选择本身**（G / J）需要业主拍板——这是唯一会改变整体结构的分叉。
2. `staged` 是否真的有用（没有 commit 流程时，用户手动 `git add` 的场景有多少）？可以在 P2
   上线后用埋点确认，删掉也不难。
3. **已决（2026-09-29）**：撤销要支持「撤销全部」（一次撤销该来源下界面列出的全部文件），
   对齐 Codex 的 `revertSection`（"Revert all"）。已落地为 `ApplyProjectReviewSection`
   （proto → api/client → api/route → web_backend → desktop 五段贯通），覆盖面见本文件 §7 P5 与
   §10 的 E2E-28。界面文案用「撤销全部（N 个文件）」，Codex 用 "Revert all"。
4. **已决（2026-09-29）**：需要在 Master 侧按项目限制 git 的并发。`lockReviewGit` 就是那把写锁
   （撤销与 `git init` 共用，读操作不取），按项目分开。实测把锁摘掉后并发撤销稳定复现
   `Unable to create ... index.lock: File exists`，`TestReviewApplySerializesConcurrentReverts`
   是它的回归门。（P4 的快照抓取不受这条影响：它用 `GIT_INDEX_FILE` 指向临时索引，既不碰真索引也不抢`.git/index.lock`。）

---

## 10 验证记录

| 验证门                      | 命令                                                                                                                                           | 结果                                                                                                                                                                                                                                                                                                                            | 日期       |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| proto 重新生成              | `.\gen_grpc.ps1`                                                                                                                               | 产物稳定（连跑两次无差异）                                                                                                                                                                                                                                                                                                      | 2026-09-29 |
| api 模块                    | `cd api; go build ./...` / `go vet ./...`                                                                                                      | 干净                                                                                                                                                                                                                                                                                                                            | 2026-09-29 |
| Master 引擎 + 全量回归      | `cd syntropy_master; go test ./...`                                                                                                            | 当次全绿（`handle/workspace_fs` 16.9s）；其后几次改动与本轮复跑的结果见下方各行                                                                                                                                                                                                                                                 | 2026-09-29 |
| web_backend                 | `cd web_backend; go build ./...` / `go vet ./...`                                                                                              | 干净                                                                                                                                                                                                                                                                                                                            | 2026-09-29 |
| 桌面类型与静态检查          | `pnpm exec tsc -b --force`、`oxlint --deny-warnings`、`pnpm check:boundaries`                                                                  | 全过（756 模块 / 1491 依赖）                                                                                                                                                                                                                                                                                                    | 2026-09-29 |
| 桌面单测与组件测试          | `pnpm test:unit`、`pnpm test:component`                                                                                                        | 9 / 806 全过（组件测试 84 个文件）                                                                                                                                                                                                                                                                                              | 2026-09-29 |
| 桌面契约测试                | `pnpm test:contract`                                                                                                                           | 378 / 379：唯一失败是 `tests/contract/local-files.contract.test.ts` 的 Windows 路径大小写断言，属既存问题，与本次无关                                                                                                                                                                                                           | 2026-09-29 |
| 审查引擎全量回归            | `cd syntropy_master; go test ./handle/workspace_fs/ -count=1`                                                                                  | 全绿（20.5s，含 8 个 P4 新例 `TestReviewLastTurn*` / `TestReviewCaptureTree*` / `TestReviewTurnActionForEvents`）                                                                                                                                                                                                               | 2026-09-29 |
| P5 撤销并发（同项目串行）   | `cd syntropy_master; go test ./handle/workspace_fs/ -count=1 -run 'TestReviewApplySerializesConcurrentReverts\|TestReviewGitLockIsPerProject'` | 全过；临时摘掉 `lockReviewGit` 后用 `-count=6` 稳定复现 `Unable to create ... index.lock: File exists`，证明这条测试真的拦得住回归                                                                                                                                                                                              | 2026-09-29 |
| P5 整段撤销（引擎）         | `cd syntropy_master; go test ./handle/workspace_fs/ -count=1`                                                                                  | 全绿（36.5s）：`TestReviewSectionRevertAll`（五类改动一次撤干净）、`TestReviewSectionRevertStaged`（先索引后工作区两步）、`TestReviewSectionRevertRejectsStaleTarget`、`TestReviewSectionRevertRequiresWriteGrant`、`TestReviewRevertRestoresRename`                                                                            | 2026-09-29 |
| P5 整段撤销（真实链路）     | `./integration/scenarios/run.ps1 -Scenario E2E-28`                                                                                             | pass（2.7s）：未提交 6 个文件一次撤干净（二进制 / 删除 / 改名 / 未跟踪都要逐字节回到提交态）、已暂存 3 个文件两步撤、单文件撤销、非仓库与无录制退化；归档报告 `integration/scenarios/reports/20260929-165221.json`（`summary_ms` 235ms、`uncommitted_revert_ms` 276ms、`journal_entries` 6）                                    | 2026-09-29 |
| 反向验证（重命名 pathspec） | 临时把 `reviewPatchPaths` 改成只给 `entry.path` 后重跑 E2E-28                                                                                  | 当场红：「读回 docs/renamed.txt: The system cannot find the file specified」——改名后的内容真的会丢；恢复后转 pass（`reports/20260929-165211.json` 是红的、`20260929-165221.json` 是恢复后的绿）                                                                                                                                 | 2026-09-29 |
| 全量真实场景回归            | `./integration/scenarios/run.ps1 -Scenario all -LargeMB 64`                                                                                    | pass=25 fail=0 pending=2（pending 是两条 opt-in：E2E-08B 真实模型回合、E2E-26 跨机）；E2E-28 在同一次全量里 pass（2.7s）。归档报告 `integration/scenarios/reports/20260929-165233.json`                                                                                                                                         | 2026-09-29 |
| 桌面契约与组件（整段撤销）  | `pnpm exec tsc -b --force`、`pnpm exec oxlint --deny-warnings`、`pnpm test:unit`、`pnpm test:component`、`pnpm test:contract`                  | tsc 0 错、oxlint 0 警（`--deny-warnings`）、单测 9/9、组件 84 文件 / 807 例全过；契约 380/381，唯一失败是既存的 `tests/contract/local-files.contract.test.ts` Windows 路径大小写断言（`realpath` 回的盘符是小写），与审查链路无关                                                                                               | 2026-09-29 |
| 既存失败（非本次）          | `cd syntropy_master; go test ./...`                                                                                                            | **本轮复跑全绿**（含 `handle/settings`）。此前记录的 `TestGetComputerUseStateRequestsInventoryFromNode`（`state-unavailable`）在对应本轮工作树的缓存里是 ok，不再复现——工作树上的在途改动可能已经修掉它，未深究（与审查链路无关：`handle/settings` 不链接 `workspace_fs`）                                                      | 2026-09-29 |
| 未跑                        | `pnpm verify` 的 `format:check`；Electron 真机                                                                                                 | `format:check` 在本机 `core.autocrlf=true` 下对 HEAD 版本也报 140 个文件未格式化，是环境基线问题（`git ls-files --eol` 对既有文件一律 `i/lf w/crlf`）；Electron 真机走查仍待做——引擎侧已经由 E2E-28 在真实 Master + 真实 git 项目上跑通，缺的是把 app-server 与 master 二进制重新打包进 `apps/desktop/resources` 后把界面点一遍 | 2026-09-29 |

## 11 落地状态

| 里程碑             | 状态   | 说明                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P0 契约贯通        | 已落地 | 4 个 RPC（P5 的整段撤销补到 5 个）打通 proto → api/client → api/route → web_backend → desktop 三段                                                                                                                                                                                                                                                                     |
| P1 Master git 引擎 | 已落地 | `project_review.go` + 单测（`TestReview*` / `TestApplyReview*` / `TestParseReview*` 全绿）                                                                                                                                                                                                                                                                             |
| P2 前端面板        | 已落地 | `ProjectReviewPage.tsx` + `project-review-format.ts`，配纯函数与页面测试                                                                                                                                                                                                                                                                                               |
| P3 降级与保护      | 已落地 | `not-a-repo` 空态 + 建仓按钮、`git-unavailable` 提示、未跟踪超限横幅、过大/过期/二进制各自的落位；超过 4000 行的补丁退回整块渲染                                                                                                                                                                                                                                       |
| P4「本轮」         | 已落地 | `project_review_turn.go` 录制回合开始/结束两棵树 + `recording_state`（none / pending / ready）空态 + 页签（本轮置顶）+ 单测（`TestReviewLastTurn*` 等）                                                                                                                                                                                                                |
| P5 撤销            | 已落地 | 引擎 + UI 都完成：文件级 / hunk 级 + 「撤销全部」（`ApplyProjectReviewSection`，对齐 Codex 的 `revertSection`，整段是「一份补丁、一次 `git apply -R`」）；确认条 + 三档结果（success / partial-success / error）就地显示，撤销后写审计并广播；同项目的撤销与 `git init` 共用一把项目级写锁（`lockReviewGit`），并发撤销不再撞 `.git/index.lock`；真实链路回归见 E2E-28 |
| P6 可选增强        | 未排期 | —                                                                                                                                                                                                                                                                                                                                                                      |

**P2 相对计划的一处偏差**：原计划复用 Monaco 的并排/内联视图（给 `MonacoDiffView` 加
`viewType`），实际改成直接渲染 git 的 unified diff 文本。原因是撤销按 `hunk_ids` 定位片段，
而 Monaco 的 hunk 边界不是 git 的边界——用并排视图渲染会让「界面上选中的片段」与「真正被撤销的
片段」对不上。直接渲染 git 的补丁还有个好处：看到的就是即将被反向应用的那段文本。
如果之后要做词级差异或 diff 内查找，再评估引入 Monaco。

**P4 相对计划的两处偏差**：计划里写的「给 journal 补 turn_id，再按写入日志反推本回合改了什么」
改成了「回合开始/结束各抓一棵工作区树对象，两棵树之差就是本回合」——顺序反了，因为写入日志只知道
「谁写了什么」，不知道「写之前是什么内容」，而树对象两侧都带内容，diff 与撤销都能直接算。另外
「回合结束后 git diff 检查点」在实现里必须是一对树（`git diff <tree>` 只比索引与树，未跟踪文件会
被误判成删除，见 `TestReviewCaptureTreeKeepsUserIndex` 的实测）。Codex 的录制在提交/回退后会失效，
我们的录制不可变（理由与代价见 §7 P4）。
