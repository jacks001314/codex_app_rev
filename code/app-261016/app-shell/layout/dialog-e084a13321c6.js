import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  Bst as a,
  DB as o,
  FBt as s,
  Fb as c,
  HO as l,
  IO as u,
  JO as d,
  JS as f,
  LNt as p,
  LO as m,
  MNt as h,
  Mst as g,
  NNt as _,
  OB as v,
  PBt as y,
  Pb as b,
  QU as x,
  Qst as S,
  RO as C,
  TY as w,
  Ty as T,
  WO as E,
  X3 as D,
  XOt as O,
  Y3 as k,
  YOt as A,
  YS as j,
  Z3 as M,
  ZSt as N,
  ck as P,
  e6 as F,
  ew as I,
  gU as ee,
  iCt as L,
  iU as R,
  jst as te,
  nCt as ne,
  okt as re,
  qO as z,
  rk as ie,
  sw as B,
  tCt as ae,
  tk as oe,
  tkt as V,
  uw as H,
  wy as se,
  zO as U,
  zst as ce,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as W,
  $vr as G,
  JJn as K,
  JYn as le,
  MOr as ue,
  MT as de,
  QLn as q,
  Xs as fe,
  ZLn as pe,
  Zs as me,
  aYn as he,
  bLr as J,
  cA as ge,
  cRr as _e,
  do as ve,
  hlt as ye,
  iRr as be,
  iut as xe,
  jT as Se,
  np as Ce,
  plt as we,
  qYn as Te,
  rp as Ee,
  sA as De,
  tp as Oe,
  tut as ke,
  tyr as Ae,
  uo as je,
  wLr as Me,
  zOr as Ne,
  zRr as Pe,
} from "./app-initial-ad16eaadf81f.js";
import { n as Fe, t as Ie } from "./appearance-picker-button-906f8686708c.js";
import { i as Le, n as Re, r as ze } from "./surface-c9a729ca89b3.js";
import {
  _ as Be,
  a as Ve,
  b as He,
  h as Ue,
  i as We,
  n as Ge,
  t as Ke,
} from "./builder-analytics-f4d73421cfb8.js";
import { n as qe, t as Y } from "./read-error-b0681ff43794.js";
import { n as Je, r as Ye } from "./queries-36c7e90bb702.js";
import {
  a as Xe,
  c as Ze,
  i as Qe,
  l as $e,
  n as et,
  o as tt,
  r as nt,
  s as rt,
  t as it,
} from "./files-data-48d2ea845a80.js";
import { n as at, r as ot } from "./local-edits-78db0fe3cf82.js";
import { n as st, t as ct } from "./memory-a4a0492d023b.js";
import { n as lt, t as ut } from "./workspace-agent-skill-icons-c17c64d82271.js";
function dt(e) {
  let t = (0, _t.c)(9),
    { location: n, readOnly: r, onChanged: i } = e,
    a = L(Pe),
    o = L(J);
  if (a == null || o == null) return null;
  let s = `${a}:${o}:${n.agentId}:${n.skillId}:${n.versionId}`,
    c;
  t[0] !== a || t[1] !== o
    ? ((c = { accountId: a, userId: o }), (t[0] = a), (t[1] = o), (t[2] = c))
    : (c = t[2]);
  let l = r || n.versionId != null,
    u;
  return (
    t[3] !== n || t[4] !== i || t[5] !== s || t[6] !== c || t[7] !== l
      ? ((u = (0, Z.jsx)(ft, { identity: c, location: n, readOnly: l, onChanged: i }, s)),
        (t[3] = n),
        (t[4] = i),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
function ft(e) {
  let n = (0, _t.c)(111),
    { identity: i, location: a, readOnly: o, onChanged: s } = e,
    c = r(S),
    l = re(),
    u = de(),
    d = (0, X.useRef)(null),
    p = (0, X.useRef)(null),
    m = (0, X.useRef)(null),
    [h, g] = (0, X.useState)(null),
    [_, v] = (0, X.useState)(null),
    [y, b] = (0, X.useState)(``),
    [C, w] = (0, X.useState)(!1),
    [T, E] = (0, X.useState)(!1),
    [D, O] = (0, X.useState)(!1),
    A,
    j;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => () => m.current?.abort()), (j = []), (n[0] = A), (n[1] = j))
    : ((A = n[0]), (j = n[1])),
    (0, X.useEffect)(A, j));
  let M;
  n[2] !== a || n[3] !== h ? ((M = { ...a, nodeId: h }), (n[2] = a), (n[3] = h), (n[4] = M)) : (M = n[4]);
  let {
      data: N,
      error: P,
      isPending: F,
      refetch: I,
      fetchNextPage: L,
      hasNextPage: R,
      isFetchingNextPage: te,
    } = ne(it, M),
    z = N?.pages[0]?.node,
    B,
    ae,
    H,
    U,
    ce,
    W,
    G,
    K,
    le,
    ue,
    q;
  if (
    n[5] !== N ||
    n[6] !== P ||
    n[7] !== i ||
    n[8] !== l ||
    n[9] !== u ||
    n[10] !== F ||
    n[11] !== a ||
    n[12] !== z ||
    n[13] !== h ||
    n[14] !== s ||
    n[15] !== C ||
    n[16] !== o ||
    n[17] !== I ||
    n[18] !== D ||
    n[19] !== c ||
    n[20] !== T
  ) {
    let e = N?.pages.flatMap(mt),
      r;
    n[32] !== i.accountId || n[33] !== i.userId || n[34] !== u || n[35] !== c
      ? ((r = () => u() && c.get(Pe) === i.accountId && c.get(J) === i.userId),
        (n[32] = i.accountId),
        (n[33] = i.userId),
        (n[34] = u),
        (n[35] = c),
        (n[36] = r))
      : (r = n[36]);
    let _ = r,
      y;
    n[37] !== i.accountId ||
    n[38] !== i.userId ||
    n[39] !== _ ||
    n[40] !== a.agentId ||
    n[41] !== a.skillId ||
    n[42] !== s ||
    n[43] !== c.queryClient
      ? ((y = async function () {
          (await Promise.all([
            c.queryClient.invalidateQueries({
              queryKey: [`workspace-agent`, `files`, i.accountId, i.userId, a.agentId, a.skillId],
            }),
            s(),
          ]),
            _() && O(!1));
        }),
        (n[37] = i.accountId),
        (n[38] = i.userId),
        (n[39] = _),
        (n[40] = a.agentId),
        (n[41] = a.skillId),
        (n[42] = s),
        (n[43] = c.queryClient),
        (n[44] = y))
      : (y = n[44]);
    let S = y,
      A;
    (n[45] !== i || n[46] !== _ || n[47] !== a || n[48] !== o || n[49] !== S || n[50] !== c
      ? ((A = async function (e) {
          if (o || m.current != null) return;
          let t = new AbortController();
          ((m.current = t), w(!0), E(!1));
          let n = c.watch((e) => {
            (e.get(Pe) !== i.accountId || e.get(J) !== i.userId) && t.abort();
          });
          await (async () => {
            try {
              if (
                (e.type === `upload-files`
                  ? await $e(c, i, a, e.parentId, e.files, t.signal)
                  : await rt(c, i, a, e, t.signal),
                !_())
              )
                return;
              v(null);
            } catch {
              _() && E(!0);
            }
            _() &&
              (await S().catch(() => {
                _() && O(!0);
              }));
          })().finally(() => {
            (n(), (m.current = null), _() && w(!1));
          });
        }),
        (n[45] = i),
        (n[46] = _),
        (n[47] = a),
        (n[48] = o),
        (n[49] = S),
        (n[50] = c),
        (n[51] = A))
      : (A = n[51]),
      (B = A),
      (W = `flex min-h-0 flex-col gap-4`));
    let j;
    n[52] === l
      ? (j = n[53])
      : ((j = l.formatMessage({
          id: `workspaceAgents.resources.fileNavigation`,
          defaultMessage: `File navigation`,
          description: `Accessible label for navigation within an agent or skill file folder`,
        })),
        (n[52] = l),
        (n[53] = j));
    let M;
    n[54] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((M = (0, Z.jsx)(k, {
          type: `button`,
          color: `ghost`,
          size: `toolbar`,
          onClick: () => g(null),
          children: (0, Z.jsx)(V, {
            id: `workspaceAgents.resources.filesRoot`,
            defaultMessage: `Files`,
            description: `Button that opens the root folder of an agent or skill`,
          }),
        })),
        (n[54] = M))
      : (M = n[54]);
    let L;
    n[55] === z?.recursive_parents
      ? (L = n[56])
      : ((L = z?.recursive_parents
          ?.filter(pt)
          .map((e) =>
            (0, Z.jsx)(
              k,
              { type: `button`, color: `ghost`, size: `toolbar`, onClick: () => g(e.id), children: e.name },
              e.id,
            ),
          )),
        (n[55] = z?.recursive_parents),
        (n[56] = L));
    let R;
    (n[57] !== z || n[58] !== h
      ? ((R = h != null && z != null ? (0, Z.jsx)(`span`, { className: `text-sm`, children: z.name }) : null),
        (n[57] = z),
        (n[58] = h),
        (n[59] = R))
      : (R = n[59]),
      n[60] !== j || n[61] !== L || n[62] !== R
        ? ((G = (0, Z.jsxs)(`nav`, {
            className: `flex flex-wrap items-center gap-2`,
            "aria-label": j,
            children: [M, L, R],
          })),
          (n[60] = j),
          (n[61] = L),
          (n[62] = R),
          (n[63] = G))
        : (G = n[63]),
      n[64] !== l || n[65] !== B || n[66] !== z || n[67] !== C || n[68] !== o
        ? ((K =
            !o && z?.kind === `folder`
              ? (0, Z.jsxs)(`div`, {
                  className: `flex flex-wrap gap-2`,
                  children: [
                    (0, Z.jsx)(k, {
                      type: `button`,
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: C,
                      onClick: () => {
                        (b(``), v({ type: `folder` }));
                      },
                      children: (0, Z.jsx)(V, {
                        id: `workspaceAgents.resources.newFolder`,
                        defaultMessage: `New folder`,
                        description: `Button that creates a folder for agent reference files or skill files`,
                      }),
                    }),
                    (0, Z.jsx)(k, {
                      type: `button`,
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: C,
                      onClick: () => d.current?.click(),
                      children: (0, Z.jsx)(V, {
                        id: `workspaceAgents.resources.uploadFiles`,
                        defaultMessage: `Upload files`,
                        description: `Button that adds reference files to the current agent or skill folder`,
                      }),
                    }),
                    (0, Z.jsx)(k, {
                      type: `button`,
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: C,
                      onClick: () => p.current?.click(),
                      children: (0, Z.jsx)(V, {
                        id: `workspaceAgents.resources.uploadFolder`,
                        defaultMessage: `Upload folder`,
                        description: `Button that adds a folder and its files to the current agent or skill folder`,
                      }),
                    }),
                    (0, Z.jsx)(`input`, {
                      ref: d,
                      type: `file`,
                      hidden: !0,
                      multiple: !0,
                      "aria-label": l.formatMessage({
                        id: `workspaceAgents.resources.chooseFiles`,
                        defaultMessage: `Choose files`,
                        description: `Accessible label for the agent or skill file upload control`,
                      }),
                      onChange: (e) => {
                        let t = Array.from(e.currentTarget.files ?? []);
                        ((e.currentTarget.value = ``),
                          t.length > 0 && B({ type: `upload-files`, parentId: z.id, files: t }));
                      },
                    }),
                    (0, Z.jsx)(`input`, {
                      ref: p,
                      type: `file`,
                      hidden: !0,
                      multiple: !0,
                      webkitdirectory: ``,
                      "aria-label": l.formatMessage({
                        id: `workspaceAgents.resources.chooseFolder`,
                        defaultMessage: `Choose a folder`,
                        description: `Accessible label for the agent or skill folder upload control`,
                      }),
                      onChange: (e) => {
                        let t = Array.from(e.currentTarget.files ?? []);
                        ((e.currentTarget.value = ``),
                          t.length > 0 && B({ type: `upload-files`, parentId: z.id, files: t }));
                      },
                    }),
                  ],
                })
              : null),
          (n[64] = l),
          (n[65] = B),
          (n[66] = z),
          (n[67] = C),
          (n[68] = o),
          (n[69] = K))
        : (K = n[69]),
      n[70] === F ? (le = n[71]) : ((le = F ? (0, Z.jsx)(t, {}) : null), (n[70] = F), (n[71] = le)),
      n[72] !== P || n[73] !== I
        ? ((ue = P == null ? null : (0, Z.jsx)(Y, { onRetry: () => void I() })),
          (n[72] = P),
          (n[73] = I),
          (n[74] = ue))
        : (ue = n[74]),
      n[75] === T
        ? (q = n[76])
        : ((q = T
            ? (0, Z.jsx)(Y, {
                children: (0, Z.jsx)(V, {
                  id: `workspaceAgents.resources.writeFailed`,
                  defaultMessage: `Could not complete the file change. Check the current files before trying again.`,
                  description: `Error after an agent or skill file operation failed; some upload steps may have completed`,
                }),
              })
            : null),
          (n[75] = T),
          (n[76] = q)),
      n[77] !== S || n[78] !== D
        ? ((ae = D
            ? (0, Z.jsx)(Y, {
                onRetry: () => void S().catch(() => O(!0)),
                children: (0, Z.jsx)(V, {
                  id: `workspaceAgents.resources.refreshFailed`,
                  defaultMessage: `Could not load the latest files`,
                  description: `Error when the file list could not be refreshed after an agent or skill file operation`,
                }),
              })
            : null),
          (n[77] = S),
          (n[78] = D),
          (n[79] = ae))
        : (ae = n[79]),
      n[80] !== i || n[81] !== _ || n[82] !== a || n[83] !== z || n[84] !== o || n[85] !== S
        ? ((H =
            z?.kind === `file`
              ? (0, Z.jsx)(
                  gt,
                  {
                    identity: i,
                    location: a,
                    node: z,
                    readOnly: o || (a.skillId != null && tt(z)),
                    onChanged: async () => {
                      try {
                        await S();
                      } catch {
                        _() && O(!0);
                      }
                    },
                  },
                  z.id,
                )
              : null),
          (n[80] = i),
          (n[81] = _),
          (n[82] = a),
          (n[83] = z),
          (n[84] = o),
          (n[85] = S),
          (n[86] = H))
        : (H = n[86]),
      (U =
        !F && P == null && ((N != null && z == null) || (z?.kind === `folder` && e?.length === 0))
          ? (0, Z.jsx)(f, {
              icon: (0, Z.jsx)(x, {}),
              title: (0, Z.jsx)(V, {
                id: `workspaceAgents.resources.emptyFolder`,
                defaultMessage: `No files yet`,
                description: `Empty state in an agent reference folder or skill folder`,
              }),
            })
          : null),
      (ce =
        P == null
          ? e?.map((e) =>
              (0, Z.jsx)(
                ke,
                {
                  density: `compact`,
                  isSelected: !1,
                  title: e.name,
                  ariaLabel: e.name,
                  icon: e.kind === `folder` ? (0, Z.jsx)(x, {}) : (0, Z.jsx)(ee, {}),
                  onSelect: () => g(e.id),
                  hasInteractiveContent: !0,
                  rightText:
                    o || (a.skillId != null && tt(e))
                      ? null
                      : (0, Z.jsxs)(oe, {
                          contentWidth: `menu`,
                          triggerButton: (0, Z.jsx)(se, {
                            disabled: C,
                            label: l.formatMessage({
                              id: `workspaceAgents.resources.fileActions`,
                              defaultMessage: `File actions`,
                              description: `Accessible label for the menu to rename or delete an agent or skill file`,
                            }),
                          }),
                          children: [
                            (0, Z.jsx)(ie.Item, {
                              onSelect: () => {
                                (b(e.name), v({ type: `rename`, node: e }));
                              },
                              children: (0, Z.jsx)(V, {
                                id: `workspaceAgents.resources.rename`,
                                defaultMessage: `Rename`,
                                description: `Menu action that renames an agent or skill file or folder`,
                              }),
                            }),
                            (0, Z.jsx)(ie.Item, {
                              onSelect: () => v({ type: `delete`, node: e }),
                              children: (0, Z.jsx)(V, {
                                id: `workspaceAgents.resources.delete`,
                                defaultMessage: `Delete`,
                                description: `Menu action that removes an agent or skill file or folder`,
                              }),
                            }),
                          ],
                        }),
                },
                e.id,
              ),
            )
          : null),
      (n[5] = N),
      (n[6] = P),
      (n[7] = i),
      (n[8] = l),
      (n[9] = u),
      (n[10] = F),
      (n[11] = a),
      (n[12] = z),
      (n[13] = h),
      (n[14] = s),
      (n[15] = C),
      (n[16] = o),
      (n[17] = I),
      (n[18] = D),
      (n[19] = c),
      (n[20] = T),
      (n[21] = B),
      (n[22] = ae),
      (n[23] = H),
      (n[24] = U),
      (n[25] = ce),
      (n[26] = W),
      (n[27] = G),
      (n[28] = K),
      (n[29] = le),
      (n[30] = ue),
      (n[31] = q));
  } else
    ((B = n[21]),
      (ae = n[22]),
      (H = n[23]),
      (U = n[24]),
      (ce = n[25]),
      (W = n[26]),
      (G = n[27]),
      (K = n[28]),
      (le = n[29]),
      (ue = n[30]),
      (q = n[31]));
  let fe;
  n[87] !== L || n[88] !== R || n[89] !== te
    ? ((fe = R
        ? (0, Z.jsx)(k, {
            type: `button`,
            color: `secondary`,
            size: `toolbar`,
            loading: te,
            onClick: () => void L(),
            children: (0, Z.jsx)(V, {
              id: `workspaceAgents.resources.loadMore`,
              defaultMessage: `Load more`,
              description: `Button that loads another page of agent or skill files`,
            }),
          })
        : null),
      (n[87] = L),
      (n[88] = R),
      (n[89] = te),
      (n[90] = fe))
    : (fe = n[90]);
  let pe;
  n[91] !== _ || n[92] !== B || n[93] !== y || n[94] !== z || n[95] !== C || n[96] !== T
    ? ((pe =
        _ == null
          ? null
          : (0, Z.jsx)(ht, {
              action: _,
              name: y,
              pending: C,
              failed: T,
              onNameChange: b,
              onClose: () => {
                C || v(null);
              },
              onSubmit: () => {
                _.type === `folder` && z != null
                  ? B({ type: `folder`, name: y.trim(), parentId: z.id })
                  : _.type === `rename`
                    ? B({ type: `rename`, node: _.node, name: y.trim() })
                    : _.type === `delete` && B({ type: `delete`, node: _.node });
              },
            })),
      (n[91] = _),
      (n[92] = B),
      (n[93] = y),
      (n[94] = z),
      (n[95] = C),
      (n[96] = T),
      (n[97] = pe))
    : (pe = n[97]);
  let me;
  return (
    n[98] !== ae ||
    n[99] !== H ||
    n[100] !== U ||
    n[101] !== ce ||
    n[102] !== fe ||
    n[103] !== pe ||
    n[104] !== W ||
    n[105] !== G ||
    n[106] !== K ||
    n[107] !== le ||
    n[108] !== ue ||
    n[109] !== q
      ? ((me = (0, Z.jsxs)(`div`, { className: W, children: [G, K, le, ue, q, ae, H, U, ce, fe, pe] })),
        (n[98] = ae),
        (n[99] = H),
        (n[100] = U),
        (n[101] = ce),
        (n[102] = fe),
        (n[103] = pe),
        (n[104] = W),
        (n[105] = G),
        (n[106] = K),
        (n[107] = le),
        (n[108] = ue),
        (n[109] = q),
        (n[110] = me))
      : (me = n[110]),
    me
  );
}
function pt(e) {
  return e.name.length > 0;
}
function mt(e) {
  return e.children;
}
function ht(e) {
  let t = (0, _t.c)(39),
    { action: n, name: r, pending: i, failed: a, onNameChange: o, onSubmit: s, onClose: c } = e,
    l = (0, X.useId)(),
    d;
  t[0] === c
    ? (d = t[1])
    : ((d = (e) => {
        e || c();
      }),
      (t[0] = c),
      (t[1] = d));
  let f;
  t[2] === s
    ? (f = t[3])
    : ((f = (e) => {
        (e.preventDefault(), s());
      }),
      (t[2] = s),
      (t[3] = f));
  let p;
  t[4] === n.type
    ? (p = t[5])
    : ((p = (0, Z.jsx)(C, {
        title: (0, Z.jsx)(z, {
          children:
            n.type === `delete`
              ? (0, Z.jsx)(V, {
                  id: `workspaceAgents.resources.confirmDeleteTitle`,
                  defaultMessage: `Delete this item?`,
                  description: `Confirmation title before deleting an agent or skill file or folder`,
                })
              : (0, Z.jsx)(V, {
                  id: `workspaceAgents.resources.fileNameTitle`,
                  defaultMessage: `Name the item`,
                  description: `Dialog title for creating a folder or renaming an agent or skill file`,
                }),
        }),
      })),
      (t[4] = n.type),
      (t[5] = p));
  let h;
  t[6] === a
    ? (h = t[7])
    : ((h = a
        ? (0, Z.jsx)(U, {
            children: (0, Z.jsx)(Y, {
              children: (0, Z.jsx)(V, {
                id: `workspaceAgents.resources.operationFailed`,
                defaultMessage: `Could not complete this change`,
                description: `Error inside the confirmation dialog after a file operation failed`,
              }),
            }),
          })
        : null),
      (t[6] = a),
      (t[7] = h));
  let g;
  t[8] !== n.node || t[9] !== n.type || t[10] !== l || t[11] !== r || t[12] !== o || t[13] !== i
    ? ((g = (0, Z.jsx)(U, {
        children:
          n.type === `delete`
            ? (0, Z.jsx)(`p`, {
                children: (0, Z.jsx)(V, {
                  id: `workspaceAgents.resources.confirmDelete`,
                  defaultMessage: `Delete {name} and its contents? This cannot be undone.`,
                  description: `Confirmation before deleting a file or folder from an agent draft; name is the selected item name`,
                  values: { name: n.node.name },
                }),
              })
            : (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`label`, {
                    htmlFor: l,
                    children: (0, Z.jsx)(V, {
                      id: `workspaceAgents.resources.name`,
                      defaultMessage: `Name`,
                      description: `Label for the name of an agent or skill file or folder`,
                    }),
                  }),
                  (0, Z.jsx)(pe, {
                    id: l,
                    value: r,
                    required: !0,
                    autoFocus: !0,
                    disabled: i,
                    onChange: (e) => o(e.target.value),
                  }),
                ],
              }),
      })),
      (t[8] = n.node),
      (t[9] = n.type),
      (t[10] = l),
      (t[11] = r),
      (t[12] = o),
      (t[13] = i),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(V, {
        id: `workspaceAgents.resources.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels a pending agent or skill file change`,
      })),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  t[16] !== c || t[17] !== i
    ? ((v = (0, Z.jsx)(k, { type: `button`, color: `ghost`, disabled: i, onClick: c, children: _ })),
      (t[16] = c),
      (t[17] = i),
      (t[18] = v))
    : (v = t[18]);
  let y = n.type === `delete` ? `danger` : `primary`,
    b;
  t[19] !== n.type || t[20] !== r
    ? ((b = n.type !== `delete` && r.trim().length === 0), (t[19] = n.type), (t[20] = r), (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(V, {
        id: `workspaceAgents.resources.confirm`,
        defaultMessage: `Confirm`,
        description: `Button that applies the selected agent or skill file operation`,
      })),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] !== i || t[24] !== y || t[25] !== b
    ? ((S = (0, Z.jsx)(k, { type: `submit`, color: y, loading: i, disabled: b, children: x })),
      (t[23] = i),
      (t[24] = y),
      (t[25] = b),
      (t[26] = S))
    : (S = t[26]);
  let w;
  t[27] !== S || t[28] !== v
    ? ((w = (0, Z.jsxs)(m, { children: [v, S] })), (t[27] = S), (t[28] = v), (t[29] = w))
    : (w = t[29]);
  let T;
  t[30] !== w || t[31] !== f || t[32] !== p || t[33] !== h || t[34] !== g
    ? ((T = (0, Z.jsxs)(u, { as: `form`, onSubmit: f, children: [p, h, g, w] })),
      (t[30] = w),
      (t[31] = f),
      (t[32] = p),
      (t[33] = h),
      (t[34] = g),
      (t[35] = T))
    : (T = t[35]);
  let D;
  return (
    t[36] !== d || t[37] !== T
      ? ((D = (0, Z.jsx)(E, { open: !0, onOpenChange: d, children: T })),
        (t[36] = d),
        (t[37] = T),
        (t[38] = D))
      : (D = t[38]),
    D
  );
}
function gt(e) {
  let n = (0, _t.c)(100),
    { identity: i, location: a, node: o, readOnly: s, onChanged: c } = e,
    l = r(ue),
    u = de(),
    d = re(),
    f = L(me),
    p;
  n[0] !== i || n[1] !== a.agentId
    ? ((p = { ...i, agentId: a.agentId }), (n[0] = i), (n[1] = a.agentId), (n[2] = p))
    : (p = n[2]);
  let m = ae(ot, p),
    h = L(m.drafts$),
    _ = `${a.skillId ?? `agent`}:file:${o.id}`,
    v;
  n[3] !== h || n[4] !== _ || n[5] !== a.versionId
    ? ((v = a.versionId == null ? h.get(_) : void 0),
      (n[3] = h),
      (n[4] = _),
      (n[5] = a.versionId),
      (n[6] = v))
    : (v = n[6]);
  let y = v,
    [x, S] = (0, X.useState)(y != null),
    [C, w] = (0, X.useState)(!1),
    T;
  n[7] !== i.accountId || n[8] !== i.userId || n[9] !== u || n[10] !== l
    ? ((T = () => u() && l.get(Pe) === i.accountId && l.get(J) === i.userId),
      (n[7] = i.accountId),
      (n[8] = i.userId),
      (n[9] = u),
      (n[10] = l),
      (n[11] = T))
    : (T = n[11]);
  let E = T,
    D;
  n[12] === o ? (D = n[13]) : ((D = Xe(o)), (n[12] = o), (n[13] = D));
  let O = D,
    A;
  n[14] !== i.accountId ||
  n[15] !== i.userId ||
  n[16] !== a.agentId ||
  n[17] !== a.skillId ||
  n[18] !== a.versionId ||
  n[19] !== o.id ||
  n[20] !== o.updated_at
    ? ((A = [
        `workspace-agent`,
        `files`,
        i.accountId,
        i.userId,
        a.agentId,
        a.skillId,
        a.versionId,
        `text`,
        o.id,
        o.updated_at,
      ]),
      (n[14] = i.accountId),
      (n[15] = i.userId),
      (n[16] = a.agentId),
      (n[17] = a.skillId),
      (n[18] = a.versionId),
      (n[19] = o.id),
      (n[20] = o.updated_at),
      (n[21] = A))
    : (A = n[21]);
  let j = A,
    M;
  n[22] !== i || n[23] !== a || n[24] !== o
    ? ((M = (e) => {
        let { signal: t } = e;
        return Ze(a, o, i, t);
      }),
      (n[22] = i),
      (n[23] = a),
      (n[24] = o),
      (n[25] = M))
    : (M = n[25]);
  let N;
  n[26] !== O || n[27] !== M || n[28] !== j
    ? ((N = { queryKey: j, queryFn: M, enabled: O, staleTime: ce.ONE_MINUTE, retry: !1 }),
      (n[26] = O),
      (n[27] = M),
      (n[28] = j),
      (n[29] = N))
    : (N = n[29]);
  let { data: P, error: F, isPending: I, refetch: ee } = g(N),
    R = null;
  if (P != null && (!x || s)) {
    let e;
    (n[30] !== o.name || n[31] !== l || n[32] !== f || n[33] !== P
      ? ((e = /\.mdx?$/i.test(o.name)
          ? (0, Z.jsx)(Re, { children: (0, Z.jsx)(ze, { markdown: P }) })
          : (0, Z.jsx)(b, {
              content: P,
              language: `text`,
              shouldWrapCode: f,
              onToggleWrapCode: () => l.set(me, !f),
            })),
        (n[30] = o.name),
        (n[31] = l),
        (n[32] = f),
        (n[33] = P),
        (n[34] = e))
      : (e = n[34]),
      (R = e));
  }
  let te;
  n[35] !== _ || n[36] !== x || n[37] !== E || n[38] !== m || n[39] !== s
    ? ((te = (e) => {
        (e.preventDefault(),
          x &&
            !s &&
            m.flush(_).then((e) => {
              e && E() && S(!1);
            }));
      }),
      (n[35] = _),
      (n[36] = x),
      (n[37] = E),
      (n[38] = m),
      (n[39] = s),
      (n[40] = te))
    : (te = n[40]);
  let ne;
  n[41] !== i || n[42] !== E || n[43] !== a || n[44] !== o || n[45] !== l
    ? ((ne = () =>
        void et(l, a, o, i).catch(() => {
          E() && w(!0);
        })),
      (n[41] = i),
      (n[42] = E),
      (n[43] = a),
      (n[44] = o),
      (n[45] = l),
      (n[46] = ne))
    : (ne = n[46]);
  let z;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Z.jsx)(V, {
        id: `workspaceAgents.resources.download`,
        defaultMessage: `Download`,
        description: `Button that downloads the selected agent or skill file`,
      })),
      (n[47] = z))
    : (z = n[47]);
  let ie;
  n[48] === ne
    ? (ie = n[49])
    : ((ie = (0, Z.jsx)(k, {
        type: `button`,
        color: `secondary`,
        size: `toolbar`,
        onClick: ne,
        children: z,
      })),
      (n[48] = ne),
      (n[49] = ie));
  let B;
  n[50] !== i || n[51] !== E || n[52] !== a || n[53] !== o || n[54] !== l
    ? ((B = Oe({ browserPreview: !0 })
        ? (0, Z.jsx)(k, {
            type: `button`,
            color: `secondary`,
            size: `toolbar`,
            onClick: () =>
              void nt(a, o, i)
                .then((e) => {
                  let { fileName: t, target: n } = e;
                  if (E())
                    return Ee(l, {
                      conversationId: null,
                      fileName: t,
                      target: n,
                      mimeType: o.mime_type,
                      browserPreview: !0,
                      downloadFallback: !1,
                      tabKey: `agent-file:${i.accountId}:${i.userId}:${a.agentId}:${a.skillId}:${a.versionId}:${o.id}`,
                      isAccessBlocked: (e) => e.get(Pe) !== i.accountId || e.get(J) !== i.userId,
                    });
                })
                .catch(() => {
                  E() && w(!0);
                }),
            children: (0, Z.jsx)(V, {
              id: `workspaceAgents.resources.openPreview`,
              defaultMessage: `Open preview`,
              description: `Button that opens an agent or skill file in the shared file viewer`,
            }),
          })
        : null),
      (n[50] = i),
      (n[51] = E),
      (n[52] = a),
      (n[53] = o),
      (n[54] = l),
      (n[55] = B))
    : (B = n[55]);
  let oe;
  n[56] !== O || n[57] !== x || n[58] !== s || n[59] !== P
    ? ((oe =
        !s && O && P != null && !x
          ? (0, Z.jsx)(k, {
              type: `button`,
              color: `secondary`,
              size: `toolbar`,
              onClick: () => S(!0),
              children: (0, Z.jsx)(V, {
                id: `workspaceAgents.resources.editFile`,
                defaultMessage: `Edit file`,
                description: `Button that opens the text editor for an agent or skill file`,
              }),
            })
          : null),
      (n[56] = O),
      (n[57] = x),
      (n[58] = s),
      (n[59] = P),
      (n[60] = oe))
    : (oe = n[60]);
  let H;
  n[61] !== ie || n[62] !== B || n[63] !== oe
    ? ((H = (0, Z.jsxs)(`div`, { className: `flex flex-wrap gap-2`, children: [ie, B, oe] })),
      (n[61] = ie),
      (n[62] = B),
      (n[63] = oe),
      (n[64] = H))
    : (H = n[64]);
  let se;
  n[65] === C
    ? (se = n[66])
    : ((se = C
        ? (0, Z.jsx)(Y, {
            children: (0, Z.jsx)(V, {
              id: `workspaceAgents.resources.openFailed`,
              defaultMessage: `Could not open this file`,
              description: `Error when an agent or skill file could not be downloaded or opened`,
            }),
          })
        : null),
      (n[65] = C),
      (n[66] = se));
  let U;
  n[67] !== O || n[68] !== I
    ? ((U = O && I ? (0, Z.jsx)(t, {}) : null), (n[67] = O), (n[68] = I), (n[69] = U))
    : (U = n[69]);
  let W;
  n[70] !== O || n[71] !== F || n[72] !== ee
    ? ((W = O && F != null ? (0, Z.jsx)(Y, { onRetry: () => void ee() }) : null),
      (n[70] = O),
      (n[71] = F),
      (n[72] = ee),
      (n[73] = W))
    : (W = n[73]);
  let G;
  n[74] !== y?.content ||
  n[75] !== y?.status ||
  n[76] !== _ ||
  n[77] !== x ||
  n[78] !== i ||
  n[79] !== d ||
  n[80] !== E ||
  n[81] !== m ||
  n[82] !== a ||
  n[83] !== o.mime_type ||
  n[84] !== o.name ||
  n[85] !== o.parent_node_id ||
  n[86] !== c ||
  n[87] !== s ||
  n[88] !== l ||
  n[89] !== P ||
  n[90] !== j
    ? ((G =
        P != null && x && !s
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(q, {
                  value: y?.content ?? P,
                  rows: 14,
                  "aria-label": d.formatMessage({
                    id: `workspaceAgents.resources.fileContents`,
                    defaultMessage: `File contents`,
                    description: `Accessible label for the editor that changes an agent or skill text file`,
                  }),
                  onChange: (e) => {
                    m.request(_, e.target.value, P, a.skillId, async (e, t) => {
                      if (o.parent_node_id == null) throw Error(`Missing file parent`);
                      (await rt(
                        l,
                        i,
                        a,
                        {
                          type: `upload`,
                          parentId: o.parent_node_id,
                          file: new File([e], o.name, { type: o.mime_type ?? `text/plain` }),
                          replace: !0,
                        },
                        t,
                      ),
                        l.queryClient.setQueryData(j, e),
                        await c());
                    });
                  },
                  onBlur: () => void m.flush(_),
                }),
                y?.status === `failed`
                  ? (0, Z.jsx)(Y, {
                      onRetry: () => void m.flush(_),
                      children: (0, Z.jsx)(V, {
                        id: `workspaceAgents.resources.textSaveFailed`,
                        defaultMessage: `Could not save the file. Your edits are still here.`,
                        description: `Error after saving an agent or skill text file failed; the pending text remains available`,
                      }),
                    })
                  : null,
                (0, Z.jsxs)(`div`, {
                  className: `flex gap-2`,
                  children: [
                    (0, Z.jsx)(k, {
                      type: `submit`,
                      color: `primary`,
                      size: `toolbar`,
                      loading: y?.status === `saving`,
                      children: (0, Z.jsx)(V, {
                        id: `workspaceAgents.resources.saveFile`,
                        defaultMessage: `Save changes`,
                        description: `Button that saves pending edits to an agent or skill text file`,
                      }),
                    }),
                    (0, Z.jsx)(k, {
                      type: `button`,
                      color: `ghost`,
                      size: `toolbar`,
                      onClick: () => {
                        (m.discard(_),
                          m.flush(_).then((e) => {
                            e && E() && S(!1);
                          }));
                      },
                      children: (0, Z.jsx)(V, {
                        id: `workspaceAgents.resources.discardFile`,
                        defaultMessage: `Discard changes`,
                        description: `Button that restores the previous text of an edited agent or skill file`,
                      }),
                    }),
                  ],
                }),
              ],
            })
          : null),
      (n[74] = y?.content),
      (n[75] = y?.status),
      (n[76] = _),
      (n[77] = x),
      (n[78] = i),
      (n[79] = d),
      (n[80] = E),
      (n[81] = m),
      (n[82] = a),
      (n[83] = o.mime_type),
      (n[84] = o.name),
      (n[85] = o.parent_node_id),
      (n[86] = c),
      (n[87] = s),
      (n[88] = l),
      (n[89] = P),
      (n[90] = j),
      (n[91] = G))
    : (G = n[91]);
  let K;
  return (
    n[92] !== R || n[93] !== H || n[94] !== se || n[95] !== U || n[96] !== W || n[97] !== G || n[98] !== te
      ? ((K = (0, Z.jsxs)(`form`, {
          className: `flex min-h-0 flex-col gap-4`,
          onSubmit: te,
          children: [H, se, U, W, G, R],
        })),
        (n[92] = R),
        (n[93] = H),
        (n[94] = se),
        (n[95] = U),
        (n[96] = W),
        (n[97] = G),
        (n[98] = te),
        (n[99] = K))
      : (K = n[99]),
    K
  );
}
var _t, X, Z;
function vt() {
  return (vt = e(() => {
    ((_t = y()),
      te(),
      N(),
      (X = s()),
      O(),
      Me(),
      Ce(),
      M(),
      c(),
      j(),
      d(),
      l(),
      P(),
      w(),
      T(),
      xe(),
      F(),
      W(),
      fe(),
      Le(),
      i(),
      Ne(),
      a(),
      Se(),
      qe(),
      Qe(),
      at(),
      (Z = p()));
  }))();
}
function yt(e) {
  let t = (0, bt.c)(7),
    { name: n } = e,
    r,
    i;
  if (t[0] !== n) {
    i = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((r = n ? lt.get(n) : void 0), r == null)) {
        let e;
        (t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, xt.jsx)(R, { className: `text-purple` })), (t[3] = e))
          : (e = t[3]),
          (i = e));
        break bb0;
      }
      if (r.asset != null) {
        i = (0, xt.jsx)(o, { asset: r.asset, className: h(`shrink-0`, r.color), focusable: `false` });
        break bb0;
      }
    }
    ((t[0] = n), (t[1] = r), (t[2] = i));
  } else ((r = t[1]), (i = t[2]));
  if (i !== Symbol.for(`react.early_return_sentinel`)) return i;
  let a = r.icon,
    s;
  return (
    t[4] !== a || t[5] !== r.color
      ? ((s = (0, xt.jsx)(a, { className: r.color })), (t[4] = a), (t[5] = r.color), (t[6] = s))
      : (s = t[6]),
    s
  );
}
var bt, xt;
function St() {
  return (St = e(() => {
    ((bt = y()), _(), v(), w(), ut(), (xt = p()));
  }))();
}
function Ct(e) {
  let t = (0, Et.c)(57),
    { agentId: i, skill: a, versionId: o, canEdit: s, onChanged: c, onNavigate: l } = e,
    u = r(S),
    [d, f] = (0, Dt.useState)(!1),
    [p, m] = (0, Dt.useState)(!1),
    h = re(),
    g = (0, Dt.useId)(),
    [_, v] = (0, Dt.useState)(`overview`),
    y = `chatgpt_skill_id` in a,
    b;
  t[0] !== i || t[1] !== d || t[2] !== u || t[3] !== y || t[4] !== a.id || t[5] !== a.name || t[6] !== o
    ? ((b = async function () {
        let e = u.get(Pe),
          t = u.get(J);
        if (e == null || t == null || d || y || o != null) return;
        let n = new AbortController(),
          r = u.watch((r) => {
            (r.get(Pe) !== e || r.get(J) !== t) && n.abort();
          });
        (f(!0),
          m(!1),
          Ge(u, {
            actionType: Ve.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_DOWNLOAD,
            actionResult: We.CHATGPT_AGENT_BUILDER_ACTION_RESULT_STARTED,
            source: Be.CHATGPT_AGENT_BUILDER_SOURCE_SKILL_DETAIL,
            agentId: i,
            skill: { skillId: a.id },
          }),
          await (async () => {
            try {
              let r = await be.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/download-url`, {
                parameters: { path: { agent_id: i, skill_id: a.id }, query: { download: `true` } },
                expectedIdentity: { accountId: e, userId: t },
                signal: n.signal,
              });
              if (u.get(Pe) !== e || u.get(J) !== t) return;
              let o = Te(r.download_url);
              if (o == null) {
                m(!0);
                return;
              }
              await K({
                conversationId: null,
                signal: n.signal,
                fileName: r.file_name ?? `${a.name || a.id}.zip`,
                target: {
                  type: `download-url`,
                  downloadUrl: G(o) ?? o,
                  requestHeaders: r.needs_auth_token ? _e() : void 0,
                },
              });
            } catch {
              n.signal.aborted || m(!0);
            }
          })().finally(() => {
            (r(), f(!1));
          }));
      }),
      (t[0] = i),
      (t[1] = d),
      (t[2] = u),
      (t[3] = y),
      (t[4] = a.id),
      (t[5] = a.name),
      (t[6] = o),
      (t[7] = b))
    : (b = t[7]);
  let x = b,
    C;
  if (_ === `files` && !y) {
    let e;
    t[8] !== i || t[9] !== a.id || t[10] !== o
      ? ((e = { agentId: i, skillId: a.id, versionId: o }),
        (t[8] = i),
        (t[9] = a.id),
        (t[10] = o),
        (t[11] = e))
      : (e = t[11]);
    let n = !s,
      r;
    (t[12] !== c || t[13] !== e || t[14] !== n
      ? ((r = (0, Q.jsx)(dt, { location: e, readOnly: n, onChanged: c })),
        (t[12] = c),
        (t[13] = e),
        (t[14] = n),
        (t[15] = r))
      : (r = t[15]),
      (C = r));
  } else if (o != null) {
    let e;
    t[16] !== a.description || t[17] !== a.name
      ? ((e = (0, Q.jsx)(B, { label: a.name, description: a.description, control: null })),
        (t[16] = a.description),
        (t[17] = a.name),
        (t[18] = e))
      : (e = t[18]);
    let r;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(V, {
          id: `workspaceAgents.resources.historicalSkill`,
          defaultMessage: `Published skill snapshot`,
          description: `Label for a skill inspected from an older agent publication`,
        })),
        (t[19] = r))
      : (r = t[19]);
    let i;
    t[20] === y
      ? (i = t[21])
      : ((i = (0, Q.jsx)(B, {
          label: r,
          description: y
            ? (0, Q.jsx)(V, {
                id: `workspaceAgents.resources.historicalSharedSkill`,
                defaultMessage: `This version uses a shared workspace skill`,
                description: `Explains that an older agent version references a skill managed separately in the workspace`,
              })
            : (0, Q.jsx)(V, {
                id: `workspaceAgents.resources.historicalSkillFiles`,
                defaultMessage: `Open Files to inspect the instructions and files saved with this version`,
                description: `Explains how to inspect historical skill content without showing the current draft settings`,
              }),
          control: null,
        })),
        (t[20] = y),
        (t[21] = i));
    let o;
    (t[22] !== e || t[23] !== i
      ? ((o = (0, Q.jsxs)(n, { children: [e, i] })), (t[22] = e), (t[23] = i), (t[24] = o))
      : (o = t[24]),
      (C = o));
  } else {
    let e = s && !y,
      n;
    (t[25] !== i || t[26] !== c || t[27] !== a || t[28] !== e
      ? ((n = (0, Q.jsx)(wt, { agentId: i, skill: a, canEdit: e, onChanged: c })),
        (t[25] = i),
        (t[26] = c),
        (t[27] = a),
        (t[28] = e),
        (t[29] = n))
      : (n = t[29]),
      (C = n));
  }
  let w;
  t[30] !== x || t[31] !== d || t[32] !== y || t[33] !== o
    ? ((w =
        !y && o == null
          ? (0, Q.jsx)(k, {
              type: `button`,
              color: `secondary`,
              size: `toolbar`,
              loading: d,
              onClick: () => void x(),
              children: (0, Q.jsx)(V, {
                id: `workspaceAgents.resources.downloadSkill`,
                defaultMessage: `Download skill`,
                description: `Button that downloads the current uploaded skill as a ZIP archive`,
              }),
            })
          : null),
      (t[30] = x),
      (t[31] = d),
      (t[32] = y),
      (t[33] = o),
      (t[34] = w))
    : (w = t[34]);
  let T;
  t[35] === p
    ? (T = t[36])
    : ((T = p
        ? (0, Q.jsx)(Y, {
            children: (0, Q.jsx)(V, {
              id: `workspaceAgents.resources.skillDownloadFailed`,
              defaultMessage: `Could not download this skill`,
              description: `Error when the uploaded agent skill archive could not be downloaded`,
            }),
          })
        : null),
      (t[35] = p),
      (t[36] = T));
  let E;
  t[37] !== i ||
  t[38] !== h ||
  t[39] !== l ||
  t[40] !== g ||
  t[41] !== u ||
  t[42] !== y ||
  t[43] !== a.chatgpt_skill_id ||
  t[44] !== a.id ||
  t[45] !== _
    ? ((E = y
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`p`, {
                children: (0, Q.jsx)(V, {
                  id: `workspaceAgents.resources.sharedSkill`,
                  defaultMessage: `This skill is managed in the skill editor`,
                  description: `Explains why a shared workspace skill cannot be edited from one agent`,
                }),
              }),
              (0, Q.jsx)(D, {
                to: `/skills/editor/${encodeURIComponent(a.chatgpt_skill_id)}`,
                color: `secondary`,
                size: `toolbar`,
                onClick: l,
                children: (0, Q.jsx)(V, {
                  id: `workspaceAgents.resources.openSkill`,
                  defaultMessage: `Open skill editor`,
                  description: `Link to the shared workspace skill's own editor`,
                }),
              }),
            ],
          })
        : (0, Q.jsx)(je, {
            selectedKey: _,
            onSelect: (e) => {
              (Ge(u, {
                actionType: Ve.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_VIEW_MODE_CHANGE,
                source: Be.CHATGPT_AGENT_BUILDER_SOURCE_SKILL_DETAIL,
                agentId: i,
                skill: {
                  skillId: a.id,
                  skillViewMode:
                    e === `files`
                      ? Ue.CHATGPT_AGENT_BUILDER_SKILL_VIEW_MODE_FILES
                      : Ue.CHATGPT_AGENT_BUILDER_SKILL_VIEW_MODE_OVERVIEW,
                },
              }),
                v(e));
            },
            variant: `toolbar`,
            ariaLabel: h.formatMessage({
              id: `workspaceAgents.resources.skillViews`,
              defaultMessage: `Skill view`,
              description: `Accessible label for switching between a skill's settings and files`,
            }),
            tabs: [
              {
                key: `overview`,
                panelId: `${g}-overview`,
                name: (0, Q.jsx)(V, {
                  id: `workspaceAgents.resources.skillOverview`,
                  defaultMessage: `Overview`,
                  description: `Tab that shows a workspace agent skill's settings`,
                }),
              },
              {
                key: `files`,
                panelId: `${g}-files`,
                name: (0, Q.jsx)(V, {
                  id: `workspaceAgents.resources.skillFiles`,
                  defaultMessage: `Files`,
                  description: `Tab that shows files included in a workspace agent skill`,
                }),
              },
            ],
          })),
      (t[37] = i),
      (t[38] = h),
      (t[39] = l),
      (t[40] = g),
      (t[41] = u),
      (t[42] = y),
      (t[43] = a.chatgpt_skill_id),
      (t[44] = a.id),
      (t[45] = _),
      (t[46] = E))
    : (E = t[46]);
  let O = `${g}-${_}`,
    A = y ? void 0 : `tabpanel`,
    j = y ? void 0 : `${g}-${_}-tab`,
    M;
  t[47] !== C || t[48] !== O || t[49] !== A || t[50] !== j
    ? ((M = (0, Q.jsx)(`div`, { id: O, role: A, "aria-labelledby": j, children: C })),
      (t[47] = C),
      (t[48] = O),
      (t[49] = A),
      (t[50] = j),
      (t[51] = M))
    : (M = t[51]);
  let N;
  return (
    t[52] !== w || t[53] !== T || t[54] !== E || t[55] !== M
      ? ((N = (0, Q.jsxs)(`div`, { className: `flex min-h-0 flex-col gap-4`, children: [w, T, E, M] })),
        (t[52] = w),
        (t[53] = T),
        (t[54] = E),
        (t[55] = M),
        (t[56] = N))
      : (N = t[56]),
    N
  );
}
function wt(e) {
  let t = (0, Et.c)(10),
    { agentId: n, skill: r, canEdit: i, onChanged: a } = e,
    o = L(Pe),
    s = L(J);
  if (o == null || s == null) return null;
  let c = `${o}:${s}:${n}:${r.id}`,
    l;
  t[0] !== o || t[1] !== s
    ? ((l = { accountId: o, userId: s }), (t[0] = o), (t[1] = s), (t[2] = l))
    : (l = t[2]);
  let u;
  return (
    t[3] !== n || t[4] !== i || t[5] !== a || t[6] !== r.id || t[7] !== c || t[8] !== l
      ? ((u = (0, Q.jsx)(Tt, { identity: l, agentId: n, skillId: r.id, canEdit: i, onChanged: a }, c)),
        (t[3] = n),
        (t[4] = i),
        (t[5] = a),
        (t[6] = r.id),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function Tt(e) {
  let i = (0, Et.c)(59),
    { identity: a, agentId: o, skillId: s, canEdit: c, onChanged: l } = e,
    u = r(S),
    d = (0, Dt.useId)(),
    f = re(),
    [p, m] = (0, Dt.useState)(!1),
    h;
  i[0] !== o || i[1] !== a ? ((h = { ...a, agentId: o }), (i[0] = o), (i[1] = a), (i[2] = h)) : (h = i[2]);
  let g = ae(ot, h),
    _ = L(g.drafts$),
    v;
  i[3] !== o || i[4] !== s
    ? ((v = { agentId: o, skillId: s }), (i[3] = o), (i[4] = s), (i[5] = v))
    : (v = i[5]);
  let { data: y, error: b, isPending: x, refetch: C } = ne(Ye, v),
    w;
  i[6] !== o ||
  i[7] !== c ||
  i[8] !== y?.icon?.color ||
  i[9] !== a ||
  i[10] !== l ||
  i[11] !== u ||
  i[12] !== s
    ? ((w = async function (e, t, n) {
        let r = () => {
          if (
            (n.throwIfAborted(), !c || u.get(Pe) !== a.accountId || u.get(J) !== a.userId || u.get(ye) !== !0)
          )
            throw Error(`Skill access changed`);
        };
        r();
        let i = await be.safeGet(`/hermes/agent/{agent_id}/builder-view`, {
          parameters: { path: { agent_id: o } },
          signal: n,
          expectedIdentity: a,
        });
        if ((r(), ![`hermes_admin`, `hermes_write`].includes(i.agent.viewer_capability)))
          throw Error(`This agent is no longer editable`);
        let d = {
            [e]: e === `icon` ? { name: t, color: y?.icon?.color ?? `` } : t,
            expected_draft_version_id: i.draft_version.id,
            expected_draft_revision: i.draft_revision,
          },
          f = await be.safePost(`/hermes/agent/{agent_id}/skills/{skill_id}/definition`, {
            parameters: { path: { agent_id: o, skill_id: s } },
            requestBody: d,
            signal: n,
            expectedIdentity: a,
          });
        (r(), u.query.setData(Ye, { agentId: o, skillId: s }, f));
        try {
          (await Promise.all([
            u.queryClient.invalidateQueries({
              queryKey: [`workspace-agent`, `files`, a.accountId, a.userId, o, s],
            }),
            l(),
          ]),
            m(!1));
        } catch {
          m(!0);
        }
      }),
      (i[6] = o),
      (i[7] = c),
      (i[8] = y?.icon?.color),
      (i[9] = a),
      (i[10] = l),
      (i[11] = u),
      (i[12] = s),
      (i[13] = w))
    : (w = i[13]);
  let T = w;
  if (x) {
    let e;
    return (
      i[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(t, {})), (i[14] = e))
        : (e = i[14]),
      e
    );
  }
  if (b != null || y == null) {
    let e;
    return (
      i[15] === C
        ? (e = i[16])
        : ((e = (0, Q.jsx)(Y, { onRetry: () => void C() })), (i[15] = C), (i[16] = e)),
      e
    );
  }
  let E;
  i[17] !== _ || i[18] !== s
    ? ((E = _.get(`skill:${s}:icon`)), (i[17] = _), (i[18] = s), (i[19] = E))
    : (E = i[19]);
  let D = E,
    O = D?.content ?? y.icon?.name ?? `default`,
    A;
  i[20] !== c || i[21] !== g
    ? ((A = (e) => {
        (e.preventDefault(), c && g.flushAll());
      }),
      (i[20] = c),
      (i[21] = g),
      (i[22] = A))
    : (A = i[22]);
  let j;
  i[23] !== l || i[24] !== p
    ? ((j = p
        ? (0, Q.jsx)(Y, {
            onRetry: () =>
              void l()
                .then(() => m(!1))
                .catch(() => m(!0)),
            children: (0, Q.jsx)(V, {
              id: `workspaceAgents.resources.skillRefreshFailed`,
              defaultMessage: `Your changes were saved, but the latest agent draft could not be loaded`,
              description: `Error when a skill was saved but the agent draft could not be refreshed; retry reloads the draft without repeating the write`,
            }),
          })
        : null),
      (i[23] = l),
      (i[24] = p),
      (i[25] = j))
    : (j = i[25]);
  let M;
  i[26] !== c || i[27] !== y || i[28] !== O || i[29] !== f || i[30] !== g || i[31] !== T || i[32] !== s
    ? ((M = c
        ? (0, Q.jsx)(oe, {
            contentWidth: `menuWide`,
            triggerButton: (0, Q.jsxs)(k, {
              type: `button`,
              color: `secondary`,
              size: `toolbar`,
              children: [
                (0, Q.jsx)(yt, { name: O }),
                (0, Q.jsx)(V, {
                  id: `workspaceAgents.resources.skillIcon`,
                  defaultMessage: `Skill icon`,
                  description: `Button that opens the icon picker for an uploaded agent skill`,
                }),
              ],
            }),
            children: (0, Q.jsx)(Ie, {
              variant: `icon`,
              selectedId: O,
              options: [
                {
                  id: `default`,
                  label: f.formatMessage({
                    id: `workspaceAgents.skillIcon.default`,
                    defaultMessage: `Default`,
                    description: `Name of the default cube icon in the workspace agent skill icon picker`,
                  }),
                  icon: (0, Q.jsx)(yt, {}),
                },
                ...Array.from(lt, (e) => {
                  let [t, n] = e;
                  return { id: t, label: f.formatMessage(n.label), icon: (0, Q.jsx)(yt, { name: t }) };
                }),
              ],
              onChange: (e) =>
                g.request(`skill:${s}:icon`, e, y.icon?.name ?? `default`, s, (e, t) => T(`icon`, e, t)),
            }),
          })
        : null),
      (i[26] = c),
      (i[27] = y),
      (i[28] = O),
      (i[29] = f),
      (i[30] = g),
      (i[31] = T),
      (i[32] = s),
      (i[33] = M))
    : (M = i[33]);
  let N;
  i[34] !== D?.status || i[35] !== g || i[36] !== s
    ? ((N =
        D?.status === `failed`
          ? (0, Q.jsx)(Y, {
              onRetry: () => void g.flush(`skill:${s}:icon`),
              children: (0, Q.jsx)(V, {
                id: `workspaceAgents.resources.skillIconSaveFailed`,
                defaultMessage: `Could not save the skill icon`,
                description: `Error when the selected icon for an uploaded agent skill could not be saved`,
              }),
            })
          : null),
      (i[34] = D?.status),
      (i[35] = g),
      (i[36] = s),
      (i[37] = N))
    : (N = i[37]);
  let P;
  i[38] !== c || i[39] !== y || i[40] !== _ || i[41] !== d || i[42] !== g || i[43] !== T || i[44] !== s
    ? ((P = Ot.map((e) => {
        let t = `skill:${s}:definition:${e}`,
          n = _.get(t),
          r = !c || e === `default_prompt`,
          i = n?.content ?? y[e] ?? ``,
          a = (n) => g.request(t, n, y[e] ?? ``, s, (t, n) => T(e, t, n));
        return (0, Q.jsx)(
          B,
          {
            label: (0, Q.jsx)(`label`, { htmlFor: `${d}-${e}`, children: (0, Q.jsx)(V, { ...kt[e] }) }),
            control:
              e === `instructions` || e === `skill_description`
                ? (0, Q.jsx)(q, {
                    id: `${d}-${e}`,
                    value: i,
                    readOnly: r,
                    onChange: (e) => a(e.target.value),
                    onBlur: () => {
                      r || g.flush(t);
                    },
                  })
                : (0, Q.jsx)(pe, {
                    id: `${d}-${e}`,
                    variant: `ghost`,
                    value: i,
                    readOnly: r,
                    onChange: (e) => a(e.target.value),
                    onBlur: () => {
                      r || g.flush(t);
                    },
                  }),
            description:
              n?.status === `failed`
                ? (0, Q.jsx)(Y, {
                    onRetry: () => void g.flush(t),
                    children: (0, Q.jsx)(V, {
                      id: `workspaceAgents.resources.skillSaveFailed`,
                      defaultMessage: `Could not save this change. Your edits are still here.`,
                      description: `Error when a skill setting could not be saved; the pending value is retained for retry`,
                    }),
                  })
                : void 0,
          },
          e,
        );
      })),
      (i[38] = c),
      (i[39] = y),
      (i[40] = _),
      (i[41] = d),
      (i[42] = g),
      (i[43] = T),
      (i[44] = s),
      (i[45] = P))
    : (P = i[45]);
  let F;
  i[46] === P ? (F = i[47]) : ((F = (0, Q.jsx)(n, { children: P })), (i[46] = P), (i[47] = F));
  let I;
  i[48] === c
    ? (I = i[49])
    : ((I = c
        ? (0, Q.jsx)(k, {
            type: `submit`,
            color: `primary`,
            size: `toolbar`,
            children: (0, Q.jsx)(V, {
              id: `workspaceAgents.resources.saveSkill`,
              defaultMessage: `Save changes`,
              description: `Button that saves pending settings for a workspace agent skill`,
            }),
          })
        : null),
      (i[48] = c),
      (i[49] = I));
  let ee;
  i[50] !== F || i[51] !== I || i[52] !== j || i[53] !== M || i[54] !== N
    ? ((ee = (0, Q.jsxs)(De, { children: [j, M, N, F, I] })),
      (i[50] = F),
      (i[51] = I),
      (i[52] = j),
      (i[53] = M),
      (i[54] = N),
      (i[55] = ee))
    : (ee = i[55]);
  let R;
  return (
    i[56] !== ee || i[57] !== A
      ? ((R = (0, Q.jsx)(`form`, { onSubmit: A, children: ee })), (i[56] = ee), (i[57] = A), (i[58] = R))
      : (R = i[58]),
    R
  );
}
var Et, Dt, Q, Ot, kt;
function At() {
  return (At = e(() => {
    ((Et = y()),
      He(),
      N(),
      (Dt = s()),
      O(),
      Me(),
      he(),
      Ae(),
      le(),
      M(),
      P(),
      F(),
      ve(),
      W(),
      Fe(),
      i(),
      ge(),
      H(),
      I(),
      we(),
      Ke(),
      qe(),
      St(),
      ut(),
      vt(),
      at(),
      Je(),
      (Q = p()),
      (Ot = [
        `skill_name`,
        `display_name`,
        `short_description`,
        `skill_description`,
        `default_prompt`,
        `instructions`,
      ]),
      (kt = A({
        skill_name: {
          id: `workspaceAgents.resources.skillName`,
          defaultMessage: `Name`,
          description: `Label for the internal name in a workspace agent skill's definition`,
        },
        display_name: {
          id: `workspaceAgents.resources.skillDisplayName`,
          defaultMessage: `Display name`,
          description: `Label for the name shown to people who use a workspace agent skill`,
        },
        skill_description: {
          id: `workspaceAgents.resources.skillDescription`,
          defaultMessage: `Description`,
          description: `Label for the description of a workspace agent skill's purpose`,
        },
        short_description: {
          id: `workspaceAgents.resources.skillShortDescription`,
          defaultMessage: `Short description`,
          description: `Label for a compact description of a workspace agent skill`,
        },
        default_prompt: {
          id: `workspaceAgents.resources.skillDefaultPrompt`,
          defaultMessage: `Default prompt`,
          description: `Label for the saved default prompt of a workspace agent skill`,
        },
        instructions: {
          id: `workspaceAgents.resources.skillInstructions`,
          defaultMessage: `Instructions`,
          description: `Label for the instructions in a workspace agent skill's definition`,
        },
      })));
  }))();
}
function jt(e) {
  let t = (0, Mt.c)(31),
    { agentId: n, resource: r, canEdit: i, onChanged: a, onClose: o, onNavigate: s } = e,
    c,
    l;
  bb0: switch (r.type) {
    case `files`: {
      let e;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(V, {
            id: `workspaceAgents.resources.filesTitle`,
            defaultMessage: `Reference files`,
            description: `Title of the dialog for files available to an agent`,
          })),
          (t[0] = e))
        : (e = t[0]),
        (c = e));
      let o;
      t[1] !== n || t[2] !== r.versionId
        ? ((o = { agentId: n, skillId: null, versionId: r.versionId }),
          (t[1] = n),
          (t[2] = r.versionId),
          (t[3] = o))
        : (o = t[3]);
      let s = !i,
        u;
      (t[4] !== a || t[5] !== o || t[6] !== s
        ? ((u = (0, $.jsx)(dt, { location: o, readOnly: s, onChanged: a })),
          (t[4] = a),
          (t[5] = o),
          (t[6] = s),
          (t[7] = u))
        : (u = t[7]),
        (l = u));
      break bb0;
    }
    case `skill`: {
      c = r.skill.name;
      let e = i && r.versionId == null,
        o;
      (t[8] !== n || t[9] !== a || t[10] !== s || t[11] !== r.skill || t[12] !== r.versionId || t[13] !== e
        ? ((o = (0, $.jsx)(Ct, {
            agentId: n,
            skill: r.skill,
            versionId: r.versionId,
            canEdit: e,
            onChanged: a,
            onNavigate: s,
          })),
          (t[8] = n),
          (t[9] = a),
          (t[10] = s),
          (t[11] = r.skill),
          (t[12] = r.versionId),
          (t[13] = e),
          (t[14] = o))
        : (o = t[14]),
        (l = o));
      break bb0;
    }
    case `memory`: {
      let e;
      (t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(V, {
            id: `workspaceAgents.resources.memoryTitle`,
            defaultMessage: `Memory`,
            description: `Title of the dialog for persistent files saved by an agent`,
          })),
          (t[15] = e))
        : (e = t[15]),
        (c = e));
      let i;
      (t[16] !== n || t[17] !== r.version
        ? ((i = (0, $.jsx)(ct, { agentId: n, version: r.version, canViewConfig: !0 })),
          (t[16] = n),
          (t[17] = r.version),
          (t[18] = i))
        : (i = t[18]),
        (l = i));
    }
  }
  let d;
  t[19] === o
    ? (d = t[20])
    : ((d = (e) => {
        e || o();
      }),
      (t[19] = o),
      (t[20] = d));
  let f;
  t[21] === c
    ? (f = t[22])
    : ((f = (0, $.jsx)(C, { title: (0, $.jsx)(z, { children: c }) })), (t[21] = c), (t[22] = f));
  let p;
  t[23] === l ? (p = t[24]) : ((p = (0, $.jsx)(U, { children: l })), (t[23] = l), (t[24] = p));
  let m;
  t[25] !== f || t[26] !== p
    ? ((m = (0, $.jsxs)(u, { size: `viewport`, children: [f, p] })), (t[25] = f), (t[26] = p), (t[27] = m))
    : (m = t[27]);
  let h;
  return (
    t[28] !== d || t[29] !== m
      ? ((h = (0, $.jsx)(E, { open: !0, size: `wide`, onOpenChange: d, children: m })),
        (t[28] = d),
        (t[29] = m),
        (t[30] = h))
      : (h = t[30]),
    h
  );
}
var Mt, $;
function Nt() {
  return (Nt = e(() => {
    ((Mt = y()), O(), d(), l(), st(), vt(), At(), ($ = p()));
  }))();
}
Nt();
export { jt as WorkspaceAgentResourceDialog };
//# sourceMappingURL=dialog-e084a13321c6.js.map
