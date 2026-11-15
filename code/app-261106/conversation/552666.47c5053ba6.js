export const __rspack_esm_ids = [552666]
export const __webpack_modules__ = {
  D50n(e, t) {
    t.A = {
      composer: "composer-RpsXSy",
      unpersonalizedUserMessage: "unpersonalizedUserMessage-iOKEIm",
      unpersonalizedComposer: "unpersonalizedComposer-gshzDc",
    }
  },
  JE6G(e, t, n) {
    var a = n("FAIl"),
      r = n("zTeN"),
      s = n("AuIy"),
      i = n("EGK5"),
      o = n("ASxG"),
      l = n("SPnB"),
      c = n("w5lF"),
      d = n("SGsN"),
      u = n("svjy"),
      g = n("yGJW"),
      f = n("ku2f"),
      p = n("OWtl"),
      h = n("PLHV"),
      m = n("eShZ"),
      v = n("GDNt"),
      y = n("DM5G"),
      b = n("Ow2S"),
      I = n("ZhoB"),
      w = n("Ghh3"),
      C = n("MrGp"),
      _ = n("g2p6"),
      x = n("hrUs"),
      S = n("WLtw"),
      M = n("fyX7"),
      T = n("wZyU")
    let k = o
        .array(
          o.object({
            type: o.literal("enum"),
            loc: o.tuple([o.literal("query"), o.literal("format")]),
            input: o.literal("webm"),
          }),
        )
        .nonempty()
        .or(o.object({ code: o.literal("unsupported_audio_format"), format: o.literal("webm") })),
      A = (0, r.i1)(p.u, ({ conversationId: e, messageId: t }, { get: n }) =>
        null == (0, s.KG)(n(C.Jv, e)?.[t]?.message) ? "readAloud" : "audioAsset",
      )
    function j(e, { conversationId: t, messageId: n }) {
      let r = e.get(C.jS, t)
      if (null == r) return
      let i = (0, s.KG)(e.get(C.Jv, t)?.[n]?.message)
      if (null == i && n.startsWith("request-placeholder-")) return
      let o =
        null == i
          ? "CHATGPT_VOICE_READ_ALOUD_AUDIO_SOURCE_SYNTHESIZED"
          : "CHATGPT_VOICE_READ_ALOUD_AUDIO_SOURCE_AUDIO_ASSET"
      ;(0, g.yy)(e, a.BS, { audioSource: o })
      let p = e
          .get(u.g)
          .formatMessage({
            id: "chatgptConversations.readAloud.error",
            defaultMessage: "Unable to read this response aloud",
            description:
              "Error toast shown when Codex cannot synthesize or play a completed ChatGPT assistant response after the user selects Read aloud",
          }),
        b = `conversation:${r}:${n}`,
        A = e.get(C.uh, t),
        E = { conversationId: r, messageId: n, audioSource: o, surface: (0, I.Gm)("tpp" === A || "flora" === A) }
      if (null != i)
        return void (0, y.pP)(e, {
          bufferBeforePlayback: !0,
          conversationId: r,
          playbackId: b,
          readAloud: E,
          onError: (t, n, a) => {
            ;("play" === n && (0, M.vx)(e, t)) ||
              e
                .get(d.Id)
                .danger(p, {
                  errorAnalytics: { toastId: "useVoiceReadAloudAudio_onStreamingError", userFacingError: a },
                })
          },
          synthesizeAudio: async (e) => {
            let t,
              { downloadUrl: n, requestHeaders: a } =
                i.startsWith("https://cdn.openai.com/") ||
                i.startsWith("/backend-api/") ||
                i.startsWith("https://chatgpt.com/backend-api/")
                  ? (0, S.LX)({ status: "success", download_url: i })
                  : await (0, x.fG)(i.replace(/^file-service:\/\//, "").replace(/^sediment:\/\//, ""), {
                      conversationId: r,
                      downloadIntent: !1,
                      showInline: !1,
                      signal: e,
                      onResponseHeadersReceived: (e) => {
                        t = e
                      },
                    }).catch((n) => {
                      if (null == t || e.aborted || (n instanceof m.fk && (n.explicitResponseStatus ?? 0) >= 300))
                        throw n
                      throw new M.fn(t, n)
                    })
            return null == a ? n : v._n.getInstance().fetch(n, { headers: a, signal: e })
          },
        })
      let R = (async function (e) {
          let t = e.query.snapshot(_.s6),
            n = t.getData() ?? (await t.fetch().catch(() => void 0))
          if (n?.voiceName != null) return "sky" === n.voiceName ? "juniper" : n.voiceName
          let a = e.query.snapshot(f.chatGptVoicesQuery$, {}),
            r = (a.getData() ?? (await a.fetch().catch(() => void 0)))?.voices
          return null == r || 0 === r.length ? "juniper" : (0, h.O9)().startsWith("zh") ? "cove" : r[0].voice
        })(e),
        U = e.get(l.chatGptAuthenticatedUserId$),
        N = e.get(_.Sk)
      ;(0, y.pP)(e, {
        conversationId: r,
        cacheKey: R.then((e) => JSON.stringify([U, N, r, n, e])),
        errorMessage: p,
        playbackId: b,
        readAloud: E,
        synthesizeAudio: async (e) => {
          let t = { conversation_id: r, message_id: n, format: (0, T.n)() },
            a = new URLSearchParams()
          for (let [e, n] of Object.entries(t)) null != n && a.set(e, n)
          try {
            return await v._n.getInstance().fetch(`/synthesize?${a.toString()}`, { headers: (0, w.Zj)(), signal: e })
          } catch (n) {
            if (
              "webm" !== t.format ||
              !(n instanceof m.fk) ||
              422 !== n.responseStatus ||
              !(n.diagnosticError instanceof c.rX) ||
              !k.safeParse(n.diagnosticError.detail).success
            )
              throw n
            return (
              e.throwIfAborted(),
              a.delete("format"),
              v._n.getInstance().fetch(`/synthesize?${a.toString()}`, { headers: (0, w.Zj)(), signal: e })
            )
          }
        },
      })
    }
    n.d(
      t,
      {},
      {
        Cg: A,
        lb: j,
        uh: function (e, t) {
          let n = e.get(C.Jv, t)
          if (null == n || e.get(b.Mb, t)) return
          let a = (0, s.UI)({ current_node: e.get(C.Od, t), mapping: n }),
            r = a.findLast(
              (e) =>
                "assistant" === e.author.role && (null == e.channel || "final" === e.channel) && null != (0, i.Uq)(e),
            )
          r?.id == null ||
            ("streaming" === e.get(C.F1, t) && a.findLastIndex((e) => "user" === e.author.role) > a.indexOf(r)) ||
            j(e, { conversationId: t, messageId: r.id })
        },
      },
    )
  },
  VnEZ(e, t, n) {
    let a = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { M: a })
  },
  MikY(e, t, n) {
    n.d(t, { k: () => O })
    var a = n("ABep"),
      r = n("zd8w"),
      s = n("QosV"),
      i = n("zTeN"),
      o = n("oyxz"),
      l = n("zKCW"),
      c = n("mkHC"),
      d = n("sTR2"),
      u = n("bNMl"),
      g = n("OWtl"),
      f = n("AOHi"),
      p = n("Azvr"),
      h = n("Ow2S"),
      m = n("ZhoB"),
      v = n("NTPI"),
      y = n("MrGp"),
      b = n("jXqC"),
      I = n("SUOv"),
      w = n("Bbed"),
      C = n("hZax"),
      _ = n("OOaz"),
      x = n("feAX"),
      S = n("d9Z9")
    let M = (0, w._)(async () => (await n.e(605359).then(n.bind(n, "CGiW"))).WorkCreditContinuation, {
      fallback: ({ children: e }) => e,
      errorFallback: ({ children: e }) => e,
    })
    function T(e) {
      let t,
        n = (0, s.c)(4),
        { conversationId: r, enabled: o, children: l } = e,
        c = (0, i._U)(o ? S.bJ : null, r)
      return (
        n[0] !== l || n[1] !== r || n[2] !== c
          ? ((t =
              null == c
                ? l
                : (0, a.jsx)(k, { conversationId: r, task: c, children: l }, `${c.accountId}:${c.messageId}`)),
            (n[0] = l),
            (n[1] = r),
            (n[2] = c),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
    function k(e) {
      let t,
        n,
        r,
        i = (0, s.c)(11),
        { conversationId: o, task: l, children: c } = e,
        d = (0, C.Ou)("3062419800")
      ;(i[0] !== l.conversationId
        ? ((t = (0, _.q3)(l.conversationId)), (i[0] = l.conversationId), (i[1] = t))
        : (t = i[1]),
        i[2] !== c || i[3] !== t
          ? ((n = (0, a.jsx)(x.p, { conversationId: t, workCreditRecovery: !0, fallback: c })),
            (i[2] = c),
            (i[3] = t),
            (i[4] = n))
          : (n = i[4]))
      let u = n
      return (
        i[5] !== u || i[6] !== c || i[7] !== o || i[8] !== d || i[9] !== l
          ? ((r = d.get("enable_continuation", !1) ? (0, a.jsx)(M, { conversationId: o, task: l, children: u }) : c),
            (i[5] = u),
            (i[6] = c),
            (i[7] = o),
            (i[8] = d),
            (i[9] = l),
            (i[10] = r))
          : (r = i[10]),
        r
      )
    }
    var A = n("J3Mi"),
      j = n("pxLk"),
      E = n("umSm"),
      R = n("q5qu")
    function U(e) {
      let t,
        n = (0, s.c)(3),
        { status: r } = e
      if ("thinking" === r) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(j.k, {})), (n[0] = e)) : (e = n[0]),
          e
        )
      }
      return (
        n[1] !== r
          ? ((t = (0, a.jsx)(R.D, {
              children: (0, a.jsx)("div", {
                "aria-live": "polite",
                role: "status",
                children: (0, a.jsx)(E.N, {
                  className: "text-secondary select-none",
                  children:
                    "loading" === r
                      ? (0, a.jsx)(o.A, {
                          id: "chatgpt.requestUserInput.loading",
                          defaultMessage: "Loading questions…",
                          description:
                            "Conversation status while structured input questions are being generated, before the user can answer",
                        })
                      : (0, a.jsx)(o.A, {
                          id: "chatgpt.requestUserInput.waiting",
                          defaultMessage: "Waiting for your answer",
                          description:
                            "Conversation status while a structured input questionnaire is open and waiting for the user's answers",
                        }),
                }),
              }),
            })),
            (n[1] = r),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    var N = n("izoI")
    function O(e) {
      let t,
        n,
        c,
        d,
        u,
        g,
        h,
        m = (0, s.c)(39),
        {
          conversationId: I,
          conversationOrigin: w,
          errorClassName: C,
          errorMessage: _,
          isWorkConversation: x,
          isRetryDisabled: S,
          onRetry: M,
          showPendingLoadingMessage: k,
          showRequestUserInputStatus: j,
          trackShownImpressions: E,
          useDefaultModel: R,
        } = e,
        N = void 0 !== x && x,
        O = void 0 !== S && S,
        D = void 0 !== k && k,
        z = void 0 === E || E,
        G = void 0 !== R && R,
        [H, W] = (0, r.useState)(!1),
        B = (0, i._U)(y.gh, I),
        q = (0, i._U)(p.hs, I)
      m[0] !== _ || m[1] !== B
        ? ((t = B?.message === _ && (0, f.BB)(B.metadata?.errorCode)), (m[0] = _), (m[1] = B), (m[2] = t))
        : (t = m[2])
      let K = t,
        F = (0, i._U)(void 0 !== j && j ? A.fj : null, I),
        J = (0, i._U)(N && D ? y.PH : null, I)
      return D || null != F || null != _ || q || N
        ? (m[3] !== _ || m[4] !== F
            ? ((n = null != F && ("waiting" === F || null == _) ? (0, a.jsx)(U, { status: F }) : null),
              (m[3] = _),
              (m[4] = F),
              (m[5] = n))
            : (n = m[5]),
          m[6] !== I || m[7] !== _ || m[8] !== q || m[9] !== J || m[10] !== N || m[11] !== F || m[12] !== D
            ? ((c =
                !D || null != F || q || null != _ || J
                  ? null
                  : (0, a.jsx)(v.T, { conversationId: I, isWorkConversation: N })),
              (m[6] = I),
              (m[7] = _),
              (m[8] = q),
              (m[9] = J),
              (m[10] = N),
              (m[11] = F),
              (m[12] = D),
              (m[13] = c))
            : (c = m[13]),
          m[14] !== C || m[15] !== _ || m[16] !== q
            ? ((d =
                q && null == _
                  ? (0, a.jsx)("div", {
                      className: C,
                      children: (0, a.jsx)(b.p, {
                        role: "status",
                        children: (0, a.jsx)("span", {
                          className: "text-chatgpt-recovery",
                          children: (0, a.jsx)(o.A, {
                            id: "errors.network.reconnecting_fallback",
                            defaultMessage: "Connection interrupted. Waiting for the complete answer",
                            description:
                              "Informational notice shown when the network connection drops mid-response and the client falls back to a simpler polling implementation.",
                          }),
                        }),
                      }),
                    })
                  : null),
              (m[14] = C),
              (m[15] = _),
              (m[16] = q),
              (m[17] = d))
            : (d = m[17]),
          m[18] !== I ||
          m[19] !== w ||
          m[20] !== C ||
          m[21] !== _ ||
          m[22] !== O ||
          m[23] !== H ||
          m[24] !== N ||
          m[25] !== M ||
          m[26] !== K ||
          m[27] !== z ||
          m[28] !== G
            ? ((u =
                null != _
                  ? (0, a.jsxs)("div", {
                      className: C,
                      children: [
                        (0, a.jsx)(P, {
                          conversationId: I,
                          conversationOrigin: w,
                          errorMessage: _,
                          onRetry: M,
                          trackShownImpressions: z,
                        }),
                        (0, a.jsx)(l.l, {
                          content: _,
                          isPrimaryCtaDisabled: H || O,
                          onPrimaryCtaClick: (e) => {
                            H || O || null == M || (W(!0), M(e.timeStamp).finally(() => W(!1)))
                          },
                          primaryCtaText:
                            null == M
                              ? void 0
                              : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    K &&
                                      (0, a.jsx)(o.A, {
                                        id: "chatgptConversations.responseError.startNewChat",
                                        defaultMessage: "Start new chat",
                                        description:
                                          "Button that opens a new Chat conversation with the previous prompt ready to edit after the original conversation was deleted, expired, too large, or could not be found",
                                      }),
                                    !K &&
                                      G &&
                                      (0, a.jsx)(o.A, {
                                        id: "chatgptConversations.responseError.useDefaultModel",
                                        defaultMessage: "Use default model",
                                        description:
                                          "Button to switch to the default model and retry a ChatGPT response after reaching the selected model's usage limit",
                                      }),
                                    !K &&
                                      !G &&
                                      (0, a.jsx)(o.A, {
                                        id: "chatgptConversations.responseError.retry",
                                        defaultMessage: "Retry",
                                        description:
                                          "Button to generate another response after a ChatGPT answer was interrupted",
                                      }),
                                  ],
                                }),
                          role: "alert",
                          type: "error",
                          variant: "callout",
                        }),
                        (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsx)(L, {
                            conversationId: I,
                            conversationOrigin: w,
                            errorMessage: _,
                            isWorkConversation: N,
                          }),
                        }),
                      ],
                    })
                  : null),
              (m[18] = I),
              (m[19] = w),
              (m[20] = C),
              (m[21] = _),
              (m[22] = O),
              (m[23] = H),
              (m[24] = N),
              (m[25] = M),
              (m[26] = K),
              (m[27] = z),
              (m[28] = G),
              (m[29] = u))
            : (u = m[29]),
          m[30] !== I || m[31] !== N || m[32] !== d || m[33] !== u
            ? ((g = (0, a.jsxs)(T, { conversationId: I, enabled: N, children: [d, u] })),
              (m[30] = I),
              (m[31] = N),
              (m[32] = d),
              (m[33] = u),
              (m[34] = g))
            : (g = m[34]),
          m[35] !== g || m[36] !== n || m[37] !== c
            ? ((h = (0, a.jsxs)(a.Fragment, { children: [n, c, g] })),
              (m[35] = g),
              (m[36] = n),
              (m[37] = c),
              (m[38] = h))
            : (h = m[38]),
          h)
        : null
    }
    function P(e) {
      let t,
        n,
        a,
        o = (0, s.c)(13),
        { conversationId: l, conversationOrigin: c, errorMessage: d, onRetry: f, trackShownImpressions: p } = e,
        v = (0, i.gh)(g.u),
        b = (0, r.useRef)(null)
      o[0] !== l || o[1] !== c || o[2] !== d || o[3] !== f || o[4] !== v || o[5] !== p
        ? ((t = () => {
            if (!p || (b.current?.conversationId === l && b.current.errorMessage === d)) return
            b.current = { conversationId: l, errorMessage: d }
            let e = v.get(y.gh, l),
              t = e?.message === d ? e : null,
              n = v.get(h.uY, l),
              a = v.get(y.jS, l),
              r = v.get(u.YV),
              s = void 0 === c ? v.get(y.uh, l) : c
            ;(0, m.tF)(r.logProductEvent, {
              canRetry: null != f,
              metadata:
                n instanceof I.z && n.message === d ? { clientErrorType: "local_executor_not_ready" } : t?.metadata,
              conversationId: a,
              isWorkConversation:
                null == s && void 0 === c && null == v.get(y.Jv, l) ? null : "tpp" === s || "flora" === s,
            })
          }),
          (o[0] = l),
          (o[1] = c),
          (o[2] = d),
          (o[3] = f),
          (o[4] = v),
          (o[5] = p),
          (o[6] = t))
        : (t = o[6])
      let w = (0, r.useEffectEvent)(t)
      return (
        o[7] !== w
          ? ((n = () => {
              w()
            }),
            (o[7] = w),
            (o[8] = n))
          : (n = o[8]),
        o[9] !== l || o[10] !== d || o[11] !== p
          ? ((a = [l, d, p]), (o[9] = l), (o[10] = d), (o[11] = p), (o[12] = a))
          : (a = o[12]),
        (0, r.useEffect)(n, a),
        null
      )
    }
    function L(e) {
      let t,
        n,
        o = (0, s.c)(10),
        { conversationId: l, conversationOrigin: u, errorMessage: g, isWorkConversation: f } = e,
        p = (0, i._U)(y.gh, l),
        m = (0, i._U)(p?.message === g ? null : h.uY, l),
        v = (0, i._U)(y.jS, l),
        b = (0, i._U)(void 0 === u ? y.uh : null, l),
        I = void 0 === u ? b : u
      if (null == p || p.message !== g) {
        let e
        return (
          o[0] !== g || o[1] !== m
            ? ((e =
                m?.message === g && null != m.diagnosticReport
                  ? (0, a.jsx)(d.OperationDiagnosticInline, { report: m.diagnosticReport })
                  : null),
              (o[0] = g),
              (o[1] = m),
              (o[2] = e))
            : (e = o[2]),
          e
        )
      }
      o[3] !== p ? ((t = (0, N.M)(p)), (o[3] = p), (o[4] = t)) : (t = o[4])
      let w = f || "tpp" === I || "flora" === I ? "work" : "chatgpt"
      return (
        o[5] !== p.occurredAtMs || o[6] !== v || o[7] !== t || o[8] !== w
          ? ((n = (0, r.createElement)(c.F, { ...t, key: p.occurredAtMs, conversationId: v, surface: w })),
            (o[5] = p.occurredAtMs),
            (o[6] = v),
            (o[7] = t),
            (o[8] = w),
            (o[9] = n))
          : (n = o[9]),
        n
      )
    }
  },
  MN5J(e, t, n) {
    var a = n("gmjH")
    let r = {
      "--color-background-text-selection": `light-dark(${(0, a.fW)("default", "light").selection}, ${(0, a.fW)("default", "dark").selection})`,
    }
    n.d(t, {}, { K: r })
  },
  xv3n(e, t, n) {
    n.d(t, { T: () => v })
    var a = n("ABep"),
      r = n("QosV"),
      s = n("zTeN"),
      i = n("zd8w"),
      o = n("oyxz"),
      l = n("zKCW"),
      c = n("Sm6l"),
      d = n("OWtl"),
      u = n("OOaz"),
      g = n("udGC"),
      f = n("Se6E")
    function p(e) {
      let t,
        n,
        p,
        h,
        m,
        v,
        y,
        b,
        I,
        w,
        C = (0, r.c)(32),
        { bannerInfo: _, conversationId: x, isTemporaryChat: S, trackImpression: M } = e,
        T = (0, s.gh)(d.u),
        [k, A] = (0, i.useState)(!1),
        j = (0, i.useRef)(null),
        E = M ? `${x}:${_.resets_after}` : null
      C[0] !== T ? ((t = () => (0, f.XT)(T)), (C[0] = T), (C[1] = t)) : (t = C[1])
      let R = (0, i.useEffectEvent)(t)
      ;(C[2] !== E || C[3] !== R
        ? ((n = () => {
            null != E && j.current !== E && ((j.current = E), R())
          }),
          (C[2] = E),
          (C[3] = R),
          (C[4] = n))
        : (n = C[4]),
        C[5] !== E ? ((p = [E]), (C[5] = E), (C[6] = p)) : (p = C[6]),
        (0, i.useEffect)(n, p),
        C[7] !== _ || C[8] !== x || C[9] !== T
          ? ((h = () => (0, g.MP)(T, x, _)), (C[7] = _), (C[8] = x), (C[9] = T), (C[10] = h))
          : (h = C[10]))
      let U = h
      return (
        C[11] !== x || C[12] !== U || C[13] !== S || C[14] !== k || C[15] !== T
          ? ((m = () => {
              k ||
                (A(!0),
                (0, f.Pc)(T, { conversationId: (0, u.TF)(x), isTemporaryChat: S, onPermissionGranted: U }).finally(
                  () => {
                    A(!1)
                  },
                ))
            }),
            (C[11] = x),
            (C[12] = U),
            (C[13] = S),
            (C[14] = k),
            (C[15] = T),
            (C[16] = m))
          : (m = C[16]),
        C[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)(o.A, {
              id: "chatgptConversations.preciseLocation.turnOn",
              defaultMessage: "Turn on",
              description: "Button requesting permission to use precise location for local ChatGPT answers",
            })),
            (C[17] = v))
          : (v = C[17]),
        C[18] !== k || C[19] !== m
          ? ((y = (0, a.jsx)(c.$, { color: "primary", loading: k, onClick: m, children: v })),
            (C[18] = k),
            (C[19] = m),
            (C[20] = y))
          : (y = C[20]),
        C[21] !== _.is_dismissible || C[22] !== U || C[23] !== T
          ? ((b = _.is_dismissible
              ? (0, a.jsx)(c.$, {
                  color: "outline",
                  onClick: () => {
                    ;((0, f.H9)(T), U())
                  },
                  children: (0, a.jsx)(o.A, {
                    id: "chatgptConversations.preciseLocation.noThanks",
                    defaultMessage: "No thanks",
                    description: "Dismiss the precise location banner without sharing location",
                  }),
                })
              : null),
            (C[21] = _.is_dismissible),
            (C[22] = U),
            (C[23] = T),
            (C[24] = b))
          : (b = C[24]),
        C[25] !== y || C[26] !== b
          ? ((I = (0, a.jsxs)(a.Fragment, { children: [y, b] })), (C[25] = y), (C[26] = b), (C[27] = I))
          : (I = C[27]),
        C[28] !== _.description || C[29] !== _.title || C[30] !== I
          ? ((w = (0, a.jsx)(l.l, {
              ariaLive: "polite",
              content: _.description,
              title: _.title,
              role: "status",
              stackOnNarrow: !0,
              wrapCtas: !0,
              customCtas: I,
            })),
            (C[28] = _.description),
            (C[29] = _.title),
            (C[30] = I),
            (C[31] = w))
          : (w = C[31]),
        w
      )
    }
    var h = n("ITxD"),
      m = n("KtGr")
    function v(e) {
      let t,
        n = (0, r.c)(8),
        i = (0, s.Ul)("precise-location-banner" === e.bannerInfo.name ? h.d : null)
      if (e.isTemporaryChat && "string" == typeof e.bannerInfo.metadata?.storage_warning_announcement_id) return null
      if ("precise-location-banner" === e.bannerInfo.name) {
        let t
        return (
          n[0] !== i?.enabled ||
          n[1] !== e.bannerInfo ||
          n[2] !== e.conversationId ||
          n[3] !== e.isTemporaryChat ||
          n[4] !== e.trackImpression
            ? ((t = i?.enabled
                ? (0, a.jsx)(p, {
                    bannerInfo: e.bannerInfo,
                    conversationId: e.conversationId,
                    isTemporaryChat: e.isTemporaryChat ?? !1,
                    trackImpression: e.trackImpression,
                  })
                : null),
              (n[0] = i?.enabled),
              (n[1] = e.bannerInfo),
              (n[2] = e.conversationId),
              (n[3] = e.isTemporaryChat),
              (n[4] = e.trackImpression),
              (n[5] = t))
            : (t = n[5]),
          t
        )
      }
      return (n[6] !== e ? ((t = (0, a.jsx)(m.O, { ...e })), (n[6] = e), (n[7] = t)) : (t = n[7]), t)
    }
  },
  lejl(e, t, n) {
    var a = n("SZCv"),
      r = n.n(a),
      s = n("sWza"),
      i = n("OMIV"),
      o = n("SZi8"),
      l = n("lBzi"),
      c = n("MrGp"),
      d = n("aZoZ")
    function u(e, t, n) {
      let a = e.get(d.J5, t)
      return null != a && (null == n || a.messageId === n) && (e.set(d.J5, t, null), (0, o.gi)(e, t), !0)
    }
    n.d(
      t,
      {},
      {
        V: function (e, t, n, a, g) {
          let f,
            p = e.watch((p) => {
              let h = p.get(s.L, a)
              if (!p.get(i.JW, "3574573347") || null == h) {
                ;((f = void 0), u(e, t, n) && (0, o.nz)(e, t, { isTemporaryChat: g, skipThrottle: !0 }))
                return
              }
              let m = f?.message !== h.message || !r()(f?.inlineSystemHints, h.inlineSystemHints)
              f = h
              let v = e.get(d.J5, t)
              ;(m || v?.messageId === n) &&
                (p.get(d.r2, { conversationId: t, messageId: n }),
                p.get(c.zn, t),
                p.get(l.qF),
                e.set(d.J5, t, {
                  messageId: n,
                  prompt: h.message,
                  isTemporaryChat: g,
                  inlineSystemHints: h.inlineSystemHints,
                }),
                (0, o.nz)(e, t, { isTemporaryChat: g, skipThrottle: !m || v?.messageId !== n }))
            })
          return () => {
            ;(p(), u(e, t, n))
          }
        },
        k: u,
      },
    )
  },
  Se6E(e, t, n) {
    var a = n("r6FN"),
      r = n("D99L"),
      s = n("xCr9"),
      i = n.n(s),
      o = n("yGJW"),
      l = n("CTBG"),
      c = n("QaQr"),
      d = n("SZLI")
    let u = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_BANNER"
    n.d(
      t,
      {},
      {
        H9: function (e) {
          ;(0, o.yy)(e, r.CodexChatgptInteractionPreciseLocationBannerDismissed, {})
        },
        Pc: async function (e, { conversationId: t, isTemporaryChat: n, onPermissionGranted: a }) {
          let r = i()(e.get(l.g4, t), (e) => "assistant" === e.author.role)?.id
          return (
            !!(await (0, d.Z)(e, u)) &&
            (a(),
            null != r && (await (0, c.T)(e, { conversationId: t, isTemporaryChat: n, messageId: r, entryPoint: u })),
            !0)
          )
        },
        XT: function (e) {
          ;(0, o.yy)(e, a.Mu, { entryPoint: u })
        },
      },
    )
  },
  yQU9(e, t, n) {
    var a = n("AKNp"),
      r = n("s60P")
    n.d(
      t,
      {},
      {
        T: function ({ hasImageAssets: e, isMostRecentTurn: t, presentation: n }) {
          if (
            !t ||
            e ||
            null == n ||
            n.sendBlocked ||
            "image_gen" !== n.bannerInfo.name ||
            "inline_text" !== n.bannerInfo.banner_type
          )
            return !1
          let r = n.bannerInfo.description.trim() || n.bannerInfo.description_markdown?.trim(),
            s = n.bannerInfo.call_to_action?.[0]
          return !!r && null != s && null != (0, a.Pr)(s)
        },
        U: function ({ client: e, disableExposureLog: t = !1, eligible: n }) {
          return n && (0, a.ku)(e, r.S, t ? { disableExposureLog: !0 } : void 0)
        },
      },
    )
  },
  feAX(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      s = n("zTeN"),
      i = n("zd8w"),
      o = n("SPnB"),
      l = n("g2p6"),
      c = n("hZax"),
      d = n("aFoA"),
      u = n("OOaz"),
      g = n("xv3n"),
      f = n("yQU9"),
      p = n("nmN6"),
      h = n("J3Di"),
      m = n("d9Z9")
    function v(e) {
      let t,
        n,
        c = (0, r.c)(12),
        {
          binding: g,
          conversationId: f,
          hasImageAssets: p,
          imageGenRateLimitErrorMessageId: v,
          workCreditRecovery: w,
          trackImpression: C,
          fallback: _,
        } = e,
        x = (0, s.Ul)(o.chatGptAuthenticatedAccountId$),
        S = (0, s.Ul)(l.Sk),
        M = (0, s.Ul)(o.chatGptAuthenticatedUserId$),
        T = (0, i.useSyncExternalStore)(g.subscribe, g.getSnapshot, g.getSnapshot),
        k = (0, s._U)(!w && (0, h.f)(T?.bannerInfo) ? m.HD : null, f),
        A = (0, s._U)((0, u.YA)(f) ? null : d.Dg, f),
        j = (0, s._U)(null == T || (0, u.YA)(T.conversationId) ? null : d.Dg, T?.conversationId ?? null)
      if (
        null == T ||
        (j ?? T.conversationId) !== (A ?? f) ||
        S !== x ||
        T.ownerIdentity.accountId !== S ||
        T.ownerIdentity.userId !== M
      )
        return _
      let E = T.trackImpression && C
      c[0] !== T || c[1] !== E ? ((t = { ...T, trackImpression: E }), (c[0] = T), (c[1] = E), (c[2] = t)) : (t = c[2])
      let R = t
      if (w) {
        let e
        return (
          c[3] !== _ || c[4] !== T.bannerInfo || c[5] !== R
            ? ((e = (0, h.f)(T.bannerInfo) ? (0, a.jsx)(I, { presentation: R, workCreditRecovery: !0 }) : _),
              (c[3] = _),
              (c[4] = T.bannerInfo),
              (c[5] = R),
              (c[6] = e))
            : (e = c[6]),
          e
        )
      }
      return T.sendBlocked || "inline_text" !== T.bannerInfo.banner_type || (k && (0, h.f)(T.bannerInfo))
        ? null
        : (c[7] !== p || c[8] !== v || c[9] !== R || c[10] !== M
            ? ((n =
                null == v || null == M
                  ? (0, a.jsx)(b, { presentation: R })
                  : (0, a.jsx)(y, { hasImageAssets: p, presentation: R })),
              (c[7] = p),
              (c[8] = v),
              (c[9] = R),
              (c[10] = M),
              (c[11] = n))
            : (n = c[11]),
          n)
    }
    function y(e) {
      let t,
        n,
        s = (0, r.c)(7),
        { hasImageAssets: i, presentation: o } = e,
        l = (0, c.AS)()
      s[0] !== i || s[1] !== o || s[2] !== l
        ? ((t = (0, f.U)({
            client: l,
            disableExposureLog: !0,
            eligible: (0, f.T)({ hasImageAssets: i, isMostRecentTurn: !0, presentation: o }),
          })),
          (s[0] = i),
          (s[1] = o),
          (s[2] = l),
          (s[3] = t))
        : (t = s[3])
      let d = t
      return (
        s[4] !== o || s[5] !== d
          ? ((n = d ? null : (0, a.jsx)(b, { presentation: o })), (s[4] = o), (s[5] = d), (s[6] = n))
          : (n = s[6]),
        n
      )
    }
    function b(e) {
      let t,
        n = (0, r.c)(2),
        { presentation: s } = e
      return (
        n[0] !== s
          ? ((t = (0, a.jsx)("div", { className: "mt-6", children: (0, a.jsx)(I, { presentation: s }) })),
            (n[0] = s),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function I(e) {
      let t,
        n,
        s = (0, r.c)(5),
        { presentation: i, workCreditRecovery: o } = e
      if (s[0] !== i) {
        let { ownerIdentity: e, ...n } = i
        ;((t = n), (s[0] = i), (s[1] = t))
      } else t = s[1]
      let l = void 0 !== o && o ? "workRecovery" : void 0
      return (
        s[2] !== t || s[3] !== l
          ? ((n = (0, a.jsx)(g.T, { ...t, presentation: l })), (s[2] = t), (s[3] = l), (s[4] = n))
          : (n = s[4]),
        n
      )
    }
    n.d(
      t,
      {},
      {
        p: function (e) {
          let t,
            n = (0, r.c)(8),
            {
              conversationId: s,
              hasImageAssets: o,
              imageGenRateLimitErrorMessageId: l,
              workCreditRecovery: c,
              trackImpression: d,
              fallback: u,
            } = e,
            g = void 0 !== o && o,
            f = void 0 === l ? null : l,
            h = void 0 !== c && c,
            m = void 0 === d || d,
            y = void 0 === u ? null : u,
            b = (0, i.useContext)(p.x)
          return null == b
            ? y
            : (n[0] !== b || n[1] !== s || n[2] !== y || n[3] !== g || n[4] !== f || n[5] !== m || n[6] !== h
                ? ((t = (0, a.jsx)(v, {
                    binding: b,
                    conversationId: s,
                    hasImageAssets: g,
                    imageGenRateLimitErrorMessageId: f,
                    workCreditRecovery: h,
                    trackImpression: m,
                    fallback: y,
                  })),
                  (n[0] = b),
                  (n[1] = s),
                  (n[2] = y),
                  (n[3] = g),
                  (n[4] = f),
                  (n[5] = m),
                  (n[6] = h),
                  (n[7] = t))
                : (t = n[7]),
              t)
        },
      },
    )
  },
  nmN6(e, t, n) {
    let a = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { x: a })
  },
  PQXU(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      s = n("D99L"),
      i = n("zTeN"),
      o = n("zd8w"),
      l = n("Wf1j"),
      c = n("oyxz"),
      d = n("Sm6l"),
      u = n("SGsN"),
      g = n("yGJW"),
      f = n("OWtl"),
      p = n("Elta"),
      h = n("PFzG"),
      m = n("Ow2S"),
      v = n("CTBG"),
      y = n("MrGp"),
      b = n("YkoD"),
      I = n("Sm7V")
    function w(e) {
      return null != (0, b.SM)(e)
    }
    function C(e) {
      return (
        "final" === e.channel ||
        e.metadata?.pro_skipped === !0 ||
        (e.metadata?.steer_turn_action === "answer_now" && "in_progress" === e.status)
      )
    }
    function _() {
      return Date.now()
    }
    function x(e) {
      return e.metadata?.reasoning_start_time != null
    }
    function S(e) {
      return "a8km123" === e.author.name
    }
    function M(e) {
      return "a8km123" === e.author.name
    }
    function T(e) {
      return (
        Array.isArray(e.metadata?.available_steer_turn_actions) &&
        e.metadata.available_steer_turn_actions.includes("check_in")
      )
    }
    function k(e) {
      return (
        "agentic_handoff.handoff" === e.recipient &&
        "string" == typeof e.metadata?.skip_reasoning_title &&
        "is_reasoning" === e.metadata.reasoning_status
      )
    }
    function A(e) {
      return (
        Array.isArray(e.metadata?.available_steer_turn_actions) &&
        e.metadata.available_steer_turn_actions.includes("answer_now")
      )
    }
    function j(e) {
      return e.metadata?.chime_version != null
    }
    function E(e) {
      return "user" === e.author.role
    }
    function R(e) {
      return "string" == typeof e.metadata?.skip_reasoning_title && "is_reasoning" === e.metadata.reasoning_status
    }
    function U(e) {
      return "user" !== e.author.role
    }
    n.d(
      t,
      {},
      {
        N: function (e) {
          let t,
            n,
            b,
            N,
            O,
            P,
            L,
            D = (0, r.c)(37),
            { conversationId: z, isTemporaryChat: G, onBeforeAnswerNow: H, surface: W } = e,
            B = void 0 === W ? "inline" : W,
            q = (0, i.gh)(f.u),
            K = (0, l.A)(),
            F = (0, i._U)(v.f0, z) ?? [],
            J = (0, i._U)(h.R1, z),
            Z = (0, i._U)(y.jS, z),
            Q = (0, i._U)(h.it, Z ?? z),
            V = (0, i._U)(y.Od, z),
            $ = (0, i._U)(y.SL, z),
            Y = (0, i._U)(y.F1, z),
            X = (0, i._U)(p.C, z),
            ee = (0, i._U)(m.ch, z),
            et = F.filter(U),
            en = et.findLast(R)
          D[0] !== F ? ((t = F.find(E)?.id), (D[0] = F), (D[1] = t)) : (t = D[1])
          let ea = t,
            er = et.findLast(j)?.metadata?.chime_version,
            es = et.some(A),
            ei = et.findLast(k) ?? (es ? void 0 : en),
            eo = ei?.metadata?.skip_reasoning_title,
            el = et.some(T),
            ec = 2 === er || et.some(M),
            ed = null
          null != ei ? (ed = "skip") : es && null != $ && 3 !== er && (ec || !el) && (ed = "answer_now")
          let eu = et[0],
            eg =
              et.find(S)?.metadata?.reasoning_start_time ??
              eu?.metadata?.reasoning_start_time ??
              et.find(x)?.metadata?.reasoning_start_time ??
              eu?.create_time,
            ef = "number" == typeof eg ? 1e3 * eg : void 0,
            [ep, eh] = (0, o.useState)(_)
          D[2] !== ed || D[3] !== ef
            ? ((n = () => {
                if ("answer_now" !== ed || null == ef) return
                let e = window.setTimeout(() => eh(Date.now()), Math.max(0, ef + 5e3 - Date.now()))
                return () => window.clearTimeout(e)
              }),
              (D[2] = ed),
              (D[3] = ef),
              (D[4] = n))
            : (n = D[4])
          let em = ed
          ;(D[5] !== ef || D[6] !== em ? ((b = [em, ef]), (D[5] = ef), (D[6] = em), (D[7] = b)) : (b = D[7]),
            (0, o.useEffect)(n, b))
          let ev = et.some(C),
            ey = J ?? ea ?? null
          if (
            null == ed ||
            null == Z ||
            null == V ||
            null == ea ||
            null == ey ||
            !(0, y.QN)(Y) ||
            ev ||
            Q?.id === ey ||
            ("escape" === B && ("answer_now" !== ed || F.some(w))) ||
            ("answer_now" === ed && (X || (null != ef && ep < ef + 5e3)))
          )
            return null
          D[8] !== $ ||
          D[9] !== J ||
          D[10] !== z ||
          D[11] !== V ||
          D[12] !== K ||
          D[13] !== G ||
          D[14] !== ed ||
          D[15] !== ee ||
          D[16] !== H ||
          D[17] !== ey ||
          D[18] !== ea ||
          D[19] !== q ||
          D[20] !== Z ||
          D[21] !== ei?.id ||
          D[22] !== B
            ? ((N = async () => {
                if (("escape" === B && H?.() !== !0) || q.get(h.it, Z)?.id === ey) return
                q.set(h.it, Z, { id: ey, mode: ed, skippedMessageId: "skip" === ed ? ei?.id : void 0 })
                let e = "skip" === ed ? ei?.id : V
                null != e &&
                  ("skip" === ed
                    ? (0, g.yy)(q, s.CodexChatgptInteractionReasoningSkipClicked, { conversationId: Z, messageId: e })
                    : (0, g.yy)(q, s.CodexChatgptInteractionAnswerNowClicked, {
                        conversationId: Z,
                        messageId: e,
                        asyncTaskId: $ ?? void 0,
                        answerNowSource:
                          "escape" === B
                            ? s.CodexChatgptInteractionAnswerNowSource
                                .CODEX_CHATGPT_INTERACTION_ANSWER_NOW_SOURCE_ESCAPE
                            : s.CodexChatgptInteractionAnswerNowSource
                                .CODEX_CHATGPT_INTERACTION_ANSWER_NOW_SOURCE_INLINE,
                      }))
                let t =
                  "skip" === ed
                    ? K.formatMessage({
                        id: "chatgpt.reasoning.skip.error",
                        defaultMessage: "Could not skip reasoning. Please try again",
                        description: "Error shown when skipping an in-progress ChatGPT response fails.",
                      })
                    : K.formatMessage({
                        id: "chatgpt.thread.steer_turn_actions.answer_now.error",
                        defaultMessage: "Failed to answer now. Please try again.",
                        description: "Error shown when the user asks ChatGPT to answer now and the request fails.",
                      })
                try {
                  if ("skip" === ed) {
                    let e = !1
                    if (
                      (await (0, I.Cz)(q, z, t, {
                        eventSource: "skip",
                        onStopped: () => {
                          e = !0
                        },
                      }),
                      !e || q.get(h.R1, z) !== J)
                    )
                      return void q.set(h.it, Z, null)
                    await (0, I.submitChatGPTRegeneration)(q, {
                      conversationId: z,
                      isTemporaryChat: G,
                      isReasoningSkipped: !0,
                      model: { ...ee, thinkingEffort: null },
                      promptMessageId: ea,
                      source: "try_again",
                      systemHints: q.get(m.yS, z),
                      variantPurpose: "none",
                    })
                  } else
                    null != $ &&
                      (await (0, I.cO)(q, { conversationId: z, isTemporaryChat: G, model: ee, asyncTaskId: $ }))
                } catch {
                  ;(q.set(h.it, Z, null), q.get(u.Id).danger(t, { errorAnalytics: { toastId: "answer_now_failed" } }))
                }
              }),
              (D[8] = $),
              (D[9] = J),
              (D[10] = z),
              (D[11] = V),
              (D[12] = K),
              (D[13] = G),
              (D[14] = ed),
              (D[15] = ee),
              (D[16] = H),
              (D[17] = ey),
              (D[18] = ea),
              (D[19] = q),
              (D[20] = Z),
              (D[21] = ei?.id),
              (D[22] = B),
              (D[23] = N))
            : (N = D[23])
          let eb = N
          if ("escape" === B) {
            let e, t, n
            return (
              D[24] !== eb
                ? ((e = () => {
                    eb()
                  }),
                  (D[24] = eb),
                  (D[25] = e))
                : (e = D[25]),
              D[26] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, a.jsx)(c.A, {
                    id: "chatgpt.prompt_textarea.stop_response_confirmation.button.answer_now",
                    defaultMessage: "Answer now",
                    description: "Starts answering without stopping the response.",
                  })),
                  (D[26] = t))
                : (t = D[26]),
              D[27] !== e
                ? ((n = (0, a.jsx)(d.$, { color: "secondary", type: "button", onClick: e, children: t })),
                  (D[27] = e),
                  (D[28] = n))
                : (n = D[28]),
              n
            )
          }
          return (
            D[29] !== eb
              ? ((O = () => {
                  eb()
                }),
                (D[29] = eb),
                (D[30] = O))
              : (O = D[30]),
            D[31] !== ed || D[32] !== eo
              ? ((P =
                  "skip" === ed && "string" == typeof eo
                    ? eo
                    : (0, a.jsx)(c.A, {
                        id: "chatgpt.thread.steer_turn_actions.answer_now.button.label",
                        defaultMessage: "Answer now",
                        description: "Action to begin answering while ChatGPT is thinking.",
                      })),
                (D[31] = ed),
                (D[32] = eo),
                (D[33] = P))
              : (P = D[33]),
            D[34] !== O || D[35] !== P
              ? ((L = (0, a.jsx)("button", {
                  type: "button",
                  className:
                    "ms-auto shrink-0 cursor-interaction rounded-sm text-size-chat text-tertiary underline decoration-dotted underline-offset-4 hover:text-default focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2",
                  onClick: O,
                  children: P,
                })),
                (D[34] = O),
                (D[35] = P),
                (D[36] = L))
              : (L = D[36]),
            L
          )
        },
      },
    )
  },
  abzF(e, t, n) {
    n.d(t, { oW: () => S, LQ: () => M })
    var a = n("ABep"),
      r = n("QosV"),
      s = n("zTeN"),
      i = n("zd8w"),
      o = n("Wf1j"),
      l = n("Avyg"),
      c = n("qMAt"),
      d = n("T9EM"),
      u = n("HAYt"),
      g = n("OWtl"),
      f = n("AOHi"),
      p = n("Ow2S"),
      h = n("OtLV"),
      m = n("SZCv"),
      v = n.n(m),
      y = n("AuIy"),
      b = n("t62K"),
      I = n("MrGp"),
      w = n("hFUr")
    let C = (0, s.bD)(g.u, (e) => null),
      _ = (0, s.i1)(
        g.u,
        (e, { get: t }) => {
          let n = t(I.Jv, e),
            a = t(I.Od, e),
            r = t(I.cC, e)
          return (0, w.D)(
            null == n
              ? []
              : (0, y.UI)({ mapping: n, current_node: a }).map((e) =>
                  null != e.id && r[e.id]?.blocked === !0
                    ? { ...e, metadata: { ...e.metadata, codex_request_user_input_async: void 0 } }
                    : e,
                ),
          )
        },
        { isEqual: v() },
      ),
      x = (0, s.i1)(g.u, (e, { get: t }) => null != t(I.SL, e) && !t(I.PH, e))
    function S(e) {
      let t,
        n,
        d,
        m,
        v = (0, r.c)(17),
        { conversationId: y, disabled: w, onSubmit: S, onRestoreDraft: M } = e,
        T = (0, s.gh)(g.u),
        k = (0, o.A)()
      v[0] !== y ? ((t = { backend: "chatgpt", threadId: y }), (v[0] = y), (v[1] = t)) : (t = v[1])
      let A = (0, s._U)(u.Ac, t),
        j = (0, s._U)(x, y),
        E = (0, i.useEffectEvent)(M)
      return (
        v[2] !== y || v[3] !== E || v[4] !== T
          ? ((n = () => {
              let e
              return (
                (e = { backend: "chatgpt", threadId: y }),
                T.watch(({ get: t }) => {
                  let n = t(_, y),
                    a = (0, I.QN)(t(I.F1, y)),
                    r = !1
                  return (
                    queueMicrotask(() => {
                      if (r) return
                      let t = null == n.turnId ? null : { ...e, entityKey: n.turnId },
                        s = T.get(C, y) ?? n.turnId,
                        i = null == s ? null : { ...e, entityKey: s }
                      if (null != i) {
                        let e = !a || t?.entityKey !== i.entityKey
                        for (let t of T.get(u.Od, i))
                          if (e || !n.questions.some(({ id: e }) => e === t)) {
                            let e = { ...i, itemId: t },
                              n = T.get(u.TH, e),
                              a = n?.draft.trim()
                            null != a && a.length > 0 && a !== n?.lastSubmission && E(a)
                          }
                        e && (0, u.$I)(T, i)
                      }
                      if ((T.set(C, y, n.turnId), null == t)) return
                      let o = T.get(u.Od, t),
                        l = a
                          ? n.questions.filter(
                              ({ id: e }) =>
                                (!o.includes(e) || T.get(u.TH, { ...t, itemId: e })?.status !== "inProgress") &&
                                null == n.answers[e],
                            )
                          : []
                      if (
                        ((0, u.zJ)(T, t, {
                          turnId: t.entityKey,
                          status: a ? "inProgress" : "completed",
                          questions: n.questions,
                          answersByQuestionItemId: new Map(Object.entries(n.answers)),
                        }),
                        l.length > 0)
                      )
                        for (let e of ((0, u.MH)(T, t, l, t.entityKey), new Set(l.map(({ sourceItemId: e }) => e))))
                          (0, b.MY)(T, l.filter(({ sourceItemId: t }) => t === e).length)
                    }),
                    () => {
                      r = !0
                    }
                  )
                })
              )
            }),
            (v[2] = y),
            (v[3] = E),
            (v[4] = T),
            (v[5] = n))
          : (n = v[5]),
        v[6] !== y || v[7] !== T ? ((d = [T, y]), (v[6] = y), (v[7] = T), (v[8] = d)) : (d = v[8]),
        (0, i.useEffect)(n, d),
        v[9] !== j || v[10] !== y || v[11] !== w || v[12] !== k || v[13] !== S || v[14] !== A || v[15] !== T
          ? ((m =
              null == A
                ? null
                : (0, a.jsx)(c.D, {
                    questionKey: A,
                    disabled: w || !j,
                    mentionContext: null,
                    isCurrent: (e) => T.get(x, y) && T.get(_, y).turnId === e,
                    onSubmit: async (e, t) => {
                      try {
                        return await S(
                          (0, l.FS)(e),
                          () =>
                            t() &&
                            e.every((e) => {
                              let { questionItemId: t } = e
                              return T.get(_, y).questions.some((e) => {
                                let { id: n } = e
                                return n === t
                              })
                            }),
                        )
                      } catch (e) {
                        return (T.set(p.uY, y, { message: (0, f.LH)(e, k.formatMessage(h.D.submitError)) }), !1)
                      }
                    },
                  })),
            (v[9] = j),
            (v[10] = y),
            (v[11] = w),
            (v[12] = k),
            (v[13] = S),
            (v[14] = A),
            (v[15] = T),
            (v[16] = m))
          : (m = v[16]),
        m
      )
    }
    function M(e) {
      let t,
        n = (0, r.c)(4),
        { conversationId: s, item: i, isReadOnly: o } = e
      return (
        n[0] !== s || n[1] !== o || n[2] !== i
          ? ((t =
              o || null == i.requestUserInputAsync || null == i.searchItemId
                ? null
                : (0, a.jsx)(T, { conversationId: s, questionId: i.searchItemId })),
            (n[0] = s),
            (n[1] = o),
            (n[2] = i),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
    function T(e) {
      let t,
        n = (0, r.c)(7),
        { conversationId: i, questionId: o } = e,
        l = (0, s.gh)(g.u),
        c = (0, s._U)(_, i),
        u = (0, s._U)(x, i)
      return (
        n[0] !== u || n[1] !== i || n[2] !== o || n[3] !== l || n[4] !== c.questions || n[5] !== c.turnId
          ? ((t =
              null != c.turnId &&
              c.questions.some((e) => {
                let { id: t } = e
                return t === o
              })
                ? (0, a.jsx)(d.b, {
                    questionKey: { backend: "chatgpt", threadId: i, entityKey: c.turnId, itemId: o },
                    disabled: !u,
                    canReply: () => l.get(x, i),
                  })
                : null),
            (n[0] = u),
            (n[1] = i),
            (n[2] = o),
            (n[3] = l),
            (n[4] = c.questions),
            (n[5] = c.turnId),
            (n[6] = t))
          : (t = n[6]),
        t
      )
    }
  },
  Wjns(e, t, n) {
    n.d(t, { U: () => v, k: () => m })
    var a = n("ABep"),
      r = n("QosV"),
      s = n("zTeN"),
      i = n("HZfM"),
      o = n("bqSP"),
      l = n("vJOD"),
      c = n("Wf1j"),
      d = n("HOLv"),
      u = n("XbfP"),
      g = n("B5vN")
    function f(e) {
      let t,
        n,
        s = (0, r.c)(12),
        { attachments: i, onNavigate: f, onRemove: p } = e,
        h = (0, c.A)()
      if (s[0] !== i || s[1] !== h || s[2] !== f || s[3] !== p) {
        let e
        ;(s[5] !== i.length || s[6] !== h || s[7] !== f || s[8] !== p
          ? ((e = (e, t) => {
              let { id: n, sourceMessageId: r, sourceOccurrence: s, text: c } = e,
                m = (0, l.fq)(e)
              return "string" != typeof m
                ? (0, a.jsx)(g.M, { selection: m, onRemove: () => p(n) }, n)
                : (0, a.jsx)(
                    u.T,
                    {
                      onClick: null != r && null != f ? () => f(r, c, s) : void 0,
                      filename:
                        1 === i.length
                          ? h.formatMessage({
                              id: "selectedTextAttachmentTiles.singleLabel",
                              defaultMessage: "Selection",
                              description:
                                "Label on a composer attachment containing the only text passage selected from an earlier chat response",
                            })
                          : h.formatMessage(
                              {
                                id: "selectedTextAttachmentTiles.label",
                                defaultMessage: "Selection {number}",
                                description:
                                  "Label on a composer attachment containing one of several text passages selected from earlier chat responses. The number is its position in the composer.",
                              },
                              { number: t + 1 },
                            ),
                      icon: (0, a.jsx)(d.I, { asset: o.R, className: "shrink-0" }),
                      preview: (0, a.jsx)("span", {
                        className:
                          "line-clamp-4 w-full self-start px-2.5 pt-2 text-xs leading-4.5 break-words whitespace-pre-wrap text-secondary",
                        children: c,
                      }),
                      onRemove: () => p(n),
                      removeAriaLabel: h.formatMessage(
                        {
                          id: "selectedTextAttachmentTiles.remove",
                          defaultMessage: "Remove selected text {number}",
                          description:
                            "Accessible label for removing one selected text attachment by its position, keeping the other attachments and draft",
                        },
                        { number: t + 1 },
                      ),
                    },
                    n,
                  )
            }),
            (s[5] = i.length),
            (s[6] = h),
            (s[7] = f),
            (s[8] = p),
            (s[9] = e))
          : (e = s[9]),
          (t = i.map(e)),
          (s[0] = i),
          (s[1] = h),
          (s[2] = f),
          (s[3] = p),
          (s[4] = t))
      } else t = s[4]
      return (s[10] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (s[10] = t), (s[11] = n)) : (n = s[11]), n)
    }
    var p = n("TyxL"),
      h = n("Oj9r")
    function m(e) {
      let t,
        n,
        o = (0, r.c)(8),
        { attachments: l, onRemove: c } = e,
        d = (0, s.gh)(h.GD),
        u = (0, i.zy)(),
        g = (0, i.Zp)()
      return (
        o[0] !== u || o[1] !== g || o[2] !== d.value.routeKind
          ? ((t = "chatgpt-thread" === d.value.routeKind ? (e, t, n) => y(u, g, e, t, n) : void 0),
            (o[0] = u),
            (o[1] = g),
            (o[2] = d.value.routeKind),
            (o[3] = t))
          : (t = o[3]),
        o[4] !== l || o[5] !== c || o[6] !== t
          ? ((n = (0, a.jsx)(f, { attachments: l, onNavigate: t, onRemove: c })),
            (o[4] = l),
            (o[5] = c),
            (o[6] = t),
            (o[7] = n))
          : (n = o[7]),
        n
      )
    }
    function v(e) {
      let t,
        n,
        s,
        o = (0, r.c)(11),
        { selectedText: l, sourceMessageId: c, sourceOccurrence: d } = e,
        u = (0, i.zy)(),
        g = (0, i.Zp)()
      return (
        o[0] !== l ? ((t = [l]), (o[0] = l), (o[1] = t)) : (t = o[1]),
        o[2] !== u || o[3] !== g || o[4] !== l || o[5] !== c || o[6] !== d
          ? ((n = () => y(u, g, c, l, d)), (o[2] = u), (o[3] = g), (o[4] = l), (o[5] = c), (o[6] = d), (o[7] = n))
          : (n = o[7]),
        o[8] !== t || o[9] !== n
          ? ((s = (0, a.jsx)(p.H, { selections: t, onNavigate: n })), (o[8] = t), (o[9] = n), (o[10] = s))
          : (s = o[10]),
        s
      )
    }
    function y(e, t, n, a, r) {
      let s = new URLSearchParams(e.search)
      ;(s.set("messageId", n),
        s.set("selectedTextQuery", a),
        null != r && r > 0 ? s.set("selectedTextOccurrence", String(r)) : s.delete("selectedTextOccurrence"),
        s.delete("historySearchQuery"),
        t(
          { pathname: e.pathname, search: s.toString(), hash: e.hash },
          { preventScrollReset: !0, replace: !0, state: e.state },
        ))
    }
  },
  sWza(e, t, n) {
    var a = n("zTeN"),
      r = n("Oj9r")
    let s = (0, a.bD)(r.GD, (e) => null)
    n.d(t, {}, { L: s })
  },
  Nc8R(e, t, n) {
    n.d(
      t,
      {},
      {
        K: function (e) {
          return null == e ? "uploaded" : "image_gen" === e ? "generated" : void 0
        },
      },
    )
  },
  Fj96(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      editNamedReference: {
        id: "chatgptConversations.referenceImages.menu.edit.ariaLabel",
        defaultMessage: "Edit {name}",
        description:
          "Accessible label for a used-reference row that opens the saved reference editor. The name placeholder is the reference's display name, such as Me or Mom.",
      },
      usedReferenceHeading: {
        id: "chatgptConversations.referenceImages.menu.used.heading",
        defaultMessage: "{count, plural, one {Reference} other {References}}",
        description:
          "Heading in a generated image's reference menu above the saved photos used to create that image. The count placeholder is the number of used reference photos. Each row opens the reference editor.",
      },
      recreateWithHeading: {
        id: "chatgptConversations.referenceImages.menu.recreate.heading",
        defaultMessage: "Recreate with",
        description:
          "Heading in a generated image's reference menu above other saved photos. Selecting one immediately generates a new version of the image using that reference.",
      },
      loadingReferences: {
        id: "chatgptConversations.referenceImages.menu.loading.label",
        defaultMessage: "Loading references…",
        description: "Status row in a generated image's reference menu while saved reference photos are loading",
      },
      retryReferences: {
        id: "chatgptConversations.referenceImages.menu.retry.label",
        defaultMessage: "Retry loading references",
        description:
          "Menu action to reload saved reference photos after the generated image's reference menu could not load them",
      },
      referenceActionError: {
        id: "chatgptConversations.referenceImages.menu.action.error",
        defaultMessage: "Couldn’t complete this action. Try again",
        description:
          "Error in a generated image's reference menu when opening reference details or starting a new image with a selected reference fails. The menu stays open so the user can retry.",
      },
      uploadImage: {
        id: "chatgptConversations.referenceImages.uploadImage",
        defaultMessage: "Upload image",
        description:
          "Button that selects a new candidate reference photo and opens the crop editor. The reference is saved only when the main form is submitted.",
      },
      dropImage: {
        id: "chatgptConversations.referenceImages.dropImage",
        defaultMessage: "Drop image to use as reference",
        description:
          "Overlay shown when dragging an image file onto a reference image modal. Dropping selects a candidate for editing; it does not save the reference yet.",
      },
      edit: {
        id: "chatgptConversations.referenceImages.edit",
        defaultMessage: "Edit",
        description: "Button label that opens the form to edit a saved reusable image reference",
      },
      editTitle: {
        id: "chatgptConversations.referenceImages.editTitle",
        defaultMessage: "Edit reference",
        description: "Title of the form for changing a saved reference image’s name, category, or photo",
      },
      replacePhoto: {
        id: "chatgptConversations.referenceImages.replacePhoto",
        defaultMessage: "Replace photo",
        description: "Button label that opens the file picker to replace a saved reference image’s photo",
      },
      deleteReference: {
        id: "chatgptConversations.referenceImages.deleteReference",
        defaultMessage: "Delete reference",
        description:
          "Button label for removing a saved reusable image reference without deleting its original Library image",
      },
      deleteTitle: {
        id: "chatgptConversations.referenceImages.deleteTitle",
        defaultMessage: "Delete reference?",
        description: "Title of the confirmation dialog for deleting a saved reusable image reference",
      },
      deleteDescription: {
        id: "chatgptConversations.referenceImages.deleteDescription",
        defaultMessage: "This reference will be removed. The original image will stay in your Library.",
        description:
          "Confirmation text explaining that deleting a saved reference removes the reference only and preserves its original image in Library",
      },
      deleteDescriptionSpace: {
        id: "chatgptConversations.referenceImages.deleteDescription.space",
        defaultMessage: "This reference will be removed. The original image will stay in your Space.",
        description:
          "Confirmation text explaining that deleting a saved reference removes the reference only and preserves its original image in Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
      updateError: {
        id: "chatgptConversations.referenceImages.updateError",
        defaultMessage: "Couldn’t update the reference. Try again",
        description: "Error shown when updating the name, category, or photo of a saved reusable image reference fails",
      },
      deleteError: {
        id: "chatgptConversations.referenceImages.deleteError",
        defaultMessage: "Couldn’t delete the reference. Try again",
        description: "Error shown when deleting a saved reusable image reference fails",
      },
      updateSuccess: {
        id: "chatgptConversations.referenceImages.updateSuccess.reference",
        defaultMessage: "Updated your reference",
        description:
          "Success toast after editing the name, category, or photo of a saved reusable image reference, including a photo of the signed-in user",
      },
      deleteSuccess: {
        id: "chatgptConversations.referenceImages.deleteSuccess",
        defaultMessage: "Deleted {name} from your references",
        description: "Success message after deleting a reusable image reference, where name is its display name",
      },
      libraryManage: {
        id: "chatgptConversations.referenceImages.libraryManage",
        defaultMessage: "View reference {name}",
        description:
          "Accessible label for a saved reference chip that opens its editor, where name is the reference’s display name",
      },
      add: {
        id: "chatgptConversations.referenceImages.add",
        defaultMessage: "Add",
        description: "Short action label that opens a form for saving a suggested photo as a reusable image reference",
      },
      addReference: {
        id: "chatgptConversations.referenceImages.addReference",
        defaultMessage: "Add reference",
        description: "Button label that opens a form for uploading and saving a reusable image reference",
      },
      cancel: {
        id: "chatgptConversations.referenceImages.cancel",
        defaultMessage: "Cancel",
        description: "Button label that closes a reference image form without saving changes",
      },
      chooseImage: {
        id: "chatgptConversations.referenceImages.chooseImage",
        defaultMessage: "Choose image",
        description: "Button label that opens the system file picker to choose a reusable reference image",
      },
      confirmDescription: {
        id: "chatgptConversations.referenceImages.confirmDescription",
        defaultMessage:
          "ChatGPT can use this photo as a reference for future images. Only save photos you own or have permission to use.",
        description:
          "Helper text in the Save reference dialog explaining future reuse and reminding users to save only photos they own or have permission to use",
      },
      confirmTitle: {
        id: "chatgptConversations.referenceImages.confirmTitle",
        defaultMessage: "Save reference",
        description: "Title of the dialog for classifying and naming a reusable image reference before saving it",
      },
      uploadTitle: {
        id: "chatgptConversations.referenceImages.uploadTitle",
        defaultMessage: "Upload reference",
        description:
          "Title of the dialog for uploading, classifying, and naming a new reusable image reference from the user's device",
      },
      createError: {
        id: "chatgptConversations.referenceImages.createError",
        defaultMessage: "Couldn’t add the reference. Try again",
        description: "Error shown when uploading or saving a reusable image reference fails",
      },
      dismissSuggestion: {
        id: "chatgptConversations.referenceImages.dismissSuggestion",
        defaultMessage: "Dismiss reference suggestion",
        description: "Accessible label for dismissing a suggestion to save a photo as a reusable image reference",
      },
      entityAsset: {
        id: "chatgptConversations.referenceImages.entityAsset",
        defaultMessage: "Other",
        description: "Reference image category for an object or other subject that is not a person, pet, or place",
      },
      entityName: {
        id: "chatgptConversations.referenceImages.entityName",
        defaultMessage: "Name",
        description: "Label and placeholder for the name used to mention a saved image reference in future prompts",
      },
      entityPerson: {
        id: "chatgptConversations.referenceImages.entityPerson",
        defaultMessage: "Friends",
        description: "Reference image category for another person represented by the selected photo",
      },
      entityPet: {
        id: "chatgptConversations.referenceImages.entityPet",
        defaultMessage: "Pets",
        description: "Reference image category for a pet represented by the selected photo",
      },
      entityPlace: {
        id: "chatgptConversations.referenceImages.entityPlace",
        defaultMessage: "Spaces",
        description:
          "Reference image category for physical places or spaces represented by the selected photo, such as a room or garden; not the app's Spaces collections",
      },
      entitySelf: {
        id: "chatgptConversations.referenceImages.entitySelf",
        defaultMessage: "Me",
        description: "Reference image category for a photo representing the signed-in user",
      },
      entityType: {
        id: "chatgptConversations.referenceImages.entityType",
        defaultMessage: "Reference type",
        description: "Accessible label for the group of categories used to classify a reusable image reference",
      },
      firstUseDescription: {
        id: "chatgptConversations.referenceImages.firstUseDescription",
        defaultMessage: "Save your photos so ChatGPT can personalize future images.",
        description: "Description in the one-time introduction to reusable personal image references",
      },
      firstUsePreview: {
        id: "chatgptConversations.referenceImages.firstUsePreview.subject",
        defaultMessage:
          "Create an image of <reference>{entityType, select, self {me} pet {my pet} person {my friend} place {my space} named {{name}} other {this reference}}</reference>",
        description:
          "Example image-generation prompt in the one-time personal reference introduction. The reference tag displays a thumbnail beside the subject. entityType selects the subject: self is the signed-in user, pet is their pet, person is their friend, place is a physical space such as a room, named uses the supplied subject name, and other is an unnamed object or unknown category. Keep the prompt short.",
      },
      firstUseTitle: {
        id: "chatgptConversations.referenceImages.firstUseTitle",
        defaultMessage: "Make image creation easier",
        description: "Title of the one-time introduction to reusable personal image references",
      },
      firstUseTry: {
        id: "chatgptConversations.referenceImages.firstUseTry",
        defaultMessage: "Try it",
        description:
          "Button label that dismisses the one-time reference image introduction and continues to the save form",
      },
      libraryHeading: {
        id: "chatgptConversations.referenceImages.libraryHeading",
        defaultMessage: "References",
        description: "Heading above saved reusable image references at the start of the Library Images view",
      },
      moreReferencesCount: {
        id: "chatgptConversations.referenceImages.moreReferencesCount",
        defaultMessage: "+{count}",
        description:
          "Compact count after stacked reference thumbnails showing how many additional saved references were used, where count is the number not represented by a visible thumbnail",
      },
      reference: {
        id: "chatgptConversations.referenceImages.reference",
        defaultMessage: "Reference",
        description:
          "Compact label in a conversation suggestion offering to save a photo as a reusable image reference",
      },
      save: {
        id: "chatgptConversations.referenceImages.save",
        defaultMessage: "Save",
        description: "Primary button label that saves a reusable image reference",
      },
      saveSuccess: {
        id: "chatgptConversations.referenceImages.saveSuccess.library",
        defaultMessage: "Reference saved. You can manage your saved references in Library.",
        description:
          "Success toast after saving a reusable image reference, reminding users that they can manage their saved references in the Library section of the app",
      },
      saveSuccessSpace: {
        id: "chatgptConversations.referenceImages.saveSuccess.space",
        defaultMessage: "Reference saved. You can manage your saved references in Space.",
        description:
          "Success toast after saving a reusable image reference, reminding users that they can manage their saved references in the Space section of the app. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
      selfEntityName: {
        id: "chatgptConversations.referenceImages.selfEntityName",
        defaultMessage: "Self",
        description:
          "Fixed canonical name saved for a reusable reference image representing the signed-in user; user-facing first-person copy may display Me or me instead",
      },
      selfMention: {
        id: "chatgptConversations.referenceImages.selfMention",
        defaultMessage: "me",
        description:
          "Lowercase first-person label shown after the at sign for the signed-in user’s own saved reference photo",
      },
      suggestionImageAlt: {
        id: "chatgptConversations.referenceImages.suggestionImageAlt",
        defaultMessage: "Suggested reference image",
        description: "Alt text for a photo that ChatGPT suggests saving as a reusable image reference",
      },
      overlayAddLabel: {
        id: "chatgptConversations.referenceImages.overlayAddLabel",
        defaultMessage: "Add this image as a reference",
        description:
          "Accessible label for an action over a generated image that saves a suggested reusable image reference",
      },
      usedReferencesLabel: {
        id: "chatgptConversations.referenceImages.usedReferencesLabel",
        defaultMessage: "{count, plural, one {Show the reference used} other {Show the # references used}}",
        description:
          "Accessible label for an action that shows the saved references used to create an image where count is the number used",
      },
    })
    n.d(t, {}, { T: a })
  },
  T9EM(e, t, n) {
    n.d(t, { b: () => f })
    var a = n("ABep"),
      r = n("QosV"),
      s = n("zTeN"),
      i = n("OWtl"),
      o = n("ipGF"),
      l = n("oyxz"),
      c = n("Sm6l"),
      d = n("HOLv")
    function u(e) {
      let t,
        n,
        s,
        i = (0, r.c)(4),
        { onClick: u } = e
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(d.I, { className: "shrink-0", asset: o.J })),
            (n = (0, a.jsx)(l.A, {
              id: "sendUserMessageQuestion.answer",
              defaultMessage: "Answer question",
              description:
                "Action below an unanswered mid-turn question that opens its reply panel while the turn is still running",
            })),
            (i[0] = t),
            (i[1] = n))
          : ((t = i[0]), (n = i[1])),
        i[2] !== u
          ? ((s = (0, a.jsxs)(c.$, {
              className: "mt-3",
              color: "outlineGhost",
              size: "composer",
              onClick: u,
              children: [t, n],
            })),
            (i[2] = u),
            (i[3] = s))
          : (s = i[3]),
        s
      )
    }
    var g = n("HAYt")
    function f(e) {
      let t,
        n = (0, r.c)(4),
        { questionKey: o, disabled: l, canReply: c } = e,
        d = (0, s.gh)(i.u),
        f = (0, s._U)(g.UW, o)
      return (void 0 !== l && l) || "answer" !== f
        ? null
        : (n[0] !== c || n[1] !== o || n[2] !== d
            ? ((t = (0, a.jsx)(u, {
                onClick: () => {
                  ;(null == c || c()) && "answer" === d.get(g.UW, o) && (0, g.LL)(d, o)
                },
              })),
              (n[0] = c),
              (n[1] = o),
              (n[2] = d),
              (n[3] = t))
            : (t = n[3]),
          t)
    }
  },
  LuL7(e, t, n) {
    let a = (0, n("iJY0").a)({
      name: "stop-fill-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 3.918335, y: 3.918457, width: 12.163086, height: 12.163086 },
        visualBounds: { x: 3.918335, y: 3.918457, width: 12.163086, height: 12.163086 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.918335, y: 3.918457, width: 12.163086, height: 12.163086 },
        center: { x: 9.999878, y: 10 },
        insets: { top: 3.918457, right: 3.918579, bottom: 3.918457, left: 3.918335 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 9.999878, y: 10 }, foreground: { x: 9.999878, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M13.0834 3.91846C14.7392 3.91846 16.0812 5.26072 16.0814 6.9165V13.0835C16.0814 14.7394 14.7393 16.0815 13.0834 16.0815H6.91638C5.2606 16.0814 3.91833 14.7393 3.91833 13.0835V6.9165C3.91851 5.26083 5.26071 3.91863 6.91638 3.91846H13.0834Z" fill="currentColor"/>',
    })
    n.d(t, {}, { m: a })
  },
}
//# sourceMappingURL=552666.47c5053ba6.js.map
