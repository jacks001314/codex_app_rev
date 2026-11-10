import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as n,
  Amn as r,
  Jit as i,
  Kit as a,
  Rpn as o,
  hmn as s,
  kMt as c,
  kmn as l,
  zpn as u,
} from "./app-initial-f094ef01c64d.js";
function d(e) {
  let t = (0, p.c)(38),
    {
      options: n,
      selectedId: r,
      onHover: i,
      onSelect: s,
      size: l,
      className: u,
      buttonClassName: d,
      fullWidth: g,
      uniform: _,
      selectedColor: v,
      unselectedColor: y,
      variant: b,
      ariaLabel: x,
      ariaLabelledBy: S,
    } = e,
    C;
  t[0] === n ? (C = t[1]) : ((C = n === void 0 ? [] : n), (t[0] = n), (t[1] = C));
  let w = C,
    T = l === void 0 ? `default` : l,
    E = g !== void 0 && g,
    D = v === void 0 ? `segmentedSelected` : v,
    O = y === void 0 ? `ghost` : y,
    k = b === void 0 ? `default` : b,
    A = (0, m.useRef)(null),
    j = k === `inset` ? `compact` : T,
    M = k === `inset` ? `segmentedInsetSelected` : D,
    N = _ ?? (j === `icon` && w.length > 2),
    P;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        let e = A.current;
        if (e == null) return;
        let t = () => {
          let t = e.querySelector(`button[aria-pressed="true"]`);
          if (t == null) return;
          let n = t.offsetLeft,
            r = n + t.offsetWidth,
            i = e.scrollLeft,
            a = i + e.clientWidth;
          n < i ? (e.scrollLeft = n) : r > a && (e.scrollLeft = r - e.clientWidth);
        };
        if ((t(), typeof ResizeObserver > `u`)) return;
        let n = new ResizeObserver(t);
        n.observe(e);
        for (let t of e.querySelectorAll(`button`)) n.observe(t);
        return () => {
          n.disconnect();
        };
      }),
      (t[2] = P))
    : (P = t[2]);
  let F;
  (t[3] !== w || t[4] !== r ? ((F = [w, r]), (t[3] = w), (t[4] = r), (t[5] = F)) : (F = t[5]),
    (0, m.useLayoutEffect)(P, F));
  let I = E ? `flex w-full` : `inline-flex`,
    L = k === `inset` && `rounded-[10px] bg-surface-secondary/92 p-0.5`,
    R;
  t[6] !== u || t[7] !== I || t[8] !== L
    ? ((R = o(
        I,
        `hide-scrollbar relative min-w-0 max-w-full items-center gap-0.5 overflow-x-auto overflow-y-hidden`,
        L,
        u,
      )),
      (t[6] = u),
      (t[7] = I),
      (t[8] = L),
      (t[9] = R))
    : (R = t[9]);
  let z;
  if (
    t[10] !== d ||
    t[11] !== j ||
    t[12] !== E ||
    t[13] !== i ||
    t[14] !== s ||
    t[15] !== w ||
    t[16] !== M ||
    t[17] !== r ||
    t[18] !== N ||
    t[19] !== O ||
    t[20] !== k
  ) {
    let e;
    (t[22] !== d ||
    t[23] !== j ||
    t[24] !== E ||
    t[25] !== i ||
    t[26] !== s ||
    t[27] !== M ||
    t[28] !== r ||
    t[29] !== N ||
    t[30] !== O ||
    t[31] !== k
      ? ((e = (e) => {
          let t = e.id === r,
            n = e.disabled ?? !1,
            l = (0, h.jsx)(
              c,
              {
                color: t ? M : O,
                focusRing: k === `inset` ? `default` : `inset`,
                size: j,
                onClick: () => {
                  n || s(e.id);
                },
                onPointerEnter:
                  i == null || n
                    ? void 0
                    : () => {
                        i(e.id);
                      },
                "aria-pressed": t,
                uniform: N,
                "aria-label": e.ariaLabel,
                disabled: n,
                className: o(E ? `flex-1 justify-center` : `shrink-0`, d),
                children: e.label,
              },
              e.id,
            );
          return e.tooltipContent
            ? (0, h.jsx)(a, { tooltipContent: e.tooltipContent, children: l }, e.id)
            : l;
        }),
        (t[22] = d),
        (t[23] = j),
        (t[24] = E),
        (t[25] = i),
        (t[26] = s),
        (t[27] = M),
        (t[28] = r),
        (t[29] = N),
        (t[30] = O),
        (t[31] = k),
        (t[32] = e))
      : (e = t[32]),
      (z = w.map(e)),
      (t[10] = d),
      (t[11] = j),
      (t[12] = E),
      (t[13] = i),
      (t[14] = s),
      (t[15] = w),
      (t[16] = M),
      (t[17] = r),
      (t[18] = N),
      (t[19] = O),
      (t[20] = k),
      (t[21] = z));
  } else z = t[21];
  let B;
  return (
    t[33] !== x || t[34] !== S || t[35] !== R || t[36] !== z
      ? ((B = (0, h.jsx)(`div`, {
          ref: A,
          className: R,
          role: `group`,
          "aria-label": x,
          "aria-labelledby": S,
          onWheel: f,
          children: z,
        })),
        (t[33] = x),
        (t[34] = S),
        (t[35] = R),
        (t[36] = z),
        (t[37] = B))
      : (B = t[37]),
    B
  );
}
function f(e) {
  let t = e.deltaX || e.deltaY;
  t !== 0 && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t);
}
var p,
  m,
  h,
  g = e(() => {
    ((p = l()), u(), (m = t(r(), 1)), n(), i(), (h = s()));
  });
export { g as n, d as t };
//# sourceMappingURL=segmented-toggle-30e6111a9bfb.js.map
