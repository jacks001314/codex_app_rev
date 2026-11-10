import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  CO as n,
  Dz as r,
  IDt as i,
  QI as a,
  TJ as o,
  TO as s,
  VDt as c,
  ZI as l,
  cD as u,
  jDt as d,
  kz as f,
  lD as p,
  lL as m,
  qG as h,
  uL as g,
  vzt as _,
  xMt as v,
  yzt as y,
} from "./app-shared-bbfeca5e5737.js";
import { n as b, t as x } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { n as S, t as C } from "./summary-panel-create-output-messages-1ce68e6b9489.js";
function w(e) {
  let t = (0, T.c)(12),
    r = c(),
    a = (0, E.useRef)(!1),
    o = n,
    l = e.open,
    u = e.onOpenChange,
    d = e.onInteractOutside,
    f = (e) => {
      a.current &&= (e.preventDefault(), !1);
    },
    p;
  t[0] !== r || t[1] !== e.variant
    ? ((p =
        e.variant === `row`
          ? (0, D.jsx)(x.ItemButton, {
              className: `select-none`,
              interaction: `foreground`,
              tone: `conversation-summary`,
              children: (0, D.jsx)(x.ItemLabel, { children: (0, D.jsx)(i, { ...S.create }) }),
            })
          : (0, D.jsx)(x.IconButton, {
              label: r.formatMessage(S.create),
              children: (0, D.jsx)(h, { className: `text-text/40` }),
            })),
      (t[0] = r),
      (t[1] = e.variant),
      (t[2] = p))
    : (p = t[2]);
  let m = O.map((t) => {
      let { icon: n, kind: r, label: o } = t;
      return (0, D.jsx)(
        s.Item,
        {
          disabled: e.availableKinds != null && !e.availableKinds.includes(r),
          leftIcon: n,
          onSelect: () => {
            a.current = e.onCreate(r);
          },
          children: (0, D.jsx)(i, { ...o }),
        },
        o.id,
      );
    }),
    g;
  return (
    t[3] !== o ||
    t[4] !== e.children ||
    t[5] !== e.onInteractOutside ||
    t[6] !== e.onOpenChange ||
    t[7] !== e.open ||
    t[8] !== f ||
    t[9] !== p ||
    t[10] !== m
      ? ((g = (0, D.jsxs)(o, {
          align: `end`,
          contentWidth: `sm`,
          open: l,
          onOpenChange: u,
          onInteractOutside: d,
          onCloseAutoFocus: f,
          triggerButton: p,
          children: [m, e.children],
        })),
        (t[3] = o),
        (t[4] = e.children),
        (t[5] = e.onInteractOutside),
        (t[6] = e.onOpenChange),
        (t[7] = e.open),
        (t[8] = f),
        (t[9] = p),
        (t[10] = m),
        (t[11] = g))
      : (g = t[11]),
    g
  );
}
var T, E, D, O;
function k() {
  return (k = e(() => {
    ((T = _()),
      (E = y()),
      d(),
      t(),
      o(),
      f(),
      u(),
      g(),
      a(),
      b(),
      C(),
      (D = v()),
      (O = [
        { icon: (0, D.jsx)(m, { className: `icon-xs` }), kind: `document`, label: S.document },
        { icon: (0, D.jsx)(r, { icon: p.presentation }), kind: `presentation`, label: S.presentation },
        { icon: (0, D.jsx)(r, { icon: p.spreadsheet }), kind: `spreadsheet`, label: S.spreadsheet },
        { icon: (0, D.jsx)(l, { className: `icon-xs` }), kind: `site`, label: S.site },
      ]));
  }))();
}
export { k as n, w as t };
//# sourceMappingURL=summary-panel-create-output-menu-e37904da3636.js.map
