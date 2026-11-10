import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $W as r,
  $st as i,
  CH as a,
  CNt as o,
  FBt as s,
  GLt as c,
  GOt as l,
  HFt as u,
  HO as d,
  IO as f,
  IU as p,
  JO as m,
  LNt as h,
  MNt as g,
  Mst as _,
  NNt as v,
  NSt as y,
  PBt as b,
  Qst as ee,
  Rrt as x,
  TY as S,
  Uot as C,
  Vot as w,
  WO as T,
  XCt as E,
  XOt as D,
  Y3 as O,
  YCt as k,
  Z3 as A,
  ZSt as te,
  aH as j,
  ast as M,
  bSt as N,
  ck as P,
  iCt as ne,
  ist as re,
  jst as F,
  kH as I,
  nB as L,
  nCt as ie,
  okt as ae,
  qO as oe,
  rB as R,
  rk as se,
  tk as z,
  tkt as B,
  uG as ce,
  uq as le,
  vD as ue,
  vW as V,
  yD as de,
  zO as fe,
  zet as H,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as pe,
  BFt as U,
  Cjr as me,
  D5n as W,
  GH as G,
  GKn as K,
  GLn as q,
  IIr as he,
  JBn as ge,
  KH as _e,
  Kzn as ve,
  LIr as ye,
  Qzn as be,
  SLn as xe,
  SRn as Se,
  XIr as Ce,
  Xzn as we,
  YIr as Te,
  ZIr as Ee,
  aU as De,
  bRn as Oe,
  fBn as ke,
  iRr as Ae,
  jcn as je,
  lBn as Me,
  mBn as Ne,
  oU as Pe,
  qKn as Fe,
  qLn as Ie,
  sRr as Le,
  tBn as Re,
  uBn as ze,
  vLn as Be,
  wLr as Ve,
  wcn as He,
  xMr as Ue,
  xjr as We,
  yMr as Ge,
  zFt as Ke,
  zRr as J,
} from "./app-initial-ad16eaadf81f.js";
import { a as qe, i as Je, r as Ye } from "./use-workspace-users-2d1e66aa1ddc.js";
import { n as Xe, t as Ze } from "./workspace-team-recipient-suggestions-ab23121c2709.js";
import { n as Qe, t as $e } from "./dialog-shell-76e32318bc2b.js";
import { n as et, t as tt } from "./linkedin-21df1590d52c.js";
import {
  a as nt,
  c as Y,
  i as rt,
  l as it,
  n as at,
  o as ot,
  r as st,
  s as ct,
  t as lt,
} from "./model-8e08aa654731.js";
import { n as ut, t as dt } from "./permission-dropdown-27d1e7a127e6.js";
import { n as ft, t as pt } from "./twitter-7ceb296bddc1.js";
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
            ? (0, _t.jsx)(B, {
                id: `chatgptProjectSharing.canEdit`,
                defaultMessage: `Can edit`,
                description: `Permission label in project sharing; collaborators can chat, add and remove files, and edit project instructions`,
              })
            : (0, _t.jsx)(B, {
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
        ? ((e = (0, _t.jsx)(B, {
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
        : ((e = (0, _t.jsx)(B, {
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
      ? ((i = (0, _t.jsx)(B, {
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
    ((gt = b()), D(), (_t = h()));
  }))();
}
function yt(e) {
  "use forget";
  let t = (0, xt.c)(19),
    { disabled: n, editDisabled: r, role: i, onChange: a, onRemoveAccess: o } = e,
    s = r !== void 0 && r,
    c = ae(),
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
  let f;
  t[6] !== s || t[7] !== d
    ? ((f = { value: `edit`, disabled: s, description: d }), (t[6] = s), (t[7] = d), (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== u || t[10] !== f ? ((p = [u, f]), (t[9] = u), (t[10] = f), (t[11] = p)) : (p = t[11]);
  let m;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, St.jsx)(B, {
        id: `chatgptProjectSharing.removeMember`,
        defaultMessage: `Remove from project`,
        description: `Menu action to remove a collaborator or group from the project after confirmation`,
      })),
      (t[12] = m))
    : (m = t[12]);
  let h;
  return (
    t[13] !== n || t[14] !== a || t[15] !== o || t[16] !== i || t[17] !== p
      ? ((h = (0, St.jsx)(dt, {
          disabled: n,
          options: p,
          renderLabel: bt,
          removeLabel: m,
          value: i,
          variant: `ghost`,
          onChange: a,
          onRemoveAccess: o,
        })),
        (t[13] = n),
        (t[14] = a),
        (t[15] = o),
        (t[16] = i),
        (t[17] = p),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function bt(e) {
  return (0, St.jsx)(mt, { role: e });
}
var xt, St;
function Ct() {
  return (Ct = e(() => {
    ((xt = b()), D(), ut(), vt(), (St = h()));
  }))();
}
function wt(e) {
  "use forget";
  let t = (0, Dt.c)(59),
    {
      canManage: n,
      canShareWorkspaceLink: r,
      currentUserId: i,
      disabled: a,
      isWorkspace: o,
      project: s,
      workspaceName: c,
      onChange: l,
    } = e,
    u;
  t[0] === s.gizmo.sharing?.subjects
    ? (u = t[1])
    : ((u = s.gizmo.sharing?.subjects ?? []), (t[0] = s.gizmo.sharing?.subjects), (t[1] = u));
  let d = u,
    f;
  t[2] === d ? (f = t[3]) : ((f = at(d)), (t[2] = d), (t[3] = f));
  let p = f,
    m = s.has_tpp_conversation === !0,
    h = s.gizmo.author,
    g = h.display_name || h.user_email || h.user_id,
    _;
  t[4] === i ? (_ = t[5]) : ((_ = i?.split(`__`)[0]), (t[4] = i), (t[5] = _));
  let v = _,
    y;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { value: `private`, icon: (0, X.jsx)(ce, {}) }), (t[6] = y))
    : (y = t[6]);
  let b;
  if (t[7] !== p || t[8] !== r || t[9] !== m || t[10] !== o) {
    if (((b = [y]), o && (r || p === `workspace_link`))) {
      let e = m && p === `private`,
        n;
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, X.jsx)(j, {})), (t[12] = n))
        : (n = t[12]);
      let r;
      (t[13] === e
        ? (r = t[14])
        : ((r = { value: `workspace_link`, disabled: e, icon: n }), (t[13] = e), (t[14] = r)),
        b.push(r));
    }
    if (!o) {
      let e = m && p !== `link`,
        n;
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, X.jsx)(V, {})), (t[15] = n))
        : (n = t[15]);
      let r;
      (t[16] === e ? (r = t[17]) : ((r = { value: `link`, disabled: e, icon: n }), (t[16] = e), (t[17] = r)),
        b.push(r));
    }
    ((t[7] = p), (t[8] = r), (t[9] = m), (t[10] = o), (t[11] = b));
  } else b = t[11];
  let ee;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, X.jsx)(`h3`, {
        className: `text-sm font-normal text-secondary select-none`,
        children: (0, X.jsx)(B, {
          id: `shareDialog.whoHasAccess`,
          defaultMessage: `Who has access`,
          description: `Heading above the audience, people, groups, and permissions in a share dialog`,
        }),
      })),
      (t[18] = ee))
    : (ee = t[18]);
  let x = b.find((e) => e.value === p)?.icon,
    S;
  t[19] === x
    ? (S = t[20])
    : ((S = (0, X.jsx)(`span`, {
        className: `flex size-6 shrink-0 items-center justify-center`,
        children: x,
      })),
      (t[19] = x),
      (t[20] = S));
  let C;
  t[21] !== p || t[22] !== b || t[23] !== n || t[24] !== a || t[25] !== l || t[26] !== c
    ? ((C = n
        ? (0, X.jsx)(z, {
            align: `start`,
            contentWidth: `menu`,
            disabled: a,
            surface: `chatgpt`,
            triggerButton: (0, X.jsxs)(O, {
              color: `ghostActive`,
              disabled: a,
              size: `inline`,
              allowShrink: !0,
              children: [
                (0, X.jsx)(L, {
                  disabled: p === `private`,
                  tooltipContent: (0, X.jsx)(B, {
                    id: `chatgptProjectSharing.linkRole`,
                    defaultMessage: `Shared links give chat-only access. Users can be upgraded to edit access after joining.`,
                    description: `Tooltip on project link access explaining that links grant chat-only permission and owners can upgrade individual members later`,
                  }),
                  children: (0, X.jsx)(`span`, {
                    className: `truncate text-sm`,
                    children: (0, X.jsx)(ht, { access: p, workspaceName: c }),
                  }),
                }),
                (0, X.jsx)(I, { className: `text-secondary` }),
              ],
            }),
            children: (0, X.jsx)(se.RadioGroup, {
              value: p,
              onValueChange: (e) => {
                let t = b.find((t) => t.value === e);
                t != null && !a && !t.disabled && t.value !== p && l({ type: `access`, access: t.value });
              },
              children: b.map((e) =>
                (0, X.jsx)(
                  se.RadioItem,
                  {
                    disabled: a || e.disabled,
                    icon: e.icon,
                    value: e.value,
                    variant: `chatgpt`,
                    children: (0, X.jsx)(ht, { access: e.value, workspaceName: c }),
                  },
                  e.value,
                ),
              ),
            }),
          })
        : (0, X.jsx)(L, {
            tooltipContent: (0, X.jsx)(B, {
              id: `chatgptProjectSharing.ownerOnly`,
              defaultMessage: `Only the owner can change permissions`,
              description: `Help in a collaborator's project sharing dialog explaining why access and member roles cannot be changed`,
            }),
            children: (0, X.jsx)(`span`, {
              className: `truncate text-sm select-none`,
              children: (0, X.jsx)(ht, { access: p, workspaceName: c }),
            }),
          })),
      (t[21] = p),
      (t[22] = b),
      (t[23] = n),
      (t[24] = a),
      (t[25] = l),
      (t[26] = c),
      (t[27] = C))
    : (C = t[27]);
  let w;
  t[28] !== S || t[29] !== C
    ? ((w = (0, X.jsxs)(`div`, { className: `flex min-h-9 items-center gap-2`, children: [S, C] })),
      (t[28] = S),
      (t[29] = C),
      (t[30] = w))
    : (w = t[30]);
  let T;
  t[31] !== h.user_id || t[32] !== v || t[33] !== g
    ? ((T =
        h.user_id.split(`__`)[0] === v
          ? (0, X.jsx)(B, {
              id: `chatgptProjectSharing.currentUser`,
              defaultMessage: `{name} <secondary>(you)</secondary>`,
              description: `Member name in project sharing when this row represents the current user; name is their display name or email, and secondary marks the parenthetical annotation`,
              values: { name: g, secondary: Et },
            })
          : g),
      (t[31] = h.user_id),
      (t[32] = v),
      (t[33] = g),
      (t[34] = T))
    : (T = t[34]);
  let E;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(`span`, {
        className: `px-3 text-sm select-none`,
        children: (0, X.jsx)(B, {
          id: `chatgptProjectSharing.owner`,
          defaultMessage: `Owner`,
          description: `Permission label beside the project creator in the sharing dialog`,
        }),
      })),
      (t[35] = E))
    : (E = t[35]);
  let D;
  t[36] !== h.user_id || t[37] !== g || t[38] !== T
    ? ((D = (0, X.jsx)(De, {
        avatarLabel: g,
        colorKey: h.user_id,
        label: T,
        size: `compact`,
        trailingContent: E,
      })),
      (t[36] = h.user_id),
      (t[37] = g),
      (t[38] = T),
      (t[39] = D))
    : (D = t[39]);
  let k;
  if (t[40] !== n || t[41] !== a || t[42] !== m || t[43] !== o || t[44] !== v || t[45] !== l || t[46] !== d) {
    let e;
    (t[48] !== n || t[49] !== a || t[50] !== m || t[51] !== o || t[52] !== v || t[53] !== l
      ? ((e = (e) => {
          if (e.type === 3 || e.type === 4) return null;
          let t = e.capabilities.can_write ? `edit` : `chat`,
            r = ct(e),
            i = e.type === 1 && e.user_id.split(`__`)[0] === v,
            s = r;
          return (
            e.type === 2 && e.is_scim_managed
              ? (s = (0, X.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-2`,
                  children: [
                    (0, X.jsx)(`span`, { className: `truncate`, children: r }),
                    (0, X.jsx)(Ke, {
                      className: `shrink-0`,
                      variant: `outline`,
                      children: (0, X.jsx)(B, {
                        id: `chatgptProjectSharing.scimManaged`,
                        defaultMessage: `SCIM`,
                        description: `Badge beside a project sharing group managed by directory synchronization; SCIM is the standard for automated identity provisioning`,
                      }),
                    }),
                  ],
                }))
              : i
                ? (s = (0, X.jsx)(B, {
                    id: `chatgptProjectSharing.currentUser`,
                    defaultMessage: `{name} <secondary>(you)</secondary>`,
                    description: `Member name in project sharing when this row represents the current user; name is their display name or email, and secondary marks the parenthetical annotation`,
                    values: { name: r, secondary: Tt },
                  }))
                : e.type === 10 &&
                  (s = (0, X.jsx)(`span`, {
                    className: `text-secondary`,
                    children: o
                      ? r
                      : (0, X.jsx)(B, {
                          id: `chatgptProjectSharing.inviteSent`,
                          defaultMessage: `{email} (invite sent)`,
                          description: `Email row in a personal project's sharing dialog for a pending invitation; email is the invited address and the annotation indicates it has not yet been accepted`,
                          values: { email: r },
                        }),
                  })),
            (0, X.jsx)(
              De,
              {
                avatarLabel: r,
                colorKey: e.type === 1 ? e.user_id : void 0,
                label: s,
                size: `compact`,
                trailingContent: n
                  ? (0, X.jsx)(yt, {
                      disabled: a,
                      editDisabled: m && t !== `edit`,
                      role: t,
                      onChange: (n) => {
                        n !== t && l({ type: `role`, subject: e, role: n });
                      },
                      onRemoveAccess: () => l({ type: `remove`, subject: e }),
                    })
                  : (0, X.jsx)(`span`, {
                      className: `px-3 text-sm select-none`,
                      children: (0, X.jsx)(mt, { role: t }),
                    }),
              },
              Y(e),
            )
          );
        }),
        (t[48] = n),
        (t[49] = a),
        (t[50] = m),
        (t[51] = o),
        (t[52] = v),
        (t[53] = l),
        (t[54] = e))
      : (e = t[54]),
      (k = d.map(e)),
      (t[40] = n),
      (t[41] = a),
      (t[42] = m),
      (t[43] = o),
      (t[44] = v),
      (t[45] = l),
      (t[46] = d),
      (t[47] = k));
  } else k = t[47];
  let A;
  return (
    t[55] !== D || t[56] !== k || t[57] !== w
      ? ((A = (0, X.jsxs)(`section`, {
          className: `flex flex-col gap-2`,
          children: [
            ee,
            (0, X.jsxs)(`div`, {
              className: `flex max-h-56 flex-col gap-1 overflow-y-auto overscroll-contain pb-1`,
              children: [w, D, k],
            }),
          ],
        })),
        (t[55] = D),
        (t[56] = k),
        (t[57] = w),
        (t[58] = A))
      : (A = t[58]),
    A
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
    ((Dt = b()), D(), U(), A(), P(), S(), R(), Pe(), vt(), nt(), Ct(), (X = h()));
  }))();
}
function kt(e) {
  "use forget";
  let t = (0, At.c)(39),
    { action: n, onClose: r, onConfirm: i } = e,
    a = xe(),
    o;
  t[0] !== n.label || t[1] !== n.type
    ? ((o =
        n.type === `library`
          ? (0, Z.jsx)(B, {
              id: `chatgptProjectSharing.confirmLibrary.title`,
              defaultMessage: `Share project?`,
              description: `Title of the confirmation shown before sharing a private project with Library source files`,
            })
          : (0, Z.jsx)(B, {
              id: `chatgptProjectSharing.confirmRemove.title`,
              defaultMessage: `Remove {name} from this project?`,
              description: `Confirmation title before removing a collaborator or group from a project; name is their display name or email`,
              values: { name: n.label },
            })),
      (t[0] = n.label),
      (t[1] = n.type),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== n.type || t[4] !== a
    ? ((s =
        n.type === `library` && a
          ? (0, Z.jsx)(B, {
              id: `chatgptProjectSharing.confirmLibrary.description.space`,
              defaultMessage: `Sharing removes Space files from this project's sources. The files remain in your Space, but shared projects can't access them.`,
              description: `Warning before sharing a project: Space-backed files are detached from the project, not deleted from the user's Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : null),
      (t[3] = n.type),
      (t[4] = a),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] !== n.type || t[7] !== a
    ? ((c =
        n.type === `library` && !a
          ? (0, Z.jsx)(B, {
              id: `chatgptProjectSharing.confirmLibrary.description`,
              defaultMessage: `Sharing removes Library files from this project's sources. The files remain in your Library, but shared projects cannot access them.`,
              description: `Warning before sharing a project: Library-backed files are detached from the project, not deleted from the user's Library`,
            })
          : null),
      (t[6] = n.type),
      (t[7] = a),
      (t[8] = c))
    : (c = t[8]);
  let u;
  t[9] === n.type
    ? (u = t[10])
    : ((u =
        n.type === `library`
          ? null
          : (0, Z.jsx)(B, {
              id: `chatgptProjectSharing.confirmRemove.description`,
              defaultMessage: `They will lose access to all content in this project`,
              description: `Warning explaining the effect of confirming removal of a project collaborator or group`,
            })),
      (t[9] = n.type),
      (t[10] = u));
  let d;
  t[11] !== s || t[12] !== c || t[13] !== u
    ? ((d = (0, Z.jsxs)(Z.Fragment, { children: [s, c, u] })),
      (t[11] = s),
      (t[12] = c),
      (t[13] = u),
      (t[14] = d))
    : (d = t[14]);
  let f;
  t[15] !== r || t[16] !== i
    ? ((f = () => {
        (i(), r());
      }),
      (t[15] = r),
      (t[16] = i),
      (t[17] = f))
    : (f = t[17]);
  let p;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(B, {
        id: `chatgptProjectSharing.confirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel a project sharing or collaborator removal confirmation without changing access`,
      })),
      (t[18] = p))
    : (p = t[18]);
  let m;
  t[19] === r
    ? (m = t[20])
    : ((m = (0, Z.jsx)(O, {
        color: `secondary`,
        size: `dialogAction`,
        type: `button`,
        onClick: r,
        children: p,
      })),
      (t[19] = r),
      (t[20] = m));
  let h = n.type === `remove` ? `danger` : `primary`,
    g;
  t[21] === n.type
    ? (g = t[22])
    : ((g =
        n.type === `library`
          ? (0, Z.jsx)(B, {
              id: `chatgptProjectSharing.confirmLibrary.confirm`,
              defaultMessage: `Share and remove`,
              description: `Button confirming sharing the project and detaching its Library source files`,
            })
          : (0, Z.jsx)(B, {
              id: `chatgptProjectSharing.confirmRemove.confirm`,
              defaultMessage: `Remove`,
              description: `Button confirming removal of a collaborator or group from the project`,
            })),
      (t[21] = n.type),
      (t[22] = g));
  let _;
  t[23] !== g || t[24] !== h
    ? ((_ = (0, Z.jsx)(O, { color: h, size: `dialogAction`, type: `submit`, children: g })),
      (t[23] = g),
      (t[24] = h),
      (t[25] = _))
    : (_ = t[25]);
  let v;
  t[26] !== _ || t[27] !== m
    ? ((v = (0, Z.jsxs)(Z.Fragment, { children: [m, _] })), (t[26] = _), (t[27] = m), (t[28] = v))
    : (v = t[28]);
  let y;
  t[29] !== n.fileNames || t[30] !== n.type
    ? ((y =
        n.type === `library`
          ? (0, Z.jsx)(fe, {
              children: (0, Z.jsx)(`p`, {
                className: `text-sm text-secondary`,
                children: (0, Z.jsx)(l, { value: n.fileNames }),
              }),
            })
          : null),
      (t[29] = n.fileNames),
      (t[30] = n.type),
      (t[31] = y))
    : (y = t[31]);
  let b;
  return (
    t[32] !== r || t[33] !== o || t[34] !== v || t[35] !== y || t[36] !== d || t[37] !== f
      ? ((b = (0, Z.jsx)($e, { title: o, subtitle: d, onClose: r, onSubmit: f, footer: v, children: y })),
        (t[32] = r),
        (t[33] = o),
        (t[34] = v),
        (t[35] = y),
        (t[36] = d),
        (t[37] = f),
        (t[38] = b))
      : (b = t[38]),
    b
  );
}
var At, Z;
function jt() {
  return (jt = e(() => {
    ((At = b()), D(), A(), d(), Be(), Qe(), (Z = h()));
  }))();
}
async function Mt({ scope: e, account: t, projectId: n, change: r }) {
  let i = t.id;
  if (e.get(J) !== i) return `cancelled`;
  let a = t.structure === `workspace`;
  if (
    a &&
    (await e.queryClient.cancelQueries({ queryKey: [`accounts`, `settings`, i] }),
    await Ee(i),
    e.get(J) !== i)
  )
    return `cancelled`;
  let [o, s] = await Promise.all([ge(n), a ? Te(e, i) : void 0]);
  if (e.get(J) !== i) return `cancelled`;
  (Re(e.queryClient, o), s != null && e.queryClient.setQueryData([`accounts`, `settings`, i], s));
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
    let e = new Set(l.map(Y)),
      t = r.subjects.filter((t) => !e.has(Y(t)));
    ((u = [...l, ...t]), (d.add_or_replace = t.map((e) => it(e, f))));
  } else {
    let e = Y(r.subject),
      t = l.find((t) => Y(t) === e);
    if (t == null) return `saved`;
    if (r.type === `remove`) ((u = l.filter((t) => Y(t) !== e)), (d.remove = [it(t, f)]));
    else {
      let n = { ...t, capabilities: lt[r.role] };
      ((u = l.map((t) => (Y(t) === e ? n : t))), (d.add_or_replace = [it(n, f)]));
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
      pe(e, kt, {
        action:
          r.type === `remove` ? { type: `remove`, label: ct(r.subject) } : { type: `library`, fileNames: p },
        onConfirm: () => t(!0),
        onClose: () => t(!1),
      });
    })) ||
      e.get(J) !== i)
  )
    return `cancelled`;
  let h = await Ae.safePost(`/projects/share`, { requestBody: d });
  if (e.get(J) !== i) return `cancelled`;
  if (h.error != null) return `permission`;
  let g = h.resource ?? (await ge(n));
  return e.get(J) === i
    ? (Re(e.queryClient, g), ze(e, { flatConversationHistory: !1, project: g }), `saved`)
    : `cancelled`;
}
function Nt() {
  return (Nt = e(() => {
    (Ce(), Ve(), ve(), W(), Le(), be(), Me(), jt(), nt());
  }))();
}
function Pt(e) {
  "use forget";
  let t = (0, Ft.c)(3),
    { isWorkspace: n } = e,
    r = me(`2821958399`);
  if (n) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e = (0, It.jsx)(`p`, {
            className: `text-xs text-secondary select-none`,
            children: r
              ? (0, It.jsx)(B, {
                  id: `chatgptProjectSharing.workspaceDisclaimer`,
                  defaultMessage: `All project content is visible to collaborators. To protect personal data, shared projects disable personal memory.`,
                  description: `Privacy notice in the workspace project sharing footer when shared-project Google Drive sync is enabled; collaborators see project contents, while personal memory is disabled`,
                })
              : (0, It.jsx)(B, {
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
      ? ((i = (0, It.jsx)(ue, {
          content: (0, It.jsx)(B, {
            id: `chatgptProjectSharing.personalDisclaimer`,
            defaultMessage: `All project contents are visible to collaborators. Personal memories are disabled for shared projects.`,
            description: `Body of the privacy notice in a personal project's sharing dialog explaining content visibility and the exclusion of personal memories`,
          }),
          title: (0, It.jsx)(B, {
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
    ((Ft = b()), D(), de(), We(), (It = h()));
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
      project: l,
      role: u,
      selected: d,
      onRoleChange: f,
      onChange: p,
    } = e,
    m = ae(),
    [h, g] = (0, Ut.useState)(``),
    { data: _, isPending: v, isError: y } = qe(i && !a ? h : ``),
    { data: b, isPending: ee, isError: x } = Je(i && !a ? h : ``),
    { data: S, isLoading: C, isError: w } = ie(Xe, n, { enabled: i && !a }) ?? {},
    T,
    E;
  if (
    t[0] !== l.gizmo.author.user_email ||
    t[1] !== l.gizmo.author.user_id ||
    t[2] !== l.gizmo.sharing?.subjects ||
    t[3] !== d
  ) {
    let e = [...(l.gizmo.sharing?.subjects ?? []), ...d];
    ((T = new Set(e.map(Y))),
      T.add(`user:${l.gizmo.author.user_id.split(`__`)[0]}`),
      (E = new Set([l.gizmo.author.user_email, ...e.flatMap(Vt)].flatMap(Bt))),
      (t[0] = l.gizmo.author.user_email),
      (t[1] = l.gizmo.author.user_id),
      (t[2] = l.gizmo.sharing?.subjects),
      (t[3] = d),
      (t[4] = T),
      (t[5] = E));
  } else ((T = t[4]), (E = t[5]));
  let D = E,
    O = [],
    k = lt[u];
  if (i) {
    for (let e of _ ?? [])
      T.has(`user:${e.account_user_id.split(`__`)[0]}`) ||
        (e.email != null && D.has(e.email.trim().toLowerCase())) ||
        O.push({
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
            capabilities: k,
          },
        });
    for (let e of b ?? [])
      T.has(`group:${e.id}`) ||
        (!r && e.is_scim_managed) ||
        O.push({
          id: `group:${e.id}`,
          label: e.name,
          subject: {
            type: 2,
            group_id: e.id,
            group_name: e.name,
            is_scim_managed: e.is_scim_managed === !0,
            capabilities: k,
          },
        });
    for (let e of w ? [] : (S ?? []))
      T.has(`group:${e.id}`) ||
        O.some((t) => t.id === `group:${e.id}`) ||
        !e.name.toLocaleLowerCase().includes(h.trim().toLocaleLowerCase()) ||
        O.push({
          id: `group:${e.id}`,
          label: e.name,
          subject: { type: 2, group_id: e.id, group_name: e.name, is_scim_managed: !1, capabilities: k },
        });
  }
  let A = h.trim().toLowerCase(),
    te = c().safeParse(A).success;
  if (te && !D.has(A) && !O.some((e) => e.subject.type === 1 && e.subject.user_email?.toLowerCase() === A)) {
    let e;
    (t[6] !== k || t[7] !== A
      ? ((e = { type: 10, user_email: A, capabilities: k }), (t[6] = k), (t[7] = A), (t[8] = e))
      : (e = t[8]),
      O.push({
        id: `email:${A}`,
        chipLabel: A,
        label: m.formatMessage(
          {
            id: `chatgptProjectSharing.invite.emailOption`,
            defaultMessage: `Invite "{email}"`,
            description: `Option in the project sharing picker for adding the typed email to an invitation; email is the exact address entered by the user`,
          },
          { email: A },
        ),
        subject: e,
      }));
  }
  let j;
  if (te && D.has(A)) {
    let e;
    (t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Wt.jsx)(B, {
          id: `chatgptProjectSharing.invite.alreadyAdded`,
          defaultMessage: `This person already has access or is selected`,
          description: `Message in the project sharing picker when an entered email belongs to the owner, an existing member, or a selected invitee`,
        })),
        (t[9] = e))
      : (e = t[9]),
      (j = e));
  } else if (o) {
    let e;
    (t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Wt.jsx)(B, {
          id: `chatgptProjectSharing.invite.noWorkspaceMatches`,
          defaultMessage: `Enter a workspace member's email to invite them to the project`,
          description: `Empty search result in workspace project sharing; only existing members of this workspace can be added by email`,
        })),
        (t[10] = e))
      : (e = t[10]),
      (j = e));
  } else {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Wt.jsx)(B, {
          id: `chatgptProjectSharing.invite.noMatches`,
          defaultMessage: `Enter an email address to invite someone`,
          description: `Empty result message in the project sharing picker, guiding users to type a complete email address`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (j = e));
  }
  let M;
  t[12] === m
    ? (M = t[13])
    : ((M = m.formatMessage({
        id: `chatgptProjectSharing.invite.label`,
        defaultMessage: `Invite people or groups`,
        description: `Accessible label for the input used to find workspace members or enter email addresses in the project sharing dialog`,
      })),
      (t[12] = m),
      (t[13] = M));
  let N;
  t[14] !== i || t[15] !== m
    ? ((N = i
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
      (t[16] = N))
    : (N = t[16]);
  let P = j,
    ne;
  t[17] === m
    ? (ne = t[18])
    : ((ne = m.formatMessage({
        id: `chatgptProjectSharing.invite.loading`,
        defaultMessage: `Searching workspace members`,
        description: `Accessible status while the project sharing picker searches workspace members and groups`,
      })),
      (t[17] = m),
      (t[18] = ne));
  let re = i && (v || ee || C) && O.length === 0 ? void 0 : O,
    F;
  t[19] === d ? (F = t[20]) : ((F = d.map(zt)), (t[19] = d), (t[20] = F));
  let I;
  t[21] === m
    ? (I = t[22])
    : ((I = (e) =>
        m.formatMessage(
          {
            id: `chatgptProjectSharing.invite.removeSelection`,
            defaultMessage: `Remove {name} from the invitation`,
            description: `Accessible label on a selected project invitee's remove button; name is the person's or group's display name or email`,
          },
          { name: e.label },
        )),
      (t[21] = m),
      (t[22] = I));
  let L;
  t[23] !== a || t[24] !== f || t[25] !== h || t[26] !== u || t[27] !== d.length
    ? ((L = d.length > 0 && h.trim() === `` ? (0, Wt.jsx)(yt, { disabled: a, role: u, onChange: f }) : null),
      (t[23] = a),
      (t[24] = f),
      (t[25] = h),
      (t[26] = u),
      (t[27] = d.length),
      (t[28] = L))
    : (L = t[28]);
  let oe;
  t[29] !== k || t[30] !== D || t[31] !== p || t[32] !== d
    ? ((oe = (e) => {
        if (!e.includes(`,`)) {
          g(e);
          return;
        }
        let t = [...d],
          n = new Set(D),
          r = [];
        for (let i of e.split(`,`)) {
          let e = i.trim().toLowerCase();
          e !== `` &&
            (c().safeParse(e).success
              ? n.has(e) || (n.add(e), t.push({ type: 10, user_email: e, capabilities: k }))
              : r.push(i.trim()));
        }
        (p(t), g(r.join(`, `)));
      }),
      (t[29] = k),
      (t[30] = D),
      (t[31] = p),
      (t[32] = d),
      (t[33] = oe))
    : (oe = t[33]);
  let R, se;
  t[34] !== p || t[35] !== d
    ? ((R = (e) => p(d.filter((t) => Y(t) !== e.id))),
      (se = (e) => {
        (p([...d, e.subject]), g(``));
      }),
      (t[34] = p),
      (t[35] = d),
      (t[36] = R),
      (t[37] = se))
    : ((R = t[36]), (se = t[37]));
  let z;
  t[38] !== a ||
  t[39] !== j ||
  t[40] !== s ||
  t[41] !== h ||
  t[42] !== oe ||
  t[43] !== R ||
  t[44] !== se ||
  t[45] !== M ||
  t[46] !== N ||
  t[47] !== ne ||
  t[48] !== re ||
  t[49] !== F ||
  t[50] !== I ||
  t[51] !== L
    ? ((z = (0, Wt.jsx)(G, {
        ariaLabel: M,
        placeholder: N,
        disabled: a,
        emptyMessage: P,
        loadingLabel: ne,
        options: re,
        portalContainer: s,
        query: h,
        selectedOptions: F,
        getRemoveLabel: I,
        trailingContent: L,
        onQueryChange: oe,
        onRemoveOption: R,
        onSelectOption: se,
      })),
      (t[38] = a),
      (t[39] = j),
      (t[40] = s),
      (t[41] = h),
      (t[42] = oe),
      (t[43] = R),
      (t[44] = se),
      (t[45] = M),
      (t[46] = N),
      (t[47] = ne),
      (t[48] = re),
      (t[49] = F),
      (t[50] = I),
      (t[51] = L),
      (t[52] = z))
    : (z = t[52]);
  let ce;
  t[53] !== i || t[54] !== x || t[55] !== w || t[56] !== y
    ? ((ce =
        i && (y || x || w)
          ? (0, Wt.jsx)(`p`, {
              className: `text-sm text-secondary`,
              role: `status`,
              children: (0, Wt.jsx)(B, {
                id: `chatgptProjectSharing.invite.searchError`,
                defaultMessage: `Workspace search is unavailable. You can still enter an email address.`,
                description: `Message when searching workspace members or groups fails in project sharing; inviting an existing workspace member by email is still supported`,
              }),
            })
          : null),
      (t[53] = i),
      (t[54] = x),
      (t[55] = w),
      (t[56] = y),
      (t[57] = ce))
    : (ce = t[57]);
  let le;
  return (
    t[58] !== z || t[59] !== ce
      ? ((le = (0, Wt.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [z, ce] })),
        (t[58] = z),
        (t[59] = ce),
        (t[60] = le))
      : (le = t[60]),
    le
  );
}
function zt(e) {
  return { id: Y(e), label: ct(e), subject: e };
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
    ((Ht = b()), te(), (Ut = s()), D(), u(), Ze(), Ye(), _e(), nt(), Ct(), (Wt = h()));
  }))();
}
function Kt(e) {
  "use forget";
  let t = (0, qt.c)(9),
    { project: r, disabled: i } = e,
    a = n(ee),
    o = ae(),
    s = r.gizmo.display.name,
    c;
  t[0] === r ? (c = t[1]) : ((c = rt(r)), (t[0] = r), (t[1] = c));
  let l = encodeURIComponent(c),
    u = encodeURIComponent(s),
    d = `https://www.linkedin.com/shareArticle?url=${l}&text=${u}`,
    f;
  if (t[2] !== i || t[3] !== o || t[4] !== a || t[5] !== d || t[6] !== u || t[7] !== l) {
    let e = [
      { name: `LinkedIn`, icon: tt, href: d, service: H.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_LINKEDIN },
      {
        name: `Reddit`,
        icon: le,
        href: `https://www.reddit.com/submit?url=${l}&title=${u}`,
        service: H.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_REDDIT,
      },
      {
        name: `X`,
        icon: pt,
        href: `https://twitter.com/intent/tweet?url=${l}&text=${u}`,
        service: H.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_X,
      },
    ];
    ((f = (0, Jt.jsx)(Jt.Fragment, {
      children: e.map((e) => {
        let { name: t, icon: n, href: r, service: s } = e,
          c = o.formatMessage(
            {
              id: `chatgptProjectSharing.socialShare`,
              defaultMessage: `Share on {serviceName}`,
              description: `Accessible label and tooltip for a personal project sharing button that opens an external social site's post composer; serviceName is LinkedIn, Reddit, or X`,
            },
            { serviceName: t },
          );
        return (0, Jt.jsx)(
          L,
          {
            tooltipContent: c,
            children: (0, Jt.jsx)(O, {
              "aria-label": c,
              color: `secondary`,
              disabled: i,
              radius: `full`,
              size: `dialogAction`,
              type: `button`,
              uniform: !0,
              onClick: (e) => {
                (Ue(a, K, { service: s }),
                  Se({
                    event: e,
                    href: r,
                    initiator: `open_in_browser_bridge`,
                    openTarget: `external-browser`,
                  }));
              },
              children: (0, Jt.jsx)(n, { "aria-hidden": `true` }),
            }),
          },
          t,
        );
      }),
    })),
      (t[2] = i),
      (t[3] = o),
      (t[4] = a),
      (t[5] = d),
      (t[6] = u),
      (t[7] = l),
      (t[8] = f));
  } else f = t[8];
  return f;
}
var qt, Jt;
function Yt() {
  return (Yt = e(() => {
    ((qt = b()), x(), Fe(), te(), D(), A(), Oe(), S(), R(), et(), ft(), Ge(), i(), nt(), (Jt = h()));
  }))();
}
function Xt(e) {
  "use forget";
  let t = (0, en.c)(44),
    { accountId: r, disabled: i, isProjectReady: a, project: o, onClose: s } = e,
    c = n(ee),
    { data: l } = je(),
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = l?.structure === `workspace` ? l.account_user_id : l?.account_user_id.split(`__`)[0]),
      (t[0] = l),
      (t[1] = u));
  let d = u,
    f;
  t[2] !== r || t[3] !== o.gizmo.id
    ? ((f = [`chatgpt-project-share-work-conversations`, r, o.gizmo.id]),
      (t[2] = r),
      (t[3] = o.gizmo.id),
      (t[4] = f))
    : (f = t[4]);
  let m;
  t[5] !== r || t[6] !== o.gizmo.id || t[7] !== c
    ? ((m = async (e) => {
        let { signal: t } = e,
          n = [],
          i = `0`;
        do {
          if ((t.throwIfAborted(), c.get(J) !== r)) throw new k();
          let e = await ke({ cursor: i, limit: 50, ownedOnly: !1, projectId: o.gizmo.id, signal: t });
          if ((t.throwIfAborted(), e.items.some($t))) return null;
          (n.push(...e.items.filter(Qt)), (i = e.cursor));
        } while (i);
        return (0, tn.default)(n, `id`);
      }),
      (t[5] = r),
      (t[6] = o.gizmo.id),
      (t[7] = c),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== a || t[10] !== f || t[11] !== m
    ? ((h = { queryKey: f, enabled: a, staleTime: 0, gcTime: 0, retry: !1, queryFn: m }),
      (t[9] = a),
      (t[10] = f),
      (t[11] = m),
      (t[12] = h))
    : (h = t[12]);
  let { data: g, isFetching: v, isError: y } = _(h),
    b;
  t[13] !== r || t[14] !== i || t[15] !== s || t[16] !== c
    ? ((b = function (e, t) {
        if (e.button === 0 || e.button === 1) {
          if (i || c.get(J) !== r) {
            e.preventDefault();
            return;
          }
          e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey
            ? s()
            : t != null &&
              Se({ event: e, href: t, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
        }
      }),
      (t[13] = r),
      (t[14] = i),
      (t[15] = s),
      (t[16] = c),
      (t[17] = b))
    : (b = t[17]);
  let x = b,
    S;
  if (a && !v && !y && g != null && g.length > 0) {
    let e;
    t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(B, {
          id: `chatgptProjectSharing.workWarning.removeListed`,
          defaultMessage: `Remove all Work conversations from this project to share it:`,
          description: `Instructions above a list of linked Work conversations that prevent sharing a project; the owner must remove all Work conversations, including any not listed`,
        })),
        (t[18] = e))
      : (e = t[18]);
    let n;
    if (
      t[19] !== d ||
      t[20] !== g ||
      t[21] !== i ||
      t[22] !== x ||
      t[23] !== o.gizmo.id ||
      t[24] !== o.gizmo.short_url
    ) {
      let e;
      (t[26] !== d || t[27] !== i || t[28] !== x || t[29] !== o.gizmo.id || t[30] !== o.gizmo.short_url
        ? ((e = (e) => {
            let t =
                e.title?.trim() ||
                (0, Q.jsx)(B, {
                  id: `chatgptProjectSharing.workWarning.untitled`,
                  defaultMessage: `Untitled conversation`,
                  description: `Link label for a Work conversation that blocks project sharing when its title is empty or unavailable`,
                }),
              n = `owner` in e ? e.owner.user_id : d,
              r = null;
            if (n != null && n !== d) {
              let t = o.gizmo.short_url ?? o.gizmo.id;
              ((r = new URL(
                `/g/${encodeURIComponent(t)}/shared/c/${encodeURIComponent(e.id)}`,
                `https://chatgpt.com`,
              )),
                r.searchParams.set(`owner_user_id`, n));
            }
            let a = r?.toString() ?? null;
            return (0, Q.jsx)(
              `li`,
              {
                className: `break-words`,
                dir: `auto`,
                children:
                  a == null
                    ? (0, Q.jsx)(N, {
                        className: `cursor-interaction text-default underline underline-offset-2`,
                        "aria-disabled": i,
                        to: w(e.id, { gizmoId: o.gizmo.id }),
                        onClick: (e) => x(e, null),
                        onAuxClick: (e) => x(e, null),
                        children: t,
                      })
                    : (0, Q.jsx)(q, {
                        className: `cursor-interaction text-default underline underline-offset-2`,
                        "aria-disabled": i,
                        href: a,
                        initiator: `open_in_browser_bridge`,
                        onClick: (e) => x(e, a),
                        onAuxClick: (e) => x(e, a),
                        onContextMenu: Zt,
                        children: t,
                      }),
              },
              e.id,
            );
          }),
          (t[26] = d),
          (t[27] = i),
          (t[28] = x),
          (t[29] = o.gizmo.id),
          (t[30] = o.gizmo.short_url),
          (t[31] = e))
        : (e = t[31]),
        (n = g.slice(0, 5).map(e)),
        (t[19] = d),
        (t[20] = g),
        (t[21] = i),
        (t[22] = x),
        (t[23] = o.gizmo.id),
        (t[24] = o.gizmo.short_url),
        (t[25] = n));
    } else n = t[25];
    let r;
    t[32] === n
      ? (r = t[33])
      : ((r = (0, Q.jsx)(`ul`, {
          className: `mt-1 flex min-w-0 list-disc flex-col gap-1 ps-5`,
          children: n,
        })),
        (t[32] = n),
        (t[33] = r));
    let a;
    t[34] === g.length
      ? (a = t[35])
      : ((a =
          g.length > 5
            ? (0, Q.jsx)(`div`, {
                className: `mt-1 ps-5`,
                children: (0, Q.jsx)(B, {
                  id: `chatgptProjectSharing.workWarning.remaining`,
                  defaultMessage: `{remainingCount, plural, one {And # more} other {And # more}}`,
                  description: `Number of additional Work conversations preventing project sharing beyond the five linked conversations shown above`,
                  values: { remainingCount: g.length - 5 },
                }),
              })
            : null),
        (t[34] = g.length),
        (t[35] = a));
    let s;
    (t[36] !== r || t[37] !== a
      ? ((s = (0, Q.jsxs)(Q.Fragment, { children: [e, r, a] })), (t[36] = r), (t[37] = a), (t[38] = s))
      : (s = t[38]),
      (S = s));
  } else {
    let e;
    (t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(B, {
          id: `chatgptProjectSharing.workWarning.removeAll`,
          defaultMessage: `Remove all Work conversations from this project to share it`,
          description: `Instructions when Work conversations block project sharing and the linked conversation list is not available, including while it loads`,
        })),
        (t[39] = e))
      : (e = t[39]),
      (S = e));
  }
  let C;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(B, {
        id: `chatgptProjectSharing.workWarning.title`,
        defaultMessage: `Projects with Work conversations can’t be shared`,
        description: `Warning title in project sharing when the project contains Work conversations, which prevent granting additional access`,
      })),
      (t[40] = C))
    : (C = t[40]);
  let T;
  return (
    t[41] !== S || t[42] !== v
      ? ((T = (0, Q.jsx)(ue, {
          ariaLive: `polite`,
          Icon: p,
          layout: `verticalIcon`,
          variant: `callout`,
          title: C,
          content: (0, Q.jsx)(`div`, { "aria-atomic": `true`, "aria-busy": v, children: S }),
        })),
        (t[41] = S),
        (t[42] = v),
        (t[43] = T))
      : (T = t[43]),
    T
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
    ((en = b()),
      E(),
      F(),
      (tn = t(o(), 1)),
      te(),
      D(),
      y(),
      Ve(),
      Ne(),
      He(),
      de(),
      Ie(),
      Oe(),
      S(),
      i(),
      C(),
      (Q = h()));
  }))();
}
function rn(e) {
  "use forget";
  let t = (0, sn.c)(125),
    { accountId: i, projectId: o, onClose: s } = e,
    c = n(ee),
    l = ae(),
    u = ne(J),
    { data: d } = je(),
    p = u === i && d?.id === i,
    m = d?.structure === `workspace`,
    h = p && m,
    v;
  t[0] === h ? (v = t[1]) : ((v = { enabled: h }), (t[0] = h), (t[1] = v));
  let { data: y, isError: b, refetch: x } = ie(he, i, v),
    S;
  t[2] === o ? (S = t[3]) : ((S = we(o)), (t[2] = o), (t[3] = S));
  let C;
  t[4] === o ? (C = t[5]) : ((C = () => ge(o)), (t[4] = o), (t[5] = C));
  let w;
  t[6] !== p || t[7] !== S || t[8] !== C
    ? ((w = { enabled: p, queryKey: S, queryFn: C, staleTime: 0, refetchOnMount: `always` }),
      (t[6] = p),
      (t[7] = S),
      (t[8] = C),
      (t[9] = w))
    : (w = t[9]);
  let { data: E, isFetching: D, isError: k, refetch: A } = _(w),
    te = b ? void 0 : y,
    j;
  t[10] !== d || t[11] !== E || t[12] !== te
    ? ((j = st(E, d, te)), (t[10] = d), (t[11] = E), (t[12] = te), (t[13] = j))
    : (j = t[13]);
  let M = j,
    N;
  t[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = []), (t[14] = N)) : (N = t[14]);
  let [P, F] = (0, cn.useState)(N),
    [I, L] = (0, cn.useState)(`edit`),
    [R, se] = (0, cn.useState)(null),
    [z, ce] = (0, cn.useState)(!1),
    le = (0, cn.useRef)(!1),
    [V, de] = (0, cn.useState)(`idle`),
    [fe, H] = (0, cn.useState)(null),
    pe = k || (m && b),
    U = !p || z || D || pe || !M.canOpen,
    me;
  t[15] !== m || t[16] !== P
    ? ((me = m && P.filter(on).length > 5), (t[15] = m), (t[16] = P), (t[17] = me))
    : (me = t[17]);
  let W = me,
    G = E?.has_tpp_conversation === !0,
    K = M.canInvite && P.length > 0,
    q = z || V === `copying`,
    _e = m || K || !G,
    ve;
  t[18] !== d?.name || t[19] !== l
    ? ((ve =
        d?.name ||
        l.formatMessage({
          id: `chatgptProjectSharing.workspaceFallback`,
          defaultMessage: `your workspace`,
          description: `Fallback workspace name in the project sharing audience selector when the workspace's display name is unavailable`,
        })),
      (t[18] = d?.name),
      (t[19] = l),
      (t[20] = ve))
    : (ve = t[20]);
  let ye = ve,
    be;
  t[21] !== d || t[22] !== i || t[23] !== U || t[24] !== o || t[25] !== c
    ? ((be = function (e) {
        return U || le.current || d == null
          ? Promise.resolve(!1)
          : ((le.current = !0),
            ce(!0),
            H(null),
            Mt({ scope: c, account: d, projectId: o, change: e })
              .then((e) => (e === `saved` ? (de(`idle`), !0) : (e !== `cancelled` && H(e), !1)))
              .catch(() => (c.get(J) === i && H(`save`), !1))
              .finally(() => {
                ((le.current = !1), ce(!1));
              }));
      }),
      (t[21] = d),
      (t[22] = i),
      (t[23] = U),
      (t[24] = o),
      (t[25] = c),
      (t[26] = be))
    : (be = t[26]);
  let xe = be,
    Se;
  t[27] !== i ||
  t[28] !== K ||
  t[29] !== V ||
  t[30] !== U ||
  t[31] !== G ||
  t[32] !== E ||
  t[33] !== I ||
  t[34] !== xe ||
  t[35] !== c ||
  t[36] !== P ||
  t[37] !== W
    ? ((Se = async function () {
        if (!(U || G || E == null || c.get(J) !== i)) {
          if (K) {
            if (W) return;
            (await xe({ type: `invite`, subjects: P.map((e) => ({ ...e, capabilities: lt[I] })) })) && F([]);
            return;
          }
          if (V !== `copying`) {
            (de(`copying`), H(null));
            try {
              (await re.clipboard.writeText(rt(E)), de(`copied`));
            } catch {
              (de(`idle`), H(`copy`));
            }
          }
        }
      }),
      (t[27] = i),
      (t[28] = K),
      (t[29] = V),
      (t[30] = U),
      (t[31] = G),
      (t[32] = E),
      (t[33] = I),
      (t[34] = xe),
      (t[35] = c),
      (t[36] = P),
      (t[37] = W),
      (t[38] = Se))
    : (Se = t[38]);
  let Ce = Se,
    Te;
  if (K) {
    let e;
    (t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(B, {
          id: `chatgptProjectSharing.invite.submit`,
          defaultMessage: `Invite`,
          description: `Button that grants project access to the selected people or groups with the selected permission`,
        })),
        (t[39] = e))
      : (e = t[39]),
      (Te = e));
  } else if (V === `copied`) {
    let e;
    (t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(B, {
          id: `chatgptProjectSharing.copied`,
          defaultMessage: `Copied`,
          description: `Confirmation on the project sharing copy button after its link was copied to the clipboard`,
        })),
        (t[40] = e))
      : (e = t[40]),
      (Te = e));
  } else {
    let e;
    (t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(B, {
          id: `chatgptProjectSharing.copyLink`,
          defaultMessage: `Copy link`,
          description: `Button that copies a project link without changing access; only the selected audience can join`,
        })),
        (t[41] = e))
      : (e = t[41]),
      (Te = e));
  }
  let De;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = {
        permission: (0, $.jsx)(B, {
          id: `chatgptProjectSharing.permissionError`,
          defaultMessage: `This sharing change is not allowed. Check your project and workspace permissions.`,
          description: `Error when project sharing is denied by permissions, workspace policy, or server sharing restrictions; no access change is shown as successful`,
        }),
        work: (0, $.jsx)(B, {
          id: `chatgptProjectSharing.workError`,
          defaultMessage: `Remove all Work conversations from this project before sharing it`,
          description: `Error when a fresh check finds Work conversations and blocks granting additional project access`,
        }),
        copy: (0, $.jsx)(B, {
          id: `chatgptProjectSharing.copyError`,
          defaultMessage: `Could not copy the project link. Try again`,
          description: `Error when copying the project link to the host clipboard fails; the dialog remains open for retry`,
        }),
        save: (0, $.jsx)(B, {
          id: `chatgptProjectSharing.saveError`,
          defaultMessage: `Could not update project sharing. Try again`,
          description: `Error when saving project sharing fails; existing access remains displayed and selected invitees are preserved for retry`,
        }),
      }),
      (t[42] = De))
    : (De = t[42]);
  let Oe = De;
  if (!p) return null;
  let ke;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = {
        "aria-describedby": void 0,
        onOpenAutoFocus: (e) => {
          e.currentTarget instanceof HTMLElement && se(e.currentTarget);
        },
      }),
      (t[43] = ke))
    : (ke = t[43]);
  let Ae = !q,
    Me;
  t[44] !== q || t[45] !== s
    ? ((Me = (e) => {
        !e && !q && s();
      }),
      (t[44] = q),
      (t[45] = s),
      (t[46] = Me))
    : (Me = t[46]);
  let Ne;
  t[47] === Ce
    ? (Ne = t[48])
    : ((Ne = (e) => {
        (e.preventDefault(), Ce());
      }),
      (t[47] = Ce),
      (t[48] = Ne));
  let Pe;
  t[49] === E
    ? (Pe = t[50])
    : ((Pe = (0, $.jsx)(`header`, {
        className: `flex min-h-13 shrink-0 items-center py-2 ps-4 pe-13 select-none pointer-coarse:min-h-14`,
        children: (0, $.jsx)(oe, {
          className: `truncate text-heading-sm leading-7 font-normal text-default`,
          children:
            E == null
              ? (0, $.jsx)(B, {
                  id: `chatgptProjectSharing.title`,
                  defaultMessage: `Share project`,
                  description: `Title of the dialog for sharing a ChatGPT project and managing its collaborators`,
                })
              : (0, $.jsx)(B, {
                  id: `chatgptProjectSharing.namedTitle`,
                  defaultMessage: `Share {projectName}`,
                  description: `Title of the project sharing dialog; projectName is the name of the project whose access is being managed`,
                  values: { projectName: E.gizmo.display.name },
                }),
        }),
      })),
      (t[49] = E),
      (t[50] = Pe));
  let Fe = !_e && `pb-4`,
    Ie;
  t[51] === Fe
    ? (Ie = t[52])
    : ((Ie = g(`flex min-h-0 flex-col gap-4 overflow-y-auto px-4 pt-2`, Fe)), (t[51] = Fe), (t[52] = Ie));
  let Le;
  t[53] !== i || t[54] !== m || t[55] !== pe || t[56] !== A || t[57] !== x || t[58] !== c
    ? ((Le = pe
        ? (0, $.jsx)(ue, {
            type: `error`,
            role: `alert`,
            content: (0, $.jsx)(B, {
              id: `chatgptProjectSharing.loadError`,
              defaultMessage: `Could not load project sharing settings`,
              description: `Error in project sharing when project data or workspace permissions could not be loaded; changes stay disabled until retry succeeds`,
            }),
            primaryCtaText: (0, $.jsx)(B, {
              id: `chatgptProjectSharing.retry`,
              defaultMessage: `Retry`,
              description: `Button to reload failed project sharing settings`,
            }),
            onPrimaryCtaClick: () => {
              (A(),
                m &&
                  c.queryClient
                    .cancelQueries({ queryKey: [`accounts`, `settings`, i] })
                    .then(() => Ee(i))
                    .catch(an)
                    .then(() => x()));
            },
          })
        : null),
      (t[53] = i),
      (t[54] = m),
      (t[55] = pe),
      (t[56] = A),
      (t[57] = x),
      (t[58] = c),
      (t[59] = Le))
    : (Le = t[59]);
  let Re;
  t[60] === fe
    ? (Re = t[61])
    : ((Re = fe == null ? null : (0, $.jsx)(ue, { type: `error`, role: `alert`, content: Oe[fe] })),
      (t[60] = fe),
      (t[61] = Re));
  let ze;
  t[62] !== i || t[63] !== G || t[64] !== q || t[65] !== D || t[66] !== s || t[67] !== E || t[68] !== k
    ? ((ze =
        G && E != null
          ? (0, $.jsx)(`div`, {
              className: `shrink-0`,
              children: (0, $.jsx)(Xt, {
                accountId: i,
                disabled: q,
                isProjectReady: !D && !k,
                project: E,
                onClose: s,
              }),
            })
          : null),
      (t[62] = i),
      (t[63] = G),
      (t[64] = q),
      (t[65] = D),
      (t[66] = s),
      (t[67] = E),
      (t[68] = k),
      (t[69] = ze))
    : (ze = t[69]);
  let Be;
  t[70] !== i ||
  t[71] !== U ||
  t[72] !== m ||
  t[73] !== M.canInvite ||
  t[74] !== M.canListWorkspaceMembers ||
  t[75] !== R ||
  t[76] !== E ||
  t[77] !== I ||
  t[78] !== P ||
  t[79] !== y?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts ||
  t[80] !== W
    ? ((Be =
        E != null && M.canInvite
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, $.jsx)(Rt, {
                  accountId: i,
                  allowScimGroups: y?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts !== !1,
                  canListWorkspaceMembers: M.canListWorkspaceMembers,
                  disabled: U,
                  isWorkspace: m,
                  portalContainer: R,
                  project: E,
                  role: I,
                  selected: P,
                  onRoleChange: L,
                  onChange: F,
                }),
                W
                  ? (0, $.jsx)(`p`, {
                      className: `text-sm text-danger`,
                      role: `alert`,
                      children: (0, $.jsx)(B, {
                        id: `chatgptProjectSharing.tooManyEmails`,
                        defaultMessage: `Invite no more than 5 email addresses at a time`,
                        description: `Validation error when more than five email invitees are selected for a workspace project`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (t[70] = i),
      (t[71] = U),
      (t[72] = m),
      (t[73] = M.canInvite),
      (t[74] = M.canListWorkspaceMembers),
      (t[75] = R),
      (t[76] = E),
      (t[77] = I),
      (t[78] = P),
      (t[79] = y?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts),
      (t[80] = W),
      (t[81] = Be))
    : (Be = t[81]);
  let Ve;
  t[82] !== d?.account_user_id ||
  t[83] !== U ||
  t[84] !== m ||
  t[85] !== M.canManage ||
  t[86] !== M.canShareWorkspaceLink ||
  t[87] !== E ||
  t[88] !== xe ||
  t[89] !== ye
    ? ((Ve =
        E == null
          ? null
          : (0, $.jsx)(wt, {
              canManage: M.canManage,
              canShareWorkspaceLink: M.canShareWorkspaceLink,
              currentUserId: d?.account_user_id,
              disabled: U,
              isWorkspace: m,
              project: E,
              workspaceName: ye,
              onChange: (e) => void xe(e),
            })),
      (t[82] = d?.account_user_id),
      (t[83] = U),
      (t[84] = m),
      (t[85] = M.canManage),
      (t[86] = M.canShareWorkspaceLink),
      (t[87] = E),
      (t[88] = xe),
      (t[89] = ye),
      (t[90] = Ve))
    : (Ve = t[90]);
  let He;
  t[91] === D
    ? (He = t[92])
    : ((He = D
        ? (0, $.jsx)(`p`, {
            className: `text-sm text-secondary`,
            role: `status`,
            children: (0, $.jsx)(B, {
              id: `chatgptProjectSharing.loading`,
              defaultMessage: `Checking project access…`,
              description: `Status while refreshing project sharing data and checking for Work conversations; sharing controls are disabled during the check`,
            }),
          })
        : null),
      (t[91] = D),
      (t[92] = He));
  let Ue;
  t[93] === m
    ? (Ue = t[94])
    : ((Ue = m ? null : (0, $.jsx)(Pt, { isWorkspace: !1 })), (t[93] = m), (t[94] = Ue));
  let We;
  t[95] !== Ie ||
  t[96] !== Le ||
  t[97] !== Re ||
  t[98] !== ze ||
  t[99] !== Be ||
  t[100] !== Ve ||
  t[101] !== He ||
  t[102] !== Ue
    ? ((We = (0, $.jsxs)(`div`, { className: Ie, children: [Le, Re, ze, Be, Ve, He, Ue] })),
      (t[95] = Ie),
      (t[96] = Le),
      (t[97] = Re),
      (t[98] = ze),
      (t[99] = Be),
      (t[100] = Ve),
      (t[101] = He),
      (t[102] = Ue),
      (t[103] = We))
    : (We = t[103]);
  let Ge;
  t[104] !== K ||
  t[105] !== V ||
  t[106] !== U ||
  t[107] !== G ||
  t[108] !== z ||
  t[109] !== m ||
  t[110] !== E ||
  t[111] !== _e ||
  t[112] !== Te ||
  t[113] !== W
    ? ((Ge = _e
        ? (0, $.jsxs)(`footer`, {
            className: `flex shrink-0 flex-wrap items-center justify-between gap-2 p-4 select-none`,
            children: [
              m
                ? (0, $.jsx)(`div`, {
                    className: `min-w-0 grow basis-48`,
                    children: (0, $.jsx)(Pt, { isWorkspace: !0 }),
                  })
                : null,
              (0, $.jsxs)(`div`, {
                className: `ms-auto flex shrink-0 items-center gap-2`,
                children: [
                  !m && !K && !G && E != null ? (0, $.jsx)(Kt, { project: E, disabled: U }) : null,
                  K
                    ? (0, $.jsx)(O, {
                        color: `outlineSurface`,
                        disabled: z,
                        size: `dialogAction`,
                        type: `button`,
                        onClick: () => {
                          (F([]), H(null));
                        },
                        children: (0, $.jsx)(B, {
                          id: `chatgptProjectSharing.cancelInvite`,
                          defaultMessage: `Cancel`,
                          description: `Button that clears selected project invitees without closing the sharing dialog or changing existing access`,
                        }),
                      })
                    : null,
                  K || !G
                    ? (0, $.jsxs)(O, {
                        color: K ? `accentAction` : `primary`,
                        size: `dialogAction`,
                        type: `submit`,
                        disabled: U || G || W,
                        loading: z || V === `copying`,
                        children: [!K && (V === `copied` ? (0, $.jsx)(a, {}) : (0, $.jsx)(r, {})), Te],
                      })
                    : null,
                ],
              }),
            ],
          })
        : null),
      (t[104] = K),
      (t[105] = V),
      (t[106] = U),
      (t[107] = G),
      (t[108] = z),
      (t[109] = m),
      (t[110] = E),
      (t[111] = _e),
      (t[112] = Te),
      (t[113] = W),
      (t[114] = Ge))
    : (Ge = t[114]);
  let Ke;
  t[115] !== Ne || t[116] !== Pe || t[117] !== We || t[118] !== Ge
    ? ((Ke = (0, $.jsxs)(f, {
        as: `form`,
        className: `max-h-[calc(100vh-6rem)] min-h-0 overflow-hidden`,
        variant: `chatgpt`,
        onSubmit: Ne,
        children: [Pe, We, Ge],
      })),
      (t[115] = Ne),
      (t[116] = Pe),
      (t[117] = We),
      (t[118] = Ge),
      (t[119] = Ke))
    : (Ke = t[119]);
  let qe;
  return (
    t[120] !== q || t[121] !== Ae || t[122] !== Me || t[123] !== Ke
      ? ((qe = (0, $.jsx)(T, {
          open: !0,
          contentOverflow: `visible`,
          contentProps: ke,
          shouldIgnoreClickOutside: q,
          showDialogClose: Ae,
          size: `large`,
          variant: `chatgpt`,
          onOpenChange: Me,
          children: Ke,
        })),
        (t[120] = q),
        (t[121] = Ae),
        (t[122] = Me),
        (t[123] = Ke),
        (t[124] = qe))
      : (qe = t[124]),
    qe
  );
}
function an() {}
function on(e) {
  return e.type === 10;
}
var sn, cn, $;
function ln() {
  return (ln = e(() => {
    ((sn = b()),
      F(),
      v(),
      te(),
      (cn = s()),
      D(),
      Ce(),
      Ve(),
      ye(),
      ve(),
      He(),
      de(),
      A(),
      m(),
      d(),
      S(),
      M(),
      i(),
      be(),
      Ot(),
      Nt(),
      Lt(),
      Gt(),
      nt(),
      Yt(),
      nn(),
      ($ = h()));
  }))();
}
ln();
export { rn as ChatGptProjectShareDialog };
//# sourceMappingURL=dialog-2493d2a37f9c.js.map
