import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  AB as n,
  FBt as r,
  HM as i,
  LNt as a,
  NM as o,
  PBt as s,
  XOt as c,
  ZSt as l,
  iCt as u,
  kB as d,
  nCt as f,
  okt as p,
  tkt as ee,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CDr as te,
  Dk as m,
  FDr as h,
  Hon as g,
  Ipr as _,
  J7n as ne,
  Lpr as re,
  Sln as v,
  Tfr as y,
  Uon as b,
  Von as x,
  Won as S,
  X7n as C,
  _Dt as w,
  kfr as ie,
  kk as ae,
  vDt as oe,
  xln as se,
  yDt as T,
} from "./app-initial-ad16eaadf81f.js";
import { Gr as E, Wr as ce } from "./app-primary-3e00728c2a4c.js";
import { i as D, t as le } from "./hosted-template-catalog-f2a814015bfa.js";
import { a as ue, i as O, o as k, r as de, s as fe } from "./policy-7a95f76d2f92.js";
import { a as pe, c as me, d as A, n as j, s as he, u as ge } from "./state-3908339c33b0.js";
import { i as M, n as N, r as P, t as F } from "./composer-state-5dcb2e5892d0.js";
import { n as I, r as L } from "./mention-appearance-da9d7df70a44.js";
import { i as R, n as z, r as B, t as _e } from "./skill-icon-9cf129fb400a.js";
function ve(e, t, n) {
  if (e.isDestroyed) return;
  let r = e.state.tr;
  (e.state.doc.descendants((e, i) => {
    if (e.type.name !== `browserSkillMention` || typeof e.attrs.path != `string`) return;
    let a = S(e.attrs.path);
    if (a == null || a.accountId !== t.accountId || a.userId !== (t.userId ?? null)) return;
    let o = n.get(a.id);
    o == null ||
      (e.attrs.displayName === o.displayName && e.attrs.skillIcon === o.skillIcon) ||
      r.setNodeMarkup(i, void 0, { ...e.attrs, ...o });
  }),
    r.docChanged && e.dispatch(r.setMeta(`addToHistory`, !1)));
}
function V() {
  return (V = e(() => {
    b();
  }))();
}
function H(e) {
  let r = (0, W.c)(58),
    { surface: i } = e,
    a = t(te),
    s = p(),
    c = oe(),
    l = n(),
    d = u(he),
    m = u(me),
    h = u(P),
    g = u(A),
    _ = u(pe),
    v = u(F),
    y = T(c, be, `document`),
    b;
  r[0] === v ? (b = r[1]) : ((b = { hostId: v }), (r[0] = v), (r[1] = b));
  let C = re(b) && y.length > 0,
    w;
  r[2] !== v || r[3] !== C
    ? ((w = { hostId: v, roots: void 0, enabled: C }), (r[2] = v), (r[3] = C), (r[4] = w))
    : (w = r[4]);
  let { data: E } = ie(w),
    D,
    k;
  (r[5] !== c || r[6] !== s || r[7] !== y || r[8] !== E
    ? ((D = () => {
        E !== void 0 &&
          y.length > 0 &&
          c.syncMentionMetadata({ skills: [], plugins: E, pluginMentionLabels: o(s) });
      }),
      (k = [c, E, y, s]),
      (r[5] = c),
      (r[6] = s),
      (r[7] = y),
      (r[8] = E),
      (r[9] = D),
      (r[10] = k))
    : ((D = r[9]), (k = r[10])),
    (0, G.useLayoutEffect)(D, k));
  let j = T(c, ye, `document`),
    M;
  if (r[11] !== g?.accountId || r[12] !== g?.userId || r[13] !== j) {
    let e;
    (r[15] !== g?.accountId || r[16] !== g?.userId
      ? ((e = (e) => {
          let t = S(e);
          return t != null && t.accountId === g?.accountId && t.userId === (g?.userId ?? null) ? [t.id] : [];
        }),
        (r[15] = g?.accountId),
        (r[16] = g?.userId),
        (r[17] = e))
      : (e = r[17]),
      (M = j.split(`\0`).flatMap(e)),
      (r[11] = g?.accountId),
      (r[12] = g?.userId),
      (r[13] = j),
      (r[14] = M));
  } else M = r[14];
  let N = M,
    L;
  r[18] !== v || r[19] !== N
    ? ((L = { ids: N, hostId: v }), (r[18] = v), (r[19] = N), (r[20] = L))
    : (L = r[20]);
  let R = f(I, L),
    z;
  r[21] !== R || r[22] !== c.view || r[23] !== g
    ? ((z = () => {
        g != null && ve(c.view, g, R);
      }),
      (r[21] = R),
      (r[22] = c.view),
      (r[23] = g),
      (r[24] = z))
    : (z = r[24]);
  let V;
  (r[25] !== R || r[26] !== c || r[27] !== g || r[28] !== j
    ? ((V = [c, g, R, j]), (r[25] = R), (r[26] = c), (r[27] = g), (r[28] = j), (r[29] = V))
    : (V = r[29]),
    (0, G.useLayoutEffect)(z, V));
  let { data: H } = f(ge, `installed`),
    U;
  r[30] !== m || r[31] !== _ || r[32] !== i
    ? ((U = (e) => fe(e, i) && de(e, m) && ue(e, _) == null),
      (r[30] = m),
      (r[31] = _),
      (r[32] = i),
      (r[33] = U))
    : (U = r[33]);
  let q = (H ?? []).filter(U),
    J;
  r[34] !== c.view || r[35] !== g
    ? ((J = () => {
        if (g == null || c.view.isDestroyed) return;
        let e = c.view.state.tr;
        (e.doc.descendants((t, n) => {
          if (t.type.name !== `browserSkillMention`) return;
          let r = typeof t.attrs.path == `string` ? S(t.attrs.path) : null;
          (r?.accountId !== g.accountId || r?.userId !== (g.userId ?? null)) &&
            e.delete(e.mapping.map(n), e.mapping.map(n + t.nodeSize));
        }),
          e.docChanged && c.view.dispatch(e));
      }),
      (r[34] = c.view),
      (r[35] = g),
      (r[36] = J))
    : (J = r[36]);
  let Y;
  (r[37] !== c || r[38] !== g || r[39] !== j
    ? ((Y = [c, g, j]), (r[37] = c), (r[38] = g), (r[39] = j), (r[40] = Y))
    : (Y = r[40]),
    (0, G.useLayoutEffect)(J, Y));
  let X;
  r[41] !== c.view || r[42] !== g || r[43] !== H || r[44] !== l
    ? ((X = () => {
        let e = () => {
          if (g == null || c.view.isDestroyed) return;
          let e = c.view.state.tr;
          (e.doc.descendants((t, n) => {
            if (t.type.name !== `browserSkillMention`) return;
            let r = typeof t.attrs.path == `string` ? S(t.attrs.path) : null;
            if (r?.accountId !== g.accountId || r?.userId !== (g.userId ?? null)) return;
            let i = H?.find((e) => e.id === r.id);
            if (i == null) return;
            let a = B(i, l);
            t.attrs.iconSmall !== a && e.setNodeMarkup(n, void 0, { ...t.attrs, iconSmall: a });
          }),
            e.docChanged && c.view.dispatch(e.setMeta(`addToHistory`, !1)));
        };
        return (
          e(),
          se(c.view, (t) => {
            t && e();
          })
        );
      }),
      (r[41] = c.view),
      (r[42] = g),
      (r[43] = H),
      (r[44] = l),
      (r[45] = X))
    : (X = r[45]);
  let Z;
  (r[46] !== c || r[47] !== g || r[48] !== H || r[49] !== l
    ? ((Z = [c, g, H, l]), (r[46] = c), (r[47] = g), (r[48] = H), (r[49] = l), (r[50] = Z))
    : (Z = r[50]),
    (0, G.useLayoutEffect)(X, Z));
  let Q;
  if (
    (r[51] !== c || r[52] !== g || r[53] !== s || r[54] !== l || r[55] !== q
      ? ((Q = [g, q, c, l, s]), (r[51] = c), (r[52] = g), (r[53] = s), (r[54] = l), (r[55] = q), (r[56] = Q))
      : (Q = r[56]),
    ae(
      d === !0
        ? q.map((e) => ({
            id: `browser-skill-${e.id}`,
            title: O(e),
            description: e.short_description?.trim() || e.description,
            searchAliases: [e.name],
            triggers: [`@`, `/`],
            requiresEmptyComposer: !1,
            group: s.formatMessage({
              id: `browserSkills.commandGroup`,
              defaultMessage: `Skills`,
              description: `Skills group in composer command suggestions`,
            }),
            leftAccessory: (0, K.jsx)(_e, { skill: e, variant: `menu` }),
            onSelect: async () => {
              g != null &&
                (a.set(P, !1),
                c.insertMentionAtSelection({
                  kind: `browser-skill`,
                  name: O(e),
                  ...le(e),
                  path: x(e.id, g),
                  description: e.description,
                  iconSmall: B(e, l),
                }),
                c.focus());
            },
          }))
        : [],
      Q,
    ),
    !h)
  )
    return null;
  let $;
  return (
    r[57] === Symbol.for(`react.memo_cache_sentinel`)
      ? (($ = (0, K.jsx)(ne.Attachments, {
          hasVisibleAttachments: !0,
          children: (0, K.jsx)(`span`, {
            role: `alert`,
            children: (0, K.jsx)(ee, { ...ce.submissionFailed }),
          }),
        })),
        (r[57] = $))
      : ($ = r[57]),
    $
  );
}
function ye(e) {
  return g(e.getPlainText()).map(U).join(`\0`);
}
function U(e) {
  return e.path;
}
function be(e) {
  return e.getMentionedPluginIdsKey({ includeRepeated: !0 });
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = s()),
      l(),
      (G = r()),
      c(),
      D(),
      b(),
      C(),
      i(),
      V(),
      v(),
      w(),
      m(),
      _(),
      y(),
      h(),
      d(),
      E(),
      N(),
      L(),
      k(),
      z(),
      R(),
      j(),
      (K = a()));
  }))();
}
function J() {
  return (J = e(() => {
    (q(), N());
  }))();
}
J();
export { H as BrowserSkillsComposer, M as submitWithBrowserSkills };
//# sourceMappingURL=composer-entry-e9bf526e4ba5.js.map
