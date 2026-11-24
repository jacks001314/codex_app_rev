# conversation

> 来源：`app.asar` → 26.1117 Rspack 数字 chunk；本目录 19 个文件 / raw 4.5 MB / formatted 8.2 MB，模块级文案 3872 条（662 组）。

> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。

## 文件

| 文件 | 原始字节 | 消息数 | 选中原因 |
| --- | ---: | ---: | --- |
| `728869.ecb810e6fa.js` | 657921 | 448 | namespace-score |
| `959530.b3fcf09e54.js` | 641799 | 332 | namespace-score |
| `417402.6fbe21a159.js` | 632989 | 201 | mandatory |
| `998447.00edbd509b.js` | 632976 | 361 | mandatory |
| `154721.0941ae2da5.js` | 542892 | 391 | mandatory |
| `164460.1a681a02c1.js` | 323956 | 1043 | mandatory |
| `10633.4e01be213d.js` | 201473 | 140 | mandatory |
| `825164.69e2b739ab.js` | 161713 | 90 | namespace-score |
| `80397.6b9c0244bc.js` | 153585 | 155 | namespace-score |
| `59412.a0e988e25e.js` | 133077 | 77 | namespace-score |
| `523871.1b7f261c1c.js` | 127900 | 105 | namespace-score |
| `507080.aea9f977ef.js` | 99963 | 106 | namespace-score |
| `583168.aec588739b.js` | 83397 | 84 | namespace-score |
| `254969.0ae6ab1781.js` | 71499 | 83 | namespace-score |
| `331405.23feeb730d.js` | 69523 | 63 | namespace-score |
| `312708.5c28b902bc.js` | 66915 | 89 | namespace-score |
| `827769.2fb54763d3.js` | 55918 | 0 | mandatory |
| `716164.ffe4a964da.js` | 52230 | 68 | namespace-score |
| `172184.1af762e68c.js` | 46953 | 69 | namespace-score |

## 文案命名空间

| 命名空间 | 条数 |
| --- | ---: |
| `localConversation.mcpToolActivity` | 722 |
| `chatgptConversations.gpts` | 157 |
| `codex.localConversation` | 132 |
| `localConversation.mcpToolApproval` | 101 |
| `localConversation.codexTool` | 97 |
| `localConversation.pageToolActivity` | 84 |
| `codex.cme` | 83 |
| `codex.review` | 77 |

## 开发者描述（节选）

- `businessPremiumSeatChangeSummary.addSeatList` — Add {seats}
  - Primary line of an addition row in a shared seat-change summary shown in the Business workspace Manage seats and Review purchase dialogs when one or more edited tiers increase. The addition may take effect immediately or on the next subscription billing date. The initial Manage seats dialog intentionally omits timing; only the Review purchase checkout dialog displays a separate supporting line with backend-confirmed timing. Placeholder {seats} is a localized list of one or more tier quantities, such as 1 Standard seat and 1 Premium seat. Keep Add as the single shared verb.
- `businessPremiumSeatChangeSummary.billingPeriodDecrease` — \u2013 {price}/{billingPeriod, select, yearly {yr} other {mo}}
  - Compact recurring-price decrease on the right side of a removal row in a shared seat-change summary card in the Business workspace Manage seats and Review purchase dialogs after an admin edits the workspace's seat mix. The initial Manage seats dialog intentionally omits timing; only the Review purchase checkout dialog displays a separate supporting line with backend-confirmed timing. Removals in this flow take effect on the next subscription billing date. Placeholder {price} is the localized absolute recurring decrease with up to two fractional digits, such as $20 for a monthly plan, \u20AC21.85 for a monthly plan, or $240 for an annual plan. Placeholder {billingPeriod} selects the short unit suffix: 'yearly' means a yearly billing period and all other values mean a monthly billing period. Keep the leading minus sign and abbreviated suffix because this summary is space-limited.
- `businessPremiumSeatChangeSummary.billingPeriodIncrease` — + {price}/{billingPeriod, select, yearly {yr} other {mo}}
  - Compact recurring-price increase on the right side of an addition row in a shared seat-change summary card in the Business workspace Manage seats and Review purchase dialogs after an admin edits the workspace's seat mix. The addition may take effect immediately or on the next subscription billing date. The initial Manage seats dialog intentionally omits timing; only the Review purchase checkout dialog displays a separate supporting line with backend-confirmed timing. Placeholder {price} is the localized absolute recurring increase with up to two fractional digits, such as $100 for a monthly plan, \u20AC109.24 for a monthly plan, or $1,200 for an annual plan. Placeholder {billingPeriod} selects the short unit suffix: 'yearly' means a yearly billing period and all other values mean a monthly billing period. Keep the leading plus sign and abbreviated suffix because this summary is space-limited.
- `businessPremiumSeatChangeSummary.billingPeriodPrice` — {price}/{billingPeriod, select, yearly {yr} other {mo}}
  - Compact unsigned recurring seat price in the Business workspace Review purchase dialog for a Standard-to-Premium member upgrade or an unoccupied Premium-to-Standard downgrade. It is shown for both the new tier price and the visually struck-through previous tier price. Placeholder {price} is a localized recurring price with up to two fractional digits, such as $100 for a monthly Premium seat, \u20AC109.24 for a monthly Premium seat, $25 for a monthly Standard seat, or $1,200 for an annual Premium seat. Placeholder {billingPeriod} selects the short unit suffix: 'yearly' means a yearly billing period and all other values mean a monthly billing period. Keep the abbreviated suffix because this summary is space-limited.
- `businessPremiumSeatChangeSummary.downgradePremiumToStandard` — {count, plural, one {Downgrade Premium to Standard} other {Downgrade # Premium seats to Standard}}
  - Primary line of a renewal-effective unoccupied-seat downgrade row in the Business workspace Review seat changes dialog. Workspace admins see it when the subscription preview proposes converting one or more unoccupied Premium seats into Standard seats at renewal. Placeholder {count} is the positive number of matching Premium-to-Standard downgrades and controls singular versus plural wording. For one downgrade, omit the number and the word seat; for multiple downgrades, include the localized count and plural seats. Keep this concise because it appears in a compact bordered summary card.
- `businessPremiumSeatChangeSummary.downgradePrice.new.accessibleLabel` — New Standard price: {price}/{billingPeriod, select, yearly {yr} other {mo}}
  - Screen-reader-only label for the new grouped Standard recurring price on the right side of a Premium-to-Standard downgrade row in the Business workspace Review seat changes dialog. It distinguishes the new Standard price from the struck-through previous Premium price below it. Placeholder {price} is the localized grouped recurring price with up to two fractional digits. Placeholder {billingPeriod} selects the short unit suffix: 'yearly' means a yearly billing period and all other values mean a monthly billing period.

## 复核

所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。跨版本请勿用 chunk id 比对——每周重新编号。
