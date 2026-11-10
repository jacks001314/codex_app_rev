import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as ee,
  CS as r,
  CZ as i,
  DZ as a,
  Dz as o,
  IDt as s,
  Mz as c,
  Nz as l,
  OZ as u,
  TJ as d,
  TO as f,
  Tv as p,
  VDt as m,
  bB as h,
  cE as g,
  g4 as _,
  h4 as v,
  jDt as y,
  kz as b,
  nE as x,
  t3 as S,
  tB as te,
  vzt as C,
  wZ as w,
  wv as T,
  xB as ne,
  xMt as E,
  yzt as D,
} from "./app-shared-bbfeca5e5737.js";
import { Ii as O, Li as k } from "./app-initial-5851df3f6cb1.js";
import { n as A, t as j } from "./image-edit-toolbar-5598d748a2a3.js";
function M(e) {
  let t = (0, N.c)(19),
    { disabled: n, imageCount: r, isAnimated: i, onOpen: a, onShare: o, onShareAll: l, triggerButton: d } = e,
    p = i !== void 0 && i,
    m;
  t[0] === a
    ? (m = t[1])
    : ((m = (e) => {
        e && a?.();
      }),
      (t[0] = a),
      (t[1] = m));
  let h;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, P.jsx)(c, { className: `text-gray-1000`, asset: u })), (t[2] = h))
    : (h = t[2]);
  let g;
  t[3] === p ? (g = t[4]) : ((g = O({ isAnimated: p })), (t[3] = p), (t[4] = g));
  let _;
  t[5] === g.shareSelectionLabel
    ? (_ = t[6])
    : ((_ = (0, P.jsx)(s, { ...g.shareSelectionLabel })), (t[5] = g.shareSelectionLabel), (t[6] = _));
  let v;
  t[7] !== o || t[8] !== _
    ? ((v = (0, P.jsx)(f.Item, { leftIcon: h, onSelect: o, children: _ })),
      (t[7] = o),
      (t[8] = _),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== r || t[11] !== l
    ? ((y =
        l == null
          ? null
          : (0, P.jsx)(f.Item, {
              leftIcon: (0, P.jsx)(c, { className: `text-gray-1000`, asset: w }),
              onSelect: l,
              children: (0, P.jsx)(s, {
                id: `imagePreview.shareSeries`,
                defaultMessage: `All {imageCount, plural, one {# image} other {# images}} in this series`,
                description: `Option in the generated-image Share dropdown that shares every completed image in the selected generation series. imageCount is the number of images included, always greater than one. Keep this menu label concise.`,
                values: { imageCount: r },
              }),
            })),
      (t[10] = r),
      (t[11] = l),
      (t[12] = y))
    : (y = t[12]);
  let b;
  return (
    t[13] !== n || t[14] !== m || t[15] !== v || t[16] !== y || t[17] !== d
      ? ((b = (0, P.jsxs)(ee, {
          align: `end`,
          disabled: n,
          triggerButton: d,
          onOpenChange: m,
          children: [v, y],
        })),
        (t[13] = n),
        (t[14] = m),
        (t[15] = v),
        (t[16] = y),
        (t[17] = d),
        (t[18] = b))
      : (b = t[18]),
    b
  );
}
var N, P;
function F() {
  return (F = e(() => {
    ((N = C()), a(), i(), y(), n(), l(), k(), (P = E()));
  }))();
}
function I(e) {
  let n = (0, L.c)(53),
    {
      downloadImageCount: r,
      floatingToolbarVariant: i,
      moreActions: a,
      isAnimated: l,
      isImageActionsDisabled: u,
      isUnifiedViewerEnabled: d,
      onDownload: p,
      onDownloadAll: _,
      onDownloadMenuOpen: y,
      onShare: b,
      onShareAll: S,
      onShareMenuOpen: C,
      saveAction: w,
      shareImageCount: E,
      showShareText: D,
    } = e,
    k = l !== void 0 && l,
    A = d !== void 0 && d,
    N = D !== void 0 && D,
    P = m(),
    [F, I] = (0, R.useState)(!1),
    B = `toolbar`;
  i != null && (B = i === `imageTools` ? `imageToolbar` : `composerSm`);
  let V;
  n[0] !== B || n[1] !== i || n[2] !== P || n[3] !== u || n[4] !== A || n[5] !== b || n[6] !== S || n[7] !== N
    ? ((V = A
        ? (0, z.jsxs)(x, {
            "aria-label": P.formatMessage({
              id: `imageSidePanel.share`,
              defaultMessage: `Share`,
              description: `Label for the image viewer header button that opens sharing options for the currently displayed generated image.`,
            }),
            disabled: u,
            uniform: !N,
            onClick: S == null ? b : void 0,
            children: [
              (0, z.jsx)(o, { icon: { 16: h, 20: ne } }),
              N
                ? (0, z.jsx)(s, {
                    id: `imageSidePanel.share`,
                    defaultMessage: `Share`,
                    description: `Label for the image viewer header button that opens sharing options for the currently displayed generated image.`,
                  })
                : null,
            ],
          })
        : (0, z.jsx)(t, {
            color: i == null ? `primary` : `ghostActive`,
            disabled: u,
            size: B,
            onClick: S == null ? b : void 0,
            children: (0, z.jsx)(s, {
              id: `imageSidePanel.share`,
              defaultMessage: `Share`,
              description: `Label for the image viewer header button that opens sharing options for the currently displayed generated image.`,
            }),
          })),
      (n[0] = B),
      (n[1] = i),
      (n[2] = P),
      (n[3] = u),
      (n[4] = A),
      (n[5] = b),
      (n[6] = S),
      (n[7] = N),
      (n[8] = V))
    : (V = n[8]);
  let H = V;
  if (b != null && S != null) {
    let e;
    (n[9] !== k || n[10] !== u || n[11] !== b || n[12] !== S || n[13] !== C || n[14] !== H || n[15] !== E
      ? ((e = (0, z.jsx)(M, {
          disabled: u,
          imageCount: E,
          isAnimated: k,
          onOpen: C,
          onShare: b,
          onShareAll: S,
          triggerButton: H,
        })),
        (n[9] = k),
        (n[10] = u),
        (n[11] = b),
        (n[12] = S),
        (n[13] = C),
        (n[14] = H),
        (n[15] = E),
        (n[16] = e))
      : (e = n[16]),
      (H = e));
  }
  if (i != null) {
    let e;
    (n[17] !== i || n[18] !== H
      ? ((e = (0, z.jsx)(j, { variant: i, children: H })), (n[17] = i), (n[18] = H), (n[19] = e))
      : (e = n[19]),
      (H = e));
  }
  let U;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = async (e) => {
        (I(!0),
          await e().finally(() => {
            I(!1);
          }));
      }),
      (n[20] = U))
    : (U = n[20]);
  let re = U,
    W;
  n[21] !== B ||
  n[22] !== r ||
  n[23] !== i ||
  n[24] !== P ||
  n[25] !== k ||
  n[26] !== F ||
  n[27] !== u ||
  n[28] !== A ||
  n[29] !== p ||
  n[30] !== _ ||
  n[31] !== y ||
  n[32] !== w
    ? ((W =
        _ != null && p != null
          ? (0, z.jsxs)(ee, {
              align: `end`,
              disabled: u || F,
              onOpenChange: (e) => {
                e && y?.();
              },
              triggerButton: A
                ? (0, z.jsx)(x, {
                    "aria-label": P.formatMessage(O({ isAnimated: k }).downloadLabel),
                    disabled: u || F,
                    loading: F,
                    uniform: !0,
                    children: (0, z.jsx)(o, { icon: { assets: { 16: T, 20: v } } }),
                  })
                : (0, z.jsx)(t, {
                    "aria-label": P.formatMessage(O({ isAnimated: k }).downloadLabel),
                    color: i == null ? `ghost` : `ghostActive`,
                    disabled: u || F,
                    loading: F,
                    size: B,
                    uniform: !0,
                    children: i === `compact` ? (0, z.jsx)(c, { asset: T }) : (0, z.jsx)(te, {}),
                  }),
              children: [
                (0, z.jsx)(f.Item, {
                  onSelect: () => void re(p),
                  children: (0, z.jsx)(s, { ...O({ isAnimated: k }).downloadMenuLabel }),
                }),
                (0, z.jsx)(f.Item, {
                  onSelect: () => void re(_),
                  children: (0, z.jsx)(s, {
                    id: `imagePreview.downloadSeries`,
                    defaultMessage: `Download {count} images in this series`,
                    description: `Option in the generated-image Download dropdown that saves every completed image in the selected generation series. count is the number of images to download, always greater than one. Keep this menu label concise.`,
                    values: { count: r },
                  }),
                }),
              ],
            })
          : w),
      (n[21] = B),
      (n[22] = r),
      (n[23] = i),
      (n[24] = P),
      (n[25] = k),
      (n[26] = F),
      (n[27] = u),
      (n[28] = A),
      (n[29] = p),
      (n[30] = _),
      (n[31] = y),
      (n[32] = w),
      (n[33] = W))
    : (W = n[33]);
  let G = W;
  if (i != null && _ != null && p != null) {
    let e;
    (n[34] !== G || n[35] !== i
      ? ((e = (0, z.jsx)(j, { variant: i, children: G })), (n[34] = G), (n[35] = i), (n[36] = e))
      : (e = n[36]),
      (G = e));
  }
  let K = b == null ? null : H,
    q;
  n[37] !== G || n[38] !== K
    ? ((q = (0, z.jsxs)(z.Fragment, { children: [G, K] })), (n[37] = G), (n[38] = K), (n[39] = q))
    : (q = n[39]);
  let J = q,
    Y;
  n[40] !== i || n[41] !== a
    ? ((Y = a == null || i == null ? a : (0, z.jsx)(j, { variant: i, children: a })),
      (n[40] = i),
      (n[41] = a),
      (n[42] = Y))
    : (Y = n[42]);
  let X = Y,
    Z = b != null || G != null;
  if (!A || N) {
    let e;
    return (
      n[43] !== J || n[44] !== X
        ? ((e = (0, z.jsxs)(z.Fragment, { children: [J, X] })), (n[43] = J), (n[44] = X), (n[45] = e))
        : (e = n[45]),
      e
    );
  }
  let Q;
  n[46] !== Z || n[47] !== P || n[48] !== J
    ? ((Q = Z
        ? (0, z.jsx)(g, {
            label: P.formatMessage({
              id: `imagePreview.headerActions`,
              defaultMessage: `Image actions`,
              description: `Accessible label for the image viewer's Share and Download actions group`,
            }),
            children: J,
          })
        : null),
      (n[46] = Z),
      (n[47] = P),
      (n[48] = J),
      (n[49] = Q))
    : (Q = n[49]);
  let $;
  return (
    n[50] !== Q || n[51] !== X
      ? (($ = (0, z.jsxs)(z.Fragment, { children: [Q, X] })), (n[50] = Q), (n[51] = X), (n[52] = $))
      : ($ = n[52]),
    $
  );
}
var L, R, z;
function B() {
  return (B = e(() => {
    ((L = C()), p(), _(), (R = D()), y(), S(), n(), l(), d(), b(), k(), A(), r(), F(), (z = E()));
  }))();
}
export { F as i, B as n, M as r, I as t };
//# sourceMappingURL=header-actions-cd561ecdb1dd.js.map
