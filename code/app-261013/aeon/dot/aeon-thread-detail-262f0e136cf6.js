import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  HNt as r,
  Hxt as i,
  Ixt as a,
  Pxt as o,
  _Mt as s,
  gMt as c,
  nSt as l,
  qft as u,
  rst as d,
  vzt as f,
  wot as p,
  xMt as m,
  zxt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as g,
  ASr as _,
  Btr as v,
  Djr as y,
  Ejr as b,
  Evr as x,
  G8n as ee,
  MTn as S,
  a0n as C,
  fvr as w,
  gvr as T,
  hnr as E,
  jSr as te,
  kTn as ne,
  kvr as D,
  mjr as O,
  mvr as k,
  o8n as A,
  pjr as j,
  pnr as re,
  s0n as ie,
  v8n as ae,
  wvr as oe,
  xvr as se,
  ztr as M,
} from "./app-initial-5851df3f6cb1.js";
import { bd as N, xd as P } from "./app-primary-fe8a450b3b04.js";
import { r as F, t as I } from "./local-conversation-turn-69783815d57d.js";
import { n as L, t as R } from "./agent-activity-item-1be092f0c744.js";
import { d as z, u as B } from "./generated-image-output-visibility-89248db44ece.js";
function V(e, t, n) {
  return {
    hasItems: t.items.length > 0,
    hasVisibleItems: B(t.items, !0, !0, { hostId: n }).length > 0,
    canGroup: U(e, t, n),
  };
}
function H(e, t) {
  if (t == null || t.filter((e) => e.type === `content`).length !== e.length)
    return e.flatMap((e, t) => (e.hasItems ? [[t]] : []));
  let n = [],
    r = e.findLastIndex((e) => e.hasVisibleItems),
    i = null,
    a = 0;
  for (let o of t) {
    if (o.type === `gap`) {
      i = null;
      continue;
    }
    let t = a++,
      s = e[t],
      c = t !== r && s.canGroup,
      l = c ? i : null;
    (l == null ? s.hasItems && ((l = [t]), n.push(l)) : l.push(t), (i = c ? l : null));
  }
  return n;
}
function U(e, t, n) {
  if (
    e.status !== `completed` ||
    e.turnId == null ||
    e.error != null ||
    e.itemsPagination?.hasLoadedOldest === !1 ||
    (e.hookRuns?.length ?? 0) > 0 ||
    Object.values(t.artifacts).some((e) => e.length > 0)
  )
    return !1;
  let r = B(t.items, !0, !0, { hostId: n }).filter(
    (e) => e.type !== `reasoning` && (e.type !== `automatic-approval-review` || e.status !== `approved`),
  );
  return (
    r.length > 0 &&
    r.every(
      (e) =>
        (e.type === `external-event` && !e.subscriptionEnded) ||
        (e.type === `mcp-tool-call` &&
          e.result?.type === `success` &&
          R(e)?.grouping === `groupable` &&
          !O({ isCodexAppsServer: y(e.invocation.server), result: e.result })),
    ) &&
    M({ assistantContent: null, includeAppgenResources: !0, turn: t }).length === 0
  );
}
function W() {
  return (W = e(() => {
    (b(), z(), L(), j(), v());
  }))();
}
var G, K, q, J, Y;
function X() {
  return (X = e(() => {
    ((G = t(r(), 1)),
      o(),
      _(),
      w(),
      re(),
      p(),
      W(),
      (K = l(
        n,
        (e, { get: t, scope: n }) => {
          t(x, e);
          for (let n of t(D, e) ?? []) t(k, { ...e, itemId: n });
          let r = T(n, e);
          if (r == null) return null;
          let i = E(r, [], { openAIFormElicitationsEnabled: t(te), preserveServerUserMessages: !0 });
          return { turnState: i, grouping: V(r, i, e.hostId) };
        },
        { isEqual: G.default },
      )),
      (q = l(n, (e, { get: t }) => t(K, e)?.grouping, { isEqual: G.default })),
      (J = l(
        n,
        (e, { get: t }) => {
          let n = t(oe, e);
          if (n == null) return null;
          let r = n.map((e) => t(q, e));
          return r.some((e) => e == null)
            ? null
            : H(
                r.filter((e) => e != null),
                t(se, e),
              ).map((e) => e.map((e) => n[e]));
        },
        { isEqual: G.default },
      )),
      (Y = l(
        n,
        (e, { get: t }) => {
          let n = e.map((e) => t(K, e)?.turnState),
            r = n[0];
          return r == null ? null : { ...r, items: n.flatMap((e) => e?.items ?? []) };
        },
        { isEqual: G.default },
      )));
  }))();
}
function ce(e) {
  let t = (0, Z.c)(16),
    { conversationId: n } = e,
    r = h(g, n),
    a;
  t[0] === r ? (a = t[1]) : ((a = { hostId: r }), (t[0] = r), (t[1] = a));
  let { data: o } = ie(a),
    s;
  t[2] !== n || t[3] !== r
    ? ((s = { hostId: r, threadId: n }), (t[2] = n), (t[3] = r), (t[4] = s))
    : (s = t[4]);
  let l = h(J, s),
    u;
  t[5] === n ? (u = t[6]) : ((u = { footer: null, turnKey: n }), (t[5] = n), (t[6] = u));
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = c(ne, `flex flex-col gap-3 py-5`)), (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] !== l || t[9] !== o
    ? ((f = l?.map((e, t) =>
        (0, Q.jsx)(le, { keys: e, index: t, total: l.length, resolvedApps: o }, e[0].entityKey),
      )),
      (t[8] = l),
      (t[9] = o),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] === f
    ? (p = t[12])
    : ((p = (0, Q.jsx)(`div`, {
        className: `h-full min-h-0 overflow-x-hidden overflow-y-auto`,
        ref: ue,
        children: (0, Q.jsx)(`div`, { className: d, children: f }),
      })),
      (t[11] = f),
      (t[12] = p));
  let m;
  return (
    t[13] !== u || t[14] !== p
      ? ((m = (0, Q.jsx)(i, { scope: N, value: u, children: p })), (t[13] = u), (t[14] = p), (t[15] = m))
      : (m = t[15]),
    m
  );
}
function le(e) {
  let t = (0, Z.c)(18),
    { keys: r, index: i, total: o, resolvedApps: s } = e,
    c = a(n),
    l = r[0],
    { hostId: d, threadId: f } = l,
    p = h(Y, r),
    m = h(x, l),
    g = h(A, f),
    _ = h(ee, f),
    v;
  t[0] !== m || t[1] !== l || t[2] !== c
    ? ((v = m == null ? null : T(c, l)), (t[0] = m), (t[1] = l), (t[2] = c), (t[3] = v))
    : (v = t[3]);
  let y = v;
  if (y == null || p == null) return null;
  let b = y.turnId ?? l.entityKey,
    S;
  t[4] === g ? (S = t[5]) : ((S = g == null ? null : u(g)), (t[4] = g), (t[5] = S));
  let C = i === o - 1,
    w = i + 1,
    E;
  return (
    t[6] !== f ||
    t[7] !== d ||
    t[8] !== _ ||
    t[9] !== s ||
    t[10] !== S ||
    t[11] !== C ||
    t[12] !== w ||
    t[13] !== o ||
    t[14] !== y ||
    t[15] !== b ||
    t[16] !== p
      ? ((E = (0, Q.jsx)(I, {
          commentaryDisplay: `all`,
          conversationId: f,
          cwd: S,
          hostId: d,
          isAeonThread: !0,
          isMostRecentTurn: C,
          isReadOnly: !0,
          modelProvider: _,
          preserveServerUserMessages: !0,
          resolvedApps: s,
          showFullTranscript: !0,
          showInProgressFixedContent: !1,
          totalTurnCount: o,
          turn: y,
          turnState: p,
          turnNumber: w,
          turnSearchKey: b,
        })),
        (t[6] = f),
        (t[7] = d),
        (t[8] = _),
        (t[9] = s),
        (t[10] = S),
        (t[11] = C),
        (t[12] = w),
        (t[13] = o),
        (t[14] = y),
        (t[15] = b),
        (t[16] = p),
        (t[17] = E))
      : (E = t[17]),
    E
  );
}
function ue(e) {
  e != null && (e.scrollTop = e.scrollHeight);
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = f()), s(), o(), d(), ae(), w(), C(), P(), F(), p(), S(), X(), (Q = m()));
  }))();
}
$();
export { ce as AeonThreadDetail };
//# sourceMappingURL=aeon-thread-detail-262f0e136cf6.js.map
