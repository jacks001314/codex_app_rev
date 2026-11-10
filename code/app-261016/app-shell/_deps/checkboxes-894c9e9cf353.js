import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  FNt as n,
  LNt as r,
  OT as i,
  PBt as a,
  XOt as o,
  kT as s,
  okt as c,
} from "./app-shared-2feb3d4c6fcc.js";
function l(e) {
  let t = (0, u.c)(9),
    { editable: n, registry: r } = e,
    a = c(),
    o = (0, d.useSyncExternalStore)(r.subscribe, r.getSnapshot),
    s;
  if (t[0] !== n || t[1] !== o || t[2] !== a) {
    let e;
    (t[4] !== n || t[5] !== a
      ? ((e = (e) =>
          (0, f.createPortal)(
            (0, p.jsx)(`div`, {
              className: `relative flex items-center`,
              onPointerDown: (t) => {
                n && t.button === 0 && t.pointerType !== `touch` && (t.preventDefault(), e.focusEditor());
              },
              children: (0, p.jsx)(i, {
                id: e.id,
                "aria-describedby": e.contentId,
                "aria-label": a.formatMessage({
                  id: `codex.space.page.checklist.checkboxLabel`,
                  defaultMessage: `Checklist item`,
                  description: `Accessible label for a Page checklist checkbox; the associated description contains the item's text`,
                }),
                checked: e.checked,
                disabled: !n,
                variant: `checklist`,
                onCheckedChange: e.setChecked,
              }),
            }),
            e.container,
            e.id,
          )),
        (t[4] = n),
        (t[5] = a),
        (t[6] = e))
      : (e = t[6]),
      (s = o.map(e)),
      (t[0] = n),
      (t[1] = o),
      (t[2] = a),
      (t[3] = s));
  } else s = t[3];
  let l;
  return (
    t[7] === s ? (l = t[8]) : ((l = (0, p.jsx)(p.Fragment, { children: s })), (t[7] = s), (t[8] = l)),
    l
  );
}
var u, d, f, p;
function m() {
  return (m = e(() => {
    ((u = a()), (d = t()), (f = n()), o(), s(), (p = r()));
  }))();
}
export { m as n, l as t };
//# sourceMappingURL=checkboxes-894c9e9cf353.js.map
