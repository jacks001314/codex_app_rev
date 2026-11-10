import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  PBt as a,
  Qst as o,
  TY as s,
  XOt as c,
  ZSt as l,
  fY as u,
  kH as d,
  okt as f,
  tkt as p,
  vG as m,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  HFt as h,
  MOt as g,
  NOt as _,
  OOt as v,
  VFt as y,
  aZt as b,
  cKn as x,
  iIr as S,
  kOt as C,
  lKn as w,
  rIr as T,
  uZt as E,
} from "./app-initial-ad16eaadf81f.js";
import { Jd as D, cf as O, hf as k, lf as A, mf as j, qd as M } from "./app-primary-3e00728c2a4c.js";
function N(e) {
  let t = (0, P.c)(20),
    { imageSrc: n, model: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, F.jsx)(`img`, { className: `h-full w-full object-cover`, src: n, alt: `` })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] !== r.displayName || t[3] !== r.model
    ? ((a = (0, F.jsx)(O, { model: r.model, displayName: r.displayName })),
      (t[2] = r.displayName),
      (t[3] = r.model),
      (t[4] = a))
    : (a = t[4]);
  let o;
  t[5] === r.defaultReasoningEffort
    ? (o = t[6])
    : ((o = S(r.defaultReasoningEffort) ? (0, F.jsx)(p, { ...k[r.defaultReasoningEffort] }) : null),
      (t[5] = r.defaultReasoningEffort),
      (t[6] = o));
  let s;
  t[7] === o
    ? (s = t[8])
    : ((s = (0, F.jsx)(`span`, { className: `text-media-background/50`, children: o })),
      (t[7] = o),
      (t[8] = s));
  let c;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = (0, F.jsx)(d, {})), (t[9] = c)) : (c = t[9]);
  let l;
  t[10] !== a || t[11] !== s
    ? ((l = (0, F.jsxs)(`span`, {
        className: `flex h-9 items-center gap-2 rounded-full bg-media-background/5 ps-3 pe-3.5 text-base leading-relaxed`,
        children: [a, s, c],
      })),
      (t[10] = a),
      (t[11] = s),
      (t[12] = l))
    : (l = t[12]);
  let f;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, F.jsx)(`span`, {
        className: `flex size-9 items-center justify-center`,
        children: (0, F.jsx)(m, {}),
      })),
      (t[13] = f))
    : (f = t[13]);
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, F.jsx)(`span`, {
        className: `flex size-9 items-center justify-center rounded-full bg-media-background/50 text-media-foreground`,
        children: (0, F.jsx)(u, {}),
      })),
      (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] === l
    ? (g = t[16])
    : ((g = (0, F.jsxs)(`div`, {
        className: `absolute inset-x-0 top-1/2 flex -translate-x-20 -translate-y-1/2 items-center justify-end gap-2 rounded-full border border-media-background/5 bg-media-foreground p-2 text-media-background`,
        children: [l, f, h],
      })),
      (t[15] = l),
      (t[16] = g));
  let _;
  return (
    t[17] !== i || t[18] !== g
      ? ((_ = (0, F.jsxs)(`div`, {
          className: `pointer-events-none relative h-full w-full select-none`,
          "aria-hidden": !0,
          inert: !0,
          children: [i, g],
        })),
        (t[17] = i),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = a()), T(), c(), A(), j(), s(), (F = i()));
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
      ? ((l = (0, V.jsx)(v, { banner: s, rateLimitStatus: i, onOwnerRequestComplete: a, renderContent: c })),
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
    { behavior: r, model: i, onRestorePickerFocus: a, rateLimitStatus: s, onClose: c } = e,
    l = t(o),
    u = f(),
    d = (0, B.useRef)(null),
    p;
  n[0] === r ? (p = n[1]) : ((p = () => r.logImpression()), (n[0] = r), (n[1] = p));
  let m = (0, B.useEffectEvent)(p),
    h;
  n[2] !== r.canLogImpression || n[3] !== r.impressionKey || n[4] !== m
    ? ((h = () => {
        r.canLogImpression && d.current !== r.impressionKey && ((d.current = r.impressionKey), m());
      }),
      (n[2] = r.canLogImpression),
      (n[3] = r.impressionKey),
      (n[4] = m),
      (n[5] = h))
    : (h = n[5]);
  let g;
  (n[6] !== r.canLogImpression || n[7] !== r.impressionKey
    ? ((g = [r.canLogImpression, r.impressionKey]),
      (n[6] = r.canLogImpression),
      (n[7] = r.impressionKey),
      (n[8] = g))
    : (g = n[8]),
    (0, B.useEffect)(h, g));
  let v = (0, B.useRef)(!0),
    [S, C] = (0, B.useState)(),
    w = s.model_picker_upsell;
  if (w == null) return null;
  let T = w.ctas,
    E,
    D,
    O,
    k,
    A,
    j,
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
    n[9] !== r.actions ||
    n[10] !== u ||
    n[11] !== i ||
    n[12] !== c ||
    n[13] !== a ||
    n[14] !== S ||
    n[15] !== w ||
    n[16] !== l
  ) {
    R = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      n[33] === r.actions
        ? (e = n[34])
        : ((e = (e) =>
            _(e.action)
              ? [{ ...e, ...r.actions[e.action], label: r.actions[e.action].label ?? e.label }]
              : []),
          (n[33] = r.actions),
          (n[34] = e));
      let t = T.flatMap(e);
      if ((([O, k] = t), O == null)) {
        R = null;
        break bb0;
      }
      D = async function (e, t) {
        if (e == null || t == null || e.disabled || S != null || !v.current) return;
        if (M(l)?.model_picker_upsell !== w) {
          c();
          return;
        }
        e.log();
        let n =
          e.action === `contact_owner` ||
          e.action === `notify_owner` ||
          (e.action === `request_increase` && w?.request_url == null);
        (n || ((v.current = !1), c()),
          n && C(e === O ? `primary` : `secondary`),
          await Promise.resolve(e.onClick(t)).finally(() => {
            C(void 0);
          }));
      };
      let o = w.reset_at == null ? null : b(u, w.reset_at, x === `ChatGPT`),
        s = (e) => (o == null ? e : e.replaceAll(`{time}`, o));
      ((E = y),
        (H = `stacked`),
        (U = s(w.title)),
        (W = (0, V.jsx)(`p`, {
          className: `text-base leading-normal tracking-normal text-codex-description`,
          children: s(w.description),
        })),
        (G = s(w.footer)),
        n[35] === i
          ? (K = n[36])
          : ((K = (0, V.jsx)(N, {
              imageSrc: `https://persistent.oaistatic.com/assets/m/2837D4FC-C633-4CBF-8EC5-751DE52A1105.png`,
              model: i,
            })),
            (n[35] = i),
            (n[36] = K)),
        (A = c),
        n[37] === a
          ? (j = n[38])
          : ((j = (e) => {
              (e.preventDefault(), v.current && a());
            }),
            (n[37] = a),
            (n[38] = j)),
        (P = `primary`),
        (F = s(O.label)),
        (I = O.disabled),
        (L = k == null ? null : s(k.label)));
    }
    ((n[9] = r.actions),
      (n[10] = u),
      (n[11] = i),
      (n[12] = c),
      (n[13] = a),
      (n[14] = S),
      (n[15] = w),
      (n[16] = l),
      (n[17] = E),
      (n[18] = D),
      (n[19] = O),
      (n[20] = k),
      (n[21] = A),
      (n[22] = j),
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
    ((E = n[17]),
      (D = n[18]),
      (O = n[19]),
      (k = n[20]),
      (A = n[21]),
      (j = n[22]),
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
  let q = k?.disabled,
    J;
  n[39] !== D || n[40] !== O ? ((J = (e) => D(O, e)), (n[39] = D), (n[40] = O), (n[41] = J)) : (J = n[41]);
  let Y;
  n[42] !== D || n[43] !== k ? ((Y = (e) => D(k, e)), (n[42] = D), (n[43] = k), (n[44] = Y)) : (Y = n[44]);
  let X;
  return (
    n[45] !== E ||
    n[46] !== S ||
    n[47] !== A ||
    n[48] !== j ||
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
      ? ((X = (0, V.jsx)(E, {
          actionLayout: H,
          title: U,
          body: W,
          disclaimerFooter: G,
          media: K,
          onDismiss: A,
          onCloseAutoFocus: j,
          initialFocus: P,
          primaryActionLabel: F,
          primaryActionDisabled: I,
          dismissLabel: L,
          secondaryActionColor: `accentSubtle`,
          secondaryActionDisabled: q,
          pendingAction: S,
          onPrimaryAction: J,
          onSecondaryAction: Y,
        })),
        (n[45] = E),
        (n[46] = S),
        (n[47] = A),
        (n[48] = j),
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
    ((z = a()), l(), (B = r()), c(), h(), w(), n(), E(), g(), C(), I(), D(), (V = i()));
  }))();
}
H();
export { L as ModelPickerUpsellModal };
//# sourceMappingURL=modal-33e74c13a1f5.js.map
