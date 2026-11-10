import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  TJ as n,
  VDt as r,
  aq as i,
  cW as a,
  cz as o,
  iq as s,
  jDt as c,
  sW as l,
  sz as u,
  vzt as d,
  xMt as f,
} from "./app-shared-bbfeca5e5737.js";
import { Fct as p, Ict as m } from "./app-initial-5851df3f6cb1.js";
function h(e) {
  let n = (0, g.c)(24),
    { onViewModeChange: o, viewMode: c } = e,
    d = r(),
    f;
  n[0] === d
    ? (f = n[1])
    : ((f = d.formatMessage({
        id: `appgenPage.view.label`,
        defaultMessage: `Site layout`,
        description: `Accessible label for switching the Sites page layout`,
      })),
      (n[0] = d),
      (n[1] = f));
  let m;
  n[2] === d
    ? (m = n[3])
    : ((m = d.formatMessage({
        id: `appgenPage.view.grid`,
        defaultMessage: `Grid view`,
        description: `Switch the Sites page to a grid layout`,
      })),
      (n[2] = d),
      (n[3] = m));
  let h, v;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { 16: s, 20: i }),
      (v = (0, _.jsx)(t, {
        id: `appgenPage.view.gridTooltip`,
        defaultMessage: `Grid`,
        description: `Tooltip for the Sites grid layout button`,
      })),
      (n[4] = h),
      (n[5] = v))
    : ((h = n[4]), (v = n[5]));
  let y;
  n[6] === m
    ? (y = n[7])
    : ((y = { id: `grid`, ariaLabel: m, icon: h, tooltipContent: v }), (n[6] = m), (n[7] = y));
  let b;
  n[8] === d
    ? (b = n[9])
    : ((b = d.formatMessage({
        id: `appgenPage.view.list`,
        defaultMessage: `List view`,
        description: `Switch the Sites page to a list layout`,
      })),
      (n[8] = d),
      (n[9] = b));
  let x, S;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { 16: l, 20: a }),
      (S = (0, _.jsx)(t, {
        id: `appgenPage.view.listTooltip`,
        defaultMessage: `List`,
        description: `Tooltip for the Sites list layout button`,
      })),
      (n[10] = x),
      (n[11] = S))
    : ((x = n[10]), (S = n[11]));
  let C;
  n[12] === b
    ? (C = n[13])
    : ((C = { id: `list`, ariaLabel: b, icon: x, tooltipContent: S }), (n[12] = b), (n[13] = C));
  let w;
  n[14] !== y || n[15] !== C ? ((w = [y, C]), (n[14] = y), (n[15] = C), (n[16] = w)) : (w = n[16]);
  let T;
  n[17] !== o || n[18] !== w || n[19] !== c
    ? ((T = w.map((e) =>
        (0, _.jsx)(
          u,
          {
            cloneCustomTrigger: !0,
            tooltipContent: e.tooltipContent,
            children: (0, _.jsx)(p, {
              "aria-label": e.ariaLabel,
              "aria-pressed": c === e.id,
              color: `secondary`,
              icon: e.icon,
              onClick: () => o(e.id),
              selected: c === e.id,
              uniform: !0,
              variant: `ghost`,
            }),
          },
          e.id,
        ),
      )),
      (n[17] = o),
      (n[18] = w),
      (n[19] = c),
      (n[20] = T))
    : (T = n[20]);
  let E;
  return (
    n[21] !== f || n[22] !== T
      ? ((E = (0, _.jsx)(`div`, {
          className: `flex shrink-0 items-center gap-1`,
          role: `group`,
          "aria-label": f,
          children: T,
        })),
        (n[21] = f),
        (n[22] = T),
        (n[23] = E))
      : (E = n[23]),
    E
  );
}
var g, _;
function v() {
  return (v = e(() => {
    ((g = d()), c(), n(), m(), o(), (_ = f()));
  }))();
}
export { v as n, h as t };
//# sourceMappingURL=appgen-view-controls-af930745ff2a.js.map
