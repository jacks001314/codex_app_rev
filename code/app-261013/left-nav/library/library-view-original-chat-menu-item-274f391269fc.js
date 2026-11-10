import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  Cat as i,
  Cot as a,
  IDt as o,
  Ixt as s,
  Pxt as c,
  TJ as l,
  TO as u,
  VDt as d,
  hot as f,
  jDt as p,
  jH as m,
  lot as h,
  lu as g,
  t3 as _,
  uu as v,
  vzt as y,
  wot as b,
  xMt as x,
  xat as S,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as C,
  XMr as w,
  Ymr as T,
  aIr as E,
  ehr as D,
  lIr as O,
  nT as k,
  oIr as A,
  rT as j,
  sIr as M,
  tNr as N,
} from "./app-initial-5851df3f6cb1.js";
async function P(e, t, n, r) {
  let i = e.get(C),
    a = e.get(w),
    o = e.get(M),
    s = () => n() && i === e.get(C) && a === e.get(w) && o === e.get(M),
    c = () => {
      s() &&
        e
          .get(f)
          .danger(
            e
              .get(A)
              .formatMessage({
                id: `library.entity.originalChatUnavailable`,
                defaultMessage: `Original chat is no longer available`,
                description: `Error when the original chat for a saved Library entity is deleted, archived, or cannot be loaded`,
              }),
            { errorAnalytics: { toastId: `unknown` } },
          );
    },
    l = F(t);
  if (l == null) {
    c();
    return;
  }
  try {
    let e = await T.safeGet(`/conversation/{conversation_id}`, {
      parameters: { path: { conversation_id: t.conversation_id.trim() } },
      additionalHeaders: i == null ? void 0 : { "ChatGPT-Account-ID": i },
    });
    if (!s()) return;
    if (e.is_archived) {
      c();
      return;
    }
    o.navigate(l) && r?.();
  } catch {
    c();
  }
}
function F(e) {
  let t = e?.conversation_id.trim();
  if (!t) return null;
  let n = S(t),
    r = e?.message_id.trim();
  return r ? `${n}?${new URLSearchParams({ messageId: r })}` : n;
}
function I() {
  return (I = e(() => {
    (O(), N(), D(), i(), h(), E());
  }))();
}
function L(e) {
  let n = (0, z.c)(12),
    { origin: i, onNavigate: a } = e,
    o = d(),
    s = j();
  if (!i?.conversation_id.trim()) return null;
  let c;
  n[0] === o
    ? (c = n[1])
    : ((c = o.formatMessage({
        id: `library.entity.moreActions`,
        defaultMessage: `More actions`,
        description: `Accessible label for the menu of a saved Library entity in the details sidebar`,
      })),
      (n[0] = o),
      (n[1] = c));
  let l;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, B.jsx)(m, {})), (n[2] = l)) : (l = n[2]);
  let u;
  n[3] === c
    ? (u = n[4])
    : ((u = (0, B.jsx)(t, { color: `ghostActive`, size: `entityHeader`, "aria-label": c, children: l })),
      (n[3] = c),
      (n[4] = u));
  let f;
  n[5] !== s || n[6] !== a || n[7] !== i
    ? ((f = (0, B.jsx)(R, { origin: i, isCurrent: s, onNavigate: a })),
      (n[5] = s),
      (n[6] = a),
      (n[7] = i),
      (n[8] = f))
    : (f = n[8]);
  let p;
  return (
    n[9] !== u || n[10] !== f
      ? ((p = (0, B.jsx)(r, { side: `bottom`, align: `start`, triggerButton: u, children: f })),
        (n[9] = u),
        (n[10] = f),
        (n[11] = p))
      : (p = n[11]),
    p
  );
}
function R(e) {
  let t = (0, z.c)(11),
    { origin: n, isCurrent: r, onNavigate: i } = e,
    c = s(a),
    l;
  t[0] === n ? (l = t[1]) : ((l = F(n)), (t[0] = n), (t[1] = l));
  let d = l;
  if (n == null || d == null) return null;
  let f;
  t[2] !== r || t[3] !== i || t[4] !== n || t[5] !== c
    ? ((f = (e) => {
        e.button !== 0 ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          (e.preventDefault(), e.stopPropagation(), P(c, n, r, i));
      }),
      (t[2] = r),
      (t[3] = i),
      (t[4] = n),
      (t[5] = c),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, B.jsx)(o, {
        id: `library.entity.viewOriginalChat`,
        defaultMessage: `View original chat`,
        description: `Menu item that opens the chat where a saved Library entity was first saved`,
      })),
      (t[7] = p))
    : (p = t[7]);
  let m;
  return (
    t[8] !== f || t[9] !== d
      ? ((m = (0, B.jsx)(u.Item, { href: d, leftIconAsset: g, onClick: f, children: p })),
        (t[8] = f),
        (t[9] = d),
        (t[10] = m))
      : (m = t[10]),
    m
  );
}
var z, B;
function V() {
  return (V = e(() => {
    ((z = y()), v(), c(), p(), _(), n(), l(), b(), k(), I(), (B = x()));
  }))();
}
export { F as a, I as i, R as n, V as r, L as t };
//# sourceMappingURL=library-view-original-chat-menu-item-274f391269fc.js.map
