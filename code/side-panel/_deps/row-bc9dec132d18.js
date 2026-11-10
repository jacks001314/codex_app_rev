import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Act as n,
  Xdt as r,
  hmn as i,
  kMt as a,
  kmn as o,
} from "./app-initial-f094ef01c64d.js";
import { n as s, r as c } from "./diff-comment-card-c409d5c26721.js";
function l(e) {
  let t = (0, u.c)(18),
    {
      authorAvatar: r,
      children: i,
      disabled: o,
      loading: c,
      layout: l,
      showSubmit: f,
      submitLabel: p,
      submitType: m,
      onSubmit: h,
    } = e,
    g = c !== void 0 && c,
    _ = l === void 0 ? `inline` : l,
    v = f === void 0 || f,
    y;
  t[0] !== o || t[1] !== g || t[2] !== h || t[3] !== v || t[4] !== p || t[5] !== m
    ? ((y = v
        ? (0, d.jsx)(a, {
            className: `self-end`,
            "aria-label": p,
            color: `primary`,
            disabled: o,
            loading: g,
            size: `composerSm`,
            type: m,
            uniform: !0,
            onClick: h,
            children: g ? null : (0, d.jsx)(n, {}),
          })
        : (0, d.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `size-token-button-composer-sm shrink-0 self-end`,
          })),
      (t[0] = o),
      (t[1] = g),
      (t[2] = h),
      (t[3] = v),
      (t[4] = p),
      (t[5] = m),
      (t[6] = y))
    : (y = t[6]);
  let b = y;
  if (_ === `card`) {
    let e;
    return (
      t[7] !== b || t[8] !== i
        ? ((e = (0, d.jsx)(s, { action: b, children: i })), (t[7] = b), (t[8] = i), (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  let x;
  t[10] === r
    ? (x = t[11])
    : ((x =
        r == null
          ? null
          : (0, d.jsx)(`div`, { className: `flex h-7 shrink-0 items-center`, children: r })),
      (t[10] = r),
      (t[11] = x));
  let S;
  t[12] === i
    ? (S = t[13])
    : ((S = (0, d.jsx)(`div`, { className: `min-w-0 flex-1 self-center`, children: i })),
      (t[12] = i),
      (t[13] = S));
  let C;
  return (
    t[14] !== b || t[15] !== x || t[16] !== S
      ? ((C = (0, d.jsxs)(`div`, {
          className: `flex min-w-0 items-start gap-2.5 px-3 pt-2 pb-3`,
          children: [x, S, b],
        })),
        (t[14] = b),
        (t[15] = x),
        (t[16] = S),
        (t[17] = C))
      : (C = t[17]),
    C
  );
}
var u,
  d,
  f = e(() => {
    ((u = o()), t(), r(), c(), (d = i()));
  });
export { f as n, l as t };
//# sourceMappingURL=row-bc9dec132d18.js.map
