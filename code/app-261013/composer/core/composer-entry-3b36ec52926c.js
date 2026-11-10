import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $j as t,
  Fz as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  Pz as o,
  VDt as ee,
  Vxt as s,
  Wj as c,
  jDt as l,
  vzt as u,
  xMt as d,
  yzt as f,
  zxt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  Aan as m,
  Bcr as te,
  Crn as h,
  FAt as ne,
  GO as g,
  IAt as _,
  Icr as v,
  Jlr as re,
  PAt as y,
  Srn as b,
  brn as ie,
  d6n as ae,
  kan as oe,
  p6n as x,
  qO as se,
  qlr as S,
  sCr as ce,
  xrn as C,
  yCr as w,
} from "./app-initial-5851df3f6cb1.js";
import { $r as T, ei as E } from "./app-primary-fe8a450b3b04.js";
import { i as D, t as le } from "./hosted-template-catalog-e317c72cbbc5.js";
import { a as ue, i as O, o as k, r as de, s as fe } from "./policy-7a95f76d2f92.js";
import { a as pe, c as me, d as he, n as A, s as ge, u as _e } from "./state-d523931c59ee.js";
import { i as j, n as M, r as N, t as P } from "./composer-state-fb90173904c6.js";
import { n as F, r as I } from "./mention-appearance-8f219dc5aa6b.js";
import { i as L, n as R, r as z, t as ve } from "./skill-icon-d58831a81a6d.js";
function ye(e, t, n) {
  if (e.isDestroyed) return;
  let r = e.state.tr;
  (e.state.doc.descendants((e, i) => {
    if (e.type.name !== `browserSkillMention` || typeof e.attrs.path != `string`) return;
    let a = h(e.attrs.path);
    if (a == null || a.accountId !== t.accountId || a.userId !== (t.userId ?? null)) return;
    let o = n.get(a.id);
    o == null ||
      (e.attrs.displayName === o.displayName && e.attrs.skillIcon === o.skillIcon) ||
      r.setNodeMarkup(i, void 0, { ...e.attrs, ...o });
  }),
    r.docChanged && e.dispatch(r.setMeta(`addToHistory`, !1)));
}
function B() {
  return (B = e(() => {
    b();
  }))();
}
function V(e) {
  let t = (0, W.c)(58),
    { surface: a } = e,
    o = i(ce),
    l = ee(),
    u = ne(),
    d = n(),
    f = s(ge),
    m = s(me),
    g = s(N),
    v = s(he),
    y = s(pe),
    b = s(P),
    x = _(u, be, `document`),
    S;
  t[0] === b ? (S = t[1]) : ((S = { hostId: b }), (t[0] = b), (t[1] = S));
  let C = re(S) && x.length > 0,
    w;
  t[2] !== b || t[3] !== C
    ? ((w = { hostId: b, roots: void 0, enabled: C }), (t[2] = b), (t[3] = C), (t[4] = w))
    : (w = t[4]);
  let { data: E } = te(w),
    D,
    k;
  (t[5] !== u || t[6] !== l || t[7] !== x || t[8] !== E
    ? ((D = () => {
        E !== void 0 &&
          x.length > 0 &&
          u.syncMentionMetadata({ skills: [], plugins: E, pluginMentionLabels: c(l) });
      }),
      (k = [u, E, x, l]),
      (t[5] = u),
      (t[6] = l),
      (t[7] = x),
      (t[8] = E),
      (t[9] = D),
      (t[10] = k))
    : ((D = t[9]), (k = t[10])),
    (0, G.useLayoutEffect)(D, k));
  let A = _(u, H, `document`),
    j;
  if (t[11] !== v?.accountId || t[12] !== v?.userId || t[13] !== A) {
    let e;
    (t[15] !== v?.accountId || t[16] !== v?.userId
      ? ((e = (e) => {
          let t = h(e);
          return t != null && t.accountId === v?.accountId && t.userId === (v?.userId ?? null) ? [t.id] : [];
        }),
        (t[15] = v?.accountId),
        (t[16] = v?.userId),
        (t[17] = e))
      : (e = t[17]),
      (j = A.split(`\0`).flatMap(e)),
      (t[11] = v?.accountId),
      (t[12] = v?.userId),
      (t[13] = A),
      (t[14] = j));
  } else j = t[14];
  let M = j,
    I;
  t[18] !== b || t[19] !== M
    ? ((I = { ids: M, hostId: b }), (t[18] = b), (t[19] = M), (t[20] = I))
    : (I = t[20]);
  let L = p(F, I),
    R;
  t[21] !== L || t[22] !== u.view || t[23] !== v
    ? ((R = () => {
        v != null && ye(u.view, v, L);
      }),
      (t[21] = L),
      (t[22] = u.view),
      (t[23] = v),
      (t[24] = R))
    : (R = t[24]);
  let B;
  (t[25] !== L || t[26] !== u || t[27] !== v || t[28] !== A
    ? ((B = [u, v, L, A]), (t[25] = L), (t[26] = u), (t[27] = v), (t[28] = A), (t[29] = B))
    : (B = t[29]),
    (0, G.useLayoutEffect)(R, B));
  let { data: V } = p(_e, `installed`),
    U;
  t[30] !== m || t[31] !== y || t[32] !== a
    ? ((U = (e) => fe(e, a) && de(e, m) && ue(e, y) == null),
      (t[30] = m),
      (t[31] = y),
      (t[32] = a),
      (t[33] = U))
    : (U = t[33]);
  let q = (V ?? []).filter(U),
    J;
  t[34] !== u.view || t[35] !== v
    ? ((J = () => {
        if (v == null || u.view.isDestroyed) return;
        let e = u.view.state.tr;
        (e.doc.descendants((t, n) => {
          if (t.type.name !== `browserSkillMention`) return;
          let r = typeof t.attrs.path == `string` ? h(t.attrs.path) : null;
          (r?.accountId !== v.accountId || r?.userId !== (v.userId ?? null)) &&
            e.delete(e.mapping.map(n), e.mapping.map(n + t.nodeSize));
        }),
          e.docChanged && u.view.dispatch(e));
      }),
      (t[34] = u.view),
      (t[35] = v),
      (t[36] = J))
    : (J = t[36]);
  let Y;
  (t[37] !== u || t[38] !== v || t[39] !== A
    ? ((Y = [u, v, A]), (t[37] = u), (t[38] = v), (t[39] = A), (t[40] = Y))
    : (Y = t[40]),
    (0, G.useLayoutEffect)(J, Y));
  let X;
  t[41] !== u.view || t[42] !== v || t[43] !== V || t[44] !== d
    ? ((X = () => {
        let e = () => {
          if (v == null || u.view.isDestroyed) return;
          let e = u.view.state.tr;
          (e.doc.descendants((t, n) => {
            if (t.type.name !== `browserSkillMention`) return;
            let r = typeof t.attrs.path == `string` ? h(t.attrs.path) : null;
            if (r?.accountId !== v.accountId || r?.userId !== (v.userId ?? null)) return;
            let i = V?.find((e) => e.id === r.id);
            if (i == null) return;
            let a = z(i, d);
            t.attrs.iconSmall !== a && e.setNodeMarkup(n, void 0, { ...t.attrs, iconSmall: a });
          }),
            e.docChanged && u.view.dispatch(e.setMeta(`addToHistory`, !1)));
        };
        return (
          e(),
          oe(u.view, (t) => {
            t && e();
          })
        );
      }),
      (t[41] = u.view),
      (t[42] = v),
      (t[43] = V),
      (t[44] = d),
      (t[45] = X))
    : (X = t[45]);
  let Z;
  (t[46] !== u || t[47] !== v || t[48] !== V || t[49] !== d
    ? ((Z = [u, v, V, d]), (t[46] = u), (t[47] = v), (t[48] = V), (t[49] = d), (t[50] = Z))
    : (Z = t[50]),
    (0, G.useLayoutEffect)(X, Z));
  let Q;
  if (
    (t[51] !== u || t[52] !== v || t[53] !== l || t[54] !== d || t[55] !== q
      ? ((Q = [v, q, u, d, l]), (t[51] = u), (t[52] = v), (t[53] = l), (t[54] = d), (t[55] = q), (t[56] = Q))
      : (Q = t[56]),
    se(
      f === !0
        ? q.map((e) => ({
            id: `browser-skill-${e.id}`,
            title: O(e),
            description: e.short_description?.trim() || e.description,
            searchAliases: [e.name],
            triggers: [`@`, `/`],
            requiresEmptyComposer: !1,
            group: l.formatMessage({
              id: `browserSkills.commandGroup`,
              defaultMessage: `Skills`,
              description: `Skills group in composer command suggestions`,
            }),
            leftAccessory: (0, K.jsx)(ve, { skill: e, variant: `menu` }),
            onSelect: async () => {
              v != null &&
                (o.set(N, !1),
                u.insertMentionAtSelection({
                  kind: `browser-skill`,
                  name: O(e),
                  ...le(e),
                  path: ie(e.id, v),
                  description: e.description,
                  iconSmall: z(e, d),
                }),
                u.focus());
            },
          }))
        : [],
      Q,
    ),
    !g)
  )
    return null;
  let $;
  return (
    t[57] === Symbol.for(`react.memo_cache_sentinel`)
      ? (($ = (0, K.jsx)(ae.Attachments, {
          hasVisibleAttachments: !0,
          children: (0, K.jsx)(`span`, { role: `alert`, children: (0, K.jsx)(r, { ...T.submissionFailed }) }),
        })),
        (t[57] = $))
      : ($ = t[57]),
    $
  );
}
function H(e) {
  return C(e.getPlainText()).map(U).join(`\0`);
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
    ((W = u()),
      a(),
      (G = f()),
      l(),
      D(),
      b(),
      x(),
      t(),
      B(),
      m(),
      y(),
      g(),
      S(),
      v(),
      w(),
      o(),
      E(),
      M(),
      I(),
      k(),
      R(),
      L(),
      A(),
      (K = d()));
  }))();
}
function J() {
  return (J = e(() => {
    (q(), M());
  }))();
}
J();
export { V as BrowserSkillsComposer, j as submitWithBrowserSkills };
//# sourceMappingURL=composer-entry-3b36ec52926c.js.map
