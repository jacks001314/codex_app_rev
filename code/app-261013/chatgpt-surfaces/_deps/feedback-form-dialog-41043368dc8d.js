import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Mz as ee,
  Nz as r,
  QD as i,
  VDt as a,
  ZD as te,
  _Mt as o,
  _O as ne,
  _d as s,
  cO as re,
  fO as c,
  gMt as ie,
  jDt as l,
  lO as u,
  mO as ae,
  oO as oe,
  sO as se,
  t3 as d,
  uO as ce,
  vO as f,
  vd as le,
  vzt as p,
  xMt as m,
  yzt as h,
} from "./app-shared-bbfeca5e5737.js";
import { DPn as g, EPn as ue } from "./app-initial-5851df3f6cb1.js";
function _(e) {
  let r = (0, v.c)(73),
    {
      belowFreeformContent: i,
      closeOnSubmit: o,
      freeformFeedbackRequired: s,
      hideFreeformInput: c,
      initialDetails: l,
      initialSelectedOptionId: d,
      onClose: f,
      onOptionSelect: p,
      onSubmit: m,
      options: h,
      size: g,
    } = e,
    _ = o === void 0 ? `after-submit` : o,
    x = c !== void 0 && c,
    fe = l === void 0 ? `` : l,
    S = g === void 0 ? `wide` : g,
    C = a(),
    [w, pe] = (0, y.useState)(fe),
    [T, E] = (0, y.useState)(!1),
    [D, me] = (0, y.useState)(d ?? null),
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H,
    U,
    W,
    G;
  if (
    r[0] !== _ ||
    r[1] !== w ||
    r[2] !== s ||
    r[3] !== C ||
    r[4] !== T ||
    r[5] !== f ||
    r[6] !== p ||
    r[7] !== m ||
    r[8] !== h ||
    r[9] !== D ||
    r[10] !== S
  ) {
    let e = w.trim(),
      t;
    (r[29] !== s || r[30] !== C
      ? ((t = s
          ? C.formatMessage({
              id: `feedbackFormDialog.detailsPlaceholder.required`,
              defaultMessage: `Share details (required)`,
              description: `Placeholder for a required freeform feedback details field`,
            })
          : C.formatMessage({
              id: `feedbackFormDialog.detailsPlaceholder.optional`,
              defaultMessage: `Share details (optional)`,
              description: `Placeholder for an optional freeform feedback details field`,
            })),
        (r[29] = s),
        (r[30] = C),
        (r[31] = t))
      : (t = r[31]),
      (M = t));
    let i;
    r[32] === C
      ? (i = r[33])
      : ((i = C.formatMessage({
          id: `feedbackFormDialog.optionsLabel`,
          defaultMessage: `Feedback options`,
          description: `Accessible label for feedback options`,
        })),
        (r[32] = C),
        (r[33] = i));
    let a = i;
    N = D == null || (s && e.length === 0);
    let o;
    r[34] === f
      ? (o = r[35])
      : ((o = (e) => {
          e || f();
        }),
        (r[34] = f),
        (r[35] = o));
    let c = o;
    ((j = ae),
      (R = !0),
      (z = c),
      (B = S),
      (A = oe),
      (P = `form`),
      (F = `gap-2`),
      (I = async (t) => {
        if ((t.preventDefault(), D == null || T || N)) return;
        if (_ === `immediate`) {
          m({ selectedOptionId: D, details: e }) !== !1 && f();
          return;
        }
        E(!0);
        let n = !1;
        (await (async () => {
          n = (await m({ selectedOptionId: D, details: e })) !== !1;
        })().finally(() => {
          E(!1);
        }),
          n && f());
      }),
      r[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((L = (0, b.jsx)(u, {
            children: (0, b.jsx)(re, {
              title: (0, b.jsx)(ne, {
                children: (0, b.jsx)(n, {
                  id: `feedbackFormDialog.title`,
                  defaultMessage: `Share feedback`,
                  description: `Title for feedback dialog`,
                }),
              }),
              titleSize: `dialog`,
            }),
          })),
          (r[36] = L))
        : (L = r[36]),
      (k = u),
      (O = ce),
      (G = `gap-3`),
      (V = `radiogroup`),
      (H = a),
      (U = `flex flex-wrap gap-2`),
      (W = h.map((t) => {
        let r = D === t.id,
          i = r ? te : le;
        return (0, b.jsxs)(
          `button`,
          {
            type: `button`,
            role: `radio`,
            "aria-checked": r,
            onClick: () => {
              (me(t.id), p?.({ details: e, selectedOptionId: t.id }));
            },
            className: ie(
              `border-default cursor-interaction flex items-center gap-1 rounded-full border px-3 py-1`,
              `focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2`,
              r ? `bg-primary-solid text-primary-solid` : `text-default hover:bg-surface-elevated/60`,
            ),
            children: [(0, b.jsx)(ee, { asset: i, "aria-hidden": !1 }), (0, b.jsx)(n, { ...t.label })],
          },
          t.id,
        );
      })),
      (r[0] = _),
      (r[1] = w),
      (r[2] = s),
      (r[3] = C),
      (r[4] = T),
      (r[5] = f),
      (r[6] = p),
      (r[7] = m),
      (r[8] = h),
      (r[9] = D),
      (r[10] = S),
      (r[11] = O),
      (r[12] = k),
      (r[13] = A),
      (r[14] = j),
      (r[15] = M),
      (r[16] = N),
      (r[17] = P),
      (r[18] = F),
      (r[19] = I),
      (r[20] = L),
      (r[21] = R),
      (r[22] = z),
      (r[23] = B),
      (r[24] = V),
      (r[25] = H),
      (r[26] = U),
      (r[27] = W),
      (r[28] = G));
  } else
    ((O = r[11]),
      (k = r[12]),
      (A = r[13]),
      (j = r[14]),
      (M = r[15]),
      (N = r[16]),
      (P = r[17]),
      (F = r[18]),
      (I = r[19]),
      (L = r[20]),
      (R = r[21]),
      (z = r[22]),
      (B = r[23]),
      (V = r[24]),
      (H = r[25]),
      (U = r[26]),
      (W = r[27]),
      (G = r[28]));
  let K;
  r[37] !== V || r[38] !== H || r[39] !== U || r[40] !== W
    ? ((K = (0, b.jsx)(`div`, { role: V, "aria-label": H, className: U, children: W })),
      (r[37] = V),
      (r[38] = H),
      (r[39] = U),
      (r[40] = W),
      (r[41] = K))
    : (K = r[41]);
  let q;
  r[42] !== w || r[43] !== M || r[44] !== x
    ? ((q = x
        ? null
        : (0, b.jsx)(ue, {
            autoFocus: !0,
            rows: 5,
            placeholder: M,
            "aria-label": M,
            value: w,
            onChange: (e) => {
              pe(e.target.value);
            },
            onKeyDown: de,
          })),
      (r[42] = w),
      (r[43] = M),
      (r[44] = x),
      (r[45] = q))
    : (q = r[45]);
  let J;
  r[46] !== O || r[47] !== i || r[48] !== K || r[49] !== q || r[50] !== G
    ? ((J = (0, b.jsxs)(O, { className: G, children: [K, q, i] })),
      (r[46] = O),
      (r[47] = i),
      (r[48] = K),
      (r[49] = q),
      (r[50] = G),
      (r[51] = J))
    : (J = r[51]);
  let Y;
  r[52] !== k || r[53] !== J
    ? ((Y = (0, b.jsx)(k, { children: J })), (r[52] = k), (r[53] = J), (r[54] = Y))
    : (Y = r[54]);
  let X;
  r[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, b.jsx)(n, {
        id: `feedbackFormDialog.submit`,
        defaultMessage: `Submit`,
        description: `Label for the button that submits feedback`,
      })),
      (r[55] = X))
    : (X = r[55]);
  let Z;
  r[56] !== N || r[57] !== T
    ? ((Z = (0, b.jsx)(u, {
        children: (0, b.jsx)(se, {
          children: (0, b.jsx)(t, { color: `primary`, disabled: N, loading: T, type: `submit`, children: X }),
        }),
      })),
      (r[56] = N),
      (r[57] = T),
      (r[58] = Z))
    : (Z = r[58]);
  let Q;
  r[59] !== A || r[60] !== P || r[61] !== F || r[62] !== I || r[63] !== L || r[64] !== Y || r[65] !== Z
    ? ((Q = (0, b.jsxs)(A, { as: P, className: F, onSubmit: I, children: [L, Y, Z] })),
      (r[59] = A),
      (r[60] = P),
      (r[61] = F),
      (r[62] = I),
      (r[63] = L),
      (r[64] = Y),
      (r[65] = Z),
      (r[66] = Q))
    : (Q = r[66]);
  let $;
  return (
    r[67] !== j || r[68] !== R || r[69] !== z || r[70] !== B || r[71] !== Q
      ? (($ = (0, b.jsx)(j, { open: R, onOpenChange: z, size: B, children: Q })),
        (r[67] = j),
        (r[68] = R),
        (r[69] = z),
        (r[70] = B),
        (r[71] = Q),
        (r[72] = $))
      : ($ = r[72]),
    $
  );
}
function de(e) {
  e.key === `Enter` && e.metaKey && (e.preventDefault(), e.currentTarget.form?.requestSubmit());
}
var v, y, b;
function x() {
  return (x = e(() => {
    ((v = p()), i(), s(), o(), (y = h()), l(), d(), f(), c(), r(), g(), (b = m()));
  }))();
}
export { x as n, _ as t };
//# sourceMappingURL=feedback-form-dialog-41043368dc8d.js.map
