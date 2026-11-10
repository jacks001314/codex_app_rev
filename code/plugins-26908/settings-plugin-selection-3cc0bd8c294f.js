import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { t as n } from "./react-d6ffadc57208.js";
import { t as r } from "./compiler-runtime-292acb85cdd3.js";
import {
  A6t as i,
  AF as a,
  BNt as o,
  C6t as s,
  Cft as c,
  Co as l,
  DGt as u,
  DN as d,
  Dot as f,
  EGt as p,
  Eit as m,
  FGt as h,
  FXt as g,
  HNt as _,
  IJ as v,
  IYt as y,
  Jot as b,
  Jp as x,
  LJ as S,
  LYt as C,
  NJ as w,
  Nqt as T,
  O6t as E,
  OGt as D,
  ON as O,
  Oit as k,
  Oot as A,
  Pqt as j,
  QO as M,
  Sft as N,
  Son as P,
  Spt as F,
  T6t as I,
  Tft as L,
  Yp as R,
  ZGt as z,
  _E as ee,
  _Gt as B,
  _ft as te,
  _on as V,
  aX as ne,
  bE as H,
  bXt as re,
  dX as U,
  e6t as ie,
  ek as ae,
  em as W,
  fX as G,
  gft as oe,
  gon as K,
  hXt as se,
  hft as ce,
  im as q,
  jJ as le,
  kF as ue,
  kGt as de,
  kit as fe,
  mon as pe,
  nm as me,
  pXt as he,
  pk as ge,
  qGt as _e,
  qot as ve,
  rm as ye,
  sKt as be,
  sX as xe,
  t6t as Se,
  uX as Ce,
  vft as we,
  wGt as Te,
  wft as Ee,
  wo as De,
  xft as Oe,
  xk as ke,
  xpt as Ae,
} from "./app-initial-bcc2ff475eb6.js";
import { t as je } from "./jsx-runtime-a96621a2647a.js";
import { n as Me, t as Ne } from "./clsx-40813b86294f.js";
import {
  DD as Pe,
  ED as Fe,
  TD as Ie,
  _E as Le,
  bD as Re,
  gE as ze,
  hE as Be,
  vE as Ve,
} from "./app-primary-b36a719dba75.js";
import { A as He, D as Ue, M as We, t as Ge, x as Ke } from "./zod-d9fcb1c39dba.js";
import { sl as qe, t as Je, ul as Ye } from "./src-996ff3571e1f.js";
import {
  Ic as Xe,
  Lc as Ze,
  Sr as Qe,
  _r as $e,
  dg as et,
  gs as tt,
  hs as nt,
  l as rt,
  ng as it,
  rg as at,
  u as ot,
  ug as st,
  vr as ct,
  xr as lt,
} from "./shared-icons-693ab6da8dfa.js";
import { Gn as ut, ga as dt, lt as ft } from "./icons-1209e905d332.js";
import { r as pt, t as mt } from "./tooltip-779782db7c30.js";
import { n as ht, t as gt } from "./button-6325b3939f12.js";
import {
  D as _t,
  E as vt,
  S as yt,
  T as bt,
  b as xt,
  c as St,
  d as Ct,
  f as wt,
  g as Tt,
  h as Et,
  i as Dt,
  l as Ot,
  m as kt,
  n as At,
  o as jt,
  p as Mt,
  s as Nt,
  t as Pt,
  u as Ft,
  v as It,
  w as Lt,
  x as Rt,
  y as zt,
} from "./browser-use-origin-state-queries-a50e26f4aa7b.js";
import { n as Bt, t as Vt } from "./settings-loading-row-af730d1e9728.js";
function Ht(e) {
  let t = (0, Wt.c)(4),
    { backend: n } = e,
    r = n === void 0 ? `iab` : n,
    { selectedHostId: i } = ae();
  if (C(i).kind !== `local`) return null;
  let a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, J.jsx)(ye.Header, {
        title: (0, J.jsx)(V, {
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
      ? ((o = (0, J.jsx)(J.Fragment, {
          children: (0, J.jsxs)(ye, {
            children: [
              a,
              (0, J.jsx)(ye.Content, {
                children: (0, J.jsx)(x, { children: (0, J.jsx)(Ut, { backend: r, hostId: i }) }),
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
function Ut(e) {
  let t = (0, Wt.c)(27),
    { backend: n, hostId: r } = e,
    a = P(),
    { data: o, isLoading: s } = i(Pt),
    c;
  t[0] === r ? (c = t[1]) : ((c = { hostId: r }), (t[0] = r), (t[1] = c));
  let { data: l, isPending: u } = E(_e, c),
    d;
  t[2] === r ? (d = t[3]) : ((d = { hostId: r }), (t[2] = r), (t[3] = d));
  let f = Ot(d),
    p = E(At, r),
    m = p !== `unsupported`,
    g;
  t[4] !== n || t[5] !== l || t[6] !== m
    ? ((g =
        h(l?.requirements?.featureRequirements?.browser_use_full_cdp_access) ||
        (m && l != null && !bt(l.requirements, n === `iab` ? `iab` : `extension`))),
      (t[4] = n),
      (t[5] = l),
      (t[6] = m),
      (t[7] = g))
    : (g = t[7]);
  let _ = g,
    v = s || u || p === `loading` || p === `error`,
    y = o?.fullCdpAccessEnabled === !0 && !v && !_,
    b;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, J.jsxs)(`span`, {
            className: `inline-flex items-center gap-1 font-medium text-warning`,
            children: [
              (0, J.jsx)(Ae, { className: `shrink-0`, "aria-hidden": !1, asset: Qe }),
              (0, J.jsx)(V, {
                id: `settings.browserUse.fullCdp.elevatedRisk.label`,
                defaultMessage: `Elevated risk`,
                description: `Label for the elevated risk warning shown for the full CDP developer mode toggle`,
              }),
            ],
          }),
          (0, J.jsx)(`span`, {
            children: (0, J.jsx)(V, {
              id: `settings.browserUse.fullCdp.label`,
              defaultMessage: `Enable full CDP access`,
              description: `Label for the full CDP developer mode toggle`,
            }),
          }),
        ],
      })),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, J.jsx)(`div`, {
        children: (0, J.jsx)(V, {
          id: `settings.browserUse.fullCdp.description`,
          defaultMessage: `Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.`,
          description: `Description for the full CDP developer mode toggle`,
        }),
      })),
      (t[9] = x))
    : (x = t[9]);
  let S;
  t[10] !== _ || t[11] !== u
    ? ((S =
        !u && _
          ? (0, J.jsx)(`div`, {
              children: (0, J.jsx)(V, {
                id: `settings.browserUse.fullCdp.blockedByPolicy`,
                defaultMessage: `Your organization has disabled this setting.`,
                description: `Message shown below the Full CDP access toggle in Browser Use Developer mode when enterprise managed policy explicitly disables the setting. The user cannot enable the toggle.`,
              }),
            })
          : null),
      (t[10] = _),
      (t[11] = u),
      (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] === S
    ? (C = t[14])
    : ((C = (0, J.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [x, S] })),
      (t[13] = S),
      (t[14] = C));
  let w;
  t[15] === a
    ? (w = t[16])
    : ((w = a.formatMessage({
        id: `settings.browserUse.fullCdp.ariaLabel`,
        defaultMessage: `Toggle full CDP access`,
        description: `Aria label for toggling full CDP access`,
      })),
      (t[15] = a),
      (t[16] = w));
  let T = v || _ || f.isPending,
    D;
  t[17] === f
    ? (D = t[18])
    : ((D = (e) => {
        f.mutate(e);
      }),
      (t[17] = f),
      (t[18] = D));
  let O;
  t[19] !== y || t[20] !== D || t[21] !== w || t[22] !== T
    ? ((O = (0, J.jsx)(U, { ariaLabel: w, checked: y, disabled: T, onChange: D })),
      (t[19] = y),
      (t[20] = D),
      (t[21] = w),
      (t[22] = T),
      (t[23] = O))
    : (O = t[23]);
  let k;
  return (
    t[24] !== O || t[25] !== C
      ? ((k = (0, J.jsx)(W, { label: b, description: C, control: O })),
        (t[24] = O),
        (t[25] = C),
        (t[26] = k))
      : (k = t[26]),
    k
  );
}
var Wt,
  J,
  Gt = e(() => {
    ((Wt = r()),
      lt(),
      B(),
      s(),
      kt(),
      K(),
      F(),
      G(),
      z(),
      Dt(),
      q(),
      M(),
      me(),
      R(),
      y(),
      (J = je()));
  });
function Kt() {
  let e = (0, Jt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Yt.jsx)(V, {
          id: `settings.browserUse.historyApproval.description`,
          defaultMessage: `Choose if ChatGPT asks for approval before accessing your browser's history`,
          description: `Description for browser use history approval mode setting`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function qt() {
  let e = (0, Jt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Yt.jsx)(V, {
          id: `settings.browserUse.iabHistoryApproval.description`,
          defaultMessage: `Choose whether ChatGPT can access your built-in browser history`,
          description: `Description for in-app browser history approval mode setting`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Jt,
  Yt,
  Xt = e(() => {
    ((Jt = r()), K(), (Yt = je()));
  });
function Zt(e) {
  let t = (0, $t.c)(8),
    { children: n, managed: r } = e,
    i = P();
  if (!r) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, en.jsx)(en.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, en.jsx)(Qt, {})), (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i ? (o = t[4]) : ((o = i.formatMessage(tn)), (t[3] = i), (t[4] = o));
  let s;
  return (
    t[5] !== n || t[6] !== o
      ? ((s = (0, en.jsx)(mt, {
          tooltipContent: a,
          children: (0, en.jsx)(`span`, {
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
function Qt(e) {
  let t = (0, $t.c)(1),
    n;
  return (
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, en.jsx)(V, { ...tn })), (t[0] = n))
      : (n = t[0]),
    n
  );
}
var $t,
  en,
  tn,
  nn = e(() => {
    (($t = r()),
      K(),
      pt(),
      (en = je()),
      (tn = pe({
        id: `settings.browserUse.managed.explanation`,
        defaultMessage: `Managed by your enterprise admin`,
        description: `Tooltip explaining that a Browser Use setting is controlled by an enterprise administrator`,
      })));
  });
function rn(e) {
  let t = (0, on.c)(31),
    {
      browserClientAllowed: n,
      enterprisePolicy: r,
      onChange: i,
      originsConfig: a,
      userConfig: o,
      visibleResources: s,
    } = e,
    c = I(ie),
    l = jt(),
    u = St(),
    d;
  t[0] !== a.approvalMode || t[1] !== a.downloadApprovalMode || t[2] !== a.uploadApprovalMode
    ? ((d = {
        origin: a.approvalMode,
        download: a.downloadApprovalMode,
        upload: a.uploadApprovalMode,
      }),
      (t[0] = a.approvalMode),
      (t[1] = a.downloadApprovalMode),
      (t[2] = a.uploadApprovalMode),
      (t[3] = d))
    : (d = t[3]);
  let f = d,
    p;
  t[4] === r ? (p = t[5]) : ((p = _t(r) && vt(r, `persistentApproval`)), (t[4] = r), (t[5] = p));
  let m = p,
    h;
  t[6] !== f || t[7] !== i || t[8] !== c || t[9] !== l || t[10] !== u
    ? ((h = (e, t, n) => {
        if (t === f[e]) {
          n || i({ capability: e, enabled: !0 });
          return;
        }
        (async () => {
          try {
            (e === `origin`
              ? await l.mutateAsync(t)
              : await u.mutateAsync({ approvalMode: t, kind: e }),
              n || i({ capability: e, enabled: !0 }));
          } catch {
            c.get(se).danger(
              (0, Y.jsx)(V, {
                id: `settings.browserUse.approval.saveError`,
                defaultMessage: `Unable to save approval setting`,
                description: `Toast shown when saving a browser use approval mode fails`,
              }),
            );
          }
        })();
      }),
      (t[6] = f),
      (t[7] = i),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u),
      (t[11] = h))
    : (h = t[11]);
  let g = h,
    _;
  if (
    t[12] !== f ||
    t[13] !== n ||
    t[14] !== r ||
    t[15] !== g ||
    t[16] !== i ||
    t[17] !== m ||
    t[18] !== o?.default_origin_policy ||
    t[19] !== s
  ) {
    let e;
    (t[21] !== f ||
    t[22] !== n ||
    t[23] !== r ||
    t[24] !== g ||
    t[25] !== i ||
    t[26] !== m ||
    t[27] !== o?.default_origin_policy
      ? ((e = (e) => {
          let t = n && vt(r, e),
            a = Tt(o?.default_origin_policy, e) !== `deny`,
            s = t && a,
            c = e !== `fullCdp`,
            l = (e === `fullCdp` ? void 0 : f[e]) === `neverAsk` && m ? `neverAsk` : `alwaysAsk`;
          return (0, Y.jsx)(
            `td`,
            {
              "aria-labelledby": `browser-use-site-permissions-default browser-use-site-permissions-column-${e}`,
              className: `px-2 py-3`,
              children: (0, Y.jsx)(Zt, {
                managed: !t,
                children: (0, Y.jsxs)(ne, {
                  align: `end`,
                  disabled: !t,
                  triggerButton: (0, Y.jsxs)(ee, {
                    "aria-labelledby": `browser-use-site-permissions-default browser-use-site-permissions-column-${e}`,
                    className: `w-full`,
                    disabled: !t,
                    children: [
                      t ? null : (0, Y.jsx)(ut, { className: `text-secondary` }),
                      (0, Y.jsx)(`span`, {
                        className: `truncate`,
                        children: (0, Y.jsx)(an, { allowed: s, approvalMode: c ? l : void 0 }),
                      }),
                    ],
                  }),
                  children: [
                    (0, Y.jsx)(xe.Item, {
                      RightIcon: s && (!c || l === `alwaysAsk`) ? ft : void 0,
                      onSelect: () => {
                        if (e === `fullCdp`) {
                          i({ capability: e, enabled: !0 });
                          return;
                        }
                        g(e, `alwaysAsk`, a);
                      },
                      children: (0, Y.jsx)(an, {
                        allowed: !0,
                        approvalMode: c ? `alwaysAsk` : void 0,
                      }),
                    }),
                    c
                      ? (0, Y.jsx)(xe.Item, {
                          RightIcon: s && l === `neverAsk` ? ft : void 0,
                          disabled: !m,
                          tooltipText: m ? void 0 : (0, Y.jsx)(Qt, {}),
                          onSelect: () => {
                            m && g(e, `neverAsk`, a);
                          },
                          children: (0, Y.jsx)(an, { allowed: !0, approvalMode: `neverAsk` }),
                        })
                      : null,
                    (0, Y.jsx)(xe.Item, {
                      RightIcon: s ? void 0 : ft,
                      onSelect: () => {
                        i({ capability: e, enabled: !1 });
                      },
                      children: (0, Y.jsx)(an, { allowed: !1 }),
                    }),
                  ],
                }),
              }),
            },
            e,
          );
        }),
        (t[21] = f),
        (t[22] = n),
        (t[23] = r),
        (t[24] = g),
        (t[25] = i),
        (t[26] = m),
        (t[27] = o?.default_origin_policy),
        (t[28] = e))
      : (e = t[28]),
      (_ = s.map(e)),
      (t[12] = f),
      (t[13] = n),
      (t[14] = r),
      (t[15] = g),
      (t[16] = i),
      (t[17] = m),
      (t[18] = o?.default_origin_policy),
      (t[19] = s),
      (t[20] = _));
  } else _ = t[20];
  let v;
  return (
    t[29] === _
      ? (v = t[30])
      : ((v = (0, Y.jsx)(Y.Fragment, { children: _ })), (t[29] = _), (t[30] = v)),
    v
  );
}
function an(e) {
  let t = (0, on.c)(4),
    { allowed: n, approvalMode: r } = e;
  if (!n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(V, {
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
        ? ((e = (0, Y.jsx)(V, {
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
        ? ((e = (0, Y.jsx)(V, {
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
      ? ((i = (0, Y.jsx)(V, {
          id: `settings.browserUse.sitePermissions.defaultValue.allowed`,
          defaultMessage: `Allow`,
          description: `Allowed default value for a browser site capability`,
        })),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
var on,
  Y,
  sn = e(() => {
    ((on = r()), s(), kt(), K(), Ce(), dt(), he(), Se(), Dt(), H(), nn(), (Y = je()));
  });
function cn(e, t, n) {
  let r = u(n),
    i = r == null ? null : ln(Object.entries(e?.origins ?? {}), e?.defaultOriginPolicy, r),
    a =
      r == null
        ? null
        : ln(
            Object.entries(t?.origins ?? {}).map(([e, t]) => [e, un(t)]),
            un(t?.default_origin_policy),
            r,
          ),
    o = {
      access: dn(i?.access, a?.access, `deny`) ?? `allow`,
      uploads: dn(i?.uploads, a?.uploads, `deny`) ?? `allow`,
      downloads: dn(i?.downloads, a?.downloads, `deny`) ?? `allow`,
      fullCdpAccess: dn(i?.fullCdpAccess, a?.fullCdpAccess, `deny`) ?? `allow`,
      autoReview: dn(i?.autoReview, a?.autoReview, `deny`) ?? `allow`,
      persistentApproval: dn(i?.persistentApproval, a?.persistentApproval, !1) ?? !0,
      accessApprovalLifetime:
        dn(i?.accessApprovalLifetime, a?.accessApprovalLifetime, `turn`) ?? `thread`,
    };
  return o.access === `deny`
    ? { ...o, uploads: `deny`, downloads: `deny`, fullCdpAccess: `deny`, autoReview: `deny` }
    : o;
}
function ln(e, t, n) {
  let r = e.map(([e, t]) => ({ pattern: de(e), policy: t })),
    i = new Map();
  for (let { pattern: e } of r)
    e != null && i.set(e.canonicalKey, (i.get(e.canonicalKey) ?? 0) + 1);
  let a = r.flatMap(({ pattern: e, policy: t }) =>
    e == null || t == null || !p(e, n)
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
function un(e) {
  if (e != null)
    return {
      access: e.access,
      uploads: e.uploads,
      downloads: e.downloads,
      fullCdpAccess: e.full_cdp_access,
    };
}
function dn(e, t, n) {
  return e === n || t === n ? n : (e ?? t ?? null);
}
var fn = e(() => {
  D();
});
function pn(e) {
  return [`origin`, `download`, `upload`, ...(e ? [`fullCdp`] : [])];
}
function mn(e, t, n = null, r, i, a) {
  let o = new Set();
  for (let n of t) {
    for (let t of Tn(e, n, `allowed`)) o.add(t);
    for (let t of Tn(e, n, `denied`)) o.add(t);
  }
  let s = En.safeParse(a?.config);
  if (a?.name.type === `user` && s.success)
    for (let [e, t] of Object.entries(s.data.browser_use?.origins ?? {})) {
      let n = de(e);
      n != null &&
        t != null &&
        [`access`, `downloads`, `uploads`, `full_cdp_access`].some(
          (e) => t[e] === `allow` || t[e] === `deny`,
        ) &&
        o.add(n.canonicalPattern);
    }
  let c = new Set(o);
  for (let [e, t] of Object.entries(r?.origins ?? {})) {
    let n = de(e);
    t == null || n == null || !Object.values(t).some((e) => e != null) || c.add(n.canonicalPattern);
  }
  if (n != null) {
    let e = n.browserUse?.defaultOriginPolicy;
    for (let t of Rt(n))
      (e?.access === `deny` ? t.policy.access === `allow` : xn(t, e)) && c.add(t.pattern);
    for (let e of xt(n)) {
      if (e.decision !== `deny` && n.network?.managedAllowedDomainsOnly !== !0) continue;
      let t = de(
        `https://${e.pattern.canonicalPattern.includes(`:`) ? `[${e.pattern.canonicalPattern}]` : e.pattern.canonicalPattern}`,
      );
      t != null && c.add(t.canonicalPattern);
    }
  }
  return [...c]
    .filter((e) => {
      if (o.has(e) || n == null) return !0;
      let t = vn(n, e);
      return n.network?.managedAllowedDomainsOnly === !0 && t.length === 0
        ? !1
        : n.browserUse?.defaultOriginPolicy?.access !== `deny` ||
            Cn(e) ||
            _n(n, e).some((e) => e.policy.access === `allow`) ||
            Lt(n, e, `origin`);
    })
    .sort((e, t) => e.localeCompare(t))
    .map((a) => {
      let s = cn(null, r, a),
        c = Lt(n, a, `persistentApproval`),
        l = i != null && Te(a, i) === `deny`,
        u = {},
        d = _n(n, a),
        f = vn(n, a),
        p = {};
      for (let e of t) d.some((t) => Sn(n, t, e)) && (p[e] = !0);
      n != null &&
        (f.some(({ decision: e }) => e === `deny`) ||
          (n.network?.managedAllowedDomainsOnly === !0 &&
            f.some(({ decision: e }) => e === `allow`))) &&
        (p.origin = !0);
      let m = (t) => {
        let r = wn(e, t, a);
        return yn(n, d, a, t)
          ? l || s[bn(t)] === `deny`
            ? ((u[t] = `user`), `denied`)
            : r === `allowed` && !c
              ? `default`
              : r
          : (vt(n, t) || (u[t] = `organization`), `denied`);
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
function hn(e, t, n) {
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
function gn({ nextValues: e, origin: t, resources: n, values: r }) {
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
function _n(e, t) {
  return e == null
    ? []
    : Cn(t)
      ? Rt(e).filter((e) => e.pattern === t)
      : Rt(e).filter((e) => zt(e, t));
}
function vn(e, t) {
  return e == null ? [] : xt(e).filter((e) => It(e, t));
}
function yn(e, t, n, r) {
  if (!Cn(n)) return Lt(e, n, r);
  if (e == null) return !0;
  if (
    e.allowBrowserAndComputerUse === !1 ||
    e.network?.enabled === !1 ||
    (e.featureRequirements?.browser_use === !1 && e.featureRequirements.browser_use_external === !1)
  )
    return !1;
  let i = vn(e, n);
  if (
    i.some(({ decision: e }) => e === `deny`) ||
    (e.network?.managedAllowedDomainsOnly === !0 && !i.some(({ decision: e }) => e === `allow`))
  )
    return !1;
  let a = bn(r),
    o = t.flatMap((e) => {
      let t = e.policy[a];
      return t == null ? [] : [t];
    });
  if (o.includes(`deny`) || o.includes(!1)) return !1;
  if (o.includes(`allow`) || o.includes(!0)) return !0;
  let s = e.browserUse?.defaultOriginPolicy?.[a];
  return s !== `deny` && s !== !1;
}
function bn(e) {
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
function xn(e, t) {
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
function Sn(e, t, n) {
  let r = t.policy[bn(n)];
  if (r === `deny` || r === !1) return !0;
  if (e == null) return !1;
  let i = e.browserUse?.defaultOriginPolicy?.[bn(n)];
  return (r === `allow` && i === `deny`) || (r === !0 && i === !1);
}
function Cn(e) {
  return e.includes(`*`);
}
function wn(e, t, n) {
  return Tn(e, t, `denied`).includes(n)
    ? `denied`
    : Tn(e, t, `allowed`).includes(n)
      ? `allowed`
      : `default`;
}
function Tn(e, t, n) {
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
var En,
  Dn = e(() => {
    (B(),
      fn(),
      kt(),
      Ge(),
      (En = Ue({
        browser_use: Ue({ origins: He(We(), He(We(), Ke()).nullable()).nullish() }).nullish(),
      })));
  });
function On(e) {
  let t = (0, Jn.c)(24),
    { backend: n } = e,
    r = I(ie),
    { selectedHostId: a } = ae(),
    { data: o, isError: s, isLoading: c } = i(Pt),
    { data: l, isPending: u, isError: d } = E(be, a),
    f;
  t[0] === a ? (f = t[1]) : ((f = { failClosed: !0, hostId: a }), (t[0] = a), (t[1] = f));
  let { data: p, isError: m, isPending: g } = E(_e, f),
    _ = p?.requirements ?? null,
    v = l?.configReadSucceeded === !0 ? l.config.browser_use : null,
    y = o?.fullCdpAccessEnabled === !0,
    b = s || m || d || l?.configReadSucceeded === !1,
    x = c || g || u,
    S;
  t[2] !== p?.requirements?.featureRequirements || t[3] !== m || t[4] !== g || t[5] !== y
    ? ((S = y && !m && !g && !h(p?.requirements?.featureRequirements?.browser_use_full_cdp_access)),
      (t[2] = p?.requirements?.featureRequirements),
      (t[3] = m),
      (t[4] = g),
      (t[5] = y),
      (t[6] = S))
    : (S = t[6]);
  let C = S,
    w = l?.userConfigLayer,
    T = l?.config,
    D;
  t[7] === T ? (D = t[8]) : ((D = Et(T)), (t[7] = T), (t[8] = D));
  let O;
  t[9] !== r || t[10] !== a || t[11] !== l
    ? ((O = (e) => {
        Mt(r, a, l, e).catch(() => {
          r.get(se).danger(qn());
        });
      }),
      (t[9] = r),
      (t[10] = a),
      (t[11] = l),
      (t[12] = O))
    : (O = t[12]);
  let k;
  return (
    t[13] !== n ||
    t[14] !== _ ||
    t[15] !== b ||
    t[16] !== C ||
    t[17] !== x ||
    t[18] !== o ||
    t[19] !== w ||
    t[20] !== D ||
    t[21] !== O ||
    t[22] !== v
      ? ((k = (0, X.jsx)(kn, {
          backend: n,
          enterprisePolicy: _,
          originsConfig: o,
          isError: b,
          isFullCdpAccessEnabled: C,
          isLoading: x,
          userConfig: v,
          userConfigLayer: w,
          userNetworkPolicy: D,
          onDefaultPermissionChange: O,
        })),
        (t[13] = n),
        (t[14] = _),
        (t[15] = b),
        (t[16] = C),
        (t[17] = x),
        (t[18] = o),
        (t[19] = w),
        (t[20] = D),
        (t[21] = O),
        (t[22] = v),
        (t[23] = k))
      : (k = t[23]),
    k
  );
}
function kn(e) {
  let t = (0, Jn.c)(55),
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
      userNetworkPolicy: d,
    } = e,
    f = n === void 0 ? `iab` : n,
    p = r === void 0 ? null : r,
    [m, h] = (0, Yn.useState)(!1),
    g = f === `iab` ? `iab` : `extension`,
    _;
  t[0] !== p || t[1] !== g ? ((_ = bt(p, g)), (t[0] = p), (t[1] = g), (t[2] = _)) : (_ = t[2]);
  let y = _,
    b,
    S,
    C,
    w;
  if (
    t[3] !== y ||
    t[4] !== p ||
    t[5] !== a ||
    t[6] !== c ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== d
  ) {
    ((w = pn(a)), (S = c == null ? null : mn(c, w, p, l, d, u)));
    let e =
        p?.browserUse?.defaultOriginPolicy?.access === `deny` ||
        p?.network?.managedAllowedDomainsOnly === !0,
      n = !y || p?.allowBrowserAndComputerUse === !1 || p?.network?.enabled === !1,
      r;
    (t[14] === p
      ? (r = t[15])
      : ((r = p != null && (Rt(p).some(jn) || xt(p).some(An))), (t[14] = p), (t[15] = r)),
      (b = n || (e && !r)),
      (C = yt(p) && (b || w.some((e) => !vt(p, e)) || Mn(p))),
      (t[3] = y),
      (t[4] = p),
      (t[5] = a),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = b),
      (t[11] = S),
      (t[12] = C),
      (t[13] = w));
  } else ((b = t[10]), (S = t[11]), (C = t[12]), (w = t[13]));
  let T = C,
    E = i || o || S == null || b,
    D;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        h(!0);
      }),
      (t[16] = D))
    : (D = t[16]);
  let O;
  t[17] === b
    ? (O = t[18])
    : ((O = b ? (0, X.jsx)(ut, {}) : (0, X.jsx)(Ae, { "aria-hidden": !1, asset: tt })),
      (t[17] = b),
      (t[18] = O));
  let k;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, X.jsx)(V, {
        id: `settings.browserUse.domains.add`,
        defaultMessage: `Add`,
        description: `Button label to add a browser use domain`,
      })),
      (t[19] = k))
    : (k = t[19]);
  let A;
  t[20] !== E || t[21] !== O
    ? ((A = (0, X.jsxs)(gt, {
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
    ? ((j = (0, X.jsx)(Zt, { managed: b, children: A })), (t[23] = b), (t[24] = A), (t[25] = j))
    : (j = t[25]);
  let M, N;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, X.jsx)(V, {
        id: `settings.browserUse.policy.agentPermissions.title`,
        defaultMessage: `Agent permissions`,
        description: `Title for browser use site permissions table`,
      })),
      (N = (0, X.jsx)(V, {
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
    : ((P = (0, X.jsx)(ye.Header, { size: `base`, actions: j, title: M, subtitle: N })),
      (t[28] = j),
      (t[29] = P));
  let F;
  t[30] !== y ||
  t[31] !== p ||
  t[32] !== i ||
  t[33] !== o ||
  t[34] !== s ||
  t[35] !== c ||
  t[36] !== S ||
  t[37] !== l ||
  t[38] !== w
    ? ((F = (0, X.jsx)(ye.Content, {
        children: (0, X.jsx)(x, {
          children: i
            ? (0, X.jsx)(v, {
                layout: `settings-row`,
                children: (0, X.jsx)(V, {
                  id: `settings.browserUse.sitePermissions.loadError`,
                  defaultMessage: `Unable to load site permissions`,
                  description: `Message shown when browser site permissions fail to load`,
                }),
              })
            : o || S == null || c == null
              ? (0, X.jsx)(Vt, {
                  children: (0, X.jsx)(V, {
                    id: `settings.browserUse.sitePermissions.loading`,
                    defaultMessage: `Loading websites…`,
                    description: `Message shown while loading browser site permissions`,
                  }),
                })
              : (0, X.jsx)(Nn, {
                  browserClientAllowed: y,
                  enterprisePolicy: p,
                  onDefaultPermissionChange: s,
                  originsConfig: c,
                  rows: S,
                  userConfig: l,
                  visibleResources: w,
                }),
        }),
      })),
      (t[30] = y),
      (t[31] = p),
      (t[32] = i),
      (t[33] = o),
      (t[34] = s),
      (t[35] = c),
      (t[36] = S),
      (t[37] = l),
      (t[38] = w),
      (t[39] = F))
    : (F = t[39]);
  let I;
  t[40] !== T || t[41] !== i || t[42] !== o || t[43] !== S
    ? ((I =
        !i && !o && S != null && T
          ? (0, X.jsx)(ye.Footer, {
              children: (0, X.jsxs)(`span`, {
                className: `inline-flex items-center gap-1.5`,
                children: [
                  (0, X.jsx)(ut, {}),
                  (0, X.jsx)(V, {
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
      (t[43] = S),
      (t[44] = I))
    : (I = t[44]);
  let L;
  t[45] !== p || t[46] !== m || t[47] !== c || t[48] !== w
    ? ((L =
        c == null
          ? null
          : (0, X.jsx)(Hn, {
              enterprisePolicy: p,
              open: m,
              originsConfig: c,
              visibleResources: w,
              onOpenChange: h,
            })),
      (t[45] = p),
      (t[46] = m),
      (t[47] = c),
      (t[48] = w),
      (t[49] = L))
    : (L = t[49]);
  let R;
  return (
    t[50] !== P || t[51] !== F || t[52] !== I || t[53] !== L
      ? ((R = (0, X.jsxs)(ye, { children: [P, F, I, L] })),
        (t[50] = P),
        (t[51] = F),
        (t[52] = I),
        (t[53] = L),
        (t[54] = R))
      : (R = t[54]),
    R
  );
}
function An(e) {
  let { decision: t, pattern: n } = e;
  return t === `allow` && n.canonicalPattern.includes(`*`);
}
function jn(e) {
  let { pattern: t, policy: n } = e;
  return n.access === `allow` && t.includes(`*`);
}
function Mn(e) {
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
    xt(e).some(({ decision: e }) => e === `deny`) ||
    Rt(e).some((e) => xn(e, t))
  );
}
function Nn(e) {
  let t = (0, Jn.c)(36),
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
    ? ((l = (0, X.jsx)(`th`, {
        className: `min-w-36 px-3 py-3 text-start font-medium`,
        children: (0, X.jsx)(V, {
          id: `settings.browserUse.sitePermissions.matrix.siteColumn`,
          defaultMessage: `Site or pattern`,
          description: `Column heading for a website origin or origin pattern in the browser permissions matrix`,
        }),
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] === c ? (u = t[2]) : ((u = c.map(Pn)), (t[1] = c), (t[2] = u));
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(`th`, {
        className: `px-2 py-3`,
        children: (0, X.jsx)(`span`, {
          className: `sr-only`,
          children: (0, X.jsx)(V, {
            id: `settings.browserUse.sitePermissions.matrix.actionsColumn`,
            defaultMessage: `Actions`,
            description: `Accessible heading for site permission row actions`,
          }),
        }),
      })),
      (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] === u
    ? (f = t[5])
    : ((f = (0, X.jsx)(`thead`, {
        children: (0, X.jsxs)(`tr`, {
          className: `border-b border-default text-secondary`,
          children: [l, u, d],
        }),
      })),
      (t[4] = u),
      (t[5] = f));
  let p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(`td`, {
        className: `px-3 py-3 font-medium`,
        children: (0, X.jsx)(`span`, {
          id: `browser-use-site-permissions-default`,
          children: (0, X.jsx)(V, {
            id: `settings.browserUse.sitePermissions.matrix.defaultRow`,
            defaultMessage: `Default`,
            description: `Label for the default browser site permissions matrix row`,
          }),
        }),
      })),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== n || t[8] !== r || t[9] !== i || t[10] !== a || t[11] !== s || t[12] !== c
    ? ((m = (0, X.jsx)(rn, {
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
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(`td`, { "aria-hidden": !0 })), (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] === m
    ? (g = t[16])
    : ((g = (0, X.jsxs)(`tr`, { className: `border-b border-default`, children: [p, m, h] })),
      (t[15] = m),
      (t[16] = g));
  let _;
  if (t[17] !== n || t[18] !== r || t[19] !== a || t[20] !== o || t[21] !== s || t[22] !== c) {
    let e;
    (t[24] !== n || t[25] !== r || t[26] !== a || t[27] !== s || t[28] !== c
      ? ((e = (e, t) =>
          (0, X.jsx)(
            Fn,
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
      (_ = o.map(e)),
      (t[17] = n),
      (t[18] = r),
      (t[19] = a),
      (t[20] = o),
      (t[21] = s),
      (t[22] = c),
      (t[23] = _));
  } else _ = t[23];
  let v;
  t[30] !== g || t[31] !== _
    ? ((v = (0, X.jsxs)(`tbody`, { children: [g, _] })), (t[30] = g), (t[31] = _), (t[32] = v))
    : (v = t[32]);
  let y;
  return (
    t[33] !== v || t[34] !== f
      ? ((y = (0, X.jsx)(`div`, {
          className: `overflow-x-auto`,
          children: (0, X.jsxs)(`table`, {
            className: `w-full border-collapse text-sm`,
            children: [f, v],
          }),
        })),
        (t[33] = v),
        (t[34] = f),
        (t[35] = y))
      : (y = t[35]),
    y
  );
}
function Pn(e) {
  return (0, X.jsx)(
    `th`,
    {
      className: Ne(`px-2 py-3 text-start font-medium`, e === `fullCdp` ? `min-w-28` : `min-w-48`),
      id: `browser-use-site-permissions-column-${e}`,
      children: (0, X.jsx)(Ln, { resource: e }),
    },
    e,
  );
}
function Fn(e) {
  let t = (0, Jn.c)(35),
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
    ? ((u = (0, X.jsx)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: (0, X.jsx)(`span`, {
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
  let d;
  t[3] !== a.origin || t[4] !== u
    ? ((d = (0, X.jsx)(mt, {
        tooltipContent: a.origin,
        openWhen: `trigger-overflows`,
        children: u,
      })),
      (t[3] = a.origin),
      (t[4] = u),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === a.networkBlocked
    ? (f = t[7])
    : ((f = a.networkBlocked
        ? (0, X.jsx)(`span`, {
            className: `text-xs text-secondary`,
            children: (0, X.jsx)(V, {
              id: `settings.browserUse.sitePermissions.networkBlocked`,
              defaultMessage: `Blocked by your network configuration`,
              description: `Explains why a site permission is unavailable due to the selected user network permission profile`,
            }),
          })
        : null),
      (t[6] = a.networkBlocked),
      (t[7] = f));
  let p;
  t[8] !== l || t[9] !== d || t[10] !== f
    ? ((p = (0, X.jsxs)(`td`, {
        "aria-labelledby": l,
        className: `max-w-40 px-3 py-3`,
        children: [d, f],
      })),
      (t[8] = l),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p))
    : (p = t[11]);
  let m;
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
          (0, X.jsx)(
            `td`,
            {
              className: `px-2 py-3`,
              children:
                e !== `origin` && (!n || a.values.origin === `denied`)
                  ? (0, X.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `text-secondary`,
                      children: (0, X.jsx)(V, {
                        id: `settings.browserUse.sitePermissions.matrix.unavailableValue`,
                        defaultMessage: `—`,
                        description: `Visual placeholder for a site capability that does not apply because browsing is blocked`,
                      }),
                    })
                  : (0, X.jsx)(In, {
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
      (m = c.map(e)),
      (t[12] = n),
      (t[13] = r),
      (t[14] = i),
      (t[15] = a),
      (t[16] = o),
      (t[17] = l),
      (t[18] = s),
      (t[19] = c),
      (t[20] = m));
  } else m = t[20];
  let h;
  t[29] === a
    ? (h = t[30])
    : ((h = (0, X.jsx)(`td`, { className: `px-2 py-3`, children: (0, X.jsx)(Vn, { row: a }) })),
      (t[29] = a),
      (t[30] = h));
  let g;
  return (
    t[31] !== p || t[32] !== m || t[33] !== h
      ? ((g = (0, X.jsxs)(`tr`, {
          className: `border-b border-default last:border-b-0`,
          children: [p, m, h],
        })),
        (t[31] = p),
        (t[32] = m),
        (t[33] = h),
        (t[34] = g))
      : (g = t[34]),
    g
  );
}
function In(e) {
  let t = (0, Jn.c)(60),
    {
      browserClientAllowed: n,
      enterprisePolicy: r,
      originsConfig: i,
      resource: a,
      row: o,
      rowIndex: s,
      rowLabelId: c,
      userConfig: l,
    } = e,
    u = I(ie),
    [d, f] = (0, Yn.useState)(!1),
    { selectedHostId: p } = ae(),
    m = Ct(p),
    h;
  t[0] !== a || t[1] !== o.managedResources || t[2] !== o.origin
    ? ((h = o.origin.includes(`*`) && o.managedResources?.[a] === !0),
      (t[0] = a),
      (t[1] = o.managedResources),
      (t[2] = o.origin),
      (t[3] = h))
    : (h = t[3]);
  let g = h,
    _;
  t[4] !== n || t[5] !== r || t[6] !== g || t[7] !== a || t[8] !== o.origin
    ? ((_ = n && !g && Lt(r, o.origin, a)),
      (t[4] = n),
      (t[5] = r),
      (t[6] = g),
      (t[7] = a),
      (t[8] = o.origin),
      (t[9] = _))
    : (_ = t[9]);
  let v = _,
    y = g || o.inheritedRestrictions?.[a] === `organization` || !v,
    b;
  t[10] !== v || t[11] !== r || t[12] !== o.origin
    ? ((b = v && Lt(r, o.origin, `persistentApproval`)),
      (t[10] = v),
      (t[11] = r),
      (t[12] = o.origin),
      (t[13] = b))
    : (b = t[13]);
  let x = b,
    S;
  t[14] !== r || t[15] !== i || t[16] !== a || t[17] !== o.origin
    ? ((S = Gn(i, a, r, o.origin)),
      (t[14] = r),
      (t[15] = i),
      (t[16] = a),
      (t[17] = o.origin),
      (t[18] = S))
    : (S = t[18]);
  let C = S,
    w;
  t[19] !== a || t[20] !== o.origin || t[21] !== l?.origins
    ? ((w = Object.entries(l?.origins ?? {}).some((e) => {
        let [t, n] = e;
        return de(t)?.canonicalPattern === o.origin && Tt(n, a) != null;
      })),
      (t[19] = a),
      (t[20] = o.origin),
      (t[21] = l?.origins),
      (t[22] = w))
    : (w = t[22]);
  let T = w,
    E;
  t[23] !== i || t[24] !== a || t[25] !== o.origin
    ? ((E = wn(i, a, o.origin)), (t[23] = i), (t[24] = a), (t[25] = o.origin), (t[26] = E))
    : (E = t[26]);
  let D = E,
    O =
      !y &&
      !o.networkBlocked &&
      !T &&
      (o.values[a] === "default" || (o.inheritedRestrictions?.[a] === `user` && D !== `denied`)),
    k;
  t[27] !== C || t[28] !== T || t[29] !== O || t[30] !== a || t[31] !== o.values
    ? ((k = o.values[a]),
      O ? (k = `default`) : k === "default" && T && (k = C === `neverAsk` ? `allowed` : `ask`),
      (t[27] = C),
      (t[28] = T),
      (t[29] = O),
      (t[30] = a),
      (t[31] = o.values),
      (t[32] = k))
    : (k = t[32]);
  let A = O ? o.values[a] : k,
    j;
  t[33] !== x ||
  t[34] !== C ||
  t[35] !== y ||
  t[36] !== d ||
  t[37] !== a ||
  t[38] !== o.networkBlocked ||
  t[39] !== o.origin ||
  t[40] !== o.values ||
  t[41] !== D ||
  t[42] !== u ||
  t[43] !== k ||
  t[44] !== m
    ? ((j = async (e) => {
        (e === k && (e !== `allowed` || D === `allowed`)) ||
          d ||
          y ||
          o.networkBlocked ||
          (e === `ask` && C === `neverAsk`) ||
          (e === `allowed` && !x) ||
          (f(!0),
          await (async () => {
            try {
              await m.mutateAsync({
                updates: gn({
                  nextValues: { ...o.values, [a]: e },
                  origin: o.origin,
                  resources: [a],
                  values: { ...o.values, [a]: D },
                }),
                configUpdate: hn(o.origin, { ...o.values, [a]: e }, [a]),
              });
            } catch {
              u.get(se).danger(qn());
            }
          })().finally(() => {
            f(!1);
          }));
      }),
      (t[33] = x),
      (t[34] = C),
      (t[35] = y),
      (t[36] = d),
      (t[37] = a),
      (t[38] = o.networkBlocked),
      (t[39] = o.origin),
      (t[40] = o.values),
      (t[41] = D),
      (t[42] = u),
      (t[43] = k),
      (t[44] = m),
      (t[45] = j))
    : (j = t[45]);
  let M = j,
    N = d || y || o.networkBlocked,
    P = `browser-use-site-permissions-column-${a}`,
    F = n ? A : `denied`,
    L = `browser-use-site-permissions-${s}-${a}-value`,
    R;
  t[46] === M
    ? (R = t[47])
    : ((R = (e) => {
        M(e);
      }),
      (t[46] = M),
      (t[47] = R));
  let z;
  return (
    t[48] !== x ||
    t[49] !== C ||
    t[50] !== O ||
    t[51] !== y ||
    t[52] !== a ||
    t[53] !== c ||
    t[54] !== F ||
    t[55] !== L ||
    t[56] !== R ||
    t[57] !== N ||
    t[58] !== P
      ? ((z = (0, X.jsx)(zn, {
          allowAllowed: x,
          contextId: c,
          defaultApprovalMode: C,
          disabled: N,
          inherited: O,
          labelId: P,
          managed: y,
          resource: a,
          value: F,
          valueId: L,
          onSelect: R,
        })),
        (t[48] = x),
        (t[49] = C),
        (t[50] = O),
        (t[51] = y),
        (t[52] = a),
        (t[53] = c),
        (t[54] = F),
        (t[55] = L),
        (t[56] = R),
        (t[57] = N),
        (t[58] = P),
        (t[59] = z))
      : (z = t[59]),
    z
  );
}
function Ln(e) {
  let t = (0, Jn.c)(4),
    { resource: n } = e;
  switch (n) {
    case `origin`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(V, {
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
          ? ((e = (0, X.jsx)(V, {
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
          ? ((e = (0, X.jsx)(V, {
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
          ? ((e = (0, X.jsx)(V, {
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
function Rn(e) {
  let t = (0, Jn.c)(6),
    { value: n } = e,
    r = n === `allowed` && `bg-chart-green`,
    i = n === `denied` && `bg-text-danger`,
    a = (n === "default" || n === `ask`) && `bg-text-tertiary`,
    o;
  t[0] !== r || t[1] !== i || t[2] !== a
    ? ((o = Ne(`size-2 shrink-0 rounded-full`, r, i, a)),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === o ? (s = t[5]) : ((s = (0, X.jsx)(`span`, { className: o })), (t[4] = o), (t[5] = s)),
    s
  );
}
function zn(e) {
  let t = (0, Jn.c)(52),
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
      resource: d,
      value: f,
      valueId: p,
      variant: m,
    } = e,
    h = n === void 0 || n,
    g = r === void 0 || r,
    _ = l !== void 0 && l,
    v = m === void 0 ? `default` : m,
    y = P(),
    b = !_ && (s ?? f === "default"),
    x;
  t[0] !== y || t[1] !== b
    ? ((x = b
        ? y.formatMessage({
            id: `settings.browserUse.sitePermissions.inheritedDescription`,
            defaultMessage: `Uses the default permission`,
            description: `Accessible description and tooltip for an editable browser site permission inherited from its defaults`,
          })
        : void 0),
      (t[0] = y),
      (t[1] = b),
      (t[2] = x))
    : (x = t[2]);
  let S = x,
    C;
  t[3] !== i || t[4] !== c || t[5] !== p
    ? ((C = [c, i, p].filter(Bn)), (t[3] = i), (t[4] = c), (t[5] = p), (t[6] = C))
    : (C = t[6]);
  let w = C.join(` `),
    T = v === `form` && `h-9! px-2.5!`,
    E;
  t[7] === T ? (E = t[8]) : ((E = Ne(`w-full`, T)), (t[7] = T), (t[8] = E));
  let D = v === `form` ? `small` : void 0,
    O;
  t[9] !== a || t[10] !== s || t[11] !== _ || t[12] !== f
    ? ((O = _
        ? (0, X.jsx)(ut, { className: `text-secondary` })
        : (0, X.jsx)(Rn, { value: s && f === "default" && a === `neverAsk` ? `allowed` : f })),
      (t[9] = a),
      (t[10] = s),
      (t[11] = _),
      (t[12] = f),
      (t[13] = O))
    : (O = t[13]);
  let k = b && `text-secondary`,
    A;
  t[14] === k ? (A = t[15]) : ((A = Ne(`truncate`, k)), (t[14] = k), (t[15] = A));
  let j = s ? a : void 0,
    M;
  t[16] !== d || t[17] !== j || t[18] !== f
    ? ((M = Kn(f, d, j)), (t[16] = d), (t[17] = j), (t[18] = f), (t[19] = M))
    : (M = t[19]);
  let N;
  t[20] !== A || t[21] !== M || t[22] !== p
    ? ((N = (0, X.jsx)(`span`, { id: p, className: A, children: M })),
      (t[20] = A),
      (t[21] = M),
      (t[22] = p),
      (t[23] = N))
    : (N = t[23]);
  let F;
  t[24] !== S || t[25] !== N
    ? ((F = (0, X.jsx)(mt, { tooltipContent: S, children: N })),
      (t[24] = S),
      (t[25] = N),
      (t[26] = F))
    : (F = t[26]);
  let I;
  t[27] !== o ||
  t[28] !== S ||
  t[29] !== D ||
  t[30] !== O ||
  t[31] !== F ||
  t[32] !== w ||
  t[33] !== E
    ? ((I = (0, X.jsxs)(ee, {
        "aria-description": S,
        "aria-labelledby": w,
        className: E,
        disabled: o,
        radius: D,
        children: [O, F],
      })),
      (t[27] = o),
      (t[28] = S),
      (t[29] = D),
      (t[30] = O),
      (t[31] = F),
      (t[32] = w),
      (t[33] = E),
      (t[34] = I))
    : (I = t[34]);
  let L;
  t[35] !== h ||
  t[36] !== g ||
  t[37] !== a ||
  t[38] !== u ||
  t[39] !== d ||
  t[40] !== b ||
  t[41] !== f
    ? ((L = Xn.map((e) => {
        let t = (e === `allowed` && !h) || (e === `ask` && !g),
          n = e === `ask` && a === `neverAsk`,
          r;
        return (
          t
            ? (r = (0, X.jsx)(Qt, {}))
            : n &&
              (r = (0, X.jsx)(V, {
                id: `settings.browserUse.sitePermissions.requiresApprovalUnavailable`,
                defaultMessage: `Change the default from Always allow before requiring approval for individual sites`,
                description: `Explains that the current browser approval storage cannot override a global Always allow setting for one site`,
              })),
          (0, X.jsx)(
            xe.Item,
            {
              rightIconAsset: e === (b ? `default` : f) && (b || f !== "default") ? it : void 0,
              disabled: t || n,
              tooltipText: r,
              onSelect: () => {
                u(e);
              },
              children: (0, X.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, X.jsx)(Rn, { value: e }),
                  (0, X.jsx)(`span`, { className: `truncate`, children: Kn(e, d) }),
                ],
              }),
            },
            e,
          )
        );
      })),
      (t[35] = h),
      (t[36] = g),
      (t[37] = a),
      (t[38] = u),
      (t[39] = d),
      (t[40] = b),
      (t[41] = f),
      (t[42] = L))
    : (L = t[42]);
  let R;
  t[43] === L
    ? (R = t[44])
    : ((R = (0, X.jsx)(`div`, { className: `flex flex-col`, children: L })),
      (t[43] = L),
      (t[44] = R));
  let z;
  t[45] !== o || t[46] !== I || t[47] !== R
    ? ((z = (0, X.jsx)(ne, {
        align: `end`,
        contentWidth: `menu`,
        disabled: o,
        triggerButton: I,
        children: R,
      })),
      (t[45] = o),
      (t[46] = I),
      (t[47] = R),
      (t[48] = z))
    : (z = t[48]);
  let B;
  return (
    t[49] !== _ || t[50] !== z
      ? ((B = (0, X.jsx)(Zt, { managed: _, children: z })), (t[49] = _), (t[50] = z), (t[51] = B))
      : (B = t[51]),
    B
  );
}
function Bn(e) {
  return e != null;
}
function Vn(e) {
  let t = (0, Jn.c)(48),
    { row: n } = e,
    r = I(ie),
    i = P(),
    [a, o] = (0, Yn.useState)(!1),
    [s, l] = (0, Yn.useState)(!1),
    { selectedHostId: u } = ae(),
    d = Ct(u),
    f;
  t[0] !== s || t[1] !== n.hasUserPermissions || t[2] !== n.origin || t[3] !== r || t[4] !== d
    ? ((f = async () => {
        s ||
          !n.hasUserPermissions ||
          (l(!0),
          await (async () => {
            try {
              (await d.mutateAsync({
                updates: Object.values(Zn).flatMap((e) =>
                  [`allowed`, `denied`].map((t) => ({
                    action: `remove`,
                    kind: t,
                    origin: n.origin,
                    resource: e,
                  })),
                ),
                configUpdate: de(n.origin) == null ? void 0 : { origin: n.origin, policy: null },
              }),
                o(!1));
            } catch {
              r.get(se).danger(qn());
            }
          })().finally(() => {
            l(!1);
          }));
      }),
      (t[0] = s),
      (t[1] = n.hasUserPermissions),
      (t[2] = n.origin),
      (t[3] = r),
      (t[4] = d),
      (t[5] = f))
    : (f = t[5]);
  let p = f,
    m;
  t[6] !== n.hasUserPermissions || t[7] !== n.inheritedRestrictions || t[8] !== n.managedResources
    ? ((m =
        !n.hasUserPermissions &&
        (n.managedResources != null ||
          Object.values(n.inheritedRestrictions ?? {}).includes(`organization`))),
      (t[6] = n.hasUserPermissions),
      (t[7] = n.inheritedRestrictions),
      (t[8] = n.managedResources),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== i || t[11] !== n.origin
    ? ((h = i.formatMessage(
        {
          id: `settings.browserUse.sitePermissions.clearAriaLabel`,
          defaultMessage: `Remove custom permissions for {origin}`,
          description: `Aria label for button that removes all custom browser site permissions`,
        },
        { origin: n.origin },
      )),
      (t[10] = i),
      (t[11] = n.origin),
      (t[12] = h))
    : (h = t[12]);
  let g = s || !n.hasUserPermissions,
    _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => {
        o(!0);
      }),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(Be, { className: `icon-2xs` })), (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== h || t[16] !== g
    ? ((y = (0, X.jsx)(gt, {
        "aria-label": h,
        color: `ghost`,
        disabled: g,
        onClick: _,
        size: `icon`,
        children: v,
      })),
      (t[15] = h),
      (t[16] = g),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] !== m || t[19] !== y
    ? ((b = (0, X.jsx)(Zt, { managed: m, children: y })), (t[18] = m), (t[19] = y), (t[20] = b))
    : (b = t[20]);
  let x;
  t[21] === p
    ? (x = t[22])
    : ((x = (e) => {
        (e.preventDefault(), p());
      }),
      (t[21] = p),
      (t[22] = x));
  let S;
  t[23] === n.origin
    ? (S = t[24])
    : ((S = (0, X.jsx)(Ee, {
        asChild: !0,
        children: (0, X.jsx)(`span`, {
          children: (0, X.jsx)(V, {
            id: `settings.browserUse.sitePermissions.removeDialog.title`,
            defaultMessage: `Remove custom permissions for {origin}?`,
            description: `Confirmation dialog title for removing custom browser site permissions`,
            values: { origin: n.origin },
          }),
        }),
      })),
      (t[23] = n.origin),
      (t[24] = S));
  let C;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(c, {
        asChild: !0,
        children: (0, X.jsx)(`span`, {
          children: (0, X.jsx)(V, {
            id: `settings.browserUse.sitePermissions.removeDialog.subtitle`,
            defaultMessage: `This resets this site's custom permissions to their defaults`,
            description: `Confirmation dialog subtitle for removing custom browser site permissions`,
          }),
        }),
      })),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] === S
    ? (w = t[27])
    : ((w = (0, X.jsx)(we, { children: (0, X.jsx)(te, { title: S, subtitle: C }) })),
      (t[26] = S),
      (t[27] = w));
  let T;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        o(!1);
      }),
      (t[28] = T))
    : (T = t[28]);
  let E;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(V, {
        id: `settings.browserUse.sitePermissions.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for removing custom browser site permissions`,
      })),
      (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] === s
    ? (D = t[31])
    : ((D = (0, X.jsx)(gt, {
        color: `ghost`,
        disabled: s,
        onClick: T,
        type: `button`,
        children: E,
      })),
      (t[30] = s),
      (t[31] = D));
  let O;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(V, {
        id: `settings.browserUse.sitePermissions.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for removing custom browser site permissions`,
      })),
      (t[32] = O))
    : (O = t[32]);
  let k;
  t[33] === s
    ? (k = t[34])
    : ((k = (0, X.jsx)(gt, { color: `danger`, loading: s, type: `submit`, children: O })),
      (t[33] = s),
      (t[34] = k));
  let A;
  t[35] !== D || t[36] !== k
    ? ((A = (0, X.jsx)(we, { children: (0, X.jsxs)(oe, { children: [D, k] }) })),
      (t[35] = D),
      (t[36] = k),
      (t[37] = A))
    : (A = t[37]);
  let j;
  t[38] !== w || t[39] !== A || t[40] !== x
    ? ((j = (0, X.jsxs)(ce, { as: `form`, onSubmit: x, children: [w, A] })),
      (t[38] = w),
      (t[39] = A),
      (t[40] = x),
      (t[41] = j))
    : (j = t[41]);
  let M;
  t[42] !== a || t[43] !== j
    ? ((M = (0, X.jsx)(N, { open: a, onOpenChange: o, size: `compact`, children: j })),
      (t[42] = a),
      (t[43] = j),
      (t[44] = M))
    : (M = t[44]);
  let F;
  return (
    t[45] !== M || t[46] !== b
      ? ((F = (0, X.jsxs)(X.Fragment, { children: [b, M] })), (t[45] = M), (t[46] = b), (t[47] = F))
      : (F = t[47]),
    F
  );
}
function Hn(e) {
  let t = (0, Jn.c)(103),
    { enterprisePolicy: n, onOpenChange: r, open: i, originsConfig: a, visibleResources: o } = e,
    s = I(ie),
    l = P(),
    [u, d] = (0, Yn.useState)(``),
    [f, p] = (0, Yn.useState)(`default`),
    [m, h] = (0, Yn.useState)(Qn),
    [g, _] = (0, Yn.useState)(!1),
    [v, y] = (0, Yn.useState)(!1),
    { selectedHostId: b } = ae(),
    x = Ct(b),
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    F,
    L,
    R,
    z,
    ee,
    B,
    ne;
  if (
    t[0] !== m ||
    t[1] !== n ||
    t[2] !== l ||
    t[3] !== v ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== u ||
    t[7] !== a ||
    t[8] !== s ||
    t[9] !== g ||
    t[10] !== f ||
    t[11] !== o ||
    t[12] !== x
  ) {
    O = de(u);
    let e = u.length > 0 && O == null,
      b = O == null || Lt(n, O.canonicalPattern, `origin`),
      P = O == null || Lt(n, O.canonicalPattern, `persistentApproval`),
      I;
    (t[31] !== m || t[32] !== f
      ? ((I = f !== "default" || Object.values(m).some(Un)), (t[31] = m), (t[32] = f), (t[33] = I))
      : (I = t[33]),
      (E = I),
      (T =
        O != null &&
        o.some((e) => {
          let t = e === `origin` ? f : m[e];
          return (
            (t === `allowed` && !P) ||
            ((t === `allowed` || t === `ask`) && !Lt(n, O.canonicalPattern, e))
          );
        })),
      (D = o.some(
        (e) =>
          (e === `origin` ? f : m[e]) === `ask` &&
          Gn(a, e, n, O?.canonicalPattern ?? ``) === `neverAsk`,
      )));
    let H;
    (t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((H = () => {
          (d(``), p(`default`), h(Qn), _(!1));
        }),
        (t[34] = H))
      : (H = t[34]),
      (k = H));
    let re = async () => {
      O == null ||
        v ||
        !E ||
        T ||
        D ||
        (y(!0),
        await (async () => {
          try {
            (await x.mutateAsync({
              updates: gn({
                nextValues: { ...m, origin: f },
                origin: O.canonicalPattern,
                resources: o,
                values: $n,
              }),
              configUpdate: hn(
                O.canonicalPattern,
                { ...m, origin: f },
                o.filter((e) => e === `origin` || m[e] !== "default"),
              ),
            }),
              k(),
              r(!1));
          } catch {
            s.get(se).danger(qn());
          }
        })().finally(() => {
          y(!1);
        }));
    };
    ((w = N),
      (B = i),
      t[35] === r
        ? (ne = t[36])
        : ((ne = (e) => {
            (e || k(), r(e));
          }),
          (t[35] = r),
          (t[36] = ne)),
      (j = `compact`),
      (C = ce),
      (R = `form`),
      (z = (e) => {
        (e.preventDefault(), re());
      }));
    let U;
    (t[37] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((U = (0, X.jsx)(Ee, {
          asChild: !0,
          children: (0, X.jsx)(`span`, {
            children: (0, X.jsx)(V, {
              id: `settings.browserUse.sitePermissions.addDialog.title`,
              defaultMessage: `Add site permission`,
              description: `Title for add browser site permission dialog`,
            }),
          }),
        })),
        (t[37] = U))
      : (U = t[37]),
      t[38] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((ee = (0, X.jsx)(we, {
            children: (0, X.jsx)(te, {
              title: U,
              subtitle: (0, X.jsx)(c, {
                asChild: !0,
                children: (0, X.jsx)(`span`, {
                  children: (0, X.jsx)(V, {
                    id: `settings.browserUse.sitePermissions.addDialog.subtitle`,
                    defaultMessage: `Choose what access ChatGPT has on a site`,
                    description: `Subtitle for add browser site permission dialog`,
                  }),
                }),
              }),
            }),
          })),
          (t[38] = ee))
        : (ee = t[38]),
      (S = we),
      (A = `gap-3`));
    let ie;
    t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ie = (0, X.jsx)(`span`, {
          className: `text-sm font-medium`,
          children: (0, X.jsx)(V, {
            id: `settings.browserUse.sitePermissions.addDialog.siteLabel`,
            defaultMessage: `Site`,
            description: `Site label for add browser site permission dialog`,
          }),
        })),
        (t[39] = ie))
      : (ie = t[39]);
    let ae = e ? `browser-use-add-origin-error` : void 0,
      W;
    t[40] === l
      ? (W = t[41])
      : ((W = l.formatMessage({
          id: `settings.browserUse.sitePermissions.addDialog.siteAriaLabel`,
          defaultMessage: `Site`,
          description: `Aria label for site input in add browser site permission dialog`,
        })),
        (t[40] = l),
        (t[41] = W));
    let G;
    t[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((G = (e) => {
          d(e.currentTarget.value);
        }),
        (t[42] = G))
      : (G = t[42]);
    let oe;
    t[43] === l
      ? (oe = t[44])
      : ((oe = l.formatMessage({
          id: `settings.browserUse.policyDomains.addDialogPlaceholder`,
          defaultMessage: `https://example.com`,
          description: `Placeholder showing that browser site patterns require an HTTP or HTTPS scheme`,
        })),
        (t[43] = l),
        (t[44] = oe));
    let K;
    t[45] !== e || t[46] !== v || t[47] !== u || t[48] !== ae || t[49] !== W || t[50] !== oe
      ? ((K = (0, X.jsx)(le, {
          autoFocus: !0,
          "aria-describedby": ae,
          "aria-invalid": e,
          "aria-label": W,
          disabled: v,
          onChange: G,
          placeholder: oe,
          value: u,
        })),
        (t[45] = e),
        (t[46] = v),
        (t[47] = u),
        (t[48] = ae),
        (t[49] = W),
        (t[50] = oe),
        (t[51] = K))
      : (K = t[51]);
    let q;
    (t[52] === e
      ? (q = t[53])
      : ((q = e
          ? (0, X.jsx)(`span`, {
              className: `text-xs text-danger`,
              id: `browser-use-add-origin-error`,
              role: `alert`,
              children: (0, X.jsx)(V, {
                id: `settings.browserUse.sitePermissions.addDialog.invalidOrigin`,
                defaultMessage: `Enter a valid origin, such as https://example.com or https://*.example.com`,
                description: `Validation error explaining the required URL scheme and supported wildcard syntax for a browser site permission`,
              }),
            })
          : null),
        (t[52] = e),
        (t[53] = q)),
      t[54] !== K || t[55] !== q
        ? ((M = (0, X.jsxs)(`label`, { className: `flex flex-col gap-1.5`, children: [ie, K, q] })),
          (t[54] = K),
          (t[55] = q),
          (t[56] = M))
        : (M = t[56]));
    let ue;
    (t[57] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ue = (0, X.jsx)(`span`, {
          id: `browser-use-add-browsing-label`,
          className: `text-sm font-medium`,
          children: (0, X.jsx)(V, {
            id: `settings.browserUse.sitePermissions.addDialog.behaviorLabel`,
            defaultMessage: `Browse`,
            description: `Behavior label for add browser site permission dialog`,
          }),
        })),
        (t[57] = ue))
      : (ue = t[57]),
      (F = (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-1.5`,
        children: [
          ue,
          (0, X.jsx)(zn, {
            allowAllowed: b && P,
            allowRequiresApproval: b,
            defaultApprovalMode: Gn(a, `origin`, n, O?.canonicalPattern ?? ``),
            disabled: v,
            labelId: `browser-use-add-browsing-label`,
            resource: `origin`,
            value: f,
            valueId: `browser-use-add-browsing-value`,
            variant: `form`,
            onSelect: p,
          }),
        ],
      })),
      (L = g
        ? o.map((e) => {
            if (e === `origin`) return null;
            let t = `browser-use-add-${e}-label`,
              r = `browser-use-add-${e}-value`;
            return (0, X.jsxs)(
              `div`,
              {
                className: `flex flex-col gap-1.5`,
                children: [
                  (0, X.jsx)(`span`, { id: t, className: `text-sm font-medium`, children: Wn(e) }),
                  (0, X.jsx)(zn, {
                    allowAllowed: P && Lt(n, O?.canonicalPattern ?? ``, e),
                    allowRequiresApproval: Lt(n, O?.canonicalPattern ?? ``, e),
                    defaultApprovalMode: Gn(a, e, n, O?.canonicalPattern ?? ``),
                    disabled: v,
                    labelId: t,
                    resource: e,
                    value: m[e],
                    valueId: r,
                    variant: `form`,
                    onSelect: (t) => {
                      h({ ...m, [e]: t });
                    },
                  }),
                ],
              },
              e,
            );
          })
        : null),
      (t[0] = m),
      (t[1] = n),
      (t[2] = l),
      (t[3] = v),
      (t[4] = r),
      (t[5] = i),
      (t[6] = u),
      (t[7] = a),
      (t[8] = s),
      (t[9] = g),
      (t[10] = f),
      (t[11] = o),
      (t[12] = x),
      (t[13] = S),
      (t[14] = C),
      (t[15] = w),
      (t[16] = T),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O),
      (t[20] = k),
      (t[21] = A),
      (t[22] = j),
      (t[23] = M),
      (t[24] = F),
      (t[25] = L),
      (t[26] = R),
      (t[27] = z),
      (t[28] = ee),
      (t[29] = B),
      (t[30] = ne));
  } else
    ((S = t[13]),
      (C = t[14]),
      (w = t[15]),
      (T = t[16]),
      (E = t[17]),
      (D = t[18]),
      (O = t[19]),
      (k = t[20]),
      (A = t[21]),
      (j = t[22]),
      (M = t[23]),
      (F = t[24]),
      (L = t[25]),
      (R = t[26]),
      (z = t[27]),
      (ee = t[28]),
      (B = t[29]),
      (ne = t[30]));
  let H;
  t[58] !== E || t[59] !== O
    ? ((H =
        O != null && !E
          ? (0, X.jsx)(`span`, {
              className: `text-xs text-secondary`,
              role: `status`,
              children: (0, X.jsx)(V, {
                id: `settings.browserUse.sitePermissions.addDialog.matchesDefaults`,
                defaultMessage: `These permissions match the defaults, so adding this site would not change anything`,
                description: `Explanation shown when the add site permission button is disabled because every permission inherits the current default`,
              }),
            })
          : null),
      (t[58] = E),
      (t[59] = O),
      (t[60] = H))
    : (H = t[60]);
  let re;
  t[61] !== S || t[62] !== A || t[63] !== H || t[64] !== M || t[65] !== F || t[66] !== L
    ? ((re = (0, X.jsxs)(S, { className: A, children: [M, F, L, H] })),
      (t[61] = S),
      (t[62] = A),
      (t[63] = H),
      (t[64] = M),
      (t[65] = F),
      (t[66] = L),
      (t[67] = re))
    : (re = t[67]);
  let U;
  t[68] !== v || t[69] !== g || t[70] !== o.length
    ? ((U =
        !g && o.length > 1
          ? (0, X.jsx)(gt, {
              className: `me-auto`,
              color: `ghost`,
              disabled: v,
              onClick: () => {
                _(!0);
              },
              type: `button`,
              children: (0, X.jsx)(V, {
                id: `settings.browserUse.sitePermissions.addDialog.moreOptions`,
                defaultMessage: `More options`,
                description: `Button label to reveal advanced options when adding browser site permissions`,
              }),
            })
          : null),
      (t[68] = v),
      (t[69] = g),
      (t[70] = o.length),
      (t[71] = U))
    : (U = t[71]);
  let W;
  t[72] !== r || t[73] !== k
    ? ((W = () => {
        (k(), r(!1));
      }),
      (t[72] = r),
      (t[73] = k),
      (t[74] = W))
    : (W = t[74]);
  let G;
  t[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, X.jsx)(V, {
        id: `settings.browserUse.domains.addDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for add browser domain dialog`,
      })),
      (t[75] = G))
    : (G = t[75]);
  let K;
  t[76] !== v || t[77] !== W
    ? ((K = (0, X.jsx)(gt, {
        color: `outline`,
        disabled: v,
        onClick: W,
        type: `button`,
        children: G,
      })),
      (t[76] = v),
      (t[77] = W),
      (t[78] = K))
    : (K = t[78]);
  let q = O == null || !E || v || T || D,
    ue;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, X.jsx)(V, {
        id: `settings.browserUse.domains.addDialogConfirm`,
        defaultMessage: `Add`,
        description: `Confirm button label for add browser domain dialog`,
      })),
      (t[79] = ue))
    : (ue = t[79]);
  let fe;
  t[80] !== v || t[81] !== q
    ? ((fe = (0, X.jsx)(gt, {
        color: `primary`,
        disabled: q,
        loading: v,
        type: `submit`,
        children: ue,
      })),
      (t[80] = v),
      (t[81] = q),
      (t[82] = fe))
    : (fe = t[82]);
  let pe;
  t[83] !== T || t[84] !== fe
    ? ((pe = (0, X.jsx)(Zt, { managed: T, children: fe })), (t[83] = T), (t[84] = fe), (t[85] = pe))
    : (pe = t[85]);
  let me;
  t[86] !== U || t[87] !== K || t[88] !== pe
    ? ((me = (0, X.jsx)(we, { children: (0, X.jsxs)(oe, { children: [U, K, pe] }) })),
      (t[86] = U),
      (t[87] = K),
      (t[88] = pe),
      (t[89] = me))
    : (me = t[89]);
  let he;
  t[90] !== C || t[91] !== re || t[92] !== me || t[93] !== R || t[94] !== z || t[95] !== ee
    ? ((he = (0, X.jsxs)(C, { as: R, onSubmit: z, children: [ee, re, me] })),
      (t[90] = C),
      (t[91] = re),
      (t[92] = me),
      (t[93] = R),
      (t[94] = z),
      (t[95] = ee),
      (t[96] = he))
    : (he = t[96]);
  let ge;
  return (
    t[97] !== w || t[98] !== j || t[99] !== he || t[100] !== B || t[101] !== ne
      ? ((ge = (0, X.jsx)(w, { open: B, onOpenChange: ne, size: j, children: he })),
        (t[97] = w),
        (t[98] = j),
        (t[99] = he),
        (t[100] = B),
        (t[101] = ne),
        (t[102] = ge))
      : (ge = t[102]),
    ge
  );
}
function Un(e) {
  return e !== "default";
}
function Wn(e) {
  switch (e) {
    case `origin`:
      return (0, X.jsx)(V, {
        id: `settings.browserUse.sitePermissions.websiteAccess`,
        defaultMessage: `Browse`,
        description: `Browse label for custom browser site permissions`,
      });
    case `download`:
      return (0, X.jsx)(V, {
        id: `settings.browserUse.sitePermissions.downloads`,
        defaultMessage: `Download`,
        description: `Download label for custom browser site permissions`,
      });
    case `upload`:
      return (0, X.jsx)(V, {
        id: `settings.browserUse.sitePermissions.uploads`,
        defaultMessage: `Upload`,
        description: `Upload label for custom browser site permissions`,
      });
    case `fullCdp`:
      return (0, X.jsx)(V, {
        id: `settings.browserUse.sitePermissions.matrixCdpAccess`,
        defaultMessage: `Debug / CDP`,
        description: `Debug label for custom browser site permissions`,
      });
  }
}
function Gn(e, t, n, r) {
  let i = {
    origin: e.approvalMode,
    download: e.downloadApprovalMode,
    upload: e.uploadApprovalMode,
    fullCdp: void 0,
  }[t];
  return i === `neverAsk` && (!_t(n) || !Lt(n, r, `persistentApproval`)) ? `alwaysAsk` : i;
}
function Kn(e, t, n) {
  if (e === `ask` || (e === "default" && n === `alwaysAsk`))
    return (0, X.jsx)(V, {
      id: `settings.browserUse.sitePermissions.approvalValue.requiresApproval`,
      defaultMessage: `Requires approval`,
      description: `Browser site permission that has no persistent approval and uses the default approval flow`,
    });
  if (t !== `fullCdp` && (e === `allowed` || (e === "default" && n === `neverAsk`)))
    return (0, X.jsx)(V, {
      id: `settings.browserUse.sitePermissions.approvalValue.alwaysAllow`,
      defaultMessage: `Always allow`,
      description: `Browser site permission with persistent approval for browsing, downloads, or uploads`,
    });
  switch (e) {
    case `default`:
      return (0, X.jsx)(V, {
        id: `settings.browserUse.sitePermissions.value.useDefault`,
        defaultMessage: `Use default`,
        description: `Option that removes a custom browser site permission so it inherits its defaults`,
      });
    case `allowed`:
      return (0, X.jsx)(V, {
        id: `settings.browserUse.sitePermissions.value.allowed`,
        defaultMessage: `Allow`,
        description: `Allowed value label for browser use site capabilities`,
      });
    case `denied`:
      return (0, X.jsx)(V, {
        id: `settings.browserUse.sitePermissions.value.denied`,
        defaultMessage: `Block`,
        description: `Denied value label for browser use site permissions table`,
      });
  }
}
function qn() {
  return (0, X.jsx)(V, {
    id: `settings.browserUse.sitePermissions.saveError`,
    defaultMessage: `Unable to save site permissions`,
    description: `Toast shown when saving browser site permissions fails`,
  });
}
var Jn,
  Yn,
  X,
  Xn,
  Zn,
  Qn,
  $n,
  er = e(() => {
    ((Jn = r()),
      at(),
      nt(),
      B(),
      Me(),
      s(),
      kt(),
      (Yn = t(n(), 1)),
      K(),
      ht(),
      L(),
      Oe(),
      Ce(),
      F(),
      dt(),
      S(),
      w(),
      he(),
      pt(),
      ze(),
      z(),
      Se(),
      Dt(),
      q(),
      M(),
      Bt(),
      H(),
      R(),
      nn(),
      sn(),
      Dn(),
      (X = je()),
      (Xn = [`default`, `ask`, `allowed`, `denied`]),
      (Zn = { origin: `origin`, download: `download`, upload: `upload`, fullCdp: `fullCdp` }),
      (Qn = { download: `default`, upload: `default`, fullCdp: `default` }),
      ($n = { origin: `default`, ...Qn }));
  });
function tr(e) {
  let t = (0, nr.c)(15),
    { backend: n } = e,
    r = P(),
    a = i(n !== `iab` || De),
    { data: o, isLoading: s } = i(Pt),
    c = wt(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, rr.jsx)(V, {
        id: `settings.browserUse.webMcp.label`,
        defaultMessage: `Enable site tools`,
        description: `Label for the browser WebMCP setting`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] === a
    ? (u = t[2])
    : ((u = a
        ? (0, rr.jsx)(V, {
            id: `settings.browserUse.webMcp.description`,
            defaultMessage: `Allow ChatGPT to discover and call site tools exposed by websites, including WebMCP`,
            description: `Description for the browser WebMCP setting`,
          })
        : (0, rr.jsx)(V, {
            id: `settings.browserUse.webMcp.unavailableDescription`,
            defaultMessage: `Site tools aren't available for this account`,
            description: `Explanation for a disabled WebMCP toggle when neither feature rollout nor managed policy enables site tools`,
          })),
      (t[1] = a),
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
  let f = a && (o?.webMcpEnabled ?? !0),
    p = !a || s || c.isPending,
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
    ? ((h = (0, rr.jsx)(U, { ariaLabel: d, checked: f, disabled: p, onChange: m })),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g;
  return (
    t[12] !== u || t[13] !== h
      ? ((g = (0, rr.jsx)(W, { label: l, description: u, control: h })),
        (t[12] = u),
        (t[13] = h),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
var nr,
  rr,
  ir = e(() => {
    ((nr = r()), s(), K(), l(), G(), Dt(), me(), (rr = je()));
  });
function ar(e) {
  let t = (0, lr.c)(13),
    { backend: n, browserUseEnabled: r, showHistory: i, showWebMcp: a, siteSettingsRow: o } = e,
    s = r === void 0 || r,
    c = i === void 0 || i,
    l = a !== void 0 && a,
    u = o != null || (s && (c || l)),
    d;
  t[0] !== n || t[1] !== s || t[2] !== u || t[3] !== c || t[4] !== l || t[5] !== o
    ? ((d = u
        ? (0, Z.jsxs)(ye, {
            children: [
              (0, Z.jsx)(ye.Header, {
                title:
                  n === `chrome`
                    ? (0, Z.jsx)(V, {
                        id: `settings.computerUse.chrome.policy.browserPermissions.title`,
                        defaultMessage: `Browser permissions`,
                        description: `Title for Chromium browser permissions settings section`,
                      })
                    : (0, Z.jsx)(V, {
                        id: `settings.browserUse.policy.browserPermissions.title`,
                        defaultMessage: `Browser permissions`,
                        description: `Title for browser use permissions settings section`,
                      }),
              }),
              (0, Z.jsx)(ye.Content, {
                children: (0, Z.jsxs)(x, {
                  children: [
                    o,
                    s
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            c && n === `chrome` ? (0, Z.jsx)(or, {}) : null,
                            c && n === `iab` ? (0, Z.jsx)(sr, {}) : null,
                            l ? (0, Z.jsx)(tr, { backend: n }) : null,
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
            children: [(0, Z.jsx)(On, { backend: n }), (0, Z.jsx)(Ht, { backend: n })],
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
function or() {
  let e = (0, lr.c)(3),
    t = Nt(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Z.jsx)(Kt, {})), (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = (0, Z.jsx)(cr, { backend: `chrome`, description: n, writeApprovalModeMutation: t })),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function sr() {
  let e = (0, lr.c)(3),
    t = Ft(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Z.jsx)(qt, {})), (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = (0, Z.jsx)(cr, { backend: `iab`, description: n, writeApprovalModeMutation: t })),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function cr(e) {
  let t = (0, lr.c)(62),
    { backend: n, description: r, writeApprovalModeMutation: a } = e,
    o = I(ie),
    { selectedHostId: s } = ae(),
    { data: c, isLoading: l } = i(Pt),
    { data: u, isPending: d } = E(be, s),
    f =
      (u?.configReadSucceeded === !0 ? u.config.browser_use?.allow_history_access : void 0) !== !1,
    p = n === `iab` ? c?.iabHistoryApprovalMode : c?.chromeHistoryApprovalMode,
    m;
  t[0] === s ? (m = t[1]) : ((m = { failClosed: !0, hostId: s }), (t[0] = s), (t[1] = m));
  let { data: h, isError: g, isPending: _ } = E(_e, m),
    v = h?.requirements ?? null,
    y = n === `iab` ? `iab` : `extension`,
    b;
  t[2] !== v || t[3] !== y ? ((b = bt(v, y)), (t[2] = v), (t[3] = y), (t[4] = b)) : (b = t[4]);
  let x = b,
    S;
  t[5] !== x || t[6] !== v
    ? ((S = x && vt(v, `history`)), (t[5] = x), (t[6] = v), (t[7] = S))
    : (S = t[7]);
  let C = S,
    w;
  t[8] !== v || t[9] !== C ? ((w = yt(v) && !C), (t[8] = v), (t[9] = C), (t[10] = w)) : (w = t[10]);
  let T = w,
    D;
  t[11] !== x || t[12] !== v
    ? ((D = x && _t(v)), (t[11] = x), (t[12] = v), (t[13] = D))
    : (D = t[13]);
  let O = D,
    k;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = {
        id: `alwaysAsk`,
        label: (0, Z.jsx)(V, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, Z.jsx)(V, {
          id: `settings.browserUse.historyApproval.alwaysAsk.description`,
          defaultMessage: `Ask before accessing history`,
          description: `Description for browser use always ask history approval mode`,
        }),
      }),
      (t[14] = k))
    : (k = t[14]);
  let A;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = {
        id: `neverAsk`,
        label: (0, Z.jsx)(V, {
          id: `settings.browserUse.approval.neverAsk.label`,
          defaultMessage: `Always allow`,
          description: `Label for browser use never ask approval mode`,
        }),
        description: (0, Z.jsx)(V, {
          id: `settings.browserUse.historyApproval.neverAsk.description`,
          defaultMessage: `Access history without asking`,
          description: `Description for browser use never ask history approval mode`,
        }),
      }),
      (t[15] = A))
    : (A = t[15]);
  let j;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = [
        k,
        A,
        {
          id: `disabled`,
          label: (0, Z.jsx)(V, {
            id: `settings.browserUse.historyApproval.disabled.label`,
            defaultMessage: `Disable`,
            description: `Label for disabled browser history approval mode`,
          }),
          description: (0, Z.jsx)(V, {
            id: `settings.browserUse.historyApproval.disabled.description`,
            defaultMessage: `Do not allow access to history`,
            description: `Description for disabled browser history approval mode`,
          }),
        },
      ]),
      (t[16] = j))
    : (j = t[16]);
  let M = j,
    N;
  t[17] !== C || t[18] !== p || t[19] !== f || t[20] !== O
    ? ((N = p),
      !C || !f ? (N = `disabled`) : p === `neverAsk` && !O && (N = `alwaysAsk`),
      (t[17] = C),
      (t[18] = p),
      (t[19] = f),
      (t[20] = O),
      (t[21] = N))
    : (N = t[21]);
  let P;
  t[22] === N ? (P = t[23]) : ((P = M.find((e) => e.id === N) ?? M[0]), (t[22] = N), (t[23] = P));
  let F = P,
    L = l || _ || d,
    R = a.isPending,
    z;
  t[24] !== C ||
  t[25] !== p ||
  t[26] !== f ||
  t[27] !== R ||
  t[28] !== O ||
  t[29] !== o ||
  t[30] !== s ||
  t[31] !== u ||
  t[32] !== a
    ? ((z = async (e) => {
        if (!((e === p && f) || R || (!C && e !== `disabled`) || (e === `neverAsk` && !O)))
          try {
            if (e === `disabled`) {
              u?.configReadSucceeded === !0 && Object.hasOwn(u.config, `browser_use`)
                ? await Mt(o, s, u, { capability: `history`, enabled: !1 })
                : await a.mutateAsync(e);
              return;
            }
            (e !== p && (await a.mutateAsync(e)),
              f || (await Mt(o, s, u, { capability: `history`, enabled: !0 })));
          } catch {
            o.get(se).danger(
              (0, Z.jsx)(V, {
                id: `settings.browserUse.historyApproval.saveError`,
                defaultMessage: `Unable to save history setting`,
                description: `Toast shown when saving browser use history approval mode fails`,
              }),
            );
          }
      }),
      (t[24] = C),
      (t[25] = p),
      (t[26] = f),
      (t[27] = R),
      (t[28] = O),
      (t[29] = o),
      (t[30] = s),
      (t[31] = u),
      (t[32] = a),
      (t[33] = z))
    : (z = t[33]);
  let B = z,
    te;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Z.jsx)(`span`, {
        className: `inline-flex items-center gap-2`,
        children: (0, Z.jsx)(V, {
          id: `settings.browserUse.historyApproval.label`,
          defaultMessage: `History`,
          description: `Label for browser use history approval mode setting`,
        }),
      })),
      (t[34] = te))
    : (te = t[34]);
  let H;
  t[35] !== r || t[36] !== T
    ? ((H = T
        ? (0, Z.jsx)(V, {
            id: `settings.browserUse.historyApproval.managedDescription`,
            defaultMessage: `History access is disabled by your organization`,
            description: `Explanation that an enterprise policy disables browser history access`,
          })
        : r),
      (t[35] = r),
      (t[36] = T),
      (t[37] = H))
    : (H = t[37]);
  let re = L || g || R || !C,
    U = L || g || R || !C,
    G;
  t[38] === T
    ? (G = t[39])
    : ((G = T ? (0, Z.jsx)(ut, { className: `text-secondary` }) : null), (t[38] = T), (t[39] = G));
  let oe = F?.label,
    K;
  t[40] === oe
    ? (K = t[41])
    : ((K = (0, Z.jsx)(`span`, { className: `truncate`, children: oe })),
      (t[40] = oe),
      (t[41] = K));
  let ce;
  t[42] !== U || t[43] !== G || t[44] !== K
    ? ((ce = (0, Z.jsxs)(ee, { className: `w-[152px]`, disabled: U, children: [G, K] })),
      (t[42] = U),
      (t[43] = G),
      (t[44] = K),
      (t[45] = ce))
    : (ce = t[45]);
  let q;
  t[46] !== N || t[47] !== B || t[48] !== C || t[49] !== R || t[50] !== O
    ? ((q = (0, Z.jsx)(`div`, {
        className: `flex flex-col`,
        children: M.map((e) => {
          let t = e.id === N;
          return (0, Z.jsx)(
            xe.Item,
            {
              allowWrap: !0,
              disabled: R || (!C && e.id !== `disabled`) || (e.id === `neverAsk` && !O),
              rightIconAsset: t ? it : void 0,
              onSelect: () => {
                B(e.id);
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
      (t[46] = N),
      (t[47] = B),
      (t[48] = C),
      (t[49] = R),
      (t[50] = O),
      (t[51] = q))
    : (q = t[51]);
  let le;
  t[52] !== re || t[53] !== ce || t[54] !== q
    ? ((le = (0, Z.jsx)(ne, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: re,
        triggerButton: ce,
        children: q,
      })),
      (t[52] = re),
      (t[53] = ce),
      (t[54] = q),
      (t[55] = le))
    : (le = t[55]);
  let ue;
  t[56] !== T || t[57] !== le
    ? ((ue = (0, Z.jsx)(Zt, { managed: T, children: le })), (t[56] = T), (t[57] = le), (t[58] = ue))
    : (ue = t[58]);
  let de;
  return (
    t[59] !== H || t[60] !== ue
      ? ((de = (0, Z.jsx)(W, { label: te, description: H, control: ue })),
        (t[59] = H),
        (t[60] = ue),
        (t[61] = de))
      : (de = t[61]),
    de
  );
}
var lr,
  Z,
  ur = e(() => {
    ((lr = r()),
      at(),
      s(),
      kt(),
      K(),
      Ce(),
      dt(),
      he(),
      z(),
      Se(),
      Dt(),
      Gt(),
      Xt(),
      nn(),
      er(),
      ir(),
      q(),
      M(),
      me(),
      H(),
      R(),
      (Z = je()));
  });
function dr(e) {
  let t = (0, fr.c)(18),
    { backend: n, browserUseEnabled: r, showHistory: i, showWebMcp: a, siteSettingsRow: o } = e,
    s = r === void 0 || r,
    c = i === void 0 || i,
    l = a !== void 0 && a,
    { selectedHostId: u } = ae(),
    d = E(At, u);
  if (d === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Vt, {
            children: (0, Q.jsx)(V, {
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
  if (d === `error`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(v, {
            layout: `settings-row`,
            children: (0, Q.jsx)(V, {
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
  if (d === `supported`) {
    let e;
    return (
      t[2] !== n || t[3] !== s || t[4] !== c || t[5] !== l || t[6] !== o
        ? ((e = (0, Q.jsx)(ar, {
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
  let f;
  t[8] !== n || t[9] !== s || t[10] !== l || t[11] !== o
    ? ((f =
        o != null || (s && l)
          ? (0, Q.jsxs)(ye, {
              children: [
                (0, Q.jsx)(ye.Header, {
                  title:
                    n === `chrome`
                      ? (0, Q.jsx)(V, {
                          id: `settings.computerUse.chrome.permissions.title`,
                          defaultMessage: `Permissions`,
                          description: `Title for Chromium browser permissions settings section`,
                        })
                      : (0, Q.jsx)(V, {
                          id: `settings.browserUse.permissions.title`,
                          defaultMessage: `Permissions`,
                          description: `Title for browser use permissions settings section`,
                        }),
                }),
                (0, Q.jsx)(ye.Content, {
                  children: (0, Q.jsxs)(x, {
                    children: [o, s && l ? (0, Q.jsx)(tr, { backend: n }) : null],
                  }),
                }),
              ],
            })
          : null),
      (t[8] = n),
      (t[9] = s),
      (t[10] = l),
      (t[11] = o),
      (t[12] = f))
    : (f = t[12]);
  let p;
  t[13] === s ? (p = t[14]) : ((p = s ? (0, Q.jsx)(Ht, {}) : null), (t[13] = s), (t[14] = p));
  let m;
  return (
    t[15] !== f || t[16] !== p
      ? ((m = (0, Q.jsxs)(Q.Fragment, { children: [f, p] })), (t[15] = f), (t[16] = p), (t[17] = m))
      : (m = t[17]),
    m
  );
}
var fr,
  Q,
  pr = e(() => {
    ((fr = r()), s(), K(), S(), Dt(), Gt(), ur(), ir(), q(), M(), Bt(), R(), (Q = je()));
  });
function mr(e) {
  let t = (0, br.c)(35),
    {
      emptyStateTitle: n,
      installButtonLabel: r,
      items: i,
      pluginsQuery: a,
      selectedHostId: s,
      unavailableItems: c,
    } = e,
    l;
  t[0] === c ? (l = t[1]) : ((l = c === void 0 ? [] : c), (t[0] = c), (t[1] = l));
  let u = l,
    d = g(),
    { installPlugin: f, status: p } = Ie(),
    m;
  t[2] === s ? (m = t[3]) : ((m = { hostId: s }), (t[2] = s), (t[3] = m));
  let { pendingPluginId: h, setPluginEnabled: _ } = fe(m),
    y;
  t[4] === s ? (y = t[5]) : ((y = { hostId: s }), (t[4] = s), (t[5] = y));
  let { pendingUninstallPluginId: b, uninstallPlugin: S } = k(y),
    C = p?.hostId === s ? p.pluginId : null,
    w = h ?? C ?? b,
    T = i.length + u.length;
  if (a.isLoading && T === 0) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(x, {
            children: (0, $.jsx)(Vt, {
              children: (0, $.jsx)(V, {
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
        : ((e = (0, $.jsx)(x, {
            children:
              a.retry == null
                ? (0, $.jsx)(v, { layout: `settings-row`, children: a.errorMessage })
                : (0, $.jsx)(W, {
                    control: (0, $.jsx)(gt, {
                      color: `secondary`,
                      size: `toolbar`,
                      onClick: () => void a.retry?.(),
                      children: (0, $.jsx)(V, {
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
        : ((e = (0, $.jsx)(x, {
            children: (0, $.jsx)(v, { layout: `settings-row`, children: n }),
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
    t[17] !== s ||
    t[18] !== _ ||
    t[19] !== S
  ) {
    let e;
    (t[21] !== r ||
    t[22] !== f ||
    t[23] !== d ||
    t[24] !== w ||
    t[25] !== a.reload ||
    t[26] !== s ||
    t[27] !== _ ||
    t[28] !== S
      ? ((e = (e) =>
          e.kind === `disclosure`
            ? (0, $.jsx)(
                `button`,
                {
                  "aria-expanded": e.expanded,
                  className: `group w-full cursor-interaction text-start focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
                  onClick: e.onToggleExpanded,
                  type: `button`,
                  children: (0, $.jsx)(W, {
                    className: `min-h-[60px]`,
                    control: (0, $.jsx)(Ae, {
                      className: Ne(`text-secondary`, e.expanded && `rotate-180`),
                      asset: rt,
                      "aria-hidden": !1,
                    }),
                    description: e.description,
                    icon: (0, $.jsx)(`span`, {
                      className: `flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent`,
                      children:
                        e.icon ??
                        (0, $.jsx)(Ae, {
                          className: `text-secondary`,
                          "aria-hidden": !1,
                          asset: ct,
                        }),
                    }),
                    label: e.title,
                  }),
                },
                e.id,
              )
            : e.kind === `unavailable`
              ? (0, $.jsx)(gr, { item: e }, e.id)
              : e.kind === `app`
                ? (0, $.jsx)(
                    W,
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
                                  : (0, $.jsx)(mt, {
                                      tooltipContent: e.toggleTooltip,
                                      children: (0, $.jsx)(U, {
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
                          (0, $.jsx)(Ae, {
                            className: `text-secondary`,
                            "aria-hidden": !1,
                            asset: ct,
                          }),
                      }),
                      label: e.title,
                    },
                    e.id,
                  )
                : (0, $.jsx)(
                    yr,
                    {
                      installButtonLabel: r,
                      isPending: w === e.plugin.plugin.id,
                      item: e,
                      onInstallPlugin: (t) => {
                        f(t, {
                          browserFamily: e.browserFamily,
                          hostId: s,
                          marketplaceAnalytics: Pe.settings,
                          onSuccess: a.reload,
                        });
                      },
                      onOpenPluginDetails: (e) => {
                        d(ge(e, { hostId: s }));
                      },
                      onToggleInstalledPluginEnabled: (t, n) => {
                        _({
                          pluginId: t.plugin.id,
                          pluginDisplayName: e.displayName ?? ve(t),
                          enabled: n,
                        });
                      },
                      onUninstallPlugin: (e) => {
                        S({
                          marketplaceName: e.marketplaceName,
                          pluginDisplayName: ve(e),
                          pluginId: e.plugin.id,
                          pluginName: e.plugin.name,
                          requestPluginId: o(e),
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
        (t[26] = s),
        (t[27] = _),
        (t[28] = S),
        (t[29] = e))
      : (e = t[29]),
      (E = i.map(e)),
      (t[11] = r),
      (t[12] = f),
      (t[13] = i),
      (t[14] = d),
      (t[15] = w),
      (t[16] = a.reload),
      (t[17] = s),
      (t[18] = _),
      (t[19] = S),
      (t[20] = E));
  } else E = t[20];
  let D;
  t[30] === u ? (D = t[31]) : ((D = u.map(hr)), (t[30] = u), (t[31] = D));
  let O;
  return (
    t[32] !== E || t[33] !== D
      ? ((O = (0, $.jsx)($.Fragment, { children: (0, $.jsxs)(x, { children: [E, D] }) })),
        (t[32] = E),
        (t[33] = D),
        (t[34] = O))
      : (O = t[34]),
    O
  );
}
function hr(e) {
  return (0, $.jsx)(gr, { item: e }, e.id);
}
function gr(e) {
  let t = (0, br.c)(8),
    { item: n } = e,
    r;
  t[0] === n.icon
    ? (r = t[1])
    : ((r =
        n.icon ?? (0, $.jsx)(Ae, { className: `text-secondary`, "aria-hidden": !1, asset: ct })),
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
      ? ((a = (0, $.jsx)(W, {
          className: `min-h-[60px] opacity-60`,
          label: n.title,
          description: n.description,
          icon: i,
          control: _r,
        })),
        (t[4] = n.description),
        (t[5] = n.title),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function _r(e) {
  return (0, $.jsx)(U, { ...e, checked: !1, disabled: !0, onChange: vr });
}
function vr() {}
function yr(e) {
  let t = (0, br.c)(41),
    {
      installButtonLabel: n,
      isPending: r,
      item: i,
      onInstallPlugin: a,
      onOpenPluginDetails: o,
      onToggleInstalledPluginEnabled: s,
      onUninstallPlugin: c,
    } = e,
    l = P(),
    u,
    f,
    p,
    m,
    h;
  if (
    t[0] !== n ||
    t[1] !== l ||
    t[2] !== r ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== c
  ) {
    let e = i.displayName ?? ve(i.plugin),
      g = i.plugin.plugin.installed;
    m = `group flex min-h-[60px] items-center gap-3 px-4 py-3 text-sm hover:bg-text/5 max-sm:flex-wrap`;
    let _;
    t[13] !== i.plugin || t[14] !== o
      ? ((_ = () => {
          o(i.plugin);
        }),
        (t[13] = i.plugin),
        (t[14] = o),
        (t[15] = _))
      : (_ = t[15]);
    let v = i.showIconBorder === !1 ? `border-0` : `border border-default`,
      y;
    t[16] === v
      ? (y = t[17])
      : ((y = Ne(
          `flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-transparent`,
          v,
        )),
        (t[16] = v),
        (t[17] = y));
    let b =
        i.icon ??
        (0, $.jsx)(d, {
          alt: e,
          className: `h-full w-full object-contain`,
          logoDarkUrl: i.plugin.logoDarkPath,
          logoUrl: i.plugin.logoPath,
          fallback: (0, $.jsx)(ue, { className: `icon-md text-secondary` }),
        }),
      x;
    t[18] !== y || t[19] !== b
      ? ((x = (0, $.jsx)(`span`, { className: y, children: b })),
        (t[18] = y),
        (t[19] = b),
        (t[20] = x))
      : (x = t[20]);
    let S;
    t[21] === i.title
      ? (S = t[22])
      : ((S = (0, $.jsx)(`div`, {
          className: `min-w-0 truncate text-sm font-medium text-default`,
          children: i.title,
        })),
        (t[21] = i.title),
        (t[22] = S));
    let C;
    t[23] !== i.description || t[24] !== i.descriptionIndicator
      ? ((C =
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
                            className: Ne(
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
        (t[25] = C))
      : (C = t[25]);
    let w;
    (t[26] !== S || t[27] !== C
      ? ((w = (0, $.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-0.5`,
          children: [S, C],
        })),
        (t[26] = S),
        (t[27] = C),
        (t[28] = w))
      : (w = t[28]),
      t[29] !== x || t[30] !== w || t[31] !== _
        ? ((h = (0, $.jsxs)(`button`, {
            className: `flex min-w-0 flex-1 cursor-interaction appearance-none items-center gap-3 border-0 bg-transparent p-0 text-start text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
            type: `button`,
            onClick: _,
            children: [x, w],
          })),
          (t[29] = x),
          (t[30] = w),
          (t[31] = _),
          (t[32] = h))
        : (h = t[32]),
      (u = `flex shrink-0 items-center gap-2`),
      (f = i.action),
      (p = g
        ? (0, $.jsxs)($.Fragment, {
            children: [
              i.showManageActions === !0
                ? (0, $.jsx)(`div`, {
                    className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
                    children: (0, $.jsxs)(ne, {
                      align: `end`,
                      contentWidth: `sm`,
                      triggerButton: (0, $.jsx)(Le, {
                        label: l.formatMessage({
                          id: `settings.pluginControls.moreActions`,
                          defaultMessage: `More actions`,
                          description: `Aria label for the more actions menu in settings plugin controls`,
                        }),
                      }),
                      children: [
                        i.onTryInChat == null
                          ? null
                          : (0, $.jsx)(xe.Item, {
                              leftIconAsset: st,
                              onSelect: () => {
                                i.onTryInChat?.(i.plugin);
                              },
                              children: (0, $.jsx)(V, {
                                id: `settings.pluginControls.tryItNow`,
                                defaultMessage: `Try now`,
                                description: `Menu item label for trying a plugin in task from settings`,
                              }),
                            }),
                        (0, $.jsx)(xe.Item, {
                          leftIconAsset: Ze,
                          className: `!text-danger`,
                          leftIconClassName: `text-danger`,
                          disabled: r,
                          onSelect: () => {
                            c(i.plugin);
                          },
                          children: (0, $.jsx)(V, {
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
                : (0, $.jsx)(mt, {
                    tooltipContent: i.plugin.plugin.enabled
                      ? (0, $.jsx)(V, {
                          id: `settings.pluginControls.disableToggleTooltip`,
                          defaultMessage: `Disable {pluginName}`,
                          description: `Tooltip label for disabling a plugin from settings`,
                          values: { pluginName: e },
                        })
                      : (0, $.jsx)(V, {
                          id: `settings.pluginControls.enableToggleTooltip`,
                          defaultMessage: `Enable {pluginName}`,
                          description: `Tooltip label for enabling a plugin from settings`,
                          values: { pluginName: e },
                        }),
                    children: (0, $.jsx)(U, {
                      checked: i.plugin.plugin.enabled,
                      disabled: r,
                      ariaLabel: l.formatMessage(
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
        : (0, $.jsx)(mt, {
            tooltipContent: (0, $.jsx)(V, {
              id: `settings.pluginControls.installTooltip`,
              defaultMessage: `Install {pluginName}`,
              description: `Tooltip label for installing a plugin from settings`,
              values: { pluginName: e },
            }),
            children: (0, $.jsx)(`div`, {
              children: (0, $.jsx)(gt, {
                "aria-label": l.formatMessage(
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
      (t[1] = l),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = u),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h));
  } else ((u = t[8]), (f = t[9]), (p = t[10]), (m = t[11]), (h = t[12]));
  let g;
  t[33] !== u || t[34] !== f || t[35] !== p
    ? ((g = (0, $.jsxs)(`div`, { className: u, children: [f, p] })),
      (t[33] = u),
      (t[34] = f),
      (t[35] = p),
      (t[36] = g))
    : (g = t[36]);
  let _;
  return (
    t[37] !== m || t[38] !== h || t[39] !== g
      ? ((_ = (0, $.jsxs)(`div`, { className: m, children: [h, g] })),
        (t[37] = m),
        (t[38] = h),
        (t[39] = g),
        (t[40] = _))
      : (_ = t[40]),
    _
  );
}
var br,
  $,
  xr = e(() => {
    ((br = r()),
      et(),
      ot(),
      $e(),
      Xe(),
      Me(),
      K(),
      re(),
      O(),
      ht(),
      Ce(),
      F(),
      S(),
      Ve(),
      G(),
      pt(),
      a(),
      b(),
      Fe(),
      Re(),
      ke(),
      m(),
      _(),
      Bt(),
      me(),
      R(),
      ($ = je()));
  });
function Sr(e, t, n) {
  let r = e.filter((e) => e.plugin.name === t || e.plugin.id.split(`@`)[0] === t),
    i = qe(T());
  return (
    (i == null ? void 0 : r.find((e) => e.marketplaceName === i)) ??
    r.find((e) => Ye(e.marketplaceName)) ??
    r.find((e) => e.marketplaceName === `openai-curated`) ??
    r.find((e) => A(n, e.marketplacePath)) ??
    null
  );
}
var Cr = e(() => {
  (Je(), f(), j());
});
export { dr as a, xr as i, Sr as n, pr as o, mr as r, Cr as t };
//# sourceMappingURL=settings-plugin-selection-3cc0bd8c294f.js.map
