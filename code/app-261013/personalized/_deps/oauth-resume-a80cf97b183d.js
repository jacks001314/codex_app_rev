import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Cot as n,
  EPt as r,
  IDt as i,
  Pxt as a,
  TLt as o,
  _It as s,
  fLt as c,
  fSt as l,
  hot as u,
  i3 as d,
  jDt as f,
  lot as p,
  nSt as m,
  pLt as h,
  r3 as g,
  wot as _,
  xMt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  DCt as y,
  ECt as b,
  GMr as x,
  OCt as S,
  TCt as C,
  XMr as w,
  kCt as T,
  tNr as E,
} from "./app-initial-5851df3f6cb1.js";
import { c as D, i as O, n as k, o as A, s as j, t as M } from "./rate-limit-523c452e35b8.js";
function N(e, t) {
  e.get(x) === t[1] &&
    e.get(w) === t[2] &&
    e
      .get(u)
      .success(
        (0, F.jsx)(i, {
          id: `restricted.aeon.slack.connected`,
          defaultMessage: `Slack connected`,
          description: `Confirmation after the user connects their dot to Slack`,
        }),
        { id: JSON.stringify(t) },
      );
}
async function P(e, t, n = S) {
  let r = e.get(x),
    a = e.get(w),
    o = b(r, a, t, n);
  if (r == null || a == null || e.get(L, o.queryKey)) return;
  let s = JSON.stringify(o.queryKey);
  e.set(I, (e) => [...e, s]);
  let c = e.get(u),
    l = c.info(
      (0, F.jsx)(i, {
        id: `restricted.aeon.slack.disconnecting`,
        defaultMessage: `Disconnecting Slack…`,
        description: `Progress while disconnecting a dot from Slack`,
      }),
      { id: s, duration: 0, hasCloseButton: !1, leading: (0, F.jsx)(g, {}) },
    ),
    d = !1,
    f = e.watch((e) => {
      (e.get(x) !== r || e.get(w) !== a) && ((d = !0), l.close());
    });
  try {
    let r = await e.queryClient.fetchQuery({ ...o, staleTime: 0 });
    if (d) return;
    if (r.status === `unavailable`) throw Error(`Slack connection is unavailable`);
    if (r.status === `connected`) {
      if ((await n.disconnect(t, r.bindingId, r.bindingVersion), d)) return;
      e.queryClient.resetQueries({ queryKey: o.queryKey, exact: !0 }, { throwOnError: !1 });
    }
    c.success(
      (0, F.jsx)(i, {
        id: `restricted.aeon.slack.disconnected`,
        defaultMessage: `Slack disconnected`,
        description: `Confirmation after the user disconnects their dot from Slack`,
      }),
      { id: s },
    );
  } catch {
    d ||
      c.danger(
        (0, F.jsx)(i, {
          id: `restricted.aeon.slack.disconnectFailed`,
          defaultMessage: `Couldn’t disconnect Slack. Please try again.`,
          description: `Error when disconnecting a dot from Slack fails`,
        }),
        { id: s, errorAnalytics: { toastId: `restricted.aeon.slack.disconnectFailed` } },
      );
  } finally {
    (f(), l.close(), e.set(I, (e) => e.filter((e) => e !== s)));
  }
}
var F, I, L;
function R() {
  return (R = e(() => {
    (a(),
      f(),
      E(),
      d(),
      p(),
      _(),
      y(),
      C(),
      (F = v()),
      (I = l(n, [])),
      (L = m(n, (e, { get: t }) => t(I).includes(JSON.stringify(e)))));
  }))();
}
function z(e) {
  return V.safeParse(e).data ?? null;
}
async function B(e, t, n, r = S, i = () => !0) {
  if (!i()) return `failed`;
  let a = z(t);
  if (a == null) return `failed`;
  let o = a.orbitSlackSetup,
    s = () => e.get(x) === o.accountId && e.get(w) === o.userId;
  if (!s()) return `account`;
  let c = b(o.accountId, o.userId, o.threadId, r);
  if (
    (k(e, c.queryKey, a.slackSetupFailure),
    k(e, c.queryKey, { kind: `rate-limited`, retryAtMs: a.slackSetupRetryAtMs }),
    n.kind !== `success`)
  )
    return `authorization`;
  let l = o.parentLinkId ?? n.linkId;
  if (l == null || n.linkId !== l) return `workspace`;
  try {
    let t = await e.queryClient.fetchQuery({ ...c, staleTime: 0 });
    if (!i()) return `failed`;
    if (!s()) return `account`;
    if (t.status === `connected`)
      return !t.available || (o.reconnectParent && t.parentLinkId !== l)
        ? `failed`
        : (N(e, c.queryKey), null);
    if (o.reconnectParent || t.status !== `setup`) return `failed`;
    let n = [...t.workspaces, ...t.reconnectWorkspaces].find((e) => e.parent_link_id === l),
      a = n == null ? null : A(n);
    if (
      (o.workspaceId != null && (a = { kind: `workspace`, workspaceId: o.workspaceId }),
      n == null ||
        a == null ||
        (o.workspaceId != null && n.workspace_id !== o.workspaceId) ||
        (o.enterpriseId != null && n.enterprise_id !== o.enterpriseId))
    )
      return `workspace`;
    if (!t.workspaces.includes(n)) return `permissions`;
    let u = e.get(O, c.queryKey);
    if (u != null && Date.now() < u) return { kind: `rate-limited`, retryAtMs: u };
    let d = await r.connect(o.threadId, l, a);
    return s()
      ? (e.queryClient.setQueryData(c.queryKey, d),
        d.status !== `connected` || !d.available ? `failed` : (N(e, c.queryKey), null))
      : `account`;
  } catch (t) {
    let n = T(t);
    return (k(e, c.queryKey, n), n);
  }
}
var V;
function H() {
  return (H = e(() => {
    (r(),
      E(),
      R(),
      y(),
      j(),
      C(),
      M(),
      (V = h({
        orbitContactSetup: t(!0).optional(),
        orbitSlackSetup: h({
          accountId: o(),
          userId: o(),
          threadId: o(),
          parentLinkId: o().nullable(),
          workspaceId: o().nullable(),
          enterpriseId: o().nullish(),
          reconnectParent: s().optional(),
        }),
        slackSetupFailure: D.optional(),
        slackSetupRetryAtMs: c().nonnegative().optional(),
      })));
  }))();
}
export { R as a, P as i, H as n, N as o, B as r, L as s, z as t };
//# sourceMappingURL=oauth-resume-a80cf97b183d.js.map
