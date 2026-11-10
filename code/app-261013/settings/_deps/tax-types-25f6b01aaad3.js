import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  DV as n,
  EPt as r,
  HT as i,
  IDt as a,
  NV as o,
  TJ as s,
  TLt as c,
  VDt as l,
  VT as u,
  _It as d,
  dO as f,
  fO as p,
  jDt as m,
  pLt as h,
  t3 as g,
  uO as _,
  vzt as v,
  xLt as y,
  xMt as b,
  yzt as x,
} from "./app-shared-bbfeca5e5737.js";
import { DPn as S, TPn as C } from "./app-initial-5851df3f6cb1.js";
import { Fl as w, Nl as T, Pl as E } from "./app-primary-fe8a450b3b04.js";
function D(e) {
  let r = (0, A.c)(48),
    {
      available: i,
      selected: s,
      taxId: c,
      enabled: d,
      disabled: p,
      showErrors: m,
      businessName: h,
      onEnabledChange: g,
      onChange: v,
    } = e,
    y = l(),
    b = (0, j.useId)(),
    x = (0, j.useId)(),
    S = (0, j.useId)(),
    w = (0, j.useId)(),
    D = (0, j.useId)(),
    N = (0, j.useId)(),
    P = (0, j.useId)(),
    F = (0, j.useId)(),
    [I, L] = (0, j.useState)(!1),
    [R, z] = (0, j.useState)(``),
    [B, V] = (0, j.useState)(null),
    H = i[0];
  if (H == null) return null;
  let U;
  r[0] === y
    ? (U = r[1])
    : ((U = y.formatMessage({
        id: `settings.consumerBilling.taxTypeLabel`,
        defaultMessage: `Tax type`,
        description: `Label for the tax identification scheme selector in the consumer billing-information editor`,
      })),
      (r[0] = y),
      (r[1] = U));
  let W = U,
    G;
  r[2] === y
    ? (G = r[3])
    : ((G = y.formatMessage({
        id: `settings.consumerBilling.searchTaxTypes`,
        defaultMessage: `Search tax types`,
        description: `Accessible label and placeholder for filtering supported tax identification schemes in the billing-information editor`,
      })),
      (r[2] = y),
      (r[3] = G));
  let K = G,
    q;
  if (
    r[4] !== i ||
    r[5] !== h ||
    r[6] !== N ||
    r[7] !== D ||
    r[8] !== b ||
    r[9] !== p ||
    r[10] !== d ||
    r[11] !== H ||
    r[12] !== w ||
    r[13] !== y ||
    r[14] !== S ||
    r[15] !== v ||
    r[16] !== g ||
    r[17] !== I ||
    r[18] !== B ||
    r[19] !== R ||
    r[20] !== K ||
    r[21] !== s ||
    r[22] !== m ||
    r[23] !== c?.value ||
    r[24] !== P ||
    r[25] !== x ||
    r[26] !== W ||
    r[27] !== F
  ) {
    let e = R.trim().toLocaleLowerCase(),
      l = i.filter((t) => `${k(t.type)} ${t.description}`.toLocaleLowerCase().includes(e)).sort(O),
      A = m && s == null,
      j;
    r[29] !== m || r[30] !== c?.value
      ? ((j = m && !c?.value.trim()), (r[29] = m), (r[30] = c?.value), (r[31] = j))
      : (j = r[31]);
    let U = j,
      G;
    r[32] !== h?.value || r[33] !== m
      ? ((G = m && !h?.value.trim()), (r[32] = h?.value), (r[33] = m), (r[34] = G))
      : (G = r[34]);
    let J = G,
      Y;
    r[35] === g ? (Y = r[36]) : ((Y = (e) => g(e === !0)), (r[35] = g), (r[36] = Y));
    let X;
    r[37] !== b || r[38] !== p || r[39] !== d || r[40] !== Y
      ? ((X = (0, M.jsx)(u, { id: b, checked: d, disabled: p, onCheckedChange: Y })),
        (r[37] = b),
        (r[38] = p),
        (r[39] = d),
        (r[40] = Y),
        (r[41] = X))
      : (X = r[41]);
    let Z;
    r[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Z = (0, M.jsx)(a, {
          id: `settings.consumerBilling.taxIdEnabled`,
          defaultMessage: `Add tax ID`,
          description: `Checkbox enabling business tax identification on personal billing invoices`,
        })),
        (r[42] = Z))
      : (Z = r[42]);
    let Q;
    r[43] === b
      ? (Q = r[44])
      : ((Q = (0, M.jsx)(`label`, {
          className: `text-sm font-medium text-default select-none`,
          htmlFor: b,
          children: Z,
        })),
        (r[43] = b),
        (r[44] = Q));
    let $;
    (r[45] !== X || r[46] !== Q
      ? (($ = (0, M.jsxs)(f, { children: [X, Q] })), (r[45] = X), (r[46] = Q), (r[47] = $))
      : ($ = r[47]),
      (q = (0, M.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [
          $,
          d
            ? (0, M.jsxs)(M.Fragment, {
                children: [
                  h == null
                    ? null
                    : (0, M.jsxs)(_, {
                        children: [
                          (0, M.jsx)(`label`, {
                            className: `text-sm font-medium text-default select-none`,
                            htmlFor: D,
                            children: (0, M.jsx)(a, {
                              id: `settings.consumerBilling.businessName`,
                              defaultMessage: `Business name`,
                              description: `Label for the legal business name associated with a tax identification number on billing invoices`,
                            }),
                          }),
                          (0, M.jsx)(C, {
                            id: D,
                            name: `business-name`,
                            autoComplete: `organization`,
                            "aria-required": !0,
                            "aria-invalid": J,
                            "aria-describedby": J ? N : void 0,
                            disabled: p,
                            value: h.value,
                            onChange: (e) => h.onChange(e.target.value),
                          }),
                          J
                            ? (0, M.jsx)(`p`, {
                                id: N,
                                role: `alert`,
                                className: `text-sm text-danger`,
                                children: (0, M.jsx)(a, {
                                  id: `settings.consumerBilling.businessNameRequired`,
                                  defaultMessage: `Business name is required`,
                                  description: `Validation when tax identification is enabled but the legal business name for billing invoices is empty`,
                                }),
                              })
                            : null,
                        ],
                      }),
                  (0, M.jsxs)(_, {
                    children: [
                      (0, M.jsx)(`label`, {
                        className: `text-sm font-medium text-default select-none`,
                        htmlFor: x,
                        children: (0, M.jsx)(a, {
                          id: `settings.consumerBilling.taxTypeLabel`,
                          defaultMessage: `Tax type`,
                          description: `Label for the tax identification scheme selector in the consumer billing-information editor`,
                        }),
                      }),
                      (0, M.jsx)(T, {
                        portalContainer: B,
                        disabled: p,
                        open: I,
                        onOpenChange: (e) => {
                          (L(e), e && z(``));
                        },
                        contentClassName: `w-[var(--radix-popover-trigger-width)]`,
                        contentMaxHeight: `tall`,
                        triggerButton: (0, M.jsxs)(t, {
                          id: x,
                          ref: (e) => V(e?.closest(`[data-stripe-checkout-dialog]`) ?? null),
                          type: `button`,
                          color: `outline`,
                          size: `dialog`,
                          radius: `small`,
                          className: `w-full justify-between`,
                          role: `combobox`,
                          "aria-label": W,
                          "aria-expanded": I,
                          "aria-haspopup": `listbox`,
                          "aria-controls": I ? S : void 0,
                          "aria-invalid": A,
                          "aria-describedby": A ? P : void 0,
                          disabled: p,
                          children: [
                            (0, M.jsx)(`span`, {
                              className: `truncate`,
                              children: s == null ? W : k(s.type),
                            }),
                            (0, M.jsx)(o, {}),
                          ],
                        }),
                        children: (0, M.jsxs)(E.Root, {
                          label: W,
                          children: [
                            (0, M.jsx)(E.Input, {
                              "aria-label": K,
                              placeholder: K,
                              value: R,
                              onValueChange: z,
                            }),
                            (0, M.jsxs)(E.List, {
                              id: S,
                              children: [
                                l.map((e) =>
                                  (0, M.jsx)(
                                    E.Item,
                                    {
                                      value: e.type,
                                      rightIcon: e.type === s?.type ? (0, M.jsx)(n, {}) : void 0,
                                      onSelect: () => {
                                        (v({
                                          type: e.stripe_type,
                                          country: e.country,
                                          country_specific_type: e.type,
                                          value: c?.value ?? ``,
                                        }),
                                          L(!1));
                                      },
                                      children: (0, M.jsxs)(`div`, {
                                        className: `flex flex-col gap-0.5`,
                                        children: [
                                          (0, M.jsx)(`span`, {
                                            className: `font-medium`,
                                            children: k(e.type),
                                          }),
                                          (0, M.jsx)(`span`, {
                                            className: `text-secondary`,
                                            children: e.description,
                                          }),
                                        ],
                                      }),
                                    },
                                    e.type,
                                  ),
                                ),
                                l.length === 0
                                  ? (0, M.jsx)(`p`, {
                                      role: `status`,
                                      className: `p-3 text-sm text-secondary`,
                                      children: (0, M.jsx)(a, {
                                        id: `settings.consumerBilling.noMatchingTaxTypes`,
                                        defaultMessage: `No matching tax types`,
                                        description: `Empty search result in the consumer billing editor's tax identification scheme selector`,
                                      }),
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                      }),
                      A
                        ? (0, M.jsx)(`p`, {
                            id: P,
                            role: `alert`,
                            className: `text-sm text-danger`,
                            children: (0, M.jsx)(a, {
                              id: `settings.consumerBilling.taxIdTypeRequired`,
                              defaultMessage: `Please select a tax ID type`,
                              description: `Validation in the consumer billing editor when tax identification is enabled but its scheme is missing`,
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, M.jsxs)(_, {
                    children: [
                      (0, M.jsx)(`label`, {
                        className: `text-sm font-medium text-default select-none`,
                        htmlFor: w,
                        children: (0, M.jsx)(a, {
                          id: `settings.consumerBilling.taxId`,
                          defaultMessage: `Tax ID`,
                          description: `Label for the business tax identification number on consumer billing invoices`,
                        }),
                      }),
                      (0, M.jsx)(C, {
                        id: w,
                        name: `tax-id`,
                        autoComplete: `off`,
                        "aria-required": !0,
                        "aria-invalid": U,
                        "aria-describedby": U ? F : void 0,
                        disabled: p,
                        value: c?.value ?? ``,
                        placeholder:
                          s?.placeholder ??
                          y.formatMessage({
                            id: `settings.consumerBilling.taxId`,
                            defaultMessage: `Tax ID`,
                            description: `Label for the business tax identification number on consumer billing invoices`,
                          }),
                        onChange: (e) => {
                          let t = s ?? H;
                          v({
                            type: t.stripe_type,
                            country: t.country,
                            country_specific_type: t.type,
                            value: e.target.value,
                          });
                        },
                      }),
                      U
                        ? (0, M.jsx)(`p`, {
                            id: F,
                            role: `alert`,
                            className: `text-sm text-danger`,
                            children: (0, M.jsx)(a, {
                              id: `settings.consumerBilling.taxIdRequired`,
                              defaultMessage: `Tax ID is required`,
                              description: `Validation in the consumer billing editor when tax identification is enabled but its number is empty`,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              })
            : null,
        ],
      })),
      (r[4] = i),
      (r[5] = h),
      (r[6] = N),
      (r[7] = D),
      (r[8] = b),
      (r[9] = p),
      (r[10] = d),
      (r[11] = H),
      (r[12] = w),
      (r[13] = y),
      (r[14] = S),
      (r[15] = v),
      (r[16] = g),
      (r[17] = I),
      (r[18] = B),
      (r[19] = R),
      (r[20] = K),
      (r[21] = s),
      (r[22] = m),
      (r[23] = c?.value),
      (r[24] = P),
      (r[25] = x),
      (r[26] = W),
      (r[27] = F),
      (r[28] = q));
  } else q = r[28];
  return q;
}
function O(e, t) {
  return k(e.type).localeCompare(k(t.type));
}
function k(e) {
  switch (e) {
    case `ca_gst_hst`:
      return `CA GST/HST`;
    case `ca_pst_bc`:
      return `CA PST-BC`;
    case `ca_pst_mb`:
      return `CA PST-MB`;
    case `ca_pst_sk`:
      return `CA PST-SK`;
    default:
      return e.replace(`_`, ` `).toUpperCase();
  }
}
var A, j, M;
function N() {
  return (N = e(() => {
    ((A = v()), (j = x()), m(), g(), i(), w(), p(), s(), S(), (M = b()));
  }))();
}
function P(e) {
  return I.has(e);
}
function F(e, t) {
  let n = new Set(t.filter((t) => t.country === e && t.supported).map((e) => e.region));
  return t.filter((e) => n.has(e.region) && e.supported);
}
var I;
function L() {
  return (L = e(() => {
    I = new Set(
      `AE.AM.AT.AU.AZ.BD.BE.BG.BH.CA.CH.CL.CY.CZ.DE.DK.EE.EG.ES.FI.FR.GB.GE.GR.HR.HU.ID.IE.IN.IS.IT.KE.KG.KH.KR.KZ.LI.LT.LU.LV.MA.MD.MT.NG.NL.NO.NZ.PE.PH.PL.PT.RO.SA.SE.SG.SI.SK.TH.TR.TW.TZ.UA.UG.UZ.VN.ZA`.split(
        `.`,
      ),
    );
  }))();
}
function R(e, t) {
  let n = y(c(), B).safeParse(t);
  return !P(e) || !n.success ? [] : F(e, Object.values(n.data));
}
function z(e, t, n) {
  return (
    (t == null
      ? void 0
      : (e.find((e) => e.type === t.country_specific_type) ??
        e.find((e) => e.stripe_type === t.type && e.country === (t.country ?? n)))) ??
    e.find((e) => e.country === n) ??
    e[0]
  );
}
var B;
function V() {
  return (V = e(() => {
    (L(),
      r(),
      (B = h({
        type: c(),
        stripe_type: c(),
        country: c(),
        region: c(),
        supported: d(),
        description: c(),
        placeholder: c()
          .nullish()
          .transform((e) => e ?? void 0),
      })));
  }))();
}
export { N as a, D as i, R as n, V as r, z as t };
//# sourceMappingURL=tax-types-25f6b01aaad3.js.map
