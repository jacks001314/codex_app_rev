import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Kj as r,
  LNt as i,
  MNt as a,
  NNt as o,
  PBt as s,
  Qst as c,
  XOt as l,
  ZSt as u,
  iCt as d,
  okt as f,
  qj as p,
  tkt as ee,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B7n as te,
  G7n as m,
  T4t as h,
  V7n as g,
  W7n as _,
  jA as v,
  kA as ne,
  w4t as y,
} from "./app-initial-ad16eaadf81f.js";
var b, x;
function S() {
  return (S = e(() => {
    ((b = `_input_1pyfh_2`), (x = { input: b }));
  }))();
}
function C(e) {
  let n = (0, E.c)(49),
    {
      children: i,
      label: a,
      submitLabel: o,
      submitIcon: s,
      multiline: l,
      embedded: u,
      generating: p,
      canSubmit: m,
      canCancel: g,
      status: v,
      hint: y,
      leadingAction: b,
      onSubmit: S,
      onCancel: C,
      onBlurOutside: O,
    } = e,
    k = l !== void 0 && l,
    A = u !== void 0 && u,
    j = g === void 0 || g,
    M = t(c),
    N = f(),
    P = d(h),
    F = p || void 0,
    I;
  n[0] !== p || n[1] !== O
    ? ((I = (e) => {
        !p && !e.currentTarget.contains(e.relatedTarget) && O?.();
      }),
      (n[0] = p),
      (n[1] = O),
      (n[2] = I))
    : (I = n[2]);
  let L;
  n[3] !== j || n[4] !== C
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
      (n[3] = j),
      (n[4] = C),
      (n[5] = L))
    : (L = n[5]);
  let R;
  n[6] !== m || n[7] !== p || n[8] !== S || n[9] !== M
    ? ((R = (e) => {
        (e.preventDefault(), !p && m && !M.get(h) && S(e.currentTarget));
      }),
      (n[6] = m),
      (n[7] = p),
      (n[8] = S),
      (n[9] = M),
      (n[10] = R))
    : (R = n[10]);
  let z = p ? `sr-only` : void 0,
    B;
  n[11] !== i || n[12] !== P || n[13] !== z
    ? ((B = (0, D.jsx)(`div`, { className: z, inert: P, children: i })),
      (n[11] = i),
      (n[12] = P),
      (n[13] = z),
      (n[14] = B))
    : (B = n[14]);
  let V;
  n[15] !== p || n[16] !== v
    ? ((V =
        p &&
        (0, D.jsx)(ne, {
          className: `block max-w-full truncate text-sm select-none`,
          role: `status`,
          children:
            v ??
            (0, D.jsx)(ee, {
              id: `codex.inlineComposer.working`,
              defaultMessage: `Working…`,
              description: `Fallback activity status while an inline composer generates content before a short progress summary is available`,
            }),
        })),
      (n[15] = p),
      (n[16] = v),
      (n[17] = V))
    : (V = n[17]);
  let H;
  n[18] !== V || n[19] !== B
    ? ((H = (0, D.jsxs)(`div`, { className: x.input, children: [B, V] })),
      (n[18] = V),
      (n[19] = B),
      (n[20] = H))
    : (H = n[20]);
  let U = p ? `stop` : `submit`,
    W;
  n[21] !== p || n[22] !== N || n[23] !== o
    ? ((W = p
        ? N.formatMessage({
            id: `codex.inlineComposer.stop`,
            defaultMessage: `Stop generation`,
            description: `Accessible label for stopping content generation in an inline composer`,
          })
        : o),
      (n[21] = p),
      (n[22] = N),
      (n[23] = o),
      (n[24] = W))
    : (W = n[24]);
  let G = p ? !j : P || !m,
    K = p ? `button` : `submit`,
    q = p ? _ : r,
    J = p ? void 0 : s,
    Y = p ? C : void 0,
    X;
  n[25] !== U || n[26] !== W || n[27] !== G || n[28] !== K || n[29] !== q || n[30] !== J || n[31] !== Y
    ? ((X = (0, D.jsx)(te, { ariaLabel: W, disabled: G, type: K, Icon: q, iconSource: J, onClick: Y }, U)),
      (n[25] = U),
      (n[26] = W),
      (n[27] = G),
      (n[28] = K),
      (n[29] = q),
      (n[30] = J),
      (n[31] = Y),
      (n[32] = X))
    : (X = n[32]);
  let Z;
  n[33] !== A || n[34] !== b || n[35] !== k || n[36] !== H || n[37] !== X
    ? ((Z = (0, D.jsxs)(w, { multiline: k, embedded: A, leadingAction: b, children: [H, X] })),
      (n[33] = A),
      (n[34] = b),
      (n[35] = k),
      (n[36] = H),
      (n[37] = X),
      (n[38] = Z))
    : (Z = n[38]);
  let Q;
  n[39] === y ? (Q = n[40]) : ((Q = y != null && (0, D.jsx)(T, { children: y })), (n[39] = y), (n[40] = Q));
  let $;
  return (
    n[41] !== a || n[42] !== Z || n[43] !== Q || n[44] !== F || n[45] !== I || n[46] !== L || n[47] !== R
      ? (($ = (0, D.jsxs)(`form`, {
          className: `pointer-events-auto w-full min-w-0 font-sans font-normal not-italic outline-none`,
          "aria-label": a,
          "aria-busy": F,
          "data-inline-composer": !0,
          tabIndex: -1,
          onBlur: I,
          onKeyDown: L,
          onSubmit: R,
          children: [Z, Q],
        })),
        (n[41] = a),
        (n[42] = Z),
        (n[43] = Q),
        (n[44] = F),
        (n[45] = I),
        (n[46] = L),
        (n[47] = R),
        (n[48] = $))
      : ($ = n[48]),
    $
  );
}
function w(e) {
  let t = (0, E.c)(8),
    { children: n, multiline: r, embedded: i, leadingAction: o } = e,
    s = r !== void 0 && r,
    c = i !== void 0 && i,
    l = !c && `border border-default bg-surface-elevated-secondary p-1 shadow-lg`,
    u = !c && (s ? `rounded-token-composer-single-line` : `rounded-full`),
    d = o == null && (c ? `ps-2.5` : `ps-3.5`),
    f;
  t[0] !== l || t[1] !== u || t[2] !== d
    ? ((f = a(`flex max-w-full items-center gap-1.5`, l, u, d)),
      (t[0] = l),
      (t[1] = u),
      (t[2] = d),
      (t[3] = f))
    : (f = t[3]);
  let p;
  return (
    t[4] !== n || t[5] !== o || t[6] !== f
      ? ((p = (0, D.jsxs)(`div`, { className: f, children: [o, n] })),
        (t[4] = n),
        (t[5] = o),
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
    ((E = s()), o(), u(), l(), y(), g(), p(), m(), v(), n(), S(), (D = i()));
  }))();
}
export { O as i, T as n, w as r, C as t };
//# sourceMappingURL=inline-composer-a67c507967ae.js.map
