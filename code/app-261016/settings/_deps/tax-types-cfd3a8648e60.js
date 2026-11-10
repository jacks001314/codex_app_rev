import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BO as t,
  CH as n,
  FBt as r,
  HFt as i,
  HO as a,
  JOt as o,
  LNt as s,
  LRt as c,
  NLt as l,
  OT as ee,
  PBt as u,
  TY as d,
  VO as f,
  VRt as p,
  XOt as m,
  Y3 as h,
  Z3 as g,
  kH as te,
  kRt as _,
  kT as v,
  okt as y,
  tkt as b,
} from "./app-shared-2feb3d4c6fcc.js";
import { $Ln as x, ZLn as S } from "./app-initial-ad16eaadf81f.js";
import { Gl as C, Kl as w, Wl as T } from "./app-primary-3e00728c2a4c.js";
function E(e) {
  return M.has(e);
}
function D(e, t) {
  let n = new Set(t.filter((t) => t.country === e && t.supported).map((e) => e.region));
  return t
    .filter((e) => n.has(e.region) && e.supported)
    .map((e) => (e.type === `hu_vat` ? { ...e, format: k, placeholder: A } : e));
}
function O(e, t) {
  let n = t.trim();
  return n.length > 0 && (e !== `hu_vat` || j.test(n));
}
var k, A, j, M, N;
function P() {
  return (P = e(() => {
    (m(),
      (k = `HU[0-9]{8}`),
      (A = `HU12345678`),
      (j = RegExp(`^${k}$`)),
      (M = new Set(
        `AE.AM.AT.AU.AZ.BD.BE.BG.BH.CA.CH.CL.CY.CZ.DE.DK.EE.EG.ES.FI.FR.GB.GE.GR.HR.HU.ID.IE.IN.IS.IT.KE.KG.KH.KR.KZ.LI.LT.LU.LV.MA.MD.MT.NG.NL.NO.NZ.PE.PH.PL.PT.RO.SA.SE.SG.SI.SK.TH.TR.TW.TZ.UA.UG.UZ.VN.ZA`.split(
          `.`,
        ),
      )),
      (N = o({
        id: `chatgpt.payments.tax_id.error.hungarian_vat_format`,
        defaultMessage: `Hungarian VAT IDs must start with HU followed by exactly 8 digits, for example HU12345678.`,
        description: `Validation error in ChatGPT checkout and billing settings when a Hungarian EU VAT ID has the wrong format. HU is a literal country prefix and HU12345678 is an example, not a registration to use. Keep both unchanged. Plain text.`,
      })));
  }))();
}
function F(e) {
  let r = (0, R.c)(49),
    {
      available: i,
      selected: a,
      taxId: o,
      enabled: s,
      disabled: c,
      showErrors: l,
      businessName: u,
      onEnabledChange: d,
      onChange: p,
    } = e,
    m = y(),
    g = (0, z.useId)(),
    _ = (0, z.useId)(),
    v = (0, z.useId)(),
    x = (0, z.useId)(),
    w = (0, z.useId)(),
    E = (0, z.useId)(),
    D = (0, z.useId)(),
    k = (0, z.useId)(),
    [A, j] = (0, z.useState)(!1),
    [M, P] = (0, z.useState)(``),
    [F, V] = (0, z.useState)(null),
    H = i[0];
  if (H == null) return null;
  let U;
  r[0] === m
    ? (U = r[1])
    : ((U = m.formatMessage({
        id: `settings.consumerBilling.taxTypeLabel`,
        defaultMessage: `Tax type`,
        description: `Label for the tax identification scheme selector in the consumer billing-information editor`,
      })),
      (r[0] = m),
      (r[1] = U));
  let W = U,
    G;
  r[2] === m
    ? (G = r[3])
    : ((G = m.formatMessage({
        id: `settings.consumerBilling.searchTaxTypes`,
        defaultMessage: `Search tax types`,
        description: `Accessible label and placeholder for filtering supported tax identification schemes in the billing-information editor`,
      })),
      (r[2] = m),
      (r[3] = G));
  let K = G,
    q;
  if (
    r[4] !== i ||
    r[5] !== u ||
    r[6] !== E ||
    r[7] !== w ||
    r[8] !== g ||
    r[9] !== c ||
    r[10] !== s ||
    r[11] !== H ||
    r[12] !== x ||
    r[13] !== m ||
    r[14] !== v ||
    r[15] !== p ||
    r[16] !== d ||
    r[17] !== A ||
    r[18] !== F ||
    r[19] !== M ||
    r[20] !== K ||
    r[21] !== a ||
    r[22] !== l ||
    r[23] !== o?.value ||
    r[24] !== D ||
    r[25] !== _ ||
    r[26] !== W ||
    r[27] !== k
  ) {
    let e = M.trim().toLocaleLowerCase(),
      y = i.filter((t) => `${L(t.type)} ${t.description}`.toLocaleLowerCase().includes(e)).sort(I),
      R = l && a == null,
      z;
    r[29] !== a?.type || r[30] !== l || r[31] !== o?.value
      ? ((z = l && !O(a?.type, o?.value ?? ``)),
        (r[29] = a?.type),
        (r[30] = l),
        (r[31] = o?.value),
        (r[32] = z))
      : (z = r[32]);
    let U = z,
      G;
    r[33] !== u?.value || r[34] !== l
      ? ((G = l && !u?.value.trim()), (r[33] = u?.value), (r[34] = l), (r[35] = G))
      : (G = r[35]);
    let J = G,
      Y;
    r[36] === d ? (Y = r[37]) : ((Y = (e) => d(e === !0)), (r[36] = d), (r[37] = Y));
    let X;
    r[38] !== g || r[39] !== c || r[40] !== s || r[41] !== Y
      ? ((X = (0, B.jsx)(ee, { id: g, checked: s, disabled: c, onCheckedChange: Y })),
        (r[38] = g),
        (r[39] = c),
        (r[40] = s),
        (r[41] = Y),
        (r[42] = X))
      : (X = r[42]);
    let Z;
    r[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Z = (0, B.jsx)(b, {
          id: `settings.consumerBilling.taxIdEnabled`,
          defaultMessage: `Add tax ID`,
          description: `Checkbox enabling business tax identification on personal billing invoices`,
        })),
        (r[43] = Z))
      : (Z = r[43]);
    let Q;
    r[44] === g
      ? (Q = r[45])
      : ((Q = (0, B.jsx)(`label`, {
          className: `text-sm font-medium text-default select-none`,
          htmlFor: g,
          children: Z,
        })),
        (r[44] = g),
        (r[45] = Q));
    let $;
    (r[46] !== X || r[47] !== Q
      ? (($ = (0, B.jsxs)(f, { children: [X, Q] })), (r[46] = X), (r[47] = Q), (r[48] = $))
      : ($ = r[48]),
      (q = (0, B.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [
          $,
          s
            ? (0, B.jsxs)(B.Fragment, {
                children: [
                  u == null
                    ? null
                    : (0, B.jsxs)(t, {
                        children: [
                          (0, B.jsx)(`label`, {
                            className: `text-sm font-medium text-default select-none`,
                            htmlFor: w,
                            children: (0, B.jsx)(b, {
                              id: `settings.consumerBilling.businessName`,
                              defaultMessage: `Business name`,
                              description: `Label for the legal business name associated with a tax identification number on billing invoices`,
                            }),
                          }),
                          (0, B.jsx)(S, {
                            id: w,
                            name: `business-name`,
                            autoComplete: `organization`,
                            "aria-required": !0,
                            "aria-invalid": J,
                            "aria-describedby": J ? E : void 0,
                            disabled: c,
                            value: u.value,
                            onChange: (e) => u.onChange(e.target.value),
                          }),
                          J
                            ? (0, B.jsx)(`p`, {
                                id: E,
                                role: `alert`,
                                className: `text-sm text-danger`,
                                children: (0, B.jsx)(b, {
                                  id: `settings.consumerBilling.businessNameRequired`,
                                  defaultMessage: `Business name is required`,
                                  description: `Validation when tax identification is enabled but the legal business name for billing invoices is empty`,
                                }),
                              })
                            : null,
                        ],
                      }),
                  (0, B.jsxs)(t, {
                    children: [
                      (0, B.jsx)(`label`, {
                        className: `text-sm font-medium text-default select-none`,
                        htmlFor: _,
                        children: (0, B.jsx)(b, {
                          id: `settings.consumerBilling.taxTypeLabel`,
                          defaultMessage: `Tax type`,
                          description: `Label for the tax identification scheme selector in the consumer billing-information editor`,
                        }),
                      }),
                      (0, B.jsx)(T, {
                        portalContainer: F,
                        disabled: c,
                        open: A,
                        onOpenChange: (e) => {
                          (j(e), e && P(``));
                        },
                        contentClassName: `w-[var(--radix-popover-trigger-width)]`,
                        contentMaxHeight: `tall`,
                        triggerButton: (0, B.jsxs)(h, {
                          id: _,
                          ref: (e) => V(e?.closest(`[data-stripe-checkout-dialog]`) ?? null),
                          type: `button`,
                          color: `outline`,
                          size: `dialog`,
                          radius: `small`,
                          className: `w-full justify-between`,
                          role: `combobox`,
                          "aria-label": W,
                          "aria-expanded": A,
                          "aria-haspopup": `listbox`,
                          "aria-controls": A ? v : void 0,
                          "aria-invalid": R,
                          "aria-describedby": R ? D : void 0,
                          disabled: c,
                          children: [
                            (0, B.jsx)(`span`, {
                              className: `truncate`,
                              children: a == null ? W : L(a.type),
                            }),
                            (0, B.jsx)(te, {}),
                          ],
                        }),
                        children: (0, B.jsxs)(C.Root, {
                          label: W,
                          children: [
                            (0, B.jsx)(C.Input, {
                              "aria-label": K,
                              placeholder: K,
                              value: M,
                              onValueChange: P,
                            }),
                            (0, B.jsxs)(C.List, {
                              id: v,
                              children: [
                                y.map((e) =>
                                  (0, B.jsx)(
                                    C.Item,
                                    {
                                      value: e.type,
                                      rightIcon: e.type === a?.type ? (0, B.jsx)(n, {}) : void 0,
                                      onSelect: () => {
                                        (p({
                                          type: e.stripe_type,
                                          country: e.country,
                                          country_specific_type: e.type,
                                          value: o?.value ?? ``,
                                        }),
                                          j(!1));
                                      },
                                      children: (0, B.jsxs)(`div`, {
                                        className: `flex flex-col gap-0.5`,
                                        children: [
                                          (0, B.jsx)(`span`, {
                                            className: `font-medium`,
                                            children: L(e.type),
                                          }),
                                          (0, B.jsx)(`span`, {
                                            className: `text-secondary`,
                                            children: e.description,
                                          }),
                                        ],
                                      }),
                                    },
                                    e.type,
                                  ),
                                ),
                                y.length === 0
                                  ? (0, B.jsx)(`p`, {
                                      role: `status`,
                                      className: `p-3 text-sm text-secondary`,
                                      children: (0, B.jsx)(b, {
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
                      R
                        ? (0, B.jsx)(`p`, {
                            id: D,
                            role: `alert`,
                            className: `text-sm text-danger`,
                            children: (0, B.jsx)(b, {
                              id: `settings.consumerBilling.taxIdTypeRequired`,
                              defaultMessage: `Please select a tax ID type`,
                              description: `Validation in the consumer billing editor when tax identification is enabled but its scheme is missing`,
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, B.jsxs)(t, {
                    children: [
                      (0, B.jsx)(`label`, {
                        className: `text-sm font-medium text-default select-none`,
                        htmlFor: x,
                        children: (0, B.jsx)(b, {
                          id: `settings.consumerBilling.taxId`,
                          defaultMessage: `Tax ID`,
                          description: `Label for the business tax identification number on consumer billing invoices`,
                        }),
                      }),
                      (0, B.jsx)(S, {
                        id: x,
                        name: `tax-id`,
                        autoComplete: `off`,
                        "aria-required": !0,
                        "aria-invalid": U,
                        "aria-describedby": U ? k : void 0,
                        disabled: c,
                        value: o?.value ?? ``,
                        placeholder:
                          a?.placeholder ??
                          m.formatMessage({
                            id: `settings.consumerBilling.taxId`,
                            defaultMessage: `Tax ID`,
                            description: `Label for the business tax identification number on consumer billing invoices`,
                          }),
                        onChange: (e) => {
                          let t = a ?? H;
                          p({
                            type: t.stripe_type,
                            country: t.country,
                            country_specific_type: t.type,
                            value: e.target.value,
                          });
                        },
                      }),
                      U
                        ? (0, B.jsx)(`p`, {
                            id: k,
                            role: `alert`,
                            className: `text-sm text-danger`,
                            children: o?.value.trim()
                              ? (0, B.jsx)(b, { ...N })
                              : (0, B.jsx)(b, {
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
      (r[5] = u),
      (r[6] = E),
      (r[7] = w),
      (r[8] = g),
      (r[9] = c),
      (r[10] = s),
      (r[11] = H),
      (r[12] = x),
      (r[13] = m),
      (r[14] = v),
      (r[15] = p),
      (r[16] = d),
      (r[17] = A),
      (r[18] = F),
      (r[19] = M),
      (r[20] = K),
      (r[21] = a),
      (r[22] = l),
      (r[23] = o?.value),
      (r[24] = D),
      (r[25] = _),
      (r[26] = W),
      (r[27] = k),
      (r[28] = q));
  } else q = r[28];
  return q;
}
function I(e, t) {
  return L(e.type).localeCompare(L(t.type));
}
function L(e) {
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
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = u()), P(), (z = r()), m(), g(), v(), w(), a(), d(), x(), (B = s()));
  }))();
}
function H(e) {
  return e == null || K.safeParse(e).success
    ? null
    : typeof e == `object` && !Array.isArray(e)
      ? `malformed_tax_type_entry`
      : `malformed_tax_types`;
}
function U(e, t) {
  let n = K.safeParse(t);
  return !E(e) || !n.success ? [] : D(e, Object.values(n.data));
}
function W(e, t, n) {
  return (
    (t == null
      ? void 0
      : (e.find((e) => e.type === t.country_specific_type) ??
        e.find((e) => e.stripe_type === t.type && e.country === (t.country ?? n)))) ??
    e.find((e) => e.country === n) ??
    e[0]
  );
}
var G, K;
function q() {
  return (q = e(() => {
    (P(),
      i(),
      (G = _({
        type: p(),
        stripe_type: p(),
        country: p(),
        region: p(),
        supported: l(),
        description: p(),
        placeholder: p()
          .nullish()
          .transform((e) => e ?? void 0),
      })),
      (K = c(p(), G)));
  }))();
}
export { F as a, O as c, q as i, U as n, V as o, H as r, P as s, W as t };
//# sourceMappingURL=tax-types-cfd3a8648e60.js.map
