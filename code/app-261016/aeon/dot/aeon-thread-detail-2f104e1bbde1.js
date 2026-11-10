import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  LNt as i,
  MNt as a,
  NNt as o,
  PBt as s,
  Qst as c,
  ZSt as l,
  aCt as u,
  cmt as d,
  iFt as f,
  nCt as p,
  sct as m,
  yCt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Bar as g,
  CSr as _,
  Der as v,
  ESr as y,
  Fer as b,
  H9n as ee,
  IFr as x,
  LFr as S,
  OSr as C,
  QOn as w,
  Rar as T,
  V3n as E,
  XEr as te,
  XFr as ne,
  YFr as D,
  ZEr as O,
  eer as re,
  gSr as ie,
  jSr as k,
  lar as A,
  mSr as j,
  tkn as ae,
  uar as oe,
  vSr as M,
  z3n as se,
} from "./app-initial-ad16eaadf81f.js";
import { Md as N, jd as P } from "./app-primary-3e00728c2a4c.js";
import { r as F, t as I } from "./local-conversation-turn-c29506b1be78.js";
import { n as L, t as R } from "./agent-activity-item-dbfd9b291095.js";
import { d as z, u as B } from "./generated-image-output-visibility-6eb3eb72358d.js";
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
          !S({ isCodexAppsServer: ne(e.invocation.server), result: e.result })),
    ) &&
    A({ assistantContent: null, includeAppgenResources: !0, turn: t }).length === 0
  );
}
function W() {
  return (W = e(() => {
    (D(), z(), L(), x(), oe());
  }))();
}
var G, K, q, J, Y;
function X() {
  return (X = e(() => {
    ((G = t(f(), 1)),
      l(),
      te(),
      j(),
      T(),
      r(),
      W(),
      (K = h(
        c,
        (e, { get: t, scope: n }) => {
          t(C, e);
          for (let n of t(k, e) ?? []) t(ie, { ...e, itemId: n });
          let r = M(n, e);
          if (r == null) return null;
          let i = g(r, [], { openAIFormElicitationsEnabled: t(O), preserveServerUserMessages: !0 });
          return { turnState: i, grouping: V(r, i, e.hostId) };
        },
        { isEqual: G.default },
      )),
      (q = h(c, (e, { get: t }) => t(K, e)?.grouping, { isEqual: G.default })),
      (J = h(
        c,
        (e, { get: t }) => {
          let n = t(y, e);
          if (n == null) return null;
          let r = n.map((e) => t(q, e));
          return r.some((e) => e == null)
            ? null
            : H(
                r.filter((e) => e != null),
                t(_, e),
              ).map((e) => e.map((e) => n[e]));
        },
        { isEqual: G.default },
      )),
      (Y = h(
        c,
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
    r = p(b, n),
    i;
  t[0] === r ? (i = t[1]) : ((i = { hostId: r }), (t[0] = r), (t[1] = i));
  let { data: o } = E(i),
    s;
  t[2] !== n || t[3] !== r
    ? ((s = { hostId: r, threadId: n }), (t[2] = n), (t[3] = r), (t[4] = s))
    : (s = t[4]);
  let c = p(J, s),
    l;
  t[5] === n ? (l = t[6]) : ((l = { footer: null, turnKey: n }), (t[5] = n), (t[6] = l));
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = a(w, `flex flex-col gap-3 py-5`)), (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] !== c || t[9] !== o
    ? ((f = c?.map((e, t) =>
        (0, Q.jsx)(le, { keys: e, index: t, total: c.length, resolvedApps: o }, e[0].entityKey),
      )),
      (t[8] = c),
      (t[9] = o),
      (t[10] = f))
    : (f = t[10]);
  let m;
  t[11] === f
    ? (m = t[12])
    : ((m = (0, Q.jsx)(`div`, {
        className: `h-full min-h-0 overflow-x-hidden overflow-y-auto`,
        ref: ue,
        children: (0, Q.jsx)(`div`, { className: d, children: f }),
      })),
      (t[11] = f),
      (t[12] = m));
  let h;
  return (
    t[13] !== l || t[14] !== m
      ? ((h = (0, Q.jsx)(u, { scope: P, value: l, children: m })), (t[13] = l), (t[14] = m), (t[15] = h))
      : (h = t[15]),
    h
  );
}
function le(e) {
  let t = (0, Z.c)(18),
    { keys: r, index: i, total: a, resolvedApps: o } = e,
    s = n(c),
    l = r[0],
    { hostId: u, threadId: f } = l,
    m = p(Y, r),
    h = p(C, l),
    g = p(ee, f),
    _ = p(v, f),
    y;
  t[0] !== h || t[1] !== l || t[2] !== s
    ? ((y = h == null ? null : M(s, l)), (t[0] = h), (t[1] = l), (t[2] = s), (t[3] = y))
    : (y = t[3]);
  let b = y;
  if (b == null || m == null) return null;
  let x = b.turnId ?? l.entityKey,
    S;
  t[4] === g ? (S = t[5]) : ((S = g == null ? null : d(g)), (t[4] = g), (t[5] = S));
  let w = i === a - 1,
    T = i + 1,
    E;
  return (
    t[6] !== f ||
    t[7] !== u ||
    t[8] !== _ ||
    t[9] !== o ||
    t[10] !== S ||
    t[11] !== w ||
    t[12] !== T ||
    t[13] !== a ||
    t[14] !== b ||
    t[15] !== x ||
    t[16] !== m
      ? ((E = (0, Q.jsx)(I, {
          commentaryDisplay: `all`,
          conversationId: f,
          cwd: S,
          hostId: u,
          isAeonThread: !0,
          isMostRecentTurn: w,
          isReadOnly: !0,
          modelProvider: _,
          preserveServerUserMessages: !0,
          resolvedApps: o,
          showFullTranscript: !0,
          showInProgressFixedContent: !1,
          totalTurnCount: a,
          turn: b,
          turnState: m,
          turnNumber: T,
          turnSearchKey: x,
        })),
        (t[6] = f),
        (t[7] = u),
        (t[8] = _),
        (t[9] = o),
        (t[10] = S),
        (t[11] = w),
        (t[12] = T),
        (t[13] = a),
        (t[14] = b),
        (t[15] = x),
        (t[16] = m),
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
    ((Z = s()), o(), l(), m(), re(), j(), se(), N(), F(), r(), ae(), X(), (Q = i()));
  }))();
}
$();
export { ce as AeonThreadDetail };
//# sourceMappingURL=aeon-thread-detail-2f104e1bbde1.js.map
