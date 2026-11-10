import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as n,
  Amn as r,
  FI as i,
  Opn as a,
  PI as o,
  Rpn as s,
  Spn as c,
  gMt as l,
  hMt as u,
  hmn as d,
  kMt as f,
  kmn as p,
  zpn as m,
} from "./app-initial-f094ef01c64d.js";
function h(e) {
  let t = (0, g.c)(17),
    { ancestors: n, current: r, textSm: i } = e,
    c = a(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `toolbarBreadcrumb.label`,
        defaultMessage: `Breadcrumb`,
        description: `Accessible label for toolbar breadcrumb navigation`,
      })),
      (t[0] = c),
      (t[1] = l));
  let d = i ? `text-sm` : `text-base`,
    p;
  t[2] === d
    ? (p = t[3])
    : ((p = s(`flex min-w-0 items-center gap-1 text-codex-description`, d)),
      (t[2] = d),
      (t[3] = p));
  let m;
  if (t[4] !== n || t[5] !== i) {
    let e;
    (t[7] === i
      ? (e = t[8])
      : ((e = (e, t) =>
          (0, v.jsxs)(
            _.Fragment,
            {
              children: [
                t > 0 ? (0, v.jsx)(u, { className: `shrink-0`, asset: o }) : null,
                `content` in e
                  ? e.content
                  : (0, v.jsx)(f, {
                      className: s(`min-w-0`, i && `text-sm`),
                      color: `ghost`,
                      size: `toolbar`,
                      onClick: e.onClick,
                      children: (0, v.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: e.label,
                      }),
                    }),
              ],
            },
            e.id,
          )),
        (t[7] = i),
        (t[8] = e)),
      (m = n.map(e)),
      (t[4] = n),
      (t[5] = i),
      (t[6] = m));
  } else m = t[6];
  let h;
  t[9] !== n.length || t[10] !== r
    ? ((h =
        r == null
          ? null
          : (0, v.jsxs)(v.Fragment, {
              children: [
                n.length > 0 ? (0, v.jsx)(u, { className: `shrink-0`, asset: o }) : null,
                (0, v.jsx)(`span`, {
                  "aria-current": `page`,
                  className: `flex h-token-button-composer min-w-0 flex-auto items-center truncate px-2 text-default`,
                  children: r,
                }),
              ],
            })),
      (t[9] = n.length),
      (t[10] = r),
      (t[11] = h))
    : (h = t[11]);
  let y;
  return (
    t[12] !== l || t[13] !== p || t[14] !== m || t[15] !== h
      ? ((y = (0, v.jsxs)(`nav`, { "aria-label": l, className: p, children: [m, h] })),
        (t[12] = l),
        (t[13] = p),
        (t[14] = m),
        (t[15] = h),
        (t[16] = y))
      : (y = t[16]),
    y
  );
}
var g,
  _,
  v,
  y = e(() => {
    ((g = p()), i(), m(), (_ = t(r(), 1)), c(), l(), n(), (v = d()));
  });
export { y as n, h as t };
//# sourceMappingURL=toolbar-breadcrumb-76687ef37675.js.map
