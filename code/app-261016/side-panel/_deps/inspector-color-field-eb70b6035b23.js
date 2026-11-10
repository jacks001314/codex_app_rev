import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  MNt as n,
  NNt as r,
  PBt as i,
  TY as a,
  XOt as o,
  Y3 as s,
  Z3 as c,
  _D as l,
  fD as u,
  gD as d,
  jH as f,
  mD as p,
  nB as m,
  okt as h,
  rB as g,
  tkt as _,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as v, t as y } from "./PopcornColorPicker-f42ad8a2beaa.js";
function b(e) {
  let t = (0, x.c)(8),
    { color: r, backgroundImage: i, size: a } = e,
    o = (a === void 0 ? `field` : a) === `toolbar` ? `size-4` : `size-3.25`,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = n(`shrink-0 rounded-full ring-1 ring-border-subtle ring-inset`, o)), (t[0] = o), (t[1] = s));
  let c = r ?? void 0,
    l;
  t[2] !== i || t[3] !== c
    ? ((l = { backgroundColor: c, backgroundImage: i }), (t[2] = i), (t[3] = c), (t[4] = l))
    : (l = t[4]);
  let u;
  return (
    t[5] !== s || t[6] !== l
      ? ((u = (0, S.jsx)(`span`, { className: s, style: l })), (t[5] = s), (t[6] = l), (t[7] = u))
      : (u = t[7]),
    u
  );
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = i()), r(), (S = t()));
  }))();
}
function w(e) {
  let t = (0, T.c)(3),
    n = e[`aria-pressed`] === !0 ? `accentSubtle` : `field`,
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (0, E.jsx)(s, { ...e, color: n, size: `field` })), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = i()), c(), (E = t()));
  }))();
}
function O(e) {
  let t = (0, k.c)(9),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ title: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = r ?? n[`aria-label`],
    a = n[`aria-expanded`] === !0 || n[`aria-expanded`] === `true`,
    o;
  t[3] === n ? (o = t[4]) : ((o = (0, A.jsx)(s, { ...n })), (t[3] = n), (t[4] = o));
  let c;
  return (
    t[5] !== i || t[6] !== a || t[7] !== o
      ? ((c = (0, A.jsx)(m, { tooltipContent: i, sideOffset: 8, triggerPopupOpen: a, children: o })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
var k, A;
function j() {
  return (j = e(() => {
    ((k = i()), c(), g(), (A = t()));
  }))();
}
function M(e) {
  let t = (0, P.c)(22),
    {
      label: n,
      color: r,
      onChange: i,
      palette: a,
      variant: o,
      disabled: s,
      disabledReason: c,
      allowCustom: l,
      side: m,
      open: h,
      onOpenChange: g,
      onInteractOutside: v,
    } = e,
    y = o === void 0 ? `field` : o,
    x = l === void 0 || l,
    S;
  t[0] !== r || t[1] !== s || t[2] !== c || t[3] !== n || t[4] !== y
    ? ((S = (0, F.jsx)(d, {
        asChild: !0,
        children:
          y === `toolbar`
            ? (0, F.jsx)(O, {
                color: `ghostActive`,
                size: `formatToolbarIcon`,
                "aria-label": n,
                "aria-description": s ? c : void 0,
                title: s ? c : void 0,
                disabled: s,
                children: (0, F.jsx)(b, { color: r, size: `toolbar` }),
              })
            : (0, F.jsxs)(w, {
                className: `w-full`,
                "aria-label": n,
                "aria-description": s ? c : void 0,
                title: s ? c : void 0,
                disabled: s,
                children: [
                  (0, F.jsx)(b, { color: r }),
                  (0, F.jsx)(`span`, {
                    className: `min-w-0 flex-1 truncate text-start font-normal`,
                    children:
                      y === `field` &&
                      (r?.replace(/^#/, ``).toUpperCase() ??
                        (0, F.jsx)(_, {
                          id: `presentationEditor.mixed`,
                          defaultMessage: `Mixed`,
                          description: `A formatting value differs across selected objects or table cells`,
                        })),
                  }),
                  (0, F.jsx)(f, {}),
                ],
              }),
      })),
      (t[0] = r),
      (t[1] = s),
      (t[2] = c),
      (t[3] = n),
      (t[4] = y),
      (t[5] = S))
    : (S = t[5]);
  let C = m === `bottom` ? `end` : `start`,
    T;
  t[6] !== x || t[7] !== r || t[8] !== n || t[9] !== i || t[10] !== a
    ? ((T = (0, F.jsx)(N, { color: r, label: n, palette: a, allowCustom: x, onChange: i })),
      (t[6] = x),
      (t[7] = r),
      (t[8] = n),
      (t[9] = i),
      (t[10] = a),
      (t[11] = T))
    : (T = t[11]);
  let E;
  t[12] !== v || t[13] !== m || t[14] !== C || t[15] !== T
    ? ((E = (0, F.jsx)(p, {
        "data-popcorn-edit-toolbar-root": `true`,
        onInteractOutside: v,
        side: m,
        align: C,
        size: `content`,
        variant: `menu`,
        disablePadding: !0,
        children: T,
      })),
      (t[12] = v),
      (t[13] = m),
      (t[14] = C),
      (t[15] = T),
      (t[16] = E))
    : (E = t[16]);
  let D;
  return (
    t[17] !== g || t[18] !== h || t[19] !== S || t[20] !== E
      ? ((D = (0, F.jsxs)(u, { open: h, onOpenChange: g, children: [S, E] })),
        (t[17] = g),
        (t[18] = h),
        (t[19] = S),
        (t[20] = E),
        (t[21] = D))
      : (D = t[21]),
    D
  );
}
function N(e) {
  let t = (0, P.c)(45),
    {
      initialView: n,
      size: r,
      collapseControlsWhileDragging: i,
      onDragControlChange: a,
      onEyeDropperActiveChange: o,
      onPreviewChange: s,
      palette: c,
      color: l,
      label: u,
      onChange: d,
      allowCustom: f,
      closeOnSelect: p,
    } = e,
    m = f === void 0 || f,
    g = p === void 0 || p,
    _ = h(),
    v = l == null,
    b;
  t[0] !== _ || t[1] !== c
    ? ((b = c?.map((e) => ({
        value: e,
        label: _.formatMessage(
          {
            id: `artifactColorPicker.fileColor`,
            defaultMessage: `File color {color}`,
            description: `Apply a color from this artifact's palette`,
          },
          { color: e },
        ),
      }))),
      (t[0] = _),
      (t[1] = c),
      (t[2] = b))
    : (b = t[2]);
  let x;
  t[3] === _
    ? (x = t[4])
    : ((x = _.formatMessage({
        id: `artifactColorPicker.palette`,
        defaultMessage: `Colors in the file`,
        description: `Heading above the artifact's color palette`,
      })),
      (t[3] = _),
      (t[4] = x));
  let S;
  t[5] === _
    ? (S = t[6])
    : ((S = _.formatMessage({
        id: `artifactColorPicker.custom`,
        defaultMessage: `Custom color`,
        description: `Open the custom color spectrum and hexadecimal input`,
      })),
      (t[5] = _),
      (t[6] = S));
  let C;
  t[7] === _
    ? (C = t[8])
    : ((C = _.formatMessage({
        id: `artifactColorPicker.none`,
        defaultMessage: `No fill`,
        description: `Remove the selected object's or cells' fill color`,
      })),
      (t[7] = _),
      (t[8] = C));
  let w;
  t[9] === _
    ? (w = t[10])
    : ((w = _.formatMessage({
        id: `presentationEditor.hex`,
        defaultMessage: `HEX`,
        description: `Hexadecimal color value label`,
      })),
      (t[9] = _),
      (t[10] = w));
  let T;
  t[11] === _
    ? (T = t[12])
    : ((T = _.formatMessage({
        id: `presentationEditor.pickScreenColor`,
        defaultMessage: `Pick color from screen`,
        description: `Start the screen eyedropper to select a color`,
      })),
      (t[11] = _),
      (t[12] = T));
  let E;
  t[13] === _
    ? (E = t[14])
    : ((E = _.formatMessage({
        id: `artifactColorPicker.screenColorUnavailable`,
        defaultMessage: `Screen color picker is unavailable in this browser`,
        description: `Tooltip explaining why the screen eyedropper is disabled`,
      })),
      (t[13] = _),
      (t[14] = E));
  let D;
  t[15] === _
    ? (D = t[16])
    : ((D = _.formatMessage({
        id: `presentationEditor.screenColorFailed`,
        defaultMessage: `Could not pick a screen color`,
        description: `The screen eyedropper failed to open or read a color`,
      })),
      (t[15] = _),
      (t[16] = D));
  let O;
  t[17] === _
    ? (O = t[18])
    : ((O = (e, t) =>
        _.formatMessage(
          {
            id: `artifactColorPicker.shade`,
            defaultMessage: `{family, select, Blue {Blue} Purple {Purple} Pink {Pink} Orange {Orange} Yellow {Yellow} Green {Green} other {Gray}} shade {shade}`,
            description: `Accessible label for a color shade; shade is its numeric position or intensity`,
          },
          { family: e, shade: t },
        )),
      (t[17] = _),
      (t[18] = O));
  let k;
  t[19] !== u ||
  t[20] !== E ||
  t[21] !== D ||
  t[22] !== O ||
  t[23] !== x ||
  t[24] !== S ||
  t[25] !== C ||
  t[26] !== w ||
  t[27] !== T
    ? ((k = {
        palette: x,
        custom: S,
        none: C,
        hex: w,
        hexInput: u,
        screenPicker: T,
        screenPickerUnavailable: E,
        screenPickerFailed: D,
        shade: O,
      }),
      (t[19] = u),
      (t[20] = E),
      (t[21] = D),
      (t[22] = O),
      (t[23] = x),
      (t[24] = S),
      (t[25] = C),
      (t[26] = w),
      (t[27] = T),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] === d
    ? (A = t[30])
    : ((A = (e) => {
        e != null && d(e);
      }),
      (t[29] = d),
      (t[30] = A));
  let j;
  return (
    t[31] !== m ||
    t[32] !== g ||
    t[33] !== i ||
    t[34] !== l ||
    t[35] !== n ||
    t[36] !== a ||
    t[37] !== o ||
    t[38] !== s ||
    t[39] !== r ||
    t[40] !== k ||
    t[41] !== A ||
    t[42] !== v ||
    t[43] !== b
      ? ((j = (0, F.jsx)(`div`, {
          className: `w-62 p-2`,
          children: (0, F.jsx)(y, {
            initialView: n,
            size: r,
            collapseControlsWhileDragging: i,
            onDragControlChange: a,
            onEyeDropperActiveChange: o,
            onPreviewChange: s,
            color: l,
            mixed: v,
            colors: b,
            labels: k,
            allowCustom: m,
            embedded: !0,
            closeOnSelect: g,
            onChange: A,
          }),
        })),
        (t[31] = m),
        (t[32] = g),
        (t[33] = i),
        (t[34] = l),
        (t[35] = n),
        (t[36] = a),
        (t[37] = o),
        (t[38] = s),
        (t[39] = r),
        (t[40] = k),
        (t[41] = A),
        (t[42] = v),
        (t[43] = b),
        (t[44] = j))
      : (j = t[44]),
    j
  );
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = i()), v(), o(), a(), l(), C(), D(), j(), (F = t()));
  }))();
}
export { j as a, b as c, O as i, C as l, N as n, w as o, I as r, D as s, M as t };
//# sourceMappingURL=inspector-color-field-eb70b6035b23.js.map
