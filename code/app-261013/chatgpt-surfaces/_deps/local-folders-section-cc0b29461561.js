import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  Cot as r,
  HNt as i,
  Hbt as a,
  IDt as o,
  Ixt as s,
  Kat as c,
  Pxt as l,
  Vxt as u,
  jDt as d,
  oSt as f,
  qat as p,
  rst as m,
  t3 as h,
  vzt as g,
  wot as _,
  xMt as v,
  yzt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  A_r as b,
  Cur as x,
  Fon as S,
  Lon as C,
  M_r as w,
  N_n as T,
  P_n as E,
  P_r as D,
  Sur as O,
  atr as k,
  itr as A,
  j_r as j,
  ltr as M,
  n9t as N,
  otr as P,
  r9t as F,
  str as I,
} from "./app-initial-5851df3f6cb1.js";
var L;
function R() {
  return (R = e(() => {
    (l(),
      m(),
      D(),
      P(),
      A(),
      p(),
      _(),
      (L = f(
        r,
        ({ get: e }) =>
          e(I) &&
          c?.projectChatGptProvisioning != null &&
          c.projects != null &&
          e(k) != null &&
          b(e, a.LOCAL_PROJECTS).data != null,
      )));
  }))();
}
function z(e) {
  let t = (0, W.c)(6),
    { disabled: n, onSavingChange: r, projectId: i, projectName: a } = e,
    o = u(L),
    s;
  return (
    t[0] !== o || t[1] !== n || t[2] !== r || t[3] !== i || t[4] !== a
      ? ((s = o ? (0, q.jsx)(B, { disabled: n, onSavingChange: r, projectId: i, projectName: a }) : null),
        (t[0] = o),
        (t[1] = n),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function B(e) {
  let t = (0, W.c)(12),
    { disabled: n, onSavingChange: r, projectId: i, projectName: o } = e,
    s = u(k),
    { data: c } = x(a.LOCAL_PROJECTS);
  if (s == null || c == null) return null;
  let l;
  t[0] !== s || t[1] !== i || t[2] !== c
    ? ((l = M(i, c, s)), (t[0] = s), (t[1] = i), (t[2] = c), (t[3] = l))
    : (l = t[3]);
  let d = l,
    f = `${s.accountId}:${s.userId}:${i}:${d ?? `setup`}`,
    p = d == null ? void 0 : c[d],
    m;
  return (
    t[4] !== n || t[5] !== s || t[6] !== r || t[7] !== i || t[8] !== o || t[9] !== f || t[10] !== p
      ? ((m = (0, q.jsx)(
          V,
          { disabled: n, onSavingChange: r, identity: s, project: p, projectId: i, projectName: o },
          f,
        )),
        (t[4] = n),
        (t[5] = s),
        (t[6] = r),
        (t[7] = i),
        (t[8] = o),
        (t[9] = f),
        (t[10] = p),
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
function V(e) {
  let t = (0, W.c)(47),
    { disabled: i, onSavingChange: a, identity: c, project: l, projectId: u, projectName: d } = e,
    f = s(r),
    p;
  t[0] === l?.rootPaths ? (p = t[1]) : ((p = l?.rootPaths ?? []), (t[0] = l?.rootPaths), (t[1] = p));
  let [m, h] = (0, K.useState)(p),
    [g, _] = (0, K.useState)(m),
    [v, y] = (0, K.useState)(!1),
    [b, x] = (0, K.useState)(!1),
    [S, C] = (0, K.useState)(!1),
    w;
  t[2] !== i ||
  t[3] !== c ||
  t[4] !== v ||
  t[5] !== a ||
  t[6] !== l ||
  t[7] !== u ||
  t[8] !== d ||
  t[9] !== f ||
  t[10] !== m
    ? ((w = async () => {
        if (v || i) return;
        (y(!0), a(!0), x(!1), C(!1));
        let e = await U(f, { identity: c, project: l, projectId: u, projectName: d, sources: m }).then(
          H,
          () => (x(!0), !1),
        );
        (y(!1), a(!1), e && l != null && (_(m), C(!0)));
      }),
      (t[2] = i),
      (t[3] = c),
      (t[4] = v),
      (t[5] = a),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = m),
      (t[11] = w))
    : (w = t[11]);
  let T = w,
    E;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, q.jsx)(`h2`, {
        className: `text-sm font-medium text-default select-none`,
        children: (0, q.jsx)(o, {
          id: `chatgptConversations.projectSettings.localFolders.title`,
          defaultMessage: `Local folders`,
          description: `Heading for this computer's native chat folders in combined project settings`,
        }),
      })),
      (t[12] = E))
    : (E = t[12]);
  let D;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, q.jsx)(`p`, {
        className: `text-sm text-codex-description select-none`,
        children: (0, q.jsx)(o, {
          id: `chatgptConversations.projectSettings.localFolders.description`,
          defaultMessage: `Folders apply to new local chats on this computer. Project instructions, sources and memory apply only to cloud chats.`,
          description: `Explains which chat types use local folders versus ChatGPT project context in combined settings`,
        }),
      })),
      (t[13] = D))
    : (D = t[13]);
  let O;
  t[14] !== i || t[15] !== v || t[16] !== l || t[17] !== m
    ? ((O =
        l == null
          ? null
          : (0, q.jsx)(`fieldset`, {
              disabled: v || i,
              children: (0, q.jsx)(N, { disabled: v || i, sources: m, setSources: h }),
            })),
      (t[14] = i),
      (t[15] = v),
      (t[16] = l),
      (t[17] = m),
      (t[18] = O))
    : (O = t[18]);
  let k;
  t[19] !== i || t[20] !== v || t[21] !== l || t[22] !== g || t[23] !== m
    ? ((k = v || i || (l != null && (0, G.default)(m, g))),
      (t[19] = i),
      (t[20] = v),
      (t[21] = l),
      (t[22] = g),
      (t[23] = m),
      (t[24] = k))
    : (k = t[24]);
  let A;
  t[25] === T ? (A = t[26]) : ((A = () => void T()), (t[25] = T), (t[26] = A));
  let j;
  t[27] === l
    ? (j = t[28])
    : ((j =
        l == null
          ? (0, q.jsx)(o, {
              id: `chatgptConversations.projectSettings.localFolders.setup`,
              defaultMessage: `Set up local folders`,
              description: `Button to prepare a native workspace for this ChatGPT project without downloading its cloud context`,
            })
          : (0, q.jsx)(o, {
              id: `chatgptConversations.projectSettings.localFolders.save`,
              defaultMessage: `Save folders`,
              description: `Button to save local folder choices separately from cloud project settings`,
            })),
      (t[27] = l),
      (t[28] = j));
  let M;
  t[29] !== v || t[30] !== k || t[31] !== A || t[32] !== j
    ? ((M = (0, q.jsx)(n, {
        color: `secondary`,
        disabled: k,
        loading: v,
        type: `button`,
        onClick: A,
        children: j,
      })),
      (t[29] = v),
      (t[30] = k),
      (t[31] = A),
      (t[32] = j),
      (t[33] = M))
    : (M = t[33]);
  let P;
  t[34] !== S || t[35] !== g || t[36] !== m
    ? ((P =
        S && (0, G.default)(m, g)
          ? (0, q.jsx)(`span`, {
              className: `text-sm text-codex-description`,
              role: `status`,
              children: (0, q.jsx)(o, {
                id: `chatgptConversations.projectSettings.localFolders.saved`,
                defaultMessage: `Folders saved`,
                description: `Confirmation that native project folders were saved`,
              }),
            })
          : null),
      (t[34] = S),
      (t[35] = g),
      (t[36] = m),
      (t[37] = P))
    : (P = t[37]);
  let F;
  t[38] !== P || t[39] !== M
    ? ((F = (0, q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [M, P] })),
      (t[38] = P),
      (t[39] = M),
      (t[40] = F))
    : (F = t[40]);
  let I;
  t[41] === b
    ? (I = t[42])
    : ((I = b
        ? (0, q.jsx)(`p`, {
            className: `text-sm text-danger`,
            role: `alert`,
            children: (0, q.jsx)(o, {
              id: `chatgptConversations.projectSettings.localFolders.error`,
              defaultMessage: `Could not save local folders. Your cloud settings have not changed. Try again.`,
              description: `Recoverable error from preparing or saving local chat folders`,
            }),
          })
        : null),
      (t[41] = b),
      (t[42] = I));
  let L;
  return (
    t[43] !== F || t[44] !== I || t[45] !== O
      ? ((L = (0, q.jsxs)(`section`, { className: `flex flex-col gap-2`, children: [E, D, O, F, I] })),
        (t[43] = F),
        (t[44] = I),
        (t[45] = O),
        (t[46] = L))
      : (L = t[46]),
    L
  );
}
function H(e) {
  return e;
}
async function U(e, { identity: t, project: n, projectId: r, projectName: i, sources: o }) {
  let s = e.get(k);
  if (s?.accountId !== t.accountId || s?.userId !== t.userId) throw Error(`Project account changed`);
  let c = T();
  if (n == null) {
    if (
      (C(e, r), (await c.ensureChatGptLocalProject?.({ backing: { ...t, projectId: r }, name: i })) == null)
    )
      throw Error(`Local folders could not be set up`);
  } else {
    let t = j(e.get, a.LOCAL_PROJECTS),
      i = t?.[n.id];
    if (i == null || M(r, t, s) !== n.id) throw Error(`Local folders could not be saved`);
    if (!(await c.editLocal({ projectId: n.id, name: i.name, sources: o }))) return !1;
  }
  return (e.query.invalidate(w, a.LOCAL_PROJECTS), !0);
}
var W, G, K, q;
function J() {
  return (J = e(() => {
    ((W = g()),
      (G = t(i(), 1)),
      l(),
      m(),
      (K = y()),
      d(),
      h(),
      D(),
      O(),
      F(),
      A(),
      E(),
      _(),
      S(),
      R(),
      (q = v()));
  }))();
}
export { L as i, J as n, R as r, z as t };
//# sourceMappingURL=local-folders-section-cc0b29461561.js.map
