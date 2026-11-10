import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EE as t,
  SE as n,
  TE as r,
  Tx as i,
  Wrn as a,
  _dn as o,
  bE as s,
  ein as c,
  mcn as l,
  ncn as u,
  rcn as d,
  vdn as f,
  wx as p,
  xE as m,
} from "./app-shared-7552fc8d5d82.js";
function h(e) {
  let t = (0, g.c)(17),
    { ancestors: n, current: i, textSm: a } = e,
    o = c(),
    l;
  t[0] === o
    ? (l = t[1])
    : ((l = o.formatMessage({
        id: `toolbarBreadcrumb.label`,
        defaultMessage: `Breadcrumb`,
        description: `Accessible label for toolbar breadcrumb navigation`,
      })),
      (t[0] = o),
      (t[1] = l));
  let d = a ? `text-sm` : `text-base`,
    f;
  t[2] === d
    ? (f = t[3])
    : ((f = u(`flex min-w-0 items-center gap-1 text-codex-description`, d)),
      (t[2] = d),
      (t[3] = f));
  let h;
  if (t[4] !== n || t[5] !== a) {
    let e;
    (t[7] === a
      ? (e = t[8])
      : ((e = (e, t) => {
          let { id: n, ...i } = e,
            o =
              `content` in i
                ? i.content
                : (0, v.jsx)(`span`, { className: `min-w-0 truncate`, children: i.label }),
            c = o;
          if (!(`content` in i)) {
            let { label: e, ...t } = i,
              n = { className: u(`min-w-0`, a && `text-sm`), color: `ghost`, size: `toolbar` };
            c =
              t.to == null
                ? (0, v.jsx)(s, { ...n, onClick: t.onClick, children: o })
                : (0, v.jsx)(m, { ...t, ...n, children: o });
          }
          return (0, v.jsxs)(
            _.Fragment,
            { children: [t > 0 ? (0, v.jsx)(r, { className: `shrink-0`, asset: p }) : null, c] },
            n,
          );
        }),
        (t[7] = a),
        (t[8] = e)),
      (h = n.map(e)),
      (t[4] = n),
      (t[5] = a),
      (t[6] = h));
  } else h = t[6];
  let y;
  t[9] !== n.length || t[10] !== i
    ? ((y =
        i == null
          ? null
          : (0, v.jsxs)(v.Fragment, {
              children: [
                n.length > 0 ? (0, v.jsx)(r, { className: `shrink-0`, asset: p }) : null,
                (0, v.jsx)(`span`, {
                  "aria-current": `page`,
                  className: `flex h-token-button-composer min-w-0 flex-auto items-center truncate px-2 text-default`,
                  children: i,
                }),
              ],
            })),
      (t[9] = n.length),
      (t[10] = i),
      (t[11] = y))
    : (y = t[11]);
  let b;
  return (
    t[12] !== l || t[13] !== f || t[14] !== h || t[15] !== y
      ? ((b = (0, v.jsxs)(`nav`, { "aria-label": l, className: f, children: [h, y] })),
        (t[12] = l),
        (t[13] = f),
        (t[14] = h),
        (t[15] = y),
        (t[16] = b))
      : (b = t[16]),
    b
  );
}
var g, _, v;
function y() {
  return (y = e(() => {
    ((g = o()), i(), d(), (_ = f()), a(), t(), n(), (v = l()));
  }))();
}
export { y as n, h as t };
//# sourceMappingURL=toolbar-breadcrumb-c618ff75b2d3.js.map
