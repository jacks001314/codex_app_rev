---
name: revert
description: 逆向分析本机已安装的桌面应用（Electron / MSIX / asar 打包的 Web 技术栈应用），从中还原 UI 模块结构、路由表、配置页注册表、IPC 协议与界面文案，并按模块产出可读代码与文档。使用场景：分析 Codex desktop app 或同类 Electron 应用的界面与协议、app 升级后重新采集并做版本 diff、需要把打包产物按模块落盘到 code/ 目录、需要从 minified bundle 里挖路由/设置/侧栏/侧面板等注册表。不适用：反汇编原生 .exe/.node/.wasm、动态调试或抓包、破解授权与绕过校验、读取用户凭据或隐私数据。
---

# 桌面应用逆向分析

从**已安装**的 Electron 类桌面应用里还原结构与行为，产出「按模块分目录的可读代码 + 有证据分级的文档」。

已完成的参考实现：`codex_app_rev/`（Codex desktop app 26.903 的完整分析，
以及 26.1013 的最新全量快照 `code/app-261013/`），
工具链的冻结快照在 `codex_app_rev/code/tools/`，本 skill 的 `scripts/` 是可复用的通用副本。
**开始新目标前，先读一遍 `codex_app_rev/README.md` 看最终产物长什么样。**

## 一条最重要的认知

> minified 代码丢掉了标识符，但**保留了每一个字符串字面量**。

生产包不含 sourcemap（`//# sourceMappingURL` 指向不存在的 `.map`），函数名/变量名永久丢失，
不要试图还原控制流的"原名"。真正的高价值信号是字符串，尤其是 i18n 描述符：

```js
{ id: "settings.general.followUpQueueMode.interrupt",
  defaultMessage: "Steer",
  description: "Option label for applying a follow-up message to the active Codex run instead of queuing it" }
```

**id 会骗人**（这里 id 写着 `interrupt`，语义却是"不打断"），`defaultMessage` 只是标签，
只有 `description` 是开发者写给翻译者的**意图说明**。一次分析里最重要的突破几乎都来自
批量收割这类描述符，而不是死磕某个函数的控制流。

## 硬约束（不可协商）

1. **只读**。绝不写入安装目录（Windows 的 `C:\Program Files\WindowsApps\*` 由系统管理）。
   所有产物写到工作区内的目标目录，中间产物写到 gitignore 的 `.work/`。
2. **隐私边界**。不读凭据（`auth.json`、keychain、token）、不打开任何 `.sqlite` /
   `settings.dat` / 日志正文 / 会话缓存。这些只允许记录**文件名与大小**。
   文档里要显式声明这条边界（见 `references/deliverables.md` 的采集边界表）。
3. **不越界**。目标是"理解结构"，不是破解。不反汇编原生二进制，不做授权绕过，
   不协助规避许可或校验。
4. **升级前先存档**。MSIX/自动更新会直接替换整个版本目录，旧包不可恢复。
   做任何 diff 之前，先对**当前**版本跑一次 `inventory.mjs` 存档；
   只记几个文件名是不够的（上一次分析就因此丢了 diff 基线）。

## 八阶段流程

概览如下，每阶段的命令模板与判定标准见 [references/workflow.md](references/workflow.md)。

| #   | 阶段             | 产出                                           | 关键动作                                                           |
| --- | ---------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| 0   | 定位与固定身份   | `manifest.json`                                | 从**进程列表**反查安装路径，而不是猜目录；记录版本、hash、能力声明 |
| 1   | 盘点容器         | `inventory.json`                               | 解析 asar 头部拿全量清单，**不要盲目解包**（可能 300 MB）          |
| 2   | 定模块taxonomy   | `module-map.json`                              | 先看 chunk 名的分布再定规则；规则匹配**去掉 hash 的名字**          |
| 3   | 抽取 + 格式化    | `code/<module>/`                               | 分体积两档：Prettier（≤1.2 MB）/ 自带 light formatter（更大）      |
| 4   | 收割字符串       | `_CATALOG.json`、`_catalog/i18n-messages.json` | 这一步之后才谈得上"理解"                                           |
| 5   | 猎取注册表       | 路由表、设置页表、tab 表、导航表               | 数据驱动 UI 的静态表都藏在共享 bundle 里                           |
| 6   | 精读高信号 chunk | 文档草稿                                       | 先 distill 降噪，再**完整读完**小文件（<10 KB 的往往全是逻辑）     |
| 7   | 写文档           | `*.md`                                         | 每条结论标证据等级 A/B/C，区分"代码里的判定条件"与"实际可见"       |
| 8   | 自检             | —                                              | 链接可达、无重复 chunk、文档数字与索引一致、工具语法通过           |

阶段 4 和 5 是**产出质量的决定因素**。只做 1–3 得到的一堆压缩代码基本没有阅读价值。

## 立刻会踩的坑

完整版（16 条，含修法）见 [references/traps.md](references/traps.md)。这四条几乎必踩：

1. **PowerShell 会吃掉 `node -e` 里的转义**。`node -e "...\"...\""` 与反引号在
   PowerShell 里必坏，且**整个脚本会先解析后执行**——一处语法错就什么都不跑。
   规则：凡是超过一行的分析/补丁脚本，一律 `Set-Content` 成 here-string 文件再 `node file.mjs`。
2. **行式 grep 对 minified bundle 无效**。一个 10 MB 文件可能就一行，
   `Select-String` / `rg -n` 要么吐出几千字符要么丢掉全部上下文。用 `scripts/ctx.mjs`
   做**字符窗口**检索（命中点前 90 / 后 220 字符）。
3. **Prettier 在多兆字节压缩文件上会卡死或 OOM**。必须有体积阈值 + 兜底格式化器
   （`scripts/lightformat.mjs`：只插入换行与缩进，绝不改写 token，因此与原文件 1:1 可 diff）。
4. **rolldown 会生成 0 字节再导出 shim**。`general-settings-5a1b38565b24.js` 只有三行，
   真正实现是 `general-settings-9d83727e851d.js`。按 chunk 名找实现会踩空；
   解析时必须**递归跟随 shim**，且跳过 `rolldown-runtime` / `app-initial` / `app-primary`
   （否则会把运行时误认成实现）。

## 工具

`scripts/` 是零第三方依赖的通用工具集（唯一外部依赖是 Prettier，且**优先复用仓库里已有的**，
例如 `desktop_app/node_modules/prettier`，不要 `npm install`）。逐个工具的用法、
实现要点与已知边界见 [references/toolchain.md](references/toolchain.md)。

```
asar.mjs                 ASAR 读取库（按偏移定位，不把整个档案载入内存）
asar-cli.mjs             ls / tree / cat / get / pull / grep
inventory.mjs            全量清单 → JSON（后续所有统计的输入，避免反复解析大档案头）
lightformat.mjs          兜底格式化器（词法安全，不会在字符串/模板/正则/注释里断行）
distill.mjs              阅读降噪：折叠内联 SVG 图标、path 数据、data URI、class soup
ctx.mjs                  字符窗口检索
catalog.mjs              每模块字符串目录（i18n 描述符 + 字面量 + 属性名 + import 图）
harvest-messages.mjs     全局 i18n 目录（跨模块 + 共享 bundle）
extract-modules.mjs      抽取主流程（种子规则 + import 闭包 + 并行格式化 + 陈旧文件清理）
module-map.example.json  分类规则示例（Codex 的实例，换目标要重写）
registry-hunt.example.mjs 注册表还原示例（Codex 设置页的实例）
```

`extract-modules.mjs` 是**幂等**的：每次运行先按当前 plan 清理模块目录下的陈旧 `.js`/`.css`
（保留 `README.md` / `_INDEX.json` / `_CATALOG.json` 等 authored/generated 文件）。
改了规则直接重跑，不会留下上一次运行的孤儿文件或跨子目录的重复。

## 产出约定

目录布局、`_INDEX.json` / `_CATALOG.json` 的字段、文档的证据分级（A 安装包直接证据 /
B 本仓库源码 / C 结构推断）与必备章节，见 [references/deliverables.md](references/deliverables.md)。

一句话原则：**文档里每一条断言都要能指到一个 chunk 路径或一段字面量**；
推断出来的行为必须显式标 C 级，不要和 A 级混写。

## 相关

- Electron / MSIX 包的解剖与"东西都在哪"：[references/electron-anatomy.md](references/electron-anatomy.md)
- 如何读 rolldown + React Compiler 产物、如何猎取注册表：[references/reading-bundles.md](references/reading-bundles.md)
- 本仓库项目总纲：`$project`；Go 编码规范：`$code`
