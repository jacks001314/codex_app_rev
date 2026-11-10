import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Pxt as r,
  VDt as i,
  Vxt as a,
  Xot as o,
  Yot as s,
  jDt as c,
  t3 as l,
  vzt as u,
  xMt as d,
  yzt as f,
  zxt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as m,
  YMr as h,
  Ymr as g,
  ehr as _,
  pZn as v,
  tNr as y,
  yjn as b,
} from "./app-initial-5851df3f6cb1.js";
import { n as x, t as S } from "./cloud-browser-view-42d40ec8a73c.js";
function C(e) {
  let t = (0, w.c)(7),
    { onActivate: r, label: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a =
        i ??
        (0, T.jsx)(n, {
          id: `chatgptConversations.cloudBrowser.liveView.takeControl`,
          defaultMessage: `Click anywhere to use the browser`,
          description: `Instruction centered below the live Cloud browser before a user activates interactive control. Clicking anywhere in the browser requests control and dismisses this instruction. No placeholders or rich text.`,
        })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === a
    ? (o = t[3])
    : ((o = (0, T.jsx)(`span`, {
        className: `pointer-events-none absolute inset-x-0 top-full flex h-12 items-center justify-center px-4 text-center text-sm select-none`,
        children: (0, T.jsx)(`span`, {
          className: `rounded-md bg-media-background/50 px-2 py-1 text-media-foreground`,
          children: a,
        }),
      })),
      (t[2] = a),
      (t[3] = o));
  let s;
  return (
    t[4] !== r || t[5] !== o
      ? ((s = (0, T.jsx)(`button`, {
          className: `absolute inset-0 cursor-interaction bg-transparent`,
          type: `button`,
          onClick: r,
          children: o,
        })),
        (t[4] = r),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var w, T;
function E() {
  return (E = e(() => {
    ((w = u()), c(), (T = d()));
  }))();
}
function D(e) {
  let t = (0, j.c)(15),
    {
      conversationId: n,
      browserOwnerConversationId: r,
      isControlActivated: i,
      onControlActivation: o,
      targetTabId: s,
      fallback: c,
    } = e,
    l = p(v, n),
    u = r ?? l,
    d = a(m),
    f = a(h);
  if (s != null) return c;
  if (u == null || d == null || f == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, N.jsx)(A, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  let g;
  t[1] !== d || t[2] !== u || t[3] !== f
    ? ((g = JSON.stringify([u, d, f])), (t[1] = d), (t[2] = u), (t[3] = f), (t[4] = g))
    : (g = t[4]);
  let _;
  t[5] !== d || t[6] !== f
    ? ((_ = { accountId: d, userId: f }), (t[5] = d), (t[6] = f), (t[7] = _))
    : (_ = t[7]);
  let y;
  return (
    t[8] !== c || t[9] !== i || t[10] !== o || t[11] !== u || t[12] !== g || t[13] !== _
      ? ((y = (0, N.jsx)(
          O,
          {
            serverConversationId: u,
            identity: _,
            isControlActivated: i,
            onControlActivation: o,
            fallback: c,
          },
          g,
        )),
        (t[8] = c),
        (t[9] = i),
        (t[10] = o),
        (t[11] = u),
        (t[12] = g),
        (t[13] = _),
        (t[14] = y))
      : (y = t[14]),
    y
  );
}
function O(e) {
  let t = (0, j.c)(24),
    { serverConversationId: n, identity: r, isControlActivated: a, onControlActivation: s, fallback: c } = e,
    l = i(),
    [u, d] = (0, M.useState)(0),
    [f, p] = (0, M.useState)(!1),
    m;
  t[0] !== u || t[1] !== r.accountId || t[2] !== r.userId || t[3] !== n
    ? ((m = [`cloud-browser-local-handoff`, n, r.accountId, r.userId, u]),
      (t[0] = u),
      (t[1] = r.accountId),
      (t[2] = r.userId),
      (t[3] = n),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== r || t[6] !== n
    ? ((h = async (e) => {
        let { signal: t } = e,
          i = await g.safeGet(`/flora/browser/handoff`, {
            parameters: { query: { conversation_id: n } },
            additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
            expectedIdentity: r,
            expectedErrorStatuses: [400, 401, 403, 404, 409, 429, 502, 503, 504],
            signal: AbortSignal.any([t, AbortSignal.timeout(2e4)]),
            retry: !1,
          });
        return (t.throwIfAborted(), i.novnc_url ?? null);
      }),
      (t[5] = r),
      (t[6] = n),
      (t[7] = h))
    : (h = t[7]);
  let _;
  t[8] !== m || t[9] !== h
    ? ((_ = {
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
      (t[10] = _))
    : (_ = t[10]);
  let { data: v, isPending: y, isError: b } = o(_);
  if (b) {
    let e;
    return (
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, N.jsx)(A, {
            onRetry: () => {
              (p(!1), d(k));
            },
          })),
          (t[11] = e))
        : (e = t[11]),
      e
    );
  }
  if (!y && v == null) return c;
  let x = y || !f ? `connecting` : `streaming`,
    w;
  t[12] !== l || t[13] !== a || t[14] !== v
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
              title: l.formatMessage({
                id: `chatgptConversations.cloudBrowser.liveView.ariaLabel`,
                defaultMessage: `Live cloud browser`,
                description: `Accessible label for the interactive video of the cloud browser used by a ChatGPT Work task`,
              }),
              allow: `clipboard-read; clipboard-write`,
              referrerPolicy: `no-referrer`,
              onLoad: () => p(!0),
            })),
      (t[12] = l),
      (t[13] = a),
      (t[14] = v),
      (t[15] = w))
    : (w = t[15]);
  let T;
  t[16] !== a || t[17] !== s || t[18] !== v
    ? ((T = v != null && !a ? (0, N.jsx)(C, { onActivate: s }) : null),
      (t[16] = a),
      (t[17] = s),
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
  let r = (0, j.c)(5),
    { onRetry: i } = e,
    a;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, N.jsx)(n, {
        id: `chatgptConversations.cloudBrowser.liveView.unavailable`,
        defaultMessage: `Cloud browser is unavailable`,
        description: `Error shown when an interactive ChatGPT cloud browser session cannot be opened`,
      })),
      (r[0] = a))
    : (a = r[0]);
  let o;
  r[1] === i
    ? (o = r[2])
    : ((o =
        i == null
          ? null
          : (0, N.jsx)(t, {
              color: `secondary`,
              onClick: i,
              children: (0, N.jsx)(n, {
                id: `chatgptConversations.cloudBrowser.liveView.retry`,
                defaultMessage: `Retry`,
                description: `Button that retries connecting to the cloud browser after a local browser session could not be opened`,
              }),
            })),
      (r[1] = i),
      (r[2] = o));
  let s;
  return (
    r[3] === o
      ? (s = r[4])
      : ((s = (0, N.jsxs)(`div`, {
          className: `flex min-h-0 flex-1 flex-col items-center justify-center gap-2 bg-surface text-sm text-secondary select-none`,
          role: `status`,
          children: [a, o],
        })),
        (r[3] = o),
        (r[4] = s)),
    s
  );
}
var j, M, N;
function P() {
  return (P = e(() => {
    ((j = u()), s(), r(), (M = f()), c(), y(), l(), _(), b(), E(), x(), (N = d()));
  }))();
}
P();
export { D as LocalCloudBrowserLiveView };
//# sourceMappingURL=cloud-browser-local-live-view-5b97181dc9e9.js.map
