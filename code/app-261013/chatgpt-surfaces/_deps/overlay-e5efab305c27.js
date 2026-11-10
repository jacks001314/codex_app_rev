import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bpt as n,
  CPt as r,
  CS as i,
  FD as a,
  IDt as o,
  IV as s,
  Ixt as c,
  JR as l,
  ND as u,
  Pxt as d,
  RV as ee,
  Rpt as te,
  SPt as f,
  TJ as ne,
  UD as re,
  VDt as ie,
  YR as ae,
  _O as oe,
  aj as se,
  bz as ce,
  jDt as le,
  mO as ue,
  nE as de,
  oj as fe,
  rst as pe,
  sMt as p,
  tE as me,
  vO as he,
  vzt as m,
  xMt as ge,
  xz as _e,
  yMt as h,
  yzt as g,
  zxt as ve,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ci as ye,
  Cwr as _,
  Ei as be,
  H5t as xe,
  JHt as Se,
  MTn as Ce,
  Ni as we,
  Oi as v,
  Pi as y,
  V5t as b,
  W5t as Te,
  _i as x,
  _s as Ee,
  bs as De,
  ci as Oe,
  fJn as ke,
  gwr as Ae,
  hJn as je,
  hi as Me,
  hs as Ne,
  ji as Pe,
  kTn as Fe,
  qHt as Ie,
  si as S,
  ys as C,
} from "./app-initial-5851df3f6cb1.js";
import { n as Le, t as w } from "./composer-scope-provider-cb17532fb9ac.js";
import {
  a as Re,
  i as ze,
  n as Be,
  o as Ve,
  r as He,
  t as Ue,
} from "./local-generated-image-side-panel-7b37869cd190.js";
import { n as We, t as Ge } from "./image-side-panel-35356e8bb6f2.js";
function Ke(e) {
  let t = (0, Qe.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, E.jsx)(w, { children: (0, E.jsx)(qe, { ...e }) })), (t[0] = e), (t[1] = n)),
    n
  );
}
function qe(e) {
  let t = (0, Qe.c)(161),
    {
      image: i,
      onClose: l,
      onPreviousImage: u,
      onNextImage: d,
      onOpenAutoFocus: f,
      onCloseAutoFocus: ne,
      getThumbnail: se,
      bottomContent: ce,
      hideComposer: le,
    } = e,
    pe = le !== void 0 && le,
    p = c(Ae),
    he = (0, T.useId)(),
    m = i.viewerId ?? he,
    ge = ve(we, m),
    h = (0, T.useContext)(Ie),
    g = !pe && h?.composerHost != null && !i.readOnly,
    _ = (0, T.useRef)(null),
    Se = a(Ze),
    Ce;
  t[0] !== h?.target || t[1] !== p
    ? ((Ce = () => ({ composer: h?.target, imageContext: p.get(ye) })),
      (t[0] = h?.target),
      (t[1] = p),
      (t[2] = Ce))
    : (Ce = t[2]);
  let [v] = (0, T.useState)(Ce),
    y = ie(),
    b = ae(),
    x = (0, T.useRef)(!1),
    je = (0, T.useRef)(!1),
    Ne = (0, T.useRef)(null),
    S = (0, T.useRef)(null),
    [C, Le] = (0, T.useState)(!1),
    [w, ze] = (0, T.useState)(!1),
    Be = (0, T.useRef)(null),
    Ve = (0, T.useRef)(null),
    [We, Ke] = (0, T.useState)(0),
    qe;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (e) => {
        Ke(re(e).height);
      }),
      (t[3] = qe))
    : (qe = t[3]);
  let tt = a(qe),
    nt;
  t[4] === tt
    ? (nt = t[5])
    : ((nt = (e) => {
        ((Ve.current = e), tt(e), Ke(e?.offsetHeight ?? 0));
      }),
      (t[4] = tt),
      (t[5] = nt));
  let rt = _e(nt),
    [D, it] = (0, T.useState)(null),
    O = (0, T.useRef)(null),
    [k, at] = (0, T.useState)(null),
    ot;
  t[6] !== i.generatedImages || t[7] !== i.initialImageId
    ? ((ot = i.generatedImages?.find((e) => e.id === i.initialImageId)),
      (t[6] = i.generatedImages),
      (t[7] = i.initialImageId),
      (t[8] = ot))
    : (ot = t[8]);
  let [A, st] = (0, T.useState)(ot),
    ct;
  if (t[9] !== A || t[10] !== i || t[11] !== m || t[12] !== ge) {
    let e = A == null ? void 0 : Pe(ge, A);
    ((ct =
      e == null
        ? { ...i, viewerId: m }
        : {
            ...i,
            viewerId: m,
            alt: e.alt,
            attachmentId: Me(e.id),
            attachmentSrc: e.src,
            imageId: e.id,
            isAnimated: e.isAnimated,
            sourceImage: e.sourceImage,
            src: e.previewSrc,
            downloadSrc: e.src,
            title: e.tabTitle,
          }),
      (t[9] = A),
      (t[10] = i),
      (t[11] = m),
      (t[12] = ge),
      (t[13] = ct));
  } else ct = t[13];
  let j = ct,
    lt;
  (t[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((lt = []), (t[14] = lt)) : (lt = t[14]),
    (0, T.useEffect)(xe, lt));
  let ut, dt;
  (t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = () => () => S.current?.abort()), (dt = []), (t[15] = ut), (t[16] = dt))
    : ((ut = t[15]), (dt = t[16])),
    (0, T.useEffect)(ut, dt));
  let ft;
  t[17] !== h ||
  t[18] !== i.imageEditAttribution ||
  t[19] !== i.readOnly ||
  t[20] !== i.sourceImage ||
  t[21] !== p ||
  t[22] !== g ||
  t[23] !== m
    ? ((ft = function (e) {
        if (!g || (_.current != null && h.target?.container !== _.current)) return;
        let t = e?.sourceImage ?? i.sourceImage,
          n =
            !i.readOnly && t?.status === `completed` && t.src != null && ke(t.src) != null
              ? { image: t, attribution: i.imageEditAttribution, viewerId: m }
              : null,
          r = p.get(ye);
        (r == null ||
          r.target?.image !== n?.image ||
          r.target?.attribution !== n?.attribution ||
          r.target?.viewerId !== n?.viewerId) &&
          p.set(ye, {
            target: n,
            useImageEditDraft:
              r?.useImageEditDraft ??
              (i.imageEditAttribution?.editEntryPoint === `composer` || n == null ? p.get(be) : !0),
          });
      }),
      (t[17] = h),
      (t[18] = i.imageEditAttribution),
      (t[19] = i.readOnly),
      (t[20] = i.sourceImage),
      (t[21] = p),
      (t[22] = g),
      (t[23] = m),
      (t[24] = ft))
    : (ft = t[24]);
  let M = ft,
    pt;
  t[25] !== se || t[26] !== l || t[27] !== b || t[28] !== j.imageId
    ? ((pt = function () {
        if (je.current) return;
        ((je.current = !0), Ne.current?.abort(), S.current?.abort());
        let e = se?.(j.imageId);
        if (e == null || !e.isConnected) {
          l();
          return;
        }
        let t = e.getBoundingClientRect(),
          n = e.ownerDocument.defaultView,
          r = Math.max(0, t.left),
          i = Math.max(0, t.top),
          a = Math.min(t.right, n?.innerWidth ?? t.right),
          o = Math.min(t.bottom, n?.innerHeight ?? t.bottom);
        if (a <= r || o <= i) {
          l();
          return;
        }
        for (let t = e.parentElement; t != null; t = t.parentElement) {
          let e = getComputedStyle(t),
            n = [`auto`, `scroll`, `hidden`, `clip`].includes(e.overflowX),
            s = [`auto`, `scroll`, `hidden`, `clip`].includes(e.overflowY);
          if (!n && !s) continue;
          let c = t.getBoundingClientRect();
          if (
            (n && ((r = Math.max(r, c.left)), (a = Math.min(a, c.right))),
            s && ((i = Math.max(i, c.top)), (o = Math.min(o, c.bottom))),
            a <= r || o <= i)
          ) {
            l();
            return;
          }
        }
        Ee({ source: Be.current, kind: `close`, reducedMotion: b, destination: () => e, update: l });
      }),
      (t[25] = se),
      (t[26] = l),
      (t[27] = b),
      (t[28] = j.imageId),
      (t[29] = pt))
    : (pt = t[29]);
  let N = pt,
    mt;
  t[30] !== N || t[31] !== h?.target?.container
    ? ((mt = () => {
        let e = _.current;
        e?.isConnected && h?.target?.container === e && N();
      }),
      (t[30] = N),
      (t[31] = h?.target?.container),
      (t[32] = mt))
    : (mt = t[32]);
  let ht = _e(mt),
    gt;
  t[33] !== h || t[34] !== v || t[35] !== p
    ? ((gt = (e) => {
        if (h?.target?.container !== e) return;
        let t = v.composer?.container.isConnected ? v.composer : null;
        (p.set(ye, t == null ? null : v.imageContext), h.setTarget(t));
      }),
      (t[33] = h),
      (t[34] = v),
      (t[35] = p),
      (t[36] = gt))
    : (gt = t[36]);
  let _t = _e(gt),
    vt;
  t[37] !== A || t[38] !== ht || t[39] !== h || t[40] !== _t || t[41] !== M || t[42] !== g
    ? ((vt = (e) => {
        if (e != null && g)
          return (
            M(A),
            (_.current = e),
            h.setTarget({ container: e, onSubmitSuccess: ht }),
            () => {
              ((_.current = null), _t(e));
            }
          );
      }),
      (t[37] = A),
      (t[38] = ht),
      (t[39] = h),
      (t[40] = _t),
      (t[41] = M),
      (t[42] = g),
      (t[43] = vt))
    : (vt = t[43]);
  let yt = _e(vt),
    bt;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = function (e) {
        let t = e.target;
        if (
          !(t instanceof Element) ||
          !e.currentTarget.contains(t) ||
          t.closest(
            `button, a, input, textarea, select, [role="toolbar"], [role="menu"], [role="menuitem"], [data-annotation-control], [data-image-preview-composer], [contenteditable="true"]`,
          )
        )
          return !1;
        let n = Be.current?.getBoundingClientRect();
        return (
          n == null || e.clientX < n.left || e.clientX > n.right || e.clientY < n.top || e.clientY > n.bottom
        );
      }),
      (t[44] = bt))
    : (bt = t[44]);
  let xt = bt,
    P;
  t[45] !== A || t[46] !== i.imageRef || t[47] !== M
    ? ((P = (e) => {
        (fe(Be, i.imageRef)(e), e != null && M(A));
      }),
      (t[45] = A),
      (t[46] = i.imageRef),
      (t[47] = M),
      (t[48] = P))
    : (P = t[48]);
  let St = i.generatedImages == null,
    F;
  t[49] !== N || t[50] !== i.generatedImages
    ? ((F =
        i.generatedImages == null
          ? (e) => {
              e === `pending`
                ? ((S.current = new AbortController()), ze(!0))
                : S.current?.signal.aborted === !1 &&
                  (e === `submitted` ? N() : ((S.current = null), ze(!1)));
            }
          : void 0),
      (t[49] = N),
      (t[50] = i.generatedImages),
      (t[51] = F))
    : (F = t[51]);
  let I;
  t[52] !== i.generatedImages || t[53] !== j.alt || t[54] !== j.renderHeaderTitle || t[55] !== j.title
    ? ((I =
        j.renderHeaderTitle ??
        (i.generatedImages == null
          ? () => (0, E.jsx)(me, { fileType: `image`, title: j.title ?? j.alt })
          : void 0)),
      (t[52] = i.generatedImages),
      (t[53] = j.alt),
      (t[54] = j.renderHeaderTitle),
      (t[55] = j.title),
      (t[56] = I))
    : (I = t[56]);
  let L;
  t[57] !== k || t[58] !== j.zoom
    ? ((L = j.zoom ?? { manualZoomPercent: k, onZoomPercentChange: at, onZoomToFit: () => at(null) }),
      (t[57] = k),
      (t[58] = j.zoom),
      (t[59] = L))
    : (L = t[59]);
  let R;
  t[60] !== A ||
  t[61] !== i ||
  t[62] !== C ||
  t[63] !== k ||
  t[64] !== l ||
  t[65] !== D?.isConnected ||
  t[66] !== b ||
  t[67] !== p ||
  t[68] !== j
    ? ((R = (e) => {
        if (x.current || je.current || C || S.current?.signal.aborted === !1) return !0;
        if (e === `resize` || e === `remove-background`) return !1;
        let t = Be.current,
          a =
            t != null && t.naturalWidth > 0 ? (t.getBoundingClientRect().width / t.naturalWidth) * 100 : null,
          o = new AbortController();
        Ne.current = o;
        let s = n(),
          c = null,
          u = !1,
          d = !1,
          ee = (0, T.createRef)(),
          f = () => {
            u && c != null && !o.signal.aborted && ((u = !1), c.startEditing(e));
          },
          ne = te(s.promise.then(Xe), o.signal)
            .catch((e) => {
              if (!o.signal.aborted) throw e;
              return null;
            })
            .then((e) => (d && !o.signal.aborted && (0, et.flushSync)(l), o.signal.aborted ? null : e));
        Le(!0);
        let re = Ee({
          source: t,
          destination: () => ne,
          toolbar: { source: Ve.current, destination: () => ee.current },
          kind: `edit`,
          reducedMotion: b,
          signal: o.signal,
          update: () => {
            if (je.current || !D?.isConnected) {
              o.abort();
              return;
            }
            x.current = !0;
            try {
              ((d = Oe(
                p,
                {
                  ...i,
                  ...j,
                  generatedImages:
                    i.generatedImages == null || A == null
                      ? i.generatedImages
                      : (0, $e.default)([...i.generatedImages, A], `id`),
                  initialImageId: j.imageId ?? i.initialImageId,
                  initialEditTool: void 0,
                  onImageEditSubmit: i.onImageEditSubmit,
                  entrypoint: `lightbox_edit_button`,
                  title: j.title ?? j.alt,
                  initialZoomPercent: j.zoom?.manualZoomPercent ?? k ?? a,
                  openInEditor: !0,
                  imageRef: (e) => {
                    e != null && s?.resolve(e);
                  },
                  onImageError: () => {
                    (s?.resolve(null), i.onImageError?.());
                  },
                  ref: (e) => {
                    ((c = e), f());
                  },
                  toolbarRef: ee,
                },
                {
                  durableIdentity:
                    A != null && i.imageAssetResolver == null && p.value.routeKind === `local-thread`
                      ? { imageItemId: A.id, source: `generated-image` }
                      : void 0,
                  onClose: () => {
                    s != null && (o.abort(), (x.current = !1), Le(!1));
                  },
                  onRenderError: () => {
                    s != null && !o.signal.aborted && (o.abort(), l());
                  },
                },
              )),
                d || (o.abort(), (x.current = !1), Le(!1)));
            } catch (e) {
              let t = e;
              (o.abort(),
                (x.current = !1),
                Le(!1),
                r.error(`Failed to open image editor`, { safe: {}, sensitive: { error: t } }));
            }
          },
        });
        return (
          Promise.all([re, ne]).then((e) => {
            let [, t] = e;
            ((s = null), (Ne.current = null), (u = d && t != null), f());
          }),
          !0
        );
      }),
      (t[60] = A),
      (t[61] = i),
      (t[62] = C),
      (t[63] = k),
      (t[64] = l),
      (t[65] = D?.isConnected),
      (t[66] = b),
      (t[67] = p),
      (t[68] = j),
      (t[69] = R))
    : (R = t[69]);
  let Ct;
  t[70] !== N ||
  t[71] !== D ||
  t[72] !== j ||
  t[73] !== rt ||
  t[74] !== P ||
  t[75] !== St ||
  t[76] !== F ||
  t[77] !== I ||
  t[78] !== L ||
  t[79] !== R ||
  t[80] !== We
    ? ((Ct = {
        ...j,
        toolbarRef: rt,
        toolbarDragBoundary: D,
        overlayToolbarHeight: We,
        imageRef: P,
        hasNavigationGutters: St,
        presentation: `overlay`,
        standalone: !0,
        onClose: N,
        onImageEditSubmitStatusChange: F,
        renderHeaderTitle: I,
        zoom: L,
        onEditToolSelected: R,
      }),
      (t[70] = N),
      (t[71] = D),
      (t[72] = j),
      (t[73] = rt),
      (t[74] = P),
      (t[75] = St),
      (t[76] = F),
      (t[77] = I),
      (t[78] = L),
      (t[79] = R),
      (t[80] = We),
      (t[81] = Ct))
    : (Ct = t[81]);
  let z = Ct,
    B;
  if (i.generatedImages != null && i.initialImageId != null) {
    let e;
    t[82] !== i || t[83] !== M
      ? ((e = (e) => {
          (M(e), st(e), i.onActiveImageChange?.(e));
        }),
        (t[82] = i),
        (t[83] = M),
        (t[84] = e))
      : (e = t[84]);
    let n;
    t[85] !== i.generatedImages ||
    t[86] !== i.imageAssetResolver ||
    t[87] !== i.initialImageId ||
    t[88] !== z ||
    t[89] !== e
      ? ((n = {
          fallbackImage: z,
          imageAssetResolver: i.imageAssetResolver,
          initialImages: i.generatedImages,
          initialImageId: i.initialImageId,
          onActiveImageChange: e,
          onViewChange: Ye,
          view: `single`,
        }),
        (t[85] = i.generatedImages),
        (t[86] = i.imageAssetResolver),
        (t[87] = i.initialImageId),
        (t[88] = z),
        (t[89] = e),
        (t[90] = n))
      : (n = t[90]);
    let r = n;
    if (i.generatedImagesSource === `provided`) {
      let e;
      t[91] === i.generatedImages
        ? (e = t[92])
        : ((e = [{ id: `provided-images`, images: i.generatedImages, turnStartedAtMs: null }]),
          (t[91] = i.generatedImages),
          (t[92] = e));
      let n;
      (t[93] !== r || t[94] !== e
        ? ((n = (0, E.jsx)(Re, {
            ...r,
            conversationId: null,
            conversationTitle: null,
            historicalGeneratedImageGroups: e,
            liveTailGeneratedImageGroup: null,
            optimisticImageEditMessageId: null,
          })),
          (t[93] = r),
          (t[94] = e),
          (t[95] = n))
        : (n = t[95]),
        (B = n));
    } else if (p.value.routeKind === `chatgpt-thread`) {
      let e;
      (t[96] === r ? (e = t[97]) : ((e = (0, E.jsx)(He, { ...r })), (t[96] = r), (t[97] = e)), (B = e));
    } else {
      let e;
      (t[98] === r ? (e = t[99]) : ((e = (0, E.jsx)(Ue, { ...r })), (t[98] = r), (t[99] = e)), (B = e));
    }
  } else {
    let e;
    (t[100] !== i.attachmentSrc || t[101] !== z
      ? ((e = (0, E.jsx)(Ge, { ...z }, i.attachmentSrc)),
        (t[100] = i.attachmentSrc),
        (t[101] = z),
        (t[102] = e))
      : (e = t[102]),
      (B = e));
  }
  let wt = j.sourceImage?.transparentBackground,
    V;
  t[103] === N
    ? (V = t[104])
    : ((V = (e) => {
        e || N();
      }),
      (t[103] = N),
      (t[104] = V));
  let H;
  t[105] === ne
    ? (H = t[106])
    : ((H = (e) => {
        x.current ? e.preventDefault() : ne?.(e);
      }),
      (t[105] = ne),
      (t[106] = H));
  let Tt, Et, Dt;
  t[107] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = (e) => {
        O.current = e.isPrimary && e.button === 0 && xt(e) ? { x: e.clientX, y: e.clientY } : null;
      }),
      (Et = (e) => {
        let t = O.current;
        t != null && Math.hypot(e.clientX - t.x, e.clientY - t.y) > 5 && (O.current = null);
      }),
      (Dt = () => {
        O.current = null;
      }),
      (t[107] = Tt),
      (t[108] = Et),
      (t[109] = Dt))
    : ((Tt = t[107]), (Et = t[108]), (Dt = t[109]));
  let U;
  t[110] === N
    ? (U = t[111])
    : ((U = (e) => {
        let t = O.current != null;
        ((O.current = null), t && e.detail > 0 && !e.defaultPrevented && xt(e) && N());
      }),
      (t[110] = N),
      (t[111] = U));
  let W;
  t[112] !== C || t[113] !== w || t[114] !== d || t[115] !== u
    ? ((W = (e) => {
        if (
          x.current ||
          C ||
          w ||
          e.defaultPrevented ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.nativeEvent.isComposing ||
          !Te(e.target) ||
          (e.target instanceof Element && e.target.closest(`[role="toolbar"]`))
        )
          return;
        let t;
        (e.key === `ArrowLeft` ? (t = u) : e.key === `ArrowRight` && (t = d),
          t != null && (e.preventDefault(), at(null), t()));
      }),
      (t[112] = C),
      (t[113] = w),
      (t[114] = d),
      (t[115] = u),
      (t[116] = W))
    : (W = t[116]);
  let G;
  t[117] !== f || t[118] !== H || t[119] !== U || t[120] !== W
    ? ((G = {
        "aria-describedby": void 0,
        onOpenAutoFocus: f,
        onCloseAutoFocus: H,
        onInteractOutside: Je,
        onPointerDownCapture: Tt,
        onPointerMoveCapture: Et,
        onPointerCancelCapture: Dt,
        onClick: U,
        onKeyDown: W,
      }),
      (t[117] = f),
      (t[118] = H),
      (t[119] = U),
      (t[120] = W),
      (t[121] = G))
    : (G = t[121]);
  let Ot;
  t[122] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ot = (0, E.jsx)(oe, {
        className: `sr-only`,
        children: (0, E.jsx)(o, {
          id: `imagePreviewDialog.label`,
          defaultMessage: `Image preview`,
          description: `Accessible label for the image preview dialog`,
        }),
      })),
      (t[122] = Ot))
    : (Ot = t[122]);
  let K;
  t[123] !== i.generatedImages || t[124] !== y || t[125] !== C || t[126] !== w || t[127] !== u
    ? ((K =
        i.generatedImages == null
          ? (0, E.jsx)(`div`, {
              className: `pointer-events-none relative z-30 flex w-18 shrink-0 items-center justify-center`,
              children:
                u == null
                  ? null
                  : (0, E.jsx)(de, {
                      className: `pointer-events-auto`,
                      disabled: C || w,
                      uniform: !0,
                      "aria-label": y.formatMessage({
                        id: `imagePreviewDialog.previousImage`,
                        defaultMessage: `Previous image`,
                        description: `Button to show the previous image in the image preview gallery`,
                      }),
                      onClick: () => {
                        (at(null), u());
                      },
                      children: (0, E.jsx)(s, {}),
                    }),
            })
          : null),
      (t[123] = i.generatedImages),
      (t[124] = y),
      (t[125] = C),
      (t[126] = w),
      (t[127] = u),
      (t[128] = K))
    : (K = t[128]);
  let kt = C || w,
    q;
  t[129] !== B || t[130] !== kt
    ? ((q = (0, E.jsx)(`div`, {
        ref: it,
        className: `@container relative min-h-0 min-w-0 flex-1`,
        inert: kt,
        children: B,
      })),
      (t[129] = B),
      (t[130] = kt),
      (t[131] = q))
    : (q = t[131]);
  let J;
  t[132] !== i.generatedImages || t[133] !== y || t[134] !== C || t[135] !== w || t[136] !== d
    ? ((J =
        i.generatedImages == null
          ? (0, E.jsx)(`div`, {
              className: `pointer-events-none relative z-30 flex w-18 shrink-0 items-center justify-center`,
              children:
                d == null
                  ? null
                  : (0, E.jsx)(de, {
                      className: `pointer-events-auto`,
                      disabled: C || w,
                      uniform: !0,
                      "aria-label": y.formatMessage({
                        id: `imagePreviewDialog.nextImage`,
                        defaultMessage: `Next image`,
                        description: `Button to show the next image in the image preview gallery`,
                      }),
                      onClick: () => {
                        (at(null), d());
                      },
                      children: (0, E.jsx)(ee, {}),
                    }),
            })
          : null),
      (t[132] = i.generatedImages),
      (t[133] = y),
      (t[134] = C),
      (t[135] = w),
      (t[136] = d),
      (t[137] = J))
    : (J = t[137]);
  let Y;
  t[138] !== K || t[139] !== q || t[140] !== J
    ? ((Y = (0, E.jsxs)(`div`, { className: `flex min-h-0 flex-1`, children: [K, q, J] })),
      (t[138] = K),
      (t[139] = q),
      (t[140] = J),
      (t[141] = Y))
    : (Y = t[141]);
  let X;
  t[142] === ce
    ? (X = t[143])
    : ((X =
        ce == null
          ? null
          : (0, E.jsx)(`div`, {
              className: `flex min-w-0 items-center justify-center gap-3 p-4 text-sm`,
              children: ce,
            })),
      (t[142] = ce),
      (t[143] = X));
  let Z;
  t[144] !== yt || t[145] !== C || t[146] !== w || t[147] !== g
    ? ((Z = g
        ? (0, E.jsx)(`div`, {
            className: `px-6 pb-6`,
            "data-image-preview-composer": !0,
            inert: C || w,
            children: (0, E.jsx)(`div`, { ref: yt, className: Fe }),
          })
        : null),
      (t[144] = yt),
      (t[145] = C),
      (t[146] = w),
      (t[147] = g),
      (t[148] = Z))
    : (Z = t[148]);
  let Q;
  t[149] !== Se || t[150] !== X || t[151] !== Z
    ? ((Q = (0, E.jsxs)(`div`, { ref: Se, className: `relative z-30 shrink-0`, children: [X, Z] })),
      (t[149] = Se),
      (t[150] = X),
      (t[151] = Z),
      (t[152] = Q))
    : (Q = t[152]);
  let $;
  t[153] !== Y || t[154] !== Q
    ? (($ = (0, E.jsxs)(`div`, { className: `relative flex h-full min-h-0 flex-col`, children: [Y, Q] })),
      (t[153] = Y),
      (t[154] = Q),
      (t[155] = $))
    : ($ = t[155]);
  let At;
  return (
    t[156] !== wt || t[157] !== V || t[158] !== G || t[159] !== $
      ? ((At = (0, E.jsxs)(ue, {
          open: !0,
          variant: `image`,
          transparentImage: wt,
          showDialogClose: !1,
          viewportSized: !0,
          overlayClassName: De.backdrop,
          contentClassName: De.chrome,
          onOpenChange: V,
          contentProps: G,
          children: [Ot, $],
        })),
        (t[156] = wt),
        (t[157] = V),
        (t[158] = G),
        (t[159] = $),
        (t[160] = At))
      : (At = t[160]),
    At
  );
}
function Je(e) {
  return e.preventDefault();
}
function Ye() {}
async function Xe(e) {
  if (e != null)
    try {
      await e.decode();
    } catch {}
  return e;
}
function Ze(e, t) {
  t.parentElement?.style.setProperty(`--image-preview-footer-height`, `${re(e).height}px`);
}
var Qe, $e, T, et, E;
function tt() {
  return (tt = e(() => {
    ((Qe = m()),
      ($e = t(p(), 1)),
      d(),
      pe(),
      je(),
      (T = g()),
      (et = h()),
      le(),
      v(),
      ze(),
      he(),
      ne(),
      l(),
      x(),
      Ve(),
      We(),
      Be(),
      u(),
      _(),
      Ce(),
      f(),
      se(),
      ce(),
      i(),
      Se(),
      Le(),
      y(),
      S(),
      b(),
      Ne(),
      C(),
      (E = ge()));
  }))();
}
tt();
export { Ke as ImagePreviewOverlay };
//# sourceMappingURL=overlay-e5efab305c27.js.map
