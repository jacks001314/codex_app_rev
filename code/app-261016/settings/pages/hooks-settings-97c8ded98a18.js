import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  D4 as i,
  DB as a,
  EO as o,
  FBt as s,
  HO as c,
  IO as l,
  JO as u,
  Jk as d,
  LNt as f,
  Lst as p,
  MD as m,
  MNt as h,
  ND as g,
  NNt as _,
  NSt as v,
  O4 as y,
  OB as b,
  PBt as x,
  PW as S,
  Qst as C,
  RO as w,
  Rst as T,
  TO as E,
  TY as D,
  VSt as O,
  Vrt as k,
  WO as A,
  XOt as j,
  XSt as M,
  Y3 as ee,
  Yk as N,
  Z3 as P,
  ZSt as F,
  b1 as I,
  bSt as L,
  ew as R,
  iCt as z,
  iw as B,
  l2 as V,
  nA as H,
  nB as te,
  nCt as ne,
  okt as re,
  qO as U,
  qrt as ie,
  rA as W,
  rB as G,
  sw as K,
  tkt as q,
  u2 as ae,
  uw as J,
  vD as Y,
  wB as oe,
  xB as se,
  y1 as ce,
  yD as le,
  zO as ue,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B4n as de,
  Cxr as fe,
  DVt as pe,
  Enn as me,
  H4n as he,
  IVt as ge,
  KBr as _e,
  LF as ve,
  M6t as ye,
  N6t as be,
  QF as xe,
  RF as Se,
  Tfr as Ce,
  Tnn as we,
  U4n as Te,
  V4n as Ee,
  W4n as De,
  XF as Oe,
  ZF as ke,
  bxr as Ae,
  cA as je,
  eI as Me,
  fxr as Ne,
  hxr as Pe,
  iOt as Fe,
  iat as Ie,
  kfr as Le,
  mQ as Re,
  oOt as ze,
  oat as Be,
  pxr as Ve,
  qBr as He,
  sA as X,
} from "./app-initial-ad16eaadf81f.js";
import { Hy as Ue, Uy as We } from "./app-primary-3e00728c2a4c.js";
import { n as Ge, t as Ke } from "./building-51e79d558467.js";
import { n as qe, t as Je } from "./settings-loading-row-1fcc5b514745.js";
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
import { a as at, i as ot, n as st, t as ct } from "./hooks-settings-copy-22021d3ecf83.js";
import { a as lt, i as ut, n as dt, t as ft } from "./hooks-settings-source-label-75d050a55147.js";
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
  return (0, mt.jsx)(q, {
    id: `settings.hooks.summary.attentionCounts`,
    defaultMessage: `{issueCount}{separator}{needsReview}`,
    description: `Combined hook load issue and review-needed counts for a project row`,
    values: { issueCount: n, separator: n !== `` && r !== `` ? ` · ` : ``, needsReview: r },
  });
}
var mt;
function ht() {
  return (ht = e(() => {
    (j(), (mt = f()));
  }))();
}
function gt(e) {
  let n = (0, Tt.c)(39),
    {
      entry: r,
      hostId: i,
      isOpen: a,
      isLoading: o,
      isRemoteHost: s,
      loadError: c,
      title: u,
      titleHref: d,
      titleIcon: f,
      subtitle: p,
      onClose: m,
      onToggleHookEnabled: h,
      onTrustHook: g,
    } = e,
    { mutate: _, isPending: v, error: y } = ne(De, i),
    b;
  n[0] === r?.hooks ? (b = n[1]) : ((b = r?.hooks.filter(vt)), (n[0] = r?.hooks), (n[1] = b));
  let x = b,
    S = a && !o && c == null && x != null && x.length > 0,
    C;
  n[2] !== u || n[3] !== d || n[4] !== f
    ? ((C = (0, Z.jsx)(U, {
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
                    (0, Z.jsx)(E, {
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
      (n[5] = C))
    : (C = n[5]);
  let T = C,
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
  let k;
  n[9] !== T || n[10] !== p
    ? ((k = (0, Z.jsx)(ue, {
        children: (0, Z.jsx)(w, { title: T, subtitle: p, subtitleClassName: `break-all` }),
      })),
      (n[9] = T),
      (n[10] = p),
      (n[11] = k))
    : (k = n[11]);
  let j;
  n[12] !== S || n[13] !== x || n[14] !== v || n[15] !== _
    ? ((j = S
        ? (0, Z.jsx)(ue, {
            children: (0, Z.jsx)(xt, {
              action: (0, Z.jsx)(ee, {
                color: `outline`,
                disabled: v,
                loading: v,
                onClick: () => {
                  _(x.map(_t));
                },
                children: (0, Z.jsx)(q, {
                  id: `settings.hooks.trustAll`,
                  defaultMessage: `Trust all`,
                  description: `Trust all new or modified hook definitions in the currently open source`,
                }),
              }),
            }),
          })
        : null),
      (n[12] = S),
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
          : (0, Z.jsx)(ue, {
              children: (0, Z.jsx)(`p`, {
                role: `alert`,
                className: `text-sm text-danger`,
                children:
                  y instanceof de
                    ? (0, Z.jsx)(q, {
                        id: `settings.hooks.trust.overridden`,
                        defaultMessage: `Another config layer overrides these hook settings and must be changed before approval can take effect`,
                        description: `Explains why saved hook trust did not take effect`,
                      })
                    : (0, Z.jsx)(q, {
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
  n[21] !== o ||
  n[22] !== a ||
  n[23] !== s ||
  n[24] !== c ||
  n[25] !== h ||
  n[26] !== g
    ? ((N = a
        ? o
          ? (0, Z.jsx)(t, {
              children: (0, Z.jsx)(Je, {
                children: (0, Z.jsx)(q, {
                  id: `settings.hooks.loading.label`,
                  defaultMessage: `Loading hooks…`,
                  description: `Label while hooks are loading`,
                }),
              }),
            })
          : c == null
            ? (0, Z.jsx)(yt, { entry: r, hostId: i, isRemoteHost: s, onToggleHookEnabled: h, onTrustHook: g })
            : (0, Z.jsx)(t, {
                children: (0, Z.jsx)(K, {
                  label: (0, Z.jsx)(q, {
                    id: `settings.hooks.loadError.label`,
                    defaultMessage: `Could not load hooks`,
                    description: `Label when hooks settings fails to load hooks`,
                  }),
                  description: (0, Z.jsx)(`span`, {
                    className: `[text-wrap:wrap] break-words`,
                    children: c.message,
                  }),
                  control: null,
                }),
              })
        : null),
      (n[19] = r),
      (n[20] = i),
      (n[21] = o),
      (n[22] = a),
      (n[23] = s),
      (n[24] = c),
      (n[25] = h),
      (n[26] = g),
      (n[27] = N))
    : (N = n[27]);
  let P;
  n[28] === N
    ? (P = n[29])
    : ((P = (0, Z.jsx)(ue, {
        className: `vertical-scroll-fade-mask min-h-0 flex-1 gap-3 overflow-y-auto pe-1 [&>*]:shrink-0`,
        children: N,
      })),
      (n[28] = N),
      (n[29] = P));
  let F;
  n[30] !== k || n[31] !== j || n[32] !== M || n[33] !== P
    ? ((F = (0, Z.jsxs)(l, {
        className: `max-h-[min(680px,calc(100dvh/var(--codex-window-zoom)-4rem))] min-h-0 overflow-hidden`,
        children: [k, j, M, P],
      })),
      (n[30] = k),
      (n[31] = j),
      (n[32] = M),
      (n[33] = P),
      (n[34] = F))
    : (F = n[34]);
  let I;
  return (
    n[35] !== a || n[36] !== F || n[37] !== D
      ? ((I = (0, Z.jsx)(A, { open: a, onOpenChange: D, contentProps: O, size: `xwide`, children: F })),
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
  let n = (0, Tt.c)(20),
    { entry: r, hostId: i, isRemoteHost: o, onToggleHookEnabled: s, onTrustHook: c } = e,
    l = re(),
    [u, d] = (0, Et.useState)(!1);
  if (r == null) return null;
  let f = r.hooks,
    p,
    m;
  if (
    n[0] !== r.cwd ||
    n[1] !== r.errors ||
    n[2] !== r.warnings ||
    n[3] !== f ||
    n[4] !== i ||
    n[5] !== l ||
    n[6] !== o ||
    n[7] !== u ||
    n[8] !== s ||
    n[9] !== c
  ) {
    let e = et(f).filter(bt),
      h = r.warnings,
      g = r.errors,
      _ = h.length + g.length;
    (n[12] !== g || n[13] !== _ || n[14] !== u || n[15] !== h
      ? ((p =
          _ > 0
            ? (0, Z.jsx)(St, {
                errors: g,
                expanded: u,
                issueCount: _,
                warnings: h,
                onToggleExpanded: () => {
                  d(!u);
                },
              })
            : null),
        (n[12] = g),
        (n[13] = _),
        (n[14] = u),
        (n[15] = h),
        (n[16] = p))
      : (p = n[16]),
      (m =
        e.length > 0
          ? (0, Z.jsx)(t, {
              children: e.map((e) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    children: [
                      (0, Z.jsx)(K, {
                        icon: (0, Z.jsx)(a, { "aria-hidden": !1, asset: ce }),
                        label: (0, Z.jsx)(`span`, { className: `font-medium`, children: st(e.eventName, l) }),
                        description: ct(e.eventName, l),
                        control:
                          e.needsReview > 0
                            ? (0, Z.jsx)(Ue, { className: `icon-2xs shrink-0 text-warning` })
                            : null,
                      }),
                      (0, Z.jsx)(ut, {
                        eventName: e.eventName,
                        hostId: i,
                        isRemoteHost: o,
                        hooks: f,
                        projectRoot: r.cwd,
                        onTrustHook: c,
                        onToggleHookEnabled: s,
                      }),
                    ],
                  },
                  e.eventName,
                ),
              ),
            })
          : null),
      (n[0] = r.cwd),
      (n[1] = r.errors),
      (n[2] = r.warnings),
      (n[3] = f),
      (n[4] = i),
      (n[5] = l),
      (n[6] = o),
      (n[7] = u),
      (n[8] = s),
      (n[9] = c),
      (n[10] = p),
      (n[11] = m));
  } else ((p = n[10]), (m = n[11]));
  let h;
  return (
    n[17] !== p || n[18] !== m
      ? ((h = (0, Z.jsxs)(Z.Fragment, { children: [p, m] })), (n[17] = p), (n[18] = m), (n[19] = h))
      : (h = n[19]),
    h
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
    ? ((r = (0, Z.jsx)(q, {
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
      : ((i = (0, Z.jsx)(Y, { Icon: Ue, type: `warning`, stackOnNarrow: !0, customCtas: n, content: r })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function St(e) {
  let t = (0, Tt.c)(18),
    { errors: n, expanded: r, issueCount: i, warnings: a, onToggleExpanded: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(Ue, { className: `icon-xs shrink-0 text-warning` })), (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === i
    ? (c = t[2])
    : ((c = (0, Z.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          s,
          (0, Z.jsx)(`span`, {
            className: `truncate text-sm text-default`,
            children: (0, Z.jsx)(q, {
              id: `settings.hooks.issues.summary`,
              defaultMessage: `{count, plural, one {# issue loading hooks for this source} other {# issues loading hooks for this source}}`,
              description: `Summary text for hook warnings and errors`,
              values: { count: i },
            }),
          }),
        ],
      })),
      (t[1] = i),
      (t[2] = c));
  let l = r && `rotate-180`,
    u;
  t[3] === l ? (u = t[4]) : ((u = h(`icon-2xs shrink-0 transition-transform`, l)), (t[3] = l), (t[4] = u));
  let d;
  t[5] === u ? (d = t[6]) : ((d = (0, Z.jsx)(E, { className: u })), (t[5] = u), (t[6] = d));
  let f;
  t[7] !== o || t[8] !== c || t[9] !== d
    ? ((f = (0, Z.jsxs)(`button`, {
        type: `button`,
        className: `flex w-full cursor-interaction items-center justify-between gap-3 px-3 py-2 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
        onClick: o,
        children: [c, d],
      })),
      (t[7] = o),
      (t[8] = c),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== n || t[12] !== r || t[13] !== a
    ? ((p = r
        ? (0, Z.jsxs)(`div`, {
            className: `space-y-2 border-t border-text-warning/20 px-3 py-2 text-sm text-secondary`,
            children: [a.map(wt), n.map(Ct)],
          })
        : null),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== f || t[16] !== p
      ? ((m = (0, Z.jsxs)(`div`, {
          className: `overflow-hidden rounded-lg border border-text-warning/30`,
          children: [f, p],
        })),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
function Ct(e) {
  return (0, Z.jsx)(
    `div`,
    {
      children: (0, Z.jsx)(q, {
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
    ((Tt = x()),
      I(),
      _(),
      F(),
      (Et = s()),
      j(),
      v(),
      le(),
      P(),
      u(),
      c(),
      b(),
      o(),
      We(),
      qe(),
      J(),
      R(),
      at(),
      lt(),
      $e(),
      he(),
      (Z = f()));
  }))();
}
function Ot(e) {
  let n = (0, Q.c)(72),
    {
      entries: r,
      hostId: o,
      isRemoteHost: s,
      isLoadingProjectRoots: c,
      loadError: l,
      isLoading: u,
      isRefreshing: d,
      projectRootLabels: f,
      projectRoots: p,
      selectedSourceSection: m,
      onSelectSourceSection: h,
      onRefreshHooks: g,
      onToggleHookEnabled: _,
      onTrustHook: v,
    } = e,
    y = re(),
    b;
  n[0] !== o || n[1] !== p ? ((b = { hostId: o, roots: p }), (n[0] = o), (n[1] = p), (n[2] = b)) : (b = n[2]);
  let { data: x } = Le(b),
    S;
  n[3] === y
    ? (S = n[4])
    : ((S = y.formatMessage({
        id: `settings.hooks.refresh`,
        defaultMessage: `Reload hooks`,
        description: `Button label to reload hooks for the visible projects`,
      })),
      (n[3] = y),
      (n[4] = S));
  let C = S,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M;
  if (n[5] !== r || n[6] !== x || n[7] !== u || n[8] !== f || n[9] !== m) {
    ((j = r == null || u ? [] : Ye(r)),
      (T = new Map(x?.map(At))),
      (w = []),
      (E = []),
      (D = null),
      (O = null));
    for (let e of j)
      bb0: switch (e.id) {
        case `plugin`:
          D = e;
          break bb0;
        case `project`:
          O = e;
          break bb0;
        case `user`:
        case `admin`:
          w.push(e);
          break bb0;
        case `sessionFlags`:
        case `unknown`:
          E.push(e);
      }
    ((k = Xe(j, m)),
      (A = m?.source === `plugin` && m.pluginId != null ? T.get(m.pluginId) : void 0),
      (M = Wt({ entry: k, plugin: A, projectRootLabels: f, selection: m })),
      (n[5] = r),
      (n[6] = x),
      (n[7] = u),
      (n[8] = f),
      (n[9] = m),
      (n[10] = w),
      (n[11] = T),
      (n[12] = E),
      (n[13] = D),
      (n[14] = O),
      (n[15] = k),
      (n[16] = A),
      (n[17] = j),
      (n[18] = M));
  } else
    ((w = n[10]),
      (T = n[11]),
      (E = n[12]),
      (D = n[13]),
      (O = n[14]),
      (k = n[15]),
      (A = n[16]),
      (j = n[17]),
      (M = n[18]));
  let N = M,
    P;
  n[19] !== o || n[20] !== m
    ? ((P =
        m?.source === `plugin` && m.pluginId != null
          ? Fe({ hostId: o, pluginId: m.pluginId, breadcrumb: `settings` })
          : void 0),
      (n[19] = o),
      (n[20] = m),
      (n[21] = P))
    : (P = n[21]);
  let F = P,
    I = null;
  if (m?.source === `plugin`) {
    let e;
    (n[22] === A ? (e = n[23]) : ((e = (0, $.jsx)(Ft, { plugin: A })), (n[22] = A), (n[23] = e)), (I = e));
  } else if (m != null) {
    let e;
    (n[24] === m.source ? (e = n[25]) : ((e = Rt(m.source)), (n[24] = m.source), (n[25] = e)), (I = e));
  }
  let L = null;
  if (m?.source === `project`) L = m.projectRoot;
  else if (m != null) {
    let e;
    (n[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(q, {
          id: `settings.hooks.source.sharedProjects`,
          defaultMessage: `All projects`,
          description: `Label for hook sources that apply across every project`,
        })),
        (n[26] = e))
      : (e = n[26]),
      (L = e));
  }
  let R = `none`;
  if (m?.source === `project`) R = m.projectRoot;
  else if (m?.source === `plugin`) {
    R = `plugin`;
    let e = m.pluginId;
    e !== void 0 && (R = `plugin:${e ?? `unknown`}`);
  } else m != null && (R = m.source);
  let z;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(Oe, {
        children: (0, $.jsx)(q, {
          id: `settings.hooks.loading.label`,
          defaultMessage: `Loading hooks…`,
          description: `Label while hooks are loading`,
        }),
      })),
      (n[27] = z))
    : (z = n[27]);
  let B = z,
    V;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, $.jsx)(ve, { slug: Kt })), (n[28] = V))
    : (V = n[28]);
  let H;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(q, {
        id: `settings.hooks.subtitle`,
        defaultMessage: `Manage lifecycle hooks from config and enabled plugins. <a>Learn more</a>`,
        description: `Subtitle for hooks settings`,
        values: { a: kt },
      })),
      (n[29] = H))
    : (H = n[29]);
  let ne = p == null || p.length === 0 || u || d,
    U;
  n[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(a, { "aria-hidden": !1, asset: i })), (n[30] = U))
    : (U = n[30]);
  let ie;
  n[31] !== g || n[32] !== C || n[33] !== ne
    ? ((ie = (0, $.jsx)(ee, {
        "aria-label": C,
        color: `ghost`,
        disabled: ne,
        onClick: g,
        size: `icon`,
        children: U,
      })),
      (n[31] = g),
      (n[32] = C),
      (n[33] = ne),
      (n[34] = ie))
    : (ie = n[34]);
  let W;
  n[35] !== C || n[36] !== ie
    ? ((W = (0, $.jsx)(te, { tooltipContent: C, children: ie })), (n[35] = C), (n[36] = ie), (n[37] = W))
    : (W = n[37]);
  let G;
  n[38] !== w ||
  n[39] !== T ||
  n[40] !== u ||
  n[41] !== c ||
  n[42] !== l ||
  n[43] !== h ||
  n[44] !== E ||
  n[45] !== D ||
  n[46] !== f ||
  n[47] !== p ||
  n[48] !== O ||
  n[49] !== j
    ? ((G =
        p == null && c
          ? B
          : p == null || p.length === 0
            ? (0, $.jsx)(jt, {})
            : l == null
              ? u
                ? B
                : j.length === 0
                  ? (0, $.jsx)(jt, {})
                  : (0, $.jsxs)($.Fragment, {
                      children: [
                        w.length > 0
                          ? (0, $.jsx)(Mt, {
                              title: (0, $.jsx)(q, {
                                id: `settings.hooks.source.globalConfig`,
                                defaultMessage: `From Config`,
                                description: `Group heading for hooks from global user and admin config`,
                              }),
                              sections: w,
                              onSelectSourceSection: h,
                            })
                          : null,
                        D == null
                          ? null
                          : (0, $.jsx)(Nt, { installedPluginsById: T, section: D, onSelectSourceSection: h }),
                        O == null
                          ? null
                          : (0, $.jsx)(It, { section: O, projectRootLabels: f, onSelectSourceSection: h }),
                        E.length > 0
                          ? (0, $.jsx)(Mt, {
                              title: (0, $.jsx)(q, {
                                id: `settings.hooks.source.otherSources`,
                                defaultMessage: `Other sources`,
                                description: `Group heading for hooks from uncommon sources`,
                              }),
                              sections: E,
                              onSelectSourceSection: h,
                            })
                          : null,
                      ],
                    })
              : (0, $.jsx)(t, {
                  children: (0, $.jsx)(K, {
                    label: (0, $.jsx)(q, {
                      id: `settings.hooks.loadError.label`,
                      defaultMessage: `Could not load hooks`,
                      description: `Label when hooks settings fails to load hooks`,
                    }),
                    description: (0, $.jsx)(`span`, {
                      className: `[text-wrap:wrap] break-words`,
                      children: l.message,
                    }),
                    control: null,
                  }),
                })),
      (n[38] = w),
      (n[39] = T),
      (n[40] = u),
      (n[41] = c),
      (n[42] = l),
      (n[43] = h),
      (n[44] = E),
      (n[45] = D),
      (n[46] = f),
      (n[47] = p),
      (n[48] = O),
      (n[49] = j),
      (n[50] = G))
    : (G = n[50]);
  let ae = m != null && (u || k != null),
    J;
  n[51] === h
    ? (J = n[52])
    : ((J = () => {
        h(null);
      }),
      (n[51] = h),
      (n[52] = J));
  let Y;
  n[53] !== o ||
  n[54] !== u ||
  n[55] !== s ||
  n[56] !== l ||
  n[57] !== _ ||
  n[58] !== v ||
  n[59] !== k ||
  n[60] !== R ||
  n[61] !== L ||
  n[62] !== N ||
  n[63] !== F ||
  n[64] !== I ||
  n[65] !== ae ||
  n[66] !== J
    ? ((Y = (0, $.jsx)(
        gt,
        {
          entry: k,
          hostId: o,
          isOpen: ae,
          isLoading: u,
          isRemoteHost: s,
          loadError: l,
          title: N,
          titleHref: F,
          titleIcon: I,
          subtitle: L,
          onClose: J,
          onToggleHookEnabled: _,
          onTrustHook: v,
        },
        R,
      )),
      (n[53] = o),
      (n[54] = u),
      (n[55] = s),
      (n[56] = l),
      (n[57] = _),
      (n[58] = v),
      (n[59] = k),
      (n[60] = R),
      (n[61] = L),
      (n[62] = N),
      (n[63] = F),
      (n[64] = I),
      (n[65] = ae),
      (n[66] = J),
      (n[67] = Y))
    : (Y = n[67]);
  let oe;
  return (
    n[68] !== W || n[69] !== G || n[70] !== Y
      ? ((oe = (0, $.jsxs)(xe, {
          title: V,
          subtitleClassName: `whitespace-normal`,
          subtitle: H,
          action: W,
          children: [G, Y],
        })),
        (n[68] = W),
        (n[69] = G),
        (n[70] = Y),
        (n[71] = oe))
      : (oe = n[71]),
    oe
  );
}
function kt(e) {
  return (0, $.jsx)(
    `a`,
    { className: `inline-flex text-info`, href: pe, target: `_blank`, rel: `noreferrer`, children: e },
    `learn-more`,
  );
}
function At(e) {
  return [e.plugin.id, e];
}
function jt() {
  let e = (0, Q.c)(1),
    n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(t, {
          children: (0, $.jsx)(K, {
            label: (0, $.jsx)(q, {
              id: `settings.hooks.emptyHooks.label`,
              defaultMessage: `No hooks found`,
              description: `Label when known projects do not have hooks or hook load issues`,
            }),
            description: (0, $.jsx)(q, {
              id: `settings.hooks.emptyHooks.description`,
              defaultMessage: `Configured hooks will appear here`,
              description: `Description when no hooks are configured`,
            }),
            control: null,
          }),
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
function Mt(e) {
  let n = (0, Q.c)(12),
    { sections: r, title: i, onSelectSourceSection: a } = e,
    o;
  n[0] === i ? (o = n[1]) : ((o = (0, $.jsx)(X.Header, { title: i })), (n[0] = i), (n[1] = o));
  let s;
  if (n[2] !== a || n[3] !== r) {
    let e;
    (n[5] === a
      ? (e = n[6])
      : ((e = (e) => (0, $.jsx)(Lt, { section: e, onSelectSourceSection: a }, e.id)), (n[5] = a), (n[6] = e)),
      (s = r.map(e)),
      (n[2] = a),
      (n[3] = r),
      (n[4] = s));
  } else s = n[4];
  let c;
  n[7] === s
    ? (c = n[8])
    : ((c = (0, $.jsx)(X.Content, { children: (0, $.jsx)(t, { children: s }) })), (n[7] = s), (n[8] = c));
  let l;
  return (
    n[9] !== o || n[10] !== c
      ? ((l = (0, $.jsxs)(X, { children: [o, c] })), (n[9] = o), (n[10] = c), (n[11] = l))
      : (l = n[11]),
    l
  );
}
function Nt(e) {
  let n = (0, Q.c)(10),
    { installedPluginsById: r, section: i, onSelectSourceSection: a } = e,
    o;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(X.Header, {
        title: (0, $.jsx)(q, {
          id: `settings.hooks.source.plugins`,
          defaultMessage: `From Plugins`,
          description: `Group heading for hooks installed by plugins`,
        }),
      })),
      (n[0] = o))
    : (o = n[0]);
  let s;
  if (n[1] !== r || n[2] !== a || n[3] !== i.pluginEntries) {
    let e;
    (n[5] !== r || n[6] !== a
      ? ((e = (e) =>
          (0, $.jsx)(
            Pt,
            {
              plugin: e.pluginId == null ? void 0 : r.get(e.pluginId),
              pluginEntry: e,
              onSelectSourceSection: a,
            },
            e.pluginId ?? `unknown-plugin`,
          )),
        (n[5] = r),
        (n[6] = a),
        (n[7] = e))
      : (e = n[7]),
      (s = i.pluginEntries.map(e)),
      (n[1] = r),
      (n[2] = a),
      (n[3] = i.pluginEntries),
      (n[4] = s));
  } else s = n[4];
  let c;
  return (
    n[8] === s
      ? (c = n[9])
      : ((c = (0, $.jsxs)(X, {
          children: [o, (0, $.jsx)(X.Content, { children: (0, $.jsx)(t, { children: s }) })],
        })),
        (n[8] = s),
        (n[9] = c)),
    c
  );
}
function Pt(e) {
  let t = (0, Q.c)(23),
    { plugin: n, pluginEntry: r, onSelectSourceSection: i } = e,
    a = re(),
    o;
  t[0] !== a || t[1] !== n || t[2] !== r.pluginId
    ? ((o =
        (n == null ? void 0 : we(n)) ??
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
  let m;
  t[14] !== i || t[15] !== r.pluginId
    ? ((m = () => {
        i({ source: `plugin`, pluginId: r.pluginId });
      }),
      (t[14] = i),
      (t[15] = r.pluginId),
      (t[16] = m))
    : (m = t[16]);
  let h;
  return (
    t[17] !== u || t[18] !== d || t[19] !== f || t[20] !== p || t[21] !== m
      ? ((h = (0, $.jsx)(B, {
          edgeRounding: `surface`,
          icon: u,
          label: d,
          description: f,
          trailing: p,
          onClick: m,
        })),
        (t[17] = u),
        (t[18] = d),
        (t[19] = f),
        (t[20] = p),
        (t[21] = m),
        (t[22] = h))
      : (h = t[22]),
    h
  );
}
function Ft(e) {
  let t = (0, Q.c)(5),
    { plugin: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(m, { className: `icon-sm text-secondary` })), (t[0] = r))
    : (r = t[0]);
  let i = n?.plugin.name,
    a = n?.logoDarkPath,
    o = n?.logoPath,
    s;
  return (
    t[1] !== i || t[2] !== a || t[3] !== o
      ? ((s = (0, $.jsx)(ye, {
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
  let n = (0, Q.c)(10),
    { section: r, projectRootLabels: i, onSelectSourceSection: a } = e,
    o;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(X.Header, {
        title: (0, $.jsx)(q, {
          id: `settings.hooks.source.projects`,
          defaultMessage: `From Projects`,
          description: `Group heading for hooks from project config files`,
        }),
      })),
      (n[0] = o))
    : (o = n[0]);
  let s;
  if (n[1] !== a || n[2] !== i || n[3] !== r.projectEntries) {
    let e;
    (n[5] !== a || n[6] !== i
      ? ((e = (e) => (0, $.jsx)(zt, { entry: e, projectRootLabels: i, onSelectSourceSection: a }, e.cwd)),
        (n[5] = a),
        (n[6] = i),
        (n[7] = e))
      : (e = n[7]),
      (s = r.projectEntries.map(e)),
      (n[1] = a),
      (n[2] = i),
      (n[3] = r.projectEntries),
      (n[4] = s));
  } else s = n[4];
  let c;
  return (
    n[8] === s
      ? (c = n[9])
      : ((c = (0, $.jsxs)(X, {
          children: [o, (0, $.jsx)(X.Content, { children: (0, $.jsx)(t, { children: s }) })],
        })),
        (n[8] = s),
        (n[9] = c)),
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
      ? ((p = (0, $.jsx)(B, {
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
      return (0, $.jsx)(m, { className: t });
    case `user`:
      return (0, $.jsx)(d, { className: t });
    case `admin`:
      return (0, $.jsx)(Ke, { className: t });
    case `project`:
      return (0, $.jsx)(H, { className: t });
    case `sessionFlags`:
    case `unknown`:
      return (0, $.jsx)(S, { className: `text-secondary` });
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
    ? ((s = (0, $.jsx)(H, { className: `icon-sm text-secondary` })), (t[2] = s))
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
      ? ((p = (0, $.jsx)(B, {
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
      : ((r = (0, $.jsx)(q, {
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
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(se, {
        className: `shrink-0 -rotate-90`,
        "aria-hidden": !1,
        legacyIcon: E,
        asset16: V,
        legacyClassName: `icon-2xs`,
      })),
      (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, $.jsxs)(`div`, { className: `flex items-center gap-3`, children: [r, i] })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function Ht(e) {
  let t = (0, Q.c)(6),
    { summary: n } = e,
    r = re();
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
  return t?.[e] ?? Re(e) ?? e;
}
function Wt({ entry: e, plugin: t, projectRootLabels: n, selection: r }) {
  if (r == null) return null;
  if (r.source === `project`) return Ut(r.projectRoot, n);
  if (r.source === `plugin`) {
    if (t != null) return we(t);
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
    ((Q = x()),
      y(),
      ae(),
      me(),
      j(),
      be(),
      ge(),
      P(),
      b(),
      D(),
      oe(),
      G(),
      g(),
      Ge(),
      o(),
      W(),
      N(),
      We(),
      ze(),
      Ce(),
      Me(),
      je(),
      ke(),
      J(),
      Se(),
      R(),
      at(),
      ht(),
      $e(),
      Dt(),
      dt(),
      ($ = f()),
      (Kt = `hooks-settings`));
  }))();
}
function Jt() {
  let e = (0, Yt.c)(47),
    t = n(C),
    r = re(),
    i = O(),
    [a, o] = M(),
    s = T(),
    { selectedHostId: c, setSelectedHostId: l } = Be(),
    u = He(c),
    d = z(Ae),
    f = z(Ve),
    p = d?.type === `local` ? (f[d.projectId]?.rootPaths ?? []) : [],
    m = z(fe),
    h;
  e[0] === c ? (h = e[1]) : ((h = { hostId: c }), (e[0] = c), (e[1] = h));
  let { data: g, isPending: _ } = ne(Pe, h),
    v;
  e[2] === a ? (v = e[3]) : ((v = a.get(`hostId`)), (e[2] = a), (e[3] = v));
  let y = v,
    b = y == null || y === c,
    x = b ? a.get(`projectRoot`) : null,
    S = b ? a.get(`pluginId`) : null,
    w = [];
  c === `local` ? (w = p) : m?.hostId === c && (w = [m.remotePath]);
  let E = g == null ? void 0 : tt(g.roots, w, x),
    D = b ? nt({ pluginId: S, source: a.get(`source`), projectRoot: x, projectRoots: E }) : null,
    k;
  e[4] !== E || e[5] !== c ? ((k = { hostId: c, cwds: E }), (e[4] = E), (e[5] = c), (e[6] = k)) : (k = e[6]);
  let A = ne(Ee, k),
    j;
  e[7] === l
    ? (j = e[8])
    : ((j = (e) => {
        l(e);
      }),
      (e[7] = l),
      (e[8] = j));
  let ee = (0, Xt.useEffectEvent)(j),
    N;
  e[9] !== s || e[10] !== c || e[11] !== y || e[12] !== ee
    ? ((N = () => {
        if (y != null && y !== c) {
          ee(y);
          return;
        }
        Te(s, c, { refetchType: `active` });
      }),
      (e[9] = s),
      (e[10] = c),
      (e[11] = y),
      (e[12] = ee),
      (e[13] = N))
    : (N = e[13]);
  let P;
  (e[14] !== i.key || e[15] !== s || e[16] !== c || e[17] !== y
    ? ((P = [i.key, s, c, y]), (e[14] = i.key), (e[15] = s), (e[16] = c), (e[17] = y), (e[18] = P))
    : (P = e[18]),
    (0, Xt.useEffect)(N, P));
  let F = ne(De, c),
    I;
  e[19] !== A || e[20] !== r || e[21] !== s || e[22] !== t || e[23] !== c
    ? ((I = () => {
        A.refetch().then(async (e) => {
          e.isSuccess &&
            (await Te(s, c, { broadcast: !0, refetchType: `none` }),
            t
              .get(ie)
              .success(
                r.formatMessage({
                  id: `settings.hooks.refresh.success`,
                  defaultMessage: `Refreshed hooks`,
                  description: `Success toast shown after manually refreshing hooks`,
                }),
              ));
        });
      }),
      (e[19] = A),
      (e[20] = r),
      (e[21] = s),
      (e[22] = t),
      (e[23] = c),
      (e[24] = I))
    : (I = e[24]);
  let L = I,
    R;
  e[25] !== a || e[26] !== c || e[27] !== o
    ? ((R = (e) => {
        let t = new URLSearchParams(a);
        (rt(t, c, e), o(t, { replace: !0 }));
      }),
      (e[25] = a),
      (e[26] = c),
      (e[27] = o),
      (e[28] = R))
    : (R = e[28]);
  let B = R,
    V = A.data?.data,
    H = u.kind !== `local`,
    te = A.isFetching && !A.isPending,
    U = g?.labels,
    W,
    G;
  e[29] === F
    ? ((W = e[30]), (G = e[31]))
    : ((W = (e, t) => {
        F.mutate([{ key: e.key, enabled: t }]);
      }),
      (G = (e) => {
        F.mutate([{ key: e.key, trustedHash: e.currentHash }]);
      }),
      (e[29] = F),
      (e[30] = W),
      (e[31] = G));
  let K;
  return (
    e[32] !== L ||
    e[33] !== B ||
    e[34] !== A.error ||
    e[35] !== A.isPending ||
    e[36] !== _ ||
    e[37] !== E ||
    e[38] !== c ||
    e[39] !== D ||
    e[40] !== te ||
    e[41] !== U ||
    e[42] !== W ||
    e[43] !== G ||
    e[44] !== V ||
    e[45] !== H
      ? ((K = (0, Zt.jsx)(Ot, {
          entries: V,
          hostId: c,
          isRemoteHost: H,
          isLoadingProjectRoots: _,
          loadError: A.error,
          isLoading: A.isPending,
          isRefreshing: te,
          projectRootLabels: U,
          projectRoots: E,
          selectedSourceSection: D,
          onSelectSourceSection: B,
          onRefreshHooks: L,
          onToggleHookEnabled: W,
          onTrustHook: G,
        })),
        (e[32] = L),
        (e[33] = B),
        (e[34] = A.error),
        (e[35] = A.isPending),
        (e[36] = _),
        (e[37] = E),
        (e[38] = c),
        (e[39] = D),
        (e[40] = te),
        (e[41] = U),
        (e[42] = W),
        (e[43] = G),
        (e[44] = V),
        (e[45] = H),
        (e[46] = K))
      : (K = e[46]),
    K
  );
}
var Yt, Xt, Zt;
function Qt() {
  return (Qt = e(() => {
    ((Yt = x()),
      p(),
      F(),
      (Xt = s()),
      j(),
      v(),
      k(),
      r(),
      Ne(),
      Ie(),
      _e(),
      $e(),
      he(),
      it(),
      qt(),
      (Zt = f()));
  }))();
}
Qt();
export { Jt as HooksSettings };
//# sourceMappingURL=hooks-settings-97c8ded98a18.js.map
