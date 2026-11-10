import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  VDt as a,
  Vxt as o,
  _Mt as s,
  gMt as c,
  ij as l,
  jDt as u,
  rj as d,
  vzt as f,
  wot as p,
  xMt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  F8t as h,
  I8t as g,
  Yk as _,
  c6n as v,
  i6n as y,
  qk as ee,
  r6n as te,
  s6n as ne,
} from "./app-initial-5851df3f6cb1.js";
var b, x;
function S() {
  return (S = e(() => {
    ((b = `_input_14g4t_2`), (x = { input: b }));
  }))();
}
function C(e) {
  let i = (0, E.c)(49),
    {
      children: s,
      label: c,
      submitLabel: l,
      submitIcon: u,
      multiline: f,
      embedded: p,
      generating: m,
      canSubmit: h,
      canCancel: _,
      status: v,
      hint: y,
      leadingAction: b,
      onSubmit: S,
      onCancel: C,
      onBlurOutside: O,
    } = e,
    k = f !== void 0 && f,
    A = p !== void 0 && p,
    j = _ === void 0 || _,
    M = r(t),
    N = a(),
    P = o(g),
    F = m || void 0,
    I;
  i[0] !== m || i[1] !== O
    ? ((I = (e) => {
        !m && !e.currentTarget.contains(e.relatedTarget) && O?.();
      }),
      (i[0] = m),
      (i[1] = O),
      (i[2] = I))
    : (I = i[2]);
  let L;
  i[3] !== j || i[4] !== C
    ? ((L = (e) => {
        (e.stopPropagation(),
          !e.defaultPrevented &&
            (e.nativeEvent.isComposing || e.keyCode === 229
              ? e.key === `Enter` && e.preventDefault()
              : e.key === `Escape`
                ? (e.preventDefault(), j && C())
                : e.key === `Enter` &&
                  !e.shiftKey &&
                  e.target instanceof HTMLTextAreaElement &&
                  (e.preventDefault(), e.currentTarget.requestSubmit())));
      }),
      (i[3] = j),
      (i[4] = C),
      (i[5] = L))
    : (L = i[5]);
  let R;
  i[6] !== h || i[7] !== m || i[8] !== S || i[9] !== M
    ? ((R = (e) => {
        (e.preventDefault(), !m && h && !M.get(g) && S(e.currentTarget));
      }),
      (i[6] = h),
      (i[7] = m),
      (i[8] = S),
      (i[9] = M),
      (i[10] = R))
    : (R = i[10]);
  let z = m ? `sr-only` : void 0,
    B;
  i[11] !== s || i[12] !== P || i[13] !== z
    ? ((B = (0, D.jsx)(`div`, { className: z, inert: P, children: s })),
      (i[11] = s),
      (i[12] = P),
      (i[13] = z),
      (i[14] = B))
    : (B = i[14]);
  let V;
  i[15] !== m || i[16] !== v
    ? ((V =
        m &&
        (0, D.jsx)(ee, {
          className: `block max-w-full truncate text-sm select-none`,
          role: `status`,
          children:
            v ??
            (0, D.jsx)(n, {
              id: `codex.inlineComposer.working`,
              defaultMessage: `Working…`,
              description: `Fallback activity status while an inline composer generates content before a short progress summary is available`,
            }),
        })),
      (i[15] = m),
      (i[16] = v),
      (i[17] = V))
    : (V = i[17]);
  let H;
  i[18] !== V || i[19] !== B
    ? ((H = (0, D.jsxs)(`div`, { className: x.input, children: [B, V] })),
      (i[18] = V),
      (i[19] = B),
      (i[20] = H))
    : (H = i[20]);
  let U = m ? `stop` : `submit`,
    W;
  i[21] !== m || i[22] !== N || i[23] !== l
    ? ((W = m
        ? N.formatMessage({
            id: `codex.inlineComposer.stop`,
            defaultMessage: `Stop generation`,
            description: `Accessible label for stopping content generation in an inline composer`,
          })
        : l),
      (i[21] = m),
      (i[22] = N),
      (i[23] = l),
      (i[24] = W))
    : (W = i[24]);
  let G = m ? !j : P || !h,
    K = m ? `button` : `submit`,
    q = m ? ne : d,
    J = m ? void 0 : u,
    Y = m ? C : void 0,
    X;
  i[25] !== U || i[26] !== W || i[27] !== G || i[28] !== K || i[29] !== q || i[30] !== J || i[31] !== Y
    ? ((X = (0, D.jsx)(te, { ariaLabel: W, disabled: G, type: K, Icon: q, iconSource: J, onClick: Y }, U)),
      (i[25] = U),
      (i[26] = W),
      (i[27] = G),
      (i[28] = K),
      (i[29] = q),
      (i[30] = J),
      (i[31] = Y),
      (i[32] = X))
    : (X = i[32]);
  let Z;
  i[33] !== A || i[34] !== b || i[35] !== k || i[36] !== H || i[37] !== X
    ? ((Z = (0, D.jsxs)(w, { multiline: k, embedded: A, leadingAction: b, children: [H, X] })),
      (i[33] = A),
      (i[34] = b),
      (i[35] = k),
      (i[36] = H),
      (i[37] = X),
      (i[38] = Z))
    : (Z = i[38]);
  let Q;
  i[39] === y ? (Q = i[40]) : ((Q = y != null && (0, D.jsx)(T, { children: y })), (i[39] = y), (i[40] = Q));
  let $;
  return (
    i[41] !== c || i[42] !== Z || i[43] !== Q || i[44] !== F || i[45] !== I || i[46] !== L || i[47] !== R
      ? (($ = (0, D.jsxs)(`form`, {
          className: `pointer-events-auto w-full min-w-0 font-sans font-normal not-italic outline-none`,
          "aria-label": c,
          "aria-busy": F,
          "data-inline-composer": !0,
          tabIndex: -1,
          onBlur: I,
          onKeyDown: L,
          onSubmit: R,
          children: [Z, Q],
        })),
        (i[41] = c),
        (i[42] = Z),
        (i[43] = Q),
        (i[44] = F),
        (i[45] = I),
        (i[46] = L),
        (i[47] = R),
        (i[48] = $))
      : ($ = i[48]),
    $
  );
}
function w(e) {
  let t = (0, E.c)(8),
    { children: n, multiline: r, embedded: i, leadingAction: a } = e,
    o = r !== void 0 && r,
    s = i !== void 0 && i,
    l = !s && `border border-default bg-surface-elevated-secondary p-1 shadow-lg`,
    u = !s && (o ? `rounded-token-composer-single-line` : `rounded-full`),
    d = a == null && (s ? `ps-2.5` : `ps-3.5`),
    f;
  t[0] !== l || t[1] !== u || t[2] !== d
    ? ((f = c(`flex max-w-full items-center gap-1.5`, l, u, d)),
      (t[0] = l),
      (t[1] = u),
      (t[2] = d),
      (t[3] = f))
    : (f = t[3]);
  let p;
  return (
    t[4] !== n || t[5] !== a || t[6] !== f
      ? ((p = (0, D.jsxs)(`div`, { className: f, children: [a, n] })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = f),
        (t[7] = p))
      : (p = t[7]),
    p
  );
}
function T(e) {
  let t = (0, E.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, D.jsx)(`div`, {
          className: `mt-2 font-sans text-xs leading-4 font-normal text-tertiary not-italic select-none`,
          role: `status`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var E, D;
function O() {
  return (O = e(() => {
    ((E = f()), s(), i(), u(), h(), y(), l(), v(), _(), p(), S(), (D = m()));
  }))();
}
export { O as i, T as n, w as r, C as t };
//# sourceMappingURL=inline-composer-6cb337935d22.js.map
