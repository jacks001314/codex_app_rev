import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  Cpn as a,
  Eft as o,
  F3t as s,
  GL as c,
  IXt as l,
  JXt as u,
  Jit as d,
  KO as f,
  KVt as p,
  Kit as m,
  Kst as h,
  LVt as g,
  MMt as _,
  N3t as v,
  NH as y,
  O3t as b,
  Opn as ee,
  PH as te,
  PVt as ne,
  QVt as re,
  Spn as x,
  Tft as S,
  UO as ie,
  WL as C,
  a3t as ae,
  aYt as w,
  azt as oe,
  dF as T,
  dzt as se,
  fF as E,
  fzt as D,
  gMt as O,
  hMt as k,
  hZt as ce,
  hmn as A,
  jMt as j,
  kMt as M,
  kmn as N,
  lHt as P,
  lzt as le,
  mF as F,
  mZt as I,
  o3t as L,
  pF as ue,
  pZt as de,
  qst as R,
  sYt as fe,
  uHt as pe,
  uzt as me,
  zXt as he,
} from "./app-initial-f094ef01c64d.js";
import { IT as z, LT as B } from "./app-primary-4c40d73a1074.js";
import { n as V, t as ge } from "./tabs-efdcd8aaf082.js";
import { n as H, t as U } from "./toolbar-breadcrumb-76687ef37675.js";
import { s as W, t as _e } from "./appgen-access-e530f599dd35.js";
import { a as G, i as K, n as ve, r as ye } from "./start-appgen-conversation-389745f7419d.js";
function be(e) {
  let t = (0, q.c)(7),
    n = (0, J.useContext)($);
  if (n != null) {
    let r;
    t[0] !== n || t[1] !== e.children
      ? ((r = e.children(n)), (t[0] = n), (t[1] = e.children), (t[2] = r))
      : (r = t[2]);
    let i;
    return (
      t[3] === r
        ? (i = t[4])
        : ((i = (0, Y.jsx)(Y.Fragment, { children: r })), (t[3] = r), (t[4] = i)),
      i
    );
  }
  let r;
  return (t[5] === e ? (r = t[6]) : ((r = (0, Y.jsx)(xe, { ...e })), (t[5] = e), (t[6] = r)), r);
}
function xe(e) {
  let t = (0, q.c)(75),
    { children: r, prefetchTab: i, projectId: o, selectedTab: c } = e,
    l = n(ae),
    d = u(),
    p = ee(),
    m = te(),
    h = (0, J.useRef)(0),
    _ = f(),
    y = fe(`262557526`),
    b = fe(`1912312436`),
    x;
  t[0] === b ? (x = t[1]) : ((x = { enabled: b }), (t[0] = b), (t[1] = x));
  let { data: S, isError: ie } = s(g, x),
    { data: C, isError: w, isLoading: T } = v(ne, o),
    E = _e(C),
    D;
  t[2] !== o || t[3] !== l || t[4] !== c
    ? ((D = () => {
        let e;
        bb2: switch (c) {
          case `analytics`:
            e = I.CODEX_APPGEN_INTERACTION_PAGE_ANALYTICS;
            break bb2;
          case `database`:
            e = I.CODEX_APPGEN_INTERACTION_PAGE_DATABASE;
            break bb2;
          case `settings`:
            e = I.CODEX_APPGEN_INTERACTION_PAGE_SETTINGS;
        }
        pe(l, {
          action: de.CODEX_APPGEN_INTERACTION_ACTION_PAGE_VIEWED,
          page: e,
          projectId: o,
          source: ce.CODEX_APPGEN_INTERACTION_SOURCE_SITE_DETAILS,
        });
      }),
      (t[2] = o),
      (t[3] = l),
      (t[4] = c),
      (t[5] = D))
    : (D = t[5]);
  let O = (0, J.useEffectEvent)(D),
    k =
      C == null ||
      T ||
      w ||
      (c === `settings` && !E) ||
      (c === `analytics` && !y) ||
      (c === `database` && (!b || ie || S?.database !== !0))
        ? null
        : `${C.id}:${c}`,
    A;
  t[6] !== O || t[7] !== k
    ? ((A = () => {
        k != null && O();
      }),
      (t[6] = O),
      (t[7] = k),
      (t[8] = A))
    : (A = t[8]);
  let j;
  (t[9] === k ? (j = t[10]) : ((j = [k]), (t[9] = k), (t[10] = j)), (0, J.useEffect)(A, j));
  let { data: M } = re(C?.screenshot_url ?? null),
    N = C?.status === `suspended` ? null : C?.current_live_url;
  if (C != null && c === `settings` && !E) {
    let e;
    return (
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(he, { replace: !0, to: oe })), (t[11] = e))
        : (e = t[11]),
      e
    );
  }
  let P;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = {
        key: `settings`,
        name: (0, Y.jsx)(a, {
          id: `appgenSiteDetail.navigation.settings`,
          defaultMessage: `Settings`,
          description: `Tab label for Site settings`,
        }),
        panelId: Q,
      }),
      (t[12] = P))
    : (P = t[12]);
  let F;
  if (t[13] !== y || t[14] !== b || t[15] !== c || t[16] !== S?.database) {
    if (((F = [P]), y || c === `analytics`)) {
      let e;
      (t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = {
            key: `analytics`,
            name: (0, Y.jsx)(a, {
              id: `appgenSiteDetail.navigation.analytics`,
              defaultMessage: `Analytics`,
              description: `Tab label for Site analytics`,
            }),
            panelId: X,
          }),
          (t[18] = e))
        : (e = t[18]),
        F.push(e));
    }
    if ((b && S?.database === !0) || c === `database`) {
      let e;
      (t[19] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = {
            key: `database`,
            name: (0, Y.jsx)(a, {
              id: `appgenSiteDetail.navigation.database`,
              defaultMessage: `Database`,
              description: `Tab label for the Site database viewer`,
            }),
            panelId: Z,
          }),
          (t[19] = e))
        : (e = t[19]),
        F.push(e));
    }
    ((t[13] = y), (t[14] = b), (t[15] = c), (t[16] = S?.database), (t[17] = F));
  } else F = t[17];
  let L, R;
  bb0: switch (c) {
    case `settings`: {
      L = Q;
      let e;
      (t[20] === p
        ? (e = t[21])
        : ((e = p.formatMessage({
            id: `appgenSiteDetail.navigation.settings`,
            defaultMessage: `Settings`,
            description: `Tab label for Site settings`,
          })),
          (t[20] = p),
          (t[21] = e)),
        (R = e));
      break bb0;
    }
    case `analytics`: {
      L = X;
      let e;
      (t[22] === p
        ? (e = t[23])
        : ((e = p.formatMessage({
            id: `appgenSiteDetail.navigation.analytics`,
            defaultMessage: `Analytics`,
            description: `Tab label for Site analytics`,
          })),
          (t[22] = p),
          (t[23] = e)),
        (R = e));
      break bb0;
    }
    case `database`: {
      L = Z;
      let e;
      (t[24] === p
        ? (e = t[25])
        : ((e = p.formatMessage({
            id: `appgenSiteDetail.navigation.database`,
            defaultMessage: `Database`,
            description: `Tab label for the Site database viewer`,
          })),
          (t[24] = p),
          (t[25] = e)),
        (R = e));
    }
  }
  let z;
  t[26] === d
    ? (z = t[27])
    : ((z = () => {
        d(`/sites`);
      }),
      (t[26] = d),
      (t[27] = z));
  let B;
  t[28] !== N || t[29] !== l || t[30] !== C || t[31] !== _
    ? ((B =
        C == null
          ? void 0
          : () => {
              (pe(l, {
                action: de.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED,
                projectId: C.id,
                source: ce.CODEX_APPGEN_INTERACTION_SOURCE_SITE_DETAILS,
              }),
                ye(l, _, { type: `edit`, liveUrl: N, projectId: C.id, projectTitle: C.title }));
            }),
      (t[28] = N),
      (t[29] = l),
      (t[30] = C),
      (t[31] = _),
      (t[32] = B))
    : (B = t[32]);
  let V;
  t[33] !== C || t[34] !== z || t[35] !== B
    ? ((V = (0, Y.jsx)(Ce, { site: C, onBack: z, onEdit: B })),
      (t[33] = C),
      (t[34] = z),
      (t[35] = B),
      (t[36] = V))
    : (V = t[36]);
  let H = V,
    U;
  if (T) {
    let e;
    (t[37] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(Ee, {})), (t[37] = e))
      : (e = t[37]),
      (U = e));
  } else if (w || C == null) {
    let e;
    (t[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(De, {})), (t[38] = e))
      : (e = t[38]),
      (U = e));
  } else {
    let e;
    t[39] !== M || t[40] !== C
      ? ((e = (0, Y.jsx)(we, { screenshotSrc: M, site: C })), (t[39] = M), (t[40] = C), (t[41] = e))
      : (e = t[41]);
    let n;
    t[42] === p
      ? (n = t[43])
      : ((n = p.formatMessage({
          id: `appgenSiteDetail.navigation.label`,
          defaultMessage: `Site details`,
          description: `Accessible label for navigation between Site settings, analytics, and database`,
        })),
        (t[42] = p),
        (t[43] = n));
    let a;
    t[44] !== m || t[45] !== d || t[46] !== i || t[47] !== o
      ? ((a = (e) => {
          let t;
          bb131: switch (e) {
            case `settings`:
              t = se(o);
              break bb131;
            case `analytics`:
              t = le(o);
              break bb131;
            case `database`:
              t = me(o);
          }
          let n = (h.current += 1);
          (i?.(e) ?? Promise.resolve()).catch(Se).then(() => {
            m() && n === h.current && d(t);
          });
        }),
        (t[44] = m),
        (t[45] = d),
        (t[46] = i),
        (t[47] = o),
        (t[48] = a))
      : (a = t[48]);
    let s;
    t[49] !== c || t[50] !== n || t[51] !== a || t[52] !== F
      ? ((s = (0, Y.jsx)(`div`, {
          className: `border-b border-subtle pb-6`,
          children: (0, Y.jsx)(ge, {
            ariaLabel: n,
            selectedKey: c,
            tabs: F,
            variant: `toolbar`,
            onSelect: a,
          }),
        })),
        (t[49] = c),
        (t[50] = n),
        (t[51] = a),
        (t[52] = F),
        (t[53] = s))
      : (s = t[53]);
    let l = L,
      u = R,
      f;
    t[54] !== r || t[55] !== C ? ((f = r(C)), (t[54] = r), (t[55] = C), (t[56] = f)) : (f = t[56]);
    let g;
    t[57] !== C || t[58] !== f
      ? ((g = (0, Y.jsx)($, { value: C, children: f })), (t[57] = C), (t[58] = f), (t[59] = g))
      : (g = t[59]);
    let _;
    t[60] !== L || t[61] !== R || t[62] !== g
      ? ((_ = (0, Y.jsx)(`div`, { id: l, "aria-label": u, role: `tabpanel`, children: g })),
        (t[60] = L),
        (t[61] = R),
        (t[62] = g),
        (t[63] = _))
      : (_ = t[63]);
    let v;
    (t[64] !== s || t[65] !== _ || t[66] !== e
      ? ((v = (0, Y.jsxs)(Y.Fragment, { children: [e, s, _] })),
        (t[64] = s),
        (t[65] = _),
        (t[66] = e),
        (t[67] = v))
      : (v = t[67]),
      (U = v));
  }
  let W;
  t[68] === H
    ? (W = t[69])
    : ((W = (0, Y.jsx)(Y.Fragment, { children: (0, Y.jsx)(ue, { children: H }) })),
      (t[68] = H),
      (t[69] = W));
  let G;
  t[70] === U
    ? (G = t[71])
    : ((G = (0, Y.jsx)(`div`, {
        className: `flex min-h-0 flex-1 scrollbar-stable overflow-y-auto p-panel`,
        children: (0, Y.jsx)(`div`, {
          className: `mx-auto flex w-full max-w-3xl flex-col gap-6 pb-8`,
          children: U,
        }),
      })),
      (t[70] = U),
      (t[71] = G));
  let K;
  return (
    t[72] !== G || t[73] !== W
      ? ((K = (0, Y.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: [null, W, G],
        })),
        (t[72] = G),
        (t[73] = W),
        (t[74] = K))
      : (K = t[74]),
    K
  );
}
function Se() {}
function Ce(e) {
  let t = (0, q.c)(12),
    { onBack: n, onEdit: r, site: i } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Y.jsx)(a, {
        id: `appgenSiteDetail.header.sites`,
        defaultMessage: `Sites`,
        description: `Breadcrumb link from Site details back to Sites`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === n ? (s = t[2]) : ((s = [{ id: `sites`, label: o, onClick: n }]), (t[1] = n), (t[2] = s));
  let c = i?.title,
    l;
  t[3] !== s || t[4] !== c
    ? ((l = (0, Y.jsx)(U, { ancestors: s, current: c })), (t[3] = s), (t[4] = c), (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] !== r || t[7] !== i
    ? ((u = i == null || r == null ? null : (0, Y.jsx)(Te, { site: i, onEdit: r })),
      (t[6] = r),
      (t[7] = i),
      (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== l || t[10] !== u
      ? ((d = (0, Y.jsxs)(T, { children: [l, u] })), (t[9] = l), (t[10] = u), (t[11] = d))
      : (d = t[11]),
    d
  );
}
function we(e) {
  let t = (0, q.c)(18),
    { screenshotSrc: n, site: r } = e,
    i;
  t[0] === r.title
    ? (i = t[1])
    : ((i = (0, Y.jsx)(`h1`, {
        className: `truncate text-xl leading-7 font-medium text-default`,
        children: r.title,
      })),
      (t[0] = r.title),
      (t[1] = i));
  let a;
  t[2] !== r.current_live_url || t[3] !== r.slug
    ? ((a = z(r.current_live_url) ?? r.slug),
      (t[2] = r.current_live_url),
      (t[3] = r.slug),
      (t[4] = a))
    : (a = t[4]);
  let o;
  t[5] === a
    ? (o = t[6])
    : ((o = (0, Y.jsx)(`div`, { className: `truncate text-xs text-tertiary`, children: a })),
      (t[5] = a),
      (t[6] = o));
  let s;
  t[7] !== i || t[8] !== o
    ? ((s = (0, Y.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-0.5`, children: [i, o] })),
      (t[7] = i),
      (t[8] = o),
      (t[9] = s))
    : (s = t[9]);
  let c;
  t[10] === n
    ? (c = t[11])
    : ((c =
        n == null
          ? (0, Y.jsx)(h, { "aria-hidden": !0, className: `icon-md` })
          : (0, Y.jsx)(`img`, { alt: ``, className: `size-full object-cover`, src: n })),
      (t[10] = n),
      (t[11] = c));
  let l;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 rounded-md ring-1 ring-border ring-inset`,
      })),
      (t[12] = l))
    : (l = t[12]);
  let u;
  t[13] === c
    ? (u = t[14])
    : ((u = (0, Y.jsxs)(`div`, {
        className: `relative flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-secondary/92`,
        children: [c, l],
      })),
      (t[13] = c),
      (t[14] = u));
  let d;
  return (
    t[15] !== s || t[16] !== u
      ? ((d = (0, Y.jsxs)(`div`, {
          className: `grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3`,
          children: [s, u],
        })),
        (t[15] = s),
        (t[16] = u),
        (t[17] = d))
      : (d = t[17]),
    d
  );
}
function Te(e) {
  let t = (0, q.c)(9),
    { onEdit: n, site: r } = e,
    i = r.status === `suspended`,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(k, { asset: o })),
      (c = (0, Y.jsx)(a, {
        id: `appgenSiteDetail.edit`,
        defaultMessage: `Edit`,
        description: `Button label for editing a Site from its details page`,
      })),
      (t[0] = s),
      (t[1] = c))
    : ((s = t[0]), (c = t[1]));
  let l;
  t[2] !== i || t[3] !== n
    ? ((l = (0, Y.jsxs)(M, {
        color: `outline`,
        disabled: i,
        size: `toolbar`,
        onClick: n,
        children: [s, c],
      })),
      (t[2] = i),
      (t[3] = n),
      (t[4] = l))
    : (l = t[4]);
  let u = l,
    d;
  return (
    t[5] !== u || t[6] !== i || t[7] !== r.disabled_by
      ? ((d = i
          ? (0, Y.jsx)(m, {
              interactive: r.disabled_by === `openai`,
              tooltipContent: (0, Y.jsx)(K, { disabledBy: r.disabled_by }),
              children: u,
            })
          : u),
        (t[5] = u),
        (t[6] = i),
        (t[7] = r.disabled_by),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
function Ee() {
  let e = (0, q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsx)(`div`, {
          className: `flex min-h-96 flex-1 items-center justify-center`,
          children: (0, Y.jsx)(j, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function De() {
  let e = (0, q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsx)(C, {
          className: `min-h-96 flex-1`,
          title: (0, Y.jsx)(a, {
            id: `appgenSiteDetail.error.title`,
            defaultMessage: `Unable to load site`,
            description: `Error state shown when Site details cannot load`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  Oe = e(() => {
    ((q = N()),
      S(),
      b(),
      (J = t(i(), 1)),
      x(),
      l(),
      F(),
      E(),
      r(),
      O(),
      c(),
      _(),
      V(),
      H(),
      d(),
      ie(),
      R(),
      L(),
      w(),
      y(),
      W(),
      P(),
      G(),
      p(),
      D(),
      B(),
      ve(),
      (Y = A()),
      (X = `appgen-site-detail-analytics`),
      (Z = `appgen-site-detail-database`),
      (Q = `appgen-site-detail-settings`),
      ($ = (0, J.createContext)(null)));
  });
export { Oe as n, be as t };
//# sourceMappingURL=appgen-site-detail-layout-6b9d3aae0fc8.js.map
