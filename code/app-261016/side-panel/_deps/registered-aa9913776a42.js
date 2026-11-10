import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as n,
  PBt as r,
  ZSt as i,
  bCt as a,
  iFt as o,
  nCt as s,
  tit as c,
  yCt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BBr as u,
  Fer as d,
  Ftr as f,
  Itr as p,
  K$r as m,
  Mor as h,
  Ntr as g,
  RBr as _,
  XEr as v,
  ZEr as y,
  c1r as b,
  eer as x,
  itr as S,
  l1r as C,
  lEr as w,
  mDr as T,
  mSn as E,
  otr as D,
  pDr as O,
  pSn as k,
  q$r as A,
} from "./app-initial-ad16eaadf81f.js";
import { n as j, t as M } from "./conversation-d1c3cb59a3b4.js";
function N(e) {
  let t = (0, P.c)(7),
    { conversationId: n, hostId: r, title: i, draft: a } = e,
    o;
  t[0] !== n || t[1] !== r
    ? ((o = { conversationId: n, hostId: r }), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let c = s(R, o),
    l;
  return (
    t[3] !== a || t[4] !== c || t[5] !== i
      ? ((l = c == null ? null : (0, I.jsx)(M, { title: i, draft: a, ...c })),
        (t[3] = a),
        (t[4] = c),
        (t[5] = i),
        (t[6] = l))
      : (l = t[6]),
    l
  );
}
var P, F, I, L, R;
function z() {
  return (z = e(() => {
    ((P = r()),
      (F = t(o(), 1)),
      i(),
      O(),
      C(),
      A(),
      u(),
      x(),
      v(),
      j(),
      E(),
      f(),
      h(),
      (I = n()),
      (L = a(
        k,
        (e) => null,
        (e, { get: t, set: n }) => {
          (t(D, e), n(null));
          let r = t(_, e.hostId);
          if (r == null) return;
          let i = new AbortController();
          return (
            c(r.rpc.getLatestTurnMessages(e.threadId), i.signal).then(
              (e) => {
                if (i.signal.aborted || e == null) return;
                let { displayRawText: t } = m({ input: e.input }),
                  r =
                    w(t)?.map(({ answer: e }) => e).join(`

`) ?? b(t);
                n({
                  isInProgress: e.status === `inProgress`,
                  requestExcerpt: T(Array.from(r.slice(0, 1e3)).join(``)),
                  responseExcerpt:
                    e.response == null ? null : T(Array.from(e.response.slice(0, 1e3)).join(``)),
                });
              },
              () => {
                i.signal.aborted || n(null);
              },
            ),
            () => {
              i.abort();
            }
          );
        },
      )),
      (R = l(
        k,
        ({ conversationId: e, hostId: t }, { get: n }) => {
          if (e == null) return null;
          let r = { hostId: t ?? n(d, e), threadId: e },
            i = n(S, r);
          if (i == null) return null;
          let a = n(L, r),
            o = i.summary.threadRuntimeStatus,
            s = i.isConversationInProgress,
            c = null;
          o?.type === `active` &&
            (o.activeFlags.includes(`waitingOnApproval`)
              ? (c = `waitingOnApproval`)
              : o.activeFlags.includes(`waitingOnUserInput`) && (c = `waitingOnUserInput`));
          let l = { type: s ? `loading` : `idle`, unread: i.summary.hasUnreadTurn };
          (o?.type === `systemError` || i.latestTurnStatus === `failed`) && (l.type = `error`);
          let u = g(i.requests, n(y));
          u != null && (c = p(u) ? `waitingOnApproval` : `waitingOnUserInput`);
          let f = !s || a?.isInProgress;
          return {
            waitingFor: c,
            statusState: l,
            requestExcerpt: f ? (a?.requestExcerpt ?? ``) : null,
            responseExcerpt: f ? (a?.responseExcerpt ?? null) : null,
          };
        },
        { isEqual: F.default },
      )));
  }))();
}
export { z as n, N as t };
//# sourceMappingURL=registered-aa9913776a42.js.map
