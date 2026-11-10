import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $bt as n,
  Cot as r,
  E9 as i,
  Fat as a,
  IDt as o,
  Ixt as s,
  Pat as c,
  Pxt as l,
  Rnt as u,
  USt as d,
  VDt as f,
  Vxt as p,
  Xot as m,
  Yot as h,
  bx as g,
  cSt as _,
  cz as v,
  e3 as y,
  g9 as b,
  h9 as x,
  hz as S,
  iO as C,
  jDt as w,
  m9 as T,
  mz as E,
  oSt as D,
  rO as O,
  rst as k,
  sz as A,
  t3 as j,
  vzt as M,
  wot as N,
  xMt as P,
  yx as F,
  yzt as I,
  zSt as L,
  zxt as ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as R,
  Dor as te,
  G4n as z,
  GOr as B,
  JPn as V,
  MCn as H,
  Q3n as U,
  QDr as W,
  W4n as G,
  WMr as K,
  X4n as q,
  XDr as J,
  XMr as ne,
  XPn as re,
  aj as Y,
  dMr as X,
  dkt as ie,
  dwn as Z,
  e6n as ae,
  fMr as oe,
  fkt as se,
  gwr as ce,
  hkt as le,
  hwn as ue,
  iPr as de,
  ikt as fe,
  lIr as pe,
  mkt as me,
  qMr as he,
  qOr as ge,
  rj as _e,
  sIr as ve,
  sPr as ye,
  skt as be,
  tNr as xe,
  xsn as Se,
  zCn as Ce,
} from "./app-initial-5851df3f6cb1.js";
import { n as we, t as Te } from "./profile-avatar-90effac925f0.js";
import { n as Ee, r as De } from "./use-workspace-users-9ff632adf20a.js";
import { r as Oe, t as ke } from "./state-23e2d7b7e609.js";
import { n as Ae, t as je } from "./avatar-ed18f22a2837.js";
import { n as Me, t as Ne } from "./tab-214abc64feae.js";
function Pe(e, t, n) {
  return e && t != null && t !== n ? t : null;
}
function Fe(e, t) {
  W(e, b, { context: t == null ? void 0 : { profileOwner: Le(t, e.get(he)), viewedAccountUserId: t } });
}
function Ie(e, t) {
  W(e, T, {
    action: x.CODEX_PROFILE_CARD_ACTION_TYPE_VIEW_PROFILE_CLICKED,
    context: { profileOwner: Le(t, e.get(he)), viewedAccountUserId: t },
  });
}
function Le(e, t) {
  if (t != null) return e === t ? i.CODEX_PROFILE_OWNER_SELF : i.CODEX_PROFILE_OWNER_OTHER;
}
function Re() {
  return (Re = e(() => {
    (u(), xe(), J());
  }))();
}
var ze, Be, Ve, He;
function Ue() {
  return (Ue = e(() => {
    (l(),
      xe(),
      oe(),
      Se(),
      N(),
      B(),
      (ze = `616940475`),
      (Be = D(r, ({ get: e }) => {
        if (!e(ge, { layer: ze, parameter: `enabled` })) return !1;
        let t = e(K),
          n = e(te);
        if (t.status !== `loaded` || t.structure !== `workspace` || n == null) return !1;
        let { data: r } = e(X, n);
        return r?.member_profiles_enabled !== !1 && r?.member_profiles_sharing === `workspace`;
      })),
      (Ve = D(r, ({ get: e }) => e(ge, { layer: ze, parameter: `show_usage_stats` }))),
      (He = D(r, ({ get: e }) => e(Be) && e(ge, { layer: ze, parameter: `enabled_in_share_dialog` }))));
  }))();
}
function We(e) {
  let t = (0, Q.c)(37),
    {
      accountUserId: n,
      accountUserEmail: i,
      avatarUrl: a,
      children: o,
      fallbackTooltip: c,
      inShareDialog: l,
      label: u,
      labelEmail: d,
      onClick: m,
      onOpenProfile: h,
      openOnClick: g,
      triggerDescriptionId: _,
      triggerIsFocusable: v,
    } = e,
    y = l !== void 0 && l,
    b = v !== void 0 && v,
    x = s(r),
    S = f(),
    C = p(y ? He : Be),
    [w, T] = (0, $e.useState)(!1);
  if (!C || (n == null && !i)) {
    let e;
    return (
      t[0] !== o || t[1] !== c
        ? ((e =
            c == null
              ? (0, $.jsx)($.Fragment, { children: o })
              : (0, $.jsx)(A, { tooltipContent: c, children: o })),
          (t[0] = o),
          (t[1] = c),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let E;
  t[3] !== S || t[4] !== u
    ? ((E = S.formatMessage(
        {
          id: `pages.personHoverCard.profileCardLabel`,
          defaultMessage: `Profile for {name}`,
          description: `Accessible label for a workspace person's profile card`,
        },
        { name: u.replace(/^@/, ``) },
      )),
      (t[3] = S),
      (t[4] = u),
      (t[5] = E))
    : (E = t[5]);
  let D = E,
    O;
  t[6] !== S || t[7] !== u || t[8] !== d || t[9] !== D
    ? ((O =
        d == null || d === u
          ? D
          : S.formatMessage(
              {
                id: `pages.personHoverCard.profileCardLabelWithEmail`,
                defaultMessage: `Profile for {name}, {email}`,
                description: `Accessible label for a person's profile button, including their email to distinguish people with the same display name`,
              },
              { name: u.replace(/^@/, ``), email: d },
            )),
      (t[6] = S),
      (t[7] = u),
      (t[8] = d),
      (t[9] = D),
      (t[10] = O))
    : (O = t[10]);
  let k = O,
    j = null;
  if (n != null) {
    let e;
    (t[11] !== n || t[12] !== a || t[13] !== u || t[14] !== h
      ? ((e = (0, $.jsx)(qe, { accountUserId: n, avatarUrl: a, label: u, onOpenProfile: h })),
        (t[11] = n),
        (t[12] = a),
        (t[13] = u),
        (t[14] = h),
        (t[15] = e))
      : (e = t[15]),
      (j = e));
  } else if (i) {
    let e;
    (t[16] !== i || t[17] !== a || t[18] !== w || t[19] !== u || t[20] !== h
      ? ((e = (0, $.jsx)(Ke, { avatarUrl: a, email: i, isOpen: w, label: u, onOpenProfile: h })),
        (t[16] = i),
        (t[17] = a),
        (t[18] = w),
        (t[19] = u),
        (t[20] = h),
        (t[21] = e))
      : (e = t[21]),
      (j = e));
  }
  let M = g ?? !b,
    N;
  t[22] !== n || t[23] !== x
    ? ((N = (e) => {
        (T(e), e && n != null && Fe(x, n));
      }),
      (t[22] = n),
      (t[23] = x),
      (t[24] = N))
    : (N = t[24]);
  let P;
  t[25] !== o || t[26] !== _ || t[27] !== b || t[28] !== k
    ? ((P = b
        ? o
        : (0, $.jsx)(`button`, {
            "aria-describedby": _,
            "aria-label": k,
            className: `min-w-0 cursor-interaction rounded-sm text-start outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            type: `button`,
            onClick: Ge,
            children: o,
          })),
      (t[25] = o),
      (t[26] = _),
      (t[27] = b),
      (t[28] = k),
      (t[29] = P))
    : (P = t[29]);
  let F;
  return (
    t[30] !== m || t[31] !== j || t[32] !== D || t[33] !== M || t[34] !== N || t[35] !== P
      ? ((F = (0, $.jsx)(A, {
          dialogLabel: D,
          delayDuration: 400,
          interactive: !0,
          keyboardNavigation: !0,
          openOnClick: M,
          scaleAvailableSizeWithZoom: !0,
          selectable: !0,
          side: `bottom`,
          sideOffset: 4,
          tooltipContent: j,
          variant: `entityPreview`,
          onClick: m,
          onOpenChange: N,
          children: P,
        })),
        (t[30] = m),
        (t[31] = j),
        (t[32] = D),
        (t[33] = M),
        (t[34] = N),
        (t[35] = P),
        (t[36] = F))
      : (F = t[36]),
    F
  );
}
function Ge(e) {
  return e.stopPropagation();
}
function Ke(e) {
  let n = (0, Q.c)(40),
    { avatarUrl: i, email: a, isOpen: o, label: l, onOpenProfile: u } = e,
    f = s(r),
    h = p(te),
    g = p(ne),
    _ = p(Ve),
    v = (0, $e.useRef)(null),
    y;
  n[0] !== h || n[1] !== a || n[2] !== g
    ? ((y = [`space-person-by-email`, h, g, a]), (n[0] = h), (n[1] = a), (n[2] = g), (n[3] = y))
    : (y = n[3]);
  let b;
  n[4] !== h || n[5] !== a
    ? ((b =
        h == null
          ? d
          : async (e) => {
              let { signal: t } = e;
              return (await Ee(h, a, t)) ?? null;
            }),
      (n[4] = h),
      (n[5] = a),
      (n[6] = b))
    : (b = n[6]);
  let x;
  n[7] !== y || n[8] !== b
    ? ((x = { queryKey: y, queryFn: b, staleTime: c.TEN_MINUTES, retry: !1 }),
      (n[7] = y),
      (n[8] = b),
      (n[9] = x))
    : (x = n[9]);
  let { data: S, isLoading: C } = m(x),
    w,
    T;
  if (
    (n[10] !== S || n[11] !== o || n[12] !== f
      ? ((w = () => {
          if (!o) {
            v.current = null;
            return;
          }
          let e = Pe(o, S ?? null, v.current);
          e != null && (Fe(f, e), (v.current = e));
        }),
        (T = [S, o, f]),
        (n[10] = S),
        (n[11] = o),
        (n[12] = f),
        (n[13] = w),
        (n[14] = T))
      : ((w = n[13]), (T = n[14])),
    (0, $e.useEffect)(w, T),
    S != null)
  ) {
    let e;
    return (
      n[15] !== S || n[16] !== i || n[17] !== l || n[18] !== u
        ? ((e = (0, $.jsx)(qe, { accountUserId: S, avatarUrl: i, label: l, onOpenProfile: u })),
          (n[15] = S),
          (n[16] = i),
          (n[17] = l),
          (n[18] = u),
          (n[19] = e))
        : (e = n[19]),
      e
    );
  }
  let E;
  n[20] !== i || n[21] !== l
    ? ((E = (0, $.jsx)(je, {
        accountUserId: null,
        avatarUrl: i,
        name: l,
        profileQueryEnabled: !1,
        size: `row`,
      })),
      (n[20] = i),
      (n[21] = l),
      (n[22] = E))
    : (E = n[22]);
  let D;
  n[23] === l
    ? (D = n[24])
    : ((D = (0, $.jsx)(`div`, { className: `truncate text-sm leading-5 font-medium`, children: l })),
      (n[23] = l),
      (n[24] = D));
  let O;
  n[25] !== a || n[26] !== C
    ? ((O = (0, $.jsx)(`div`, {
        className: `flex h-4.5 items-center truncate text-xs leading-4.5 text-codex-description`,
        children: C ? (0, $.jsx)(U, { className: `w-32`, size: `sm` }) : (0, $.jsx)(Qe, { email: a }),
      })),
      (n[25] = a),
      (n[26] = C),
      (n[27] = O))
    : (O = n[27]);
  let k;
  n[28] !== D || n[29] !== O
    ? ((k = (0, $.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [D, O] })),
      (n[28] = D),
      (n[29] = O),
      (n[30] = k))
    : (k = n[30]);
  let A;
  n[31] !== E || n[32] !== k
    ? ((A = (0, $.jsxs)(`div`, { className: `flex h-10 items-start gap-3`, children: [E, k] })),
      (n[31] = E),
      (n[32] = k),
      (n[33] = A))
    : (A = n[33]);
  let j;
  n[34] !== C || n[35] !== _
    ? ((j = C
        ? (0, $.jsxs)($.Fragment, {
            children: [
              _
                ? (0, $.jsxs)(`div`, {
                    className: `flex h-5 items-center gap-5`,
                    children: [
                      (0, $.jsx)(U, { className: `w-16`, size: `sm` }),
                      (0, $.jsx)(U, { className: `w-12`, size: `sm` }),
                    ],
                  })
                : null,
              (0, $.jsx)(t, {
                "aria-hidden": !0,
                className: `self-start`,
                color: `outlineGhost`,
                disabled: !0,
                size: `cardAction`,
                tabIndex: -1,
                children: (0, $.jsx)(U, { className: `w-20`, size: `sm` }),
              }),
            ],
          })
        : null),
      (n[34] = C),
      (n[35] = _),
      (n[36] = j))
    : (j = n[36]);
  let M;
  return (
    n[37] !== A || n[38] !== j
      ? ((M = (0, $.jsxs)(`div`, { className: `flex w-75 max-w-full flex-col gap-2 p-4`, children: [A, j] })),
        (n[37] = A),
        (n[38] = j),
        (n[39] = M))
      : (M = n[39]),
    M
  );
}
function qe(e) {
  let i = (0, Q.c)(81),
    { accountUserId: a, avatarUrl: l, label: u, onOpenProfile: h } = e,
    g = s(r),
    _ = f(),
    v = p(te),
    y = p(ne),
    b = p(Ve),
    x;
  i[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = { enabled: !1 }), (i[0] = x)) : (x = i[0]);
  let S = ee(Oe, a, x),
    C;
  i[1] !== v || i[2] !== a || i[3] !== y
    ? ((C = [`space-person-profile-username`, v, y, a]), (i[1] = v), (i[2] = a), (i[3] = y), (i[4] = C))
    : (C = i[4]);
  let w;
  i[5] !== v || i[6] !== a
    ? ((w =
        v == null
          ? d
          : async (e) => {
              let { signal: t } = e;
              return (
                (
                  await de.safeGet(`/accounts/{account_id}/users`, {
                    parameters: {
                      path: { account_id: v },
                      query: {
                        include_profile_usernames: !0,
                        include_total: !1,
                        limit: 1,
                        selected_ids: [a.split(`__`)[0]],
                      },
                    },
                    signal: t,
                  })
                ).items[0]?.profile_username?.trim() || null
              );
            }),
      (i[5] = v),
      (i[6] = a),
      (i[7] = w))
    : (w = i[7]);
  let T;
  i[8] !== C || i[9] !== w
    ? ((T = { queryKey: C, queryFn: w, staleTime: c.TEN_MINUTES, retry: !1 }),
      (i[8] = C),
      (i[9] = w),
      (i[10] = T))
    : (T = i[10]);
  let { data: D, isLoading: O } = m(T),
    k = D ?? void 0,
    A;
  i[11] !== v || i[12] !== k || i[13] !== y
    ? ((A = le(v, y, k)), (i[11] = v), (i[12] = k), (i[13] = y), (i[14] = A))
    : (A = i[14]);
  let j = b && D != null,
    M;
  i[15] !== A || i[16] !== j
    ? ((M = { ...A, enabled: j, staleTime: c.TEN_MINUTES, retry: !1 }), (i[15] = A), (i[16] = j), (i[17] = M))
    : (M = i[17]);
  let { data: N, isLoading: P } = m(M),
    F;
  i[18] !== u || i[19] !== N?.profile_details.display_name
    ? ((F = N?.profile_details.display_name?.trim() || u.replace(/^@/, ``)),
      (i[18] = u),
      (i[19] = N?.profile_details.display_name),
      (i[20] = F))
    : (F = i[20]);
  let I = F,
    L,
    R;
  i[21] !== _ || i[22] !== N?.profile_details.username || i[23] !== D
    ? ((R = N?.profile_details.username?.trim() || D),
      (L =
        R == null
          ? null
          : _.formatMessage(
              {
                id: `profile.usernameValue`,
                defaultMessage: `@{username}`,
                description: `Profile username shown with an at-sign prefix`,
              },
              { username: be(R).localUsername },
            )),
      (i[21] = _),
      (i[22] = N?.profile_details.username),
      (i[23] = D),
      (i[24] = L),
      (i[25] = R))
    : ((L = i[24]), (R = i[25]));
  let z = L,
    B = N?.page.display_settings,
    V;
  i[26] === B ? (V = i[27]) : ((V = ie(B)), (i[26] = B), (i[27] = V));
  let H = V,
    W,
    G,
    K,
    q,
    J;
  if (
    i[28] !== a ||
    i[29] !== l ||
    i[30] !== S ||
    i[31] !== H ||
    i[32] !== _ ||
    i[33] !== O ||
    i[34] !== P ||
    i[35] !== I ||
    i[36] !== N ||
    i[37] !== b ||
    i[38] !== z
  ) {
    let e = b && N != null && H.showUsageStatistics ? se(N).summary : null,
      t = e?.totalTextTokens,
      n = e?.currentStreakDays,
      r;
    i[44] === z
      ? (r = i[45])
      : ((r = z ?? (0, $.jsx)(`span`, { className: `block h-lh` })), (i[44] = z), (i[45] = r));
    let s = r;
    ((W = O || (b && P)), (G = `flex w-75 max-w-full flex-col gap-2 p-4`));
    let c = l ?? N?.profile_details.profile_picture_url ?? S,
      u;
    i[46] !== a || i[47] !== I || i[48] !== c
      ? ((u = (0, $.jsx)(Te, { avatarUrl: c, colorKey: a, fadeIn: !0, name: I, size: `row` })),
        (i[46] = a),
        (i[47] = I),
        (i[48] = c),
        (i[49] = u))
      : (u = i[49]);
    let d;
    i[50] === I
      ? (d = i[51])
      : ((d = (0, $.jsx)(`div`, { className: `truncate text-sm leading-5 font-medium`, children: I })),
        (i[50] = I),
        (i[51] = d));
    let f;
    i[52] !== W || i[53] !== s
      ? ((f = W ? (0, $.jsx)(U, { className: `w-32`, size: `sm` }) : s),
        (i[52] = W),
        (i[53] = s),
        (i[54] = f))
      : (f = i[54]);
    let p;
    i[55] === f
      ? (p = i[56])
      : ((p = (0, $.jsx)(`div`, {
          className: `flex h-4.5 items-center truncate text-xs leading-4.5 text-codex-description`,
          children: f,
        })),
        (i[55] = f),
        (i[56] = p));
    let m;
    (i[57] !== d || i[58] !== p
      ? ((m = (0, $.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [d, p] })),
        (i[57] = d),
        (i[58] = p),
        (i[59] = m))
      : (m = i[59]),
      i[60] !== u || i[61] !== m
        ? ((K = (0, $.jsxs)(`div`, { className: `flex h-10 items-start gap-3`, children: [u, m] })),
          (i[60] = u),
          (i[61] = m),
          (i[62] = K))
        : (K = i[62]),
      i[63] !== W || i[64] !== b
        ? ((q =
            b && W
              ? (0, $.jsxs)(`div`, {
                  className: `flex h-5 items-center gap-5`,
                  children: [
                    (0, $.jsx)(U, { className: `w-16`, size: `sm` }),
                    (0, $.jsx)(U, { className: `w-12`, size: `sm` }),
                  ],
                })
              : null),
          (i[63] = W),
          (i[64] = b),
          (i[65] = q))
        : (q = i[65]),
      (J =
        !W && (t != null || n != null)
          ? (0, $.jsxs)(`div`, {
              className: `flex h-5 items-center gap-5 text-sm leading-5 text-secondary select-none`,
              children: [
                t == null
                  ? null
                  : (0, $.jsx)(`span`, {
                      children: (0, $.jsx)(o, {
                        id: `pages.personMention.profileTokensWithEmphasis`,
                        defaultMessage: `<value>{tokens}</value> tokens`,
                        description: `Compact lifetime token count in a person's Page mention profile card, with the token value emphasized`,
                        values: { tokens: fe(_, t), value: Ye },
                      }),
                    }),
                n == null
                  ? null
                  : (0, $.jsx)(`span`, {
                      children: (0, $.jsx)(o, {
                        id: `pages.personMention.profileStreakWithEmphasis`,
                        defaultMessage: `<value>{days}d</value> streak`,
                        description: `Current consecutive-day activity streak in a person's Page mention profile card, with the day count emphasized`,
                        values: { days: n, value: Je },
                      }),
                    }),
              ],
            })
          : null),
      (i[28] = a),
      (i[29] = l),
      (i[30] = S),
      (i[31] = H),
      (i[32] = _),
      (i[33] = O),
      (i[34] = P),
      (i[35] = I),
      (i[36] = N),
      (i[37] = b),
      (i[38] = z),
      (i[39] = W),
      (i[40] = G),
      (i[41] = K),
      (i[42] = q),
      (i[43] = J));
  } else ((W = i[39]), (G = i[40]), (K = i[41]), (q = i[42]), (J = i[43]));
  let Y;
  i[66] === W
    ? (Y = i[67])
    : ((Y = W
        ? (0, $.jsx)(t, {
            "aria-hidden": !0,
            className: `self-start`,
            color: `outlineGhost`,
            disabled: !0,
            size: `cardAction`,
            tabIndex: -1,
            children: (0, $.jsx)(U, { className: `w-20`, size: `sm` }),
          })
        : null),
      (i[66] = W),
      (i[67] = Y));
  let X;
  i[68] !== a || i[69] !== W || i[70] !== h || i[71] !== g || i[72] !== R
    ? ((X =
        !W && R != null
          ? (0, $.jsx)(Xe, {
              className: `self-start`,
              color: `outlineGhost`,
              size: `cardAction`,
              to: `/u/${encodeURIComponent(R)}`,
              onOpenProfile: h,
              onViewProfileClicked: () => {
                (E(), Ie(g, a));
              },
              username: R,
              onClick: (e) => {
                re({
                  event: e,
                  href: new URL(`/u/${encodeURIComponent(R)}`, n).href,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                  disposition: `new-tab`,
                });
              },
              children: (0, $.jsx)(o, {
                id: `pages.personMention.viewProfile`,
                defaultMessage: `View profile`,
                description: `Button in a Page mention profile card that opens the person's full profile`,
              }),
            })
          : null),
      (i[68] = a),
      (i[69] = W),
      (i[70] = h),
      (i[71] = g),
      (i[72] = R),
      (i[73] = X))
    : (X = i[73]);
  let Z;
  return (
    i[74] !== G || i[75] !== K || i[76] !== q || i[77] !== J || i[78] !== Y || i[79] !== X
      ? ((Z = (0, $.jsxs)(`div`, { className: G, children: [K, q, J, Y, X] })),
        (i[74] = G),
        (i[75] = K),
        (i[76] = q),
        (i[77] = J),
        (i[78] = Y),
        (i[79] = X),
        (i[80] = Z))
      : (Z = i[80]),
    Z
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
        ? ((e = (0, $.jsx)(_e, { children: (0, $.jsx)(Ze, { ...i, onViewProfileClicked: r, username: a }) })),
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
      ? ((s = (0, $.jsx)(y, { ...i, onClick: o })), (t[14] = i), (t[15] = o), (t[16] = s))
      : (s = t[16]),
    s
  );
}
function Ze(e) {
  let t = (0, Q.c)(11),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ onViewProfileClicked: n, username: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = s(ce),
    o;
  t[4] !== n || t[5] !== a || t[6] !== i
    ? ((o = (e) => {
        (n(), e.preventDefault());
        let t = a.get(G)
          ? a.get(et, {
              pathname: a.get(ve).pathname,
              tabId: a.get(Ce) === `content` ? (a.get(ue.activeTab$)?.tabId ?? null) : null,
            })
          : null;
        Me(a, i) && t != null && q(a, t.isActive$);
      }),
      (t[4] = n),
      (t[5] = a),
      (t[6] = i),
      (t[7] = o))
    : (o = t[7]);
  let c;
  return (
    t[8] !== r || t[9] !== o
      ? ((c = (0, $.jsx)(y, { ...r, onClick: o })), (t[8] = r), (t[9] = o), (t[10] = c))
      : (c = t[10]),
    c
  );
}
function Qe(e) {
  let t = (0, Q.c)(10),
    { email: n } = e,
    r = f();
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
  t[4] === n ? (a = t[5]) : ((a = (e) => O(n, e)), (t[4] = n), (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, $.jsx)(F, { ariaLabel: i, buttonText: n, onCopy: a, variant: `inline` })),
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
    ((Q = M()),
      L(),
      h(),
      l(),
      k(),
      ($e = I()),
      w(),
      pe(),
      Z(),
      xe(),
      we(),
      j(),
      g(),
      V(),
      z(),
      ae(),
      v(),
      S(),
      Ae(),
      Re(),
      Ue(),
      Se(),
      Ne(),
      De(),
      N(),
      R(),
      me(),
      Y(),
      H(),
      C(),
      a(),
      ye(),
      ke(),
      ($ = P()),
      (et = _(
        ce,
        ({ pathname: e, tabId: t }, { derived: n }) => ({
          isActive$: n(
            (n, { scope: r }) =>
              r.get(ve).pathname === e &&
              (r.get(Ce) === `content` ? (r.get(ue.activeTab$)?.tabId ?? null) : null) === t,
          ),
        }),
        { autoDispose: !0 },
      )));
  }))();
}
export { Ue as a, Fe as c, tt as i, We as n, Be as o, qe as r, Re as s, Qe as t };
//# sourceMappingURL=profile-card-24cf744f537b.js.map
