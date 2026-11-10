import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Aw as t,
  Cot as n,
  Ixt as r,
  Jbt as i,
  Pxt as a,
  aSt as o,
  jw as s,
  nSt as c,
  rst as l,
  vzt as u,
  wot as d,
  xMt as f,
  yzt as p,
  zxt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  B1t as h,
  JZn as g,
  KXn as _,
  L1t as v,
  P1t as y,
  V1t as b,
  VZn as x,
  WZn as S,
  Xb as ee,
  Xl as C,
  Yb as te,
  Zl as ne,
  aJt as re,
  aWn as w,
  bOn as T,
  cJt as E,
  ec as ie,
  h$n as ae,
  iJt as D,
  iWn as O,
  iZn as k,
  kZn as A,
  nEt as j,
  nc as oe,
  ox as se,
  p$n as ce,
  tEt as le,
  uJt as ue,
  wOn as M,
  yjn as N,
} from "./app-initial-5851df3f6cb1.js";
import { n as de, r as fe } from "./engagement-4e2b4c5a0bbe.js";
import { i as pe, n as P, r as F, t as I } from "./image-group-carousel-349a6eccf475.js";
import { a as L, n as R } from "./metadata-cff3f4695011.js";
function z(e) {
  return (t, n) =>
    ue(t, n, {
      onCancel: (e) => {
        t.set(B, e, null);
      },
      onError: (e) => {
        t.set(B, e, null);
      },
      onStart: (r) => {
        t.set(B, r, {
          business: e,
          category: n.category,
          messageId: n.messageId,
          sourceConversationId: n.sourceConversationId,
        });
      },
    });
}
var B, V;
function H() {
  return (H = e(() => {
    (a(),
      d(),
      w(),
      E(),
      N(),
      h(),
      (B = o(n, (e) => null)),
      (V = c(n, (e, { get: t }) => {
        let n = t(B, e);
        if (n == null) return null;
        let r = t(A, e);
        return r != null &&
          Object.values(r).some(
            (e) =>
              e.message != null &&
              O(e.message).some((e) => {
                let t = y(e);
                if (t == null) return !1;
                let r = (typeof e.name == `string` ? e.name : t.name).trim().toLowerCase();
                return t.id === n.business.id || (r !== `` && r === n.business.name.trim().toLowerCase());
              }),
          )
          ? null
          : n.business;
      })));
  }))();
}
var U, W, G, K, q;
function J() {
  return (J = e(() => {
    (a(),
      k(),
      t(),
      d(),
      ae(),
      w(),
      E(),
      N(),
      M(),
      h(),
      H(),
      (U = c(n, (e, { get: t }) => (e != null && t(D, e) && t(B, e) == null ? t(S, e) : null))),
      (W = c(n, (e, { get: t }) => {
        let n = t(B, e),
          r = t(A, e);
        return (
          r != null &&
          Object.values(r).some(
            (r) =>
              r.message != null &&
              O(r.message).some(
                (r, i) =>
                  r.type === `image_group` &&
                  (r.layout === `full_width` || (r.start_idx === 0 && (t(D, e) || b(n?.category ?? null)))) &&
                  (!t(T, e) || _(r, i).some((e) => !s(e.src))),
              ),
          )
        );
      })),
      (G = c(n, (e, { get: t }) => {
        if (e == null) return null;
        let n = t(B, e);
        if (t(T, e)) return null;
        let r = t(re, e),
          i = n == null ? null : v(n.business),
          a = r ?? (i == null ? null : { id: i, src: i, status: `completed`, type: `generated-image` });
        if (a == null) return null;
        let o = t(ce).data?.age_status;
        return o === `over_18` || o === `unsure` ? a : null;
      })),
      (K = c(
        n,
        (e, { get: t }) => (t(D, e) || t(B, e) != null) && g(t(x, e)) && !t(W, e) && t(G, e) == null,
      )),
      (q = c(n, (e, { get: t }) => t(W, e) || t(G, e) != null || t(K, e))));
  }))();
}
function me(e) {
  let t = (0, X.c)(18),
    { conversationId: n, isTranscriptPending: r, turnContext: a, showClaimedBusinessTooltip: o } = e,
    s = r !== void 0 && r,
    c = o !== void 0 && o,
    l = (0, Z.useContext)(C),
    u = m(G, n),
    d = m(W, n),
    f = m(K, n),
    p = (0, Z.useContext)(F);
  if (d && !s) return null;
  let h = u != null && l !== `restricted`,
    g = null;
  if (h) {
    let e = `chatgpt:${n}`,
      r;
    t[0] === e ? (r = t[1]) : ((r = i(e)), (t[0] = e), (t[1] = r));
    let a;
    t[2] === u ? (a = t[3]) : ((a = [u]), (t[2] = u), (t[3] = a));
    let o;
    (t[4] !== r || t[5] !== a
      ? ((o = (0, Q.jsx)(I, { conversationId: r, images: a })), (t[4] = r), (t[5] = a), (t[6] = o))
      : (o = t[6]),
      (g = o));
  } else if (f || (s && d)) {
    let e;
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(le, { className: `aspect-5/4`, "aria-hidden": `true`, variant: `prominent` })),
        (t[7] = e))
      : (e = t[7]);
    let n;
    (t[8] === p
      ? (n = t[9])
      : ((n = (0, Q.jsx)(`div`, {
          className: `-mx-6 mb-5`,
          children: (0, Q.jsx)(`div`, { ref: p, "data-entity-photos": !0, children: e }),
        })),
        (t[8] = p),
        (t[9] = n)),
      (g = n));
  }
  let _;
  t[10] !== n || t[11] !== s || t[12] !== c || t[13] !== a
    ? ((_ = (0, Q.jsx)(Y, {
        conversationId: n,
        isTranscriptPending: s,
        turnContext: a,
        showClaimedBusinessTooltip: c,
      })),
      (t[10] = n),
      (t[11] = s),
      (t[12] = c),
      (t[13] = a),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  return (
    t[15] !== g || t[16] !== _
      ? ((v = (0, Q.jsxs)(Q.Fragment, { children: [g, _] })), (t[15] = g), (t[16] = _), (t[17] = v))
      : (v = t[17]),
    v
  );
}
function Y(e) {
  let t = (0, X.c)(16),
    { conversationId: i, isTranscriptPending: a, turnContext: o, showClaimedBusinessTooltip: s } = e,
    c = a !== void 0 && a,
    l = s !== void 0 && s,
    u = r(n),
    d = (0, Z.useContext)(C),
    f = m(T, i),
    p = m(B, i),
    h = m(V, i),
    g = c ? p?.business : h;
  if (g == null) return null;
  let _ = f ? `restricted` : d,
    v = o ?? null,
    y;
  t[0] !== g.id ||
  t[1] !== p?.category ||
  t[2] !== p?.messageId ||
  t[3] !== p?.sourceConversationId ||
  t[4] !== u
    ? ((y = (e) => {
        fe(u, {
          actionType: te.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
          entityAffordance: e,
          entityId: g.id.trim() || void 0,
          entityCategory: p?.category ?? void 0,
          messageId: p?.messageId,
          assistantMessageId: p?.messageId,
          conversationId: p?.sourceConversationId,
          contentReferenceType: `entity_metadata`,
          surfaceLocation: ee.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
          isGenui: !1,
        });
      }),
      (t[0] = g.id),
      (t[1] = p?.category),
      (t[2] = p?.messageId),
      (t[3] = p?.sourceConversationId),
      (t[4] = u),
      (t[5] = y))
    : (y = t[5]);
  let b;
  t[6] !== g || t[7] !== l || t[8] !== y
    ? ((b = (0, Q.jsx)(R, { business: g, isOptimistic: !0, showClaimedBusinessTooltip: l, onAction: y })),
      (t[6] = g),
      (t[7] = l),
      (t[8] = y),
      (t[9] = b))
    : (b = t[9]);
  let x;
  t[10] !== v || t[11] !== b
    ? ((x = (0, Q.jsx)(ie, { value: v, children: b })), (t[10] = v), (t[11] = b), (t[12] = x))
    : (x = t[12]);
  let S;
  return (
    t[13] !== _ || t[14] !== x
      ? ((S = (0, Q.jsx)(C, { value: _, children: x })), (t[13] = _), (t[14] = x), (t[15] = S))
      : (S = t[15]),
    S
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = u()),
      se(),
      a(),
      l(),
      (Z = p()),
      j(),
      ne(),
      d(),
      P(),
      oe(),
      M(),
      de(),
      L(),
      H(),
      pe(),
      J(),
      (Q = f()));
  }))();
}
export { U as a, z as c, q as i, H as l, me as n, J as o, $ as r, G as s, Y as t, B as u };
//# sourceMappingURL=optimistic-metadata-edcd12837ae2.js.map
