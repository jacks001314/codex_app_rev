import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  FBt as n,
  PBt as r,
  Qst as i,
  TY as a,
  VJ as o,
  XL as s,
  ZL as c,
  ZSt as l,
  cmt as u,
  lmt as d,
  nCt as f,
  sct as p,
  yCt as m,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as ee,
  AY as h,
  BY as te,
  CIr as ne,
  Cwn as g,
  Cyr as _,
  EAn as v,
  Frt as y,
  Hrt as b,
  Irt as x,
  K5n as re,
  MDn as S,
  Myr as C,
  NAn as w,
  Ncr as T,
  P5t as ie,
  RY as ae,
  SIr as oe,
  Srt as se,
  Swn as ce,
  Syr as E,
  U5t as le,
  V5t as D,
  Vrt as ue,
  XY as de,
  YY as fe,
  _rt as pe,
  brt as O,
  grt as k,
  iX as A,
  j5t as j,
  jY as M,
  jcr as N,
  oX as P,
  q5n as F,
  rX as I,
  vrt as L,
  wAn as R,
  wyr as z,
  xwn as B,
  yrt as me,
  zY as he,
} from "./app-initial-ad16eaadf81f.js";
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
  if (t.provider === `gitlab` && !F(e)) return null;
  let i = z(t.pullRequest);
  return {
    id: `pull-request:${i}`,
    icon:
      t.provider === `gitlab`
        ? (0, W.createElement)(o)
        : (0, W.createElement)(s, { className: `icon-xs shrink-0` }),
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
  let c = f(G, o, s);
  if (c === `closed` || c === `open`) {
    let e;
    return (
      t[6] === c
        ? (e = t[7])
        : ((e = (0, W.createElement)(ae, { className: `icon-xs shrink-0`, status: c })),
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
    .get(ne)
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
  let n = C(e);
  return n == null ? void 0 : { url: z(n), hostId: t };
}
var U, W, G;
function K() {
  return (K = e(() => {
    ((U = r()),
      l(),
      (W = n()),
      a(),
      c(),
      oe(),
      re(),
      fe(),
      E(),
      te(),
      t(),
      (G = m(i, ({ fallbackState: e, statusKey: t, url: n }, { get: r }) => {
        let i = C(n);
        if (i == null) return e;
        let { data: a } = r(de, { ...t, url: n }),
          o = a?.url != null && _({ url: a.url }, i) ? a : null;
        if (o == null) return e;
        let s = o.summary ?? o.details;
        if (s == null) return o.state === `open` && o.isDraft ? `draft` : o.state;
        let c = h(s);
        return c == null
          ? e
          : M({
              canMerge: s.canMerge,
              ciStatus: s.ciStatus,
              hasMergeConflicts: s.mergeBlocker === `conflicts`,
              status: c,
            });
      })));
  }))();
}
async function ye(e, { cwd: t, hostId: n, repositoryRoot: r, source: i, url: a }) {
  let o = C(a);
  if (o == null) return null;
  if (o.hostname === `gitlab.com`) {
    let t = { account: await I(e, n), pullRequest: o },
      { title: r } = await A(e, t);
    return { source: `canonical`, options: { request: { provider: `gitlab`, ...t }, title: r } };
  }
  if (i === `canonical`) {
    let i = await e.query.getOrFetch(O, { hostId: n, hostname: o.hostname, source: `pull_requests_page` });
    return i.status !== `success` || i.account.hostId !== y(n)
      ? null
      : {
          source: `canonical`,
          options: {
            request: { provider: `github`, account: i.account, pullRequest: o },
            repositoryTarget: r == null ? void 0 : D({ cwd: u(t), hostId: n, root: d(r) }),
            title: V(e, o.number),
          },
        };
  }
  let s = `${o.hostname}/${o.owner}/${o.repository}`,
    [c, l] = await Promise.all([
      b(
        `gh-pr-board`,
        { cwd: u(t), hostId: n, repo: s, searchQuery: String(o.number) },
        { source: `pull_request_board` },
      ),
      e.query.getOrFetch(N, e.get(ie)),
    ]);
  if (c.status !== `success` || l == null) return null;
  let f = c.items.find((e) => _(e, o));
  return f == null
    ? null
    : {
        source: `board`,
        options: {
          provider: `github`,
          hostId: n,
          item: f,
          repo: s,
          repositoryTarget: D({ cwd: f.cwd, hostId: n, root: l.root }),
          statusKey: {
            cwd: f.cwd,
            headBranch: f.headBranch,
            hostId: n,
            operationSource: `sidebar_task_pr_chip`,
            url: f.url,
          },
        },
      };
}
function q() {
  return (q = e(() => {
    (p(), T(), le(), j(), x(), P(), E(), se(), ue(), K());
  }))();
}
function J(e, t, n = !0, r = `right`, { insertPosition: i, tabId: a } = {}) {
  let { repositoryTarget: o } = t,
    s = ge(e, t);
  if (s == null) return !1;
  let { persistence: c, ...l } = s,
    u = a ?? s.id,
    d = B(e, u) ?? r,
    f =
      c != null && e.get(v) === o.cwd && e.get(w) === o.hostId && c.hostId === o.hostId
        ? Z({ cwd: o.cwd, hostId: o.hostId, source: `board`, url: c.url })
        : void 0;
  return (
    S(e, Q, {
      ...l,
      revealAndFocus: n,
      defaultState: () => ({}),
      durableRoute: f,
      id: u,
      insertPosition: i,
      target: d,
    }),
    n && g(e, d),
    !0
  );
}
function Y(e, t, { revealAndFocus: n = !0, insertPosition: r, tabId: i, target: a = `right` } = {}) {
  let o = _e(e, t);
  if (o == null) return !1;
  let { persistence: s, ...c } = o,
    l = i ?? o.id,
    u = B(e, l) ?? a,
    d = e.get(w),
    f = e.get(v),
    p = t.request.provider === `github` ? y(d) : d,
    m = t.repositoryTarget;
  return (
    S(e, Q, {
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
    n && g(e, u),
    !0
  );
}
async function X(
  e,
  { cwd: t, hostId: n, repositoryRoot: r, source: i, url: a },
  { revealAndFocus: o, insertPosition: s, tabId: c, target: l },
) {
  if (e.value.routeKind !== `local-thread` || e.get(v) !== t || e.get(w) !== n) return !1;
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
      kind: L,
      params: { cwd: e, hostId: t, repositoryRoot: n, source: r, url: i },
      payloadVersion: 1,
    };
}
var Q;
function $() {
  return ($ = e(() => {
    (ee(), x(), q(), K(), R(), k(), ce(), me(), (Q = pe({ open: J, restore: X })));
  }))();
}
export { X as i, Y as n, J as r, $ as t };
//# sourceMappingURL=open-thread-pull-request-side-panel-tab-68b7062ee7f2.js.map
