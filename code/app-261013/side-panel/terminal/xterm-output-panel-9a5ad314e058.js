import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $nt as t,
  Cz as n,
  Tz as r,
  Wnt as i,
  _lt as a,
  rst as o,
  vzt as s,
  xMt as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import { byt as u, dnn as d, fnn as f, unn as p, xyt as m, yyt as h } from "./app-initial-5851df3f6cb1.js";
import { l as g, t as ee } from "./theme-font-family-483011cfdef9.js";
import { n as te, t as _ } from "./theme-font-face-loader-3c3ae53e2c00.js";
import {
  a as v,
  c as y,
  d as b,
  i as x,
  l as S,
  n as ne,
  o as re,
  r as ie,
  s as ae,
  u as C,
} from "./xterm-display-helpers-b3dbd848567f.js";
import { i as w, n as T, o as E, r as D, s as O } from "./xterm-window-zoom-6d4fd59e6177.js";
import "./terminal-panel-c0ca9a862516.js";
function k(e) {
  let n = (0, A.c)(38),
    { output: i, onRenderedOutputReady: o, hostId: s } = e,
    c = r(),
    l = d(),
    p = f(l),
    m = t(a.lightChromeTheme),
    g = t(a.darkChromeTheme),
    _ = t(a.codeFontSize),
    v,
    y,
    b;
  n[0] !== g || n[1] !== m || n[2] !== p
    ? ((v = p === `light` ? u(m, `light`) : u(g, `dark`)),
      (y = v.fonts.codeFace != null && ee(v.fonts.code, v.fonts.codeFace) ? v.fonts.codeFace : void 0),
      (b = ie(v.fonts)),
      (n[0] = g),
      (n[1] = m),
      (n[2] = p),
      (n[3] = v),
      (n[4] = y),
      (n[5] = b))
    : ((v = n[3]), (y = n[4]), (b = n[5]));
  let C = b,
    E = (0, P.useRef)(null),
    D = (0, P.useRef)(null),
    O = (0, P.useRef)(null),
    k = (0, P.useRef)(null),
    I = (0, P.useRef)(``),
    L = (0, P.useRef)(c),
    R;
  n[6] === o
    ? (R = n[7])
    : ((R = (e) => {
        if (o == null) return;
        let t = e,
          n = () => (Array.isArray(t) ? t : ae(t));
        return (
          o(n),
          () => {
            t = n();
          }
        );
      }),
      (n[6] = o),
      (n[7] = R));
  let z = (0, P.useEffectEvent)(R),
    B,
    V;
  (n[8] === c
    ? ((B = n[9]), (V = n[10]))
    : ((B = () => {
        L.current = c;
      }),
      (V = [c]),
      (n[8] = c),
      (n[9] = B),
      (n[10] = V)),
    (0, P.useLayoutEffect)(B, V));
  let H, U;
  (n[11] !== v || n[12] !== p
    ? ((H = () => {
        let e = E.current;
        e != null && h(e, v, p);
      }),
      (U = [v, p]),
      (n[11] = v),
      (n[12] = p),
      (n[13] = H),
      (n[14] = U))
    : ((H = n[13]), (U = n[14])),
    (0, P.useLayoutEffect)(H, U));
  let W;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = () => {
        let e = O.current,
          t = E.current;
        e != null && t != null && ((e.options.theme = S(t)), e.rows > 0 && e.refresh(0, e.rows - 1));
      }),
      (n[15] = W))
    : (W = n[15]);
  let G;
  (n[16] !== v || n[17] !== p ? ((G = [v, p]), (n[16] = v), (n[17] = p), (n[18] = G)) : (G = n[18]),
    (0, P.useEffect)(W, G));
  let K, q;
  (n[19] !== C || n[20] !== _ || n[21] !== y
    ? ((q = () => {
        let e = O.current;
        if (e == null) return;
        let t = !1,
          n = null;
        return (
          (async () => {
            (y != null && (await te(y)),
              await ne(C, _),
              !t &&
                ((e.options.fontFamily = C),
                (e.options.fontSize = _),
                (n = requestAnimationFrame(() => {
                  k.current?.fit();
                }))));
          })(),
          () => {
            ((t = !0), n != null && cancelAnimationFrame(n));
          }
        );
      }),
      (K = [C, _, y]),
      (n[19] = C),
      (n[20] = _),
      (n[21] = y),
      (n[22] = K),
      (n[23] = q))
    : ((K = n[22]), (q = n[23])),
    (0, P.useEffect)(q, K));
  let J;
  n[24] !== C || n[25] !== _ || n[26] !== s || n[27] !== z
    ? ((J = () => {
        let e = D.current,
          t = E.current;
        if (e == null || t == null) return;
        let n = !1,
          r = null,
          i = (e, t) => {
            w(e, t, s ?? void 0);
          },
          a = new N.Terminal({
            allowProposedApi: !0,
            allowTransparency: !0,
            cursorStyle: `bar`,
            disableStdin: !0,
            fontSize: _,
            fontFamily: C,
            letterSpacing: 0,
            lineHeight: 1.2,
            linkHandler: { activate: i },
            theme: S(t),
          }),
          o = new j.FitAddon(),
          c = () => {
            r ??= requestAnimationFrame(() => {
              ((r = null), a.scrollToBottom());
            });
          };
        ((O.current = a), (k.current = o), a.loadAddon(o), a.loadAddon(new M.WebLinksAddon(i)), a.open(e));
        let l = T(a, () => L.current);
        (o.fit(), I.current.length > 0 && (a.write(x(I.current)), c()));
        let u = new ResizeObserver(() => {
          n || o.fit();
        });
        u.observe(e);
        let d = z(a);
        return () => {
          (d?.(),
            (n = !0),
            r != null && (cancelAnimationFrame(r), (r = null)),
            u.disconnect(),
            (k.current = null),
            (O.current = null),
            l(),
            a.dispose());
        };
      }),
      (n[24] = C),
      (n[25] = _),
      (n[26] = s),
      (n[27] = z),
      (n[28] = J))
    : (J = n[28]);
  let Y;
  (n[29] !== C || n[30] !== _ || n[31] !== s
    ? ((Y = [C, _, s]), (n[29] = C), (n[30] = _), (n[31] = s), (n[32] = Y))
    : (Y = n[32]),
    (0, P.useEffect)(J, Y));
  let X, Z;
  (n[33] === i
    ? ((X = n[34]), (Z = n[35]))
    : ((X = () => {
        let e = O.current;
        if (e == null) {
          I.current = i;
          return;
        }
        let t = I.current,
          n = re(e);
        if (i.startsWith(t)) {
          let n = i.slice(t.length);
          n.length > 0 && e.write(x(n));
        } else (e.reset(), i.length > 0 && e.write(x(i)));
        if (((I.current = i), !n)) return;
        let r = requestAnimationFrame(() => {
          e.scrollToBottom();
        });
        return () => {
          cancelAnimationFrame(r);
        };
      }),
      (Z = [i]),
      (n[33] = i),
      (n[34] = X),
      (n[35] = Z)),
    (0, P.useEffect)(X, Z));
  let Q;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = {
        backgroundColor: `var(--color-codex-terminal-background)`,
        color: `var(--color-codex-terminal-foreground)`,
      }),
      (n[36] = Q))
    : (Q = n[36]);
  let $;
  return (
    n[37] === Symbol.for(`react.memo_cache_sentinel`)
      ? (($ = (0, F.jsx)(`div`, {
          "data-codex-xterm": !0,
          ref: E,
          className: `relative flex h-full w-full flex-col`,
          style: Q,
          children: (0, F.jsx)(`div`, {
            className: `flex-1 overflow-hidden py-3 ps-3 tracking-normal`,
            children: (0, F.jsx)(`div`, { className: `h-full w-full overflow-hidden`, ref: D }),
          }),
        })),
        (n[37] = $))
      : ($ = n[37]),
    $
  );
}
var A, j, M, N, P, F;
function I() {
  return (I = e(() => {
    ((A = s()),
      (j = O()),
      (M = E()),
      (N = b()),
      o(),
      (P = l()),
      _(),
      g(),
      n(),
      i(),
      m(),
      p(),
      D(),
      C(),
      y(),
      v(),
      (F = c()));
  }))();
}
I();
export { k as XtermOutputPanel };
//# sourceMappingURL=xterm-output-panel-9a5ad314e058.js.map
