export const __rspack_esm_ids = [920910]
export const __webpack_modules__ = {
  Yn5w(e, t) {
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
  MQ9r(e, t) {
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
      i = a("Yn5w")
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
          let _ = () => {
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
            k.finished.then(_, _))
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
      v = a("BeiX"),
      x = a("T0Rc"),
      b = a("on57"),
      y = a("zd8w"),
      j = a("oyxz"),
      A = a("E8Sp"),
      w = a("Ghh3"),
      k = a("ygO2"),
      _ = a("JNtf"),
      S = a("mUDD"),
      C = a("HOLv"),
      M = a("zLIa"),
      N = a("T1PX"),
      I = a("lBcl"),
      T = a("H3bB"),
      P = a("hTGv"),
      R = a("e7sX"),
      U = a("SPXR"),
      B = a("X4uh"),
      E = a("oz6U"),
      z = a("jTFC"),
      O = a("IIBl"),
      L = a("jPCa"),
      D = a("z8vb"),
      q = a("MVXB"),
      F = a("Qgfj"),
      G = a("avF5")
    let $ = (0, F.YK)({
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
              icon: (0, n.jsx)(z.X, { className: p ? "size-full p-1" : "size-full", avatar: e }),
              label: g
                ? v.formatMessage(
                    {
                      id: "restricted.aeonAppearancePicker.legacyAvatar",
                      defaultMessage: "Use avatar {number}",
                      description: "Accessible label for choosing a numbered abstract avatar for a legacy agent",
                    },
                    { number: t + 1 },
                  )
                : v.formatMessage($[e]),
            }))),
            (l[2] = p),
            (l[3] = v),
            (l[4] = g),
            (l[5] = a))
          : (a = l[5]))
      let x = "pet" === c ? null : c
      return (
        l[6] !== o || l[7] !== p || l[8] !== f || l[9] !== d || l[10] !== t || l[11] !== a || l[12] !== x
          ? ((i = (0, n.jsx)(G.f, {
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
      Q = a("TMjP"),
      K = a("liTb"),
      W = a("Yn5w")
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
        G,
        $,
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
        eA,
        ew = (0, s.c)(227),
        {
          ref: ek,
          appearance: e_,
          name: eS,
          namePending: eC,
          identity: eM,
          petId: eN,
          orbitId: eI,
          characterConversationId: eT,
          onSave: eP,
          variant: eR,
          disabled: eU,
          readOnly: eB,
          readOnlyName: eE,
          onClose: ez,
          defaultOpen: eO,
          triggerContent: eL,
          onCloseAutoFocus: eD,
          onTrigger: eq,
        } = e,
        eF = void 0 === eM ? "orbit-draft" : eM,
        eG = void 0 === eR ? "toolbar" : eR,
        e$ = void 0 !== eU && eU,
        eH = void 0 !== eB && eB,
        eV = void 0 !== eE && eE,
        eQ = void 0 !== eO && eO,
        eK = (0, i.gh)(h.u),
        eW = (0, y.useContext)(U.Zt),
        eY = null == eW ? P.Oz : P.iE,
        eZ = (0, r.A)(),
        eX = (0, y.useId)(),
        eJ = (0, y.useId)(),
        e1 = null == eS || (0, V.x)(eS) ? "dot" : eS
      ew[0] !== e_ || ew[1] !== eQ || ew[2] !== ez
        ? ((t = () => (eQ || null != ez ? { appearance: e_, name: null } : null)),
          (ew[0] = e_),
          (ew[1] = eQ),
          (ew[2] = ez),
          (ew[3] = t))
        : (t = ew[3])
      let [e0, e2] = (0, y.useState)(t),
        e3 = e0?.name ?? e1,
        [e5, e4] = (0, y.useState)(!1),
        [e6, e8] = (0, y.useState)(null),
        [e7, e9] = (0, y.useState)(!1),
        [te, tt] = (0, y.useState)(!1),
        ta = (0, i.Ul)(c.chatGptAuthenticatedAccountId$),
        tn = (0, i.Ul)(c.chatGptAuthenticatedUserId$),
        ts = null == eI ? 24 : 16
      ew[4] !== e3 || ew[5] !== ts
        ? ((a = (l = e3.trim()).length > 0 && Array.from(l).length <= ts && !l.includes("\\")),
          (ew[4] = e3),
          (ew[5] = ts),
          (ew[6] = a),
          (ew[7] = l))
        : ((a = ew[6]), (l = ew[7]))
      let ti = a,
        tr = null != eI && !eV && l !== e1,
        tl = null != e0 && !e$ && !eH && tr && ti && !te
      ;(ew[8] !== ta || ew[9] !== eI || ew[10] !== l || ew[11] !== tn
        ? ((o = ["cloud-aeon-name-moderation", ta, tn, eI, l]),
          (ew[8] = ta),
          (ew[9] = eI),
          (ew[10] = l),
          (ew[11] = tn),
          (ew[12] = o))
        : (o = ew[12]),
        ew[13] !== ta || ew[14] !== l || ew[15] !== tn
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
              })(l, ta, tn, t)
            }),
            (ew[13] = ta),
            (ew[14] = l),
            (ew[15] = tn),
            (ew[16] = d))
          : (d = ew[16]),
        ew[17] !== tl || ew[18] !== o || ew[19] !== d
          ? ((u = {
              queryKey: o,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              staleTime: 0,
              enabled: tl,
              subscribed: tl,
              queryFn: d,
            }),
            (ew[17] = tl),
            (ew[18] = o),
            (ew[19] = d),
            (ew[20] = u))
          : (u = ew[20]))
      let { data: to, error: tc, isFetching: td } = (0, x.I)(u, eK.queryClient)
      ew[21] !== tc || ew[22] !== td || ew[23] !== e6
        ? ((m = "name" === e6 || (!td && (0, O.ym)(tc))), (ew[21] = tc), (ew[22] = td), (ew[23] = e6), (ew[24] = m))
        : (m = ew[24])
      let tu = m,
        tm = !tu && (!tr || (ti && !te && !td && (to === l || null != tc)))
      ew[25] !== e3 || ew[26] !== eI || ew[27] !== e6 || ew[28] !== l
        ? ((p = (e, t) => {
            let a = e.replace(/[\r\n]/g, ""),
              n = null == eI ? a : ee(a),
              s = null == eI ? l : ee(e3).trim(),
              i = t ? a : n
            ;(e2((e) => (null == e ? null : { ...e, name: i })),
              e9(null != eI && i.includes("\\")),
              ("name" !== e6 || n.trim() !== s) && e8(null))
          }),
          (ew[25] = e3),
          (ew[26] = eI),
          (ew[27] = e6),
          (ew[28] = l),
          (ew[29] = p))
        : (p = ew[29])
      let th = p,
        tp = (0, y.useRef)(null),
        tf = (0, y.useRef)(null),
        tg = (0, y.useRef)(null),
        tv = (0, y.useRef)(null),
        tx = (0, y.useRef)(null),
        tb = (0, y.useRef)(!1),
        ty = (0, N.I)(),
        tj = null == eW
      ew[30] !== tj ? ((f = { afterAnimation: tj }), (ew[30] = tj), (ew[31] = f)) : (f = ew[31])
      let tA = (0, I.E)(f),
        [tw, tk] = (0, y.useState)(!1),
        t_ = (0, i._U)("orbit-draft" !== eF && Q.r, eF),
        tS = null != eT && !t_,
        tC = (0, i._U)(e0?.appearance?.avatar === "pet" && null == eN ? L.Tr : null, eT ?? eF),
        tM = (0, i._U)(e_?.avatar === "pet" || e0?.appearance?.avatar === "pet" ? L.Gn : null, eN),
        tN = null == eN ? tC?.pet : tM,
        tI = e0?.pet === void 0 ? tN : e0.pet,
        tT = e_?.avatar === "pet" ? tM : null,
        tP = e_?.avatar === "pet" && null != eN ? null : (e_?.avatar ?? null),
        tR = e0?.appearance?.avatar === "pet" ? tI : null,
        tU = e0?.appearance?.avatar === "pet" && null != eN ? null : (e0?.appearance?.avatar ?? null),
        tB = e0?.pet === void 0 && e0?.appearance?.avatar === "pet" && e_?.avatar === "pet",
        tE = !(void 0 !== eC && eC) && tm && (!tS || tB || (e0?.appearance?.avatar === "pet" ? null != tI : tw)),
        tz = "profile" === eG || "hero" === eG,
        tO = "name" === eG || "compact-name" === eG
      ew[32] !== eF || ew[33] !== tP || ew[34] !== tT
        ? ((g =
            null != tT
              ? (0, n.jsx)(B.s, { pet: tT })
              : (0, n.jsx)(z.X, { className: "size-full", avatar: tP, identity: eF, animated: !1 })),
          (ew[32] = eF),
          (ew[33] = tP),
          (ew[34] = tT),
          (ew[35] = g))
        : (g = ew[35])
      let tL = g
      ;((e$ || eH) && null != e0 && e2(null),
        ew[36] !== e_ ||
        ew[37] !== e$ ||
        ew[38] !== tS ||
        ew[39] !== tz ||
        ew[40] !== ez ||
        ew[41] !== ty ||
        ew[42] !== eG
          ? ((F = (e) => {
              ;(0, T.S)({
                source: e ? tv.current : tx.current,
                destination: () => (e ? tx.current : tv.current),
                reducedMotion: ty || !tb.current || (!tz && "compact" !== eG) || !tS,
                update: () => {
                  ;(e2(e && !e$ ? { appearance: e_, name: null } : null), e8(null), e9(!1), tt(!1), tk(!1), e || ez?.())
                },
              })
            }),
            (ew[36] = e_),
            (ew[37] = e$),
            (ew[38] = tS),
            (ew[39] = tz),
            (ew[40] = ez),
            (ew[41] = ty),
            (ew[42] = eG),
            (ew[43] = F))
          : (F = ew[43]))
      let tD = F
      ;((ew[44] !== tD || ew[45] !== e$ || ew[46] !== tS || ew[47] !== e5 || ew[48] !== eY || ew[49] !== eH
        ? ((G = () => ({
            open(e) {
              e$ || eH || e5 || ((tb.current = e.detail > 0), (tg.current = e.currentTarget), tS && eY(), tD(!0))
            },
          })),
          (ew[44] = tD),
          (ew[45] = e$),
          (ew[46] = tS),
          (ew[47] = e5),
          (ew[48] = eY),
          (ew[49] = eH),
          (ew[50] = G))
        : (G = ew[50]),
      (0, y.useImperativeHandle)(ek, G),
      ew[51] !== tD ||
        ew[52] !== tI ||
        ew[53] !== tS ||
        ew[54] !== eS ||
        ew[55] !== eP ||
        ew[56] !== eV ||
        ew[57] !== l ||
        ew[58] !== tB)
        ? (($ = function (e) {
            return (
              e4(!0),
              e8(null),
              (async function (e) {
                if (tB) return eP(e, l)
                if (e?.avatar === "pet" && null != tI) {
                  let t = await eP(e, l, tI)
                  return (t && tS && tp.current?.saveCustom(), t)
                }
                return tS ? null != tp.current && (await tp.current.save(eV || l === eS ? void 0 : l), !0) : eP(e, l)
              })(e)
                .then((e) => {
                  e ? tD(!1) : e8("save")
                })
                .catch((e) => {
                  e8((0, O.ym)(e) ? "name" : "save")
                })
                .finally(() => {
                  e4(!1)
                })
            )
          }),
          (ew[51] = tD),
          (ew[52] = tI),
          (ew[53] = tS),
          (ew[54] = eS),
          (ew[55] = eP),
          (ew[56] = eV),
          (ew[57] = l),
          (ew[58] = tB),
          (ew[59] = $))
        : ($ = ew[59]),
        ew[60] !== tE ||
        ew[61] !== e$ ||
        ew[62] !== e0 ||
        ew[63] !== e3 ||
        ew[64] !== e5 ||
        ew[65] !== eS ||
        ew[66] !== ts ||
        ew[67] !== $ ||
        ew[68] !== l
          ? ((Y = function (e) {
              if ((e.preventDefault(), e3 !== eS && (Array.from(l).length > ts || l.includes("\\")))) {
                e9(!0)
                let t = e.currentTarget.elements.namedItem("nickname")
                t instanceof HTMLElement && t.focus()
                return
              }
              null == e0 || e5 || e$ || 0 === l.length || !tE || $(e0.appearance)
            }),
            (ew[60] = tE),
            (ew[61] = e$),
            (ew[62] = e0),
            (ew[63] = e3),
            (ew[64] = e5),
            (ew[65] = eS),
            (ew[66] = ts),
            (ew[67] = $),
            (ew[68] = l),
            (ew[69] = Y))
          : (Y = ew[69]))
      let tq = Y
      ew[70] !== e$ ||
      ew[71] !== eZ ||
      ew[72] !== e5 ||
      ew[73] !== ez ||
      ew[74] !== eI ||
      ew[75] !== eV ||
      ew[76] !== eK
        ? ((et = function () {
            null == eI ||
              e5 ||
              e$ ||
              eV ||
              (e2(null),
              ez?.(),
              eK
                .get(A.gM)
                .navigate((0, K.xP)(eI), {
                  state: {
                    prefillPrompt: eZ.formatMessage({
                      id: "restricted.aeonAppearancePicker.createPetPrompt",
                      defaultMessage: "Make a pet avatar for yourself based on something you know about me",
                      description:
                        "Draft message placed in the dot assistant's composer when the user chooses to create a pet avatar in its appearance editor. The user can edit it before sending.",
                    }),
                    focusComposerNonce: Date.now(),
                  },
                }))
          }),
          (ew[70] = e$),
          (ew[71] = eZ),
          (ew[72] = e5),
          (ew[73] = ez),
          (ew[74] = eI),
          (ew[75] = eV),
          (ew[76] = eK),
          (ew[77] = et))
        : (et = ew[77])
      let tF = et
      ew[78] !== ts
        ? ((ea = (0, n.jsx)(j.A, {
            id: "restricted.aeonAppearancePicker.nameFormatError.limit",
            defaultMessage: "Use up to {limit} characters without backslashes",
            description:
              "Inline error for an invalid assistant nickname in the appearance editor. Limit is the maximum character count. Backslashes are not permitted.",
            values: { limit: ts },
          })),
          (ew[78] = ts),
          (ew[79] = ea))
        : (ea = ew[79])
      let tG = ea
      ew[80] === Symbol.for("react.memo_cache_sentinel")
        ? ((en = (0, n.jsx)(j.A, { ...O.Bw.rejected })), (ew[80] = en))
        : (en = ew[80])
      let t$ = en,
        tH = e7 || tu,
        tV = null
      e7 ? (tV = tG) : tu ? (tV = t$) : null == eI || eV || te || Array.from(e3).length !== ts || (tV = tG)
      let tQ = tS ? M.TM : M.pd,
        tK = tS ? "sr-only" : "text-sm font-medium select-none"
      ;(ew[81] === Symbol.for("react.memo_cache_sentinel")
        ? ((es = (0, n.jsx)(j.A, {
            id: "restricted.aeonAppearancePicker.name",
            defaultMessage: "Nickname",
            description: "Label for the assistant's private nickname in the appearance dialog",
          })),
          (ew[81] = es))
        : (es = ew[81]),
        ew[82] !== eX || ew[83] !== tK
          ? ((ei = (0, n.jsx)("label", { className: tK, htmlFor: eX, children: es })),
            (ew[82] = eX),
            (ew[83] = tK),
            (ew[84] = ei))
          : (ei = ew[84]),
        ew[85] !== eK
          ? ((er = (e) => {
              null != e && eK.set(q.s, !0)
            }),
            (ew[85] = eK),
            (ew[86] = er))
          : (er = ew[86]))
      let tW = tS ? "display" : "default",
        tY = null != tV ? eJ : void 0
      ew[87] !== eZ
        ? ((el = eZ.formatMessage({
            id: "restricted.aeonAppearancePicker.namePlaceholder",
            defaultMessage: "Your dot",
            description:
              "Placeholder in the empty nickname field in the dot's appearance editor and character studio. A dot is the user's customizable assistant character. Keep the singular term dot untranslated.",
          })),
          (ew[87] = eZ),
          (ew[88] = el))
        : (el = ew[88])
      let tZ = null == eI ? 24 : void 0,
        tX = tS ? 1 : void 0
      ;(ew[89] !== te || ew[90] !== th
        ? ((eo = (e) => th(e.target.value, te)), (ew[89] = te), (ew[90] = th), (ew[91] = eo))
        : (eo = ew[91]),
        ew[92] === Symbol.for("react.memo_cache_sentinel") ? ((ec = () => tt(!0)), (ew[92] = ec)) : (ec = ew[92]),
        ew[93] !== th
          ? ((ed = (e) => {
              ;(tt(!1), th(e.currentTarget.value, !1))
            }),
            (ew[93] = th),
            (ew[94] = ed))
          : (ed = ew[94]),
        ew[95] !== tS
          ? ((eu = (e) => {
              tS &&
                "Enter" === e.key &&
                !e.nativeEvent.isComposing &&
                (e.preventDefault(), e.currentTarget.form?.requestSubmit())
            }),
            (ew[95] = tS),
            (ew[96] = eu))
          : (eu = ew[96]),
        ew[97] === Symbol.for("react.memo_cache_sentinel")
          ? ((em = (e) => {
              ;(e.preventDefault(), e9(!0), e.currentTarget.focus())
            }),
            (ew[97] = em))
          : (em = ew[97]),
        ew[98] !== tQ ||
        ew[99] !== e3 ||
        ew[100] !== tH ||
        ew[101] !== e5 ||
        ew[102] !== eX ||
        ew[103] !== eV ||
        ew[104] !== er ||
        ew[105] !== tW ||
        ew[106] !== tY ||
        ew[107] !== el ||
        ew[108] !== tZ ||
        ew[109] !== tX ||
        ew[110] !== eo ||
        ew[111] !== ed ||
        ew[112] !== eu
          ? ((eh = (0, n.jsx)(tQ, {
              id: eX,
              ref: er,
              name: "nickname",
              variant: tW,
              "aria-describedby": tY,
              "aria-invalid": tH,
              autoFocus: !0,
              onFocus: J,
              value: e3,
              placeholder: el,
              maxLength: tZ,
              rows: tX,
              readOnly: eV,
              disabled: e5,
              onChange: eo,
              onCompositionStart: ec,
              onCompositionEnd: ed,
              onKeyDown: eu,
              onInvalid: em,
            })),
            (ew[98] = tQ),
            (ew[99] = e3),
            (ew[100] = tH),
            (ew[101] = e5),
            (ew[102] = eX),
            (ew[103] = eV),
            (ew[104] = er),
            (ew[105] = tW),
            (ew[106] = tY),
            (ew[107] = el),
            (ew[108] = tZ),
            (ew[109] = tX),
            (ew[110] = eo),
            (ew[111] = ed),
            (ew[112] = eu),
            (ew[113] = eh))
          : (eh = ew[113]),
        ew[114] !== tG
          ? ((ep = (0, n.jsx)("span", {
              className: "invisible col-start-1 row-start-1",
              "aria-hidden": !0,
              children: tG,
            })),
            (ew[114] = tG),
            (ew[115] = ep))
          : (ep = ew[115]),
        ew[116] === Symbol.for("react.memo_cache_sentinel")
          ? ((ef = (0, n.jsx)("span", {
              className: "invisible col-start-1 row-start-1",
              "aria-hidden": !0,
              children: t$,
            })),
            (ew[116] = ef))
          : (ef = ew[116]))
      let tJ = tH ? "text-danger" : "text-secondary"
      ew[117] !== tJ ? ((eg = (0, b.A)("col-start-1 row-start-1", tJ)), (ew[117] = tJ), (ew[118] = eg)) : (eg = ew[118])
      let t1 = tH ? "alert" : "status"
      ;(ew[119] !== tV || ew[120] !== eJ || ew[121] !== eg || ew[122] !== t1
        ? ((ev = (0, n.jsx)("p", { id: eJ, className: eg, role: t1, children: tV })),
          (ew[119] = tV),
          (ew[120] = eJ),
          (ew[121] = eg),
          (ew[122] = t1),
          (ew[123] = ev))
        : (ev = ew[123]),
        ew[124] !== ep || ew[125] !== ev
          ? ((ex = (0, n.jsxs)("div", { className: "grid text-sm select-none", children: [ep, ef, ev] })),
            (ew[124] = ep),
            (ew[125] = ev),
            (ew[126] = ex))
          : (ex = ew[126]),
        ew[127] !== ei || ew[128] !== eh || ew[129] !== ex
          ? ((eb = (0, n.jsxs)(S.RW, { children: [ei, eh, ex] })),
            (ew[127] = ei),
            (ew[128] = eh),
            (ew[129] = ex),
            (ew[130] = eb))
          : (eb = ew[130]))
      let t0 = eb
      if (
        ew[131] !== tE ||
        ew[132] !== e0 ||
        ew[133] !== tS ||
        ew[134] !== e5 ||
        ew[135] !== td ||
        ew[136] !== e6 ||
        ew[137] !== l
      ) {
        let e,
          t,
          a,
          s,
          i,
          r,
          o = "save" !== e6,
          c = "save" !== e6
        ;(ew[139] !== c
          ? ((e = (0, b.A)("text-sm text-danger", { invisible: c })), (ew[139] = c), (ew[140] = e))
          : (e = ew[140]),
          ew[141] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(j.A, {
                id: "restricted.aeonAppearancePicker.saveFailed",
                defaultMessage: "Couldn’t save your changes. Try again.",
                description:
                  "Failure message in the appearance dialog when saving the assistant name and avatar fails. The draft is kept for retry.",
              })),
              (ew[141] = t))
            : (t = ew[141]),
          ew[142] !== o || ew[143] !== e
            ? ((a = (0, n.jsx)("p", { role: "alert", "aria-hidden": o, className: e, children: t })),
              (ew[142] = o),
              (ew[143] = e),
              (ew[144] = a))
            : (a = ew[144]))
        let d = e5 || td,
          u = e5 || td,
          m = e5 || 0 === l.length || !tE
        ;(ew[145] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(j.A, {
              id: "restricted.aeonAppearancePicker.save",
              defaultMessage: "Save",
              description: "Confirm the assistant name and appearance changes",
            })),
            (ew[145] = s))
          : (s = ew[145]),
          ew[146] !== d || ew[147] !== u || ew[148] !== m
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
              (ew[146] = d),
              (ew[147] = u),
              (ew[148] = m),
              (ew[149] = i))
            : (i = ew[149]))
        let h =
          !tS &&
          (0, n.jsxs)(k.$, {
            className: "justify-center",
            type: "button",
            color: "secondary",
            size: "dialog",
            disabled: e5,
            onClick: function () {
              null != e0 && e2({ ...e0, appearance: (0, E.hH)(e0.appearance) })
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
        ;(ew[150] !== a || ew[151] !== i || ew[152] !== h
          ? ((r = (0, n.jsxs)(n.Fragment, { children: [a, i, h] })),
            (ew[150] = a),
            (ew[151] = i),
            (ew[152] = h),
            (ew[153] = r))
          : (r = ew[153]),
          (ey = r),
          (ew[131] = tE),
          (ew[132] = e0),
          (ew[133] = tS),
          (ew[134] = e5),
          (ew[135] = td),
          (ew[136] = e6),
          (ew[137] = l),
          (ew[138] = ey))
      } else ey = ew[138]
      if (
        ew[154] !== tD ||
        ew[155] !== eT ||
        ew[156] !== tF ||
        ew[157] !== e$ ||
        ew[158] !== e0 ||
        ew[159] !== tI ||
        ew[160] !== tS ||
        ew[161] !== eF ||
        ew[162] !== e1 ||
        ew[163] !== eZ ||
        ew[164] !== tO ||
        ew[165] !== tA ||
        ew[166] !== tz ||
        ew[167] !== e5 ||
        ew[168] !== t0 ||
        ew[169] !== ez ||
        ew[170] !== eD ||
        ew[171] !== eq ||
        ew[172] !== eI ||
        ew[173] !== eY ||
        ew[174] !== tU ||
        ew[175] !== tL ||
        ew[176] !== tR ||
        ew[177] !== eH ||
        ew[178] !== eV ||
        ew[179] !== ey ||
        ew[180] !== tq ||
        ew[181] !== tP ||
        ew[182] !== eL ||
        ew[183] !== tT ||
        ew[184] !== t_ ||
        ew[185] !== eG
      ) {
        eA = Symbol.for("react.early_return_sentinel")
        e: {
          let e, t, a, s, i, r, l, o, c
          ew[188] !== e0 ||
          ew[189] !== eF ||
          ew[190] !== e1 ||
          ew[191] !== tO ||
          ew[192] !== tA ||
          ew[193] !== tz ||
          ew[194] !== eH ||
          ew[195] !== tP ||
          ew[196] !== tT ||
          ew[197] !== eG
            ? ((e = tO
                ? (0, n.jsx)("span", {
                    className: (0, b.A)(
                      "px-2.5 py-0.5",
                      "compact-name" === eG ? "truncate" : "line-clamp-3 break-words whitespace-normal",
                    ),
                    children: e1,
                  })
                : (0, n.jsxs)("span", {
                    className: (0, b.A)(
                      "relative flex items-center justify-center",
                      null != e0 && (tz || "compact" === eG) && "invisible",
                      "hero" === eG && "size-16",
                      "compact" === eG && "size-5",
                      "profile" === eG && "size-12",
                      "toolbar" === eG && "size-full",
                    ),
                    children: [
                      (0, n.jsx)("span", {
                        ref: tv,
                        className: "block size-full",
                        "data-character-artwork": !0,
                        children:
                          null != tT
                            ? (0, n.jsx)(B.s, { pet: tT })
                            : (0, n.jsx)(z.X, {
                                className: "size-full",
                                avatar: tP,
                                identity: eF,
                                active: null == e0 && tA,
                                interactionTarget: tf,
                              }),
                      }),
                      tz && !eH ? (0, n.jsx)(D.I, { identity: eF, variant: eG }) : null,
                    ],
                  })),
              (ew[188] = e0),
              (ew[189] = eF),
              (ew[190] = e1),
              (ew[191] = tO),
              (ew[192] = tA),
              (ew[193] = tz),
              (ew[194] = eH),
              (ew[195] = tP),
              (ew[196] = tT),
              (ew[197] = eG),
              (ew[198] = e))
            : (e = ew[198])
          let d = e
          if (eH) {
            eA = d
            break e
          }
          ;(ew[199] !== tD || ew[200] !== tS || ew[201] !== e5 || ew[202] !== eY
            ? ((t = (e) => {
                e5 || (e && tS && eY(), tD(e))
              }),
              (ew[199] = tD),
              (ew[200] = tS),
              (ew[201] = e5),
              (ew[202] = eY),
              (ew[203] = t))
            : (t = ew[203]),
            ew[204] !== eD
              ? ((a = (e) => {
                  ;(eD?.(e),
                    !e.defaultPrevented && tg.current?.isConnected && (e.preventDefault(), tg.current.focus()),
                    (tg.current = null))
                }),
                (ew[204] = eD),
                (ew[205] = a))
              : (a = ew[205]),
            ew[206] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = () => {
                  tb.current = !0
                }),
                (i = () => {
                  tb.current = !0
                }),
                (r = () => {
                  tb.current = !1
                }),
                (ew[206] = s),
                (ew[207] = i),
                (ew[208] = r))
              : ((s = ew[206]), (i = ew[207]), (r = ew[208])),
            ew[209] !== e5
              ? ((l = (e) => {
                  ;((tb.current = !1), e5 && e.preventDefault())
                }),
                (ew[209] = e5),
                (ew[210] = l))
              : (l = ew[210]),
            ew[211] !== a || ew[212] !== l
              ? ((o = {
                  "aria-describedby": void 0,
                  onCloseAutoFocus: a,
                  onPointerDownCapture: s,
                  onPointerDownOutside: i,
                  onKeyDownCapture: r,
                  onClick: X,
                  onEscapeKeyDown: l,
                }),
                (ew[211] = a),
                (ew[212] = l),
                (ew[213] = o))
              : (o = ew[213]),
            ew[214] !== e$ ||
            ew[215] !== tS ||
            ew[216] !== eZ ||
            ew[217] !== tO ||
            ew[218] !== tA ||
            ew[219] !== tz ||
            ew[220] !== ez ||
            ew[221] !== eq ||
            ew[222] !== eY ||
            ew[223] !== d ||
            ew[224] !== eL ||
            ew[225] !== eG
              ? ((c =
                  eL ??
                  (0, n.jsx)(k.$, {
                    ref: tf,
                    "aria-label": tO
                      ? void 0
                      : eZ.formatMessage(
                          {
                            id: "restricted.aeonAppearancePicker.trigger.productName.dot",
                            defaultMessage: "Change your {productName}’s appearance",
                            description:
                              "Accessible label for changing an assistant's appearance; productName is the untranslated term for the user's agent, not the assistant's custom name",
                          },
                          { productName: "dot" },
                        ),
                    className: (0, b.A)(
                      null != ez && "hidden",
                      tz && "group/avatar relative touch-none",
                      "profile" === eG && "-ms-1",
                      tO && "max-w-full [text-align:inherit]",
                    ),
                    color: tz ? "ghostTertiary" : "ghostActive",
                    radius: tO ? "small" : "default",
                    size: "toolbar" === eG ? "icon" : "inline",
                    disabled: e$,
                    onPointerEnter: () => {
                      tS && tA && eY()
                    },
                    onFocus: () => {
                      tS && tA && eY()
                    },
                    onClick: (e) => {
                      ;((tb.current = e.detail > 0),
                        e.stopPropagation(),
                        null != eq ? (e.preventDefault(), eq(e)) : (tg.current = null))
                    },
                    children: d,
                  })),
                (ew[214] = e$),
                (ew[215] = tS),
                (ew[216] = eZ),
                (ew[217] = tO),
                (ew[218] = tA),
                (ew[219] = tz),
                (ew[220] = ez),
                (ew[221] = eq),
                (ew[222] = eY),
                (ew[223] = d),
                (ew[224] = eL),
                (ew[225] = eG),
                (ew[226] = c))
              : (c = ew[226]),
            (ej = (0, n.jsx)(_.lG, {
              open: null != e0 && !e$,
              onOpenChange: t,
              size: "xxwide",
              contentClassName: W.A.modal,
              overlayClassName: W.A.backdrop,
              contentPosition: tS ? "scrollable" : "centered",
              variant: tS ? "mediaDetail" : "default",
              showDialogClose: !e5,
              shouldIgnoreClickOutside: e5,
              contentProps: o,
              triggerContent: c,
              children:
                null != e0
                  ? (0, n.jsxs)(S.R4, {
                      as: "form",
                      size: tS ? void 0 : "viewport",
                      variant: tS ? "chatgpt" : "default",
                      onKeyDown: Z,
                      onSubmit: tq,
                      children: [
                        (0, n.jsx)(S.c7, {
                          className: tS ? "sr-only" : "select-none",
                          title: (0, n.jsx)(_.L3, {
                            children: (0, n.jsx)(j.A, {
                              id: "restricted.aeonAppearancePicker.header.productName.dot",
                              defaultMessage: "Customize your {productName}",
                              description:
                                "Heading in the assistant appearance picker; productName is the untranslated term for the user's agent, not the assistant's custom name",
                              values: { productName: (0, n.jsx)("strong", { children: "dot" }) },
                            }),
                          }),
                        }),
                        null == e0
                          ? null
                          : tS
                            ? (0, n.jsx)(y.Suspense, {
                                fallback: (0, n.jsx)(R.o, {
                                  title: t0,
                                  footer: ey,
                                  previewRef: tx,
                                  previewFallback: tL,
                                  onCreatePet: eV || null == eI ? void 0 : tF,
                                }),
                                children: (0, n.jsx)(P.$O, {
                                  ref: tp,
                                  previewRef: tx,
                                  previewFallback: tL,
                                  conversationId: eT,
                                  onReady: tk,
                                  onCreatePet: eV || null == eI ? void 0 : tF,
                                  disabled: e5,
                                  pet: tI,
                                  onSelectPet: (e) =>
                                    e2({
                                      ...e0,
                                      pet: e,
                                      appearance: null == e ? null : { avatar: "pet", color: E.rc.pet },
                                    }),
                                  title: t0,
                                  footer: ey,
                                }),
                              })
                            : (0, n.jsx)(S.OO, {
                                spacing: "large",
                                children: (0, n.jsxs)("div", {
                                  className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                                  children: [
                                    (0, n.jsx)("div", { className: "sm:col-start-2 sm:row-start-1", children: t0 }),
                                    (0, n.jsx)("div", {
                                      className: "flex items-center justify-center sm:col-start-2 sm:row-start-2",
                                      children:
                                        null != tR
                                          ? (0, n.jsx)("div", {
                                              className: "size-32 sm:size-48",
                                              children: (0, n.jsx)(B.s, { pet: tR }),
                                            })
                                          : (0, n.jsx)(z.X, {
                                              className: "size-32 sm:size-48",
                                              avatar: tU,
                                              identity: eF,
                                              useSavedAvatar: !1,
                                            }),
                                    }),
                                    (0, n.jsx)(H, {
                                      className: "sm:col-start-1 sm:row-span-3 sm:row-start-1",
                                      legacy: t_,
                                      disabled: e5,
                                      selected: e0.appearance?.avatar ?? null,
                                      onChange: (e) => e2({ ...e0, appearance: { color: E.rc[e], avatar: e } }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "flex flex-col justify-end gap-3 sm:col-start-2 sm:row-start-3",
                                      children: ey,
                                    }),
                                  ],
                                }),
                              }),
                      ],
                    })
                  : null,
            })))
        }
        ;((ew[154] = tD),
          (ew[155] = eT),
          (ew[156] = tF),
          (ew[157] = e$),
          (ew[158] = e0),
          (ew[159] = tI),
          (ew[160] = tS),
          (ew[161] = eF),
          (ew[162] = e1),
          (ew[163] = eZ),
          (ew[164] = tO),
          (ew[165] = tA),
          (ew[166] = tz),
          (ew[167] = e5),
          (ew[168] = t0),
          (ew[169] = ez),
          (ew[170] = eD),
          (ew[171] = eq),
          (ew[172] = eI),
          (ew[173] = eY),
          (ew[174] = tU),
          (ew[175] = tL),
          (ew[176] = tR),
          (ew[177] = eH),
          (ew[178] = eV),
          (ew[179] = ey),
          (ew[180] = tq),
          (ew[181] = tP),
          (ew[182] = eL),
          (ew[183] = tT),
          (ew[184] = t_),
          (ew[185] = eG),
          (ew[186] = ej),
          (ew[187] = eA))
      } else ((ej = ew[186]), (eA = ew[187]))
      return eA !== Symbol.for("react.early_return_sentinel") ? eA : ej
    }
    function Z(e) {
      "Enter" === e.key && e.nativeEvent.isComposing && e.preventDefault()
    }
    function X(e) {
      return e.stopPropagation()
    }
    function J(e) {
      let t = e.currentTarget.value.length
      e.currentTarget.setSelectionRange(t, t)
    }
    function ee(e) {
      return Array.from(e.trimStart()).slice(0, 16).join("")
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
          ref: _,
          conversationId: S,
          hostId: C,
          variant: M,
          onClose: N,
          triggerContent: I,
          onCloseAutoFocus: T,
          onTrigger: P,
        } = e,
        R = (0, i.gh)(h.u),
        U = (0, r.A)(),
        { renameThread: B } = (0, m.DS)(),
        z = (0, l.zy)(),
        O = (0, i.Ul)(c.chatGptAuthenticatedAccountId$),
        L = (0, i.Ul)(c.chatGptAuthenticatedUserId$),
        D = (0, i._U)(C ?? o.qX, S)
      k[0] !== D ? ((t = (0, et.d)(D)), (k[0] = D), (k[1] = t)) : (t = k[1])
      let q = "durable" === t,
        { data: F } = (0, i._U)(el.cloudAeonByThreadId$, q ? S : null)
      ;(k[2] !== F || k[3] !== z.pathname
        ? ((a = (0, K.ao)(z.pathname) ?? (F?.scope === "shared" ? F.id : null)),
          (k[2] = F),
          (k[3] = z.pathname),
          (k[4] = a))
        : (a = k[4]),
        k[5] === Symbol.for("react.memo_cache_sentinel") ? ((v = { enabled: !1 }), (k[5] = v)) : (v = k[5]))
      let { data: G } = (0, i._U)(el.jC, a, v),
        $ = (0, i._U)(u.N, S)
      k[6] !== S || k[7] !== D ? ((x = { hostId: D, threadId: S }), (k[6] = S), (k[7] = D), (k[8] = x)) : (x = k[8])
      let H = (0, i._U)(es.q5, x),
        V = (0, i._U)(o.u4, S)
      k[9] !== S || k[10] !== V || k[11] !== z.pathname || k[12] !== z.state?.archivedConversationPreview
        ? ((b =
            V ||
            (z.state?.archivedConversationPreview === !0 &&
              (0, p.Qm)((0, p.VJ)({ pathname: z.pathname, routeTemplate: z.pathname })) === S)),
          (k[9] = S),
          (k[10] = V),
          (k[11] = z.pathname),
          (k[12] = z.state?.archivedConversationPreview),
          (k[13] = b))
        : (b = k[13])
      let W = b,
        Z = (0, i._U)(Q.T, S)
      k[14] !== O ||
      k[15] !== S ||
      k[16] !== D ||
      k[17] !== U ||
      k[18] !== q ||
      k[19] !== C ||
      k[20] !== W ||
      k[21] !== B ||
      k[22] !== R ||
      k[23] !== L
        ? ((y = async function (e, t, a) {
            let n = (0, g.Nj)(),
              s = () =>
                R.get(c.chatGptAuthenticatedAccountId$) === O &&
                R.get(c.chatGptAuthenticatedUserId$) === L &&
                (C ?? R.get(o.qX, S)) === D &&
                (0, g.Nj)() === n
            if (!s()) return !1
            let i = R.get(es.q5, { hostId: D, threadId: S }) ?? R.get(u.N, S)
            if (
              (W ||
                t === i ||
                (q
                  ? await (0, en.R)(R, { conversationId: S, hostId: D, title: t, undoLabel: m.tD.renameThreadUndone })
                  : await B({
                      conversationId: S,
                      hostId: D,
                      previousTitle: i ?? void 0,
                      title: t,
                      showErrorToast: !1,
                    })),
              !s())
            )
              return !1
            let r = R.get(Q.T, S)
            if (null == e || (null == a && e.avatar === r?.avatar && e.color === r.color)) return !0
            if (!q) return ((0, E.KH)(S, e), !0)
            let l = R.query.snapshot(el.cloudAeonByThreadId$, S)
            try {
              let t = await R.query.getOrFetch(el.cloudAeonByThreadId$, S)
              if (!s() || null == t) return !1
              let n = await (0, ea.$T)(R, S, e, { pet: a, profile: t })
              if (null != n) {
                if ((await l.cancel(), !s())) return !1
                ;(0, er.q)(R, S, n)
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
          (k[14] = O),
          (k[15] = S),
          (k[16] = D),
          (k[17] = U),
          (k[18] = q),
          (k[19] = C),
          (k[20] = W),
          (k[21] = B),
          (k[22] = R),
          (k[23] = L),
          (k[24] = y))
        : (y = k[24])
      let X = y
      k[25] !== O || k[26] !== S || k[27] !== D || k[28] !== L
        ? ((j = JSON.stringify([O, L, D, S])), (k[25] = O), (k[26] = S), (k[27] = D), (k[28] = L), (k[29] = j))
        : (j = k[29])
      let J = H ?? $ ?? null,
        ee = q && null == F,
        eo = F?.id,
        ec = q && 1 ? S : void 0
      return (
        k[30] !== F?.scope || k[31] !== G
          ? ((A = null == G ? F?.scope === "shared" : (0, ei.QU)(G)), (k[30] = F?.scope), (k[31] = G), (k[32] = A))
          : (A = k[32]),
        k[33] !== Z ||
        k[34] !== S ||
        k[35] !== N ||
        k[36] !== T ||
        k[37] !== P ||
        k[38] !== W ||
        k[39] !== _ ||
        k[40] !== X ||
        k[41] !== eo ||
        k[42] !== ec ||
        k[43] !== A ||
        k[44] !== j ||
        k[45] !== J ||
        k[46] !== ee ||
        k[47] !== I ||
        k[48] !== M
          ? ((w = (0, n.jsx)(
              Y,
              {
                ref: _,
                appearance: Z,
                name: J,
                namePending: ee,
                identity: S,
                orbitId: eo,
                characterConversationId: ec,
                variant: M,
                triggerContent: I,
                onCloseAutoFocus: T,
                onTrigger: P,
                readOnly: A,
                readOnlyName: W,
                onClose: N,
                onSave: X,
              },
              j,
            )),
            (k[33] = Z),
            (k[34] = S),
            (k[35] = N),
            (k[36] = T),
            (k[37] = P),
            (k[38] = W),
            (k[39] = _),
            (k[40] = X),
            (k[41] = eo),
            (k[42] = ec),
            (k[43] = A),
            (k[44] = j),
            (k[45] = J),
            (k[46] = ee),
            (k[47] = I),
            (k[48] = M),
            (k[49] = w))
          : (w = k[49]),
        w
      )
    }
  },
  ThwH(e, t, a) {
    a.d(t, { XL: () => eM, Lb: () => ex, cq: () => ev, ok: () => eP })
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
          _ = i
        if (g(i) && "number" == typeof A && r) {
          var S = p((_ = h(A)))
          k = Math.round(A / S)
        }
        return o.createElement(v, (0, d.Cl)({ value: k, unit: _ }, l))
      }
    x.displayName = "FormattedRelativeTime"
    var b = a("HZfM"),
      y = a("tl5a"),
      j = a("tWaO"),
      A = a("KIKs"),
      w = a("OWtl"),
      k = a("eGPX"),
      _ = a("lBcl"),
      S = a("V8uZ"),
      C = a("lKhb"),
      M = a("PaR8"),
      N = a("MtDh"),
      I = a("mCgi"),
      T = a("bihu"),
      P = a("qMca"),
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
        [k, S] = (0, o.useState)(null),
        [C, M] = (0, o.useState)(null)
      if (!b || "durable" !== j || x) return null
      g[0] !== v
        ? ((t = async function (e) {
            ;(w(e), S(null))
            try {
              let t = await U.Request.safePost(
                "setup" === e
                  ? "/cloud-aeons/by-thread/{thread_id}/doctor/setup"
                  : "/cloud-aeons/by-thread/{thread_id}/doctor/check-in",
                { parameters: { path: { thread_id: v } } },
              )
              ;(M(t.schedule_url ?? t.workflow_url), S(e))
            } catch {
              S("error")
            }
            w(null)
          }),
          (g[0] = v),
          (g[1] = t))
        : (t = g[1])
      let N = t,
        I = null != A
      ;(g[2] !== N ? ((a = () => void N("setup")), (g[2] = N), (g[3] = a)) : (a = g[3]),
        g[4] !== A
          ? ((i = (0, n.jsx)(_.x.ItemLabel, {
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
          ? ((r = (0, n.jsx)(_.x.ItemButton, { className: "select-none", disabled: I, onClick: a, children: i })),
            (g[6] = I),
            (g[7] = a),
            (g[8] = i),
            (g[9] = r))
          : (r = g[9]))
      let T = null != A
      return (
        g[10] !== N ? ((d = () => void N("check-in")), (g[10] = N), (g[11] = d)) : (d = g[11]),
        g[12] !== A
          ? ((u = (0, n.jsx)(_.x.ItemLabel, {
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
        g[14] !== T || g[15] !== d || g[16] !== u
          ? ((m = (0, n.jsx)(_.x.ItemButton, { className: "select-none", disabled: T, onClick: d, children: u })),
            (g[14] = T),
            (g[15] = d),
            (g[16] = u),
            (g[17] = m))
          : (m = g[17]),
        g[18] !== k
          ? ((h =
              null != k &&
              (0, n.jsx)(_.x.Item, {
                role: "status",
                children: (0, n.jsxs)(_.x.ItemLabel, {
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
              (0, n.jsx)(_.x.Item, {
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
          ? ((f = (0, n.jsxs)(_.x.Section, { sectionKey: "orbit-doctor", mode: "headerless", children: [r, m, h, p] })),
            (g[22] = h),
            (g[23] = p),
            (g[24] = r),
            (g[25] = m),
            (g[26] = f))
          : (f = g[26]),
        f
      )
    }
    var O = a("dFiG"),
      L = a("Getx"),
      D = a("lN5t"),
      q = a("Qgfj"),
      F = a("PFjh"),
      G = a("SPnB"),
      $ = a("ygO2"),
      H = a("JNtf"),
      V = a("bqtn"),
      Q = a("Ot7V"),
      K = a("GO7r"),
      W = a("RNul"),
      Y = a("SGsN"),
      Z = a("aepO"),
      X = a("soaw"),
      J = a("nIa3"),
      ee = a("om2R"),
      et = a("PXl7"),
      ea = a("QdY6"),
      en = a("mpp1"),
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
        i = (0, s.c)(12),
        { conversationId: r, isArchived: o, mode: d, onSetup: u } = e,
        h = void 0 === d ? "section" : d,
        p = (0, m.A)(),
        f = (0, l._U)(y.qX, r),
        g = (0, l._U)(y.W3, r)
      if (o || "durable" !== (0, J.d)(f, g)) {
        let e, a
        i[0] !== p
          ? ((e = p.formatMessage(
              {
                id: "orbit.email.setup.activeCloudDotRequired",
                defaultMessage: "Email requires an active cloud {dot}",
                description:
                  "Explains why archived and local dots cannot connect Email. {dot} is the untranslated name for the user’s agent.",
              },
              { dot: "dot" },
            )),
            (i[0] = p),
            (i[1] = e))
          : (e = i[1])
        let s = e
        ;(i[2] !== h || i[3] !== s
          ? ((a =
              "setup" === h
                ? (0, n.jsx)(en.mz, { title: (0, n.jsx)(c.A, { ...eh.unavailable }), description: s })
                : (0, n.jsx)(em, { disabled: !0, mode: h, title: s })),
            (i[2] = h),
            (i[3] = s),
            (i[4] = a))
          : (a = i[4]),
          (t = a))
      } else {
        let e
        ;(i[5] !== r || i[6] !== h || i[7] !== u
          ? ((e = (0, n.jsx)(ec, { conversationId: r, mode: h, onSetup: u })),
            (i[5] = r),
            (i[6] = h),
            (i[7] = u),
            (i[8] = e))
          : (e = i[8]),
          (t = e))
      }
      return (
        i[9] !== t || i[10] !== h
          ? ((a =
              "section" !== h
                ? t
                : (0, n.jsx)(_.x.Section, { sectionKey: "aeon-email", mode: "headerless", children: t })),
            (i[9] = t),
            (i[10] = h),
            (i[11] = a))
          : (a = i[11]),
        a
      )
    }
    function ec(e) {
      let t,
        a = (0, s.c)(20),
        { conversationId: i, mode: r, onSetup: o } = e,
        d = (0, l.Ul)(G.chatGptAuthenticatedAccountId$),
        u = (0, l.Ul)(G.chatGptAuthenticatedUserId$),
        { data: m, isPending: h, isError: p, refetch: f } = (0, l._U)(R.cloudAeonByThreadId$, i)
      if (null == d || null == u) return null
      if ("setup" === r && h) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(en.MV, {})), (a[0] = e)) : (e = a[0]),
          e
        )
      }
      if ("setup" === r && p) {
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
          a[2] !== f ? ((t = () => void f()), (a[2] = f), (a[3] = t)) : (t = a[3]),
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
                children: [e, (0, n.jsx)($.$, { color: "primary", size: "detailAction", onClick: t, children: s })],
              })),
              (a[5] = t),
              (a[6] = i))
            : (i = a[6]),
          i
        )
      }
      if (h || p) {
        let e, t
        return (
          a[7] !== f ? ((e = () => void f()), (a[7] = f), (a[8] = e)) : (e = a[8]),
          a[9] !== p || a[10] !== h || a[11] !== r || a[12] !== e
            ? ((t = (0, n.jsx)(em, { mode: r, isLoading: h, isError: p, onClick: e })),
              (a[9] = p),
              (a[10] = h),
              (a[11] = r),
              (a[12] = e),
              (a[13] = t))
            : (t = a[13]),
          t
        )
      }
      if (null == m) return null
      let g = `${d}:${u}:${m.id}:${i}`
      return (
        a[14] !== i || a[15] !== r || a[16] !== o || a[17] !== m.id || a[18] !== g
          ? ((t = (0, n.jsx)(ed, { aeonId: m.id, mode: r, threadId: i, onSetup: o }, g)),
            (a[14] = i),
            (a[15] = r),
            (a[16] = o),
            (a[17] = m.id),
            (a[18] = g),
            (a[19] = t))
          : (t = a[19]),
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
        f = (0, s.c)(53),
        { aeonId: g, mode: v, threadId: x, onSetup: b } = e,
        y = (0, l.gh)(w.u),
        j = (0, m.A)(),
        A = (0, l.Ul)(G.chatGptAuthenticatedAccountId$),
        k = (0, l.Ul)(G.chatGptAuthenticatedUserId$),
        { mutate: _, isPending: S } = (0, l._U)(ei.Ic, g),
        [C, M] = (0, o.useState)(!1),
        [N, I] = (0, o.useState)(null),
        T = (0, o.useRef)(null),
        P = (0, o.useRef)(!1),
        R = (0, X.a)(),
        U = (0, o.useRef)(-1 / 0)
      f[0] !== A || f[1] !== R || f[2] !== y || f[3] !== k
        ? ((t = (e, t) => {
            let a = () =>
              R() &&
              e > U.current &&
              y.get(G.chatGptAuthenticatedAccountId$) === A &&
              y.get(G.chatGptAuthenticatedUserId$) === k &&
              "visible" === document.visibilityState
            a() &&
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  a() &&
                    (0, F.dj)(y).hist("orbit_email", "claim_visible_result_ms", { outcome: t }, performance.now() - e)
                })
              })
          }),
          (f[0] = A),
          (f[1] = R),
          (f[2] = y),
          (f[3] = k),
          (f[4] = t))
        : (t = f[4])
      let B = t,
        { data: E, isPending: z, isError: O, error: L } = (0, l._U)(ei.dk, g)
      f[5] !== L || f[6] !== O
        ? ((a = O && "workspace_disabled" === (0, es.T5)(L).code), (f[5] = L), (f[6] = O), (f[7] = a))
        : (a = f[7])
      let D = a,
        q = O || E?.status !== "linked" ? null : E.email_address,
        $ = null != q && E?.narrow_email_consent_version === 1
      if ((null == q && C && M(!1), "setup" === v)) {
        let e
        if (z) {
          let e
          return (
            f[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(en.MV, {})), (f[8] = e)) : (e = f[8]),
            e
          )
        }
        if ($) {
          let e
          return (
            f[9] !== q || f[10] !== x
              ? ((e = (0, n.jsx)(et.g, { conversationId: x, method: "email", destination: q })),
                (f[9] = q),
                (f[10] = x),
                (f[11] = e))
              : (e = f[11]),
            e
          )
        }
        return (
          f[12] !== g || f[13] !== B || f[14] !== x
            ? ((e = (0, n.jsx)(er, { aeonId: g, threadId: x, embedded: !0, onClaimResult: B })),
              (f[12] = g),
              (f[13] = B),
              (f[14] = x),
              (f[15] = e))
            : (e = f[15]),
          e
        )
      }
      let V = "blockedSenders" === N && $,
        Q = null == q ? eh.setup : eh.settings,
        K = V ? eh.blockedSenders : Q,
        Z = O ? void 0 : E
      f[16] !== j || f[17] !== D
        ? ((i = D
            ? j.formatMessage({
                id: "restricted.aeon.email.settings.workspaceDisabled",
                defaultMessage: "Email is disabled by your workspace admin",
                description:
                  "Explanation on the disabled dot email control when the ChatGPT workspace admin has denied dot or Email access",
              })
            : void 0),
          (f[16] = j),
          (f[17] = D),
          (f[18] = i))
        : (i = f[18])
      let J = null == q ? "dialog" : "menu"
      ;(f[19] !== q || f[20] !== b
        ? ((r =
            null == q
              ? () => {
                  null != b ? b(T.current) : I("settings")
                }
              : void 0),
          (f[19] = q),
          (f[20] = b),
          (f[21] = r))
        : (r = f[21]),
        f[22] !== O ||
        f[23] !== z ||
        f[24] !== v ||
        f[25] !== S ||
        f[26] !== Z ||
        f[27] !== i ||
        f[28] !== J ||
        f[29] !== r
          ? ((d = (0, n.jsx)(em, {
              ref: T,
              mode: v,
              email: Z,
              isLoading: z,
              isError: O,
              disabled: S,
              title: i,
              "aria-haspopup": J,
              onClick: r,
            })),
            (f[22] = O),
            (f[23] = z),
            (f[24] = v),
            (f[25] = S),
            (f[26] = Z),
            (f[27] = i),
            (f[28] = J),
            (f[29] = r),
            (f[30] = d))
          : (d = f[30]))
      let ee = d
      return (
        f[31] !== A ||
        f[32] !== g ||
        f[33] !== N ||
        f[34] !== q ||
        f[35] !== $ ||
        f[36] !== C ||
        f[37] !== v ||
        f[38] !== y ||
        f[39] !== ee ||
        f[40] !== _ ||
        f[41] !== k
          ? ((u =
              null == q
                ? ee
                : (0, n.jsx)(eu, {
                    emailAddress: q,
                    open: C,
                    onOpenChange: M,
                    onCloseAutoFocus: (e) => {
                      null != N && e.preventDefault()
                    },
                    triggerButton: ee,
                    onBlockedSenders: $ ? () => I("blockedSenders") : void 0,
                    onSettings: "shortcut" === v ? void 0 : () => I("settings"),
                    onRemove: () => {
                      if (y.get(ei.Ic, g).isPending) return
                      M(!1)
                      let e = y.get(Y.Id),
                        t = e.info(
                          (0, n.jsx)(c.A, {
                            id: "restricted.aeon.email.disconnecting",
                            defaultMessage: "Disconnecting Email…",
                            description: "Progress while disconnecting a dot's email address",
                          }),
                          { duration: 0, hasCloseButton: !1, leading: (0, n.jsx)(W.y, {}) },
                        ),
                        a = !1,
                        s = y.watch((e) => {
                          let { get: n } = e
                          ;(n(G.chatGptAuthenticatedAccountId$) !== A || n(G.chatGptAuthenticatedUserId$) !== k) &&
                            ((a = !0), t.close())
                        })
                      _(
                        { type: "unlink" },
                        {
                          onSettled: (i, r) => {
                            if ((s(), t.close(), a)) return
                            let l = y.get(ei.dk, g)
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
            (f[31] = A),
            (f[32] = g),
            (f[33] = N),
            (f[34] = q),
            (f[35] = $),
            (f[36] = C),
            (f[37] = v),
            (f[38] = y),
            (f[39] = ee),
            (f[40] = _),
            (f[41] = k),
            (f[42] = u))
          : (u = f[42]),
        f[43] !== g || f[44] !== K || f[45] !== N || f[46] !== B || f[47] !== V || f[48] !== x
          ? ((h =
              null != N
                ? (0, n.jsx)(ea.W, {
                    hasDescription: !0,
                    title: (0, n.jsx)(c.A, { ...K }),
                    onClose: () => {
                      ;((U.current = performance.now()), I(null))
                    },
                    onCloseAutoFocus: (e) => {
                      ;(e.preventDefault(), P.current || T.current?.focus(), (P.current = !1))
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
                      children: V
                        ? (0, n.jsx)(el, { aeonId: g })
                        : (0, n.jsx)(er, {
                            aeonId: g,
                            threadId: x,
                            onClaimResult: B,
                            onLinked: () => {
                              ;((P.current = !0), I(null), M(!0))
                            },
                          }),
                    }),
                  })
                : null),
            (f[43] = g),
            (f[44] = K),
            (f[45] = N),
            (f[46] = B),
            (f[47] = V),
            (f[48] = x),
            (f[49] = h))
          : (h = f[49]),
        f[50] !== u || f[51] !== h
          ? ((p = (0, n.jsxs)(n.Fragment, { children: [u, h] })), (f[50] = u), (f[51] = h), (f[52] = p))
          : (p = f[52]),
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
          onBlockedSenders: _,
          onSettings: S,
          onRemove: C,
        } = e,
        M = (0, l.gh)(w.u)
      ;(x[0] !== b
        ? ((t = (0, n.jsx)(V.ms.SectionLabel, {
            children: (0, n.jsx)("span", { className: "break-all select-text", children: b }),
          })),
          (x[0] = b),
          (x[1] = t))
        : (t = x[1]),
        x[2] !== b || x[3] !== M
          ? ((a = (e) => {
              ;(0, Z.E)(b, e).then((e) => {
                e &&
                  M.get(Y.Id).info(
                    (0, n.jsx)(c.A, {
                      id: "orbit.email.actions.addressCopied",
                      defaultMessage: "Email address copied",
                      description: "Confirmation after copying the dot’s email address from the channel menu",
                    }),
                  )
              })
            }),
            (x[2] = b),
            (x[3] = M),
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
          ? ((r = (0, n.jsx)(V.ms.Item, { leftIconAsset: L.u, onClick: a, children: i })), (x[6] = a), (x[7] = r))
          : (r = x[7]))
      let N = `mailto:${encodeURIComponent(b)}`
      return (
        x[8] !== b || x[9] !== j
          ? ((o = (e) => {
              ;(j(!1), (0, Q.PQ)({ event: e, href: `mailto:${encodeURIComponent(b)}`, initiator: "side_panel_menu" }))
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
        x[12] !== N || x[13] !== o
          ? ((u = (0, n.jsx)(V.ms.Item, { leftIconAsset: O.C, href: N, onClick: o, children: d })),
            (x[12] = N),
            (x[13] = o),
            (x[14] = u))
          : (u = x[14]),
        x[15] !== _
          ? ((m =
              null != _
                ? (0, n.jsx)(V.ms.Item, { onSelect: _, children: (0, n.jsx)(c.A, { ...eh.blockedSenders }) })
                : null),
            (x[15] = _),
            (x[16] = m))
          : (m = x[16]),
        x[17] !== S
          ? ((h =
              null != S ? (0, n.jsx)(V.ms.Item, { onSelect: S, children: (0, n.jsx)(c.A, { ...eh.settings }) }) : null),
            (x[17] = S),
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
          ? ((g = (0, n.jsx)(V.ms.Item, { leftIconAsset: D.N, tone: "destructive", onSelect: C, children: f })),
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
        f = (0, s.c)(31)
      f[0] !== e
        ? (({ email: a, mode: r, isLoading: l, isError: o, disabled: t, title: d, ...i } = e),
          (f[0] = e),
          (f[1] = t),
          (f[2] = a),
          (f[3] = i),
          (f[4] = r),
          (f[5] = l),
          (f[6] = o),
          (f[7] = d))
        : ((t = f[1]), (a = f[2]), (i = f[3]), (r = f[4]), (l = f[5]), (o = f[6]), (d = f[7]))
      let g = void 0 === r ? "section" : r,
        v = void 0 !== l && l,
        x = void 0 !== o && o,
        b = (0, m.A)(),
        y = v || x || a?.status !== "linked" ? void 0 : a,
        j = d,
        A = i["aria-label"]
      if ("shortcut" === g && v) {
        let e
        ;(f[8] !== b || f[9] !== d
          ? ((e = d ?? b.formatMessage(eh.loading)), (f[8] = b), (f[9] = d), (f[10] = e))
          : (e = f[10]),
          (j = e))
      } else if ("shortcut" === g && x) {
        let e
        ;(f[11] !== b || f[12] !== d
          ? ((e = d ?? b.formatMessage(eh.unavailable)), (f[11] = b), (f[12] = d), (f[13] = e))
          : (e = f[13]),
          (j = e))
      } else if ("shortcut" === g && y?.email_address) {
        let e
        ;((j = d ?? y.email_address),
          f[14] !== A || f[15] !== b || f[16] !== y
            ? ((e =
                A ??
                b.formatMessage(
                  {
                    id: "restricted.aeon.email.shortcut.addressLabel",
                    defaultMessage: "Email: {emailAddress}",
                    description:
                      "Accessible label for the button opening the agent's linked email menu. emailAddress is the full email address.",
                  },
                  { emailAddress: y.email_address },
                )),
              (f[14] = A),
              (f[15] = b),
              (f[16] = y),
              (f[17] = e))
            : (e = f[17]),
          (A = e))
      }
      if ("shortcut" === g) {
        let e
        ;(f[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, {
              id: "restricted.aeonMessaging.emailShortcut",
              defaultMessage: "Email",
              description: "Button opening the dot's email settings",
            })),
            (f[18] = e))
          : (e = f[18]),
          (u = e))
      } else if (v) {
        let e
        ;(f[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...eh.loading })), (f[19] = e))
          : (e = f[19]),
          (u = e))
      } else if (x) {
        let e
        ;(f[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...eh.unavailable })), (f[20] = e))
          : (e = f[20]),
          (u = e))
      } else if (a?.status === "linked") u = a.email_address
      else {
        let e
        ;(f[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...eh.setup })), (f[21] = e))
          : (e = f[21]),
          (u = e))
      }
      let w = "setup" === g ? "section" : g
      f[22] === Symbol.for("react.memo_cache_sentinel") ? ((h = (0, n.jsx)(K.VDi, {})), (f[22] = h)) : (h = f[22])
      let k = t || v
      return (
        f[23] !== A || f[24] !== v || f[25] !== u || f[26] !== i || f[27] !== j || f[28] !== w || f[29] !== k
          ? ((p = (0, n.jsx)(ee.R, {
              ...i,
              title: j,
              mode: w,
              icon: h,
              disabled: k,
              loading: v,
              "aria-busy": v,
              "aria-label": A,
              children: u,
            })),
            (f[23] = A),
            (f[24] = v),
            (f[25] = u),
            (f[26] = i),
            (f[27] = j),
            (f[28] = w),
            (f[29] = k),
            (f[30] = p))
          : (p = f[30]),
        p
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
        u = (0, l._U)(P.D0, i)
      return (
        a[0] !== i || a[1] !== u || a[2] !== c || a[3] !== d
          ? ((t = u && null != i ? (0, n.jsx)(eM, { conversationId: i, layout: c, showActivityStatus: d }) : null),
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
        a = (0, s.c)(5),
        { conversationId: i, mode: r, onSetup: l } = e,
        o = void 0 === r ? "content" : r,
        c = eT(i)
      return (
        a[0] !== i || a[1] !== c || a[2] !== o || a[3] !== l
          ? ((t = (0, n.jsx)(eo, { conversationId: i, isArchived: c, mode: o, onSetup: l })),
            (a[0] = i),
            (a[1] = c),
            (a[2] = o),
            (a[3] = l),
            (a[4] = t))
          : (t = a[4]),
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
      let d = { duration: 0.15 * !(0, l.Ul)(k.x), ease: S.Wu },
        u = (0, n.jsxs)("div", {
          className: "flex min-w-0 items-center gap-token-button-composer-gap select-none",
          children: [
            (0, n.jsx)(_.x.ItemLeading, {
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
        : (0, n.jsx)(_.x.Section, { sectionKey: "aeon-identity", mode: "headerless", children: u })
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
    function e_(e) {
      let t,
        a,
        i,
        r = (0, s.c)(10),
        { conversationId: d, pauseResumeAction: u } = e,
        m = (0, l._U)(I.kt, d)
      r[0] !== d ? ((t = (e) => (0, N.sQ)(d, e)), (r[0] = d), (r[1] = t)) : (t = r[1])
      let h = t
      r[2] !== d ? ((a = () => (0, N.tJ)(d)), (r[2] = d), (r[3] = a)) : (a = r[3])
      let p = a,
        f = (0, o.useSyncExternalStore)(h, p, eS)
      if (m) {
        let e, t
        return (
          r[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, { ...M.A.adminPaused })), (r[4] = e))
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
    function eS() {
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
            ? ((e = (0, n.jsx)(T.J, { ...r, className: "leading-5 text-tertiary", statusLabel: i })),
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
    function eM(e) {
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
        x = eT(h),
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
    let eN = (0, l.i1)(w.u, (e, { get: t }) => {
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
        d = (0, l._U)(eN, o),
        u = eT(o),
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
          ? ((i = (0, n.jsx)(eP, {
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
    function eT(e) {
      let t = (0, l._U)(y.u4, e),
        a = (0, b.zy)()
      return t || a.state?.archivedConversationPreview === !0
    }
    function eP(e) {
      let t,
        a,
        i,
        r = (0, s.c)(18),
        { conversationId: c, liveActivityLabel: d, isActive: u, isPaused: m, pauseResumeAction: h } = e,
        p = (0, l.gh)(w.u),
        [f, g] = (0, o.useState)(null),
        v = (0, l._U)(y.P$, c),
        x = (0, l._U)(N.zf, c),
        b = (0, l._U)(P.DL, u && null != f ? null : c),
        j = (0, l._U)(N.Tu, c),
        A = (0, l._U)(N.rM, c),
        k = b ?? x ?? v
      if (
        (null == f && null != k && g(k),
        r[0] !== c || r[1] !== x || r[2] !== v || r[3] !== p
          ? ((t = () => {
              null == x && null != v && (0, N.dG)(p, c, v)
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
            ? ((e = (0, n.jsx)(e_, { conversationId: c, pauseResumeAction: h })), (r[6] = c), (r[7] = h), (r[8] = e))
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
      l = a("GO7r"),
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
      r = a("ygO2"),
      l = a("RNul"),
      o = a("IIZn"),
      c = a("lBcl")
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
            x = (0, s.c)(22)
          x[0] !== e
            ? (({ children: t, icon: a, iconVariant: d, iconOnly: h, mode: u, loading: p, selectable: f, ...m } = e),
              (x[0] = e),
              (x[1] = t),
              (x[2] = a),
              (x[3] = d),
              (x[4] = u),
              (x[5] = m),
              (x[6] = h),
              (x[7] = p),
              (x[8] = f))
            : ((t = x[1]), (a = x[2]), (d = x[3]), (u = x[4]), (m = x[5]), (h = x[6]), (p = x[7]), (f = x[8]))
          let b = void 0 !== h && h,
            y = void 0 !== p && p,
            j = void 0 !== f && f
          x[9] !== t ||
          x[10] !== a ||
          x[11] !== b ||
          x[12] !== d ||
          x[13] !== y ||
          x[14] !== u ||
          x[15] !== m ||
          x[16] !== j
            ? ((g =
                "shortcut" === u
                  ? (0, n.jsxs)(r.$, {
                      ...m,
                      className: b ? void 0 : "w-full justify-center only:col-span-full",
                      allowShrink: !0,
                      uniform: b,
                      color: "secondary",
                      size: "dialogGhost",
                      radius: "large",
                      loading: y,
                      children: [!y && a, b ? (0, n.jsx)("span", { className: "sr-only", children: t }) : t],
                    })
                  : (0, n.jsxs)(c.x.ItemButton, {
                      ...m,
                      className: "select-none",
                      children: [
                        (0, n.jsx)(o.F, { mode: u, variant: d, children: a }),
                        (0, n.jsx)(c.x.ItemLabel, {
                          className: j ? "text-fade-truncate leading-5 select-text" : "leading-5 select-none",
                          truncate: !j,
                          children: t,
                        }),
                        y ? (0, n.jsx)(c.x.ItemMeta, { variant: "icon", children: (0, n.jsx)(l.y, {}) }) : null,
                      ],
                    })),
              (x[9] = t),
              (x[10] = a),
              (x[11] = b),
              (x[12] = d),
              (x[13] = y),
              (x[14] = u),
              (x[15] = m),
              (x[16] = j),
              (x[17] = g))
            : (g = x[17])
          let A = g
          return (
            x[18] !== A || x[19] !== t || x[20] !== b
              ? ((v = b ? (0, n.jsx)(i.m, { content: t, children: A }) : A),
                (x[18] = A),
                (x[19] = t),
                (x[20] = b),
                (x[21] = v))
              : (v = x[21]),
            v
          )
        },
      },
    )
  },
  PXl7(e, t, a) {
    a.d(t, { g: () => M })
    var n = a("ABep"),
      s = a("QosV")
    let i = (0, a("nkTT").a)({
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
      body: '<path d="M12.1338 2.58374C13.5787 2.58399 14.7499 3.75502 14.75 5.19995V10.8005C14.7498 12.2453 13.5786 13.4165 12.1338 13.4167H3.86621C2.42143 13.4165 1.25025 12.2453 1.25 10.8005V5.19995C1.25007 3.75502 2.42132 2.58399 3.86621 2.58374H12.1338ZM9.21094 9.39526C8.49348 9.92057 7.52125 9.93193 6.79102 9.42456L2.75 6.61499V10.8005C2.75025 11.4169 3.24985 11.9165 3.86621 11.9167H12.1338C12.7501 11.9165 13.2498 11.4169 13.25 10.8005V6.43628L9.21094 9.39526ZM3.86621 4.08374C3.37879 4.08393 2.96467 4.39632 2.8125 4.83179L7.64746 8.19312C7.85189 8.33483 8.12447 8.33232 8.3252 8.1853L13.0938 4.69116C13.1019 4.68521 13.1099 4.67916 13.1182 4.67358C12.9301 4.32263 12.5599 4.08391 12.1338 4.08374H3.86621Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var r = a("E0ue"),
      l = a("on57"),
      o = a("zTeN"),
      c = a("zd8w"),
      d = a("Wf1j"),
      u = a("oyxz"),
      m = a("ygO2"),
      h = a("uuN8"),
      p = a("Ot7V"),
      f = a("HOLv"),
      g = a("GO7r"),
      v = a("qlCY"),
      x = a("m22M"),
      b = a("gdZA"),
      y = a("amW0"),
      j = a("aepO"),
      A = a("jTFC"),
      w = a("q3j5"),
      k = a("TMjP"),
      _ = a("mpp1"),
      S = a("PI8O"),
      C = a("MQ9r")
    function M(e) {
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
      let M = t
      return (
        g[2] !== M || g[3] !== v || g[4] !== b || g[5] !== C || g[6] !== x || g[7] !== A
          ? ((a =
              "text" === x
                ? (0, n.jsx)(_.kQ, {
                    description: null,
                    children: (0, n.jsx)(S.S, { destination: b, conversationId: v }),
                  })
                : (A ?? (0, n.jsx)(T, { conversationId: v, method: x, recipient: C ? M : b }))),
            (g[2] = M),
            (g[3] = v),
            (g[4] = b),
            (g[5] = C),
            (g[6] = x),
            (g[7] = A),
            (g[8] = a))
          : (a = g[8]),
        g[9] !== M || g[10] !== C || g[11] !== k
          ? ((i = C ? (0, n.jsx)(I, { id: k, recipient: M }) : null), (g[9] = M), (g[10] = C), (g[11] = k), (g[12] = i))
          : (i = g[12]),
        g[13] !== v || g[14] !== b || g[15] !== x
          ? ((r = "text" === x ? (0, n.jsx)(S.U, { destination: b, conversationId: v }) : null),
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
                        { buttonText: !0, showIcon: !1, renderButton: N, onCopy: (e) => (0, j.E)(b, e) },
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
    function N(e) {
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
    function T(e) {
      var t
      let a,
        c,
        m,
        h,
        p,
        j,
        _,
        S,
        M,
        N,
        I,
        T,
        P,
        R,
        U,
        B,
        E,
        z,
        O,
        L = (0, s.c)(41),
        { conversationId: D, method: q, recipient: F } = e,
        G = (0, d.A)(),
        $ = (0, o._U)(x.N, D),
        H = (0, o._U)(b.zQ, D),
        V = H ?? $,
        Q = G.formatMessage(y.z),
        K = null == V || (0, w.x)(V) || (null == H && V === Q) ? "dot" : V,
        W = (0, o._U)(k.T, D)
      L[0] !== q || L[1] !== F
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
          (L[0] = q),
          (L[1] = F),
          (L[2] = a))
        : (a = L[2])
      let Y = a
      ;(L[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, l.A)(C.A.message, "border-default bg-surface shadow-sm")), (L[3] = c))
        : (c = L[3]),
        L[4] !== q
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
            (L[4] = q),
            (L[5] = m))
          : (m = L[5]),
        L[6] !== q
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
            (L[6] = q),
            (L[7] = h))
          : (h = L[7]),
        L[8] !== q
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
            (L[8] = q),
            (L[9] = p))
          : (p = L[9]),
        L[10] !== m || L[11] !== h || L[12] !== p
          ? ((j = (0, n.jsxs)("div", { className: C.A.messageHeading, children: [m, h, p] })),
            (L[10] = m),
            (L[11] = h),
            (L[12] = p),
            (L[13] = j))
          : (j = L[13]),
        L[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, n.jsx)("span", {
              className: (0, l.A)(C.A.messageSend, "shrink-0 rounded-full bg-primary-solid text-primary-solid"),
              children: (0, n.jsx)(u.A, {
                id: "restricted.aeon.contact.preview.sendMessage",
                defaultMessage: "Send message",
                description:
                  "Decorative send label in the miniature email, Slack, or Teams composer; it is not a real action",
              }),
            })),
            (L[14] = _))
          : (_ = L[14]),
        L[15] !== j
          ? ((S = (0, n.jsxs)("div", { className: C.A.messageHeader, children: [j, _] })), (L[15] = j), (L[16] = S))
          : (S = L[16]),
        L[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, l.A)(C.A.messageRecipients, "text-tertiary")),
            (M = (0, n.jsx)(u.A, {
              id: "restricted.aeon.contact.preview.to",
              defaultMessage: "To",
              description: "Recipient label in a decorative email, Slack, or Microsoft Teams message preview",
            })),
            (N = (0, l.A)(C.A.messageRecipient, "rounded-full border-default")),
            (L[17] = M),
            (L[18] = N),
            (L[19] = I))
          : ((M = L[17]), (N = L[18]), (I = L[19])))
      let Z = W?.avatar ?? null
      return (
        L[20] !== D || L[21] !== Z
          ? ((T = (0, n.jsx)(A.X, { className: C.A.messageAvatar, avatar: Z, identity: D })),
            (L[20] = D),
            (L[21] = Z),
            (L[22] = T))
          : (T = L[22]),
        L[23] !== Y
          ? ((P = (0, n.jsx)("span", { className: "truncate text-default", children: Y })), (L[23] = Y), (L[24] = P))
          : (P = L[24]),
        L[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, n.jsx)("span", { className: C.A.messageRemove, children: (0, n.jsx)(g.Gmf, {}) })), (L[25] = R))
          : (R = L[25]),
        L[26] !== T || L[27] !== P
          ? ((U = (0, n.jsxs)("span", { className: N, children: [T, P, R] })), (L[26] = T), (L[27] = P), (L[28] = U))
          : (U = L[28]),
        L[29] !== q
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
            (L[29] = q),
            (L[30] = B))
          : (B = L[30]),
        L[31] !== U || L[32] !== B
          ? ((E = (0, n.jsxs)("div", { className: I, children: [M, U, B] })), (L[31] = U), (L[32] = B), (L[33] = E))
          : (E = L[33]),
        L[34] !== K || L[35] !== q
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
                              values: { name: K },
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
            (L[34] = K),
            (L[35] = q),
            (L[36] = z))
          : (z = L[36]),
        L[37] !== E || L[38] !== z || L[39] !== S
          ? ((O = (0, n.jsx)("div", {
              className:
                "h-55.5 min-w-0 shrink-0 overflow-hidden rounded-2xl bg-text/5 px-6 text-start select-none @max-xs/contact-setup:h-88",
              "aria-hidden": !0,
              inert: !0,
              children: (0, n.jsx)("div", {
                className: "flex h-full min-w-0 items-center justify-center",
                children: (0, n.jsxs)("div", { className: c, children: [S, E, z] }),
              }),
            })),
            (L[37] = E),
            (L[38] = z),
            (L[39] = S),
            (L[40] = O))
          : (O = L[40]),
        O
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
  mpp1(e, t, a) {
    a.d(t, { mz: () => u, MV: () => m, kQ: () => d })
    var n = a("ABep"),
      s = a("QosV")
    let i = (0, a("nkTT").a)({
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
      l = a("ygO2"),
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
    a.d(t, { U: () => C, S: () => S })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("taIy"),
      r = a("zTeN"),
      l = a("Wf1j"),
      o = a("oyxz"),
      c = a("ygO2"),
      d = a("uuN8"),
      u = a("Ot7V"),
      m = a("GO7r"),
      h = a("XYHU"),
      p = a("gdZA"),
      f = a("aepO"),
      g = a("FPUb"),
      v = a("Yn57"),
      x = a("taWv"),
      b = a("AO3k"),
      y = a("tLM7"),
      j = a("zHp1")
    let A = (0, x.Qt)()
    function w(e) {
      let t,
        a,
        i,
        l = (0, s.c)(19),
        { value: o, ariaLabel: c, conversationId: d } = e,
        u = (0, r._U)(null == d ? null : y.i1, d),
        m = u?.kind === "snapshot" && null == u.inlineSrc
      l[0] !== m ? ((t = { enabled: m }), (l[0] = m), (l[1] = t)) : (t = l[1])
      let { src: h } = (0, j.vM)(u?.kind === "snapshot" ? u.assetPointer : "", A, t)
      if (u?.kind === "image") {
        let e,
          t = u.src === v
        ;(l[2] !== u.src || l[3] !== t
          ? ((e = { src: u.src, fillSilhouette: t }), (l[2] = u.src), (l[3] = t), (l[4] = e))
          : (e = l[4]),
          (a = e))
      } else if (u?.kind === "snapshot") {
        let e,
          t = u.inlineSrc ?? h ?? u.fallbackSrc,
          n = t === v
        ;(l[5] !== t || l[6] !== n
          ? ((e = { src: t, fillSilhouette: n }), (l[5] = t), (l[6] = n), (l[7] = e))
          : (e = l[7]),
          (a = e))
      } else if (u?.kind === "pet") {
        let e, t, n
        l[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, g._s)("idle", !0)), (l[8] = e)) : (e = l[8])
        let s = e.frames[0],
          i = g.Pq.columns,
          r = u.spriteRowCount ?? g.Pq.rows,
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
          ? ((i = (0, n.jsx)(b.v, { value: o, ariaLabel: c, size: "compact", portrait: a, fallback: null })),
            (l[15] = c),
            (l[16] = a),
            (l[17] = o),
            (l[18] = i))
          : (i = l[18]),
        i
      )
    }
    var k = a("q3j5")
    function _(e, t, a, n) {
      let s = null == a || (0, k.x)(a) ? "dot" : a.trim(),
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
    function S(e) {
      let t,
        a,
        c,
        u,
        h,
        g,
        v,
        x,
        b,
        y,
        j,
        A,
        k,
        S,
        C = (0, s.c)(44),
        { destination: M, orbitName: N, conversationId: I } = e,
        T = (0, l.A)(),
        P = (0, r._U)(p.zQ, I)
      if (C[0] !== I || C[1] !== M || C[2] !== T || C[3] !== N || C[4] !== P) {
        let e,
          s,
          r = (0, i.l)(M),
          l = N ?? P
        C[14] !== M || C[15] !== T || C[16] !== l
          ? ((e = _(T, M, l, "qr")), (C[14] = M), (C[15] = T), (C[16] = l), (C[17] = e))
          : (e = C[17])
        let d = e
        ;((x = "flex min-w-0 flex-col items-center gap-3"),
          C[18] !== T
            ? ((s = T.formatMessage(
                {
                  id: "restricted.aeon.messaging.textQrCode.label.productName",
                  defaultMessage: "QR code to text your {dot}",
                  description:
                    "Accessible label for a QR code that opens a message addressed to the user's dot. It does not send a message. The dot placeholder is the untranslated term for the user's agent.",
                },
                { dot: "dot" },
              )),
              (C[18] = T),
              (C[19] = s))
            : (s = C[19]),
          C[20] !== I || C[21] !== d || C[22] !== s
            ? ((b = (0, n.jsx)(w, { value: d, ariaLabel: s, conversationId: I })),
              (C[20] = I),
              (C[21] = d),
              (C[22] = s),
              (C[23] = b))
            : (b = C[23]),
          (v = "text-sm text-secondary select-none"),
          (t = o.A),
          (u = "restricted.aeon.messaging.textQrCode.scanToText.productName"),
          (h = "Scan the QR code to text your {dot} at <number>{phoneNumber}</number>"),
          (g =
            "Instruction to scan a QR code to text the user's agent. dot is the untranslated product name. phoneNumber is the destination to text, not the user's verified phone number; the number tag masks it in session recordings."),
          (a = "dot"),
          (c = r?.countryCallingCode === "1" ? `+1 ${r.formatNational()}` : (r?.formatInternational() ?? M)),
          (C[0] = I),
          (C[1] = M),
          (C[2] = T),
          (C[3] = N),
          (C[4] = P),
          (C[5] = t),
          (C[6] = a),
          (C[7] = c),
          (C[8] = u),
          (C[9] = h),
          (C[10] = g),
          (C[11] = v),
          (C[12] = x),
          (C[13] = b))
      } else
        ((t = C[5]), (a = C[6]), (c = C[7]), (u = C[8]), (h = C[9]), (g = C[10]), (v = C[11]), (x = C[12]), (b = C[13]))
      return (
        C[24] !== M || C[25] !== T
          ? ((y = (e) =>
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
                      ariaLabel: T.formatMessage({
                        id: "restricted.aeon.messaging.textQrCode.copyPhoneNumber",
                        defaultMessage: "Copy phone number",
                        description:
                          "Accessible label for the icon button beside the dot's phone number that copies it to the clipboard",
                      }),
                      icons: { copy: (0, n.jsx)(m.R3B, {}), copied: (0, n.jsx)(m.ALZ, {}) },
                      onCopy: (e) => (0, f.E)(M, e),
                    }),
                  ],
                },
                "phone-number",
              )),
            (C[24] = M),
            (C[25] = T),
            (C[26] = y))
          : (y = C[26]),
        C[27] !== a || C[28] !== c || C[29] !== y
          ? ((j = { dot: a, phoneNumber: c, number: y }), (C[27] = a), (C[28] = c), (C[29] = y), (C[30] = j))
          : (j = C[30]),
        C[31] !== t || C[32] !== j || C[33] !== u || C[34] !== h || C[35] !== g
          ? ((A = (0, n.jsx)(t, { id: u, defaultMessage: h, description: g, values: j })),
            (C[31] = t),
            (C[32] = j),
            (C[33] = u),
            (C[34] = h),
            (C[35] = g),
            (C[36] = A))
          : (A = C[36]),
        C[37] !== A || C[38] !== v
          ? ((k = (0, n.jsx)("p", { className: v, children: A })), (C[37] = A), (C[38] = v), (C[39] = k))
          : (k = C[39]),
        C[40] !== k || C[41] !== x || C[42] !== b
          ? ((S = (0, n.jsxs)("div", { className: x, children: [b, k] })),
            (C[40] = k),
            (C[41] = x),
            (C[42] = b),
            (C[43] = S))
          : (S = C[43]),
        S
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
              children: (0, n.jsx)(M, { destination: r, orbitName: l, conversationId: o, size: u }),
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
    function M(e) {
      let t,
        a,
        i,
        d,
        m = (0, s.c)(17),
        { destination: g, orbitName: v, conversationId: x, size: b } = e,
        y = void 0 === b ? "detailAction" : b,
        j = (0, l.A)(),
        A = (0, r._U)(p.zQ, x),
        w = v ?? A
      m[0] !== g || m[1] !== j || m[2] !== w
        ? ((t = _(j, g, w, "messages")), (m[0] = g), (m[1] = j), (m[2] = w), (m[3] = t))
        : (t = m[3])
      let k = t
      if ("macOS" !== (0, h.tR)()) {
        let e, t, a
        return (
          m[4] !== g ? ((e = (e) => void (0, f.E)(g, e)), (m[4] = g), (m[5] = e)) : (e = m[5]),
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
      i = a("lBcl")
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
  E0ue(e, t, a) {
    let n = (0, a("nkTT").a)({
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
//# sourceMappingURL=920910.8d98fd9b96.js.map
