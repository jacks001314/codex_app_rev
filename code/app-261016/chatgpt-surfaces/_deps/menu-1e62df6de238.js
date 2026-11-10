import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Eu as t,
  LNt as n,
  PBt as r,
  SB as i,
  Tu as a,
  XOt as o,
  ZSt as s,
  ck as c,
  iCt as l,
  lh as u,
  rk as d,
  tkt as f,
  uh as p,
  wB as m,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as h, r as g } from "./scope-d4449ae19bab.js";
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
    { disabled: n, onSelect: r } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, b.jsx)(i, { icon: { assets: { 16: a, 20: u } } })), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, b.jsx)(f, {
        id: `chatgptFilePreview.versionHistory.title`,
        defaultMessage: `Version history`,
        description: `Title-menu action that opens a side panel with a Library file's saved versions`,
      })),
      (t[1] = s))
    : (s = t[1]);
  let c;
  return (
    t[2] !== n || t[3] !== r
      ? ((c = (0, b.jsx)(d.Item, { disabled: n, leftIcon: o, onSelect: r, children: s })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = r()), t(), p(), s(), o(), c(), m(), h(), (b = n()));
  }))();
}
export { _ as n, x as r, v as t };
//# sourceMappingURL=menu-1e62df6de238.js.map
