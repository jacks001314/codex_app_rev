# Git 相关功能与页面

Codex desktop app 里与 Git / GitHub 有关的**功能面、页面、命令、协议**的合集。
散落在 `conversation/`、`side-panel/`、`settings/`、`composer/`、`main-process/` 五个模块里，此前没有单独成文，本文按「引擎 → 页面 → 设置 → 自动化」串起来。

- 快照：`OpenAI.Codex 26.903.9818.0`（应用版本 `26.903.71938`）。`code/plugins-26908/` 是 26.908 的插件快照，与本文无关。
- 规模：`code/` 的 624 个 js chunk 中 **69 个**文件名带 `git|pull-request|diff|review|worktree|branch|commit`；i18n 目录里 git/review/PR 命名空间共 **51 组 511 条**（另有 `codex.review` 一组 109 条）。
- 证据等级沿用 [evidence.md](evidence.md)：**A** = 安装包直接证据（chunk 路径或 i18n 描述符），**B** = 本仓库实现，**C** = 结构推断。
- 本文所有 A 级结论都指向 chunk 或字面量；`description` 是开发者写给翻译者的意图说明，是本文件最主要的证据来源。

---

## 0 一句话总览

Git 在 Codex app 里不是一个功能，而是**五层**：

```
① 页面         Review 面板 / Git actions 对话框 / PR 侧面板 / Pull requests 页 / 设置页
② 查询层       react-query + live query（仓库文件监听 → Review 自动刷新）
③ git worker   main 进程里一条独立线程，独占全部 git 读写（唯一写入口）
④ 本机 git     随包 git（CODEX_PREFERRED_GIT_EXECUTABLE）优先，回退系统 git
⑤ 远端         gh CLI 适配器（25 个 gh-* 操作，其中 22 个 gh-pr-*）→ GitHub；GitLab 走 MR 分支
```

关键判断：**写操作只有 worker 一处**（`main-process/build/worker.js`），渲染层从不起 git 进程；GitHub 侧不直连 REST，而是包一层 `gh` CLI（`gh-pr-*` 方法族）。

---

## 1 引擎：main 进程的 git worker

代码：`code/main-process/build/worker.js`（git worker 线程）、`code/main-process/build/src-B6LqG3ek.js`（主进程侧客户端 + 命令注册表）、`code/main-process/build/main-CMBCj4XL.js`（git 可执行文件装配）。

### 1.1 方法表（A）

worker 暴露一条 JSON-RPC 方法表（`switch` on `e.method`），按读/写分组：

| 类别                              | 方法                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 仓库发现/监听                     | `availability`、`stable-metadata`、`clone-state`、`repository-identity`、`watch-repo`、`unwatch-repo`、`subscribe-live-query`、`recover-live-queries`、`invalidate-git-read-caches`、`invalidate-stable-metadata`、`git-init-repo`、`dispose-git-init-watch`                                                                                                                                                       |
| 分支                              | `current-branch`、`current-branch-snapshot`、`upstream-branch`、`branch-ahead-count`、`default-branch`、`base-branch`、`recent-branches`、`branch-exists`、`branch-commits`、`search-branches`、`nearest-ancestor-branch`、`branch-metadata`、`branch-upstream`、`synced-branch`、`synced-branch-state`、`resolve-worktree-starting-ref`、`locally-known-default-branch`、`remote-default-branch`、`remote-branch` |
| Review / diff                     | `status-summary`、`staged-and-unstaged`、`branch-diff-stats`、`review-summary`、`review-source-line-counts`、`review-diff`、`review-search`、`review-patch`、`review-blob-diff`、`review-commit-line-counts`、`review-working-tree-file-metadata`、`commit-message-diff`、`turn-diff-capture-start`、`turn-diff-capture-complete`                                                                                  |
| 文件/对象                         | `cat-file`、`blame-file`、`index-info`、`submodule-paths`、`config-value`                                                                                                                                                                                                                                                                                                                                          |
| **写操作**（被单独标为 mutation） | `create-worktree`、`restore-worktree`、`delete-worktree`、`apply-changes`、`apply-patch`、`apply-review-section-changes`、`commit`、`create-branch`、`move-thread-to-local`、`move-thread-to-worktree`、`move-thread-to-host-worktree`                                                                                                                                                                             |
| Worktree 管理                     | `list-worktrees`、`codex-worktrees`、`resolve-worktree-for-thread`、`worktree-snapshot-ref`、`managed-worktree-state`、`cancel-worktree-upstream-refresh`、`set-worktree-owner-thread`                                                                                                                                                                                                                             |
| 杂项                              | `git-origins`（一条命令批量解析多个目录的 remote）、`set-config-value`、`left-right-commit-counts`、`merge-base`、`head-merge-base`、`symbolic-head-branch-name`、`head-branch-name`                                                                                                                                                                                                                               |

> 写法证据：`worker.js` 的 mutation 分支 `case\`create-worktree\`…case\`move-thread-to-host-worktree\`: return !0`，与读方法分支同一 switch。

### 1.2 命令装配（A）

`main-CMBCj4XL.js` 里有一段专门的 **git 可执行文件解析**：

- 环境变量 `CODEX_PREFERRED_GIT_EXECUTABLE` 指定的 git 必须自报 `git version …-openai`（正则 `/^git version [^\r\n]*[.-]openai(?:[.-][^\r\n]+)?$/i`）才被采用，否则回退系统 `git`；
- 采用随包 git 时同时注入 `GIT_CONFIG_SYSTEM=<pkg>/etc/gitconfig`、`GIT_EXEC_PATH=<pkg>/libexec/git-core`、`GIT_TEMPLATE_DIR=<pkg>/share/git-core/templates`，并把它的目录前置到 `PATH`；
- 另见字面量 `git.exe`、`git-bash.exe`、`gitBash`、`Git Bash.lnk`、`Git Bash`（Windows 侧同时探测 Git for Windows 与 `GitHubDesktop.exe` 作为"打开方式"目标）。

diff 生成固定参数（`src-B6LqG3ek.js`）：

```
--no-ext-diff --textconv --no-color --src-prefix=a/ --dst-prefix=b/
（二分模式再加 --binary）
```

暂存用**临时索引**，不动真 index：`GIT_INDEX_FILE` 指向 `codex-git-index-*`，先 `git add -u` 再 `git diff --cached`，结束即弃 —— 这是 Review 面板里 Stage/Unstage 的实现基础。

其他被显式用到的 git 能力：`--git-dir` / `--git-common-dir` / `--git-path`（worktree 与 submodule 的元数据定位）、`rev-parse`、`ls-files`、`check-ignore`、`check-ref-format`、`for-each-ref`、`show-ref`、`merge-base`、`commit-tree` / `write-tree` / `read-tree` / `update-ref`（turn diff capture）、`sparse-checkout`、`blame --porcelain`、`.gitattributes`（`gh-pr-gitattributes`，用于识别 `linguist-generated`）。

### 1.3 健壮性与失败语义（A）

| 字面量                                                                                                          | 含义                   |
| --------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `GitUnavailableError`、`Git is unavailable`、`not-git-repo`                                                     | git 不可用 / 非仓库    |
| `git process timed out after ${ms}ms`、`git process aborted`、`Git query aborted`                               | 超时与中断             |
| `GitReviewSnapshotStaleError`、`Git snapshot became stale`、`stale_snapshot`                                    | 读快照过期（刷新重试） |
| `Git merge-base failed`、`Git ref lookup failed`、`Failed to resolve git root and common dir: malformed output` | 具体解析失败           |
| `failed-to-stash-changes`、`blocked-by-working-tree-changes`                                                    | 工作区不干净导致的拒绝 |
| `review_comparison`、`failedCommandCount`                                                                       | Review 失败归因        |

埋点（analytics 事件名）：`git.command.start` / `git.command.complete`、`git_direct_call`（不经 worker 的直调）、`git.operation`、`git.worker_operation`、`git.queue_wait(_ms)`、`git.host_kind`、`git.metadata_root`、`git.metadata_common_dir`、`local_conversation_git_actions`、`local_conversation_git_summary`。

### 1.4 gh CLI 适配器（A）

`src-B6LqG3ek.js` / `worker.js` 里的 `gh-*` 操作族（GitHub 侧唯一的出入口）：

```
gh-cli-status  gh-current-user
gh-pr-board  gh-pr-search  gh-pr-stack  gh-pr-for-branch
gh-pr-summary  gh-pr-metadata  gh-pr-body  gh-pr-diff  gh-pr-revision-diff  gh-pr-revision-file
gh-pr-discussion  gh-pr-comment  gh-pr-comment-update
gh-pr-reviews  gh-pr-review-snapshot  gh-pr-review-thread-update  gh-pr-submit-review
gh-pr-merge  gh-pr-update  gh-pr-create  gh-pr-gitattributes  gh-pr-media
gh-user-search
```

配套文案证实是 `gh` 而不是 REST：`Install GitHub CLI (gh) to create PRs`、`Authenticate GitHub CLI: run \`gh auth login\``、`Exact-revision review requires GitHub CLI signed in to the selected GitHub account`、`Pass \`--repo ${repo}\` to GitHub CLI commands.`、`Run GitHub CLI commands from that directory.`。
另有少量 GitHub REST 痕迹（`Accept: application/vnd.github.diff`、`application/vnd.github.object+json`、`No GitHub repository found for reviewer request`、`Failed to search GitHub users`），推断为 gh 之外的内联请求（**C**）。

---

## 2 页面 ①：Review 面板（右栏 Review tab）

chunk：`side-panel/tabs/thread-side-panel-tab-content-3335e9fb2381.js`(168 KB)、`side-panel/_deps/code-diff-*.js`、`review-file-tree-pane-*.js`、`review-file-tree-side-pane-*.js`、`review-diff-virtualizer-metrics-*.js`、`conversation/_deps/git-action-review-state-*.js`。

> 本节是索引级摘要；来源 / 参数 / 上限 / 渲染 / 写回 / 降级矩阵的完整拆解见 [review-panel.md](review-panel.md)。

### 2.1 入口

- 侧面板 tab 名 `thread.sidePanel.diffTab` = **Review**；`thread.sidePanel.openReviewTab`。
- 命令：`codex.command.openReviewTab`（Open review tab）、`codex.command.toggleReviewPanel`（Toggle Review panel，原生菜单项 `codex.commandMenuTitle.toggleReviewPanel`）。
- 深链：thread 路由参数 `view="review"`、`diffFilter ∈ {branch, last-turn}`、`reviewPath`；另有 `/diff` 路由（`app-shell/README.md` 路由常量表，来自未入库的 `app-initial`）。

### 2.2 变更来源菜单（A）

| 来源                            | 文案 id                                                             | 说明                                                                                       |
| ------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Last Turn                       | `codex.review.source.local.lastTurn(V2)`                            | 只显示最近一个助手 turn 的 diff                                                            |
| Unstaged / Staged / Uncommitted | `codex.review.stageFilter.{unstaged,staged,uncommitted}`            | 工作区三态过滤（空态文案单独给）                                                           |
| Branch / This branch            | `codex.review.source.local.all` / `.thisBranch`                     | 与 base 分支比较，`codex.review.source.local.selectBaseBranch`、`branchRangeSeparator`=`→` |
| Commits（选一条）               | `codex.review.source.local.commits` / `.commit` / `.selectedCommit` | 列出分支上的 commit，带相对时间与 retry                                                    |
| Pull requests（栈）             | `codex.review.pullRequests.*`                                       | 当前分支所属 PR 栈，`{head} → {base}`，draft 标注                                          |
| Cloud changes                   | `codex.review.source.cloud`                                         | 云端任务的变更                                                                             |
| 多仓库                          | `codex.review.source.local.allRepositories` = All repos             | last-turn 跨仓库                                                                           |

被禁用时给指路文案：`codex.review.source.gitBasedReviewDisabled` = "Git-Based Review is disabled. Go to Settings → Git to re-enable it."（对应设置项 `settings.git.reviewMode`）。

### 2.3 头部与文件树

- 显示/隐藏文件栏（`codex.review.header.showFiles/hideFiles`）、`codex.review.header.moreOptions` = Review options、`codex.review.jumpToFile`（文件跳转搜索，空态 `No matching files`）。
- 文件树：`codex.review.fileTree.filters` = Filter changed files、`codex.review.fileTree.filterGeneratedFiles`（隐藏 `linguist-generated`，即靠 `.gitattributes`）、右键 `copyPath` / `openWith` / `openInTarget`、`codex.review.fileTree.renderError`。
- 选项菜单：`codex.review.expandOrCollapseDiffMenu.{expand,collapse}`、`codex.review.switchToSplit` / `switchToUnified`、`codex.review.whitespace.{show,hide}`、`codex.review.wordDiffs.{enable,disable}`、`codex.review.wrap.{enable,disable}`、`codex.review.loadFullFiles.{enable,disable}`、`codex.review.refreshGitQueries` = Refresh。
- 搜索：`codex.review.find.loadMore`；虚拟化：`review-diff-virtualizer-metrics-*.js`。

### 2.4 diff 行内动作（`diff.actionButton.*`）

三级粒度 × Stage/Unstage/Revert：

```
file    : stageFile / unstageFile / revertFile
hunk    : stageHunk / unstageHunk / revertHunk
section : stageSection(Label "Stage all") / unstageSection / revertSection(Label "Revert all")
```

结果语义有三档：`success` / `partialSuccess`（`codex.review.revert.*.partialSuccess` = "Partially reverted …"）/ `error`；非仓库时报 `codex.review.revert.notGitRepo` = "Revert requires a Git repository"。

其他：`codex.review.fileDiff.markAsViewed/markAsUnviewed/markedAsViewed`、`review.fileDiff.mergeConflicts` = "File has merge conflicts"、`codex.review.copyGitApplyCommand`（复制 `git apply` 命令 + toast）、`wham.diff.contextMenu.*`（copy path / relative path / open in GitHub / open with / request changes / toggle wrap / new tab）、`wham.diff.binaryFile`、`codex.review.diff.loading`。

### 2.5 保护与降级（A）

- 大 diff：`codex.review.largeDiff.banner` = "This diff is large, showing one file at a time" + `previousFile` / `nextFile`；`codex.review.diffTooLarge.*`。
- 未跟踪文件过多：`codex.review.untrackedFilesOmitted.title` = "Showing tracked changes only"，`…copyCleanupCommand`（复制一条交互式 git 清理命令）、`…refresh`。
- 文件监听不全：`codex.review.fileWatchLimited.message` = "Some files can't be watched for changes. Refresh to update this view."（对应 worker 的 `watch-repo` / `subscribe-live-query`）。
- 空态：`codex.review.noDiff`("No file changes yet")、`.baseDescription`、`.reverted`("The last turn was reverted.")、`.revertedOrCommitted`、`.orNoLongerAvailable`、`codex.review.emptyState.viewBranchDiff` = View branch diff。

> 该面板与 PR 的 code review 面板**共用** `codex.review.*` 文案（同一组 id 出现在 `pull-request-code-review-c745f0e9b91d.js`），说明两者是同一套 diff 组件。

---

## 3 页面 ②：Git actions（工具栏 + 三个对话框）

chunk：`conversation/thread/local-conversation-git-actions-f27d2904645d.js`(85 KB，工具栏与状态)、`conversation/_deps/git-branch-picker-dropdown-content-16bc93de7d03.js`(115 KB，三个对话框 + 分支下拉)。

### 3.1 工具栏

| 按钮             | 文案                                            | 命令                                                      |
| ---------------- | ----------------------------------------------- | --------------------------------------------------------- |
| Commit or push   | `localConversationPage.commitOrPushButtonLabel` | `codex.command.git.commit` = "Commit or push"             |
| More Git actions | `localConversation.gitActions.moreActions`      | （菜单容器，aria "More Git actions"）                     |
| View PR          | `codex.review.gitActions.viewPullRequest`       | `codex.command.git.openPullRequest` = "Open PR on GitHub" |

进行中状态：`localConversation.gitActions.generatingMessages`（Generating messages…）、`.creatingBranch`、`localConversationPage.pushButtonLabel.loading`（Pushing changes…）、`review.commit.loading.title.createPr/createDraftPr`；可取消：`localConversation.gitActions.cancel` = Cancel git action。

### 3.2 Commit 对话框（`review.commit.*`）

- 标题：`form.commitTitle` = Commit / `form.commitAndPushTitle` = Commit or push。
- 字段：`messageLabel` = Commit message、`autoGeneratePlaceholder` = "Commit message (leave blank to generate)…"（留空则生成，生成失败另有 `generate.emptyResponse` / `generate.failed`）、`selection.includeUnstagedChanges` = Include unstaged changes、`branchTarget.title` = Commit to（可选 `branchTarget.newBranch`）。
- 下一步：`nextSteps.commit` / `nextSteps.commitAndPush` / `nextSteps.push`。
- 禁用原因：`disabled.noChanges`（No changes to commit）、`disabled.loadingDiff`、`disabled.committing`、`disabled.unavailable`。
- 结果：`successToast.namedBranch` = "Committed to {branch}" / `unknownBranch`；`error` = Failed to commit changes；`localConversationPage.commitAndPushToast.*` = "Pushed {branch}"。

### 3.3 Create branch 对话框

`localConversationPage.gitActions.branchNameLabel`（Branch name）、`repositoryBranchSeparator`=`·`、`branchExistsError` = Branch already exists、`review.commit.createBranchError` = Failed to create branch、`review.commit.checkoutBranchError` = Failed to check out branch。

### 3.4 分支选择器（同一个 chunk）

- 搜索：`codex.composer.searchBranches` = Search branches、`searchRepositoryBranches` = "Search {repoName} branches"。
- 选项来源：`use-git-recent-branches-4fc6d636eb07.js`（最近分支）、exact ref 输入（"Action to use an exact Git ref typed into the branch search field"）、`git-create-and-checkout-branch` / `git-checkout-branch`、`git-action-include-unstaged-changes`。
- 作用域：`LocalGitActionsScope`（本地/远端各自一套作用域）。

### 3.5 Create PR / Draft PR / Merge PR

- Create PR 的 12 条禁用/错误文案（`localConversationPage.*`）：无仓库 `createPullRequestNoRepo`、缺 gh `createPullRequestInstallGh`、未登录 `createPullRequestAuthGh`、无 upstream `createPullRequestSetUpstream`、当前是默认分支 `createPullRequestSwitchBranch`、已存在 PR `createPullRequestExistingPullRequest`、provider 加载中/不可用 `createPullRequestSourceLoading/SourceUnavailable`、push 状态未知 `createPullRequestPushStatusMissing`、分支信息缺失 `createPullRequestBranchMissing`、默认分支缺失 `createPullRequestDefaultBranchMissing`、失败 `createPullRequestError`；成功 `createPullRequestSuccessToast.*` = "Created {prLabel} for {branch}"。
- 草稿与否由设置 `settings.git.createDraftPullRequest` 决定（"Use draft pull requests by default when creating PRs from ChatGPT"）。
- 合并：`pullRequestDetail.merge.*`（Merge pull request / Merge method / Merge commit / Squash / `confirmSquash`="Squash and merge" / `subtitle`="GitHub will merge only if the displayed head commit still matches."）+ 9 条禁用原因（`pullRequestDetail.actions.merge.disabled.*`：draft / conflicts / failingChecks / pendingChecks / closed / blocked / pending / unknown）+ 仓库限制回退 `repoRestrictionError`="Merge commits are disabled in this repository; try again with squash"。
- 生成 PR 文案：`localConversationPage.generatePullRequestMessageError`、`review.commitPullRequest.generate.*`。

### 3.6 反向观察：Codex 自己的 git 操作

工具栏之外，会话里还会提示 **Codex（模型）**自己执行的 git 动作：`localConversation.worktreeBranchSetup.{checkoutErrorTitle,createBranchErrorTitle,errorTitle}`（"Failed to check out branch" / "Failed to set branch" / "Something went wrong"，都是 terminal toast），字面量 `codex_git_commit`、`worker-git-turn-complete`、`git-action-review-state-*.js`。即：turn 结束后会用 git 状态回填 Review 的可用性。

---

## 4 页面 ③：composer 底栏的分支与环境

chunk：`conversation/_deps/environment-labels-655533fc7a67.js`、`composer/_deps/worktree-environment-dropdown-ea1f88351d40.js`、`composer/_deps/local-remote-dropdown-3788d6591891.js`、`composer/_deps/use-create-git-repository-c0b61d3a555e.js`。

### 4.1 分支切换器（`composer.footer.branchSwitch.*`）

| 元素         | 文案                                                                                                                                                                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 控件 tooltip | `tooltip` = Switch branch                                                                                                                                                                                                                                                                                                 |
| 状态         | `loading` = Loading branch…、`detachedHead` = Detached HEAD、`uncommittedSummaryPrefix` = "Uncommitted: {n} files"                                                                                                                                                                                                        |
| 新建并切换   | `createAndCheckout` = "Create and checkout new branch…"、`createDialog.*`（title "Create and checkout branch"、placeholder `new-branch`、校验 `branchExistsError` / `trailingSlashError`="Branch name cannot end with "/"."）、`createAndCheckout.disabledTooltip` = "Commit changes to create and checkout a new branch" |
| 未提交阻塞   | `uncommittedDialog.title` = "Commit changes to switch branch"、`body.withDiff.namedBranch` = "Commit <diffStats> changes in {n} files to check out {branchName}."、`conflict.bodyPrefix` = "Your changes to the following files would be overwritten by checkout:"、主按钮 `commit` = "Commit and switch branch…"         |
| 失败         | `checkoutError` = "Failed to switch branch: {message}"、`createBranchError`                                                                                                                                                                                                                                               |

### 4.2 运行位置：Local / Worktree / Cloud

- `composer.mode.local`（Work locally，tooltip "Work on {branchName}"）、`composer.mode.worktreeSegment`（**New local worktree**，tooltip "Create a copy of {repoName} to work in parallel."，多根项目补 "… Other project source folders will be accessed directly."）、`composer.mode.runInCloud`（Cloud · {repoName}）；PR 会话禁用云：`Cloud is unavailable for pull request chats`。
- 远端 worktree：`This local worktree` / `This remote worktree` / `New remote worktree`；移动到本地的前置检查：tooltip "…move to local button is disabled because the local git status check failed / while git status is loading"。
- 子模块警告：`composer.worktreeEnvironment.*` = "This repo has git submodules. Worktree creation may fail"（数据来自 `use-git-submodule-paths-2adf56e7dea1.js` → worker `submodule-paths`）。
- 快捷键：`toggleWorktreeMode` = Toggle Local/Worktree。

### 4.3 不是 git 仓库时

`codex.review.noDiff.gitRepoRequired.title` = "Create a Git repository" / `.description` = "Track, review, and undo changes in this project."，按钮 `codex.review.noDiff.gitInit.createRepository` = "Create git repository"（进行中 `gitInit.creating`，结果 toast `codex.review.noDiff.gitInit.success` = "Git repository created"，失败 `gitInit.error` = "Git init failed: {message}"；实现 `use-create-git-repository-*.js` → worker `git-init-repo`）。
Popout 窗口首页另有 "Initialize a git repo to run tasks in worktrees" / "…to start in cloud or worktree mode"，且 start-in 控件在非 git 仓库时禁用。

---

## 5 页面 ④：Worktree 生命周期

| 环节         | chunk / 文案                                                                                                                                                                                                        | 说明                                                                                                                                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 创建入口     | `composer` 环境选择器；`use-codex-worktrees-4816d4e23919.js`                                                                                                                                                        | 新任务/新会话落到独立 worktree                                                                                                                                                                                        |
| 制备进度     | `conversation/_deps/worktree-setup-auto-fix-47aace51921d.js`(25 KB)                                                                                                                                                 | "Actual worktree fetch or checkout progress percentage reported by Git"、"Worktree progress step for checking repository files out with Git"、"Disclosure for showing/hiding the detailed Git and environment output" |
| 制备失败自愈 | 同上                                                                                                                                                                                                                | 失败自动修复（`worktree_setup_auto_fix` 埋点）                                                                                                                                                                        |
| tab 占位     | `appShell.tabPanel.worktreeProvisioning`                                                                                                                                                                            | 制备期间 tab 的占位文案                                                                                                                                                                                               |
| 生命周期 RPC | worker：`create-worktree`、`restore-worktree`、`delete-worktree`、`worktree-snapshot-ref`、`managed-worktree-state`、`cancel-worktree-upstream-refresh`、`set-worktree-owner-thread`、`resolve-worktree-for-thread` | `[worktree-delete] git-remove-result`、`worktree_restore_banner`、`worktree_delete`                                                                                                                                   |
| 固化         | 项目行菜单 `Create permanent worktree`                                                                                                                                                                              | 把临时 worktree 变成项目                                                                                                                                                                                              |
| 分组标识     | 项目行 tooltip `This is a git worktree`                                                                                                                                                                             | left-nav                                                                                                                                                                                                              |
| 磁盘位置     | `%USERPROFILE%\.codex\worktrees\`                                                                                                                                                                                   | `architecture.md` §数据目录                                                                                                                                                                                           |
| 首次引导     | `worktree-onboarding-banner-controller`、`worktree-onboarding-state`                                                                                                                                                | "A Git worktree gives your task its own workspace"、"Action to select a new Git worktree for the current draft"                                                                                                       |
| fork 目的地  | `localConversation.forkFromOlderTurnDialog.*`、thread 行菜单 `fork-into-worktree` / `new-chat-in-worktree`、`composer.forkSlashCommand.option.*`                                                                    | 三种目的地：当前工作区 / 同一 worktree / 新 worktree                                                                                                                                                                  |

---

## 6 页面 ⑤：PR 侧面板与 Pull requests 页

chunk：`side-panel/tabs/thread-pull-request-tab-content-e83709e82efb.js`、`open-thread-pull-request-{side-panel-tab,code-tab}-*.js`、`side-panel/_deps/pull-request-{detail-query,detail-model,comment,readonly-comment,code-review,code-review-navigation,checks-summary,revision-tab,revision-queries,actions,error-description,fix-workflow}-*.js`（**37 个** git 相关 chunk 全在 `side-panel/`）。

| 区域                  | 能力                                                                                                                                                                                                                                     | 证据                                                         |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| tab 结构              | `pullRequestDetail.tabs` = Pull request view，子 tab `tab.summary` = Summary / `tab.code` = Code                                                                                                                                         | `pull-request-detail-query-*.js`                             |
| Summary：overview     | branch / status / checks / comments / reviewers / auto-merge（`pullRequestOverview.*`）                                                                                                                                                  | 同上                                                         |
| Summary：description  | 编辑、`generate` = "Generate with Codex"、`stopGenerating`、6 条生成错误（空/失败/PR 已变/无法校验/宿主不支持）                                                                                                                          | 同上                                                         |
| Summary：timeline     | Activity / Comments（空态、加载态）；`tabThumbnail.pullRequest.*`（合并/草稿/待审等缩略图状态）                                                                                                                                          | 同上                                                         |
| Summary：merge        | 见 §3.5                                                                                                                                                                                                                                  | `pull-request-fix-workflow-*.js`                             |
| Code：review          | 文件树、行内评论（Reply / Resolve / Unresolve / Edit / Delete / Quote reply）、`Request changes`、`Hide/Show file tree`、`Open comment in review`、`Open {file} in Code`                                                                 | `pull-request-code-review-*.js`、`pull-request-comment-*.js` |
| 检查/评论/冲突 → chat | `localConversation.pullRequest.actions.checks.fix` / `comments.address` = "Add to chat"、`Fix all` / `Remove all`、`Merge conflicts` + Fix；附件形态 `pullRequestChecksAttachments.*`（`{n} failing check(s)`、`{checkName} +{n} more`） | `pull-request-detail-query-*.js`                             |
| Fix 禁用原因          | 8 条：无活跃会话 / 分支不匹配 / PR 已关闭 / 缺分支信息 / 缺 PR 信息 / 自动化不可用 / 非本地项目 / 关单                                                                                                                                   | 同上                                                         |
| GitLab                | `gitlabMergeRequest.rowLabel` = `MR !{number}`、`findGitLabMergeRequest` = Find merge request、`gitlabMergeRequest.open`                                                                                                                 | `local-conversation-thread-*.js`                             |
| 打开/复制             | `Open pull request on GitHub`、`Copy link`、`pullRequestDetail.openInBrowser`、`Open in GitHub`（文件/行）                                                                                                                               | 多个 chunk                                                   |
| GitHub 用户检索       | `Search by name or GitHub username`、`No users found`、`Searching…`、`Searching GitHub users…`、`Mention @{login}`                                                                                                                       | `pull-request-comment-*.js`                                  |

**独立页面**：左栏导航有 `sidebarElectron.pullRequestsRouteNavLink` = **Pull requests** → 路由 `/pull-requests`（`app-shell/README.md` 路由表）；对应文案组 `pullRequestsPage.detail.*`(46)、`pullRequestsPage.codeReview.*`(3)（列表/详情、评论回复、展开折叠、行号定位 `Line {side}{line}`、auto-merge 开关、merge / merging、comment composer 与 @提及）。**页面实现 chunk 未入库**（在未抽取的 `app-initial` 10 MB / `app-primary` 7.8 MB 内），结构只能从文案推断（**C**）。

**会话内的 PR 行**（`codex.localConversation.gitSummary.*`，出现在任务头部）：`pullRequestWithState` = "PR {number}"、`pullRequestMergedRelativeTime`、`checkingPullRequest`、`pullRequestUnavailable`、`createPullRequest`、`compareBranch` = Compare branch、`existingPullRequest` + `attachExistingPullRequest` = Attach、`addPullRequestToChat` = Add to chat、`openPullRequestOnGitHub`、`prSummary` = View PR / `prStatus` / `prCodeChanges`、**Repair 菜单**（`repair` = Repair，子项 `repairChecks` / `repairComments` / `repairMergeConflicts` / `repairEverything`）、`undoPullRequestAssociation` = Undo。
配套触发订阅：`codex.triggers.pullRequestUpdates` = "Pull request updates"。

**git blame**：命令 `codex.command.git.toggleBlame` = Toggle Git blame（enable/disable 两条变体），落点在文件预览的 gutter：`review-file-source-item-*.js` 的 "Show git blame" / "Hide git blame"、tooltip 四行（author / commit / date / **pull request**）→ 数据来自 worker `blame-file`（`git blame --porcelain`，并从 `users.noreply.github.com` 邮箱反解 GitHub 用户名）。

---

## 7 页面 ⑥：设置页

### 7.1 Git（slug `git-settings`，chunk `settings/pages/git-settings-19e05f7b3976.js`，39 KB）

| 设置项                      | i18n                                | 说明（from `description`）                                                                                  |
| --------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Branch prefix               | `settings.git.branchPrefix.*`       | 新建分支前缀，placeholder `codex/`                                                                          |
| Commit instructions         | `commitInstructions.*`              | 拼进 commit message 生成提示词                                                                              |
| Pull request instructions   | `prInstructions.*`                  | 拼进 PR 标题/正文生成提示词                                                                                 |
| Create draft pull requests  | `createDraftPullRequest.*`          | 默认建草稿 PR                                                                                               |
| Always force push           | `forcePush.*`                       | push 时用 `--force-with-lease`                                                                              |
| Pull request merge method   | `pullRequestMergeMethod.*`          | Merge / Squash 二选一                                                                                       |
| Worktree root               | `worktreeRoot.*`                    | 托管 worktree 的根目录，留空用默认位置                                                                      |
| Disable Git-Based Review    | `reviewMode.*`                      | 关掉后 Review 只剩 Last Turn，避免 git 操作                                                                 |
| Watch and fix pull requests | `pullRequestWatch.*`                | 见 §8；含 `autoMerge`（Auto-merge when ready）与 `instructions`                                             |
| Review delivery             | `settings.general.reviewDelivery.*` | Inline / Detached：`/review` 在当前会话跑还是开独立 review 会话（id 属 general 命名空间，但渲染在该页模块） |

保存语义：三个文本框自动保存（`instructions.autoSave.{save,saved,error}`，`CmdOrCtrl+S`），开关各带 enabled/disabled/error 三条 toast；持久化走 app-server `config/value/write` → `~/.codex/config.toml`（`settings-pages.md` §6）。
页内埋点/内部名：`git-instructions-${key}`、`pull-request-watch-preferences`、`list-automations`。

### 7.2 Worktrees（slug `worktrees`，chunk `settings/pages/worktrees-settings-page-8aff7d1210a1.js`，45 KB）

- Automatically delete old worktrees（`autoCleanup.*`，关闭有二次确认对话框 "Disable automatic worktree deletion?"，正文强调"旧 worktree 会占磁盘"）+ Auto-delete limit（`keepCount.*`，"ChatGPT snapshots worktrees before deleting, so pruned worktrees should always be restorable"）。
- Always fetch upstream before creating worktrees（`upstreamRefresh.*`）。
- 列表：每行显示 Worktree / 仓库元数据（`repository.loading` / `repository.unknown`）、分支、关联会话（`row.conversations*`）、`row.delete`（Delete）、`row.newChat` = New chat in this worktree（"Starts a fresh chat using the same files and branch"）；空态 `empty.title` = No worktrees yet；`refresh`、加载/错误态。
- 埋点：`worktrees_settings_page`、`worktree_delete`、`settings-delete-targeted`。

### 7.3 Code review（slug `code-review`，chunk `settings/pages/code-review-settings-f64eacc74392.js`）

- Personal preferences：`autoReview`（Automatic review）、`exhaustive`（Exhaustive code review："Keep looking for findings until ChatGPT stops finding new issues"）、`credits`（Use credits for reviews）、`trigger`（Review trigger：On PR open / On every push / Smart trigger）。
- Personal security review preferences：`security.autoReview`、`security.autoSeverity` / `manualSeverity`（最低上报严重级 critical/high/medium/low）、`security.trigger.option`（`pr_open` / `every_push` / `smart_detect` / `code_review`，其中 smart_detect 标注 Experimental）。manualSeverity 的描述点明触发方式是 **`@codex` 评论**。
- **注意**：`settings-pages.md` 记录当前 build 里 `code-review` 与 `security` 两节的 `visible` 硬编码为 `false` —— **已实现未放开**。

### 7.4 其他相关设置

- General：集成终端 shell 可选 `powershell / commandPrompt / gitBash / wsl`（`ns=[...]`，`general-settings-9d83727e851d.js`）。
- Security 页：扫描要求 "a checked-out Git repository root with at least one commit"；无 git 历史时 commit 字段显示专用文案。
- Cloud 设置：仓库授权走 GitHub 连接（`/wham/github/installations/v2`、`/wham/github/list-repositories`、`/wham/github/repositories/search*`）。
- 插件市场：Git 来源市场（`git-marketplace`、`plugins.card.gitMarketplacePlugin*`、"From the {marketplaceName} Git marketplace"、`openai/plugins or git@github.com:org/repo.git`）——属于插件线，不是本文范围，但与 git 共享"来源类型"概念。

---

## 8 自动化：Watch and fix PR（heartbeat）

`settings/_deps/pull-request-fix-automation-d39ed4e2b4ea.js` + `side-panel/tabs/open-pull-request-fix-automation-panel-*.js`。

- 开关即 §7.1 的 `settings.git.pullRequestWatch`；开启后为被 watch 的 PR 创建/更新一条 **heartbeat 自动化**（`automation-create` / `automation-update` / `list-automations`）。
- 自动化命名与提示词（A，字面量）：`Auto-fix PR #${number}`；首轮 `Begin automatically fixing PR #${number}.`；后续 `This is a heartbeat turn. Continue automatically fixing this pull request.`；上下文块含 `Pull request: #${number}`、`Pull request URL:`、`Branch: ${head} -> ${base}`、`Repository: ${repo}`。
- 约束条款：`Re-check live GitHub state instead of trusting prior turns.`、`Inspect the latest PR state with \`gh\`, including mergeability and all current checks.`、`If the failure can be diagnosed from GitHub, fix it directly.`、`Work only in the Git repository at \`${cwd}\`. Run local Git commands from that directory.`、`Use GitHub CLI to inspect the pull request before choosing a checkout.`、`Do not create or suggest another automation.`、`Custom user instructions (these override conflicting defaults):`。
- 状态机文案：`ACTIVE` / `PAUSED` / `DELETED` / `failed` / `not-ready` / `refused`；失败分支 `Task setup is not ready: ${reason}`、`The retained task is not a supported automatic-fix fork`、`Automatic fix heartbeat could not be created/updated`。
- 侧面板上的入口：`pullRequestSidePanel.autoFix.*`（Automatic fix started / paused / viewProgress、"Automatic fix will retry on schedule"、"…paused until task setup succeeds"）与 `Automations` 页的 `codex.triggers.pullRequestUpdates`。

---

## 9 命令面板与快捷键（A）

命令注册表在 `main-process/build/src-B6LqG3ek.js`，字段形如：

```js
{ id: `git.commit`, titleIntlId: `codex.command.git.commit`,
  descriptionIntlId: `codex.commandDescription.git.commit`,
  requiredAccess: `codexLocal`, shortcutScope: `app`,
  commandMenuGroupKey: `workspace`, commandMenu: !0, commandMenuFeature: `codex` }
```

| 命令 id                                        | 标题                                | 说明                                                       |
| ---------------------------------------------- | ----------------------------------- | ---------------------------------------------------------- |
| `git.commit`                                   | Commit or push                      | Open commit or push options                                |
| `git.createBranch`                             | Create branch                       | Open branch creation options                               |
| `git.createPullRequest`                        | Create PR                           | Open pull request creation options                         |
| `git.createDraftPullRequest`                   | Create draft PR                     | Open draft pull request creation options                   |
| `git.mergePullRequest`                         | Merge PR                            | Open pull request merge options                            |
| `git.openPullRequest`                          | Open PR on GitHub                   | Open the pull request linked to the current chat           |
| `git.toggleBlame`（+.enable/.disable）         | Toggle / Enable / Disable Git blame | 显示或隐藏当前编辑行的作者与 commit                        |
| `gitReview.full`                               | Enable Git-Based Review             | Restore Git-Based Review sources                           |
| `gitReview.lastTurnOnly`                       | Disable Git-Based Review            | Only show Last Turn in the Review panel                    |
| `openReviewTab`                                | Open review tab                     | —                                                          |
| `toggleReviewPanel`                            | Toggle Review panel                 | Show or hide Review for the current chat（另有原生菜单项） |
| （composer 层）`toggleWorktreeMode`            | Toggle Local/Worktree               | —                                                          |
| （composer 层）`autoReviewDenialsSlashCommand` | Approve                             | 批准一次 auto-review 拒绝并重试一次                        |

`requiredAccess: codexLocal` 说明这一族命令只在**本地执行**能力下有权限（与 `settings-pages.md` 的 `git-settings` 门控一致）。

---

## 10 与本仓库（Syntropy desktop_app）的对照

| 能力            | Codex app                                                                       | 本仓库（B）                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Review tab      | 真 git diff（Last Turn / Unstaged / Staged / Branch / Commits / PR 栈 / Cloud） | 读 **Master 的 revision 清单**（`ProjectRevision.ManifestJson`），未提交到 Master 的改动看不到；无 PR/GitHub 数据源，PR tab 不做（`side-panel.md` §6） |
| Review 对比区间 | 永远是"某已提交版本 vs 它的父"，可用 base 逐版回退                              | 默认 head vs 父，`baseParentRevisionId` 逐版回退，语义对齐                                                                                             |
| 变更条数上限    | 大 diff 单文件模式 + `diffTooLarge`                                             | 默认 500、最大 5000，超出明说"只列出前 500 个文件"                                                                                                     |
| Worktree        | 完整生命周期（创建/制备进度/自愈/快照恢复/自动清理/设置页/fork 目的地）         | Agent 工作区由节点侧 `spec.workspace` 决定，无 git worktree 概念；fork 只有"继承源会话部署"一种（`thread-row-menu.md` §5.1）                           |
| PR / GitHub     | 侧面板 + `/pull-requests` 页 + gh CLI + 自动修复自动化                          | 无数据源                                                                                                                                               |
| Git 设置页      | 11 组设置（前缀/指令/force push/merge method/worktree root/…）                  | 未落地                                                                                                                                                 |

结论：本仓库在 Git 侧目前是"**用 revision 模拟 Review，用部署模拟 worktree**"，与 Codex 的 git 原生实现是两条不同的实现路径。

---

## 11 明确未覆盖 / 存疑（C）

1. `/pull-requests` 独立页面的组件实现未抽取（在 `app-initial` / `app-primary` 里），其布局、列表分页、筛选只能从 46 条 `pullRequestsPage.detail.*` 文案反推。
2. gh CLI 的具体子命令与参数除 `--repo` 外未逐条确认（`gh-pr-*` 只是应用内的操作名）。
3. GitHub REST（`Accept: application/vnd.github.*`）与 gh CLI 的分工边界未定：既可能是 gh 之外的直连，也可能是 gh 的内部实现痕迹。
4. "Review delivery = Detached" 时独立 review 会话的具体形态（是否复用 PR 会话机制）未验证。
5. `git_direct_call` 埋点暗示存在绕过 worker 的直调路径，未定位到具体调用点。
6. 本文只覆盖 26.903 快照；26.908 只重抽了插件模块，git 家族是否变化未知。

---

## 12 复现方式

```powershell
cd codex_app_rev
node code/tools/ctx.mjs "codex.command.git.commit" code/main-process/build/src-B6LqG3ek.js --after 900   # 命令注册表
node code/tools/ctx.mjs "case\`search-branches\`" code/main-process/build/worker.js --before 800        # worker 方法表
node code/tools/lightformat.mjs ...                                                                    # 大 chunk 阅读
```

本文件的两张中间产物（本次工作用，随 `.work/` 一起属临时目录）：`.work/git-harvest.md`（git 命名空间 i18n + 各模块含 git 的字面量）、`.work/litgit-<module>.md`（按模块去重后的 git 字面量 + 首次出现文件）。
