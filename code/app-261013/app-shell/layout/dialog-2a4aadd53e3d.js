import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  ADt as r,
  AO as i,
  CO as a,
  Cot as o,
  Fat as s,
  IDt as c,
  Ixt as l,
  JC as u,
  Mz as d,
  Nz as f,
  Pat as p,
  Pxt as m,
  Qv as h,
  Rxt as g,
  TJ as _,
  TO as v,
  VDt as ee,
  Vxt as y,
  Xot as b,
  Yot as x,
  _Mt as S,
  _O as C,
  bH as w,
  bS as T,
  cH as E,
  cO as D,
  e3 as O,
  fO as k,
  gMt as A,
  i3 as j,
  iw as M,
  jDt as N,
  lO as P,
  mO as F,
  oO as I,
  ob as L,
  qC as te,
  r3 as ne,
  sO as R,
  sb as z,
  t3 as B,
  tU as re,
  tw as V,
  vO as H,
  vzt as U,
  wot as W,
  xMt as G,
  yS as ie,
  yzt as K,
  zxt as ae,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as q,
  $f as oe,
  CKn as J,
  Cwr as Y,
  DPn as se,
  EPn as ce,
  Ek as le,
  GMr as ue,
  IGn as de,
  Js as fe,
  Qmr as pe,
  TGn as me,
  TPn as he,
  Tk as ge,
  Xct as _e,
  YMr as ve,
  Ymr as ye,
  Zmr as be,
  cct as xe,
  co as Se,
  ehr as Ce,
  ep as we,
  gwr as Te,
  lo as Ee,
  nT as De,
  qs as Oe,
  rT as ke,
  tNr as Ae,
  tp as je,
  uct as Me,
  wKn as Ne,
} from "./app-initial-5851df3f6cb1.js";
import { n as Pe, t as Fe } from "./appearance-picker-button-c44f9fe2eb96.js";
import { i as Ie, n as Le, r as Re } from "./surface-3fad834862de.js";
import {
  _ as ze,
  a as Be,
  b as Ve,
  h as He,
  i as Ue,
  n as We,
  t as Ge,
} from "./builder-analytics-f0ccbf8827ee.js";
import { n as Ke, t as X } from "./read-error-29adc71a8032.js";
import { n as qe, r as Je } from "./queries-7e1c4488b01f.js";
import {
  a as Ye,
  c as Xe,
  i as Ze,
  l as Qe,
  n as $e,
  o as et,
  r as tt,
  s as nt,
  t as rt,
} from "./files-data-970a69a85625.js";
import { n as it, r as at } from "./local-edits-964c84b11a77.js";
import { n as ot, t as st } from "./memory-fe8ee0015df7.js";
import { n as ct, t as lt } from "./workspace-agent-skill-icons-8e48380d39c1.js";
function ut(e) {
  let t = (0, gt.c)(9),
    { location: n, readOnly: r, onChanged: i } = e,
    a = y(ue),
    o = y(ve);
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
      ? ((u = (0, Q.jsx)(dt, { identity: c, location: n, readOnly: l, onChanged: i }, s)),
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
function dt(e) {
  let n = (0, gt.c)(111),
    { identity: r, location: i, readOnly: s, onChanged: u } = e,
    d = l(o),
    f = ee(),
    p = ke(),
    m = (0, Z.useRef)(null),
    g = (0, Z.useRef)(null),
    _ = (0, Z.useRef)(null),
    [y, b] = (0, Z.useState)(null),
    [x, S] = (0, Z.useState)(null),
    [C, T] = (0, Z.useState)(``),
    [E, D] = (0, Z.useState)(!1),
    [O, k] = (0, Z.useState)(!1),
    [A, j] = (0, Z.useState)(!1),
    M,
    N;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => () => _.current?.abort()), (N = []), (n[0] = M), (n[1] = N))
    : ((M = n[0]), (N = n[1])),
    (0, Z.useEffect)(M, N));
  let P;
  n[2] !== i || n[3] !== y ? ((P = { ...i, nodeId: y }), (n[2] = i), (n[3] = y), (n[4] = P)) : (P = n[4]);
  let {
      data: F,
      error: I,
      isPending: L,
      refetch: te,
      fetchNextPage: R,
      hasNextPage: z,
      isFetchingNextPage: B,
    } = ae(rt, P),
    V = F?.pages[0]?.node,
    H,
    U,
    W,
    G,
    K,
    q,
    oe,
    J,
    Y,
    se,
    ce;
  if (
    n[5] !== F ||
    n[6] !== I ||
    n[7] !== r ||
    n[8] !== f ||
    n[9] !== p ||
    n[10] !== L ||
    n[11] !== i ||
    n[12] !== V ||
    n[13] !== y ||
    n[14] !== u ||
    n[15] !== E ||
    n[16] !== s ||
    n[17] !== te ||
    n[18] !== A ||
    n[19] !== d ||
    n[20] !== O
  ) {
    let e = F?.pages.flatMap(pt),
      o;
    n[32] !== r.accountId || n[33] !== r.userId || n[34] !== p || n[35] !== d
      ? ((o = () => p() && d.get(ue) === r.accountId && d.get(ve) === r.userId),
        (n[32] = r.accountId),
        (n[33] = r.userId),
        (n[34] = p),
        (n[35] = d),
        (n[36] = o))
      : (o = n[36]);
    let l = o,
      ee;
    n[37] !== r.accountId ||
    n[38] !== r.userId ||
    n[39] !== l ||
    n[40] !== i.agentId ||
    n[41] !== i.skillId ||
    n[42] !== u ||
    n[43] !== d.queryClient
      ? ((ee = async function () {
          (await Promise.all([
            d.queryClient.invalidateQueries({
              queryKey: [`workspace-agent`, `files`, r.accountId, r.userId, i.agentId, i.skillId],
            }),
            u(),
          ]),
            l() && j(!1));
        }),
        (n[37] = r.accountId),
        (n[38] = r.userId),
        (n[39] = l),
        (n[40] = i.agentId),
        (n[41] = i.skillId),
        (n[42] = u),
        (n[43] = d.queryClient),
        (n[44] = ee))
      : (ee = n[44]);
    let x = ee,
      C;
    (n[45] !== r || n[46] !== l || n[47] !== i || n[48] !== s || n[49] !== x || n[50] !== d
      ? ((C = async function (e) {
          if (s || _.current != null) return;
          let t = new AbortController();
          ((_.current = t), D(!0), k(!1));
          let n = d.watch((e) => {
            (e.get(ue) !== r.accountId || e.get(ve) !== r.userId) && t.abort();
          });
          await (async () => {
            try {
              if (
                (e.type === `upload-files`
                  ? await Qe(d, r, i, e.parentId, e.files, t.signal)
                  : await nt(d, r, i, e, t.signal),
                !l())
              )
                return;
              S(null);
            } catch {
              l() && k(!0);
            }
            l() &&
              (await x().catch(() => {
                l() && j(!0);
              }));
          })().finally(() => {
            (n(), (_.current = null), l() && D(!1));
          });
        }),
        (n[45] = r),
        (n[46] = l),
        (n[47] = i),
        (n[48] = s),
        (n[49] = x),
        (n[50] = d),
        (n[51] = C))
      : (C = n[51]),
      (H = C),
      (q = `flex min-h-0 flex-col gap-4`));
    let M;
    n[52] === f
      ? (M = n[53])
      : ((M = f.formatMessage({
          id: `workspaceAgents.resources.fileNavigation`,
          defaultMessage: `File navigation`,
          description: `Accessible label for navigation within an agent or skill file folder`,
        })),
        (n[52] = f),
        (n[53] = M));
    let N;
    n[54] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((N = (0, Q.jsx)(t, {
          type: `button`,
          color: `ghost`,
          size: `toolbar`,
          onClick: () => b(null),
          children: (0, Q.jsx)(c, {
            id: `workspaceAgents.resources.filesRoot`,
            defaultMessage: `Files`,
            description: `Button that opens the root folder of an agent or skill`,
          }),
        })),
        (n[54] = N))
      : (N = n[54]);
    let P;
    n[55] === V?.recursive_parents
      ? (P = n[56])
      : ((P = V?.recursive_parents
          ?.filter(ft)
          .map((e) =>
            (0, Q.jsx)(
              t,
              { type: `button`, color: `ghost`, size: `toolbar`, onClick: () => b(e.id), children: e.name },
              e.id,
            ),
          )),
        (n[55] = V?.recursive_parents),
        (n[56] = P));
    let R;
    (n[57] !== V || n[58] !== y
      ? ((R = y != null && V != null ? (0, Q.jsx)(`span`, { className: `text-sm`, children: V.name }) : null),
        (n[57] = V),
        (n[58] = y),
        (n[59] = R))
      : (R = n[59]),
      n[60] !== M || n[61] !== P || n[62] !== R
        ? ((oe = (0, Q.jsxs)(`nav`, {
            className: `flex flex-wrap items-center gap-2`,
            "aria-label": M,
            children: [N, P, R],
          })),
          (n[60] = M),
          (n[61] = P),
          (n[62] = R),
          (n[63] = oe))
        : (oe = n[63]),
      n[64] !== f || n[65] !== H || n[66] !== V || n[67] !== E || n[68] !== s
        ? ((J =
            !s && V?.kind === `folder`
              ? (0, Q.jsxs)(`div`, {
                  className: `flex flex-wrap gap-2`,
                  children: [
                    (0, Q.jsx)(t, {
                      type: `button`,
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: E,
                      onClick: () => {
                        (T(``), S({ type: `folder` }));
                      },
                      children: (0, Q.jsx)(c, {
                        id: `workspaceAgents.resources.newFolder`,
                        defaultMessage: `New folder`,
                        description: `Button that creates a folder for agent reference files or skill files`,
                      }),
                    }),
                    (0, Q.jsx)(t, {
                      type: `button`,
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: E,
                      onClick: () => m.current?.click(),
                      children: (0, Q.jsx)(c, {
                        id: `workspaceAgents.resources.uploadFiles`,
                        defaultMessage: `Upload files`,
                        description: `Button that adds reference files to the current agent or skill folder`,
                      }),
                    }),
                    (0, Q.jsx)(t, {
                      type: `button`,
                      color: `secondary`,
                      size: `toolbar`,
                      disabled: E,
                      onClick: () => g.current?.click(),
                      children: (0, Q.jsx)(c, {
                        id: `workspaceAgents.resources.uploadFolder`,
                        defaultMessage: `Upload folder`,
                        description: `Button that adds a folder and its files to the current agent or skill folder`,
                      }),
                    }),
                    (0, Q.jsx)(`input`, {
                      ref: m,
                      type: `file`,
                      hidden: !0,
                      multiple: !0,
                      "aria-label": f.formatMessage({
                        id: `workspaceAgents.resources.chooseFiles`,
                        defaultMessage: `Choose files`,
                        description: `Accessible label for the agent or skill file upload control`,
                      }),
                      onChange: (e) => {
                        let t = Array.from(e.currentTarget.files ?? []);
                        ((e.currentTarget.value = ``),
                          t.length > 0 && H({ type: `upload-files`, parentId: V.id, files: t }));
                      },
                    }),
                    (0, Q.jsx)(`input`, {
                      ref: g,
                      type: `file`,
                      hidden: !0,
                      multiple: !0,
                      webkitdirectory: ``,
                      "aria-label": f.formatMessage({
                        id: `workspaceAgents.resources.chooseFolder`,
                        defaultMessage: `Choose a folder`,
                        description: `Accessible label for the agent or skill folder upload control`,
                      }),
                      onChange: (e) => {
                        let t = Array.from(e.currentTarget.files ?? []);
                        ((e.currentTarget.value = ``),
                          t.length > 0 && H({ type: `upload-files`, parentId: V.id, files: t }));
                      },
                    }),
                  ],
                })
              : null),
          (n[64] = f),
          (n[65] = H),
          (n[66] = V),
          (n[67] = E),
          (n[68] = s),
          (n[69] = J))
        : (J = n[69]),
      n[70] === L ? (Y = n[71]) : ((Y = L ? (0, Q.jsx)(ne, {}) : null), (n[70] = L), (n[71] = Y)),
      n[72] !== I || n[73] !== te
        ? ((se = I == null ? null : (0, Q.jsx)(X, { onRetry: () => void te() })),
          (n[72] = I),
          (n[73] = te),
          (n[74] = se))
        : (se = n[74]),
      n[75] === O
        ? (ce = n[76])
        : ((ce = O
            ? (0, Q.jsx)(X, {
                children: (0, Q.jsx)(c, {
                  id: `workspaceAgents.resources.writeFailed`,
                  defaultMessage: `Could not complete the file change. Check the current files before trying again.`,
                  description: `Error after an agent or skill file operation failed; some upload steps may have completed`,
                }),
              })
            : null),
          (n[75] = O),
          (n[76] = ce)),
      n[77] !== x || n[78] !== A
        ? ((U = A
            ? (0, Q.jsx)(X, {
                onRetry: () => void x().catch(() => j(!0)),
                children: (0, Q.jsx)(c, {
                  id: `workspaceAgents.resources.refreshFailed`,
                  defaultMessage: `Could not load the latest files`,
                  description: `Error when the file list could not be refreshed after an agent or skill file operation`,
                }),
              })
            : null),
          (n[77] = x),
          (n[78] = A),
          (n[79] = U))
        : (U = n[79]),
      n[80] !== r || n[81] !== l || n[82] !== i || n[83] !== V || n[84] !== s || n[85] !== x
        ? ((W =
            V?.kind === `file`
              ? (0, Q.jsx)(
                  ht,
                  {
                    identity: r,
                    location: i,
                    node: V,
                    readOnly: s || (i.skillId != null && et(V)),
                    onChanged: async () => {
                      try {
                        await x();
                      } catch {
                        l() && j(!0);
                      }
                    },
                  },
                  V.id,
                )
              : null),
          (n[80] = r),
          (n[81] = l),
          (n[82] = i),
          (n[83] = V),
          (n[84] = s),
          (n[85] = x),
          (n[86] = W))
        : (W = n[86]),
      (G =
        !L && I == null && ((F != null && V == null) || (V?.kind === `folder` && e?.length === 0))
          ? (0, Q.jsx)(ie, {
              icon: (0, Q.jsx)(re, {}),
              title: (0, Q.jsx)(c, {
                id: `workspaceAgents.resources.emptyFolder`,
                defaultMessage: `No files yet`,
                description: `Empty state in an agent reference folder or skill folder`,
              }),
            })
          : null),
      (K =
        I == null
          ? e?.map((e) =>
              (0, Q.jsx)(
                _e,
                {
                  density: `compact`,
                  isSelected: !1,
                  title: e.name,
                  ariaLabel: e.name,
                  icon: e.kind === `folder` ? (0, Q.jsx)(re, {}) : (0, Q.jsx)(w, {}),
                  onSelect: () => b(e.id),
                  hasInteractiveContent: !0,
                  rightText:
                    s || (i.skillId != null && et(e))
                      ? null
                      : (0, Q.jsxs)(a, {
                          contentWidth: `menu`,
                          triggerButton: (0, Q.jsx)(h, {
                            disabled: E,
                            label: f.formatMessage({
                              id: `workspaceAgents.resources.fileActions`,
                              defaultMessage: `File actions`,
                              description: `Accessible label for the menu to rename or delete an agent or skill file`,
                            }),
                          }),
                          children: [
                            (0, Q.jsx)(v.Item, {
                              onSelect: () => {
                                (T(e.name), S({ type: `rename`, node: e }));
                              },
                              children: (0, Q.jsx)(c, {
                                id: `workspaceAgents.resources.rename`,
                                defaultMessage: `Rename`,
                                description: `Menu action that renames an agent or skill file or folder`,
                              }),
                            }),
                            (0, Q.jsx)(v.Item, {
                              onSelect: () => S({ type: `delete`, node: e }),
                              children: (0, Q.jsx)(c, {
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
      (n[5] = F),
      (n[6] = I),
      (n[7] = r),
      (n[8] = f),
      (n[9] = p),
      (n[10] = L),
      (n[11] = i),
      (n[12] = V),
      (n[13] = y),
      (n[14] = u),
      (n[15] = E),
      (n[16] = s),
      (n[17] = te),
      (n[18] = A),
      (n[19] = d),
      (n[20] = O),
      (n[21] = H),
      (n[22] = U),
      (n[23] = W),
      (n[24] = G),
      (n[25] = K),
      (n[26] = q),
      (n[27] = oe),
      (n[28] = J),
      (n[29] = Y),
      (n[30] = se),
      (n[31] = ce));
  } else
    ((H = n[21]),
      (U = n[22]),
      (W = n[23]),
      (G = n[24]),
      (K = n[25]),
      (q = n[26]),
      (oe = n[27]),
      (J = n[28]),
      (Y = n[29]),
      (se = n[30]),
      (ce = n[31]));
  let le;
  n[87] !== R || n[88] !== z || n[89] !== B
    ? ((le = z
        ? (0, Q.jsx)(t, {
            type: `button`,
            color: `secondary`,
            size: `toolbar`,
            loading: B,
            onClick: () => void R(),
            children: (0, Q.jsx)(c, {
              id: `workspaceAgents.resources.loadMore`,
              defaultMessage: `Load more`,
              description: `Button that loads another page of agent or skill files`,
            }),
          })
        : null),
      (n[87] = R),
      (n[88] = z),
      (n[89] = B),
      (n[90] = le))
    : (le = n[90]);
  let de;
  n[91] !== x || n[92] !== H || n[93] !== C || n[94] !== V || n[95] !== E || n[96] !== O
    ? ((de =
        x == null
          ? null
          : (0, Q.jsx)(mt, {
              action: x,
              name: C,
              pending: E,
              failed: O,
              onNameChange: T,
              onClose: () => {
                E || S(null);
              },
              onSubmit: () => {
                x.type === `folder` && V != null
                  ? H({ type: `folder`, name: C.trim(), parentId: V.id })
                  : x.type === `rename`
                    ? H({ type: `rename`, node: x.node, name: C.trim() })
                    : x.type === `delete` && H({ type: `delete`, node: x.node });
              },
            })),
      (n[91] = x),
      (n[92] = H),
      (n[93] = C),
      (n[94] = V),
      (n[95] = E),
      (n[96] = O),
      (n[97] = de))
    : (de = n[97]);
  let fe;
  return (
    n[98] !== U ||
    n[99] !== W ||
    n[100] !== G ||
    n[101] !== K ||
    n[102] !== le ||
    n[103] !== de ||
    n[104] !== q ||
    n[105] !== oe ||
    n[106] !== J ||
    n[107] !== Y ||
    n[108] !== se ||
    n[109] !== ce
      ? ((fe = (0, Q.jsxs)(`div`, { className: q, children: [oe, J, Y, se, ce, U, W, G, K, le, de] })),
        (n[98] = U),
        (n[99] = W),
        (n[100] = G),
        (n[101] = K),
        (n[102] = le),
        (n[103] = de),
        (n[104] = q),
        (n[105] = oe),
        (n[106] = J),
        (n[107] = Y),
        (n[108] = se),
        (n[109] = ce),
        (n[110] = fe))
      : (fe = n[110]),
    fe
  );
}
function ft(e) {
  return e.name.length > 0;
}
function pt(e) {
  return e.children;
}
function mt(e) {
  let n = (0, gt.c)(39),
    { action: r, name: i, pending: a, failed: o, onNameChange: s, onSubmit: l, onClose: u } = e,
    d = (0, Z.useId)(),
    f;
  n[0] === u
    ? (f = n[1])
    : ((f = (e) => {
        e || u();
      }),
      (n[0] = u),
      (n[1] = f));
  let p;
  n[2] === l
    ? (p = n[3])
    : ((p = (e) => {
        (e.preventDefault(), l());
      }),
      (n[2] = l),
      (n[3] = p));
  let m;
  n[4] === r.type
    ? (m = n[5])
    : ((m = (0, Q.jsx)(D, {
        title: (0, Q.jsx)(C, {
          children:
            r.type === `delete`
              ? (0, Q.jsx)(c, {
                  id: `workspaceAgents.resources.confirmDeleteTitle`,
                  defaultMessage: `Delete this item?`,
                  description: `Confirmation title before deleting an agent or skill file or folder`,
                })
              : (0, Q.jsx)(c, {
                  id: `workspaceAgents.resources.fileNameTitle`,
                  defaultMessage: `Name the item`,
                  description: `Dialog title for creating a folder or renaming an agent or skill file`,
                }),
        }),
      })),
      (n[4] = r.type),
      (n[5] = m));
  let h;
  n[6] === o
    ? (h = n[7])
    : ((h = o
        ? (0, Q.jsx)(P, {
            children: (0, Q.jsx)(X, {
              children: (0, Q.jsx)(c, {
                id: `workspaceAgents.resources.operationFailed`,
                defaultMessage: `Could not complete this change`,
                description: `Error inside the confirmation dialog after a file operation failed`,
              }),
            }),
          })
        : null),
      (n[6] = o),
      (n[7] = h));
  let g;
  n[8] !== r.node || n[9] !== r.type || n[10] !== d || n[11] !== i || n[12] !== s || n[13] !== a
    ? ((g = (0, Q.jsx)(P, {
        children:
          r.type === `delete`
            ? (0, Q.jsx)(`p`, {
                children: (0, Q.jsx)(c, {
                  id: `workspaceAgents.resources.confirmDelete`,
                  defaultMessage: `Delete {name} and its contents? This cannot be undone.`,
                  description: `Confirmation before deleting a file or folder from an agent draft; name is the selected item name`,
                  values: { name: r.node.name },
                }),
              })
            : (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(`label`, {
                    htmlFor: d,
                    children: (0, Q.jsx)(c, {
                      id: `workspaceAgents.resources.name`,
                      defaultMessage: `Name`,
                      description: `Label for the name of an agent or skill file or folder`,
                    }),
                  }),
                  (0, Q.jsx)(he, {
                    id: d,
                    value: i,
                    required: !0,
                    autoFocus: !0,
                    disabled: a,
                    onChange: (e) => s(e.target.value),
                  }),
                ],
              }),
      })),
      (n[8] = r.node),
      (n[9] = r.type),
      (n[10] = d),
      (n[11] = i),
      (n[12] = s),
      (n[13] = a),
      (n[14] = g))
    : (g = n[14]);
  let _;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(c, {
        id: `workspaceAgents.resources.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels a pending agent or skill file change`,
      })),
      (n[15] = _))
    : (_ = n[15]);
  let v;
  n[16] !== u || n[17] !== a
    ? ((v = (0, Q.jsx)(t, { type: `button`, color: `ghost`, disabled: a, onClick: u, children: _ })),
      (n[16] = u),
      (n[17] = a),
      (n[18] = v))
    : (v = n[18]);
  let ee = r.type === `delete` ? `danger` : `primary`,
    y;
  n[19] !== r.type || n[20] !== i
    ? ((y = r.type !== `delete` && i.trim().length === 0), (n[19] = r.type), (n[20] = i), (n[21] = y))
    : (y = n[21]);
  let b;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(c, {
        id: `workspaceAgents.resources.confirm`,
        defaultMessage: `Confirm`,
        description: `Button that applies the selected agent or skill file operation`,
      })),
      (n[22] = b))
    : (b = n[22]);
  let x;
  n[23] !== a || n[24] !== ee || n[25] !== y
    ? ((x = (0, Q.jsx)(t, { type: `submit`, color: ee, loading: a, disabled: y, children: b })),
      (n[23] = a),
      (n[24] = ee),
      (n[25] = y),
      (n[26] = x))
    : (x = n[26]);
  let S;
  n[27] !== x || n[28] !== v
    ? ((S = (0, Q.jsxs)(R, { children: [v, x] })), (n[27] = x), (n[28] = v), (n[29] = S))
    : (S = n[29]);
  let w;
  n[30] !== S || n[31] !== p || n[32] !== m || n[33] !== h || n[34] !== g
    ? ((w = (0, Q.jsxs)(I, { as: `form`, onSubmit: p, children: [m, h, g, S] })),
      (n[30] = S),
      (n[31] = p),
      (n[32] = m),
      (n[33] = h),
      (n[34] = g),
      (n[35] = w))
    : (w = n[35]);
  let T;
  return (
    n[36] !== f || n[37] !== w
      ? ((T = (0, Q.jsx)(F, { open: !0, onOpenChange: f, children: w })),
        (n[36] = f),
        (n[37] = w),
        (n[38] = T))
      : (T = n[38]),
    T
  );
}
function ht(e) {
  let n = (0, gt.c)(100),
    { identity: r, location: i, node: a, readOnly: o, onChanged: s } = e,
    u = l(Te),
    d = ke(),
    f = ee(),
    m = y(fe),
    h;
  n[0] !== r || n[1] !== i.agentId
    ? ((h = { ...r, agentId: i.agentId }), (n[0] = r), (n[1] = i.agentId), (n[2] = h))
    : (h = n[2]);
  let _ = g(at, h),
    v = y(_.drafts$),
    x = `${i.skillId ?? `agent`}:file:${a.id}`,
    S;
  n[3] !== v || n[4] !== x || n[5] !== i.versionId
    ? ((S = i.versionId == null ? v.get(x) : void 0),
      (n[3] = v),
      (n[4] = x),
      (n[5] = i.versionId),
      (n[6] = S))
    : (S = n[6]);
  let C = S,
    [w, T] = (0, Z.useState)(C != null),
    [E, D] = (0, Z.useState)(!1),
    O;
  n[7] !== r.accountId || n[8] !== r.userId || n[9] !== d || n[10] !== u
    ? ((O = () => d() && u.get(ue) === r.accountId && u.get(ve) === r.userId),
      (n[7] = r.accountId),
      (n[8] = r.userId),
      (n[9] = d),
      (n[10] = u),
      (n[11] = O))
    : (O = n[11]);
  let k = O,
    A;
  n[12] === a ? (A = n[13]) : ((A = Ye(a)), (n[12] = a), (n[13] = A));
  let j = A,
    M;
  n[14] !== r.accountId ||
  n[15] !== r.userId ||
  n[16] !== i.agentId ||
  n[17] !== i.skillId ||
  n[18] !== i.versionId ||
  n[19] !== a.id ||
  n[20] !== a.updated_at
    ? ((M = [
        `workspace-agent`,
        `files`,
        r.accountId,
        r.userId,
        i.agentId,
        i.skillId,
        i.versionId,
        `text`,
        a.id,
        a.updated_at,
      ]),
      (n[14] = r.accountId),
      (n[15] = r.userId),
      (n[16] = i.agentId),
      (n[17] = i.skillId),
      (n[18] = i.versionId),
      (n[19] = a.id),
      (n[20] = a.updated_at),
      (n[21] = M))
    : (M = n[21]);
  let N = M,
    P;
  n[22] !== r || n[23] !== i || n[24] !== a
    ? ((P = (e) => {
        let { signal: t } = e;
        return Xe(i, a, r, t);
      }),
      (n[22] = r),
      (n[23] = i),
      (n[24] = a),
      (n[25] = P))
    : (P = n[25]);
  let F;
  n[26] !== j || n[27] !== P || n[28] !== N
    ? ((F = { queryKey: N, queryFn: P, enabled: j, staleTime: p.ONE_MINUTE, retry: !1 }),
      (n[26] = j),
      (n[27] = P),
      (n[28] = N),
      (n[29] = F))
    : (F = n[29]);
  let { data: I, error: te, isPending: R, refetch: z } = b(F),
    B = null;
  if (I != null && (!w || o)) {
    let e;
    (n[30] !== a.name || n[31] !== u || n[32] !== m || n[33] !== I
      ? ((e = /\.mdx?$/i.test(a.name)
          ? (0, Q.jsx)(Le, { children: (0, Q.jsx)(Re, { markdown: I }) })
          : (0, Q.jsx)(L, {
              content: I,
              language: `text`,
              shouldWrapCode: m,
              onToggleWrapCode: () => u.set(fe, !m),
            })),
        (n[30] = a.name),
        (n[31] = u),
        (n[32] = m),
        (n[33] = I),
        (n[34] = e))
      : (e = n[34]),
      (B = e));
  }
  let re;
  n[35] !== x || n[36] !== w || n[37] !== k || n[38] !== _ || n[39] !== o
    ? ((re = (e) => {
        (e.preventDefault(),
          w &&
            !o &&
            _.flush(x).then((e) => {
              e && k() && T(!1);
            }));
      }),
      (n[35] = x),
      (n[36] = w),
      (n[37] = k),
      (n[38] = _),
      (n[39] = o),
      (n[40] = re))
    : (re = n[40]);
  let V;
  n[41] !== r || n[42] !== k || n[43] !== i || n[44] !== a || n[45] !== u
    ? ((V = () =>
        void $e(u, i, a, r).catch(() => {
          k() && D(!0);
        })),
      (n[41] = r),
      (n[42] = k),
      (n[43] = i),
      (n[44] = a),
      (n[45] = u),
      (n[46] = V))
    : (V = n[46]);
  let H;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Q.jsx)(c, {
        id: `workspaceAgents.resources.download`,
        defaultMessage: `Download`,
        description: `Button that downloads the selected agent or skill file`,
      })),
      (n[47] = H))
    : (H = n[47]);
  let U;
  n[48] === V
    ? (U = n[49])
    : ((U = (0, Q.jsx)(t, { type: `button`, color: `secondary`, size: `toolbar`, onClick: V, children: H })),
      (n[48] = V),
      (n[49] = U));
  let W;
  n[50] !== r || n[51] !== k || n[52] !== i || n[53] !== a || n[54] !== u
    ? ((W = oe({ browserPreview: !0 })
        ? (0, Q.jsx)(t, {
            type: `button`,
            color: `secondary`,
            size: `toolbar`,
            onClick: () =>
              void tt(i, a, r)
                .then((e) => {
                  let { fileName: t, target: n } = e;
                  if (k())
                    return je(u, {
                      conversationId: null,
                      fileName: t,
                      target: n,
                      mimeType: a.mime_type,
                      browserPreview: !0,
                      downloadFallback: !1,
                      tabKey: `agent-file:${r.accountId}:${r.userId}:${i.agentId}:${i.skillId}:${i.versionId}:${a.id}`,
                      isAccessBlocked: (e) => e.get(ue) !== r.accountId || e.get(ve) !== r.userId,
                    });
                })
                .catch(() => {
                  k() && D(!0);
                }),
            children: (0, Q.jsx)(c, {
              id: `workspaceAgents.resources.openPreview`,
              defaultMessage: `Open preview`,
              description: `Button that opens an agent or skill file in the shared file viewer`,
            }),
          })
        : null),
      (n[50] = r),
      (n[51] = k),
      (n[52] = i),
      (n[53] = a),
      (n[54] = u),
      (n[55] = W))
    : (W = n[55]);
  let G;
  n[56] !== j || n[57] !== w || n[58] !== o || n[59] !== I
    ? ((G =
        !o && j && I != null && !w
          ? (0, Q.jsx)(t, {
              type: `button`,
              color: `secondary`,
              size: `toolbar`,
              onClick: () => T(!0),
              children: (0, Q.jsx)(c, {
                id: `workspaceAgents.resources.editFile`,
                defaultMessage: `Edit file`,
                description: `Button that opens the text editor for an agent or skill file`,
              }),
            })
          : null),
      (n[56] = j),
      (n[57] = w),
      (n[58] = o),
      (n[59] = I),
      (n[60] = G))
    : (G = n[60]);
  let ie;
  n[61] !== U || n[62] !== W || n[63] !== G
    ? ((ie = (0, Q.jsxs)(`div`, { className: `flex flex-wrap gap-2`, children: [U, W, G] })),
      (n[61] = U),
      (n[62] = W),
      (n[63] = G),
      (n[64] = ie))
    : (ie = n[64]);
  let K;
  n[65] === E
    ? (K = n[66])
    : ((K = E
        ? (0, Q.jsx)(X, {
            children: (0, Q.jsx)(c, {
              id: `workspaceAgents.resources.openFailed`,
              defaultMessage: `Could not open this file`,
              description: `Error when an agent or skill file could not be downloaded or opened`,
            }),
          })
        : null),
      (n[65] = E),
      (n[66] = K));
  let ae;
  n[67] !== j || n[68] !== R
    ? ((ae = j && R ? (0, Q.jsx)(ne, {}) : null), (n[67] = j), (n[68] = R), (n[69] = ae))
    : (ae = n[69]);
  let q;
  n[70] !== j || n[71] !== te || n[72] !== z
    ? ((q = j && te != null ? (0, Q.jsx)(X, { onRetry: () => void z() }) : null),
      (n[70] = j),
      (n[71] = te),
      (n[72] = z),
      (n[73] = q))
    : (q = n[73]);
  let J;
  n[74] !== C?.content ||
  n[75] !== C?.status ||
  n[76] !== x ||
  n[77] !== w ||
  n[78] !== r ||
  n[79] !== f ||
  n[80] !== k ||
  n[81] !== _ ||
  n[82] !== i ||
  n[83] !== a.mime_type ||
  n[84] !== a.name ||
  n[85] !== a.parent_node_id ||
  n[86] !== s ||
  n[87] !== o ||
  n[88] !== u ||
  n[89] !== I ||
  n[90] !== N
    ? ((J =
        I != null && w && !o
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(ce, {
                  value: C?.content ?? I,
                  rows: 14,
                  "aria-label": f.formatMessage({
                    id: `workspaceAgents.resources.fileContents`,
                    defaultMessage: `File contents`,
                    description: `Accessible label for the editor that changes an agent or skill text file`,
                  }),
                  onChange: (e) => {
                    _.request(x, e.target.value, I, i.skillId, async (e, t) => {
                      if (a.parent_node_id == null) throw Error(`Missing file parent`);
                      (await nt(
                        u,
                        r,
                        i,
                        {
                          type: `upload`,
                          parentId: a.parent_node_id,
                          file: new File([e], a.name, { type: a.mime_type ?? `text/plain` }),
                          replace: !0,
                        },
                        t,
                      ),
                        u.queryClient.setQueryData(N, e),
                        await s());
                    });
                  },
                  onBlur: () => void _.flush(x),
                }),
                C?.status === `failed`
                  ? (0, Q.jsx)(X, {
                      onRetry: () => void _.flush(x),
                      children: (0, Q.jsx)(c, {
                        id: `workspaceAgents.resources.textSaveFailed`,
                        defaultMessage: `Could not save the file. Your edits are still here.`,
                        description: `Error after saving an agent or skill text file failed; the pending text remains available`,
                      }),
                    })
                  : null,
                (0, Q.jsxs)(`div`, {
                  className: `flex gap-2`,
                  children: [
                    (0, Q.jsx)(t, {
                      type: `submit`,
                      color: `primary`,
                      size: `toolbar`,
                      loading: C?.status === `saving`,
                      children: (0, Q.jsx)(c, {
                        id: `workspaceAgents.resources.saveFile`,
                        defaultMessage: `Save changes`,
                        description: `Button that saves pending edits to an agent or skill text file`,
                      }),
                    }),
                    (0, Q.jsx)(t, {
                      type: `button`,
                      color: `ghost`,
                      size: `toolbar`,
                      onClick: () => {
                        (_.discard(x),
                          _.flush(x).then((e) => {
                            e && k() && T(!1);
                          }));
                      },
                      children: (0, Q.jsx)(c, {
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
      (n[74] = C?.content),
      (n[75] = C?.status),
      (n[76] = x),
      (n[77] = w),
      (n[78] = r),
      (n[79] = f),
      (n[80] = k),
      (n[81] = _),
      (n[82] = i),
      (n[83] = a.mime_type),
      (n[84] = a.name),
      (n[85] = a.parent_node_id),
      (n[86] = s),
      (n[87] = o),
      (n[88] = u),
      (n[89] = I),
      (n[90] = N),
      (n[91] = J))
    : (J = n[91]);
  let Y;
  return (
    n[92] !== B || n[93] !== ie || n[94] !== K || n[95] !== ae || n[96] !== q || n[97] !== J || n[98] !== re
      ? ((Y = (0, Q.jsxs)(`form`, {
          className: `flex min-h-0 flex-col gap-4`,
          onSubmit: re,
          children: [ie, K, ae, q, J, B],
        })),
        (n[92] = B),
        (n[93] = ie),
        (n[94] = K),
        (n[95] = ae),
        (n[96] = q),
        (n[97] = J),
        (n[98] = re),
        (n[99] = Y))
      : (Y = n[99]),
    Y
  );
}
var gt, Z, Q;
function _t() {
  return (_t = e(() => {
    ((gt = U()),
      x(),
      m(),
      (Z = K()),
      N(),
      Ae(),
      we(),
      B(),
      z(),
      T(),
      H(),
      k(),
      i(),
      _(),
      n(),
      q(),
      j(),
      se(),
      Oe(),
      Ie(),
      W(),
      Y(),
      s(),
      De(),
      Ke(),
      Ze(),
      it(),
      (Q = G()));
  }))();
}
function vt(e) {
  let t = (0, yt.c)(7),
    { name: n } = e,
    r,
    i;
  if (t[0] !== n) {
    i = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((r = n ? ct.get(n) : void 0), r == null)) {
        let e;
        (t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, bt.jsx)(E, { className: `text-purple` })), (t[3] = e))
          : (e = t[3]),
          (i = e));
        break bb0;
      }
      if (r.asset != null) {
        i = (0, bt.jsx)(d, { asset: r.asset, className: A(`shrink-0`, r.color), focusable: `false` });
        break bb0;
      }
    }
    ((t[0] = n), (t[1] = r), (t[2] = i));
  } else ((r = t[1]), (i = t[2]));
  if (i !== Symbol.for(`react.early_return_sentinel`)) return i;
  let a = r.icon,
    o;
  return (
    t[4] !== a || t[5] !== r.color
      ? ((o = (0, bt.jsx)(a, { className: r.color })), (t[4] = a), (t[5] = r.color), (t[6] = o))
      : (o = t[6]),
    o
  );
}
var yt, bt;
function xt() {
  return (xt = e(() => {
    ((yt = U()), S(), f(), _(), lt(), (bt = G()));
  }))();
}
function St(e) {
  let n = (0, Tt.c)(57),
    { agentId: r, skill: i, versionId: a, canEdit: s, onChanged: u, onNavigate: d } = e,
    f = l(o),
    [p, m] = (0, Et.useState)(!1),
    [h, g] = (0, Et.useState)(!1),
    _ = ee(),
    v = (0, Et.useId)(),
    [y, b] = (0, Et.useState)(`overview`),
    x = `chatgpt_skill_id` in i,
    S;
  n[0] !== r || n[1] !== p || n[2] !== f || n[3] !== x || n[4] !== i.id || n[5] !== i.name || n[6] !== a
    ? ((S = async function () {
        let e = f.get(ue),
          t = f.get(ve);
        if (e == null || t == null || p || x || a != null) return;
        let n = new AbortController(),
          o = f.watch((r) => {
            (r.get(ue) !== e || r.get(ve) !== t) && n.abort();
          });
        (m(!0),
          g(!1),
          We(f, {
            actionType: Be.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_DOWNLOAD,
            actionResult: Ue.CHATGPT_AGENT_BUILDER_ACTION_RESULT_STARTED,
            source: ze.CHATGPT_AGENT_BUILDER_SOURCE_SKILL_DETAIL,
            agentId: r,
            skill: { skillId: i.id },
          }),
          await (async () => {
            try {
              let a = await ye.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/download-url`, {
                parameters: { path: { agent_id: r, skill_id: i.id }, query: { download: `true` } },
                expectedIdentity: { accountId: e, userId: t },
                signal: n.signal,
              });
              if (f.get(ue) !== e || f.get(ve) !== t) return;
              let o = J(a.download_url);
              if (o == null) {
                g(!0);
                return;
              }
              await me({
                conversationId: null,
                signal: n.signal,
                fileName: a.file_name ?? `${i.name || i.id}.zip`,
                target: {
                  type: `download-url`,
                  downloadUrl: be(o) ?? o,
                  requestHeaders: a.needs_auth_token ? pe() : void 0,
                },
              });
            } catch {
              n.signal.aborted || g(!0);
            }
          })().finally(() => {
            (o(), m(!1));
          }));
      }),
      (n[0] = r),
      (n[1] = p),
      (n[2] = f),
      (n[3] = x),
      (n[4] = i.id),
      (n[5] = i.name),
      (n[6] = a),
      (n[7] = S))
    : (S = n[7]);
  let C = S,
    w;
  if (y === `files` && !x) {
    let e;
    n[8] !== r || n[9] !== i.id || n[10] !== a
      ? ((e = { agentId: r, skillId: i.id, versionId: a }),
        (n[8] = r),
        (n[9] = i.id),
        (n[10] = a),
        (n[11] = e))
      : (e = n[11]);
    let t = !s,
      o;
    (n[12] !== u || n[13] !== e || n[14] !== t
      ? ((o = (0, $.jsx)(ut, { location: e, readOnly: t, onChanged: u })),
        (n[12] = u),
        (n[13] = e),
        (n[14] = t),
        (n[15] = o))
      : (o = n[15]),
      (w = o));
  } else if (a != null) {
    let e;
    n[16] !== i.description || n[17] !== i.name
      ? ((e = (0, $.jsx)(V, { label: i.name, description: i.description, control: null })),
        (n[16] = i.description),
        (n[17] = i.name),
        (n[18] = e))
      : (e = n[18]);
    let t;
    n[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(c, {
          id: `workspaceAgents.resources.historicalSkill`,
          defaultMessage: `Published skill snapshot`,
          description: `Label for a skill inspected from an older agent publication`,
        })),
        (n[19] = t))
      : (t = n[19]);
    let r;
    n[20] === x
      ? (r = n[21])
      : ((r = (0, $.jsx)(V, {
          label: t,
          description: x
            ? (0, $.jsx)(c, {
                id: `workspaceAgents.resources.historicalSharedSkill`,
                defaultMessage: `This version uses a shared workspace skill`,
                description: `Explains that an older agent version references a skill managed separately in the workspace`,
              })
            : (0, $.jsx)(c, {
                id: `workspaceAgents.resources.historicalSkillFiles`,
                defaultMessage: `Open Files to inspect the instructions and files saved with this version`,
                description: `Explains how to inspect historical skill content without showing the current draft settings`,
              }),
          control: null,
        })),
        (n[20] = x),
        (n[21] = r));
    let a;
    (n[22] !== e || n[23] !== r
      ? ((a = (0, $.jsxs)(te, { children: [e, r] })), (n[22] = e), (n[23] = r), (n[24] = a))
      : (a = n[24]),
      (w = a));
  } else {
    let e = s && !x,
      t;
    (n[25] !== r || n[26] !== u || n[27] !== i || n[28] !== e
      ? ((t = (0, $.jsx)(Ct, { agentId: r, skill: i, canEdit: e, onChanged: u })),
        (n[25] = r),
        (n[26] = u),
        (n[27] = i),
        (n[28] = e),
        (n[29] = t))
      : (t = n[29]),
      (w = t));
  }
  let T;
  n[30] !== C || n[31] !== p || n[32] !== x || n[33] !== a
    ? ((T =
        !x && a == null
          ? (0, $.jsx)(t, {
              type: `button`,
              color: `secondary`,
              size: `toolbar`,
              loading: p,
              onClick: () => void C(),
              children: (0, $.jsx)(c, {
                id: `workspaceAgents.resources.downloadSkill`,
                defaultMessage: `Download skill`,
                description: `Button that downloads the current uploaded skill as a ZIP archive`,
              }),
            })
          : null),
      (n[30] = C),
      (n[31] = p),
      (n[32] = x),
      (n[33] = a),
      (n[34] = T))
    : (T = n[34]);
  let E;
  n[35] === h
    ? (E = n[36])
    : ((E = h
        ? (0, $.jsx)(X, {
            children: (0, $.jsx)(c, {
              id: `workspaceAgents.resources.skillDownloadFailed`,
              defaultMessage: `Could not download this skill`,
              description: `Error when the uploaded agent skill archive could not be downloaded`,
            }),
          })
        : null),
      (n[35] = h),
      (n[36] = E));
  let D;
  n[37] !== r ||
  n[38] !== _ ||
  n[39] !== d ||
  n[40] !== v ||
  n[41] !== f ||
  n[42] !== x ||
  n[43] !== i.chatgpt_skill_id ||
  n[44] !== i.id ||
  n[45] !== y
    ? ((D = x
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(`p`, {
                children: (0, $.jsx)(c, {
                  id: `workspaceAgents.resources.sharedSkill`,
                  defaultMessage: `This skill is managed in the skill editor`,
                  description: `Explains why a shared workspace skill cannot be edited from one agent`,
                }),
              }),
              (0, $.jsx)(O, {
                to: `/skills/editor/${encodeURIComponent(i.chatgpt_skill_id)}`,
                color: `secondary`,
                size: `toolbar`,
                onClick: d,
                children: (0, $.jsx)(c, {
                  id: `workspaceAgents.resources.openSkill`,
                  defaultMessage: `Open skill editor`,
                  description: `Link to the shared workspace skill's own editor`,
                }),
              }),
            ],
          })
        : (0, $.jsx)(Se, {
            selectedKey: y,
            onSelect: (e) => {
              (We(f, {
                actionType: Be.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_VIEW_MODE_CHANGE,
                source: ze.CHATGPT_AGENT_BUILDER_SOURCE_SKILL_DETAIL,
                agentId: r,
                skill: {
                  skillId: i.id,
                  skillViewMode:
                    e === `files`
                      ? He.CHATGPT_AGENT_BUILDER_SKILL_VIEW_MODE_FILES
                      : He.CHATGPT_AGENT_BUILDER_SKILL_VIEW_MODE_OVERVIEW,
                },
              }),
                b(e));
            },
            variant: `toolbar`,
            ariaLabel: _.formatMessage({
              id: `workspaceAgents.resources.skillViews`,
              defaultMessage: `Skill view`,
              description: `Accessible label for switching between a skill's settings and files`,
            }),
            tabs: [
              {
                key: `overview`,
                panelId: `${v}-overview`,
                name: (0, $.jsx)(c, {
                  id: `workspaceAgents.resources.skillOverview`,
                  defaultMessage: `Overview`,
                  description: `Tab that shows a workspace agent skill's settings`,
                }),
              },
              {
                key: `files`,
                panelId: `${v}-files`,
                name: (0, $.jsx)(c, {
                  id: `workspaceAgents.resources.skillFiles`,
                  defaultMessage: `Files`,
                  description: `Tab that shows files included in a workspace agent skill`,
                }),
              },
            ],
          })),
      (n[37] = r),
      (n[38] = _),
      (n[39] = d),
      (n[40] = v),
      (n[41] = f),
      (n[42] = x),
      (n[43] = i.chatgpt_skill_id),
      (n[44] = i.id),
      (n[45] = y),
      (n[46] = D))
    : (D = n[46]);
  let k = `${v}-${y}`,
    A = x ? void 0 : `tabpanel`,
    j = x ? void 0 : `${v}-${y}-tab`,
    M;
  n[47] !== w || n[48] !== k || n[49] !== A || n[50] !== j
    ? ((M = (0, $.jsx)(`div`, { id: k, role: A, "aria-labelledby": j, children: w })),
      (n[47] = w),
      (n[48] = k),
      (n[49] = A),
      (n[50] = j),
      (n[51] = M))
    : (M = n[51]);
  let N;
  return (
    n[52] !== T || n[53] !== E || n[54] !== D || n[55] !== M
      ? ((N = (0, $.jsxs)(`div`, { className: `flex min-h-0 flex-col gap-4`, children: [T, E, D, M] })),
        (n[52] = T),
        (n[53] = E),
        (n[54] = D),
        (n[55] = M),
        (n[56] = N))
      : (N = n[56]),
    N
  );
}
function Ct(e) {
  let t = (0, Tt.c)(10),
    { agentId: n, skill: r, canEdit: i, onChanged: a } = e,
    o = y(ue),
    s = y(ve);
  if (o == null || s == null) return null;
  let c = `${o}:${s}:${n}:${r.id}`,
    l;
  t[0] !== o || t[1] !== s
    ? ((l = { accountId: o, userId: s }), (t[0] = o), (t[1] = s), (t[2] = l))
    : (l = t[2]);
  let u;
  return (
    t[3] !== n || t[4] !== i || t[5] !== a || t[6] !== r.id || t[7] !== c || t[8] !== l
      ? ((u = (0, $.jsx)(wt, { identity: l, agentId: n, skillId: r.id, canEdit: i, onChanged: a }, c)),
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
function wt(e) {
  let n = (0, Tt.c)(59),
    { identity: r, agentId: i, skillId: s, canEdit: u, onChanged: d } = e,
    f = l(o),
    p = (0, Et.useId)(),
    m = ee(),
    [h, _] = (0, Et.useState)(!1),
    v;
  n[0] !== i || n[1] !== r ? ((v = { ...r, agentId: i }), (n[0] = i), (n[1] = r), (n[2] = v)) : (v = n[2]);
  let b = g(at, v),
    x = y(b.drafts$),
    S;
  n[3] !== i || n[4] !== s
    ? ((S = { agentId: i, skillId: s }), (n[3] = i), (n[4] = s), (n[5] = S))
    : (S = n[5]);
  let { data: C, error: w, isPending: T, refetch: E } = ae(Je, S),
    D;
  n[6] !== i ||
  n[7] !== u ||
  n[8] !== C?.icon?.color ||
  n[9] !== r ||
  n[10] !== d ||
  n[11] !== f ||
  n[12] !== s
    ? ((D = async function (e, t, n) {
        let a = () => {
          if (
            (n.throwIfAborted(),
            !u || f.get(ue) !== r.accountId || f.get(ve) !== r.userId || f.get(Me) !== !0)
          )
            throw Error(`Skill access changed`);
        };
        a();
        let o = await ye.safeGet(`/hermes/agent/{agent_id}/builder-view`, {
          parameters: { path: { agent_id: i } },
          signal: n,
          expectedIdentity: r,
        });
        if ((a(), ![`hermes_admin`, `hermes_write`].includes(o.agent.viewer_capability)))
          throw Error(`This agent is no longer editable`);
        let c = {
            [e]: e === `icon` ? { name: t, color: C?.icon?.color ?? `` } : t,
            expected_draft_version_id: o.draft_version.id,
            expected_draft_revision: o.draft_revision,
          },
          l = await ye.safePost(`/hermes/agent/{agent_id}/skills/{skill_id}/definition`, {
            parameters: { path: { agent_id: i, skill_id: s } },
            requestBody: c,
            signal: n,
            expectedIdentity: r,
          });
        (a(), f.query.setData(Je, { agentId: i, skillId: s }, l));
        try {
          (await Promise.all([
            f.queryClient.invalidateQueries({
              queryKey: [`workspace-agent`, `files`, r.accountId, r.userId, i, s],
            }),
            d(),
          ]),
            _(!1));
        } catch {
          _(!0);
        }
      }),
      (n[6] = i),
      (n[7] = u),
      (n[8] = C?.icon?.color),
      (n[9] = r),
      (n[10] = d),
      (n[11] = f),
      (n[12] = s),
      (n[13] = D))
    : (D = n[13]);
  let O = D;
  if (T) {
    let e;
    return (
      n[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ne, {})), (n[14] = e))
        : (e = n[14]),
      e
    );
  }
  if (w != null || C == null) {
    let e;
    return (
      n[15] === E
        ? (e = n[16])
        : ((e = (0, $.jsx)(X, { onRetry: () => void E() })), (n[15] = E), (n[16] = e)),
      e
    );
  }
  let k;
  n[17] !== x || n[18] !== s
    ? ((k = x.get(`skill:${s}:icon`)), (n[17] = x), (n[18] = s), (n[19] = k))
    : (k = n[19]);
  let A = k,
    j = A?.content ?? C.icon?.name ?? `default`,
    M;
  n[20] !== u || n[21] !== b
    ? ((M = (e) => {
        (e.preventDefault(), u && b.flushAll());
      }),
      (n[20] = u),
      (n[21] = b),
      (n[22] = M))
    : (M = n[22]);
  let N;
  n[23] !== d || n[24] !== h
    ? ((N = h
        ? (0, $.jsx)(X, {
            onRetry: () =>
              void d()
                .then(() => _(!1))
                .catch(() => _(!0)),
            children: (0, $.jsx)(c, {
              id: `workspaceAgents.resources.skillRefreshFailed`,
              defaultMessage: `Your changes were saved, but the latest agent draft could not be loaded`,
              description: `Error when a skill was saved but the agent draft could not be refreshed; retry reloads the draft without repeating the write`,
            }),
          })
        : null),
      (n[23] = d),
      (n[24] = h),
      (n[25] = N))
    : (N = n[25]);
  let P;
  n[26] !== u || n[27] !== C || n[28] !== j || n[29] !== m || n[30] !== b || n[31] !== O || n[32] !== s
    ? ((P = u
        ? (0, $.jsx)(a, {
            contentWidth: `menuWide`,
            triggerButton: (0, $.jsxs)(t, {
              type: `button`,
              color: `secondary`,
              size: `toolbar`,
              children: [
                (0, $.jsx)(vt, { name: j }),
                (0, $.jsx)(c, {
                  id: `workspaceAgents.resources.skillIcon`,
                  defaultMessage: `Skill icon`,
                  description: `Button that opens the icon picker for an uploaded agent skill`,
                }),
              ],
            }),
            children: (0, $.jsx)(Fe, {
              variant: `icon`,
              selectedId: j,
              options: [
                {
                  id: `default`,
                  label: m.formatMessage({
                    id: `workspaceAgents.skillIcon.default`,
                    defaultMessage: `Default`,
                    description: `Name of the default cube icon in the workspace agent skill icon picker`,
                  }),
                  icon: (0, $.jsx)(vt, {}),
                },
                ...Array.from(ct, (e) => {
                  let [t, n] = e;
                  return { id: t, label: m.formatMessage(n.label), icon: (0, $.jsx)(vt, { name: t }) };
                }),
              ],
              onChange: (e) =>
                b.request(`skill:${s}:icon`, e, C.icon?.name ?? `default`, s, (e, t) => O(`icon`, e, t)),
            }),
          })
        : null),
      (n[26] = u),
      (n[27] = C),
      (n[28] = j),
      (n[29] = m),
      (n[30] = b),
      (n[31] = O),
      (n[32] = s),
      (n[33] = P))
    : (P = n[33]);
  let F;
  n[34] !== A?.status || n[35] !== b || n[36] !== s
    ? ((F =
        A?.status === `failed`
          ? (0, $.jsx)(X, {
              onRetry: () => void b.flush(`skill:${s}:icon`),
              children: (0, $.jsx)(c, {
                id: `workspaceAgents.resources.skillIconSaveFailed`,
                defaultMessage: `Could not save the skill icon`,
                description: `Error when the selected icon for an uploaded agent skill could not be saved`,
              }),
            })
          : null),
      (n[34] = A?.status),
      (n[35] = b),
      (n[36] = s),
      (n[37] = F))
    : (F = n[37]);
  let I;
  n[38] !== u || n[39] !== C || n[40] !== x || n[41] !== p || n[42] !== b || n[43] !== O || n[44] !== s
    ? ((I = Dt.map((e) => {
        let t = `skill:${s}:definition:${e}`,
          n = x.get(t),
          r = !u || e === `default_prompt`,
          i = n?.content ?? C[e] ?? ``,
          a = (n) => b.request(t, n, C[e] ?? ``, s, (t, n) => O(e, t, n));
        return (0, $.jsx)(
          V,
          {
            label: (0, $.jsx)(`label`, { htmlFor: `${p}-${e}`, children: (0, $.jsx)(c, { ...Ot[e] }) }),
            control:
              e === `instructions` || e === `skill_description`
                ? (0, $.jsx)(ce, {
                    id: `${p}-${e}`,
                    value: i,
                    readOnly: r,
                    onChange: (e) => a(e.target.value),
                    onBlur: () => {
                      r || b.flush(t);
                    },
                  })
                : (0, $.jsx)(he, {
                    id: `${p}-${e}`,
                    variant: `ghost`,
                    value: i,
                    readOnly: r,
                    onChange: (e) => a(e.target.value),
                    onBlur: () => {
                      r || b.flush(t);
                    },
                  }),
            description:
              n?.status === `failed`
                ? (0, $.jsx)(X, {
                    onRetry: () => void b.flush(t),
                    children: (0, $.jsx)(c, {
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
      (n[38] = u),
      (n[39] = C),
      (n[40] = x),
      (n[41] = p),
      (n[42] = b),
      (n[43] = O),
      (n[44] = s),
      (n[45] = I))
    : (I = n[45]);
  let L;
  n[46] === I ? (L = n[47]) : ((L = (0, $.jsx)(te, { children: I })), (n[46] = I), (n[47] = L));
  let R;
  n[48] === u
    ? (R = n[49])
    : ((R = u
        ? (0, $.jsx)(t, {
            type: `submit`,
            color: `primary`,
            size: `toolbar`,
            children: (0, $.jsx)(c, {
              id: `workspaceAgents.resources.saveSkill`,
              defaultMessage: `Save changes`,
              description: `Button that saves pending settings for a workspace agent skill`,
            }),
          })
        : null),
      (n[48] = u),
      (n[49] = R));
  let z;
  n[50] !== L || n[51] !== R || n[52] !== N || n[53] !== P || n[54] !== F
    ? ((z = (0, $.jsxs)(ge, { children: [N, P, F, L, R] })),
      (n[50] = L),
      (n[51] = R),
      (n[52] = N),
      (n[53] = P),
      (n[54] = F),
      (n[55] = z))
    : (z = n[55]);
  let B;
  return (
    n[56] !== z || n[57] !== M
      ? ((B = (0, $.jsx)(`form`, { onSubmit: M, children: z })), (n[56] = z), (n[57] = M), (n[58] = B))
      : (B = n[58]),
    B
  );
}
var Tt, Et, $, Dt, Ot;
function kt() {
  return (kt = e(() => {
    ((Tt = U()),
      Ve(),
      m(),
      (Et = K()),
      N(),
      Ae(),
      de(),
      Ce(),
      Ne(),
      B(),
      i(),
      j(),
      Ee(),
      se(),
      Pe(),
      W(),
      le(),
      M(),
      u(),
      xe(),
      Ge(),
      Ke(),
      xt(),
      lt(),
      _t(),
      it(),
      qe(),
      ($ = G()),
      (Dt = [
        `skill_name`,
        `display_name`,
        `short_description`,
        `skill_description`,
        `default_prompt`,
        `instructions`,
      ]),
      (Ot = r({
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
function At(e) {
  let t = (0, jt.c)(31),
    { agentId: n, resource: r, canEdit: i, onChanged: a, onClose: o, onNavigate: s } = e,
    l,
    u;
  bb0: switch (r.type) {
    case `files`: {
      let e;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Mt.jsx)(c, {
            id: `workspaceAgents.resources.filesTitle`,
            defaultMessage: `Reference files`,
            description: `Title of the dialog for files available to an agent`,
          })),
          (t[0] = e))
        : (e = t[0]),
        (l = e));
      let o;
      t[1] !== n || t[2] !== r.versionId
        ? ((o = { agentId: n, skillId: null, versionId: r.versionId }),
          (t[1] = n),
          (t[2] = r.versionId),
          (t[3] = o))
        : (o = t[3]);
      let s = !i,
        d;
      (t[4] !== a || t[5] !== o || t[6] !== s
        ? ((d = (0, Mt.jsx)(ut, { location: o, readOnly: s, onChanged: a })),
          (t[4] = a),
          (t[5] = o),
          (t[6] = s),
          (t[7] = d))
        : (d = t[7]),
        (u = d));
      break bb0;
    }
    case `skill`: {
      l = r.skill.name;
      let e = i && r.versionId == null,
        o;
      (t[8] !== n || t[9] !== a || t[10] !== s || t[11] !== r.skill || t[12] !== r.versionId || t[13] !== e
        ? ((o = (0, Mt.jsx)(St, {
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
        (u = o));
      break bb0;
    }
    case `memory`: {
      let e;
      (t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Mt.jsx)(c, {
            id: `workspaceAgents.resources.memoryTitle`,
            defaultMessage: `Memory`,
            description: `Title of the dialog for persistent files saved by an agent`,
          })),
          (t[15] = e))
        : (e = t[15]),
        (l = e));
      let i;
      (t[16] !== n || t[17] !== r.version
        ? ((i = (0, Mt.jsx)(st, { agentId: n, version: r.version, canViewConfig: !0 })),
          (t[16] = n),
          (t[17] = r.version),
          (t[18] = i))
        : (i = t[18]),
        (u = i));
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
  t[21] === l
    ? (f = t[22])
    : ((f = (0, Mt.jsx)(D, { title: (0, Mt.jsx)(C, { children: l }) })), (t[21] = l), (t[22] = f));
  let p;
  t[23] === u ? (p = t[24]) : ((p = (0, Mt.jsx)(P, { children: u })), (t[23] = u), (t[24] = p));
  let m;
  t[25] !== f || t[26] !== p
    ? ((m = (0, Mt.jsxs)(I, { size: `viewport`, children: [f, p] })), (t[25] = f), (t[26] = p), (t[27] = m))
    : (m = t[27]);
  let h;
  return (
    t[28] !== d || t[29] !== m
      ? ((h = (0, Mt.jsx)(F, { open: !0, size: `wide`, onOpenChange: d, children: m })),
        (t[28] = d),
        (t[29] = m),
        (t[30] = h))
      : (h = t[30]),
    h
  );
}
var jt, Mt;
function Nt() {
  return (Nt = e(() => {
    ((jt = U()), N(), H(), k(), ot(), _t(), kt(), (Mt = G()));
  }))();
}
Nt();
export { At as WorkspaceAgentResourceDialog };
//# sourceMappingURL=dialog-2a4aadd53e3d.js.map
