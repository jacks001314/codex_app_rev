import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $mt as r,
  BA as i,
  CNt as a,
  FBt as o,
  FNt as s,
  HA as ee,
  JO as c,
  Jj as l,
  LNt as te,
  MH as ne,
  PBt as u,
  PH as re,
  RFt as ie,
  TE as ae,
  TY as oe,
  Uz as d,
  VA as se,
  WO as ce,
  Wz as le,
  XOt as ue,
  XS as de,
  Yj as fe,
  ZSt as f,
  dO as pe,
  gB as me,
  hB as p,
  lO as he,
  nCt as ge,
  okt as _e,
  qO as ve,
  sct as ye,
  tht as be,
  tkt as xe,
  wE as Se,
  yO as Ce,
  zFt as we,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Di as Te,
  Djr as Ee,
  HZn as De,
  Hp as Oe,
  KRt as ke,
  Kp as m,
  MOr as Ae,
  QOn as je,
  Qp as Me,
  Ts as Ne,
  Vp as Pe,
  Wp as Fe,
  Yp as Ie,
  Zp as Le,
  _s as Re,
  bi as ze,
  bs as Be,
  cen as h,
  den as Ve,
  ki as g,
  len as He,
  qRt as Ue,
  tkn as We,
  vs as _,
  ws as v,
  xjr as y,
  yi as b,
  zOr as x,
  zZn as Ge,
} from "./app-initial-ad16eaadf81f.js";
import { dm as Ke, um as S } from "./app-primary-3e00728c2a4c.js";
import { n as C, t as qe } from "./composer-scope-provider-64e169dbbf17.js";
import {
  a as Je,
  i as w,
  n as T,
  o as Ye,
  r as Xe,
  t as Ze,
} from "./local-generated-image-side-panel-671010e0d0e3.js";
import { n as E, t as Qe } from "./image-side-panel-c3dea2552162.js";
function $e(e) {
  let t = (0, at.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, O.jsx)(qe, { children: (0, O.jsx)(et, { ...e }) })), (t[0] = e), (t[1] = n)),
    n
  );
}
function et(e) {
  let t = (0, at.c)(187),
    {
      image: i,
      onClose: a,
      onPreviousImage: o,
      onNextImage: s,
      onOpenAutoFocus: c,
      onCloseAutoFocus: l,
      getThumbnail: te,
      bottomContent: u,
      openedFromComposer: ie,
    } = e,
    oe = ie !== void 0 && ie,
    d = n(Ae),
    ue = Ee(`4161245824`),
    de;
  t[0] === ue ? (de = t[1]) : ((de = ue.get(`image_overlay_editing_enabled`, !1)), (t[0] = ue), (t[1] = de));
  let f = de,
    p = (0, D.useRef)(null),
    [he, ye] = (0, D.useState)(null),
    De = (0, D.useId)(),
    m = i.viewerId ?? De,
    Me = ge(Le, m),
    h = (0, D.useContext)(ke),
    g = (0, D.useRef)(null),
    Ue = pe(it),
    We;
  t[2] !== h?.target || t[3] !== d
    ? ((We = () => {
        let e = d.get(Oe),
          t = d.get(Ke);
        return {
          composer: h?.target,
          imageContext: d.get(Pe),
          hasStandaloneMarkup: (t != null && t.tabId == null) || (e?.markup != null && e.tabId == null),
        };
      }),
      (t[2] = h?.target),
      (t[3] = d),
      (t[4] = We))
    : (We = t[4]);
  let [_] = (0, D.useState)(We),
    v = i.readOnly || (f && _.hasStandaloneMarkup),
    y = (!oe || f) && h?.composerHost != null && !v,
    b = _e(),
    x = le(),
    S = (0, D.useRef)(!1),
    C = (0, D.useRef)(!1),
    qe = (0, D.useRef)(null),
    w = (0, D.useRef)(null),
    [T, Ye] = (0, D.useState)(!1),
    [E, $e] = (0, D.useState)(!1),
    et = (0, D.useRef)(null),
    ct = (0, D.useRef)(null),
    [lt, ut] = (0, D.useState)(0),
    dt;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (e) => {
        ut(Ce(e).height);
      }),
      (t[5] = dt))
    : (dt = t[5]);
  let ft = pe(dt),
    pt;
  t[6] === ft
    ? (pt = t[7])
    : ((pt = (e) => {
        ((ct.current = e), ft(e), ut(e?.offsetHeight ?? 0));
      }),
      (t[6] = ft),
      (t[7] = pt));
  let mt = me(pt),
    [k, ht] = (0, D.useState)(null),
    A = (0, D.useRef)(null),
    [j, gt] = (0, D.useState)(null),
    _t;
  t[8] !== i.generatedImages || t[9] !== i.initialImageId
    ? ((_t = i.generatedImages?.find((e) => e.id === i.initialImageId)),
      (t[8] = i.generatedImages),
      (t[9] = i.initialImageId),
      (t[10] = _t))
    : (_t = t[10]);
  let [M, vt] = (0, D.useState)(_t),
    yt;
  if (t[11] !== M || t[12] !== i || t[13] !== v || t[14] !== m || t[15] !== Me) {
    let e = M == null ? void 0 : Ie(Me, M);
    ((yt =
      e == null
        ? { ...i, viewerId: m, readOnly: v }
        : {
            ...i,
            viewerId: m,
            readOnly: v,
            alt: e.alt,
            attachmentId: Te(e.id),
            attachmentSrc: e.src,
            imageId: e.id,
            isAnimated: e.isAnimated,
            sourceImage: e.sourceImage,
            src: e.previewSrc,
            downloadSrc: e.src,
            title: e.tabTitle,
          }),
      (t[11] = M),
      (t[12] = i),
      (t[13] = v),
      (t[14] = m),
      (t[15] = Me),
      (t[16] = yt));
  } else yt = t[16];
  let N = yt,
    bt;
  (t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((bt = []), (t[17] = bt)) : (bt = t[17]),
    (0, D.useEffect)(He, bt));
  let xt, St;
  (t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xt = () => () => w.current?.abort()), (St = []), (t[18] = xt), (t[19] = St))
    : ((xt = t[18]), (St = t[19])),
    (0, D.useEffect)(xt, St));
  let Ct;
  t[20] !== h ||
  t[21] !== i.imageEditAttribution ||
  t[22] !== i.readOnly ||
  t[23] !== i.sourceImage ||
  t[24] !== d ||
  t[25] !== y ||
  t[26] !== m
    ? ((Ct = function (e) {
        if (!y || (g.current != null && h.target?.container !== g.current)) return;
        let t = e?.sourceImage ?? i.sourceImage,
          n =
            !i.readOnly && t?.status === `completed` && t.src != null && Ge(t.src) != null
              ? { image: t, attribution: i.imageEditAttribution, viewerId: m }
              : null,
          r = d.get(Pe);
        (r?.viewerId !== m ||
          r.target?.image !== n?.image ||
          r.target?.attribution !== n?.attribution ||
          r.target?.viewerId !== n?.viewerId) &&
          d.set(Pe, {
            target: n,
            viewerId: m,
            useImageEditDraft:
              r?.useImageEditDraft ??
              (i.imageEditAttribution?.editEntryPoint === `composer` || n == null ? d.get(Fe) : !0),
          });
      }),
      (t[20] = h),
      (t[21] = i.imageEditAttribution),
      (t[22] = i.readOnly),
      (t[23] = i.sourceImage),
      (t[24] = d),
      (t[25] = y),
      (t[26] = m),
      (t[27] = Ct))
    : (Ct = t[27]);
  let P = Ct,
    wt;
  t[28] !== te || t[29] !== a || t[30] !== x || t[31] !== N.imageId
    ? ((wt = function () {
        C.current ||
          ((C.current = !0),
          qe.current?.abort(),
          w.current?.abort(),
          Re({ image: et.current, thumbnail: te?.(N.imageId), reducedMotion: x, onClose: a }));
      }),
      (t[28] = te),
      (t[29] = a),
      (t[30] = x),
      (t[31] = N.imageId),
      (t[32] = wt))
    : (wt = t[32]);
  let F = wt,
    Tt;
  t[33] !== F || t[34] !== h?.target?.container
    ? ((Tt = () => {
        let e = g.current;
        e?.isConnected && h?.target?.container === e && F();
      }),
      (t[33] = F),
      (t[34] = h?.target?.container),
      (t[35] = Tt))
    : (Tt = t[35]);
  let Et = me(Tt),
    Dt;
  t[36] !== h || t[37] !== _ || t[38] !== d
    ? ((Dt = (e) => {
        if (h?.target?.container !== e) return;
        let t = _.composer?.container.isConnected ? _.composer : null;
        (d.set(Pe, t == null ? null : _.imageContext), h.setTarget(t));
      }),
      (t[36] = h),
      (t[37] = _),
      (t[38] = d),
      (t[39] = Dt))
    : (Dt = t[39]);
  let Ot = me(Dt),
    kt;
  t[40] !== M || t[41] !== Et || t[42] !== h || t[43] !== Ot || t[44] !== P || t[45] !== y
    ? ((kt = (e) => {
        if (e != null && y)
          return (
            P(M),
            (g.current = e),
            h.setTarget({ container: e, onSubmitSuccess: Et }),
            () => {
              ((g.current = null), Ot(e));
            }
          );
      }),
      (t[40] = M),
      (t[41] = Et),
      (t[42] = h),
      (t[43] = Ot),
      (t[44] = P),
      (t[45] = y),
      (t[46] = kt))
    : (kt = t[46]);
  let I = me(kt),
    At;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((At = function (e) {
        let t = e.target;
        if (
          !(t instanceof Element) ||
          !e.currentTarget.contains(t) ||
          t.closest(
            `button, a, input, textarea, select, [role="toolbar"], [role="menu"], [role="menuitem"], [data-annotation-control], [data-image-preview-composer], [contenteditable="true"]`,
          )
        )
          return !1;
        let n = et.current?.getBoundingClientRect();
        return (
          n == null || e.clientX < n.left || e.clientX > n.right || e.clientY < n.top || e.clientY > n.bottom
        );
      }),
      (t[47] = At))
    : (At = t[47]);
  let jt = At,
    Mt;
  t[48] !== M ||
  t[49] !== i ||
  t[50] !== T ||
  t[51] !== j ||
  t[52] !== a ||
  t[53] !== k?.isConnected ||
  t[54] !== x ||
  t[55] !== d ||
  t[56] !== N
    ? ((Mt = function (e) {
        if (S.current || C.current || T || p.current?.isEditing || w.current?.signal.aborted === !1) return;
        let t = et.current,
          n =
            t != null && t.naturalWidth > 0 ? (t.getBoundingClientRect().width / t.naturalWidth) * 100 : null,
          o = new AbortController();
        qe.current = o;
        let s = be(),
          ee = null,
          c = !1,
          l = !1,
          te = (0, D.createRef)(),
          ne = () => {
            c && e != null && ee != null && !o.signal.aborted && ((c = !1), ee.startEditing(e));
          },
          u = r(s.promise.then(rt), o.signal)
            .catch((e) => {
              if (!o.signal.aborted) throw e;
              return null;
            })
            .then((e) => (l && !o.signal.aborted && (0, st.flushSync)(a), o.signal.aborted ? null : e));
        Ye(!0);
        let re = Be({
          source: t,
          destination: () => u,
          toolbar: { source: ct.current, destination: () => te.current },
          kind: `edit`,
          reducedMotion: x,
          signal: o.signal,
          update: () => {
            if (C.current || !k?.isConnected) {
              o.abort();
              return;
            }
            S.current = !0;
            try {
              ((l = ze(
                d,
                {
                  ...i,
                  ...N,
                  generatedImages:
                    i.generatedImages == null || M == null
                      ? i.generatedImages
                      : (0, ot.default)([...i.generatedImages, M], `id`),
                  initialImageId: N.imageId ?? i.initialImageId,
                  initialEditTool: void 0,
                  onImageEditSubmit: i.onImageEditSubmit,
                  entrypoint: e == null ? `image_click` : `lightbox_edit_button`,
                  title: N.title ?? N.alt,
                  initialZoomPercent: N.zoom?.manualZoomPercent ?? j ?? n,
                  openInEditor: !0,
                  imageRef: (e) => {
                    e != null && s?.resolve(e);
                  },
                  onImageError: () => {
                    (s?.resolve(null), i.onImageError?.());
                  },
                  ref: (e) => {
                    ((ee = e), ne());
                  },
                  toolbarRef: te,
                },
                {
                  layout: e == null ? { mode: `split`, contentSide: `right` } : void 0,
                  durableIdentity:
                    M != null && i.imageAssetResolver == null && d.value.routeKind === `local-thread`
                      ? { imageItemId: M.id, source: `generated-image` }
                      : void 0,
                  onClose: () => {
                    s != null && (o.abort(), (S.current = !1), Ye(!1));
                  },
                  onRenderError: () => {
                    s != null && !o.signal.aborted && (o.abort(), a());
                  },
                },
              )),
                l || (o.abort(), (S.current = !1), Ye(!1)));
            } catch (e) {
              let t = e;
              (o.abort(),
                (S.current = !1),
                Ye(!1),
                we.error(`Failed to open image editor`, { safe: {}, sensitive: { error: t } }));
            }
          },
        });
        Promise.all([re, u]).then((e) => {
          let [, t] = e;
          ((s = null), (qe.current = null), (c = l && t != null), ne());
        });
      }),
      (t[48] = M),
      (t[49] = i),
      (t[50] = T),
      (t[51] = j),
      (t[52] = a),
      (t[53] = k?.isConnected),
      (t[54] = x),
      (t[55] = d),
      (t[56] = N),
      (t[57] = Mt))
    : (Mt = t[57]);
  let L = Mt,
    R;
  t[58] !== M || t[59] !== i.imageRef || t[60] !== P
    ? ((R = (e) => {
        (fe(et, i.imageRef)(e), e != null && P(M));
      }),
      (t[58] = M),
      (t[59] = i.imageRef),
      (t[60] = P),
      (t[61] = R))
    : (R = t[61]);
  let Nt = i.generatedImages == null,
    Pt = f ? p : void 0,
    z;
  t[62] !== L || t[63] !== f
    ? ((z = f ? () => L() : void 0), (t[62] = L), (t[63] = f), (t[64] = z))
    : (z = t[64]);
  let B;
  t[65] !== he ||
  t[66] !== I ||
  t[67] !== i.renderComposer ||
  t[68] !== T ||
  t[69] !== E ||
  t[70] !== f ||
  t[71] !== y
    ? ((B =
        y && f
          ? (e) =>
              e && he != null
                ? (0, st.createPortal)(
                    (0, O.jsx)(`div`, {
                      className: `px-6 pb-6`,
                      "data-image-preview-composer": !0,
                      inert: T || E,
                      children: (0, O.jsx)(`div`, { ref: I, className: je }),
                    }),
                    he,
                  )
                : null
          : i.renderComposer),
      (t[65] = he),
      (t[66] = I),
      (t[67] = i.renderComposer),
      (t[68] = T),
      (t[69] = E),
      (t[70] = f),
      (t[71] = y),
      (t[72] = B))
    : (B = t[72]);
  let Ft;
  t[73] !== F || t[74] !== i.generatedImages
    ? ((Ft =
        i.generatedImages == null
          ? (e) => {
              e === `pending`
                ? ((w.current = new AbortController()), $e(!0))
                : w.current?.signal.aborted === !1 &&
                  (e === `submitted` ? F() : ((w.current = null), $e(!1)));
            }
          : void 0),
      (t[73] = F),
      (t[74] = i.generatedImages),
      (t[75] = Ft))
    : (Ft = t[75]);
  let V;
  t[76] !== i.generatedImages || t[77] !== N.alt || t[78] !== N.renderHeaderTitle || t[79] !== N.title
    ? ((V =
        N.renderHeaderTitle ??
        (i.generatedImages == null
          ? () => (0, O.jsx)(Se, { fileType: `image`, title: N.title ?? N.alt })
          : void 0)),
      (t[76] = i.generatedImages),
      (t[77] = N.alt),
      (t[78] = N.renderHeaderTitle),
      (t[79] = N.title),
      (t[80] = V))
    : (V = t[80]);
  let H;
  t[81] !== j || t[82] !== N.zoom
    ? ((H = N.zoom ?? { manualZoomPercent: j, onZoomPercentChange: gt, onZoomToFit: () => gt(null) }),
      (t[81] = j),
      (t[82] = N.zoom),
      (t[83] = H))
    : (H = t[83]);
  let U;
  t[84] !== T || t[85] !== L || t[86] !== f || t[87] !== d || t[88] !== y
    ? ((U = (e) =>
        S.current || C.current || T || w.current?.signal.aborted === !1
          ? !0
          : (f && (e !== `markup` || (y && d.get(Ke) == null && d.get(Oe)?.markup == null))) ||
              e === `resize` ||
              e === `remove-background`
            ? !1
            : (L(e), !0)),
      (t[84] = T),
      (t[85] = L),
      (t[86] = f),
      (t[87] = d),
      (t[88] = y),
      (t[89] = U))
    : (U = t[89]);
  let It;
  t[90] !== F ||
  t[91] !== f ||
  t[92] !== k ||
  t[93] !== N ||
  t[94] !== mt ||
  t[95] !== R ||
  t[96] !== Nt ||
  t[97] !== Pt ||
  t[98] !== z ||
  t[99] !== B ||
  t[100] !== Ft ||
  t[101] !== V ||
  t[102] !== H ||
  t[103] !== U ||
  t[104] !== lt
    ? ((It = {
        ...N,
        toolbarRef: mt,
        toolbarDragBoundary: k,
        overlayToolbarHeight: lt,
        imageRef: R,
        hasNavigationGutters: Nt,
        presentation: `overlay`,
        editInOverlay: f,
        editStateRef: Pt,
        onOpenInSidePanel: z,
        renderComposer: B,
        standalone: !0,
        onClose: F,
        onImageEditSubmitStatusChange: Ft,
        renderHeaderTitle: V,
        zoom: H,
        onEditToolSelected: U,
      }),
      (t[90] = F),
      (t[91] = f),
      (t[92] = k),
      (t[93] = N),
      (t[94] = mt),
      (t[95] = R),
      (t[96] = Nt),
      (t[97] = Pt),
      (t[98] = z),
      (t[99] = B),
      (t[100] = Ft),
      (t[101] = V),
      (t[102] = H),
      (t[103] = U),
      (t[104] = lt),
      (t[105] = It))
    : (It = t[105]);
  let W = It,
    G;
  if (i.generatedImages != null && i.initialImageId != null) {
    let e;
    t[106] !== i || t[107] !== P
      ? ((e = (e) => {
          (P(e), vt(e), i.onActiveImageChange?.(e));
        }),
        (t[106] = i),
        (t[107] = P),
        (t[108] = e))
      : (e = t[108]);
    let n;
    t[109] !== i.generatedImages ||
    t[110] !== i.imageAssetResolver ||
    t[111] !== i.initialImageId ||
    t[112] !== W ||
    t[113] !== e
      ? ((n = {
          fallbackImage: W,
          imageAssetResolver: i.imageAssetResolver,
          initialImages: i.generatedImages,
          initialImageId: i.initialImageId,
          onActiveImageChange: e,
          onViewChange: nt,
          view: `single`,
        }),
        (t[109] = i.generatedImages),
        (t[110] = i.imageAssetResolver),
        (t[111] = i.initialImageId),
        (t[112] = W),
        (t[113] = e),
        (t[114] = n))
      : (n = t[114]);
    let r = n;
    if (i.generatedImagesSource === `provided`) {
      let e;
      t[115] === i.generatedImages
        ? (e = t[116])
        : ((e = [{ id: `provided-images`, images: i.generatedImages, turnStartedAtMs: null }]),
          (t[115] = i.generatedImages),
          (t[116] = e));
      let n;
      (t[117] !== r || t[118] !== e
        ? ((n = (0, O.jsx)(Je, {
            ...r,
            conversationId: null,
            conversationTitle: null,
            historicalGeneratedImageGroups: e,
            liveTailGeneratedImageGroup: null,
            optimisticImageEditMessageId: null,
          })),
          (t[117] = r),
          (t[118] = e),
          (t[119] = n))
        : (n = t[119]),
        (G = n));
    } else if (d.value.routeKind === `chatgpt-thread`) {
      let e;
      (t[120] === r ? (e = t[121]) : ((e = (0, O.jsx)(Xe, { ...r })), (t[120] = r), (t[121] = e)), (G = e));
    } else {
      let e;
      (t[122] === r ? (e = t[123]) : ((e = (0, O.jsx)(Ze, { ...r })), (t[122] = r), (t[123] = e)), (G = e));
    }
  } else {
    let e;
    (t[124] !== i.attachmentSrc || t[125] !== W
      ? ((e = (0, O.jsx)(Qe, { ...W }, i.attachmentSrc)),
        (t[124] = i.attachmentSrc),
        (t[125] = W),
        (t[126] = e))
      : (e = t[126]),
      (G = e));
  }
  let Lt = N.sourceImage?.transparentBackground,
    K;
  t[127] === F
    ? (K = t[128])
    : ((K = (e) => {
        e || (p.current?.isEditing ? p.current.cancelEditing() : F());
      }),
      (t[127] = F),
      (t[128] = K));
  let q;
  t[129] === l
    ? (q = t[130])
    : ((q = (e) => {
        S.current ? e.preventDefault() : l?.(e);
      }),
      (t[129] = l),
      (t[130] = q));
  let Rt, zt, Bt;
  t[131] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Rt = (e) => {
        A.current =
          !ee() && !se() && !p.current?.isEditing && e.isPrimary && e.button === 0 && jt(e)
            ? { x: e.clientX, y: e.clientY }
            : null;
      }),
      (zt = (e) => {
        let t = A.current;
        t != null && Math.hypot(e.clientX - t.x, e.clientY - t.y) > 5 && (A.current = null);
      }),
      (Bt = () => {
        A.current = null;
      }),
      (t[131] = Rt),
      (t[132] = zt),
      (t[133] = Bt))
    : ((Rt = t[131]), (zt = t[132]), (Bt = t[133]));
  let J;
  t[134] === F
    ? (J = t[135])
    : ((J = (e) => {
        let t = A.current != null;
        ((A.current = null),
          !p.current?.isEditing && t && e.detail > 0 && !e.defaultPrevented && jt(e) && F());
      }),
      (t[134] = F),
      (t[135] = J));
  let Y;
  t[136] !== T || t[137] !== E || t[138] !== s || t[139] !== o
    ? ((Y = (e) => {
        if (
          S.current ||
          T ||
          E ||
          p.current?.isEditing ||
          e.defaultPrevented ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.nativeEvent.isComposing ||
          !Ve(e.target) ||
          (e.target instanceof Element && e.target.closest(`[role="toolbar"]`))
        )
          return;
        let t;
        (e.key === `ArrowLeft` ? (t = o) : e.key === `ArrowRight` && (t = s),
          t != null && (e.preventDefault(), gt(null), t()));
      }),
      (t[136] = T),
      (t[137] = E),
      (t[138] = s),
      (t[139] = o),
      (t[140] = Y))
    : (Y = t[140]);
  let X;
  t[141] !== c || t[142] !== q || t[143] !== J || t[144] !== Y
    ? ((X = {
        "aria-describedby": void 0,
        onOpenAutoFocus: c,
        onCloseAutoFocus: q,
        onInteractOutside: tt,
        onPointerDownCapture: Rt,
        onPointerMoveCapture: zt,
        onPointerCancelCapture: Bt,
        onClick: J,
        onKeyDown: Y,
      }),
      (t[141] = c),
      (t[142] = q),
      (t[143] = J),
      (t[144] = Y),
      (t[145] = X))
    : (X = t[145]);
  let Vt;
  t[146] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vt = (0, O.jsx)(ve, {
        className: `sr-only`,
        children: (0, O.jsx)(xe, {
          id: `imagePreviewDialog.label`,
          defaultMessage: `Image preview`,
          description: `Accessible label for the image preview dialog`,
        }),
      })),
      (t[146] = Vt))
    : (Vt = t[146]);
  let Z;
  t[147] !== i.generatedImages || t[148] !== b || t[149] !== T || t[150] !== E || t[151] !== o
    ? ((Z =
        i.generatedImages == null
          ? (0, O.jsx)(`div`, {
              className: `pointer-events-none relative z-30 flex w-18 shrink-0 items-center justify-center`,
              children:
                o == null
                  ? null
                  : (0, O.jsx)(ae, {
                      className: `pointer-events-auto`,
                      disabled: T || E,
                      uniform: !0,
                      "aria-label": b.formatMessage({
                        id: `imagePreviewDialog.previousImage`,
                        defaultMessage: `Previous image`,
                        description: `Button to show the previous image in the image preview gallery`,
                      }),
                      onClick: () => {
                        p.current?.isEditing || (gt(null), o());
                      },
                      children: (0, O.jsx)(ne, {}),
                    }),
            })
          : null),
      (t[147] = i.generatedImages),
      (t[148] = b),
      (t[149] = T),
      (t[150] = E),
      (t[151] = o),
      (t[152] = Z))
    : (Z = t[152]);
  let Ht = T || E,
    Q;
  t[153] !== G || t[154] !== Ht
    ? ((Q = (0, O.jsx)(`div`, {
        ref: ht,
        className: `@container relative min-h-0 min-w-0 flex-1`,
        inert: Ht,
        children: G,
      })),
      (t[153] = G),
      (t[154] = Ht),
      (t[155] = Q))
    : (Q = t[155]);
  let Ut;
  t[156] !== i.generatedImages || t[157] !== b || t[158] !== T || t[159] !== E || t[160] !== s
    ? ((Ut =
        i.generatedImages == null
          ? (0, O.jsx)(`div`, {
              className: `pointer-events-none relative z-30 flex w-18 shrink-0 items-center justify-center`,
              children:
                s == null
                  ? null
                  : (0, O.jsx)(ae, {
                      className: `pointer-events-auto`,
                      disabled: T || E,
                      uniform: !0,
                      "aria-label": b.formatMessage({
                        id: `imagePreviewDialog.nextImage`,
                        defaultMessage: `Next image`,
                        description: `Button to show the next image in the image preview gallery`,
                      }),
                      onClick: () => {
                        p.current?.isEditing || (gt(null), s());
                      },
                      children: (0, O.jsx)(re, {}),
                    }),
            })
          : null),
      (t[156] = i.generatedImages),
      (t[157] = b),
      (t[158] = T),
      (t[159] = E),
      (t[160] = s),
      (t[161] = Ut))
    : (Ut = t[161]);
  let Wt;
  t[162] !== Z || t[163] !== Q || t[164] !== Ut
    ? ((Wt = (0, O.jsxs)(`div`, { className: `flex min-h-0 flex-1`, children: [Z, Q, Ut] })),
      (t[162] = Z),
      (t[163] = Q),
      (t[164] = Ut),
      (t[165] = Wt))
    : (Wt = t[165]);
  let Gt;
  t[166] === u
    ? (Gt = t[167])
    : ((Gt =
        u == null
          ? null
          : (0, O.jsx)(`div`, {
              className: `flex min-w-0 items-center justify-center gap-3 p-4 text-sm`,
              children: u,
            })),
      (t[166] = u),
      (t[167] = Gt));
  let Kt;
  t[168] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Kt = (0, O.jsx)(`div`, { ref: ye })), (t[168] = Kt))
    : (Kt = t[168]);
  let qt;
  t[169] !== I || t[170] !== T || t[171] !== E || t[172] !== f || t[173] !== y
    ? ((qt =
        !y || f
          ? null
          : (0, O.jsx)(`div`, {
              className: `px-6 pb-6`,
              "data-image-preview-composer": !0,
              inert: T || E,
              children: (0, O.jsx)(`div`, { ref: I, className: je }),
            })),
      (t[169] = I),
      (t[170] = T),
      (t[171] = E),
      (t[172] = f),
      (t[173] = y),
      (t[174] = qt))
    : (qt = t[174]);
  let Jt;
  t[175] !== Ue || t[176] !== Gt || t[177] !== qt
    ? ((Jt = (0, O.jsxs)(`div`, { ref: Ue, className: `relative z-30 shrink-0`, children: [Gt, Kt, qt] })),
      (t[175] = Ue),
      (t[176] = Gt),
      (t[177] = qt),
      (t[178] = Jt))
    : (Jt = t[178]);
  let $;
  t[179] !== Wt || t[180] !== Jt
    ? (($ = (0, O.jsxs)(`div`, { className: `relative flex h-full min-h-0 flex-col`, children: [Wt, Jt] })),
      (t[179] = Wt),
      (t[180] = Jt),
      (t[181] = $))
    : ($ = t[181]);
  let Yt;
  return (
    t[182] !== Lt || t[183] !== K || t[184] !== X || t[185] !== $
      ? ((Yt = (0, O.jsxs)(ce, {
          open: !0,
          variant: `image`,
          transparentImage: Lt,
          showDialogClose: !1,
          viewportSized: !0,
          overlayClassName: Ne.backdrop,
          contentClassName: Ne.chrome,
          onOpenChange: K,
          contentProps: X,
          children: [Vt, $],
        })),
        (t[182] = Lt),
        (t[183] = K),
        (t[184] = X),
        (t[185] = $),
        (t[186] = Yt))
      : (Yt = t[186]),
    Yt
  );
}
function tt(e) {
  return e.preventDefault();
}
function nt() {}
async function rt(e) {
  if (e != null)
    try {
      await e.decode();
    } catch {}
  return e;
}
function it(e, t) {
  t.parentElement?.style.setProperty(`--image-preview-footer-height`, `${Ce(e).height}px`);
}
var at, ot, D, st, O;
function ct() {
  return (ct = e(() => {
    ((at = u()),
      i(),
      (ot = t(a(), 1)),
      f(),
      ye(),
      De(),
      (D = o()),
      (st = s()),
      ue(),
      m(),
      w(),
      c(),
      oe(),
      d(),
      g(),
      Ye(),
      E(),
      T(),
      S(),
      he(),
      x(),
      y(),
      We(),
      ie(),
      l(),
      p(),
      de(),
      Ue(),
      C(),
      Me(),
      b(),
      h(),
      _(),
      v(),
      (O = te()));
  }))();
}
ct();
export { $e as ImagePreviewOverlay };
//# sourceMappingURL=overlay-20cf83543bf4.js.map
