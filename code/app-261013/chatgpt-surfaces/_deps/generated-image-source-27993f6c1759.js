import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, nst as n, tst as r, vzt as i, yzt as a, zxt as o } from "./app-shared-bbfeca5e5737.js";
import {
  $Gn as s,
  Hlr as c,
  Klr as l,
  QGn as u,
  Wlr as d,
  _8n as f,
  gAn as p,
  hAn as m,
  nKn as h,
  oFr as g,
  sFr as _,
  v8n as v,
  vlr as y,
  ylr as b,
} from "./app-initial-5851df3f6cb1.js";
function x(e) {
  let t = (0, S.c)(36),
    { src: r, conversationId: i, hostId: a, imageAssetResolver: u, shouldLoadFileDataUrl: d } = e,
    m = n(),
    g = o(f, i),
    v = a ?? g ?? `local`,
    b = _(v),
    x;
  t[0] === i
    ? (x = t[1])
    : ((x = i == null ? null : { kind: `app-server`, conversationId: i }), (t[0] = i), (t[1] = x));
  let w = o(p, x),
    T = w?.hostId === v ? w.environmentId : void 0,
    [E, D] = (0, C.useState)(null),
    O;
  t[2] === r ? (O = t[3]) : ((O = r.trim()), (t[2] = r), (t[3] = O));
  let k = O.length > 0,
    A = k && s(r) ? r : ``,
    {
      dataUrl: j,
      src: M,
      isError: N,
      loadSource: P,
      loadTiming: F,
      eligibleForDirectUrl: I,
      refetch: L,
      onImageError: R,
      deleted: z,
    } = h(A, u),
    B,
    V;
  t[4] !== k || t[5] !== b.id || t[6] !== b.kind || t[7] !== v || t[8] !== r
    ? ((B = k ? c(r) : null),
      (V = b.kind === `local` && b.id === v && B != null ? y(B) : null),
      (t[4] = k),
      (t[5] = b.id),
      (t[6] = b.kind),
      (t[7] = v),
      (t[8] = r),
      (t[9] = B),
      (t[10] = V))
    : ((B = t[9]), (V = t[10]));
  let H = V,
    U = E?.src === r && E.environmentId === T ? E.dataUrl : null,
    W = k ? (M ?? H ?? (B == null && !A ? r : U)) : null,
    G,
    K;
  (t[11] !== B ||
  t[12] !== i ||
  t[13] !== H ||
  t[14] !== T ||
  t[15] !== v ||
  t[16] !== m ||
  t[17] !== d ||
  t[18] !== r
    ? ((G = () => {
        if (B == null || (H != null && !d)) return;
        let e = !1;
        return (
          D({ src: r, dataUrl: null, environmentId: T }),
          l(B, v, m, void 0, i, T).then((t) => {
            e || D({ src: r, dataUrl: t, environmentId: T });
          }),
          () => {
            e = !0;
          }
        );
      }),
      (K = [B, i, H, T, v, m, d, r]),
      (t[11] = B),
      (t[12] = i),
      (t[13] = H),
      (t[14] = T),
      (t[15] = v),
      (t[16] = m),
      (t[17] = d),
      (t[18] = r),
      (t[19] = G),
      (t[20] = K))
    : ((G = t[19]), (K = t[20])),
    (0, C.useEffect)(G, K));
  let q;
  t[21] !== j || t[22] !== U || t[23] !== r
    ? ((q = j ?? U ?? (r.startsWith(`data:image/`) ? r : null)),
      (t[21] = j),
      (t[22] = U),
      (t[23] = r),
      (t[24] = q))
    : (q = t[24]);
  let J = j ?? U ?? W,
    Y = !!A && N,
    X;
  return (
    t[25] !== z ||
    t[26] !== I ||
    t[27] !== P ||
    t[28] !== F ||
    t[29] !== R ||
    t[30] !== W ||
    t[31] !== L ||
    t[32] !== q ||
    t[33] !== J ||
    t[34] !== Y
      ? ((X = {
          dataUrl: q,
          previewSrc: W,
          downloadSrc: J,
          isError: Y,
          loadSource: P,
          loadTiming: F,
          eligibleForDirectUrl: I,
          refetch: L,
          onImageError: R,
          deleted: z,
        }),
        (t[25] = z),
        (t[26] = I),
        (t[27] = P),
        (t[28] = F),
        (t[29] = R),
        (t[30] = W),
        (t[31] = L),
        (t[32] = q),
        (t[33] = J),
        (t[34] = Y),
        (t[35] = X))
      : (X = t[35]),
    X
  );
}
var S, C;
function w() {
  return (w = e(() => {
    ((S = i()), r(), t(), (C = a()), v(), d(), g(), m(), u(), b());
  }))();
}
export { x as n, w as t };
//# sourceMappingURL=generated-image-source-27993f6c1759.js.map
