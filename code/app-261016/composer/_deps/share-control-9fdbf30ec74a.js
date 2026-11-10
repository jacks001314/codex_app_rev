import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FE as t,
  LNt as n,
  PBt as r,
  XOt as i,
  XS as a,
  nB as o,
  okt as s,
  rB as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Alt as l,
  Cb as u,
  _b as d,
  bb as f,
  db as p,
  fb as m,
  klt as h,
  vb as g,
  wb as _,
  yb as v,
} from "./app-initial-ad16eaadf81f.js";
import { a as y, t as b } from "./PopcornManualEditHeaderControls-45cc4843f346.js";
import { n as x, t as S } from "./annotation-mode-icon-eafbc4a6687a.js";
import { n as C, t as w } from "./presentation-icons-afce9eca9634.js";
import { n as T, t as E } from "./insertion-button-63ee017423ce.js";
import { n as D, t as O } from "./insertion-button-d84aa7482327.js";
import { n as k, t as A } from "./facepile-acf5586b71ad.js";
function j(e) {
  let t = (0, M.c)(38),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ kind: i, canWrite: n, controls: r, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = s();
  if (i === `canvas`) {
    let e;
    return (
      t[5] !== r || t[6] !== a
        ? ((e = (0, N.jsx)(d, { ...a, controls: r })), (t[5] = r), (t[6] = a), (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let c;
  t[8] === i
    ? (c = t[9])
    : ((c =
        i === `spreadsheet`
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
      (t[8] = i),
      (t[9] = c));
  let l = c,
    f;
  t[10] !== a.downloadControl || t[11] !== a.onDownload
    ? ((f = a.downloadControl ?? (a.onDownload == null ? (0, N.jsx)(v, { disabled: !0 }) : void 0)),
      (t[10] = a.downloadControl),
      (t[11] = a.onDownload),
      (t[12] = f))
    : (f = t[12]);
  let m;
  t[13] === i
    ? (m = t[14])
    : ((m = i === `presentation` ? (0, N.jsx)(u, { disabled: !0 }) : void 0), (t[13] = i), (t[14] = m));
  let h = r.editingControls ?? (n ? l : null),
    _;
  t[15] !== n || t[16] !== r.formatControl || t[17] !== o
    ? ((_ =
        r.formatControl ??
        (n
          ? (0, N.jsx)(b, {
              disabled: !0,
              size: `default`,
              "aria-label": o.formatMessage({
                id: `pages.native.format`,
                defaultMessage: `Format`,
                description: `Button to open formatting controls in a native Sheet or Slide editor`,
              }),
              children: C.format,
            })
          : null)),
      (t[15] = n),
      (t[16] = r.formatControl),
      (t[17] = o),
      (t[18] = _))
    : (_ = t[18]);
  let y;
  t[19] !== r.annotationControl || t[20] !== o
    ? ((y =
        r.annotationControl ??
        (0, N.jsx)(b, {
          disabled: !0,
          size: `default`,
          variant: `annotation`,
          label: o.formatMessage({
            id: `artifactViewer.requestEdits`,
            defaultMessage: `Request edits`,
            description: `Button label for requesting edits to an artifact`,
          }),
          children: (0, N.jsx)(S, { active: !1 }),
        })),
      (t[19] = r.annotationControl),
      (t[20] = o),
      (t[21] = y))
    : (y = t[21]);
  let x;
  t[22] === r.commentsControl
    ? (x = t[23])
    : ((x = r.commentsControl ?? (0, N.jsx)(g, { disabled: !0, open: !1 })),
      (t[22] = r.commentsControl),
      (t[23] = x));
  let w;
  t[24] === r.zoomControl
    ? (w = t[25])
    : ((w = r.zoomControl ?? p().zoomControl), (t[24] = r.zoomControl), (t[25] = w));
  let T;
  t[26] !== r || t[27] !== h || t[28] !== _ || t[29] !== y || t[30] !== x || t[31] !== w
    ? ((T = {
        ...r,
        editingControls: h,
        formatControl: _,
        annotationControl: y,
        commentsControl: x,
        zoomControl: w,
      }),
      (t[26] = r),
      (t[27] = h),
      (t[28] = _),
      (t[29] = y),
      (t[30] = x),
      (t[31] = w),
      (t[32] = T))
    : (T = t[32]);
  let D;
  return (
    t[33] !== a || t[34] !== f || t[35] !== m || t[36] !== T
      ? ((D = (0, N.jsx)(d, { ...a, downloadControl: f, presentationControl: m, controls: T })),
        (t[33] = a),
        (t[34] = f),
        (t[35] = m),
        (t[36] = T),
        (t[37] = D))
      : (D = t[37]),
    D
  );
}
var M, N;
function P() {
  return (P = e(() => {
    ((M = r()), y(), i(), T(), D(), f(), m(), _(), w(), x(), (N = n()));
  }))();
}
function F(e) {
  let n = (0, I.c)(16),
    { ref: r, disabled: i, onClick: a, people: c } = e,
    l = s(),
    u;
  n[0] === l
    ? (u = n[1])
    : ((u = l.formatMessage({
        id: `artifactViewer.share`,
        defaultMessage: `Share`,
        description: `Button for sharing an artifact from its viewer`,
      })),
      (n[0] = l),
      (n[1] = u));
  let d = u,
    f;
  n[2] === c
    ? (f = n[3])
    : ((f = c || (0, L.jsx)(A, { people: [], showPlaceholder: !0 })), (n[2] = c), (n[3] = f));
  let p;
  n[4] !== i || n[5] !== d || n[6] !== a || n[7] !== r
    ? ((p = (0, L.jsx)(h, { ref: r, "aria-label": d, disabled: i, onClick: a })),
      (n[4] = i),
      (n[5] = d),
      (n[6] = a),
      (n[7] = r),
      (n[8] = p))
    : (p = n[8]);
  let m;
  n[9] !== d || n[10] !== p
    ? ((m = (0, L.jsx)(o, {
        cloneCustomTrigger: !0,
        openWhen: `visibility-target-hidden`,
        side: `bottom`,
        tooltipContent: d,
        children: p,
      })),
      (n[9] = d),
      (n[10] = p),
      (n[11] = m))
    : (m = n[11]);
  let g;
  return (
    n[12] !== d || n[13] !== f || n[14] !== m
      ? ((g = (0, L.jsxs)(t, { label: d, children: [f, m] })),
        (n[12] = d),
        (n[13] = f),
        (n[14] = m),
        (n[15] = g))
      : (g = n[15]),
    g
  );
}
var I, L;
function R() {
  return (R = e(() => {
    ((I = r()), i(), c(), k(), a(), l(), (L = n()));
  }))();
}
export { P as i, R as n, j as r, F as t };
//# sourceMappingURL=share-control-9fdbf30ec74a.js.map
