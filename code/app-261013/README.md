# Codex desktop app 26.1013 逆向快照

本目录是从本机 MSIX `OpenAI.Codex 26.1013.4894.0`（应用版本 `26.1013.40934`，
build `20770`）的 `app.asar` 中抽取并格式化的代码快照，按 UI 模块分目录。

> 只读逆向产物，不是可运行工程。标识符已被压缩；相对 `import "./x.js"` 指向的是
> `webview/assets/` 里的同级 chunk，在本目录树中不一定存在。

## 规模

| 指标 | 值 |
| --- | ---: |
| 模块 | 17 |
| chunk | **2,415** |
| 原始字节 | **44,277,848**（42.2 MiB） |
| 格式化后 | **64,991,399**（62.0 MiB） |
| 全局 i18n | **21,620 条 / 3,839 组** |
| 设置 nav / slug / loader | **52 / 53 / 54** |

## 目录

| 目录 | 内容 |
| --- | --- |
| `aeon/` | dot（Aeon）：onboarding、外观、对话详情、Orbit 角色入口 |
| `app-shell/` | 窗口 chrome、路由、layout、对话框 |
| `chatgpt-surfaces/` | ChatGPT 首页、会话、GPTs、工作区、共享、通知等 `chatgpt-*` 组件 |
| `chronicle/` | Computer History 设置页、权限对话框、查询层 |
| `codex-micro/` | Work Louder 硬件（Codex Micro） |
| `composer/` | composer、队列、Quick Chat、听写 |
| `conversation/` | thread / turn / 虚拟化 / markdown / 导航 rail |
| `left-nav/` | 侧栏、Library、项目 / 文件操作 |
| `main-process/` | `.vite/build/*` 与 `native-menu-locales/` |
| `personalized/` | 个性化 Page、Appgen、App Connect、Sites、模板 |
| `settings/` | 设置外壳、52 个导航页、搜索索引、onboarding |
| `side-panel/` | 右栏 tab、预览、终端、subagents |
| `spaces/` | Spaces / Pages / Sites 的路由、侧栏、创建、共享、回收站 |
| `tasks/` | Scheduled tasks：计划编辑、运行历史、自动暂停 |
| `voice/` | Realtime Voice / 听写 / VAD / 音频 worklet |
| `workspace/` | 工作区选择、workspace agents、Popout |
| `writing/` | Writing block 编辑器、斜杠菜单、AI 工具、演示大纲 |

## 元数据

- `_MODULE_INDEX.json`：本次抽取的模块汇总、shared external refs、设置与 i18n 统计；
- `_catalog/i18n-messages.json`：全局文案目录（含开发者 `description`）；
- `<module>/_INDEX.json`：每个 chunk 的来源、原始 / 格式化字节、SHA-256、选中原因；
- `<module>/_CATALOG.json`：该模块的 i18n、import 关系、热点属性名；
- `<module>/README.md`：模块说明（新增模块已补）。

`settings/_SETTINGS_MAP.json` 是 26.1013 的设置注册表，由 `code/tools/settings-map.mjs`
生成。该脚本已适配 26.1013 的 `vQ(...)` / alias / `function` loader 格式。

## 未抽取

| 内容 | 原因 |
| --- | --- |
| `app-initial-5851df3f6cb1.js`（13.7 MB） | 路由、设置注册表、协议、全局 store |
| `app-shared-bbfeca5e5737.js`（5.5 MB） | 26.1013 新增的共享组件层 |
| `app-primary-fe8a450b3b04.js`（2.3 MB） | 主界面 / 实时语音 |
| `register-*.js`（4.6 MB） | 编辑器 / 语法运行时 |
| `runtime.worker-*.js`（3 x ~4.4 MB） | 语言运行时 |
| `visualization-*`（1,735 个 / 9.6 MB） | 用户生成的可视化产物 |
| 语言包（60+ × 2.8–5.4 MB） | 翻译数据 |
| `orbit-character-*`（约 17 MB） | dot 的角色 wasm / data / 缩略图 |
| `node_modules/`、`*.node`、`*.wasm`、字体、媒体 | 依赖与二进制资源 |

共享 bundle 的 light-format 副本在 `codex_app_rev/.work/big-261013/`，不入库。

## 重新生成

```powershell
$A = "C:\Program Files\WindowsApps\OpenAI.Codex_26.1013.4894.0_x64__2p2nqsd0c76g0\app\resources\app.asar"
$O = "codex_app_rev\code\app-261013"
$M = "codex_app_rev\code\tools\module-map-261013.json"

node codex_app_rev\code\tools\extract-modules.mjs $A $O --map $M --jobs 8 --max-beautify-bytes 1200000
node codex_app_rev\code\tools\settings-map.mjs $A $O "$O\settings\_SETTINGS_MAP.json"
```

文案收割：

```powershell
node .agents\skills\revert\scripts\harvest-messages.mjs `
  "$O\_catalog\i18n-messages.json" $O "codex_app_rev\.work\big-261013"
```

## 阅读顺序

1. `../../changelog-26.1013.md`
2. `../../spaces.md`、`../../aeon-dot.md`
3. `../../realtime-voice.md`、`../../writing-blocks.md`、`../../chronicle.md`、`../../tasks.md`
4. `../../settings-pages.md` 的 26.1013 章节
5. 各模块 `_CATALOG.json` 的 `description`
