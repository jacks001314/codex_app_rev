# 窗口菜单栏：真机点击验证（dev 实例 + 打包产物）

本文记录「在**真实运行的应用窗口**里点开新菜单栏、逐项验证点击效果」的一次性检查。
它补上 `window-menubar-alignment.md` §5 里那句「没有在运行中的应用里点菜单」的空白：
不改动、不重启用户当前那个打包实例，而是另起隔离实例来点。分两轮：

- §0–§4：**源码 dev 实例**（`electron-forge start`）——先证明改动本身能跑。
- §5–§6：**打包产物**（`pnpm package` 出来的 `Syntropy.exe`）——再证明发出去的包也一致。

> 更正：`window-menubar-alignment.md` §5 第 5 条仍写着「未做整包真机回归」，该句已被本文 §5 取代
> （那条属于 2026-10-01 白天写的旧状态）。

## 0. 为什么不直接点当前那个实例

桌面上正在跑的 `desktop_app/apps/desktop/out/Syntropy-win32-x64/Syntropy.exe`（19:32 构建）
是**改动之前**的产物，它的文件菜单只有 4 项；而且它正在跑一个会话任务，重新打包 + 重启会打断它。
于是换一条路：先用 `electron-forge start` 从源码起一个 dev 实例，再另外把包打到一个临时目录去回归。

两处关键事实让隔离实例可以和已有实例并存：

1. `desktop_app/apps/desktop/src/main/main.ts:393` —— `if (!app.commandLine.hasSwitch("user-data-dir"))`
   才会 `app.setPath("userData", ...)`。所以命令行带上 `--user-data-dir=<隔离目录>` 就得到一份全新配置，
   单实例锁（`main.ts:401`）也随之落在另一个 userData 上，两个实例互不干扰。
2. dev 实例首启会落在「首次配置 · 配置模型服务」向导（`renderer/ModelSetupGate.tsx`），
   点向导底部的**「暂不配置」**（`onSkip` → `setModelGateOpen(false)`）即可进入工作台，
   不需要任何模型凭据。

## 1. 点击安全性

dev 窗口与那个最大化的打包窗口重叠，直接 `SetCursorPos + mouse_event` 有可能点到前台那个窗口上。
因此改用 `.work/menu-align/probe2.ps1`：`ShowWindow(SW_RESTORE)` → `SetWindowPos(HWND_TOP)` →
`AttachThreadInput(当前线程, 前台线程/目标线程)` 三段式抢前台 → **校验 `GetForegroundWindow() == 目标窗口`**，
校验不过就不发点击（`foreground_guard`），截图一律用 `PrintWindow(hwnd, hdc, 2)`，不依赖窗口是否可见。
本次每次点击的 `foreground_guard=True`。

## 2. 验证步骤与结果（dev 实例）

dev 实例：`electron-forge start`，窗口 1456×908 @ (240,66)，DPI 96。

| 步骤 | 操作                         | 观察到的结果                                                                                                                                                                                                                         | 截图                     |
| ---- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| 1    | 进入工作台（点「暂不配置」） | 顶部出现 **文件 / 编辑 / 视图 / 帮助** 菜单栏 + 左侧折叠按钮，与静态渲染一致                                                                                                                                                         | `dev-workspace.png`      |
| 2    | 点「视图」                   | 弹层 11 行：显示/隐藏侧边栏 `Ctrl+B`、显示/隐藏右侧面板 `Ctrl+Alt+I`、—、**打开终端 `` Ctrl+` ``**、打开浏览器标签页 `Ctrl+T`、显示/隐藏浏览器 `Ctrl+Shift+B`、—、放大 `Ctrl+=`、缩小 `Ctrl+-`、实际大小 `Ctrl+0`、—、切换全屏 `F11` | `dev-view-menu.png`      |
| 3    | 点「视图 → 打开终端」        | 弹出菜单自带对话框：「打开终端 / 终端属于当前会话的工作区：先在左侧选中一条会话，再打开终端。」（当前没有选中会话，所以走提示分支，而不是点了没反应）                                                                                | `dev-terminal-click.png` |
| 4    | 点对话框「确定」             | 对话框关闭，界面回到原状                                                                                                                                                                                                             | `dev-dialog-ok.png`      |
| 5    | 点「视图 → 放大」            | 整个界面（含菜单栏）按 1.1 倍放大 —— `settings.read` + `settings.write{zoomFactor:1.1}` 生效，主进程随即 `setZoomFactor`                                                                                                             | `dev-zoom-in.png`        |

截图都在 `.work/menu-align/`（临时产物，不进版本库）。

## 3. 结论与残余

- 结构、渲染、动作三条链路在真实 Electron 窗口里都成立：菜单是新的，弹层条目与模型一致，
  点击真的改变了应用状态（弹提示 / 改缩放），不是「写着好看」。
- 打包产物回归见 §5（已补做），结论与 dev 实例一致。
- 「打开终端」在本次验证里走的是「没有选中会话」的分支（隔离配置里没有会话）。选中会话后
  App 接住 `` Ctrl+` `` 的那条分支由 `.work/menu-align/harness.mjs` 的断言覆盖，两者合起来是完整路径。
- 仍未做：**在用户正在用的那个实例上换新菜单**。需要把新包写回 `desktop_app/apps/desktop/out/`
  并重启该实例，会打断它正在跑的会话任务，所以本轮继续不动它。

## 4. 复现（dev 实例）

```powershell
# 1) 起隔离 dev 实例（原有实例不受影响）
cd desktop_app\apps\desktop
$env:NODE_ENV='development'
..\..\node_modules\.bin\electron-forge.cmd start -- --user-data-dir=%TEMP%\syntropy-menubar-verify

# 2) 抢前台 + 校验 + 点击 + 抓图（坐标相对窗口原点）
powershell -File .work\menu-align\probe2.ps1 -Handle <devHwnd> -X 162 -Y 19 -Out dev-view-menu.png

# 3) 结束：停掉 electron / forge 进程（不要动合成里的 Syntropy.exe）
```

---

## 5. 打包产物回归（2026-10-01 晚补做）

### 5.1 打包

```powershell
cd D:\qax\reagent\dev\git\Syntropy\desktop_app
$env:SYNTROPY_PACKAGE_OUT_DIR='<project>\.work\menu-align\packaged'   # 不覆盖仓库里用户自己的 out/
$env:CI='1'
npx --no-install pnpm@11.9.0 --filter @syntropy/desktop package
```

产物 `<project>\.work\menu-align\packaged\Syntropy-win32-x64\Syntropy.exe`，
启动时带上与 dev 轮相同的隔离配置目录 `--user-data-dir=%TEMP%\syntropy-menubar-verify`。
用户自己的实例（pid 29200 及其 4 个子进程）全程没有被触碰。
打包产物会自带一份本地 master（`syntropy-app-server.exe`），落在隔离的 user-data-dir 里，
与用户实例的 master 互不干扰。

### 5.2 先量标签坐标，再点

主窗口 hwnd = 267042，恢复到 1456×908 @ (240,66)。先无点击抓一帧
（`probe2.ps1 -NoClick` → `pkg-top.png`），再用 `analyze-bands.ps1` 量顶部条的墨迹带：

| 标签 | 墨迹列范围 | 中心 x |
| ---- | ---------- | ------ |
| 文件 | 60..87     | 74     |
| 编辑 | 115..141   | 128    |
| 视图 | 170..196   | 183    |
| 帮助 | 225..251   | 238    |

这条量测纠正了肉眼估的「帮助 x≈209」：按 209 点下去命中的其实是**视图**（`pkg-help-menu.png`
抓到的就是视图弹层）。四个标签的真实 pitch 是 55px（≈ 23px 盒宽 + 2px gap，折叠态左内边距 36px）。

### 5.3 逐项点开四个菜单

| 步骤 | 操作       | 观察到的结果                                                                                                                                                                                                                                         | 截图            |
| ---- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| 1    | 点「文件」 | 新建窗口 / 新聊天 `Ctrl+N` / — / 打开文件夹 `Ctrl+O` / — / 关闭窗口 `Ctrl+W`（6 行、2 条分隔线）                                                                                                                                                     | `pkg2-file.png` |
| 2    | 点「编辑」 | 撤销 `Ctrl+Z` / 重做 `Ctrl+Y` / — / 剪切 `Ctrl+X` / 复制 `Ctrl+C` / 粘贴 `Ctrl+V` / 删除 / — / 全选 `Ctrl+A` / — / 设置 `Ctrl+,`（11 行、3 条分隔线）                                                                                                | `pkg2-edit.png` |
| 3    | 点「视图」 | 显示/隐藏侧边栏 `Ctrl+B` / 显示/隐藏右侧面板 `Ctrl+Alt+I` / — / 打开终端 `` Ctrl+` `` / 打开浏览器标签页 `Ctrl+T` / 显示/隐藏浏览器 `Ctrl+Shift+B` / — / 放大 `Ctrl+=` / 缩小 `Ctrl+-` / 实际大小 `Ctrl+0` / — / 切换全屏 `F11`（12 行、3 条分隔线） | `pkg2-view.png` |
| 4    | 点「帮助」 | 文档 / 键盘快捷键 ▸ / 新功能 / — / 故障排除 / 反馈 / — / 检查更新… / 关于 Syntropy（9 行、2 条分隔线）                                                                                                                                               | `pkg2-help.png` |

四项的条目、顺序、分隔线、加速键与 `window-menubar-alignment.md` §8 的「条目 → 实现」对照表逐条一致，
与 §9 列出的有意省略项（文件里的「退出登录 / 退出」、视图里的「置顶摘要 / 导航面板 / 查找 /
上一个·下一个聊天 / 返回·前进」、帮助里的「系统状态 / 任务管理器 / 开始性能跟踪」）也对得上。

### 5.4 点击真的改变了状态

| 步骤 | 操作                 | 观察到的结果                                                                                                                                                           | 截图                           |
| ---- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 5    | 视图 → 放大          | 整个界面（含菜单栏）按 1.1 倍放大：菜单标签墨迹宽度 13px → 14–15px，中心 x 由 74/128/183/238 变为 79/139/198/258，侧栏同步变大                                         | `pkg2-zoom-in.png`             |
| 6    | 视图 → 实际大小      | 回到 100%，布局与 `pkg-top.png` 一致                                                                                                                                   | `pkg2-zoom-reset.png`          |
| 7    | 帮助 → 关于 Syntropy | 弹出模态框：「关于 Syntropy / 版本 0.3.0 / Electron 42.3.0 / 平台 win32 / 正式构建」——读的是真实 `app.getVersion()` 与 `process.versions.electron`，不是写死的占位文本 | `pkg2-about.png`               |
| 8    | 点对话框「确定」     | 模态框关闭，界面回到原状                                                                                                                                               | `pkg2-dialog-ok.png`           |
| 9    | 文件 → 关闭窗口      | 主窗口被销毁（`MainWindowHandle=0`，`PrintWindow` 只能抓到黑帧），随后手动结束该实例的进程树                                                                           | `pkg2-close-click.png`（黑帧） |

### 5.5 收尾

结束的进程：打包实例主进程 26324 + 3 个 Electron 子进程（29096 / 10312 / 22808）

- 该实例自己拉起的 `syntropy-app-server.exe`（24512）。
  用户自己的实例（pid 29200 及其 4 个子进程）未受任何影响。

### 5.6 打包回归的结论

- 打包产物里的菜单栏与 dev 实例**完全一致**：四个菜单的条目、顺序、分隔线、加速键都对得上。
- 三个动作（放大 / 实际大小 / 关于）在打包产物上都能真的改变应用状态，确认不是只有 dev 能跑。
- 仍未做：在**用户正在用的那个实例**上换新菜单（见 §3 最后一条）。

## 6. 复现（打包产物）

```powershell
# 1) 打到临时目录（不覆盖仓库里的 out/）
cd D:\qax\reagent\dev\git\Syntropy\desktop_app
$env:SYNTROPY_PACKAGE_OUT_DIR='<project>\.work\menu-align\packaged'; $env:CI='1'
npx --no-install pnpm@11.9.0 --filter @syntropy/desktop package

# 2) 起隔离实例（与用户实例并存）
& '<project>\.work\menu-align\packaged\Syntropy-win32-x64\Syntropy.exe' --user-data-dir="$env:TEMP\syntropy-menubar-verify"

# 3) 量标签 → 点菜单 → 抓图（坐标相对窗口原点）
powershell -File .work\menu-align\probe2.ps1 -Handle <hwnd> -Out pkg-top.png -NoClick
powershell -File .work\menu-align\analyze-bands.ps1 -Path pkg-top.png -X0 0 -X1 700 -Y0 4 -Y1 46 -Thresh 200
powershell -File .work\menu-align\probe2.ps1 -Handle <hwnd> -X 74 -Y 20 -Out pkg2-file.png -CropH 520 -EscapeAfter

# 4) 收尾：结束打包实例的进程树（不要动用户那个实例）
Get-CimInstance Win32_Process -Filter "Name='Syntropy.exe'" |
  Where-Object { $_.CommandLine -like '*menu-align\packaged*' } |
  ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
```

## 7. 会话导航（上一个/下一个聊天、返回/前进）的真机验证（2026-10-01 夜）

这一轮补的是视图菜单里依赖 App 会话态的四项（实现见 `window-menubar-alignment.md` §9.1）。
验证对象是 `electron-forge start` 起的 dev 实例（同一个隔离配置目录），窗口 hwnd=1380604，
1456×908 @ (240,66)。

| 步骤 | 操作                                                      | 观察到的结果                                                                                                                                                      | 截图                |
| ---- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| 1    | 展开「项目 → mtst」并点中第一条会话                       | 主区切到该会话（标题 `请你查询"云南…"`）                                                                                                                          | `dev2-sel1.png`     |
| 2    | 点「视图」                                                | 弹层多出 4 行：上一个聊天 `Ctrl+Shift+[`、下一个聊天 `Ctrl+Shift+]`、**返回（灰）** `Ctrl+[`、**前进（灰）** `Ctrl+]`；此时访问历史只有 1 条，返回/前进正确地置灰 | `dev2-view.png`     |
| 3    | 点「下一个聊天」                                          | 选中下一条会话，主区标题变成 `你好请你派生几个agent协作计算500!`                                                                                                  | `dev2-next.png`     |
| 4    | 再点「视图」                                              | 「返回」由灰变亮（历史已有 2 条），「前进」仍灰                                                                                                                   | `dev2-view2.png`    |
| 5    | 点「返回」                                                | 选中回到上一条会话                                                                                                                                                | `dev2-back.png`     |
| 6    | 发真键 `Ctrl+Shift+]`（`sendkeys2.ps1`，VK 0xDD + Shift） | 又前进到下一条 —— 证明按住 Shift 时 `event.key` 是 `{` 这个坑已被 `normalizeBracketShortcut()` 折回 `[`                                                           | `dev2-key-next.png` |
| 7    | 发真键 `Ctrl+[`（VK 0xDB，不带 Shift）                    | 后退回上一条                                                                                                                                                      | `dev2-key-back.png` |

结论：四项在真实窗口里既能点、也能按菜单上写的键位触发，置灰状态跟着清单与历史实时变化。
验证用的 dev 实例已结束（electron 27056 及其子进程、forge 与 vite 进程），用户自己的实例
（pid 29200）全程未受影响。

---

> 临时产物：`<project>\.work\menu-align\packaged`（约 200MB+，可直接删）。
> 隔离配置目录 `%TEMP%\syntropy-menubar-verify`（约 69MB，含两轮验证留下的本地 master 产物）
> 也可直接删；两轮验证期间都没有向用户自己的配置目录写入任何东西。
