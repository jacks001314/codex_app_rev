import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EPt as n,
  Fat as r,
  IDt as i,
  LAt as a,
  Pat as o,
  Pxt as s,
  SG as c,
  TJ as l,
  VDt as u,
  Xot as d,
  Yot as f,
  _Mt as p,
  gMt as m,
  jDt as h,
  kIt as g,
  sMt as _,
  vzt as v,
  xMt as y,
  yzt as b,
  zAt as x,
  zxt as S,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as C,
  Bnn as w,
  EPr as T,
  Fin as E,
  Iin as D,
  dMr as O,
  ean as k,
  fMr as A,
  fV as j,
  fur as M,
  pV as ee,
  pur as te,
  tan as ne,
  znn as N,
} from "./app-initial-5851df3f6cb1.js";
import { a as re, i as ie, r as ae } from "./use-workspace-users-9ff632adf20a.js";
import { n as oe, r as se, t as ce } from "./workspace-team-recipient-suggestions-f88127cfec32.js";
import { a as le, i as ue, o as de, r as fe, t as pe } from "./member-count-5e188d46464b.js";
import { t as me } from "./modal-permission-dropdown-75a4787ca1b8.js";
import { n as he, t as ge } from "./role-label-47a44c95e79a.js";
import { f as _e, h as P } from "./model-a4d407e1a4c5.js";
import { t as ve } from "./permission-dropdown-e25fe01e48c3.js";
import { n as ye } from "./people-picks-972d817ff3d6.js";
var be, xe, F, Se, I, L, R, z;
function B() {
  return (B = e(() => {
    ((be = `_Avatar_bh378_1`),
      (xe = `_AvatarImageContainer_bh378_114`),
      (F = `_AvatarImage_bh378_114`),
      (Se = `_AvatarInitial_bh378_146`),
      (I = `_AvatarOverflowCount_bh378_151`),
      (L = `_AvatarOverflowCountSymbol_bh378_174`),
      (R = `_AvatarIcon_bh378_180`),
      (z = {
        Avatar: be,
        AvatarImageContainer: xe,
        AvatarImage: F,
        AvatarInitial: Se,
        AvatarOverflowCount: I,
        AvatarOverflowCountSymbol: L,
        AvatarIcon: R,
      }));
  }))();
}
var Ce, we, V, H, U, Te, Ee, De, Oe;
function W() {
  return (W = e(() => {
    (p(),
      (Ce = b()),
      a(),
      B(),
      (we = b()),
      (V = y()),
      (H = [`blue`, `red`, `green`, `light-blue`, `yellow`, `gray`, `orange`]),
      (U = (e) => {
        let t = Ee(e.imageUrl);
        return (0, we.createElement)(Te, { ...e, imageUrl: t, key: t });
      }),
      (Te = (e) => {
        let {
            className: t,
            size: n,
            overflowCount: r,
            name: i,
            color: a = `secondary`,
            colorFrom: o,
            variant: s = `soft`,
            imageUrl: c,
            Icon: l,
            tooltipComponent: u,
            ...d
          } = e,
          [f, p] = (0, Ce.useState)(),
          h = !!(d.onPointerDown || d.onClick),
          g = h ? `button` : `span`,
          _ = o == null ? void 0 : H[o.split(``).reduce((e, t) => e + t.charCodeAt(0), 0) % H.length],
          v = (0, V.jsx)(g, {
            className: m(z.Avatar, t),
            style: x({
              "avatar-size": n,
              "avatar-background-color": _ == null ? void 0 : `var(--color-avatar-${_})`,
              "avatar-text-color": _ == null ? void 0 : `var(--color-avatar-foreground)`,
            }),
            role: h ? void 0 : `presentation`,
            "aria-label": h ? i : void 0,
            "data-color": a,
            "data-variant": s,
            type: h ? `button` : void 0,
            ...d,
            children:
              c && f !== `error`
                ? (0, V.jsx)(De, { status: f, url: c, onError: () => p(`error`), onLoad: () => p(`loaded`) })
                : l
                  ? (0, V.jsx)(l, { className: z.AvatarIcon })
                  : r
                    ? (0, V.jsx)(Oe, { count: r })
                    : (0, V.jsx)(`span`, {
                        className: z.AvatarInitial,
                        children: i?.charAt(0).toUpperCase(),
                      }),
          });
        return !i || !u ? v : (0, V.jsx)(u, { content: i, children: v });
      }),
      (Ee = (e) => {
        if (e && !(e.includes(`gravatar.com`) && e.includes(`cdn.auth0.com`))) return e;
      }),
      (De = ({ url: e, status: t, onLoad: n, onError: r }) =>
        (0, V.jsx)(`span`, {
          className: z.AvatarImageContainer,
          children: (0, V.jsx)(`img`, {
            src: e,
            className: z.AvatarImage,
            "data-loaded": t === `loaded` ? `` : void 0,
            onLoad: n,
            onError: r,
            alt: ``,
            role: `presentation`,
          }),
        })),
      (Oe = ({ count: e }) => {
        let t = new Intl.NumberFormat(`en`, {
          notation: `compact`,
          compactDisplay: `short`,
          maximumFractionDigits: 0,
        })
          .format(e)
          .toLocaleLowerCase();
        return (0, V.jsxs)(`span`, {
          className: z.AvatarOverflowCount,
          "data-letter-count": t.length,
          children: [(0, V.jsx)(`span`, { className: z.AvatarOverflowCountSymbol, children: `+` }), t],
        });
      }));
  }))();
}
function G() {
  return (G = e(() => {
    W();
  }))();
}
function ke(e, t, n) {
  let r = e.structure === `workspace`,
    i = T(e.plan_type),
    a =
      r &&
      (!i ||
        e.account_user_role === `account-owner` ||
        e.account_user_role === `account-admin` ||
        (!n && t?.permissions?.includes(`chatgpt.workspace.member.role.view`) === !0));
  return {
    isWorkspace: r,
    canSearchMembers: a,
    allowGroups: i && a,
    allowScimGroups: !n && t?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts !== !1,
  };
}
function K() {
  return (K = e(() => {
    C();
  }))();
}
function q(e) {
  let t = (0, Ie.c)(26),
    {
      accountId: n,
      ariaDescribedBy: r,
      disabled: i,
      emptyMessage: a,
      getRemoveLabel: o,
      getGroupRecipient: s,
      getTeamRecipient: c,
      isLoading: l,
      loadingLabel: d,
      options: f,
      placeholder: p,
      query: m,
      searchFailed: h,
      contextualPicks: g,
      selectionDisplay: _,
      selectedOptions: v,
      trailingContent: y,
      onChange: b,
      onQueryChange: x,
    } = e,
    C = _ === void 0 ? `input` : _,
    w = u(),
    [T, E] = (0, Re.useState)(null),
    { data: k } = D(),
    { accountId: A } = te(),
    M = k?.accounts?.find((e) => e.id === n),
    ee = S(se, n ?? ``),
    ne = (ee && c != null) || s != null,
    N;
  t[0] === ne ? (N = t[1]) : ((N = { enabled: ne }), (t[0] = ne), (t[1] = N));
  let { data: re, isError: ae } = S(O, n ?? ``, N),
    ce = M == null ? void 0 : ke(M, re, ae),
    ue = A === n && s != null && ce?.allowGroups === !0,
    de;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = { includeMemberCounts: !0 }), (t[2] = de))
    : (de = t[2]);
  let { data: me, isError: he, isPending: ge, isFetching: _e } = ie(ue && !i ? m : ``, de),
    P = ee && c != null && ce?.canSearchMembers === !0,
    { data: ve, isError: be, isLoading: xe } = S(oe, n ?? ``, { enabled: P && !i }) ?? {},
    F;
  t[3] !== P || t[4] !== w || t[5] !== p?.people || t[6] !== p?.peopleAndTeams
    ? ((F = P
        ? (p?.peopleAndTeams ??
          w.formatMessage({
            id: `shareRecipientPicker.peopleAndTeamsLabel`,
            defaultMessage: `Add people or teams`,
            description: `Placeholder and accessible label for a sharing picker that can invite workspace people and teams`,
          }))
        : (p?.people ??
          w.formatMessage({
            id: `shareRecipientPicker.peopleLabel`,
            defaultMessage: `Add people`,
            description: `Placeholder and accessible label for a sharing picker that can invite people only because team discovery is unavailable`,
          }))),
      (t[3] = P),
      (t[4] = w),
      (t[5] = p?.people),
      (t[6] = p?.peopleAndTeams),
      (t[7] = F))
    : (F = t[7]);
  let Se = F,
    I = m.trim().toLocaleLowerCase(),
    L = g != null,
    R;
  t[8] === v ? (R = t[9]) : ((R = new Set(v.map(Pe))), (t[8] = v), (t[9] = R));
  let z = R,
    B =
      P && !be
        ? (ve ?? [])
            .filter((e) => e.name.toLocaleLowerCase().includes(I))
            .map((e) => ({ ...c(e), avatar: (0, J.jsx)(le, { avatar: e.avatar, size: `sm` }) }))
            .filter((e) => {
              let { id: t, accessStatus: n } = e;
              return (I !== `` || n == null) && !z.has(t);
            })
        : [],
    Ce = new Set(B.map(Ne)),
    we =
      I !== `` && ue && !i && !he
        ? (0, Le.default)(
            (me ?? [])
              .filter((e) => e.system_use_case == null && (ce?.allowScimGroups || !e.is_scim_managed))
              .map((e) => ({
                ...s(e),
                secondaryLabel: pe(w, e.num_members),
                avatar: (0, J.jsx)(fe, { groupId: e.id, size: `sm` }),
              }))
              .filter((e) => {
                let { id: t } = e;
                return !Ce.has(t) && !z.has(t);
              }),
            `id`,
          )
        : [],
    V = (e) =>
      e?.filter((e) => {
        let { id: t } = e;
        return !Ce.has(t) && !z.has(t);
      }),
    H = I === `` ? [] : (V(f) ?? []);
  g != null &&
    (H = ye(
      m,
      [...g, f].map((e) => V(e)?.map(Me)),
    ).map(je));
  let U =
    B.length === 0 && we.length === 0
      ? void 0
      : [
          {
            id: `teams`,
            label:
              I === ``
                ? w.formatMessage({
                    id: `shareRecipientPicker.yourTeams`,
                    defaultMessage: `Your teams`,
                    description: `Heading for the user's Teams suggested in the empty Library, Page, or Space sharing recipient picker`,
                  })
                : w.formatMessage({
                    id: `shareRecipientPicker.teams`,
                    defaultMessage: `Teams`,
                    description: `Heading for matching Teams in Library, Page, or Space sharing search results`,
                  }),
            options: B.map(Fe),
          },
          {
            id: `groups`,
            label: w.formatMessage({
              id: `shareRecipientPicker.groups`,
              defaultMessage: `Groups`,
              description: `Heading for matching administrative and SCIM groups in sharing search results`,
            }),
            options: we.map(Fe),
          },
          {
            id: `directory`,
            label: w.formatMessage({
              id: `shareRecipientPicker.people`,
              defaultMessage: `People`,
              description: `Heading for people matching the workspace directory alongside Teams in the sharing recipient picker`,
            }),
            options: H.map(Fe),
          },
        ];
  L && U?.sort(Ae);
  let Te = h && (I !== `` || L),
    Ee = P && be,
    De = I !== `` && ue && he,
    Oe = Te || Ee || De,
    W = ((I !== `` || L) && l) || (I !== `` && ue && (ge || _e)) || (P && xe),
    G = a;
  I === `` ? (G = null) : W ? (G = d) : (l || Oe) && (G = null);
  let K;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (e) => {
        E(e?.closest(`[role="dialog"]`) ?? null);
      }),
      (t[10] = K))
    : (K = t[10]);
  let q;
  t[11] !== v || t[12] !== C
    ? ((q = C === `external` ? [] : v.map(Fe)), (t[11] = v), (t[12] = C), (t[13] = q))
    : (q = t[13]);
  let Y;
  t[14] === o
    ? (Y = t[15])
    : ((Y = (e) => {
        let { recipient: t } = e;
        return o(t);
      }),
      (t[14] = o),
      (t[15] = Y));
  let ze, Be;
  t[16] !== b || t[17] !== v
    ? ((ze = (e) => {
        let { recipient: t } = e;
        b((0, Le.default)([...v, t], `id`));
      }),
      (Be = (e) => {
        let { id: t } = e;
        b(v.filter((e) => e.id !== t));
      }),
      (t[16] = b),
      (t[17] = v),
      (t[18] = ze),
      (t[19] = Be))
    : ((ze = t[18]), (Be = t[19]));
  let X;
  t[20] !== d || t[21] !== W
    ? ((X = W
        ? (0, J.jsx)(`span`, { className: `sr-only`, role: `status`, "aria-label": d, children: d })
        : null),
      (t[20] = d),
      (t[21] = W),
      (t[22] = X))
    : (X = t[22]);
  let Z;
  return (
    t[23] !== X || t[24] !== y
      ? ((Z = (0, J.jsxs)(J.Fragment, { children: [X, y] })), (t[23] = X), (t[24] = y), (t[25] = Z))
      : (Z = t[25]),
    (0, J.jsx)(`div`, {
      ref: K,
      className: `flex min-w-0 flex-1 flex-col gap-2`,
      children: (0, J.jsx)(j, {
        preserveHighlightOnItemsChange: !L || `user`,
        ariaLabel: Se,
        ariaDescribedBy: r,
        searchStatus: { peopleLoading: L && l && !Te, groupsError: De, teamsError: Ee },
        disabled: i,
        selectedOptions: q,
        getRemoveLabel: Y,
        options: H.map(Fe),
        optionSections: U,
        portalContainer: T,
        query: m,
        onQueryChange: x,
        showLoadingDropdown: !1,
        showSuggestionsOnFocus: P || L,
        onSelectOption: ze,
        onRemoveOption: Be,
        placeholder: Se,
        trailingContent: Z,
        emptyMessage: G,
      }),
    })
  );
}
function Ae(e, t) {
  return e.id === `directory` ? -1 : +(t.id === `directory`);
}
function je(e) {
  let { recipient: t } = e;
  return t;
}
function Me(e) {
  return { id: e.id, name: e.label, email: e.secondaryLabel, recipient: e };
}
function Ne(e) {
  let { id: t } = e;
  return t;
}
function Pe(e) {
  let { id: t } = e;
  return t;
}
function Fe(e) {
  let t;
  return (
    e.accessStatus === `pending`
      ? (t = (0, J.jsx)(i, {
          id: `shareRecipientPicker.invitationPending`,
          defaultMessage: `Invitation pending`,
          description: `Disabled sharing search result for a person or group with an invitation awaiting acceptance`,
        }))
      : e.accessStatus === `existing` &&
        (t = (0, J.jsx)(i, {
          id: `shareRecipientPicker.alreadyHasAccess`,
          defaultMessage: `Already has access`,
          description: `Disabled sharing search result for an owner or existing person or group collaborator`,
        })),
    {
      id: e.id,
      label: e.label,
      secondaryLabel: e.secondaryLabel,
      avatar: (0, J.jsx)(`span`, {
        "aria-hidden": `true`,
        children:
          e.avatar ??
          (e.Icon == null
            ? (0, J.jsx)(N, { alt: ``, colorKey: e.colorKey, name: e.label, size: `sm`, src: null })
            : (0, J.jsx)(U, { name: e.label, colorFrom: e.id, Icon: e.Icon })),
      }),
      disabledReason: t,
      recipient: e,
    }
  );
}
var Ie, Le, Re, J;
function Y() {
  return (Y = e(() => {
    ((Ie = v()),
      G(),
      (Le = t(_(), 1)),
      s(),
      (Re = b()),
      h(),
      ce(),
      A(),
      M(),
      E(),
      w(),
      ae(),
      ue(),
      ee(),
      de(),
      K(),
      (J = y()));
  }))();
}
function ze({ query: e, selected: t, currentEmail: n, existingEmails: r }) {
  let i = [...t],
    a = new Set([...r, n ?? ``].map((e) => e.trim().toLowerCase())),
    o = new Set(t.map((e) => e.id)),
    s = !1;
  for (let t of e.split(Z)) {
    let e = t.trim().toLowerCase();
    if (e === ``) continue;
    let n = `email:${e}`;
    if (a.has(e) || o.has(n)) {
      s = !0;
      continue;
    }
    (o.add(n),
      i.push({
        id: n,
        label: e,
        recipient: { recipient_type: `email`, email: e },
        isValid: Ve.safeParse(e).success,
      }));
  }
  return { selected: i, rejectedExisting: s };
}
function Be(e, t, n) {
  return e.some(({ recipient: e, secondaryLabel: r }) =>
    e.recipient_type === `email`
      ? t.has(e.email.trim().toLowerCase())
      : n.has(`${e.principal_type ?? `user`}:${e.principal_id}`) ||
        (r != null && t.has(r.trim().toLowerCase())),
  );
}
function X(e, t, n) {
  return {
    existingPrincipalKeys: new Set([
      P(e.owner.principal),
      P(e.viewer.principal),
      ...(t?.shares.flatMap((e) =>
        e.recipient.recipient_type === `principal`
          ? [`${e.recipient.principal_type ?? `user`}:${e.recipient.principal_id}`]
          : [],
      ) ?? []),
      ...(n?.collaborators.map(({ principal: e }) => P(e)) ?? []),
    ]),
    existingEmails: new Set(
      [
        e.owner.email,
        e.viewer.email,
        ...(t?.shares.map((e) =>
          e.recipient.recipient_type === `email` ? e.recipient.email : e.recipient_email,
        ) ?? []),
        ...(n?.collaborators.map(({ email: e }) => e) ?? []),
      ].flatMap((e) => (e == null ? [] : [e.trim().toLowerCase()])),
    ),
  };
}
var Z, Ve;
function He() {
  return (He = e(() => {
    (n(), _e(), (Z = /[\s,;]+/), (Ve = g()));
  }))();
}
function Ue(e) {
  let t = (0, Q.c)(5);
  if (e.isWorkspace && e.canSearchMembers) {
    let n = `${e.accountId}:${e.allowGroups}`,
      r;
    return (
      t[0] !== e || t[1] !== n
        ? ((r = (0, $.jsx)(Ge, { ...e }, n)), (t[0] = e), (t[1] = n), (t[2] = r))
        : (r = t[2]),
      r
    );
  }
  let n;
  return (
    t[3] === e
      ? (n = t[4])
      : ((n = e.isWorkspace ? (0, $.jsx)(Xe, { ...e }) : (0, $.jsx)(We, { ...e })), (t[3] = e), (t[4] = n)),
    n
  );
}
function We(e) {
  let t = (0, Q.c)(35),
    n;
  t[0] === e.query ? (n = t[1]) : ((n = e.query.trim().toLowerCase()), (t[0] = e.query), (t[1] = n));
  let r = n,
    i = ne(r, 150),
    a;
  t[2] !== e.currentEmail || t[3] !== e.existingEmails || t[4] !== r
    ? ((a = ze({ query: r, selected: [], currentEmail: e.currentEmail, existingEmails: e.existingEmails })),
      (t[2] = e.currentEmail),
      (t[3] = e.existingEmails),
      (t[4] = r),
      (t[5] = a))
    : (a = t[5]);
  let s = a.selected,
    c;
  t[6] !== s || t[7] !== e.disabled || t[8] !== e.selected || t[9] !== r
    ? ((c =
        !e.disabled &&
        s.length === 1 &&
        s[0]?.isValid === !0 &&
        s[0].label === r &&
        !e.selected.some((e) => {
          let { id: t } = e;
          return t === s[0]?.id;
        })),
      (t[6] = s),
      (t[7] = e.disabled),
      (t[8] = e.selected),
      (t[9] = r),
      (t[10] = c))
    : (c = t[10]);
  let l = c,
    u;
  t[11] !== e.accountId || t[12] !== e.currentPrincipalId || t[13] !== r
    ? ((u = [`library-sharing-recipient`, e.accountId, e.currentPrincipalId, r]),
      (t[11] = e.accountId),
      (t[12] = e.currentPrincipalId),
      (t[13] = r),
      (t[14] = u))
    : (u = t[14]);
  let f = l && r === i,
    p;
  t[15] !== e || t[16] !== r
    ? ((p = (t) => {
        let { signal: n } = t;
        return e.resolveRecipient(r, AbortSignal.any([n, AbortSignal.timeout(7e3)]));
      }),
      (t[15] = e),
      (t[16] = r),
      (t[17] = p))
    : (p = t[17]);
  let m;
  t[18] !== u || t[19] !== f || t[20] !== p
    ? ((m = {
        queryKey: u,
        enabled: f,
        staleTime: o.ONE_MINUTE,
        networkMode: `always`,
        retry: !1,
        queryFn: p,
      }),
      (t[18] = u),
      (t[19] = f),
      (t[20] = p),
      (t[21] = m))
    : (m = t[21]);
  let { data: h, isFetching: g, isError: _ } = d(m),
    v;
  t[22] !== l ||
  t[23] !== s ||
  t[24] !== h?.eligible ||
  t[25] !== i ||
  t[26] !== _ ||
  t[27] !== g ||
  t[28] !== r
    ? ((v = l && !g && !_ && r === i && h?.eligible ? s : []),
      (t[22] = l),
      (t[23] = s),
      (t[24] = h?.eligible),
      (t[25] = i),
      (t[26] = _),
      (t[27] = g),
      (t[28] = r),
      (t[29] = v))
    : (v = t[29]);
  let y = l && (g || r !== i),
    b;
  return (
    t[30] !== _ || t[31] !== e || t[32] !== v || t[33] !== y
      ? ((b = (0, $.jsx)(Xe, { ...e, options: v, isLoading: y, searchFailed: _ })),
        (t[30] = _),
        (t[31] = e),
        (t[32] = v),
        (t[33] = y),
        (t[34] = b))
      : (b = t[34]),
    b
  );
}
function Ge(e) {
  let t = (0, Q.c)(34),
    { data: n, isFetching: r, isPending: i, isError: a } = re(e.disabled ? `` : e.query),
    o = `user:${e.currentPrincipalId}`,
    s;
  t[0] !== e.existingPrincipalKeys || t[1] !== o
    ? ((s = new Set([...e.existingPrincipalKeys, o])),
      (t[0] = e.existingPrincipalKeys),
      (t[1] = o),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    l = e.currentEmail ?? ``,
    u;
  t[3] !== e.existingEmails || t[4] !== l
    ? ((u = new Set([...e.existingEmails, l].map(Ye))), (t[3] = e.existingEmails), (t[4] = l), (t[5] = u))
    : (u = t[5]);
  let d = u,
    f;
  t[6] === e.selected ? (f = t[7]) : ((f = new Set(e.selected.map(Je))), (t[6] = e.selected), (t[7] = f));
  let p = f,
    m;
  t[8] === e.selected ? (m = t[9]) : ((m = new Set(e.selected.flatMap(qe))), (t[8] = e.selected), (t[9] = m));
  let h = m,
    g,
    _;
  if (t[10] !== d || t[11] !== c || t[12] !== e.shares?.shares || t[13] !== h || t[14] !== p || t[15] !== n) {
    let r = e.shares?.shares.filter(Ke);
    ((g = (e, t) => {
      let n;
      return (
        c.has(`group:${e}`) &&
          (n = r?.some(
            (t) =>
              t.recipient.recipient_type === `principal` &&
              t.recipient.principal_type === `group` &&
              t.recipient.principal_id === e,
          )
            ? `pending`
            : `existing`),
        {
          id: `group:${e}`,
          label: t,
          accessStatus: n,
          recipient: { recipient_type: `principal`, principal_type: `group`, principal_id: e },
          isValid: !0,
        }
      );
    }),
      (_ = []));
    for (let e of n ?? []) {
      let t = `user:${e.account_user_id}`;
      if (p.has(t) || (e.email != null && h.has(e.email.trim().toLowerCase()))) continue;
      let n;
      ((c.has(t) || (e.email != null && d.has(e.email.trim().toLowerCase()))) &&
        (n = r?.some((t) =>
          t.recipient.recipient_type === `principal`
            ? (t.recipient.principal_type ?? `user`) === `user` &&
              t.recipient.principal_id === e.account_user_id
            : t.recipient.email.trim().toLowerCase() === e.email?.trim().toLowerCase(),
        )
          ? `pending`
          : `existing`),
        _.push({
          id: t,
          colorKey: e.account_user_id,
          label: e.name || e.email || e.account_user_id,
          secondaryLabel: e.email ?? void 0,
          accessStatus: n,
          recipient: { recipient_type: `principal`, principal_type: `user`, principal_id: e.account_user_id },
          isValid: !0,
        }));
    }
    ((t[10] = d),
      (t[11] = c),
      (t[12] = e.shares?.shares),
      (t[13] = h),
      (t[14] = p),
      (t[15] = n),
      (t[16] = g),
      (t[17] = _));
  } else ((g = t[16]), (_ = t[17]));
  let v;
  t[18] !== g || t[19] !== e.allowGroups
    ? ((v = e.allowGroups ? (e) => g(e.id, e.name) : void 0),
      (t[18] = g),
      (t[19] = e.allowGroups),
      (t[20] = v))
    : (v = t[20]);
  let y;
  t[21] === g ? (y = t[22]) : ((y = (e) => g(e.id, e.name)), (t[21] = g), (t[22] = y));
  let b = i || r,
    x;
  t[23] !== e.query || t[24] !== h
    ? ((x = e.query.trim() !== `` && h.has(e.query.trim().toLowerCase())),
      (t[23] = e.query),
      (t[24] = h),
      (t[25] = x))
    : (x = t[25]);
  let S;
  return (
    t[26] !== _ || t[27] !== e || t[28] !== v || t[29] !== y || t[30] !== b || t[31] !== x || t[32] !== a
      ? ((S = (0, $.jsx)(Xe, {
          ...e,
          getGroupRecipient: v,
          getTeamRecipient: y,
          options: _,
          isLoading: b,
          queryAlreadyAdded: x,
          searchFailed: a,
        })),
        (t[26] = _),
        (t[27] = e),
        (t[28] = v),
        (t[29] = y),
        (t[30] = b),
        (t[31] = x),
        (t[32] = a),
        (t[33] = S))
      : (S = t[33]),
    S
  );
}
function Ke(e) {
  return e.status === `pending`;
}
function qe(e) {
  return e.secondaryLabel == null ? [] : [e.secondaryLabel.trim().toLowerCase()];
}
function Je(e) {
  return e.id;
}
function Ye(e) {
  return e.trim().toLowerCase();
}
function Xe(e) {
  let t = (0, Q.c)(44),
    {
      getGroupRecipient: n,
      getTeamRecipient: r,
      options: a,
      queryAlreadyAdded: o,
      searchFailed: s,
      isLoading: c,
      ...l
    } = e,
    d = o !== void 0 && o,
    f = s !== void 0 && s,
    p = c !== void 0 && c,
    m = u(),
    h = (0, nt.useId)(),
    g = l.selected.some(tt),
    _ = l.disabled || (l.isWorkspace && !l.canSearchMembers),
    v = null;
  if (g) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(i, {
          id: `librarySharing.invite.invalidEmails`,
          defaultMessage: `Remove invalid email addresses before inviting`,
          description: `Inline error in the Library sharing dialog after invalid email addresses have become selected tokens; the user must remove those tokens before sending invitations`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (v = e));
  } else if (d) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(i, {
          id: `librarySharing.invite.alreadyAdded`,
          defaultMessage: `This person already has access or is selected`,
          description: `Inline feedback in the Library sharing dialog when an entered email belongs to the owner, an existing collaborator, or an already selected invitee`,
        })),
        (t[1] = e))
      : (e = t[1]),
      (v = e));
  }
  let y = [l.ariaDescribedBy, v == null ? void 0 : h].filter(et).join(` `) || void 0,
    b = null;
  l.selected.length > 0 &&
    l.role != null &&
    l.allowedRoles != null &&
    (b =
      l.allowedRoles.length > 1
        ? (0, $.jsx)(me, {
            indicatorVariant: `checkmark`,
            variant: `inline`,
            renderLabel: $e,
            disabled: _,
            options: l.allowedRoles.map(Qe),
            value: l.role,
            onChange: l.onRoleChange,
          })
        : (0, $.jsx)(`span`, {
            className: `text-tertiary`,
            children: (0, $.jsx)(ge, { permission: l.role }),
          }));
  let x;
  t[2] === m
    ? (x = t[3])
    : ((x = m.formatMessage({
        id: `librarySharing.invite.personalPlaceholder`,
        defaultMessage: `Add emails`,
        description: `Placeholder and accessible label in the Library sharing recipient input for personal accounts; users enter an email address and select a validated recipient`,
      })),
      (t[2] = m),
      (t[3] = x));
  let S = x,
    C;
  t[4] === m
    ? (C = t[5])
    : ((C = (e) =>
        m.formatMessage(
          {
            id: `librarySharing.invite.removeSelection`,
            defaultMessage: `Remove {name} from the invitation`,
            description: `Accessible label of a selected Library sharing recipient's remove button; name is the person's display name, group name, or email address`,
          },
          { name: e.label },
        )),
      (t[4] = m),
      (t[5] = C));
  let w = C,
    T;
  t[6] !== S || t[7] !== l.isWorkspace
    ? ((T = l.isWorkspace ? void 0 : { people: S, peopleAndTeams: S }),
      (t[6] = S),
      (t[7] = l.isWorkspace),
      (t[8] = T))
    : (T = t[8]);
  let E;
  t[9] === a ? (E = t[10]) : ((E = a?.map(Ze)), (t[9] = a), (t[10] = E));
  let D;
  t[11] !== m || t[12] !== l.isWorkspace
    ? ((D = l.isWorkspace
        ? m.formatMessage({
            id: `librarySharing.invite.searching`,
            defaultMessage: `Searching workspace members`,
            description: `Accessible status while the Library sharing picker searches the current workspace for recipients`,
          })
        : m.formatMessage({
            id: `librarySharing.invite.searchingRecipients`,
            defaultMessage: `Searching for people`,
            description: `Accessible status while the Library sharing picker checks whether the entered email is eligible for sharing`,
          })),
      (t[11] = m),
      (t[12] = l.isWorkspace),
      (t[13] = D))
    : (D = t[13]);
  let O;
  t[14] === l.isWorkspace
    ? (O = t[15])
    : ((O = l.isWorkspace
        ? (0, $.jsx)(i, {
            id: `librarySharing.invite.noWorkspaceMatches`,
            defaultMessage: `No matching people or teams`,
            description: `Empty search result in the Library sharing dialog; only members and eligible groups of the current workspace can be invited`,
          })
        : (0, $.jsx)(i, {
            id: `librarySharing.invite.noEligibleRecipient`,
            defaultMessage: `No matching recipients`,
            description: `Empty result when the email entered in the personal Library sharing dialog is not eligible for sharing`,
          })),
      (t[14] = l.isWorkspace),
      (t[15] = O));
  let k;
  t[16] !== y ||
  t[17] !== _ ||
  t[18] !== n ||
  t[19] !== w ||
  t[20] !== r ||
  t[21] !== p ||
  t[22] !== l.accountId ||
  t[23] !== l.onChange ||
  t[24] !== l.onQueryChange ||
  t[25] !== l.query ||
  t[26] !== l.selected ||
  t[27] !== b ||
  t[28] !== f ||
  t[29] !== T ||
  t[30] !== E ||
  t[31] !== D ||
  t[32] !== O
    ? ((k = (0, $.jsx)(q, {
        accountId: l.accountId,
        getTeamRecipient: r,
        getGroupRecipient: n,
        ariaDescribedBy: y,
        disabled: _,
        placeholder: T,
        selectedOptions: l.selected,
        getRemoveLabel: w,
        options: E,
        onChange: l.onChange,
        query: l.query,
        onQueryChange: l.onQueryChange,
        isLoading: p,
        searchFailed: f,
        loadingLabel: D,
        emptyMessage: O,
        trailingContent: b,
      })),
      (t[16] = y),
      (t[17] = _),
      (t[18] = n),
      (t[19] = w),
      (t[20] = r),
      (t[21] = p),
      (t[22] = l.accountId),
      (t[23] = l.onChange),
      (t[24] = l.onQueryChange),
      (t[25] = l.query),
      (t[26] = l.selected),
      (t[27] = b),
      (t[28] = f),
      (t[29] = T),
      (t[30] = E),
      (t[31] = D),
      (t[32] = O),
      (t[33] = k))
    : (k = t[33]);
  let A;
  t[34] !== v || t[35] !== h
    ? ((A =
        v == null
          ? null
          : (0, $.jsx)(`p`, { id: h, className: `text-sm text-danger`, role: `alert`, children: v })),
      (t[34] = v),
      (t[35] = h),
      (t[36] = A))
    : (A = t[36]);
  let j;
  t[37] !== l.canSearchMembers || t[38] !== l.isWorkspace
    ? ((j =
        l.isWorkspace && !l.canSearchMembers
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-codex-description`,
              children: (0, $.jsx)(i, {
                id: `librarySharing.invite.searchRestricted`,
                defaultMessage: `Your workspace doesn't allow searching for members`,
                description: `Explanation below the disabled recipient input in the Library sharing dialog when workspace policy prevents member search`,
              }),
            })
          : null),
      (t[37] = l.canSearchMembers),
      (t[38] = l.isWorkspace),
      (t[39] = j))
    : (j = t[39]);
  let M;
  return (
    t[40] !== k || t[41] !== A || t[42] !== j
      ? ((M = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-2`, children: [k, A, j] })),
        (t[40] = k),
        (t[41] = A),
        (t[42] = j),
        (t[43] = M))
      : (M = t[43]),
    M
  );
}
function Ze(e) {
  return {
    ...e,
    Icon: e.recipient.recipient_type === `principal` && e.recipient.principal_type === `group` ? c : void 0,
  };
}
function Qe(e) {
  return { value: e };
}
function $e(e) {
  return (0, $.jsx)(ge, { permission: e });
}
function et(e) {
  return e != null;
}
function tt(e) {
  return !e.isValid;
}
var Q, nt, $;
function rt() {
  return (rt = e(() => {
    ((Q = v()), f(), (nt = b()), h(), l(), ae(), ve(), Y(), he(), r(), k(), He(), ($ = y()));
  }))();
}
export {
  He as a,
  ke as c,
  U as d,
  W as f,
  Be as i,
  K as l,
  rt as n,
  q as o,
  X as r,
  Y as s,
  Ue as t,
  G as u,
};
//# sourceMappingURL=recipient-picker-caea7e148b2f.js.map
