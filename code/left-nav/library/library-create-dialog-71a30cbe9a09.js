import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  CW as a,
  Cpn as o,
  I3t as s,
  Jrt as c,
  O3t as l,
  Opn as u,
  Spn as d,
  TW as f,
  Yrt as p,
  eit as m,
  hmn as h,
  iit as g,
  kMt as _,
  kmn as v,
  rit as y,
  tit as b,
} from "./app-initial-f094ef01c64d.js";
import { a as x, i as S, n as C } from "./library-browse-state-beabc6601918.js";
import { n as w, t as T } from "./library-name-validation-1174fdece49a.js";
function E(e) {
  let t = (0, O.c)(9),
    { accountId: n, userId: r, directoryId: i, onClose: a } = e,
    o;
  t[0] !== n || t[1] !== r
    ? ((o = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let c;
  t[3] !== i || t[4] !== a
    ? ((c = (0, A.jsx)(D, { directoryId: i, onClose: a })), (t[3] = i), (t[4] = a), (t[5] = c))
    : (c = t[5]);
  let l;
  return (
    t[6] !== o || t[7] !== c
      ? ((l = (0, A.jsx)(s, { scope: C, value: o, children: c })),
        (t[6] = o),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function D(e) {
  let t = (0, O.c)(54),
    { directoryId: r, onClose: i } = e,
    s = n(C),
    l = u(),
    [d, f] = (0, k.useState)(``),
    m = (0, k.useId)(),
    h;
  t[0] !== l || t[1] !== d ? ((h = T(l, d)), (t[0] = l), (t[1] = d), (t[2] = h)) : (h = t[2]);
  let g = h,
    [v, S] = (0, k.useState)(!1),
    [w, E] = (0, k.useState)(!1),
    D;
  t[3] !== r || t[4] !== d || t[5] !== g || t[6] !== i || t[7] !== v || t[8] !== s
    ? ((D = async () => {
        if (!(v || !d.trim() || g != null)) {
          (S(!0), E(!1));
          try {
            (await s.get(x).safePost(`/files/library/directories`, {
              requestBody: { name: d.trim(), parent_directory_id: r },
            }),
              await s.queryClient.invalidateQueries({
                queryKey: [`library-api`, s.value.accountId],
              }),
              i());
          } catch {
            E(!0);
          }
          S(!1);
        }
      }),
      (t[3] = r),
      (t[4] = d),
      (t[5] = g),
      (t[6] = i),
      (t[7] = v),
      (t[8] = s),
      (t[9] = D))
    : (D = t[9]);
  let j = D,
    M;
  t[10] !== i || t[11] !== v
    ? ((M = (e) => {
        !e && !v && i();
      }),
      (t[10] = i),
      (t[11] = v),
      (t[12] = M))
    : (M = t[12]);
  let N;
  t[13] === j
    ? (N = t[14])
    : ((N = (e) => {
        (e.preventDefault(), j());
      }),
      (t[13] = j),
      (t[14] = N));
  let P;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, A.jsx)(y, {
        className: `heading-lg`,
        children: (0, A.jsx)(o, {
          id: `libraryNext.createFolder.title`,
          defaultMessage: `New folder`,
          description: `Title of the Library folder creation dialog`,
        }),
      })),
      (t[15] = P))
    : (P = t[15]);
  let F;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, A.jsx)(o, {
        id: `libraryNext.createFolder.name`,
        defaultMessage: `Folder name`,
        description: `Name input in the Library folder creation dialog`,
      })),
      (t[16] = F))
    : (F = t[16]);
  let I = g != null,
    L = g == null ? void 0 : m,
    R;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (e) => f(e.target.value)), (t[17] = R))
    : (R = t[17]);
  let z;
  t[18] !== d || t[19] !== I || t[20] !== L
    ? ((z = (0, A.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [
          F,
          (0, A.jsx)(a, {
            name: `name`,
            "aria-invalid": I,
            "aria-describedby": L,
            autoFocus: !0,
            value: d,
            onChange: R,
            required: !0,
          }),
        ],
      })),
      (t[18] = d),
      (t[19] = I),
      (t[20] = L),
      (t[21] = z))
    : (z = t[21]);
  let B;
  t[22] !== m || t[23] !== g
    ? ((B =
        g == null
          ? null
          : (0, A.jsx)(`p`, { id: m, role: `alert`, className: `text-danger`, children: g })),
      (t[22] = m),
      (t[23] = g),
      (t[24] = B))
    : (B = t[24]);
  let V;
  t[25] === w
    ? (V = t[26])
    : ((V = w
        ? (0, A.jsx)(`p`, {
            role: `alert`,
            className: `text-danger`,
            children: (0, A.jsx)(o, {
              id: `libraryNext.createFolder.failed`,
              defaultMessage: `Failed to create folder.`,
              description: `Inline Library folder creation failure; unsaved input is retained for retry`,
            }),
          })
        : null),
      (t[25] = w),
      (t[26] = V));
  let H;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, A.jsx)(o, {
        id: `libraryNext.create.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss the Library creation dialog without creating an item`,
      })),
      (t[27] = H))
    : (H = t[27]);
  let U;
  t[28] !== i || t[29] !== v
    ? ((U = (0, A.jsx)(_, { color: `ghost`, disabled: v, onClick: i, children: H })),
      (t[28] = i),
      (t[29] = v),
      (t[30] = U))
    : (U = t[30]);
  let W;
  t[31] !== d || t[32] !== g
    ? ((W = !d.trim() || g != null), (t[31] = d), (t[32] = g), (t[33] = W))
    : (W = t[33]);
  let G;
  t[34] === v
    ? (G = t[35])
    : ((G = (0, A.jsx)(o, {
        id: `libraryNext.create.submitStatus`,
        defaultMessage: `{pending, select, true {Creating…} other {Create}}`,
        description: `Library creation dialog primary button. pending is true while the folder is being created.`,
        values: { pending: v },
      })),
      (t[34] = v),
      (t[35] = G));
  let K;
  t[36] !== v || t[37] !== W || t[38] !== G
    ? ((K = (0, A.jsx)(_, { type: `submit`, loading: v, disabled: W, children: G })),
      (t[36] = v),
      (t[37] = W),
      (t[38] = G),
      (t[39] = K))
    : (K = t[39]);
  let q;
  t[40] !== U || t[41] !== K
    ? ((q = (0, A.jsxs)(p, { children: [U, K] })), (t[40] = U), (t[41] = K), (t[42] = q))
    : (q = t[42]);
  let J;
  t[43] !== z || t[44] !== B || t[45] !== V || t[46] !== q
    ? ((J = (0, A.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [P, z, B, V, q] })),
      (t[43] = z),
      (t[44] = B),
      (t[45] = V),
      (t[46] = q),
      (t[47] = J))
    : (J = t[47]);
  let Y;
  t[48] !== J || t[49] !== N
    ? ((Y = (0, A.jsx)(c, { as: `form`, onSubmit: N, children: J })),
      (t[48] = J),
      (t[49] = N),
      (t[50] = Y))
    : (Y = t[50]);
  let X;
  return (
    t[51] !== Y || t[52] !== M
      ? ((X = (0, A.jsx)(b, { open: !0, onOpenChange: M, children: Y })),
        (t[51] = Y),
        (t[52] = M),
        (t[53] = X))
      : (X = t[53]),
    X
  );
}
var O, k, A;
e(() => {
  ((O = v()), l(), (k = t(i(), 1)), d(), r(), g(), m(), f(), S(), w(), (A = h()));
})();
export { E as CreateLibraryFolderDialog };
//# sourceMappingURL=library-create-dialog-71a30cbe9a09.js.map
