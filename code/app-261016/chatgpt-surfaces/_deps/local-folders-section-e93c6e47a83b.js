import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  CCt as i,
  FBt as a,
  LNt as o,
  PBt as s,
  Qst as c,
  XOt as l,
  Y3 as u,
  Z3 as d,
  ZSt as f,
  ast as p,
  iCt as m,
  iFt as h,
  iSt as g,
  ist as _,
  sct as v,
  tkt as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Ctn as b,
  Ixr as x,
  Mxr as S,
  Nxr as C,
  Pxr as w,
  _ir as T,
  gir as E,
  jun as D,
  kun as O,
  mmr as k,
  nbn as A,
  pmr as j,
  tbn as M,
  vir as N,
  wtn as P,
  xir as F,
  yir as I,
} from "./app-initial-ad16eaadf81f.js";
var L;
function R() {
  return (R = e(() => {
    (f(),
      v(),
      x(),
      N(),
      E(),
      p(),
      r(),
      (L = i(
        c,
        ({ get: e }) =>
          e(I) &&
          _?.projectChatGptProvisioning != null &&
          _.projects != null &&
          e(T) != null &&
          S(e, g.LOCAL_PROJECTS).data != null,
      )));
  }))();
}
function z(e) {
  let t = (0, W.c)(6),
    { disabled: n, onSavingChange: r, projectId: i, projectName: a } = e,
    o = m(L),
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
    { disabled: n, onSavingChange: r, projectId: i, projectName: a } = e,
    o = m(T),
    { data: s } = k(g.LOCAL_PROJECTS);
  if (o == null || s == null) return null;
  let c;
  t[0] !== o || t[1] !== i || t[2] !== s
    ? ((c = F(i, s, o)), (t[0] = o), (t[1] = i), (t[2] = s), (t[3] = c))
    : (c = t[3]);
  let l = c,
    u = `${o.accountId}:${o.userId}:${i}:${l ?? `setup`}`,
    d = l == null ? void 0 : s[l],
    f;
  return (
    t[4] !== n || t[5] !== o || t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== u || t[10] !== d
      ? ((f = (0, q.jsx)(
          V,
          { disabled: n, onSavingChange: r, identity: o, project: d, projectId: i, projectName: a },
          u,
        )),
        (t[4] = n),
        (t[5] = o),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function V(e) {
  let t = (0, W.c)(47),
    { disabled: r, onSavingChange: i, identity: a, project: o, projectId: s, projectName: l } = e,
    d = n(c),
    f;
  t[0] === o?.rootPaths ? (f = t[1]) : ((f = o?.rootPaths ?? []), (t[0] = o?.rootPaths), (t[1] = f));
  let [p, m] = (0, K.useState)(f),
    [h, g] = (0, K.useState)(p),
    [_, v] = (0, K.useState)(!1),
    [x, S] = (0, K.useState)(!1),
    [C, w] = (0, K.useState)(!1),
    T;
  t[2] !== r ||
  t[3] !== a ||
  t[4] !== _ ||
  t[5] !== i ||
  t[6] !== o ||
  t[7] !== s ||
  t[8] !== l ||
  t[9] !== d ||
  t[10] !== p
    ? ((T = async () => {
        if (_ || r) return;
        (v(!0), i(!0), S(!1), w(!1));
        let e = await U(d, { identity: a, project: o, projectId: s, projectName: l, sources: p }).then(
          H,
          () => (S(!0), !1),
        );
        (v(!1), i(!1), e && o != null && (g(p), w(!0)));
      }),
      (t[2] = r),
      (t[3] = a),
      (t[4] = _),
      (t[5] = i),
      (t[6] = o),
      (t[7] = s),
      (t[8] = l),
      (t[9] = d),
      (t[10] = p),
      (t[11] = T))
    : (T = t[11]);
  let E = T,
    D;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, q.jsx)(`h2`, {
        className: `text-sm font-medium text-default select-none`,
        children: (0, q.jsx)(y, {
          id: `chatgptConversations.projectSettings.localFolders.title`,
          defaultMessage: `Local folders`,
          description: `Heading for this computer's native chat folders in combined project settings`,
        }),
      })),
      (t[12] = D))
    : (D = t[12]);
  let O;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, q.jsx)(`p`, {
        className: `text-sm text-codex-description select-none`,
        children: (0, q.jsx)(y, {
          id: `chatgptConversations.projectSettings.localFolders.description`,
          defaultMessage: `Folders apply to new local chats on this computer. Project instructions, sources and memory apply only to cloud chats.`,
          description: `Explains which chat types use local folders versus ChatGPT project context in combined settings`,
        }),
      })),
      (t[13] = O))
    : (O = t[13]);
  let k;
  t[14] !== r || t[15] !== _ || t[16] !== o || t[17] !== p
    ? ((k =
        o == null
          ? null
          : (0, q.jsx)(`fieldset`, {
              disabled: _ || r,
              children: (0, q.jsx)(b, { disabled: _ || r, sources: p, setSources: m }),
            })),
      (t[14] = r),
      (t[15] = _),
      (t[16] = o),
      (t[17] = p),
      (t[18] = k))
    : (k = t[18]);
  let A;
  t[19] !== r || t[20] !== _ || t[21] !== o || t[22] !== h || t[23] !== p
    ? ((A = _ || r || (o != null && (0, G.default)(p, h))),
      (t[19] = r),
      (t[20] = _),
      (t[21] = o),
      (t[22] = h),
      (t[23] = p),
      (t[24] = A))
    : (A = t[24]);
  let j;
  t[25] === E ? (j = t[26]) : ((j = () => void E()), (t[25] = E), (t[26] = j));
  let M;
  t[27] === o
    ? (M = t[28])
    : ((M =
        o == null
          ? (0, q.jsx)(y, {
              id: `chatgptConversations.projectSettings.localFolders.setup`,
              defaultMessage: `Set up local folders`,
              description: `Button to prepare a native workspace for this ChatGPT project without downloading its cloud context`,
            })
          : (0, q.jsx)(y, {
              id: `chatgptConversations.projectSettings.localFolders.save`,
              defaultMessage: `Save folders`,
              description: `Button to save local folder choices separately from cloud project settings`,
            })),
      (t[27] = o),
      (t[28] = M));
  let N;
  t[29] !== _ || t[30] !== A || t[31] !== j || t[32] !== M
    ? ((N = (0, q.jsx)(u, {
        color: `secondary`,
        disabled: A,
        loading: _,
        type: `button`,
        onClick: j,
        children: M,
      })),
      (t[29] = _),
      (t[30] = A),
      (t[31] = j),
      (t[32] = M),
      (t[33] = N))
    : (N = t[33]);
  let P;
  t[34] !== C || t[35] !== h || t[36] !== p
    ? ((P =
        C && (0, G.default)(p, h)
          ? (0, q.jsx)(`span`, {
              className: `text-sm text-codex-description`,
              role: `status`,
              children: (0, q.jsx)(y, {
                id: `chatgptConversations.projectSettings.localFolders.saved`,
                defaultMessage: `Folders saved`,
                description: `Confirmation that native project folders were saved`,
              }),
            })
          : null),
      (t[34] = C),
      (t[35] = h),
      (t[36] = p),
      (t[37] = P))
    : (P = t[37]);
  let F;
  t[38] !== P || t[39] !== N
    ? ((F = (0, q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [N, P] })),
      (t[38] = P),
      (t[39] = N),
      (t[40] = F))
    : (F = t[40]);
  let I;
  t[41] === x
    ? (I = t[42])
    : ((I = x
        ? (0, q.jsx)(`p`, {
            className: `text-sm text-danger`,
            role: `alert`,
            children: (0, q.jsx)(y, {
              id: `chatgptConversations.projectSettings.localFolders.error`,
              defaultMessage: `Could not save local folders. Your cloud settings have not changed. Try again.`,
              description: `Recoverable error from preparing or saving local chat folders`,
            }),
          })
        : null),
      (t[41] = x),
      (t[42] = I));
  let L;
  return (
    t[43] !== F || t[44] !== I || t[45] !== k
      ? ((L = (0, q.jsxs)(`section`, { className: `flex flex-col gap-2`, children: [D, O, k, F, I] })),
        (t[43] = F),
        (t[44] = I),
        (t[45] = k),
        (t[46] = L))
      : (L = t[46]),
    L
  );
}
function H(e) {
  return e;
}
async function U(e, { identity: t, project: n, projectId: r, projectName: i, sources: a }) {
  let o = e.get(T);
  if (o?.accountId !== t.accountId || o?.userId !== t.userId) throw Error(`Project account changed`);
  let s = M();
  if (n == null) {
    if (
      (D(e, r), (await s.ensureChatGptLocalProject?.({ backing: { ...t, projectId: r }, name: i })) == null)
    )
      throw Error(`Local folders could not be set up`);
  } else {
    let t = C(e.get, g.LOCAL_PROJECTS),
      i = t?.[n.id];
    if (i == null || F(r, t, o) !== n.id) throw Error(`Local folders could not be saved`);
    if (!(await s.editLocal({ projectId: n.id, name: i.name, sources: a }))) return !1;
  }
  return (e.query.invalidate(w, g.LOCAL_PROJECTS), !0);
}
var W, G, K, q;
function J() {
  return (J = e(() => {
    ((W = s()),
      (G = t(h(), 1)),
      f(),
      v(),
      (K = a()),
      l(),
      d(),
      x(),
      j(),
      P(),
      E(),
      A(),
      r(),
      O(),
      R(),
      (q = o()));
  }))();
}
export { L as i, J as n, R as r, z as t };
//# sourceMappingURL=local-folders-section-e93c6e47a83b.js.map
