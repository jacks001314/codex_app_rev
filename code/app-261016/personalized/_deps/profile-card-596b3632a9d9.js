import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bst as r,
  CCt as i,
  Eet as a,
  FBt as o,
  Jx as s,
  LNt as c,
  Mst as l,
  NO as u,
  PBt as d,
  PO as f,
  Qst as p,
  Rrt as m,
  TCt as h,
  X3 as g,
  XOt as _,
  Y3 as v,
  Yx as y,
  Z3 as b,
  ZSt as x,
  cwt as S,
  get as C,
  hSt as w,
  het as T,
  iCt as E,
  iwt as D,
  jst as O,
  lB as k,
  met as A,
  nB as j,
  nCt as M,
  okt as ee,
  rB as N,
  sct as P,
  tkt as te,
  uB as F,
  zst as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as I,
  Air as L,
  BRr as re,
  D5n as R,
  E5n as z,
  F7n as B,
  Gj as V,
  IIr as H,
  JTt as ie,
  L7n as U,
  LIr as W,
  M5n as G,
  MOr as K,
  Mir as q,
  PDn as J,
  QTt as ae,
  SRn as oe,
  Uj as Y,
  VTt as se,
  WTt as ce,
  YTt as le,
  ZEn as ue,
  ZTt as de,
  _Nr as fe,
  bRn as pe,
  gLr as me,
  gur as he,
  hNr as ge,
  hdn as _e,
  iDn as ve,
  iRr as ye,
  sRr as be,
  vLr as xe,
  wLr as Se,
  xMr as Ce,
  yMr as we,
  zOr as Te,
} from "./app-initial-ad16eaadf81f.js";
import { n as Ee, t as De } from "./profile-avatar-bc7371feb0c0.js";
import { n as Oe, r as ke } from "./use-workspace-users-2d1e66aa1ddc.js";
import { r as Ae, t as je } from "./state-d01a5a96b9cf.js";
import { n as Me, t as Ne } from "./avatar-b3af498c99de.js";
import { n as Pe, t as Fe } from "./tab-664b022c04a8.js";
function Ie(e, t, n) {
  return e && t != null && t !== n ? t : null;
}
function Le(e, t) {
  Ce(e, C, { context: t == null ? void 0 : { profileOwner: ze(t, e.get(xe)), viewedAccountUserId: t } });
}
function Re(e, t) {
  Ce(e, A, {
    action: T.CODEX_PROFILE_CARD_ACTION_TYPE_VIEW_PROFILE_CLICKED,
    context: { profileOwner: ze(t, e.get(xe)), viewedAccountUserId: t },
  });
}
function ze(e, t) {
  if (t != null) return e === t ? a.CODEX_PROFILE_OWNER_SELF : a.CODEX_PROFILE_OWNER_OTHER;
}
function Be() {
  return (Be = e(() => {
    (m(), Se(), we());
  }))();
}
var X, Z, Ve, He;
function Ue() {
  return (Ue = e(() => {
    (x(),
      Se(),
      W(),
      _e(),
      n(),
      ge(),
      (X = `616940475`),
      (Z = i(p, ({ get: e }) => {
        if (!e(fe, { layer: X, parameter: `enabled` })) return !1;
        let t = e(me),
          n = e(he);
        if (t.status !== `loaded` || t.structure !== `workspace` || n == null) return !1;
        let { data: r } = e(H, n);
        return r?.member_profiles_enabled !== !1 && r?.member_profiles_sharing === `workspace`;
      })),
      (Ve = i(p, ({ get: e }) => e(fe, { layer: X, parameter: `show_usage_stats` }))),
      (He = i(p, ({ get: e }) => e(Z) && e(fe, { layer: X, parameter: `enabled_in_share_dialog` }))));
  }))();
}
function We(e) {
  let n = (0, Q.c)(37),
    {
      accountUserId: r,
      accountUserEmail: i,
      avatarUrl: a,
      children: o,
      fallbackTooltip: s,
      inShareDialog: c,
      label: l,
      labelEmail: u,
      onClick: d,
      onOpenProfile: f,
      openOnClick: m,
      triggerDescriptionId: h,
      triggerIsFocusable: g,
    } = e,
    _ = c !== void 0 && c,
    v = g !== void 0 && g,
    y = t(p),
    b = ee(),
    x = E(_ ? He : Z),
    [S, C] = (0, $e.useState)(!1);
  if (!x || (r == null && !i)) {
    let e;
    return (
      n[0] !== o || n[1] !== s
        ? ((e =
            s == null
              ? (0, $.jsx)($.Fragment, { children: o })
              : (0, $.jsx)(j, { tooltipContent: s, children: o })),
          (n[0] = o),
          (n[1] = s),
          (n[2] = e))
        : (e = n[2]),
      e
    );
  }
  let w;
  n[3] !== b || n[4] !== l
    ? ((w = b.formatMessage(
        {
          id: `pages.personHoverCard.profileCardLabel`,
          defaultMessage: `Profile for {name}`,
          description: `Accessible label for a workspace person's profile card`,
        },
        { name: l.replace(/^@/, ``) },
      )),
      (n[3] = b),
      (n[4] = l),
      (n[5] = w))
    : (w = n[5]);
  let T = w,
    D;
  n[6] !== b || n[7] !== l || n[8] !== u || n[9] !== T
    ? ((D =
        u == null || u === l
          ? T
          : b.formatMessage(
              {
                id: `pages.personHoverCard.profileCardLabelWithEmail`,
                defaultMessage: `Profile for {name}, {email}`,
                description: `Accessible label for a person's profile button, including their email to distinguish people with the same display name`,
              },
              { name: l.replace(/^@/, ``), email: u },
            )),
      (n[6] = b),
      (n[7] = l),
      (n[8] = u),
      (n[9] = T),
      (n[10] = D))
    : (D = n[10]);
  let O = D,
    k = null;
  if (r != null) {
    let e;
    (n[11] !== r || n[12] !== a || n[13] !== l || n[14] !== f
      ? ((e = (0, $.jsx)(qe, { accountUserId: r, avatarUrl: a, label: l, onOpenProfile: f })),
        (n[11] = r),
        (n[12] = a),
        (n[13] = l),
        (n[14] = f),
        (n[15] = e))
      : (e = n[15]),
      (k = e));
  } else if (i) {
    let e;
    (n[16] !== i || n[17] !== a || n[18] !== S || n[19] !== l || n[20] !== f
      ? ((e = (0, $.jsx)(Ke, { avatarUrl: a, email: i, isOpen: S, label: l, onOpenProfile: f })),
        (n[16] = i),
        (n[17] = a),
        (n[18] = S),
        (n[19] = l),
        (n[20] = f),
        (n[21] = e))
      : (e = n[21]),
      (k = e));
  }
  let A = m ?? !v,
    M;
  n[22] !== r || n[23] !== y
    ? ((M = (e) => {
        (C(e), e && r != null && Le(y, r));
      }),
      (n[22] = r),
      (n[23] = y),
      (n[24] = M))
    : (M = n[24]);
  let N;
  n[25] !== o || n[26] !== h || n[27] !== v || n[28] !== O
    ? ((N = v
        ? o
        : (0, $.jsx)(`button`, {
            "aria-describedby": h,
            "aria-label": O,
            className: `min-w-0 cursor-interaction rounded-sm text-start outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            type: `button`,
            onClick: Ge,
            children: o,
          })),
      (n[25] = o),
      (n[26] = h),
      (n[27] = v),
      (n[28] = O),
      (n[29] = N))
    : (N = n[29]);
  let P;
  return (
    n[30] !== d || n[31] !== k || n[32] !== T || n[33] !== A || n[34] !== M || n[35] !== N
      ? ((P = (0, $.jsx)(j, {
          dialogLabel: T,
          delayDuration: 400,
          interactive: !0,
          keyboardNavigation: !0,
          openOnClick: A,
          scaleAvailableSizeWithZoom: !0,
          selectable: !0,
          side: `bottom`,
          sideOffset: 4,
          tooltipContent: k,
          variant: `entityPreview`,
          onClick: d,
          onOpenChange: M,
          children: N,
        })),
        (n[30] = d),
        (n[31] = k),
        (n[32] = T),
        (n[33] = A),
        (n[34] = M),
        (n[35] = N),
        (n[36] = P))
      : (P = n[36]),
    P
  );
}
function Ge(e) {
  return e.stopPropagation();
}
function Ke(e) {
  let n = (0, Q.c)(40),
    { avatarUrl: r, email: i, isOpen: a, label: o, onOpenProfile: s } = e,
    c = t(p),
    u = E(he),
    d = E(re),
    f = E(Ve),
    m = (0, $e.useRef)(null),
    h;
  n[0] !== u || n[1] !== i || n[2] !== d
    ? ((h = [`space-person-by-email`, u, d, i]), (n[0] = u), (n[1] = i), (n[2] = d), (n[3] = h))
    : (h = n[3]);
  let g;
  n[4] !== u || n[5] !== i
    ? ((g =
        u == null
          ? S
          : async (e) => {
              let { signal: t } = e;
              return (await Oe(u, i, t)) ?? null;
            }),
      (n[4] = u),
      (n[5] = i),
      (n[6] = g))
    : (g = n[6]);
  let _;
  n[7] !== h || n[8] !== g
    ? ((_ = { queryKey: h, queryFn: g, staleTime: ne.TEN_MINUTES, retry: !1 }),
      (n[7] = h),
      (n[8] = g),
      (n[9] = _))
    : (_ = n[9]);
  let { data: y, isLoading: b } = l(_),
    x,
    C;
  if (
    (n[10] !== y || n[11] !== a || n[12] !== c
      ? ((x = () => {
          if (!a) {
            m.current = null;
            return;
          }
          let e = Ie(a, y ?? null, m.current);
          e != null && (Le(c, e), (m.current = e));
        }),
        (C = [y, a, c]),
        (n[10] = y),
        (n[11] = a),
        (n[12] = c),
        (n[13] = x),
        (n[14] = C))
      : ((x = n[13]), (C = n[14])),
    (0, $e.useEffect)(x, C),
    y != null)
  ) {
    let e;
    return (
      n[15] !== y || n[16] !== r || n[17] !== o || n[18] !== s
        ? ((e = (0, $.jsx)(qe, { accountUserId: y, avatarUrl: r, label: o, onOpenProfile: s })),
          (n[15] = y),
          (n[16] = r),
          (n[17] = o),
          (n[18] = s),
          (n[19] = e))
        : (e = n[19]),
      e
    );
  }
  let w;
  n[20] !== r || n[21] !== o
    ? ((w = (0, $.jsx)(Ne, {
        accountUserId: null,
        avatarUrl: r,
        name: o,
        profileQueryEnabled: !1,
        size: `row`,
      })),
      (n[20] = r),
      (n[21] = o),
      (n[22] = w))
    : (w = n[22]);
  let T;
  n[23] === o
    ? (T = n[24])
    : ((T = (0, $.jsx)(`div`, { className: `truncate text-sm leading-5 font-medium`, children: o })),
      (n[23] = o),
      (n[24] = T));
  let D;
  n[25] !== i || n[26] !== b
    ? ((D = (0, $.jsx)(`div`, {
        className: `flex h-4.5 items-center truncate text-xs leading-4.5 text-codex-description`,
        children: b ? (0, $.jsx)(B, { className: `w-32`, size: `sm` }) : (0, $.jsx)(Qe, { email: i }),
      })),
      (n[25] = i),
      (n[26] = b),
      (n[27] = D))
    : (D = n[27]);
  let O;
  n[28] !== T || n[29] !== D
    ? ((O = (0, $.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [T, D] })),
      (n[28] = T),
      (n[29] = D),
      (n[30] = O))
    : (O = n[30]);
  let k;
  n[31] !== w || n[32] !== O
    ? ((k = (0, $.jsxs)(`div`, { className: `flex h-10 items-start gap-3`, children: [w, O] })),
      (n[31] = w),
      (n[32] = O),
      (n[33] = k))
    : (k = n[33]);
  let A;
  n[34] !== b || n[35] !== f
    ? ((A = b
        ? (0, $.jsxs)($.Fragment, {
            children: [
              f
                ? (0, $.jsxs)(`div`, {
                    className: `flex h-5 items-center gap-5`,
                    children: [
                      (0, $.jsx)(B, { className: `w-16`, size: `sm` }),
                      (0, $.jsx)(B, { className: `w-12`, size: `sm` }),
                    ],
                  })
                : null,
              (0, $.jsx)(v, {
                "aria-hidden": !0,
                className: `self-start`,
                color: `outlineGhost`,
                disabled: !0,
                size: `cardAction`,
                tabIndex: -1,
                children: (0, $.jsx)(B, { className: `w-20`, size: `sm` }),
              }),
            ],
          })
        : null),
      (n[34] = b),
      (n[35] = f),
      (n[36] = A))
    : (A = n[36]);
  let j;
  return (
    n[37] !== k || n[38] !== A
      ? ((j = (0, $.jsxs)(`div`, { className: `flex w-75 max-w-full flex-col gap-2 p-4`, children: [k, A] })),
        (n[37] = k),
        (n[38] = A),
        (n[39] = j))
      : (j = n[39]),
    j
  );
}
function qe(e) {
  let n = (0, Q.c)(81),
    { accountUserId: r, avatarUrl: i, label: a, onOpenProfile: o } = e,
    s = t(p),
    c = ee(),
    u = E(he),
    d = E(re),
    f = E(Ve),
    m;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = { enabled: !1 }), (n[0] = m)) : (m = n[0]);
  let h = M(Ae, r, m),
    g;
  n[1] !== u || n[2] !== r || n[3] !== d
    ? ((g = [`space-person-profile-username`, u, d, r]), (n[1] = u), (n[2] = r), (n[3] = d), (n[4] = g))
    : (g = n[4]);
  let _;
  n[5] !== u || n[6] !== r
    ? ((_ =
        u == null
          ? S
          : async (e) => {
              let { signal: t } = e;
              return (
                (
                  await ye.safeGet(`/accounts/{account_id}/users`, {
                    parameters: {
                      path: { account_id: u },
                      query: {
                        include_profile_usernames: !0,
                        include_total: !1,
                        limit: 1,
                        selected_ids: [r.split(`__`)[0]],
                      },
                    },
                    signal: t,
                  })
                ).items[0]?.profile_username?.trim() || null
              );
            }),
      (n[5] = u),
      (n[6] = r),
      (n[7] = _))
    : (_ = n[7]);
  let y;
  n[8] !== g || n[9] !== _
    ? ((y = { queryKey: g, queryFn: _, staleTime: ne.TEN_MINUTES, retry: !1 }),
      (n[8] = g),
      (n[9] = _),
      (n[10] = y))
    : (y = n[10]);
  let { data: b, isLoading: x } = l(y),
    C = b ?? void 0,
    T;
  n[11] !== u || n[12] !== C || n[13] !== d
    ? ((T = ae(u, d, C)), (n[11] = u), (n[12] = C), (n[13] = d), (n[14] = T))
    : (T = n[14]);
  let D = f && b != null,
    O;
  n[15] !== T || n[16] !== D
    ? ((O = { ...T, enabled: D, staleTime: ne.TEN_MINUTES, retry: !1 }),
      (n[15] = T),
      (n[16] = D),
      (n[17] = O))
    : (O = n[17]);
  let { data: A, isLoading: j } = l(O),
    N;
  n[18] !== a || n[19] !== A?.profile_details.display_name
    ? ((N = A?.profile_details.display_name?.trim() || a.replace(/^@/, ``)),
      (n[18] = a),
      (n[19] = A?.profile_details.display_name),
      (n[20] = N))
    : (N = n[20]);
  let P = N,
    F,
    I;
  n[21] !== c || n[22] !== A?.profile_details.username || n[23] !== b
    ? ((I = A?.profile_details.username?.trim() || b),
      (F =
        I == null
          ? null
          : c.formatMessage(
              {
                id: `profile.usernameValue`,
                defaultMessage: `@{username}`,
                description: `Profile username shown with an at-sign prefix`,
              },
              { username: ce(I).localUsername },
            )),
      (n[21] = c),
      (n[22] = A?.profile_details.username),
      (n[23] = b),
      (n[24] = F),
      (n[25] = I))
    : ((F = n[24]), (I = n[25]));
  let L = F,
    R = A?.page.display_settings,
    z;
  n[26] === R ? (z = n[27]) : ((z = ie(R)), (n[26] = R), (n[27] = z));
  let V = z,
    H,
    U,
    W,
    G,
    K;
  if (
    n[28] !== r ||
    n[29] !== i ||
    n[30] !== h ||
    n[31] !== V ||
    n[32] !== c ||
    n[33] !== x ||
    n[34] !== j ||
    n[35] !== P ||
    n[36] !== A ||
    n[37] !== f ||
    n[38] !== L
  ) {
    let e = f && A != null && V.showUsageStatistics ? le(A).summary : null,
      t = e?.totalTextTokens,
      a = e?.currentStreakDays,
      o;
    n[44] === L
      ? (o = n[45])
      : ((o = L ?? (0, $.jsx)(`span`, { className: `block h-lh` })), (n[44] = L), (n[45] = o));
    let s = o;
    ((H = x || (f && j)), (U = `flex w-75 max-w-full flex-col gap-2 p-4`));
    let l = i ?? A?.profile_details.profile_picture_url ?? h,
      u;
    n[46] !== r || n[47] !== P || n[48] !== l
      ? ((u = (0, $.jsx)(De, { avatarUrl: l, colorKey: r, fadeIn: !0, name: P, size: `row` })),
        (n[46] = r),
        (n[47] = P),
        (n[48] = l),
        (n[49] = u))
      : (u = n[49]);
    let d;
    n[50] === P
      ? (d = n[51])
      : ((d = (0, $.jsx)(`div`, { className: `truncate text-sm leading-5 font-medium`, children: P })),
        (n[50] = P),
        (n[51] = d));
    let p;
    n[52] !== H || n[53] !== s
      ? ((p = H ? (0, $.jsx)(B, { className: `w-32`, size: `sm` }) : s),
        (n[52] = H),
        (n[53] = s),
        (n[54] = p))
      : (p = n[54]);
    let m;
    n[55] === p
      ? (m = n[56])
      : ((m = (0, $.jsx)(`div`, {
          className: `flex h-4.5 items-center truncate text-xs leading-4.5 text-codex-description`,
          children: p,
        })),
        (n[55] = p),
        (n[56] = m));
    let g;
    (n[57] !== d || n[58] !== m
      ? ((g = (0, $.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [d, m] })),
        (n[57] = d),
        (n[58] = m),
        (n[59] = g))
      : (g = n[59]),
      n[60] !== u || n[61] !== g
        ? ((W = (0, $.jsxs)(`div`, { className: `flex h-10 items-start gap-3`, children: [u, g] })),
          (n[60] = u),
          (n[61] = g),
          (n[62] = W))
        : (W = n[62]),
      n[63] !== H || n[64] !== f
        ? ((G =
            f && H
              ? (0, $.jsxs)(`div`, {
                  className: `flex h-5 items-center gap-5`,
                  children: [
                    (0, $.jsx)(B, { className: `w-16`, size: `sm` }),
                    (0, $.jsx)(B, { className: `w-12`, size: `sm` }),
                  ],
                })
              : null),
          (n[63] = H),
          (n[64] = f),
          (n[65] = G))
        : (G = n[65]),
      (K =
        !H && (t != null || a != null)
          ? (0, $.jsxs)(`div`, {
              className: `flex h-5 items-center gap-5 text-sm leading-5 text-secondary select-none`,
              children: [
                t == null
                  ? null
                  : (0, $.jsx)(`span`, {
                      children: (0, $.jsx)(te, {
                        id: `pages.personMention.profileTokensWithEmphasis`,
                        defaultMessage: `<value>{tokens}</value> tokens`,
                        description: `Compact lifetime token count in a person's Page mention profile card, with the token value emphasized`,
                        values: { tokens: se(c, t), value: Ye },
                      }),
                    }),
                a == null
                  ? null
                  : (0, $.jsx)(`span`, {
                      children: (0, $.jsx)(te, {
                        id: `pages.personMention.profileStreakWithEmphasis`,
                        defaultMessage: `<value>{days}d</value> streak`,
                        description: `Current consecutive-day activity streak in a person's Page mention profile card, with the day count emphasized`,
                        values: { days: a, value: Je },
                      }),
                    }),
              ],
            })
          : null),
      (n[28] = r),
      (n[29] = i),
      (n[30] = h),
      (n[31] = V),
      (n[32] = c),
      (n[33] = x),
      (n[34] = j),
      (n[35] = P),
      (n[36] = A),
      (n[37] = f),
      (n[38] = L),
      (n[39] = H),
      (n[40] = U),
      (n[41] = W),
      (n[42] = G),
      (n[43] = K));
  } else ((H = n[39]), (U = n[40]), (W = n[41]), (G = n[42]), (K = n[43]));
  let q;
  n[66] === H
    ? (q = n[67])
    : ((q = H
        ? (0, $.jsx)(v, {
            "aria-hidden": !0,
            className: `self-start`,
            color: `outlineGhost`,
            disabled: !0,
            size: `cardAction`,
            tabIndex: -1,
            children: (0, $.jsx)(B, { className: `w-20`, size: `sm` }),
          })
        : null),
      (n[66] = H),
      (n[67] = q));
  let J;
  n[68] !== r || n[69] !== H || n[70] !== o || n[71] !== s || n[72] !== I
    ? ((J =
        !H && I != null
          ? (0, $.jsx)(Xe, {
              className: `self-start`,
              color: `outlineGhost`,
              size: `cardAction`,
              to: `/u/${encodeURIComponent(I)}`,
              onOpenProfile: o,
              onViewProfileClicked: () => {
                (k(), Re(s, r));
              },
              username: I,
              onClick: (e) => {
                oe({
                  event: e,
                  href: new URL(`/u/${encodeURIComponent(I)}`, w).href,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                  disposition: `new-tab`,
                });
              },
              children: (0, $.jsx)(te, {
                id: `pages.personMention.viewProfile`,
                defaultMessage: `View profile`,
                description: `Button in a Page mention profile card that opens the person's full profile`,
              }),
            })
          : null),
      (n[68] = r),
      (n[69] = H),
      (n[70] = o),
      (n[71] = s),
      (n[72] = I),
      (n[73] = J))
    : (J = n[73]);
  let Y;
  return (
    n[74] !== U || n[75] !== W || n[76] !== G || n[77] !== K || n[78] !== q || n[79] !== J
      ? ((Y = (0, $.jsxs)(`div`, { className: U, children: [W, G, K, q, J] })),
        (n[74] = U),
        (n[75] = W),
        (n[76] = G),
        (n[77] = K),
        (n[78] = q),
        (n[79] = J),
        (n[80] = Y))
      : (Y = n[80]),
    Y
  );
}
function Je(e) {
  return (0, $.jsx)(`strong`, { className: `font-medium text-default`, children: e });
}
function Ye(e) {
  return (0, $.jsx)(`strong`, { className: `font-medium text-default`, children: e });
}
function Xe(e) {
  let t = (0, Q.c)(17),
    n,
    r,
    i,
    a;
  if (
    (t[0] === e
      ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
      : (({ onOpenProfile: n, onViewProfileClicked: r, username: a, ...i } = e),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a)),
    n == null)
  ) {
    let e;
    return (
      t[5] !== r || t[6] !== i || t[7] !== a
        ? ((e = (0, $.jsx)(Y, { children: (0, $.jsx)(Ze, { ...i, onViewProfileClicked: r, username: a }) })),
          (t[5] = r),
          (t[6] = i),
          (t[7] = a),
          (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  let o;
  t[9] !== n || t[10] !== r || t[11] !== i || t[12] !== a
    ? ((o = (e) => {
        (r(), n == null ? i.onClick?.(e) : (e.preventDefault(), n(a)));
      }),
      (t[9] = n),
      (t[10] = r),
      (t[11] = i),
      (t[12] = a),
      (t[13] = o))
    : (o = t[13]);
  let s;
  return (
    t[14] !== i || t[15] !== o
      ? ((s = (0, $.jsx)(g, { ...i, onClick: o })), (t[14] = i), (t[15] = o), (t[16] = s))
      : (s = t[16]),
    s
  );
}
function Ze(e) {
  let n = (0, Q.c)(11),
    r,
    i,
    a;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]))
    : (({ onViewProfileClicked: r, username: a, ...i } = e), (n[0] = e), (n[1] = r), (n[2] = i), (n[3] = a));
  let o = t(K),
    s;
  n[4] !== r || n[5] !== o || n[6] !== a
    ? ((s = (e) => {
        (r(), e.preventDefault());
        let t = o.get(z)
          ? o.get(et, {
              pathname: o.get(L).pathname,
              tabId: o.get(ve) === `content` ? (o.get(J.activeTab$)?.tabId ?? null) : null,
            })
          : null;
        Pe(o, a) && t != null && G(o, t.isActive$);
      }),
      (n[4] = r),
      (n[5] = o),
      (n[6] = a),
      (n[7] = s))
    : (s = n[7]);
  let c;
  return (
    n[8] !== i || n[9] !== s
      ? ((c = (0, $.jsx)(g, { ...i, onClick: s })), (n[8] = i), (n[9] = s), (n[10] = c))
      : (c = n[10]),
    c
  );
}
function Qe(e) {
  let t = (0, Q.c)(10),
    { email: n } = e,
    r = ee();
  if (!n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`span`, { className: `block h-lh` })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i;
  t[1] !== n || t[2] !== r
    ? ((i = r.formatMessage(
        {
          id: `pages.personMention.copyEmail`,
          defaultMessage: `Copy email address: {email}`,
          description: `Accessible label for copying the email address in a person's profile card`,
        },
        { email: n },
      )),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i))
    : (i = t[3]);
  let a;
  t[4] === n ? (a = t[5]) : ((a = (e) => u(n, e)), (t[4] = n), (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, $.jsx)(s, { ariaLabel: i, buttonText: n, onCopy: a, variant: `inline` })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
var Q, $e, $, et;
function tt() {
  return (tt = e(() => {
    ((Q = d()),
      D(),
      O(),
      x(),
      P(),
      ($e = o()),
      _(),
      q(),
      I(),
      Se(),
      Ee(),
      b(),
      y(),
      pe(),
      R(),
      U(),
      N(),
      F(),
      Me(),
      Be(),
      Ue(),
      _e(),
      Fe(),
      ke(),
      n(),
      Te(),
      de(),
      V(),
      ue(),
      f(),
      r(),
      be(),
      je(),
      ($ = c()),
      (et = h(
        K,
        ({ pathname: e, tabId: t }, { derived: n }) => ({
          isActive$: n(
            (n, { scope: r }) =>
              r.get(L).pathname === e &&
              (r.get(ve) === `content` ? (r.get(J.activeTab$)?.tabId ?? null) : null) === t,
          ),
        }),
        { autoDispose: !0 },
      )));
  }))();
}
export { Ue as a, Le as c, tt as i, We as n, Z as o, qe as r, Be as s, Qe as t };
//# sourceMappingURL=profile-card-596b3632a9d9.js.map
