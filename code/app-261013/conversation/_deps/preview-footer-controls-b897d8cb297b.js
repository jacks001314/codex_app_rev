import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  JDt as n,
  TJ as r,
  Uz as i,
  jDt as a,
  vzt as o,
  xMt as s,
  yAt as c,
} from "./app-shared-bbfeca5e5737.js";
import { vq as l, yq as u } from "./app-initial-5851df3f6cb1.js";
function d(e) {
  let n = (0, f.c)(31),
    { restored: r, restoring: a, deleting: o, onDelete: s, onUnarchive: u, onDone: d } = e,
    m = o !== void 0 && o,
    h;
  n[0] === a
    ? (h = n[1])
    : ((h = a
        ? (0, p.jsx)(t, {
            id: `localConversation.archived.restoringDescription`,
            defaultMessage: `Restoring this chat and its workspace…`,
            description: `Progress message while an archived task is being restored`,
          })
        : null),
      (n[0] = a),
      (n[1] = h));
  let g;
  n[2] !== r || n[3] !== a
    ? ((g =
        !a && r
          ? (0, p.jsx)(t, {
              id: `localConversation.archived.restoredDescription`,
              defaultMessage: `This chat has been restored`,
              description: `Confirmation shown before leaving an archived task preview`,
            })
          : null),
      (n[2] = r),
      (n[3] = a),
      (n[4] = g))
    : (g = n[4]);
  let _;
  n[5] !== r || n[6] !== a
    ? ((_ =
        !a && !r
          ? (0, p.jsx)(t, {
              id: `localConversation.archived.previewDescription`,
              defaultMessage: `This chat is archived. To continue, unarchive it first`,
              description: `Explanation displayed beneath a read-only archived task preview`,
            })
          : null),
      (n[5] = r),
      (n[6] = a),
      (n[7] = _))
    : (_ = n[7]);
  let v;
  n[8] !== h || n[9] !== g || n[10] !== _
    ? ((v = (0, p.jsxs)(`span`, { className: `text-sm text-secondary select-none`, children: [h, g, _] })),
      (n[8] = h),
      (n[9] = g),
      (n[10] = _),
      (n[11] = v))
    : (v = n[11]);
  let y;
  n[12] !== m || n[13] !== s || n[14] !== r || n[15] !== a
    ? ((y =
        !r && s != null
          ? (0, p.jsx)(c, {
              color: `danger`,
              variant: `solid`,
              disabled: a,
              loading: m,
              size: `lg`,
              onClick: s,
              children: (0, p.jsx)(t, { ...l.delete }),
            })
          : null),
      (n[12] = m),
      (n[13] = s),
      (n[14] = r),
      (n[15] = a),
      (n[16] = y))
    : (y = n[16]);
  let b = r ? d : u,
    x;
  n[17] !== r || n[18] !== a
    ? ((x =
        r && !a
          ? (0, p.jsx)(t, {
              id: `localConversation.archived.previewDone`,
              defaultMessage: `Done`,
              description: `Leaves Archive with the restored task selected`,
            })
          : (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(i, {}), (0, p.jsx)(t, { ...l.unarchive })] })),
      (n[17] = r),
      (n[18] = a),
      (n[19] = x))
    : (x = n[19]);
  let S;
  n[20] !== m || n[21] !== a || n[22] !== b || n[23] !== x
    ? ((S = (0, p.jsx)(c, {
        color: `primary`,
        variant: `solid`,
        disabled: m,
        loading: a,
        size: `lg`,
        onClick: b,
        children: x,
      })),
      (n[20] = m),
      (n[21] = a),
      (n[22] = b),
      (n[23] = x),
      (n[24] = S))
    : (S = n[24]);
  let C;
  n[25] !== y || n[26] !== S
    ? ((C = (0, p.jsxs)(`div`, {
        className: `pointer-events-auto flex items-center gap-2`,
        children: [y, S],
      })),
      (n[25] = y),
      (n[26] = S),
      (n[27] = C))
    : (C = n[27]);
  let w;
  return (
    n[28] !== C || n[29] !== v
      ? ((w = (0, p.jsxs)(`div`, { className: `flex flex-col items-center gap-4 py-4`, children: [v, C] })),
        (n[28] = C),
        (n[29] = v),
        (n[30] = w))
      : (w = n[30]),
    w
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = o()), n(), a(), r(), u(), (p = s()));
  }))();
}
export { m as n, d as t };
//# sourceMappingURL=preview-footer-controls-b897d8cb297b.js.map
