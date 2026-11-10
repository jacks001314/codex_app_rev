# Business Hub / Ads Manager（26.1103 新增）

> 证据等级：A（路由、字面量、静态表单逻辑）。未做运行时插桩；商家/广告功能
> 需要对应账号与权限，代码存在不等于当前账号可见。
> 代码路径相对 `code/app-261103/business/`。

## 1. 路由

`182735.bb2cb0d2af.js` 定义了 Business Hub 的路由与 URL 构造器：

| 路由 | 含义 |
| --- | --- |
| `/business-hub` | 商家列表/入口 |
| `/business-hub/{businessId}/dashboard` | 概览 |
| `/business-hub/{businessId}/insights` | 洞察（默认） |
| `/business-hub/{businessId}/products` | 产品与 feed |
| `/business-hub/{businessId}/members` | 成员 |
| `/business-hub/{businessId}/agent` | Business Agent |
| `/business-hub/{businessId}/edit/{section}` | 资料编辑分区 |
| `/business-hub/{businessId}/verification/{step}` | 验证 |

路由参数名是 **`:profileId`**（`394872` 中的 routes 为
`/business-hub/:profileId/edit/:section`、`.../:profileId/agent`、
`.../:profileId/verification/:flowId`）；本文表格里的 `{businessId}` 只是占位写法。

资料编辑分区固定为：

```text
about / contact / photos / location / hours / delivery / returns
```

URL 构造器 `Ds(businessId, tab="insights", view="owner")` 会生成
`/business-hub/{encodedId}/{tab}`，`admin_view` 时追加 `?view=admin`。

## 2. 商家资料（Business Profile）

`394872.b88ad78e2a.js` 是商家资料的主编辑器（1,774 条 `businessProfiles.*` 文案）：

| 能力 | 关键文案 |
| --- | --- |
| 分类 | `about.category.option.*`（会计、农业服务、住宿、运输……） |
| 简介 | `about.businessNote` / `about.button.save` / `discard` / `retry` |
| 保存语义 | 只提交本 tab 未保存的编辑；已保存/已提交内容不受影响 |
| 审核/发布 | `button.saving` 明确“不表示审核或发布已完成” |
| 验证 | `verification.*`：电话/邮箱验证、尝试次数限制、审核中 |
| 洞察 | `insights.*` |
| 位置/营业时间/配送/退货 | `location.*`、`hours.*`、`delivery.*`、`returns.*` |

## 3. 产品 feed 与商家诊断

### 3.1 Feed 上传

`businessProfiles.feeds.*`：

- `addProducts` / `addProductsTitle`：选择或拖拽产品数据文件；
- `chooseOrDropFile`：先预览再上传；
- `confirmProducts`：提交给服务端校验与 ingestion；
- `checkStatus`：只重读上传记录，不重复触发 ingestion；
- `agreementUnavailable`：客户端的协议版本落后于服务端时，上传方法保持禁用。

### 3.2 诊断抽屉

`751190.45d443126d.js`（277 条 `merchantSettings.*`）把“已记录的诊断”和
“没有记录”区分开：

| 文案 | 含义 |
| --- | --- |
| `issueDetails.accepted` | 已接受行数；`countNotRecorded` 明确不等于 0 |
| `issueDetails.affectedRows` | 一个字段诊断影响的行数；字段计数可重叠 |
| `issueDetails.fields` | 已保存的字段级/上传级诊断 |
| `issueDetails.fix` | 基于证据的修正步骤；原因可能未知 |
| `issueDetails.description` | 不假设每次失败都需要改源文件 |

## 4. Business Agent 与 Ads Manager

`272308.2509930e34.js` 同时包含 `businessProfiles.agentBuilder.*`（95）与
`ads_manager.tools.*`（347）。

### 4.1 Agent 生命周期

| 动作 | 文案 |
| --- | --- |
| 新建 | `business_agent.action.create_agent` / `new_agent` |
| 保存草稿 | `action.save_draft` |
| 发布 | `action.publish_agent` |
| 编辑 | `action.edit` |
| 停用 | `action.disable` + 二次确认 |

停用确认的后果写得很明确：

> “Disabling this agent will cause linked ads to stop serving and existing
> conversations to stop working.”

### 4.2 自定义 Action（最多 10 个）

`business_agent.builder.actions.*`：

- 从 **OpenAPI URL / schema** 导入；
- 认证方式：`No authentication`、`API key`、`Basic`、`Bearer token`、
  `Custom header`、`OAuth`（含 PKCE、scope、token URL、token exchange method）；
- 凭据保存后隐藏（`auth.preserve`：不改认证字段则保持原值）；
- 上限：`Business Agents support up to 10 custom Actions`；
- 删除 Action 会让 agent 立即回到草稿并停止使用该 Action。

### 4.3 Agent 目录与外观

- 目录来源可以是 Linked Ads catalog（`catalog.ads`）或仅商家信息
  （`catalog.businessInfoOnly`）；
- 目录为空时，必须先通过 feed 添加产品才能预览/发布；
- 账号切换会导致目录归属变化，编辑器要求刷新而不是静默切换；
- `appearance.*` 控制 ChatGPT 频道内的 header 颜色等外观。

## 5. 商业链路（commerce）

同一轮新增/扩张的文案还包括：

| 命名空间 | 新增 | 含义 |
| --- | ---: | --- |
| `shopping.forYou` | 89 | 个性化购物/商品推荐 |
| `pricing.pageRedesign` | 78 | 定价页重构 |
| `checkout.businessReactivation` | 47 | 企业计划重新激活 |
| `CheckoutPlanSelector.businessPlanSetup` | 49 | 企业 plan 选择 |
| `settings.consumerBilling` | 4（总量 224） | 个人计费、支付方式、税号 |
| `chatgpt.checkout` | 156 | ChatGPT 结账 |

## 6. 代码地图

| 文件 | 作用 |
| --- | --- |
| `182735.bb2cb0d2af.js` | Business Hub 路由常量与 URL 构造器（8.3 MB 共享 chunk） |
| `394872.b88ad78e2a.js` | 商家资料编辑器（1,774 条文案） |
| `272308.2509930e34.js` | Business Agent builder + Ads Manager tools |
| `751190.45d443126d.js` | 商家 feed 诊断 |
| `530132.975893a91d.js` | 购物 for-you |
| `470181.906ea7d182.js` | 计费/结账（consumer billing、business plan setup） |
| `43338.069a5b9a22.js` | 定价页重构 |
| `303095.353ba45152.js` | 定价结果/plan 常量 |
| `381807.bb7917c851.js` | 商家资料相关页面 |
| `678412.6ba379eee2.js` / `84934.9d3243b2ca.js` / `738363.476973eb94.js` / `938598.aac3f49581.js` | agent builder / ads 辅助 |

## 7. 已知局限

- 没有还原 Ads Manager 的独立路由；当前证据显示它更像 Business Hub 内的
  第一方插件/工具面（`adsManager` bridge），而不是 `/ads-manager` 页面；
- 广告投放、计费、验证的真实行为依赖服务端；
- `182735` 是 8.3 MB 的共享 chunk，只做了路由与文案检索，没有逐函数精读。
