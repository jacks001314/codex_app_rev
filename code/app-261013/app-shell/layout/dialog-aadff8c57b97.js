import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  AO as r,
  ASt as i,
  CO as a,
  Cat as o,
  Cot as s,
  DV as c,
  EDt as l,
  EPt as u,
  GE as d,
  IDt as f,
  Ixt as p,
  Kat as m,
  NV as h,
  Pxt as g,
  Rnt as _,
  SU as v,
  TJ as y,
  TO as b,
  VDt as x,
  Vxt as S,
  WE as C,
  Xot as w,
  Yot as T,
  _Mt as E,
  _O as D,
  _xt as O,
  cz as k,
  fO as A,
  gMt as j,
  ixt as M,
  jDt as N,
  jSt as P,
  kIt as F,
  lO as I,
  lV as L,
  mO as ee,
  mW as R,
  oO as te,
  pK as z,
  qat as ne,
  rW as re,
  sMt as B,
  sz as ie,
  t3 as V,
  vO as ae,
  vzt as H,
  wot as oe,
  xMt as U,
  xat as W,
  yzt as se,
  z9 as ce,
  zH as le,
  zxt as ue,
} from "./app-shared-bbfeca5e5737.js";
import {
  AUn as de,
  BIn as G,
  DIn as fe,
  DV as pe,
  EMr as me,
  EV as K,
  FIn as q,
  Fin as J,
  G4n as he,
  GMr as Y,
  Hin as ge,
  IIn as _e,
  J4n as ve,
  JPn as ye,
  KNn as be,
  MRt as xe,
  NRt as Se,
  OUn as Ce,
  QDr as we,
  RIn as Te,
  SIn as Ee,
  TMr as De,
  XDr as Oe,
  XNn as ke,
  XPn as Ae,
  dMr as je,
  eDr as Me,
  fMr as Ne,
  fV as Pe,
  iPr as Fe,
  nDr as Ie,
  pV as Le,
  sPr as Re,
  tNr as ze,
  vIn as Be,
  wIn as Ve,
  wMr as He,
  xLn as Ue,
  xPn as We,
  yPn as Ge,
} from "./app-initial-5851df3f6cb1.js";
import { a as Ke, i as qe, r as Je } from "./use-workspace-users-9ff632adf20a.js";
import { n as Ye, t as Xe } from "./workspace-team-recipient-suggestions-f88127cfec32.js";
import { n as Ze, t as Qe } from "./dialog-shell-9b9990063b15.js";
import { n as $e, t as et } from "./linkedin-2032ee10f5b5.js";
import {
  a as tt,
  c as nt,
  i as rt,
  l as it,
  n as at,
  o as ot,
  r as st,
  s as ct,
  t as lt,
} from "./model-ca3ddfd9838b.js";
import { n as ut, t as dt } from "./permission-dropdown-ca77aa1add04.js";
import { n as ft, t as pt } from "./twitter-2bc60b5bdd97.js";
function mt(e) {
  "use forget";
  let t = (0, gt.c)(2),
    { role: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n === `edit`
            ? (0, _t.jsx)(f, {
                id: `chatgptProjectSharing.canEdit`,
                defaultMessage: `Can edit`,
                description: `Permission label in project sharing; collaborators can chat, add and remove files, and edit project instructions`,
              })
            : (0, _t.jsx)(f, {
                id: `chatgptProjectSharing.canChat`,
                defaultMessage: `Can chat`,
                description: `Permission label in project sharing; collaborators can view project content and chat, but cannot edit project instructions or sources`,
              })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function ht(e) {
  "use forget";
  let t = (0, gt.c)(4),
    { access: n, workspaceName: r } = e;
  if (n === `link`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, _t.jsx)(f, {
            id: `chatgptProjectSharing.anyoneWithLink`,
            defaultMessage: `Anyone with a link`,
            description: `Project sharing audience option allowing anyone who has the project link to join with chat access`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `workspace_link`) {
    let e;
    return (
      t[1] === r
        ? (e = t[2])
        : ((e = (0, _t.jsx)(f, {
            id: `chatgptProjectSharing.workspaceWithLink`,
            defaultMessage: `Anyone at {workspaceName} with the link`,
            description: `Project sharing audience option allowing members of the named workspace to join with chat access; workspaceName is the workspace display name`,
            values: { workspaceName: r },
          })),
          (t[1] = r),
          (t[2] = e)),
      e
    );
  }
  let i;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, _t.jsx)(f, {
          id: `chatgptProjectSharing.invitedOnly`,
          defaultMessage: `Only those invited`,
          description: `Project sharing audience option that restricts access to existing members and people or groups explicitly invited`,
        })),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
var gt, _t;
function vt() {
  return (vt = e(() => {
    ((gt = H()), N(), (_t = U()));
  }))();
}
function yt(e) {
  "use forget";
  let t = (0, xt.c)(19),
    { disabled: n, editDisabled: r, role: i, onChange: a, onRemoveAccess: o } = e,
    s = r !== void 0 && r,
    c = x(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `chatgptProjectSharing.canChatDescription`,
        defaultMessage: `Chat and view project content`,
        description: `Description under Can chat in the project sharing permissions menu, explaining that the collaborator can read project content and chat without editing it`,
      })),
      (t[0] = c),
      (t[1] = l));
  let u;
  t[2] === l ? (u = t[3]) : ((u = { value: `chat`, description: l }), (t[2] = l), (t[3] = u));
  let d;
  t[4] === c
    ? (d = t[5])
    : ((d = c.formatMessage({
        id: `chatgptProjectSharing.canEditDescription`,
        defaultMessage: `Chat and edit project content`,
        description: `Description under Can edit in the project sharing permissions menu, explaining that the collaborator can chat and modify project content`,
      })),
      (t[4] = c),
      (t[5] = d));
  let p;
  t[6] !== s || t[7] !== d
    ? ((p = { value: `edit`, disabled: s, description: d }), (t[6] = s), (t[7] = d), (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== u || t[10] !== p ? ((m = [u, p]), (t[9] = u), (t[10] = p), (t[11] = m)) : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, St.jsx)(f, {
        id: `chatgptProjectSharing.removeMember`,
        defaultMessage: `Remove from project`,
        description: `Menu action to remove a collaborator or group from the project after confirmation`,
      })),
      (t[12] = h))
    : (h = t[12]);
  let g;
  return (
    t[13] !== n || t[14] !== a || t[15] !== o || t[16] !== i || t[17] !== m
      ? ((g = (0, St.jsx)(dt, {
          disabled: n,
          options: m,
          renderLabel: bt,
          removeLabel: h,
          value: i,
          variant: `ghost`,
          onChange: a,
          onRemoveAccess: o,
        })),
        (t[13] = n),
        (t[14] = a),
        (t[15] = o),
        (t[16] = i),
        (t[17] = m),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
function bt(e) {
  return (0, St.jsx)(mt, { role: e });
}
var xt, St;
function Ct() {
  return (Ct = e(() => {
    ((xt = H()), N(), ut(), vt(), (St = U()));
  }))();
}
function wt(e) {
  "use forget";
  let t = (0, Dt.c)(59),
    {
      canManage: r,
      canShareWorkspaceLink: i,
      currentUserId: o,
      disabled: s,
      isWorkspace: c,
      project: l,
      workspaceName: u,
      onChange: d,
    } = e,
    p;
  t[0] === l.gizmo.sharing?.subjects
    ? (p = t[1])
    : ((p = l.gizmo.sharing?.subjects ?? []), (t[0] = l.gizmo.sharing?.subjects), (t[1] = p));
  let m = p,
    g;
  t[2] === m ? (g = t[3]) : ((g = at(m)), (t[2] = m), (t[3] = g));
  let _ = g,
    y = l.has_tpp_conversation === !0,
    x = l.gizmo.author,
    S = x.display_name || x.user_email || x.user_id,
    C;
  t[4] === o ? (C = t[5]) : ((C = o?.split(`__`)[0]), (t[4] = o), (t[5] = C));
  let w = C,
    T;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { value: `private`, icon: (0, X.jsx)(R, {}) }), (t[6] = T))
    : (T = t[6]);
  let E;
  if (t[7] !== _ || t[8] !== i || t[9] !== y || t[10] !== c) {
    if (((E = [T]), c && (i || _ === `workspace_link`))) {
      let e = y && _ === `private`,
        n;
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, X.jsx)(L, {})), (t[12] = n))
        : (n = t[12]);
      let r;
      (t[13] === e
        ? (r = t[14])
        : ((r = { value: `workspace_link`, disabled: e, icon: n }), (t[13] = e), (t[14] = r)),
        E.push(r));
    }
    if (!c) {
      let e = y && _ !== `link`,
        n;
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, X.jsx)(v, {})), (t[15] = n))
        : (n = t[15]);
      let r;
      (t[16] === e ? (r = t[17]) : ((r = { value: `link`, disabled: e, icon: n }), (t[16] = e), (t[17] = r)),
        E.push(r));
    }
    ((t[7] = _), (t[8] = i), (t[9] = y), (t[10] = c), (t[11] = E));
  } else E = t[11];
  let D;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsx)(`h3`, {
        className: `text-sm font-normal text-secondary select-none`,
        children: (0, X.jsx)(f, {
          id: `shareDialog.whoHasAccess`,
          defaultMessage: `Who has access`,
          description: `Heading above the audience, people, groups, and permissions in a share dialog`,
        }),
      })),
      (t[18] = D))
    : (D = t[18]);
  let O = E.find((e) => e.value === _)?.icon,
    k;
  t[19] === O
    ? (k = t[20])
    : ((k = (0, X.jsx)(`span`, {
        className: `flex size-6 shrink-0 items-center justify-center`,
        children: O,
      })),
      (t[19] = O),
      (t[20] = k));
  let A;
  t[21] !== _ || t[22] !== E || t[23] !== r || t[24] !== s || t[25] !== d || t[26] !== u
    ? ((A = r
        ? (0, X.jsx)(a, {
            align: `start`,
            contentWidth: `menu`,
            disabled: s,
            surface: `chatgpt`,
            triggerButton: (0, X.jsxs)(n, {
              color: `ghostActive`,
              disabled: s,
              size: `inline`,
              allowShrink: !0,
              children: [
                (0, X.jsx)(ie, {
                  disabled: _ === `private`,
                  tooltipContent: (0, X.jsx)(f, {
                    id: `chatgptProjectSharing.linkRole`,
                    defaultMessage: `Shared links give chat-only access. Users can be upgraded to edit access after joining.`,
                    description: `Tooltip on project link access explaining that links grant chat-only permission and owners can upgrade individual members later`,
                  }),
                  children: (0, X.jsx)(`span`, {
                    className: `truncate text-sm`,
                    children: (0, X.jsx)(ht, { access: _, workspaceName: u }),
                  }),
                }),
                (0, X.jsx)(h, { className: `text-secondary` }),
              ],
            }),
            children: (0, X.jsx)(b.RadioGroup, {
              value: _,
              onValueChange: (e) => {
                let t = E.find((t) => t.value === e);
                t != null && !s && !t.disabled && t.value !== _ && d({ type: `access`, access: t.value });
              },
              children: E.map((e) =>
                (0, X.jsx)(
                  b.RadioItem,
                  {
                    disabled: s || e.disabled,
                    icon: e.icon,
                    value: e.value,
                    variant: `chatgpt`,
                    children: (0, X.jsx)(ht, { access: e.value, workspaceName: u }),
                  },
                  e.value,
                ),
              ),
            }),
          })
        : (0, X.jsx)(ie, {
            tooltipContent: (0, X.jsx)(f, {
              id: `chatgptProjectSharing.ownerOnly`,
              defaultMessage: `Only the owner can change permissions`,
              description: `Help in a collaborator's project sharing dialog explaining why access and member roles cannot be changed`,
            }),
            children: (0, X.jsx)(`span`, {
              className: `truncate text-sm select-none`,
              children: (0, X.jsx)(ht, { access: _, workspaceName: u }),
            }),
          })),
      (t[21] = _),
      (t[22] = E),
      (t[23] = r),
      (t[24] = s),
      (t[25] = d),
      (t[26] = u),
      (t[27] = A))
    : (A = t[27]);
  let j;
  t[28] !== k || t[29] !== A
    ? ((j = (0, X.jsxs)(`div`, { className: `flex min-h-9 items-center gap-2`, children: [k, A] })),
      (t[28] = k),
      (t[29] = A),
      (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] !== x.user_id || t[32] !== w || t[33] !== S
    ? ((M =
        x.user_id.split(`__`)[0] === w
          ? (0, X.jsx)(f, {
              id: `chatgptProjectSharing.currentUser`,
              defaultMessage: `{name} <secondary>(you)</secondary>`,
              description: `Member name in project sharing when this row represents the current user; name is their display name or email, and secondary marks the parenthetical annotation`,
              values: { name: S, secondary: Et },
            })
          : S),
      (t[31] = x.user_id),
      (t[32] = w),
      (t[33] = S),
      (t[34] = M))
    : (M = t[34]);
  let N;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(`span`, {
        className: `px-3 text-sm select-none`,
        children: (0, X.jsx)(f, {
          id: `chatgptProjectSharing.owner`,
          defaultMessage: `Owner`,
          description: `Permission label beside the project creator in the sharing dialog`,
        }),
      })),
      (t[35] = N))
    : (N = t[35]);
  let P;
  t[36] !== x.user_id || t[37] !== S || t[38] !== M
    ? ((P = (0, X.jsx)(K, {
        avatarLabel: S,
        colorKey: x.user_id,
        label: M,
        size: `compact`,
        trailingContent: N,
      })),
      (t[36] = x.user_id),
      (t[37] = S),
      (t[38] = M),
      (t[39] = P))
    : (P = t[39]);
  let F;
  if (t[40] !== r || t[41] !== s || t[42] !== y || t[43] !== c || t[44] !== w || t[45] !== d || t[46] !== m) {
    let e;
    (t[48] !== r || t[49] !== s || t[50] !== y || t[51] !== c || t[52] !== w || t[53] !== d
      ? ((e = (e) => {
          if (e.type === 3 || e.type === 4) return null;
          let t = e.capabilities.can_write ? `edit` : `chat`,
            n = ct(e),
            i = e.type === 1 && e.user_id.split(`__`)[0] === w,
            a = n;
          return (
            e.type === 2 && e.is_scim_managed
              ? (a = (0, X.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-2`,
                  children: [
                    (0, X.jsx)(`span`, { className: `truncate`, children: n }),
                    (0, X.jsx)(xe, {
                      className: `shrink-0`,
                      variant: `outline`,
                      children: (0, X.jsx)(f, {
                        id: `chatgptProjectSharing.scimManaged`,
                        defaultMessage: `SCIM`,
                        description: `Badge beside a project sharing group managed by directory synchronization; SCIM is the standard for automated identity provisioning`,
                      }),
                    }),
                  ],
                }))
              : i
                ? (a = (0, X.jsx)(f, {
                    id: `chatgptProjectSharing.currentUser`,
                    defaultMessage: `{name} <secondary>(you)</secondary>`,
                    description: `Member name in project sharing when this row represents the current user; name is their display name or email, and secondary marks the parenthetical annotation`,
                    values: { name: n, secondary: Tt },
                  }))
                : e.type === 10 &&
                  (a = (0, X.jsx)(`span`, {
                    className: `text-secondary`,
                    children: c
                      ? n
                      : (0, X.jsx)(f, {
                          id: `chatgptProjectSharing.inviteSent`,
                          defaultMessage: `{email} (invite sent)`,
                          description: `Email row in a personal project's sharing dialog for a pending invitation; email is the invited address and the annotation indicates it has not yet been accepted`,
                          values: { email: n },
                        }),
                  })),
            (0, X.jsx)(
              K,
              {
                avatarLabel: n,
                colorKey: e.type === 1 ? e.user_id : void 0,
                label: a,
                size: `compact`,
                trailingContent: r
                  ? (0, X.jsx)(yt, {
                      disabled: s,
                      editDisabled: y && t !== `edit`,
                      role: t,
                      onChange: (n) => {
                        n !== t && d({ type: `role`, subject: e, role: n });
                      },
                      onRemoveAccess: () => d({ type: `remove`, subject: e }),
                    })
                  : (0, X.jsx)(`span`, {
                      className: `px-3 text-sm select-none`,
                      children: (0, X.jsx)(mt, { role: t }),
                    }),
              },
              nt(e),
            )
          );
        }),
        (t[48] = r),
        (t[49] = s),
        (t[50] = y),
        (t[51] = c),
        (t[52] = w),
        (t[53] = d),
        (t[54] = e))
      : (e = t[54]),
      (F = m.map(e)),
      (t[40] = r),
      (t[41] = s),
      (t[42] = y),
      (t[43] = c),
      (t[44] = w),
      (t[45] = d),
      (t[46] = m),
      (t[47] = F));
  } else F = t[47];
  let I;
  return (
    t[55] !== P || t[56] !== F || t[57] !== j
      ? ((I = (0, X.jsxs)(`section`, {
          className: `flex flex-col gap-2`,
          children: [
            D,
            (0, X.jsxs)(`div`, {
              className: `flex max-h-56 flex-col gap-1 overflow-y-auto overscroll-contain pb-1`,
              children: [j, P, F],
            }),
          ],
        })),
        (t[55] = P),
        (t[56] = F),
        (t[57] = j),
        (t[58] = I))
      : (I = t[58]),
    I
  );
}
function Tt(e) {
  return (0, X.jsx)(`span`, { className: `text-secondary`, children: e }, `current-user`);
}
function Et(e) {
  return (0, X.jsx)(`span`, { className: `text-secondary`, children: e }, `current-user`);
}
var Dt, X;
function Ot() {
  return (Ot = e(() => {
    ((Dt = H()), N(), Se(), V(), r(), y(), k(), pe(), vt(), tt(), Ct(), (X = U()));
  }))();
}
function kt(e) {
  "use forget";
  let t = (0, At.c)(39),
    { action: r, onClose: i, onConfirm: a } = e,
    o = ke(),
    s;
  t[0] !== r.label || t[1] !== r.type
    ? ((s =
        r.type === `library`
          ? (0, Z.jsx)(f, {
              id: `chatgptProjectSharing.confirmLibrary.title`,
              defaultMessage: `Share project?`,
              description: `Title of the confirmation shown before sharing a private project with Library source files`,
            })
          : (0, Z.jsx)(f, {
              id: `chatgptProjectSharing.confirmRemove.title`,
              defaultMessage: `Remove {name} from this project?`,
              description: `Confirmation title before removing a collaborator or group from a project; name is their display name or email`,
              values: { name: r.label },
            })),
      (t[0] = r.label),
      (t[1] = r.type),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== r.type || t[4] !== o
    ? ((c =
        r.type === `library` && o
          ? (0, Z.jsx)(f, {
              id: `chatgptProjectSharing.confirmLibrary.description.space`,
              defaultMessage: `Sharing removes Space files from this project's sources. The files remain in your Space, but shared projects can't access them.`,
              description: `Warning before sharing a project: Space-backed files are detached from the project, not deleted from the user's Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : null),
      (t[3] = r.type),
      (t[4] = o),
      (t[5] = c))
    : (c = t[5]);
  let u;
  t[6] !== r.type || t[7] !== o
    ? ((u =
        r.type === `library` && !o
          ? (0, Z.jsx)(f, {
              id: `chatgptProjectSharing.confirmLibrary.description`,
              defaultMessage: `Sharing removes Library files from this project's sources. The files remain in your Library, but shared projects cannot access them.`,
              description: `Warning before sharing a project: Library-backed files are detached from the project, not deleted from the user's Library`,
            })
          : null),
      (t[6] = r.type),
      (t[7] = o),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === r.type
    ? (d = t[10])
    : ((d =
        r.type === `library`
          ? null
          : (0, Z.jsx)(f, {
              id: `chatgptProjectSharing.confirmRemove.description`,
              defaultMessage: `They will lose access to all content in this project`,
              description: `Warning explaining the effect of confirming removal of a project collaborator or group`,
            })),
      (t[9] = r.type),
      (t[10] = d));
  let p;
  t[11] !== c || t[12] !== u || t[13] !== d
    ? ((p = (0, Z.jsxs)(Z.Fragment, { children: [c, u, d] })),
      (t[11] = c),
      (t[12] = u),
      (t[13] = d),
      (t[14] = p))
    : (p = t[14]);
  let m;
  t[15] !== i || t[16] !== a
    ? ((m = () => {
        (a(), i());
      }),
      (t[15] = i),
      (t[16] = a),
      (t[17] = m))
    : (m = t[17]);
  let h;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(f, {
        id: `chatgptProjectSharing.confirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel a project sharing or collaborator removal confirmation without changing access`,
      })),
      (t[18] = h))
    : (h = t[18]);
  let g;
  t[19] === i
    ? (g = t[20])
    : ((g = (0, Z.jsx)(n, {
        color: `secondary`,
        size: `dialogAction`,
        type: `button`,
        onClick: i,
        children: h,
      })),
      (t[19] = i),
      (t[20] = g));
  let _ = r.type === `remove` ? `danger` : `primary`,
    v;
  t[21] === r.type
    ? (v = t[22])
    : ((v =
        r.type === `library`
          ? (0, Z.jsx)(f, {
              id: `chatgptProjectSharing.confirmLibrary.confirm`,
              defaultMessage: `Share and remove`,
              description: `Button confirming sharing the project and detaching its Library source files`,
            })
          : (0, Z.jsx)(f, {
              id: `chatgptProjectSharing.confirmRemove.confirm`,
              defaultMessage: `Remove`,
              description: `Button confirming removal of a collaborator or group from the project`,
            })),
      (t[21] = r.type),
      (t[22] = v));
  let y;
  t[23] !== v || t[24] !== _
    ? ((y = (0, Z.jsx)(n, { color: _, size: `dialogAction`, type: `submit`, children: v })),
      (t[23] = v),
      (t[24] = _),
      (t[25] = y))
    : (y = t[25]);
  let b;
  t[26] !== y || t[27] !== g
    ? ((b = (0, Z.jsxs)(Z.Fragment, { children: [g, y] })), (t[26] = y), (t[27] = g), (t[28] = b))
    : (b = t[28]);
  let x;
  t[29] !== r.fileNames || t[30] !== r.type
    ? ((x =
        r.type === `library`
          ? (0, Z.jsx)(I, {
              children: (0, Z.jsx)(`p`, {
                className: `text-sm text-secondary`,
                children: (0, Z.jsx)(l, { value: r.fileNames }),
              }),
            })
          : null),
      (t[29] = r.fileNames),
      (t[30] = r.type),
      (t[31] = x))
    : (x = t[31]);
  let S;
  return (
    t[32] !== i || t[33] !== s || t[34] !== b || t[35] !== x || t[36] !== p || t[37] !== m
      ? ((S = (0, Z.jsx)(Qe, { title: s, subtitle: p, onClose: i, onSubmit: m, footer: b, children: x })),
        (t[32] = i),
        (t[33] = s),
        (t[34] = b),
        (t[35] = x),
        (t[36] = p),
        (t[37] = m),
        (t[38] = S))
      : (S = t[38]),
    S
  );
}
var At, Z;
function jt() {
  return (jt = e(() => {
    ((At = H()), N(), V(), A(), be(), Ze(), (Z = U()));
  }))();
}
async function Mt({ scope: e, account: t, projectId: n, change: r }) {
  let i = t.id;
  if (e.get(Y) !== i) return `cancelled`;
  let a = t.structure === `workspace`;
  if (
    a &&
    (await e.queryClient.cancelQueries({ queryKey: [`accounts`, `settings`, i] }),
    await me(i),
    e.get(Y) !== i)
  )
    return `cancelled`;
  let [o, s] = await Promise.all([Ue(n), a ? He(e, i) : void 0]);
  if (e.get(Y) !== i) return `cancelled`;
  (fe(e.queryClient, o), s != null && e.queryClient.setQueryData([`accounts`, `settings`, i], s));
  let c = st(o, t, s);
  if (
    !c.canOpen ||
    (r.type === `invite` ? !c.canInvite : !c.canManage) ||
    (r.type === `access` && r.access === `workspace_link` && !c.canShareWorkspaceLink) ||
    (r.type === `access` && r.access === `link` && a)
  )
    return `permission`;
  let l = o.gizmo.sharing?.subjects ?? [],
    u = l,
    d = { project_id: n },
    f = a ? i : void 0;
  if (r.type === `access`)
    ((u = l.filter((e) => e.type !== 3 && e.type !== 4)),
      r.access !== `private` && u.push({ type: r.access === `link` ? 4 : 3, capabilities: lt.chat }),
      (d.add_or_replace = [
        {
          type: r.access,
          capabilities: r.access === `private` ? { ...lt.chat, can_view_config: !1 } : lt.chat,
        },
      ]));
  else if (r.type === `invite`) {
    let e = new Set(l.map(nt)),
      t = r.subjects.filter((t) => !e.has(nt(t)));
    ((u = [...l, ...t]), (d.add_or_replace = t.map((e) => it(e, f))));
  } else {
    let e = nt(r.subject),
      t = l.find((t) => nt(t) === e);
    if (t == null) return `saved`;
    if (r.type === `remove`) ((u = l.filter((t) => nt(t) !== e)), (d.remove = [it(t, f)]));
    else {
      let n = { ...t, capabilities: lt[r.role] };
      ((u = l.map((t) => (nt(t) === e ? n : t))), (d.add_or_replace = [it(n, f)]));
    }
  }
  if (r.type !== `access`) {
    let e = l.find((e) => e.type === 3 || e.type === 4);
    d.add_or_replace = [
      ...(d.add_or_replace ?? []),
      e == null ? { type: `private`, capabilities: { ...lt.chat, can_view_config: !1 } } : it(e, f),
    ];
  }
  if (o.has_tpp_conversation && ot(l, u)) return `work`;
  let p = o.files.flatMap((e) =>
      e.file_response_type === `full_file_response` && e.library_file_id ? [e.name || e.file_id] : [],
    ),
    m = o.gizmo.share_recipient === `private` && l.length === 0 && u.length > 0 && p.length > 0;
  if (
    (r.type === `remove` || m) &&
    (!(await new Promise((t) => {
      ve(e, kt, {
        action:
          r.type === `remove` ? { type: `remove`, label: ct(r.subject) } : { type: `library`, fileNames: p },
        onConfirm: () => t(!0),
        onClose: () => t(!1),
      });
    })) ||
      e.get(Y) !== i)
  )
    return `cancelled`;
  let h = await Fe.safePost(`/projects/share`, { requestBody: d });
  if (e.get(Y) !== i) return `cancelled`;
  if (h.error != null) return `permission`;
  let g = h.resource ?? (await Ue(n));
  return e.get(Y) === i
    ? (fe(e.queryClient, g), _e(e, { flatConversationHistory: !1, project: g }), `saved`)
    : `cancelled`;
}
function Nt() {
  return (Nt = e(() => {
    (De(), ze(), Be(), he(), Re(), Ve(), q(), jt(), tt());
  }))();
}
function Pt(e) {
  "use forget";
  let t = (0, Ft.c)(3),
    { isWorkspace: n } = e,
    r = Ie(`2821958399`);
  if (n) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e = (0, It.jsx)(`p`, {
            className: `text-xs text-secondary select-none`,
            children: r
              ? (0, It.jsx)(f, {
                  id: `chatgptProjectSharing.workspaceDisclaimer`,
                  defaultMessage: `All project content is visible to collaborators. To protect personal data, shared projects disable personal memory.`,
                  description: `Privacy notice in the workspace project sharing footer when shared-project Google Drive sync is enabled; collaborators see project contents, while personal memory is disabled`,
                })
              : (0, It.jsx)(f, {
                  id: `chatgptProjectSharing.workspaceDisclaimerWithoutDriveSync`,
                  defaultMessage: `All project content is visible to collaborators. To protect personal data, shared projects disable personal memory and Google Drive Sync.`,
                  description: `Privacy notice in the workspace project sharing footer when shared-project Google Drive sync is disabled; collaborators see project contents, while personal memory and Google Drive Sync are disabled`,
                }),
          })),
          (t[0] = r),
          (t[1] = e)),
      e
    );
  }
  let i;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, It.jsx)(C, {
          content: (0, It.jsx)(f, {
            id: `chatgptProjectSharing.personalDisclaimer`,
            defaultMessage: `All project contents are visible to collaborators. Personal memories are disabled for shared projects.`,
            description: `Body of the privacy notice in a personal project's sharing dialog explaining content visibility and the exclusion of personal memories`,
          }),
          title: (0, It.jsx)(f, {
            id: `chatgptProjectSharing.personalDisclaimerTitle`,
            defaultMessage: `This project may include personal information`,
            description: `Title of the privacy notice in a personal project's sharing dialog, cautioning the owner before inviting collaborators`,
          }),
          variant: `privacyNotice`,
        })),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var Ft, It;
function Lt() {
  return (Lt = e(() => {
    ((Ft = H()), N(), d(), Me(), (It = U()));
  }))();
}
function Rt(e) {
  "use forget";
  let t = (0, Ht.c)(61),
    {
      accountId: n,
      allowScimGroups: r,
      canListWorkspaceMembers: i,
      disabled: a,
      isWorkspace: o,
      portalContainer: s,
      project: c,
      role: l,
      selected: u,
      onRoleChange: d,
      onChange: p,
    } = e,
    m = x(),
    [h, g] = (0, Ut.useState)(``),
    { data: _, isPending: v, isError: y } = Ke(i && !a ? h : ``),
    { data: b, isPending: S, isError: C } = qe(i && !a ? h : ``),
    { data: w, isLoading: T, isError: E } = ue(Ye, n, { enabled: i && !a }) ?? {},
    D,
    O;
  if (
    t[0] !== c.gizmo.author.user_email ||
    t[1] !== c.gizmo.author.user_id ||
    t[2] !== c.gizmo.sharing?.subjects ||
    t[3] !== u
  ) {
    let e = [...(c.gizmo.sharing?.subjects ?? []), ...u];
    ((D = new Set(e.map(nt))),
      D.add(`user:${c.gizmo.author.user_id.split(`__`)[0]}`),
      (O = new Set([c.gizmo.author.user_email, ...e.flatMap(Vt)].flatMap(Bt))),
      (t[0] = c.gizmo.author.user_email),
      (t[1] = c.gizmo.author.user_id),
      (t[2] = c.gizmo.sharing?.subjects),
      (t[3] = u),
      (t[4] = D),
      (t[5] = O));
  } else ((D = t[4]), (O = t[5]));
  let k = O,
    A = [],
    j = lt[l];
  if (i) {
    for (let e of _ ?? [])
      D.has(`user:${e.account_user_id.split(`__`)[0]}`) ||
        (e.email != null && k.has(e.email.trim().toLowerCase())) ||
        A.push({
          id: `user:${e.account_user_id.split(`__`)[0]}`,
          colorKey: e.account_user_id,
          label: e.name || e.email || e.account_user_id,
          secondaryLabel: e.email ?? void 0,
          subject: {
            type: 1,
            user_id: e.account_user_id,
            user_name: e.name ?? null,
            user_email: e.email ?? null,
            avatar_url: null,
            capabilities: j,
          },
        });
    for (let e of b ?? [])
      D.has(`group:${e.id}`) ||
        (!r && e.is_scim_managed) ||
        A.push({
          id: `group:${e.id}`,
          label: e.name,
          subject: {
            type: 2,
            group_id: e.id,
            group_name: e.name,
            is_scim_managed: e.is_scim_managed === !0,
            capabilities: j,
          },
        });
    for (let e of E ? [] : (w ?? []))
      D.has(`group:${e.id}`) ||
        A.some((t) => t.id === `group:${e.id}`) ||
        !e.name.toLocaleLowerCase().includes(h.trim().toLocaleLowerCase()) ||
        A.push({
          id: `group:${e.id}`,
          label: e.name,
          subject: { type: 2, group_id: e.id, group_name: e.name, is_scim_managed: !1, capabilities: j },
        });
  }
  let M = h.trim().toLowerCase(),
    N = F().safeParse(M).success;
  if (N && !k.has(M) && !A.some((e) => e.subject.type === 1 && e.subject.user_email?.toLowerCase() === M)) {
    let e;
    (t[6] !== j || t[7] !== M
      ? ((e = { type: 10, user_email: M, capabilities: j }), (t[6] = j), (t[7] = M), (t[8] = e))
      : (e = t[8]),
      A.push({
        id: `email:${M}`,
        chipLabel: M,
        label: m.formatMessage(
          {
            id: `chatgptProjectSharing.invite.emailOption`,
            defaultMessage: `Invite "{email}"`,
            description: `Option in the project sharing picker for adding the typed email to an invitation; email is the exact address entered by the user`,
          },
          { email: M },
        ),
        subject: e,
      }));
  }
  let P;
  if (N && k.has(M)) {
    let e;
    (t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Wt.jsx)(f, {
          id: `chatgptProjectSharing.invite.alreadyAdded`,
          defaultMessage: `This person already has access or is selected`,
          description: `Message in the project sharing picker when an entered email belongs to the owner, an existing member, or a selected invitee`,
        })),
        (t[9] = e))
      : (e = t[9]),
      (P = e));
  } else if (o) {
    let e;
    (t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Wt.jsx)(f, {
          id: `chatgptProjectSharing.invite.noWorkspaceMatches`,
          defaultMessage: `Enter a workspace member's email to invite them to the project`,
          description: `Empty search result in workspace project sharing; only existing members of this workspace can be added by email`,
        })),
        (t[10] = e))
      : (e = t[10]),
      (P = e));
  } else {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Wt.jsx)(f, {
          id: `chatgptProjectSharing.invite.noMatches`,
          defaultMessage: `Enter an email address to invite someone`,
          description: `Empty result message in the project sharing picker, guiding users to type a complete email address`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (P = e));
  }
  let I;
  t[12] === m
    ? (I = t[13])
    : ((I = m.formatMessage({
        id: `chatgptProjectSharing.invite.label`,
        defaultMessage: `Invite people or groups`,
        description: `Accessible label for the input used to find workspace members or enter email addresses in the project sharing dialog`,
      })),
      (t[12] = m),
      (t[13] = I));
  let L;
  t[14] !== i || t[15] !== m
    ? ((L = i
        ? m.formatMessage({
            id: `chatgptProjectSharing.invite.workspacePlaceholder`,
            defaultMessage: `Search people, groups, or enter an email`,
            description: `Placeholder in the project sharing picker for workspaces that allow member search; users may search by name or group, or type an email address`,
          })
        : m.formatMessage({
            id: `chatgptProjectSharing.invite.emailPlaceholder`,
            defaultMessage: `Email, separated by commas`,
            description: `Placeholder in the project sharing picker for personal accounts or workspaces without member search; users can enter one email or multiple addresses separated by commas`,
          })),
      (t[14] = i),
      (t[15] = m),
      (t[16] = L))
    : (L = t[16]);
  let ee = P,
    R;
  t[17] === m
    ? (R = t[18])
    : ((R = m.formatMessage({
        id: `chatgptProjectSharing.invite.loading`,
        defaultMessage: `Searching workspace members`,
        description: `Accessible status while the project sharing picker searches workspace members and groups`,
      })),
      (t[17] = m),
      (t[18] = R));
  let te = i && (v || S || T) && A.length === 0 ? void 0 : A,
    z;
  t[19] === u ? (z = t[20]) : ((z = u.map(zt)), (t[19] = u), (t[20] = z));
  let ne;
  t[21] === m
    ? (ne = t[22])
    : ((ne = (e) =>
        m.formatMessage(
          {
            id: `chatgptProjectSharing.invite.removeSelection`,
            defaultMessage: `Remove {name} from the invitation`,
            description: `Accessible label on a selected project invitee's remove button; name is the person's or group's display name or email`,
          },
          { name: e.label },
        )),
      (t[21] = m),
      (t[22] = ne));
  let re;
  t[23] !== a || t[24] !== d || t[25] !== h || t[26] !== l || t[27] !== u.length
    ? ((re = u.length > 0 && h.trim() === `` ? (0, Wt.jsx)(yt, { disabled: a, role: l, onChange: d }) : null),
      (t[23] = a),
      (t[24] = d),
      (t[25] = h),
      (t[26] = l),
      (t[27] = u.length),
      (t[28] = re))
    : (re = t[28]);
  let B;
  t[29] !== j || t[30] !== k || t[31] !== p || t[32] !== u
    ? ((B = (e) => {
        if (!e.includes(`,`)) {
          g(e);
          return;
        }
        let t = [...u],
          n = new Set(k),
          r = [];
        for (let i of e.split(`,`)) {
          let e = i.trim().toLowerCase();
          e !== `` &&
            (F().safeParse(e).success
              ? n.has(e) || (n.add(e), t.push({ type: 10, user_email: e, capabilities: j }))
              : r.push(i.trim()));
        }
        (p(t), g(r.join(`, `)));
      }),
      (t[29] = j),
      (t[30] = k),
      (t[31] = p),
      (t[32] = u),
      (t[33] = B))
    : (B = t[33]);
  let ie, V;
  t[34] !== p || t[35] !== u
    ? ((ie = (e) => p(u.filter((t) => nt(t) !== e.id))),
      (V = (e) => {
        (p([...u, e.subject]), g(``));
      }),
      (t[34] = p),
      (t[35] = u),
      (t[36] = ie),
      (t[37] = V))
    : ((ie = t[36]), (V = t[37]));
  let ae;
  t[38] !== a ||
  t[39] !== P ||
  t[40] !== s ||
  t[41] !== h ||
  t[42] !== B ||
  t[43] !== ie ||
  t[44] !== V ||
  t[45] !== I ||
  t[46] !== L ||
  t[47] !== R ||
  t[48] !== te ||
  t[49] !== z ||
  t[50] !== ne ||
  t[51] !== re
    ? ((ae = (0, Wt.jsx)(Pe, {
        ariaLabel: I,
        placeholder: L,
        disabled: a,
        emptyMessage: ee,
        loadingLabel: R,
        options: te,
        portalContainer: s,
        query: h,
        selectedOptions: z,
        getRemoveLabel: ne,
        trailingContent: re,
        onQueryChange: B,
        onRemoveOption: ie,
        onSelectOption: V,
      })),
      (t[38] = a),
      (t[39] = P),
      (t[40] = s),
      (t[41] = h),
      (t[42] = B),
      (t[43] = ie),
      (t[44] = V),
      (t[45] = I),
      (t[46] = L),
      (t[47] = R),
      (t[48] = te),
      (t[49] = z),
      (t[50] = ne),
      (t[51] = re),
      (t[52] = ae))
    : (ae = t[52]);
  let H;
  t[53] !== i || t[54] !== C || t[55] !== E || t[56] !== y
    ? ((H =
        i && (y || C || E)
          ? (0, Wt.jsx)(`p`, {
              className: `text-sm text-secondary`,
              role: `status`,
              children: (0, Wt.jsx)(f, {
                id: `chatgptProjectSharing.invite.searchError`,
                defaultMessage: `Workspace search is unavailable. You can still enter an email address.`,
                description: `Message when searching workspace members or groups fails in project sharing; inviting an existing workspace member by email is still supported`,
              }),
            })
          : null),
      (t[53] = i),
      (t[54] = C),
      (t[55] = E),
      (t[56] = y),
      (t[57] = H))
    : (H = t[57]);
  let oe;
  return (
    t[58] !== ae || t[59] !== H
      ? ((oe = (0, Wt.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [ae, H] })),
        (t[58] = ae),
        (t[59] = H),
        (t[60] = oe))
      : (oe = t[60]),
    oe
  );
}
function zt(e) {
  return { id: nt(e), label: ct(e), subject: e };
}
function Bt(e) {
  return e == null ? [] : [e.trim().toLowerCase()];
}
function Vt(e) {
  return e.type === 1 || e.type === 10 ? [e.user_email] : [];
}
var Ht, Ut, Wt;
function Gt() {
  return (Gt = e(() => {
    ((Ht = H()), g(), (Ut = se()), N(), u(), Xe(), Je(), Le(), tt(), Ct(), (Wt = U()));
  }))();
}
function Kt(e) {
  "use forget";
  let t = (0, qt.c)(9),
    { project: r, disabled: i } = e,
    a = p(s),
    o = x(),
    c = r.gizmo.display.name,
    l;
  t[0] === r ? (l = t[1]) : ((l = rt(r)), (t[0] = r), (t[1] = l));
  let u = encodeURIComponent(l),
    d = encodeURIComponent(c),
    f = `https://www.linkedin.com/shareArticle?url=${u}&text=${d}`,
    m;
  if (t[2] !== i || t[3] !== o || t[4] !== a || t[5] !== f || t[6] !== d || t[7] !== u) {
    let e = [
      { name: `LinkedIn`, icon: et, href: f, service: ce.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_LINKEDIN },
      {
        name: `Reddit`,
        icon: z,
        href: `https://www.reddit.com/submit?url=${u}&title=${d}`,
        service: ce.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_REDDIT,
      },
      {
        name: `X`,
        icon: pt,
        href: `https://twitter.com/intent/tweet?url=${u}&text=${d}`,
        service: ce.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_X,
      },
    ];
    ((m = (0, Jt.jsx)(Jt.Fragment, {
      children: e.map((e) => {
        let { name: t, icon: r, href: s, service: c } = e,
          l = o.formatMessage(
            {
              id: `chatgptProjectSharing.socialShare`,
              defaultMessage: `Share on {serviceName}`,
              description: `Accessible label and tooltip for a personal project sharing button that opens an external social site's post composer; serviceName is LinkedIn, Reddit, or X`,
            },
            { serviceName: t },
          );
        return (0, Jt.jsx)(
          ie,
          {
            tooltipContent: l,
            children: (0, Jt.jsx)(n, {
              "aria-label": l,
              color: `secondary`,
              disabled: i,
              radius: `full`,
              size: `dialogAction`,
              type: `button`,
              uniform: !0,
              onClick: (e) => {
                (we(a, Ce, { service: c }),
                  Ae({
                    event: e,
                    href: s,
                    initiator: `open_in_browser_bridge`,
                    openTarget: `external-browser`,
                  }));
              },
              children: (0, Jt.jsx)(r, { "aria-hidden": `true` }),
            }),
          },
          t,
        );
      }),
    })),
      (t[2] = i),
      (t[3] = o),
      (t[4] = a),
      (t[5] = f),
      (t[6] = d),
      (t[7] = u),
      (t[8] = m));
  } else m = t[8];
  return m;
}
var qt, Jt;
function Yt() {
  return (Yt = e(() => {
    ((qt = H()), _(), de(), g(), N(), V(), ye(), y(), k(), $e(), ft(), Oe(), oe(), tt(), (Jt = U()));
  }))();
}
function Xt(e) {
  "use forget";
  let t = (0, en.c)(44),
    { accountId: n, disabled: r, isProjectReady: a, project: o, onClose: c } = e,
    l = p(s),
    { data: u } = ge(),
    d;
  t[0] === u
    ? (d = t[1])
    : ((d = u?.structure === `workspace` ? u.account_user_id : u?.account_user_id.split(`__`)[0]),
      (t[0] = u),
      (t[1] = d));
  let m = d,
    h;
  t[2] !== n || t[3] !== o.gizmo.id
    ? ((h = [`chatgpt-project-share-work-conversations`, n, o.gizmo.id]),
      (t[2] = n),
      (t[3] = o.gizmo.id),
      (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] !== n || t[6] !== o.gizmo.id || t[7] !== l
    ? ((g = async (e) => {
        let { signal: t } = e,
          r = [],
          a = `0`;
        do {
          if ((t.throwIfAborted(), l.get(Y) !== n)) throw new i();
          let e = await Te({ cursor: a, limit: 50, ownedOnly: !1, projectId: o.gizmo.id, signal: t });
          if ((t.throwIfAborted(), e.items.some($t))) return null;
          (r.push(...e.items.filter(Qt)), (a = e.cursor));
        } while (a);
        return (0, tn.default)(r, `id`);
      }),
      (t[5] = n),
      (t[6] = o.gizmo.id),
      (t[7] = l),
      (t[8] = g))
    : (g = t[8]);
  let _;
  t[9] !== a || t[10] !== h || t[11] !== g
    ? ((_ = { queryKey: h, enabled: a, staleTime: 0, gcTime: 0, retry: !1, queryFn: g }),
      (t[9] = a),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _))
    : (_ = t[12]);
  let { data: v, isFetching: y, isError: b } = w(_),
    x;
  t[13] !== n || t[14] !== r || t[15] !== c || t[16] !== l
    ? ((x = function (e, t) {
        if (e.button === 0 || e.button === 1) {
          if (r || l.get(Y) !== n) {
            e.preventDefault();
            return;
          }
          e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey
            ? c()
            : t != null &&
              Ae({ event: e, href: t, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
        }
      }),
      (t[13] = n),
      (t[14] = r),
      (t[15] = c),
      (t[16] = l),
      (t[17] = x))
    : (x = t[17]);
  let S = x,
    T;
  if (a && !y && !b && v != null && v.length > 0) {
    let e;
    t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(f, {
          id: `chatgptProjectSharing.workWarning.removeListed`,
          defaultMessage: `Remove all Work conversations from this project to share it:`,
          description: `Instructions above a list of linked Work conversations that prevent sharing a project; the owner must remove all Work conversations, including any not listed`,
        })),
        (t[18] = e))
      : (e = t[18]);
    let n;
    if (
      t[19] !== m ||
      t[20] !== v ||
      t[21] !== r ||
      t[22] !== S ||
      t[23] !== o.gizmo.id ||
      t[24] !== o.gizmo.short_url
    ) {
      let e;
      (t[26] !== m || t[27] !== r || t[28] !== S || t[29] !== o.gizmo.id || t[30] !== o.gizmo.short_url
        ? ((e = (e) => {
            let t =
                e.title?.trim() ||
                (0, Q.jsx)(f, {
                  id: `chatgptProjectSharing.workWarning.untitled`,
                  defaultMessage: `Untitled conversation`,
                  description: `Link label for a Work conversation that blocks project sharing when its title is empty or unavailable`,
                }),
              n = `owner` in e ? e.owner.user_id : m,
              i = null;
            if (n != null && n !== m) {
              let t = o.gizmo.short_url ?? o.gizmo.id;
              ((i = new URL(
                `/g/${encodeURIComponent(t)}/shared/c/${encodeURIComponent(e.id)}`,
                `https://chatgpt.com`,
              )),
                i.searchParams.set(`owner_user_id`, n));
            }
            let a = i?.toString() ?? null;
            return (0, Q.jsx)(
              `li`,
              {
                className: `break-words`,
                dir: `auto`,
                children:
                  a == null
                    ? (0, Q.jsx)(M, {
                        className: `cursor-interaction text-default underline underline-offset-2`,
                        "aria-disabled": r,
                        to: W(e.id, { gizmoId: o.gizmo.id }),
                        onClick: (e) => S(e, null),
                        onAuxClick: (e) => S(e, null),
                        children: t,
                      })
                    : (0, Q.jsx)(Ge, {
                        className: `cursor-interaction text-default underline underline-offset-2`,
                        "aria-disabled": r,
                        href: a,
                        initiator: `open_in_browser_bridge`,
                        onClick: (e) => S(e, a),
                        onAuxClick: (e) => S(e, a),
                        onContextMenu: Zt,
                        children: t,
                      }),
              },
              e.id,
            );
          }),
          (t[26] = m),
          (t[27] = r),
          (t[28] = S),
          (t[29] = o.gizmo.id),
          (t[30] = o.gizmo.short_url),
          (t[31] = e))
        : (e = t[31]),
        (n = v.slice(0, 5).map(e)),
        (t[19] = m),
        (t[20] = v),
        (t[21] = r),
        (t[22] = S),
        (t[23] = o.gizmo.id),
        (t[24] = o.gizmo.short_url),
        (t[25] = n));
    } else n = t[25];
    let i;
    t[32] === n
      ? (i = t[33])
      : ((i = (0, Q.jsx)(`ul`, {
          className: `mt-1 flex min-w-0 list-disc flex-col gap-1 ps-5`,
          children: n,
        })),
        (t[32] = n),
        (t[33] = i));
    let a;
    t[34] === v.length
      ? (a = t[35])
      : ((a =
          v.length > 5
            ? (0, Q.jsx)(`div`, {
                className: `mt-1 ps-5`,
                children: (0, Q.jsx)(f, {
                  id: `chatgptProjectSharing.workWarning.remaining`,
                  defaultMessage: `{remainingCount, plural, one {And # more} other {And # more}}`,
                  description: `Number of additional Work conversations preventing project sharing beyond the five linked conversations shown above`,
                  values: { remainingCount: v.length - 5 },
                }),
              })
            : null),
        (t[34] = v.length),
        (t[35] = a));
    let s;
    (t[36] !== i || t[37] !== a
      ? ((s = (0, Q.jsxs)(Q.Fragment, { children: [e, i, a] })), (t[36] = i), (t[37] = a), (t[38] = s))
      : (s = t[38]),
      (T = s));
  } else {
    let e;
    (t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(f, {
          id: `chatgptProjectSharing.workWarning.removeAll`,
          defaultMessage: `Remove all Work conversations from this project to share it`,
          description: `Instructions when Work conversations block project sharing and the linked conversation list is not available, including while it loads`,
        })),
        (t[39] = e))
      : (e = t[39]),
      (T = e));
  }
  let E;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(f, {
        id: `chatgptProjectSharing.workWarning.title`,
        defaultMessage: `Projects with Work conversations can’t be shared`,
        description: `Warning title in project sharing when the project contains Work conversations, which prevent granting additional access`,
      })),
      (t[40] = E))
    : (E = t[40]);
  let D;
  return (
    t[41] !== T || t[42] !== y
      ? ((D = (0, Q.jsx)(C, {
          ariaLive: `polite`,
          Icon: le,
          layout: `verticalIcon`,
          variant: `callout`,
          title: E,
          content: (0, Q.jsx)(`div`, { "aria-atomic": `true`, "aria-busy": y, children: T }),
        })),
        (t[41] = T),
        (t[42] = y),
        (t[43] = D))
      : (D = t[43]),
    D
  );
}
function Zt(e) {
  return e.preventDefault();
}
function Qt(e) {
  return e.conversation_origin === `tpp`;
}
function $t(e) {
  return !(`owner` in e);
}
var en, tn, Q;
function nn() {
  return (nn = e(() => {
    ((en = H()),
      P(),
      T(),
      (tn = t(B(), 1)),
      g(),
      N(),
      O(),
      ze(),
      G(),
      J(),
      d(),
      We(),
      ye(),
      y(),
      oe(),
      o(),
      (Q = U()));
  }))();
}
function rn(e) {
  "use forget";
  let t = (0, sn.c)(125),
    { accountId: r, projectId: i, onClose: a } = e,
    o = p(s),
    l = x(),
    u = S(Y),
    { data: d } = ge(),
    h = u === r && d?.id === r,
    g = d?.structure === `workspace`,
    _ = h && g,
    v;
  t[0] === _ ? (v = t[1]) : ((v = { enabled: _ }), (t[0] = _), (t[1] = v));
  let { data: y, isError: b, refetch: T } = ue(je, r, v),
    E;
  t[2] === i ? (E = t[3]) : ((E = Ee(i)), (t[2] = i), (t[3] = E));
  let O;
  t[4] === i ? (O = t[5]) : ((O = () => Ue(i)), (t[4] = i), (t[5] = O));
  let k;
  t[6] !== h || t[7] !== E || t[8] !== O
    ? ((k = { enabled: h, queryKey: E, queryFn: O, staleTime: 0, refetchOnMount: `always` }),
      (t[6] = h),
      (t[7] = E),
      (t[8] = O),
      (t[9] = k))
    : (k = t[9]);
  let { data: A, isFetching: M, isError: N, refetch: P } = w(k),
    F = b ? void 0 : y,
    I;
  t[10] !== d || t[11] !== A || t[12] !== F
    ? ((I = st(A, d, F)), (t[10] = d), (t[11] = A), (t[12] = F), (t[13] = I))
    : (I = t[13]);
  let L = I,
    R;
  t[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = []), (t[14] = R)) : (R = t[14]);
  let [z, ne] = (0, cn.useState)(R),
    [B, ie] = (0, cn.useState)(`edit`),
    [V, ae] = (0, cn.useState)(null),
    [H, oe] = (0, cn.useState)(!1),
    U = (0, cn.useRef)(!1),
    [W, se] = (0, cn.useState)(`idle`),
    [ce, le] = (0, cn.useState)(null),
    de = N || (g && b),
    G = !h || H || M || de || !L.canOpen,
    fe;
  t[15] !== g || t[16] !== z
    ? ((fe = g && z.filter(on).length > 5), (t[15] = g), (t[16] = z), (t[17] = fe))
    : (fe = t[17]);
  let pe = fe,
    K = A?.has_tpp_conversation === !0,
    q = L.canInvite && z.length > 0,
    J = H || W === `copying`,
    he = g || q || !K,
    _e;
  t[18] !== d?.name || t[19] !== l
    ? ((_e =
        d?.name ||
        l.formatMessage({
          id: `chatgptProjectSharing.workspaceFallback`,
          defaultMessage: `your workspace`,
          description: `Fallback workspace name in the project sharing audience selector when the workspace's display name is unavailable`,
        })),
      (t[18] = d?.name),
      (t[19] = l),
      (t[20] = _e))
    : (_e = t[20]);
  let ve = _e,
    ye;
  t[21] !== d || t[22] !== r || t[23] !== G || t[24] !== i || t[25] !== o
    ? ((ye = function (e) {
        return G || U.current || d == null
          ? Promise.resolve(!1)
          : ((U.current = !0),
            oe(!0),
            le(null),
            Mt({ scope: o, account: d, projectId: i, change: e })
              .then((e) => (e === `saved` ? (se(`idle`), !0) : (e !== `cancelled` && le(e), !1)))
              .catch(() => (o.get(Y) === r && le(`save`), !1))
              .finally(() => {
                ((U.current = !1), oe(!1));
              }));
      }),
      (t[21] = d),
      (t[22] = r),
      (t[23] = G),
      (t[24] = i),
      (t[25] = o),
      (t[26] = ye))
    : (ye = t[26]);
  let be = ye,
    xe;
  t[27] !== r ||
  t[28] !== q ||
  t[29] !== W ||
  t[30] !== G ||
  t[31] !== K ||
  t[32] !== A ||
  t[33] !== B ||
  t[34] !== be ||
  t[35] !== o ||
  t[36] !== z ||
  t[37] !== pe
    ? ((xe = async function () {
        if (!(G || K || A == null || o.get(Y) !== r)) {
          if (q) {
            if (pe) return;
            (await be({ type: `invite`, subjects: z.map((e) => ({ ...e, capabilities: lt[B] })) })) && ne([]);
            return;
          }
          if (W !== `copying`) {
            (se(`copying`), le(null));
            try {
              (await m.clipboard.writeText(rt(A)), se(`copied`));
            } catch {
              (se(`idle`), le(`copy`));
            }
          }
        }
      }),
      (t[27] = r),
      (t[28] = q),
      (t[29] = W),
      (t[30] = G),
      (t[31] = K),
      (t[32] = A),
      (t[33] = B),
      (t[34] = be),
      (t[35] = o),
      (t[36] = z),
      (t[37] = pe),
      (t[38] = xe))
    : (xe = t[38]);
  let Se = xe,
    Ce;
  if (q) {
    let e;
    (t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(f, {
          id: `chatgptProjectSharing.invite.submit`,
          defaultMessage: `Invite`,
          description: `Button that grants project access to the selected people or groups with the selected permission`,
        })),
        (t[39] = e))
      : (e = t[39]),
      (Ce = e));
  } else if (W === `copied`) {
    let e;
    (t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(f, {
          id: `chatgptProjectSharing.copied`,
          defaultMessage: `Copied`,
          description: `Confirmation on the project sharing copy button after its link was copied to the clipboard`,
        })),
        (t[40] = e))
      : (e = t[40]),
      (Ce = e));
  } else {
    let e;
    (t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(f, {
          id: `chatgptProjectSharing.copyLink`,
          defaultMessage: `Copy link`,
          description: `Button that copies a project link without changing access; only the selected audience can join`,
        })),
        (t[41] = e))
      : (e = t[41]),
      (Ce = e));
  }
  let we;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = {
        permission: (0, $.jsx)(f, {
          id: `chatgptProjectSharing.permissionError`,
          defaultMessage: `This sharing change is not allowed. Check your project and workspace permissions.`,
          description: `Error when project sharing is denied by permissions, workspace policy, or server sharing restrictions; no access change is shown as successful`,
        }),
        work: (0, $.jsx)(f, {
          id: `chatgptProjectSharing.workError`,
          defaultMessage: `Remove all Work conversations from this project before sharing it`,
          description: `Error when a fresh check finds Work conversations and blocks granting additional project access`,
        }),
        copy: (0, $.jsx)(f, {
          id: `chatgptProjectSharing.copyError`,
          defaultMessage: `Could not copy the project link. Try again`,
          description: `Error when copying the project link to the host clipboard fails; the dialog remains open for retry`,
        }),
        save: (0, $.jsx)(f, {
          id: `chatgptProjectSharing.saveError`,
          defaultMessage: `Could not update project sharing. Try again`,
          description: `Error when saving project sharing fails; existing access remains displayed and selected invitees are preserved for retry`,
        }),
      }),
      (t[42] = we))
    : (we = t[42]);
  let Te = we;
  if (!h) return null;
  let De;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = {
        "aria-describedby": void 0,
        onOpenAutoFocus: (e) => {
          e.currentTarget instanceof HTMLElement && ae(e.currentTarget);
        },
      }),
      (t[43] = De))
    : (De = t[43]);
  let Oe = !J,
    ke;
  t[44] !== J || t[45] !== a
    ? ((ke = (e) => {
        !e && !J && a();
      }),
      (t[44] = J),
      (t[45] = a),
      (t[46] = ke))
    : (ke = t[46]);
  let Ae;
  t[47] === Se
    ? (Ae = t[48])
    : ((Ae = (e) => {
        (e.preventDefault(), Se());
      }),
      (t[47] = Se),
      (t[48] = Ae));
  let Me;
  t[49] === A
    ? (Me = t[50])
    : ((Me = (0, $.jsx)(`header`, {
        className: `flex min-h-13 shrink-0 items-center py-2 ps-4 pe-13 select-none pointer-coarse:min-h-14`,
        children: (0, $.jsx)(D, {
          className: `truncate text-heading-sm leading-7 font-normal text-default`,
          children:
            A == null
              ? (0, $.jsx)(f, {
                  id: `chatgptProjectSharing.title`,
                  defaultMessage: `Share project`,
                  description: `Title of the dialog for sharing a ChatGPT project and managing its collaborators`,
                })
              : (0, $.jsx)(f, {
                  id: `chatgptProjectSharing.namedTitle`,
                  defaultMessage: `Share {projectName}`,
                  description: `Title of the project sharing dialog; projectName is the name of the project whose access is being managed`,
                  values: { projectName: A.gizmo.display.name },
                }),
        }),
      })),
      (t[49] = A),
      (t[50] = Me));
  let Ne = !he && `pb-4`,
    Pe;
  t[51] === Ne
    ? (Pe = t[52])
    : ((Pe = j(`flex min-h-0 flex-col gap-4 overflow-y-auto px-4 pt-2`, Ne)), (t[51] = Ne), (t[52] = Pe));
  let Fe;
  t[53] !== r || t[54] !== g || t[55] !== de || t[56] !== P || t[57] !== T || t[58] !== o
    ? ((Fe = de
        ? (0, $.jsx)(C, {
            type: `error`,
            role: `alert`,
            content: (0, $.jsx)(f, {
              id: `chatgptProjectSharing.loadError`,
              defaultMessage: `Could not load project sharing settings`,
              description: `Error in project sharing when project data or workspace permissions could not be loaded; changes stay disabled until retry succeeds`,
            }),
            primaryCtaText: (0, $.jsx)(f, {
              id: `chatgptProjectSharing.retry`,
              defaultMessage: `Retry`,
              description: `Button to reload failed project sharing settings`,
            }),
            onPrimaryCtaClick: () => {
              (P(),
                g &&
                  o.queryClient
                    .cancelQueries({ queryKey: [`accounts`, `settings`, r] })
                    .then(() => me(r))
                    .catch(an)
                    .then(() => T()));
            },
          })
        : null),
      (t[53] = r),
      (t[54] = g),
      (t[55] = de),
      (t[56] = P),
      (t[57] = T),
      (t[58] = o),
      (t[59] = Fe))
    : (Fe = t[59]);
  let Ie;
  t[60] === ce
    ? (Ie = t[61])
    : ((Ie = ce == null ? null : (0, $.jsx)(C, { type: `error`, role: `alert`, content: Te[ce] })),
      (t[60] = ce),
      (t[61] = Ie));
  let Le;
  t[62] !== r || t[63] !== K || t[64] !== J || t[65] !== M || t[66] !== a || t[67] !== A || t[68] !== N
    ? ((Le =
        K && A != null
          ? (0, $.jsx)(`div`, {
              className: `shrink-0`,
              children: (0, $.jsx)(Xt, {
                accountId: r,
                disabled: J,
                isProjectReady: !M && !N,
                project: A,
                onClose: a,
              }),
            })
          : null),
      (t[62] = r),
      (t[63] = K),
      (t[64] = J),
      (t[65] = M),
      (t[66] = a),
      (t[67] = A),
      (t[68] = N),
      (t[69] = Le))
    : (Le = t[69]);
  let Re;
  t[70] !== r ||
  t[71] !== G ||
  t[72] !== g ||
  t[73] !== L.canInvite ||
  t[74] !== L.canListWorkspaceMembers ||
  t[75] !== V ||
  t[76] !== A ||
  t[77] !== B ||
  t[78] !== z ||
  t[79] !== y?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts ||
  t[80] !== pe
    ? ((Re =
        A != null && L.canInvite
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, $.jsx)(Rt, {
                  accountId: r,
                  allowScimGroups: y?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts !== !1,
                  canListWorkspaceMembers: L.canListWorkspaceMembers,
                  disabled: G,
                  isWorkspace: g,
                  portalContainer: V,
                  project: A,
                  role: B,
                  selected: z,
                  onRoleChange: ie,
                  onChange: ne,
                }),
                pe
                  ? (0, $.jsx)(`p`, {
                      className: `text-sm text-danger`,
                      role: `alert`,
                      children: (0, $.jsx)(f, {
                        id: `chatgptProjectSharing.tooManyEmails`,
                        defaultMessage: `Invite no more than 5 email addresses at a time`,
                        description: `Validation error when more than five email invitees are selected for a workspace project`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (t[70] = r),
      (t[71] = G),
      (t[72] = g),
      (t[73] = L.canInvite),
      (t[74] = L.canListWorkspaceMembers),
      (t[75] = V),
      (t[76] = A),
      (t[77] = B),
      (t[78] = z),
      (t[79] = y?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts),
      (t[80] = pe),
      (t[81] = Re))
    : (Re = t[81]);
  let ze;
  t[82] !== d?.account_user_id ||
  t[83] !== G ||
  t[84] !== g ||
  t[85] !== L.canManage ||
  t[86] !== L.canShareWorkspaceLink ||
  t[87] !== A ||
  t[88] !== be ||
  t[89] !== ve
    ? ((ze =
        A == null
          ? null
          : (0, $.jsx)(wt, {
              canManage: L.canManage,
              canShareWorkspaceLink: L.canShareWorkspaceLink,
              currentUserId: d?.account_user_id,
              disabled: G,
              isWorkspace: g,
              project: A,
              workspaceName: ve,
              onChange: (e) => void be(e),
            })),
      (t[82] = d?.account_user_id),
      (t[83] = G),
      (t[84] = g),
      (t[85] = L.canManage),
      (t[86] = L.canShareWorkspaceLink),
      (t[87] = A),
      (t[88] = be),
      (t[89] = ve),
      (t[90] = ze))
    : (ze = t[90]);
  let Be;
  t[91] === M
    ? (Be = t[92])
    : ((Be = M
        ? (0, $.jsx)(`p`, {
            className: `text-sm text-secondary`,
            role: `status`,
            children: (0, $.jsx)(f, {
              id: `chatgptProjectSharing.loading`,
              defaultMessage: `Checking project access…`,
              description: `Status while refreshing project sharing data and checking for Work conversations; sharing controls are disabled during the check`,
            }),
          })
        : null),
      (t[91] = M),
      (t[92] = Be));
  let Ve;
  t[93] === g
    ? (Ve = t[94])
    : ((Ve = g ? null : (0, $.jsx)(Pt, { isWorkspace: !1 })), (t[93] = g), (t[94] = Ve));
  let He;
  t[95] !== Pe ||
  t[96] !== Fe ||
  t[97] !== Ie ||
  t[98] !== Le ||
  t[99] !== Re ||
  t[100] !== ze ||
  t[101] !== Be ||
  t[102] !== Ve
    ? ((He = (0, $.jsxs)(`div`, { className: Pe, children: [Fe, Ie, Le, Re, ze, Be, Ve] })),
      (t[95] = Pe),
      (t[96] = Fe),
      (t[97] = Ie),
      (t[98] = Le),
      (t[99] = Re),
      (t[100] = ze),
      (t[101] = Be),
      (t[102] = Ve),
      (t[103] = He))
    : (He = t[103]);
  let We;
  t[104] !== q ||
  t[105] !== W ||
  t[106] !== G ||
  t[107] !== K ||
  t[108] !== H ||
  t[109] !== g ||
  t[110] !== A ||
  t[111] !== he ||
  t[112] !== Ce ||
  t[113] !== pe
    ? ((We = he
        ? (0, $.jsxs)(`footer`, {
            className: `flex shrink-0 flex-wrap items-center justify-between gap-2 p-4 select-none`,
            children: [
              g
                ? (0, $.jsx)(`div`, {
                    className: `min-w-0 grow basis-48`,
                    children: (0, $.jsx)(Pt, { isWorkspace: !0 }),
                  })
                : null,
              (0, $.jsxs)(`div`, {
                className: `ms-auto flex shrink-0 items-center gap-2`,
                children: [
                  !g && !q && !K && A != null ? (0, $.jsx)(Kt, { project: A, disabled: G }) : null,
                  q
                    ? (0, $.jsx)(n, {
                        color: `outlineSurface`,
                        disabled: H,
                        size: `dialogAction`,
                        type: `button`,
                        onClick: () => {
                          (ne([]), le(null));
                        },
                        children: (0, $.jsx)(f, {
                          id: `chatgptProjectSharing.cancelInvite`,
                          defaultMessage: `Cancel`,
                          description: `Button that clears selected project invitees without closing the sharing dialog or changing existing access`,
                        }),
                      })
                    : null,
                  q || !K
                    ? (0, $.jsxs)(n, {
                        color: q ? `accentAction` : `primary`,
                        size: `dialogAction`,
                        type: `submit`,
                        disabled: G || K || pe,
                        loading: H || W === `copying`,
                        children: [!q && (W === `copied` ? (0, $.jsx)(c, {}) : (0, $.jsx)(re, {})), Ce],
                      })
                    : null,
                ],
              }),
            ],
          })
        : null),
      (t[104] = q),
      (t[105] = W),
      (t[106] = G),
      (t[107] = K),
      (t[108] = H),
      (t[109] = g),
      (t[110] = A),
      (t[111] = he),
      (t[112] = Ce),
      (t[113] = pe),
      (t[114] = We))
    : (We = t[114]);
  let Ge;
  t[115] !== Ae || t[116] !== Me || t[117] !== He || t[118] !== We
    ? ((Ge = (0, $.jsxs)(te, {
        as: `form`,
        className: `max-h-[calc(100vh-6rem)] min-h-0 overflow-hidden`,
        variant: `chatgpt`,
        onSubmit: Ae,
        children: [Me, He, We],
      })),
      (t[115] = Ae),
      (t[116] = Me),
      (t[117] = He),
      (t[118] = We),
      (t[119] = Ge))
    : (Ge = t[119]);
  let Ke;
  return (
    t[120] !== J || t[121] !== Oe || t[122] !== ke || t[123] !== Ge
      ? ((Ke = (0, $.jsx)(ee, {
          open: !0,
          contentOverflow: `visible`,
          contentProps: De,
          shouldIgnoreClickOutside: J,
          showDialogClose: Oe,
          size: `large`,
          variant: `chatgpt`,
          onOpenChange: ke,
          children: Ge,
        })),
        (t[120] = J),
        (t[121] = Oe),
        (t[122] = ke),
        (t[123] = Ge),
        (t[124] = Ke))
      : (Ke = t[124]),
    Ke
  );
}
function an() {}
function on(e) {
  return e.type === 10;
}
var sn, cn, $;
function ln() {
  return (ln = e(() => {
    ((sn = H()),
      T(),
      E(),
      g(),
      (cn = se()),
      N(),
      De(),
      ze(),
      Ne(),
      Be(),
      J(),
      d(),
      V(),
      ae(),
      A(),
      y(),
      ne(),
      oe(),
      Ve(),
      Ot(),
      Nt(),
      Lt(),
      Gt(),
      tt(),
      Yt(),
      nn(),
      ($ = U()));
  }))();
}
ln();
export { rn as ChatGptProjectShareDialog };
//# sourceMappingURL=dialog-aadff8c57b97.js.map
