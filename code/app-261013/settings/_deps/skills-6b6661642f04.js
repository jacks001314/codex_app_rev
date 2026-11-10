import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $X as n,
  ADt as r,
  AH as i,
  AO as a,
  BJ as o,
  CO as s,
  Cot as c,
  Ext as l,
  Fat as u,
  HZ as d,
  IDt as f,
  IF as p,
  Iot as m,
  Ixt as h,
  JC as g,
  Kat as _,
  Lot as v,
  Mz as y,
  NB as b,
  Nz as x,
  Pat as S,
  Pxt as C,
  QC as w,
  TJ as T,
  TO as E,
  VDt as D,
  VZ as O,
  Vxt as k,
  Xot as A,
  Yot as j,
  _Mt as M,
  _O as ee,
  _xt as N,
  cO as te,
  cz as P,
  e3 as F,
  eZ as I,
  fO as L,
  gMt as R,
  hot as z,
  iw as ne,
  jDt as B,
  lO as re,
  lot as V,
  mO as ie,
  nst as ae,
  oO as oe,
  qC as se,
  qat as H,
  sO as ce,
  sz as U,
  t3 as W,
  tst as G,
  tw as le,
  vF as ue,
  vO as de,
  vzt as fe,
  wot as pe,
  wxt as me,
  xMt as he,
  yF as K,
  yzt as ge,
  zJ as _e,
  zxt as ve,
} from "./app-shared-bbfeca5e5737.js";
import {
  $1n as ye,
  A0 as be,
  BPr as xe,
  Bnn as Se,
  C2 as Ce,
  Cit as we,
  DPn as Te,
  Ek as Ee,
  Fin as De,
  Fur as Oe,
  Gdr as ke,
  Hin as Ae,
  Icr as je,
  JPn as Me,
  Jcr as Ne,
  Ka as Pe,
  Kur as Fe,
  Nur as Ie,
  O0 as Le,
  OPn as Re,
  Olr as ze,
  Pur as Be,
  Rcr as Ve,
  Stn as He,
  TPn as Ue,
  Tk as We,
  Udr as Ge,
  VPr as Ke,
  XPn as qe,
  Yur as Je,
  Za as Ye,
  a0n as Xe,
  akn as q,
  alr as Ze,
  btn as Qe,
  ekn as $e,
  fur as et,
  gdn as tt,
  hOr as nt,
  hdn as rt,
  htn as it,
  hzt as at,
  iPr as ot,
  idr as st,
  kPn as ct,
  lur as lt,
  mtn as ut,
  mzt as dt,
  ndr as ft,
  nkn as pt,
  no as mt,
  pOr as ht,
  pur as gt,
  ro as _t,
  sPr as vt,
  uur as yt,
  vdn as bt,
  w2 as xt,
  wit as St,
  ytn as Ct,
  znn as wt,
} from "./app-initial-5851df3f6cb1.js";
import { af as Tt, of as Et } from "./app-primary-fe8a450b3b04.js";
import { n as Dt, r as Ot } from "./plugin-connector-setup-a797a3cdb718.js";
import { a as kt, i as At, r as jt, t as Mt } from "./plugin-connected-account-links-8dea8c830000.js";
import { n as Nt, t as Pt } from "./settings-loading-row-bf72bf2df25d.js";
import { n as Ft, t as It } from "./card-tile-a92df345e9ab.js";
import { n as Lt, t as Rt } from "./profile-lock-17cb9817089d.js";
import { n as zt, t as Bt } from "./plugin-disabled-reason-9ae34b32db06.js";
import { n as Vt, r as Ht, t as Ut } from "./browser-extension-setup-messages-6594c525cd6e.js";
import { a as Wt, c as Gt, l as Kt, n as qt, o as Jt, s as Yt, t as Xt } from "./skill-card-95c13f424f06.js";
function Zt(e) {
  let t = (0, $t.c)(19),
    { template: n, managementUrl: r, onManageApps: i } = e,
    a = D(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `plugins.detail.includes.disabledByAdminBadge`,
        defaultMessage: `Disabled by admin`,
        description: `Tooltip label shown on an included app or app template row when it is disabled by admin on the plugin detail page`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s = o,
    c = r == null ? `opacity-60` : void 0,
    l;
  t[2] !== s || t[3] !== r || t[4] !== i
    ? ((l =
        r == null
          ? (0, J.jsx)(`span`, {
              className: `flex h-7 w-7 shrink-0 items-center justify-center text-secondary`,
              children: (0, J.jsx)(U, {
                tooltipContent: s,
                children: (0, J.jsx)(`span`, {
                  role: `img`,
                  "aria-label": s,
                  children: (0, J.jsx)(Rt, { className: `icon-sm shrink-0` }),
                }),
              }),
            })
          : (0, J.jsx)(Qt, { href: r, onManageApps: i })),
      (t[2] = s),
      (t[3] = r),
      (t[4] = i),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === n.description
    ? (u = t[7])
    : ((u = n.description ?? (0, J.jsx)(`span`, { "aria-hidden": !0 })), (t[6] = n.description), (t[7] = u));
  let d;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, J.jsx)(ut, { className: `icon-sm text-secondary` })), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== n.logoUrl || t[10] !== n.logoUrlDark || t[11] !== n.name
    ? ((f = (0, J.jsx)(dt, {
        alt: n.name,
        className: `icon-md`,
        logoDarkUrl: n.logoUrlDark,
        logoUrl: n.logoUrl,
        fallback: d,
      })),
      (t[9] = n.logoUrl),
      (t[10] = n.logoUrlDark),
      (t[11] = n.name),
      (t[12] = f))
    : (f = t[12]);
  let p;
  return (
    t[13] !== c || t[14] !== l || t[15] !== u || t[16] !== f || t[17] !== n.name
      ? ((p = (0, J.jsx)(It, {
          className: c,
          actions: l,
          actionsPlacement: `center`,
          description: u,
          descriptionClassName: `line-clamp-1`,
          icon: f,
          iconContainerVariant: `outline`,
          presentation: `row`,
          title: n.name,
        })),
        (t[13] = c),
        (t[14] = l),
        (t[15] = u),
        (t[16] = f),
        (t[17] = n.name),
        (t[18] = p))
      : (p = t[18]),
    p
  );
}
function Qt(e) {
  let t = (0, $t.c)(17),
    { href: n, onManageApps: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = n.startsWith(`/`)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] !== n || t[3] !== a
    ? ((o = a ? { to: n } : { href: n }), (t[2] = n), (t[3] = a), (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] !== n || t[6] !== a || t[7] !== r
    ? ((s = (e) => {
        (e.stopPropagation(),
          !a &&
            (r?.(),
            qe({ event: e, initiator: `open_in_browser_bridge`, href: n, openTarget: `external-browser` })));
      }),
      (t[5] = n),
      (t[6] = a),
      (t[7] = r),
      (t[8] = s))
    : (s = t[8]);
  let c;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, J.jsx)(f, {
        id: `plugins.detail.template.manageOnWeb`,
        defaultMessage: `Manage app`,
        description: `Open ChatGPT web to set up, reconnect, add, or remove connections for this app template`,
      })),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] !== n || t[11] !== a
    ? ((l = a ? null : (0, J.jsx)(Re, { className: `icon-xs`, href: n, openTarget: `external-browser` })),
      (t[10] = n),
      (t[11] = a),
      (t[12] = l))
    : (l = t[12]);
  let u;
  return (
    t[13] !== o || t[14] !== s || t[15] !== l
      ? ((u = (0, J.jsxs)(F, { ...o, color: `secondary`, size: `toolbar`, onClick: s, children: [c, l] })),
        (t[13] = o),
        (t[14] = s),
        (t[15] = l),
        (t[16] = u))
      : (u = t[16]),
    u
  );
}
var $t, J;
function en() {
  return (en = e(() => {
    (($t = fe()), B(), at(), W(), Me(), ct(), P(), it(), Lt(), Ft(), (J = he()));
  }))();
}
var Y;
function tn() {
  return (tn = e(() => {
    (B(),
      (Y = r({
        noAccountIdentity: {
          id: `plugins.detail.accounts.noAccountIdentity`,
          defaultMessage: `{connectorName} (no account linked)`,
          description: `Account identity in a connected app's account rows and settings, rename, and reconnect dialogs. Shown for a connection with auth type NONE and no provider email, name, or nickname. connectorName is the non-empty app display name or connector name. The parenthetical describes this connection's current state; it does not mean the app never supports sign-in. Short plain-text label; preserve app brand names.`,
        },
        accountIdentityFallback: {
          id: `plugins.detail.accounts.accountIdentityFallback`,
          defaultMessage: `Account`,
          description: `Last-resort account identity in a connected app's account rows and settings, rename, and reconnect dialogs when no provider identity, app name, or valid account-holder name is available. Custom link names appear separately below this short plain-text identity.`,
        },
        personalizedAccountIdentityFallback: {
          id: `plugins.detail.accounts.personalizedAccountIdentityFallback`,
          defaultMessage: `{userName}'s {appName} account`,
          description: `Fallback identity in a connected app's account rows and settings, rename, and reconnect dialogs when the current user directly owns the link and it has no provider email, name, or nickname. userName is the user's non-empty ChatGPT first name, or full name when the first name is unavailable; it is not the provider account name. appName is the non-empty canonical app display name or connector name, such as Figma. Custom link names appear separately. Short plain-text label; preserve app brand names.`,
        },
        holderAccountIdentityFallback: {
          id: `plugins.detail.accounts.holderAccountIdentityFallback`,
          defaultMessage: `{userName}'s account`,
          description: `Fallback identity in a connected app's account rows and settings, rename, and reconnect dialogs when the current user directly owns the link and no provider identity or app name is available. userName is the non-empty ChatGPT first name, or full name when the first name is unavailable; it is not the provider account name. Custom link names appear separately below this short plain-text identity.`,
        },
        appAccountIdentityFallback: {
          id: `plugins.detail.accounts.appAccountIdentityFallback`,
          defaultMessage: `{appName} account`,
          description: `Fallback identity in a connected app's account rows and settings, rename, and reconnect dialogs when no provider identity or valid account-holder name is available. Shared, other-user, and unknown-owner links use this owner-neutral label. appName is the non-empty canonical app display name or connector name, such as Figma. Custom link names appear separately below this short plain-text identity. Preserve app brand names.`,
        },
      })));
  }))();
}
function nn(e) {
  let n = (0, pn.c)(24),
    {
      accountContext: r,
      accountRowAction: i,
      app: a,
      connector: o,
      hostId: s,
      isMultiLinkEligible: c,
      variant: l,
    } = e,
    { authMethod: u, isLoading: d } = gt(),
    p = u === `chatgpt` || u === `chatgptAuthTokens`,
    m;
  n[0] === a.id ? (m = n[1]) : ((m = Fe(a.id)), (n[0] = a.id), (n[1] = m));
  let h = p && !!r.accountId && !!r.userId && o == null && c == null,
    g;
  n[2] !== m || n[3] !== h
    ? ((g = { ...m, enabled: h, retry: !1, staleTime: S.FIVE_MINUTES }), (n[2] = m), (n[3] = h), (n[4] = g))
    : (g = n[4]);
  let { data: _, isError: v, refetch: y } = A(g),
    b;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = { enabled: !1 }), (n[5] = b)) : (b = n[5]);
  let { isError: x, refetch: C } = yt(b),
    w = (!r.accountId || !r.userId) && x,
    T = o ?? _,
    E = (o == null && v) || w;
  if (!d && !p) return null;
  if (c == null && (T == null || E)) {
    let e;
    return (
      n[6] !== w || n[7] !== E || n[8] !== y || n[9] !== C
        ? ((e = (0, Z.jsx)(se, {
            children: E
              ? (0, Z.jsx)(le, {
                  label: (0, Z.jsx)(f, { ...Q.loadingError }),
                  control: (0, Z.jsx)(t, {
                    color: `ghost`,
                    onClick: () => void (w ? C() : y()),
                    children: (0, Z.jsx)(f, { ...Q.retry }),
                  }),
                })
              : (0, Z.jsx)(Pt, { children: (0, Z.jsx)(f, { ...Q.loading }) }),
          })),
          (n[6] = w),
          (n[7] = E),
          (n[8] = y),
          (n[9] = C),
          (n[10] = e))
        : (e = n[10]),
      e
    );
  }
  let D;
  n[11] !== a.id || n[12] !== T || n[13] !== c
    ? ((D = c ?? ke(a.id, T)), (n[11] = a.id), (n[12] = T), (n[13] = c), (n[14] = D))
    : (D = n[14]);
  let O = D;
  if (!O && l !== `settings`) return null;
  let k = `${s}:${r.userId}:${r.accountId}:${a.id}`,
    j;
  return (
    n[15] !== r ||
    n[16] !== i ||
    n[17] !== a ||
    n[18] !== O ||
    n[19] !== s ||
    n[20] !== o ||
    n[21] !== k ||
    n[22] !== l
      ? ((j = (0, Z.jsx)(
          rn,
          {
            accountContext: r,
            accountRowAction: i,
            app: a,
            canConnectAnotherAccount: O,
            connector: o,
            hostId: s,
            variant: l,
          },
          k,
        )),
        (n[15] = r),
        (n[16] = i),
        (n[17] = a),
        (n[18] = O),
        (n[19] = s),
        (n[20] = o),
        (n[21] = k),
        (n[22] = l),
        (n[23] = j))
      : (j = n[23]),
    j
  );
}
function rn(e) {
  let n = (0, pn.c)(122),
    {
      accountContext: r,
      accountRowAction: i,
      app: a,
      canConnectAnotherAccount: o,
      connector: s,
      hostId: u,
      variant: d,
    } = e,
    p = h(c),
    m = D(),
    g = r.accountId ?? null,
    _ = r.userId ?? null,
    y;
  n[0] !== g || n[1] !== _
    ? ((y = { accountId: g, userId: _ }), (n[0] = g), (n[1] = _), (n[2] = y))
    : (y = n[2]);
  let { data: b } = ve(Le, y),
    { nameAtLogin: x } = gt(),
    C;
  n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = { preview: !1 }), (n[3] = C)) : (C = n[3]);
  let { data: w } = Ae(void 0, C),
    T = b?.first_name?.trim() || (b == null ? x?.trim() : b.name?.trim()),
    E;
  w != null &&
    w.id === r.accountId &&
    (E = w.structure === `personal` ? (r.userId ?? void 0) : (w.account_user_id ?? void 0));
  let O = me(),
    k = l(),
    j = (0, X.useRef)(null),
    M = (0, X.useRef)(null),
    N = ae(),
    P;
  n[4] === a.id ? (P = n[5]) : ((P = Ge(a.id)), (n[4] = a.id), (n[5] = P));
  let F = P,
    I;
  n[6] === a.id ? (I = n[7]) : ((I = Fe(a.id)), (n[6] = a.id), (n[7] = I));
  let L = s == null && !!r.userId && !!r.accountId,
    R;
  n[8] !== I || n[9] !== L
    ? ((R = { ...I, enabled: L, retry: !1, staleTime: S.FIVE_MINUTES }), (n[8] = I), (n[9] = L), (n[10] = R))
    : (R = n[10]);
  let { data: ne, isPending: B, isError: V, isSuccess: se, refetch: H } = A(R),
    U = s ?? ne,
    W = r.accountId ?? null,
    G = r.userId ?? null,
    le = U?.id ?? a.id,
    ue;
  n[11] !== G || n[12] !== le || n[13] !== W
    ? ((ue = { accountId: W, userId: G, appId: le }), (n[11] = G), (n[12] = le), (n[13] = W), (n[14] = ue))
    : (ue = n[14]);
  let de = ue,
    fe = ve(At, de),
    pe = r.selection == null ? fe : r.selection.linkId,
    he;
  n[15] !== r.accountId || n[16] !== r.selection || n[17] !== p || n[18] !== de
    ? ((he = (e) => {
        p.get(ht) === (r.accountId ?? null) && (r.selection?.onChange(e), kt(p, de, e));
      }),
      (n[15] = r.accountId),
      (n[16] = r.selection),
      (n[17] = p),
      (n[18] = de),
      (n[19] = he))
    : (he = n[19]);
  let K = he,
    [ge, _e] = (0, X.useState)(null),
    [be, xe] = (0, X.useState)(null),
    Se,
    Ce;
  (n[20] !== r.accountId || n[21] !== r.userId || n[22] !== a.id || n[23] !== u || n[24] !== p
    ? ((Se = () => () => {
        M.current != null &&
          ($e(p, { accountId: r.accountId, appId: a.id, hostId: u, userId: r.userId }, M.current),
          (M.current = null));
      }),
      (Ce = [p, r.accountId, r.userId, a.id, u]),
      (n[20] = r.accountId),
      (n[21] = r.userId),
      (n[22] = a.id),
      (n[23] = u),
      (n[24] = p),
      (n[25] = Se),
      (n[26] = Ce))
    : ((Se = n[25]), (Ce = n[26])),
    (0, X.useEffect)(Se, Ce));
  let we;
  n[27] !== r.accountId || n[28] !== r.userId
    ? ((we = Ie({ accountId: r.accountId, userId: r.userId })),
      (n[27] = r.accountId),
      (n[28] = r.userId),
      (n[29] = we))
    : (we = n[29]);
  let Te = we,
    { data: Ee, isPending: De, isError: Oe, isSuccess: ke, refetch: je } = A(Te),
    Me;
  n[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((Me = { enabled: !1 }), (n[30] = Me)) : (Me = n[30]);
  let { isError: Pe, refetch: Re } = yt(Me),
    ze = (!r.accountId || !r.userId) && Pe,
    Ve = Ee == null ? void 0 : Mt(Ee, a.id),
    He,
    Ue,
    We;
  if (n[31] !== r.accountId || n[32] !== r.userId || n[33] !== a.id) {
    let e = ye(a.id);
    ((We = A),
      (He = e),
      (Ue = [...e.queryKey, r.accountId ?? ``, r.userId ?? ``]),
      (n[31] = r.accountId),
      (n[32] = r.userId),
      (n[33] = a.id),
      (n[34] = He),
      (n[35] = Ue),
      (n[36] = We));
  } else ((He = n[34]), (Ue = n[35]), (We = n[36]));
  let qe = d === `settings` && !o && Ve?.length === 1 && !Ve[0]?.owner_profile?.email?.trim(),
    Ye;
  n[37] !== He || n[38] !== Ue || n[39] !== qe
    ? ((Ye = { ...He, queryKey: Ue, staleTime: S.FIVE_MINUTES, enabled: qe }),
      (n[37] = He),
      (n[38] = Ue),
      (n[39] = qe),
      (n[40] = Ye))
    : (Ye = n[40]);
  let { data: Xe } = We(Ye),
    q = Ve?.map((e) =>
      !e.owner_profile?.email?.trim() && Xe?.id === e.id && Xe.owner_profile != null
        ? { ...e, owner_profile: { ...Xe.owner_profile, ...e.owner_profile, email: Xe.owner_profile.email } }
        : e,
    ),
    Ze;
  n[41] !== F || n[42] !== Te.queryKey
    ? ((Ze = [...Te.queryKey, `pending-account-rename`, F]), (n[41] = F), (n[42] = Te.queryKey), (n[43] = Ze))
    : (Ze = n[43]);
  let Qe = Ze,
    et;
  n[44] === Qe
    ? (et = n[45])
    : ((et = { enabled: !1, queryFn: ln, queryKey: Qe, staleTime: S.INFINITE }), (n[44] = Qe), (n[45] = et));
  let { data: nt } = A(et),
    rt = nt == null ? void 0 : q?.find((e) => e.id === nt.linkId),
    it = rt ?? q?.find((e) => e.id === pe) ?? q?.find(cn) ?? q?.[0],
    at = q?.find((e) => e.id === ge) ?? rt,
    st;
  n[46] !== a.id || n[47] !== N || n[48] !== Te.queryKey
    ? ((st = (e, t) => {
        (N.setQueryData(Te.queryKey, (n) => n?.map((n) => (n.id === e ? t(n) : n))),
          N.setQueryData(ye(a.id).queryKey, (n) => (n?.id === e ? t(n) : (n ?? null))));
      }),
      (n[46] = a.id),
      (n[47] = N),
      (n[48] = Te.queryKey),
      (n[49] = st))
    : (st = n[49]);
  let ct = st,
    lt;
  n[50] === F
    ? (lt = n[51])
    : ((lt = async (e) => {
        if (e.visibility === `HIDDEN` || e.id.startsWith(`implicit_link::`) || Ge(e.connector_id) !== F)
          throw Error(`Cannot disconnect an inaccessible connector account`);
        await ot.safeDelete(`/aip/connectors/links/{link_id}`, {
          surface: `settings`,
          parameters: { path: { link_id: e.id } },
          additionalHeaders: Be(),
        });
      }),
      (n[50] = F),
      (n[51] = lt));
  let ut;
  n[52] !== m || n[53] !== p
    ? ((ut = () => {
        p.get(z).danger(m.formatMessage(Q.disconnectError), {
          errorAnalytics: { toastId: `pluginConnectedAccounts.onError.disconnectError` },
        });
      }),
      (n[52] = m),
      (n[53] = p),
      (n[54] = ut))
    : (ut = n[54]);
  let dt = v({
      mutationFn: lt,
      onSuccess: (e, t) => {
        N.setQueryData(Te.queryKey, (e) => e?.filter((e) => e.id !== t.id));
        let n = q?.filter((e) => e.id !== t.id);
        (it?.id === t.id && K(n?.find(sn)?.id ?? n?.[0]?.id ?? null),
          N.setQueryData(ye(a.id).queryKey, (e) => (e?.id === t.id ? (n?.[0] ?? null) : (e ?? null))),
          p.get(z).success(m.formatMessage(Q.disconnectSuccess)),
          Promise.all([
            Ke(N, Ne),
            N.refetchQueries({ exact: !0, queryKey: Te.queryKey, type: `active` }, { throwOnError: !0 }),
            ...(n?.length === 0 ? [r.onLastAccountDisconnected()] : []),
          ]).catch(() => {
            p.get(z).danger(m.formatMessage(Q.refreshError), {
              errorAnalytics: { toastId: `pluginConnectedAccounts.onSuccess.refreshError` },
            });
          }));
      },
      onError: ut,
    }),
    ft;
  n[55] !== m || n[56] !== Qe || n[57] !== N || n[58] !== p || n[59] !== K || n[60] !== ct
    ? ((ft = (e) => {
        let { link: t, name: n } = e;
        (ct(t.id, (e) => ({ ...e, name: n })),
          N.setQueryData(Qe, null),
          K(t.id),
          _e(null),
          p.get(z).success(m.formatMessage(Q.renameSaveSuccess)));
      }),
      (n[55] = m),
      (n[56] = Qe),
      (n[57] = N),
      (n[58] = p),
      (n[59] = K),
      (n[60] = ct),
      (n[61] = ft))
    : (ft = n[61]);
  let mt;
  n[62] !== m || n[63] !== p
    ? ((mt = () => {
        p.get(z).danger(m.formatMessage(Q.renameSaveError), {
          errorAnalytics: { toastId: `pluginConnectedAccounts.onError.renameSaveError` },
        });
      }),
      (n[62] = m),
      (n[63] = p),
      (n[64] = mt))
    : (mt = n[64]);
  let _t;
  n[65] !== ft || n[66] !== mt
    ? ((_t = { mutationFn: on, onSuccess: ft, onError: mt }), (n[65] = ft), (n[66] = mt), (n[67] = _t))
    : (_t = n[67]);
  let vt = v(_t),
    xt = q?.find((e) =>
      r.pendingConnection?.appId === a.id
        ? r.pendingConnection.kind === `reauth` && r.pendingConnection.linkId === e.id
        : r.isAppConnectPending(a.id, { kind: `apps-tab`, reauthLinkId: e.id }),
    )?.id,
    St;
  n[68] !== r || n[69] !== a.id
    ? ((St = r.isAppConnectPending(a.id, { kind: `apps-tab` })), (n[68] = r), (n[69] = a.id), (n[70] = St))
    : (St = n[70]);
  let Ct = St,
    wt = xt == null && Ct,
    Tt;
  n[71] !== r || n[72] !== a.id || n[73] !== Ct || n[74] !== xt
    ? ((Tt =
        xt != null ||
        Ct ||
        (r.pendingConnection?.appId === a.id && r.pendingConnection.kind === `add`) ||
        (r.isAppConnectPending(a.id) && !r.isAppReauthPending(a.id))),
      (n[71] = r),
      (n[72] = a.id),
      (n[73] = Ct),
      (n[74] = xt),
      (n[75] = Tt))
    : (Tt = n[75]);
  let Et = Tt,
    Dt;
  n[76] !== r ||
  n[77] !== a ||
  n[78] !== U?.supports_oauth_owner_profile_id ||
  n[79] !== u ||
  n[80] !== q ||
  n[81] !== p ||
  n[82] !== it
    ? ((Dt = (e, t) => {
        let n = pt(p, { accountId: r.accountId, appId: a.id, hostId: u, userId: r.userId }, t),
          i = n?.resumeTarget.addAccountAttempt;
        M.current = i?.id ?? null;
        let o = e ?? n?.appConnectOptions,
          s =
            it?.auth_type === `OAUTH` &&
            !it.owner_profile?.id?.trim() &&
            !i?.reauthenticatedLinkIds.includes(it.id)
              ? it
              : q?.find(
                  (e) =>
                    e.auth_type === `OAUTH` &&
                    !e.owner_profile?.id?.trim() &&
                    !i?.reauthenticatedLinkIds.includes(e.id),
                );
        if (s != null && U?.supports_oauth_owner_profile_id !== !1) {
          if (r.userId == null) return;
          let e = i ?? {
            id: crypto.randomUUID(),
            userId: r.userId,
            expiresAt: Date.now() + 18e5,
            reauthenticatedLinkIds: [],
          };
          ((M.current = e.id), xe({ link: s, appConnectOptions: o, addAccountAttempt: e }));
          return;
        }
        return r.onConnectAccount(a, {
          appId: a.id,
          kind: `add`,
          appConnectOptions: o,
          addAccountAttempt: i,
        });
      }),
      (n[76] = r),
      (n[77] = a),
      (n[78] = U?.supports_oauth_owner_profile_id),
      (n[79] = u),
      (n[80] = q),
      (n[81] = p),
      (n[82] = it),
      (n[83] = Dt))
    : (Dt = n[83]);
  let jt = Dt,
    Nt = r.canConnectAccounts !== !1,
    Pt =
      o &&
      Nt &&
      r.isConnectorSetupReady &&
      ke &&
      (s != null || se) &&
      U != null &&
      U.status !== `DISABLED_BY_ADMIN` &&
      (q?.length ?? 0) > 0 &&
      !dt.isPending &&
      (!Et || wt),
    Ft;
  n[84] !== r.accountId ||
  n[85] !== r.userId ||
  n[86] !== a.id ||
  n[87] !== jt ||
  n[88] !== u ||
  n[89] !== m ||
  n[90] !== O ||
  n[91] !== k ||
  n[92] !== p
    ? ((Ft = () =>
        Ot({
          scope: p,
          accountId: r.accountId,
          userId: r.userId,
          connectorId: a.id,
          location: O,
          navigate: k,
          handledKey: j,
          canResumeAttempt: (e) =>
            pt(p, { accountId: r.accountId, appId: a.id, hostId: u, userId: r.userId }, e) != null,
          intl: m,
          onSetup: jt,
        })),
      (n[84] = r.accountId),
      (n[85] = r.userId),
      (n[86] = a.id),
      (n[87] = jt),
      (n[88] = u),
      (n[89] = m),
      (n[90] = O),
      (n[91] = k),
      (n[92] = p),
      (n[93] = Ft))
    : (Ft = n[93]);
  let It = (0, X.useEffectEvent)(Ft),
    Lt;
  n[94] !== Pt || n[95] !== It
    ? ((Lt = () => {
        Pt && It();
      }),
      (n[94] = Pt),
      (n[95] = It),
      (n[96] = Lt))
    : (Lt = n[96]);
  let Rt;
  if (
    (n[97] !== r.accountId || n[98] !== r.userId || n[99] !== Pt || n[100] !== O
      ? ((Rt = [Pt, O, r.accountId, r.userId]),
        (n[97] = r.accountId),
        (n[98] = r.userId),
        (n[99] = Pt),
        (n[100] = O),
        (n[101] = Rt))
      : (Rt = n[101]),
    (0, X.useEffect)(Lt, Rt),
    d === `settings` && U != null && q != null)
  ) {
    let e = Je(U);
    if ((e === `NONE` || e === `API_KEY`) && !q.some(an)) return null;
  }
  let zt = a.name.trim() || U?.name?.trim(),
    Bt;
  if (be != null) {
    let e = be.link,
      t = tt(e, T, E);
    ((Bt = bt(e)),
      (Bt ??=
        e.auth_type === `NONE` && zt
          ? m.formatMessage(Y.noAccountIdentity, { connectorName: zt })
          : t && zt
            ? m.formatMessage(Y.personalizedAccountIdentityFallback, { userName: t, appName: zt })
            : t
              ? m.formatMessage(Y.holderAccountIdentityFallback, { userName: t })
              : zt
                ? m.formatMessage(Y.appAccountIdentityFallback, { appName: zt })
                : m.formatMessage(Y.accountIdentityFallback)));
  }
  let Vt;
  n[102] !== r || n[103] !== de.appId
    ? ((Vt = (0, Z.jsx)(un, { accountContext: r, appId: de.appId })),
      (n[102] = r),
      (n[103] = de.appId),
      (n[104] = Vt))
    : (Vt = n[104]);
  let Ht;
  n[105] === jt
    ? (Ht = n[106])
    : ((Ht = () => {
        jt();
      }),
      (n[105] = jt),
      (n[106] = Ht));
  let Ut;
  n[107] !== dt || n[108] !== K
    ? ((Ut = (e) => {
        (K(e.id), dt.mutate(e));
      }),
      (n[107] = dt),
      (n[108] = K),
      (n[109] = Ut))
    : (Ut = n[109]);
  let Wt;
  n[110] !== r || n[111] !== a
    ? ((Wt = (e) => {
        r.onConnectAccount(a, { appId: a.id, kind: `reauth`, linkId: e.id });
      }),
      (n[110] = r),
      (n[111] = a),
      (n[112] = Wt))
    : (Wt = n[112]);
  let Gt;
  n[113] !== ze || n[114] !== je || n[115] !== Re || n[116] !== H || n[117] !== s
    ? ((Gt = () => {
        ze ? Re() : Promise.all([je(), s == null ? H() : void 0]);
      }),
      (n[113] = ze),
      (n[114] = je),
      (n[115] = Re),
      (n[116] = H),
      (n[117] = s),
      (n[118] = Gt))
    : (Gt = n[118]);
  let Kt, qt;
  return (
    n[119] === K
      ? ((Kt = n[120]), (qt = n[121]))
      : ((Kt = (e) => K(e.id)),
        (qt = (e) => {
          (K(e.id), _e(e.id));
        }),
        (n[119] = K),
        (n[120] = Kt),
        (n[121] = qt)),
    (0, Z.jsxs)(Z.Fragment, {
      children: [
        Vt,
        (0, Z.jsx)(dn, {
          accountRowAction: i,
          app: a,
          variant: d,
          canConnectAnotherAccount: o,
          canRetryConnection: wt,
          canConnectAccounts: Nt,
          defaultAccountName: U?.name,
          userName: T,
          userId: E,
          disconnectingLinkId: dt.isPending ? dt.variables?.id : void 0,
          hasError: Oe || (s == null && V) || ze,
          isConnectionPending: Et,
          isLoading: (De || (s == null && B)) && !ze,
          links: U == null && q?.length !== 0 ? void 0 : q,
          pendingReauthLinkId: xt,
          selectedLinkId: it?.id,
          onConnectAnother: Ht,
          onDisconnect: Ut,
          onReconnect: Wt,
          onRetry: Gt,
          onSelect: Kt,
          onRename: qt,
        }),
        at == null || U == null
          ? null
          : (0, Z.jsx)(
              fn,
              {
                connectorName: a.name,
                defaultAccountName: U.name,
                userName: T,
                userId: E,
                isSaving: vt.isPending,
                link: at,
                suggestedAccountName: ge == null ? nt?.suggestedAccountName : void 0,
                onClose: () => {
                  (N.setQueryData(Qe, null), K(at.id), _e(null));
                },
                onSave: (e) => {
                  vt.mutate({ link: at, name: e });
                },
              },
              at.id,
            ),
        !Nt || be == null
          ? null
          : (0, Z.jsx)(ie, {
              open: !0,
              contentProps: { "aria-describedby": void 0 },
              onOpenChange: (e) => {
                e ||
                  ($e(
                    p,
                    { accountId: r.accountId, appId: a.id, hostId: u, userId: r.userId },
                    be.addAccountAttempt.id,
                  ),
                  xe(null));
              },
              children: (0, Z.jsxs)(oe, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(),
                    Nt &&
                      (r.onConnectAccount(a, {
                        appId: a.id,
                        kind: `reauth`,
                        linkId: be.link.id,
                        appConnectOptions: be.appConnectOptions,
                        addAccountAttempt: be.addAccountAttempt,
                      }),
                      xe(null)));
                },
                children: [
                  (0, Z.jsx)(re, {
                    children: (0, Z.jsx)(te, {
                      title: (0, Z.jsx)(ee, { children: (0, Z.jsx)(f, { ...Q.reconnectFirst }) }),
                      subtitle: m.formatMessage(Q.reconnectFirstDescription, { accountName: Bt }),
                    }),
                  }),
                  (0, Z.jsx)(re, {
                    children: (0, Z.jsxs)(ce, {
                      children: [
                        (0, Z.jsx)(t, {
                          color: `ghost`,
                          onClick: () => {
                            ($e(
                              p,
                              { accountId: r.accountId, appId: a.id, hostId: u, userId: r.userId },
                              be.addAccountAttempt.id,
                            ),
                              xe(null));
                          },
                          children: (0, Z.jsx)(f, { ...Q.cancel }),
                        }),
                        (0, Z.jsx)(t, {
                          color: `primary`,
                          type: `submit`,
                          children: (0, Z.jsx)(f, { ...Q.reconnect }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
      ],
    })
  );
}
function an(e) {
  return ft(e) != null;
}
async function on(e) {
  let { link: t, name: n } = e;
  return (
    await ot.safePatch(`/ps/v2/links/{link_id}`, {
      surface: `settings`,
      parameters: { path: { link_id: t.id } },
      requestBody: { name: n },
      additionalHeaders: Be(),
    }),
    { link: t, name: n }
  );
}
function sn(e) {
  return e.auth_status !== `REAUTH_REQUIRED`;
}
function cn(e) {
  return e.auth_status !== `REAUTH_REQUIRED`;
}
function ln() {
  return null;
}
function un(e) {
  let t = (0, pn.c)(8),
    { accountContext: n, appId: r } = e,
    i = h(c),
    a = k(ht),
    o = n.accountId ?? null,
    s = n.userId ?? null,
    l = n.selection?.linkId,
    u,
    d;
  return (
    t[0] !== o || t[1] !== a || t[2] !== r || t[3] !== l || t[4] !== i || t[5] !== s
      ? ((u = () => {
          l !== void 0 && a === o && kt(i, { accountId: o, userId: s, appId: r }, l);
        }),
        (d = [i, a, o, s, r, l]),
        (t[0] = o),
        (t[1] = a),
        (t[2] = r),
        (t[3] = l),
        (t[4] = i),
        (t[5] = s),
        (t[6] = u),
        (t[7] = d))
      : ((u = t[6]), (d = t[7])),
    (0, X.useLayoutEffect)(u, d),
    null
  );
}
function dn(e) {
  let n = (0, pn.c)(33),
    {
      accountRowAction: r,
      app: a,
      variant: c,
      canConnectAnotherAccount: l,
      canRetryConnection: u,
      canConnectAccounts: p,
      defaultAccountName: m,
      userName: h,
      userId: g,
      disconnectingLinkId: _,
      hasError: v,
      isConnectionPending: x,
      isLoading: S,
      links: C,
      pendingReauthLinkId: T,
      selectedLinkId: O,
      onConnectAnother: k,
      onDisconnect: A,
      onReconnect: j,
      onRename: M,
      onRetry: ee,
      onSelect: N,
    } = e,
    te = l === void 0 || l,
    P = u !== void 0 && u,
    F = p === void 0 || p,
    L = x !== void 0 && x,
    R = D(),
    z = a.name.trim() || m?.trim(),
    ne = (0, X.useId)(),
    B = (C?.length ?? 0) > 1,
    re;
  n[0] !== v || n[1] !== C || n[2] !== ee
    ? ((re =
        v && C == null
          ? (0, Z.jsx)(le, {
              label: (0, Z.jsx)(f, { ...Q.loadingError }),
              control: (0, Z.jsx)(t, {
                color: `ghost`,
                onClick: ee,
                children: (0, Z.jsx)(f, { ...Q.retry }),
              }),
            })
          : null),
      (n[0] = v),
      (n[1] = C),
      (n[2] = ee),
      (n[3] = re))
    : (re = n[3]);
  let V = re;
  if (C?.length === 0) return null;
  if (C == null && !a.isAccessible) {
    let e;
    return (
      n[4] === V
        ? (e = n[5])
        : ((e = V == null ? null : (0, Z.jsx)(se, { children: V })), (n[4] = V), (n[5] = e)),
      e
    );
  }
  let ie;
  n[6] !== te || n[7] !== B
    ? ((ie =
        te || B
          ? (0, Z.jsx)(f, {
              id: `plugins.detail.accounts.title`,
              defaultMessage: `Connected accounts`,
              description: `Section heading above provider accounts connected to one app on a Codex plugin detail page`,
            })
          : (0, Z.jsx)(f, {
              id: `plugins.detail.accounts.singleTitle`,
              defaultMessage: `Connected account`,
              description: `Section heading for the connected provider account of an app that does not support connecting multiple accounts`,
            })),
      (n[6] = te),
      (n[7] = B),
      (n[8] = ie))
    : (ie = n[8]);
  let ae = ie,
    oe = se,
    H;
  n[9] !== S || n[10] !== C
    ? ((H = S && C == null ? (0, Z.jsx)(Pt, { children: (0, Z.jsx)(f, { ...Q.loading }) }) : null),
      (n[9] = S),
      (n[10] = C),
      (n[11] = H))
    : (H = n[11]);
  let ce = C?.map((e) => {
      let n = tt(e, h, g),
        l = bt(e);
      l ??=
        e.auth_type === `NONE` && z
          ? R.formatMessage(Y.noAccountIdentity, { connectorName: z })
          : n && z
            ? R.formatMessage(Y.personalizedAccountIdentityFallback, { userName: n, appName: z })
            : n
              ? R.formatMessage(Y.holderAccountIdentityFallback, { userName: n })
              : z
                ? R.formatMessage(Y.appAccountIdentityFallback, { appName: z })
                : R.formatMessage(Y.accountIdentityFallback);
      let u = rt(e, a.name, m),
        p = ft(e) != null,
        v = e.auth_status === `REAUTH_REQUIRED`,
        y = T === e.id,
        x = _ === e.id,
        S = `${ne}-${e.id}`,
        C = v ? `${S}-warning` : void 0,
        D = u == null || u === l ? void 0 : `${S}-nickname`,
        k = (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(`span`, { className: `truncate text-default`, children: l }),
            u == null || u === l
              ? null
              : (0, Z.jsx)(`span`, { id: D, className: `truncate text-sm text-secondary`, children: u }),
            v
              ? (0, Z.jsx)(`span`, {
                  className: `sr-only`,
                  id: C,
                  children: (0, Z.jsx)(f, { ...Q.reconnectRequired }),
                })
              : null,
          ],
        }),
        ee = (0, Z.jsx)(wt, { alt: ``, name: l, size: `md`, src: e.owner_profile?.picture ?? null }),
        P = (0, Z.jsxs)(Z.Fragment, {
          children: [
            F && (v || y) && p
              ? (0, Z.jsx)(t, {
                  id: `${S}-reconnect`,
                  "aria-labelledby": D == null ? void 0 : `${S}-reconnect ${D}`,
                  "aria-label": R.formatMessage(Q.reconnectAccount, { accountName: l }),
                  color: c === `settings` ? `outline` : `ghost`,
                  size: c === `settings` ? `toolbar` : `default`,
                  disabled: _ != null || (L && !y),
                  onClick: () => j(e),
                  children: (0, Z.jsx)(f, { ...Q.reconnect }),
                })
              : null,
            (0, Z.jsxs)(s, {
              align: `end`,
              contentWidth: `xs`,
              triggerButton: (0, Z.jsx)(t, {
                id: `${S}-actions`,
                "aria-labelledby": D == null ? void 0 : `${S}-actions ${D}`,
                "aria-busy": x,
                "aria-label": R.formatMessage(Q.accountActions, { accountName: l }),
                color: `ghost`,
                disabled: _ != null || y || L,
                loading: x,
                size: `icon`,
                children: (0, Z.jsx)(i, {}),
              }),
              children: [
                te
                  ? (0, Z.jsx)(E.Item, {
                      leftIconAsset: d,
                      onSelect: () => M(e),
                      children: (0, Z.jsx)(f, { ...Q.rename }),
                    })
                  : null,
                F && p
                  ? (0, Z.jsxs)(E.Item, {
                      onSelect: () => j(e),
                      children: [
                        (0, Z.jsx)(E.ItemIcon, { size: `xs`, children: (0, Z.jsx)(b, {}) }),
                        (0, Z.jsx)(f, { ...Q.reconnect }),
                      ],
                    })
                  : null,
                (0, Z.jsx)(E.Item, {
                  leftIconAsset: o,
                  tone: `danger`,
                  onSelect: () => A(e),
                  children: (0, Z.jsx)(f, { ...Q.disconnect }),
                }),
              ],
            }),
          ],
        }),
        I = _ != null || y || L;
      return r === `rename` && te && !I
        ? (0, Z.jsx)(
            w,
            {
              actions: P,
              ariaLabel: R.formatMessage(
                {
                  id: `plugins.detail.accounts.renameAccountRow`,
                  defaultMessage: `Rename {accountName}{hasNickname, select, true { ({nickname})} other {}}`,
                  description: `Accessible name of a connected-account row that opens its nickname editor; accountName is the provider identity and nickname is an optional user-defined account label`,
                },
                { accountName: l, hasNickname: D != null, nickname: u ?? `` },
              ),
              edgeRounding: `surface`,
              icon: ee,
              label: (0, Z.jsx)(`span`, { className: `flex min-w-0 flex-col`, children: k }),
              onClick: () => M(e),
            },
            e.id,
          )
        : (0, Z.jsx)(
            le,
            {
              controlSizing: `content`,
              icon: ee,
              label: B
                ? (0, Z.jsx)(`button`, {
                    id: `${S}-select`,
                    "aria-describedby": C,
                    "aria-labelledby": D == null ? void 0 : `${S}-select ${D}`,
                    "aria-label": R.formatMessage(Q.selectAccount, { accountName: l }),
                    "aria-pressed": O === e.id,
                    className: `flex max-w-full min-w-0 cursor-interaction flex-col text-start`,
                    disabled: I,
                    onClick: () => N(e),
                    type: `button`,
                    children: k,
                  })
                : (0, Z.jsx)(`div`, {
                    id: `${S}-identity`,
                    "aria-describedby": C,
                    "aria-labelledby": D == null ? void 0 : `${S}-identity ${D}`,
                    "aria-label": l,
                    className: `flex min-w-0 flex-col`,
                    role: `group`,
                    children: k,
                  }),
              control: P,
            },
            e.id,
          );
    }),
    U;
  n[12] !== F || n[13] !== te || n[14] !== P || n[15] !== _ || n[16] !== L || n[17] !== C || n[18] !== k
    ? ((U =
        C == null || !F || !te
          ? null
          : (0, Z.jsx)(w, {
              disabled: _ != null || (L && !P),
              edgeRounding: `surface`,
              icon: (0, Z.jsx)(`span`, {
                className: `flex size-9 items-center justify-center rounded-full bg-surface-secondary text-secondary`,
                children: (0, Z.jsx)(y, { "aria-hidden": !1, asset: I }),
              }),
              label: (0, Z.jsx)(f, {
                id: `plugins.detail.accounts.connectAnother`,
                defaultMessage: `Connect another account`,
                description: `Action that connects an additional provider account to the same app while preserving all existing accounts`,
              }),
              onClick: k,
            })),
      (n[12] = F),
      (n[13] = te),
      (n[14] = P),
      (n[15] = _),
      (n[16] = L),
      (n[17] = C),
      (n[18] = k),
      (n[19] = U))
    : (U = n[19]);
  let W;
  n[20] !== oe || n[21] !== V || n[22] !== H || n[23] !== ce || n[24] !== U
    ? ((W = (0, Z.jsxs)(oe, { children: [H, V, ce, U] })),
      (n[20] = oe),
      (n[21] = V),
      (n[22] = H),
      (n[23] = ce),
      (n[24] = U),
      (n[25] = W))
    : (W = n[25]);
  let G = W,
    ue;
  n[26] === a.id ? (ue = n[27]) : ((ue = Ge(a.id)), (n[26] = a.id), (n[27] = ue));
  let de = `plugin-connected-accounts-${ue}`,
    fe;
  return (
    n[28] !== G || n[29] !== de || n[30] !== ae || n[31] !== c
      ? ((fe =
          c === `settings`
            ? (0, Z.jsxs)(We, { id: de, children: [(0, Z.jsx)(We.Header, { title: ae }), G] })
            : (0, Z.jsx)(mt, { id: de, title: ae, children: G })),
        (n[28] = G),
        (n[29] = de),
        (n[30] = ae),
        (n[31] = c),
        (n[32] = fe))
      : (fe = n[32]),
    fe
  );
}
function fn(e) {
  let n = (0, pn.c)(74),
    {
      connectorName: r,
      defaultAccountName: i,
      userName: a,
      userId: o,
      isSaving: s,
      link: c,
      suggestedAccountName: l,
      onClose: u,
      onSave: d,
    } = e,
    p = D(),
    m;
  if (n[0] !== r || n[1] !== i || n[2] !== p || n[3] !== c || n[4] !== o || n[5] !== a) {
    let e = r.trim() || i?.trim(),
      t = tt(c, a, o),
      s;
    if ((n[7] === c ? (s = n[8]) : ((s = bt(c)), (n[7] = c), (n[8] = s)), (m = s), m == null)) {
      if (c.auth_type === `NONE` && e) m = p.formatMessage(Y.noAccountIdentity, { connectorName: e });
      else if (t && e)
        m = p.formatMessage(Y.personalizedAccountIdentityFallback, { userName: t, appName: e });
      else if (t) m = p.formatMessage(Y.holderAccountIdentityFallback, { userName: t });
      else if (e) m = p.formatMessage(Y.appAccountIdentityFallback, { appName: e });
      else {
        let e;
        (n[9] === p
          ? (e = n[10])
          : ((e = p.formatMessage(Y.accountIdentityFallback)), (n[9] = p), (n[10] = e)),
          (m = e));
      }
    }
    ((n[0] = r), (n[1] = i), (n[2] = p), (n[3] = c), (n[4] = o), (n[5] = a), (n[6] = m));
  } else m = n[6];
  let h = (0, X.useId)(),
    g;
  n[11] !== r || n[12] !== i || n[13] !== c
    ? ((g = rt(c, r, i) ?? ``), (n[11] = r), (n[12] = i), (n[13] = c), (n[14] = g))
    : (g = n[14]);
  let _ = g,
    v;
  n[15] !== _ || n[16] !== p || n[17] !== l
    ? ((v = l == null ? _ : p.formatMessage(Q[l])), (n[15] = _), (n[16] = p), (n[17] = l), (n[18] = v))
    : (v = n[18]);
  let [y, b] = (0, X.useState)(v),
    [x, S] = (0, X.useState)(null),
    C;
  n[19] === y ? (C = n[20]) : ((C = y.trim()), (n[19] = y), (n[20] = C));
  let w = C,
    T;
  n[21] !== _ || n[22] !== s || n[23] !== c || n[24] !== w
    ? ((T = !s && w !== _ && w !== c.name.trim()),
      (n[21] = _),
      (n[22] = s),
      (n[23] = c),
      (n[24] = w),
      (n[25] = T))
    : (T = n[25]);
  let E = T,
    O;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { "aria-describedby": void 0 }), (n[26] = O))
    : (O = n[26]);
  let k;
  n[27] !== s || n[28] !== u
    ? ((k = (e) => {
        !e && !s && u();
      }),
      (n[27] = s),
      (n[28] = u),
      (n[29] = k))
    : (k = n[29]);
  let A;
  n[30] !== E || n[31] !== d || n[32] !== w
    ? ((A = (e) => {
        if ((e.preventDefault(), E)) {
          if (!w) {
            S(`required`);
            return;
          }
          if (Array.from(w).length > 64) {
            S(`too-long`);
            return;
          }
          (S(null), d(w));
        }
      }),
      (n[30] = E),
      (n[31] = d),
      (n[32] = w),
      (n[33] = A))
    : (A = n[33]);
  let j;
  n[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(ee, { children: (0, Z.jsx)(f, { ...Q.rename }) })), (n[34] = j))
    : (j = n[34]);
  let M;
  n[35] === m
    ? (M = n[36])
    : ((M = (0, Z.jsx)(re, { children: (0, Z.jsx)(te, { title: j, subtitle: m, subtitleSize: `base` }) })),
      (n[35] = m),
      (n[36] = M));
  let N;
  n[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsx)(f, { ...Q.nickname })), (n[37] = N))
    : (N = n[37]);
  let P;
  n[38] === h
    ? (P = n[39])
    : ((P = (0, Z.jsx)(We.Header, {
        size: `base`,
        spacing: `compact`,
        title: (0, Z.jsx)(`label`, { className: `select-none`, htmlFor: h, children: N }),
      })),
      (n[38] = h),
      (n[39] = P));
  let F = x != null,
    I;
  n[40] === p ? (I = n[41]) : ((I = p.formatMessage(Q.nicknamePlaceholder)), (n[40] = p), (n[41] = I));
  let L;
  n[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => {
        (b(e.target.value), S(null));
      }),
      (n[42] = L))
    : (L = n[42]);
  let R;
  n[43] !== h || n[44] !== s || n[45] !== y || n[46] !== F || n[47] !== I
    ? ((R = (0, Z.jsx)(Ue, {
        id: h,
        "aria-invalid": F,
        autoFocus: !0,
        disabled: s,
        name: `plugin-account-nickname`,
        placeholder: I,
        value: y,
        onChange: L,
      })),
      (n[43] = h),
      (n[44] = s),
      (n[45] = y),
      (n[46] = F),
      (n[47] = I),
      (n[48] = R))
    : (R = n[48]);
  let z;
  n[49] === x
    ? (z = n[50])
    : ((z =
        x == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `mt-2 text-sm text-danger`,
              role: `alert`,
              children:
                x === `required`
                  ? (0, Z.jsx)(f, { ...Q.nicknameRequired })
                  : (0, Z.jsx)(f, { ...Q.nicknameTooLong }),
            })),
      (n[49] = x),
      (n[50] = z));
  let ne;
  n[51] !== P || n[52] !== R || n[53] !== z
    ? ((ne = (0, Z.jsxs)(re, { children: [P, R, z] })), (n[51] = P), (n[52] = R), (n[53] = z), (n[54] = ne))
    : (ne = n[54]);
  let B;
  n[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Z.jsx)(f, { ...Q.cancel })), (n[55] = B))
    : (B = n[55]);
  let V;
  n[56] !== s || n[57] !== u
    ? ((V = (0, Z.jsx)(t, { color: `ghost`, disabled: s, onClick: u, children: B })),
      (n[56] = s),
      (n[57] = u),
      (n[58] = V))
    : (V = n[58]);
  let ae = !E,
    se;
  n[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Z.jsx)(f, { ...Q.save })), (n[59] = se))
    : (se = n[59]);
  let H;
  n[60] !== s || n[61] !== ae
    ? ((H = (0, Z.jsx)(t, { color: `primary`, disabled: ae, loading: s, type: `submit`, children: se })),
      (n[60] = s),
      (n[61] = ae),
      (n[62] = H))
    : (H = n[62]);
  let U;
  n[63] !== V || n[64] !== H
    ? ((U = (0, Z.jsxs)(re, {
        children: [null, (0, Z.jsx)(Z.Fragment, { children: (0, Z.jsxs)(ce, { children: [V, H] }) })],
      })),
      (n[63] = V),
      (n[64] = H),
      (n[65] = U))
    : (U = n[65]);
  let W;
  n[66] !== ne || n[67] !== U || n[68] !== A || n[69] !== M
    ? ((W = (0, Z.jsxs)(oe, { as: `form`, onSubmit: A, children: [M, ne, U] })),
      (n[66] = ne),
      (n[67] = U),
      (n[68] = A),
      (n[69] = M),
      (n[70] = W))
    : (W = n[70]);
  let G;
  return (
    n[71] !== W || n[72] !== k
      ? ((G = (0, Z.jsx)(ie, { open: !0, contentProps: O, onOpenChange: k, children: W })),
        (n[71] = W),
        (n[72] = k),
        (n[73] = G))
      : (G = n[73]),
    G
  );
}
var pn, X, Z, Q;
function mn() {
  return (mn = e(() => {
    ((pn = fe()),
      O(),
      n(),
      _e(),
      m(),
      j(),
      G(),
      C(),
      (X = ge()),
      B(),
      N(),
      st(),
      q(),
      Xe(),
      Oe(),
      nt(),
      et(),
      lt(),
      be(),
      De(),
      Se(),
      W(),
      _t(),
      de(),
      L(),
      a(),
      x(),
      T(),
      Te(),
      V(),
      xe(),
      pe(),
      Ee(),
      Nt(),
      ne(),
      g(),
      u(),
      vt(),
      tn(),
      jt(),
      Dt(),
      Ze(),
      (Z = he()),
      (Q = r({
        accountActions: {
          id: `plugins.detail.accounts.actions`,
          defaultMessage: `Actions for {accountName}`,
          description: `Accessible name of the menu containing rename, reconnect, and disconnect actions for one connected provider account; accountName is its provider identity`,
        },
        cancel: {
          id: `plugins.detail.accounts.cancel`,
          defaultMessage: `Cancel`,
          description: `Secondary button that closes a connected-account rename or reconnect confirmation dialog without saving`,
        },
        disconnect: {
          id: `plugins.detail.accounts.disconnect`,
          defaultMessage: `Disconnect`,
          description: `Destructive menu action that disconnects only the selected provider account while preserving sibling accounts and the installed plugin`,
        },
        disconnectError: {
          id: `plugins.detail.accounts.disconnectError`,
          defaultMessage: `Couldn't disconnect account`,
          description: `Error toast shown when disconnecting one specific connected provider account fails`,
        },
        disconnectSuccess: {
          id: `plugins.detail.accounts.disconnectSuccess`,
          defaultMessage: `Account disconnected`,
          description: `Success toast shown after one connected provider account is removed without uninstalling its plugin`,
        },
        government: {
          id: `plugins.detail.accounts.suggestion.government`,
          defaultMessage: `Government`,
          description: `Suggested editable nickname for a newly added government provider account`,
        },
        loading: {
          id: `plugins.detail.accounts.loading`,
          defaultMessage: `Loading connected accounts…`,
          description: `Accessible loading label while provider accounts for the current plugin are being retrieved`,
        },
        loadingError: {
          id: `plugins.detail.accounts.loadingError`,
          defaultMessage: `Couldn't load connected accounts`,
          description: `Error shown when the accessible provider accounts for the current plugin cannot be retrieved`,
        },
        nickname: {
          id: `plugins.detail.accounts.nickname`,
          defaultMessage: `Nickname`,
          description: `Visible label for the optional user-authored nickname of one connected provider account`,
        },
        nicknamePlaceholder: {
          id: `plugins.detail.accounts.nicknamePlaceholder`,
          defaultMessage: `Add a nickname`,
          description: `Placeholder for the optional nickname field used to distinguish one connected provider account from its siblings`,
        },
        nicknameRequired: {
          id: `plugins.detail.accounts.nicknameRequired`,
          defaultMessage: `Enter an account nickname`,
          description: `Inline validation error shown when a user tries to save an empty or whitespace-only account name from the rename-only account dialog`,
        },
        nicknameTooLong: {
          id: `plugins.detail.accounts.nicknameTooLong`,
          defaultMessage: `Nickname must be 64 characters or fewer`,
          description: `Inline validation error shown when a connected account nickname contains more than 64 Unicode characters`,
        },
        personal: {
          id: `plugins.detail.accounts.suggestion.personal`,
          defaultMessage: `Personal`,
          description: `Suggested editable nickname for a newly added personal provider account`,
        },
        reconnect: {
          id: `plugins.detail.accounts.reconnect`,
          defaultMessage: `Reconnect`,
          description: `Account-row menu or inline action that reauthenticates the specific connected provider account without reconnecting sibling accounts`,
        },
        reconnectAccount: {
          id: `plugins.detail.accounts.reconnectAccount`,
          defaultMessage: `Reconnect {accountName}`,
          description: `Accessible name for the inline reconnect action on one provider account; accountName is its provider identity`,
        },
        reconnectFirst: {
          id: `plugins.detail.accounts.reconnectFirst`,
          defaultMessage: `Reconnect your existing account first`,
          description: `Confirmation-dialog heading shown when adding another OAuth account requires refreshing the selected existing account's missing provider identity first`,
        },
        reconnectFirstDescription: {
          id: `plugins.detail.accounts.reconnectFirstDescription`,
          defaultMessage: `To add another account, first reconnect {accountName}`,
          description: `Confirmation-dialog explanation before adding a provider account when the existing OAuth account lacks a provider profile identifier; accountName identifies the exact account to reconnect`,
        },
        reconnectRequired: {
          id: `plugins.detail.accounts.reconnectRequired`,
          defaultMessage: `Authentication update required`,
          description: `Screen-reader-only status announcing that a particular provider account needs reauthentication`,
        },
        refreshError: {
          id: `plugins.detail.accounts.refreshError`,
          defaultMessage: `Account updated, but couldn't refresh accounts`,
          description: `Error toast shown when an exact-account mutation succeeded but refreshing the remaining connected-account inventory failed`,
        },
        rename: {
          id: `plugins.detail.accounts.rename`,
          defaultMessage: `Rename account`,
          description: `Account-row menu action and dialog title for changing the user-authored nickname of one provider account`,
        },
        retry: {
          id: `plugins.detail.accounts.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries loading connected accounts after an inventory or refresh request failed`,
        },
        save: {
          id: `plugins.detail.accounts.save`,
          defaultMessage: `Save`,
          description: `Primary action that saves one connected account's nickname`,
        },
        renameSaveError: {
          id: `plugins.detail.accounts.saveError`,
          defaultMessage: `Couldn't rename account`,
          description: `Error toast shown when renaming one connected provider account fails`,
        },
        renameSaveSuccess: {
          id: `plugins.detail.accounts.saveSuccess`,
          defaultMessage: `Account renamed`,
          description: `Success toast shown after one connected account is renamed`,
        },
        school: {
          id: `plugins.detail.accounts.suggestion.school`,
          defaultMessage: `School`,
          description: `Suggested editable nickname for a newly added school provider account`,
        },
        selectAccount: {
          id: `plugins.detail.accounts.selectAccount`,
          defaultMessage: `Select {accountName}`,
          description: `Accessible name for selecting one provider account on a plugin detail page; accountName is its provider identity`,
        },
        work: {
          id: `plugins.detail.accounts.suggestion.work`,
          defaultMessage: `Work`,
          description: `Suggested editable nickname for a newly added work provider account`,
        },
      })));
  }))();
}
function hn(e) {
  let t = (0, gn.c)(18),
    { hostId: n, scheduleLabel: r, template: i, onSetUpTemplate: a } = e,
    o;
  t[0] !== n || t[1] !== i.prompt
    ? ((o = (0, _n.jsx)(Tt, {
        cwd: null,
        hostId: n,
        pluginMentionPresentation: `text`,
        text: i.prompt,
        variant: `compact`,
      })),
      (t[0] = n),
      (t[1] = i.prompt),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, _n.jsx)(`span`, {
        className: `flex size-8 shrink-0 items-center justify-center`,
        children: (0, _n.jsx)(we, { className: `icon-md text-secondary` }),
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === i.name
    ? (c = t[5])
    : ((c = (0, _n.jsx)(`span`, { className: `min-w-0 truncate`, children: i.name })),
      (t[4] = i.name),
      (t[5] = c));
  let l;
  t[6] === r
    ? (l = t[7])
    : ((l = (0, _n.jsx)(`span`, { className: `shrink-0 text-secondary`, children: r })),
      (t[6] = r),
      (t[7] = l));
  let u;
  t[8] !== c || t[9] !== l
    ? ((u = (0, _n.jsxs)(`span`, { className: `flex min-w-0 items-baseline gap-2`, children: [c, l] })),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u))
    : (u = t[10]);
  let d;
  t[11] !== a || t[12] !== i
    ? ((d = () => {
        a(i);
      }),
      (t[11] = a),
      (t[12] = i),
      (t[13] = d))
    : (d = t[13]);
  let f;
  return (
    t[14] !== o || t[15] !== u || t[16] !== d
      ? ((f = (0, _n.jsx)(It, {
          className: `group`,
          description: o,
          descriptionClassName: `line-clamp-1`,
          icon: s,
          iconContainer: !1,
          presentation: `row`,
          title: u,
          onClick: d,
        })),
        (t[14] = o),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
var gn, _n;
function vn() {
  return (vn = e(() => {
    ((gn = fe()), Et(), St(), Ft(), (_n = he()));
  }))();
}
function yn(e) {
  let t = (0, Cn.c)(8),
    { children: n, previewItems: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = wn.Children.toArray(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] !== r || t[3] !== a
    ? ((o = (e) => {
        let { hiddenItems: t, isExpanded: n, onToggle: i } = e,
          o = r?.slice(a.length - t.length);
        return (0, Tn.jsxs)(Yt, {
          className: `gap-3`,
          isExpanded: n,
          onClick: i,
          children: [
            o == null
              ? null
              : (0, Tn.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `flex h-10 w-8 shrink-0 items-center`,
                  children: o.slice(0, 3).map(Sn),
                }),
            (0, Tn.jsx)(f, {
              id: `plugins.detail.includes.showMore`,
              defaultMessage: `{hasNames, select, true {See {itemNames}{remainingCount, plural, =0 {} other {, and # more}}} other {Show {count, number} more}}`,
              description: `Button label that expands a long list of included plugin resources, optionally previewing the next item names`,
              values: {
                count: t.length,
                hasNames: o != null,
                itemNames: o?.slice(0, 2).map(xn).join(`, `),
                remainingCount: Math.max(t.length - 2, 0),
              },
            }),
          ],
        });
      }),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, Tn.jsx)(Gt, { items: a, visibleItemLimit: En, renderExpandRow: o, children: bn })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function bn(e) {
  return e;
}
function xn(e) {
  return e.label;
}
function Sn(e) {
  return (0, Tn.jsx)(
    `span`,
    {
      className: `-ms-2 flex size-4 items-center justify-center overflow-hidden rounded-sm border border-default bg-surface first:ms-0`,
      children: e.icon,
    },
    e.key,
  );
}
var Cn, wn, Tn, En;
function Dn() {
  return (Dn = e(() => {
    ((Cn = fe()), (wn = ge()), B(), Kt(), (Tn = he()), (En = 5));
  }))();
}
function On(e) {
  let t = (0, An.c)(10),
    { plugin: n, browserExtensions: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i));
  let a = i,
    o = D();
  if (!n.summary.installed || a.length === 0) return null;
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, jn.jsx)(f, {
        id: `plugins.detail.setup`,
        defaultMessage: `Setup`,
        description: `Section title for browser extensions that need to be set up on the plugin detail page`,
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  if (t[3] !== a || t[4] !== o) {
    let e;
    (t[6] === o
      ? (e = t[7])
      : ((e = (e) =>
          (0, jn.jsx)(
            le,
            {
              icon: (0, jn.jsx)(dt, {
                alt: o.formatMessage(Vt(e.browserFamily)),
                className: `size-10`,
                fallback: (0, jn.jsx)(ut, { className: `icon-lg text-secondary` }),
                logoUrl: e.iconUrl,
              }),
              label: (0, jn.jsx)(f, { ...Vt(e.browserFamily) }),
              description: (0, jn.jsx)(f, { ...Ut(e.browserFamily) }),
              control: (0, jn.jsx)(F, {
                href: e.storeUrl ?? void 0,
                color: `primary`,
                size: `medium`,
                className: `min-w-24 shrink-0 justify-center`,
                disabled: e.storeUrl == null,
                onClick: (t) => {
                  if (
                    e.storeUrl == null ||
                    t.button !== 0 ||
                    t.metaKey ||
                    t.ctrlKey ||
                    t.shiftKey ||
                    t.altKey
                  )
                    return;
                  let n = _?.chromiumBrowser?.openUrl({ browserFamily: e.browserFamily, url: e.storeUrl });
                  if (n != null) {
                    (t.preventDefault(), n.catch(kn));
                    return;
                  }
                  qe({
                    event: t,
                    href: e.storeUrl,
                    initiator: `open_in_browser_bridge`,
                    openTarget: `external-browser`,
                  });
                },
                children: (0, jn.jsx)(f, {
                  id: `plugins.detail.setup.openBrowserExtension`,
                  defaultMessage: `Open`,
                  description: `Button label for opening a browser extension setup URL from the plugin detail page`,
                }),
              }),
            },
            e.browserFamily,
          )),
        (t[6] = o),
        (t[7] = e)),
      (c = a.map(e)),
      (t[3] = a),
      (t[4] = o),
      (t[5] = c));
  } else c = t[5];
  let l;
  return (
    t[8] === c
      ? (l = t[9])
      : ((l = (0, jn.jsx)(mt, {
          id: `plugin-setup`,
          title: s,
          children: (0, jn.jsx)(se, { className: `overflow-hidden`, children: c }),
        })),
        (t[8] = c),
        (t[9] = l)),
    l
  );
}
function kn() {}
var An, jn;
function Mn() {
  return (Mn = e(() => {
    ((An = fe()), B(), at(), W(), _t(), Me(), it(), H(), ne(), g(), Ht(), (jn = he()));
  }))();
}
function Nn(e) {
  let t = (0, Pn.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Fn.jsx)(We.Header, {
        title: (0, Fn.jsx)(f, {
          id: `browserPluginSettings.skills`,
          defaultMessage: `Skills`,
          description: `Skills included in an installed plugin`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Fn.jsxs)(We, { children: [r, (0, Fn.jsx)(se, { children: n })] })), (t[1] = n), (t[2] = i)),
    i
  );
}
var Pn, Fn;
function In() {
  return (In = e(() => {
    ((Pn = fe()), B(), Ee(), g(), (Fn = he()));
  }))();
}
function Ln(e) {
  let t = (0, Jn.c)(10),
    {
      hostId: n,
      hideCardActions: r,
      plugin: i,
      installedSkills: a,
      unavailableSkills: o,
      presentation: s,
      showSkillReferences: c,
      onSkillsUpdated: l,
    } = e,
    u = r !== void 0 && r,
    d = s === void 0 ? `row` : s,
    p = c !== void 0 && c,
    m,
    h;
  if (
    t[0] !== u ||
    t[1] !== n ||
    t[2] !== a ||
    t[3] !== l ||
    t[4] !== i ||
    t[5] !== d ||
    t[6] !== p ||
    t[7] !== o
  ) {
    h = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = [...a.map(zn), ...o.map(Rn)];
      if (e.length === 0) {
        h = null;
        break bb0;
      }
      let t = e.map((e) =>
        e.kind === `installed` && !xt(i.summary)
          ? (0, $.jsx)(
              Xt,
              {
                cardIcon: (0, $.jsx)(`span`, {
                  className: `flex size-8 shrink-0 items-center justify-center`,
                  children: Gn({
                    className: `icon-md text-secondary`,
                    size: 24,
                    iconSkill: Vn(e),
                    semanticSkill: e.installedSkill,
                  }),
                }),
                cardIconContainer: !1,
                displayName: qn(e.installedSkill),
                hideCardActions: u,
                hostId: n,
                installedStateAction: `toggle`,
                modalIconShape: `rounded`,
                onSkillsUpdated: l,
                presentation: d,
                scopeBadges: [],
                showModalUninstall: !1,
                skill: e.installedSkill,
                toggleOnly: !0,
              },
              `installed-skill-${e.installedSkill.path}`,
            )
          : (0, $.jsx)(
              Hn,
              { hostId: n, plugin: i, skill: e.pluginSkill, presentation: d, showReferences: p },
              `skill-${e.pluginSkill.path ?? e.pluginSkill.name}`,
            ),
      );
      m =
        d === `settings`
          ? (0, $.jsx)(Nn, { children: t })
          : (0, $.jsx)(mt, {
              disableContentInlineInset: !0,
              count: e.length,
              title: (0, $.jsx)(f, {
                id: `plugins.detail.includes.skills.title`,
                defaultMessage: `Skills`,
                description: `Title for included skills on the plugin detail page`,
              }),
              children: (0, $.jsx)(yn, { previewItems: e.map(Bn), children: t }),
            });
    }
    ((t[0] = u),
      (t[1] = n),
      (t[2] = a),
      (t[3] = l),
      (t[4] = i),
      (t[5] = d),
      (t[6] = p),
      (t[7] = o),
      (t[8] = m),
      (t[9] = h));
  } else ((m = t[8]), (h = t[9]));
  return h === Symbol.for(`react.early_return_sentinel`) ? m : h;
}
function Rn(e) {
  return { kind: `unavailable`, pluginSkill: e };
}
function zn(e) {
  return { kind: `installed`, ...e };
}
function Bn(e) {
  let t = e.kind === `installed` ? e.installedSkill : e.pluginSkill;
  return {
    icon: Gn({ className: `icon-xs text-secondary`, iconSkill: Vn(e), semanticSkill: t }),
    key: `${e.kind}-${t.path ?? t.name}`,
    label: qn(t),
  };
}
function Vn(e) {
  return (e.kind, e.pluginSkill);
}
function Hn(e) {
  let t = (0, Jn.c)(37),
    { hostId: n, plugin: r, skill: i, presentation: a, showReferences: o } = e,
    { accountId: s, userId: c } = gt(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { preview: !1 }), (t[0] = l)) : (l = t[0]);
  let { data: u } = Ae(void 0, l),
    d = c != null && u?.id === s && u?.structure === `workspace`,
    m;
  t[1] === i ? (m = t[2]) : ((m = qn(i)), (t[1] = i), (t[2] = m));
  let h = m,
    g;
  t[3] === i ? (g = t[4]) : ((g = p(i)), (t[3] = i), (t[4] = g));
  let _ = g,
    v;
  t[5] === i
    ? (v = t[6])
    : ((v = Gn({ className: `icon-md text-secondary`, size: 24, iconSkill: i, semanticSkill: i })),
      (t[5] = i),
      (t[6] = v));
  let y = v,
    b;
  t[7] === y
    ? (b = t[8])
    : ((b = (0, $.jsx)(`span`, {
        className: `flex size-8 shrink-0 items-center justify-center`,
        children: y,
      })),
      (t[7] = y),
      (t[8] = b));
  let x = b;
  if (xt(r.summary)) {
    let e;
    t[9] === d
      ? (e = t[10])
      : ((e = d
          ? (0, $.jsx)(f, {
              id: `plugins.detail.skills.disabledByAdmin`,
              defaultMessage: `This skill can’t be viewed because the plugin is disabled by your workspace admin`,
              description: `Tooltip on a disabled skill row in plugin details explaining that workspace admin restrictions prevent viewing its instructions`,
            })
          : (0, $.jsx)(f, {
              id: `plugins.detail.skills.pluginUnavailable`,
              defaultMessage: `This skill can’t be viewed because the plugin is unavailable`,
              description: `Tooltip shown when a personal-account or signed-out visitor hovers or focuses a disabled skill on the plugin details page. Explains why the skill's instructions cannot be opened without attributing the restriction to a workspace administrator. Use a neutral explanatory tone; the tooltip can wrap and has no final period.`,
            })),
        (t[9] = d),
        (t[10] = e));
    let n;
    t[11] !== r.summary.disabledReason || t[12] !== e
      ? ((n = (0, $.jsx)(Bt, { disabledReason: r.summary.disabledReason, children: e })),
        (t[11] = r.summary.disabledReason),
        (t[12] = e),
        (t[13] = n))
      : (n = t[13]);
    let i = n,
      o;
    return (
      t[14] !== x || t[15] !== _ || t[16] !== i || t[17] !== a || t[18] !== h
        ? ((o =
            a === `settings`
              ? (0, $.jsx)(U, {
                  tooltipContent: i,
                  children: (0, $.jsx)(w, {
                    disabled: !0,
                    edgeRounding: `surface`,
                    label: h,
                    description: _,
                    onClick: Wn,
                  }),
                })
              : (0, $.jsx)(It, {
                  contentClassName: `opacity-60`,
                  disabled: !0,
                  icon: x,
                  iconContainer: !1,
                  title: h,
                  description: _,
                  descriptionClassName: `line-clamp-1`,
                  presentation: `row`,
                  tooltip: i,
                })),
          (t[14] = x),
          (t[15] = _),
          (t[16] = i),
          (t[17] = a),
          (t[18] = h),
          (t[19] = o))
        : (o = t[19]),
      o
    );
  }
  let S;
  t[20] !== n ||
  t[21] !== r ||
  t[22] !== a ||
  t[23] !== o ||
  t[24] !== i.name ||
  t[25] !== i.path ||
  t[26] !== h
    ? ((S = (e) => {
        let { isOpen: t } = e;
        return (0, $.jsxs)($.Fragment, {
          children: [
            a === `settings`
              ? null
              : (0, $.jsx)(`h2`, {
                  className: `flex min-h-7 items-center gap-1.5 text-lg leading-6 font-medium select-none`,
                  children: (0, $.jsx)(f, {
                    id: `plugins.skillDetails.skill.heading`,
                    defaultMessage: `Skill`,
                    description: `Short section heading above the instructions block in the skill preview modal opened from a plugin page. Identifies the skill's instructions separately from any supporting reference files listed below.`,
                  }),
                }),
            (0, $.jsx)(Pe, {
              hostId: n,
              isOpen: t,
              remotePluginSkill: Kn(r, i.name),
              remotePluginVersion: r.summary.version,
              skillPath: i.path,
              showReferences: o && Ve(n),
              titleText: h,
              presentation: a === `settings` ? `contents` : `preview`,
            }),
          ],
        });
      }),
      (t[20] = n),
      (t[21] = r),
      (t[22] = a),
      (t[23] = o),
      (t[24] = i.name),
      (t[25] = i.path),
      (t[26] = h),
      (t[27] = S))
    : (S = t[27]);
  let C = a === `settings` ? i.description : _,
    T = a === `settings` ? void 0 : Un,
    E;
  return (
    t[28] !== x ||
    t[29] !== _ ||
    t[30] !== a ||
    t[31] !== i.name ||
    t[32] !== S ||
    t[33] !== C ||
    t[34] !== T ||
    t[35] !== h
      ? ((E = (0, $.jsx)(Wt, {
          cardDescription: _,
          cardIcon: x,
          cardIconContainer: !1,
          cardTitle: h,
          modalBody: S,
          modalDescription: C,
          modalFooter: T,
          modalIconShape: `rounded`,
          modalTitle: h,
          modalTitleText: h,
          modalName: i.name,
          presentation: a,
        })),
        (t[28] = x),
        (t[29] = _),
        (t[30] = a),
        (t[31] = i.name),
        (t[32] = S),
        (t[33] = C),
        (t[34] = T),
        (t[35] = h),
        (t[36] = E))
      : (E = t[36]),
    E
  );
}
function Un(e) {
  let { closePreview: n } = e;
  return (0, $.jsx)(`div`, {
    className: `flex w-full justify-end`,
    children: (0, $.jsx)(t, {
      color: `primary`,
      size: `toolbar`,
      onClick: n,
      children: (0, $.jsx)(f, {
        id: `common.close`,
        defaultMessage: `Close`,
        description: `Close button label`,
      }),
    }),
  });
}
function Wn() {}
function Gn({ className: e, iconSkill: t, semanticSkill: n, size: r }) {
  let i = Ct(null, {
    iconSmall: t.interface?.iconSmall,
    iconLarge: t.interface?.iconLarge,
    basePath: t.path,
    alt: qn(n),
    fallbackName: t.name,
    fallbackDescription: p(t),
    smallOnly: !0,
    fallbackSize: r,
    fallbackClassName: `text-secondary rounded-2xs`,
  });
  return (0, Yn.createElement)(i, Qe(i, R(e, `rounded-2xs`), `text-secondary rounded-2xs`));
}
function Kn(e, t) {
  return e.summary.source.type === `remote`
    ? { remoteMarketplaceName: e.marketplaceName, remotePluginId: ze(e.summary), skillName: t }
    : null;
}
function qn(e) {
  let t = e.interface?.displayName?.trim();
  if (t) return t;
  let n = e.name.split(`:`).pop();
  return ue(n || e.name);
}
var Jn, Yn, $;
function Xn() {
  return (Xn = e(() => {
    ((Jn = fe()),
      M(),
      K(),
      (Yn = ge()),
      B(),
      et(),
      De(),
      W(),
      _t(),
      P(),
      Ft(),
      In(),
      ne(),
      He(),
      qt(),
      Jt(),
      Ye(),
      Ce(),
      zt(),
      je(),
      Dn(),
      ($ = he()));
  }))();
}
export {
  en as _,
  On as a,
  Dn as c,
  nn as d,
  mn as f,
  Qt as g,
  Zt as h,
  In as i,
  hn as l,
  Y as m,
  Xn as n,
  Mn as o,
  tn as p,
  Nn as r,
  yn as s,
  Ln as t,
  vn as u,
};
//# sourceMappingURL=skills-6b6661642f04.js.map
