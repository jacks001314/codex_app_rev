import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  Dz as n,
  Hl as r,
  IDt as i,
  Mm as a,
  Pxt as o,
  TO as s,
  Vl as c,
  Vxt as l,
  jDt as u,
  jm as d,
  kz as f,
  vzt as p,
  xMt as m,
} from "./app-shared-bbfeca5e5737.js";
import { n as h, r as g } from "./scope-fb5d3b4015cc.js";
function _(e) {
  let t = (0, y.c)(6),
    { file: n, disabled: r, onSelect: i } = e,
    a = l(g);
  if (a == null || a.file.libraryFileId !== n.libraryFileId) return null;
  let o;
  t[0] !== a || t[1] !== i ? ((o = i ?? (() => a.open())), (t[0] = a), (t[1] = i), (t[2] = o)) : (o = t[2]);
  let s;
  return (
    t[3] !== r || t[4] !== o
      ? ((s = (0, b.jsx)(v, { disabled: r, onSelect: o })), (t[3] = r), (t[4] = o), (t[5] = s))
      : (s = t[5]),
    s
  );
}
function v(e) {
  let t = (0, y.c)(5),
    { disabled: r, onSelect: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, b.jsx)(n, { icon: { assets: { 16: c, 20: d } } })), (t[0] = o))
    : (o = t[0]);
  let l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, b.jsx)(i, {
        id: `chatgptFilePreview.versionHistory.title`,
        defaultMessage: `Version history`,
        description: `Title-menu action that opens a side panel with a Library file's saved versions`,
      })),
      (t[1] = l))
    : (l = t[1]);
  let u;
  return (
    t[2] !== r || t[3] !== a
      ? ((u = (0, b.jsx)(s.Item, { disabled: r, leftIcon: o, onSelect: a, children: l })),
        (t[2] = r),
        (t[3] = a),
        (t[4] = u))
      : (u = t[4]),
    u
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = p()), r(), a(), o(), u(), t(), f(), h(), (b = m()));
  }))();
}
export { _ as n, x as r, v as t };
//# sourceMappingURL=menu-53a4f4c3463d.js.map
