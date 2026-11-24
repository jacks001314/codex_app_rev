export const __rspack_esm_ids = [759492]
export const __webpack_modules__ = {
  Mqhc(e, t, n) {
    n.d(t, { MarkdownVideoPlayer: () => C })
    var r = n("ABep"),
      o = n("QosV"),
      a = n("slpy"),
      l = n("y5If"),
      i = n("gObc"),
      s = n("zlDi"),
      u = n("YAOF"),
      d = n("on57"),
      c = n("zd8w"),
      m = n("Wf1j"),
      f = n("oyxz"),
      h = n("Sm6l"),
      p = n("bqtn"),
      v = n("HOLv"),
      g = n("bVeK"),
      x = n("nzx4"),
      b = n("aepO"),
      w = n("S7UD"),
      y = n("HgLj"),
      S = n("dCE2")
    function C(e) {
      let t,
        n,
        a,
        u,
        h,
        C,
        D,
        E,
        _,
        T,
        L,
        R,
        I,
        V,
        A,
        N,
        B,
        F,
        z,
        K,
        O,
        H,
        U,
        q,
        Y,
        $,
        G,
        W,
        X,
        Z,
        J,
        Q,
        ee,
        et,
        en,
        er,
        eo,
        ea,
        el,
        ei,
        es,
        eu,
        ed,
        ec,
        em,
        ef,
        eh,
        ep,
        ev,
        eg,
        ex,
        eb,
        ew,
        ey,
        eS,
        eC,
        ej,
        ek,
        eM,
        eP,
        eD,
        eE,
        e_,
        eT,
        eL,
        eR,
        eI,
        eV,
        eA,
        eN,
        eB,
        eF,
        ez,
        eK,
        eO,
        eH,
        eU,
        eq,
        eY = (0, o.c)(232),
        {
          ref: e$,
          allowWide: eG,
          allowFullscreen: eW,
          autoPlay: eX,
          className: eZ,
          defaultMuted: eJ,
          durationHint: eQ,
          height: e1,
          label: e0,
          onDurationChange: e2,
          onError: e3,
          onExpand: e6,
          onLoadedMetadata: e5,
          onLoadedData: e9,
          onPlaying: e4,
          onResize: e7,
          onSaveCopy: e8,
          presentation: te,
          poster: tt,
          preload: tn,
          previewPlaceholder: tr,
          previewLoading: to,
          sizing: ta,
          src: tl,
          sourceUrl: ti,
          title: ts,
          transparentBackground: tu,
          videoStyle: td,
          width: tc,
        } = e,
        tm = void 0 === eW || eW,
        tf = void 0 === eQ ? 0 : eQ,
        th = void 0 === te ? "below" : te,
        tp = void 0 === tn ? "metadata" : tn,
        tv = void 0 !== tu && tu,
        tg = "content" === ta ? (ti ?? tl) : void 0
      eY[0] !== tg || eY[1] !== e1 || eY[2] !== tc
        ? ((t = null == tc && null == e1 ? (0, S.I3)(tg) : void 0),
          (eY[0] = tg),
          (eY[1] = e1),
          (eY[2] = tc),
          (eY[3] = t))
        : (t = eY[3])
      let tx = t,
        tb = (0, m.A)(),
        tw = (0, c.useRef)(null),
        ty = (0, c.useRef)(null),
        [tS, tC] = (0, c.useState)(null),
        [tj, tk] = (0, c.useState)(!1),
        [tM, tP] = (0, c.useState)(0),
        [tD, tE] = (0, c.useState)(0),
        [t_, tT] = (0, c.useState)(!1),
        [tL, tR] = (0, c.useState)(1),
        [tI, tV] = (0, c.useState)(void 0 !== eJ && eJ),
        [tA, tN] = (0, c.useState)(1),
        [tB, tF] = (0, c.useState)(!1),
        [tz, tK] = (0, c.useState)(!1),
        [tO, tH] = (0, c.useState)(!1),
        [tU, tq] = (0, c.useState)(!1),
        tY = (0, w.ax)(tl) ? tl : void 0,
        t$ = (0, c.useEffectEvent)(e3)
      ;(eY[4] !== tY || eY[5] !== t$
        ? ((n = () => {
            let e = tw.current
            if (null != e && null != tY) return (0, w.Kr)(e, tY, () => t$(e))
          }),
          (eY[4] = tY),
          (eY[5] = t$),
          (eY[6] = n))
        : (n = eY[6]),
        eY[7] !== tY ? ((a = [tY]), (eY[7] = tY), (eY[8] = a)) : (a = eY[8]),
        (0, c.useEffect)(n, a),
        eY[9] !== tS
          ? ((u = () => {
              if (null == tS) return
              let e = tS.ownerDocument,
                t = () => {
                  ;(tk(e.fullscreenElement === tS), e.fullscreenElement === tS && tw.current?.focus())
                }
              return (e.addEventListener("fullscreenchange", t), () => e.removeEventListener("fullscreenchange", t))
            }),
            (h = [tS]),
            (eY[9] = tS),
            (eY[10] = u),
            (eY[11] = h))
          : ((u = eY[10]), (h = eY[11])),
        (0, c.useEffect)(u, h),
        eY[12] !== tU || eY[13] !== t_ || eY[14] !== tS || eY[15] !== th
          ? ((C = () => {
              if (null == tS || "overlay" !== th || !t_ || tU) return
              let e = window.setTimeout(() => tH(!0), 2500),
                t = () => {
                  ;(tH(!1), window.clearTimeout(e), (e = window.setTimeout(() => tH(!0), 2500)))
                }
              return (
                tS.addEventListener("pointermove", t),
                tS.addEventListener("pointerdown", t),
                tS.addEventListener("keydown", t),
                () => {
                  ;(window.clearTimeout(e),
                    tS.removeEventListener("pointermove", t),
                    tS.removeEventListener("pointerdown", t),
                    tS.removeEventListener("keydown", t))
                }
              )
            }),
            (D = [tS, th, t_, tU]),
            (eY[12] = tU),
            (eY[13] = t_),
            (eY[14] = tS),
            (eY[15] = th),
            (eY[16] = C),
            (eY[17] = D))
          : ((C = eY[16]), (D = eY[17])),
        (0, c.useEffect)(C, D),
        eY[18] !== tf ? ((E = Number.isFinite(tf) ? Math.max(0, tf) : 0), (eY[18] = tf), (eY[19] = E)) : (E = eY[19]))
      let tG = E
      eY[20] !== tM || eY[21] !== tG || eY[22] !== tD || eY[23] !== tb
        ? ((_ = tb.formatMessage(
            { id: "markdown.video.progress", defaultMessage: "{currentTime} / {duration}" },
            { currentTime: P(tM), duration: P(tD || tG) },
          )),
          (eY[20] = tM),
          (eY[21] = tG),
          (eY[22] = tD),
          (eY[23] = tb),
          (eY[24] = _))
        : (_ = eY[24])
      let tW = _
      eY[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = () => {
            let e = tw.current
            null != e && (tF(!1), e.paused ? e.play().catch(() => tF(!0)) : e.pause())
          }),
          (eY[25] = T))
        : (T = eY[25])
      let tX = T
      eY[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = (e) => {
            let t = ty.current
            if (null == t || t.pointerId !== e.pointerId) return
            ty.current = null
            let n = tw.current
            t.wasPlaying && null != n && (tF(!1), n.play().catch(() => tF(!0)))
          }),
          (eY[26] = L))
        : (L = eY[26])
      let tZ = L
      eY[27] !== e6 || eY[28] !== tS
        ? ((R = () => {
            null != e6 && null != tw.current
              ? e6(tw.current)
              : null == tS ||
                (tF(!1),
                (tS.ownerDocument.fullscreenElement === tS
                  ? tS.ownerDocument.exitFullscreen()
                  : tS.requestFullscreen()
                ).catch(() => tF(!0)))
          }),
          (eY[27] = e6),
          (eY[28] = tS),
          (eY[29] = R))
        : (R = eY[29])
      let tJ = R
      eY[30] !== tb || eY[31] !== t_
        ? ((I = t_
            ? tb.formatMessage({ id: "markdown.video.pause", defaultMessage: "Pause video" })
            : tb.formatMessage({ id: "markdown.video.play", defaultMessage: "Play video" })),
          (eY[30] = tb),
          (eY[31] = t_),
          (eY[32] = I))
        : (I = eY[32])
      let tQ = I
      eY[33] !== tb || eY[34] !== tj
        ? ((V = tj
            ? tb.formatMessage({ id: "markdown.video.exitFullscreen", defaultMessage: "Exit fullscreen" })
            : tb.formatMessage({ id: "markdown.video.fullscreen", defaultMessage: "Fullscreen" })),
          (eY[33] = tb),
          (eY[34] = tj),
          (eY[35] = V))
        : (V = eY[35])
      let t1 = V
      eY[36] !== tx || eY[37] !== tj
        ? ((A = tx && !tj ? { width: tx.width } : void 0), (eY[36] = tx), (eY[37] = tj), (eY[38] = A))
        : (A = eY[38])
      let t0 = "overlay" === th && "overlay-k_Dc2T",
        t2 = "overlay" === th ? "relative aspect-video rounded-md" : "bg-surface",
        t3 = "overlay" === th && !tv && "bg-media-background",
        t6 = "container" === ta ? "size-full" : "my-3 w-fit rounded-md shadow-md",
        t5 =
          "content" === ta &&
          (eG
            ? "max-h-[var(--markdown-wide-block-max-height)] max-w-full"
            : "max-h-[min(48vh,32rem)] max-w-[min(100%,44rem)]")
      eY[39] !== eZ || eY[40] !== t0 || eY[41] !== t2 || eY[42] !== t3 || eY[43] !== t6 || eY[44] !== t5
        ? ((N = (0, d.A)("player-W1zENa", t0, "flex min-h-0 min-w-0 flex-col overflow-hidden", t2, t3, t6, t5, eZ)),
          (eY[39] = eZ),
          (eY[40] = t0),
          (eY[41] = t2),
          (eY[42] = t3),
          (eY[43] = t6),
          (eY[44] = t5),
          (eY[45] = N))
        : (N = eY[45])
      let t9 = "overlay" !== th || tv ? void 0 : "dark",
        t4 = to || void 0,
        t7 = (t_ && tO && !tU && !tB) || void 0
      ;(eY[46] !== tU || eY[47] !== tJ
        ? ((B = (e) => {
            "Escape" !== e.key ||
              tU ||
              e.currentTarget.ownerDocument.fullscreenElement !== e.currentTarget ||
              (e.preventDefault(), e.stopPropagation(), tJ())
          }),
          (eY[46] = tU),
          (eY[47] = tJ),
          (eY[48] = B))
        : (B = eY[48]),
        eY[49] !== e$
          ? ((F = (0, y.P)((e) => {
              if (((tw.current = e), null != e)) {
                let t = e.duration
                tE(Number.isFinite(t) && t > 0 ? t : 0)
              }
            }, e$)),
            (eY[49] = e$),
            (eY[50] = F))
          : (F = eY[50]))
      let t8 = null == tY ? tl : void 0,
        ne = tc ?? tx?.width,
        nt = e1 ?? tx?.height,
        nn = "overlay" === th
      ;(eY[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = (e) => {
            ;(" " === e.key || "Enter" === e.key) && (e.preventDefault(), e.repeat || tX())
          }),
          (eY[51] = z))
        : (z = eY[51]),
        eY[52] !== e2
          ? ((K = (e) => {
              let t = e.currentTarget.duration
              ;(tE(Number.isFinite(t) && t > 0 ? t : 0), e2?.(e.currentTarget))
            }),
            (eY[52] = e2),
            (eY[53] = K))
          : (K = eY[53]),
        eY[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (e) => {
              tP(e.currentTarget.currentTime)
            }),
            (H = () => {
              ;(tH(!1), tT(!0), tF(!1))
            }),
            (eY[54] = O),
            (eY[55] = H))
          : ((O = eY[54]), (H = eY[55])),
        eY[56] !== e4 ? ((U = (e) => e4?.(e.currentTarget)), (eY[56] = e4), (eY[57] = U)) : (U = eY[57]),
        eY[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = () => tT(!1)),
            (Y = () => tT(!1)),
            ($ = (e) => {
              ;(tR(e.currentTarget.volume), tV(e.currentTarget.muted))
            }),
            (G = (e) => tN(e.currentTarget.playbackRate)),
            (eY[58] = q),
            (eY[59] = Y),
            (eY[60] = $),
            (eY[61] = G))
          : ((q = eY[58]), (Y = eY[59]), ($ = eY[60]), (G = eY[61])),
        eY[62] !== e3 ? ((W = (e) => e3(e.currentTarget)), (eY[62] = e3), (eY[63] = W)) : (W = eY[63]),
        eY[64] !== e7 ? ((X = (e) => e7?.(e.currentTarget)), (eY[64] = e7), (eY[65] = X)) : (X = eY[65]),
        eY[66] !== tg || eY[67] !== e5
          ? ((Z = (e) => {
              let { currentTarget: t } = e
              ;((0, S.by)(tg, t.videoWidth, t.videoHeight), e5?.(t))
            }),
            (eY[66] = tg),
            (eY[67] = e5),
            (eY[68] = Z))
          : (Z = eY[68]),
        eY[69] !== e9 ? ((J = (e) => e9?.(e.currentTarget)), (eY[69] = e9), (eY[70] = J)) : (J = eY[70]),
        eY[71] !== eX ||
        eY[72] !== e0 ||
        eY[73] !== tI ||
        eY[74] !== tt ||
        eY[75] !== tp ||
        eY[76] !== F ||
        eY[77] !== t8 ||
        eY[78] !== ne ||
        eY[79] !== nt ||
        eY[80] !== nn ||
        eY[81] !== K ||
        eY[82] !== U ||
        eY[83] !== W ||
        eY[84] !== X ||
        eY[85] !== Z ||
        eY[86] !== J ||
        eY[87] !== ts ||
        eY[88] !== td
          ? ((Q = (0, r.jsx)("video", {
              ref: F,
              className:
                "block min-h-0 w-full flex-1 cursor-interaction object-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
              src: t8,
              title: ts,
              style: td,
              width: ne,
              height: nt,
              "aria-label": e0,
              tabIndex: 0,
              disablePictureInPicture: nn,
              autoPlay: eX,
              muted: tI,
              playsInline: !0,
              poster: tt,
              preload: tp,
              onClick: tX,
              onKeyDown: z,
              onDurationChange: K,
              onTimeUpdate: O,
              onPlay: H,
              onPlaying: U,
              onPause: q,
              onEnded: Y,
              onVolumeChange: $,
              onRateChange: G,
              onError: W,
              onResize: X,
              onLoadedMetadata: Z,
              onLoadedData: J,
            })),
            (eY[71] = eX),
            (eY[72] = e0),
            (eY[73] = tI),
            (eY[74] = tt),
            (eY[75] = tp),
            (eY[76] = F),
            (eY[77] = t8),
            (eY[78] = ne),
            (eY[79] = nt),
            (eY[80] = nn),
            (eY[81] = K),
            (eY[82] = U),
            (eY[83] = W),
            (eY[84] = X),
            (eY[85] = Z),
            (eY[86] = J),
            (eY[87] = ts),
            (eY[88] = td),
            (eY[89] = Q))
          : (Q = eY[89]),
        eY[90] !== tj || eY[91] !== t_ || eY[92] !== tQ || eY[93] !== tS || eY[94] !== th
          ? ((ee =
              "overlay" !== th || t_
                ? null
                : (0, r.jsx)(k, {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    color: "mediaOverlay",
                    portalContainer: tj ? tS : void 0,
                    label: tQ,
                    onClick: tX,
                    children: (0, r.jsx)(v.I, { asset: s.k }),
                  })),
            (eY[90] = tj),
            (eY[91] = t_),
            (eY[92] = tQ),
            (eY[93] = tS),
            (eY[94] = th),
            (eY[95] = ee))
          : (ee = eY[95]))
      let nr = "overlay" === th && tv ? "dark" : void 0,
        no =
          "overlay" === th
            ? "absolute inset-x-0 bottom-0 bg-media-background/80 text-media-foreground"
            : "border-t border-subtle"
      eY[96] !== no
        ? ((et = (0, d.A)("controls-aun7ma", "@container/video-controls shrink-0 select-none", no)),
          (eY[96] = no),
          (eY[97] = et))
        : (et = eY[97])
      let na = tj ? tS : void 0,
        nl = t_ ? i.F : s.k
      ;(eY[98] !== nl ? ((en = (0, r.jsx)(v.I, { asset: nl })), (eY[98] = nl), (eY[99] = en)) : (en = eY[99]),
        eY[100] !== tQ || eY[101] !== na || eY[102] !== en
          ? ((er = (0, r.jsx)(k, { portalContainer: na, label: tQ, onClick: tX, children: en })),
            (eY[100] = tQ),
            (eY[101] = na),
            (eY[102] = en),
            (eY[103] = er))
          : (er = eY[103]),
        eY[104] !== tb
          ? ((eo = tb.formatMessage({ id: "markdown.video.seek", defaultMessage: "Seek in video" })),
            (eY[104] = tb),
            (eY[105] = eo))
          : (eo = eY[105]))
      let ni = tD <= 0,
        ns = tD || 1,
        nu = Math.min(tM, tD)
      ;(eY[106] !== nu ? ((ea = [nu]), (eY[106] = nu), (eY[107] = ea)) : (ea = eY[107]),
        eY[108] !== tD || eY[109] !== th
          ? ((el = (e) => {
              let t = tw.current
              "overlay" === th &&
                tD > 0 &&
                null != t &&
                ("ArrowRight" === e.key || "ArrowLeft" === e.key) &&
                (e.preventDefault(),
                (t.currentTime = Math.max(0, Math.min(tD, t.currentTime + ("ArrowRight" === e.key ? 5 : -5)))),
                tP(t.currentTime))
            }),
            (eY[108] = tD),
            (eY[109] = th),
            (eY[110] = el))
          : (el = eY[110]),
        eY[111] !== tD
          ? ((ei = (e) => {
              let t = tw.current
              null == t ||
                tD <= 0 ||
                0 !== e.button ||
                null != ty.current ||
                ((ty.current = { pointerId: e.pointerId, wasPlaying: !t.paused }), t.pause())
            }),
            (eY[111] = tD),
            (eY[112] = ei))
          : (ei = eY[112]),
        eY[113] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (e) => {
              let [t] = e,
                n = tw.current
              null != n && null != t && ((n.currentTime = t), tP(n.currentTime))
            }),
            (eY[113] = es))
          : (es = eY[113]),
        eY[114] !== tW ||
        eY[115] !== eo ||
        eY[116] !== ni ||
        eY[117] !== ns ||
        eY[118] !== ea ||
        eY[119] !== el ||
        eY[120] !== ei
          ? ((eu = (0, r.jsx)("span", {
              className: "flex min-w-0 flex-1 @max-xs/video-controls:order-first @max-xs/video-controls:basis-full",
              children: (0, r.jsx)(M, {
                label: eo,
                valueText: tW,
                disabled: ni,
                min: 0,
                max: ns,
                step: 0.1,
                value: ea,
                onKeyDown: el,
                onPointerDownCapture: ei,
                onPointerUp: tZ,
                onPointerCancel: tZ,
                onLostPointerCapture: tZ,
                onValueChange: es,
              }),
            })),
            (eY[114] = tW),
            (eY[115] = eo),
            (eY[116] = ni),
            (eY[117] = ns),
            (eY[118] = ea),
            (eY[119] = el),
            (eY[120] = ei),
            (eY[121] = eu))
          : (eu = eY[121]),
        eY[122] !== tW
          ? ((ed = (0, r.jsx)("span", {
              className: "shrink-0 text-xs whitespace-nowrap text-secondary tabular-nums",
              children: tW,
            })),
            (eY[122] = tW),
            (eY[123] = ed))
          : (ed = eY[123]),
        eY[124] === Symbol.for("react.memo_cache_sentinel")
          ? ((ec = (e) => {
              ;(tH(!1), tq(e))
            }),
            (eY[124] = ec))
          : (ec = eY[124]))
      let nd = tj ? tS : void 0
      ;(eY[125] !== tb
        ? ((em = tb.formatMessage({ id: "markdown.video.volume", defaultMessage: "Video volume" })),
          (eY[125] = tb),
          (eY[126] = em))
        : (em = eY[126]),
        eY[127] !== tI || eY[128] !== tL
          ? ((ef = tI || 0 === tL ? (0, r.jsx)(g.sbY, {}) : (0, r.jsx)(g.BOJ, {})),
            (eY[127] = tI),
            (eY[128] = tL),
            (eY[129] = ef))
          : (ef = eY[129]),
        eY[130] !== nd || eY[131] !== em || eY[132] !== ef
          ? ((eh = (0, r.jsx)(x.Wv, {
              asChild: !0,
              children: (0, r.jsx)(k, { portalContainer: nd, label: em, children: ef }),
            })),
            (eY[130] = nd),
            (eY[131] = em),
            (eY[132] = ef),
            (eY[133] = eh))
          : (eh = eY[133]))
      let nc = tj ? tS : void 0
      eY[134] !== tb
        ? ((ep = tb.formatMessage({ id: "markdown.video.volume", defaultMessage: "Video volume" })),
          (eY[134] = tb),
          (eY[135] = ep))
        : (ep = eY[135])
      let nm = tj ? tS : void 0
      ;(eY[136] !== tb
        ? ((ev = tb.formatMessage({ id: "markdown.video.mute", defaultMessage: "Mute video" })),
          (eY[136] = tb),
          (eY[137] = ev))
        : (ev = eY[137]),
        eY[138] === Symbol.for("react.memo_cache_sentinel")
          ? ((eg = () => {
              let e = tw.current
              null != e && (e.muted = !e.muted)
            }),
            (eY[138] = eg))
          : (eg = eY[138]),
        eY[139] !== tI || eY[140] !== tL
          ? ((ex = tI || 0 === tL ? (0, r.jsx)(g.sbY, {}) : (0, r.jsx)(g.BOJ, {})),
            (eY[139] = tI),
            (eY[140] = tL),
            (eY[141] = ex))
          : (ex = eY[141]),
        eY[142] !== tI || eY[143] !== nm || eY[144] !== ev || eY[145] !== ex
          ? ((eb = (0, r.jsx)(k, { portalContainer: nm, label: ev, "aria-pressed": tI, onClick: eg, children: ex })),
            (eY[142] = tI),
            (eY[143] = nm),
            (eY[144] = ev),
            (eY[145] = ex),
            (eY[146] = eb))
          : (eb = eY[146]),
        eY[147] !== tb
          ? ((ew = tb.formatMessage({ id: "markdown.video.volume", defaultMessage: "Video volume" })),
            (eY[147] = tb),
            (eY[148] = ew))
          : (ew = eY[148]),
        eY[149] !== tb || eY[150] !== tI || eY[151] !== tL
          ? ((ey = tb.formatNumber(tI ? 0 : tL, { style: "percent" })),
            (eY[149] = tb),
            (eY[150] = tI),
            (eY[151] = tL),
            (eY[152] = ey))
          : (ey = eY[152]))
      let nf = tI ? 0 : tL
      ;(eY[153] !== nf ? ((eS = [nf]), (eY[153] = nf), (eY[154] = eS)) : (eS = eY[154]),
        eY[155] === Symbol.for("react.memo_cache_sentinel")
          ? ((eC = (e) => {
              let [t] = e,
                n = tw.current
              null != n && null != t && ((n.volume = t), (n.muted = !1))
            }),
            (eY[155] = eC))
          : (eC = eY[155]),
        eY[156] !== ew || eY[157] !== ey || eY[158] !== eS
          ? ((ej = (0, r.jsx)(M, {
              label: ew,
              valueText: ey,
              min: 0,
              max: 1,
              step: 0.01,
              value: eS,
              onValueChange: eC,
            })),
            (eY[156] = ew),
            (eY[157] = ey),
            (eY[158] = eS),
            (eY[159] = ej))
          : (ej = eY[159]),
        eY[160] !== eb || eY[161] !== ej
          ? ((ek = (0, r.jsxs)("span", { className: "flex w-40 items-center gap-2", children: [eb, ej] })),
            (eY[160] = eb),
            (eY[161] = ej),
            (eY[162] = ek))
          : (ek = eY[162]),
        eY[163] !== nc || eY[164] !== ep || eY[165] !== ek
          ? ((eM = (0, r.jsx)(x.hl, {
              align: "end",
              side: "bottom",
              size: "content",
              variant: "menu",
              portalContainer: nc,
              "aria-label": ep,
              children: ek,
            })),
            (eY[163] = nc),
            (eY[164] = ep),
            (eY[165] = ek),
            (eY[166] = eM))
          : (eM = eY[166]),
        eY[167] !== eh || eY[168] !== eM
          ? ((eP = (0, r.jsxs)(x.AM, { onOpenChange: ec, children: [eh, eM] })),
            (eY[167] = eh),
            (eY[168] = eM),
            (eY[169] = eP))
          : (eP = eY[169]))
      let nh = tj ? tS : void 0
      eY[170] === Symbol.for("react.memo_cache_sentinel")
        ? ((eD = (e) => {
            ;(tH(!1), tq(e), e || tK(!1))
          }),
          (eY[170] = eD))
        : (eD = eY[170])
      let np = tj ? tS : void 0
      ;(eY[171] !== tb
        ? ((eE = tb.formatMessage({ id: "markdown.video.options", defaultMessage: "Video options" })),
          (eY[171] = tb),
          (eY[172] = eE))
        : (eE = eY[172]),
        eY[173] === Symbol.for("react.memo_cache_sentinel")
          ? ((e_ = (0, r.jsx)(g.l0Y, {})), (eY[173] = e_))
          : (e_ = eY[173]),
        eY[174] !== np || eY[175] !== eE
          ? ((eT = (0, r.jsx)(k, { portalContainer: np, label: eE, children: e_ })),
            (eY[174] = np),
            (eY[175] = eE),
            (eY[176] = eT))
          : (eT = eY[176]),
        eY[177] !== e8
          ? ((eL =
              null != e8
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(p.ms.Item, {
                        onSelect: () => {
                          ;(tF(!1), e8().catch(() => tF(!0)))
                        },
                        children: (0, r.jsx)(f.A, {
                          id: "markdown.video.saveCopy",
                          defaultMessage: "Save video as\u2026",
                        }),
                      }),
                      (0, r.jsx)(p.ms.Separator, {}),
                    ],
                  })
                : null),
            (eY[177] = e8),
            (eY[178] = eL))
          : (eL = eY[178]),
        eY[179] !== tz || eY[180] !== ti
          ? ((eR =
              null != ti
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(p.ms.Item, {
                        onSelect: (e) => {
                          ;(e.preventDefault(), (0, b.lW)(ti).then(tK))
                        },
                        children: tz
                          ? (0, r.jsx)(f.A, { id: "markdown.video.linkCopied", defaultMessage: "Link copied" })
                          : (0, r.jsx)(f.A, { id: "markdown.video.copyLink", defaultMessage: "Copy link" }),
                      }),
                      (0, r.jsx)(p.ms.Separator, {}),
                    ],
                  })
                : null),
            (eY[179] = tz),
            (eY[180] = ti),
            (eY[181] = eR))
          : (eR = eY[181]),
        eY[182] === Symbol.for("react.memo_cache_sentinel")
          ? ((eI = (0, r.jsx)(p.ms.SectionLabel, {
              children: (0, r.jsx)(f.A, { id: "markdown.video.speed", defaultMessage: "Playback speed" }),
            })),
            (eY[182] = eI))
          : (eI = eY[182]))
      let nv = String(tA)
      return (
        eY[183] === Symbol.for("react.memo_cache_sentinel")
          ? ((eV = (e) => {
              let t = tw.current
              null != t && (t.playbackRate = Number(e))
            }),
            (eA = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(j)),
            (eY[183] = eV),
            (eY[184] = eA))
          : ((eV = eY[183]), (eA = eY[184])),
        eY[185] !== nv
          ? ((eN = (0, r.jsx)(p.ms.RadioGroup, { value: nv, onValueChange: eV, children: eA })),
            (eY[185] = nv),
            (eY[186] = eN))
          : (eN = eY[186]),
        eY[187] !== tS || eY[188] !== th
          ? ((eB =
              "overlay" !== th && tS?.ownerDocument.pictureInPictureEnabled
                ? (0, r.jsx)(p.ms.Item, {
                    onSelect: () => {
                      let e = tw.current
                      null == e ||
                        (tF(!1),
                        (e.ownerDocument.pictureInPictureElement === e
                          ? e.ownerDocument.exitPictureInPicture()
                          : e.requestPictureInPicture()
                        ).catch(() => tF(!0)))
                    },
                    children: (0, r.jsx)(f.A, {
                      id: "markdown.video.pictureInPicture",
                      defaultMessage: "Picture in picture",
                    }),
                  })
                : null),
            (eY[187] = tS),
            (eY[188] = th),
            (eY[189] = eB))
          : (eB = eY[189]),
        eY[190] !== eN || eY[191] !== eB || eY[192] !== nh || eY[193] !== eT || eY[194] !== eL || eY[195] !== eR
          ? ((eF = (0, r.jsxs)(p.Ab, {
              align: "end",
              portalContainer: nh,
              onOpenChange: eD,
              triggerButton: eT,
              children: [eL, eR, eI, eN, eB],
            })),
            (eY[190] = eN),
            (eY[191] = eB),
            (eY[192] = nh),
            (eY[193] = eT),
            (eY[194] = eL),
            (eY[195] = eR),
            (eY[196] = eF))
          : (eF = eY[196]),
        eY[197] !== tm ||
        eY[198] !== t1 ||
        eY[199] !== tb ||
        eY[200] !== tj ||
        eY[201] !== e6 ||
        eY[202] !== tS ||
        eY[203] !== tJ
          ? ((ez =
              null != e6 || (tm && tS?.ownerDocument.fullscreenEnabled)
                ? (0, r.jsx)(k, {
                    portalContainer: tj ? tS : void 0,
                    label:
                      null != e6
                        ? tb.formatMessage({ id: "markdown.video.expand", defaultMessage: "Expand video" })
                        : t1,
                    onClick: tJ,
                    children: tj ? (0, r.jsx)(v.I, { asset: l.i }) : (0, r.jsx)(g.Zdv, {}),
                  })
                : null),
            (eY[197] = tm),
            (eY[198] = t1),
            (eY[199] = tb),
            (eY[200] = tj),
            (eY[201] = e6),
            (eY[202] = tS),
            (eY[203] = tJ),
            (eY[204] = ez))
          : (ez = eY[204]),
        eY[205] !== eF || eY[206] !== ez || eY[207] !== eP
          ? ((eK = (0, r.jsxs)("span", {
              className: "ms-auto flex shrink-0 items-center gap-1.5",
              children: [eP, eF, ez],
            })),
            (eY[205] = eF),
            (eY[206] = ez),
            (eY[207] = eP),
            (eY[208] = eK))
          : (eK = eY[208]),
        eY[209] !== eK || eY[210] !== er || eY[211] !== eu || eY[212] !== ed
          ? ((eO = (0, r.jsxs)("span", {
              className:
                "flex h-toolbar-pane flex-wrap items-center gap-x-2 px-2 @max-xs/video-controls:h-auto @max-xs/video-controls:py-1",
              children: [er, eu, ed, eK],
            })),
            (eY[209] = eK),
            (eY[210] = er),
            (eY[211] = eu),
            (eY[212] = ed),
            (eY[213] = eO))
          : (eO = eY[213]),
        eY[214] !== tB
          ? ((eH = tB
              ? (0, r.jsx)("span", {
                  role: "status",
                  className: "block px-2 pb-2 text-xs text-secondary",
                  children: (0, r.jsx)(f.A, {
                    id: "markdown.video.actionFailed",
                    defaultMessage: "Could not complete this video action. Try again",
                  }),
                })
              : null),
            (eY[214] = tB),
            (eY[215] = eH))
          : (eH = eY[215]),
        eY[216] !== eO || eY[217] !== eH || eY[218] !== nr || eY[219] !== et
          ? ((eU = (0, r.jsxs)("span", { "data-theme": nr, className: et, children: [eO, eH] })),
            (eY[216] = eO),
            (eY[217] = eH),
            (eY[218] = nr),
            (eY[219] = et),
            (eY[220] = eU))
          : (eU = eY[220]),
        eY[221] !== tr ||
        eY[222] !== eU ||
        eY[223] !== A ||
        eY[224] !== N ||
        eY[225] !== t9 ||
        eY[226] !== t4 ||
        eY[227] !== t7 ||
        eY[228] !== B ||
        eY[229] !== Q ||
        eY[230] !== ee
          ? ((eq = (0, r.jsxs)("span", {
              ref: tC,
              style: A,
              className: N,
              "data-markdown-copy": "exclude",
              "data-theme": t9,
              "aria-busy": t4,
              "data-controls-hidden": t7,
              onKeyDownCapture: B,
              children: [Q, tr, ee, eU],
            })),
            (eY[221] = tr),
            (eY[222] = eU),
            (eY[223] = A),
            (eY[224] = N),
            (eY[225] = t9),
            (eY[226] = t4),
            (eY[227] = t7),
            (eY[228] = B),
            (eY[229] = Q),
            (eY[230] = ee),
            (eY[231] = eq))
          : (eq = eY[231]),
        eq
      )
    }
    function j(e) {
      return (0, r.jsx)(
        p.ms.RadioItem,
        {
          value: String(e),
          children: (0, r.jsx)(f.A, {
            id: "markdown.video.speedValue",
            defaultMessage: "{rate, number}\xd7",
            values: { rate: e },
          }),
        },
        e,
      )
    }
    function k(e) {
      let t,
        n,
        l,
        i,
        s,
        u = (0, o.c)(11)
      return (
        u[0] !== e
          ? (({ label: t, portalContainer: n, ...l } = e), (u[0] = e), (u[1] = t), (u[2] = n), (u[3] = l))
          : ((t = u[1]), (n = u[2]), (l = u[3])),
        u[4] !== t || u[5] !== l
          ? ((i = (0, r.jsx)(h.$, { color: "ghostSecondary", size: "toolbar", uniform: !0, "aria-label": t, ...l })),
            (u[4] = t),
            (u[5] = l),
            (u[6] = i))
          : (i = u[6]),
        u[7] !== t || u[8] !== n || u[9] !== i
          ? ((s = (0, r.jsx)(a.m, { content: t, portalContainer: n, children: i })),
            (u[7] = t),
            (u[8] = n),
            (u[9] = i),
            (u[10] = s))
          : (s = u[10]),
        s
      )
    }
    function M(e) {
      let t,
        n,
        a,
        l,
        i,
        s,
        m,
        f,
        h,
        p,
        v,
        g,
        x,
        b,
        w = (0, o.c)(34)
      w[0] !== e
        ? (({ label: t, min: a, max: l, valueText: i, ...n } = e),
          (w[0] = e),
          (w[1] = t),
          (w[2] = n),
          (w[3] = a),
          (w[4] = l),
          (w[5] = i))
        : ((t = w[1]), (n = w[2]), (a = w[3]), (l = w[4]), (i = w[5]))
      let y = void 0 === a ? 0 : a,
        S = void 0 === l ? 100 : l,
        [C, j] = (0, c.useState)(!1),
        k = (0, c.useRef)(null)
      w[6] !== S || w[7] !== y || w[8] !== n
        ? ((s = (e) => {
            let t = k.current
            if (n.disabled || null == t) return
            let r = e.currentTarget.getBoundingClientRect(),
              o = t.getBoundingClientRect().width
            if (r.width <= o) return
            let a = Math.min(1, Math.max(0, (e.clientX - r.left - o / 2) / (r.width - o)))
            n.onValueChange?.([y + (S - y) * ("rtl" === e.currentTarget.dir ? 1 - a : a)])
          }),
          (w[6] = S),
          (w[7] = y),
          (w[8] = n),
          (w[9] = s))
        : (s = w[9])
      let M = s
      ;(w[10] === Symbol.for("react.memo_cache_sentinel") ? ((m = () => j(!1)), (w[10] = m)) : (m = w[10]),
        w[11] !== n
          ? ((f = (e) => {
              ;(j(!1), n.onKeyDown?.(e))
            }),
            (w[11] = n),
            (w[12] = f))
          : (f = w[12]),
        w[13] !== n.disabled || w[14] !== M
          ? ((h = (e) => {
              ;(e.preventDefault(),
                n.disabled ||
                  0 !== e.button ||
                  (j(!0), k.current?.setPointerCapture(e.pointerId), k.current?.focus({ preventScroll: !0 }), M(e)))
            }),
            (w[13] = n.disabled),
            (w[14] = M),
            (w[15] = h))
          : (h = w[15]),
        w[16] !== M
          ? ((p = (e) => {
              ;(e.preventDefault(), k.current?.hasPointerCapture(e.pointerId) && M(e))
            }),
            (w[16] = M),
            (w[17] = p))
          : (p = w[17]),
        w[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, r.jsx)(u.CC, {
              className: "relative h-0.5 grow rounded-full bg-border",
              children: (0, r.jsx)(u.Q6, { className: "absolute h-full rounded-full bg-text" }),
            })),
            (w[18] = v))
          : (v = w[18]))
      let P = !C && "focus-visible:ring-2 focus-visible:ring-ring"
      return (
        w[19] !== P
          ? ((g = (0, d.A)(
              "block h-4 w-4 cursor-interaction rounded-full border border-default bg-surface-tertiary shadow-md focus:outline-none data-[disabled]:cursor-default",
              P,
            )),
            (w[19] = P),
            (w[20] = g))
          : (g = w[20]),
        w[21] !== t || w[22] !== n.disabled || w[23] !== g || w[24] !== i
          ? ((x = (0, r.jsx)(u.zi, {
              ref: k,
              className: g,
              "aria-label": t,
              "aria-disabled": n.disabled,
              "aria-valuetext": i,
            })),
            (w[21] = t),
            (w[22] = n.disabled),
            (w[23] = g),
            (w[24] = i),
            (w[25] = x))
          : (x = w[25]),
        w[26] !== S || w[27] !== y || w[28] !== n || w[29] !== x || w[30] !== f || w[31] !== h || w[32] !== p
          ? ((b = (0, r.jsxs)(u.bL, {
              className: "relative flex h-6 min-w-0 flex-1 touch-none items-center data-[disabled]:opacity-40",
              min: y,
              max: S,
              onBlur: m,
              ...n,
              onKeyDown: f,
              onPointerDown: h,
              onPointerMove: p,
              children: [v, x],
            })),
            (w[26] = S),
            (w[27] = y),
            (w[28] = n),
            (w[29] = x),
            (w[30] = f),
            (w[31] = h),
            (w[32] = p),
            (w[33] = b))
          : (b = w[33]),
        b
      )
    }
    function P(e) {
      let t = Math.max(0, Math.floor(e))
      return `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`
    }
  },
  y5If(e, t, n) {
    let r = (0, n("ESTr").a)({
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
    n.d(t, {}, { i: r })
  },
  zlDi(e, t, n) {
    let r = (0, n("ESTr").a)({
      name: "play-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.474609, y: 2.165039, width: 10.258774, height: 11.725586 },
        visualBounds: { x: 3.474609, y: 2.165039, width: 10.258774, height: 11.725586 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.474609, y: 2.165039, width: 10.258774, height: 11.725586 },
        center: { x: 8.603996, y: 8.027832 },
        insets: { top: 2.165039, right: 2.266617, bottom: 2.109375, left: 3.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.603996, y: 8.027832 }, foreground: { x: 8.603996, y: 8.027832 } },
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
    n.d(t, { Q6: () => A, bL: () => D, zi: () => O, CC: () => I })
    var r = n("zd8w"),
      o = n("duD4"),
      a = n("kUVq"),
      l = n("lVCP"),
      i = n("zWxU"),
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
      h = n("ABep"),
      p = Object.defineProperty,
      v = (e, t) => p(e, "name", { value: t, configurable: !0 }),
      g = ["PageUp", "PageDown"],
      x = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
      b = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
      },
      w = "Slider",
      [y, S, C] = (0, f.N)(w),
      [j, k] = (0, i.A)(w, [C]),
      [M, P] = j(w),
      D = r.forwardRef(
        v(function (e, t) {
          let {
              name: n,
              min: i = 0,
              max: u = 100,
              step: d = 1,
              orientation: c = "horizontal",
              disabled: m = !1,
              minStepsBetweenThumbs: f = 0,
              defaultValue: p = [i],
              value: b,
              onValueChange: w = v(() => {}, "onValueChange"),
              onValueCommit: S = v(() => {}, "onValueCommit"),
              inverted: C = !1,
              form: j,
              ...k
            } = e,
            P = r.useRef(new Set()),
            D = r.useRef(0),
            E = r.useRef(!1),
            _ = "horizontal" === c,
            [R, I] = r.useState(null),
            V = (0, l.s)(t, I),
            [A = [], N] = (0, s.i)({
              prop: b,
              defaultProp: p,
              onChange: v((e) => {
                let t = [...P.current]
                ;(t[D.current]?.focus({ preventScroll: !0, focusVisible: E.current }), (E.current = !1), w(e))
              }, "onChange"),
            }),
            B = r.useRef(A),
            F = r.useRef(A)
          function z(e) {
            let t = $(A, e)
            H(e, t)
          }
          function K(e) {
            H(e, D.current)
          }
          function O() {
            String(A) !== String(B.current) && S(A)
          }
          function H(e, t, { commit: n } = { commit: !1 }) {
            let r = J(d),
              a = Q(Math.round((e - i) / d) * d + i, r),
              l = (0, o.q)(a, [i, u])
            N((e = []) => {
              let r = U(e, l, t)
              if (!X(r, f * d)) return e
              {
                D.current = r.indexOf(l)
                let t = String(r) !== String(e)
                return (t && n && S(r), t ? r : e)
              }
            })
          }
          return (
            r.useEffect(() => {
              let e = j ? R?.ownerDocument.getElementById(j) : R?.closest("form")
              if (e instanceof HTMLFormElement) {
                let t = v(() => N(F.current), "reset")
                return (e.addEventListener("reset", t), () => e.removeEventListener("reset", t))
              }
            }, [R, j, N]),
            v(z, "handleSlideStart"),
            v(K, "handleSlideMove"),
            v(O, "handleSlideEnd"),
            v(H, "updateValues"),
            (0, h.jsx)(M, {
              scope: e.__scopeSlider,
              name: n,
              disabled: m,
              min: i,
              max: u,
              valueIndexToChangeRef: D,
              thumbs: P.current,
              values: A,
              orientation: c,
              form: j,
              children: (0, h.jsx)(y.Provider, {
                scope: e.__scopeSlider,
                children: (0, h.jsx)(y.Slot, {
                  scope: e.__scopeSlider,
                  children: (0, h.jsx)(_ ? T : L, {
                    "aria-disabled": m,
                    "data-disabled": m ? "" : void 0,
                    ...k,
                    ref: V,
                    onPointerDown: (0, a.mK)(k.onPointerDown, () => {
                      m || ((B.current = A), (E.current = !1))
                    }),
                    min: i,
                    max: u,
                    inverted: C,
                    onSlideStart: m ? void 0 : z,
                    onSlideMove: m ? void 0 : K,
                    onSlideEnd: m ? void 0 : O,
                    onHomeKeyDown: () => {
                      m || ((E.current = !0), H(i, 0, { commit: !0 }))
                    },
                    onEndKeyDown: () => {
                      m || ((E.current = !0), H(u, A.length - 1, { commit: !0 }))
                    },
                    onStepKeyDown: ({ event: e, direction: t }) => {
                      if (!m) {
                        E.current = !0
                        let n = g.includes(e.key) || (e.shiftKey && x.includes(e.key)),
                          r = D.current
                        H(ee(A[r], { min: i, step: d, direction: t, multiplier: n ? 10 : 1 }), r, { commit: !0 })
                      }
                    },
                  }),
                }),
              }),
            })
          )
        }, "Slider"),
      ),
      [E, _] = j(w, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
      T = r.forwardRef(
        v(function (e, t) {
          let {
              min: n,
              max: o,
              dir: a,
              inverted: i,
              onSlideStart: s,
              onSlideMove: d,
              onSlideEnd: c,
              onStepKeyDown: m,
              ...f
            } = e,
            [p, g] = r.useState(null),
            x = (0, l.s)(t, g),
            w = r.useRef(void 0),
            y = (0, u.useDirection)(a),
            S = "ltr" === y,
            C = (S && !i) || (!S && i)
          function j(e) {
            let t = w.current || p.getBoundingClientRect(),
              r = Z([0, t.width], C ? [n, o] : [o, n])
            return ((w.current = t), r(e - t.left))
          }
          return (
            v(j, "getValueFromPointer"),
            (0, h.jsx)(E, {
              scope: e.__scopeSlider,
              startEdge: C ? "left" : "right",
              endEdge: C ? "right" : "left",
              direction: C ? 1 : -1,
              size: "width",
              children: (0, h.jsx)(R, {
                dir: y,
                "data-orientation": "horizontal",
                ...f,
                ref: x,
                style: { ...f.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
                onSlideStart: (e) => {
                  let t = j(e.clientX)
                  s?.(t)
                },
                onSlideMove: (e) => {
                  let t = j(e.clientX)
                  d?.(t)
                },
                onSlideEnd: () => {
                  ;((w.current = void 0), c?.())
                },
                onStepKeyDown: (e) => {
                  let t = b[C ? "from-left" : "from-right"].includes(e.key)
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
              inverted: a,
              onSlideStart: i,
              onSlideMove: s,
              onSlideEnd: u,
              onStepKeyDown: d,
              ...c
            } = e,
            m = r.useRef(null),
            f = (0, l.s)(t, m),
            p = r.useRef(void 0),
            g = !a
          function x(e) {
            let t = p.current || m.current.getBoundingClientRect(),
              r = Z([0, t.height], g ? [o, n] : [n, o])
            return ((p.current = t), r(e - t.top))
          }
          return (
            v(x, "getValueFromPointer"),
            (0, h.jsx)(E, {
              scope: e.__scopeSlider,
              startEdge: g ? "bottom" : "top",
              endEdge: g ? "top" : "bottom",
              size: "height",
              direction: g ? 1 : -1,
              children: (0, h.jsx)(R, {
                "data-orientation": "vertical",
                ...c,
                ref: f,
                style: { ...c.style, "--radix-slider-thumb-transform": "translateY(50%)" },
                onSlideStart: (e) => {
                  let t = x(e.clientY)
                  i?.(t)
                },
                onSlideMove: (e) => {
                  let t = x(e.clientY)
                  s?.(t)
                },
                onSlideEnd: () => {
                  ;((p.current = void 0), u?.())
                },
                onStepKeyDown: (e) => {
                  let t = b[g ? "from-bottom" : "from-top"].includes(e.key)
                  d?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderVertical"),
      ),
      R = r.forwardRef(
        v(function (e, t) {
          let {
              __scopeSlider: n,
              onSlideStart: r,
              onSlideMove: o,
              onSlideEnd: l,
              onHomeKeyDown: i,
              onEndKeyDown: s,
              onStepKeyDown: u,
              ...d
            } = e,
            c = P(w, n)
          return (0, h.jsx)(m.sG.span, {
            ...d,
            ref: t,
            onKeyDown: (0, a.mK)(e.onKeyDown, (e) => {
              "Home" === e.key
                ? (i(e), e.preventDefault())
                : "End" === e.key
                  ? (s(e), e.preventDefault())
                  : g.concat(x).includes(e.key) && (u(e), e.preventDefault())
            }),
            onPointerDown: (0, a.mK)(e.onPointerDown, (e) => {
              let t = e.target
              ;(t.setPointerCapture(e.pointerId),
                e.preventDefault(),
                c.thumbs.has(t) ? t.focus({ preventScroll: !0, focusVisible: !1 }) : r(e))
            }),
            onPointerMove: (0, a.mK)(e.onPointerMove, (e) => {
              e.target.hasPointerCapture(e.pointerId) && o(e)
            }),
            onPointerUp: (0, a.mK)(e.onPointerUp, (e) => {
              let t = e.target
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), l(e))
            }),
          })
        }, "SliderImpl"),
      ),
      I = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, ...r } = e,
            o = P("SliderTrack", n)
          return (0, h.jsx)(m.sG.span, {
            "data-disabled": o.disabled ? "" : void 0,
            "data-orientation": o.orientation,
            ...r,
            ref: t,
          })
        }, "SliderTrack"),
      ),
      V = "SliderRange",
      A = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, ...o } = e,
            a = P(V, n),
            i = _(V, n),
            s = r.useRef(null),
            u = (0, l.s)(t, s),
            d = a.values.length,
            c = a.values.map((e) => q(e, a.min, a.max)),
            f = d > 1 ? Math.min(...c) : 0,
            p = 100 - Math.max(...c)
          return (0, h.jsx)(m.sG.span, {
            "data-orientation": a.orientation,
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: u,
            style: { ...e.style, [i.startEdge]: f + "%", [i.endEdge]: p + "%" },
          })
        }, "SliderRange"),
      ),
      [N, B] = j("SliderThumb")
    function F(e) {
      let { __scopeSlider: t, name: n, children: o, internal_do_not_use_render: a } = e,
        l = P("SliderThumbProvider", t),
        i = S(t),
        [s, u] = r.useState(null),
        d = r.useMemo(() => (s ? i().findIndex((e) => e.ref.current === s) : -1), [i, s]),
        m = (0, c.X)(s),
        f = !s || !!l.form || !!s.closest("form"),
        p = l.values[d],
        v = n ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
        g = void 0 === p ? 0 : q(p, l.min, l.max)
      r.useEffect(() => {
        if (s)
          return (
            l.thumbs.add(s),
            () => {
              l.thumbs.delete(s)
            }
          )
      }, [s, l.thumbs])
      let x = {
        value: p,
        name: v,
        form: l.form,
        isFormControl: f,
        index: d,
        thumb: s,
        onThumbChange: u,
        percent: g,
        size: m,
      }
      return (0, h.jsx)(N, { scope: t, ...x, children: et(a) ? a(x) : o })
    }
    v(F, "SliderThumbProvider")
    var z = "SliderThumbTrigger",
      K = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, ...r } = e,
            o = P(z, n),
            i = _(z, n),
            { index: s, value: u, percent: d, size: c, onThumbChange: f } = B(z, n),
            p = (0, l.s)(t, f),
            v = Y(s, o.values.length),
            g = c?.[i.size],
            x = g ? G(g, d, i.direction) : 0
          return (0, h.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${d}% + ${x}px)`,
            },
            children: (0, h.jsx)(y.ItemSlot, {
              scope: n,
              children: (0, h.jsx)(m.sG.span, {
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
                ref: p,
                style: void 0 === u ? { display: "none" } : e.style,
                onFocus: (0, a.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = s
                }),
              }),
            }),
          })
        }, "SliderThumbTrigger"),
      ),
      O = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, name: r, ...o } = e
          return (0, h.jsx)(F, {
            __scopeSlider: n,
            name: r,
            internal_do_not_use_render: ({ index: e, isFormControl: r }) =>
              (0, h.jsxs)(h.Fragment, {
                children: [
                  (0, h.jsx)(K, { ...o, ref: t, __scopeSlider: n }),
                  r ? (0, h.jsx)(H, { __scopeSlider: n }, e) : null,
                ],
              }),
          })
        }, "SliderThumb"),
      ),
      H = r.forwardRef(
        v(function ({ __scopeSlider: e, ...t }, n) {
          let { value: o, name: a, form: i } = B("SliderBubbleInput", e),
            s = r.useRef(null),
            u = (0, l.s)(s, n),
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
            (0, h.jsx)(m.sG.input, { style: { display: "none" }, name: a, form: i, ...t, ref: u, defaultValue: o })
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
    function Y(e, t) {
      return t > 2 ? `Value ${e + 1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
    }
    function $(e, t) {
      if (1 === e.length) return 0
      let n = e.map((e) => Math.abs(e - t)),
        r = Math.min(...n)
      return n.indexOf(r)
    }
    function G(e, t, n) {
      let r = e / 2,
        o = Z([0, 50], [0, r])
      return (r - o(t) * n) * n
    }
    function W(e) {
      return e.slice(0, -1).map((t, n) => e[n + 1] - t)
    }
    function X(e, t) {
      return !(t > 0) || Math.min(...W(e)) >= t
    }
    function Z(e, t) {
      return (n) => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0]
        let r = (t[1] - t[0]) / (e[1] - e[0])
        return t[0] + r * (n - e[0])
      }
    }
    function J(e) {
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
    function Q(e, t) {
      let n = Math.pow(10, t)
      return Math.round(e * n) / n
    }
    function ee(e, { min: t, step: n, direction: r, multiplier: o }) {
      let a,
        l = J(n),
        i = (e - t) / n,
        s = Math.round(i)
      return ((a = Q(s * n + t, l) === Q(e, l) ? s + o * r : r > 0 ? Math.ceil(i) : Math.floor(i)), Q(a * n + t, l))
    }
    function et(e) {
      return "function" == typeof e
    }
    ;(v(U, "getNextSortedValues"),
      v(q, "convertValueToPercentage"),
      v(Y, "getLabel"),
      v($, "getClosestValueIndex"),
      v(G, "getThumbInBoundsOffset"),
      v(W, "getStepsBetweenValues"),
      v(X, "hasMinStepsBetweenValues"),
      v(Z, "linearScale"),
      v(J, "getDecimalCount"),
      v(Q, "roundValue"),
      v(ee, "getNextStepValue"),
      v(et, "isFunction"))
  },
}
//# sourceMappingURL=759492.c001e6638f.js.map
