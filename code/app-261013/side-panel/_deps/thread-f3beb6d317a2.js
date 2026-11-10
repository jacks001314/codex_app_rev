import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Pxt as n,
  Zxt as r,
  c_t as i,
  l_t as a,
  vzt as o,
  wot as s,
  xMt as c,
  yzt as l,
  zxt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bkr as d,
  Vkr as f,
  XPr as p,
  Y6n as m,
  YPr as h,
  bvr as g,
  fvr as _,
  v8n as v,
  w8n as y,
  yvr as b,
} from "./app-initial-5851df3f6cb1.js";
import { Qs as x, Zs as S } from "./app-primary-fe8a450b3b04.js";
import { i as C, o as w, r as T, t as E } from "./feedback-c976197c5916.js";
var D;
function O() {
  return (O = e(() => {
    (n(),
      i(),
      p(),
      v(),
      _(),
      s(),
      d(),
      (D = r(t, (e, { scope: t, get: n }) => ({
        queryKey: [`orbit-activity-thread-history`, e.hostId, e.threadId],
        enabled: n(b, e) !== !0 && n(m, e) !== !0,
        queryFn: () => h(t, e.hostId).loadBackgroundThreadHistoryPage(e.threadId, { prioritize: !0 }),
        staleTime: 0,
        retry: (e, t) => t.name !== `AbortError` && !a(t) && f(e, t),
      }))));
  }))();
}
function k(e) {
  let t = (0, A.c)(6),
    { renderSlots: n, renderThread: r, ...i } = e,
    o = { hostId: i.hostId, threadId: i.conversationId },
    s = u(y, i.conversationId),
    c = u(b, o),
    l = u(m, o),
    d = u(g, o),
    { data: f, isError: p, error: h, isFetched: _, isFetching: v, refetch: x } = u(D, o),
    w = f != null || c === !0 || l === !0,
    O = d != null,
    k = h instanceof Error && a(h),
    N = `error`;
  k ? (N = `missing`) : w ? (N = `empty`) : s && (N = `archived`);
  let P;
  t[0] !== w || t[1] !== p || t[2] !== v || t[3] !== x || t[4] !== O
    ? ((P = p && !w && O ? (0, M.jsx)(T, { isRetrying: v, onRetry: () => void x() }) : null),
      (t[0] = w),
      (t[1] = p),
      (t[2] = v),
      (t[3] = x),
      (t[4] = O),
      (t[5] = P))
    : (P = t[5]);
  let F = (0, M.jsxs)(M.Fragment, { children: [i.transcriptHeader, P] }),
    I = (0, M.jsxs)(M.Fragment, {
      children: [
        (0, M.jsx)(S, { threadKey: o }),
        O
          ? (0, M.jsx)(j.Suspense, {
              fallback: (0, M.jsxs)(M.Fragment, {
                children: [
                  (0, M.jsx)(`div`, { className: `px-4`, children: F }),
                  (0, M.jsx)(`div`, { className: `p-4`, children: (0, M.jsx)(C, {}) }),
                ],
              }),
              children: r({
                ...i,
                canInteract: !s && i.canInteract !== !1,
                shouldResume: !s && i.shouldResume !== !1,
                transcriptHeader: F,
              }),
            })
          : (0, M.jsxs)(M.Fragment, {
              children: [
                (0, M.jsx)(`div`, { className: `px-4`, children: F }),
                p || w || (_ && v)
                  ? (0, M.jsx)(E, { state: N, isRetrying: v, onRetry: () => void x() })
                  : (0, M.jsx)(`div`, { className: `p-4`, children: (0, M.jsx)(C, {}) }),
              ],
            }),
      ],
    });
  return n?.({ headerRows: [], content: I }) ?? I;
}
var A, j, M;
function N() {
  return (N = e(() => {
    ((A = o()), n(), i(), (j = l()), v(), _(), x(), w(), O(), (M = c()));
  }))();
}
export { N as n, k as t };
//# sourceMappingURL=thread-f3beb6d317a2.js.map
