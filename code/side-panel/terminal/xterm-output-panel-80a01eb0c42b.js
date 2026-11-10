import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  B6t as r,
  Bx as i,
  Gz as a,
  Hx as o,
  QKt as s,
  Uz as c,
  Vx as l,
  W8t as u,
  Wz as d,
  _zt as f,
  hmn as p,
  kmn as m,
  qKt as h,
  yzt as g,
} from "./app-initial-f094ef01c64d.js";
import { s as _, t as v } from "./theme-font-family-550a581dca1f.js";
import { n as y, t as b } from "./theme-font-face-loader-1d47d562eb8e.js";
import {
  _ as x,
  a as ee,
  c as te,
  d as S,
  f as C,
  g as w,
  h as T,
  i as E,
  l as ne,
  m as re,
  n as ie,
  o as D,
  p as O,
  s as k,
  t as A,
  u as j,
  v as M,
  y as N,
} from "./xterm-window-zoom-98caf71e2690.js";
import { t as P } from "./terminal-panel-ded4b9a894ab.js";
function F(e) {
  let t = (0, I.c)(36),
    { output: n, onRenderedOutputReady: r } = e,
    i = g(),
    a = o(l()),
    f = s(u.lightChromeTheme),
    p = s(u.darkChromeTheme),
    m = s(u.codeFontSize),
    h,
    _,
    b;
  t[0] !== p || t[1] !== f || t[2] !== a
    ? ((h = a === `light` ? d(f, `light`) : d(p, `dark`)),
      (_ =
        h.fonts.codeFace != null && v(h.fonts.code, h.fonts.codeFace) ? h.fonts.codeFace : void 0),
      (b = ee(h.fonts)),
      (t[0] = p),
      (t[1] = f),
      (t[2] = a),
      (t[3] = h),
      (t[4] = _),
      (t[5] = b))
    : ((h = t[3]), (_ = t[4]), (b = t[5]));
  let x = b,
    C = (0, B.useRef)(null),
    w = (0, B.useRef)(null),
    O = (0, B.useRef)(null),
    k = (0, B.useRef)(null),
    A = (0, B.useRef)(``),
    j = (0, B.useRef)(i),
    M;
  t[6] === r
    ? (M = t[7])
    : ((M = (e) => {
        if (r == null) return;
        let t = e,
          n = () => (Array.isArray(t) ? t : ne(t));
        return (
          r(n),
          () => {
            t = n();
          }
        );
      }),
      (t[6] = r),
      (t[7] = M));
  let N = (0, B.useEffectEvent)(M),
    P,
    F;
  (t[8] === i
    ? ((P = t[9]), (F = t[10]))
    : ((P = () => {
        j.current = i;
      }),
      (F = [i]),
      (t[8] = i),
      (t[9] = P),
      (t[10] = F)),
    (0, B.useLayoutEffect)(P, F));
  let H, U;
  (t[11] !== h || t[12] !== a
    ? ((H = () => {
        let e = C.current;
        e != null && c(e, h, a);
      }),
      (U = [h, a]),
      (t[11] = h),
      (t[12] = a),
      (t[13] = H),
      (t[14] = U))
    : ((H = t[13]), (U = t[14])),
    (0, B.useLayoutEffect)(H, U));
  let W;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = () => {
        let e = O.current,
          t = C.current;
        e == null ||
          t == null ||
          ((e.options.theme = S(t)), e.rows > 0 && e.refresh(0, e.rows - 1));
      }),
      (t[15] = W))
    : (W = t[15]);
  let G;
  (t[16] !== h || t[17] !== a ? ((G = [h, a]), (t[16] = h), (t[17] = a), (t[18] = G)) : (G = t[18]),
    (0, B.useEffect)(W, G));
  let K, q;
  (t[19] !== x || t[20] !== m || t[21] !== _
    ? ((q = () => {
        let e = O.current;
        if (e == null) return;
        let t = !1,
          n = null;
        return (
          (async () => {
            (_ != null && (await y(_)),
              await E(x, m),
              !t &&
                ((e.options.fontFamily = x),
                (e.options.fontSize = m),
                (n = requestAnimationFrame(() => {
                  k.current?.fit();
                }))));
          })(),
          () => {
            ((t = !0), n != null && cancelAnimationFrame(n));
          }
        );
      }),
      (K = [x, m, _]),
      (t[19] = x),
      (t[20] = m),
      (t[21] = _),
      (t[22] = K),
      (t[23] = q))
    : ((K = t[22]), (q = t[23])),
    (0, B.useEffect)(q, K));
  let J;
  t[24] !== x || t[25] !== m || t[26] !== N
    ? ((J = () => {
        let e = w.current,
          t = C.current;
        if (e == null || t == null) return;
        let n = !1,
          r = null,
          i = new z.Terminal({
            allowProposedApi: !0,
            allowTransparency: !0,
            cursorStyle: `bar`,
            disableStdin: !0,
            fontSize: m,
            fontFamily: x,
            letterSpacing: 0,
            lineHeight: 1.2,
            linkHandler: T,
            theme: S(t),
          }),
          a = new L.FitAddon(),
          o = () => {
            r ??= requestAnimationFrame(() => {
              ((r = null), i.scrollToBottom());
            });
          };
        ((O.current = i),
          (k.current = a),
          i.loadAddon(a),
          i.loadAddon(new R.WebLinksAddon(re)),
          i.open(e));
        let s = ie(i, () => j.current);
        (a.fit(), A.current.length > 0 && (i.write(D(A.current)), o()));
        let c = new ResizeObserver(() => {
          n || a.fit();
        });
        c.observe(e);
        let l = N(i);
        return () => {
          (l?.(),
            (n = !0),
            r != null && (cancelAnimationFrame(r), (r = null)),
            c.disconnect(),
            (k.current = null),
            (O.current = null),
            s(),
            i.dispose());
        };
      }),
      (t[24] = x),
      (t[25] = m),
      (t[26] = N),
      (t[27] = J))
    : (J = t[27]);
  let Y;
  (t[28] !== x || t[29] !== m ? ((Y = [x, m]), (t[28] = x), (t[29] = m), (t[30] = Y)) : (Y = t[30]),
    (0, B.useEffect)(J, Y));
  let X, Z;
  (t[31] === n
    ? ((X = t[32]), (Z = t[33]))
    : ((X = () => {
        let e = O.current;
        if (e == null) {
          A.current = n;
          return;
        }
        let t = A.current,
          r = te(e);
        if (n.startsWith(t)) {
          let r = n.slice(t.length);
          r.length > 0 && e.write(D(r));
        } else (e.reset(), n.length > 0 && e.write(D(n)));
        if (((A.current = n), !r)) return;
        let i = requestAnimationFrame(() => {
          e.scrollToBottom();
        });
        return () => {
          cancelAnimationFrame(i);
        };
      }),
      (Z = [n]),
      (t[31] = n),
      (t[32] = X),
      (t[33] = Z)),
    (0, B.useEffect)(X, Z));
  let Q;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = {
        backgroundColor: `var(--color-codex-terminal-background)`,
        color: `var(--color-codex-terminal-foreground)`,
      }),
      (t[34] = Q))
    : (Q = t[34]);
  let $;
  return (
    t[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? (($ = (0, V.jsx)(`div`, {
          "data-codex-xterm": !0,
          ref: C,
          className: `relative flex h-full w-full flex-col app-theme`,
          style: Q,
          children: (0, V.jsx)(`div`, {
            className: `flex-1 overflow-hidden py-3 ps-3 tracking-normal`,
            children: (0, V.jsx)(`div`, { className: `h-full w-full overflow-hidden`, ref: w }),
          }),
        })),
        (t[35] = $))
      : ($ = t[35]),
    $
  );
}
var I, L, R, z, B, V;
e(() => {
  ((I = m()),
    (L = N()),
    (R = M()),
    (z = x()),
    r(),
    (B = t(n(), 1)),
    b(),
    _(),
    f(),
    h(),
    a(),
    i(),
    w(),
    O(),
    C(),
    j(),
    k(),
    A(),
    P(),
    (V = p()));
})();
export { F as XtermOutputPanel };
//# sourceMappingURL=xterm-output-panel-80a01eb0c42b.js.map
