import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  TJ as r,
  _Mt as i,
  gMt as a,
  jDt as o,
  t3 as s,
  vB as c,
  vzt as l,
  xMt as u,
} from "./app-shared-bbfeca5e5737.js";
import { Au as d, Du as f, Tu as p, wu as m } from "./app-primary-fe8a450b3b04.js";
import { n as h, t as g } from "./row-cb5037d08176.js";
function _(e) {
  let r = (0, v.c)(59),
    {
      ariaDescribedBy: i,
      ariaLabel: o,
      authorAvatar: s,
      autoFocus: l,
      compact: u,
      disabled: d,
      discussion: p,
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
    O = l === void 0 || l,
    k = u !== void 0 && u,
    A = d !== void 0 && d,
    j = h !== void 0 && h,
    M = b === void 0 || b,
    N;
  r[0] === D ? (N = r[1]) : ((N = D.trim()), (r[0] = D), (r[1] = N));
  let P = N !== ``,
    F = !A && P,
    I = k || p != null,
    L;
  if (
    r[2] !== i ||
    r[3] !== o ||
    r[4] !== O ||
    r[5] !== A ||
    r[6] !== p ||
    r[7] !== I ||
    r[8] !== _ ||
    r[9] !== M ||
    r[10] !== x ||
    r[11] !== S ||
    r[12] !== C ||
    r[13] !== T ||
    r[14] !== D
  ) {
    let e = I
        ? a(`min-h-0 w-full p-0 font-sans text-sm text-default`, p == null ? `leading-normal` : `leading-5`)
        : f,
      t;
    r[16] === C ? (t = r[17]) : ((t = (e) => C(e.currentTarget.value)), (r[16] = C), (r[17] = t));
    let n;
    r[18] !== A || r[19] !== S
      ? ((n = (e) => {
          if (e.nativeEvent.isComposing || e.keyCode === 229) {
            e.key === `Enter` && e.preventDefault();
            return;
          }
          e.key === `Escape` && S != null && !A
            ? (e.preventDefault(), e.stopPropagation(), S())
            : e.key === `Enter` && !e.shiftKey && (e.preventDefault(), e.currentTarget.form?.requestSubmit());
        }),
        (r[18] = A),
        (r[19] = S),
        (r[20] = n))
      : (n = r[20]);
    let s;
    r[21] !== i ||
    r[22] !== o ||
    r[23] !== O ||
    r[24] !== A ||
    r[25] !== _ ||
    r[26] !== x ||
    r[27] !== T ||
    r[28] !== t ||
    r[29] !== n ||
    r[30] !== D
      ? ((s = {
          "aria-describedby": i,
          "aria-label": o,
          autoFocus: O,
          disabled: A,
          maxLength: _,
          name: x,
          placeholder: T,
          value: D,
          onChange: t,
          onKeyDown: n,
        }),
        (r[21] = i),
        (r[22] = o),
        (r[23] = O),
        (r[24] = A),
        (r[25] = _),
        (r[26] = x),
        (r[27] = T),
        (r[28] = t),
        (r[29] = n),
        (r[30] = D),
        (r[31] = s))
      : (s = r[31]);
    let c = s;
    ((L = M
      ? (0, y.jsx)(`textarea`, {
          ...c,
          className: a(
            e,
            `max-h-48 resize-none overflow-y-auto border-0 bg-transparent outline-none placeholder:text-tertiary`,
            p != null && `block`,
            I && `field-sizing-content`,
            I && `self-center`,
          ),
          rows: I ? 1 : 3,
        })
      : (0, y.jsx)(`input`, {
          ...c,
          className: a(e, `h-7 border-0 bg-transparent outline-none placeholder:text-tertiary`),
        })),
      (r[2] = i),
      (r[3] = o),
      (r[4] = O),
      (r[5] = A),
      (r[6] = p),
      (r[7] = I),
      (r[8] = _),
      (r[9] = M),
      (r[10] = x),
      (r[11] = S),
      (r[12] = C),
      (r[13] = T),
      (r[14] = D),
      (r[15] = L));
  } else L = r[15];
  let R = L,
    z;
  r[32] !== F || r[33] !== w || r[34] !== D
    ? ((z = (e) => {
        (e.preventDefault(), F && w(D.trim()));
      }),
      (r[32] = F),
      (r[33] = w),
      (r[34] = D),
      (r[35] = z))
    : (z = r[35]);
  let B;
  r[36] !== s ||
  r[37] !== F ||
  r[38] !== p ||
  r[39] !== P ||
  r[40] !== R ||
  r[41] !== I ||
  r[42] !== M ||
  r[43] !== E
    ? ((B =
        p == null
          ? (0, y.jsxs)(`div`, {
              className: a(`flex min-w-0 gap-2 py-2 pe-2`, I ? `items-end ps-3` : `items-center ps-4`),
              children: [
                R,
                (I ? P : !M && F)
                  ? (0, y.jsx)(t, {
                      "aria-label": E,
                      color: `composerPrimary`,
                      disabled: !F,
                      size: `composerSm`,
                      type: `submit`,
                      uniform: !0,
                      children: (0, y.jsx)(c, {}),
                    })
                  : null,
              ],
            })
          : (0, y.jsx)(g, {
              authorAvatar: s,
              disabled: !F,
              layout: p === `comment` ? `card` : `inline`,
              showSubmit: P,
              submitLabel: E,
              submitType: `submit`,
              children: R,
            })),
      (r[36] = s),
      (r[37] = F),
      (r[38] = p),
      (r[39] = P),
      (r[40] = R),
      (r[41] = I),
      (r[42] = M),
      (r[43] = E),
      (r[44] = B))
    : (B = r[44]);
  let V;
  r[45] !== F || r[46] !== A || r[47] !== I || r[48] !== M || r[49] !== S || r[50] !== E
    ? ((V =
        M && !I
          ? (0, y.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2 px-2 pb-2`,
              children: [
                S == null
                  ? null
                  : (0, y.jsx)(t, {
                      color: `outline`,
                      disabled: A,
                      size: `composer`,
                      onClick: S,
                      children: (0, y.jsx)(n, {
                        id: `annotationCommentComposer.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel action for a plain-text annotation comment`,
                      }),
                    }),
                (0, y.jsx)(t, {
                  "aria-label": E,
                  color: `composerPrimary`,
                  disabled: !F,
                  size: `composer`,
                  type: `submit`,
                  uniform: !0,
                  children: (0, y.jsx)(c, {}),
                }),
              ],
            })
          : null),
      (r[45] = F),
      (r[46] = A),
      (r[47] = I),
      (r[48] = M),
      (r[49] = S),
      (r[50] = E),
      (r[51] = V))
    : (V = r[51]);
  let H;
  r[52] !== V || r[53] !== z || r[54] !== B
    ? ((H = (0, y.jsxs)(`form`, { className: `flex flex-col`, onSubmit: z, children: [B, V] })),
      (r[52] = V),
      (r[53] = z),
      (r[54] = B),
      (r[55] = H))
    : (H = r[55]);
  let U = H,
    W;
  return (
    r[56] !== j || r[57] !== U
      ? ((W = j ? U : (0, y.jsx)(m, { children: U })), (r[56] = j), (r[57] = U), (r[58] = W))
      : (W = r[58]),
    W
  );
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = l()), i(), o(), s(), r(), d(), p(), h(), (y = u()));
  }))();
}
export { b as n, _ as t };
//# sourceMappingURL=composer-1bf0334fecde.js.map
