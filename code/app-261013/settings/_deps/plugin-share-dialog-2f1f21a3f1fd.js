import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  ADt as r,
  Cot as i,
  EPt as a,
  FD as o,
  GE as s,
  IDt as c,
  Ixt as l,
  JDt as u,
  Mz as d,
  ND as f,
  Nz as p,
  Pxt as m,
  Rnt as h,
  TJ as g,
  UQ as _,
  VDt as v,
  WE as y,
  WQ as ee,
  Wtt as te,
  Xot as ne,
  Yot as b,
  _Mt as x,
  _wt as re,
  b0 as ie,
  cV as ae,
  cz as oe,
  fO as se,
  gMt as S,
  gwt as ce,
  i3 as C,
  jDt as w,
  lO as le,
  oIt as T,
  owt as E,
  pLt as ue,
  pW as de,
  r3 as D,
  sMt as fe,
  swt as O,
  sz as pe,
  t3 as me,
  vzt as he,
  wot as ge,
  xMt as _e,
  xU as ve,
  y0 as ye,
  yAt as be,
  yzt as xe,
  zxt as Se,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as Ce,
  AV as we,
  DV as k,
  EMr as Te,
  EPr as Ee,
  EV as De,
  Fin as Oe,
  Hin as ke,
  NV as A,
  OV as Ae,
  Qjr as je,
  TMr as Me,
  Ymr as Ne,
  Zjr as Pe,
  dMr as Fe,
  eDr as Ie,
  ehr as Le,
  fMr as Re,
  fV as ze,
  fur as Be,
  iDr as Ve,
  jV as He,
  kV as Ue,
  nDr as We,
  nT as Ge,
  pV as Ke,
  pur as qe,
  rT as Je,
} from "./app-initial-5851df3f6cb1.js";
import { n as j, t as M } from "./team-c01e2ff48801.js";
import { a as Ye, i as Xe, r as N } from "./use-workspace-users-9ff632adf20a.js";
import { n as P, t as Ze } from "./open-appgen-share-dialog-8d437cfd3c67.js";
import { n as Qe, r as $e, t as et } from "./workspace-team-recipient-suggestions-f88127cfec32.js";
import { n as tt, t as nt } from "./access-list-99033c7522ef.js";
import { n as rt, r as F, t as it } from "./dialog-utils-21c4d759328d.js";
import { a as at, i as ot, o as I, r as st, t as L } from "./member-count-5e188d46464b.js";
import { n as ct, t as lt } from "./modal-footer-8c17ec58d94e.js";
import { n as ut, t as R } from "./modal-permission-dropdown-75a4787ca1b8.js";
import { n as z, t as dt } from "./access-dropdown-224e31792a15.js";
import { n as ft, r as pt } from "./team-plugins-2260d2b8aeb9.js";
function mt({ teams: e, query: t, existingGroupIds: n, selectedGroupIds: r }) {
  let i = t.trim().toLocaleLowerCase();
  if (e == null) return;
  let a = new Set([...n, ...r]);
  return {
    id: `teams`,
    label:
      i.length === 0
        ? (0, B.jsx)(c, {
            id: `plugins.detail.shareDialog.teams.yourTeams`,
            defaultMessage: `Your teams`,
            description: `Section heading for the user's teams suggested before entering a plugin share search`,
          })
        : (0, B.jsx)(c, {
            id: `plugins.detail.shareDialog.teams`,
            defaultMessage: `Teams`,
            description: `Section heading for matching teams in the plugin share dialog`,
          }),
    options: e
      .filter((e) => e.name.toLocaleLowerCase().includes(i) && !a.has(e.id))
      .map((e) => ({
        avatar: (0, B.jsx)(at, { avatar: e.avatar, size: `sm` }),
        chipLabel: e.name,
        id: `group:${e.id}`,
        label: e.name,
        target: { kind: `group`, group: { id: e.id, name: e.name, num_members: null } },
      })),
  };
}
var B, ht;
function gt() {
  return (gt = e(() => {
    (w(),
      I(),
      (B = _e()),
      (ht = r({
        invite: {
          id: `plugins.detail.shareDialog.teams.invite`,
          defaultMessage: `Add people or teams`,
          description: `Placeholder and accessible label for inviting people or teams to a plugin`,
        },
        noMatches: {
          id: `plugins.detail.shareDialog.teams.noMatches`,
          defaultMessage: `No matching people or teams`,
          description: `Empty search results in the plugin share dialog`,
        },
        noInvitees: {
          id: `plugins.detail.shareDialog.teams.noInvitees`,
          defaultMessage: `No people or teams invited yet`,
          description: `Empty access list in the plugin share dialog`,
        },
      })));
  }))();
}
function _t(e) {
  let t = (0, St.c)(29),
    { state: n, disabled: r, onClick: i } = e,
    a = O(),
    s;
  t[0] === n ? (s = t[1]) : ((s = { state: n, value: `auto`, shouldAnimate: !1 }), (t[0] = n), (t[1] = s));
  let [c, l] = (0, V.useState)(s),
    u;
  t[2] === n
    ? (u = t[3])
    : ((u = (e) => {
        let t = Math.ceil(e.contentRect.width);
        t <= 0 ||
          l((e) =>
            e.state === n && e.value === t
              ? e
              : { state: n, value: t, shouldAnimate: e.value !== `auto` && e.state !== n },
          );
      }),
      (t[2] = n),
      (t[3] = u));
  let d = o(u),
    f;
  t[4] === n
    ? (f = t[5])
    : ((f = (0, H.jsx)(be, {
        className: `max-w-full justify-center overflow-hidden`,
        color: `primary`,
        variant: `outline`,
        size: `xl`,
        children: (0, H.jsx)(vt, { state: n }),
      })),
      (t[4] = n),
      (t[5] = f));
  let p;
  t[6] !== d || t[7] !== f
    ? ((p = (0, H.jsx)(`div`, {
        ref: d,
        "aria-hidden": !0,
        className: `pointer-events-none invisible fixed top-0 left-0 min-w-max`,
        children: f,
      })),
      (t[6] = d),
      (t[7] = f),
      (t[8] = p))
    : (p = t[8]);
  let m = n === `progress` ? `justify-start` : `justify-center`,
    h;
  t[9] === m ? (h = t[10]) : ((h = S(`max-w-full overflow-hidden`, m)), (t[9] = m), (t[10] = h));
  let g;
  t[11] === c.value ? (g = t[12]) : ((g = { width: c.value }), (t[11] = c.value), (t[12] = g));
  let _;
  t[13] !== c.shouldAnimate || t[14] !== c.value || t[15] !== a
    ? ((_ = a || c.value === `auto` || !c.shouldAnimate ? { duration: 0 } : jt),
      (t[13] = c.shouldAnimate),
      (t[14] = c.value),
      (t[15] = a),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] === n ? (v = t[18]) : ((v = (0, H.jsx)(vt, { state: n })), (t[17] = n), (t[18] = v));
  let y;
  t[19] !== r || t[20] !== i || t[21] !== h || t[22] !== g || t[23] !== _ || t[24] !== v
    ? ((y = (0, H.jsx)(Ct, {
        className: h,
        animate: g,
        color: `primary`,
        variant: `outline`,
        initial: !1,
        size: `xl`,
        transition: _,
        disabled: r,
        onClick: i,
        type: `button`,
        children: v,
      })),
      (t[19] = r),
      (t[20] = i),
      (t[21] = h),
      (t[22] = g),
      (t[23] = _),
      (t[24] = v),
      (t[25] = y))
    : (y = t[25]);
  let ee;
  return (
    t[26] !== y || t[27] !== p
      ? ((ee = (0, H.jsxs)(H.Fragment, { children: [p, y] })), (t[26] = y), (t[27] = p), (t[28] = ee))
      : (ee = t[28]),
    ee
  );
}
function vt(e) {
  let t = (0, St.c)(7),
    { state: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r =
        n === `creating` || n === `progress`
          ? (0, H.jsx)(D, { className: `icon-xs` })
          : n === `copied`
            ? (0, H.jsx)(d, { asset: ye })
            : (0, H.jsx)(d, { asset: ee })),
      (t[0] = n),
      (t[1] = r));
  let i;
  t[2] === n
    ? (i = t[3])
    : ((i = (0, H.jsx)(`span`, {
        className: `inline-block`,
        children:
          n === `copied`
            ? (0, H.jsx)(c, {
                id: `plugins.detail.shareDialog.copied`,
                defaultMessage: `Copied`,
                description: `Button label after copying a plugin share link`,
              })
            : n === `progress`
              ? (0, H.jsx)(yt, {})
              : (0, H.jsx)(c, {
                  id: `plugins.detail.shareDialog.copyLink`,
                  defaultMessage: `Copy link`,
                  description: `Button label for copying a plugin share link`,
                }),
      })),
      (t[2] = n),
      (t[3] = i));
  let a;
  return (
    t[4] !== r || t[5] !== i
      ? ((a = (0, H.jsxs)(H.Fragment, { children: [r, i] })), (t[4] = r), (t[5] = i), (t[6] = a))
      : (a = t[6]),
    a
  );
}
function yt() {
  let e = (0, St.c)(5);
  if (O()) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, H.jsx)(c, { ...Mt[0] })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let t;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, H.jsx)(`span`, { className: `sr-only`, children: (0, H.jsx)(c, { ...Mt[0] }) })), (e[1] = t))
    : (t = e[1]);
  let n;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = Mt.map(xt)), (e[2] = n)) : (n = e[2]);
  let r;
  e[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = { y: At }), (e[3] = r)) : (r = e[3]);
  let i;
  return (
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, H.jsxs)(H.Fragment, {
          children: [
            t,
            (0, H.jsxs)(`span`, {
              "aria-hidden": !0,
              className: `inline-grid h-[18px] overflow-hidden leading-[18px]`,
              children: [
                n,
                (0, H.jsx)(re.span, {
                  animate: r,
                  className: `col-start-1 row-start-1 flex flex-col`,
                  initial: { y: Tt },
                  transition: { duration: Ot, ease: `easeInOut`, times: kt },
                  children: Mt.map(bt),
                }),
              ],
            }),
          ],
        })),
        (e[4] = i))
      : (i = e[4]),
    i
  );
}
function bt(e) {
  return (0, H.jsx)(
    `span`,
    { className: `h-[18px] whitespace-nowrap`, children: (0, H.jsx)(c, { ...e }) },
    e.id,
  );
}
function xt(e) {
  return (0, H.jsx)(
    `span`,
    { className: `invisible col-start-1 row-start-1 whitespace-nowrap`, children: (0, H.jsx)(c, { ...e }) },
    `${e.id}-measure`,
  );
}
var St, V, H, Ct, U, W, wt, Tt, Et, Dt, Ot, kt, At, jt, G, Mt;
function Nt() {
  return (Nt = e(() => {
    ((St = he()),
      u(),
      ie(),
      _(),
      x(),
      ce(),
      E(),
      (V = xe()),
      w(),
      p(),
      C(),
      f(),
      (H = _e()),
      (Ct = re.create(be)),
      (U = 2.4),
      (W = 0.35),
      (wt = 0.32),
      (Tt = 18),
      (Et = 0.51),
      (Dt = [
        [0, 1],
        ...Array.from({ length: 4 }, (e, t) => {
          let n = Et + U * t;
          return [
            [n, 1 - t],
            [n + wt, -t],
          ];
        }).flat(),
      ]),
      (Ot = Dt.at(-1)?.[0] ?? 0),
      (kt = Dt.map(([e]) => e / Ot)),
      (At = Dt.map(([, e]) => e * Tt)),
      (jt = { type: `spring`, duration: W, bounce: 0.02 }),
      (G = r({
        preparingPlugin: {
          id: `plugins.detail.shareDialog.preparingPlugin`,
          defaultMessage: `Preparing your plugin`,
          description: `First animated status label while a plugin share link is being created`,
        },
        uploadingPlugin: {
          id: `plugins.detail.shareDialog.uploadingPlugin`,
          defaultMessage: `Uploading`,
          description: `Second animated status label while a plugin share link is being created`,
        },
        generatingPluginLink: {
          id: `plugins.detail.shareDialog.generatingPluginLink`,
          defaultMessage: `Generating a link`,
          description: `Third animated status label while a plugin share link is being created`,
        },
        finalizingPluginDetails: {
          id: `plugins.detail.shareDialog.finalizingPluginDetails`,
          defaultMessage: `Finalizing details`,
          description: `Fourth animated status label while a plugin share link is being created`,
        },
      })),
      (Mt = [G.preparingPlugin, G.uploadingPlugin, G.generatingPluginLink, G.finalizingPluginDetails]));
  }))();
}
function Pt(e) {
  let t = (0, Ft.c)(16),
    { getSiteProjectId: n, onClose: r } = e,
    a = l(i),
    o = Je(),
    s,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, K.jsx)(c, {
        id: `plugins.detail.siteShareDialog.title`,
        defaultMessage: `Give recipients access to the Site`,
        description: `Title of the reminder after sharing a plugin hosted on a Site`,
      })),
      (u = (0, K.jsx)(c, {
        id: `plugins.detail.siteShareDialog.description`,
        defaultMessage: `People also need access to the Site to use its tools`,
        description: `Explains that sharing a Site's plugin does not grant access to the Site itself`,
      })),
      (t[0] = s),
      (t[1] = u))
    : ((s = t[0]), (u = t[1]));
  let d;
  t[2] !== n || t[3] !== o || t[4] !== r || t[5] !== a
    ? ((d = () => {
        let e = n();
        e != null &&
          P(a, e, {
            onBeforeOpen: r,
            shouldOpen: () => o() && n() === e,
            source: te.CODEX_SITES_SHARING_SOURCE_PLUGIN_SHARING,
          });
      }),
      (t[2] = n),
      (t[3] = o),
      (t[4] = r),
      (t[5] = a),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, K.jsx)(c, {
        id: `plugins.detail.siteShareDialog.notNow`,
        defaultMessage: `Not now`,
        description: `Dismisses the reminder to share the Site after sharing its plugin`,
      })),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] === r
    ? (p = t[9])
    : ((p = (0, K.jsx)(be, { size: `xl`, color: `secondary`, variant: `outline`, onClick: r, children: f })),
      (t[8] = r),
      (t[9] = p));
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, K.jsx)(be, {
        size: `xl`,
        color: `primary`,
        type: `submit`,
        children: (0, K.jsx)(c, {
          id: `plugins.detail.siteShareDialog.shareSite`,
          defaultMessage: `Share Site`,
          description: `Opens Site sharing so the creator can give plugin recipients access`,
        }),
      })),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === p ? (h = t[12]) : ((h = (0, K.jsxs)(K.Fragment, { children: [p, m] })), (t[11] = p), (t[12] = h));
  let g;
  return (
    t[13] !== d || t[14] !== h
      ? ((g = (0, K.jsx)(we, {
          variant: `compact`,
          title: s,
          subtitle: u,
          onSubmit: d,
          footer: h,
          children: null,
        })),
        (t[13] = d),
        (t[14] = h),
        (t[15] = g))
      : (g = t[15]),
    g
  );
}
var Ft, K;
function It() {
  return (It = e(() => {
    ((Ft = he()), h(), u(), m(), w(), Ze(), ge(), A(), Ge(), (K = _e()));
  }))();
}
function Lt(e) {
  let t = (0, Z.c)(5),
    n;
  t[0] === e ? (n = t[1]) : ((n = (0, $.jsx)(q, { ...e })), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] !== e.onClose || t[3] !== n
      ? ((r = (0, $.jsx)(He, { onClose: e.onClose, children: n })),
        (t[2] = e.onClose),
        (t[3] = n),
        (t[4] = r))
      : (r = t[4]),
    r
  );
}
function q(e) {
  let t = (0, Z.c)(101),
    {
      canShareToWorkspace: r,
      enforceAccessPermissions: a,
      getSiteProjectId: o,
      siteSharingReady: s,
      initialCanPublishToWorkspace: u,
      initialDiscoverability: d,
      initialSharePrincipals: f,
      onClose: p,
      onCopyLink: m,
      onSaveShareTargets: h,
      onUpdateSharedVersion: g,
      pluginDisplayName: _,
      shouldShowCopyLinkCreationProgress: ee,
      shouldShowUpdateSharedVersion: te,
      sourceGizmoId: b,
    } = e,
    x = r === void 0 || r,
    re = a !== void 0 && a,
    ie = d === void 0 ? `PRIVATE` : d,
    ae = f === void 0 ? [] : f,
    oe = te !== void 0 && te,
    se = l(i),
    S = v(),
    ce = Je(),
    { accountId: C, userId: w } = qe(),
    { data: T } = ke(),
    E = C != null && T?.id === C && T.structure === `workspace`,
    [ue, de] = (0, Q.useState)(u),
    D = E && b != null && (x === !1 || ue === !1),
    fe;
  t[0] === E ? (fe = t[1]) : ((fe = { enabled: E }), (t[0] = E), (t[1] = fe));
  let { data: O, isError: me, isFetching: he } = Se(Fe, C ?? ``, fe),
    ge;
  t[2] !== T || t[3] !== E || t[4] !== O?.permissions
    ? ((ge =
        E &&
        ((T.account_user_role === `account-owner` && O?.permissions != null) ||
          O?.permissions?.includes(cn) === !0)),
      (t[2] = T),
      (t[3] = E),
      (t[4] = O?.permissions),
      (t[5] = ge))
    : (ge = t[5]);
  let _e = ge,
    ve;
  t[6] === T?.name ? (ve = t[7]) : ((ve = T?.name?.trim() || null), (t[6] = T?.name), (t[7] = ve));
  let ye = ve,
    be = We(`2248542797`),
    { client: xe, isLoading: Ce } = Ve(),
    k = Se(je, `2826703856`),
    De;
  t[8] === k ? (De = t[9]) : ((De = k?.get(`enable_gpt_fe_controls`, !1)), (t[8] = k), (t[9] = De));
  let Oe = De,
    A;
  t[10] !== C || t[11] !== k || t[12] !== xe || t[13] !== Ce
    ? ((A = !Ce && k != null && xe.getContext().user.customIDs?.account_id === C),
      (t[10] = C),
      (t[11] = k),
      (t[12] = xe),
      (t[13] = Ce),
      (t[14] = A))
    : (A = t[14]);
  let Me = A,
    [Pe, Ie] = (0, Q.useState)(!1),
    [Le, Re] = (0, Q.useState)(!1),
    [Be, He] = (0, Q.useState)(!1),
    [Ue, Ge] = (0, Q.useState)(!1),
    [Ke, j] = (0, Q.useState)(`idle`),
    M = (0, Q.useRef)(null),
    N = (0, Q.useRef)(null),
    [P, Ze] = (0, Q.useState)(``),
    [et, tt] = (0, Q.useState)(null),
    rt;
  t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((rt = []), (t[15] = rt)) : (rt = t[15]);
  let [F, at] = (0, Q.useState)(rt),
    ot = Wt(ae, ie),
    [I, st] = (0, Q.useState)(ot),
    [L, ct] = (0, Q.useState)(ot),
    ut = ue ?? _e,
    R;
  t[16] !== C || t[17] !== b || t[18] !== w
    ? ((R = [`chatgpt-gizmos`, `plugin-share-source`, C, w, b]),
      (t[16] = C),
      (t[17] = b),
      (t[18] = w),
      (t[19] = R))
    : (R = t[19]);
  let z;
  t[20] !== C || t[21] !== se || t[22] !== b
    ? ((z = async (e) => {
        let { signal: t } = e;
        if (C == null || b == null) throw Error(`Migrated plugin sharing requires a source GPT and account`);
        return (
          await se.query.cancel(Fe, C),
          t.throwIfAborted(),
          await Te(C),
          t.throwIfAborted(),
          await se.get(Fe, C).refetch({ throwOnError: !0 }),
          t.throwIfAborted(),
          Ne.safeGet(`/gizmos/{gizmo_id_or_short_url}`, {
            parameters: { path: { gizmo_id_or_short_url: b } },
            additionalHeaders: { "ChatGPT-Account-ID": C },
            expectedErrorStatuses: [401, 403, 404],
            signal: t,
          })
        );
      }),
      (t[20] = C),
      (t[21] = se),
      (t[22] = b),
      (t[23] = z))
    : (z = t[23]);
  let dt;
  t[24] !== D || t[25] !== R || t[26] !== z
    ? ((dt = {
        queryKey: R,
        queryFn: z,
        enabled: D,
        retry: !1,
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
      }),
      (t[24] = D),
      (t[25] = R),
      (t[26] = z),
      (t[27] = dt))
    : (dt = t[27]);
  let { data: ft, isError: pt, isFetching: B } = ne(dt),
    gt;
  t[28] === O?.share_settings
    ? (gt = t[29])
    : ((gt = ln.safeParse(O?.share_settings).data?.gpt_share_setting),
      (t[28] = O?.share_settings),
      (t[29] = gt));
  let vt = gt,
    yt;
  t[30] !== C ||
  t[31] !== T?.account_user_id ||
  t[32] !== Oe ||
  t[33] !== B ||
  t[34] !== he ||
  t[35] !== D ||
  t[36] !== ft ||
  t[37] !== pt ||
  t[38] !== vt ||
  t[39] !== Me ||
  t[40] !== O?.permissions ||
  t[41] !== me
    ? ((yt =
        D &&
        !pt &&
        !B &&
        ft?.gizmo.current_user_permission?.can_read === !0 &&
        ft.gizmo.workspace_id === C &&
        ft.gizmo.author.user_id === T?.account_user_id &&
        !me &&
        !he &&
        Me &&
        (vt === `anyone` || vt === `workspace_only`) &&
        (!Oe || O?.permissions?.includes(`chatgpt.workspace.gpt.share_workspace`) === !0)),
      (t[30] = C),
      (t[31] = T?.account_user_id),
      (t[32] = Oe),
      (t[33] = B),
      (t[34] = he),
      (t[35] = D),
      (t[36] = ft),
      (t[37] = pt),
      (t[38] = vt),
      (t[39] = Me),
      (t[40] = O?.permissions),
      (t[41] = me),
      (t[42] = yt))
    : (yt = t[42]);
  let bt = yt,
    xt = (I === `workspace` && !x) || (I === `workspaceListed` && !ut),
    St = Qt(ae),
    [V, H] = (0, Q.useState)(() => Gt(ae)),
    Ct = Se($e, C ?? ``),
    U = E && Ct,
    W = E && Ee(T.plan_type) && x === !0,
    { data: wt, isError: Tt, isLoading: Et } = Se(Qe, C ?? ``, { enabled: U }) ?? {},
    { data: Dt, isError: Ot, isPending: kt } = Ye(P),
    At;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((At = { includeMemberCounts: !0 }), (t[43] = At))
    : (At = t[43]);
  let { data: jt, isError: G, isPending: Mt } = Xe(W ? P : ``, At),
    Nt = it({
      currentAccountUserId: T?.account_user_id,
      existingAccountUserIds: V.flatMap(Ut),
      selectedAccountUserIds: F.flatMap(Ht),
      workspaceUsers: Dt,
    }),
    Ft = V.flatMap(Vt),
    K = F.flatMap(Bt),
    It = U ? mt({ teams: Tt ? void 0 : wt, query: P, existingGroupIds: Ft, selectedGroupIds: K }) : void 0,
    Lt;
  t[44] === P ? (Lt = t[45]) : ((Lt = P.trim()), (t[44] = P), (t[45] = Lt));
  let q = Lt.length > 0,
    Kt = new Set([...Ft, ...K, ...(It?.options.map(zt) ?? [])]),
    en =
      q && W && !G
        ? (0, an.default)(jt ?? [], `id`)
            .filter((e) => !Kt.has(e.id))
            .map((e) => Jt(e, S))
        : [],
    nn =
      ((q && (kt || (W && Mt))) || (U && Et)) &&
      (!q || (Nt?.length ?? 0) === 0) &&
      en.length === 0 &&
      (It?.options.length ?? 0) === 0
        ? void 0
        : [
            ...(It ? [It] : []),
            {
              id: `groups`,
              label: (0, $.jsx)(c, {
                id: `plugins.detail.shareDialog.groups`,
                defaultMessage: `Groups`,
                description: `Section heading for group invite results in the plugin share dialog`,
              }),
              options: en,
            },
            {
              id: `people`,
              label: (0, $.jsx)(c, {
                id: `plugins.detail.shareDialog.people`,
                defaultMessage: `People`,
                description: `Section heading for people invite results in the plugin share dialog`,
              }),
              options: q ? (Nt?.map(qt) ?? []) : [],
            },
          ],
    J = L !== I,
    Y = F.length > 0,
    X = Ke === `creating` || Ke === `progress` || Pe || Be,
    rn = oe && !Ue && g != null && !Y && !J,
    un,
    dn;
  (t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((un = () => () => {
        (M.current != null && clearTimeout(M.current), N.current != null && clearTimeout(N.current));
      }),
      (dn = []),
      (t[46] = un),
      (t[47] = dn))
    : ((un = t[46]), (dn = t[47])),
    (0, Q.useEffect)(un, dn));
  let fn = async (e, t) => {
      if (X || (re && t !== I && (xt || (t === `workspace` && !x) || (t === `workspaceListed` && !ut))))
        return !1;
      let n =
        t === `workspace`
          ? (St ?? (C == null ? null : { principal_type: `workspace`, principal_id: C, role: `reader` }))
          : null;
      return t === `workspace` && n == null
        ? !1
        : (Ie(!0),
          (async () => {
            try {
              let r = Zt(e, n),
                i = t === `workspaceListed` ? `LISTED` : null,
                { canPublishToWorkspace: a, principals: o } = i == null ? await h(r) : await h(r, i);
              a != null && de(a);
              let s = Wt(o, i);
              return (H(Gt(o)), st(s), ct((e) => (e === I ? s : e)), j(`idle`), !0);
            } catch {
              return (Re(!1), !1);
            }
          })().finally(() => {
            Ie(!1);
          }));
    },
    pn = (e) => {
      x && fn(e, I);
    },
    mn;
  t[48] !== o || t[49] !== ce || t[50] !== s
    ? ((mn = () => {
        let e = o?.() != null;
        return (
          Re(e),
          e ||
            s?.then(() => {
              ce() && Re(o?.() != null);
            }),
          e
        );
      }),
      (t[48] = o),
      (t[49] = ce),
      (t[50] = s),
      (t[51] = mn))
    : (mn = t[51]);
  let hn = mn,
    gn = async () => {
      if (X) return;
      if (F.length > 0) {
        let e = [...V, ...F.map(Rt)];
        (await fn(e, L)) && (at([]), Ze(``), hn());
        return;
      }
      if (J) {
        (await fn(V, L)) && (I === `invited` || L === `workspaceListed`) && hn();
        return;
      }
      let e = ee?.() === !0,
        t = Ke === `copied`;
      (t && M.current != null && (clearTimeout(M.current), (M.current = null)),
        e &&
          (j(`creating`),
          (N.current = setTimeout(() => {
            (j(`progress`), (N.current = null));
          }, sn))));
      let { canPublishToWorkspace: n, didCopy: r } = await m();
      if ((n != null && de(n), N.current != null && (clearTimeout(N.current), (N.current = null)), r)) {
        if (hn()) return;
        (j(`copied`),
          M.current != null && clearTimeout(M.current),
          (M.current = setTimeout(() => {
            j(`idle`);
          }, on)));
        return;
      }
      if (e) {
        j(`idle`);
        return;
      }
      t &&
        (M.current = setTimeout(() => {
          j(`idle`);
        }, on));
    },
    _n;
  t[52] !== X || t[53] !== g
    ? ((_n = async () => {
        g == null ||
          X ||
          (He(!0),
          await (async () => {
            try {
              (await g(), Ge(!0));
            } catch {
              return;
            }
          })().finally(() => {
            He(!1);
          }));
      }),
      (t[52] = X),
      (t[53] = g),
      (t[54] = _n))
    : (_n = t[54]);
  let vn = _n,
    yn;
  t[55] === _
    ? (yn = t[56])
    : ((yn = (0, $.jsx)(c, {
        id: `plugins.detail.shareDialog.title`,
        defaultMessage: `Share {name}`,
        description: `Title for the plugin sharing dialog`,
        values: { name: _ },
      })),
      (t[55] = _),
      (t[56] = yn));
  let bn = yn,
    xn;
  t[57] !== U || t[58] !== S
    ? ((xn = U
        ? S.formatMessage(ht.invite)
        : S.formatMessage({
            id: `plugins.detail.shareDialog.peopleSearch`,
            defaultMessage: `Add people`,
            description: `Placeholder and accessible label for searching workspace people in the plugin share dialog when team discovery is unavailable`,
          })),
      (t[57] = U),
      (t[58] = S),
      (t[59] = xn))
    : (xn = t[59]);
  let Sn = xn;
  if (Le && o != null && !X && !Y && !J && P === ``) {
    let e;
    return (
      t[60] !== o || t[61] !== p
        ? ((e = (0, $.jsx)(Pt, { getSiteProjectId: o, onClose: p })), (t[60] = o), (t[61] = p), (t[62] = e))
        : (e = t[62]),
      e
    );
  }
  let Cn =
      Y || J
        ? null
        : (0, $.jsx)(_t, {
            state: Ke,
            disabled: X,
            onClick: () => {
              gn();
            },
          }),
    wn;
  t[63] !== Y || t[64] !== I
    ? ((wn = () => {
        (Y ? (at([]), Ze(``)) : ct(I), j(`idle`));
      }),
      (t[63] = Y),
      (t[64] = I),
      (t[65] = wn))
    : (wn = t[65]);
  let Tn;
  t[66] !== Y || t[67] !== J || t[68] !== Pe || t[69] !== X || t[70] !== p || t[71] !== Cn || t[72] !== wn
    ? ((Tn = (0, $.jsx)(lt, {
        copyLink: Cn,
        disabled: X,
        hasPendingAccessChange: J,
        hasPendingInvitees: Y,
        isSaving: Pe,
        isBusy: X,
        onCancel: wn,
        onClose: p,
      })),
      (t[66] = Y),
      (t[67] = J),
      (t[68] = Pe),
      (t[69] = X),
      (t[70] = p),
      (t[71] = Cn),
      (t[72] = wn),
      (t[73] = Tn))
    : (Tn = t[73]);
  let En;
  t[74] === x
    ? (En = t[75])
    : ((En =
        x === !1
          ? (0, $.jsx)(c, {
              id: `plugins.detail.shareDialog.invitingUnavailableTooltip`,
              defaultMessage: `Plugin sharing isn't enabled for your role or workspace`,
              description: `Neutral tooltip on the disabled Add people or teams field in the Share Plugin modal. Explains to a workspace user that inviting people or teams to this plugin is unavailable for their role or workspace. Shown on hover or keyboard focus only after sharing permission is confirmed denied, not while permissions load. Publishing to the workspace directory is a separate permission and may still be available.`,
            })
          : null),
      (t[74] = x),
      (t[75] = En));
  let Dn;
  if (t[76] !== S || t[77] !== F) {
    let e;
    (t[79] === S ? (e = t[80]) : ((e = (e) => Yt(e, S)), (t[79] = S), (t[80] = e)),
      (Dn = F.map(e)),
      (t[76] = S),
      (t[77] = F),
      (t[78] = Dn));
  } else Dn = t[78];
  let On, kn;
  t[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((On = (e) => {
        at((t) => t.filter((t) => Xt(t) !== Xt(e.target)));
      }),
      (kn = (e) => {
        at((t) => [...t, e.target]);
      }),
      (t[81] = On),
      (t[82] = kn))
    : ((On = t[81]), (kn = t[82]));
  let An;
  t[83] === S
    ? (An = t[84])
    : ((An = (e) =>
        S.formatMessage(
          {
            id: `plugins.detail.shareDialog.removeSelectedUser`,
            defaultMessage: `Remove {name}`,
            description: `Accessible label for removing a selected workspace share target from the plugin share dialog`,
          },
          { name: e.chipLabel ?? e.label },
        )),
      (t[83] = S),
      (t[84] = An));
  let jn;
  t[85] !== rn || t[86] !== vn || t[87] !== Be
    ? ((jn = rn
        ? (0, $.jsx)(le, {
            children: (0, $.jsx)(y, {
              content: (0, $.jsx)(c, {
                id: `plugins.detail.shareDialog.sharedVersionOutOfDate`,
                defaultMessage: `Shared version is out of date`,
                description: `Status text shown in the plugin share dialog when the local plugin version is newer than the shared version`,
              }),
              customCtas: (0, $.jsx)(n, {
                color: `secondary`,
                loading: Be,
                onClick: () => {
                  vn();
                },
                children: (0, $.jsx)(c, {
                  id: `plugins.detail.shareDialog.updateSharedVersion`,
                  defaultMessage: `Update`,
                  description: `Button label for uploading a newer local plugin version to an existing plugin share`,
                }),
              }),
              stackOnNarrow: !0,
            }),
          })
        : null),
      (t[85] = rn),
      (t[86] = vn),
      (t[87] = Be),
      (t[88] = jn))
    : (jn = t[88]);
  let Mn = re && (X || xt),
    Nn = bt && x === !1,
    Pn = bt && ue === !1,
    Fn;
  t[89] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fn = (e) => {
        ct(e);
      }),
      (t[89] = Fn))
    : (Fn = t[89]);
  let In;
  t[90] !== ut || t[91] !== x || t[92] !== L || t[93] !== Mn || t[94] !== Nn || t[95] !== Pn || t[96] !== ye
    ? ((In = (0, $.jsx)(Ae, {
        kind: `link`,
        children: (0, $.jsx)($t, {
          canPublishToWorkspace: ut,
          canShareToWorkspace: x,
          disabled: Mn,
          shareAccess: L,
          showUnavailableSharing: Nn,
          showUnavailablePublishing: Pn,
          workspaceName: ye,
          onShareAccessChange: Fn,
        }),
      })),
      (t[90] = ut),
      (t[91] = x),
      (t[92] = L),
      (t[93] = Mn),
      (t[94] = Nn),
      (t[95] = Pn),
      (t[96] = ye),
      (t[97] = In))
    : (In = t[97]);
  let Ln = Ae,
    Rn =
      V.length === 0
        ? (0, $.jsx)(`div`, {
            className: `text-sm text-codex-description`,
            children: (0, $.jsx)(c, {
              id: `plugins.detail.shareDialog.noInvitedShareTargets`,
              defaultMessage: `No people or teams invited yet`,
              description: `Empty state shown when no people or teams have been invited to a plugin yet`,
            }),
          })
        : (0, $.jsx)(nt, {
            entries: V.map((e) => ({
              id: `${e.type}:${e.id}`,
              label: e.name,
              isTeam: e.type === `group`,
              isOwner: e.role === `owner`,
              row: (0, $.jsx)(tn, {
                disabled: X || !x,
                isEditorRoleEnabled: be,
                isTeam: e.type === `group` && wt?.some((t) => t.id === e.id) === !0,
                principal: e,
                onRoleChange: (t) => {
                  pn(V.map((n) => (n.type === e.type && n.id === e.id ? { ...n, role: t } : n)));
                },
                onRemoveAccess: () => {
                  pn(V.filter((t) => t.type !== e.type || t.id !== e.id));
                },
              }),
            })),
          }),
    zn;
  return (
    t[98] !== Ln || t[99] !== Rn
      ? ((zn = (0, $.jsx)(Ln, { children: Rn })), (t[98] = Ln), (t[99] = Rn), (t[100] = zn))
      : (zn = t[100]),
    (0, $.jsxs)(we, {
      title: bn,
      onPortalContainerChange: tt,
      onSubmit: () => {
        gn();
      },
      footer: Tn,
      children: [
        (0, $.jsx)(le, {
          children: (0, $.jsx)(pe, {
            tooltipContent: En,
            children: (0, $.jsx)(`div`, {
              "aria-disabled": x === !1 || void 0,
              "aria-label": x === !1 ? Sn : void 0,
              role: x === !1 ? `button` : void 0,
              tabIndex: x === !1 ? 0 : void 0,
              children: (0, $.jsx)(ze, {
                searchStatus: {
                  peopleError: q && Ot,
                  groupsError: q && W && G,
                  teamsError: U && Tt,
                  teamsLoading: U && Et,
                },
                ariaLabel: Sn,
                disabled: X || !x,
                emptyMessage:
                  !q || Ot || (W && G) || (U && Tt)
                    ? null
                    : (0, $.jsx)(c, {
                        id: `plugins.detail.shareDialog.noWorkspaceShareTargets`,
                        defaultMessage: `No matching people or teams`,
                        description: `Empty state shown when no workspace users or teams match the plugin share dialog autocomplete query`,
                      }),
                optionSections: nn,
                placeholder: Sn,
                portalContainer: et,
                query: P,
                showSuggestionsOnFocus: U,
                selectedOptions: Dn,
                onQueryChange: Ze,
                onRemoveOption: On,
                onSelectOption: kn,
                getRemoveLabel: An,
              }),
            }),
          }),
        }),
        jn,
        In,
        zn,
      ],
    })
  );
}
function Rt(e) {
  return Kt(e, `reader`);
}
function zt(e) {
  return e.target.group.id;
}
function Bt(e) {
  return e.kind === `group` ? [e.group.id] : [];
}
function Vt(e) {
  return e.type === `group` ? [e.id] : [];
}
function Ht(e) {
  return e.kind === `user` ? [e.user.account_user_id] : [];
}
function Ut(e) {
  return e.type === `user` ? [e.id] : [];
}
function Wt(e, t) {
  return t === `LISTED`
    ? `workspaceListed`
    : e.some((e) => e.principal_type === `workspace`)
      ? `workspace`
      : `invited`;
}
function Gt(e) {
  let t = e.flatMap((e) =>
    e.principal_type === `workspace`
      ? []
      : [{ email: null, id: e.principal_id, name: e.name, role: e.role ?? `reader`, type: e.principal_type }],
  );
  return [...t.filter((e) => e.role === `owner`), ...t.filter((e) => e.role !== `owner`)];
}
function Kt(e, t) {
  switch (e.kind) {
    case `group`:
      return { email: null, id: e.group.id, name: e.group.name, role: t, type: `group` };
    case `user`:
      return {
        email: e.user.email ?? null,
        id: e.user.account_user_id,
        name: F(e.user),
        role: t,
        type: `user`,
      };
  }
}
function qt(e) {
  return { ...rt(e), target: { kind: `user`, user: e } };
}
function Jt(e, t) {
  return {
    chipLabel: e.name,
    Icon: M,
    id: `group:${e.id}`,
    label: e.name,
    secondaryLabel: L(t, e.num_members),
    target: { kind: `group`, group: e },
  };
}
function Yt(e, t) {
  switch (e.kind) {
    case `group`:
      return Jt(e.group, t);
    case `user`:
      return qt(e.user);
  }
}
function Xt(e) {
  switch (e.kind) {
    case `group`:
      return `group:${e.group.id}`;
    case `user`:
      return `user:${e.user.account_user_id}`;
  }
}
function Zt(e, t) {
  return [
    ...e.flatMap((e) =>
      e.role === `owner` ? [] : [{ principal_type: e.type, principal_id: e.id, role: e.role }],
    ),
    ...(t == null ? [] : [t]),
  ];
}
function Qt(e) {
  let t = e.find((e) => e.principal_type === `workspace`);
  return t == null
    ? null
    : {
        principal_type: t.principal_type,
        principal_id: t.principal_id,
        role: t.role === `editor` ? `editor` : `reader`,
      };
}
function $t(e) {
  let t = (0, Z.c)(17),
    {
      canPublishToWorkspace: n,
      canShareToWorkspace: r,
      disabled: i,
      shareAccess: a,
      showUnavailableSharing: o,
      showUnavailablePublishing: s,
      workspaceName: l,
      onShareAccessChange: u,
    } = e,
    d,
    f,
    p;
  if (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== s || t[4] !== o) {
    let e = [`invited`];
    ((r || o) && e.push(`workspace`),
      (n || s) && e.push(`workspaceListed`),
      (d = dt),
      (f = i),
      (p = e.map((e) => {
        let t;
        return (
          e === `workspace` && o
            ? (t = (0, $.jsx)(c, {
                id: `plugins.detail.shareDialog.migrationSharingUnavailableTooltip`,
                defaultMessage: `Plugin sharing isn't enabled for your role or workspace`,
                description: `Neutral tooltip on the disabled workspace-link choice in the Share Plugin modal after GPT migration. Shown to the source GPT's creator only when their confirmed workspace policy allows GPT sharing but plugin sharing is denied. Sharing by link is not directory listing. Hidden when permission data is unavailable.`,
              }))
            : e === `workspaceListed` &&
              s &&
              (t = (0, $.jsx)(c, {
                id: `plugins.detail.shareDialog.migrationPublishingUnavailableTooltip`,
                defaultMessage: `Publishing plugins to the workspace directory isn't enabled for your role or workspace`,
                description: `Neutral tooltip on the disabled workspace-directory choice in the Share Plugin modal after GPT migration. Shown to the source GPT's creator only when their confirmed workspace policy allows listing GPTs but plugin publishing is denied. Directory listing is within the workspace, not public sharing. Hidden when permission data is unavailable.`,
              })),
          {
            disabled: (e === `workspace` && !r) || (e === `workspaceListed` && !n),
            icon: rn(e),
            value: e,
            tooltipText: t,
          }
        );
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = s),
      (t[4] = o),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p));
  } else ((d = t[5]), (f = t[6]), (p = t[7]));
  let m;
  t[8] === l
    ? (m = t[9])
    : ((m = (e) => (0, $.jsx)(en, { shareAccess: e, workspaceName: l })), (t[8] = l), (t[9] = m));
  let h;
  return (
    t[10] !== d || t[11] !== u || t[12] !== a || t[13] !== f || t[14] !== p || t[15] !== m
      ? ((h = (0, $.jsx)(d, { disabled: f, options: p, value: a, renderLabel: m, onChange: u })),
        (t[10] = d),
        (t[11] = u),
        (t[12] = a),
        (t[13] = f),
        (t[14] = p),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
function en(e) {
  let t = (0, Z.c)(5),
    { shareAccess: n, workspaceName: r } = e;
  switch (n) {
    case `invited`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `plugins.detail.shareDialog.access.invited`,
              defaultMessage: `Only those invited`,
              description: `Private access option for a shared plugin`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `workspace`: {
      let e;
      return (
        t[1] === r
          ? (e = t[2])
          : ((e =
              r == null
                ? (0, $.jsx)(c, {
                    id: `plugins.detail.shareDialog.access.workspace`,
                    defaultMessage: `Anyone in this workspace with the link`,
                    description: `Workspace-wide access option for a shared plugin when the current workspace name is unavailable`,
                  })
                : (0, $.jsx)(c, {
                    id: `plugins.detail.shareDialog.access.workspaceNamed`,
                    defaultMessage: `Anyone in {workspaceName} with the link`,
                    description: `Workspace-wide access option for a shared plugin in the named workspace`,
                    values: { workspaceName: r },
                  })),
            (t[1] = r),
            (t[2] = e)),
        e
      );
    }
    case `workspaceListed`: {
      let e;
      return (
        t[3] === r
          ? (e = t[4])
          : ((e =
              r == null
                ? (0, $.jsx)(c, {
                    id: `plugins.detail.shareDialog.access.workspaceListedFallback`,
                    defaultMessage: `Visible in workspace directory`,
                    description: `Option to make a shared plugin discoverable in the current workspace directory when its name is unavailable`,
                  })
                : (0, $.jsx)(c, {
                    id: `plugins.detail.shareDialog.access.workspaceListed`,
                    defaultMessage: `Visible in {workspaceName} directory`,
                    description: `Option to make a shared plugin discoverable in the named workspace directory; {workspaceName} is the workspace name`,
                    values: { workspaceName: r },
                  })),
            (t[3] = r),
            (t[4] = e)),
        e
      );
    }
  }
}
function tn(e) {
  let t = (0, Z.c)(20),
    { disabled: n, isEditorRoleEnabled: r, isTeam: i, principal: a, onRoleChange: o, onRemoveAccess: s } = e,
    c;
  if (i) {
    let e;
    (t[0] !== n || t[1] !== s
      ? ((e = (0, $.jsx)(ft, { disabled: n, onRemoveAccess: s })), (t[0] = n), (t[1] = s), (t[2] = e))
      : (e = t[2]),
      (c = e));
  } else if (a.role === `owner`) {
    let e;
    (t[3] === a.role ? (e = t[4]) : ((e = (0, $.jsx)(X, { role: a.role })), (t[3] = a.role), (t[4] = e)),
      (c = e));
  } else {
    let e;
    (t[5] !== n || t[6] !== r || t[7] !== s || t[8] !== o || t[9] !== a.role
      ? ((e = (0, $.jsx)(nn, {
          disabled: n,
          isEditorRoleEnabled: r,
          role: a.role,
          onRoleChange: o,
          onRemoveAccess: s,
        })),
        (t[5] = n),
        (t[6] = r),
        (t[7] = s),
        (t[8] = o),
        (t[9] = a.role),
        (t[10] = e))
      : (e = t[10]),
      (c = e));
  }
  let l;
  t[11] !== a.id || t[12] !== a.type
    ? ((l = a.type === `group` ? (0, $.jsx)(st, { groupId: a.id }) : void 0),
      (t[11] = a.id),
      (t[12] = a.type),
      (t[13] = l))
    : (l = t[13]);
  let u = a.type === `user` ? a.id : void 0,
    d;
  return (
    t[14] !== c || t[15] !== a.email || t[16] !== a.name || t[17] !== l || t[18] !== u
      ? ((d = (0, $.jsx)(De, {
          avatar: l,
          label: a.name,
          colorKey: u,
          secondaryLabel: a.email,
          trailingContent: c,
        })),
        (t[14] = c),
        (t[15] = a.email),
        (t[16] = a.name),
        (t[17] = l),
        (t[18] = u),
        (t[19] = d))
      : (d = t[19]),
    d
  );
}
function nn(e) {
  let t = (0, Z.c)(9),
    { disabled: n, isEditorRoleEnabled: r, role: i, onRoleChange: a, onRemoveAccess: o } = e,
    s;
  t[0] === r ? (s = t[1]) : ((s = Y(r)), (t[0] = r), (t[1] = s));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(c, {
        id: `plugins.detail.shareDialog.permission.remove`,
        defaultMessage: `Remove access`,
        description: `Menu item for removing plugin access`,
      })),
      (t[2] = l))
    : (l = t[2]);
  let u;
  return (
    t[3] !== n || t[4] !== o || t[5] !== a || t[6] !== i || t[7] !== s
      ? ((u = (0, $.jsx)(R, {
          disabled: n,
          options: s,
          removeLabel: l,
          value: i,
          renderLabel: J,
          onChange: a,
          onRemoveAccess: o,
        })),
        (t[3] = n),
        (t[4] = o),
        (t[5] = a),
        (t[6] = i),
        (t[7] = s),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
function J(e) {
  return (0, $.jsx)(X, { role: e });
}
function Y(e) {
  return e ? [{ value: `reader` }, { value: `editor` }] : [{ value: `reader` }];
}
function X(e) {
  let t = (0, Z.c)(3),
    { role: n } = e;
  switch (n) {
    case `reader`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `plugins.detail.shareDialog.permission.viewer`,
              defaultMessage: `Can view`,
              description: `Viewer permission label in the plugin sharing dialog`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `editor`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `plugins.detail.shareDialog.permission.chat`,
              defaultMessage: `Can edit`,
              description: `Editor permission label in the plugin sharing dialog`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `owner`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `plugins.detail.shareDialog.permission.owner`,
              defaultMessage: `Owner`,
              description: `Owner permission label in the plugin sharing dialog`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function rn(e) {
  switch (e) {
    case `invited`:
      return (0, $.jsx)(de, {});
    case `workspace`:
      return (0, $.jsx)(ae, {});
    case `workspaceListed`:
      return (0, $.jsx)(ve, {});
  }
}
var Z, an, Q, $, on, sn, cn, ln;
function un() {
  return (un = e(() => {
    ((Z = he()),
      b(),
      (an = t(fe(), 1)),
      m(),
      (Q = xe()),
      w(),
      a(),
      et(),
      Me(),
      Re(),
      Be(),
      Le(),
      Oe(),
      s(),
      me(),
      se(),
      g(),
      oe(),
      j(),
      N(),
      ge(),
      z(),
      tt(),
      ot(),
      Ke(),
      ct(),
      ut(),
      A(),
      k(),
      Ue(),
      Ie(),
      Pe(),
      gt(),
      pt(),
      Ce(),
      Ge(),
      Nt(),
      It(),
      ($ = _e()),
      (on = 2e3),
      (sn = 1e3),
      (cn = `chatgpt.workspace_plugins.publish`),
      (ln = ue({ gpt_share_setting: T([`anyone`, `workspace_only`, `no_one`]) })));
  }))();
}
export { un as n, Lt as t };
//# sourceMappingURL=plugin-share-dialog-2f1f21a3f1fd.js.map
