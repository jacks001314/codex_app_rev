import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  CCt as n,
  FBt as r,
  LNt as i,
  PBt as a,
  XOt as o,
  ZSt as s,
  iCt as c,
  tkt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $7n as u,
  $rn as d,
  BJt as f,
  CDr as p,
  DIn as m,
  FDr as h,
  FIn as g,
  GIn as _,
  Hr as v,
  Jr as y,
  Wrn as b,
  _Dt as x,
  bIn as S,
  e9n as C,
  m2n as w,
  tin as T,
  xIn as E,
  yDt as D,
  zJt as O,
} from "./app-initial-ad16eaadf81f.js";
function k(e) {
  let t = (0, M.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ composerController: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = (0, N.useContext)(u),
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
  let n = (0, M.c)(15),
    r,
    i,
    a;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]))
    : (({ composerController: r, onRunLocationChange: i, ...a } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a));
  let o = t(p),
    s = c(F),
    u = D(r, j, `document`),
    d;
  n[4] !== s || n[5] !== u
    ? ((d =
        s || u
          ? (0, P.jsx)(l, {
              id: `pages.composer.runLocation.draftPresent`,
              defaultMessage: `Choose where to run before adding a message or attachments`,
              description: `Explains why a Page chat cannot change between local and cloud execution while it has an unsent draft, because the two backends keep separate drafts`,
            })
          : void 0),
      (n[4] = s),
      (n[5] = u),
      (n[6] = d))
    : (d = n[6]);
  let f;
  n[7] !== r || n[8] !== i || n[9] !== o
    ? ((f = (e) => {
        !r.hasText() && !o.get(F) && i(e);
      }),
      (n[7] = r),
      (n[8] = i),
      (n[9] = o),
      (n[10] = f))
    : (f = n[10]);
  let m;
  return (
    n[11] !== a || n[12] !== d || n[13] !== f
      ? ((m = (0, P.jsx)(v, { ...a, changeDisabledReason: d, onRunLocationChange: f })),
        (n[11] = a),
        (n[12] = d),
        (n[13] = f),
        (n[14] = m))
      : (m = n[14]),
    m
  );
}
function j(e) {
  return e.hasText();
}
var M, N, P, F;
function I() {
  return (I = e(() => {
    ((M = a()),
      s(),
      (N = r()),
      o(),
      _(),
      y(),
      T(),
      C(),
      x(),
      O(),
      h(),
      (P = i()),
      (F = n(p, ({ get: e, scope: t }) => {
        let n = t.value.kind === `chatgpt` ? t.value.conversationId : null;
        return (
          d(t) ||
          e(b) ||
          e(f) != null ||
          (n != null && (e(w, n) || e(m, n) != null || e(S, n).length > 0 || e(E, n) || e(g, n).length > 0))
        );
      })));
  }))();
}
export { I as n, k as t };
//# sourceMappingURL=work-run-location-control-fca53e5e63f9.js.map
