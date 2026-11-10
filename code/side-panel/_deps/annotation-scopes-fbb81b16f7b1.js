import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
function t(e) {
  switch (e.type) {
    case `workbook-range`:
    case `workbook-floating-element`:
      return `workbook:${e.sheetName}`;
    case `presentation-element-selection`:
    case `presentation-region`:
      return `presentation:${e.slideId}`;
    default:
      return e;
  }
}
function n(e) {
  switch (e.type) {
    case `workbook-range`:
      return `${e.type}:${e.sheetName}:${e.rect.r1}:${e.rect.c1}:${e.rect.r2}:${e.rect.c2}`;
    case `workbook-floating-element`:
      return `${e.type}:${e.sheetName}:${e.elementId}`;
    case `presentation-element-selection`:
      return `${e.type}:${e.slideId}:${[...e.elementIds].sort().join(`,`)}`;
    case `presentation-region`:
      return `${e.type}:${e.slideId}:${e.frame.left}:${e.frame.top}:${e.frame.width}:${e.frame.height}`;
    default:
      return e;
  }
}
function r(e) {
  let t = new Map(),
    r = new Map();
  for (let i of e) {
    let e = n(i.target),
      a = r.get(e) ?? 0;
    (t.set(i.annotationId, a), r.set(e, a + 1));
  }
  return t;
}
function i(e, n) {
  let r = t(n),
    i = new Set(
      e
        .filter((e) => t(e.target) === r)
        .map((e) => e.annotationNumber)
        .filter((e) => e > 0),
    ),
    a = 1;
  for (; i.has(a);) a += 1;
  return a;
}
var a = e(() => {});
export { r as n, a as r, i as t };
//# sourceMappingURL=annotation-scopes-fbb81b16f7b1.js.map
