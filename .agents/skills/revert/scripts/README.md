# scripts/ — 通用逆向工具集

零第三方依赖的 Node ESM 脚本（Node ≥ 18）。唯一外部依赖是 Prettier，
且**优先复用目标仓库里已有的**（例如 `desktop_app/node_modules/prettier`），不要 `npm install`；
Prettier 不可用时自动退回 `lightformat.mjs`。

详细用法、实现要点与已知边界见 **[../references/toolchain.md](../references/toolchain.md)**。
完整流程见 **[../references/workflow.md](../references/workflow.md)**。

| 文件                        | 类型   | 一句话                                                     |
| --------------------------- | ------ | ---------------------------------------------------------- |
| `asar.mjs`                  | 库     | ASAR 读取；按偏移定位，不把整个档案载入内存                |
| `asar-cli.mjs`              | CLI    | `ls` / `tree` / `cat` / `get` / `pull` / `grep`            |
| `inventory.mjs`             | CLI    | 全量清单 → JSON（后续统计的输入，也是 diff 基线）          |
| `lightformat.mjs`           | 库+CLI | 兜底格式化：只换行缩进，不改 token，词法安全               |
| `distill.mjs`               | CLI    | 阅读降噪：折叠内联 SVG / path / data URI / class soup      |
| `ctx.mjs`                   | CLI    | 字符窗口检索（长行 bundle 的 grep 替代）                   |
| `catalog.mjs`               | CLI    | 每模块字符串目录（i18n 描述符 + import 图 + 属性名频次）   |
| `harvest-messages.mjs`      | CLI    | 全局 i18n 目录，按 id 前两段分组                           |
| `extract-modules.mjs`       | CLI    | 抽取主流程：种子规则 + import 闭包 + 并行格式化 + 幂等清理 |
| `module-map.example.json`   | 示例   | 分类规则（Codex 26.903 的完整实例，28 条规则）             |
| `registry-hunt.example.mjs` | 示例   | 注册表还原（Codex 设置页：锚定 → 回溯 → shim 解析 → 自检） |

## 快速开始

```powershell
$SKILL = "<repo>\.agents\skills\revert"
$A = "<安装目录>\app\resources\app.asar"
$O = "<repo>\<分析目录>\code"
$W = "<repo>\<分析目录>\.work"          # 需被 gitignore 忽略

# 1. 盘点（不要跳过：先看体积分布再决定抽什么）
node "$SKILL\scripts\inventory.mjs" $A "$W\inventory.json"
node "$SKILL\scripts\asar-cli.mjs" tree $A --depth 2

# 2. 准备分类规则：以示例为底本，写到你的分析目录里（不要改 skill 内的示例）
Copy-Item "$SKILL\scripts\module-map.example.json" "$W\module-map.json"
#    编辑 $W\module-map.json 的 path_rules / rules / shared_excludes

# 3. 试跑看计划，调到各模块数量合理再正式跑（--map 指向你的规则文件）
node "$SKILL\scripts\extract-modules.mjs" $A $O --map "$W\module-map.json" --dry-run
node "$SKILL\scripts\extract-modules.mjs" $A $O --map "$W\module-map.json" --jobs 8 --max-beautify-bytes 1200000

# 4. 收割字符串（一定要把共享 bundle 也喂进去）
foreach ($m in (Get-ChildItem $O -Directory | ? { $_.Name -notin "tools","_catalog" }).Name) {
  node "$SKILL\scripts\catalog.mjs" "$O\$m" "$O\$m\_CATALOG.json" --literals-out "$W\literals\$m.json"
}
node "$SKILL\scripts\harvest-messages.mjs" "$O\_catalog\i18n-messages.json" $O "$W\big"

# 5. 检索（读巨型 bundle 用字符窗口，不要用行式 grep）
node "$SKILL\scripts\ctx.mjs" "<关键词>" "$W\big" --before 120 --after 400
```

`extract-modules.mjs` 的规则文件默认取**同目录**的 `module-map.json`；skill 里只放了
`module-map.example.json`，所以要么用 `--map <file>` 指向你自己的规则（推荐，规则跟着分析
目录走），要么把示例拷成同目录的 `module-map.json`。规则缺失时脚本会明确报错并提示这两种
做法，不会静默用空规则跑出空结果。

## 无参数运行

`asar-cli.mjs` 与 `ctx.mjs` 不带参数运行会打印自身文件头的用法注释。

## 与本 skill 的关系

`scripts/` 是**活的可复用工具集**；`codex_app_rev/code/tools/` 是 Codex 那次分析的
**冻结快照**（含目标专用的 `module-map.json` 与 `settings-map.mjs`）。

改通用工具时改这里；已经交付的分析目录里的快照不要动 —— 它是那次结论的可复核证据。
如果发现快照里的工具修过 bug 而这里没同步（或反之），以**这里**为准，
并在分析目录的文档里注明用的是哪个版本。
