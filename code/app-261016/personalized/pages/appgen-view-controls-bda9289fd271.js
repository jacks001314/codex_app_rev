import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  PBt as n,
  TY as r,
  XOt as i,
  aJ as a,
  iG as o,
  iJ as s,
  nB as c,
  okt as l,
  rB as u,
  rG as d,
  tkt as f,
} from "./app-shared-2feb3d4c6fcc.js";
import { Blt as p, Vlt as m } from "./app-initial-ad16eaadf81f.js";
function h(e) {
  let t = (0, g.c)(24),
    { onViewModeChange: n, viewMode: r } = e,
    i = l(),
    u;
  t[0] === i
    ? (u = t[1])
    : ((u = i.formatMessage({
        id: `appgenPage.view.label`,
        defaultMessage: `Site layout`,
        description: `Accessible label for switching the Sites page layout`,
      })),
      (t[0] = i),
      (t[1] = u));
  let m;
  t[2] === i
    ? (m = t[3])
    : ((m = i.formatMessage({
        id: `appgenPage.view.grid`,
        defaultMessage: `Grid view`,
        description: `Switch the Sites page to a grid layout`,
      })),
      (t[2] = i),
      (t[3] = m));
  let h, v;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { 16: s, 20: a }),
      (v = (0, _.jsx)(f, {
        id: `appgenPage.view.gridTooltip`,
        defaultMessage: `Grid`,
        description: `Tooltip for the Sites grid layout button`,
      })),
      (t[4] = h),
      (t[5] = v))
    : ((h = t[4]), (v = t[5]));
  let y;
  t[6] === m
    ? (y = t[7])
    : ((y = { id: `grid`, ariaLabel: m, icon: h, tooltipContent: v }), (t[6] = m), (t[7] = y));
  let b;
  t[8] === i
    ? (b = t[9])
    : ((b = i.formatMessage({
        id: `appgenPage.view.list`,
        defaultMessage: `List view`,
        description: `Switch the Sites page to a list layout`,
      })),
      (t[8] = i),
      (t[9] = b));
  let x, S;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { 16: d, 20: o }),
      (S = (0, _.jsx)(f, {
        id: `appgenPage.view.listTooltip`,
        defaultMessage: `List`,
        description: `Tooltip for the Sites list layout button`,
      })),
      (t[10] = x),
      (t[11] = S))
    : ((x = t[10]), (S = t[11]));
  let C;
  t[12] === b
    ? (C = t[13])
    : ((C = { id: `list`, ariaLabel: b, icon: x, tooltipContent: S }), (t[12] = b), (t[13] = C));
  let w;
  t[14] !== y || t[15] !== C ? ((w = [y, C]), (t[14] = y), (t[15] = C), (t[16] = w)) : (w = t[16]);
  let T;
  t[17] !== n || t[18] !== w || t[19] !== r
    ? ((T = w.map((e) =>
        (0, _.jsx)(
          c,
          {
            cloneCustomTrigger: !0,
            tooltipContent: e.tooltipContent,
            children: (0, _.jsx)(p, {
              "aria-label": e.ariaLabel,
              "aria-pressed": r === e.id,
              color: `secondary`,
              icon: e.icon,
              onClick: () => n(e.id),
              selected: r === e.id,
              uniform: !0,
              variant: `ghost`,
            }),
          },
          e.id,
        ),
      )),
      (t[17] = n),
      (t[18] = w),
      (t[19] = r),
      (t[20] = T))
    : (T = t[20]);
  let E;
  return (
    t[21] !== u || t[22] !== T
      ? ((E = (0, _.jsx)(`div`, {
          className: `flex shrink-0 items-center gap-1`,
          role: `group`,
          "aria-label": u,
          children: T,
        })),
        (t[21] = u),
        (t[22] = T),
        (t[23] = E))
      : (E = t[23]),
    E
  );
}
var g, _;
function v() {
  return (v = e(() => {
    ((g = n()), i(), r(), m(), u(), (_ = t()));
  }))();
}
export { v as n, h as t };
//# sourceMappingURL=appgen-view-controls-bda9289fd271.js.map
