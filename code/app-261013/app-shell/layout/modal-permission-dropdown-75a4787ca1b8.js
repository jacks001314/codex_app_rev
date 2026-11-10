import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Dt as t,
  IDt as n,
  JDt as r,
  NV as i,
  QDt as a,
  TJ as o,
  jDt as s,
  vzt as c,
  xMt as l,
  yAt as u,
} from "./app-shared-bbfeca5e5737.js";
import { lV as d, uV as f } from "./app-initial-5851df3f6cb1.js";
function p(e) {
  let r = (0, h.c)(46),
    {
      alignOffset: a,
      color: o,
      options: s,
      disabled: c,
      footer: l,
      indicatorVariant: d,
      renderLabel: p,
      mixed: _,
      opticallyAlign: v,
      removeLabel: y,
      sideOffset: b,
      size: x,
      variant: S,
      value: C,
      onChange: w,
      onRemoveAccess: T,
    } = e,
    E = o === void 0 ? `primary` : o,
    D = c !== void 0 && c,
    O = d === void 0 ? `checkmark` : d,
    k = _ !== void 0 && _,
    A = x === void 0 ? `sm` : x,
    j = S === void 0 ? `default` : S,
    M = j === `field` ? `primary` : E,
    N = j === `field` ? `outline` : `ghost`,
    P = j === `field` ? `xl` : A,
    F = j !== `field`,
    I = j === `inline` ? `2xs` : void 0,
    L;
  r[0] !== k || r[1] !== p || r[2] !== C
    ? ((L = k
        ? (0, g.jsx)(n, {
            id: `shareDialog.mixedRoles`,
            defaultMessage: `Mixed`,
            description: `Role selector label when selected sharing recipients have different permissions`,
          })
        : p(C)),
      (r[0] = k),
      (r[1] = p),
      (r[2] = C),
      (r[3] = L))
    : (L = r[3]);
  let R;
  r[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = (0, g.jsx)(i, {})), (r[4] = R)) : (R = r[4]);
  let z;
  r[5] !== D ||
  r[6] !== v ||
  r[7] !== F ||
  r[8] !== I ||
  r[9] !== L ||
  r[10] !== M ||
  r[11] !== N ||
  r[12] !== P
    ? ((z = (0, g.jsxs)(u, {
        color: M,
        variant: N,
        size: P,
        iconSize: `sm`,
        pill: F,
        gutterSize: I,
        opticallyAlign: v,
        disabled: D,
        children: [L, R],
      })),
      (r[5] = D),
      (r[6] = v),
      (r[7] = F),
      (r[8] = I),
      (r[9] = L),
      (r[10] = M),
      (r[11] = N),
      (r[12] = P),
      (r[13] = z))
    : (z = r[13]);
  let B;
  r[14] !== D || r[15] !== z
    ? ((B = (0, g.jsx)(f.Trigger, { disabled: D, children: z })), (r[14] = D), (r[15] = z), (r[16] = B))
    : (B = r[16]);
  let V = k ? `` : C,
    H;
  r[17] !== w || r[18] !== s
    ? ((H = (e) => {
        let t = s.find((t) => t.value === e);
        t != null && w?.(t.value);
      }),
      (r[17] = w),
      (r[18] = s),
      (r[19] = H))
    : (H = r[19]);
  let U;
  if (r[20] !== D || r[21] !== O || r[22] !== s || r[23] !== p) {
    let e;
    (r[25] !== D || r[26] !== O || r[27] !== p
      ? ((e = (e) =>
          (0, g.jsx)(
            t,
            {
              content: e.tooltipText,
              children: (0, g.jsx)(f.RadioItem, {
                indicatorVariant: O,
                value: e.value,
                disabled: D || e.disabled,
                "aria-label": e.ariaLabel,
                "aria-description": e.description,
                children: (0, g.jsxs)(`span`, {
                  className: `flex max-w-64 min-w-0 flex-1 flex-col`,
                  children: [
                    (0, g.jsx)(`span`, { children: p(e.value) }),
                    e.description == null
                      ? null
                      : (0, g.jsx)(`span`, {
                          className: `text-sm text-pretty whitespace-normal text-secondary`,
                          children: e.description,
                        }),
                  ],
                }),
              }),
            },
            e.value,
          )),
        (r[25] = D),
        (r[26] = O),
        (r[27] = p),
        (r[28] = e))
      : (e = r[28]),
      (U = s.map(e)),
      (r[20] = D),
      (r[21] = O),
      (r[22] = s),
      (r[23] = p),
      (r[24] = U));
  } else U = r[24];
  let W;
  r[29] !== V || r[30] !== H || r[31] !== U
    ? ((W = (0, g.jsx)(f.RadioGroup, { value: V, onChange: H, children: U })),
      (r[29] = V),
      (r[30] = H),
      (r[31] = U),
      (r[32] = W))
    : (W = r[32]);
  let G;
  r[33] !== D || r[34] !== T || r[35] !== y
    ? ((G =
        T == null
          ? null
          : (0, g.jsxs)(g.Fragment, {
              children: [
                (0, g.jsx)(f.Separator, {}),
                (0, g.jsx)(f.Item, { color: `danger`, disabled: D, onSelect: T, children: y }),
              ],
            })),
      (r[33] = D),
      (r[34] = T),
      (r[35] = y),
      (r[36] = G))
    : (G = r[36]);
  let K;
  r[37] !== a || r[38] !== l || r[39] !== b || r[40] !== W || r[41] !== G
    ? ((K = (0, g.jsxs)(f.Content, {
        align: `end`,
        alignOffset: a,
        minWidth: `auto`,
        sideOffset: b,
        children: [W, G, l],
      })),
      (r[37] = a),
      (r[38] = l),
      (r[39] = b),
      (r[40] = W),
      (r[41] = G),
      (r[42] = K))
    : (K = r[42]);
  let q;
  return (
    r[43] !== B || r[44] !== K
      ? ((q = (0, g.jsx)(`span`, {
          className: `inline-flex`,
          role: `presentation`,
          onMouseDown: m,
          children: (0, g.jsxs)(f, { children: [B, K] }),
        })),
        (r[43] = B),
        (r[44] = K),
        (r[45] = q))
      : (q = r[45]),
    q
  );
}
function m(e) {
  return e.stopPropagation();
}
var h, g;
function _() {
  return (_ = e(() => {
    ((h = c()), r(), d(), a(), s(), o(), (g = l()));
  }))();
}
export { _ as n, p as t };
//# sourceMappingURL=modal-permission-dropdown-75a4787ca1b8.js.map
