import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AJ as r,
  Amn as i,
  Bnt as a,
  Cpn as o,
  Cu as s,
  F3t as c,
  Hnt as l,
  N3t as u,
  O3t as d,
  Opn as f,
  Sdt as p,
  Spn as m,
  Unt as h,
  Xdt as g,
  hmn as _,
  kmn as v,
  m6t as y,
  xdt as b,
  xu as x,
  zJ as S,
} from "./app-initial-f094ef01c64d.js";
import { Rx as C, Xb as w, Zb as T, zx as E } from "./app-primary-4c40d73a1074.js";
import {
  a as D,
  c as O,
  d as k,
  f as A,
  h as j,
  l as M,
  m as N,
  n as P,
  o as F,
  p as I,
  s as L,
} from "./state-42e575f64eb1.js";
var R,
  z = e(() => {
    (d(), l(), S(), P(), (R = y(r, !1)));
  });
function B(e) {
  let t = (0, V.c)(13),
    { surface: i } = e,
    l = n(r),
    d = f(),
    m = E(),
    g = c(F),
    _ = c(L),
    v = c(R),
    y = c(M),
    x = c(D),
    { data: S } = u(O, `installed`),
    C;
  t[0] !== _ || t[1] !== x || t[2] !== i
    ? ((C = (e) => j(e, i) && k(e, _) && I(e, x) == null),
      (t[0] = _),
      (t[1] = x),
      (t[2] = i),
      (t[3] = C))
    : (C = t[3]);
  let T = (S ?? []).filter(C),
    N,
    P;
  (t[4] !== m || t[5] !== y
    ? ((N = () => {
        if (y == null || m.view.isDestroyed) return;
        let e = m.view.state.tr;
        (e.doc.descendants((t, n) => {
          if (t.type.name !== `browserSkillMention`) return;
          let r = typeof t.attrs.path == `string` ? h(t.attrs.path) : null;
          (r?.accountId !== y.accountId || r?.userId !== (y.userId ?? null)) &&
            e.delete(e.mapping.map(n), e.mapping.map(n + t.nodeSize));
        }),
          e.docChanged && m.view.dispatch(e));
      }),
      (P = [m, y]),
      (t[4] = m),
      (t[5] = y),
      (t[6] = N),
      (t[7] = P))
    : ((N = t[6]), (P = t[7])),
    (0, H.useLayoutEffect)(N, P));
  let z;
  if (
    (t[8] !== m || t[9] !== y || t[10] !== T
      ? ((z = [y, T, m]), (t[8] = m), (t[9] = y), (t[10] = T), (t[11] = z))
      : (z = t[11]),
    s(
      g === !0
        ? T.map((e) => ({
            id: `browser-skill-${e.id}`,
            title: A(e),
            description: e.short_description?.trim() || e.description,
            searchAliases: [e.name],
            triggers: [`@`, `/`],
            requiresEmptyComposer: !1,
            group: d.formatMessage({
              id: `browserSkills.commandGroup`,
              defaultMessage: `Skills`,
              description: `Skills group in composer command suggestions`,
            }),
            Icon: { 16: b, 20: p },
            onSelect: async () => {
              y != null &&
                (l.set(R, !1),
                m.insertMentionAtSelection({
                  kind: `browser-skill`,
                  name: A(e),
                  displayName: A(e),
                  path: a(e.id, y),
                  description: e.description,
                  iconSmall: ``,
                }),
                m.focus());
            },
          }))
        : [],
      z,
    ),
    !v)
  )
    return null;
  let B;
  return (
    t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((B = (0, U.jsx)(w.Attachments, {
          hasVisibleAttachments: !0,
          children: (0, U.jsx)(`span`, {
            role: `alert`,
            children: (0, U.jsx)(o, {
              id: `browserSkills.submissionFailed`,
              defaultMessage: `Selected skills couldn't be checked. Please try again.`,
              description: `The message was not sent because selected skills could not be loaded`,
            }),
          }),
        })),
        (t[12] = B))
      : (B = t[12]),
    B
  );
}
var V, H, U;
e(() => {
  ((V = v()), d(), (H = t(i(), 1)), m(), l(), T(), C(), x(), g(), S(), z(), N(), P(), (U = _()));
})();
export { B as BrowserSkillsComposer };
//# sourceMappingURL=composer-39c510ee3609.js.map
