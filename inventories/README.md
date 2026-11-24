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
| `inventory-261106.json` | `26.1106.6628.0` | `26.1106.51428` | `26605` | 2026-11-15 | 20,220 | 2.5 MB |
| `inventory-261117.json` | `26.1117.4957.0` | `26.1117.41037` | `29803` | 2026-11-24 | 15,862 | 1.9 MB |

## 缺失的基线

| 版本            | 时间       | 状态                                                          |
| --------------- | ---------- | ------------------------------------------------------------- |
| `26.901.6511.0` | 2026-09-09 | 只记了 20 个 chunk 名，从未生成清单                           |
| `26.908.9136.0` | 2026-09-16 | 装过但**没跑清单**，只重抽了插件模块（`code/plugins-26908/`） |
| `26.1007.2314.0` | 2026-10-11 | 只做了浏览器扩展链路的定向分析，没有全量清单 |

这两段缺口导致 26.903 → 26.928 之间的中间态无法回填。

## 已就绪但尚未生效的下一版（26.1123 runtime）

2026-11-24 10:06 装机了一个**新版 Primary Runtime**，但主程序包仍是 26.1117.4957.0：

| 包 | 版本 | 安装时间 | 文件 / 体积 |
| --- | --- | --- | --- |
| `OpenAI.CodexPrimaryRuntime.v26-1123-915-0` | `26.1123.915.0` | 2026-11-24 10:06 | 17,568 / 1,088.4 MiB |
| `OpenAI.CodexPrimaryRuntime.v26-1117-835-0`（上一版） | `26.1117.835.0` | 2026-11-21 | 22,536 / 1,371.7 MiB |

`runtime.json` 的 `bundleVersion` 从 `26.1117.11355` 变为 **`26.1123.11515`**，
`artifactToolVersion` `2.8.169` → `2.8.194`，`nativeDependencies` 重新包含 **`tectonic`**
（26.1117 主程序里它只剩 4 文件 / 46 KB）。`dependencies/` 从约 1.37 GiB 降到 1.08 GiB。

**这还不是可分析的目标**：`app.asar` 属于 `OpenAI.Codex` 包，目前没有 26.1123 的
`OpenAI.Codex` 包（`C:\Program Files\WindowsApps\OpenAI.Codex_26.1123.*` 不存在）。
记录这些是为了在升级替换前留下运行时侧的基线；主程序升级后仍须立刻跑一次 `inventory.mjs`。


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
node "codex_app_rev\code\tools\chunkmap-261117.mjs"
node "codex_app_rev\code\tools\scan-messages-261117.mjs"
```

对比脚本本身不入库（在 `.work/`，被 gitignore），需要时按
[changelog-26.928.md](../changelog-26.928.md) §H 重建。

> ⚠️ **下次升级前先跑一遍 `inventory.mjs`。** 这是成本最低、收益最高的一条纪律。

