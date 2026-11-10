import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  Bst as i,
  FBt as a,
  IH as o,
  LNt as s,
  Lst as c,
  Mst as l,
  NSt as u,
  Oit as d,
  PBt as f,
  Qst as p,
  Rst as m,
  SSt as h,
  SY as g,
  TY as _,
  USt as v,
  WK as y,
  XOt as b,
  XSt as x,
  Y3 as S,
  Z3 as C,
  ZSt as w,
  ew as T,
  iCt as E,
  iw as ee,
  jit as D,
  jst as O,
  okt as k,
  sw as A,
  tkt as j,
  uw as M,
  vD as N,
  yD as P,
  zst as F,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GLn as I,
  LF as L,
  QF as te,
  RF as ne,
  XF as R,
  ZF as z,
  b_ as re,
  cA as B,
  eI as V,
  iRr as H,
  oon as ie,
  qLn as U,
  sA as W,
  son as G,
  tyr as K,
  x_ as q,
} from "./app-initial-ad16eaadf81f.js";
import { i as J, n as ae, r as oe } from "./invitations-4281333ecee8.js";
import { n as se, t as ce } from "./settings-loading-row-1fcc5b514745.js";
import { i as le, n as ue, r as de, t as fe } from "./queries-94cb24d2279c.js";
import { a as pe, i as Y, r as me, t as he } from "./member-settings-1983d3c7f7ef.js";
import { a as ge, c as _e, i as ve, n as ye, o as be, s as xe } from "./shared-b5afe1ea7194.js";
import { a as Se, i as Ce, s as we } from "./presentation-1c39bf76abeb.js";
function Te(e) {
  let t = (0, Ee.c)(4),
    { status: n, onRetry: r } = e;
  if (n === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(A, { label: (0, X.jsx)(R, {}), control: null })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `error`) {
    let e;
    return (t[1] === r ? (e = t[2]) : ((e = (0, X.jsx)(Y, { onRetry: r })), (t[1] = r), (t[2] = e)), e);
  }
  let i;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, X.jsx)(A, {
          label: (0, X.jsx)(j, {
            id: `settings.chatGpt.parentalControls.personalAccountRequired`,
            defaultMessage: `Parental controls are available in your personal ChatGPT account`,
            description: `Message shown when Parental controls settings is opened outside an authenticated personal ChatGPT account, such as a business workspace`,
          }),
          control: null,
        })),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
var Ee, X;
function De() {
  return (De = e(() => {
    ((Ee = f()), b(), z(), M(), pe(), (X = s()));
  }))();
}
function Oe(e) {
  let t = (0, Me.c)(39),
    { account: r } = e,
    i = n(p),
    { userId: a, accountId: o } = r,
    s = m(),
    c;
  t[0] !== o || t[1] !== a
    ? ((c = [`chatgpt-parental-controls`, a, o, `graduation-notices`]), (t[0] = o), (t[1] = a), (t[2] = c))
    : (c = t[2]);
  let u = c,
    d;
  t[3] === o
    ? (d = t[4])
    : ((d = (e) => {
        let { signal: t } = e;
        return H.safeGet(`/amphora/u18_graduation_unlink_setting_notices`, {
          additionalHeaders: { "ChatGPT-Account-ID": o },
          signal: t,
        });
      }),
      (t[3] = o),
      (t[4] = d));
  let f;
  t[5] !== u || t[6] !== d
    ? ((f = { queryKey: u, queryFn: d, staleTime: F.ONE_MINUTE, retry: !1 }),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f))
    : (f = t[7]);
  let { data: h, isPending: g, isError: _, isFetching: v, refetch: y } = l(f),
    [b, x] = (0, Ne.useState)(null),
    [C, w] = (0, Ne.useState)(null),
    T = (0, Ne.useRef)(null),
    E,
    ee;
  (t[8] !== o || t[9] !== s || t[10] !== a
    ? ((E = () => {
        let e = [`chatgpt-parental-controls`, a, o, `graduation-notices`];
        return () => {
          T.current != null &&
            (T.current.abort(), s.invalidateQueries({ queryKey: e, exact: !0, refetchType: `none` }));
        };
      }),
      (ee = [o, s, a]),
      (t[8] = o),
      (t[9] = s),
      (t[10] = a),
      (t[11] = E),
      (t[12] = ee))
    : ((E = t[11]), (ee = t[12])),
    (0, Ne.useEffect)(E, ee));
  let D;
  t[13] !== r || t[14] !== o || t[15] !== s || t[16] !== u || t[17] !== i
    ? ((D = function (e) {
        if (T.current != null || !le(i, r)) return;
        let t = new AbortController();
        ((T.current = t),
          x(e),
          w(null),
          s
            .cancelQueries({ queryKey: u, exact: !0 })
            .then(async () => {
              if ((t.signal.throwIfAborted(), !le(i, r))) {
                t.abort();
                return;
              }
              (await H.safePost(`/amphora/u18_graduation_unlink_setting_notices/dismiss`, {
                additionalHeaders: { "ChatGPT-Account-ID": o },
                requestBody: { notice_ids: e },
                signal: t.signal,
              }),
                t.signal.throwIfAborted(),
                await s.cancelQueries({ queryKey: u, exact: !0 }),
                t.signal.throwIfAborted(),
                s.setQueryData(u, (t) =>
                  t == null ? t : { ...t, notices: t.notices.filter((t) => !e.includes(t.id)) },
                ));
            })
            .catch(() => {
              t.signal.aborted || w(e);
            })
            .finally(() => {
              (T.current === t && ((T.current = null), x(null)),
                s.invalidateQueries({
                  queryKey: u,
                  exact: !0,
                  refetchType: !t.signal.aborted && le(i, r) ? `active` : `none`,
                }));
            }));
      }),
      (t[13] = r),
      (t[14] = o),
      (t[15] = s),
      (t[16] = u),
      (t[17] = i),
      (t[18] = D))
    : (D = t[18]);
  let O = D,
    k;
  t[19] !== g || t[20] !== b
    ? ((k =
        g || b != null
          ? (0, Z.jsx)(ce, {
              children: (0, Z.jsx)(j, {
                id: `settings.chatGpt.familyUnlink.notices.pending`,
                defaultMessage: `{action, select, dismiss {Dismissing account-linking updates…} other {Loading account-linking updates…}}`,
                description: `Loading state in Parental controls. action dismiss means an explicit request to dismiss graduation notices is pending; otherwise notices are being loaded.`,
                values: { action: b == null ? `load` : `dismiss` },
              }),
            })
          : null),
      (t[19] = g),
      (t[20] = b),
      (t[21] = k))
    : (k = t[21]);
  let M;
  t[22] !== _ || t[23] !== v || t[24] !== y
    ? ((M = _
        ? (0, Z.jsx)(A, {
            label: (0, Z.jsx)(`span`, {
              role: `alert`,
              children: (0, Z.jsx)(j, {
                id: `settings.chatGpt.familyUnlink.notices.loadError`,
                defaultMessage: `Updates about parental controls couldn’t be loaded`,
                description: `Recoverable error loading graduation and account-unlink notices in Parental controls; it does not mean family membership is unavailable`,
              }),
            }),
            control: (0, Z.jsx)(S, {
              color: `secondary`,
              size: `toolbar`,
              type: `button`,
              loading: v,
              onClick: () => void y(),
              children: (0, Z.jsx)(j, {
                id: `common.retry`,
                defaultMessage: `Retry`,
                description: `Button to retry an operation after an error`,
              }),
            }),
          })
        : null),
      (t[22] = _),
      (t[23] = v),
      (t[24] = y),
      (t[25] = M))
    : (M = t[25]);
  let N;
  t[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = [`teen`, `parent`]), (t[26] = N)) : (N = t[26]);
  let P;
  t[27] !== h?.notices || t[28] !== O || t[29] !== b
    ? ((P = N.map((e) => {
        let t = h?.notices?.filter((t) => t.recipient_type === e && !b?.includes(t.id));
        return t == null ? null : (0, Z.jsx)(ke, { notices: t, isPending: b != null, onDismiss: O }, e);
      })),
      (t[27] = h?.notices),
      (t[28] = O),
      (t[29] = b),
      (t[30] = P))
    : (P = t[30]);
  let I;
  t[31] !== O || t[32] !== C
    ? ((I =
        C == null
          ? null
          : (0, Z.jsx)(A, {
              label: (0, Z.jsx)(`span`, {
                role: `alert`,
                children: (0, Z.jsx)(j, {
                  id: `settings.chatGpt.familyUnlink.notices.dismissError`,
                  defaultMessage: `These updates couldn’t be dismissed. Please try again.`,
                  description: `Error after dismissing a captured group of graduation notices fails; Retry repeats only that group, preserving any newer notice`,
                }),
              }),
              control: (0, Z.jsx)(S, {
                color: `secondary`,
                size: `toolbar`,
                type: `button`,
                onClick: () => O(C),
                children: (0, Z.jsx)(j, {
                  id: `common.retry`,
                  defaultMessage: `Retry`,
                  description: `Button to retry an operation after an error`,
                }),
              }),
            })),
      (t[31] = O),
      (t[32] = C),
      (t[33] = I))
    : (I = t[33]);
  let L;
  return (
    t[34] !== P || t[35] !== I || t[36] !== k || t[37] !== M
      ? ((L = (0, Z.jsxs)(Z.Fragment, { children: [k, M, P, I] })),
        (t[34] = P),
        (t[35] = I),
        (t[36] = k),
        (t[37] = M),
        (t[38] = L))
      : (L = t[38]),
    L
  );
}
function ke(e) {
  let t = (0, Me.c)(24),
    { notices: n, isPending: r, onDismiss: i } = e,
    a = k(),
    o = n[0];
  if (!o) return null;
  let s = o.learn_more_url,
    c;
  t[0] !== a || t[1] !== n ? ((c = a.formatList(n.map(je))), (t[0] = a), (t[1] = n), (t[2] = c)) : (c = t[2]);
  let l = c,
    u;
  if (o.recipient_type === `teen`) {
    let e;
    (t[3] === s
      ? (e = t[4])
      : ((e = s
          ? (0, Z.jsx)(j, {
              id: `amphora.settings.u18GraduationUnlinkNotice.teen.description`,
              defaultMessage: `Parental controls have been removed because you’re no longer using ChatGPT’s teen experience. <learnMoreLink>Learn more</learnMoreLink>`,
              description: `Description for a parental controls settings callout shown to a teen after age verification removes family account linking. <learnMoreLink> wraps the linked text.`,
              values: {
                learnMoreLink: (e) =>
                  (0, Z.jsx)(I, {
                    appearance: `secondary`,
                    href: s,
                    initiator: `open_in_browser_bridge`,
                    children: e,
                  }),
              },
            })
          : (0, Z.jsx)(j, {
              id: `amphora.settings.u18GraduationUnlinkNotice.teen.descriptionWithoutLearnMore`,
              defaultMessage: `Parental controls have been removed because you’re no longer using ChatGPT’s teen experience`,
              description: `Description for a parental controls settings callout shown to a teen after age verification removes family account linking when no Help Center URL is available.`,
            })),
        (t[3] = s),
        (t[4] = e)),
      (u = e));
  } else {
    let e;
    (t[5] !== s || t[6] !== n.length || t[7] !== l
      ? ((e = s
          ? (0, Z.jsx)(j, {
              id: `amphora.settings.u18GraduationUnlinkNotice.parent.description`,
              defaultMessage: `{teenCount, plural, one {You’re no longer listed as {teenDisplayNames}’s parent or guardian. Their account has been updated based on their age.} other {You’re no longer listed as the parent or guardian for {teenDisplayNames}. Their accounts have been updated based on their ages.}} <learnMoreLink>Learn more</learnMoreLink>`,
              description: `Description for a parental controls settings callout shown to a parent after one or more teens' age verification removes family account linking. {teenDisplayNames} is the formatted list of teen display names. <learnMoreLink> wraps the linked text.`,
              values: {
                teenCount: n.length,
                teenDisplayNames: l,
                learnMoreLink: (e) =>
                  (0, Z.jsx)(I, {
                    appearance: `secondary`,
                    href: s,
                    initiator: `open_in_browser_bridge`,
                    children: e,
                  }),
              },
            })
          : (0, Z.jsx)(j, {
              id: `amphora.settings.u18GraduationUnlinkNotice.parent.descriptionWithoutLearnMore`,
              defaultMessage: `{teenCount, plural, one {You’re no longer listed as {teenDisplayNames}’s parent or guardian. Their account has been updated based on their age.} other {You’re no longer listed as the parent or guardian for {teenDisplayNames}. Their accounts have been updated based on their ages.}}`,
              description: `Description for a parental controls settings callout shown to a parent after one or more teens' age verification removes family account linking when no Help Center URL is available. {teenDisplayNames} is the formatted list of teen display names.`,
              values: { teenCount: n.length, teenDisplayNames: l },
            })),
        (t[5] = s),
        (t[6] = n.length),
        (t[7] = l),
        (t[8] = e))
      : (e = t[8]),
      (u = e));
  }
  let d;
  t[9] === u
    ? (d = t[10])
    : ((d = (0, Z.jsx)(`span`, { className: `break-words select-text`, children: u })),
      (t[9] = u),
      (t[10] = d));
  let f;
  t[11] === a
    ? (f = t[12])
    : ((f = a.formatMessage({
        id: `settings.chatGpt.parentalControls.closeGraduationNotice`,
        defaultMessage: `Close`,
        description: `Closes the parental controls notice about account linking being removed after age verification`,
      })),
      (t[11] = a),
      (t[12] = f));
  let p;
  t[13] !== n || t[14] !== i
    ? ((p = () => i(n.map(Ae))), (t[13] = n), (t[14] = i), (t[15] = p))
    : (p = t[15]);
  let m;
  t[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = (0, Z.jsx)(g, {})), (t[16] = m)) : (m = t[16]);
  let h;
  t[17] !== r || t[18] !== f || t[19] !== p
    ? ((h = (0, Z.jsx)(S, {
        color: `ghost`,
        size: `iconCircle`,
        "aria-label": f,
        disabled: r,
        onClick: p,
        children: m,
      })),
      (t[17] = r),
      (t[18] = f),
      (t[19] = p),
      (t[20] = h))
    : (h = t[20]);
  let _;
  return (
    t[21] !== d || t[22] !== h
      ? ((_ = (0, Z.jsx)(N, { variant: `callout`, content: d, trailingAction: h })),
        (t[21] = d),
        (t[22] = h),
        (t[23] = _))
      : (_ = t[23]),
    _
  );
}
function Ae(e) {
  return e.id;
}
function je(e) {
  return e.teen_display_name;
}
var Me, Ne, Z;
function Pe() {
  return (Pe = e(() => {
    ((Me = f()),
      O(),
      c(),
      w(),
      (Ne = a()),
      b(),
      K(),
      P(),
      C(),
      U(),
      _(),
      r(),
      se(),
      M(),
      i(),
      de(),
      (Z = s()));
  }))();
}
function Fe() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(Ie, {})), (e[0] = t)) : (t = e[0]),
    t
  );
}
function Ie() {
  let e = (0, Q.c)(9),
    t = n(p),
    r = E(re);
  switch (r.status) {
    case `loading`:
    case `error`:
    case `denied`: {
      let n;
      e[0] === t.queryClient
        ? (n = e[1])
        : ((n = () => void t.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] })),
          (e[0] = t.queryClient),
          (e[1] = n));
      let i;
      return (
        e[2] !== r.status || e[3] !== n
          ? ((i = (0, $.jsx)(Te, { status: r.status, onRetry: n })),
            (e[2] = r.status),
            (e[3] = n),
            (e[4] = i))
          : (i = e[4]),
        i
      );
    }
    case `allowed`: {
      let t = `${r.userId}:${r.accountId}`,
        n;
      return (
        e[5] !== r.accountId || e[6] !== r.userId || e[7] !== t
          ? ((n = (0, $.jsx)(Le, { userId: r.userId, accountId: r.accountId }, t)),
            (e[5] = r.accountId),
            (e[6] = r.userId),
            (e[7] = t),
            (e[8] = n))
          : (n = e[8]),
        n
      );
    }
  }
}
function Le(e) {
  let t = (0, Q.c)(17),
    { userId: n, accountId: r } = e,
    i;
  t[0] !== r || t[1] !== n ? ((i = ue(n, r)), (t[0] = r), (t[1] = n), (t[2] = i)) : (i = t[2]);
  let { data: a, isPending: o, isError: s, refetch: c } = l(i.current);
  if (o) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(We, {})), (t[3] = e)) : (e = t[3]),
      e
    );
  }
  if (a == null) {
    let e;
    return (
      t[4] === c ? (e = t[5]) : ((e = (0, $.jsx)(Y, { onRetry: () => void c() })), (t[4] = c), (t[5] = e)),
      e
    );
  }
  let u;
  t[6] !== s || t[7] !== c
    ? ((u = s && (0, $.jsx)(Y, { isRefresh: !0, onRetry: () => void c() })),
      (t[6] = s),
      (t[7] = c),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] !== r || t[10] !== a.id || t[11] !== a.role || t[12] !== n
    ? ((d =
        a.id == null
          ? (0, $.jsx)(Re, { userId: n, accountId: r })
          : (0, $.jsx)(Be, { userId: n, accountId: r, role: a.role, amphoraId: a.id }, a.id)),
      (t[9] = r),
      (t[10] = a.id),
      (t[11] = a.role),
      (t[12] = n),
      (t[13] = d))
    : (d = t[13]);
  let f;
  return (
    t[14] !== u || t[15] !== d
      ? ((f = (0, $.jsxs)($.Fragment, { children: [u, d] })), (t[14] = u), (t[15] = d), (t[16] = f))
      : (f = t[16]),
    f
  );
}
function Re(e) {
  let t = (0, Q.c)(46),
    { userId: r, accountId: i, cursor: a, unavailableFamilyIds: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = o === void 0 ? [] : o), (t[0] = o), (t[1] = s));
  let c = s,
    u = n(p),
    d,
    f,
    m;
  t[2] !== i || t[3] !== a || t[4] !== r
    ? ((d = ue(r, i)),
      (f = l),
      (m = d.notifications(a)),
      (t[2] = i),
      (t[3] = a),
      (t[4] = r),
      (t[5] = d),
      (t[6] = f),
      (t[7] = m))
    : ((d = t[5]), (f = t[6]), (m = t[7]));
  let { data: h, isPending: g, isError: _ } = f(m),
    v;
  t[8] !== i || t[9] !== d || t[10] !== u.queryClient || t[11] !== r
    ? ((v = () => {
        Promise.all([
          u.queryClient.invalidateQueries({ queryKey: [`chatgpt-parental-controls`, r, i] }),
          u.queryClient.invalidateQueries({ queryKey: d.notifications().queryKey }),
        ]);
      }),
      (t[8] = i),
      (t[9] = d),
      (t[10] = u.queryClient),
      (t[11] = r),
      (t[12] = v))
    : (v = t[12]);
  let y = v;
  if (g) {
    let e;
    return (
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(We, {})), (t[13] = e))
        : (e = t[13]),
      e
    );
  }
  if (_) {
    let e;
    return (t[14] === y ? (e = t[15]) : ((e = (0, $.jsx)(Y, { onRetry: y })), (t[14] = y), (t[15] = e)), e);
  }
  let b;
  if (t[16] !== h.items || t[17] !== c) {
    let e;
    (t[19] === c
      ? (e = t[20])
      : ((e = (e) =>
          e.notification_type === `family-invite` &&
          !e.reacted_to_at &&
          (e.payload == null || !(`family_group_id` in e.payload) || !c.includes(e.payload.family_group_id))),
        (t[19] = c),
        (t[20] = e)),
      (b = h.items.find(e)),
      (t[16] = h.items),
      (t[17] = c),
      (t[18] = b));
  } else b = t[18];
  let x = b;
  if (x == null) {
    if (h.cursor != null) {
      let e;
      return (
        t[21] !== i || t[22] !== h.cursor || t[23] !== c || t[24] !== r
          ? ((e = (0, $.jsx)(Re, { userId: r, accountId: i, cursor: h.cursor, unavailableFamilyIds: c })),
            (t[21] = i),
            (t[22] = h.cursor),
            (t[23] = c),
            (t[24] = r),
            (t[25] = e))
          : (e = t[25]),
        e
      );
    }
    let e;
    return (
      t[26] !== i || t[27] !== r
        ? ((e = (0, $.jsx)(Ve, { userId: r, accountId: i })), (t[26] = i), (t[27] = r), (t[28] = e))
        : (e = t[28]),
      e
    );
  }
  let S = x.payload;
  if (S == null || !(`family_group_id` in S) || !S.family_group_id) {
    let e;
    return (t[29] === y ? (e = t[30]) : ((e = (0, $.jsx)(Y, { onRetry: y })), (t[29] = y), (t[30] = e)), e);
  }
  let C;
  t[31] !== S.family_group_id || t[32] !== c
    ? ((C = [...c, S.family_group_id]), (t[31] = S.family_group_id), (t[32] = c), (t[33] = C))
    : (C = t[33]);
  let w;
  t[34] !== i || t[35] !== a || t[36] !== C || t[37] !== r
    ? ((w = (0, $.jsx)(Re, { userId: r, accountId: i, cursor: a, unavailableFamilyIds: C })),
      (t[34] = i),
      (t[35] = a),
      (t[36] = C),
      (t[37] = r),
      (t[38] = w))
    : (w = t[38]);
  let T;
  return (
    t[39] !== i || t[40] !== x || t[41] !== S.family_group_id || t[42] !== y || t[43] !== w || t[44] !== r
      ? ((T = (0, $.jsx)(ze, {
          userId: r,
          accountId: i,
          invitation: x,
          amphoraId: S.family_group_id,
          onRetry: y,
          next: w,
        })),
        (t[39] = i),
        (t[40] = x),
        (t[41] = S.family_group_id),
        (t[42] = y),
        (t[43] = w),
        (t[44] = r),
        (t[45] = T))
      : (T = t[45]),
    T
  );
}
function ze(e) {
  let t = (0, Q.c)(19),
    { userId: r, accountId: i, invitation: a, amphoraId: o, onRetry: s, next: c } = e,
    u = n(p),
    d;
  t[0] !== i || t[1] !== r
    ? ((d = { userId: r, accountId: i }), (t[0] = i), (t[1] = r), (t[2] = d))
    : (d = t[2]);
  let f = we(u, d, a.id),
    m;
  t[3] !== i || t[4] !== o || t[5] !== r
    ? ((m = ue(r, i).members(o)), (t[3] = i), (t[4] = o), (t[5] = r), (t[6] = m))
    : (m = t[6]);
  let h = m,
    g = f == null,
    _;
  t[7] !== h || t[8] !== g
    ? ((_ = { ...h, enabled: g, staleTime: h.staleTime }), (t[7] = h), (t[8] = g), (t[9] = _))
    : (_ = t[9]);
  let { isPending: v, isError: y, error: b } = l(_);
  if (f == null && v) {
    let e;
    return (
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(We, {})), (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  if (f == null && y) {
    let e;
    return (
      t[11] !== b || t[12] !== c || t[13] !== s
        ? ((e = b instanceof D && b.status === 404 ? c : (0, $.jsx)(Y, { onRetry: s })),
          (t[11] = b),
          (t[12] = c),
          (t[13] = s),
          (t[14] = e))
        : (e = t[14]),
      e
    );
  }
  let x;
  return (
    t[15] !== i || t[16] !== a || t[17] !== r
      ? ((x = (0, $.jsx)(Ve, { userId: r, accountId: i, incomingInvite: a })),
        (t[15] = i),
        (t[16] = a),
        (t[17] = r),
        (t[18] = x))
      : (x = t[18]),
    x
  );
}
function Be(e) {
  let t = (0, Q.c)(19),
    { userId: n, accountId: r, amphoraId: i, role: a } = e,
    o;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((o = ue(n, r).members(i)), (t[0] = r), (t[1] = i), (t[2] = n), (t[3] = o))
    : (o = t[3]);
  let { data: s, isPending: c, isError: u, refetch: d } = l(o);
  if (c) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(We, {})), (t[4] = e)) : (e = t[4]),
      e
    );
  }
  if (s == null) {
    let e;
    return (
      t[5] === d ? (e = t[6]) : ((e = (0, $.jsx)(Y, { onRetry: () => void d() })), (t[5] = d), (t[6] = e)),
      e
    );
  }
  let f;
  t[7] !== u || t[8] !== d
    ? ((f = u && (0, $.jsx)(Y, { isRefresh: !0, onRetry: () => void d() })),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== r || t[11] !== i || t[12] !== s.items || t[13] !== a || t[14] !== n
    ? ((p = (0, $.jsx)(Ve, { userId: n, accountId: r, amphoraId: i, role: a, members: s.items })),
      (t[10] = r),
      (t[11] = i),
      (t[12] = s.items),
      (t[13] = a),
      (t[14] = n),
      (t[15] = p))
    : (p = t[15]);
  let m;
  return (
    t[16] !== f || t[17] !== p
      ? ((m = (0, $.jsxs)($.Fragment, { children: [f, p] })), (t[16] = f), (t[17] = p), (t[18] = m))
      : (m = t[18]),
    m
  );
}
function Ve(e) {
  let r = (0, Q.c)(90),
    { userId: i, accountId: a, amphoraId: s, role: c, members: l, incomingInvite: u } = e,
    d = n(p),
    f = k(),
    [m, g] = (0, Ge.useState)(!1),
    [_, b] = (0, Ge.useState)(),
    [C, w] = x(),
    T = v(),
    E;
  r[0] !== a || r[1] !== i
    ? ((E = { userId: i, accountId: a }), (r[0] = a), (r[1] = i), (r[2] = E))
    : (E = r[2]);
  let D = E,
    O;
  r[3] !== l || r[4] !== _ || r[5] !== C
    ? ((O = l?.find((e) =>
        e.status === `invited`
          ? _ != null && (e.email ?? e.account_identifier) === _
          : e.user_id != null && e.user_id === C.get(`member`),
      )),
      (r[3] = l),
      (r[4] = _),
      (r[5] = C),
      (r[6] = O))
    : (O = r[6]);
  let M = O,
    N;
  r[7] !== C || r[8] !== w
    ? ((N = () => {
        b(void 0);
        let e = new URLSearchParams(C);
        (e.delete(`member`), w(e, { replace: !0 }));
      }),
      (r[7] = C),
      (r[8] = w),
      (r[9] = N))
    : (N = r[9]);
  let P = N,
    F = c === `owner`,
    I = c === `member_role` || c === `child`,
    ne;
  r[10] !== l || r[11] !== c || r[12] !== i
    ? ((ne = c === `member_role` && l?.every((e) => e.user_id === i)),
      (r[10] = l),
      (r[11] = c),
      (r[12] = i),
      (r[13] = ne))
    : (ne = r[13]);
  let R = ne;
  if (l == null && C.has(`member`)) {
    let e, t;
    if (r[14] !== C) {
      let n = new URLSearchParams(C);
      (n.delete(`member`), (e = h), (t = n.toString()), (r[14] = C), (r[15] = e), (r[16] = t));
    } else ((e = r[15]), (t = r[16]));
    let n;
    r[17] === t ? (n = r[18]) : ((n = { search: t }), (r[17] = t), (r[18] = n));
    let i;
    return (
      r[19] !== e || r[20] !== n
        ? ((i = (0, $.jsx)(e, { to: n, replace: !0 })), (r[19] = e), (r[20] = n), (r[21] = i))
        : (i = r[21]),
      i
    );
  }
  if (
    s != null &&
    l != null &&
    C.has(`member`) &&
    !l.some((e) => e.status !== `invited` && e.user_id === C.get(`member`))
  ) {
    let e;
    r[22] === P ? (e = r[23]) : ((e = (0, $.jsx)(ye, { onClick: P })), (r[22] = P), (r[23] = e));
    let t;
    r[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(A, {
          label: (0, $.jsx)(j, {
            id: `settings.chatGpt.parentalControls.memberUnavailable`,
            defaultMessage: `This family member is no longer available`,
            description: `Shown after opening a family member link when the person is not an accepted member of the signed-in user's current parental-control family`,
          }),
          control: null,
        })),
        (r[24] = t))
      : (t = r[24]);
    let n;
    return (
      r[25] === e
        ? (n = r[26])
        : ((n = (0, $.jsx)(te, { backSlot: e, children: t })), (r[25] = e), (r[26] = n)),
      n
    );
  }
  if (s && M) {
    if (M.status === `invited`) {
      let e = M.email ?? M.account_identifier,
        t;
      return (
        r[27] !== D || r[28] !== s || r[29] !== P || r[30] !== M || r[31] !== e
          ? ((t = (0, $.jsx)(oe, { account: D, amphoraId: s, member: M, onBack: P }, e)),
            (r[27] = D),
            (r[28] = s),
            (r[29] = P),
            (r[30] = M),
            (r[31] = e),
            (r[32] = t))
          : (t = r[32]),
        t
      );
    }
    if (M.role !== `owner` && (F || M.user_id === i)) {
      let e;
      return (
        r[33] !== D || r[34] !== s || r[35] !== P || r[36] !== M
          ? ((e = (0, $.jsx)(he, { account: D, amphoraId: s, member: M, onBack: P }, M.user_id)),
            (r[33] = D),
            (r[34] = s),
            (r[35] = P),
            (r[36] = M),
            (r[37] = e))
          : (e = r[37]),
        e
      );
    }
    let e;
    r[38] === P ? (e = r[39]) : ((e = (0, $.jsx)(ye, { onClick: P })), (r[38] = P), (r[39] = e));
    let t;
    r[40] === M ? (t = r[41]) : ((t = (0, $.jsx)(ge, { member: M })), (r[40] = M), (r[41] = t));
    let n;
    r[42] !== D || r[43] !== s || r[44] !== P || r[45] !== I || r[46] !== F || r[47] !== M
      ? ((n =
          !(I && M.role !== `owner`) &&
          (0, $.jsx)(xe, {
            account: D,
            amphoraId: s,
            member: M,
            self: !0,
            leavingFamily: F && M.role === `owner`,
            parentDetails: F,
            onRemoved: P,
          })),
        (r[42] = D),
        (r[43] = s),
        (r[44] = P),
        (r[45] = I),
        (r[46] = F),
        (r[47] = M),
        (r[48] = n))
      : (n = r[48]);
    let a;
    r[49] === F
      ? (a = r[50])
      : ((a = F
          ? (0, $.jsx)(ve, {})
          : (0, $.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, $.jsx)(j, {
                id: `amphora.relationship.helpCenterParagraph2`,
                defaultMessage: `You can link one parent at a time`,
                description: `Informational paragraph shown in the page to manage a parent relationship`,
              }),
            })),
        (r[49] = F),
        (r[50] = a));
    let o;
    return (
      r[51] !== e || r[52] !== t || r[53] !== n || r[54] !== a
        ? ((o = (0, $.jsxs)(te, { backSlot: e, children: [t, n, a] })),
          (r[51] = e),
          (r[52] = t),
          (r[53] = n),
          (r[54] = a),
          (r[55] = o))
        : (o = r[55]),
      o
    );
  }
  let z, re;
  r[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(L, { slug: `parental-controls` })),
      (re = (0, $.jsx)(ve, { iconOnly: !0 })),
      (r[56] = z),
      (r[57] = re))
    : ((z = r[56]), (re = r[57]));
  let B;
  r[58] === D ? (B = r[59]) : ((B = (0, $.jsx)(Oe, { account: D })), (r[58] = D), (r[59] = B));
  let V;
  r[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, $.jsx)(`p`, {
        className: `text-sm select-none`,
        children: (0, $.jsx)(j, {
          id: `settingsModal.inviteAmphoraMembersParagraph3`,
          defaultMessage: `Parents and teens can link accounts, giving parents tools to adjust certain features, set limits, and add safeguards that work for their family. <link>Learn more</link>`,
          description: `Intro paragraph on Parental controls. The link opens the parental controls Help Center article.`,
          values: { link: Ue },
        }),
      })),
      (r[60] = V))
    : (V = r[60]);
  let H;
  r[61] !== D || r[62] !== u || r[63] !== d
    ? ((H =
        u &&
        (0, $.jsx)(A, {
          label: (0, $.jsx)(j, {
            id: `settingsModal.pendingAmphoraInvite`,
            defaultMessage: `You have a pending family invite`,
            description: `Label shown when a user has a pending family invite`,
          }),
          control: (0, $.jsx)(S, {
            color: `secondary`,
            onClick: () => Se(d, { type: `family-invite`, item: u }, D, `info`),
            children: (0, $.jsx)(j, {
              id: `settingsModal.inviteButton`,
              defaultMessage: `Invite`,
              description: `Button label for opening a pending family invitation in parental controls settings`,
            }),
          }),
        })),
      (r[61] = D),
      (r[62] = u),
      (r[63] = d),
      (r[64] = H))
    : (H = r[64]);
  let U;
  r[65] !== f || r[66] !== l || r[67] !== C || r[68] !== w
    ? ((U =
        l &&
        l.length > 0 &&
        (0, $.jsxs)(W, {
          children: [
            (0, $.jsx)(W.Header, {
              title: (0, $.jsx)(j, {
                id: `settingsModal.amphoraMembersTitle`,
                defaultMessage: `Family members`,
                description: `Title for family members list`,
              }),
            }),
            (0, $.jsx)(W.Content, {
              children: (0, $.jsx)(t, {
                children: l.toSorted(He).map((e) => {
                  let t = e.user_id ?? e.email ?? e.account_identifier,
                    n =
                      e.name ||
                      e.email ||
                      e.account_identifier ||
                      (e.status === `invited`
                        ? f.formatMessage({
                            id: `amphora.members.missingMember`,
                            defaultMessage: `[missing]`,
                            description: `Fallback label for missing member`,
                          })
                        : f.formatMessage({
                            id: `settingsModal.amphoraMemberFallback`,
                            defaultMessage: `Family member`,
                            description: `Fallback label for family member name`,
                          })),
                    r;
                  return (
                    e.status === `invited` &&
                      (r = (0, $.jsx)(j, {
                        id: `amphora.members.status.invitationSent`,
                        defaultMessage: `Invitation sent`,
                        description: `Helper text shown under email for pending invites`,
                      })),
                    (0, $.jsx)(
                      ee,
                      {
                        icon: (0, $.jsx)(ie, {
                          name: n,
                          alt: ``,
                          colorKey: e.user_id ?? void 0,
                          src: e.profile_picture_url ?? null,
                          size: `md`,
                        }),
                        label: n,
                        description: r,
                        trailing: (0, $.jsxs)($.Fragment, {
                          children: [e.role === `owner` && (0, $.jsx)(be, {}), (0, $.jsx)(o, {})],
                        }),
                        onClick: () => {
                          if (e.status === `invited`) b(e.email ?? e.account_identifier ?? void 0);
                          else if (e.user_id) {
                            let t = new URLSearchParams(C);
                            (t.set(`member`, e.user_id), w(t));
                          }
                        },
                      },
                      t,
                    )
                  );
                }),
              }),
            }),
          ],
        })),
      (r[65] = f),
      (r[66] = l),
      (r[67] = C),
      (r[68] = w),
      (r[69] = U))
    : (U = r[69]);
  let G;
  r[70] !== R || r[71] !== I || r[72] !== F
    ? ((G =
        (!I || R) &&
        (0, $.jsx)(`div`, {
          children: (0, $.jsxs)(S, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => g(!0),
            children: [
              (0, $.jsx)(y, {}),
              F
                ? (0, $.jsx)(j, {
                    id: `settingsModal.addChildCTA`,
                    defaultMessage: `Add child`,
                    description: `CTA label shown when the user owns the family group`,
                  })
                : (0, $.jsx)(j, {
                    id: `settingsModal.addFamilyMemberCTA`,
                    defaultMessage: `Add family member`,
                    description: `CTA label shown when the user is not in a family group`,
                  }),
            ],
          }),
        })),
      (r[70] = R),
      (r[71] = I),
      (r[72] = F),
      (r[73] = G))
    : (G = r[73]);
  let K;
  r[74] !== F || r[75] !== T
    ? ((K =
        F &&
        (0, $.jsxs)(W, {
          children: [
            (0, $.jsx)(W.Header, {
              title: (0, $.jsx)(j, {
                id: `amphora.settings.safetyNotifications`,
                defaultMessage: `Safety notifications`,
                description: `Title for the safety notifications section`,
              }),
              actions: (0, $.jsx)(ve, { iconOnly: !0 }),
            }),
            (0, $.jsxs)(W.Content, {
              children: [
                (0, $.jsx)(`p`, {
                  className: `text-sm select-none`,
                  children: (0, $.jsx)(j, {
                    id: `amphora.settings.safetyNotificationsDescription`,
                    defaultMessage: `We care about your teen's safety. If we detect certain serious safety concerns, we will notify you—though no system is perfect. You can choose how you'd like to be contacted.`,
                    description: `Description for the safety notifications section`,
                  }),
                }),
                (0, $.jsx)(`div`, {
                  children: (0, $.jsx)(S, {
                    color: `secondary`,
                    onClick: () => {
                      T(`/settings/notifications`);
                    },
                    children: (0, $.jsx)(j, {
                      id: `amphora.settings.safetyNotificationsButton`,
                      defaultMessage: `Manage notifications`,
                      description: `Button label for managing safety notifications`,
                    }),
                  }),
                }),
              ],
            }),
          ],
        })),
      (r[74] = F),
      (r[75] = T),
      (r[76] = K))
    : (K = r[76]);
  let q;
  r[77] !== D || r[78] !== s || r[79] !== R || r[80] !== m || r[81] !== F
    ? ((q =
        m &&
        (0, $.jsx)(ae, { account: D, amphoraId: s, forceTeen: F, forceParent: R, onClose: () => g(!1) })),
      (r[77] = D),
      (r[78] = s),
      (r[79] = R),
      (r[80] = m),
      (r[81] = F),
      (r[82] = q))
    : (q = r[82]);
  let J;
  return (
    r[83] !== U || r[84] !== G || r[85] !== K || r[86] !== q || r[87] !== B || r[88] !== H
      ? ((J = (0, $.jsxs)(te, { title: z, action: re, children: [B, V, H, U, G, K, q] })),
        (r[83] = U),
        (r[84] = G),
        (r[85] = K),
        (r[86] = q),
        (r[87] = B),
        (r[88] = H),
        (r[89] = J))
      : (J = r[89]),
    J
  );
}
function He(e, t) {
  return Number(e.status === `invited`) - Number(t.status === `invited`);
}
function Ue(e) {
  return (0, $.jsx)(I, {
    appearance: `secondary`,
    href: `https://help.openai.com/articles/12315553-parental-controls-on-chatgpt-faq`,
    initiator: `open_in_browser_bridge`,
    children: e,
  });
}
function We() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(A, { label: (0, $.jsx)(R, {}), control: null })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Q, Ge, $;
function Ke() {
  return (Ke = e(() => {
    ((Q = f()),
      O(),
      w(),
      (Ge = a()),
      b(),
      u(),
      G(),
      C(),
      U(),
      _(),
      r(),
      V(),
      q(),
      B(),
      z(),
      M(),
      ne(),
      T(),
      d(),
      De(),
      Pe(),
      J(),
      pe(),
      me(),
      Ce(),
      fe(),
      _e(),
      ($ = s()));
  }))();
}
Ke();
export { Fe as ChatGptParentalControlsSettings };
//# sourceMappingURL=settings-a1e669070460.js.map
