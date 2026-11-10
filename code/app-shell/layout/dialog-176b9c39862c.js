import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  AW as i,
  Amn as a,
  BO as o,
  Cpn as s,
  F3t as c,
  FKt as l,
  Hot as u,
  IXt as d,
  JG as f,
  Jit as p,
  Jrt as m,
  KG as h,
  KWt as g,
  Kit as _,
  Kot as v,
  LXt as y,
  Llt as ee,
  M6t as b,
  N3t as x,
  N6t as S,
  O3t as C,
  Opn as w,
  Q3t as T,
  QWt as E,
  QXt as D,
  RKt as O,
  RWt as k,
  Rpn as A,
  S3t as j,
  SG as M,
  SW as N,
  Spn as P,
  Uat as te,
  Vat as F,
  Wot as I,
  Xdt as L,
  ZG as ne,
  Zrt as R,
  _H as re,
  _pn as z,
  a3t as ie,
  aYt as ae,
  ast as oe,
  bG as B,
  dKt as se,
  dqt as ce,
  dut as le,
  eit as ue,
  fKt as de,
  flt as fe,
  fxt as pe,
  gH as V,
  hmn as H,
  hz as me,
  iit as U,
  jG as W,
  jW as G,
  kG as he,
  kMt as ge,
  kmn as K,
  ldt as _e,
  llt as ve,
  mut as ye,
  mxt as be,
  mz as xe,
  nG as Se,
  nZt as Ce,
  nlt as we,
  o3t as Te,
  ost as Ee,
  pqt as De,
  rit as Oe,
  rq as ke,
  rrn as Ae,
  rut as je,
  s3t as Me,
  sYt as Ne,
  tG as Pe,
  tit as Fe,
  tut as Ie,
  uq as Le,
  vrn as Re,
  xG as ze,
  xW as Be,
  zO as Ve,
  zpn as He,
} from "./app-initial-f094ef01c64d.js";
import { n as Ue, t as We } from "./permission-dropdown-62b3ddc52f74.js";
import {
  a as q,
  c as J,
  i as Ge,
  l as Ke,
  n as qe,
  o as Je,
  r as Ye,
  s as Xe,
  t as Ze,
} from "./model-780fee08912f.js";
import { i as Qe, n as $e, r as et, t as tt } from "./twitter-6618edee0f61.js";
function nt(e) {
  "use forget";
  let t = (0, it.c)(2),
    { role: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n === `edit`
            ? (0, at.jsx)(s, {
                id: `chatgptProjectSharing.canEdit`,
                defaultMessage: `Can edit`,
                description: `Permission label in project sharing; collaborators can chat, add and remove files, and edit project instructions`,
              })
            : (0, at.jsx)(s, {
                id: `chatgptProjectSharing.canChat`,
                defaultMessage: `Can chat`,
                description: `Permission label in project sharing; collaborators can view project content and chat, but cannot edit project instructions or sources`,
              })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function rt(e) {
  "use forget";
  let t = (0, it.c)(4),
    { access: n, workspaceName: r } = e;
  if (n === `link`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, at.jsx)(s, {
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
        : ((e = (0, at.jsx)(s, {
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
      ? ((i = (0, at.jsx)(s, {
          id: `chatgptProjectSharing.invitedOnly`,
          defaultMessage: `Only those invited`,
          description: `Project sharing audience option that restricts access to existing members and people or groups explicitly invited`,
        })),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
var it,
  at,
  ot = e(() => {
    ((it = K()), P(), (at = H()));
  });
function st(e) {
  "use forget";
  let t = (0, lt.c)(19),
    { disabled: n, editDisabled: r, role: i, onChange: a, onRemoveAccess: o } = e,
    c = r !== void 0 && r,
    l = w(),
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = l.formatMessage({
        id: `chatgptProjectSharing.canChatDescription`,
        defaultMessage: `Chat and view project content`,
        description: `Description under Can chat in the project sharing permissions menu, explaining that the collaborator can read project content and chat without editing it`,
      })),
      (t[0] = l),
      (t[1] = u));
  let d;
  t[2] === u ? (d = t[3]) : ((d = { value: `chat`, description: u }), (t[2] = u), (t[3] = d));
  let f;
  t[4] === l
    ? (f = t[5])
    : ((f = l.formatMessage({
        id: `chatgptProjectSharing.canEditDescription`,
        defaultMessage: `Chat and edit project content`,
        description: `Description under Can edit in the project sharing permissions menu, explaining that the collaborator can chat and modify project content`,
      })),
      (t[4] = l),
      (t[5] = f));
  let p;
  t[6] !== c || t[7] !== f
    ? ((p = { value: `edit`, disabled: c, description: f }), (t[6] = c), (t[7] = f), (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== d || t[10] !== p ? ((m = [d, p]), (t[9] = d), (t[10] = p), (t[11] = m)) : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, ut.jsx)(s, {
        id: `chatgptProjectSharing.removeMember`,
        defaultMessage: `Remove from project`,
        description: `Menu action to remove a collaborator or group from the project after confirmation`,
      })),
      (t[12] = h))
    : (h = t[12]);
  let g;
  return (
    t[13] !== n || t[14] !== a || t[15] !== o || t[16] !== i || t[17] !== m
      ? ((g = (0, ut.jsx)(We, {
          disabled: n,
          options: m,
          renderLabel: ct,
          removeLabel: h,
          value: i,
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
function ct(e) {
  return (0, ut.jsx)(nt, { role: e });
}
var lt,
  ut,
  dt = e(() => {
    ((lt = K()), P(), Ue(), ot(), (ut = H()));
  });
function ft(e) {
  "use forget";
  let t = (0, ht.c)(58),
    {
      canManage: n,
      canShareWorkspaceLink: r,
      currentUserId: a,
      disabled: o,
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
  t[2] === m ? (g = t[3]) : ((g = qe(m)), (t[2] = m), (t[3] = g));
  let v = g,
    y = l.has_tpp_conversation === !0,
    ee = l.gizmo.author,
    b = ee.display_name || ee.user_email || ee.user_id,
    x;
  t[4] === a ? (x = t[5]) : ((x = a?.split(`__`)[0]), (t[4] = a), (t[5] = x));
  let S = x,
    C;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { value: `private`, icon: (0, Y.jsx)(ye, {}) }), (t[6] = C))
    : (C = t[6]);
  let w;
  if (t[7] !== v || t[8] !== r || t[9] !== y || t[10] !== c) {
    if (((w = [C]), c && (r || v === `workspace_link`))) {
      let e = y && v === `private`,
        n;
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Y.jsx)(we, {})), (t[12] = n))
        : (n = t[12]);
      let r;
      (t[13] === e
        ? (r = t[14])
        : ((r = { value: `workspace_link`, disabled: e, icon: n }), (t[13] = e), (t[14] = r)),
        w.push(r));
    }
    if (!c) {
      let e = y && v !== `link`,
        n;
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Y.jsx)(Ie, {})), (t[15] = n))
        : (n = t[15]);
      let r;
      (t[16] === e
        ? (r = t[17])
        : ((r = { value: `link`, disabled: e, icon: n }), (t[16] = e), (t[17] = r)),
        w.push(r));
    }
    ((t[7] = v), (t[8] = r), (t[9] = y), (t[10] = c), (t[11] = w));
  } else w = t[11];
  let T;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Y.jsx)(`h3`, {
        className: `text-sm font-normal text-secondary select-none`,
        children: (0, Y.jsx)(s, {
          id: `shareDialog.whoHasAccess`,
          defaultMessage: `Who has access`,
          description: `Heading above the audience, people, groups, and permissions in a share dialog`,
        }),
      })),
      (t[18] = T))
    : (T = t[18]);
  let E = w.find((e) => e.value === v)?.icon,
    D;
  t[19] === E
    ? (D = t[20])
    : ((D = (0, Y.jsx)(`span`, {
        className: `flex size-6 shrink-0 items-center justify-center`,
        children: E,
      })),
      (t[19] = E),
      (t[20] = D));
  let O;
  t[21] !== v || t[22] !== w || t[23] !== n || t[24] !== o || t[25] !== d || t[26] !== u
    ? ((O = n
        ? (0, Y.jsx)(h, {
            align: `start`,
            contentWidth: `menu`,
            disabled: o,
            surface: `chatgpt`,
            triggerButton: (0, Y.jsxs)(ge, {
              color: `ghostActive`,
              disabled: o,
              size: `inline`,
              allowShrink: !0,
              children: [
                (0, Y.jsx)(_, {
                  disabled: v === `private`,
                  tooltipContent: (0, Y.jsx)(s, {
                    id: `chatgptProjectSharing.linkRole`,
                    defaultMessage: `Shared links give chat-only access. Users can be upgraded to edit access after joining.`,
                    description: `Tooltip on project link access explaining that links grant chat-only permission and owners can upgrade individual members later`,
                  }),
                  children: (0, Y.jsx)(`span`, {
                    className: `truncate text-sm`,
                    children: (0, Y.jsx)(rt, { access: v, workspaceName: u }),
                  }),
                }),
                (0, Y.jsx)(fe, { className: `text-secondary` }),
              ],
            }),
            children: (0, Y.jsx)(f.RadioGroup, {
              value: v,
              onValueChange: (e) => {
                let t = w.find((t) => t.value === e);
                t != null &&
                  !o &&
                  !t.disabled &&
                  t.value !== v &&
                  d({ type: `access`, access: t.value });
              },
              children: w.map((e) =>
                (0, Y.jsx)(
                  f.RadioItem,
                  {
                    disabled: o || e.disabled,
                    icon: e.icon,
                    value: e.value,
                    variant: `chatgpt`,
                    children: (0, Y.jsx)(rt, { access: e.value, workspaceName: u }),
                  },
                  e.value,
                ),
              ),
            }),
          })
        : (0, Y.jsx)(_, {
            tooltipContent: (0, Y.jsx)(s, {
              id: `chatgptProjectSharing.ownerOnly`,
              defaultMessage: `Only the owner can change permissions`,
              description: `Help in a collaborator's project sharing dialog explaining why access and member roles cannot be changed`,
            }),
            children: (0, Y.jsx)(`span`, {
              className: `truncate text-sm select-none`,
              children: (0, Y.jsx)(rt, { access: v, workspaceName: u }),
            }),
          })),
      (t[21] = v),
      (t[22] = w),
      (t[23] = n),
      (t[24] = o),
      (t[25] = d),
      (t[26] = u),
      (t[27] = O))
    : (O = t[27]);
  let k;
  t[28] !== D || t[29] !== O
    ? ((k = (0, Y.jsxs)(`div`, { className: `flex min-h-9 items-center gap-2`, children: [D, O] })),
      (t[28] = D),
      (t[29] = O),
      (t[30] = k))
    : (k = t[30]);
  let A;
  t[31] !== ee.user_id || t[32] !== S || t[33] !== b
    ? ((A =
        ee.user_id.split(`__`)[0] === S
          ? (0, Y.jsx)(s, {
              id: `chatgptProjectSharing.currentUser`,
              defaultMessage: `{name} <secondary>(you)</secondary>`,
              description: `Member name in project sharing when this row represents the current user; name is their display name or email, and secondary marks the parenthetical annotation`,
              values: { name: b, secondary: mt },
            })
          : b),
      (t[31] = ee.user_id),
      (t[32] = S),
      (t[33] = b),
      (t[34] = A))
    : (A = t[34]);
  let j;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Y.jsx)(`span`, {
        className: `px-3 text-sm select-none`,
        children: (0, Y.jsx)(s, {
          id: `chatgptProjectSharing.owner`,
          defaultMessage: `Owner`,
          description: `Permission label beside the project creator in the sharing dialog`,
        }),
      })),
      (t[35] = j))
    : (j = t[35]);
  let M;
  t[36] !== b || t[37] !== A
    ? ((M = (0, Y.jsx)(i, { avatarLabel: b, label: A, size: `compact`, trailingContent: j })),
      (t[36] = b),
      (t[37] = A),
      (t[38] = M))
    : (M = t[38]);
  let N;
  if (
    t[39] !== n ||
    t[40] !== o ||
    t[41] !== y ||
    t[42] !== c ||
    t[43] !== S ||
    t[44] !== d ||
    t[45] !== m
  ) {
    let e;
    (t[47] !== n || t[48] !== o || t[49] !== y || t[50] !== c || t[51] !== S || t[52] !== d
      ? ((e = (e) => {
          if (e.type === 3 || e.type === 4) return null;
          let t = e.capabilities.can_write ? `edit` : `chat`,
            r = Xe(e),
            a = e.type === 1 && e.user_id.split(`__`)[0] === S,
            l = r;
          return (
            e.type === 2 && e.is_scim_managed
              ? (l = (0, Y.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-2`,
                  children: [
                    (0, Y.jsx)(`span`, { className: `truncate`, children: r }),
                    (0, Y.jsx)(V, {
                      className: `shrink-0`,
                      variant: `outline`,
                      children: (0, Y.jsx)(s, {
                        id: `chatgptProjectSharing.scimManaged`,
                        defaultMessage: `SCIM`,
                        description: `Badge beside a project sharing group managed by directory synchronization; SCIM is the standard for automated identity provisioning`,
                      }),
                    }),
                  ],
                }))
              : a
                ? (l = (0, Y.jsx)(s, {
                    id: `chatgptProjectSharing.currentUser`,
                    defaultMessage: `{name} <secondary>(you)</secondary>`,
                    description: `Member name in project sharing when this row represents the current user; name is their display name or email, and secondary marks the parenthetical annotation`,
                    values: { name: r, secondary: pt },
                  }))
                : e.type === 10 &&
                  (l = (0, Y.jsx)(`span`, {
                    className: `text-secondary`,
                    children: c
                      ? r
                      : (0, Y.jsx)(s, {
                          id: `chatgptProjectSharing.inviteSent`,
                          defaultMessage: `{email} (invite sent)`,
                          description: `Email row in a personal project's sharing dialog for a pending invitation; email is the invited address and the annotation indicates it has not yet been accepted`,
                          values: { email: r },
                        }),
                  })),
            (0, Y.jsx)(
              i,
              {
                avatarLabel: r,
                label: l,
                size: `compact`,
                trailingContent: n
                  ? (0, Y.jsx)(st, {
                      disabled: o,
                      editDisabled: y && t !== `edit`,
                      role: t,
                      onChange: (n) => {
                        n !== t && d({ type: `role`, subject: e, role: n });
                      },
                      onRemoveAccess: () => d({ type: `remove`, subject: e }),
                    })
                  : (0, Y.jsx)(`span`, {
                      className: `px-3 text-sm select-none`,
                      children: (0, Y.jsx)(nt, { role: t }),
                    }),
              },
              J(e),
            )
          );
        }),
        (t[47] = n),
        (t[48] = o),
        (t[49] = y),
        (t[50] = c),
        (t[51] = S),
        (t[52] = d),
        (t[53] = e))
      : (e = t[53]),
      (N = m.map(e)),
      (t[39] = n),
      (t[40] = o),
      (t[41] = y),
      (t[42] = c),
      (t[43] = S),
      (t[44] = d),
      (t[45] = m),
      (t[46] = N));
  } else N = t[46];
  let P;
  return (
    t[54] !== M || t[55] !== N || t[56] !== k
      ? ((P = (0, Y.jsxs)(`section`, {
          className: `flex flex-col gap-2`,
          children: [
            T,
            (0, Y.jsxs)(`div`, {
              className: `flex max-h-56 flex-col gap-1 overflow-y-auto overscroll-contain pb-1`,
              children: [k, M, N],
            }),
          ],
        })),
        (t[54] = M),
        (t[55] = N),
        (t[56] = k),
        (t[57] = P))
      : (P = t[57]),
    P
  );
}
function pt(e) {
  return (0, Y.jsx)(`span`, { className: `text-secondary`, children: e }, `current-user`);
}
function mt(e) {
  return (0, Y.jsx)(`span`, { className: `text-secondary`, children: e }, `current-user`);
}
var ht,
  Y,
  gt = e(() => {
    ((ht = K()), P(), re(), r(), ne(), L(), p(), G(), ot(), q(), dt(), (Y = H()));
  });
function _t(e) {
  "use forget";
  let t = (0, vt.c)(29),
    { action: n, onClose: r, onConfirm: i } = e,
    a;
  t[0] !== n.label || t[1] !== n.type
    ? ((a =
        n.type === `library`
          ? (0, X.jsx)(s, {
              id: `chatgptProjectSharing.confirmLibrary.title`,
              defaultMessage: `Share project?`,
              description: `Title of the confirmation shown before sharing a private project with Library source files`,
            })
          : (0, X.jsx)(s, {
              id: `chatgptProjectSharing.confirmRemove.title`,
              defaultMessage: `Remove {name} from this project?`,
              description: `Confirmation title before removing a collaborator or group from a project; name is their display name or email`,
              values: { name: n.label },
            })),
      (t[0] = n.label),
      (t[1] = n.type),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === n.type
    ? (o = t[4])
    : ((o =
        n.type === `library`
          ? (0, X.jsx)(s, {
              id: `chatgptProjectSharing.confirmLibrary.description`,
              defaultMessage: `Sharing removes Library files from this project's sources. The files remain in your Library, but shared projects cannot access them.`,
              description: `Warning before sharing a project: Library-backed files are detached from the project, not deleted from the user's Library`,
            })
          : (0, X.jsx)(s, {
              id: `chatgptProjectSharing.confirmRemove.description`,
              defaultMessage: `They will lose access to all content in this project`,
              description: `Warning explaining the effect of confirming removal of a project collaborator or group`,
            })),
      (t[3] = n.type),
      (t[4] = o));
  let c;
  t[5] !== r || t[6] !== i
    ? ((c = () => {
        (i(), r());
      }),
      (t[5] = r),
      (t[6] = i),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsx)(s, {
        id: `chatgptProjectSharing.confirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel a project sharing or collaborator removal confirmation without changing access`,
      })),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === r
    ? (u = t[10])
    : ((u = (0, X.jsx)(ge, {
        color: `secondary`,
        size: `dialogAction`,
        type: `button`,
        onClick: r,
        children: l,
      })),
      (t[9] = r),
      (t[10] = u));
  let d = n.type === `remove` ? `danger` : `primary`,
    f;
  t[11] === n.type
    ? (f = t[12])
    : ((f =
        n.type === `library`
          ? (0, X.jsx)(s, {
              id: `chatgptProjectSharing.confirmLibrary.confirm`,
              defaultMessage: `Share and remove`,
              description: `Button confirming sharing the project and detaching its Library source files`,
            })
          : (0, X.jsx)(s, {
              id: `chatgptProjectSharing.confirmRemove.confirm`,
              defaultMessage: `Remove`,
              description: `Button confirming removal of a collaborator or group from the project`,
            })),
      (t[11] = n.type),
      (t[12] = f));
  let p;
  t[13] !== d || t[14] !== f
    ? ((p = (0, X.jsx)(ge, { color: d, size: `dialogAction`, type: `submit`, children: f })),
      (t[13] = d),
      (t[14] = f),
      (t[15] = p))
    : (p = t[15]);
  let m;
  t[16] !== u || t[17] !== p
    ? ((m = (0, X.jsxs)(X.Fragment, { children: [u, p] })), (t[16] = u), (t[17] = p), (t[18] = m))
    : (m = t[18]);
  let h;
  t[19] !== n.fileNames || t[20] !== n.type
    ? ((h =
        n.type === `library`
          ? (0, X.jsx)(R, {
              children: (0, X.jsx)(`p`, {
                className: `text-sm text-secondary`,
                children: (0, X.jsx)(z, { value: n.fileNames }),
              }),
            })
          : null),
      (t[19] = n.fileNames),
      (t[20] = n.type),
      (t[21] = h))
    : (h = t[21]);
  let g;
  return (
    t[22] !== r || t[23] !== a || t[24] !== h || t[25] !== o || t[26] !== c || t[27] !== m
      ? ((g = (0, X.jsx)(Be, {
          title: a,
          subtitle: o,
          onClose: r,
          onSubmit: c,
          footer: m,
          children: h,
        })),
        (t[22] = r),
        (t[23] = a),
        (t[24] = h),
        (t[25] = o),
        (t[26] = c),
        (t[27] = m),
        (t[28] = g))
      : (g = t[28]),
    g
  );
}
var vt,
  X,
  yt = e(() => {
    ((vt = K()), P(), r(), ue(), N(), (X = H()));
  });
async function bt({ scope: e, account: t, projectId: n, change: r }) {
  let i = t.id;
  if (e.get(g) !== i) return `cancelled`;
  let a = t.structure === `workspace`,
    [o, s] = await Promise.all([
      e.get(pe).getProject(n),
      a
        ? l.safeGet(`/accounts/{account_id}/settings`, { parameters: { path: { account_id: i } } })
        : void 0,
    ]);
  if (e.get(g) !== i) return `cancelled`;
  (v(e.queryClient, o), s != null && e.queryClient.setQueryData([`accounts`, `settings`, i], s));
  let c = Ye(o, t, s);
  if (
    !c.canOpen ||
    (r.type === `invite` ? !c.canInvite : !c.canManage) ||
    (r.type === `access` && r.access === `workspace_link` && !c.canShareWorkspaceLink) ||
    (r.type === `access` && r.access === `link` && a)
  )
    return `permission`;
  let u = o.gizmo.sharing?.subjects ?? [],
    d = u,
    f = { project_id: n },
    p = a ? i : void 0;
  if (r.type === `access`)
    ((d = u.filter((e) => e.type !== 3 && e.type !== 4)),
      r.access !== `private` &&
        d.push({ type: r.access === `link` ? 4 : 3, capabilities: Ze.chat }),
      (f.add_or_replace = [
        {
          type: r.access,
          capabilities: r.access === `private` ? { ...Ze.chat, can_view_config: !1 } : Ze.chat,
        },
      ]));
  else if (r.type === `invite`) {
    let e = new Set(u.map(J)),
      t = r.subjects.filter((t) => !e.has(J(t)));
    ((d = [...u, ...t]), (f.add_or_replace = t.map((e) => Ke(e, p))));
  } else {
    let e = J(r.subject),
      t = u.find((t) => J(t) === e);
    if (t == null) return `saved`;
    if (r.type === `remove`) ((d = u.filter((t) => J(t) !== e)), (f.remove = [Ke(t, p)]));
    else {
      let n = { ...t, capabilities: Ze[r.role] };
      ((d = u.map((t) => (J(t) === e ? n : t))), (f.add_or_replace = [Ke(n, p)]));
    }
  }
  if (o.has_tpp_conversation && Je(u, d)) return `work`;
  let m = o.files.flatMap((e) =>
      e.file_response_type === `full_file_response` && e.library_file_id
        ? [e.name || e.file_id]
        : [],
    ),
    h = o.gizmo.share_recipient === `private` && u.length === 0 && d.length > 0 && m.length > 0;
  if (
    (r.type === `remove` || h) &&
    (!(await new Promise((t) => {
      te(e, _t, {
        action:
          r.type === `remove`
            ? { type: `remove`, label: Xe(r.subject) }
            : { type: `library`, fileNames: m },
        onConfirm: () => t(!0),
        onClose: () => t(!1),
      });
    })) ||
      e.get(g) !== i)
  )
    return `cancelled`;
  let _ = await l.safePost(`/projects/share`, { requestBody: f });
  if (e.get(g) !== i) return `cancelled`;
  if (_.error != null) return `permission`;
  let y = _.resource ?? (await e.get(pe).getProject(n));
  return e.get(g) === i
    ? (v(e.queryClient, y), Ee(e, { flatConversationHistory: !1, project: y }), `saved`)
    : `cancelled`;
}
var xt = e(() => {
  (E(), F(), O(), be(), I(), oe(), yt(), q());
});
function St(e) {
  "use forget";
  let t = (0, Ct.c)(5),
    { isWorkspace: n } = e,
    r = Ne(`2821958399`);
  if (n) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e = (0, Z.jsx)(`p`, {
            className: `text-xs text-secondary select-none`,
            children: r
              ? (0, Z.jsx)(s, {
                  id: `chatgptProjectSharing.workspaceDisclaimer`,
                  defaultMessage: `All project content is visible to collaborators. To protect personal data, shared projects disable personal memory.`,
                  description: `Privacy notice in the workspace project sharing footer when shared-project Google Drive sync is enabled; collaborators see project contents, while personal memory is disabled`,
                })
              : (0, Z.jsx)(s, {
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
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(je, { className: `text-secondary` })), (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(`p`, {
        className: `text-xs font-medium text-default`,
        children: (0, Z.jsx)(s, {
          id: `chatgptProjectSharing.personalDisclaimerTitle`,
          defaultMessage: `This project may include personal information`,
          description: `Title of the privacy notice in a personal project's sharing dialog, cautioning the owner before inviting collaborators`,
        }),
      })),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Z.jsxs)(`aside`, {
          className: `flex items-center gap-3 rounded-xl bg-background-secondary-soft-alpha p-3 select-none`,
          children: [
            i,
            (0, Z.jsxs)(`div`, {
              className: `flex flex-col`,
              children: [
                a,
                (0, Z.jsx)(`p`, {
                  className: `text-xs text-secondary`,
                  children: (0, Z.jsx)(s, {
                    id: `chatgptProjectSharing.personalDisclaimer`,
                    defaultMessage: `All project contents are visible to collaborators. Personal memories are disabled for shared projects.`,
                    description: `Body of the privacy notice in a personal project's sharing dialog explaining content visibility and the exclusion of personal memories`,
                  }),
                }),
              ],
            }),
          ],
        })),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var Ct,
  Z,
  wt = e(() => {
    ((Ct = K()), P(), L(), ae(), (Z = H()));
  });
function Tt(e) {
  "use forget";
  let t = (0, kt.c)(75),
    {
      allowScimGroups: n,
      canListWorkspaceMembers: r,
      disabled: i,
      isWorkspace: a,
      portalContainer: o,
      project: c,
      role: l,
      selected: u,
      onRoleChange: d,
      onChange: f,
    } = e,
    p = w(),
    [m, h] = (0, At.useState)(``),
    { data: g, isFetching: _, isError: v } = M(r && !i ? m : ``),
    { data: y, isFetching: ee, isError: b } = ze(r && !i ? m : ``),
    x,
    S;
  if (
    t[0] !== c.gizmo.author.user_email ||
    t[1] !== c.gizmo.author.user_id ||
    t[2] !== c.gizmo.sharing?.subjects ||
    t[3] !== u
  ) {
    let e = [...(c.gizmo.sharing?.subjects ?? []), ...u];
    x = new Set(e.map(J));
    let n;
    (t[6] === c.gizmo.author.user_id
      ? (n = t[7])
      : ((n = c.gizmo.author.user_id.split(`__`)), (t[6] = c.gizmo.author.user_id), (t[7] = n)),
      x.add(`user:${n[0]}`),
      (S = new Set([c.gizmo.author.user_email, ...e.flatMap(Ot)].flatMap(Dt))),
      (t[0] = c.gizmo.author.user_email),
      (t[1] = c.gizmo.author.user_id),
      (t[2] = c.gizmo.sharing?.subjects),
      (t[3] = u),
      (t[4] = x),
      (t[5] = S));
  } else ((x = t[4]), (S = t[5]));
  let C = S,
    T,
    E,
    D,
    O;
  if (
    t[8] !== n ||
    t[9] !== r ||
    t[10] !== C ||
    t[11] !== x ||
    t[12] !== y ||
    t[13] !== p ||
    t[14] !== m ||
    t[15] !== l ||
    t[16] !== g
  ) {
    if (((O = []), (T = Ze[l]), r)) {
      for (let e of g ?? [])
        x.has(`user:${e.account_user_id.split(`__`)[0]}`) ||
          (e.email != null && C.has(e.email.trim().toLowerCase())) ||
          O.push({
            id: `user:${e.account_user_id.split(`__`)[0]}`,
            label: e.name || e.email || e.account_user_id,
            secondaryLabel: e.email ?? void 0,
            subject: {
              type: 1,
              user_id: e.account_user_id,
              user_name: e.name ?? null,
              user_email: e.email ?? null,
              avatar_url: null,
              capabilities: T,
            },
          });
      for (let e of y ?? [])
        x.has(`group:${e.id}`) ||
          (!n && e.is_scim_managed) ||
          O.push({
            id: `group:${e.id}`,
            label: e.name,
            subject: {
              type: 2,
              group_id: e.id,
              group_name: e.name,
              is_scim_managed: e.is_scim_managed === !0,
              capabilities: T,
            },
          });
    }
    if (
      ((E = m.trim().toLowerCase()),
      (D = Re().safeParse(E).success),
      D &&
        !C.has(E) &&
        !O.some((e) => e.subject.type === 1 && e.subject.user_email?.toLowerCase() === E))
    ) {
      let e;
      (t[21] !== T || t[22] !== E
        ? ((e = { type: 10, user_email: E, capabilities: T }),
          (t[21] = T),
          (t[22] = E),
          (t[23] = e))
        : (e = t[23]),
        O.push({
          id: `email:${E}`,
          chipLabel: E,
          label: p.formatMessage(
            {
              id: `chatgptProjectSharing.invite.emailOption`,
              defaultMessage: `Invite "{email}"`,
              description: `Option in the project sharing picker for adding the typed email to an invitation; email is the exact address entered by the user`,
            },
            { email: E },
          ),
          subject: e,
        }));
    }
    ((t[8] = n),
      (t[9] = r),
      (t[10] = C),
      (t[11] = x),
      (t[12] = y),
      (t[13] = p),
      (t[14] = m),
      (t[15] = l),
      (t[16] = g),
      (t[17] = T),
      (t[18] = E),
      (t[19] = D),
      (t[20] = O));
  } else ((T = t[17]), (E = t[18]), (D = t[19]), (O = t[20]));
  let k;
  if (D && C.has(E)) {
    let e;
    (t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, jt.jsx)(s, {
          id: `chatgptProjectSharing.invite.alreadyAdded`,
          defaultMessage: `This person already has access or is selected`,
          description: `Message in the project sharing picker when an entered email belongs to the owner, an existing member, or a selected invitee`,
        })),
        (t[24] = e))
      : (e = t[24]),
      (k = e));
  } else if (a) {
    let e;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, jt.jsx)(s, {
          id: `chatgptProjectSharing.invite.noWorkspaceMatches`,
          defaultMessage: `Enter a workspace member's email to invite them to the project`,
          description: `Empty search result in workspace project sharing; only existing members of this workspace can be added by email`,
        })),
        (t[25] = e))
      : (e = t[25]),
      (k = e));
  } else {
    let e;
    (t[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, jt.jsx)(s, {
          id: `chatgptProjectSharing.invite.noMatches`,
          defaultMessage: `Enter an email address to invite someone`,
          description: `Empty result message in the project sharing picker, guiding users to type a complete email address`,
        })),
        (t[26] = e))
      : (e = t[26]),
      (k = e));
  }
  let A;
  t[27] === p
    ? (A = t[28])
    : ((A = p.formatMessage({
        id: `chatgptProjectSharing.invite.label`,
        defaultMessage: `Invite people or groups`,
        description: `Accessible label for the input used to find workspace members or enter email addresses in the project sharing dialog`,
      })),
      (t[27] = p),
      (t[28] = A));
  let j;
  t[29] !== r || t[30] !== p
    ? ((j = r
        ? p.formatMessage({
            id: `chatgptProjectSharing.invite.workspacePlaceholder`,
            defaultMessage: `Search people, groups, or enter an email`,
            description: `Placeholder in the project sharing picker for workspaces that allow member search; users may search by name or group, or type an email address`,
          })
        : p.formatMessage({
            id: `chatgptProjectSharing.invite.emailPlaceholder`,
            defaultMessage: `Email, separated by commas`,
            description: `Placeholder in the project sharing picker for personal accounts or workspaces without member search; users can enter one email or multiple addresses separated by commas`,
          })),
      (t[29] = r),
      (t[30] = p),
      (t[31] = j))
    : (j = t[31]);
  let N = k,
    P;
  t[32] === p
    ? (P = t[33])
    : ((P = p.formatMessage({
        id: `chatgptProjectSharing.invite.loading`,
        defaultMessage: `Searching workspace members`,
        description: `Accessible status while the project sharing picker searches workspace members and groups`,
      })),
      (t[32] = p),
      (t[33] = P));
  let te = r && (_ || ee) && O.length === 0 ? void 0 : O,
    F;
  t[34] === u ? (F = t[35]) : ((F = u.map(Et)), (t[34] = u), (t[35] = F));
  let I;
  t[36] === p
    ? (I = t[37])
    : ((I = (e) =>
        p.formatMessage(
          {
            id: `chatgptProjectSharing.invite.removeSelection`,
            defaultMessage: `Remove {name} from the invitation`,
            description: `Accessible label on a selected project invitee's remove button; name is the person's or group's display name or email`,
          },
          { name: e.label },
        )),
      (t[36] = p),
      (t[37] = I));
  let L;
  t[38] !== i || t[39] !== d || t[40] !== m || t[41] !== l || t[42] !== u.length
    ? ((L =
        u.length > 0 && m.trim() === ``
          ? (0, jt.jsx)(st, { disabled: i, role: l, onChange: d })
          : null),
      (t[38] = i),
      (t[39] = d),
      (t[40] = m),
      (t[41] = l),
      (t[42] = u.length),
      (t[43] = L))
    : (L = t[43]);
  let ne;
  t[44] !== T || t[45] !== C || t[46] !== f || t[47] !== u
    ? ((ne = (e) => {
        if (!e.includes(`,`)) {
          h(e);
          return;
        }
        let t = [...u],
          n = new Set(C),
          r = [];
        for (let i of e.split(`,`)) {
          let e = i.trim().toLowerCase();
          e !== `` &&
            (Re().safeParse(e).success
              ? n.has(e) || (n.add(e), t.push({ type: 10, user_email: e, capabilities: T }))
              : r.push(i.trim()));
        }
        (f(t), h(r.join(`, `)));
      }),
      (t[44] = T),
      (t[45] = C),
      (t[46] = f),
      (t[47] = u),
      (t[48] = ne))
    : (ne = t[48]);
  let R, re;
  t[49] !== f || t[50] !== u
    ? ((R = (e) => f(u.filter((t) => J(t) !== e.id))),
      (re = (e) => {
        (f([...u, e.subject]), h(``));
      }),
      (t[49] = f),
      (t[50] = u),
      (t[51] = R),
      (t[52] = re))
    : ((R = t[51]), (re = t[52]));
  let z;
  t[53] !== i ||
  t[54] !== k ||
  t[55] !== o ||
  t[56] !== m ||
  t[57] !== ne ||
  t[58] !== R ||
  t[59] !== re ||
  t[60] !== A ||
  t[61] !== j ||
  t[62] !== P ||
  t[63] !== te ||
  t[64] !== F ||
  t[65] !== I ||
  t[66] !== L
    ? ((z = (0, jt.jsx)(Pe, {
        ariaLabel: A,
        placeholder: j,
        disabled: i,
        emptyMessage: N,
        loadingLabel: P,
        options: te,
        portalContainer: o,
        query: m,
        selectedOptions: F,
        getRemoveLabel: I,
        trailingContent: L,
        onQueryChange: ne,
        onRemoveOption: R,
        onSelectOption: re,
      })),
      (t[53] = i),
      (t[54] = k),
      (t[55] = o),
      (t[56] = m),
      (t[57] = ne),
      (t[58] = R),
      (t[59] = re),
      (t[60] = A),
      (t[61] = j),
      (t[62] = P),
      (t[63] = te),
      (t[64] = F),
      (t[65] = I),
      (t[66] = L),
      (t[67] = z))
    : (z = t[67]);
  let ie;
  t[68] !== r || t[69] !== b || t[70] !== v
    ? ((ie =
        r && (v || b)
          ? (0, jt.jsx)(`p`, {
              className: `text-sm text-secondary`,
              role: `status`,
              children: (0, jt.jsx)(s, {
                id: `chatgptProjectSharing.invite.searchError`,
                defaultMessage: `Workspace search is unavailable. You can still enter an email address.`,
                description: `Message when searching workspace members or groups fails in project sharing; inviting an existing workspace member by email is still supported`,
              }),
            })
          : null),
      (t[68] = r),
      (t[69] = b),
      (t[70] = v),
      (t[71] = ie))
    : (ie = t[71]);
  let ae;
  return (
    t[72] !== z || t[73] !== ie
      ? ((ae = (0, jt.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [z, ie] })),
        (t[72] = z),
        (t[73] = ie),
        (t[74] = ae))
      : (ae = t[74]),
    ae
  );
}
function Et(e) {
  return { id: J(e), label: Xe(e), subject: e };
}
function Dt(e) {
  return e == null ? [] : [e.trim().toLowerCase()];
}
function Ot(e) {
  return e.type === 1 || e.type === 10 ? [e.user_email] : [];
}
var kt,
  At,
  jt,
  Mt = e(() => {
    ((kt = K()), (At = t(a(), 1)), P(), Ae(), B(), Se(), q(), dt(), (jt = H()));
  });
function Nt(e) {
  "use forget";
  let t = (0, Pt.c)(10),
    { project: r, disabled: i } = e,
    a = n(ie),
    o = w(),
    s = r.gizmo.display.name,
    c;
  t[0] === r ? (c = t[1]) : ((c = Ge(r)), (t[0] = r), (t[1] = c));
  let l = encodeURIComponent(c),
    u = encodeURIComponent(s),
    d = `https://www.linkedin.com/shareArticle?url=${l}&text=${u}`,
    f;
  return (
    t[2] !== i || t[3] !== o || t[4] !== s || t[5] !== a || t[6] !== d || t[7] !== u || t[8] !== l
      ? ((f = (0, Ft.jsx)(Ft.Fragment, {
          children: [
            {
              name: `LinkedIn`,
              icon: et,
              href: d,
              eventName: `chatgpt_share_project_linkedin_social_clicked`,
            },
            {
              name: `Reddit`,
              icon: _e,
              href: `https://www.reddit.com/submit?url=${l}&title=${u}`,
              eventName: `chatgpt_share_project_reddit_social_clicked`,
            },
            {
              name: `X`,
              icon: tt,
              href: `https://twitter.com/intent/tweet?url=${l}&text=${u}`,
              eventName: `chatgpt_share_project_x_social_clicked`,
            },
          ].map((e) => {
            let { name: t, icon: n, href: r, eventName: c } = e,
              l = o.formatMessage(
                {
                  id: `chatgptProjectSharing.socialShare`,
                  defaultMessage: `Share on {serviceName}`,
                  description: `Accessible label and tooltip for a personal project sharing button that opens an external social site's post composer; serviceName is LinkedIn, Reddit, or X`,
                },
                { serviceName: t },
              );
            return (0, Ft.jsx)(
              _,
              {
                tooltipContent: l,
                children: (0, Ft.jsx)(ge, {
                  "aria-label": l,
                  color: `secondary`,
                  disabled: i,
                  radius: `full`,
                  size: `dialogAction`,
                  type: `button`,
                  uniform: !0,
                  onClick: (e) => {
                    (a.get(Ce).logEventWithStatsig?.(c, { projectTitle: s }),
                      S({
                        event: e,
                        href: r,
                        initiator: `open_in_browser_bridge`,
                        openTarget: `external-browser`,
                      }));
                  },
                  children: (0, Ft.jsx)(n, { "aria-hidden": `true` }),
                }),
              },
              t,
            );
          }),
        })),
        (t[2] = i),
        (t[3] = o),
        (t[4] = s),
        (t[5] = a),
        (t[6] = d),
        (t[7] = u),
        (t[8] = l),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
var Pt,
  Ft,
  It = e(() => {
    ((Pt = K()), C(), P(), r(), b(), L(), p(), Qe(), $e(), D(), Te(), q(), (Ft = H()));
  });
function Lt(e) {
  "use forget";
  let t = (0, Vt.c)(44),
    { accountId: r, disabled: i, isProjectReady: a, project: o, onClose: c } = e,
    l = n(ie),
    { data: u } = Le(),
    d;
  t[0] === u
    ? (d = t[1])
    : ((d = u?.structure === `workspace` ? u.account_user_id : u?.account_user_id.split(`__`)[0]),
      (t[0] = u),
      (t[1] = d));
  let f = d,
    p;
  t[2] !== r || t[3] !== o.gizmo.id
    ? ((p = [`chatgpt-project-share-work-conversations`, r, o.gizmo.id]),
      (t[2] = r),
      (t[3] = o.gizmo.id),
      (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] !== r || t[6] !== o.gizmo.id || t[7] !== l
    ? ((m = async (e) => {
        let { signal: t } = e,
          n = [],
          i = `0`;
        do {
          if ((t.throwIfAborted(), l.get(g) !== r)) throw new T();
          let e = await l.get(pe).listProjectConversations({
            cursor: i,
            limit: 50,
            ownedOnly: !1,
            projectId: o.gizmo.id,
            signal: t,
          });
          if ((t.throwIfAborted(), e.items.some(Bt))) return null;
          (n.push(...e.items.filter(zt)), (i = e.cursor));
        } while (i);
        return (0, Ht.default)(n, `id`);
      }),
      (t[5] = r),
      (t[6] = o.gizmo.id),
      (t[7] = l),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== a || t[10] !== p || t[11] !== m
    ? ((h = { queryKey: p, enabled: a, staleTime: 0, gcTime: 0, retry: !1, queryFn: m }),
      (t[9] = a),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h))
    : (h = t[12]);
  let { data: _, isFetching: v, isError: b } = j(h),
    x;
  t[13] !== r || t[14] !== i || t[15] !== c || t[16] !== l
    ? ((x = function (e, t) {
        if (!(e.button !== 0 && e.button !== 1)) {
          if (i || l.get(g) !== r) {
            e.preventDefault();
            return;
          }
          e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey
            ? c()
            : t != null &&
              S({
                event: e,
                href: t,
                initiator: `open_in_browser_bridge`,
                openTarget: `external-browser`,
              });
        }
      }),
      (t[13] = r),
      (t[14] = i),
      (t[15] = c),
      (t[16] = l),
      (t[17] = x))
    : (x = t[17]);
  let C = x,
    w;
  if (a && !v && !b && _ != null && _.length > 0) {
    let e;
    t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(s, {
          id: `chatgptProjectSharing.workWarning.removeListed`,
          defaultMessage: `Remove all Work conversations from this project to share it:`,
          description: `Instructions above a list of linked Work conversations that prevent sharing a project; the owner must remove all Work conversations, including any not listed`,
        })),
        (t[18] = e))
      : (e = t[18]);
    let n;
    if (
      t[19] !== f ||
      t[20] !== _ ||
      t[21] !== i ||
      t[22] !== C ||
      t[23] !== o.gizmo.id ||
      t[24] !== o.gizmo.short_url
    ) {
      let e;
      (t[26] !== f ||
      t[27] !== i ||
      t[28] !== C ||
      t[29] !== o.gizmo.id ||
      t[30] !== o.gizmo.short_url
        ? ((e = (e) => {
            let t =
                e.title?.trim() ||
                (0, Q.jsx)(s, {
                  id: `chatgptProjectSharing.workWarning.untitled`,
                  defaultMessage: `Untitled conversation`,
                  description: `Link label for a Work conversation that blocks project sharing when its title is empty or unavailable`,
                }),
              n = `owner` in e ? e.owner.user_id : f,
              r = null;
            if (n != null && n !== f) {
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
                    ? (0, Q.jsx)(y, {
                        className: `cursor-interaction text-default underline underline-offset-2`,
                        "aria-disabled": i,
                        to: ce(e.id, { gizmoId: o.gizmo.id }),
                        onClick: (e) => C(e, null),
                        onAuxClick: (e) => C(e, null),
                        children: t,
                      })
                    : (0, Q.jsx)(he, {
                        className: `cursor-interaction text-default underline underline-offset-2`,
                        "aria-disabled": i,
                        href: a,
                        initiator: `open_in_browser_bridge`,
                        onClick: (e) => C(e, a),
                        onAuxClick: (e) => C(e, a),
                        onContextMenu: Rt,
                        children: t,
                      }),
              },
              e.id,
            );
          }),
          (t[26] = f),
          (t[27] = i),
          (t[28] = C),
          (t[29] = o.gizmo.id),
          (t[30] = o.gizmo.short_url),
          (t[31] = e))
        : (e = t[31]),
        (n = _.slice(0, 5).map(e)),
        (t[19] = f),
        (t[20] = _),
        (t[21] = i),
        (t[22] = C),
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
    t[34] === _.length
      ? (a = t[35])
      : ((a =
          _.length > 5
            ? (0, Q.jsx)(`div`, {
                className: `mt-1 ps-5`,
                children: (0, Q.jsx)(s, {
                  id: `chatgptProjectSharing.workWarning.remaining`,
                  defaultMessage: `{remainingCount, plural, one {And # more} other {And # more}}`,
                  description: `Number of additional Work conversations preventing project sharing beyond the five linked conversations shown above`,
                  values: { remainingCount: _.length - 5 },
                }),
              })
            : null),
        (t[34] = _.length),
        (t[35] = a));
    let c;
    (t[36] !== r || t[37] !== a
      ? ((c = (0, Q.jsxs)(Q.Fragment, { children: [e, r, a] })),
        (t[36] = r),
        (t[37] = a),
        (t[38] = c))
      : (c = t[38]),
      (w = c));
  } else {
    let e;
    (t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(s, {
          id: `chatgptProjectSharing.workWarning.removeAll`,
          defaultMessage: `Remove all Work conversations from this project to share it`,
          description: `Instructions when Work conversations block project sharing and the linked conversation list is not available, including while it loads`,
        })),
        (t[39] = e))
      : (e = t[39]),
      (w = e));
  }
  let E;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(s, {
        id: `chatgptProjectSharing.workWarning.title`,
        defaultMessage: `Projects with Work conversations can’t be shared`,
        description: `Warning title in project sharing when the project contains Work conversations, which prevent granting additional access`,
      })),
      (t[40] = E))
    : (E = t[40]);
  let D;
  return (
    t[41] !== w || t[42] !== v
      ? ((D = (0, Q.jsx)(Ve, {
          ariaLive: `polite`,
          Icon: ee,
          layout: `verticalIcon`,
          variant: `callout`,
          title: E,
          content: (0, Q.jsx)(`div`, { "aria-atomic": `true`, "aria-busy": v, children: w }),
        })),
        (t[41] = w),
        (t[42] = v),
        (t[43] = D))
      : (D = t[43]),
    D
  );
}
function Rt(e) {
  return e.preventDefault();
}
function zt(e) {
  return e.conversation_origin === `tpp`;
}
function Bt(e) {
  return !(`owner` in e);
}
var Vt,
  Ht,
  Q,
  Ut = e(() => {
    ((Vt = K()),
      Me(),
      (Ht = t(k(), 1)),
      C(),
      P(),
      d(),
      E(),
      ke(),
      o(),
      W(),
      b(),
      L(),
      Te(),
      be(),
      De(),
      (Q = H()));
  });
function Wt(e) {
  "use forget";
  let t = (0, Kt.c)(123),
    { accountId: r, projectId: i, onClose: a } = e,
    o = n(ie),
    l = w(),
    d = c(g),
    { data: f } = Le(),
    p = d === r && f?.id === r,
    h = f?.structure === `workspace`,
    _ = p && h,
    v;
  t[0] === _ ? (v = t[1]) : ((v = { enabled: _ }), (t[0] = _), (t[1] = v));
  let { data: y, isError: ee, refetch: b } = x(se, r, v),
    S;
  t[2] === i ? (S = t[3]) : ((S = u(i)), (t[2] = i), (t[3] = S));
  let C;
  t[4] !== i || t[5] !== o
    ? ((C = () => o.get(pe).getProject(i)), (t[4] = i), (t[5] = o), (t[6] = C))
    : (C = t[6]);
  let T;
  t[7] !== p || t[8] !== S || t[9] !== C
    ? ((T = { enabled: p, queryKey: S, queryFn: C, staleTime: 0, refetchOnMount: `always` }),
      (t[7] = p),
      (t[8] = S),
      (t[9] = C),
      (t[10] = T))
    : (T = t[10]);
  let { data: E, isFetching: D, isError: O, refetch: k } = j(T),
    M = ee ? void 0 : y,
    N;
  t[11] !== f || t[12] !== E || t[13] !== M
    ? ((N = Ye(E, f, M)), (t[11] = f), (t[12] = E), (t[13] = M), (t[14] = N))
    : (N = t[14]);
  let P = N,
    te;
  t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((te = []), (t[15] = te)) : (te = t[15]);
  let [F, I] = (0, qt.useState)(te),
    [L, ne] = (0, qt.useState)(`edit`),
    [R, re] = (0, qt.useState)(null),
    [z, ae] = (0, qt.useState)(!1),
    oe = (0, qt.useRef)(!1),
    [B, ce] = (0, qt.useState)(`idle`),
    [ue, de] = (0, qt.useState)(null),
    fe = O || (h && ee),
    V = !p || z || D || fe || !P.canOpen,
    H;
  t[16] !== h || t[17] !== F
    ? ((H = h && F.filter(Gt).length > 5), (t[16] = h), (t[17] = F), (t[18] = H))
    : (H = t[18]);
  let me = H,
    U = E?.has_tpp_conversation === !0,
    W = P.canInvite && F.length > 0,
    G = z || B === `copying`,
    he = h || W || !U,
    K;
  t[19] !== f?.name || t[20] !== l
    ? ((K =
        f?.name ||
        l.formatMessage({
          id: `chatgptProjectSharing.workspaceFallback`,
          defaultMessage: `your workspace`,
          description: `Fallback workspace name in the project sharing audience selector when the workspace's display name is unavailable`,
        })),
      (t[19] = f?.name),
      (t[20] = l),
      (t[21] = K))
    : (K = t[21]);
  let _e = K,
    ye;
  t[22] !== f || t[23] !== r || t[24] !== V || t[25] !== i || t[26] !== o
    ? ((ye = function (e) {
        return V || oe.current || f == null
          ? Promise.resolve(!1)
          : ((oe.current = !0),
            ae(!0),
            de(null),
            bt({ scope: o, account: f, projectId: i, change: e })
              .then((e) => (e === `saved` ? (ce(`idle`), !0) : (e !== `cancelled` && de(e), !1)))
              .catch(() => (o.get(g) === r && de(`save`), !1))
              .finally(() => {
                ((oe.current = !1), ae(!1));
              }));
      }),
      (t[22] = f),
      (t[23] = r),
      (t[24] = V),
      (t[25] = i),
      (t[26] = o),
      (t[27] = ye))
    : (ye = t[27]);
  let be = ye,
    Se;
  t[28] !== r ||
  t[29] !== W ||
  t[30] !== B ||
  t[31] !== V ||
  t[32] !== U ||
  t[33] !== E ||
  t[34] !== L ||
  t[35] !== be ||
  t[36] !== o ||
  t[37] !== F ||
  t[38] !== me
    ? ((Se = async function () {
        if (!(V || U || E == null || o.get(g) !== r)) {
          if (W) {
            if (me) return;
            (await be({
              type: `invite`,
              subjects: F.map((e) => ({ ...e, capabilities: Ze[L] })),
            })) && I([]);
            return;
          }
          if (B !== `copying`) {
            (ce(`copying`), de(null));
            try {
              (await xe.clipboard.writeText(Ge(E)), ce(`copied`));
            } catch {
              (ce(`idle`), de(`copy`));
            }
          }
        }
      }),
      (t[28] = r),
      (t[29] = W),
      (t[30] = B),
      (t[31] = V),
      (t[32] = U),
      (t[33] = E),
      (t[34] = L),
      (t[35] = be),
      (t[36] = o),
      (t[37] = F),
      (t[38] = me),
      (t[39] = Se))
    : (Se = t[39]);
  let Ce = Se,
    we;
  if (W) {
    let e;
    (t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(s, {
          id: `chatgptProjectSharing.invite.submit`,
          defaultMessage: `Invite`,
          description: `Button that grants project access to the selected people or groups with the selected permission`,
        })),
        (t[40] = e))
      : (e = t[40]),
      (we = e));
  } else if (B === `copied`) {
    let e;
    (t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(s, {
          id: `chatgptProjectSharing.copied`,
          defaultMessage: `Copied`,
          description: `Confirmation on the project sharing copy button after its link was copied to the clipboard`,
        })),
        (t[41] = e))
      : (e = t[41]),
      (we = e));
  } else {
    let e;
    (t[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(s, {
          id: `chatgptProjectSharing.copyLink`,
          defaultMessage: `Copy link`,
          description: `Button that copies a project link without changing access; only the selected audience can join`,
        })),
        (t[42] = e))
      : (e = t[42]),
      (we = e));
  }
  let Te;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = {
        permission: (0, $.jsx)(s, {
          id: `chatgptProjectSharing.permissionError`,
          defaultMessage: `This sharing change is not allowed. Check your project and workspace permissions.`,
          description: `Error when project sharing is denied by permissions, workspace policy, or server sharing restrictions; no access change is shown as successful`,
        }),
        work: (0, $.jsx)(s, {
          id: `chatgptProjectSharing.workError`,
          defaultMessage: `Remove all Work conversations from this project before sharing it`,
          description: `Error when a fresh check finds Work conversations and blocks granting additional project access`,
        }),
        copy: (0, $.jsx)(s, {
          id: `chatgptProjectSharing.copyError`,
          defaultMessage: `Could not copy the project link. Try again`,
          description: `Error when copying the project link to the host clipboard fails; the dialog remains open for retry`,
        }),
        save: (0, $.jsx)(s, {
          id: `chatgptProjectSharing.saveError`,
          defaultMessage: `Could not update project sharing. Try again`,
          description: `Error when saving project sharing fails; existing access remains displayed and selected invitees are preserved for retry`,
        }),
      }),
      (t[43] = Te))
    : (Te = t[43]);
  let Ee = Te;
  if (!p) return null;
  let De;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = {
        "aria-describedby": void 0,
        onOpenAutoFocus: (e) => {
          e.currentTarget instanceof HTMLElement && re(e.currentTarget);
        },
      }),
      (t[44] = De))
    : (De = t[44]);
  let ke = !G,
    Ae;
  t[45] !== G || t[46] !== a
    ? ((Ae = (e) => {
        !e && !G && a();
      }),
      (t[45] = G),
      (t[46] = a),
      (t[47] = Ae))
    : (Ae = t[47]);
  let je;
  t[48] === Ce
    ? (je = t[49])
    : ((je = (e) => {
        (e.preventDefault(), Ce());
      }),
      (t[48] = Ce),
      (t[49] = je));
  let Me;
  t[50] === E
    ? (Me = t[51])
    : ((Me = (0, $.jsx)(`header`, {
        className: `flex min-h-13 shrink-0 items-center py-2 ps-4 pe-13 select-none pointer-coarse:min-h-14`,
        children: (0, $.jsx)(Oe, {
          className: `truncate text-heading-sm leading-7 font-normal text-default`,
          children:
            E == null
              ? (0, $.jsx)(s, {
                  id: `chatgptProjectSharing.title`,
                  defaultMessage: `Share project`,
                  description: `Title of the dialog for sharing a ChatGPT project and managing its collaborators`,
                })
              : (0, $.jsx)(s, {
                  id: `chatgptProjectSharing.namedTitle`,
                  defaultMessage: `Share {projectName}`,
                  description: `Title of the project sharing dialog; projectName is the name of the project whose access is being managed`,
                  values: { projectName: E.gizmo.display.name },
                }),
        }),
      })),
      (t[50] = E),
      (t[51] = Me));
  let Ne = !he && `pb-4`,
    Pe;
  t[52] === Ne
    ? (Pe = t[53])
    : ((Pe = A(`flex min-h-0 flex-col gap-4 overflow-y-auto px-4 pt-2`, Ne)),
      (t[52] = Ne),
      (t[53] = Pe));
  let Ie;
  t[54] !== h || t[55] !== fe || t[56] !== k || t[57] !== b
    ? ((Ie = fe
        ? (0, $.jsx)(Ve, {
            type: `error`,
            role: `alert`,
            content: (0, $.jsx)(s, {
              id: `chatgptProjectSharing.loadError`,
              defaultMessage: `Could not load project sharing settings`,
              description: `Error in project sharing when project data or workspace permissions could not be loaded; changes stay disabled until retry succeeds`,
            }),
            primaryCtaText: (0, $.jsx)(s, {
              id: `chatgptProjectSharing.retry`,
              defaultMessage: `Retry`,
              description: `Button to reload failed project sharing settings`,
            }),
            onPrimaryCtaClick: () => {
              (k(), h && b());
            },
          })
        : null),
      (t[54] = h),
      (t[55] = fe),
      (t[56] = k),
      (t[57] = b),
      (t[58] = Ie))
    : (Ie = t[58]);
  let Re;
  t[59] === ue
    ? (Re = t[60])
    : ((Re = ue == null ? null : (0, $.jsx)(Ve, { type: `error`, role: `alert`, content: Ee[ue] })),
      (t[59] = ue),
      (t[60] = Re));
  let ze;
  t[61] !== r ||
  t[62] !== U ||
  t[63] !== G ||
  t[64] !== D ||
  t[65] !== a ||
  t[66] !== E ||
  t[67] !== O
    ? ((ze =
        U && E != null
          ? (0, $.jsx)(`div`, {
              className: `shrink-0`,
              children: (0, $.jsx)(Lt, {
                accountId: r,
                disabled: G,
                isProjectReady: !D && !O,
                project: E,
                onClose: a,
              }),
            })
          : null),
      (t[61] = r),
      (t[62] = U),
      (t[63] = G),
      (t[64] = D),
      (t[65] = a),
      (t[66] = E),
      (t[67] = O),
      (t[68] = ze))
    : (ze = t[68]);
  let Be;
  t[69] !== V ||
  t[70] !== h ||
  t[71] !== P.canInvite ||
  t[72] !== P.canListWorkspaceMembers ||
  t[73] !== R ||
  t[74] !== E ||
  t[75] !== L ||
  t[76] !== F ||
  t[77] !== y?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts ||
  t[78] !== me
    ? ((Be =
        E != null && P.canInvite
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, $.jsx)(Tt, {
                  allowScimGroups:
                    y?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts !== !1,
                  canListWorkspaceMembers: P.canListWorkspaceMembers,
                  disabled: V,
                  isWorkspace: h,
                  portalContainer: R,
                  project: E,
                  role: L,
                  selected: F,
                  onRoleChange: ne,
                  onChange: I,
                }),
                me
                  ? (0, $.jsx)(`p`, {
                      className: `text-sm text-danger`,
                      role: `alert`,
                      children: (0, $.jsx)(s, {
                        id: `chatgptProjectSharing.tooManyEmails`,
                        defaultMessage: `Invite no more than 5 email addresses at a time`,
                        description: `Validation error when more than five email invitees are selected for a workspace project`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (t[69] = V),
      (t[70] = h),
      (t[71] = P.canInvite),
      (t[72] = P.canListWorkspaceMembers),
      (t[73] = R),
      (t[74] = E),
      (t[75] = L),
      (t[76] = F),
      (t[77] = y?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts),
      (t[78] = me),
      (t[79] = Be))
    : (Be = t[79]);
  let He;
  t[80] !== f?.account_user_id ||
  t[81] !== V ||
  t[82] !== h ||
  t[83] !== P.canManage ||
  t[84] !== P.canShareWorkspaceLink ||
  t[85] !== E ||
  t[86] !== be ||
  t[87] !== _e
    ? ((He =
        E == null
          ? null
          : (0, $.jsx)(ft, {
              canManage: P.canManage,
              canShareWorkspaceLink: P.canShareWorkspaceLink,
              currentUserId: f?.account_user_id,
              disabled: V,
              isWorkspace: h,
              project: E,
              workspaceName: _e,
              onChange: (e) => void be(e),
            })),
      (t[80] = f?.account_user_id),
      (t[81] = V),
      (t[82] = h),
      (t[83] = P.canManage),
      (t[84] = P.canShareWorkspaceLink),
      (t[85] = E),
      (t[86] = be),
      (t[87] = _e),
      (t[88] = He))
    : (He = t[88]);
  let Ue;
  t[89] === D
    ? (Ue = t[90])
    : ((Ue = D
        ? (0, $.jsx)(`p`, {
            className: `text-sm text-secondary`,
            role: `status`,
            children: (0, $.jsx)(s, {
              id: `chatgptProjectSharing.loading`,
              defaultMessage: `Checking project access…`,
              description: `Status while refreshing project sharing data and checking for Work conversations; sharing controls are disabled during the check`,
            }),
          })
        : null),
      (t[89] = D),
      (t[90] = Ue));
  let We;
  t[91] === h
    ? (We = t[92])
    : ((We = h ? null : (0, $.jsx)(St, { isWorkspace: !1 })), (t[91] = h), (t[92] = We));
  let q;
  t[93] !== Pe ||
  t[94] !== Ie ||
  t[95] !== Re ||
  t[96] !== ze ||
  t[97] !== Be ||
  t[98] !== He ||
  t[99] !== Ue ||
  t[100] !== We
    ? ((q = (0, $.jsxs)(`div`, { className: Pe, children: [Ie, Re, ze, Be, He, Ue, We] })),
      (t[93] = Pe),
      (t[94] = Ie),
      (t[95] = Re),
      (t[96] = ze),
      (t[97] = Be),
      (t[98] = He),
      (t[99] = Ue),
      (t[100] = We),
      (t[101] = q))
    : (q = t[101]);
  let J;
  t[102] !== W ||
  t[103] !== B ||
  t[104] !== V ||
  t[105] !== U ||
  t[106] !== z ||
  t[107] !== h ||
  t[108] !== E ||
  t[109] !== he ||
  t[110] !== we ||
  t[111] !== me
    ? ((J = he
        ? (0, $.jsxs)(`footer`, {
            className: `flex shrink-0 flex-wrap items-center justify-between gap-2 p-4 select-none`,
            children: [
              h
                ? (0, $.jsx)(`div`, {
                    className: `min-w-0 grow basis-48`,
                    children: (0, $.jsx)(St, { isWorkspace: !0 }),
                  })
                : null,
              (0, $.jsxs)(`div`, {
                className: `ms-auto flex shrink-0 items-center gap-2`,
                children: [
                  !h && !W && !U && E != null ? (0, $.jsx)(Nt, { project: E, disabled: V }) : null,
                  W
                    ? (0, $.jsx)(ge, {
                        color: `outlineSurface`,
                        disabled: z,
                        size: `dialogAction`,
                        type: `button`,
                        onClick: () => {
                          (I([]), de(null));
                        },
                        children: (0, $.jsx)(s, {
                          id: `chatgptProjectSharing.cancelInvite`,
                          defaultMessage: `Cancel`,
                          description: `Button that clears selected project invitees without closing the sharing dialog or changing existing access`,
                        }),
                      })
                    : null,
                  W || !U
                    ? (0, $.jsxs)(ge, {
                        color: W ? `accent` : `primary`,
                        size: `dialogAction`,
                        type: `submit`,
                        disabled: V || U || me,
                        loading: z || B === `copying`,
                        children: [
                          !W && (B === `copied` ? (0, $.jsx)(ve, {}) : (0, $.jsx)(le, {})),
                          we,
                        ],
                      })
                    : null,
                ],
              }),
            ],
          })
        : null),
      (t[102] = W),
      (t[103] = B),
      (t[104] = V),
      (t[105] = U),
      (t[106] = z),
      (t[107] = h),
      (t[108] = E),
      (t[109] = he),
      (t[110] = we),
      (t[111] = me),
      (t[112] = J))
    : (J = t[112]);
  let Ke;
  t[113] !== je || t[114] !== Me || t[115] !== q || t[116] !== J
    ? ((Ke = (0, $.jsxs)(m, {
        as: `form`,
        className: `max-h-[calc(100vh-6rem)] min-h-0 overflow-hidden`,
        variant: `chatgpt`,
        onSubmit: je,
        children: [Me, q, J],
      })),
      (t[113] = je),
      (t[114] = Me),
      (t[115] = q),
      (t[116] = J),
      (t[117] = Ke))
    : (Ke = t[117]);
  let qe;
  return (
    t[118] !== G || t[119] !== ke || t[120] !== Ae || t[121] !== Ke
      ? ((qe = (0, $.jsx)(Fe, {
          open: !0,
          contentOverflow: `visible`,
          contentProps: De,
          shouldIgnoreClickOutside: G,
          showDialogClose: ke,
          size: `large`,
          variant: `chatgpt`,
          onOpenChange: Ae,
          children: Ke,
        })),
        (t[118] = G),
        (t[119] = ke),
        (t[120] = Ae),
        (t[121] = Ke),
        (t[122] = qe))
      : (qe = t[122]),
    qe
  );
}
function Gt(e) {
  return e.type === 10;
}
var Kt, qt, $;
e(() => {
  ((Kt = K()),
    Me(),
    He(),
    C(),
    (qt = t(a(), 1)),
    P(),
    E(),
    de(),
    ke(),
    o(),
    r(),
    U(),
    ue(),
    L(),
    me(),
    Te(),
    be(),
    I(),
    gt(),
    xt(),
    wt(),
    Mt(),
    q(),
    It(),
    Ut(),
    ($ = H()));
})();
export { Wt as ChatGptProjectShareDialog };
//# sourceMappingURL=dialog-176b9c39862c.js.map
