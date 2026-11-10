import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AJt as t,
  AOt as n,
  BOt as r,
  CE as i,
  F5t as a,
  N5t as o,
  O5t as s,
  POt as c,
  SE as l,
  Wrn as u,
  Yrn as d,
  _dn as f,
  bE as p,
  bvt as m,
  ein as h,
  hvt as g,
  jJt as _,
  mcn as v,
  vdn as y,
  wE as b,
} from "./app-shared-7552fc8d5d82.js";
import { Mbn as x, wOn as S } from "./app-initial-3916b423772b.js";
import { n as C, t as w } from "./cloud-browser-control-overlay-6f0a679921a7.js";
function T(e) {
  let t = (0, k.c)(15),
    {
      conversationId: r,
      browserOwnerConversationId: i,
      isControlActivated: s,
      onControlActivation: l,
      targetTabId: u,
      fallback: d,
    } = e,
    f = o(S, r),
    p = i ?? f,
    m = a(n),
    h = a(c);
  if (u != null) return d;
  if (p == null || m == null || h == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, j.jsx)(O, {})), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let g;
  t[1] !== m || t[2] !== p || t[3] !== h
    ? ((g = JSON.stringify([p, m, h])), (t[1] = m), (t[2] = p), (t[3] = h), (t[4] = g))
    : (g = t[4]);
  let _;
  t[5] !== m || t[6] !== h
    ? ((_ = { accountId: m, userId: h }), (t[5] = m), (t[6] = h), (t[7] = _))
    : (_ = t[7]);
  let v;
  return (
    t[8] !== d || t[9] !== s || t[10] !== l || t[11] !== p || t[12] !== g || t[13] !== _
      ? ((v = (0, j.jsx)(
          E,
          {
            serverConversationId: p,
            identity: _,
            isControlActivated: s,
            onControlActivation: l,
            fallback: d,
          },
          g,
        )),
        (t[8] = d),
        (t[9] = s),
        (t[10] = l),
        (t[11] = p),
        (t[12] = g),
        (t[13] = _),
        (t[14] = v))
      : (v = t[14]),
    v
  );
}
function E(e) {
  let t = (0, k.c)(27),
    {
      serverConversationId: n,
      identity: r,
      isControlActivated: a,
      onControlActivation: o,
      fallback: s,
    } = e,
    c = h(),
    [l, u] = (0, A.useState)(0),
    [f, p] = (0, A.useState)(!1),
    m;
  t[0] !== l || t[1] !== r.accountId || t[2] !== r.userId || t[3] !== n
    ? ((m = [`cloud-browser-local-handoff`, n, r.accountId, r.userId, l]),
      (t[0] = l),
      (t[1] = r.accountId),
      (t[2] = r.userId),
      (t[3] = n),
      (t[4] = m))
    : (m = t[4]);
  let v;
  t[5] !== r || t[6] !== n
    ? ((v = async (e) => {
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
      (t[7] = v))
    : (v = t[7]);
  let y;
  t[8] !== m || t[9] !== v
    ? ((y = {
        queryKey: m,
        queryFn: v,
        gcTime: 0,
        staleTime: 1 / 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[8] = m),
      (t[9] = v),
      (t[10] = y))
    : (y = t[10]);
  let { data: b, isPending: x, isError: S } = _(y);
  if (S) {
    let e;
    return (
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, j.jsx)(O, {
            onRetry: () => {
              (p(!1), u(D));
            },
          })),
          (t[11] = e))
        : (e = t[11]),
      e
    );
  }
  if (!x && b == null) return s;
  let C;
  t[12] !== c || t[13] !== a || t[14] !== b
    ? ((C =
        b == null
          ? null
          : (0, j.jsx)(`iframe`, {
              ref: (e) => {
                a && e?.focus();
              },
              className: `size-full border-0`,
              "data-dd-privacy": `hidden`,
              inert: !a,
              src: b,
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
      (t[14] = b),
      (t[15] = C))
    : (C = t[15]);
  let T;
  t[16] !== f || t[17] !== x
    ? ((T =
        x || !f
          ? (0, j.jsxs)(`div`, {
              className: `pointer-events-none absolute inset-0 flex items-center justify-center gap-2 text-sm text-media-foreground/70`,
              role: `status`,
              children: [
                (0, j.jsx)(i, { className: `icon-sm` }),
                (0, j.jsx)(d, {
                  id: `chatgptConversations.cloudBrowser.liveView.connecting`,
                  defaultMessage: `Connecting to cloud browser…`,
                  description: `Loading status shown while an interactive ChatGPT cloud browser session connects`,
                }),
              ],
            })
          : null),
      (t[16] = f),
      (t[17] = x),
      (t[18] = T))
    : (T = t[18]);
  let E;
  t[19] !== a || t[20] !== o || t[21] !== b
    ? ((E = b != null && !a ? (0, j.jsx)(w, { onActivate: o }) : null),
      (t[19] = a),
      (t[20] = o),
      (t[21] = b),
      (t[22] = E))
    : (E = t[22]);
  let M;
  return (
    t[23] !== C || t[24] !== T || t[25] !== E
      ? ((M = (0, j.jsx)(`div`, {
          className: `relative flex min-h-0 flex-1 bg-media-background pb-12`,
          "data-codex-cloud-browser": !0,
          children: (0, j.jsxs)(`div`, {
            className: `relative min-h-0 flex-1`,
            children: [C, T, E],
          }),
        })),
        (t[23] = C),
        (t[24] = T),
        (t[25] = E),
        (t[26] = M))
      : (M = t[26]),
    M
  );
}
function D(e) {
  return e + 1;
}
function O(e) {
  let t = (0, k.c)(5),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, j.jsx)(d, {
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
          : (0, j.jsx)(p, {
              color: `secondary`,
              onClick: n,
              children: (0, j.jsx)(d, {
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
      : ((a = (0, j.jsxs)(`div`, {
          className: `flex min-h-0 flex-1 flex-col items-center justify-center gap-2 bg-media-background text-sm text-media-foreground/70 select-none`,
          role: `status`,
          children: [r, i],
        })),
        (t[3] = i),
        (t[4] = a)),
    a
  );
}
var k, A, j;
function M() {
  return (M = e(() => {
    ((k = f()), t(), s(), (A = y()), u(), r(), l(), b(), m(), x(), C(), (j = v()));
  }))();
}
M();
export { T as LocalCloudBrowserLiveView };
//# sourceMappingURL=cloud-browser-local-live-view-212c73f0d734.js.map
