import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  EPt as n,
  QIt as r,
  RLt as i,
  TLt as a,
  Xot as o,
  Yot as s,
  cLt as c,
  fLt as l,
  pIt as u,
  pLt as d,
  vzt as f,
  xMt as p,
} from "./app-shared-bbfeca5e5737.js";
import { A as m, D as h, k as g, n as _, t as v } from "./src-2f77e687e887.js";
var y, b;
function x() {
  return (x = e(() => {
    (n(),
      (y = r(() =>
        d({ ty: i().optional(), sc: i().optional(), layers: u(y).nullish() })
          .loose()
          .refine(
            (e) =>
              e.ty !== 1 || (typeof e.sc == `string` && e.sc.length === 7 && /^#[0-9a-f]{6}$/i.test(e.sc)),
            { path: [`sc`], message: `Lottie solid fills must be literal six-digit hex colors` },
          ),
      )),
      (b = d({
        v: a(),
        fr: l().positive(),
        ip: l(),
        op: l(),
        w: l().positive(),
        h: l().positive(),
        layers: u(y),
        assets: u(
          d({
            p: a()
              .regex(/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+=*$/)
              .optional(),
            u: t(``).optional(),
            layers: u(y).nullish(),
          }).loose(),
        ).optional(),
        chars: u(
          d({
            data: d({ layers: u(y).nullish() })
              .loose()
              .nullish(),
          }).loose(),
        ).optional(),
        fonts: c().optional(),
        segments: c().optional(),
      }).loose()));
  }))();
}
function S(e) {
  let t = (0, C.c)(11),
    { animationData: n, darkModeOverride: r, isPlaying: i, onReady: a, onError: o, hostProps: s } = e,
    c;
  t[0] === n
    ? (c = t[1])
    : ((c = (0, w.makeAssetFromBytes)(new TextEncoder().encode(JSON.stringify(n)))), (t[0] = n), (t[1] = c));
  let l = c,
    u;
  t[2] === o
    ? (u = t[3])
    : ((u = (e) => {
        e || o();
      }),
      (t[2] = o),
      (t[3] = u));
  let d = u,
    f;
  return (
    t[4] !== l || t[5] !== r || t[6] !== s || t[7] !== i || t[8] !== d || t[9] !== a
      ? ((f = (0, D.jsx)(j, {
          asset: l,
          context: k,
          darkModeOverride: r,
          hostProps: s,
          isPlaying: i,
          onAssetLoad: d,
          onReady: a,
        })),
        (t[4] = l),
        (t[5] = r),
        (t[6] = s),
        (t[7] = i),
        (t[8] = d),
        (t[9] = a),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
var C, w, T, E, D, O, k, A, j;
function M() {
  return (M = e(() => {
    ((C = f()),
      (w = m()),
      (T = g()),
      (E = h()),
      v(),
      (D = p()),
      (O = E.jsx.makeNodePrototype(`animatedimage`, void 0, void 0)),
      (k = {}),
      (A = class extends T.Component {
        onRender() {
          (E.jsx.beginRender(O),
            E.jsx.setAttributes({
              accessibilityNavigation: `ignored`,
              advanceRate: +!!this.viewModel.isPlaying,
              height: `100%`,
              loop: !0,
              objectFit: `contain`,
              onAssetLoad: this.viewModel.onAssetLoad,
              onImageDecoded: this.viewModel.onReady,
              src: this.viewModel.asset,
              width: `100%`,
            }),
            E.jsx.endRender());
        }
      }),
      (j = _(A)));
  }))();
}
function N(e) {
  let t = (0, P.c)(9),
    { animationUrl: n, isDark: r, isPlaying: i, onError: a, onReady: s } = e,
    c;
  t[0] === n
    ? (c = t[1])
    : ((c = {
        queryKey: [`homepage-takeover-background-artwork`, n],
        queryFn: async (e) => {
          let { signal: t } = e,
            r = await fetch(n, {
              credentials: `omit`,
              referrerPolicy: `no-referrer`,
              redirect: `error`,
              signal: AbortSignal.any([t, AbortSignal.timeout(5e3)]),
            });
          if (!r.ok) throw Error(`Homepage takeover animation request failed`);
          return b.parse(await r.json());
        },
        staleTime: 1 / 0,
        retry: !1,
        refetchOnWindowFocus: !1,
      }),
      (t[0] = n),
      (t[1] = c));
  let { data: l } = o(c);
  if (l == null) return null;
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { className: `absolute inset-0 size-full` }), (t[2] = u))
    : (u = t[2]);
  let d;
  return (
    t[3] !== l || t[4] !== r || t[5] !== i || t[6] !== a || t[7] !== s
      ? ((d = (0, F.jsx)(S, {
          animationData: l,
          darkModeOverride: r,
          hostProps: u,
          isPlaying: i,
          onError: a,
          onReady: s,
        })),
        (t[3] = l),
        (t[4] = r),
        (t[5] = i),
        (t[6] = a),
        (t[7] = s),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = f()), s(), x(), M(), (F = p()));
  }))();
}
I();
export { N as HomepageTakeoverBackgroundArtworkPlayer };
//# sourceMappingURL=background-artwork-player-5ef0f5a59156.js.map
