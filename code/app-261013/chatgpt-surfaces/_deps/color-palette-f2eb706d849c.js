import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  VDt as n,
  _Mt as r,
  gMt as i,
  jDt as a,
  t3 as o,
  vzt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
import { Cnn as l, ynn as u } from "./app-initial-5851df3f6cb1.js";
function d(e, t) {
  switch (t) {
    case `black`:
      return e.formatMessage({
        id: `codex.projectAppearance.color.option.black`,
        defaultMessage: `Default`,
        description: `Color option name in the project marker popover.`,
      });
    case `blue`:
      return e.formatMessage({
        id: `codex.projectAppearance.color.option.blue`,
        defaultMessage: `Blue`,
        description: `Color option name in the project marker popover.`,
      });
    case `green`:
      return e.formatMessage({
        id: `codex.projectAppearance.color.option.green`,
        defaultMessage: `Green`,
        description: `Color option name in the project marker popover.`,
      });
    case `orange`:
      return e.formatMessage({
        id: `codex.projectAppearance.color.option.orange`,
        defaultMessage: `Orange`,
        description: `Color option name in the project marker popover.`,
      });
    case `pink`:
      return e.formatMessage({
        id: `codex.projectAppearance.color.option.pink`,
        defaultMessage: `Pink`,
        description: `Color option name in the project marker popover.`,
      });
    case `purple`:
      return e.formatMessage({
        id: `codex.projectAppearance.color.option.purple`,
        defaultMessage: `Purple`,
        description: `Color option name in the project marker popover.`,
      });
    case `red`:
      return e.formatMessage({
        id: `codex.projectAppearance.color.option.red`,
        defaultMessage: `Red`,
        description: `Color option name in the project marker popover.`,
      });
    case `yellow`:
      return e.formatMessage({
        id: `codex.projectAppearance.color.option.yellow`,
        defaultMessage: `Yellow`,
        description: `Color option name in the project marker popover.`,
      });
  }
}
var f;
function p() {
  return (p = e(() => {
    f = [`black`, `red`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`];
  }))();
}
function m(e) {
  let r = (0, h.c)(12),
    { color: a, defaultSwatchColor: o, disabled: s, groupAriaLabel: c, onColorChange: l } = e,
    p = s !== void 0 && s,
    m = n(),
    _;
  r[0] !== c || r[1] !== m
    ? ((_ =
        c ??
        m.formatMessage({
          id: `symbolPicker.icons.colors`,
          defaultMessage: `Icon colors`,
          description: `Accessible label for the icon picker color presets`,
        })),
      (r[0] = c),
      (r[1] = m),
      (r[2] = _))
    : (_ = r[2]);
  let v;
  r[3] !== a || r[4] !== o || r[5] !== p || r[6] !== m || r[7] !== l
    ? ((v = f.map((e) =>
        (0, g.jsx)(
          t,
          {
            color: a === e ? `secondary` : `ghost`,
            size: `iconCircle`,
            radius: `full`,
            disabled: p,
            "aria-label": m.formatMessage(
              {
                id: `codex.projectAppearance.color.option.aria_label`,
                defaultMessage: `Use {colorName}`,
                description: `Accessible label for a project marker color swatch. Placeholder {colorName} is a color name such as Blue or Green.`,
              },
              { colorName: d(m, e) },
            ),
            "aria-pressed": a === e,
            onClick: () => l(e),
            children: (0, g.jsx)(`span`, {
              className: i(`size-6 rounded-full`, e === `black` && o != null ? void 0 : u[e].swatchClassName),
              style: e === `black` && o != null ? { backgroundColor: o } : void 0,
              "aria-hidden": !0,
            }),
          },
          e,
        ),
      )),
      (r[3] = a),
      (r[4] = o),
      (r[5] = p),
      (r[6] = m),
      (r[7] = l),
      (r[8] = v))
    : (v = r[8]);
  let y;
  return (
    r[9] !== _ || r[10] !== v
      ? ((y = (0, g.jsx)(`div`, {
          className: `flex items-center justify-between gap-1 select-none`,
          role: `group`,
          "aria-label": _,
          children: v,
        })),
        (r[9] = _),
        (r[10] = v),
        (r[11] = y))
      : (y = r[11]),
    y
  );
}
var h, g;
function _() {
  return (_ = e(() => {
    ((h = s()), r(), a(), o(), p(), l(), (g = c()));
  }))();
}
export { _ as n, m as t };
//# sourceMappingURL=color-palette-f2eb706d849c.js.map
