const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./entity-752c8d649e33.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./conversation-a27aae5d4454.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Dat as n,
  Eat as r,
  Pxt as i,
  _Mt as a,
  _xt as o,
  fPt as s,
  gMt as c,
  pPt as l,
  vxt as u,
  vzt as d,
  xMt as f,
  z4 as p,
  zxt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  $qt as h,
  B1t as g,
  Cdt as _,
  DL as ee,
  EL as te,
  ETr as ne,
  Fmn as re,
  GMr as v,
  Gqt as ie,
  Imn as ae,
  Knt as oe,
  Lqt as y,
  Mwn as b,
  NDr as x,
  STr as S,
  Uqt as se,
  V1t as ce,
  Wnt as le,
  XMr as C,
  XQn as ue,
  YQn as w,
  aIr as de,
  cJt as T,
  dwn as fe,
  eJt as pe,
  iWt as E,
  jwn as D,
  kdt as O,
  lIr as k,
  nWt as A,
  oIr as j,
  oJt as M,
  pOr as N,
  pwn as P,
  sIr as F,
  sJt as I,
  tNr as L,
  tWt as R,
  uJt as z,
} from "./app-initial-5851df3f6cb1.js";
import { n as B, t as me } from "./chatgpt-entity-side-panel-tab-registry-7861cacc37dd.js";
import { n as he, t as V } from "./chatgpt-entity-side-panel-content-260a9a2b9073.js";
import { a as ge, i as _e, o as ve, t as ye } from "./chatgpt-entity-detail-panel-266b8c60d2b5.js";
function be({ open: e }) {
  return b(le, U, {
    paneWidth: ({ params: e }) => (e.category === `ledger_detail_sidebar` ? S : void 0),
    getId: (e, { conversationId: t }) => `chatgpt-entity:${t}`,
    isAvailable: (e) =>
      e.value.routeKind === `chatgpt-thread` || u({ path: `/finances`, end: !1 }, e.value.pathname) != null,
    renderThumbnail: (e, t) => (0, H.jsx)(W, { conversationId: e.conversationId, title: t.title }),
    sync: (e, t, n, r) => {
      if (t.params.reference?.category !== `business`) return () => {};
      let i = n.title;
      return e.watch(({ get: a }) => {
        let o = a(M, t.conversationId)?.query;
        o != null && o !== i && ((i = o), r.updateTab(e, n.tabId, { title: o }));
      });
    },
    open: e,
  });
}
var H, U, W;
function G() {
  return (G = e(() => {
    (o(),
      D(),
      T(),
      B(),
      oe(),
      p(),
      ne(),
      (H = f()),
      l(),
      (U = t(me, { propagateLoadError: !0 })),
      (W = t(
        async () => {
          let { RegisteredChatGptEntityThumbnail: e } = await s(
            async () => {
              let { RegisteredChatGptEntityThumbnail: e } = await import(`./entity-752c8d649e33.js`);
              return { RegisteredChatGptEntityThumbnail: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
            import.meta.url,
          );
          return e;
        },
        { propagateLoadError: !0 },
      )));
  }))();
}
function xe(e) {
  let t = (0, K.c)(10),
    { accountId: n, conversationId: r, params: i, onClose: a, onRestart: o } = e,
    s = m(M, r) ?? i,
    l;
  t[0] === s.category ? (l = t[1]) : ((l = ce(s.category)), (t[0] = s.category), (t[1] = l));
  let u = l,
    d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = !1), (t[2] = d)) : (d = t[2]);
  let f;
  return (
    t[3] !== n || t[4] !== r || t[5] !== u || t[6] !== a || t[7] !== o || t[8] !== s
      ? ((f = (0, q.jsxs)(`div`, {
          className: `relative h-full min-h-0 bg-surface text-default`,
          children: [
            d,
            s.category === `ledger_detail_sidebar` ||
            s.category === `product` ||
            s.category === `product_rationale_and_reviews` ||
            u
              ? (0, q.jsx)(ye, {
                  accountId: n,
                  conversationId: r,
                  params: s,
                  children: (0, q.jsx)(`div`, {
                    className: c(
                      s.category !== `ledger_detail_sidebar` &&
                        `[container-type:inline-size] px-6 pb-6 [container-name:thread-content]`,
                    ),
                    children: (0, q.jsx)(V, {
                      onRestart: o,
                      conversationId: r,
                      flushTop: !0,
                      params: s,
                      onOpenLibrary: s.category === `ledger_detail_sidebar` ? void 0 : a,
                      onClose: a,
                    }),
                  }),
                })
              : (0, q.jsx)(ge, {
                  className: `h-full`,
                  children: (0, q.jsx)(`div`, {
                    className: `[container-type:inline-size] px-6 pb-6 [container-name:thread-content]`,
                    children: (0, q.jsx)(V, {
                      onRestart: o,
                      conversationId: r,
                      flushTop: !0,
                      params: s,
                      onOpenLibrary: a,
                      onClose: a,
                      onRetry: s.category === `ask_sidebar` ? () => o(s, !1) : void 0,
                    }),
                  }),
                }),
          ],
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = u),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = d()), a(), i(), ve(), T(), _e(), he(), g(), (q = f()));
  }))();
}
function Y(e, t, r = z) {
  let i = e.get(ie);
  if (
    t.memorySource != null &&
    e.get(se) &&
    i != null &&
    w(e.get, i.conversationId) === w(e.get, t.sourceConversationId)
  )
    return (pe(e, t, r), Promise.resolve());
  if (
    (t.memorySource == null &&
      (e.value.routeKind === `chatgpt-thread` ||
        n(e.value.pathname) != null ||
        u(`/s/:postId`, e.value.pathname) != null)) ||
    e.value.pathname === `/maps` ||
    e.value.pathname === `/business-profiles` ||
    e.value.pathname === `/library` ||
    e.value.pathname.startsWith(`/library/d/`) ||
    ae(e.value.pathname)
  )
    return X(e, t, r);
  let a = e.get(N),
    o;
  function s(t, n) {
    if (e.get(N) !== a) return;
    let { cancel: r, completion: i, conversationId: c } = n(e, t);
    ((o ??= `chatgpt-entity:${c}`),
      P(e, Q, {
        revealAndFocus: !0,
        icon: (0, Z.jsx)(te, { className: `icon-sm` }),
        id: o,
        onClose: r,
        props: {
          accountId: a,
          conversationId: c,
          params: t,
          onRestart: async (e, t) => {
            (r(), s(e, t || e.forceRegenerate ? z : n));
          },
        },
        title: I(t, e.get(j)),
      }));
  }
  return (s(t, r), Promise.resolve());
}
function X(e, t, n = z) {
  let r = e.get(N),
    { cancel: i, completion: a, conversationId: o } = n(e, t),
    s = async (t, a) => {
      e.get(N) === r && (i(), await X(e, t, a || t.forceRegenerate ? z : n));
    },
    c = e.get(v),
    l = e.get(C),
    u = e.get(F).pathname,
    d,
    f = A(e, {
      label: I(t, e.get(j)),
      content: (0, Z.jsx)(
        xe,
        { accountId: r, conversationId: o, params: t, onRestart: s, onClose: () => f() },
        o,
      ),
      onClose: () => {
        (d?.(), i());
      },
    }),
    p = e.get(E)?.id;
  return (
    (d = e.watch((n) => {
      if (n.get(v) !== c || n.get(C) !== l || n.get(F).pathname !== u) {
        f();
        return;
      }
      if (t.reference?.category === `business`) {
        let t = n.get(M, o);
        t != null &&
          e.set(E, (e) => (e != null && e.id === p && e.label !== t.query ? { ...e, label: t.query } : e));
      }
    })),
    Promise.resolve()
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (O(),
      _(),
      o(),
      k(),
      fe(),
      L(),
      ee(),
      de(),
      re(),
      G(),
      R(),
      T(),
      J(),
      ue(),
      x(),
      h(),
      y(),
      r(),
      (Z = f()),
      (Q = be({ open: Y })));
  }))();
}
export { X as n, Y as r, $ as t };
//# sourceMappingURL=open-chatgpt-entity-side-panel-20bc8764b553.js.map
