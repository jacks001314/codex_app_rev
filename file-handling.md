# 文件处理：Codex App 的逐类型行为与本仓库对齐方案

针对「xls / docx / pdf / 图片 / 视频 / 音频 等常见文件到底怎么处理」的专项逆向。
基线同 [README.md](README.md)：`OpenAI.Codex 26.903.9818.0`（app `26.903.71938`，build `8576`），采集 2026-09-11。

**证据边界**：只读安装包与已抽取产物；不读用户文件内容、不读凭据与数据库。
文中 A = 安装包直接证据（chunk 路径 / 字面量 / i18n description），B = 本仓库源码，C = 结构推断。

---

## 0. 结论速览

Codex **不按扩展名猜类型**，而是一条四段流水线：

```
① 内容嗅探(contentKind)  →  ② 归类(卡片/资源)  →  ③ 选预览器(白名单+阈值)  →  ④ 动作(打开/另存/定位)
   4 KiB 采样 + 魔数          产物 → 会话卡片            产物链路 / 工作区链路          Open in {target}
   (src-B6LqG3ek.js)         (app-initial)             (两套不同规则)                Show in folder
```

三条最关键的结论：

1. **同一个文件，在「会话产物」和「工作区文件」两条链路上待遇完全不同。**
   - **产物链路**（agent 本轮生成/改动的文件 → 会话卡片 → Artifact 侧边 tab）：`csv/tsv/xlsx/docx/pptx/ipynb/pdf/tex` 有**富预览**（OpenXML WASM 的 Popcorn 面板、pdf.js、notebook 面板），还能标注、编辑并写回文件。
   - **工作区链路**（Files 面板里点开任意文件）：只支持**文本/代码、Markdown、HTML、图片、PDF、音频、视频**；Office 一律给「暂不支持预览 + 请用其他应用打开」。
2. **能不能预览，取决于「嗅探到的内容」而不是后缀**：`contentKind` 由 4 KiB 采样的魔数决定（`image/audio/video/pdf/text/archive/binary`）。图片/音视频还要求**后缀在白名单里**（如视频只认 `mp4/ogv/webm`），否则退化成「不支持」文案。
3. **一切都有硬阈值**：采样 4 KiB、可嗅探文件 ≤ 10 MiB、侧边预览 ≤ 40 MiB、就地编辑 ≤ 10 MiB、缩略图 ≤ 40 MiB。超限不是报错而是**降级**（去系统文件管理器 / 只能下载 / 只能只读）。

---

## 1. 第①段：内容嗅探（A）

实现：`code/main-process/build/src-B6LqG3ek.js`（分类器）+ `code/main-process/build/core-CShdJPiO.js`（内嵌 `file-type`，约 100 种格式的魔数表）。

```
classify(sampleBytes):
  空样本 → null
  文本头 trim 后以 `<svg` 开头，或以 `<?xml` 开头且含 `<svg` → { kind: 'image', mimeType: 'image/svg+xml' }
  否则 fileTypeFromBuffer(sample) → 按 mime/ext 归类
      application/pdf            → pdf
      image/*                    → image
      audio/*                    → audio
      video/*                    → video
      text/* 或 text 类 mime 集合 → text
      ext 属于归档集合 Zkt       → archive
      其它                       → binary
```

- 归档/容器集合 `Zkt` 里**同时包含 Office（OOXML）**：`7z,Z,apk,bz2,docm,docx,epub,gz,jar,odp,ods,odt,potm,potx,ppsm,ppsx,pptm,pptx,rar,tar,tar.gz,xlsm,xlsx,xpi,xz,zip,zst`。
  也就是说 `.docx/.pptx/.xlsx` 嗅探出来是 `archive`（它们是 zip），**Office 的识别靠后缀映射，不靠嗅探**。
- 采样参数（A，`app-initial` 常量）：`contentSampleByteLimit = 4096`，`contentSampleMaxFileBytes = 10 MiB`。
  主进程实现见 `code/main-process/build/main-CMBCj4XL.js` 的 `read-file-metadata`：仅当 `sizeBytes <= 10 MiB` 时读 4 KiB 采样并 `contentKind`，否则不嗅探（返回的 metadata 里没有 `contentKind`）。
- 兜底：样本不是合法 UTF-8 或含控制字符（`< 32` 且不在 7‥14）→ `binary`。

> 对对齐最重要的一点：**嗅探结果是「可选输入」**。工作区链路里 `contentKind == null`（小样本取不到 / 文件 > 10 MiB / 该 host 不支持）时，规则会退回到**纯后缀判断**；两者组合出最终的预览器。

---

## 2. 第②段：谁会被当成「产物」出现在会话里（A）

`app-initial`（`.work/big/app-initial-f094ef01c64d.js`，未入库的共享 bundle）里，一个 turn 完成后会把 `turn.artifacts.outputFilePaths` 组织成会话卡片（end resource）：

| 规则                                  | 值                                                                                               |
| ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 可作为卡片的扩展名（`NM`）            | `avif, csv, doc, docx, gif, jpeg, jpg, md, mdx, pdf, png, ppt, pptx, tsv, webp, xls, xlsm, xlsx` |
| 从 markdown 链接里额外识别的（`p6n`） | 仅 `docx, pdf, pptx, xlsx`                                                                       |
| 被排除的目录                          | `work`、`.codex_scratch`（以及项目外输出目录）                                                   |
| 资源类型                              | `file` / `google-drive` / `appgen-app` / `website`                                               |

注意 `NM` 里有 `doc/ppt/xls/md/mdx`：**老式二进制 Office 与 Markdown 也会有卡片**，但它们**没有富预览器**（见 §3 的 importKind 表）。

产物的来源也不止 `fileChange` 事件：`pZn` 把四路合并成同一份 `producedFiles`（先 `d8n` 去重、
再 `s8n` 过滤），所以**模型在正文里给出的路径本身也会让 Codex 把这些文件当成产物**：

| 来源                               | 判据（A 级证据）                                                                             | detectionSource   |
| ---------------------------------- | -------------------------------------------------------------------------------------------- | ----------------- |
| `c8n(turn)`                        | `fileChange` item（status=completed）的 changes；`delete` 移除、`update` 的 `move_path` 改键 | `fileChangeEvent` |
| `l8n({assistantContent, turnCwd})` | 正文里 `:codex-file-citation{path="…"}`，且 `purpose` 为空或 `output`                        | `outputCitation`  |
| `u8n({assistantContent, turnCwd})` | 正文里的 markdown **链接与图片** href，能相对 `assistant-response.md` 解析成路径             | `outputCitation`  |
| `f8n(turn)` + `s8n`                | commandExecution 的起止时间窗；markdown 那一路还要求 mtime 落在窗口内（±容差）               | —                 |

`s8n` 另外会丢掉 `exists === false` 的文件。本仓库目前只用 `fileChange` 事件判定产物卡片
（`renderer/TurnArtifactCards.tsx`），正文里的路径交给 §10.2.6 的引用 chip 去做「可点开」。

---

## 3. 第③段：选预览器（三套规则，A）

### 3.1 产物链路：artifact importKind → 预览器

`app-initial` 的映射 + `code/side-panel/previews/artifact-tab-content.electron-f96c26739383.js` 的分发：

| 后缀                              | importKind | artifactType | 预览实现                                                                                                            | 可编辑/写回                                        |
| --------------------------------- | ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `csv`                             | csv        | spreadsheet  | `Workbook.fromCSV` → Popcorn workbook                                                                               | ✅（可编辑）                                       |
| `tsv`                             | tsv        | spreadsheet  | `Workbook.fromCSV(text, '\t')`                                                                                      | ✅                                                 |
| `xlsx` / `xlsm`                   | xlsx       | spreadsheet  | `XlsxReader.ExtractXlsxProto`（OpenXML WASM）                                                                       | ✅（写回时可能提示 `artifactTab.xlsxSaveProblem`） |
| `docx`                            | docx       | document     | `DocxReader.ExtractDocxProto` → Popcorn document 面板；另有 `docx-preview-panel`（轻量兜底，带 Show/Hide redlines） | ✅                                                 |
| `pptx`                            | pptx       | slides       | `PptxReader.ExtractSlidesProto` → Popcorn presentation 面板                                                         | ✅                                                 |
| `pdf` / `tex`                     | pdf / tex  | pdf          | `pdf-preview-panel`（pdf.js，386 KB chunk）：翻页、页码 `{current}/{total}`、缩放、Zoom to fit                      | ❌ 只读                                            |
| `ipynb`                           | ipynb      | notebook     | `notebook-preview-panel`                                                                                            | ❌                                                 |
| `doc` / `ppt` / `xls` / `docm` 等 | —          | —            | **无 importKind → 无富预览**，只能「用其他应用打开」                                                                | ❌                                                 |

辅助事实：

- 后缀 → importKind 的**权威表**是 `app-initial-f094ef01c64d.js:147727` 的 `$2n`：
  `csv/docx/ipynb/pdf/pptx/tex/tsv/**xlsm→xlsx**/xlsx→xlsx` 共 9 项，`Q2n(ext)` 再把它折成 `{artifactType, importKind}`。
  本仓库的 `ARTIFACT_IMPORT_KINDS`（`renderer/file-preview-kind.ts`）与这 9 项**逐条一致**，包括 `xlsm → xlsx`；
  **`.xls` 不在这张表里**（旧版 BIFF 二进制），所以它和 `doc/ppt/docm` 一样没有富预览，只落到 §3.2 的「Excel 表格」不支持文案。
- 可编辑集合 `X2n` = `{csv, ipynb, tex, tsv}`，二进制集合 `Z2n` = `{docx, pdf, pptx, xlsx}`。
- 解析**全部在渲染进程**完成：主进程只按 `workspaceFiles.read({representation:'blob'})` 把字节给前端，OpenXML/pdf.js/docx-preview 在前端跑；没有服务端转码。
- Artifact tab 里的解析结果有 LRU 缓存，容量 `Tl = 5`。
- 自动打开预览（`openArtifactSidePanelTab(..., openSource:'auto_open')`）**被实验开关门控**：`getExperiment('enable_artifact_preview_auto_open') !== true` 时直接返回；开关打开时也只对本轮产物里 `artifactType ∈ {slides, document, spreadsheet}` 或 `importKind === 'pdf'`、且 `sizeBytes <= 41943040` 的文件生效。（代码 A 级；「当前账号下是否真的会自动打开」= C 级）

### 3.2 工作区链路：previewKind / unsupported / presentation

`app-initial` + `code/side-panel/_deps/review-file-source-item-c54b527a729c.js`：

```js
previewKind(path, contentKind):                       // 有富预览 → 打开预览 tab
  contentKind === 'image'                          → 'image'
  contentKind === 'pdf'                            → 'pdf'
  contentKind === 'audio' && ext ∈ AUDIO           → 'audio'
  contentKind === 'video' && ext ∈ VIDEO           → 'video'
  contentKind != null && contentKind !== 'text'    → null      // archive/binary 等一律不预览
  contentKind == null && imageRule(path) !== 'none'→ 'image'
  ext ∈ {markdown,md,mdown,mdx,mkd}                → 'markdown'
  contentKind == null && ext === 'pdf'             → 'pdf'
  → null

AUDIO = {aac, flac, m4a, mp3, mp4a, oga, ogg, opus, wav}
VIDEO = {mp4, ogv, webm}                 // 注意：mkv / mov / avi / wmv / mpeg 不在内
imageRule(path) = svg → 'toggle'；{avif,bmp,gif,ico,jpeg,jpg,png,tif,tiff,webp} → 'always'；其它 → 'none'
```

```js
unsupportedPreviewType(path, contentKind):            // 有明确「不支持」文案 → 仍然打开 tab，显示解释
  若上面 previewKind 命中 → null
  ext → 提示类型映射：
    doc,docx → word-document        xls,xlsm,xlsx → excel-spreadsheet
    ppt,pptx → powerpoint-deck      key      → keynote-deck
    numbers  → numbers-spreadsheet  pages    → pages-document
    odt → opendocument-text         ods → opendocument-spreadsheet  odp → opendocument-presentation
    rtf → rich-text-document
  命中条件：contentKind ∈ {null, archive, binary}，或（text 且 ext === 'rtf'）
  否则按 contentKind 兜底：archive/audio/binary/video → 同名提示；text → null
```

最终开哪个界面（`d4n` / `y4n` / `b4n`）：

```
opensTab(path, contentKind) =                  // d4n，逐字复刻
  previewKind(path, contentKind) != null ||          // 有富预览
  unsupportedPreviewType(path, contentKind) == null ||   // 没有「不支持」文案（文本/代码走编辑器）
  artifactPresentation(path) != null                 // 有产物渲染器

shouldUseFileManager =                         // y4n
  host != null && !isRemote(host) && !modifiedClick && !hasMcpExtensionViewer && !opensTab
```

> 三处最容易读反的地方：① `unsupported == null` 才是「打开 tab」——没有「不支持」文案意味着它是文本/代码，交给文本编辑器；② `.zip`（`contentKind = archive`）默认**不开 tab**，而是直接调系统文件管理器定位文件（`outcome = external_file_manager`）；③ 只有 `shouldUseFileManager` 为假时（远端 host、Cmd/Ctrl+点击、MCP 扩展查看器），`unsupported` 才会变成 `outcome = unsupported_message`，打开一个显示解释的 tab。
>
> 文案 id：`review.fileSource.unsupported.{archive,audio,binary,excel-spreadsheet,keynote-deck,numbers-spreadsheet,opendocument-presentation,opendocument-spreadsheet,opendocument-text,pages-document,powerpoint-deck,rich-text-document,video,word-document}`，详情 `review.fileSource.unsupportedDetail`（`Open this file in another app to view it`）；另有 `review.fileSource.tooLarge` / `.tooLargeDetail`（`{size} exceeds the {limit} preview limit`）。

> **本仓库的两条链路合在一个组件里**：Codex 的产物链路（§3.1）与工作区链路（§3.2）是两个入口，
> 所以 xlsx/docx/pptx 在产物链路有预览器、在工作区链路给「暂不支持预览」并不矛盾。本仓库的
> `RemoteProjectFileBrowser` 同时承担文件树预览与产物 tab，**必须按「有没有产物渲染器」分开判定**：
> 分派规则在 `renderer/remote-file-view.ts`，产物渲染器能接管时不再走 `unsupportedPreviewType`
> （否则产物面板永远进不去，见 §10.2.10）。`unsupportedPreviewType` 本身仍逐条对齐 Codex，未改动。

也就是说：**Codex 宁可去资源管理器，也不给用户开一个空白预览 tab。**

### 3.3 工作区链路的完整支持矩阵（A）

| 后缀/类型                                           | 工作区文件查看器行为                                                                                                                                      |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 代码/文本（含 `.json/.yaml/.toml/.sh/...`）         | 富文本编辑器（Monaco + Shiki 主题），支持 word wrap、git blame、Copy path/contents、Go to line；> 10 MiB 不可就地编辑（提示横幅），> 738 行不走高亮富渲染 |
| `md/mdx/markdown/mkd/mdown`                         | Markdown 渲染，`Enable/Disable rich view` 可切源码                                                                                                        |
| `html/htm`                                          | 同样有 rich/raw 视图切换                                                                                                                                  |
| 图片（png/jpg/jpeg/gif/webp/bmp/tif/tiff/avif/ico） | 直接渲染；`svg` 默认「toggle」（默认不自动渲染，防 XSS）                                                                                                  |
| `pdf`                                               | 直接渲染                                                                                                                                                  |
| 音频（aac/flac/m4a/mp3/oga/ogg/opus/wav）           | 内嵌播放器（`maxFileBytes = 限额/2`）                                                                                                                     |
| 视频（mp4/ogv/webm）                                | 内嵌播放器（同上）                                                                                                                                        |
| Office/ODF/Apple/RTF                                | **不支持**，文案「…previews aren't supported yet」+「Open this file in another app to view it」                                                           |
| 其余二进制                                          | 「Binary file previews aren't supported yet」                                                                                                             |
| 归档（zip/tar/gz…）                                 | 「Archive previews aren't supported yet」                                                                                                                 |
| 超大文件                                            | 「File is too large to preview」+「{size} exceeds the {limit} preview limit」                                                                             |

---

## 4. 第④段：动作与「打开方式」（A）

产物卡片的动作来自 `localConversation.endResource.*`，预览 tab 头部来自 `artifactTab.*` 与
`code/side-panel/_deps/artifact-preview-header-abbff5f8a3ae.js`：

| 动作                                             | i18n                                                                            | 行为                                                             |
| ------------------------------------------------ | ------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 主按钮 `Open` / `Open in {target}`               | `artifactTab.preview.open` / `.openPrimaryTarget.tooltip`                       | 用首选应用打开                                                   |
| 打开方式菜单                                     | `.openOptions`（`Artifact viewer options`）                                     | 列举所有可用 target                                              |
| `{target}{isDefault, select, true { (Default)}}` | `localConversation.endResource.openInTarget`                                    | 菜单里标出系统默认应用                                           |
| `Show in File Explorer / Finder / File Manager`  | `.showInFileExplorer` 等                                                        | `openIn.open({target:'fileManager'})` → `shell.showItemInFolder` |
| `Download a copy` / `Save as…`                   | `.downloadCopy` / `artifactTab.preview.downloadCopy`                            | `workspaceFiles.saveCopy` 存到「下载」目录；重名自动加 ` (1)`    |
| `Open in folder`（预览 tab）                     | `artifactTab.preview.openInFolder`                                              | 同上，target `fileManager`                                       |
| `View source`                                    | `artifactTab.sourceOptions.viewSource`                                          | 打开源码视图                                                     |
| `Open in GitHub`                                 | `.openInGitHub`                                                                 | 只在文件属于某个仓库时出现                                       |
| `Export to Google Docs/Sheets/Slides`            | `connectedApps.googleDrive.*`                                                   | 连接到 Google Drive 后的导出项（截图里的「导出为 Google 表格」） |
| `Copy link`                                      | `.copyLink`                                                                     | 复制资源链接                                                     |
| `Refresh for latest` / 下载态 / 失败态           | `.refreshForLatest`、`.downloading`、`.downloadFailure`                         | 产物被重新生成时的刷新提示                                       |
| docx 专有                                        | `artifactTab.docx.showRedlines/hideRedlines`                                    | 显示/隐藏修订痕迹                                                |
| xlsx 专有                                        | `artifactTab.xlsxSaveProblem`(+`Try again`)                                     | 写回失败提示                                                     |
| 文件名副标题                                     | `Document · {ext}` / `Spreadsheet · {ext}` / `Slides · {ext}` / `Image · {ext}` | 卡片类型标签                                                     |

**打开方式的实现**（主进程，A）：`openIn.getTargets` / `openIn.detectTarget` / `openIn.loadTargetIcon` / `openIn.open` / `openIn.setGlobalPreferredTarget`，
target 注册表共 32 个（`systemDefault`(Default app)、`vscode`、`cursor`、`terminal`、`fileManager`、`ghostty`、`zed`、`windsurf`、`visualStudio`、各 JetBrains IDE、`wsl` 等），
每个 target 按平台声明 `label/icon/kind/detect/args/open`；`kind === 'editor'` 的会记 `open_in_ide` 埋点。
首选 target 持久化在设置项 `open-in-target-preferences`（`global` + `perPath`），另外支持 `customFileHandlers` 追加自定义处理器。
**远端 host 的硬约束**：`openIn` 只对本地 host 生效，远端（remote-control）直接抛 `Remote control does not support open in {target} yet.`。

**文件关联**（A，见 [installation.md](installation.md)）：`.csv .docx .pptx .tsv .xls .xlsm .xlsx` 注册为 `open-with-only`（不抢默认），`.skill` 为 `default-eligible`；
命令行/`codex://` 传入的路径会按这个集合过滤后再当作「打开文件」。

**缩略图**（A，`main-CMBCj4XL.js`）：macOS 上用 Quick Look 给 `.docx/.pdf/.pptx/.xlsx/.xlsm` 生成缩略图，前置条件：文件 ≤ 40 MiB、魔数为 `%PDF-` 或 `PK`；**Windows 上不生成**（返回 `dataUrl: null`，界面回落成图标）。这也解释了截图里 xlsx 卡片显示的是「文件类型图标」而不是缩略图。

---

## 5. 阈值与限额总表（A，除标注外）

| 场景               | 阈值                                                                  | 证据                                                                                              |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 内容嗅探采样       | 4 KiB（`tAt = 4096`）                                                 | app-initial                                                                                       |
| 允许嗅探的最大文件 | 10 MiB（`t4n = 10 * 1024 * 1024`）                                    | app-initial                                                                                       |
| 侧边富预览上限     | **40 MiB（41,943,040 B）**                                            | `artifact-tab-content.electron`.js、`library-cloud-file-preview`.js                               |
| 原生缩略图上限     | 40 MiB                                                                | main 进程 `Jxe = 40 * 1024 * 1024`                                                                |
| 就地编辑上限       | 10 MiB（`Blob([...]).size > 10485760` → 只读）                        | `text-file-editor-tab-content.electron`                                                           |
| 高亮富渲染行数上限 | 738 行                                                                | `review-file-source-item` (`Ri = 738`)                                                            |
| 远端/直接传输上限  | 远端 host 10 MiB、本地 host 45 MiB（超限提示 `{maximumFileSize} MB`） | app-initial `getMaxDirectTransferBytes`（`e ? 10 * 1024 * 1024 : Owt`，`Owt = 45 * 1024 * 1024`） |
| 音视频播放上限     | 预览限额 ÷ 2（`zi = l / 2`）                                          | `review-file-source-item`（值为 C 级推断）                                                        |
| Artifact 解析缓存  | 5 项                                                                  | `artifact-tab-content.electron` (`Tl = 5`)                                                        |

---

## 6. 输入侧：composer 的附件链路（A）

### Syntropy 附件点击预览补齐（2026-09-22，B）

- Codex 已发送附件的点击证据：`code/side-panel/subagents/subagent-activity-chip-group-e05e8cab2038.js:10480`，取 `fsPath || path`，传递 `attachmentPreviewOrigin: sent-message`；支持预览时走侧面板，无路径时不绑定点击。
- Syntropy 草稿文件卡通过 `attachment.preview` 的 `draft` 来源按附件句柄读取；已发送文件标签通过 `message` 来源按 `syntropy-res://message/<resourceId>` 调现有 App Server `/api/resources/read`，读取 Master 资源，不按同名项目文件替代。
- 主进程生成独立临时快照并授权给既有 `LocalFileView`，草稿移除或发送不会破坏已打开的预览。未知二进制显示不支持预览；读取失败可重试；下载副本使用另存为，系统打开需用户点击动作。
- 输入框采用可点击文件卡，发送后采用消息气泡上方的可点击文件标签。当前未复制 Codex 附件右键菜单和 Office 缩略图样式；附件预览只读。

| 能力          | 细节                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 选文件        | `pick-files` 请求，参数 `{acceptedFileExtensions[], allowMultiple, imagesOnly, pickerTitle}`；调用方给 mime（如 `image/*`）时按内嵌 mime→ext 表展开，`*/*` 表示不过滤                                                                                                                                                                                                                                                                                                   |
| 图片          | 单独一条 `accept="image/*"` 的隐藏 input；模型不支持图片时报 `composer.imageInputsUnsupported`（"This model does not support image inputs."）                                                                                                                                                                                                                                                                                                                           |
| 大段粘贴      | 超过阈值粘贴文本自动落成附件，文件名 `Pasted text.txt`，可「Show in text field」还原回输入框                                                                                                                                                                                                                                                                                                                                                                            |
| 文件夹        | 只能挂到**本地**会话（`Folders can only be attached to local conversations`）                                                                                                                                                                                                                                                                                                                                                                                           |
| 远端上传      | `uploadLocalFileAttachments({attachments, allowSftpUpload})`；`host.getMaxDirectTransferBytes(isRemote)` = **远端 10 MiB / 本地 45 MiB**（`:135954`，`Owt = 45*1024*1024` 见 `:77702`）。超过阈值**不等于拒绝**：远端会从直传（`fs/writeFile` 内联 base64）改走 `uploadLocalFile`（sftp）继续挂上；只有本地 host 超过 45 MiB 才抛 `FileAttachmentTooLargeError`（`code: file_attachment_too_large`），文案 `File is too large to upload (maximum {maximumFileSize} MB)` |
| 拖拽          | 覆盖层文案 `Drop to attach` / `Drop to reference chat`                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 文件夹/文件卡 | 附件卡副标题：`{extension} · {lineInfo}`，hover 显示 `Open file`，点击进预览                                                                                                                                                                                                                                                                                                                                                                                            |

---

## 7. 本仓库现状（B 级）与差距

### 7.1 现状

| 能力                    | 位置                                                                      | 现状                                                                                                                                                                                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 附件网关                | `desktop_app/apps/desktop/src/main/attachments/attachment-broker.ts`      | **已按 Codex 白名单扩容**（图片 avif/bmp/gif/ico/jpeg/jpg/png/webp；音频 aac/flac/m4a/mp3/mp4a/oga/ogg/opus/wav；视频 mp4/ogv/webm；文档 csv/tsv/json/md/tex/txt/pdf/doc/docx/xls/xlsm/xlsx/ppt/pptx/ipynb）、每轮 ≤ 10 个、**文件附件 ≤ 45 MiB（Codex 本地档）**、内联图片 ≤ 20 MiB、TTL 1 h |
| 文件选择                | `main.ts`（`extensions: SUPPORTED_ATTACHMENT_EXTENSIONS`）                | 选择器按同一份白名单过滤                                                                                                                                                                                                                                                                      |
| 项目文件读取            | `main.ts` `projectFsRead` 分支                                            | 双通道：`includeBytes` → 40 MiB 原始字节；否则文本 1 MiB；`contentKind` 由 `files/content-kind.ts` 按 4 KiB 采样嗅探；mime 嗅探优先、后缀兜底                                                                                                                                                 |
| 项目文件写回            | `main.ts` `projectFsWrite` 分支                                           | 新增：产物就地编辑写回（`/api/projects/{id}/fs/write`），走 Master `WriteFileRequest` → 新 revision                                                                                                                                                                                           |
| 项目文件浏览 + 预览 tab | `desktop_app/apps/desktop/src/renderer/RemoteProjectFileBrowser.tsx`      | 树 + tab；按 `file-preview-kind` 三套规则分派：图片（缩放/下载）、PDF、音视频、Markdown、Monaco、Office/Notebook 富预览、「不支持」与「过大」降级态；工具栏带「打开方式」菜单                                                                                                                 |
| 本地文件预览            | `renderer/LocalFileView.tsx` + `main/local-files.ts`                      | 新增：本机文件走同一套规则表（含系统「打开方式」入口、授权路径集合、只读）                                                                                                                                                                                                                    |
| 图片预览/标注           | `renderer/SecureImagePreview.tsx`、`renderer/sketch/*`                    | 全屏覆盖层 + 绘图标注编辑器（画笔/文字/形状/橡皮 → 作为附件加入对话框）                                                                                                                                                                                                                       |
| 面板系统                | `renderer/App.tsx`（`InspectorPage`）                                     | `details` / `browser` / `browserSettings` / `remoteFiles` / `remoteTerminal` / `taskTeam` / `taskBlackboard` / `taskTimeline` / `usage` / **`localFile`**                                                                                                                                     |
| 文件关联                | `apps/desktop/file-associations.ts` + `nsis-maker.ts` + `forge.config.ts` | **已注册**：7 种格式（csv/docx/pptx/tsv/xls/xlsm/xlsx），全部 `open-with-only`（只进「打开方式」，不抢默认）                                                                                                                                                                                  |
| 浏览器下载              | `desktop-bridge` `browser.download.list/reveal/clear`                     | 已有下载管理                                                                                                                                                                                                                                                                                  |
| 产物卡片                | `renderer/TurnArtifactCards.tsx` + `styles/shell.css`                     | 会话里按 Codex 的 18 种后缀渲染卡片，带「预览 / 打开方式 / 在文件夹中显示 / 下载副本」                                                                                                                                                                                                        |

### 7.2 差距清单（按优先级）

| #   | 差距                                                                                 | Codex 的做法                                                                         | 状态                                                                                                                                                                                                                                                |
| --- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| G1  | 产物卡片与「打开方式 / 在文件夹中显示 / 下载副本」                                   | §4                                                                                   | ✅ `renderer/TurnArtifactCards.tsx` + `OpenInTargetMenu.tsx`                                                                                                                                                                                        |
| G2  | Office/PDF/Notebook 富预览                                                           | §3.1                                                                                 | ✅ csv/tsv/xlsx/docx/pptx/ipynb/pdf（`renderer/ArtifactPreview.tsx` + `renderer/office/*`）；xlsx 可写回（`office/xlsx-write.ts`），docx/pptx 写回未做（见 §10.3）                                                                                  |
| G3  | 内容嗅探（contentKind）                                                              | §1                                                                                   | ✅ `main/files/content-kind.ts`（4 KiB 采样 + SVG 特判 + 控制字符兜底）                                                                                                                                                                             |
| G4  | 读取截断 1 MiB / base64 1.5 MB                                                       | 40 MiB 预览                                                                          | ✅ 双通道：字节 40 MiB、文本 1 MiB（`PROJECT_FS_PREVIEW_MAX_BYTES`）                                                                                                                                                                                |
| G5  | 附件不支持 office/视频                                                               | 白名单 + 嗅探                                                                        | ✅ `attachment-broker.ts` 白名单已按 Codex 扩到 40 余种                                                                                                                                                                                             |
| G6  | 「不支持预览」文案体系                                                               | §3.2 的 unsupported 集合                                                             | ✅ 14 类文案 + 「文件过大」降级态（`FilePreviewViews.tsx`）                                                                                                                                                                                         |
| G7  | 首选应用/打开目标注册表                                                              | §4 `openIn.*`                                                                        | ✅ `main/open-in/targets.ts` + `open-in-target-preferences` 偏好持久化                                                                                                                                                                              |
| G8  | 图片预览的缩放/下载/编辑                                                             | `imageSidePanel.*` / `imagePreviewDialog.*`                                          | ✅ 缩放 + 下载（`FilePreviewViews` 图片预览器）；标注由 `renderer/sketch/*` 承担                                                                                                                                                                    |
| G9  | 文件关联                                                                             | §4                                                                                   | ✅ 7 种格式 `open-with-only`：Windows 走 NSIS 注册表，macOS 走 `extendInfo.CFBundleDocumentTypes`（`macDocumentTypes()`）                                                                                                                           |
| G10 | 远端文件「用本地应用打开」                                                           | Codex 对远端 host 直接拒绝                                                           | ✅ 产品取舍：下载到本机临时目录再打开（`projectFsOpenExternal`），并按 open-in 目标启动                                                                                                                                                             |
| G11 | 可编辑产物写回                                                                       | `X2n` 文本产物 + xlsx                                                                | ✅ csv/tsv/xlsx 表格编辑、tex/ipynb 源码与单元格编辑，全部走 `projectFsWrite` 写回                                                                                                                                                                  |
| G12 | 本地文件（工作区链路）预览                                                           | §3.2 本地 workspace 链路                                                             | ✅ `LocalFileView.tsx` + `main/local-files.ts`（系统「打开方式」/选择器入口，只读）                                                                                                                                                                 |
| G13 | 产物预览 tab 的「查看源码 / 刷新以获取最新」                                         | §4 `artifactTab.sourceOptions.viewSource` / `.refreshForLatest`                      | ✅ `renderer/file-viewer-actions.tsx` + `ArtifactPreview.tsx`（`view="source"`）+ `office/ooxml-source.ts`；过期判定见 G14                                                                                                                          |
| G14 | 产物「过期」判定与关闭提示                                                           | §4 的 `wasSourceChanged`（`:7076`）+ 提示条 `artifact-refresh-for-latest`（`:8401`） | ✅ `renderer/artifact-refresh.ts`（哈希优先、退到字节数）+ `projectFsStat`；**只有源文件真的变了**才把按钮切成「刷新以获取最新」并浮出可关闭的提示（×）；触发时机与「轮次进行中不提示」的差异见 §10.3                                               |
| G15 | 附件上限与过大文案                                                                   | §6 `getMaxDirectTransferBytes` / `composer.fileAttachment.uploadError.fileTooLarge`  | ✅ 文件附件 45 MiB（`ATTACHMENT_MAX_BYTES`，Codex 本地档）、内联图片 20 MiB（`ATTACHMENT_IMAGE_MAX_BYTES`），过大文案带上限；直传/上传两档的差异见 §10.3                                                                                            |
| G16 | `open_in_ide` 埋点                                                                   | §4 `use-target-apps` 的 `open_in_ide`（`:241‥260`）                                  | ✅ `renderer/open-in-telemetry.ts`：只在 `kind === 'editor'` 且 `turnId` 非空时发；sink 默认空实现（无分析后端），见 §10.3                                                                                                                          |
| G17 | 产物按**项目资源**读回                                                               | 产物挂在项目资源上（`namespace=artifact`），正文引用与产物卡片按资源打开             | ✅ 节点回写（`syntropy_node/agent/project_sync.go`）+ 桌面资源通道（`projectResourceList` / `projectResourceRead`）+ 渲染侧路径匹配与回退（`renderer/project-resources.ts`），见 §10.2.7；打开**落点**与 Codex 的 artifact tab 仍有差异（见 §10.3） |
| G18 | 会话区产物**打不开**（回写根目录多拼了一层 `project`）                               | 产物挂在项目资源上，按项目路径读回                                                   | ✅ 节点分开携带 `Workspace`（codex 的 Cwd）与 `WorkspaceRoot`（工作区根），回写用 `ProjectWorkspace{Root, Project}`，见 §10.2.10                                                                                                                    |
| G19 | 产物**渲染不出来**（被工作区链路的「暂不支持预览」挡住、类型标签显示成 `PLAINTEXT`） | §3.1 产物链路有预览器；§3.2 工作区链路没有                                           | ✅ `renderer/remote-file-view.ts` 的分派把产物渲染器排在「不支持」之前，tab 标签改由产物类型给出（`fileViewTitle` / `artifactKindLabel`），见 §10.2.10                                                                                              |

---

## 8. 对齐方案（建议分四阶段）

> 落点遵循本仓库分层：**proto/model → api/client → syntropy_master / syntropy_node → api/route → web_backend → desktop_app**（`$project`）。

### P0：可用的闭环（不引入新前端依赖）—— 已完成

1. **产物卡片 + 动作**
   - 数据源：turn 结束后的输出文件清单（若 Master/Node 侧尚无该字段，需在事件里补 `output_files[]`）。
   - 后缀集合先照搬 Codex 的 `NM`；卡片右侧给「打开方式 / 在文件夹中显示 / 下载副本」。
   - App Server 暴露 `projectFsDownload` 的「另存为」变体；桌面主进程新增 `shell.openPath` / `showItemInFolder`（仅本地副本）。
2. **读取路径扩容**：`projectFsRead` 增加 `mode: 'text' | 'blob'` 与 `maxBytes`，blob 上限 40 MiB；文本仍截断 1 MiB。
   （当前 `ProjectFsReadResultSchema.base64Content` 上限 1.5 MB 需同步放宽，或改为分块/临时文件句柄。）
3. **内容嗅探**：在 App Server（Node/Go 侧更靠近文件）实现与 Codex 等价的 `contentKind`（魔数 + SVG 特判 + 文本控制字符兜底），把 `contentKind` 随 `ProjectFsEntry`/`read` 结果返回；采样 4 KiB、仅对 ≤ 10 MiB 文件嗅探。
4. **预览器选择规则**：把 §3.2 的 `previewKind / unsupportedPreviewType / presentation` 三条规则原样移植成一个共享 TS 模块（`desktop_app/apps/desktop/src/renderer/file-preview-kind.ts`），并加单元测试（表格驱动，直接抄 Codex 的白名单）。

### P1：预览 tab 与基础类型 —— 已完成

5. 在 `InspectorPage` 里新增 `file` / `artifact` 两类 tab，复用现成的 blob 预览：图片（放大/缩小/下载）、PDF（iframe 或 pdf.js）、Markdown（rich/raw 切换）、音视频（`<audio>`/`<video>`，白名单 `aac/flac/m4a/mp3/oga/ogg/opus/wav`、`mp4/ogv/webm`）。
6. 补齐「不支持预览」文案（照 §3.2 的 14 种类型），以及「文件过大」（40 MiB）与「无法读取」。

### P2：Office 与 Notebook —— 已完成（不含二进制写回）

7. `docx`：先接轻量 `docx-preview`（对应 Codex 的 `docx-preview-panel` + redlines 开关），再评估 Popcorn/OpenXML WASM 的编辑写回。
8. `xlsx/csv/tsv`：先做**只读表格**（SheetJS/Univer 二选一），编辑写回作为后续；`pptx` 优先级最低。
9. `ipynb`：先做输出渲染，不跑内核。
10. 全部解析放在渲染进程，主进程只负责取字节；产物 tab 加 LRU（容量 5）。

### P3：体验对齐 —— 已完成（两项例外见 §10.3）

11. 首选打开目标注册表 + `open-in-target-preferences`（本地 host 生效；远端给出「下载后打开」的替代路径）。
12. 文件关联（`.csv .docx .pptx .tsv .xls .xlsm .xlsx`，`open-with-only`，不抢默认）。
13. 图片预览的缩放/下载/标注；产物自动打开预览（**建议默认关，用设置项门控**，与 Codex 一致的实验开关语义）。

### 验收建议

- 规则层：`file-preview-kind` 的表格驱动单测（每个后缀 × contentKind 组合断言 previewKind/unsupported）。
- 端到端：准备 8 个夹具文件（xlsx/docx/pptx/pdf/png/mp3/mp4/zip），断言「打开 → 预览器类型 → 超限文案 → 下载/定位动作」。
- 阈值：41 943 040 B 与 10 485 760 B 两个边界各一条用例。

---

## 9. 复核命令

```powershell
$C = "<repo>\codex_app_rev\code"

# ① 内容嗅探分类器
node "$C\tools\ctx.mjs" "kind:`audio`" "$C\..\.work\big" --limit 3

# ② 工作区链路的 previewKind / unsupported 规则（在 app-initial 里）
node "$C\tools\ctx.mjs" "word-document" "$C\..\.work\big" --limit 5

# ③ 产物链路：importKind → 预览器
node "$C\tools\ctx.mjs" "PopcornElectronWorkbookPanel" "$C\side-panel\previews" --limit 5

# ④ 卡片动作文案
node "$C\tools\ctx.mjs" "downloadCopy|openInFolder|openPrimaryTarget" "$C\_catalog" --limit 8

# ⑤ 文件关联表与 argv 收集器（Ru / _ie / zu / Bu / Sie）
node "$C\tools\ctx.mjs" "open-with-only|macOSContentType" "$C\main-process" --limit 5

# ⑥ 产物写回与自动打开（可编辑 XLSX、xlsxSaveProblem、实验开关）
node "$C\tools\ctx.mjs" "xlsxSaveProblem|artifactPreview" "$C\side-panel\previews" --limit 6

# ⑦ 产物「查看源码 / 刷新以获取最新」与下载三态
node "$C\tools\ctx.mjs" "sourceOptions|refreshForLatest|downloadFailure" "$C\side-panel" --limit 6

# ⑧ 正文文件引用（【path†L12】行内语法、:codex-file-citation 指令、引用 chip）
node "$C\tools\ctx.mjs" "codex-file-citation" "$C\..\.work\big" --limit 8
node "$C\tools\ctx.mjs" "markdown.fileCitation|markdown.fileReference" "$C\..\.work\big" --limit 8

# ⑨ 产物的打开落点：右侧 artifact tab 与 host 绑定
node "$C\tools\ctx.mjs" "openArtifactSidePanelTab" "$C\..\.work\big" --limit 3
```

关键 chunk：

- `codex_app_rev/code/main-process/build/src-B6LqG3ek.js`（contentKind 分类器）
- `codex_app_rev/code/main-process/build/core-CShdJPiO.js`（内嵌 file-type 魔数表）
- `codex_app_rev/code/main-process/build/main-CMBCj4XL.js`（read-file-metadata、缩略图、openIn targets、文件关联）
- `codex_app_rev/code/side-panel/previews/artifact-tab-content.electron-f96c26739383.js`（产物预览分发）
- `codex_app_rev/code/side-panel/_deps/review-file-source-item-c54b527a729c.js`（工作区查看器与不支持文案）
- `codex_app_rev/code/side-panel/_deps/artifact-preview-header-abbff5f8a3ae.js`（预览头部动作）
- `codex_app_rev/code/left-nav/library/library-file-preview-kind-2b10eb692a6f.js`（Library 侧预览类型）
- `codex_app_rev/.work/big/app-initial-f094ef01c64d.js`（规则与常量：previewKind / unsupported / artifact 映射 / 阈值）
- `codex_app_rev/.work/big/app-initial-f094ef01c64d.js:138856‥138874`（`codexDirective` 行内扩展：`【path†L12】` → `codex-file-citation`）
- `codex_app_rev/.work/big/app-initial-f094ef01c64d.js:237064‥237245`（引用 chip 的右键菜单：viewFile / openWith / saveAs / copyPath / copyFileContents / reveal）
- `codex_app_rev/.work/big/app-primary-4c40d73a1074.js:51580‥51978`（文件名/后缀 → 类型标签表、chip 文案、`file-citation` 指令组件）
- `codex_app_rev/.work/big/app-primary-4c40d73a1074.js:40186‥40462`（`SMt`：chip 的点击与 hover 预取行为）
- `codex_app_rev/.work/big/app-initial-f094ef01c64d.js:159002‥159010`（自动打开产物：`openArtifactSidePanelTab(scope, path, {hostId, isPreview:!0, openSource:'auto_open', originatingTurn, syncOpenTabs:!1})`，上一行的 `c.sizeBytes > 41943040` 就是 40 MiB 门槛）
- `codex_app_rev/.work/big/app-initial-f094ef01c64d.js:242505‥242511`（tabId 生成：`artifact:<hostId>:<path>` / `file:<hostId>:<path>` / `text-editor:<hostId>:<path>`）

## 10. 本轮落地映射与剩余差距（2026-09-15）

### 10.1 规则层（Codex 规则 → 本仓库文件）

| Codex 规则/常量（A 级证据）                                                                 | 本仓库实现                                                                                                                | 备注                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| contentKind 分类器（`src-B6LqG3ek.js`）                                                     | `desktop_app/apps/desktop/src/main/files/content-kind.ts`                                                                 | 4 KiB 采样、SVG 特判、控制字符兜底、归档集合含 OOXML                                                                                                                                                                                                               |
| `previewKind / unsupportedPreviewType / artifactPresentation`（app-initial）                | `apps/desktop/src/renderer/file-preview-kind.ts`                                                                          | 三套规则逐字复刻 + 阈值常量（40 MiB / 10 MiB / 738 行）                                                                                                                                                                                                            |
| 产物 `NM` 卡片后缀（18 种）                                                                 | `renderer/TurnArtifactCards.tsx` + `main/output-files`（`artifactSubtitle`）                                              | 排除 `work`、`.codex_scratch`                                                                                                                                                                                                                                      |
| artifact importKind → 预览器（`artifact-tab-content.electron`）                             | `renderer/ArtifactPreview.tsx` + `renderer/office/{csv,zip,ooxml,notebook}.ts`                                            | docx/pptx/xlsx 用自带的 OOXML 读取器（zip → XML），不引 WASM                                                                                                                                                                                                       |
| artifact 解析 LRU（`Tl = 5`、校验和 `Cl`）                                                  | `renderer/office/artifact-cache.ts`                                                                                       | 路径 + 内容校验和为键                                                                                                                                                                                                                                              |
| docx 修订痕迹开关（Show/Hide redlines）                                                     | `office/ooxml.ts`（`runs`/`hasRedlines`）+ `ArtifactPreview.tsx`                                                          | 默认隐藏 = 已接受修订                                                                                                                                                                                                                                              |
| 可编辑集合 `X2n` / 二进制集合 `Z2n`                                                         | `renderer/office/artifact-edit.ts`                                                                                        | 见 §10.3 的写回边界                                                                                                                                                                                                                                                |
| 可编辑 XLSX 的值级写回 + `artifactTab.xlsxSaveProblem`                                      | `renderer/office/xlsx-write.ts`、`renderer/office/zip-write.ts`                                                           | 只改值：数值/共享字符串/内联字符串/公式（`<f>`）按原单元格类型写回                                                                                                                                                                                                 |
| 源码编辑（tex / ipynb）                                                                     | `artifact-edit.ts` 的 `SOURCE_EDITABLE_ARTIFACT_KINDS` + `office/notebook.ts` 的 `serializeNotebook`                      | tex 走 `ArtifactSourcePane` 文本域；ipynb 只改 `cells[i].source`                                                                                                                                                                                                   |
| 自动打开预览（`enable_artifact_preview_auto_open`）                                         | `renderer/artifact-auto-open.ts` + `ui_state` 的 `artifact-preview-auto-open`                                             | 默认关；本轮产物类型 + 40 MiB 上限                                                                                                                                                                                                                                 |
| 产物「查看源码」（`artifactTab.sourceOptions.viewSource`）                                  | `renderer/file-viewer-actions.tsx` + `ArtifactPreview.tsx`（`view="source"`）+ `renderer/office/ooxml-source.ts`          | 文本产物（csv/tsv/ipynb/tex）给原文；xlsx/docx/pptx 是 zip 包，给**包内部件**视图（`[Content_Types].xml` 优先，其余按中央目录顺序，最多 40 个部件、单部件 256 Ki 字符 / 2 MiB）；图片/PDF/音视频没有源码视图，降级态（不支持 / 过大）也不给入口（`canViewSource`） |
| 产物「刷新以获取最新」（`artifactTab.refreshForLatest`）                                    | `renderer/file-viewer-actions.tsx` + `RemoteProjectFileBrowser.refreshActive()`                                           | 产物 tab 常显按钮；源文件变过之后文案切成 `Refresh for latest` 并浮出可关闭的提示（§10.2.5），点击后按同一路径重读（含字节通道），刷新中按钮转圈并禁用                                                                                                             |
| 文件元数据（主进程 `read-file-metadata`，渲染侧 `:6988` 的常驻 query）                      | `desktop-bridge` 的 `projectFsStat` → `POST /api/projects/{id}/fs/stat`（Master `StatFile`）                              | 只回 `size` 与 `sha256`（revision manifest），不把文件内容读进渲染进程；预览 tab 用它判断「打开之后有没有被重新生成」                                                                                                                                              |
| 下载态与失败态（`.download` / `.downloading` / `.downloadFailure`）                         | `renderer/file-viewer-actions.tsx`                                                                                        | 下载中按钮变「下载中…」并禁用，失败挂「无法下载产物：{原因}」，对应 `Could not download artifact`                                                                                                                                                                  |
| open-in 目标注册表（`main-CMBCj4XL.js:71873‥72993`）                                        | `main/open-in/targets.ts`（30+ 目标 + 探测 + 偏好）                                                                       | `open-in-target-preferences` 存 `ui_state`                                                                                                                                                                                                                         |
| `open_in_ide` 埋点（`use-target-apps-964e2197265b.js:241‥260`）                             | `renderer/open-in-telemetry.ts` + `OpenInTargetMenu`                                                                      | 只在 `kind === 'editor'` 且当前轮次 `turnId` 非空时发 `{action:'open_in_ide', eventKind:'action', metadata:{target}, threadId, turnId}`；轮次由 `App.tsx` 的 `composerActiveTurn` 经 `RemoteProjectFileBrowser` → 动作条传进来                                     |
| `review.fileSource.tooLarge/.tooLargeDetail` 与 unsupported 文案                            | `renderer/FilePreviewViews.tsx`                                                                                           | 「文件过大」降级 + 14 类「不支持」文案                                                                                                                                                                                                                             |
| 文件关联表 `Ru`（`main-CMBCj4XL.js:13600‥13653`）+ argv 收集器 `Bu`                         | `apps/desktop/file-associations.ts`、`main/local-files.ts`、`nsis-maker.ts`                                               | 全部 `open-with-only`，Windows 写 `OpenWithProgids`                                                                                                                                                                                                                |
| macOS 关联（`macOSContentType` / `macOSHandlerRank`）                                       | `file-associations.ts` 的 `macDocumentTypes()` → `forge.config.ts` 的 `extendInfo.CFBundleDocumentTypes`                  | 全部 `Alternate`（open-with-only），csv/tsv 额外写 `LSItemContentTypes`                                                                                                                                                                                            |
| 附件白名单（AUDIO/VIDEO/文档集合）                                                          | `main/attachments/attachment-broker.ts`                                                                                   | `readText` 只放 `text/*` 与 `application/json`，故 ipynb 按 JSON 归口                                                                                                                                                                                              |
| 附件过大文案（`composer.fileAttachment.uploadError.fileTooLarge`）                          | `attachment-broker.ts` 的 `attachmentTooLargeMessage()` + `desktop-bridge` 的 `ATTACHMENT_MAX_BYTES`                      | `File is too large to upload (maximum {maximumFileSize} MB)` → 「附件过大，无法上传（上限 45 MB）。」；上限与主进程/渲染进程/契约共用一个常量，过大不再混进「不支持」文案                                                                                          |
| 正文引用语法 `【path†L12】`（`CVn`，`:138856‥138870`）+ `codex-file-citation` 指令（`kUn`） | `renderer/file-reference.ts` 的 `FILE_CITATION_PATTERN` / `citationPath` / `parseFileCitations` / `fileCitationPlainText` | `F:` 前缀强制当路径，否则只认绝对路径；转纯文本按 `bVn` 拼成 `path:12-14`（第 1 行只给路径）                                                                                                                                                                       |
| 引用 chip 的文案（`BHt` / `GHt` / `KHt` / `WHt`）                                           | `renderer/file-reference.ts` 的 `fileCitationLabels` + `FILE_TYPE_BY_NAME` / `FILE_TYPE_BY_EXTENSION`                     | `文件名（第 12 行）`；非代码文件在第 1 行不给行标签；无后缀文件名在无障碍标签里补类型（`readme，文档`）                                                                                                                                                            |
| 引用 chip 的呈现与点击（`SMt`，`:40186‥40462`）                                             | `renderer/FileReferenceChip.tsx` + `RichText.tsx` 的 `a` / `code` 分支                                                    | 图标按类型；点击打开项目文件预览；行内代码里的裸路径也走同一个 chip                                                                                                                                                                                                |
| `codex-file-citation` 的 artifact_kind 联合（`QHt` + `$Ht`，`:2000930‥2001100`）            | `renderer/file-reference.ts` 的 `artifactCitation`                                                                        | presentation（`slide_id` / `slide_number`）、workbook（`object_id`+`object_kind`+`sheet` 或 `range`+`sheet`）、document（`page_number`）；schema 不匹配就不产出引用                                                                                                |
| 产物级位置标签（`VHt` / `HHt` / `UHt`，`:1996826‥1998100`）                                 | `renderer/file-reference.ts` 的 `artifactCitationLabel`                                                                   | `{sheet}!{range}` / `{sheet}，{label}` / `第 N 张幻灯片` / `第 N 页`；对象引用没有 `label` 时给不出标签（返回 null）                                                                                                                                               |
| 多工作表读取顺序（`xlsxSheetPaths` → `readXlsx` / 写回）                                    | `office/ooxml.ts` 的 `SheetTable` + `office/xlsx-write.ts` 的 `sheetIndex`                                                | 读与写共用同一顺序（预览哪张就写回哪张）；`truncated` 由读取器按行列上限自报                                                                                                                                                                                       |

### 10.2 新增链路

1. **产物写回（新）**：`projectFsWrite` → `POST /api/projects/{id}/fs/write` → Master `WriteFileRequest`（protojson 的 bytes 即 base64）。
   csv/tsv 在预览器里直接改单元格，「保存」把 `serializeDelimited` 的结果按 UTF-8 编成字节写回，然后按同一路径重读刷新 tab。
   xlsx 走同一套网格编辑器，但保存时先经 `office/xlsx-write.ts` 改写 OOXML：只重写真正改动的单元格（
   保留样式、共享字符串里的富文本、未改动的行列），文本写共享字符串（没有这张表就用内联字符串），
   以 `=` 开头写 `<f>` 交给 Excel 重算；改写后用 `office/zip-write.ts` 重新打包（沿用条目原有的压缩方法、
   重算 CRC 与偏移）。写回失败时界面挂 `artifactTab.xlsxSaveProblem` 的同款提示。
   截断过的表格（>200 行 / >40 列 / 多工作表）禁用编辑（保存会静默丢掉没渲染出来的行列）。
   tex 走源码编辑器、ipynb 走单元格编辑器（`serializeNotebook` 只改 `cells[i].source`，其它字段与
   没渲染到的单元格原样保留），两者都按 UTF-8 写回。
2. **本地文件预览（新）**：`LocalFileView.tsx` 复用同一套规则表，入口有两处——侧栏「新建标签页 → 本地文件」（系统选择器），
   以及系统「打开方式」（`process.argv` / macOS `open-file` / `second-instance`，经 `collectOpenFilePaths` 过滤）。
   主进程维护授权路径集合（`LocalFileGrantRegistry`），渲染进程只能读用户亲手交过来的路径。
3. **文件关联（新）**：安装器按 `windowsAssociation` 生成注册表语句；`open-with-only` 只写
   `Software\Classes\Syntropy.<ext>`（ProgID）、`Software\Classes\.<ext>\OpenWithProgids` 与 `Applications\Syntropy.exe\SupportedTypes`，
   **不写**后缀的默认值，卸载时逐条摘掉，因此不会抢系统默认打开方式。
   macOS 侧由 `forge.config.ts` 的 `extendInfo.CFBundleDocumentTypes` 声明（`macDocumentTypes()`）：
   全部 `LSHandlerRank = Alternate`、`CFBundleTypeRole = Viewer`，声明了 UTI 的 csv/tsv 额外写 `LSItemContentTypes`。
4. **产物预览自动打开（新）**：`renderer/artifact-auto-open.ts` 复刻 Codex 的单文件判定（本轮产物
   `artifactType ∈ {document, slides, spreadsheet}` 或 `importKind === 'pdf'` 且 ≤ 40 MiB），
   每轮最多打开一个；开关状态存在本机 `ui_state`（`artifact-preview-auto-open`），可在
   「设置 → 全局参数 → 客户端」切换，**默认关**（与 Codex 默认关闭的实验开关一致）。
5. **产物的「查看源码 / 刷新以获取最新」（新）**：预览 tab 的动作条拆到 `renderer/file-viewer-actions.tsx`。
   「渲染 / 源码」在**有源码视图**时出现（`canViewSource`：文本/代码、或产物解析器命中；图片/PDF/音视频
   与降级态不给入口），切到源码后 `ArtifactPreview` 按类型换渲染：文本产物直接给原文，
   xlsx/docx/pptx 走 `office/ooxml-source.ts` 列包内部件（它们本来就是 zip，把字节当文本只会得到乱码）。
   「刷新以获取最新」只出现在产物 tab，点击后重读同一路径（含字节通道），界面即 Master 落盘后的内容。
   过期判定照搬 Codex 的 `wasSourceChanged`（`:7076`）：打开产物时记下当时那份内容的身份
   （`sha256` 优先，退化到字节数），之后在窗口重新聚焦 / 标签页切回可见 / 切换 tab 时
   向 Master 取一次元数据（`projectFsStat`）比对，**只有源文件真的变了**才把按钮切成
   「刷新以获取最新」并浮出提示；提示一旦浮出就不再自动消失（Codex 同样是粘滞的
   `e.wasSourceChanged || kt`，`:7100`）。点 × 时把当前文件认作新基线
   （`artifactTab.dismissRefreshForLatest`），刷新或写回成功后基线一起更新，提示随即收起。
   基线取「刚读到的那份内容」的元数据而不是文件树里的旧条目，避免刚打开就误报过期。

6. **正文文件引用 chip（新）**：`renderer/file-reference.ts`（规则）+ `renderer/FileReferenceChip.tsx`（呈现）
   - `RichText.tsx` 的 `remarkFileCitations`。
   * 行内语法 `【path†L12】` / `【path†L12-L14】`：Codex 的 `codexDirective` 行内扩展
     （`CVn = /【([^†】\n]+)†L(\d+)(?:-L(\d+))?】/g`，`:138856‥138870`）把匹配到的文本变成
     `codex-file-citation` 节点，属性是 `{path, line_range_start, line_range_end}`；
     `xVn` 只认绝对路径，`F:` 前缀用来强制把相对路径当路径。本仓库同规则解析后转成
     `workspace-file.invalid` 伪链接（与工作区图片一套做法），由 `a` 组件渲染成 chip。
   * 指令语法 `:codex-file-citation{path="…" line_range_start="…" line_range_end="…"}`（`kUn`）同样识别。
   * chip 文案照抄 Codex：`displayLabel = 文件名（第 12 行）`，无行号时只给文件名；
     非代码文件在第 1 行不给行标签（`GHt` 的 `!r && t === 1`），无后缀文件名在无障碍标签里
     补类型（`readme，文档`）；类型标签用 Codex 的 `FHt`（文件名表，21 条）与 `IHt`（后缀表，111 条）。
   * 点击行为对齐 `SMt` 的主路径：打开该文件（本仓库走 `openProjectFilePreview` → 项目文件浏览器预览 tab）。
     引用路径先经 `projectRelativePath` 归一：相对路径直接用，绝对路径按工作区根前缀裁剪，
     裁不出来时给一条提示而不是静默失败（Codex 用 host 的 cwd 解析，见 §10.3）。
   * 另外补了一条本仓库特有的兜底：正文里**行内代码写的裸路径**（如 `` `yunnan_weather_2026-09-15.xlsx` ``）
     只要是相对路径且后缀在 Codex 的类型表里，也渲染成同一个 chip——否则正文里就只剩一个点不动的路径。
     判定条件：无空白与控制字符、长度 ≤ 256、非绝对路径、非 `scheme:`、无 `.`/`..` 段、后缀或文件名在表里。

7. **产物按项目资源读回（新）**：节点的产物（xlsx/docx/pdf/图片…）**不进项目树**，而是作为项目资源
   （`namespace=artifact`）挂在项目下——正文引用与产物卡片拿项目路径去读文件树只会得到
   `HTTP 502 … NotFound`（界面上「文件不可用」的来源）。链路两端一起补：
   - 节点侧 `syntropy_node/agent/project_sync.go`：扫描差异时把**新增与改动**的产物按**项目内相对路径**
     登记成项目资源（`filepath.ToSlash(change.Path)`，保留 `attachments/` 这类目录信息，不再只登记 basename），
     产物不进项目树修订（新增 `ProjectSyncResult.Resources` 单独计数；原来的判定只认「新增」，
     产物被重新生成时路径不变、内容变了，会走成「改动」而漏登记）；基线清单缺失时先按当前树固化一份再 diff，
     否则首次运行之后的新增产物永远识别不出来；基线缺失时跳过修订提交，但资源照常登记。
     回写入口 `syntropy_node/backend/backend.go` 的 `syncProject` 不再因为 `baseRevision == ""` 提前返回。
   - 桌面侧新增资源通道 `projectResourceList` / `projectResourceRead`
     （`syntropy:v1:project-resource-list` / `syntropy:v1:project-resource-read`）：主进程打
     `POST /api/projects/{id}/resources:list` 与 `POST /api/resources:read`，结果形状与 `projectFsRead`
     完全一致（`ProjectResourceReadResultSchema === ProjectFsReadResultSchema`），渲染进程沿用同一套
     「按路径选预览器」逻辑（请求里带上 `pathLabel`）。
   - 路径匹配放在 `packages/domain/src/project-resource.ts`（`findProjectResource`）：先按**完整相对路径**
     精确匹配，再退回 basename（兼容只登记了文件名的旧资源）；两种匹配都取 `updatedAtMs` 最大的一条
     ——资源 id 由内容哈希决定，产物重新生成会登记成新资源，旧的那条不会立刻删除。
     放在 domain 是因为渲染进程与主进程要用同一份实现（下面的下载/外部打开兜底）。
   - 读取回退：`RemoteProjectFileBrowser.fetchFile` 在 `readProjectFile` 失败时自动回退到资源读取
     （`readResourceFallback`）。资源列表是打开时拉的，第一次没命中会重拉一次——会话运行中一直在产出
     新文件，不重拉就会漏掉刚生成的那个。
   - **下载副本 / 用本地应用打开**走主进程的 `fetchProjectPathBytes`：先查项目树（`/files/download`），
     失败再按资源读回字节。预览之外的两个动作与预览同一口径，不会再出现「预览看得到、下载报 NotFound」。

8. **产物 tab 的落点（新）**：正文引用 chip 与产物卡片不再打开「远程文件」面板，而是开一个**产物 tab**，
   对齐 Codex 的 artifact tab：
   - `renderer/artifact-tab.ts` 生成 tab 身份 `artifact:<作用域>:<路径>`，标题取文件名
     （对齐 Codex 的 `getTitle: path => basename`），完整路径给 tooltip。
   - `RemoteProjectFileBrowser` 新增 `mode="artifact"`：只打开 focus 指定的那一个文件，
     不铺左侧文件树、不叠内部 tab；读取、动作条、过期判定与文件浏览器完全共用同一套实现。
   - `App.tsx` 在右侧 inspector 注册 `kind: "artifact"` 页面（可关闭、满了会被挤出，宽度 ≥ 640px），
     `openProjectFilePreview` 改为开这个页面；产物自动打开（`artifact-auto-open`）走的也是同一条路，
     对应 Codex 的 `openSource:'auto_open'`。

9. **产物级引用与「跳到产物内的位置」（新）**：正文引用不只定位到文件，还能定位到产物内部。
   - 规则层 `renderer/file-reference.ts` 新增 `artifactCitation(attributes)`（对齐 Codex `QHt` + `$Ht`）
     与 `artifactCitationLabel(label, target)`（对齐 `VHt` / `HHt` / `UHt`）：
     `artifact_kind="workbook"` 配 `sheet` + `range`（或 `object_id` + `object_kind`）→ `汇总!A1:C3`；
     `artifact_kind="presentation"` 配 `slide_number`（或 `slide_id`）→ `第 3 张幻灯片`；
     `artifact_kind="document"` 配 `page_number` → `第 2 页`。
     schema 不匹配（缺 sheet、既没有 range 也没有 object_id、`object_kind` 不在 chart|table|image|shape、
     页码不是正整数）就不产出引用，回落成按行号定位——与 Codex 用 zod 联合类型卡的条件一致。
   - `fileCitationLabels` 按 Codex `BHt` 的 `VHt(...) ?? lineLabel` 取位置标签；`RichText` 把指令属性编进
     伪链接（解码时重跑一次 `artifactCitation` 校验，外部文本写不进非法位置），`FileReferenceChip` 的
     点击回调带上 `ArtifactCitationTarget`。
   - 落点：`App.openProjectFilePreview(projectId, path, target)` → artifact tab 的 `location`（带 nonce，
     同一条引用再点一次也重新定位）→ `RemoteProjectFileBrowser` 的 focus → `ArtifactPreview`。
     `ArtifactPreview` 据此切到 `sheet` 指的那张工作表、把 `range` 圈出的单元格高亮并滚到首格；
     pptx 滚到 `slide_number` 那张幻灯片并高亮。工作表名或幻灯片编号对不上时什么都不做（不猜位置）。
   - **多工作表**：xlsx 预览此前只看第一张表（还把「多工作表」误判成截断，标成「仅显示前若干行/列」且禁止编辑）。
     现在 `ArtifactState.sheet` 携带全部 `SheetTable` 并渲染工作表标签页；`writeXlsxSheet(bytes, rows, sheetIndex)`
     按同一份顺序写回**当前那张表**，避免「看第 2 张、写第 1 张」；`SheetTable.truncated` 由读取器按行列上限自报。
   - 输出约定：agent 侧由 `syntropy_node/agent/instructions.go` 的 `citationInstruction` 注入
     （与图片 Markdown 语法、A2A 约定并列）——不注入的话模型不会主动写引用语法，链路就只剩解析端。

10. **会话区产物「打不开 / 渲染不出来」（本轮修复）**：截图里的现象是正文 chip 点开后右侧产物 tab
    显示「文件不可用 / `HTTP 502 … NotFound`」，同时类型标签写着 `PLAINTEXT`。两个独立原因：

- **打不开：回写的两个根被混成一个**。绑定项目的工作区里 codex 的 Cwd 是 `<工作区>/project`，
  而回写基线（`.syntropy/state/project-manifest.json`）与物化版本状态记在**工作区根**。
  此前回写把一切都按 `ctx.Workspace`（Cwd）再拼一层 `project` 去算，扫到的是
  `<工作区>/project/project`：agent 真正写在项目里的 `云南各城市天气_20260915.xlsx` 从没被
  识别成「新增」，也就没有对应的项目资源，桌面端按项目路径读回只能拿到 NotFound。
  现在 `engine.AgentContext` 分开携带 `Workspace`（Cwd）与 `WorkspaceRoot`（工作区根，
  读法 `AgentWorkspaceRoot()`），回写统一用 `agent.ProjectWorkspace{Root, Project}`
  （`ProjectWorkspaceFor(spec)`）；dirty 键、物化版本状态、附件物化目录与会话索引
  （`agent/reconciler.go`）一并改用正确的根。**基线缺失时不再静默返回**，而是把当前树
  固化成基线并留一条 `project baseline missing; initialized from current tree` 日志——
  以前这条静默返回会让后续产物永远回写不出去。
- **渲染不出来：产物渲染器被工作区链路的降级文案挡住**。`unsupportedPreviewType` 把
  `xlsx/xlsm/docx/pptx` 判成「暂不支持预览」（工作区链路确实没有 Office 预览器），而
  文件浏览器与产物 tab 共用同一个组件，预览区又先查「不支持」再查产物渲染器——
  结果产物面板永远进不去（`渲染 / 源码` 按钮同样因为「降级态不给源码视图」而不出现）。
  现在分派抽成纯函数 `renderer/remote-file-view.ts`：`artifactPresentation` 命中、字节已取回
  且未超 40 MiB 时产物渲染器接管，其余顺序（不支持 → 文件过大 → 图片/PDF/音视频字节预览 →
  源码 / Markdown / 编辑器）与 Codex 一致。图片/PDF 仍走字节型预览器，不换实现。
- **类型标签**：`fileViewTitle` 先按产物类型给「表格 / 文档 / 演示文稿 / Notebook / PDF」
  （`artifactKindLabel`，对齐 Codex 的 `Document / Spreadsheet / Presentation / PDF / Image` 词表），
  再退到富预览器标签，最后才是 Monaco 语言标识——`xlsx` 之前落到语言标识上显示成 `plaintext`。

11. **Markdown 打开是空白 / 代码没有语法高亮（本轮补齐）**：两者都在文本视图这一层，Codex 侧同样是
    Monaco（`architecture.md` 的「富文本编辑器（Monaco + Shiki 主题）」、`file-handling.md` §3.3），
    所以按 Monaco 的接线对齐即可：
    - **Markdown 空白：误取了字节，把文本通道顶掉**。`projectFsRead` 在 `includeBytes` 为真时只回
      `base64Content`、`content` 是空串，而旧的 `fileNeedsBytes` 把「有富预览器」（含 `markdown`）
      一律判成要字节，于是 `RichText content=""` 渲染成空白。Codex 的 Markdown 富视图是
      `filePreviewPresentation(path,"text")` 的 **toggle**（`Enable/Disable rich view`），读的是文本、
      不是字节。现在 `fileNeedsBytes` 收进 `renderer/file-preview-kind.ts` 单一实现
      （`RemoteProjectFileBrowser` / `LocalFileView` 共用），只对字节型预览器（图片 / PDF / 音视频）
      与产物解析器输入取字节，排除 `markdown` 与走源码视图的 `tex`；`canViewSource` 相应放开
      `markdown`（回源码 = Codex 的 `Disable rich view`）。
    - **没有语法高亮：语言定义从没注册过**。两个视图只 import 了
      `monaco-editor/editor/editor.api.js`（纯编辑器 API，不带任何语言定义），Monaco 对未注册的 id 会
      静默回落成 `plaintext`（`LanguageService._createAndGetLanguageIdentifier`）——表现就是
      「文件能打开，但没有着色」。新增 `renderer/monaco-languages.ts`：引
      `basic-languages/monaco.contribution.js` 注册自带 Monarch 语言（每种语言的语法仍按需懒加载成
      独立 chunk），JSON 因被 Monaco 归为「富语言」而单独注册 id + `setTokensProvider`
      （`languages/features/json/tokenization.js`，本地 jsonc-parser 计算，不需要 json.worker）。
      两个视图各加一行 `import "./monaco-languages"`。
    - **id 对照**：Monaco 的 protobuf 定义注册的 id 是 `proto`（`protobuf/` 只是目录名），此前
      `file-language.ts` 的 `proto → "protobuf"` 会回落成 plaintext。`MONACO_LANGUAGE_BY_EXTENSION`
      现在导出为唯一数据源，`tests/contract/monaco-language-ids.contract.test.ts` 逐条比对这张表与
      Monaco 的 `register.js`，并守住两个视图的接线。

### 10.3 明确未对齐（保留为已知差距）

| 项                                                                              | Codex 行为                                                                                                                                                          | 本仓库现状                                                                                 | 原因                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 产物 tab 的作用域槽位                                                           | tabId 是 `artifact:<hostId>:<path>`（`app-initial:242505`）：同一个路径在不同 **host** 上是两个 tab                                                                 | `artifact:<projectId>:<path>`：作用域落在**项目**上                                        | 渲染进程没有 host 维度（一个项目就对应一个节点上的工作区），所以用 projectId 占那个槽位；语义一致（同路径不同作用域 = 不同 tab）。Codex 的另外两族 tabId `file:<hostId>:<path>` / `text-editor:<hostId>:<path>`（`:242508` / `:242511`）在本仓库没有对应分流：文本引用也开 artifact tab |
| docx / pptx 版式写回                                                            | Popcorn 面板经 OpenXML WASM 改版式并落盘                                                                                                                            | 只读预览（文本提取 + redline 开关）                                                        | 需要 OpenXML 的版式引擎，本仓库不引入 WASM；xlsx 的值级写回已落地                                                                                                                                                                                                                       |
| 产物就地编辑的落点                                                              | 写回 host 上那个文件本身（`workspaceFiles.write`）                                                                                                                  | 写回 Master 的项目树修订（`projectFsWrite`），读取时项目树优先，所以编辑后读到的就是新内容 | 桌面端没有直写节点文件的通道；节点上的原文件要等节点下一轮 sync 才会与新内容对齐                                                                                                                                                                                                        |
| `open_in_ide` 埋点                                                              | 发到 Codex 的分析后端                                                                                                                                               | 契约与触发时机已对齐（`renderer/open-in-telemetry.ts`，两个门槛一致），但 sink 默认空实现  | 本仓库没有分析后端；照 `sketch-telemetry.ts` 的先例保留完整事件契约 + 可替换 sink，接入后端时只需替换 sink                                                                                                                                                                              |
| 图像编辑面板（`imageSidePanel.comment/erase/removeBackground/resize/like`）     | 生成式图像编辑：把原图（+ 遮罩 / 评论）提交给模型改图                                                                                                               | 无                                                                                         | 需要模型侧的图像编辑后端；本仓库的 `renderer/sketch/*`（画笔/文字/形状/橡皮 → 作为附件）对应的是 Codex 的 **sketch 绘图标注**功能，不是这个面板                                                                                                                                         |
| 图片预览对话框的上一张 / 下一张（`imagePreviewDialog.previousImage/nextImage`） | 同一集合里翻图                                                                                                                                                      | 只有关闭 / 下载 / 缩放（`FilePreviewViews` 的图片预览器）                                  | 本仓库的图片预览是单文件 tab，没有「同一轮多张图」这种集合可翻                                                                                                                                                                                                                          |
| 附件的直传上限                                                                  | 远端 host 超过 10 MiB 改走上传通道、本地 host 超过 45 MiB 才报错                                                                                                    | 文件附件统一 45 MiB（`desktop-bridge` 的 `ATTACHMENT_MAX_BYTES`）                          | 本仓库没有「直传 vs 上传」两条路：附件一律先落到本机暂存目录，再按 1 MiB 分块上传（`expandClusterMessageContent` 的 `/attachments` 上传），等价于 Codex 的**上传通道**，所以取 45 MiB 这档——Codex 能挂的文件这里都能挂                                                                  |
| 内联图片上限                                                                    | 无独立上限（图片同样写临时文件后再挂）                                                                                                                              | 20 MiB（`ATTACHMENT_IMAGE_MAX_BYTES`）                                                     | 粘贴图片与浏览器截图走 `attachment.createImage` 的 dataUrl 单次回传，20 MiB 的 PNG base64 后约 27.96 MB，刚好卡在 `dataUrl` 的 28 MB 上限内；Codex 没有这条路径                                                                                                                         |
| 过期判定的触发时机                                                              | `read-file-metadata` 是常驻 query，由文件变更事件与轮次状态驱动；提示条在会话 `working` 期间不浮出（`:8434` 的 `n && S === 'working'`，避免打断正在重写文件的轮次） | 打开 / 聚焦 / 切 tab 时主动 `fs/stat` 比对一次                                             | 本仓库没有文件变更事件源，也没有「该会话正在写这个文件」的状态；聚焦与切 tab 是能拿到的最近似时机，代价是离开窗口期间发生的变更要回到窗口才提示                                                                                                                                         |
| 过期提示的呈现                                                                  | 蓝底白字的悬浮胶囊（`data-testid="artifact-refresh-for-latest"`，右侧 × 关闭）                                                                                      | 动作条上的按钮文案切换（「刷新」→「刷新以获取最新」）+ 紧随其后的 × 按钮                   | 本仓库的预览头部是动作条而非悬浮胶囊；文案与 `Dismiss refresh prompt` 的语义一致                                                                                                                                                                                                        |
| `Open in GitHub`（`artifactTab.preview.openInGitHub`）                          | 文件属于某个 GitHub 仓库时出现                                                                                                                                      | 无                                                                                         | 本仓库的产物不带「所属仓库/远端」信息，没有数据源                                                                                                                                                                                                                                       |
| `Export to Google Docs/Sheets/Slides`（`connectedApps.googleDrive.*`）          | 连接 Google Drive 后可导出                                                                                                                                          | 无                                                                                         | 本仓库没有 Google Drive 连接                                                                                                                                                                                                                                                            |
| 引用 chip 的右键菜单                                                            | `workspace-file-*` 菜单：`Open file` / `View in browser` / `Open with` 子菜单 / `Save as…` / `Copy path` / `Copy file contents` / `Open in Explorer                 | Finder                                                                                     | File Manager`（`:237064‥237245`）                                                                                                                                                                                                                                                       | chip 只有「点击打开」+ tooltip 显示 `path:12-14`                                                                                                                                                                                                | 本仓库的打开方式 / 下载副本 / 定位入口都在预览 tab 的动作条上，chip 上再挂一套右键菜单会重复；菜单项里的 `Copy file contents` 需要把整份文件读进渲染进程，与「预览只在 tab 里读」的现状冲突                                                                                                                    |
| 引用 chip 的 hover 预取                                                         | 鼠标进入 chip 时预取文件元数据（`SMt` 的 `onMouseEnter`）                                                                                                           | 点击时才读                                                                                 | 本仓库的文件浏览器按需读，没有为正文引用建预取缓存                                                                                                                                                                                                                                      |
| 绝对路径引用的解析                                                              | 用 host 的 cwd 把绝对路径归一成工作区路径                                                                                                                           | 只有在路径以项目工作区根为前缀时才归一，否则提示「无法在项目内打开该文件」                 | 本仓库的 agent 跑在节点侧，渲染进程只有 Master 侧的项目工作区路径；不一致时不做猜测                                                                                                                                                                                                     |
| 产物级引用（sheet / range / slide / page）                                      | `:codex-file-citation` 带 `artifact_kind=workbook                                                                                                                   | presentation                                                                               | document`时，chip 标签显示`{sheet}!{range}`/`slide 3`/`page 2`（`VHt`/`UHt`/`HHt`），点击跳到对应位置                                                                                                                                                                                   | **已落地**（§10.2.9）：标签与跳转都按 Codex 的 `VHt(...) ?? lineLabel` 取；`workbook` 的 `sheet`+`range` 切表 + 高亮 + 滚到首格，`presentation` 的 `slide_number` 滚到那张幻灯片；agent 侧由 `syntropy_node/agent/instructions.go` 注入引用语法 | 仍不可跳的两类：`object_id`（工作表里的图表/表格/图片/形状）与只有 `slide_id` 没有编号的幻灯片——本仓库的预览只有单元格网格与幻灯片文本，没有对象锚点；docx 的 `page_number` 只在 chip 上显示（预览是段落流，没有分页）。文案按本仓库中文界面落地：「第 3 张幻灯片」/「第 2 页」，工作表区域保持 `Sheet1!A1:C3` |

### 10.4 验收命令（本轮新增用例）

```powershell
cd desktop_app
pnpm exec tsc -b --pretty false
pnpm exec vitest run --dir tests/contract      # artifact-edit / artifact-cache / artifact-auto-open / artifact-refresh / artifact-tab / xlsx-write / ooxml-source / file-associations / local-files / content-kind / file-preview-kind / file-reference / project-resources / ooxml / desktop-store
pnpm exec vitest run --dir packages            # 产物资源路径匹配（findProjectResource：完整路径 → basename，取最新）
pnpm exec vitest run --dir tests/component     # remote-file-view（预览器分派顺序：xlsx/docx 走产物渲染器而不是「暂不支持预览」、tab 类型标签、降级判定）、FilePreviewViews（表格/源码编辑工具条、单元格输入、引用区域高亮与 A1 区域解析、源码面板、动作条三态、过期提示与源码切换）、rich-content（正文引用 chip）、file-reference（产物级引用 chip 的解析→编码→解码→文案）、LocalFileView 与 open-in-telemetry
pnpm exec vitest run --dir tests/security      # attachment-broker 白名单
pnpm exec oxlint --deny-warnings apps packages tests
pnpm exec depcruise --config dependency-cruiser.config.cjs apps packages tests tools

# 节点侧产物回写与引用输出约定（Go）
cd ../syntropy_node
go test ./agent/... ./backend/      # project_sync：两个根不混用（ProjectWorkspaceFor）、基线缺失时固化、缺 revision 时仍登记资源、附件物化到项目根；instructions：引用语法注入
```

## 相关

- 侧边面板与 Popcorn 预览：[side-panel.md](side-panel.md)
- 安装包与文件关联：[installation.md](installation.md)
- 对话区行为对照：[conversation-behavior.md](conversation-behavior.md)
