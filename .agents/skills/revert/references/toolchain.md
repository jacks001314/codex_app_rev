# 工具链

`scripts/` 下 9 个通用工具 + 2 个示例。全部零第三方依赖（Prettier 除外，且优先复用仓库已有的）。
下面 `$SKILL` = 本 skill 目录。

```
scripts/
├── asar.mjs                    库：ASAR 读取
├── asar-cli.mjs                CLI：ls / tree / cat / get / pull / grep
├── inventory.mjs               全量清单 → JSON
├── lightformat.mjs             库+CLI：兜底格式化器
├── distill.mjs                 阅读降噪
├── ctx.mjs                     字符窗口检索
├── catalog.mjs                 每模块字符串目录
├── harvest-messages.mjs        全局 i18n 目录
├── extract-modules.mjs         抽取主流程
├── module-map.example.json     分类规则示例（Codex 实例）
└── registry-hunt.example.mjs   注册表还原示例（Codex 设置页实例）
```

---

## asar.mjs — 读取库

```js
import { AsarArchive } from "./asar.mjs";
const ar = new AsarArchive("C:/.../app.asar");

ar.stat("webview/index.html"); // → { size, offset, unpacked, integrity } | null
ar.readText("webview/assets/x.js"); // → string | null（unpacked 返回 null）
ar.read("..."); // → Buffer | null
ar.extractTo("...", "/dest/path"); // 1 MB 分块流式写出，自动建父目录
for (const { path, node, dir } of ar.walk("webview/assets")) {
  /* 遍历 */
}
ar.dataOffset; // 数据区起点
ar.close();
```

**按偏移定位读取，从不把整个档案载入内存** —— 对 300 MB+ 的 asar 是硬要求。
头部偏移布局见 traps C9。

## asar-cli.mjs — 命令行

```powershell
node "$SKILL\scripts\asar-cli.mjs" <cmd> <archive> [args]

ls   [--depth N] [--all] [--filter RE] [--ext .js,.css] [--prefix p] [--limit N]
tree [--depth N]
cat  <entryPath>
get  <entryPath> <destFile>
pull <destDir> [--prefix a,b] [--ext .js] [--filter RE] [--max-bytes N] [--dry-run]
grep <regex> [--ext .js] [--filter RE] [--limit N] [--ctx N]
```

- `ls` 按大小降序，末尾打印条目数与总体积；默认只列文件，`--all` 含目录；
- `tree` 把文件归到每个祖先目录，根级文件归入合成桶 `(root)`（traps C5）；
- `get` 自动处理 `unpacked` 条目（从 `<archive>.unpacked/` 拷）；
- `grep` **每个文件只报第一处命中**，避免在压缩 bundle 上刷屏。

## inventory.mjs — 清单

```powershell
node "$SKILL\scripts\inventory.mjs" <archive> <outJson> [pathPrefix]
```

输出 `{ archive, generatedAt, count, entries: [{p, s, u, d, x}] }` + 按扩展名的体积汇总。

**这是后续所有统计的输入**，避免反复解析大档案头。也是 diff 的基线 ——
每次分析都应该提交一份（traps D1）。

## lightformat.mjs — 兜底格式化

```js
import { lightFormat } from "./lightformat.mjs";
lightFormat(minifiedSrc, { indent: "  " });
```

**只插入换行与缩进，绝不改写 token**，因此输出与原文件 1:1，可安全搜索与 diff。
维护完整词法状态，不会在这些里面断行：单/双引号串、模板串（含 `${}` 嵌套递归扫描）、
行/块注释、正则字面量（`regexAllowed()` 判定，见 traps C2）。

性能：10 MB → 12.3 MB 约 75 秒。断行策略：`{` 后换行并缩进、`}` 前换行并回缩、
`;` 后换行（`for(;;)` 内不换）、`,` 后换行（嵌套深度 ≤1 时）。
输出**不如 Prettier 好看但完全可读**，且不会破坏字符串内容 —— 这点比美观重要。

## distill.mjs — 阅读降噪

```powershell
node "$SKILL\scripts\distill.mjs" <inFileOrDir> <outDir> [--ext .js,.css] [--min-path 60] [--keep-icons]
```

五类替换，全部限定在字符串字面量内：

| #   | 目标                                               | 替换为                |
| --- | -------------------------------------------------- | --------------------- |
| 1   | 整个内联 SVG JSX 调用 `(0,x.jsx)("svg",{...})`     | `<SvgIcon 20x20/>`    |
| 2   | SVG path 数据（`d="M12 3L4 5..."`）                | `"<svg-path 1153ch>"` |
| 3   | `data:` URI                                        | `"<data-uri Nb>"`     |
| 4   | 长 base64/hex 串（≥120 字符）                      | `"<blob Nb>"`         |
| 5   | Tailwind class soup（≥12 个 kebab token 且无散文） | `"<classes N>"`       |

第 1 条的平衡扫描必须从**调用括号**开始（traps C3）。
Codex 的设置类文件能砍掉 40–56%。

**产物只用于阅读，不要入库** —— `code/` 必须保留完整格式化代码。

## ctx.mjs — 字符窗口检索

```powershell
node "$SKILL\scripts\ctx.mjs" <pattern> <fileOrDir>... [--before N] [--after N] [--limit N] [--flags gi] [--ext .js,.css]
```

默认 `--before 90 --after 220 --limit 25`。输出：

```
### app-initial-f094ef01c64d.js:374386
    …id:`settings.general.followUpQueueMode.label`,defaultMessage:`Follow-up behavior`,descrip…
```

**这是读巨型 bundle 的主要工具**，行式 grep 在这里没用（traps B6）。
`pattern` 是 JS 正则；需要断言时用 `--flags` 或改写（`rg` 的 look-around 限制不适用这里，
因为用的是 Node RegExp，但要注意 `g` flag 与 `lastIndex`）。

## catalog.mjs — 每模块字符串目录

```powershell
node "$SKILL\scripts\catalog.mjs" <moduleDir> <outJson> [--literals-out <file>]
```

抽取四类：

| 字段                              | 内容                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------ |
| `messages`                        | react-intl 描述符 `{id, text, description, files[≤4], file_count}`，按 id 排序 |
| `imports`                         | `from` → 导入名集合（Top 60），用于还原模块依赖                                |
| `hot_props`                       | 对象属性名频次 Top 250 —— **props 名全部保留**，是还原组件契约的主要线索       |
| `literal_count` / `literals_file` | 字面量条数；明细可用 `--literals-out` 分流（traps C7）                         |

## harvest-messages.mjs — 全局 i18n 目录

```powershell
node "$SKILL\scripts\harvest-messages.mjs" <outJson> <fileOrDir>...
```

跨多个输入汇总去重，按 **id 前两段**分组（`settings.general`、`composer.mode` …）。

**一定要把共享 bundle 的 light-format 产物也作为输入**，否则只能拿到零散页面的文案
（Codex：只喂 `code/` 得 ~7000 条，加上 `.work/big/` 得 **13338 条 / 1919 组**）。

输出含 `group_count` 与每组的 `count`；先看组大小排名，那就是功能密度分布。

## extract-modules.mjs — 抽取主流程

```powershell
node "$SKILL\scripts\extract-modules.mjs" <archive> <outRoot> [opts]

--inventory <f.json>        复用已有清单（否则现算）
--dry-run                   只打印计划 + 报告将清理的陈旧文件数，写 <outRoot>/_plan/plan.json
--no-closure                只要规则命中的种子，不跟 import
--closure-depth N           闭包深度（默认 1）
--max-closure-bytes N       闭包依赖的单文件体积上限（默认取 module-map 的值）
--max-beautify-bytes N      Prettier 阈值（默认 1.2 MB，超过用 lightformat）
--jobs N                    worker 数（默认 min(8, cpus-1)）
--only modA,modB            只处理指定模块
```

三阶段：**种子**（`path_rules` + `rules`）→ **闭包**（跟随 `from "./x.js"` /
`import("./x.js")` / `__vite__mapDeps([...])`，未命中规则的落 `_deps/` 并在
`selected_by` 记下 `closure:d1:<来源chunk>`）→ **并行格式化**。

产出：`<outRoot>/<module>/<subdir>/<原文件名>` + 每模块 `_INDEX.json`
（`archive_path` / `file` / `selected_by` / `raw_bytes` / `formatted_bytes` /
`formatter` / `sha256_raw`）+ `<outRoot>/_MODULE_INDEX.json`
（模块汇总、`shared_external_refs`、totals）。

**幂等**：每次运行先按 plan 清理陈旧 `.js`/`.css`，保留 `README.md`/`_INDEX.json`/
`_CATALOG.json`/`_*_MAP.json`，并删掉变空的子目录（traps C6）。

> **`--only` 的副作用**：加了 `--only modA` 之后，本该归入其他模块的闭包依赖
> 会落进 `modA/_deps/`（因为其他模块被排除了）。所以 `--only` 适合局部试跑与调试，
> **正式产物要跑全量**，否则模块边界与文件数会和全量跑不一致
> （实测 Codex 的 `workspace` 模块：全量 14 个 chunk，`--only workspace` 得到 28 个）。
> Prettier 位置通过环境变量传入（避免硬编码）：

```js
process.env.PRETTIER_ENTRY = "file:///<repo>/desktop_app/node_modules/prettier/index.mjs";
process.env.LIGHTFORMAT_ENTRY = "file:///<scripts>/lightformat.mjs";
```

worker 是内联生成的 `.cjs`（写到临时 scratch 目录，结束后删除），
所以**不需要额外的 worker 文件**，也便于单文件分发。

性能参考：691 chunk / 21 MB / 8 jobs ≈ **26 秒**。

## module-map.json — 分类规则

```jsonc
{
  "version_target": "26.903.71938", // 记录目标版本，便于追溯
  "asset_prefix": "webview/assets/", // 渲染层 chunk 的前缀
  "path_rules": [
    // 按 asar 路径前缀分类（主进程等）
    { "prefix": ".vite/build/", "module": "main-process", "subdir": "build" },
  ],
  "shared_excludes": {
    "patterns": [
      "^app-initial-",
      "^rolldown-runtime-",
      "^chunk-",
      "^(zh-CN|ja-JP|...)-[0-9a-f]{16}$",
    ],
    "max_closure_bytes": 250000, // 闭包依赖的单文件上限
  },
  "rules": [
    // 有序；首个命中生效
    { "module": "settings", "subdir": "shell", "pattern": "^settings-" },
    { "module": "settings", "subdir": "pages", "pattern": "settings|^profile-" },
    { "module": "composer", "subdir": "queue", "pattern": "^queued-message-list" },
    { "module": "side-panel", "subdir": "tabs", "pattern": "side-panel|-panel-tab" },
    { "module": "left-nav", "subdir": "sidebar", "pattern": "^sidebar-" },
    { "module": "conversation", "subdir": "thread", "pattern": "^local-conversation-thread" },
  ],
}
```

三条铁律（详见 workflow 阶段 2）：规则匹配**去 hash 的 stem**；**有序**且具体的在前；
**显式排除**噪声家族。

`scripts/module-map.example.json` 是 Codex 的完整实例（28 条规则），换目标时照它改。

## registry-hunt.example.mjs — 注册表还原示例

```powershell
node "$SKILL\scripts\registry-hunt.example.mjs" <archive> <codeRoot> <outJson>
```

Codex 设置页注册表的还原脚本，展示了完整的四步套路：

1. 找到最大的 `app-initial-*.js`（不写死文件名）；
2. 用三个稳定锚点分别提取 slug 全表、有序描述符数组、slug→lazy loader 对象
   （对象名 build 相关，所以锚定第一个键再**向后回溯**找左花括号，traps C4）；
3. **递归解析 shim**，跳过框架模块（traps B5）；
4. 对照 `codeRoot` 输出 `resolved_chunks_not_extracted` —— **自检抽取规则有没有漏**。

换目标时改的是锚点字符串和 slug 正则，套路不变。
第 4 步不要省：文档一旦引用磁盘上不存在的 chunk，读者就无法复核。
