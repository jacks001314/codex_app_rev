# Review 面板（右栏 Review tab）

对 Codex desktop app **Review / 审查**面板的专项逆向：它是什么、数据从哪来、一条 diff 怎么被
算出来、渲染层怎么分层、哪些动作会写回磁盘，以及本仓库要复刻到什么程度。

- 基线：`OpenAI.Codex 26.903.9818.0`（与 [git.md](git.md) 同一快照）。
- 证据等级沿用 [evidence.md](evidence.md)：**A** = 安装包直接证据（chunk 路径或字面量），
  **B** = 本仓库源码，**C** = 结构推断。
- 本文只覆盖 **右栏 Review tab**。同一套 diff 组件还被 PR 的 code review 面板复用
  （`codex.review.*` 109 条文案里至少有 9 条同时出现在 `pull-request-code-review-c745f0e9b91d.js`），
  但 PR 侧的数据源完全不同（GitHub），见 [git.md](git.md) §6。
- 采集边界：只读安装目录；未读凭据、token、设置内容、SQLite 与用户会话数据。

---

## 0 一句话总览

Review 面板不是「一个看 diff 的页面」，而是 Codex 的**变更审查台**，四段一线：

```
① 来源选择        ② 取 diff                  ③ 渲染                 ④ 写回
7 种 source   →   main 进程 git worker   →   虚拟化 + 文件树   →   stage / unstage / revert
(header 下拉)     (独占 git 读写)            (file / hunk 级)      (@pierre/diffs + 临时索引)
```

关键判断三条：

1. **渲染层从不碰 git**。整个 Review 面板没有任何进程调用，全部走 `electronBridge` → 主进程
   git worker（[git.md](git.md) §1）。「刷新」不是重新算，而是让 live query 失效。
2. **`Last Turn` 不是算出来的，是录出来的**。worker 有 `turn-diff-capture-start` /
   `turn-diff-capture-complete` 两个方法（A，`worker.js:62296`），在回合开始/结束时抓一次
   快照；Review 只是回放这份录制。这样即使之后提交、revert、切分支，上一回合的 diff 依然成立。
3. **写操作和读操作共用同一条渲染管线**。`stage`/`unstage`/`revert` 在 hunk 粒度上就是把
   「这一个 hunk 的 unified diff 文本」丢给 `git apply`（A，`worker.js:62276` 的 `Pme`），
   所以 diff 视图必须能按 hunk / section 切出文本片段——这是渲染层的硬需求，不是可选装饰。

---

## 1 入口、落位与深链

| 项     | 值                                                                                                                                                      | 证据                                       |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| tab 名 | `thread.sidePanel.diffTab` = **Review**                                                                                                                 | A（i18n）                                  |
| 命令   | `codex.command.openReviewTab`（Open review tab）、`codex.command.toggleReviewPanel`（Toggle Review panel）、`codex.command.toggleReviewTab`（快捷键行） | A（`app-initial-f094ef01c64d.js`）         |
| 菜单   | `toggleReviewPanel` 同时是原生菜单项                                                                                                                    | A（[git.md](git.md) §9）                   |
| 落位   | 右 pane 的 tab；可 `Move to left / right / bottom pane`、可拆独立窗口、可置顶                                                                           | A（[side-panel.md](side-panel.md) §1、§4） |

深链参数（A，字面量在 `worker.js:40553`，属共享 bundle `app-initial` 的 zod schema）：

```js
{ conversationId: uuid, host: "threads", protocol: "codex:",
  view: "review" | null,                       // 打开 Review tab
  diffFilter: ("branch" | "last-turn") | null, // 预选来源
  reviewPath: string | null,                   // 直接滚到某个文件
  extraPathSegments: string[] }
```

门控：设置 `settings.git.reviewMode`（key `git-review-mode`，schema `["full","last-turn-only"]`，
默认 `full`，描述 "Whether Git Review uses all sources or only recorded Last Turn changes"）。
关掉后 git 类来源在菜单里禁用并给指路文案 `codex.review.source.gitBasedReviewDisabled`
= "Git-Based Review is disabled. Go to Settings → Git to re-enable it."（A，`worker.js:39739`）。

---

## 2 变更来源：7 种，5 种由 git 算

header 第一格是「来源」下拉，第二格随来源变化（base 分支 / commit / PR 栈）。

| 来源          | source id                          | 文案                                                                | 说明                                              |
| ------------- | ---------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------- |
| Branch        | `branch`                           | `codex.review.source.local.all` = "Branch"                          | 与 base 分支比较；base 默认取远端默认分支         |
| This branch   | —                                  | `codex.review.source.local.thisBranch`                              | 增强 header 的同一来源别名                        |
| Last Turn     | `last-turn`                        | `.lastTurn` = "Last Turn" / `.lastTurnV2` = "Last turn"             | 回放本回合录制                                    |
| Commits       | `commits` → `committed` / `commit` | `.commits` / `.selectedCommit` = "Commit" / `.commit` = "Committed" | 选一条提交看它的变更                              |
| Unstaged      | `unstaged`                         | `codex.review.stageFilter.unstaged` = "Unstaged"                    | 工作区 vs 索引                                    |
| Staged        | `staged`                           | `.staged` = "Staged"                                                | `--cached`                                        |
| Uncommitted   | `uncommitted`                      | `.uncommitted` = "Uncommitted"                                      | 工作区 vs HEAD                                    |
| Pull requests | —                                  | `codex.review.pullRequests.label`                                   | 当前分支所属 PR 栈，`{head} → {base}`、draft 标注 |
| Cloud changes | `cloud`                            | `.source.cloud`                                                     | 云端任务的变更；本机 provider 下不出现            |

证据：source id 字面量在 `thread-side-panel-tab-content-3335e9fb2381.js`（A）
（`id: "last-turn"` 在 1048/1109 行，`let x = s ? "commits" : "committed"` 在 1124 行，
`Ls = ["branch", "uncommitted"]` 在 `Rs` 初始化器里）。

### 2.1 每个 source 对应的 git 命令（A，worker 的 `K3`，`worker.js:62272`）

`K3` 返回的是**位置参数**，会被 `x2` 包成完整命令行：

```
git -c diff.mnemonicPrefix=false -c diff.noprefix=false -c core.quotePath=false
    diff --no-ext-diff --no-textconv --color=never --src-prefix=a/ --dst-prefix=b/
    [--binary] <K3 的 args> [--ignore-all-space] --full-index --find-renames -- <paths>
```

（前缀三件套 `Que`、基础参数 `$ue`、`--full-index`/`--find-renames` 都写在代码里，
`allowedNonZeroExitCodes: [0,1]` —— 1 是「有差异」，不是错误。）

| source        | args                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| `branch`      | 指定 base 时 `[mergeBase(base)]`；否则先探远端默认分支（`main` / `master`）再 `[mergeBase(remote/default)]` |
| `commit`      | `[parentOf(sha) ?? 4b825dc…（空树 SHA 常量）, sha]`                                                         |
| `staged`      | `["--cached"]`                                                                                              |
| `uncommitted` | `[HEAD 或 空树]`（仓库还没有提交时用空树）                                                                  |
| `unstaged`    | `[]`                                                                                                        |

### 2.2 三种来源入口的形态

`thread-side-panel-tab-content-3335e9fb2381.js` 里同一套 source 表被渲染成三种形状（A）：

- **精简菜单**（`L`/`thisBranch` 之外的）：只列 source。
- **带 base 分支选择**：`codex.review.source.local.selectBaseBranch` = "Select branch"，
  渲染成 `{当前分支} → {base}`，箭头文案 `codex.review.source.local.branchRangeSeparator` = "→"
  —— 截图里那行 `main → origin/main` 就是它。
- **带 commit 选择**：`{sha 短号} {相对时间} ago`（`.commit.relativeTimeAgo` = "ago"），
  加载中 `.commit.loading`、空 `.commit.empty` = "No commits on branch"、
  失败 `.commit.error` + `.commit.retry`。

### 2.3 `Last Turn` 的录制机制（A）

worker 方法表里有两支只服务于它：

```
turn-diff-capture-start   params: { baseTurnId, checkpointKey, cwd, turnId }
turn-diff-capture-complete params: { capture, retainCheckpoint }
```

`_ge` 在回合开始时按 `checkpointKey` 建检查点，`vge` 在回合结束时结算；`isRepoWatched` 是前置
条件（没被 watch 的仓库不录）。与之配套的空态是 `codex.review.noDiff.reverted` =
"The last turn was reverted."、`.revertedOrCommitted` = "The last turn was committed or reverted."、
`.orNoLongerAvailable` = "The latest diffs are no longer available." —— 说明这份录制有生命周期，
会因为提交/回退而失效（C）。

---

## 3 数据层：git worker 的 Review 方法族

### 3.1 读方法（A，[git.md](git.md) §1.1 的方法表，本文补参数与返回）

| 方法                                                              | 关键字面量                                                                                            | 返回                                                                                                   |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `review-summary`                                                  | `source` / `baseBranch` / `commitSha` / `hideWhitespace` / `includeUntrackedFiles` / `paths`          | `{type:"success", files[], snapshotGeneration, source, stageCounts, untrackedFilesOmitted}`            |
| `review-diff`                                                     | 上面 + `files[]`（每个含 `path` / `previousPath` / `changeKind` / `revision`） + `snapshotGeneration` | `{source, diffs: { [path]: {type:"success", diff, diffBytes} \| {type:"error", error} } }`             |
| `review-patch`                                                    | `source` + …                                                                                          | 单个 unified patch（用于「复制 git apply 命令」）                                                      |
| `review-search`                                                   | `source` / `query` / `includeUntrackedFiles`                                                          | `{type:"success", matches[], totalMatches, isCapped}`                                                  |
| `review-source-line-counts`                                       | `sources[]`                                                                                           | 每个 source 一条 `success`（`additions`/`deletions`/`fileCount`）/ `incomplete` / `expected` / `error` |
| `status-summary`                                                  | `cwd`                                                                                                 | 工作区统计（composer 底栏用）                                                                          |
| `branch-diff-stats`                                               | `cwd` / `baseBranch`                                                                                  | `{additions, deletions, fileCount}` —— 截图里 `+32230 -18691` 就是它                                   |
| `review-working-tree-file-metadata` / `review-commit-line-counts` | —                                                                                                     | 单文件 / 单提交的行数                                                                                  |

`review-summary` 的实现在 worker switch 的 review-summary 分支：
`i6({...e.params, maxUntrackedFiles: F8(...), worktreeRepo: t})`（A，`worker.js:62296`），
`i6`（`worker.js:62276`）并行做三件事：列文件（`a6`）、数暂存态（`wme`）、必要时先数一遍
untracked（`m4`）。返回前统一在 `reviewSnapshot.read(...)` 里读一次，保证三个结果是**同一个快照世代**。

### 3.2 只有两种写方法

```
apply-review-section-changes   // Review 的 stage/unstage/revert 唯一入口
apply-patch                    // 通用补丁（对话里的「应用改动」）
```

两者都在 mutation 分支里（A，`worker.js:62296` 的 `case` 列表 + `m_e` 返回 `!0`），
并且都会在成功后 `d = e.params.cwd` 标记「这个仓库脏了」，触发 live query 失效。

### 3.3 live query 与失效

Review 的读方法走 react-query + **live query**（`git grep`「订阅」语义）：`subscribe-live-query`
在后端登记，仓库文件事件（`working-tree` / `index` / `HEAD` / `config` / `remote-refs` 等
changeType）到达时由 worker 决定哪些订阅要重算（A，`jge(query, changeType)`）：

```
status-summary :  config, head, index, working-tree            → 重算
review-summary :  config, head, index, remote-refs, working-tree → 重算
                  synced-branch, local-refs, worktree-topology   → 忽略
```

这套映射是**手写的白名单**，不是「有变化就刷」——否则一次 fetch 会让整个面板重算。
失败时最多重试 `Oge` 次，然后发 `git-live-query-failed` 事件（C）。

### 3.4 快照世代（stale-snapshot）

每次读都带 `snapshotGeneration`。写操作会推进世代，读到旧世代直接返回
`{type:"stale-snapshot"}` 而不是拿新旧混合的内容去渲染（A，`P8(repo, generation)` 抛
`StaleSnapshotError`，`s3` 是这个类）。`review-diff` 的 catch 分支写得很明确：
stale 就回退成全部 `unknown`，其它异常就回退成全部 `unknown` 但保留 source。

### 3.5 上限（A，全是字面量）

| 值             | 用途                                                                                    |
| -------------- | --------------------------------------------------------------------------------------- |
| `y2 = 32 MiB`  | 单次 `git diff` 的默认 `maxOutputBytes`；超了报 `diff-too-large`                        |
| `Zue = 64 MiB` | 按 section 拼接 patch 时的聚合上限                                                      |
| `Xue = 5 MiB`  | `cat-file` 单对象上限；且一次最多 4 个 oid（`requests.length > 4` 直接 unknown）        |
| `256`          | `operationSource` 为 `review_model` / `review_search` 时的 untracked 文件数上限（`F8`） |
| `250`          | diff 内查找（find）单次返回的匹配上限（`diff-source-a588acc09b83.js` 的 `F = 250`）     |

---

## 4 diff 流水线：一个文件一条 diff

### 4.1 解析方式：切 `diff --git` 段

`Qpe` → `$pe` 跑 git，`tme` 用 `/^diff --(?:git|cc|combined) .*$/gm` 切段，
每段作为 `{type:"success", diff, diffBytes}` 同时挂在**旧路径和新路径两个 key** 上
（A，`tme` 里 `t.set(a.oldPath, l); t.set(a.newPath, l)`）——这就是为什么重命名文件在新旧
路径上都能查到 diff，不需要渲染层做二次映射。

前端消费时按 `path`、`previousPath`、`changeKind`、`revision` 组织（A）：

```
{ path, previousPath, changeKind: added|modified|deleted|renamed|untracked|unmerged|type-changed,
  revision, additions, deletions, oldMode, newMode, oldOid, newOid, status }
```

`M`/`T`/`U` 状态字母直接被翻译成 `changeKind`（A，`worker.js:62276`：
`e === "T" ? "type-changed" : e === "U" ? "unmerged" : "modified"`）。

### 4.2 三种额外合流

- **untracked**：只对 `branch` / `uncommitted` / `unstaged` 扫（`m4`），结果并进文件表；
  被丢掉时用 `untrackedFilesOmitted = {count, limit}` 上报（`p6(count, limit)`），
  前端渲染成 `codex.review.untrackedFilesOmitted.*`。
- **rename**：`--find-renames` 之外还有两轮后处理：
  - `Eme`（staged rename 对齐，仅 `branch`/`uncommitted`）
  - `o6`（把「删了一个 + 加了一个、内容哈希前缀相同」的配对识别成 rename）
- **unmerged**：`V3` 扫冲突路径，作为 `changeKind: "unmerged"` 追加进文件表，
  对应文案 `review.fileDiff.mergeConflicts` = "File has merge conflicts"。

### 4.3 `stageCounts`

`review-summary` 额外返回 `stageCounts`（`wme`），供 Unstaged/Staged 两个过滤器的
计数与空态文案（`.stageFilter.empty.staged.title` = "No staged changes" 等）使用。
`hideWhitespace` 为真时走另一条计数路径（`Dme`）——因为忽略空白后行数会变。

---

## 5 写操作：三级粒度 × 三个动作

### 5.1 粒度

```
file    : stageFile / unstageFile / revertFile            tooltip: "Stage file" …
hunk    : stageHunk / unstageHunk / revertHunk            tooltip: "Stage" …
section : stageSection / unstageSection / revertSection   tooltip: "Stage all" / "Revert all"
```

（A，`codex.review.*` 与 `diff.actionButton.*` 两族文案；`*SectionLabel` 是 Review header
上那颗常驻按钮的可见文案。）可用动作随 source 变化：只有
`branch` / `unstaged` / `uncommitted` / `last-turn` 四个 source 显示这排动作
（A，`thread-side-panel-tab-content…:3449`）。隐藏差异文件（`linguist-generated`）时，
动作区旁边多一颗「列数」按钮（同处 `hasLinguistGeneratedAttributes` 判定）。

### 5.2 实现：把选中片段拼成 patch 再 `git apply`

`Pme({action, host, cwd, files, source, gitManager})`（A，`worker.js:62276`）：

1. 先按当前 source **重算一遍这些文件的 diff**（`Y3`），并核对每个文件的 `revision`
   与实时元数据一致——不一致直接拒绝（防止对着过期的界面写盘）；
2. 把选中的片段（file / hunk / section）拼成一个 unified diff 字符串；
3. 按 action 分派：

| action                    | 目标             | 实现                                                                  |
| ------------------------- | ---------------- | --------------------------------------------------------------------- |
| `stage`                   | index            | `git apply --cached`（走临时索引）                                    |
| `unstage`                 | index            | `git apply --cached -R`                                               |
| `revert`（source=staged） | index + worktree | 先 `-R --cached`，再 `-R`（worktree）；第二步失败 → `partial-success` |
| `revert`（其它）          | worktree         | `git apply -R`；untracked 的 gitlink 子模块另走目录删除               |

「临时索引」是 [git.md](git.md) §1.2 那条：`GIT_INDEX_FILE` 指向临时文件，先 `git add -u`
再 `git diff --cached`，用完即弃，**不污染真 index**。这是 stage/unstage 能在「看起来没写盘」
的前提下拿到正确结果的原因。

### 5.3 结果语义

统一返回 `{status, appliedPaths[], skippedPaths[], conflictedPaths[], errorCode?}`，
status ∈ `success` / `partial-success` / `error`；`not-git-repo` 时 errorCode 是 `not-git-repo`
（A）。前端把三种结果分别映射成 toast：

```
codex.review.revert.{file,hunk,section}.{success,partialSuccess,error}
codex.review.revert.notGitRepo = "Revert requires a Git repository"
```

revert 另有一次确认弹窗（可勾选「不再询问」）：
`codex.review.revertDialog.title` = "Revert changes?"、
`.message` = "This action removes all of these changes."、`.skip` = "Don't ask again"。

---

## 6 渲染层

### 6.1 组件分层（A，按 chunk）

```
thread-side-panel-tab-content-3335e9fb2381.js   168 KB   Review tab 主体：来源菜单 / header /
                                                        动作 pill / 空态 / 降级横幅 / revert 弹窗
  └─ code-diff-dbee820b6963.js                    87 KB   diff 渲染（@pierre/diffs 的 FileDiff 封装）
       ├─ use-code-diff-context-menu-6d352d781f8f.js 16 KB  右键菜单
       └─ diff-comment-card-c409d5c26721.js           4 KB  行内评论卡（PR 复用）
  └─ review-file-source-item-c54b527a729c.js      99 KB   文件树行（状态徽章、展开、hover 动作）
  └─ review-file-tree-pane-b743a8f06e62.js       102 KB   changed-files 树（主形态）
  └─ review-file-tree-side-pane-b99602290612.js   38 KB   可停靠 / 可拖宽的侧栏形态
  └─ review-diff-virtualizer-metrics-92681c84005e.js 1 KB  虚拟化度量（行高 / hunk 分隔高度）
  └─ diff-source-a588acc09b83.js                   6 KB   find-in-diff 的搜索域适配器
```

### 6.2 文件树：一个组件，两种形态

`review-file-tree-side-pane` 的根节点类名是
`relative flex h-full shrink-0 border-l border-default`（A，1357 行）——**左边框**，即这块面板
贴在内容**右侧**；宽度用 spring 动画（`animatedSize` / `opacity` / `isMounted`），
上限 `On * 100%`（百分比），拖到 `We(kn)` 以下自动收起。截图里 diff 在左、树在右，
就是这条 `border-l` 的形态。

同一个组件按 `type` 分派两种内容（A，1362 行起）：

- `type === "changed-files"` → changed-files 树（Review 用），
  底部 `reserveBottomPadding` 给动作 pill 让位；
- 否则 → 工作区文件树（`roots[]`，多根时顶部多一个「选择根」下拉，
  文案 `review.fileSource.browser.chooseFileTreeRoot`，空态复用
  `threadSidePanel.workspaceBrowser.loading/empty`）。

也就是说 **Review 的改动树和「Files」tab 的目录树是同一个组件**，只是喂不同的数据。

树上的动作（A）：

```
codex.review.fileTree.filters            Filter changed files（可访问性标签）
codex.review.fileTree.filterGeneratedFiles  Filter generated files（读 .gitattributes 的 linguist-generated）
codex.review.fileSearch.empty            No matching files
codex.review.fileTree.renderError        File tree couldn't render
codex.review.fileTree.contextMenu.{copyPath,openWith,openInTarget}
```

### 6.3 diff 视图

`code-diff` 内层是 `@pierre/diffs` 的 `FileDiff`，参数全部来自 props（A，`Ot` 函数）：

```js
{ diffStyle: viewType === "split" ? "split" : "unified",
  overflow: wrapLines ? "wrap" : "scroll",
  hunkSeparators,                  // 默认 "simple"
  fileDiff,                        // 带 cacheKey，改文件才重置
  metrics }                        // 来自虚拟化度量 chunk
```

外面套一层 error boundary，崩了显示 `codex.diff.renderFailed` = "Diff failed to render"。
非文本文件的三种兜底：`wham.diff.binaryFile` = "Binary file not shown"、
`codex.diff.fileRenamedWithoutChanges`、`wham.diff.noContent` = "No content"。
图片和 PDF 走富预览（`imagePreview` / `pdf` 两条分支，可被 `codex.review.richPreview.*` 关掉）。

选项菜单（全部是 `codex.review.*`）：

```
expandOrCollapseDiffMenu.{expand,collapse}   Expand / Collapse all diffs
switchToSplit / switchToUnified              split ↔ unified
whitespace.{show,hide}                       hideWhitespace
wordDiffs.{enable,disable}
wrap.{enable,disable}
loadFullFiles.{enable,disable}               partial diff 是否补齐整文件
refreshGitQueries                            Refresh
```

### 6.4 find-in-diff

`codex.threadFindBar.placeholder.review` = "Search diff…"。搜索域适配器
`diff-source-a588acc09b83.js` 暴露 `{domain:"diff", contextId, search(), ensureVisible()}`（A）：

- `search` 在**内存里的 hunk 文本**上匹配，不重新请求 git；
- 匹配上限 `F = 250`，超了返回 `isCapped`，前端显示
  `codex.threadFindBar.results.capped` = "{active} / {matches}+ results"，
  底部给 `codex.review.find.loadMore` = "Load more matches"；
- 匹配位置同时带**源码坐标**（`side` / `lineStart` / `lineEnd`）和**渲染坐标**
  （`hunkId` + 字符 offset），`ensureVisible` 先滚文件、再滚 hunk、最后滚到渲染出的
  `<mark>` —— 三层都对齐了才敢滚，否则命中在虚拟化窗口外会滚空。

### 6.5 状态持久化

| 状态       | key                     | 说明                                                                                             |
| ---------- | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 已读文件   | `review-viewed-file-v1` | A（`thread-side-panel-tab-content…:3137`）；`markAsViewed` / `markAsUnviewed` / `markedAsViewed` |
| 展开/折叠  | `review-diffs-${open    | collapsed}`                                                                                      | A（`:3972`）；`data-review-path` 是滚动定位的锚点（`:4044`） |
| 显示文件栏 | `threadPanel` store     | `header.showFiles` / `header.hideFiles`                                                          |

### 6.6 右键菜单（`use-code-diff-context-menu`）

`wham.diff.contextMenu.*`：`copyPath` / `copyRelativePath` / `copySelection` /
`openInTarget` / `openWith` / `openInGitHub` / `requestChanges` / `toggleWrap` / `newTab`。
Review 自己的文件头还多一条 `codex.review.copyGitApplyCommand` =
"Copy git apply command"（toast：`.toast` = "Copied git apply command to the clipboard"）。

---

## 7 状态与降级矩阵

| 情况               | 文案                                                                                                                                                                          | 行为                                                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 大 diff            | `codex.review.largeDiff.banner` = "This diff is large, showing one file at a time"                                                                                            | 切单文件模式，header 给 `previousFile` / `nextFile`                                             |
| 单文件超限         | `codex.review.diffTooLarge.title` = "Diff too large to display" + `.description` = "Open the file to review changes directly."                                                | 不渲染，指路到文件页签                                                                          |
| diff 加载中/失败   | `.diff.loading` = "Loading diff"、`.diff.loadFailedAfterRetrying` = "Diff failed to load after retrying"、`.diff.fullContentLoadFailed` = "Full file content failed to load"  | 占位 + 自动重试                                                                                 |
| untracked 太多     | `.untrackedFilesOmitted.title` = "Showing tracked changes only"、`.content` = "Review skipped {count} untracked files to stay responsive…"、`.copyCleanupCommand`、`.refresh` | 只显示 tracked，给一条可复制的清理命令                                                          |
| 文件监听不全       | `.fileWatchLimited.message` = "Some files can't be watched for changes. Refresh to update this view." + `.refresh`                                                            | 提示存在漏刷，手动刷新                                                                          |
| 刷新中             | `.refreshGitQueries.inProgress` = "Refreshing changes"                                                                                                                        | 动作条状态                                                                                      |
| 无改动             | `.noDiff` = "No file changes yet" + `.baseDescription` = "Changes in this project will appear here."                                                                          | 空态                                                                                            |
| 非 git 仓库        | `.noDiff.gitRepoRequired.title` = "Create a Git repository" + `.description` = "Track, review, and undo changes in this project."                                             | 空态直接给「初始化仓库」按钮：`.gitInit.createRepository` / `.creating` / `.success` / `.error` |
| 被 revert / 提交过 | `.noDiff.reverted` / `.revertedOrCommitted` / `.orNoLongerAvailable`                                                                                                          | 说明这份 diff 为什么没了                                                                        |
| 空态但分支有差异   | `.emptyState.viewBranchDiff` = "View branch diff"                                                                                                                             | 一键切到 Branch 来源                                                                            |

---

## 8 文案清单

`codex.review.*` 共 **109 条**，另外 `diff.actionButton.*` 12 条、`wham.diff.*` 11 条、
`codex.threadFindBar.*`（review 相关）3 条。完整带 `description` 的清单可从
`code/_catalog/i18n-messages.json` 提取（复现命令见 §11）。这里只强调一个读法：
**`description` 是开发者写给翻译者的意图说明，信息量常超过 `defaultMessage`**。
例如 `codex.review.fileWatchLimited.message` 的 description 明确写了
"the adjacent Refresh button reads the latest changes. This does not limit editing files."
——这一句直接划定了这条提示的语义边界（只是视图可能不全，不限制编辑）。

---

## 9 与本仓库（Syntropy desktop_app）的对照

> 与 [git.md](git.md) §10 相比，这一节按**当前**代码重写（git.md §10 还停留在「用 revision
> 模拟 Review」的旧模型；`docs/project-delivery-redesign.md` 里 revision / changeset 已被删除）。

| 能力                 | Codex app（A）                                                                     | 本仓库（B）                                                                                                                             |
| -------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 面板落位             | 右 pane tab，可拆窗/停靠                                                           | 已有右栏 tab 体系（`+` 菜单），但没有 Review 这一页                                                                                     |
| 变更来源             | 7 种（branch / last-turn / commit / staged / unstaged / uncommitted / PR / cloud） | 「改动」页只有一种：Master 写入日志流水账（`ProjectChangesPage.tsx`）                                                                   |
| diff 计算            | main 进程 git worker，独占 git 读写                                                | **没有**：项目就是 Master 上的普通目录，没有 git，也不存历史内容                                                                        |
| 「上一轮」语义       | 回合开始/结束各录一次快照                                                          | 无；日志里能按 `task_id` / `ts_ms` 切片，但没有「回合」边界                                                                             |
| 渲染                 | @pierre/diffs + 虚拟化 + hunk 级交互                                               | 已有 `MonacoDiffView.tsx`（Monaco diff editor，`renderSideBySide`）与 `diff@9.0.0`；「改动」页右侧只是**单文件只读预览**，没有并排 diff |
| 写回（stage/revert） | `git apply` 三级粒度                                                               | 无（项目内容只有 etag CAS 写入，没有「撤销/暂存」概念）                                                                                 |
| 大 diff / 降级       | 三档字节上限 + 单文件模式 + untracked 上限                                         | 「改动」页只限制条数（默认 500 / 上限 5000）                                                                                            |
| 已读状态             | `review-viewed-file-v1`                                                            | 无                                                                                                                                      |
| 查找                 | find-in-diff（250 上限，三层滚动对齐）                                             | 无                                                                                                                                      |
| PR / GitHub          | gh CLI + PR 栈 + code review 复用                                                  | 无数据源，不做                                                                                                                          |

结论：本仓库在 Review 上是「**用写入日志代替版本区间**」，缺的是**能算出 diff 的那一层**。

---

## 10 明确未覆盖 / 存疑（C）

1. `turn-diff-capture-*` 的检查点具体存哪（内存 / 磁盘 / 仓库对象）未定位到实现体，只有方法名、
   参数与 `retainCheckpoint` 这个开关。本仓库落地时选的是「回合开始/结束两棵 git 树对象
   - Master 侧 KV 桶 `project_review_turn`」，见 [review-panel-plan.md](review-panel-plan.md) §7 P4。
2. `Xue`（5 MiB）只确认了用在 `cat-file` 的对象上限，未确认是否还有第二处用途。
3. 富预览（图片 / PDF 并排对比）的渲染细节未抽（依赖 `pdf-preview-diff-*` 动态 chunk）。
4. PR code review 与 Review 面板复用 `codex.review.*` 的边界只做了文案级比对，
   组件级复用范围（是否同一组件树）未逐行核。
5. `review-source-line-counts` 的 `expected` / `incomplete` 两个分支的具体触发条件只从
   `Lge` / `Cme` 读出「有 merge_base 缺失 / untracked 被略过」，未逐个验证。
6. 本文仍是 26.903 快照；26.908 只重抽了插件模块，Review 家族是否有变化未知。

---

## 11 复现

```powershell
cd codex_app_rev

# 1) 提取全部 Review 相关文案（含开发者 description）
node code/tools/ctx.mjs 'review-summary'            code/main-process/build/worker.js --before 300 --after 700
node code/tools/ctx.mjs 'async function K3'         code/main-process/build/worker.js --before 20  --after 3000
node code/tools/ctx.mjs 'async function Pme'        code/main-process/build/worker.js --before 20  --after 3000
node code/tools/ctx.mjs 'async function i6'         code/main-process/build/worker.js --before 20  --after 3000

# 2) UI 侧：来源菜单 / 降级 / 已读状态，都在这个 chunk 里
#    （168 KB，Prettier 已格式化，可直接按行读）
#    code/side-panel/tabs/thread-side-panel-tab-content-3335e9fb2381.js
```

`_catalog/i18n-messages.json` 里筛 `codex.review.` 前缀即可得到 §8 的 109 条清单。
