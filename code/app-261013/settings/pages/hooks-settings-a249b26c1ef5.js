import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  D2 as r,
  Ez as i,
  GE as a,
  IDt as o,
  Ixt as s,
  JC as c,
  Mz as l,
  Nxt as u,
  Nz as d,
  O2 as f,
  Pxt as p,
  QC as m,
  RU as h,
  TJ as g,
  Tk as _,
  VDt as v,
  Vxt as y,
  WE as b,
  XD as x,
  YD as S,
  _$ as C,
  _Mt as w,
  _O as T,
  _k as E,
  _xt as D,
  aD as O,
  cO as k,
  cz as A,
  fO as j,
  gMt as M,
  gk as N,
  hot as P,
  iD as F,
  iw as I,
  ixt as L,
  jDt as R,
  kz as z,
  l0 as B,
  lO as V,
  lot as ee,
  mO as H,
  nst as te,
  oO as U,
  qC as W,
  sz as ne,
  t3 as G,
  tst as K,
  tw as re,
  u0 as ie,
  v$ as q,
  vO as ae,
  vzt as J,
  wk as Y,
  wot as oe,
  wxt as se,
  xMt as ce,
  yzt as le,
  zxt as ue,
} from "./app-shared-bbfeca5e5737.js";
import {
  BKt as de,
  Bcr as fe,
  Brt as pe,
  EX as me,
  Ek as he,
  Icr as ge,
  Idn as _e,
  Ldn as ve,
  Rrt as ye,
  S_r as be,
  T_r as xe,
  Tk as X,
  _F as Se,
  __r as Ce,
  c1n as we,
  d1n as Te,
  eF as Ee,
  f1n as De,
  hF as Oe,
  h_r as ke,
  hzt as Ae,
  jKt as je,
  l1n as Me,
  mF as Ne,
  m_r as Pe,
  mzt as Fe,
  oFr as Ie,
  pF as Le,
  sFr as Re,
  tF as ze,
  u1n as Be,
  xit as Ve,
  yit as He,
} from "./app-initial-5851df3f6cb1.js";
import { by as Ue, xy as We } from "./app-primary-fe8a450b3b04.js";
import { n as Ge, t as Ke } from "./building-fd352f16521e.js";
import { n as qe, t as Je } from "./settings-loading-row-bf72bf2df25d.js";
import {
  a as Ye,
  d as Xe,
  m as Ze,
  n as Qe,
  p as $e,
  r as et,
  s as tt,
  u as nt,
} from "./hooks-settings-model-f200bbc1bcb6.js";
import { i as rt, r as it } from "./hooks-settings-route-8191acda142e.js";
import { a as at, i as ot, n as st, t as ct } from "./hooks-settings-copy-2f5f2d429af4.js";
import { a as lt, i as ut, n as dt, t as ft } from "./hooks-settings-source-label-5c6b62b43749.js";
function pt(e, t) {
  let n =
      e.issueCount > 0
        ? t.formatMessage(
            {
              id: `settings.hooks.summary.issueCounts`,
              defaultMessage: `{issueCount, plural, one {# issue} other {# issues}}`,
              description: `Hook load issue count for a project row`,
            },
            { issueCount: e.issueCount },
          )
        : ``,
    r =
      e.needsReview > 0
        ? t.formatMessage(
            {
              id: `settings.hooks.summary.reviewCounts`,
              defaultMessage: `{needsReview, plural, one {# needs review} other {# need review}}`,
              description: `Review-needed hook count for a project row`,
            },
            { needsReview: e.needsReview },
          )
        : ``;
  return (0, mt.jsx)(o, {
    id: `settings.hooks.summary.attentionCounts`,
    defaultMessage: `{issueCount}{separator}{needsReview}`,
    description: `Combined hook load issue and review-needed counts for a project row`,
    values: { issueCount: n, separator: n !== `` && r !== `` ? ` · ` : ``, needsReview: r },
  });
}
var mt;
function ht() {
  return (ht = e(() => {
    (R(), (mt = ce()));
  }))();
}
function gt(e) {
  let n = (0, Tt.c)(39),
    {
      entry: r,
      hostId: i,
      isOpen: a,
      isLoading: s,
      isRemoteHost: c,
      loadError: l,
      title: u,
      titleHref: d,
      titleIcon: f,
      subtitle: p,
      onClose: m,
      onToggleHookEnabled: h,
      onTrustHook: g,
    } = e,
    { mutate: _, isPending: v, error: y } = ue(De, i),
    b;
  n[0] === r?.hooks ? (b = n[1]) : ((b = r?.hooks.filter(vt)), (n[0] = r?.hooks), (n[1] = b));
  let x = b,
    C = a && !s && l == null && x != null && x.length > 0,
    w;
  n[2] !== u || n[3] !== d || n[4] !== f
    ? ((w = (0, Z.jsx)(T, {
        asChild: !0,
        children: (0, Z.jsx)(`h2`, {
          className: `flex min-w-0`,
          children:
            d == null
              ? (0, Z.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-2`,
                  children: [
                    f == null
                      ? null
                      : (0, Z.jsx)(`span`, {
                          className: `flex shrink-0 items-center justify-center`,
                          children: f,
                        }),
                    (0, Z.jsx)(`span`, { className: `min-w-0`, children: u }),
                  ],
                })
              : (0, Z.jsxs)(L, {
                  className: `group -m-1 inline-flex min-w-0 cursor-interaction items-center gap-2 rounded-md p-1 hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-[0.98]`,
                  to: d,
                  children: [
                    f == null
                      ? null
                      : (0, Z.jsx)(`span`, {
                          className: `flex shrink-0 items-center justify-center`,
                          children: f,
                        }),
                    (0, Z.jsx)(`span`, { className: `min-w-0`, children: u }),
                    (0, Z.jsx)(S, {
                      className: `icon-2xs shrink-0 -rotate-90 opacity-0 transition-transform duration-basic group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100`,
                      "aria-hidden": !0,
                    }),
                  ],
                }),
        }),
      })),
      (n[2] = u),
      (n[3] = d),
      (n[4] = f),
      (n[5] = w))
    : (w = n[5]);
  let E = w,
    D;
  n[6] === m
    ? (D = n[7])
    : ((D = (e) => {
        e || m();
      }),
      (n[6] = m),
      (n[7] = D));
  let O;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { "aria-describedby": void 0 }), (n[8] = O))
    : (O = n[8]);
  let A;
  n[9] !== E || n[10] !== p
    ? ((A = (0, Z.jsx)(V, {
        children: (0, Z.jsx)(k, { title: E, subtitle: p, subtitleClassName: `break-all` }),
      })),
      (n[9] = E),
      (n[10] = p),
      (n[11] = A))
    : (A = n[11]);
  let j;
  n[12] !== C || n[13] !== x || n[14] !== v || n[15] !== _
    ? ((j = C
        ? (0, Z.jsx)(V, {
            children: (0, Z.jsx)(xt, {
              action: (0, Z.jsx)(t, {
                color: `outline`,
                disabled: v,
                loading: v,
                onClick: () => {
                  _(x.map(_t));
                },
                children: (0, Z.jsx)(o, {
                  id: `settings.hooks.trustAll`,
                  defaultMessage: `Trust all`,
                  description: `Trust all new or modified hook definitions in the currently open source`,
                }),
              }),
            }),
          })
        : null),
      (n[12] = C),
      (n[13] = x),
      (n[14] = v),
      (n[15] = _),
      (n[16] = j))
    : (j = n[16]);
  let M;
  n[17] === y
    ? (M = n[18])
    : ((M =
        y == null
          ? null
          : (0, Z.jsx)(V, {
              children: (0, Z.jsx)(`p`, {
                role: `alert`,
                className: `text-sm text-danger`,
                children:
                  y instanceof we
                    ? (0, Z.jsx)(o, {
                        id: `settings.hooks.trust.overridden`,
                        defaultMessage: `Another config layer overrides these hook settings and must be changed before approval can take effect`,
                        description: `Explains why saved hook trust did not take effect`,
                      })
                    : (0, Z.jsx)(o, {
                        id: `settings.hooks.trust.error`,
                        defaultMessage: `Could not trust hooks`,
                        description: `Error shown when saving hook trust fails`,
                      }),
              }),
            })),
      (n[17] = y),
      (n[18] = M));
  let N;
  n[19] !== r ||
  n[20] !== i ||
  n[21] !== s ||
  n[22] !== a ||
  n[23] !== c ||
  n[24] !== l ||
  n[25] !== h ||
  n[26] !== g
    ? ((N = a
        ? s
          ? (0, Z.jsx)(W, {
              children: (0, Z.jsx)(Je, {
                children: (0, Z.jsx)(o, {
                  id: `settings.hooks.loading.label`,
                  defaultMessage: `Loading hooks…`,
                  description: `Label while hooks are loading`,
                }),
              }),
            })
          : l == null
            ? (0, Z.jsx)(yt, { entry: r, hostId: i, isRemoteHost: c, onToggleHookEnabled: h, onTrustHook: g })
            : (0, Z.jsx)(W, {
                children: (0, Z.jsx)(re, {
                  label: (0, Z.jsx)(o, {
                    id: `settings.hooks.loadError.label`,
                    defaultMessage: `Could not load hooks`,
                    description: `Label when hooks settings fails to load hooks`,
                  }),
                  description: (0, Z.jsx)(`span`, {
                    className: `[text-wrap:wrap] break-words`,
                    children: l.message,
                  }),
                  control: null,
                }),
              })
        : null),
      (n[19] = r),
      (n[20] = i),
      (n[21] = s),
      (n[22] = a),
      (n[23] = c),
      (n[24] = l),
      (n[25] = h),
      (n[26] = g),
      (n[27] = N))
    : (N = n[27]);
  let P;
  n[28] === N
    ? (P = n[29])
    : ((P = (0, Z.jsx)(V, {
        className: `vertical-scroll-fade-mask min-h-0 flex-1 gap-3 overflow-y-auto pe-1 [&>*]:shrink-0`,
        children: N,
      })),
      (n[28] = N),
      (n[29] = P));
  let F;
  n[30] !== A || n[31] !== j || n[32] !== M || n[33] !== P
    ? ((F = (0, Z.jsxs)(U, {
        className: `max-h-[min(680px,calc(100dvh/var(--codex-window-zoom)-4rem))] min-h-0 overflow-hidden`,
        children: [A, j, M, P],
      })),
      (n[30] = A),
      (n[31] = j),
      (n[32] = M),
      (n[33] = P),
      (n[34] = F))
    : (F = n[34]);
  let I;
  return (
    n[35] !== a || n[36] !== F || n[37] !== D
      ? ((I = (0, Z.jsx)(H, { open: a, onOpenChange: D, contentProps: O, size: `xwide`, children: F })),
        (n[35] = a),
        (n[36] = F),
        (n[37] = D),
        (n[38] = I))
      : (I = n[38]),
    I
  );
}
function _t(e) {
  return { key: e.key, trustedHash: e.currentHash };
}
function vt(e) {
  return !e.isManaged && Ze(e);
}
function yt(e) {
  let t = (0, Tt.c)(20),
    { entry: n, hostId: r, isRemoteHost: i, onToggleHookEnabled: a, onTrustHook: o } = e,
    s = v(),
    [c, u] = (0, Et.useState)(!1);
  if (n == null) return null;
  let d = n.hooks,
    f,
    p;
  if (
    t[0] !== n.cwd ||
    t[1] !== n.errors ||
    t[2] !== n.warnings ||
    t[3] !== d ||
    t[4] !== r ||
    t[5] !== s ||
    t[6] !== i ||
    t[7] !== c ||
    t[8] !== a ||
    t[9] !== o
  ) {
    let e = et(d).filter(bt),
      m = n.warnings,
      h = n.errors,
      g = m.length + h.length;
    (t[12] !== h || t[13] !== g || t[14] !== c || t[15] !== m
      ? ((f =
          g > 0
            ? (0, Z.jsx)(St, {
                errors: h,
                expanded: c,
                issueCount: g,
                warnings: m,
                onToggleExpanded: () => {
                  u(!c);
                },
              })
            : null),
        (t[12] = h),
        (t[13] = g),
        (t[14] = c),
        (t[15] = m),
        (t[16] = f))
      : (f = t[16]),
      (p =
        e.length > 0
          ? (0, Z.jsx)(W, {
              children: e.map((e) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    children: [
                      (0, Z.jsx)(re, {
                        icon: (0, Z.jsx)(l, { "aria-hidden": !1, asset: C }),
                        label: (0, Z.jsx)(`span`, { className: `font-medium`, children: st(e.eventName, s) }),
                        description: ct(e.eventName, s),
                        control:
                          e.needsReview > 0
                            ? (0, Z.jsx)(Ue, { className: `icon-2xs shrink-0 text-warning` })
                            : null,
                      }),
                      (0, Z.jsx)(ut, {
                        eventName: e.eventName,
                        hostId: r,
                        isRemoteHost: i,
                        hooks: d,
                        projectRoot: n.cwd,
                        onTrustHook: o,
                        onToggleHookEnabled: a,
                      }),
                    ],
                  },
                  e.eventName,
                ),
              ),
            })
          : null),
      (t[0] = n.cwd),
      (t[1] = n.errors),
      (t[2] = n.warnings),
      (t[3] = d),
      (t[4] = r),
      (t[5] = s),
      (t[6] = i),
      (t[7] = c),
      (t[8] = a),
      (t[9] = o),
      (t[10] = f),
      (t[11] = p));
  } else ((f = t[10]), (p = t[11]));
  let m;
  return (
    t[17] !== f || t[18] !== p
      ? ((m = (0, Z.jsxs)(Z.Fragment, { children: [f, p] })), (t[17] = f), (t[18] = p), (t[19] = m))
      : (m = t[19]),
    m
  );
}
function bt(e) {
  return e.installed > 0;
}
function xt(e) {
  let t = (0, Tt.c)(3),
    { action: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(o, {
        id: `settings.hooks.review.summary`,
        defaultMessage: `Hooks run outside of the sandbox and may be unsafe`,
        description: `Banner shown when hooks require trust review`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Z.jsx)(b, { Icon: Ue, type: `warning`, stackOnNarrow: !0, customCtas: n, content: r })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function St(e) {
  let t = (0, Tt.c)(18),
    { errors: n, expanded: r, issueCount: i, warnings: a, onToggleExpanded: s } = e,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(Ue, { className: `icon-xs shrink-0 text-warning` })), (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] === i
    ? (l = t[2])
    : ((l = (0, Z.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          c,
          (0, Z.jsx)(`span`, {
            className: `truncate text-sm text-default`,
            children: (0, Z.jsx)(o, {
              id: `settings.hooks.issues.summary`,
              defaultMessage: `{count, plural, one {# issue loading hooks for this source} other {# issues loading hooks for this source}}`,
              description: `Summary text for hook warnings and errors`,
              values: { count: i },
            }),
          }),
        ],
      })),
      (t[1] = i),
      (t[2] = l));
  let u = r && `rotate-180`,
    d;
  t[3] === u ? (d = t[4]) : ((d = M(`icon-2xs shrink-0 transition-transform`, u)), (t[3] = u), (t[4] = d));
  let f;
  t[5] === d ? (f = t[6]) : ((f = (0, Z.jsx)(S, { className: d })), (t[5] = d), (t[6] = f));
  let p;
  t[7] !== s || t[8] !== l || t[9] !== f
    ? ((p = (0, Z.jsxs)(`button`, {
        type: `button`,
        className: `flex w-full cursor-interaction items-center justify-between gap-3 px-3 py-2 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
        onClick: s,
        children: [l, f],
      })),
      (t[7] = s),
      (t[8] = l),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== n || t[12] !== r || t[13] !== a
    ? ((m = r
        ? (0, Z.jsxs)(`div`, {
            className: `space-y-2 border-t border-text-warning/20 px-3 py-2 text-sm text-secondary`,
            children: [a.map(wt), n.map(Ct)],
          })
        : null),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== p || t[16] !== m
      ? ((h = (0, Z.jsxs)(`div`, {
          className: `overflow-hidden rounded-lg border border-text-warning/30`,
          children: [p, m],
        })),
        (t[15] = p),
        (t[16] = m),
        (t[17] = h))
      : (h = t[17]),
    h
  );
}
function Ct(e) {
  return (0, Z.jsx)(
    `div`,
    {
      children: (0, Z.jsx)(o, {
        id: `settings.hooks.issues.error`,
        defaultMessage: `{path}: {message}`,
        description: `Expanded hook error detail`,
        values: { path: e.path, message: e.message },
      }),
    },
    `${e.path}:${e.message}`,
  );
}
function wt(e) {
  return (0, Z.jsx)(`div`, { children: e }, e);
}
var Tt, Et, Z;
function Dt() {
  return (Dt = e(() => {
    ((Tt = J()),
      q(),
      w(),
      p(),
      (Et = le()),
      R(),
      D(),
      a(),
      G(),
      ae(),
      j(),
      d(),
      x(),
      We(),
      qe(),
      I(),
      c(),
      at(),
      lt(),
      $e(),
      Be(),
      (Z = ce()));
  }))();
}
function Ot(e) {
  let n = (0, Q.c)(72),
    {
      entries: i,
      hostId: a,
      isRemoteHost: s,
      isLoadingProjectRoots: c,
      loadError: u,
      isLoading: d,
      isRefreshing: f,
      projectRootLabels: p,
      projectRoots: m,
      selectedSourceSection: h,
      onSelectSourceSection: g,
      onRefreshHooks: _,
      onToggleHookEnabled: y,
      onTrustHook: b,
    } = e,
    x = v(),
    S;
  n[0] !== a || n[1] !== m ? ((S = { hostId: a, roots: m }), (n[0] = a), (n[1] = m), (n[2] = S)) : (S = n[2]);
  let { data: C } = fe(S),
    w;
  n[3] === x
    ? (w = n[4])
    : ((w = x.formatMessage({
        id: `settings.hooks.refresh`,
        defaultMessage: `Reload hooks`,
        description: `Button label to reload hooks for the visible projects`,
      })),
      (n[3] = x),
      (n[4] = w));
  let T = w,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P;
  if (n[5] !== i || n[6] !== C || n[7] !== d || n[8] !== p || n[9] !== h) {
    ((N = i == null || d ? [] : Ye(i)),
      (D = new Map(C?.map(At))),
      (E = []),
      (O = []),
      (k = null),
      (A = null));
    for (let e of N)
      bb0: switch (e.id) {
        case `plugin`:
          k = e;
          break bb0;
        case `project`:
          A = e;
          break bb0;
        case `user`:
        case `admin`:
          E.push(e);
          break bb0;
        case `sessionFlags`:
        case `unknown`:
          O.push(e);
      }
    ((j = Xe(N, h)),
      (M = h?.source === `plugin` && h.pluginId != null ? D.get(h.pluginId) : void 0),
      (P = Wt({ entry: j, plugin: M, projectRootLabels: p, selection: h })),
      (n[5] = i),
      (n[6] = C),
      (n[7] = d),
      (n[8] = p),
      (n[9] = h),
      (n[10] = E),
      (n[11] = D),
      (n[12] = O),
      (n[13] = k),
      (n[14] = A),
      (n[15] = j),
      (n[16] = M),
      (n[17] = N),
      (n[18] = P));
  } else
    ((E = n[10]),
      (D = n[11]),
      (O = n[12]),
      (k = n[13]),
      (A = n[14]),
      (j = n[15]),
      (M = n[16]),
      (N = n[17]),
      (P = n[18]));
  let F = P,
    I;
  n[19] !== a || n[20] !== h
    ? ((I =
        h?.source === `plugin` && h.pluginId != null
          ? He({ hostId: a, pluginId: h.pluginId, breadcrumb: `settings` })
          : void 0),
      (n[19] = a),
      (n[20] = h),
      (n[21] = I))
    : (I = n[21]);
  let L = I,
    R = null;
  if (h?.source === `plugin`) {
    let e;
    (n[22] === M ? (e = n[23]) : ((e = (0, $.jsx)(Ft, { plugin: M })), (n[22] = M), (n[23] = e)), (R = e));
  } else if (h != null) {
    let e;
    (n[24] === h.source ? (e = n[25]) : ((e = Rt(h.source)), (n[24] = h.source), (n[25] = e)), (R = e));
  }
  let z = null;
  if (h?.source === `project`) z = h.projectRoot;
  else if (h != null) {
    let e;
    (n[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(o, {
          id: `settings.hooks.source.sharedProjects`,
          defaultMessage: `All projects`,
          description: `Label for hook sources that apply across every project`,
        })),
        (n[26] = e))
      : (e = n[26]),
      (z = e));
  }
  let B = `none`;
  if (h?.source === `project`) B = h.projectRoot;
  else if (h?.source === `plugin`) {
    B = `plugin`;
    let e = h.pluginId;
    e !== void 0 && (B = `plugin:${e ?? `unknown`}`);
  } else h != null && (B = h.source);
  let V;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, $.jsx)(Le, {
        children: (0, $.jsx)(o, {
          id: `settings.hooks.loading.label`,
          defaultMessage: `Loading hooks…`,
          description: `Label while hooks are loading`,
        }),
      })),
      (n[27] = V))
    : (V = n[27]);
  let ee = V,
    H;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(Ee, { slug: Kt })), (n[28] = H))
    : (H = n[28]);
  let te;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, $.jsx)(o, {
        id: `settings.hooks.subtitle`,
        defaultMessage: `Manage lifecycle hooks from config and enabled plugins. <a>Learn more</a>`,
        description: `Subtitle for hooks settings`,
        values: { a: kt },
      })),
      (n[29] = te))
    : (te = n[29]);
  let U = m == null || m.length === 0 || d || f,
    G;
  n[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(l, { "aria-hidden": !1, asset: r })), (n[30] = G))
    : (G = n[30]);
  let K;
  n[31] !== _ || n[32] !== T || n[33] !== U
    ? ((K = (0, $.jsx)(t, {
        "aria-label": T,
        color: `ghost`,
        disabled: U,
        onClick: _,
        size: `icon`,
        children: G,
      })),
      (n[31] = _),
      (n[32] = T),
      (n[33] = U),
      (n[34] = K))
    : (K = n[34]);
  let ie;
  n[35] !== T || n[36] !== K
    ? ((ie = (0, $.jsx)(ne, { tooltipContent: T, children: K })), (n[35] = T), (n[36] = K), (n[37] = ie))
    : (ie = n[37]);
  let q;
  n[38] !== E ||
  n[39] !== D ||
  n[40] !== d ||
  n[41] !== c ||
  n[42] !== u ||
  n[43] !== g ||
  n[44] !== O ||
  n[45] !== k ||
  n[46] !== p ||
  n[47] !== m ||
  n[48] !== A ||
  n[49] !== N
    ? ((q =
        m == null && c
          ? ee
          : m == null || m.length === 0
            ? (0, $.jsx)(jt, {})
            : u == null
              ? d
                ? ee
                : N.length === 0
                  ? (0, $.jsx)(jt, {})
                  : (0, $.jsxs)($.Fragment, {
                      children: [
                        E.length > 0
                          ? (0, $.jsx)(Mt, {
                              title: (0, $.jsx)(o, {
                                id: `settings.hooks.source.globalConfig`,
                                defaultMessage: `From Config`,
                                description: `Group heading for hooks from global user and admin config`,
                              }),
                              sections: E,
                              onSelectSourceSection: g,
                            })
                          : null,
                        k == null
                          ? null
                          : (0, $.jsx)(Nt, { installedPluginsById: D, section: k, onSelectSourceSection: g }),
                        A == null
                          ? null
                          : (0, $.jsx)(It, { section: A, projectRootLabels: p, onSelectSourceSection: g }),
                        O.length > 0
                          ? (0, $.jsx)(Mt, {
                              title: (0, $.jsx)(o, {
                                id: `settings.hooks.source.otherSources`,
                                defaultMessage: `Other sources`,
                                description: `Group heading for hooks from uncommon sources`,
                              }),
                              sections: O,
                              onSelectSourceSection: g,
                            })
                          : null,
                      ],
                    })
              : (0, $.jsx)(W, {
                  children: (0, $.jsx)(re, {
                    label: (0, $.jsx)(o, {
                      id: `settings.hooks.loadError.label`,
                      defaultMessage: `Could not load hooks`,
                      description: `Label when hooks settings fails to load hooks`,
                    }),
                    description: (0, $.jsx)(`span`, {
                      className: `[text-wrap:wrap] break-words`,
                      children: u.message,
                    }),
                    control: null,
                  }),
                })),
      (n[38] = E),
      (n[39] = D),
      (n[40] = d),
      (n[41] = c),
      (n[42] = u),
      (n[43] = g),
      (n[44] = O),
      (n[45] = k),
      (n[46] = p),
      (n[47] = m),
      (n[48] = A),
      (n[49] = N),
      (n[50] = q))
    : (q = n[50]);
  let ae = h != null && (d || j != null),
    J;
  n[51] === g
    ? (J = n[52])
    : ((J = () => {
        g(null);
      }),
      (n[51] = g),
      (n[52] = J));
  let Y;
  n[53] !== a ||
  n[54] !== d ||
  n[55] !== s ||
  n[56] !== u ||
  n[57] !== y ||
  n[58] !== b ||
  n[59] !== j ||
  n[60] !== B ||
  n[61] !== z ||
  n[62] !== F ||
  n[63] !== L ||
  n[64] !== R ||
  n[65] !== ae ||
  n[66] !== J
    ? ((Y = (0, $.jsx)(
        gt,
        {
          entry: j,
          hostId: a,
          isOpen: ae,
          isLoading: d,
          isRemoteHost: s,
          loadError: u,
          title: F,
          titleHref: L,
          titleIcon: R,
          subtitle: z,
          onClose: J,
          onToggleHookEnabled: y,
          onTrustHook: b,
        },
        B,
      )),
      (n[53] = a),
      (n[54] = d),
      (n[55] = s),
      (n[56] = u),
      (n[57] = y),
      (n[58] = b),
      (n[59] = j),
      (n[60] = B),
      (n[61] = z),
      (n[62] = F),
      (n[63] = L),
      (n[64] = R),
      (n[65] = ae),
      (n[66] = J),
      (n[67] = Y))
    : (Y = n[67]);
  let oe;
  return (
    n[68] !== ie || n[69] !== q || n[70] !== Y
      ? ((oe = (0, $.jsxs)(Oe, {
          title: H,
          subtitleClassName: `whitespace-normal`,
          subtitle: te,
          action: ie,
          children: [q, Y],
        })),
        (n[68] = ie),
        (n[69] = q),
        (n[70] = Y),
        (n[71] = oe))
      : (oe = n[71]),
    oe
  );
}
function kt(e) {
  return (0, $.jsx)(
    `a`,
    { className: `inline-flex text-info`, href: je, target: `_blank`, rel: `noreferrer`, children: e },
    `learn-more`,
  );
}
function At(e) {
  return [e.plugin.id, e];
}
function jt() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(W, {
          children: (0, $.jsx)(re, {
            label: (0, $.jsx)(o, {
              id: `settings.hooks.emptyHooks.label`,
              defaultMessage: `No hooks found`,
              description: `Label when known projects do not have hooks or hook load issues`,
            }),
            description: (0, $.jsx)(o, {
              id: `settings.hooks.emptyHooks.description`,
              defaultMessage: `Configured hooks will appear here`,
              description: `Description when no hooks are configured`,
            }),
            control: null,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Mt(e) {
  let t = (0, Q.c)(12),
    { sections: n, title: r, onSelectSourceSection: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = (0, $.jsx)(X.Header, { title: r })), (t[0] = r), (t[1] = a));
  let o;
  if (t[2] !== i || t[3] !== n) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) => (0, $.jsx)(Lt, { section: e, onSelectSourceSection: i }, e.id)), (t[5] = i), (t[6] = e)),
      (o = n.map(e)),
      (t[2] = i),
      (t[3] = n),
      (t[4] = o));
  } else o = t[4];
  let s;
  t[7] === o
    ? (s = t[8])
    : ((s = (0, $.jsx)(X.Content, { children: (0, $.jsx)(W, { children: o }) })), (t[7] = o), (t[8] = s));
  let c;
  return (
    t[9] !== a || t[10] !== s
      ? ((c = (0, $.jsxs)(X, { children: [a, s] })), (t[9] = a), (t[10] = s), (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Nt(e) {
  let t = (0, Q.c)(10),
    { installedPluginsById: n, section: r, onSelectSourceSection: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(X.Header, {
        title: (0, $.jsx)(o, {
          id: `settings.hooks.source.plugins`,
          defaultMessage: `From Plugins`,
          description: `Group heading for hooks installed by plugins`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let s;
  if (t[1] !== n || t[2] !== i || t[3] !== r.pluginEntries) {
    let e;
    (t[5] !== n || t[6] !== i
      ? ((e = (e) =>
          (0, $.jsx)(
            Pt,
            {
              plugin: e.pluginId == null ? void 0 : n.get(e.pluginId),
              pluginEntry: e,
              onSelectSourceSection: i,
            },
            e.pluginId ?? `unknown-plugin`,
          )),
        (t[5] = n),
        (t[6] = i),
        (t[7] = e))
      : (e = t[7]),
      (s = r.pluginEntries.map(e)),
      (t[1] = n),
      (t[2] = i),
      (t[3] = r.pluginEntries),
      (t[4] = s));
  } else s = t[4];
  let c;
  return (
    t[8] === s
      ? (c = t[9])
      : ((c = (0, $.jsxs)(X, {
          children: [a, (0, $.jsx)(X.Content, { children: (0, $.jsx)(W, { children: s }) })],
        })),
        (t[8] = s),
        (t[9] = c)),
    c
  );
}
function Pt(e) {
  let t = (0, Q.c)(23),
    { plugin: n, pluginEntry: r, onSelectSourceSection: i } = e,
    a = v(),
    o;
  t[0] !== a || t[1] !== n || t[2] !== r.pluginId
    ? ((o =
        (n == null ? void 0 : _e(n)) ??
        ot(r.pluginId) ??
        a.formatMessage({
          id: `settings.hooks.source.unknownPlugin`,
          defaultMessage: `Unknown plugin`,
          description: `Fallback label for plugin hooks without a plugin id`,
        })),
      (t[0] = a),
      (t[1] = n),
      (t[2] = r.pluginId),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c;
  t[4] === r.entry ? (c = t[5]) : ((c = Qe(r.entry)), (t[4] = r.entry), (t[5] = c));
  let l = c,
    u;
  t[6] === n ? (u = t[7]) : ((u = (0, $.jsx)(Ft, { plugin: n })), (t[6] = n), (t[7] = u));
  let d;
  t[8] === s
    ? (d = t[9])
    : ((d = (0, $.jsx)(`span`, { className: `block truncate`, children: s })), (t[8] = s), (t[9] = d));
  let f;
  t[10] === r.entry.hooks.length
    ? (f = t[11])
    : ((f = (0, $.jsx)(Bt, { count: r.entry.hooks.length })), (t[10] = r.entry.hooks.length), (t[11] = f));
  let p;
  t[12] === l ? (p = t[13]) : ((p = (0, $.jsx)(Vt, { summary: l })), (t[12] = l), (t[13] = p));
  let h;
  t[14] !== i || t[15] !== r.pluginId
    ? ((h = () => {
        i({ source: `plugin`, pluginId: r.pluginId });
      }),
      (t[14] = i),
      (t[15] = r.pluginId),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== u || t[18] !== d || t[19] !== f || t[20] !== p || t[21] !== h
      ? ((g = (0, $.jsx)(m, {
          edgeRounding: `surface`,
          icon: u,
          label: d,
          description: f,
          trailing: p,
          onClick: h,
        })),
        (t[17] = u),
        (t[18] = d),
        (t[19] = f),
        (t[20] = p),
        (t[21] = h),
        (t[22] = g))
      : (g = t[22]),
    g
  );
}
function Ft(e) {
  let t = (0, Q.c)(5),
    { plugin: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(F, { className: `icon-sm text-secondary` })), (t[0] = r))
    : (r = t[0]);
  let i = n?.plugin.name,
    a = n?.logoDarkPath,
    o = n?.logoPath,
    s;
  return (
    t[1] !== i || t[2] !== a || t[3] !== o
      ? ((s = (0, $.jsx)(Fe, {
          alt: ``,
          className: `icon-sm`,
          fallback: r,
          knownAppId: i,
          logoDarkUrl: a,
          logoUrl: o,
        })),
        (t[1] = i),
        (t[2] = a),
        (t[3] = o),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function It(e) {
  let t = (0, Q.c)(10),
    { section: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(X.Header, {
        title: (0, $.jsx)(o, {
          id: `settings.hooks.source.projects`,
          defaultMessage: `From Projects`,
          description: `Group heading for hooks from project config files`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let s;
  if (t[1] !== i || t[2] !== r || t[3] !== n.projectEntries) {
    let e;
    (t[5] !== i || t[6] !== r
      ? ((e = (e) => (0, $.jsx)(zt, { entry: e, projectRootLabels: r, onSelectSourceSection: i }, e.cwd)),
        (t[5] = i),
        (t[6] = r),
        (t[7] = e))
      : (e = t[7]),
      (s = n.projectEntries.map(e)),
      (t[1] = i),
      (t[2] = r),
      (t[3] = n.projectEntries),
      (t[4] = s));
  } else s = t[4];
  let c;
  return (
    t[8] === s
      ? (c = t[9])
      : ((c = (0, $.jsxs)(X, {
          children: [a, (0, $.jsx)(X.Content, { children: (0, $.jsx)(W, { children: s }) })],
        })),
        (t[8] = s),
        (t[9] = c)),
    c
  );
}
function Lt(e) {
  let t = (0, Q.c)(19),
    { section: n, onSelectSourceSection: r } = e,
    i = n.id,
    a = n.entry,
    o;
  t[0] === a ? (o = t[1]) : ((o = Qe(a)), (t[0] = a), (t[1] = o));
  let s = o,
    c;
  t[2] === i ? (c = t[3]) : ((c = Rt(i)), (t[2] = i), (t[3] = c));
  let l;
  t[4] === i ? (l = t[5]) : ((l = (0, $.jsx)(ft, { source: i })), (t[4] = i), (t[5] = l));
  let u;
  t[6] === a.hooks.length
    ? (u = t[7])
    : ((u = (0, $.jsx)(Bt, { count: a.hooks.length })), (t[6] = a.hooks.length), (t[7] = u));
  let d;
  t[8] === s ? (d = t[9]) : ((d = (0, $.jsx)(Vt, { summary: s })), (t[8] = s), (t[9] = d));
  let f;
  t[10] !== r || t[11] !== i
    ? ((f = () => {
        r({ source: i });
      }),
      (t[10] = r),
      (t[11] = i),
      (t[12] = f))
    : (f = t[12]);
  let p;
  return (
    t[13] !== c || t[14] !== l || t[15] !== u || t[16] !== d || t[17] !== f
      ? ((p = (0, $.jsx)(m, {
          edgeRounding: `surface`,
          icon: c,
          label: l,
          description: u,
          trailing: d,
          onClick: f,
        })),
        (t[13] = c),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p))
      : (p = t[18]),
    p
  );
}
function Rt(e) {
  let t = `icon-sm text-secondary`;
  switch (e) {
    case `plugin`:
      return (0, $.jsx)(F, { className: t });
    case `user`:
      return (0, $.jsx)(N, { className: t });
    case `admin`:
      return (0, $.jsx)(Ke, { className: t });
    case `project`:
      return (0, $.jsx)(Y, { className: t });
    case `sessionFlags`:
    case `unknown`:
      return (0, $.jsx)(h, { className: `text-secondary` });
  }
}
function zt(e) {
  let t = (0, Q.c)(20),
    { entry: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = Qe(n)), (t[0] = n), (t[1] = a));
  let o = a,
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(Y, { className: `icon-sm text-secondary` })), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== n.cwd || t[4] !== r ? ((c = Ut(n.cwd, r)), (t[3] = n.cwd), (t[4] = r), (t[5] = c)) : (c = t[5]);
  let l;
  t[6] === c
    ? (l = t[7])
    : ((l = (0, $.jsx)(`span`, { className: `block truncate`, children: c })), (t[6] = c), (t[7] = l));
  let u;
  t[8] === n.hooks.length
    ? (u = t[9])
    : ((u = (0, $.jsx)(Bt, { count: n.hooks.length })), (t[8] = n.hooks.length), (t[9] = u));
  let d;
  t[10] === o ? (d = t[11]) : ((d = (0, $.jsx)(Vt, { summary: o })), (t[10] = o), (t[11] = d));
  let f;
  t[12] !== n.cwd || t[13] !== i
    ? ((f = () => {
        i({ source: `project`, projectRoot: n.cwd });
      }),
      (t[12] = n.cwd),
      (t[13] = i),
      (t[14] = f))
    : (f = t[14]);
  let p;
  return (
    t[15] !== l || t[16] !== u || t[17] !== d || t[18] !== f
      ? ((p = (0, $.jsx)(m, {
          edgeRounding: `surface`,
          icon: s,
          label: l,
          description: u,
          trailing: d,
          onClick: f,
        })),
        (t[15] = l),
        (t[16] = u),
        (t[17] = d),
        (t[18] = f),
        (t[19] = p))
      : (p = t[19]),
    p
  );
}
function Bt(e) {
  let t = (0, Q.c)(2),
    { count: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(o, {
          id: `settings.hooks.source.hookCount`,
          defaultMessage: `{count, plural, one {# hook} other {# hooks}}`,
          description: `Short hook count shown under a hook source row`,
          values: { count: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Vt(e) {
  let t = (0, Q.c)(5),
    { summary: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = (0, $.jsx)(Ht, { summary: n })), (t[0] = n), (t[1] = r));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(i, {
        className: `shrink-0 -rotate-90`,
        "aria-hidden": !1,
        legacyIcon: S,
        asset16: B,
        legacyClassName: `icon-2xs`,
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === r
      ? (o = t[4])
      : ((o = (0, $.jsxs)(`div`, { className: `flex items-center gap-3`, children: [r, a] })),
        (t[3] = r),
        (t[4] = o)),
    o
  );
}
function Ht(e) {
  let t = (0, Q.c)(6),
    { summary: n } = e,
    r = v();
  if (n == null || (n.issueCount === 0 && n.needsReview === 0)) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(Ue, { className: `icon-2xs shrink-0 text-warning` })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== r || t[2] !== n ? ((a = pt(n, r)), (t[1] = r), (t[2] = n), (t[3] = a)) : (a = t[3]);
  let o;
  return (
    t[4] === a
      ? (o = t[5])
      : ((o = (0, $.jsxs)(`div`, {
          className: `flex shrink-0 items-center gap-3 text-sm whitespace-nowrap text-default`,
          children: [i, (0, $.jsx)(`span`, { className: `max-[30rem]:hidden`, children: a })],
        })),
        (t[4] = a),
        (t[5] = o)),
    o
  );
}
function Ut(e, t) {
  return t?.[e] ?? me(e) ?? e;
}
function Wt({ entry: e, plugin: t, projectRootLabels: n, selection: r }) {
  if (r == null) return null;
  if (r.source === `project`) return Ut(r.projectRoot, n);
  if (r.source === `plugin`) {
    if (t != null) return _e(t);
    let n = r.pluginId === void 0 ? null : ot(r.pluginId);
    if ((n == null && e != null && (n = Gt(e.hooks)), n != null)) return n;
  }
  return (0, $.jsx)(ft, { source: r.source });
}
function Gt(e) {
  let t = null;
  for (let n of e) {
    let e = ot(n.pluginId);
    if (e == null || (t != null && t !== e)) return null;
    t = e;
  }
  return t;
}
var Q, $, Kt;
function qt() {
  return (qt = e(() => {
    ((Q = J()),
      f(),
      ie(),
      ve(),
      R(),
      Ae(),
      de(),
      G(),
      d(),
      g(),
      z(),
      A(),
      O(),
      Ge(),
      x(),
      _(),
      E(),
      We(),
      Ve(),
      ge(),
      Se(),
      he(),
      Ne(),
      I(),
      ze(),
      c(),
      at(),
      ht(),
      $e(),
      Dt(),
      dt(),
      ($ = ce()),
      (Kt = `hooks-settings`));
  }))();
}
function Jt() {
  let e = (0, Yt.c)(47),
    t = s(n),
    r = v(),
    i = se(),
    [a, o] = u(),
    c = te(),
    { selectedHostId: l, setSelectedHostId: d } = pe(),
    f = Re(l),
    p = y(be),
    m = y(ke),
    h = p?.type === `local` ? (m[p.projectId]?.rootPaths ?? []) : [],
    g = y(xe),
    _;
  e[0] === l ? (_ = e[1]) : ((_ = { hostId: l }), (e[0] = l), (e[1] = _));
  let { data: b, isPending: x } = ue(Ce, _),
    S;
  e[2] === a ? (S = e[3]) : ((S = a.get(`hostId`)), (e[2] = a), (e[3] = S));
  let C = S,
    w = C == null || C === l,
    T = w ? a.get(`projectRoot`) : null,
    E = w ? a.get(`pluginId`) : null,
    D = [];
  l === `local` ? (D = h) : g?.hostId === l && (D = [g.remotePath]);
  let O = b == null ? void 0 : tt(b.roots, D, T),
    k = w ? nt({ pluginId: E, source: a.get(`source`), projectRoot: T, projectRoots: O }) : null,
    A;
  e[4] !== O || e[5] !== l ? ((A = { hostId: l, cwds: O }), (e[4] = O), (e[5] = l), (e[6] = A)) : (A = e[6]);
  let j = ue(Me, A),
    M;
  e[7] === d
    ? (M = e[8])
    : ((M = (e) => {
        d(e);
      }),
      (e[7] = d),
      (e[8] = M));
  let N = (0, Xt.useEffectEvent)(M),
    F;
  e[9] !== c || e[10] !== l || e[11] !== C || e[12] !== N
    ? ((F = () => {
        if (C != null && C !== l) {
          N(C);
          return;
        }
        Te(c, l, { refetchType: `active` });
      }),
      (e[9] = c),
      (e[10] = l),
      (e[11] = C),
      (e[12] = N),
      (e[13] = F))
    : (F = e[13]);
  let I;
  (e[14] !== i.key || e[15] !== c || e[16] !== l || e[17] !== C
    ? ((I = [i.key, c, l, C]), (e[14] = i.key), (e[15] = c), (e[16] = l), (e[17] = C), (e[18] = I))
    : (I = e[18]),
    (0, Xt.useEffect)(F, I));
  let L = ue(De, l),
    R;
  e[19] !== j || e[20] !== r || e[21] !== c || e[22] !== t || e[23] !== l
    ? ((R = () => {
        j.refetch().then(async (e) => {
          e.isSuccess &&
            (await Te(c, l, { broadcast: !0, refetchType: `none` }),
            t
              .get(P)
              .success(
                r.formatMessage({
                  id: `settings.hooks.refresh.success`,
                  defaultMessage: `Refreshed hooks`,
                  description: `Success toast shown after manually refreshing hooks`,
                }),
              ));
        });
      }),
      (e[19] = j),
      (e[20] = r),
      (e[21] = c),
      (e[22] = t),
      (e[23] = l),
      (e[24] = R))
    : (R = e[24]);
  let z = R,
    B;
  e[25] !== a || e[26] !== l || e[27] !== o
    ? ((B = (e) => {
        let t = new URLSearchParams(a);
        (rt(t, l, e), o(t, { replace: !0 }));
      }),
      (e[25] = a),
      (e[26] = l),
      (e[27] = o),
      (e[28] = B))
    : (B = e[28]);
  let V = B,
    ee = j.data?.data,
    H = f.kind !== `local`,
    U = j.isFetching && !j.isPending,
    W = b?.labels,
    ne,
    G;
  e[29] === L
    ? ((ne = e[30]), (G = e[31]))
    : ((ne = (e, t) => {
        L.mutate([{ key: e.key, enabled: t }]);
      }),
      (G = (e) => {
        L.mutate([{ key: e.key, trustedHash: e.currentHash }]);
      }),
      (e[29] = L),
      (e[30] = ne),
      (e[31] = G));
  let K;
  return (
    e[32] !== z ||
    e[33] !== V ||
    e[34] !== j.error ||
    e[35] !== j.isPending ||
    e[36] !== x ||
    e[37] !== O ||
    e[38] !== l ||
    e[39] !== k ||
    e[40] !== U ||
    e[41] !== W ||
    e[42] !== ne ||
    e[43] !== G ||
    e[44] !== ee ||
    e[45] !== H
      ? ((K = (0, Zt.jsx)(Ot, {
          entries: ee,
          hostId: l,
          isRemoteHost: H,
          isLoadingProjectRoots: x,
          loadError: j.error,
          isLoading: j.isPending,
          isRefreshing: U,
          projectRootLabels: W,
          projectRoots: O,
          selectedSourceSection: k,
          onSelectSourceSection: V,
          onRefreshHooks: z,
          onToggleHookEnabled: ne,
          onTrustHook: G,
        })),
        (e[32] = z),
        (e[33] = V),
        (e[34] = j.error),
        (e[35] = j.isPending),
        (e[36] = x),
        (e[37] = O),
        (e[38] = l),
        (e[39] = k),
        (e[40] = U),
        (e[41] = W),
        (e[42] = ne),
        (e[43] = G),
        (e[44] = ee),
        (e[45] = H),
        (e[46] = K))
      : (K = e[46]),
    K
  );
}
var Yt, Xt, Zt;
function Qt() {
  return (Qt = e(() => {
    ((Yt = J()),
      K(),
      p(),
      (Xt = le()),
      R(),
      D(),
      ee(),
      oe(),
      Pe(),
      ye(),
      Ie(),
      $e(),
      Be(),
      it(),
      qt(),
      (Zt = ce()));
  }))();
}
Qt();
export { Jt as HooksSettings };
//# sourceMappingURL=hooks-settings-a249b26c1ef5.js.map
