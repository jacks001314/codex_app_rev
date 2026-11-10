import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  PBt as r,
  TY as i,
  XOt as a,
  eU as o,
  tkt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { r as c } from "./payment-method-display-9a3960f9fc88.js";
import { r as l } from "./billing-state-a90fb678096b.js";
import { n as u, r as d } from "./display-901034b4869f.js";
import { i as f, n as p, r as m, t as h } from "./compact-payment-method-picker-ec7855b39424.js";
function g(e) {
  let t = (0, _.c)(21),
    {
      ref: n,
      methods: r,
      selected: i,
      placeholder: a,
      disabled: l,
      isMethodDisabled: d,
      onSelect: f,
      "aria-label": g,
    } = e,
    b = (0, v.useId)(),
    x;
  t[0] !== d || t[1] !== r || t[2] !== i
    ? ((x = i != null && !d?.(i) ? i : r?.find((e) => !d?.(e))),
      (t[0] = d),
      (t[1] = r),
      (t[2] = i),
      (t[3] = x))
    : (x = t[3]);
  let S = x,
    C = i == null ? `text-sm text-secondary` : `sr-only`,
    w;
  t[4] !== b || t[5] !== a || t[6] !== C
    ? ((w = (0, y.jsx)(`p`, { id: b, className: C, children: a })),
      (t[4] = b),
      (t[5] = a),
      (t[6] = C),
      (t[7] = w))
    : (w = t[7]);
  let T;
  t[8] !== g ||
  t[9] !== l ||
  t[10] !== S?.id ||
  t[11] !== d ||
  t[12] !== b ||
  t[13] !== r ||
  t[14] !== f ||
  t[15] !== n ||
  t[16] !== i?.id
    ? ((T =
        r != null && r.length > 0
          ? (0, y.jsx)(p, {
              "aria-label": g,
              "aria-labelledby": g == null ? b : void 0,
              children: r.map((e) => {
                let t = u(e);
                return (0, y.jsx)(
                  m,
                  {
                    ref: e.id === S?.id ? n : void 0,
                    name: b,
                    value: e.id,
                    selected: e.id === i?.id,
                    disabled: l || d?.(e) === !0,
                    title: t.label,
                    subtitle: t.description,
                    imageUrl: t.imageUrl,
                    fallbackIcon: (0, y.jsx)(o, {}),
                    statusBadge: c(e)
                      ? (0, y.jsx)(h, {
                          variant: `expired`,
                          children: (0, y.jsx)(s, {
                            id: `settings.consumerBilling.expiredCard`,
                            defaultMessage: `Expired`,
                            description: `Badge for a saved card whose expiration date has passed`,
                          }),
                        })
                      : null,
                    onSelect: f,
                  },
                  e.id,
                );
              }),
            })
          : null),
      (t[8] = g),
      (t[9] = l),
      (t[10] = S?.id),
      (t[11] = d),
      (t[12] = b),
      (t[13] = r),
      (t[14] = f),
      (t[15] = n),
      (t[16] = i?.id),
      (t[17] = T))
    : (T = t[17]);
  let E;
  return (
    t[18] !== w || t[19] !== T
      ? ((E = (0, y.jsxs)(`div`, {
          className: `flex flex-col gap-3 [--bg-primary:var(--color-surface)] [--border-default:var(--color-border)] [--border-heavy:var(--color-border-strong)] [--text-primary:var(--color-text)] [--text-secondary:var(--color-text-secondary)]`,
          children: [w, T],
        })),
        (t[18] = w),
        (t[19] = T),
        (t[20] = E))
      : (E = t[20]),
    E
  );
}
var _, v, y;
function b() {
  return (b = e(() => {
    ((_ = r()), f(), (v = t()), a(), i(), l(), d(), (y = n()));
  }))();
}
export { b as n, g as t };
//# sourceMappingURL=selector-345300544d26.js.map
