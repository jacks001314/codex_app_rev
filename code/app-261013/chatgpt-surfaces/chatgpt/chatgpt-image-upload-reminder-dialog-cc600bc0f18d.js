import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  _O as r,
  cO as i,
  fO as a,
  gO as o,
  jDt as s,
  lO as c,
  mO as l,
  oO as u,
  sO as d,
  t3 as f,
  vO as p,
  vzt as m,
  xMt as h,
  yzt as g,
} from "./app-shared-bbfeca5e5737.js";
function _(e) {
  let a = (0, y.c)(13),
    { onAcknowledge: s, onShown: f, overlayClassName: p } = e,
    m = (0, b.useRef)(!1),
    h;
  a[0] === s
    ? (h = a[1])
    : ((h = (e) => {
        (e.preventDefault(), e.stopPropagation(), s());
      }),
      (a[0] = s),
      (a[1] = h));
  let g = h,
    _;
  a[2] === f
    ? (_ = a[3])
    : ((_ = {
        onOpenAutoFocus: () => {
          m.current || ((m.current = !0), f?.());
        },
      }),
      (a[2] = f),
      (a[3] = _));
  let S;
  a[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, x.jsx)(r, {
        children: (0, x.jsx)(n, {
          id: `chatgptConversations.imageUploadReminder.title`,
          defaultMessage: `Check before sharing`,
          description: `Title of a privacy reminder asking teens to check photos for sensitive information when attaching them to ChatGPT`,
        }),
      })),
      (a[4] = S))
    : (S = a[4]);
  let C;
  a[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, x.jsx)(c, {
        children: (0, x.jsx)(i, {
          className: `select-none`,
          title: S,
          subtitle: (0, x.jsx)(o, {
            children: (0, x.jsx)(n, {
              id: `chatgptConversations.imageUploadReminder.description`,
              defaultMessage: `Before you upload, take a quick look to make sure you haven’t included anything sensitive`,
              description: `Privacy reminder asking teens to check photos for sensitive information when attaching them to ChatGPT; shown before selection or after a sensitive-image preview`,
            }),
          }),
        }),
      })),
      (a[5] = C))
    : (C = a[5]);
  let w;
  a[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, x.jsx)(c, {
        children: (0, x.jsx)(d, {
          children: (0, x.jsx)(t, {
            type: `submit`,
            children: (0, x.jsx)(n, {
              id: `chatgptConversations.imageUploadReminder.acknowledge`,
              defaultMessage: `Got it`,
              description: `Only button in the teen photo privacy reminder; acknowledges it and either opens the picker before selection or closes the reminder after an upload`,
            }),
          }),
        }),
      })),
      (a[6] = w))
    : (w = a[6]);
  let T;
  a[7] === g
    ? (T = a[8])
    : ((T = (0, x.jsxs)(u, { as: `form`, onSubmit: g, children: [C, w] })), (a[7] = g), (a[8] = T));
  let E;
  return (
    a[9] !== p || a[10] !== _ || a[11] !== T
      ? ((E = (0, x.jsx)(l, {
          open: !0,
          shouldIgnoreClickOutside: !0,
          showDialogClose: !1,
          size: `compact`,
          overlayClassName: p,
          onOpenChange: v,
          contentProps: _,
          children: T,
        })),
        (a[9] = p),
        (a[10] = _),
        (a[11] = T),
        (a[12] = E))
      : (E = a[12]),
    E
  );
}
function v() {}
var y, b, x;
function S() {
  return (S = e(() => {
    ((y = m()), (b = g()), s(), f(), p(), a(), (x = h()));
  }))();
}
export { S as n, _ as t };
//# sourceMappingURL=chatgpt-image-upload-reminder-dialog-cc600bc0f18d.js.map
