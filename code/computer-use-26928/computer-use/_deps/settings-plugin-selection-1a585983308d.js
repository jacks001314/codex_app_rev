import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  BT as n,
  Cy as r,
  EE as i,
  F5t as a,
  Gnt as o,
  Gwt as s,
  JS as c,
  Ket as l,
  N as u,
  N5t as d,
  O5t as f,
  P as p,
  P8t as m,
  Qx as h,
  RJt as g,
  RT as _,
  Rwt as v,
  SE as y,
  TE as b,
  Tm as x,
  Ty as S,
  Wnt as C,
  Wrn as w,
  XS as T,
  YOt as E,
  Yrn as D,
  Zx as O,
  _dn as k,
  ast as A,
  b5t as j,
  bE as M,
  d5t as N,
  dJt as ee,
  dwt as te,
  ein as P,
  etn as ne,
  fJt as re,
  fNt as F,
  gPt as ie,
  hst as ae,
  iC as oe,
  ist as se,
  j8t as ce,
  kU as I,
  lPt as le,
  mcn as L,
  mst as ue,
  my as R,
  nC as z,
  ncn as B,
  pNt as V,
  py as H,
  r5 as de,
  rTt as fe,
  rcn as U,
  tC as W,
  ttn as G,
  wm as K,
  wy as q,
  xy as J,
  zCt as pe,
} from "./app-shared-7552fc8d5d82.js";
import {
  $O as me,
  EB as he,
  F3 as ge,
  L3 as _e,
  Qrn as ve,
  Rrn as ye,
  TB as be,
  Wrn as xe,
  Xz as Se,
  Z3 as Ce,
  Zrn as we,
  dAn as Te,
  dw as Y,
  eB as Ee,
  fw as De,
  hf as Oe,
  hv as ke,
  i6 as Ae,
  ijn as je,
  mf as Me,
  mv as Ne,
  nRt as Pe,
  nk as Fe,
  rjn as Ie,
  tB as Le,
  tRt as Re,
  uAn as ze,
} from "./app-initial-3916b423772b.js";
import { n as Be, t as Ve } from "./settings-loading-row-f0c26bc7580c.js";
import {
  D as He,
  E as Ue,
  S as We,
  T as Ge,
  f as Ke,
  i as qe,
  l as Je,
  m as Ye,
  n as Xe,
  p as Ze,
  s as Qe,
  t as $e,
  u as et,
} from "./browser-use-origin-state-queries-4feefe042d12.js";
import {
  a as tt,
  i as nt,
  n as rt,
  r as it,
} from "./browser-use-policy-site-permissions-b7342477471c.js";
function at(e) {
  let t = (0, st.c)(4),
    { backend: n } = e,
    r = n === void 0 ? `iab` : n,
    { selectedHostId: i } = _e();
  if (V(i).kind !== `local`) return null;
  let a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, X.jsx)(Y.Header, {
        title: (0, X.jsx)(D, {
          id: `settings.browserUse.developerMode.title`,
          defaultMessage: `Developer mode`,
          description: `Title for full CDP developer mode settings`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  return (
    t[1] !== r || t[2] !== i
      ? ((o = (0, X.jsx)(X.Fragment, {
          children: (0, X.jsxs)(Y, {
            children: [
              a,
              (0, X.jsx)(Y.Content, {
                children: (0, X.jsx)(H, { children: (0, X.jsx)(ot, { backend: r, hostId: i }) }),
              }),
            ],
          }),
        })),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function ot(e) {
  let t = (0, st.c)(27),
    { backend: n, hostId: r } = e,
    i = P(),
    { data: s, isLoading: c } = a($e),
    l;
  t[0] === r ? (l = t[1]) : ((l = { hostId: r }), (t[0] = r), (t[1] = l));
  let { data: u, isPending: f } = d(v, l),
    p;
  t[2] === r ? (p = t[3]) : ((p = { hostId: r }), (t[2] = r), (t[3] = p));
  let m = Je(p),
    h = d(Xe, r),
    g = h !== `unsupported`,
    _;
  t[4] !== n || t[5] !== u || t[6] !== g
    ? ((_ =
        te(u?.requirements?.featureRequirements?.browser_use_full_cdp_access) ||
        (g && u != null && !Ge(u.requirements, n === `iab` ? `iab` : `extension`))),
      (t[4] = n),
      (t[5] = u),
      (t[6] = g),
      (t[7] = _))
    : (_ = t[7]);
  let y = _,
    x = c || f || h === `loading` || h === `error`,
    S = s?.fullCdpAccessEnabled === !0 && !x && !y,
    C;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, X.jsxs)(`span`, {
            className: `inline-flex items-center gap-1 font-medium text-warning`,
            children: [
              (0, X.jsx)(b, { className: `shrink-0`, "aria-hidden": !1, asset: o }),
              (0, X.jsx)(D, {
                id: `settings.browserUse.fullCdp.elevatedRisk.label`,
                defaultMessage: `Elevated risk`,
                description: `Label for the elevated risk warning shown for the full CDP developer mode toggle`,
              }),
            ],
          }),
          (0, X.jsx)(`span`, {
            children: (0, X.jsx)(D, {
              id: `settings.browserUse.fullCdp.label`,
              defaultMessage: `Enable full CDP access`,
              description: `Label for the full CDP developer mode toggle`,
            }),
          }),
        ],
      })),
      (t[8] = C))
    : (C = t[8]);
  let w;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(`div`, {
        children: (0, X.jsx)(D, {
          id: `settings.browserUse.fullCdp.description`,
          defaultMessage: `Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.`,
          description: `Description for the full CDP developer mode toggle`,
        }),
      })),
      (t[9] = w))
    : (w = t[9]);
  let T;
  t[10] !== y || t[11] !== f
    ? ((T =
        !f && y
          ? (0, X.jsx)(`div`, {
              children: (0, X.jsx)(D, {
                id: `settings.browserUse.fullCdp.blockedByPolicy`,
                defaultMessage: `Your organization has disabled this setting.`,
                description: `Message shown below the Full CDP access toggle in Browser Use Developer mode when enterprise managed policy explicitly disables the setting. The user cannot enable the toggle.`,
              }),
            })
          : null),
      (t[10] = y),
      (t[11] = f),
      (t[12] = T))
    : (T = t[12]);
  let E;
  t[13] === T
    ? (E = t[14])
    : ((E = (0, X.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [w, T] })),
      (t[13] = T),
      (t[14] = E));
  let O;
  t[15] === i
    ? (O = t[16])
    : ((O = i.formatMessage({
        id: `settings.browserUse.fullCdp.ariaLabel`,
        defaultMessage: `Toggle full CDP access`,
        description: `Aria label for toggling full CDP access`,
      })),
      (t[15] = i),
      (t[16] = O));
  let k = x || y || m.isPending,
    A;
  t[17] === m
    ? (A = t[18])
    : ((A = (e) => {
        m.mutate(e);
      }),
      (t[17] = m),
      (t[18] = A));
  let j;
  t[19] !== S || t[20] !== A || t[21] !== O || t[22] !== k
    ? ((j = (0, X.jsx)(z, { ariaLabel: O, checked: S, disabled: k, onChange: A })),
      (t[19] = S),
      (t[20] = A),
      (t[21] = O),
      (t[22] = k),
      (t[23] = j))
    : (j = t[23]);
  let M;
  return (
    t[24] !== j || t[25] !== E
      ? ((M = (0, X.jsx)(J, { label: C, description: E, control: j })),
        (t[24] = j),
        (t[25] = E),
        (t[26] = M))
      : (M = t[26]),
    M
  );
}
var st, X;
function ct() {
  return (ct = e(() => {
    ((st = k()),
      C(),
      pe(),
      f(),
      Ye(),
      w(),
      i(),
      oe(),
      s(),
      qe(),
      De(),
      ge(),
      r(),
      R(),
      F(),
      (X = L()));
  }))();
}
function lt() {
  let e = (0, dt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, ft.jsx)(D, {
          id: `settings.browserUse.historyApproval.description`,
          defaultMessage: `Choose if ChatGPT asks for approval before accessing your browser's history`,
          description: `Description for browser use history approval mode setting`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ut() {
  let e = (0, dt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, ft.jsx)(D, {
          id: `settings.browserUse.iabHistoryApproval.description`,
          defaultMessage: `Choose whether ChatGPT can access your built-in browser history`,
          description: `Description for in-app browser history approval mode setting`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var dt, ft;
function pt() {
  return (pt = e(() => {
    ((dt = k()), w(), (ft = L()));
  }))();
}
function mt(e) {
  let t = (0, ht.c)(15),
    { backend: n } = e,
    r = P(),
    i = a(n !== `iab` || ke),
    { data: o, isLoading: s } = a($e),
    c = Ke(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, gt.jsx)(D, {
        id: `settings.browserUse.webMcp.label`,
        defaultMessage: `Enable site tools`,
        description: `Label for the browser WebMCP setting`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] === i
    ? (u = t[2])
    : ((u = i
        ? (0, gt.jsx)(D, {
            id: `settings.browserUse.webMcp.description`,
            defaultMessage: `Allow ChatGPT to discover and call site tools exposed by websites, including WebMCP`,
            description: `Description for the browser WebMCP setting`,
          })
        : (0, gt.jsx)(D, {
            id: `settings.browserUse.webMcp.unavailableDescription`,
            defaultMessage: `Site tools aren't available for this account`,
            description: `Explanation for a disabled WebMCP toggle when neither feature rollout nor managed policy enables site tools`,
          })),
      (t[1] = i),
      (t[2] = u));
  let d;
  t[3] === r
    ? (d = t[4])
    : ((d = r.formatMessage({
        id: `settings.browserUse.webMcp.ariaLabel`,
        defaultMessage: `Toggle WebMCP`,
        description: `Aria label for toggling browser WebMCP`,
      })),
      (t[3] = r),
      (t[4] = d));
  let f = i && (o?.webMcpEnabled ?? !0),
    p = !i || s || c.isPending,
    m;
  t[5] === c
    ? (m = t[6])
    : ((m = (e) => {
        c.mutate(e);
      }),
      (t[5] = c),
      (t[6] = m));
  let h;
  t[7] !== d || t[8] !== f || t[9] !== p || t[10] !== m
    ? ((h = (0, gt.jsx)(z, { ariaLabel: d, checked: f, disabled: p, onChange: m })),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g;
  return (
    t[12] !== u || t[13] !== h
      ? ((g = (0, gt.jsx)(J, { label: l, description: u, control: h })),
        (t[12] = u),
        (t[13] = h),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
var ht, gt;
function _t() {
  return (_t = e(() => {
    ((ht = k()), f(), w(), Ne(), oe(), qe(), r(), (gt = L()));
  }))();
}
function vt(e) {
  let t = (0, St.c)(13),
    { backend: n, browserUseEnabled: r, showHistory: i, showWebMcp: a, siteSettingsRow: o } = e,
    s = r === void 0 || r,
    c = i === void 0 || i,
    l = a !== void 0 && a,
    u = o != null || (s && (c || l)),
    d;
  t[0] !== n || t[1] !== s || t[2] !== u || t[3] !== c || t[4] !== l || t[5] !== o
    ? ((d = u
        ? (0, Z.jsxs)(Y, {
            children: [
              (0, Z.jsx)(Y.Header, {
                title:
                  n === `chrome`
                    ? (0, Z.jsx)(D, {
                        id: `settings.computerUse.chrome.policy.browserPermissions.title`,
                        defaultMessage: `Browser permissions`,
                        description: `Title for Chromium browser permissions settings section`,
                      })
                    : (0, Z.jsx)(D, {
                        id: `settings.browserUse.policy.browserPermissions.title`,
                        defaultMessage: `Browser permissions`,
                        description: `Title for browser use permissions settings section`,
                      }),
              }),
              (0, Z.jsx)(Y.Content, {
                children: (0, Z.jsxs)(H, {
                  children: [
                    o,
                    s
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            c && n === `chrome` ? (0, Z.jsx)(yt, {}) : null,
                            c && n === `iab` ? (0, Z.jsx)(bt, {}) : null,
                            l ? (0, Z.jsx)(mt, { backend: n }) : null,
                          ],
                        })
                      : null,
                  ],
                }),
              }),
            ],
          })
        : null),
      (t[0] = n),
      (t[1] = s),
      (t[2] = u),
      (t[3] = c),
      (t[4] = l),
      (t[5] = o),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== n || t[8] !== s
    ? ((f = s
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(rt, { backend: n }), (0, Z.jsx)(at, { backend: n })],
          })
        : null),
      (t[7] = n),
      (t[8] = s),
      (t[9] = f))
    : (f = t[9]);
  let p;
  return (
    t[10] !== d || t[11] !== f
      ? ((p = (0, Z.jsxs)(Z.Fragment, { children: [d, f] })), (t[10] = d), (t[11] = f), (t[12] = p))
      : (p = t[12]),
    p
  );
}
function yt() {
  let e = (0, St.c)(3),
    t = Qe(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Z.jsx)(lt, {})), (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = (0, Z.jsx)(xt, { backend: `chrome`, description: n, writeApprovalModeMutation: t })),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function bt() {
  let e = (0, St.c)(3),
    t = et(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Z.jsx)(ut, {})), (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = (0, Z.jsx)(xt, { backend: `iab`, description: n, writeApprovalModeMutation: t })),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function xt(e) {
  let n = (0, St.c)(62),
    { backend: r, description: i, writeApprovalModeMutation: o } = e,
    s = t(ee),
    { selectedHostId: l } = _e(),
    { data: u, isLoading: f } = a($e),
    { data: p, isPending: m } = d(fe, l),
    h =
      (p?.configReadSucceeded === !0 ? p.config.browser_use?.allow_history_access : void 0) !== !1,
    g = r === `iab` ? u?.iabHistoryApprovalMode : u?.chromeHistoryApprovalMode,
    _;
  n[0] === l ? (_ = n[1]) : ((_ = { failClosed: !0, hostId: l }), (n[0] = l), (n[1] = _));
  let { data: y, isError: b, isPending: x } = d(v, _),
    S = y?.requirements ?? null,
    C = r === `iab` ? `iab` : `extension`,
    w;
  n[2] !== S || n[3] !== C ? ((w = Ge(S, C)), (n[2] = S), (n[3] = C), (n[4] = w)) : (w = n[4]);
  let E = w,
    O;
  n[5] !== E || n[6] !== S
    ? ((O = E && Ue(S, `history`)), (n[5] = E), (n[6] = S), (n[7] = O))
    : (O = n[7]);
  let k = O,
    A;
  n[8] !== S || n[9] !== k ? ((A = We(S) && !k), (n[8] = S), (n[9] = k), (n[10] = A)) : (A = n[10]);
  let j = A,
    M;
  n[11] !== E || n[12] !== S
    ? ((M = E && He(S)), (n[11] = E), (n[12] = S), (n[13] = M))
    : (M = n[13]);
  let N = M,
    te;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = {
        id: `alwaysAsk`,
        label: (0, Z.jsx)(D, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, Z.jsx)(D, {
          id: `settings.browserUse.historyApproval.alwaysAsk.description`,
          defaultMessage: `Ask before accessing history`,
          description: `Description for browser use always ask history approval mode`,
        }),
      }),
      (n[14] = te))
    : (te = n[14]);
  let P;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = {
        id: `neverAsk`,
        label: (0, Z.jsx)(D, {
          id: `settings.browserUse.approval.neverAsk.label`,
          defaultMessage: `Always allow`,
          description: `Label for browser use never ask approval mode`,
        }),
        description: (0, Z.jsx)(D, {
          id: `settings.browserUse.historyApproval.neverAsk.description`,
          defaultMessage: `Access history without asking`,
          description: `Description for browser use never ask history approval mode`,
        }),
      }),
      (n[15] = P))
    : (P = n[15]);
  let ne;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = [
        te,
        P,
        {
          id: `disabled`,
          label: (0, Z.jsx)(D, {
            id: `settings.browserUse.historyApproval.disabled.label`,
            defaultMessage: `Disable`,
            description: `Label for disabled browser history approval mode`,
          }),
          description: (0, Z.jsx)(D, {
            id: `settings.browserUse.historyApproval.disabled.description`,
            defaultMessage: `Do not allow access to history`,
            description: `Description for disabled browser history approval mode`,
          }),
        },
      ]),
      (n[16] = ne))
    : (ne = n[16]);
  let re = ne,
    F;
  n[17] !== k || n[18] !== g || n[19] !== h || n[20] !== N
    ? ((F = g),
      !k || !h ? (F = `disabled`) : g === `neverAsk` && !N && (F = `alwaysAsk`),
      (n[17] = k),
      (n[18] = g),
      (n[19] = h),
      (n[20] = N),
      (n[21] = F))
    : (F = n[21]);
  let ae;
  n[22] === F
    ? (ae = n[23])
    : ((ae = re.find((e) => e.id === F) ?? re[0]), (n[22] = F), (n[23] = ae));
  let oe = ae,
    ce = f || x || m,
    I = o.isPending,
    le;
  n[24] !== k ||
  n[25] !== g ||
  n[26] !== h ||
  n[27] !== I ||
  n[28] !== N ||
  n[29] !== s ||
  n[30] !== l ||
  n[31] !== p ||
  n[32] !== o
    ? ((le = async (e) => {
        if (!((e === g && h) || I || (!k && e !== `disabled`) || (e === `neverAsk` && !N)))
          try {
            if (e === `disabled`) {
              p?.configReadSucceeded === !0 && Object.hasOwn(p.config, `browser_use`)
                ? await Ze(s, l, p, { capability: `history`, enabled: !1 })
                : await o.mutateAsync(e);
              return;
            }
            (e !== g && (await o.mutateAsync(e)),
              h || (await Ze(s, l, p, { capability: `history`, enabled: !0 })));
          } catch {
            s.get(ie).danger(
              (0, Z.jsx)(D, {
                id: `settings.browserUse.historyApproval.saveError`,
                defaultMessage: `Unable to save history setting`,
                description: `Toast shown when saving browser use history approval mode fails`,
              }),
              { errorAnalytics: { toastId: `settings.browserUse.historyApproval.saveError` } },
            );
          }
      }),
      (n[24] = k),
      (n[25] = g),
      (n[26] = h),
      (n[27] = I),
      (n[28] = N),
      (n[29] = s),
      (n[30] = l),
      (n[31] = p),
      (n[32] = o),
      (n[33] = le))
    : (le = n[33]);
  let L = le,
    ue;
  n[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Z.jsx)(`span`, {
        className: `inline-flex items-center gap-2`,
        children: (0, Z.jsx)(D, {
          id: `settings.browserUse.historyApproval.label`,
          defaultMessage: `History`,
          description: `Label for browser use history approval mode setting`,
        }),
      })),
      (n[34] = ue))
    : (ue = n[34]);
  let R;
  n[35] !== i || n[36] !== j
    ? ((R = j
        ? (0, Z.jsx)(D, {
            id: `settings.browserUse.historyApproval.managedDescription`,
            defaultMessage: `History access is disabled by your organization`,
            description: `Explanation that an enterprise policy disables browser history access`,
          })
        : i),
      (n[35] = i),
      (n[36] = j),
      (n[37] = R))
    : (R = n[37]);
  let z = ce || b || I || !k,
    B = ce || b || I || !k,
    V;
  n[38] === j
    ? (V = n[39])
    : ((V = j ? (0, Z.jsx)(de, { className: `text-secondary` }) : null), (n[38] = j), (n[39] = V));
  let H = oe?.label,
    U;
  n[40] === H
    ? (U = n[41])
    : ((U = (0, Z.jsx)(`span`, { className: `truncate`, children: H })), (n[40] = H), (n[41] = U));
  let W;
  n[42] !== B || n[43] !== V || n[44] !== U
    ? ((W = (0, Z.jsxs)(me, { className: `w-[152px]`, disabled: B, children: [V, U] })),
      (n[42] = B),
      (n[43] = V),
      (n[44] = U),
      (n[45] = W))
    : (W = n[45]);
  let G;
  n[46] !== F || n[47] !== L || n[48] !== k || n[49] !== I || n[50] !== N
    ? ((G = (0, Z.jsx)(`div`, {
        className: `flex flex-col`,
        children: re.map((e) => {
          let t = e.id === F;
          return (0, Z.jsx)(
            T.Item,
            {
              allowWrap: !0,
              disabled: I || (!k && e.id !== `disabled`) || (e.id === `neverAsk` && !N),
              rightIconAsset: t ? se : void 0,
              onSelect: () => {
                L(e.id);
              },
              children: (0, Z.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, Z.jsx)(`span`, { className: `truncate`, children: e.label }),
                  (0, Z.jsx)(`span`, {
                    className: `truncate text-sm text-secondary`,
                    children: e.description,
                  }),
                ],
              }),
            },
            e.id,
          );
        }),
      })),
      (n[46] = F),
      (n[47] = L),
      (n[48] = k),
      (n[49] = I),
      (n[50] = N),
      (n[51] = G))
    : (G = n[51]);
  let K;
  n[52] !== z || n[53] !== W || n[54] !== G
    ? ((K = (0, Z.jsx)(c, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: z,
        triggerButton: W,
        children: G,
      })),
      (n[52] = z),
      (n[53] = W),
      (n[54] = G),
      (n[55] = K))
    : (K = n[55]);
  let q;
  n[56] !== j || n[57] !== K
    ? ((q = (0, Z.jsx)(nt, { managed: j, children: K })), (n[56] = j), (n[57] = K), (n[58] = q))
    : (q = n[58]);
  let pe;
  return (
    n[59] !== R || n[60] !== q
      ? ((pe = (0, Z.jsx)(J, { label: ue, description: R, control: q })),
        (n[59] = R),
        (n[60] = q),
        (n[61] = pe))
      : (pe = n[61]),
    pe
  );
}
var St, Z;
function Ct() {
  return (Ct = e(() => {
    ((St = k()),
      A(),
      f(),
      Ye(),
      w(),
      W(),
      l(),
      le(),
      s(),
      re(),
      qe(),
      ct(),
      pt(),
      tt(),
      it(),
      _t(),
      De(),
      ge(),
      r(),
      Fe(),
      R(),
      (Z = L()));
  }))();
}
function wt(e) {
  let t = (0, Tt.c)(18),
    { backend: n, browserUseEnabled: r, showHistory: i, showWebMcp: a, siteSettingsRow: o } = e,
    s = r === void 0 || r,
    c = i === void 0 || i,
    l = a !== void 0 && a,
    { selectedHostId: u } = _e(),
    f = d(Xe, u);
  if (f === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Ve, {
            children: (0, Q.jsx)(D, {
              id: `settings.browserUse.config.loading`,
              defaultMessage: `Loading browser settings…`,
              description: `Loading status while reading user browser configuration`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (f === `error`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Me, {
            layout: `settings-row`,
            children: (0, Q.jsx)(D, {
              id: `settings.browserUse.config.loadError`,
              defaultMessage: `Unable to load browser settings`,
              description: `Error shown instead of editable browser permissions when user configuration cannot be loaded`,
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (f === `supported`) {
    let e;
    return (
      t[2] !== n || t[3] !== s || t[4] !== c || t[5] !== l || t[6] !== o
        ? ((e = (0, Q.jsx)(vt, {
            backend: n,
            browserUseEnabled: s,
            showHistory: c,
            showWebMcp: l,
            siteSettingsRow: o,
          })),
          (t[2] = n),
          (t[3] = s),
          (t[4] = c),
          (t[5] = l),
          (t[6] = o),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let p;
  t[8] !== n || t[9] !== s || t[10] !== l || t[11] !== o
    ? ((p =
        o != null || (s && l)
          ? (0, Q.jsxs)(Y, {
              children: [
                (0, Q.jsx)(Y.Header, {
                  title:
                    n === `chrome`
                      ? (0, Q.jsx)(D, {
                          id: `settings.computerUse.chrome.permissions.title`,
                          defaultMessage: `Permissions`,
                          description: `Title for Chromium browser permissions settings section`,
                        })
                      : (0, Q.jsx)(D, {
                          id: `settings.browserUse.permissions.title`,
                          defaultMessage: `Permissions`,
                          description: `Title for browser use permissions settings section`,
                        }),
                }),
                (0, Q.jsx)(Y.Content, {
                  children: (0, Q.jsxs)(H, {
                    children: [o, s && l ? (0, Q.jsx)(mt, { backend: n }) : null],
                  }),
                }),
              ],
            })
          : null),
      (t[8] = n),
      (t[9] = s),
      (t[10] = l),
      (t[11] = o),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] === s ? (m = t[14]) : ((m = s ? (0, Q.jsx)(at, {}) : null), (t[13] = s), (t[14] = m));
  let h;
  return (
    t[15] !== p || t[16] !== m
      ? ((h = (0, Q.jsxs)(Q.Fragment, { children: [p, m] })), (t[15] = p), (t[16] = m), (t[17] = h))
      : (h = t[17]),
    h
  );
}
var Tt, Q;
function Et() {
  return (Et = e(() => {
    ((Tt = k()), f(), w(), Oe(), qe(), ct(), Ct(), _t(), De(), ge(), Be(), R(), (Q = L()));
  }))();
}
function Dt(e) {
  let t = (0, Nt.c)(35),
    {
      emptyStateTitle: n,
      installButtonLabel: r,
      items: i,
      pluginsQuery: a,
      selectedHostId: o,
      unavailableItems: s,
    } = e,
    c;
  t[0] === s ? (c = t[1]) : ((c = s === void 0 ? [] : s), (t[0] = s), (t[1] = c));
  let l = c,
    d = j(),
    { installPlugin: f, status: p } = xe(),
    m;
  t[2] === o ? (m = t[3]) : ((m = { hostId: o }), (t[2] = o), (t[3] = m));
  let { pendingPluginId: h, setPluginEnabled: g } = Le(m),
    v;
  t[4] === o ? (v = t[5]) : ((v = { hostId: o }), (t[4] = o), (t[5] = v));
  let { pendingUninstallPluginId: y, uninstallPlugin: x } = Ee(v),
    C = p?.hostId === o ? p.pluginId : null,
    w = h ?? C ?? y,
    T = i.length + l.length;
  if (a.isLoading && T === 0) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(H, {
            children: (0, $.jsx)(Ve, {
              children: (0, $.jsx)(D, {
                id: `settings.plugins.controls.loading`,
                defaultMessage: `Loading plugins…`,
                description: `Loading state for plugin controls in settings`,
              }),
            }),
          })),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  if (a.errorMessage != null) {
    let e;
    return (
      t[7] === a
        ? (e = t[8])
        : ((e = (0, $.jsx)(H, {
            children:
              a.retry == null
                ? (0, $.jsx)(Me, { layout: `settings-row`, children: a.errorMessage })
                : (0, $.jsx)(J, {
                    control: (0, $.jsx)(M, {
                      color: `secondary`,
                      size: `toolbar`,
                      onClick: () => void a.retry?.(),
                      children: (0, $.jsx)(D, {
                        id: `settings.plugins.controls.retry`,
                        defaultMessage: `Retry`,
                        description: `Button to retry loading plugin settings after a request fails`,
                      }),
                    }),
                    label: (0, $.jsx)(`span`, { role: `alert`, children: a.errorMessage }),
                  }),
          })),
          (t[7] = a),
          (t[8] = e)),
      e
    );
  }
  if (T === 0) {
    let e;
    return (
      t[9] === n
        ? (e = t[10])
        : ((e = (0, $.jsx)(H, {
            children: (0, $.jsx)(Me, { layout: `settings-row`, children: n }),
          })),
          (t[9] = n),
          (t[10] = e)),
      e
    );
  }
  let E;
  if (
    t[11] !== r ||
    t[12] !== f ||
    t[13] !== i ||
    t[14] !== d ||
    t[15] !== w ||
    t[16] !== a.reload ||
    t[17] !== o ||
    t[18] !== g ||
    t[19] !== x
  ) {
    let e;
    (t[21] !== r ||
    t[22] !== f ||
    t[23] !== d ||
    t[24] !== w ||
    t[25] !== a.reload ||
    t[26] !== o ||
    t[27] !== g ||
    t[28] !== x
      ? ((e = (e) =>
          e.kind === `disclosure`
            ? (0, $.jsx)(
                `button`,
                {
                  "aria-expanded": e.expanded,
                  className: `group w-full cursor-interaction text-start focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
                  onClick: e.onToggleExpanded,
                  type: `button`,
                  children: (0, $.jsx)(J, {
                    className: `min-h-[60px]`,
                    control: (0, $.jsx)(b, {
                      className: B(`text-secondary`, e.expanded && `rotate-180`),
                      asset: u,
                      "aria-hidden": !1,
                    }),
                    description: e.description,
                    icon: (0, $.jsx)(`span`, {
                      className: `flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent`,
                      children:
                        e.icon ??
                        (0, $.jsx)(b, { className: `text-secondary`, "aria-hidden": !1, asset: S }),
                    }),
                    label: e.title,
                  }),
                },
                e.id,
              )
            : e.kind === `unavailable`
              ? (0, $.jsx)(kt, { item: e }, e.id)
              : e.kind === `app`
                ? (0, $.jsx)(
                    J,
                    {
                      className: `min-h-[60px]`,
                      control:
                        e.action == null && e.showEnableToggle === !1
                          ? null
                          : (0, $.jsxs)(`div`, {
                              className: `flex shrink-0 items-center gap-2`,
                              children: [
                                e.action,
                                e.showEnableToggle === !1
                                  ? null
                                  : (0, $.jsx)(_, {
                                      tooltipContent: e.toggleTooltip,
                                      children: (0, $.jsx)(z, {
                                        ariaLabel: e.toggleAriaLabel,
                                        checked: e.enabled,
                                        disabled: e.isPending === !0,
                                        onChange: e.onToggleEnabled,
                                      }),
                                    }),
                              ],
                            }),
                      description: e.description,
                      icon: (0, $.jsx)(`span`, {
                        className: `flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent`,
                        children:
                          e.icon ??
                          (0, $.jsx)(b, {
                            className: `text-secondary`,
                            "aria-hidden": !1,
                            asset: S,
                          }),
                      }),
                      label: e.title,
                    },
                    e.id,
                  )
                : (0, $.jsx)(
                    Mt,
                    {
                      installButtonLabel: r,
                      isPending: w === e.plugin.plugin.id,
                      item: e,
                      onInstallPlugin: (t) => {
                        f(t, {
                          browserFamily: e.browserFamily,
                          hostId: o,
                          marketplaceAnalytics: Te.settings,
                          onSuccess: a.reload,
                        });
                      },
                      onOpenPluginDetails: (e) => {
                        d(Ce(e, { hostId: o, breadcrumb: `settings` }));
                      },
                      onToggleInstalledPluginEnabled: (t, n) => {
                        g({
                          pluginId: t.plugin.id,
                          pluginDisplayName: e.displayName ?? we(t),
                          enabled: n,
                        });
                      },
                      onUninstallPlugin: (e) => {
                        x({
                          marketplaceName: e.marketplaceName,
                          pluginDisplayName: we(e),
                          pluginId: e.plugin.id,
                          pluginName: e.plugin.name,
                          requestPluginId: I(e),
                        });
                      },
                    },
                    e.id ?? e.plugin.plugin.id,
                  )),
        (t[21] = r),
        (t[22] = f),
        (t[23] = d),
        (t[24] = w),
        (t[25] = a.reload),
        (t[26] = o),
        (t[27] = g),
        (t[28] = x),
        (t[29] = e))
      : (e = t[29]),
      (E = i.map(e)),
      (t[11] = r),
      (t[12] = f),
      (t[13] = i),
      (t[14] = d),
      (t[15] = w),
      (t[16] = a.reload),
      (t[17] = o),
      (t[18] = g),
      (t[19] = x),
      (t[20] = E));
  } else E = t[20];
  let O;
  t[30] === l ? (O = t[31]) : ((O = l.map(Ot)), (t[30] = l), (t[31] = O));
  let k;
  return (
    t[32] !== E || t[33] !== O
      ? ((k = (0, $.jsx)($.Fragment, { children: (0, $.jsxs)(H, { children: [E, O] }) })),
        (t[32] = E),
        (t[33] = O),
        (t[34] = k))
      : (k = t[34]),
    k
  );
}
function Ot(e) {
  return (0, $.jsx)(kt, { item: e }, e.id);
}
function kt(e) {
  let t = (0, Nt.c)(8),
    { item: n } = e,
    r;
  t[0] === n.icon
    ? (r = t[1])
    : ((r = n.icon ?? (0, $.jsx)(b, { className: `text-secondary`, "aria-hidden": !1, asset: S })),
      (t[0] = n.icon),
      (t[1] = r));
  let i;
  t[2] === r
    ? (i = t[3])
    : ((i = (0, $.jsx)(`span`, {
        className: `flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent`,
        children: r,
      })),
      (t[2] = r),
      (t[3] = i));
  let a;
  return (
    t[4] !== n.description || t[5] !== n.title || t[6] !== i
      ? ((a = (0, $.jsx)(J, {
          className: `min-h-[60px] opacity-60`,
          label: n.title,
          description: n.description,
          icon: i,
          control: At,
        })),
        (t[4] = n.description),
        (t[5] = n.title),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function At(e) {
  return (0, $.jsx)(z, { ...e, checked: !1, disabled: !0, onChange: jt });
}
function jt() {}
function Mt(e) {
  let t = (0, Nt.c)(41),
    {
      installButtonLabel: n,
      isPending: r,
      item: i,
      onInstallPlugin: a,
      onOpenPluginDetails: o,
      onToggleInstalledPluginEnabled: s,
      onUninstallPlugin: l,
    } = e,
    u = P(),
    d,
    f,
    p,
    m,
    h;
  if (
    t[0] !== n ||
    t[1] !== u ||
    t[2] !== r ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== l
  ) {
    let e = i.displayName ?? we(i.plugin),
      g = i.plugin.plugin.installed,
      v = !he(i.plugin.plugin.id);
    m = `group flex min-h-[60px] items-center gap-3 px-4 py-3 text-sm hover:bg-text/5 max-sm:flex-wrap`;
    let y;
    t[13] !== i.plugin || t[14] !== o
      ? ((y = () => {
          o(i.plugin);
        }),
        (t[13] = i.plugin),
        (t[14] = o),
        (t[15] = y))
      : (y = t[15]);
    let b = i.showIconBorder === !1 ? `border-0` : `border border-default`,
      x;
    t[16] === b
      ? (x = t[17])
      : ((x = B(
          `flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-transparent`,
          b,
        )),
        (t[16] = b),
        (t[17] = x));
    let S =
        i.icon ??
        (0, $.jsx)(Re, {
          alt: e,
          className: `h-full w-full object-contain`,
          logoDarkUrl: i.plugin.logoDarkPath,
          logoUrl: i.plugin.logoPath,
          fallback: (0, $.jsx)(O, { className: `icon-md text-secondary` }),
        }),
      C;
    t[18] !== x || t[19] !== S
      ? ((C = (0, $.jsx)(`span`, { className: x, children: S })),
        (t[18] = x),
        (t[19] = S),
        (t[20] = C))
      : (C = t[20]);
    let w;
    t[21] === i.title
      ? (w = t[22])
      : ((w = (0, $.jsx)(`div`, {
          className: `min-w-0 truncate text-sm font-medium text-default`,
          children: i.title,
        })),
        (t[21] = i.title),
        (t[22] = w));
    let E;
    t[23] !== i.description || t[24] !== i.descriptionIndicator
      ? ((E =
          i.description == null
            ? null
            : (0, $.jsx)(`div`, {
                className: `min-w-0 truncate text-xs leading-4 text-secondary`,
                children:
                  i.descriptionIndicator == null
                    ? i.description
                    : (0, $.jsxs)(`span`, {
                        className: `inline-flex max-w-full items-center gap-2`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: B(
                              `h-2 w-2 shrink-0 rounded-full`,
                              i.descriptionIndicator === `success`
                                ? `bg-[var(--app-color-icon-success)]`
                                : `bg-[var(--app-color-icon-error)]`,
                            ),
                          }),
                          (0, $.jsx)(`span`, {
                            className: `min-w-0 truncate`,
                            children: i.description,
                          }),
                        ],
                      }),
              })),
        (t[23] = i.description),
        (t[24] = i.descriptionIndicator),
        (t[25] = E))
      : (E = t[25]);
    let k;
    (t[26] !== w || t[27] !== E
      ? ((k = (0, $.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-0.5`,
          children: [w, E],
        })),
        (t[26] = w),
        (t[27] = E),
        (t[28] = k))
      : (k = t[28]),
      t[29] !== C || t[30] !== k || t[31] !== y
        ? ((h = (0, $.jsxs)(`button`, {
            className: `flex min-w-0 flex-1 cursor-interaction appearance-none items-center gap-3 border-0 bg-transparent p-0 text-start text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
            type: `button`,
            onClick: y,
            children: [C, k],
          })),
          (t[29] = C),
          (t[30] = k),
          (t[31] = y),
          (t[32] = h))
        : (h = t[32]),
      (d = `flex shrink-0 items-center gap-2`),
      (f = i.action),
      (p = g
        ? (0, $.jsxs)($.Fragment, {
            children: [
              i.showManageActions === !0 && (v || i.onTryInChat != null)
                ? (0, $.jsx)(`div`, {
                    className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
                    children: (0, $.jsxs)(c, {
                      align: `end`,
                      contentWidth: `sm`,
                      triggerButton: (0, $.jsx)(K, {
                        label: u.formatMessage({
                          id: `settings.pluginControls.moreActions`,
                          defaultMessage: `More actions`,
                          description: `Aria label for the more actions menu in settings plugin controls`,
                        }),
                      }),
                      children: [
                        i.onTryInChat == null
                          ? null
                          : (0, $.jsx)(T.Item, {
                              leftIconAsset: ue,
                              onSelect: () => {
                                i.onTryInChat?.(i.plugin);
                              },
                              children: (0, $.jsx)(D, {
                                id: `settings.pluginControls.tryItNow`,
                                defaultMessage: `Try now`,
                                description: `Menu item label for trying a plugin in task from settings`,
                              }),
                            }),
                        v
                          ? (0, $.jsx)(T.Item, {
                              leftIconAsset: G,
                              className: `!text-danger`,
                              leftIconClassName: `text-danger`,
                              disabled: r,
                              onSelect: () => {
                                l(i.plugin);
                              },
                              children: (0, $.jsx)(D, {
                                id: `settings.pluginControls.delete`,
                                defaultMessage: `Delete`,
                                description: `Menu item label for deleting a plugin from settings`,
                              }),
                            })
                          : null,
                      ],
                    }),
                  })
                : null,
              i.showEnableToggle === !1
                ? null
                : (0, $.jsx)(_, {
                    tooltipContent: i.plugin.plugin.enabled
                      ? (0, $.jsx)(D, {
                          id: `settings.pluginControls.disableToggleTooltip`,
                          defaultMessage: `Disable {pluginName}`,
                          description: `Tooltip label for disabling a plugin from settings`,
                          values: { pluginName: e },
                        })
                      : (0, $.jsx)(D, {
                          id: `settings.pluginControls.enableToggleTooltip`,
                          defaultMessage: `Enable {pluginName}`,
                          description: `Tooltip label for enabling a plugin from settings`,
                          values: { pluginName: e },
                        }),
                    children: (0, $.jsx)(z, {
                      checked: i.plugin.plugin.enabled,
                      disabled: r,
                      ariaLabel: u.formatMessage(
                        {
                          id: `settings.pluginControls.toggleAria`,
                          defaultMessage: `Toggle {pluginName}`,
                          description: `Accessible label for toggling a plugin from settings`,
                        },
                        { pluginName: e },
                      ),
                      onChange: (e) => {
                        s(i.plugin, e);
                      },
                    }),
                  }),
            ],
          })
        : (0, $.jsx)(_, {
            tooltipContent: (0, $.jsx)(D, {
              id: `settings.pluginControls.installTooltip`,
              defaultMessage: `Install {pluginName}`,
              description: `Tooltip label for installing a plugin from settings`,
              values: { pluginName: e },
            }),
            children: (0, $.jsx)(`div`, {
              children: (0, $.jsx)(M, {
                "aria-label": u.formatMessage(
                  {
                    id: `settings.pluginControls.installTooltip`,
                    defaultMessage: `Install {pluginName}`,
                    description: `Tooltip label for installing a plugin from settings`,
                  },
                  { pluginName: e },
                ),
                color: `secondary`,
                disabled: r,
                loading: r,
                onClick: () => {
                  a(i.plugin);
                },
                size: `toolbar`,
                children: n,
              }),
            }),
          })),
      (t[0] = n),
      (t[1] = u),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h));
  } else ((d = t[8]), (f = t[9]), (p = t[10]), (m = t[11]), (h = t[12]));
  let g;
  t[33] !== d || t[34] !== f || t[35] !== p
    ? ((g = (0, $.jsxs)(`div`, { className: d, children: [f, p] })),
      (t[33] = d),
      (t[34] = f),
      (t[35] = p),
      (t[36] = g))
    : (g = t[36]);
  let v;
  return (
    t[37] !== m || t[38] !== h || t[39] !== g
      ? ((v = (0, $.jsxs)(`div`, { className: m, children: [h, g] })),
        (t[37] = m),
        (t[38] = h),
        (t[39] = g),
        (t[40] = v))
      : (v = t[40]),
    v
  );
}
var Nt, $;
function Pt() {
  return (Pt = e(() => {
    ((Nt = k()),
      ae(),
      p(),
      q(),
      ne(),
      U(),
      ve(),
      w(),
      N(),
      Pe(),
      y(),
      W(),
      i(),
      Oe(),
      x(),
      oe(),
      n(),
      h(),
      ze(),
      ye(),
      Ae(),
      be(),
      Se(),
      Be(),
      r(),
      R(),
      ($ = L()));
  }))();
}
function Ft(e, t, n) {
  let r = e.filter((e) => e.plugin.name === t || e.plugin.id.split(`@`)[0] === t),
    i = ce(E());
  return (
    (i == null ? void 0 : r.find((e) => e.marketplaceName === i)) ??
    r.find((e) => m(e.marketplaceName)) ??
    r.find((e) => e.marketplaceName === `openai-curated`) ??
    r.find((e) => je(n, e.marketplacePath)) ??
    null
  );
}
function It() {
  return (It = e(() => {
    (g(), Ie());
  }))();
}
export { wt as a, Pt as i, Ft as n, Et as o, Dt as r, It as t };
//# sourceMappingURL=settings-plugin-selection-1a585983308d.js.map
