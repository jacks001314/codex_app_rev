import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Pt as n,
  Ag as r,
  Amn as i,
  B6t as a,
  CFt as o,
  CQ as s,
  Cn as c,
  DXt as l,
  EX as u,
  GCt as d,
  IX as f,
  Ig as p,
  Lg as m,
  N3t as h,
  Ng as g,
  O3t as _,
  OX as ee,
  OXt as te,
  PX as ne,
  Pdt as re,
  QPt as ie,
  SFt as ae,
  Sn as v,
  Tg as y,
  WCt as b,
  Xdt as x,
  Yjt as S,
  ZPt as C,
  _Q as oe,
  a3t as se,
  a_ as ce,
  ag as w,
  e9t as T,
  ect as E,
  hg as D,
  i6t as O,
  iMt as k,
  jg as A,
  kmn as j,
  mg as M,
  o3t as N,
  oMt as P,
  o_ as F,
  og as I,
  pg as L,
  rMt as R,
  sg as le,
  tct as z,
  wg as B,
  wn as V,
  xn as H,
  yQ as U,
  zg as W,
} from "./app-initial-f094ef01c64d.js";
function G(
  e,
  { hostId: t, item: r, repo: i, repositoryTarget: a, statusKey: c, defaultMergeMenuOpen: l },
  u = !0,
  d = `right`,
  { insertAfterTabId: f, tabId: p } = {},
) {
  let m = p ?? `pull-request:${r.url}`,
    h = C(e, m) ?? d,
    g =
      e.get(U) === a.cwd && e.get(s) === a.hostId
        ? Y({ cwd: a.cwd, hostId: a.hostId, source: `board`, url: r.url })
        : void 0;
  return (
    o(e, Q, {
      activate: u,
      defaultState: () => ({}),
      durableRoute: g,
      icon: (0, Z.createElement)(ue, {
        fallbackState: r.state,
        hostId: t ?? a.hostId,
        statusKey: c,
        url: r.url,
      }),
      id: m,
      insertAfterTabId: f,
      props: { defaultMergeMenuOpen: l, hostId: t, item: r, repo: i, target: a },
      target: h,
      title: r.title.trim() || J(e, r.number),
      tooltip: `${r.title} — ${r.url}`,
    }),
    u && n(e, h),
    !0
  );
}
function ue(e) {
  let t = (0, X.c)(10),
    { fallbackState: n, hostId: r, statusKey: i, url: a } = e,
    o;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
    ? ((o = { fallbackState: n, hostId: r, statusKey: i, url: a }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { enabled: !1 }), (t[5] = s))
    : (s = t[5]);
  let c = h($, o, s);
  if (c === `closed` || c === `open`) {
    let e;
    return (
      t[6] === c
        ? (e = t[7])
        : ((e = (0, Z.createElement)(L, { className: `icon-xs shrink-0`, status: c })),
          (t[6] = c),
          (t[7] = e)),
      e
    );
  }
  let l;
  return (
    t[8] === c
      ? (l = t[9])
      : ((l = (0, Z.createElement)(M, { className: `icon-xs shrink-0`, state: c })),
        (t[8] = c),
        (t[9] = l)),
    l
  );
}
function K(
  e,
  { request: t, title: r },
  { activate: i = !0, insertAfterTabId: a, tabId: c, target: l = `right` } = {},
) {
  let u = t.provider === `gitlab`;
  if (u && !d(e)) return !1;
  let f = S(t.pullRequest),
    p = c ?? `pull-request:${f}`,
    m = C(e, p) ?? l,
    h = e.get(s);
  return (
    o(e, Q, {
      activate: i,
      defaultState: () => ({}),
      durableRoute:
        h === t.account.hostId
          ? Y({ cwd: e.get(U), hostId: h, source: `canonical`, url: f })
          : void 0,
      icon: u
        ? (0, Z.createElement)(re)
        : (0, Z.createElement)(E, { className: `icon-xs shrink-0` }),
      id: p,
      insertAfterTabId: a,
      props: { request: t, summaryOnly: !0 },
      requiresWorkspaceReady: !1,
      target: m,
      title: r.trim() || J(e, t.pullRequest.number),
      tooltip: `${r} — ${f}`,
    }),
    i && n(e, m),
    !0
  );
}
async function q(
  e,
  { cwd: t, hostId: n, source: i, url: a },
  { activate: o, insertAfterTabId: c, tabId: l, target: u },
) {
  let d = P(a);
  if (d == null || e.value.routeKind !== `local-thread` || e.get(U) !== t || e.get(s) !== n)
    return !1;
  try {
    if (d.hostname === `gitlab.com`) {
      let t = { account: await r(e, n), pullRequest: d },
        { title: i } = await A(e, t);
      return K(
        e,
        { request: { provider: `gitlab`, ...t }, title: i },
        { activate: o, insertAfterTabId: c, tabId: l, target: u },
      );
    }
    if (i === `canonical`) {
      let t = await e.query.getOrFetch(p, {
        hostId: n,
        hostname: d.hostname,
        source: `pull_requests_page`,
      });
      if (t.status !== `success` || t.account.hostId !== n) return !1;
      let r = { account: t.account, pullRequest: d },
        i = await m(e, { request: r, source: `pull_requests_page` });
      return K(
        e,
        { request: { provider: `github`, ...r }, title: i.title ?? J(e, d.number) },
        { activate: o, insertAfterTabId: c, tabId: l, target: u },
      );
    }
    let a = `${d.hostname}/${d.owner}/${d.repository}`,
      [s, f] = await Promise.all([
        F(
          `gh-pr-board`,
          { cwd: T(t), hostId: n, repo: a, searchQuery: String(d.number) },
          { source: `pull_request_board` },
        ),
        e.query.getOrFetch(ee),
      ]);
    if (s.status !== `success` || f == null) return !1;
    let h = s.items.find((e) => k(e, d));
    return (
      h != null &&
      G(
        e,
        {
          hostId: n,
          item: h,
          repo: a,
          repositoryTarget: ne({ cwd: h.cwd, hostId: n, root: f.root }),
          statusKey: {
            cwd: h.cwd,
            headBranch: h.headBranch,
            hostId: n,
            operationSource: `sidebar_task_pr_chip`,
            url: h.url,
          },
        },
        o,
        u,
        { insertAfterTabId: c, tabId: l },
      )
    );
  } catch {
    return !1;
  }
}
function J(e, t) {
  return e.get(te).formatMessage(
    {
      id: `thread.sidePanel.pullRequestTab.title`,
      defaultMessage: `PR #{number}`,
      description: `Title for a pull request side-panel tab`,
    },
    { number: t },
  );
}
function Y({ cwd: e, hostId: t, source: n, url: r }) {
  let i = P(r);
  if (!(i == null || e == null || e.trim() === `` || t.trim() === ``))
    return { kind: c, params: { cwd: e, hostId: t, source: n, url: S(i) }, payloadVersion: 1 };
}
var X,
  Z,
  Q,
  $,
  de = e(() => {
    ((X = j()),
      _(),
      a(),
      (Z = t(i(), 1)),
      ae(),
      x(),
      f(),
      z(),
      l(),
      u(),
      b(),
      B(),
      g(),
      R(),
      W(),
      D(),
      le(),
      ce(),
      N(),
      oe(),
      H(),
      ie(),
      V(),
      (Q = v({ open: G, restore: q })),
      ($ = O(se, ({ fallbackState: e, statusKey: t, url: n }, { get: r }) => {
        let i = P(n);
        if (i == null) return e;
        let { data: a } = r(y, { ...t, url: n }),
          o = a?.url != null && k({ url: a.url }, i) ? a : null;
        if (o == null) return e;
        let s = o.summary ?? o.details;
        if (s == null) return o.state === `open` && o.isDraft ? `draft` : o.state;
        let c = w(s);
        return c == null
          ? e
          : I({
              canMerge: s.canMerge,
              ciStatus: s.ciStatus,
              hasMergeConflicts: s.mergeBlocker === `conflicts`,
              status: c,
            });
      })));
  });
export { q as i, K as n, G as r, de as t };
//# sourceMappingURL=open-thread-pull-request-side-panel-tab-b42ed7b596e4.js.map
