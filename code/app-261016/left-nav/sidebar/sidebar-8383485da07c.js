import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  CNt as i,
  DU as a,
  FBt as o,
  LNt as s,
  LTt as c,
  NSt as l,
  PBt as u,
  Qst as ee,
  RTt as d,
  SV as f,
  TY as p,
  USt as m,
  VSt as te,
  Vrt as h,
  XOt as g,
  YOt as _,
  ZSt as v,
  ck as y,
  git as b,
  hit as x,
  hut as S,
  iCt as C,
  lit as w,
  mut as T,
  nCt as E,
  oit as D,
  okt as O,
  pkt as k,
  qrt as ne,
  rk as A,
  tk as re,
  tkt as j,
  zjt as M,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A9t as N,
  AW as P,
  Axn as F,
  B5n as I,
  Bxn as L,
  C9t as R,
  D9t as z,
  E9t as B,
  F7n as V,
  F9t as H,
  Fxn as U,
  G0 as ie,
  GEr as ae,
  I5n as oe,
  I9t as se,
  Ixn as ce,
  K0 as le,
  L0 as ue,
  L5n as de,
  L7n as fe,
  Lxn as pe,
  M9t as me,
  Mln as he,
  Mmn as W,
  Mxn as ge,
  Nln as _e,
  O9t as ve,
  P9t as ye,
  Pln as be,
  Pxn as xe,
  R0 as Se,
  T9t as Ce,
  V5n as we,
  X0 as Te,
  Y0 as Ee,
  _2 as De,
  aot as Oe,
  cot as ke,
  eot as Ae,
  fEn as je,
  fY as Me,
  got as Ne,
  hEn as Pe,
  hY as Fe,
  hot as Ie,
  hut as Le,
  iot as Re,
  j9t as ze,
  jW as Be,
  jxn as Ve,
  k9t as He,
  mY as Ue,
  mot as We,
  mut as Ge,
  not as Ke,
  oot as qe,
  pY as Je,
  pot as Ye,
  rot as Xe,
  sot as Ze,
  tot as Qe,
  v2 as G,
  vEn as $e,
  w9t as et,
  y2 as K,
} from "./app-initial-ad16eaadf81f.js";
var q;
function J() {
  return (J = e(() => {
    (g(),
      (q = _({
        merged: {
          id: `codeReview.sidebar.recentlyMerged`,
          defaultMessage: `Recently merged`,
          description: `Sidebar section containing merged pull requests, with the most recently updated first`,
        },
        recents: {
          id: `codeReview.sidebar.recents`,
          defaultMessage: `Recents`,
          description: `Sidebar section of pull requests the user recently opened`,
        },
        pinned: {
          id: `codeReview.sidebar.pinned`,
          defaultMessage: `Pinned`,
          description: `Sidebar section of pinned pull requests`,
        },
        waiting_for_review: {
          id: `codeReview.sidebar.myPrs`,
          defaultMessage: `Authored by me`,
          description: `Sidebar section containing all of the user's open pull requests, including approved pull requests and drafts`,
        },
        needs_my_review: {
          id: `codeReview.sidebar.needsMyReview`,
          defaultMessage: `Needs my review`,
          description: `Sidebar section of pull requests requesting the user's review directly`,
        },
        needs_my_teams_review: {
          id: `codeReview.sidebar.needsMyTeamsReview`,
          defaultMessage: `Needs my team's review`,
          description: `Sidebar section of pull requests requesting review from one of the user's teams without a direct request to the user`,
        },
      })));
  }))();
}
function tt(e) {
  let t = (0, nt.c)(46),
    r = n(ee),
    i = O(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = T()), (t[0] = o)) : (o = t[0]);
  let s = o.sidebarLayout,
    c = x(s),
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = T()), (t[1] = l)) : (l = t[1]);
  let u = l.sidebarSections,
    d = x(u),
    f = C(He),
    p;
  t[2] === f ? (p = t[3]) : ((p = (e, t) => f.indexOf(e) - f.indexOf(t)), (t[2] = f), (t[3] = p));
  let m = C(Ce).toSorted(p),
    te = b(),
    [h, g] = (0, Y.useState)(!1),
    _;
  t[4] !== i || t[5] !== r
    ? ((_ = function (e) {
        (g(!0),
          e
            .catch(() => {
              r.get(ne).danger(
                i.formatMessage({
                  id: `codeReview.sidebar.display.preferencesSaveError`,
                  defaultMessage: `Unable to save sidebar preferences`,
                  description: `Error shown when saving Code Review sidebar layout or section visibility fails`,
                }),
                { errorAnalytics: { toastId: `codeReview.sidebar.display.preferencesSaveError` } },
              );
            })
            .finally(() => g(!1)));
      }),
      (t[4] = i),
      (t[5] = r),
      (t[6] = _))
    : (_ = t[6]);
  let v = _,
    y = re,
    S = te || h,
    E;
  t[7] === i
    ? (E = t[8])
    : ((E = i.formatMessage({
        id: `codeReview.sidebar.display.options`,
        defaultMessage: `Sidebar display options`,
        description: `Opens layout and section visibility options for the Code Review sidebar`,
      })),
      (t[7] = i),
      (t[8] = E));
  let D = te || h,
    k;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = (0, X.jsx)(a, {})), (t[9] = k)) : (k = t[9]);
  let M;
  t[10] !== E || t[11] !== D
    ? ((M = (0, X.jsx)(Ve, { "aria-label": E, disabled: D, uniform: !0, children: k })),
      (t[10] = E),
      (t[11] = D),
      (t[12] = M))
    : (M = t[12]);
  let N;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(A.SectionLabel, {
        children: (0, X.jsx)(j, {
          id: `codeReview.sidebar.display.view`,
          defaultMessage: `View`,
          description: `Heading above the compact and detailed layout choices for the Code Review sidebar`,
        }),
      })),
      (t[13] = N))
    : (N = t[13]);
  let P;
  t[14] !== v || t[15] !== r
    ? ((P = () => v(w(r, s, `compact`))), (t[14] = v), (t[15] = r), (t[16] = P))
    : (P = t[16]);
  let F;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(j, {
        id: `codeReview.sidebar.display.compact`,
        defaultMessage: `Compact`,
        description: `Pull request sidebar layout with the author avatar, title, and status icons on one line`,
      })),
      (t[17] = F))
    : (F = t[17]);
  let I;
  t[18] === P
    ? (I = t[19])
    : ((I = (0, X.jsx)(A.RadioItem, { value: `compact`, onSelect: P, children: F })),
      (t[18] = P),
      (t[19] = I));
  let L;
  t[20] !== v || t[21] !== r
    ? ((L = () => v(w(r, s, `detailed`))), (t[20] = v), (t[21] = r), (t[22] = L))
    : (L = t[22]);
  let R;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, X.jsx)(j, {
        id: `codeReview.sidebar.display.detailed`,
        defaultMessage: `Detailed`,
        description: `Pull request sidebar layout with up to two title lines, the author avatar and name, and status icons`,
      })),
      (t[23] = R))
    : (R = t[23]);
  let z;
  t[24] === L
    ? (z = t[25])
    : ((z = (0, X.jsx)(A.RadioItem, { value: `detailed`, onSelect: L, children: R })),
      (t[24] = L),
      (t[25] = z));
  let B;
  t[26] !== c || t[27] !== I || t[28] !== z
    ? ((B = (0, X.jsxs)(A.RadioGroup, { value: c, children: [I, z] })),
      (t[26] = c),
      (t[27] = I),
      (t[28] = z),
      (t[29] = B))
    : (B = t[29]);
  let V;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, X.jsx)(A.Separator, {})), (t[30] = V))
    : (V = t[30]);
  let H;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, X.jsx)(A.SectionLabel, {
        children: (0, X.jsx)(j, {
          id: `codeReview.sidebar.display.sections`,
          defaultMessage: `Sections`,
          description: `Heading above the choices for which pull request lists to show in the Code Review sidebar`,
        }),
      })),
      (t[31] = H))
    : (H = t[31]);
  let U;
  t[32] !== h || t[33] !== v || t[34] !== r || t[35] !== d
    ? ((U = (e) =>
        (0, X.jsx)(
          A.CheckboxItem,
          {
            checked: d.includes(e),
            disabled: h,
            onCheckedChange: (t) => v(w(r, u, t === !0 ? [...d, e] : d.filter((t) => t !== e))),
            children: (0, X.jsx)(j, { ...q[e] }),
          },
          e,
        )),
      (t[32] = h),
      (t[33] = v),
      (t[34] = r),
      (t[35] = d),
      (t[36] = U))
    : (U = t[36]);
  let ie = m.map(U),
    ae;
  return (
    t[37] !== y ||
    t[38] !== M ||
    t[39] !== N ||
    t[40] !== B ||
    t[41] !== V ||
    t[42] !== H ||
    t[43] !== ie ||
    t[44] !== S
      ? ((ae = (0, X.jsxs)(y, {
          align: `end`,
          contentWidth: `menu`,
          disabled: S,
          triggerButton: M,
          children: [N, B, V, H, ie],
        })),
        (t[37] = y),
        (t[38] = M),
        (t[39] = N),
        (t[40] = B),
        (t[41] = V),
        (t[42] = H),
        (t[43] = ie),
        (t[44] = S),
        (t[45] = ae))
      : (ae = t[45]),
    ae
  );
}
var nt, Y, X;
function rt() {
  return (rt = e(() => {
    ((nt = u()), v(), S(), (Y = o()), g(), y(), p(), h(), r(), D(), U(), J(), me(), (X = s()));
  }))();
}
function it(e) {
  let t = (0, ot.c)(11),
    { provider: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = T()), (t[0] = r)) : (r = t[0]);
  let i = x(r.sidebarLayout) === `detailed`,
    a;
  t[1] === n ? (a = t[2]) : ((a = at(n)), (t[1] = n), (t[2] = a));
  let o;
  t[3] === a
    ? (o = t[4])
    : ((o = (0, Z.jsx)(`span`, { className: `sr-only`, children: a })), (t[3] = a), (t[4] = o));
  let s;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = [72, 55]), (t[5] = s)) : (s = t[5]);
  let c;
  t[6] === i
    ? (c = t[7])
    : ((c = (0, Z.jsx)(pe, {
        children: s.map((e) =>
          (0, Z.jsx)(
            ce,
            {
              className: i ? `pe-2` : `pe-1`,
              "aria-hidden": !0,
              disabled: !0,
              icon: i
                ? void 0
                : (0, Z.jsx)(`span`, {
                    className: `size-4 shrink-0`,
                    children: (0, Z.jsx)(V, { as: `span`, size: `fill` }),
                  }),
              label: (0, Z.jsx)(`span`, {
                className: `flex h-6 items-center gap-2`,
                children: (0, Z.jsx)(V, { className: `inline-block`, as: `span`, widthPercent: e }),
              }),
              labelTrailing: i
                ? void 0
                : (0, Z.jsx)(`span`, {
                    className: `h-3 w-6 shrink-0`,
                    children: (0, Z.jsx)(V, { as: `span`, size: `fill` }),
                  }),
              description: i
                ? (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: `size-4 shrink-0`,
                        children: (0, Z.jsx)(V, { as: `span`, size: `fill` }),
                      }),
                      (0, Z.jsx)(V, { as: `span`, size: `sm`, widthPercent: 25 }),
                      (0, Z.jsx)(V, { as: `span`, size: `sm`, widthPercent: 10 }),
                    ],
                  })
                : void 0,
            },
            e,
          ),
        ),
      })),
      (t[6] = i),
      (t[7] = c));
  let l;
  return (
    t[8] !== o || t[9] !== c
      ? ((l = (0, Z.jsxs)(`div`, { "aria-live": `polite`, role: `status`, children: [o, c] })),
        (t[8] = o),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function at(e) {
  switch (e) {
    case `gitlab`:
      return (0, Z.jsx)(j, {
        id: `codeReview.sidebar.gitlab.loading`,
        defaultMessage: `Loading merge requests`,
        description: `Accessible label while GitLab merge requests load in the Code Review sidebar`,
      });
    case `github`:
      return (0, Z.jsx)(j, {
        id: `codeReview.sidebar.loading`,
        defaultMessage: `Loading pull requests`,
        description: `Accessible label for pull requests loading in the sidebar`,
      });
  }
}
var ot, Z;
function st() {
  return (st = e(() => {
    ((ot = u()), S(), g(), fe(), D(), L(), (Z = s()));
  }))();
}
function ct(e) {
  let t = (0, ft.c)(43),
    { query: r, provider: i, hostId: a, scopeKey: o, items: s, snapshot: c } = e,
    l = n(ee),
    u = te(),
    d = m(),
    [p, h] = (0, pt.useState)(20),
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T;
  if (
    t[0] !== a ||
    t[1] !== s ||
    t[2] !== p ||
    t[3] !== u ||
    t[4] !== d ||
    t[5] !== i ||
    t[6] !== r ||
    t[7] !== l ||
    t[8] !== o ||
    t[9] !== c
  ) {
    let e = Oe(r, c?.hostname, i);
    y = c?.search?.query === r ? c.search : void 0;
    let n = s.filter((t) => {
        if (e != null) return ke(e, t.url, i);
        let n = [t.title, t.url, t.authorName, t.authorLogin].join(` `).toLowerCase();
        return r
          .toLowerCase()
          .split(/\s+/)
          .every((e) => n.includes(e));
      }),
      ee = new Map();
    for (let e of [
      ...n,
      ...(y?.items.map((e) => ({
        ...e,
        providerAccountKey:
          e.providerAccountKey ?? (c?.provider === `gitlab` ? (c.providerAccountKey ?? void 0) : void 0),
        scopeKey: o,
        hostId: a,
        server: `code-review`,
      })) ?? []),
    ])
      ee.set(JSON.stringify([e.hostId, e.server, e.url.toLowerCase()]), e);
    ((g = [...ee.values()]), (_ = e == null && (y == null || y.loading)));
    let m;
    (t[20] !== a || t[21] !== r || t[22] !== l || t[23] !== o
      ? ((m = (e) =>
          l.set(z, a, { scopeKey: o, query: r, action: { id: crypto.randomUUID(), query: r, action: e } })),
        (t[20] = a),
        (t[21] = r),
        (t[22] = l),
        (t[23] = o),
        (t[24] = m))
      : (m = t[24]),
      (v = m),
      (b = `flex min-h-0 flex-col gap-2`),
      (x = _ && g.length === 0),
      (S =
        e?.type === `pull_request` && g.length === 0
          ? (0, Q.jsx)(ce, {
              icon: (0, Q.jsx)(f, {}),
              label: lt(i, qe(e, i)),
              onClick: () =>
                Qe(
                  l,
                  d,
                  u,
                  { scopeKey: o, hostId: a, server: `code-review`, url: e.url, title: r },
                  void 0,
                  `search`,
                ),
            })
          : null),
      (C = (0, Q.jsx)(P, { items: g.slice(0, p), source: `search` })),
      (w = _ && g.length === 0 ? (0, Q.jsx)(it, { provider: i }) : null),
      (T =
        !_ && !y?.failed && g.length === 0 && e?.type !== `pull_request`
          ? (0, Q.jsxs)(`span`, {
              className: `px-[var(--padding-row-cell-x,var(--padding-row-x))] text-start text-base text-secondary`,
              role: `status`,
              children: [e?.type === `number` && ut(i, qe(e, i)), e?.type !== `number` && dt(i)],
            })
          : null),
      (t[0] = a),
      (t[1] = s),
      (t[2] = p),
      (t[3] = u),
      (t[4] = d),
      (t[5] = i),
      (t[6] = r),
      (t[7] = l),
      (t[8] = o),
      (t[9] = c),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C),
      (t[18] = w),
      (t[19] = T));
  } else
    ((g = t[10]),
      (_ = t[11]),
      (v = t[12]),
      (y = t[13]),
      (b = t[14]),
      (x = t[15]),
      (S = t[16]),
      (C = t[17]),
      (w = t[18]),
      (T = t[19]));
  let E;
  t[25] !== v || t[26] !== y?.failed
    ? ((E = y?.failed
        ? (0, Q.jsx)(M, {
            color: `secondary`,
            variant: `ghost`,
            size: `md`,
            pill: !1,
            onClick: () => v(`retry`),
            children: (0, Q.jsx)(j, {
              id: `codeReview.sidebar.retrySearch`,
              defaultMessage: `Search failed. Try again`,
              description: `Retry a failed sidebar pull request search while keeping available results`,
            }),
          })
        : null),
      (t[25] = v),
      (t[26] = y?.failed),
      (t[27] = E))
    : (E = t[27]);
  let D;
  t[28] !== g.length || t[29] !== p || t[30] !== _ || t[31] !== v || t[32] !== y?.hasMore
    ? ((D =
        g.length > p || y?.hasMore
          ? (0, Q.jsx)(G, {
              children: (0, Q.jsx)(De, {
                disabled: _,
                onClick: () => {
                  (h(p + 20), g.length <= p && v(`more`));
                },
                children: (0, Q.jsx)(j, {
                  id: `sidebarElectron.showMore`,
                  defaultMessage: `Show more`,
                  description: `Button label for expanding a task list in the sidebar`,
                }),
              }),
            })
          : null),
      (t[28] = g.length),
      (t[29] = p),
      (t[30] = _),
      (t[31] = v),
      (t[32] = y?.hasMore),
      (t[33] = D))
    : (D = t[33]);
  let O;
  return (
    t[34] !== b ||
    t[35] !== x ||
    t[36] !== S ||
    t[37] !== C ||
    t[38] !== w ||
    t[39] !== T ||
    t[40] !== E ||
    t[41] !== D
      ? ((O = (0, Q.jsxs)(`div`, { className: b, "aria-busy": x, children: [S, C, w, T, E, D] })),
        (t[34] = b),
        (t[35] = x),
        (t[36] = S),
        (t[37] = C),
        (t[38] = w),
        (t[39] = T),
        (t[40] = E),
        (t[41] = D),
        (t[42] = O))
      : (O = t[42]),
    O
  );
}
function lt(e, t) {
  switch (e) {
    case `gitlab`:
      return (0, Q.jsx)(j, {
        id: `codeReview.sidebar.gitlab.openMergeRequest`,
        defaultMessage: `Open {pullRequest}`,
        description: `Open a GitLab merge request pasted into sidebar search; pullRequest is its complete formatted reference, such as group/project!123`,
        values: { pullRequest: t },
      });
    case `github`:
      return (0, Q.jsx)(j, {
        id: `codeReview.sidebar.openPullRequest`,
        defaultMessage: `Open {pullRequest}`,
        description: `Open a pull request pasted into sidebar search`,
        values: { pullRequest: t },
      });
  }
}
function ut(e, t) {
  switch (e) {
    case `gitlab`:
      return (0, Q.jsx)(j, {
        id: `codeReview.sidebar.gitlab.referenceNeedsRepository`,
        defaultMessage: `Paste an MR link or enter {reference}`,
        description: `Hint when a GitLab merge request number has no sidebar matches; MR means merge request, and reference is an example qualified reference such as group/project!123`,
        values: { reference: t },
      });
    case `github`:
      return (0, Q.jsx)(j, {
        id: `codeReview.sidebar.referenceNeedsRepository`,
        defaultMessage: `Paste a PR link or enter {reference}`,
        description: `Hint when a pull request number has no sidebar matches. The reference is an example qualified reference, such as owner/repo#123 for GitHub or group/project!123 for GitLab.`,
        values: { reference: t },
      });
  }
}
function dt(e) {
  switch (e) {
    case `gitlab`:
      return (0, Q.jsx)(j, {
        id: `codeReview.sidebar.gitlab.noSearchResults`,
        defaultMessage: `No merge requests found`,
        description: `No GitLab merge requests match the Code Review sidebar search`,
      });
    case `github`:
      return (0, Q.jsx)(j, {
        id: `codeReview.sidebar.noSearchResults`,
        defaultMessage: `No pull requests found`,
        description: `No pull requests match sidebar search`,
      });
  }
}
var ft, pt, Q;
function mt() {
  return (mt = e(() => {
    ((ft = u()),
      k(),
      v(),
      (pt = o()),
      g(),
      l(),
      Ae(),
      Be(),
      p(),
      Ze(),
      r(),
      L(),
      K(),
      st(),
      Re(),
      me(),
      (Q = s()));
  }))();
}
function ht(e) {
  let t = (0, zt.c)(51),
    { sidebarTriggerState: r } = e,
    i = n(ee),
    a = O(),
    o = m(),
    s = te(),
    c = E(R, s),
    l = C(_e),
    u = C(oe),
    d = we(u),
    f = E(N, c),
    p = f?.scopeKey === l ? f : void 0,
    h = E(z, c),
    g = h?.scopeKey === l ? (h?.query ?? ``) : ``,
    _;
  t[0] !== c || t[1] !== i || t[2] !== l
    ? ((_ = (e) => {
        l != null && i.set(z, c, { scopeKey: l, query: e });
      }),
      (t[0] = c),
      (t[1] = i),
      (t[2] = l),
      (t[3] = _))
    : (_ = t[3]);
  let v = _,
    { pins: y, recents: b } = C(B),
    x = E(he, c),
    {
      pinned: S,
      recentHistory: w,
      recentByUrl: T,
      routedUrl: D,
      selectedUrl: k,
      selectedFallback: ne,
      recentScope: A,
    } = Xe({
      provider: u,
      scopeKey: l,
      hostId: c,
      snapshot: p,
      savedPins: y,
      savedRecents: b,
      active: x,
      location: s,
    }),
    re = new Set(S.map(jt)),
    M = k?.toLowerCase(),
    P = Ne(k),
    I = s.state?.codeReviewSidebarSelection,
    L = I != null && Ie(P, I.url) ? I : void 0,
    V = [...T.keys()],
    [U, ce] = (0, Ht.useState)({ scope: A, urls: V, limit: Ut }),
    le = U.scope === A ? U : void 0,
    de = le?.limit ?? Ut,
    fe = M != null && !re.has(M) ? M : null,
    pe = L == null && D != null && fe != null && Ie(Ne(D), fe) ? fe : null,
    me = le?.urls ?? V,
    W = me.filter((e) => T.has(e) || e === M);
  pe != null && W[0] !== pe
    ? (W = [pe, ...W.filter((e) => e !== pe)])
    : L != null && (L.section == null || L.section === `pinned`) && M != null && !W.includes(M) && W.push(M);
  let ve = W.filter((e) => !re.has(e))
      .filter((e, t) => t < 20 || e === fe)
      .flatMap((e) => T.get(e) ?? (e === M ? ne : void 0) ?? []),
    ye = C(He),
    be = C(se),
    Se;
  t[4] === be ? (Se = t[5]) : ((Se = (e) => e === `pinned` || be?.includes(e)), (t[4] = be), (t[5] = Se));
  let Ce = ye
      .filter(Se)
      .map((e) => {
        if (Pt(e)) return { id: e, items: e === `recents` ? ve : S };
        let t = p?.sections.find((t) => t.id === e);
        if (e === `waiting_for_review` && p != null) {
          let n = p.sections.filter(At);
          t = {
            id: e,
            items: (0, Bt.default)((0, Vt.default)(n.flatMap(kt), Ot), [Dt, Et], [`desc`, `asc`]),
            loading: n.some(Tt),
            failed: n.some(wt),
            hasMore: n.some(Ct),
          };
        }
        return {
          status: t,
          id: e,
          items:
            l == null
              ? []
              : (t?.items
                  .filter((e) => !re.has(e.url.toLowerCase()))
                  .map((e) => ({
                    ...e,
                    providerAccountKey:
                      e.providerAccountKey ??
                      (p?.provider === `gitlab` ? (p.providerAccountKey ?? void 0) : void 0),
                    scopeKey: l,
                    hostId: c,
                    server: `code-review`,
                  })) ?? []),
        };
      })
      .filter(St),
    Te = M != null && re.has(M) ? `pinned` : `recents`,
    De = C(ze),
    ke;
  t[6] === De
    ? (ke = t[7])
    : ((ke = (e) => {
        let { id: t } = e;
        return !De.includes(t);
      }),
      (t[6] = De),
      (t[7] = ke));
  let Ae = Ce.filter(ke),
    Me = Ae.filter((e) => {
      let { items: t } = e;
      return t.some((e) => e.url.toLowerCase() === M);
    }),
    Pe = (
      Me.length > 0
        ? Me
        : Ae.filter((e) => {
            let { items: t } = e;
            return t.some((e) => d.includesSavedItem(e, p?.providerAccountKey ?? null) && Ie(P, e.url));
          })
    ).map(xt),
    Le =
      (L?.section != null && Pe.includes(L.section) ? L.section : void 0) ?? (Pe.includes(Te) ? Te : Pe[0]),
    Re =
      Le === `recents` && (pe != null || L?.section === `recents` || L?.section === `pinned`)
        ? Math.max(de, ve.findIndex((e) => e.url.toLowerCase() === M) + 1)
        : de;
  (le == null || Re !== de || !ae(me, W)) && ce({ scope: A, urls: W, limit: Re });
  let Be;
  t[8] !== i || t[9] !== l ? ((Be = (e) => H(i, l, e)), (t[8] = i), (t[9] = l), (t[10] = Be)) : (Be = t[10]);
  let Ve = Fe({ sectionKeys: Ce.map(bt), onSectionOrderChange: Be }),
    Ue;
  t[11] !== p || t[12] !== be
    ? ((Ue = be == null || p == null || p.sections.some(yt)), (t[11] = p), (t[12] = be), (t[13] = Ue))
    : (Ue = t[13]);
  let We = ie,
    qe;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (0, $.jsx)(xe, {
        children: (0, $.jsx)(j, {
          id: `codeReview.sidebar.title`,
          defaultMessage: `Code Review`,
          description: `Title of the Code Review sidebar`,
        }),
      })),
      (t[14] = qe))
    : (qe = t[14]);
  let Je;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, $.jsx)(tt, {})), (t[15] = Je))
    : (Je = t[15]);
  let Ye;
  t[16] === r
    ? (Ye = t[17])
    : ((Ye = (0, $.jsxs)(ge, {
        children: [qe, (0, $.jsxs)(F, { children: [Je, (0, $.jsx)(Ee, { sidebarTriggerState: r })] })],
      })),
      (t[16] = r),
      (t[17] = Ye));
  let Ze;
  t[18] !== a || t[19] !== u ? ((Ze = Ft(a, u)), (t[18] = a), (t[19] = u), (t[20] = Ze)) : (Ze = t[20]);
  let G;
  t[21] !== a || t[22] !== u ? ((G = It(a, u)), (t[21] = a), (t[22] = u), (t[23] = G)) : (G = t[23]);
  let et = l == null,
    K;
  t[24] !== c ||
  t[25] !== s ||
  t[26] !== o ||
  t[27] !== u ||
  t[28] !== i ||
  t[29] !== l ||
  t[30] !== g ||
  t[31] !== v ||
  t[32] !== p?.hostname
    ? ((K = (e) => {
        if ((e.key === `Escape` && v(``), e.key !== `Enter` || e.nativeEvent.isComposing || l == null))
          return;
        let t = Oe(g, p?.hostname, u);
        t?.type === `pull_request` &&
          (e.preventDefault(),
          Qe(
            i,
            o,
            s,
            { scopeKey: l, hostId: c, server: `code-review`, url: t.url, title: g },
            void 0,
            `search`,
          ));
      }),
      (t[24] = c),
      (t[25] = s),
      (t[26] = o),
      (t[27] = u),
      (t[28] = i),
      (t[29] = l),
      (t[30] = g),
      (t[31] = v),
      (t[32] = p?.hostname),
      (t[33] = K))
    : (K = t[33]);
  let q;
  t[34] !== g || t[35] !== v || t[36] !== Ze || t[37] !== G || t[38] !== et || t[39] !== K
    ? ((q = (0, $.jsx)(Ge, {
        id: `code-review-sidebar-search`,
        className: `mb-2`,
        label: Ze,
        placeholder: G,
        variant: `sidebar-header`,
        readOnly: et,
        maxLength: 256,
        searchQuery: g,
        onSearchQueryChange: v,
        onKeyDown: K,
      })),
      (t[34] = g),
      (t[35] = v),
      (t[36] = Ze),
      (t[37] = G),
      (t[38] = et),
      (t[39] = K),
      (t[40] = q))
    : (q = t[40]);
  let J;
  t[41] !== Ye || t[42] !== q
    ? ((J = (0, $.jsxs)($.Fragment, { children: [Ye, q] })), (t[41] = Ye), (t[42] = q), (t[43] = J))
    : (J = t[43]);
  let nt =
      p != null && g.trim() && l != null
        ? (0, $.jsx)(`div`, {
            className: `px-row-x`,
            children: (0, $.jsx)(
              ct,
              {
                query: g.trim(),
                provider: u,
                hostId: c,
                scopeKey: l,
                snapshot: p,
                items: [...Ce.flatMap(vt), ...w.slice(0, 20)],
              },
              `${l}:${c}:${g.trim()}`,
            ),
          })
        : (0, $.jsx)(ue, {
            homeContainerIdByThreadId: new Map(),
            onThreadDrop: _t,
            children: (0, $.jsx)(je, {
              items: Ve.sortableIds,
              strategy: $e,
              children: Ce.map((e) =>
                (0, $.jsx)(
                  Mt,
                  {
                    provider: u,
                    providerAccountKey: p?.providerAccountKey,
                    sectionKey: e.id,
                    sectionReorderDnd: Ve,
                    items: e.items,
                    status: e.status,
                    loading: !Pt(e.id) && (p == null || e.status == null || e.status.loading),
                    selectedUrl: k,
                    markCurrent: e.id === Le,
                    recentPagination: e.id === `recents` ? { limit: Re, showMore: () => ce(gt) } : void 0,
                    onBrowseMore: () => {
                      Pt(e.id) ||
                        Ke(i, {
                          provider: u,
                          scopeKey: l,
                          hostId: c,
                          sectionId: e.id,
                          failed: e.status?.failed,
                        });
                    },
                  },
                  `${l}:${c}:${e.id}`,
                ),
              ),
            }),
          }),
    Y;
  t[44] !== We || t[45] !== J || t[46] !== nt
    ? ((Y = (0, $.jsx)(We, {
        className: `mb-[var(--sidebar-footer-height)] flex flex-col gap-4 pb-row-x`,
        header: J,
        children: nt,
      })),
      (t[44] = We),
      (t[45] = J),
      (t[46] = nt),
      (t[47] = Y))
    : (Y = t[47]);
  let X;
  return (
    t[48] !== Y || t[49] !== Ue
      ? ((X = (0, $.jsx)(`div`, {
          className: `flex min-h-0 flex-1 flex-col select-none`,
          "aria-busy": Ue,
          children: Y,
        })),
        (t[48] = Y),
        (t[49] = Ue),
        (t[50] = X))
      : (X = t[50]),
    X
  );
}
function gt(e) {
  return { ...e, limit: e.limit + Ut };
}
function _t() {}
function vt(e) {
  return e.items;
}
function yt(e) {
  return e.loading && e.items.length === 0;
}
function bt(e) {
  let { id: t } = e;
  return t;
}
function xt(e) {
  let { id: t } = e;
  return t;
}
function St(e) {
  let { id: t, items: n } = e;
  return !Pt(t) || n.length > 0;
}
function Ct(e) {
  return e.hasMore;
}
function wt(e) {
  return e.failed;
}
function Tt(e) {
  return e.loading;
}
function Et(e) {
  return e.url.toLowerCase();
}
function Dt(e) {
  return e.updatedAt ?? ``;
}
function Ot(e) {
  return e.url.toLowerCase();
}
function kt(e) {
  return e.items;
}
function At(e) {
  return [`waiting_for_review`, `approved`, `drafts`].includes(e.id);
}
function jt(e) {
  return e.url.toLowerCase();
}
function Mt(e) {
  let t = (0, zt.c)(46),
    {
      provider: r,
      providerAccountKey: i,
      sectionKey: a,
      sectionReorderDnd: o,
      items: s,
      status: l,
      onBrowseMore: u,
      selectedUrl: d,
      loading: f,
      markCurrent: p,
      recentPagination: m,
    } = e,
    te = n(ee),
    h = C(_e),
    g = O(),
    _;
  t[0] !== a || t[1] !== g ? ((_ = g.formatMessage(q[a])), (t[0] = a), (t[1] = g), (t[2] = _)) : (_ = t[2]);
  let v = _,
    y = E(ve, a),
    [b, x] = (0, Ht.useState)(!1),
    [S, w] = (0, Ht.useState)(10),
    T = m?.limit ?? S,
    D;
  t[3] === m?.showMore ? (D = t[4]) : ((D = m?.showMore ?? (() => w(Nt))), (t[3] = m?.showMore), (t[4] = D));
  let k = D,
    ne = s.length > T;
  if (l != null && !f && !l.failed) {
    let e = s.length === 0 && !l.hasMore;
    e !== b && x(e);
  }
  let A = y ?? b,
    re = Ne(d ?? null),
    M = Ye(re, s, (e) => we(r).includesSavedItem(e, i ?? null));
  m == null && M >= T && w(M + 1);
  let N;
  t[5] !== s || t[6] !== T ? ((N = s.slice(0, T)), (t[5] = s), (t[6] = T), (t[7] = N)) : (N = t[7]);
  let F = N,
    I;
  t[8] !== te || t[9] !== h || t[10] !== a
    ? ((I = (e) => ye(te, h, a, e)), (t[8] = te), (t[9] = h), (t[10] = a), (t[11] = I))
    : (I = t[11]);
  let L = a === `pinned`,
    R;
  t[12] !== p || t[13] !== a || t[14] !== L || t[15] !== F
    ? ((R = (0, $.jsx)(P, { items: F, showPinAction: L, markCurrent: p, sidebarSection: a })),
      (t[12] = p),
      (t[13] = a),
      (t[14] = L),
      (t[15] = F),
      (t[16] = R))
    : (R = t[16]);
  let z;
  t[17] !== s.length || t[18] !== f || t[19] !== r
    ? ((z = f && s.length === 0 ? (0, $.jsx)(it, { provider: r }) : null),
      (t[17] = s.length),
      (t[18] = f),
      (t[19] = r),
      (t[20] = z))
    : (z = t[20]);
  let B;
  t[21] !== s.length || t[22] !== f || t[23] !== r || t[24] !== l
    ? ((B =
        l != null && !f && !l.failed && s.length === 0
          ? (0, $.jsx)(`span`, {
              className: `px-[var(--padding-row-cell-x,var(--padding-row-x))] text-start text-base text-tertiary opacity-75`,
              role: `status`,
              children: Lt(r),
            })
          : null),
      (t[21] = s.length),
      (t[22] = f),
      (t[23] = r),
      (t[24] = l),
      (t[25] = B))
    : (B = t[25]);
  let V;
  t[26] !== r || t[27] !== l?.failed
    ? ((V = l?.failed
        ? (0, $.jsx)(`span`, { role: `status`, className: `text-xs text-secondary`, children: Rt(r) })
        : null),
      (t[26] = r),
      (t[27] = l?.failed),
      (t[28] = V))
    : (V = t[28]);
  let H;
  t[29] !== ne || t[30] !== u || t[31] !== k || t[32] !== l?.failed || t[33] !== l?.hasMore
    ? ((H =
        ne || l?.hasMore || l?.failed
          ? (0, $.jsx)(G, {
              children: (0, $.jsx)(De, {
                onClick: () => {
                  ne ? k() : u();
                },
                children: (0, $.jsx)(j, {
                  id: `sidebarElectron.showMore`,
                  defaultMessage: `Show more`,
                  description: `Button label for expanding a task list in the sidebar`,
                }),
              }),
            })
          : null),
      (t[29] = ne),
      (t[30] = u),
      (t[31] = k),
      (t[32] = l?.failed),
      (t[33] = l?.hasMore),
      (t[34] = H))
    : (H = t[34]);
  let U;
  return (
    t[35] !== A ||
    t[36] !== a ||
    t[37] !== o ||
    t[38] !== V ||
    t[39] !== H ||
    t[40] !== I ||
    t[41] !== R ||
    t[42] !== z ||
    t[43] !== B ||
    t[44] !== v
      ? ((U = (0, $.jsx)(c, {
          skipAnimations: !0,
          children: (0, $.jsxs)(Me, {
            heading: v,
            label: v,
            sectionKey: a,
            sectionReorderDnd: o,
            collapsed: A,
            onCollapsedChange: I,
            children: [R, z, B, V, H],
          }),
        })),
        (t[35] = A),
        (t[36] = a),
        (t[37] = o),
        (t[38] = V),
        (t[39] = H),
        (t[40] = I),
        (t[41] = R),
        (t[42] = z),
        (t[43] = B),
        (t[44] = v),
        (t[45] = U))
      : (U = t[45]),
    U
  );
}
function Nt(e) {
  return e + 10;
}
function Pt(e) {
  return e === `recents` || e === `pinned`;
}
function Ft(e, t) {
  switch (t) {
    case `gitlab`:
      return e.formatMessage({
        id: `codeReview.sidebar.gitlab.search`,
        defaultMessage: `Search merge requests`,
        description: `Accessible label for searching GitLab merge requests in the Code Review sidebar`,
      });
    case `github`:
      return e.formatMessage({
        id: `codeReview.sidebar.search`,
        defaultMessage: `Search pull requests`,
        description: `Accessible label for Code Review sidebar search`,
      });
  }
}
function It(e, t) {
  switch (t) {
    case `gitlab`:
      return e.formatMessage({
        id: `codeReview.sidebar.gitlab.searchPlaceholder`,
        defaultMessage: `Search or paste an MR link`,
        description: `Placeholder for searching GitLab merge requests or pasting a merge request link in the Code Review sidebar; MR means merge request`,
      });
    case `github`:
      return e.formatMessage({
        id: `codeReview.sidebar.searchPlaceholder`,
        defaultMessage: `Search or paste a PR link`,
        description: `Placeholder for sidebar pull request search and pasted links`,
      });
  }
}
function Lt(e) {
  switch (e) {
    case `gitlab`:
      return (0, $.jsx)(j, {
        id: `codeReview.sidebar.gitlab.emptySection`,
        defaultMessage: `No merge requests`,
        description: `Shown when an expanded Code Review sidebar category has no GitLab merge requests`,
      });
    case `github`:
      return (0, $.jsx)(j, {
        id: `codeReview.sidebar.emptySection`,
        defaultMessage: `No pull requests`,
        description: `Shown when an expanded Code Review sidebar category has no pull requests`,
      });
  }
}
function Rt(e) {
  switch (e) {
    case `gitlab`:
      return (0, $.jsx)(j, {
        id: `codeReview.sidebar.gitlab.unavailable`,
        defaultMessage: `Couldn’t load merge requests`,
        description: `Shown when a Code Review sidebar section of GitLab merge requests fails to load`,
      });
    case `github`:
      return (0, $.jsx)(j, {
        id: `codeReview.sidebar.unavailable`,
        defaultMessage: `Couldn’t load pull requests`,
        description: `Shown when a Code Review sidebar section fails to load`,
      });
  }
}
var zt, Bt, Vt, Ht, $, Ut;
function Wt() {
  return (Wt = e(() => {
    ((zt = u()),
      Pe(),
      I(),
      d(),
      (Bt = t(W(), 1)),
      (Vt = t(i(), 1)),
      v(),
      (Ht = o()),
      g(),
      l(),
      Ae(),
      We(),
      Be(),
      be(),
      de(),
      Le(),
      r(),
      le(),
      U(),
      Se(),
      K(),
      Je(),
      Ue(),
      Te(),
      rt(),
      st(),
      et(),
      mt(),
      J(),
      Re(),
      me(),
      ($ = s()),
      (Ut = 5));
  }))();
}
Wt();
export { ht as CodeReviewSidebar };
//# sourceMappingURL=sidebar-8383485da07c.js.map
