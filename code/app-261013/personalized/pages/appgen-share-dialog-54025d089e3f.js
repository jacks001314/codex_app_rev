import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  Cot as n,
  EPt as r,
  F9 as i,
  Fat as a,
  Fot as o,
  GE as s,
  Htt as c,
  IDt as l,
  Iot as u,
  Ixt as d,
  JDt as f,
  Kat as p,
  Kot as m,
  Lot as h,
  MO as g,
  Mz as _,
  Nz as v,
  O9 as y,
  Pat as b,
  Pxt as x,
  Rnt as S,
  SU as C,
  TJ as w,
  UQ as T,
  USt as E,
  Utt as D,
  VDt as O,
  Vtt as k,
  Vxt as A,
  WE as j,
  WQ as M,
  Xot as N,
  Y9 as P,
  Yot as ee,
  _Mt as te,
  cz as ne,
  dy as re,
  fO as F,
  frt as ie,
  gMt as ae,
  hot as oe,
  hrt as se,
  iO as I,
  jDt as L,
  jO as ce,
  kIt as le,
  lO as R,
  lV as ue,
  lot as z,
  mW as de,
  nst as fe,
  qat as pe,
  rO as me,
  sz as B,
  tst as he,
  uy as ge,
  vzt as _e,
  wot as ve,
  xMt as V,
  yAt as ye,
  yzt as be,
  zSt as xe,
  zxt as Se,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as Ce,
  Agn as we,
  CV as Te,
  DV as Ee,
  EPr as De,
  EV as Oe,
  Fgn as ke,
  Fin as H,
  GHt as U,
  Hin as Ae,
  JPn as je,
  KHt as Me,
  MV as Ne,
  Mgn as Pe,
  NV as Fe,
  OPn as Ie,
  OV as Le,
  OW as Re,
  Q3n as ze,
  QDr as Be,
  Skt as Ve,
  TMr as He,
  TV as Ue,
  XDr as W,
  XPn as We,
  Ymr as Ge,
  _Pr as Ke,
  bkt as qe,
  cV as Je,
  dH as G,
  e6n as Ye,
  eDr as Xe,
  ehr as Ze,
  fV as Qe,
  fur as $e,
  kPn as K,
  kV as et,
  kW as tt,
  nDr as nt,
  pV as rt,
  pur as it,
  sV as at,
  uH as ot,
  wMr as st,
  wV as ct,
  xV as lt,
  xkt as ut,
  ykt as dt,
} from "./app-initial-5851df3f6cb1.js";
import { n as ft, t as q } from "./profile-avatar-90effac925f0.js";
import { a as pt, i as mt, n as ht, r as gt } from "./use-workspace-users-9ff632adf20a.js";
import { i as _t, n as vt } from "./profile-card-24cf744f537b.js";
import { a as yt, i as bt, n as xt, o as St, r as Ct } from "./sites-share-query-8b03740b1df6.js";
import { n as wt, r as Tt, t as Et } from "./workspace-team-recipient-suggestions-f88127cfec32.js";
import { n as Dt, r as Ot, t as kt } from "./pin-analytics-417acc826387.js";
import { n as At, t as jt } from "./access-list-99033c7522ef.js";
import { n as Mt, t as Nt } from "./dialog-utils-21c4d759328d.js";
import { a as Pt, i as Ft, o as It, r as Lt, t as Rt } from "./member-count-5e188d46464b.js";
import { n as zt, t as Bt } from "./modal-footer-8c17ec58d94e.js";
import { n as Vt, t as Ht } from "./modal-permission-dropdown-75a4787ca1b8.js";
function Ut(e, t, n) {
  return m({
    queryKey: [`profile`, `pins`, t, e],
    queryFn:
      !n || e == null || t == null
        ? E
        : ({ signal: t }) =>
            Ge.safeGet(`/profiles/me/page/pins`, {
              signal: t,
              additionalHeaders: { "ChatGPT-Account-ID": e },
              expectedErrorStatuses: [403, 404],
            }),
    staleTime: b.ONE_MINUTE,
    refetchOnMount: `always`,
    retry: !1,
  });
}
function Wt({ scope: e, accountId: t, userId: n, queryClient: r, artifact: a, pins: s }) {
  let { queryKey: c } = Ut(t, n, !0),
    l = s?.pins?.items?.find((e) => e.kind === a.kind && e.artifact_id === a.artifact_id);
  return o({
    mutationFn: async (e) => {
      if (t == null || s?.pins == null) throw Error(`Profile pins are unavailable`);
      if (e) {
        let e = await Ge.safePost(`/profiles/me/page/pins`, {
          additionalHeaders: { "ChatGPT-Account-ID": t },
          requestBody: a,
          expectedErrorStatuses: [403, 404, 409, 422, 503],
        });
        if (e.error != null || e.pins == null) throw Error(`Profile pins could not be saved`);
        return e;
      }
      return l == null
        ? s
        : Ge.safeDelete(`/profiles/me/page/pins/{pin_id}`, {
            additionalHeaders: { "ChatGPT-Account-ID": t },
            parameters: { path: { pin_id: l.pin_id }, query: { expected_version: s.page_version } },
            expectedErrorStatuses: [403, 404, 409, 422],
          });
    },
    retry: !1,
    onMutate: () => l != null,
    onSuccess: async (o, s, l) => {
      (o.error == null &&
        o.pins != null &&
        s !== l &&
        Dt(e, s ? [] : [a], s ? [a] : [], i.CODEX_PROFILE_PIN_ENTRY_POINT_SITE_SHARE_DIALOG),
        await r.cancelQueries({ queryKey: c }),
        r.setQueryData(c, o),
        await r.invalidateQueries({ queryKey: [`profile`, `page`, n, t] }));
    },
    onError: async () => {
      await r.invalidateQueries({ queryKey: c });
    },
  });
}
function Gt() {
  return (Gt = e(() => {
    (S(), xe(), Ze(), kt(), a());
  }))();
}
function Kt({ pins: e, artifact: t, selectedPinned: n, canPin: r, enabled: i }) {
  let a = e?.pins?.items?.find((e) => e.kind === t.kind && e.artifact_id === t.artifact_id),
    o = r && (n ?? a != null);
  return {
    pinned: o,
    atLimit: a == null && e?.pins?.max_pins != null && (e.pins.items?.length ?? 0) >= e.pins.max_pins,
    hasPendingChange: i && e?.pins != null && o !== (a != null),
  };
}
function qt() {
  let e = (0, Yt.c)(6),
    t = O(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `appgenShareDialog.profilePin.loading`,
        defaultMessage: `Loading profile settings…`,
        description: `Accessible status for the Sites share modal's profile showcase placeholder while profile eligibility and saved pins load`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, J.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          (0, J.jsx)(`div`, {
            className: `size-7 shrink-0 overflow-hidden rounded-lg`,
            children: (0, J.jsx)(ze, { size: `fill` }),
          }),
          (0, J.jsx)(ze, { className: `w-36`, size: `md` }),
        ],
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 py-1`,
        "aria-hidden": !0,
        children: [
          r,
          (0, J.jsx)(`div`, {
            className: `h-5 w-8 shrink-0 overflow-hidden rounded-full`,
            children: (0, J.jsx)(ze, { size: `fill` }),
          }),
        ],
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === n
      ? (a = e[5])
      : ((a = (0, J.jsx)(R, {
          spacing: `large`,
          children: (0, J.jsx)(`div`, {
            className: `border-t border-default pt-3`,
            role: `status`,
            "aria-busy": `true`,
            "aria-label": n,
            children: i,
          }),
        })),
        (e[4] = n),
        (e[5] = a)),
    a
  );
}
function Jt(e) {
  let t = (0, Yt.c)(29),
    {
      atLimit: n,
      canPin: r,
      checked: i,
      disabled: a,
      error: o,
      isFetching: s,
      isWorkspaceAccount: c,
      onChange: u,
    } = e,
    d = (0, Xt.useId)(),
    f;
  if (!s && !r) {
    let e;
    (t[0] === c
      ? (e = t[1])
      : ((e = c
          ? (0, J.jsx)(l, {
              id: `appgenShareDialog.profilePin.workspaceOnly`,
              defaultMessage: `You can only pin Sites shared to your workspace on your profile`,
              description: `Tooltip explaining that a workspace profile can showcase a Site only when it is shared with at least everyone in the workspace`,
            })
          : (0, J.jsx)(l, {
              id: `appgenShareDialog.profilePin.publicOnly`,
              defaultMessage: `You can only pin Sites shared with “Anyone on the Internet” to your profile`,
              description: `Tooltip explaining that a personal profile can showcase only publicly shared Sites. The quoted text matches the Anyone on the Internet option in the sharing dropdown.`,
            })),
        (t[0] = c),
        (t[1] = e)),
      (f = e));
  } else if (!s && n) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(l, {
          id: `appgenShareDialog.profilePin.limit`,
          defaultMessage: `Your profile showcase is full. Remove an item before pinning this Site.`,
          description: `Tooltip explaining why another Site cannot be pinned when the profile pin limit is reached`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (f = e));
  }
  let p = f,
    m = f == null ? void 0 : 0,
    h = a && `opacity-60`,
    g;
  t[3] === h ? (g = t[4]) : ((g = ae(`flex min-w-0 items-center gap-2`, h)), (t[3] = h), (t[4] = g));
  let v;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, J.jsx)(`div`, {
        className: `flex size-7 shrink-0 items-center justify-center rounded-lg bg-surface-tertiary`,
        children: (0, J.jsx)(_, { asset: re }),
      })),
      (t[5] = v))
    : (v = t[5]);
  let y;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, J.jsx)(l, {
        id: `appgenShareDialog.profilePin.label`,
        defaultMessage: `Showcase this site on your profile`,
        description: `Toggle label in the Site sharing dialog to add or remove the Site from the user's profile showcase`,
      })),
      (t[6] = y))
    : (y = t[6]);
  let b;
  t[7] === d
    ? (b = t[8])
    : ((b = (0, J.jsx)(`span`, { id: d, className: `text-sm`, children: y })), (t[7] = d), (t[8] = b));
  let x;
  t[9] !== g || t[10] !== b
    ? ((x = (0, J.jsxs)(`div`, { className: g, children: [v, b] })), (t[9] = g), (t[10] = b), (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] !== i || t[13] !== a || t[14] !== d || t[15] !== u
    ? ((S = (0, J.jsx)(ce, {
        className: `shrink-0`,
        "aria-labelledby": d,
        checked: i,
        disabled: a,
        onChange: u,
      })),
      (t[12] = i),
      (t[13] = a),
      (t[14] = d),
      (t[15] = u),
      (t[16] = S))
    : (S = t[16]);
  let C;
  t[17] !== m || t[18] !== x || t[19] !== S
    ? ((C = (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 py-1`,
        tabIndex: m,
        children: [x, S],
      })),
      (t[17] = m),
      (t[18] = x),
      (t[19] = S),
      (t[20] = C))
    : (C = t[20]);
  let w;
  t[21] !== C || t[22] !== f
    ? ((w = (0, J.jsx)(B, { tooltipContent: p, children: C })), (t[21] = C), (t[22] = f), (t[23] = w))
    : (w = t[23]);
  let T;
  t[24] === o
    ? (T = t[25])
    : ((T =
        o == null
          ? null
          : (0, J.jsx)(`div`, {
              role: `alert`,
              className: `text-sm text-secondary`,
              children:
                o instanceof se && o.status === 409
                  ? (0, J.jsx)(l, {
                      id: `appgenShareDialog.profilePin.conflict`,
                      defaultMessage: `Your profile changed. Try again.`,
                      description: `A concurrent profile edit prevented changing this Site pin; the latest pins are reloaded so the user can try again`,
                    })
                  : (0, J.jsx)(l, {
                      id: `appgenShareDialog.profilePin.saveError`,
                      defaultMessage: `Unable to update your profile. Try again.`,
                      description: `Error adding or removing the Site from the profile; the draft toggle state is preserved for retry with Save`,
                    }),
            })),
      (t[24] = o),
      (t[25] = T));
  let E;
  return (
    t[26] !== w || t[27] !== T
      ? ((E = (0, J.jsx)(R, {
          spacing: `large`,
          children: (0, J.jsxs)(`div`, {
            className: `flex flex-col gap-3 border-t border-default pt-3 select-none`,
            children: [w, T],
          }),
        })),
        (t[26] = w),
        (t[27] = T),
        (t[28] = E))
      : (E = t[28]),
    E
  );
}
var Yt, Xt, J;
function Zt() {
  return (Zt = e(() => {
    ((Yt = _e()), ge(), te(), (Xt = be()), L(), F(), v(), Ye(), g(), ne(), ie(), (J = V()));
  }))();
}
function Qt(e) {
  let t = (0, Z.c)(181),
    {
      initialIsOwner: r,
      initialProjectTitle: a,
      onClose: o,
      projectId: s,
      showVisitAction: u,
      source: f,
    } = e,
    m = u === void 0 || u,
    g = d(n),
    _ = O(),
    { accountId: v, email: x, userId: S } = it(),
    { data: C } = Ae(),
    w = C?.structure === `workspace`,
    T = nt(`998088620`),
    { isProfileVisible: E, isProfileVisibilityLoading: k } = qe(),
    M = nt(`476199071`),
    ee = nt(`2196156952`),
    te = C?.plan_type,
    ne;
  t[0] === te ? (ne = t[1]) : ((ne = De(te)), (t[0] = te), (t[1] = ne));
  let re = ne,
    F = A(Ke),
    ie = C?.id,
    ae;
  t[2] === ie ? (ae = t[3]) : ((ae = [`accounts`, `settings`, ie]), (t[2] = ie), (t[3] = ae));
  let se = ee && w && re,
    I;
  t[4] !== C?.id || t[5] !== g || t[6] !== F
    ? ((I = (e) => {
        let { signal: t } = e;
        if (F) throw Error(`Account input subscription unavailable`);
        return st(g, C?.id ?? ``, t);
      }),
      (t[4] = C?.id),
      (t[5] = g),
      (t[6] = F),
      (t[7] = I))
    : (I = t[7]);
  let L;
  t[8] !== ae || t[9] !== se || t[10] !== I
    ? ((L = { queryKey: ae, enabled: se, queryFn: I, staleTime: p?.accessInputs == null ? b.ONE_MINUTE : 0 }),
      (t[8] = ae),
      (t[9] = se),
      (t[10] = I),
      (t[11] = L))
    : (L = t[11]);
  let { data: ce } = N(L),
    le;
  t[12] !== C || t[13] !== ee || t[14] !== re || t[15] !== ce?.permissions
    ? ((le =
        C != null &&
        ee &&
        (!re ||
          (C.account_user_role === `account-owner` && ce?.permissions != null) ||
          ce?.permissions?.includes(`chatgpt.workspace.feature.sites.invite_external.access`) === !0)),
      (t[12] = C),
      (t[13] = ee),
      (t[14] = re),
      (t[15] = ce?.permissions),
      (t[16] = le))
    : (le = t[16]);
  let ue = le,
    { data: z, isError: de, isLoading: pe } = Se(yt, s),
    me;
  t[17] !== z?.users || t[18] !== C?.account_user_id || t[19] !== x || t[20] !== de
    ? ((me =
        !de &&
        z?.users.some(
          (e) =>
            e.role === `owner` &&
            (e.account_user_id === C?.account_user_id || e.email?.toLowerCase() === x?.toLowerCase()),
        ) === !0),
      (t[17] = z?.users),
      (t[18] = C?.account_user_id),
      (t[19] = x),
      (t[20] = de),
      (t[21] = me))
    : (me = t[21]);
  let B = me,
    { data: he } = Se(Pe, s),
    ge = T && E && !k && B && C != null && z != null && !de,
    _e = fe(),
    ve;
  t[22] !== v || t[23] !== ge || t[24] !== S
    ? ((ve = Ut(v, S, ge)), (t[22] = v), (t[23] = ge), (t[24] = S), (t[25] = ve))
    : (ve = t[25]);
  let { data: V, isError: be, isFetching: xe } = N(ve),
    [Ce, we] = (0, zn.useState)(null),
    Te;
  t[26] !== v || t[27] !== V || t[28] !== s || t[29] !== _e || t[30] !== g || t[31] !== S
    ? ((Te = Wt({
        scope: g,
        accountId: v,
        userId: S,
        queryClient: _e,
        artifact: { kind: `site`, artifact_id: s },
        pins: V,
      })),
      (t[26] = v),
      (t[27] = V),
      (t[28] = s),
      (t[29] = _e),
      (t[30] = g),
      (t[31] = S),
      (t[32] = Te))
    : (Te = t[32]);
  let { mutateAsync: Ee, isPending: Oe, error: ke, reset: H } = h(Te),
    U = Se(St, s),
    [je, Me] = (0, zn.useState)(``),
    [Fe, Ie] = (0, zn.useState)(null),
    [Le, Re] = (0, zn.useState)(0),
    [ze, Ve] = (0, zn.useState)(null),
    [He, Ue] = (0, zn.useState)(null),
    W = U.isPending || Le > 0 || Oe,
    We;
  t[33] !== W || t[34] !== Oe || t[35] !== w || t[36] !== U.isPending || t[37] !== U.variables
    ? ((We = !Oe && (!W || (w && (!U.isPending || bt(U.variables))))),
      (t[33] = W),
      (t[34] = Oe),
      (t[35] = w),
      (t[36] = U.isPending),
      (t[37] = U.variables),
      (t[38] = We))
    : (We = t[38]);
  let Ge = We,
    Je;
  t[39] === je ? (Je = t[40]) : ((Je = je.trim()), (t[39] = je), (t[40] = Je));
  let G = Je,
    { data: Ye, isError: Xe, isPending: Ze } = pt(w ? je : ``),
    $e = Se(Tt, v ?? ``),
    K = w && $e,
    et;
  t[41] !== C || t[42] !== w
    ? ((et = w && De(C.plan_type)), (t[41] = C), (t[42] = w), (t[43] = et))
    : (et = t[43]);
  let tt = et,
    { data: rt, isError: at, isLoading: ot } = Se(wt, v ?? ``, { enabled: K }) ?? {},
    ct;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = { includeMemberCounts: !0 }), (t[44] = ct))
    : (ct = t[44]);
  let { data: lt, isError: ut, isLoading: dt, refetch: ft } = mt(tt && B ? G : ``, ct),
    q = Fe ?? z?.access_mode ?? null,
    gt = z?.users.map(hn) ?? [],
    _t = z?.groups ?? [],
    vt = w ? (z?.allowed_editors?.map(mn) ?? []) : [],
    Ct = new Set([...gt, ...vt].flatMap(pn)),
    Et = Nt({
      currentAccountUserId: C?.account_user_id,
      existingAccountUserIds: Ct,
      workspaceUsers: Ye,
    })?.filter(fn),
    Dt = new Set(_t.map(dn)),
    kt = new Set(_t.filter(un).map(ln)),
    At =
      K && !at && !W
        ? (rt ?? [])
            .filter((e) => !Dt.has(e.id) && e.name.toLocaleLowerCase().includes(G.toLocaleLowerCase()))
            .map(cn)
        : [],
    jt =
      G !== `` && tt && !ut && !W
        ? (lt ?? [])
            .filter(
              (e) =>
                e.name.toLocaleLowerCase().includes(G.toLocaleLowerCase()) &&
                !Dt.has(e.id) &&
                !At.some((t) => t.id === `group:workspace:${e.id}`),
            )
            .map((e) => ({
              id: `group:workspace:${e.id}`,
              label: e.name,
              secondaryLabel: Rt(_, e.num_members),
              avatar: (0, Q.jsx)(Lt, { groupId: e.id, size: `sm` }),
              target: { kind: `group`, groupId: e.id },
            }))
        : [],
    Mt = G.toLowerCase(),
    Pt =
      ue &&
      Bn.safeParse(Mt).success &&
      x?.trim().toLowerCase() !== Mt &&
      ![...gt, ...vt].some((e) => e.email?.trim().toLowerCase() === Mt) &&
      !Et?.some((e) => e.email?.trim().toLowerCase() === Mt),
    Ft = G === `` ? [] : [...(Et?.map(Ln) ?? []), ...(Pt && !W ? [Rn(Mt)] : [])],
    It = a,
    zt;
  t[45] === It
    ? (zt = t[46])
    : ((zt =
        It == null
          ? (0, Q.jsx)(l, {
              id: `appgenShareDialog.title`,
              defaultMessage: `Share`,
              description: `Title for the site sharing dialog`,
            })
          : (0, Q.jsx)(l, {
              id: `appgenShareDialog.projectTitle`,
              defaultMessage: `Share {siteTitle}`,
              description: `Title for the site sharing dialog including the site title`,
              values: { siteTitle: It },
            })),
      (t[45] = It),
      (t[46] = zt));
  let Bt = zt,
    Vt;
  if (!w) {
    let e;
    (t[47] === _
      ? (e = t[48])
      : ((e = _.formatMessage({
          id: `appgenShareDialog.externalEmailPlaceholder`,
          defaultMessage: `Enter an email address`,
          description: `Placeholder for entering an external viewer email address in the site share dialog`,
        })),
        (t[47] = _),
        (t[48] = e)),
      (Vt = e));
  } else if (K) {
    let e;
    (t[49] === _
      ? (e = t[50])
      : ((e = _.formatMessage({
          id: `appgenShareDialog.peopleTeamsPlaceholder`,
          defaultMessage: `Add people or teams`,
          description: `Placeholder and accessible label for inviting people and teams to a site`,
        })),
        (t[49] = _),
        (t[50] = e)),
      (Vt = e));
  } else {
    let e;
    (t[51] === _
      ? (e = t[52])
      : ((e = _.formatMessage({
          id: `appgenShareDialog.peopleGroupsPlaceholder`,
          defaultMessage: `Add people or groups`,
          description: `Placeholder and accessible label for searching workspace people and groups in the site sharing dialog; eligible teams are also suggested`,
        })),
        (t[51] = _),
        (t[52] = e)),
      (Vt = e));
  }
  let Ht = w && M && B,
    Gt = gt.some(sn),
    Yt = B && z?.access_mode !== `admins_only` && (q !== `public` || M) && (w || ue || Gt),
    Xt = Yt && (w || ue),
    J = z != null && q !== z.access_mode,
    Zt = q === `public` || (w && q === `workspace_all`),
    Qt;
  t[53] !== Zt || t[54] !== V || t[55] !== s || t[56] !== Ce || t[57] !== ge
    ? ((Qt = Kt({
        pins: V,
        artifact: { kind: `site`, artifact_id: s },
        selectedPinned: Ce,
        canPin: Zt,
        enabled: ge,
      })),
      (t[53] = Zt),
      (t[54] = V),
      (t[55] = s),
      (t[56] = Ce),
      (t[57] = ge),
      (t[58] = Qt))
    : (Qt = t[58]);
  let { pinned: _n, atLimit: vn, hasPendingChange: Y } = Qt,
    xn = V == null || be || xe,
    Sn = xn || (_n && vn),
    Cn = W || (!J && Y && Sn),
    wn;
  t[59] !== _ || t[60] !== g
    ? ((wn = function () {
        g.get(oe).danger(
          _.formatMessage({
            id: `appgenShareDialog.save.error`,
            defaultMessage: `Unable to save sharing settings`,
            description: `Error toast shown when saving site sharing settings fails`,
          }),
          { errorAnalytics: { toastId: `tpp_sites_response_share_modal_access_save_error` } },
        );
      }),
      (t[59] = _),
      (t[60] = g),
      (t[61] = wn))
    : (wn = t[61]);
  let X = wn,
    En;
  t[62] !== z ||
  t[63] !== q ||
  t[64] !== _n ||
  t[65] !== J ||
  t[66] !== Y ||
  t[67] !== Sn ||
  t[68] !== o ||
  t[69] !== s ||
  t[70] !== Ee ||
  t[71] !== g ||
  t[72] !== X ||
  t[73] !== f ||
  t[74] !== U
    ? ((En = async function () {
        if (z == null || q == null) {
          o();
          return;
        }
        if (J && q !== `admins_only`) {
          try {
            await U.mutateAsync({ access_mode: q });
          } catch {
            X();
            return;
          }
          try {
            Be(g, D, {
              accessMode: Hn[q],
              action: c.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
              addedIndividuals: !1,
              projectId: s,
              source: f,
            });
          } catch {}
          Ie(null);
        }
        if (Y && !Sn)
          try {
            (await Ee(_n), we(null));
          } catch {}
      }),
      (t[62] = z),
      (t[63] = q),
      (t[64] = _n),
      (t[65] = J),
      (t[66] = Y),
      (t[67] = Sn),
      (t[68] = o),
      (t[69] = s),
      (t[70] = Ee),
      (t[71] = g),
      (t[72] = X),
      (t[73] = f),
      (t[74] = U),
      (t[75] = En))
    : (En = t[75]);
  let Dn = En,
    On;
  t[76] === H
    ? (On = t[77])
    : ((On = function () {
        (Ie(null), we(null), H());
      }),
      (t[76] = H),
      (t[77] = On));
  let kn = On,
    An;
  t[78] !== w || t[79] !== H || t[80] !== Ce
    ? ((An = function (e) {
        (Ie(e),
          Ce === !0 && e !== `public` && (!w || e !== `workspace_all`) && (we(null), H()),
          e === `public` && Me(``));
      }),
      (t[78] = w),
      (t[79] = H),
      (t[80] = Ce),
      (t[81] = An))
    : (An = t[81]);
  let jn = An,
    Mn;
  t[82] !== z || t[83] !== gt || t[84] !== s || t[85] !== g || t[86] !== X || t[87] !== f || t[88] !== U
    ? ((Mn = function (e) {
        if (z == null) return;
        let t;
        ((t =
          e.kind === `user`
            ? { viewer_changes: { add_viewer_account_user_ids: [e.user.account_user_id] } }
            : e.kind === `group`
              ? {
                  allowed_workspace_group_ids: Array.from(
                    new Set([...z.groups.filter(on).map(an), e.groupId]),
                  ),
                }
              : { allowed_user_emails: [...gt.flatMap(rn), e.email] }),
          Me(``),
          U.mutateAsync({
            ...t,
            ...(e.kind === `user`
              ? {
                  optimistic_user: {
                    account_user_id: e.user.account_user_id,
                    email: e.user.email,
                    name: e.user.name ?? null,
                    role: `viewer`,
                  },
                }
              : {}),
          }).then(
            (t) => {
              try {
                Be(g, D, {
                  accessMode: Hn[t.access_mode],
                  action: c.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
                  addedIndividuals: e.kind === `user` || e.kind === `external`,
                  projectId: s,
                  source: f,
                });
              } catch {}
            },
            () => {
              X();
            },
          ));
      }),
      (t[82] = z),
      (t[83] = gt),
      (t[84] = s),
      (t[85] = g),
      (t[86] = X),
      (t[87] = f),
      (t[88] = U),
      (t[89] = Mn))
    : (Mn = t[89]);
  let Nn = Mn,
    Pn;
  t[90] !== s || t[91] !== _e || t[92] !== g || t[93] !== X || t[94] !== f || t[95] !== U
    ? ((Pn = function (e) {
        return xt(_e, s, e)
          ? Promise.resolve()
          : U.mutateAsync(e).then(
              (e) => {
                try {
                  Be(g, D, {
                    accessMode: Hn[e.access_mode],
                    action: c.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
                    addedIndividuals: !1,
                    projectId: s,
                    source: f,
                  });
                } catch {}
              },
              (e) => {
                throw (X(), e);
              },
            );
      }),
      (t[90] = s),
      (t[91] = _e),
      (t[92] = g),
      (t[93] = X),
      (t[94] = f),
      (t[95] = U),
      (t[96] = Pn))
    : (Pn = t[96]);
  let In = Pn,
    Vn;
  t[97] !== z || t[98] !== C || t[99] !== s || t[100] !== g || t[101] !== X || t[102] !== f || t[103] !== U
    ? ((Vn = async function (e) {
        let t = e.email,
          n = e.account_user_id;
        if (z == null || C == null || t == null || n == null) {
          X();
          return;
        }
        (Re(nn),
          await (async () => {
            try {
              let r = await ht(C.id, t);
              if (r == null) {
                X();
                return;
              }
              if (!g.get(yt, s).data?.users.some((t) => t.account_user_id === e.account_user_id)) return;
              let i = await U.mutateAsync({
                editor_changes: { add_editor_account_user_ids: [r] },
                optimistic_user: { ...e, account_user_id: n, role: `editor` },
              });
              try {
                Be(g, D, {
                  accessMode: Hn[i.access_mode],
                  action: c.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
                  addedIndividuals: !1,
                  projectId: s,
                  source: f,
                });
              } catch {}
            } catch {
              X();
            }
          })().finally(() => {
            Re(tn);
          }));
      }),
      (t[97] = z),
      (t[98] = C),
      (t[99] = s),
      (t[100] = g),
      (t[101] = X),
      (t[102] = f),
      (t[103] = U),
      (t[104] = Vn))
    : (Vn = t[104]);
  let $ = Vn,
    Un;
  t[105] !== z || t[106] !== In
    ? ((Un = function (e) {
        if (z == null) return Promise.resolve();
        switch (e.kind) {
          case `user`:
            return In(
              e.user.account_user_id == null
                ? {
                    allowed_user_emails: z.users.flatMap((t) =>
                      t.email == null || t.email === e.user.email ? [] : [t.email],
                    ),
                  }
                : { viewer_changes: { remove_viewer_account_user_ids: [e.user.account_user_id] } },
            );
          case `group`:
            return In({
              allowed_workspace_group_ids: z.groups.filter((t) => t.editable && t.id !== e.group.id).map(en),
            });
          case `editor`:
            return e.user.account_user_id == null
              ? Promise.resolve()
              : In({
                  viewer_changes: { remove_viewer_account_user_ids: [e.user.account_user_id] },
                  editor_changes: { remove_editor_account_user_ids: [e.user.account_user_id] },
                });
        }
      }),
      (t[105] = z),
      (t[106] = In),
      (t[107] = Un))
    : (Un = t[107]);
  let Wn = Un,
    Gn;
  t[108] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gn = (0, Q.jsx)(R, {
        className: `py-10`,
        children: (0, Q.jsx)(`div`, {
          className: `text-center text-sm font-medium text-secondary`,
          children: (0, Q.jsx)(l, {
            id: `appgenShareDialog.error`,
            defaultMessage: `Unable to load sharing settings`,
            description: `Error state title in the site share dialog`,
          }),
        }),
      })),
      (t[108] = Gn))
    : (Gn = t[108]);
  let Kn = Gn,
    qn = T && C != null && !de && !be && (pe ? r === !0 : B && z != null),
    Jn = null;
  if (qn && (k || (E && (pe || V == null)))) {
    let e;
    (t[109] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(qt, {})), (t[109] = e))
      : (e = t[109]),
      (Jn = e));
  } else if (qn && E) {
    let e = pe || !Zt || W || vn || xn,
      n = Y ? ke : null,
      r = pe || xe,
      a;
    t[110] !== C || t[111] !== w || t[112] !== H || t[113] !== g
      ? ((a = (e) => {
          let t;
          (C != null && (t = w ? y.CODEX_PROFILE_PAGE_SCOPE_WORKSPACE : y.CODEX_PROFILE_PAGE_SCOPE_PERSONAL),
            Ot(
              g,
              e
                ? P.CODEX_PROFILE_SHOWCASE_EDIT_ACTION_TYPE_ADD
                : P.CODEX_PROFILE_SHOWCASE_EDIT_ACTION_TYPE_REMOVE,
              `site`,
              i.CODEX_PROFILE_PIN_ENTRY_POINT_SITE_SHARE_DIALOG,
              t,
            ),
            we(e),
            H());
        }),
        (t[110] = C),
        (t[111] = w),
        (t[112] = H),
        (t[113] = g),
        (t[114] = a))
      : (a = t[114]);
    let o;
    (t[115] !== vn ||
    t[116] !== Zt ||
    t[117] !== _n ||
    t[118] !== w ||
    t[119] !== e ||
    t[120] !== n ||
    t[121] !== r ||
    t[122] !== a
      ? ((o = (0, Q.jsx)(Jt, {
          atLimit: vn,
          canPin: Zt,
          checked: _n,
          disabled: e,
          error: n,
          isFetching: r,
          isWorkspaceAccount: w,
          onChange: a,
        })),
        (t[115] = vn),
        (t[116] = Zt),
        (t[117] = _n),
        (t[118] = w),
        (t[119] = e),
        (t[120] = n),
        (t[121] = r),
        (t[122] = a),
        (t[123] = o))
      : (o = t[123]),
      (Jn = o));
  }
  let Yn;
  t[124] !== B || t[125] !== Dn || t[126] !== J || t[127] !== Y || t[128] !== Cn
    ? ((Yn = () => {
        B && (J || Y) && !Cn && Dn();
      }),
      (t[124] = B),
      (t[125] = Dn),
      (t[126] = J),
      (t[127] = Y),
      (t[128] = Cn),
      (t[129] = Yn))
    : (Yn = t[129]);
  let Xn;
  t[130] !== z ||
  t[131] !== Nn ||
  t[132] !== tt ||
  t[133] !== K ||
  t[134] !== Xt ||
  t[135] !== Ge ||
  t[136] !== jt ||
  t[137] !== ut ||
  t[138] !== dt ||
  t[139] !== Vt ||
  t[140] !== Ft ||
  t[141] !== ze ||
  t[142] !== de ||
  t[143] !== pe ||
  t[144] !== w ||
  t[145] !== je ||
  t[146] !== ft ||
  t[147] !== At ||
  t[148] !== at ||
  t[149] !== ot ||
  t[150] !== G ||
  t[151] !== Xe ||
  t[152] !== Ze
    ? ((Xn =
        !pe && !de && z != null && Xt
          ? (0, Q.jsx)(R, {
              children: (0, Q.jsx)(Qe, {
                searchStatus: {
                  peopleError: w && G !== `` && Xe,
                  groupsError: G !== `` && tt && ut,
                  teamsError: K && at,
                  teamsLoading: K && ot,
                },
                ariaLabel: Vt,
                emptyMessage:
                  G === `` || Xe || (tt && ut) || (K && at)
                    ? null
                    : (0, Q.jsx)(l, {
                        id: `appgenShareDialog.noWorkspaceRecipients`,
                        defaultMessage: `No matching people or groups`,
                        description: `Empty state shown when no workspace people or groups match the site share dialog autocomplete query`,
                      }),
                disabled: !Ge,
                optionSections:
                  w &&
                  ((G !== `` && Ze) || (K && ot) || (tt && dt)) &&
                  jt.length === 0 &&
                  At.length === 0 &&
                  Ft.length === 0
                    ? void 0
                    : [
                        {
                          id: `teams`,
                          label: (0, Q.jsx)(l, {
                            id: `appgenShareDialog.yourTeams`,
                            defaultMessage: `Your teams`,
                            description: `Heading for the user's team suggestions in the site sharing dialog`,
                          }),
                          options: At,
                        },
                        {
                          id: `groups`,
                          label: (0, Q.jsx)(l, {
                            id: `appgenShareDialog.groups`,
                            defaultMessage: `Groups`,
                            description: `Heading for matching workspace groups in the site sharing dialog`,
                          }),
                          options: jt,
                        },
                        {
                          id: `people`,
                          label: (0, Q.jsx)(l, {
                            id: `appgenShareDialog.people`,
                            defaultMessage: `People`,
                            description: `Heading for matching people in the site sharing dialog`,
                          }),
                          options: Ft,
                        },
                      ],
                showSuggestionsOnFocus: K,
                trailingContent:
                  tt && ut && G !== ``
                    ? (0, Q.jsx)(ye, {
                        color: `secondary`,
                        size: `sm`,
                        onClick: () => void ft(),
                        children: (0, Q.jsx)(l, {
                          id: `appgenShareDialog.retryGroups`,
                          defaultMessage: `Retry`,
                          description: `Retries the failed workspace group search in site sharing`,
                        }),
                      })
                    : null,
                placeholder: Vt,
                portalContainer: ze,
                query: je,
                onQueryChange: Me,
                onSelectOption: (e) => {
                  Nn(e.target);
                },
              }),
            })
          : null),
      (t[130] = z),
      (t[131] = Nn),
      (t[132] = tt),
      (t[133] = K),
      (t[134] = Xt),
      (t[135] = Ge),
      (t[136] = jt),
      (t[137] = ut),
      (t[138] = dt),
      (t[139] = Vt),
      (t[140] = Ft),
      (t[141] = ze),
      (t[142] = de),
      (t[143] = pe),
      (t[144] = w),
      (t[145] = je),
      (t[146] = ft),
      (t[147] = At),
      (t[148] = at),
      (t[149] = ot),
      (t[150] = G),
      (t[151] = Xe),
      (t[152] = Ze),
      (t[153] = Xn))
    : (Xn = t[153]);
  let Zn = he?.live_url,
    Qn;
  t[154] !== B ||
  t[155] !== q ||
  t[156] !== kn ||
  t[157] !== J ||
  t[158] !== Y ||
  t[159] !== Cn ||
  t[160] !== W ||
  t[161] !== o ||
  t[162] !== s ||
  t[163] !== m ||
  t[164] !== f ||
  t[165] !== Zn
    ? ((Qn = (0, Q.jsx)(Fn, {
        accessMode: q,
        canManageProjectSharing: B,
        hasPendingAccessChange: J,
        hasPendingProfilePinChange: Y,
        isSaving: W,
        isSaveDisabled: Cn,
        liveUrl: Zn,
        projectId: s,
        showVisitAction: m,
        source: f,
        onCancelChanges: kn,
        onClose: o,
      })),
      (t[154] = B),
      (t[155] = q),
      (t[156] = kn),
      (t[157] = J),
      (t[158] = Y),
      (t[159] = Cn),
      (t[160] = W),
      (t[161] = o),
      (t[162] = s),
      (t[163] = m),
      (t[164] = f),
      (t[165] = Zn),
      (t[166] = Qn))
    : (Qn = t[166]);
  let $n = pe
      ? (0, Q.jsx)(gn, { error: Kn, inviteInputLabel: Vt, profilePinToggle: Jn }, s)
      : de || z == null
        ? Kn
        : (0, Q.jsxs)(Q.Fragment, {
            children: [
              z.show_private_tunnels_warning === !0 && q === `public` && z.access_mode !== `public`
                ? (0, Q.jsx)(R, {
                    children: (0, Q.jsx)(j, {
                      type: `warning`,
                      content: (0, Q.jsx)(l, {
                        id: `appgenShareDialog.publicPrivateServicesWarning`,
                        defaultMessage: `If this site uses private tunnels, anyone with the link may be able to use features that reach connected private services.`,
                        description: `Warning shown in the Site sharing dialog when a publisher with tunnel attachment permission selects public access for a site with private tunnels attached. Public visitors may be able to reach connected private services.`,
                      }),
                    }),
                  })
                : null,
              (0, Q.jsx)(bn, {
                accessPolicy: z,
                activeAccessGroups: _t,
                activeAccessUsers: gt,
                activeEditors: vt,
                availableAccessModes: z.available_access_modes,
                canManageEditors: Ht,
                canManageInvitees: Yt,
                canManageProjectSharing: B,
                canContinueUserChanges: Ge,
                isSaving: W,
                isWorkspaceAccount: w,
                removableAccessGroupIds: kt,
                selectedAccessMode: q,
                ownerEmail: x,
                ownerId: C?.account_user_id,
                onAccessModeChange: jn,
                onDowngradeEditor: (e) => {
                  U.mutateAsync({
                    ...(z.access_mode === `custom`
                      ? {
                          allowed_user_emails: [
                            ...new Set([...gt.flatMap($t), ...(e.email == null ? [] : [e.email])]),
                          ],
                        }
                      : {}),
                    editor_changes: {
                      remove_editor_account_user_ids: e.account_user_id == null ? [] : [e.account_user_id],
                    },
                  })
                    .then((e) => {
                      try {
                        Be(g, D, {
                          accessMode: Hn[e.access_mode],
                          action: c.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
                          addedIndividuals: !1,
                          projectId: s,
                          source: f,
                        });
                      } catch {}
                    })
                    .catch(X);
                },
                onInviteEditor: (e) => {
                  $(e);
                },
                onRemoveAccessUser: (e) => {
                  Ue({ kind: `user`, user: e });
                },
                onRemoveAccessGroup: (e) => {
                  Ue({ kind: `group`, group: e });
                },
                onRemoveEditor: (e) => {
                  Ue({ kind: `editor`, user: e });
                },
              }),
            ],
          }),
    er = pe ? null : Jn,
    tr;
  t[167] !== z || t[168] !== Wn || t[169] !== He || t[170] !== It
    ? ((tr =
        He != null && z != null
          ? (0, Q.jsx)(yn, {
              accessKind: He.kind,
              label: He.kind === `group` ? He.group.name : Tn(He.user),
              siteTitle: It ?? ``,
              onConfirm: () => Wn(He),
              onClose: () => Ue(null),
            })
          : null),
      (t[167] = z),
      (t[168] = Wn),
      (t[169] = He),
      (t[170] = It),
      (t[171] = tr))
    : (tr = t[171]);
  let nr;
  return (
    t[172] !== o ||
    t[173] !== Yn ||
    t[174] !== Xn ||
    t[175] !== Qn ||
    t[176] !== $n ||
    t[177] !== er ||
    t[178] !== tr ||
    t[179] !== Bt
      ? ((nr = (0, Q.jsxs)(Ne, {
          title: Bt,
          onClose: o,
          onPortalContainerChange: Ve,
          onSubmit: Yn,
          headerContent: Xn,
          footer: Qn,
          children: [$n, er, tr],
        })),
        (t[172] = o),
        (t[173] = Yn),
        (t[174] = Xn),
        (t[175] = Qn),
        (t[176] = $n),
        (t[177] = er),
        (t[178] = tr),
        (t[179] = Bt),
        (t[180] = nr))
      : (nr = t[180]),
    nr
  );
}
function $t(e) {
  return e.email == null ? [] : [e.email];
}
function en(e) {
  return e.id;
}
function tn(e) {
  return e - 1;
}
function nn(e) {
  return e + 1;
}
function rn(e) {
  return e.email == null ? [] : [e.email];
}
function an(e) {
  return e.id;
}
function on(e) {
  return e.editable;
}
function sn(e) {
  return e.account_user_id == null;
}
function cn(e) {
  return {
    id: `group:workspace:${e.id}`,
    label: e.name,
    avatar: (0, Q.jsx)(Pt, { avatar: e.avatar, size: `sm` }),
    target: { kind: `group`, groupId: e.id },
  };
}
function ln(e) {
  return e.id;
}
function un(e) {
  return e.editable;
}
function dn(e) {
  return e.id;
}
function fn(e) {
  return e.email != null;
}
function pn(e) {
  return e.account_user_id == null ? [] : [e.account_user_id];
}
function mn(e) {
  return { ...e, name: e.name ?? null, email: e.email ?? null, role: `editor`, editable: !0 };
}
function hn(e) {
  return { ...e, account_user_id: e.account_user_id ?? null, email: e.email ?? null, name: e.name ?? null };
}
function gn(e) {
  let t = (0, Z.c)(6),
    { error: n, inviteInputLabel: r, profilePinToggle: i } = e,
    [a, o] = (0, zn.useState)(!1),
    s;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = () => o(!0)), (t[0] = s)) : (s = t[0]),
    Me(s, a ? null : Vn));
  let c;
  return (
    t[1] !== n || t[2] !== r || t[3] !== i || t[4] !== a
      ? ((c = a
          ? n
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(R, {
                  spacing: `large`,
                  children: (0, Q.jsx)(Qe, {
                    ariaLabel: r,
                    placeholder: r,
                    disabled: !0,
                    emptyMessage: null,
                    query: ``,
                    onQueryChange: vn,
                    onSelectOption: _n,
                  }),
                }),
                (0, Q.jsx)(Le, { kind: `link`, children: (0, Q.jsx)(lt, {}) }),
                (0, Q.jsx)(Le, { children: (0, Q.jsx)(ct, {}) }),
                i,
              ],
            })),
        (t[1] = n),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function _n() {}
function vn() {}
function yn(e) {
  let t = (0, Z.c)(27),
    { accessKind: n, label: r, onClose: i, onConfirm: a, siteTitle: o } = e,
    [s, c] = (0, zn.useState)(!1),
    u;
  t[0] === r
    ? (u = t[1])
    : ((u = (0, Q.jsx)(l, {
        id: `appgenShareDialog.removeDialog.title`,
        defaultMessage: `Remove {label}?`,
        description: `Title for dialog confirming removal of a person's or group's site access`,
        values: { label: r },
      })),
      (t[0] = r),
      (t[1] = u));
  let d;
  t[2] !== n || t[3] !== r || t[4] !== o
    ? ((d =
        n === `editor`
          ? (0, Q.jsx)(l, {
              id: `appgenShareDialog.removeDialog.editorDescription`,
              defaultMessage: `{label} will no longer be able to edit {siteTitle}`,
              description: `Warning shown when removing an accepted site editor`,
              values: { label: r, siteTitle: o },
            })
          : (0, Q.jsx)(l, {
              id: `appgenShareDialog.removeDialog.description`,
              defaultMessage: `{label} will no longer be able to visit {siteTitle}`,
              description: `Warning shown when removing a person or group from a site's access list`,
              values: {
                label: (0, Q.jsx)(`span`, { className: `font-medium text-default`, children: r }),
                siteTitle: o,
              },
            })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = o),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== s || t[7] !== i || t[8] !== a
    ? ((f = () => {
        s ||
          (c(!0),
          a().then(i, () => {
            c(!1);
          }));
      }),
      (t[6] = s),
      (t[7] = i),
      (t[8] = a),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(l, {
        id: `appgenShareDialog.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for access removal confirmation dialog`,
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== s || t[12] !== i
    ? ((m = (0, Q.jsx)(ye, { color: `secondary`, size: `xl`, disabled: s, onClick: i, children: p })),
      (t[11] = s),
      (t[12] = i),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(l, {
        id: `appgenShareDialog.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirmation button label for removing site access`,
      })),
      (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] === s
    ? (g = t[16])
    : ((g = (0, Q.jsx)(ye, {
        color: `danger`,
        size: `xl`,
        loading: s,
        disabled: s,
        type: `submit`,
        children: h,
      })),
      (t[15] = s),
      (t[16] = g));
  let _;
  t[17] !== m || t[18] !== g
    ? ((_ = (0, Q.jsxs)(Q.Fragment, { children: [m, g] })), (t[17] = m), (t[18] = g), (t[19] = _))
    : (_ = t[19]);
  let v;
  return (
    t[20] !== s || t[21] !== i || t[22] !== u || t[23] !== d || t[24] !== f || t[25] !== _
      ? ((v = (0, Q.jsx)(Ne, {
          variant: `compact`,
          title: u,
          subtitle: d,
          isDismissalDisabled: s,
          onClose: i,
          onSubmit: f,
          footer: _,
        })),
        (t[20] = s),
        (t[21] = i),
        (t[22] = u),
        (t[23] = d),
        (t[24] = f),
        (t[25] = _),
        (t[26] = v))
      : (v = t[26]),
    v
  );
}
function bn(e) {
  let t = (0, Z.c)(81),
    {
      activeAccessGroups: n,
      activeAccessUsers: r,
      activeEditors: i,
      accessPolicy: a,
      availableAccessModes: o,
      canManageEditors: s,
      canManageInvitees: c,
      canManageProjectSharing: u,
      canContinueUserChanges: d,
      isSaving: f,
      isWorkspaceAccount: p,
      removableAccessGroupIds: m,
      selectedAccessMode: h,
      ownerEmail: g,
      ownerId: _,
      onAccessModeChange: v,
      onDowngradeEditor: y,
      onInviteEditor: b,
      onRemoveAccessGroup: x,
      onRemoveAccessUser: S,
      onRemoveEditor: C,
    } = e,
    w = O(),
    T,
    E,
    D,
    k,
    A;
  if (
    t[0] !== a.access_mode ||
    t[1] !== n ||
    t[2] !== r ||
    t[3] !== i ||
    t[4] !== o ||
    t[5] !== d ||
    t[6] !== s ||
    t[7] !== c ||
    t[8] !== u ||
    t[9] !== w ||
    t[10] !== f ||
    t[11] !== p ||
    t[12] !== v ||
    t[13] !== y ||
    t[14] !== b ||
    t[15] !== x ||
    t[16] !== S ||
    t[17] !== C ||
    t[18] !== g ||
    t[19] !== _ ||
    t[20] !== m ||
    t[21] !== h
  ) {
    let e = X({ activeAccessUsers: r, currentAccountUserId: _, currentUserEmail: g }),
      O;
    t[27] === i ? (O = t[28]) : ((O = new Set(i.map(Sn))), (t[27] = i), (t[28] = O));
    let j = O,
      M = u && !f,
      N = s && d,
      P = c && d,
      ee;
    t[29] === r ? (ee = t[30]) : ((ee = r.every(xn)), (t[29] = r), (t[30] = ee));
    let te = ee,
      ne = a.access_mode !== `custom` || te,
      re = r.filter((t) => t.account_user_id !== e?.account_user_id && !j.has(t.account_user_id)),
      F;
    t[31] === u
      ? (F = t[32])
      : ((F = u
          ? void 0
          : (0, Q.jsx)(l, {
              id: `appgenShareDialog.linkAccess.ownerOnly`,
              defaultMessage: `Only the owner can change link access`,
              description: `Tooltip on the disabled Link access dropdown in the Site sharing dialog. Editors can view who can open the Site link, but only the Site owner can change that setting.`,
            })),
        (t[31] = u),
        (t[32] = F));
    let ie = u ? void 0 : 0,
      ae = a.access_mode,
      oe;
    t[33] === r ? (oe = t[34]) : ((oe = r.some(Y)), (t[33] = r), (t[34] = oe));
    let se = h ?? a.access_mode,
      I;
    t[35] !== a.access_mode ||
    t[36] !== o ||
    t[37] !== M ||
    t[38] !== p ||
    t[39] !== v ||
    t[40] !== se ||
    t[41] !== oe
      ? ((I = (0, Q.jsx)(
          jn,
          {
            availableAccessModes: o,
            canManageAccess: M,
            hasExternalVisitors: oe,
            currentAccessMode: a.access_mode,
            isWorkspaceAccount: p,
            selectedAccessMode: se,
            onAccessModeChange: v,
          },
          ae,
        )),
        (t[35] = a.access_mode),
        (t[36] = o),
        (t[37] = M),
        (t[38] = p),
        (t[39] = v),
        (t[40] = se),
        (t[41] = oe),
        (t[42] = I))
      : (I = t[42]);
    let L;
    (t[43] !== I || t[44] !== ie
      ? ((L = (0, Q.jsx)(`div`, {
          className: `flex items-center justify-between gap-3`,
          tabIndex: ie,
          children: I,
        })),
        (t[43] = I),
        (t[44] = ie),
        (t[45] = L))
      : (L = t[45]),
      t[46] !== L || t[47] !== F
        ? ((A = (0, Q.jsx)(Le, {
            kind: `link`,
            children: (0, Q.jsx)(B, { tooltipContent: F, children: L }),
          })),
          (t[46] = L),
          (t[47] = F),
          (t[48] = A))
        : (A = t[48]),
      (E = Le),
      (k = `vertical-scroll-fade-mask -mx-5 flex max-h-64 flex-col gap-3 overflow-y-auto px-5`),
      (T = jt));
    let ce;
    t[49] !== a.access_mode ||
    t[50] !== ne ||
    t[51] !== N ||
    t[52] !== M ||
    t[53] !== p ||
    t[54] !== y ||
    t[55] !== C
      ? ((ce = (e) => ({
          id: `user:${e.account_user_id ?? e.email}`,
          label: Tn(e),
          row: (0, Q.jsx)(Oe, {
            avatar: (0, Q.jsx)(wn, { user: e }),
            label: Tn(e),
            renderIdentity: (t) => (0, Q.jsx)(Cn, { user: e, children: t }),
            secondaryLabel: Dn(e),
            trailingContent: (0, Q.jsx)(On, {
              value: `edit`,
              readOnly: !M && !N,
              onChange:
                p && M && ne && (e.email != null || a.access_mode !== `custom`)
                  ? (t) => {
                      t === `visit` && y(e);
                    }
                  : void 0,
              onRemoveAccess:
                p && (M || N)
                  ? () => {
                      C(e);
                    }
                  : void 0,
            }),
          }),
        })),
        (t[49] = a.access_mode),
        (t[50] = ne),
        (t[51] = N),
        (t[52] = M),
        (t[53] = p),
        (t[54] = y),
        (t[55] = C),
        (t[56] = ce))
      : (ce = t[56]);
    let le;
    t[57] !== N || t[58] !== P || t[59] !== f || t[60] !== b || t[61] !== S
      ? ((le = (e) => ({
          id: `user:${e.account_user_id ?? e.email}`,
          label: Tn(e),
          row: (0, Q.jsx)(Oe, {
            avatar: (0, Q.jsx)(wn, { user: e }),
            label: Tn(e),
            renderIdentity: (t) => (0, Q.jsx)(Cn, { user: e, children: t }),
            secondaryLabel: Dn(e),
            trailingContent: (0, Q.jsx)(On, {
              readOnly: !P || !e.editable || (f && e.account_user_id == null),
              onChange:
                N && e.email != null && e.account_user_id != null
                  ? (t) => {
                      t === `edit` && b(e);
                    }
                  : void 0,
              onRemoveAccess:
                P && e.editable && (!f || e.account_user_id != null)
                  ? () => {
                      S(e);
                    }
                  : void 0,
            }),
          }),
        })),
        (t[57] = N),
        (t[58] = P),
        (t[59] = f),
        (t[60] = b),
        (t[61] = S),
        (t[62] = le))
      : (le = t[62]);
    let R;
    (t[63] !== M || t[64] !== P || t[65] !== w || t[66] !== x || t[67] !== m
      ? ((R = (e) => ({
          id: `group:${e.id}`,
          label: e.name,
          isTeam: !0,
          row: (0, Q.jsx)(Oe, {
            avatar: (0, Q.jsx)(Lt, { groupId: e.id }),
            label: e.name,
            secondaryLabel: w.formatMessage(
              {
                id: `appgenShareDialog.access.groupSize`,
                defaultMessage: `{count, plural, one {# member} other {# members}}`,
                description: `Member count shown for a group in the site share dialog`,
              },
              { count: e.size },
            ),
            trailingContent: (0, Q.jsx)(On, {
              readOnly: !M || !e.editable,
              onRemoveAccess:
                P && m.has(e.id)
                  ? () => {
                      x(e);
                    }
                  : void 0,
            }),
          }),
        })),
        (t[63] = M),
        (t[64] = P),
        (t[65] = w),
        (t[66] = x),
        (t[67] = m),
        (t[68] = R))
      : (R = t[68]),
      (D = [
        ...(e == null
          ? []
          : [
              {
                id: `user:${e.account_user_id}`,
                label: Tn(e),
                isOwner: !0,
                row: (0, Q.jsx)(Oe, {
                  avatar: (0, Q.jsx)(wn, { user: e }),
                  label: Tn(e),
                  renderIdentity: (t) => (0, Q.jsx)(Cn, { user: e, children: t }),
                  secondaryLabel: Dn(e),
                  trailingContent: (0, Q.jsx)(`span`, {
                    className: `text-sm text-codex-description`,
                    children: (0, Q.jsx)(l, {
                      id: `appgenShareDialog.permission.owner`,
                      defaultMessage: `Owner`,
                      description: `Label for the owner in the site share dialog`,
                    }),
                  }),
                }),
              },
            ]),
        ...i.map(ce),
        ...re.map(le),
        ...n.map(R),
      ]),
      (t[0] = a.access_mode),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o),
      (t[5] = d),
      (t[6] = s),
      (t[7] = c),
      (t[8] = u),
      (t[9] = w),
      (t[10] = f),
      (t[11] = p),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C),
      (t[18] = g),
      (t[19] = _),
      (t[20] = m),
      (t[21] = h),
      (t[22] = T),
      (t[23] = E),
      (t[24] = D),
      (t[25] = k),
      (t[26] = A));
  } else ((T = t[22]), (E = t[23]), (D = t[24]), (k = t[25]), (A = t[26]));
  let j;
  t[69] !== T || t[70] !== D
    ? ((j = (0, Q.jsx)(T, { entries: D })), (t[69] = T), (t[70] = D), (t[71] = j))
    : (j = t[71]);
  let M;
  t[72] !== k || t[73] !== j
    ? ((M = (0, Q.jsx)(`div`, { className: k, children: j })), (t[72] = k), (t[73] = j), (t[74] = M))
    : (M = t[74]);
  let N;
  t[75] !== E || t[76] !== M
    ? ((N = (0, Q.jsx)(E, { children: M })), (t[75] = E), (t[76] = M), (t[77] = N))
    : (N = t[77]);
  let P;
  return (
    t[78] !== A || t[79] !== N
      ? ((P = (0, Q.jsxs)(Q.Fragment, { children: [A, N] })), (t[78] = A), (t[79] = N), (t[80] = P))
      : (P = t[80]),
    P
  );
}
function Y(e) {
  return e.account_user_id == null;
}
function xn(e) {
  return e.email != null;
}
function Sn(e) {
  return e.account_user_id;
}
function Cn(e) {
  let t = (0, Z.c)(8),
    { children: n, user: r } = e,
    i = r.is_external ? null : r.email,
    a = r.avatar_url,
    o;
  t[0] === r ? (o = t[1]) : ((o = Tn(r)), (t[0] = r), (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== i || t[4] !== o || t[5] !== r.avatar_url || t[6] !== r.email
      ? ((s = (0, Q.jsx)(vt, {
          inShareDialog: !0,
          accountUserId: null,
          accountUserEmail: i,
          avatarUrl: a,
          label: o,
          labelEmail: r.email,
          children: n,
        })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = o),
        (t[5] = r.avatar_url),
        (t[6] = r.email),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function wn(e) {
  let t = (0, Z.c)(18),
    { user: n } = e,
    { accountId: r, userId: i, email: a, profilePictureUrlAtLogin: o } = it(),
    { data: s } = Ae(),
    c;
  t[0] !== s?.account_user_id || t[1] !== a || t[2] !== n.account_user_id || t[3] !== n.email
    ? ((c =
        (n.account_user_id != null && n.account_user_id === s?.account_user_id) ||
        (a != null && n.email?.toLowerCase() === a.toLowerCase())),
      (t[0] = s?.account_user_id),
      (t[1] = a),
      (t[2] = n.account_user_id),
      (t[3] = n.email),
      (t[4] = c))
    : (c = t[4]);
  let l = c,
    u = n.avatar_url == null && n.role === `owner` && l,
    { isProfileVisible: d } = qe(),
    f = u && d,
    p;
  t[5] !== r || t[6] !== f || t[7] !== i
    ? ((p = Ve({ accountId: r, userId: i, enabled: f })), (t[5] = r), (t[6] = f), (t[7] = i), (t[8] = p))
    : (p = t[8]);
  let { data: m } = N(p),
    h = n.avatar_url;
  u && (h = m == null ? o : m.profile_details.profile_picture_url);
  let g = h,
    _;
  t[9] !== n.account_user_id || t[10] !== n.email
    ? ((_ = n.account_user_id ?? n.email?.toLowerCase()),
      (t[9] = n.account_user_id),
      (t[10] = n.email),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] === n ? (v = t[13]) : ((v = En(n)), (t[12] = n), (t[13] = v));
  let y;
  return (
    t[14] !== h || t[15] !== _ || t[16] !== v
      ? ((y = (0, Q.jsx)(q, { avatarUrl: g, colorKey: _, name: v })),
        (t[14] = h),
        (t[15] = _),
        (t[16] = v),
        (t[17] = y))
      : (y = t[17]),
    y
  );
}
function X({ activeAccessUsers: e, currentAccountUserId: t, currentUserEmail: n }) {
  let r = e.find((e) => e.role === `owner`);
  if (r != null) return r;
  let i = n?.trim().toLowerCase();
  if (i != null && i.length > 0) {
    let t = e.find((e) => e.email?.trim().toLowerCase() === i);
    if (t != null) return t;
  }
  return t == null ? null : (e.find((e) => e.account_user_id === t) ?? null);
}
function Tn(e) {
  return e.name ?? e.email ?? e.account_user_id ?? ``;
}
function En(e) {
  return e.name ?? e.email ?? e.account_user_id?.replace(/[-_]/g, ` `) ?? ``;
}
function Dn(e) {
  return e.name == null ? null : e.email;
}
function On(e) {
  let t = (0, Z.c)(14),
    { value: n, readOnly: r, onChange: i, onRemoveAccess: a } = e,
    o = n === void 0 ? `visit` : n,
    s = r !== void 0 && r,
    c = O();
  if (s) {
    let e;
    return (
      t[0] === o
        ? (e = t[1])
        : ((e = (0, Q.jsx)(`span`, {
            className: `text-sm text-codex-description`,
            children: (0, Q.jsx)(An, { permission: o }),
          })),
          (t[0] = o),
          (t[1] = e)),
      e
    );
  }
  let u;
  t[2] !== i || t[3] !== o
    ? ((u = i == null ? [o] : [`visit`, `edit`]), (t[2] = i), (t[3] = o), (t[4] = u))
    : (u = t[4]);
  let d = u,
    f;
  t[5] !== c || t[6] !== d
    ? ((f = d.map((e) => ({
        value: e,
        ariaLabel: c.formatMessage($[e]),
        description: c.formatMessage($[`${e}Description`]),
      }))),
      (t[5] = c),
      (t[6] = d),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(l, {
        id: `appgenShareDialog.permission.remove`,
        defaultMessage: `Remove access`,
        description: `Menu item for removing a person's site access`,
      })),
      (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== i || t[10] !== a || t[11] !== f || t[12] !== o
      ? ((m = (0, Q.jsx)(Ht, {
          opticallyAlign: `end`,
          options: f,
          renderLabel: kn,
          removeLabel: p,
          value: o,
          variant: `inline`,
          onChange: i,
          onRemoveAccess: a,
        })),
        (t[9] = i),
        (t[10] = a),
        (t[11] = f),
        (t[12] = o),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function kn(e) {
  return (0, Q.jsx)(An, { permission: e });
}
function An(e) {
  let t = (0, Z.c)(2),
    { permission: n } = e,
    r = $[n],
    i;
  return (t[0] === r ? (i = t[1]) : ((i = (0, Q.jsx)(l, { ...r })), (t[0] = r), (t[1] = i)), i);
}
function jn(e) {
  let t = (0, Z.c)(27),
    {
      availableAccessModes: n,
      canManageAccess: r,
      currentAccessMode: i,
      hasExternalVisitors: a,
      isWorkspaceAccount: o,
      selectedAccessMode: s,
      onAccessModeChange: c,
    } = e,
    u = ke({ availableAccessModes: n, currentAccessMode: i, isWorkspaceAccount: o }),
    { data: d } = Ae(),
    f;
  t[0] === d?.name ? (f = t[1]) : ((f = d?.name?.trim()), (t[0] = d?.name), (t[1] = f));
  let p = f,
    { accountId: m, userId: h } = it(),
    g = o && d?.id === m,
    _;
  t[2] !== m || t[3] !== h
    ? ((_ = { accountId: m, userId: h }), (t[2] = m), (t[3] = h), (t[4] = _))
    : (_ = t[4]);
  let v;
  t[5] !== m || t[6] !== _
    ? ((v = [`workspace`, m, `owner_count`, _]), (t[5] = m), (t[6] = _), (t[7] = v))
    : (v = t[7]);
  let y =
      m != null && h != null && g && u.some(Nn)
        ? (e) => {
            let { signal: t } = e;
            return Ge.safeGet(`/accounts/{account_id}/users/owner_count`, {
              parameters: { path: { account_id: m } },
              expectedIdentity: { accountId: m, userId: h },
              isExpectedError: Mn,
              signal: t,
            });
          }
        : E,
    x;
  t[8] !== v || t[9] !== y
    ? ((x = { queryKey: v, queryFn: y, staleTime: b.ONE_MINUTE, retry: !1 }),
      (t[8] = v),
      (t[9] = y),
      (t[10] = x))
    : (x = t[10]);
  let { data: S } = N(x),
    C = !o && !a,
    w = at,
    T = !r,
    D;
  t[11] !== r || t[12] !== g || t[13] !== C || t[14] !== S
    ? ((D = (e) => {
        let { disabled: t, value: n } = e;
        return {
          description:
            n === `workspace_all` && g && S?.total_count != null
              ? (0, Q.jsx)(l, { ...$.workspaceMemberCount, values: { count: S.total_count } })
              : (0, Q.jsx)(l, { ...$[n === `custom` && C ? `admins_onlyDescription` : `${n}Description`] }),
          disabled: t || !r,
          icon: Pn(n),
          value: n,
        };
      }),
      (t[11] = r),
      (t[12] = g),
      (t[13] = C),
      (t[14] = S),
      (t[15] = D))
    : (D = t[15]);
  let O = u.map(D),
    k;
  t[16] !== g || t[17] !== C || t[18] !== p
    ? ((k = (e) => {
        if (e === `custom` && C) return (0, Q.jsx)(l, { ...$.admins_only });
        if (e === `workspace_all` && g && p) return p;
        let t = $[e];
        return (
          e === `public` ? (t = $.publicLabel) : e === `workspace_all` && (t = $.workspaceLabel),
          (0, Q.jsx)(l, { ...t })
        );
      }),
      (t[16] = g),
      (t[17] = C),
      (t[18] = p),
      (t[19] = k))
    : (k = t[19]);
  let A;
  return (
    t[20] !== w || t[21] !== c || t[22] !== s || t[23] !== O || t[24] !== k || t[25] !== T
      ? ((A = (0, Q.jsx)(w, {
          disabled: T,
          iconVariant: `thumbnail`,
          options: O,
          value: s,
          renderLabel: k,
          onChange: c,
        })),
        (t[20] = w),
        (t[21] = c),
        (t[22] = s),
        (t[23] = O),
        (t[24] = k),
        (t[25] = T),
        (t[26] = A))
      : (A = t[26]),
    A
  );
}
function Mn() {
  return !0;
}
function Nn(e) {
  let { value: t } = e;
  return t === `workspace_all`;
}
function Pn(e) {
  switch (e) {
    case `admins_only`:
    case `custom`:
      return (0, Q.jsx)(de, {});
    case `workspace_all`:
      return (0, Q.jsx)(ue, {});
    case `public`:
      return (0, Q.jsx)(C, {});
  }
}
function Fn(e) {
  let t = (0, Z.c)(31),
    {
      accessMode: r,
      canManageProjectSharing: i,
      hasPendingAccessChange: a,
      hasPendingProfilePinChange: o,
      isSaving: s,
      isSaveDisabled: u,
      liveUrl: f,
      projectId: p,
      showVisitAction: m,
      source: h,
      onCancelChanges: g,
      onClose: v,
    } = e,
    y = d(n),
    b = O(),
    x;
  t[0] === f ? (x = t[1]) : ((x = In({ action: `copyLink`, liveUrl: f })), (t[0] = f), (t[1] = x));
  let S = x,
    C;
  t[2] === f ? (C = t[3]) : ((C = In({ action: `visit`, liveUrl: f })), (t[2] = f), (t[3] = C));
  let w = C,
    T = f == null && !i,
    E;
  t[4] === b
    ? (E = t[5])
    : ((E = b.formatMessage({
        id: `appgenShareDialog.publish.ownerRequired`,
        defaultMessage: `Only the owner can publish the first version`,
        description: `Tooltip explaining why only the owner can publish a Site`,
      })),
      (t[4] = b),
      (t[5] = E));
  let k = E,
    A;
  t[6] !== r || t[7] !== a
    ? ((A =
        a && r === `public`
          ? (0, Q.jsx)(l, {
              id: `appgenShareDialog.publish`,
              defaultMessage: `Publish`,
              description: `Button label for publishing a site to the public internet`,
            })
          : void 0),
      (t[6] = r),
      (t[7] = a),
      (t[8] = A))
    : (A = t[8]);
  let j = a || o,
    N;
  t[9] !== r ||
  t[10] !== S ||
  t[11] !== T ||
  t[12] !== a ||
  t[13] !== o ||
  t[14] !== b ||
  t[15] !== f ||
  t[16] !== p ||
  t[17] !== k ||
  t[18] !== y ||
  t[19] !== m ||
  t[20] !== h ||
  t[21] !== w
    ? ((N =
        f === void 0 || a || o
          ? null
          : (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                T
                  ? (0, Q.jsx)(B, {
                      tooltipContent: k,
                      children: (0, Q.jsx)(`span`, {
                        "aria-disabled": `true`,
                        "aria-label": b.formatMessage({
                          id: `appgenShareDialog.publish`,
                          defaultMessage: `Publish`,
                          description: `Button label for publishing a site to the public internet`,
                        }),
                        className: `inline-flex`,
                        role: `button`,
                        tabIndex: 0,
                        children: (0, Q.jsx)(ye, {
                          "aria-hidden": `true`,
                          color: `secondary`,
                          disabled: !0,
                          size: `xl`,
                          children: (0, Q.jsx)(l, {
                            id: `appgenShareDialog.publish`,
                            defaultMessage: `Publish`,
                            description: `Button label for publishing a site to the public internet`,
                          }),
                        }),
                      }),
                    })
                  : null,
                m && !T
                  ? (0, Q.jsx)(B, {
                      tooltipContent: w,
                      children: (0, Q.jsx)(`span`, {
                        className: `inline-flex`,
                        children: (0, Q.jsxs)(ye, {
                          color: `primary`,
                          variant: `outline`,
                          disabled: f == null,
                          size: `xl`,
                          onClick: (e) => {
                            f != null &&
                              We({
                                event: e,
                                href: f,
                                initiator: `mcp_app_resource`,
                                openTarget: `external-browser`,
                              });
                          },
                          children: [
                            f == null
                              ? null
                              : (0, Q.jsx)(Ie, {
                                  className: `icon-xs`,
                                  ExternalIcon: Re,
                                  href: f,
                                  openTarget: `external-browser`,
                                }),
                            (0, Q.jsx)(l, {
                              id: `appgenShareDialog.visit`,
                              defaultMessage: `Visit`,
                              description: `Button label for opening a live site externally`,
                            }),
                          ],
                        }),
                      }),
                    })
                  : null,
                T
                  ? null
                  : (0, Q.jsx)(B, {
                      tooltipContent: S,
                      children: (0, Q.jsx)(`span`, {
                        className: `inline-flex`,
                        children: (0, Q.jsxs)(ye, {
                          color: `primary`,
                          variant: `outline`,
                          disabled: f == null,
                          size: `xl`,
                          onClick: () => {
                            f != null &&
                              me(f).then((e) => {
                                if (e) {
                                  try {
                                    Be(y, D, {
                                      accessMode: r == null ? void 0 : Hn[r],
                                      action: c.CODEX_SITES_SHARING_ACTION_LINK_COPIED,
                                      projectId: p,
                                      source: h,
                                    });
                                  } catch {}
                                  G(y);
                                }
                              });
                          },
                          children: [
                            (0, Q.jsx)(_, { "aria-hidden": !1, asset: M }),
                            (0, Q.jsx)(l, {
                              id: `appgenShareDialog.copyLink`,
                              defaultMessage: `Copy link`,
                              description: `Button label for copying a live site URL`,
                            }),
                          ],
                        }),
                      }),
                    }),
              ],
            })),
      (t[9] = r),
      (t[10] = S),
      (t[11] = T),
      (t[12] = a),
      (t[13] = o),
      (t[14] = b),
      (t[15] = f),
      (t[16] = p),
      (t[17] = k),
      (t[18] = y),
      (t[19] = m),
      (t[20] = h),
      (t[21] = w),
      (t[22] = N))
    : (N = t[22]);
  let P;
  return (
    t[23] !== u || t[24] !== s || t[25] !== g || t[26] !== v || t[27] !== A || t[28] !== j || t[29] !== N
      ? ((P = (0, Q.jsx)(Bt, {
          saveLabel: A,
          onCancel: g,
          onClose: v,
          disabled: u,
          hasPendingAccessChange: j,
          hasPendingInvitees: !1,
          copyLink: N,
          isSaving: s,
        })),
        (t[23] = u),
        (t[24] = s),
        (t[25] = g),
        (t[26] = v),
        (t[27] = A),
        (t[28] = j),
        (t[29] = N),
        (t[30] = P))
      : (P = t[30]),
    P
  );
}
function In({ action: e, liveUrl: t }) {
  if (t == null)
    switch (e) {
      case `copyLink`:
        return (0, Q.jsx)(l, {
          id: `appgenShareDialog.copyLinkDisabled.notPublished`,
          defaultMessage: `Publish this site to copy its link`,
          description: `Tooltip explaining why the site share dialog copy link button is disabled`,
        });
      case `visit`:
        return (0, Q.jsx)(l, {
          id: `appgenShareDialog.visitDisabled.notPublished`,
          defaultMessage: `Publish this site before visiting it`,
          description: `Tooltip explaining why the site share dialog visit button is disabled`,
        });
    }
  return null;
}
function Ln(e) {
  let t = Mt(e);
  return {
    chipLabel: t.chipLabel,
    colorKey: t.colorKey,
    id: `user:${e.account_user_id ?? e.email}`,
    label: t.label,
    secondaryLabel: t.secondaryLabel,
    target: { kind: `user`, user: e },
  };
}
function Rn(e) {
  return { id: `external:${e}`, label: e, target: { kind: `external`, email: e } };
}
var Z, zn, Q, Bn, Vn, Hn, $;
function Un() {
  return (Un = e(() => {
    ((Z = _e()),
      S(),
      f(),
      T(),
      xe(),
      u(),
      ee(),
      he(),
      x(),
      (zn = be()),
      L(),
      r(),
      Et(),
      He(),
      $e(),
      ft(),
      Ze(),
      H(),
      s(),
      F(),
      je(),
      K(),
      v(),
      w(),
      z(),
      ne(),
      tt(),
      _t(),
      W(),
      kt(),
      ut(),
      gt(),
      pe(),
      ve(),
      Gt(),
      dt(),
      At(),
      Ft(),
      rt(),
      ot(),
      Je(),
      zt(),
      Vt(),
      Fe(),
      Ue(),
      Ee(),
      et(),
      Te(),
      It(),
      Xe(),
      I(),
      a(),
      Ce(),
      U(),
      Zt(),
      we(),
      Ct(),
      (Q = V()),
      (Bn = le()),
      (Vn = 1e4),
      (Hn = {
        admins_only: k.CODEX_SITES_ACCESS_MODE_ADMINS_ONLY,
        custom: k.CODEX_SITES_ACCESS_MODE_CUSTOM,
        public: k.CODEX_SITES_ACCESS_MODE_PUBLIC,
        workspace_all: k.CODEX_SITES_ACCESS_MODE_WORKSPACE_ALL,
      }),
      ($ = t({
        admins_only: {
          id: `appgenAccess.state.ownerOnly`,
          defaultMessage: `Just me`,
          description: `Label for a site whose access is limited to its owner`,
        },
        custom: {
          id: `appgenAccess.state.privatelyShared`,
          defaultMessage: `Only those invited`,
          description: `Label for a site shared privately with invited people`,
        },
        public: {
          id: `appgenAccess.state.public`,
          defaultMessage: `Anyone on the Internet`,
          description: `Label for a site shared publicly on the internet`,
        },
        workspace_all: {
          id: `appgenAccess.state.workspaceAll`,
          defaultMessage: `Anyone in this workspace with the link`,
          description: `Label for a site shared with anyone in the workspace`,
        },
        publicLabel: {
          id: `appgenAccess.label.public`,
          defaultMessage: `Public`,
          description: `Short label for the public Site audience in the upcoming sharing menu`,
        },
        workspaceLabel: {
          id: `appgenAccess.label.workspace`,
          defaultMessage: `Workspace`,
          description: `Fallback workspace label in the upcoming Site sharing menu when the account name is unavailable`,
        },
        workspaceMemberCount: {
          id: `appgenAccess.description.workspaceMemberCount`,
          defaultMessage: `{count, plural, one {# workspace member with the link can view} other {# workspace members with the link can view}}`,
          description: `Site audience description with the number of active members in the current workspace, as returned by the account service`,
        },
        admins_onlyDescription: {
          id: `appgenAccess.description.ownerOnly`,
          defaultMessage: `People who already have access can view`,
          description: `Description of restricted Site viewing access; existing editors retain their access`,
        },
        customDescription: {
          id: `appgenAccess.description.invited`,
          defaultMessage: `You and people you’ve added can view`,
          description: `Description of private Site audience access for invited people`,
        },
        workspace_allDescription: {
          id: `appgenAccess.description.workspace`,
          defaultMessage: `Workspace members with the link can view`,
          description: `Description of workspace-wide Site viewing access while the member count is unavailable`,
        },
        publicDescription: {
          id: `appgenAccess.description.public`,
          defaultMessage: `Anyone on the internet with the link can view`,
          description: `Description of public Site viewing access when public sharing is permitted`,
        },
        edit: {
          id: `appgenShareDialog.permission.editor`,
          defaultMessage: `Editor`,
          description: `Editor role label in the site share dialog`,
        },
        editDescription: {
          id: `appgenShareDialog.permission.editDescription`,
          defaultMessage: `Edit the site and publish updates. Access, download, change, or delete its data.`,
          description: `Description of the editor role and its access to site data in the site sharing permission menu`,
        },
        visit: {
          id: `appgenShareDialog.permission.viewer`,
          defaultMessage: `Viewer`,
          description: `Viewer role label in the site share dialog; the other available role is Editor`,
        },
        visitDescription: {
          id: `appgenShareDialog.permission.visitDescription`,
          defaultMessage: `View and use the site.`,
          description: `Description of the viewer role in the site sharing permission menu`,
        },
      })));
  }))();
}
Un();
export { yn as AppgenRemoveAccessDialog, Qt as AppgenShareDialog };
//# sourceMappingURL=appgen-share-dialog-54025d089e3f.js.map
