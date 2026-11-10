import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  EE as n,
  FBt as r,
  FE as i,
  LNt as a,
  PBt as o,
  XOt as s,
  XS as c,
  ZSt as l,
  iCt as u,
  okt as ee,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Ci as d,
  Djr as f,
  FDn as te,
  MOr as ne,
  SWt as p,
  Swn as m,
  XCn as h,
  ZCn as re,
  bwn as g,
  f9t as ie,
  iOn as _,
  lit as ae,
  n7n as oe,
  o7n as se,
  sit as ce,
  uit as le,
  wi as v,
  xWt as ue,
  xjr as y,
  xwn as de,
  y7n as b,
  zOr as x,
} from "./app-initial-ad16eaadf81f.js";
import { n as S, t as C } from "./generated-image-source-99de49df778d.js";
import {
  a as fe,
  i as w,
  n as T,
  o as E,
  r as pe,
  t as me,
} from "./local-generated-image-side-panel-671010e0d0e3.js";
import { n as he, t as ge } from "./image-side-panel-c3dea2552162.js";
function _e(e) {
  let r = (0, ye.c)(120),
    {
      ref: a,
      alt: o,
      attachmentId: s,
      attachmentSrc: c,
      chatGptConversationId: l,
      downloadAriaLabel: p,
      downloadFilename: m,
      downloadSrc: h,
      durableIdentity: ie,
      generatedImages: _,
      generatedImagesSource: le,
      imageRef: v,
      toolbarRef: y,
      imageSourceContext: b,
      transferState: x,
      imageSource: S,
      imageEditAttribution: C,
      imageAssetResolver: w,
      initialImageId: T,
      viewerId: E,
      initialEditTool: he,
      isActive: _e,
      liveTailImagePolicy: k,
      onImageEditSubmit: be,
      onImageError: xe,
      onDownloadClick: Se,
      onDownloaded: Ce,
      onPanoramaInteraction: we,
      onActiveImageChange: Te,
      renderHeaderActions: Ee,
      renderHeaderMenuActions: De,
      onGeneratedImageSelection: Oe,
      readOnly: ke,
      referrerPolicy: Ae,
      renderSlots: A,
      setTabState: j,
      sourceImage: je,
      sourceConversationId: Me,
      src: M,
      tabId: N,
      tabState: P,
      title: Ne,
    } = e,
    Pe = le === void 0 ? `conversation` : le,
    F = t(ne),
    Fe = ee(),
    I;
  r[0] !== F || r[1] !== N ? ((I = de(F, N)), (r[0] = F), (r[1] = N), (r[2] = I)) : (I = r[2]);
  let L = I,
    Ie = u((L === `right` && se) || (L === `bottom` && oe)),
    Le = ie == null || !_e || !Ie || M.length === 0,
    R;
  (r[3] === Le ? (R = r[4]) : ((R = { disableExposureLog: Le }), (r[3] = Le), (r[4] = R)),
    f(`2983946247`, R).get(`image_overlay_enabled`, !1));
  let z, B;
  (r[5] !== L || r[6] !== F || r[7] !== N
    ? ((z = () => {}), (B = [L, F, N]), (r[5] = L), (r[6] = F), (r[7] = N), (r[8] = z), (r[9] = B))
    : ((z = r[8]), (B = r[9])),
    (0, D.useEffect)(z, B));
  let [Re, ze] = (0, D.useState)(he),
    V;
  (r[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = () => ({ startEditing: ze })), (r[10] = V))
    : (V = r[10]),
    (0, D.useImperativeHandle)(a, V));
  let H;
  r[11] === j
    ? (H = r[12])
    : ((H = (e) => {
        j((t) => ({ ...t, manualZoomPercent: e }));
      }),
      (r[11] = j),
      (r[12] = H));
  let U = H,
    Be = (P.activeImageId ?? T) === T ? Re : void 0,
    W;
  r[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((W = () => ze(void 0)), (r[13] = W)) : (W = r[13]);
  let G;
  r[14] !== Fe || r[15] !== L || r[16] !== F || r[17] !== N
    ? ((G =
        L != null && g(L).singleTab
          ? (0, O.jsxs)(i, {
              variant: `window`,
              label: Fe.formatMessage({
                id: `imagePreview.windowControls`,
                defaultMessage: `Viewer controls`,
                description: `Accessible label for expanding and closing the image viewer`,
              }),
              children: [
                (0, O.jsx)(ue, { surface: `viewer` }),
                (0, O.jsx)(n, { onClick: () => g(L).closeTab(F, N) }),
              ],
            })
          : null),
      (r[14] = Fe),
      (r[15] = L),
      (r[16] = F),
      (r[17] = N),
      (r[18] = G))
    : (G = r[18]);
  let K;
  r[19] !== o ||
  r[20] !== s ||
  r[21] !== c ||
  r[22] !== l ||
  r[23] !== p ||
  r[24] !== m ||
  r[25] !== h ||
  r[26] !== w ||
  r[27] !== C ||
  r[28] !== v ||
  r[29] !== S ||
  r[30] !== T ||
  r[31] !== Se ||
  r[32] !== Ce ||
  r[33] !== be ||
  r[34] !== xe ||
  r[35] !== we ||
  r[36] !== ke ||
  r[37] !== Ae ||
  r[38] !== Ee ||
  r[39] !== De ||
  r[40] !== Me ||
  r[41] !== je ||
  r[42] !== M ||
  r[43] !== G ||
  r[44] !== Be ||
  r[45] !== N ||
  r[46] !== Ne ||
  r[47] !== y ||
  r[48] !== E
    ? ((K = {
        viewerId: E,
        alt: o,
        attachmentId: s,
        attachmentSrc: c,
        chatGptConversationId: l,
        downloadAriaLabel: p,
        downloadFilename: m,
        downloadSrc: h,
        imageId: T,
        imageAssetResolver: w,
        imageRef: v,
        toolbarRef: y,
        initialEditTool: Be,
        onInitialEditToolApplied: W,
        imageSource: S,
        imageEditAttribution: C,
        onImageEditSubmit: be,
        onImageError: xe,
        onDownloadClick: Se,
        onDownloaded: Ce,
        onPanoramaInteraction: we,
        renderHeaderActions: Ee,
        renderHeaderMenuActions: De,
        readOnly: ke,
        referrerPolicy: Ae,
        sourceImage: je,
        sourceConversationId: Me,
        src: M,
        tabId: N,
        title: Ne,
        headerWindowControls: G,
      }),
      (r[19] = o),
      (r[20] = s),
      (r[21] = c),
      (r[22] = l),
      (r[23] = p),
      (r[24] = m),
      (r[25] = h),
      (r[26] = w),
      (r[27] = C),
      (r[28] = v),
      (r[29] = S),
      (r[30] = T),
      (r[31] = Se),
      (r[32] = Ce),
      (r[33] = be),
      (r[34] = xe),
      (r[35] = we),
      (r[36] = ke),
      (r[37] = Ae),
      (r[38] = Ee),
      (r[39] = De),
      (r[40] = Me),
      (r[41] = je),
      (r[42] = M),
      (r[43] = G),
      (r[44] = Be),
      (r[45] = N),
      (r[46] = Ne),
      (r[47] = y),
      (r[48] = E),
      (r[49] = K))
    : (K = r[49]);
  let q = K;
  if (_ != null && T != null) {
    let e = P.manualZoomPercent ?? null,
      t;
    r[50] === U ? (t = r[51]) : ((t = () => U(null)), (r[50] = U), (r[51] = t));
    let n;
    r[52] !== U || r[53] !== e || r[54] !== t
      ? ((n = { manualZoomPercent: e, onZoomPercentChange: U, onZoomToFit: t }),
        (r[52] = U),
        (r[53] = e),
        (r[54] = t),
        (r[55] = n))
      : (n = r[55]);
    let i;
    r[56] !== q || r[57] !== n
      ? ((i = { ...q, zoom: n }), (r[56] = q), (r[57] = n), (r[58] = i))
      : (i = r[58]);
    let a = P.activeImageId ?? T,
      o;
    r[59] !== T || r[60] !== Te || r[61] !== F || r[62] !== j || r[63] !== N
      ? ((o = (e) => {
          (e.id !== T && ze(void 0),
            Te?.(e),
            j((t) => (t.activeImageId === e.id ? t : { ...t, activeImageId: e.id })));
          let t = g(de(F, N) ?? `right`),
            n = F.get(t.tabById$, N),
            r =
              n?.durableRoute?.kind === `image-preview` && n.durableRoute.payloadVersion === 1
                ? ae.safeParse(n.durableRoute.params)
                : null;
          t.updateTab(F, N, {
            ...(r?.success === !0 && r.data.source === `generated-image`
              ? { durableRoute: ce({ imageItemId: e.id, source: `generated-image` }) }
              : {}),
            title: e.tabTitle,
            tooltip: e.tabTitle,
          });
        }),
        (r[59] = T),
        (r[60] = Te),
        (r[61] = F),
        (r[62] = j),
        (r[63] = N),
        (r[64] = o))
      : (o = r[64]);
    let s;
    r[65] !== F || r[66] !== j || r[67] !== N
      ? ((s = (e) => {
          (e === `playground` && de(F, N) === `right` && te(F, !0),
            j((t) => (t.view === e ? t : { ...t, view: e })));
        }),
        (r[65] = F),
        (r[66] = j),
        (r[67] = N),
        (r[68] = s))
      : (s = r[68]);
    let c;
    r[69] !== _ ||
    r[70] !== w ||
    r[71] !== Oe ||
    r[72] !== i ||
    r[73] !== a ||
    r[74] !== o ||
    r[75] !== s ||
    r[76] !== P.view
      ? ((c = {
          fallbackImage: i,
          imageAssetResolver: w,
          initialImageId: a,
          initialImages: _,
          onGeneratedImageSelection: Oe,
          view: P.view,
          onActiveImageChange: o,
          onViewChange: s,
        }),
        (r[69] = _),
        (r[70] = w),
        (r[71] = Oe),
        (r[72] = i),
        (r[73] = a),
        (r[74] = o),
        (r[75] = s),
        (r[76] = P.view),
        (r[77] = c))
      : (c = r[77]);
    let l = c;
    if (Pe === `provided`) {
      let e;
      if (r[78] !== l || r[79] !== _ || r[80] !== A) {
        let t;
        r[82] === _
          ? (t = r[83])
          : ((t = [{ id: `provided-images`, images: _, turnStartedAtMs: null }]), (r[82] = _), (r[83] = t));
        let n;
        (r[84] !== l || r[85] !== t
          ? ((n = (0, O.jsx)(fe, {
              ...l,
              conversationId: null,
              conversationTitle: null,
              historicalGeneratedImageGroups: t,
              liveTailGeneratedImageGroup: null,
              optimisticImageEditMessageId: null,
            })),
            (r[84] = l),
            (r[85] = t),
            (r[86] = n))
          : (n = r[86]),
          (e = A({ headerRows: [], content: n })),
          (r[78] = l),
          (r[79] = _),
          (r[80] = A),
          (r[81] = e));
      } else e = r[81];
      return e;
    }
    let u;
    if (r[87] !== l || r[88] !== k || r[89] !== A || r[90] !== F.value.routeKind) {
      let e;
      (r[92] !== l || r[93] !== k || r[94] !== F.value.routeKind
        ? ((e =
            F.value.routeKind === `chatgpt-thread`
              ? (0, O.jsx)(pe, { ...l })
              : (0, O.jsx)(me, { ...l, restrictLiveTailToInitialImages: k === `initial-only` })),
          (r[92] = l),
          (r[93] = k),
          (r[94] = F.value.routeKind),
          (r[95] = e))
        : (e = r[95]),
        (u = A({ headerRows: [], content: e })),
        (r[87] = l),
        (r[88] = k),
        (r[89] = A),
        (r[90] = F.value.routeKind),
        (r[91] = u));
    } else u = r[91];
    return u;
  }
  let Ve = P.manualZoomPercent ?? null,
    J;
  r[96] === U ? (J = r[97]) : ((J = () => U(null)), (r[96] = U), (r[97] = J));
  let Y;
  r[98] !== U || r[99] !== Ve || r[100] !== J
    ? ((Y = { manualZoomPercent: Ve, onZoomPercentChange: U, onZoomToFit: J }),
      (r[98] = U),
      (r[99] = Ve),
      (r[100] = J),
      (r[101] = Y))
    : (Y = r[101]);
  let X = Y,
    Z;
  r[102] !== F || r[103] !== N
    ? ((Z = () => {
        let e = de(F, N);
        e != null && (g(e).closeTab(F, N), re(F));
      }),
      (r[102] = F),
      (r[103] = N),
      (r[104] = Z))
    : (Z = r[104]);
  let Q = Z,
    $;
  if (r[105] !== q || r[106] !== b || r[107] !== Q || r[108] !== A || r[109] !== x || r[110] !== X) {
    let e;
    r[112] !== q || r[113] !== b || r[114] !== Q || r[115] !== X
      ? ((e =
          b == null
            ? (0, O.jsx)(ge, { ...q, onImageEditSubmitted: Q, zoom: X })
            : (0, O.jsx)(ve, {
                ...q,
                conversationId: b.conversationId,
                hostId: b.hostId,
                onImageEditSubmitted: Q,
                zoom: X,
              })),
        (r[112] = q),
        (r[113] = b),
        (r[114] = Q),
        (r[115] = X),
        (r[116] = e))
      : (e = r[116]);
    let t;
    (r[117] !== e || r[118] !== x
      ? ((t = (0, O.jsx)(d, { value: x, children: e })), (r[117] = e), (r[118] = x), (r[119] = t))
      : (t = r[119]),
      ($ = A({ headerRows: [], content: t })),
      (r[105] = q),
      (r[106] = b),
      (r[107] = Q),
      (r[108] = A),
      (r[109] = x),
      (r[110] = X),
      (r[111] = $));
  } else $ = r[111];
  return $;
}
function ve(e) {
  let t = (0, ye.c)(16),
    n,
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]))
    : (({ attachmentSrc: n, conversationId: r, downloadSrc: i, hostId: a, src: s, ...o } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s));
  let c;
  t[7] !== n || t[8] !== r || t[9] !== a
    ? ((c = { conversationId: r, hostId: a, shouldLoadFileDataUrl: !1, src: n }),
      (t[7] = n),
      (t[8] = r),
      (t[9] = a),
      (t[10] = c))
    : (c = t[10]);
  let { downloadSrc: l, previewSrc: u } = S(c),
    ee = l ?? i ?? u ?? s,
    d = u ?? s,
    f;
  return (
    t[11] !== n || t[12] !== o || t[13] !== ee || t[14] !== d
      ? ((f = (0, O.jsx)(ge, { ...o, attachmentSrc: n, downloadSrc: ee, src: d })),
        (t[11] = n),
        (t[12] = o),
        (t[13] = ee),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
var ye, D, O;
function k() {
  return (k = e(() => {
    ((ye = o()),
      l(),
      (D = r()),
      s(),
      _(),
      ie(),
      b(),
      w(),
      E(),
      C(),
      he(),
      T(),
      le(),
      v(),
      x(),
      y(),
      m(),
      p(),
      h(),
      c(),
      (O = a()));
  }))();
}
k();
export { _e as ImagePreviewPanel };
//# sourceMappingURL=tab-content-a20a592337a3.js.map
