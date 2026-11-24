# composer

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 11 个文件 / raw 1.7 MB / formatted 3.2 MB，模块级文案 1137 条（248 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `839700.c1fe868f96.js` | 737005 | 513 | mandatory |
| `355340.de1f371a7a.js` | 344770 | 154 | namespace-score |
| `122854.9cf45fbb6f.js` | 192525 | 148 | mandatory |
| `377960.1fb21cd25d.js` | 121560 | 46 | namespace-score |
| `923712.d5a3af247d.js` | 106944 | 54 | namespace-score |
| `81745.30f8598cb7.js` | 67537 | 51 | namespace-score |
| `847740.7dba15b337.js` | 56926 | 40 | namespace-score |
| `210038.7eead78b28.js` | 52808 | 55 | namespace-score |
| `517070.d1f301a808.js` | 38024 | 44 | namespace-score |
| `309399.a696fd70cf.js` | 32633 | 39 | namespace-score |
| `411750.69776b4e9c.js` | 28770 | 39 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `settings.agent` | 62 |
| `composer.mode` | 49 |
| `composer.walletRequest` | 49 |
| `composer.newTask` | 42 |
| `avatarOverlay.waitingRequest` | 38 |
| `composer.atMentionList` | 33 |
| `composer.submit` | 30 |
| `composer.threadGoal` | 30 |

## 开发者描述（节选）

- `codeReview.context.gitLabRepairAccountChanged` — The selected GitLab account is unavailable or has changed. Reopen the merge request in Code Review and attach the repair again
  - Submission error when the selected GitLab connection for a repair attachment is unavailable or has changed.
- `codeReview.context.invalidRepairReview` — The repair attachment does not identify a pull or merge request for this account. Reattach it from Code Review
  - Submission error when a repair attachment has missing or mismatched pull or merge request identity.
- `codeReview.context.missingCheckRevision` — Reload the review and attach the failed checks again
  - Submission error when connected tools cannot identify the revision of the attached failed checks.
- `composer.executorSkill.selectionChanged` — The selected skill is no longer available on this computer. Remove it or choose it again.
  - Error when a cloud skill mention no longer belongs to the selected computer and settings
- `composer.fileAttachment.remoteFolderUnsupported` — Folders can only be attached to local conversations
  - Toast shown when a local folder cannot be attached to a conversation running on a remote host
- `composer.fileAttachment.uploadError` — Unable to upload file
  - Toast shown when copying a local file to a remote host fails

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
