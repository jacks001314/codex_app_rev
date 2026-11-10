import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  H4t as t,
  Ten as n,
  W4t as r,
  Xdt as i,
  cL as a,
  hmn as o,
  jdt as s,
  kmn as c,
  q4t as l,
  sL as u,
} from "./app-initial-f094ef01c64d.js";
import { t as d } from "./terminal-panel-ded4b9a894ab.js";
function f(e) {
  let t = (0, h.c)(13),
    { title: n, cwd: r, homeDirectory: i, outputTail: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, g.jsx)(s, {})), (t[0] = o))
    : (o = t[0]);
  let c;
  t[1] !== r || t[2] !== i || t[3] !== n
    ? ((c = m(n, r, i)), (t[1] = r), (t[2] = i), (t[3] = n), (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === a
    ? (l = t[6])
    : ((l = a?.length
        ? {
            kind: `text`,
            content: (0, g.jsx)(`span`, {
              className: `text-codex-terminal-foreground`,
              "data-codex-xterm": !0,
              children: a.map(p),
            }),
            lines: 4,
            variant: `code`,
          }
        : null),
      (t[5] = a),
      (t[6] = l));
  let d;
  t[7] === l ? (d = t[8]) : ((d = [l]), (t[7] = l), (t[8] = d));
  let f;
  return (
    t[9] !== c || t[10] !== d || t[11] !== n
      ? ((f = (0, g.jsx)(u, { icon: o, subtitle: c, title: n, sections: d })),
        (t[9] = c),
        (t[10] = d),
        (t[11] = n),
        (t[12] = f))
      : (f = t[12]),
    f
  );
}
function p(e, t) {
  return (0, g.jsx)(`span`, { style: e.style, children: e.text }, t);
}
function m(e, t, i) {
  if (t == null) return null;
  let a = l(e.trim());
  return (
    i != null && (a === `~` || a.startsWith(`~/`)) && (a = r(i, a.slice(2))), n(a, t) ? null : t
  );
}
var h,
  g,
  _ = e(() => {
    ((h = c()), a(), i(), t(), d(), (g = o()));
  });
export { _ as n, f as t };
//# sourceMappingURL=thumbnail-bbff7dbb28d2.js.map
