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
  mV as l,
  tkt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import { Fu as d, Iu as f, Ru as p, Vu as m } from "./app-primary-3e00728c2a4c.js";
import { n as h, t as g } from "./row-987fdaeb1266.js";
function _(e) {
  let t = (0, v.c)(59),
    {
      ariaDescribedBy: r,
      ariaLabel: i,
      authorAvatar: a,
      autoFocus: o,
      compact: c,
      disabled: f,
      discussion: m,
      embedded: h,
      maxLength: _,
      multiline: b,
      name: x,
      onCancel: S,
      onChange: C,
      onSubmit: w,
      placeholder: T,
      submitLabel: E,
      value: D,
    } = e,
    O = o === void 0 || o,
    k = c !== void 0 && c,
    A = f !== void 0 && f,
    j = h !== void 0 && h,
    M = b === void 0 || b,
    N;
  t[0] === D ? (N = t[1]) : ((N = D.trim()), (t[0] = D), (t[1] = N));
  let P = N !== ``,
    F = !A && P,
    I = k || m != null,
    L;
  if (
    t[2] !== r ||
    t[3] !== i ||
    t[4] !== O ||
    t[5] !== A ||
    t[6] !== m ||
    t[7] !== I ||
    t[8] !== _ ||
    t[9] !== M ||
    t[10] !== x ||
    t[11] !== S ||
    t[12] !== C ||
    t[13] !== T ||
    t[14] !== D
  ) {
    let e = I
        ? n(`min-h-0 w-full p-0 font-sans text-sm text-default`, m == null ? `leading-normal` : `leading-5`)
        : p,
      a;
    t[16] === C ? (a = t[17]) : ((a = (e) => C(e.currentTarget.value)), (t[16] = C), (t[17] = a));
    let o;
    t[18] !== A || t[19] !== S
      ? ((o = (e) => {
          if (e.nativeEvent.isComposing || e.keyCode === 229) {
            e.key === `Enter` && e.preventDefault();
            return;
          }
          e.key === `Escape` && S != null && !A
            ? (e.preventDefault(), e.stopPropagation(), S())
            : e.key === `Enter` && !e.shiftKey && (e.preventDefault(), e.currentTarget.form?.requestSubmit());
        }),
        (t[18] = A),
        (t[19] = S),
        (t[20] = o))
      : (o = t[20]);
    let s;
    t[21] !== r ||
    t[22] !== i ||
    t[23] !== O ||
    t[24] !== A ||
    t[25] !== _ ||
    t[26] !== x ||
    t[27] !== T ||
    t[28] !== a ||
    t[29] !== o ||
    t[30] !== D
      ? ((s = {
          "aria-describedby": r,
          "aria-label": i,
          autoFocus: O,
          disabled: A,
          maxLength: _,
          name: x,
          placeholder: T,
          value: D,
          onChange: a,
          onKeyDown: o,
        }),
        (t[21] = r),
        (t[22] = i),
        (t[23] = O),
        (t[24] = A),
        (t[25] = _),
        (t[26] = x),
        (t[27] = T),
        (t[28] = a),
        (t[29] = o),
        (t[30] = D),
        (t[31] = s))
      : (s = t[31]);
    let c = s;
    ((L = M
      ? (0, y.jsx)(`textarea`, {
          ...c,
          className: n(
            e,
            `max-h-48 resize-none overflow-y-auto border-0 bg-transparent outline-none placeholder:text-tertiary`,
            m != null && `block`,
            I && `field-sizing-content`,
            I && `self-center`,
          ),
          rows: I ? 1 : 3,
        })
      : (0, y.jsx)(`input`, {
          ...c,
          className: n(e, `h-7 border-0 bg-transparent outline-none placeholder:text-tertiary`),
        })),
      (t[2] = r),
      (t[3] = i),
      (t[4] = O),
      (t[5] = A),
      (t[6] = m),
      (t[7] = I),
      (t[8] = _),
      (t[9] = M),
      (t[10] = x),
      (t[11] = S),
      (t[12] = C),
      (t[13] = T),
      (t[14] = D),
      (t[15] = L));
  } else L = t[15];
  let R = L,
    z;
  t[32] !== F || t[33] !== w || t[34] !== D
    ? ((z = (e) => {
        (e.preventDefault(), F && w(D.trim()));
      }),
      (t[32] = F),
      (t[33] = w),
      (t[34] = D),
      (t[35] = z))
    : (z = t[35]);
  let B;
  t[36] !== a ||
  t[37] !== F ||
  t[38] !== m ||
  t[39] !== P ||
  t[40] !== R ||
  t[41] !== I ||
  t[42] !== M ||
  t[43] !== E
    ? ((B =
        m == null
          ? (0, y.jsxs)(`div`, {
              className: n(`flex min-w-0 gap-2 py-2 pe-2`, I ? `items-end ps-3` : `items-center ps-4`),
              children: [
                R,
                (I ? P : !M && F)
                  ? (0, y.jsx)(s, {
                      "aria-label": E,
                      color: `composerPrimary`,
                      disabled: !F,
                      size: `composerSm`,
                      type: `submit`,
                      uniform: !0,
                      children: (0, y.jsx)(l, {}),
                    })
                  : null,
              ],
            })
          : (0, y.jsx)(g, {
              authorAvatar: a,
              disabled: !F,
              layout: m === `comment` ? `card` : `inline`,
              showSubmit: P,
              submitLabel: E,
              submitType: `submit`,
              children: R,
            })),
      (t[36] = a),
      (t[37] = F),
      (t[38] = m),
      (t[39] = P),
      (t[40] = R),
      (t[41] = I),
      (t[42] = M),
      (t[43] = E),
      (t[44] = B))
    : (B = t[44]);
  let V;
  t[45] !== F || t[46] !== A || t[47] !== I || t[48] !== M || t[49] !== S || t[50] !== E
    ? ((V =
        M && !I
          ? (0, y.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2 px-2 pb-2`,
              children: [
                S == null
                  ? null
                  : (0, y.jsx)(s, {
                      color: `outline`,
                      disabled: A,
                      size: `composer`,
                      onClick: S,
                      children: (0, y.jsx)(u, {
                        id: `annotationCommentComposer.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel action for a plain-text annotation comment`,
                      }),
                    }),
                (0, y.jsx)(s, {
                  "aria-label": E,
                  color: `composerPrimary`,
                  disabled: !F,
                  size: `composer`,
                  type: `submit`,
                  uniform: !0,
                  children: (0, y.jsx)(l, {}),
                }),
              ],
            })
          : null),
      (t[45] = F),
      (t[46] = A),
      (t[47] = I),
      (t[48] = M),
      (t[49] = S),
      (t[50] = E),
      (t[51] = V))
    : (V = t[51]);
  let H;
  t[52] !== V || t[53] !== z || t[54] !== B
    ? ((H = (0, y.jsxs)(`form`, { className: `flex flex-col`, onSubmit: z, children: [B, V] })),
      (t[52] = V),
      (t[53] = z),
      (t[54] = B),
      (t[55] = H))
    : (H = t[55]);
  let U = H,
    W;
  return (
    t[56] !== j || t[57] !== U
      ? ((W = j ? U : (0, y.jsx)(d, { children: U })), (t[56] = j), (t[57] = U), (t[58] = W))
      : (W = t[58]),
    W
  );
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = i()), r(), o(), c(), a(), m(), f(), h(), (y = t()));
  }))();
}
export { b as n, _ as t };
//# sourceMappingURL=composer-c2f086c865cf.js.map
