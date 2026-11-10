import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HNt as n,
  Pxt as r,
  nSt as i,
  rSt as a,
  vzt as o,
  xMt as s,
  zxt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  $5n as l,
  $8n as u,
  ASr as d,
  QJr as f,
  QPr as p,
  QSr as m,
  S5n as h,
  Vxr as g,
  Z5n as _,
  ZJr as v,
  ZSr as y,
  cyn as b,
  e7n as x,
  eFr as S,
  jSr as C,
  lyn as w,
  mYr as T,
  pYr as E,
  srr as D,
  v8n as O,
  w5n as k,
} from "./app-initial-5851df3f6cb1.js";
import { n as A, t as j } from "./conversation-a27aae5d4454.js";
function M(e) {
  let t = (0, N.c)(7),
    { conversationId: n, hostId: r, title: i, draft: a } = e,
    o;
  t[0] !== n || t[1] !== r
    ? ((o = { conversationId: n, hostId: r }), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = c(L, o),
    l;
  return (
    t[3] !== a || t[4] !== s || t[5] !== i
      ? ((l = s == null ? null : (0, F.jsx)(j, { title: i, draft: a, ...s })),
        (t[3] = a),
        (t[4] = s),
        (t[5] = i),
        (t[6] = l))
      : (l = t[6]),
    l
  );
}
var N, P, F, I, L;
function R() {
  return (R = e(() => {
    ((N = o()),
      (P = t(n(), 1)),
      r(),
      y(),
      T(),
      f(),
      S(),
      O(),
      d(),
      A(),
      w(),
      l(),
      D(),
      (F = s()),
      (I = a(
        b,
        (e) => null,
        (e, { get: t, set: n }) => {
          (t(k, e), n(null));
          let r = t(p, e.hostId);
          if (r == null) return;
          let i = !0,
            a = r.rpc.getLatestTurnMessages(e.threadId);
          return (
            a.then(
              (e) => {
                i && n(e);
              },
              () => {
                i && n(null);
              },
            ),
            () => {
              ((i = !1), a[Symbol.dispose]());
            }
          );
        },
      )),
      (L = i(
        b,
        ({ conversationId: e, hostId: t }, { get: n }) => {
          if (e == null) return null;
          let r = { hostId: t ?? n(u, e), threadId: e },
            i = n(h, r);
          if (i == null) return null;
          let a = n(I, r),
            o = i.summary.threadRuntimeStatus,
            s = i.isConversationInProgress,
            c = null;
          o?.type === `active` &&
            (o.activeFlags.includes(`waitingOnApproval`)
              ? (c = `waitingOnApproval`)
              : o.activeFlags.includes(`waitingOnUserInput`) && (c = `waitingOnUserInput`));
          let l = { type: s ? `loading` : `idle`, unread: i.summary.hasUnreadTurn };
          (o?.type === `systemError` || i.latestTurnStatus === `failed`) && (l.type = `error`);
          let d = _(i.requests, n(C));
          d != null && (c = x(d) ? `waitingOnApproval` : `waitingOnUserInput`);
          let f = !s || a?.status === `inProgress`,
            { displayRawText: p } = v({ input: a?.input }),
            y =
              g(p)?.map(({ answer: e }) => e).join(`

`) ?? E(p);
          return {
            waitingFor: c,
            statusState: l,
            requestExcerpt: f ? m(y.slice(0, 1e3)) : null,
            responseExcerpt: f && a?.response != null ? m(a.response.slice(0, 1e3)) : null,
          };
        },
        { isEqual: P.default },
      )));
  }))();
}
export { R as n, M as t };
//# sourceMappingURL=registered-c7157f91a970.js.map
