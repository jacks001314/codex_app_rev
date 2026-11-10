import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  DD as n,
  ED as r,
  Mz as i,
  Nz as a,
  VDt as o,
  _Mt as s,
  e3 as c,
  gMt as l,
  jDt as u,
  t3 as d,
  vzt as f,
  xMt as p,
  yzt as m,
} from "./app-shared-bbfeca5e5737.js";
function h(e) {
  let n = (0, g.c)(17),
    { ancestors: a, current: s, textSm: u } = e,
    d = o(),
    f;
  n[0] === d
    ? (f = n[1])
    : ((f = d.formatMessage({
        id: `toolbarBreadcrumb.label`,
        defaultMessage: `Breadcrumb`,
        description: `Accessible label for toolbar breadcrumb navigation`,
      })),
      (n[0] = d),
      (n[1] = f));
  let p = u ? `text-sm` : `text-base`,
    m;
  n[2] === p
    ? (m = n[3])
    : ((m = l(`flex min-w-0 items-center gap-1 text-codex-description`, p)), (n[2] = p), (n[3] = m));
  let h;
  if (n[4] !== a || n[5] !== u) {
    let e;
    (n[7] === u
      ? (e = n[8])
      : ((e = (e, n) => {
          let { id: a, ...o } = e,
            s =
              `content` in o
                ? o.content
                : (0, v.jsx)(`span`, { className: `min-w-0 truncate`, children: o.label }),
            d = s;
          if (!(`content` in o)) {
            let { label: e, ...n } = o,
              r = { className: l(`min-w-0`, u && `text-sm`), color: `ghost`, size: `toolbar` };
            d =
              n.to == null
                ? (0, v.jsx)(t, { ...r, onClick: n.onClick, children: s })
                : (0, v.jsx)(c, { ...n, ...r, children: s });
          }
          return (0, v.jsxs)(
            _.Fragment,
            { children: [n > 0 ? (0, v.jsx)(i, { className: `shrink-0`, asset: r }) : null, d] },
            a,
          );
        }),
        (n[7] = u),
        (n[8] = e)),
      (h = a.map(e)),
      (n[4] = a),
      (n[5] = u),
      (n[6] = h));
  } else h = n[6];
  let y;
  n[9] !== a.length || n[10] !== s
    ? ((y =
        s == null
          ? null
          : (0, v.jsxs)(v.Fragment, {
              children: [
                a.length > 0 ? (0, v.jsx)(i, { className: `shrink-0`, asset: r }) : null,
                (0, v.jsx)(`span`, {
                  "aria-current": `page`,
                  className: `flex h-token-button-composer min-w-0 flex-auto items-center truncate px-2 text-default`,
                  children: s,
                }),
              ],
            })),
      (n[9] = a.length),
      (n[10] = s),
      (n[11] = y))
    : (y = n[11]);
  let b;
  return (
    n[12] !== f || n[13] !== m || n[14] !== h || n[15] !== y
      ? ((b = (0, v.jsxs)(`nav`, { "aria-label": f, className: m, children: [h, y] })),
        (n[12] = f),
        (n[13] = m),
        (n[14] = h),
        (n[15] = y),
        (n[16] = b))
      : (b = n[16]),
    b
  );
}
var g, _, v;
function y() {
  return (y = e(() => {
    ((g = f()), n(), s(), (_ = m()), u(), a(), d(), (v = p()));
  }))();
}
export { y as n, h as t };
//# sourceMappingURL=toolbar-breadcrumb-e1be94112dcb.js.map
