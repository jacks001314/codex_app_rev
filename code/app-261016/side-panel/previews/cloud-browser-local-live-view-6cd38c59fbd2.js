import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  Mst as r,
  PBt as i,
  XOt as a,
  Y3 as o,
  Z3 as s,
  ZSt as c,
  iCt as l,
  jst as u,
  nCt as d,
  okt as f,
  tkt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as m,
  VPn as h,
  bLr as g,
  iRr as _,
  tyr as v,
  wLr as y,
  zRr as b,
} from "./app-initial-ad16eaadf81f.js";
import { n as x, t as S } from "./cloud-browser-view-5fc1ac92089c.js";
function C(e) {
  let t = (0, w.c)(7),
    { onActivate: n, label: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i =
        r ??
        (0, T.jsx)(p, {
          id: `chatgptConversations.cloudBrowser.liveView.takeControl`,
          defaultMessage: `Click anywhere to use the browser`,
          description: `Instruction centered below the live Cloud browser before a user activates interactive control. Clicking anywhere in the browser requests control and dismisses this instruction. No placeholders or rich text.`,
        })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === i
    ? (a = t[3])
    : ((a = (0, T.jsx)(`span`, {
        className: `pointer-events-none absolute inset-x-0 top-full flex h-12 items-center justify-center px-4 text-center text-sm select-none`,
        children: (0, T.jsx)(`span`, {
          className: `rounded-md bg-media-background/50 px-2 py-1 text-media-foreground`,
          children: i,
        }),
      })),
      (t[2] = i),
      (t[3] = a));
  let o;
  return (
    t[4] !== n || t[5] !== a
      ? ((o = (0, T.jsx)(`button`, {
          className: `absolute inset-0 cursor-interaction bg-transparent`,
          type: `button`,
          onClick: n,
          children: a,
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var w, T;
function E() {
  return (E = e(() => {
    ((w = i()), a(), (T = n()));
  }))();
}
function D(e) {
  let t = (0, j.c)(15),
    {
      conversationId: n,
      browserOwnerConversationId: r,
      isControlActivated: i,
      onControlActivation: a,
      targetTabId: o,
      fallback: s,
    } = e,
    c = d(m, n),
    u = r ?? c,
    f = l(b),
    p = l(g);
  if (o != null) return s;
  if (u == null || f == null || p == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, N.jsx)(A, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  let h;
  t[1] !== f || t[2] !== u || t[3] !== p
    ? ((h = JSON.stringify([u, f, p])), (t[1] = f), (t[2] = u), (t[3] = p), (t[4] = h))
    : (h = t[4]);
  let _;
  t[5] !== f || t[6] !== p
    ? ((_ = { accountId: f, userId: p }), (t[5] = f), (t[6] = p), (t[7] = _))
    : (_ = t[7]);
  let v;
  return (
    t[8] !== s || t[9] !== i || t[10] !== a || t[11] !== u || t[12] !== h || t[13] !== _
      ? ((v = (0, N.jsx)(
          O,
          {
            serverConversationId: u,
            identity: _,
            isControlActivated: i,
            onControlActivation: a,
            fallback: s,
          },
          h,
        )),
        (t[8] = s),
        (t[9] = i),
        (t[10] = a),
        (t[11] = u),
        (t[12] = h),
        (t[13] = _),
        (t[14] = v))
      : (v = t[14]),
    v
  );
}
function O(e) {
  let t = (0, j.c)(24),
    { serverConversationId: n, identity: i, isControlActivated: a, onControlActivation: o, fallback: s } = e,
    c = f(),
    [l, u] = (0, M.useState)(0),
    [d, p] = (0, M.useState)(!1),
    m;
  t[0] !== l || t[1] !== i.accountId || t[2] !== i.userId || t[3] !== n
    ? ((m = [`cloud-browser-local-handoff`, n, i.accountId, i.userId, l]),
      (t[0] = l),
      (t[1] = i.accountId),
      (t[2] = i.userId),
      (t[3] = n),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== i || t[6] !== n
    ? ((h = async (e) => {
        let { signal: t } = e,
          r = await _.safeGet(`/flora/browser/handoff`, {
            parameters: { query: { conversation_id: n } },
            additionalHeaders: { "ChatGPT-Account-ID": i.accountId },
            expectedIdentity: i,
            expectedErrorStatuses: [400, 401, 403, 404, 409, 429, 502, 503, 504],
            signal: AbortSignal.any([t, AbortSignal.timeout(2e4)]),
            retry: !1,
          });
        return (t.throwIfAborted(), r.novnc_url ?? null);
      }),
      (t[5] = i),
      (t[6] = n),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== m || t[9] !== h
    ? ((g = {
        queryKey: m,
        queryFn: h,
        gcTime: 0,
        staleTime: 1 / 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g))
    : (g = t[10]);
  let { data: v, isPending: y, isError: b } = r(g);
  if (b) {
    let e;
    return (
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, N.jsx)(A, {
            onRetry: () => {
              (p(!1), u(k));
            },
          })),
          (t[11] = e))
        : (e = t[11]),
      e
    );
  }
  if (!y && v == null) return s;
  let x = y || !d ? `connecting` : `streaming`,
    w;
  t[12] !== c || t[13] !== a || t[14] !== v
    ? ((w =
        v == null
          ? null
          : (0, N.jsx)(`iframe`, {
              ref: (e) => {
                a && e?.focus();
              },
              className: `size-full border-0`,
              "data-dd-privacy": `hidden`,
              inert: !a,
              src: v,
              tabIndex: a ? void 0 : -1,
              title: c.formatMessage({
                id: `chatgptConversations.cloudBrowser.liveView.ariaLabel`,
                defaultMessage: `Live cloud browser`,
                description: `Accessible label for the interactive video of the cloud browser used by a ChatGPT Work task`,
              }),
              allow: `clipboard-read; clipboard-write`,
              referrerPolicy: `no-referrer`,
              onLoad: () => p(!0),
            })),
      (t[12] = c),
      (t[13] = a),
      (t[14] = v),
      (t[15] = w))
    : (w = t[15]);
  let T;
  t[16] !== a || t[17] !== o || t[18] !== v
    ? ((T = v != null && !a ? (0, N.jsx)(C, { onActivate: o }) : null),
      (t[16] = a),
      (t[17] = o),
      (t[18] = v),
      (t[19] = T))
    : (T = t[19]);
  let E;
  return (
    t[20] !== x || t[21] !== w || t[22] !== T
      ? ((E = (0, N.jsx)(`div`, {
          className: `flex size-full min-h-0`,
          "data-codex-cloud-browser": !0,
          children: (0, N.jsxs)(S, { connectionState: x, children: [w, T] }),
        })),
        (t[20] = x),
        (t[21] = w),
        (t[22] = T),
        (t[23] = E))
      : (E = t[23]),
    E
  );
}
function k(e) {
  return e + 1;
}
function A(e) {
  let t = (0, j.c)(5),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, N.jsx)(p, {
        id: `chatgptConversations.cloudBrowser.liveView.unavailable`,
        defaultMessage: `Cloud browser is unavailable`,
        description: `Error shown when an interactive ChatGPT cloud browser session cannot be opened`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i =
        n == null
          ? null
          : (0, N.jsx)(o, {
              color: `secondary`,
              onClick: n,
              children: (0, N.jsx)(p, {
                id: `chatgptConversations.cloudBrowser.liveView.retry`,
                defaultMessage: `Retry`,
                description: `Button that retries connecting to the cloud browser after a local browser session could not be opened`,
              }),
            })),
      (t[1] = n),
      (t[2] = i));
  let a;
  return (
    t[3] === i
      ? (a = t[4])
      : ((a = (0, N.jsxs)(`div`, {
          className: `flex min-h-0 flex-1 flex-col items-center justify-center gap-2 bg-surface text-sm text-secondary select-none`,
          role: `status`,
          children: [r, i],
        })),
        (t[3] = i),
        (t[4] = a)),
    a
  );
}
var j, M, N;
function P() {
  return (P = e(() => {
    ((j = i()), u(), c(), (M = t()), a(), y(), s(), v(), h(), E(), x(), (N = n()));
  }))();
}
P();
export { D as LocalCloudBrowserLiveView };
//# sourceMappingURL=cloud-browser-local-live-view-6cd38c59fbd2.js.map
