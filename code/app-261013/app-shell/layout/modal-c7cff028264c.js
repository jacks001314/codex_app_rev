import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  IDt as n,
  Ixt as r,
  NV as i,
  Pxt as a,
  SW as o,
  TJ as s,
  VDt as c,
  fJ as l,
  jDt as u,
  vzt as d,
  wot as f,
  xMt as p,
  yzt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  FRt as h,
  Fjr as g,
  Fjt as _,
  GHn as v,
  Ijt as y,
  KHn as b,
  Ljt as x,
  PRt as S,
  Pjr as C,
  Pjt as w,
  c4t as T,
  r4t as E,
} from "./app-initial-5851df3f6cb1.js";
import { Id as D, Ld as O, Qd as k, Zd as A, if as j, rf as M } from "./app-primary-fe8a450b3b04.js";
function N(e) {
  let t = (0, P.c)(20),
    { imageSrc: r, model: a } = e,
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = (0, F.jsx)(`img`, { className: `h-full w-full object-cover`, src: r, alt: `` })),
      (t[0] = r),
      (t[1] = s));
  let c;
  t[2] !== a.displayName || t[3] !== a.model
    ? ((c = (0, F.jsx)(A, { model: a.model, displayName: a.displayName })),
      (t[2] = a.displayName),
      (t[3] = a.model),
      (t[4] = c))
    : (c = t[4]);
  let u;
  t[5] === a.defaultReasoningEffort
    ? (u = t[6])
    : ((u = g(a.defaultReasoningEffort) ? (0, F.jsx)(n, { ...j[a.defaultReasoningEffort] }) : null),
      (t[5] = a.defaultReasoningEffort),
      (t[6] = u));
  let d;
  t[7] === u
    ? (d = t[8])
    : ((d = (0, F.jsx)(`span`, { className: `text-media-background/50`, children: u })),
      (t[7] = u),
      (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, F.jsx)(i, {})), (t[9] = f)) : (f = t[9]);
  let p;
  t[10] !== c || t[11] !== d
    ? ((p = (0, F.jsxs)(`span`, {
        className: `flex h-9 items-center gap-2 rounded-full bg-media-background/5 ps-3 pe-3.5 text-base leading-relaxed`,
        children: [c, d, f],
      })),
      (t[10] = c),
      (t[11] = d),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, F.jsx)(`span`, {
        className: `flex size-9 items-center justify-center`,
        children: (0, F.jsx)(o, {}),
      })),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, F.jsx)(`span`, {
        className: `flex size-9 items-center justify-center rounded-full bg-media-background/50 text-media-foreground`,
        children: (0, F.jsx)(l, {}),
      })),
      (t[14] = h))
    : (h = t[14]);
  let _;
  t[15] === p
    ? (_ = t[16])
    : ((_ = (0, F.jsxs)(`div`, {
        className: `absolute inset-x-0 top-1/2 flex -translate-x-20 -translate-y-1/2 items-center justify-end gap-2 rounded-full border border-media-background/5 bg-media-foreground p-2 text-media-background`,
        children: [p, m, h],
      })),
      (t[15] = p),
      (t[16] = _));
  let v;
  return (
    t[17] !== s || t[18] !== _
      ? ((v = (0, F.jsxs)(`div`, {
          className: `pointer-events-none relative h-full w-full select-none`,
          "aria-hidden": !0,
          inert: !0,
          children: [s, _],
        })),
        (t[17] = s),
        (t[18] = _),
        (t[19] = v))
      : (v = t[19]),
    v
  );
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = d()), C(), u(), k(), M(), s(), (F = p()));
  }))();
}
function L(e) {
  let t = (0, z.c)(12),
    { model: n, onRestorePickerFocus: r, rateLimitStatus: i, onClose: a } = e,
    o = i.model_picker_upsell;
  if (o == null) return null;
  let s;
  t[0] === o ? (s = t[1]) : ((s = { ...o, banner_type: `model_picker_upsell` }), (t[0] = o), (t[1] = s));
  let c;
  t[2] !== n || t[3] !== a || t[4] !== r || t[5] !== i
    ? ((c = (e) =>
        (0, V.jsx)(R, { behavior: e, model: n, onRestorePickerFocus: r, rateLimitStatus: i, onClose: a })),
      (t[2] = n),
      (t[3] = a),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== a || t[8] !== i || t[9] !== s || t[10] !== c
      ? ((l = (0, V.jsx)(w, { banner: s, rateLimitStatus: i, onOwnerRequestComplete: a, renderContent: c })),
        (t[7] = a),
        (t[8] = i),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function R(e) {
  let n = (0, z.c)(62),
    { behavior: i, model: a, onRestorePickerFocus: o, rateLimitStatus: s, onClose: l } = e,
    u = r(t),
    d = c(),
    f = (0, B.useRef)(null),
    p;
  n[0] === i ? (p = n[1]) : ((p = () => i.logImpression()), (n[0] = i), (n[1] = p));
  let m = (0, B.useEffectEvent)(p),
    h;
  n[2] !== i.canLogImpression || n[3] !== i.impressionKey || n[4] !== m
    ? ((h = () => {
        i.canLogImpression && f.current !== i.impressionKey && ((f.current = i.impressionKey), m());
      }),
      (n[2] = i.canLogImpression),
      (n[3] = i.impressionKey),
      (n[4] = m),
      (n[5] = h))
    : (h = n[5]);
  let g;
  (n[6] !== i.canLogImpression || n[7] !== i.impressionKey
    ? ((g = [i.canLogImpression, i.impressionKey]),
      (n[6] = i.canLogImpression),
      (n[7] = i.impressionKey),
      (n[8] = g))
    : (g = n[8]),
    (0, B.useEffect)(h, g));
  let _ = (0, B.useRef)(!0),
    [y, b] = (0, B.useState)(),
    C = s.model_picker_upsell;
  if (C == null) return null;
  let w = C.ctas,
    T,
    O,
    k,
    A,
    j,
    M,
    P,
    F,
    I,
    L,
    R,
    H,
    U,
    W,
    G,
    K;
  if (
    n[9] !== i.actions ||
    n[10] !== d ||
    n[11] !== a ||
    n[12] !== l ||
    n[13] !== o ||
    n[14] !== y ||
    n[15] !== C ||
    n[16] !== u
  ) {
    R = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      n[33] === i.actions
        ? (e = n[34])
        : ((e = (e) =>
            x(e.action)
              ? [{ ...e, ...i.actions[e.action], label: i.actions[e.action].label ?? e.label }]
              : []),
          (n[33] = i.actions),
          (n[34] = e));
      let t = w.flatMap(e);
      if ((([k, A] = t), k == null)) {
        R = null;
        break bb0;
      }
      O = async function (e, t) {
        if (e == null || t == null || e.disabled || y != null || !_.current) return;
        if (D(u)?.model_picker_upsell !== C) {
          l();
          return;
        }
        e.log();
        let n =
          e.action === `contact_owner` ||
          e.action === `notify_owner` ||
          (e.action === `request_increase` && C?.request_url == null);
        (n || ((_.current = !1), l()),
          n && b(e === k ? `primary` : `secondary`),
          await Promise.resolve(e.onClick(t)).finally(() => {
            b(void 0);
          }));
      };
      let r = C.reset_at == null ? null : E(d, C.reset_at, v === `ChatGPT`),
        s = (e) => (r == null ? e : e.replaceAll(`{time}`, r));
      ((T = S),
        (H = `stacked`),
        (U = s(C.title)),
        (W = (0, V.jsx)(`p`, {
          className: `text-base leading-normal tracking-normal text-codex-description`,
          children: s(C.description),
        })),
        (G = s(C.footer)),
        n[35] === a
          ? (K = n[36])
          : ((K = (0, V.jsx)(N, {
              imageSrc: `https://persistent.oaistatic.com/assets/m/2837D4FC-C633-4CBF-8EC5-751DE52A1105.png`,
              model: a,
            })),
            (n[35] = a),
            (n[36] = K)),
        (j = l),
        n[37] === o
          ? (M = n[38])
          : ((M = (e) => {
              (e.preventDefault(), _.current && o());
            }),
            (n[37] = o),
            (n[38] = M)),
        (P = `primary`),
        (F = s(k.label)),
        (I = k.disabled),
        (L = A == null ? null : s(A.label)));
    }
    ((n[9] = i.actions),
      (n[10] = d),
      (n[11] = a),
      (n[12] = l),
      (n[13] = o),
      (n[14] = y),
      (n[15] = C),
      (n[16] = u),
      (n[17] = T),
      (n[18] = O),
      (n[19] = k),
      (n[20] = A),
      (n[21] = j),
      (n[22] = M),
      (n[23] = P),
      (n[24] = F),
      (n[25] = I),
      (n[26] = L),
      (n[27] = R),
      (n[28] = H),
      (n[29] = U),
      (n[30] = W),
      (n[31] = G),
      (n[32] = K));
  } else
    ((T = n[17]),
      (O = n[18]),
      (k = n[19]),
      (A = n[20]),
      (j = n[21]),
      (M = n[22]),
      (P = n[23]),
      (F = n[24]),
      (I = n[25]),
      (L = n[26]),
      (R = n[27]),
      (H = n[28]),
      (U = n[29]),
      (W = n[30]),
      (G = n[31]),
      (K = n[32]));
  if (R !== Symbol.for(`react.early_return_sentinel`)) return R;
  let q = A?.disabled,
    J;
  n[39] !== O || n[40] !== k ? ((J = (e) => O(k, e)), (n[39] = O), (n[40] = k), (n[41] = J)) : (J = n[41]);
  let Y;
  n[42] !== O || n[43] !== A ? ((Y = (e) => O(A, e)), (n[42] = O), (n[43] = A), (n[44] = Y)) : (Y = n[44]);
  let X;
  return (
    n[45] !== T ||
    n[46] !== y ||
    n[47] !== j ||
    n[48] !== M ||
    n[49] !== P ||
    n[50] !== F ||
    n[51] !== I ||
    n[52] !== L ||
    n[53] !== q ||
    n[54] !== J ||
    n[55] !== Y ||
    n[56] !== H ||
    n[57] !== U ||
    n[58] !== W ||
    n[59] !== G ||
    n[60] !== K
      ? ((X = (0, V.jsx)(T, {
          actionLayout: H,
          title: U,
          body: W,
          disclaimerFooter: G,
          media: K,
          onDismiss: j,
          onCloseAutoFocus: M,
          initialFocus: P,
          primaryActionLabel: F,
          primaryActionDisabled: I,
          dismissLabel: L,
          secondaryActionColor: `accentSubtle`,
          secondaryActionDisabled: q,
          pendingAction: y,
          onPrimaryAction: J,
          onSecondaryAction: Y,
        })),
        (n[45] = T),
        (n[46] = y),
        (n[47] = j),
        (n[48] = M),
        (n[49] = P),
        (n[50] = F),
        (n[51] = I),
        (n[52] = L),
        (n[53] = q),
        (n[54] = J),
        (n[55] = Y),
        (n[56] = H),
        (n[57] = U),
        (n[58] = W),
        (n[59] = G),
        (n[60] = K),
        (n[61] = X))
      : (X = n[61]),
    X
  );
}
var z, B, V;
function H() {
  return (H = e(() => {
    ((z = d()), a(), (B = m()), u(), h(), b(), f(), T(), y(), _(), I(), O(), (V = p()));
  }))();
}
H();
export { L as ModelPickerUpsellModal };
//# sourceMappingURL=modal-c7cff028264c.js.map
