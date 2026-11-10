import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  Cot as r,
  Ext as i,
  IDt as a,
  Ixt as o,
  JDt as s,
  NV as c,
  Pxt as l,
  Rpt as u,
  TJ as d,
  VDt as f,
  Vxt as p,
  _O as m,
  _xt as h,
  cO as g,
  dq as _,
  fO as v,
  gO as y,
  jDt as b,
  lO as ee,
  mO as te,
  oO as ne,
  rst as x,
  sO as re,
  t3 as S,
  vO as C,
  vzt as ie,
  wot as w,
  wxt as ae,
  xMt as T,
  yAt as oe,
  yzt as E,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ar as se,
  AV as ce,
  Bmt as le,
  DV as D,
  Dor as ue,
  EV as de,
  Ear as fe,
  Fc as pe,
  G7t as me,
  HV as O,
  Ic as he,
  KMr as ge,
  Kmt as _e,
  NV as ve,
  OV as ye,
  UV as be,
  W7t as xe,
  XMr as Se,
  Ymr as Ce,
  ann as we,
  csn as k,
  ehr as Te,
  fur as Ee,
  jV as De,
  kV as A,
  onn as j,
  pur as Oe,
  qMr as M,
  tNr as ke,
  xsn as N,
} from "./app-initial-5851df3f6cb1.js";
import { a as Ae, r as P } from "./use-workspace-users-9ff632adf20a.js";
import { n as je, t as Me } from "./access-list-99033c7522ef.js";
import { n as Ne } from "./dialog-utils-21c4d759328d.js";
import { t as Pe } from "./modal-permission-dropdown-75a4787ca1b8.js";
import { i as Fe, t as Ie } from "./space-1fd481862d3e.js";
import { n as Le, o as Re, s as ze, t as Be } from "./recipient-picker-caea7e148b2f.js";
import { n as Ve, t as F } from "./role-label-47a44c95e79a.js";
import { c as He, f as I } from "./model-a4d407e1a4c5.js";
import { t as Ue } from "./permission-dropdown-e25fe01e48c3.js";
import { n as We, t as Ge } from "./popover-51c476f4ed69.js";
function Ke(e) {
  let n = (0, L.c)(27),
    { open: r, returnFocusRef: i, onOpenChange: o, onDiscard: s } = e,
    c;
  n[0] === o
    ? (c = n[1])
    : ((c = (e) => {
        (e.preventDefault(), e.stopPropagation(), o(!1));
      }),
      (n[0] = o),
      (n[1] = c));
  let l;
  n[2] === i
    ? (l = n[3])
    : ((l = (e) => {
        (e.preventDefault(), i.current?.focus({ preventScroll: !0 }));
      }),
      (n[2] = i),
      (n[3] = l));
  let u;
  n[4] !== c || n[5] !== l
    ? ((u = { onEscapeKeyDown: c, onCloseAutoFocus: l }), (n[4] = c), (n[5] = l), (n[6] = u))
    : (u = n[6]);
  let d;
  n[7] === s
    ? (d = n[8])
    : ((d = (e) => {
        (e.preventDefault(), s());
      }),
      (n[7] = s),
      (n[8] = d));
  let f;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, R.jsx)(m, {
        children: (0, R.jsx)(a, {
          id: `codex.space.creation.discardTitle`,
          defaultMessage: `Discard changes?`,
          description: `Title of the confirmation dialog before closing a Create Space form with unsaved changes`,
        }),
      })),
      (n[9] = f))
    : (f = n[9]);
  let p;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, R.jsx)(ee, {
        children: (0, R.jsx)(g, {
          title: f,
          subtitle: (0, R.jsx)(y, {
            children: (0, R.jsx)(a, {
              id: `codex.space.creation.discardDescription`,
              defaultMessage: `Your changes will be lost`,
              description: `Warning that closing the Create Space form discards its entered name, icon, and invitation selections`,
            }),
          }),
        }),
      })),
      (n[10] = p))
    : (p = n[10]);
  let h;
  n[11] === o ? (h = n[12]) : ((h = () => o(!1)), (n[11] = o), (n[12] = h));
  let _;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, R.jsx)(a, {
        id: `codex.space.creation.keepEditing`,
        defaultMessage: `Keep editing`,
        description: `Button that returns to the Create Space form while preserving all entered changes`,
      })),
      (n[13] = _))
    : (_ = n[13]);
  let v;
  n[14] === h
    ? (v = n[15])
    : ((v = (0, R.jsx)(t, { color: `secondary`, type: `button`, onClick: h, children: _ })),
      (n[14] = h),
      (n[15] = v));
  let b;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, R.jsx)(t, {
        color: `danger`,
        type: `submit`,
        children: (0, R.jsx)(a, {
          id: `codex.space.creation.discard`,
          defaultMessage: `Discard changes`,
          description: `Button that discards the unsaved Create Space form and closes it`,
        }),
      })),
      (n[16] = b))
    : (b = n[16]);
  let x;
  n[17] === v
    ? (x = n[18])
    : ((x = (0, R.jsx)(ee, { children: (0, R.jsxs)(re, { children: [v, b] }) })), (n[17] = v), (n[18] = x));
  let S;
  n[19] !== x || n[20] !== d
    ? ((S = (0, R.jsxs)(ne, { as: `form`, onSubmit: d, children: [p, x] })),
      (n[19] = x),
      (n[20] = d),
      (n[21] = S))
    : (S = n[21]);
  let C;
  return (
    n[22] !== o || n[23] !== r || n[24] !== S || n[25] !== u
      ? ((C = (0, R.jsx)(te, {
          open: r,
          contentProps: u,
          showDialogClose: !1,
          size: `compact`,
          onOpenChange: o,
          children: S,
        })),
        (n[22] = o),
        (n[23] = r),
        (n[24] = S),
        (n[25] = u),
        (n[26] = C))
      : (C = n[26]),
    C
  );
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = ie()), b(), S(), C(), v(), (R = T()));
  }))();
}
function B(e) {
  let t = (0, Qe.c)(132),
    { createSpace: i, onStarted: s, onClose: l, onCloseAutoFocus: d } = e,
    m = o(r),
    h = f(),
    { email: g } = Oe(),
    v = p(ge),
    y = (0, V.useId)(),
    b = (0, V.useId)(),
    te = (0, V.useRef)(null),
    ne;
  t[0] === m ? (ne = t[1]) : ((ne = () => m.get(ue)), (t[0] = m), (t[1] = ne));
  let [x] = (0, V.useState)(ne),
    re;
  t[2] === m ? (re = t[3]) : ((re = () => m.get(Se)), (t[2] = m), (t[3] = re));
  let [S] = (0, V.useState)(re),
    [C, ie] = (0, V.useState)(``),
    [w, ae] = (0, V.useState)(!1),
    T = p(se),
    [E, le] = (0, V.useState)(null),
    [D, fe] = (0, V.useState)(!1),
    [pe, me] = (0, V.useState)(!1),
    [O, ve] = (0, V.useState)(``),
    [k, Te] = (0, V.useState)(!1),
    Ee;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ee = []), (t[4] = Ee)) : (Ee = t[4]);
  let [A, j] = (0, V.useState)(Ee),
    [M, ke] = (0, V.useState)(`role-library-folder-editor`),
    N = p(_e),
    P = N === `available`,
    { data: je, isPending: Ie, isError: Le } = Ae(P && k && !v ? O : ``),
    ze;
  t[5] !== M || t[6] !== S || t[7] !== je
    ? ((ze = je
        ?.filter((e) => e.account_user_id.split(`__`)[0] !== S?.split(`__`)[0])
        .map((e) => ({
          ...Ne(e),
          isValid: !0,
          roleId: M,
          recipient: { recipient_type: `principal`, principal_type: `user`, principal_id: e.account_user_id },
        }))),
      (t[5] = M),
      (t[6] = S),
      (t[7] = je),
      (t[8] = ze))
    : (ze = t[8]);
  let Ve = ze,
    F;
  t[9] !== A || t[10] !== w || t[11] !== M || t[12] !== C || t[13] !== E?.kind
    ? ((F = () =>
        C !== `` || E?.kind === `icon` || A.length > 0 || w || M !== `role-library-folder-editor`
          ? (me(!0), `deny`)
          : `allow`),
      (t[9] = A),
      (t[10] = w),
      (t[11] = M),
      (t[12] = C),
      (t[13] = E?.kind),
      (t[14] = F))
    : (F = t[14]);
  let I = F,
    Ue = D || pe,
    Ge;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (0, H.jsx)(a, {
        id: `codex.space.creation.title`,
        defaultMessage: `Create a space`,
        description: `Title of the dialog for creating a Space with optional people and Team invitations. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
      })),
      (t[15] = Ge))
    : (Ge = t[15]);
  let L;
  t[16] !== T || t[17] !== D || t[18] !== w
    ? ((L =
        (T || w) &&
        (0, H.jsx)(`div`, {
          className: `relative me-auto flex items-center gap-2 select-none`,
          children: (0, H.jsx)(he, {
            checked: w,
            onCheckedChange: ae,
            disabled: D,
            label: (0, H.jsx)(a, {
              id: `codex.space.creation.workspaceDefault`,
              defaultMessage: `Make it workspace default space`,
              description: `Checkbox offered to workspace admins when creating a Space. The selected Space will appear for everyone in the workspace.`,
            }),
          }),
        })),
      (t[16] = T),
      (t[17] = D),
      (t[18] = w),
      (t[19] = L))
    : (L = t[19]);
  let R;
  t[20] !== l || t[21] !== I
    ? ((R = () => {
        I() === `allow` && l();
      }),
      (t[20] = l),
      (t[21] = I),
      (t[22] = R))
    : (R = t[22]);
  let z;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, H.jsx)(a, {
        id: `codex.space.sidebar.spaceDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels creating a shared Space`,
      })),
      (t[23] = z))
    : (z = t[23]);
  let B;
  t[24] !== D || t[25] !== R
    ? ((B = (0, H.jsx)(oe, {
        color: `secondary`,
        variant: `outline`,
        size: `xl`,
        disabled: D,
        type: `button`,
        onClick: R,
        children: z,
      })),
      (t[24] = D),
      (t[25] = R),
      (t[26] = B))
    : (B = t[26]);
  let U;
  t[27] !== T || t[28] !== P || t[29] !== A || t[30] !== D || t[31] !== w || t[32] !== C
    ? ((U = C.trim().length === 0 || D || (w && !T) || A.some(Ze) || (A.length > 0 && !P)),
      (t[27] = T),
      (t[28] = P),
      (t[29] = A),
      (t[30] = D),
      (t[31] = w),
      (t[32] = C),
      (t[33] = U))
    : (U = t[33]);
  let et;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = (0, H.jsx)(a, {
        id: `codex.space.creation.submit`,
        defaultMessage: `Create`,
        description: `Button that creates the named team Space and invites the selected people and Teams`,
      })),
      (t[34] = et))
    : (et = t[34]);
  let W;
  t[35] === U
    ? (W = t[36])
    : ((W = (0, H.jsx)(oe, { color: `primary`, size: `xl`, disabled: U, type: `submit`, children: et })),
      (t[35] = U),
      (t[36] = W));
  let G;
  t[37] !== B || t[38] !== W || t[39] !== L
    ? ((G = (0, H.jsxs)(H.Fragment, { children: [L, B, W] })),
      (t[37] = B),
      (t[38] = W),
      (t[39] = L),
      (t[40] = G))
    : (G = t[40]);
  let K;
  t[41] !== x ||
  t[42] !== T ||
  t[43] !== P ||
  t[44] !== i ||
  t[45] !== A ||
  t[46] !== D ||
  t[47] !== w ||
  t[48] !== s ||
  t[49] !== m ||
  t[50] !== C ||
  t[51] !== E ||
  t[52] !== S
    ? ((K = () => {
        let e = C.trim();
        if (
          e.length === 0 ||
          D ||
          (w && !T) ||
          A.some(Xe) ||
          (A.length > 0 && !P) ||
          x == null ||
          m.get(ue) !== x ||
          m.get(Se) !== S
        )
          return;
        fe(!0);
        let t = Fe(m, {
          name: e,
          appearance: E?.kind === `icon` ? { emoji: E.value, theme: E.color } : void 0,
          invitations: A.map(Ye),
          createSpace: (t, n) => i(e, t, n, w),
        });
        s(t);
      }),
      (t[41] = x),
      (t[42] = T),
      (t[43] = P),
      (t[44] = i),
      (t[45] = A),
      (t[46] = D),
      (t[47] = w),
      (t[48] = s),
      (t[49] = m),
      (t[50] = C),
      (t[51] = E),
      (t[52] = S),
      (t[53] = K))
    : (K = t[53]);
  let q;
  t[54] === h
    ? (q = t[55])
    : ((q = h.formatMessage({
        id: `codex.space.page.symbol.change`,
        defaultMessage: `Change icon`,
        description: `Accessible label and tooltip for the shared Page and Space symbol picker beside the title`,
      })),
      (t[54] = h),
      (t[55] = q));
  let tt = E?.kind === `icon` ? E.value : null,
    nt = E?.kind === `icon` ? E.color : null,
    rt = E?.kind === `icon` ? void 0 : `text-purple`,
    J;
  t[56] === rt ? (J = t[57]) : ((J = (0, H.jsx)(_, { className: rt })), (t[56] = rt), (t[57] = J));
  let Y;
  t[58] !== tt || t[59] !== nt || t[60] !== J
    ? ((Y = (0, H.jsx)(we, { icon: tt, color: nt, defaultIcon: J })),
      (t[58] = tt),
      (t[59] = nt),
      (t[60] = J),
      (t[61] = Y))
    : (Y = t[61]);
  let X;
  t[62] !== D || t[63] !== q || t[64] !== Y
    ? ((X = (0, H.jsx)(We.Trigger, {
        children: (0, H.jsx)(oe, {
          "aria-label": q,
          color: `secondary`,
          variant: `ghost`,
          size: `sm`,
          uniform: !0,
          disabled: D,
          type: `button`,
          children: Y,
        }),
      })),
      (t[62] = D),
      (t[63] = q),
      (t[64] = Y),
      (t[65] = X))
    : (X = t[65]);
  let it;
  t[66] === Symbol.for(`react.memo_cache_sentinel`) ? ((it = [`icon`]), (t[66] = it)) : (it = t[66]);
  let Z;
  t[67] !== D || t[68] !== E
    ? ((Z = (0, H.jsx)(We.Content, {
        children: (0, H.jsx)(xe, {
          disabled: D,
          value: E,
          allowedKinds: it,
          defaultKind: `icon`,
          onChange: le,
        }),
      })),
      (t[67] = D),
      (t[68] = E),
      (t[69] = Z))
    : (Z = t[69]);
  let Q;
  t[70] !== X || t[71] !== Z
    ? ((Q = (0, H.jsxs)(We, { children: [X, Z] })), (t[70] = X), (t[71] = Z), (t[72] = Q))
    : (Q = t[72]);
  let at;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, H.jsx)(`span`, { "aria-hidden": !0, className: `h-6 w-px bg-border-subtle` })), (t[73] = at))
    : (at = t[73]);
  let $;
  t[74] === Q
    ? ($ = t[75])
    : (($ = (0, H.jsxs)(H.Fragment, { children: [Q, at] })), (t[74] = Q), (t[75] = $));
  let ot;
  t[76] === h
    ? (ot = t[77])
    : ((ot = h.formatMessage({
        id: `codex.space.sidebar.spaceNameLabel`,
        defaultMessage: `Space name`,
        description: `Accessible label for the input containing a new shared Space's name. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
      })),
      (t[76] = h),
      (t[77] = ot));
  let st;
  t[78] === h
    ? (st = t[79])
    : ((st = h.formatMessage({
        id: `codex.space.sidebar.spaceNamePlaceholder`,
        defaultMessage: `Name the topic or group`,
        description: `Placeholder for the input containing a new shared Space's name`,
      })),
      (t[78] = h),
      (t[79] = st));
  let ct;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (e) => ie(e.target.value)), (t[80] = ct))
    : (ct = t[80]);
  let lt;
  t[81] !== D || t[82] !== C || t[83] !== $ || t[84] !== ot || t[85] !== st
    ? ((lt = (0, H.jsx)(ee, {
        children: (0, H.jsx)(be, {
          ref: te,
          autoFocus: !0,
          size: `xl`,
          pill: !1,
          startAdornment: $,
          disabled: D,
          "aria-label": ot,
          maxLength: 50,
          placeholder: st,
          value: C,
          onChange: ct,
        }),
      })),
      (t[81] = D),
      (t[82] = C),
      (t[83] = $),
      (t[84] = ot),
      (t[85] = st),
      (t[86] = lt))
    : (lt = t[86]);
  let ut, dt;
  t[87] === k
    ? ((ut = t[88]), (dt = t[89]))
    : ((ut = () => Te(!k)),
      (dt = k ? (0, H.jsx)(c, {}) : (0, H.jsx)(n, {})),
      (t[87] = k),
      (t[88] = ut),
      (t[89] = dt));
  let ft;
  t[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, H.jsx)(a, {
        id: `codex.space.creation.invitePeople`,
        defaultMessage: `Invite people`,
        description: `Disclosure button that reveals invitation controls while creating a Space`,
      })),
      (t[90] = ft))
    : (ft = t[90]);
  let pt;
  t[91] !== k || t[92] !== b || t[93] !== D || t[94] !== ut || t[95] !== dt
    ? ((pt = (0, H.jsx)(ee, {
        children: (0, H.jsxs)(oe, {
          className: `self-start`,
          "aria-controls": b,
          "aria-expanded": k,
          color: `secondary`,
          variant: `transparent`,
          size: `sm`,
          disabled: D,
          type: `button`,
          onClick: ut,
          children: [dt, ft],
        }),
      })),
      (t[91] = k),
      (t[92] = b),
      (t[93] = D),
      (t[94] = ut),
      (t[95] = dt),
      (t[96] = pt))
    : (pt = t[96]);
  let mt;
  t[97] !== y ||
  t[98] !== x ||
  t[99] !== P ||
  t[100] !== g ||
  t[101] !== h ||
  t[102] !== k ||
  t[103] !== b ||
  t[104] !== A ||
  t[105] !== D ||
  t[106] !== v ||
  t[107] !== Ve ||
  t[108] !== O ||
  t[109] !== M ||
  t[110] !== m ||
  t[111] !== N ||
  t[112] !== S ||
  t[113] !== Le ||
  t[114] !== Ie
    ? ((mt =
        k &&
        (0, H.jsxs)(`div`, {
          id: b,
          children: [
            (0, H.jsxs)(ee, {
              className: `mb-1 gap-2`,
              spacing: `large`,
              children: [
                v && x != null && S != null
                  ? (0, H.jsx)(Be, {
                      ariaDescribedBy: y,
                      accountId: x,
                      currentPrincipalId: S.split(`__`)[0],
                      currentEmail: g ?? void 0,
                      isWorkspace: !1,
                      canSearchMembers: !1,
                      allowGroups: !1,
                      disabled: D || !P,
                      existingPrincipalKeys: new Set(),
                      existingEmails: new Set(),
                      query: O,
                      onQueryChange: ve,
                      selected: A,
                      resolveRecipient: (e, t) =>
                        u(
                          Ce.safePost(`/sharing/recipients/resolve`, {
                            requestBody: { email: e },
                            additionalHeaders: { "ChatGPT-Account-Id": x },
                            expectedIdentity: { accountId: x, userId: S },
                            assertRequestCurrent: () => {
                              if (m.get(ue) !== x || m.get(Se) !== S)
                                throw new DOMException(`Account changed`, `AbortError`);
                            },
                            retry: `never`,
                            signal: t,
                          }),
                          t,
                        ),
                      onChange: (e) => j(e.map((e) => ({ ...e, roleId: M }))),
                      role: He(M, `folder`),
                      allowedRoles: [`viewer`, `editor`],
                      onRoleChange: (e) => {
                        let t = e === `viewer` ? `role-library-folder-viewer` : `role-library-folder-editor`;
                        (ke(t), j((e) => e.map((e) => ({ ...e, roleId: t }))));
                      },
                    })
                  : (0, H.jsx)(Re, {
                      accountId: x,
                      ariaDescribedBy: y,
                      disabled: D || !P,
                      getTeamRecipient: (e) => ({
                        id: `group:${e.id}`,
                        label: e.name,
                        isValid: !0,
                        roleId: M,
                        recipient: {
                          recipient_type: `principal`,
                          principal_type: `group`,
                          principal_id: e.id,
                        },
                      }),
                      isLoading: Ie,
                      searchFailed: Le,
                      loadingLabel: h.formatMessage({
                        id: `codex.space.creation.searchingRecipients`,
                        defaultMessage: `Searching for people or teams`,
                        description: `Status while searching for recipients to invite when creating a Space`,
                      }),
                      emptyMessage: (0, H.jsx)(a, {
                        id: `codex.space.creation.noRecipients`,
                        defaultMessage: `No matching people or teams`,
                        description: `Empty result in the people and Teams search when creating a Space`,
                      }),
                      query: O,
                      options: Ve,
                      placeholder: {
                        people: h.formatMessage({
                          id: `codex.space.creation.peoplePlaceholder`,
                          defaultMessage: `People`,
                          description: `Placeholder and accessible label for the person invitation search when creating a Space without Team discovery`,
                        }),
                        peopleAndTeams: h.formatMessage({
                          id: `codex.space.creation.peopleAndTeamsPlaceholder`,
                          defaultMessage: `People or teams`,
                          description: `Placeholder and accessible label for the people and Teams invitation search when creating a Space`,
                        }),
                      },
                      getRemoveLabel: (e) =>
                        h.formatMessage(
                          {
                            id: `shareDialog.removeInvitee`,
                            defaultMessage: `Remove {name} from the invitation`,
                            description: `Accessible label for removing a selected person or group from a sharing invitation; name is the recipient's display name`,
                          },
                          { name: e.label },
                        ),
                      selectedOptions: A,
                      selectionDisplay: `external`,
                      trailingContent: (0, H.jsx)(Pe, {
                        disabled: D || !P,
                        options: $e,
                        value: M,
                        variant: `inline`,
                        renderLabel: Je,
                        onChange: ke,
                      }),
                      onQueryChange: ve,
                      onChange: j,
                    }),
                (0, H.jsx)(`p`, {
                  id: y,
                  className: `text-xs text-secondary select-none`,
                  children: (0, H.jsx)(a, {
                    id: `codex.space.driveSharing.subtitle`,
                    defaultMessage: `Access applies to every page in this space`,
                    description: `Explanation in the Space sharing dialog that collaborators inherit access to all its Pages. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                  }),
                }),
                !P &&
                  (0, H.jsx)(`p`, {
                    className: `text-sm text-secondary`,
                    role: `status`,
                    children:
                      N === `loading`
                        ? (0, H.jsx)(a, {
                            id: `codex.space.creation.loadingInvitations`,
                            defaultMessage: `Loading invitation options…`,
                            description: `Status while checking whether people and Teams can be invited to a new Space`,
                          })
                        : (0, H.jsx)(a, {
                            id: `codex.space.creation.invitationsUnavailable`,
                            defaultMessage: `Invitations are unavailable right now. You can create the space and share it later`,
                            description: `Shown when invitation permissions cannot be loaded or the account does not support sharing; creation without invitations is still available. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                          }),
                  }),
              ],
            }),
            !v &&
              A.length > 0 &&
              (0, H.jsx)(ye, {
                variant: `selection`,
                title: (0, H.jsx)(a, {
                  id: `codex.space.creation.invitedRecipients`,
                  defaultMessage: `People and teams`,
                  description: `Heading above people and Teams selected for invitation to a new Space`,
                }),
                children: (0, H.jsx)(Me, {
                  entries: A.map((e) => ({
                    id: e.id,
                    label: e.label,
                    isTeam:
                      e.recipient.recipient_type === `principal` && e.recipient.principal_type === `group`,
                    row: (0, H.jsx)(de, {
                      label: e.label,
                      avatar: e.avatar,
                      secondaryLabel: e.secondaryLabel,
                      trailingContent: (0, H.jsx)(Pe, {
                        disabled: D,
                        options: $e,
                        value: e.roleId,
                        variant: `inline`,
                        renderLabel: qe,
                        onChange: (t) => j((n) => n.map((n) => (n.id === e.id ? { ...n, roleId: t } : n))),
                        removeLabel: (0, H.jsx)(a, {
                          id: `codex.space.creation.removeInvitation`,
                          defaultMessage: `Remove invitation`,
                          description: `Menu action that removes a selected person or Team before creating the Space`,
                        }),
                        onRemoveAccess: () => j((t) => t.filter((t) => t.id !== e.id)),
                      }),
                    }),
                  })),
                }),
              }),
          ],
        })),
      (t[97] = y),
      (t[98] = x),
      (t[99] = P),
      (t[100] = g),
      (t[101] = h),
      (t[102] = k),
      (t[103] = b),
      (t[104] = A),
      (t[105] = D),
      (t[106] = v),
      (t[107] = Ve),
      (t[108] = O),
      (t[109] = M),
      (t[110] = m),
      (t[111] = N),
      (t[112] = S),
      (t[113] = Le),
      (t[114] = Ie),
      (t[115] = mt))
    : (mt = t[115]);
  let ht;
  t[116] !== I ||
  t[117] !== G ||
  t[118] !== K ||
  t[119] !== lt ||
  t[120] !== pt ||
  t[121] !== mt ||
  t[122] !== Ue
    ? ((ht = (0, H.jsxs)(ce, {
        isDismissalDisabled: Ue,
        onRequestClose: I,
        title: Ge,
        footer: G,
        onSubmit: K,
        children: [lt, pt, mt],
      })),
      (t[116] = I),
      (t[117] = G),
      (t[118] = K),
      (t[119] = lt),
      (t[120] = pt),
      (t[121] = mt),
      (t[122] = Ue),
      (t[123] = ht))
    : (ht = t[123]);
  let gt;
  t[124] !== pe || t[125] !== l
    ? ((gt = (0, H.jsx)(Ke, { returnFocusRef: te, open: pe, onOpenChange: me, onDiscard: l })),
      (t[124] = pe),
      (t[125] = l),
      (t[126] = gt))
    : (gt = t[126]);
  let _t;
  return (
    t[127] !== l || t[128] !== d || t[129] !== ht || t[130] !== gt
      ? ((_t = (0, H.jsxs)(De, { onClose: l, onCloseAutoFocus: d, children: [ht, gt] })),
        (t[127] = l),
        (t[128] = d),
        (t[129] = ht),
        (t[130] = gt),
        (t[131] = _t))
      : (_t = t[131]),
    _t
  );
}
function qe(e) {
  return (0, H.jsx)(F, { permission: He(e, `folder`) });
}
function Je(e) {
  return (0, H.jsx)(F, { permission: He(e, `folder`) });
}
function Ye(e) {
  let { recipient: t, label: n, secondaryLabel: r, roleId: i } = e;
  return { recipient: t, label: n, secondaryLabel: r, roleId: i };
}
function Xe(e) {
  return !e.isValid;
}
function Ze(e) {
  return !e.isValid;
}
var Qe, V, H, $e;
function U() {
  return (U = e(() => {
    ((Qe = ie()),
      s(),
      pe(),
      O(),
      Ge(),
      l(),
      x(),
      (V = E()),
      b(),
      ke(),
      Ee(),
      Te(),
      v(),
      d(),
      le(),
      I(),
      Le(),
      Ie(),
      fe(),
      N(),
      j(),
      P(),
      w(),
      je(),
      ve(),
      D(),
      A(),
      Ue(),
      ze(),
      Ve(),
      me(),
      z(),
      (H = T()),
      ($e = [{ value: `role-library-folder-editor` }, { value: `role-library-folder-viewer` }]));
  }))();
}
function et(e) {
  let t = (0, W.c)(15),
    { onClose: n, onCloseAutoFocus: a } = e,
    s = o(r),
    c = i(),
    l = ae(),
    u = p(ue),
    d = p(Se),
    f = p(M);
  if (u == null) return null;
  let m = `${d}:${u}:${f}`,
    h;
  t[0] === s
    ? (h = t[1])
    : ((h = (e, t, n, r) =>
        s
          .get(k)
          .mutateAsync({
            requestBody: { name: e, ...(r ? { make_workspace_default: !0 } : {}) },
            signal: t,
            localPageId: n,
          })),
      (t[0] = s),
      (t[1] = h));
  let g;
  t[2] !== u || t[3] !== l.pathname || t[4] !== c || t[5] !== n
    ? ((g = (e) => {
        (n(`create`),
          c(`/spaces/new?creation=${encodeURIComponent(e)}`, {
            replace: l.pathname === `/spaces/new`,
            state: { sidebarArea: `space`, spaceSidebarAccountId: u },
          }));
      }),
      (t[2] = u),
      (t[3] = l.pathname),
      (t[4] = c),
      (t[5] = n),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] === n ? (_ = t[8]) : ((_ = () => n(`cancel`)), (t[7] = n), (t[8] = _));
  let v;
  return (
    t[9] !== a || t[10] !== m || t[11] !== h || t[12] !== g || t[13] !== _
      ? ((v = (0, G.jsx)(B, { onCloseAutoFocus: a, createSpace: h, onStarted: g, onClose: _ }, m)),
        (t[9] = a),
        (t[10] = m),
        (t[11] = h),
        (t[12] = g),
        (t[13] = _),
        (t[14] = v))
      : (v = t[14]),
    v
  );
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = ie()), l(), h(), ke(), w(), N(), U(), (G = T()));
  }))();
}
export { K as n, et as t };
//# sourceMappingURL=new-space-dialog-59e08fd8836b.js.map
