import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bst as n,
  CNt as r,
  FBt as i,
  GLt as a,
  HFt as o,
  LNt as s,
  MNt as c,
  Mst as l,
  NNt as u,
  PBt as d,
  TY as f,
  XOt as p,
  ZSt as m,
  iMt as h,
  jst as g,
  nCt as _,
  oMt as v,
  okt as y,
  tkt as b,
  yK as x,
  zst as S,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GH as C,
  Hcn as w,
  IIr as T,
  KH as E,
  LIr as D,
  Tcn as O,
  Ucn as k,
  imr as A,
  oon as j,
  rmr as M,
  sBr as ee,
  son as te,
  tLr as ne,
  wcn as re,
} from "./app-initial-ad16eaadf81f.js";
import { a as ie, i as ae, r as oe } from "./use-workspace-users-2d1e66aa1ddc.js";
import { n as se, r as ce, t as le } from "./workspace-team-recipient-suggestions-ab23121c2709.js";
import { a as ue, i as de, o as N, r as fe, t as pe } from "./member-count-bfd3da2c099a.js";
import { t as P } from "./modal-permission-dropdown-6dcd00cb5144.js";
import { n as me, t as he } from "./role-label-f76597fae88b.js";
import { f as ge, h as _e } from "./model-96b25fa95571.js";
import { t as F } from "./permission-dropdown-5c542829d6d7.js";
import { n as ve } from "./people-picks-972d817ff3d6.js";
var ye, be, xe, I, Se, L, R, z;
function B() {
  return (B = e(() => {
    ((ye = `_Avatar_8akn5_1`),
      (be = `_AvatarImageContainer_8akn5_114`),
      (xe = `_AvatarImage_8akn5_114`),
      (I = `_AvatarInitial_8akn5_146`),
      (Se = `_AvatarOverflowCount_8akn5_151`),
      (L = `_AvatarOverflowCountSymbol_8akn5_174`),
      (R = `_AvatarIcon_8akn5_180`),
      (z = {
        Avatar: ye,
        AvatarImageContainer: be,
        AvatarImage: xe,
        AvatarInitial: I,
        AvatarOverflowCount: Se,
        AvatarOverflowCountSymbol: L,
        AvatarIcon: R,
      }));
  }))();
}
var V, Ce, H, U, W, we, Te, Ee, De;
function Oe() {
  return (Oe = e(() => {
    (u(),
      (V = i()),
      h(),
      B(),
      (Ce = i()),
      (H = s()),
      (U = [`blue`, `red`, `green`, `light-blue`, `yellow`, `gray`, `orange`]),
      (W = (e) => {
        let t = Te(e.imageUrl);
        return (0, Ce.createElement)(we, { ...e, imageUrl: t, key: t });
      }),
      (we = (e) => {
        let {
            className: t,
            size: n,
            overflowCount: r,
            name: i,
            color: a = `secondary`,
            colorFrom: o,
            variant: s = `soft`,
            imageUrl: l,
            Icon: u,
            tooltipComponent: d,
            ...f
          } = e,
          [p, m] = (0, V.useState)(),
          h = !!(f.onPointerDown || f.onClick),
          g = h ? `button` : `span`,
          _ = o == null ? void 0 : U[o.split(``).reduce((e, t) => e + t.charCodeAt(0), 0) % U.length],
          y = (0, H.jsx)(g, {
            className: c(z.Avatar, t),
            style: v({
              "avatar-size": n,
              "avatar-background-color": _ == null ? void 0 : `var(--color-avatar-${_})`,
              "avatar-text-color": _ == null ? void 0 : `var(--color-avatar-foreground)`,
            }),
            role: h ? void 0 : `presentation`,
            "aria-label": h ? i : void 0,
            "data-color": a,
            "data-variant": s,
            type: h ? `button` : void 0,
            ...f,
            children:
              l && p !== `error`
                ? (0, H.jsx)(Ee, { status: p, url: l, onError: () => m(`error`), onLoad: () => m(`loaded`) })
                : u
                  ? (0, H.jsx)(u, { className: z.AvatarIcon })
                  : r
                    ? (0, H.jsx)(De, { count: r })
                    : (0, H.jsx)(`span`, {
                        className: z.AvatarInitial,
                        children: i?.charAt(0).toUpperCase(),
                      }),
          });
        return !i || !d ? y : (0, H.jsx)(d, { content: i, children: y });
      }),
      (Te = (e) => {
        if (e && !(e.includes(`gravatar.com`) && e.includes(`cdn.auth0.com`))) return e;
      }),
      (Ee = ({ url: e, status: t, onLoad: n, onError: r }) =>
        (0, H.jsx)(`span`, {
          className: z.AvatarImageContainer,
          children: (0, H.jsx)(`img`, {
            src: e,
            className: z.AvatarImage,
            "data-loaded": t === `loaded` ? `` : void 0,
            onLoad: n,
            onError: r,
            alt: ``,
            role: `presentation`,
          }),
        })),
      (De = ({ count: e }) => {
        let t = new Intl.NumberFormat(`en`, {
          notation: `compact`,
          compactDisplay: `short`,
          maximumFractionDigits: 0,
        })
          .format(e)
          .toLocaleLowerCase();
        return (0, H.jsxs)(`span`, {
          className: z.AvatarOverflowCount,
          "data-letter-count": t.length,
          children: [(0, H.jsx)(`span`, { className: z.AvatarOverflowCountSymbol, children: `+` }), t],
        });
      }));
  }))();
}
function ke() {
  return (ke = e(() => {
    Oe();
  }))();
}
function Ae(e, t, n) {
  let r = e.structure === `workspace`,
    i = ee(e.plan_type),
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
function je() {
  return (je = e(() => {
    ne();
  }))();
}
function G(e) {
  let t = (0, Re.c)(26),
    {
      accountId: n,
      ariaDescribedBy: r,
      disabled: i,
      emptyMessage: a,
      getRemoveLabel: o,
      getGroupRecipient: s,
      getTeamRecipient: c,
      isLoading: l,
      loadingLabel: u,
      options: d,
      placeholder: f,
      query: p,
      recentOptions: m,
      searchFailed: h,
      contextualPicks: g,
      selectionDisplay: v,
      selectedOptions: b,
      trailingContent: x,
      onChange: S,
      onQueryChange: w,
    } = e,
    E = v === void 0 ? `input` : v,
    D = y(),
    [k, j] = (0, Be.useState)(null),
    { data: M } = O(),
    { accountId: ee } = A(),
    te = M?.accounts?.find((e) => e.id === n),
    ne = _(ce, n ?? ``),
    re = (ne && c != null) || s != null,
    ie;
  t[0] === re ? (ie = t[1]) : ((ie = { enabled: re }), (t[0] = re), (t[1] = ie));
  let { data: oe, isError: le } = _(T, n ?? ``, ie),
    de = te == null ? void 0 : Ae(te, oe, le),
    N = ee === n && s != null && de?.allowGroups === !0,
    P;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = { includeMemberCounts: !0 }), (t[2] = P))
    : (P = t[2]);
  let { data: me, isError: he, isPending: ge, isFetching: _e } = ae(N && !i ? p : ``, P),
    F = ne && c != null && de?.canSearchMembers === !0,
    { data: ye, isError: be, isLoading: xe } = _(se, n ?? ``, { enabled: F && !i }) ?? {},
    I;
  t[3] !== F || t[4] !== D || t[5] !== f?.people || t[6] !== f?.peopleAndTeams
    ? ((I = F
        ? (f?.peopleAndTeams ??
          D.formatMessage({
            id: `shareRecipientPicker.peopleAndTeamsLabel`,
            defaultMessage: `Add people or teams`,
            description: `Placeholder and accessible label for a sharing picker that can invite workspace people and teams`,
          }))
        : (f?.people ??
          D.formatMessage({
            id: `shareRecipientPicker.peopleLabel`,
            defaultMessage: `Add people`,
            description: `Placeholder and accessible label for a sharing picker that can invite people only because team discovery is unavailable`,
          }))),
      (t[3] = F),
      (t[4] = D),
      (t[5] = f?.people),
      (t[6] = f?.peopleAndTeams),
      (t[7] = I))
    : (I = t[7]);
  let Se = I,
    L = p.trim().toLocaleLowerCase(),
    R = g != null,
    z;
  t[8] === b ? (z = t[9]) : ((z = new Set(b.map(Le))), (t[8] = b), (t[9] = z));
  let B = z,
    V =
      L === `` && !i
        ? (0, ze.default)(
            (m ?? []).filter((e) => {
              let { id: t, accessStatus: n } = e;
              return n == null && !B.has(t);
            }),
            `id`,
          ).slice(0, 5)
        : [],
    Ce = new Set(V.map(Ie)),
    H =
      F && !be
        ? (ye ?? [])
            .filter((e) => e.name.toLocaleLowerCase().includes(L))
            .map((e) => ({ ...c(e), avatar: (0, q.jsx)(ue, { avatar: e.avatar, size: `sm` }) }))
            .filter((e) => {
              let { id: t, accessStatus: n } = e;
              return (L !== `` || n == null) && !B.has(t) && !Ce.has(t);
            })
        : [],
    U = new Set(H.map(Fe)),
    W =
      L !== `` && N && !i && !he
        ? (0, ze.default)(
            (me ?? [])
              .filter((e) => e.system_use_case == null && (de?.allowScimGroups || !e.is_scim_managed))
              .map((e) => ({
                ...s(e),
                secondaryLabel: pe(D, e.num_members),
                avatar: (0, q.jsx)(fe, { groupId: e.id, size: `sm` }),
              }))
              .filter((e) => {
                let { id: t } = e;
                return !U.has(t) && !B.has(t);
              }),
            `id`,
          )
        : [],
    we = (e) =>
      e?.filter((e) => {
        let { id: t } = e;
        return !U.has(t) && !B.has(t) && !Ce.has(t);
      }),
    Te = L === `` ? [] : (we(d) ?? []);
  g != null &&
    (Te = ve(
      p,
      [...g, d].map((e) => we(e)?.map(Pe)),
    ).map(Ne));
  let Ee =
    V.length === 0 && H.length === 0 && W.length === 0
      ? void 0
      : [
          {
            id: `recent`,
            label: D.formatMessage({
              id: `shareRecipientPicker.recent`,
              defaultMessage: `Recent`,
              description: `Heading for people the user recently shared a Page or Space with, shown when the sharing search input is empty`,
            }),
            options: V.map(K),
          },
          {
            id: `teams`,
            label:
              L === ``
                ? D.formatMessage({
                    id: `shareRecipientPicker.yourTeams`,
                    defaultMessage: `Your teams`,
                    description: `Heading for the user's Teams suggested in the empty Library, Page, or Space sharing recipient picker`,
                  })
                : D.formatMessage({
                    id: `shareRecipientPicker.teams`,
                    defaultMessage: `Teams`,
                    description: `Heading for matching Teams in Library, Page, or Space sharing search results`,
                  }),
            options: H.map(K),
          },
          {
            id: `groups`,
            label: D.formatMessage({
              id: `shareRecipientPicker.groups`,
              defaultMessage: `Groups`,
              description: `Heading for matching administrative and SCIM groups in sharing search results`,
            }),
            options: W.map(K),
          },
          {
            id: `directory`,
            label: D.formatMessage({
              id: `shareRecipientPicker.people`,
              defaultMessage: `People`,
              description: `Heading for people matching the workspace directory alongside Teams in the sharing recipient picker`,
            }),
            options: Te.map(K),
          },
        ];
  R && Ee?.sort(Me);
  let De = h && (L !== `` || R),
    Oe = F && be,
    ke = L !== `` && N && he,
    je = De || Oe || ke,
    G = ((L !== `` || R) && l) || (L !== `` && N && (ge || _e)) || (F && xe),
    J = a;
  L === `` ? (J = null) : G ? (J = u) : (l || je) && (J = null);
  let Ve;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (e) => {
        j(e?.closest(`[role="dialog"]`) ?? null);
      }),
      (t[10] = Ve))
    : (Ve = t[10]);
  let He;
  t[11] !== b || t[12] !== E
    ? ((He = E === `external` ? [] : b.map(K)), (t[11] = b), (t[12] = E), (t[13] = He))
    : (He = t[13]);
  let Ue;
  t[14] === o
    ? (Ue = t[15])
    : ((Ue = (e) => {
        let { recipient: t } = e;
        return o(t);
      }),
      (t[14] = o),
      (t[15] = Ue));
  let Y, X;
  t[16] !== S || t[17] !== b
    ? ((Y = (e) => {
        let { recipient: t } = e;
        S((0, ze.default)([...b, t], `id`));
      }),
      (X = (e) => {
        let { id: t } = e;
        S(b.filter((e) => e.id !== t));
      }),
      (t[16] = S),
      (t[17] = b),
      (t[18] = Y),
      (t[19] = X))
    : ((Y = t[18]), (X = t[19]));
  let Z;
  t[20] !== u || t[21] !== G
    ? ((Z = G
        ? (0, q.jsx)(`span`, { className: `sr-only`, role: `status`, "aria-label": u, children: u })
        : null),
      (t[20] = u),
      (t[21] = G),
      (t[22] = Z))
    : (Z = t[22]);
  let We;
  return (
    t[23] !== Z || t[24] !== x
      ? ((We = (0, q.jsxs)(q.Fragment, { children: [Z, x] })), (t[23] = Z), (t[24] = x), (t[25] = We))
      : (We = t[25]),
    (0, q.jsx)(`div`, {
      ref: Ve,
      className: `flex min-w-0 flex-1 flex-col gap-2`,
      children: (0, q.jsx)(C, {
        preserveHighlightOnItemsChange: !R || `user`,
        ariaLabel: Se,
        ariaDescribedBy: r,
        searchStatus: { peopleLoading: R && l && !De, groupsError: ke, teamsError: Oe },
        disabled: i,
        selectedOptions: He,
        getRemoveLabel: Ue,
        options: Te.map(K),
        optionSections: Ee,
        portalContainer: k,
        query: p,
        onQueryChange: w,
        showLoadingDropdown: !1,
        showSuggestionsOnFocus: !0,
        onSelectOption: Y,
        onRemoveOption: X,
        placeholder: Se,
        trailingContent: We,
        emptyMessage: J,
      }),
    })
  );
}
function Me(e, t) {
  return e.id === `directory` ? -1 : +(t.id === `directory`);
}
function Ne(e) {
  let { recipient: t } = e;
  return t;
}
function Pe(e) {
  return { id: e.id, name: e.label, email: e.secondaryLabel, recipient: e };
}
function Fe(e) {
  let { id: t } = e;
  return t;
}
function Ie(e) {
  let { id: t } = e;
  return t;
}
function Le(e) {
  let { id: t } = e;
  return t;
}
function K(e) {
  let t;
  return (
    e.accessStatus === `pending`
      ? (t = (0, q.jsx)(b, {
          id: `shareRecipientPicker.invitationPending`,
          defaultMessage: `Invitation pending`,
          description: `Disabled sharing search result for a person or group with an invitation awaiting acceptance`,
        }))
      : e.accessStatus === `existing` &&
        (t = (0, q.jsx)(b, {
          id: `shareRecipientPicker.alreadyHasAccess`,
          defaultMessage: `Already has access`,
          description: `Disabled sharing search result for an owner or existing person or group collaborator`,
        })),
    {
      id: e.id,
      label: e.label,
      secondaryLabel: e.secondaryLabel,
      avatar: (0, q.jsx)(`span`, {
        "aria-hidden": `true`,
        children:
          e.avatar ??
          (e.Icon == null
            ? (0, q.jsx)(j, { alt: ``, colorKey: e.colorKey, name: e.label, size: `sm`, src: null })
            : (0, q.jsx)(W, { name: e.label, colorFrom: e.id, Icon: e.Icon })),
      }),
      disabledReason: t,
      recipient: e,
    }
  );
}
var Re, ze, Be, q;
function J() {
  return (J = e(() => {
    ((Re = d()),
      ke(),
      (ze = t(r(), 1)),
      m(),
      (Be = i()),
      p(),
      le(),
      D(),
      M(),
      re(),
      te(),
      oe(),
      de(),
      E(),
      N(),
      je(),
      (q = s()));
  }))();
}
function Ve({ query: e, selected: t, currentEmail: n, existingEmails: r }) {
  let i = [...t],
    a = new Set([...r, n ?? ``].map((e) => e.trim().toLowerCase())),
    o = new Set(t.map((e) => e.id)),
    s = !1;
  for (let t of e.split(Y)) {
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
        isValid: X.safeParse(e).success,
      }));
  }
  return { selected: i, rejectedExisting: s };
}
function He(e, t, n) {
  return e.some(({ recipient: e, secondaryLabel: r }) =>
    e.recipient_type === `email`
      ? t.has(e.email.trim().toLowerCase())
      : n.has(`${e.principal_type ?? `user`}:${e.principal_id}`) ||
        (r != null && t.has(r.trim().toLowerCase())),
  );
}
function Ue(e, t, n) {
  return {
    existingPrincipalKeys: new Set([
      _e(e.owner.principal),
      _e(e.viewer.principal),
      ...(t?.shares.flatMap((e) =>
        e.recipient.recipient_type === `principal`
          ? [`${e.recipient.principal_type ?? `user`}:${e.recipient.principal_id}`]
          : [],
      ) ?? []),
      ...(n?.collaborators.map(({ principal: e }) => _e(e)) ?? []),
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
var Y, X;
function Z() {
  return (Z = e(() => {
    (o(), ge(), (Y = /[\s,;]+/), (X = a()));
  }))();
}
function We(e) {
  let t = (0, Q.c)(5);
  if (e.isWorkspace && e.canSearchMembers) {
    let n = `${e.accountId}:${e.allowGroups}`,
      r;
    return (
      t[0] !== e || t[1] !== n
        ? ((r = (0, $.jsx)(Ke, { ...e }, n)), (t[0] = e), (t[1] = n), (t[2] = r))
        : (r = t[2]),
      r
    );
  }
  let n;
  return (
    t[3] === e
      ? (n = t[4])
      : ((n = e.isWorkspace ? (0, $.jsx)(Ze, { ...e }) : (0, $.jsx)(Ge, { ...e })), (t[3] = e), (t[4] = n)),
    n
  );
}
function Ge(e) {
  let t = (0, Q.c)(35),
    n;
  t[0] === e.query ? (n = t[1]) : ((n = e.query.trim().toLowerCase()), (t[0] = e.query), (t[1] = n));
  let r = n,
    i = k(r, 150),
    a;
  t[2] !== e.currentEmail || t[3] !== e.existingEmails || t[4] !== r
    ? ((a = Ve({ query: r, selected: [], currentEmail: e.currentEmail, existingEmails: e.existingEmails })),
      (t[2] = e.currentEmail),
      (t[3] = e.existingEmails),
      (t[4] = r),
      (t[5] = a))
    : (a = t[5]);
  let o = a.selected,
    s;
  t[6] !== o || t[7] !== e.disabled || t[8] !== e.selected || t[9] !== r
    ? ((s =
        !e.disabled &&
        o.length === 1 &&
        o[0]?.isValid === !0 &&
        o[0].label === r &&
        !e.selected.some((e) => {
          let { id: t } = e;
          return t === o[0]?.id;
        })),
      (t[6] = o),
      (t[7] = e.disabled),
      (t[8] = e.selected),
      (t[9] = r),
      (t[10] = s))
    : (s = t[10]);
  let c = s,
    u;
  t[11] !== e.accountId || t[12] !== e.currentPrincipalId || t[13] !== r
    ? ((u = [`library-sharing-recipient`, e.accountId, e.currentPrincipalId, r]),
      (t[11] = e.accountId),
      (t[12] = e.currentPrincipalId),
      (t[13] = r),
      (t[14] = u))
    : (u = t[14]);
  let d = c && r === i,
    f;
  t[15] !== e || t[16] !== r
    ? ((f = (t) => {
        let { signal: n } = t;
        return e.resolveRecipient(r, AbortSignal.any([n, AbortSignal.timeout(7e3)]));
      }),
      (t[15] = e),
      (t[16] = r),
      (t[17] = f))
    : (f = t[17]);
  let p;
  t[18] !== u || t[19] !== d || t[20] !== f
    ? ((p = {
        queryKey: u,
        enabled: d,
        staleTime: S.ONE_MINUTE,
        networkMode: `always`,
        retry: !1,
        queryFn: f,
      }),
      (t[18] = u),
      (t[19] = d),
      (t[20] = f),
      (t[21] = p))
    : (p = t[21]);
  let { data: m, isFetching: h, isError: g } = l(p),
    _;
  t[22] !== c ||
  t[23] !== o ||
  t[24] !== m?.eligible ||
  t[25] !== i ||
  t[26] !== g ||
  t[27] !== h ||
  t[28] !== r
    ? ((_ = c && !h && !g && r === i && m?.eligible ? o : []),
      (t[22] = c),
      (t[23] = o),
      (t[24] = m?.eligible),
      (t[25] = i),
      (t[26] = g),
      (t[27] = h),
      (t[28] = r),
      (t[29] = _))
    : (_ = t[29]);
  let v = c && (h || r !== i),
    y;
  return (
    t[30] !== g || t[31] !== e || t[32] !== _ || t[33] !== v
      ? ((y = (0, $.jsx)(Ze, { ...e, options: _, isLoading: v, searchFailed: g })),
        (t[30] = g),
        (t[31] = e),
        (t[32] = _),
        (t[33] = v),
        (t[34] = y))
      : (y = t[34]),
    y
  );
}
function Ke(e) {
  let t = (0, Q.c)(34),
    { data: n, isFetching: r, isPending: i, isError: a } = ie(e.disabled ? `` : e.query),
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
    ? ((u = new Set([...e.existingEmails, l].map(Xe))), (t[3] = e.existingEmails), (t[4] = l), (t[5] = u))
    : (u = t[5]);
  let d = u,
    f;
  t[6] === e.selected ? (f = t[7]) : ((f = new Set(e.selected.map(Ye))), (t[6] = e.selected), (t[7] = f));
  let p = f,
    m;
  t[8] === e.selected ? (m = t[9]) : ((m = new Set(e.selected.flatMap(Je))), (t[8] = e.selected), (t[9] = m));
  let h = m,
    g,
    _;
  if (t[10] !== d || t[11] !== c || t[12] !== e.shares?.shares || t[13] !== h || t[14] !== p || t[15] !== n) {
    let r = e.shares?.shares.filter(qe);
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
      ? ((S = (0, $.jsx)(Ze, {
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
function qe(e) {
  return e.status === `pending`;
}
function Je(e) {
  return e.secondaryLabel == null ? [] : [e.secondaryLabel.trim().toLowerCase()];
}
function Ye(e) {
  return e.id;
}
function Xe(e) {
  return e.trim().toLowerCase();
}
function Ze(e) {
  let t = (0, Q.c)(44),
    {
      getGroupRecipient: n,
      getTeamRecipient: r,
      options: i,
      queryAlreadyAdded: a,
      searchFailed: o,
      isLoading: s,
      ...c
    } = e,
    l = a !== void 0 && a,
    u = o !== void 0 && o,
    d = s !== void 0 && s,
    f = y(),
    p = (0, rt.useId)(),
    m = c.selected.some(nt),
    h = c.disabled || (c.isWorkspace && !c.canSearchMembers),
    g = null;
  if (m) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(b, {
          id: `librarySharing.invite.invalidEmails`,
          defaultMessage: `Remove invalid email addresses before inviting`,
          description: `Inline error in the Library sharing dialog after invalid email addresses have become selected tokens; the user must remove those tokens before sending invitations`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (g = e));
  } else if (l) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(b, {
          id: `librarySharing.invite.alreadyAdded`,
          defaultMessage: `This person already has access or is selected`,
          description: `Inline feedback in the Library sharing dialog when an entered email belongs to the owner, an existing collaborator, or an already selected invitee`,
        })),
        (t[1] = e))
      : (e = t[1]),
      (g = e));
  }
  let _ = [c.ariaDescribedBy, g == null ? void 0 : p].filter(tt).join(` `) || void 0,
    v = null;
  c.selected.length > 0 &&
    c.role != null &&
    c.allowedRoles != null &&
    (v =
      c.allowedRoles.length > 1
        ? (0, $.jsx)(P, {
            indicatorVariant: `checkmark`,
            variant: `inline`,
            renderLabel: et,
            disabled: h,
            options: c.allowedRoles.map($e),
            value: c.role,
            onChange: c.onRoleChange,
          })
        : (0, $.jsx)(`span`, {
            className: `text-tertiary`,
            children: (0, $.jsx)(he, { permission: c.role }),
          }));
  let x;
  t[2] === f
    ? (x = t[3])
    : ((x = f.formatMessage({
        id: `librarySharing.invite.personalPlaceholder`,
        defaultMessage: `Add emails`,
        description: `Placeholder and accessible label in the Library sharing recipient input for personal accounts; users enter an email address and select a validated recipient`,
      })),
      (t[2] = f),
      (t[3] = x));
  let S = x,
    C;
  t[4] === f
    ? (C = t[5])
    : ((C = (e) =>
        f.formatMessage(
          {
            id: `librarySharing.invite.removeSelection`,
            defaultMessage: `Remove {name} from the invitation`,
            description: `Accessible label of a selected Library sharing recipient's remove button; name is the person's display name, group name, or email address`,
          },
          { name: e.label },
        )),
      (t[4] = f),
      (t[5] = C));
  let w = C,
    T;
  t[6] !== S || t[7] !== c.isWorkspace
    ? ((T = c.isWorkspace ? void 0 : { people: S, peopleAndTeams: S }),
      (t[6] = S),
      (t[7] = c.isWorkspace),
      (t[8] = T))
    : (T = t[8]);
  let E;
  t[9] === i ? (E = t[10]) : ((E = i?.map(Qe)), (t[9] = i), (t[10] = E));
  let D;
  t[11] !== f || t[12] !== c.isWorkspace
    ? ((D = c.isWorkspace
        ? f.formatMessage({
            id: `librarySharing.invite.searching`,
            defaultMessage: `Searching workspace members`,
            description: `Accessible status while the Library sharing picker searches the current workspace for recipients`,
          })
        : f.formatMessage({
            id: `librarySharing.invite.searchingRecipients`,
            defaultMessage: `Searching for people`,
            description: `Accessible status while the Library sharing picker checks whether the entered email is eligible for sharing`,
          })),
      (t[11] = f),
      (t[12] = c.isWorkspace),
      (t[13] = D))
    : (D = t[13]);
  let O;
  t[14] === c.isWorkspace
    ? (O = t[15])
    : ((O = c.isWorkspace
        ? (0, $.jsx)(b, {
            id: `librarySharing.invite.noWorkspaceMatches`,
            defaultMessage: `No matching people or teams`,
            description: `Empty search result in the Library sharing dialog; only members and eligible groups of the current workspace can be invited`,
          })
        : (0, $.jsx)(b, {
            id: `librarySharing.invite.noEligibleRecipient`,
            defaultMessage: `No matching recipients`,
            description: `Empty result when the email entered in the personal Library sharing dialog is not eligible for sharing`,
          })),
      (t[14] = c.isWorkspace),
      (t[15] = O));
  let k;
  t[16] !== _ ||
  t[17] !== h ||
  t[18] !== n ||
  t[19] !== w ||
  t[20] !== r ||
  t[21] !== d ||
  t[22] !== c.accountId ||
  t[23] !== c.onChange ||
  t[24] !== c.onQueryChange ||
  t[25] !== c.query ||
  t[26] !== c.selected ||
  t[27] !== v ||
  t[28] !== u ||
  t[29] !== T ||
  t[30] !== E ||
  t[31] !== D ||
  t[32] !== O
    ? ((k = (0, $.jsx)(G, {
        accountId: c.accountId,
        getTeamRecipient: r,
        getGroupRecipient: n,
        ariaDescribedBy: _,
        disabled: h,
        placeholder: T,
        selectedOptions: c.selected,
        getRemoveLabel: w,
        options: E,
        onChange: c.onChange,
        query: c.query,
        onQueryChange: c.onQueryChange,
        isLoading: d,
        searchFailed: u,
        loadingLabel: D,
        emptyMessage: O,
        trailingContent: v,
      })),
      (t[16] = _),
      (t[17] = h),
      (t[18] = n),
      (t[19] = w),
      (t[20] = r),
      (t[21] = d),
      (t[22] = c.accountId),
      (t[23] = c.onChange),
      (t[24] = c.onQueryChange),
      (t[25] = c.query),
      (t[26] = c.selected),
      (t[27] = v),
      (t[28] = u),
      (t[29] = T),
      (t[30] = E),
      (t[31] = D),
      (t[32] = O),
      (t[33] = k))
    : (k = t[33]);
  let A;
  t[34] !== g || t[35] !== p
    ? ((A =
        g == null
          ? null
          : (0, $.jsx)(`p`, { id: p, className: `text-sm text-danger`, role: `alert`, children: g })),
      (t[34] = g),
      (t[35] = p),
      (t[36] = A))
    : (A = t[36]);
  let j;
  t[37] !== c.canSearchMembers || t[38] !== c.isWorkspace
    ? ((j =
        c.isWorkspace && !c.canSearchMembers
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-codex-description`,
              children: (0, $.jsx)(b, {
                id: `librarySharing.invite.searchRestricted`,
                defaultMessage: `Your workspace doesn't allow searching for members`,
                description: `Explanation below the disabled recipient input in the Library sharing dialog when workspace policy prevents member search`,
              }),
            })
          : null),
      (t[37] = c.canSearchMembers),
      (t[38] = c.isWorkspace),
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
function Qe(e) {
  return {
    ...e,
    Icon: e.recipient.recipient_type === `principal` && e.recipient.principal_type === `group` ? x : void 0,
  };
}
function $e(e) {
  return { value: e };
}
function et(e) {
  return (0, $.jsx)(he, { permission: e });
}
function tt(e) {
  return e != null;
}
function nt(e) {
  return !e.isValid;
}
var Q, rt, $;
function it() {
  return (it = e(() => {
    ((Q = d()), g(), (rt = i()), p(), f(), oe(), F(), J(), me(), n(), w(), Z(), ($ = s()));
  }))();
}
export {
  Z as a,
  Ae as c,
  W as d,
  Oe as f,
  He as i,
  je as l,
  it as n,
  G as o,
  Ue as r,
  J as s,
  We as t,
  ke as u,
};
//# sourceMappingURL=recipient-picker-5b8b87b8e1c8.js.map
