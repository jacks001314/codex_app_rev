import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $nt as n,
  ADt as r,
  AH as i,
  AO as a,
  CO as o,
  Cot as s,
  EB as c,
  Ext as l,
  IDt as u,
  Ixt as ee,
  JDt as d,
  Pxt as f,
  TJ as p,
  TO as m,
  VDt as h,
  Vxt as g,
  Wnt as _,
  _xt as v,
  dlt as y,
  ert as b,
  hot as x,
  jDt as S,
  lot as C,
  qnt as w,
  sMt as T,
  ult as E,
  vwt as D,
  vzt as O,
  wot as k,
  wxt as A,
  xMt as j,
  yAt as M,
  ywt as N,
  yzt as P,
  zxt as F,
} from "./app-shared-bbfeca5e5737.js";
import {
  $1 as I,
  $Sn as L,
  $it as R,
  A1 as z,
  Avn as B,
  Bit as V,
  D1 as H,
  E1 as U,
  Fan as W,
  Fvn as G,
  Git as K,
  Gq as te,
  Hit as ne,
  Hq as re,
  Kit as ie,
  Mvn as ae,
  Nan as oe,
  Nvn as se,
  Ovn as ce,
  Pan as le,
  Pvn as ue,
  Q1 as de,
  Q3n as q,
  Qit as fe,
  Rit as pe,
  Rvn as me,
  TSr as he,
  Uit as ge,
  Uq as _e,
  Vit as ve,
  Wit as ye,
  Wq as be,
  XSn as xe,
  Zit as Se,
  _U as Ce,
  _fn as we,
  a3n as Te,
  a5t as Ee,
  c5t as De,
  d5t as Oe,
  e0 as ke,
  e3n as Ae,
  e6n as je,
  eat as Me,
  gU as Ne,
  h5t as Pe,
  i3n as Fe,
  i5t as Ie,
  j1 as Le,
  kvn as Re,
  l5t as ze,
  llt as Be,
  m5t as Ve,
  n5t as He,
  o5t as Ue,
  p5t as We,
  qSn as Ge,
  r5t as Ke,
  s5t as qe,
  t3n as Je,
  u5t as Ye,
  ult as Xe,
  v1 as Ze,
  y1 as Qe,
  zit as $e,
} from "./app-initial-5851df3f6cb1.js";
var J;
function Y() {
  return (Y = e(() => {
    (S(),
      (J = r({
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
function et(e) {
  let t = (0, tt.c)(46),
    r = ee(s),
    a = h(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = E()), (t[0] = c)) : (c = t[0]);
  let l = c.sidebarLayout,
    d = n(l),
    f;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = E()), (t[1] = f)) : (f = t[1]);
  let p = f.sidebarSections,
    _ = n(p),
    v = g(De),
    y;
  t[2] === v ? (y = t[3]) : ((y = (e, t) => v.indexOf(e) - v.indexOf(t)), (t[2] = v), (t[3] = y));
  let S = g(Ie).toSorted(y),
    C = b(),
    [T, D] = (0, nt.useState)(!1),
    O;
  t[4] !== a || t[5] !== r
    ? ((O = function (e) {
        (D(!0),
          e
            .catch(() => {
              r.get(x).danger(
                a.formatMessage({
                  id: `codeReview.sidebar.display.preferencesSaveError`,
                  defaultMessage: `Unable to save sidebar preferences`,
                  description: `Error shown when saving Code Review sidebar layout or section visibility fails`,
                }),
                { errorAnalytics: { toastId: `codeReview.sidebar.display.preferencesSaveError` } },
              );
            })
            .finally(() => D(!1)));
      }),
      (t[4] = a),
      (t[5] = r),
      (t[6] = O))
    : (O = t[6]);
  let k = O,
    A = o,
    j = C || T,
    M;
  t[7] === a
    ? (M = t[8])
    : ((M = a.formatMessage({
        id: `codeReview.sidebar.display.options`,
        defaultMessage: `Sidebar display options`,
        description: `Opens layout and section visibility options for the Code Review sidebar`,
      })),
      (t[7] = a),
      (t[8] = M));
  let N = C || T,
    P;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((P = (0, X.jsx)(i, {})), (t[9] = P)) : (P = t[9]);
  let F;
  t[10] !== M || t[11] !== N
    ? ((F = (0, X.jsx)(Re, { "aria-label": M, disabled: N, uniform: !0, children: P })),
      (t[10] = M),
      (t[11] = N),
      (t[12] = F))
    : (F = t[12]);
  let I;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, X.jsx)(m.SectionLabel, {
        children: (0, X.jsx)(u, {
          id: `codeReview.sidebar.display.view`,
          defaultMessage: `View`,
          description: `Heading above the compact and detailed layout choices for the Code Review sidebar`,
        }),
      })),
      (t[13] = I))
    : (I = t[13]);
  let L;
  t[14] !== k || t[15] !== r
    ? ((L = () => k(w(r, l, `compact`))), (t[14] = k), (t[15] = r), (t[16] = L))
    : (L = t[16]);
  let R;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, X.jsx)(u, {
        id: `codeReview.sidebar.display.compact`,
        defaultMessage: `Compact`,
        description: `Pull request sidebar layout with the author avatar, title, and status icons on one line`,
      })),
      (t[17] = R))
    : (R = t[17]);
  let z;
  t[18] === L
    ? (z = t[19])
    : ((z = (0, X.jsx)(m.RadioItem, { value: `compact`, onSelect: L, children: R })),
      (t[18] = L),
      (t[19] = z));
  let B;
  t[20] !== k || t[21] !== r
    ? ((B = () => k(w(r, l, `detailed`))), (t[20] = k), (t[21] = r), (t[22] = B))
    : (B = t[22]);
  let V;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, X.jsx)(u, {
        id: `codeReview.sidebar.display.detailed`,
        defaultMessage: `Detailed`,
        description: `Pull request sidebar layout with up to two title lines, the author avatar and name, and status icons`,
      })),
      (t[23] = V))
    : (V = t[23]);
  let H;
  t[24] === B
    ? (H = t[25])
    : ((H = (0, X.jsx)(m.RadioItem, { value: `detailed`, onSelect: B, children: V })),
      (t[24] = B),
      (t[25] = H));
  let U;
  t[26] !== d || t[27] !== z || t[28] !== H
    ? ((U = (0, X.jsxs)(m.RadioGroup, { value: d, children: [z, H] })),
      (t[26] = d),
      (t[27] = z),
      (t[28] = H),
      (t[29] = U))
    : (U = t[29]);
  let W;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, X.jsx)(m.Separator, {})), (t[30] = W))
    : (W = t[30]);
  let G;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, X.jsx)(m.SectionLabel, {
        children: (0, X.jsx)(u, {
          id: `codeReview.sidebar.display.sections`,
          defaultMessage: `Sections`,
          description: `Heading above the choices for which pull request lists to show in the Code Review sidebar`,
        }),
      })),
      (t[31] = G))
    : (G = t[31]);
  let K;
  t[32] !== T || t[33] !== k || t[34] !== r || t[35] !== _
    ? ((K = (e) =>
        (0, X.jsx)(
          m.CheckboxItem,
          {
            checked: _.includes(e),
            disabled: T,
            onCheckedChange: (t) => k(w(r, p, t === !0 ? [..._, e] : _.filter((t) => t !== e))),
            children: (0, X.jsx)(u, { ...J[e] }),
          },
          e,
        )),
      (t[32] = T),
      (t[33] = k),
      (t[34] = r),
      (t[35] = _),
      (t[36] = K))
    : (K = t[36]);
  let te = S.map(K),
    ne;
  return (
    t[37] !== A ||
    t[38] !== F ||
    t[39] !== I ||
    t[40] !== U ||
    t[41] !== W ||
    t[42] !== G ||
    t[43] !== te ||
    t[44] !== j
      ? ((ne = (0, X.jsxs)(A, {
          align: `end`,
          contentWidth: `menu`,
          disabled: j,
          triggerButton: F,
          children: [I, U, W, G, te],
        })),
        (t[37] = A),
        (t[38] = F),
        (t[39] = I),
        (t[40] = U),
        (t[41] = W),
        (t[42] = G),
        (t[43] = te),
        (t[44] = j),
        (t[45] = ne))
      : (ne = t[45]),
    ne
  );
}
var tt, nt, X;
function rt() {
  return (rt = e(() => {
    ((tt = O()), f(), y(), (nt = P()), S(), a(), p(), C(), k(), _(), se(), Y(), Oe(), (X = j()));
  }))();
}
function it(e) {
  let t = (0, ot.c)(11),
    { provider: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = E()), (t[0] = i)) : (i = t[0]);
  let a = n(i.sidebarLayout) === `detailed`,
    o;
  t[1] === r ? (o = t[2]) : ((o = at(r)), (t[1] = r), (t[2] = o));
  let s;
  t[3] === o
    ? (s = t[4])
    : ((s = (0, Z.jsx)(`span`, { className: `sr-only`, children: o })), (t[3] = o), (t[4] = s));
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = [72, 55]), (t[5] = c)) : (c = t[5]);
  let l;
  t[6] === a
    ? (l = t[7])
    : ((l = (0, Z.jsx)(G, {
        children: c.map((e) =>
          (0, Z.jsx)(
            ue,
            {
              className: a ? `pe-2` : `pe-1`,
              "aria-hidden": !0,
              disabled: !0,
              icon: a
                ? void 0
                : (0, Z.jsx)(`span`, {
                    className: `size-4 shrink-0`,
                    children: (0, Z.jsx)(q, { as: `span`, size: `fill` }),
                  }),
              label: (0, Z.jsx)(`span`, {
                className: `flex h-6 items-center gap-2`,
                children: (0, Z.jsx)(q, { className: `inline-block`, as: `span`, widthPercent: e }),
              }),
              labelTrailing: a
                ? void 0
                : (0, Z.jsx)(`span`, {
                    className: `h-3 w-6 shrink-0`,
                    children: (0, Z.jsx)(q, { as: `span`, size: `fill` }),
                  }),
              description: a
                ? (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: `size-4 shrink-0`,
                        children: (0, Z.jsx)(q, { as: `span`, size: `fill` }),
                      }),
                      (0, Z.jsx)(q, { as: `span`, size: `sm`, widthPercent: 25 }),
                      (0, Z.jsx)(q, { as: `span`, size: `sm`, widthPercent: 10 }),
                    ],
                  })
                : void 0,
            },
            e,
          ),
        ),
      })),
      (t[6] = a),
      (t[7] = l));
  let u;
  return (
    t[8] !== s || t[9] !== l
      ? ((u = (0, Z.jsxs)(`div`, { "aria-live": `polite`, role: `status`, children: [s, l] })),
        (t[8] = s),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function at(e) {
  switch (e) {
    case `gitlab`:
      return (0, Z.jsx)(u, {
        id: `codeReview.sidebar.gitlab.loading`,
        defaultMessage: `Loading merge requests`,
        description: `Accessible label while GitLab merge requests load in the Code Review sidebar`,
      });
    case `github`:
      return (0, Z.jsx)(u, {
        id: `codeReview.sidebar.loading`,
        defaultMessage: `Loading pull requests`,
        description: `Accessible label for pull requests loading in the sidebar`,
      });
  }
}
var ot, Z;
function st() {
  return (st = e(() => {
    ((ot = O()), y(), S(), je(), _(), me(), (Z = j()));
  }))();
}
function ct(e) {
  let t = (0, ft.c)(43),
    { query: n, provider: r, hostId: i, scopeKey: a, items: o, snapshot: d } = e,
    f = ee(s),
    p = A(),
    m = l(),
    [h, g] = (0, pt.useState)(20),
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E;
  if (
    t[0] !== i ||
    t[1] !== o ||
    t[2] !== h ||
    t[3] !== p ||
    t[4] !== m ||
    t[5] !== r ||
    t[6] !== n ||
    t[7] !== f ||
    t[8] !== a ||
    t[9] !== d
  ) {
    let e = ge(n, d?.hostname, r);
    b = d?.search?.query === n ? d.search : void 0;
    let s = o.filter((t) => {
        if (e != null) return ie(e, t.url, r);
        let i = [t.title, t.url, t.authorName, t.authorLogin].join(` `).toLowerCase();
        return n
          .toLowerCase()
          .split(/\s+/)
          .every((e) => i.includes(e));
      }),
      l = new Map();
    for (let e of [
      ...s,
      ...(b?.items.map((e) => ({
        ...e,
        providerAccountKey:
          e.providerAccountKey ?? (d?.provider === `gitlab` ? (d.providerAccountKey ?? void 0) : void 0),
        scopeKey: a,
        hostId: i,
        server: `code-review`,
      })) ?? []),
    ])
      l.set(JSON.stringify([e.hostId, e.server, e.url.toLowerCase()]), e);
    ((_ = [...l.values()]), (v = e == null && (b == null || b.loading)));
    let u;
    (t[20] !== i || t[21] !== n || t[22] !== f || t[23] !== a
      ? ((u = (e) =>
          f.set(Ue, i, { scopeKey: a, query: n, action: { id: crypto.randomUUID(), query: n, action: e } })),
        (t[20] = i),
        (t[21] = n),
        (t[22] = f),
        (t[23] = a),
        (t[24] = u))
      : (u = t[24]),
      (y = u),
      (x = `flex min-h-0 flex-col gap-2`),
      (S = v && _.length === 0),
      (C =
        e?.type === `pull_request` && _.length === 0
          ? (0, Q.jsx)(ue, {
              icon: (0, Q.jsx)(c, {}),
              label: lt(r, ye(e, r)),
              onClick: () =>
                $e(
                  f,
                  m,
                  p,
                  { scopeKey: a, hostId: i, server: `code-review`, url: e.url, title: n },
                  void 0,
                  `search`,
                ),
            })
          : null),
      (w = (0, Q.jsx)(Ne, { items: _.slice(0, h), source: `search` })),
      (T = v && _.length === 0 ? (0, Q.jsx)(it, { provider: r }) : null),
      (E =
        !v && !b?.failed && _.length === 0 && e?.type !== `pull_request`
          ? (0, Q.jsxs)(`span`, {
              className: `px-[var(--padding-row-cell-x,var(--padding-row-x))] text-start text-base text-secondary`,
              role: `status`,
              children: [e?.type === `number` && ut(r, ye(e, r)), e?.type !== `number` && dt(r)],
            })
          : null),
      (t[0] = i),
      (t[1] = o),
      (t[2] = h),
      (t[3] = p),
      (t[4] = m),
      (t[5] = r),
      (t[6] = n),
      (t[7] = f),
      (t[8] = a),
      (t[9] = d),
      (t[10] = _),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C),
      (t[17] = w),
      (t[18] = T),
      (t[19] = E));
  } else
    ((_ = t[10]),
      (v = t[11]),
      (y = t[12]),
      (b = t[13]),
      (x = t[14]),
      (S = t[15]),
      (C = t[16]),
      (w = t[17]),
      (T = t[18]),
      (E = t[19]));
  let D;
  t[25] !== y || t[26] !== b?.failed
    ? ((D = b?.failed
        ? (0, Q.jsx)(M, {
            color: `secondary`,
            variant: `ghost`,
            size: `md`,
            pill: !1,
            onClick: () => y(`retry`),
            children: (0, Q.jsx)(u, {
              id: `codeReview.sidebar.retrySearch`,
              defaultMessage: `Search failed. Try again`,
              description: `Retry a failed sidebar pull request search while keeping available results`,
            }),
          })
        : null),
      (t[25] = y),
      (t[26] = b?.failed),
      (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] !== _.length || t[29] !== h || t[30] !== v || t[31] !== y || t[32] !== b?.hasMore
    ? ((O =
        _.length > h || b?.hasMore
          ? (0, Q.jsx)(I, {
              children: (0, Q.jsx)(de, {
                disabled: v,
                onClick: () => {
                  (g(h + 20), _.length <= h && y(`more`));
                },
                children: (0, Q.jsx)(u, {
                  id: `sidebarElectron.showMore`,
                  defaultMessage: `Show more`,
                  description: `Button label for expanding a task list in the sidebar`,
                }),
              }),
            })
          : null),
      (t[28] = _.length),
      (t[29] = h),
      (t[30] = v),
      (t[31] = y),
      (t[32] = b?.hasMore),
      (t[33] = O))
    : (O = t[33]);
  let k;
  return (
    t[34] !== x ||
    t[35] !== S ||
    t[36] !== C ||
    t[37] !== w ||
    t[38] !== T ||
    t[39] !== E ||
    t[40] !== D ||
    t[41] !== O
      ? ((k = (0, Q.jsxs)(`div`, { className: x, "aria-busy": S, children: [C, w, T, E, D, O] })),
        (t[34] = x),
        (t[35] = S),
        (t[36] = C),
        (t[37] = w),
        (t[38] = T),
        (t[39] = E),
        (t[40] = D),
        (t[41] = O),
        (t[42] = k))
      : (k = t[42]),
    k
  );
}
function lt(e, t) {
  switch (e) {
    case `gitlab`:
      return (0, Q.jsx)(u, {
        id: `codeReview.sidebar.gitlab.openMergeRequest`,
        defaultMessage: `Open {pullRequest}`,
        description: `Open a GitLab merge request pasted into sidebar search; pullRequest is its complete formatted reference, such as group/project!123`,
        values: { pullRequest: t },
      });
    case `github`:
      return (0, Q.jsx)(u, {
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
      return (0, Q.jsx)(u, {
        id: `codeReview.sidebar.gitlab.referenceNeedsRepository`,
        defaultMessage: `Paste an MR link or enter {reference}`,
        description: `Hint when a GitLab merge request number has no sidebar matches; MR means merge request, and reference is an example qualified reference such as group/project!123`,
        values: { reference: t },
      });
    case `github`:
      return (0, Q.jsx)(u, {
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
      return (0, Q.jsx)(u, {
        id: `codeReview.sidebar.gitlab.noSearchResults`,
        defaultMessage: `No merge requests found`,
        description: `No GitLab merge requests match the Code Review sidebar search`,
      });
    case `github`:
      return (0, Q.jsx)(u, {
        id: `codeReview.sidebar.noSearchResults`,
        defaultMessage: `No pull requests found`,
        description: `No pull requests match sidebar search`,
      });
  }
}
var ft, pt, Q;
function mt() {
  return (mt = e(() => {
    ((ft = O()),
      d(),
      f(),
      (pt = P()),
      S(),
      v(),
      pe(),
      Ce(),
      p(),
      K(),
      k(),
      me(),
      ke(),
      st(),
      ne(),
      Oe(),
      (Q = j()));
  }))();
}
function ht(e) {
  let t = (0, zt.c)(51),
    { sidebarTriggerState: n } = e,
    r = ee(s),
    i = h(),
    a = l(),
    o = A(),
    c = F(He, o),
    d = g(le),
    f = g(Ae),
    p = Te(f),
    m = F(ze, c),
    _ = m?.scopeKey === d ? m : void 0,
    v = F(Ue, c),
    y = v?.scopeKey === d ? (v?.query ?? ``) : ``,
    b;
  t[0] !== c || t[1] !== r || t[2] !== d
    ? ((b = (e) => {
        d != null && r.set(Ue, c, { scopeKey: d, query: e });
      }),
      (t[0] = c),
      (t[1] = r),
      (t[2] = d),
      (t[3] = b))
    : (b = t[3]);
  let x = b,
    { pins: S, recents: C } = g(Ee),
    w = F(oe, c),
    {
      pinned: T,
      recentHistory: E,
      recentByUrl: D,
      routedUrl: O,
      selectedUrl: k,
      selectedFallback: j,
      recentScope: M,
    } = ve({
      provider: f,
      scopeKey: d,
      hostId: c,
      snapshot: _,
      savedPins: S,
      savedRecents: C,
      active: w,
      location: o,
    }),
    N = new Set(T.map(jt)),
    P = k?.toLowerCase(),
    I = Me(k),
    H = o.state?.codeReviewSidebarSelection,
    W = H != null && R(I, H.url) ? H : void 0,
    G = [...D.keys()],
    [K, ne] = (0, Ht.useState)({ scope: M, urls: G, limit: Ut }),
    re = K.scope === M ? K : void 0,
    ie = re?.limit ?? Ut,
    se = P != null && !N.has(P) ? P : null,
    ue = W == null && O != null && se != null && R(Me(O), se) ? se : null,
    de = re?.urls ?? G,
    q = de.filter((e) => D.has(e) || e === P);
  ue != null && q[0] !== ue
    ? (q = [ue, ...q.filter((e) => e !== ue)])
    : W != null && (W.section == null || W.section === `pinned`) && P != null && !q.includes(P) && q.push(P);
  let fe = q
      .filter((e) => !N.has(e))
      .filter((e, t) => t < 20 || e === se)
      .flatMap((e) => D.get(e) ?? (e === P ? j : void 0) ?? []),
    pe = g(De),
    me = g(Pe),
    _e;
  t[4] === me ? (_e = t[5]) : ((_e = (e) => e === `pinned` || me?.includes(e)), (t[4] = me), (t[5] = _e));
  let ye = pe
      .filter(_e)
      .map((e) => {
        if (Pt(e)) return { id: e, items: e === `recents` ? fe : T };
        let t = _?.sections.find((t) => t.id === e);
        if (e === `waiting_for_review` && _ != null) {
          let n = _.sections.filter(At);
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
            d == null
              ? []
              : (t?.items
                  .filter((e) => !N.has(e.url.toLowerCase()))
                  .map((e) => ({
                    ...e,
                    providerAccountKey:
                      e.providerAccountKey ??
                      (_?.provider === `gitlab` ? (_.providerAccountKey ?? void 0) : void 0),
                    scopeKey: d,
                    hostId: c,
                    server: `code-review`,
                  })) ?? []),
        };
      })
      .filter(St),
    be = P != null && N.has(P) ? `pinned` : `recents`,
    xe = g(Ye),
    Se;
  t[6] === xe
    ? (Se = t[7])
    : ((Se = (e) => {
        let { id: t } = e;
        return !xe.includes(t);
      }),
      (t[6] = xe),
      (t[7] = Se));
  let Ce = ye.filter(Se),
    we = Ce.filter((e) => {
      let { items: t } = e;
      return t.some((e) => e.url.toLowerCase() === P);
    }),
    Oe = (
      we.length > 0
        ? we
        : Ce.filter((e) => {
            let { items: t } = e;
            return t.some((e) => p.includesSavedItem(e, _?.providerAccountKey ?? null) && R(I, e.url));
          })
    ).map(xt),
    ke =
      (W?.section != null && Oe.includes(W.section) ? W.section : void 0) ?? (Oe.includes(be) ? be : Oe[0]),
    je =
      ke === `recents` && (ue != null || W?.section === `recents` || W?.section === `pinned`)
        ? Math.max(ie, fe.findIndex((e) => e.url.toLowerCase() === P) + 1)
        : ie;
  (re == null || je !== ie || !he(de, q)) && ne({ scope: M, urls: q, limit: je });
  let Ne;
  t[8] !== r || t[9] !== d ? ((Ne = (e) => Ve(r, d, e)), (t[8] = r), (t[9] = d), (t[10] = Ne)) : (Ne = t[10]);
  let Fe = te({ sectionKeys: ye.map(bt), onSectionOrderChange: Ne }),
    Ie;
  t[11] !== _ || t[12] !== me
    ? ((Ie = me == null || _ == null || _.sections.some(yt)), (t[11] = _), (t[12] = me), (t[13] = Ie))
    : (Ie = t[13]);
  let Le = U,
    Re;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = (0, $.jsx)(ae, {
        children: (0, $.jsx)(u, {
          id: `codeReview.sidebar.title`,
          defaultMessage: `Code Review`,
          description: `Title of the Code Review sidebar`,
        }),
      })),
      (t[14] = Re))
    : (Re = t[14]);
  let We;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (0, $.jsx)(et, {})), (t[15] = We))
    : (We = t[15]);
  let Ke;
  t[16] === n
    ? (Ke = t[17])
    : ((Ke = (0, $.jsxs)(B, {
        children: [Re, (0, $.jsxs)(ce, { children: [We, (0, $.jsx)(z, { sidebarTriggerState: n })] })],
      })),
      (t[16] = n),
      (t[17] = Ke));
  let qe;
  t[18] !== i || t[19] !== f ? ((qe = Ft(i, f)), (t[18] = i), (t[19] = f), (t[20] = qe)) : (qe = t[20]);
  let Je;
  t[21] !== i || t[22] !== f ? ((Je = It(i, f)), (t[21] = i), (t[22] = f), (t[23] = Je)) : (Je = t[23]);
  let Xe = d == null,
    Qe;
  t[24] !== c ||
  t[25] !== o ||
  t[26] !== a ||
  t[27] !== f ||
  t[28] !== r ||
  t[29] !== d ||
  t[30] !== y ||
  t[31] !== x ||
  t[32] !== _?.hostname
    ? ((Qe = (e) => {
        if ((e.key === `Escape` && x(``), e.key !== `Enter` || e.nativeEvent.isComposing || d == null))
          return;
        let t = ge(y, _?.hostname, f);
        t?.type === `pull_request` &&
          (e.preventDefault(),
          $e(
            r,
            a,
            o,
            { scopeKey: d, hostId: c, server: `code-review`, url: t.url, title: y },
            void 0,
            `search`,
          ));
      }),
      (t[24] = c),
      (t[25] = o),
      (t[26] = a),
      (t[27] = f),
      (t[28] = r),
      (t[29] = d),
      (t[30] = y),
      (t[31] = x),
      (t[32] = _?.hostname),
      (t[33] = Qe))
    : (Qe = t[33]);
  let J;
  t[34] !== y || t[35] !== x || t[36] !== qe || t[37] !== Je || t[38] !== Xe || t[39] !== Qe
    ? ((J = (0, $.jsx)(Be, {
        id: `code-review-sidebar-search`,
        className: `mb-2`,
        label: qe,
        placeholder: Je,
        variant: `sidebar-header`,
        readOnly: Xe,
        maxLength: 256,
        searchQuery: y,
        onSearchQueryChange: x,
        onKeyDown: Qe,
      })),
      (t[34] = y),
      (t[35] = x),
      (t[36] = qe),
      (t[37] = Je),
      (t[38] = Xe),
      (t[39] = Qe),
      (t[40] = J))
    : (J = t[40]);
  let Y;
  t[41] !== Ke || t[42] !== J
    ? ((Y = (0, $.jsxs)($.Fragment, { children: [Ke, J] })), (t[41] = Ke), (t[42] = J), (t[43] = Y))
    : (Y = t[43]);
  let tt =
      _ != null && y.trim() && d != null
        ? (0, $.jsx)(`div`, {
            className: `px-row-x`,
            children: (0, $.jsx)(
              ct,
              {
                query: y.trim(),
                provider: f,
                hostId: c,
                scopeKey: d,
                snapshot: _,
                items: [...ye.flatMap(vt), ...E.slice(0, 20)],
              },
              `${d}:${c}:${y.trim()}`,
            ),
          })
        : (0, $.jsx)(Ze, {
            homeContainerIdByThreadId: new Map(),
            onThreadDrop: _t,
            children: (0, $.jsx)(Ge, {
              items: Fe.sortableIds,
              strategy: L,
              children: ye.map((e) =>
                (0, $.jsx)(
                  Mt,
                  {
                    provider: f,
                    providerAccountKey: _?.providerAccountKey,
                    sectionKey: e.id,
                    sectionReorderDnd: Fe,
                    items: e.items,
                    status: e.status,
                    loading: !Pt(e.id) && (_ == null || e.status == null || e.status.loading),
                    selectedUrl: k,
                    markCurrent: e.id === ke,
                    recentPagination: e.id === `recents` ? { limit: je, showMore: () => ne(gt) } : void 0,
                    onBrowseMore: () => {
                      Pt(e.id) ||
                        V(r, {
                          provider: f,
                          scopeKey: d,
                          hostId: c,
                          sectionId: e.id,
                          failed: e.status?.failed,
                        });
                    },
                  },
                  `${d}:${c}:${e.id}`,
                ),
              ),
            }),
          }),
    nt;
  t[44] !== Le || t[45] !== Y || t[46] !== tt
    ? ((nt = (0, $.jsx)(Le, {
        className: `mb-[var(--sidebar-footer-height)] flex flex-col gap-4 pb-row-x`,
        header: Y,
        children: tt,
      })),
      (t[44] = Le),
      (t[45] = Y),
      (t[46] = tt),
      (t[47] = nt))
    : (nt = t[47]);
  let X;
  return (
    t[48] !== nt || t[49] !== Ie
      ? ((X = (0, $.jsx)(`div`, {
          className: `flex min-h-0 flex-1 flex-col select-none`,
          "aria-busy": Ie,
          children: nt,
        })),
        (t[48] = nt),
        (t[49] = Ie),
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
      provider: n,
      providerAccountKey: r,
      sectionKey: i,
      sectionReorderDnd: a,
      items: o,
      status: c,
      onBrowseMore: l,
      selectedUrl: d,
      loading: f,
      markCurrent: p,
      recentPagination: m,
    } = e,
    _ = ee(s),
    v = g(le),
    y = h(),
    b;
  t[0] !== i || t[1] !== y ? ((b = y.formatMessage(J[i])), (t[0] = i), (t[1] = y), (t[2] = b)) : (b = t[2]);
  let x = b,
    S = F(qe, i),
    [C, w] = (0, Ht.useState)(!1),
    [T, E] = (0, Ht.useState)(10),
    O = m?.limit ?? T,
    k;
  t[3] === m?.showMore ? (k = t[4]) : ((k = m?.showMore ?? (() => E(Nt))), (t[3] = m?.showMore), (t[4] = k));
  let A = k,
    j = o.length > O;
  if (c != null && !f && !c.failed) {
    let e = o.length === 0 && !c.hasMore;
    e !== C && w(e);
  }
  let M = S ?? C,
    N = Me(d ?? null),
    P = Se(N, o, (e) => Te(n).includesSavedItem(e, r ?? null));
  m == null && P >= O && E(P + 1);
  let L;
  t[5] !== o || t[6] !== O ? ((L = o.slice(0, O)), (t[5] = o), (t[6] = O), (t[7] = L)) : (L = t[7]);
  let R = L,
    z;
  t[8] !== _ || t[9] !== v || t[10] !== i
    ? ((z = (e) => We(_, v, i, e)), (t[8] = _), (t[9] = v), (t[10] = i), (t[11] = z))
    : (z = t[11]);
  let B = i === `pinned`,
    V;
  t[12] !== p || t[13] !== i || t[14] !== B || t[15] !== R
    ? ((V = (0, $.jsx)(Ne, { items: R, showPinAction: B, markCurrent: p, sidebarSection: i })),
      (t[12] = p),
      (t[13] = i),
      (t[14] = B),
      (t[15] = R),
      (t[16] = V))
    : (V = t[16]);
  let H;
  t[17] !== o.length || t[18] !== f || t[19] !== n
    ? ((H = f && o.length === 0 ? (0, $.jsx)(it, { provider: n }) : null),
      (t[17] = o.length),
      (t[18] = f),
      (t[19] = n),
      (t[20] = H))
    : (H = t[20]);
  let U;
  t[21] !== o.length || t[22] !== f || t[23] !== n || t[24] !== c
    ? ((U =
        c != null && !f && !c.failed && o.length === 0
          ? (0, $.jsx)(`span`, {
              className: `px-[var(--padding-row-cell-x,var(--padding-row-x))] text-start text-base text-tertiary opacity-75`,
              role: `status`,
              children: Lt(n),
            })
          : null),
      (t[21] = o.length),
      (t[22] = f),
      (t[23] = n),
      (t[24] = c),
      (t[25] = U))
    : (U = t[25]);
  let W;
  t[26] !== n || t[27] !== c?.failed
    ? ((W = c?.failed
        ? (0, $.jsx)(`span`, { role: `status`, className: `text-xs text-secondary`, children: Rt(n) })
        : null),
      (t[26] = n),
      (t[27] = c?.failed),
      (t[28] = W))
    : (W = t[28]);
  let G;
  t[29] !== j || t[30] !== l || t[31] !== A || t[32] !== c?.failed || t[33] !== c?.hasMore
    ? ((G =
        j || c?.hasMore || c?.failed
          ? (0, $.jsx)(I, {
              children: (0, $.jsx)(de, {
                onClick: () => {
                  j ? A() : l();
                },
                children: (0, $.jsx)(u, {
                  id: `sidebarElectron.showMore`,
                  defaultMessage: `Show more`,
                  description: `Button label for expanding a task list in the sidebar`,
                }),
              }),
            })
          : null),
      (t[29] = j),
      (t[30] = l),
      (t[31] = A),
      (t[32] = c?.failed),
      (t[33] = c?.hasMore),
      (t[34] = G))
    : (G = t[34]);
  let K;
  return (
    t[35] !== M ||
    t[36] !== i ||
    t[37] !== a ||
    t[38] !== W ||
    t[39] !== G ||
    t[40] !== z ||
    t[41] !== V ||
    t[42] !== H ||
    t[43] !== U ||
    t[44] !== x
      ? ((K = (0, $.jsx)(D, {
          skipAnimations: !0,
          children: (0, $.jsxs)(re, {
            heading: x,
            label: x,
            sectionKey: i,
            sectionReorderDnd: a,
            collapsed: M,
            onCollapsedChange: z,
            children: [V, H, U, W, G],
          }),
        })),
        (t[35] = M),
        (t[36] = i),
        (t[37] = a),
        (t[38] = W),
        (t[39] = G),
        (t[40] = z),
        (t[41] = V),
        (t[42] = H),
        (t[43] = U),
        (t[44] = x),
        (t[45] = K))
      : (K = t[45]),
    K
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
      return (0, $.jsx)(u, {
        id: `codeReview.sidebar.gitlab.emptySection`,
        defaultMessage: `No merge requests`,
        description: `Shown when an expanded Code Review sidebar category has no GitLab merge requests`,
      });
    case `github`:
      return (0, $.jsx)(u, {
        id: `codeReview.sidebar.emptySection`,
        defaultMessage: `No pull requests`,
        description: `Shown when an expanded Code Review sidebar category has no pull requests`,
      });
  }
}
function Rt(e) {
  switch (e) {
    case `gitlab`:
      return (0, $.jsx)(u, {
        id: `codeReview.sidebar.gitlab.unavailable`,
        defaultMessage: `Couldn’t load merge requests`,
        description: `Shown when a Code Review sidebar section of GitLab merge requests fails to load`,
      });
    case `github`:
      return (0, $.jsx)(u, {
        id: `codeReview.sidebar.unavailable`,
        defaultMessage: `Couldn’t load pull requests`,
        description: `Shown when a Code Review sidebar section fails to load`,
      });
  }
}
var zt, Bt, Vt, Ht, $, Ut;
function Wt() {
  return (Wt = e(() => {
    ((zt = O()),
      xe(),
      Fe(),
      N(),
      (Bt = t(we(), 1)),
      (Vt = t(T(), 1)),
      f(),
      (Ht = P()),
      S(),
      v(),
      pe(),
      fe(),
      Ce(),
      W(),
      Je(),
      Xe(),
      k(),
      H(),
      se(),
      Qe(),
      ke(),
      _e(),
      be(),
      Le(),
      rt(),
      st(),
      Ke(),
      mt(),
      Y(),
      ne(),
      Oe(),
      ($ = j()),
      (Ut = 5));
  }))();
}
Wt();
export { ht as CodeReviewSidebar };
//# sourceMappingURL=sidebar-7979e42ddf8d.js.map
