import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  Bkt as i,
  Cpn as a,
  GKt as o,
  HO as s,
  MAt as c,
  NAt as l,
  O3t as u,
  Opn as d,
  Pkt as f,
  Spn as p,
  VO as m,
  WKt as h,
  Wdt as g,
  Xdt as _,
  a3t as v,
  flt as y,
  hmn as b,
  kmn as x,
  o3t as S,
  vut as C,
} from "./app-initial-f094ef01c64d.js";
import {
  Jg as w,
  _g as T,
  an as E,
  ec as D,
  gg as O,
  nc as k,
  on as A,
  qg as j,
  rc as M,
  tc as N,
} from "./app-primary-4c40d73a1074.js";
function P(e) {
  let t = (0, F.c)(20),
    { imageSrc: n, model: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, I.jsx)(`img`, { className: `h-full w-full object-cover`, src: n, alt: `` })),
      (t[0] = n),
      (t[1] = i));
  let o;
  t[2] !== r.displayName || t[3] !== r.model
    ? ((o = (0, I.jsx)(D, { model: r.model, displayName: r.displayName })),
      (t[2] = r.displayName),
      (t[3] = r.model),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === r.defaultReasoningEffort
    ? (s = t[6])
    : ((s = l(r.defaultReasoningEffort) ? (0, I.jsx)(a, { ...M[r.defaultReasoningEffort] }) : null),
      (t[5] = r.defaultReasoningEffort),
      (t[6] = s));
  let c;
  t[7] === s
    ? (c = t[8])
    : ((c = (0, I.jsx)(`span`, { className: `text-media-background/50`, children: s })),
      (t[7] = s),
      (t[8] = c));
  let u;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, I.jsx)(y, {})), (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== o || t[11] !== c
    ? ((d = (0, I.jsxs)(`span`, {
        className: `flex h-9 items-center gap-2 rounded-full bg-media-background/5 ps-3 pe-3.5 text-base leading-relaxed`,
        children: [o, c, u],
      })),
      (t[10] = o),
      (t[11] = c),
      (t[12] = d))
    : (d = t[12]);
  let f;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, I.jsx)(`span`, {
        className: `flex size-9 items-center justify-center`,
        children: (0, I.jsx)(C, {}),
      })),
      (t[13] = f))
    : (f = t[13]);
  let p;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, I.jsx)(`span`, {
        className: `flex size-9 items-center justify-center rounded-full bg-media-background/50 text-media-foreground`,
        children: (0, I.jsx)(g, {}),
      })),
      (t[14] = p))
    : (p = t[14]);
  let m;
  t[15] === d
    ? (m = t[16])
    : ((m = (0, I.jsxs)(`div`, {
        className: `absolute inset-x-0 top-1/2 flex -translate-x-20 -translate-y-1/2 items-center justify-end gap-2 rounded-full border border-media-background/5 bg-media-foreground p-2 text-media-background`,
        children: [d, f, p],
      })),
      (t[15] = d),
      (t[16] = m));
  let h;
  return (
    t[17] !== i || t[18] !== m
      ? ((h = (0, I.jsxs)(`div`, {
          className: `pointer-events-none relative h-full w-full select-none`,
          "aria-hidden": !0,
          inert: !0,
          children: [i, m],
        })),
        (t[17] = i),
        (t[18] = m),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
var F,
  I,
  L = e(() => {
    ((F = x()), p(), N(), k(), c(), _(), (I = b()));
  });
function R(e) {
  let t = (0, B.c)(12),
    { model: n, onRestorePickerFocus: r, rateLimitStatus: i, onClose: a } = e,
    o = i.model_picker_upsell;
  if (o == null) return null;
  let s;
  t[0] === o
    ? (s = t[1])
    : ((s = { ...o, banner_type: `model_picker_upsell` }), (t[0] = o), (t[1] = s));
  let c;
  t[2] !== n || t[3] !== a || t[4] !== r || t[5] !== i
    ? ((c = (e) =>
        (0, H.jsx)(z, {
          behavior: e,
          model: n,
          onRestorePickerFocus: r,
          rateLimitStatus: i,
          onClose: a,
        })),
      (t[2] = n),
      (t[3] = a),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== a || t[8] !== i || t[9] !== s || t[10] !== c
      ? ((l = (0, H.jsx)(O, {
          banner: s,
          rateLimitStatus: i,
          onOwnerRequestComplete: a,
          renderContent: c,
        })),
        (t[7] = a),
        (t[8] = i),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function z(e) {
  let t = (0, B.c)(62),
    { behavior: r, model: i, onRestorePickerFocus: a, rateLimitStatus: o, onClose: s } = e,
    c = n(v),
    l = d(),
    u = (0, V.useRef)(null),
    p;
  t[0] === r ? (p = t[1]) : ((p = () => r.logImpression()), (t[0] = r), (t[1] = p));
  let g = (0, V.useEffectEvent)(p),
    _;
  t[2] !== r.canLogImpression || t[3] !== r.impressionKey || t[4] !== g
    ? ((_ = () => {
        !r.canLogImpression ||
          u.current === r.impressionKey ||
          ((u.current = r.impressionKey), g());
      }),
      (t[2] = r.canLogImpression),
      (t[3] = r.impressionKey),
      (t[4] = g),
      (t[5] = _))
    : (_ = t[5]);
  let y;
  (t[6] !== r.canLogImpression || t[7] !== r.impressionKey
    ? ((y = [r.canLogImpression, r.impressionKey]),
      (t[6] = r.canLogImpression),
      (t[7] = r.impressionKey),
      (t[8] = y))
    : (y = t[8]),
    (0, V.useEffect)(_, y));
  let b = (0, V.useRef)(!0),
    [x, S] = (0, V.useState)(),
    C = o.model_picker_upsell;
  if (C == null) return null;
  let T = C.ctas,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    F,
    I,
    L,
    R,
    z,
    U,
    W,
    G,
    K;
  if (
    t[9] !== r.actions ||
    t[10] !== l ||
    t[11] !== i ||
    t[12] !== s ||
    t[13] !== a ||
    t[14] !== x ||
    t[15] !== C ||
    t[16] !== c
  ) {
    R = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[33] === r.actions
        ? (e = t[34])
        : ((e = (e) => (w(e.action) ? [{ ...e, ...r.actions[e.action] }] : [])),
          (t[33] = r.actions),
          (t[34] = e));
      let n = T.flatMap(e);
      if ((([k, A] = n), k == null)) {
        R = null;
        break bb0;
      }
      O = async function (e, t) {
        if (e == null || t == null || e.disabled || x != null || !b.current) return;
        if (E(c)?.model_picker_upsell !== C) {
          s();
          return;
        }
        e.log();
        let n =
          e.action === `contact_owner` ||
          e.action === `notify_owner` ||
          (e.action === `request_increase` && C?.request_url == null);
        (n || ((b.current = !1), s()),
          n && S(e === k ? `primary` : `secondary`),
          await Promise.resolve(e.onClick(t)).finally(() => {
            S(void 0);
          }));
      };
      let o = C.reset_at == null ? null : f(l, C.reset_at, h === `ChatGPT`),
        u = (e) => (o == null ? e : e.replaceAll(`{time}`, o));
      ((D = m),
        (z = `stacked`),
        (U = u(C.title)),
        (W = (0, H.jsx)(`p`, {
          className: `text-base leading-normal tracking-normal text-codex-description`,
          children: u(C.description),
        })),
        (G = u(C.footer)),
        t[35] === i
          ? (K = t[36])
          : ((K = (0, H.jsx)(P, {
              imageSrc: `https://persistent.oaistatic.com/assets/m/2837D4FC-C633-4CBF-8EC5-751DE52A1105.png`,
              model: i,
            })),
            (t[35] = i),
            (t[36] = K)),
        (j = s),
        t[37] === a
          ? (M = t[38])
          : ((M = (e) => {
              (e.preventDefault(), b.current && a());
            }),
            (t[37] = a),
            (t[38] = M)),
        (N = `primary`),
        (F = u(k.label)),
        (I = k.disabled),
        (L = A == null ? null : u(A.label)));
    }
    ((t[9] = r.actions),
      (t[10] = l),
      (t[11] = i),
      (t[12] = s),
      (t[13] = a),
      (t[14] = x),
      (t[15] = C),
      (t[16] = c),
      (t[17] = D),
      (t[18] = O),
      (t[19] = k),
      (t[20] = A),
      (t[21] = j),
      (t[22] = M),
      (t[23] = N),
      (t[24] = F),
      (t[25] = I),
      (t[26] = L),
      (t[27] = R),
      (t[28] = z),
      (t[29] = U),
      (t[30] = W),
      (t[31] = G),
      (t[32] = K));
  } else
    ((D = t[17]),
      (O = t[18]),
      (k = t[19]),
      (A = t[20]),
      (j = t[21]),
      (M = t[22]),
      (N = t[23]),
      (F = t[24]),
      (I = t[25]),
      (L = t[26]),
      (R = t[27]),
      (z = t[28]),
      (U = t[29]),
      (W = t[30]),
      (G = t[31]),
      (K = t[32]));
  if (R !== Symbol.for(`react.early_return_sentinel`)) return R;
  let q = A?.disabled,
    J;
  t[39] !== O || t[40] !== k
    ? ((J = (e) => O(k, e)), (t[39] = O), (t[40] = k), (t[41] = J))
    : (J = t[41]);
  let Y;
  t[42] !== O || t[43] !== A
    ? ((Y = (e) => O(A, e)), (t[42] = O), (t[43] = A), (t[44] = Y))
    : (Y = t[44]);
  let X;
  return (
    t[45] !== D ||
    t[46] !== x ||
    t[47] !== j ||
    t[48] !== M ||
    t[49] !== N ||
    t[50] !== F ||
    t[51] !== I ||
    t[52] !== L ||
    t[53] !== q ||
    t[54] !== J ||
    t[55] !== Y ||
    t[56] !== z ||
    t[57] !== U ||
    t[58] !== W ||
    t[59] !== G ||
    t[60] !== K
      ? ((X = (0, H.jsx)(D, {
          actionLayout: z,
          title: U,
          body: W,
          disclaimerFooter: G,
          media: K,
          onDismiss: j,
          onCloseAutoFocus: M,
          initialFocus: N,
          primaryActionLabel: F,
          primaryActionDisabled: I,
          dismissLabel: L,
          secondaryActionColor: `accentSubtle`,
          secondaryActionDisabled: q,
          pendingAction: x,
          onPrimaryAction: J,
          onSecondaryAction: Y,
        })),
        (t[45] = D),
        (t[46] = x),
        (t[47] = j),
        (t[48] = M),
        (t[49] = N),
        (t[50] = F),
        (t[51] = I),
        (t[52] = L),
        (t[53] = q),
        (t[54] = J),
        (t[55] = Y),
        (t[56] = z),
        (t[57] = U),
        (t[58] = W),
        (t[59] = G),
        (t[60] = K),
        (t[61] = X))
      : (X = t[61]),
    X
  );
}
var B, V, H;
e(() => {
  ((B = x()), u(), (V = t(r(), 1)), p(), s(), o(), S(), i(), j(), T(), L(), A(), (H = b()));
})();
export { R as ModelPickerUpsellModal };
//# sourceMappingURL=modal-ae0d5c4ae47c.js.map
