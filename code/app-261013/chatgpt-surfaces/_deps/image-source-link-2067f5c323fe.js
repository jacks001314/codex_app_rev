import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, _Mt as n, gMt as r, jDt as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import {
  BGn as s,
  GF as c,
  OPn as l,
  WF as u,
  kPn as d,
  xPn as f,
  yPn as p,
} from "./app-initial-5851df3f6cb1.js";
function m(e) {
  let n = (0, h.c)(22),
    { className: i, href: a, title: o, attribution: c, conversationId: d, loadRemote: f, openTarget: m } = e,
    _ = i ?? `inline-flex items-center gap-1`,
    v;
  n[0] === _ ? (v = n[1]) : ((v = r(`min-w-0 max-w-full select-none`, _)), (n[0] = _), (n[1] = v));
  let y;
  n[2] !== a || n[3] !== f
    ? ((y = (0, g.jsx)(u, { className: `icon-sm`, href: a, loadRemote: f })),
      (n[2] = a),
      (n[3] = f),
      (n[4] = y))
    : (y = n[4]);
  let b;
  n[5] !== c || n[6] !== a || n[7] !== o
    ? ((b = o
        ? (0, g.jsx)(t, {
            id: `chatgptConversations.imageLightbox.attribution`,
            defaultMessage: `{source} · {title}`,
            description: `Single image attribution link in the image viewer. Source is the website name and title is the image caption. The text may be truncated.`,
            values: { source: c ?? s(a), title: o },
          })
        : (c ?? s(a))),
      (n[5] = c),
      (n[6] = a),
      (n[7] = o),
      (n[8] = b))
    : (b = n[8]);
  let x;
  n[9] === b
    ? (x = n[10])
    : ((x = (0, g.jsx)(`span`, { className: `min-w-0 truncate`, children: b })), (n[9] = b), (n[10] = x));
  let S;
  n[11] !== a || n[12] !== m
    ? ((S = (0, g.jsx)(l, { className: `icon-xs`, href: a, openTarget: m })),
      (n[11] = a),
      (n[12] = m),
      (n[13] = S))
    : (S = n[13]);
  let C;
  return (
    n[14] !== d || n[15] !== a || n[16] !== m || n[17] !== v || n[18] !== y || n[19] !== x || n[20] !== S
      ? ((C = (0, g.jsxs)(p, {
          className: v,
          href: a,
          initiator: `markdown_link_click`,
          conversationId: d,
          openTarget: m,
          children: [y, x, S],
        })),
        (n[14] = d),
        (n[15] = a),
        (n[16] = m),
        (n[17] = v),
        (n[18] = y),
        (n[19] = x),
        (n[20] = S),
        (n[21] = C))
      : (C = n[21]),
    C
  );
}
var h, g;
function _() {
  return (_ = e(() => {
    ((h = a()), n(), i(), f(), c(), d(), (g = o()));
  }))();
}
export { _ as n, m as t };
//# sourceMappingURL=image-source-link-2067f5c323fe.js.map
