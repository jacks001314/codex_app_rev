import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CH as t,
  LNt as n,
  PBt as r,
  TY as i,
  Y3 as a,
  Z3 as o,
  ck as s,
  kH as c,
  rk as l,
  tk as u,
} from "./app-shared-2feb3d4c6fcc.js";
function d(e) {
  "use forget";
  let n = (0, f.c)(25),
    {
      options: r,
      disabled: i,
      renderLabel: o,
      removeLabel: s,
      variant: d,
      value: m,
      onChange: h,
      onRemoveAccess: g,
    } = e,
    _ = i !== void 0 && i,
    v = d === void 0 ? `default` : d,
    y;
  n[0] !== _ || n[1] !== o || n[2] !== m || n[3] !== v
    ? ((y =
        v === `ghost`
          ? (0, p.jsxs)(a, {
              color: `ghostActive`,
              disabled: _,
              radius: `large`,
              children: [o(m), (0, p.jsx)(c, { className: `text-codex-description` })],
            })
          : (0, p.jsxs)(`button`, {
              type: `button`,
              disabled: _,
              className:
                v === `inline`
                  ? `flex shrink-0 cursor-interaction items-center gap-1 text-base text-default`
                  : `flex cursor-interaction items-center gap-1 rounded-md border border-default px-2 py-1 text-sm text-default`,
              children: [o(m), (0, p.jsx)(c, { className: `text-codex-description` })],
            })),
      (n[0] = _),
      (n[1] = o),
      (n[2] = m),
      (n[3] = v),
      (n[4] = y))
    : (y = n[4]);
  let b;
  if (n[5] !== _ || n[6] !== h || n[7] !== r || n[8] !== o || n[9] !== m) {
    let e;
    (n[11] !== _ || n[12] !== h || n[13] !== o || n[14] !== m
      ? ((e = (e) =>
          (0, p.jsx)(
            l.Item,
            {
              "aria-description": e.description,
              "aria-label": e.ariaLabel,
              disabled: _ || e.disabled,
              RightIcon: e.value === m ? t : void 0,
              SubText: e.description == null ? void 0 : (0, p.jsx)(p.Fragment, { children: e.description }),
              subTextAllowWrap: !0,
              tooltipText: e.tooltipText,
              onSelect: () => {
                h?.(e.value);
              },
              children: o(e.value),
            },
            e.value,
          )),
        (n[11] = _),
        (n[12] = h),
        (n[13] = o),
        (n[14] = m),
        (n[15] = e))
      : (e = n[15]),
      (b = r.map(e)),
      (n[5] = _),
      (n[6] = h),
      (n[7] = r),
      (n[8] = o),
      (n[9] = m),
      (n[10] = b));
  } else b = n[10];
  let x;
  n[16] !== _ || n[17] !== g || n[18] !== s
    ? ((x =
        g == null
          ? null
          : (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)(l.Separator, {}),
                (0, p.jsx)(l.Item, {
                  disabled: _,
                  onSelect: g,
                  children: (0, p.jsx)(`span`, { className: `text-danger`, children: s }),
                }),
              ],
            })),
      (n[16] = _),
      (n[17] = g),
      (n[18] = s),
      (n[19] = x))
    : (x = n[19]);
  let S;
  return (
    n[20] !== _ || n[21] !== y || n[22] !== b || n[23] !== x
      ? ((S = (0, p.jsxs)(u, {
          align: `end`,
          contentWidth: `xs`,
          disabled: _,
          triggerButton: y,
          children: [b, x],
        })),
        (n[20] = _),
        (n[21] = y),
        (n[22] = b),
        (n[23] = x),
        (n[24] = S))
      : (S = n[24]),
    S
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = r()), o(), s(), i(), (p = n()));
  }))();
}
export { m as n, d as t };
//# sourceMappingURL=permission-dropdown-27d1e7a127e6.js.map
