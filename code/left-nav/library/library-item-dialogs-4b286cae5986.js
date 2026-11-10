import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  CW as a,
  Cpn as o,
  I3t as s,
  Jrt as c,
  N3t as l,
  O3t as u,
  Opn as d,
  Spn as f,
  TW as p,
  Yrt as m,
  eit as h,
  hmn as g,
  iit as _,
  kMt as v,
  kmn as y,
  rit as b,
  tit as x,
} from "./app-initial-f094ef01c64d.js";
import { ao as S, eo as C } from "./app-primary-4c40d73a1074.js";
import { i as w, n as T } from "./library-browse-state-beabc6601918.js";
import { n as E, t as D } from "./library-name-validation-1174fdece49a.js";
import { i as O, n as k, r as A, t as j } from "./library-item-actions-17d69ae9b8cf.js";
function M(e) {
  let t = (0, z.c)(9),
    { accountId: n, userId: r, entry: i, onClose: a } = e,
    o;
  t[0] !== n || t[1] !== r
    ? ((o = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let c;
  t[3] !== i || t[4] !== a
    ? ((c = (0, V.jsx)(N, { entry: i, onClose: a })), (t[3] = i), (t[4] = a), (t[5] = c))
    : (c = t[5]);
  let l;
  return (
    t[6] !== o || t[7] !== c
      ? ((l = (0, V.jsx)(s, { scope: T, value: o, children: c })),
        (t[6] = o),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function N(e) {
  let t = (0, z.c)(56),
    { entry: r, onClose: i } = e,
    s = n(T),
    [u, f] = (0, B.useState)(r.node.name),
    p = d(),
    h = (0, B.useId)(),
    g;
  t[0] !== r.node.kind || t[1] !== p || t[2] !== u
    ? ((g = r.node.kind === `directory` ? D(p, u) : void 0),
      (t[0] = r.node.kind),
      (t[1] = p),
      (t[2] = u),
      (t[3] = g))
    : (g = t[3]);
  let _ = g,
    y = l(k, r.node.id),
    S;
  t[4] !== i || t[5] !== y
    ? ((S = (e) => {
        !e && !y && i();
      }),
      (t[4] = i),
      (t[5] = y),
      (t[6] = S))
    : (S = t[6]);
  let C;
  t[7] !== r || t[8] !== u || t[9] !== _ || t[10] !== i || t[11] !== y || t[12] !== s
    ? ((C = (e) => {
        (e.preventDefault(),
          !(y || !u.trim() || _ != null) &&
            O(s, r, { type: `rename`, name: u.trim() }).then((e) => {
              e && i();
            }));
      }),
      (t[7] = r),
      (t[8] = u),
      (t[9] = _),
      (t[10] = i),
      (t[11] = y),
      (t[12] = s),
      (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] === r.node.kind
    ? (w = t[15])
    : ((w = (0, V.jsx)(b, {
        className: `heading-lg`,
        children: (0, V.jsx)(o, {
          id: `libraryNext.rename.itemTitle`,
          defaultMessage: `{kind, select, directory {Rename folder} other {Rename file}}`,
          description: `Title of the Library rename dialog. kind identifies whether the user is renaming a directory or a file.`,
          values: { kind: r.node.kind },
        }),
      })),
      (t[14] = r.node.kind),
      (t[15] = w));
  let E;
  t[16] === r.node.kind
    ? (E = t[17])
    : ((E = (0, V.jsx)(o, {
        id: `libraryNext.rename.itemName`,
        defaultMessage: `{kind, select, directory {Folder name} other {File name}}`,
        description: `Label for the Library rename input. kind identifies a directory or file; file names include their extension.`,
        values: { kind: r.node.kind },
      })),
      (t[16] = r.node.kind),
      (t[17] = E));
  let A = _ != null,
    j = _ == null ? void 0 : h,
    M;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (e) => f(e.target.value)), (t[18] = M))
    : (M = t[18]);
  let N;
  t[19] !== u || t[20] !== A || t[21] !== j
    ? ((N = (0, V.jsx)(a, {
        autoFocus: !0,
        name: `name`,
        "aria-invalid": A,
        "aria-describedby": j,
        value: u,
        onChange: M,
        required: !0,
      })),
      (t[19] = u),
      (t[20] = A),
      (t[21] = j),
      (t[22] = N))
    : (N = t[22]);
  let P;
  t[23] !== E || t[24] !== N
    ? ((P = (0, V.jsxs)(`label`, { className: `flex flex-col gap-2`, children: [E, N] })),
      (t[23] = E),
      (t[24] = N),
      (t[25] = P))
    : (P = t[25]);
  let F;
  t[26] !== h || t[27] !== _
    ? ((F =
        _ == null
          ? null
          : (0, V.jsx)(`p`, { id: h, role: `alert`, className: `text-danger`, children: _ })),
      (t[26] = h),
      (t[27] = _),
      (t[28] = F))
    : (F = t[28]);
  let I;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, V.jsx)(o, {
        id: `libraryNext.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss a Library action dialog without making changes`,
      })),
      (t[29] = I))
    : (I = t[29]);
  let L;
  t[30] !== i || t[31] !== y
    ? ((L = (0, V.jsx)(v, { color: `ghost`, disabled: y, onClick: i, children: I })),
      (t[30] = i),
      (t[31] = y),
      (t[32] = L))
    : (L = t[32]);
  let R;
  t[33] !== u || t[34] !== _
    ? ((R = !u.trim() || _ != null), (t[33] = u), (t[34] = _), (t[35] = R))
    : (R = t[35]);
  let H;
  t[36] === y
    ? (H = t[37])
    : ((H = (0, V.jsx)(o, {
        id: `libraryNext.rename.submitStatus`,
        defaultMessage: `{pending, select, true {Renaming…} other {Rename}}`,
        description: `Primary button in the Library rename dialog. pending is true while the rename request is in progress.`,
        values: { pending: y },
      })),
      (t[36] = y),
      (t[37] = H));
  let U;
  t[38] !== y || t[39] !== R || t[40] !== H
    ? ((U = (0, V.jsx)(v, { type: `submit`, loading: y, disabled: R, children: H })),
      (t[38] = y),
      (t[39] = R),
      (t[40] = H),
      (t[41] = U))
    : (U = t[41]);
  let W;
  t[42] !== L || t[43] !== U
    ? ((W = (0, V.jsxs)(m, { children: [L, U] })), (t[42] = L), (t[43] = U), (t[44] = W))
    : (W = t[44]);
  let G;
  t[45] !== P || t[46] !== F || t[47] !== W || t[48] !== w
    ? ((G = (0, V.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [w, P, F, W] })),
      (t[45] = P),
      (t[46] = F),
      (t[47] = W),
      (t[48] = w),
      (t[49] = G))
    : (G = t[49]);
  let K;
  t[50] !== G || t[51] !== C
    ? ((K = (0, V.jsx)(c, { as: `form`, onSubmit: C, children: G })),
      (t[50] = G),
      (t[51] = C),
      (t[52] = K))
    : (K = t[52]);
  let q;
  return (
    t[53] !== K || t[54] !== S
      ? ((q = (0, V.jsx)(x, { open: !0, onOpenChange: S, children: K })),
        (t[53] = K),
        (t[54] = S),
        (t[55] = q))
      : (q = t[55]),
    q
  );
}
function P(e) {
  let t = (0, z.c)(11),
    { accountId: n, userId: r, entries: i, bulk: a, onDeleted: o, onClose: c } = e,
    l = a !== void 0 && a,
    u;
  t[0] !== n || t[1] !== r
    ? ((u = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== l || t[4] !== i || t[5] !== c || t[6] !== o
    ? ((d = (0, V.jsx)(F, { entries: i, bulk: l, onDeleted: o, onClose: c })),
      (t[3] = l),
      (t[4] = i),
      (t[5] = c),
      (t[6] = o),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== u || t[9] !== d
      ? ((f = (0, V.jsx)(s, { scope: T, value: u, children: d })),
        (t[8] = u),
        (t[9] = d),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
function F(e) {
  let t = (0, z.c)(79),
    { entries: r, bulk: i, onDeleted: a, onClose: s } = e,
    l = n(T),
    [u, d] = (0, B.useState)(r),
    [f, p] = (0, B.useState)(!1),
    h;
  t[0] === u ? (h = t[1]) : ((h = u.some(R)), (t[0] = u), (t[1] = h));
  let g = h,
    _ = g && u.length === 1,
    y,
    S,
    w,
    E,
    D,
    O,
    k,
    j,
    M,
    N,
    P,
    F;
  if (
    t[2] !== i ||
    t[3] !== g ||
    t[4] !== s ||
    t[5] !== a ||
    t[6] !== f ||
    t[7] !== u ||
    t[8] !== l ||
    t[9] !== _
  ) {
    let e = u.reduce(L, 0),
      n;
    if (_) {
      let e;
      (t[22] === u[0].node.name
        ? (e = t[23])
        : ((e = (0, V.jsx)(`p`, {
            children: (0, V.jsx)(o, {
              id: `libraryNext.delete.folderDescription`,
              defaultMessage: `"{name}" will be permanently deleted with all files and subfolders.`,
              description: `Body of the Library folder delete confirmation. name is the folder's full name; deleting it removes all nested contents permanently.`,
              values: { name: u[0].node.name },
            }),
          })),
          (t[22] = u[0].node.name),
          (t[23] = e)),
        (n = e));
    } else if (g) {
      let e;
      (t[24] === u.length
        ? (e = t[25])
        : ((e = (0, V.jsx)(`p`, {
            children: (0, V.jsx)(o, {
              id: `libraryNext.delete.mixedDescription`,
              defaultMessage: `{count, plural, one {This selected item will be permanently deleted.} other {These # selected items will be permanently deleted.}}`,
              description: `Body of the Library mixed-selection delete confirmation. count is the total number of selected files and folders.`,
              values: { count: u.length },
            }),
          })),
          (t[24] = u.length),
          (t[25] = e)),
        (n = e));
    } else if (i || u.length > 1) {
      let e;
      (t[26] === u.length
        ? (e = t[27])
        : ((e = (0, V.jsx)(`p`, {
            children: (0, V.jsx)(o, {
              id: `libraryNext.delete.filesDescription`,
              defaultMessage: `{count, plural, one {This file will be moved to Recently Deleted and deleted permanently after 30 days.} other {These files will be moved to Recently Deleted and deleted permanently after 30 days.}}`,
              description: `Body of the Library bulk file delete confirmation. count selects singular or plural; files remain in Recently Deleted for 30 days.`,
              values: { count: u.length },
            }),
          })),
          (t[26] = u.length),
          (t[27] = e)),
        (n = e));
    } else {
      let e;
      (t[28] === u[0].node.name
        ? (e = t[29])
        : ((e = (0, V.jsx)(`p`, {
            children: (0, V.jsx)(o, {
              id: `libraryNext.delete.fileDescription`,
              defaultMessage: `"<bold>{fileName}</bold>" will be moved to Recently Deleted and deleted permanently after 30 days.`,
              description: `Body before deleting one Library file. fileName is its full name, rendered in bold; the file is soft-deleted for 30 days.`,
              values: { fileName: u[0].node.name, bold: I },
            }),
          })),
          (t[28] = u[0].node.name),
          (t[29] = e)),
        (n = e));
    }
    ((S = x),
      (w = !0),
      t[30] !== s || t[31] !== f
        ? ((E = (e) => {
            !e && !f && s();
          }),
          (t[30] = s),
          (t[31] = f),
          (t[32] = E))
        : (E = t[32]),
      (y = c),
      (P = `form`),
      t[33] !== s || t[34] !== a || t[35] !== f || t[36] !== u || t[37] !== l
        ? ((F = (e) => {
            (e.preventDefault(),
              !f &&
                (p(!0),
                A(l, u, { type: `delete` }).then((e) => {
                  a?.(e);
                  let t = u.filter((t) => {
                    let { node: n } = t;
                    return !e.includes(n.id);
                  });
                  (p(!1), t.length === 0 ? s() : d(t));
                })));
          }),
          (t[33] = s),
          (t[34] = a),
          (t[35] = f),
          (t[36] = u),
          (t[37] = l),
          (t[38] = F))
        : (F = t[38]),
      (D = `flex flex-col gap-4`),
      t[39] !== g || t[40] !== u.length
        ? ((O = (0, V.jsx)(b, {
            className: `heading-lg`,
            children: g
              ? (0, V.jsx)(o, {
                  id: `libraryNext.delete.folderTitle`,
                  defaultMessage: `{count, plural, one {Delete folder} other {Delete selected items}}`,
                  description: `Library delete confirmation title when the selection contains folders. count is the total selected item count.`,
                  values: { count: u.length },
                })
              : (0, V.jsx)(o, {
                  id: `libraryNext.delete.filesTitle`,
                  defaultMessage: `{count, plural, one {Delete file?} other {Delete files?}}`,
                  description: `Confirmation title before deleting Library files. count is the selected file count.`,
                  values: { count: u.length },
                }),
          })),
          (t[39] = g),
          (t[40] = u.length),
          (t[41] = O))
        : (O = t[41]),
      (k = n),
      t[42] !== g || t[43] !== _
        ? ((j =
            g && !_
              ? (0, V.jsx)(`p`, {
                  children: (0, V.jsx)(o, {
                    id: `libraryNext.delete.foldersWarning`,
                    defaultMessage: `Selected folders will also delete all nested files and subfolders.`,
                    description: `Additional warning in the Library mixed-selection delete confirmation when folders are selected.`,
                  }),
                })
              : null),
          (t[42] = g),
          (t[43] = _),
          (t[44] = j))
        : (j = t[44]),
      t[45] === g
        ? (M = t[46])
        : ((M = g
            ? (0, V.jsx)(`p`, {
                children: (0, V.jsx)(o, {
                  id: `libraryNext.delete.irreversible`,
                  defaultMessage: `This can't be undone.`,
                  description: `Warning below the Library folder or mixed-selection delete confirmation.`,
                }),
              })
            : null),
          (t[45] = g),
          (t[46] = M)),
      (N =
        !g && i && e > 0
          ? (0, V.jsx)(`p`, {
              children: (0, V.jsx)(o, {
                id: `libraryNext.delete.storage`,
                defaultMessage: `Delete permanently to free up {size} of storage space.`,
                description: `Secondary Library bulk file delete text explaining that soft deletion does not free storage. size is the total formatted file size.`,
                values: { size: C(e) },
              }),
            })
          : null),
      (t[2] = i),
      (t[3] = g),
      (t[4] = s),
      (t[5] = a),
      (t[6] = f),
      (t[7] = u),
      (t[8] = l),
      (t[9] = _),
      (t[10] = y),
      (t[11] = S),
      (t[12] = w),
      (t[13] = E),
      (t[14] = D),
      (t[15] = O),
      (t[16] = k),
      (t[17] = j),
      (t[18] = M),
      (t[19] = N),
      (t[20] = P),
      (t[21] = F));
  } else
    ((y = t[10]),
      (S = t[11]),
      (w = t[12]),
      (E = t[13]),
      (D = t[14]),
      (O = t[15]),
      (k = t[16]),
      (j = t[17]),
      (M = t[18]),
      (N = t[19]),
      (P = t[20]),
      (F = t[21]));
  let H = i && !g,
    U;
  t[47] === H
    ? (U = t[48])
    : ((U = (0, V.jsx)(o, {
        id: `libraryNext.delete.dismiss`,
        defaultMessage: `{bulkFiles, select, true {Back} other {Cancel}}`,
        description: `Dismiss the Library delete confirmation without deleting. bulkFiles is true for the file-only bulk-selection flow, which uses Back.`,
        values: { bulkFiles: H },
      })),
      (t[47] = H),
      (t[48] = U));
  let W;
  t[49] !== s || t[50] !== f || t[51] !== U
    ? ((W = (0, V.jsx)(v, { color: `ghost`, disabled: f, onClick: s, children: U })),
      (t[49] = s),
      (t[50] = f),
      (t[51] = U),
      (t[52] = W))
    : (W = t[52]);
  let G;
  t[53] === _
    ? (G = t[54])
    : ((G = (0, V.jsx)(o, {
        id: `libraryNext.delete.confirmItems`,
        defaultMessage: `{singleFolder, select, true {Delete folder} other {Delete}}`,
        description: `Destructive button in the Library delete confirmation. singleFolder is true only when deleting one folder.`,
        values: { singleFolder: _ },
      })),
      (t[53] = _),
      (t[54] = G));
  let K;
  t[55] !== f || t[56] !== G
    ? ((K = (0, V.jsx)(v, { type: `submit`, color: `dangerSolid`, loading: f, children: G })),
      (t[55] = f),
      (t[56] = G),
      (t[57] = K))
    : (K = t[57]);
  let q;
  t[58] !== W || t[59] !== K
    ? ((q = (0, V.jsxs)(m, { children: [W, K] })), (t[58] = W), (t[59] = K), (t[60] = q))
    : (q = t[60]);
  let J;
  t[61] !== q ||
  t[62] !== D ||
  t[63] !== O ||
  t[64] !== k ||
  t[65] !== j ||
  t[66] !== M ||
  t[67] !== N
    ? ((J = (0, V.jsxs)(`div`, { className: D, children: [O, k, j, M, N, q] })),
      (t[61] = q),
      (t[62] = D),
      (t[63] = O),
      (t[64] = k),
      (t[65] = j),
      (t[66] = M),
      (t[67] = N),
      (t[68] = J))
    : (J = t[68]);
  let Y;
  t[69] !== y || t[70] !== J || t[71] !== P || t[72] !== F
    ? ((Y = (0, V.jsx)(y, { as: P, onSubmit: F, children: J })),
      (t[69] = y),
      (t[70] = J),
      (t[71] = P),
      (t[72] = F),
      (t[73] = Y))
    : (Y = t[73]);
  let X;
  return (
    t[74] !== S || t[75] !== w || t[76] !== E || t[77] !== Y
      ? ((X = (0, V.jsx)(S, { open: w, onOpenChange: E, children: Y })),
        (t[74] = S),
        (t[75] = w),
        (t[76] = E),
        (t[77] = Y),
        (t[78] = X))
      : (X = t[78]),
    X
  );
}
function I(e) {
  return (0, V.jsx)(`strong`, { children: e });
}
function L(e, t) {
  let { node: n } = t;
  return e + (n.file_size_bytes ?? 0);
}
function R(e) {
  let { node: t } = e;
  return t.kind === `directory`;
}
var z, B, V;
e(() => {
  ((z = y()), u(), (B = t(i(), 1)), f(), r(), _(), h(), p(), S(), w(), j(), E(), (V = g()));
})();
export { P as DeleteLibraryItemsDialog, M as RenameLibraryItemDialog };
//# sourceMappingURL=library-item-dialogs-4b286cae5986.js.map
