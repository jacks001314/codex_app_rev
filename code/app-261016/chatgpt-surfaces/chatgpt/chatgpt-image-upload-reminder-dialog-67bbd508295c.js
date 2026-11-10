import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HO as n,
  IO as r,
  JO as i,
  KO as a,
  LNt as o,
  LO as s,
  PBt as c,
  RO as l,
  WO as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  qO as m,
  tkt as h,
  zO as g,
} from "./app-shared-2feb3d4c6fcc.js";
function _(e) {
  let t = (0, y.c)(13),
    { onAcknowledge: n, onShown: i, overlayClassName: o } = e,
    c = (0, b.useRef)(!1),
    d;
  t[0] === n
    ? (d = t[1])
    : ((d = (e) => {
        (e.preventDefault(), e.stopPropagation(), n());
      }),
      (t[0] = n),
      (t[1] = d));
  let p = d,
    _;
  t[2] === i
    ? (_ = t[3])
    : ((_ = {
        onOpenAutoFocus: () => {
          c.current || ((c.current = !0), i?.());
        },
      }),
      (t[2] = i),
      (t[3] = _));
  let S;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, x.jsx)(m, {
        children: (0, x.jsx)(h, {
          id: `chatgptConversations.imageUploadReminder.title`,
          defaultMessage: `Check before sharing`,
          description: `Title of a privacy reminder asking teens to check photos for sensitive information when attaching them to ChatGPT`,
        }),
      })),
      (t[4] = S))
    : (S = t[4]);
  let C;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, x.jsx)(g, {
        children: (0, x.jsx)(l, {
          className: `select-none`,
          title: S,
          subtitle: (0, x.jsx)(a, {
            children: (0, x.jsx)(h, {
              id: `chatgptConversations.imageUploadReminder.description`,
              defaultMessage: `Before you upload, take a quick look to make sure you haven’t included anything sensitive`,
              description: `Privacy reminder asking teens to check photos for sensitive information when attaching them to ChatGPT; shown before selection or after a sensitive-image preview`,
            }),
          }),
        }),
      })),
      (t[5] = C))
    : (C = t[5]);
  let w;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, x.jsx)(g, {
        children: (0, x.jsx)(s, {
          children: (0, x.jsx)(f, {
            type: `submit`,
            children: (0, x.jsx)(h, {
              id: `chatgptConversations.imageUploadReminder.acknowledge`,
              defaultMessage: `Got it`,
              description: `Only button in the teen photo privacy reminder; acknowledges it and either opens the picker before selection or closes the reminder after an upload`,
            }),
          }),
        }),
      })),
      (t[6] = w))
    : (w = t[6]);
  let T;
  t[7] === p
    ? (T = t[8])
    : ((T = (0, x.jsxs)(r, { as: `form`, onSubmit: p, children: [C, w] })), (t[7] = p), (t[8] = T));
  let E;
  return (
    t[9] !== o || t[10] !== _ || t[11] !== T
      ? ((E = (0, x.jsx)(u, {
          open: !0,
          shouldIgnoreClickOutside: !0,
          showDialogClose: !1,
          size: `compact`,
          overlayClassName: o,
          onOpenChange: v,
          contentProps: _,
          children: T,
        })),
        (t[9] = o),
        (t[10] = _),
        (t[11] = T),
        (t[12] = E))
      : (E = t[12]),
    E
  );
}
function v() {}
var y, b, x;
function S() {
  return (S = e(() => {
    ((y = c()), (b = t()), d(), p(), i(), n(), (x = o()));
  }))();
}
export { S as n, _ as t };
//# sourceMappingURL=chatgpt-image-upload-reminder-dialog-67bbd508295c.js.map
