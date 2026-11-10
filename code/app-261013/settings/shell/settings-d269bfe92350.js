import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  Cot as r,
  Ext as i,
  Fat as a,
  GE as o,
  IDt as s,
  Ixt as c,
  JC as l,
  Nxt as u,
  Pat as d,
  Pxt as f,
  QC as p,
  SJ as m,
  TJ as h,
  VDt as g,
  Vxt as _,
  WE as v,
  Xot as y,
  Yot as b,
  _xt as x,
  frt as S,
  hrt as C,
  iw as w,
  jDt as T,
  nst as ee,
  oxt as E,
  qC as te,
  qG as D,
  t3 as O,
  tst as k,
  tw as A,
  vzt as j,
  wot as M,
  xMt as N,
  yzt as P,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bnn as F,
  Ek as I,
  Gg as L,
  Kg as ne,
  Tk as R,
  Ymr as z,
  _F as B,
  eF as re,
  ehr as V,
  hF as ie,
  mF as H,
  pF as U,
  tF as W,
  xPn as G,
  yPn as K,
  znn as ae,
} from "./app-initial-5851df3f6cb1.js";
import { i as q, n as oe, r as se } from "./invitations-6a97e67bf026.js";
import { n as ce, t as le } from "./settings-loading-row-bf72bf2df25d.js";
import { i as ue, n as de, r as fe, t as pe } from "./queries-5461a01c4337.js";
import { a as me, i as J, r as he, t as ge } from "./member-settings-c51719bab552.js";
import { a as _e, c as ve, i as ye, n as be, o as xe, s as Se } from "./shared-3670dea403eb.js";
import { a as Ce, i as we, s as Te } from "./presentation-e32561d45f3b.js";
function Ee(e) {
  let t = (0, De.c)(4),
    { status: n, onRetry: r } = e;
  if (n === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(A, { label: (0, Y.jsx)(U, {}), control: null })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `error`) {
    let e;
    return (t[1] === r ? (e = t[2]) : ((e = (0, Y.jsx)(J, { onRetry: r })), (t[1] = r), (t[2] = e)), e);
  }
  let i;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Y.jsx)(A, {
          label: (0, Y.jsx)(s, {
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
var De, Y;
function Oe() {
  return (Oe = e(() => {
    ((De = j()), T(), H(), w(), me(), (Y = N()));
  }))();
}
function ke(e) {
  let n = (0, Ne.c)(39),
    { account: i } = e,
    a = c(r),
    { userId: o, accountId: l } = i,
    u = ee(),
    f;
  n[0] !== l || n[1] !== o
    ? ((f = [`chatgpt-parental-controls`, o, l, `graduation-notices`]), (n[0] = l), (n[1] = o), (n[2] = f))
    : (f = n[2]);
  let p = f,
    m;
  n[3] === l
    ? (m = n[4])
    : ((m = (e) => {
        let { signal: t } = e;
        return z.safeGet(`/amphora/u18_graduation_unlink_setting_notices`, {
          additionalHeaders: { "ChatGPT-Account-ID": l },
          signal: t,
        });
      }),
      (n[3] = l),
      (n[4] = m));
  let h;
  n[5] !== p || n[6] !== m
    ? ((h = { queryKey: p, queryFn: m, staleTime: d.ONE_MINUTE, retry: !1 }),
      (n[5] = p),
      (n[6] = m),
      (n[7] = h))
    : (h = n[7]);
  let { data: g, isPending: _, isError: v, isFetching: b, refetch: x } = y(h),
    [S, C] = (0, X.useState)(null),
    [w, T] = (0, X.useState)(null),
    E = (0, X.useRef)(null),
    te,
    D;
  (n[8] !== l || n[9] !== u || n[10] !== o
    ? ((te = () => {
        let e = [`chatgpt-parental-controls`, o, l, `graduation-notices`];
        return () => {
          E.current != null &&
            (E.current.abort(), u.invalidateQueries({ queryKey: e, exact: !0, refetchType: `none` }));
        };
      }),
      (D = [l, u, o]),
      (n[8] = l),
      (n[9] = u),
      (n[10] = o),
      (n[11] = te),
      (n[12] = D))
    : ((te = n[11]), (D = n[12])),
    (0, X.useEffect)(te, D));
  let O;
  n[13] !== i || n[14] !== l || n[15] !== u || n[16] !== p || n[17] !== a
    ? ((O = function (e) {
        if (E.current != null || !ue(a, i)) return;
        let t = new AbortController();
        ((E.current = t),
          C(e),
          T(null),
          u
            .cancelQueries({ queryKey: p, exact: !0 })
            .then(async () => {
              if ((t.signal.throwIfAborted(), !ue(a, i))) {
                t.abort();
                return;
              }
              (await z.safePost(`/amphora/u18_graduation_unlink_setting_notices/dismiss`, {
                additionalHeaders: { "ChatGPT-Account-ID": l },
                requestBody: { notice_ids: e },
                signal: t.signal,
              }),
                t.signal.throwIfAborted(),
                await u.cancelQueries({ queryKey: p, exact: !0 }),
                t.signal.throwIfAborted(),
                u.setQueryData(p, (t) =>
                  t == null ? t : { ...t, notices: t.notices.filter((t) => !e.includes(t.id)) },
                ));
            })
            .catch(() => {
              t.signal.aborted || T(e);
            })
            .finally(() => {
              (E.current === t && ((E.current = null), C(null)),
                u.invalidateQueries({
                  queryKey: p,
                  exact: !0,
                  refetchType: !t.signal.aborted && ue(a, i) ? `active` : `none`,
                }));
            }));
      }),
      (n[13] = i),
      (n[14] = l),
      (n[15] = u),
      (n[16] = p),
      (n[17] = a),
      (n[18] = O))
    : (O = n[18]);
  let k = O,
    j;
  n[19] !== _ || n[20] !== S
    ? ((j =
        _ || S != null
          ? (0, Z.jsx)(le, {
              children: (0, Z.jsx)(s, {
                id: `settings.chatGpt.familyUnlink.notices.pending`,
                defaultMessage: `{action, select, dismiss {Dismissing account-linking updates…} other {Loading account-linking updates…}}`,
                description: `Loading state in Parental controls. action dismiss means an explicit request to dismiss graduation notices is pending; otherwise notices are being loaded.`,
                values: { action: S == null ? `load` : `dismiss` },
              }),
            })
          : null),
      (n[19] = _),
      (n[20] = S),
      (n[21] = j))
    : (j = n[21]);
  let M;
  n[22] !== v || n[23] !== b || n[24] !== x
    ? ((M = v
        ? (0, Z.jsx)(A, {
            label: (0, Z.jsx)(`span`, {
              role: `alert`,
              children: (0, Z.jsx)(s, {
                id: `settings.chatGpt.familyUnlink.notices.loadError`,
                defaultMessage: `Updates about parental controls couldn’t be loaded`,
                description: `Recoverable error loading graduation and account-unlink notices in Parental controls; it does not mean family membership is unavailable`,
              }),
            }),
            control: (0, Z.jsx)(t, {
              color: `secondary`,
              size: `toolbar`,
              type: `button`,
              loading: b,
              onClick: () => void x(),
              children: (0, Z.jsx)(s, {
                id: `common.retry`,
                defaultMessage: `Retry`,
                description: `Button to retry an operation after an error`,
              }),
            }),
          })
        : null),
      (n[22] = v),
      (n[23] = b),
      (n[24] = x),
      (n[25] = M))
    : (M = n[25]);
  let N;
  n[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = [`teen`, `parent`]), (n[26] = N)) : (N = n[26]);
  let P;
  n[27] !== g?.notices || n[28] !== k || n[29] !== S
    ? ((P = N.map((e) => {
        let t = g?.notices?.filter((t) => t.recipient_type === e && !S?.includes(t.id));
        return t == null ? null : (0, Z.jsx)(Ae, { notices: t, isPending: S != null, onDismiss: k }, e);
      })),
      (n[27] = g?.notices),
      (n[28] = k),
      (n[29] = S),
      (n[30] = P))
    : (P = n[30]);
  let F;
  n[31] !== k || n[32] !== w
    ? ((F =
        w == null
          ? null
          : (0, Z.jsx)(A, {
              label: (0, Z.jsx)(`span`, {
                role: `alert`,
                children: (0, Z.jsx)(s, {
                  id: `settings.chatGpt.familyUnlink.notices.dismissError`,
                  defaultMessage: `These updates couldn’t be dismissed. Please try again.`,
                  description: `Error after dismissing a captured group of graduation notices fails; Retry repeats only that group, preserving any newer notice`,
                }),
              }),
              control: (0, Z.jsx)(t, {
                color: `secondary`,
                size: `toolbar`,
                type: `button`,
                onClick: () => k(w),
                children: (0, Z.jsx)(s, {
                  id: `common.retry`,
                  defaultMessage: `Retry`,
                  description: `Button to retry an operation after an error`,
                }),
              }),
            })),
      (n[31] = k),
      (n[32] = w),
      (n[33] = F))
    : (F = n[33]);
  let I;
  return (
    n[34] !== P || n[35] !== F || n[36] !== j || n[37] !== M
      ? ((I = (0, Z.jsxs)(Z.Fragment, { children: [j, M, P, F] })),
        (n[34] = P),
        (n[35] = F),
        (n[36] = j),
        (n[37] = M),
        (n[38] = I))
      : (I = n[38]),
    I
  );
}
function Ae(e) {
  let n = (0, Ne.c)(24),
    { notices: r, isPending: i, onDismiss: a } = e,
    o = g(),
    c = r[0];
  if (!c) return null;
  let l = c.learn_more_url,
    u;
  n[0] !== o || n[1] !== r ? ((u = o.formatList(r.map(Me))), (n[0] = o), (n[1] = r), (n[2] = u)) : (u = n[2]);
  let d = u,
    f;
  if (c.recipient_type === `teen`) {
    let e;
    (n[3] === l
      ? (e = n[4])
      : ((e = l
          ? (0, Z.jsx)(s, {
              id: `amphora.settings.u18GraduationUnlinkNotice.teen.description`,
              defaultMessage: `Parental controls have been removed because you’re no longer using ChatGPT’s teen experience. <learnMoreLink>Learn more</learnMoreLink>`,
              description: `Description for a parental controls settings callout shown to a teen after age verification removes family account linking. <learnMoreLink> wraps the linked text.`,
              values: {
                learnMoreLink: (e) =>
                  (0, Z.jsx)(K, {
                    appearance: `secondary`,
                    href: l,
                    initiator: `open_in_browser_bridge`,
                    children: e,
                  }),
              },
            })
          : (0, Z.jsx)(s, {
              id: `amphora.settings.u18GraduationUnlinkNotice.teen.descriptionWithoutLearnMore`,
              defaultMessage: `Parental controls have been removed because you’re no longer using ChatGPT’s teen experience`,
              description: `Description for a parental controls settings callout shown to a teen after age verification removes family account linking when no Help Center URL is available.`,
            })),
        (n[3] = l),
        (n[4] = e)),
      (f = e));
  } else {
    let e;
    (n[5] !== l || n[6] !== r.length || n[7] !== d
      ? ((e = l
          ? (0, Z.jsx)(s, {
              id: `amphora.settings.u18GraduationUnlinkNotice.parent.description`,
              defaultMessage: `{teenCount, plural, one {You’re no longer listed as {teenDisplayNames}’s parent or guardian. Their account has been updated based on their age.} other {You’re no longer listed as the parent or guardian for {teenDisplayNames}. Their accounts have been updated based on their ages.}} <learnMoreLink>Learn more</learnMoreLink>`,
              description: `Description for a parental controls settings callout shown to a parent after one or more teens' age verification removes family account linking. {teenDisplayNames} is the formatted list of teen display names. <learnMoreLink> wraps the linked text.`,
              values: {
                teenCount: r.length,
                teenDisplayNames: d,
                learnMoreLink: (e) =>
                  (0, Z.jsx)(K, {
                    appearance: `secondary`,
                    href: l,
                    initiator: `open_in_browser_bridge`,
                    children: e,
                  }),
              },
            })
          : (0, Z.jsx)(s, {
              id: `amphora.settings.u18GraduationUnlinkNotice.parent.descriptionWithoutLearnMore`,
              defaultMessage: `{teenCount, plural, one {You’re no longer listed as {teenDisplayNames}’s parent or guardian. Their account has been updated based on their age.} other {You’re no longer listed as the parent or guardian for {teenDisplayNames}. Their accounts have been updated based on their ages.}}`,
              description: `Description for a parental controls settings callout shown to a parent after one or more teens' age verification removes family account linking when no Help Center URL is available. {teenDisplayNames} is the formatted list of teen display names.`,
              values: { teenCount: r.length, teenDisplayNames: d },
            })),
        (n[5] = l),
        (n[6] = r.length),
        (n[7] = d),
        (n[8] = e))
      : (e = n[8]),
      (f = e));
  }
  let p;
  n[9] === f
    ? (p = n[10])
    : ((p = (0, Z.jsx)(`span`, { className: `break-words select-text`, children: f })),
      (n[9] = f),
      (n[10] = p));
  let h;
  n[11] === o
    ? (h = n[12])
    : ((h = o.formatMessage({
        id: `settings.chatGpt.parentalControls.closeGraduationNotice`,
        defaultMessage: `Close`,
        description: `Closes the parental controls notice about account linking being removed after age verification`,
      })),
      (n[11] = o),
      (n[12] = h));
  let _;
  n[13] !== r || n[14] !== a
    ? ((_ = () => a(r.map(je))), (n[13] = r), (n[14] = a), (n[15] = _))
    : (_ = n[15]);
  let y;
  n[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = (0, Z.jsx)(m, {})), (n[16] = y)) : (y = n[16]);
  let b;
  n[17] !== i || n[18] !== h || n[19] !== _
    ? ((b = (0, Z.jsx)(t, {
        color: `ghost`,
        size: `iconCircle`,
        "aria-label": h,
        disabled: i,
        onClick: _,
        children: y,
      })),
      (n[17] = i),
      (n[18] = h),
      (n[19] = _),
      (n[20] = b))
    : (b = n[20]);
  let x;
  return (
    n[21] !== p || n[22] !== b
      ? ((x = (0, Z.jsx)(v, { variant: `callout`, content: p, trailingAction: b })),
        (n[21] = p),
        (n[22] = b),
        (n[23] = x))
      : (x = n[23]),
    x
  );
}
function je(e) {
  return e.id;
}
function Me(e) {
  return e.teen_display_name;
}
var Ne, X, Z;
function Pe() {
  return (Pe = e(() => {
    ((Ne = j()),
      b(),
      k(),
      f(),
      (X = P()),
      T(),
      V(),
      o(),
      O(),
      G(),
      h(),
      M(),
      ce(),
      w(),
      a(),
      fe(),
      (Z = N()));
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
    t = c(r),
    n = _(L);
  switch (n.status) {
    case `loading`:
    case `error`:
    case `denied`: {
      let r;
      e[0] === t.queryClient
        ? (r = e[1])
        : ((r = () => void t.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] })),
          (e[0] = t.queryClient),
          (e[1] = r));
      let i;
      return (
        e[2] !== n.status || e[3] !== r
          ? ((i = (0, $.jsx)(Ee, { status: n.status, onRetry: r })),
            (e[2] = n.status),
            (e[3] = r),
            (e[4] = i))
          : (i = e[4]),
        i
      );
    }
    case `allowed`: {
      let t = `${n.userId}:${n.accountId}`,
        r;
      return (
        e[5] !== n.accountId || e[6] !== n.userId || e[7] !== t
          ? ((r = (0, $.jsx)(Le, { userId: n.userId, accountId: n.accountId }, t)),
            (e[5] = n.accountId),
            (e[6] = n.userId),
            (e[7] = t),
            (e[8] = r))
          : (r = e[8]),
        r
      );
    }
  }
}
function Le(e) {
  let t = (0, Q.c)(17),
    { userId: n, accountId: r } = e,
    i;
  t[0] !== r || t[1] !== n ? ((i = de(n, r)), (t[0] = r), (t[1] = n), (t[2] = i)) : (i = t[2]);
  let { data: a, isPending: o, isError: s, refetch: c } = y(i.current);
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
      t[4] === c ? (e = t[5]) : ((e = (0, $.jsx)(J, { onRetry: () => void c() })), (t[4] = c), (t[5] = e)),
      e
    );
  }
  let l;
  t[6] !== s || t[7] !== c
    ? ((l = s && (0, $.jsx)(J, { isRefresh: !0, onRetry: () => void c() })),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] !== r || t[10] !== a.id || t[11] !== a.role || t[12] !== n
    ? ((u =
        a.id == null
          ? (0, $.jsx)(Re, { userId: n, accountId: r })
          : (0, $.jsx)(Be, { userId: n, accountId: r, role: a.role, amphoraId: a.id }, a.id)),
      (t[9] = r),
      (t[10] = a.id),
      (t[11] = a.role),
      (t[12] = n),
      (t[13] = u))
    : (u = t[13]);
  let d;
  return (
    t[14] !== l || t[15] !== u
      ? ((d = (0, $.jsxs)($.Fragment, { children: [l, u] })), (t[14] = l), (t[15] = u), (t[16] = d))
      : (d = t[16]),
    d
  );
}
function Re(e) {
  let t = (0, Q.c)(46),
    { userId: n, accountId: i, cursor: a, unavailableFamilyIds: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = o === void 0 ? [] : o), (t[0] = o), (t[1] = s));
  let l = s,
    u = c(r),
    d,
    f,
    p;
  t[2] !== i || t[3] !== a || t[4] !== n
    ? ((d = de(n, i)),
      (f = y),
      (p = d.notifications(a)),
      (t[2] = i),
      (t[3] = a),
      (t[4] = n),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p))
    : ((d = t[5]), (f = t[6]), (p = t[7]));
  let { data: m, isPending: h, isError: g } = f(p),
    _;
  t[8] !== i || t[9] !== d || t[10] !== u.queryClient || t[11] !== n
    ? ((_ = () => {
        Promise.all([
          u.queryClient.invalidateQueries({ queryKey: [`chatgpt-parental-controls`, n, i] }),
          u.queryClient.invalidateQueries({ queryKey: d.notifications().queryKey }),
        ]);
      }),
      (t[8] = i),
      (t[9] = d),
      (t[10] = u.queryClient),
      (t[11] = n),
      (t[12] = _))
    : (_ = t[12]);
  let v = _;
  if (h) {
    let e;
    return (
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(We, {})), (t[13] = e))
        : (e = t[13]),
      e
    );
  }
  if (g) {
    let e;
    return (t[14] === v ? (e = t[15]) : ((e = (0, $.jsx)(J, { onRetry: v })), (t[14] = v), (t[15] = e)), e);
  }
  let b;
  if (t[16] !== m.items || t[17] !== l) {
    let e;
    (t[19] === l
      ? (e = t[20])
      : ((e = (e) =>
          e.notification_type === `family-invite` &&
          !e.reacted_to_at &&
          (e.payload == null || !(`family_group_id` in e.payload) || !l.includes(e.payload.family_group_id))),
        (t[19] = l),
        (t[20] = e)),
      (b = m.items.find(e)),
      (t[16] = m.items),
      (t[17] = l),
      (t[18] = b));
  } else b = t[18];
  let x = b;
  if (x == null) {
    if (m.cursor != null) {
      let e;
      return (
        t[21] !== i || t[22] !== m.cursor || t[23] !== l || t[24] !== n
          ? ((e = (0, $.jsx)(Re, { userId: n, accountId: i, cursor: m.cursor, unavailableFamilyIds: l })),
            (t[21] = i),
            (t[22] = m.cursor),
            (t[23] = l),
            (t[24] = n),
            (t[25] = e))
          : (e = t[25]),
        e
      );
    }
    let e;
    return (
      t[26] !== i || t[27] !== n
        ? ((e = (0, $.jsx)(Ve, { userId: n, accountId: i })), (t[26] = i), (t[27] = n), (t[28] = e))
        : (e = t[28]),
      e
    );
  }
  let S = x.payload;
  if (S == null || !(`family_group_id` in S) || !S.family_group_id) {
    let e;
    return (t[29] === v ? (e = t[30]) : ((e = (0, $.jsx)(J, { onRetry: v })), (t[29] = v), (t[30] = e)), e);
  }
  let C;
  t[31] !== S.family_group_id || t[32] !== l
    ? ((C = [...l, S.family_group_id]), (t[31] = S.family_group_id), (t[32] = l), (t[33] = C))
    : (C = t[33]);
  let w;
  t[34] !== i || t[35] !== a || t[36] !== C || t[37] !== n
    ? ((w = (0, $.jsx)(Re, { userId: n, accountId: i, cursor: a, unavailableFamilyIds: C })),
      (t[34] = i),
      (t[35] = a),
      (t[36] = C),
      (t[37] = n),
      (t[38] = w))
    : (w = t[38]);
  let T;
  return (
    t[39] !== i || t[40] !== x || t[41] !== S.family_group_id || t[42] !== v || t[43] !== w || t[44] !== n
      ? ((T = (0, $.jsx)(ze, {
          userId: n,
          accountId: i,
          invitation: x,
          amphoraId: S.family_group_id,
          onRetry: v,
          next: w,
        })),
        (t[39] = i),
        (t[40] = x),
        (t[41] = S.family_group_id),
        (t[42] = v),
        (t[43] = w),
        (t[44] = n),
        (t[45] = T))
      : (T = t[45]),
    T
  );
}
function ze(e) {
  let t = (0, Q.c)(19),
    { userId: n, accountId: i, invitation: a, amphoraId: o, onRetry: s, next: l } = e,
    u = c(r),
    d;
  t[0] !== i || t[1] !== n
    ? ((d = { userId: n, accountId: i }), (t[0] = i), (t[1] = n), (t[2] = d))
    : (d = t[2]);
  let f = Te(u, d, a.id),
    p;
  t[3] !== i || t[4] !== o || t[5] !== n
    ? ((p = de(n, i).members(o)), (t[3] = i), (t[4] = o), (t[5] = n), (t[6] = p))
    : (p = t[6]);
  let m = p,
    h = f == null,
    g;
  t[7] !== m || t[8] !== h
    ? ((g = { ...m, enabled: h, staleTime: m.staleTime }), (t[7] = m), (t[8] = h), (t[9] = g))
    : (g = t[9]);
  let { isPending: _, isError: v, error: b } = y(g);
  if (f == null && _) {
    let e;
    return (
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(We, {})), (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  if (f == null && v) {
    let e;
    return (
      t[11] !== b || t[12] !== l || t[13] !== s
        ? ((e = b instanceof C && b.status === 404 ? l : (0, $.jsx)(J, { onRetry: s })),
          (t[11] = b),
          (t[12] = l),
          (t[13] = s),
          (t[14] = e))
        : (e = t[14]),
      e
    );
  }
  let x;
  return (
    t[15] !== i || t[16] !== a || t[17] !== n
      ? ((x = (0, $.jsx)(Ve, { userId: n, accountId: i, incomingInvite: a })),
        (t[15] = i),
        (t[16] = a),
        (t[17] = n),
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
    ? ((o = de(n, r).members(i)), (t[0] = r), (t[1] = i), (t[2] = n), (t[3] = o))
    : (o = t[3]);
  let { data: s, isPending: c, isError: l, refetch: u } = y(o);
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
      t[5] === u ? (e = t[6]) : ((e = (0, $.jsx)(J, { onRetry: () => void u() })), (t[5] = u), (t[6] = e)),
      e
    );
  }
  let d;
  t[7] !== l || t[8] !== u
    ? ((d = l && (0, $.jsx)(J, { isRefresh: !0, onRetry: () => void u() })),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] !== r || t[11] !== i || t[12] !== s.items || t[13] !== a || t[14] !== n
    ? ((f = (0, $.jsx)(Ve, { userId: n, accountId: r, amphoraId: i, role: a, members: s.items })),
      (t[10] = r),
      (t[11] = i),
      (t[12] = s.items),
      (t[13] = a),
      (t[14] = n),
      (t[15] = f))
    : (f = t[15]);
  let p;
  return (
    t[16] !== d || t[17] !== f
      ? ((p = (0, $.jsxs)($.Fragment, { children: [d, f] })), (t[16] = d), (t[17] = f), (t[18] = p))
      : (p = t[18]),
    p
  );
}
function Ve(e) {
  let a = (0, Q.c)(90),
    { userId: o, accountId: l, amphoraId: d, role: f, members: m, incomingInvite: h } = e,
    _ = c(r),
    v = g(),
    [y, b] = (0, Ge.useState)(!1),
    [x, S] = (0, Ge.useState)(),
    [C, w] = u(),
    T = i(),
    ee;
  a[0] !== l || a[1] !== o
    ? ((ee = { userId: o, accountId: l }), (a[0] = l), (a[1] = o), (a[2] = ee))
    : (ee = a[2]);
  let O = ee,
    k;
  a[3] !== m || a[4] !== x || a[5] !== C
    ? ((k = m?.find((e) =>
        e.status === `invited`
          ? x != null && (e.email ?? e.account_identifier) === x
          : e.user_id != null && e.user_id === C.get(`member`),
      )),
      (a[3] = m),
      (a[4] = x),
      (a[5] = C),
      (a[6] = k))
    : (k = a[6]);
  let j = k,
    M;
  a[7] !== C || a[8] !== w
    ? ((M = () => {
        S(void 0);
        let e = new URLSearchParams(C);
        (e.delete(`member`), w(e, { replace: !0 }));
      }),
      (a[7] = C),
      (a[8] = w),
      (a[9] = M))
    : (M = a[9]);
  let N = M,
    P = f === `owner`,
    F = f === `member_role` || f === `child`,
    I;
  a[10] !== m || a[11] !== f || a[12] !== o
    ? ((I = f === `member_role` && m?.every((e) => e.user_id === o)),
      (a[10] = m),
      (a[11] = f),
      (a[12] = o),
      (a[13] = I))
    : (I = a[13]);
  let L = I;
  if (m == null && C.has(`member`)) {
    let e, t;
    if (a[14] !== C) {
      let n = new URLSearchParams(C);
      (n.delete(`member`), (e = E), (t = n.toString()), (a[14] = C), (a[15] = e), (a[16] = t));
    } else ((e = a[15]), (t = a[16]));
    let n;
    a[17] === t ? (n = a[18]) : ((n = { search: t }), (a[17] = t), (a[18] = n));
    let r;
    return (
      a[19] !== e || a[20] !== n
        ? ((r = (0, $.jsx)(e, { to: n, replace: !0 })), (a[19] = e), (a[20] = n), (a[21] = r))
        : (r = a[21]),
      r
    );
  }
  if (
    d != null &&
    m != null &&
    C.has(`member`) &&
    !m.some((e) => e.status !== `invited` && e.user_id === C.get(`member`))
  ) {
    let e;
    a[22] === N ? (e = a[23]) : ((e = (0, $.jsx)(be, { onClick: N })), (a[22] = N), (a[23] = e));
    let t;
    a[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(A, {
          label: (0, $.jsx)(s, {
            id: `settings.chatGpt.parentalControls.memberUnavailable`,
            defaultMessage: `This family member is no longer available`,
            description: `Shown after opening a family member link when the person is not an accepted member of the signed-in user's current parental-control family`,
          }),
          control: null,
        })),
        (a[24] = t))
      : (t = a[24]);
    let n;
    return (
      a[25] === e
        ? (n = a[26])
        : ((n = (0, $.jsx)(ie, { backSlot: e, children: t })), (a[25] = e), (a[26] = n)),
      n
    );
  }
  if (d && j) {
    if (j.status === `invited`) {
      let e = j.email ?? j.account_identifier,
        t;
      return (
        a[27] !== O || a[28] !== d || a[29] !== N || a[30] !== j || a[31] !== e
          ? ((t = (0, $.jsx)(se, { account: O, amphoraId: d, member: j, onBack: N }, e)),
            (a[27] = O),
            (a[28] = d),
            (a[29] = N),
            (a[30] = j),
            (a[31] = e),
            (a[32] = t))
          : (t = a[32]),
        t
      );
    }
    if (j.role !== `owner` && (P || j.user_id === o)) {
      let e;
      return (
        a[33] !== O || a[34] !== d || a[35] !== N || a[36] !== j
          ? ((e = (0, $.jsx)(ge, { account: O, amphoraId: d, member: j, onBack: N }, j.user_id)),
            (a[33] = O),
            (a[34] = d),
            (a[35] = N),
            (a[36] = j),
            (a[37] = e))
          : (e = a[37]),
        e
      );
    }
    let e;
    a[38] === N ? (e = a[39]) : ((e = (0, $.jsx)(be, { onClick: N })), (a[38] = N), (a[39] = e));
    let t;
    a[40] === j ? (t = a[41]) : ((t = (0, $.jsx)(_e, { member: j })), (a[40] = j), (a[41] = t));
    let n;
    a[42] !== O || a[43] !== d || a[44] !== N || a[45] !== F || a[46] !== P || a[47] !== j
      ? ((n =
          !(F && j.role !== `owner`) &&
          (0, $.jsx)(Se, {
            account: O,
            amphoraId: d,
            member: j,
            self: !0,
            leavingFamily: P && j.role === `owner`,
            parentDetails: P,
            onRemoved: N,
          })),
        (a[42] = O),
        (a[43] = d),
        (a[44] = N),
        (a[45] = F),
        (a[46] = P),
        (a[47] = j),
        (a[48] = n))
      : (n = a[48]);
    let r;
    a[49] === P
      ? (r = a[50])
      : ((r = P
          ? (0, $.jsx)(ye, {})
          : (0, $.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, $.jsx)(s, {
                id: `amphora.relationship.helpCenterParagraph2`,
                defaultMessage: `You can link one parent at a time`,
                description: `Informational paragraph shown in the page to manage a parent relationship`,
              }),
            })),
        (a[49] = P),
        (a[50] = r));
    let i;
    return (
      a[51] !== e || a[52] !== t || a[53] !== n || a[54] !== r
        ? ((i = (0, $.jsxs)(ie, { backSlot: e, children: [t, n, r] })),
          (a[51] = e),
          (a[52] = t),
          (a[53] = n),
          (a[54] = r),
          (a[55] = i))
        : (i = a[55]),
      i
    );
  }
  let ne, z;
  a[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, $.jsx)(re, { slug: `parental-controls` })),
      (z = (0, $.jsx)(ye, { iconOnly: !0 })),
      (a[56] = ne),
      (a[57] = z))
    : ((ne = a[56]), (z = a[57]));
  let B;
  a[58] === O ? (B = a[59]) : ((B = (0, $.jsx)(ke, { account: O })), (a[58] = O), (a[59] = B));
  let V;
  a[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, $.jsx)(`p`, {
        className: `text-sm select-none`,
        children: (0, $.jsx)(s, {
          id: `settingsModal.inviteAmphoraMembersParagraph3`,
          defaultMessage: `Parents and teens can link accounts, giving parents tools to adjust certain features, set limits, and add safeguards that work for their family. <link>Learn more</link>`,
          description: `Intro paragraph on Parental controls. The link opens the parental controls Help Center article.`,
          values: { link: Ue },
        }),
      })),
      (a[60] = V))
    : (V = a[60]);
  let H;
  a[61] !== O || a[62] !== h || a[63] !== _
    ? ((H =
        h &&
        (0, $.jsx)(A, {
          label: (0, $.jsx)(s, {
            id: `settingsModal.pendingAmphoraInvite`,
            defaultMessage: `You have a pending family invite`,
            description: `Label shown when a user has a pending family invite`,
          }),
          control: (0, $.jsx)(t, {
            color: `secondary`,
            onClick: () => Ce(_, { type: `family-invite`, item: h }, O, `info`),
            children: (0, $.jsx)(s, {
              id: `settingsModal.inviteButton`,
              defaultMessage: `Invite`,
              description: `Button label for opening a pending family invitation in parental controls settings`,
            }),
          }),
        })),
      (a[61] = O),
      (a[62] = h),
      (a[63] = _),
      (a[64] = H))
    : (H = a[64]);
  let U;
  a[65] !== v || a[66] !== m || a[67] !== C || a[68] !== w
    ? ((U =
        m &&
        m.length > 0 &&
        (0, $.jsxs)(R, {
          children: [
            (0, $.jsx)(R.Header, {
              title: (0, $.jsx)(s, {
                id: `settingsModal.amphoraMembersTitle`,
                defaultMessage: `Family members`,
                description: `Title for family members list`,
              }),
            }),
            (0, $.jsx)(R.Content, {
              children: (0, $.jsx)(te, {
                children: m.toSorted(He).map((e) => {
                  let t = e.user_id ?? e.email ?? e.account_identifier,
                    r =
                      e.name ||
                      e.email ||
                      e.account_identifier ||
                      (e.status === `invited`
                        ? v.formatMessage({
                            id: `amphora.members.missingMember`,
                            defaultMessage: `[missing]`,
                            description: `Fallback label for missing member`,
                          })
                        : v.formatMessage({
                            id: `settingsModal.amphoraMemberFallback`,
                            defaultMessage: `Family member`,
                            description: `Fallback label for family member name`,
                          })),
                    i;
                  return (
                    e.status === `invited` &&
                      (i = (0, $.jsx)(s, {
                        id: `amphora.members.status.invitationSent`,
                        defaultMessage: `Invitation sent`,
                        description: `Helper text shown under email for pending invites`,
                      })),
                    (0, $.jsx)(
                      p,
                      {
                        icon: (0, $.jsx)(ae, {
                          name: r,
                          alt: ``,
                          colorKey: e.user_id ?? void 0,
                          src: e.profile_picture_url ?? null,
                          size: `md`,
                        }),
                        label: r,
                        description: i,
                        trailing: (0, $.jsxs)($.Fragment, {
                          children: [e.role === `owner` && (0, $.jsx)(xe, {}), (0, $.jsx)(n, {})],
                        }),
                        onClick: () => {
                          if (e.status === `invited`) S(e.email ?? e.account_identifier ?? void 0);
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
      (a[65] = v),
      (a[66] = m),
      (a[67] = C),
      (a[68] = w),
      (a[69] = U))
    : (U = a[69]);
  let W;
  a[70] !== L || a[71] !== F || a[72] !== P
    ? ((W =
        (!F || L) &&
        (0, $.jsx)(`div`, {
          children: (0, $.jsxs)(t, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => b(!0),
            children: [
              (0, $.jsx)(D, {}),
              P
                ? (0, $.jsx)(s, {
                    id: `settingsModal.addChildCTA`,
                    defaultMessage: `Add child`,
                    description: `CTA label shown when the user owns the family group`,
                  })
                : (0, $.jsx)(s, {
                    id: `settingsModal.addFamilyMemberCTA`,
                    defaultMessage: `Add family member`,
                    description: `CTA label shown when the user is not in a family group`,
                  }),
            ],
          }),
        })),
      (a[70] = L),
      (a[71] = F),
      (a[72] = P),
      (a[73] = W))
    : (W = a[73]);
  let G;
  a[74] !== P || a[75] !== T
    ? ((G =
        P &&
        (0, $.jsxs)(R, {
          children: [
            (0, $.jsx)(R.Header, {
              title: (0, $.jsx)(s, {
                id: `amphora.settings.safetyNotifications`,
                defaultMessage: `Safety notifications`,
                description: `Title for the safety notifications section`,
              }),
              actions: (0, $.jsx)(ye, { iconOnly: !0 }),
            }),
            (0, $.jsxs)(R.Content, {
              children: [
                (0, $.jsx)(`p`, {
                  className: `text-sm select-none`,
                  children: (0, $.jsx)(s, {
                    id: `amphora.settings.safetyNotificationsDescription`,
                    defaultMessage: `We care about your teen's safety. If we detect certain serious safety concerns, we will notify you—though no system is perfect. You can choose how you'd like to be contacted.`,
                    description: `Description for the safety notifications section`,
                  }),
                }),
                (0, $.jsx)(`div`, {
                  children: (0, $.jsx)(t, {
                    color: `secondary`,
                    onClick: () => {
                      T(`/settings/notifications`);
                    },
                    children: (0, $.jsx)(s, {
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
      (a[74] = P),
      (a[75] = T),
      (a[76] = G))
    : (G = a[76]);
  let K;
  a[77] !== O || a[78] !== d || a[79] !== L || a[80] !== y || a[81] !== P
    ? ((K =
        y &&
        (0, $.jsx)(oe, { account: O, amphoraId: d, forceTeen: P, forceParent: L, onClose: () => b(!1) })),
      (a[77] = O),
      (a[78] = d),
      (a[79] = L),
      (a[80] = y),
      (a[81] = P),
      (a[82] = K))
    : (K = a[82]);
  let q;
  return (
    a[83] !== U || a[84] !== W || a[85] !== G || a[86] !== K || a[87] !== B || a[88] !== H
      ? ((q = (0, $.jsxs)(ie, { title: ne, action: z, children: [B, V, H, U, W, G, K] })),
        (a[83] = U),
        (a[84] = W),
        (a[85] = G),
        (a[86] = K),
        (a[87] = B),
        (a[88] = H),
        (a[89] = q))
      : (q = a[89]),
    q
  );
}
function He(e, t) {
  return Number(e.status === `invited`) - Number(t.status === `invited`);
}
function Ue(e) {
  return (0, $.jsx)(K, {
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
      ? ((t = (0, $.jsx)(A, { label: (0, $.jsx)(U, {}), control: null })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Q, Ge, $;
function Ke() {
  return (Ke = e(() => {
    ((Q = j()),
      b(),
      f(),
      (Ge = P()),
      T(),
      x(),
      F(),
      O(),
      G(),
      h(),
      M(),
      B(),
      ne(),
      I(),
      H(),
      w(),
      W(),
      l(),
      S(),
      Oe(),
      Pe(),
      q(),
      me(),
      he(),
      we(),
      pe(),
      ve(),
      ($ = N()));
  }))();
}
Ke();
export { Fe as ChatGptParentalControlsSettings };
//# sourceMappingURL=settings-d269bfe92350.js.map
