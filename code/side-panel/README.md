# side-panel — 侧边页面

**164 个文件 / 7.89 MB**，1368 条 i18n 文案。
完整分析见 [`../../side-panel.md`](../../side-panel.md)。

公开 API（`tabs/thread-side-panel-tabs-609ba0f9f71f.js` 的全部导出）：

```js
export {
  THREAD_SIDE_PANEL_TAB, // tab 类型枚举（定义在 app-initial）
  openThreadMcpAppSidePanelTab,
  closeThreadMcpAppSidePanelTab,
  getThreadMcpAppSidePanelTabId,
  openSessionSandboxSidePanel,
  openThreadTimelineSidePanel,
};
```

同名 shim `thread-side-panel-tabs-15e3c4c648ed.js` 里 `openSessionSandboxSidePanel` 与 `openThreadTimelineSidePanel` 的函数体是 `return !1` —— **这两个能力在当前 build 是禁用桩**。

## tabs/

主体 `thread-side-panel-tab-content-3335e9fb2381.js`（168 KB / 6144 行）是 tab 内容分发器。其余按能力成对出现（`open-*-side-panel-tab` 是打开动作，`*-side-panel-tab` 是内容）：

Review(diff) · Browser · Files(workspace browser) · Side chat · PR#N · Local Sources · ChatGPT Sources · Subagents · Scheduled task(Automation) · Goal · Plan · Artifact · Text file editor · MCP App · MCP extension · Entity · Background agent · Summary(pinned) · New tab · Timeline/Sandbox(禁用)

状态类小 chunk（说明它们是**独立原子 store**）：`thread-panel-state`(0.2 KB)、`thread-right-panel-state`(0.1 KB)、`panel-visibility`(2.2 KB)、`thread-panel-toggle-button`(4 KB，图标 `sidebar-hidden-light-16`)、`control-panel`(2.8 KB)、`new-thread-panel-page`(3.2 KB)。

最大的单块是 `cloud-automation-detail-panel-c76d4ae4bfb4.js`（96 KB）。

## terminal/

`terminal-panel-e2350b6eaef2.js`（16 KB）、`xterm-output-panel`、`exec-shell-container`(CSS)、`xterm-window-zoom-98caf71e2690.js`（292 KB）、`terminal-workspace-warning-state`、`local-conversation-background-terminal-tab` + `open-*`。多终端标题 `Terminal {index}`；后台终端 `Background terminal` / `No output yet` / `Stop all background terminals`。

## subagents/

`subagent-activity-chip-group-e05e8cab2038.js`（**462 KB**，含大量动画）是对话区里的子代理活动 chip 组；`subagent-panel`、`chatgpt-subagents-panel`、`local-conversation-subagents-panel-tab` + `open-*` 是面板本体。状态文案：`Active · {count}`、`Done · {count}`、`Working`、`Waiting`、`No active subagents`、`{time} ago`。

## previews/

| chunk                                                   |   大小 | 说明                                                     |
| ------------------------------------------------------- | -----: | -------------------------------------------------------- |
| `text-file-editor-tab-content.electron-b517f3f85a48.js` | 400 KB | 文本文件编辑器 tab                                       |
| `artifact-source-bootstrap-b7ba40702025.js`             | 330 KB | 产物源引导                                               |
| `artifact-tab-content.electron-f96c26739383.js`         | 194 KB | 产物 tab 内容                                            |
| `pdf-preview-panel-9569314b064c.js`                     |  57 KB | PDF 预览（另有 386 KB 的 `pdf-*.js` 渲染库）             |
| `docx-preview-panel-7d038fc9f715.js`                    |  48 KB | Word 预览（支持 `showRedlines`/`hideRedlines` 修订痕迹） |
| `notebook-preview-panel-93b0bdcffea7.js`                |  22 KB | Notebook 预览                                            |
| `cloud-browser-side-panel-f0ee6b4ea444.js`              |  28 KB | 云端浏览器侧面板（`LIVE` 标记）                          |
| `file-editor-theme-75aaad6f8219.js`                     | 250 KB | 编辑器主题                                               |

Office 三件套的内部代号是 **Popcorn**：`PopcornElectronWorkbookPanel`(472 KB)、`PopcornElectronDocumentPanel`(394 KB)、`PopcornElectronPresentationPanel`，依赖 `DocumentFormat.OpenXml.*.wasm`(4.2 MB) 与 `dotnet.runtime.*.js`(190 KB) —— 即在渲染进程里跑 .NET/OpenXML 来读写 Office 文件。`artifactTab.xlsxSaveProblem` 的文案（“Keep this workbook open…”）印证它会**回写**文件。

---

## 文件清单

### `_deps/`

| 文件                                                    |     原始 |   格式化 | formatter | 来源                                                                    |
| ------------------------------------------------------- | -------: | -------: | --------- | ----------------------------------------------------------------------- |
| `automation-frequency-section-49a6d0cc31da.js`          | 166.9 KB | 281.2 KB | prettier  | 闭包 ← `cloud-automation-detail-panel-c76d4ae4bfb4.js`                  |
| `docx-preview-ef5f124f273f.js`                          | 166.9 KB | 323.4 KB | prettier  | 闭包 ← `docx-preview-panel-7d038fc9f715.js`                             |
| `pull-request-detail-query-493e5e72eeeb.js`             | 117.8 KB | 193.1 KB | prettier  | 闭包 ← `thread-pull-request-tab-content-e83709e82efb.js`                |
| `popcorn-electron-surface-style-7137a19cf884.js`        |  82.6 KB | 133.8 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `dist-4fb357c8c101.js`                                  |  76.1 KB |  80.9 KB | prettier  | 闭包 ← `text-file-editor-tab-content.electron-b517f3f85a48.js`          |
| `review-file-tree-pane-b743a8f06e62.js`                 |  66.4 KB | 102.0 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `review-file-source-item-c54b527a729c.js`               |  64.0 KB |  99.0 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `pull-request-code-review-c745f0e9b91d.js`              |  61.1 KB |  99.4 KB | prettier  | 闭包 ← `open-thread-pull-request-code-tab-8c6819e3368b.js`              |
| `code-diff-dbee820b6963.js`                             |  54.2 KB |  87.3 KB | prettier  | 闭包 ← `open-thread-pull-request-code-tab-8c6819e3368b.js`              |
| `src-c48c04e5744b.js`                                   |  53.7 KB |  85.0 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `automation-frequency-section-babd3c0f0928.css`         |  47.4 KB |  55.7 KB | prettier  | 闭包 ← `open-automation-side-panel-tab-3dba1f01fdd9.js`                 |
| `review-file-source-breadcrumb-8f9dc59debc0.js`         |  43.5 KB |  69.7 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `codex-home-announcements-d9e95d6eff58.js`              |  42.7 KB |  65.4 KB | prettier  | 闭包 ← `new-thread-panel-page-d38235b242d6.js`                          |
| `lodash-7c639913ad7a.js`                                |  36.6 KB |  56.0 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `pull-request-comment-72460362f3f8.js`                  |  36.4 KB |  59.6 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `dist-809f83e6e218.js`                                  |  33.8 KB |  58.4 KB | prettier  | 闭包 ← `file-editor-theme-75aaad6f8219.js`                              |
| `src-ded86e543ac6.js`                                   |  27.2 KB |  46.3 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `document-8592358b88eb.js`                              |  26.8 KB |  47.3 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `dist-f9d6ecf23d60.js`                                  |  26.0 KB |  45.3 KB | prettier  | 闭包 ← `text-file-editor-tab-content.electron-b517f3f85a48.js`          |
| `about-you-summary-5ae62b3bc9cd.js`                     |  25.6 KB |  44.8 KB | prettier  | 闭包 ← `chatgpt-sources-side-panel-tab-99e831d8b9d6.js`                 |
| `review-file-tree-side-pane-b99602290612.js`            |  22.5 KB |  37.5 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `core-fd61a496c1f9.js`                                  |  19.8 KB |  31.7 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `pull-request-readonly-comment-6e9ac0779fb8.js`         |  18.3 KB |  31.3 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `artifact-feedback-button-9394715d94e5.js`              |  16.2 KB |  25.0 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `artifact-annotation-batch-controls-b9f12cd27bf6.js`    |  15.8 KB |  25.8 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `pull-request-actions-7f7377d4b593.js`                  |  13.9 KB |  22.6 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `artifact-preview-header-abbff5f8a3ae.js`               |  10.8 KB |  19.3 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `use-code-diff-context-menu-6d352d781f8f.js`            |   9.8 KB |  15.7 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `mcp-extension-view-frame-71a0f1e67dc5.js`              |   8.5 KB |  13.4 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `registered-sources-f4ac743012d6.js`                    |   7.4 KB |  11.6 KB | prettier  | 闭包 ← `open-local-conversation-sources-side-panel-tab-e80692a35ed8.js` |
| `PopcornChartHoverTooltip-adcf79d91386.js`              |   7.0 KB |  10.7 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `pull-request-code-review-navigation-c0a64db532da.js`   |   6.3 KB |   9.7 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `src-3e2a99fe4a1d.js`                                   |   6.1 KB |   9.4 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `pull-request-revision-tab-43d3931efac0.js`             |   5.9 KB |  10.2 KB | prettier  | 闭包 ← `open-thread-pull-request-code-tab-8c6819e3368b.js`              |
| `use-target-apps-964e2197265b.js`                       |   5.8 KB |  10.0 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `thumb-mixed-74cb6fc32b2e.js`                           |   4.9 KB |   5.1 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `registered-3136d91cec07.js`                            |   4.2 KB |   6.4 KB | prettier  | 闭包 ← `open-thread-pull-request-code-tab-8c6819e3368b.js`              |
| `diff-source-a588acc09b83.js`                           |   4.1 KB |   5.9 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `surface-572ba2609efa.js`                               |   4.1 KB |   6.4 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `pull-request-checks-summary-f4748816df4c.js`           |   4.0 KB |   6.0 KB | prettier  | 闭包 ← `open-thread-pull-request-code-tab-8c6819e3368b.js`              |
| `annotation-mode-button-fa4bee24eb8d.js`                |   3.5 KB |   5.6 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `use-binary-preview-source-4f8b7bce953a.js`             |   3.4 KB |   5.2 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `freeze-panes-7a2ff30d4631.js`                          |   3.2 KB |   4.3 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `drawing-frame-geometry-edc4f489bcf8.js`                |   2.9 KB |   3.9 KB | prettier  | 闭包 ← `artifact-source-bootstrap-b7ba40702025.js`                      |
| `file-blank-6ef6808eff9a.js`                            |   2.9 KB |   3.1 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `codex-light-16-3986f0d27657.js`                        |   2.8 KB |   3.2 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `diff-comment-card-c409d5c26721.js`                     |   2.7 KB |   4.2 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `automation-delete-confirmation-dialog-c1501bf84bbd.js` |   2.3 KB |   3.4 KB | prettier  | 闭包 ← `automation-side-panel-tab-e00029fe121b.js`                      |
| `pull-request-revision-queries-822a229a11df.js`         |   2.0 KB |   2.8 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `full-content-metadata-afbc573bb0ec.js`                 |   1.9 KB |   2.7 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `artifact-file-preview-icon-70a3fde11749.js`            |   1.5 KB |   2.4 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `pull-request-detail-model-6c8655a9e7d6.js`             |   1.5 KB |   2.0 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `compact-empty-state-9a2953b7acb0.js`                   |   1.5 KB |   2.2 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `PopcornPageNumberNavigation-a4529764704f.js`           |   1.5 KB |   1.9 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `row-bc9dec132d18.js`                                   |   1.4 KB |   2.3 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `history-7a399655a3e6.js`                               |   1.4 KB |   1.6 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `filter-alt-aeda224d8ab7.js`                            |   1.4 KB |   1.6 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `address-utils-78b2f3f83431.js`                         |   1.2 KB |   1.6 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `registered-bbcd5ae2017a.js`                            |   1.2 KB |   1.8 KB | prettier  | 闭包 ← `subagents-3913ad169eec.js`                                      |
| `thumbnail-bbff7dbb28d2.js`                             |   1.2 KB |   1.8 KB | prettier  | 闭包 ← `background-terminal-6775c46c6478.js`                            |
| `github-file-url-de7160c14b01.js`                       |   1.1 KB |   1.4 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `annotation-scopes-fbb81b16f7b1.js`                     |   1.1 KB |   1.4 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `scroll-to-match-9d10be663eba.js`                       |   1.1 KB |   1.6 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `text-shorter-588de2d999a8.js`                          |   1.1 KB |   1.8 KB | prettier  | 闭包 ← `open-thread-pull-request-code-tab-8c6819e3368b.js`              |
| `verify-descendant-79c03f806412.js`                     |   1.0 KB |   1.4 KB | prettier  | 闭包 ← `open-local-conversation-subagents-panel-84337b6e92ce.js`        |
| `pull-request-error-description-aebc9b65d45f.js`        |   0.9 KB |   1.3 KB | prettier  | 闭包 ← `open-thread-pull-request-code-tab-8c6819e3368b.js`              |
| `arrow-curved-right-c429570ec5db.js`                    |   0.9 KB |   1.1 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `review-diff-virtualizer-metrics-92681c84005e.js`       |   0.9 KB |   1.1 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `play-outline-51cb9fd3340e.js`                          |   0.8 KB |   1.0 KB | prettier  | 闭包 ← `cloud-automation-detail-panel-c76d4ae4bfb4.js`                  |
| `feedback-availability-ba2b2560dbae.js`                 |   0.7 KB |   1.1 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `artifact-preview-status-ce3d7c794ec8.js`               |   0.7 KB |   1.1 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `document-5fedf4c25de2.js`                              |   0.7 KB |   0.8 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `modifiers.esm-667a798d9391.js`                         |   0.6 KB |   0.9 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `about-you-summary-3a9ce93984ce.css`                    |   0.6 KB |   0.8 KB | prettier  | 闭包 ← `chatgpt-sources-side-panel-tab-99e831d8b9d6.js`                 |
| `highlight-selectors-9d1b805d6cf4.js`                   |   0.6 KB |   0.7 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `codex-analytics-attribution-fe4d0bf2f484.js`           |   0.5 KB |   0.6 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `popcorn-electron-surface-style-244084e61ff2.css`       |   0.3 KB |   0.4 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |
| `diff-comment-card-2288e5b28f03.css`                    |   0.2 KB |   0.2 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `gate-04dc472e6f9b.js`                                  |   0.1 KB |   0.2 KB | prettier  | 闭包 ← `artifact-tab-content-shell-4199cd330d98.js`                     |
| `about-you-summary-a54997126cd8.js`                     |   0.1 KB |   0.1 KB | prettier  | 闭包 ← `chatgpt-sources-side-panel-tab-99e831d8b9d6.js`                 |
| `__vite-browser-external-c634070c2692.js`               |   0.1 KB |   0.1 KB | prettier  | 闭包 ← `artifact-tab-content.electron-f96c26739383.js`                  |

### `previews/`

| 文件                                                    |     原始 |   格式化 | formatter | 来源     |
| ------------------------------------------------------- | -------: | -------: | --------- | -------- |
| `PopcornElectronWorkbookPanel-5e847d6e6323.js`          | 472.2 KB | 595.8 KB | prettier  | 命名规则 |
| `text-file-editor-tab-content.electron-b517f3f85a48.js` | 400.2 KB | 635.2 KB | prettier  | 命名规则 |
| `PopcornElectronDocumentPanel-5d398f8ff53f.js`          | 394.0 KB | 680.7 KB | prettier  | 命名规则 |
| `artifact-source-bootstrap-b7ba40702025.js`             | 330.1 KB | 569.1 KB | prettier  | 命名规则 |
| `file-editor-theme-75aaad6f8219.js`                     | 250.3 KB | 410.3 KB | prettier  | 命名规则 |
| `artifact-tab-content.electron-f96c26739383.js`         | 194.0 KB | 314.7 KB | prettier  | 命名规则 |
| `PopcornElectronPresentationPanel-cdef5ec57678.js`      | 146.8 KB | 231.8 KB | prettier  | 命名规则 |
| `pdf-preview-panel-9569314b064c.js`                     |  57.2 KB |  97.9 KB | prettier  | 命名规则 |
| `docx-preview-panel-7d038fc9f715.js`                    |  47.5 KB |  77.6 KB | prettier  | 命名规则 |
| `cloud-browser-side-panel-f0ee6b4ea444.js`              |  27.5 KB |  47.0 KB | prettier  | 命名规则 |
| `notebook-preview-panel-93b0bdcffea7.js`                |  21.6 KB |  33.9 KB | prettier  | 命名规则 |
| `cloud-browser-preview-d0a1db7d6b58.js`                 |   9.4 KB |  16.8 KB | prettier  | 命名规则 |
| `PopcornElectronDocumentPanel-35506d4b37aa.css`         |   9.0 KB |  10.5 KB | prettier  | 命名规则 |
| `PopcornElectronPresentationPanel-9f81aaa00813.css`     |   7.4 KB |   8.5 KB | prettier  | 命名规则 |
| `artifact-tab-content-shell-4199cd330d98.js`            |   3.8 KB |   4.9 KB | prettier  | 命名规则 |
| `cloud-browser-preview-37854eb6b805.css`                |   3.3 KB |   4.1 KB | prettier  | 命名规则 |
| `cloud-browser-side-panel-5e03291eec4b.css`             |   2.3 KB |   2.8 KB | prettier  | 命名规则 |
| `pdf-preview-panel-cc39ef9f5913.css`                    |   1.6 KB |   1.9 KB | prettier  | 命名规则 |
| `artifact-source-bootstrap-cc781733d401.css`            |   0.4 KB |   0.5 KB | prettier  | 命名规则 |
| `text-file-editor-tab-content-bcc213e51ed5.css`         |   0.4 KB |   0.4 KB | prettier  | 命名规则 |
| `text-file-editor-tab-content.electron-bec8d2508c34.js` |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `artifact-tab-content.electron-3488fb2d509f.js`         |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `artifact-tab-content-shell-9bbfe8abde48.js`            |   0.1 KB |   0.1 KB | prettier  | 命名规则 |

### `subagents/`

| 文件                                                      |     原始 |   格式化 | formatter | 来源     |
| --------------------------------------------------------- | -------: | -------: | --------- | -------- |
| `subagent-activity-chip-group-e05e8cab2038.js`            | 462.0 KB | 736.6 KB | prettier  | 命名规则 |
| `chatgpt-subagents-panel-9fb6b306abe8.js`                 |  11.1 KB |  17.7 KB | prettier  | 命名规则 |
| `local-conversation-subagents-panel-tab-983856e8dcd2.js`  |   6.6 KB |  10.5 KB | prettier  | 命名规则 |
| `subagent-panel-c34ade213c60.js`                          |   4.5 KB |   6.8 KB | prettier  | 命名规则 |
| `subagents-b1be4b89518f.js`                               |   3.6 KB |   5.2 KB | prettier  | 命名规则 |
| `subagent-activity-chip-group-48f5d9abd486.css`           |   2.6 KB |   3.2 KB | prettier  | 命名规则 |
| `subagents-3913ad169eec.js`                               |   2.5 KB |   3.7 KB | prettier  | 命名规则 |
| `open-local-conversation-subagents-panel-84337b6e92ce.js` |   2.5 KB |   3.5 KB | prettier  | 命名规则 |
| `chatgpt-subagent-final-response-query-25bc28e7c92f.js`   |   1.1 KB |   1.6 KB | prettier  | 命名规则 |
| `subagent-row-6fc9576ba695.js`                            |   0.8 KB |   1.2 KB | prettier  | 命名规则 |
| `open-local-conversation-subagents-panel-938e4e1ca382.js` |   0.1 KB |   0.1 KB | prettier  | 命名规则 |

### `tabs/`

| 文件                                                             |     原始 |   格式化 | formatter | 来源     |
| ---------------------------------------------------------------- | -------: | -------: | --------- | -------- |
| `thread-side-panel-tab-content-3335e9fb2381.js`                  | 103.2 KB | 167.8 KB | prettier  | 命名规则 |
| `cloud-automation-detail-panel-c76d4ae4bfb4.js`                  |  58.6 KB |  96.1 KB | prettier  | 命名规则 |
| `chatgpt-sources-side-panel-tab-99e831d8b9d6.js`                 |  28.3 KB |  43.2 KB | prettier  | 命名规则 |
| `automation-side-panel-tab-e00029fe121b.js`                      |  15.7 KB |  26.7 KB | prettier  | 命名规则 |
| `local-conversation-sources-side-panel-tab-5249bb6f5cea.js`      |  11.6 KB |  21.9 KB | prettier  | 命名规则 |
| `toggle-thread-summary-panel-ce87f217123a.js`                    |   9.1 KB |  13.8 KB | prettier  | 命名规则 |
| `thread-pull-request-tab-content-e83709e82efb.js`                |   8.9 KB |  14.5 KB | prettier  | 命名规则 |
| `open-local-conversation-sources-side-panel-tab-e80692a35ed8.js` |   8.2 KB |  11.6 KB | prettier  | 命名规则 |
| `thread-goal-side-panel-content-74c075a5338e.js`                 |   6.1 KB |  11.6 KB | prettier  | 命名规则 |
| `open-thread-pull-request-side-panel-tab-b42ed7b596e4.js`        |   4.6 KB |   6.9 KB | prettier  | 命名规则 |
| `thread-panel-toggle-button-78c146087e1c.js`                     |   3.9 KB |   5.5 KB | prettier  | 命名规则 |
| `local-conversation-summary-panel-sources-model-aebd81465a06.js` |   3.8 KB |   5.4 KB | prettier  | 命名规则 |
| `open-thread-pull-request-code-tab-8c6819e3368b.js`              |   3.7 KB |   4.9 KB | prettier  | 命名规则 |
| `open-sources-side-panel-tab-a9204e8bb500.js`                    |   2.5 KB |   3.0 KB | prettier  | 命名规则 |
| `open-automation-side-panel-tab-3dba1f01fdd9.js`                 |   2.5 KB |   3.4 KB | prettier  | 命名规则 |
| `new-thread-panel-page-d38235b242d6.js`                          |   2.3 KB |   3.2 KB | prettier  | 命名规则 |
| `control-panel-caa0b12ebd31.js`                                  |   1.9 KB |   2.8 KB | prettier  | 命名规则 |
| `panel-visibility-6143cd2f2ec9.js`                               |   1.6 KB |   2.2 KB | prettier  | 命名规则 |
| `open-pull-request-fix-automation-panel-8776b11b39da.js`         |   1.5 KB |   2.0 KB | prettier  | 命名规则 |
| `chatgpt-entity-side-panel-tab-57db54c802c9.js`                  |   1.5 KB |   2.0 KB | prettier  | 命名规则 |
| `open-local-conversation-background-agent-f4fcbfbc907a.js`       |   1.4 KB |   1.7 KB | prettier  | 命名规则 |
| `thread-mcp-app-side-panel-tab-b0a7b0f6f973.js`                  |   0.5 KB |   0.7 KB | prettier  | 命名规则 |
| `thread-side-panel-tabs-609ba0f9f71f.js`                         |   0.4 KB |   0.4 KB | prettier  | 命名规则 |
| `open-local-conversation-background-agent-8e08ac10fa69.js`       |   0.3 KB |   0.4 KB | prettier  | 命名规则 |
| `thread-side-panel-tabs-15e3c4c648ed.js`                         |   0.3 KB |   0.4 KB | prettier  | 命名规则 |
| `mcp-extension-thread-side-panel-tab-a2ff5341c29d.js`            |   0.2 KB |   0.3 KB | prettier  | 命名规则 |
| `open-thread-pull-request-side-panel-tab-d4eca186b3fc.js`        |   0.2 KB |   0.3 KB | prettier  | 命名规则 |
| `plan-side-panel-e22fc1aa0e4a.js`                                |   0.2 KB |   0.3 KB | prettier  | 命名规则 |
| `open-automation-side-panel-tab-c42fe8b72e22.js`                 |   0.2 KB |   0.2 KB | prettier  | 命名规则 |
| `open-artifact-side-panel-tab-c6e8ca084e25.js`                   |   0.2 KB |   0.2 KB | prettier  | 命名规则 |
| `open-pull-request-fix-automation-panel-a4bac8d2678d.js`         |   0.2 KB |   0.2 KB | prettier  | 命名规则 |
| `thread-panel-state-5e1fd0dc8ac2.js`                             |   0.1 KB |   0.2 KB | prettier  | 命名规则 |
| `open-thread-pull-request-code-tab-67149c948952.js`              |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `open-text-file-editor-side-panel-tab.electron-cc91fbddcb18.js`  |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `thread-right-panel-state-3ca2cc72f23f.js`                       |   0.1 KB |   0.1 KB | prettier  | 命名规则 |
| `control-panel-358b5c80076c.css`                                 |   0.1 KB |   0.1 KB | prettier  | 命名规则 |

### `terminal/`

| 文件                                                              |     原始 |   格式化 | formatter | 来源     |
| ----------------------------------------------------------------- | -------: | -------: | --------- | -------- |
| `xterm-window-zoom-98caf71e2690.js`                               | 291.5 KB | 588.6 KB | prettier  | 命名规则 |
| `exec-shell-container-5907f96a4bc6.js`                            |  19.1 KB |  31.0 KB | prettier  | 命名规则 |
| `terminal-panel-e2350b6eaef2.js`                                  |  15.7 KB |  30.7 KB | prettier  | 命名规则 |
| `xterm-output-panel-80a01eb0c42b.js`                              |   4.1 KB |   6.9 KB | prettier  | 命名规则 |
| `xterm-window-zoom-241c9f83d2ce.css`                              |   2.8 KB |   3.3 KB | prettier  | 命名规则 |
| `terminal-panel-93f9fc5719bf.css`                                 |   2.5 KB |   2.7 KB | prettier  | 命名规则 |
| `exec-shell-container-cecb2c03ae9a.css`                           |   2.2 KB |   2.5 KB | prettier  | 命名规则 |
| `local-conversation-background-terminal-tab-f0f76b7da29d.js`      |   2.2 KB |   3.1 KB | prettier  | 命名规则 |
| `terminal-workspace-warning-state-9c3cd18f8e4e.js`                |   0.7 KB |   0.8 KB | prettier  | 命名规则 |
| `open-local-conversation-background-terminal-tab-c98203cf1efd.js` |   0.6 KB |   0.8 KB | prettier  | 命名规则 |
| `background-terminal-6775c46c6478.js`                             |   0.6 KB |   0.8 KB | prettier  | 命名规则 |
| `open-local-conversation-background-terminal-tab-2a86b4368654.js` |   0.1 KB |   0.2 KB | prettier  | 命名规则 |
| `terminal-panel-ded4b9a894ab.js`                                  |   0.1 KB |   0.1 KB | prettier  | 命名规则 |

> 完整来源档案路径与 SHA-256 见 [`_INDEX.json`](_INDEX.json)；字符串/i18n 目录见 [`_CATALOG.json`](_CATALOG.json)。
