import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  JG as t,
  KG as n,
  Xdt as r,
  ZG as i,
  flt as a,
  hmn as o,
  kmn as s,
  llt as c,
} from "./app-initial-f094ef01c64d.js";
function l(e) {
  "use forget";
  let r = (0, u.c)(28),
    {
      options: i,
      disabled: o,
      renderLabel: s,
      removeLabel: l,
      variant: f,
      value: p,
      onChange: m,
      onRemoveAccess: h,
    } = e,
    g = o !== void 0 && o,
    _ =
      (f === void 0 ? `default` : f) === `inline`
        ? `flex shrink-0 cursor-interaction items-center gap-1 text-base text-default`
        : `flex cursor-interaction items-center gap-1 rounded-md border border-default px-2 py-1 text-sm text-default`,
    v;
  r[0] !== s || r[1] !== p ? ((v = s(p)), (r[0] = s), (r[1] = p), (r[2] = v)) : (v = r[2]);
  let y;
  r[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, d.jsx)(a, { className: `text-codex-description` })), (r[3] = y))
    : (y = r[3]);
  let b;
  r[4] !== g || r[5] !== _ || r[6] !== v
    ? ((b = (0, d.jsxs)(`button`, { type: `button`, disabled: g, className: _, children: [v, y] })),
      (r[4] = g),
      (r[5] = _),
      (r[6] = v),
      (r[7] = b))
    : (b = r[7]);
  let x;
  if (r[8] !== g || r[9] !== m || r[10] !== i || r[11] !== s || r[12] !== p) {
    let e;
    (r[14] !== g || r[15] !== m || r[16] !== s || r[17] !== p
      ? ((e = (e) =>
          (0, d.jsx)(
            t.Item,
            {
              "aria-description": e.description,
              "aria-label": e.ariaLabel,
              disabled: g || e.disabled,
              RightIcon: e.value === p ? c : void 0,
              SubText:
                e.description == null
                  ? void 0
                  : (0, d.jsx)(d.Fragment, { children: e.description }),
              subTextAllowWrap: !0,
              tooltipText: e.tooltipText,
              onSelect: () => {
                m?.(e.value);
              },
              children: s(e.value),
            },
            e.value,
          )),
        (r[14] = g),
        (r[15] = m),
        (r[16] = s),
        (r[17] = p),
        (r[18] = e))
      : (e = r[18]),
      (x = i.map(e)),
      (r[8] = g),
      (r[9] = m),
      (r[10] = i),
      (r[11] = s),
      (r[12] = p),
      (r[13] = x));
  } else x = r[13];
  let S;
  r[19] !== g || r[20] !== h || r[21] !== l
    ? ((S =
        h == null
          ? null
          : (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(t.Separator, {}),
                (0, d.jsx)(t.Item, {
                  disabled: g,
                  onSelect: h,
                  children: (0, d.jsx)(`span`, { className: `text-danger`, children: l }),
                }),
              ],
            })),
      (r[19] = g),
      (r[20] = h),
      (r[21] = l),
      (r[22] = S))
    : (S = r[22]);
  let C;
  return (
    r[23] !== g || r[24] !== b || r[25] !== x || r[26] !== S
      ? ((C = (0, d.jsxs)(n, {
          align: `end`,
          contentWidth: `menu`,
          disabled: g,
          triggerButton: b,
          children: [x, S],
        })),
        (r[23] = g),
        (r[24] = b),
        (r[25] = x),
        (r[26] = S),
        (r[27] = C))
      : (C = r[27]),
    C
  );
}
var u,
  d,
  f = e(() => {
    ((u = s()), i(), r(), (d = o()));
  });
export { f as n, l as t };
//# sourceMappingURL=permission-dropdown-62b3ddc52f74.js.map
