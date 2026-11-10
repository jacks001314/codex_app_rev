import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  PBt as r,
  bB as i,
  hit as a,
  oit as o,
  sct as s,
  vB as c,
  xut as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { Man as u, Mbt as d, Nan as ee, Nbt as f, jan as p, jbt as te } from "./app-initial-ad16eaadf81f.js";
import { l as m, t as h } from "./theme-font-family-483011cfdef9.js";
import { n as ne, t as g } from "./theme-font-face-loader-3c3ae53e2c00.js";
import {
  a as _,
  c as v,
  d as y,
  i as b,
  l as x,
  n as S,
  o as C,
  r as re,
  s as ie,
  u as w,
} from "./xterm-display-helpers-140c0bf915f8.js";
import { i as ae, n as T, o as E, r as D, s as O } from "./xterm-window-zoom-95a22ae58ea4.js";
import "./terminal-panel-c0ca9a862516.js";
function k(e) {
  let t = (0, A.c)(38),
    { output: n, onRenderedOutputReady: r, hostId: o } = e,
    s = i(),
    c = u(),
    f = ee(c),
    p = a(l.lightChromeTheme),
    m = a(l.darkChromeTheme),
    g = a(l.codeFontSize),
    _,
    v,
    y;
  t[0] !== m || t[1] !== p || t[2] !== f
    ? ((_ = f === `light` ? d(p, `light`) : d(m, `dark`)),
      (v = _.fonts.codeFace != null && h(_.fonts.code, _.fonts.codeFace) ? _.fonts.codeFace : void 0),
      (y = re(_.fonts)),
      (t[0] = m),
      (t[1] = p),
      (t[2] = f),
      (t[3] = _),
      (t[4] = v),
      (t[5] = y))
    : ((_ = t[3]), (v = t[4]), (y = t[5]));
  let w = y,
    E = (0, P.useRef)(null),
    D = (0, P.useRef)(null),
    O = (0, P.useRef)(null),
    k = (0, P.useRef)(null),
    I = (0, P.useRef)(``),
    L = (0, P.useRef)(s),
    R;
  t[6] === r
    ? (R = t[7])
    : ((R = (e) => {
        if (r == null) return;
        let t = e,
          n = () => (Array.isArray(t) ? t : ie(t));
        return (
          r(n),
          () => {
            t = n();
          }
        );
      }),
      (t[6] = r),
      (t[7] = R));
  let z = (0, P.useEffectEvent)(R),
    B,
    V;
  (t[8] === s
    ? ((B = t[9]), (V = t[10]))
    : ((B = () => {
        L.current = s;
      }),
      (V = [s]),
      (t[8] = s),
      (t[9] = B),
      (t[10] = V)),
    (0, P.useLayoutEffect)(B, V));
  let H, U;
  (t[11] !== _ || t[12] !== f
    ? ((H = () => {
        let e = E.current;
        e != null && te(e, _, f);
      }),
      (U = [_, f]),
      (t[11] = _),
      (t[12] = f),
      (t[13] = H),
      (t[14] = U))
    : ((H = t[13]), (U = t[14])),
    (0, P.useLayoutEffect)(H, U));
  let W;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = () => {
        let e = O.current,
          t = E.current;
        e != null && t != null && ((e.options.theme = x(t)), e.rows > 0 && e.refresh(0, e.rows - 1));
      }),
      (t[15] = W))
    : (W = t[15]);
  let G;
  (t[16] !== _ || t[17] !== f ? ((G = [_, f]), (t[16] = _), (t[17] = f), (t[18] = G)) : (G = t[18]),
    (0, P.useEffect)(W, G));
  let K, q;
  (t[19] !== w || t[20] !== g || t[21] !== v
    ? ((q = () => {
        let e = O.current;
        if (e == null) return;
        let t = !1,
          n = null;
        return (
          (async () => {
            (v != null && (await ne(v)),
              await S(w, g),
              !t &&
                ((e.options.fontFamily = w),
                (e.options.fontSize = g),
                (n = requestAnimationFrame(() => {
                  k.current?.fit();
                }))));
          })(),
          () => {
            ((t = !0), n != null && cancelAnimationFrame(n));
          }
        );
      }),
      (K = [w, g, v]),
      (t[19] = w),
      (t[20] = g),
      (t[21] = v),
      (t[22] = K),
      (t[23] = q))
    : ((K = t[22]), (q = t[23])),
    (0, P.useEffect)(q, K));
  let J;
  t[24] !== w || t[25] !== g || t[26] !== o || t[27] !== z
    ? ((J = () => {
        let e = D.current,
          t = E.current;
        if (e == null || t == null) return;
        let n = !1,
          r = null,
          i = (e, t) => {
            ae(e, t, o ?? void 0);
          },
          a = new N.Terminal({
            allowProposedApi: !0,
            allowTransparency: !0,
            cursorStyle: `bar`,
            disableStdin: !0,
            fontSize: g,
            fontFamily: w,
            letterSpacing: 0,
            lineHeight: 1.2,
            linkHandler: { activate: i },
            theme: x(t),
          }),
          s = new j.FitAddon(),
          c = () => {
            r ??= requestAnimationFrame(() => {
              ((r = null), a.scrollToBottom());
            });
          };
        ((O.current = a), (k.current = s), a.loadAddon(s), a.loadAddon(new M.WebLinksAddon(i)), a.open(e));
        let l = T(a, () => L.current);
        (s.fit(), I.current.length > 0 && (a.write(b(I.current)), c()));
        let u = new ResizeObserver(() => {
          n || s.fit();
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
      (t[24] = w),
      (t[25] = g),
      (t[26] = o),
      (t[27] = z),
      (t[28] = J))
    : (J = t[28]);
  let Y;
  (t[29] !== w || t[30] !== g || t[31] !== o
    ? ((Y = [w, g, o]), (t[29] = w), (t[30] = g), (t[31] = o), (t[32] = Y))
    : (Y = t[32]),
    (0, P.useEffect)(J, Y));
  let X, Z;
  (t[33] === n
    ? ((X = t[34]), (Z = t[35]))
    : ((X = () => {
        let e = O.current;
        if (e == null) {
          I.current = n;
          return;
        }
        let t = I.current,
          r = C(e);
        if (n.startsWith(t)) {
          let r = n.slice(t.length);
          r.length > 0 && e.write(b(r));
        } else (e.reset(), n.length > 0 && e.write(b(n)));
        if (((I.current = n), !r)) return;
        let i = requestAnimationFrame(() => {
          e.scrollToBottom();
        });
        return () => {
          cancelAnimationFrame(i);
        };
      }),
      (Z = [n]),
      (t[33] = n),
      (t[34] = X),
      (t[35] = Z)),
    (0, P.useEffect)(X, Z));
  let Q;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = {
        backgroundColor: `var(--color-codex-terminal-background)`,
        color: `var(--color-codex-terminal-foreground)`,
      }),
      (t[36] = Q))
    : (Q = t[36]);
  let $;
  return (
    t[37] === Symbol.for(`react.memo_cache_sentinel`)
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
        (t[37] = $))
      : ($ = t[37]),
    $
  );
}
var A, j, M, N, P, F;
function I() {
  return (I = e(() => {
    ((A = r()),
      (j = O()),
      (M = E()),
      (N = y()),
      s(),
      (P = t()),
      g(),
      m(),
      c(),
      o(),
      f(),
      p(),
      D(),
      w(),
      v(),
      _(),
      (F = n()));
  }))();
}
I();
export { k as XtermOutputPanel };
//# sourceMappingURL=xterm-output-panel-5d5723ca4711.js.map
