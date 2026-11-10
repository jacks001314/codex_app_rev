import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CS as t,
  VDt as n,
  cE as r,
  cz as i,
  jDt as a,
  sz as o,
  vzt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  Qy as l,
  Tct as u,
  Uy as d,
  Wy as f,
  Xy as p,
  Yy as m,
  Zy as h,
  nb as g,
  tb as _,
  wct as v,
} from "./app-initial-5851df3f6cb1.js";
import { a as y, t as b } from "./PopcornManualEditHeaderControls-e0458d509e7c.js";
import { n as x, t as S } from "./annotation-mode-icon-c9f59d42793c.js";
import { n as C, t as w } from "./presentation-icons-b0d9e60b62e3.js";
import { n as T, t as E } from "./insertion-button-20ddf494692a.js";
import { n as D, t as O } from "./insertion-button-efa97347c3d9.js";
import { n as k, t as A } from "./facepile-4ea3da6a7b88.js";
function j(e) {
  let t = (0, M.c)(38),
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]))
    : (({ kind: a, canWrite: r, controls: i, ...o } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o));
  let s = n();
  if (a === `canvas`) {
    let e;
    return (
      t[5] !== i || t[6] !== o
        ? ((e = (0, N.jsx)(m, { ...o, controls: i })), (t[5] = i), (t[6] = o), (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let c;
  t[8] === a
    ? (c = t[9])
    : ((c =
        a === `spreadsheet`
          ? (0, N.jsxs)(N.Fragment, {
              children: [
                (0, N.jsx)(O, { kind: `chart`, disabled: !0 }),
                (0, N.jsx)(O, { kind: `image`, disabled: !0 }),
                (0, N.jsx)(O, { kind: `tools`, disabled: !0 }),
              ],
            })
          : (0, N.jsxs)(N.Fragment, {
              children: [
                (0, N.jsx)(E, { action: `slide`, disabled: !0 }),
                (0, N.jsx)(E, { action: `text`, disabled: !0 }),
                (0, N.jsx)(E, { action: `image`, disabled: !0 }),
                (0, N.jsx)(E, { action: `tools`, disabled: !0 }),
              ],
            })),
      (t[8] = a),
      (t[9] = c));
  let l = c,
    u;
  t[10] !== o.downloadControl || t[11] !== o.onDownload
    ? ((u = o.downloadControl ?? (o.onDownload == null ? (0, N.jsx)(h, { disabled: !0 }) : void 0)),
      (t[10] = o.downloadControl),
      (t[11] = o.onDownload),
      (t[12] = u))
    : (u = t[12]);
  let f;
  t[13] === a
    ? (f = t[14])
    : ((f = a === `presentation` ? (0, N.jsx)(_, { disabled: !0 }) : void 0), (t[13] = a), (t[14] = f));
  let g = i.editingControls ?? (r ? l : null),
    v;
  t[15] !== r || t[16] !== i.formatControl || t[17] !== s
    ? ((v =
        i.formatControl ??
        (r
          ? (0, N.jsx)(b, {
              disabled: !0,
              size: `default`,
              "aria-label": s.formatMessage({
                id: `pages.native.format`,
                defaultMessage: `Format`,
                description: `Button to open formatting controls in a native Sheet or Slide editor`,
              }),
              children: C.format,
            })
          : null)),
      (t[15] = r),
      (t[16] = i.formatControl),
      (t[17] = s),
      (t[18] = v))
    : (v = t[18]);
  let y;
  t[19] !== i.annotationControl || t[20] !== s
    ? ((y =
        i.annotationControl ??
        (0, N.jsx)(b, {
          disabled: !0,
          size: `default`,
          variant: `annotation`,
          label: s.formatMessage({
            id: `artifactViewer.requestEdits`,
            defaultMessage: `Request edits`,
            description: `Button label for requesting edits to an artifact`,
          }),
          children: (0, N.jsx)(S, { active: !1 }),
        })),
      (t[19] = i.annotationControl),
      (t[20] = s),
      (t[21] = y))
    : (y = t[21]);
  let x;
  t[22] === i.commentsControl
    ? (x = t[23])
    : ((x = i.commentsControl ?? (0, N.jsx)(p, { disabled: !0, open: !1 })),
      (t[22] = i.commentsControl),
      (t[23] = x));
  let w;
  t[24] === i.zoomControl
    ? (w = t[25])
    : ((w = i.zoomControl ?? d().zoomControl), (t[24] = i.zoomControl), (t[25] = w));
  let T;
  t[26] !== i || t[27] !== g || t[28] !== v || t[29] !== y || t[30] !== x || t[31] !== w
    ? ((T = {
        ...i,
        editingControls: g,
        formatControl: v,
        annotationControl: y,
        commentsControl: x,
        zoomControl: w,
      }),
      (t[26] = i),
      (t[27] = g),
      (t[28] = v),
      (t[29] = y),
      (t[30] = x),
      (t[31] = w),
      (t[32] = T))
    : (T = t[32]);
  let D;
  return (
    t[33] !== o || t[34] !== u || t[35] !== f || t[36] !== T
      ? ((D = (0, N.jsx)(m, { ...o, downloadControl: u, presentationControl: f, controls: T })),
        (t[33] = o),
        (t[34] = u),
        (t[35] = f),
        (t[36] = T),
        (t[37] = D))
      : (D = t[37]),
    D
  );
}
var M, N;
function P() {
  return (P = e(() => {
    ((M = s()), y(), a(), T(), D(), l(), f(), g(), w(), x(), (N = c()));
  }))();
}
function F(e) {
  let t = (0, I.c)(16),
    { ref: i, disabled: a, onClick: s, people: c } = e,
    l = n(),
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = l.formatMessage({
        id: `artifactViewer.share`,
        defaultMessage: `Share`,
        description: `Button for sharing an artifact from its viewer`,
      })),
      (t[0] = l),
      (t[1] = u));
  let d = u,
    f;
  t[2] === c
    ? (f = t[3])
    : ((f = c || (0, L.jsx)(A, { people: [], showPlaceholder: !0 })), (t[2] = c), (t[3] = f));
  let p;
  t[4] !== a || t[5] !== d || t[6] !== s || t[7] !== i
    ? ((p = (0, L.jsx)(v, { ref: i, "aria-label": d, disabled: a, onClick: s })),
      (t[4] = a),
      (t[5] = d),
      (t[6] = s),
      (t[7] = i),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== d || t[10] !== p
    ? ((m = (0, L.jsx)(o, {
        cloneCustomTrigger: !0,
        openWhen: `visibility-target-hidden`,
        side: `bottom`,
        tooltipContent: d,
        children: p,
      })),
      (t[9] = d),
      (t[10] = p),
      (t[11] = m))
    : (m = t[11]);
  let h;
  return (
    t[12] !== d || t[13] !== f || t[14] !== m
      ? ((h = (0, L.jsxs)(r, { label: d, children: [f, m] })),
        (t[12] = d),
        (t[13] = f),
        (t[14] = m),
        (t[15] = h))
      : (h = t[15]),
    h
  );
}
var I, L;
function R() {
  return (R = e(() => {
    ((I = s()), a(), i(), k(), t(), u(), (L = c()));
  }))();
}
export { P as i, R as n, j as r, F as t };
//# sourceMappingURL=share-control-34a4e6ed1550.js.map
