export const __rspack_esm_ids = [587250]
export const __webpack_modules__ = {
  rHMG(e, t, n) {
    n.d(t, { MarkdownVideoPlayer: () => S })
    var r = n("ABep"),
      o = n("QosV")
    let i = (0, n("nkTT").a)({
      name: "arrow-down-left-arrow-up-right-sm-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.475098, y: 2.474609, width: 11.049805, height: 11.049805 },
        visualBounds: { x: 2.475098, y: 2.474609, width: 11.049805, height: 11.049805 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.475098, y: 2.474609, width: 11.049805, height: 11.049805 },
        center: { x: 8, y: 7.999512 },
        insets: { top: 2.474609, right: 2.475097, bottom: 2.475586, left: 2.475098 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.999512 }, foreground: { x: 8, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.16622 8.80776C6.73222 8.80776 7.19146 9.26719 7.19161 9.83315V12.6662C7.19161 12.9561 6.95617 13.1915 6.66622 13.1915C6.37644 13.1913 6.14083 12.956 6.14083 12.6662V10.5939L3.37228 13.3703C3.16754 13.5755 2.83441 13.5759 2.62911 13.3712C2.42414 13.1665 2.4237 12.8343 2.62813 12.629L5.39278 9.85756H3.33321C3.04354 9.85737 2.808 9.62283 2.80782 9.33315C2.80798 9.04345 3.04353 8.80796 3.33321 8.80776H6.16622Z" fill="currentColor"/> <path d="M12.6281 2.62905C12.8326 2.42395 13.1649 2.42297 13.3703 2.6271C13.5757 2.83159 13.5766 3.16477 13.3723 3.37026L10.6125 6.14174H12.6662C12.9561 6.14174 13.1914 6.37636 13.1916 6.66616C13.1916 6.95608 12.9562 7.19155 12.6662 7.19155H9.83321C9.26719 7.19148 8.80785 6.73219 8.80782 6.16616V3.33315C8.80782 3.04324 9.04332 2.80783 9.33321 2.80776C9.62316 2.80776 9.8586 3.0432 9.8586 3.33315V5.4103L12.6281 2.62905Z" fill="currentColor"/>',
    })
    var a = n("fK6E"),
      l = n("nhm6"),
      s = n("YAOF"),
      u = n("on57"),
      d = n("zd8w"),
      c = n("Wf1j"),
      m = n("oyxz"),
      f = n("ygO2"),
      p = n("bqtn"),
      h = n("HOLv"),
      v = n("GO7r"),
      g = n("nzx4"),
      b = n("CqQF"),
      x = n("aepO"),
      w = n("S7UD"),
      y = n("HgLj")
    function S(e) {
      let t,
        n,
        s,
        f,
        b,
        S,
        P,
        D,
        E,
        T,
        _,
        L,
        A,
        R,
        V,
        I,
        B,
        N,
        F,
        K,
        O,
        z,
        H,
        U,
        q,
        G,
        Y,
        $,
        X,
        Z,
        Q,
        W,
        J,
        ee,
        et,
        en,
        er,
        eo,
        ei,
        ea,
        el,
        es,
        eu,
        ed,
        ec,
        em,
        ef,
        ep,
        eh,
        ev,
        eg,
        eb,
        ex,
        ew,
        ey,
        eS,
        ek,
        eC,
        ej,
        eM,
        eP,
        eD,
        eE,
        eT,
        e_,
        eL,
        eA,
        eR,
        eV,
        eI,
        eB,
        eN,
        eF,
        eK,
        eO,
        ez,
        eH = (0, o.c)(221),
        {
          ref: eU,
          allowWide: eq,
          allowFullscreen: eG,
          className: eY,
          durationHint: e$,
          height: eX,
          label: eZ,
          onDurationChange: eQ,
          onError: eW,
          onExpand: eJ,
          onLoadedMetadata: e1,
          onLoadedData: e0,
          onPlaying: e2,
          onResize: e3,
          onSaveCopy: e6,
          presentation: e5,
          poster: e9,
          preload: e4,
          previewPlaceholder: e7,
          previewLoading: e8,
          sizing: te,
          src: tt,
          sourceUrl: tn,
          title: tr,
          transparentBackground: to,
          videoStyle: ti,
          width: ta,
        } = e,
        tl = void 0 === eG || eG,
        ts = void 0 === e$ ? 0 : e$,
        tu = void 0 === e5 ? "below" : e5,
        td = void 0 === e4 ? "metadata" : e4,
        tc = void 0 !== to && to,
        tm = (0, c.A)(),
        tf = (0, d.useRef)(null),
        tp = (0, d.useRef)(null),
        [th, tv] = (0, d.useState)(null),
        [tg, tb] = (0, d.useState)(!1),
        [tx, tw] = (0, d.useState)(0),
        [ty, tS] = (0, d.useState)(0),
        [tk, tC] = (0, d.useState)(!1),
        [tj, tM] = (0, d.useState)(1),
        [tP, tD] = (0, d.useState)(!1),
        [tE, tT] = (0, d.useState)(1),
        [t_, tL] = (0, d.useState)(!1),
        [tA, tR] = (0, d.useState)(!1),
        [tV, tI] = (0, d.useState)(!1),
        [tB, tN] = (0, d.useState)(!1),
        tF = (0, w.ax)(tt) ? tt : void 0,
        tK = (0, d.useEffectEvent)(eW)
      ;(eH[0] !== tF || eH[1] !== tK
        ? ((t = () => {
            let e = tf.current
            if (null != e && null != tF) return (0, w.Kr)(e, tF, () => tK(e))
          }),
          (eH[0] = tF),
          (eH[1] = tK),
          (eH[2] = t))
        : (t = eH[2]),
        eH[3] !== tF ? ((n = [tF]), (eH[3] = tF), (eH[4] = n)) : (n = eH[4]),
        (0, d.useEffect)(t, n),
        eH[5] !== th
          ? ((s = () => {
              if (null == th) return
              let e = th.ownerDocument,
                t = () => {
                  ;(tb(e.fullscreenElement === th), e.fullscreenElement === th && tf.current?.focus())
                }
              return (e.addEventListener("fullscreenchange", t), () => e.removeEventListener("fullscreenchange", t))
            }),
            (f = [th]),
            (eH[5] = th),
            (eH[6] = s),
            (eH[7] = f))
          : ((s = eH[6]), (f = eH[7])),
        (0, d.useEffect)(s, f),
        eH[8] !== tB || eH[9] !== tk || eH[10] !== th || eH[11] !== tu
          ? ((b = () => {
              if (null == th || "overlay" !== tu || !tk || tB) return
              let e = window.setTimeout(() => tI(!0), 2500),
                t = () => {
                  ;(tI(!1), window.clearTimeout(e), (e = window.setTimeout(() => tI(!0), 2500)))
                }
              return (
                th.addEventListener("pointermove", t),
                th.addEventListener("pointerdown", t),
                th.addEventListener("keydown", t),
                () => {
                  ;(window.clearTimeout(e),
                    th.removeEventListener("pointermove", t),
                    th.removeEventListener("pointerdown", t),
                    th.removeEventListener("keydown", t))
                }
              )
            }),
            (S = [th, tu, tk, tB]),
            (eH[8] = tB),
            (eH[9] = tk),
            (eH[10] = th),
            (eH[11] = tu),
            (eH[12] = b),
            (eH[13] = S))
          : ((b = eH[12]), (S = eH[13])),
        (0, d.useEffect)(b, S),
        eH[14] !== ts ? ((P = Number.isFinite(ts) ? Math.max(0, ts) : 0), (eH[14] = ts), (eH[15] = P)) : (P = eH[15]))
      let tO = P
      eH[16] !== tx || eH[17] !== tO || eH[18] !== ty || eH[19] !== tm
        ? ((D = tm.formatMessage(
            {
              id: "markdown.video.progress",
              defaultMessage: "{currentTime} / {duration}",
              description: "Current playback time and total video duration",
            },
            { currentTime: M(tx), duration: M(ty || tO) },
          )),
          (eH[16] = tx),
          (eH[17] = tO),
          (eH[18] = ty),
          (eH[19] = tm),
          (eH[20] = D))
        : (D = eH[20])
      let tz = D
      eH[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = () => {
            let e = tf.current
            null != e && (tL(!1), e.paused ? e.play().catch(() => tL(!0)) : e.pause())
          }),
          (eH[21] = E))
        : (E = eH[21])
      let tH = E
      eH[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = (e) => {
            let t = tp.current
            if (null == t || t.pointerId !== e.pointerId) return
            tp.current = null
            let n = tf.current
            t.wasPlaying && null != n && (tL(!1), n.play().catch(() => tL(!0)))
          }),
          (eH[22] = T))
        : (T = eH[22])
      let tU = T
      eH[23] !== eJ || eH[24] !== th
        ? ((_ = () => {
            null != eJ && null != tf.current
              ? eJ(tf.current)
              : null == th ||
                (tL(!1),
                (th.ownerDocument.fullscreenElement === th
                  ? th.ownerDocument.exitFullscreen()
                  : th.requestFullscreen()
                ).catch(() => tL(!0)))
          }),
          (eH[23] = eJ),
          (eH[24] = th),
          (eH[25] = _))
        : (_ = eH[25])
      let tq = _
      eH[26] !== tm || eH[27] !== tk
        ? ((L = tk
            ? tm.formatMessage({
                id: "markdown.video.pause",
                defaultMessage: "Pause video",
                description: "Accessible label for pausing video playback",
              })
            : tm.formatMessage({
                id: "markdown.video.play",
                defaultMessage: "Play video",
                description: "Accessible label for starting video playback",
              })),
          (eH[26] = tm),
          (eH[27] = tk),
          (eH[28] = L))
        : (L = eH[28])
      let tG = L
      eH[29] !== tm || eH[30] !== tg
        ? ((A = tg
            ? tm.formatMessage({
                id: "markdown.video.exitFullscreen",
                defaultMessage: "Exit fullscreen",
                description: "Button to leave fullscreen video playback",
              })
            : tm.formatMessage({
                id: "markdown.video.fullscreen",
                defaultMessage: "Fullscreen",
                description: "Button to show the video and its controls in fullscreen",
              })),
          (eH[29] = tm),
          (eH[30] = tg),
          (eH[31] = A))
        : (A = eH[31])
      let tY = A,
        t$ = "overlay" === tu && "overlay-k_Dc2T",
        tX = "overlay" === tu ? "relative aspect-video rounded-md" : "bg-surface",
        tZ = "overlay" === tu && !tc && "bg-media-background",
        tQ = "container" === te ? "size-full" : "my-3 w-fit rounded-md shadow-md",
        tW =
          "content" === te &&
          (eq
            ? "max-h-[var(--markdown-wide-block-max-height)] max-w-full"
            : "max-h-[min(48vh,32rem)] max-w-[min(100%,44rem)]")
      eH[32] !== eY || eH[33] !== t$ || eH[34] !== tX || eH[35] !== tZ || eH[36] !== tQ || eH[37] !== tW
        ? ((R = (0, u.A)("player-W1zENa", t$, "flex min-h-0 min-w-0 flex-col overflow-hidden", tX, tZ, tQ, tW, eY)),
          (eH[32] = eY),
          (eH[33] = t$),
          (eH[34] = tX),
          (eH[35] = tZ),
          (eH[36] = tQ),
          (eH[37] = tW),
          (eH[38] = R))
        : (R = eH[38])
      let tJ = "overlay" !== tu || tc ? void 0 : "dark",
        t1 = e8 || void 0,
        t0 = (tk && tV && !tB && !t_) || void 0
      ;(eH[39] !== tB || eH[40] !== tq
        ? ((V = (e) => {
            "Escape" !== e.key ||
              tB ||
              e.currentTarget.ownerDocument.fullscreenElement !== e.currentTarget ||
              (e.preventDefault(), e.stopPropagation(), tq())
          }),
          (eH[39] = tB),
          (eH[40] = tq),
          (eH[41] = V))
        : (V = eH[41]),
        eH[42] !== eU
          ? ((I = (0, y.P)((e) => {
              if (((tf.current = e), null != e)) {
                let t = e.duration
                tS(Number.isFinite(t) && t > 0 ? t : 0)
              }
            }, eU)),
            (eH[42] = eU),
            (eH[43] = I))
          : (I = eH[43]))
      let t2 = null == tF ? tt : void 0,
        t3 = "overlay" === tu
      ;(eH[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = (e) => {
            ;(" " === e.key || "Enter" === e.key) && (e.preventDefault(), e.repeat || tH())
          }),
          (eH[44] = B))
        : (B = eH[44]),
        eH[45] !== eQ
          ? ((N = (e) => {
              let t = e.currentTarget.duration
              ;(tS(Number.isFinite(t) && t > 0 ? t : 0), eQ?.(e.currentTarget))
            }),
            (eH[45] = eQ),
            (eH[46] = N))
          : (N = eH[46]),
        eH[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (e) => {
              tw(e.currentTarget.currentTime)
            }),
            (K = () => {
              ;(tI(!1), tC(!0), tL(!1))
            }),
            (eH[47] = F),
            (eH[48] = K))
          : ((F = eH[47]), (K = eH[48])),
        eH[49] !== e2 ? ((O = (e) => e2?.(e.currentTarget)), (eH[49] = e2), (eH[50] = O)) : (O = eH[50]),
        eH[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = () => tC(!1)),
            (H = () => tC(!1)),
            (U = (e) => {
              ;(tM(e.currentTarget.volume), tD(e.currentTarget.muted))
            }),
            (q = (e) => tT(e.currentTarget.playbackRate)),
            (eH[51] = z),
            (eH[52] = H),
            (eH[53] = U),
            (eH[54] = q))
          : ((z = eH[51]), (H = eH[52]), (U = eH[53]), (q = eH[54])),
        eH[55] !== eW ? ((G = (e) => eW(e.currentTarget)), (eH[55] = eW), (eH[56] = G)) : (G = eH[56]),
        eH[57] !== e3 ? ((Y = (e) => e3?.(e.currentTarget)), (eH[57] = e3), (eH[58] = Y)) : (Y = eH[58]),
        eH[59] !== e1 ? (($ = (e) => e1?.(e.currentTarget)), (eH[59] = e1), (eH[60] = $)) : ($ = eH[60]),
        eH[61] !== e0 ? ((X = (e) => e0?.(e.currentTarget)), (eH[61] = e0), (eH[62] = X)) : (X = eH[62]),
        eH[63] !== eX ||
        eH[64] !== eZ ||
        eH[65] !== e9 ||
        eH[66] !== td ||
        eH[67] !== I ||
        eH[68] !== t2 ||
        eH[69] !== t3 ||
        eH[70] !== N ||
        eH[71] !== O ||
        eH[72] !== G ||
        eH[73] !== Y ||
        eH[74] !== $ ||
        eH[75] !== X ||
        eH[76] !== tr ||
        eH[77] !== ti ||
        eH[78] !== ta
          ? ((Z = (0, r.jsx)("video", {
              ref: I,
              className:
                "block min-h-0 w-full flex-1 cursor-interaction object-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
              src: t2,
              title: tr,
              style: ti,
              width: ta,
              height: eX,
              "aria-label": eZ,
              tabIndex: 0,
              disablePictureInPicture: t3,
              playsInline: !0,
              poster: e9,
              preload: td,
              onClick: tH,
              onKeyDown: B,
              onDurationChange: N,
              onTimeUpdate: F,
              onPlay: K,
              onPlaying: O,
              onPause: z,
              onEnded: H,
              onVolumeChange: U,
              onRateChange: q,
              onError: G,
              onResize: Y,
              onLoadedMetadata: $,
              onLoadedData: X,
            })),
            (eH[63] = eX),
            (eH[64] = eZ),
            (eH[65] = e9),
            (eH[66] = td),
            (eH[67] = I),
            (eH[68] = t2),
            (eH[69] = t3),
            (eH[70] = N),
            (eH[71] = O),
            (eH[72] = G),
            (eH[73] = Y),
            (eH[74] = $),
            (eH[75] = X),
            (eH[76] = tr),
            (eH[77] = ti),
            (eH[78] = ta),
            (eH[79] = Z))
          : (Z = eH[79]),
        eH[80] !== tg || eH[81] !== tk || eH[82] !== tG || eH[83] !== th || eH[84] !== tu
          ? ((Q =
              "overlay" !== tu || tk
                ? null
                : (0, r.jsx)(C, {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    color: "mediaOverlay",
                    portalContainer: tg ? th : void 0,
                    label: tG,
                    onClick: tH,
                    children: (0, r.jsx)(h.I, { asset: l.k }),
                  })),
            (eH[80] = tg),
            (eH[81] = tk),
            (eH[82] = tG),
            (eH[83] = th),
            (eH[84] = tu),
            (eH[85] = Q))
          : (Q = eH[85]))
      let t6 = "overlay" === tu && tc ? "dark" : void 0,
        t5 =
          "overlay" === tu
            ? "absolute inset-x-0 bottom-0 bg-media-background/80 text-media-foreground"
            : "border-t border-subtle"
      eH[86] !== t5
        ? ((W = (0, u.A)("controls-aun7ma", "@container/video-controls shrink-0 select-none", t5)),
          (eH[86] = t5),
          (eH[87] = W))
        : (W = eH[87])
      let t9 = tg ? th : void 0,
        t4 = tk ? a.F : l.k
      ;(eH[88] !== t4 ? ((J = (0, r.jsx)(h.I, { asset: t4 })), (eH[88] = t4), (eH[89] = J)) : (J = eH[89]),
        eH[90] !== tG || eH[91] !== t9 || eH[92] !== J
          ? ((ee = (0, r.jsx)(C, { portalContainer: t9, label: tG, onClick: tH, children: J })),
            (eH[90] = tG),
            (eH[91] = t9),
            (eH[92] = J),
            (eH[93] = ee))
          : (ee = eH[93]),
        eH[94] !== tm
          ? ((et = tm.formatMessage({
              id: "markdown.video.seek",
              defaultMessage: "Seek in video",
              description: "Accessible label for the video playback timeline",
            })),
            (eH[94] = tm),
            (eH[95] = et))
          : (et = eH[95]))
      let t7 = ty <= 0,
        t8 = ty || 1,
        ne = Math.min(tx, ty)
      ;(eH[96] !== ne ? ((en = [ne]), (eH[96] = ne), (eH[97] = en)) : (en = eH[97]),
        eH[98] !== ty || eH[99] !== tu
          ? ((er = (e) => {
              let t = tf.current
              "overlay" === tu &&
                ty > 0 &&
                null != t &&
                ("ArrowRight" === e.key || "ArrowLeft" === e.key) &&
                (e.preventDefault(),
                (t.currentTime = Math.max(0, Math.min(ty, t.currentTime + ("ArrowRight" === e.key ? 5 : -5)))),
                tw(t.currentTime))
            }),
            (eH[98] = ty),
            (eH[99] = tu),
            (eH[100] = er))
          : (er = eH[100]),
        eH[101] !== ty
          ? ((eo = (e) => {
              let t = tf.current
              null == t ||
                ty <= 0 ||
                0 !== e.button ||
                null != tp.current ||
                ((tp.current = { pointerId: e.pointerId, wasPlaying: !t.paused }), t.pause())
            }),
            (eH[101] = ty),
            (eH[102] = eo))
          : (eo = eH[102]),
        eH[103] === Symbol.for("react.memo_cache_sentinel")
          ? ((ei = (e) => {
              let [t] = e,
                n = tf.current
              null != n && null != t && ((n.currentTime = t), tw(n.currentTime))
            }),
            (eH[103] = ei))
          : (ei = eH[103]),
        eH[104] !== tz ||
        eH[105] !== et ||
        eH[106] !== t7 ||
        eH[107] !== t8 ||
        eH[108] !== en ||
        eH[109] !== er ||
        eH[110] !== eo
          ? ((ea = (0, r.jsx)("span", {
              className: "flex min-w-0 flex-1 @max-xs/video-controls:order-first @max-xs/video-controls:basis-full",
              children: (0, r.jsx)(j, {
                label: et,
                valueText: tz,
                disabled: t7,
                min: 0,
                max: t8,
                step: 0.1,
                value: en,
                onKeyDown: er,
                onPointerDownCapture: eo,
                onPointerUp: tU,
                onPointerCancel: tU,
                onLostPointerCapture: tU,
                onValueChange: ei,
              }),
            })),
            (eH[104] = tz),
            (eH[105] = et),
            (eH[106] = t7),
            (eH[107] = t8),
            (eH[108] = en),
            (eH[109] = er),
            (eH[110] = eo),
            (eH[111] = ea))
          : (ea = eH[111]),
        eH[112] !== tz
          ? ((el = (0, r.jsx)("span", {
              className: "shrink-0 text-xs whitespace-nowrap text-secondary tabular-nums",
              children: tz,
            })),
            (eH[112] = tz),
            (eH[113] = el))
          : (el = eH[113]),
        eH[114] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (e) => {
              ;(tI(!1), tN(e))
            }),
            (eH[114] = es))
          : (es = eH[114]))
      let nt = tg ? th : void 0
      ;(eH[115] !== tm
        ? ((eu = tm.formatMessage({
            id: "markdown.video.volume",
            defaultMessage: "Video volume",
            description: "Accessible label for the video volume controls",
          })),
          (eH[115] = tm),
          (eH[116] = eu))
        : (eu = eH[116]),
        eH[117] !== tP || eH[118] !== tj
          ? ((ed = tP || 0 === tj ? (0, r.jsx)(v.sbY, {}) : (0, r.jsx)(v.BOJ, {})),
            (eH[117] = tP),
            (eH[118] = tj),
            (eH[119] = ed))
          : (ed = eH[119]),
        eH[120] !== nt || eH[121] !== eu || eH[122] !== ed
          ? ((ec = (0, r.jsx)(g.Wv, {
              asChild: !0,
              children: (0, r.jsx)(C, { portalContainer: nt, label: eu, children: ed }),
            })),
            (eH[120] = nt),
            (eH[121] = eu),
            (eH[122] = ed),
            (eH[123] = ec))
          : (ec = eH[123]))
      let nn = tg ? th : void 0
      eH[124] !== tm
        ? ((em = tm.formatMessage({
            id: "markdown.video.volume",
            defaultMessage: "Video volume",
            description: "Accessible label for the video volume controls",
          })),
          (eH[124] = tm),
          (eH[125] = em))
        : (em = eH[125])
      let nr = tg ? th : void 0
      ;(eH[126] !== tm
        ? ((ef = tm.formatMessage({
            id: "markdown.video.mute",
            defaultMessage: "Mute video",
            description: "Accessible label for the video mute toggle",
          })),
          (eH[126] = tm),
          (eH[127] = ef))
        : (ef = eH[127]),
        eH[128] === Symbol.for("react.memo_cache_sentinel")
          ? ((ep = () => {
              let e = tf.current
              null != e && (e.muted = !e.muted)
            }),
            (eH[128] = ep))
          : (ep = eH[128]),
        eH[129] !== tP || eH[130] !== tj
          ? ((eh = tP || 0 === tj ? (0, r.jsx)(v.sbY, {}) : (0, r.jsx)(v.BOJ, {})),
            (eH[129] = tP),
            (eH[130] = tj),
            (eH[131] = eh))
          : (eh = eH[131]),
        eH[132] !== tP || eH[133] !== nr || eH[134] !== ef || eH[135] !== eh
          ? ((ev = (0, r.jsx)(C, { portalContainer: nr, label: ef, "aria-pressed": tP, onClick: ep, children: eh })),
            (eH[132] = tP),
            (eH[133] = nr),
            (eH[134] = ef),
            (eH[135] = eh),
            (eH[136] = ev))
          : (ev = eH[136]),
        eH[137] !== tm
          ? ((eg = tm.formatMessage({
              id: "markdown.video.volume",
              defaultMessage: "Video volume",
              description: "Accessible label for the video volume controls",
            })),
            (eH[137] = tm),
            (eH[138] = eg))
          : (eg = eH[138]),
        eH[139] !== tm || eH[140] !== tP || eH[141] !== tj
          ? ((eb = tm.formatNumber(tP ? 0 : tj, { style: "percent" })),
            (eH[139] = tm),
            (eH[140] = tP),
            (eH[141] = tj),
            (eH[142] = eb))
          : (eb = eH[142]))
      let no = tP ? 0 : tj
      ;(eH[143] !== no ? ((ex = [no]), (eH[143] = no), (eH[144] = ex)) : (ex = eH[144]),
        eH[145] === Symbol.for("react.memo_cache_sentinel")
          ? ((ew = (e) => {
              let [t] = e,
                n = tf.current
              null != n && null != t && ((n.volume = t), (n.muted = !1))
            }),
            (eH[145] = ew))
          : (ew = eH[145]),
        eH[146] !== eg || eH[147] !== eb || eH[148] !== ex
          ? ((ey = (0, r.jsx)(j, {
              label: eg,
              valueText: eb,
              min: 0,
              max: 1,
              step: 0.01,
              value: ex,
              onValueChange: ew,
            })),
            (eH[146] = eg),
            (eH[147] = eb),
            (eH[148] = ex),
            (eH[149] = ey))
          : (ey = eH[149]),
        eH[150] !== ev || eH[151] !== ey
          ? ((eS = (0, r.jsxs)("span", { className: "flex w-40 items-center gap-2", children: [ev, ey] })),
            (eH[150] = ev),
            (eH[151] = ey),
            (eH[152] = eS))
          : (eS = eH[152]),
        eH[153] !== nn || eH[154] !== em || eH[155] !== eS
          ? ((ek = (0, r.jsx)(g.hl, {
              align: "end",
              side: "top",
              size: "content",
              variant: "menu",
              portalContainer: nn,
              "aria-label": em,
              children: eS,
            })),
            (eH[153] = nn),
            (eH[154] = em),
            (eH[155] = eS),
            (eH[156] = ek))
          : (ek = eH[156]),
        eH[157] !== ec || eH[158] !== ek
          ? ((eC = (0, r.jsxs)(g.AM, { onOpenChange: es, children: [ec, ek] })),
            (eH[157] = ec),
            (eH[158] = ek),
            (eH[159] = eC))
          : (eC = eH[159]))
      let ni = tg ? th : void 0
      eH[160] === Symbol.for("react.memo_cache_sentinel")
        ? ((ej = (e) => {
            ;(tI(!1), tN(e), e || tR(!1))
          }),
          (eH[160] = ej))
        : (ej = eH[160])
      let na = tg ? th : void 0
      ;(eH[161] !== tm
        ? ((eM = tm.formatMessage({
            id: "markdown.video.options",
            defaultMessage: "Video options",
            description: "Accessible label for the video playback options menu",
          })),
          (eH[161] = tm),
          (eH[162] = eM))
        : (eM = eH[162]),
        eH[163] === Symbol.for("react.memo_cache_sentinel")
          ? ((eP = (0, r.jsx)(v.l0Y, {})), (eH[163] = eP))
          : (eP = eH[163]),
        eH[164] !== na || eH[165] !== eM
          ? ((eD = (0, r.jsx)(C, { portalContainer: na, label: eM, children: eP })),
            (eH[164] = na),
            (eH[165] = eM),
            (eH[166] = eD))
          : (eD = eH[166]),
        eH[167] !== e6
          ? ((eE =
              null != e6
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(p.ms.Item, {
                        onSelect: () => {
                          ;(tL(!1), e6().catch(() => tL(!0)))
                        },
                        children: (0, r.jsx)(m.A, {
                          id: "markdown.video.saveCopy",
                          defaultMessage: "Save video as…",
                          description: "Menu action to save a local copy of a video",
                        }),
                      }),
                      (0, r.jsx)(p.ms.Separator, {}),
                    ],
                  })
                : null),
            (eH[167] = e6),
            (eH[168] = eE))
          : (eE = eH[168]),
        eH[169] !== tA || eH[170] !== tn
          ? ((eT =
              null != tn
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(p.ms.Item, {
                        onSelect: (e) => {
                          ;(e.preventDefault(), (0, x.E)(tn).then(tR))
                        },
                        children: tA
                          ? (0, r.jsx)(m.A, {
                              id: "markdown.video.linkCopied",
                              defaultMessage: "Link copied",
                              description: "Confirmation that the original video URL was copied",
                            })
                          : (0, r.jsx)(m.A, {
                              id: "markdown.video.copyLink",
                              defaultMessage: "Copy link",
                              description: "Video settings menu action to copy the original video URL",
                            }),
                      }),
                      (0, r.jsx)(p.ms.Separator, {}),
                    ],
                  })
                : null),
            (eH[169] = tA),
            (eH[170] = tn),
            (eH[171] = eT))
          : (eT = eH[171]),
        eH[172] === Symbol.for("react.memo_cache_sentinel")
          ? ((e_ = (0, r.jsx)(p.ms.SectionLabel, {
              children: (0, r.jsx)(m.A, {
                id: "markdown.video.speed",
                defaultMessage: "Playback speed",
                description: "Heading for video playback speed choices",
              }),
            })),
            (eH[172] = e_))
          : (e_ = eH[172]))
      let nl = String(tE)
      return (
        eH[173] === Symbol.for("react.memo_cache_sentinel")
          ? ((eL = (e) => {
              let t = tf.current
              null != t && (t.playbackRate = Number(e))
            }),
            (eA = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(k)),
            (eH[173] = eL),
            (eH[174] = eA))
          : ((eL = eH[173]), (eA = eH[174])),
        eH[175] !== nl
          ? ((eR = (0, r.jsx)(p.ms.RadioGroup, { value: nl, onValueChange: eL, children: eA })),
            (eH[175] = nl),
            (eH[176] = eR))
          : (eR = eH[176]),
        eH[177] !== th?.ownerDocument || eH[178] !== tu
          ? ((eV =
              "overlay" !== tu && th?.ownerDocument.pictureInPictureEnabled
                ? (0, r.jsx)(p.ms.Item, {
                    onSelect: () => {
                      let e = tf.current
                      null == e ||
                        (tL(!1),
                        (e.ownerDocument.pictureInPictureElement === e
                          ? e.ownerDocument.exitPictureInPicture()
                          : e.requestPictureInPicture()
                        ).catch(() => tL(!0)))
                    },
                    children: (0, r.jsx)(m.A, {
                      id: "markdown.video.pictureInPicture",
                      defaultMessage: "Picture in picture",
                      description: "Menu action to toggle picture-in-picture video playback",
                    }),
                  })
                : null),
            (eH[177] = th?.ownerDocument),
            (eH[178] = tu),
            (eH[179] = eV))
          : (eV = eH[179]),
        eH[180] !== ni || eH[181] !== eD || eH[182] !== eE || eH[183] !== eT || eH[184] !== eR || eH[185] !== eV
          ? ((eI = (0, r.jsxs)(p.Ab, {
              align: "end",
              side: "top",
              portalContainer: ni,
              onOpenChange: ej,
              triggerButton: eD,
              children: [eE, eT, e_, eR, eV],
            })),
            (eH[180] = ni),
            (eH[181] = eD),
            (eH[182] = eE),
            (eH[183] = eT),
            (eH[184] = eR),
            (eH[185] = eV),
            (eH[186] = eI))
          : (eI = eH[186]),
        eH[187] !== tl ||
        eH[188] !== tY ||
        eH[189] !== tm ||
        eH[190] !== tg ||
        eH[191] !== eJ ||
        eH[192] !== th ||
        eH[193] !== tq
          ? ((eB =
              null != eJ || (tl && th?.ownerDocument.fullscreenEnabled)
                ? (0, r.jsx)(C, {
                    portalContainer: tg ? th : void 0,
                    label:
                      null != eJ
                        ? tm.formatMessage({
                            id: "markdown.video.expand",
                            defaultMessage: "Expand video",
                            description: "Button to open a larger video preview in a dialog",
                          })
                        : tY,
                    onClick: tq,
                    children: tg ? (0, r.jsx)(h.I, { asset: i }) : (0, r.jsx)(v.Zdv, {}),
                  })
                : null),
            (eH[187] = tl),
            (eH[188] = tY),
            (eH[189] = tm),
            (eH[190] = tg),
            (eH[191] = eJ),
            (eH[192] = th),
            (eH[193] = tq),
            (eH[194] = eB))
          : (eB = eH[194]),
        eH[195] !== eB || eH[196] !== eC || eH[197] !== eI
          ? ((eN = (0, r.jsxs)("span", {
              className: "ms-auto flex shrink-0 items-center gap-1.5",
              children: [eC, eI, eB],
            })),
            (eH[195] = eB),
            (eH[196] = eC),
            (eH[197] = eI),
            (eH[198] = eN))
          : (eN = eH[198]),
        eH[199] !== eN || eH[200] !== ee || eH[201] !== ea || eH[202] !== el
          ? ((eF = (0, r.jsxs)("span", {
              className:
                "flex h-toolbar-pane flex-wrap items-center gap-x-2 px-2 @max-xs/video-controls:h-auto @max-xs/video-controls:py-1",
              children: [ee, ea, el, eN],
            })),
            (eH[199] = eN),
            (eH[200] = ee),
            (eH[201] = ea),
            (eH[202] = el),
            (eH[203] = eF))
          : (eF = eH[203]),
        eH[204] !== t_
          ? ((eK = t_
              ? (0, r.jsx)("span", {
                  role: "status",
                  className: "block px-2 pb-2 text-xs text-secondary",
                  children: (0, r.jsx)(m.A, {
                    id: "markdown.video.actionFailed",
                    defaultMessage: "Could not complete this video action. Try again",
                    description: "Error shown when video playback, saving, fullscreen, or picture in picture fails",
                  }),
                })
              : null),
            (eH[204] = t_),
            (eH[205] = eK))
          : (eK = eH[205]),
        eH[206] !== eF || eH[207] !== eK || eH[208] !== t6 || eH[209] !== W
          ? ((eO = (0, r.jsxs)("span", { "data-theme": t6, className: W, children: [eF, eK] })),
            (eH[206] = eF),
            (eH[207] = eK),
            (eH[208] = t6),
            (eH[209] = W),
            (eH[210] = eO))
          : (eO = eH[210]),
        eH[211] !== e7 ||
        eH[212] !== eO ||
        eH[213] !== R ||
        eH[214] !== tJ ||
        eH[215] !== t1 ||
        eH[216] !== t0 ||
        eH[217] !== V ||
        eH[218] !== Z ||
        eH[219] !== Q
          ? ((ez = (0, r.jsxs)("span", {
              ref: tv,
              className: R,
              "data-markdown-copy": "exclude",
              "data-theme": tJ,
              "aria-busy": t1,
              "data-controls-hidden": t0,
              onKeyDownCapture: V,
              children: [Z, e7, Q, eO],
            })),
            (eH[211] = e7),
            (eH[212] = eO),
            (eH[213] = R),
            (eH[214] = tJ),
            (eH[215] = t1),
            (eH[216] = t0),
            (eH[217] = V),
            (eH[218] = Z),
            (eH[219] = Q),
            (eH[220] = ez))
          : (ez = eH[220]),
        ez
      )
    }
    function k(e) {
      return (0, r.jsx)(
        p.ms.RadioItem,
        {
          value: String(e),
          children: (0, r.jsx)(m.A, {
            id: "markdown.video.speedValue",
            defaultMessage: "{rate, number}×",
            description: "A video playback speed multiplier",
            values: { rate: e },
          }),
        },
        e,
      )
    }
    function C(e) {
      let t,
        n,
        i,
        a,
        l,
        s = (0, o.c)(11)
      return (
        s[0] !== e
          ? (({ label: t, portalContainer: n, ...i } = e), (s[0] = e), (s[1] = t), (s[2] = n), (s[3] = i))
          : ((t = s[1]), (n = s[2]), (i = s[3])),
        s[4] !== t || s[5] !== i
          ? ((a = (0, r.jsx)(f.$, { color: "ghostSecondary", size: "toolbar", uniform: !0, "aria-label": t, ...i })),
            (s[4] = t),
            (s[5] = i),
            (s[6] = a))
          : (a = s[6]),
        s[7] !== t || s[8] !== n || s[9] !== a
          ? ((l = (0, r.jsx)(b.m, { tooltipContent: t, portalContainer: n, closeOnTriggerClick: !0, children: a })),
            (s[7] = t),
            (s[8] = n),
            (s[9] = a),
            (s[10] = l))
          : (l = s[10]),
        l
      )
    }
    function j(e) {
      let t,
        n,
        i,
        a,
        l,
        c,
        m,
        f,
        p,
        h,
        v,
        g,
        b,
        x,
        w = (0, o.c)(34)
      w[0] !== e
        ? (({ label: t, min: i, max: a, valueText: l, ...n } = e),
          (w[0] = e),
          (w[1] = t),
          (w[2] = n),
          (w[3] = i),
          (w[4] = a),
          (w[5] = l))
        : ((t = w[1]), (n = w[2]), (i = w[3]), (a = w[4]), (l = w[5]))
      let y = void 0 === i ? 0 : i,
        S = void 0 === a ? 100 : a,
        [k, C] = (0, d.useState)(!1),
        j = (0, d.useRef)(null)
      w[6] !== S || w[7] !== y || w[8] !== n
        ? ((c = (e) => {
            let t = j.current
            if (n.disabled || null == t) return
            let r = e.currentTarget.getBoundingClientRect(),
              o = t.getBoundingClientRect().width
            if (r.width <= o) return
            let i = Math.min(1, Math.max(0, (e.clientX - r.left - o / 2) / (r.width - o)))
            n.onValueChange?.([y + (S - y) * ("rtl" === e.currentTarget.dir ? 1 - i : i)])
          }),
          (w[6] = S),
          (w[7] = y),
          (w[8] = n),
          (w[9] = c))
        : (c = w[9])
      let M = c
      ;(w[10] === Symbol.for("react.memo_cache_sentinel") ? ((m = () => C(!1)), (w[10] = m)) : (m = w[10]),
        w[11] !== n
          ? ((f = (e) => {
              ;(C(!1), n.onKeyDown?.(e))
            }),
            (w[11] = n),
            (w[12] = f))
          : (f = w[12]),
        w[13] !== n.disabled || w[14] !== M
          ? ((p = (e) => {
              ;(e.preventDefault(),
                n.disabled ||
                  0 !== e.button ||
                  (C(!0), j.current?.setPointerCapture(e.pointerId), j.current?.focus({ preventScroll: !0 }), M(e)))
            }),
            (w[13] = n.disabled),
            (w[14] = M),
            (w[15] = p))
          : (p = w[15]),
        w[16] !== M
          ? ((h = (e) => {
              ;(e.preventDefault(), j.current?.hasPointerCapture(e.pointerId) && M(e))
            }),
            (w[16] = M),
            (w[17] = h))
          : (h = w[17]),
        w[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, r.jsx)(s.CC, {
              className: "relative h-0.5 grow rounded-full bg-border",
              children: (0, r.jsx)(s.Q6, { className: "absolute h-full rounded-full bg-text" }),
            })),
            (w[18] = v))
          : (v = w[18]))
      let P = !k && "focus-visible:ring-2 focus-visible:ring-ring"
      return (
        w[19] !== P
          ? ((g = (0, u.A)(
              "block h-4 w-4 cursor-interaction rounded-full border border-default bg-surface-tertiary shadow-md focus:outline-none data-[disabled]:cursor-default",
              P,
            )),
            (w[19] = P),
            (w[20] = g))
          : (g = w[20]),
        w[21] !== t || w[22] !== n.disabled || w[23] !== g || w[24] !== l
          ? ((b = (0, r.jsx)(s.zi, {
              ref: j,
              className: g,
              "aria-label": t,
              "aria-disabled": n.disabled,
              "aria-valuetext": l,
            })),
            (w[21] = t),
            (w[22] = n.disabled),
            (w[23] = g),
            (w[24] = l),
            (w[25] = b))
          : (b = w[25]),
        w[26] !== S || w[27] !== y || w[28] !== n || w[29] !== b || w[30] !== f || w[31] !== p || w[32] !== h
          ? ((x = (0, r.jsxs)(s.bL, {
              className: "relative flex h-6 min-w-0 flex-1 touch-none items-center data-[disabled]:opacity-40",
              min: y,
              max: S,
              onBlur: m,
              ...n,
              onKeyDown: f,
              onPointerDown: p,
              onPointerMove: h,
              children: [v, b],
            })),
            (w[26] = S),
            (w[27] = y),
            (w[28] = n),
            (w[29] = b),
            (w[30] = f),
            (w[31] = p),
            (w[32] = h),
            (w[33] = x))
          : (x = w[33]),
        x
      )
    }
    function M(e) {
      let t = Math.max(0, Math.floor(e))
      return `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`
    }
  },
  nhm6(e, t, n) {
    let r = (0, n("nkTT").a)({
      name: "play-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.474609, y: 2.165039, width: 10.258759, height: 11.725586 },
        visualBounds: { x: 3.474609, y: 2.165039, width: 10.258759, height: 11.725586 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.474609, y: 2.165039, width: 10.258759, height: 11.725586 },
        center: { x: 8.603989, y: 8.027832 },
        insets: { top: 2.165039, right: 2.266632, bottom: 2.109375, left: 3.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.603989, y: 8.027832 }, foreground: { x: 8.603989, y: 8.027832 } },
      },
      capabilities: ["icon"],
      body: '<path d="M4.33594 2.33289C4.80057 2.10819 5.39866 2.08949 5.90332 2.39735L12.9395 6.67957L13.0352 6.74207C13.9964 7.41933 13.9651 8.91629 12.9414 9.5409L12.9336 9.54579L5.89648 13.6639L5.89551 13.663C5.39251 13.9659 4.79815 13.9461 4.33594 13.7225C3.86641 13.4954 3.47443 13.0257 3.47461 12.3954V3.66004C3.47443 3.02975 3.8664 2.56008 4.33594 2.33289ZM4.52539 12.3954C4.52535 12.549 4.61423 12.6918 4.79297 12.7782C4.97639 12.8669 5.19331 12.8628 5.35742 12.7626L5.36621 12.7577L12.3945 8.64442C12.7798 8.40935 12.7791 7.81131 12.3936 7.57704L5.3584 3.29383L5.35742 3.29286C5.19331 3.1926 4.97638 3.1895 4.79297 3.27821C4.61448 3.36467 4.52535 3.50652 4.52539 3.66004V12.3954Z" fill="currentColor"/>',
    })
    n.d(t, {}, { k: r })
  },
  duD4(e, t, n) {
    function r(e, [t, n]) {
      return Math.min(n, Math.max(t, e))
    }
    ;((0, Object.defineProperty)(r, "name", { value: "clamp", configurable: !0 }), n.d(t, {}, { q: r }))
  },
  YAOF(e, t, n) {
    n.d(t, { Q6: () => I, bL: () => D, zi: () => z, CC: () => R })
    var r = n("zd8w"),
      o = n("duD4"),
      i = n("kUVq"),
      a = n("lVCP"),
      l = n("zWxU"),
      s = n("Hj0L"),
      u = n("k5JT")
    function d(e) {
      let t = r.useRef({ value: e, previous: e })
      return r.useMemo(
        () => (
          t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)),
          t.current.previous
        ),
        [e],
      )
    }
    ;(0, Object.defineProperty)(d, "name", { value: "usePrevious", configurable: !0 })
    var c = n("Vuge"),
      m = n("Fc3g"),
      f = n("gMOs"),
      p = n("ABep"),
      h = Object.defineProperty,
      v = (e, t) => h(e, "name", { value: t, configurable: !0 }),
      g = ["PageUp", "PageDown"],
      b = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
      x = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
      },
      w = "Slider",
      [y, S, k] = (0, f.N)(w),
      [C, j] = (0, l.A)(w, [k]),
      [M, P] = C(w),
      D = r.forwardRef(
        v(function (e, t) {
          let {
              name: n,
              min: l = 0,
              max: u = 100,
              step: d = 1,
              orientation: c = "horizontal",
              disabled: m = !1,
              minStepsBetweenThumbs: f = 0,
              defaultValue: h = [l],
              value: x,
              onValueChange: w = v(() => {}, "onValueChange"),
              onValueCommit: S = v(() => {}, "onValueCommit"),
              inverted: k = !1,
              form: C,
              ...j
            } = e,
            P = r.useRef(new Set()),
            D = r.useRef(0),
            E = r.useRef(!1),
            T = "horizontal" === c,
            [A, R] = r.useState(null),
            V = (0, a.s)(t, R),
            [I = [], B] = (0, s.i)({
              prop: x,
              defaultProp: h,
              onChange: v((e) => {
                let t = [...P.current]
                ;(t[D.current]?.focus({ preventScroll: !0, focusVisible: E.current }), (E.current = !1), w(e))
              }, "onChange"),
            }),
            N = r.useRef(I),
            F = r.useRef(I)
          function K(e) {
            let t = Y(I, e)
            H(e, t)
          }
          function O(e) {
            H(e, D.current)
          }
          function z() {
            String(I) !== String(N.current) && S(I)
          }
          function H(e, t, { commit: n } = { commit: !1 }) {
            let r = W(d),
              i = J(Math.round((e - l) / d) * d + l, r),
              a = (0, o.q)(i, [l, u])
            B((e = []) => {
              let r = U(e, a, t)
              if (!Z(r, f * d)) return e
              {
                D.current = r.indexOf(a)
                let t = String(r) !== String(e)
                return (t && n && S(r), t ? r : e)
              }
            })
          }
          return (
            r.useEffect(() => {
              let e = C ? A?.ownerDocument.getElementById(C) : A?.closest("form")
              if (e instanceof HTMLFormElement) {
                let t = v(() => B(F.current), "reset")
                return (e.addEventListener("reset", t), () => e.removeEventListener("reset", t))
              }
            }, [A, C, B]),
            v(K, "handleSlideStart"),
            v(O, "handleSlideMove"),
            v(z, "handleSlideEnd"),
            v(H, "updateValues"),
            (0, p.jsx)(M, {
              scope: e.__scopeSlider,
              name: n,
              disabled: m,
              min: l,
              max: u,
              valueIndexToChangeRef: D,
              thumbs: P.current,
              values: I,
              orientation: c,
              form: C,
              children: (0, p.jsx)(y.Provider, {
                scope: e.__scopeSlider,
                children: (0, p.jsx)(y.Slot, {
                  scope: e.__scopeSlider,
                  children: (0, p.jsx)(T ? _ : L, {
                    "aria-disabled": m,
                    "data-disabled": m ? "" : void 0,
                    ...j,
                    ref: V,
                    onPointerDown: (0, i.mK)(j.onPointerDown, () => {
                      m || ((N.current = I), (E.current = !1))
                    }),
                    min: l,
                    max: u,
                    inverted: k,
                    onSlideStart: m ? void 0 : K,
                    onSlideMove: m ? void 0 : O,
                    onSlideEnd: m ? void 0 : z,
                    onHomeKeyDown: () => {
                      m || ((E.current = !0), H(l, 0, { commit: !0 }))
                    },
                    onEndKeyDown: () => {
                      m || ((E.current = !0), H(u, I.length - 1, { commit: !0 }))
                    },
                    onStepKeyDown: ({ event: e, direction: t }) => {
                      if (!m) {
                        E.current = !0
                        let n = g.includes(e.key) || (e.shiftKey && b.includes(e.key)),
                          r = D.current
                        H(ee(I[r], { min: l, step: d, direction: t, multiplier: n ? 10 : 1 }), r, { commit: !0 })
                      }
                    },
                  }),
                }),
              }),
            })
          )
        }, "Slider"),
      ),
      [E, T] = C(w, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
      _ = r.forwardRef(
        v(function (e, t) {
          let {
              min: n,
              max: o,
              dir: i,
              inverted: l,
              onSlideStart: s,
              onSlideMove: d,
              onSlideEnd: c,
              onStepKeyDown: m,
              ...f
            } = e,
            [h, g] = r.useState(null),
            b = (0, a.s)(t, g),
            w = r.useRef(void 0),
            y = (0, u.useDirection)(i),
            S = "ltr" === y,
            k = (S && !l) || (!S && l)
          function C(e) {
            let t = w.current || h.getBoundingClientRect(),
              r = Q([0, t.width], k ? [n, o] : [o, n])
            return ((w.current = t), r(e - t.left))
          }
          return (
            v(C, "getValueFromPointer"),
            (0, p.jsx)(E, {
              scope: e.__scopeSlider,
              startEdge: k ? "left" : "right",
              endEdge: k ? "right" : "left",
              direction: k ? 1 : -1,
              size: "width",
              children: (0, p.jsx)(A, {
                dir: y,
                "data-orientation": "horizontal",
                ...f,
                ref: b,
                style: { ...f.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
                onSlideStart: (e) => {
                  let t = C(e.clientX)
                  s?.(t)
                },
                onSlideMove: (e) => {
                  let t = C(e.clientX)
                  d?.(t)
                },
                onSlideEnd: () => {
                  ;((w.current = void 0), c?.())
                },
                onStepKeyDown: (e) => {
                  let t = x[k ? "from-left" : "from-right"].includes(e.key)
                  m?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderHorizontal"),
      ),
      L = r.forwardRef(
        v(function (e, t) {
          let {
              min: n,
              max: o,
              inverted: i,
              onSlideStart: l,
              onSlideMove: s,
              onSlideEnd: u,
              onStepKeyDown: d,
              ...c
            } = e,
            m = r.useRef(null),
            f = (0, a.s)(t, m),
            h = r.useRef(void 0),
            g = !i
          function b(e) {
            let t = h.current || m.current.getBoundingClientRect(),
              r = Q([0, t.height], g ? [o, n] : [n, o])
            return ((h.current = t), r(e - t.top))
          }
          return (
            v(b, "getValueFromPointer"),
            (0, p.jsx)(E, {
              scope: e.__scopeSlider,
              startEdge: g ? "bottom" : "top",
              endEdge: g ? "top" : "bottom",
              size: "height",
              direction: g ? 1 : -1,
              children: (0, p.jsx)(A, {
                "data-orientation": "vertical",
                ...c,
                ref: f,
                style: { ...c.style, "--radix-slider-thumb-transform": "translateY(50%)" },
                onSlideStart: (e) => {
                  let t = b(e.clientY)
                  l?.(t)
                },
                onSlideMove: (e) => {
                  let t = b(e.clientY)
                  s?.(t)
                },
                onSlideEnd: () => {
                  ;((h.current = void 0), u?.())
                },
                onStepKeyDown: (e) => {
                  let t = x[g ? "from-bottom" : "from-top"].includes(e.key)
                  d?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderVertical"),
      ),
      A = r.forwardRef(
        v(function (e, t) {
          let {
              __scopeSlider: n,
              onSlideStart: r,
              onSlideMove: o,
              onSlideEnd: a,
              onHomeKeyDown: l,
              onEndKeyDown: s,
              onStepKeyDown: u,
              ...d
            } = e,
            c = P(w, n)
          return (0, p.jsx)(m.sG.span, {
            ...d,
            ref: t,
            onKeyDown: (0, i.mK)(e.onKeyDown, (e) => {
              "Home" === e.key
                ? (l(e), e.preventDefault())
                : "End" === e.key
                  ? (s(e), e.preventDefault())
                  : g.concat(b).includes(e.key) && (u(e), e.preventDefault())
            }),
            onPointerDown: (0, i.mK)(e.onPointerDown, (e) => {
              let t = e.target
              ;(t.setPointerCapture(e.pointerId),
                e.preventDefault(),
                c.thumbs.has(t) ? t.focus({ preventScroll: !0, focusVisible: !1 }) : r(e))
            }),
            onPointerMove: (0, i.mK)(e.onPointerMove, (e) => {
              e.target.hasPointerCapture(e.pointerId) && o(e)
            }),
            onPointerUp: (0, i.mK)(e.onPointerUp, (e) => {
              let t = e.target
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
            }),
          })
        }, "SliderImpl"),
      ),
      R = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, ...r } = e,
            o = P("SliderTrack", n)
          return (0, p.jsx)(m.sG.span, {
            "data-disabled": o.disabled ? "" : void 0,
            "data-orientation": o.orientation,
            ...r,
            ref: t,
          })
        }, "SliderTrack"),
      ),
      V = "SliderRange",
      I = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, ...o } = e,
            i = P(V, n),
            l = T(V, n),
            s = r.useRef(null),
            u = (0, a.s)(t, s),
            d = i.values.length,
            c = i.values.map((e) => q(e, i.min, i.max)),
            f = d > 1 ? Math.min(...c) : 0,
            h = 100 - Math.max(...c)
          return (0, p.jsx)(m.sG.span, {
            "data-orientation": i.orientation,
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: u,
            style: { ...e.style, [l.startEdge]: f + "%", [l.endEdge]: h + "%" },
          })
        }, "SliderRange"),
      ),
      [B, N] = C("SliderThumb")
    function F(e) {
      let { __scopeSlider: t, name: n, children: o, internal_do_not_use_render: i } = e,
        a = P("SliderThumbProvider", t),
        l = S(t),
        [s, u] = r.useState(null),
        d = r.useMemo(() => (s ? l().findIndex((e) => e.ref.current === s) : -1), [l, s]),
        m = (0, c.X)(s),
        f = !s || !!a.form || !!s.closest("form"),
        h = a.values[d],
        v = n ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
        g = void 0 === h ? 0 : q(h, a.min, a.max)
      r.useEffect(() => {
        if (s)
          return (
            a.thumbs.add(s),
            () => {
              a.thumbs.delete(s)
            }
          )
      }, [s, a.thumbs])
      let b = {
        value: h,
        name: v,
        form: a.form,
        isFormControl: f,
        index: d,
        thumb: s,
        onThumbChange: u,
        percent: g,
        size: m,
      }
      return (0, p.jsx)(B, { scope: t, ...b, children: et(i) ? i(b) : o })
    }
    v(F, "SliderThumbProvider")
    var K = "SliderThumbTrigger",
      O = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, ...r } = e,
            o = P(K, n),
            l = T(K, n),
            { index: s, value: u, percent: d, size: c, onThumbChange: f } = N(K, n),
            h = (0, a.s)(t, f),
            v = G(s, o.values.length),
            g = c?.[l.size],
            b = g ? $(g, d, l.direction) : 0
          return (0, p.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [l.startEdge]: `calc(${d}% + ${b}px)`,
            },
            children: (0, p.jsx)(y.ItemSlot, {
              scope: n,
              children: (0, p.jsx)(m.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || v,
                "aria-valuemin": o.min,
                "aria-valuenow": u,
                "aria-valuemax": o.max,
                "aria-orientation": o.orientation,
                "data-orientation": o.orientation,
                "data-disabled": o.disabled ? "" : void 0,
                tabIndex: o.disabled ? void 0 : 0,
                ...r,
                ref: h,
                style: void 0 === u ? { display: "none" } : e.style,
                onFocus: (0, i.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = s
                }),
              }),
            }),
          })
        }, "SliderThumbTrigger"),
      ),
      z = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, name: r, ...o } = e
          return (0, p.jsx)(F, {
            __scopeSlider: n,
            name: r,
            internal_do_not_use_render: ({ index: e, isFormControl: r }) =>
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(O, { ...o, ref: t, __scopeSlider: n }),
                  r ? (0, p.jsx)(H, { __scopeSlider: n }, e) : null,
                ],
              }),
          })
        }, "SliderThumb"),
      ),
      H = r.forwardRef(
        v(function ({ __scopeSlider: e, ...t }, n) {
          let { value: o, name: i, form: l } = N("SliderBubbleInput", e),
            s = r.useRef(null),
            u = (0, a.s)(s, n),
            c = d(o)
          return (
            r.useEffect(() => {
              let e = s.current
              if (!e) return
              let t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
              if (c !== o && t) {
                let n = new Event("input", { bubbles: !0 })
                ;(t.call(e, o), e.dispatchEvent(n))
              }
            }, [c, o]),
            (0, p.jsx)(m.sG.input, { style: { display: "none" }, name: i, form: l, ...t, ref: u, defaultValue: o })
          )
        }, "SliderBubbleInput"),
      )
    function U(e = [], t, n) {
      let r = [...e]
      return ((r[n] = t), r.sort((e, t) => e - t))
    }
    function q(e, t, n) {
      return (0, o.q)((100 / (n - t)) * (e - t), [0, 100])
    }
    function G(e, t) {
      return t > 2 ? `Value ${e + 1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
    }
    function Y(e, t) {
      if (1 === e.length) return 0
      let n = e.map((e) => Math.abs(e - t)),
        r = Math.min(...n)
      return n.indexOf(r)
    }
    function $(e, t, n) {
      let r = e / 2,
        o = Q([0, 50], [0, r])
      return (r - o(t) * n) * n
    }
    function X(e) {
      return e.slice(0, -1).map((t, n) => e[n + 1] - t)
    }
    function Z(e, t) {
      return !(t > 0) || Math.min(...X(e)) >= t
    }
    function Q(e, t) {
      return (n) => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0]
        let r = (t[1] - t[0]) / (e[1] - e[0])
        return t[0] + r * (n - e[0])
      }
    }
    function W(e) {
      if (!Number.isFinite(e)) return 0
      let t = e.toString()
      if (t.includes("e")) {
        let [e, n] = t.split("e"),
          r = e.split(".")[1] || "",
          o = Number(n)
        return Math.max(0, r.length - o)
      }
      let n = t.split(".")[1]
      return n ? n.length : 0
    }
    function J(e, t) {
      let n = Math.pow(10, t)
      return Math.round(e * n) / n
    }
    function ee(e, { min: t, step: n, direction: r, multiplier: o }) {
      let i,
        a = W(n),
        l = (e - t) / n,
        s = Math.round(l)
      return ((i = J(s * n + t, a) === J(e, a) ? s + o * r : r > 0 ? Math.ceil(l) : Math.floor(l)), J(i * n + t, a))
    }
    function et(e) {
      return "function" == typeof e
    }
    ;(v(U, "getNextSortedValues"),
      v(q, "convertValueToPercentage"),
      v(G, "getLabel"),
      v(Y, "getClosestValueIndex"),
      v($, "getThumbInBoundsOffset"),
      v(X, "getStepsBetweenValues"),
      v(Z, "hasMinStepsBetweenValues"),
      v(Q, "linearScale"),
      v(W, "getDecimalCount"),
      v(J, "roundValue"),
      v(ee, "getNextStepValue"),
      v(et, "isFunction"))
  },
}
//# sourceMappingURL=587250.4133307311.js.map
