# 全量清单存档（diff 基线）

`inventory.mjs` 对 **整个 `app.asar`** 产出的条目级清单。每个条目是
`{ p: asar 内路径, s: 原始字节, u: unpacked, d: 是否目录, x: 扩展名 }`。

**这是版本 diff 的唯一基线。** MSIX 升级会替换整个
`C:\Program Files\WindowsApps\OpenAI.Codex_<version>_...` 目录，旧 `app.asar`
事后不可恢复；没有清单就只能说「上次未记录」，无法回答「新增了什么」。

| 文件                   | 包              | 应用版本       | build   | 采集时间   | 条目数 |   大小 |
| ---------------------- | --------------- | -------------- | ------- | ---------- | -----: | -----: |
| `inventory-26903.json` | `26.903.9818.0` | `26.903.71938` | `8576`  | 2026-09-11 |  9,035 | 1.1 MB |
| `inventory-26928.json` | `26.928.3736.0` | `26.928.31416` | `12553` | 2026-10-01 | 20,982 | 2.6 MB |
| `inventory-261013.json` | `26.1013.4894.0` | `26.1013.40934` | `20770` | 2026-10-17 | 21,396 | 2.7 MB |
| `inventory-261016.json` | `26.1016.8622.0` | `26.1016.62342` | `21477` | 2026-10-23 | 21,559 | 2.8 MB |
| `inventory-261103.json` | `26.1103.4239.0` | `26.1103.32239` | `25471` | 2026-11-09 | 20,127 | 2.6 MB |

## 缺失的基线

| 版本            | 时间       | 状态                                                          |
| --------------- | ---------- | ------------------------------------------------------------- |
| `26.901.6511.0` | 2026-09-09 | 只记了 20 个 chunk 名，从未生成清单                           |
| `26.908.9136.0` | 2026-09-16 | 装过但**没跑清单**，只重抽了插件模块（`code/plugins-26908/`） |
| `26.1007.2314.0` | 2026-10-11 | 只做了浏览器扩展链路的定向分析，没有全量清单 |

这两段缺口导致 26.903 → 26.928 之间的中间态无法回填。

## 用法

```powershell
$A = "<安装目录>\app\resources\app.asar"
$S = "D:\qax\reagent\dev\git\Syntropy\.agents\skills\revert\scripts"

# 采集当前安装的清单
node "$S\inventory.mjs" $A "codex_app_rev\inventories\inventory-<版本>.json"

# 逐目录/扩展名的体积对比
node "codex_app_rev\.work\inv-diff.mjs" inventories\inventory-26903.json inventories\inventory-26928.json
node "codex_app_rev\.work\inv-diff.mjs" inventories\inventory-26928.json inventories\inventory-261013.json
node "codex_app_rev\.work\inv-diff.mjs" inventories\inventory-261013.json inventories\inventory-261016.json

# 26.1016 → 26.1103：Rspack 后不能按 chunk 名对比，改为解析 runtime 的 p.u 映射
node "codex_app_rev\code\tools\chunkmap.mjs"
node "codex_app_rev\code\tools\scan-messages.mjs"
```

对比脚本本身不入库（在 `.work/`，被 gitignore），需要时按
[changelog-26.928.md](../changelog-26.928.md) §H 重建。

> ⚠️ **下次升级前先跑一遍 `inventory.mjs`。** 这是成本最低、收益最高的一条纪律。
