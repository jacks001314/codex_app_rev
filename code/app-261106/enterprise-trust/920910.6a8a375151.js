export const __rspack_esm_ids = [920910]
export const __webpack_modules__ = {
  JLSp(e, t) {
    t.A = {
      active: "active-IIGB9s",
      excluded: "excluded-z9RZ6A",
      avatar: "avatar-SpkdTM",
      surface: "surface-TXxuE8",
      departing: "departing-N2Ui67",
      modal: "modal-G1YExO",
      backdrop: "backdrop-Y3bY_4",
      "surface-enter": "surface-enter-FKeKKg",
      surfaceEnter: "surface-enter-FKeKKg",
      "surface-exit": "surface-exit-AV3PYf",
      surfaceExit: "surface-exit-AV3PYf",
      "modal-enter": "modal-enter-P5vKrn",
      modalEnter: "modal-enter-P5vKrn",
      "modal-exit": "modal-exit-e043gG",
      modalExit: "modal-exit-e043gG",
    }
  },
  gABY(e, t) {
    t.A = {
      phone: "phone-SlfcJ2",
      phoneScreen: "phoneScreen-JYQ0tJ",
      phoneStatusBar: "phoneStatusBar-JnA1AP",
      phoneStatus: "phoneStatus-IbDbCk",
      phoneSignal: "phoneSignal-s9VNy7",
      phoneBattery: "phoneBattery-WSoKB2",
      message: "message-g_JH3p",
      messageHeader: "messageHeader-e6xvff",
      messageHeading: "messageHeading-FTrQwN",
      messageBrandIcon: "messageBrandIcon-YWaSCO",
      messageSend: "messageSend-wxJx2P",
      messageRecipients: "messageRecipients-dkl0oj",
      messageRecipient: "messageRecipient-fD1jG1",
      messageAvatar: "messageAvatar-tTMgMG",
      messageRemove: "messageRemove-qUYJch",
      messageSubject: "messageSubject-QkYnLw",
      messageBody: "messageBody-dPahx9",
      emailBody: "emailBody-kpIKfu",
      slackBody: "slackBody-L10Enb",
    }
  },
  qlCY(e, t, a) {
    e.exports = a.p + "assets/59a15f785f56.svg"
  },
  H3bB(e, t, a) {
    var n = a("v7qY"),
      s = a("WFY2"),
      i = a("JLSp")
    let r = 0,
      l = null
    a.d(
      t,
      {},
      {
        S: function ({
          source: e,
          destination: t,
          update: a,
          reducedMotion: o,
          prepare: c,
          sourceSurface: d,
          destinationSurface: u,
          surfaceBoundary: m,
        }) {
          let h = e?.ownerDocument ?? document,
            p = !o && e?.isConnected === !0
          if ("function" != typeof h.startViewTransition || (!p && 0 === r)) return void a()
          let f = h.documentElement
          ;((r += 1), l?.())
          let g = p,
            v = null,
            x = null,
            b = null,
            y = null,
            j = p ? f.querySelectorAll('[style*="view-transition-name"]') : [],
            A = (e) => {
              if (null == e || null == m) return
              let t = m.getBoundingClientRect(),
                a = e.getBoundingClientRect()
              b = `inset(${t.top - a.top}px ${a.right - t.right}px ${a.bottom - t.bottom}px ${t.left - a.left}px)`
            }
          if (p) {
            for (let e of (A(d ?? null), j)) e.classList.add(i.A.excluded)
            ;(e.classList.add(i.A.avatar), d?.classList.add(i.A.surface), f.classList.add(i.A.active))
          }
          let w = () => {
            if (g) {
              for (let t of ((g = !1), y?.cancel(), e?.classList.remove(i.A.avatar), j))
                t.classList.remove(i.A.excluded)
              ;(v?.classList.remove(i.A.avatar),
                d?.classList.remove(i.A.surface, i.A.departing),
                x?.classList.remove(i.A.surface),
                f.classList.remove(i.A.active),
                (l = null))
            }
          }
          l = p ? w : null
          let k = h.startViewTransition(async () => {
            ;(await c?.(),
              g && (e?.classList.remove(i.A.avatar), d?.classList.remove(i.A.surface), d?.classList.add(i.A.departing)),
              (0, n.flushSync)(a),
              g &&
                ((v = t()),
                A((x = u?.() ?? null)),
                x?.classList.add(i.A.surface),
                v?.isConnected ? v.classList.add(i.A.avatar) : k.skipTransition()))
          })
          p || k.skipTransition()
          let S = () => {
            ;((r -= 1), w())
          }
          ;(k.ready
            .then(() => {
              g &&
                ((function (e) {
                  for (let t of e.getAnimations()) {
                    let e = t.effect
                    if (
                      !(e instanceof KeyframeEffect) ||
                      "::view-transition-group(character-appearance)" !== e.pseudoElement
                    )
                      continue
                    let a = e.getKeyframes(),
                      [n, s] = a
                    if (
                      2 !== a.length ||
                      "string" != typeof n.transform ||
                      "string" != typeof s.transform ||
                      "none" === s.transform
                    )
                      continue
                    let i = Number.parseFloat(`${n.width}`) / Number.parseFloat(`${s.width}`),
                      r = Number.parseFloat(`${n.height}`) / Number.parseFloat(`${s.height}`)
                    Number.isFinite(i) &&
                      Number.isFinite(r) &&
                      !(i <= 0) &&
                      !(r <= 0) &&
                      e.setKeyframes([
                        {
                          transform: new DOMMatrix(n.transform).scale(i, r).toString(),
                          transformOrigin: "0 0",
                          easing: n.easing,
                        },
                        { transform: s.transform, transformOrigin: "0 0", easing: s.easing },
                      ])
                  }
                })(h),
                null != b &&
                  (y = f.animate(
                    { clipPath: [b, b] },
                    {
                      duration: 1,
                      fill: "both",
                      pseudoElement: "::view-transition-group(character-appearance-surface)",
                    },
                  )))
            })
            .catch(() => {}),
            k.updateCallbackDone.catch((e) => {
              s.v.error("Failed to update character presentation", { safe: {}, sensitive: { error: e } })
            }),
            k.finished.then(S, S))
        },
      },
    )
  },
  lKhb(e, t, a) {
    a.d(t, { AeonAppearancePicker: () => eo })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("zTeN"),
      r = a("Wf1j"),
      l = a("HZfM"),
      o = a("tl5a"),
      c = a("SPnB"),
      d = a("SGsN"),
      u = a("m22M"),
      m = a("kB0c"),
      h = a("OWtl"),
      p = a("Oj9r"),
      f = a("WFY2"),
      g = a("kpIY"),
      v = a("IX2C"),
      x = a("T0Rc"),
      b = a("on57"),
      y = a("zd8w"),
      j = a("oyxz"),
      A = a("E8Sp"),
      w = a("Ghh3"),
      k = a("Sm6l"),
      S = a("JNtf"),
      _ = a("mUDD"),
      C = a("HOLv"),
      N = a("zLIa"),
      M = a("T1PX"),
      I = a("HWx4"),
      P = a("H3bB"),
      T = a("hTGv"),
      R = a("e7sX"),
      U = a("SPXR"),
      B = a("l3u6"),
      E = a("oz6U"),
      z = a("jTFC"),
      L = a("IIBl"),
      D = a("jPCa"),
      O = a("z8vb"),
      q = a("MVXB"),
      F = a("Qgfj"),
      $ = a("avF5")
    let G = (0, F.YK)({
      sunglasses: {
        id: "restricted.aeonAppearancePicker.avatar.sunglasses",
        defaultMessage: "Use the sunglasses avatar",
        description: "Accessible label for selecting the dot avatar with sunglasses",
      },
      "bow-tie": {
        id: "restricted.aeonAppearancePicker.avatar.bow-tie",
        defaultMessage: "Use the bow tie avatar",
        description: "Accessible label for selecting the dot avatar with a bow tie",
      },
      "balancing-ball": {
        id: "restricted.aeonAppearancePicker.avatar.balancing-ball",
        defaultMessage: "Use the blossom avatar",
        description: "Accessible label for selecting the blossom-shaped dot avatar",
      },
      cowboy: {
        id: "restricted.aeonAppearancePicker.avatar.cowboy",
        defaultMessage: "Use the cowboy hat avatar",
        description: "Accessible label for selecting the dot avatar with a cowboy hat",
      },
      beanie: {
        id: "restricted.aeonAppearancePicker.avatar.beanie",
        defaultMessage: "Use the beanie avatar",
        description: "Accessible label for selecting the dot avatar with a beanie",
      },
      mustache: {
        id: "restricted.aeonAppearancePicker.avatar.mustache",
        defaultMessage: "Use the red avatar",
        description: "Accessible label for selecting the red circular dot avatar",
      },
      pirate: {
        id: "restricted.aeonAppearancePicker.avatar.pirate",
        defaultMessage: "Use the pirate avatar",
        description: "Accessible label for selecting the dot avatar with an eye patch",
      },
      feather: {
        id: "restricted.aeonAppearancePicker.avatar.feather",
        defaultMessage: "Use the feather avatar",
        description: "Accessible label for selecting the dot avatar with a feather",
      },
      monocle: {
        id: "restricted.aeonAppearancePicker.avatar.monocle",
        defaultMessage: "Use the monocle avatar",
        description: "Accessible label for selecting the dot avatar with a monocle",
      },
      "party-hat": {
        id: "restricted.aeonAppearancePicker.avatar.party-hat",
        defaultMessage: "Use the triangle avatar",
        description: "Accessible label for selecting the triangular dot avatar",
      },
      bowler: {
        id: "restricted.aeonAppearancePicker.avatar.bowler",
        defaultMessage: "Use the bowler hat avatar",
        description: "Accessible label for selecting the dot avatar with a bowler hat",
      },
      headphones: {
        id: "restricted.aeonAppearancePicker.avatar.headphones",
        defaultMessage: "Use the blob avatar",
        description: "Accessible label for selecting the blob-shaped dot avatar",
      },
    })
    function H(e) {
      let t,
        a,
        i,
        l = (0, s.c)(14),
        { className: o, selected: c, onChange: d, compact: u, disabled: m, legacy: h } = e,
        p = void 0 !== u && u,
        f = void 0 !== m && m,
        g = void 0 !== h && h,
        v = (0, r.A)()
      ;(l[0] !== v
        ? ((t = v.formatMessage(
            {
              id: "restricted.aeonAppearancePicker.avatarGroup.productName.dot",
              defaultMessage: "Your {productName}’s avatar",
              description:
                "Accessible label for the assistant avatar picker group; productName is the untranslated term for the user's agent, not the assistant's custom name",
            },
            { productName: "dot" },
          )),
          (l[0] = v),
          (l[1] = t))
        : (t = l[1]),
        l[2] !== p || l[3] !== v || l[4] !== g
          ? ((a = E.ID.map((e, t) => ({
              id: e,
              icon: (0, n.jsx)(z.Xm, { className: p ? "size-full p-1" : "size-full", avatar: e }),
              label: g
                ? v.formatMessage(
                    {
                      id: "restricted.aeonAppearancePicker.legacyAvatar",
                      defaultMessage: "Use avatar {number}",
                      description: "Accessible label for choosing a numbered abstract avatar for a legacy agent",
                    },
                    { number: t + 1 },
                  )
                : v.formatMessage(G[e]),
            }))),
            (l[2] = p),
            (l[3] = v),
            (l[4] = g),
            (l[5] = a))
          : (a = l[5]))
      let x = "pet" === c ? null : c
      return (
        l[6] !== o || l[7] !== p || l[8] !== f || l[9] !== d || l[10] !== t || l[11] !== a || l[12] !== x
          ? ((i = (0, n.jsx)($.f, {
              className: o,
              "aria-label": t,
              variant: "artwork",
              fillArtwork: p,
              disabled: f,
              options: a,
              selectedId: x,
              onChange: d,
            })),
            (l[6] = o),
            (l[7] = p),
            (l[8] = f),
            (l[9] = d),
            (l[10] = t),
            (l[11] = a),
            (l[12] = x),
            (l[13] = i))
          : (i = l[13]),
        i
      )
    }
    var V = a("q3j5"),
      K = a("TMjP"),
      Q = a("liTb"),
      W = a("JLSp")
    function Y(e) {
      let t,
        a,
        l,
        o,
        d,
        u,
        m,
        p,
        f,
        g,
        F,
        $,
        G,
        Y,
        et,
        ea,
        en,
        es,
        ei,
        er,
        el,
        eo,
        ec,
        ed,
        eu,
        em,
        eh,
        ep,
        ef,
        eg,
        ev,
        ex,
        eb,
        ey,
        ej,
        eA = (0, s.c)(221),
        {
          ref: ew,
          appearance: ek,
          name: eS,
          namePending: e_,
          identity: eC,
          petId: eN,
          orbitId: eM,
          characterConversationId: eI,
          onSave: eP,
          variant: eT,
          disabled: eR,
          readOnly: eU,
          readOnlyName: eB,
          onClose: eE,
          defaultOpen: ez,
          triggerContent: eL,
          onCloseAutoFocus: eD,
          onTrigger: eO,
        } = e,
        eq = void 0 === eC ? "orbit-draft" : eC,
        eF = void 0 === eT ? "toolbar" : eT,
        e$ = void 0 !== eR && eR,
        eG = void 0 !== eU && eU,
        eH = void 0 !== eB && eB,
        eV = void 0 !== ez && ez,
        eK = (0, i.gh)(h.u),
        eQ = (0, y.useContext)(U.Zt),
        eW = null == eQ ? T.Oz : T.iE,
        eY = (0, r.A)(),
        eZ = (0, y.useId)(),
        eJ = (0, y.useId)(),
        eX = null == eS || (0, V.x)(eS) ? "dot" : eS
      eA[0] !== ek || eA[1] !== eV || eA[2] !== eE
        ? ((t = () => (eV || null != eE ? { appearance: ek, name: null } : null)),
          (eA[0] = ek),
          (eA[1] = eV),
          (eA[2] = eE),
          (eA[3] = t))
        : (t = eA[3])
      let [e1, e0] = (0, y.useState)(t),
        e2 = e1?.name ?? eX,
        [e3, e5] = (0, y.useState)(!1),
        [e4, e6] = (0, y.useState)(null),
        [e8, e7] = (0, y.useState)(!1),
        [e9, te] = (0, y.useState)(!1),
        tt = (0, i.Ul)(c.chatGptAuthenticatedAccountId$),
        ta = (0, i.Ul)(c.chatGptAuthenticatedUserId$)
      eA[4] !== e2
        ? ((a = Array.from((l = e2.trim())).length > 24 || l.includes("\\")), (eA[4] = e2), (eA[5] = a), (eA[6] = l))
        : ((a = eA[5]), (l = eA[6]))
      let tn = a,
        ts = l.length > 0 && !tn,
        ti = null != eM && !eH && l !== eX,
        tr = null != e1 && !e$ && !eG && ti && ts && !e9
      ;(eA[7] !== tt || eA[8] !== eM || eA[9] !== l || eA[10] !== ta
        ? ((o = ["cloud-aeon-name-moderation", tt, ta, eM, l]),
          (eA[7] = tt),
          (eA[8] = eM),
          (eA[9] = l),
          (eA[10] = ta),
          (eA[11] = o))
        : (o = eA[11]),
        eA[12] !== tt || eA[13] !== l || eA[14] !== ta
          ? ((d = (e) => {
              let { signal: t } = e
              return (async function (e, t, a, n) {
                var s
                if (null == t || null == a) throw Error("Name moderation requires an authenticated account")
                await ((s = n),
                new Promise((e, t) => {
                  s.throwIfAborted()
                  let a = setTimeout(() => {
                      ;(s.removeEventListener("abort", n), e())
                    }, 400),
                    n = () => {
                      ;(clearTimeout(a), t(new DOMException("Name check cancelled", "AbortError")))
                    }
                  s.addEventListener("abort", n, { once: !0 })
                }))
                let i = await w.Request.safePost("/tbo/name/validate", {
                  requestBody: { name: e },
                  additionalHeaders: { "ChatGPT-Account-ID": t },
                  expectedIdentity: { accountId: t, userId: a },
                  expectedErrorStatuses: [400],
                  retry: !1,
                  signal: n,
                })
                if ((n.throwIfAborted(), i.name !== e)) throw Error("Name moderation returned a different name")
                return i.name
              })(l, tt, ta, t)
            }),
            (eA[12] = tt),
            (eA[13] = l),
            (eA[14] = ta),
            (eA[15] = d))
          : (d = eA[15]),
        eA[16] !== tr || eA[17] !== o || eA[18] !== d
          ? ((u = {
              queryKey: o,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              staleTime: 0,
              enabled: tr,
              subscribed: tr,
              queryFn: d,
            }),
            (eA[16] = tr),
            (eA[17] = o),
            (eA[18] = d),
            (eA[19] = u))
          : (u = eA[19]))
      let { data: tl, error: to, isFetching: tc } = (0, x.I)(u, eK.queryClient)
      eA[20] !== to || eA[21] !== tc || eA[22] !== e4
        ? ((m = "name" === e4 || (!tc && (0, L.ym)(to))), (eA[20] = to), (eA[21] = tc), (eA[22] = e4), (eA[23] = m))
        : (m = eA[23])
      let td = m,
        tu = !td && (!ti || (ts && !e9 && !tc && (tl === l || null != to)))
      eA[24] !== e2 || eA[25] !== eM || eA[26] !== e4 || eA[27] !== l
        ? ((p = (e, t) => {
            let a = e.replace(/[\r\n]/g, ""),
              n = null == eM ? a : ee(a),
              s = null == eM ? l : ee(e2).trim(),
              i = t ? a : n
            ;(e0((e) => (null == e ? null : { ...e, name: i })),
              e7(null != eM && i.includes("\\")),
              ("name" !== e4 || n.trim() !== s) && e6(null))
          }),
          (eA[24] = e2),
          (eA[25] = eM),
          (eA[26] = e4),
          (eA[27] = l),
          (eA[28] = p))
        : (p = eA[28])
      let tm = p,
        th = (0, y.useRef)(null),
        tp = (0, y.useRef)(null),
        tf = (0, y.useRef)(null),
        tg = (0, y.useRef)(null),
        tv = (0, y.useRef)(null),
        tx = (0, y.useRef)(!1),
        tb = (0, M.I)(),
        ty = null == eQ
      eA[29] !== ty ? ((f = { afterAnimation: ty }), (eA[29] = ty), (eA[30] = f)) : (f = eA[30])
      let tj = (0, I.E)(f),
        [tA, tw] = (0, y.useState)(!1),
        tk = (0, i._U)("orbit-draft" !== eq && K.r, eq),
        tS = null != eI && !tk,
        t_ = (0, i._U)(e1?.appearance?.avatar === "pet" && null == eN ? D.Tr : null, eI ?? eq),
        tC = (0, i._U)(ek?.avatar === "pet" || e1?.appearance?.avatar === "pet" ? D.Gn : null, eN),
        tN = null == eN ? t_?.pet : tC,
        tM = e1?.pet === void 0 ? tN : e1.pet,
        tI = ek?.avatar === "pet" ? tC : null,
        tP = ek?.avatar === "pet" && null != eN ? null : (ek?.avatar ?? null),
        tT = e1?.appearance?.avatar === "pet" ? tM : null,
        tR = e1?.appearance?.avatar === "pet" && null != eN ? null : (e1?.appearance?.avatar ?? null),
        tU = e1?.pet === void 0 && e1?.appearance?.avatar === "pet" && ek?.avatar === "pet",
        tB = !(void 0 !== e_ && e_) && tu && (!tS || tU || (e1?.appearance?.avatar === "pet" ? null != tM : tA)),
        tE = "profile" === eF || "hero" === eF,
        tz = "name" === eF || "compact-name" === eF
      eA[31] !== eq || eA[32] !== tP || eA[33] !== tI
        ? ((g =
            null != tI
              ? (0, n.jsx)(B.s, { pet: tI })
              : (0, n.jsx)(z.Xm, { className: "size-full", avatar: tP, identity: eq, animated: !1 })),
          (eA[31] = eq),
          (eA[32] = tP),
          (eA[33] = tI),
          (eA[34] = g))
        : (g = eA[34])
      let tL = g
      ;((e$ || eG) && null != e1 && e0(null),
        eA[35] !== ek ||
        eA[36] !== e$ ||
        eA[37] !== tS ||
        eA[38] !== tE ||
        eA[39] !== eE ||
        eA[40] !== tb ||
        eA[41] !== eF
          ? ((F = (e) => {
              ;(0, P.S)({
                source: e ? tg.current : tv.current,
                destination: () => (e ? tv.current : tg.current),
                reducedMotion: tb || !tx.current || (!tE && "compact" !== eF) || !tS,
                update: () => {
                  ;(e0(e && !e$ ? { appearance: ek, name: null } : null), e6(null), e7(!1), te(!1), tw(!1), e || eE?.())
                },
              })
            }),
            (eA[35] = ek),
            (eA[36] = e$),
            (eA[37] = tS),
            (eA[38] = tE),
            (eA[39] = eE),
            (eA[40] = tb),
            (eA[41] = eF),
            (eA[42] = F))
          : (F = eA[42]))
      let tD = F
      ;((eA[43] !== tD || eA[44] !== e$ || eA[45] !== tS || eA[46] !== e3 || eA[47] !== eW || eA[48] !== eG
        ? (($ = () => ({
            open(e) {
              e$ || eG || e3 || ((tx.current = e.detail > 0), (tf.current = e.currentTarget), tS && eW(), tD(!0))
            },
          })),
          (eA[43] = tD),
          (eA[44] = e$),
          (eA[45] = tS),
          (eA[46] = e3),
          (eA[47] = eW),
          (eA[48] = eG),
          (eA[49] = $))
        : ($ = eA[49]),
      (0, y.useImperativeHandle)(ew, $),
      eA[50] !== tD ||
        eA[51] !== tM ||
        eA[52] !== tS ||
        eA[53] !== eS ||
        eA[54] !== eP ||
        eA[55] !== eH ||
        eA[56] !== l ||
        eA[57] !== tU)
        ? ((G = function (e) {
            return (
              e5(!0),
              e6(null),
              (async function (e) {
                if (tU) return eP(e, l)
                if (e?.avatar === "pet" && null != tM) {
                  let t = await eP(e, l, tM)
                  return (t && tS && th.current?.saveCustom(), t)
                }
                return tS ? null != th.current && (await th.current.save(eH || l === eS ? void 0 : l), !0) : eP(e, l)
              })(e)
                .then((e) => {
                  e ? tD(!1) : e6("save")
                })
                .catch((e) => {
                  e6((0, L.ym)(e) ? "name" : "save")
                })
                .finally(() => {
                  e5(!1)
                })
            )
          }),
          (eA[50] = tD),
          (eA[51] = tM),
          (eA[52] = tS),
          (eA[53] = eS),
          (eA[54] = eP),
          (eA[55] = eH),
          (eA[56] = l),
          (eA[57] = tU),
          (eA[58] = G))
        : (G = eA[58]),
        eA[59] !== tB ||
        eA[60] !== e$ ||
        eA[61] !== e1 ||
        eA[62] !== e2 ||
        eA[63] !== e3 ||
        eA[64] !== eS ||
        eA[65] !== tn ||
        eA[66] !== G ||
        eA[67] !== l.length
          ? ((Y = function (e) {
              if ((e.preventDefault(), e2 !== eS && tn)) {
                e7(!0)
                let t = e.currentTarget.elements.namedItem("nickname")
                t instanceof HTMLElement && t.focus()
                return
              }
              null == e1 || e3 || e$ || 0 === l.length || !tB || G(e1.appearance)
            }),
            (eA[59] = tB),
            (eA[60] = e$),
            (eA[61] = e1),
            (eA[62] = e2),
            (eA[63] = e3),
            (eA[64] = eS),
            (eA[65] = tn),
            (eA[66] = G),
            (eA[67] = l.length),
            (eA[68] = Y))
          : (Y = eA[68]))
      let tO = Y
      eA[69] !== e$ ||
      eA[70] !== eY ||
      eA[71] !== e3 ||
      eA[72] !== eE ||
      eA[73] !== eM ||
      eA[74] !== eH ||
      eA[75] !== eK
        ? ((et = function () {
            null == eM ||
              e3 ||
              e$ ||
              eH ||
              (e0(null),
              eE?.(),
              eK
                .get(A.gM)
                .navigate((0, Q.xP)(eM), {
                  state: {
                    prefillPrompt: eY.formatMessage({
                      id: "restricted.aeonAppearancePicker.createPetPrompt",
                      defaultMessage: "Make a pet avatar for yourself based on something you know about me",
                      description:
                        "Draft message placed in the dot assistant's composer when the user chooses to create a pet avatar in its appearance editor. The user can edit it before sending.",
                    }),
                    focusComposerNonce: Date.now(),
                  },
                }))
          }),
          (eA[69] = e$),
          (eA[70] = eY),
          (eA[71] = e3),
          (eA[72] = eE),
          (eA[73] = eM),
          (eA[74] = eH),
          (eA[75] = eK),
          (eA[76] = et))
        : (et = eA[76])
      let tq = et
      eA[77] === Symbol.for("react.memo_cache_sentinel")
        ? ((ea = (0, n.jsx)(j.A, {
            id: "restricted.aeonAppearancePicker.nameFormatError.limit",
            defaultMessage: "Use up to {limit} characters without backslashes",
            description:
              "Inline error for an invalid assistant nickname in the appearance editor. Limit is the maximum character count. Backslashes are not permitted.",
            values: { limit: 24 },
          })),
          (eA[77] = ea))
        : (ea = eA[77])
      let tF = ea
      eA[78] === Symbol.for("react.memo_cache_sentinel")
        ? ((en = (0, n.jsx)(j.A, { ...L.Bw.rejected })), (eA[78] = en))
        : (en = eA[78])
      let t$ = en,
        tG = e8 || td,
        tH = null
      e8 ? (tH = tF) : td ? (tH = t$) : null == eM || eH || e9 || 24 !== Array.from(e2).length || (tH = tF)
      let tV = tS ? N.TM : N.pd,
        tK = tS ? "sr-only" : "text-sm font-medium select-none"
      ;(eA[79] === Symbol.for("react.memo_cache_sentinel")
        ? ((es = (0, n.jsx)(j.A, {
            id: "restricted.aeonAppearancePicker.name",
            defaultMessage: "Nickname",
            description: "Label for the assistant's private nickname in the appearance dialog",
          })),
          (eA[79] = es))
        : (es = eA[79]),
        eA[80] !== eZ || eA[81] !== tK
          ? ((ei = (0, n.jsx)("label", { className: tK, htmlFor: eZ, children: es })),
            (eA[80] = eZ),
            (eA[81] = tK),
            (eA[82] = ei))
          : (ei = eA[82]),
        eA[83] !== eK
          ? ((er = (e) => {
              null != e && eK.set(q.s, !0)
            }),
            (eA[83] = eK),
            (eA[84] = er))
          : (er = eA[84]))
      let tQ = tS ? "display" : "default",
        tW = null != tH ? eJ : void 0
      eA[85] !== eY
        ? ((el = eY.formatMessage({
            id: "restricted.aeonAppearancePicker.namePlaceholder",
            defaultMessage: "Your dot",
            description:
              "Placeholder in the empty nickname field in the dot's appearance editor and character studio. A dot is the user's customizable assistant character. Keep the singular term dot untranslated.",
          })),
          (eA[85] = eY),
          (eA[86] = el))
        : (el = eA[86])
      let tY = null == eM ? 24 : void 0,
        tZ = tS ? 1 : void 0
      ;(eA[87] !== e9 || eA[88] !== tm
        ? ((eo = (e) => tm(e.target.value, e9)), (eA[87] = e9), (eA[88] = tm), (eA[89] = eo))
        : (eo = eA[89]),
        eA[90] === Symbol.for("react.memo_cache_sentinel") ? ((ec = () => te(!0)), (eA[90] = ec)) : (ec = eA[90]),
        eA[91] !== tm
          ? ((ed = (e) => {
              ;(te(!1), tm(e.currentTarget.value, !1))
            }),
            (eA[91] = tm),
            (eA[92] = ed))
          : (ed = eA[92]),
        eA[93] !== tS
          ? ((eu = (e) => {
              tS &&
                "Enter" === e.key &&
                !e.nativeEvent.isComposing &&
                (e.preventDefault(), e.currentTarget.form?.requestSubmit())
            }),
            (eA[93] = tS),
            (eA[94] = eu))
          : (eu = eA[94]),
        eA[95] === Symbol.for("react.memo_cache_sentinel")
          ? ((em = (e) => {
              ;(e.preventDefault(), e7(!0), e.currentTarget.focus())
            }),
            (eA[95] = em))
          : (em = eA[95]),
        eA[96] !== tV ||
        eA[97] !== e2 ||
        eA[98] !== tG ||
        eA[99] !== e3 ||
        eA[100] !== eZ ||
        eA[101] !== eH ||
        eA[102] !== er ||
        eA[103] !== tQ ||
        eA[104] !== tW ||
        eA[105] !== el ||
        eA[106] !== tY ||
        eA[107] !== tZ ||
        eA[108] !== eo ||
        eA[109] !== ed ||
        eA[110] !== eu
          ? ((eh = (0, n.jsx)(tV, {
              id: eZ,
              ref: er,
              name: "nickname",
              variant: tQ,
              "aria-describedby": tW,
              "aria-invalid": tG,
              autoFocus: !0,
              onFocus: X,
              value: e2,
              placeholder: el,
              maxLength: tY,
              rows: tZ,
              readOnly: eH,
              disabled: e3,
              onChange: eo,
              onCompositionStart: ec,
              onCompositionEnd: ed,
              onKeyDown: eu,
              onInvalid: em,
            })),
            (eA[96] = tV),
            (eA[97] = e2),
            (eA[98] = tG),
            (eA[99] = e3),
            (eA[100] = eZ),
            (eA[101] = eH),
            (eA[102] = er),
            (eA[103] = tQ),
            (eA[104] = tW),
            (eA[105] = el),
            (eA[106] = tY),
            (eA[107] = tZ),
            (eA[108] = eo),
            (eA[109] = ed),
            (eA[110] = eu),
            (eA[111] = eh))
          : (eh = eA[111]),
        eA[112] === Symbol.for("react.memo_cache_sentinel")
          ? ((ep = (0, n.jsx)("span", {
              className: "invisible col-start-1 row-start-1",
              "aria-hidden": !0,
              children: tF,
            })),
            (ef = (0, n.jsx)("span", {
              className: "invisible col-start-1 row-start-1",
              "aria-hidden": !0,
              children: t$,
            })),
            (eA[112] = ep),
            (eA[113] = ef))
          : ((ep = eA[112]), (ef = eA[113])))
      let tJ = tG ? "text-danger" : "text-secondary"
      eA[114] !== tJ ? ((eg = (0, b.A)("col-start-1 row-start-1", tJ)), (eA[114] = tJ), (eA[115] = eg)) : (eg = eA[115])
      let tX = tG ? "alert" : "status"
      ;(eA[116] !== tH || eA[117] !== eJ || eA[118] !== eg || eA[119] !== tX
        ? ((ev = (0, n.jsxs)("div", {
            className: "grid text-sm select-none",
            children: [ep, ef, (0, n.jsx)("p", { id: eJ, className: eg, role: tX, children: tH })],
          })),
          (eA[116] = tH),
          (eA[117] = eJ),
          (eA[118] = eg),
          (eA[119] = tX),
          (eA[120] = ev))
        : (ev = eA[120]),
        eA[121] !== ei || eA[122] !== eh || eA[123] !== ev
          ? ((ex = (0, n.jsxs)(_.RW, { children: [ei, eh, ev] })),
            (eA[121] = ei),
            (eA[122] = eh),
            (eA[123] = ev),
            (eA[124] = ex))
          : (ex = eA[124]))
      let t1 = ex
      if (
        eA[125] !== tB ||
        eA[126] !== e1 ||
        eA[127] !== tS ||
        eA[128] !== e3 ||
        eA[129] !== tc ||
        eA[130] !== e4 ||
        eA[131] !== l.length
      ) {
        let e,
          t,
          a,
          s,
          i,
          r,
          o = "save" !== e4,
          c = "save" !== e4
        ;(eA[133] !== c
          ? ((e = (0, b.A)("text-sm text-danger", { invisible: c })), (eA[133] = c), (eA[134] = e))
          : (e = eA[134]),
          eA[135] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(j.A, {
                id: "restricted.aeonAppearancePicker.saveFailed",
                defaultMessage: "Couldn’t save your changes. Try again.",
                description:
                  "Failure message in the appearance dialog when saving the assistant name and avatar fails. The draft is kept for retry.",
              })),
              (eA[135] = t))
            : (t = eA[135]),
          eA[136] !== o || eA[137] !== e
            ? ((a = (0, n.jsx)("p", { role: "alert", "aria-hidden": o, className: e, children: t })),
              (eA[136] = o),
              (eA[137] = e),
              (eA[138] = a))
            : (a = eA[138]))
        let d = e3 || tc,
          u = e3 || tc,
          m = e3 || 0 === l.length || !tB
        ;(eA[139] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(j.A, {
              id: "restricted.aeonAppearancePicker.save",
              defaultMessage: "Save",
              description: "Confirm the assistant name and appearance changes",
            })),
            (eA[139] = s))
          : (s = eA[139]),
          eA[140] !== d || eA[141] !== u || eA[142] !== m
            ? ((i = (0, n.jsx)(k.$, {
                className: "justify-center",
                type: "submit",
                color: "primary",
                size: "dialog",
                loading: d,
                "aria-busy": u,
                disabled: m,
                children: s,
              })),
              (eA[140] = d),
              (eA[141] = u),
              (eA[142] = m),
              (eA[143] = i))
            : (i = eA[143]))
        let h =
          !tS &&
          (0, n.jsxs)(k.$, {
            className: "justify-center",
            type: "button",
            color: "secondary",
            size: "dialog",
            disabled: e3,
            onClick: function () {
              null != e1 && e0({ ...e1, appearance: (0, E.hH)(e1.appearance) })
            },
            children: [
              (0, n.jsx)(C.I, { asset: v.o }),
              (0, n.jsx)(j.A, {
                id: "restricted.aeonAppearancePicker.randomize",
                defaultMessage: "Randomize",
                description: "Preview a random assistant appearance without changing its name or saving it",
              }),
            ],
          })
        ;(eA[144] !== a || eA[145] !== i || eA[146] !== h
          ? ((r = (0, n.jsxs)(n.Fragment, { children: [a, i, h] })),
            (eA[144] = a),
            (eA[145] = i),
            (eA[146] = h),
            (eA[147] = r))
          : (r = eA[147]),
          (eb = r),
          (eA[125] = tB),
          (eA[126] = e1),
          (eA[127] = tS),
          (eA[128] = e3),
          (eA[129] = tc),
          (eA[130] = e4),
          (eA[131] = l.length),
          (eA[132] = eb))
      } else eb = eA[132]
      if (
        eA[148] !== tD ||
        eA[149] !== eI ||
        eA[150] !== tq ||
        eA[151] !== e$ ||
        eA[152] !== e1 ||
        eA[153] !== tM ||
        eA[154] !== tS ||
        eA[155] !== eq ||
        eA[156] !== eX ||
        eA[157] !== eY ||
        eA[158] !== tz ||
        eA[159] !== tj ||
        eA[160] !== tE ||
        eA[161] !== e3 ||
        eA[162] !== t1 ||
        eA[163] !== eE ||
        eA[164] !== eD ||
        eA[165] !== eO ||
        eA[166] !== eM ||
        eA[167] !== eW ||
        eA[168] !== tR ||
        eA[169] !== tL ||
        eA[170] !== tT ||
        eA[171] !== eG ||
        eA[172] !== eH ||
        eA[173] !== eb ||
        eA[174] !== tO ||
        eA[175] !== tP ||
        eA[176] !== eL ||
        eA[177] !== tI ||
        eA[178] !== tk ||
        eA[179] !== eF
      ) {
        ej = Symbol.for("react.early_return_sentinel")
        e: {
          let e, t, a, s, i, r, l, o, c
          eA[182] !== e1 ||
          eA[183] !== eq ||
          eA[184] !== eX ||
          eA[185] !== tz ||
          eA[186] !== tj ||
          eA[187] !== tE ||
          eA[188] !== eG ||
          eA[189] !== tP ||
          eA[190] !== tI ||
          eA[191] !== eF
            ? ((e = tz
                ? (0, n.jsx)("span", {
                    className: (0, b.A)(
                      "px-2.5 py-0.5",
                      "compact-name" === eF ? "truncate" : "line-clamp-3 break-words whitespace-normal",
                    ),
                    children: eX,
                  })
                : (0, n.jsxs)("span", {
                    className: (0, b.A)(
                      "relative flex items-center justify-center",
                      null != e1 && (tE || "compact" === eF) && "invisible",
                      "hero" === eF && "size-16",
                      "compact" === eF && "size-5",
                      "profile" === eF && "size-12",
                      "toolbar" === eF && "size-full",
                    ),
                    children: [
                      (0, n.jsx)("span", {
                        ref: tg,
                        className: "block size-full",
                        "data-character-artwork": !0,
                        children:
                          null != tI
                            ? (0, n.jsx)(B.s, { pet: tI })
                            : (0, n.jsx)(z.Xm, {
                                className: "size-full",
                                avatar: tP,
                                identity: eq,
                                active: null == e1 && tj,
                                interactionTarget: tp,
                              }),
                      }),
                      tE && !eG ? (0, n.jsx)(O.I, { identity: eq, variant: eF }) : null,
                    ],
                  })),
              (eA[182] = e1),
              (eA[183] = eq),
              (eA[184] = eX),
              (eA[185] = tz),
              (eA[186] = tj),
              (eA[187] = tE),
              (eA[188] = eG),
              (eA[189] = tP),
              (eA[190] = tI),
              (eA[191] = eF),
              (eA[192] = e))
            : (e = eA[192])
          let d = e
          if (eG) {
            ej = d
            break e
          }
          ;(eA[193] !== tD || eA[194] !== tS || eA[195] !== e3 || eA[196] !== eW
            ? ((t = (e) => {
                e3 || (e && tS && eW(), tD(e))
              }),
              (eA[193] = tD),
              (eA[194] = tS),
              (eA[195] = e3),
              (eA[196] = eW),
              (eA[197] = t))
            : (t = eA[197]),
            eA[198] !== eD
              ? ((a = (e) => {
                  ;(eD?.(e),
                    !e.defaultPrevented && tf.current?.isConnected && (e.preventDefault(), tf.current.focus()),
                    (tf.current = null))
                }),
                (eA[198] = eD),
                (eA[199] = a))
              : (a = eA[199]),
            eA[200] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = () => {
                  tx.current = !0
                }),
                (i = () => {
                  tx.current = !0
                }),
                (r = () => {
                  tx.current = !1
                }),
                (eA[200] = s),
                (eA[201] = i),
                (eA[202] = r))
              : ((s = eA[200]), (i = eA[201]), (r = eA[202])),
            eA[203] !== e3
              ? ((l = (e) => {
                  ;((tx.current = !1), e3 && e.preventDefault())
                }),
                (eA[203] = e3),
                (eA[204] = l))
              : (l = eA[204]),
            eA[205] !== a || eA[206] !== l
              ? ((o = {
                  "aria-describedby": void 0,
                  onCloseAutoFocus: a,
                  onPointerDownCapture: s,
                  onPointerDownOutside: i,
                  onKeyDownCapture: r,
                  onClick: J,
                  onEscapeKeyDown: l,
                }),
                (eA[205] = a),
                (eA[206] = l),
                (eA[207] = o))
              : (o = eA[207]),
            eA[208] !== e$ ||
            eA[209] !== tS ||
            eA[210] !== eY ||
            eA[211] !== tz ||
            eA[212] !== tj ||
            eA[213] !== tE ||
            eA[214] !== eE ||
            eA[215] !== eO ||
            eA[216] !== eW ||
            eA[217] !== d ||
            eA[218] !== eL ||
            eA[219] !== eF
              ? ((c =
                  eL ??
                  (0, n.jsx)(k.$, {
                    ref: tp,
                    "aria-label": tz
                      ? void 0
                      : eY.formatMessage(
                          {
                            id: "restricted.aeonAppearancePicker.trigger.productName.dot",
                            defaultMessage: "Change your {productName}’s appearance",
                            description:
                              "Accessible label for changing an assistant's appearance; productName is the untranslated term for the user's agent, not the assistant's custom name",
                          },
                          { productName: "dot" },
                        ),
                    className: (0, b.A)(
                      null != eE && "hidden",
                      tE && "group/avatar relative touch-none",
                      "profile" === eF && "-ms-1",
                      tz && "max-w-full [text-align:inherit]",
                    ),
                    color: tE ? "ghostTertiary" : "ghostActive",
                    radius: tz ? "small" : "default",
                    size: "toolbar" === eF ? "icon" : "inline",
                    disabled: e$,
                    onPointerEnter: () => {
                      tS && tj && eW()
                    },
                    onFocus: () => {
                      tS && tj && eW()
                    },
                    onClick: (e) => {
                      ;((tx.current = e.detail > 0),
                        e.stopPropagation(),
                        null != eO ? (e.preventDefault(), eO(e)) : (tf.current = null))
                    },
                    children: d,
                  })),
                (eA[208] = e$),
                (eA[209] = tS),
                (eA[210] = eY),
                (eA[211] = tz),
                (eA[212] = tj),
                (eA[213] = tE),
                (eA[214] = eE),
                (eA[215] = eO),
                (eA[216] = eW),
                (eA[217] = d),
                (eA[218] = eL),
                (eA[219] = eF),
                (eA[220] = c))
              : (c = eA[220]),
            (ey = (0, n.jsx)(S.lG, {
              open: null != e1 && !e$,
              onOpenChange: t,
              size: "xxwide",
              contentClassName: W.A.modal,
              overlayClassName: W.A.backdrop,
              contentPosition: tS ? "scrollable" : "centered",
              variant: tS ? "mediaDetail" : "default",
              showDialogClose: !e3,
              shouldIgnoreClickOutside: e3,
              contentProps: o,
              triggerContent: c,
              children:
                null != e1
                  ? (0, n.jsxs)(_.R4, {
                      as: "form",
                      size: tS ? void 0 : "viewport",
                      variant: tS ? "chatgpt" : "default",
                      onKeyDown: Z,
                      onSubmit: tO,
                      children: [
                        (0, n.jsx)(_.c7, {
                          className: tS ? "sr-only" : "select-none",
                          title: (0, n.jsx)(S.L3, {
                            children: (0, n.jsx)(j.A, {
                              id: "restricted.aeonAppearancePicker.header.productName.dot",
                              defaultMessage: "Customize your {productName}",
                              description:
                                "Heading in the assistant appearance picker; productName is the untranslated term for the user's agent, not the assistant's custom name",
                              values: { productName: (0, n.jsx)("strong", { children: "dot" }) },
                            }),
                          }),
                        }),
                        null == e1
                          ? null
                          : tS
                            ? (0, n.jsx)(y.Suspense, {
                                fallback: (0, n.jsx)(R.o, {
                                  title: t1,
                                  footer: eb,
                                  previewRef: tv,
                                  previewFallback: tL,
                                  onCreatePet: eH || null == eM ? void 0 : tq,
                                }),
                                children: (0, n.jsx)(T.$O, {
                                  ref: th,
                                  previewRef: tv,
                                  previewFallback: tL,
                                  conversationId: eI,
                                  onReady: tw,
                                  onCreatePet: eH || null == eM ? void 0 : tq,
                                  disabled: e3,
                                  pet: tM,
                                  onSelectPet: (e) =>
                                    e0({
                                      ...e1,
                                      pet: e,
                                      appearance: null == e ? null : { avatar: "pet", color: E.rc.pet },
                                    }),
                                  title: t1,
                                  footer: eb,
                                }),
                              })
                            : (0, n.jsx)(_.OO, {
                                spacing: "large",
                                children: (0, n.jsxs)("div", {
                                  className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                                  children: [
                                    (0, n.jsx)("div", { className: "sm:col-start-2 sm:row-start-1", children: t1 }),
                                    (0, n.jsx)("div", {
                                      className: "flex items-center justify-center sm:col-start-2 sm:row-start-2",
                                      children:
                                        null != tT
                                          ? (0, n.jsx)("div", {
                                              className: "size-32 sm:size-48",
                                              children: (0, n.jsx)(B.s, { pet: tT }),
                                            })
                                          : (0, n.jsx)(z.Xm, {
                                              className: "size-32 sm:size-48",
                                              avatar: tR,
                                              identity: eq,
                                              useSavedAvatar: !1,
                                            }),
                                    }),
                                    (0, n.jsx)(H, {
                                      className: "sm:col-start-1 sm:row-span-3 sm:row-start-1",
                                      legacy: tk,
                                      disabled: e3,
                                      selected: e1.appearance?.avatar ?? null,
                                      onChange: (e) => e0({ ...e1, appearance: { color: E.rc[e], avatar: e } }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "flex flex-col justify-end gap-3 sm:col-start-2 sm:row-start-3",
                                      children: eb,
                                    }),
                                  ],
                                }),
                              }),
                      ],
                    })
                  : null,
            })))
        }
        ;((eA[148] = tD),
          (eA[149] = eI),
          (eA[150] = tq),
          (eA[151] = e$),
          (eA[152] = e1),
          (eA[153] = tM),
          (eA[154] = tS),
          (eA[155] = eq),
          (eA[156] = eX),
          (eA[157] = eY),
          (eA[158] = tz),
          (eA[159] = tj),
          (eA[160] = tE),
          (eA[161] = e3),
          (eA[162] = t1),
          (eA[163] = eE),
          (eA[164] = eD),
          (eA[165] = eO),
          (eA[166] = eM),
          (eA[167] = eW),
          (eA[168] = tR),
          (eA[169] = tL),
          (eA[170] = tT),
          (eA[171] = eG),
          (eA[172] = eH),
          (eA[173] = eb),
          (eA[174] = tO),
          (eA[175] = tP),
          (eA[176] = eL),
          (eA[177] = tI),
          (eA[178] = tk),
          (eA[179] = eF),
          (eA[180] = ey),
          (eA[181] = ej))
      } else ((ey = eA[180]), (ej = eA[181]))
      return ej !== Symbol.for("react.early_return_sentinel") ? ej : ey
    }
    function Z(e) {
      "Enter" === e.key && e.nativeEvent.isComposing && e.preventDefault()
    }
    function J(e) {
      return e.stopPropagation()
    }
    function X(e) {
      let t = e.currentTarget.value.length
      e.currentTarget.setSelectionRange(t, t)
    }
    function ee(e) {
      return Array.from(e.trimStart()).slice(0, 24).join("")
    }
    var et = a("nIa3"),
      ea = a("Br0z"),
      en = a("rzpR"),
      es = a("gdZA"),
      ei = a("TjnS"),
      er = a("REfd"),
      el = a("TYK1")
    function eo(e) {
      let t,
        a,
        v,
        x,
        b,
        y,
        j,
        A,
        w,
        k = (0, s.c)(50),
        {
          ref: S,
          conversationId: _,
          hostId: C,
          variant: N,
          onClose: M,
          triggerContent: I,
          onCloseAutoFocus: P,
          onTrigger: T,
        } = e,
        R = (0, i.gh)(h.u),
        U = (0, r.A)(),
        { renameThread: B } = (0, m.DS)(),
        z = (0, l.zy)(),
        L = (0, i.Ul)(c.chatGptAuthenticatedAccountId$),
        D = (0, i.Ul)(c.chatGptAuthenticatedUserId$),
        O = (0, i._U)(C ?? o.qX, _)
      k[0] !== O ? ((t = (0, et.d)(O)), (k[0] = O), (k[1] = t)) : (t = k[1])
      let q = "durable" === t,
        { data: F } = (0, i._U)(el.cloudAeonByThreadId$, q ? _ : null)
      ;(k[2] !== F || k[3] !== z.pathname
        ? ((a = (0, Q.ao)(z.pathname) ?? (F?.scope === "shared" ? F.id : null)),
          (k[2] = F),
          (k[3] = z.pathname),
          (k[4] = a))
        : (a = k[4]),
        k[5] === Symbol.for("react.memo_cache_sentinel") ? ((v = { enabled: !1 }), (k[5] = v)) : (v = k[5]))
      let { data: $ } = (0, i._U)(el.jC, a, v),
        G = (0, i._U)(u.N, _)
      k[6] !== _ || k[7] !== O ? ((x = { hostId: O, threadId: _ }), (k[6] = _), (k[7] = O), (k[8] = x)) : (x = k[8])
      let H = (0, i._U)(es.q5, x),
        V = (0, i._U)(o.u4, _)
      k[9] !== _ || k[10] !== V || k[11] !== z.pathname || k[12] !== z.state?.archivedConversationPreview
        ? ((b =
            V ||
            (z.state?.archivedConversationPreview === !0 &&
              (0, p.Qm)((0, p.VJ)({ pathname: z.pathname, routeTemplate: z.pathname })) === _)),
          (k[9] = _),
          (k[10] = V),
          (k[11] = z.pathname),
          (k[12] = z.state?.archivedConversationPreview),
          (k[13] = b))
        : (b = k[13])
      let W = b,
        Z = (0, i._U)(K.T, _)
      k[14] !== L ||
      k[15] !== _ ||
      k[16] !== O ||
      k[17] !== U ||
      k[18] !== q ||
      k[19] !== C ||
      k[20] !== W ||
      k[21] !== B ||
      k[22] !== R ||
      k[23] !== D
        ? ((y = async function (e, t, a) {
            let n = (0, g.Nj)(),
              s = () =>
                R.get(c.chatGptAuthenticatedAccountId$) === L &&
                R.get(c.chatGptAuthenticatedUserId$) === D &&
                (C ?? R.get(o.qX, _)) === O &&
                (0, g.Nj)() === n
            if (!s()) return !1
            let i = R.get(es.q5, { hostId: O, threadId: _ }) ?? R.get(u.N, _)
            if (
              (W ||
                t === i ||
                (q
                  ? await (0, en.R)(R, { conversationId: _, hostId: O, title: t, undoLabel: m.tD.renameThreadUndone })
                  : await B({
                      conversationId: _,
                      hostId: O,
                      previousTitle: i ?? void 0,
                      title: t,
                      showErrorToast: !1,
                    })),
              !s())
            )
              return !1
            let r = R.get(K.T, _)
            if (null == e || (null == a && e.avatar === r?.avatar && e.color === r.color)) return !0
            if (!q) return ((0, E.KH)(_, e), !0)
            let l = R.query.snapshot(el.cloudAeonByThreadId$, _)
            try {
              let t = await R.query.getOrFetch(el.cloudAeonByThreadId$, _)
              if (!s() || null == t) return !1
              let n = await (0, ea.$T)(R, _, e, { pet: a, profile: t })
              if (null != n) {
                if ((await l.cancel(), !s())) return !1
                ;(0, er.q)(R, _, n)
              }
              return s()
            } catch (e) {
              if (!s()) return !1
              return (
                f.v.warning("Failed to update an Orbit avatar", { safe: {}, sensitive: { error: e } }),
                R.get(d.Id).danger(
                  U.formatMessage({
                    id: "restricted.aeonAppearancePicker.saveError.dot",
                    defaultMessage: "Unable to save your dot’s avatar",
                    description:
                      "Error toast when a selected dot avatar could not be saved. Keep the singular term dot untranslated.",
                  }),
                  { errorAnalytics: { toastId: "restricted.aeonAppearancePicker.saveError" } },
                ),
                !1
              )
            }
          }),
          (k[14] = L),
          (k[15] = _),
          (k[16] = O),
          (k[17] = U),
          (k[18] = q),
          (k[19] = C),
          (k[20] = W),
          (k[21] = B),
          (k[22] = R),
          (k[23] = D),
          (k[24] = y))
        : (y = k[24])
      let J = y
      k[25] !== L || k[26] !== _ || k[27] !== O || k[28] !== D
        ? ((j = JSON.stringify([L, D, O, _])), (k[25] = L), (k[26] = _), (k[27] = O), (k[28] = D), (k[29] = j))
        : (j = k[29])
      let X = H ?? G ?? null,
        ee = q && null == F,
        eo = F?.id,
        ec = q && 1 ? _ : void 0
      return (
        k[30] !== F?.scope || k[31] !== $
          ? ((A = null == $ ? F?.scope === "shared" : (0, ei.QU)($)), (k[30] = F?.scope), (k[31] = $), (k[32] = A))
          : (A = k[32]),
        k[33] !== Z ||
        k[34] !== _ ||
        k[35] !== M ||
        k[36] !== P ||
        k[37] !== T ||
        k[38] !== W ||
        k[39] !== S ||
        k[40] !== J ||
        k[41] !== eo ||
        k[42] !== ec ||
        k[43] !== A ||
        k[44] !== j ||
        k[45] !== X ||
        k[46] !== ee ||
        k[47] !== I ||
        k[48] !== N
          ? ((w = (0, n.jsx)(
              Y,
              {
                ref: S,
                appearance: Z,
                name: X,
                namePending: ee,
                identity: _,
                orbitId: eo,
                characterConversationId: ec,
                variant: N,
                triggerContent: I,
                onCloseAutoFocus: P,
                onTrigger: T,
                readOnly: A,
                readOnlyName: W,
                onClose: M,
                onSave: J,
              },
              j,
            )),
            (k[33] = Z),
            (k[34] = _),
            (k[35] = M),
            (k[36] = P),
            (k[37] = T),
            (k[38] = W),
            (k[39] = S),
            (k[40] = J),
            (k[41] = eo),
            (k[42] = ec),
            (k[43] = A),
            (k[44] = j),
            (k[45] = X),
            (k[46] = ee),
            (k[47] = I),
            (k[48] = N),
            (k[49] = w))
          : (w = k[49]),
        w
      )
    }
  },
  ThwH(e, t, a) {
    a.d(t, { XL: () => eN, Lb: () => ex, cq: () => ev, ok: () => eT })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57"),
      r = a("LIss"),
      l = a("zTeN"),
      o = a("zd8w"),
      c = a("oyxz"),
      d = a("SRbQ"),
      u = a("xHGs"),
      m = a("Wf1j")
    function h(e) {
      var t = Math.abs(e)
      return t < 60 ? "second" : t < 3600 ? "minute" : t < 86400 ? "hour" : "day"
    }
    function p(e) {
      switch (e) {
        case "second":
          return 1
        case "minute":
          return 60
        case "hour":
          return 3600
        default:
          return 86400
      }
    }
    var f = ["second", "minute", "hour"]
    function g(e) {
      return (void 0 === e && (e = "second"), f.indexOf(e) > -1)
    }
    var v = function (e) {
        var t = (0, m.A)(),
          a = t.formatRelativeTime,
          n = t.textComponent,
          s = e.children,
          i = a(e.value || 0, e.unit, (0, d.Tt)(e, ["children", "value", "unit"]))
        return "function" == typeof s ? s(i) : n ? o.createElement(n, null, i) : o.createElement(o.Fragment, null, i)
      },
      x = function (e) {
        var t,
          a = e.value,
          n = void 0 === a ? 0 : a,
          s = e.unit,
          i = void 0 === s ? "second" : s,
          r = e.updateIntervalInSeconds,
          l = (0, d.Tt)(e, ["value", "unit", "updateIntervalInSeconds"])
        ;(0, u.V1)(!r || !!(r && g(i)), "Cannot schedule update with unit longer than hour")
        var c = o.useState(),
          m = c[0],
          f = c[1],
          x = o.useState(0),
          b = x[0],
          y = x[1],
          j = o.useState(0),
          A = j[0],
          w = j[1]
        ;((i !== m || n !== b) &&
          (y(n || 0),
          f(i),
          w(
            g(i)
              ? (function (e, t) {
                  if (!e) return 0
                  switch (t) {
                    case "second":
                      return e
                    case "minute":
                      return 60 * e
                    default:
                      return 3600 * e
                  }
                })(n, i)
              : 0,
          )),
          o.useEffect(
            function () {
              function e() {
                clearTimeout(t)
              }
              if ((e(), !r || !g(i))) return e
              var a = A - r,
                n = h(a)
              if ("day" === n) return e
              var s = p(n),
                l = a % s,
                o = a - l,
                c = o >= A ? o - s : o,
                d = Math.abs(c - A)
              return (
                A !== c &&
                  (t = setTimeout(function () {
                    return w(c)
                  }, 1e3 * d)),
                e
              )
            },
            [A, r, i],
          ))
        var k = n || 0,
          S = i
        if (g(i) && "number" == typeof A && r) {
          var _ = p((S = h(A)))
          k = Math.round(A / _)
        }
        return o.createElement(v, (0, d.Cl)({ value: k, unit: S }, l))
      }
    x.displayName = "FormattedRelativeTime"
    var b = a("HZfM"),
      y = a("tl5a"),
      j = a("tWaO"),
      A = a("KIKs"),
      w = a("OWtl"),
      k = a("eGPX"),
      S = a("HWx4"),
      _ = a("V8uZ"),
      C = a("lKhb"),
      N = a("PaR8"),
      M = a("MtDh"),
      I = a("mCgi"),
      P = a("Xtp5"),
      T = a("qMca"),
      R = a("TYK1"),
      U = a("Ghh3"),
      B = a("ZtSy"),
      E = a("OMIV")
    function z(e) {
      let t,
        a,
        i,
        r,
        d,
        u,
        m,
        h,
        p,
        f,
        g = (0, s.c)(27),
        { conversationId: v, isArchived: x } = e,
        b = (0, l._U)(E.JW, "1973839244"),
        j = (0, l._U)(y.W3, v),
        [A, w] = (0, o.useState)(null),
        [k, _] = (0, o.useState)(null),
        [C, N] = (0, o.useState)(null)
      if (!b || "durable" !== j || x) return null
      g[0] !== v
        ? ((t = async function (e) {
            ;(w(e), _(null))
            try {
              let t = await U.Request.safePost(
                "setup" === e
                  ? "/cloud-aeons/by-thread/{thread_id}/doctor/setup"
                  : "/cloud-aeons/by-thread/{thread_id}/doctor/check-in",
                { parameters: { path: { thread_id: v } } },
              )
              ;(N(t.schedule_url ?? t.workflow_url), _(e))
            } catch {
              _("error")
            }
            w(null)
          }),
          (g[0] = v),
          (g[1] = t))
        : (t = g[1])
      let M = t,
        I = null != A
      ;(g[2] !== M ? ((a = () => void M("setup")), (g[2] = M), (g[3] = a)) : (a = g[3]),
        g[4] !== A
          ? ((i = (0, n.jsx)(S.x.ItemLabel, {
              children:
                "setup" === A
                  ? (0, n.jsx)(c.A, {
                      id: "restricted.aeon.doctor.setup.pending",
                      defaultMessage: "Setting up recurring doctor…",
                      description: "Button in the dot summary while setting up recurring health checks",
                    })
                  : (0, n.jsx)(c.A, {
                      id: "restricted.aeon.doctor.setup.label",
                      defaultMessage: "Set up recurring doctor",
                      description:
                        "Button in the dot summary that schedules recurring health checks; separate from Check in now",
                    }),
            })),
            (g[4] = A),
            (g[5] = i))
          : (i = g[5]),
        g[6] !== I || g[7] !== a || g[8] !== i
          ? ((r = (0, n.jsx)(S.x.ItemButton, { className: "select-none", disabled: I, onClick: a, children: i })),
            (g[6] = I),
            (g[7] = a),
            (g[8] = i),
            (g[9] = r))
          : (r = g[9]))
      let P = null != A
      return (
        g[10] !== M ? ((d = () => void M("check-in")), (g[10] = M), (g[11] = d)) : (d = g[11]),
        g[12] !== A
          ? ((u = (0, n.jsx)(S.x.ItemLabel, {
              children:
                "check-in" === A
                  ? (0, n.jsx)(c.A, {
                      id: "restricted.aeon.doctor.requesting",
                      defaultMessage: "Requesting check-in…",
                      description: "Dot doctor button while submitting a health check request",
                    })
                  : (0, n.jsx)(c.A, {
                      id: "restricted.aeon.doctor.checkInNow.label",
                      defaultMessage: "Check in now",
                      description:
                        "Button in the dot summary that requests an immediate doctor check-in, starting the recurring doctor if needed",
                    }),
            })),
            (g[12] = A),
            (g[13] = u))
          : (u = g[13]),
        g[14] !== P || g[15] !== d || g[16] !== u
          ? ((m = (0, n.jsx)(S.x.ItemButton, { className: "select-none", disabled: P, onClick: d, children: u })),
            (g[14] = P),
            (g[15] = d),
            (g[16] = u),
            (g[17] = m))
          : (m = g[17]),
        g[18] !== k
          ? ((h =
              null != k &&
              (0, n.jsx)(S.x.Item, {
                role: "status",
                children: (0, n.jsxs)(S.x.ItemLabel, {
                  children: [
                    "setup" === k &&
                      (0, n.jsx)(c.A, {
                        id: "restricted.aeon.doctor.setup.success",
                        defaultMessage: "Recurring doctor is set up",
                        description: "Confirmation in the dot summary that recurring health checks are scheduled",
                      }),
                    "check-in" === k &&
                      (0, n.jsx)(c.A, {
                        id: "restricted.aeon.doctor.checkInNow.requested",
                        defaultMessage: "Check-in requested",
                        description:
                          "Confirmation in the dot summary that a doctor check was requested; the check may still be running",
                      }),
                    "error" === k &&
                      (0, n.jsx)(c.A, {
                        id: "restricted.aeon.doctor.request.error",
                        defaultMessage: "Doctor unavailable · Try again",
                        description:
                          "Error in the dot summary when setting up the doctor or requesting a check-in fails; either button can be retried",
                      }),
                  ],
                }),
              })),
            (g[18] = k),
            (g[19] = h))
          : (h = g[19]),
        g[20] !== C
          ? ((p =
              null != C &&
              (0, n.jsx)(S.x.Item, {
                children: (0, n.jsx)(B.G, {
                  href: C,
                  initiator: "external_link",
                  children: (0, n.jsx)(c.A, {
                    id: "restricted.aeon.doctor.schedule.link",
                    defaultMessage: "View doctor schedule",
                    description:
                      "Link in the dot summary to inspect when health checks will run and see recent checks in Temporal",
                  }),
                }),
              })),
            (g[20] = C),
            (g[21] = p))
          : (p = g[21]),
        g[22] !== h || g[23] !== p || g[24] !== r || g[25] !== m
          ? ((f = (0, n.jsxs)(S.x.Section, { sectionKey: "orbit-doctor", mode: "headerless", children: [r, m, h, p] })),
            (g[22] = h),
            (g[23] = p),
            (g[24] = r),
            (g[25] = m),
            (g[26] = f))
          : (f = g[26]),
        f
      )
    }
    var L = a("gHfa"),
      D = a("jZag"),
      O = a("lpl9"),
      q = a("Qgfj"),
      F = a("PFjh"),
      $ = a("SPnB"),
      G = a("Sm6l"),
      H = a("JNtf"),
      V = a("bqtn"),
      K = a("Ot7V"),
      Q = a("bVeK"),
      W = a("RNul"),
      Y = a("SGsN"),
      Z = a("aepO"),
      J = a("soaw"),
      X = a("nIa3"),
      ee = a("om2R"),
      et = a("sZGP"),
      ea = a("QdY6"),
      en = a("nf1S"),
      es = a("Nw18"),
      ei = a("YsvR")
    let er = (0, o.lazy)(async () => {
        let { EmailSettingsDialogBody: e } = await a.e(528018).then(a.bind(a, "dtaL"))
        return { default: e }
      }),
      el = (0, o.lazy)(async () => {
        let { BlockedSendersDialogBody: e } = await a.e(900561).then(a.bind(a, "HSed"))
        return { default: e }
      })
    function eo(e) {
      let t,
        a,
        i = (0, s.c)(14),
        { renderShortcut: r, conversationId: o, isArchived: d, mode: u, onSetup: h } = e,
        p = void 0 === u ? "section" : u,
        f = (0, m.A)(),
        g = (0, l._U)(y.qX, o),
        v = (0, l._U)(y.W3, o)
      if (d || "durable" !== (0, X.d)(g, v)) {
        let e, a
        i[0] !== f
          ? ((e = f.formatMessage(
              {
                id: "orbit.email.setup.activeCloudDotRequired",
                defaultMessage: "Email requires an active cloud {dot}",
                description:
                  "Explains why archived and local dots cannot connect Email. {dot} is the untranslated name for the user’s agent.",
              },
              { dot: "dot" },
            )),
            (i[0] = f),
            (i[1] = e))
          : (e = i[1])
        let s = e
        ;(i[2] !== p || i[3] !== s || i[4] !== r
          ? ((a =
              "setup" === p
                ? (0, n.jsx)(en.mz, { title: (0, n.jsx)(c.A, { ...eh.unavailable }), description: s })
                : (0, n.jsx)(em, { renderShortcut: r, disabled: !0, mode: p, title: s })),
            (i[2] = p),
            (i[3] = s),
            (i[4] = r),
            (i[5] = a))
          : (a = i[5]),
          (t = a))
      } else {
        let e
        ;(i[6] !== o || i[7] !== p || i[8] !== h || i[9] !== r
          ? ((e = (0, n.jsx)(ec, { renderShortcut: r, conversationId: o, mode: p, onSetup: h })),
            (i[6] = o),
            (i[7] = p),
            (i[8] = h),
            (i[9] = r),
            (i[10] = e))
          : (e = i[10]),
          (t = e))
      }
      return (
        i[11] !== t || i[12] !== p
          ? ((a =
              "section" !== p
                ? t
                : (0, n.jsx)(S.x.Section, { sectionKey: "aeon-email", mode: "headerless", children: t })),
            (i[11] = t),
            (i[12] = p),
            (i[13] = a))
          : (a = i[13]),
        a
      )
    }
    function ec(e) {
      let t,
        a = (0, s.c)(22),
        { renderShortcut: i, conversationId: r, mode: o, onSetup: d } = e,
        u = (0, l.Ul)($.chatGptAuthenticatedAccountId$),
        m = (0, l.Ul)($.chatGptAuthenticatedUserId$),
        { data: h, isPending: p, isError: f, refetch: g } = (0, l._U)(R.cloudAeonByThreadId$, r)
      if (null == u || null == m) return null
      if ("setup" === o && p) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(en.MV, {})), (a[0] = e)) : (e = a[0]),
          e
        )
      }
      if ("setup" === o && f) {
        let e, t, s, i
        return (
          a[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(en.mz, {
                title: (0, n.jsx)(c.A, { ...eh.unavailable }),
                description: (0, n.jsx)(c.A, {
                  id: "orbit.email.setup.loadFailed",
                  defaultMessage: "Couldn’t load Email settings",
                  description: "Shown when the dot could not be loaded before checking its email address",
                }),
                role: "alert",
              })),
              (a[1] = e))
            : (e = a[1]),
          a[2] !== g ? ((t = () => void g()), (a[2] = g), (a[3] = t)) : (t = a[3]),
          a[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(c.A, {
                id: "restricted.aeon.email.dialog.recovery.retry.label",
                defaultMessage: "Try again",
                description:
                  "Retries email setup using the current form, or refreshes settings when required information could not be loaded",
              })),
              (a[4] = s))
            : (s = a[4]),
          a[5] !== t
            ? ((i = (0, n.jsxs)("div", {
                className: "flex flex-col gap-6",
                children: [e, (0, n.jsx)(G.$, { color: "primary", size: "detailAction", onClick: t, children: s })],
              })),
              (a[5] = t),
              (a[6] = i))
            : (i = a[6]),
          i
        )
      }
      if (p || f) {
        let e, t
        return (
          a[7] !== g ? ((e = () => void g()), (a[7] = g), (a[8] = e)) : (e = a[8]),
          a[9] !== f || a[10] !== p || a[11] !== o || a[12] !== i || a[13] !== e
            ? ((t = (0, n.jsx)(em, { renderShortcut: i, mode: o, isLoading: p, isError: f, onClick: e })),
              (a[9] = f),
              (a[10] = p),
              (a[11] = o),
              (a[12] = i),
              (a[13] = e),
              (a[14] = t))
            : (t = a[14]),
          t
        )
      }
      if (null == h) return null
      let v = `${u}:${m}:${h.id}:${r}`
      return (
        a[15] !== r || a[16] !== o || a[17] !== d || a[18] !== h.id || a[19] !== i || a[20] !== v
          ? ((t = (0, n.jsx)(ed, { renderShortcut: i, aeonId: h.id, mode: o, threadId: r, onSetup: d }, v)),
            (a[15] = r),
            (a[16] = o),
            (a[17] = d),
            (a[18] = h.id),
            (a[19] = i),
            (a[20] = v),
            (a[21] = t))
          : (t = a[21]),
        t
      )
    }
    function ed(e) {
      let t,
        a,
        i,
        r,
        d,
        u,
        h,
        p,
        f = (0, s.c)(54),
        { renderShortcut: g, aeonId: v, mode: x, threadId: b, onSetup: y } = e,
        j = (0, l.gh)(w.u),
        A = (0, m.A)(),
        k = (0, l.Ul)($.chatGptAuthenticatedAccountId$),
        S = (0, l.Ul)($.chatGptAuthenticatedUserId$),
        { mutate: _, isPending: C } = (0, l._U)(ei.Ic, v),
        [N, M] = (0, o.useState)(!1),
        [I, P] = (0, o.useState)(null),
        T = (0, o.useRef)(null),
        R = (0, o.useRef)(!1),
        U = (0, J.a)(),
        B = (0, o.useRef)(-1 / 0)
      f[0] !== k || f[1] !== U || f[2] !== j || f[3] !== S
        ? ((t = (e, t) => {
            let a = () =>
              U() &&
              e > B.current &&
              j.get($.chatGptAuthenticatedAccountId$) === k &&
              j.get($.chatGptAuthenticatedUserId$) === S &&
              "visible" === document.visibilityState
            a() &&
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  a() &&
                    (0, F.dj)(j).hist("orbit_email", "claim_visible_result_ms", { outcome: t }, performance.now() - e)
                })
              })
          }),
          (f[0] = k),
          (f[1] = U),
          (f[2] = j),
          (f[3] = S),
          (f[4] = t))
        : (t = f[4])
      let E = t,
        { data: z, isPending: L, isError: D, error: O } = (0, l._U)(ei.dk, v)
      f[5] !== O || f[6] !== D
        ? ((a = D && "workspace_disabled" === (0, es.T5)(O).code), (f[5] = O), (f[6] = D), (f[7] = a))
        : (a = f[7])
      let q = a,
        G = D || z?.status !== "linked" ? null : z.email_address,
        V = null != G && z?.narrow_email_consent_version === 1
      if ((null == G && N && M(!1), "setup" === x)) {
        let e
        if (L) {
          let e
          return (
            f[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(en.MV, {})), (f[8] = e)) : (e = f[8]),
            e
          )
        }
        if (V) {
          let e
          return (
            f[9] !== G || f[10] !== b
              ? ((e = (0, n.jsx)(et.g, { conversationId: b, method: "email", destination: G })),
                (f[9] = G),
                (f[10] = b),
                (f[11] = e))
              : (e = f[11]),
            e
          )
        }
        return (
          f[12] !== v || f[13] !== E || f[14] !== b
            ? ((e = (0, n.jsx)(er, { aeonId: v, threadId: b, embedded: !0, onClaimResult: E })),
              (f[12] = v),
              (f[13] = E),
              (f[14] = b),
              (f[15] = e))
            : (e = f[15]),
          e
        )
      }
      let K = "blockedSenders" === I && V,
        Q = null == G ? eh.setup : eh.settings,
        Z = K ? eh.blockedSenders : Q,
        X = D ? void 0 : z
      f[16] !== A || f[17] !== q
        ? ((i = q
            ? A.formatMessage({
                id: "restricted.aeon.email.settings.workspaceDisabled",
                defaultMessage: "Email is disabled by your workspace admin",
                description:
                  "Explanation on the disabled dot email control when the ChatGPT workspace admin has denied dot or Email access",
              })
            : void 0),
          (f[16] = A),
          (f[17] = q),
          (f[18] = i))
        : (i = f[18])
      let ee = null == G ? "dialog" : "menu"
      ;(f[19] !== G || f[20] !== y
        ? ((r =
            null == G
              ? () => {
                  null != y ? y(T.current) : P("settings")
                }
              : void 0),
          (f[19] = G),
          (f[20] = y),
          (f[21] = r))
        : (r = f[21]),
        f[22] !== D ||
        f[23] !== L ||
        f[24] !== x ||
        f[25] !== C ||
        f[26] !== g ||
        f[27] !== X ||
        f[28] !== i ||
        f[29] !== ee ||
        f[30] !== r
          ? ((d = (0, n.jsx)(em, {
              renderShortcut: g,
              ref: T,
              mode: x,
              email: X,
              isLoading: L,
              isError: D,
              disabled: C,
              title: i,
              "aria-haspopup": ee,
              onClick: r,
            })),
            (f[22] = D),
            (f[23] = L),
            (f[24] = x),
            (f[25] = C),
            (f[26] = g),
            (f[27] = X),
            (f[28] = i),
            (f[29] = ee),
            (f[30] = r),
            (f[31] = d))
          : (d = f[31]))
      let eo = d
      return (
        f[32] !== k ||
        f[33] !== v ||
        f[34] !== I ||
        f[35] !== G ||
        f[36] !== V ||
        f[37] !== N ||
        f[38] !== x ||
        f[39] !== j ||
        f[40] !== eo ||
        f[41] !== _ ||
        f[42] !== S
          ? ((u =
              null == G
                ? eo
                : (0, n.jsx)(eu, {
                    emailAddress: G,
                    open: N,
                    onOpenChange: M,
                    onCloseAutoFocus: (e) => {
                      null != I && e.preventDefault()
                    },
                    triggerButton: eo,
                    onBlockedSenders: V ? () => P("blockedSenders") : void 0,
                    onSettings: "shortcut" === x ? void 0 : () => P("settings"),
                    onRemove: () => {
                      if (j.get(ei.Ic, v).isPending) return
                      M(!1)
                      let e = j.get(Y.Id),
                        t = e.info(
                          (0, n.jsx)(c.A, {
                            id: "restricted.aeon.email.disconnecting",
                            defaultMessage: "Disconnecting Email…",
                            description: "Progress while disconnecting a dot's email address",
                          }),
                          { duration: 0, hasCloseButton: !1, leading: (0, n.jsx)(W.y, {}) },
                        ),
                        a = !1,
                        s = j.watch((e) => {
                          let { get: n } = e
                          ;(n($.chatGptAuthenticatedAccountId$) !== k || n($.chatGptAuthenticatedUserId$) !== S) &&
                            ((a = !0), t.close())
                        })
                      _(
                        { type: "unlink" },
                        {
                          onSettled: (i, r) => {
                            if ((s(), t.close(), a)) return
                            let l = j.get(ei.dk, v)
                            null == r || (l.isSuccess && "unlinked" === l.data.status)
                              ? e.success(
                                  (0, n.jsx)(c.A, {
                                    id: "restricted.aeon.email.disconnected",
                                    defaultMessage: "Email disconnected",
                                    description:
                                      "Confirmation after disconnecting the dot while keeping the user's email address",
                                  }),
                                )
                              : e.danger(
                                  (0, n.jsx)(c.A, {
                                    id: "restricted.aeon.email.removeFailed",
                                    defaultMessage: "Couldn’t disconnect Email. Please try again",
                                    description: "Error when disconnecting an email address from a dot fails",
                                  }),
                                  {
                                    errorAnalytics: {
                                      toastId: "orbit-email-remove-failed",
                                      operation: "orbit-email-remove",
                                      retryable: !0,
                                    },
                                  },
                                )
                          },
                        },
                      )
                    },
                  })),
            (f[32] = k),
            (f[33] = v),
            (f[34] = I),
            (f[35] = G),
            (f[36] = V),
            (f[37] = N),
            (f[38] = x),
            (f[39] = j),
            (f[40] = eo),
            (f[41] = _),
            (f[42] = S),
            (f[43] = u))
          : (u = f[43]),
        f[44] !== v || f[45] !== Z || f[46] !== I || f[47] !== E || f[48] !== K || f[49] !== b
          ? ((h =
              null != I
                ? (0, n.jsx)(ea.W, {
                    hasDescription: !0,
                    title: (0, n.jsx)(c.A, { ...Z }),
                    onClose: () => {
                      ;((B.current = performance.now()), P(null))
                    },
                    onCloseAutoFocus: (e) => {
                      ;(e.preventDefault(), R.current || T.current?.focus(), (R.current = !1))
                    },
                    children: (0, n.jsx)(o.Suspense, {
                      fallback: (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(H.rr, {
                            className: "sr-only",
                            children: (0, n.jsx)(c.A, {
                              id: "restricted.aeon.email.settings.loading",
                              defaultMessage: "Loading email settings…",
                              description:
                                "Loading indicator while reading the selected dot's email binding or available addresses",
                            }),
                          }),
                          (0, n.jsx)(en.MV, {}),
                        ],
                      }),
                      children: K
                        ? (0, n.jsx)(el, { aeonId: v })
                        : (0, n.jsx)(er, {
                            aeonId: v,
                            threadId: b,
                            onClaimResult: E,
                            onLinked: () => {
                              ;((R.current = !0), P(null), M(!0))
                            },
                          }),
                    }),
                  })
                : null),
            (f[44] = v),
            (f[45] = Z),
            (f[46] = I),
            (f[47] = E),
            (f[48] = K),
            (f[49] = b),
            (f[50] = h))
          : (h = f[50]),
        f[51] !== u || f[52] !== h
          ? ((p = (0, n.jsxs)(n.Fragment, { children: [u, h] })), (f[51] = u), (f[52] = h), (f[53] = p))
          : (p = f[53]),
        p
      )
    }
    function eu(e) {
      let t,
        a,
        i,
        r,
        o,
        d,
        u,
        m,
        h,
        p,
        f,
        g,
        v,
        x = (0, s.c)(34),
        {
          emailAddress: b,
          open: y,
          onOpenChange: j,
          onCloseAutoFocus: A,
          triggerButton: k,
          onBlockedSenders: S,
          onSettings: _,
          onRemove: C,
        } = e,
        N = (0, l.gh)(w.u)
      ;(x[0] !== b
        ? ((t = (0, n.jsx)(V.ms.SectionLabel, {
            children: (0, n.jsx)("span", { className: "break-all select-text", children: b }),
          })),
          (x[0] = b),
          (x[1] = t))
        : (t = x[1]),
        x[2] !== b || x[3] !== N
          ? ((a = (e) => {
              ;(0, Z.E)(b, e).then((e) => {
                e &&
                  N.get(Y.Id).info(
                    (0, n.jsx)(c.A, {
                      id: "orbit.email.actions.addressCopied",
                      defaultMessage: "Email address copied",
                      description: "Confirmation after copying the dot’s email address from the channel menu",
                    }),
                  )
              })
            }),
            (x[2] = b),
            (x[3] = N),
            (x[4] = a))
          : (a = x[4]),
        x[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(c.A, {
              id: "restricted.aeon.email.actions.copy",
              defaultMessage: "Copy email address",
              description: "Dot email shortcut action that copies its linked email address",
            })),
            (x[5] = i))
          : (i = x[5]),
        x[6] !== a
          ? ((r = (0, n.jsx)(V.ms.Item, { leftIconAsset: D.u, onClick: a, children: i })), (x[6] = a), (x[7] = r))
          : (r = x[7]))
      let M = `mailto:${encodeURIComponent(b)}`
      return (
        x[8] !== b || x[9] !== j
          ? ((o = (e) => {
              ;(j(!1), (0, K.PQ)({ event: e, href: `mailto:${encodeURIComponent(b)}`, initiator: "side_panel_menu" }))
            }),
            (x[8] = b),
            (x[9] = j),
            (x[10] = o))
          : (o = x[10]),
        x[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(c.A, {
              id: "restricted.aeon.email.actions.open",
              defaultMessage: "Open Email",
              description:
                "Dot email shortcut action that opens the user's email app with the dot's linked address as recipient",
            })),
            (x[11] = d))
          : (d = x[11]),
        x[12] !== M || x[13] !== o
          ? ((u = (0, n.jsx)(V.ms.Item, { leftIconAsset: L.C, href: M, onClick: o, children: d })),
            (x[12] = M),
            (x[13] = o),
            (x[14] = u))
          : (u = x[14]),
        x[15] !== S
          ? ((m =
              null != S
                ? (0, n.jsx)(V.ms.Item, { onSelect: S, children: (0, n.jsx)(c.A, { ...eh.blockedSenders }) })
                : null),
            (x[15] = S),
            (x[16] = m))
          : (m = x[16]),
        x[17] !== _
          ? ((h =
              null != _ ? (0, n.jsx)(V.ms.Item, { onSelect: _, children: (0, n.jsx)(c.A, { ...eh.settings }) }) : null),
            (x[17] = _),
            (x[18] = h))
          : (h = x[18]),
        x[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)(V.ms.Separator, {})), (x[19] = p))
          : (p = x[19]),
        x[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(c.A, {
              id: "restricted.aeon.email.actions.disconnect",
              defaultMessage: "Disconnect Email",
              description: "Disconnects the email address from this dot while keeping the address owned by the user",
            })),
            (x[20] = f))
          : (f = x[20]),
        x[21] !== C
          ? ((g = (0, n.jsx)(V.ms.Item, { leftIconAsset: O.N, tone: "destructive", onSelect: C, children: f })),
            (x[21] = C),
            (x[22] = g))
          : (g = x[22]),
        x[23] !== A ||
        x[24] !== j ||
        x[25] !== y ||
        x[26] !== t ||
        x[27] !== h ||
        x[28] !== g ||
        x[29] !== r ||
        x[30] !== u ||
        x[31] !== m ||
        x[32] !== k
          ? ((v = (0, n.jsxs)(V.Ab, {
              side: "bottom",
              align: "center",
              contentWidth: "menu",
              open: y,
              onOpenChange: j,
              onCloseAutoFocus: A,
              triggerButton: k,
              children: [t, r, u, m, h, p, g],
            })),
            (x[23] = A),
            (x[24] = j),
            (x[25] = y),
            (x[26] = t),
            (x[27] = h),
            (x[28] = g),
            (x[29] = r),
            (x[30] = u),
            (x[31] = m),
            (x[32] = k),
            (x[33] = v))
          : (v = x[33]),
        v
      )
    }
    function em(e) {
      let t,
        a,
        i,
        r,
        l,
        o,
        d,
        u,
        h,
        p,
        f,
        g = (0, s.c)(34)
      g[0] !== e
        ? (({ renderShortcut: r, email: a, mode: l, isLoading: o, isError: d, disabled: t, title: u, ...i } = e),
          (g[0] = e),
          (g[1] = t),
          (g[2] = a),
          (g[3] = i),
          (g[4] = r),
          (g[5] = l),
          (g[6] = o),
          (g[7] = d),
          (g[8] = u))
        : ((t = g[1]), (a = g[2]), (i = g[3]), (r = g[4]), (l = g[5]), (o = g[6]), (d = g[7]), (u = g[8]))
      let v = void 0 === l ? "section" : l,
        x = void 0 !== o && o,
        b = void 0 !== d && d,
        y = (0, m.A)(),
        j = x || b || a?.status !== "linked" ? void 0 : a,
        A = u,
        w = i["aria-label"]
      if ("shortcut" === v && x) {
        let e
        ;(g[9] !== y || g[10] !== u
          ? ((e = u ?? y.formatMessage(eh.loading)), (g[9] = y), (g[10] = u), (g[11] = e))
          : (e = g[11]),
          (A = e))
      } else if ("shortcut" === v && b) {
        let e
        ;(g[12] !== y || g[13] !== u
          ? ((e = u ?? y.formatMessage(eh.unavailable)), (g[12] = y), (g[13] = u), (g[14] = e))
          : (e = g[14]),
          (A = e))
      } else if ("shortcut" === v && j?.email_address) {
        let e
        ;((A = u ?? j.email_address),
          g[15] !== w || g[16] !== y || g[17] !== j
            ? ((e =
                w ??
                y.formatMessage(
                  {
                    id: "restricted.aeon.email.shortcut.addressLabel",
                    defaultMessage: "Email: {emailAddress}",
                    description:
                      "Accessible label for the button opening the agent's linked email menu. emailAddress is the full email address.",
                  },
                  { emailAddress: j.email_address },
                )),
              (g[15] = w),
              (g[16] = y),
              (g[17] = j),
              (g[18] = e))
            : (e = g[18]),
          (w = e))
      }
      if ("shortcut" === v) {
        let e
        ;(g[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, {
              id: "restricted.aeonMessaging.emailShortcut",
              defaultMessage: "Email",
              description: "Button opening the dot's email settings",
            })),
            (g[19] = e))
          : (e = g[19]),
          (h = e))
      } else if (x) {
        let e
        ;(g[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...eh.loading })), (g[20] = e))
          : (e = g[20]),
          (h = e))
      } else if (b) {
        let e
        ;(g[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...eh.unavailable })), (g[21] = e))
          : (e = g[21]),
          (h = e))
      } else if (a?.status === "linked") h = a.email_address
      else {
        let e
        ;(g[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...eh.setup })), (g[22] = e))
          : (e = g[22]),
          (h = e))
      }
      let k = "setup" === v ? "section" : v,
        S = j?.email_address
      g[23] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, n.jsx)(Q.VDi, {})), (g[23] = p)) : (p = g[23])
      let _ = t || x
      return (
        g[24] !== w ||
        g[25] !== x ||
        g[26] !== h ||
        g[27] !== i ||
        g[28] !== r ||
        g[29] !== A ||
        g[30] !== k ||
        g[31] !== S ||
        g[32] !== _
          ? ((f = (0, n.jsx)(ee.R, {
              renderShortcut: r,
              ...i,
              title: A,
              mode: k,
              settingsValue: S,
              icon: p,
              disabled: _,
              loading: x,
              "aria-busy": x,
              "aria-label": w,
              children: h,
            })),
            (g[24] = w),
            (g[25] = x),
            (g[26] = h),
            (g[27] = i),
            (g[28] = r),
            (g[29] = A),
            (g[30] = k),
            (g[31] = S),
            (g[32] = _),
            (g[33] = f))
          : (f = g[33]),
        f
      )
    }
    let eh = (0, q.YK)({
      setup: {
        id: "restricted.aeon.email.setup.focusedTitle",
        defaultMessage: "Set up Email",
        description: "Title of the dialog for setting up the email address for the user's agent",
      },
      settings: {
        id: "restricted.aeon.email.settings.title",
        defaultMessage: "Email settings",
        description: "Title of the settings dialog for a connected dot email address",
      },
      blockedSenders: {
        id: "restricted.aeon.email.blockedSenders.title",
        defaultMessage: "Blocked senders",
        description: "Title of the email settings for managing addresses blocked from emailing the user's dot",
      },
      loading: {
        id: "restricted.aeon.email.summary.loading",
        defaultMessage: "Loading email…",
        description: "Compact status in the pinned dot summary while its email binding is being read",
      },
      unavailable: {
        id: "restricted.aeon.email.summary.unavailable",
        defaultMessage: "Email unavailable",
        description:
          "Email row in the pinned dot summary when the saved email binding cannot be read; opens recovery settings when the dot is accessible",
      },
    })
    var ep = a("rred"),
      ef = a("J8d1"),
      eg = a("MZvE")
    function ev(e) {
      let t,
        a = (0, s.c)(5),
        { conversationId: i, layout: r, showActivityStatus: o } = e,
        c = void 0 === r ? "row" : r,
        d = void 0 === o || o,
        u = (0, l._U)(T.D0, i)
      return (
        a[0] !== i || a[1] !== u || a[2] !== c || a[3] !== d
          ? ((t = u && null != i ? (0, n.jsx)(eN, { conversationId: i, layout: c, showActivityStatus: d }) : null),
            (a[0] = i),
            (a[1] = u),
            (a[2] = c),
            (a[3] = d),
            (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function ex(e) {
      let t,
        a = (0, s.c)(6),
        { renderShortcut: i, conversationId: r, mode: l, onSetup: o } = e,
        c = void 0 === l ? "content" : l,
        d = eP(r)
      return (
        a[0] !== r || a[1] !== d || a[2] !== c || a[3] !== o || a[4] !== i
          ? ((t = (0, n.jsx)(eo, { renderShortcut: i, conversationId: r, isArchived: d, mode: c, onSetup: o })),
            (a[0] = r),
            (a[1] = d),
            (a[2] = c),
            (a[3] = o),
            (a[4] = i),
            (a[5] = t))
          : (t = a[5]),
        t
      )
    }
    function eb({
      renderAppearancePicker: e,
      description: t = (0, n.jsx)(c.A, {
        id: "restricted.aeon.summary.identity.productName.dot",
        defaultMessage: "Your private {productName}",
        description:
          "Description beneath the agent's name in its summary panel; productName is the untranslated term for the user's agent, not the assistant's custom name",
        values: { productName: (0, n.jsx)("strong", { children: "dot" }) },
      }),
      activityStatus: a,
      mode: s = "section",
      layout: o = "row",
    }) {
      let d = { duration: 0.15 * !(0, l.Ul)(k.x), ease: _.Wu },
        u = (0, n.jsxs)("div", {
          className: "flex min-w-0 items-center gap-token-button-composer-gap select-none",
          children: [
            (0, n.jsx)(S.x.ItemLeading, {
              variant: "compact" === o ? "custom" : "intrinsic",
              children: (0, n.jsx)(r.P.div, {
                className: "shrink-0",
                layout: "row" !== o,
                layoutDependency: o,
                transition: d,
                children: e("row" === o ? "profile" : o),
              }),
            }),
            (0, n.jsxs)(r.P.div, {
              className: "flex min-w-0 flex-1 flex-col text-base",
              layout: "row" !== o && "position",
              layoutDependency: o,
              transition: d,
              children: [
                (0, n.jsx)("div", {
                  className: (0, i.A)(
                    "-ms-2.5 flex min-w-0 items-start",
                    "compact" === o ? "text-sm font-medium" : "text-lg leading-6.5",
                    "hero" === o && "font-semibold",
                    "row" === o && "font-normal",
                  ),
                  children: e("compact" === o ? "compact-name" : "name"),
                }),
                (0, n.jsx)("div", {
                  hidden: "compact" === o,
                  children:
                    a ??
                    ("hero" !== o && null != t
                      ? (0, n.jsx)("p", { className: "text-sm break-words text-secondary select-text", children: t })
                      : null),
                }),
              ],
            }),
          ],
        })
      return "content" === s
        ? u
        : (0, n.jsx)(S.x.Section, { sectionKey: "aeon-identity", mode: "headerless", children: u })
    }
    function ey(e) {
      let t,
        a = (0, s.c)(8),
        { isActive: i, lastActiveAtMs: r, latestActivityAtMs: l, isPaused: o, pausedAtMs: c, pauseResumeAction: d } = e,
        u = void 0 === c ? null : c
      if (void 0 !== o && o) {
        let e
        return (
          a[0] !== d || a[1] !== u
            ? ((e = (0, n.jsx)(ek, { pausedAtMs: u, pauseResumeAction: d })), (a[0] = d), (a[1] = u), (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      let m = (void 0 === l ? null : l) ?? r
      if (i) {
        let e
        return (a[3] !== d ? ((e = (0, n.jsx)(ej, { pauseResumeAction: d })), (a[3] = d), (a[4] = e)) : (e = a[4]), e)
      }
      return (
        a[5] !== m || a[6] !== d
          ? ((t = null == m ? null : (0, n.jsx)(eA, { lastActiveAtMs: m, pauseResumeAction: d })),
            (a[5] = m),
            (a[6] = d),
            (a[7] = t))
          : (t = a[7]),
        t
      )
    }
    function ej(e) {
      let t,
        a,
        i = (0, s.c)(3),
        { pauseResumeAction: r } = e
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(c.A, {
              id: "restricted.aeon.summary.active",
              defaultMessage: "Active",
              description:
                "Status beneath a dot's profile while it is working, waiting on subtasks, or was active within the recent-activity grace period",
            })),
            (i[0] = t))
          : (t = i[0]),
        i[1] !== r ? ((a = (0, n.jsx)(eC, { pauseResumeAction: r, children: t })), (i[1] = r), (i[2] = a)) : (a = i[2]),
        a
      )
    }
    function eA(e) {
      let t,
        a = (0, s.c)(5),
        { lastActiveAtMs: i, pauseResumeAction: r } = e,
        l = i + 6e4,
        o = (0, A.Oc)(l)
      return (
        a[0] !== l || a[1] !== i || a[2] !== o || a[3] !== r
          ? ((t =
              o.getTime() < l
                ? (0, n.jsx)(ej, { pauseResumeAction: r })
                : (0, n.jsx)(ew, { lastActiveAtMs: i, pauseResumeAction: r })),
            (a[0] = l),
            (a[1] = i),
            (a[2] = o),
            (a[3] = r),
            (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function ew(e) {
      let t,
        a,
        i,
        r = (0, s.c)(9),
        { lastActiveAtMs: l, pauseResumeAction: o } = e,
        d = (0, A.wv)()
      r[0] !== l || r[1] !== d
        ? ((t = (0, j.w)(new Date(l).toISOString(), d)), (r[0] = l), (r[1] = d), (r[2] = t))
        : (t = r[2])
      let { unit: u, value: m } = t,
        h = -m
      return (
        r[3] !== h || r[4] !== u
          ? ((a = (0, n.jsx)(c.A, {
              id: "restricted.aeon.summary.activeRelativeTimeNatural",
              defaultMessage: "Active {time}",
              description:
                "Relative timestamp beneath a dot's profile showing when it most recently did work, after the recent-activity grace period; time is a localized relative phrase such as '4 minutes ago'",
              values: { time: (0, n.jsx)(x, { numeric: "always", unit: u, value: h }, "active-relative-time") },
            })),
            (r[3] = h),
            (r[4] = u),
            (r[5] = a))
          : (a = r[5]),
        r[6] !== o || r[7] !== a
          ? ((i = (0, n.jsx)(eC, { pauseResumeAction: o, children: a })), (r[6] = o), (r[7] = a), (r[8] = i))
          : (i = r[8]),
        i
      )
    }
    function ek(e) {
      let t,
        a,
        i,
        r = (0, s.c)(15),
        { pausedAtMs: l, pauseResumeAction: o } = e,
        d = (0, A.wv)(),
        u = null == l ? null : l + 6e4,
        m = (0, A.Oc)(u),
        h = null != u && m.getTime() < u ? m : d
      if (null == l) {
        let e, t
        return (
          r[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "restricted.aeon.summary.paused",
                defaultMessage: "Paused",
                description: "Status beneath a dot's name when it is paused but the pause time is unknown",
              })),
              (r[0] = e))
            : (e = r[0]),
          r[1] !== o
            ? ((t = (0, n.jsx)(eC, { pauseResumeAction: o, children: e })), (r[1] = o), (r[2] = t))
            : (t = r[2]),
          t
        )
      }
      if (h.getTime() < l + 6e4) {
        let e, t
        return (
          r[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "restricted.aeon.summary.pausedJustNow",
                defaultMessage: "Paused just now",
                description: "Status beneath a dot's name during the first minute after the user pauses it",
              })),
              (r[3] = e))
            : (e = r[3]),
          r[4] !== o
            ? ((t = (0, n.jsx)(eC, { pauseResumeAction: o, children: e })), (r[4] = o), (r[5] = t))
            : (t = r[5]),
          t
        )
      }
      r[6] !== h || r[7] !== l
        ? ((t = (0, j.w)(new Date(l).toISOString(), h)), (r[6] = h), (r[7] = l), (r[8] = t))
        : (t = r[8])
      let { unit: p, value: f } = t,
        g = -f
      return (
        r[9] !== g || r[10] !== p
          ? ((a = (0, n.jsx)(c.A, {
              id: "restricted.aeon.summary.pausedRelativeTime",
              defaultMessage: "Paused {time}",
              description: "Status beneath a dot's name showing how long ago the user paused it",
              values: { time: (0, n.jsx)(x, { numeric: "always", unit: p, value: g }, "paused-relative-time") },
            })),
            (r[9] = g),
            (r[10] = p),
            (r[11] = a))
          : (a = r[11]),
        r[12] !== o || r[13] !== a
          ? ((i = (0, n.jsx)(eC, { pauseResumeAction: o, children: a })), (r[12] = o), (r[13] = a), (r[14] = i))
          : (i = r[14]),
        i
      )
    }
    function eS(e) {
      let t,
        a,
        i,
        r = (0, s.c)(10),
        { conversationId: d, pauseResumeAction: u } = e,
        m = (0, l._U)(I.kt, d)
      r[0] !== d ? ((t = (e) => (0, M.sQ)(d, e)), (r[0] = d), (r[1] = t)) : (t = r[1])
      let h = t
      r[2] !== d ? ((a = () => (0, M.tJ)(d)), (r[2] = d), (r[3] = a)) : (a = r[3])
      let p = a,
        f = (0, o.useSyncExternalStore)(h, p, e_)
      if (m) {
        let e, t
        return (
          r[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, { ...N.A.adminPaused })), (r[4] = e))
            : (e = r[4]),
          r[5] !== u
            ? ((t = (0, n.jsx)(eC, { pauseResumeAction: u, children: e })), (r[5] = u), (r[6] = t))
            : (t = r[6]),
          t
        )
      }
      return (
        r[7] !== u || r[8] !== f
          ? ((i = (0, n.jsx)(ek, { pausedAtMs: f, pauseResumeAction: u })), (r[7] = u), (r[8] = f), (r[9] = i))
          : (i = r[9]),
        i
      )
    }
    function e_() {
      return null
    }
    function eC(e) {
      let t,
        a = (0, s.c)(5),
        { children: i, pauseResumeAction: r } = e
      if (null != r) {
        let e
        return (
          a[0] !== i || a[1] !== r
            ? ((e = (0, n.jsx)(P.J, { ...r, className: "leading-5 text-tertiary", statusLabel: i })),
              (a[0] = i),
              (a[1] = r),
              (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      return (
        a[3] !== i
          ? ((t = (0, n.jsx)("p", { className: "leading-5 text-tertiary", children: i })), (a[3] = i), (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function eN(e) {
      let t,
        a,
        i,
        r,
        l,
        c,
        d,
        u = (0, s.c)(23),
        { activityStatus: m, conversationId: h, layout: p, showActivityStatus: f, showThreadControls: g } = e,
        v = void 0 === g || g,
        x = eP(h),
        b = (0, o.useRef)(null)
      return (
        u[0] !== h
          ? ((t = (e) => {
              let t = "name" === e || "compact-name" === e
              return (0, n.jsx)(C.AeonAppearancePicker, {
                ref: t ? void 0 : b,
                conversationId: h,
                variant: e,
                onTrigger: t ? (e) => b.current?.open(e) : void 0,
              })
            }),
            (u[0] = h),
            (u[1] = t))
          : (t = u[1]),
        u[2] !== p
          ? ((a =
              "hero" === p
                ? (0, n.jsx)("div", {
                    className: "invisible col-start-1 row-start-1",
                    "aria-hidden": !0,
                    children: (0, n.jsx)(ej, {}),
                  })
                : null),
            (u[2] = p),
            (u[3] = a))
          : (a = u[3]),
        u[4] !== m || u[5] !== h || u[6] !== f
          ? ((i = f
              ? (0, n.jsx)("div", {
                  className: "col-start-1 row-start-1 flex flex-col",
                  children: m ?? (0, n.jsx)(eI, { conversationId: h }, h),
                })
              : null),
            (u[4] = m),
            (u[5] = h),
            (u[6] = f),
            (u[7] = i))
          : (i = u[7]),
        u[8] !== a || u[9] !== i
          ? ((r = (0, n.jsxs)("div", { className: "grid", children: [a, i] })), (u[8] = a), (u[9] = i), (u[10] = r))
          : (r = u[10]),
        u[11] !== p || u[12] !== t || u[13] !== r
          ? ((l = (0, n.jsx)(eb, {
              description: null,
              layout: p,
              renderAppearancePicker: t,
              activityStatus: r,
              mode: "content",
            })),
            (u[11] = p),
            (u[12] = t),
            (u[13] = r),
            (u[14] = l))
          : (l = u[14]),
        u[15] !== h || u[16] !== x || u[17] !== p || u[18] !== v
          ? ((c = v
              ? (0, n.jsx)("div", {
                  hidden: "compact" === p,
                  children: (0, n.jsx)(z, { conversationId: h, isArchived: x }, h),
                })
              : null),
            (u[15] = h),
            (u[16] = x),
            (u[17] = p),
            (u[18] = v),
            (u[19] = c))
          : (c = u[19]),
        u[20] !== l || u[21] !== c
          ? ((d = (0, n.jsxs)(n.Fragment, { children: [l, c] })), (u[20] = l), (u[21] = c), (u[22] = d))
          : (d = u[22]),
        d
      )
    }
    let eM = (0, l.i1)(w.u, (e, { get: t }) => {
      let a = t(R.cloudAeonByThreadId$, e, { enabled: !1 }).data
      return t(ep.DB, { conversationId: e, roomId: (0, eg.s)(t, a) ?? void 0 })
    })
    function eI(e) {
      let t,
        a,
        i,
        r = (0, s.c)(13),
        { conversationId: o } = e,
        c = (0, l._U)(y.qX, o),
        d = (0, l._U)(eM, o),
        u = eP(o),
        m = (0, l._U)(I.dH, o)
      r[0] !== d
        ? ((t = null == d ? void 0 : (0, n.jsx)(ef.W, { heading: d.heading, state: d.state })), (r[0] = d), (r[1] = t))
        : (t = r[1])
      let h = null != d,
        p = "stopped" === m
      return (
        r[2] !== o || r[3] !== c || r[4] !== u || r[5] !== m
          ? ((a =
              "off" === m || "failed" === m
                ? void 0
                : {
                    conversationId: o,
                    executionHostId: c,
                    isActionEnabled: !u,
                    isResponseInProgress: "working" === m,
                  }),
            (r[2] = o),
            (r[3] = c),
            (r[4] = u),
            (r[5] = m),
            (r[6] = a))
          : (a = r[6]),
        r[7] !== o || r[8] !== t || r[9] !== h || r[10] !== p || r[11] !== a
          ? ((i = (0, n.jsx)(eT, {
              conversationId: o,
              liveActivityLabel: t,
              isActive: h,
              isPaused: p,
              pauseResumeAction: a,
            })),
            (r[7] = o),
            (r[8] = t),
            (r[9] = h),
            (r[10] = p),
            (r[11] = a),
            (r[12] = i))
          : (i = r[12]),
        i
      )
    }
    function eP(e) {
      let t = (0, l._U)(y.u4, e),
        a = (0, b.zy)()
      return t || a.state?.archivedConversationPreview === !0
    }
    function eT(e) {
      let t,
        a,
        i,
        r = (0, s.c)(18),
        { conversationId: c, liveActivityLabel: d, isActive: u, isPaused: m, pauseResumeAction: h } = e,
        p = (0, l.gh)(w.u),
        [f, g] = (0, o.useState)(null),
        v = (0, l._U)(y.P$, c),
        x = (0, l._U)(M.zf, c),
        b = (0, l._U)(T.DL, u && null != f ? null : c),
        j = (0, l._U)(M.Tu, c),
        A = (0, l._U)(M.rM, c),
        k = b ?? x ?? v
      if (
        (null == f && null != k && g(k),
        r[0] !== c || r[1] !== x || r[2] !== v || r[3] !== p
          ? ((t = () => {
              null == x && null != v && (0, M.dG)(p, c, v)
            }),
            (a = [c, x, v, p]),
            (r[0] = c),
            (r[1] = x),
            (r[2] = v),
            (r[3] = p),
            (r[4] = t),
            (r[5] = a))
          : ((t = r[4]), (a = r[5])),
        (0, o.useEffect)(t, a),
        m)
      ) {
        let e
        return (
          r[6] !== c || r[7] !== h
            ? ((e = (0, n.jsx)(eS, { conversationId: c, pauseResumeAction: h })), (r[6] = c), (r[7] = h), (r[8] = e))
            : (e = r[8]),
          e
        )
      }
      return (
        r[9] !== f ||
        r[10] !== u ||
        r[11] !== k ||
        r[12] !== j ||
        r[13] !== b ||
        r[14] !== d ||
        r[15] !== h ||
        r[16] !== A
          ? ((i =
              null != d
                ? (0, n.jsx)(eC, { pauseResumeAction: h, children: d })
                : (0, n.jsx)(ey, {
                    isActive: u,
                    lastActiveAtMs: f ?? k,
                    latestActivityAtMs: (function (...e) {
                      return e.reduce((e, t) => (null == t ? e : Math.max(e ?? t, t)), null)
                    })(b, j, A),
                    pauseResumeAction: h,
                  })),
            (r[9] = f),
            (r[10] = u),
            (r[11] = k),
            (r[12] = j),
            (r[13] = b),
            (r[14] = d),
            (r[15] = h),
            (r[16] = A),
            (r[17] = i))
          : (i = r[17]),
        i
      )
    }
  },
  z8vb(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57"),
      r = a("zTeN"),
      l = a("bVeK"),
      o = a("MVXB")
    a.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            a,
            c,
            d = (0, s.c)(6),
            { identity: u, variant: m } = e,
            h = (0, r._U)(o.V, u ?? "orbit-draft"),
            p = null != u && !h && "opacity-0",
            f =
              "hero" === (void 0 === m ? "profile" : m)
                ? "right-0 bottom-0 size-7 text-default"
                : "-top-1 -right-1 size-5 text-codex-description"
          return (
            d[0] !== p || d[1] !== f
              ? ((t = (0, i.A)(
                  "pointer-events-none absolute flex items-center justify-center rounded-full border border-default bg-surface shadow-sm group-hover/avatar:opacity-100 group-focus-visible/avatar:opacity-100",
                  p,
                  f,
                )),
                (d[0] = p),
                (d[1] = f),
                (d[2] = t))
              : (t = d[2]),
            d[3] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, n.jsx)(l.Npl, {})), (d[3] = a)) : (a = d[3]),
            d[4] !== t ? ((c = (0, n.jsx)("span", { className: t, children: a })), (d[4] = t), (d[5] = c)) : (c = d[5]),
            c
          )
        },
      },
    )
  },
  MVXB(e, t, a) {
    var n = a("SZCv"),
      s = a.n(n),
      i = a("zTeN"),
      r = a("tl5a"),
      l = a("PiU7"),
      o = a("m22M"),
      c = a("OWtl"),
      d = a("Nwp9"),
      u = a("tLM7"),
      m = a("q3j5"),
      h = a("TYK1"),
      p = a("TMjP"),
      f = a("ho8L")
    let g = (0, d.m3)("has-opened-dot-appearance-editor", !1),
      v = (0, i.i1)(c.u, (e, { get: t }) => {
        if ("orbit-draft" === e || t(g)) return !1
        let a = t(f.fR, { hostId: t(r.qX, e), threadId: e })
        if (void 0 === a) return !1
        let n = t(h.cloudAeonByThreadId$, e, { enabled: a }).data
        if (a && null == n) return !1
        let i = n?.display_name ?? t(o.N, e)
        if (null == i || !(0, m.x)(i) || null != t(p.T, e)) return !1
        let c = t(u.UC, e)
        if (null != c) return s()(c.state, (0, l.gV)("gray"))
        let d = n?.avatar_id ?? n?.avatar
        return (
          (null == d || "default" === d) &&
          (n?.avatar_type == null ||
            "image" === n.avatar_type ||
            ("default" === n.avatar_type && (n.avatar_manifest?.tint ?? "gray") === "gray"))
        )
      })
    a.d(t, {}, { V: v, s: g })
  },
  Nw18(e, t, a) {
    var n = a("DBCl"),
      s = a("ASxG"),
      i = a("Ghh3"),
      r = a("GDNt")
    let l = s.enum([
      "ineligible",
      "workspace_disabled",
      "invalid_address",
      "disallowed_address",
      "address_unavailable",
      "quota_exceeded",
      "workspace_setup",
      "permission_required",
      "conflict",
      "access_denied",
      "unavailable",
    ])
    a.d(
      t,
      {},
      {
        D0: function (e, t) {
          return i.Request.safePut("/tbo/{tbo_id}/channels/email", {
            parameters: { path: { tbo_id: e } },
            requestBody: t,
          })
        },
        DZ: function (e, t) {
          return i.Request.safeGet("/tbo/{tbo_id}/channels/email", { parameters: { path: { tbo_id: e } }, signal: t })
        },
        K2: function (e) {
          return i.Request.safeDelete("/tbo/{tbo_id}/channels/email", { parameters: { path: { tbo_id: e } } })
        },
        T5: function (e) {
          if (!(e instanceof r.fk)) return { code: "unavailable" }
          let t = l.safeParse(e.errorCode ?? (0, n.$Cs)(e.message))
          return t.success
            ? { code: t.data }
            : [401, 403, 404].includes(e.status)
              ? { code: "access_denied" }
              : 409 === e.status
                ? { code: "conflict" }
                : { code: 422 === e.status ? "invalid_address" : "unavailable" }
        },
        hL: function (e, t) {
          return i.Request.safeGet("/tbo/{tbo_id}/channels/email/blocked-senders", {
            parameters: { path: { tbo_id: e } },
            signal: t,
          })
        },
        pW: function (e, t) {
          return i.Request.safePost("/tbo/{tbo_id}/channels/email/blocked-senders", {
            parameters: { path: { tbo_id: e } },
            requestBody: t,
          })
        },
        rj: function (e, t) {
          return i.Request.safePost("/tbo/{tbo_id}/channels/email/claim", {
            parameters: { path: { tbo_id: e } },
            requestBody: t,
          })
        },
        zz: function (e, t) {
          return i.Request.safeGet("/tbo/{tbo_id}/channels/email/options", {
            parameters: { path: { tbo_id: e } },
            signal: t,
          })
        },
      },
    )
  },
  HFiL(e, t, a) {
    var n = a("zTeN"),
      s = a("OWtl"),
      i = a("OMIV")
    let r = (0, n.un)(s.u, ({ get: e }) => e(i.JW, "2208356192"))
    a.d(t, {}, { U: r })
  },
  YsvR(e, t, a) {
    var n = a("zTeN"),
      s = a("SPnB"),
      i = a("OWtl"),
      r = a("TYK1"),
      l = a("Nw18"),
      o = a("HFiL")
    let c = (0, n.vU)(i.u, (e, { get: t }) => {
        let a = t(s.chatGptAuthenticatedAccountId$),
          n = t(s.chatGptAuthenticatedUserId$)
        return {
          enabled: null != a && null != n,
          queryKey: ["cloud-aeon-email", a, n, e],
          queryFn: ({ signal: t }) => (0, l.DZ)(e, t),
          retry: !1,
          staleTime: 0,
        }
      }),
      d = (0, n.vU)(i.u, (e, { get: t }) => {
        let a = t(s.chatGptAuthenticatedAccountId$),
          n = t(s.chatGptAuthenticatedUserId$),
          i = t(c, e),
          r = i.isError && ["workspace_disabled", "ineligible"].includes((0, l.T5)(i.error).code)
        return {
          enabled: null != a && null != n && !r,
          queryKey: ["cloud-aeon-email-options", a, n, e],
          queryFn: ({ signal: t }) => (0, l.zz)(e, t),
          retry: !1,
          refetchOnMount: !0,
          staleTime: 0,
        }
      }),
      u = (0, n.i1)(i.u, (e, { get: t }) => {
        if (!t(o.U)) return !1
        let a = t(r.cloudAeonByThreadId$, e).data
        if (null == a) return !1
        let n = t(c, a.id)
        return !!n.isSuccess && "linked" === n.data.status && 1 === n.data.narrow_email_consent_version
      }),
      m = (0, n.c4)(i.u, (e, { get: t }) => {
        let a = t(s.chatGptAuthenticatedAccountId$),
          n = t(s.chatGptAuthenticatedUserId$),
          i = ["cloud-aeon-email", a, n, e]
        return {
          mutationKey: ["cloud-aeon-email", a, n, e, "update"],
          mutationFn: async (t) => {
            switch (t.type) {
              case "claim":
                return (0, l.rj)(e, t.body)
              case "link":
                return (0, l.D0)(e, t.body)
              case "unlink":
                await (0, l.K2)(e)
                return
            }
          },
          retry: !1,
          onSuccess: async (e, t, a, { client: n }) => {
            ;(await n.cancelQueries({ queryKey: i, exact: !0 }),
              null != e ? n.setQueryData(i, e) : await n.invalidateQueries({ queryKey: i, exact: !0 }))
          },
          onError: async (e, t, a, { client: n }) => {
            ;(await n.cancelQueries({ queryKey: i, exact: !0 }), await n.invalidateQueries({ queryKey: i, exact: !0 }))
          },
          onSettled: (e, t, s, i, { client: r }) => {
            r.invalidateQueries({ queryKey: ["cloud-aeon-email-options", a, n] })
          },
        }
      }),
      h = (0, n.vU)(i.u, (e, { get: t }) => {
        let a = t(s.chatGptAuthenticatedUserId$),
          n = t(s.chatGptAuthenticatedAccountId$)
        return {
          enabled: null != a && null != n,
          queryKey: ["dot-email-blocked-senders", n, a, e],
          queryFn: ({ signal: t }) => (0, l.hL)(e, t),
          retry: !1,
          staleTime: 0,
        }
      }),
      p = (0, n.c4)(i.u, (e, { get: t }) => {
        let a = ["dot-email-blocked-senders", t(s.chatGptAuthenticatedAccountId$), t(s.chatGptAuthenticatedUserId$), e]
        return {
          mutationKey: [...a, "update"],
          retry: !1,
          mutationFn: (t) => (0, l.pW)(e, t),
          onSettled: (e, t, n, s, { client: i }) => i.invalidateQueries({ queryKey: a, exact: !0 }),
        }
      })
    a.d(t, {}, { Fz: h, Ic: m, Z0: d, dk: c, oV: u, zW: p })
  },
  J8d1(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("oyxz"),
      r = a("PaR8")
    function l(e) {
      let t,
        a,
        l,
        c = (0, s.c)(8),
        { state: d, fallback: u } = e
      if ("AdminPaused" === d) {
        let e
        return (
          c[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(i.A, { ...r.A.adminPaused })), (c[0] = e))
            : (e = c[0]),
          e
        )
      }
      let m = d
      return (
        "Needs input" === d ? (m = "needsInput") : "-" === d && (m = "unnamed"),
        c[1] !== m ? ((t = { state: m }), (c[1] = m), (c[2] = t)) : (t = c[2]),
        c[3] !== u
          ? ((a = (e) => (0, n.jsx)(n.Fragment, { children: e.some(o) ? e : u })), (c[3] = u), (c[4] = a))
          : (a = c[4]),
        c[5] !== t || c[6] !== a
          ? ((l = (0, n.jsx)(i.A, {
              id: "restricted.aeonMessaging.activityState",
              defaultMessage:
                "{state, select, Working {Working} Searching {Searching} Creating {Creating} Payment {Payment} Thinking {Thinking} needsInput {Needs input} Ready {Ready} Paused {Paused} unnamed {-} Simplify {Simplify} Blame {Blame} other {}}",
              description:
                "Short activity state beside the dot's public progress description in the room header and identity card. Keep select keys unchanged. Working means using a computer; Creating means making an artifact; Payment describes payment-related work, not permission; needsInput means waiting for a real user response; Ready means idle; Paused means paused by the user; Simplify means simplifying something; Blame means tracing responsibility. unnamed is an unnamed placeholder. Translate state labels only, not the separate public progress description.",
              values: t,
              children: a,
            })),
            (c[5] = t),
            (c[6] = a),
            (c[7] = l))
          : (l = c[7]),
        l
      )
    }
    function o(e) {
      return !!e
    }
    a.d(
      t,
      {},
      {
        N: l,
        W: function (e) {
          let t,
            a,
            r,
            o = (0, s.c)(7),
            { heading: c, state: d } = e
          o[0] !== c ? ((t = c?.trim()), (o[0] = c), (o[1] = t)) : (t = o[1])
          let u = t
          if (u) {
            let e
            return (
              o[2] !== u ? ((e = (0, n.jsx)(n.Fragment, { children: u })), (o[2] = u), (o[3] = e)) : (e = o[3]),
              e
            )
          }
          o[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(i.A, {
                id: "restricted.aeonMessaging.thinking",
                defaultMessage: "Thinking",
                description: "Live status in the dot header before a progress description is available",
              })),
              (o[4] = a))
            : (a = o[4])
          let m = a
          return (
            o[5] !== d
              ? ((r = null == d ? m : (0, n.jsx)(l, { state: d, fallback: m })), (o[5] = d), (o[6] = r))
              : (r = o[6]),
            r
          )
        },
      },
    )
  },
  om2R(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("slpy"),
      r = a("Sm6l"),
      l = a("RNul"),
      o = a("IIZn"),
      c = a("HWx4")
    a.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            a,
            d,
            u,
            m,
            h,
            p,
            f,
            g,
            v,
            x,
            b = (0, s.c)(23)
          if (b[0] !== e) {
            g = Symbol.for("react.early_return_sentinel")
            e: {
              let {
                renderShortcut: n,
                children: s,
                icon: i,
                iconVariant: r,
                iconOnly: l,
                mode: o,
                loading: c,
                selectable: v,
                settingsValue: x,
                ...b
              } = e
              if (
                ((t = s),
                (a = i),
                (u = r),
                (h = o),
                (p = b),
                (d = void 0 !== l && l),
                (m = void 0 !== c && c),
                (f = void 0 !== v && v),
                null != n && "shortcut" === h && !d)
              ) {
                g = n({ ...p, loading: m, children: t, settingsValue: x })
                break e
              }
            }
            ;((b[0] = e),
              (b[1] = t),
              (b[2] = a),
              (b[3] = d),
              (b[4] = u),
              (b[5] = m),
              (b[6] = h),
              (b[7] = p),
              (b[8] = f),
              (b[9] = g))
          } else
            ((t = b[1]), (a = b[2]), (d = b[3]), (u = b[4]), (m = b[5]), (h = b[6]), (p = b[7]), (f = b[8]), (g = b[9]))
          if (g !== Symbol.for("react.early_return_sentinel")) return g
          b[10] !== t ||
          b[11] !== a ||
          b[12] !== d ||
          b[13] !== u ||
          b[14] !== m ||
          b[15] !== h ||
          b[16] !== p ||
          b[17] !== f
            ? ((v =
                "shortcut" === h
                  ? (0, n.jsxs)(r.$, {
                      ...p,
                      className: d ? void 0 : "w-full justify-center only:col-span-full",
                      allowShrink: !0,
                      uniform: d,
                      color: "secondary",
                      size: "dialogGhost",
                      radius: "large",
                      loading: m,
                      children: [!m && a, d ? (0, n.jsx)("span", { className: "sr-only", children: t }) : t],
                    })
                  : (0, n.jsxs)(c.x.ItemButton, {
                      ...p,
                      className: "select-none",
                      children: [
                        (0, n.jsx)(o.F, { mode: h, variant: u, children: a }),
                        (0, n.jsx)(c.x.ItemLabel, {
                          className: f ? "text-fade-truncate leading-5 select-text" : "leading-5 select-none",
                          truncate: !f,
                          children: t,
                        }),
                        m ? (0, n.jsx)(c.x.ItemMeta, { variant: "icon", children: (0, n.jsx)(l.y, {}) }) : null,
                      ],
                    })),
              (b[10] = t),
              (b[11] = a),
              (b[12] = d),
              (b[13] = u),
              (b[14] = m),
              (b[15] = h),
              (b[16] = p),
              (b[17] = f),
              (b[18] = v))
            : (v = b[18])
          let y = v
          return (
            b[19] !== y || b[20] !== t || b[21] !== d
              ? ((x = d ? (0, n.jsx)(i.m, { content: t, children: y }) : y),
                (b[19] = y),
                (b[20] = t),
                (b[21] = d),
                (b[22] = x))
              : (x = b[22]),
            x
          )
        },
      },
    )
  },
  sZGP(e, t, a) {
    a.d(t, { g: () => N })
    var n = a("ABep"),
      s = a("QosV")
    let i = (0, a("iJY0").a)({
      name: "envelope-regular-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.25, y: 2.58374, width: 13.5, height: 10.833008 },
        visualBounds: { x: 1.25, y: 2.58374, width: 13.5, height: 10.833008 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.25, y: 2.58374, width: 13.5, height: 10.833008 },
        center: { x: 8, y: 8.000244 },
        insets: { top: 2.58374, right: 1.25, bottom: 2.583252, left: 1.25 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8.000244 }, foreground: { x: 8, y: 8.000244 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1338 2.58374C13.5787 2.58399 14.7499 3.75502 14.75 5.19995V10.8005C14.7498 12.2453 13.5786 13.4165 12.1338 13.4167H3.86621C2.42143 13.4165 1.25025 12.2453 1.25 10.8005V5.19995C1.25007 3.75502 2.42132 2.58399 3.86621 2.58374H12.1338ZM9.21094 9.39526C8.49348 9.92057 7.52125 9.93193 6.79102 9.42456L2.75 6.61499V10.8005C2.75025 11.4169 3.24985 11.9165 3.86621 11.9167H12.1338C12.7501 11.9165 13.2498 11.4169 13.25 10.8005V6.43628L9.21094 9.39526ZM3.86621 4.08374C3.37879 4.08393 2.96467 4.39632 2.8125 4.83179L7.64746 8.19312C7.85189 8.33483 8.12447 8.33232 8.3252 8.1853L13.0938 4.69116C13.1019 4.68521 13.1099 4.67916 13.1182 4.67358C12.9301 4.32263 12.5599 4.08391 12.1338 4.08374H3.86621Z" fill="currentColor"/>',
    })
    var r = a("G0lj"),
      l = a("on57"),
      o = a("zTeN"),
      c = a("zd8w"),
      d = a("Wf1j"),
      u = a("oyxz"),
      m = a("Sm6l"),
      h = a("uuN8"),
      p = a("Ot7V"),
      f = a("HOLv"),
      g = a("bVeK"),
      v = a("qlCY"),
      x = a("m22M"),
      b = a("gdZA"),
      y = a("amW0"),
      j = a("aepO"),
      A = a("jTFC"),
      w = a("q3j5"),
      k = a("TMjP"),
      S = a("nf1S"),
      _ = a("PI8O"),
      C = a("gABY")
    function N(e) {
      let t,
        a,
        i,
        r,
        l,
        o,
        f,
        g = (0, s.c)(32),
        { conversationId: v, method: x, destination: b, recipientName: y, preview: A } = e,
        w = (0, d.A)(),
        k = (0, c.useId)(),
        C = "slack" === x || "teams" === x
      g[0] !== y ? ((t = y?.trim() || null), (g[0] = y), (g[1] = t)) : (t = g[1])
      let N = t
      return (
        g[2] !== N || g[3] !== v || g[4] !== b || g[5] !== C || g[6] !== x || g[7] !== A
          ? ((a =
              "text" === x
                ? (0, n.jsx)(S.kQ, {
                    description: null,
                    children: (0, n.jsx)(_.S, { destination: b, conversationId: v }),
                  })
                : (A ?? (0, n.jsx)(P, { conversationId: v, method: x, recipient: C ? N : b }))),
            (g[2] = N),
            (g[3] = v),
            (g[4] = b),
            (g[5] = C),
            (g[6] = x),
            (g[7] = A),
            (g[8] = a))
          : (a = g[8]),
        g[9] !== N || g[10] !== C || g[11] !== k
          ? ((i = C ? (0, n.jsx)(I, { id: k, recipient: N }) : null), (g[9] = N), (g[10] = C), (g[11] = k), (g[12] = i))
          : (i = g[12]),
        g[13] !== v || g[14] !== b || g[15] !== x
          ? ((r = "text" === x ? (0, n.jsx)(_.U, { destination: b, conversationId: v }) : null),
            (g[13] = v),
            (g[14] = b),
            (g[15] = x),
            (g[16] = r))
          : (r = g[16]),
        g[17] !== b || g[18] !== w || g[19] !== x
          ? ((l =
              "email" === x
                ? (0, n.jsxs)("div", {
                    className:
                      "flex h-10 min-w-0 items-center justify-between gap-2 overflow-hidden rounded-xl border border-default bg-primary-soft ps-3 pe-1",
                    role: "group",
                    "aria-label": w.formatMessage({
                      id: "restricted.aeon.contact.emailAddress.yourDot",
                      defaultMessage: "Your dot’s email address",
                      description:
                        "Accessible label for the copyable email address after setting up dot. Keep dot lowercase and untranslated.",
                    }),
                    children: [
                      (0, n.jsx)("span", {
                        className: "min-w-0 truncate text-sm text-default select-text",
                        title: b,
                        children: b,
                      }),
                      (0, n.jsx)(
                        h.i,
                        { buttonText: !0, showIcon: !1, renderButton: M, onCopy: (e) => (0, j.E)(b, e) },
                        b,
                      ),
                    ],
                  })
                : null),
            (g[17] = b),
            (g[18] = w),
            (g[19] = x),
            (g[20] = l))
          : (l = g[20]),
        g[21] !== b || g[22] !== C || g[23] !== x || g[24] !== k
          ? ((o =
              "text" !== x
                ? (0, n.jsx)("div", {
                    className: "flex gap-2",
                    children: (0, n.jsxs)(m.z, {
                      className: "flex-1",
                      href: "email" === x ? `mailto:${encodeURIComponent(b)}` : b,
                      target: "teams" === x ? "_blank" : void 0,
                      rel: "teams" === x ? "noopener noreferrer" : void 0,
                      color: "primary",
                      size: "detailAction",
                      "aria-describedby": C ? k : void 0,
                      onClick: (e) =>
                        (0, p.PQ)({
                          event: e,
                          href: "email" === x ? `mailto:${encodeURIComponent(b)}` : b,
                          initiator: "side_panel_menu",
                          openTarget: "slack" === x ? void 0 : "external-browser",
                        }),
                      children: [
                        "email" === x
                          ? (0, n.jsx)(u.A, {
                              id: "restricted.aeon.contact.openEmail",
                              defaultMessage: "Open Email",
                              description: "Opens the user's email app with the dot's address as the recipient",
                            })
                          : null,
                        "teams" === x
                          ? (0, n.jsx)(u.A, {
                              id: "restricted.aeon.contact.openTeams",
                              defaultMessage: "Open Teams",
                              description: "Opens the connected dot’s direct message in Microsoft Teams",
                            })
                          : null,
                        "slack" === x
                          ? (0, n.jsx)(u.A, {
                              id: "restricted.aeon.slack.setup.open",
                              defaultMessage: "Open Slack",
                              description: "Opens the connected dot's direct message in Slack",
                            })
                          : null,
                      ],
                    }),
                  })
                : null),
            (g[21] = b),
            (g[22] = C),
            (g[23] = x),
            (g[24] = k),
            (g[25] = o))
          : (o = g[25]),
        g[26] !== a || g[27] !== i || g[28] !== r || g[29] !== l || g[30] !== o
          ? ((f = (0, n.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-6", children: [a, i, r, l, o] })),
            (g[26] = a),
            (g[27] = i),
            (g[28] = r),
            (g[29] = l),
            (g[30] = o),
            (g[31] = f))
          : (f = g[31]),
        f
      )
    }
    function M(e) {
      return (0, n.jsx)(m.$, { ...e, color: "primary", radius: "full", size: "compact" })
    }
    function I(e) {
      let t,
        a,
        i = (0, s.c)(6),
        { id: r, recipient: l } = e,
        o = null != l
      return (
        i[0] !== l || i[1] !== o
          ? ((t = (0, n.jsx)(u.A, {
              id: "restricted.aeon.contact.channelRecipient.dot.productName",
              defaultMessage:
                "{hasRecipient, select, true {Message recipient: @{recipient}} other {Message recipient: your {dot}}}",
              description:
                "Screen reader description giving the public recipient for a Slack or Microsoft Teams contact action. dot is a common noun for the agent and must remain untranslated.",
              values: { recipient: l, hasRecipient: o, dot: "dot" },
            })),
            (i[0] = l),
            (i[1] = o),
            (i[2] = t))
          : (t = i[2]),
        i[3] !== r || i[4] !== t
          ? ((a = (0, n.jsx)("span", { id: r, className: "sr-only", children: t })), (i[3] = r), (i[4] = t), (i[5] = a))
          : (a = i[5]),
        a
      )
    }
    function P(e) {
      var t
      let a,
        c,
        m,
        h,
        p,
        j,
        S,
        _,
        N,
        M,
        I,
        P,
        T,
        R,
        U,
        B,
        E,
        z,
        L,
        D = (0, s.c)(41),
        { conversationId: O, method: q, recipient: F } = e,
        $ = (0, d.A)(),
        G = (0, o._U)(x.N, O),
        H = (0, o._U)(b.zQ, O),
        V = H ?? G,
        K = $.formatMessage(y.z),
        Q = null == V || (0, w.x)(V) || (null == H && V === K) ? "dot" : V,
        W = (0, o._U)(k.T, O)
      D[0] !== q || D[1] !== F
        ? ((a =
            "slack" === q || "teams" === q
              ? null == (t = F)
                ? (0, n.jsx)(u.A, {
                    id: "restricted.aeon.contact.unnamedChannelRecipient.productName",
                    defaultMessage: "your {dot}",
                    description:
                      "Default recipient in a Slack or Microsoft Teams preview before the public name is available. dot is a common noun for the agent and must remain untranslated.",
                    values: { dot: "dot" },
                  })
                : `@${t}`
              : F),
          (D[0] = q),
          (D[1] = F),
          (D[2] = a))
        : (a = D[2])
      let Y = a
      ;(D[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, l.A)(C.A.message, "border-default bg-surface shadow-sm")), (D[3] = c))
        : (c = D[3]),
        D[4] !== q
          ? ((m =
              "email" === q
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("span", { className: C.A.messageBrandIcon, children: (0, n.jsx)(f.I, { asset: i }) }),
                      (0, n.jsx)(u.A, {
                        id: "restricted.aeon.contact.preview.emailHeading",
                        defaultMessage: "Send email message",
                        description: "Heading of the miniature email composer in contact setup",
                      }),
                    ],
                  })
                : null),
            (D[4] = q),
            (D[5] = m))
          : (m = D[5]),
        D[6] !== q
          ? ((h =
              "slack" === q
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("span", {
                        className: C.A.messageBrandIcon,
                        children: (0, n.jsx)(f.I, { asset: r.l }),
                      }),
                      (0, n.jsx)(u.A, {
                        id: "restricted.aeon.contact.preview.slackHeading",
                        defaultMessage: "Send Slack message",
                        description: "Heading of the miniature Slack composer in contact setup",
                      }),
                    ],
                  })
                : null),
            (D[6] = q),
            (D[7] = h))
          : (h = D[7]),
        D[8] !== q
          ? ((p =
              "teams" === q
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("img", { src: v, alt: "", width: 12, height: 12 }),
                      (0, n.jsx)(u.A, {
                        id: "restricted.aeon.contact.preview.teamsHeading",
                        defaultMessage: "Send Teams message",
                        description: "Heading of the miniature Microsoft Teams composer in contact setup",
                      }),
                    ],
                  })
                : null),
            (D[8] = q),
            (D[9] = p))
          : (p = D[9]),
        D[10] !== m || D[11] !== h || D[12] !== p
          ? ((j = (0, n.jsxs)("div", { className: C.A.messageHeading, children: [m, h, p] })),
            (D[10] = m),
            (D[11] = h),
            (D[12] = p),
            (D[13] = j))
          : (j = D[13]),
        D[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, n.jsx)("span", {
              className: (0, l.A)(C.A.messageSend, "shrink-0 rounded-full bg-primary-solid text-primary-solid"),
              children: (0, n.jsx)(u.A, {
                id: "restricted.aeon.contact.preview.sendMessage",
                defaultMessage: "Send message",
                description:
                  "Decorative send label in the miniature email, Slack, or Teams composer; it is not a real action",
              }),
            })),
            (D[14] = S))
          : (S = D[14]),
        D[15] !== j
          ? ((_ = (0, n.jsxs)("div", { className: C.A.messageHeader, children: [j, S] })), (D[15] = j), (D[16] = _))
          : (_ = D[16]),
        D[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, l.A)(C.A.messageRecipients, "text-tertiary")),
            (N = (0, n.jsx)(u.A, {
              id: "restricted.aeon.contact.preview.to",
              defaultMessage: "To",
              description: "Recipient label in a decorative email, Slack, or Microsoft Teams message preview",
            })),
            (M = (0, l.A)(C.A.messageRecipient, "rounded-full border-default")),
            (D[17] = N),
            (D[18] = M),
            (D[19] = I))
          : ((N = D[17]), (M = D[18]), (I = D[19])))
      let Z = W?.avatar ?? null
      return (
        D[20] !== O || D[21] !== Z
          ? ((P = (0, n.jsx)(A.Xm, { className: C.A.messageAvatar, avatar: Z, identity: O })),
            (D[20] = O),
            (D[21] = Z),
            (D[22] = P))
          : (P = D[22]),
        D[23] !== Y
          ? ((T = (0, n.jsx)("span", { className: "truncate text-default", children: Y })), (D[23] = Y), (D[24] = T))
          : (T = D[24]),
        D[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, n.jsx)("span", { className: C.A.messageRemove, children: (0, n.jsx)(g.Gmf, {}) })), (D[25] = R))
          : (R = D[25]),
        D[26] !== P || D[27] !== T
          ? ((U = (0, n.jsxs)("span", { className: M, children: [P, T, R] })), (D[26] = P), (D[27] = T), (D[28] = U))
          : (U = D[28]),
        D[29] !== q
          ? ((B =
              "email" === q
                ? (0, n.jsx)("span", {
                    className: "ms-auto shrink-0",
                    children: (0, n.jsx)(u.A, {
                      id: "restricted.aeon.contact.preview.emailRecipients",
                      defaultMessage: "Cc Bcc",
                      description: "Decorative carbon-copy and blind-carbon-copy labels in a miniature email composer",
                    }),
                  })
                : null),
            (D[29] = q),
            (D[30] = B))
          : (B = D[30]),
        D[31] !== U || D[32] !== B
          ? ((E = (0, n.jsxs)("div", { className: I, children: [N, U, B] })), (D[31] = U), (D[32] = B), (D[33] = E))
          : (E = D[33]),
        D[34] !== Q || D[35] !== q
          ? ((z =
              "email" === q
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("p", {
                        className: C.A.messageSubject,
                        children: (0, n.jsx)(u.A, {
                          id: "restricted.aeon.contact.preview.emailSubject",
                          defaultMessage: "Help me prep for tomorrow’s meeting",
                          description: "Example subject in the decorative email composer in contact setup",
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: (0, l.A)(C.A.messageBody, C.A.emailBody),
                        children: [
                          (0, n.jsx)("p", {
                            children: (0, n.jsx)(u.A, {
                              id: "restricted.aeon.contact.preview.emailGreeting",
                              defaultMessage: "Hey {name},",
                              description:
                                "Example greeting in the decorative email composer; name is the assistant’s private nickname or the lowercase term dot",
                              values: { name: Q },
                            }),
                          }),
                          (0, n.jsx)("p", {
                            children: (0, n.jsx)(u.A, {
                              id: "restricted.aeon.contact.preview.emailSummaryRequest",
                              defaultMessage:
                                "Can you summarize this thread and list the decisions we need to make tomorrow?",
                              description:
                                "Fictional request in the miniature email composer in contact setup; no email is sent",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, n.jsx)("p", {
                    className: (0, l.A)(C.A.messageBody, C.A.slackBody),
                    children: (0, n.jsx)(u.A, {
                      id: "restricted.aeon.contact.preview.slackBody",
                      defaultMessage:
                        "Let’s move our meeting to Wednesday so I can join after the design onsite. Happy to find another time that works for you!",
                      description:
                        "Fictional request in the miniature Slack or Teams composer in contact setup; no message is sent",
                    }),
                  })),
            (D[34] = Q),
            (D[35] = q),
            (D[36] = z))
          : (z = D[36]),
        D[37] !== E || D[38] !== z || D[39] !== _
          ? ((L = (0, n.jsx)("div", {
              className:
                "h-55.5 min-w-0 shrink-0 overflow-hidden rounded-2xl bg-text/5 px-6 text-start select-none @max-xs/contact-setup:h-88",
              "aria-hidden": !0,
              inert: !0,
              children: (0, n.jsx)("div", {
                className: "flex h-full min-w-0 items-center justify-center",
                children: (0, n.jsxs)("div", { className: c, children: [_, E, z] }),
              }),
            })),
            (D[37] = E),
            (D[38] = z),
            (D[39] = _),
            (D[40] = L))
          : (L = D[40]),
        L
      )
    }
  },
  QdY6(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("JNtf"),
      r = a("mUDD")
    a.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            a,
            l,
            o,
            c,
            d,
            u = (0, s.c)(16),
            { title: m, children: h, hasDescription: p, onClose: f, onCloseAutoFocus: g } = e,
            v = void 0 !== p && p
          return (
            u[0] !== v ? ((t = v ? {} : { "aria-describedby": void 0 }), (u[0] = v), (u[1] = t)) : (t = u[1]),
            u[2] !== g || u[3] !== t
              ? ((a = { asChild: !0, shouldStopPointerDownPropagation: !1, ...t, onCloseAutoFocus: g }),
                (u[2] = g),
                (u[3] = t),
                (u[4] = a))
              : (a = u[4]),
            u[5] !== f
              ? ((l = (e) => {
                  e || f()
                }),
                (u[5] = f),
                (u[6] = l))
              : (l = u[6]),
            u[7] !== m
              ? ((o = (0, n.jsx)(r.c7, { titleSize: "lg", title: (0, n.jsx)(i.L3, { children: m }) })),
                (u[7] = m),
                (u[8] = o))
              : (o = u[8]),
            u[9] !== h || u[10] !== o
              ? ((c = (0, n.jsxs)("div", {
                  className:
                    "@container/contact-setup flex flex-col gap-6 px-6 py-5 text-center text-base leading-normal tracking-normal",
                  children: [o, h],
                })),
                (u[9] = h),
                (u[10] = o),
                (u[11] = c))
              : (c = u[11]),
            u[12] !== a || u[13] !== l || u[14] !== c
              ? ((d = (0, n.jsx)(i.lG, {
                  open: !0,
                  variant: "opaque",
                  widthHint: 440,
                  contentPosition: "scrollable",
                  contentProps: a,
                  onOpenChange: l,
                  children: c,
                })),
                (u[12] = a),
                (u[13] = l),
                (u[14] = c),
                (u[15] = d))
              : (d = u[15]),
            d
          )
        },
      },
    )
  },
  nf1S(e, t, a) {
    a.d(t, { mz: () => u, MV: () => m, kQ: () => d })
    var n = a("ABep"),
      s = a("QosV")
    let i = (0, a("iJY0").a)({
      name: "circle-exclamationmark-regular-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 2.75, y: 2.75, width: 26.5, height: 26.5 },
        visualBounds: { x: 2.75, y: 2.75, width: 26.5, height: 26.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 2.75, y: 2.75, width: 26.5, height: 26.5 },
        center: { x: 16, y: 16 },
        insets: { top: 2.75, right: 2.75, bottom: 2.75, left: 2.75 },
        anchors: { frame: { x: 16, y: 16 }, ink: { x: 16, y: 16 }, foreground: { x: 16, y: 16 } },
      },
      capabilities: ["icon"],
      body: '<path d="M17.7891 20.5755C17.7891 21.5887 16.9677 22.41 15.9546 22.41C14.9414 22.41 14.1201 21.5887 14.1201 20.5755C14.1201 19.5623 14.9414 18.741 15.9546 18.741C16.9677 18.741 17.7891 19.5623 17.7891 20.5755Z" fill="currentColor"/> <path d="M26.75 16C26.75 10.0629 21.9371 5.25 16 5.25C10.0629 5.25 5.25 10.0629 5.25 16C5.25 21.9371 10.0629 26.75 16 26.75C21.9371 26.75 26.75 21.9371 26.75 16ZM29.25 16C29.25 23.3178 23.3178 29.25 16 29.25C8.68223 29.25 2.75 23.3178 2.75 16C2.75 8.68223 8.68223 2.75 16 2.75C23.3178 2.75 29.25 8.68223 29.25 16Z" fill="currentColor"/> <path d="M14.7043 15.8403V10.1733C14.7043 9.48298 15.264 8.92334 15.9543 8.92334C16.6447 8.92334 17.2043 9.48298 17.2043 10.1733V15.8403C17.2042 16.5305 16.6446 17.0903 15.9543 17.0903C15.2641 17.0903 14.7045 16.5305 14.7043 15.8403Z" fill="currentColor"/>',
    })
    var r = a("oyxz"),
      l = a("Sm6l"),
      o = a("HOLv"),
      c = a("DcH0")
    function d(e) {
      let t,
        a,
        i,
        r,
        l,
        o = (0, s.c)(12),
        { children: c, description: d, disclaimer: u } = e
      return (
        o[0] !== c
          ? ((t = (0, n.jsx)("div", {
              className: "flex min-w-0 flex-1 flex-col items-center justify-center gap-2",
              children: c,
            })),
            (o[0] = c),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== d
          ? ((a = null != d ? (0, n.jsx)("div", { className: "shrink-0", children: d }) : null), (o[2] = d), (o[3] = a))
          : (a = o[3]),
        o[4] !== t || o[5] !== a
          ? ((i = (0, n.jsxs)("div", {
              className:
                "flex min-h-55.5 min-w-0 flex-1 flex-col gap-3 rounded-2xl bg-text/5 px-6 py-5 @max-xs/contact-setup:min-h-88",
              children: [t, a],
            })),
            (o[4] = t),
            (o[5] = a),
            (o[6] = i))
          : (i = o[6]),
        o[7] !== u
          ? ((r = null != u ? (0, n.jsx)("div", { className: "shrink-0", children: u }) : null), (o[7] = u), (o[8] = r))
          : (r = o[8]),
        o[9] !== i || o[10] !== r
          ? ((l = (0, n.jsxs)("div", {
              className: "flex w-full min-w-0 flex-1 flex-col gap-3 text-center",
              children: [i, r],
            })),
            (o[9] = i),
            (o[10] = r),
            (o[11] = l))
          : (l = o[11]),
        l
      )
    }
    function u({
      title: e,
      description: t,
      icon: a = (0, n.jsx)(o.I, { asset: i, className: "text-secondary" }),
      titleAs: s = "h3",
      role: r,
    }) {
      return (0, n.jsxs)(d, {
        description: null,
        children: [
          a,
          (0, n.jsxs)("div", {
            className: "flex flex-col gap-3 select-none",
            children: [
              (0, n.jsx)(s, { className: "text-base font-semibold", children: e }),
              (0, n.jsx)("div", { className: "px-6 text-sm text-secondary", role: r, children: t }),
            ],
          }),
        ],
      })
    }
    function m() {
      let e,
        t,
        a,
        i = (0, s.c)(3)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c._, {
              className: "mx-auto h-3 w-48 max-w-full rounded",
              variant: "prominent",
              "aria-hidden": !0,
            })),
            (i[0] = e))
          : (e = i[0]),
        i[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(d, {
              description: e,
              children: (0, n.jsxs)("div", {
                className: "flex w-full flex-col items-center gap-3",
                "aria-hidden": !0,
                children: [
                  (0, n.jsx)(c._, { className: "h-7 w-32 max-w-full rounded-md", variant: "prominent" }),
                  (0, n.jsx)(c._, { className: "h-4 w-24 max-w-full rounded", variant: "prominent" }),
                ],
              }),
            })),
            (i[1] = t))
          : (t = i[1]),
        i[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsxs)("div", {
              className: "flex flex-1 flex-col gap-6",
              role: "status",
              children: [
                t,
                (0, n.jsx)(l.$, {
                  color: "primary",
                  size: "detailAction",
                  loading: !0,
                  disabled: !0,
                  children: (0, n.jsx)(r.A, {
                    id: "restricted.aeon.contact.loading",
                    defaultMessage: "Loading…",
                    description: "Status and disabled action while the selected contact channel loads",
                  }),
                }),
              ],
            })),
            (i[2] = a))
          : (a = i[2]),
        a
      )
    }
  },
  PI8O(e, t, a) {
    a.d(t, { U: () => C, S: () => _ })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("taIy"),
      r = a("zTeN"),
      l = a("Wf1j"),
      o = a("oyxz"),
      c = a("Sm6l"),
      d = a("uuN8"),
      u = a("Ot7V"),
      m = a("bVeK"),
      h = a("XYHU"),
      p = a("q3j5"),
      f = a("gdZA"),
      g = a("aepO"),
      v = a("FPUb"),
      x = a("Yn57"),
      b = a("taWv"),
      y = a("AO3k"),
      j = a("tLM7"),
      A = a("zHp1")
    let w = (0, b.Qt)()
    function k(e) {
      let t,
        a,
        i,
        l = (0, s.c)(19),
        { value: o, ariaLabel: c, conversationId: d } = e,
        u = (0, r._U)(null == d ? null : j.i1, d),
        m = u?.kind === "snapshot" && null == u.inlineSrc
      l[0] !== m ? ((t = { enabled: m }), (l[0] = m), (l[1] = t)) : (t = l[1])
      let { src: h } = (0, A.vM)(u?.kind === "snapshot" ? u.assetPointer : "", w, t)
      if (u?.kind === "image") {
        let e,
          t = u.src === x
        ;(l[2] !== u.src || l[3] !== t
          ? ((e = { src: u.src, fillSilhouette: t }), (l[2] = u.src), (l[3] = t), (l[4] = e))
          : (e = l[4]),
          (a = e))
      } else if (u?.kind === "snapshot") {
        let e,
          t = u.inlineSrc ?? h ?? u.fallbackSrc,
          n = t === x
        ;(l[5] !== t || l[6] !== n
          ? ((e = { src: t, fillSilhouette: n }), (l[5] = t), (l[6] = n), (l[7] = e))
          : (e = l[7]),
          (a = e))
      } else if (u?.kind === "pet") {
        let e, t, n
        l[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, v._s)("idle", !0)), (l[8] = e)) : (e = l[8])
        let s = e.frames[0],
          i = v.Pq.columns,
          r = u.spriteRowCount ?? v.Pq.rows,
          o = s.rowIndex / r,
          c = 1 / r
        ;(l[9] !== o || l[10] !== c
          ? ((t = { x: s.columnIndex / i, y: o, width: 1 / i, height: c }), (l[9] = o), (l[10] = c), (l[11] = t))
          : (t = l[11]),
          l[12] !== u.spritesheetUrl || l[13] !== t
            ? ((n = { src: u.spritesheetUrl, crop: t }), (l[12] = u.spritesheetUrl), (l[13] = t), (l[14] = n))
            : (n = l[14]),
          (a = n))
      }
      return (
        l[15] !== c || l[16] !== a || l[17] !== o
          ? ((i = (0, n.jsx)(y.v, { value: o, ariaLabel: c, size: "compact", portrait: a, fallback: null })),
            (l[15] = c),
            (l[16] = a),
            (l[17] = o),
            (l[18] = i))
          : (i = l[18]),
        i
      )
    }
    function S(e, t, a, n) {
      let s = null == a || (0, p.x)(a) ? "dot" : a.trim(),
        i = e.formatMessage(
          {
            id: "restricted.aeon.messaging.greeting.withoutSender",
            defaultMessage: "Hey {name}!",
            description:
              "Editable text-message draft greeting the user's dot. name is the dot's custom name, or the lowercase untranslated product name dot. No message is sent automatically.",
          },
          { name: s },
        )
      return `sms:${t}${"messages" === n ? "&" : "?&"}body=${encodeURIComponent(i)}`
    }
    function _(e) {
      let t,
        a,
        c,
        u,
        h,
        v,
        x,
        b,
        y,
        j,
        A,
        w,
        _,
        C,
        N,
        M,
        I = (0, s.c)(38),
        { destination: P, orbitName: T, conversationId: R } = e,
        U = (0, l.A)(),
        B = (0, r._U)(f.zQ, R)
      if (I[0] !== R || I[1] !== P || I[2] !== U || I[3] !== T || I[4] !== B) {
        let e = (T ?? B)?.trim(),
          s = (0, i.l)(P),
          r = S(U, P, e, "qr")
        ;((A = "flex min-w-0 flex-col items-center gap-3"),
          (c = (0, n.jsx)(k, {
            value: r,
            ariaLabel: U.formatMessage(
              {
                id: "restricted.aeon.messaging.textQrCode.label.withName",
                defaultMessage: "QR code to text {hasName, select, true {{name}} other {your {dot}}}",
                description:
                  "Accessible label for a QR code that opens a draft addressed to the user's agent without sending it. hasName is true when name is the user's chosen agent name, which must stay untranslated. Otherwise, dot is the untranslated product term for the agent.",
              },
              { name: e, hasName: !(0, p.x)(e), dot: "dot" },
            ),
            conversationId: R,
          })),
          (j = "text-sm text-secondary select-none"),
          (t = o.A),
          (x = "restricted.aeon.messaging.textQrCode.scanToText.withName"),
          (b =
            "Scan the QR code to text {hasName, select, true {{name}} other {your {dot}}} at <number>{phoneNumber}</number>"),
          (y =
            "Instruction to scan a QR code to text the user's agent. hasName is true when name is the user's chosen agent name, which must stay untranslated. Otherwise, dot is the untranslated product term. phoneNumber is the agent's destination number, not the user's verified phone number. The number tag masks it in session recordings."),
          (a = e),
          (u = !(0, p.x)(e)),
          (h = "dot"),
          (v = s?.countryCallingCode === "1" ? `+1 ${s.formatNational()}` : (s?.formatInternational() ?? P)),
          (I[0] = R),
          (I[1] = P),
          (I[2] = U),
          (I[3] = T),
          (I[4] = B),
          (I[5] = t),
          (I[6] = a),
          (I[7] = c),
          (I[8] = u),
          (I[9] = h),
          (I[10] = v),
          (I[11] = x),
          (I[12] = b),
          (I[13] = y),
          (I[14] = j),
          (I[15] = A))
      } else
        ((t = I[5]),
          (a = I[6]),
          (c = I[7]),
          (u = I[8]),
          (h = I[9]),
          (v = I[10]),
          (x = I[11]),
          (b = I[12]),
          (y = I[13]),
          (j = I[14]),
          (A = I[15]))
      return (
        I[16] !== P || I[17] !== U
          ? ((w = (e) =>
              (0, n.jsxs)(
                "span",
                {
                  className: "inline-flex items-center gap-1",
                  "data-dd-privacy": "mask",
                  children: [
                    e,
                    (0, n.jsx)(d.i, {
                      variant: "inline",
                      iconOnly: !0,
                      ariaLabel: U.formatMessage({
                        id: "restricted.aeon.messaging.textQrCode.copyPhoneNumber",
                        defaultMessage: "Copy phone number",
                        description:
                          "Accessible label for the icon button beside the dot's phone number that copies it to the clipboard",
                      }),
                      icons: { copy: (0, n.jsx)(m.R3B, {}), copied: (0, n.jsx)(m.ALZ, {}) },
                      onCopy: (e) => (0, g.E)(P, e),
                    }),
                  ],
                },
                "phone-number",
              )),
            (I[16] = P),
            (I[17] = U),
            (I[18] = w))
          : (w = I[18]),
        I[19] !== a || I[20] !== w || I[21] !== u || I[22] !== h || I[23] !== v
          ? ((_ = { name: a, hasName: u, dot: h, phoneNumber: v, number: w }),
            (I[19] = a),
            (I[20] = w),
            (I[21] = u),
            (I[22] = h),
            (I[23] = v),
            (I[24] = _))
          : (_ = I[24]),
        I[25] !== t || I[26] !== _ || I[27] !== x || I[28] !== b || I[29] !== y
          ? ((C = (0, n.jsx)(t, { id: x, defaultMessage: b, description: y, values: _ })),
            (I[25] = t),
            (I[26] = _),
            (I[27] = x),
            (I[28] = b),
            (I[29] = y),
            (I[30] = C))
          : (C = I[30]),
        I[31] !== C || I[32] !== j
          ? ((N = (0, n.jsx)("p", { className: j, children: C })), (I[31] = C), (I[32] = j), (I[33] = N))
          : (N = I[33]),
        I[34] !== c || I[35] !== N || I[36] !== A
          ? ((M = (0, n.jsxs)("div", { className: A, children: [c, N] })),
            (I[34] = c),
            (I[35] = N),
            (I[36] = A),
            (I[37] = M))
          : (M = I[37]),
        M
      )
    }
    function C(e) {
      let t,
        a,
        i = (0, s.c)(8),
        { destination: r, orbitName: l, conversationId: o, size: c, children: d } = e,
        u = void 0 === c ? "detailAction" : c
      return (
        i[0] !== o || i[1] !== r || i[2] !== l || i[3] !== u
          ? ((t = (0, n.jsx)("div", {
              className: "flex gap-2",
              children: (0, n.jsx)(N, { destination: r, orbitName: l, conversationId: o, size: u }),
            })),
            (i[0] = o),
            (i[1] = r),
            (i[2] = l),
            (i[3] = u),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== d || i[6] !== t
          ? ((a = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-3", children: [t, d] })),
            (i[5] = d),
            (i[6] = t),
            (i[7] = a))
          : (a = i[7]),
        a
      )
    }
    function N(e) {
      let t,
        a,
        i,
        d,
        m = (0, s.c)(17),
        { destination: p, orbitName: v, conversationId: x, size: b } = e,
        y = void 0 === b ? "detailAction" : b,
        j = (0, l.A)(),
        A = (0, r._U)(f.zQ, x),
        w = v ?? A
      m[0] !== p || m[1] !== j || m[2] !== w
        ? ((t = S(j, p, w, "messages")), (m[0] = p), (m[1] = j), (m[2] = w), (m[3] = t))
        : (t = m[3])
      let k = t
      if ("macOS" !== (0, h.tR)()) {
        let e, t, a
        return (
          m[4] !== p ? ((e = (e) => void (0, g.E)(p, e)), (m[4] = p), (m[5] = e)) : (e = m[5]),
          m[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(o.A, {
                id: "restricted.aeon.messaging.textQrCode.copyNumber",
                defaultMessage: "Copy number",
                description: "Copies the dot's destination phone number so the user can text it from their phone",
              })),
              (m[6] = t))
            : (t = m[6]),
          m[7] !== y || m[8] !== e
            ? ((a = (0, n.jsx)(c.$, {
                className: "flex-1",
                color: "primary",
                size: y,
                type: "button",
                onClick: e,
                children: t,
              })),
              (m[7] = y),
              (m[8] = e),
              (m[9] = a))
            : (a = m[9]),
          a
        )
      }
      return (
        m[10] !== k
          ? ((a = (e) => (0, u.PQ)({ event: e, href: k, initiator: "side_panel_menu" })), (m[10] = k), (m[11] = a))
          : (a = m[11]),
        m[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(o.A, {
              id: "restricted.aeon.messaging.success.openMessages",
              defaultMessage: "Open Messages",
              description: "Opens Messages on Mac with the dot's destination phone number prefilled as the recipient",
            })),
            (m[12] = i))
          : (i = m[12]),
        m[13] !== k || m[14] !== y || m[15] !== a
          ? ((d = (0, n.jsx)(c.z, {
              className: "flex-1",
              href: k,
              color: "primary",
              size: y,
              onClick: a,
              children: i,
            })),
            (m[13] = k),
            (m[14] = y),
            (m[15] = a),
            (m[16] = d))
          : (d = m[16]),
        d
      )
    }
  },
  IIZn(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("HWx4")
    a.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            a = (0, s.c)(4),
            { children: r, mode: l, variant: o } = e
          return (
            a[0] !== r || a[1] !== l || a[2] !== o
              ? ((t =
                  "content" === l
                    ? (0, n.jsx)("span", {
                        className: "me-2 flex w-5 shrink-0 items-center justify-start",
                        children: r,
                      })
                    : (0, n.jsx)(i.x.ItemLeading, { variant: o, children: r })),
                (a[0] = r),
                (a[1] = l),
                (a[2] = o),
                (a[3] = t))
              : (t = a[3]),
            t
          )
        },
      },
    )
  },
  G0lj(e, t, a) {
    let n = (0, a("iJY0").a)({
      name: "slack-color-regular-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.5, y: 1.5, width: 13, height: 13 },
        visualBounds: { x: 1.5, y: 1.5, width: 13, height: 13 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          {
            role: "fixed",
            color: "#E01E5A",
            bounds: { x: 1.51001, y: 8.351807, width: 6.143066, height: 6.148193 },
            wideGamut: "color(display-p3 0.8784 0.1176 0.3529)",
          },
          {
            role: "fixed",
            color: "#36C5F0",
            bounds: { x: 1.5, y: 1.5, width: 6.153564, height: 6.158447 },
            wideGamut: "color(display-p3 0.2118 0.7725 0.9412)",
          },
          {
            role: "fixed",
            color: "#2EB67D",
            bounds: { x: 8.346436, y: 1.5, width: 6.143066, height: 6.158447 },
            wideGamut: "color(display-p3 0.1804 0.7137 0.4902)",
          },
          {
            role: "fixed",
            color: "#ECB22E",
            bounds: { x: 8.346436, y: 8.351807, width: 6.153564, height: 6.148193 },
            wideGamut: "color(display-p3 0.9255 0.6980 0.1804)",
          },
        ],
      },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.5, y: 1.5, width: 13, height: 13 },
        center: { x: 8, y: 8 },
        insets: { top: 1.5, right: 1.5, bottom: 1.5, left: 1.5 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M4.24055 9.71806C4.24055 10.4736 3.63037 11.0843 2.8754 11.0843C2.12043 11.0843 1.51025 10.4736 1.51025 9.71806C1.51025 8.96248 2.12043 8.35181 2.8754 8.35181H4.24055V9.71806ZM4.92312 9.71806C4.92312 8.96248 5.5333 8.35181 6.28827 8.35181C7.04323 8.35181 7.65341 8.96248 7.65341 9.71806V13.1337C7.65341 13.8893 7.04323 14.4999 6.28827 14.4999C5.5333 14.4999 4.92312 13.8893 4.92312 13.1337V9.71806Z" fill="#E01E5A"/> <path d="M6.28835 4.2325C5.53339 4.2325 4.92321 3.62183 4.92321 2.86625C4.92321 2.11067 5.53339 1.5 6.28835 1.5C7.04332 1.5 7.6535 2.11067 7.6535 2.86625V4.2325H6.28835ZM6.28835 4.92597C7.04332 4.92597 7.6535 5.53665 7.6535 6.29222C7.6535 7.0478 7.04332 7.65847 6.28835 7.65847H2.86515C2.11018 7.65847 1.5 7.0478 1.5 6.29222C1.5 5.53665 2.11018 4.92597 2.86515 4.92597H6.28835Z" fill="#36C5F0"/> <path d="M11.7591 6.29222C11.7591 5.53665 12.3692 4.92597 13.1242 4.92597C13.8792 4.92597 14.4893 5.53665 14.4893 6.29222C14.4893 7.0478 13.8792 7.65847 13.1242 7.65847H11.7591V6.29222ZM11.0765 6.29222C11.0765 7.0478 10.4663 7.65847 9.71134 7.65847C8.95637 7.65847 8.34619 7.0478 8.34619 6.29222V2.86625C8.34619 2.11067 8.95637 1.5 9.71134 1.5C10.4663 1.5 11.0765 2.11067 11.0765 2.86625V6.29222Z" fill="#2EB67D"/> <path d="M9.71134 11.7674C10.4663 11.7674 11.0765 12.3781 11.0765 13.1337C11.0765 13.8893 10.4663 14.4999 9.71134 14.4999C8.95637 14.4999 8.34619 13.8893 8.34619 13.1337V11.7674H9.71134ZM9.71134 11.0843C8.95637 11.0843 8.34619 10.4736 8.34619 9.71806C8.34619 8.96248 8.95637 8.35181 9.71134 8.35181H13.1345C13.8895 8.35181 14.4997 8.96248 14.4997 9.71806C14.4997 10.4736 13.8895 11.0843 13.1345 11.0843H9.71134Z" fill="#ECB22E"/>',
    })
    a.d(t, {}, { l: n })
  },
  taIy(e, t, a) {
    var n = a("iiho"),
      s = a("UQVW")
    a.d(
      t,
      {},
      {
        l: function () {
          return (0, n.A)(s.A, arguments)
        },
      },
    )
  },
}
//# sourceMappingURL=920910.6a8a375151.js.map
