# codex 插件能力探活

验证「把插件运行时委托给 codex」这条路线是否成立：节点实际 spawn 的 codex 二进制
**是否实现了**插件/MCP/技能相关 RPC，以及在真实调用下**是否被 gate 拦住**。

## 复跑

```powershell
node codex_app_rev/probe/plugin-rpc-probe.mjs  <codex.exe 路径> [工作目录]   # RPC 能力探活
node codex_app_rev/probe/plugin-config-probe.mjs       <codex.exe 路径> [工作目录]   # local 来源的声明式配置
node codex_app_rev/probe/plugin-git-config-probe.mjs   <codex.exe 路径> [Git 来源]   # Git 来源在 config.toml 里的键名
node codex_app_rev/probe/plugin-git-declarative-probe.mjs <codex.exe 路径> [Git 来源] [插件标识]
node codex_app_rev/probe/plugin-mirror-usability-probe.mjs <codex.exe 路径> <CODEX_HOME> [插件标识]   # 节点产出的镜像能不能用

# 电脑操控（computer use）接线探活，与插件无关，详见 ../computer-use.md §5.4
node codex_app_rev/probe/hooks-config-probe.mjs   <codex.exe 路径>   # hooks 段在 config.toml 里的形状 + 信任门控
node codex_app_rev/probe/turn-ended-probe.mjs    <codex.exe 路径>   # 打断回合时 codex 到底会不会调 cua_repl.turn_ended
node codex_app_rev/probe/mcp-reload-probe.mjs    <codex.exe 路径>   # config/mcpServer/reload 到底重读什么（Q1–Q5）
node codex_app_rev/probe/mcp-oauth-probe.mjs     <codex.exe 路径>   # MCP OAuth 登录链路与凭据复用边界（Q1–Q6）
```

前四个脚本自带 fixture，只在临时目录里读写，**不使用也不修改用户真实的 `~/.codex`**，
可安全反复执行。后两个脚本会访问网络（默认来源
`hashgraph-online/awesome-codex-plugins`，223+ 插件）；脚本会通过 `GIT_CONFIG_*`
环境变量给 git 子进程打开 `core.longpaths`，否则 Windows 上长路径仓库 checkout 会失败。
最后四行是电脑操控 / MCP 接线探针，同样自带 fixture、只在临时目录里读写、不需要网络。
`plugin-mirror-usability-probe.mjs` 只读传入的 `CODEX_HOME`（codex 自己会往它的
`plugins/cache` 写物化结果），配套 `syntropy_node/agent/plugin_materialization_live_test.go` 使用。

## 探活结论一：RPC 能力（codex 0.154.0，2026-09-16）

本机 `desktop_app/.cache/codex/0.154.0/win32-x64/codex-windows-amd64.tgz` 内的
`codex.exe` 报告 `codex-cli 0.154.0`。**18/18 调用全部成功**，无方法缺失、无鉴权拦截。

| 能力                 | RPC                                                 | 结果                                                               |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| 方法集               | `app-server generate-json-schema`                   | 自报 **97** 个方法，含全部 `plugin/*`、`marketplace/*`、`skills/*` |
| 注册本地 marketplace | `marketplace/add {source}`                          | OK，返回 `installedRoot`、`alreadyAdded`                           |
| 安装插件             | `plugin/install {pluginName, marketplacePath}`      | OK，返回 `authPolicy`、`appsNeedingAuth`                           |
| 已装清单 / 详情      | `plugin/installed`、`plugin/list`、`plugin/read`    | OK，`plugin/read` 含 `id`/`enabled`/`version`/`source`/`interface` |
| 对账                 | `plugin/reconcile {reason}`                         | OK，返回 `changedPlugins`、`failedMaterializationRemotePluginIds`  |
| 卸载 / 移除          | `plugin/uninstall {pluginId}`、`marketplace/remove` | OK                                                                 |
| 插件内 skill 生效    | `skills/list`                                       | 插件 skill 以 **`<插件名>:<技能名>`** 命名空间出现                 |
| 插件内 MCP 生效      | `mcpServerStatus/list`                              | 返回 `probe-echo`，且带 **`pluginId`** 归属                        |
| 免拷贝共享技能       | `skills/extraRoots/set {extraRoots}`                | OK；普通技能目录产出**原名**（`probe-plain`，无命名空间）          |
| 技能级开关           | `skills/config/write {enabled, name}`               | OK，返回 `effectiveEnabled`                                        |

**能力门控（`experimentalFeature/list`，共 140 项）**：`plugins` = **stable/true**、
`apps` = stable/true、`hooks` = stable/true、`remote_plugin` = stable/true；
`recommended_plugins` = stable/false、`enable_mcp_apps` = underDevelopment/false。
**插件能力未被关闭**，无需等待 gate 放开。

## 探活结论二：声明式配置只在 `local` 来源上生效

`plugin-config-probe.mjs`（本地 fixture marketplace）证明：**手写
`<CODEX_HOME>/config.toml` 的 `[marketplaces.*]` + `[plugins."<id>@<marketplace>"]`
两段，不调 `marketplace/add`、不调 `plugin/install`，插件内容就会物化到
`<CODEX_HOME>/plugins/cache/<marketplace>/<plugin>/<version>/`，插件技能随即
出现在 `skills/list`**。把 `enabled` 改成 `false` 后 `plugin/read` 回读为 false、
`skills/list` 不再出现该插件技能。`marketplace/add` 重复注册同一来源会报
`-32600: marketplace 'X' is already added from a different source` —— 配置里已有声明时
不要再调。

> **更正（2026-09-16 晚，见结论四）**：这条结论原先记成「`plugin/reconcile` 会物化」，
> 是探针顺序造成的误判 —— 该用例在 `plugin/reconcile` 之前先调了 `plugin/list`，
> 真正干活的是那一次。`plugin/reconcile` 单独跑不会复制任何内容。

`plugin-git-declarative-probe.mjs` 把同一套做法用在真实 Git 来源上，暴露出关键差异：

| 场景                                                     | 结果                                                                                                                                                                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 声明 `source_type = "git"`，只写 config.toml             | `plugin/list` **看不到**该来源；stderr 出现 `failed to load plugin: plugin is not installed`（路径 `<HOME>/plugins/cache/<mp>/<plugin>`）；`plugin/reconcile` 返回 `changedPlugins: []`，**不拉取内容** |
| 同上，再补一次 `marketplace/add`                         | 来源被克隆到 `<HOME>/.tmp/marketplaces/<name>` 并在 `plugin/list` 可见，但插件仍未安装（`plugin/installed` 仍为空，`changedPlugins: []`）                                                               |
| 把同一份内容镜像成本地目录，声明 `source_type = "local"` | `plugin/reconcile` 立刻物化：`plugin/installed` 出现 `<plugin>@<marketplace>`，`plugins/cache/<mp>/<plugin>/<version>/` 生成                                                                            |

两条附带结论：

- **`[plugins."<id>"]` 的 key 必须是 `<插件名>@<marketplace>`**：只写插件名时声明被忽略，
  reconcile 无任何变化。
- 对比体积：codex 自己克隆（per-agent、完整检出）**190.7 MB / 10626 文件**；
  节点侧 sparse 镜像（`.agents/plugins` + 单个插件目录）**3 MB / 58 文件**。

**因此节点侧的插件物化采用「节点级共享镜像 + local 声明」**：
`syntropy_node/agent/plugin_marketplace.go` 把 Git 来源 sparse 检出到
`<codex homes root>/plugin-mirrors/<marketplace>-<hash>`，config.toml 里声明
`source_type = "local"` 指向该镜像，多个 Agent 共用一份；spawn 后调
`plugin/list`（**不是** `plugin/reconcile`，见结论四）让 codex 物化到 per-agent
`plugins/cache`，并按 `installed` 轮询确认。

## 探活结论三：Git 来源在 config.toml 里的键名

`plugin-git-config-probe.mjs` 让 codex 自己 `marketplace/add` 一个真实 Git 来源，再读回
它写出的配置段，实测键名如下（**注意 ref 的键是 `ref`，不是 RPC 参数里的 `refName`**）：

```toml
[marketplaces.awesome-codex-plugins]        # RPC 参数 refName=main、sparsePaths=[".agents/plugins","plugins"]
source_type = "git"
source = "https://github.com/hashgraph-online/awesome-codex-plugins.git"
ref = "main"
sparse_paths = [".agents/plugins", "plugins"]
```

- `sparse_paths` **必须覆盖 `.agents/plugins`**（marketplace 清单所在目录）：
  sparsePaths 只给 `["plugins"]` 时 `marketplace/add` 报
  `-32600: invalid marketplace file ...: marketplace root does not contain a supported manifest`。
  同理，只有清单没有插件目录时，`plugin/reconcile` 也无法物化该插件。
- 二进制里的配置结构（`MarketplaceConfig`）字段为
  `source_type` / `source` / `ref` / `sparse_paths` / `discoverables` / `disabled_tools` /
  `last_updated` / `last_revision`；`ref_name` 只出现在 RPC 参数 `AddMarketplaceArgs`
  与 `InstalledMarketplaceMetadata` 中，**不是** config.toml 的键。

## 探活结论四：物化入口是 `plugin/list`，`plugin/reconcile` 不复制内容（2026-09-16 晚）

用户报「注册插件库失败」后重查这条链路时发现的：`plugin/reconcile` **不是**物化入口。
用同一个 `CODEX_HOME`（节点产出的真镜像 + `source_type = "local"` 声明）逐段对照：

| 只调这一个 RPC                 | `plugins/cache` 内容 | `skills/list` 里的插件技能    | `plugin/installed`      |
| ------------------------------ | -------------------- | ----------------------------- | ----------------------- |
| `plugin/reconcile`（轮询 60s） | 始终 0 字节          | 不出现                        | 空                      |
| `plugin/list`                  | 1s 内落盘 685,358 B  | 出现 3 个 `<插件名>:<技能名>` | 可见且 `installed=true` |
| `plugin/install`               | 同上                 | 同上                          | 同上                    |

补充事实：

- 物化是**异步**的：`plugin/list` 返回时 `installed` 可能还是 false，约 1s 后才变 true，
  所以判定「可用」必须轮询 `installed`（或 cache 里的字节数），不能只看第一拍。
- 物化结果**持久**：内容进了 `plugins/cache` 之后，下一次 spawn 一启动技能就在
  （实测 t=173ms 即可见），后续会话不必再触发。
- `enabled = false` 由加载器直接生效，技能立刻消失（cache 目录不删）；`plugin/reconcile`
  在这条路径上也是可有可无的。
- 镜像里带不带 `.git` 不影响物化（两种都实测过）。

`plugin-mirror-usability-probe.mjs` 把这件事做成两个阶段：阶段 A 只调
`plugin/reconcile` 并轮询（预期结论「不物化」），阶段 B 调 `plugin/list` 再轮询
（预期结论「可用」）。节点侧对应修复在
`syntropy_node/agent/runtime_driver.go` 的 `reconcileAgentPlugins`
（reconcile → list → `waitForCodexPlugins` 轮询确认）。

## 探活结论五：Master 崩溃与插件清单里的技能声明

同一轮里用户那份 503 的根因不在 codex，而在 Master：
`marketplace_document.go` 的 `manifestSkills` 在插件清单**没有可用 skills 声明**、
插件目录下**又没有 `skills/` 目录**时，用相同参数递归调用自己，`stack overflow`
把 Master 进程打崩；Master 一死，app-server 的 gRPC 连接被重置，前端就报
`HTTP 503: ... An existing connection was forcibly closed by the remote host`。

`hashgraph-online/awesome-codex-plugins` 的 226 个插件里有 21 个会命中。回归用例见
`syntropy_master/handle/plugin/marketplace_document_test.go`。

## 探活结论六：电脑操控的回合结束 hooks（打断接线）

这一组探针与插件无关，回答的是「用户点停止之后，codex 怎么告诉 cua_repl 别再注入输入」。
结论细节与代码落点见 [../computer-use.md](../computer-use.md) §5.4，这里只记探针本身：

| 探针                     | 问题                                                        | 结论                                                                                                                                                                                             |
| ------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hooks-config-probe.mjs` | config.toml 里怎么写才被认成 hook？新 hook 怎么才算被信任？ | `[hooks]` 直挂 Pascal 事件名；kebab 与双层 `hooks.hooks` 都读不到。信任是 `hooks.state."<hook key>"` + `trusted_hash`，`keyPath` 必须整体加引号                                                  |
| `turn-ended-probe.mjs`   | 打断一个回合时，codex 会真的调 `cua_repl.turn_ended` 吗？   | untrusted 时**根本不进入执行**（一条 hook run 都不报）；信任后 `hook/completed` 报 `status=completed`，假 cua_repl 收到 `turn_ended{hook_event_name=Interrupt, session_id=<thread id>, turn_id}` |

第二行里最值得记的两点：信任门控是硬门（untrusted 不执行、不产生 hook run），以及
`Interrupt` 的超时是 **1s**（同一份配置里 `stop`/`subagentStop` 是 600s）——这是 codex
给打断路径的默认预算，上游插件同样没有为它写 `timeout`。回归用例在
`syntropy_node/agent/computer_use_hooks_turn_live_test.go`（真 codex + 真 node_repl，
不需要模型鉴权）。

## 探活结论七：浏览器面的 CDP 直连（与插件无关）

浏览器面（见 [../computer-use.md](../computer-use.md) §8.2）没有可复用的上游服务包，落点是自己
驱动本机 Chrome/Edge，因此先验证「能不能不经任何扩展、只用 CDP 完成读屏 + 输入」。结论：
`--remote-debugging-port=0` + 独立 `--user-data-dir` → 读该目录下的 `DevToolsActivePort` →
`/json/version` 拿 `webSocketDebuggerUrl` → `Target.createTarget` →
`Target.attachToTarget{flatten:true}` → `Page.enable` / `Runtime.enable` →
`Accessibility.getFullAXTree` → `DOM.getBoxModel{backendNodeId}` 算中心 →
`Input.dispatchMouseEvent` / `Input.insertText` / `Page.captureScreenshot`，全链路跑通。

两个踩过的坑值得记：

1. `Accessibility.getFullAXTree` 的 `params` 必须**整体省略（`null`）**。传 `{"depth": 0}`
   只回 3 个节点（根 + 两个占位），看起来"页面是空的"，实际是全树被 depth 截掉了。
2. AX 节点的**可操作编号必须与渲染顺序同源**。若渲染时按过滤后的列表编号、回查时却按
   `getFullAXTree` 的原始返回下标取节点，模型看到 `0: button` 会点到 `RootWebArea`
   （它的盒模型是整页，中心落在 `(632, 402.5)` 而不是按钮的 `(41.5, 18.5)`）——点击"成功"
   但没有落到目标上。回归用例：`syntropy_node/control/browser_surface_test.go`
   （`TestRenderBrowserAX*`）与 `browser_live_test.go` 的 `TestBrowserExecutorLiveRoundTrip`。
   标签页的 **turn 作用域回收**（[../computer-use.md](../computer-use.md) §8.2）同样有进程级证据：
   `node_repl` 的 `turn_ended` 工具 → 面服务模块的 `addTurnEndedHandler` hook → 命名管道上的
   单向通知 → 节点按 turn 关闭未标记的标签页、清掉幸存者的标记。不需要模型鉴权，回归用例是
   `syntropy_node/control/browser_surface_live_test.go` 的
   `TestBrowserTurnEndedClosesTabsEndToEndWithNodeRepl`（真 node_repl + 真管道 + 真 Chrome）。

## 探活结论八：`config/mcpServer/reload` 的重读语义（与插件无关）

「设置改完对在跑 Agent 立即生效」能不能成立，只取决于一条：`config/mcpServer/reload`
重读什么、对已经在跑的线程有没有作用。`mcp-reload-probe.mjs`（codex 0.154.0）自带一个
最小 stdio MCP server 作 fixture，工具名带上进程启动时读到的 `PROBE_MARK` ——
因此工具名就是这个 server 进程「当前 env」的指纹，能区分「reload 只重读配置」和
「reload 真的重启了 server 进程」。五个结论：

| 问题                                                        | 结论                                                                   |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| Q1 config.toml 新增 `[mcp_servers.x]` 后 reload             | 进程视角与**已在跑的线程视角**都出现                                   |
| Q2 改同一段的 `env` 后 reload                               | Server 进程重启，新进程读到新 env（fixture 日志里 `start mark=` 变化） |
| Q3 删掉这一段后 reload                                      | 从清单消失，进程被回收                                                 |
| Q4 `thread/start` 的 `config` 覆盖与 config.toml 同名时谁赢 | **覆盖优先**，且 reload 换不掉                                         |
| Q5 `[[hooks.*]]` 段                                         | 同样被重读（改名 / 删除都生效，`hooks/list` 逐条变）                   |

对 Syntropy 的直接影响：`cua_repl` 与 `[[hooks.*]]` 必须写在 per-agent
`CODEX_HOME/config.toml`（`syntropy_node/agent/runtime_driver.go` 的 `renderCodexHomeConfig`），
不能走 `thread/start` 的配置覆盖（Q4 会让它永远换不掉）；节点在策略 / 端点变更后重写
config.toml 再调 reload，正在跑的 Agent 立刻看到增删。真机回归见
`syntropy_node/agent/cua_repl_reload_live_test.go`。

## 探活结论九：MCP OAuth 登录链路与凭据复用边界（与插件无关）

`mcp-oauth-probe.mjs` 自带一个「受 OAuth 保护的流式 HTTP MCP server + 授权服务器」fixture
（RFC 9728 受保护资源元数据 → RFC 8414 授权服务器元数据 → 动态客户端注册 → 授权码 + PKCE →
令牌端点），逐条固定「MCP 配置页点登录」这条链路（codex 0.154.0）：

| 问题                                                | 结论                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 未授权时怎么报                                      | `authStatus:"notLoggedIn"`、`runtimeStatus:"authenticationRequired"`，`toolsError` 里是 `Auth required` 的启动失败                                                                                                                                                                                                                                                      |
| `mcpServer/oauth/login {name, clientRegistration?}` | 返回 `{authorizationUrl}`；URL 带 `response_type=code`、`client_id`、`state`、`code_challenge`（S256）、`redirect_uri=http://127.0.0.1:<codex 选的随机端口>/callback/<随机串>`、`scope`、`resource`                                                                                                                                                                     |
| 完成回调                                            | app-server 发 `mcpServer/oauthLogin/completed {name, threadId:null, success:true}`；随后同一线程与新建线程都变 `authStatus:"oAuth"`、`runtimeStatus:"connected"` 且工具可见 —— **不需要**我们再调 `config/mcpServer/reload`（上游 UI 仍会调，属冗余而非必需）                                                                                                           |
| 凭据落点                                            | `<CODEX_HOME>/secrets/mcp_oauth.age`（age + scrypt 加密，client_id、token、issuer 都在这一个文件里；明文 token 不在任何文件里）                                                                                                                                                                                                                                         |
| `clientRegistration` 三档                           | `dcr` 与 `auto` 都走动态客户端注册（`client_name:"Codex"`、`application_type:"native"`、`token_endpoint_auth_method:"none"`、`redirect_uris` 是本地回环回调）；`cimd` 要求授权服务器元数据声明 `client_id_metadata_document_supported` 且 token 端点鉴权为 `none`，否则直接报 `MCP authorization server does not advertise CIMD with token endpoint auth method 'none'` |

顺带记录（二进制字符串，A 级）：codex CLI 自带 `codex mcp login <name>`（`--oauth-client-id` /
`--oauth-resource` / `--bearer-token-env-var` 与一次性的注册策略参数），config.toml 的
`[mcp_servers.*]` 也认 `oauth` / `oauth_resource` / `scopes` 这几个键。

**复用边界（Q6，决定 Syntropy 的形态）**：

| 检验          | 做法                                                                 | 结果                                                                                                                        |
| ------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| reuse-process | 同一个 `CODEX_HOME` 路径，换一个 app-server 进程                     | `oAuth` / `connected` —— 凭据落盘、跨进程有效                                                                               |
| share         | 只把 `secrets/mcp_oauth.age` 搬进另一个 Home                         | `notLoggedIn` —— 单个凭据文件不够                                                                                           |
| reuse-full    | 整份 `CODEX_HOME`（含 `installation_id`、各 sqlite）复制到**新路径** | `notLoggedIn`，stderr 是 `failed to read OAuth tokens from keyring: failed to load MCP OAuth tokens from encrypted storage` |

结论（B 级）：凭据与 **CODEX_HOME 路径**绑定，不能跨路径搬运。所以「一台节点登录一次、
分发给所有 Agent」这种假设在本机形态下不成立：节点侧要么**按 Agent home 各跑一次登录**
（每次一次浏览器往返），要么把 OAuth 收归自己实现（拿到明文 token 后按
`bearer_token_env_var` / `env_http_headers` 注入）。这条直接决定 Syntropy MCP 配置页
「登录」按钮的作用域。
这条探活已在仓库里被**再实现一次**作为回归：`syntropy_node/agent/mcp_oauth_live_test.go` 用
Go 的 `httptest` 起同形状的 fixture，走生产路径（`enginecodex.AgentCodex` +
`LocalRuntimeDriver.MCPAuthStatuses/MCPOAuthLogin`）跑「未授权 → 发起登录 → 命中回环回调 →
`oAuth` + 工具数非零」，`SYNTROPY_LIVE_CODEX_EXE` 门控。探针固定 codex 的行为，Go 用例固定
我们在其之上的接线；两者都绿才算这条链路成立。

## 落盘与状态归属

安装后状态**全部落在 per-agent `CODEX_HOME`**，正是节点 `writeCodexHomeConfig`
（`syntropy_node/agent/runtime_driver.go`）已经在生成的 `config.toml`：

```toml
[marketplaces.syntropy-probe]
source_type = "local"
source = '\\?\D:\...\fixture'

[plugins."probe-skill-pack@syntropy-probe"]
enabled = true
```

插件内容物化到 `<CODEX_HOME>/plugins/cache/<marketplace>/<plugin>/<version>/`，
与真实安装的 `openai-primary-runtime` 布局一致；卸载后该目录被清除。

`[plugins."<id>"]` 里的 `enabled` 是**配置项**：写 false 就等于停用，写 true 并
`plugin/reconcile` 就等于安装。因此控制面只需要维护「来源声明 + 插件标识集合」，
不需要自己实现安装/卸载。

## 对设计的意义

1. **装配可以整体委托**：skills 加载、`.mcp.json` 启动、安装/卸载/对账都有现成 RPC，
   不需要自研等价逻辑。
2. **命名空间是天然的**：插件技能为 `<plugin>:<skill>`，普通技能为原名 —— 两类来源
   可以共存且不冲突。
3. **`skills/extraRoots/set` 可替代按 agent 拷贝技能**：节点放一份共享技能镜像，
   codex 直接扫描，绕开 `bundle.go` 的 8 MB 上限与 skills × agent 的重复存储。
   注意它**不持久化**，且 app-server 会被 `IdleTimeoutSec` 回收，必须每次 spawn 重设。
4. **Git 来源必须由节点先物化成本地目录**：见结论二，声明 `source_type = "git"`
   不会被 reconcile 拉取；让 codex 自己 `marketplace/add` 又会给每个 Agent 克隆
   190 MB 级别的完整仓库。节点级共享镜像（sparse，3 MB 量级）是唯一兼顾正确性与
   磁盘/时间的做法。

## 已知限制

- `plugin/skill/read` 需要 ChatGPT 鉴权（远程插件目录），本地插件不适用。
- `marketplace/upgrade` 仅对 Git marketplace 有效，本地 marketplace 会明确报错。
- 远程插件（marketplace 清单里 `source.source = "remote"`，内容托管在 ChatGPT 后端）
  在节点侧无法物化，需要托管插件链路，本计划明确不做。
- 探针只做 RPC/配置探活，未验证多 agent 共享 `plugins/cache` 的磁盘占用与并发行为。
- 节点侧现在每次 spawn 都会 `plugin/list` + 按 `installed` 轮询：已物化的 Agent
  第一拍就返回（约一次 RPC 往返），不会因为要确认而拖慢启动。
