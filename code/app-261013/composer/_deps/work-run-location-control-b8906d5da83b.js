import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Ixt as n,
  Pxt as r,
  Vxt as i,
  jDt as a,
  oSt as o,
  vzt as s,
  xMt as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  AXt as u,
  Cen as d,
  IAt as f,
  Men as p,
  Mr as m,
  PAt as h,
  Pen as g,
  Rr as _,
  VQn as v,
  XMn as y,
  ZMn as b,
  _6n as x,
  dNn as S,
  g6n as C,
  kXt as w,
  rNn as T,
  sCr as E,
  xNn as D,
  yCr as O,
} from "./app-initial-5851df3f6cb1.js";
function k(e) {
  let t = (0, M.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ composerController: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = (0, N.useContext)(C),
    a = r ?? i,
    o;
  return (
    t[3] !== a || t[4] !== n
      ? ((o = a == null ? null : (0, P.jsx)(A, { ...n, composerController: a })),
        (t[3] = a),
        (t[4] = n),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function A(e) {
  let r = (0, M.c)(15),
    a,
    o,
    s;
  r[0] === e
    ? ((a = r[1]), (o = r[2]), (s = r[3]))
    : (({ composerController: a, onRunLocationChange: o, ...s } = e),
      (r[0] = e),
      (r[1] = a),
      (r[2] = o),
      (r[3] = s));
  let c = n(E),
    l = i(F),
    u = f(a, j, `document`),
    d;
  r[4] !== l || r[5] !== u
    ? ((d =
        l || u
          ? (0, P.jsx)(t, {
              id: `pages.composer.runLocation.draftPresent`,
              defaultMessage: `Choose where to run before adding a message or attachments`,
              description: `Explains why a Page chat cannot change between local and cloud execution while it has an unsent draft, because the two backends keep separate drafts`,
            })
          : void 0),
      (r[4] = l),
      (r[5] = u),
      (r[6] = d))
    : (d = r[6]);
  let p;
  r[7] !== a || r[8] !== o || r[9] !== c
    ? ((p = (e) => {
        !a.hasText() && !c.get(F) && o(e);
      }),
      (r[7] = a),
      (r[8] = o),
      (r[9] = c),
      (r[10] = p))
    : (p = r[10]);
  let h;
  return (
    r[11] !== s || r[12] !== d || r[13] !== p
      ? ((h = (0, P.jsx)(m, { ...s, changeDisabledReason: d, onRunLocationChange: p })),
        (r[11] = s),
        (r[12] = d),
        (r[13] = p),
        (r[14] = h))
      : (h = r[14]),
    h
  );
}
function j(e) {
  return e.hasText();
}
var M, N, P, F;
function I() {
  return (I = e(() => {
    ((M = s()),
      r(),
      (N = l()),
      a(),
      D(),
      _(),
      g(),
      x(),
      h(),
      w(),
      O(),
      (P = c()),
      (F = o(E, ({ get: e, scope: t }) => {
        let n = t.value.kind === `chatgpt` ? t.value.conversationId : null;
        return (
          p(t) ||
          e(d) ||
          e(u) != null ||
          (n != null && (e(v, n) || e(T, n) != null || e(y, n).length > 0 || e(b, n) || e(S, n).length > 0))
        );
      })));
  }))();
}
export { I as n, k as t };
//# sourceMappingURL=work-run-location-control-b8906d5da83b.js.map
