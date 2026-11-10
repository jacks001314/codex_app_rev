import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Jft as n,
  Pxt as r,
  TJ as i,
  Vq as a,
  cL as o,
  nSt as s,
  qft as c,
  rst as l,
  sL as u,
  vzt as d,
  wot as f,
  yzt as p,
  zxt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  AVt as h,
  Ahr as g,
  BVt as _,
  Bhr as v,
  EJ as ee,
  HVt as te,
  IJ as ne,
  Jtt as re,
  Mhr as y,
  NJ as ie,
  NVt as ae,
  PJ as b,
  Qtt as x,
  TJ as S,
  Xtt as C,
  Ytt as w,
  Ztt as oe,
  aIr as se,
  aar as ce,
  bnt as le,
  d3n as ue,
  dwn as de,
  dxn as fe,
  ent as pe,
  fxn as T,
  gJ as me,
  hJ as he,
  jhr as E,
  mJ as D,
  mnt as O,
  oIr as k,
  oJ as A,
  pnt as j,
  pwn as M,
  rDn as N,
  rar as P,
  sJ as F,
  tDn as I,
  u3n as L,
  uDn as R,
  uxn as z,
  ynt as B,
} from "./app-initial-5851df3f6cb1.js";
function ge(e, { hostId: t, item: n, repo: r, repositoryTarget: i, statusKey: a, defaultMergeMenuOpen: o }) {
  return {
    id: `pull-request:${n.url}`,
    icon: (0, W.createElement)(ve, {
      fallbackState: n.state,
      hostId: t ?? i.hostId,
      statusKey: a,
      url: n.url,
    }),
    props: { defaultMergeMenuOpen: o, hostId: t, item: n, repo: r, target: i },
    title: n.title.trim() || V(e, n.number),
    tooltip: `${n.title} — ${n.url}`,
    requiresWorkspaceReady: !0,
    persistence: H(n.url, i.hostId),
  };
}
function _e(e, { request: t, repositoryTarget: n, title: r }) {
  if (t.provider === `gitlab` && !ue(e)) return null;
  let i = y(t.pullRequest);
  return {
    id: `pull-request:${i}`,
    icon:
      t.provider === `gitlab`
        ? (0, W.createElement)(a)
        : (0, W.createElement)(u, { className: `icon-xs shrink-0` }),
    props: { request: t, repositoryTarget: n },
    title: r.trim() || V(e, t.pullRequest.number),
    tooltip: `${r} — ${i}`,
    requiresWorkspaceReady: !1,
    persistence: H(i, t.account.hostId),
  };
}
function ve(e) {
  let t = (0, U.c)(10),
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
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = { enabled: !1 }), (t[5] = s)) : (s = t[5]);
  let c = m(G, o, s);
  if (c === `closed` || c === `open`) {
    let e;
    return (
      t[6] === c
        ? (e = t[7])
        : ((e = (0, W.createElement)(D, { className: `icon-xs shrink-0`, status: c })),
          (t[6] = c),
          (t[7] = e)),
      e
    );
  }
  let l;
  return (
    t[8] === c
      ? (l = t[9])
      : ((l = (0, W.createElement)(he, { className: `icon-xs shrink-0`, state: c })), (t[8] = c), (t[9] = l)),
    l
  );
}
function V(e, t) {
  return e
    .get(k)
    .formatMessage(
      {
        id: `thread.sidePanel.pullRequestTab.title`,
        defaultMessage: `PR #{number}`,
        description: `Title for a pull request side-panel tab`,
      },
      { number: t },
    );
}
function H(e, t) {
  let n = v(e);
  return n == null ? void 0 : { url: y(n), hostId: t };
}
var U, W, G;
function K() {
  return (K = e(() => {
    ((U = d()),
      r(),
      (W = p()),
      i(),
      o(),
      se(),
      L(),
      S(),
      g(),
      me(),
      f(),
      (G = s(t, ({ fallbackState: e, statusKey: t, url: n }, { get: r }) => {
        let i = v(n);
        if (i == null) return e;
        let { data: a } = r(ee, { ...t, url: n }),
          o = a?.url != null && E({ url: a.url }, i) ? a : null;
        if (o == null) return e;
        let s = o.summary ?? o.details;
        if (s == null) return o.state === `open` && o.isDraft ? `draft` : o.state;
        let c = A(s);
        return c == null
          ? e
          : F({
              canMerge: s.canMerge,
              ciStatus: s.ciStatus,
              hasMergeConflicts: s.mergeBlocker === `conflicts`,
              status: c,
            });
      })));
  }))();
}
async function ye(e, { cwd: t, hostId: r, repositoryRoot: i, source: a, url: o }) {
  let s = v(o);
  if (s == null) return null;
  if (s.hostname === `gitlab.com`) {
    let t = { account: await ie(e, r), pullRequest: s },
      { title: n } = await b(e, t);
    return { source: `canonical`, options: { request: { provider: `gitlab`, ...t }, title: n } };
  }
  if (a === `canonical`) {
    let a = await e.query.getOrFetch(x, { hostId: r, hostname: s.hostname, source: `pull_requests_page` });
    return a.status !== `success` || a.account.hostId !== j(r)
      ? null
      : {
          source: `canonical`,
          options: {
            request: { provider: `github`, account: a.account, pullRequest: s },
            repositoryTarget: i == null ? void 0 : _({ cwd: c(t), hostId: r, root: n(i) }),
            title: V(e, s.number),
          },
        };
  }
  let l = `${s.hostname}/${s.owner}/${s.repository}`,
    [u, d] = await Promise.all([
      le(
        `gh-pr-board`,
        { cwd: c(t), hostId: r, repo: l, searchQuery: String(s.number) },
        { source: `pull_request_board` },
      ),
      e.query.getOrFetch(P, e.get(ae)),
    ]);
  if (u.status !== `success` || d == null) return null;
  let f = u.items.find((e) => E(e, s));
  return f == null
    ? null
    : {
        source: `board`,
        options: {
          provider: `github`,
          hostId: r,
          item: f,
          repo: l,
          repositoryTarget: _({ cwd: f.cwd, hostId: r, root: d.root }),
          statusKey: {
            cwd: f.cwd,
            headBranch: f.headBranch,
            hostId: r,
            operationSource: `sidebar_task_pr_chip`,
            url: f.url,
          },
        },
      };
}
function q() {
  return (q = e(() => {
    (l(), ce(), te(), h(), O(), ne(), g(), pe(), B(), K());
  }))();
}
function J(e, t, n = !0, r = `right`, { insertPosition: i, tabId: a } = {}) {
  let { repositoryTarget: o } = t,
    s = ge(e, t);
  if (s == null) return !1;
  let { persistence: c, ...l } = s,
    u = a ?? s.id,
    d = z(e, u) ?? r,
    f =
      c != null && e.get(N) === o.cwd && e.get(R) === o.hostId && c.hostId === o.hostId
        ? Z({ cwd: o.cwd, hostId: o.hostId, source: `board`, url: c.url })
        : void 0;
  return (
    M(e, Q, {
      ...l,
      revealAndFocus: n,
      defaultState: () => ({}),
      durableRoute: f,
      id: u,
      insertPosition: i,
      target: d,
    }),
    n && T(e, d),
    !0
  );
}
function Y(e, t, { revealAndFocus: n = !0, insertPosition: r, tabId: i, target: a = `right` } = {}) {
  let o = _e(e, t);
  if (o == null) return !1;
  let { persistence: s, ...c } = o,
    l = i ?? o.id,
    u = z(e, l) ?? a,
    d = e.get(R),
    f = e.get(N),
    p = t.request.provider === `github` ? j(d) : d,
    m = t.repositoryTarget;
  return (
    M(e, Q, {
      ...c,
      revealAndFocus: n,
      defaultState: () => ({}),
      durableRoute:
        p === s?.hostId
          ? Z({
              cwd: f,
              hostId: d,
              source: `canonical`,
              repositoryRoot: m?.cwd === f && m.hostId === d ? m.root : void 0,
              url: s.url,
            })
          : void 0,
      id: l,
      insertPosition: r,
      target: u,
    }),
    n && T(e, u),
    !0
  );
}
async function X(
  e,
  { cwd: t, hostId: n, repositoryRoot: r, source: i, url: a },
  { revealAndFocus: o, insertPosition: s, tabId: c, target: l },
) {
  if (e.value.routeKind !== `local-thread` || e.get(N) !== t || e.get(R) !== n) return !1;
  try {
    let u = await ye(e, { cwd: t, hostId: n, repositoryRoot: r, source: i, url: a });
    return u == null
      ? !1
      : u.source === `canonical`
        ? Y(e, u.options, { revealAndFocus: o, insertPosition: s, tabId: c, target: l })
        : J(e, u.options, o, l, { insertPosition: s, tabId: c });
  } catch {
    return !1;
  }
}
function Z({ cwd: e, hostId: t, repositoryRoot: n, source: r, url: i }) {
  if (e != null && e.trim() !== `` && t.trim() !== ``)
    return {
      kind: C,
      params: { cwd: e, hostId: t, repositoryRoot: n, source: r, url: i },
      payloadVersion: 1,
    };
}
var Q;
function $() {
  return ($ = e(() => {
    (de(), O(), q(), K(), I(), re(), fe(), oe(), (Q = w({ open: J, restore: X })));
  }))();
}
export { X as i, Y as n, J as r, $ as t };
//# sourceMappingURL=open-thread-pull-request-side-panel-tab-f5b1ea6eb149.js.map
