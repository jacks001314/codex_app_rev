import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $C as n,
  $St as r,
  $st as i,
  A6 as a,
  BL as o,
  D4 as s,
  DB as c,
  FBt as l,
  LNt as u,
  Lst as d,
  M6 as f,
  Mst as p,
  NH as m,
  NSt as h,
  O4 as g,
  OB as _,
  PBt as v,
  Pit as y,
  Qst as b,
  Rst as ee,
  SSt as te,
  TY as ne,
  UQ as x,
  USt as re,
  VL as ie,
  WQ as ae,
  X3 as S,
  XOt as C,
  Y3 as w,
  YOt as oe,
  Z3 as T,
  ZSt as se,
  bV as ce,
  e3 as E,
  ew as D,
  iCt as le,
  j6 as ue,
  jit as de,
  jst as fe,
  lG as pe,
  nB as me,
  nCt as he,
  okt as ge,
  rB as _e,
  sw as ve,
  tkt as O,
  uw as k,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $_n as ye,
  BW as be,
  CAr as xe,
  Cjr as Se,
  Cqt as A,
  DV as Ce,
  Dqt as we,
  EAr as Te,
  EV as j,
  F7n as M,
  GLn as Ee,
  I7n as N,
  Jvn as P,
  L7n as F,
  Ovn as De,
  SAr as Oe,
  SRn as I,
  UI as L,
  VI as ke,
  VW as Ae,
  XEn as R,
  XRt as je,
  YEn as z,
  ZRt as B,
  aSn as V,
  adt as H,
  bAr as Me,
  bRn as U,
  cA as W,
  cSn as Ne,
  do as Pe,
  idt as Fe,
  lBr as Ie,
  mAr as Le,
  mBr as Re,
  nvn as ze,
  oSn as Be,
  qLn as Ve,
  rdt as He,
  rvn as Ue,
  sA as G,
  uo as We,
  wjr as Ge,
  xAr as Ke,
  xjr as qe,
  yAr as Je,
  zvn as Ye,
} from "./app-initial-ad16eaadf81f.js";
import { n as Xe, t as Ze } from "./appgen-disabled-tooltip-72287f1924e6.js";
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
              children: (0, K.jsx)(O, {
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
  let { key: t, rows: r } = e;
  return (0, K.jsxs)(
    G,
    {
      children: [
        (0, K.jsx)(G.Header, {
          title: (0, K.jsx)(M, { className: `w-32`, size: `lg` }),
          subtitle: (0, K.jsx)(M, { className: `mt-2 w-1/2`, size: `sm` }),
        }),
        (0, K.jsx)(G.Content, {
          children: (0, K.jsx)(n, { variant: `flat`, children: Array.from({ length: r }, et) }),
        }),
      ],
    },
    t,
  );
}
function et(e, t) {
  return (0, K.jsx)(
    ve,
    {
      layout: `split`,
      label: (0, K.jsx)(M, { className: `w-24`, size: `md` }),
      description: (0, K.jsx)(M, { className: `mt-2 w-40`, size: `sm` }),
      control: (0, K.jsx)(`div`, { className: `h-9 w-40`, children: (0, K.jsx)(M, { size: `fill` }) }),
    },
    t,
  );
}
var tt, K;
function nt() {
  return (nt = e(() => {
    ((tt = v()), C(), F(), W(), k(), D(), (K = u()));
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
      ? ((s = i == null ? (0, ot.jsx)(te, { replace: !0, to: r }) : null), (t[4] = i), (t[5] = r), (t[6] = s))
      : (s = t[6]),
    s
  );
}
var it, at, ot;
function st() {
  return (st = e(() => {
    ((it = v()), (at = l()), h(), (ot = u()));
  }))();
}
function ct(e) {
  let n = (0, ut.c)(16),
    { disabled: r, isRefreshing: i, onRefresh: a } = e,
    o = r === void 0 || r,
    s = i !== void 0 && i,
    l = ge(),
    u;
  n[0] !== l || n[1] !== s
    ? ((u = s
        ? l.formatMessage({
            id: `appgenSettings.database.refreshing.ariaLabel`,
            defaultMessage: `Refreshing database`,
            description: `Accessible label while refreshing live Site database data`,
          })
        : l.formatMessage({
            id: `appgenSettings.database.refresh.ariaLabel`,
            defaultMessage: `Refresh database`,
            description: `Accessible label for refreshing live Site database data`,
          })),
      (n[0] = l),
      (n[1] = s),
      (n[2] = u))
    : (u = n[2]);
  let d;
  n[3] === s ? (d = n[4]) : ((d = s ? null : (0, q.jsx)(c, { asset: t })), (n[3] = s), (n[4] = d));
  let f;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(O, {
        id: `appgenSettings.database.refresh`,
        defaultMessage: `Refresh`,
        description: `Button label for refreshing live Site database data`,
      })),
      (n[5] = f))
    : (f = n[5]);
  let p;
  n[6] !== o || n[7] !== s || n[8] !== a || n[9] !== u || n[10] !== d
    ? ((p = (0, q.jsxs)(w, {
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
      (n[11] = p))
    : (p = n[11]);
  let m, h;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, q.jsx)(O, {
        id: `appgenSettings.database.description`,
        defaultMessage: `View the data used by your live site`,
        description: `Description for the Site database viewer`,
      })),
      (h = (0, q.jsx)(O, {
        id: `appgenSettings.database.title`,
        defaultMessage: `Database`,
        description: `Heading for the Site database viewer`,
      })),
      (n[12] = m),
      (n[13] = h))
    : ((m = n[12]), (h = n[13]));
  let g;
  return (
    n[14] === p
      ? (g = n[15])
      : ((g = (0, q.jsx)(G.Header, { size: `base`, actions: p, subtitle: m, title: h })),
        (n[14] = p),
        (n[15] = g)),
    g
  );
}
function lt(e) {
  let t = (0, ut.c)(9),
    { disabled: n, filter: r, onCreate: i } = e,
    a = n === void 0 || n,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, q.jsx)(O, {
        id: `appgenAutomations.title`,
        defaultMessage: `Scheduled tasks`,
        description: `Heading for the list of a Site's cloud scheduled tasks`,
      })),
      (s = (0, q.jsx)(O, {
        id: `appgenAutomations.description`,
        defaultMessage: `Update your site automatically on a schedule`,
        description: `Description of the Site Scheduled tab`,
      })),
      (t[0] = o),
      (t[1] = s))
    : ((o = t[0]), (s = t[1]));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, q.jsx)(O, {
        id: `appgenAutomations.createTask`,
        defaultMessage: `Create task`,
        description: `Button to open the existing cloud task setup for this Site`,
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== a || t[4] !== i
    ? ((l = (0, q.jsx)(w, {
        color: `outlineSurface`,
        radius: `large`,
        size: `composerSmLabel`,
        disabled: a,
        onClick: i,
        children: c,
      })),
      (t[3] = a),
      (t[4] = i),
      (t[5] = l))
    : (l = t[5]);
  let u;
  return (
    t[6] !== r || t[7] !== l
      ? ((u = (0, q.jsx)(G.Header, {
          size: `base`,
          subtitleWrap: `wrap`,
          title: o,
          subtitle: s,
          actions: (0, q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [r, l] }),
        })),
        (t[6] = r),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
var ut, q;
function dt() {
  return (dt = e(() => {
    ((ut = v()), E(), C(), T(), _(), W(), (q = u()));
  }))();
}
function ft(e) {
  let t = (0, _t.c)(7),
    { tab: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r === `database` ? (0, J.jsx)(ct, {}) : (0, J.jsx)(lt, {})), (t[0] = r), (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, J.jsx)(G.Content, {
        children: r === `database` ? (0, J.jsx)(n, { children: (0, J.jsx)(pt, {}) }) : (0, J.jsx)(ht, {}),
      })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, J.jsxs)(G, { children: [i, a] })), (t[4] = i), (t[5] = a), (t[6] = o))
      : (o = t[6]),
    o
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
        (0, J.jsx)(O, {
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
  return (0, J.jsx)(N, { lines: 5 }, e);
}
function ht() {
  let e = (0, _t.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, J.jsx)(`span`, {
        className: `sr-only`,
        children: (0, J.jsx)(O, {
          id: `appgenAutomations.loading`,
          defaultMessage: `Loading scheduled tasks…`,
          description: `Accessible loading status while the Scheduled tab for a Site loads its linked cloud tasks`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, J.jsxs)(`div`, {
          "aria-busy": `true`,
          role: `status`,
          children: [
            t,
            (0, J.jsx)(n, {
              dividers: !1,
              children: (0, J.jsx)(`div`, { className: `p-3`, children: [0, 1, 2].map(gt) }),
            }),
          ],
        })),
        (e[1] = r))
      : (r = e[1]),
    r
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
          children: (0, J.jsx)(M, { className: `w-32 max-w-full`, size: `md` }),
        }),
        (0, J.jsx)(`div`, {
          className: `flex h-4 items-center`,
          children: (0, J.jsx)(M, { className: `w-48 max-w-full`, size: `sm` }),
        }),
      ],
    },
    e,
  );
}
var _t, J;
function vt() {
  return (vt = e(() => {
    ((_t = v()), C(), F(), W(), D(), dt(), (J = u()));
  }))();
}
function yt(e) {
  let t = (0, bt.c)(19),
    { disabled: n, isRefreshing: r, onAdd: i, onRefresh: a } = e,
    o = n === void 0 || n,
    l = r !== void 0 && r,
    u = ge(),
    d,
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Y.jsx)(O, {
        id: `appgenPlugins.title`,
        defaultMessage: `Site plugins`,
        description: `Heading in a Site's Plugins settings tab, viewed by its owner or editor. Plugins is the product term for integrations the site can use.`,
      })),
      (f = (0, Y.jsx)(O, {
        id: `appgenPlugins.description`,
        defaultMessage: `View and manage plugins used by this site`,
        description: `Subtitle in a Site's Plugins settings tab explaining that the list shows plugins configured for this site, rather than every plugin installed by its owner.`,
      })),
      (t[0] = d),
      (t[1] = f))
    : ((d = t[0]), (f = t[1]));
  let p;
  t[2] === u
    ? (p = t[3])
    : ((p = u.formatMessage({
        id: `appgenPlugins.refresh.ariaLabel`,
        defaultMessage: `Refresh plugins`,
        description: `Accessible label on the refresh icon button in a Site's Plugins settings tab. Activating it reloads the site's current plugin configuration.`,
      })),
      (t[2] = u),
      (t[3] = p));
  let m = a == null || l,
    h = l ? `motion-safe:animate-spin` : void 0,
    g;
  t[4] === h ? (g = t[5]) : ((g = (0, Y.jsx)(c, { className: h, asset: s })), (t[4] = h), (t[5] = g));
  let _;
  t[6] !== l || t[7] !== a || t[8] !== p || t[9] !== m || t[10] !== g
    ? ((_ = (0, Y.jsx)(w, {
        uniform: !0,
        "aria-busy": l,
        "aria-label": p,
        color: `ghost`,
        disabled: m,
        radius: `small`,
        size: `composerSmLabel`,
        type: `button`,
        onClick: a,
        children: g,
      })),
      (t[6] = l),
      (t[7] = a),
      (t[8] = p),
      (t[9] = m),
      (t[10] = g),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Y.jsx)(O, {
        id: `appgenPlugins.add`,
        defaultMessage: `Add`,
        description: `Short button label in a Site's Plugins settings header. Opens a chat with a draft asking to add a plugin to this site; the user sends the draft.`,
      })),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] !== o || t[14] !== i
    ? ((y = (0, Y.jsx)(w, {
        color: `secondary`,
        disabled: o,
        radius: `large`,
        size: `composerSmLabel`,
        type: `button`,
        onClick: i,
        children: v,
      })),
      (t[13] = o),
      (t[14] = i),
      (t[15] = y))
    : (y = t[15]);
  let b;
  return (
    t[16] !== y || t[17] !== _
      ? ((b = (0, Y.jsx)(G.Header, {
          size: `base`,
          subtitleWrap: `wrap`,
          title: d,
          subtitle: f,
          actions: (0, Y.jsxs)(Y.Fragment, { children: [_, y] }),
        })),
        (t[16] = y),
        (t[17] = _),
        (t[18] = b))
      : (b = t[18]),
    b
  );
}
var bt, Y;
function xt() {
  return (xt = e(() => {
    ((bt = v()), g(), C(), T(), _(), W(), (Y = u()));
  }))();
}
function St() {
  let e = (0, Tt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsxs)(G, { children: [(0, X.jsx)(yt, {}), (0, X.jsx)(Ct, {})] })), (e[0] = t))
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
        children: (0, X.jsx)(O, {
          id: `appgenPlugins.loading`,
          defaultMessage: `Loading plugins…`,
          description: `Accessible status announced while a Site's Plugins settings tab loads its current plugin configuration.`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsxs)(`div`, {
          "aria-busy": `true`,
          role: `status`,
          children: [t, (0, X.jsx)(n, { children: [0, 1, 2].map(wt) })],
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
function wt(e) {
  return (0, X.jsx)(
    ve,
    {
      control: null,
      description: (0, X.jsx)(M, { className: `w-32`, size: `sm` }),
      label: (0, X.jsx)(M, { className: `w-24`, size: `md` }),
    },
    e,
  );
}
var Tt, X;
function Et() {
  return (Et = e(() => {
    ((Tt = v()), C(), F(), W(), k(), D(), xt(), (X = u()));
  }))();
}
var Dt;
function Ot() {
  return (Ot = e(() => {
    (C(),
      (Dt = oe({
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
    { children: n, loadingOnly: i, navigation: o, prefetchTab: s, projectId: c, selectedTab: l } = e,
    u = i !== void 0 && i,
    d = r(b),
    m = ee(),
    h = re(),
    g = ge(),
    [_, v] = (0, Q.useState)(!1),
    [y, te] = (0, Q.useState)(l === `settings`);
  y && l !== `settings` && te(!1);
  let ne = we(),
    x = Se(`1855826876`),
    ie = Ge(`1855826876`),
    ae = le(Re),
    S = Se(`262557526`),
    C;
  t[0] === c ? (C = t[1]) : ((C = ye(c)), (t[0] = c), (t[1] = C));
  let { data: w, error: oe, isError: T, isLoading: se, refetch: ce } = p(C),
    E;
  if (w != null) E = w;
  else if (se) {
    let e;
    (t[2] !== c || t[3] !== m ? ((e = ze(m, c)), (t[2] = c), (t[3] = m), (t[4] = e)) : (e = t[4]), (E = e));
  }
  let D = w != null,
    fe = l === `settings` && D,
    pe;
  t[5] === fe ? (pe = t[6]) : ((pe = { enabled: fe }), (t[5] = fe), (t[6] = pe));
  let { isLoading: me } = he(De, c, pe),
    _e;
  t[7] !== c || t[8] !== d || t[9] !== l
    ? ((_e = () => {
        let e;
        bb21: switch (l) {
          case `plugins`:
          case `automations`:
            return;
          case `analytics`:
            e = ue.CODEX_APPGEN_INTERACTION_PAGE_ANALYTICS;
            break bb21;
          case `database`:
            e = ue.CODEX_APPGEN_INTERACTION_PAGE_DATABASE;
            break bb21;
          case `settings`:
            e = ue.CODEX_APPGEN_INTERACTION_PAGE_SETTINGS;
        }
        Ce(d, {
          action: a.CODEX_APPGEN_INTERACTION_ACTION_PAGE_VIEWED,
          page: e,
          projectId: c,
          source: f.CODEX_APPGEN_INTERACTION_SOURCE_SITE_DETAILS,
        });
      }),
      (t[7] = c),
      (t[8] = d),
      (t[9] = l),
      (t[10] = _e))
    : (_e = t[10]);
  let ve = (0, Q.useEffectEvent)(_e),
    k =
      w == null ||
      u ||
      se ||
      T ||
      (l === `settings` && !D) ||
      l === `automations` ||
      l === `plugins` ||
      (l === `analytics` && !S)
        ? null
        : `${w.id}:${l}`,
    be;
  t[11] !== ve || t[12] !== k
    ? ((be = () => {
        k != null && ve();
      }),
      (t[11] = ve),
      (t[12] = k),
      (t[13] = be))
    : (be = t[13]);
  let A;
  (t[14] === k ? (A = t[15]) : ((A = [k]), (t[14] = k), (t[15] = A)), (0, Q.useEffect)(be, A));
  let Te = l === `plugins` && (ae || ie),
    j = se || u || Te || (y && l === `settings` && me);
  if (j) {
    let e;
    (t[16] !== c || t[17] !== m ? ((e = ze(m, c)), (t[16] = c), (t[17] = m), (t[18] = e)) : (e = t[18]),
      (E = e));
  }
  let Ee = w?.status === `suspended` ? null : w?.live_url;
  if (
    (l === `plugins` && w != null && w.current_user_role !== `owner`) ||
    (oe instanceof de && (oe.status === 403 || oe.status === 404))
  ) {
    let e;
    return (
      t[19] === o ? (e = t[20]) : ((e = (0, $.jsx)(rt, { navigation: o, to: Le })), (t[19] = o), (t[20] = e)),
      e
    );
  }
  if (l === `plugins` && !Te && !x) {
    let e;
    t[21] === c ? (e = t[22]) : ((e = xe(c)), (t[21] = c), (t[22] = e));
    let n;
    return (
      t[23] !== o || t[24] !== e
        ? ((n = (0, $.jsx)(rt, { navigation: o, to: e })), (t[23] = o), (t[24] = e), (t[25] = n))
        : (n = t[25]),
      n
    );
  }
  let N;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = {
        key: `settings`,
        name: (0, $.jsx)(O, {
          id: `appgenSiteDetail.navigation.settings`,
          defaultMessage: `Settings`,
          description: `Tab label for Site settings`,
        }),
        panelId: Bt,
      }),
      (t[26] = N))
    : (N = t[26]);
  let P;
  if (t[27] !== S || t[28] !== D || t[29] !== x || t[30] !== l || t[31] !== w?.current_user_role) {
    if (((P = [N]), S || l === `analytics`)) {
      let e;
      (t[33] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = {
            key: `analytics`,
            name: (0, $.jsx)(O, {
              id: `appgenSiteDetail.navigation.analytics`,
              defaultMessage: `Analytics`,
              description: `Tab label for Site analytics`,
            }),
            panelId: It,
          }),
          (t[33] = e))
        : (e = t[33]),
        P.push(e));
    }
    let e;
    if (
      (t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = {
            key: `database`,
            name: (0, $.jsx)(O, {
              id: `appgenSiteDetail.navigation.database`,
              defaultMessage: `Database`,
              description: `Tab label for the Site database viewer`,
            }),
            panelId: Lt,
          }),
          (t[34] = e))
        : (e = t[34]),
      P.push(e),
      x && w?.current_user_role === `owner`)
    ) {
      let e;
      (t[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { key: `plugins`, name: (0, $.jsx)(O, { ...Dt.navigation }), panelId: zt }), (t[35] = e))
        : (e = t[35]),
        P.push(e));
    }
    if (D) {
      let e;
      (t[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = {
            key: `automations`,
            name: (0, $.jsx)(O, {
              id: `appgenSiteDetail.navigation.automations`,
              defaultMessage: `Scheduled`,
              description: `Tab label for a Site's cloud scheduled tasks`,
            }),
            panelId: Rt,
          }),
          (t[36] = e))
        : (e = t[36]),
        P.push(e));
    }
    ((t[27] = S), (t[28] = D), (t[29] = x), (t[30] = l), (t[31] = w?.current_user_role), (t[32] = P));
  } else P = t[32];
  let F, I;
  bb0: switch (l) {
    case `plugins`: {
      F = zt;
      let e;
      (t[37] === g ? (e = t[38]) : ((e = g.formatMessage(Dt.navigation)), (t[37] = g), (t[38] = e)), (I = e));
      break bb0;
    }
    case `automations`: {
      F = Rt;
      let e;
      (t[39] === g
        ? (e = t[40])
        : ((e = g.formatMessage({
            id: `appgenSiteDetail.navigation.automations`,
            defaultMessage: `Scheduled`,
            description: `Tab label for a Site's cloud scheduled tasks`,
          })),
          (t[39] = g),
          (t[40] = e)),
        (I = e));
      break bb0;
    }
    case `settings`: {
      F = Bt;
      let e;
      (t[41] === g
        ? (e = t[42])
        : ((e = g.formatMessage({
            id: `appgenSiteDetail.navigation.settings`,
            defaultMessage: `Settings`,
            description: `Tab label for Site settings`,
          })),
          (t[41] = g),
          (t[42] = e)),
        (I = e));
      break bb0;
    }
    case `analytics`: {
      F = It;
      let e;
      (t[43] === g
        ? (e = t[44])
        : ((e = g.formatMessage({
            id: `appgenSiteDetail.navigation.analytics`,
            defaultMessage: `Analytics`,
            description: `Tab label for Site analytics`,
          })),
          (t[43] = g),
          (t[44] = e)),
        (I = e));
      break bb0;
    }
    case `database`: {
      F = Lt;
      let e;
      (t[45] === g
        ? (e = t[46])
        : ((e = g.formatMessage({
            id: `appgenSiteDetail.navigation.database`,
            defaultMessage: `Database`,
            description: `Tab label for the Site database viewer`,
          })),
          (t[45] = g),
          (t[46] = e)),
        (I = e));
    }
  }
  let L;
  t[47] !== Ee || t[48] !== d || t[49] !== j || t[50] !== w || t[51] !== ne
    ? ((L =
        w == null || j
          ? void 0
          : () => {
              (Ce(d, {
                action: a.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED,
                projectId: w.id,
                source: f.CODEX_APPGEN_INTERACTION_SOURCE_SITE_DETAILS,
              }),
                Ae(d, ne, {
                  type: `edit`,
                  liveUrl: Ee,
                  projectId: w.id,
                  projectTitle: w.title,
                  latestEditContext: w.latest_edit_context,
                }));
            }),
      (t[47] = Ee),
      (t[48] = d),
      (t[49] = j),
      (t[50] = w),
      (t[51] = ne),
      (t[52] = L))
    : (L = t[52]);
  let ke = L,
    R;
  t[53] !== h || t[54] !== o?.onNavigate
    ? ((R = () => {
        (o?.onNavigate ?? h)(`/sites`);
      }),
      (t[53] = h),
      (t[54] = o?.onNavigate),
      (t[55] = R))
    : (R = t[55]);
  let z;
  t[56] !== E || t[57] !== ke || t[58] !== R
    ? ((z = (0, $.jsx)(Mt, { site: E, onBack: R, onEdit: ke })),
      (t[56] = E),
      (t[57] = ke),
      (t[58] = R),
      (t[59] = z))
    : (z = t[59]);
  let B = z,
    V;
  if (j) {
    let e;
    if (l === `settings`) {
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
                    (0, $.jsx)(`div`, { className: `h-9 w-24`, children: (0, $.jsx)(M, { size: `fill` }) }),
                    (0, $.jsx)(M, { className: `w-24` }),
                  ],
                }),
              }),
              (0, $.jsx)(Qe, {}),
            ],
          })),
          (t[60] = n))
        : (n = t[60]),
        (e = n));
    } else if (l === `plugins`) {
      let n;
      (t[61] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(St, {})), (t[61] = n))
        : (n = t[61]),
        (e = n));
    } else if (l === `analytics`) {
      let n;
      (t[62] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(Fe, { showIdentity: !1 })), (t[62] = n))
        : (n = t[62]),
        (e = n));
    } else {
      let n;
      t[63] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(`div`, {
            className: `border-b border-subtle pb-6`,
            "aria-hidden": !0,
            children: (0, $.jsx)(`div`, { className: `h-9 w-24`, children: (0, $.jsx)(M, { size: `fill` }) }),
          })),
          (t[63] = n))
        : (n = t[63]);
      let r;
      (t[64] === l
        ? (r = t[65])
        : ((r = (0, $.jsxs)($.Fragment, { children: [n, (0, $.jsx)(ft, { tab: l })] })),
          (t[64] = l),
          (t[65] = r)),
        (e = r));
    }
    let n;
    t[66] === E
      ? (n = t[67])
      : ((n =
          E == null
            ? (0, $.jsxs)(`div`, {
                className: `mb-2 flex min-w-0 items-center gap-4`,
                "aria-hidden": !0,
                children: [
                  (0, $.jsx)(`div`, {
                    className: `aspect-video w-28 shrink-0`,
                    children: (0, $.jsx)(M, { size: `fill` }),
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex min-w-0 flex-1 flex-col gap-2`,
                    children: [
                      (0, $.jsx)(M, { className: `w-1/2`, size: `lg` }),
                      (0, $.jsx)(M, { className: `w-2/3`, size: `sm` }),
                    ],
                  }),
                ],
              })
            : (0, $.jsx)(Nt, { site: E }, E.id)),
        (t[66] = E),
        (t[67] = n));
    let r;
    (t[68] !== e || t[69] !== n
      ? ((r = (0, $.jsxs)($.Fragment, { children: [n, e] })), (t[68] = e), (t[69] = n), (t[70] = r))
      : (r = t[70]),
      (V = r));
  } else if (T || w == null) {
    let e;
    (t[71] === ce
      ? (e = t[72])
      : ((e = (0, $.jsx)(Ft, { onRetry: () => void ce() })), (t[71] = ce), (t[72] = e)),
      (V = e));
  } else {
    let e;
    if (l === `settings`) {
      let n;
      (t[73] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(Qe, {})), (t[73] = n))
        : (n = t[73]),
        (e = n));
    } else if (l === `analytics`) {
      let n;
      (t[74] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(He, {})), (t[74] = n))
        : (n = t[74]),
        (e = n));
    } else if (l === `plugins`) {
      let n;
      (t[75] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(St, {})), (t[75] = n))
        : (n = t[75]),
        (e = n));
    } else {
      let n;
      (t[76] === l ? (n = t[77]) : ((n = (0, $.jsx)(ft, { tab: l })), (t[76] = l), (t[77] = n)), (e = n));
    }
    let r;
    t[78] === w ? (r = t[79]) : ((r = (0, $.jsx)(Nt, { site: w }, w.id)), (t[78] = w), (t[79] = r));
    let i;
    t[80] === g
      ? (i = t[81])
      : ((i = g.formatMessage({
          id: `appgenSiteDetail.navigation.label`,
          defaultMessage: `Site details`,
          description: `Accessible label for navigation between Site settings, analytics, and database`,
        })),
        (t[80] = g),
        (t[81] = i));
    let a;
    t[82] !== h || t[83] !== o?.onNavigate || t[84] !== s || t[85] !== c
      ? ((a = (e) => {
          let t;
          bb228: switch (e) {
            case `plugins`:
              t = Oe(c);
              break bb228;
            case `automations`:
              t = Me(c);
              break bb228;
            case `settings`:
              t = xe(c);
              break bb228;
            case `analytics`:
              t = Je(c);
              break bb228;
            case `database`:
              t = Ke(c);
          }
          (s?.(e).catch(jt), (o?.onNavigate ?? h)(t));
        }),
        (t[82] = h),
        (t[83] = o?.onNavigate),
        (t[84] = s),
        (t[85] = c),
        (t[86] = a))
      : (a = t[86]);
    let u;
    t[87] !== l || t[88] !== i || t[89] !== a || t[90] !== P
      ? ((u = (0, $.jsx)(`div`, {
          className: `pb-6`,
          children: (0, $.jsx)(We, {
            ariaLabel: i,
            selectedKey: l,
            tabs: P,
            scrollable: !0,
            variant: `browse`,
            onSelect: a,
          }),
        })),
        (t[87] = l),
        (t[88] = i),
        (t[89] = a),
        (t[90] = P),
        (t[91] = u))
      : (u = t[91]);
    let d;
    t[92] !== n || t[93] !== y || t[94] !== l || t[95] !== w || t[96] !== e
      ? ((d = l === `settings` && y ? n(w) : (0, $.jsx)(Q.Suspense, { fallback: e, children: n(w) }, l)),
        (t[92] = n),
        (t[93] = y),
        (t[94] = l),
        (t[95] = w),
        (t[96] = e),
        (t[97] = d))
      : (d = t[97]);
    let f;
    t[98] !== w || t[99] !== d
      ? ((f = (0, $.jsx)(Vt, { value: w, children: d })), (t[98] = w), (t[99] = d), (t[100] = f))
      : (f = t[100]);
    let p;
    t[101] !== F || t[102] !== I || t[103] !== f
      ? ((p = (0, $.jsx)(`div`, { id: F, "aria-label": I, role: `tabpanel`, children: f })),
        (t[101] = F),
        (t[102] = I),
        (t[103] = f),
        (t[104] = p))
      : (p = t[104]);
    let m;
    (t[105] !== r || t[106] !== u || t[107] !== p
      ? ((m = (0, $.jsxs)($.Fragment, { children: [r, u, p] })),
        (t[105] = r),
        (t[106] = u),
        (t[107] = p),
        (t[108] = m))
      : (m = t[108]),
      (V = m));
  }
  let H;
  t[109] !== B || t[110] !== _ || t[111] !== o
    ? ((H =
        o == null
          ? (0, $.jsxs)($.Fragment, {
              children: [
                null,
                (0, $.jsx)($.Fragment, { children: (0, $.jsx)(je, { separator: _, children: B }) }),
              ],
            })
          : B),
      (t[109] = B),
      (t[110] = _),
      (t[111] = o),
      (t[112] = H))
    : (H = t[112]);
  let U;
  t[113] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (e) => {
        v(e.currentTarget.scrollTop > 0);
      }),
      (t[113] = U))
    : (U = t[113]);
  let W;
  t[114] === V
    ? (W = t[115])
    : ((W = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1 scrollbar-stable overflow-y-auto px-panel pt-panel pb-panel md:pt-16`,
        onScroll: U,
        children: (0, $.jsx)(`div`, {
          className: `mx-auto flex w-full max-w-3xl flex-col gap-6 pb-8`,
          children: V,
        }),
      })),
      (t[114] = V),
      (t[115] = W));
  let Ne;
  return (
    t[116] !== H || t[117] !== W
      ? ((Ne = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: [H, W],
        })),
        (t[116] = H),
        (t[117] = W),
        (t[118] = Ne))
      : (Ne = t[118]),
    Ne
  );
}
function jt() {}
function Mt(e) {
  let t = (0, Z.c)(15),
    { onBack: n, onEdit: r, site: i } = e,
    a = i?.status === `suspended` ? null : i?.live_url,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(m, { className: `rtl:rotate-180` })),
      (s = (0, $.jsx)(O, {
        id: `appgenSiteDetail.header.sites`,
        defaultMessage: `Sites`,
        description: `Back button from Site details to Sites`,
      })),
      (t[0] = o),
      (t[1] = s))
    : ((o = t[0]), (s = t[1]));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, $.jsxs)(w, { color: `ghostActive`, size: `toolbar`, onClick: n, children: [o, s] })),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] === a
    ? (l = t[5])
    : ((l =
        a == null
          ? null
          : (0, $.jsxs)(S, {
              color: `outlineSurface`,
              href: a,
              size: `toolbar`,
              onClick: (e) => {
                I({ event: e, href: a, initiator: `sites_library`, openAsWebsite: !0 });
              },
              children: [
                (0, $.jsx)(ce, {}),
                (0, $.jsx)(O, {
                  id: `appgenSiteDetail.visit`,
                  defaultMessage: `Visit`,
                  description: `Button on the Site details page that opens the published website`,
                }),
              ],
            })),
      (t[4] = a),
      (t[5] = l));
  let u;
  t[6] !== r || t[7] !== i
    ? ((u = i == null || r == null ? null : (0, $.jsx)(Pt, { site: i, onEdit: r })),
      (t[6] = r),
      (t[7] = i),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] !== l || t[10] !== u
    ? ((d = (0, $.jsxs)(Be, { children: [l, u] })), (t[9] = l), (t[10] = u), (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== c || t[13] !== d
      ? ((f = (0, $.jsxs)(V, { children: [c, d] })), (t[12] = c), (t[13] = d), (t[14] = f))
      : (f = t[14]),
    f
  );
}
function Nt(e) {
  let t = (0, Z.c)(20),
    { site: n } = e,
    { data: r, isLoading: i } = P(n.screenshot_url),
    [a, s] = (0, Q.useState)(r),
    c = n.screenshot_url == null ? void 0 : (r ?? a);
  c !== a && s(c);
  let l = n.status === `suspended` ? null : n.live_url,
    u;
  if (c != null) {
    let e;
    (t[0] === c
      ? (e = t[1])
      : ((e = (0, $.jsx)(`img`, { alt: ``, className: `size-full object-cover`, src: c })),
        (t[0] = c),
        (t[1] = e)),
      (u = e));
  } else if (i) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(M, { size: `fill` })), (t[2] = e))
      : (e = t[2]),
      (u = e));
  } else {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(o, { "aria-hidden": !0, className: `icon-md` })), (t[3] = e))
      : (e = t[3]),
      (u = e));
  }
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 rounded-lg ring-1 ring-border ring-inset`,
      })),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === u
    ? (f = t[6])
    : ((f = (0, $.jsxs)(`div`, {
        className: `relative flex h-15 w-26 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-secondary/92`,
        children: [u, d],
      })),
      (t[5] = u),
      (t[6] = f));
  let p;
  t[7] === n.title
    ? (p = t[8])
    : ((p = (0, $.jsx)(`h1`, {
        className: `text-2xl leading-8 font-normal wrap-anywhere text-default`,
        children: n.title,
      })),
      (t[7] = n.title),
      (t[8] = p));
  let m;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(pe, { "aria-hidden": !0, className: `shrink-0` })), (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== l || t[11] !== n.slug
    ? ((h = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1 text-sm leading-5 text-tertiary`,
        children: [
          m,
          l == null
            ? (0, $.jsx)(`span`, { className: `min-w-0 truncate`, children: n.slug })
            : (0, $.jsx)(Ee, {
                className: `min-w-0 truncate text-sm`,
                appearance: `secondary`,
                underline: `hover`,
                href: l,
                initiator: `sites_library`,
                openAsWebsite: !0,
                children: ke(l),
              }),
        ],
      })),
      (t[10] = l),
      (t[11] = n.slug),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] !== p || t[14] !== h
    ? ((g = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-2`, children: [p, h] })),
      (t[13] = p),
      (t[14] = h),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== n.title || t[17] !== f || t[18] !== g
      ? ((_ = (0, $.jsxs)(`section`, {
          "aria-label": n.title,
          className: `flex min-w-0 items-center gap-4`,
          children: [f, g],
        })),
        (t[16] = n.title),
        (t[17] = f),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
function Pt(e) {
  let t = (0, Z.c)(9),
    { onEdit: n, site: r } = e,
    i = r.status === `suspended`,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(c, { asset: ae })),
      (o = (0, $.jsx)(O, {
        id: `appgenSiteDetail.edit`,
        defaultMessage: `Edit`,
        description: `Button label for editing a Site from its details page`,
      })),
      (t[0] = a),
      (t[1] = o))
    : ((a = t[0]), (o = t[1]));
  let s;
  t[2] !== i || t[3] !== n
    ? ((s = (0, $.jsxs)(w, {
        color: `outlineSurface`,
        disabled: i,
        size: `toolbar`,
        onClick: n,
        children: [a, o],
      })),
      (t[2] = i),
      (t[3] = n),
      (t[4] = s))
    : (s = t[4]);
  let l = s,
    u;
  return (
    t[5] !== l || t[6] !== i || t[7] !== r.disabled_by
      ? ((u = i
          ? (0, $.jsx)(me, {
              interactive: r.disabled_by === `openai`,
              tooltipContent: (0, $.jsx)(Ze, { disabledBy: r.disabled_by }),
              children: l,
            })
          : l),
        (t[5] = l),
        (t[6] = i),
        (t[7] = r.disabled_by),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
function Ft(e) {
  let t = (0, Z.c)(6),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(O, {
        id: `appgenSiteDetail.error.retry`,
        defaultMessage: `Retry`,
        description: `Button to retry loading Site details after a load failure`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = (0, $.jsx)(w, { color: `outline`, onClick: n, children: r })), (t[1] = n), (t[2] = i));
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(O, {
        id: `appgenSiteDetail.error.title`,
        defaultMessage: `Unable to load site`,
        description: `Error state shown when Site details cannot load`,
      })),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === i
      ? (o = t[5])
      : ((o = (0, $.jsx)(z, { className: `min-h-96 flex-1`, actions: i, title: a })), (t[4] = i), (t[5] = o)),
    o
  );
}
var Z, Q, $, It, Lt, Rt, zt, Bt, Vt;
function Ht() {
  return (Ht = e(() => {
    ((Z = v()),
      x(),
      fe(),
      d(),
      se(),
      (Q = l()),
      C(),
      h(),
      B(),
      Ne(),
      T(),
      Ve(),
      U(),
      _(),
      ne(),
      R(),
      F(),
      Pe(),
      _e(),
      A(),
      ie(),
      i(),
      qe(),
      Ie(),
      y(),
      H(),
      j(),
      Xe(),
      Ye(),
      Te(),
      nt(),
      st(),
      Ue(),
      vt(),
      L(),
      Et(),
      Ot(),
      be(),
      ($ = u()),
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
//# sourceMappingURL=appgen-site-detail-layout-8ded3439c229.js.map
