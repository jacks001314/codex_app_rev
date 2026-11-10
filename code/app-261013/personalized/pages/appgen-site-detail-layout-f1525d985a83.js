import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  D2 as i,
  Ext as a,
  F3 as o,
  HZ as s,
  I3 as c,
  IDt as l,
  Ixt as u,
  JC as d,
  LV as f,
  Mz as p,
  Nz as m,
  O2 as h,
  P3 as g,
  Pxt as _,
  QI as v,
  TJ as y,
  VDt as ee,
  VZ as b,
  Vxt as x,
  Xot as te,
  Yot as ne,
  ZI as S,
  _xt as re,
  cz as ie,
  e3 as ae,
  hrt as oe,
  iw as se,
  jDt as C,
  n4 as ce,
  nst as le,
  oxt as w,
  pW as T,
  qC as E,
  sz as ue,
  t3 as D,
  t4 as de,
  tst as O,
  tw as k,
  vrt as fe,
  vzt as A,
  wB as pe,
  wot as me,
  xMt as j,
  yzt as M,
  zxt as he,
} from "./app-shared-bbfeca5e5737.js";
import {
  $3n as ge,
  $lt as _e,
  ACn as N,
  BYt as ve,
  DU as ye,
  EU as be,
  Ek as P,
  FB as xe,
  IB as Se,
  IYt as Ce,
  Ihn as we,
  JPn as F,
  Lhn as I,
  NPr as Te,
  Nhn as Ee,
  OPr as L,
  Ogn as De,
  Q3n as R,
  QHt as Oe,
  Qlt as ke,
  Tk as z,
  XPn as B,
  XTr as Ae,
  ZHt as je,
  aEr as Me,
  ayn as V,
  cEr as H,
  cgn as Ne,
  co as Pe,
  e6n as U,
  eDr as W,
  eut as G,
  iEr as Fe,
  iI as Ie,
  jCn as Le,
  lo as Re,
  nDr as ze,
  nEr as Be,
  nyn as Ve,
  oI as He,
  rDr as Ue,
  rEr as We,
  ryn as Ge,
  tEr as Ke,
  xPn as qe,
  yPn as Je,
  ygn as Ye,
} from "./app-initial-5851df3f6cb1.js";
import { n as Xe, t as Ze } from "./appgen-disabled-tooltip-1654c4d763a0.js";
function Qe() {
  let e = (0, tt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, K.jsxs)(`div`, {
          className: `flex flex-col gap-10`,
          "aria-busy": `true`,
          role: `status`,
          children: [
            (0, K.jsx)(`span`, {
              className: `sr-only`,
              children: (0, K.jsx)(l, {
                id: `appgenSettings.loading`,
                defaultMessage: `Loading site settings…`,
                description: `Accessible status while the Site settings page or dialog loads its initial data and displays placeholder rows`,
              }),
            }),
            [
              { key: `general`, rows: 5 },
              { key: `environment`, rows: 2 },
              { key: `danger`, rows: 1 },
            ].map($e),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function $e(e) {
  let { key: t, rows: n } = e;
  return (0, K.jsxs)(
    z,
    {
      children: [
        (0, K.jsx)(z.Header, {
          title: (0, K.jsx)(R, { className: `w-32`, size: `lg` }),
          subtitle: (0, K.jsx)(R, { className: `mt-2 w-1/2`, size: `sm` }),
        }),
        (0, K.jsx)(z.Content, {
          children: (0, K.jsx)(E, { variant: `flat`, children: Array.from({ length: n }, et) }),
        }),
      ],
    },
    t,
  );
}
function et(e, t) {
  return (0, K.jsx)(
    k,
    {
      layout: `split`,
      label: (0, K.jsx)(R, { className: `w-24`, size: `md` }),
      description: (0, K.jsx)(R, { className: `mt-2 w-40`, size: `sm` }),
      control: (0, K.jsx)(`div`, { className: `h-9 w-40`, children: (0, K.jsx)(R, { size: `fill` }) }),
    },
    t,
  );
}
var tt, K;
function nt() {
  return (nt = e(() => {
    ((tt = A()), C(), U(), P(), se(), d(), (K = j()));
  }))();
}
function rt(e) {
  let t = (0, it.c)(7),
    { navigation: n, to: r } = e,
    i = n?.onNavigate,
    a,
    o;
  (t[0] !== i || t[1] !== r
    ? ((a = () => {
        i?.(r, { replace: !0 });
      }),
      (o = [i, r]),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o))
    : ((a = t[2]), (o = t[3])),
    (0, at.useEffect)(a, o));
  let s;
  return (
    t[4] !== i || t[5] !== r
      ? ((s = i == null ? (0, ot.jsx)(w, { replace: !0, to: r }) : null), (t[4] = i), (t[5] = r), (t[6] = s))
      : (s = t[6]),
    s
  );
}
var it, at, ot;
function st() {
  return (st = e(() => {
    ((it = A()), (at = M()), re(), (ot = j()));
  }))();
}
function ct(e) {
  let n = (0, ut.c)(16),
    { disabled: r, isRefreshing: i, onRefresh: a } = e,
    o = r === void 0 || r,
    s = i !== void 0 && i,
    c = ee(),
    u;
  n[0] !== c || n[1] !== s
    ? ((u = s
        ? c.formatMessage({
            id: `appgenSettings.database.refreshing.ariaLabel`,
            defaultMessage: `Refreshing database`,
            description: `Accessible label while refreshing live Site database data`,
          })
        : c.formatMessage({
            id: `appgenSettings.database.refresh.ariaLabel`,
            defaultMessage: `Refresh database`,
            description: `Accessible label for refreshing live Site database data`,
          })),
      (n[0] = c),
      (n[1] = s),
      (n[2] = u))
    : (u = n[2]);
  let d;
  n[3] === s ? (d = n[4]) : ((d = s ? null : (0, q.jsx)(p, { asset: de })), (n[3] = s), (n[4] = d));
  let f;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(l, {
        id: `appgenSettings.database.refresh`,
        defaultMessage: `Refresh`,
        description: `Button label for refreshing live Site database data`,
      })),
      (n[5] = f))
    : (f = n[5]);
  let m;
  n[6] !== o || n[7] !== s || n[8] !== a || n[9] !== u || n[10] !== d
    ? ((m = (0, q.jsxs)(t, {
        "aria-label": u,
        color: `outline`,
        disabled: o,
        loading: s,
        size: `toolbar`,
        type: `button`,
        onClick: a,
        children: [d, f],
      })),
      (n[6] = o),
      (n[7] = s),
      (n[8] = a),
      (n[9] = u),
      (n[10] = d),
      (n[11] = m))
    : (m = n[11]);
  let h, g;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, q.jsx)(l, {
        id: `appgenSettings.database.description`,
        defaultMessage: `View the data used by your live site`,
        description: `Description for the Site database viewer`,
      })),
      (g = (0, q.jsx)(l, {
        id: `appgenSettings.database.title`,
        defaultMessage: `Database`,
        description: `Heading for the Site database viewer`,
      })),
      (n[12] = h),
      (n[13] = g))
    : ((h = n[12]), (g = n[13]));
  let _;
  return (
    n[14] === m
      ? (_ = n[15])
      : ((_ = (0, q.jsx)(z.Header, { size: `base`, actions: m, subtitle: h, title: g })),
        (n[14] = m),
        (n[15] = _)),
    _
  );
}
function lt(e) {
  let n = (0, ut.c)(9),
    { disabled: r, filter: i, onCreate: a } = e,
    o = r === void 0 || r,
    s,
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, q.jsx)(l, {
        id: `appgenAutomations.title`,
        defaultMessage: `Scheduled tasks`,
        description: `Heading for the list of a Site's cloud scheduled tasks`,
      })),
      (c = (0, q.jsx)(l, {
        id: `appgenAutomations.description`,
        defaultMessage: `Update your site automatically on a schedule`,
        description: `Description of the Site Scheduled tab`,
      })),
      (n[0] = s),
      (n[1] = c))
    : ((s = n[0]), (c = n[1]));
  let u;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, q.jsx)(l, {
        id: `appgenAutomations.createTask`,
        defaultMessage: `Create task`,
        description: `Button to open the existing cloud task setup for this Site`,
      })),
      (n[2] = u))
    : (u = n[2]);
  let d;
  n[3] !== o || n[4] !== a
    ? ((d = (0, q.jsx)(t, {
        color: `outlineSurface`,
        radius: `large`,
        size: `composerSmLabel`,
        disabled: o,
        onClick: a,
        children: u,
      })),
      (n[3] = o),
      (n[4] = a),
      (n[5] = d))
    : (d = n[5]);
  let f;
  return (
    n[6] !== i || n[7] !== d
      ? ((f = (0, q.jsx)(z.Header, {
          size: `base`,
          subtitleWrap: `wrap`,
          title: s,
          subtitle: c,
          actions: (0, q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [i, d] }),
        })),
        (n[6] = i),
        (n[7] = d),
        (n[8] = f))
      : (f = n[8]),
    f
  );
}
var ut, q;
function dt() {
  return (dt = e(() => {
    ((ut = A()), ce(), C(), D(), m(), P(), (q = j()));
  }))();
}
function ft(e) {
  let t = (0, _t.c)(7),
    { tab: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = n === `database` ? (0, J.jsx)(ct, {}) : (0, J.jsx)(lt, {})), (t[0] = n), (t[1] = r));
  let i;
  t[2] === n
    ? (i = t[3])
    : ((i = (0, J.jsx)(z.Content, {
        children: n === `database` ? (0, J.jsx)(E, { children: (0, J.jsx)(pt, {}) }) : (0, J.jsx)(ht, {}),
      })),
      (t[2] = n),
      (t[3] = i));
  let a;
  return (
    t[4] !== r || t[5] !== i
      ? ((a = (0, J.jsxs)(z, { children: [r, i] })), (t[4] = r), (t[5] = i), (t[6] = a))
      : (a = t[6]),
    a
  );
}
function pt(e) {
  let t = (0, _t.c)(7),
    { children: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r =
        n ??
        (0, J.jsx)(l, {
          id: `appgenSettings.database.loading`,
          defaultMessage: `Loading database…`,
          description: `Loading status while Site database metadata is being loaded`,
        })),
      (t[0] = n),
      (t[1] = r));
  let i;
  t[2] === r
    ? (i = t[3])
    : ((i = (0, J.jsx)(`span`, { className: `sr-only`, children: r })), (t[2] = r), (t[3] = i));
  let a;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = [0, 1, 2].map(mt)), (t[4] = a)) : (a = t[4]);
  let o;
  return (
    t[5] === i
      ? (o = t[6])
      : ((o = (0, J.jsxs)(`div`, {
          className: `flex min-h-40 gap-4 px-4 py-8`,
          "aria-busy": `true`,
          role: `status`,
          children: [i, a],
        })),
        (t[5] = i),
        (t[6] = o)),
    o
  );
}
function mt(e) {
  return (0, J.jsx)(ge, { lines: 5 }, e);
}
function ht() {
  let e = (0, _t.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, J.jsx)(`span`, {
        className: `sr-only`,
        children: (0, J.jsx)(l, {
          id: `appgenAutomations.loading`,
          defaultMessage: `Loading scheduled tasks…`,
          description: `Accessible loading status while the Scheduled tab for a Site loads its linked cloud tasks`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, J.jsxs)(`div`, {
          "aria-busy": `true`,
          role: `status`,
          children: [
            t,
            (0, J.jsx)(E, {
              dividers: !1,
              children: (0, J.jsx)(`div`, { className: `p-3`, children: [0, 1, 2].map(gt) }),
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function gt(e) {
  return (0, J.jsxs)(
    `div`,
    {
      className: `flex min-w-0 flex-col gap-0.5 px-3 py-3`,
      children: [
        (0, J.jsx)(`div`, {
          className: `flex h-lh items-center text-sm`,
          children: (0, J.jsx)(R, { className: `w-32 max-w-full`, size: `md` }),
        }),
        (0, J.jsx)(`div`, {
          className: `flex h-4 items-center`,
          children: (0, J.jsx)(R, { className: `w-48 max-w-full`, size: `sm` }),
        }),
      ],
    },
    e,
  );
}
var _t, J;
function vt() {
  return (vt = e(() => {
    ((_t = A()), C(), U(), P(), d(), dt(), (J = j()));
  }))();
}
function yt(e) {
  let n = (0, bt.c)(19),
    { disabled: r, isRefreshing: a, onAdd: o, onRefresh: s } = e,
    c = r === void 0 || r,
    u = a !== void 0 && a,
    d = ee(),
    f,
    m;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(l, {
        id: `appgenPlugins.title`,
        defaultMessage: `Site plugins`,
        description: `Heading in a Site's Plugins settings tab, viewed by its owner or editor. Plugins is the product term for integrations the site can use.`,
      })),
      (m = (0, Y.jsx)(l, {
        id: `appgenPlugins.description`,
        defaultMessage: `View and manage plugins used by this site`,
        description: `Subtitle in a Site's Plugins settings tab explaining that the list shows plugins configured for this site, rather than every plugin installed by its owner.`,
      })),
      (n[0] = f),
      (n[1] = m))
    : ((f = n[0]), (m = n[1]));
  let h;
  n[2] === d
    ? (h = n[3])
    : ((h = d.formatMessage({
        id: `appgenPlugins.refresh.ariaLabel`,
        defaultMessage: `Refresh plugins`,
        description: `Accessible label on the refresh icon button in a Site's Plugins settings tab. Activating it reloads the site's current plugin configuration.`,
      })),
      (n[2] = d),
      (n[3] = h));
  let g = s == null || u,
    _ = u ? `motion-safe:animate-spin` : void 0,
    v;
  n[4] === _ ? (v = n[5]) : ((v = (0, Y.jsx)(p, { className: _, asset: i })), (n[4] = _), (n[5] = v));
  let y;
  n[6] !== u || n[7] !== s || n[8] !== h || n[9] !== g || n[10] !== v
    ? ((y = (0, Y.jsx)(t, {
        uniform: !0,
        "aria-busy": u,
        "aria-label": h,
        color: `ghost`,
        disabled: g,
        radius: `small`,
        size: `composerSmLabel`,
        type: `button`,
        onClick: s,
        children: v,
      })),
      (n[6] = u),
      (n[7] = s),
      (n[8] = h),
      (n[9] = g),
      (n[10] = v),
      (n[11] = y))
    : (y = n[11]);
  let b;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsx)(l, {
        id: `appgenPlugins.add`,
        defaultMessage: `Add`,
        description: `Short button label in a Site's Plugins settings header. Opens a chat with a draft asking to add a plugin to this site; the user sends the draft.`,
      })),
      (n[12] = b))
    : (b = n[12]);
  let x;
  n[13] !== c || n[14] !== o
    ? ((x = (0, Y.jsx)(t, {
        color: `secondary`,
        disabled: c,
        radius: `large`,
        size: `composerSmLabel`,
        type: `button`,
        onClick: o,
        children: b,
      })),
      (n[13] = c),
      (n[14] = o),
      (n[15] = x))
    : (x = n[15]);
  let te;
  return (
    n[16] !== x || n[17] !== y
      ? ((te = (0, Y.jsx)(z.Header, {
          size: `base`,
          subtitleWrap: `wrap`,
          title: f,
          subtitle: m,
          actions: (0, Y.jsxs)(Y.Fragment, { children: [y, x] }),
        })),
        (n[16] = x),
        (n[17] = y),
        (n[18] = te))
      : (te = n[18]),
    te
  );
}
var bt, Y;
function xt() {
  return (xt = e(() => {
    ((bt = A()), h(), C(), D(), m(), P(), (Y = j()));
  }))();
}
function St() {
  let e = (0, Tt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsxs)(z, { children: [(0, X.jsx)(yt, {}), (0, X.jsx)(Ct, {})] })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ct() {
  let e = (0, Tt.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, X.jsx)(`span`, {
        className: `sr-only`,
        children: (0, X.jsx)(l, {
          id: `appgenPlugins.loading`,
          defaultMessage: `Loading plugins…`,
          description: `Accessible status announced while a Site's Plugins settings tab loads its current plugin configuration.`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, X.jsxs)(`div`, {
          "aria-busy": `true`,
          role: `status`,
          children: [t, (0, X.jsx)(E, { children: [0, 1, 2].map(wt) })],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function wt(e) {
  return (0, X.jsx)(
    k,
    {
      control: null,
      description: (0, X.jsx)(R, { className: `w-32`, size: `sm` }),
      label: (0, X.jsx)(R, { className: `w-24`, size: `md` }),
    },
    e,
  );
}
var Tt, X;
function Et() {
  return (Et = e(() => {
    ((Tt = A()), C(), U(), P(), se(), d(), xt(), (X = j()));
  }))();
}
var Dt;
function Ot() {
  return (Ot = e(() => {
    (C(),
      (Dt = n({
        navigation: {
          id: `appgenPlugins.navigation`,
          defaultMessage: `Plugins`,
          description: `Tab in a hosted Site’s settings where the owner can view the plugins used by the published website`,
        },
      })));
  }))();
}
function kt(e) {
  let t = (0, Z.c)(7),
    n = (0, Q.useContext)(Vt);
  if (n != null) {
    let r;
    t[0] !== n || t[1] !== e.children
      ? ((r = e.children(n)), (t[0] = n), (t[1] = e.children), (t[2] = r))
      : (r = t[2]);
    let i;
    return (
      t[3] === r ? (i = t[4]) : ((i = (0, $.jsx)($.Fragment, { children: r })), (t[3] = r), (t[4] = i)),
      i
    );
  }
  let r;
  return (
    t[5] === e
      ? (r = t[6])
      : ((r = (0, $.jsx)(Q.Suspense, {
          fallback: (0, $.jsx)(At, { ...e, loadingOnly: !0 }, e.projectId),
          children: (0, $.jsx)(At, { ...e }, e.projectId),
        })),
        (t[5] = e),
        (t[6] = r)),
    r
  );
}
function At(e) {
  let t = (0, Z.c)(119),
    { children: n, loadingOnly: i, navigation: s, prefetchTab: d, projectId: f, selectedTab: p } = e,
    m = i !== void 0 && i,
    h = u(r),
    _ = le(),
    v = a(),
    y = ee(),
    [b, ne] = (0, Q.useState)(!1),
    [S, re] = (0, Q.useState)(p === `settings`);
  S && p !== `settings` && re(!1);
  let ie = ve(),
    ae = ze(`1855826876`),
    se = Ue(`1855826876`),
    C = x(Te),
    ce = ze(`262557526`),
    w;
  t[0] === f ? (w = t[1]) : ((w = Ee(f)), (t[0] = f), (t[1] = w));
  let { data: T, error: E, isError: ue, isLoading: D, refetch: de } = te(w),
    O;
  if (T != null) O = T;
  else if (D) {
    let e;
    (t[2] !== f || t[3] !== _ ? ((e = we(_, f)), (t[2] = f), (t[3] = _), (t[4] = e)) : (e = t[4]), (O = e));
  }
  let k = T != null,
    fe = p === `settings` && k,
    A;
  t[5] === fe ? (A = t[6]) : ((A = { enabled: fe }), (t[5] = fe), (t[6] = A));
  let { isLoading: pe } = he(Ne, f, A),
    me;
  t[7] !== f || t[8] !== h || t[9] !== p
    ? ((me = () => {
        let e;
        bb21: switch (p) {
          case `plugins`:
          case `automations`:
            return;
          case `analytics`:
            e = o.CODEX_APPGEN_INTERACTION_PAGE_ANALYTICS;
            break bb21;
          case `database`:
            e = o.CODEX_APPGEN_INTERACTION_PAGE_DATABASE;
            break bb21;
          case `settings`:
            e = o.CODEX_APPGEN_INTERACTION_PAGE_SETTINGS;
        }
        Se(h, {
          action: g.CODEX_APPGEN_INTERACTION_ACTION_PAGE_VIEWED,
          page: e,
          projectId: f,
          source: c.CODEX_APPGEN_INTERACTION_SOURCE_SITE_DETAILS,
        });
      }),
      (t[7] = f),
      (t[8] = h),
      (t[9] = p),
      (t[10] = me))
    : (me = t[10]);
  let j = (0, Q.useEffectEvent)(me),
    M =
      T == null ||
      m ||
      D ||
      ue ||
      (p === `settings` && !k) ||
      p === `automations` ||
      p === `plugins` ||
      (p === `analytics` && !ce)
        ? null
        : `${T.id}:${p}`,
    ge;
  t[11] !== j || t[12] !== M
    ? ((ge = () => {
        M != null && j();
      }),
      (t[11] = j),
      (t[12] = M),
      (t[13] = ge))
    : (ge = t[13]);
  let N;
  (t[14] === M ? (N = t[15]) : ((N = [M]), (t[14] = M), (t[15] = N)), (0, Q.useEffect)(ge, N));
  let be = p === `plugins` && (C || se),
    P = D || m || be || (S && p === `settings` && pe);
  if (P) {
    let e;
    (t[16] !== f || t[17] !== _ ? ((e = we(_, f)), (t[16] = f), (t[17] = _), (t[18] = e)) : (e = t[18]),
      (O = e));
  }
  let xe = T?.status === `suspended` ? null : T?.live_url;
  if (
    (p === `plugins` && T != null && T.current_user_role !== `owner`) ||
    (E instanceof oe && (E.status === 403 || E.status === 404))
  ) {
    let e;
    return (
      t[19] === s ? (e = t[20]) : ((e = (0, $.jsx)(rt, { navigation: s, to: Ae })), (t[19] = s), (t[20] = e)),
      e
    );
  }
  if (p === `plugins` && !be && !ae) {
    let e;
    t[21] === f ? (e = t[22]) : ((e = Me(f)), (t[21] = f), (t[22] = e));
    let n;
    return (
      t[23] !== s || t[24] !== e
        ? ((n = (0, $.jsx)(rt, { navigation: s, to: e })), (t[23] = s), (t[24] = e), (t[25] = n))
        : (n = t[25]),
      n
    );
  }
  let Ce;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = {
        key: `settings`,
        name: (0, $.jsx)(l, {
          id: `appgenSiteDetail.navigation.settings`,
          defaultMessage: `Settings`,
          description: `Tab label for Site settings`,
        }),
        panelId: Bt,
      }),
      (t[26] = Ce))
    : (Ce = t[26]);
  let F;
  if (t[27] !== ce || t[28] !== k || t[29] !== ae || t[30] !== p || t[31] !== T?.current_user_role) {
    if (((F = [Ce]), ce || p === `analytics`)) {
      let e;
      (t[33] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = {
            key: `analytics`,
            name: (0, $.jsx)(l, {
              id: `appgenSiteDetail.navigation.analytics`,
              defaultMessage: `Analytics`,
              description: `Tab label for Site analytics`,
            }),
            panelId: It,
          }),
          (t[33] = e))
        : (e = t[33]),
        F.push(e));
    }
    let e;
    if (
      (t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = {
            key: `database`,
            name: (0, $.jsx)(l, {
              id: `appgenSiteDetail.navigation.database`,
              defaultMessage: `Database`,
              description: `Tab label for the Site database viewer`,
            }),
            panelId: Lt,
          }),
          (t[34] = e))
        : (e = t[34]),
      F.push(e),
      ae && T?.current_user_role === `owner`)
    ) {
      let e;
      (t[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { key: `plugins`, name: (0, $.jsx)(l, { ...Dt.navigation }), panelId: zt }), (t[35] = e))
        : (e = t[35]),
        F.push(e));
    }
    if (k) {
      let e;
      (t[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = {
            key: `automations`,
            name: (0, $.jsx)(l, {
              id: `appgenSiteDetail.navigation.automations`,
              defaultMessage: `Scheduled`,
              description: `Tab label for a Site's cloud scheduled tasks`,
            }),
            panelId: Rt,
          }),
          (t[36] = e))
        : (e = t[36]),
        F.push(e));
    }
    ((t[27] = ce), (t[28] = k), (t[29] = ae), (t[30] = p), (t[31] = T?.current_user_role), (t[32] = F));
  } else F = t[32];
  let I, L;
  bb0: switch (p) {
    case `plugins`: {
      I = zt;
      let e;
      (t[37] === y ? (e = t[38]) : ((e = y.formatMessage(Dt.navigation)), (t[37] = y), (t[38] = e)), (L = e));
      break bb0;
    }
    case `automations`: {
      I = Rt;
      let e;
      (t[39] === y
        ? (e = t[40])
        : ((e = y.formatMessage({
            id: `appgenSiteDetail.navigation.automations`,
            defaultMessage: `Scheduled`,
            description: `Tab label for a Site's cloud scheduled tasks`,
          })),
          (t[39] = y),
          (t[40] = e)),
        (L = e));
      break bb0;
    }
    case `settings`: {
      I = Bt;
      let e;
      (t[41] === y
        ? (e = t[42])
        : ((e = y.formatMessage({
            id: `appgenSiteDetail.navigation.settings`,
            defaultMessage: `Settings`,
            description: `Tab label for Site settings`,
          })),
          (t[41] = y),
          (t[42] = e)),
        (L = e));
      break bb0;
    }
    case `analytics`: {
      I = It;
      let e;
      (t[43] === y
        ? (e = t[44])
        : ((e = y.formatMessage({
            id: `appgenSiteDetail.navigation.analytics`,
            defaultMessage: `Analytics`,
            description: `Tab label for Site analytics`,
          })),
          (t[43] = y),
          (t[44] = e)),
        (L = e));
      break bb0;
    }
    case `database`: {
      I = Lt;
      let e;
      (t[45] === y
        ? (e = t[46])
        : ((e = y.formatMessage({
            id: `appgenSiteDetail.navigation.database`,
            defaultMessage: `Database`,
            description: `Tab label for the Site database viewer`,
          })),
          (t[45] = y),
          (t[46] = e)),
        (L = e));
    }
  }
  let De;
  t[47] !== xe || t[48] !== h || t[49] !== P || t[50] !== T || t[51] !== ie
    ? ((De =
        T == null || P
          ? void 0
          : () => {
              (Se(h, {
                action: g.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED,
                projectId: T.id,
                source: c.CODEX_APPGEN_INTERACTION_SOURCE_SITE_DETAILS,
              }),
                ye(h, ie, {
                  type: `edit`,
                  liveUrl: xe,
                  projectId: T.id,
                  projectTitle: T.title,
                  latestEditContext: T.latest_edit_context,
                }));
            }),
      (t[47] = xe),
      (t[48] = h),
      (t[49] = P),
      (t[50] = T),
      (t[51] = ie),
      (t[52] = De))
    : (De = t[52]);
  let Oe = De,
    z;
  t[53] !== v || t[54] !== s?.onNavigate
    ? ((z = () => {
        (s?.onNavigate ?? v)(`/sites`);
      }),
      (t[53] = v),
      (t[54] = s?.onNavigate),
      (t[55] = z))
    : (z = t[55]);
  let B;
  t[56] !== O || t[57] !== Oe || t[58] !== z
    ? ((B = (0, $.jsx)(Mt, { site: O, onBack: z, onEdit: Oe })),
      (t[56] = O),
      (t[57] = Oe),
      (t[58] = z),
      (t[59] = B))
    : (B = t[59]);
  let V = B,
    H;
  if (P) {
    let e;
    if (p === `settings`) {
      let n;
      (t[60] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(`div`, {
                className: `border-b border-subtle pb-6`,
                "aria-hidden": !0,
                children: (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-4`,
                  children: [
                    (0, $.jsx)(`div`, { className: `h-9 w-24`, children: (0, $.jsx)(R, { size: `fill` }) }),
                    (0, $.jsx)(R, { className: `w-24` }),
                  ],
                }),
              }),
              (0, $.jsx)(Qe, {}),
            ],
          })),
          (t[60] = n))
        : (n = t[60]),
        (e = n));
    } else if (p === `plugins`) {
      let n;
      (t[61] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(St, {})), (t[61] = n))
        : (n = t[61]),
        (e = n));
    } else if (p === `analytics`) {
      let n;
      (t[62] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(_e, { showIdentity: !1 })), (t[62] = n))
        : (n = t[62]),
        (e = n));
    } else {
      let n;
      t[63] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(`div`, {
            className: `border-b border-subtle pb-6`,
            "aria-hidden": !0,
            children: (0, $.jsx)(`div`, { className: `h-9 w-24`, children: (0, $.jsx)(R, { size: `fill` }) }),
          })),
          (t[63] = n))
        : (n = t[63]);
      let r;
      (t[64] === p
        ? (r = t[65])
        : ((r = (0, $.jsxs)($.Fragment, { children: [n, (0, $.jsx)(ft, { tab: p })] })),
          (t[64] = p),
          (t[65] = r)),
        (e = r));
    }
    let n;
    t[66] === O
      ? (n = t[67])
      : ((n =
          O == null
            ? (0, $.jsxs)(`div`, {
                className: `mb-2 flex min-w-0 items-center gap-4`,
                "aria-hidden": !0,
                children: [
                  (0, $.jsx)(`div`, {
                    className: `aspect-video w-28 shrink-0`,
                    children: (0, $.jsx)(R, { size: `fill` }),
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex min-w-0 flex-1 flex-col gap-2`,
                    children: [
                      (0, $.jsx)(R, { className: `w-1/2`, size: `lg` }),
                      (0, $.jsx)(R, { className: `w-2/3`, size: `sm` }),
                    ],
                  }),
                ],
              })
            : (0, $.jsx)(Nt, { site: O }, O.id)),
        (t[66] = O),
        (t[67] = n));
    let r;
    (t[68] !== e || t[69] !== n
      ? ((r = (0, $.jsxs)($.Fragment, { children: [n, e] })), (t[68] = e), (t[69] = n), (t[70] = r))
      : (r = t[70]),
      (H = r));
  } else if (ue || T == null) {
    let e;
    (t[71] === de
      ? (e = t[72])
      : ((e = (0, $.jsx)(Ft, { onRetry: () => void de() })), (t[71] = de), (t[72] = e)),
      (H = e));
  } else {
    let e;
    if (p === `settings`) {
      let n;
      (t[73] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(Qe, {})), (t[73] = n))
        : (n = t[73]),
        (e = n));
    } else if (p === `analytics`) {
      let n;
      (t[74] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(ke, {})), (t[74] = n))
        : (n = t[74]),
        (e = n));
    } else if (p === `plugins`) {
      let n;
      (t[75] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(St, {})), (t[75] = n))
        : (n = t[75]),
        (e = n));
    } else {
      let n;
      (t[76] === p ? (n = t[77]) : ((n = (0, $.jsx)(ft, { tab: p })), (t[76] = p), (t[77] = n)), (e = n));
    }
    let r;
    t[78] === T ? (r = t[79]) : ((r = (0, $.jsx)(Nt, { site: T }, T.id)), (t[78] = T), (t[79] = r));
    let i;
    t[80] === y
      ? (i = t[81])
      : ((i = y.formatMessage({
          id: `appgenSiteDetail.navigation.label`,
          defaultMessage: `Site details`,
          description: `Accessible label for navigation between Site settings, analytics, and database`,
        })),
        (t[80] = y),
        (t[81] = i));
    let a;
    t[82] !== v || t[83] !== s?.onNavigate || t[84] !== d || t[85] !== f
      ? ((a = (e) => {
          let t;
          bb228: switch (e) {
            case `plugins`:
              t = Fe(f);
              break bb228;
            case `automations`:
              t = Be(f);
              break bb228;
            case `settings`:
              t = Me(f);
              break bb228;
            case `analytics`:
              t = Ke(f);
              break bb228;
            case `database`:
              t = We(f);
          }
          (d?.(e).catch(jt), (s?.onNavigate ?? v)(t));
        }),
        (t[82] = v),
        (t[83] = s?.onNavigate),
        (t[84] = d),
        (t[85] = f),
        (t[86] = a))
      : (a = t[86]);
    let o;
    t[87] !== p || t[88] !== i || t[89] !== a || t[90] !== F
      ? ((o = (0, $.jsx)(`div`, {
          className: `pb-6`,
          children: (0, $.jsx)(Pe, {
            ariaLabel: i,
            selectedKey: p,
            tabs: F,
            scrollable: !0,
            variant: `browse`,
            onSelect: a,
          }),
        })),
        (t[87] = p),
        (t[88] = i),
        (t[89] = a),
        (t[90] = F),
        (t[91] = o))
      : (o = t[91]);
    let c;
    t[92] !== n || t[93] !== S || t[94] !== p || t[95] !== T || t[96] !== e
      ? ((c = p === `settings` && S ? n(T) : (0, $.jsx)(Q.Suspense, { fallback: e, children: n(T) }, p)),
        (t[92] = n),
        (t[93] = S),
        (t[94] = p),
        (t[95] = T),
        (t[96] = e),
        (t[97] = c))
      : (c = t[97]);
    let l;
    t[98] !== T || t[99] !== c
      ? ((l = (0, $.jsx)(Vt, { value: T, children: c })), (t[98] = T), (t[99] = c), (t[100] = l))
      : (l = t[100]);
    let u;
    t[101] !== I || t[102] !== L || t[103] !== l
      ? ((u = (0, $.jsx)(`div`, { id: I, "aria-label": L, role: `tabpanel`, children: l })),
        (t[101] = I),
        (t[102] = L),
        (t[103] = l),
        (t[104] = u))
      : (u = t[104]);
    let m;
    (t[105] !== r || t[106] !== o || t[107] !== u
      ? ((m = (0, $.jsxs)($.Fragment, { children: [r, o, u] })),
        (t[105] = r),
        (t[106] = o),
        (t[107] = u),
        (t[108] = m))
      : (m = t[108]),
      (H = m));
  }
  let U;
  t[109] !== V || t[110] !== b || t[111] !== s
    ? ((U =
        s == null
          ? (0, $.jsxs)($.Fragment, {
              children: [
                null,
                (0, $.jsx)($.Fragment, { children: (0, $.jsx)(je, { separator: b, children: V }) }),
              ],
            })
          : V),
      (t[109] = V),
      (t[110] = b),
      (t[111] = s),
      (t[112] = U))
    : (U = t[112]);
  let W;
  t[113] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (e) => {
        ne(e.currentTarget.scrollTop > 0);
      }),
      (t[113] = W))
    : (W = t[113]);
  let G;
  t[114] === H
    ? (G = t[115])
    : ((G = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1 scrollbar-stable overflow-y-auto px-panel pt-panel pb-panel md:pt-16`,
        onScroll: W,
        children: (0, $.jsx)(`div`, {
          className: `mx-auto flex w-full max-w-3xl flex-col gap-6 pb-8`,
          children: H,
        }),
      })),
      (t[114] = H),
      (t[115] = G));
  let Ie;
  return (
    t[116] !== U || t[117] !== G
      ? ((Ie = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: [U, G],
        })),
        (t[116] = U),
        (t[117] = G),
        (t[118] = Ie))
      : (Ie = t[118]),
    Ie
  );
}
function jt() {}
function Mt(e) {
  let n = (0, Z.c)(15),
    { onBack: r, onEdit: i, site: a } = e,
    o = a?.status === `suspended` ? null : a?.live_url,
    s,
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(f, { className: `rtl:rotate-180` })),
      (c = (0, $.jsx)(l, {
        id: `appgenSiteDetail.header.sites`,
        defaultMessage: `Sites`,
        description: `Back button from Site details to Sites`,
      })),
      (n[0] = s),
      (n[1] = c))
    : ((s = n[0]), (c = n[1]));
  let u;
  n[2] === r
    ? (u = n[3])
    : ((u = (0, $.jsxs)(t, { color: `ghostActive`, size: `toolbar`, onClick: r, children: [s, c] })),
      (n[2] = r),
      (n[3] = u));
  let d;
  n[4] === o
    ? (d = n[5])
    : ((d =
        o == null
          ? null
          : (0, $.jsxs)(ae, {
              color: `outlineSurface`,
              href: o,
              size: `toolbar`,
              onClick: (e) => {
                B({ event: e, href: o, initiator: `sites_library`, openAsWebsite: !0 });
              },
              children: [
                (0, $.jsx)(pe, {}),
                (0, $.jsx)(l, {
                  id: `appgenSiteDetail.visit`,
                  defaultMessage: `Visit`,
                  description: `Button on the Site details page that opens the published website`,
                }),
              ],
            })),
      (n[4] = o),
      (n[5] = d));
  let p;
  n[6] !== i || n[7] !== a
    ? ((p = a == null || i == null ? null : (0, $.jsx)(Pt, { site: a, onEdit: i })),
      (n[6] = i),
      (n[7] = a),
      (n[8] = p))
    : (p = n[8]);
  let m;
  n[9] !== d || n[10] !== p
    ? ((m = (0, $.jsxs)(Ge, { children: [d, p] })), (n[9] = d), (n[10] = p), (n[11] = m))
    : (m = n[11]);
  let h;
  return (
    n[12] !== u || n[13] !== m
      ? ((h = (0, $.jsxs)(Ve, { children: [u, m] })), (n[12] = u), (n[13] = m), (n[14] = h))
      : (h = n[14]),
    h
  );
}
function Nt(e) {
  let t = (0, Z.c)(20),
    { site: n } = e,
    { data: r, isLoading: i } = De(n.screenshot_url),
    [a, o] = (0, Q.useState)(r),
    s = n.screenshot_url == null ? void 0 : (r ?? a);
  s !== a && o(s);
  let c = n.status === `suspended` ? null : n.live_url,
    l;
  if (s != null) {
    let e;
    (t[0] === s
      ? (e = t[1])
      : ((e = (0, $.jsx)(`img`, { alt: ``, className: `size-full object-cover`, src: s })),
        (t[0] = s),
        (t[1] = e)),
      (l = e));
  } else if (i) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(R, { size: `fill` })), (t[2] = e))
      : (e = t[2]),
      (l = e));
  } else {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(S, { "aria-hidden": !0, className: `icon-md` })), (t[3] = e))
      : (e = t[3]),
      (l = e));
  }
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 rounded-lg ring-1 ring-border ring-inset`,
      })),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === l
    ? (d = t[6])
    : ((d = (0, $.jsxs)(`div`, {
        className: `relative flex h-15 w-26 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-secondary/92`,
        children: [l, u],
      })),
      (t[5] = l),
      (t[6] = d));
  let f;
  t[7] === n.title
    ? (f = t[8])
    : ((f = (0, $.jsx)(`h1`, {
        className: `text-2xl leading-8 font-normal wrap-anywhere text-default`,
        children: n.title,
      })),
      (t[7] = n.title),
      (t[8] = f));
  let p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(T, { "aria-hidden": !0, className: `shrink-0` })), (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] !== c || t[11] !== n.slug
    ? ((m = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1 text-sm leading-5 text-tertiary`,
        children: [
          p,
          c == null
            ? (0, $.jsx)(`span`, { className: `min-w-0 truncate`, children: n.slug })
            : (0, $.jsx)(Je, {
                className: `min-w-0 truncate text-sm`,
                appearance: `secondary`,
                underline: `hover`,
                href: c,
                initiator: `sites_library`,
                openAsWebsite: !0,
                children: Ie(c),
              }),
        ],
      })),
      (t[10] = c),
      (t[11] = n.slug),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] !== f || t[14] !== m
    ? ((h = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-2`, children: [f, m] })),
      (t[13] = f),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let g;
  return (
    t[16] !== n.title || t[17] !== d || t[18] !== h
      ? ((g = (0, $.jsxs)(`section`, {
          "aria-label": n.title,
          className: `flex min-w-0 items-center gap-4`,
          children: [d, h],
        })),
        (t[16] = n.title),
        (t[17] = d),
        (t[18] = h),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
function Pt(e) {
  let n = (0, Z.c)(9),
    { onEdit: r, site: i } = e,
    a = i.status === `suspended`,
    o,
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(p, { asset: s })),
      (c = (0, $.jsx)(l, {
        id: `appgenSiteDetail.edit`,
        defaultMessage: `Edit`,
        description: `Button label for editing a Site from its details page`,
      })),
      (n[0] = o),
      (n[1] = c))
    : ((o = n[0]), (c = n[1]));
  let u;
  n[2] !== a || n[3] !== r
    ? ((u = (0, $.jsxs)(t, {
        color: `outlineSurface`,
        disabled: a,
        size: `toolbar`,
        onClick: r,
        children: [o, c],
      })),
      (n[2] = a),
      (n[3] = r),
      (n[4] = u))
    : (u = n[4]);
  let d = u,
    f;
  return (
    n[5] !== d || n[6] !== a || n[7] !== i.disabled_by
      ? ((f = a
          ? (0, $.jsx)(ue, {
              interactive: i.disabled_by === `openai`,
              tooltipContent: (0, $.jsx)(Ze, { disabledBy: i.disabled_by }),
              children: d,
            })
          : d),
        (n[5] = d),
        (n[6] = a),
        (n[7] = i.disabled_by),
        (n[8] = f))
      : (f = n[8]),
    f
  );
}
function Ft(e) {
  let n = (0, Z.c)(6),
    { onRetry: r } = e,
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(l, {
        id: `appgenSiteDetail.error.retry`,
        defaultMessage: `Retry`,
        description: `Button to retry loading Site details after a load failure`,
      })),
      (n[0] = i))
    : (i = n[0]);
  let a;
  n[1] === r
    ? (a = n[2])
    : ((a = (0, $.jsx)(t, { color: `outline`, onClick: r, children: i })), (n[1] = r), (n[2] = a));
  let o;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(l, {
        id: `appgenSiteDetail.error.title`,
        defaultMessage: `Unable to load site`,
        description: `Error state shown when Site details cannot load`,
      })),
      (n[3] = o))
    : (o = n[3]);
  let s;
  return (
    n[4] === a
      ? (s = n[5])
      : ((s = (0, $.jsx)(N, { className: `min-h-96 flex-1`, actions: a, title: o })), (n[4] = a), (n[5] = s)),
    s
  );
}
var Z, Q, $, It, Lt, Rt, zt, Bt, Vt;
function Ht() {
  return (Ht = e(() => {
    ((Z = A()),
      b(),
      ne(),
      O(),
      _(),
      (Q = M()),
      C(),
      re(),
      Oe(),
      V(),
      D(),
      qe(),
      F(),
      m(),
      y(),
      Le(),
      U(),
      Re(),
      ie(),
      Ce(),
      v(),
      me(),
      W(),
      L(),
      fe(),
      G(),
      xe(),
      Xe(),
      Ye(),
      H(),
      nt(),
      st(),
      I(),
      vt(),
      He(),
      Et(),
      Ot(),
      be(),
      ($ = j()),
      (It = `appgen-site-detail-analytics`),
      (Lt = `appgen-site-detail-database`),
      (Rt = `appgen-site-detail-automations`),
      (zt = `appgen-site-detail-plugins`),
      (Bt = `appgen-site-detail-settings`),
      (Vt = (0, Q.createContext)(null)));
  }))();
}
export {
  yt as a,
  ht as c,
  lt as d,
  dt as f,
  nt as g,
  Qe as h,
  Et as i,
  vt as l,
  st as m,
  Ht as n,
  xt as o,
  rt as p,
  Ct as r,
  pt as s,
  kt as t,
  ct as u,
};
//# sourceMappingURL=appgen-site-detail-layout-f1525d985a83.js.map
