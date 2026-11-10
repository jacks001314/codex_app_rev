export const __rspack_esm_ids = [615197]
export const __webpack_modules__ = {
  d5o7(e, s, t) {
    e.exports = t.p + "assets/onepassword.1f968a8145.png"
  },
  eCjp(e, s, t) {
    var a = t("zTeN"),
      n = t("DBCl"),
      r = t("ASxG"),
      o = t("OiCI"),
      i = t("SPnB"),
      c = t("Ghh3"),
      l = t("g2p6"),
      d = t("OWtl")
    let u = (0, a.aP)(d.u, ({ scope: e }) => ({
      mutationKey: ["default-password-manager"],
      scope: { id: "default-password-manager" },
      retry: !1,
      mutationFn: async ({ provider: s, accountId: t, userId: a }) => {
        let d = () => e.get(o.Sk) === t && e.get(i.chatGptAuthenticatedAccountId$) === t && e.get(i.o8) === a
        if (!d()) throw Error("Password manager workspace changed")
        let u = e.query.snapshot(l.s6),
          p = e.get(i.chatGptAuthenticatedUserId$)
        if ((await u.cancel(), !d())) throw Error("Password manager workspace changed")
        let h = await c.Request.safePatch("/settings/account_user_setting", {
          expectedIdentity: { accountId: t, userId: a },
          additionalHeaders: { "ChatGPT-Account-ID": t, [n.zBc]: t },
          parameters: { query: { feature: "default_password_manager", value: s } },
          retry: "never",
        })
        ;(r.object({ default_password_manager: r.literal(s) }).parse(h),
          await u.cancel(),
          u.setData((e) => (null == e ? e : { ...e, defaultPasswordManager: s })),
          await e.queryClient.invalidateQueries({
            predicate: ({ queryKey: e }) =>
              ("browser-auth-preparation" === e[0] || "messaging-credential-preparation" === e[0]) &&
              (e[1] === p || e[1] === a) &&
              e[2] === t,
          }),
          await e.queryClient.invalidateQueries({ queryKey: u.queryKey, exact: !0, refetchType: "none" }))
      },
    }))
    t.d(s, {}, { Q: u })
  },
  kpoE(e, s, t) {
    var a = t("ASxG")
    t("fVOX")
    var n = t("WFY2"),
      r = t("eShZ")
    let o = a.object({
      stage: a.enum([
        "prepare",
        "connection_status",
        "disconnect",
        "recovery_read",
        "recovery_claim",
        "recovery_write",
        "recovery_reconcile",
        "enrollment",
        "enrollment_completion",
        "authorization_navigation",
        "approval_navigation",
        "approval_start",
        "approval_resume",
        "approval_poll",
        "fill",
      ]),
      error_category: a.enum(["http", "network", "timeout", "client", "invalid_response", "popup_blocked"]),
      http_status: a
        .number()
        .int()
        .min(400)
        .max(599)
        .optional()
        .catch(void 0),
      operation_id: a
        .uuid()
        .optional()
        .catch(void 0),
    })
    t.d(
      s,
      {},
      {
        z: function (e, s, t, a) {
          if (t instanceof Error && "AbortError" === t.name) return
          let i = "client"
          "invalid_response" === t || "popup_blocked" === t
            ? (i = t)
            : t instanceof Error && "TimeoutError" === t.name
              ? (i = "timeout")
              : t instanceof r.fk && (i = "network" === t.errorKind ? "network" : "http")
          let c = o.safeParse({
            stage: s,
            error_category: i,
            http_status: "http" === i && t instanceof r.fk ? t.status : void 0,
            operation_id: a,
          }).data
          if (null != c)
            try {
              n.v.error("Browser auth failed", { safe: c })
            } catch {}
        },
      },
    )
  },
  RWpI(e, s, t) {
    t.d(s, { completeNativeOnePasswordEnrollment: () => b, oL: () => f, g$: () => w, UB: () => y })
    var a = t("zTeN"),
      n = t("DBCl"),
      r = t("SPnB"),
      o = t("Ghh3"),
      i = t("Ot7V"),
      c = t("svjy"),
      l = t("GaA7"),
      d = t("OWtl"),
      u = t("OMIV"),
      p = t("GDNt")
    let h = [
      "https://my.b5dev.eu/oauth/authorize",
      "https://my.b5dev.com/oauth/authorize",
      "https://my.1password.com/oauth/authorize",
      "https://start.b5dev.eu/sign-up/agent/individual",
      "https://start.b5dev.com/sign-up/agent/individual",
      "https://start.1password.com/sign-up/agent/individual",
    ]
    var g = t("kpoE")
    let m = {
        "codex://connector/oauth_callback": "codex_onepassword__",
        "codex-dev://connector/oauth_callback": "codex_dev_onepassword__",
      },
      w = (0, a.vP)(d.u, () => null)
    async function f(e, s) {
      if (null == e || null == s) throw Error("Missing authenticated identity")
      await o.Request.safeDelete("/password-managers/1password", {
        expectedIdentity: { accountId: e, userId: s },
        additionalHeaders: { "ChatGPT-Account-ID": e },
        retry: "never",
      })
    }
    async function y(e, s, t, a, n, r = !1) {
      let i = "enrollment"
      try {
        let c = e.get(w)
        r || c?.accountId !== s || c.userId !== a || (await f(s, a))
        let l = await o.Request.safePost("/password-managers/1password/enrollment", {
          expectedIdentity: { accountId: s, userId: a },
          additionalHeaders: { "ChatGPT-Account-ID": s },
          requestBody: { expected_account_user_id: t, ...(r ? { reset_pairing: !0 } : {}) },
          retry: "never",
        })
        ;(x(e, s, a) && e.set(w, null),
          (i = "authorization_navigation"),
          await _(l.authorization_url, n, r || (0, u.ie)(e, "1937177189"), () => x(e, s, a)))
      } catch (s) {
        throw (n?.closed || (0, g.z)(e, i, s), n?.close(), s)
      }
    }
    async function b(e, s) {
      await e.when(({ get: e }) => e(r.cj))
      let t = e.get(r.chatGptAuthenticatedAccountId$),
        a = e.get(r.o8),
        o = e.get(r.Kw),
        i = () => x(e, t, a),
        l = "/oauth_callback/onepassword-staging" === s.pathname ? "https://chatgpt-staging.com" : "https://chatgpt.com"
      try {
        let r = s.searchParams.get("handoff")
        if (!r || r.length > 24576 || 1 !== s.searchParams.size) throw Error("Invalid 1Password callback")
        if (null == t || null == a) throw Error("Missing authenticated identity")
        let { body: d } = await p._n
          .getInstance()
          .sendRequest("POST", `${l}/onepassword/callback`, {
            headers: { [n.n1Q]: "1", "ChatGPT-Account-ID": t, "Content-Type": "application/json" },
            body: JSON.stringify({ handoff: r }),
            expectedIdentity: { accountId: t, userId: a },
            retry: "never",
          })
        if (!i()) return
        if (d.restart_authorization_url) return void (await _(d.restart_authorization_url, void 0, !0, i))
        if (
          "failed" === d.state &&
          null != o &&
          null != d.enrollment_url &&
          window.confirm(
            e
              .get(c.g)
              .formatMessage({
                id: "onepassword.native.resetConfirmation",
                defaultMessage:
                  "Reset and reconnect 1Password? This revokes the selected 1Password account’s existing OpenAI tokens and item approvals across ChatGPT workspaces",
                description:
                  "Confirmation before resetting a 1Password account pairing, which revokes existing OpenAI tokens and item approvals across ChatGPT workspaces",
              }),
          )
        )
          return void (await y(e, t, o, a, void 0, !0))
        if ("connected" !== d.state) throw Error("1Password enrollment did not complete")
      } catch (s) {
        ;((0, g.z)(e, "enrollment_completion", s), i() && e.set(w, { accountId: t, userId: a }))
      } finally {
        e.queryClient.invalidateQueries({
          predicate: ({ queryKey: e }) =>
            e[2] === t &&
            ("password-manager-connection" === e[0] ||
              "browser-auth-preparation" === e[0] ||
              "messaging-credential-preparation" === e[0]),
        })
      }
    }
    function x(e, s, t) {
      return e.get(r.chatGptAuthenticatedAccountId$) === s && e.get(r.o8) === t
    }
    async function _(e, s, t, a) {
      let n = new URL(e)
      if (n.username || n.password || !h.includes(n.origin + n.pathname))
        throw Error("Invalid 1Password authorization destination")
      if (!a()) return void s?.close()
      if (null != s) {
        if (s.closed) throw Error("1Password enrollment tab was closed")
        s.sessionStorage.clear()
        let e = s.document.createElement("meta")
        ;((e.name = "referrer"), (e.content = "no-referrer"), s.document.head.append(e), s.location.replace(n.href))
        return
      }
      if (t) {
        let e = m[(await l.appServices.connectorOAuth?.getCallbackUrl()) ?? ""],
          s = n.searchParams.get("state")
        if (null == e || !s || 1 !== n.searchParams.getAll("state").length)
          throw Error("Invalid 1Password native authorization")
        n.searchParams.set("state", e + s)
      }
      a() && (0, i.E0)({ href: n.href, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
  },
  EWWJ(e, s, t) {
    t.d(s, { PasswordsSettings: () => eu })
    var a = t("ABep"),
      n = t("QosV"),
      r = t("uris"),
      o = t("xSOA"),
      i = t("zTeN"),
      c = t("zd8w"),
      l = t("Wf1j"),
      d = t("oyxz"),
      u = t("SPnB"),
      p = t("EOo5"),
      h = t("g2p6"),
      g = t("zKCW"),
      m = t("ygO2"),
      w = t("f38C"),
      f = t("okCa"),
      y = t("RNul"),
      b = t("OWtl"),
      x = t("jxU8"),
      _ = t("T0Rc"),
      v = t("HZfM"),
      j = t("ASxG"),
      S = t("d5o7"),
      C = t("kpoE"),
      P = t("RWpI"),
      k = t("Ghh3"),
      M = t("JNtf"),
      A = t("mUDD"),
      I = t("ZQu1"),
      E = t("eCjp"),
      T = t("bqtn"),
      G = t("AWNZ"),
      z = t("QyE3")
    function R(e) {
      let s,
        t,
        r,
        o,
        c,
        l,
        p,
        g = (0, n.c)(21),
        { onePasswordConnected: w, disabled: f } = e,
        y = (0, i.Ul)(u.chatGptAuthenticatedAccountId$),
        b = (0, i.Ul)(u.o8),
        { data: x, isPending: _, isError: v, refetch: j } = (0, i.Ul)(h.s6),
        S = (0, i.Ul)(E.Q),
        C = S.isPending,
        P = S.isError && S.variables?.accountId === y && S.variables?.userId === b,
        k = f || _ || v || C || null == y || null == b
      ;(g[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            value: "openai_passwords",
            label: (0, a.jsx)(d.A, {
              id: "settings.passwords.default.openai",
              defaultMessage: "OpenAI Passwords",
              description: "Name of the built-in password manager",
            }),
            disabled: !1,
          }),
          (g[0] = s))
        : (s = g[0]),
        g[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(d.A, {
              id: "settings.passwords.default.onepassword",
              defaultMessage: "1Password",
              description: "Name of the external password manager; keep the brand unchanged",
            })),
            (g[1] = t))
          : (t = g[1]))
      let M = !w
      g[2] !== M ? ((r = [s, { value: "onepassword", label: t, disabled: M }]), (g[2] = M), (g[3] = r)) : (r = g[3])
      let A = r
      if (P) {
        let e
        ;(g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("span", {
              role: "alert",
              children: (0, a.jsx)(d.A, {
                id: "settings.passwords.default.saveError",
                defaultMessage: "We couldn’t save your choice. Try again",
                description: "Error saving the default password manager; the previous choice remains selected",
              }),
            })),
            (g[4] = e))
          : (e = g[4]),
          (o = e))
      } else if (v) {
        let e
        ;(g[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("span", {
              role: "alert",
              children: (0, a.jsx)(d.A, {
                id: "settings.passwords.default.loadError",
                defaultMessage: "We couldn’t load your default password manager",
                description: "Error fetching the user's password manager preference",
              }),
            })),
            (g[5] = e))
          : (e = g[5]),
          (o = e))
      }
      return (
        g[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(d.A, {
              id: "settings.passwords.default.label",
              defaultMessage: "Default password manager",
              description: "Setting choosing which password manager is offered first for cloud browser sign-in",
            })),
            (g[6] = c))
          : (c = g[6]),
        g[7] !== y ||
        g[8] !== x?.defaultPasswordManager ||
        g[9] !== v ||
        g[10] !== _ ||
        g[11] !== A ||
        g[12] !== j ||
        g[13] !== S ||
        g[14] !== C ||
        g[15] !== k ||
        g[16] !== b
          ? ((l = (e) =>
              v
                ? (0, a.jsx)(m.$, {
                    size: "toolbar",
                    color: "secondary",
                    onClick: () => {
                      j()
                    },
                    children: (0, a.jsx)(d.A, {
                      id: "settings.passwords.default.retry",
                      defaultMessage: "Retry",
                      description: "Retry loading the default password manager",
                    }),
                  })
                : (0, a.jsx)(T.Ab, {
                    align: "end",
                    disabled: k,
                    triggerButton: (0, a.jsx)(z.vg, {
                      ...e,
                      disabled: k,
                      loading: C,
                      children: _
                        ? (0, a.jsx)(d.A, {
                            id: "settings.passwords.default.loading",
                            defaultMessage: "Loading…",
                            description: "Loading the default password manager setting",
                          })
                        : (A.find((e) => e.value === x?.defaultPasswordManager)?.label ??
                          (0, a.jsx)(d.A, {
                            id: "settings.passwords.default.unset",
                            defaultMessage: "Not set",
                            description: "No default password manager has been chosen",
                          })),
                    }),
                    children: (0, a.jsx)(T.ms.RadioGroup, {
                      value: x?.defaultPasswordManager ?? "",
                      children: A.map((e) =>
                        (0, a.jsx)(
                          T.ms.RadioItem,
                          {
                            value: e.value,
                            disabled: e.disabled,
                            onSelect: () => {
                              null != y && null != b && S.mutate({ provider: e.value, accountId: y, userId: b })
                            },
                            children: e.label,
                          },
                          e.value,
                        ),
                      ),
                    }),
                  })),
            (g[7] = y),
            (g[8] = x?.defaultPasswordManager),
            (g[9] = v),
            (g[10] = _),
            (g[11] = A),
            (g[12] = j),
            (g[13] = S),
            (g[14] = C),
            (g[15] = k),
            (g[16] = b),
            (g[17] = l))
          : (l = g[17]),
        g[18] !== o || g[19] !== l
          ? ((p = (0, a.jsx)(G.ic, { label: c, description: o, control: l })), (g[18] = o), (g[19] = l), (g[20] = p))
          : (p = g[20]),
        p
      )
    }
    var O = t("BSnr"),
      B = t("ZEx5"),
      N = t("hZax"),
      q = t("jUpH"),
      L = t("VL22")
    function U() {
      let e,
        s = (0, n.c)(2),
        t = (0, N.Zj)("2244853012")
      return (s[0] !== t ? ((e = t ? (0, a.jsx)(D, {}) : null), (s[0] = t), (s[1] = e)) : (e = s[1]), e)
    }
    function D() {
      let e,
        s,
        t,
        r,
        l,
        p,
        h,
        w,
        f,
        y,
        x,
        E,
        T,
        z,
        N,
        U,
        D,
        $,
        W,
        Z,
        F,
        H,
        Q,
        X,
        K,
        V,
        J,
        Y,
        ee,
        es,
        et,
        ea,
        en,
        er,
        eo,
        ei,
        ec,
        el,
        ed,
        eu,
        ep,
        eh,
        eg = (0, n.c)(135),
        em = (0, i.gh)(b.u),
        ew = (0, i.Ul)(u.chatGptAuthenticatedAccountId$),
        ef = (0, i.Ul)(u.Kw),
        ey = (0, i.Ul)(u.o8),
        eb = (0, v.zy)(),
        ex = (0, v.Zp)(),
        e_ = new URLSearchParams(eb.search),
        ev = j.uuid().safeParse(e_.get("onepassword_account_id")).data,
        ej = null != ev && ev !== ew,
        eS = "unconfirmed" === e_.get("onepassword_result")
      eg[0] !== ew || eg[1] !== ey
        ? ((e = JSON.stringify([ew, ey])), (eg[0] = ew), (eg[1] = ey), (eg[2] = e))
        : (e = eg[2])
      let eC = e,
        [eP, ek] = (0, c.useState)(null),
        eM = eP === eC && !ej,
        eA = (0, c.useRef)(!1),
        eI = (0, c.useRef)(!1),
        eE = (0, c.useRef)(void 0)
      eg[3] !== ew || eg[4] !== em || eg[5] !== ey
        ? ((s = () => em.get(u.chatGptAuthenticatedAccountId$) === ew && em.get(u.o8) === ey),
          (eg[3] = ew),
          (eg[4] = em),
          (eg[5] = ey),
          (eg[6] = s))
        : (s = eg[6])
      let eT = s
      ;(eg[7] !== ew || eg[8] !== ey
        ? ((t = ["password-manager-connection", ey, ew]), (eg[7] = ew), (eg[8] = ey), (eg[9] = t))
        : (t = eg[9]),
        eg[10] !== ew || eg[11] !== eC || eg[12] !== eT || eg[13] !== em || eg[14] !== ey
          ? ((r = async (e) => {
              let { signal: s } = e
              if (null == ew || null == ey) throw Error("Missing authenticated identity")
              try {
                let e = await k.Request.safeGet("/password-managers/1password", {
                  expectedIdentity: { accountId: ew, userId: ey },
                  additionalHeaders: { "ChatGPT-Account-ID": ew },
                  retry: !1,
                  expectedErrorStatuses: [403, 404, 503],
                  signal: s,
                })
                return (eE.current === eC && (eE.current = void 0), e)
              } catch (e) {
                throw (
                  !s.aborted && eT() && eE.current !== eC && ((eE.current = eC), (0, C.z)(em, "connection_status", e)),
                  e
                )
              }
            }),
            (eg[10] = ew),
            (eg[11] = eC),
            (eg[12] = eT),
            (eg[13] = em),
            (eg[14] = ey),
            (eg[15] = r))
          : (r = eg[15]))
      let eG = null != ew && null != ey && !ej
      ;(eg[16] !== eS
        ? ((l = (e) => !eS && e.state.data?.state === "connecting" && 1500), (eg[16] = eS), (eg[17] = l))
        : (l = eg[17]),
        eg[18] !== t || eg[19] !== r || eg[20] !== eG || eg[21] !== l
          ? ((p = {
              queryKey: t,
              queryFn: r,
              staleTime: 0,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: "always",
              enabled: eG,
              refetchInterval: l,
            }),
            (eg[18] = t),
            (eg[19] = r),
            (eg[20] = eG),
            (eg[21] = l),
            (eg[22] = p))
          : (p = eg[22]))
      let { data: ez, isFetching: eR, isError: eO, refetch: eB } = (0, _.I)(p)
      ;(eg[23] !== ew || eg[24] !== eT || eg[25] !== em || eg[26] !== ey
        ? ((h = () =>
            (0, P.oL)(ew, ey).catch((e) => {
              throw (eT() && (0, C.z)(em, "disconnect", e), e)
            })),
          (eg[23] = ew),
          (eg[24] = eT),
          (eg[25] = em),
          (eg[26] = ey),
          (eg[27] = h))
        : (h = eg[27]),
        eg[28] !== ek ? ((w = () => ek(null)), (eg[28] = ek), (eg[29] = w)) : (w = eg[29]),
        eg[30] !== eB ? ((f = () => eB()), (eg[30] = eB), (eg[31] = f)) : (f = eg[31]),
        eg[32] !== h || eg[33] !== w || eg[34] !== f
          ? ((y = { mutationFn: h, onSuccess: w, onSettled: f }),
            (eg[32] = h),
            (eg[33] = w),
            (eg[34] = f),
            (eg[35] = y))
          : (y = eg[35]))
      let eN = (0, o.n)(y)
      ;(eg[36] !== ew || eg[37] !== ef || eg[38] !== em || eg[39] !== ey
        ? ((x = (e) => {
            let s = null === e
            if (null == ew || null == ef || null == ey || s)
              throw (
                s && (0, C.z)(em, "enrollment", "popup_blocked"),
                e?.close(),
                Error("Unable to start 1Password enrollment")
              )
            return (0, P.UB)(em, ew, ef, ey, e)
          }),
          (eg[36] = ew),
          (eg[37] = ef),
          (eg[38] = em),
          (eg[39] = ey),
          (eg[40] = x))
        : (x = eg[40]),
        eg[41] !== ek ? ((E = () => ek(null)), (eg[41] = ek), (eg[42] = E)) : (E = eg[42]),
        eg[43] !== eB ? ((T = () => eB()), (eg[43] = eB), (eg[44] = T)) : (T = eg[44]),
        eg[45] !== x || eg[46] !== E || eg[47] !== T
          ? ((z = { mutationFn: x, onSuccess: E, onSettled: T }),
            (eg[45] = x),
            (eg[46] = E),
            (eg[47] = T),
            (eg[48] = z))
          : (z = eg[48]))
      let eq = (0, o.n)(z)
      ;(eg[49] !== eB ? ((N = () => eB()), (eg[49] = eB), (eg[50] = N)) : (N = eg[50]),
        eg[51] !== eq || eg[52] !== eN
          ? ((U = () => {
              ;(eN.reset(), eq.reset())
            }),
            (eg[51] = eq),
            (eg[52] = eN),
            (eg[53] = U))
          : (U = eg[53]),
        eg[54] !== N || eg[55] !== U
          ? ((D = { mutationFn: N, onMutate: U }), (eg[54] = N), (eg[55] = U), (eg[56] = D))
          : (D = eg[56]))
      let eL = (0, o.n)(D)
      ;(eg[57] !== em
        ? (($ = () => {
            eA.current ||
              ((eA.current = !0),
              (0, q.S)(em, "work", {
                action: "open_section",
                phase: "completed",
                section: "password_managers",
                resourceType: "password_manager",
              }))
          }),
          (W = [em]),
          (eg[57] = em),
          (eg[58] = $),
          (eg[59] = W))
        : (($ = eg[58]), (W = eg[59])),
        (0, c.useEffect)($, W),
        eg[60] !== em || eg[61] !== ek
          ? ((Z = () => {
              ;(eI.current ||
                ((eI.current = !0),
                (0, q.S)(em, "work", {
                  action: "cancel_password_manager_setup",
                  phase: "completed",
                  section: "password_managers",
                  resourceType: "password_manager",
                  provider: "onepassword",
                })),
                ek(null))
            }),
            (eg[60] = em),
            (eg[61] = ek),
            (eg[62] = Z))
          : (Z = eg[62]))
      let eU = Z,
        eD = eO || eN.isError || eq.isError,
        e$ = ez?.state === "failed" || ez?.state === "reconnect_required",
        eW =
          !ej &&
          ez?.available &&
          "connecting" !== ez.state &&
          "connected" !== ez.state &&
          null != ez.enrollment_url &&
          null != ef,
        eZ = eD || !eW || !e$,
        eF = eL.isPending || eN.isPending || eq.isPending
      if (!ej && (null != ev || eS) && ((ez?.state === "connected" && !eR && !eO) || eN.isSuccess))
        return (
          e_.delete("onepassword_account_id"),
          e_.delete("onepassword_result"),
          (0, a.jsx)(v.C5, { to: { pathname: eb.pathname, search: e_.toString(), hash: eb.hash }, replace: !0 })
        )
      if (ej) {
        let e
        ;(eg[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(d.A, {
              id: "settings.chatGpt.cloudBrowser.credentials.workspaceMismatch",
              defaultMessage: "Switch back to the workspace where you started connecting 1Password",
              description:
                "Message in Cloud Browser Credential Manager after returning from 1Password consent when the active ChatGPT workspace differs from the workspace that started the connection. Connection status and actions are hidden until the user manually switches back. Multiline body text with no placeholders.",
            })),
            (eg[63] = e))
          : (e = eg[63]),
          (F = e))
      } else if (eD) {
        let e
        ;(eg[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(d.A, {
              id: "settings.chatGpt.cloudBrowser.credentials.error",
              defaultMessage: "We couldn’t confirm your connection. Refresh to try again",
              description:
                "Credential Manager error when connection status or disconnect could not be confirmed; it does not claim the operation failed",
            })),
            (eg[64] = e))
          : (e = eg[64]),
          (F = e))
      } else if (null == ez) {
        let e
        ;(eg[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(d.A, {
              id: "settings.chatGpt.cloudBrowser.credentials.loading",
              defaultMessage: "Checking connection…",
              description: "Credential Manager loading state before the backend has returned connection status",
            })),
            (eg[65] = e))
          : (e = eg[65]),
          (F = e))
      } else if ("connected" === ez.state) {
        let e
        ;(eg[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsxs)("span", {
              className: "inline-flex items-center gap-1.5",
              children: [
                (0, a.jsx)("span", { "aria-hidden": "true", className: "block size-2 rounded-full bg-green" }),
                (0, a.jsx)(d.A, {
                  id: "settings.chatGpt.cloudBrowser.credentials.connected",
                  defaultMessage: "Connected",
                  description: "Credential Manager state after the backend confirms a persisted 1Password connection",
                }),
              ],
            })),
            (eg[66] = e))
          : (e = eg[66]),
          (F = e))
      } else if (ez.available && null != ez.enrollment_url)
        if (eS && "connecting" === ez.state) {
          let e
          ;(eg[68] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.chatGpt.cloudBrowser.credentials.callbackPending",
                defaultMessage: "Setup is still pending. Refresh to check or cancel to try again",
                description:
                  "1Password settings status after returning from an unconfirmed authorization attempt. Refresh checks its status, and Cancel stops the pending attempt so the user can start setup again.",
              })),
              (eg[68] = e))
            : (e = eg[68]),
            (F = e))
        } else if (eS) {
          let e
          ;(eg[69] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.chatGpt.cloudBrowser.credentials.callbackUnconfirmed",
                defaultMessage: "We couldn’t confirm your connection. Connect again to retry",
                description:
                  "Message in Cloud Browser Credential Manager after the 1Password callback could not be validated or completed and the backend has not confirmed a connection. It asks the user to start a new connection attempt. Multiline body text with no placeholders.",
              })),
              (eg[69] = e))
            : (e = eg[69]),
            (F = e))
        } else if ("connecting" === ez.state) {
          let e
          ;(eg[70] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.chatGpt.cloudBrowser.credentials.connecting",
                defaultMessage: "Connecting… Complete authorization in your browser",
                description:
                  "Credential Manager status while 1Password enrollment is still pending; closing the browser does not complete enrollment",
              })),
              (eg[70] = e))
            : (e = eg[70]),
            (F = e))
        } else if (e$) {
          let e
          ;(eg[71] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.chatGpt.cloudBrowser.credentials.reconnect",
                defaultMessage: "Connection needs attention. Connect again to retry",
                description: "Credential Manager status after enrollment fails or authorization must be renewed",
              })),
              (eg[71] = e))
            : (e = eg[71]),
            (F = e))
        } else {
          let e
          ;(eg[72] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.chatGpt.cloudBrowser.credentials.disconnected",
                defaultMessage: "Use selected logins from 1Password when ChatGPT asks you to sign in",
                description: "Credential Manager state when no persisted 1Password connection exists",
              })),
              (eg[72] = e))
            : (e = eg[72]),
            (F = e))
        }
      else {
        let e
        ;(eg[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(d.A, {
              id: "settings.chatGpt.cloudBrowser.credentials.unavailable",
              defaultMessage: "1Password setup isn’t available in this workspace yet",
              description:
                "Explains why the connection action is unavailable when the backend has not enabled 1Password enrollment",
            })),
            (eg[67] = e))
          : (e = eg[67]),
          (F = e))
      }
      if (eN.isError) {
        let e
        ;(eg[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(d.A, {
              id: "settings.chatGpt.cloudBrowser.credentials.disconnectError",
              defaultMessage: "We couldn’t confirm whether 1Password was disconnected",
              description:
                "Error in the 1Password setup dialog after the user chose Disconnect and the app could not verify removal. The user can retry while the pairing is still listed.",
            })),
            (eg[73] = e))
          : (e = eg[73]),
          (H = e))
      } else if (eq.isError) {
        let e
        ;(eg[74] !== eq.variables
          ? ((e =
              null === eq.variables
                ? (0, a.jsx)(d.A, {
                    id: "settings.chatGpt.cloudBrowser.credentials.popupBlocked",
                    defaultMessage: "Allow popups to connect 1Password, then try again",
                    description:
                      "Error in the password-manager chooser when the browser blocks opening the 1Password consent tab",
                  })
                : (0, a.jsx)(d.A, {
                    id: "settings.chatGpt.cloudBrowser.credentials.connectError",
                    defaultMessage: "We couldn’t start the connection. Try again",
                    description:
                      "Error in the password-manager chooser when enrollment could not start or its consent tab was closed",
                  })),
            (eg[74] = eq.variables),
            (eg[75] = e))
          : (e = eg[75]),
          (H = e))
      }
      eg[76] !== eW || eg[77] !== eq || eg[78] !== ez?.state || eg[79] !== eN || eg[80] !== e$ || eg[81] !== em
        ? ((Q =
            e$ || ez?.state === "connected" || ez?.state === "connecting"
              ? (0, a.jsx)(m.$, {
                  color: "secondary",
                  type: "button",
                  size: eW ? void 0 : "toolbar",
                  disabled: eN.isPending || eq.isPending,
                  loading: eN.isPending,
                  onClick: () => {
                    eq.reset()
                    let e = (0, L.M)(em, "work", {
                      action: "disconnect_password_manager",
                      section: "password_managers",
                      resourceType: "password_manager",
                      provider: "onepassword",
                    })
                    eN.mutate(void 0, {
                      onSuccess: () => {
                        e("completed")
                      },
                      onError: () => {
                        e("failed")
                      },
                    })
                  },
                  children:
                    ez?.state === "connecting"
                      ? (0, a.jsx)(d.A, {
                          id: "settings.chatGpt.cloudBrowser.credentials.cancelConnection",
                          defaultMessage: "Cancel",
                          description: "Cancels pending 1Password authorization so setup can be started again",
                        })
                      : (0, a.jsx)(d.A, {
                          id: "settings.chatGpt.cloudBrowser.credentials.disconnect",
                          defaultMessage: "Disconnect",
                          description:
                            "Credential Manager button removing the 1Password connection, also available while enrollment is disabled",
                        }),
                })
              : null),
          (eg[76] = eW),
          (eg[77] = eq),
          (eg[78] = ez?.state),
          (eg[79] = eN),
          (eg[80] = e$),
          (eg[81] = em),
          (eg[82] = Q))
        : (Q = eg[82])
      let eH = Q,
        eQ = !eO && ez?.state === "connected",
        eX = ej || eN.isPending || eq.isPending
      ;(eg[83] !== eQ || eg[84] !== eX
        ? ((X = (0, a.jsx)(R, { onePasswordConnected: eQ, disabled: eX })), (eg[83] = eQ), (eg[84] = eX), (eg[85] = X))
        : (X = eg[85]),
        eg[86] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = (0, a.jsx)(I.R, {
              className: "size-8 rounded-md",
              src: S,
              alt: "",
              fallback: (0, a.jsx)(a.Fragment, {}),
            })),
            (V = (0, a.jsx)(d.A, {
              id: "settings.chatGpt.cloudBrowser.credentials.provider",
              defaultMessage: "1Password",
              description:
                "Product name of the supported password manager in Cloud Browser Credential Manager and its chooser. Keep the brand name 1Password unchanged.",
            })),
            (eg[86] = K),
            (eg[87] = V))
          : ((K = eg[86]), (V = eg[87])),
        eg[88] !== eF ||
        eg[89] !== eW ||
        eg[90] !== eq ||
        eg[91] !== eH ||
        eg[92] !== eC ||
        eg[93] !== eL ||
        eg[94] !== em ||
        eg[95] !== ek ||
        eg[96] !== eZ ||
        eg[97] !== ej
          ? ((J = ej
              ? void 0
              : (0, a.jsxs)("div", {
                  className: "flex flex-wrap items-center gap-2",
                  children: [
                    eW
                      ? (0, a.jsx)(m.$, {
                          color: "secondary",
                          size: "toolbar",
                          disabled: eF,
                          onClick: () => {
                            ;(eq.reset(), (eI.current = !1), ek(eC))
                          },
                          children: (0, a.jsx)(d.A, {
                            id: "settings.chatGpt.cloudBrowser.credentials.setUp",
                            defaultMessage: "Set up",
                            description: "Opens the 1Password setup explanation and consent action",
                          }),
                        })
                      : eH,
                    eZ
                      ? (0, a.jsx)(m.$, {
                          color: "secondary",
                          size: "toolbar",
                          disabled: eF,
                          loading: eL.isPending,
                          onClick: () => {
                            let e = (0, L.M)(em, "work", {
                              action: "refresh_password_manager",
                              section: "password_managers",
                              resourceType: "password_manager",
                              provider: "onepassword",
                            })
                            eL.mutate(void 0, {
                              onSuccess: () => {
                                e("completed")
                              },
                              onError: () => {
                                e("failed")
                              },
                            })
                          },
                          children: (0, a.jsx)(d.A, {
                            id: "settings.chatGpt.cloudBrowser.credentials.refresh",
                            defaultMessage: "Refresh",
                            description:
                              "Credential Manager button that fetches authoritative password-manager connection status",
                          }),
                        })
                      : null,
                  ],
                })),
            (eg[88] = eF),
            (eg[89] = eW),
            (eg[90] = eq),
            (eg[91] = eH),
            (eg[92] = eC),
            (eg[93] = eL),
            (eg[94] = em),
            (eg[95] = ek),
            (eg[96] = eZ),
            (eg[97] = ej),
            (eg[98] = J))
          : (J = eg[98]),
        eg[99] !== F || eg[100] !== J
          ? ((Y = (0, a.jsx)(G.ic, { icon: K, label: V, description: F, control: J })),
            (eg[99] = F),
            (eg[100] = J),
            (eg[101] = Y))
          : (Y = eg[101]),
        eg[102] !== X || eg[103] !== Y
          ? ((ee = (0, a.jsx)(O.X.Content, { children: (0, a.jsxs)(B.t, { children: [X, Y] }) })),
            (eg[102] = X),
            (eg[103] = Y),
            (eg[104] = ee))
          : (ee = eg[104]),
        eg[105] !== eU || eg[106] !== eM
          ? ((es = (e) => {
              !e && eM && eU()
            }),
            (eg[105] = eU),
            (eg[106] = eM),
            (eg[107] = es))
          : (es = eg[107]))
      let eK = (e) => {
        if ((e.preventDefault(), eW && !eF)) {
          let e
          eN.reset()
          let s = (0, L.M)(em, "work", {
            action: "connect_password_manager",
            section: "password_managers",
            resourceType: "password_manager",
            provider: "onepassword",
          })
          eS &&
            (e_.delete("onepassword_result"),
            ex({ pathname: eb.pathname, search: e_.toString(), hash: eb.hash }, { replace: !0 }))
          ;(null != e && (e.opener = null),
            eq.mutate(e, {
              onSuccess: () => {
                s("completed")
              },
              onError: () => {
                s("failed")
              },
            }))
        }
      }
      ;(eg[108] === Symbol.for("react.memo_cache_sentinel")
        ? ((et = (0, a.jsx)(I.R, {
            className: "size-full rounded",
            src: S,
            alt: "",
            fallback: (0, a.jsx)(a.Fragment, {}),
          })),
          (eg[108] = et))
        : (et = eg[108]),
        eg[109] === Symbol.for("react.memo_cache_sentinel")
          ? ((ea = (0, a.jsx)(M.L3, {
              children: (0, a.jsx)(d.A, {
                id: "settings.chatGpt.cloudBrowser.credentials.choose",
                defaultMessage: "Set up 1Password?",
                description: "Title of the 1Password setup consent dialog",
              }),
            })),
            (eg[109] = ea))
          : (ea = eg[109]),
        eg[110] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, a.jsx)(A.OO, {
              children: (0, a.jsx)(A.c7, {
                icon: et,
                title: ea,
                subtitle: (0, a.jsx)(M.rr, {
                  children: (0, a.jsx)(d.A, {
                    id: "settings.chatGpt.cloudBrowser.credentials.setupDescription",
                    defaultMessage:
                      "Use selected logins from 1Password when ChatGPT asks you to sign in. You choose which login to share.",
                    description: "Explains 1Password setup before the user opens the provider authorization flow",
                  }),
                }),
              }),
            })),
            (eg[110] = en))
          : (en = eg[110]),
        eg[111] !== H
          ? ((er =
              null != H
                ? (0, a.jsx)(A.OO, {
                    children: (0, a.jsx)(g.l, { type: "error", variant: "callout", role: "alert", content: H }),
                  })
                : null),
            (eg[111] = H),
            (eg[112] = er))
          : (er = eg[112]),
        eg[113] === Symbol.for("react.memo_cache_sentinel")
          ? ((eo = (0, a.jsx)(d.A, {
              id: "settings.chatGpt.cloudBrowser.credentials.cancelSetup",
              defaultMessage: "Cancel",
              description: "Closes 1Password setup without starting authorization",
            })),
            (eg[113] = eo))
          : (eo = eg[113]),
        eg[114] !== eU
          ? ((ei = (0, a.jsx)(m.$, { type: "button", color: "secondary", onClick: eU, children: eo })),
            (eg[114] = eU),
            (eg[115] = ei))
          : (ei = eg[115]))
      let eV = eW ? eH : null,
        eJ = !eW || eF
      return (
        eg[116] === Symbol.for("react.memo_cache_sentinel")
          ? ((ec = (0, a.jsx)(d.A, {
              id: "settings.chatGpt.cloudBrowser.credentials.startSetup",
              defaultMessage: "Set up 1Password",
              description: "Starts authorization with 1Password after the user reviews setup",
            })),
            (eg[116] = ec))
          : (ec = eg[116]),
        eg[117] !== eq.isPending || eg[118] !== eJ
          ? ((el = (0, a.jsx)(m.$, {
              color: "primary",
              disabled: eJ,
              loading: eq.isPending,
              type: "submit",
              children: ec,
            })),
            (eg[117] = eq.isPending),
            (eg[118] = eJ),
            (eg[119] = el))
          : (el = eg[119]),
        eg[120] !== ei || eg[121] !== eV || eg[122] !== el
          ? ((ed = (0, a.jsxs)(A.Es, { children: [ei, eV, el] })),
            (eg[120] = ei),
            (eg[121] = eV),
            (eg[122] = el),
            (eg[123] = ed))
          : (ed = eg[123]),
        eg[124] !== eK || eg[125] !== er || eg[126] !== ed
          ? ((eu = (0, a.jsxs)(A.R4, { as: "form", onSubmit: eK, children: [en, er, ed] })),
            (eg[124] = eK),
            (eg[125] = er),
            (eg[126] = ed),
            (eg[127] = eu))
          : (eu = eg[127]),
        eg[128] !== eM || eg[129] !== es || eg[130] !== eu
          ? ((ep = (0, a.jsx)(M.lG, { open: eM, onOpenChange: es, size: "compact", children: eu })),
            (eg[128] = eM),
            (eg[129] = es),
            (eg[130] = eu),
            (eg[131] = ep))
          : (ep = eg[131]),
        eg[132] !== ee || eg[133] !== ep
          ? ((eh = (0, a.jsxs)(O.X, { children: [ee, ep] })), (eg[132] = ee), (eg[133] = ep), (eg[134] = eh))
          : (eh = eg[134]),
        eh
      )
    }
    let $ = (0, t("nkTT").a)({
      name: "globe-regular-32",
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
      body: '<path d="M16 2.75C23.3178 2.75 29.25 8.68223 29.25 16C29.25 23.3178 23.3178 29.25 16 29.25C8.68223 29.25 2.75 23.3178 2.75 16C2.75 8.68223 8.68223 2.75 16 2.75ZM11.9473 17.25C12.0759 19.9164 12.6093 22.2633 13.3711 23.9775C13.8112 24.9678 14.3033 25.6918 14.7861 26.1514C15.2623 26.6045 15.6704 26.7499 16 26.75C16.3296 26.7499 16.7385 26.6047 17.2148 26.1514C17.6976 25.6918 18.1889 24.9676 18.6289 23.9775C19.3908 22.2633 19.9249 19.9164 20.0537 17.25H11.9473ZM5.3252 17.25C5.76181 21.0192 8.14595 24.1922 11.4473 25.7383C11.3211 25.4976 11.2006 25.249 11.0869 24.9932C10.1639 22.9164 9.57454 20.2115 9.44434 17.25H5.3252ZM22.5557 17.25C22.4255 20.2115 21.837 22.9164 20.9141 24.9932C20.8002 25.2493 20.6781 25.4974 20.5518 25.7383C23.8535 24.1924 26.2382 21.0195 26.6748 17.25H22.5557ZM11.4473 6.26074C8.14575 7.80673 5.76182 10.9806 5.3252 14.75H9.44434C9.57454 11.7885 10.1639 9.08358 11.0869 7.00684C11.2007 6.75073 11.3209 6.50164 11.4473 6.26074ZM16 5.25C15.6704 5.2501 15.2623 5.39548 14.7861 5.84863C14.3033 6.30815 13.8112 7.03222 13.3711 8.02246C12.6093 9.73665 12.0759 12.0836 11.9473 14.75H20.0537C19.9249 12.0836 19.3908 9.73666 18.6289 8.02246C18.1889 7.03242 17.6976 6.30817 17.2148 5.84863C16.7385 5.39534 16.3296 5.25007 16 5.25ZM20.5518 6.26074C20.6782 6.50186 20.8001 6.75048 20.9141 7.00684C21.837 9.08356 22.4255 11.7885 22.5557 14.75H26.6748C26.2381 10.9803 23.8537 7.80659 20.5518 6.26074Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var W = t("Qgfj"),
      Z = t("HOLv"),
      F = t("vwBs")
    function H(e) {
      let s,
        t,
        r,
        o,
        i,
        c,
        l,
        u,
        p,
        h,
        g,
        w,
        f,
        y,
        b,
        x,
        _,
        v = (0, n.c)(33),
        { password: j, onClose: S, onRemove: C } = e
      ;(v[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = { "aria-describedby": void 0 }), (v[0] = s))
        : (s = v[0]),
        v[1] !== S
          ? ((t = (e) => {
              e || S()
            }),
            (v[1] = S),
            (v[2] = t))
          : (t = v[2]),
        v[3] !== j.origin ? ((r = new URL(j.origin)), (v[3] = j.origin), (v[4] = r)) : (r = v[4]),
        v[5] !== r.hostname
          ? ((o = (0, a.jsx)(M.L3, { children: r.hostname })), (v[5] = r.hostname), (v[6] = o))
          : (o = v[6]),
        v[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(Z.I, { asset: $ })), (v[7] = i))
          : (i = v[7]),
        v[8] !== o
          ? ((c = (0, a.jsx)(A.OO, { children: (0, a.jsx)(A.c7, { title: o, icon: i }) })), (v[8] = o), (v[9] = c))
          : (c = v[9]),
        v[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(d.A, {
              id: "restricted.passwords.account",
              defaultMessage: "Account",
              description: "Label for the masked account identifier in a saved password's details",
            })),
            (v[10] = l))
          : (l = v[10]),
        v[11] !== j.account_label
          ? ((u = (0, a.jsx)(G.ic, {
              label: l,
              control: (0, a.jsx)("span", { className: "select-text", children: j.account_label }),
              controlSizing: "content",
            })),
            (v[11] = j.account_label),
            (v[12] = u))
          : (u = v[12]),
        v[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(d.A, {
              id: "restricted.passwords.website",
              defaultMessage: "Website",
              description: "Label for a saved password's website origin",
            })),
            (v[13] = p))
          : (p = v[13]),
        v[14] !== j.origin
          ? ((h = (0, a.jsx)(G.ic, {
              label: p,
              control: (0, a.jsx)("span", { className: "break-all select-text", children: j.origin }),
              controlSizing: "content",
            })),
            (v[14] = j.origin),
            (v[15] = h))
          : (h = v[15]),
        v[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)(d.A, {
              id: "restricted.passwords.savedAt",
              defaultMessage: "Saved",
              description: "When this website password was first saved, not the time it was last used",
            })),
            (v[16] = g))
          : (g = v[16]))
      let P = 1e3 * j.created_at
      return (
        v[17] !== P
          ? ((w = (0, a.jsx)(G.ic, {
              label: g,
              control: (0, a.jsx)(W.XU, { value: P, year: "numeric", month: "short", day: "numeric" }),
              controlSizing: "content",
            })),
            (v[17] = P),
            (v[18] = w))
          : (w = v[18]),
        v[19] !== h || v[20] !== w || v[21] !== u
          ? ((f = (0, a.jsx)(A.OO, { children: (0, a.jsxs)(B.t, { children: [u, h, w] }) })),
            (v[19] = h),
            (v[20] = w),
            (v[21] = u),
            (v[22] = f))
          : (f = v[22]),
        v[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(d.A, {
              id: "restricted.passwords.delete",
              defaultMessage: "Delete password",
              description: "Opens confirmation before deleting a saved website password",
            })),
            (v[23] = y))
          : (y = v[23]),
        v[24] !== C
          ? ((b = (0, a.jsx)(A.OO, {
              children: (0, a.jsx)(A.Es, {
                children: (0, a.jsx)(m.$, { color: "danger", size: "toolbar", onClick: C, children: y }),
              }),
            })),
            (v[24] = C),
            (v[25] = b))
          : (b = v[25]),
        v[26] !== f || v[27] !== b || v[28] !== c
          ? ((x = (0, a.jsxs)(A.R4, { "data-dd-privacy": "mask", children: [c, f, b] })),
            (v[26] = f),
            (v[27] = b),
            (v[28] = c),
            (v[29] = x))
          : (x = v[29]),
        v[30] !== x || v[31] !== t
          ? ((_ = (0, a.jsx)(M.lG, { open: !0, size: "compact", contentProps: s, onOpenChange: t, children: x })),
            (v[30] = x),
            (v[31] = t),
            (v[32] = _))
          : (_ = v[32]),
        _
      )
    }
    function Q(e) {
      let s,
        t,
        r,
        o,
        i,
        c,
        l = (0, n.c)(12),
        { password: u, isPending: p, onClose: h, onConfirm: g } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(d.A, {
              id: "restricted.passwords.confirmTitle",
              defaultMessage: "Delete this password?",
              description: "Confirmation title before permanently deleting a saved website password",
            })),
            (l[0] = s))
          : (s = l[0]),
        l[1] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)("br", {})), (l[1] = t)) : (t = l[1]),
        l[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)("br", {})),
            (o = (0, a.jsx)(d.A, {
              id: "restricted.passwords.confirmDescription",
              defaultMessage: "This won’t sign you out of the website",
              description: "Deleting a saved password does not end an existing website session",
            })),
            (l[2] = r),
            (l[3] = o))
          : ((r = l[2]), (o = l[3])),
        l[4] !== u.account_label || l[5] !== u.origin
          ? ((i = (0, a.jsxs)("span", {
              className: "break-all",
              "data-dd-privacy": "mask",
              children: [u.origin, t, u.account_label, r, o],
            })),
            (l[4] = u.account_label),
            (l[5] = u.origin),
            (l[6] = i))
          : (i = l[6]),
        l[7] !== p || l[8] !== h || l[9] !== g || l[10] !== i
          ? ((c = (0, a.jsx)(F.J, { title: s, description: i, pending: p, onClose: h, onConfirm: g })),
            (l[7] = p),
            (l[8] = h),
            (l[9] = g),
            (l[10] = i),
            (l[11] = c))
          : (c = l[11]),
        c
      )
    }
    var X = t("uxIz"),
      K = t("WCbN")
    let V = j.object({
      items: j.array(
        j.object({ credential_id: j.string(), origin: j.url(), account_label: j.string(), created_at: j.number() }),
      ),
      next_cursor: j.string().nullish(),
    })
    var J = t("Y5Pg"),
      Y = t("GaA7")
    function ee(e) {
      let s,
        t,
        r,
        o,
        i,
        c,
        l,
        u,
        p,
        h,
        g,
        w,
        f,
        y = (0, n.c)(30),
        { pending: b, canceling: x, error: _, onConfirm: v, onClose: j } = e
      ;(y[0] !== x || y[1] !== j
        ? ((s = (e) => {
            e || x || j()
          }),
          (y[0] = x),
          (y[1] = j),
          (y[2] = s))
        : (s = y[2]),
        y[3] !== x || y[4] !== v || y[5] !== b
          ? ((t = (e) => {
              ;(e.preventDefault(), b || x || v())
            }),
            (y[3] = x),
            (y[4] = v),
            (y[5] = b),
            (y[6] = t))
          : (t = y[6]),
        y[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(M.L3, {
              children: (0, a.jsx)(d.A, {
                id: "settings.passwordSync.consent.title",
                defaultMessage: "Sync your saved passwords?",
                description:
                  "Title asking for consent before linking this device's browser passwords to the signed-in ChatGPT account",
              }),
            })),
            (y[7] = r))
          : (r = y[7]),
        y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(A.OO, {
              children: (0, a.jsx)(A.c7, {
                title: r,
                subtitle: (0, a.jsx)(M.rr, {
                  children: (0, a.jsx)(d.A, {
                    id: "settings.passwordSync.consent.description",
                    defaultMessage:
                      "Save passwords from this browser to your ChatGPT account and make them available on your other connected devices. Password changes and deletions will sync too. You’ll confirm your account before syncing starts.",
                    description:
                      "Explains two-way password synchronization before the separate account and device authorization flow; includes updates and deletions",
                  }),
                }),
              }),
            })),
            (y[8] = o))
          : (o = y[8]),
        y[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(A.OO, {
              children: (0, a.jsx)(d.A, {
                id: "settings.passwordSync.consent.disable",
                defaultMessage:
                  "Turning sync off stops transfers. It does not delete passwords already saved on this device or in your account.",
                description: "Explains that disabling password sync preserves existing local and cloud passwords",
              }),
            })),
            (y[9] = i))
          : (i = y[9]),
        y[10] !== _
          ? ((c = null != _ ? (0, a.jsx)(A.OO, { children: _ }) : null), (y[10] = _), (y[11] = c))
          : (c = y[11]),
        y[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(d.A, {
              id: "settings.passwordSync.consent.cancel",
              defaultMessage: "Cancel",
              description: "Closes the password sync consent dialog without enabling sync",
            })),
            (y[12] = l))
          : (l = y[12]),
        y[13] !== x || y[14] !== j
          ? ((u = (0, a.jsx)(m.$, { type: "button", color: "secondary", disabled: x, onClick: j, children: l })),
            (y[13] = x),
            (y[14] = j),
            (y[15] = u))
          : (u = y[15]))
      let S = b || x
      return (
        y[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(d.A, {
              id: "settings.passwordSync.consent.continue",
              defaultMessage: "Continue",
              description: "Continues to account and device authorization after accepting password sync",
            })),
            (y[16] = p))
          : (p = y[16]),
        y[17] !== b || y[18] !== S
          ? ((h = (0, a.jsx)(m.$, { type: "submit", color: "primary", disabled: S, loading: b, children: p })),
            (y[17] = b),
            (y[18] = S),
            (y[19] = h))
          : (h = y[19]),
        y[20] !== h || y[21] !== u
          ? ((g = (0, a.jsxs)(A.Es, { children: [u, h] })), (y[20] = h), (y[21] = u), (y[22] = g))
          : (g = y[22]),
        y[23] !== g || y[24] !== t || y[25] !== c
          ? ((w = (0, a.jsxs)(A.R4, { as: "form", onSubmit: t, children: [o, i, c, g] })),
            (y[23] = g),
            (y[24] = t),
            (y[25] = c),
            (y[26] = w))
          : (w = y[26]),
        y[27] !== s || y[28] !== w
          ? ((f = (0, a.jsx)(M.lG, { open: !0, size: "compact", onOpenChange: s, children: w })),
            (y[27] = s),
            (y[28] = w),
            (y[29] = f))
          : (f = y[29]),
        f
      )
    }
    var es = t("SRbQ"),
      et = t("Fkn8")
    let ea = (0, i.SZ)(
      b.u,
      () => ({ state: "loading" }),
      ({ set: e }) => {
        let s = { stack: [], error: void 0, hasError: !1 }
        try {
          let t,
            a = Y.appServices.passwordSync
          if (null == a) return void e({ state: "unavailable" })
          let n = !1,
            r = (0, es.mS)(
              s,
              new et.AX(async (s) => {
                n || e({ state: "ready", status: s })
              }),
              !1,
            )
          return (
            a.subscribe(r).then(
              (e) => {
                n ? e[Symbol.dispose]() : (t = e)
              },
              () => {
                n || e({ state: "error" })
              },
            ),
            () => {
              ;((n = !0), t?.[Symbol.dispose]())
            }
          )
        } catch (e) {
          ;((s.error = e), (s.hasError = !0))
        } finally {
          ;(0, es.hk)(s)
        }
      },
    )
    function en(e) {
      let s = (0, n.c)(11),
        { status: t } = e
      switch (t.phase) {
        case "disabled": {
          let e
          return (
            s[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(d.A, {
                  id: "settings.passwordSync.disabled",
                  defaultMessage: "Sync this browser’s passwords with your ChatGPT account",
                  description:
                    "Explains the optional synchronization of native browser passwords with the user's ChatGPT account",
                })),
                (s[0] = e))
              : (e = s[0]),
            e
          )
        }
        case "syncing": {
          let e
          return (
            s[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(d.A, {
                  id: "settings.passwordSync.syncing",
                  defaultMessage: "Syncing passwords…",
                  description: "Status while the native host is transferring password changes",
                })),
                (s[1] = e))
              : (e = s[1]),
            e
          )
        }
        case "idle": {
          let e
          return (
            s[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(d.A, {
                  id: "settings.passwordSync.on",
                  defaultMessage: "Password sync is on",
                  description:
                    "Status when password sync is enabled and no transfer is currently running; does not promise every password has synced",
                })),
                (s[2] = e))
              : (e = s[2]),
            e
          )
        }
        case "error": {
          let e
          return (
            s[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(d.A, {
                  id: "settings.passwordSync.error",
                  defaultMessage: "Password sync needs attention. Try again to check for changes",
                  description:
                    "Recoverable sync error without exposing password data or claiming a failed transfer did not commit",
                })),
                (s[3] = e))
              : (e = s[3]),
            e
          )
        }
        case "blocked":
          switch (t.blocker) {
            case "signed-out": {
              let e
              return (
                s[4] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(d.A, {
                      id: "settings.passwordSync.signedOut",
                      defaultMessage: "Sign in to manage password sync",
                      description: "Password sync is paused because the user is signed out",
                    })),
                    (s[4] = e))
                  : (e = s[4]),
                e
              )
            }
            case "profile-owned-by-another-account": {
              let e
              return (
                s[5] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(d.A, {
                      id: "settings.passwordSync.otherAccount",
                      defaultMessage:
                        "These browser passwords are linked to a different account. Sign in to that account to manage sync",
                      description:
                        "Prevents native passwords owned by one sync account from being uploaded after switching to another account",
                    })),
                    (s[5] = e))
                  : (e = s[5]),
                e
              )
            }
            case "verification-required": {
              let e
              return (
                s[6] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(d.A, {
                      id: "settings.passwordSync.verify",
                      defaultMessage: "Verify this device to continue syncing passwords",
                      description: "Sync is paused until the user authorizes the current device for password transfer",
                    })),
                    (s[6] = e))
                  : (e = s[6]),
                e
              )
            }
            case "secure-storage-unavailable": {
              let e
              return (
                s[7] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(d.A, {
                      id: "settings.passwordSync.secureStorage",
                      defaultMessage: "Secure storage is unavailable on this device",
                      description:
                        "The operating system's protected storage is unavailable, so password sync cannot safely store its state",
                    })),
                    (s[7] = e))
                  : (e = s[7]),
                e
              )
            }
            case "browser-disabled": {
              let e
              return (
                s[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(d.A, {
                      id: "settings.passwordSync.browserDisabled",
                      defaultMessage: "Enable the browser to use password sync",
                      description: "Password sync is unavailable while the in-app browser is disabled",
                    })),
                    (s[8] = e))
                  : (e = s[8]),
                e
              )
            }
            case "account-ineligible": {
              let e
              return (
                s[9] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(d.A, {
                      id: "settings.passwordSync.ineligible",
                      defaultMessage: "Password sync isn’t available for this account",
                      description: "The selected account is not eligible for native password synchronization",
                    })),
                    (s[9] = e))
                  : (e = s[9]),
                e
              )
            }
            case "backend-disabled":
            case "rollout-disabled": {
              let e
              return (
                s[10] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(d.A, {
                      id: "settings.passwordSync.unavailable",
                      defaultMessage: "Password sync is currently unavailable",
                      description: "Password transfer is disabled by the service or the feature rollout",
                    })),
                    (s[10] = e))
                  : (e = s[10]),
                e
              )
            }
          }
      }
    }
    function er() {
      let e,
        s = (0, n.c)(2),
        t = (0, J.N)()
      return (s[0] !== t ? ((e = t ? (0, a.jsx)(eo, {}) : null), (s[0] = t), (s[1] = e)) : (e = s[1]), e)
    }
    function eo() {
      let e,
        s,
        t = (0, n.c)(5),
        r = (0, i.Ul)(ea)
      if ("unavailable" === r.state) return null
      if ("ready" === r.state) {
        let e
        return (
          t[0] !== r.status
            ? ((e = (0, a.jsx)(ei, { status: r.status }, r.status.scopeId)), (t[0] = r.status), (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(d.A, {
              id: "settings.passwordSync.title",
              defaultMessage: "Password sync",
              description: "Setting for syncing saved native browser passwords with the user's ChatGPT account",
            })),
            (t[2] = e))
          : (e = t[2]),
        t[3] !== r.state
          ? ((s = (0, a.jsx)(O.X, {
              children: (0, a.jsx)(O.X.Content, {
                children: (0, a.jsx)(B.t, {
                  children: (0, a.jsx)(G.ic, {
                    label: e,
                    description:
                      "error" === r.state
                        ? (0, a.jsx)(d.A, {
                            id: "settings.passwordSync.connectionError",
                            defaultMessage: "Couldn’t load password sync. Reopen Settings to try again",
                            description:
                              "The renderer could not subscribe to the native sync service; reopening the panel establishes a new subscription",
                          })
                        : (0, a.jsx)(d.A, {
                            id: "settings.passwordSync.loading",
                            defaultMessage: "Checking password sync…",
                            description:
                              "Loading state before the native host reports authoritative password sync status",
                          }),
                    control: null,
                  }),
                }),
              }),
            })),
            (t[3] = r.state),
            (t[4] = s))
          : (s = t[4]),
        s
      )
    }
    function ei(e) {
      let s,
        t,
        r,
        i,
        l,
        u,
        p,
        h,
        g,
        w,
        f,
        y,
        b,
        x,
        _,
        v,
        j = (0, n.c)(54),
        { status: S } = e,
        [C, P] = (0, c.useState)(!1)
      j[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            mutationFn: el,
            retry: !1,
            onSuccess: (e) => {
              e.ok && P(!1)
            },
          }),
          (j[0] = s))
        : (s = j[0])
      let k = (0, o.n)(s)
      j[1] !== k
        ? ((t = {
            mutationFn: ec,
            retry: !1,
            onSuccess: (e) => {
              e.ok && (k.reset(), P(!1))
            },
          }),
          (j[1] = k),
          (j[2] = t))
        : (t = j[2])
      let M = (0, o.n)(t),
        A = k.isPending || M.isPending,
        I = k.isPending && "enable" === k.variables.action,
        E =
          null != S.scopeId &&
          !S.enabled &&
          ("disabled" === S.phase || ("blocked" === S.phase && "verification-required" === S.blocker)),
        T =
          null != S.scopeId &&
          S.enabled &&
          ("error" === S.phase || ("blocked" === S.phase && "verification-required" === S.blocker))
      j[3] !== k || j[4] !== A || j[5] !== S.scopeId
        ? ((r = (e) => {
            null == S.scopeId || A || k.mutate({ scopeId: S.scopeId, action: e })
          }),
          (j[3] = k),
          (j[4] = A),
          (j[5] = S.scopeId),
          (j[6] = r))
        : (r = j[6])
      let z = r,
        R = k.isError || k.data?.ok === !1 || M.isError || M.data?.ok === !1,
        N = C && (E || I)
      j[7] !== M || j[8] !== I || j[9] !== S.scopeId
        ? ((i = () => {
            I && null != S.scopeId ? M.isPending || M.mutate(S.scopeId) : P(!1)
          }),
          (j[7] = M),
          (j[8] = I),
          (j[9] = S.scopeId),
          (j[10] = i))
        : (i = j[10])
      let q = i
      return (
        j[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(d.A, {
              id: "settings.passwordSync.title",
              defaultMessage: "Password sync",
              description: "Setting for syncing saved native browser passwords with the user's ChatGPT account",
            })),
            (j[11] = l))
          : (l = j[11]),
        j[12] !== S ? ((u = (0, a.jsx)(en, { status: S })), (j[12] = S), (j[13] = u)) : (u = j[13]),
        j[14] !== E || j[15] !== M || j[16] !== k || j[17] !== A
          ? ((p = E
              ? (0, a.jsx)(m.$, {
                  color: "secondary",
                  size: "toolbar",
                  disabled: A,
                  "aria-haspopup": "dialog",
                  onClick: () => {
                    ;(k.reset(), M.reset(), P(!0))
                  },
                  children: (0, a.jsx)(d.A, {
                    id: "settings.passwordSync.enable",
                    defaultMessage: "Turn on sync",
                    description: "Opens consent before enabling password synchronization",
                  }),
                })
              : null),
            (j[14] = E),
            (j[15] = M),
            (j[16] = k),
            (j[17] = A),
            (j[18] = p))
          : (p = j[18]),
        j[19] !== T || j[20] !== A || j[21] !== z
          ? ((h = T
              ? (0, a.jsx)(m.$, {
                  color: "secondary",
                  size: "toolbar",
                  disabled: A,
                  onClick: () => z("retry"),
                  children: (0, a.jsx)(d.A, {
                    id: "settings.passwordSync.retry",
                    defaultMessage: "Try again",
                    description: "Retries password sync, including device verification when it is required",
                  }),
                })
              : null),
            (j[19] = T),
            (j[20] = A),
            (j[21] = z),
            (j[22] = h))
          : (h = j[22]),
        j[23] !== M || j[24] !== S.enabled || j[25] !== S.scopeId
          ? ((g = S.enabled
              ? (0, a.jsx)(m.$, {
                  color: "secondary",
                  size: "toolbar",
                  disabled: M.isPending || null == S.scopeId,
                  onClick: () => {
                    null != S.scopeId && M.mutate(S.scopeId)
                  },
                  children: (0, a.jsx)(d.A, {
                    id: "settings.passwordSync.disable",
                    defaultMessage: "Turn off sync",
                    description: "Stops password transfer while preserving existing local and cloud passwords",
                  }),
                })
              : null),
            (j[23] = M),
            (j[24] = S.enabled),
            (j[25] = S.scopeId),
            (j[26] = g))
          : (g = j[26]),
        j[27] !== p || j[28] !== h || j[29] !== g
          ? ((w = (0, a.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [p, h, g] })),
            (j[27] = p),
            (j[28] = h),
            (j[29] = g),
            (j[30] = w))
          : (w = j[30]),
        j[31] !== w || j[32] !== u
          ? ((f = (0, a.jsx)(B.t, { children: (0, a.jsx)(G.ic, { label: l, description: u, control: w }) })),
            (j[31] = w),
            (j[32] = u),
            (j[33] = f))
          : (f = j[33]),
        j[34] !== R || j[35] !== N
          ? ((y = R && !N ? (0, a.jsx)(ed, {}) : null), (j[34] = R), (j[35] = N), (j[36] = y))
          : (y = j[36]),
        j[37] !== S.conflictCount || j[38] !== S.scopeId
          ? ((b =
              S.conflictCount > 0 && null != S.scopeId
                ? (0, a.jsx)(B.t, {
                    children: (0, a.jsx)(G.ic, {
                      label: (0, a.jsx)(d.A, {
                        id: "settings.passwordSync.conflicts",
                        defaultMessage:
                          "{count, plural, one {# password has conflicting changes and was left as-is} other {# passwords have conflicting changes and were left as-is}}",
                        description:
                          "Reports passwords preserved because local and cloud changes conflict, without exposing their contents",
                        values: { count: S.conflictCount },
                      }),
                      control: null,
                    }),
                  })
                : null),
            (j[37] = S.conflictCount),
            (j[38] = S.scopeId),
            (j[39] = b))
          : (b = j[39]),
        j[40] !== f || j[41] !== y || j[42] !== b
          ? ((x = (0, a.jsxs)(O.X.Content, { children: [f, y, b] })),
            (j[40] = f),
            (j[41] = y),
            (j[42] = b),
            (j[43] = x))
          : (x = j[43]),
        j[44] !== R || j[45] !== M || j[46] !== q || j[47] !== A || j[48] !== z || j[49] !== N
          ? ((_ = N
              ? (0, a.jsx)(ee, {
                  pending: A,
                  canceling: M.isPending,
                  error: R ? (0, a.jsx)(ed, {}) : null,
                  onConfirm: () => z("enable"),
                  onClose: q,
                })
              : null),
            (j[44] = R),
            (j[45] = M),
            (j[46] = q),
            (j[47] = A),
            (j[48] = z),
            (j[49] = N),
            (j[50] = _))
          : (_ = j[50]),
        j[51] !== x || j[52] !== _
          ? ((v = (0, a.jsxs)(O.X, { children: [x, _] })), (j[51] = x), (j[52] = _), (j[53] = v))
          : (v = j[53]),
        v
      )
    }
    async function ec(e) {
      let s = Y.appServices.passwordSync
      if (null == s) throw Error("Password sync is unavailable")
      return s.setEnabled({ scopeId: e, enabled: !1 })
    }
    async function el(e) {
      let { scopeId: s, action: t } = e,
        a = Y.appServices.passwordSync
      if (null == a) throw Error("Password sync is unavailable")
      return "retry" === t ? a.retry({ scopeId: s }) : a.setEnabled({ scopeId: s, enabled: !0 })
    }
    function ed() {
      let e,
        s = (0, n.c)(1)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(g.l, {
              type: "error",
              variant: "callout",
              role: "alert",
              content: (0, a.jsx)(d.A, {
                id: "settings.passwordSync.actionFailed",
                defaultMessage: "We couldn’t confirm the change. Check your sync status before trying again",
                description:
                  "A password sync action was rejected or its result could not be confirmed; does not claim that an uncertain action did not happen",
              }),
            })),
            (s[0] = e))
          : (e = s[0]),
        e
      )
    }
    function eu(e) {
      let s,
        t,
        r = (0, n.c)(9),
        o = (0, i.Ul)(h.Sk),
        c = (0, p.As)(),
        l = (0, N.Zj)(X.$),
        d = (0, i.Ul)(u.f4)
      if (!(0, J.N)() && (null == o || c.isLoading || null == c.userId || !d)) {
        let e
        return (
          r[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(y.y, {})), (r[0] = e)) : (e = r[0]),
          e
        )
      }
      r[1] !== o || r[2] !== c.userId
        ? ((s = JSON.stringify([o, c.userId])), (r[1] = o), (r[2] = c.userId), (r[3] = s))
        : (s = r[3])
      let g = c.isLoading ? null : o,
        m = l && d
      return (
        r[4] !== c.userId || r[5] !== s || r[6] !== g || r[7] !== m
          ? ((t = (0, a.jsx)(ep, { accountId: g, userId: c.userId, cloudPasswordsEnabled: m }, s)),
            (r[4] = c.userId),
            (r[5] = s),
            (r[6] = g),
            (r[7] = m),
            (r[8] = t))
          : (t = r[8]),
        t
      )
    }
    function ep(e) {
      let s,
        t,
        r,
        o,
        u,
        p,
        h,
        g,
        m = (0, n.c)(24),
        { accountId: w, userId: _, cloudPasswordsEnabled: v } = e,
        j = void 0 === v || v,
        S = (0, i.gh)(b.u),
        C = (0, l.A)(),
        [P, k] = (0, c.useState)(""),
        M = (0, c.useRef)(!1),
        A = j && null != w && null != _
      m[0] !== S
        ? ((s = (e) => {
            let s = "" !== e.trim()
            ;(s !== M.current &&
              ((M.current = s),
              (0, q.S)(S, "work", {
                action: "search_saved_credentials",
                phase: "completed",
                section: "saved_credentials",
                resourceType: "saved_credential",
                hasQuery: s,
              })),
              k(e))
          }),
          (m[0] = S),
          (m[1] = s))
        : (s = m[1])
      let I = s
      return (
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(d.A, { ...X.N.title })), (m[2] = t))
          : (t = m[2]),
        m[3] !== A || m[4] !== C || m[5] !== P || m[6] !== I
          ? ((r = A
              ? (0, a.jsx)(f.s, {
                  id: "saved-password-search",
                  autoFocus: !1,
                  inputRole: "searchbox",
                  label: C.formatMessage(X.N.search),
                  placeholder: C.formatMessage(X.N.search),
                  searchQuery: P,
                  onSearchQueryChange: I,
                })
              : null),
            (m[3] = A),
            (m[4] = C),
            (m[5] = P),
            (m[6] = I),
            (m[7] = r))
          : (r = m[7]),
        m[8] !== A ? ((o = A ? (0, a.jsx)(U, {}) : null), (m[8] = A), (m[9] = o)) : (o = m[9]),
        m[10] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, a.jsx)(er, {})), (m[10] = u)) : (u = m[10]),
        m[11] !== w || m[12] !== A || m[13] !== P || m[14] !== _
          ? ((p = A ? (0, a.jsx)(eh, { accountId: w, userId: _, search: P }) : null),
            (m[11] = w),
            (m[12] = A),
            (m[13] = P),
            (m[14] = _),
            (m[15] = p))
          : (p = m[15]),
        m[16] !== A || m[17] !== j
          ? ((h = j && !A ? (0, a.jsx)(y.y, {}) : null), (m[16] = A), (m[17] = j), (m[18] = h))
          : (h = m[18]),
        m[19] !== r || m[20] !== o || m[21] !== p || m[22] !== h
          ? ((g = (0, a.jsxs)(x.P, { className: "select-none", title: t, stickyControls: r, children: [o, u, p, h] })),
            (m[19] = r),
            (m[20] = o),
            (m[21] = p),
            (m[22] = h),
            (m[23] = g))
          : (g = m[23]),
        g
      )
    }
    function eh(e) {
      let s,
        t,
        u,
        p,
        h,
        f,
        x,
        _,
        v,
        S,
        C,
        P,
        M,
        A,
        I,
        E,
        T,
        z,
        R,
        N,
        U = (0, n.c)(64),
        { accountId: D, userId: $, search: W } = e,
        Z = (0, i.gh)(b.u),
        F = (0, l.A)(),
        X = (0, c.useRef)(!1),
        [J, Y] = (0, c.useState)(),
        [ee, es] = (0, c.useState)()
      if (U[0] !== D || U[1] !== $)
        ((s = (0, K.L)({
          queryKey: ["saved-credentials", $, D],
          queryFn: async ({ pageParam: e, signal: s }) =>
            V.parse(
              await k.Request.safeGet("/saved-credentials", {
                additionalHeaders: { "ChatGPT-Account-ID": D },
                expectedErrorStatuses: [403, 404],
                expectedIdentity: { accountId: D, userId: $ },
                parameters: { query: { cursor: e } },
                retry: !1,
                signal: s,
              }),
            ),
          initialPageParam: void 0,
          getNextPageParam: (e) => e.next_cursor ?? void 0,
          staleTime: 0,
          gcTime: 0,
          retry: !1,
        })),
          (U[0] = D),
          (U[1] = $),
          (U[2] = s))
      else s = U[2]
      let {
        data: et,
        isPending: ea,
        isFetching: en,
        isError: er,
        hasNextPage: eo,
        fetchNextPage: ei,
        refetch: ec,
      } = (0, r.q)(s)
      ;(U[3] !== D || U[4] !== $
        ? ((t = (e) =>
            (async function (e, s, t) {
              j.object({ status: j.literal("deleted") }).parse(
                await k.Request.safeDelete("/saved-credentials/{credential_id}", {
                  additionalHeaders: { "ChatGPT-Account-ID": e },
                  expectedIdentity: { accountId: e, userId: s },
                  parameters: { path: { credential_id: t } },
                  retry: !1,
                }),
              )
            })(D, $, e)),
          (U[3] = D),
          (U[4] = $),
          (U[5] = t))
        : (t = U[5]),
        U[6] !== ec
          ? ((u = async () => {
              ;(es(void 0), Y(void 0), await ec())
            }),
            (U[6] = ec),
            (U[7] = u))
          : (u = U[7]),
        U[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = () => {
              ;(es(void 0), Y(void 0))
            }),
            (U[8] = p))
          : (p = U[8]),
        U[9] !== t || U[10] !== u
          ? ((h = { mutationFn: t, retry: !1, onSuccess: u, onError: p }), (U[9] = t), (U[10] = u), (U[11] = h))
          : (h = U[11]))
      let { mutate: el, isPending: ed, isError: eu, reset: ep } = (0, o.n)(h),
        eh = et?.pages.flatMap(eg),
        em = W.trim().toLocaleLowerCase(),
        ew = eh?.filter((e) => `${e.origin} ${e.account_label}`.toLocaleLowerCase().includes(em))
      ;(U[12] !== Z
        ? ((f = () => {
            X.current ||
              ((X.current = !0),
              (0, q.S)(Z, "work", {
                action: "open_section",
                phase: "completed",
                section: "saved_credentials",
                resourceType: "saved_credential",
              }))
          }),
          (x = [Z]),
          (U[12] = Z),
          (U[13] = f),
          (U[14] = x))
        : ((f = U[13]), (x = U[14])),
        (0, c.useEffect)(f, x),
        U[15] !== Z
          ? ((_ = (e) => {
              ;((0, q.S)(Z, "work", {
                action: "open_saved_credential",
                phase: "completed",
                section: "saved_credentials",
                resourceType: "saved_credential",
              }),
                Y(e))
            }),
            (U[15] = Z),
            (U[16] = _))
          : (_ = U[16]))
      let ef = _,
        ey = O.X,
        eb =
          null == eh || eo
            ? (0, a.jsx)(d.A, {
                id: "restricted.passwords.saved",
                defaultMessage: "Saved passwords",
                description: "Heading above the list of saved website passwords",
              })
            : (0, a.jsx)(d.A, {
                id: "restricted.passwords.count",
                defaultMessage: "Saved passwords ({count})",
                description: "Heading showing the total number of saved website passwords after all pages have loaded",
                values: { count: eh.length },
              }),
        ex = en || ed
      ;(U[17] !== ec || U[18] !== ep || U[19] !== Z
        ? ((v = () => {
            ep()
            let e = (0, L.M)(Z, "work", {
              action: "retry_load",
              section: "saved_credentials",
              resourceType: "saved_credential",
            })
            ec().then((s) => {
              e(s.isError ? "failed" : "completed")
            })
          }),
          (U[17] = ec),
          (U[18] = ep),
          (U[19] = Z),
          (U[20] = v))
        : (v = U[20]),
        U[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsx)(d.A, {
              id: "restricted.passwords.refresh",
              defaultMessage: "Refresh",
              description: "Reload the saved password list without using or saving a password",
            })),
            (U[21] = S))
          : (S = U[21]),
        U[22] !== ex || U[23] !== v
          ? ((C = (0, a.jsx)(m.$, { color: "secondary", size: "toolbar", disabled: ex, onClick: v, children: S })),
            (U[22] = ex),
            (U[23] = v),
            (U[24] = C))
          : (C = U[24]),
        U[25] !== C || U[26] !== eb
          ? ((P = (0, a.jsx)(O.X.Header, { title: eb, actions: C })), (U[25] = C), (U[26] = eb), (U[27] = P))
          : (P = U[27]))
      let e_ = O.X
      ;(U[28] !== er || U[29] !== eu
        ? ((M =
            er || eu
              ? (0, a.jsx)(g.l, {
                  type: "error",
                  variant: "callout",
                  role: "alert",
                  content: (0, a.jsx)(d.A, {
                    id: "restricted.passwords.error",
                    defaultMessage: "We couldn’t confirm the latest saved passwords. Refresh to check.",
                    description:
                      "An uncertain list or deletion result; refresh reconciles server state without retrying the deletion",
                  }),
                })
              : null),
          (U[28] = er),
          (U[29] = eu),
          (U[30] = M))
        : (M = U[30]),
        U[31] !== en
          ? ((A = en
              ? (0, a.jsxs)("div", {
                  role: "status",
                  className: "flex items-center gap-2 text-sm text-secondary",
                  children: [
                    (0, a.jsx)(y.y, {}),
                    (0, a.jsx)(d.A, {
                      id: "restricted.passwords.loading",
                      defaultMessage: "Loading saved passwords…",
                      description: "Status while loading or refreshing saved passwords",
                    }),
                  ],
                })
              : null),
            (U[31] = en),
            (U[32] = A))
          : (A = U[32]))
      let ev =
          ea || er || ew?.length !== 0
            ? null
            : (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                children: em
                  ? (0, a.jsx)(d.A, {
                      id: "restricted.passwords.noMatches",
                      defaultMessage: "No matching passwords",
                      description: "No loaded saved passwords match the search",
                    })
                  : (0, a.jsx)(d.A, {
                      id: "restricted.passwords.empty",
                      defaultMessage: "No saved passwords",
                      description: "The user has not saved any website passwords",
                    }),
              }),
        ej =
          null != ew && ew.length > 0
            ? (0, a.jsx)("div", {
                "data-dd-privacy": "mask",
                children: (0, a.jsx)(B.t, {
                  children: ew.map((e) =>
                    (0, a.jsx)(
                      G.kG,
                      {
                        edgeRounding: "surface",
                        label: new URL(e.origin).hostname,
                        description: e.account_label,
                        onClick: () => ef(e),
                        actions: (0, a.jsx)(w.p, {
                          label: F.formatMessage(
                            {
                              id: "restricted.passwords.details",
                              defaultMessage: "View password details for {site}, {account}",
                              description:
                                "Accessible label for opening a saved password's details, identified by website and masked account",
                            },
                            { site: e.origin, account: e.account_label },
                          ),
                          "aria-haspopup": "dialog",
                          size: "xs",
                          onClick: () => ef(e),
                        }),
                      },
                      e.credential_id,
                    ),
                  ),
                }),
              })
            : null
      return (
        U[33] !== e_.Content || U[34] !== M || U[35] !== A || U[36] !== ev || U[37] !== ej
          ? ((I = (0, a.jsxs)(e_.Content, { children: [M, A, ev, ej] })),
            (U[33] = e_.Content),
            (U[34] = M),
            (U[35] = A),
            (U[36] = ev),
            (U[37] = ej),
            (U[38] = I))
          : (I = U[38]),
        U[39] !== ei || U[40] !== eo || U[41] !== en || U[42] !== ed || U[43] !== em || U[44] !== Z
          ? ((E = eo
              ? (0, a.jsxs)(O.X.Footer, {
                  children: [
                    em
                      ? (0, a.jsx)(d.A, {
                          id: "restricted.passwords.searchMore",
                          defaultMessage: "Load more passwords to search the rest",
                          description:
                            "Explains that search applies to loaded passwords while more pages are available",
                        })
                      : null,
                    (0, a.jsx)(m.$, {
                      color: "secondary",
                      size: "toolbar",
                      disabled: en || ed,
                      onClick: () => {
                        let e = (0, L.M)(Z, "work", {
                          action: "load_more_credentials",
                          section: "saved_credentials",
                          resourceType: "saved_credential",
                        })
                        ei().then((s) => {
                          e(s.isError ? "failed" : "completed")
                        })
                      },
                      children: (0, a.jsx)(d.A, {
                        id: "restricted.passwords.more",
                        defaultMessage: "Load more",
                        description: "Load the next page of saved passwords",
                      }),
                    }),
                  ],
                })
              : null),
            (U[39] = ei),
            (U[40] = eo),
            (U[41] = en),
            (U[42] = ed),
            (U[43] = em),
            (U[44] = Z),
            (U[45] = E))
          : (E = U[45]),
        U[46] !== ey || U[47] !== P || U[48] !== I || U[49] !== E
          ? ((T = (0, a.jsxs)(ey, { children: [P, I, E] })),
            (U[46] = ey),
            (U[47] = P),
            (U[48] = I),
            (U[49] = E),
            (U[50] = T))
          : (T = U[50]),
        U[51] !== ee || U[52] !== Z || U[53] !== J
          ? ((z =
              null != J && null == ee
                ? (0, a.jsx)(H, {
                    password: J,
                    onClose: () => {
                      ;((0, q.S)(Z, "work", {
                        action: "back",
                        phase: "completed",
                        section: "saved_credentials",
                        resourceType: "saved_credential",
                      }),
                        Y(void 0))
                    },
                    onRemove: () => {
                      ;((0, q.S)(Z, "work", {
                        action: "open_delete_confirmation",
                        phase: "completed",
                        section: "saved_credentials",
                        resourceType: "saved_credential",
                      }),
                        es(J))
                    },
                  })
                : null),
            (U[51] = ee),
            (U[52] = Z),
            (U[53] = J),
            (U[54] = z))
          : (z = U[54]),
        U[55] !== ed || U[56] !== el || U[57] !== ee || U[58] !== Z
          ? ((R =
              null != ee
                ? (0, a.jsx)(Q, {
                    password: ee,
                    isPending: ed,
                    onClose: () => {
                      ;((0, q.S)(Z, "work", {
                        action: "cancel_delete",
                        phase: "completed",
                        section: "saved_credentials",
                        resourceType: "saved_credential",
                      }),
                        es(void 0))
                    },
                    onConfirm: () => {
                      if (!ed) {
                        let e = (0, L.M)(Z, "work", {
                          action: "delete_saved_credential",
                          section: "saved_credentials",
                          resourceType: "saved_credential",
                        })
                        el(ee.credential_id, {
                          onSuccess: () => {
                            e("completed")
                          },
                          onError: () => {
                            e("failed")
                          },
                        })
                      }
                    },
                  })
                : null),
            (U[55] = ed),
            (U[56] = el),
            (U[57] = ee),
            (U[58] = Z),
            (U[59] = R))
          : (R = U[59]),
        U[60] !== T || U[61] !== z || U[62] !== R
          ? ((N = (0, a.jsxs)(a.Fragment, { children: [T, z, R] })), (U[60] = T), (U[61] = z), (U[62] = R), (U[63] = N))
          : (N = U[63]),
        N
      )
    }
    function eg(e) {
      return e.items
    }
  },
  Y5Pg(e, s, t) {
    var a = t("GaA7"),
      n = t("hZax")
    t.d(
      s,
      {},
      {
        N: function (e) {
          return (0, n.Zj)(!!(void 0 === e || e) && "2736341695") && null != a.appServices.passwordSync
        },
      },
    )
  },
}
//# sourceMappingURL=615197.759a20d54a.js.map
