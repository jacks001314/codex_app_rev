import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HT as t,
  VDt as n,
  VT as r,
  jDt as i,
  vzt as a,
  xMt as o,
  yMt as s,
  yzt as c,
} from "./app-shared-bbfeca5e5737.js";
function l(e) {
  let t = (0, u.c)(9),
    { editable: i, registry: a } = e,
    o = n(),
    s = (0, d.useSyncExternalStore)(a.subscribe, a.getSnapshot),
    c;
  if (t[0] !== i || t[1] !== s || t[2] !== o) {
    let e;
    (t[4] !== i || t[5] !== o
      ? ((e = (e) =>
          (0, f.createPortal)(
            (0, p.jsx)(`div`, {
              className: `relative flex items-center`,
              onPointerDown: (t) => {
                i && t.button === 0 && t.pointerType !== `touch` && (t.preventDefault(), e.focusEditor());
              },
              children: (0, p.jsx)(r, {
                id: e.id,
                "aria-describedby": e.contentId,
                "aria-label": o.formatMessage({
                  id: `codex.space.page.checklist.checkboxLabel`,
                  defaultMessage: `Checklist item`,
                  description: `Accessible label for a Page checklist checkbox; the associated description contains the item's text`,
                }),
                checked: e.checked,
                disabled: !i,
                variant: `checklist`,
                onCheckedChange: e.setChecked,
              }),
            }),
            e.container,
            e.id,
          )),
        (t[4] = i),
        (t[5] = o),
        (t[6] = e))
      : (e = t[6]),
      (c = s.map(e)),
      (t[0] = i),
      (t[1] = s),
      (t[2] = o),
      (t[3] = c));
  } else c = t[3];
  let l;
  return (
    t[7] === c ? (l = t[8]) : ((l = (0, p.jsx)(p.Fragment, { children: c })), (t[7] = c), (t[8] = l)),
    l
  );
}
var u, d, f, p;
function m() {
  return (m = e(() => {
    ((u = a()), (d = c()), (f = s()), i(), t(), (p = o()));
  }))();
}
export { m as n, l as t };
//# sourceMappingURL=checkboxes-e2ffcb23d363.js.map
