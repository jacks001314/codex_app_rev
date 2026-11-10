import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  BY as i,
  Bst as a,
  DB as o,
  DU as s,
  FBt as c,
  HO as l,
  IO as u,
  JO as d,
  LNt as f,
  LO as p,
  Lst as m,
  MNt as h,
  Mst as g,
  NNt as _,
  NSt as v,
  OB as y,
  PBt as b,
  Qst as x,
  RO as S,
  Rst as C,
  TI as w,
  TY as T,
  UQ as E,
  USt as ee,
  VSt as D,
  Vrt as O,
  WO as te,
  WQ as ne,
  X3 as k,
  XOt as A,
  Y3 as re,
  YOt as j,
  Z3 as M,
  ZSt as N,
  ast as P,
  cI as F,
  ck as I,
  ew as L,
  iCt as R,
  ist as z,
  iw as ie,
  jst as ae,
  kV as B,
  nB as V,
  nCt as H,
  nQ as oe,
  okt as se,
  qO as ce,
  qrt as U,
  rB as le,
  rk as ue,
  sI as W,
  sw as de,
  tQ as fe,
  tk as pe,
  tkt as G,
  uw as K,
  vst as me,
  yst as he,
  zO as ge,
  zY as _e,
  zst as ve,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as ye,
  $a as be,
  Bat as xe,
  Bhr as Se,
  Bin as Ce,
  DMn as we,
  Dfr as Te,
  Emr as Ee,
  Fin as De,
  Hhr as Oe,
  IMr as ke,
  Iin as Ae,
  Ja as je,
  Jfr as Me,
  Jmr as Ne,
  K4 as Pe,
  Lfr as Fe,
  M6t as Ie,
  N3n as Le,
  N6t as Re,
  RMr as ze,
  Rmr as Be,
  SBr as Ve,
  SMn as He,
  SRn as Ue,
  Tfr as We,
  Tmr as Ge,
  Uin as Ke,
  Vin as qe,
  Vmr as Je,
  Xmr as Ye,
  Y2 as Xe,
  Z2 as q,
  ZLn as Ze,
  _pr as Qe,
  ann as $e,
  ao as et,
  bRn as tt,
  cA as nt,
  eRn as rt,
  emr as it,
  iRr as at,
  imr as ot,
  inn as st,
  io as ct,
  jcn as lt,
  oon as ut,
  q4 as dt,
  rmr as ft,
  sA as pt,
  sRr as mt,
  snn as ht,
  son as gt,
  tRn as _t,
  tmr as vt,
  wMn as yt,
  wcn as bt,
  wmr as xt,
  xBr as St,
  z3n as Ct,
  zat as wt,
} from "./app-initial-ad16eaadf81f.js";
import { _f as Tt, gf as Et } from "./app-primary-3e00728c2a4c.js";
import { n as Dt, r as Ot } from "./plugin-connector-setup-b971d5575d59.js";
import { n as kt, t as At } from "./card-tile-50cbf58d3a76.js";
import { n as jt, t as Mt } from "./skill-preview-card-shell-922d7f12b89a.js";
import { a as Nt, i as Pt, r as Ft, t as It } from "./plugin-connected-account-links-e850d089d83d.js";
import { n as Lt, t as Rt } from "./settings-loading-row-1fcc5b514745.js";
import { n as zt, t as Bt } from "./profile-lock-cbf73bd970b9.js";
import { n as Vt, t as Ht } from "./plugin-disabled-reason-d4d9fa410a83.js";
import { n as Ut, r as Wt, t as Gt } from "./browser-extension-setup-messages-aa86746b77e7.js";
import { a as Kt, n as qt, o as Jt, s as Yt, t as Xt } from "./skill-card-373515a275f8.js";
function Zt(e) {
  let t = (0, $t.c)(19),
    { template: n, managementUrl: r, onManageApps: i } = e,
    a = se(),
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
              children: (0, J.jsx)(V, {
                tooltipContent: s,
                children: (0, J.jsx)(`span`, {
                  role: `img`,
                  "aria-label": s,
                  children: (0, J.jsx)(Bt, { className: `icon-sm shrink-0` }),
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
    ? ((d = (0, J.jsx)(De, { className: `icon-sm text-secondary` })), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== n.logoUrl || t[10] !== n.logoUrlDark || t[11] !== n.name
    ? ((f = (0, J.jsx)(Ie, {
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
      ? ((p = (0, J.jsx)(At, {
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
            Ue({ event: e, initiator: `open_in_browser_bridge`, href: n, openTarget: `external-browser` })));
      }),
      (t[5] = n),
      (t[6] = a),
      (t[7] = r),
      (t[8] = s))
    : (s = t[8]);
  let c;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, J.jsx)(G, {
        id: `plugins.detail.template.manageOnWeb`,
        defaultMessage: `Manage app`,
        description: `Open ChatGPT web to set up, reconnect, add, or remove connections for this app template`,
      })),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] !== n || t[11] !== a
    ? ((l = a ? null : (0, J.jsx)(rt, { className: `icon-xs`, href: n, openTarget: `external-browser` })),
      (t[10] = n),
      (t[11] = a),
      (t[12] = l))
    : (l = t[12]);
  let u;
  return (
    t[13] !== o || t[14] !== s || t[15] !== l
      ? ((u = (0, J.jsxs)(k, { ...o, color: `secondary`, size: `toolbar`, onClick: s, children: [c, l] })),
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
    (($t = b()), A(), Re(), M(), tt(), _t(), le(), Ae(), zt(), kt(), (J = f()));
  }))();
}
var Y;
function tn() {
  return (tn = e(() => {
    (A(),
      (Y = j({
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
    { authMethod: u, isLoading: d } = ot(),
    f = u === `chatgpt` || u === `chatgptAuthTokens`,
    p;
  n[0] === a.id ? (p = n[1]) : ((p = Be(a.id)), (n[0] = a.id), (n[1] = p));
  let m = f && !!r.accountId && !!r.userId && o == null && c == null,
    h;
  n[2] !== p || n[3] !== m
    ? ((h = { ...p, enabled: m, retry: !1, staleTime: ve.FIVE_MINUTES }), (n[2] = p), (n[3] = m), (n[4] = h))
    : (h = n[4]);
  let { data: _, isError: v, refetch: y } = g(h),
    b;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = { enabled: !1 }), (n[5] = b)) : (b = n[5]);
  let { isError: x, refetch: S } = vt(b),
    C = (!r.accountId || !r.userId) && x,
    w = o ?? _,
    T = (o == null && v) || C;
  if (!d && !f) return null;
  if (c == null && (w == null || T)) {
    let e;
    return (
      n[6] !== C || n[7] !== T || n[8] !== y || n[9] !== S
        ? ((e = (0, Z.jsx)(t, {
            children: T
              ? (0, Z.jsx)(de, {
                  label: (0, Z.jsx)(G, { ...Q.loadingError }),
                  control: (0, Z.jsx)(re, {
                    color: `ghost`,
                    onClick: () => void (C ? S() : y()),
                    children: (0, Z.jsx)(G, { ...Q.retry }),
                  }),
                })
              : (0, Z.jsx)(Rt, { children: (0, Z.jsx)(G, { ...Q.loading }) }),
          })),
          (n[6] = C),
          (n[7] = T),
          (n[8] = y),
          (n[9] = S),
          (n[10] = e))
        : (e = n[10]),
      e
    );
  }
  let E;
  n[11] !== a.id || n[12] !== w || n[13] !== c
    ? ((E = c ?? Oe(a.id, w)), (n[11] = a.id), (n[12] = w), (n[13] = c), (n[14] = E))
    : (E = n[14]);
  let ee = E;
  if (!ee && l !== `settings`) return null;
  let D = `${s}:${r.userId}:${r.accountId}:${a.id}`,
    O;
  return (
    n[15] !== r ||
    n[16] !== i ||
    n[17] !== a ||
    n[18] !== ee ||
    n[19] !== s ||
    n[20] !== o ||
    n[21] !== D ||
    n[22] !== l
      ? ((O = (0, Z.jsx)(
          rn,
          {
            accountContext: r,
            accountRowAction: i,
            app: a,
            canConnectAnotherAccount: ee,
            connector: o,
            hostId: s,
            variant: l,
          },
          D,
        )),
        (n[15] = r),
        (n[16] = i),
        (n[17] = a),
        (n[18] = ee),
        (n[19] = s),
        (n[20] = o),
        (n[21] = D),
        (n[22] = l),
        (n[23] = O))
      : (O = n[23]),
    O
  );
}
function rn(e) {
  let t = (0, pn.c)(122),
    {
      accountContext: r,
      accountRowAction: i,
      app: a,
      canConnectAnotherAccount: o,
      connector: s,
      hostId: c,
      variant: l,
    } = e,
    d = n(x),
    f = se(),
    m = r.accountId ?? null,
    h = r.userId ?? null,
    _;
  t[0] !== m || t[1] !== h
    ? ((_ = { accountId: m, userId: h }), (t[0] = m), (t[1] = h), (t[2] = _))
    : (_ = t[2]);
  let { data: v } = H(Xe, _),
    { nameAtLogin: y } = ot(),
    b;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = { preview: !1 }), (t[3] = b)) : (b = t[3]);
  let { data: w } = lt(void 0, b),
    T = v?.first_name?.trim() || (v == null ? y?.trim() : v.name?.trim()),
    E;
  w != null &&
    w.id === r.accountId &&
    (E = w.structure === `personal` ? (r.userId ?? void 0) : (w.account_user_id ?? void 0));
  let O = D(),
    ne = ee(),
    k = (0, X.useRef)(null),
    A = (0, X.useRef)(null),
    j = C(),
    M;
  t[4] === a.id ? (M = t[5]) : ((M = Se(a.id)), (t[4] = a.id), (t[5] = M));
  let N = M,
    P;
  t[6] === a.id ? (P = t[7]) : ((P = Be(a.id)), (t[6] = a.id), (t[7] = P));
  let F = s == null && !!r.userId && !!r.accountId,
    I;
  t[8] !== P || t[9] !== F
    ? ((I = { ...P, enabled: F, retry: !1, staleTime: ve.FIVE_MINUTES }), (t[8] = P), (t[9] = F), (t[10] = I))
    : (I = t[10]);
  let { data: L, isPending: R, isError: z, isSuccess: ie, refetch: ae } = g(I),
    B = s ?? L,
    V = r.accountId ?? null,
    oe = r.userId ?? null,
    le = B?.id ?? a.id,
    ue;
  t[11] !== oe || t[12] !== le || t[13] !== V
    ? ((ue = { accountId: V, userId: oe, appId: le }), (t[11] = oe), (t[12] = le), (t[13] = V), (t[14] = ue))
    : (ue = t[14]);
  let W = ue,
    de = H(Pt, W),
    fe = r.selection == null ? de : r.selection.linkId,
    pe;
  t[15] !== r.accountId || t[16] !== r.selection || t[17] !== d || t[18] !== W
    ? ((pe = (e) => {
        d.get(ke) === (r.accountId ?? null) && (r.selection?.onChange(e), Nt(d, W, e));
      }),
      (t[15] = r.accountId),
      (t[16] = r.selection),
      (t[17] = d),
      (t[18] = W),
      (t[19] = pe))
    : (pe = t[19]);
  let K = pe,
    [me, _e] = (0, X.useState)(null),
    [ye, be] = (0, X.useState)(null),
    xe,
    Ce;
  (t[20] !== r.accountId || t[21] !== r.userId || t[22] !== a.id || t[23] !== c || t[24] !== d
    ? ((xe = () => () => {
        A.current != null &&
          (He(d, { accountId: r.accountId, appId: a.id, hostId: c, userId: r.userId }, A.current),
          (A.current = null));
      }),
      (Ce = [d, r.accountId, r.userId, a.id, c]),
      (t[20] = r.accountId),
      (t[21] = r.userId),
      (t[22] = a.id),
      (t[23] = c),
      (t[24] = d),
      (t[25] = xe),
      (t[26] = Ce))
    : ((xe = t[25]), (Ce = t[26])),
    (0, X.useEffect)(xe, Ce));
  let we;
  t[27] !== r.accountId || t[28] !== r.userId
    ? ((we = xt({ accountId: r.accountId, userId: r.userId })),
      (t[27] = r.accountId),
      (t[28] = r.userId),
      (t[29] = we))
    : (we = t[29]);
  let Te = we,
    { data: Ee, isPending: De, isError: Oe, isSuccess: Ae, refetch: je } = g(Te),
    Me;
  t[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((Me = { enabled: !1 }), (t[30] = Me)) : (Me = t[30]);
  let { isError: Ne, refetch: Pe } = vt(Me),
    Ie = (!r.accountId || !r.userId) && Ne,
    Re = Ee == null ? void 0 : It(Ee, a.id),
    ze,
    Ue,
    We;
  if (t[31] !== r.accountId || t[32] !== r.userId || t[33] !== a.id) {
    let e = Le(a.id);
    ((We = g),
      (ze = e),
      (Ue = [...e.queryKey, r.accountId ?? ``, r.userId ?? ``]),
      (t[31] = r.accountId),
      (t[32] = r.userId),
      (t[33] = a.id),
      (t[34] = ze),
      (t[35] = Ue),
      (t[36] = We));
  } else ((ze = t[34]), (Ue = t[35]), (We = t[36]));
  let Ke = l === `settings` && !o && Re?.length === 1 && !Re[0]?.owner_profile?.email?.trim(),
    qe;
  t[37] !== ze || t[38] !== Ue || t[39] !== Ke
    ? ((qe = { ...ze, queryKey: Ue, staleTime: ve.FIVE_MINUTES, enabled: Ke }),
      (t[37] = ze),
      (t[38] = Ue),
      (t[39] = Ke),
      (t[40] = qe))
    : (qe = t[40]);
  let { data: Ye } = We(qe),
    q = Re?.map((e) =>
      !e.owner_profile?.email?.trim() && Ye?.id === e.id && Ye.owner_profile != null
        ? { ...e, owner_profile: { ...Ye.owner_profile, ...e.owner_profile, email: Ye.owner_profile.email } }
        : e,
    ),
    Ze;
  t[41] !== N || t[42] !== Te.queryKey
    ? ((Ze = [...Te.queryKey, `pending-account-rename`, N]), (t[41] = N), (t[42] = Te.queryKey), (t[43] = Ze))
    : (Ze = t[43]);
  let Qe = Ze,
    et;
  t[44] === Qe
    ? (et = t[45])
    : ((et = { enabled: !1, queryFn: ln, queryKey: Qe, staleTime: ve.INFINITE }), (t[44] = Qe), (t[45] = et));
  let { data: tt } = g(et),
    nt = tt == null ? void 0 : q?.find((e) => e.id === tt.linkId),
    rt = nt ?? q?.find((e) => e.id === fe) ?? q?.find(cn) ?? q?.[0],
    it = q?.find((e) => e.id === me) ?? nt,
    st;
  t[46] !== a.id || t[47] !== j || t[48] !== Te.queryKey
    ? ((st = (e, t) => {
        (j.setQueryData(Te.queryKey, (n) => n?.map((n) => (n.id === e ? t(n) : n))),
          j.setQueryData(Le(a.id).queryKey, (n) => (n?.id === e ? t(n) : (n ?? null))));
      }),
      (t[46] = a.id),
      (t[47] = j),
      (t[48] = Te.queryKey),
      (t[49] = st))
    : (st = t[49]);
  let ct = st,
    ut;
  t[50] === N
    ? (ut = t[51])
    : ((ut = async (e) => {
        if (e.visibility === `HIDDEN` || e.id.startsWith(`implicit_link::`) || Se(e.connector_id) !== N)
          throw Error(`Cannot disconnect an inaccessible connector account`);
        await at.safeDelete(`/aip/connectors/links/{link_id}`, {
          surface: `settings`,
          parameters: { path: { link_id: e.id } },
          additionalHeaders: Ge(),
        });
      }),
      (t[50] = N),
      (t[51] = ut));
  let dt;
  t[52] !== f || t[53] !== d
    ? ((dt = () => {
        d.get(U).danger(f.formatMessage(Q.disconnectError), {
          errorAnalytics: { toastId: `pluginConnectedAccounts.onError.disconnectError` },
        });
      }),
      (t[52] = f),
      (t[53] = d),
      (t[54] = dt))
    : (dt = t[54]);
  let ft = he({
      mutationFn: ut,
      onSuccess: (e, t) => {
        j.setQueryData(Te.queryKey, (e) => e?.filter((e) => e.id !== t.id));
        let n = q?.filter((e) => e.id !== t.id);
        (rt?.id === t.id && K(n?.find(sn)?.id ?? n?.[0]?.id ?? null),
          j.setQueryData(Le(a.id).queryKey, (e) => (e?.id === t.id ? (n?.[0] ?? null) : (e ?? null))),
          d.get(U).success(f.formatMessage(Q.disconnectSuccess)),
          Promise.all([
            Ve(j, Fe),
            j.refetchQueries({ exact: !0, queryKey: Te.queryKey, type: `active` }, { throwOnError: !0 }),
            ...(n?.length === 0 ? [r.onLastAccountDisconnected()] : []),
          ]).catch(() => {
            d.get(U).danger(f.formatMessage(Q.refreshError), {
              errorAnalytics: { toastId: `pluginConnectedAccounts.onSuccess.refreshError` },
            });
          }));
      },
      onError: dt,
    }),
    pt;
  t[55] !== f || t[56] !== Qe || t[57] !== j || t[58] !== d || t[59] !== K || t[60] !== ct
    ? ((pt = (e) => {
        let { link: t, name: n } = e;
        (ct(t.id, (e) => ({ ...e, name: n })),
          j.setQueryData(Qe, null),
          K(t.id),
          _e(null),
          d.get(U).success(f.formatMessage(Q.renameSaveSuccess)));
      }),
      (t[55] = f),
      (t[56] = Qe),
      (t[57] = j),
      (t[58] = d),
      (t[59] = K),
      (t[60] = ct),
      (t[61] = pt))
    : (pt = t[61]);
  let mt;
  t[62] !== f || t[63] !== d
    ? ((mt = () => {
        d.get(U).danger(f.formatMessage(Q.renameSaveError), {
          errorAnalytics: { toastId: `pluginConnectedAccounts.onError.renameSaveError` },
        });
      }),
      (t[62] = f),
      (t[63] = d),
      (t[64] = mt))
    : (mt = t[64]);
  let gt;
  t[65] !== pt || t[66] !== mt
    ? ((gt = { mutationFn: on, onSuccess: pt, onError: mt }), (t[65] = pt), (t[66] = mt), (t[67] = gt))
    : (gt = t[67]);
  let _t = he(gt),
    bt = q?.find((e) =>
      r.pendingConnection?.appId === a.id
        ? r.pendingConnection.kind === `reauth` && r.pendingConnection.linkId === e.id
        : r.isAppConnectPending(a.id, { kind: `apps-tab`, reauthLinkId: e.id }),
    )?.id,
    St;
  t[68] !== r || t[69] !== a.id
    ? ((St = r.isAppConnectPending(a.id, { kind: `apps-tab` })), (t[68] = r), (t[69] = a.id), (t[70] = St))
    : (St = t[70]);
  let Ct = St,
    wt = bt == null && Ct,
    Tt;
  t[71] !== r || t[72] !== a.id || t[73] !== Ct || t[74] !== bt
    ? ((Tt =
        bt != null ||
        Ct ||
        (r.pendingConnection?.appId === a.id && r.pendingConnection.kind === `add`) ||
        (r.isAppConnectPending(a.id) && !r.isAppReauthPending(a.id))),
      (t[71] = r),
      (t[72] = a.id),
      (t[73] = Ct),
      (t[74] = bt),
      (t[75] = Tt))
    : (Tt = t[75]);
  let Et = Tt,
    Dt;
  t[76] !== r ||
  t[77] !== a ||
  t[78] !== B?.supports_oauth_owner_profile_id ||
  t[79] !== c ||
  t[80] !== q ||
  t[81] !== d ||
  t[82] !== rt
    ? ((Dt = (e, t) => {
        let n = yt(d, { accountId: r.accountId, appId: a.id, hostId: c, userId: r.userId }, t),
          i = n?.resumeTarget.addAccountAttempt;
        A.current = i?.id ?? null;
        let o = e ?? n?.appConnectOptions,
          s =
            rt?.auth_type === `OAUTH` &&
            !rt.owner_profile?.id?.trim() &&
            !i?.reauthenticatedLinkIds.includes(rt.id)
              ? rt
              : q?.find(
                  (e) =>
                    e.auth_type === `OAUTH` &&
                    !e.owner_profile?.id?.trim() &&
                    !i?.reauthenticatedLinkIds.includes(e.id),
                );
        if (s != null && B?.supports_oauth_owner_profile_id !== !1) {
          if (r.userId == null) return;
          let e = i ?? {
            id: crypto.randomUUID(),
            userId: r.userId,
            expiresAt: Date.now() + 18e5,
            reauthenticatedLinkIds: [],
          };
          ((A.current = e.id), be({ link: s, appConnectOptions: o, addAccountAttempt: e }));
          return;
        }
        return r.onConnectAccount(a, {
          appId: a.id,
          kind: `add`,
          appConnectOptions: o,
          addAccountAttempt: i,
        });
      }),
      (t[76] = r),
      (t[77] = a),
      (t[78] = B?.supports_oauth_owner_profile_id),
      (t[79] = c),
      (t[80] = q),
      (t[81] = d),
      (t[82] = rt),
      (t[83] = Dt))
    : (Dt = t[83]);
  let kt = Dt,
    At = r.canConnectAccounts !== !1,
    jt =
      o &&
      At &&
      r.isConnectorSetupReady &&
      Ae &&
      (s != null || ie) &&
      B != null &&
      B.status !== `DISABLED_BY_ADMIN` &&
      (q?.length ?? 0) > 0 &&
      !ft.isPending &&
      (!Et || wt),
    Mt;
  t[84] !== r.accountId ||
  t[85] !== r.userId ||
  t[86] !== a.id ||
  t[87] !== kt ||
  t[88] !== c ||
  t[89] !== f ||
  t[90] !== O ||
  t[91] !== ne ||
  t[92] !== d
    ? ((Mt = () =>
        Ot({
          scope: d,
          accountId: r.accountId,
          userId: r.userId,
          connectorId: a.id,
          location: O,
          navigate: ne,
          handledKey: k,
          canResumeAttempt: (e) =>
            yt(d, { accountId: r.accountId, appId: a.id, hostId: c, userId: r.userId }, e) != null,
          intl: f,
          onSetup: kt,
        })),
      (t[84] = r.accountId),
      (t[85] = r.userId),
      (t[86] = a.id),
      (t[87] = kt),
      (t[88] = c),
      (t[89] = f),
      (t[90] = O),
      (t[91] = ne),
      (t[92] = d),
      (t[93] = Mt))
    : (Mt = t[93]);
  let Ft = (0, X.useEffectEvent)(Mt),
    Lt;
  t[94] !== jt || t[95] !== Ft
    ? ((Lt = () => {
        jt && Ft();
      }),
      (t[94] = jt),
      (t[95] = Ft),
      (t[96] = Lt))
    : (Lt = t[96]);
  let Rt;
  if (
    (t[97] !== r.accountId || t[98] !== r.userId || t[99] !== jt || t[100] !== O
      ? ((Rt = [jt, O, r.accountId, r.userId]),
        (t[97] = r.accountId),
        (t[98] = r.userId),
        (t[99] = jt),
        (t[100] = O),
        (t[101] = Rt))
      : (Rt = t[101]),
    (0, X.useEffect)(Lt, Rt),
    l === `settings` && B != null && q != null)
  ) {
    let e = Je(B);
    if ((e === `NONE` || e === `API_KEY`) && !q.some(an)) return null;
  }
  let zt = a.name.trim() || B?.name?.trim(),
    Bt;
  if (ye != null) {
    let e = ye.link,
      t = $e(e, T, E);
    ((Bt = ht(e)),
      (Bt ??=
        e.auth_type === `NONE` && zt
          ? f.formatMessage(Y.noAccountIdentity, { connectorName: zt })
          : t && zt
            ? f.formatMessage(Y.personalizedAccountIdentityFallback, { userName: t, appName: zt })
            : t
              ? f.formatMessage(Y.holderAccountIdentityFallback, { userName: t })
              : zt
                ? f.formatMessage(Y.appAccountIdentityFallback, { appName: zt })
                : f.formatMessage(Y.accountIdentityFallback)));
  }
  let Vt;
  t[102] !== r || t[103] !== W.appId
    ? ((Vt = (0, Z.jsx)(un, { accountContext: r, appId: W.appId })),
      (t[102] = r),
      (t[103] = W.appId),
      (t[104] = Vt))
    : (Vt = t[104]);
  let Ht;
  t[105] === kt
    ? (Ht = t[106])
    : ((Ht = () => {
        kt();
      }),
      (t[105] = kt),
      (t[106] = Ht));
  let Ut;
  t[107] !== ft || t[108] !== K
    ? ((Ut = (e) => {
        (K(e.id), ft.mutate(e));
      }),
      (t[107] = ft),
      (t[108] = K),
      (t[109] = Ut))
    : (Ut = t[109]);
  let Wt;
  t[110] !== r || t[111] !== a
    ? ((Wt = (e) => {
        r.onConnectAccount(a, { appId: a.id, kind: `reauth`, linkId: e.id });
      }),
      (t[110] = r),
      (t[111] = a),
      (t[112] = Wt))
    : (Wt = t[112]);
  let Gt;
  t[113] !== Ie || t[114] !== je || t[115] !== Pe || t[116] !== ae || t[117] !== s
    ? ((Gt = () => {
        Ie ? Pe() : Promise.all([je(), s == null ? ae() : void 0]);
      }),
      (t[113] = Ie),
      (t[114] = je),
      (t[115] = Pe),
      (t[116] = ae),
      (t[117] = s),
      (t[118] = Gt))
    : (Gt = t[118]);
  let Kt, qt;
  return (
    t[119] === K
      ? ((Kt = t[120]), (qt = t[121]))
      : ((Kt = (e) => K(e.id)),
        (qt = (e) => {
          (K(e.id), _e(e.id));
        }),
        (t[119] = K),
        (t[120] = Kt),
        (t[121] = qt)),
    (0, Z.jsxs)(Z.Fragment, {
      children: [
        Vt,
        (0, Z.jsx)(dn, {
          accountRowAction: i,
          app: a,
          variant: l,
          canConnectAnotherAccount: o,
          canRetryConnection: wt,
          canConnectAccounts: At,
          defaultAccountName: B?.name,
          userName: T,
          userId: E,
          disconnectingLinkId: ft.isPending ? ft.variables?.id : void 0,
          hasError: Oe || (s == null && z) || Ie,
          isConnectionPending: Et,
          isLoading: (De || (s == null && R)) && !Ie,
          links: B == null && q?.length !== 0 ? void 0 : q,
          pendingReauthLinkId: bt,
          selectedLinkId: rt?.id,
          onConnectAnother: Ht,
          onDisconnect: Ut,
          onReconnect: Wt,
          onRetry: Gt,
          onSelect: Kt,
          onRename: qt,
        }),
        it == null || B == null
          ? null
          : (0, Z.jsx)(
              fn,
              {
                connectorName: a.name,
                defaultAccountName: B.name,
                userName: T,
                userId: E,
                isSaving: _t.isPending,
                link: it,
                suggestedAccountName: me == null ? tt?.suggestedAccountName : void 0,
                onClose: () => {
                  (j.setQueryData(Qe, null), K(it.id), _e(null));
                },
                onSave: (e) => {
                  _t.mutate({ link: it, name: e });
                },
              },
              it.id,
            ),
        !At || ye == null
          ? null
          : (0, Z.jsx)(te, {
              open: !0,
              contentProps: { "aria-describedby": void 0 },
              onOpenChange: (e) => {
                e ||
                  (He(
                    d,
                    { accountId: r.accountId, appId: a.id, hostId: c, userId: r.userId },
                    ye.addAccountAttempt.id,
                  ),
                  be(null));
              },
              children: (0, Z.jsxs)(u, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(),
                    At &&
                      (r.onConnectAccount(a, {
                        appId: a.id,
                        kind: `reauth`,
                        linkId: ye.link.id,
                        appConnectOptions: ye.appConnectOptions,
                        addAccountAttempt: ye.addAccountAttempt,
                      }),
                      be(null)));
                },
                children: [
                  (0, Z.jsx)(ge, {
                    children: (0, Z.jsx)(S, {
                      title: (0, Z.jsx)(ce, { children: (0, Z.jsx)(G, { ...Q.reconnectFirst }) }),
                      subtitle: f.formatMessage(Q.reconnectFirstDescription, { accountName: Bt }),
                    }),
                  }),
                  (0, Z.jsx)(ge, {
                    children: (0, Z.jsxs)(p, {
                      children: [
                        (0, Z.jsx)(re, {
                          color: `ghost`,
                          onClick: () => {
                            (He(
                              d,
                              { accountId: r.accountId, appId: a.id, hostId: c, userId: r.userId },
                              ye.addAccountAttempt.id,
                            ),
                              be(null));
                          },
                          children: (0, Z.jsx)(G, { ...Q.cancel }),
                        }),
                        (0, Z.jsx)(re, {
                          color: `primary`,
                          type: `submit`,
                          children: (0, Z.jsx)(G, { ...Q.reconnect }),
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
  return Ne(e) != null;
}
async function on(e) {
  let { link: t, name: n } = e;
  return (
    await at.safePatch(`/ps/v2/links/{link_id}`, {
      surface: `settings`,
      parameters: { path: { link_id: t.id } },
      requestBody: { name: n },
      additionalHeaders: Ge(),
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
    { accountContext: r, appId: i } = e,
    a = n(x),
    o = R(ke),
    s = r.accountId ?? null,
    c = r.userId ?? null,
    l = r.selection?.linkId,
    u,
    d;
  return (
    t[0] !== s || t[1] !== o || t[2] !== i || t[3] !== l || t[4] !== a || t[5] !== c
      ? ((u = () => {
          l !== void 0 && o === s && Nt(a, { accountId: s, userId: c, appId: i }, l);
        }),
        (d = [a, o, s, c, i, l]),
        (t[0] = s),
        (t[1] = o),
        (t[2] = i),
        (t[3] = l),
        (t[4] = a),
        (t[5] = c),
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
      canConnectAccounts: d,
      defaultAccountName: f,
      userName: p,
      userId: m,
      disconnectingLinkId: h,
      hasError: g,
      isConnectionPending: _,
      isLoading: v,
      links: y,
      pendingReauthLinkId: b,
      selectedLinkId: x,
      onConnectAnother: S,
      onDisconnect: C,
      onReconnect: w,
      onRename: T,
      onRetry: E,
      onSelect: ee,
    } = e,
    D = l === void 0 || l,
    O = u !== void 0 && u,
    te = d === void 0 || d,
    k = _ !== void 0 && _,
    A = se(),
    j = a.name.trim() || f?.trim(),
    M = (0, X.useId)(),
    N = (y?.length ?? 0) > 1,
    P;
  n[0] !== g || n[1] !== y || n[2] !== E
    ? ((P =
        g && y == null
          ? (0, Z.jsx)(de, {
              label: (0, Z.jsx)(G, { ...Q.loadingError }),
              control: (0, Z.jsx)(re, {
                color: `ghost`,
                onClick: E,
                children: (0, Z.jsx)(G, { ...Q.retry }),
              }),
            })
          : null),
      (n[0] = g),
      (n[1] = y),
      (n[2] = E),
      (n[3] = P))
    : (P = n[3]);
  let F = P;
  if (y?.length === 0) return null;
  if (y == null && !a.isAccessible) {
    let e;
    return (
      n[4] === F
        ? (e = n[5])
        : ((e = F == null ? null : (0, Z.jsx)(t, { children: F })), (n[4] = F), (n[5] = e)),
      e
    );
  }
  let I;
  n[6] !== D || n[7] !== N
    ? ((I =
        D || N
          ? (0, Z.jsx)(G, {
              id: `plugins.detail.accounts.title`,
              defaultMessage: `Connected accounts`,
              description: `Section heading above provider accounts connected to one app on a Codex plugin detail page`,
            })
          : (0, Z.jsx)(G, {
              id: `plugins.detail.accounts.singleTitle`,
              defaultMessage: `Connected account`,
              description: `Section heading for the connected provider account of an app that does not support connecting multiple accounts`,
            })),
      (n[6] = D),
      (n[7] = N),
      (n[8] = I))
    : (I = n[8]);
  let L = I,
    R = t,
    z;
  n[9] !== v || n[10] !== y
    ? ((z = v && y == null ? (0, Z.jsx)(Rt, { children: (0, Z.jsx)(G, { ...Q.loading }) }) : null),
      (n[9] = v),
      (n[10] = y),
      (n[11] = z))
    : (z = n[11]);
  let ae = y?.map((e) => {
      let t = $e(e, p, m),
        n = ht(e);
      n ??=
        e.auth_type === `NONE` && j
          ? A.formatMessage(Y.noAccountIdentity, { connectorName: j })
          : t && j
            ? A.formatMessage(Y.personalizedAccountIdentityFallback, { userName: t, appName: j })
            : t
              ? A.formatMessage(Y.holderAccountIdentityFallback, { userName: t })
              : j
                ? A.formatMessage(Y.appAccountIdentityFallback, { appName: j })
                : A.formatMessage(Y.accountIdentityFallback);
      let o = st(e, a.name, f),
        l = Ne(e) != null,
        u = e.auth_status === `REAUTH_REQUIRED`,
        d = b === e.id,
        g = h === e.id,
        _ = `${M}-${e.id}`,
        v = u ? `${_}-warning` : void 0,
        y = o == null || o === n ? void 0 : `${_}-nickname`,
        S = (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(`span`, { className: `truncate text-default`, children: n }),
            o == null || o === n
              ? null
              : (0, Z.jsx)(`span`, { id: y, className: `truncate text-sm text-secondary`, children: o }),
            u
              ? (0, Z.jsx)(`span`, {
                  className: `sr-only`,
                  id: v,
                  children: (0, Z.jsx)(G, { ...Q.reconnectRequired }),
                })
              : null,
          ],
        }),
        E = (0, Z.jsx)(ut, { alt: ``, name: n, size: `md`, src: e.owner_profile?.picture ?? null }),
        O = (0, Z.jsxs)(Z.Fragment, {
          children: [
            te && (u || d) && l
              ? (0, Z.jsx)(re, {
                  id: `${_}-reconnect`,
                  "aria-labelledby": y == null ? void 0 : `${_}-reconnect ${y}`,
                  "aria-label": A.formatMessage(Q.reconnectAccount, { accountName: n }),
                  color: c === `settings` ? `outline` : `ghost`,
                  size: c === `settings` ? `toolbar` : `default`,
                  disabled: h != null || (k && !d),
                  onClick: () => w(e),
                  children: (0, Z.jsx)(G, { ...Q.reconnect }),
                })
              : null,
            (0, Z.jsxs)(pe, {
              align: `end`,
              contentWidth: `xs`,
              triggerButton: (0, Z.jsx)(re, {
                id: `${_}-actions`,
                "aria-labelledby": y == null ? void 0 : `${_}-actions ${y}`,
                "aria-busy": g,
                "aria-label": A.formatMessage(Q.accountActions, { accountName: n }),
                color: `ghost`,
                disabled: h != null || d || k,
                loading: g,
                size: `icon`,
                children: (0, Z.jsx)(s, {}),
              }),
              children: [
                D
                  ? (0, Z.jsx)(ue.Item, {
                      leftIconAsset: ne,
                      onSelect: () => T(e),
                      children: (0, Z.jsx)(G, { ...Q.rename }),
                    })
                  : null,
                te && l
                  ? (0, Z.jsxs)(ue.Item, {
                      onSelect: () => w(e),
                      children: [
                        (0, Z.jsx)(ue.ItemIcon, { size: `xs`, children: (0, Z.jsx)(B, {}) }),
                        (0, Z.jsx)(G, { ...Q.reconnect }),
                      ],
                    })
                  : null,
                (0, Z.jsx)(ue.Item, {
                  leftIconAsset: i,
                  tone: `danger`,
                  onSelect: () => C(e),
                  children: (0, Z.jsx)(G, { ...Q.disconnect }),
                }),
              ],
            }),
          ],
        }),
        P = h != null || d || k;
      return r === `rename` && D && !P
        ? (0, Z.jsx)(
            ie,
            {
              actions: O,
              ariaLabel: A.formatMessage(
                {
                  id: `plugins.detail.accounts.renameAccountRow`,
                  defaultMessage: `Rename {accountName}{hasNickname, select, true { ({nickname})} other {}}`,
                  description: `Accessible name of a connected-account row that opens its nickname editor; accountName is the provider identity and nickname is an optional user-defined account label`,
                },
                { accountName: n, hasNickname: y != null, nickname: o ?? `` },
              ),
              edgeRounding: `surface`,
              icon: E,
              label: (0, Z.jsx)(`span`, { className: `flex min-w-0 flex-col`, children: S }),
              onClick: () => T(e),
            },
            e.id,
          )
        : (0, Z.jsx)(
            de,
            {
              controlSizing: `content`,
              icon: E,
              label: N
                ? (0, Z.jsx)(`button`, {
                    id: `${_}-select`,
                    "aria-describedby": v,
                    "aria-labelledby": y == null ? void 0 : `${_}-select ${y}`,
                    "aria-label": A.formatMessage(Q.selectAccount, { accountName: n }),
                    "aria-pressed": x === e.id,
                    className: `flex max-w-full min-w-0 cursor-interaction flex-col text-start`,
                    disabled: P,
                    onClick: () => ee(e),
                    type: `button`,
                    children: S,
                  })
                : (0, Z.jsx)(`div`, {
                    id: `${_}-identity`,
                    "aria-describedby": v,
                    "aria-labelledby": y == null ? void 0 : `${_}-identity ${y}`,
                    "aria-label": n,
                    className: `flex min-w-0 flex-col`,
                    role: `group`,
                    children: S,
                  }),
              control: O,
            },
            e.id,
          );
    }),
    V;
  n[12] !== te || n[13] !== D || n[14] !== O || n[15] !== h || n[16] !== k || n[17] !== y || n[18] !== S
    ? ((V =
        y == null || !te || !D
          ? null
          : (0, Z.jsx)(ie, {
              disabled: h != null || (k && !O),
              edgeRounding: `surface`,
              icon: (0, Z.jsx)(`span`, {
                className: `flex size-9 items-center justify-center rounded-full bg-surface-secondary text-secondary`,
                children: (0, Z.jsx)(o, { "aria-hidden": !1, asset: oe }),
              }),
              label: (0, Z.jsx)(G, {
                id: `plugins.detail.accounts.connectAnother`,
                defaultMessage: `Connect another account`,
                description: `Action that connects an additional provider account to the same app while preserving all existing accounts`,
              }),
              onClick: S,
            })),
      (n[12] = te),
      (n[13] = D),
      (n[14] = O),
      (n[15] = h),
      (n[16] = k),
      (n[17] = y),
      (n[18] = S),
      (n[19] = V))
    : (V = n[19]);
  let H;
  n[20] !== R || n[21] !== F || n[22] !== z || n[23] !== ae || n[24] !== V
    ? ((H = (0, Z.jsxs)(R, { children: [z, F, ae, V] })),
      (n[20] = R),
      (n[21] = F),
      (n[22] = z),
      (n[23] = ae),
      (n[24] = V),
      (n[25] = H))
    : (H = n[25]);
  let ce = H,
    U;
  n[26] === a.id ? (U = n[27]) : ((U = Se(a.id)), (n[26] = a.id), (n[27] = U));
  let le = `plugin-connected-accounts-${U}`,
    W;
  return (
    n[28] !== ce || n[29] !== le || n[30] !== L || n[31] !== c
      ? ((W =
          c === `settings`
            ? (0, Z.jsxs)(pt, { id: le, children: [(0, Z.jsx)(pt.Header, { title: L }), ce] })
            : (0, Z.jsx)(ct, { id: le, title: L, children: ce })),
        (n[28] = ce),
        (n[29] = le),
        (n[30] = L),
        (n[31] = c),
        (n[32] = W))
      : (W = n[32]),
    W
  );
}
function fn(e) {
  let t = (0, pn.c)(74),
    {
      connectorName: n,
      defaultAccountName: r,
      userName: i,
      userId: a,
      isSaving: o,
      link: s,
      suggestedAccountName: c,
      onClose: l,
      onSave: d,
    } = e,
    f = se(),
    m;
  if (t[0] !== n || t[1] !== r || t[2] !== f || t[3] !== s || t[4] !== a || t[5] !== i) {
    let e = n.trim() || r?.trim(),
      o = $e(s, i, a),
      c;
    if ((t[7] === s ? (c = t[8]) : ((c = ht(s)), (t[7] = s), (t[8] = c)), (m = c), m == null)) {
      if (s.auth_type === `NONE` && e) m = f.formatMessage(Y.noAccountIdentity, { connectorName: e });
      else if (o && e)
        m = f.formatMessage(Y.personalizedAccountIdentityFallback, { userName: o, appName: e });
      else if (o) m = f.formatMessage(Y.holderAccountIdentityFallback, { userName: o });
      else if (e) m = f.formatMessage(Y.appAccountIdentityFallback, { appName: e });
      else {
        let e;
        (t[9] === f
          ? (e = t[10])
          : ((e = f.formatMessage(Y.accountIdentityFallback)), (t[9] = f), (t[10] = e)),
          (m = e));
      }
    }
    ((t[0] = n), (t[1] = r), (t[2] = f), (t[3] = s), (t[4] = a), (t[5] = i), (t[6] = m));
  } else m = t[6];
  let h = (0, X.useId)(),
    g;
  t[11] !== n || t[12] !== r || t[13] !== s
    ? ((g = st(s, n, r) ?? ``), (t[11] = n), (t[12] = r), (t[13] = s), (t[14] = g))
    : (g = t[14]);
  let _ = g,
    v;
  t[15] !== _ || t[16] !== f || t[17] !== c
    ? ((v = c == null ? _ : f.formatMessage(Q[c])), (t[15] = _), (t[16] = f), (t[17] = c), (t[18] = v))
    : (v = t[18]);
  let [y, b] = (0, X.useState)(v),
    [x, C] = (0, X.useState)(null),
    w;
  t[19] === y ? (w = t[20]) : ((w = y.trim()), (t[19] = y), (t[20] = w));
  let T = w,
    E;
  t[21] !== _ || t[22] !== o || t[23] !== s || t[24] !== T
    ? ((E = !o && T !== _ && T !== s.name.trim()),
      (t[21] = _),
      (t[22] = o),
      (t[23] = s),
      (t[24] = T),
      (t[25] = E))
    : (E = t[25]);
  let ee = E,
    D;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { "aria-describedby": void 0 }), (t[26] = D))
    : (D = t[26]);
  let O;
  t[27] !== o || t[28] !== l
    ? ((O = (e) => {
        !e && !o && l();
      }),
      (t[27] = o),
      (t[28] = l),
      (t[29] = O))
    : (O = t[29]);
  let ne;
  t[30] !== ee || t[31] !== d || t[32] !== T
    ? ((ne = (e) => {
        if ((e.preventDefault(), ee)) {
          if (!T) {
            C(`required`);
            return;
          }
          if (Array.from(T).length > 64) {
            C(`too-long`);
            return;
          }
          (C(null), d(T));
        }
      }),
      (t[30] = ee),
      (t[31] = d),
      (t[32] = T),
      (t[33] = ne))
    : (ne = t[33]);
  let k;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(ce, { children: (0, Z.jsx)(G, { ...Q.rename }) })), (t[34] = k))
    : (k = t[34]);
  let A;
  t[35] === m
    ? (A = t[36])
    : ((A = (0, Z.jsx)(ge, { children: (0, Z.jsx)(S, { title: k, subtitle: m, subtitleSize: `base` }) })),
      (t[35] = m),
      (t[36] = A));
  let j;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(G, { ...Q.nickname })), (t[37] = j))
    : (j = t[37]);
  let M;
  t[38] === h
    ? (M = t[39])
    : ((M = (0, Z.jsx)(pt.Header, {
        size: `base`,
        spacing: `compact`,
        title: (0, Z.jsx)(`label`, { className: `select-none`, htmlFor: h, children: j }),
      })),
      (t[38] = h),
      (t[39] = M));
  let N = x != null,
    P;
  t[40] === f ? (P = t[41]) : ((P = f.formatMessage(Q.nicknamePlaceholder)), (t[40] = f), (t[41] = P));
  let F;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (e) => {
        (b(e.target.value), C(null));
      }),
      (t[42] = F))
    : (F = t[42]);
  let I;
  t[43] !== h || t[44] !== o || t[45] !== y || t[46] !== N || t[47] !== P
    ? ((I = (0, Z.jsx)(Ze, {
        id: h,
        "aria-invalid": N,
        autoFocus: !0,
        disabled: o,
        name: `plugin-account-nickname`,
        placeholder: P,
        value: y,
        onChange: F,
      })),
      (t[43] = h),
      (t[44] = o),
      (t[45] = y),
      (t[46] = N),
      (t[47] = P),
      (t[48] = I))
    : (I = t[48]);
  let L;
  t[49] === x
    ? (L = t[50])
    : ((L =
        x == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `mt-2 text-sm text-danger`,
              role: `alert`,
              children:
                x === `required`
                  ? (0, Z.jsx)(G, { ...Q.nicknameRequired })
                  : (0, Z.jsx)(G, { ...Q.nicknameTooLong }),
            })),
      (t[49] = x),
      (t[50] = L));
  let R;
  t[51] !== M || t[52] !== I || t[53] !== L
    ? ((R = (0, Z.jsxs)(ge, { children: [M, I, L] })), (t[51] = M), (t[52] = I), (t[53] = L), (t[54] = R))
    : (R = t[54]);
  let z;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Z.jsx)(G, { ...Q.cancel })), (t[55] = z))
    : (z = t[55]);
  let ie;
  t[56] !== o || t[57] !== l
    ? ((ie = (0, Z.jsx)(re, { color: `ghost`, disabled: o, onClick: l, children: z })),
      (t[56] = o),
      (t[57] = l),
      (t[58] = ie))
    : (ie = t[58]);
  let ae = !ee,
    B;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Z.jsx)(G, { ...Q.save })), (t[59] = B))
    : (B = t[59]);
  let V;
  t[60] !== o || t[61] !== ae
    ? ((V = (0, Z.jsx)(re, { color: `primary`, disabled: ae, loading: o, type: `submit`, children: B })),
      (t[60] = o),
      (t[61] = ae),
      (t[62] = V))
    : (V = t[62]);
  let H;
  t[63] !== ie || t[64] !== V
    ? ((H = (0, Z.jsxs)(ge, {
        children: [null, (0, Z.jsx)(Z.Fragment, { children: (0, Z.jsxs)(p, { children: [ie, V] }) })],
      })),
      (t[63] = ie),
      (t[64] = V),
      (t[65] = H))
    : (H = t[65]);
  let oe;
  t[66] !== R || t[67] !== H || t[68] !== ne || t[69] !== A
    ? ((oe = (0, Z.jsxs)(u, { as: `form`, onSubmit: ne, children: [A, R, H] })),
      (t[66] = R),
      (t[67] = H),
      (t[68] = ne),
      (t[69] = A),
      (t[70] = oe))
    : (oe = t[70]);
  let U;
  return (
    t[71] !== oe || t[72] !== O
      ? ((U = (0, Z.jsx)(te, { open: !0, contentProps: D, onOpenChange: O, children: oe })),
        (t[71] = oe),
        (t[72] = O),
        (t[73] = U))
      : (U = t[73]),
    U
  );
}
var pn, X, Z, Q;
function mn() {
  return (mn = e(() => {
    ((pn = b()),
      E(),
      fe(),
      _e(),
      me(),
      ae(),
      m(),
      N(),
      (X = c()),
      A(),
      v(),
      Ye(),
      we(),
      Ct(),
      Ee(),
      ze(),
      ft(),
      it(),
      q(),
      bt(),
      gt(),
      M(),
      et(),
      d(),
      l(),
      I(),
      y(),
      T(),
      ye(),
      O(),
      St(),
      r(),
      nt(),
      Lt(),
      K(),
      L(),
      a(),
      mt(),
      tn(),
      Ft(),
      Dt(),
      Me(),
      (Z = f()),
      (Q = j({
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
    ? ((o = (0, _n.jsx)(Et, {
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
        children: (0, _n.jsx)(wt, { className: `icon-md text-secondary` }),
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
      ? ((f = (0, _n.jsx)(At, {
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
    ((gn = b()), Tt(), xe(), kt(), (_n = f()));
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
        return (0, Tn.jsxs)(Kt, {
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
            (0, Tn.jsx)(G, {
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
      ? ((s = (0, Tn.jsx)(Jt, { items: a, visibleItemLimit: En, renderExpandRow: o, children: bn })),
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
    ((Cn = b()), (wn = c()), A(), Yt(), (Tn = f()), (En = 5));
  }))();
}
function On(e) {
  let n = (0, An.c)(10),
    { plugin: r, browserExtensions: i } = e,
    a;
  n[0] === i ? (a = n[1]) : ((a = i === void 0 ? [] : i), (n[0] = i), (n[1] = a));
  let o = a,
    s = se();
  if (!r.summary.installed || o.length === 0) return null;
  let c;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, jn.jsx)(G, {
        id: `plugins.detail.setup`,
        defaultMessage: `Setup`,
        description: `Section title for browser extensions that need to be set up on the plugin detail page`,
      })),
      (n[2] = c))
    : (c = n[2]);
  let l;
  if (n[3] !== o || n[4] !== s) {
    let e;
    (n[6] === s
      ? (e = n[7])
      : ((e = (e) =>
          (0, jn.jsx)(
            de,
            {
              icon: (0, jn.jsx)(Ie, {
                alt: s.formatMessage(Ut(e.browserFamily)),
                className: `size-10`,
                fallback: (0, jn.jsx)(De, { className: `icon-lg text-secondary` }),
                logoUrl: e.iconUrl,
              }),
              label: (0, jn.jsx)(G, { ...Ut(e.browserFamily) }),
              description: (0, jn.jsx)(G, { ...Gt(e.browserFamily) }),
              control: (0, jn.jsx)(k, {
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
                  let n = z?.chromiumBrowser?.openUrl({ browserFamily: e.browserFamily, url: e.storeUrl });
                  if (n != null) {
                    (t.preventDefault(), n.catch(kn));
                    return;
                  }
                  Ue({
                    event: t,
                    href: e.storeUrl,
                    initiator: `open_in_browser_bridge`,
                    openTarget: `external-browser`,
                  });
                },
                children: (0, jn.jsx)(G, {
                  id: `plugins.detail.setup.openBrowserExtension`,
                  defaultMessage: `Open`,
                  description: `Button label for opening a browser extension setup URL from the plugin detail page`,
                }),
              }),
            },
            e.browserFamily,
          )),
        (n[6] = s),
        (n[7] = e)),
      (l = o.map(e)),
      (n[3] = o),
      (n[4] = s),
      (n[5] = l));
  } else l = n[5];
  let u;
  return (
    n[8] === l
      ? (u = n[9])
      : ((u = (0, jn.jsx)(ct, {
          id: `plugin-setup`,
          title: c,
          children: (0, jn.jsx)(t, { className: `overflow-hidden`, children: l }),
        })),
        (n[8] = l),
        (n[9] = u)),
    u
  );
}
function kn() {}
var An, jn;
function Mn() {
  return (Mn = e(() => {
    ((An = b()), A(), Re(), M(), et(), tt(), Ae(), P(), K(), L(), Wt(), (jn = f()));
  }))();
}
function Nn(e) {
  let n = (0, Pn.c)(3),
    { children: r } = e,
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Fn.jsx)(pt.Header, {
        title: (0, Fn.jsx)(G, {
          id: `browserPluginSettings.skills`,
          defaultMessage: `Skills`,
          description: `Skills included in an installed plugin`,
        }),
      })),
      (n[0] = i))
    : (i = n[0]);
  let a;
  return (
    n[1] === r
      ? (a = n[2])
      : ((a = (0, Fn.jsxs)(pt, { children: [i, (0, Fn.jsx)(t, { children: r })] })), (n[1] = r), (n[2] = a)),
    a
  );
}
var Pn, Fn;
function In() {
  return (In = e(() => {
    ((Pn = b()), A(), nt(), L(), (Fn = f()));
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
    f = c !== void 0 && c,
    p,
    m;
  if (
    t[0] !== u ||
    t[1] !== n ||
    t[2] !== a ||
    t[3] !== l ||
    t[4] !== i ||
    t[5] !== d ||
    t[6] !== f ||
    t[7] !== o
  ) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = [...a.map(zn), ...o.map(Rn)];
      if (e.length === 0) {
        m = null;
        break bb0;
      }
      let t = e.map((e) =>
        e.kind === `installed` && !dt(i.summary)
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
              { hostId: n, plugin: i, skill: e.pluginSkill, presentation: d, showReferences: f },
              `skill-${e.pluginSkill.path ?? e.pluginSkill.name}`,
            ),
      );
      p =
        d === `settings`
          ? (0, $.jsx)(Nn, { children: t })
          : (0, $.jsx)(ct, {
              disableContentInlineInset: !0,
              count: e.length,
              title: (0, $.jsx)(G, {
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
      (t[6] = f),
      (t[7] = o),
      (t[8] = p),
      (t[9] = m));
  } else ((p = t[8]), (m = t[9]));
  return m === Symbol.for(`react.early_return_sentinel`) ? p : m;
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
    { accountId: s, userId: c } = ot(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { preview: !1 }), (t[0] = l)) : (l = t[0]);
  let { data: u } = lt(void 0, l),
    d = c != null && u?.id === s && u?.structure === `workspace`,
    f;
  t[1] === i ? (f = t[2]) : ((f = qn(i)), (t[1] = i), (t[2] = f));
  let p = f,
    m;
  t[3] === i ? (m = t[4]) : ((m = w(i)), (t[3] = i), (t[4] = m));
  let h = m,
    g;
  t[5] === i
    ? (g = t[6])
    : ((g = Gn({ className: `icon-md text-secondary`, size: 24, iconSkill: i, semanticSkill: i })),
      (t[5] = i),
      (t[6] = g));
  let _ = g,
    v;
  t[7] === _
    ? (v = t[8])
    : ((v = (0, $.jsx)(`span`, {
        className: `flex size-8 shrink-0 items-center justify-center`,
        children: _,
      })),
      (t[7] = _),
      (t[8] = v));
  let y = v;
  if (dt(r.summary)) {
    let e;
    t[9] === d
      ? (e = t[10])
      : ((e = d
          ? (0, $.jsx)(G, {
              id: `plugins.detail.skills.disabledByAdmin`,
              defaultMessage: `This skill can’t be viewed because the plugin is disabled by your workspace admin`,
              description: `Tooltip on a disabled skill row in plugin details explaining that workspace admin restrictions prevent viewing its instructions`,
            })
          : (0, $.jsx)(G, {
              id: `plugins.detail.skills.pluginUnavailable`,
              defaultMessage: `This skill can’t be viewed because the plugin is unavailable`,
              description: `Tooltip shown when a personal-account or signed-out visitor hovers or focuses a disabled skill on the plugin details page. Explains why the skill's instructions cannot be opened without attributing the restriction to a workspace administrator. Use a neutral explanatory tone; the tooltip can wrap and has no final period.`,
            })),
        (t[9] = d),
        (t[10] = e));
    let n;
    t[11] !== r.summary.disabledReason || t[12] !== e
      ? ((n = (0, $.jsx)(Ht, { disabledReason: r.summary.disabledReason, children: e })),
        (t[11] = r.summary.disabledReason),
        (t[12] = e),
        (t[13] = n))
      : (n = t[13]);
    let i = n,
      o;
    return (
      t[14] !== y || t[15] !== h || t[16] !== i || t[17] !== a || t[18] !== p
        ? ((o =
            a === `settings`
              ? (0, $.jsx)(V, {
                  tooltipContent: i,
                  children: (0, $.jsx)(ie, {
                    disabled: !0,
                    edgeRounding: `surface`,
                    label: p,
                    description: h,
                    onClick: Wn,
                  }),
                })
              : (0, $.jsx)(At, {
                  contentClassName: `opacity-60`,
                  disabled: !0,
                  icon: y,
                  iconContainer: !1,
                  title: p,
                  description: h,
                  descriptionClassName: `line-clamp-1`,
                  presentation: `row`,
                  tooltip: i,
                })),
          (t[14] = y),
          (t[15] = h),
          (t[16] = i),
          (t[17] = a),
          (t[18] = p),
          (t[19] = o))
        : (o = t[19]),
      o
    );
  }
  let b;
  t[20] !== n ||
  t[21] !== r ||
  t[22] !== a ||
  t[23] !== o ||
  t[24] !== i.name ||
  t[25] !== i.path ||
  t[26] !== p
    ? ((b = (e) => {
        let { isOpen: t } = e;
        return (0, $.jsxs)($.Fragment, {
          children: [
            a === `settings`
              ? null
              : (0, $.jsx)(`h2`, {
                  className: `flex min-h-7 items-center gap-1.5 text-lg leading-6 font-medium select-none`,
                  children: (0, $.jsx)(G, {
                    id: `plugins.skillDetails.skill.heading`,
                    defaultMessage: `Skill`,
                    description: `Short section heading above the instructions block in the skill preview modal opened from a plugin page. Identifies the skill's instructions separately from any supporting reference files listed below.`,
                  }),
                }),
            (0, $.jsx)(je, {
              hostId: n,
              isOpen: t,
              remotePluginSkill: Kn(r, i.name),
              remotePluginVersion: r.summary.version,
              skillPath: i.path,
              showReferences: o && Te(n),
              titleText: p,
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
      (t[26] = p),
      (t[27] = b))
    : (b = t[27]);
  let x = a === `settings` ? i.description : h,
    S = a === `settings` ? void 0 : Un,
    C;
  return (
    t[28] !== y ||
    t[29] !== h ||
    t[30] !== a ||
    t[31] !== i.name ||
    t[32] !== b ||
    t[33] !== x ||
    t[34] !== S ||
    t[35] !== p
      ? ((C = (0, $.jsx)(Mt, {
          cardDescription: h,
          cardIcon: y,
          cardIconContainer: !1,
          cardTitle: p,
          modalBody: b,
          modalDescription: x,
          modalFooter: S,
          modalIconShape: `rounded`,
          modalTitle: p,
          modalTitleText: p,
          modalName: i.name,
          presentation: a,
        })),
        (t[28] = y),
        (t[29] = h),
        (t[30] = a),
        (t[31] = i.name),
        (t[32] = b),
        (t[33] = x),
        (t[34] = S),
        (t[35] = p),
        (t[36] = C))
      : (C = t[36]),
    C
  );
}
function Un(e) {
  let { closePreview: t } = e;
  return (0, $.jsx)(`div`, {
    className: `flex w-full justify-end`,
    children: (0, $.jsx)(re, {
      color: `primary`,
      size: `toolbar`,
      onClick: t,
      children: (0, $.jsx)(G, {
        id: `common.close`,
        defaultMessage: `Close`,
        description: `Close button label`,
      }),
    }),
  });
}
function Wn() {}
function Gn({ className: e, iconSkill: t, semanticSkill: n, size: r }) {
  let i = Ce(null, {
    iconSmall: t.interface?.iconSmall,
    iconLarge: t.interface?.iconLarge,
    basePath: t.path,
    alt: qn(n),
    fallbackName: t.name,
    fallbackDescription: w(t),
    smallOnly: !0,
    fallbackSize: r,
    fallbackClassName: `text-secondary rounded-2xs`,
  });
  return (0, Yn.createElement)(i, qe(i, h(e, `rounded-2xs`), `text-secondary rounded-2xs`));
}
function Kn(e, t) {
  return e.summary.source.type === `remote`
    ? { remoteMarketplaceName: e.marketplaceName, remotePluginId: Qe(e.summary), skillName: t }
    : null;
}
function qn(e) {
  let t = e.interface?.displayName?.trim();
  if (t) return t;
  let n = e.name.split(`:`).pop();
  return W(n || e.name);
}
var Jn, Yn, $;
function Xn() {
  return (Xn = e(() => {
    ((Jn = b()),
      _(),
      F(),
      (Yn = c()),
      A(),
      ft(),
      bt(),
      M(),
      et(),
      le(),
      kt(),
      In(),
      K(),
      Ke(),
      qt(),
      jt(),
      be(),
      Pe(),
      Vt(),
      We(),
      Dn(),
      ($ = f()));
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
//# sourceMappingURL=skills-aaddeb8b3b3d.js.map
