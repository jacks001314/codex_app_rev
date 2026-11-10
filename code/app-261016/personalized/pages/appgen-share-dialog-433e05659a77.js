import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bst as r,
  DB as i,
  FBt as a,
  Fet as o,
  G$ as s,
  GLt as c,
  HFt as l,
  HO as u,
  Hnt as d,
  Iy as f,
  K$ as p,
  LNt as m,
  Lst as h,
  Ly as g,
  MNt as _,
  Mst as v,
  NNt as y,
  NO as b,
  OB as x,
  Oet as S,
  Oit as C,
  Ost as w,
  PBt as T,
  PO as E,
  Pit as D,
  Qst as O,
  Rrt as k,
  Rst as ee,
  TY as A,
  Unt as j,
  Vnt as M,
  Vrt as N,
  XOt as P,
  YOt as F,
  Yet as te,
  ZSt as I,
  _st as ne,
  aH as re,
  ast as L,
  bst as ie,
  cwt as R,
  iCt as ae,
  ist as oe,
  iwt as se,
  jit as ce,
  jst as le,
  lk as z,
  nB as B,
  nCt as ue,
  okt as de,
  pkt as fe,
  qrt as pe,
  rB as V,
  tkt as H,
  uG as me,
  uk as he,
  vD as ge,
  vW as _e,
  vst as ve,
  xst as ye,
  yD as be,
  yst as xe,
  zO as Se,
  zjt as Ce,
  zst as we,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BH as Te,
  Cjr as Ee,
  F7n as De,
  GH as Oe,
  GRt as ke,
  HG as Ae,
  KH as je,
  L7n as Me,
  Qvn as Ne,
  Qzr as Pe,
  SRn as Fe,
  UG as Ie,
  VH as Le,
  WRt as Re,
  XIr as U,
  Xvn as ze,
  YIr as Be,
  aEt as Ve,
  aU as He,
  bRn as Ue,
  cH as We,
  cU as Ge,
  dU as Ke,
  eRn as qe,
  eU as Je,
  fU as Ye,
  iEt as W,
  iRr as Xe,
  iU as Ze,
  imr as Qe,
  jcn as $e,
  nEt as G,
  nU as et,
  oU as tt,
  rEt as nt,
  rU as rt,
  rmr as it,
  sBr as at,
  sH as ot,
  sU as st,
  tLr as ct,
  tRn as lt,
  tyn as ut,
  tyr as dt,
  wcn as ft,
  xMr as pt,
  xjr as mt,
  yMr as ht,
} from "./app-initial-ad16eaadf81f.js";
import { n as gt, t as _t } from "./profile-avatar-bc7371feb0c0.js";
import { a as vt, i as yt, r as K } from "./use-workspace-users-2d1e66aa1ddc.js";
import { i as bt, n as xt } from "./profile-card-596b3632a9d9.js";
import { a as St, i as Ct, n as wt, r as Tt } from "./sites-share-query-f94060562c21.js";
import { n as Et, r as Dt, t as Ot } from "./workspace-team-recipient-suggestions-ab23121c2709.js";
import { n as kt, r as At, t as jt } from "./pin-analytics-33d324ed1f7b.js";
import { n as Mt, t as Nt } from "./access-list-2635d079c875.js";
import { n as Pt, t as Ft } from "./dialog-utils-21c4d759328d.js";
import { a as It, i as Lt, o as Rt, r as zt, t as Bt } from "./member-count-bfd3da2c099a.js";
import { n as Vt, t as Ht } from "./modal-footer-412324b30d33.js";
import { n as Ut, t as Wt } from "./modal-permission-dropdown-6dcd00cb5144.js";
function Gt(e, t, n) {
  return w({
    queryKey: [`profile`, `pins`, t, e],
    queryFn:
      !n || e == null || t == null
        ? R
        : ({ signal: t }) =>
            Xe.safeGet(`/profiles/me/page/pins`, {
              signal: t,
              additionalHeaders: { "ChatGPT-Account-ID": e },
              expectedErrorStatuses: [403, 404],
            }),
    staleTime: we.ONE_MINUTE,
    refetchOnMount: `always`,
    retry: !1,
  });
}
function Kt({ scope: e, accountId: t, userId: n, queryClient: r, artifact: i, pins: a }) {
  let { queryKey: s } = Gt(t, n, !0),
    c = a?.pins?.items?.find((e) => e.kind === i.kind && e.artifact_id === i.artifact_id);
  return ne({
    mutationFn: async (e) => {
      if (t == null || a?.pins == null) throw Error(`Profile pins are unavailable`);
      if (e) {
        let e = await Xe.safePost(`/profiles/me/page/pins`, {
          additionalHeaders: { "ChatGPT-Account-ID": t },
          requestBody: i,
          expectedErrorStatuses: [403, 404, 409, 422, 503],
        });
        if (e.error != null || e.pins == null) throw Error(`Profile pins could not be saved`);
        return e;
      }
      return c == null
        ? a
        : Xe.safeDelete(`/profiles/me/page/pins/{pin_id}`, {
            additionalHeaders: { "ChatGPT-Account-ID": t },
            parameters: { path: { pin_id: c.pin_id }, query: { expected_version: a.page_version } },
            expectedErrorStatuses: [403, 404, 409, 422],
          });
    },
    retry: !1,
    onMutate: () => c != null,
    onSuccess: async (a, c, l) => {
      (a.error == null &&
        a.pins != null &&
        c !== l &&
        kt(e, c ? [] : [i], c ? [i] : [], o.CODEX_PROFILE_PIN_ENTRY_POINT_SITE_SHARE_DIALOG),
        await r.cancelQueries({ queryKey: s }),
        r.setQueryData(s, a),
        await r.invalidateQueries({ queryKey: [`profile`, `page`, n, t] }));
    },
    onError: async () => {
      await r.invalidateQueries({ queryKey: s });
    },
  });
}
function qt() {
  return (qt = e(() => {
    (k(), se(), dt(), jt(), r());
  }))();
}
function Jt({ pins: e, artifact: t, selectedPinned: n, canPin: r, enabled: i }) {
  let a = e?.pins?.items?.find((e) => e.kind === t.kind && e.artifact_id === t.artifact_id),
    o = r && (n ?? a != null);
  return {
    pinned: o,
    atLimit: a == null && e?.pins?.max_pins != null && (e.pins.items?.length ?? 0) >= e.pins.max_pins,
    hasPendingChange: i && e?.pins != null && o !== (a != null),
  };
}
function Yt() {
  let e = (0, Zt.c)(6),
    t = de(),
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
    ? ((r = (0, q.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          (0, q.jsx)(`div`, {
            className: `size-7 shrink-0 overflow-hidden rounded-lg`,
            children: (0, q.jsx)(De, { size: `fill` }),
          }),
          (0, q.jsx)(De, { className: `w-36`, size: `md` }),
        ],
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 py-1`,
        "aria-hidden": !0,
        children: [
          r,
          (0, q.jsx)(`div`, {
            className: `h-5 w-8 shrink-0 overflow-hidden rounded-full`,
            children: (0, q.jsx)(De, { size: `fill` }),
          }),
        ],
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === n
      ? (a = e[5])
      : ((a = (0, q.jsx)(Se, {
          spacing: `large`,
          children: (0, q.jsx)(`div`, {
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
function Xt(e) {
  let t = (0, Zt.c)(29),
    {
      atLimit: n,
      canPin: r,
      checked: a,
      disabled: o,
      error: s,
      isFetching: c,
      isWorkspaceAccount: l,
      onChange: u,
    } = e,
    d = (0, Qt.useId)(),
    f;
  if (!c && !r) {
    let e;
    (t[0] === l
      ? (e = t[1])
      : ((e = l
          ? (0, q.jsx)(H, {
              id: `appgenShareDialog.profilePin.workspaceOnly`,
              defaultMessage: `You can only pin Sites shared to your workspace on your profile`,
              description: `Tooltip explaining that a workspace profile can showcase a Site only when it is shared with at least everyone in the workspace`,
            })
          : (0, q.jsx)(H, {
              id: `appgenShareDialog.profilePin.publicOnly`,
              defaultMessage: `You can only pin Sites shared with “Anyone on the Internet” to your profile`,
              description: `Tooltip explaining that a personal profile can showcase only publicly shared Sites. The quoted text matches the Anyone on the Internet option in the sharing dropdown.`,
            })),
        (t[0] = l),
        (t[1] = e)),
      (f = e));
  } else if (!c && n) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(H, {
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
    h = o && `opacity-60`,
    v;
  t[3] === h ? (v = t[4]) : ((v = _(`flex min-w-0 items-center gap-2`, h)), (t[3] = h), (t[4] = v));
  let y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, q.jsx)(`div`, {
        className: `flex size-7 shrink-0 items-center justify-center rounded-lg bg-surface-tertiary`,
        children: (0, q.jsx)(i, { asset: g }),
      })),
      (t[5] = y))
    : (y = t[5]);
  let b;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, q.jsx)(H, {
        id: `appgenShareDialog.profilePin.label`,
        defaultMessage: `Showcase this site on your profile`,
        description: `Toggle label in the Site sharing dialog to add or remove the Site from the user's profile showcase`,
      })),
      (t[6] = b))
    : (b = t[6]);
  let x;
  t[7] === d
    ? (x = t[8])
    : ((x = (0, q.jsx)(`span`, { id: d, className: `text-sm`, children: b })), (t[7] = d), (t[8] = x));
  let S;
  t[9] !== v || t[10] !== x
    ? ((S = (0, q.jsxs)(`div`, { className: v, children: [y, x] })), (t[9] = v), (t[10] = x), (t[11] = S))
    : (S = t[11]);
  let C;
  t[12] !== a || t[13] !== o || t[14] !== d || t[15] !== u
    ? ((C = (0, q.jsx)(z, {
        className: `shrink-0`,
        "aria-labelledby": d,
        checked: a,
        disabled: o,
        onChange: u,
      })),
      (t[12] = a),
      (t[13] = o),
      (t[14] = d),
      (t[15] = u),
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] !== m || t[18] !== S || t[19] !== C
    ? ((w = (0, q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 py-1`,
        tabIndex: m,
        children: [S, C],
      })),
      (t[17] = m),
      (t[18] = S),
      (t[19] = C),
      (t[20] = w))
    : (w = t[20]);
  let T;
  t[21] !== w || t[22] !== f
    ? ((T = (0, q.jsx)(B, { tooltipContent: p, children: w })), (t[21] = w), (t[22] = f), (t[23] = T))
    : (T = t[23]);
  let E;
  t[24] === s
    ? (E = t[25])
    : ((E =
        s == null
          ? null
          : (0, q.jsx)(`div`, {
              role: `alert`,
              className: `text-sm text-secondary`,
              children:
                s instanceof ce && s.status === 409
                  ? (0, q.jsx)(H, {
                      id: `appgenShareDialog.profilePin.conflict`,
                      defaultMessage: `Your profile changed. Try again.`,
                      description: `A concurrent profile edit prevented changing this Site pin; the latest pins are reloaded so the user can try again`,
                    })
                  : (0, q.jsx)(H, {
                      id: `appgenShareDialog.profilePin.saveError`,
                      defaultMessage: `Unable to update your profile. Try again.`,
                      description: `Error adding or removing the Site from the profile; the draft toggle state is preserved for retry with Save`,
                    }),
            })),
      (t[24] = s),
      (t[25] = E));
  let D;
  return (
    t[26] !== T || t[27] !== E
      ? ((D = (0, q.jsx)(Se, {
          spacing: `large`,
          children: (0, q.jsxs)(`div`, {
            className: `flex flex-col gap-3 border-t border-default pt-3 select-none`,
            children: [T, E],
          }),
        })),
        (t[26] = T),
        (t[27] = E),
        (t[28] = D))
      : (D = t[28]),
    D
  );
}
var Zt, Qt, q;
function J() {
  return (J = e(() => {
    ((Zt = T()), f(), y(), (Qt = a()), P(), u(), x(), Me(), he(), V(), C(), (q = m()));
  }))();
}
function $t(e) {
  let t = (0, Z.c)(4);
  Qe();
  let n;
  return (t[2] === e ? (n = t[3]) : ((n = (0, Q.jsx)(en, { ...e })), (t[2] = e), (t[3] = n)), n);
}
function en(e) {
  let n = (0, Z.c)(184),
    {
      initialIsOwner: r,
      initialProjectTitle: i,
      onClose: a,
      projectId: s,
      audienceControl: c,
      showVisitAction: l,
      source: u,
    } = e,
    f = l === void 0 || l,
    p = t(O),
    m = de(),
    { accountId: h, email: g, userId: _ } = Qe(),
    { data: y } = $e(),
    b = y?.structure === `workspace`,
    x = Ee(`998088620`),
    { isProfileVisible: C, isProfileVisibilityLoading: w } = nt(),
    T = Ee(`476199071`),
    E = Ee(`2196156952`),
    D = y?.plan_type,
    k;
  n[0] === D ? (k = n[1]) : ((k = at(D)), (n[0] = D), (n[1] = k));
  let A = k,
    M = ae(Pe),
    N = y?.id,
    P;
  n[2] === N ? (P = n[3]) : ((P = [`accounts`, `settings`, N]), (n[2] = N), (n[3] = P));
  let F = E && b && A,
    I;
  n[4] !== y?.id || n[5] !== p || n[6] !== M
    ? ((I = (e) => {
        let { signal: t } = e;
        if (M) throw Error(`Account input subscription unavailable`);
        return Be(p, y?.id ?? ``, t);
      }),
      (n[4] = y?.id),
      (n[5] = p),
      (n[6] = M),
      (n[7] = I))
    : (I = n[7]);
  let ne;
  n[8] !== P || n[9] !== F || n[10] !== I
    ? ((ne = {
        queryKey: P,
        enabled: F,
        queryFn: I,
        staleTime: oe?.accessInputs == null ? we.ONE_MINUTE : 0,
      }),
      (n[8] = P),
      (n[9] = F),
      (n[10] = I),
      (n[11] = ne))
    : (ne = n[11]);
  let { data: re } = v(ne),
    L;
  n[12] !== y || n[13] !== E || n[14] !== A || n[15] !== re?.permissions
    ? ((L =
        y != null &&
        E &&
        (!A ||
          (y.account_user_role === `account-owner` && re?.permissions != null) ||
          re?.permissions?.includes(`chatgpt.workspace.feature.sites.invite_external.access`) === !0)),
      (n[12] = y),
      (n[13] = E),
      (n[14] = A),
      (n[15] = re?.permissions),
      (n[16] = L))
    : (L = n[16]);
  let ie = L,
    { data: R, isError: se, error: le, isLoading: z } = ue(Ct, s),
    B = (se && R == null) || (le instanceof ce && (le.status === 403 || le.status === 404)),
    fe;
  n[17] !== R?.users || n[18] !== y?.account_user_id || n[19] !== g || n[20] !== B
    ? ((fe =
        !B &&
        R?.users.some(
          (e) =>
            e.role === `owner` &&
            (e.account_user_id === y?.account_user_id || e.email?.toLowerCase() === g?.toLowerCase()),
        ) === !0),
      (n[17] = R?.users),
      (n[18] = y?.account_user_id),
      (n[19] = g),
      (n[20] = B),
      (n[21] = fe))
    : (fe = n[21]);
  let V = fe,
    { data: me } = ue(Ne, s),
    he = x && C && !w && V && y != null && R != null && !B,
    _e = ee(),
    ve;
  n[22] !== h || n[23] !== he || n[24] !== _
    ? ((ve = Gt(h, _, he)), (n[22] = h), (n[23] = he), (n[24] = _), (n[25] = ve))
    : (ve = n[25]);
  let { data: be, isError: Te, isFetching: De } = v(ve),
    [ke, Ae] = (0, Fn.useState)(null),
    je;
  n[26] !== h || n[27] !== be || n[28] !== s || n[29] !== _e || n[30] !== p || n[31] !== _
    ? ((je = Kt({
        scope: p,
        accountId: h,
        userId: _,
        queryClient: _e,
        artifact: { kind: `site`, artifact_id: s },
        pins: be,
      })),
      (n[26] = h),
      (n[27] = be),
      (n[28] = s),
      (n[29] = _e),
      (n[30] = p),
      (n[31] = _),
      (n[32] = je))
    : (je = n[32]);
  let { mutateAsync: Me, isPending: Fe, error: Ie, reset: Le } = xe(je),
    Re;
  n[33] === s ? (Re = n[34]) : ((Re = St(s)), (n[33] = s), (n[34] = Re));
  let U = xe(Re),
    [ze, Ve] = (0, Fn.useState)(``),
    [He, Ue] = (0, Fn.useState)(null),
    [We, Ge] = (0, Fn.useState)(null),
    [qe, Je] = (0, Fn.useState)(null),
    Ye;
  n[35] === s
    ? (Ye = n[36])
    : ((Ye = { mutationKey: [`appgen`, `share-access`, s, `update`], exact: !0 }), (n[35] = s), (n[36] = Ye));
  let W = ye(Ye) > 0 || Fe,
    Xe = !W,
    Ze;
  n[37] === ze ? (Ze = n[38]) : ((Ze = ze.trim()), (n[37] = ze), (n[38] = Ze));
  let G = Ze,
    { data: et, isError: tt, isPending: rt } = vt(b ? ze : ``),
    it = ue(Dt, h ?? ``),
    ot = b && it,
    st;
  n[39] !== y || n[40] !== b
    ? ((st = b && at(y.plan_type)), (n[39] = y), (n[40] = b), (n[41] = st))
    : (st = n[41]);
  let ct = st,
    { data: lt, isError: ut, isLoading: dt } = ue(Et, h ?? ``, { enabled: ot }) ?? {},
    ft;
  n[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = { includeMemberCounts: !0 }), (n[42] = ft))
    : (ft = n[42]);
  let { data: mt, isError: ht, isLoading: gt, refetch: _t } = yt(ct && V ? G : ``, ft),
    K = c?.draft?.accessMode ?? He ?? R?.access_mode ?? null,
    bt = R?.users.filter(fn).map(dn) ?? [],
    xt = R?.groups ?? [],
    wt = b ? (R?.users.filter(un) ?? []) : [],
    Ot = new Set([...bt, ...wt].flatMap(ln)),
    kt = Ft({
      currentAccountUserId: y?.account_user_id,
      existingAccountUserIds: Ot,
      workspaceUsers: et,
    })?.filter(cn),
    jt = new Set(xt.map(sn)),
    Mt = new Set(xt.filter(on).map(an)),
    Nt =
      ot && !ut && !W
        ? (lt ?? [])
            .filter((e) => !jt.has(e.id) && e.name.toLocaleLowerCase().includes(G.toLocaleLowerCase()))
            .map(rn)
        : [],
    Pt =
      G !== `` && ct && !ht && !W
        ? (mt ?? [])
            .filter(
              (e) =>
                e.name.toLocaleLowerCase().includes(G.toLocaleLowerCase()) &&
                !jt.has(e.id) &&
                !Nt.some((t) => t.id === `group:workspace:${e.id}`),
            )
            .map((e) => ({
              id: `group:workspace:${e.id}`,
              label: e.name,
              secondaryLabel: Bt(m, e.num_members),
              avatar: (0, Q.jsx)(zt, { groupId: e.id, size: `sm` }),
              target: { kind: `group`, groupId: e.id, name: e.name, size: e.num_members ?? 0 },
            }))
        : [],
    It = G.toLowerCase(),
    Lt =
      ie &&
      In.safeParse(It).success &&
      g?.trim().toLowerCase() !== It &&
      ![...bt, ...wt].some((e) => e.email?.trim().toLowerCase() === It) &&
      !kt?.some((e) => e.email?.trim().toLowerCase() === It),
    Rt = G === `` ? [] : [...(kt?.map(Nn) ?? []), ...(Lt && !W ? [Pn(It)] : [])],
    Vt = i,
    Ht;
  n[43] === Vt
    ? (Ht = n[44])
    : ((Ht =
        Vt == null
          ? (0, Q.jsx)(H, {
              id: `appgenShareDialog.title`,
              defaultMessage: `Share`,
              description: `Title for the site sharing dialog`,
            })
          : (0, Q.jsx)(H, {
              id: `appgenShareDialog.projectTitle`,
              defaultMessage: `Share {siteTitle}`,
              description: `Title for the site sharing dialog including the site title`,
              values: { siteTitle: Vt },
            })),
      (n[43] = Vt),
      (n[44] = Ht));
  let Ut = Ht,
    Wt;
  if (!b) {
    let e;
    (n[45] === m
      ? (e = n[46])
      : ((e = m.formatMessage({
          id: `appgenShareDialog.externalEmailPlaceholder`,
          defaultMessage: `Enter an email address`,
          description: `Placeholder for entering an external viewer email address in the site share dialog`,
        })),
        (n[45] = m),
        (n[46] = e)),
      (Wt = e));
  } else if (ot) {
    let e;
    (n[47] === m
      ? (e = n[48])
      : ((e = m.formatMessage({
          id: `appgenShareDialog.peopleTeamsPlaceholder`,
          defaultMessage: `Add people or teams`,
          description: `Placeholder and accessible label for inviting people and teams to a site`,
        })),
        (n[47] = m),
        (n[48] = e)),
      (Wt = e));
  } else {
    let e;
    (n[49] === m
      ? (e = n[50])
      : ((e = m.formatMessage({
          id: `appgenShareDialog.peopleGroupsPlaceholder`,
          defaultMessage: `Add people or groups`,
          description: `Placeholder and accessible label for searching workspace people and groups in the site sharing dialog; eligible teams are also suggested`,
        })),
        (n[49] = m),
        (n[50] = e)),
      (Wt = e));
  }
  let qt = b && T && V,
    Zt = bt.some(nn),
    Qt = V && R?.access_mode !== `admins_only` && (K !== `public` || T) && (b || ie || Zt),
    q = Qt && (b || ie),
    J = c?.draft != null || (R != null && K !== R.access_mode),
    $t = K === `public` || (b && K === `workspace_all`),
    en;
  n[51] !== $t || n[52] !== be || n[53] !== s || n[54] !== ke || n[55] !== he
    ? ((en = Jt({
        pins: be,
        artifact: { kind: `site`, artifact_id: s },
        selectedPinned: ke,
        canPin: $t,
        enabled: he,
      })),
      (n[51] = $t),
      (n[52] = be),
      (n[53] = s),
      (n[54] = ke),
      (n[55] = he),
      (n[56] = en))
    : (en = n[56]);
  let { pinned: mn, atLimit: hn, hasPendingChange: Y } = en,
    vn = be == null || Te || De,
    yn = vn || (mn && hn),
    bn = W || c?.draft?.disabled === !0 || (!J && Y && yn),
    xn;
  n[57] !== m || n[58] !== p
    ? ((xn = function () {
        p.get(pe).danger(
          m.formatMessage({
            id: `appgenShareDialog.save.error`,
            defaultMessage: `Unable to save sharing settings`,
            description: `Error toast shown when saving site sharing settings fails`,
          }),
          { errorAnalytics: { toastId: `tpp_sites_response_share_modal_access_save_error` } },
        );
      }),
      (n[57] = m),
      (n[58] = p),
      (n[59] = xn))
    : (xn = n[59]);
  let X = xn,
    Cn;
  n[60] !== R ||
  n[61] !== c ||
  n[62] !== K ||
  n[63] !== mn ||
  n[64] !== J ||
  n[65] !== Y ||
  n[66] !== yn ||
  n[67] !== a ||
  n[68] !== s ||
  n[69] !== Me ||
  n[70] !== p ||
  n[71] !== X ||
  n[72] !== u ||
  n[73] !== U
    ? ((Cn = async function () {
        if (R == null || K == null) {
          a();
          return;
        }
        if (J && K !== `admins_only`) {
          try {
            if (c?.draft != null) await c.draft.save();
            else {
              let e = await U.mutateAsync({ action: { access_mode: K } });
              if (e == null || e.access_mode !== K) {
                Ue(null);
                return;
              }
            }
          } catch {
            X();
            return;
          }
          try {
            pt(p, j, {
              accessMode: Rn[K],
              action: d.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
              addedIndividuals: !1,
              projectId: s,
              source: u,
            });
          } catch {}
          Ue(null);
        }
        if (Y && !yn)
          try {
            (await Me(mn), Ae(null));
          } catch {}
      }),
      (n[60] = R),
      (n[61] = c),
      (n[62] = K),
      (n[63] = mn),
      (n[64] = J),
      (n[65] = Y),
      (n[66] = yn),
      (n[67] = a),
      (n[68] = s),
      (n[69] = Me),
      (n[70] = p),
      (n[71] = X),
      (n[72] = u),
      (n[73] = U),
      (n[74] = Cn))
    : (Cn = n[74]);
  let wn = Cn,
    Tn;
  n[75] !== c || n[76] !== Le
    ? ((Tn = function () {
        (Ue(null), c?.reset(), Ae(null), Le());
      }),
      (n[75] = c),
      (n[76] = Le),
      (n[77] = Tn))
    : (Tn = n[77]);
  let En = Tn,
    Dn;
  n[78] !== b || n[79] !== Le || n[80] !== ke
    ? ((Dn = function (e) {
        (Ue(e),
          ke === !0 && e !== `public` && (!b || e !== `workspace_all`) && (Ae(null), Le()),
          e === `public` && Ve(``));
      }),
      (n[78] = b),
      (n[79] = Le),
      (n[80] = ke),
      (n[81] = Dn))
    : (Dn = n[81]);
  let On = Dn,
    kn;
  n[82] !== R || n[83] !== s || n[84] !== p || n[85] !== X || n[86] !== u || n[87] !== U
    ? ((kn = function (e) {
        if (R == null) return;
        let t;
        (e.kind === `user` && (t = { ...e.user, role: `viewer`, editable: !0 }),
          e.kind === `external` && (t = { email: e.email, role: `viewer`, editable: !0 }),
          Ve(``),
          U.mutateAsync({
            action:
              e.kind === `external`
                ? { email: e.email, role: `viewer` }
                : {
                    recipient: e.kind === `user` ? e.user.account_user_id : e.groupId,
                    recipient_type: e.kind === `user` ? `user` : `group`,
                    role: `viewer`,
                  },
            user: t,
            group: e.kind === `group` ? { id: e.groupId, name: e.name, size: e.size, editable: !0 } : void 0,
          }).then(
            (t) => {
              if (t != null)
                try {
                  pt(p, j, {
                    accessMode: Rn[t.access_mode],
                    action: d.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
                    addedIndividuals: e.kind === `user` || e.kind === `external`,
                    projectId: s,
                    source: u,
                  });
                } catch {}
            },
            () => {
              X();
            },
          ));
      }),
      (n[82] = R),
      (n[83] = s),
      (n[84] = p),
      (n[85] = X),
      (n[86] = u),
      (n[87] = U),
      (n[88] = kn))
    : (kn = n[88]);
  let An = kn,
    Mn;
  n[89] !== s || n[90] !== p || n[91] !== X || n[92] !== u || n[93] !== U
    ? ((Mn = function (e, t) {
        let n;
        if (e.kind === `group`) n = { recipient: e.group.id, recipient_type: `group`, role: t };
        else if (e.user.account_user_id != null)
          n = { recipient: e.user.account_user_id, recipient_type: `user`, role: t };
        else {
          if (t === `editor`) return (X(), Promise.reject(Error(`An editor must have an account user ID`)));
          n = { email: e.user.email ?? ``, role: t };
        }
        return U.mutateAsync({
          action: n,
          user: e.kind === `group` ? void 0 : e.user,
          group: e.kind === `group` ? e.group : void 0,
        }).then(
          (e) => {
            if (e != null)
              try {
                pt(p, j, {
                  accessMode: Rn[e.access_mode],
                  action: d.CODEX_SITES_SHARING_ACTION_ACCESS_SAVED,
                  addedIndividuals: !1,
                  projectId: s,
                  source: u,
                });
              } catch {}
          },
          (e) => {
            throw (X(), e);
          },
        );
      }),
      (n[89] = s),
      (n[90] = p),
      (n[91] = X),
      (n[92] = u),
      (n[93] = U),
      (n[94] = Mn))
    : (Mn = n[94]);
  let Ln = Mn,
    $;
  n[95] === Ln
    ? ($ = n[96])
    : (($ = function (e) {
        return Ln(e, null);
      }),
      (n[95] = Ln),
      (n[96] = $));
  let zn = $,
    Bn;
  n[97] !== s || n[98] !== _e || n[99] !== X || n[100] !== U
    ? ((Bn = () => {
        Tt(s, _e)
          .then(() => {
            U.reset();
          })
          .catch(X);
      }),
      (n[97] = s),
      (n[98] = _e),
      (n[99] = X),
      (n[100] = U),
      (n[101] = Bn))
    : (Bn = n[101]);
  let Vn = Bn,
    Hn;
  n[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Hn = (0, Q.jsx)(H, {
        id: `appgenShareDialog.error`,
        defaultMessage: `Unable to load sharing settings`,
        description: `Error state title in the site share dialog`,
      })),
      (n[102] = Hn))
    : (Hn = n[102]);
  let Un;
  n[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Un = (0, Q.jsx)(H, {
        id: `appgenShareDialog.refresh.button`,
        defaultMessage: `Refresh permissions`,
        description: `Sites sharing dialog button that reloads permission rows without submitting another change.`,
      })),
      (n[103] = Un))
    : (Un = n[103]);
  let Wn;
  n[104] === Vn
    ? (Wn = n[105])
    : ((Wn = (0, Q.jsx)(Se, {
        className: `py-10`,
        children: (0, Q.jsxs)(`div`, {
          className: `text-center text-sm font-medium text-secondary`,
          children: [Hn, (0, Q.jsx)(Ce, { color: `secondary`, onClick: Vn, children: Un })],
        }),
      })),
      (n[104] = Vn),
      (n[105] = Wn));
  let Gn = Wn,
    Kn = x && y != null && !B && !Te && (z ? r === !0 : V && R != null),
    qn = null;
  if (Kn && (w || (C && (z || be == null)))) {
    let e;
    (n[106] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(Yt, {})), (n[106] = e))
      : (e = n[106]),
      (qn = e));
  } else if (Kn && C) {
    let e = z || !$t || W || hn || vn,
      t = Y ? Ie : null,
      r = z || De,
      i;
    n[107] !== y || n[108] !== b || n[109] !== Le || n[110] !== p
      ? ((i = (e) => {
          let t;
          (y != null && (t = b ? S.CODEX_PROFILE_PAGE_SCOPE_WORKSPACE : S.CODEX_PROFILE_PAGE_SCOPE_PERSONAL),
            At(
              p,
              e
                ? te.CODEX_PROFILE_SHOWCASE_EDIT_ACTION_TYPE_ADD
                : te.CODEX_PROFILE_SHOWCASE_EDIT_ACTION_TYPE_REMOVE,
              `site`,
              o.CODEX_PROFILE_PIN_ENTRY_POINT_SITE_SHARE_DIALOG,
              t,
            ),
            Ae(e),
            Le());
        }),
        (n[107] = y),
        (n[108] = b),
        (n[109] = Le),
        (n[110] = p),
        (n[111] = i))
      : (i = n[111]);
    let a;
    (n[112] !== hn ||
    n[113] !== $t ||
    n[114] !== mn ||
    n[115] !== b ||
    n[116] !== e ||
    n[117] !== t ||
    n[118] !== r ||
    n[119] !== i
      ? ((a = (0, Q.jsx)(Xt, {
          atLimit: hn,
          canPin: $t,
          checked: mn,
          disabled: e,
          error: t,
          isFetching: r,
          isWorkspaceAccount: b,
          onChange: i,
        })),
        (n[112] = hn),
        (n[113] = $t),
        (n[114] = mn),
        (n[115] = b),
        (n[116] = e),
        (n[117] = t),
        (n[118] = r),
        (n[119] = i),
        (n[120] = a))
      : (a = n[120]),
      (qn = a));
  }
  let Jn;
  n[121] !== V || n[122] !== wn || n[123] !== J || n[124] !== Y || n[125] !== bn
    ? ((Jn = () => {
        V && (J || Y) && !bn && wn();
      }),
      (n[121] = V),
      (n[122] = wn),
      (n[123] = J),
      (n[124] = Y),
      (n[125] = bn),
      (n[126] = Jn))
    : (Jn = n[126]);
  let Yn;
  n[127] !== R ||
  n[128] !== An ||
  n[129] !== ct ||
  n[130] !== ot ||
  n[131] !== q ||
  n[132] !== Xe ||
  n[133] !== Pt ||
  n[134] !== ht ||
  n[135] !== gt ||
  n[136] !== Wt ||
  n[137] !== Rt ||
  n[138] !== We ||
  n[139] !== B ||
  n[140] !== z ||
  n[141] !== b ||
  n[142] !== ze ||
  n[143] !== _t ||
  n[144] !== Nt ||
  n[145] !== ut ||
  n[146] !== dt ||
  n[147] !== G ||
  n[148] !== tt ||
  n[149] !== rt
    ? ((Yn =
        !z && !B && R != null && q
          ? (0, Q.jsx)(Se, {
              children: (0, Q.jsx)(Oe, {
                searchStatus: {
                  peopleError: b && G !== `` && tt,
                  groupsError: G !== `` && ct && ht,
                  teamsError: ot && ut,
                  teamsLoading: ot && dt,
                },
                ariaLabel: Wt,
                emptyMessage:
                  G === `` || tt || (ct && ht) || (ot && ut)
                    ? null
                    : (0, Q.jsx)(H, {
                        id: `appgenShareDialog.noWorkspaceRecipients`,
                        defaultMessage: `No matching people or groups`,
                        description: `Empty state shown when no workspace people or groups match the site share dialog autocomplete query`,
                      }),
                disabled: !Xe,
                optionSections:
                  b &&
                  ((G !== `` && rt) || (ot && dt) || (ct && gt)) &&
                  Pt.length === 0 &&
                  Nt.length === 0 &&
                  Rt.length === 0
                    ? void 0
                    : [
                        {
                          id: `teams`,
                          label: (0, Q.jsx)(H, {
                            id: `appgenShareDialog.yourTeams`,
                            defaultMessage: `Your teams`,
                            description: `Heading for the user's team suggestions in the site sharing dialog`,
                          }),
                          options: Nt,
                        },
                        {
                          id: `groups`,
                          label: (0, Q.jsx)(H, {
                            id: `appgenShareDialog.groups`,
                            defaultMessage: `Groups`,
                            description: `Heading for matching workspace groups in the site sharing dialog`,
                          }),
                          options: Pt,
                        },
                        {
                          id: `people`,
                          label: (0, Q.jsx)(H, {
                            id: `appgenShareDialog.people`,
                            defaultMessage: `People`,
                            description: `Heading for matching people in the site sharing dialog`,
                          }),
                          options: Rt,
                        },
                      ],
                showSuggestionsOnFocus: ot,
                trailingContent:
                  ct && ht && G !== ``
                    ? (0, Q.jsx)(Ce, {
                        color: `secondary`,
                        size: `sm`,
                        onClick: () => void _t(),
                        children: (0, Q.jsx)(H, {
                          id: `appgenShareDialog.retryGroups`,
                          defaultMessage: `Retry`,
                          description: `Retries the failed workspace group search in site sharing`,
                        }),
                      })
                    : null,
                placeholder: Wt,
                portalContainer: We,
                query: ze,
                onQueryChange: Ve,
                onSelectOption: (e) => {
                  An(e.target);
                },
              }),
            })
          : null),
      (n[127] = R),
      (n[128] = An),
      (n[129] = ct),
      (n[130] = ot),
      (n[131] = q),
      (n[132] = Xe),
      (n[133] = Pt),
      (n[134] = ht),
      (n[135] = gt),
      (n[136] = Wt),
      (n[137] = Rt),
      (n[138] = We),
      (n[139] = B),
      (n[140] = z),
      (n[141] = b),
      (n[142] = ze),
      (n[143] = _t),
      (n[144] = Nt),
      (n[145] = ut),
      (n[146] = dt),
      (n[147] = G),
      (n[148] = tt),
      (n[149] = rt),
      (n[150] = Yn))
    : (Yn = n[150]);
  let Xn = me?.live_url,
    Zn;
  n[151] !== V ||
  n[152] !== K ||
  n[153] !== En ||
  n[154] !== J ||
  n[155] !== Y ||
  n[156] !== bn ||
  n[157] !== W ||
  n[158] !== a ||
  n[159] !== s ||
  n[160] !== f ||
  n[161] !== u ||
  n[162] !== Xn
    ? ((Zn = (0, Q.jsx)(jn, {
        accessMode: K,
        canManageProjectSharing: V,
        hasPendingAccessChange: J,
        hasPendingProfilePinChange: Y,
        isSaving: W,
        isSaveDisabled: bn,
        liveUrl: Xn,
        projectId: s,
        showVisitAction: f,
        source: u,
        onCancelChanges: En,
        onClose: a,
      })),
      (n[151] = V),
      (n[152] = K),
      (n[153] = En),
      (n[154] = J),
      (n[155] = Y),
      (n[156] = bn),
      (n[157] = W),
      (n[158] = a),
      (n[159] = s),
      (n[160] = f),
      (n[161] = u),
      (n[162] = Xn),
      (n[163] = Zn))
    : (Zn = n[163]);
  let Qn = z
      ? (0, Q.jsx)(pn, { error: Gn, inviteInputLabel: Wt, profilePinToggle: qn }, s)
      : B || R == null
        ? Gn
        : (0, Q.jsxs)(Q.Fragment, {
            children: [
              R.show_private_tunnels_warning === !0 && K === `public` && R.access_mode !== `public`
                ? (0, Q.jsx)(Se, {
                    children: (0, Q.jsx)(ge, {
                      type: `warning`,
                      content: (0, Q.jsx)(H, {
                        id: `appgenShareDialog.publicPrivateServicesWarning`,
                        defaultMessage: `If this site uses private tunnels, anyone with the link may be able to use features that reach connected private services.`,
                        description: `Warning shown in the Site sharing dialog when a publisher with tunnel attachment permission selects public access for a site with private tunnels attached. Public visitors may be able to reach connected private services.`,
                      }),
                    }),
                  })
                : null,
              (0, Q.jsx)(_n, {
                accessPolicy: R,
                activeAccessGroups: xt,
                activeAccessUsers: bt,
                activeEditors: wt,
                availableAccessModes: R.available_access_modes,
                canManageEditors: qt,
                canManageInvitees: Qt,
                canManageProjectSharing: V,
                canContinueUserChanges: Xe,
                isSaving: W,
                isWorkspaceAccount: b,
                removableAccessGroupIds: Mt,
                audienceControl: c,
                accessModeDraft: He,
                selectedAccessMode: K,
                ownerEmail: g,
                ownerId: y?.account_user_id,
                onAccessModeChange: On,
                onClearAccessModeDraft: () => Ue(null),
                onDowngradeEditor: (e) => {
                  Ln({ kind: `user`, user: e }, `viewer`);
                },
                onInviteEditor: (e) => {
                  Ln({ kind: `user`, user: e }, `editor`).catch(tn);
                },
                onRemoveAccessUser: (e) => {
                  Je({ kind: `user`, user: e });
                },
                onRemoveAccessGroup: (e) => {
                  Je({ kind: `group`, group: e });
                },
                onRemoveEditor: (e) => {
                  Je({ kind: `editor`, user: e });
                },
              }),
            ],
          }),
    $n;
  n[164] !== R || n[165] !== c || n[166] !== B || n[167] !== z
    ? (($n =
        (z || B || R == null) && c?.draft != null
          ? (0, Q.jsx)(Se, {
              children: (0, Q.jsx)(`p`, { className: `text-sm text-secondary`, children: c.notice }),
            })
          : null),
      (n[164] = R),
      (n[165] = c),
      (n[166] = B),
      (n[167] = z),
      (n[168] = $n))
    : ($n = n[168]);
  let er = z ? null : qn,
    tr;
  n[169] !== R || n[170] !== zn || n[171] !== qe || n[172] !== Vt
    ? ((tr =
        qe != null && R != null
          ? (0, Q.jsx)(gn, {
              accessKind: qe.kind,
              label: qe.kind === `group` ? qe.group.name : Sn(qe.user),
              siteTitle: Vt ?? ``,
              onConfirm: () => zn(qe),
              onClose: () => Je(null),
            })
          : null),
      (n[169] = R),
      (n[170] = zn),
      (n[171] = qe),
      (n[172] = Vt),
      (n[173] = tr))
    : (tr = n[173]);
  let nr;
  return (
    n[174] !== a ||
    n[175] !== Jn ||
    n[176] !== Yn ||
    n[177] !== Zn ||
    n[178] !== Qn ||
    n[179] !== $n ||
    n[180] !== er ||
    n[181] !== tr ||
    n[182] !== Ut
      ? ((nr = (0, Q.jsxs)(Ke, {
          title: Ut,
          onClose: a,
          onPortalContainerChange: Ge,
          onSubmit: Jn,
          headerContent: Yn,
          footer: Zn,
          children: [Qn, $n, er, tr],
        })),
        (n[174] = a),
        (n[175] = Jn),
        (n[176] = Yn),
        (n[177] = Zn),
        (n[178] = Qn),
        (n[179] = $n),
        (n[180] = er),
        (n[181] = tr),
        (n[182] = Ut),
        (n[183] = nr))
      : (nr = n[183]),
    nr
  );
}
function tn() {}
function nn(e) {
  return e.account_user_id == null;
}
function rn(e) {
  return {
    id: `group:workspace:${e.id}`,
    label: e.name,
    avatar: (0, Q.jsx)(It, { avatar: e.avatar, size: `sm` }),
    target: { kind: `group`, groupId: e.id, name: e.name, size: 0 },
  };
}
function an(e) {
  return e.id;
}
function on(e) {
  return e.editable;
}
function sn(e) {
  return e.id;
}
function cn(e) {
  return e.email != null;
}
function ln(e) {
  return e.account_user_id == null ? [] : [e.account_user_id];
}
function un(e) {
  return e.role === `editor`;
}
function dn(e) {
  return { ...e, account_user_id: e.account_user_id ?? null, email: e.email ?? null, name: e.name ?? null };
}
function fn(e) {
  return e.role !== `editor`;
}
function pn(e) {
  let t = (0, Z.c)(6),
    { error: n, inviteInputLabel: r, profilePinToggle: i } = e,
    [a, o] = (0, Fn.useState)(!1),
    s;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = () => o(!0)), (t[0] = s)) : (s = t[0]),
    ke(s, a ? null : Ln));
  let c;
  return (
    t[1] !== n || t[2] !== r || t[3] !== i || t[4] !== a
      ? ((c = a
          ? n
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(Se, {
                  spacing: `large`,
                  children: (0, Q.jsx)(Oe, {
                    ariaLabel: r,
                    placeholder: r,
                    disabled: !0,
                    emptyMessage: null,
                    query: ``,
                    onQueryChange: hn,
                    onSelectOption: mn,
                  }),
                }),
                (0, Q.jsx)(st, { kind: `link`, children: (0, Q.jsx)(Je, {}) }),
                (0, Q.jsx)(st, { children: (0, Q.jsx)(rt, {}) }),
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
function mn() {}
function hn() {}
function gn(e) {
  let t = (0, Z.c)(27),
    { accessKind: n, label: r, onClose: i, onConfirm: a, siteTitle: o } = e,
    [s, c] = (0, Fn.useState)(!1),
    l;
  t[0] === r
    ? (l = t[1])
    : ((l = (0, Q.jsx)(H, {
        id: `appgenShareDialog.removeDialog.title`,
        defaultMessage: `Remove {label}?`,
        description: `Title for dialog confirming removal of a person's or group's site access`,
        values: { label: r },
      })),
      (t[0] = r),
      (t[1] = l));
  let u;
  t[2] !== n || t[3] !== r || t[4] !== o
    ? ((u =
        n === `editor`
          ? (0, Q.jsx)(H, {
              id: `appgenShareDialog.removeDialog.editorDescription`,
              defaultMessage: `{label} will no longer be able to edit {siteTitle}`,
              description: `Warning shown when removing an accepted site editor`,
              values: { label: r, siteTitle: o },
            })
          : (0, Q.jsx)(H, {
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
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== s || t[7] !== i || t[8] !== a
    ? ((d = () => {
        s ||
          (c(!0),
          a().then(i, () => {
            c(!1);
          }));
      }),
      (t[6] = s),
      (t[7] = i),
      (t[8] = a),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(H, {
        id: `appgenShareDialog.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for access removal confirmation dialog`,
      })),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== s || t[12] !== i
    ? ((p = (0, Q.jsx)(Ce, { color: `secondary`, size: `xl`, disabled: s, onClick: i, children: f })),
      (t[11] = s),
      (t[12] = i),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(H, {
        id: `appgenShareDialog.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirmation button label for removing site access`,
      })),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] === s
    ? (h = t[16])
    : ((h = (0, Q.jsx)(Ce, {
        color: `danger`,
        size: `xl`,
        loading: s,
        disabled: s,
        type: `submit`,
        children: m,
      })),
      (t[15] = s),
      (t[16] = h));
  let g;
  t[17] !== p || t[18] !== h
    ? ((g = (0, Q.jsxs)(Q.Fragment, { children: [p, h] })), (t[17] = p), (t[18] = h), (t[19] = g))
    : (g = t[19]);
  let _;
  return (
    t[20] !== s || t[21] !== i || t[22] !== l || t[23] !== u || t[24] !== d || t[25] !== g
      ? ((_ = (0, Q.jsx)(Ke, {
          variant: `compact`,
          title: l,
          subtitle: u,
          isDismissalDisabled: s,
          onClose: i,
          onSubmit: d,
          footer: g,
        })),
        (t[20] = s),
        (t[21] = i),
        (t[22] = l),
        (t[23] = u),
        (t[24] = d),
        (t[25] = g),
        (t[26] = _))
      : (_ = t[26]),
    _
  );
}
function _n(e) {
  let t = (0, Z.c)(88),
    {
      activeAccessGroups: n,
      activeAccessUsers: r,
      activeEditors: i,
      accessPolicy: a,
      availableAccessModes: o,
      canManageEditors: s,
      canManageInvitees: c,
      canManageProjectSharing: l,
      canContinueUserChanges: u,
      isSaving: d,
      isWorkspaceAccount: f,
      removableAccessGroupIds: p,
      audienceControl: m,
      accessModeDraft: h,
      selectedAccessMode: g,
      ownerEmail: _,
      ownerId: v,
      onAccessModeChange: y,
      onClearAccessModeDraft: b,
      onDowngradeEditor: x,
      onInviteEditor: S,
      onRemoveAccessGroup: C,
      onRemoveAccessUser: w,
      onRemoveEditor: T,
    } = e,
    E = de(),
    D,
    O,
    k,
    ee,
    A;
  if (
    t[0] !== h ||
    t[1] !== a.access_mode ||
    t[2] !== n ||
    t[3] !== r ||
    t[4] !== i ||
    t[5] !== m ||
    t[6] !== o ||
    t[7] !== u ||
    t[8] !== s ||
    t[9] !== c ||
    t[10] !== l ||
    t[11] !== E ||
    t[12] !== d ||
    t[13] !== f ||
    t[14] !== y ||
    t[15] !== b ||
    t[16] !== x ||
    t[17] !== S ||
    t[18] !== C ||
    t[19] !== w ||
    t[20] !== T ||
    t[21] !== _ ||
    t[22] !== v ||
    t[23] !== p ||
    t[24] !== g
  ) {
    let e = xn({ activeAccessUsers: r, currentAccountUserId: v, currentUserEmail: _ }),
      j;
    t[30] === i ? (j = t[31]) : ((j = new Set(i.map(vn))), (t[30] = i), (t[31] = j));
    let M = j,
      N = l && !d,
      P = s && u,
      F = c && u,
      te = r.filter((t) => t.account_user_id !== e?.account_user_id && !M.has(t.account_user_id)),
      I;
    t[32] === l
      ? (I = t[33])
      : ((I = l
          ? void 0
          : (0, Q.jsx)(H, {
              id: `appgenShareDialog.linkAccess.ownerOnly`,
              defaultMessage: `Only the owner can change link access`,
              description: `Tooltip on the disabled Link access dropdown in the Site sharing dialog. Editors can view who can open the Site link, but only the Site owner can change that setting.`,
            })),
        (t[32] = l),
        (t[33] = I));
    let ne = l ? void 0 : 0,
      re = a.access_mode,
      L;
    t[34] === r ? (L = t[35]) : ((L = r.some(Y)), (t[34] = r), (t[35] = L));
    let ie = g ?? a.access_mode,
      R;
    t[36] !== h ||
    t[37] !== a.access_mode ||
    t[38] !== m ||
    t[39] !== o ||
    t[40] !== N ||
    t[41] !== f ||
    t[42] !== y ||
    t[43] !== b ||
    t[44] !== L ||
    t[45] !== ie
      ? ((R = (0, Q.jsx)(
          Dn,
          {
            availableAccessModes: o,
            canManageAccess: N,
            hasExternalVisitors: L,
            currentAccessMode: a.access_mode,
            isWorkspaceAccount: f,
            audienceControl: m,
            accessModeDraft: h,
            selectedAccessMode: ie,
            onAccessModeChange: y,
            onClearAccessModeDraft: b,
          },
          re,
        )),
        (t[36] = h),
        (t[37] = a.access_mode),
        (t[38] = m),
        (t[39] = o),
        (t[40] = N),
        (t[41] = f),
        (t[42] = y),
        (t[43] = b),
        (t[44] = L),
        (t[45] = ie),
        (t[46] = R))
      : (R = t[46]);
    let ae;
    t[47] !== R || t[48] !== ne
      ? ((ae = (0, Q.jsx)(`div`, {
          className: `flex items-center justify-between gap-3`,
          tabIndex: ne,
          children: R,
        })),
        (t[47] = R),
        (t[48] = ne),
        (t[49] = ae))
      : (ae = t[49]);
    let oe;
    t[50] !== ae || t[51] !== I
      ? ((oe = (0, Q.jsx)(B, { tooltipContent: I, children: ae })), (t[50] = ae), (t[51] = I), (t[52] = oe))
      : (oe = t[52]);
    let se;
    (t[53] === m
      ? (se = t[54])
      : ((se =
          m?.notice == null
            ? null
            : (0, Q.jsx)(`p`, { className: `text-sm text-secondary`, children: m.notice })),
        (t[53] = m),
        (t[54] = se)),
      t[55] !== oe || t[56] !== se
        ? ((A = (0, Q.jsxs)(st, { kind: `link`, children: [oe, se] })),
          (t[55] = oe),
          (t[56] = se),
          (t[57] = A))
        : (A = t[57]),
      (O = st),
      (ee = `vertical-scroll-fade-mask -mx-5 flex max-h-64 flex-col gap-3 overflow-y-auto px-5`),
      (D = Nt));
    let ce;
    t[58] !== P || t[59] !== N || t[60] !== f || t[61] !== x || t[62] !== T
      ? ((ce = (e) => ({
          id: `user:${e.account_user_id ?? e.email}`,
          label: Sn(e),
          row: (0, Q.jsx)(He, {
            avatar: (0, Q.jsx)(bn, { user: e }),
            label: Sn(e),
            renderIdentity: (t, n) => (0, Q.jsx)(yn, { secondaryLabelId: n, user: e, children: t }),
            secondaryLabel: Cn(e),
            trailingContent: (0, Q.jsx)(wn, {
              value: `edit`,
              readOnly: !N && !P,
              onChange:
                f && N && e.account_user_id != null
                  ? (t) => {
                      t === `visit` && x(e);
                    }
                  : void 0,
              onRemoveAccess:
                f && (N || P)
                  ? () => {
                      T(e);
                    }
                  : void 0,
            }),
          }),
        })),
        (t[58] = P),
        (t[59] = N),
        (t[60] = f),
        (t[61] = x),
        (t[62] = T),
        (t[63] = ce))
      : (ce = t[63]);
    let le;
    t[64] !== P || t[65] !== F || t[66] !== d || t[67] !== S || t[68] !== w
      ? ((le = (e) => ({
          id: `user:${e.account_user_id ?? e.email}`,
          label: Sn(e),
          row: (0, Q.jsx)(He, {
            avatar: (0, Q.jsx)(bn, { user: e }),
            label: Sn(e),
            renderIdentity: (t, n) => (0, Q.jsx)(yn, { secondaryLabelId: n, user: e, children: t }),
            secondaryLabel: Cn(e),
            trailingContent: (0, Q.jsx)(wn, {
              readOnly: !F || !e.editable || (d && e.account_user_id == null),
              onChange:
                P && e.account_user_id != null
                  ? (t) => {
                      t === `edit` && S(e);
                    }
                  : void 0,
              onRemoveAccess:
                F && e.editable && (!d || e.account_user_id != null)
                  ? () => {
                      w(e);
                    }
                  : void 0,
            }),
          }),
        })),
        (t[64] = P),
        (t[65] = F),
        (t[66] = d),
        (t[67] = S),
        (t[68] = w),
        (t[69] = le))
      : (le = t[69]);
    let z;
    (t[70] !== N || t[71] !== F || t[72] !== E || t[73] !== C || t[74] !== p
      ? ((z = (e) => ({
          id: `group:${e.id}`,
          label: e.name,
          isTeam: !0,
          row: (0, Q.jsx)(He, {
            avatar: (0, Q.jsx)(zt, { groupId: e.id }),
            label: e.name,
            secondaryLabel: e.pending
              ? (0, Q.jsx)(H, {
                  id: `appgenShareDialog.invitation.pending`,
                  defaultMessage: `Pending`,
                  description: `Status beside a recipient in the Sites sharing dialog whose invitation is pending, not yet confirmed access.`,
                })
              : E.formatMessage(
                  {
                    id: `appgenShareDialog.access.groupSize`,
                    defaultMessage: `{count, plural, one {# member} other {# members}}`,
                    description: `Member count shown for a group in the site share dialog`,
                  },
                  { count: e.size },
                ),
            trailingContent: (0, Q.jsx)(wn, {
              readOnly: !N || !e.editable,
              onRemoveAccess:
                F && p.has(e.id)
                  ? () => {
                      C(e);
                    }
                  : void 0,
            }),
          }),
        })),
        (t[70] = N),
        (t[71] = F),
        (t[72] = E),
        (t[73] = C),
        (t[74] = p),
        (t[75] = z))
      : (z = t[75]),
      (k = [
        ...(e == null
          ? []
          : [
              {
                id: `user:${e.account_user_id}`,
                label: Sn(e),
                isOwner: !0,
                row: (0, Q.jsx)(He, {
                  avatar: (0, Q.jsx)(bn, { user: e }),
                  label: Sn(e),
                  renderIdentity: (t, n) => (0, Q.jsx)(yn, { secondaryLabelId: n, user: e, children: t }),
                  secondaryLabel: Cn(e),
                  trailingContent: (0, Q.jsx)(`span`, {
                    className: `text-sm text-codex-description`,
                    children: (0, Q.jsx)(H, {
                      id: `appgenShareDialog.permission.owner`,
                      defaultMessage: `Owner`,
                      description: `Label for the owner in the site share dialog`,
                    }),
                  }),
                }),
              },
            ]),
        ...i.map(ce),
        ...te.map(le),
        ...n.map(z),
      ]),
      (t[0] = h),
      (t[1] = a.access_mode),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = m),
      (t[6] = o),
      (t[7] = u),
      (t[8] = s),
      (t[9] = c),
      (t[10] = l),
      (t[11] = E),
      (t[12] = d),
      (t[13] = f),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x),
      (t[17] = S),
      (t[18] = C),
      (t[19] = w),
      (t[20] = T),
      (t[21] = _),
      (t[22] = v),
      (t[23] = p),
      (t[24] = g),
      (t[25] = D),
      (t[26] = O),
      (t[27] = k),
      (t[28] = ee),
      (t[29] = A));
  } else ((D = t[25]), (O = t[26]), (k = t[27]), (ee = t[28]), (A = t[29]));
  let j;
  t[76] !== D || t[77] !== k
    ? ((j = (0, Q.jsx)(D, { entries: k })), (t[76] = D), (t[77] = k), (t[78] = j))
    : (j = t[78]);
  let M;
  t[79] !== ee || t[80] !== j
    ? ((M = (0, Q.jsx)(`div`, { className: ee, children: j })), (t[79] = ee), (t[80] = j), (t[81] = M))
    : (M = t[81]);
  let N;
  t[82] !== O || t[83] !== M
    ? ((N = (0, Q.jsx)(O, { children: M })), (t[82] = O), (t[83] = M), (t[84] = N))
    : (N = t[84]);
  let P;
  return (
    t[85] !== A || t[86] !== N
      ? ((P = (0, Q.jsxs)(Q.Fragment, { children: [A, N] })), (t[85] = A), (t[86] = N), (t[87] = P))
      : (P = t[87]),
    P
  );
}
function Y(e) {
  return e.account_user_id == null;
}
function vn(e) {
  return e.account_user_id;
}
function yn(e) {
  let t = (0, Z.c)(9),
    { children: n, secondaryLabelId: r, user: i } = e,
    a = i.account_user_id == null ? null : i.email,
    o = i.avatar_url,
    s;
  t[0] === i ? (s = t[1]) : ((s = Sn(i)), (t[0] = i), (t[1] = s));
  let c = i.pending ? r : void 0,
    l;
  return (
    t[2] !== n || t[3] !== a || t[4] !== s || t[5] !== c || t[6] !== i.avatar_url || t[7] !== i.email
      ? ((l = (0, Q.jsx)(xt, {
          inShareDialog: !0,
          accountUserId: null,
          accountUserEmail: a,
          avatarUrl: o,
          label: s,
          labelEmail: i.email,
          triggerDescriptionId: c,
          children: n,
        })),
        (t[2] = n),
        (t[3] = a),
        (t[4] = s),
        (t[5] = c),
        (t[6] = i.avatar_url),
        (t[7] = i.email),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function bn(e) {
  let t = (0, Z.c)(18),
    { user: n } = e,
    { accountId: r, userId: i, email: a, profilePictureUrlAtLogin: o } = Qe(),
    { data: s } = $e(),
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
    { isProfileVisible: d } = nt(),
    f = u && d,
    p;
  t[5] !== r || t[6] !== f || t[7] !== i
    ? ((p = Ve({ accountId: r, userId: i, enabled: f })), (t[5] = r), (t[6] = f), (t[7] = i), (t[8] = p))
    : (p = t[8]);
  let { data: m } = v(p),
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
  let y;
  t[12] === n ? (y = t[13]) : ((y = X(n)), (t[12] = n), (t[13] = y));
  let b;
  return (
    t[14] !== h || t[15] !== _ || t[16] !== y
      ? ((b = (0, Q.jsx)(_t, { avatarUrl: g, colorKey: _, name: y })),
        (t[14] = h),
        (t[15] = _),
        (t[16] = y),
        (t[17] = b))
      : (b = t[17]),
    b
  );
}
function xn({ activeAccessUsers: e, currentAccountUserId: t, currentUserEmail: n }) {
  let r = e.find((e) => e.role === `owner`);
  if (r != null) return r;
  let i = n?.trim().toLowerCase();
  if (i != null && i.length > 0) {
    let t = e.find((e) => e.email?.trim().toLowerCase() === i);
    if (t != null) return t;
  }
  return t == null ? null : (e.find((e) => e.account_user_id === t) ?? null);
}
function Sn(e) {
  return e.name ?? e.email ?? e.account_user_id ?? ``;
}
function X(e) {
  return e.name ?? e.email ?? e.account_user_id?.replace(/[-_]/g, ` `) ?? ``;
}
function Cn(e) {
  return e.pending
    ? (0, Q.jsx)(H, {
        id: `appgenShareDialog.invitation.pending`,
        defaultMessage: `Pending`,
        description: `Status beside a recipient in the Sites sharing dialog whose invitation is pending, not yet confirmed access.`,
      })
    : e.name == null
      ? null
      : (e.email ?? null);
}
function wn(e) {
  let t = (0, Z.c)(14),
    { value: n, readOnly: r, onChange: i, onRemoveAccess: a } = e,
    o = n === void 0 ? `visit` : n,
    s = r !== void 0 && r,
    c = de();
  if (s) {
    let e;
    return (
      t[0] === o
        ? (e = t[1])
        : ((e = (0, Q.jsx)(`span`, {
            className: `text-sm text-codex-description`,
            children: (0, Q.jsx)(En, { permission: o }),
          })),
          (t[0] = o),
          (t[1] = e)),
      e
    );
  }
  let l;
  t[2] !== i || t[3] !== o
    ? ((l = i == null ? [o] : [`visit`, `edit`]), (t[2] = i), (t[3] = o), (t[4] = l))
    : (l = t[4]);
  let u = l,
    d;
  t[5] !== c || t[6] !== u
    ? ((d = u.map((e) => ({
        value: e,
        ariaLabel: c.formatMessage($[e]),
        description: c.formatMessage($[`${e}Description`]),
      }))),
      (t[5] = c),
      (t[6] = u),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(H, {
        id: `appgenShareDialog.permission.remove`,
        defaultMessage: `Remove access`,
        description: `Menu item for removing a person's site access`,
      })),
      (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] !== i || t[10] !== a || t[11] !== d || t[12] !== o
      ? ((p = (0, Q.jsx)(Wt, {
          opticallyAlign: `end`,
          options: d,
          renderLabel: Tn,
          removeLabel: f,
          value: o,
          variant: `inline`,
          onChange: i,
          onRemoveAccess: a,
        })),
        (t[9] = i),
        (t[10] = a),
        (t[11] = d),
        (t[12] = o),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
function Tn(e) {
  return (0, Q.jsx)(En, { permission: e });
}
function En(e) {
  let t = (0, Z.c)(2),
    { permission: n } = e,
    r = $[n],
    i;
  return (t[0] === r ? (i = t[1]) : ((i = (0, Q.jsx)(H, { ...r })), (t[0] = r), (t[1] = i)), i);
}
function Dn(e) {
  let t = (0, Z.c)(16),
    {
      availableAccessModes: n,
      canManageAccess: r,
      currentAccessMode: i,
      hasExternalVisitors: a,
      isWorkspaceAccount: o,
      audienceControl: s,
      accessModeDraft: c,
      selectedAccessMode: l,
      onAccessModeChange: u,
      onClearAccessModeDraft: d,
    } = e,
    f = ut({ availableAccessModes: n, currentAccessMode: i, isWorkspaceAccount: o }),
    { data: p } = $e(),
    m = p?.name?.trim(),
    { accountId: h, userId: g } = Qe(),
    _ = o && p?.id === h,
    y;
  t[0] !== h || t[1] !== g
    ? ((y = { accountId: h, userId: g }), (t[0] = h), (t[1] = g), (t[2] = y))
    : (y = t[2]);
  let b;
  t[3] !== h || t[4] !== y
    ? ((b = [`workspace`, h, `owner_count`, y]), (t[3] = h), (t[4] = y), (t[5] = b))
    : (b = t[5]);
  let x =
      h != null && g != null && _ && f.some(kn)
        ? (e) => {
            let { signal: t } = e;
            return Xe.safeGet(`/accounts/{account_id}/users/owner_count`, {
              parameters: { path: { account_id: h } },
              expectedIdentity: { accountId: h, userId: g },
              isExpectedError: On,
              signal: t,
            });
          }
        : R,
    S;
  t[6] !== b || t[7] !== x
    ? ((S = { queryKey: b, queryFn: x, staleTime: we.ONE_MINUTE, retry: !1 }),
      (t[6] = b),
      (t[7] = x),
      (t[8] = S))
    : (S = t[8]);
  let { data: C } = v(S),
    w = !o && !a,
    T;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { admins_only: 0, custom: 0, workspace_all: 2, public: 3 }), (t[9] = T))
    : (T = t[9]);
  let E = T,
    D;
  t[10] !== r || t[11] !== _ || t[12] !== w || t[13] !== C
    ? ((D = (e) => {
        let { disabled: t, value: n } = e;
        return {
          description:
            n === `workspace_all` && _ && C?.total_count != null
              ? (0, Q.jsx)(H, { ...$.workspaceMemberCount, values: { count: C.total_count } })
              : (0, Q.jsx)(H, { ...$[n === `custom` && w ? `admins_onlyDescription` : `${n}Description`] }),
          disabled: t || !r,
          icon: An(n),
          value: n,
        };
      }),
      (t[10] = r),
      (t[11] = _),
      (t[12] = w),
      (t[13] = C),
      (t[14] = D))
    : (D = t[14]);
  let O;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (e, t) => E[e.value] - E[t.value]), (t[15] = O))
    : (O = t[15]);
  let k = {
    disabled: !r,
    iconVariant: `thumbnail`,
    options: f.map(D).toSorted(O),
    value: l,
    renderLabel: (e) => {
      let t = f.find((t) => {
        let { value: n } = t;
        return n === e;
      })?.value;
      if (t == null) return null;
      if (t === `custom` && w) return (0, Q.jsx)(H, { ...$.admins_only });
      if (t === `workspace_all` && _ && m) return m;
      let n = $[t];
      return (
        t === `public` ? (n = $.publicLabel) : t === `workspace_all` && (n = $.workspaceLabel),
        (0, Q.jsx)(H, { ...n })
      );
    },
    onChange: u,
  };
  return s == null ? (0, Q.jsx)(Te, { ...k }) : s.renderDropdown(k, c, d);
}
function On() {
  return !0;
}
function kn(e) {
  let { value: t } = e;
  return t === `workspace_all`;
}
function An(e) {
  switch (e) {
    case `admins_only`:
    case `custom`:
      return (0, Q.jsx)(me, {});
    case `workspace_all`:
      return (0, Q.jsx)(re, {});
    case `public`:
      return (0, Q.jsx)(_e, {});
  }
}
function jn(e) {
  let n = (0, Z.c)(31),
    {
      accessMode: r,
      canManageProjectSharing: a,
      hasPendingAccessChange: o,
      hasPendingProfilePinChange: s,
      isSaving: c,
      isSaveDisabled: l,
      liveUrl: u,
      projectId: f,
      showVisitAction: m,
      source: h,
      onCancelChanges: g,
      onClose: _,
    } = e,
    v = t(O),
    y = de(),
    x;
  n[0] === u ? (x = n[1]) : ((x = Mn({ action: `copyLink`, liveUrl: u })), (n[0] = u), (n[1] = x));
  let S = x,
    C;
  n[2] === u ? (C = n[3]) : ((C = Mn({ action: `visit`, liveUrl: u })), (n[2] = u), (n[3] = C));
  let w = C,
    T = u == null && !a,
    E;
  n[4] === y
    ? (E = n[5])
    : ((E = y.formatMessage({
        id: `appgenShareDialog.publish.ownerRequired`,
        defaultMessage: `Only the owner can publish the first version`,
        description: `Tooltip explaining why only the owner can publish a Site`,
      })),
      (n[4] = y),
      (n[5] = E));
  let D = E,
    k;
  n[6] !== r || n[7] !== o
    ? ((k =
        o && r === `public`
          ? (0, Q.jsx)(H, {
              id: `appgenShareDialog.publish`,
              defaultMessage: `Publish`,
              description: `Button label for publishing a site to the public internet`,
            })
          : void 0),
      (n[6] = r),
      (n[7] = o),
      (n[8] = k))
    : (k = n[8]);
  let ee = o || s,
    A;
  n[9] !== r ||
  n[10] !== S ||
  n[11] !== T ||
  n[12] !== o ||
  n[13] !== s ||
  n[14] !== y ||
  n[15] !== u ||
  n[16] !== f ||
  n[17] !== D ||
  n[18] !== v ||
  n[19] !== m ||
  n[20] !== h ||
  n[21] !== w
    ? ((A =
        u === void 0 || o || s
          ? null
          : (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                T
                  ? (0, Q.jsx)(B, {
                      tooltipContent: D,
                      children: (0, Q.jsx)(`span`, {
                        "aria-disabled": `true`,
                        "aria-label": y.formatMessage({
                          id: `appgenShareDialog.publish`,
                          defaultMessage: `Publish`,
                          description: `Button label for publishing a site to the public internet`,
                        }),
                        className: `inline-flex`,
                        role: `button`,
                        tabIndex: 0,
                        children: (0, Q.jsx)(Ce, {
                          "aria-hidden": `true`,
                          color: `secondary`,
                          disabled: !0,
                          size: `xl`,
                          children: (0, Q.jsx)(H, {
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
                        children: (0, Q.jsxs)(Ce, {
                          color: `primary`,
                          variant: `outline`,
                          disabled: u == null,
                          size: `xl`,
                          onClick: (e) => {
                            u != null &&
                              Fe({
                                event: e,
                                href: u,
                                initiator: `mcp_app_resource`,
                                openTarget: `external-browser`,
                              });
                          },
                          children: [
                            u == null
                              ? null
                              : (0, Q.jsx)(qe, {
                                  className: `icon-xs`,
                                  ExternalIcon: Ae,
                                  href: u,
                                  openTarget: `external-browser`,
                                }),
                            (0, Q.jsx)(H, {
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
                        children: (0, Q.jsxs)(Ce, {
                          color: `primary`,
                          variant: `outline`,
                          disabled: u == null,
                          size: `xl`,
                          onClick: () => {
                            u != null &&
                              b(u).then((e) => {
                                if (e) {
                                  try {
                                    pt(v, j, {
                                      accessMode: r == null ? void 0 : Rn[r],
                                      action: d.CODEX_SITES_SHARING_ACTION_LINK_COPIED,
                                      projectId: f,
                                      source: h,
                                    });
                                  } catch {}
                                  We(v);
                                }
                              });
                          },
                          children: [
                            (0, Q.jsx)(i, { "aria-hidden": !1, asset: p }),
                            (0, Q.jsx)(H, {
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
      (n[9] = r),
      (n[10] = S),
      (n[11] = T),
      (n[12] = o),
      (n[13] = s),
      (n[14] = y),
      (n[15] = u),
      (n[16] = f),
      (n[17] = D),
      (n[18] = v),
      (n[19] = m),
      (n[20] = h),
      (n[21] = w),
      (n[22] = A))
    : (A = n[22]);
  let M;
  return (
    n[23] !== l || n[24] !== c || n[25] !== g || n[26] !== _ || n[27] !== k || n[28] !== ee || n[29] !== A
      ? ((M = (0, Q.jsx)(Ht, {
          saveLabel: k,
          onCancel: g,
          onClose: _,
          disabled: l,
          hasPendingAccessChange: ee,
          hasPendingInvitees: !1,
          copyLink: A,
          isSaving: c,
        })),
        (n[23] = l),
        (n[24] = c),
        (n[25] = g),
        (n[26] = _),
        (n[27] = k),
        (n[28] = ee),
        (n[29] = A),
        (n[30] = M))
      : (M = n[30]),
    M
  );
}
function Mn({ action: e, liveUrl: t }) {
  if (t == null)
    switch (e) {
      case `copyLink`:
        return (0, Q.jsx)(H, {
          id: `appgenShareDialog.copyLinkDisabled.notPublished`,
          defaultMessage: `Publish this site to copy its link`,
          description: `Tooltip explaining why the site share dialog copy link button is disabled`,
        });
      case `visit`:
        return (0, Q.jsx)(H, {
          id: `appgenShareDialog.visitDisabled.notPublished`,
          defaultMessage: `Publish this site before visiting it`,
          description: `Tooltip explaining why the site share dialog visit button is disabled`,
        });
    }
  return null;
}
function Nn(e) {
  let t = Pt(e);
  return {
    chipLabel: t.chipLabel,
    colorKey: t.colorKey,
    id: `user:${e.account_user_id ?? e.email}`,
    label: t.label,
    secondaryLabel: t.secondaryLabel,
    target: { kind: `user`, user: e },
  };
}
function Pn(e) {
  return { id: `external:${e}`, label: e, target: { kind: `external`, email: e } };
}
var Z, Fn, Q, In, Ln, Rn, $;
function zn() {
  return (zn = e(() => {
    ((Z = T()),
      k(),
      fe(),
      s(),
      se(),
      ve(),
      ie(),
      le(),
      h(),
      I(),
      (Fn = a()),
      P(),
      l(),
      Ot(),
      U(),
      it(),
      gt(),
      dt(),
      ft(),
      be(),
      u(),
      Ue(),
      lt(),
      x(),
      A(),
      N(),
      V(),
      Ie(),
      bt(),
      ht(),
      jt(),
      W(),
      K(),
      L(),
      n(),
      qt(),
      G(),
      Mt(),
      Lt(),
      je(),
      ot(),
      Le(),
      Vt(),
      Ut(),
      Ye(),
      Ze(),
      tt(),
      Ge(),
      et(),
      Rt(),
      mt(),
      E(),
      r(),
      ct(),
      Re(),
      D(),
      J(),
      ze(),
      wt(),
      (Q = m()),
      (In = c()),
      (Ln = 1e4),
      (Rn = {
        admins_only: M.CODEX_SITES_ACCESS_MODE_ADMINS_ONLY,
        custom: M.CODEX_SITES_ACCESS_MODE_CUSTOM,
        public: M.CODEX_SITES_ACCESS_MODE_PUBLIC,
        workspace_all: M.CODEX_SITES_ACCESS_MODE_WORKSPACE_ALL,
      }),
      ($ = F({
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
zn();
export { gn as AppgenRemoveAccessDialog, $t as AppgenShareDialog };
//# sourceMappingURL=appgen-share-dialog-433e05659a77.js.map
