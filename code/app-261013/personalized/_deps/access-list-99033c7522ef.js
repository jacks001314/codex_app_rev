import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { VDt as t, jDt as n, vzt as r, xMt as i, yzt as a } from "./app-shared-bbfeca5e5737.js";
function o(e) {
  let n = (0, c.c)(7),
    { entries: r } = e,
    { locale: i } = t(),
    a;
  if (n[0] !== r || n[1] !== i) {
    let e;
    (n[3] === i
      ? (e = n[4])
      : ((e = (e, t) =>
          Number(!!e.isTeam) - Number(!!t.isTeam) ||
          Number(!!t.isOwner) - Number(!!e.isOwner) ||
          Number(!!t.isSelf) - Number(!!e.isSelf) ||
          e.label.localeCompare(t.label, i, { sensitivity: `base` })),
        (n[3] = i),
        (n[4] = e)),
      (a = r.toSorted(e).map(s)),
      (n[0] = r),
      (n[1] = i),
      (n[2] = a));
  } else a = n[2];
  let o;
  return (
    n[5] === a ? (o = n[6]) : ((o = (0, u.jsx)(u.Fragment, { children: a })), (n[5] = a), (n[6] = o)),
    o
  );
}
function s(e) {
  return (0, u.jsx)(l.Fragment, { children: e.row }, e.id);
}
var c, l, u;
function d() {
  return (d = e(() => {
    ((c = r()), (l = a()), n(), (u = i()));
  }))();
}
export { d as n, o as t };
//# sourceMappingURL=access-list-99033c7522ef.js.map
