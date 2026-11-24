export const __rspack_esm_ids = [305126]
export const __webpack_modules__ = {
  jvpl(e, t) {
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
  lKhb(e, t, a) {
    a.d(t, { AeonAppearancePicker: () => eo })
    var n = a("ABep"),
      s = a("QosV"),
      r = a("qmMi"),
      l = a("Wf1j"),
      i = a("Ywss"),
      o = a("tl5a"),
      c = a("SPnB"),
      d = a("SGsN"),
      u = a("m22M"),
      m = a("kB0c"),
      h = a("OWtl"),
      p = a("tSEg"),
      f = a("WFY2"),
      x = a("kpIY"),
      g = a("NInz"),
      v = a("T0Rc"),
      y = a("on57"),
      b = a("zd8w"),
      j = a("oyxz"),
      A = a("E8Sp"),
      w = a("Kwur"),
      _ = a("Sm6l"),
      S = a("JNtf"),
      C = a("mUDD"),
      k = a("HOLv"),
      M = a("zLIa"),
      I = a("T1PX"),
      N = a("W4GL"),
      T = a("H3bB"),
      P = a("hTGv"),
      R = a("e7sX"),
      U = a("SPXR"),
      z = a("S5Rb"),
      B = a("oz6U"),
      q = a("jTFC"),
      D = a("IIBl"),
      E = a("jPCa"),
      G = a("z8vb"),
      F = a("MVXB"),
      L = a("Qgfj"),
      O = a("avF5")
    let $ = (0, L.YK)({
      sunglasses: {
        id: "restricted.aeonAppearancePicker.avatar.sunglasses",
        defaultMessage: "Use the sunglasses avatar",
      },
      "bow-tie": { id: "restricted.aeonAppearancePicker.avatar.bow-tie", defaultMessage: "Use the bow tie avatar" },
      "balancing-ball": {
        id: "restricted.aeonAppearancePicker.avatar.balancing-ball",
        defaultMessage: "Use the blossom avatar",
      },
      cowboy: { id: "restricted.aeonAppearancePicker.avatar.cowboy", defaultMessage: "Use the cowboy hat avatar" },
      beanie: { id: "restricted.aeonAppearancePicker.avatar.beanie", defaultMessage: "Use the beanie avatar" },
      mustache: { id: "restricted.aeonAppearancePicker.avatar.mustache", defaultMessage: "Use the red avatar" },
      pirate: { id: "restricted.aeonAppearancePicker.avatar.pirate", defaultMessage: "Use the pirate avatar" },
      feather: { id: "restricted.aeonAppearancePicker.avatar.feather", defaultMessage: "Use the feather avatar" },
      monocle: { id: "restricted.aeonAppearancePicker.avatar.monocle", defaultMessage: "Use the monocle avatar" },
      "party-hat": {
        id: "restricted.aeonAppearancePicker.avatar.party-hat",
        defaultMessage: "Use the triangle avatar",
      },
      bowler: { id: "restricted.aeonAppearancePicker.avatar.bowler", defaultMessage: "Use the bowler hat avatar" },
      headphones: { id: "restricted.aeonAppearancePicker.avatar.headphones", defaultMessage: "Use the blob avatar" },
    })
    function H(e) {
      let t,
        a,
        r,
        i = (0, s.c)(14),
        { className: o, selected: c, onChange: d, compact: u, disabled: m, legacy: h } = e,
        p = void 0 !== u && u,
        f = void 0 !== m && m,
        x = void 0 !== h && h,
        g = (0, l.A)()
      ;(i[0] !== g
        ? ((t = g.formatMessage(
            {
              id: "restricted.aeonAppearancePicker.avatarGroup.productName.dot",
              defaultMessage: "Your {productName}\u2019s avatar",
            },
            { productName: "dot" },
          )),
          (i[0] = g),
          (i[1] = t))
        : (t = i[1]),
        i[2] !== p || i[3] !== g || i[4] !== x
          ? ((a = B.ID.map((e, t) => ({
              id: e,
              icon: (0, n.jsx)(q.Xm, { className: p ? "size-full p-1" : "size-full", avatar: e }),
              label: x
                ? g.formatMessage(
                    { id: "restricted.aeonAppearancePicker.legacyAvatar", defaultMessage: "Use avatar {number}" },
                    { number: t + 1 },
                  )
                : g.formatMessage($[e]),
            }))),
            (i[2] = p),
            (i[3] = g),
            (i[4] = x),
            (i[5] = a))
          : (a = i[5]))
      let v = "pet" === c ? null : c
      return (
        i[6] !== o || i[7] !== p || i[8] !== f || i[9] !== d || i[10] !== t || i[11] !== a || i[12] !== v
          ? ((r = (0, n.jsx)(O.f, {
              className: o,
              "aria-label": t,
              variant: "artwork",
              fillArtwork: p,
              disabled: f,
              options: a,
              selectedId: v,
              onChange: d,
            })),
            (i[6] = o),
            (i[7] = p),
            (i[8] = f),
            (i[9] = d),
            (i[10] = t),
            (i[11] = a),
            (i[12] = v),
            (i[13] = r))
          : (r = i[13]),
        r
      )
    }
    var Q = a("q3j5"),
      V = a("Te26"),
      W = a("TMjP"),
      K = a("liTb"),
      Z = a("zKtf")
    function Y(e) {
      let t,
        a,
        i,
        o,
        d,
        u,
        m,
        p,
        f,
        x,
        L,
        O,
        $,
        Y,
        ea,
        en,
        es,
        er,
        el,
        ei,
        eo,
        ec,
        ed,
        eu,
        em,
        eh,
        ep,
        ef,
        ex,
        eg,
        ev,
        ey,
        eb = (0, s.c)(221),
        {
          ref: ej,
          appearance: eA,
          name: ew,
          namePending: e_,
          identity: eS,
          petId: eC,
          orbitId: ek,
          characterConversationId: eM,
          onSave: eI,
          variant: eN,
          disabled: eT,
          readOnly: eP,
          readOnlyName: eR,
          onClose: eU,
          defaultOpen: ez,
          triggerContent: eB,
          onCloseAutoFocus: eq,
          onTrigger: eD,
        } = e,
        eE = void 0 === eS ? "orbit-draft" : eS,
        eG = void 0 === eN ? "toolbar" : eN,
        eF = void 0 !== eT && eT,
        eL = void 0 !== eP && eP,
        eO = void 0 !== eR && eR,
        e$ = void 0 !== ez && ez,
        eH = (0, r.gh)(h.u),
        eQ = (0, b.useContext)(U.Zt),
        eV = null == eQ ? P.Oz : P.iE,
        eW = (0, l.A)(),
        eK = (0, b.useId)(),
        eZ = (0, b.useId)(),
        eY = null == ew || (0, Q.x)(ew) ? "dot" : ew
      eb[0] !== eA || eb[1] !== e$ || eb[2] !== eU
        ? ((t = () => (e$ || null != eU ? { appearance: eA, name: null } : null)),
          (eb[0] = eA),
          (eb[1] = e$),
          (eb[2] = eU),
          (eb[3] = t))
        : (t = eb[3])
      let [eJ, eX] = (0, b.useState)(t),
        e1 = eJ?.name ?? eY,
        [e0, e2] = (0, b.useState)(!1),
        [e3, e5] = (0, b.useState)(null),
        [e4, e6] = (0, b.useState)(!1),
        [e8, e9] = (0, b.useState)(!1),
        e7 = (0, r.Ul)(c.chatGptAuthenticatedAccountId$),
        te = (0, r.Ul)(c.chatGptAuthenticatedUserId$),
        tt = (0, r.Ul)(V.G)
      eb[4] !== e1
        ? ((a = Array.from((i = e1.trim())).length > 24 || i.includes("\\")), (eb[4] = e1), (eb[5] = a), (eb[6] = i))
        : ((a = eb[5]), (i = eb[6]))
      let ta = a,
        tn = i.length > 0 && !ta,
        ts = null != ek && !eO && i !== eY,
        tr = null != eJ && !eF && !eL && ts && tn && !e8
      ;(eb[7] !== e7 || eb[8] !== ek || eb[9] !== i || eb[10] !== te
        ? ((o = ["cloud-aeon-name-moderation", e7, te, ek, i]),
          (eb[7] = e7),
          (eb[8] = ek),
          (eb[9] = i),
          (eb[10] = te),
          (eb[11] = o))
        : (o = eb[11]),
        eb[12] !== e7 || eb[13] !== i || eb[14] !== te
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
                let r = await w.Request.safePost("/tbo/name/validate", {
                  requestBody: { name: e },
                  additionalHeaders: { "ChatGPT-Account-ID": t },
                  expectedIdentity: { accountId: t, userId: a },
                  expectedErrorStatuses: [400],
                  retry: !1,
                  signal: n,
                })
                if ((n.throwIfAborted(), r.name !== e)) throw Error("Name moderation returned a different name")
                return r.name
              })(i, e7, te, t)
            }),
            (eb[12] = e7),
            (eb[13] = i),
            (eb[14] = te),
            (eb[15] = d))
          : (d = eb[15]),
        eb[16] !== tr || eb[17] !== o || eb[18] !== d
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
            (eb[16] = tr),
            (eb[17] = o),
            (eb[18] = d),
            (eb[19] = u))
          : (u = eb[19]))
      let { data: tl, error: ti, isFetching: to, refetch: tc } = (0, v.I)(u, eH.queryClient)
      eb[20] !== ti || eb[21] !== to || eb[22] !== e3
        ? ((m = "name" === e3 || (!to && (0, D.ym)(ti))), (eb[20] = ti), (eb[21] = to), (eb[22] = e3), (eb[23] = m))
        : (m = eb[23])
      let td = m,
        tu = !td && (!ts || (tn && !e8 && (tt || (!to && (tl === i || null != ti)))))
      eb[24] !== e1 || eb[25] !== ek || eb[26] !== e3 || eb[27] !== i
        ? ((p = (e, t) => {
            let a = e.replace(/[\r\n]/g, ""),
              n = null == ek ? a : et(a),
              s = null == ek ? i : et(e1).trim(),
              r = t ? a : n
            ;(eX((e) => (null == e ? null : { ...e, name: r })),
              e6(null != ek && r.includes("\\")),
              ("name" !== e3 || n.trim() !== s) && e5(null))
          }),
          (eb[24] = e1),
          (eb[25] = ek),
          (eb[26] = e3),
          (eb[27] = i),
          (eb[28] = p))
        : (p = eb[28])
      let tm = p,
        th = (0, b.useRef)(null),
        tp = (0, b.useRef)(null),
        tf = (0, b.useRef)(null),
        tx = (0, b.useRef)(null),
        tg = (0, b.useRef)(null),
        tv = (0, b.useRef)(!1),
        ty = (0, I.I)(),
        tb = null == eQ
      eb[29] !== tb ? ((f = { afterAnimation: tb }), (eb[29] = tb), (eb[30] = f)) : (f = eb[30])
      let tj = (0, N.E)(f),
        [tA, tw] = (0, b.useState)(!1),
        t_ = (0, r._U)("orbit-draft" !== eE && W.r, eE),
        tS = null != eM && !t_,
        tC = tS && tt,
        tk = (0, r._U)(eJ?.appearance?.avatar === "pet" && null == eC ? E.Tr : null, eM ?? eE),
        tM = (0, r._U)(eA?.avatar === "pet" || eJ?.appearance?.avatar === "pet" ? E.Gn : null, eC),
        tI = null == eC ? tk?.pet : tM,
        tN = eJ?.pet === void 0 ? tI : eJ.pet,
        tT = eA?.avatar === "pet" ? tM : null,
        tP = eA?.avatar === "pet" && null != eC ? null : (eA?.avatar ?? null),
        tR = eJ?.appearance?.avatar === "pet" ? tN : null,
        tU = eJ?.appearance?.avatar === "pet" && null != eC ? null : (eJ?.appearance?.avatar ?? null),
        tz = eJ?.pet === void 0 && eJ?.appearance?.avatar === "pet" && eA?.avatar === "pet",
        tB = !(void 0 !== e_ && e_) && tu && (!tS || tz || (eJ?.appearance?.avatar === "pet" ? null != tN : tA)),
        tq = "profile" === eG || "hero" === eG,
        tD = "name" === eG || "compact-name" === eG
      eb[31] !== eE || eb[32] !== tP || eb[33] !== tT
        ? ((x =
            null != tT
              ? (0, n.jsx)(z.s, { pet: tT })
              : (0, n.jsx)(q.Xm, { className: "size-full", avatar: tP, identity: eE, animated: !1 })),
          (eb[31] = eE),
          (eb[32] = tP),
          (eb[33] = tT),
          (eb[34] = x))
        : (x = eb[34])
      let tE = x
      ;((eF || eL) && null != eJ && eX(null),
        eb[35] !== eA ||
        eb[36] !== eF ||
        eb[37] !== tS ||
        eb[38] !== tq ||
        eb[39] !== eU ||
        eb[40] !== ty ||
        eb[41] !== eG
          ? ((L = (e) => {
              ;(0, T.S)({
                source: e ? tx.current : tg.current,
                destination: () => (e ? tg.current : tx.current),
                reducedMotion: ty || !tv.current || (!tq && "compact" !== eG) || !tS,
                update: () => {
                  ;(eX(e && !eF ? { appearance: eA, name: null } : null), e5(null), e6(!1), e9(!1), tw(!1), e || eU?.())
                },
              })
            }),
            (eb[35] = eA),
            (eb[36] = eF),
            (eb[37] = tS),
            (eb[38] = tq),
            (eb[39] = eU),
            (eb[40] = ty),
            (eb[41] = eG),
            (eb[42] = L))
          : (L = eb[42]))
      let tG = L
      ;((eb[43] !== tG || eb[44] !== eF || eb[45] !== tS || eb[46] !== e0 || eb[47] !== eV || eb[48] !== eL
        ? ((O = () => ({
            open(e) {
              eF || eL || e0 || ((tv.current = e.detail > 0), (tf.current = e.currentTarget), tS && eV(), tG(!0))
            },
          })),
          (eb[43] = tG),
          (eb[44] = eF),
          (eb[45] = tS),
          (eb[46] = e0),
          (eb[47] = eV),
          (eb[48] = eL),
          (eb[49] = O))
        : (O = eb[49]),
      (0, b.useImperativeHandle)(ej, O),
      eb[50] !== tl ||
        eb[51] !== tG ||
        eb[52] !== tc ||
        eb[53] !== tN ||
        eb[54] !== tS ||
        eb[55] !== ti ||
        eb[56] !== ew ||
        eb[57] !== ts ||
        eb[58] !== eI ||
        eb[59] !== eO ||
        eb[60] !== i ||
        eb[61] !== tz)
        ? (($ = function (e) {
            return (
              e2(!0),
              e5(null),
              (ts && tl !== i && null == ti ? tc({ cancelRefetch: !1 }) : Promise.resolve(null))
                .then(async (t) => {
                  if (null != t) {
                    if ((0, D.ym)(t.error)) throw t.error
                    if (null == t.error && t.data !== i) return
                  }
                  ;(await (async function (e) {
                    if (tz) {
                      let t = await eI(e, i)
                      return (t && tS && th.current?.saveCustom(), t)
                    }
                    if (e?.avatar === "pet" && null != tN) {
                      let t = await eI(e, i, tN)
                      return (t && tS && th.current?.saveCustom(), t)
                    }
                    return tS
                      ? null != th.current && (await th.current.save(eO || i === ew ? void 0 : i), !0)
                      : eI(e, i)
                  })(e))
                    ? tG(!1)
                    : e5("save")
                })
                .catch((e) => {
                  e5((0, D.ym)(e) ? "name" : "save")
                })
                .finally(() => {
                  e2(!1)
                })
            )
          }),
          (eb[50] = tl),
          (eb[51] = tG),
          (eb[52] = tc),
          (eb[53] = tN),
          (eb[54] = tS),
          (eb[55] = ti),
          (eb[56] = ew),
          (eb[57] = ts),
          (eb[58] = eI),
          (eb[59] = eO),
          (eb[60] = i),
          (eb[61] = tz),
          (eb[62] = $))
        : ($ = eb[62]),
        eb[63] !== tB ||
        eb[64] !== eF ||
        eb[65] !== eJ ||
        eb[66] !== e1 ||
        eb[67] !== e0 ||
        eb[68] !== ew ||
        eb[69] !== ta ||
        eb[70] !== $ ||
        eb[71] !== i.length
          ? ((Y = function (e) {
              if ((e.preventDefault(), e1 !== ew && ta)) {
                e6(!0)
                let t = e.currentTarget.elements.namedItem("nickname")
                t instanceof HTMLElement && t.focus()
                return
              }
              null == eJ || e0 || eF || 0 === i.length || !tB || $(eJ.appearance)
            }),
            (eb[63] = tB),
            (eb[64] = eF),
            (eb[65] = eJ),
            (eb[66] = e1),
            (eb[67] = e0),
            (eb[68] = ew),
            (eb[69] = ta),
            (eb[70] = $),
            (eb[71] = i.length),
            (eb[72] = Y))
          : (Y = eb[72]))
      let tF = Y
      eb[73] !== eF ||
      eb[74] !== eW ||
      eb[75] !== e0 ||
      eb[76] !== eU ||
      eb[77] !== ek ||
      eb[78] !== eO ||
      eb[79] !== eH
        ? ((ea = function () {
            null == ek ||
              e0 ||
              eF ||
              eO ||
              (eX(null),
              eU?.(),
              eH
                .get(A.gM)
                .navigate((0, K.xP)(ek), {
                  state: { prefillPrompt: eW.formatMessage(F.ND), focusComposerNonce: Date.now() },
                }))
          }),
          (eb[73] = eF),
          (eb[74] = eW),
          (eb[75] = e0),
          (eb[76] = eU),
          (eb[77] = ek),
          (eb[78] = eO),
          (eb[79] = eH),
          (eb[80] = ea))
        : (ea = eb[80])
      let tL = ea
      eb[81] === Symbol.for("react.memo_cache_sentinel")
        ? ((en = (0, n.jsx)(j.A, {
            id: "restricted.aeonAppearancePicker.nameFormatError.limit",
            defaultMessage: "Use up to {limit} characters without backslashes",
            values: { limit: 24 },
          })),
          (eb[81] = en))
        : (en = eb[81])
      let tO = en
      eb[82] === Symbol.for("react.memo_cache_sentinel")
        ? ((es = (0, n.jsx)(j.A, { ...D.Bw.rejected })), (eb[82] = es))
        : (es = eb[82])
      let t$ = es,
        tH = e4 || td,
        tQ = null
      e4 ? (tQ = tO) : td ? (tQ = t$) : null == ek || eO || e8 || 24 !== Array.from(e1).length || (tQ = tO)
      let tV = tS ? M.TM : M.pd,
        tW = tS ? "sr-only" : "text-sm font-medium select-none"
      ;(eb[83] === Symbol.for("react.memo_cache_sentinel")
        ? ((er = (0, n.jsx)(j.A, { id: "restricted.aeonAppearancePicker.name", defaultMessage: "Nickname" })),
          (eb[83] = er))
        : (er = eb[83]),
        eb[84] !== eK || eb[85] !== tW
          ? ((el = (0, n.jsx)("label", { className: tW, htmlFor: eK, children: er })),
            (eb[84] = eK),
            (eb[85] = tW),
            (eb[86] = el))
          : (el = eb[86]),
        eb[87] !== eH
          ? ((ei = (e) => {
              null != e && eH.set(F.s_, !0)
            }),
            (eb[87] = eH),
            (eb[88] = ei))
          : (ei = eb[88]))
      let tK = tS ? "display" : "default",
        tZ = null != tQ ? eZ : void 0
      eb[89] !== eW
        ? ((eo = eW.formatMessage({
            id: "restricted.aeonAppearancePicker.namePlaceholder",
            defaultMessage: "Your dot",
          })),
          (eb[89] = eW),
          (eb[90] = eo))
        : (eo = eb[90])
      let tY = null == ek ? 24 : void 0,
        tJ = tS ? 1 : void 0
      ;(eb[91] !== e8 || eb[92] !== tm
        ? ((ec = (e) => tm(e.target.value, e8)), (eb[91] = e8), (eb[92] = tm), (eb[93] = ec))
        : (ec = eb[93]),
        eb[94] === Symbol.for("react.memo_cache_sentinel") ? ((ed = () => e9(!0)), (eb[94] = ed)) : (ed = eb[94]),
        eb[95] !== tm
          ? ((eu = (e) => {
              ;(e9(!1), tm(e.currentTarget.value, !1))
            }),
            (eb[95] = tm),
            (eb[96] = eu))
          : (eu = eb[96]),
        eb[97] !== tS
          ? ((em = (e) => {
              tS &&
                "Enter" === e.key &&
                !e.nativeEvent.isComposing &&
                (e.preventDefault(), e.currentTarget.form?.requestSubmit())
            }),
            (eb[97] = tS),
            (eb[98] = em))
          : (em = eb[98]),
        eb[99] === Symbol.for("react.memo_cache_sentinel")
          ? ((eh = (e) => {
              ;(e.preventDefault(), e6(!0), e.currentTarget.focus())
            }),
            (eb[99] = eh))
          : (eh = eb[99]),
        eb[100] !== tV ||
        eb[101] !== e1 ||
        eb[102] !== tH ||
        eb[103] !== e0 ||
        eb[104] !== eK ||
        eb[105] !== eO ||
        eb[106] !== ei ||
        eb[107] !== tK ||
        eb[108] !== tZ ||
        eb[109] !== eo ||
        eb[110] !== tY ||
        eb[111] !== tJ ||
        eb[112] !== ec ||
        eb[113] !== eu ||
        eb[114] !== em
          ? ((ep = (0, n.jsx)(tV, {
              id: eK,
              ref: ei,
              name: "nickname",
              variant: tK,
              "aria-describedby": tZ,
              "aria-invalid": tH,
              autoFocus: !0,
              onFocus: ee,
              value: e1,
              placeholder: eo,
              maxLength: tY,
              rows: tJ,
              readOnly: eO,
              disabled: e0,
              onChange: ec,
              onCompositionStart: ed,
              onCompositionEnd: eu,
              onKeyDown: em,
              onInvalid: eh,
            })),
            (eb[100] = tV),
            (eb[101] = e1),
            (eb[102] = tH),
            (eb[103] = e0),
            (eb[104] = eK),
            (eb[105] = eO),
            (eb[106] = ei),
            (eb[107] = tK),
            (eb[108] = tZ),
            (eb[109] = eo),
            (eb[110] = tY),
            (eb[111] = tJ),
            (eb[112] = ec),
            (eb[113] = eu),
            (eb[114] = em),
            (eb[115] = ep))
          : (ep = eb[115]),
        eb[116] !== tS || eb[117] !== tH || eb[118] !== tQ || eb[119] !== eZ
          ? ((ef =
              (!tS || null != tQ) &&
              (0, n.jsxs)("div", {
                className: "grid text-sm select-none",
                children: [
                  !tS &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("span", {
                          className: "invisible col-start-1 row-start-1",
                          "aria-hidden": !0,
                          children: tO,
                        }),
                        (0, n.jsx)("span", {
                          className: "invisible col-start-1 row-start-1",
                          "aria-hidden": !0,
                          children: t$,
                        }),
                      ],
                    }),
                  (0, n.jsx)("p", {
                    id: eZ,
                    className: (0, y.A)("col-start-1 row-start-1", tH ? "text-danger" : "text-secondary"),
                    role: tH ? "alert" : "status",
                    children: tQ,
                  }),
                ],
              })),
            (eb[116] = tS),
            (eb[117] = tH),
            (eb[118] = tQ),
            (eb[119] = eZ),
            (eb[120] = ef))
          : (ef = eb[120]),
        eb[121] !== el || eb[122] !== ep || eb[123] !== ef
          ? ((ex = (0, n.jsxs)(C.RW, { children: [el, ep, ef] })),
            (eb[121] = el),
            (eb[122] = ep),
            (eb[123] = ef),
            (eb[124] = ex))
          : (ex = eb[124]))
      let tX = ex
      if (
        eb[125] !== tB ||
        eb[126] !== eJ ||
        eb[127] !== tS ||
        eb[128] !== e0 ||
        eb[129] !== e3 ||
        eb[130] !== tC ||
        eb[131] !== i.length
      ) {
        let e, t, a, s
        eb[133] !== e3 || eb[134] !== tC
          ? ((e =
              (!tC || "save" === e3) &&
              (0, n.jsx)("p", {
                role: "alert",
                "aria-hidden": "save" !== e3,
                className: (0, y.A)("text-sm text-danger", { invisible: "save" !== e3 }),
                children: (0, n.jsx)(j.A, {
                  id: "restricted.aeonAppearancePicker.saveFailed",
                  defaultMessage: "Couldn\u2019t save your changes. Try again.",
                }),
              })),
            (eb[133] = e3),
            (eb[134] = tC),
            (eb[135] = e))
          : (e = eb[135])
        let r = tC ? "actionSm" : "dialog",
          l = e0 || 0 === i.length || !tB
        ;(eb[136] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(j.A, { id: "restricted.aeonAppearancePicker.save", defaultMessage: "Save" })),
            (eb[136] = t))
          : (t = eb[136]),
          eb[137] !== e0 || eb[138] !== r || eb[139] !== l
            ? ((a = (0, n.jsx)(_.$, {
                className: "justify-center",
                type: "submit",
                color: "primary",
                size: r,
                loading: e0,
                "aria-busy": e0,
                disabled: l,
                children: t,
              })),
              (eb[137] = e0),
              (eb[138] = r),
              (eb[139] = l),
              (eb[140] = a))
            : (a = eb[140]))
        let o =
          !tS &&
          (0, n.jsxs)(_.$, {
            className: "justify-center",
            type: "button",
            color: "secondary",
            size: "dialog",
            disabled: e0,
            onClick: function () {
              null != eJ && eX({ ...eJ, appearance: (0, B.hH)(eJ.appearance) })
            },
            children: [
              (0, n.jsx)(k.I, { asset: g.o }),
              (0, n.jsx)(j.A, { id: "restricted.aeonAppearancePicker.randomize", defaultMessage: "Randomize" }),
            ],
          })
        ;(eb[141] !== e || eb[142] !== a || eb[143] !== o
          ? ((s = (0, n.jsxs)(n.Fragment, { children: [e, a, o] })),
            (eb[141] = e),
            (eb[142] = a),
            (eb[143] = o),
            (eb[144] = s))
          : (s = eb[144]),
          (eg = s),
          (eb[125] = tB),
          (eb[126] = eJ),
          (eb[127] = tS),
          (eb[128] = e0),
          (eb[129] = e3),
          (eb[130] = tC),
          (eb[131] = i.length),
          (eb[132] = eg))
      } else eg = eb[132]
      if (
        eb[145] !== tG ||
        eb[146] !== eM ||
        eb[147] !== tL ||
        eb[148] !== eF ||
        eb[149] !== eJ ||
        eb[150] !== tN ||
        eb[151] !== tS ||
        eb[152] !== eE ||
        eb[153] !== eY ||
        eb[154] !== eW ||
        eb[155] !== tD ||
        eb[156] !== tj ||
        eb[157] !== tq ||
        eb[158] !== e0 ||
        eb[159] !== tX ||
        eb[160] !== eU ||
        eb[161] !== eq ||
        eb[162] !== eD ||
        eb[163] !== ek ||
        eb[164] !== eV ||
        eb[165] !== tU ||
        eb[166] !== tE ||
        eb[167] !== tR ||
        eb[168] !== eL ||
        eb[169] !== eO ||
        eb[170] !== eg ||
        eb[171] !== tC ||
        eb[172] !== tF ||
        eb[173] !== tP ||
        eb[174] !== eB ||
        eb[175] !== tT ||
        eb[176] !== t_ ||
        eb[177] !== eG
      ) {
        ey = Symbol.for("react.early_return_sentinel")
        e: {
          let e, t, a, s, r, l, i, o, c, d
          eb[180] !== eJ ||
          eb[181] !== eE ||
          eb[182] !== eY ||
          eb[183] !== tD ||
          eb[184] !== tj ||
          eb[185] !== tq ||
          eb[186] !== eL ||
          eb[187] !== tP ||
          eb[188] !== tT ||
          eb[189] !== eG
            ? ((e = tD
                ? (0, n.jsx)("span", {
                    className: (0, y.A)(
                      "px-2.5 py-0.5",
                      "compact-name" === eG ? "truncate" : "line-clamp-3 break-words whitespace-normal",
                    ),
                    children: eY,
                  })
                : (0, n.jsxs)("span", {
                    className: (0, y.A)(
                      "relative flex items-center justify-center",
                      null != eJ && (tq || "compact" === eG) && "invisible",
                      "hero" === eG && "size-16",
                      "compact" === eG && "size-5",
                      "profile" === eG && "size-12",
                      "toolbar" === eG && "size-full",
                    ),
                    children: [
                      (0, n.jsx)("span", {
                        ref: tx,
                        className: "block size-full",
                        "data-character-artwork": !0,
                        children:
                          null != tT
                            ? (0, n.jsx)(z.s, { pet: tT })
                            : (0, n.jsx)(q.Xm, {
                                className: "size-full",
                                avatar: tP,
                                identity: eE,
                                active: null == eJ && tj,
                                interactionTarget: tp,
                              }),
                      }),
                      tq && !eL ? (0, n.jsx)(G.I, { identity: eE, variant: eG }) : null,
                    ],
                  })),
              (eb[180] = eJ),
              (eb[181] = eE),
              (eb[182] = eY),
              (eb[183] = tD),
              (eb[184] = tj),
              (eb[185] = tq),
              (eb[186] = eL),
              (eb[187] = tP),
              (eb[188] = tT),
              (eb[189] = eG),
              (eb[190] = e))
            : (e = eb[190])
          let u = e
          if (eL) {
            ey = u
            break e
          }
          eb[191] !== tG || eb[192] !== tS || eb[193] !== e0 || eb[194] !== eV
            ? ((t = (e) => {
                e0 || (e && tS && eV(), tG(e))
              }),
              (eb[191] = tG),
              (eb[192] = tS),
              (eb[193] = e0),
              (eb[194] = eV),
              (eb[195] = t))
            : (t = eb[195])
          let m = tC && "w-[min(520px,calc(100vw-24px))]!"
          ;(eb[196] !== m ? ((a = (0, y.A)(Z.A.modal, m)), (eb[196] = m), (eb[197] = a)) : (a = eb[197]),
            eb[198] !== eq
              ? ((s = (e) => {
                  ;(eq?.(e),
                    !e.defaultPrevented && tf.current?.isConnected && (e.preventDefault(), tf.current.focus()),
                    (tf.current = null))
                }),
                (eb[198] = eq),
                (eb[199] = s))
              : (s = eb[199]),
            eb[200] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = () => {
                  tv.current = !0
                }),
                (l = () => {
                  tv.current = !0
                }),
                (i = () => {
                  tv.current = !1
                }),
                (eb[200] = r),
                (eb[201] = l),
                (eb[202] = i))
              : ((r = eb[200]), (l = eb[201]), (i = eb[202])),
            eb[203] !== e0
              ? ((o = (e) => {
                  ;((tv.current = !1), e0 && e.preventDefault())
                }),
                (eb[203] = e0),
                (eb[204] = o))
              : (o = eb[204]),
            eb[205] !== s || eb[206] !== o
              ? ((c = {
                  "aria-describedby": void 0,
                  onCloseAutoFocus: s,
                  onPointerDownCapture: r,
                  onPointerDownOutside: l,
                  onKeyDownCapture: i,
                  onClick: X,
                  onEscapeKeyDown: o,
                }),
                (eb[205] = s),
                (eb[206] = o),
                (eb[207] = c))
              : (c = eb[207]),
            eb[208] !== eF ||
            eb[209] !== tS ||
            eb[210] !== eW ||
            eb[211] !== tD ||
            eb[212] !== tj ||
            eb[213] !== tq ||
            eb[214] !== eU ||
            eb[215] !== eD ||
            eb[216] !== eV ||
            eb[217] !== u ||
            eb[218] !== eB ||
            eb[219] !== eG
              ? ((d =
                  eB ??
                  (0, n.jsx)(_.$, {
                    ref: tp,
                    "aria-label": tD
                      ? void 0
                      : eW.formatMessage(
                          {
                            id: "restricted.aeonAppearancePicker.trigger.productName.dot",
                            defaultMessage: "Change your {productName}\u2019s appearance",
                          },
                          { productName: "dot" },
                        ),
                    className: (0, y.A)(
                      "toolbar" === eG && "conversation-header-control",
                      null != eU && "hidden",
                      tq && "group/avatar relative touch-none",
                      "profile" === eG && "-ms-1",
                      tD && "max-w-full [text-align:inherit]",
                    ),
                    color: tq ? "ghostTertiary" : "ghostActive",
                    radius: tD ? "small" : "default",
                    size: "toolbar" === eG ? "icon" : "inline",
                    disabled: eF,
                    onPointerEnter: () => {
                      tS && tj && eV()
                    },
                    onFocus: () => {
                      tS && tj && eV()
                    },
                    onClick: (e) => {
                      ;((tv.current = e.detail > 0),
                        e.stopPropagation(),
                        null != eD ? (e.preventDefault(), eD(e)) : (tf.current = null))
                    },
                    children: u,
                  })),
                (eb[208] = eF),
                (eb[209] = tS),
                (eb[210] = eW),
                (eb[211] = tD),
                (eb[212] = tj),
                (eb[213] = tq),
                (eb[214] = eU),
                (eb[215] = eD),
                (eb[216] = eV),
                (eb[217] = u),
                (eb[218] = eB),
                (eb[219] = eG),
                (eb[220] = d))
              : (d = eb[220]),
            (ev = (0, n.jsx)(S.lG, {
              open: null != eJ && !eF,
              onOpenChange: t,
              size: tC ? "wide" : "xxwide",
              contentClassName: a,
              overlayClassName: Z.A.backdrop,
              contentPosition: tS ? "scrollable" : "centered",
              variant: tS ? "mediaDetail" : "default",
              showDialogClose: !e0,
              shouldIgnoreClickOutside: e0,
              contentProps: c,
              triggerContent: d,
              children:
                null != eJ
                  ? (0, n.jsxs)(C.R4, {
                      as: "form",
                      size: tS ? void 0 : "viewport",
                      variant: tS ? "chatgpt" : "default",
                      onKeyDown: J,
                      onSubmit: tF,
                      children: [
                        (0, n.jsx)(C.c7, {
                          className: tS ? "sr-only" : "select-none",
                          title: (0, n.jsx)(S.L3, {
                            children: (0, n.jsx)(j.A, {
                              id: "restricted.aeonAppearancePicker.header.productName.dot",
                              defaultMessage: "Customize your {productName}",
                              values: { productName: (0, n.jsx)("strong", { children: "dot" }) },
                            }),
                          }),
                        }),
                        null == eJ
                          ? null
                          : tS
                            ? (0, n.jsx)(b.Suspense, {
                                fallback: (0, n.jsx)(R.o, {
                                  title: tX,
                                  footer: eg,
                                  previewRef: tg,
                                  previewFallback: tE,
                                  onCreatePet: eO || null == ek ? void 0 : tL,
                                }),
                                children: (0, n.jsx)(P.$O, {
                                  ref: th,
                                  previewRef: tg,
                                  previewFallback: tE,
                                  conversationId: eM,
                                  onReady: tw,
                                  onCreatePet: eO || null == ek ? void 0 : tL,
                                  disabled: e0,
                                  pet: tN,
                                  onSelectPet: (e) =>
                                    eX({
                                      ...eJ,
                                      pet: e,
                                      appearance: null == e ? null : { avatar: "pet", color: B.rc.pet },
                                    }),
                                  title: tX,
                                  footer: eg,
                                }),
                              })
                            : (0, n.jsx)(C.OO, {
                                spacing: "large",
                                children: (0, n.jsxs)("div", {
                                  className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                                  children: [
                                    (0, n.jsx)("div", { className: "sm:col-start-2 sm:row-start-1", children: tX }),
                                    (0, n.jsx)("div", {
                                      className: "flex items-center justify-center sm:col-start-2 sm:row-start-2",
                                      children:
                                        null != tR
                                          ? (0, n.jsx)("div", {
                                              className: "size-32 sm:size-48",
                                              children: (0, n.jsx)(z.s, { pet: tR }),
                                            })
                                          : (0, n.jsx)(q.Xm, {
                                              className: "size-32 sm:size-48",
                                              avatar: tU,
                                              identity: eE,
                                              useSavedAvatar: !1,
                                            }),
                                    }),
                                    (0, n.jsx)(H, {
                                      className: "sm:col-start-1 sm:row-span-3 sm:row-start-1",
                                      legacy: t_,
                                      disabled: e0,
                                      selected: eJ.appearance?.avatar ?? null,
                                      onChange: (e) => eX({ ...eJ, appearance: { color: B.rc[e], avatar: e } }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "flex flex-col justify-end gap-3 sm:col-start-2 sm:row-start-3",
                                      children: eg,
                                    }),
                                  ],
                                }),
                              }),
                      ],
                    })
                  : null,
            })))
        }
        ;((eb[145] = tG),
          (eb[146] = eM),
          (eb[147] = tL),
          (eb[148] = eF),
          (eb[149] = eJ),
          (eb[150] = tN),
          (eb[151] = tS),
          (eb[152] = eE),
          (eb[153] = eY),
          (eb[154] = eW),
          (eb[155] = tD),
          (eb[156] = tj),
          (eb[157] = tq),
          (eb[158] = e0),
          (eb[159] = tX),
          (eb[160] = eU),
          (eb[161] = eq),
          (eb[162] = eD),
          (eb[163] = ek),
          (eb[164] = eV),
          (eb[165] = tU),
          (eb[166] = tE),
          (eb[167] = tR),
          (eb[168] = eL),
          (eb[169] = eO),
          (eb[170] = eg),
          (eb[171] = tC),
          (eb[172] = tF),
          (eb[173] = tP),
          (eb[174] = eB),
          (eb[175] = tT),
          (eb[176] = t_),
          (eb[177] = eG),
          (eb[178] = ev),
          (eb[179] = ey))
      } else ((ev = eb[178]), (ey = eb[179]))
      return ey !== Symbol.for("react.early_return_sentinel") ? ey : ev
    }
    function J(e) {
      "Enter" === e.key && e.nativeEvent.isComposing && e.preventDefault()
    }
    function X(e) {
      return e.stopPropagation()
    }
    function ee(e) {
      let t = e.currentTarget.value.length
      e.currentTarget.setSelectionRange(t, t)
    }
    function et(e) {
      return Array.from(e.trimStart()).slice(0, 24).join("")
    }
    var ea = a("Br0z"),
      en = a("rzpR"),
      es = a("gdZA"),
      er = a("TjnS"),
      el = a("REfd"),
      ei = a("TYK1")
    function eo(e) {
      let t,
        a,
        g,
        v,
        y,
        b,
        j,
        A,
        w = (0, s.c)(46),
        {
          ref: _,
          conversationId: S,
          hostId: C,
          variant: k,
          onClose: M,
          triggerContent: I,
          onCloseAutoFocus: N,
          onTrigger: T,
        } = e,
        P = (0, r.gh)(h.u),
        R = (0, l.A)(),
        U = (0, i.zy)(),
        z = (0, r.Ul)(c.chatGptAuthenticatedAccountId$),
        B = (0, r.Ul)(c.chatGptAuthenticatedUserId$),
        q = (0, r._U)(C ?? o.qX, S),
        { data: D } = (0, r._U)(ei.cloudAeonByThreadId$, S)
      ;(w[0] !== D || w[1] !== U.pathname
        ? ((t = (0, K.ao)(U.pathname) ?? (D?.scope === "shared" ? D.id : null)),
          (w[0] = D),
          (w[1] = U.pathname),
          (w[2] = t))
        : (t = w[2]),
        w[3] === Symbol.for("react.memo_cache_sentinel") ? ((a = { enabled: !1 }), (w[3] = a)) : (a = w[3]))
      let { data: E } = (0, r._U)(ei.jC, t, a),
        G = (0, r._U)(u.NE, S)
      w[4] !== S || w[5] !== q ? ((g = { hostId: q, threadId: S }), (w[4] = S), (w[5] = q), (w[6] = g)) : (g = w[6])
      let F = (0, r._U)(es.q5, g),
        L = (0, r._U)(o.u4, S)
      w[7] !== S || w[8] !== L || w[9] !== U.pathname || w[10] !== U.state?.archivedConversationPreview
        ? ((v =
            L ||
            (U.state?.archivedConversationPreview === !0 &&
              (0, p.Qm)((0, p.VJ)({ pathname: U.pathname, routeTemplate: U.pathname })) === S)),
          (w[7] = S),
          (w[8] = L),
          (w[9] = U.pathname),
          (w[10] = U.state?.archivedConversationPreview),
          (w[11] = v))
        : (v = w[11])
      let O = v,
        $ = (0, r._U)(W.T, S)
      w[12] !== z ||
      w[13] !== S ||
      w[14] !== q ||
      w[15] !== R ||
      w[16] !== C ||
      w[17] !== O ||
      w[18] !== P ||
      w[19] !== B
        ? ((y = async function (e, t, a) {
            let n = (0, x.Nj)(),
              s = () =>
                P.get(c.chatGptAuthenticatedAccountId$) === z &&
                P.get(c.chatGptAuthenticatedUserId$) === B &&
                (C ?? P.get(o.qX, S)) === q &&
                (0, x.Nj)() === n
            if (!s()) return !1
            let r = P.get(es.q5, { hostId: q, threadId: S }) ?? P.get(u.NE, S)
            if (
              (O ||
                t === r ||
                (await (0, en.R)(P, { conversationId: S, hostId: q, title: t, undoLabel: m.tD.renameThreadUndone })),
              !s())
            )
              return !1
            let l = P.get(W.T, S)
            if (null == e || (null == a && e.avatar === l?.avatar && e.color === l.color)) return !0
            let i = P.query.snapshot(ei.cloudAeonByThreadId$, S)
            try {
              let t = await P.query.getOrFetch(ei.cloudAeonByThreadId$, S)
              if (!s() || null == t) return !1
              let n = await (0, ea.$T)(P, S, e, { pet: a, profile: t })
              if (null != n) {
                if ((await i.cancel(), !s())) return !1
                ;(0, el.q)(P, S, n)
              }
              return s()
            } catch (e) {
              if (!s()) return !1
              return (
                f.v.warning("Failed to update an Orbit avatar", { safe: {}, sensitive: { error: e } }),
                P.get(d.Id).danger(
                  R.formatMessage({
                    id: "restricted.aeonAppearancePicker.saveError.dot",
                    defaultMessage: "Unable to save your dot\u2019s avatar",
                  }),
                  { errorAnalytics: { toastId: "restricted.aeonAppearancePicker.saveError" } },
                ),
                !1
              )
            }
          }),
          (w[12] = z),
          (w[13] = S),
          (w[14] = q),
          (w[15] = R),
          (w[16] = C),
          (w[17] = O),
          (w[18] = P),
          (w[19] = B),
          (w[20] = y))
        : (y = w[20])
      let H = y
      w[21] !== z || w[22] !== S || w[23] !== q || w[24] !== B
        ? ((b = JSON.stringify([z, B, q, S])), (w[21] = z), (w[22] = S), (w[23] = q), (w[24] = B), (w[25] = b))
        : (b = w[25])
      let Q = F ?? G ?? null,
        V = null == D,
        Z = D?.id
      return (
        w[26] !== D?.scope || w[27] !== E
          ? ((j = null == E ? D?.scope === "shared" : (0, er.QU)(E)), (w[26] = D?.scope), (w[27] = E), (w[28] = j))
          : (j = w[28]),
        w[29] !== $ ||
        w[30] !== S ||
        w[31] !== M ||
        w[32] !== N ||
        w[33] !== T ||
        w[34] !== O ||
        w[35] !== _ ||
        w[36] !== H ||
        w[37] !== S ||
        w[38] !== j ||
        w[39] !== b ||
        w[40] !== Q ||
        w[41] !== V ||
        w[42] !== Z ||
        w[43] !== I ||
        w[44] !== k
          ? ((A = (0, n.jsx)(
              Y,
              {
                ref: _,
                appearance: $,
                name: Q,
                namePending: V,
                identity: S,
                orbitId: Z,
                characterConversationId: S,
                variant: k,
                triggerContent: I,
                onCloseAutoFocus: N,
                onTrigger: T,
                readOnly: j,
                readOnlyName: O,
                onClose: M,
                onSave: H,
              },
              b,
            )),
            (w[29] = $),
            (w[30] = S),
            (w[31] = M),
            (w[32] = N),
            (w[33] = T),
            (w[34] = O),
            (w[35] = _),
            (w[36] = H),
            (w[37] = S),
            (w[38] = j),
            (w[39] = b),
            (w[40] = Q),
            (w[41] = V),
            (w[42] = Z),
            (w[43] = I),
            (w[44] = k),
            (w[45] = A))
          : (A = w[45]),
        A
      )
    }
  },
  hx3z(e, t, a) {
    a.d(t, { NF: () => ez, XL: () => eR, Lb: () => ew, cq: () => eA, ok: () => eq })
    var n = a("ABep"),
      s = a("QosV"),
      r = a("on57"),
      l = a("K4Cx"),
      i = a("qmMi"),
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
    function x(e) {
      return (void 0 === e && (e = "second"), f.indexOf(e) > -1)
    }
    var g = function (e) {
        var t = (0, m.A)(),
          a = t.formatRelativeTime,
          n = t.textComponent,
          s = e.children,
          r = a(e.value || 0, e.unit, (0, d.Tt)(e, ["children", "value", "unit"]))
        return "function" == typeof s ? s(r) : n ? o.createElement(n, null, r) : o.createElement(o.Fragment, null, r)
      },
      v = function (e) {
        var t,
          a = e.value,
          n = void 0 === a ? 0 : a,
          s = e.unit,
          r = void 0 === s ? "second" : s,
          l = e.updateIntervalInSeconds,
          i = (0, d.Tt)(e, ["value", "unit", "updateIntervalInSeconds"])
        ;(0, u.V1)(!l || !!(l && x(r)), "Cannot schedule update with unit longer than hour")
        var c = o.useState(),
          m = c[0],
          f = c[1],
          v = o.useState(0),
          y = v[0],
          b = v[1],
          j = o.useState(0),
          A = j[0],
          w = j[1]
        ;((r !== m || n !== y) &&
          (b(n || 0),
          f(r),
          w(
            x(r)
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
                })(n, r)
              : 0,
          )),
          o.useEffect(
            function () {
              function e() {
                clearTimeout(t)
              }
              if ((e(), !l || !x(r))) return e
              var a = A - l,
                n = h(a)
              if ("day" === n) return e
              var s = p(n),
                i = a % s,
                o = a - i,
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
            [A, l, r],
          ))
        var _ = n || 0,
          S = r
        if (x(r) && "number" == typeof A && l) {
          var C = p((S = h(A)))
          _ = Math.round(A / C)
        }
        return o.createElement(g, (0, d.Cl)({ value: _, unit: S }, i))
      }
    v.displayName = "FormattedRelativeTime"
    var y = a("Ywss"),
      b = a("tl5a"),
      j = a("tWaO"),
      A = a("KIKs"),
      w = a("OWtl"),
      _ = a("eGPX"),
      S = a("W4GL"),
      C = a("V8uZ"),
      k = a("lKhb"),
      M = a("PaR8"),
      I = a("MtDh"),
      N = a("mCgi"),
      T = a("ugFz"),
      P = a("qMca"),
      R = a("TYK1"),
      U = a("Kwur"),
      z = a("ZtSy"),
      B = a("OMIV")
    function q(e) {
      let t,
        a,
        r,
        l,
        d,
        u,
        m,
        h,
        p,
        f,
        x = (0, s.c)(27),
        { conversationId: g, isArchived: v } = e,
        y = (0, i._U)(B.JW, "1973839244"),
        j = (0, i._U)(b.W3, g),
        [A, w] = (0, o.useState)(null),
        [_, C] = (0, o.useState)(null),
        [k, M] = (0, o.useState)(null)
      if (!y || "durable" !== j || v) return null
      x[0] !== g
        ? ((t = async function (e) {
            ;(w(e), C(null))
            try {
              let t = await U.Request.safePost(
                "setup" === e
                  ? "/cloud-aeons/by-thread/{thread_id}/doctor/setup"
                  : "/cloud-aeons/by-thread/{thread_id}/doctor/check-in",
                { parameters: { path: { thread_id: g } } },
              )
              ;(M(t.schedule_url ?? t.workflow_url), C(e))
            } catch {
              C("error")
            }
            w(null)
          }),
          (x[0] = g),
          (x[1] = t))
        : (t = x[1])
      let I = t,
        N = null != A
      ;(x[2] !== I ? ((a = () => void I("setup")), (x[2] = I), (x[3] = a)) : (a = x[3]),
        x[4] !== A
          ? ((r = (0, n.jsx)(S.x.ItemLabel, {
              children:
                "setup" === A
                  ? (0, n.jsx)(c.A, {
                      id: "restricted.aeon.doctor.setup.pending",
                      defaultMessage: "Setting up recurring doctor\u2026",
                    })
                  : (0, n.jsx)(c.A, {
                      id: "restricted.aeon.doctor.setup.label",
                      defaultMessage: "Set up recurring doctor",
                    }),
            })),
            (x[4] = A),
            (x[5] = r))
          : (r = x[5]),
        x[6] !== N || x[7] !== a || x[8] !== r
          ? ((l = (0, n.jsx)(S.x.ItemButton, { className: "select-none", disabled: N, onClick: a, children: r })),
            (x[6] = N),
            (x[7] = a),
            (x[8] = r),
            (x[9] = l))
          : (l = x[9]))
      let T = null != A
      return (
        x[10] !== I ? ((d = () => void I("check-in")), (x[10] = I), (x[11] = d)) : (d = x[11]),
        x[12] !== A
          ? ((u = (0, n.jsx)(S.x.ItemLabel, {
              children:
                "check-in" === A
                  ? (0, n.jsx)(c.A, {
                      id: "restricted.aeon.doctor.requesting",
                      defaultMessage: "Requesting check-in\u2026",
                    })
                  : (0, n.jsx)(c.A, { id: "restricted.aeon.doctor.checkInNow.label", defaultMessage: "Check in now" }),
            })),
            (x[12] = A),
            (x[13] = u))
          : (u = x[13]),
        x[14] !== T || x[15] !== d || x[16] !== u
          ? ((m = (0, n.jsx)(S.x.ItemButton, { className: "select-none", disabled: T, onClick: d, children: u })),
            (x[14] = T),
            (x[15] = d),
            (x[16] = u),
            (x[17] = m))
          : (m = x[17]),
        x[18] !== _
          ? ((h =
              null != _ &&
              (0, n.jsx)(S.x.Item, {
                role: "status",
                children: (0, n.jsxs)(S.x.ItemLabel, {
                  children: [
                    "setup" === _ &&
                      (0, n.jsx)(c.A, {
                        id: "restricted.aeon.doctor.setup.success",
                        defaultMessage: "Recurring doctor is set up",
                      }),
                    "check-in" === _ &&
                      (0, n.jsx)(c.A, {
                        id: "restricted.aeon.doctor.checkInNow.requested",
                        defaultMessage: "Check-in requested",
                      }),
                    "error" === _ &&
                      (0, n.jsx)(c.A, {
                        id: "restricted.aeon.doctor.request.error",
                        defaultMessage: "Doctor unavailable \xb7 Try again",
                      }),
                  ],
                }),
              })),
            (x[18] = _),
            (x[19] = h))
          : (h = x[19]),
        x[20] !== k
          ? ((p =
              null != k &&
              (0, n.jsx)(S.x.Item, {
                children: (0, n.jsx)(z.G, {
                  href: k,
                  initiator: "external_link",
                  children: (0, n.jsx)(c.A, {
                    id: "restricted.aeon.doctor.schedule.link",
                    defaultMessage: "View doctor schedule",
                  }),
                }),
              })),
            (x[20] = k),
            (x[21] = p))
          : (p = x[21]),
        x[22] !== h || x[23] !== p || x[24] !== l || x[25] !== m
          ? ((f = (0, n.jsxs)(S.x.Section, { sectionKey: "orbit-doctor", mode: "headerless", children: [l, m, h, p] })),
            (x[22] = h),
            (x[23] = p),
            (x[24] = l),
            (x[25] = m),
            (x[26] = f))
          : (f = x[26]),
        f
      )
    }
    var D = a("eZRG"),
      E = a("I5kk")
    let G = (0, a("ESTr").a)({
      name: "person-badge-block-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.352295, y: 1.838989, width: 17.062134, height: 17.576172 },
        visualBounds: { x: 2.352295, y: 1.838989, width: 17.062134, height: 17.576172 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.352295, y: 1.838989, width: 17.062134, height: 17.576172 },
        center: { x: 10.883362, y: 10.627075 },
        insets: { top: 1.838989, right: 0.585571, bottom: 0.584839, left: 2.352295 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.883362, y: 10.627075 },
          foreground: { x: 10.883362, y: 10.627075 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M14.9994 10.5851C17.4375 10.5853 19.4144 12.5619 19.4144 15.0001C19.4143 17.4382 17.4375 19.4149 14.9994 19.4152C12.5611 19.4152 10.5844 17.4384 10.5843 15.0001C10.5843 12.5618 12.561 10.5851 14.9994 10.5851ZM12.3968 13.3468C12.0924 13.8249 11.9144 14.3913 11.9144 15.0001C11.9145 16.7038 13.2956 18.0851 14.9994 18.0851C15.572 18.085 16.1062 17.9254 16.5658 17.6534L12.3968 13.3468ZM14.9994 11.9152C14.386 11.9152 13.8147 12.0949 13.3343 12.4034L17.5394 16.7462C17.8815 16.2495 18.0843 15.6489 18.0843 15.0001C18.0843 13.2965 16.703 11.9154 14.9994 11.9152Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.431 10.9884C9.79804 10.9886 10.096 11.2864 10.096 11.6534C10.096 12.0206 9.79809 12.3183 9.431 12.3185C6.41341 12.3187 3.93553 14.6343 3.67905 17.5851C3.64729 17.9508 3.32506 18.2221 2.95932 18.1906C2.59346 18.1587 2.32306 17.8357 2.35483 17.4698C2.67059 13.8379 5.71754 10.9886 9.431 10.9884Z" fill="currentColor"/> <path d="M9.431 1.83899C11.6318 1.8391 13.4164 3.62349 13.4164 5.82434C13.4162 8.02509 11.6318 9.80958 9.431 9.80969C7.23022 9.80962 5.44576 8.02512 5.44565 5.82434C5.44565 3.62347 7.23015 1.83906 9.431 1.83899ZM9.431 3.16907C7.96469 3.16914 6.77573 4.35801 6.77573 5.82434C6.77584 7.29058 7.96475 8.47954 9.431 8.47961C10.8972 8.4795 12.0862 7.29056 12.0863 5.82434C12.0863 4.35803 10.8973 3.16918 9.431 3.16907Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var F = a("n4fP"),
      L = a("gMec"),
      O = a("Qgfj"),
      $ = a("PFjh"),
      H = a("SPnB"),
      Q = a("Sm6l"),
      V = a("bqtn"),
      W = a("bVeK"),
      K = a("RNul"),
      Z = a("SGsN"),
      Y = a("aepO"),
      J = a("soaw"),
      X = a("nIa3"),
      ee = a("om2R"),
      et = a("WAho"),
      ea = a("QdY6"),
      en = a("TPDS"),
      es = a("Nw18"),
      er = a("X7du"),
      el = a("Pmvo"),
      ei = a("ulgT"),
      eo = a("se9x"),
      ec = a("YsvR")
    let ed = (0, o.lazy)(async () => {
        let { EmailSettingsDialogBody: e } = await a.e(528018).then(a.bind(a, "dtaL"))
        return { default: e }
      }),
      eu = (0, o.lazy)(async () => {
        let { BlockedSendersDialogBody: e } = await a.e(900561).then(a.bind(a, "HSed"))
        return { default: e }
      }),
      em = (0, o.lazy)(async () => {
        let { RecentEmailDialogBody: e } = await a.e(356876).then(a.bind(a, "tdzF"))
        return { default: e }
      })
    function eh(e) {
      let t,
        a,
        r = (0, s.c)(14),
        { renderShortcut: l, conversationId: o, isArchived: d, mode: u, onSetup: h } = e,
        p = void 0 === u ? "section" : u,
        f = (0, m.A)(),
        x = (0, i._U)(b.qX, o),
        g = (0, i._U)(b.W3, o)
      if (d || "durable" !== (0, X.d)(x, g)) {
        let e, a
        r[0] !== f
          ? ((e = f.formatMessage(
              {
                id: "orbit.email.setup.activeCloudDotsRequired",
                defaultMessage: "Email is available for active {dots} that run in the cloud.",
              },
              { dots: "dots" },
            )),
            (r[0] = f),
            (r[1] = e))
          : (e = r[1])
        let s = e
        ;(r[2] !== p || r[3] !== s || r[4] !== l
          ? ((a =
              "setup" === p
                ? (0, n.jsx)(en.mz, { title: (0, n.jsx)(c.A, { ...ev.unavailable }), description: s })
                : (0, n.jsx)(eg, { renderShortcut: l, disabled: !0, mode: p, title: s })),
            (r[2] = p),
            (r[3] = s),
            (r[4] = l),
            (r[5] = a))
          : (a = r[5]),
          (t = a))
      } else {
        let e
        ;(r[6] !== o || r[7] !== p || r[8] !== h || r[9] !== l
          ? ((e = (0, n.jsx)(ep, { renderShortcut: l, conversationId: o, mode: p, onSetup: h })),
            (r[6] = o),
            (r[7] = p),
            (r[8] = h),
            (r[9] = l),
            (r[10] = e))
          : (e = r[10]),
          (t = e))
      }
      return (
        r[11] !== t || r[12] !== p
          ? ((a =
              "section" !== p
                ? t
                : (0, n.jsx)(S.x.Section, { sectionKey: "aeon-email", mode: "headerless", children: t })),
            (r[11] = t),
            (r[12] = p),
            (r[13] = a))
          : (a = r[13]),
        a
      )
    }
    function ep(e) {
      let t,
        a = (0, s.c)(22),
        { renderShortcut: r, conversationId: l, mode: o, onSetup: d } = e,
        u = (0, i.Ul)(H.chatGptAuthenticatedAccountId$),
        m = (0, i.Ul)(H.chatGptAuthenticatedUserId$),
        { data: h, isPending: p, isError: f, refetch: x } = (0, i._U)(R.cloudAeonByThreadId$, l)
      if (null == u || null == m) return null
      if ("setup" === o && p) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(eo.s, {})), (a[0] = e)) : (e = a[0]),
          e
        )
      }
      if ("setup" === o && f) {
        let e, t, s, r
        return (
          a[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(en.mz, {
                title: (0, n.jsx)(c.A, { ...ev.unavailable }),
                description: (0, n.jsx)(c.A, {
                  id: "orbit.email.setup.loadFailed",
                  defaultMessage: "Couldn\u2019t load email settings",
                }),
                role: "alert",
              })),
              (a[1] = e))
            : (e = a[1]),
          a[2] !== x ? ((t = () => void x()), (a[2] = x), (a[3] = t)) : (t = a[3]),
          a[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(c.A, {
                id: "restricted.aeon.email.dialog.recovery.retry.label",
                defaultMessage: "Try again",
              })),
              (a[4] = s))
            : (s = a[4]),
          a[5] !== t
            ? ((r = (0, n.jsxs)("div", {
                className: "flex flex-col gap-6",
                children: [e, (0, n.jsx)(Q.$, { color: "primary", size: "detailAction", onClick: t, children: s })],
              })),
              (a[5] = t),
              (a[6] = r))
            : (r = a[6]),
          r
        )
      }
      if (p || f) {
        let e, t
        return (
          a[7] !== x ? ((e = () => void x()), (a[7] = x), (a[8] = e)) : (e = a[8]),
          a[9] !== f || a[10] !== p || a[11] !== o || a[12] !== r || a[13] !== e
            ? ((t = (0, n.jsx)(eg, { renderShortcut: r, mode: o, isLoading: p, isError: f, onClick: e })),
              (a[9] = f),
              (a[10] = p),
              (a[11] = o),
              (a[12] = r),
              (a[13] = e),
              (a[14] = t))
            : (t = a[14]),
          t
        )
      }
      if (null == h) return null
      let g = `${u}:${m}:${h.id}:${l}`
      return (
        a[15] !== l || a[16] !== o || a[17] !== d || a[18] !== h.id || a[19] !== r || a[20] !== g
          ? ((t = (0, n.jsx)(ef, { renderShortcut: r, aeonId: h.id, mode: o, threadId: l, onSetup: d }, g)),
            (a[15] = l),
            (a[16] = o),
            (a[17] = d),
            (a[18] = h.id),
            (a[19] = r),
            (a[20] = g),
            (a[21] = t))
          : (t = a[21]),
        t
      )
    }
    function ef(e) {
      let t,
        a,
        r,
        l,
        d,
        u,
        h,
        p,
        f,
        x,
        g,
        v = (0, s.c)(75),
        { renderShortcut: y, aeonId: b, mode: j, threadId: A, onSetup: _ } = e,
        S = (0, i.gh)(w.u),
        C = (0, m.A)(),
        k = (0, i.Ul)(H.chatGptAuthenticatedAccountId$),
        M = (0, i.Ul)(H.o8),
        I = (0, i.Ul)(H.chatGptAuthenticatedUserId$),
        { mutate: N, isPending: T } = (0, i._U)(ec.Ic, b),
        [P, R] = (0, o.useState)(!1),
        [U, z] = (0, o.useState)(null),
        B = (0, o.useRef)(null),
        q = (0, o.useRef)(!1),
        D = (0, J.a)(),
        E = (0, o.useRef)(-1 / 0)
      v[0] !== k || v[1] !== D || v[2] !== S || v[3] !== I
        ? ((t = (e, t) => {
            let a = () =>
              D() &&
              e > E.current &&
              S.get(H.chatGptAuthenticatedAccountId$) === k &&
              S.get(H.chatGptAuthenticatedUserId$) === I &&
              "visible" === document.visibilityState
            a() &&
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  a() &&
                    (0, $.dj)(S).hist("orbit_email", "claim_visible_result_ms", { outcome: t }, performance.now() - e)
                })
              })
          }),
          (v[0] = k),
          (v[1] = D),
          (v[2] = S),
          (v[3] = I),
          (v[4] = t))
        : (t = v[4])
      let G = t,
        { data: F, isPending: L, isError: O, error: Q } = (0, i._U)(ec.dk, b)
      v[5] !== Q || v[6] !== O
        ? ((a = O && "workspace_disabled" === (0, es.T5)(Q).code), (v[5] = Q), (v[6] = O), (v[7] = a))
        : (a = v[7])
      let V = a,
        W = O || F?.status !== "linked" ? null : F.email_address,
        Y = null != W && F?.narrow_email_consent_version === 1,
        X = F?.inbox_id,
        ee = Y && !T && null != k && null != M && null != X,
        en = U?.type === "recentEmail"
      if ((en && !ee && z(null), null == W && P && R(!1), "setup" === j)) {
        let e
        if (L) {
          let e
          return (
            v[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(eo.s, {})), (v[8] = e)) : (e = v[8]),
            e
          )
        }
        if (Y) {
          let e
          return (
            v[9] !== W || v[10] !== A
              ? ((e = (0, n.jsx)(et.g, { conversationId: A, method: "email", destination: W })),
                (v[9] = W),
                (v[10] = A),
                (v[11] = e))
              : (e = v[11]),
            e
          )
        }
        return (
          v[12] !== b || v[13] !== G || v[14] !== A
            ? ((e = (0, n.jsx)(ed, { aeonId: b, threadId: A, embedded: !0, onClaimResult: G })),
              (v[12] = b),
              (v[13] = G),
              (v[14] = A),
              (v[15] = e))
            : (e = v[15]),
          e
        )
      }
      let ei = null == W ? ev.setupTitle : ev.settings
      if (U?.type === "blockedSenders" && Y) {
        let e, t
        ;((r = null == U.sender ? "compactTall" : "wideTall"),
          v[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(er.$, { children: (0, n.jsx)(el.n, { kind: "blockedSenders", centerInDialog: !0 }) })),
              (v[16] = e))
            : (e = v[16]),
          (d = e),
          (ei = ev.blockedSenders),
          v[17] !== b || v[18] !== U.sender
            ? ((t = (0, n.jsx)(eu, { aeonId: b, initialAddress: U.sender })),
              (v[17] = b),
              (v[18] = U.sender),
              (v[19] = t))
            : (t = v[19]),
          (l = t))
      } else if (en && ee) {
        let e, t, a, s
        ;((r = "wideTall"),
          v[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(el.n, { kind: "recent", describeDialog: !0, centerInDialog: !0 })), (v[20] = e))
            : (e = v[20]),
          (d = e),
          (ei = ev.recentEmail),
          v[21] !== X || v[22] !== M
            ? ((t = JSON.stringify([M, X])), (v[21] = X), (v[22] = M), (v[23] = t))
            : (t = v[23]),
          v[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (e) => z({ type: "blockedSenders", sender: e })), (v[24] = a))
            : (a = v[24]),
          v[25] !== k || v[26] !== b || v[27] !== X || v[28] !== M || v[29] !== t
            ? ((s = (0, n.jsx)(em, { aeonId: b, inboxId: X, accountId: k, userId: M, onBlock: a }, t)),
              (v[25] = k),
              (v[26] = b),
              (v[27] = X),
              (v[28] = M),
              (v[29] = t),
              (v[30] = s))
            : (s = v[30]),
          (l = s))
      } else {
        let e, t, a
        ;(v[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(eo.s, { describeDialog: !0 })), (v[31] = e))
          : (e = v[31]),
          (d = e),
          v[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => {
                ;((q.current = !0), z(null), R(!0))
              }),
              (v[32] = t))
            : (t = v[32]),
          v[33] !== b || v[34] !== G || v[35] !== A
            ? ((a = (0, n.jsx)(ed, { aeonId: b, threadId: A, onClaimResult: G, onLinked: t })),
              (v[33] = b),
              (v[34] = G),
              (v[35] = A),
              (v[36] = a))
            : (a = v[36]),
          (l = a))
      }
      let eh = O ? void 0 : F
      v[37] !== C || v[38] !== V
        ? ((u = V
            ? C.formatMessage({
                id: "restricted.aeon.email.settings.workspaceDisabled",
                defaultMessage: "Your workspace admin has turned off email for dots.",
              })
            : void 0),
          (v[37] = C),
          (v[38] = V),
          (v[39] = u))
        : (u = v[39])
      let ep = null == W ? "dialog" : "menu"
      ;(v[40] !== W || v[41] !== _
        ? ((h =
            null == W
              ? () => {
                  null != _ ? _(B.current) : z({ type: "settings" })
                }
              : void 0),
          (v[40] = W),
          (v[41] = _),
          (v[42] = h))
        : (h = v[42]),
        v[43] !== O ||
        v[44] !== L ||
        v[45] !== j ||
        v[46] !== T ||
        v[47] !== y ||
        v[48] !== eh ||
        v[49] !== u ||
        v[50] !== ep ||
        v[51] !== h
          ? ((p = (0, n.jsx)(eg, {
              renderShortcut: y,
              ref: B,
              mode: j,
              email: eh,
              isLoading: L,
              isError: O,
              disabled: T,
              title: u,
              "aria-haspopup": ep,
              onClick: h,
            })),
            (v[43] = O),
            (v[44] = L),
            (v[45] = j),
            (v[46] = T),
            (v[47] = y),
            (v[48] = eh),
            (v[49] = u),
            (v[50] = ep),
            (v[51] = h),
            (v[52] = p))
          : (p = v[52]))
      let ef = p
      return (
        v[53] !== k ||
        v[54] !== b ||
        v[55] !== ee ||
        v[56] !== U ||
        v[57] !== W ||
        v[58] !== Y ||
        v[59] !== P ||
        v[60] !== j ||
        v[61] !== S ||
        v[62] !== ef ||
        v[63] !== N ||
        v[64] !== I
          ? ((f =
              null == W
                ? ef
                : (0, n.jsx)(ex, {
                    emailAddress: W,
                    open: P,
                    onOpenChange: R,
                    onCloseAutoFocus: (e) => {
                      null != U && e.preventDefault()
                    },
                    triggerButton: ef,
                    onRecentEmail: ee ? () => z({ type: "recentEmail" }) : void 0,
                    onBlockedSenders: Y ? () => z({ type: "blockedSenders" }) : void 0,
                    onSettings: "shortcut" === j ? void 0 : () => z({ type: "settings" }),
                    onRemove: () => {
                      if (S.get(ec.Ic, b).isPending) return
                      R(!1)
                      let e = S.get(Z.Id),
                        t = e.info(
                          (0, n.jsx)(c.A, {
                            id: "restricted.aeon.email.disconnecting",
                            defaultMessage: "Turning off email\u2026",
                          }),
                          { duration: 0, hasCloseButton: !1, leading: (0, n.jsx)(K.y, {}) },
                        ),
                        a = !1,
                        s = S.watch((e) => {
                          let { get: n } = e
                          ;(n(H.chatGptAuthenticatedAccountId$) !== k || n(H.chatGptAuthenticatedUserId$) !== I) &&
                            ((a = !0), t.close())
                        })
                      N(
                        { type: "unlink" },
                        {
                          onSettled: (r, l) => {
                            if ((s(), t.close(), a)) return
                            let i = S.get(ec.dk, b)
                            null == l || (i.isSuccess && "unlinked" === i.data.status)
                              ? e.success(
                                  (0, n.jsx)(c.A, {
                                    id: "restricted.aeon.email.disconnected",
                                    defaultMessage: "Email turned off",
                                  }),
                                )
                              : e.danger(
                                  (0, n.jsx)(c.A, {
                                    id: "restricted.aeon.email.removeFailed",
                                    defaultMessage: "Couldn\u2019t turn off email. Try again.",
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
            (v[53] = k),
            (v[54] = b),
            (v[55] = ee),
            (v[56] = U),
            (v[57] = W),
            (v[58] = Y),
            (v[59] = P),
            (v[60] = j),
            (v[61] = S),
            (v[62] = ef),
            (v[63] = N),
            (v[64] = I),
            (v[65] = f))
          : (f = v[65]),
        v[66] !== l || v[67] !== d || v[68] !== r || v[69] !== ei || v[70] !== U
          ? ((x =
              null != U
                ? (0, n.jsx)(ea.W, {
                    hasDescription: !0,
                    title: (0, n.jsx)(c.A, { ...ei, values: { dot: "dot" } }),
                    size: r,
                    onClose: () => {
                      ;((E.current = performance.now()), z(null))
                    },
                    onCloseAutoFocus: (e) => {
                      ;(e.preventDefault(), q.current || B.current?.focus(), (q.current = !1))
                    },
                    children: (0, n.jsx)(o.Suspense, { fallback: d, children: l }),
                  })
                : null),
            (v[66] = l),
            (v[67] = d),
            (v[68] = r),
            (v[69] = ei),
            (v[70] = U),
            (v[71] = x))
          : (x = v[71]),
        v[72] !== f || v[73] !== x
          ? ((g = (0, n.jsxs)(n.Fragment, { children: [f, x] })), (v[72] = f), (v[73] = x), (v[74] = g))
          : (g = v[74]),
        g
      )
    }
    function ex(e) {
      let t,
        a,
        r,
        l,
        o,
        d,
        u,
        m,
        h,
        p,
        f,
        x = (0, s.c)(29),
        {
          emailAddress: g,
          open: v,
          onOpenChange: y,
          onCloseAutoFocus: b,
          triggerButton: j,
          onRecentEmail: A,
          onBlockedSenders: _,
          onSettings: S,
          onRemove: C,
        } = e,
        k = (0, i.gh)(w.u)
      return (
        x[0] !== g
          ? ((t = (0, n.jsx)(V.ms.SectionLabel, {
              children: (0, n.jsx)("span", { className: "break-all select-text", children: g }),
            })),
            (x[0] = g),
            (x[1] = t))
          : (t = x[1]),
        x[2] !== g || x[3] !== k
          ? ((a = (e) => {
              ;(0, Y.lW)(g, e).then((e) => {
                e &&
                  k
                    .get(Z.Id)
                    .info(
                      (0, n.jsx)(c.A, {
                        id: "orbit.email.actions.addressCopied",
                        defaultMessage: "Email address copied",
                      }),
                    )
              })
            }),
            (x[2] = g),
            (x[3] = k),
            (x[4] = a))
          : (a = x[4]),
        x[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(c.A, { id: "restricted.aeon.email.actions.copy", defaultMessage: "Copy email address" })),
            (x[5] = r))
          : (r = x[5]),
        x[6] !== a
          ? ((l = (0, n.jsx)(V.ms.Item, { leftIconAsset: F.u, onClick: a, children: r })), (x[6] = a), (x[7] = l))
          : (l = x[7]),
        x[8] !== A
          ? ((o =
              null != A
                ? (0, n.jsx)(V.ms.Item, {
                    leftIconAsset: D.t,
                    onSelect: A,
                    children: (0, n.jsx)(c.A, { ...ev.recentEmail }),
                  })
                : null),
            (x[8] = A),
            (x[9] = o))
          : (o = x[9]),
        x[10] !== _
          ? ((d =
              null != _
                ? (0, n.jsx)(V.ms.Item, {
                    leftIconAsset: G,
                    onSelect: _,
                    children: (0, n.jsx)(c.A, { ...ev.blockedSenders }),
                  })
                : null),
            (x[10] = _),
            (x[11] = d))
          : (d = x[11]),
        x[12] !== S
          ? ((u =
              null != S
                ? (0, n.jsx)(V.ms.Item, {
                    leftIconAsset: E.w,
                    onSelect: S,
                    children: (0, n.jsx)(c.A, { ...ev.settings }),
                  })
                : null),
            (x[12] = S),
            (x[13] = u))
          : (u = x[13]),
        x[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(V.ms.Separator, {})), (x[14] = m))
          : (m = x[14]),
        x[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, n.jsx)(c.A, {
              id: "restricted.aeon.email.actions.disconnect",
              defaultMessage: "Turn off email",
            })),
            (x[15] = h))
          : (h = x[15]),
        x[16] !== C
          ? ((p = (0, n.jsx)(V.ms.Item, { leftIconAsset: L.N, tone: "destructive", onSelect: C, children: h })),
            (x[16] = C),
            (x[17] = p))
          : (p = x[17]),
        x[18] !== b ||
        x[19] !== y ||
        x[20] !== v ||
        x[21] !== t ||
        x[22] !== p ||
        x[23] !== l ||
        x[24] !== o ||
        x[25] !== d ||
        x[26] !== u ||
        x[27] !== j
          ? ((f = (0, n.jsxs)(V.Ab, {
              side: "bottom",
              align: "center",
              contentWidth: "menu",
              open: v,
              onOpenChange: y,
              onCloseAutoFocus: b,
              triggerButton: j,
              children: [t, l, o, d, u, m, p],
            })),
            (x[18] = b),
            (x[19] = y),
            (x[20] = v),
            (x[21] = t),
            (x[22] = p),
            (x[23] = l),
            (x[24] = o),
            (x[25] = d),
            (x[26] = u),
            (x[27] = j),
            (x[28] = f))
          : (f = x[28]),
        f
      )
    }
    function eg(e) {
      let t,
        a,
        r,
        l,
        i,
        o,
        d,
        u,
        h,
        p,
        f,
        x = (0, s.c)(34)
      x[0] !== e
        ? (({ renderShortcut: l, email: a, mode: i, isLoading: o, isError: d, disabled: t, title: u, ...r } = e),
          (x[0] = e),
          (x[1] = t),
          (x[2] = a),
          (x[3] = r),
          (x[4] = l),
          (x[5] = i),
          (x[6] = o),
          (x[7] = d),
          (x[8] = u))
        : ((t = x[1]), (a = x[2]), (r = x[3]), (l = x[4]), (i = x[5]), (o = x[6]), (d = x[7]), (u = x[8]))
      let g = void 0 === i ? "section" : i,
        v = void 0 !== o && o,
        y = void 0 !== d && d,
        b = (0, m.A)(),
        j = v || y || a?.status !== "linked" ? void 0 : a,
        A = u,
        w = r["aria-label"]
      if ("shortcut" === g && v) {
        let e
        ;(x[9] !== b || x[10] !== u
          ? ((e = u ?? b.formatMessage(ei.L.settings)), (x[9] = b), (x[10] = u), (x[11] = e))
          : (e = x[11]),
          (A = e))
      } else if ("shortcut" === g && y) {
        let e
        ;(x[12] !== b || x[13] !== u
          ? ((e = u ?? b.formatMessage(ev.unavailable)), (x[12] = b), (x[13] = u), (x[14] = e))
          : (e = x[14]),
          (A = e))
      } else if ("shortcut" === g && j?.email_address) {
        let e
        ;((A = u ?? j.email_address),
          x[15] !== w || x[16] !== b || x[17] !== j
            ? ((e =
                w ??
                b.formatMessage(
                  { id: "restricted.aeon.email.shortcut.addressLabel", defaultMessage: "Email: {emailAddress}" },
                  { emailAddress: j.email_address },
                )),
              (x[15] = w),
              (x[16] = b),
              (x[17] = j),
              (x[18] = e))
            : (e = x[18]),
          (w = e))
      }
      if ("shortcut" === g) {
        let e
        ;(x[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { id: "restricted.aeonMessaging.emailShortcut", defaultMessage: "Email" })),
            (x[19] = e))
          : (e = x[19]),
          (h = e))
      } else if (v) {
        let e
        ;(x[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...ei.L.settings })), (x[20] = e))
          : (e = x[20]),
          (h = e))
      } else if (y) {
        let e
        ;(x[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...ev.unavailable })), (x[21] = e))
          : (e = x[21]),
          (h = e))
      } else if (a?.status === "linked") h = a.email_address
      else {
        let e
        ;(x[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...ev.setup })), (x[22] = e))
          : (e = x[22]),
          (h = e))
      }
      let _ = "setup" === g ? "section" : g,
        S = j?.email_address
      x[23] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, n.jsx)(W.VDi, {})), (x[23] = p)) : (p = x[23])
      let C = t || v
      return (
        x[24] !== w ||
        x[25] !== v ||
        x[26] !== h ||
        x[27] !== r ||
        x[28] !== l ||
        x[29] !== A ||
        x[30] !== _ ||
        x[31] !== S ||
        x[32] !== C
          ? ((f = (0, n.jsx)(ee.R, {
              renderShortcut: l,
              ...r,
              title: A,
              mode: _,
              settingsValue: S,
              icon: p,
              disabled: C,
              loading: v,
              "aria-busy": v,
              "aria-label": w,
              children: h,
            })),
            (x[24] = w),
            (x[25] = v),
            (x[26] = h),
            (x[27] = r),
            (x[28] = l),
            (x[29] = A),
            (x[30] = _),
            (x[31] = S),
            (x[32] = C),
            (x[33] = f))
          : (f = x[33]),
        f
      )
    }
    let ev = (0, O.YK)({
      setup: { id: "restricted.aeon.email.setup.action", defaultMessage: "Set up email" },
      setupTitle: { id: "restricted.aeon.email.setup.focusedTitle.productName", defaultMessage: "{dot}\u2019s email" },
      settings: { id: "restricted.aeon.email.settings.title", defaultMessage: "Email settings" },
      blockedSenders: { id: "restricted.aeon.email.blockedSenders.title", defaultMessage: "Blocked senders" },
      recentEmail: { id: "restricted.aeon.email.activity.title", defaultMessage: "Recent email" },
      unavailable: { id: "restricted.aeon.email.summary.unavailable", defaultMessage: "Email unavailable" },
    })
    var ey = a("rred"),
      eb = a("J8d1"),
      ej = a("MZvE")
    function eA(e) {
      let t,
        a = (0, s.c)(5),
        { conversationId: r, layout: l, showActivityStatus: o } = e,
        c = void 0 === l ? "row" : l,
        d = void 0 === o || o,
        u = (0, i._U)(P.D0, r)
      return (
        a[0] !== r || a[1] !== u || a[2] !== c || a[3] !== d
          ? ((t = u && null != r ? (0, n.jsx)(eR, { conversationId: r, layout: c, showActivityStatus: d }) : null),
            (a[0] = r),
            (a[1] = u),
            (a[2] = c),
            (a[3] = d),
            (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function ew(e) {
      let t,
        a = (0, s.c)(6),
        { renderShortcut: r, conversationId: l, mode: i, onSetup: o } = e,
        c = void 0 === i ? "content" : i,
        d = eB(l)
      return (
        a[0] !== l || a[1] !== d || a[2] !== c || a[3] !== o || a[4] !== r
          ? ((t = (0, n.jsx)(eh, { renderShortcut: r, conversationId: l, isArchived: d, mode: c, onSetup: o })),
            (a[0] = l),
            (a[1] = d),
            (a[2] = c),
            (a[3] = o),
            (a[4] = r),
            (a[5] = t))
          : (t = a[5]),
        t
      )
    }
    function e_({
      renderAppearancePicker: e,
      description: t = (0, n.jsx)(c.A, {
        id: "restricted.aeon.summary.identity.productName.dot",
        defaultMessage: "Your private {productName}",
        values: { productName: (0, n.jsx)("strong", { children: "dot" }) },
      }),
      activityStatus: a,
      mode: s = "section",
      layout: o = "row",
    }) {
      let d = { duration: 0.15 * !(0, i.Ul)(_.x), ease: C.Wu },
        u = (0, n.jsxs)("div", {
          className: "flex min-w-0 items-center gap-token-button-composer-gap select-none",
          children: [
            (0, n.jsx)(S.x.ItemLeading, {
              variant: "compact" === o ? "custom" : "intrinsic",
              children: (0, n.jsx)(l.P.div, {
                className: "shrink-0",
                layout: "row" !== o,
                layoutDependency: o,
                transition: d,
                children: e("row" === o ? "profile" : o),
              }),
            }),
            (0, n.jsxs)(l.P.div, {
              className: "flex min-w-0 flex-1 flex-col text-base",
              layout: "row" !== o && "position",
              layoutDependency: o,
              transition: d,
              children: [
                (0, n.jsx)("div", {
                  className: (0, r.A)(
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
    function eS(e) {
      let t,
        a = (0, s.c)(8),
        { isActive: r, lastActiveAtMs: l, latestActivityAtMs: i, isPaused: o, pausedAtMs: c, pauseResumeAction: d } = e,
        u = void 0 === c ? null : c
      if (void 0 !== o && o) {
        let e
        return (
          a[0] !== d || a[1] !== u
            ? ((e = (0, n.jsx)(eI, { pausedAtMs: u, pauseResumeAction: d })), (a[0] = d), (a[1] = u), (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      let m = (void 0 === i ? null : i) ?? l
      if (r) {
        let e
        return (a[3] !== d ? ((e = (0, n.jsx)(eC, { pauseResumeAction: d })), (a[3] = d), (a[4] = e)) : (e = a[4]), e)
      }
      return (
        a[5] !== m || a[6] !== d
          ? ((t = null == m ? null : (0, n.jsx)(ek, { lastActiveAtMs: m, pauseResumeAction: d })),
            (a[5] = m),
            (a[6] = d),
            (a[7] = t))
          : (t = a[7]),
        t
      )
    }
    function eC(e) {
      let t,
        a,
        r = (0, s.c)(3),
        { pauseResumeAction: l } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(c.A, { id: "restricted.aeon.summary.active", defaultMessage: "Active" })), (r[0] = t))
          : (t = r[0]),
        r[1] !== l ? ((a = (0, n.jsx)(eP, { pauseResumeAction: l, children: t })), (r[1] = l), (r[2] = a)) : (a = r[2]),
        a
      )
    }
    function ek(e) {
      let t,
        a = (0, s.c)(5),
        { lastActiveAtMs: r, pauseResumeAction: l } = e,
        i = r + 6e4,
        o = (0, A.Oc)(i)
      return (
        a[0] !== i || a[1] !== r || a[2] !== o || a[3] !== l
          ? ((t =
              o.getTime() < i
                ? (0, n.jsx)(eC, { pauseResumeAction: l })
                : (0, n.jsx)(eM, { lastActiveAtMs: r, pauseResumeAction: l })),
            (a[0] = i),
            (a[1] = r),
            (a[2] = o),
            (a[3] = l),
            (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function eM(e) {
      let t,
        a,
        r,
        l = (0, s.c)(9),
        { lastActiveAtMs: i, pauseResumeAction: o } = e,
        d = (0, A.wv)()
      l[0] !== i || l[1] !== d
        ? ((t = (0, j.w)(new Date(i).toISOString(), d)), (l[0] = i), (l[1] = d), (l[2] = t))
        : (t = l[2])
      let { unit: u, value: m } = t,
        h = -m
      return (
        l[3] !== h || l[4] !== u
          ? ((a = (0, n.jsx)(c.A, {
              id: "restricted.aeon.summary.activeRelativeTimeNatural",
              defaultMessage: "Active {time}",
              values: { time: (0, n.jsx)(v, { numeric: "always", unit: u, value: h }, "active-relative-time") },
            })),
            (l[3] = h),
            (l[4] = u),
            (l[5] = a))
          : (a = l[5]),
        l[6] !== o || l[7] !== a
          ? ((r = (0, n.jsx)(eP, { pauseResumeAction: o, children: a })), (l[6] = o), (l[7] = a), (l[8] = r))
          : (r = l[8]),
        r
      )
    }
    function eI(e) {
      let t,
        a,
        r,
        l = (0, s.c)(15),
        { pausedAtMs: i, pauseResumeAction: o } = e,
        d = (0, A.wv)(),
        u = null == i ? null : i + 6e4,
        m = (0, A.Oc)(u),
        h = null != u && m.getTime() < u ? m : d
      if (null == i) {
        let e, t
        return (
          l[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, { id: "restricted.aeon.summary.paused", defaultMessage: "Paused" })), (l[0] = e))
            : (e = l[0]),
          l[1] !== o
            ? ((t = (0, n.jsx)(eP, { pauseResumeAction: o, children: e })), (l[1] = o), (l[2] = t))
            : (t = l[2]),
          t
        )
      }
      if (h.getTime() < i + 6e4) {
        let e, t
        return (
          l[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, {
                id: "restricted.aeon.summary.pausedJustNow",
                defaultMessage: "Paused just now",
              })),
              (l[3] = e))
            : (e = l[3]),
          l[4] !== o
            ? ((t = (0, n.jsx)(eP, { pauseResumeAction: o, children: e })), (l[4] = o), (l[5] = t))
            : (t = l[5]),
          t
        )
      }
      l[6] !== h || l[7] !== i
        ? ((t = (0, j.w)(new Date(i).toISOString(), h)), (l[6] = h), (l[7] = i), (l[8] = t))
        : (t = l[8])
      let { unit: p, value: f } = t,
        x = -f
      return (
        l[9] !== x || l[10] !== p
          ? ((a = (0, n.jsx)(c.A, {
              id: "restricted.aeon.summary.pausedRelativeTime",
              defaultMessage: "Paused {time}",
              values: { time: (0, n.jsx)(v, { numeric: "always", unit: p, value: x }, "paused-relative-time") },
            })),
            (l[9] = x),
            (l[10] = p),
            (l[11] = a))
          : (a = l[11]),
        l[12] !== o || l[13] !== a
          ? ((r = (0, n.jsx)(eP, { pauseResumeAction: o, children: a })), (l[12] = o), (l[13] = a), (l[14] = r))
          : (r = l[14]),
        r
      )
    }
    function eN(e) {
      let t,
        a,
        r,
        l = (0, s.c)(10),
        { conversationId: d, pauseResumeAction: u } = e,
        m = (0, i._U)(N.kt, d)
      l[0] !== d ? ((t = (e) => (0, I.sQ)(d, e)), (l[0] = d), (l[1] = t)) : (t = l[1])
      let h = t
      l[2] !== d ? ((a = () => (0, I.tJ)(d)), (l[2] = d), (l[3] = a)) : (a = l[3])
      let p = a,
        f = (0, o.useSyncExternalStore)(h, p, eT)
      if (m) {
        let e, t
        return (
          l[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(c.A, { ...M.A.adminPaused })), (l[4] = e))
            : (e = l[4]),
          l[5] !== u
            ? ((t = (0, n.jsx)(eP, { pauseResumeAction: u, children: e })), (l[5] = u), (l[6] = t))
            : (t = l[6]),
          t
        )
      }
      return (
        l[7] !== u || l[8] !== f
          ? ((r = (0, n.jsx)(eI, { pausedAtMs: f, pauseResumeAction: u })), (l[7] = u), (l[8] = f), (l[9] = r))
          : (r = l[9]),
        r
      )
    }
    function eT() {
      return null
    }
    function eP(e) {
      let t,
        a = (0, s.c)(5),
        { children: r, pauseResumeAction: l } = e
      if (null != l) {
        let e
        return (
          a[0] !== r || a[1] !== l
            ? ((e = (0, n.jsx)(T.J, { ...l, className: "leading-5 text-tertiary", statusLabel: r })),
              (a[0] = r),
              (a[1] = l),
              (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      return (
        a[3] !== r
          ? ((t = (0, n.jsx)("p", { className: "leading-5 text-tertiary", children: r })), (a[3] = r), (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function eR(e) {
      let t,
        a,
        r,
        l,
        i,
        c,
        d,
        u = (0, s.c)(23),
        { activityStatus: m, conversationId: h, layout: p, showActivityStatus: f, showThreadControls: x } = e,
        g = void 0 === x || x,
        v = eB(h),
        y = (0, o.useRef)(null)
      return (
        u[0] !== h
          ? ((t = (e) => {
              let t = "name" === e || "compact-name" === e
              return (0, n.jsx)(k.AeonAppearancePicker, {
                ref: t ? void 0 : y,
                conversationId: h,
                variant: e,
                onTrigger: t ? (e) => y.current?.open(e) : void 0,
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
                    children: (0, n.jsx)(eC, {}),
                  })
                : null),
            (u[2] = p),
            (u[3] = a))
          : (a = u[3]),
        u[4] !== m || u[5] !== h || u[6] !== f
          ? ((r = f
              ? (0, n.jsx)("div", {
                  className: "col-start-1 row-start-1 flex flex-col",
                  children: m ?? (0, n.jsx)(ez, { conversationId: h }, h),
                })
              : null),
            (u[4] = m),
            (u[5] = h),
            (u[6] = f),
            (u[7] = r))
          : (r = u[7]),
        u[8] !== a || u[9] !== r
          ? ((l = (0, n.jsxs)("div", { className: "grid", children: [a, r] })), (u[8] = a), (u[9] = r), (u[10] = l))
          : (l = u[10]),
        u[11] !== p || u[12] !== t || u[13] !== l
          ? ((i = (0, n.jsx)(e_, {
              description: null,
              layout: p,
              renderAppearancePicker: t,
              activityStatus: l,
              mode: "content",
            })),
            (u[11] = p),
            (u[12] = t),
            (u[13] = l),
            (u[14] = i))
          : (i = u[14]),
        u[15] !== h || u[16] !== v || u[17] !== p || u[18] !== g
          ? ((c = g
              ? (0, n.jsx)("div", {
                  hidden: "compact" === p,
                  children: (0, n.jsx)(q, { conversationId: h, isArchived: v }, h),
                })
              : null),
            (u[15] = h),
            (u[16] = v),
            (u[17] = p),
            (u[18] = g),
            (u[19] = c))
          : (c = u[19]),
        u[20] !== i || u[21] !== c
          ? ((d = (0, n.jsxs)(n.Fragment, { children: [i, c] })), (u[20] = i), (u[21] = c), (u[22] = d))
          : (d = u[22]),
        d
      )
    }
    let eU = (0, i.i1)(w.u, (e, { get: t }) => {
      let a = t(R.cloudAeonByThreadId$, e, { enabled: !1 }).data
      return t(ey.DB, { conversationId: e, roomId: (0, ej.s)(t, a) ?? void 0 })
    })
    function ez(e) {
      let t,
        a,
        r,
        l = (0, s.c)(13),
        { conversationId: o } = e,
        c = (0, i._U)(b.qX, o),
        d = (0, i._U)(eU, o),
        u = eB(o),
        m = (0, i._U)(N.dH, o)
      l[0] !== d
        ? ((t = null == d ? void 0 : (0, n.jsx)(eb.W, { heading: d.heading, state: d.state })), (l[0] = d), (l[1] = t))
        : (t = l[1])
      let h = null != d,
        p = "stopped" === m
      return (
        l[2] !== o || l[3] !== c || l[4] !== u || l[5] !== m
          ? ((a =
              "off" === m || "failed" === m
                ? void 0
                : {
                    conversationId: o,
                    executionHostId: c,
                    isActionEnabled: !u,
                    isResponseInProgress: "working" === m,
                  }),
            (l[2] = o),
            (l[3] = c),
            (l[4] = u),
            (l[5] = m),
            (l[6] = a))
          : (a = l[6]),
        l[7] !== o || l[8] !== t || l[9] !== h || l[10] !== p || l[11] !== a
          ? ((r = (0, n.jsx)(eq, {
              conversationId: o,
              liveActivityLabel: t,
              isActive: h,
              isPaused: p,
              pauseResumeAction: a,
            })),
            (l[7] = o),
            (l[8] = t),
            (l[9] = h),
            (l[10] = p),
            (l[11] = a),
            (l[12] = r))
          : (r = l[12]),
        r
      )
    }
    function eB(e) {
      let t = (0, i._U)(b.u4, e),
        a = (0, y.zy)()
      return t || a.state?.archivedConversationPreview === !0
    }
    function eq(e) {
      let t,
        a,
        r,
        l = (0, s.c)(18),
        { conversationId: c, liveActivityLabel: d, isActive: u, isPaused: m, pauseResumeAction: h } = e,
        p = (0, i.gh)(w.u),
        [f, x] = (0, o.useState)(null),
        g = (0, i._U)(b.P$, c),
        v = (0, i._U)(I.zf, c),
        y = (0, i._U)(P.DL, u && null != f ? null : c),
        j = (0, i._U)(I.Tu, c),
        A = (0, i._U)(I.rM, c),
        _ = y ?? v ?? g
      if (
        (null == f && null != _ && x(_),
        l[0] !== c || l[1] !== v || l[2] !== g || l[3] !== p
          ? ((t = () => {
              null == v && null != g && (0, I.dG)(p, c, g)
            }),
            (a = [c, v, g, p]),
            (l[0] = c),
            (l[1] = v),
            (l[2] = g),
            (l[3] = p),
            (l[4] = t),
            (l[5] = a))
          : ((t = l[4]), (a = l[5])),
        (0, o.useEffect)(t, a),
        m)
      ) {
        let e
        return (
          l[6] !== c || l[7] !== h
            ? ((e = (0, n.jsx)(eN, { conversationId: c, pauseResumeAction: h })), (l[6] = c), (l[7] = h), (l[8] = e))
            : (e = l[8]),
          e
        )
      }
      return (
        l[9] !== f ||
        l[10] !== u ||
        l[11] !== _ ||
        l[12] !== j ||
        l[13] !== y ||
        l[14] !== d ||
        l[15] !== h ||
        l[16] !== A
          ? ((r =
              null != d
                ? (0, n.jsx)(eP, { pauseResumeAction: h, children: d })
                : (0, n.jsx)(eS, {
                    isActive: u,
                    lastActiveAtMs: f ?? _,
                    latestActivityAtMs: (function (...e) {
                      return e.reduce((e, t) => (null == t ? e : Math.max(e ?? t, t)), null)
                    })(y, j, A),
                    pauseResumeAction: h,
                  })),
            (l[9] = f),
            (l[10] = u),
            (l[11] = _),
            (l[12] = j),
            (l[13] = y),
            (l[14] = d),
            (l[15] = h),
            (l[16] = A),
            (l[17] = r))
          : (r = l[17]),
        r
      )
    }
  },
  Nw18(e, t, a) {
    var n = a("DBCl"),
      s = a("ASxG"),
      r = a("Kwur"),
      l = a("GDNt")
    let i = s.k5n([
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
          return r.Request.safePut("/tbo/{tbo_id}/channels/email", {
            parameters: { path: { tbo_id: e } },
            requestBody: t,
          })
        },
        DZ: function (e, t) {
          return r.Request.safeGet("/tbo/{tbo_id}/channels/email", { parameters: { path: { tbo_id: e } }, signal: t })
        },
        K2: function (e) {
          return r.Request.safeDelete("/tbo/{tbo_id}/channels/email", { parameters: { path: { tbo_id: e } } })
        },
        KO: function ({ aeonId: e, accountId: t, userId: a, folder: s }, l) {
          return r.Request.safeGet("/tbo/{tbo_id}/channels/email/activity", {
            parameters: { path: { tbo_id: e }, query: { activity_folder: s } },
            additionalHeaders: { [n.zBc]: t },
            expectedIdentity: { accountId: t, userId: a },
            expectedErrorStatuses: [403, 404, 409, 503],
            signal: l,
          })
        },
        T5: function (e) {
          if (!(e instanceof l.fk)) return { code: "unavailable" }
          let t = i.safeParse(e.errorCode ?? (0, n.$Cs)(e.message))
          return t.success
            ? { code: t.data }
            : [401, 403, 404].includes(e.status)
              ? { code: "access_denied" }
              : 409 === e.status
                ? { code: "conflict" }
                : { code: 422 === e.status ? "invalid_address" : "unavailable" }
        },
        bX: function ({ aeonId: e, accountId: t, userId: a, messageId: s }, l) {
          return r.Request.safeGet("/tbo/{tbo_id}/channels/email/activity/{message_id}", {
            parameters: { path: { tbo_id: e, message_id: s } },
            additionalHeaders: { [n.zBc]: t },
            expectedIdentity: { accountId: t, userId: a },
            expectedErrorStatuses: [403, 404, 409, 503],
            signal: l,
          })
        },
        hL: function (e, t) {
          return r.Request.safeGet("/tbo/{tbo_id}/channels/email/blocked-senders", {
            parameters: { path: { tbo_id: e } },
            signal: t,
          })
        },
        pW: function (e, t) {
          return r.Request.safePost("/tbo/{tbo_id}/channels/email/blocked-senders", {
            parameters: { path: { tbo_id: e } },
            requestBody: t,
          })
        },
        qk: function (e) {
          return e instanceof l.fk
            ? 404 === e.status
              ? "email_activity_message_unavailable" === (e.errorCode ?? (0, n.$Cs)(e.message))
                ? "message"
                : "mailbox"
              : 401 === e.status || 403 === e.status
                ? "mailbox"
                : "retry"
            : "retry"
        },
        rj: function (e, t) {
          return r.Request.safePost("/tbo/{tbo_id}/channels/email/claim", {
            parameters: { path: { tbo_id: e } },
            requestBody: t,
          })
        },
        zz: function (e, t) {
          return r.Request.safeGet("/tbo/{tbo_id}/channels/email/options", {
            parameters: { path: { tbo_id: e } },
            signal: t,
          })
        },
      },
    )
  },
  HFiL(e, t, a) {
    var n = a("qmMi"),
      s = a("OWtl"),
      r = a("OMIV")
    let l = (0, n.un)(s.u, ({ get: e }) => e(r.JW, "2208356192"))
    a.d(t, {}, { U: l })
  },
  X7du(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      r = a("oyxz"),
      l = a("JNtf")
    a.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            a,
            i = (0, s.c)(3),
            { children: o } = e
          return (
            i[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(l.rr, {
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(r.A, {
                    id: "restricted.aeon.email.blockedSenders.description",
                    defaultMessage: "New messages from these addresses won\u2019t reach your {dot}.",
                    values: { dot: "dot" },
                  }),
                })),
                (i[0] = t))
              : (t = i[0]),
            i[1] !== o
              ? ((a = (0, n.jsxs)("div", {
                  className: "flex min-h-0 min-w-0 flex-1 flex-col gap-6 overflow-y-auto",
                  children: [
                    t,
                    (0, n.jsx)("div", { className: "flex min-w-0 flex-1 flex-col gap-4 text-start", children: o }),
                  ],
                })),
                (i[1] = o),
                (i[2] = a))
              : (a = i[2]),
            a
          )
        },
      },
    )
  },
  ulgT(e, t, a) {
    let n = (0, a("Qgfj").YK)({
      settings: { id: "restricted.aeon.email.settings.loading", defaultMessage: "Loading email settings\u2026" },
      recent: { id: "restricted.aeon.email.activity.loading", defaultMessage: "Loading recent email\u2026" },
      message: { id: "restricted.aeonMessaging.email.loading", defaultMessage: "Loading email\u2026" },
      blockedSenders: {
        id: "restricted.aeon.email.blockedSenders.loading",
        defaultMessage: "Loading blocked senders\u2026",
      },
      offline: {
        id: "restricted.aeonMessaging.email.waitingForConnection",
        defaultMessage: "Waiting for a connection\u2026",
      },
    })
    a.d(t, {}, { L: n })
  },
  Pmvo(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      r = a("on57"),
      l = a("oyxz"),
      i = a("JNtf"),
      o = a("evwP"),
      c = a("RNul"),
      d = a("ulgT")
    a.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            a,
            u,
            m,
            h,
            p = (0, s.c)(11),
            { kind: f, describeDialog: x, centerInDialog: g } = e,
            v = void 0 !== x && x ? i.rr : "span",
            y = void 0 !== g && g && "inset-0 [@container_contact-setup_(min-height:20rem)]:absolute"
          ;(p[0] !== y
            ? ((t = (0, r.A)("pointer-events-none w-full flex-1 select-none", y)), (p[0] = y), (p[1] = t))
            : (t = p[1]),
            p[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)("div", { "aria-hidden": "true", className: "flex", children: (0, n.jsx)(c.y, {}) })),
                (p[2] = a))
              : (a = p[2]))
          let b = d.L[f]
          return (
            p[3] !== b ? ((u = (0, n.jsx)(l.A, { ...b })), (p[3] = b), (p[4] = u)) : (u = p[4]),
            p[5] !== v || p[6] !== u
              ? ((m = (0, n.jsxs)("div", {
                  className: "flex items-center gap-2",
                  role: "status",
                  children: [a, (0, n.jsx)(v, { children: u })],
                })),
                (p[5] = v),
                (p[6] = u),
                (p[7] = m))
              : (m = p[7]),
            p[8] !== t || p[9] !== m
              ? ((h = (0, n.jsx)(o.W, { className: t, children: m })), (p[8] = t), (p[9] = m), (p[10] = h))
              : (h = p[10]),
            h
          )
        },
      },
    )
  },
  se9x(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      r = a("DcH0"),
      l = a("TPDS"),
      i = a("Pmvo")
    a.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            a,
            o,
            c = (0, s.c)(5),
            { describeDialog: d } = e,
            u = void 0 !== d && d
          return (
            c[0] !== u
              ? ((t = (0, n.jsx)(l.kQ, {
                  description: null,
                  children: (0, n.jsx)(i.n, { kind: "settings", describeDialog: u }),
                })),
                (c[0] = u),
                (c[1] = t))
              : (t = c[1]),
            c[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(r._, {
                  "aria-hidden": !0,
                  className: "h-10 shrink-0 rounded-full",
                  variant: "solid",
                })),
                (c[2] = a))
              : (a = c[2]),
            c[3] !== t
              ? ((o = (0, n.jsxs)("div", { className: "flex flex-1 flex-col gap-6", children: [t, a] })),
                (c[3] = t),
                (c[4] = o))
              : (o = c[4]),
            o
          )
        },
      },
    )
  },
  YsvR(e, t, a) {
    var n = a("D7Ms"),
      s = a("qmMi"),
      r = a("SPnB"),
      l = a("OWtl"),
      i = a("TYK1"),
      o = a("Nw18"),
      c = a("HFiL")
    let d = (0, s.vU)(l.u, (e, { get: t }) => {
        let a = t(r.chatGptAuthenticatedAccountId$),
          n = t(r.chatGptAuthenticatedUserId$)
        return {
          enabled: null != a && null != n,
          queryKey: ["cloud-aeon-email", a, n, e],
          queryFn: ({ signal: t }) => (0, o.DZ)(e, t),
          retry: !1,
          staleTime: 0,
        }
      }),
      u = (0, s.vU)(l.u, (e, { get: t }) => {
        let a = t(r.chatGptAuthenticatedAccountId$),
          n = t(r.chatGptAuthenticatedUserId$),
          s = t(d, e),
          l = s.isError && ["workspace_disabled", "ineligible"].includes((0, o.T5)(s.error).code)
        return {
          enabled: null != a && null != n && !l,
          queryKey: ["cloud-aeon-email-options", a, n, e],
          queryFn: ({ signal: t }) => (0, o.zz)(e, t),
          retry: !1,
          refetchOnMount: !0,
          staleTime: 0,
        }
      }),
      m = (0, s.i1)(l.u, (e, { get: t }) => {
        if (!t(c.U)) return !1
        let a = t(i.cloudAeonByThreadId$, e).data
        if (null == a) return !1
        let n = t(d, a.id)
        return !!n.isSuccess && "linked" === n.data.status && 1 === n.data.narrow_email_consent_version
      }),
      h = (0, s.c4)(l.u, (e, { get: t }) => {
        let a = t(r.chatGptAuthenticatedAccountId$),
          n = t(r.chatGptAuthenticatedUserId$),
          s = ["cloud-aeon-email", a, n, e]
        return {
          mutationKey: ["cloud-aeon-email", a, n, e, "update"],
          mutationFn: async (t) => {
            switch (t.type) {
              case "claim":
                return (0, o.rj)(e, t.body)
              case "link":
                return (0, o.D0)(e, t.body)
              case "unlink":
                await (0, o.K2)(e)
                return
            }
          },
          retry: !1,
          onSuccess: async (e, t, a, { client: n }) => {
            ;(await n.cancelQueries({ queryKey: s, exact: !0 }),
              null != e ? n.setQueryData(s, e) : await n.invalidateQueries({ queryKey: s, exact: !0 }))
          },
          onError: async (e, t, a, { client: n }) => {
            ;(await n.cancelQueries({ queryKey: s, exact: !0 }), await n.invalidateQueries({ queryKey: s, exact: !0 }))
          },
          onSettled: (e, t, s, r, { client: l }) => {
            l.invalidateQueries({ queryKey: ["cloud-aeon-email-options", a, n] })
          },
        }
      }),
      p = (0, s.vU)(l.u, (e, { get: t }) => {
        let a = t(r.chatGptAuthenticatedUserId$),
          n = t(r.chatGptAuthenticatedAccountId$)
        return {
          enabled: null != a && null != n,
          queryKey: ["dot-email-blocked-senders", n, a, e],
          queryFn: ({ signal: t }) => (0, o.hL)(e, t),
          retry: !1,
          staleTime: 0,
        }
      }),
      f = (0, s.vU)(l.u, (e, { get: t }) => ({
        queryKey: ["dot-email-activity", e.dialogId, e.accountId, e.userId, e.aeonId, e.inboxId, e.folder],
        queryFn:
          e.accountId === t(r.chatGptAuthenticatedAccountId$) && e.userId === t(r.o8)
            ? ({ signal: t }) => (0, o.KO)(e, t)
            : n.hT,
        gcTime: 1 / 0,
        staleTime: 1 / 0,
        retry: !1,
      })),
      x = (0, s.vU)(l.u, (e, { get: t }) => ({
        queryKey: [
          "dot-email-activity",
          e.dialogId,
          e.accountId,
          e.userId,
          e.aeonId,
          e.inboxId,
          "detail",
          e.messageId,
          e.openId,
        ],
        queryFn:
          e.accountId === t(r.chatGptAuthenticatedAccountId$) && e.userId === t(r.o8)
            ? ({ signal: t }) => (0, o.bX)(e, t)
            : n.hT,
        gcTime: 0,
        staleTime: 0,
        retry: !1,
      })),
      g = (0, s.c4)(l.u, (e, { get: t }) => {
        let a = ["dot-email-blocked-senders", t(r.chatGptAuthenticatedAccountId$), t(r.chatGptAuthenticatedUserId$), e]
        return {
          mutationKey: [...a, "update"],
          retry: !1,
          mutationFn: (t) => (0, o.pW)(e, t),
          onSettled: (e, t, n, s, { client: r }) => r.invalidateQueries({ queryKey: a, exact: !0 }),
        }
      })
    a.d(t, {}, { Fz: p, Ic: h, Oz: f, Z0: u, dk: d, oV: m, zL: x, zW: g })
  },
  WAho(e, t, a) {
    a.d(t, { g: () => I })
    var n = a("ABep"),
      s = a("QosV")
    let r = (0, a("ESTr").a)({
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
    var l = a("p897"),
      i = a("on57"),
      o = a("qmMi"),
      c = a("zd8w"),
      d = a("Wf1j"),
      u = a("oyxz"),
      m = a("Sm6l"),
      h = a("uuN8"),
      p = a("JNtf"),
      f = a("Ot7V"),
      x = a("HOLv"),
      g = a("bVeK"),
      v = a("qlCY"),
      y = a("m22M"),
      b = a("gdZA"),
      j = a("amW0"),
      A = a("aepO"),
      w = a("jTFC"),
      _ = a("q3j5"),
      S = a("TMjP"),
      C = a("TPDS"),
      k = a("PI8O"),
      M = a("jvpl")
    function I(e) {
      let t,
        a,
        r,
        l,
        i,
        o,
        x,
        g,
        v = (0, s.c)(35),
        { conversationId: y, method: b, destination: j, recipientName: w, preview: _ } = e,
        S = (0, d.A)(),
        M = (0, c.useId)(),
        I = "slack" === b || "teams" === b
      v[0] !== w ? ((t = w?.trim() || null), (v[0] = w), (v[1] = t)) : (t = v[1])
      let R = t
      return (
        v[2] !== R || v[3] !== y || v[4] !== j || v[5] !== I || v[6] !== b || v[7] !== _
          ? ((a =
              "text" === b
                ? (0, n.jsx)(C.kQ, {
                    description: null,
                    children: (0, n.jsx)(k.S, { destination: j, conversationId: y }),
                  })
                : (_ ?? (0, n.jsx)(P, { conversationId: y, method: b, recipient: I ? R : j }))),
            (v[2] = R),
            (v[3] = y),
            (v[4] = j),
            (v[5] = I),
            (v[6] = b),
            (v[7] = _),
            (v[8] = a))
          : (a = v[8]),
        v[9] !== R || v[10] !== I || v[11] !== M
          ? ((r = I ? (0, n.jsx)(T, { id: M, recipient: R }) : null), (v[9] = R), (v[10] = I), (v[11] = M), (v[12] = r))
          : (r = v[12]),
        v[13] !== y || v[14] !== j || v[15] !== b
          ? ((l = "text" === b ? (0, n.jsx)(k.U, { destination: j, conversationId: y }) : null),
            (v[13] = y),
            (v[14] = j),
            (v[15] = b),
            (v[16] = l))
          : (l = v[16]),
        v[17] !== j || v[18] !== S || v[19] !== b
          ? ((i =
              "email" === b
                ? (0, n.jsxs)("div", {
                    className:
                      "flex h-10 min-w-0 items-center justify-between gap-2 overflow-hidden rounded-xl border border-default bg-primary-soft ps-3 pe-1",
                    role: "group",
                    "aria-label": S.formatMessage(
                      {
                        id: "restricted.aeon.contact.emailAddress.productName",
                        defaultMessage: "{dot}\u2019s email address",
                      },
                      { dot: "dot" },
                    ),
                    children: [
                      (0, n.jsx)("span", {
                        className: "min-w-0 truncate text-sm text-default select-text",
                        title: j,
                        children: j,
                      }),
                      (0, n.jsx)(
                        h.i,
                        { buttonText: !0, showIcon: !1, renderButton: N, onCopy: (e) => (0, A.lW)(j, e) },
                        j,
                      ),
                    ],
                  })
                : null),
            (v[17] = j),
            (v[18] = S),
            (v[19] = b),
            (v[20] = i))
          : (i = v[20]),
        v[21] !== b
          ? ((o =
              "email" === b
                ? (0, n.jsx)(p.HM, {
                    asChild: !0,
                    children: (0, n.jsx)(m.$, {
                      color: "primary",
                      size: "detailAction",
                      children: (0, n.jsx)(u.A, { id: "common.close", defaultMessage: "Close" }),
                    }),
                  })
                : null),
            (v[21] = b),
            (v[22] = o))
          : (o = v[22]),
        v[23] !== j || v[24] !== I || v[25] !== b || v[26] !== M
          ? ((x = I
              ? (0, n.jsx)("div", {
                  className: "flex gap-2",
                  children: (0, n.jsx)(m.z, {
                    className: "flex-1",
                    href: j,
                    target: "teams" === b ? "_blank" : void 0,
                    rel: "teams" === b ? "noopener noreferrer" : void 0,
                    color: "primary",
                    size: "detailAction",
                    "aria-describedby": M,
                    onClick: (e) =>
                      (0, f.PQ)({
                        event: e,
                        href: j,
                        initiator: "side_panel_menu",
                        openTarget: "slack" === b ? void 0 : "external-browser",
                      }),
                    children:
                      "teams" === b
                        ? (0, n.jsx)(u.A, { id: "restricted.aeon.contact.openTeams", defaultMessage: "Open Teams" })
                        : (0, n.jsx)(u.A, { id: "restricted.aeon.slack.setup.open", defaultMessage: "Open Slack" }),
                  }),
                })
              : null),
            (v[23] = j),
            (v[24] = I),
            (v[25] = b),
            (v[26] = M),
            (v[27] = x))
          : (x = v[27]),
        v[28] !== a || v[29] !== r || v[30] !== l || v[31] !== i || v[32] !== o || v[33] !== x
          ? ((g = (0, n.jsxs)("div", {
              className: "flex min-w-0 flex-1 flex-col gap-6",
              children: [a, r, l, i, o, x],
            })),
            (v[28] = a),
            (v[29] = r),
            (v[30] = l),
            (v[31] = i),
            (v[32] = o),
            (v[33] = x),
            (v[34] = g))
          : (g = v[34]),
        g
      )
    }
    function N(e) {
      return (0, n.jsx)(m.$, { ...e, color: "primary", radius: "full", size: "compact" })
    }
    function T(e) {
      let t,
        a,
        r = (0, s.c)(6),
        { id: l, recipient: i } = e,
        o = null != i
      return (
        r[0] !== i || r[1] !== o
          ? ((t = (0, n.jsx)(u.A, {
              id: "restricted.aeon.contact.channelRecipient.dot.productName",
              defaultMessage:
                "{hasRecipient, select, true {Message recipient: @{recipient}} other {Message recipient: your {dot}}}",
              values: { recipient: i, hasRecipient: o, dot: "dot" },
            })),
            (r[0] = i),
            (r[1] = o),
            (r[2] = t))
          : (t = r[2]),
        r[3] !== l || r[4] !== t
          ? ((a = (0, n.jsx)("span", { id: l, className: "sr-only", children: t })), (r[3] = l), (r[4] = t), (r[5] = a))
          : (a = r[5]),
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
        f,
        A,
        C,
        k,
        I,
        N,
        T,
        P,
        R,
        U,
        z,
        B,
        q,
        D,
        E,
        G = (0, s.c)(44),
        { conversationId: F, method: L, recipient: O } = e,
        $ = (0, d.A)(),
        H = (0, o._U)(y.NE, F),
        Q = (0, o._U)(b.zQ, F),
        V = Q ?? H,
        W = $.formatMessage(j.z),
        K = null == V || (0, _.x)(V) || (null == Q && V === W) ? "dot" : V,
        Z = (0, o._U)(S.T, F)
      G[0] !== L || G[1] !== O
        ? ((a =
            "slack" === L || "teams" === L
              ? null == (t = O)
                ? (0, n.jsx)(u.A, {
                    id: "restricted.aeon.contact.unnamedChannelRecipient.productName",
                    defaultMessage: "your {dot}",
                    values: { dot: "dot" },
                  })
                : `@${t}`
              : O),
          (G[0] = L),
          (G[1] = O),
          (G[2] = a))
        : (a = G[2])
      let Y = a
      ;(G[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.A)(M.A.message, "border-default bg-surface shadow-sm")), (G[3] = c))
        : (c = G[3]),
        G[4] !== L
          ? ((m =
              "email" === L
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("span", { className: M.A.messageBrandIcon, children: (0, n.jsx)(x.I, { asset: r }) }),
                      (0, n.jsx)(u.A, {
                        id: "restricted.aeon.contact.preview.emailHeading",
                        defaultMessage: "New message",
                      }),
                    ],
                  })
                : null),
            (G[4] = L),
            (G[5] = m))
          : (m = G[5]),
        G[6] !== L
          ? ((h =
              "slack" === L
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("span", {
                        className: M.A.messageBrandIcon,
                        children: (0, n.jsx)(x.I, { asset: l.l }),
                      }),
                      (0, n.jsx)(u.A, {
                        id: "restricted.aeon.contact.preview.slackHeading",
                        defaultMessage: "Send Slack message",
                      }),
                    ],
                  })
                : null),
            (G[6] = L),
            (G[7] = h))
          : (h = G[7]),
        G[8] !== L
          ? ((p =
              "teams" === L
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("img", { src: v, alt: "", width: 12, height: 12 }),
                      (0, n.jsx)(u.A, {
                        id: "restricted.aeon.contact.preview.teamsHeading",
                        defaultMessage: "Send Teams message",
                      }),
                    ],
                  })
                : null),
            (G[8] = L),
            (G[9] = p))
          : (p = G[9]),
        G[10] !== m || G[11] !== h || G[12] !== p
          ? ((f = (0, n.jsxs)("div", { className: M.A.messageHeading, children: [m, h, p] })),
            (G[10] = m),
            (G[11] = h),
            (G[12] = p),
            (G[13] = f))
          : (f = G[13]),
        G[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.A)(M.A.messageSend, "shrink-0 rounded-full bg-primary-solid text-primary-solid")), (G[14] = A))
          : (A = G[14]),
        G[15] !== L
          ? ((C = (0, n.jsx)("span", {
              className: A,
              children:
                "email" === L
                  ? (0, n.jsx)(u.A, { id: "restricted.aeon.contact.preview.emailSend", defaultMessage: "Send" })
                  : (0, n.jsx)(u.A, {
                      id: "restricted.aeon.contact.preview.sendMessage",
                      defaultMessage: "Send message",
                    }),
            })),
            (G[15] = L),
            (G[16] = C))
          : (C = G[16]),
        G[17] !== f || G[18] !== C
          ? ((k = (0, n.jsxs)("div", { className: M.A.messageHeader, children: [f, C] })),
            (G[17] = f),
            (G[18] = C),
            (G[19] = k))
          : (k = G[19]),
        G[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, i.A)(M.A.messageRecipients, "text-tertiary")),
            (N = (0, n.jsx)(u.A, { id: "restricted.aeon.contact.preview.to", defaultMessage: "To" })),
            (T = (0, i.A)(M.A.messageRecipient, "rounded-full border-default")),
            (G[20] = I),
            (G[21] = N),
            (G[22] = T))
          : ((I = G[20]), (N = G[21]), (T = G[22])))
      let J = Z?.avatar ?? null
      return (
        G[23] !== F || G[24] !== J
          ? ((P = (0, n.jsx)(w.Xm, { className: M.A.messageAvatar, avatar: J, identity: F })),
            (G[23] = F),
            (G[24] = J),
            (G[25] = P))
          : (P = G[25]),
        G[26] !== Y
          ? ((R = (0, n.jsx)("span", { className: "truncate text-default", children: Y })), (G[26] = Y), (G[27] = R))
          : (R = G[27]),
        G[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, n.jsx)("span", { className: M.A.messageRemove, children: (0, n.jsx)(g.Gmf, {}) })), (G[28] = U))
          : (U = G[28]),
        G[29] !== P || G[30] !== R
          ? ((z = (0, n.jsxs)("span", { className: T, children: [P, R, U] })), (G[29] = P), (G[30] = R), (G[31] = z))
          : (z = G[31]),
        G[32] !== L
          ? ((B =
              "email" === L
                ? (0, n.jsx)("span", {
                    className: "ms-auto shrink-0",
                    children: (0, n.jsx)(u.A, {
                      id: "restricted.aeon.contact.preview.emailRecipients",
                      defaultMessage: "Cc Bcc",
                    }),
                  })
                : null),
            (G[32] = L),
            (G[33] = B))
          : (B = G[33]),
        G[34] !== z || G[35] !== B
          ? ((q = (0, n.jsxs)("div", { className: I, children: [N, z, B] })), (G[34] = z), (G[35] = B), (G[36] = q))
          : (q = G[36]),
        G[37] !== K || G[38] !== L
          ? ((D =
              "email" === L
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("p", {
                        className: M.A.messageSubject,
                        children: (0, n.jsx)(u.A, {
                          id: "restricted.aeon.contact.preview.emailSubject",
                          defaultMessage: "Fwd: Trip details",
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: (0, i.A)(M.A.messageBody, M.A.emailBody),
                        children: [
                          (0, n.jsx)("p", {
                            children: (0, n.jsx)(u.A, {
                              id: "restricted.aeon.contact.preview.emailGreeting",
                              defaultMessage: "Hey {name},",
                              values: { name: K },
                            }),
                          }),
                          (0, n.jsx)("p", {
                            children: (0, n.jsx)(u.A, {
                              id: "restricted.aeon.contact.preview.emailSummaryRequest",
                              defaultMessage: "Can you turn these plans into a short itinerary?",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, n.jsx)("p", {
                    className: (0, i.A)(M.A.messageBody, M.A.slackBody),
                    children: (0, n.jsx)(u.A, {
                      id: "restricted.aeon.contact.preview.slackBody",
                      defaultMessage:
                        "Let\u2019s move our meeting to Wednesday so I can join after the design onsite. Happy to find another time that works for you!",
                    }),
                  })),
            (G[37] = K),
            (G[38] = L),
            (G[39] = D))
          : (D = G[39]),
        G[40] !== q || G[41] !== D || G[42] !== k
          ? ((E = (0, n.jsx)("div", {
              className:
                "h-55.5 min-w-0 shrink-0 overflow-hidden rounded-2xl bg-text/5 px-6 text-start select-none @max-xs/contact-setup:h-88",
              "aria-hidden": !0,
              inert: !0,
              children: (0, n.jsx)("div", {
                className: "flex h-full min-w-0 items-center justify-center",
                children: (0, n.jsxs)("div", { className: c, children: [k, q, D] }),
              }),
            })),
            (G[40] = q),
            (G[41] = D),
            (G[42] = k),
            (G[43] = E))
          : (E = G[43]),
        E
      )
    }
  },
  QdY6(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      r = a("on57"),
      l = a("JNtf"),
      i = a("mUDD")
    a.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            a,
            o,
            c,
            d,
            u,
            m,
            h = (0, s.c)(22),
            { title: p, children: f, hasDescription: x, size: g, onClose: v, onCloseAutoFocus: y } = e,
            b = void 0 !== x && x,
            j = "wideTall" === g ? g : void 0,
            A = "wideTall" === g ? void 0 : 440,
            w = "compactTall" === g ? "h-96 max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)]" : void 0
          ;(h[0] !== b ? ((t = b ? {} : { "aria-describedby": void 0 }), (h[0] = b), (h[1] = t)) : (t = h[1]),
            h[2] !== y || h[3] !== t
              ? ((a = { asChild: !0, shouldStopPointerDownPropagation: !1, ...t, onCloseAutoFocus: y }),
                (h[2] = y),
                (h[3] = t),
                (h[4] = a))
              : (a = h[4]),
            h[5] !== v
              ? ((o = (e) => {
                  e || v()
                }),
                (h[5] = v),
                (h[6] = o))
              : (o = h[6]))
          let _ = null != g ? "@container-size/contact-setup" : "@container/contact-setup"
          return (
            h[7] !== _
              ? ((c = (0, r.A)(
                  _,
                  "flex flex-col gap-6 px-6 py-5 text-center text-base leading-normal tracking-normal",
                )),
                (h[7] = _),
                (h[8] = c))
              : (c = h[8]),
            h[9] !== p
              ? ((d = (0, n.jsx)(i.c7, { titleSize: "lg", title: (0, n.jsx)(l.L3, { children: p }) })),
                (h[9] = p),
                (h[10] = d))
              : (d = h[10]),
            h[11] !== f || h[12] !== d || h[13] !== c
              ? ((u = (0, n.jsxs)("div", { className: c, children: [d, f] })),
                (h[11] = f),
                (h[12] = d),
                (h[13] = c),
                (h[14] = u))
              : (u = h[14]),
            h[15] !== u || h[16] !== j || h[17] !== A || h[18] !== w || h[19] !== a || h[20] !== o
              ? ((m = (0, n.jsx)(l.lG, {
                  open: !0,
                  variant: "opaque",
                  size: j,
                  widthHint: A,
                  contentClassName: w,
                  contentPosition: "scrollable",
                  contentProps: a,
                  onOpenChange: o,
                  children: u,
                })),
                (h[15] = u),
                (h[16] = j),
                (h[17] = A),
                (h[18] = w),
                (h[19] = a),
                (h[20] = o),
                (h[21] = m))
              : (m = h[21]),
            m
          )
        },
      },
    )
  },
  TPDS(e, t, a) {
    a.d(t, { mz: () => u, MV: () => m, kQ: () => d })
    var n = a("ABep"),
      s = a("QosV")
    let r = (0, a("ESTr").a)({
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
    var l = a("oyxz"),
      i = a("Sm6l"),
      o = a("HOLv"),
      c = a("DcH0")
    function d(e) {
      let t,
        a,
        r,
        l,
        i,
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
          ? ((r = (0, n.jsxs)("div", {
              className:
                "flex min-h-55.5 min-w-0 flex-1 flex-col gap-3 rounded-2xl bg-text/5 px-6 py-5 @max-xs/contact-setup:min-h-88",
              children: [t, a],
            })),
            (o[4] = t),
            (o[5] = a),
            (o[6] = r))
          : (r = o[6]),
        o[7] !== u
          ? ((l = null != u ? (0, n.jsx)("div", { className: "shrink-0", children: u }) : null), (o[7] = u), (o[8] = l))
          : (l = o[8]),
        o[9] !== r || o[10] !== l
          ? ((i = (0, n.jsxs)("div", {
              className: "flex w-full min-w-0 flex-1 flex-col gap-3 text-center",
              children: [r, l],
            })),
            (o[9] = r),
            (o[10] = l),
            (o[11] = i))
          : (i = o[11]),
        i
      )
    }
    function u({
      title: e,
      description: t,
      icon: a = (0, n.jsx)(o.I, { asset: r, className: "text-secondary" }),
      titleAs: s = "h3",
      role: l,
    }) {
      return (0, n.jsxs)(d, {
        description: null,
        children: [
          a,
          (0, n.jsxs)("div", {
            className: "flex flex-col gap-3 select-none",
            children: [
              (0, n.jsx)(s, { className: "text-base font-semibold", children: e }),
              (0, n.jsx)("div", { className: "px-6 text-sm text-secondary", role: l, children: t }),
            ],
          }),
        ],
      })
    }
    function m() {
      let e,
        t,
        a,
        r = (0, s.c)(3)
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c._, {
              className: "mx-auto h-3 w-48 max-w-full rounded",
              variant: "prominent",
              "aria-hidden": !0,
            })),
            (r[0] = e))
          : (e = r[0]),
        r[1] === Symbol.for("react.memo_cache_sentinel")
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
            (r[1] = t))
          : (t = r[1]),
        r[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsxs)("div", {
              className: "flex flex-1 flex-col gap-6",
              role: "status",
              children: [
                t,
                (0, n.jsx)(i.$, {
                  color: "primary",
                  size: "detailAction",
                  loading: !0,
                  disabled: !0,
                  children: (0, n.jsx)(l.A, { id: "restricted.aeon.contact.loading", defaultMessage: "Loading\u2026" }),
                }),
              ],
            })),
            (r[2] = a))
          : (a = r[2]),
        a
      )
    }
  },
  PI8O(e, t, a) {
    a.d(t, { U: () => M, S: () => k })
    var n = a("ABep"),
      s = a("QosV"),
      r = a("taIy"),
      l = a("qmMi"),
      i = a("Wf1j"),
      o = a("oyxz"),
      c = a("Sm6l"),
      d = a("uuN8"),
      u = a("Ot7V"),
      m = a("bVeK"),
      h = a("XYHU"),
      p = a("q3j5"),
      f = a("gdZA"),
      x = a("amW0"),
      g = a("aepO"),
      v = a("FPUb"),
      y = a("Yn57"),
      b = a("taWv"),
      j = a("AO3k"),
      A = a("McR2"),
      w = a("zHp1")
    let _ = (0, b.Qt)()
    function S(e) {
      let t,
        a,
        r,
        i = (0, s.c)(19),
        { value: o, ariaLabel: c, conversationId: d } = e,
        u = (0, l._U)(null == d ? null : A.i1, d),
        m = u?.kind === "snapshot" && null == u.inlineSrc
      i[0] !== m ? ((t = { enabled: m }), (i[0] = m), (i[1] = t)) : (t = i[1])
      let { src: h } = (0, w.vM)(u?.kind === "snapshot" ? u.assetPointer : "", _, t)
      if (u?.kind === "image") {
        let e,
          t = u.src === y
        ;(i[2] !== u.src || i[3] !== t
          ? ((e = { src: u.src, fillSilhouette: t }), (i[2] = u.src), (i[3] = t), (i[4] = e))
          : (e = i[4]),
          (a = e))
      } else if (u?.kind === "snapshot") {
        let e,
          t = u.inlineSrc ?? h ?? u.fallbackSrc,
          n = t === y
        ;(i[5] !== t || i[6] !== n
          ? ((e = { src: t, fillSilhouette: n }), (i[5] = t), (i[6] = n), (i[7] = e))
          : (e = i[7]),
          (a = e))
      } else if (u?.kind === "pet") {
        let e, t, n
        i[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, v._s)("idle", !0)), (i[8] = e)) : (e = i[8])
        let s = e.frames[0],
          r = v.Pq.columns,
          l = u.spriteRowCount ?? v.Pq.rows,
          o = s.rowIndex / l,
          c = 1 / l
        ;(i[9] !== o || i[10] !== c
          ? ((t = { x: s.columnIndex / r, y: o, width: 1 / r, height: c }), (i[9] = o), (i[10] = c), (i[11] = t))
          : (t = i[11]),
          i[12] !== u.spritesheetUrl || i[13] !== t
            ? ((n = { src: u.spritesheetUrl, crop: t }), (i[12] = u.spritesheetUrl), (i[13] = t), (i[14] = n))
            : (n = i[14]),
          (a = n))
      }
      return (
        i[15] !== c || i[16] !== a || i[17] !== o
          ? ((r = (0, n.jsx)(j.v, { value: o, ariaLabel: c, size: "compact", portrait: a, fallback: null })),
            (i[15] = c),
            (i[16] = a),
            (i[17] = o),
            (i[18] = r))
          : (r = i[18]),
        r
      )
    }
    function C(e, t, a, n) {
      let s = null == a || (0, p.x)(a) ? "dot" : a.trim(),
        r = e.formatMessage(
          { id: "restricted.aeon.messaging.greeting.withoutSender", defaultMessage: "Hey {name}!" },
          { name: s },
        )
      return `sms:${t}${"messages" === n ? "&" : "?&"}body=${encodeURIComponent(r)}`
    }
    function k(e) {
      let t,
        a,
        c,
        u,
        h,
        v,
        y,
        b,
        j,
        A,
        w,
        _,
        k,
        M = (0, s.c)(36),
        { destination: I, orbitName: N, conversationId: T } = e,
        P = (0, i.A)(),
        R = (0, l._U)(f.zQ, T)
      if (M[0] !== T || M[1] !== I || M[2] !== P || M[3] !== N || M[4] !== R) {
        let e = (N ?? R)?.trim(),
          s = { name: e, hasName: !(0, p.x)(e) && (null != R || e !== P.formatMessage(x.z)), dot: "dot" },
          l = (0, r.l)(I),
          i = C(P, I, e, "qr")
        y = "flex min-w-0 flex-col items-center gap-3"
        let d = P.formatMessage(
          {
            id: "restricted.aeon.messaging.textQrCode.label.withName",
            defaultMessage: "QR code to text {hasName, select, true {{name}} other {your {dot}}}",
          },
          s,
        )
        ;(M[13] !== T || M[14] !== i || M[15] !== d
          ? ((b = (0, n.jsx)(S, { value: i, ariaLabel: d, conversationId: T })),
            (M[13] = T),
            (M[14] = i),
            (M[15] = d),
            (M[16] = b))
          : (b = M[16]),
          (v = "text-sm text-secondary select-none"),
          (t = o.A),
          (u = "restricted.aeon.messaging.textQrCode.scanToText.withName"),
          (h =
            "Scan the QR code to text {hasName, select, true {{name}} other {your {dot}}} at <number>{phoneNumber}</number>"),
          (a = s),
          (c = l?.countryCallingCode === "1" ? `+1 ${l.formatNational()}` : (l?.formatInternational() ?? I)),
          (M[0] = T),
          (M[1] = I),
          (M[2] = P),
          (M[3] = N),
          (M[4] = R),
          (M[5] = t),
          (M[6] = a),
          (M[7] = c),
          (M[8] = u),
          (M[9] = h),
          (M[10] = v),
          (M[11] = y),
          (M[12] = b))
      } else ((t = M[5]), (a = M[6]), (c = M[7]), (u = M[8]), (h = M[9]), (v = M[10]), (y = M[11]), (b = M[12]))
      return (
        M[17] !== I || M[18] !== P
          ? ((j = (e) =>
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
                      ariaLabel: P.formatMessage({
                        id: "restricted.aeon.messaging.textQrCode.copyPhoneNumber",
                        defaultMessage: "Copy phone number",
                      }),
                      icons: { copy: (0, n.jsx)(m.R3B, {}), copied: (0, n.jsx)(m.ALZ, {}) },
                      onCopy: (e) => (0, g.lW)(I, e),
                    }),
                  ],
                },
                "phone-number",
              )),
            (M[17] = I),
            (M[18] = P),
            (M[19] = j))
          : (j = M[19]),
        M[20] !== a || M[21] !== c || M[22] !== j
          ? ((A = { ...a, phoneNumber: c, number: j }), (M[20] = a), (M[21] = c), (M[22] = j), (M[23] = A))
          : (A = M[23]),
        M[24] !== t || M[25] !== u || M[26] !== h || M[27] !== A
          ? ((w = (0, n.jsx)(t, { id: u, defaultMessage: h, values: A })),
            (M[24] = t),
            (M[25] = u),
            (M[26] = h),
            (M[27] = A),
            (M[28] = w))
          : (w = M[28]),
        M[29] !== w || M[30] !== v
          ? ((_ = (0, n.jsx)("p", { className: v, children: w })), (M[29] = w), (M[30] = v), (M[31] = _))
          : (_ = M[31]),
        M[32] !== _ || M[33] !== y || M[34] !== b
          ? ((k = (0, n.jsxs)("div", { className: y, children: [b, _] })),
            (M[32] = _),
            (M[33] = y),
            (M[34] = b),
            (M[35] = k))
          : (k = M[35]),
        k
      )
    }
    function M(e) {
      let t,
        a,
        r = (0, s.c)(8),
        { destination: l, orbitName: i, conversationId: o, size: c, children: d } = e,
        u = void 0 === c ? "detailAction" : c
      return (
        r[0] !== o || r[1] !== l || r[2] !== i || r[3] !== u
          ? ((t = (0, n.jsx)("div", {
              className: "flex gap-2",
              children: (0, n.jsx)(I, { destination: l, orbitName: i, conversationId: o, size: u }),
            })),
            (r[0] = o),
            (r[1] = l),
            (r[2] = i),
            (r[3] = u),
            (r[4] = t))
          : (t = r[4]),
        r[5] !== d || r[6] !== t
          ? ((a = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-3", children: [t, d] })),
            (r[5] = d),
            (r[6] = t),
            (r[7] = a))
          : (a = r[7]),
        a
      )
    }
    function I(e) {
      let t,
        a,
        r,
        d,
        m = (0, s.c)(17),
        { destination: p, orbitName: x, conversationId: v, size: y } = e,
        b = void 0 === y ? "detailAction" : y,
        j = (0, i.A)(),
        A = (0, l._U)(f.zQ, v),
        w = x ?? A
      m[0] !== p || m[1] !== j || m[2] !== w
        ? ((t = C(j, p, w, "messages")), (m[0] = p), (m[1] = j), (m[2] = w), (m[3] = t))
        : (t = m[3])
      let _ = t
      if ("macOS" !== (0, h.tR)()) {
        let e, t, a
        return (
          m[4] !== p ? ((e = (e) => void (0, g.lW)(p, e)), (m[4] = p), (m[5] = e)) : (e = m[5]),
          m[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(o.A, {
                id: "restricted.aeon.messaging.textQrCode.copyNumber",
                defaultMessage: "Copy number",
              })),
              (m[6] = t))
            : (t = m[6]),
          m[7] !== b || m[8] !== e
            ? ((a = (0, n.jsx)(c.$, {
                className: "flex-1",
                color: "primary",
                size: b,
                type: "button",
                onClick: e,
                children: t,
              })),
              (m[7] = b),
              (m[8] = e),
              (m[9] = a))
            : (a = m[9]),
          a
        )
      }
      return (
        m[10] !== _
          ? ((a = (e) => (0, u.PQ)({ event: e, href: _, initiator: "side_panel_menu" })), (m[10] = _), (m[11] = a))
          : (a = m[11]),
        m[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(o.A, {
              id: "restricted.aeon.messaging.success.openMessages",
              defaultMessage: "Open Messages",
            })),
            (m[12] = r))
          : (r = m[12]),
        m[13] !== _ || m[14] !== b || m[15] !== a
          ? ((d = (0, n.jsx)(c.z, {
              className: "flex-1",
              href: _,
              color: "primary",
              size: b,
              onClick: a,
              children: r,
            })),
            (m[13] = _),
            (m[14] = b),
            (m[15] = a),
            (m[16] = d))
          : (d = m[16]),
        d
      )
    }
  },
  p897(e, t, a) {
    let n = (0, a("ESTr").a)({
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
//# sourceMappingURL=305126.aaab4df98e.js.map
