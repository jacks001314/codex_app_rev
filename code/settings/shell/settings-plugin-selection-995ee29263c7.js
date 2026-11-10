import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  A3t as r,
  AMt as i,
  Amn as a,
  Aw as o,
  B6t as s,
  B9 as c,
  CW as l,
  Cj as u,
  Cpn as d,
  DGt as f,
  DKt as p,
  Dqt as m,
  Drn as h,
  E5 as g,
  EGt as _,
  F3t as v,
  FGt as y,
  Fx as b,
  Hu as x,
  IXt as S,
  Ix as C,
  JG as w,
  JK as T,
  JXt as E,
  Jit as D,
  Jrt as O,
  KG as k,
  KYt as A,
  Ken as j,
  Kit as M,
  M6t as N,
  N3t as P,
  N6t as F,
  O3t as I,
  O5 as L,
  OGt as R,
  OKt as z,
  OW as B,
  Opn as ee,
  Ow as V,
  QG as H,
  Qu as U,
  RS as te,
  Rpn as W,
  Rqt as ne,
  Sj as G,
  Spn as K,
  TW as re,
  Trn as ie,
  Uen as ae,
  Uw as q,
  V9 as oe,
  VS as J,
  Vu as se,
  Xdt as ce,
  Xrt as le,
  Xu as ue,
  Yrt as de,
  ZG as fe,
  Zrt as pe,
  Zu as me,
  Zw as he,
  _Gt as ge,
  a3t as _e,
  aT as ve,
  aYt as ye,
  ayt as be,
  bpn as xe,
  brn as Se,
  dk as Ce,
  eit as we,
  fk as Te,
  gMt as Ee,
  hMt as De,
  hmn as Oe,
  iit as ke,
  jXt as Ae,
  k5 as je,
  kGt as Me,
  kMt as Ne,
  kW as Pe,
  kXt as Fe,
  kmn as Ie,
  krn as Le,
  llt as Re,
  nit as ze,
  o3t as Be,
  oT as Ve,
  oYt as He,
  pk as Ue,
  put as We,
  qK as Ge,
  qYt as Ke,
  qu as qe,
  rit as Je,
  rrn as Ye,
  ryt as Xe,
  sYt as Ze,
  tit as Qe,
  uk as $e,
  vit as et,
  wGt as tt,
  xqt as nt,
  yit as rt,
  zpn as it,
} from "./app-initial-f094ef01c64d.js";
import {
  Bw as at,
  Gw as ot,
  Jh as st,
  Jt as ct,
  Kt as lt,
  Kw as ut,
  Xt as dt,
  Yt as ft,
  fE as pt,
  mE as mt,
  pE as ht,
  qh as gt,
  qt as _t,
  sE as vt,
  zw as yt,
} from "./app-primary-4c40d73a1074.js";
import {
  D as bt,
  E as xt,
  S as St,
  T as Ct,
  b as wt,
  c as Tt,
  d as Et,
  f as Dt,
  g as Ot,
  h as kt,
  i as At,
  l as jt,
  m as Mt,
  n as Nt,
  o as Pt,
  p as Ft,
  s as It,
  t as Lt,
  u as Rt,
  v as zt,
  w as Bt,
  x as Vt,
  y as Ht,
} from "./browser-use-origin-state-queries-f68e66dda925.js";
import { n as Ut, t as Wt } from "./settings-loading-row-de4ab81779d6.js";
function Gt(e) {
  let t = (0, qt.c)(4),
    { backend: n } = e,
    r = n === void 0 ? `iab` : n,
    { selectedHostId: i } = o();
  if (Ke(i).kind !== `local`) return null;
  let a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Jt.jsx)(me.Header, {
        title: (0, Jt.jsx)(d, {
          id: `settings.browserUse.developerMode.title`,
          defaultMessage: `Developer mode`,
          description: `Title for full CDP developer mode settings`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let s;
  return (
    t[1] !== r || t[2] !== i
      ? ((s = (0, Jt.jsx)(Jt.Fragment, {
          children: (0, Jt.jsxs)(me, {
            children: [
              a,
              (0, Jt.jsx)(me.Content, {
                children: (0, Jt.jsx)(se, { children: (0, Jt.jsx)(Kt, { backend: r, hostId: i }) }),
              }),
            ],
          }),
        })),
        (t[1] = r),
        (t[2] = i),
        (t[3] = s))
      : (s = t[3]),
    s
  );
}
function Kt(e) {
  let t = (0, qt.c)(27),
    { backend: n, hostId: r } = e,
    i = ee(),
    { data: a, isLoading: o } = v(Lt),
    s;
  t[0] === r ? (s = t[1]) : ((s = { hostId: r }), (t[0] = r), (t[1] = s));
  let { data: c, isPending: l } = P(nt, s),
    u;
  t[2] === r ? (u = t[3]) : ((u = { hostId: r }), (t[2] = r), (t[3] = u));
  let f = jt(u),
    p = P(Ze(`370972467`) ? Nt : !1, r),
    m = p !== !1 && p !== `unsupported`,
    h;
  t[4] !== n || t[5] !== c || t[6] !== m
    ? ((h =
        y(c?.requirements?.featureRequirements?.browser_use_full_cdp_access) ||
        (m && c != null && !Ct(c.requirements, n === `iab` ? `iab` : `extension`))),
      (t[4] = n),
      (t[5] = c),
      (t[6] = m),
      (t[7] = h))
    : (h = t[7]);
  let g = h,
    _ = o || l || p === `loading` || p === `error`,
    b = a?.fullCdpAccessEnabled === !0 && !_ && !g,
    x;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Jt.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, Jt.jsxs)(`span`, {
            className: `inline-flex items-center gap-1 font-medium text-warning`,
            children: [
              (0, Jt.jsx)(De, { className: `shrink-0`, "aria-hidden": !1, asset: dt }),
              (0, Jt.jsx)(d, {
                id: `settings.browserUse.fullCdp.elevatedRisk.label`,
                defaultMessage: `Elevated risk`,
                description: `Label for the elevated risk warning shown for the full CDP developer mode toggle`,
              }),
            ],
          }),
          (0, Jt.jsx)(`span`, {
            children: (0, Jt.jsx)(d, {
              id: `settings.browserUse.fullCdp.label`,
              defaultMessage: `Enable full CDP access`,
              description: `Label for the full CDP developer mode toggle`,
            }),
          }),
        ],
      })),
      (t[8] = x))
    : (x = t[8]);
  let S;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Jt.jsx)(`div`, {
        children: (0, Jt.jsx)(d, {
          id: `settings.browserUse.fullCdp.description`,
          defaultMessage: `Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.`,
          description: `Description for the full CDP developer mode toggle`,
        }),
      })),
      (t[9] = S))
    : (S = t[9]);
  let C;
  t[10] !== g || t[11] !== l
    ? ((C =
        !l && g
          ? (0, Jt.jsx)(`div`, {
              children: (0, Jt.jsx)(d, {
                id: `settings.browserUse.fullCdp.blockedByPolicy`,
                defaultMessage: `Your organization has disabled this setting.`,
                description: `Message shown below the Full CDP access toggle in Browser Use Developer mode when enterprise managed policy explicitly disables the setting. The user cannot enable the toggle.`,
              }),
            })
          : null),
      (t[10] = g),
      (t[11] = l),
      (t[12] = C))
    : (C = t[12]);
  let w;
  t[13] === C
    ? (w = t[14])
    : ((w = (0, Jt.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [S, C] })),
      (t[13] = C),
      (t[14] = w));
  let T;
  t[15] === i
    ? (T = t[16])
    : ((T = i.formatMessage({
        id: `settings.browserUse.fullCdp.ariaLabel`,
        defaultMessage: `Toggle full CDP access`,
        description: `Aria label for toggling full CDP access`,
      })),
      (t[15] = i),
      (t[16] = T));
  let E = _ || g || f.isPending,
    D;
  t[17] === f
    ? (D = t[18])
    : ((D = (e) => {
        f.mutate(e);
      }),
      (t[17] = f),
      (t[18] = D));
  let O;
  t[19] !== b || t[20] !== D || t[21] !== T || t[22] !== E
    ? ((O = (0, Jt.jsx)(H, { ariaLabel: T, checked: b, disabled: E, onChange: D })),
      (t[19] = b),
      (t[20] = D),
      (t[21] = T),
      (t[22] = E),
      (t[23] = O))
    : (O = t[23]);
  let k;
  return (
    t[24] !== O || t[25] !== w
      ? ((k = (0, Jt.jsx)(qe, { label: x, description: w, control: O })),
        (t[24] = O),
        (t[25] = w),
        (t[26] = k))
      : (k = t[26]),
    k
  );
}
var qt,
  Jt,
  Yt = e(() => {
    ((qt = Ie()),
      ft(),
      ge(),
      I(),
      Mt(),
      K(),
      Ee(),
      n(),
      m(),
      At(),
      U(),
      V(),
      ue(),
      x(),
      A(),
      ye(),
      (Jt = Oe()));
  });
function Xt() {
  let e = (0, Qt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $t.jsx)(d, {
          id: `settings.browserUse.historyApproval.description`,
          defaultMessage: `Choose if ChatGPT asks for approval before accessing your browser's history`,
          description: `Description for browser use history approval mode setting`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Zt() {
  let e = (0, Qt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $t.jsx)(d, {
          id: `settings.browserUse.iabHistoryApproval.description`,
          defaultMessage: `Choose whether ChatGPT can access your built-in browser history`,
          description: `Description for in-app browser history approval mode setting`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Qt,
  $t,
  en = e(() => {
    ((Qt = Ie()), K(), ($t = Oe()));
  });
function tn(e) {
  let t = (0, rn.c)(8),
    { children: n, managed: r } = e,
    i = ee();
  if (!r) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, an.jsx)(an.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, an.jsx)(nn, {})), (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i ? (o = t[4]) : ((o = i.formatMessage(on)), (t[3] = i), (t[4] = o));
  let s;
  return (
    t[5] !== n || t[6] !== o
      ? ((s = (0, an.jsx)(M, {
          tooltipContent: a,
          children: (0, an.jsx)(`span`, {
            "aria-disabled": `true`,
            "aria-label": o,
            className: `inline-flex`,
            role: `button`,
            tabIndex: 0,
            children: n,
          }),
        })),
        (t[5] = n),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function nn(e) {
  let t = (0, rn.c)(1),
    n;
  return (
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, an.jsx)(d, { ...on })), (t[0] = n))
      : (n = t[0]),
    n
  );
}
var rn,
  an,
  on,
  sn = e(() => {
    ((rn = Ie()),
      K(),
      D(),
      (an = Oe()),
      (on = xe({
        id: `settings.browserUse.managed.explanation`,
        defaultMessage: `Managed by your enterprise admin`,
        description: `Tooltip explaining that a Browser Use setting is controlled by an enterprise administrator`,
      })));
  });
function cn(e) {
  let t = (0, un.c)(31),
    {
      browserClientAllowed: n,
      enterprisePolicy: i,
      onChange: a,
      originsConfig: o,
      userConfig: s,
      visibleResources: c,
    } = e,
    l = r(_e),
    u = Pt(),
    f = Tt(),
    p;
  t[0] !== o.approvalMode || t[1] !== o.downloadApprovalMode || t[2] !== o.uploadApprovalMode
    ? ((p = {
        origin: o.approvalMode,
        download: o.downloadApprovalMode,
        upload: o.uploadApprovalMode,
      }),
      (t[0] = o.approvalMode),
      (t[1] = o.downloadApprovalMode),
      (t[2] = o.uploadApprovalMode),
      (t[3] = p))
    : (p = t[3]);
  let m = p,
    h;
  t[4] === i ? (h = t[5]) : ((h = bt(i) && xt(i, `persistentApproval`)), (t[4] = i), (t[5] = h));
  let g = h,
    _;
  t[6] !== m || t[7] !== a || t[8] !== l || t[9] !== u || t[10] !== f
    ? ((_ = (e, t, n) => {
        if (t === m[e]) {
          n || a({ capability: e, enabled: !0 });
          return;
        }
        (async () => {
          try {
            (e === `origin`
              ? await u.mutateAsync(t)
              : await f.mutateAsync({ approvalMode: t, kind: e }),
              n || a({ capability: e, enabled: !0 }));
          } catch {
            l.get(Ae).danger(
              (0, dn.jsx)(d, {
                id: `settings.browserUse.approval.saveError`,
                defaultMessage: `Unable to save approval setting`,
                description: `Toast shown when saving a browser use approval mode fails`,
              }),
            );
          }
        })();
      }),
      (t[6] = m),
      (t[7] = a),
      (t[8] = l),
      (t[9] = u),
      (t[10] = f),
      (t[11] = _))
    : (_ = t[11]);
  let v = _,
    y;
  if (
    t[12] !== m ||
    t[13] !== n ||
    t[14] !== i ||
    t[15] !== v ||
    t[16] !== a ||
    t[17] !== g ||
    t[18] !== s?.default_origin_policy ||
    t[19] !== c
  ) {
    let e;
    (t[21] !== m ||
    t[22] !== n ||
    t[23] !== i ||
    t[24] !== v ||
    t[25] !== a ||
    t[26] !== g ||
    t[27] !== s?.default_origin_policy
      ? ((e = (e) => {
          let t = n && xt(i, e),
            r = Ot(s?.default_origin_policy, e) !== `deny`,
            o = t && r,
            c = e !== `fullCdp`,
            l = (e === `fullCdp` ? void 0 : m[e]) === `neverAsk` && g ? `neverAsk` : `alwaysAsk`;
          return (0, dn.jsx)(
            `td`,
            {
              "aria-labelledby": `browser-use-site-permissions-default browser-use-site-permissions-column-${e}`,
              className: `px-2 py-3`,
              children: (0, dn.jsx)(tn, {
                managed: !t,
                children: (0, dn.jsxs)(k, {
                  align: `end`,
                  disabled: !t,
                  triggerButton: (0, dn.jsxs)(te, {
                    "aria-labelledby": `browser-use-site-permissions-default browser-use-site-permissions-column-${e}`,
                    className: `w-full`,
                    disabled: !t,
                    children: [
                      t ? null : (0, dn.jsx)(We, { className: `text-secondary` }),
                      (0, dn.jsx)(`span`, {
                        className: `truncate`,
                        children: (0, dn.jsx)(ln, { allowed: o, approvalMode: c ? l : void 0 }),
                      }),
                    ],
                  }),
                  children: [
                    (0, dn.jsx)(w.Item, {
                      RightIcon: o && (!c || l === `alwaysAsk`) ? Re : void 0,
                      onSelect: () => {
                        if (e === `fullCdp`) {
                          a({ capability: e, enabled: !0 });
                          return;
                        }
                        v(e, `alwaysAsk`, r);
                      },
                      children: (0, dn.jsx)(ln, {
                        allowed: !0,
                        approvalMode: c ? `alwaysAsk` : void 0,
                      }),
                    }),
                    c
                      ? (0, dn.jsx)(w.Item, {
                          RightIcon: o && l === `neverAsk` ? Re : void 0,
                          disabled: !g,
                          tooltipText: g ? void 0 : (0, dn.jsx)(nn, {}),
                          onSelect: () => {
                            g && v(e, `neverAsk`, r);
                          },
                          children: (0, dn.jsx)(ln, { allowed: !0, approvalMode: `neverAsk` }),
                        })
                      : null,
                    (0, dn.jsx)(w.Item, {
                      RightIcon: o ? void 0 : Re,
                      onSelect: () => {
                        a({ capability: e, enabled: !1 });
                      },
                      children: (0, dn.jsx)(ln, { allowed: !1 }),
                    }),
                  ],
                }),
              }),
            },
            e,
          );
        }),
        (t[21] = m),
        (t[22] = n),
        (t[23] = i),
        (t[24] = v),
        (t[25] = a),
        (t[26] = g),
        (t[27] = s?.default_origin_policy),
        (t[28] = e))
      : (e = t[28]),
      (y = c.map(e)),
      (t[12] = m),
      (t[13] = n),
      (t[14] = i),
      (t[15] = v),
      (t[16] = a),
      (t[17] = g),
      (t[18] = s?.default_origin_policy),
      (t[19] = c),
      (t[20] = y));
  } else y = t[20];
  let b;
  return (
    t[29] === y
      ? (b = t[30])
      : ((b = (0, dn.jsx)(dn.Fragment, { children: y })), (t[29] = y), (t[30] = b)),
    b
  );
}
function ln(e) {
  let t = (0, un.c)(4),
    { allowed: n, approvalMode: r } = e;
  if (!n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, dn.jsx)(d, {
            id: `settings.browserUse.sitePermissions.defaultValue.denied`,
            defaultMessage: `Block`,
            description: `Blocked default value for a browser site permission`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r === `alwaysAsk`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, dn.jsx)(d, {
            id: `settings.browserUse.sitePermissions.defaultValue.approvalRequired`,
            defaultMessage: `Requires approval`,
            description: `Default browser permission that requires individual user approval`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (r === `neverAsk`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, dn.jsx)(d, {
            id: `settings.browserUse.sitePermissions.defaultValue.alwaysAllowed`,
            defaultMessage: `Always allow`,
            description: `Default browser permission that allows actions without requiring individual user approval`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let i;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, dn.jsx)(d, {
          id: `settings.browserUse.sitePermissions.defaultValue.allowed`,
          defaultMessage: `Allow`,
          description: `Allowed default value for a browser site capability`,
        })),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
var un,
  dn,
  fn = e(() => {
    ((un = Ie()), I(), Mt(), K(), fe(), ce(), Fe(), Be(), At(), J(), sn(), (dn = Oe()));
  });
function pn(e, t, n) {
  let r = f(n),
    i = r == null ? null : mn(Object.entries(e?.origins ?? {}), e?.defaultOriginPolicy, r),
    a =
      r == null
        ? null
        : mn(
            Object.entries(t?.origins ?? {}).map(([e, t]) => [e, hn(t)]),
            hn(t?.default_origin_policy),
            r,
          ),
    o = {
      access: gn(i?.access, a?.access, `deny`) ?? `allow`,
      uploads: gn(i?.uploads, a?.uploads, `deny`) ?? `allow`,
      downloads: gn(i?.downloads, a?.downloads, `deny`) ?? `allow`,
      fullCdpAccess: gn(i?.fullCdpAccess, a?.fullCdpAccess, `deny`) ?? `allow`,
      autoReview: gn(i?.autoReview, a?.autoReview, `deny`) ?? `allow`,
      persistentApproval: gn(i?.persistentApproval, a?.persistentApproval, !1) ?? !0,
      accessApprovalLifetime:
        gn(i?.accessApprovalLifetime, a?.accessApprovalLifetime, `turn`) ?? `thread`,
    };
  return o.access === `deny`
    ? { ...o, uploads: `deny`, downloads: `deny`, fullCdpAccess: `deny`, autoReview: `deny` }
    : o;
}
function mn(e, t, n) {
  let r = e.map(([e, t]) => ({ pattern: Me(e), policy: t })),
    i = new Map();
  for (let { pattern: e } of r)
    e != null && i.set(e.canonicalKey, (i.get(e.canonicalKey) ?? 0) + 1);
  let a = r.flatMap(({ pattern: e, policy: t }) =>
    e == null || t == null || !_(e, n)
      ? []
      : [{ policy: t, acceptsPermissiveValues: i.get(e.canonicalKey) === 1 }],
  );
  function o(e, n) {
    let r = null;
    for (let { policy: t, acceptsPermissiveValues: i } of a) {
      let a = t[e];
      if (a === n) return a;
      i && a != null && (r = a);
    }
    return r ?? t?.[e] ?? null;
  }
  return {
    access: o(`access`, `deny`),
    uploads: o(`uploads`, `deny`),
    downloads: o(`downloads`, `deny`),
    fullCdpAccess: o(`fullCdpAccess`, `deny`),
    autoReview: o(`autoReview`, `deny`),
    persistentApproval: o(`persistentApproval`, !1),
    accessApprovalLifetime: o(`accessApprovalLifetime`, `turn`),
  };
}
function hn(e) {
  if (e != null)
    return {
      access: e.access,
      uploads: e.uploads,
      downloads: e.downloads,
      fullCdpAccess: e.full_cdp_access,
    };
}
function gn(e, t, n) {
  return e === n || t === n ? n : (e ?? t ?? null);
}
var _n = e(() => {
  R();
});
function vn(e) {
  return [`origin`, `download`, `upload`, ...(e ? [`fullCdp`] : [])];
}
function yn(e, t, n = null, r, i, a) {
  let o = new Set();
  for (let n of t) {
    for (let t of jn(e, n, `allowed`)) o.add(t);
    for (let t of jn(e, n, `denied`)) o.add(t);
  }
  let s = Mn.safeParse(a?.config);
  if (a?.name.type === `user` && s.success)
    for (let [e, t] of Object.entries(s.data.browser_use?.origins ?? {})) {
      let n = Me(e);
      n != null &&
        t != null &&
        [`access`, `downloads`, `uploads`, `full_cdp_access`].some(
          (e) => t[e] === `allow` || t[e] === `deny`,
        ) &&
        o.add(n.canonicalPattern);
    }
  let c = new Set(o);
  for (let [e, t] of Object.entries(r?.origins ?? {})) {
    let n = Me(e);
    t == null || n == null || !Object.values(t).some((e) => e != null) || c.add(n.canonicalPattern);
  }
  if (n != null) {
    let e = n.browserUse?.defaultOriginPolicy;
    for (let t of Vt(n))
      (e?.access === `deny` ? t.policy.access === `allow` : Dn(t, e)) && c.add(t.pattern);
    for (let e of wt(n)) {
      if (e.decision !== `deny` && n.network?.managedAllowedDomainsOnly !== !0) continue;
      let t = Me(
        `https://${e.pattern.canonicalPattern.includes(`:`) ? `[${e.pattern.canonicalPattern}]` : e.pattern.canonicalPattern}`,
      );
      t != null && c.add(t.canonicalPattern);
    }
  }
  return [...c]
    .filter((e) => {
      if (o.has(e) || n == null) return !0;
      let t = wn(n, e);
      return n.network?.managedAllowedDomainsOnly === !0 && t.length === 0
        ? !1
        : n.browserUse?.defaultOriginPolicy?.access !== `deny` ||
            kn(e) ||
            Cn(n, e).some((e) => e.policy.access === `allow`) ||
            Bt(n, e, `origin`);
    })
    .sort((e, t) => e.localeCompare(t))
    .map((a) => {
      let s = pn(null, r, a),
        c = Bt(n, a, `persistentApproval`),
        l = i != null && tt(a, i) === `deny`,
        u = {},
        d = Cn(n, a),
        f = wn(n, a),
        p = {};
      for (let e of t) d.some((t) => On(n, t, e)) && (p[e] = !0);
      n != null &&
        (f.some(({ decision: e }) => e === `deny`) ||
          (n.network?.managedAllowedDomainsOnly === !0 &&
            f.some(({ decision: e }) => e === `allow`))) &&
        (p.origin = !0);
      let m = (t) => {
        let r = An(e, t, a);
        return Tn(n, d, a, t)
          ? l || s[En(t)] === `deny`
            ? ((u[t] = `user`), `denied`)
            : r === `allowed` && !c
              ? `default`
              : r
          : (xt(n, t) || (u[t] = `organization`), `denied`);
      };
      return {
        origin: a,
        values: {
          origin: m(`origin`),
          download: m(`download`),
          upload: m(`upload`),
          fullCdp: m(`fullCdp`),
        },
        ...(Object.keys(u).length === 0 ? {} : { inheritedRestrictions: u }),
        ...(Object.keys(p).length === 0 ? {} : { managedResources: p }),
        hasUserPermissions: o.has(a),
        ...(l ? { networkBlocked: !0 } : {}),
      };
    });
}
function bn(e, t, n) {
  let r = {};
  for (let e of n) {
    let n = {
        origin: `access`,
        download: `downloads`,
        upload: `uploads`,
        fullCdp: `full_cdp_access`,
      },
      i = t[e];
    i === `denied`
      ? (r[n[e]] = `deny`)
      : i === `allowed` || i === `ask`
        ? (r[n[e]] = `allow`)
        : (r[n[e]] = null);
  }
  return { origin: e, policy: r };
}
function xn(e, t) {
  return t.some((t) => t !== `origin` && e.values[t] !== "default") || e.values.origin === "default"
    ? `custom`
    : e.values.origin;
}
function Sn({ nextValues: e, origin: t, resources: n, values: r }) {
  return n.flatMap((n) => {
    let i = r[n],
      a = e[n];
    if (a === i) return [];
    switch (a) {
      case `ask`:
      case `default`:
        return [
          { action: `remove`, kind: `allowed`, origin: t, resource: n },
          { action: `remove`, kind: `denied`, origin: t, resource: n },
        ];
      case `allowed`:
      case `denied`:
        return [{ action: `add`, kind: a, origin: t, resource: n }];
    }
  });
}
function Cn(e, t) {
  return e == null
    ? []
    : kn(t)
      ? Vt(e).filter((e) => e.pattern === t)
      : Vt(e).filter((e) => Ht(e, t));
}
function wn(e, t) {
  return e == null ? [] : wt(e).filter((e) => zt(e, t));
}
function Tn(e, t, n, r) {
  if (!kn(n)) return Bt(e, n, r);
  if (e == null) return !0;
  if (
    e.allowBrowserAndComputerUse === !1 ||
    e.network?.enabled === !1 ||
    (e.featureRequirements?.browser_use === !1 && e.featureRequirements.browser_use_external === !1)
  )
    return !1;
  let i = wn(e, n);
  if (
    i.some(({ decision: e }) => e === `deny`) ||
    (e.network?.managedAllowedDomainsOnly === !0 && !i.some(({ decision: e }) => e === `allow`))
  )
    return !1;
  let a = En(r),
    o = t.flatMap((e) => {
      let t = e.policy[a];
      return t == null ? [] : [t];
    });
  if (o.includes(`deny`) || o.includes(!1)) return !1;
  if (o.includes(`allow`) || o.includes(!0)) return !0;
  let s = e.browserUse?.defaultOriginPolicy?.[a];
  return s !== `deny` && s !== !1;
}
function En(e) {
  switch (e) {
    case `origin`:
      return `access`;
    case `download`:
      return `downloads`;
    case `upload`:
      return `uploads`;
    case `fullCdp`:
      return `fullCdpAccess`;
  }
}
function Dn(e, t) {
  let { policy: n } = e;
  return (
    n.access === `deny` ||
    n.downloads === `deny` ||
    n.uploads === `deny` ||
    n.fullCdpAccess === `deny` ||
    n.persistentApproval === !1 ||
    (n.downloads === `allow` && t?.downloads === `deny`) ||
    (n.uploads === `allow` && t?.uploads === `deny`) ||
    (n.fullCdpAccess === `allow` && t?.fullCdpAccess === `deny`) ||
    (n.persistentApproval === !0 && t?.persistentApproval === !1)
  );
}
function On(e, t, n) {
  let r = t.policy[En(n)];
  if (r === `deny` || r === !1) return !0;
  if (e == null) return !1;
  let i = e.browserUse?.defaultOriginPolicy?.[En(n)];
  return (r === `allow` && i === `deny`) || (r === !0 && i === !1);
}
function kn(e) {
  return e.includes(`*`);
}
function An(e, t, n) {
  return jn(e, t, `denied`).includes(n)
    ? `denied`
    : jn(e, t, `allowed`).includes(n)
      ? `allowed`
      : `default`;
}
function jn(e, t, n) {
  switch (t) {
    case `origin`:
      return n === `allowed` ? e.allowedOrigins : e.deniedOrigins;
    case `download`:
      return n === `allowed` ? e.allowedDownloadOrigins : e.deniedDownloadOrigins;
    case `upload`:
      return n === `allowed` ? e.allowedUploadOrigins : e.deniedUploadOrigins;
    case `fullCdp`:
      return n === `allowed` ? e.allowedFullCdpOrigins : e.deniedFullCdpOrigins;
  }
}
var Mn,
  Nn = e(() => {
    (ge(),
      _n(),
      Mt(),
      Ye(),
      (Mn = ie({
        browser_use: ie({ origins: h(Le(), h(Le(), Se()).nullable()).nullish() }).nullish(),
      })));
  });
function Pn(e) {
  let t = (0, er.c)(24),
    { backend: n } = e,
    i = r(_e),
    { selectedHostId: a } = o(),
    { data: s, isError: c, isLoading: l } = v(Lt),
    { data: u, isPending: d, isError: f } = P(ne, a),
    p;
  t[0] === a ? (p = t[1]) : ((p = { failClosed: !0, hostId: a }), (t[0] = a), (t[1] = p));
  let { data: m, isError: h, isPending: g } = P(nt, p),
    _ = m?.requirements ?? null,
    b = u?.configReadSucceeded === !0 ? u.config.browser_use : null,
    x = s?.fullCdpAccessEnabled === !0,
    S = c || h || f || u?.configReadSucceeded === !1,
    C = l || g || d,
    w;
  t[2] !== m?.requirements?.featureRequirements || t[3] !== h || t[4] !== g || t[5] !== x
    ? ((w = x && !h && !g && !y(m?.requirements?.featureRequirements?.browser_use_full_cdp_access)),
      (t[2] = m?.requirements?.featureRequirements),
      (t[3] = h),
      (t[4] = g),
      (t[5] = x),
      (t[6] = w))
    : (w = t[6]);
  let T = w,
    E = u?.userConfigLayer,
    D = u?.config,
    O;
  t[7] === D ? (O = t[8]) : ((O = kt(D)), (t[7] = D), (t[8] = O));
  let k;
  t[9] !== i || t[10] !== a || t[11] !== u
    ? ((k = (e) => {
        Ft(i, a, u, e).catch(() => {
          i.get(Ae).danger($n());
        });
      }),
      (t[9] = i),
      (t[10] = a),
      (t[11] = u),
      (t[12] = k))
    : (k = t[12]);
  let A;
  return (
    t[13] !== n ||
    t[14] !== _ ||
    t[15] !== S ||
    t[16] !== T ||
    t[17] !== C ||
    t[18] !== s ||
    t[19] !== E ||
    t[20] !== O ||
    t[21] !== k ||
    t[22] !== b
      ? ((A = (0, Y.jsx)(Fn, {
          backend: n,
          enterprisePolicy: _,
          originsConfig: s,
          isError: S,
          isFullCdpAccessEnabled: T,
          isLoading: C,
          userConfig: b,
          userConfigLayer: E,
          userNetworkPolicy: O,
          onDefaultPermissionChange: k,
        })),
        (t[13] = n),
        (t[14] = _),
        (t[15] = S),
        (t[16] = T),
        (t[17] = C),
        (t[18] = s),
        (t[19] = E),
        (t[20] = O),
        (t[21] = k),
        (t[22] = b),
        (t[23] = A))
      : (A = t[23]),
    A
  );
}
function Fn(e) {
  let t = (0, er.c)(55),
    {
      backend: n,
      enterprisePolicy: r,
      isError: i,
      isFullCdpAccessEnabled: a,
      isLoading: o,
      onDefaultPermissionChange: s,
      originsConfig: c,
      userConfig: l,
      userConfigLayer: u,
      userNetworkPolicy: f,
    } = e,
    p = n === void 0 ? `iab` : n,
    m = r === void 0 ? null : r,
    [h, g] = (0, tr.useState)(!1),
    _ = p === `iab` ? `iab` : `extension`,
    v;
  t[0] !== m || t[1] !== _ ? ((v = Ct(m, _)), (t[0] = m), (t[1] = _), (t[2] = v)) : (v = t[2]);
  let y = v,
    b,
    x,
    S,
    w;
  if (
    t[3] !== y ||
    t[4] !== m ||
    t[5] !== a ||
    t[6] !== c ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== f
  ) {
    ((w = vn(a)), (x = c == null ? null : yn(c, w, m, l, f, u)));
    let e =
        m?.browserUse?.defaultOriginPolicy?.access === `deny` ||
        m?.network?.managedAllowedDomainsOnly === !0,
      n = !y || m?.allowBrowserAndComputerUse === !1 || m?.network?.enabled === !1,
      r;
    (t[14] === m
      ? (r = t[15])
      : ((r = m != null && (Vt(m).some(Ln) || wt(m).some(In))), (t[14] = m), (t[15] = r)),
      (b = n || (e && !r)),
      (S = St(m) && (b || w.some((e) => !xt(m, e)) || Rn(m))),
      (t[3] = y),
      (t[4] = m),
      (t[5] = a),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = f),
      (t[10] = b),
      (t[11] = x),
      (t[12] = S),
      (t[13] = w));
  } else ((b = t[10]), (x = t[11]), (S = t[12]), (w = t[13]));
  let T = S,
    E = i || o || x == null || b,
    D;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        g(!0);
      }),
      (t[16] = D))
    : (D = t[16]);
  let O;
  t[17] === b
    ? (O = t[18])
    : ((O = b ? (0, Y.jsx)(We, {}) : (0, Y.jsx)(De, { "aria-hidden": !1, asset: C })),
      (t[17] = b),
      (t[18] = O));
  let k;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Y.jsx)(d, {
        id: `settings.browserUse.domains.add`,
        defaultMessage: `Add`,
        description: `Button label to add a browser use domain`,
      })),
      (t[19] = k))
    : (k = t[19]);
  let A;
  t[20] !== E || t[21] !== O
    ? ((A = (0, Y.jsxs)(Ne, {
        color: `secondary`,
        disabled: E,
        size: `toolbar`,
        onClick: D,
        children: [O, k],
      })),
      (t[20] = E),
      (t[21] = O),
      (t[22] = A))
    : (A = t[22]);
  let j;
  t[23] !== b || t[24] !== A
    ? ((j = (0, Y.jsx)(tn, { managed: b, children: A })), (t[23] = b), (t[24] = A), (t[25] = j))
    : (j = t[25]);
  let M, N;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.title`,
        defaultMessage: `Site permissions`,
        description: `Title for browser use site permissions table`,
      })),
      (N = (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.matrixSubtitle`,
        defaultMessage: `Choose default permissions and add exceptions for specific sites`,
        description: `Subtitle for the browser site permissions matrix with defaults and site-specific overrides`,
      })),
      (t[26] = M),
      (t[27] = N))
    : ((M = t[26]), (N = t[27]));
  let P;
  t[28] === j
    ? (P = t[29])
    : ((P = (0, Y.jsx)(me.Header, { size: `base`, actions: j, title: M, subtitle: N })),
      (t[28] = j),
      (t[29] = P));
  let F;
  t[30] !== y ||
  t[31] !== m ||
  t[32] !== i ||
  t[33] !== o ||
  t[34] !== s ||
  t[35] !== c ||
  t[36] !== x ||
  t[37] !== l ||
  t[38] !== w
    ? ((F = (0, Y.jsx)(me.Content, {
        children: (0, Y.jsx)(se, {
          children: i
            ? (0, Y.jsx)(B, {
                layout: `settings-row`,
                children: (0, Y.jsx)(d, {
                  id: `settings.browserUse.sitePermissions.loadError`,
                  defaultMessage: `Unable to load site permissions`,
                  description: `Message shown when browser site permissions fail to load`,
                }),
              })
            : o || x == null || c == null
              ? (0, Y.jsx)(Wt, {
                  children: (0, Y.jsx)(d, {
                    id: `settings.browserUse.sitePermissions.loading`,
                    defaultMessage: `Loading websites…`,
                    description: `Message shown while loading browser site permissions`,
                  }),
                })
              : (0, Y.jsx)(zn, {
                  browserClientAllowed: y,
                  enterprisePolicy: m,
                  onDefaultPermissionChange: s,
                  originsConfig: c,
                  rows: x,
                  userConfig: l,
                  visibleResources: w,
                }),
        }),
      })),
      (t[30] = y),
      (t[31] = m),
      (t[32] = i),
      (t[33] = o),
      (t[34] = s),
      (t[35] = c),
      (t[36] = x),
      (t[37] = l),
      (t[38] = w),
      (t[39] = F))
    : (F = t[39]);
  let I;
  t[40] !== T || t[41] !== i || t[42] !== o || t[43] !== x
    ? ((I =
        !i && !o && x != null && T
          ? (0, Y.jsx)(me.Footer, {
              children: (0, Y.jsxs)(`span`, {
                className: `inline-flex items-center gap-1.5`,
                children: [
                  (0, Y.jsx)(We, {}),
                  (0, Y.jsx)(d, {
                    id: `settings.browserUse.sitePermissions.managedLegend`,
                    defaultMessage: `Managed by your organization`,
                    description: `Legend explaining the lock icons shown on browser permissions controlled by an enterprise organization`,
                  }),
                ],
              }),
            })
          : null),
      (t[40] = T),
      (t[41] = i),
      (t[42] = o),
      (t[43] = x),
      (t[44] = I))
    : (I = t[44]);
  let L;
  t[45] !== m || t[46] !== h || t[47] !== c || t[48] !== w
    ? ((L =
        c == null
          ? null
          : (0, Y.jsx)(Jn, {
              enterprisePolicy: m,
              open: h,
              originsConfig: c,
              visibleResources: w,
              onOpenChange: g,
            })),
      (t[45] = m),
      (t[46] = h),
      (t[47] = c),
      (t[48] = w),
      (t[49] = L))
    : (L = t[49]);
  let R;
  return (
    t[50] !== P || t[51] !== F || t[52] !== I || t[53] !== L
      ? ((R = (0, Y.jsxs)(me, { children: [P, F, I, L] })),
        (t[50] = P),
        (t[51] = F),
        (t[52] = I),
        (t[53] = L),
        (t[54] = R))
      : (R = t[54]),
    R
  );
}
function In(e) {
  let { decision: t, pattern: n } = e;
  return t === `allow` && n.canonicalPattern.includes(`*`);
}
function Ln(e) {
  let { pattern: t, policy: n } = e;
  return n.access === `allow` && t.includes(`*`);
}
function Rn(e) {
  let t = e?.browserUse?.defaultOriginPolicy,
    n = e?.featureRequirements;
  return (
    (n?.browser_use === !1 && n.browser_use_external === !1) ||
    t?.downloads === `deny` ||
    t?.uploads === `deny` ||
    n?.browser_use_full_cdp_access === !1 ||
    t?.fullCdpAccess === `deny` ||
    t?.persistentApproval === !1 ||
    e?.network?.enabled === !1 ||
    wt(e).some(({ decision: e }) => e === `deny`) ||
    Vt(e).some((e) => Dn(e, t))
  );
}
function zn(e) {
  let t = (0, er.c)(36),
    {
      browserClientAllowed: n,
      enterprisePolicy: r,
      onDefaultPermissionChange: i,
      originsConfig: a,
      rows: o,
      userConfig: s,
      visibleResources: c,
    } = e,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsx)(`th`, {
        className: `min-w-36 px-3 py-3 text-start font-medium`,
        children: (0, Y.jsx)(d, {
          id: `settings.browserUse.sitePermissions.matrix.siteColumn`,
          defaultMessage: `Site or pattern`,
          description: `Column heading for a website origin or origin pattern in the browser permissions matrix`,
        }),
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] === c ? (u = t[2]) : ((u = c.map(Bn)), (t[1] = c), (t[2] = u));
  let f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(`th`, {
        className: `px-2 py-3`,
        children: (0, Y.jsx)(`span`, {
          className: `sr-only`,
          children: (0, Y.jsx)(d, {
            id: `settings.browserUse.sitePermissions.matrix.actionsColumn`,
            defaultMessage: `Actions`,
            description: `Accessible heading for site permission row actions`,
          }),
        }),
      })),
      (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] === u
    ? (p = t[5])
    : ((p = (0, Y.jsx)(`thead`, {
        children: (0, Y.jsxs)(`tr`, {
          className: `border-b border-default text-secondary`,
          children: [l, u, f],
        }),
      })),
      (t[4] = u),
      (t[5] = p));
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Y.jsx)(`td`, {
        className: `px-3 py-3 font-medium`,
        children: (0, Y.jsx)(`span`, {
          id: `browser-use-site-permissions-default`,
          children: (0, Y.jsx)(d, {
            id: `settings.browserUse.sitePermissions.matrix.defaultRow`,
            defaultMessage: `Default`,
            description: `Label for the default browser site permissions matrix row`,
          }),
        }),
      })),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] !== n || t[8] !== r || t[9] !== i || t[10] !== a || t[11] !== s || t[12] !== c
    ? ((h = (0, Y.jsx)(cn, {
        browserClientAllowed: n,
        enterprisePolicy: r,
        originsConfig: a,
        userConfig: s,
        visibleResources: c,
        onChange: i,
      })),
      (t[7] = n),
      (t[8] = r),
      (t[9] = i),
      (t[10] = a),
      (t[11] = s),
      (t[12] = c),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Y.jsx)(`td`, { "aria-hidden": !0 })), (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] === h
    ? (_ = t[16])
    : ((_ = (0, Y.jsxs)(`tr`, { className: `border-b border-default`, children: [m, h, g] })),
      (t[15] = h),
      (t[16] = _));
  let v;
  if (t[17] !== n || t[18] !== r || t[19] !== a || t[20] !== o || t[21] !== s || t[22] !== c) {
    let e;
    (t[24] !== n || t[25] !== r || t[26] !== a || t[27] !== s || t[28] !== c
      ? ((e = (e, t) =>
          (0, Y.jsx)(
            Vn,
            {
              browserClientAllowed: n,
              enterprisePolicy: r,
              originsConfig: a,
              row: e,
              rowIndex: t,
              userConfig: s,
              visibleResources: c,
            },
            e.origin,
          )),
        (t[24] = n),
        (t[25] = r),
        (t[26] = a),
        (t[27] = s),
        (t[28] = c),
        (t[29] = e))
      : (e = t[29]),
      (v = o.map(e)),
      (t[17] = n),
      (t[18] = r),
      (t[19] = a),
      (t[20] = o),
      (t[21] = s),
      (t[22] = c),
      (t[23] = v));
  } else v = t[23];
  let y;
  t[30] !== _ || t[31] !== v
    ? ((y = (0, Y.jsxs)(`tbody`, { children: [_, v] })), (t[30] = _), (t[31] = v), (t[32] = y))
    : (y = t[32]);
  let b;
  return (
    t[33] !== y || t[34] !== p
      ? ((b = (0, Y.jsx)(`div`, {
          className: `overflow-x-auto`,
          children: (0, Y.jsxs)(`table`, {
            className: `w-full border-collapse text-sm`,
            children: [p, y],
          }),
        })),
        (t[33] = y),
        (t[34] = p),
        (t[35] = b))
      : (b = t[35]),
    b
  );
}
function Bn(e) {
  return (0, Y.jsx)(
    `th`,
    {
      className: W(`px-2 py-3 text-start font-medium`, e === `fullCdp` ? `min-w-28` : `min-w-48`),
      id: `browser-use-site-permissions-column-${e}`,
      children: (0, Y.jsx)(Un, { resource: e }),
    },
    e,
  );
}
function Vn(e) {
  let t = (0, er.c)(35),
    {
      browserClientAllowed: n,
      enterprisePolicy: r,
      originsConfig: i,
      row: a,
      rowIndex: o,
      userConfig: s,
      visibleResources: c,
    } = e,
    l = `browser-use-site-permissions-origin-${o}`,
    u;
  t[0] !== a.origin || t[1] !== l
    ? ((u = (0, Y.jsx)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: (0, Y.jsx)(`span`, {
          "data-tooltip-overflow-target": !0,
          className: `block min-w-0 truncate text-sm font-medium`,
          id: l,
          children: a.origin,
        }),
      })),
      (t[0] = a.origin),
      (t[1] = l),
      (t[2] = u))
    : (u = t[2]);
  let f;
  t[3] !== a.origin || t[4] !== u
    ? ((f = (0, Y.jsx)(M, {
        tooltipContent: a.origin,
        openWhen: `trigger-overflows`,
        children: u,
      })),
      (t[3] = a.origin),
      (t[4] = u),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] === a.networkBlocked
    ? (p = t[7])
    : ((p = a.networkBlocked
        ? (0, Y.jsx)(`span`, {
            className: `text-xs text-secondary`,
            children: (0, Y.jsx)(d, {
              id: `settings.browserUse.sitePermissions.networkBlocked`,
              defaultMessage: `Blocked by your network configuration`,
              description: `Explains why a site permission is unavailable due to the selected user network permission profile`,
            }),
          })
        : null),
      (t[6] = a.networkBlocked),
      (t[7] = p));
  let m;
  t[8] !== l || t[9] !== f || t[10] !== p
    ? ((m = (0, Y.jsxs)(`td`, {
        "aria-labelledby": l,
        className: `max-w-40 px-3 py-3`,
        children: [f, p],
      })),
      (t[8] = l),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m))
    : (m = t[11]);
  let h;
  if (
    t[12] !== n ||
    t[13] !== r ||
    t[14] !== i ||
    t[15] !== a ||
    t[16] !== o ||
    t[17] !== l ||
    t[18] !== s ||
    t[19] !== c
  ) {
    let e;
    (t[21] !== n ||
    t[22] !== r ||
    t[23] !== i ||
    t[24] !== a ||
    t[25] !== o ||
    t[26] !== l ||
    t[27] !== s
      ? ((e = (e) =>
          (0, Y.jsx)(
            `td`,
            {
              className: `px-2 py-3`,
              children:
                e !== `origin` && (!n || a.values.origin === `denied`)
                  ? (0, Y.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `text-secondary`,
                      children: (0, Y.jsx)(d, {
                        id: `settings.browserUse.sitePermissions.matrix.unavailableValue`,
                        defaultMessage: `—`,
                        description: `Visual placeholder for a site capability that does not apply because browsing is blocked`,
                      }),
                    })
                  : (0, Y.jsx)(Hn, {
                      browserClientAllowed: n,
                      enterprisePolicy: r,
                      originsConfig: i,
                      resource: e,
                      row: a,
                      rowIndex: o,
                      rowLabelId: l,
                      userConfig: s,
                    }),
            },
            e,
          )),
        (t[21] = n),
        (t[22] = r),
        (t[23] = i),
        (t[24] = a),
        (t[25] = o),
        (t[26] = l),
        (t[27] = s),
        (t[28] = e))
      : (e = t[28]),
      (h = c.map(e)),
      (t[12] = n),
      (t[13] = r),
      (t[14] = i),
      (t[15] = a),
      (t[16] = o),
      (t[17] = l),
      (t[18] = s),
      (t[19] = c),
      (t[20] = h));
  } else h = t[20];
  let g;
  t[29] === a
    ? (g = t[30])
    : ((g = (0, Y.jsx)(`td`, { className: `px-2 py-3`, children: (0, Y.jsx)(qn, { row: a }) })),
      (t[29] = a),
      (t[30] = g));
  let _;
  return (
    t[31] !== m || t[32] !== h || t[33] !== g
      ? ((_ = (0, Y.jsxs)(`tr`, {
          className: `border-b border-default last:border-b-0`,
          children: [m, h, g],
        })),
        (t[31] = m),
        (t[32] = h),
        (t[33] = g),
        (t[34] = _))
      : (_ = t[34]),
    _
  );
}
function Hn(e) {
  let t = (0, er.c)(60),
    {
      browserClientAllowed: n,
      enterprisePolicy: i,
      originsConfig: a,
      resource: s,
      row: c,
      rowIndex: l,
      rowLabelId: u,
      userConfig: d,
    } = e,
    f = r(_e),
    [p, m] = (0, tr.useState)(!1),
    { selectedHostId: h } = o(),
    g = Et(h),
    _;
  t[0] !== s || t[1] !== c.managedResources || t[2] !== c.origin
    ? ((_ = c.origin.includes(`*`) && c.managedResources?.[s] === !0),
      (t[0] = s),
      (t[1] = c.managedResources),
      (t[2] = c.origin),
      (t[3] = _))
    : (_ = t[3]);
  let v = _,
    y;
  t[4] !== n || t[5] !== i || t[6] !== v || t[7] !== s || t[8] !== c.origin
    ? ((y = n && !v && Bt(i, c.origin, s)),
      (t[4] = n),
      (t[5] = i),
      (t[6] = v),
      (t[7] = s),
      (t[8] = c.origin),
      (t[9] = y))
    : (y = t[9]);
  let b = y,
    x = v || c.inheritedRestrictions?.[s] === `organization` || !b,
    S;
  t[10] !== b || t[11] !== i || t[12] !== c.origin
    ? ((S = b && Bt(i, c.origin, `persistentApproval`)),
      (t[10] = b),
      (t[11] = i),
      (t[12] = c.origin),
      (t[13] = S))
    : (S = t[13]);
  let C = S,
    w;
  t[14] !== i || t[15] !== a || t[16] !== s || t[17] !== c.origin
    ? ((w = Zn(a, s, i, c.origin)),
      (t[14] = i),
      (t[15] = a),
      (t[16] = s),
      (t[17] = c.origin),
      (t[18] = w))
    : (w = t[18]);
  let T = w,
    E;
  t[19] !== s || t[20] !== c.origin || t[21] !== d?.origins
    ? ((E = Object.entries(d?.origins ?? {}).some((e) => {
        let [t, n] = e;
        return Me(t)?.canonicalPattern === c.origin && Ot(n, s) != null;
      })),
      (t[19] = s),
      (t[20] = c.origin),
      (t[21] = d?.origins),
      (t[22] = E))
    : (E = t[22]);
  let D = E,
    O;
  t[23] !== a || t[24] !== s || t[25] !== c.origin
    ? ((O = An(a, s, c.origin)), (t[23] = a), (t[24] = s), (t[25] = c.origin), (t[26] = O))
    : (O = t[26]);
  let k = O,
    A =
      !x &&
      !c.networkBlocked &&
      !D &&
      (c.values[s] === "default" || (c.inheritedRestrictions?.[s] === `user` && k !== `denied`)),
    j;
  t[27] !== T || t[28] !== D || t[29] !== A || t[30] !== s || t[31] !== c.values
    ? ((j = c.values[s]),
      A ? (j = `default`) : j === "default" && D && (j = T === `neverAsk` ? `allowed` : `ask`),
      (t[27] = T),
      (t[28] = D),
      (t[29] = A),
      (t[30] = s),
      (t[31] = c.values),
      (t[32] = j))
    : (j = t[32]);
  let M = A ? c.values[s] : j,
    N;
  t[33] !== C ||
  t[34] !== T ||
  t[35] !== x ||
  t[36] !== p ||
  t[37] !== s ||
  t[38] !== c.networkBlocked ||
  t[39] !== c.origin ||
  t[40] !== c.values ||
  t[41] !== k ||
  t[42] !== f ||
  t[43] !== j ||
  t[44] !== g
    ? ((N = async (e) => {
        (e === j && (e !== `allowed` || k === `allowed`)) ||
          p ||
          x ||
          c.networkBlocked ||
          (e === `ask` && T === `neverAsk`) ||
          (e === `allowed` && !C) ||
          (m(!0),
          await (async () => {
            try {
              await g.mutateAsync({
                updates: Sn({
                  nextValues: { ...c.values, [s]: e },
                  origin: c.origin,
                  resources: [s],
                  values: { ...c.values, [s]: k },
                }),
                configUpdate: bn(c.origin, { ...c.values, [s]: e }, [s]),
              });
            } catch {
              f.get(Ae).danger($n());
            }
          })().finally(() => {
            m(!1);
          }));
      }),
      (t[33] = C),
      (t[34] = T),
      (t[35] = x),
      (t[36] = p),
      (t[37] = s),
      (t[38] = c.networkBlocked),
      (t[39] = c.origin),
      (t[40] = c.values),
      (t[41] = k),
      (t[42] = f),
      (t[43] = j),
      (t[44] = g),
      (t[45] = N))
    : (N = t[45]);
  let P = N,
    F = p || x || c.networkBlocked,
    I = `browser-use-site-permissions-column-${s}`,
    L = n ? M : `denied`,
    R = `browser-use-site-permissions-${l}-${s}-value`,
    z;
  t[46] === P
    ? (z = t[47])
    : ((z = (e) => {
        P(e);
      }),
      (t[46] = P),
      (t[47] = z));
  let B;
  return (
    t[48] !== C ||
    t[49] !== T ||
    t[50] !== A ||
    t[51] !== x ||
    t[52] !== s ||
    t[53] !== u ||
    t[54] !== L ||
    t[55] !== R ||
    t[56] !== z ||
    t[57] !== F ||
    t[58] !== I
      ? ((B = (0, Y.jsx)(Gn, {
          allowAllowed: C,
          contextId: u,
          defaultApprovalMode: T,
          disabled: F,
          inherited: A,
          labelId: I,
          managed: x,
          resource: s,
          value: L,
          valueId: R,
          onSelect: z,
        })),
        (t[48] = C),
        (t[49] = T),
        (t[50] = A),
        (t[51] = x),
        (t[52] = s),
        (t[53] = u),
        (t[54] = L),
        (t[55] = R),
        (t[56] = z),
        (t[57] = F),
        (t[58] = I),
        (t[59] = B))
      : (B = t[59]),
    B
  );
}
function Un(e) {
  let t = (0, er.c)(4),
    { resource: n } = e;
  switch (n) {
    case `origin`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(d, {
              id: `settings.browserUse.sitePermissions.matrix.browsingColumn`,
              defaultMessage: `Browsing`,
              description: `Browsing column heading in the browser site permissions matrix`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `download`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(d, {
              id: `settings.browserUse.sitePermissions.matrix.downloadsColumn`,
              defaultMessage: `Downloads`,
              description: `Downloads column heading in the browser site permissions matrix`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `upload`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(d, {
              id: `settings.browserUse.sitePermissions.matrix.uploadsColumn`,
              defaultMessage: `Uploads`,
              description: `Uploads column heading in the browser site permissions matrix`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `fullCdp`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(d, {
              id: `settings.browserUse.sitePermissions.matrix.fullCdpColumn`,
              defaultMessage: `Debug / CDP`,
              description: `Chrome DevTools Protocol column heading in the browser site permissions matrix`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function Wn(e) {
  let t = (0, er.c)(6),
    { value: n } = e,
    r = n === `allowed` && `bg-chart-green`,
    i = n === `denied` && `bg-text-danger`,
    a = (n === "default" || n === `ask`) && `bg-text-tertiary`,
    o;
  t[0] !== r || t[1] !== i || t[2] !== a
    ? ((o = W(`size-2 shrink-0 rounded-full`, r, i, a)),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === o ? (s = t[5]) : ((s = (0, Y.jsx)(`span`, { className: o })), (t[4] = o), (t[5] = s)),
    s
  );
}
function Gn(e) {
  let t = (0, er.c)(52),
    {
      allowAllowed: n,
      allowRequiresApproval: r,
      contextId: i,
      defaultApprovalMode: a,
      disabled: o,
      inherited: s,
      labelId: c,
      managed: l,
      onSelect: u,
      resource: f,
      value: p,
      valueId: m,
      variant: h,
    } = e,
    g = n === void 0 || n,
    _ = r === void 0 || r,
    v = l !== void 0 && l,
    y = h === void 0 ? `default` : h,
    b = ee(),
    x = !v && (s ?? p === "default"),
    S;
  t[0] !== b || t[1] !== x
    ? ((S = x
        ? b.formatMessage({
            id: `settings.browserUse.sitePermissions.inheritedDescription`,
            defaultMessage: `Uses the default permission`,
            description: `Accessible description and tooltip for an editable browser site permission inherited from its defaults`,
          })
        : void 0),
      (t[0] = b),
      (t[1] = x),
      (t[2] = S))
    : (S = t[2]);
  let C = S,
    T;
  t[3] !== i || t[4] !== c || t[5] !== m
    ? ((T = [c, i, m].filter(Kn)), (t[3] = i), (t[4] = c), (t[5] = m), (t[6] = T))
    : (T = t[6]);
  let E = T.join(` `),
    D = y === `form` && `h-9! px-2.5!`,
    O;
  t[7] === D ? (O = t[8]) : ((O = W(`w-full`, D)), (t[7] = D), (t[8] = O));
  let A = y === `form` ? `small` : void 0,
    j;
  t[9] !== a || t[10] !== s || t[11] !== v || t[12] !== p
    ? ((j = v
        ? (0, Y.jsx)(We, { className: `text-secondary` })
        : (0, Y.jsx)(Wn, { value: s && p === "default" && a === `neverAsk` ? `allowed` : p })),
      (t[9] = a),
      (t[10] = s),
      (t[11] = v),
      (t[12] = p),
      (t[13] = j))
    : (j = t[13]);
  let N = x && `text-secondary`,
    P;
  t[14] === N ? (P = t[15]) : ((P = W(`truncate`, N)), (t[14] = N), (t[15] = P));
  let F = s ? a : void 0,
    I;
  t[16] !== f || t[17] !== F || t[18] !== p
    ? ((I = Qn(p, f, F)), (t[16] = f), (t[17] = F), (t[18] = p), (t[19] = I))
    : (I = t[19]);
  let L;
  t[20] !== P || t[21] !== I || t[22] !== m
    ? ((L = (0, Y.jsx)(`span`, { id: m, className: P, children: I })),
      (t[20] = P),
      (t[21] = I),
      (t[22] = m),
      (t[23] = L))
    : (L = t[23]);
  let R;
  t[24] !== C || t[25] !== L
    ? ((R = (0, Y.jsx)(M, { tooltipContent: C, children: L })),
      (t[24] = C),
      (t[25] = L),
      (t[26] = R))
    : (R = t[26]);
  let z;
  t[27] !== o ||
  t[28] !== C ||
  t[29] !== A ||
  t[30] !== j ||
  t[31] !== R ||
  t[32] !== E ||
  t[33] !== O
    ? ((z = (0, Y.jsxs)(te, {
        "aria-description": C,
        "aria-labelledby": E,
        className: O,
        disabled: o,
        radius: A,
        children: [j, R],
      })),
      (t[27] = o),
      (t[28] = C),
      (t[29] = A),
      (t[30] = j),
      (t[31] = R),
      (t[32] = E),
      (t[33] = O),
      (t[34] = z))
    : (z = t[34]);
  let B;
  t[35] !== g ||
  t[36] !== _ ||
  t[37] !== a ||
  t[38] !== u ||
  t[39] !== f ||
  t[40] !== x ||
  t[41] !== p
    ? ((B = nr.map((e) => {
        let t = (e === `allowed` && !g) || (e === `ask` && !_),
          n = e === `ask` && a === `neverAsk`,
          r;
        return (
          t
            ? (r = (0, Y.jsx)(nn, {}))
            : n &&
              (r = (0, Y.jsx)(d, {
                id: `settings.browserUse.sitePermissions.requiresApprovalUnavailable`,
                defaultMessage: `Change the default from Always allow before requiring approval for individual sites`,
                description: `Explains that the current browser approval storage cannot override a global Always allow setting for one site`,
              })),
          (0, Y.jsx)(
            w.Item,
            {
              RightIcon: e === (x ? `default` : p) && (x || p !== "default") ? Ge : void 0,
              disabled: t || n,
              tooltipText: r,
              onSelect: () => {
                u(e);
              },
              children: (0, Y.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, Y.jsx)(Wn, { value: e }),
                  (0, Y.jsx)(`span`, { className: `truncate`, children: Qn(e, f) }),
                ],
              }),
            },
            e,
          )
        );
      })),
      (t[35] = g),
      (t[36] = _),
      (t[37] = a),
      (t[38] = u),
      (t[39] = f),
      (t[40] = x),
      (t[41] = p),
      (t[42] = B))
    : (B = t[42]);
  let V;
  t[43] === B
    ? (V = t[44])
    : ((V = (0, Y.jsx)(`div`, { className: `flex flex-col`, children: B })),
      (t[43] = B),
      (t[44] = V));
  let H;
  t[45] !== o || t[46] !== z || t[47] !== V
    ? ((H = (0, Y.jsx)(k, {
        align: `end`,
        contentWidth: `menu`,
        disabled: o,
        triggerButton: z,
        children: V,
      })),
      (t[45] = o),
      (t[46] = z),
      (t[47] = V),
      (t[48] = H))
    : (H = t[48]);
  let U;
  return (
    t[49] !== v || t[50] !== H
      ? ((U = (0, Y.jsx)(tn, { managed: v, children: H })), (t[49] = v), (t[50] = H), (t[51] = U))
      : (U = t[51]),
    U
  );
}
function Kn(e) {
  return e != null;
}
function qn(e) {
  let t = (0, er.c)(48),
    { row: n } = e,
    i = r(_e),
    a = ee(),
    [s, c] = (0, tr.useState)(!1),
    [l, u] = (0, tr.useState)(!1),
    { selectedHostId: f } = o(),
    p = Et(f),
    m;
  t[0] !== l || t[1] !== n.hasUserPermissions || t[2] !== n.origin || t[3] !== i || t[4] !== p
    ? ((m = async () => {
        l ||
          !n.hasUserPermissions ||
          (u(!0),
          await (async () => {
            try {
              (await p.mutateAsync({
                updates: Object.values(rr).flatMap((e) =>
                  [`allowed`, `denied`].map((t) => ({
                    action: `remove`,
                    kind: t,
                    origin: n.origin,
                    resource: e,
                  })),
                ),
                configUpdate: Me(n.origin) == null ? void 0 : { origin: n.origin, policy: null },
              }),
                c(!1));
            } catch {
              i.get(Ae).danger($n());
            }
          })().finally(() => {
            u(!1);
          }));
      }),
      (t[0] = l),
      (t[1] = n.hasUserPermissions),
      (t[2] = n.origin),
      (t[3] = i),
      (t[4] = p),
      (t[5] = m))
    : (m = t[5]);
  let h = m,
    g;
  t[6] !== n.hasUserPermissions || t[7] !== n.inheritedRestrictions || t[8] !== n.managedResources
    ? ((g =
        !n.hasUserPermissions &&
        (n.managedResources != null ||
          Object.values(n.inheritedRestrictions ?? {}).includes(`organization`))),
      (t[6] = n.hasUserPermissions),
      (t[7] = n.inheritedRestrictions),
      (t[8] = n.managedResources),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== a || t[11] !== n.origin
    ? ((_ = a.formatMessage(
        {
          id: `settings.browserUse.sitePermissions.clearAriaLabel`,
          defaultMessage: `Remove custom permissions for {origin}`,
          description: `Aria label for button that removes all custom browser site permissions`,
        },
        { origin: n.origin },
      )),
      (t[10] = a),
      (t[11] = n.origin),
      (t[12] = _))
    : (_ = t[12]);
  let v = l || !n.hasUserPermissions,
    y;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        c(!0);
      }),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsx)(yt, { className: `icon-2xs` })), (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] !== _ || t[16] !== v
    ? ((x = (0, Y.jsx)(Ne, {
        "aria-label": _,
        color: `ghost`,
        disabled: v,
        onClick: y,
        size: `icon`,
        children: b,
      })),
      (t[15] = _),
      (t[16] = v),
      (t[17] = x))
    : (x = t[17]);
  let S;
  t[18] !== g || t[19] !== x
    ? ((S = (0, Y.jsx)(tn, { managed: g, children: x })), (t[18] = g), (t[19] = x), (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] === h
    ? (C = t[22])
    : ((C = (e) => {
        (e.preventDefault(), h());
      }),
      (t[21] = h),
      (t[22] = C));
  let w;
  t[23] === n.origin
    ? (w = t[24])
    : ((w = (0, Y.jsx)(Je, {
        asChild: !0,
        children: (0, Y.jsx)(`span`, {
          children: (0, Y.jsx)(d, {
            id: `settings.browserUse.sitePermissions.removeDialog.title`,
            defaultMessage: `Remove custom permissions for {origin}?`,
            description: `Confirmation dialog title for removing custom browser site permissions`,
            values: { origin: n.origin },
          }),
        }),
      })),
      (t[23] = n.origin),
      (t[24] = w));
  let T;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Y.jsx)(ze, {
        asChild: !0,
        children: (0, Y.jsx)(`span`, {
          children: (0, Y.jsx)(d, {
            id: `settings.browserUse.sitePermissions.removeDialog.subtitle`,
            defaultMessage: `This resets this site's custom permissions to their defaults`,
            description: `Confirmation dialog subtitle for removing custom browser site permissions`,
          }),
        }),
      })),
      (t[25] = T))
    : (T = t[25]);
  let E;
  t[26] === w
    ? (E = t[27])
    : ((E = (0, Y.jsx)(pe, { children: (0, Y.jsx)(le, { title: w, subtitle: T }) })),
      (t[26] = w),
      (t[27] = E));
  let D;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        c(!1);
      }),
      (t[28] = D))
    : (D = t[28]);
  let k;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for removing custom browser site permissions`,
      })),
      (t[29] = k))
    : (k = t[29]);
  let A;
  t[30] === l
    ? (A = t[31])
    : ((A = (0, Y.jsx)(Ne, {
        color: `ghost`,
        disabled: l,
        onClick: D,
        type: `button`,
        children: k,
      })),
      (t[30] = l),
      (t[31] = A));
  let j;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for removing custom browser site permissions`,
      })),
      (t[32] = j))
    : (j = t[32]);
  let M;
  t[33] === l
    ? (M = t[34])
    : ((M = (0, Y.jsx)(Ne, { color: `danger`, loading: l, type: `submit`, children: j })),
      (t[33] = l),
      (t[34] = M));
  let N;
  t[35] !== A || t[36] !== M
    ? ((N = (0, Y.jsx)(pe, { children: (0, Y.jsxs)(de, { children: [A, M] }) })),
      (t[35] = A),
      (t[36] = M),
      (t[37] = N))
    : (N = t[37]);
  let P;
  t[38] !== E || t[39] !== N || t[40] !== C
    ? ((P = (0, Y.jsxs)(O, { as: `form`, onSubmit: C, children: [E, N] })),
      (t[38] = E),
      (t[39] = N),
      (t[40] = C),
      (t[41] = P))
    : (P = t[41]);
  let F;
  t[42] !== s || t[43] !== P
    ? ((F = (0, Y.jsx)(Qe, { open: s, onOpenChange: c, size: `compact`, children: P })),
      (t[42] = s),
      (t[43] = P),
      (t[44] = F))
    : (F = t[44]);
  let I;
  return (
    t[45] !== F || t[46] !== S
      ? ((I = (0, Y.jsxs)(Y.Fragment, { children: [S, F] })), (t[45] = F), (t[46] = S), (t[47] = I))
      : (I = t[47]),
    I
  );
}
function Jn(e) {
  let t = (0, er.c)(103),
    { enterprisePolicy: n, onOpenChange: i, open: a, originsConfig: s, visibleResources: c } = e,
    u = r(_e),
    f = ee(),
    [p, m] = (0, tr.useState)(``),
    [h, g] = (0, tr.useState)(`default`),
    [_, v] = (0, tr.useState)(ir),
    [y, b] = (0, tr.useState)(!1),
    [x, S] = (0, tr.useState)(!1),
    { selectedHostId: C } = o(),
    w = Et(C),
    T,
    E,
    D,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H,
    U;
  if (
    t[0] !== _ ||
    t[1] !== n ||
    t[2] !== f ||
    t[3] !== x ||
    t[4] !== i ||
    t[5] !== a ||
    t[6] !== p ||
    t[7] !== s ||
    t[8] !== u ||
    t[9] !== y ||
    t[10] !== h ||
    t[11] !== c ||
    t[12] !== w
  ) {
    M = Me(p);
    let e = p.length > 0 && M == null,
      r = M == null || Bt(n, M.canonicalPattern, `origin`),
      o = M == null || Bt(n, M.canonicalPattern, `persistentApproval`),
      C;
    (t[31] !== _ || t[32] !== h
      ? ((C = h !== "default" || Object.values(_).some(Yn)), (t[31] = _), (t[32] = h), (t[33] = C))
      : (C = t[33]),
      (A = C),
      (k =
        M != null &&
        c.some((e) => {
          let t = e === `origin` ? h : _[e];
          return (
            (t === `allowed` && !o) ||
            ((t === `allowed` || t === `ask`) && !Bt(n, M.canonicalPattern, e))
          );
        })),
      (j = c.some(
        (e) =>
          (e === `origin` ? h : _[e]) === `ask` &&
          Zn(s, e, n, M?.canonicalPattern ?? ``) === `neverAsk`,
      )));
    let ee;
    (t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ee = () => {
          (m(``), g(`default`), v(ir), b(!1));
        }),
        (t[34] = ee))
      : (ee = t[34]),
      (N = ee));
    let te = async () => {
      M == null ||
        x ||
        !A ||
        k ||
        j ||
        (S(!0),
        await (async () => {
          try {
            (await w.mutateAsync({
              updates: Sn({
                nextValues: { ..._, origin: h },
                origin: M.canonicalPattern,
                resources: c,
                values: ar,
              }),
              configUpdate: bn(
                M.canonicalPattern,
                { ..._, origin: h },
                c.filter((e) => e === `origin` || _[e] !== "default"),
              ),
            }),
              N(),
              i(!1));
          } catch {
            u.get(Ae).danger($n());
          }
        })().finally(() => {
          S(!1);
        }));
    };
    ((D = Qe),
      (H = a),
      t[35] === i
        ? (U = t[36])
        : ((U = (e) => {
            (e || N(), i(e));
          }),
          (t[35] = i),
          (t[36] = U)),
      (F = `compact`),
      (E = O),
      (z = `form`),
      (B = (e) => {
        (e.preventDefault(), te());
      }));
    let W;
    (t[37] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((W = (0, Y.jsx)(Je, {
          asChild: !0,
          children: (0, Y.jsx)(`span`, {
            children: (0, Y.jsx)(d, {
              id: `settings.browserUse.sitePermissions.addDialog.title`,
              defaultMessage: `Add site permission`,
              description: `Title for add browser site permission dialog`,
            }),
          }),
        })),
        (t[37] = W))
      : (W = t[37]),
      t[38] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((V = (0, Y.jsx)(pe, {
            children: (0, Y.jsx)(le, {
              title: W,
              subtitle: (0, Y.jsx)(ze, {
                asChild: !0,
                children: (0, Y.jsx)(`span`, {
                  children: (0, Y.jsx)(d, {
                    id: `settings.browserUse.sitePermissions.addDialog.subtitle`,
                    defaultMessage: `Choose what access ChatGPT has on a site`,
                    description: `Subtitle for add browser site permission dialog`,
                  }),
                }),
              }),
            }),
          })),
          (t[38] = V))
        : (V = t[38]),
      (T = pe),
      (P = `gap-3`));
    let ne;
    t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ne = (0, Y.jsx)(`span`, {
          className: `text-sm font-medium`,
          children: (0, Y.jsx)(d, {
            id: `settings.browserUse.sitePermissions.addDialog.siteLabel`,
            defaultMessage: `Site`,
            description: `Site label for add browser site permission dialog`,
          }),
        })),
        (t[39] = ne))
      : (ne = t[39]);
    let G = e ? `browser-use-add-origin-error` : void 0,
      K;
    t[40] === f
      ? (K = t[41])
      : ((K = f.formatMessage({
          id: `settings.browserUse.sitePermissions.addDialog.siteAriaLabel`,
          defaultMessage: `Site`,
          description: `Aria label for site input in add browser site permission dialog`,
        })),
        (t[40] = f),
        (t[41] = K));
    let re;
    t[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((re = (e) => {
          m(e.currentTarget.value);
        }),
        (t[42] = re))
      : (re = t[42]);
    let ie;
    t[43] === f
      ? (ie = t[44])
      : ((ie = f.formatMessage({
          id: `settings.browserUse.policyDomains.addDialogPlaceholder`,
          defaultMessage: `https://example.com`,
          description: `Placeholder showing that browser site patterns require an HTTP or HTTPS scheme`,
        })),
        (t[43] = f),
        (t[44] = ie));
    let ae;
    t[45] !== e || t[46] !== x || t[47] !== p || t[48] !== G || t[49] !== K || t[50] !== ie
      ? ((ae = (0, Y.jsx)(l, {
          autoFocus: !0,
          "aria-describedby": G,
          "aria-invalid": e,
          "aria-label": K,
          disabled: x,
          onChange: re,
          placeholder: ie,
          value: p,
        })),
        (t[45] = e),
        (t[46] = x),
        (t[47] = p),
        (t[48] = G),
        (t[49] = K),
        (t[50] = ie),
        (t[51] = ae))
      : (ae = t[51]);
    let q;
    (t[52] === e
      ? (q = t[53])
      : ((q = e
          ? (0, Y.jsx)(`span`, {
              className: `text-xs text-danger`,
              id: `browser-use-add-origin-error`,
              role: `alert`,
              children: (0, Y.jsx)(d, {
                id: `settings.browserUse.sitePermissions.addDialog.invalidOrigin`,
                defaultMessage: `Enter a valid origin, such as https://example.com or https://*.example.com`,
                description: `Validation error explaining the required URL scheme and supported wildcard syntax for a browser site permission`,
              }),
            })
          : null),
        (t[52] = e),
        (t[53] = q)),
      t[54] !== ae || t[55] !== q
        ? ((I = (0, Y.jsxs)(`label`, {
            className: `flex flex-col gap-1.5`,
            children: [ne, ae, q],
          })),
          (t[54] = ae),
          (t[55] = q),
          (t[56] = I))
        : (I = t[56]));
    let oe;
    (t[57] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((oe = (0, Y.jsx)(`span`, {
          id: `browser-use-add-browsing-label`,
          className: `text-sm font-medium`,
          children: (0, Y.jsx)(d, {
            id: `settings.browserUse.sitePermissions.addDialog.behaviorLabel`,
            defaultMessage: `Browse`,
            description: `Behavior label for add browser site permission dialog`,
          }),
        })),
        (t[57] = oe))
      : (oe = t[57]),
      (L = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-1.5`,
        children: [
          oe,
          (0, Y.jsx)(Gn, {
            allowAllowed: r && o,
            allowRequiresApproval: r,
            defaultApprovalMode: Zn(s, `origin`, n, M?.canonicalPattern ?? ``),
            disabled: x,
            labelId: `browser-use-add-browsing-label`,
            resource: `origin`,
            value: h,
            valueId: `browser-use-add-browsing-value`,
            variant: `form`,
            onSelect: g,
          }),
        ],
      })),
      (R = y
        ? c.map((e) => {
            if (e === `origin`) return null;
            let t = `browser-use-add-${e}-label`,
              r = `browser-use-add-${e}-value`;
            return (0, Y.jsxs)(
              `div`,
              {
                className: `flex flex-col gap-1.5`,
                children: [
                  (0, Y.jsx)(`span`, { id: t, className: `text-sm font-medium`, children: Xn(e) }),
                  (0, Y.jsx)(Gn, {
                    allowAllowed: o && Bt(n, M?.canonicalPattern ?? ``, e),
                    allowRequiresApproval: Bt(n, M?.canonicalPattern ?? ``, e),
                    defaultApprovalMode: Zn(s, e, n, M?.canonicalPattern ?? ``),
                    disabled: x,
                    labelId: t,
                    resource: e,
                    value: _[e],
                    valueId: r,
                    variant: `form`,
                    onSelect: (t) => {
                      v({ ..._, [e]: t });
                    },
                  }),
                ],
              },
              e,
            );
          })
        : null),
      (t[0] = _),
      (t[1] = n),
      (t[2] = f),
      (t[3] = x),
      (t[4] = i),
      (t[5] = a),
      (t[6] = p),
      (t[7] = s),
      (t[8] = u),
      (t[9] = y),
      (t[10] = h),
      (t[11] = c),
      (t[12] = w),
      (t[13] = T),
      (t[14] = E),
      (t[15] = D),
      (t[16] = k),
      (t[17] = A),
      (t[18] = j),
      (t[19] = M),
      (t[20] = N),
      (t[21] = P),
      (t[22] = F),
      (t[23] = I),
      (t[24] = L),
      (t[25] = R),
      (t[26] = z),
      (t[27] = B),
      (t[28] = V),
      (t[29] = H),
      (t[30] = U));
  } else
    ((T = t[13]),
      (E = t[14]),
      (D = t[15]),
      (k = t[16]),
      (A = t[17]),
      (j = t[18]),
      (M = t[19]),
      (N = t[20]),
      (P = t[21]),
      (F = t[22]),
      (I = t[23]),
      (L = t[24]),
      (R = t[25]),
      (z = t[26]),
      (B = t[27]),
      (V = t[28]),
      (H = t[29]),
      (U = t[30]));
  let te;
  t[58] !== A || t[59] !== M
    ? ((te =
        M != null && !A
          ? (0, Y.jsx)(`span`, {
              className: `text-xs text-secondary`,
              role: `status`,
              children: (0, Y.jsx)(d, {
                id: `settings.browserUse.sitePermissions.addDialog.matchesDefaults`,
                defaultMessage: `These permissions match the defaults, so adding this site would not change anything`,
                description: `Explanation shown when the add site permission button is disabled because every permission inherits the current default`,
              }),
            })
          : null),
      (t[58] = A),
      (t[59] = M),
      (t[60] = te))
    : (te = t[60]);
  let W;
  t[61] !== T || t[62] !== P || t[63] !== te || t[64] !== I || t[65] !== L || t[66] !== R
    ? ((W = (0, Y.jsxs)(T, { className: P, children: [I, L, R, te] })),
      (t[61] = T),
      (t[62] = P),
      (t[63] = te),
      (t[64] = I),
      (t[65] = L),
      (t[66] = R),
      (t[67] = W))
    : (W = t[67]);
  let ne;
  t[68] !== x || t[69] !== y || t[70] !== c.length
    ? ((ne =
        !y && c.length > 1
          ? (0, Y.jsx)(Ne, {
              className: `me-auto`,
              color: `ghost`,
              disabled: x,
              onClick: () => {
                b(!0);
              },
              type: `button`,
              children: (0, Y.jsx)(d, {
                id: `settings.browserUse.sitePermissions.addDialog.moreOptions`,
                defaultMessage: `More options`,
                description: `Button label to reveal advanced options when adding browser site permissions`,
              }),
            })
          : null),
      (t[68] = x),
      (t[69] = y),
      (t[70] = c.length),
      (t[71] = ne))
    : (ne = t[71]);
  let G;
  t[72] !== i || t[73] !== N
    ? ((G = () => {
        (N(), i(!1));
      }),
      (t[72] = i),
      (t[73] = N),
      (t[74] = G))
    : (G = t[74]);
  let K;
  t[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, Y.jsx)(d, {
        id: `settings.browserUse.domains.addDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for add browser domain dialog`,
      })),
      (t[75] = K))
    : (K = t[75]);
  let re;
  t[76] !== x || t[77] !== G
    ? ((re = (0, Y.jsx)(Ne, {
        color: `outline`,
        disabled: x,
        onClick: G,
        type: `button`,
        children: K,
      })),
      (t[76] = x),
      (t[77] = G),
      (t[78] = re))
    : (re = t[78]);
  let ie = M == null || !A || x || k || j,
    ae;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Y.jsx)(d, {
        id: `settings.browserUse.domains.addDialogConfirm`,
        defaultMessage: `Add`,
        description: `Confirm button label for add browser domain dialog`,
      })),
      (t[79] = ae))
    : (ae = t[79]);
  let q;
  t[80] !== x || t[81] !== ie
    ? ((q = (0, Y.jsx)(Ne, {
        color: `primary`,
        disabled: ie,
        loading: x,
        type: `submit`,
        children: ae,
      })),
      (t[80] = x),
      (t[81] = ie),
      (t[82] = q))
    : (q = t[82]);
  let oe;
  t[83] !== k || t[84] !== q
    ? ((oe = (0, Y.jsx)(tn, { managed: k, children: q })), (t[83] = k), (t[84] = q), (t[85] = oe))
    : (oe = t[85]);
  let J;
  t[86] !== ne || t[87] !== re || t[88] !== oe
    ? ((J = (0, Y.jsx)(pe, { children: (0, Y.jsxs)(de, { children: [ne, re, oe] }) })),
      (t[86] = ne),
      (t[87] = re),
      (t[88] = oe),
      (t[89] = J))
    : (J = t[89]);
  let se;
  t[90] !== E || t[91] !== W || t[92] !== J || t[93] !== z || t[94] !== B || t[95] !== V
    ? ((se = (0, Y.jsxs)(E, { as: z, onSubmit: B, children: [V, W, J] })),
      (t[90] = E),
      (t[91] = W),
      (t[92] = J),
      (t[93] = z),
      (t[94] = B),
      (t[95] = V),
      (t[96] = se))
    : (se = t[96]);
  let ce;
  return (
    t[97] !== D || t[98] !== F || t[99] !== se || t[100] !== H || t[101] !== U
      ? ((ce = (0, Y.jsx)(D, { open: H, onOpenChange: U, size: F, children: se })),
        (t[97] = D),
        (t[98] = F),
        (t[99] = se),
        (t[100] = H),
        (t[101] = U),
        (t[102] = ce))
      : (ce = t[102]),
    ce
  );
}
function Yn(e) {
  return e !== "default";
}
function Xn(e) {
  switch (e) {
    case `origin`:
      return (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.websiteAccess`,
        defaultMessage: `Browse`,
        description: `Browse label for custom browser site permissions`,
      });
    case `download`:
      return (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.downloads`,
        defaultMessage: `Download`,
        description: `Download label for custom browser site permissions`,
      });
    case `upload`:
      return (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.uploads`,
        defaultMessage: `Upload`,
        description: `Upload label for custom browser site permissions`,
      });
    case `fullCdp`:
      return (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.matrixCdpAccess`,
        defaultMessage: `Debug / CDP`,
        description: `Debug label for custom browser site permissions`,
      });
  }
}
function Zn(e, t, n, r) {
  let i = {
    origin: e.approvalMode,
    download: e.downloadApprovalMode,
    upload: e.uploadApprovalMode,
    fullCdp: void 0,
  }[t];
  return i === `neverAsk` && (!bt(n) || !Bt(n, r, `persistentApproval`)) ? `alwaysAsk` : i;
}
function Qn(e, t, n) {
  if (e === `ask` || (e === "default" && n === `alwaysAsk`))
    return (0, Y.jsx)(d, {
      id: `settings.browserUse.sitePermissions.approvalValue.requiresApproval`,
      defaultMessage: `Requires approval`,
      description: `Browser site permission that has no persistent approval and uses the default approval flow`,
    });
  if (t !== `fullCdp` && (e === `allowed` || (e === "default" && n === `neverAsk`)))
    return (0, Y.jsx)(d, {
      id: `settings.browserUse.sitePermissions.approvalValue.alwaysAllow`,
      defaultMessage: `Always allow`,
      description: `Browser site permission with persistent approval for browsing, downloads, or uploads`,
    });
  switch (e) {
    case `default`:
      return (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.value.useDefault`,
        defaultMessage: `Use default`,
        description: `Option that removes a custom browser site permission so it inherits its defaults`,
      });
    case `allowed`:
      return (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.value.allowed`,
        defaultMessage: `Allow`,
        description: `Allowed value label for browser use site capabilities`,
      });
    case `denied`:
      return (0, Y.jsx)(d, {
        id: `settings.browserUse.sitePermissions.value.denied`,
        defaultMessage: `Block`,
        description: `Denied value label for browser use site permissions table`,
      });
  }
}
function $n() {
  return (0, Y.jsx)(d, {
    id: `settings.browserUse.sitePermissions.saveError`,
    defaultMessage: `Unable to save site permissions`,
    description: `Toast shown when saving browser site permissions fails`,
  });
}
var er,
  tr,
  Y,
  nr,
  rr,
  ir,
  ar,
  or = e(() => {
    ((er = Ie()),
      b(),
      ge(),
      it(),
      I(),
      Mt(),
      (tr = t(a(), 1)),
      K(),
      i(),
      ke(),
      we(),
      fe(),
      Ee(),
      ce(),
      Pe(),
      re(),
      Fe(),
      D(),
      T(),
      at(),
      m(),
      Be(),
      At(),
      U(),
      V(),
      Ut(),
      J(),
      x(),
      sn(),
      fn(),
      Nn(),
      (Y = Oe()),
      (nr = [`default`, `ask`, `allowed`, `denied`]),
      (rr = { origin: `origin`, download: `download`, upload: `upload`, fullCdp: `fullCdp` }),
      (ir = { download: `default`, upload: `default`, fullCdp: `default` }),
      (ar = { origin: `default`, ...ir }));
  });
function sr() {
  let e = (0, cr.c)(11),
    t = ee(),
    { data: n, isLoading: r } = v(Lt),
    i = Dt(),
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, lr.jsx)(d, {
        id: `settings.browserUse.webMcp.label`,
        defaultMessage: `Enable site tools`,
        description: `Label for the browser WebMCP setting`,
      })),
      (o = (0, lr.jsx)(d, {
        id: `settings.browserUse.webMcp.description`,
        defaultMessage: `Allow ChatGPT to discover and call site tools exposed by websites, including WebMCP`,
        description: `Description for the browser WebMCP setting`,
      })),
      (e[0] = a),
      (e[1] = o))
    : ((a = e[0]), (o = e[1]));
  let s;
  e[2] === t
    ? (s = e[3])
    : ((s = t.formatMessage({
        id: `settings.browserUse.webMcp.ariaLabel`,
        defaultMessage: `Toggle WebMCP`,
        description: `Aria label for toggling browser WebMCP`,
      })),
      (e[2] = t),
      (e[3] = s));
  let c = n?.webMcpEnabled ?? !0,
    l = r || i.isPending,
    u;
  e[4] === i
    ? (u = e[5])
    : ((u = (e) => {
        i.mutate(e);
      }),
      (e[4] = i),
      (e[5] = u));
  let f;
  return (
    e[6] !== s || e[7] !== c || e[8] !== l || e[9] !== u
      ? ((f = (0, lr.jsx)(qe, {
          label: a,
          description: o,
          control: (0, lr.jsx)(H, { ariaLabel: s, checked: c, disabled: l, onChange: u }),
        })),
        (e[6] = s),
        (e[7] = c),
        (e[8] = l),
        (e[9] = u),
        (e[10] = f))
      : (f = e[10]),
    f
  );
}
var cr,
  lr,
  ur = e(() => {
    ((cr = Ie()), I(), K(), n(), At(), ue(), (lr = Oe()));
  });
function dr(e) {
  let t = (0, hr.c)(13),
    { backend: n, browserUseEnabled: r, showHistory: i, showWebMcp: a, siteSettingsRow: o } = e,
    s = r === void 0 || r,
    c = i === void 0 || i,
    l = a !== void 0 && a,
    u = o != null || (s && (c || l)),
    f;
  t[0] !== n || t[1] !== s || t[2] !== u || t[3] !== c || t[4] !== l || t[5] !== o
    ? ((f = u
        ? (0, X.jsxs)(me, {
            children: [
              (0, X.jsx)(me.Header, {
                title:
                  n === `chrome`
                    ? (0, X.jsx)(d, {
                        id: `settings.computerUse.chrome.permissions.title`,
                        defaultMessage: `Permissions`,
                        description: `Title for Chromium browser permissions settings section`,
                      })
                    : (0, X.jsx)(d, {
                        id: `settings.browserUse.permissions.title`,
                        defaultMessage: `Permissions`,
                        description: `Title for browser use permissions settings section`,
                      }),
              }),
              (0, X.jsx)(me.Content, {
                children: (0, X.jsxs)(se, {
                  children: [
                    o,
                    s
                      ? (0, X.jsxs)(X.Fragment, {
                          children: [
                            c && n === `chrome` ? (0, X.jsx)(fr, {}) : null,
                            c && n === `iab` ? (0, X.jsx)(pr, {}) : null,
                            l ? (0, X.jsx)(sr, {}) : null,
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
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== n || t[8] !== s
    ? ((p = s
        ? (0, X.jsxs)(X.Fragment, {
            children: [(0, X.jsx)(Pn, { backend: n }), (0, X.jsx)(Gt, { backend: n })],
          })
        : null),
      (t[7] = n),
      (t[8] = s),
      (t[9] = p))
    : (p = t[9]);
  let m;
  return (
    t[10] !== f || t[11] !== p
      ? ((m = (0, X.jsxs)(X.Fragment, { children: [f, p] })), (t[10] = f), (t[11] = p), (t[12] = m))
      : (m = t[12]),
    m
  );
}
function fr() {
  let e = (0, hr.c)(3),
    t = It(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, X.jsx)(Xt, {})), (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = (0, X.jsx)(mr, { backend: `chrome`, description: n, writeApprovalModeMutation: t })),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function pr() {
  let e = (0, hr.c)(3),
    t = Rt(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, X.jsx)(Zt, {})), (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = (0, X.jsx)(mr, { backend: `iab`, description: n, writeApprovalModeMutation: t })),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function mr(e) {
  let t = (0, hr.c)(62),
    { backend: n, description: i, writeApprovalModeMutation: a } = e,
    s = r(_e),
    { selectedHostId: c } = o(),
    { data: l, isLoading: u } = v(Lt),
    { data: f, isPending: p } = P(ne, c),
    m =
      (f?.configReadSucceeded === !0 ? f.config.browser_use?.allow_history_access : void 0) !== !1,
    h = n === `iab` ? l?.iabHistoryApprovalMode : l?.chromeHistoryApprovalMode,
    g;
  t[0] === c ? (g = t[1]) : ((g = { failClosed: !0, hostId: c }), (t[0] = c), (t[1] = g));
  let { data: _, isError: y, isPending: b } = P(nt, g),
    x = _?.requirements ?? null,
    S = n === `iab` ? `iab` : `extension`,
    C;
  t[2] !== x || t[3] !== S ? ((C = Ct(x, S)), (t[2] = x), (t[3] = S), (t[4] = C)) : (C = t[4]);
  let T = C,
    E;
  t[5] !== T || t[6] !== x
    ? ((E = T && xt(x, `history`)), (t[5] = T), (t[6] = x), (t[7] = E))
    : (E = t[7]);
  let D = E,
    O;
  t[8] !== x || t[9] !== D ? ((O = St(x) && !D), (t[8] = x), (t[9] = D), (t[10] = O)) : (O = t[10]);
  let A = O,
    j;
  t[11] !== T || t[12] !== x
    ? ((j = T && bt(x)), (t[11] = T), (t[12] = x), (t[13] = j))
    : (j = t[13]);
  let M = j,
    N;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = {
        id: `alwaysAsk`,
        label: (0, X.jsx)(d, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, X.jsx)(d, {
          id: `settings.browserUse.historyApproval.alwaysAsk.description`,
          defaultMessage: `Ask before accessing history`,
          description: `Description for browser use always ask history approval mode`,
        }),
      }),
      (t[14] = N))
    : (N = t[14]);
  let F;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = {
        id: `neverAsk`,
        label: (0, X.jsx)(d, {
          id: `settings.browserUse.approval.neverAsk.label`,
          defaultMessage: `Always allow`,
          description: `Label for browser use never ask approval mode`,
        }),
        description: (0, X.jsx)(d, {
          id: `settings.browserUse.historyApproval.neverAsk.description`,
          defaultMessage: `Access history without asking`,
          description: `Description for browser use never ask history approval mode`,
        }),
      }),
      (t[15] = F))
    : (F = t[15]);
  let I;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = [
        N,
        F,
        {
          id: `disabled`,
          label: (0, X.jsx)(d, {
            id: `settings.browserUse.historyApproval.disabled.label`,
            defaultMessage: `Disable`,
            description: `Label for disabled browser history approval mode`,
          }),
          description: (0, X.jsx)(d, {
            id: `settings.browserUse.historyApproval.disabled.description`,
            defaultMessage: `Do not allow access to history`,
            description: `Description for disabled browser history approval mode`,
          }),
        },
      ]),
      (t[16] = I))
    : (I = t[16]);
  let L = I,
    R;
  t[17] !== D || t[18] !== h || t[19] !== m || t[20] !== M
    ? ((R = h),
      !D || !m ? (R = `disabled`) : h === `neverAsk` && !M && (R = `alwaysAsk`),
      (t[17] = D),
      (t[18] = h),
      (t[19] = m),
      (t[20] = M),
      (t[21] = R))
    : (R = t[21]);
  let z;
  t[22] === R ? (z = t[23]) : ((z = L.find((e) => e.id === R) ?? L[0]), (t[22] = R), (t[23] = z));
  let B = z,
    ee = u || b || p,
    V = a.isPending,
    H;
  t[24] !== D ||
  t[25] !== h ||
  t[26] !== m ||
  t[27] !== V ||
  t[28] !== M ||
  t[29] !== s ||
  t[30] !== c ||
  t[31] !== f ||
  t[32] !== a
    ? ((H = async (e) => {
        if (!((e === h && m) || V || (!D && e !== `disabled`) || (e === `neverAsk` && !M)))
          try {
            if (e === `disabled`) {
              f?.configReadSucceeded === !0 && Object.hasOwn(f.config, `browser_use`)
                ? await Ft(s, c, f, { capability: `history`, enabled: !1 })
                : await a.mutateAsync(e);
              return;
            }
            (e !== h && (await a.mutateAsync(e)),
              m || (await Ft(s, c, f, { capability: `history`, enabled: !0 })));
          } catch {
            s.get(Ae).danger(
              (0, X.jsx)(d, {
                id: `settings.browserUse.historyApproval.saveError`,
                defaultMessage: `Unable to save history setting`,
                description: `Toast shown when saving browser use history approval mode fails`,
              }),
            );
          }
      }),
      (t[24] = D),
      (t[25] = h),
      (t[26] = m),
      (t[27] = V),
      (t[28] = M),
      (t[29] = s),
      (t[30] = c),
      (t[31] = f),
      (t[32] = a),
      (t[33] = H))
    : (H = t[33]);
  let U = H,
    W;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, X.jsx)(`span`, {
        className: `inline-flex items-center gap-2`,
        children: (0, X.jsx)(d, {
          id: `settings.browserUse.historyApproval.label`,
          defaultMessage: `History`,
          description: `Label for browser use history approval mode setting`,
        }),
      })),
      (t[34] = W))
    : (W = t[34]);
  let G;
  t[35] !== i || t[36] !== A
    ? ((G = A
        ? (0, X.jsx)(d, {
            id: `settings.browserUse.historyApproval.managedDescription`,
            defaultMessage: `History access is disabled by your organization`,
            description: `Explanation that an enterprise policy disables browser history access`,
          })
        : i),
      (t[35] = i),
      (t[36] = A),
      (t[37] = G))
    : (G = t[37]);
  let K = ee || y || V || !D,
    re = ee || y || V || !D,
    ie;
  t[38] === A
    ? (ie = t[39])
    : ((ie = A ? (0, X.jsx)(We, { className: `text-secondary` }) : null),
      (t[38] = A),
      (t[39] = ie));
  let ae = B?.label,
    q;
  t[40] === ae
    ? (q = t[41])
    : ((q = (0, X.jsx)(`span`, { className: `truncate`, children: ae })),
      (t[40] = ae),
      (t[41] = q));
  let oe;
  t[42] !== re || t[43] !== ie || t[44] !== q
    ? ((oe = (0, X.jsxs)(te, { className: `w-[152px]`, disabled: re, children: [ie, q] })),
      (t[42] = re),
      (t[43] = ie),
      (t[44] = q),
      (t[45] = oe))
    : (oe = t[45]);
  let J;
  t[46] !== R || t[47] !== U || t[48] !== D || t[49] !== V || t[50] !== M
    ? ((J = (0, X.jsx)(`div`, {
        className: `flex flex-col`,
        children: L.map((e) => {
          let t = e.id === R;
          return (0, X.jsx)(
            w.Item,
            {
              allowWrap: !0,
              disabled: V || (!D && e.id !== `disabled`) || (e.id === `neverAsk` && !M),
              RightIcon: t ? Ge : void 0,
              onSelect: () => {
                U(e.id);
              },
              children: (0, X.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, X.jsx)(`span`, { className: `truncate`, children: e.label }),
                  (0, X.jsx)(`span`, {
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
      (t[46] = R),
      (t[47] = U),
      (t[48] = D),
      (t[49] = V),
      (t[50] = M),
      (t[51] = J))
    : (J = t[51]);
  let se;
  t[52] !== K || t[53] !== oe || t[54] !== J
    ? ((se = (0, X.jsx)(k, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: K,
        triggerButton: oe,
        children: J,
      })),
      (t[52] = K),
      (t[53] = oe),
      (t[54] = J),
      (t[55] = se))
    : (se = t[55]);
  let ce;
  t[56] !== A || t[57] !== se
    ? ((ce = (0, X.jsx)(tn, { managed: A, children: se })), (t[56] = A), (t[57] = se), (t[58] = ce))
    : (ce = t[58]);
  let le;
  return (
    t[59] !== G || t[60] !== ce
      ? ((le = (0, X.jsx)(qe, { label: W, description: G, control: ce })),
        (t[59] = G),
        (t[60] = ce),
        (t[61] = le))
      : (le = t[61]),
    le
  );
}
var hr,
  X,
  gr = e(() => {
    ((hr = Ie()),
      I(),
      Mt(),
      K(),
      fe(),
      ce(),
      Fe(),
      T(),
      m(),
      Be(),
      At(),
      Yt(),
      en(),
      sn(),
      or(),
      ur(),
      U(),
      V(),
      ue(),
      J(),
      x(),
      (X = Oe()));
  });
function _r() {
  let e = (0, jr.c)(12),
    { selectedHostId: t } = o(),
    { data: n, isError: r, isLoading: i } = v(Lt),
    a;
  e[0] === t ? (a = e[1]) : ((a = { hostId: t }), (e[0] = t), (e[1] = a));
  let { data: s, isError: c, isPending: l } = P(nt, a),
    u = n?.fullCdpAccessEnabled === !0,
    d = r || (u && c),
    f = i || (u && l),
    p;
  e[2] !== s?.requirements?.featureRequirements || e[3] !== c || e[4] !== l || e[5] !== u
    ? ((p = u && !c && !l && !y(s?.requirements?.featureRequirements?.browser_use_full_cdp_access)),
      (e[2] = s?.requirements?.featureRequirements),
      (e[3] = c),
      (e[4] = l),
      (e[5] = u),
      (e[6] = p))
    : (p = e[6]);
  let m = p,
    h;
  return (
    e[7] !== d || e[8] !== m || e[9] !== f || e[10] !== n
      ? ((h = (0, Z.jsx)(vr, {
          originsConfig: n,
          isError: d,
          isFullCdpAccessEnabled: m,
          isLoading: f,
        })),
        (e[7] = d),
        (e[8] = m),
        (e[9] = f),
        (e[10] = n),
        (e[11] = h))
      : (h = e[11]),
    h
  );
}
function vr(e) {
  let t = (0, jr.c)(34),
    { isError: n, isFullCdpAccessEnabled: r, isLoading: i, originsConfig: a } = e,
    [o, s] = (0, Mr.useState)(!1),
    [c, l] = (0, Mr.useState)(),
    u,
    f;
  t[0] !== r || t[1] !== a
    ? ((f = vn(r)),
      (u = a == null ? null : yn(a, f)),
      (t[0] = r),
      (t[1] = a),
      (t[2] = u),
      (t[3] = f))
    : ((u = t[2]), (f = t[3]));
  let p = u,
    m = n || p == null,
    h,
    g,
    _;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => {
        s(!0);
      }),
      (g = (0, Z.jsx)(De, { "aria-hidden": !1, asset: C })),
      (_ = (0, Z.jsx)(d, {
        id: `settings.browserUse.domains.add`,
        defaultMessage: `Add`,
        description: `Button label to add a browser use domain`,
      })),
      (t[4] = h),
      (t[5] = g),
      (t[6] = _))
    : ((h = t[4]), (g = t[5]), (_ = t[6]));
  let v;
  t[7] === m
    ? (v = t[8])
    : ((v = (0, Z.jsxs)(Ne, {
        color: `secondary`,
        disabled: m,
        size: `toolbar`,
        onClick: h,
        children: [g, _],
      })),
      (t[7] = m),
      (t[8] = v));
  let y, b;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.title`,
        defaultMessage: `Site permissions`,
        description: `Title for browser use site permissions table`,
      })),
      (b = (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.subtitle`,
        defaultMessage: `Override the defaults above for specific sites`,
        description: `Subtitle for browser use site permissions table`,
      })),
      (t[9] = y),
      (t[10] = b))
    : ((y = t[9]), (b = t[10]));
  let x;
  t[11] === v
    ? (x = t[12])
    : ((x = (0, Z.jsx)(me.Header, { actions: v, title: y, subtitle: b })),
      (t[11] = v),
      (t[12] = x));
  let S;
  t[13] !== n || t[14] !== i || t[15] !== p || t[16] !== f
    ? ((S = (0, Z.jsx)(me.Content, {
        children: (0, Z.jsx)(se, {
          children: n
            ? (0, Z.jsx)(B, {
                layout: `settings-row`,
                children: (0, Z.jsx)(d, {
                  id: `settings.browserUse.sitePermissions.loadError`,
                  defaultMessage: `Unable to load site permissions`,
                  description: `Message shown when browser site permissions fail to load`,
                }),
              })
            : i || p == null
              ? (0, Z.jsx)(Wt, {
                  children: (0, Z.jsx)(d, {
                    id: `settings.browserUse.sitePermissions.loading`,
                    defaultMessage: `Loading websites…`,
                    description: `Message shown while loading browser site permissions`,
                  }),
                })
              : p.length === 0
                ? (0, Z.jsx)(B, {
                    layout: `settings-row`,
                    children: (0, Z.jsx)(d, {
                      id: `settings.browserUse.sitePermissions.empty`,
                      defaultMessage: `No site-specific permissions yet`,
                      description: `Empty state for browser use site permissions table`,
                    }),
                  })
                : (0, Z.jsx)(yr, { rows: p, onCustomize: l, visibleResources: f }),
        }),
      })),
      (t[13] = n),
      (t[14] = i),
      (t[15] = p),
      (t[16] = f),
      (t[17] = S))
    : (S = t[17]);
  let w;
  t[18] !== n || t[19] !== i || t[20] !== p
    ? ((w =
        !n && !i && p != null && p.length > 0
          ? (0, Z.jsx)(me.Footer, {
              children: (0, Z.jsx)(d, {
                id: `settings.browserUse.sitePermissions.defaultNote`,
                defaultMessage: `Only sites with custom permissions appear here`,
                description: `Footer note for browser use site permissions list`,
              }),
            })
          : null),
      (t[18] = n),
      (t[19] = i),
      (t[20] = p),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] !== o || t[23] !== f
    ? ((T = (0, Z.jsx)(Er, { open: o, visibleResources: f, onOpenChange: s })),
      (t[22] = o),
      (t[23] = f),
      (t[24] = T))
    : (T = t[24]);
  let E;
  t[25] !== c || t[26] !== f
    ? ((E =
        c == null
          ? null
          : (0, Z.jsx)(Tr, {
              row: c,
              visibleResources: f,
              onOpenChange: (e) => {
                e || l(void 0);
              },
            })),
      (t[25] = c),
      (t[26] = f),
      (t[27] = E))
    : (E = t[27]);
  let D;
  return (
    t[28] !== S || t[29] !== w || t[30] !== T || t[31] !== E || t[32] !== x
      ? ((D = (0, Z.jsxs)(me, { children: [x, S, w, T, E] })),
        (t[28] = S),
        (t[29] = w),
        (t[30] = T),
        (t[31] = E),
        (t[32] = x),
        (t[33] = D))
      : (D = t[33]),
    D
  );
}
function yr(e) {
  let t = (0, jr.c)(9),
    { onCustomize: n, rows: r, visibleResources: i } = e,
    a;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    let e;
    (t[4] !== n || t[5] !== i
      ? ((e = (e) =>
          (0, Z.jsx)(
            br,
            {
              row: e,
              visibleResources: i,
              onCustomize: () => {
                n(e);
              },
            },
            e.origin,
          )),
        (t[4] = n),
        (t[5] = i),
        (t[6] = e))
      : (e = t[6]),
      (a = r.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a));
  } else a = t[3];
  let o;
  return (
    t[7] === a
      ? (o = t[8])
      : ((o = (0, Z.jsx)(Z.Fragment, { children: a })), (t[7] = a), (t[8] = o)),
    o
  );
}
function br(e) {
  let t = (0, jr.c)(25),
    { onCustomize: n, row: r, visibleResources: i } = e,
    a;
  t[0] !== r || t[1] !== i ? ((a = xn(r, i)), (t[0] = r), (t[1] = i), (t[2] = a)) : (a = t[2]);
  let o = a,
    s;
  t[3] === r.origin
    ? (s = t[4])
    : ((s = (0, Z.jsx)(`span`, {
        "data-tooltip-overflow-target": !0,
        className: `block min-w-0 truncate text-sm font-medium`,
        children: r.origin,
      })),
      (t[3] = r.origin),
      (t[4] = s));
  let c;
  t[5] !== r.origin || t[6] !== s
    ? ((c = (0, Z.jsx)(M, {
        tooltipContent: r.origin,
        openWhen: `trigger-overflows`,
        children: s,
      })),
      (t[5] = r.origin),
      (t[6] = s),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] !== o || t[9] !== r.values || t[10] !== i
    ? ((l =
        o === `custom`
          ? (0, Z.jsx)(`div`, {
              className: `flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-xs text-secondary`,
              children: i
                .filter((e) => r.values[e] !== "default")
                .map((e) =>
                  (0, Z.jsxs)(
                    `span`,
                    {
                      className: `flex items-center gap-1.5`,
                      children: [
                        (0, Z.jsx)(Sr, { value: r.values[e] }),
                        (0, Z.jsxs)(`span`, {
                          className: `flex items-center gap-1`,
                          children: [
                            (0, Z.jsx)(`span`, {
                              children:
                                e === `fullCdp`
                                  ? (0, Z.jsx)(d, {
                                      id: `settings.browserUse.sitePermissions.summary.cdp`,
                                      defaultMessage: `CDP`,
                                      description: `CDP summary label for custom browser site permissions`,
                                    })
                                  : Dr(e),
                            }),
                            (0, Z.jsxs)(`span`, {
                              className: `sr-only`,
                              children: [
                                (0, Z.jsx)(d, {
                                  id: `settings.browserUse.sitePermissions.summary.value`,
                                  defaultMessage: ` status: `,
                                  description: `Screen reader prefix for a custom browser site permission value`,
                                }),
                                kr(r.values[e]),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e,
                  ),
                ),
            })
          : null),
      (t[8] = o),
      (t[9] = r.values),
      (t[10] = i),
      (t[11] = l))
    : (l = t[11]);
  let u;
  t[12] !== c || t[13] !== l
    ? ((u = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1`,
        children: [c, l],
      })),
      (t[12] = c),
      (t[13] = l),
      (t[14] = u))
    : (u = t[14]);
  let f;
  t[15] !== n || t[16] !== r || t[17] !== i
    ? ((f = (0, Z.jsx)(xr, { row: r, visibleResources: i, onCustomize: n })),
      (t[15] = n),
      (t[16] = r),
      (t[17] = i),
      (t[18] = f))
    : (f = t[18]);
  let p;
  t[19] === r ? (p = t[20]) : ((p = (0, Z.jsx)(wr, { row: r })), (t[19] = r), (t[20] = p));
  let m;
  return (
    t[21] !== u || t[22] !== f || t[23] !== p
      ? ((m = (0, Z.jsxs)(`div`, {
          className: `flex min-h-14 items-center gap-3 px-4 py-2.5`,
          children: [u, f, p],
        })),
        (t[21] = u),
        (t[22] = f),
        (t[23] = p),
        (t[24] = m))
      : (m = t[24]),
    m
  );
}
function xr(e) {
  let t = (0, jr.c)(43),
    { onCustomize: n, row: i, visibleResources: a } = e,
    o = r(_e),
    s = ee(),
    [c, l] = (0, Mr.useState)(!1),
    u = Et(),
    f;
  t[0] !== i || t[1] !== a ? ((f = xn(i, a)), (t[0] = i), (t[1] = a), (t[2] = f)) : (f = t[2]);
  let p = f,
    m;
  bb0: switch (p) {
    case `allowed`: {
      let e;
      (t[3] !== s || t[4] !== i.origin
        ? ((e = s.formatMessage(
            {
              id: `settings.browserUse.sitePermissions.preset.allowedAriaLabel`,
              defaultMessage: `Allow browsing for {origin}`,
              description: `Aria label for an allowed browser use site permission preset dropdown`,
            },
            { origin: i.origin },
          )),
          (t[3] = s),
          (t[4] = i.origin),
          (t[5] = e))
        : (e = t[5]),
        (m = e));
      break bb0;
    }
    case `denied`: {
      let e;
      (t[6] !== s || t[7] !== i.origin
        ? ((e = s.formatMessage(
            {
              id: `settings.browserUse.sitePermissions.preset.deniedAriaLabel`,
              defaultMessage: `Block browsing for {origin}`,
              description: `Aria label for a blocked browser use site permission preset dropdown`,
            },
            { origin: i.origin },
          )),
          (t[6] = s),
          (t[7] = i.origin),
          (t[8] = e))
        : (e = t[8]),
        (m = e));
      break bb0;
    }
    case `custom`: {
      let e;
      (t[9] !== s || t[10] !== i.origin
        ? ((e = s.formatMessage(
            {
              id: `settings.browserUse.sitePermissions.preset.customAriaLabel`,
              defaultMessage: `Custom permissions for {origin}`,
              description: `Aria label for a custom browser use site permission preset dropdown`,
            },
            { origin: i.origin },
          )),
          (t[9] = s),
          (t[10] = i.origin),
          (t[11] = e))
        : (e = t[11]),
        (m = e));
    }
  }
  let h;
  t[12] !== c || t[13] !== i || t[14] !== o || t[15] !== u
    ? ((h = async (e) => {
        e === i.values.origin ||
          c ||
          (l(!0),
          await (async () => {
            try {
              await u.mutateAsync({
                updates: Sn({
                  nextValues: { ...i.values, origin: e },
                  origin: i.origin,
                  resources: [`origin`],
                  values: i.values,
                }),
              });
            } catch {
              o.get(Ae).danger(Ar());
            }
          })().finally(() => {
            l(!1);
          }));
      }),
      (t[12] = c),
      (t[13] = i),
      (t[14] = o),
      (t[15] = u),
      (t[16] = h))
    : (h = t[16]);
  let g = h,
    _ = m,
    v;
  t[17] === p
    ? (v = t[18])
    : ((v = (0, Z.jsx)(`span`, {
        className: `flex w-5 shrink-0 items-center justify-center`,
        children:
          p === `custom`
            ? (0, Z.jsx)(De, { className: `text-secondary`, "aria-hidden": !1, asset: gt })
            : (0, Z.jsx)(Sr, { value: p }),
      })),
      (t[17] = p),
      (t[18] = v));
  let y;
  t[19] === p ? (y = t[20]) : ((y = Or(p)), (t[19] = p), (t[20] = y));
  let b;
  t[21] === y
    ? (b = t[22])
    : ((b = (0, Z.jsx)(`span`, { className: `truncate`, children: y })), (t[21] = y), (t[22] = b));
  let x;
  t[23] !== c || t[24] !== m || t[25] !== v || t[26] !== b
    ? ((x = (0, Z.jsxs)(te, {
        "aria-label": _,
        className: `w-42!`,
        disabled: c,
        children: [v, b],
      })),
      (t[23] = c),
      (t[24] = m),
      (t[25] = v),
      (t[26] = b),
      (t[27] = x))
    : (x = t[27]);
  let S;
  t[28] !== g || t[29] !== p
    ? ((S = Nr.map((e) =>
        (0, Z.jsx)(
          w.Item,
          {
            RightIcon: e === p ? Ge : void 0,
            onSelect: () => {
              g(e);
            },
            children: (0, Z.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                (0, Z.jsx)(Sr, { value: e }),
                (0, Z.jsx)(`span`, { className: `truncate`, children: Or(e) }),
              ],
            }),
          },
          e,
        ),
      )),
      (t[28] = g),
      (t[29] = p),
      (t[30] = S))
    : (S = t[30]);
  let C;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(w.Separator, {})), (t[31] = C))
    : (C = t[31]);
  let T = p === `custom` ? Ge : void 0,
    E;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          (0, Z.jsx)(De, { className: `shrink-0 text-secondary`, "aria-hidden": !1, asset: gt }),
          (0, Z.jsx)(d, {
            id: `settings.browserUse.sitePermissions.preset.customizeAction`,
            defaultMessage: `Customize`,
            description: `Browser use site permission custom option label`,
          }),
        ],
      })),
      (t[32] = E))
    : (E = t[32]);
  let D;
  t[33] !== n || t[34] !== T
    ? ((D = (0, Z.jsx)(w.Item, { RightIcon: T, onSelect: n, children: E })),
      (t[33] = n),
      (t[34] = T),
      (t[35] = D))
    : (D = t[35]);
  let O;
  t[36] !== D || t[37] !== S
    ? ((O = (0, Z.jsxs)(`div`, { className: `flex flex-col`, children: [S, C, D] })),
      (t[36] = D),
      (t[37] = S),
      (t[38] = O))
    : (O = t[38]);
  let A;
  return (
    t[39] !== c || t[40] !== O || t[41] !== x
      ? ((A = (0, Z.jsx)(k, {
          align: `end`,
          contentClassName: `w-42!`,
          disabled: c,
          triggerButton: x,
          children: O,
        })),
        (t[39] = c),
        (t[40] = O),
        (t[41] = x),
        (t[42] = A))
      : (A = t[42]),
    A
  );
}
function Sr(e) {
  let t = (0, jr.c)(6),
    { value: n } = e,
    r = n === `allowed` && `bg-chart-green`,
    i = n === `denied` && `bg-text-danger`,
    a = n === "default" && `bg-text-tertiary`,
    o;
  t[0] !== r || t[1] !== i || t[2] !== a
    ? ((o = W(`size-2 shrink-0 rounded-full`, r, i, a)),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === o ? (s = t[5]) : ((s = (0, Z.jsx)(`span`, { className: o })), (t[4] = o), (t[5] = s)),
    s
  );
}
function Cr(e) {
  let t = (0, jr.c)(21),
    { disabled: n, labelId: r, onSelect: i, value: a, valueId: o } = e,
    s = `${r} ${o}`,
    c;
  t[0] === a ? (c = t[1]) : ((c = (0, Z.jsx)(Sr, { value: a })), (t[0] = a), (t[1] = c));
  let l;
  t[2] === a ? (l = t[3]) : ((l = kr(a)), (t[2] = a), (t[3] = l));
  let u;
  t[4] !== l || t[5] !== o
    ? ((u = (0, Z.jsx)(`span`, { id: o, className: `truncate`, children: l })),
      (t[4] = l),
      (t[5] = o),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== n || t[8] !== s || t[9] !== c || t[10] !== u
    ? ((d = (0, Z.jsxs)(te, {
        "aria-labelledby": s,
        className: `w-36!`,
        disabled: n,
        children: [c, u],
      })),
      (t[7] = n),
      (t[8] = s),
      (t[9] = c),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let f;
  t[12] !== i || t[13] !== a
    ? ((f = Pr.map((e) =>
        (0, Z.jsx)(
          w.Item,
          {
            RightIcon: e === a ? Ge : void 0,
            onSelect: () => {
              i(e);
            },
            children: (0, Z.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                (0, Z.jsx)(Sr, { value: e }),
                (0, Z.jsx)(`span`, { className: `truncate`, children: kr(e) }),
              ],
            }),
          },
          e,
        ),
      )),
      (t[12] = i),
      (t[13] = a),
      (t[14] = f))
    : (f = t[14]);
  let p;
  t[15] === f
    ? (p = t[16])
    : ((p = (0, Z.jsx)(`div`, { className: `flex flex-col`, children: f })),
      (t[15] = f),
      (t[16] = p));
  let m;
  return (
    t[17] !== n || t[18] !== d || t[19] !== p
      ? ((m = (0, Z.jsx)(k, {
          align: `end`,
          contentClassName: `w-36!`,
          disabled: n,
          triggerButton: d,
          children: p,
        })),
        (t[17] = n),
        (t[18] = d),
        (t[19] = p),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function wr(e) {
  let t = (0, jr.c)(41),
    { row: n } = e,
    i = r(_e),
    a = ee(),
    [o, s] = (0, Mr.useState)(!1),
    [c, l] = (0, Mr.useState)(!1),
    u = Et(),
    f;
  t[0] !== c || t[1] !== n.origin || t[2] !== n.values || t[3] !== i || t[4] !== u
    ? ((f = async () => {
        c ||
          (l(!0),
          await (async () => {
            try {
              (await u.mutateAsync({
                updates: Sn({
                  nextValues: Lr,
                  origin: n.origin,
                  resources: Object.values(Fr),
                  values: n.values,
                }),
              }),
                s(!1));
            } catch {
              i.get(Ae).danger(Ar());
            }
          })().finally(() => {
            l(!1);
          }));
      }),
      (t[0] = c),
      (t[1] = n.origin),
      (t[2] = n.values),
      (t[3] = i),
      (t[4] = u),
      (t[5] = f))
    : (f = t[5]);
  let p = f,
    m;
  t[6] !== a || t[7] !== n.origin
    ? ((m = a.formatMessage(
        {
          id: `settings.browserUse.sitePermissions.clearAriaLabel`,
          defaultMessage: `Remove custom permissions for {origin}`,
          description: `Aria label for button that removes all custom browser site permissions`,
        },
        { origin: n.origin },
      )),
      (t[6] = a),
      (t[7] = n.origin),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => {
        s(!0);
      }),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(yt, { className: `icon-2xs` })), (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] !== c || t[12] !== m
    ? ((_ = (0, Z.jsx)(Ne, {
        "aria-label": m,
        color: `ghost`,
        disabled: c,
        onClick: h,
        size: `icon`,
        children: g,
      })),
      (t[11] = c),
      (t[12] = m),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] === p
    ? (v = t[15])
    : ((v = (e) => {
        (e.preventDefault(), p());
      }),
      (t[14] = p),
      (t[15] = v));
  let y;
  t[16] === n.origin
    ? (y = t[17])
    : ((y = (0, Z.jsx)(Je, {
        asChild: !0,
        children: (0, Z.jsx)(`span`, {
          children: (0, Z.jsx)(d, {
            id: `settings.browserUse.sitePermissions.removeDialog.title`,
            defaultMessage: `Remove custom permissions for {origin}?`,
            description: `Confirmation dialog title for removing custom browser site permissions`,
            values: { origin: n.origin },
          }),
        }),
      })),
      (t[16] = n.origin),
      (t[17] = y));
  let b;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(ze, {
        asChild: !0,
        children: (0, Z.jsx)(`span`, {
          children: (0, Z.jsx)(d, {
            id: `settings.browserUse.sitePermissions.removeDialog.subtitle`,
            defaultMessage: `This resets this site's custom permissions to their defaults`,
            description: `Confirmation dialog subtitle for removing custom browser site permissions`,
          }),
        }),
      })),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] === y
    ? (x = t[20])
    : ((x = (0, Z.jsx)(pe, { children: (0, Z.jsx)(le, { title: y, subtitle: b }) })),
      (t[19] = y),
      (t[20] = x));
  let S;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => {
        s(!1);
      }),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for removing custom browser site permissions`,
      })),
      (t[22] = C))
    : (C = t[22]);
  let w;
  t[23] === c
    ? (w = t[24])
    : ((w = (0, Z.jsx)(Ne, {
        color: `ghost`,
        disabled: c,
        onClick: S,
        type: `button`,
        children: C,
      })),
      (t[23] = c),
      (t[24] = w));
  let T;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for removing custom browser site permissions`,
      })),
      (t[25] = T))
    : (T = t[25]);
  let E;
  t[26] === c
    ? (E = t[27])
    : ((E = (0, Z.jsx)(Ne, { color: `danger`, loading: c, type: `submit`, children: T })),
      (t[26] = c),
      (t[27] = E));
  let D;
  t[28] !== w || t[29] !== E
    ? ((D = (0, Z.jsx)(pe, { children: (0, Z.jsxs)(de, { children: [w, E] }) })),
      (t[28] = w),
      (t[29] = E),
      (t[30] = D))
    : (D = t[30]);
  let k;
  t[31] !== D || t[32] !== v || t[33] !== x
    ? ((k = (0, Z.jsxs)(O, { as: `form`, onSubmit: v, children: [x, D] })),
      (t[31] = D),
      (t[32] = v),
      (t[33] = x),
      (t[34] = k))
    : (k = t[34]);
  let A;
  t[35] !== o || t[36] !== k
    ? ((A = (0, Z.jsx)(Qe, { open: o, onOpenChange: s, size: `compact`, children: k })),
      (t[35] = o),
      (t[36] = k),
      (t[37] = A))
    : (A = t[37]);
  let j;
  return (
    t[38] !== A || t[39] !== _
      ? ((j = (0, Z.jsxs)(Z.Fragment, { children: [_, A] })), (t[38] = A), (t[39] = _), (t[40] = j))
      : (j = t[40]),
    j
  );
}
function Tr(e) {
  let t = (0, jr.c)(46),
    { onOpenChange: n, row: i, visibleResources: a } = e,
    o = r(_e),
    [s, c] = (0, Mr.useState)(i.values),
    [l, u] = (0, Mr.useState)(!1),
    f = Et(),
    p;
  t[0] !== l ||
  t[1] !== n ||
  t[2] !== i.origin ||
  t[3] !== i.values ||
  t[4] !== o ||
  t[5] !== s ||
  t[6] !== a ||
  t[7] !== f
    ? ((p = async () => {
        l ||
          (u(!0),
          await (async () => {
            try {
              (await f.mutateAsync({
                updates: Sn({ nextValues: s, origin: i.origin, resources: a, values: i.values }),
              }),
                n(!1));
            } catch {
              o.get(Ae).danger(Ar());
            }
          })().finally(() => {
            u(!1);
          }));
      }),
      (t[0] = l),
      (t[1] = n),
      (t[2] = i.origin),
      (t[3] = i.values),
      (t[4] = o),
      (t[5] = s),
      (t[6] = a),
      (t[7] = f),
      (t[8] = p))
    : (p = t[8]);
  let m = p,
    h;
  t[9] === m
    ? (h = t[10])
    : ((h = (e) => {
        (e.preventDefault(), m());
      }),
      (t[9] = m),
      (t[10] = h));
  let g;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(Je, {
        asChild: !0,
        children: (0, Z.jsx)(`span`, {
          children: (0, Z.jsx)(d, {
            id: `settings.browserUse.sitePermissions.customDialog.title`,
            defaultMessage: `Custom permissions`,
            description: `Title for custom browser site permissions dialog`,
          }),
        }),
      })),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] === i.origin
    ? (_ = t[13])
    : ((_ = (0, Z.jsx)(`span`, { className: `text-default`, children: i.origin })),
      (t[12] = i.origin),
      (t[13] = _));
  let v;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.customDialog.subtitle`,
        defaultMessage: `Choose what ChatGPT can do on this site`,
        description: `Subtitle for custom browser site permissions dialog explaining that the permissions will change Codex's behavior on the site`,
      })),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] === _
    ? (y = t[16])
    : ((y = (0, Z.jsx)(pe, {
        children: (0, Z.jsx)(le, {
          title: g,
          subtitle: (0, Z.jsx)(ze, {
            asChild: !0,
            children: (0, Z.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [_, v] }),
          }),
        }),
      })),
      (t[15] = _),
      (t[16] = y));
  let b;
  if (t[17] !== l || t[18] !== s || t[19] !== a) {
    let e;
    (t[21] !== l || t[22] !== s
      ? ((e = (e) => {
          let t = `browser-use-custom-${e}-label`,
            n = `browser-use-custom-${e}-value`;
          return (0, Z.jsx)(
            qe,
            {
              label: (0, Z.jsx)(`span`, { id: t, children: Dr(e) }),
              control: (0, Z.jsx)(Cr, {
                disabled: l,
                labelId: t,
                value: s[e],
                valueId: n,
                onSelect: (t) => {
                  c({ ...s, [e]: t });
                },
              }),
              variant: `nested`,
            },
            e,
          );
        }),
        (t[21] = l),
        (t[22] = s),
        (t[23] = e))
      : (e = t[23]),
      (b = a.map(e)),
      (t[17] = l),
      (t[18] = s),
      (t[19] = a),
      (t[20] = b));
  } else b = t[20];
  let x;
  t[24] === b
    ? (x = t[25])
    : ((x = (0, Z.jsx)(pe, {
        children: (0, Z.jsx)(se, {
          className: `-mx-5 bg-transparent`,
          variant: `secondary`,
          children: b,
        }),
      })),
      (t[24] = b),
      (t[25] = x));
  let S;
  t[26] === n
    ? (S = t[27])
    : ((S = () => {
        n(!1);
      }),
      (t[26] = n),
      (t[27] = S));
  let C;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.customDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for custom browser site permissions dialog`,
      })),
      (t[28] = C))
    : (C = t[28]);
  let w;
  t[29] !== l || t[30] !== S
    ? ((w = (0, Z.jsx)(Ne, {
        color: `outline`,
        disabled: l,
        onClick: S,
        type: `button`,
        children: C,
      })),
      (t[29] = l),
      (t[30] = S),
      (t[31] = w))
    : (w = t[31]);
  let T;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.customDialog.done`,
        defaultMessage: `Done`,
        description: `Done button label for custom browser site permissions dialog`,
      })),
      (t[32] = T))
    : (T = t[32]);
  let E;
  t[33] === l
    ? (E = t[34])
    : ((E = (0, Z.jsx)(Ne, { color: `primary`, loading: l, type: `submit`, children: T })),
      (t[33] = l),
      (t[34] = E));
  let D;
  t[35] !== w || t[36] !== E
    ? ((D = (0, Z.jsx)(pe, { children: (0, Z.jsxs)(de, { children: [w, E] }) })),
      (t[35] = w),
      (t[36] = E),
      (t[37] = D))
    : (D = t[37]);
  let k;
  t[38] !== D || t[39] !== h || t[40] !== y || t[41] !== x
    ? ((k = (0, Z.jsxs)(O, { as: `form`, onSubmit: h, children: [y, x, D] })),
      (t[38] = D),
      (t[39] = h),
      (t[40] = y),
      (t[41] = x),
      (t[42] = k))
    : (k = t[42]);
  let A;
  return (
    t[43] !== n || t[44] !== k
      ? ((A = (0, Z.jsx)(Qe, { open: !0, onOpenChange: n, size: `compact`, children: k })),
        (t[43] = n),
        (t[44] = k),
        (t[45] = A))
      : (A = t[45]),
    A
  );
}
function Er(e) {
  let t = (0, jr.c)(84),
    { onOpenChange: n, open: i, visibleResources: a } = e,
    o = r(_e),
    s = ee(),
    [c, u] = (0, Mr.useState)(``),
    [f, p] = (0, Mr.useState)(`allowed`),
    [m, h] = (0, Mr.useState)(Ir),
    [g, _] = (0, Mr.useState)(!1),
    [v, y] = (0, Mr.useState)(!1),
    b = Et(),
    x;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => {
        (u(``), p(`allowed`), h(Ir), _(!1));
      }),
      (t[0] = x))
    : (x = t[0]);
  let S = x,
    C;
  t[1] !== m ||
  t[2] !== v ||
  t[3] !== n ||
  t[4] !== c ||
  t[5] !== o ||
  t[6] !== f ||
  t[7] !== a ||
  t[8] !== b
    ? ((C = async () => {
        let e = c.trim();
        e.length === 0 ||
          v ||
          (y(!0),
          await (async () => {
            try {
              (await b.mutateAsync({
                updates: Sn({
                  nextValues: { ...m, origin: f },
                  origin: e,
                  resources: a,
                  values: Lr,
                }),
              }),
                S(),
                n(!1));
            } catch {
              o.get(Ae).danger(Ar());
            }
          })().finally(() => {
            y(!1);
          }));
      }),
      (t[1] = m),
      (t[2] = v),
      (t[3] = n),
      (t[4] = c),
      (t[5] = o),
      (t[6] = f),
      (t[7] = a),
      (t[8] = b),
      (t[9] = C))
    : (C = t[9]);
  let T = C,
    E;
  t[10] === n
    ? (E = t[11])
    : ((E = (e) => {
        (e || S(), n(e));
      }),
      (t[10] = n),
      (t[11] = E));
  let D;
  t[12] === T
    ? (D = t[13])
    : ((D = (e) => {
        (e.preventDefault(), T());
      }),
      (t[12] = T),
      (t[13] = D));
  let A;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Z.jsx)(Je, {
        asChild: !0,
        children: (0, Z.jsx)(`span`, {
          children: (0, Z.jsx)(d, {
            id: `settings.browserUse.sitePermissions.addDialog.title`,
            defaultMessage: `Add site permission`,
            description: `Title for add browser site permission dialog`,
          }),
        }),
      })),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(pe, {
        children: (0, Z.jsx)(le, {
          title: A,
          subtitle: (0, Z.jsx)(ze, {
            asChild: !0,
            children: (0, Z.jsx)(`span`, {
              children: (0, Z.jsx)(d, {
                id: `settings.browserUse.sitePermissions.addDialog.subtitle`,
                defaultMessage: `Choose what access ChatGPT has on a site`,
                description: `Subtitle for add browser site permission dialog`,
              }),
            }),
          }),
        }),
      })),
      (t[15] = j))
    : (j = t[15]);
  let M;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Z.jsx)(`span`, {
        className: `text-sm font-medium`,
        children: (0, Z.jsx)(d, {
          id: `settings.browserUse.sitePermissions.addDialog.siteLabel`,
          defaultMessage: `Site`,
          description: `Site label for add browser site permission dialog`,
        }),
      })),
      (t[16] = M))
    : (M = t[16]);
  let N;
  t[17] === s
    ? (N = t[18])
    : ((N = s.formatMessage({
        id: `settings.browserUse.sitePermissions.addDialog.siteAriaLabel`,
        defaultMessage: `Site`,
        description: `Aria label for site input in add browser site permission dialog`,
      })),
      (t[17] = s),
      (t[18] = N));
  let P;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => {
        u(e.currentTarget.value);
      }),
      (t[19] = P))
    : (P = t[19]);
  let F;
  t[20] === s
    ? (F = t[21])
    : ((F = s.formatMessage({
        id: `settings.browserUse.domains.addDialogPlaceholder`,
        defaultMessage: `example.com`,
        description: `Placeholder for browser use domain input`,
      })),
      (t[20] = s),
      (t[21] = F));
  let I;
  t[22] !== v || t[23] !== c || t[24] !== F || t[25] !== N
    ? ((I = (0, Z.jsxs)(`label`, {
        className: `flex flex-col gap-1.5`,
        children: [
          M,
          (0, Z.jsx)(l, {
            autoFocus: !0,
            "aria-label": N,
            disabled: v,
            onChange: P,
            placeholder: F,
            value: c,
          }),
        ],
      })),
      (t[22] = v),
      (t[23] = c),
      (t[24] = F),
      (t[25] = N),
      (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Z.jsx)(`span`, {
        id: `browser-use-add-browsing-label`,
        className: `text-sm font-medium`,
        children: (0, Z.jsx)(d, {
          id: `settings.browserUse.sitePermissions.addDialog.behaviorLabel`,
          defaultMessage: `Browse`,
          description: `Behavior label for add browser site permission dialog`,
        }),
      })),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] === f ? (R = t[29]) : ((R = (0, Z.jsx)(Sr, { value: f })), (t[28] = f), (t[29] = R));
  let z;
  t[30] === f ? (z = t[31]) : ((z = Or(f)), (t[30] = f), (t[31] = z));
  let B;
  t[32] === z
    ? (B = t[33])
    : ((B = (0, Z.jsx)(`span`, {
        id: `browser-use-add-browsing-value`,
        className: `truncate`,
        children: z,
      })),
      (t[32] = z),
      (t[33] = B));
  let V;
  t[34] !== v || t[35] !== R || t[36] !== B
    ? ((V = (0, Z.jsxs)(te, {
        "aria-labelledby": `browser-use-add-browsing-label browser-use-add-browsing-value`,
        className: `w-full justify-between`,
        disabled: v,
        children: [R, B],
      })),
      (t[34] = v),
      (t[35] = R),
      (t[36] = B),
      (t[37] = V))
    : (V = t[37]);
  let H;
  t[38] === f
    ? (H = t[39])
    : ((H = Nr.map((e) =>
        (0, Z.jsx)(
          w.Item,
          {
            RightIcon: e === f ? Ge : void 0,
            onSelect: () => {
              p(e);
            },
            children: (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [(0, Z.jsx)(Sr, { value: e }), (0, Z.jsx)(`span`, { children: Or(e) })],
            }),
          },
          e,
        ),
      )),
      (t[38] = f),
      (t[39] = H));
  let U;
  t[40] === H
    ? (U = t[41])
    : ((U = (0, Z.jsx)(`div`, { className: `flex flex-col`, children: H })),
      (t[40] = H),
      (t[41] = U));
  let W;
  t[42] !== v || t[43] !== V || t[44] !== U
    ? ((W = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-1.5`,
        children: [
          L,
          (0, Z.jsx)(k, {
            align: `start`,
            contentWidth: `menuWide`,
            disabled: v,
            triggerButton: V,
            children: U,
          }),
        ],
      })),
      (t[42] = v),
      (t[43] = V),
      (t[44] = U),
      (t[45] = W))
    : (W = t[45]);
  let ne;
  t[46] !== m || t[47] !== v || t[48] !== g || t[49] !== a
    ? ((ne = g
        ? (0, Z.jsx)(se, {
            className: `-mx-5 !rounded-none !bg-transparent`,
            variant: `secondary`,
            children: a.map((e) => {
              if (e === `origin`) return null;
              let t = `browser-use-add-${e}-label`,
                n = `browser-use-add-${e}-value`;
              return (0, Z.jsx)(
                qe,
                {
                  label: (0, Z.jsx)(`span`, { id: t, children: Dr(e) }),
                  control: (0, Z.jsx)(Cr, {
                    disabled: v,
                    labelId: t,
                    value: m[e],
                    valueId: n,
                    onSelect: (t) => {
                      h({ ...m, [e]: t });
                    },
                  }),
                  variant: `nested`,
                },
                e,
              );
            }),
          })
        : null),
      (t[46] = m),
      (t[47] = v),
      (t[48] = g),
      (t[49] = a),
      (t[50] = ne))
    : (ne = t[50]);
  let G;
  t[51] !== I || t[52] !== W || t[53] !== ne
    ? ((G = (0, Z.jsxs)(pe, { className: `gap-3`, children: [I, W, ne] })),
      (t[51] = I),
      (t[52] = W),
      (t[53] = ne),
      (t[54] = G))
    : (G = t[54]);
  let K;
  t[55] !== v || t[56] !== g || t[57] !== a
    ? ((K =
        !g && a.length > 1
          ? (0, Z.jsx)(Ne, {
              className: `me-auto`,
              color: `ghost`,
              disabled: v,
              onClick: () => {
                _(!0);
              },
              type: `button`,
              children: (0, Z.jsx)(d, {
                id: `settings.browserUse.sitePermissions.addDialog.moreOptions`,
                defaultMessage: `More options`,
                description: `Button label to reveal advanced options when adding browser site permissions`,
              }),
            })
          : null),
      (t[55] = v),
      (t[56] = g),
      (t[57] = a),
      (t[58] = K))
    : (K = t[58]);
  let re;
  t[59] === n
    ? (re = t[60])
    : ((re = () => {
        (S(), n(!1));
      }),
      (t[59] = n),
      (t[60] = re));
  let ie;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Z.jsx)(d, {
        id: `settings.browserUse.domains.addDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for add browser domain dialog`,
      })),
      (t[61] = ie))
    : (ie = t[61]);
  let ae;
  t[62] !== v || t[63] !== re
    ? ((ae = (0, Z.jsx)(Ne, {
        color: `outline`,
        disabled: v,
        onClick: re,
        type: `button`,
        children: ie,
      })),
      (t[62] = v),
      (t[63] = re),
      (t[64] = ae))
    : (ae = t[64]);
  let q;
  t[65] !== v || t[66] !== c
    ? ((q = c.trim().length === 0 || v), (t[65] = v), (t[66] = c), (t[67] = q))
    : (q = t[67]);
  let oe;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, Z.jsx)(d, {
        id: `settings.browserUse.domains.addDialogConfirm`,
        defaultMessage: `Add`,
        description: `Confirm button label for add browser domain dialog`,
      })),
      (t[68] = oe))
    : (oe = t[68]);
  let J;
  t[69] !== v || t[70] !== q
    ? ((J = (0, Z.jsx)(Ne, {
        color: `primary`,
        disabled: q,
        loading: v,
        type: `submit`,
        children: oe,
      })),
      (t[69] = v),
      (t[70] = q),
      (t[71] = J))
    : (J = t[71]);
  let ce;
  t[72] !== K || t[73] !== ae || t[74] !== J
    ? ((ce = (0, Z.jsx)(pe, { children: (0, Z.jsxs)(de, { children: [K, ae, J] }) })),
      (t[72] = K),
      (t[73] = ae),
      (t[74] = J),
      (t[75] = ce))
    : (ce = t[75]);
  let ue;
  t[76] !== G || t[77] !== ce || t[78] !== D
    ? ((ue = (0, Z.jsxs)(O, { as: `form`, onSubmit: D, children: [j, G, ce] })),
      (t[76] = G),
      (t[77] = ce),
      (t[78] = D),
      (t[79] = ue))
    : (ue = t[79]);
  let fe;
  return (
    t[80] !== i || t[81] !== E || t[82] !== ue
      ? ((fe = (0, Z.jsx)(Qe, { open: i, onOpenChange: E, size: `compact`, children: ue })),
        (t[80] = i),
        (t[81] = E),
        (t[82] = ue),
        (t[83] = fe))
      : (fe = t[83]),
    fe
  );
}
function Dr(e) {
  switch (e) {
    case `origin`:
      return (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.websiteAccess`,
        defaultMessage: `Browse`,
        description: `Browse label for custom browser site permissions`,
      });
    case `download`:
      return (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.downloads`,
        defaultMessage: `Download`,
        description: `Download label for custom browser site permissions`,
      });
    case `upload`:
      return (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.uploads`,
        defaultMessage: `Upload`,
        description: `Upload label for custom browser site permissions`,
      });
    case `fullCdp`:
      return (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.cdpAccess`,
        defaultMessage: `Debug (CDP)`,
        description: `Debug label for custom browser site permissions`,
      });
  }
}
function Or(e) {
  switch (e) {
    case `allowed`:
      return (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.preset.allowed`,
        defaultMessage: `Allow browsing`,
        description: `Allowed browsing preset label for browser site permissions`,
      });
    case `denied`:
      return (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.preset.denied`,
        defaultMessage: `Block browsing`,
        description: `Blocked browsing preset label for browser site permissions`,
      });
    case `custom`:
      return (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.preset.custom`,
        defaultMessage: `Custom`,
        description: `Custom browser site permissions trigger label`,
      });
  }
}
function kr(e) {
  switch (e) {
    case `default`:
      return (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.value.default`,
        defaultMessage: `Default`,
        description: `Default value label for browser use site permissions table`,
      });
    case `allowed`:
      return (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.value.allowed`,
        defaultMessage: `Allow`,
        description: `Allowed value label for browser use site permissions table`,
      });
    case `denied`:
      return (0, Z.jsx)(d, {
        id: `settings.browserUse.sitePermissions.value.denied`,
        defaultMessage: `Block`,
        description: `Denied value label for browser use site permissions table`,
      });
  }
}
function Ar() {
  return (0, Z.jsx)(d, {
    id: `settings.browserUse.sitePermissions.saveError`,
    defaultMessage: `Unable to save site permissions`,
    description: `Toast shown when saving browser site permissions fails`,
  });
}
var jr,
  Mr,
  Z,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr = e(() => {
    ((jr = Ie()),
      st(),
      b(),
      ge(),
      it(),
      I(),
      (Mr = t(a(), 1)),
      K(),
      i(),
      ke(),
      we(),
      fe(),
      Ee(),
      Pe(),
      re(),
      Fe(),
      D(),
      T(),
      at(),
      m(),
      Be(),
      At(),
      U(),
      V(),
      Ut(),
      ue(),
      J(),
      x(),
      Nn(),
      (Z = Oe()),
      (Nr = [`allowed`, `denied`]),
      (Pr = [`default`, `allowed`, `denied`]),
      (Fr = { origin: `origin`, download: `download`, upload: `upload`, fullCdp: `fullCdp` }),
      (Ir = { download: `default`, upload: `default`, fullCdp: `default` }),
      (Lr = { origin: `default`, ...Ir }));
  });
function zr(e) {
  let t = (0, Gr.c)(26),
    { backend: n, browserUseEnabled: r, showHistory: i, showWebMcp: a, siteSettingsRow: s } = e,
    c = r === void 0 || r,
    l = i === void 0 || i,
    u = a !== void 0 && a,
    { selectedHostId: f } = o(),
    p = P(Ze(`370972467`) ? Nt : !1, f),
    m = p !== !1 && p !== `unsupported`;
  if (p === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Wt, {
            children: (0, Q.jsx)(d, {
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
  if (p === `error`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(B, {
            layout: `settings-row`,
            children: (0, Q.jsx)(d, {
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
  if (m) {
    let e;
    return (
      t[2] !== n || t[3] !== c || t[4] !== l || t[5] !== u || t[6] !== s
        ? ((e = (0, Q.jsx)(dr, {
            backend: n,
            browserUseEnabled: c,
            showHistory: l,
            showWebMcp: u,
            siteSettingsRow: s,
          })),
          (t[2] = n),
          (t[3] = c),
          (t[4] = l),
          (t[5] = u),
          (t[6] = s),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let h;
  t[8] === n
    ? (h = t[9])
    : ((h = (0, Q.jsx)(me.Header, {
        title:
          n === `chrome`
            ? (0, Q.jsx)(d, {
                id: `settings.computerUse.chrome.permissions.title`,
                defaultMessage: `Permissions`,
                description: `Title for Chromium browser permissions settings section`,
              })
            : (0, Q.jsx)(d, {
                id: `settings.browserUse.permissions.title`,
                defaultMessage: `Permissions`,
                description: `Title for browser use permissions settings section`,
              }),
      })),
      (t[8] = n),
      (t[9] = h));
  let g;
  t[10] !== n || t[11] !== c || t[12] !== l || t[13] !== u
    ? ((g = c
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(Br, {}),
              l && n === `chrome` ? (0, Q.jsx)(Hr, {}) : null,
              l && n === `iab` ? (0, Q.jsx)(Ur, {}) : null,
              (0, Q.jsx)(Vr, { kind: `download` }),
              (0, Q.jsx)(Vr, { kind: `upload` }),
              u ? (0, Q.jsx)(sr, {}) : null,
            ],
          })
        : null),
      (t[10] = n),
      (t[11] = c),
      (t[12] = l),
      (t[13] = u),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== s || t[16] !== g
    ? ((_ = (0, Q.jsx)(me.Content, { children: (0, Q.jsxs)(se, { children: [s, g] }) })),
      (t[15] = s),
      (t[16] = g),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] !== h || t[19] !== _
    ? ((v = (0, Q.jsxs)(me, { children: [h, _] })), (t[18] = h), (t[19] = _), (t[20] = v))
    : (v = t[20]);
  let y;
  t[21] === c
    ? (y = t[22])
    : ((y = c
        ? (0, Q.jsxs)(Q.Fragment, { children: [(0, Q.jsx)(_r, {}), (0, Q.jsx)(Gt, {})] })
        : null),
      (t[21] = c),
      (t[22] = y));
  let b;
  return (
    t[23] !== v || t[24] !== y
      ? ((b = (0, Q.jsxs)(Q.Fragment, { children: [v, y] })), (t[23] = v), (t[24] = y), (t[25] = b))
      : (b = t[25]),
    b
  );
}
function Br() {
  let e = (0, Gr.c)(35),
    t = r(_e),
    { data: n, isLoading: i } = v(Lt),
    a = n?.approvalMode,
    o = Pt(),
    { value: s } = He(lt),
    c;
  e[0] === s ? (c = e[1]) : ((c = _t(s)), (e[0] = s), (e[1] = c));
  let l = c,
    u;
  e[2] === l
    ? (u = e[3])
    : ((u = (e) => {
        F({ event: e, href: l, initiator: `open_in_browser_bridge` });
      }),
      (e[2] = l),
      (e[3] = u));
  let f = u,
    p;
  e[4] !== l || e[5] !== f
    ? ((p = (e) =>
        (0, Q.jsx)(`a`, {
          className: `text-info hover:underline`,
          href: l,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: f,
          children: e,
        })),
      (e[4] = l),
      (e[5] = f),
      (e[6] = p))
    : (p = e[6]);
  let m = p,
    h;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = {
        id: `alwaysAsk`,
        label: (0, Q.jsx)(d, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, Q.jsx)(d, {
          id: `settings.browserUse.approval.alwaysAsk.description`,
          defaultMessage: `Ask before opening websites`,
          description: `Description for browser use always ask approval mode`,
        }),
      }),
      (e[7] = h))
    : (h = e[7]);
  let g;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = [
        h,
        {
          id: `neverAsk`,
          label: (0, Q.jsx)(d, {
            id: `settings.browserUse.approval.neverAsk.label`,
            defaultMessage: `Always allow`,
            description: `Label for browser use never ask approval mode`,
          }),
          description: (0, Q.jsx)(d, {
            id: `settings.browserUse.approval.neverAsk.description`,
            defaultMessage: `Open websites without asking`,
            description: `Description for browser use never ask approval mode`,
          }),
          elevatedRiskDisclaimer: (0, Q.jsx)(d, {
            id: `settings.browserUse.approval.neverAsk.elevatedRiskDisclaimer`,
            defaultMessage: `This setting has elevated risks for your data.`,
            description: `Elevated risk warning for the browser use always allow website approval mode`,
          }),
        },
      ]),
      (e[8] = g))
    : (g = e[8]);
  let _ = g,
    y;
  e[9] === a ? (y = e[10]) : ((y = _.find((e) => e.id === a) ?? _[0]), (e[9] = a), (e[10] = y));
  let b = y,
    x = o.isPending,
    S;
  e[11] !== a || e[12] !== x || e[13] !== t || e[14] !== o
    ? ((S = async (e) => {
        if (!(e === a || x))
          try {
            await o.mutateAsync(e);
          } catch {
            t.get(Ae).danger(
              (0, Q.jsx)(d, {
                id: `settings.browserUse.approval.saveError`,
                defaultMessage: `Unable to save approval setting`,
                description: `Toast shown when saving browser use approval mode fails`,
              }),
            );
          }
      }),
      (e[11] = a),
      (e[12] = x),
      (e[13] = t),
      (e[14] = o),
      (e[15] = S))
    : (S = e[15]);
  let C = S,
    T;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsx)(d, {
        id: `settings.browserUse.approval.label`,
        defaultMessage: `Approval`,
        description: `Label for browser use approval mode setting`,
      })),
      (e[16] = T))
    : (T = e[16]);
  let E;
  e[17] === m
    ? (E = e[18])
    : ((E = (0, Q.jsx)(d, {
        id: `settings.browserUse.approval.description`,
        defaultMessage: `Choose if ChatGPT asks for approval before opening websites. <learnMoreLink>Learn more</learnMoreLink>`,
        description: `Description for browser use approval mode setting`,
        values: { learnMoreLink: m },
      })),
      (e[17] = m),
      (e[18] = E));
  let D = i || x,
    O = i || x,
    A = b?.label,
    j;
  e[19] === A
    ? (j = e[20])
    : ((j = (0, Q.jsx)(`span`, { className: `truncate`, children: A })), (e[19] = A), (e[20] = j));
  let M;
  e[21] !== O || e[22] !== j
    ? ((M = (0, Q.jsx)(te, { className: `w-[152px]`, disabled: O, children: j })),
      (e[21] = O),
      (e[22] = j),
      (e[23] = M))
    : (M = e[23]);
  let N;
  e[24] !== a || e[25] !== C || e[26] !== x
    ? ((N = (0, Q.jsx)(`div`, {
        className: `flex flex-col`,
        children: _.map((e) => {
          let t = e.id === a;
          return (0, Q.jsx)(
            w.Item,
            {
              allowWrap: !0,
              disabled: x,
              RightIcon: t ? Ge : void 0,
              onSelect: () => {
                C(e.id);
              },
              children: (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, Q.jsx)(`span`, { className: `truncate`, children: e.label }),
                  (0, Q.jsx)(`span`, {
                    className: `truncate text-sm text-secondary`,
                    children: e.description,
                  }),
                  e.elevatedRiskDisclaimer
                    ? (0, Q.jsxs)(`span`, {
                        className: `mt-0.5 flex min-w-0 items-start gap-1 text-sm leading-4 text-codex-description`,
                        children: [
                          (0, Q.jsx)(De, {
                            className: `shrink-0 text-warning`,
                            "aria-hidden": !1,
                            asset: dt,
                          }),
                          (0, Q.jsx)(`span`, {
                            className: `min-w-0 whitespace-normal`,
                            children: e.elevatedRiskDisclaimer,
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            },
            e.id,
          );
        }),
      })),
      (e[24] = a),
      (e[25] = C),
      (e[26] = x),
      (e[27] = N))
    : (N = e[27]);
  let P;
  e[28] !== M || e[29] !== N || e[30] !== D
    ? ((P = (0, Q.jsx)(k, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: D,
        triggerButton: M,
        children: N,
      })),
      (e[28] = M),
      (e[29] = N),
      (e[30] = D),
      (e[31] = P))
    : (P = e[31]);
  let I;
  return (
    e[32] !== P || e[33] !== E
      ? ((I = (0, Q.jsx)(qe, { label: T, description: E, control: P })),
        (e[32] = P),
        (e[33] = E),
        (e[34] = I))
      : (I = e[34]),
    I
  );
}
function Vr(e) {
  let t = (0, Gr.c)(39),
    { kind: n } = e,
    i = r(_e),
    { data: a, isLoading: o } = v(Lt),
    s = Tt(),
    c = n === `download` ? a?.downloadApprovalMode : a?.uploadApprovalMode,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(d, {
        id: `settings.browserUse.approval.alwaysAsk.label`,
        defaultMessage: `Always ask`,
        description: `Label for browser use always ask approval mode`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] === n
    ? (u = t[2])
    : ((u = {
        id: `alwaysAsk`,
        label: l,
        description:
          n === `download`
            ? (0, Q.jsx)(d, {
                id: `settings.browserUse.downloadApproval.alwaysAsk.description`,
                defaultMessage: `Ask before downloading files`,
                description: `Description for browser use always ask download approval mode`,
              })
            : (0, Q.jsx)(d, {
                id: `settings.browserUse.uploadApproval.alwaysAsk.description`,
                defaultMessage: `Ask before uploading files`,
                description: `Description for browser use always ask upload approval mode`,
              }),
      }),
      (t[1] = n),
      (t[2] = u));
  let f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(d, {
        id: `settings.browserUse.approval.neverAsk.label`,
        defaultMessage: `Always allow`,
        description: `Label for browser use never ask approval mode`,
      })),
      (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] === n
    ? (p = t[5])
    : ((p = {
        id: `neverAsk`,
        label: f,
        description:
          n === `download`
            ? (0, Q.jsx)(d, {
                id: `settings.browserUse.downloadApproval.neverAsk.description`,
                defaultMessage: `Download files without asking`,
                description: `Description for browser use never ask download approval mode`,
              })
            : (0, Q.jsx)(d, {
                id: `settings.browserUse.uploadApproval.neverAsk.description`,
                defaultMessage: `Upload files without asking`,
                description: `Description for browser use never ask upload approval mode`,
              }),
      }),
      (t[4] = n),
      (t[5] = p));
  let m;
  t[6] !== u || t[7] !== p ? ((m = [u, p]), (t[6] = u), (t[7] = p), (t[8] = m)) : (m = t[8]);
  let h = m,
    g;
  t[9] !== c || t[10] !== h
    ? ((g = h.find((e) => e.id === c) ?? h[0]), (t[9] = c), (t[10] = h), (t[11] = g))
    : (g = t[11]);
  let _ = g,
    y = s.isPending,
    b;
  t[12] !== c || t[13] !== y || t[14] !== n || t[15] !== i || t[16] !== s
    ? ((b = async (e) => {
        if (!(e === c || y))
          try {
            await s.mutateAsync({ approvalMode: e, kind: n });
          } catch {
            i.get(Ae).danger(
              n === `download`
                ? (0, Q.jsx)(d, {
                    id: `settings.browserUse.downloadApproval.saveError`,
                    defaultMessage: `Unable to save download setting`,
                    description: `Toast shown when saving browser use download approval mode fails`,
                  })
                : (0, Q.jsx)(d, {
                    id: `settings.browserUse.uploadApproval.saveError`,
                    defaultMessage: `Unable to save upload setting`,
                    description: `Toast shown when saving browser use upload approval mode fails`,
                  }),
            );
          }
      }),
      (t[12] = c),
      (t[13] = y),
      (t[14] = n),
      (t[15] = i),
      (t[16] = s),
      (t[17] = b))
    : (b = t[17]);
  let x = b,
    S,
    C;
  t[18] === n
    ? ((S = t[19]), (C = t[20]))
    : ((S =
        n === `download`
          ? (0, Q.jsx)(d, {
              id: `settings.browserUse.downloadApproval.label`,
              defaultMessage: `Downloads`,
              description: `Label for browser use download approval mode setting`,
            })
          : (0, Q.jsx)(d, {
              id: `settings.browserUse.uploadApproval.label`,
              defaultMessage: `Uploads`,
              description: `Label for browser use upload approval mode setting`,
            })),
      (C =
        n === `download`
          ? (0, Q.jsx)(d, {
              id: `settings.browserUse.downloadApproval.description`,
              defaultMessage: `Choose if ChatGPT asks before downloading files from websites`,
              description: `Description for browser use download approval mode setting`,
            })
          : (0, Q.jsx)(d, {
              id: `settings.browserUse.uploadApproval.description`,
              defaultMessage: `Choose if ChatGPT asks before uploading files to websites`,
              description: `Description for browser use upload approval mode setting`,
            })),
      (t[18] = n),
      (t[19] = S),
      (t[20] = C));
  let T = o || y,
    E = o || y,
    D = _?.label,
    O;
  t[21] === D
    ? (O = t[22])
    : ((O = (0, Q.jsx)(`span`, { className: `truncate`, children: D })), (t[21] = D), (t[22] = O));
  let A;
  t[23] !== E || t[24] !== O
    ? ((A = (0, Q.jsx)(te, { className: `w-[152px]`, disabled: E, children: O })),
      (t[23] = E),
      (t[24] = O),
      (t[25] = A))
    : (A = t[25]);
  let j;
  t[26] !== c || t[27] !== x || t[28] !== y || t[29] !== h
    ? ((j = (0, Q.jsx)(`div`, {
        className: `flex flex-col`,
        children: h.map((e) => {
          let t = e.id === c;
          return (0, Q.jsx)(
            w.Item,
            {
              allowWrap: !0,
              disabled: y,
              RightIcon: t ? Ge : void 0,
              onSelect: () => {
                x(e.id);
              },
              children: (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, Q.jsx)(`span`, { className: `truncate`, children: e.label }),
                  (0, Q.jsx)(`span`, {
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
      (t[26] = c),
      (t[27] = x),
      (t[28] = y),
      (t[29] = h),
      (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] !== T || t[32] !== A || t[33] !== j
    ? ((M = (0, Q.jsx)(k, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: T,
        triggerButton: A,
        children: j,
      })),
      (t[31] = T),
      (t[32] = A),
      (t[33] = j),
      (t[34] = M))
    : (M = t[34]);
  let N;
  return (
    t[35] !== M || t[36] !== S || t[37] !== C
      ? ((N = (0, Q.jsx)(qe, { label: S, description: C, control: M })),
        (t[35] = M),
        (t[36] = S),
        (t[37] = C),
        (t[38] = N))
      : (N = t[38]),
    N
  );
}
function Hr() {
  let e = (0, Gr.c)(3),
    t = It(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Q.jsx)(Xt, {})), (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = (0, Q.jsx)(Wr, { backend: `chrome`, description: n, writeApprovalModeMutation: t })),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function Ur() {
  let e = (0, Gr.c)(3),
    t = Rt(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Q.jsx)(Zt, {})), (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = (0, Q.jsx)(Wr, { backend: `iab`, description: n, writeApprovalModeMutation: t })),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function Wr(e) {
  let t = (0, Gr.c)(27),
    { backend: n, description: i, writeApprovalModeMutation: a } = e,
    o = r(_e),
    { data: s, isLoading: c } = v(Lt),
    l = n === `iab` ? s?.iabHistoryApprovalMode : s?.chromeHistoryApprovalMode,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = {
        id: `alwaysAsk`,
        label: (0, Q.jsx)(d, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, Q.jsx)(d, {
          id: `settings.browserUse.historyApproval.alwaysAsk.description`,
          defaultMessage: `Ask before accessing history`,
          description: `Description for browser use always ask history approval mode`,
        }),
      }),
      (t[0] = u))
    : (u = t[0]);
  let f;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = {
        id: `neverAsk`,
        label: (0, Q.jsx)(d, {
          id: `settings.browserUse.approval.neverAsk.label`,
          defaultMessage: `Always allow`,
          description: `Label for browser use never ask approval mode`,
        }),
        description: (0, Q.jsx)(d, {
          id: `settings.browserUse.historyApproval.neverAsk.description`,
          defaultMessage: `Access history without asking`,
          description: `Description for browser use never ask history approval mode`,
        }),
      }),
      (t[1] = f))
    : (f = t[1]);
  let p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = [
        u,
        f,
        {
          id: `disabled`,
          label: (0, Q.jsx)(d, {
            id: `settings.browserUse.historyApproval.disabled.label`,
            defaultMessage: `Disable`,
            description: `Label for disabled browser history approval mode`,
          }),
          description: (0, Q.jsx)(d, {
            id: `settings.browserUse.historyApproval.disabled.description`,
            defaultMessage: `Do not allow access to history`,
            description: `Description for disabled browser history approval mode`,
          }),
        },
      ]),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    h;
  t[3] === l ? (h = t[4]) : ((h = m.find((e) => e.id === l) ?? m[0]), (t[3] = l), (t[4] = h));
  let g = h,
    _ = a.isPending,
    y;
  t[5] !== l || t[6] !== _ || t[7] !== o || t[8] !== a
    ? ((y = async (e) => {
        if (!(e === l || _))
          try {
            await a.mutateAsync(e);
          } catch {
            o.get(Ae).danger(
              (0, Q.jsx)(d, {
                id: `settings.browserUse.historyApproval.saveError`,
                defaultMessage: `Unable to save history setting`,
                description: `Toast shown when saving browser use history approval mode fails`,
              }),
            );
          }
      }),
      (t[5] = l),
      (t[6] = _),
      (t[7] = o),
      (t[8] = a),
      (t[9] = y))
    : (y = t[9]);
  let b = y,
    x;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(d, {
        id: `settings.browserUse.historyApproval.label`,
        defaultMessage: `History`,
        description: `Label for browser use history approval mode setting`,
      })),
      (t[10] = x))
    : (x = t[10]);
  let S = c || _,
    C = c || _,
    T = g?.label,
    E;
  t[11] === T
    ? (E = t[12])
    : ((E = (0, Q.jsx)(`span`, { className: `truncate`, children: T })), (t[11] = T), (t[12] = E));
  let D;
  t[13] !== E || t[14] !== C
    ? ((D = (0, Q.jsx)(te, { className: `w-[152px]`, disabled: C, children: E })),
      (t[13] = E),
      (t[14] = C),
      (t[15] = D))
    : (D = t[15]);
  let O;
  t[16] !== b || t[17] !== l || t[18] !== _
    ? ((O = (0, Q.jsx)(`div`, {
        className: `flex flex-col`,
        children: m.map((e) => {
          let t = e.id === l;
          return (0, Q.jsx)(
            w.Item,
            {
              allowWrap: !0,
              disabled: _,
              RightIcon: t ? Ge : void 0,
              onSelect: () => {
                b(e.id);
              },
              children: (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, Q.jsx)(`span`, { className: `truncate`, children: e.label }),
                  (0, Q.jsx)(`span`, {
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
      (t[16] = b),
      (t[17] = l),
      (t[18] = _),
      (t[19] = O))
    : (O = t[19]);
  let A;
  t[20] !== D || t[21] !== O || t[22] !== S
    ? ((A = (0, Q.jsx)(k, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: S,
        triggerButton: D,
        children: O,
      })),
      (t[20] = D),
      (t[21] = O),
      (t[22] = S),
      (t[23] = A))
    : (A = t[23]);
  let j;
  return (
    t[24] !== i || t[25] !== A
      ? ((j = (0, Q.jsx)(qe, { label: x, description: i, control: A })),
        (t[24] = i),
        (t[25] = A),
        (t[26] = j))
      : (j = t[26]),
    j
  );
}
var Gr,
  Q,
  Kr = e(() => {
    ((Gr = Ie()),
      ft(),
      I(),
      K(),
      fe(),
      N(),
      Ee(),
      Pe(),
      Fe(),
      T(),
      Be(),
      ct(),
      At(),
      Yt(),
      en(),
      gr(),
      Rr(),
      ur(),
      U(),
      V(),
      Ut(),
      ue(),
      J(),
      x(),
      ye(),
      (Q = Oe()));
  });
function qr(e) {
  let t = (0, $r.c)(35),
    {
      emptyStateTitle: n,
      installButtonLabel: r,
      items: i,
      pluginsQuery: a,
      selectedHostId: o,
      unavailableItems: s,
    } = e,
    l;
  t[0] === s ? (l = t[1]) : ((l = s === void 0 ? [] : s), (t[0] = s), (t[1] = l));
  let u = l,
    f = E(),
    { installPlugin: p, status: m } = pt(),
    h;
  t[2] === o ? (h = t[3]) : ((h = { hostId: o }), (t[2] = o), (t[3] = h));
  let { pendingPluginId: g, setPluginEnabled: _ } = je(h),
    v;
  t[4] === o ? (v = t[5]) : ((v = { hostId: o }), (t[4] = o), (t[5] = v));
  let { pendingUninstallPluginId: y, uninstallPlugin: b } = L(v),
    x = m?.hostId === o ? m.pluginId : null,
    S = g ?? x ?? y,
    C = i.length + u.length;
  if (a.isLoading && C === 0) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(se, {
            children: (0, $.jsx)(Wt, {
              children: (0, $.jsx)(d, {
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
      t[7] === a.errorMessage
        ? (e = t[8])
        : ((e = (0, $.jsx)(se, {
            children: (0, $.jsx)(B, { layout: `settings-row`, children: a.errorMessage }),
          })),
          (t[7] = a.errorMessage),
          (t[8] = e)),
      e
    );
  }
  if (C === 0) {
    let e;
    return (
      t[9] === n
        ? (e = t[10])
        : ((e = (0, $.jsx)(se, {
            children: (0, $.jsx)(B, { layout: `settings-row`, children: n }),
          })),
          (t[9] = n),
          (t[10] = e)),
      e
    );
  }
  let w;
  if (
    t[11] !== r ||
    t[12] !== p ||
    t[13] !== i ||
    t[14] !== f ||
    t[15] !== S ||
    t[16] !== a.reload ||
    t[17] !== o ||
    t[18] !== _ ||
    t[19] !== b
  ) {
    let e;
    (t[21] !== r ||
    t[22] !== p ||
    t[23] !== f ||
    t[24] !== S ||
    t[25] !== a.reload ||
    t[26] !== o ||
    t[27] !== _ ||
    t[28] !== b
      ? ((e = (e) =>
          e.kind === `disclosure`
            ? (0, $.jsx)(
                `button`,
                {
                  "aria-expanded": e.expanded,
                  className: `group w-full cursor-interaction text-start focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
                  onClick: e.onToggleExpanded,
                  type: `button`,
                  children: (0, $.jsx)(qe, {
                    className: `min-h-[60px]`,
                    control: (0, $.jsx)(et, {
                      className: W(`icon-md text-secondary`, e.expanded && `rotate-180`),
                    }),
                    description: e.description,
                    icon: (0, $.jsx)(`span`, {
                      className: `flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent`,
                      children: e.icon ?? (0, $.jsx)(G, { className: `icon-md text-secondary` }),
                    }),
                    label: e.title,
                  }),
                },
                e.id,
              )
            : e.kind === `unavailable`
              ? (0, $.jsx)(Yr, { item: e }, e.id)
              : e.kind === `app`
                ? (0, $.jsx)(
                    qe,
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
                                  : (0, $.jsx)(M, {
                                      tooltipContent: e.toggleTooltip,
                                      children: (0, $.jsx)(H, {
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
                        children: e.icon ?? (0, $.jsx)(G, { className: `icon-md text-secondary` }),
                      }),
                      label: e.title,
                    },
                    e.id,
                  )
                : (0, $.jsx)(
                    Qr,
                    {
                      installButtonLabel: r,
                      isPending: S === e.plugin.plugin.id,
                      item: e,
                      onInstallPlugin: (t) => {
                        p(t, {
                          browserFamily: e.browserFamily,
                          hostId: o,
                          marketplaceAnalytics: mt.settings,
                          onSuccess: a.reload,
                        });
                      },
                      onOpenPluginDetails: (e) => {
                        f(q(e, { hostId: o }));
                      },
                      onToggleInstalledPluginEnabled: (t, n) => {
                        _({
                          pluginId: t.plugin.id,
                          pluginDisplayName: e.displayName ?? c(t),
                          enabled: n,
                        });
                      },
                      onUninstallPlugin: (e) => {
                        b({
                          marketplaceName: e.marketplaceName,
                          pluginDisplayName: c(e),
                          pluginId: e.plugin.id,
                          pluginName: e.plugin.name,
                          requestPluginId: Xe(e),
                        });
                      },
                    },
                    e.id ?? e.plugin.plugin.id,
                  )),
        (t[21] = r),
        (t[22] = p),
        (t[23] = f),
        (t[24] = S),
        (t[25] = a.reload),
        (t[26] = o),
        (t[27] = _),
        (t[28] = b),
        (t[29] = e))
      : (e = t[29]),
      (w = i.map(e)),
      (t[11] = r),
      (t[12] = p),
      (t[13] = i),
      (t[14] = f),
      (t[15] = S),
      (t[16] = a.reload),
      (t[17] = o),
      (t[18] = _),
      (t[19] = b),
      (t[20] = w));
  } else w = t[20];
  let T;
  t[30] === u ? (T = t[31]) : ((T = u.map(Jr)), (t[30] = u), (t[31] = T));
  let D;
  return (
    t[32] !== w || t[33] !== T
      ? ((D = (0, $.jsx)($.Fragment, { children: (0, $.jsxs)(se, { children: [w, T] }) })),
        (t[32] = w),
        (t[33] = T),
        (t[34] = D))
      : (D = t[34]),
    D
  );
}
function Jr(e) {
  return (0, $.jsx)(Yr, { item: e }, e.id);
}
function Yr(e) {
  let t = (0, $r.c)(8),
    { item: n } = e,
    r;
  t[0] === n.icon
    ? (r = t[1])
    : ((r = n.icon ?? (0, $.jsx)(G, { className: `icon-md text-secondary` })),
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
      ? ((a = (0, $.jsx)(qe, {
          className: `min-h-[60px] opacity-60`,
          label: n.title,
          description: n.description,
          icon: i,
          control: Xr,
        })),
        (t[4] = n.description),
        (t[5] = n.title),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Xr(e) {
  return (0, $.jsx)(H, { ...e, checked: !1, disabled: !0, onChange: Zr });
}
function Zr() {}
function Qr(e) {
  let t = (0, $r.c)(41),
    {
      installButtonLabel: n,
      isPending: r,
      item: i,
      onInstallPlugin: a,
      onOpenPluginDetails: o,
      onToggleInstalledPluginEnabled: s,
      onUninstallPlugin: l,
    } = e,
    u = ee(),
    f,
    p,
    m,
    h,
    g;
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
    let e = i.displayName ?? c(i.plugin),
      _ = i.plugin.plugin.installed;
    h = `group flex min-h-[60px] items-center gap-3 px-4 py-3 text-sm hover:bg-text/5 max-sm:flex-wrap`;
    let v;
    t[13] !== i.plugin || t[14] !== o
      ? ((v = () => {
          o(i.plugin);
        }),
        (t[13] = i.plugin),
        (t[14] = o),
        (t[15] = v))
      : (v = t[15]);
    let y = i.showIconBorder === !1 ? `border-0` : `border border-default`,
      b;
    t[16] === y
      ? (b = t[17])
      : ((b = W(
          `flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-transparent`,
          y,
        )),
        (t[16] = y),
        (t[17] = b));
    let x =
        i.icon ??
        (0, $.jsx)(Te, {
          alt: e,
          className: `h-full w-full object-contain`,
          logoDarkUrl: i.plugin.logoDarkPath,
          logoUrl: i.plugin.logoPath,
          fallback: (0, $.jsx)(G, { className: `icon-md text-secondary` }),
        }),
      S;
    t[18] !== b || t[19] !== x
      ? ((S = (0, $.jsx)(`span`, { className: b, children: x })),
        (t[18] = b),
        (t[19] = x),
        (t[20] = S))
      : (S = t[20]);
    let C;
    t[21] === i.title
      ? (C = t[22])
      : ((C = (0, $.jsx)(`div`, {
          className: `min-w-0 truncate text-sm font-medium text-default`,
          children: i.title,
        })),
        (t[21] = i.title),
        (t[22] = C));
    let T;
    t[23] !== i.description || t[24] !== i.descriptionIndicator
      ? ((T =
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
                            className: W(
                              `h-2 w-2 shrink-0 rounded-full`,
                              i.descriptionIndicator === `success`
                                ? `bg-[var(--color-icon-success)]`
                                : `bg-[var(--color-icon-error)]`,
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
        (t[25] = T))
      : (T = t[25]);
    let E;
    (t[26] !== C || t[27] !== T
      ? ((E = (0, $.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-0.5`,
          children: [C, T],
        })),
        (t[26] = C),
        (t[27] = T),
        (t[28] = E))
      : (E = t[28]),
      t[29] !== S || t[30] !== E || t[31] !== v
        ? ((g = (0, $.jsxs)(`button`, {
            className: `flex min-w-0 flex-1 cursor-interaction appearance-none items-center gap-3 border-0 bg-transparent p-0 text-start text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
            type: `button`,
            onClick: v,
            children: [S, E],
          })),
          (t[29] = S),
          (t[30] = E),
          (t[31] = v),
          (t[32] = g))
        : (g = t[32]),
      (f = `flex shrink-0 items-center gap-2`),
      (p = i.action),
      (m = _
        ? (0, $.jsxs)($.Fragment, {
            children: [
              i.showManageActions === !0
                ? (0, $.jsx)(`div`, {
                    className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
                    children: (0, $.jsxs)(k, {
                      align: `end`,
                      contentWidth: `sm`,
                      triggerButton: (0, $.jsx)(ot, {
                        label: u.formatMessage({
                          id: `settings.pluginControls.moreActions`,
                          defaultMessage: `More actions`,
                          description: `Aria label for the more actions menu in settings plugin controls`,
                        }),
                      }),
                      children: [
                        i.onTryInChat == null
                          ? null
                          : (0, $.jsx)(w.Item, {
                              LeftIcon: $e,
                              leftIconClassName: `icon-xs`,
                              onSelect: () => {
                                i.onTryInChat?.(i.plugin);
                              },
                              children: (0, $.jsx)(d, {
                                id: `settings.pluginControls.tryItNow`,
                                defaultMessage: `Try now`,
                                description: `Menu item label for trying a plugin in task from settings`,
                              }),
                            }),
                        (0, $.jsx)(w.Item, {
                          LeftIcon: yt,
                          className: `!text-danger`,
                          leftIconClassName: `icon-xs text-danger`,
                          disabled: r,
                          onSelect: () => {
                            l(i.plugin);
                          },
                          children: (0, $.jsx)(d, {
                            id: `settings.pluginControls.delete`,
                            defaultMessage: `Delete`,
                            description: `Menu item label for deleting a plugin from settings`,
                          }),
                        }),
                      ],
                    }),
                  })
                : null,
              i.showEnableToggle === !1
                ? null
                : (0, $.jsx)(M, {
                    tooltipContent: i.plugin.plugin.enabled
                      ? (0, $.jsx)(d, {
                          id: `settings.pluginControls.disableToggleTooltip`,
                          defaultMessage: `Disable {pluginName}`,
                          description: `Tooltip label for disabling a plugin from settings`,
                          values: { pluginName: e },
                        })
                      : (0, $.jsx)(d, {
                          id: `settings.pluginControls.enableToggleTooltip`,
                          defaultMessage: `Enable {pluginName}`,
                          description: `Tooltip label for enabling a plugin from settings`,
                          values: { pluginName: e },
                        }),
                    children: (0, $.jsx)(H, {
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
        : (0, $.jsx)(M, {
            tooltipContent: (0, $.jsx)(d, {
              id: `settings.pluginControls.installTooltip`,
              defaultMessage: `Install {pluginName}`,
              description: `Tooltip label for installing a plugin from settings`,
              values: { pluginName: e },
            }),
            children: (0, $.jsx)(`div`, {
              children: (0, $.jsx)(Ne, {
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
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h),
      (t[12] = g));
  } else ((f = t[8]), (p = t[9]), (m = t[10]), (h = t[11]), (g = t[12]));
  let _;
  t[33] !== f || t[34] !== p || t[35] !== m
    ? ((_ = (0, $.jsxs)(`div`, { className: f, children: [p, m] })),
      (t[33] = f),
      (t[34] = p),
      (t[35] = m),
      (t[36] = _))
    : (_ = t[36]);
  let v;
  return (
    t[37] !== h || t[38] !== g || t[39] !== _
      ? ((v = (0, $.jsxs)(`div`, { className: h, children: [g, _] })),
        (t[37] = h),
        (t[38] = g),
        (t[39] = _),
        (t[40] = v))
      : (v = t[40]),
    v
  );
}
var $r,
  $,
  ei = e(() => {
    (($r = Ie()),
      it(),
      K(),
      S(),
      Ue(),
      i(),
      fe(),
      Pe(),
      ut(),
      n(),
      D(),
      u(),
      Ce(),
      rt(),
      at(),
      oe(),
      ht(),
      vt(),
      he(),
      g(),
      be(),
      Ut(),
      ue(),
      x(),
      ($ = Oe()));
  });
function ti(e, t, n) {
  let r = e.filter((e) => e.plugin.name === t || e.plugin.id.split(`@`)[0] === t),
    i = ae(p());
  return (
    (i == null ? void 0 : r.find((e) => e.marketplaceName === i)) ??
    r.find((e) => j(e.marketplaceName)) ??
    r.find((e) => e.marketplaceName === `openai-curated`) ??
    r.find((e) => Ve(n, e.marketplacePath)) ??
    null
  );
}
var ni = e(() => {
  (s(), ve(), z());
});
export { zr as a, ei as i, ti as n, Kr as o, qr as r, ni as t };
//# sourceMappingURL=settings-plugin-selection-995ee29263c7.js.map
