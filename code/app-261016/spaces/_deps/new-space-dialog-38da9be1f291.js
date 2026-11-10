import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $mt as n,
  $st as r,
  FBt as i,
  HO as a,
  IH as o,
  IO as s,
  JO as c,
  KO as l,
  LNt as u,
  LO as d,
  NSt as f,
  PBt as p,
  Qst as m,
  RO as h,
  TY as g,
  USt as _,
  VSt as v,
  WO as ee,
  XOt as y,
  Y3 as b,
  Z3 as x,
  ZSt as S,
  dJ as te,
  iCt as C,
  kH as ne,
  okt as re,
  pkt as ie,
  qO as w,
  sct as T,
  tkt as E,
  zO as ae,
  zjt as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as se,
  Dan as ce,
  Ean as le,
  HDt as ue,
  SU as de,
  VDt as D,
  Vlr as fe,
  Zht as pe,
  _Lr as me,
  aU as he,
  cU as ge,
  dtn as _e,
  fU as ve,
  ftn as O,
  gur as ye,
  hdn as be,
  iRr as xe,
  imr as Se,
  lU as Ce,
  mlr as k,
  ndn as we,
  oU as Te,
  rgt as Ee,
  rmr as A,
  sU as De,
  tyr as j,
  uU as Oe,
  vLr as M,
  wLr as ke,
  xU as Ae,
} from "./app-initial-ad16eaadf81f.js";
import { a as je, r as N } from "./use-workspace-users-2d1e66aa1ddc.js";
import { n as Me, t as Ne } from "./access-list-2635d079c875.js";
import { n as Pe } from "./dialog-utils-21c4d759328d.js";
import { t as Fe } from "./modal-permission-dropdown-6dcd00cb5144.js";
import { i as Ie, t as Le } from "./space-e4040a2fa18d.js";
import { n as Re, o as ze, s as Be, t as Ve } from "./recipient-picker-5b8b87b8e1c8.js";
import { n as He, t as P } from "./role-label-f76597fae88b.js";
import { c as Ue, f as F } from "./model-96b25fa95571.js";
import { t as We } from "./permission-dropdown-5c542829d6d7.js";
import { n as Ge, t as Ke } from "./popover-df132560e617.js";
function qe(e) {
  let t = (0, I.c)(27),
    { open: n, returnFocusRef: r, onOpenChange: i, onDiscard: a } = e,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (e) => {
        (e.preventDefault(), e.stopPropagation(), i(!1));
      }),
      (t[0] = i),
      (t[1] = o));
  let c;
  t[2] === r
    ? (c = t[3])
    : ((c = (e) => {
        (e.preventDefault(), r.current?.focus({ preventScroll: !0 }));
      }),
      (t[2] = r),
      (t[3] = c));
  let u;
  t[4] !== o || t[5] !== c
    ? ((u = { onEscapeKeyDown: o, onCloseAutoFocus: c }), (t[4] = o), (t[5] = c), (t[6] = u))
    : (u = t[6]);
  let f;
  t[7] === a
    ? (f = t[8])
    : ((f = (e) => {
        (e.preventDefault(), a());
      }),
      (t[7] = a),
      (t[8] = f));
  let p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, L.jsx)(w, {
        children: (0, L.jsx)(E, {
          id: `codex.space.creation.discardTitle`,
          defaultMessage: `Discard changes?`,
          description: `Title of the confirmation dialog before closing a Create Space form with unsaved changes`,
        }),
      })),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, L.jsx)(ae, {
        children: (0, L.jsx)(h, {
          title: p,
          subtitle: (0, L.jsx)(l, {
            children: (0, L.jsx)(E, {
              id: `codex.space.creation.discardDescription`,
              defaultMessage: `Your changes will be lost`,
              description: `Warning that closing the Create Space form discards its entered name, icon, and invitation selections`,
            }),
          }),
        }),
      })),
      (t[10] = m))
    : (m = t[10]);
  let g;
  t[11] === i ? (g = t[12]) : ((g = () => i(!1)), (t[11] = i), (t[12] = g));
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, L.jsx)(E, {
        id: `codex.space.creation.keepEditing`,
        defaultMessage: `Keep editing`,
        description: `Button that returns to the Create Space form while preserving all entered changes`,
      })),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] === g
    ? (v = t[15])
    : ((v = (0, L.jsx)(b, { color: `secondary`, type: `button`, onClick: g, children: _ })),
      (t[14] = g),
      (t[15] = v));
  let y;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, L.jsx)(b, {
        color: `danger`,
        type: `submit`,
        children: (0, L.jsx)(E, {
          id: `codex.space.creation.discard`,
          defaultMessage: `Discard changes`,
          description: `Button that discards the unsaved Create Space form and closes it`,
        }),
      })),
      (t[16] = y))
    : (y = t[16]);
  let x;
  t[17] === v
    ? (x = t[18])
    : ((x = (0, L.jsx)(ae, { children: (0, L.jsxs)(d, { children: [v, y] }) })), (t[17] = v), (t[18] = x));
  let S;
  t[19] !== x || t[20] !== f
    ? ((S = (0, L.jsxs)(s, { as: `form`, onSubmit: f, children: [m, x] })),
      (t[19] = x),
      (t[20] = f),
      (t[21] = S))
    : (S = t[21]);
  let te;
  return (
    t[22] !== i || t[23] !== n || t[24] !== S || t[25] !== u
      ? ((te = (0, L.jsx)(ee, {
          open: n,
          contentProps: u,
          showDialogClose: !1,
          size: `compact`,
          onOpenChange: i,
          children: S,
        })),
        (t[22] = i),
        (t[23] = n),
        (t[24] = S),
        (t[25] = u),
        (t[26] = te))
      : (te = t[26]),
    te
  );
}
var I, L;
function R() {
  return (R = e(() => {
    ((I = p()), y(), x(), c(), a(), (L = u()));
  }))();
}
function z(e) {
  let r = (0, $e.c)(132),
    { createSpace: i, onStarted: a, onClose: s, onCloseAutoFocus: c } = e,
    l = t(m),
    u = re(),
    { email: d } = Se(),
    f = C(me),
    p = (0, B.useId)(),
    h = (0, B.useId)(),
    g = (0, B.useRef)(null),
    _;
  r[0] === l ? (_ = r[1]) : ((_ = () => l.get(ye)), (r[0] = l), (r[1] = _));
  let [v] = (0, B.useState)(_),
    ee;
  r[2] === l ? (ee = r[3]) : ((ee = () => l.get(se)), (r[2] = l), (r[3] = ee));
  let [y] = (0, B.useState)(ee),
    [b, x] = (0, B.useState)(``),
    [S, ie] = (0, B.useState)(!1),
    w = C(fe),
    [T, ce] = (0, B.useState)(null),
    [D, pe] = (0, B.useState)(!1),
    [ge, ve] = (0, B.useState)(!1),
    [O, be] = (0, B.useState)(``),
    [k, we] = (0, B.useState)(!1),
    Te;
  r[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((Te = []), (r[4] = Te)) : (Te = r[4]);
  let [A, j] = (0, B.useState)(Te),
    [M, ke] = (0, B.useState)(`role-library-folder-editor`),
    Ae = C(Ee),
    N = Ae === `available`,
    { data: Me, isPending: Le, isError: Re } = je(N && k && !f ? O : ``),
    Be;
  r[5] !== M || r[6] !== y || r[7] !== Me
    ? ((Be = Me?.filter((e) => e.account_user_id.split(`__`)[0] !== y?.split(`__`)[0]).map((e) => ({
        ...Pe(e),
        isValid: !0,
        roleId: M,
        recipient: { recipient_type: `principal`, principal_type: `user`, principal_id: e.account_user_id },
      }))),
      (r[5] = M),
      (r[6] = y),
      (r[7] = Me),
      (r[8] = Be))
    : (Be = r[8]);
  let He = Be,
    P;
  r[9] !== A || r[10] !== S || r[11] !== M || r[12] !== b || r[13] !== T?.kind
    ? ((P = () =>
        b !== `` || T?.kind === `icon` || A.length > 0 || S || M !== `role-library-folder-editor`
          ? (ve(!0), `deny`)
          : `allow`),
      (r[9] = A),
      (r[10] = S),
      (r[11] = M),
      (r[12] = b),
      (r[13] = T?.kind),
      (r[14] = P))
    : (P = r[14]);
  let F = P,
    We = D || ge,
    Ke;
  r[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = (0, V.jsx)(E, {
        id: `codex.space.creation.title`,
        defaultMessage: `Create a space`,
        description: `Title of the dialog for creating a Space with optional people and Team invitations. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
      })),
      (r[15] = Ke))
    : (Ke = r[15]);
  let I;
  r[16] !== w || r[17] !== D || r[18] !== S
    ? ((I =
        (w || S) &&
        (0, V.jsx)(`div`, {
          className: `relative me-auto flex items-center gap-2 select-none`,
          children: (0, V.jsx)(ue, {
            checked: S,
            onCheckedChange: ie,
            disabled: D,
            label: (0, V.jsx)(E, {
              id: `codex.space.creation.workspaceDefault`,
              defaultMessage: `Make it workspace default space`,
              description: `Checkbox offered to workspace admins when creating a Space. The selected Space will appear for everyone in the workspace.`,
            }),
          }),
        })),
      (r[16] = w),
      (r[17] = D),
      (r[18] = S),
      (r[19] = I))
    : (I = r[19]);
  let L;
  r[20] !== s || r[21] !== F
    ? ((L = () => {
        F() === `allow` && s();
      }),
      (r[20] = s),
      (r[21] = F),
      (r[22] = L))
    : (L = r[22]);
  let R;
  r[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, V.jsx)(E, {
        id: `codex.space.sidebar.spaceDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels creating a shared Space`,
      })),
      (r[23] = R))
    : (R = r[23]);
  let z;
  r[24] !== D || r[25] !== L
    ? ((z = (0, V.jsx)(oe, {
        color: `secondary`,
        variant: `outline`,
        size: `xl`,
        disabled: D,
        type: `button`,
        onClick: L,
        children: R,
      })),
      (r[24] = D),
      (r[25] = L),
      (r[26] = z))
    : (z = r[26]);
  let H;
  r[27] !== w || r[28] !== N || r[29] !== A || r[30] !== D || r[31] !== S || r[32] !== b
    ? ((H = b.trim().length === 0 || D || (S && !w) || A.some(Qe) || (A.length > 0 && !N)),
      (r[27] = w),
      (r[28] = N),
      (r[29] = A),
      (r[30] = D),
      (r[31] = S),
      (r[32] = b),
      (r[33] = H))
    : (H = r[33]);
  let tt;
  r[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, V.jsx)(E, {
        id: `codex.space.creation.submit`,
        defaultMessage: `Create`,
        description: `Button that creates the named team Space and invites the selected people and Teams`,
      })),
      (r[34] = tt))
    : (tt = r[34]);
  let U;
  r[35] === H
    ? (U = r[36])
    : ((U = (0, V.jsx)(oe, { color: `primary`, size: `xl`, disabled: H, type: `submit`, children: tt })),
      (r[35] = H),
      (r[36] = U));
  let W;
  r[37] !== z || r[38] !== U || r[39] !== I
    ? ((W = (0, V.jsxs)(V.Fragment, { children: [I, z, U] })),
      (r[37] = z),
      (r[38] = U),
      (r[39] = I),
      (r[40] = W))
    : (W = r[40]);
  let G;
  r[41] !== v ||
  r[42] !== w ||
  r[43] !== N ||
  r[44] !== i ||
  r[45] !== A ||
  r[46] !== D ||
  r[47] !== S ||
  r[48] !== a ||
  r[49] !== l ||
  r[50] !== b ||
  r[51] !== T ||
  r[52] !== y
    ? ((G = () => {
        let e = b.trim();
        if (
          e.length === 0 ||
          D ||
          (S && !w) ||
          A.some(Ze) ||
          (A.length > 0 && !N) ||
          v == null ||
          l.get(ye) !== v ||
          l.get(se) !== y
        )
          return;
        pe(!0);
        let t = Ie(l, {
          name: e,
          appearance: T?.kind === `icon` ? { emoji: T.value, theme: T.color } : void 0,
          invitations: A.map(Xe),
          createSpace: (t, n) => i(e, t, n, S),
        });
        a(t);
      }),
      (r[41] = v),
      (r[42] = w),
      (r[43] = N),
      (r[44] = i),
      (r[45] = A),
      (r[46] = D),
      (r[47] = S),
      (r[48] = a),
      (r[49] = l),
      (r[50] = b),
      (r[51] = T),
      (r[52] = y),
      (r[53] = G))
    : (G = r[53]);
  let K;
  r[54] === u
    ? (K = r[55])
    : ((K = u.formatMessage({
        id: `codex.space.page.symbol.change`,
        defaultMessage: `Change icon`,
        description: `Accessible label and tooltip for the shared Page and Space symbol picker beside the title`,
      })),
      (r[54] = u),
      (r[55] = K));
  let nt = T?.kind === `icon` ? T.value : null,
    rt = T?.kind === `icon` ? T.color : null,
    it = T?.kind === `icon` ? void 0 : `text-purple`,
    q;
  r[56] === it ? (q = r[57]) : ((q = (0, V.jsx)(te, { className: it })), (r[56] = it), (r[57] = q));
  let J;
  r[58] !== nt || r[59] !== rt || r[60] !== q
    ? ((J = (0, V.jsx)(le, { icon: nt, color: rt, defaultIcon: q })),
      (r[58] = nt),
      (r[59] = rt),
      (r[60] = q),
      (r[61] = J))
    : (J = r[61]);
  let Y;
  r[62] !== D || r[63] !== K || r[64] !== J
    ? ((Y = (0, V.jsx)(Ge.Trigger, {
        children: (0, V.jsx)(oe, {
          "aria-label": K,
          color: `secondary`,
          variant: `ghost`,
          size: `sm`,
          uniform: !0,
          disabled: D,
          type: `button`,
          children: J,
        }),
      })),
      (r[62] = D),
      (r[63] = K),
      (r[64] = J),
      (r[65] = Y))
    : (Y = r[65]);
  let at;
  r[66] === Symbol.for(`react.memo_cache_sentinel`) ? ((at = [`icon`]), (r[66] = at)) : (at = r[66]);
  let X;
  r[67] !== D || r[68] !== T
    ? ((X = (0, V.jsx)(Ge.Content, {
        children: (0, V.jsx)(_e, {
          disabled: D,
          value: T,
          allowedKinds: at,
          defaultKind: `icon`,
          onChange: ce,
        }),
      })),
      (r[67] = D),
      (r[68] = T),
      (r[69] = X))
    : (X = r[69]);
  let Z;
  r[70] !== Y || r[71] !== X
    ? ((Z = (0, V.jsxs)(Ge, { children: [Y, X] })), (r[70] = Y), (r[71] = X), (r[72] = Z))
    : (Z = r[72]);
  let ot;
  r[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, V.jsx)(`span`, { "aria-hidden": !0, className: `h-6 w-px bg-border-subtle` })), (r[73] = ot))
    : (ot = r[73]);
  let Q;
  r[74] === Z
    ? (Q = r[75])
    : ((Q = (0, V.jsxs)(V.Fragment, { children: [Z, ot] })), (r[74] = Z), (r[75] = Q));
  let $;
  r[76] === u
    ? ($ = r[77])
    : (($ = u.formatMessage({
        id: `codex.space.sidebar.spaceNameLabel`,
        defaultMessage: `Space name`,
        description: `Accessible label for the input containing a new shared Space's name. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
      })),
      (r[76] = u),
      (r[77] = $));
  let st;
  r[78] === u
    ? (st = r[79])
    : ((st = u.formatMessage({
        id: `codex.space.sidebar.spaceNamePlaceholder`,
        defaultMessage: `Name the topic or group`,
        description: `Placeholder for the input containing a new shared Space's name`,
      })),
      (r[78] = u),
      (r[79] = st));
  let ct;
  r[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (e) => x(e.target.value)), (r[80] = ct))
    : (ct = r[80]);
  let lt;
  r[81] !== D || r[82] !== b || r[83] !== Q || r[84] !== $ || r[85] !== st
    ? ((lt = (0, V.jsx)(ae, {
        children: (0, V.jsx)(de, {
          ref: g,
          autoFocus: !0,
          size: `xl`,
          pill: !1,
          startAdornment: Q,
          disabled: D,
          "aria-label": $,
          maxLength: 50,
          placeholder: st,
          value: b,
          onChange: ct,
        }),
      })),
      (r[81] = D),
      (r[82] = b),
      (r[83] = Q),
      (r[84] = $),
      (r[85] = st),
      (r[86] = lt))
    : (lt = r[86]);
  let ut, dt;
  r[87] === k
    ? ((ut = r[88]), (dt = r[89]))
    : ((ut = () => we(!k)),
      (dt = k ? (0, V.jsx)(ne, {}) : (0, V.jsx)(o, {})),
      (r[87] = k),
      (r[88] = ut),
      (r[89] = dt));
  let ft;
  r[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, V.jsx)(E, {
        id: `codex.space.creation.invitePeople`,
        defaultMessage: `Invite people`,
        description: `Disclosure button that reveals invitation controls while creating a Space`,
      })),
      (r[90] = ft))
    : (ft = r[90]);
  let pt;
  r[91] !== k || r[92] !== h || r[93] !== D || r[94] !== ut || r[95] !== dt
    ? ((pt = (0, V.jsx)(ae, {
        children: (0, V.jsxs)(oe, {
          className: `self-start`,
          "aria-controls": h,
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
      (r[91] = k),
      (r[92] = h),
      (r[93] = D),
      (r[94] = ut),
      (r[95] = dt),
      (r[96] = pt))
    : (pt = r[96]);
  let mt;
  r[97] !== p ||
  r[98] !== v ||
  r[99] !== N ||
  r[100] !== d ||
  r[101] !== u ||
  r[102] !== k ||
  r[103] !== h ||
  r[104] !== A ||
  r[105] !== D ||
  r[106] !== f ||
  r[107] !== He ||
  r[108] !== O ||
  r[109] !== M ||
  r[110] !== l ||
  r[111] !== Ae ||
  r[112] !== y ||
  r[113] !== Re ||
  r[114] !== Le
    ? ((mt =
        k &&
        (0, V.jsxs)(`div`, {
          id: h,
          children: [
            (0, V.jsxs)(ae, {
              className: `mb-1 gap-2`,
              spacing: `large`,
              children: [
                f && v != null && y != null
                  ? (0, V.jsx)(Ve, {
                      ariaDescribedBy: p,
                      accountId: v,
                      currentPrincipalId: y.split(`__`)[0],
                      currentEmail: d ?? void 0,
                      isWorkspace: !1,
                      canSearchMembers: !1,
                      allowGroups: !1,
                      disabled: D || !N,
                      existingPrincipalKeys: new Set(),
                      existingEmails: new Set(),
                      query: O,
                      onQueryChange: be,
                      selected: A,
                      resolveRecipient: (e, t) =>
                        n(
                          xe.safePost(`/sharing/recipients/resolve`, {
                            requestBody: { email: e },
                            additionalHeaders: { "ChatGPT-Account-Id": v },
                            expectedIdentity: { accountId: v, userId: y },
                            assertRequestCurrent: () => {
                              if (l.get(ye) !== v || l.get(se) !== y)
                                throw new DOMException(`Account changed`, `AbortError`);
                            },
                            retry: `never`,
                            signal: t,
                          }),
                          t,
                        ),
                      onChange: (e) => j(e.map((e) => ({ ...e, roleId: M }))),
                      role: Ue(M, `folder`),
                      allowedRoles: [`viewer`, `editor`],
                      onRoleChange: (e) => {
                        let t = e === `viewer` ? `role-library-folder-viewer` : `role-library-folder-editor`;
                        (ke(t), j((e) => e.map((e) => ({ ...e, roleId: t }))));
                      },
                    })
                  : (0, V.jsx)(ze, {
                      accountId: v,
                      ariaDescribedBy: p,
                      disabled: D || !N,
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
                      isLoading: Le,
                      searchFailed: Re,
                      loadingLabel: u.formatMessage({
                        id: `codex.space.creation.searchingRecipients`,
                        defaultMessage: `Searching for people or teams`,
                        description: `Status while searching for recipients to invite when creating a Space`,
                      }),
                      emptyMessage: (0, V.jsx)(E, {
                        id: `codex.space.creation.noRecipients`,
                        defaultMessage: `No matching people or teams`,
                        description: `Empty result in the people and Teams search when creating a Space`,
                      }),
                      query: O,
                      options: He,
                      placeholder: {
                        people: u.formatMessage({
                          id: `codex.space.creation.peoplePlaceholder`,
                          defaultMessage: `People`,
                          description: `Placeholder and accessible label for the person invitation search when creating a Space without Team discovery`,
                        }),
                        peopleAndTeams: u.formatMessage({
                          id: `codex.space.creation.peopleAndTeamsPlaceholder`,
                          defaultMessage: `People or teams`,
                          description: `Placeholder and accessible label for the people and Teams invitation search when creating a Space`,
                        }),
                      },
                      getRemoveLabel: (e) =>
                        u.formatMessage(
                          {
                            id: `shareDialog.removeInvitee`,
                            defaultMessage: `Remove {name} from the invitation`,
                            description: `Accessible label for removing a selected person or group from a sharing invitation; name is the recipient's display name`,
                          },
                          { name: e.label },
                        ),
                      selectedOptions: A,
                      selectionDisplay: `external`,
                      trailingContent: (0, V.jsx)(Fe, {
                        disabled: D || !N,
                        options: et,
                        value: M,
                        variant: `inline`,
                        renderLabel: Ye,
                        onChange: ke,
                      }),
                      onQueryChange: be,
                      onChange: j,
                    }),
                (0, V.jsx)(`p`, {
                  id: p,
                  className: `text-xs text-secondary select-none`,
                  children: (0, V.jsx)(E, {
                    id: `codex.space.driveSharing.subtitle`,
                    defaultMessage: `Access applies to every page in this space`,
                    description: `Explanation in the Space sharing dialog that collaborators inherit access to all its Pages. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                  }),
                }),
                !N &&
                  (0, V.jsx)(`p`, {
                    className: `text-sm text-secondary`,
                    role: `status`,
                    children:
                      Ae === `loading`
                        ? (0, V.jsx)(E, {
                            id: `codex.space.creation.loadingInvitations`,
                            defaultMessage: `Loading invitation options…`,
                            description: `Status while checking whether people and Teams can be invited to a new Space`,
                          })
                        : (0, V.jsx)(E, {
                            id: `codex.space.creation.invitationsUnavailable`,
                            defaultMessage: `Invitations are unavailable right now. You can create the space and share it later`,
                            description: `Shown when invitation permissions cannot be loaded or the account does not support sharing; creation without invitations is still available. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                          }),
                  }),
              ],
            }),
            !f &&
              A.length > 0 &&
              (0, V.jsx)(De, {
                variant: `selection`,
                title: (0, V.jsx)(E, {
                  id: `codex.space.creation.invitedRecipients`,
                  defaultMessage: `People and teams`,
                  description: `Heading above people and Teams selected for invitation to a new Space`,
                }),
                children: (0, V.jsx)(Ne, {
                  entries: A.map((e) => ({
                    id: e.id,
                    label: e.label,
                    isTeam:
                      e.recipient.recipient_type === `principal` && e.recipient.principal_type === `group`,
                    row: (0, V.jsx)(he, {
                      label: e.label,
                      avatar: e.avatar,
                      secondaryLabel: e.secondaryLabel,
                      trailingContent: (0, V.jsx)(Fe, {
                        disabled: D,
                        options: et,
                        value: e.roleId,
                        variant: `inline`,
                        renderLabel: Je,
                        onChange: (t) => j((n) => n.map((n) => (n.id === e.id ? { ...n, roleId: t } : n))),
                        removeLabel: (0, V.jsx)(E, {
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
      (r[97] = p),
      (r[98] = v),
      (r[99] = N),
      (r[100] = d),
      (r[101] = u),
      (r[102] = k),
      (r[103] = h),
      (r[104] = A),
      (r[105] = D),
      (r[106] = f),
      (r[107] = He),
      (r[108] = O),
      (r[109] = M),
      (r[110] = l),
      (r[111] = Ae),
      (r[112] = y),
      (r[113] = Re),
      (r[114] = Le),
      (r[115] = mt))
    : (mt = r[115]);
  let ht;
  r[116] !== F ||
  r[117] !== W ||
  r[118] !== G ||
  r[119] !== lt ||
  r[120] !== pt ||
  r[121] !== mt ||
  r[122] !== We
    ? ((ht = (0, V.jsxs)(Ce, {
        isDismissalDisabled: We,
        onRequestClose: F,
        title: Ke,
        footer: W,
        onSubmit: G,
        children: [lt, pt, mt],
      })),
      (r[116] = F),
      (r[117] = W),
      (r[118] = G),
      (r[119] = lt),
      (r[120] = pt),
      (r[121] = mt),
      (r[122] = We),
      (r[123] = ht))
    : (ht = r[123]);
  let gt;
  r[124] !== ge || r[125] !== s
    ? ((gt = (0, V.jsx)(qe, { returnFocusRef: g, open: ge, onOpenChange: ve, onDiscard: s })),
      (r[124] = ge),
      (r[125] = s),
      (r[126] = gt))
    : (gt = r[126]);
  let _t;
  return (
    r[127] !== s || r[128] !== c || r[129] !== ht || r[130] !== gt
      ? ((_t = (0, V.jsxs)(Oe, { onClose: s, onCloseAutoFocus: c, children: [ht, gt] })),
        (r[127] = s),
        (r[128] = c),
        (r[129] = ht),
        (r[130] = gt),
        (r[131] = _t))
      : (_t = r[131]),
    _t
  );
}
function Je(e) {
  return (0, V.jsx)(P, { permission: Ue(e, `folder`) });
}
function Ye(e) {
  return (0, V.jsx)(P, { permission: Ue(e, `folder`) });
}
function Xe(e) {
  let { recipient: t, label: n, secondaryLabel: r, roleId: i } = e;
  return { recipient: t, label: n, secondaryLabel: r, roleId: i };
}
function Ze(e) {
  return !e.isValid;
}
function Qe(e) {
  return !e.isValid;
}
var $e, B, V, et;
function H() {
  return (H = e(() => {
    (($e = p()),
      ie(),
      D(),
      Ae(),
      Ke(),
      S(),
      T(),
      (B = i()),
      y(),
      ke(),
      A(),
      j(),
      a(),
      g(),
      pe(),
      F(),
      Re(),
      Le(),
      k(),
      be(),
      ce(),
      N(),
      r(),
      Me(),
      ve(),
      Te(),
      ge(),
      We(),
      Be(),
      He(),
      O(),
      R(),
      (V = u()),
      (et = [{ value: `role-library-folder-editor` }, { value: `role-library-folder-viewer` }]));
  }))();
}
function tt(e) {
  let n = (0, U.c)(15),
    { onClose: r, onCloseAutoFocus: i } = e,
    a = t(m),
    o = _(),
    s = v(),
    c = C(ye),
    l = C(se),
    u = C(M);
  if (c == null) return null;
  let d = `${l}:${c}:${u}`,
    f;
  n[0] === a
    ? (f = n[1])
    : ((f = (e, t, n, r) =>
        a
          .get(we)
          .mutateAsync({
            requestBody: { name: e, ...(r ? { make_workspace_default: !0 } : {}) },
            signal: t,
            localPageId: n,
          })),
      (n[0] = a),
      (n[1] = f));
  let p;
  n[2] !== c || n[3] !== s.pathname || n[4] !== o || n[5] !== r
    ? ((p = (e) => {
        (r(`create`),
          o(`/spaces/new?creation=${encodeURIComponent(e)}`, {
            replace: s.pathname === `/spaces/new`,
            state: { sidebarArea: `space`, spaceSidebarAccountId: c },
          }));
      }),
      (n[2] = c),
      (n[3] = s.pathname),
      (n[4] = o),
      (n[5] = r),
      (n[6] = p))
    : (p = n[6]);
  let h;
  n[7] === r ? (h = n[8]) : ((h = () => r(`cancel`)), (n[7] = r), (n[8] = h));
  let g;
  return (
    n[9] !== i || n[10] !== d || n[11] !== f || n[12] !== p || n[13] !== h
      ? ((g = (0, W.jsx)(z, { onCloseAutoFocus: i, createSpace: f, onStarted: p, onClose: h }, d)),
        (n[9] = i),
        (n[10] = d),
        (n[11] = f),
        (n[12] = p),
        (n[13] = h),
        (n[14] = g))
      : (g = n[14]),
    g
  );
}
var U, W;
function G() {
  return (G = e(() => {
    ((U = p()), S(), f(), ke(), r(), be(), H(), (W = u()));
  }))();
}
export { G as n, tt as t };
//# sourceMappingURL=new-space-dialog-38da9be1f291.js.map
