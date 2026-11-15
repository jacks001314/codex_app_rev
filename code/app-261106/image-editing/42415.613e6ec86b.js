export const __rspack_esm_ids = [42415]
export const __webpack_modules__ = {
  dJh0(e, t, n) {
    n.d(t, { ChatGptImageComparison: () => M })
    var a = n("ABep"),
      r = n("QosV"),
      s = n("slpy")
    let i = (0, n("iJY0").a)({
      name: "image-caption-half-fill-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        visualBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        center: { x: 8, y: 8 },
        insets: { top: 1.474609, right: 1.47461, bottom: 1.47461, left: 1.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.33301 1.47461C7.62296 1.47461 7.8584 1.71005 7.8584 2V14C7.8584 14.2899 7.62296 14.5254 7.33301 14.5254C7.04317 14.5253 6.80762 14.2899 6.80762 14V13.5254H6.48047C5.70529 13.5254 5.0918 13.5256 4.59863 13.4854C4.09926 13.4446 3.67586 13.3587 3.29004 13.1621C2.66483 12.8434 2.15659 12.3352 1.83789 11.71C1.6413 11.3241 1.55545 10.9007 1.51465 10.4014C1.47438 9.9082 1.47461 9.29471 1.47461 8.51953V7.48047C1.47461 6.70529 1.47438 6.0918 1.51465 5.59863C1.55545 5.09926 1.6413 4.67586 1.83789 4.29004C2.15659 3.66483 2.66483 3.15659 3.29004 2.83789C3.67586 2.6413 4.09926 2.55545 4.59863 2.51465C5.0918 2.47438 5.70529 2.47461 6.48047 2.47461H6.80762V2C6.80762 1.71013 7.04317 1.47474 7.33301 1.47461Z" fill="currentColor"/> <path d="M10.5869 2.47461C11.1754 2.47461 11.6483 2.47467 12.0303 2.50586C12.4184 2.53757 12.7588 2.60449 13.0732 2.76465C13.5734 3.01951 13.9805 3.42656 14.2354 3.92676C14.3955 4.2412 14.4624 4.58163 14.4941 4.96973C14.5253 5.35169 14.5254 5.82463 14.5254 6.41309V9.58691C14.5254 10.1754 14.5253 10.6483 14.4941 11.0303C14.4624 11.4184 14.3955 11.7588 14.2354 12.0732C13.9805 12.5734 13.5734 12.9805 13.0732 13.2354C12.7588 13.3955 12.4184 13.4624 12.0303 13.4941C11.6483 13.5253 11.1754 13.5254 10.5869 13.5254H9.83301C9.54321 13.5252 9.30859 13.2898 9.30859 13C9.30859 12.7102 9.54321 12.4748 9.83301 12.4746H10.5869C11.1928 12.4746 11.616 12.4742 11.9453 12.4473C12.2683 12.4209 12.4549 12.372 12.5967 12.2998C12.8993 12.1456 13.1456 11.8993 13.2998 11.5967C13.372 11.4549 13.4209 11.2683 13.4473 10.9453C13.4742 10.616 13.4746 10.1928 13.4746 9.58691V6.41309C13.4746 5.80717 13.4742 5.38404 13.4473 5.05469C13.4209 4.7317 13.372 4.54509 13.2998 4.40332C13.1456 4.10069 12.8993 3.85439 12.5967 3.7002C12.4549 3.628 12.2683 3.57914 11.9453 3.55273C11.616 3.52583 11.1928 3.52539 10.5869 3.52539H9.83301C9.54321 3.52521 9.30859 3.28984 9.30859 3C9.30859 2.71016 9.54321 2.47479 9.83301 2.47461H10.5869Z" fill="currentColor"/>',
    })
    var o = n("YAOF"),
      l = n("on57"),
      c = n("zTeN"),
      d = n("zd8w"),
      u = n("Wf1j"),
      g = n("OAko"),
      m = n("Sm6l"),
      h = n("HOLv"),
      f = n("bVeK"),
      p = n("yGJW"),
      C = n("OWtl"),
      b = n("zHp1"),
      x = n("taWv"),
      v = n("GTfO"),
      w = n("SZCv"),
      _ = n.n(w),
      y = n("AuIy"),
      j = n("ccwJ"),
      k = n("Wc42"),
      N = n("MrGp")
    let A = (0, c.i1)(
      C.u,
      ({ conversationId: e, messageId: t }, { get: n }) => {
        let a = n(N.Jv, e),
          r = (0, k.g)(a?.[t]?.message?.metadata?.comparison_source_asset_pointer)
        if (null == a || null == r) return null
        for (let e of (0, y.UI)({ mapping: a, current_node: t })) {
          if (e.id === t || (0, y.uk)(e)) continue
          let n = (0, j.$8)(e).find((e) => e.src === r)
          if (null != n) return n
        }
        return null
      },
      { isEqual: _() },
    )
    function M(e) {
      let t,
        n,
        w,
        _,
        y,
        j,
        k,
        N,
        M,
        O,
        S,
        V,
        z = (0, r.c)(45),
        {
          children: H,
          conversationId: E,
          image: T,
          imageNumber: L,
          isComparing: U,
          position: W,
          onToggle: Y,
          onPositionChange: B,
        } = e,
        D = (0, c.gh)(C.u),
        J = (0, u.A)(),
        { data: R } = (0, g.YL)(),
        $ = null == R || "free" === R.plan_type || "free_workspace" === R.plan_type,
        Z = T.chatGptMessageId ?? T.id
      z[0] !== E || z[1] !== Z
        ? ((t = { conversationId: E, messageId: Z }), (z[0] = E), (z[1] = Z), (z[2] = t))
        : (t = z[2])
      let q = (0, c._U)(A, t),
        K = (0, c._U)(x.N9, E),
        Q = (0, c.Ul)(v.R),
        F = (0, c._U)(x.qY, E),
        X = K ?? void 0,
        ee = F?.imageLoading
      z[3] !== X || z[4] !== ee || z[5] !== Q
        ? ((n = (0, x.Qt)(X, void 0, Q, void 0, ee)), (z[3] = X), (z[4] = ee), (z[5] = Q), (z[6] = n))
        : (n = z[6])
      let et = n,
        en = null != q && q.src !== T.src && null != K,
        ea = $ ? (q?.watermarkedSrc ?? q?.src) : q?.src,
        er = $ ? (T.watermarkedSrc ?? T.src) : T.src,
        es = (0, b.vM)(U && en ? (ea ?? "") : "", et),
        ei = (0, b.vM)(U && en ? (er ?? "") : "", et),
        [eo, el] = (0, d.useState)(),
        [ec, ed] = (0, d.useState)(),
        [eu, eg] = (0, d.useState)(!1),
        em = en && !eu && !es.isError && !ei.isError && null == es.deleted && null == ei.deleted,
        eh = em && U && null != es.src && null != ei.src && eo === es.src && ec === ei.src
      ;(z[7] !== eh || z[8] !== D
        ? ((w = () => {
            eh && D.get(p.YV).trackCounter("CHATGPT_IMAGE_COMPARISON_SHOWN")
          }),
          (_ = [eh, D]),
          (z[7] = eh),
          (z[8] = D),
          (z[9] = w),
          (z[10] = _))
        : ((w = z[9]), (_ = z[10])),
        (0, d.useEffect)(w, _),
        z[11] !== J
          ? ((y = J.formatMessage({
              id: "imageGenActionOverlay.compareImages",
              defaultMessage: "Compare images",
              description:
                "Accessible label and tooltip for a button that toggles inline image-generation comparison. The reference is the attached image or the single generated image in the preceding response. The button shows or hides a slider comparing it with each new generated result.",
            })),
            (z[11] = J),
            (z[12] = y))
          : (y = z[12]))
      let ef = y,
        ep = eh && "pb-14"
      return (
        z[13] !== ep ? ((j = (0, l.A)("relative", ep)), (z[13] = ep), (z[14] = j)) : (j = z[14]),
        z[15] !== H || z[16] !== eh
          ? ((k = (0, a.jsx)("div", { inert: eh, children: H })), (z[15] = H), (z[16] = eh), (z[17] = k))
          : (k = z[17]),
        z[18] !== em ||
        z[19] !== eh ||
        z[20] !== J ||
        z[21] !== U ||
        z[22] !== B ||
        z[23] !== ei ||
        z[24] !== W ||
        z[25] !== D ||
        z[26] !== es
          ? ((N =
              em && U && null != es.src && null != ei.src
                ? (0, a.jsxs)(o.bL, {
                    className: (0, l.A)("absolute inset-0 touch-none select-none", !eh && "invisible"),
                    dir: "ltr",
                    min: 0,
                    max: 100,
                    step: 1,
                    value: [W],
                    disabled: !eh,
                    onPointerDown: G,
                    onClick: P,
                    onKeyDown: I,
                    onValueChange: (e) => {
                      let [t] = e
                      null != t && B(t)
                    },
                    onValueCommit: () => {
                      D.get(p.YV).trackCounter("CHATGPT_IMAGE_COMPARISON_SLIDER_USED")
                    },
                    children: [
                      (0, a.jsxs)("div", {
                        className: "relative size-full overflow-hidden rounded-lg bg-surface",
                        children: [
                          (0, a.jsx)("img", {
                            className: "absolute inset-0 size-full object-contain",
                            src: es.src,
                            alt: J.formatMessage({
                              id: "imageGenParagen.comparison.referenceImage",
                              defaultMessage: "Reference image",
                              description:
                                "Accessible description of the attached image or the single generated image in the preceding response, shown on the left in an inline image-generation comparison while choosing between two generated results.",
                            }),
                            draggable: !1,
                            style: { clipPath: `inset(0 ${100 - W}% 0 0)` },
                            onLoad: () => el(es.src ?? void 0),
                            onError: () => eg(!0),
                          }),
                          (0, a.jsx)("img", {
                            className: "absolute inset-0 size-full object-contain",
                            src: ei.src,
                            alt: J.formatMessage({
                              id: "imageGenParagen.comparison.outputImage",
                              defaultMessage: "Output image",
                              description:
                                "Accessible description of the generated result, shown on the right in an inline image-generation comparison while choosing between two generated results.",
                            }),
                            draggable: !1,
                            style: { clipPath: `inset(0 0 0 ${W}%)` },
                            onLoad: () => ed(ei.src ?? void 0),
                            onError: () => eg(!0),
                          }),
                          (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            className: "pointer-events-none absolute inset-y-0 w-px bg-media-foreground",
                            style: { left: `${W}%` },
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "relative mt-2 flex h-11 w-full items-center",
                        children: [
                          (0, a.jsx)(o.CC, { className: "relative h-0.5 w-full rounded-full bg-border" }),
                          (0, a.jsx)(o.zi, {
                            className:
                              "relative flex h-11 w-0 cursor-ew-resize items-center justify-center before:absolute before:inset-y-0 before:left-1/2 before:w-11 before:-translate-x-1/2 focus-visible:outline-2",
                            "aria-label": J.formatMessage({
                              id: "imageGenParagen.comparison.slider",
                              defaultMessage: "Compare reference and generated images",
                              description:
                                "Accessible label for the slider below each image in an inline comparison while choosing between two generated results. Dragging reveals the reference image on the left and the generated image on the right.",
                            }),
                            children: (0, a.jsx)("span", {
                              className:
                                "flex size-8 shrink-0 items-center justify-center rounded-full bg-media-background text-media-foreground",
                              children: (0, a.jsx)(f.Bgg, {}),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (z[18] = em),
            (z[19] = eh),
            (z[20] = J),
            (z[21] = U),
            (z[22] = B),
            (z[23] = ei),
            (z[24] = W),
            (z[25] = D),
            (z[26] = es),
            (z[27] = N))
          : (N = z[27]),
        z[28] !== eh || z[29] !== L
          ? ((M = eh
              ? (0, a.jsx)("span", {
                  className:
                    "pointer-events-none absolute start-0 bottom-0 flex size-6 items-center justify-center rounded-md bg-media-background px-1 text-center text-sm font-semibold text-media-foreground select-none dark:bg-media-foreground dark:text-media-background",
                  children: L,
                })
              : null),
            (z[28] = eh),
            (z[29] = L),
            (z[30] = M))
          : (M = z[30]),
        z[31] !== em || z[32] !== eh || z[33] !== U || z[34] !== ef || z[35] !== Y
          ? ((O = em
              ? (0, a.jsx)("div", {
                  className: "absolute end-0 bottom-0",
                  children: (0, a.jsx)(s.m, {
                    content: ef,
                    children: (0, a.jsx)(m.$, {
                      "aria-label": ef,
                      "aria-pressed": U,
                      "aria-busy": U && !eh,
                      color: "solidNeutral",
                      size: "formatToolbarIcon",
                      onClick: (e) => {
                        ;(e.stopPropagation(), Y())
                      },
                      children: (0, a.jsx)(h.I, { asset: i }),
                    }),
                  }),
                })
              : null),
            (z[31] = em),
            (z[32] = eh),
            (z[33] = U),
            (z[34] = ef),
            (z[35] = Y),
            (z[36] = O))
          : (O = z[36]),
        z[37] !== k || z[38] !== N || z[39] !== M || z[40] !== O
          ? ((S = (0, a.jsxs)("div", { className: "relative", children: [k, N, M, O] })),
            (z[37] = k),
            (z[38] = N),
            (z[39] = M),
            (z[40] = O),
            (z[41] = S))
          : (S = z[41]),
        z[42] !== j || z[43] !== S
          ? ((V = (0, a.jsx)("div", { className: j, children: S })), (z[42] = j), (z[43] = S), (z[44] = V))
          : (V = z[44]),
        V
      )
    }
    function I(e) {
      return e.stopPropagation()
    }
    function P(e) {
      return e.stopPropagation()
    }
    function G(e) {
      return e.stopPropagation()
    }
  },
}
//# sourceMappingURL=42415.613e6ec86b.js.map
