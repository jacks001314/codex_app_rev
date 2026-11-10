# Writing blocks / Pages 编辑器

> 版本：`26.1013.4894.0`。代码：`code/app-261013/writing/`（27 chunks）；
> 文案：`codex.writingBlock.*`（151 条）、`chatgptConversations.writingBlock.*`。
> 静态分析，未做运行时插桩。

## 1. 一句话结论

Writing block 是对话里的**可编辑文档块**：既能像聊天消息一样内联显示，又能展开成
完整编辑器，支持格式化、AI 选区改写、版本历史、保存为 Page / Library 文档、导出
Markdown / PDF / Word，以及邮件块和演示大纲。

它不是简单的 contenteditable：文案里同时出现
“shared Codex Apps writing block used by local Codex threads and Quick Chat”，
说明同一套 block 组件被本地会话与 Quick Chat 复用。

## 2. Block 类型

### 2.1 文档 / 消息

| 类型 | 证据 |
| --- | --- |
| 普通文档 | `codex.writingBlock.documentTabTitle = "Document"` |
| 消息块 | `codex.writingBlock.messageTabTitle = "Message"` |
| 文库文档 | `codex.writingBlock.library.document = "Document"` |
| 邮件 | `codex.writingBlock.email.header.title.fallback = "Email"` |
| 演示大纲 | `codex.writingBlock.slides.header.title.fallback = "Presentation outline"` |

### 2.2 块级格式

斜杠菜单与浮动工具栏确认的块类型：

```text
文本 / Heading 1 / Heading 2 / Heading 3
无序列表 / 有序列表 / Checklist
表格 / 分隔线 / Emoji / Generate text
```

证据：`codex.writingBlock.slashMenu.option.*`、`codex.writingBlock.format.textStyle.*`。

行内格式：加粗、斜体、行内代码、链接（添加 / 编辑 / 复制 / 打开 / 移除）。

## 3. 编辑与 AI

### 3.1 选区 AI 改写

| 操作 | 文案 |
| --- | --- |
| 选中后请求修改 | `format.askForChanges` / `format.askForSelectionEdit` |
| 输入指令 | `format.editPlaceholder = "Describe the edit…"` |
| 提交 | `format.submitEdit = "Submit edit instruction"` |
| 取消 | `format.cancelEdit = "Cancel"` |

选区内容会先被保存；如果选区在请求前变化，会报
`selectionEdit.prepareError = "This selection changed or could not be saved..."`，
用户的指令保留在 composer 里，可重新选择后重试。

### 3.2 版本与未保存修改

| 能力 | 文案 |
| --- | --- |
| 版本历史 | `history.versionHistory` |
| 预览 | `history.previewLabel = "Version {version} preview"` |
| 恢复冲突 | `history.restoreError`（“The document changed. Review the latest version...”） |
| 版本不存在 | `history.versionUnavailable` |
| 关闭未保存 AI 编辑 | `confirmClosePendingEdits` / `confirmCloseTitle` |

实现上不是把整个文档塞进消息，而是通过 Library / Page 的文档会话保存版本；
文案里的 “restore” 与 “conflict” 说明恢复操作有乐观并发检查。

## 4. 保存目标

Writing block 有三条保存链：

| 目标 | 入口 | 证据 |
| --- | --- | --- |
| 当前对话内升级为 Page | `page.save = "Save"` | `page.saved = "Saved as a Page"` |
| 保存到 Library | `inlineLibrary.save = "Add to Library"` | `saved = "Saved to your Library"` |
| 保存到 Space | `inlineLibrary.save.space = "Add to Space"` | `saved.space = "Saved to your Space"` |

对应失败分支：

- `saveFailed` / `saveFailed.space`：原文保留在对话里，可重试；
- `storageFull`：云文件存储已满；
- `library.notePromotionError`：生成的 note 尚未链接到 Library/Space 文档；
- `library.syncError`：Library 文档加载 / 保存失败，本地改动保留。

## 5. 邮件块

邮件块不是 `mailto:` 拼字符串，而是有完整的收件人与发送状态：

| 字段 | key |
| --- | --- |
| To / Cc / Bcc | `email.recipient.field.*` |
| Subject | `email.subject.field.label` |
| 发送 | `email.sendEmail` |
| 撤销发送 | `email.undoEmailSend` |
| 发送中 | `emailSending` |
| 已发送 | `emailSent` |

从 `writing-block-app-capabilities-5b5293feb60d.js` 可确认的 API：

```text
POST /aip/connectors/email/send_email
POST /aip/connectors/email/unsend_email
POST /aip/connectors/email/send_email_status
```

连接器 scope 至少包括 Gmail `gmail.modify` 与 Outlook `mail.send`
（`mi = { gmail: "https://www.googleapis.com/auth/gmail.modify", outlook: "mail.send" }`）。

“Open in email” 还支持 Gmail / Outlook / 系统默认邮件应用，把草稿字段预填过去。

## 6. 演示大纲

Writing block 可以作为演示大纲：

| 能力 | 文案 |
| --- | --- |
| 幻灯片数 | `slides.slideCount.button = "{count} slides"` |
| 调整 | `slides.slideCount.slider` / `confirm` |
| 模板 | `slides.templates.title = "Pick a template"` |
| 生成 | `slides.create.button = "Create presentation"` |
| 格式 | `powerPointOption` / `googleSlidesOption` |

生成时会向当前 Codex 任务发送一条带 `turnTrigger: "slides_outline"` 的用户消息，
内容形如：

```text
make a presentation with the outline above
make a Google Slides presentation with the outline above using {template}
```

幻灯片数不是直接改文本，而是通过 “Magic Edit” 触发一次 AI 重写
（`slideCount.confirm` 的 description 明确写 “using Magic Edit”）。

## 7. 导出

文档块可以导出三种格式：

| 格式 | 菜单项 |
| --- | --- |
| Markdown | `download.markdown = "Markdown document"` |
| PDF | `download.pdf = "PDF document"` |
| Word | `download.word = "Microsoft Word"` |

导出 API：

```text
POST /export_doc/writing_block/file
body: { conversation_id, export_type, index, message_id }
```

## 8. Write Like Me

Writing block 的顶部有语气变体：

| Tab / 操作 | 文案 |
| --- | --- |
| 原文 | `toneVariants.original = "Original"` |
| 改写 | `toneVariants.writeLikeMe = "Write Like Me"` |
| 可访问标签 | `toneVariants.tabs.ariaLabel = "Writing style variants"` |

`Write Like Me` 使用用户保存的写作风格重写当前草稿。风格本身由
`tpp.write_like_me.*` / `writingStyle.setup.*` 配置，可以连接 email / messaging /
documents 类应用作为样本来源。

## 9. 与 Pages / Library 的关系

```
对话里的 writing block
  ├─ 内联编辑（不离开会话）
  ├─ 升级为 Page（page.save）
  ├─ 保存到 Library（inlineLibrary.save）
  └─ 保存到 Space（inlineLibrary.save.space）
```

这解释了为什么 Writing block 同时依赖：

- `code/app-261013/writing/` 的编辑器；
- `code/app-261013/spaces/` 的 Page 文档会话；
- `code/app-261013/left-nav/library/` 的 Library 文件 API；
- `code/app-261013/chatgpt-surfaces/` 的 Quick Chat 与 ChatGPT Apps 壳。

## 10. 证据等级与局限

| 结论 | 等级 | 依据 |
| --- | --- | --- |
| 块类型与斜杠菜单 | A | `codex.writingBlock.slashMenu.*` |
| AI 选区改写 | A | `format.askForSelectionEdit` 等 |
| 三条保存链 | A | `page.save` / `inlineLibrary.save*` |
| 邮件发送 API | A | `/aip/connectors/email/*` |
| 导出 API | A | `/export_doc/writing_block/file` |
| 演示模板与 Magic Edit | A（文案）/ C（具体重写实现） | `slides.*` |
| Write Like Me 的样本选择 | A（文案）/ C（真实数据流） | `tpp.write_like_me.*` |

未确认：富文本内部 schema（是否 ProseMirror）、协同编辑协议、导出 PDF/Word 的
服务端渲染实现、邮件连接器的实际 OAuth 流程。
