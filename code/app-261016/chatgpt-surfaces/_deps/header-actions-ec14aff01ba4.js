import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AQ as t,
  DB as n,
  EQ as r,
  FBt as i,
  FE as a,
  LNt as o,
  OB as s,
  PBt as c,
  SB as l,
  TE as u,
  TQ as d,
  TY as f,
  XB as p,
  XOt as m,
  XS as h,
  Xv as g,
  Y3 as _,
  Z3 as v,
  Zv as y,
  _V as ee,
  ck as b,
  gV as te,
  kQ as x,
  m3 as S,
  okt as ne,
  p3 as re,
  rk as C,
  tk as w,
  tkt as T,
  wB as E,
} from "./app-shared-2feb3d4c6fcc.js";
import { em as D, tm as O } from "./app-initial-ad16eaadf81f.js";
import { n as k, t as A } from "./image-edit-toolbar-b4c63cc4a779.js";
function j(e) {
  let i = (0, M.c)(19),
    { disabled: a, imageCount: o, isAnimated: s, onOpen: c, onShare: l, onShareAll: u, triggerButton: d } = e,
    f = s !== void 0 && s,
    p;
  i[0] === c
    ? (p = i[1])
    : ((p = (e) => {
        e && c?.();
      }),
      (i[0] = c),
      (i[1] = p));
  let m;
  i[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, N.jsx)(n, { className: `text-gray-1000`, asset: t })), (i[2] = m))
    : (m = i[2]);
  let h;
  i[3] === f ? (h = i[4]) : ((h = D({ isAnimated: f })), (i[3] = f), (i[4] = h));
  let g;
  i[5] === h.shareSelectionLabel
    ? (g = i[6])
    : ((g = (0, N.jsx)(T, { ...h.shareSelectionLabel })), (i[5] = h.shareSelectionLabel), (i[6] = g));
  let _;
  i[7] !== l || i[8] !== g
    ? ((_ = (0, N.jsx)(C.Item, { leftIcon: m, onSelect: l, children: g })),
      (i[7] = l),
      (i[8] = g),
      (i[9] = _))
    : (_ = i[9]);
  let v;
  i[10] !== o || i[11] !== u
    ? ((v =
        u == null
          ? null
          : (0, N.jsx)(C.Item, {
              leftIcon: (0, N.jsx)(n, { className: `text-gray-1000`, asset: r }),
              onSelect: u,
              children: (0, N.jsx)(T, {
                id: `imagePreview.shareSeries`,
                defaultMessage: `All {imageCount, plural, one {# image} other {# images}} in this series`,
                description: `Option in the generated-image Share dropdown that shares every completed image in the selected generation series. imageCount is the number of images included, always greater than one. Keep this menu label concise.`,
                values: { imageCount: o },
              }),
            })),
      (i[10] = o),
      (i[11] = u),
      (i[12] = v))
    : (v = i[12]);
  let y;
  return (
    i[13] !== a || i[14] !== p || i[15] !== _ || i[16] !== v || i[17] !== d
      ? ((y = (0, N.jsxs)(w, {
          align: `end`,
          disabled: a,
          triggerButton: d,
          onOpenChange: p,
          children: [_, v],
        })),
        (i[13] = a),
        (i[14] = p),
        (i[15] = _),
        (i[16] = v),
        (i[17] = d),
        (i[18] = y))
      : (y = i[18]),
    y
  );
}
var M, N;
function P() {
  return (P = e(() => {
    ((M = c()), x(), d(), m(), b(), s(), O(), (N = o()));
  }))();
}
function F(e) {
  let t = (0, I.c)(53),
    {
      downloadImageCount: r,
      floatingToolbarVariant: i,
      moreActions: o,
      isAnimated: s,
      isImageActionsDisabled: c,
      isUnifiedViewerEnabled: d,
      onDownload: f,
      onDownloadAll: m,
      onDownloadMenuOpen: h,
      onShare: v,
      onShareAll: y,
      onShareMenuOpen: b,
      saveAction: x,
      shareImageCount: S,
      showShareText: E,
    } = e,
    O = s !== void 0 && s,
    k = d !== void 0 && d,
    M = E !== void 0 && E,
    N = ne(),
    [P, F] = (0, L.useState)(!1),
    z = `toolbar`;
  i != null && (z = i === `imageTools` ? `imageToolbar` : `composerSm`);
  let B;
  t[0] !== z || t[1] !== i || t[2] !== N || t[3] !== c || t[4] !== k || t[5] !== v || t[6] !== y || t[7] !== M
    ? ((B = k
        ? (0, R.jsxs)(u, {
            "aria-label": N.formatMessage({
              id: `imageSidePanel.share`,
              defaultMessage: `Share`,
              description: `Label for the image viewer header button that opens sharing options for the currently displayed generated image.`,
            }),
            disabled: c,
            uniform: !M,
            onClick: y == null ? v : void 0,
            children: [
              (0, R.jsx)(l, { icon: { 16: te, 20: ee } }),
              M
                ? (0, R.jsx)(T, {
                    id: `imageSidePanel.share`,
                    defaultMessage: `Share`,
                    description: `Label for the image viewer header button that opens sharing options for the currently displayed generated image.`,
                  })
                : null,
            ],
          })
        : (0, R.jsx)(_, {
            color: i == null ? `primary` : `ghostActive`,
            disabled: c,
            size: z,
            onClick: y == null ? v : void 0,
            children: (0, R.jsx)(T, {
              id: `imageSidePanel.share`,
              defaultMessage: `Share`,
              description: `Label for the image viewer header button that opens sharing options for the currently displayed generated image.`,
            }),
          })),
      (t[0] = z),
      (t[1] = i),
      (t[2] = N),
      (t[3] = c),
      (t[4] = k),
      (t[5] = v),
      (t[6] = y),
      (t[7] = M),
      (t[8] = B))
    : (B = t[8]);
  let V = B;
  if (v != null && y != null) {
    let e;
    (t[9] !== O || t[10] !== c || t[11] !== v || t[12] !== y || t[13] !== b || t[14] !== V || t[15] !== S
      ? ((e = (0, R.jsx)(j, {
          disabled: c,
          imageCount: S,
          isAnimated: O,
          onOpen: b,
          onShare: v,
          onShareAll: y,
          triggerButton: V,
        })),
        (t[9] = O),
        (t[10] = c),
        (t[11] = v),
        (t[12] = y),
        (t[13] = b),
        (t[14] = V),
        (t[15] = S),
        (t[16] = e))
      : (e = t[16]),
      (V = e));
  }
  if (i != null) {
    let e;
    (t[17] !== i || t[18] !== V
      ? ((e = (0, R.jsx)(A, { variant: i, children: V })), (t[17] = i), (t[18] = V), (t[19] = e))
      : (e = t[19]),
      (V = e));
  }
  let H;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = async (e) => {
        (F(!0),
          await e().finally(() => {
            F(!1);
          }));
      }),
      (t[20] = H))
    : (H = t[20]);
  let U = H,
    W;
  t[21] !== z ||
  t[22] !== r ||
  t[23] !== i ||
  t[24] !== N ||
  t[25] !== O ||
  t[26] !== P ||
  t[27] !== c ||
  t[28] !== k ||
  t[29] !== f ||
  t[30] !== m ||
  t[31] !== h ||
  t[32] !== x
    ? ((W =
        m != null && f != null
          ? (0, R.jsxs)(w, {
              align: `end`,
              disabled: c || P,
              onOpenChange: (e) => {
                e && h?.();
              },
              triggerButton: k
                ? (0, R.jsx)(u, {
                    "aria-label": N.formatMessage(D({ isAnimated: O }).downloadLabel),
                    disabled: c || P,
                    loading: P,
                    uniform: !0,
                    children: (0, R.jsx)(l, { icon: { assets: { 16: g, 20: re } } }),
                  })
                : (0, R.jsx)(_, {
                    "aria-label": N.formatMessage(D({ isAnimated: O }).downloadLabel),
                    color: i == null ? `ghost` : `ghostActive`,
                    disabled: c || P,
                    loading: P,
                    size: z,
                    uniform: !0,
                    children: i === `compact` ? (0, R.jsx)(n, { asset: g }) : (0, R.jsx)(p, {}),
                  }),
              children: [
                (0, R.jsx)(C.Item, {
                  onSelect: () => void U(f),
                  children: (0, R.jsx)(T, { ...D({ isAnimated: O }).downloadMenuLabel }),
                }),
                (0, R.jsx)(C.Item, {
                  onSelect: () => void U(m),
                  children: (0, R.jsx)(T, {
                    id: `imagePreview.downloadSeries`,
                    defaultMessage: `Download {count} images in this series`,
                    description: `Option in the generated-image Download dropdown that saves every completed image in the selected generation series. count is the number of images to download, always greater than one. Keep this menu label concise.`,
                    values: { count: r },
                  }),
                }),
              ],
            })
          : x),
      (t[21] = z),
      (t[22] = r),
      (t[23] = i),
      (t[24] = N),
      (t[25] = O),
      (t[26] = P),
      (t[27] = c),
      (t[28] = k),
      (t[29] = f),
      (t[30] = m),
      (t[31] = h),
      (t[32] = x),
      (t[33] = W))
    : (W = t[33]);
  let G = W;
  if (i != null && m != null && f != null) {
    let e;
    (t[34] !== G || t[35] !== i
      ? ((e = (0, R.jsx)(A, { variant: i, children: G })), (t[34] = G), (t[35] = i), (t[36] = e))
      : (e = t[36]),
      (G = e));
  }
  let K = v == null ? null : V,
    q;
  t[37] !== G || t[38] !== K
    ? ((q = (0, R.jsxs)(R.Fragment, { children: [G, K] })), (t[37] = G), (t[38] = K), (t[39] = q))
    : (q = t[39]);
  let J = q,
    Y;
  t[40] !== i || t[41] !== o
    ? ((Y = o == null || i == null ? o : (0, R.jsx)(A, { variant: i, children: o })),
      (t[40] = i),
      (t[41] = o),
      (t[42] = Y))
    : (Y = t[42]);
  let X = Y,
    Z = v != null || G != null;
  if (!k || M) {
    let e;
    return (
      t[43] !== J || t[44] !== X
        ? ((e = (0, R.jsxs)(R.Fragment, { children: [J, X] })), (t[43] = J), (t[44] = X), (t[45] = e))
        : (e = t[45]),
      e
    );
  }
  let Q;
  t[46] !== Z || t[47] !== N || t[48] !== J
    ? ((Q = Z
        ? (0, R.jsx)(a, {
            label: N.formatMessage({
              id: `imagePreview.headerActions`,
              defaultMessage: `Image actions`,
              description: `Accessible label for the image viewer's Share and Download actions group`,
            }),
            children: J,
          })
        : null),
      (t[46] = Z),
      (t[47] = N),
      (t[48] = J),
      (t[49] = Q))
    : (Q = t[49]);
  let $;
  return (
    t[50] !== Q || t[51] !== X
      ? (($ = (0, R.jsxs)(R.Fragment, { children: [Q, X] })), (t[50] = Q), (t[51] = X), (t[52] = $))
      : ($ = t[52]),
    $
  );
}
var I, L, R;
function z() {
  return (z = e(() => {
    ((I = c()), y(), S(), (L = i()), m(), v(), b(), s(), f(), E(), O(), k(), h(), P(), (R = o()));
  }))();
}
export { P as i, z as n, j as r, F as t };
//# sourceMappingURL=header-actions-ec14aff01ba4.js.map
