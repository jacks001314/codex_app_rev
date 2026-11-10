import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  AO as r,
  BJ as i,
  CO as a,
  QJ as o,
  Qv as s,
  TO as c,
  ZJ as l,
  ik as u,
  rk as d,
  t3 as f,
  vzt as p,
  xMt as m,
  yzt as h,
  zJ as g,
} from "./app-shared-bbfeca5e5737.js";
import { n as _, t as v } from "./card-status-indicator-fecb737805f8.js";
function y(e) {
  let n = (0, b.c)(24),
    {
      disableMenuLabel: r,
      enableButtonLabel: l,
      enabledStatusAriaLabel: u,
      isEnabled: f,
      isUninstallDisabled: p,
      isUninstalling: m,
      isUpdating: h,
      menuLabel: g,
      menuItems: _,
      onDisable: y,
      onEnable: C,
      onUninstall: w,
      uninstallMenuLabel: T,
    } = e,
    [E, D] = (0, x.useState)(!1),
    O = w != null || (p && T != null),
    k = _ != null || O || (f && y != null),
    A;
  n[0] !== r ||
  n[1] !== u ||
  n[2] !== k ||
  n[3] !== O ||
  n[4] !== f ||
  n[5] !== E ||
  n[6] !== p ||
  n[7] !== m ||
  n[8] !== _ ||
  n[9] !== g ||
  n[10] !== y ||
  n[11] !== w ||
  n[12] !== T
    ? ((A = k
        ? (0, S.jsx)(`div`, {
            className: E
              ? `visible opacity-100`
              : `invisible opacity-0 group-hover:visible group-hover:opacity-100`,
            children: (0, S.jsxs)(a, {
              align: `end`,
              contentWidth: `icon`,
              open: E,
              onOpenChange: D,
              triggerButton: (0, S.jsx)(s, {
                label: g ?? u,
                className: E ? `opacity-100` : `opacity-50 hover:opacity-100 focus-visible:opacity-100`,
                iconSize: `lg`,
                size: `xs`,
              }),
              children: [
                _,
                f && y ? (0, S.jsx)(c.Item, { leftIconAsset: i, onSelect: y, children: r }) : null,
                O
                  ? (0, S.jsx)(c.Item, {
                      leftIconAsset: o,
                      disabled: m || p,
                      onSelect: w,
                      tone: `danger`,
                      children: T,
                    })
                  : null,
              ],
            }),
          })
        : null),
      (n[0] = r),
      (n[1] = u),
      (n[2] = k),
      (n[3] = O),
      (n[4] = f),
      (n[5] = E),
      (n[6] = p),
      (n[7] = m),
      (n[8] = _),
      (n[9] = g),
      (n[10] = y),
      (n[11] = w),
      (n[12] = T),
      (n[13] = A))
    : (A = n[13]);
  let j;
  n[14] !== l || n[15] !== u || n[16] !== f || n[17] !== m || n[18] !== h || n[19] !== C
    ? ((j =
        !f && C
          ? (0, S.jsx)(t, {
              color: `outline`,
              size: `toolbar`,
              disabled: h || m,
              onClick: (e) => {
                (e.stopPropagation(), C());
              },
              children: l,
            })
          : f
            ? (0, S.jsx)(v, { ariaLabel: u, icon: (0, S.jsx)(d, { className: `icon-sm opacity-60` }) })
            : (0, S.jsx)(`span`, { "aria-hidden": !0, className: `h-7 w-7 shrink-0` })),
      (n[14] = l),
      (n[15] = u),
      (n[16] = f),
      (n[17] = m),
      (n[18] = h),
      (n[19] = C),
      (n[20] = j))
    : (j = n[20]);
  let M;
  return (
    n[21] !== A || n[22] !== j
      ? ((M = (0, S.jsxs)(`div`, { className: `flex items-center gap-2`, children: [A, j] })),
        (n[21] = A),
        (n[22] = j),
        (n[23] = M))
      : (M = n[23]),
    M
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = p()), l(), g(), (x = h()), f(), r(), n(), u(), _(), (S = m()));
  }))();
}
export { C as n, y as t };
//# sourceMappingURL=installed-card-actions-6e3c5fc1435c.js.map
