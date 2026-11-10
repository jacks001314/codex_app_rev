import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cat as t,
  Cot as n,
  Jbt as r,
  Pxt as i,
  Qvt as a,
  nSt as o,
  rst as s,
  wot as c,
  xat as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  FEr as u,
  JZn as d,
  PEr as f,
  VQn as p,
  VZn as m,
  WQn as h,
  _Ct as g,
  _Mr as _,
  fMr as v,
  fOn as y,
  uOn as b,
  vCt as x,
  xNn as S,
  yjn as C,
} from "./app-initial-5851df3f6cb1.js";
function w(e, t) {
  return e.type === `chatgpt` ? l(t) : g(a(r(t)), e.hostId);
}
function T(e, t) {
  return t.conversationId == null
    ? t.type === `chatgpt`
      ? e.get(f, { name: `chatgpt` }).isCapable && e.get(_).status === `allowed`
      : t.hostId !== `durable` || e.get(b)
    : !0;
}
var E;
function D() {
  return (D = e(() => {
    (i(),
      s(),
      u(),
      v(),
      S(),
      C(),
      t(),
      y(),
      c(),
      x(),
      (E = o(
        n,
        (e, { get: t }) =>
          e.type !== `chatgpt` ||
          e.conversationId == null ||
          (!t(p, e.conversationId) && !t(h, e.conversationId) && !d(t(m, e.conversationId))),
      )));
  }))();
}
export { E as i, w as n, D as r, T as t };
//# sourceMappingURL=target-2990e1e26a79.js.map
