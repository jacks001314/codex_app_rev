export const __rspack_esm_ids = [963873]
export const __webpack_modules__ = {
  up6K(e, t, n) {
    var l = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, l.jsx)("svg", {
          width: 21,
          height: 21,
          viewBox: "0 0 21 21",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, l.jsx)("path", {
            d: "M18.2682 14.3617H13.2565L12.5641 14.7084C12.4718 14.7545 12.3695 14.7787 12.2663 14.7787H8.93329C8.83005 14.7787 8.72778 14.7545 8.63544 14.7084L7.94305 14.3617H2.92841V14.9467C2.92841 15.4999 3.37715 15.9486 3.93036 15.9486H17.2663C17.8195 15.9486 18.2682 15.4999 18.2682 14.9467V14.3617ZM17.4352 6.78064C17.4352 6.30296 17.4347 5.98418 17.4147 5.73962C17.4002 5.56206 17.3766 5.45678 17.3513 5.38611L17.3259 5.32556C17.2538 5.18414 17.1494 5.06256 17.0222 4.97009L16.8884 4.88806C16.8195 4.85296 16.7101 4.81854 16.4733 4.79919C16.2288 4.77924 15.9107 4.77869 15.4333 4.77869H5.7663C5.2889 4.77869 4.97075 4.77924 4.72626 4.79919C4.54907 4.81367 4.44343 4.83642 4.37274 4.86169L4.31219 4.88806C4.17098 4.96002 4.04914 5.06385 3.95673 5.1908L3.87372 5.32556C3.83865 5.39444 3.80517 5.50312 3.78583 5.73962C3.76585 5.98418 3.76532 6.30296 3.76532 6.78064V13.0316H8.10028L8.17645 13.0365C8.25305 13.0454 8.32783 13.0673 8.39716 13.1019L9.08954 13.4486H12.11L12.8024 13.1019L12.8737 13.0717C12.946 13.0455 13.023 13.0316 13.1003 13.0316H17.4352V6.78064ZM18.7653 13.0316H18.9333C19.3004 13.0317 19.5982 13.3296 19.5983 13.6967V14.9467C19.5983 16.2344 18.554 17.2787 17.2663 17.2787H3.93036C2.64261 17.2787 1.59833 16.2344 1.59833 14.9467V13.6967L1.612 13.5629C1.67405 13.2599 1.94205 13.0316 2.26337 13.0316H2.43524V6.78064C2.43524 6.3249 2.43422 5.94251 2.45966 5.63123C2.48573 5.31234 2.54269 5.00955 2.68915 4.72205L2.77899 4.56091C3.003 4.19579 3.32393 3.89808 3.7077 3.70251L3.8161 3.65173C4.07126 3.54227 4.33858 3.49682 4.61786 3.474C4.92907 3.44858 5.31072 3.44861 5.7663 3.44861H15.4333C15.8889 3.44861 16.2705 3.44859 16.5817 3.474C16.9008 3.50007 17.2043 3.55596 17.4919 3.70251L17.652 3.79236C18.0175 4.0164 18.3148 4.33802 18.5104 4.72205L18.5612 4.83044C18.6706 5.08544 18.7171 5.35214 18.7399 5.63123C18.7654 5.94251 18.7653 6.3249 18.7653 6.78064V13.0316Z",
            fill: "currentColor",
          }),
        })))
  },
  VEyj(e, t, n) {
    var l = n("ABep"),
      o = n("QosV"),
      r = n("zd8w"),
      i = n("F5N3")
    function a() {
      return new i.nm()
    }
    n.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            n,
            s,
            d,
            u,
            c,
            f = (0, o.c)(14),
            { children: m, mode: g } = e,
            h = (0, r.useContext)(i.$w),
            [p] = (0, r.useState)(a),
            v = (0, r.useRef)(null),
            w = (0, r.useRef)(!1)
          return (
            f[0] !== p
              ? ((t = () => (
                  (w.current = !1),
                  () => {
                    ;((w.current = !0),
                      window.setTimeout(() => {
                        ;(v.current?.(), (v.current = null), p.disposed || p.dispose())
                      }, 0))
                  }
                )),
                (n = [p]),
                (f[0] = p),
                (f[1] = t),
                (f[2] = n))
              : ((t = f[1]), (n = f[2])),
            (0, r.useInsertionEffect)(t, n),
            f[3] !== g || f[4] !== p || f[5] !== h
              ? ((s = () => (
                  v.current?.(),
                  (v.current = null),
                  p.setHidden("hidden" === g),
                  "visible" === g && p.flushLayoutCleanups(),
                  () => {
                    w.current
                      ? p.dispose()
                      : (p.setHidden(!0), null != h && (v.current = (0, i.UO)(h, () => p.dispose(), "layout")))
                  }
                )),
                (d = [g, p, h]),
                (f[3] = g),
                (f[4] = p),
                (f[5] = h),
                (f[6] = s),
                (f[7] = d))
              : ((s = f[6]), (d = f[7])),
            (0, r.useLayoutEffect)(s, d),
            f[8] !== m || f[9] !== g
              ? ((u = (0, l.jsx)(r.Activity, { mode: g, children: m })), (f[8] = m), (f[9] = g), (f[10] = u))
              : (u = f[10]),
            f[11] !== p || f[12] !== u
              ? ((c = (0, l.jsx)(i.$w, { value: p, children: u })), (f[11] = p), (f[12] = u), (f[13] = c))
              : (c = f[13]),
            c
          )
        },
      },
    )
  },
  agZi(e, t, n) {
    var l = n("SZCv"),
      o = n.n(l),
      r = n("zTeN"),
      i = n("OeLR"),
      a = n("ASxG"),
      s = n("tl5a"),
      d = n("YWOa"),
      u = n("SPnB"),
      c = n("eLmE"),
      f = n("OWtl"),
      m = n("JYRT")
    let g = a.object({
        presets: a.array(a.array(a.object({ model: a.string().min(1), reasoning_effort: a.string().min(1) }))),
      }),
      h = (0, r.un)(
        f.u,
        ({ get: e }) => {
          let t = e(u.PO)
          if (
            t.authLoading ||
            "chatgpt" !== t.authMethod ||
            !1 === t.hasChatGptToken ||
            null == t.authenticatedAccountId ||
            null == t.userId
          )
            return null
          let n = g.safeParse(e(m.X, "423260384")?.value)
          return n.success && n.data.presets.some((e) => e.length > 0) ? n.data : null
        },
        { isEqual: o() },
      ),
      p = (0, r.i1)(f.u, ({ conversationId: e, hostId: t, cwd: n }, { get: l }) => {
        if ("local" !== t) return null
        let o = l(d.J8, { hostId: t, cwd: n }).data
        return null == o || (l(s.jR, e) ?? o.model_provider ?? "openai") !== "openai" || (0, i.bo)(o) || l(c.qM, t)
          ? null
          : l(h)
      })
    n.d(t, {}, { I: h, m: p })
  },
  f38C(e, t, n) {
    n.d(t, { p: () => d })
    var l = n("ABep"),
      o = n("QosV"),
      r = n("hwkA"),
      i = n("on57"),
      a = n("bVeK"),
      s = n("UxN3")
    function d(e) {
      let t,
        n,
        d,
        u,
        c,
        f,
        m,
        g,
        h,
        p,
        v,
        w,
        y = (0, o.c)(27)
      y[0] !== e
        ? (({ className: t, label: d, onClick: u, iconClassName: n, iconSize: f, size: m, uniform: g, ...c } = e),
          (y[0] = e),
          (y[1] = t),
          (y[2] = n),
          (y[3] = d),
          (y[4] = u),
          (y[5] = c),
          (y[6] = f),
          (y[7] = m),
          (y[8] = g))
        : ((t = y[1]), (n = y[2]), (d = y[3]), (u = y[4]), (c = y[5]), (f = y[6]), (m = y[7]), (g = y[8]))
      let b = void 0 === f ? "sm" : f,
        P = void 0 === m ? "md" : m,
        _ = void 0 === g || g,
        I = "lg" === b ? a.e4G : a.l0Y,
        C = "toolbar" === P && "Toolbar-TcAqyt"
      y[9] !== t || y[10] !== C ? ((h = (0, i.A)(C, t)), (y[9] = t), (y[10] = C), (y[11] = h)) : (h = y[11])
      let M = "toolbar" === P ? "xl" : P
      return (
        y[12] !== u
          ? ((p = (e) => {
              ;(e.stopPropagation(), u?.(e))
            }),
            (y[12] = u),
            (y[13] = p))
          : (p = y[13]),
        y[14] !== I || y[15] !== n || y[16] !== P
          ? ((v =
              "toolbar" === P
                ? (0, l.jsx)(s.b5, { className: n, "data-no-autosize": !0, icon: { 16: a.l0Y, 20: a.e4G } })
                : (0, l.jsx)(I, { className: n })),
            (y[14] = I),
            (y[15] = n),
            (y[16] = P),
            (y[17] = v))
          : (v = y[17]),
        y[18] !== b ||
        y[19] !== d ||
        y[20] !== c ||
        y[21] !== h ||
        y[22] !== M ||
        y[23] !== p ||
        y[24] !== v ||
        y[25] !== _
          ? ((w = (0, l.jsx)(r.$, {
              className: h,
              color: "secondary",
              variant: "ghost",
              pill: !1,
              size: M,
              iconSize: b,
              uniform: _,
              "aria-label": d,
              ...c,
              onClick: p,
              children: v,
            })),
            (y[18] = b),
            (y[19] = d),
            (y[20] = c),
            (y[21] = h),
            (y[22] = M),
            (y[23] = p),
            (y[24] = v),
            (y[25] = _),
            (y[26] = w))
          : (w = y[26]),
        w
      )
    }
  },
  awFK(e, t, n) {
    var l = n("zTeN"),
      o = n("YWOa"),
      r = n("OWtl"),
      i = n("hQzs"),
      a = n("gPv1"),
      s = n("v9ZH")
    let d = (0, l.i1)(r.u, (e, { get: t }) => {
      if (null == e || "local" !== e.hostId) return null
      let { data: n } = t(o.J8, e)
      if (null == n || (n.model_provider ?? "openai") !== "openai") return null
      let { isFetching: l } = t(a.Ix)
      return { isFetching: l, usage: t(s._v) }
    })
    n.d(
      t,
      {},
      {
        D: d,
        r: function (e, t, n) {
          let l = e?.rate_limit_upsell
          if (n.isLoading || l?.blocked_model_slug !== n.model || null == t) return null
          let o = l.fallback_model_slugs
            ?.map((e) => t.models.find(({ model: t }) => t === e))
            .find((t) => null != t && !0 !== t.hidden && t.model !== n.model && !(0, i.is)(e, t.model))
          return null == o
            ? null
            : {
                ...n,
                model: o.model,
                reasoningEffort: o.supportedReasoningEfforts.some(({ reasoningEffort: e }) => e === n.reasoningEffort)
                  ? n.reasoningEffort
                  : o.defaultReasoningEffort,
              }
        },
      },
    )
  },
  v9ZH(e, t, n) {
    var l = n("zTeN"),
      o = n("SPnB"),
      r = n("OWtl"),
      i = n("x7EU"),
      a = n("hQzs"),
      s = n("gPv1")
    let d = (0, l.bD)(r.u, (e) => null),
      u = (0, l.un)(r.u, ({ get: e }) => {
        let t = e(o.PO),
          { data: n, isError: l } = e(s.Ix)
        return !l &&
          "chatgpt" === t.authMethod &&
          !t.authLoading &&
          !t.accountLoading &&
          !1 !== t.requiresAuth &&
          t.accountId === t.authenticatedAccountId &&
          n?.account_id === t.authenticatedAccountId &&
          n?.user_id === t.userId &&
          ((n?.rate_limit?.allowed === !0 && !0 !== n.rate_limit.limit_reached) ||
            ((0, i.Hw)(n) && n?.spend_control?.reached !== !0))
          ? n
          : null
      }),
      c = (0, l.i1)(r.u, ([e, t], { get: n }) => {
        let l = n(d, e)
        if ("local" !== t || l?.confirmed !== !0) return null
        let o = n(u)
        return l.usageKey !== f(o) ||
          o?.rate_limit_upsell?.fallback_model_slugs?.includes(l.fallbackModel) !== !0 ||
          (0, a.is)(o, l.fallbackModel)
          ? null
          : l.fallbackModel
      })
    function f(e) {
      let t = e?.rate_limit_upsell
      return null == e || t?.blocked_model_slug == null
        ? null
        : JSON.stringify([e.account_id, e.user_id, t.banner_type, t.blocked_model_slug])
    }
    n.d(
      t,
      {},
      {
        JN: c,
        MA: d,
        Mr: f,
        OS: function (e, t, n) {
          null != t && e.get(d, t)?.fallbackModel !== n && e.set(d, t, null)
        },
        _v: u,
        a9: async function (e, t, n, l) {
          let o = e.get(d, t)
          if (o?.usageKey === n.usageKey && o.dataUpdatedAt === n.dataUpdatedAt) return
          let r = l(),
            i = { ...n, confirmed: !1, notice: null }
          e.set(d, t, i)
          let a = await r.catch(() => !1)
          e.get(d, t) === i && e.set(d, t, { ...i, confirmed: a })
        },
        mb: function (e, t, n) {
          null == n.notice ||
            n.notice.dismissed ||
            e.get(d, t) !== n ||
            e.set(d, t, { ...n, notice: { ...n.notice, dismissed: !0 } })
        },
      },
    )
  },
  o8WW(e, t, n) {
    n.d(t, { D: () => em, aU: () => ep })
    var l = n("QosV"),
      o = n("T0Rc"),
      r = n("irkb"),
      i = n("zTeN"),
      a = n("DBCl"),
      s = n("zd8w"),
      d = n("Wf1j"),
      u = n("Dgwo"),
      c = n("tl5a"),
      f = n("m8L3"),
      m = n("YWOa"),
      g = n("xwbo"),
      h = n("EOo5"),
      p = n("kYSX")
    n("njX7")
    var v = n("Lb53"),
      w = n("sMGP"),
      y = n("TWUU"),
      b = n("gfHD"),
      P = n("UDfN"),
      _ = n("J7aR"),
      I = n("qcLg"),
      C = n("E6oJ"),
      M = n("agZi"),
      S = n("Eklu"),
      E = n("SGsN"),
      A = n("eLmE"),
      T = n("lOm2"),
      L = n("awFK"),
      x = n("v9ZH"),
      U = n("e85W"),
      R = n("qMca"),
      k = n("B81s"),
      D = n("sLlu"),
      V = n("dPoV"),
      j = n("j44z"),
      B = n("GaA7"),
      q = n("q77y"),
      O = n("OWtl"),
      N = n("ABep"),
      z = n("FP2P"),
      W = n("zKw6"),
      H = n.n(W),
      K = n("oyxz")
    n("Sm6l")
    var Q = n("HOLv"),
      F = n("MI1z"),
      G = n("C4bN")
    let Y = (0, n("Qgfj").YK)({
      openConfigToml: {
        id: "codex.profileDropdown.openConfigToml",
        defaultMessage: "Open config.toml",
        description: "Action to open the MCP configuration file",
      },
      openConfigTomlWsl: {
        id: "codex.profileDropdown.openConfigToml.wsl",
        defaultMessage: "Open config.toml in WSL environment",
        description: "Action to open the MCP configuration file inside Windows Subsystem for Linux",
      },
    })
    var Z = n("MLC6")
    function X(e) {
      let t,
        n,
        o,
        r = (0, l.c)(8),
        { hostId: i } = e,
        { configPath: a, label: s } = (function (e) {
          let t,
            n,
            o,
            r = (0, l.c)(7),
            { data: i } = (0, G.a)(),
            a = (0, F.y)(e),
            s = (null == e || "local" === e) && (i?.isVsCodeRunningInsideWsl || i?.isCodexRunningInsideWsl)
          r[0] !== a ? ((t = null != a ? H().join(a, "config.toml") : null), (r[0] = a), (r[1] = t)) : (t = r[1])
          let d = t
          r[2] !== s
            ? ((n = s ? (0, N.jsx)(K.A, { ...Y.openConfigTomlWsl }) : (0, N.jsx)(K.A, { ...Y.openConfigToml })),
              (r[2] = s),
              (r[3] = n))
            : (n = r[3])
          let u = n
          return (
            r[4] !== d || r[5] !== u
              ? ((o = { configPath: d, label: u }), (r[4] = d), (r[5] = u), (r[6] = o))
              : (o = r[6]),
            o
          )
        })(i)
      r[0] !== a || r[1] !== i
        ? ((t = () => {
            null != a && (0, Z.t)({ hostId: i, path: a })
          }),
          (r[0] = a),
          (r[1] = i),
          (r[2] = t))
        : (t = r[2])
      let d = null == a
      return (
        r[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, N.jsx)(Q.I, { className: "shrink-0", asset: z.i, "aria-hidden": !0 })), (r[3] = n))
          : (n = r[3]),
        r[4] !== s || r[5] !== t || r[6] !== d
          ? ((o = (0, N.jsxs)("button", {
              type: "button",
              className:
                "inline-flex cursor-interaction items-center gap-1 text-start font-medium text-secondary hover:text-default disabled:cursor-not-allowed disabled:opacity-50",
              onClick: t,
              disabled: d,
              children: [s, n],
            })),
            (r[4] = s),
            (r[5] = t),
            (r[6] = d),
            (r[7] = o))
          : (o = r[7]),
        o
      )
    }
    var J = n("qixt"),
      $ = n("WFY2"),
      ee = n("ASxG")
    let et = ee.object({ code: ee.literal(-32600), message: ee.string().min(1) })
    function en(e) {
      return et.safeParse(e).success
    }
    var el = n("ER5p"),
      eo = n("l2g8"),
      er = n("SGof"),
      ei = n("fNL0"),
      ea = n("tzYO"),
      es = n("an0a")
    function ed(e, t, n) {
      return e !== a.iwv || n ? { hostId: e, cwd: t } : { hostId: "local", cwd: null }
    }
    let eu = (0, i.i1)(O.u, (e, { get: t }) => t(c.Dj).includes(e))
    function ec(e) {
      var t, n
      let r,
        a,
        d,
        u,
        f,
        g,
        h,
        p,
        v = (0, l.c)(40),
        {
          hostId: w,
          cwd: S,
          enabled: E,
          isChatGptAuth: A,
          isHostRegistered: T,
          managedNewThreadModelSettings: x,
          draftModelSettings: U,
          waitForModelList: R,
          fetchModelCatalog: k,
          isNewThreadDraft: D,
          waitForModelFallback: V,
        } = e,
        B = void 0 === E || E,
        q = void 0 !== R && R,
        N = void 0 === k || k,
        z = void 0 !== D && D,
        W = (0, i.gh)(O.u),
        H = (0, s.use)(ei.r),
        K = null != H,
        Q = ed(w, S, K),
        F = (0, i._U)(eu, Q.hostId),
        G = (0, i._U)(I.Qd, w),
        Y = (0, i.Ul)(J.e2),
        Z = (0, i.Ul)(Y ? ea.Wo : null),
        X = "account" === H || (null == H && null != Z),
        $ = (0, i.Ul)(X || Y ? ea.Kx : null),
        ee = $?.data,
        et = W.queryClient
      v[0] !== S || v[1] !== B || v[2] !== w || v[3] !== z
        ? ((r = B && z ? { hostId: w, cwd: S } : null), (v[0] = S), (v[1] = B), (v[2] = w), (v[3] = z), (v[4] = r))
        : (r = v[4])
      let en = (0, i._U)(L.D, r),
        eo = (0, i._U)(c.mb, { hostId: Q.hostId, cwd: Q.cwd }),
        { data: es, isLoading: ec } = (0, o.I)(
          (0, m.lZ)({ scope: W, queryClient: et, hostId: Q.hostId, cwd: Q.cwd, enabled: B && T && F && !X }),
        ),
        em = x?.model ?? null,
        eg = em ?? (X ? ee?.settings?.model : es?.model) ?? null
      v[5] !== eg || v[6] !== B || v[7] !== N || v[8] !== w
        ? ((a = B
            ? { enabled: N, additionalAvailableModels: null == eg ? void 0 : new Set([eg]), hostId: w }
            : { enabled: !1, hostId: w }),
          (v[5] = eg),
          (v[6] = B),
          (v[7] = N),
          (v[8] = w),
          (v[9] = a))
        : (a = v[9])
      let { data: eh, isLoading: ep } = (0, j.Ym)(a),
        ev = ee?.settings
      v[10] !== eh || v[11] !== ev ? ((d = (0, er.D)(ev, eh)), (v[10] = eh), (v[11] = ev), (v[12] = d)) : (d = v[12])
      let ew = d,
        ey = X && null == em ? ew.model : eg,
        eb =
          null != em
            ? (x?.modelReasoningEffort ?? null)
            : (x?.modelReasoningEffort ?? (X ? ew.reasoningEffort : es?.model_reasoning_effort) ?? null),
        eP = eh?.defaultModel ?? eh?.models[0] ?? null
      v[13] !== eP ||
      v[14] !== Q ||
      v[15] !== w ||
      v[16] !== A ||
      v[17] !== K ||
      v[18] !== eh ||
      v[19] !== em ||
      v[20] !== es ||
      v[21] !== ey
        ? ((u =
            A &&
            (Q.hostId !== w || K || null != em || es?.model_provider == null || "openai" === es.model_provider) &&
            null != ey &&
            null != eP &&
            eh?.models.some((e) => e.model === ey) === !1),
          (v[13] = eP),
          (v[14] = Q),
          (v[15] = w),
          (v[16] = A),
          (v[17] = K),
          (v[18] = eh),
          (v[19] = em),
          (v[20] = es),
          (v[21] = ey),
          (v[22] = u))
        : (u = v[22])
      let e_ = u
      v[23] !== eP || v[24] !== eh || v[25] !== e_ || v[26] !== q
        ? ((f = (q || e_) && null != eh ? { ...eh, defaultModel: eP } : eh),
          (v[23] = eP),
          (v[24] = eh),
          (v[25] = e_),
          (v[26] = q),
          (v[27] = f))
        : (f = v[27])
      let eI = (0, el.Zw)({
          userSavedModelString: e_ ? null : ey,
          userSavedReasoningEffort: e_ && null != em ? null : eb,
          listModelsData: f,
        }),
        eC = null == ey || null == eb,
        eM = B && z && A && !X && null == x,
        eS = (0, i.Ul)(eM ? C.EZ : null),
        eE = (0, i.Ul)("default" === eS ? b.G2 : null)
      v[28] !== S || v[29] !== w
        ? ((g = { conversationId: null, hostId: w, cwd: S }), (v[28] = S), (v[29] = w), (v[30] = g))
        : (g = v[30])
      let eA = (0, i._U)(K || "default" !== eS || !0 === eE ? null : M.m, g),
        eT = (0, i.Ul)(K && "default" === eS && !0 !== eE ? M.I : null),
        eL = K ? eT : eA,
        ex = eI.reasoningEffort
      if (null != eL) {
        let e,
          t = (0, y.Qv)(eh?.models, { sliderModelsConfig: eL })
        if (
          (v[31] !== eh || v[32] !== G
            ? ((e = (e) => {
                let { model: t } = e,
                  n = eh?.models.find((e) => e.model === t)
                return t === _.je || (G ? null != n && !(0, _.YP)(n, !1) : (0, P.Qt)(t))
              }),
              (v[31] = eh),
              (v[32] = G),
              (v[33] = e))
            : (e = v[33]),
          !t.some(e))
        ) {
          let e = t
            .filter((e) => {
              let { model: t } = e
              return t === eI.model
            })
            .map(ef)
          e.some((e) => e === ex) || (ex = e.at(-1) ?? ex)
        }
      }
      let eU =
          ((t = {
            ...eI,
            reasoningEffort: ex,
            profile: K || X || "string" != typeof es?.profile ? null : es.profile,
            isLoading:
              B &&
              ((X && $?.data?.settings == null) ||
                $?.isLoading === !0 ||
                (!X && ec) ||
                (X && ep) ||
                (null != eL && ep) ||
                (q ? eh?.models[0] == null : ep && eC)),
          }),
          null == (n = X ? null : eo)
            ? t
            : { ...t, model: n.model, reasoningEffort: n.reasoningEffort, profile: n.profile }),
        eR = null != U && !X && A && (Q.hostId !== w || es?.model_provider == null || "openai" === es.model_provider)
      null != U &&
        (!eR ||
          null == eh ||
          eh.models.some((e) => {
            let { model: t } = e
            return t === U.model
          })) &&
        (eU = { ...eU, model: U.model, reasoningEffort: U.reasoningEffort })
      let ek = B && ((!X && ec) || $?.isLoading === !0 || ep),
        eD = (0, L.r)(en?.usage, eh, eU) ?? eU,
        eV =
          eU.isLoading ||
          (eR && ep) ||
          (void 0 !== V &&
            V &&
            (en?.isFetching === !0 || (en?.usage?.rate_limit_upsell?.blocked_model_slug === eU.model && ep)))
      return (
        v[34] !== eD || v[35] !== eV
          ? ((h = { ...eD, isLoading: eV }), (v[34] = eD), (v[35] = eV), (v[36] = h))
          : (h = v[36]),
        v[37] !== ek || v[38] !== h
          ? ((p = { isLoadingQueries: ek, modelSettings: h }), (v[37] = ek), (v[38] = h), (v[39] = p))
          : (p = v[39]),
        p
      )
    }
    function ef(e) {
      let { reasoningEffort: t } = e
      return t
    }
    function em(e) {
      let t,
        n,
        o = (0, l.c)(9),
        { hostId: r, cwd: a, enabled: s } = e,
        d = void 0 === s || s,
        u = (0, h.tn)(r),
        c = (0, i._U)(eu, r),
        f = u?.authMethod === "chatgpt"
      o[0] !== a || o[1] !== d || o[2] !== r || o[3] !== c || o[4] !== f
        ? ((t = { hostId: r, cwd: a, enabled: d, isChatGptAuth: f, isHostRegistered: c, waitForModelList: !0 }),
          (o[0] = a),
          (o[1] = d),
          (o[2] = r),
          (o[3] = c),
          (o[4] = f),
          (o[5] = t))
        : (t = o[5])
      let { modelSettings: m, isLoadingQueries: g } = ec(t),
        p = m.isLoading && !g && !(c && u?.isLoading === !0)
      return (
        o[6] !== m || o[7] !== p ? ((n = { ...m, isUnavailable: p }), (o[6] = m), (o[7] = p), (o[8] = n)) : (n = o[8]),
        n
      )
    }
    function eg() {
      return !1
    }
    function eh() {
      return !0
    }
    function ep(e, t) {
      let n,
        o,
        a,
        y,
        b,
        P = (0, l.c)(25),
        _ = void 0 === e ? null : e
      P[0] !== t ? ((n = void 0 === t ? {} : t), (P[0] = t), (P[1] = n)) : (n = P[1])
      let { waitForModelFallback: I, fetchModelCatalog: C } = n,
        M = (0, i.gh)(O.u),
        L = (0, s.use)(p.ku),
        j = null == _
      P[2] !== j ? ((o = { enabled: j }), (P[2] = j), (P[3] = o)) : (o = P[3])
      let { draftSettings: N, isNewThreadDraft: z, updateDraftSettings: W } = (0, U.iW)(o),
        H = (function (e, t, n, o, a) {
          let p,
            v,
            y,
            b,
            P,
            _,
            I,
            C,
            M,
            L,
            U,
            j,
            N,
            z,
            W,
            H,
            K = (0, l.c)(109),
            Q = (0, i.gh)(O.u),
            F = (0, s.use)(ei.r),
            G = null != F,
            Y = (0, i.Ul)(J.e2),
            Z = (0, i.Ul)("account" === F || Y ? ea.Wo : null),
            ee = "account" === F || (null == F && null != Z),
            et = Q.queryClient,
            el = (0, es.K5)(e),
            eo = el.hostId
          K[0] !== e || K[1] !== eo
            ? ((p = { conversationId: e, hostId: eo }), (K[0] = e), (K[1] = eo), (K[2] = p))
            : (p = K[2])
          let { isLunaReserveActive: ef, originalAdvancedModelSettings: em } = (0, i._U)(T.My, p),
            ep = (0, h.tn)(eo),
            ev = ep?.authMethod ?? null
          K[3] !== el.hostId || K[4] !== ev
            ? ((v = { authMethod: ev, hostId: el.hostId }), (K[3] = el.hostId), (K[4] = ev), (K[5] = v))
            : (v = K[5])
          let { data: ew, isPending: ey } = (0, i._U)(k.b9, v),
            eb = (0, i._U)(eu, eo),
            eP = ep?.authMethod === "copilot",
            e_ = (0, d.A)(),
            eI = el.cwd
          K[6] !== eo || K[7] !== G || K[8] !== eI
            ? ((y = ed(eo, eI, G)), (K[6] = eo), (K[7] = G), (K[8] = eI), (K[9] = y))
            : (y = K[9])
          let { hostId: eC, cwd: eM } = y,
            eS = (0, i._U)(eu, eC),
            eE = t ? ew?.requirements?.models?.newThread : null,
            eA = null == e && t && n?.usesAccountPreferences === ee ? n : null,
            eT = ep?.authMethod === "chatgpt",
            eL = t && null == e
          K[10] !== eA ||
          K[11] !== a ||
          K[12] !== eo ||
          K[13] !== eb ||
          K[14] !== eE ||
          K[15] !== eI ||
          K[16] !== eT ||
          K[17] !== eL ||
          K[18] !== o
            ? ((b = {
                hostId: eo,
                cwd: eI,
                isChatGptAuth: eT,
                isHostRegistered: eb,
                managedNewThreadModelSettings: eE,
                draftModelSettings: eA,
                fetchModelCatalog: a,
                isNewThreadDraft: eL,
                waitForModelFallback: o,
              }),
              (K[10] = eA),
              (K[11] = a),
              (K[12] = eo),
              (K[13] = eb),
              (K[14] = eE),
              (K[15] = eI),
              (K[16] = eT),
              (K[17] = eL),
              (K[18] = o),
              (K[19] = b))
            : (b = K[19])
          let { modelSettings: ex } = ec(b),
            eU = (function () {
              let e,
                t = (0, l.c)(3),
                n = (0, i.Ul)(V.t),
                { data: o, isLoading: r } = (0, i.Ul)(g.BK),
                a = o?.defaultModel ?? n.defaultModel
              return (
                t[0] !== r || t[1] !== a
                  ? ((e = { model: a, reasoningEffort: "medium", profile: null, isLoading: r }),
                    (t[0] = r),
                    (t[1] = a),
                    (t[2] = e))
                  : (e = t[2]),
                e
              )
            })(),
            eR = eP && null == eE ? eU : ex
          if (eP && null == eE && null != eA) {
            let e
            ;(K[20] !== eA.model || K[21] !== eA.reasoningEffort || K[22] !== eR
              ? ((e = { ...eR, model: eA.model, reasoningEffort: eA.reasoningEffort }),
                (K[20] = eA.model),
                (K[21] = eA.reasoningEffort),
                (K[22] = eR),
                (K[23] = e))
              : (e = K[23]),
              (eR = e))
          }
          let ek = null != eE,
            eD = (0, i._U)(c.Af, e),
            eV = (0, i._U)(c.os, e),
            ej = eD && eV?.resumeState === "resumed"
          K[24] !== e || K[25] !== eD || K[26] !== eo || K[27] !== eI
            ? ((P = (0, S.BG)({ conversationId: e, hasConversation: eD, hostId: eo, cwd: eI })),
              (K[24] = e),
              (K[25] = eD),
              (K[26] = eo),
              (K[27] = eI),
              (K[28] = P))
            : (P = K[28])
          let eB = P,
            eq = (0, i._U)(S.EX, eB),
            eO = (0, i._U)(S.si, eB),
            eN = eV?.collaborationMode,
            ez = eN?.settings.model ?? null
          K[29] !== ez || K[30] !== ef || K[31] !== em?.model
            ? ((_ = null != ez && ez.trim().length > 0 && (ef || ez !== A.qz) ? ez : (em?.model ?? null)),
              (K[29] = ez),
              (K[30] = ef),
              (K[31] = em?.model),
              (K[32] = _))
            : (_ = K[32])
          let eW = _,
            eH = ez !== A.qz || ef || null == em ? (eN?.settings.reasoning_effort ?? null) : em.reasoningEffort
          K[33] !== ej || K[34] !== e || K[35] !== eo || K[36] !== Q
            ? ((I = async (t, n, l) =>
                null != e &&
                !!ej &&
                (await (0, u.V)(Q, eo).updateThreadSettingsForNextTurn(e, {
                  ...l?.threadSettings,
                  model: t,
                  effort: n,
                  multiAgentMode: f.Y,
                }),
                !0)),
              (K[33] = ej),
              (K[34] = e),
              (K[35] = eo),
              (K[36] = Q),
              (K[37] = I))
            : (I = K[37])
          let eK = I
          K[38] !== ej ||
          K[39] !== e ||
          K[40] !== eH ||
          K[41] !== ex.isLoading ||
          K[42] !== ex.model ||
          K[43] !== ex.profile ||
          K[44] !== ex.reasoningEffort ||
          K[45] !== eD ||
          K[46] !== ey ||
          K[47] !== eR ||
          K[48] !== eW
            ? ((C = eD
                ? {
                    model: eW ?? ex.model,
                    reasoningEffort: null == eW ? ex.reasoningEffort : eH,
                    profile: ex.profile,
                    isLoading: !ej || (ex.isLoading && null == eW),
                  }
                : { ...eR, isLoading: eR.isLoading || ey || null != e }),
              (K[38] = ej),
              (K[39] = e),
              (K[40] = eH),
              (K[41] = ex.isLoading),
              (K[42] = ex.model),
              (K[43] = ex.profile),
              (K[44] = ex.reasoningEffort),
              (K[45] = eD),
              (K[46] = ey),
              (K[47] = eR),
              (K[48] = eW),
              (K[49] = C))
            : (C = K[49])
          let eQ = C,
            eF = eq ?? eO
          K[50] !== eA || K[51] !== eF || K[52] !== eB || K[53] !== eQ
            ? ((M =
                null == eF || null != eA ? eQ : { ...eQ, ...eF, hasPendingThreadSelection: "conversation" === eB[0] }),
              (K[50] = eA),
              (K[51] = eF),
              (K[52] = eB),
              (K[53] = eQ),
              (K[54] = M))
            : (M = K[54])
          let eG = M
          K[55] !== eM || K[56] !== eC
            ? ((L = { hostId: eC, cwd: eM }), (K[55] = eM), (K[56] = eC), (K[57] = L))
            : (L = K[57])
          let eY = (function (e) {
            let t,
              n = (0, l.c)(5),
              { hostId: o, cwd: i } = e,
              a = (0, r.jE)(),
              s = (0, D.B)()
            return (
              n[0] !== i || n[1] !== o || n[2] !== s || n[3] !== a
                ? ((t = async () => {
                    let e = [...m.Od, o, i]
                    ;(await a.cancelQueries({ queryKey: e, exact: !0 }), await s(e))
                  }),
                  (n[0] = i),
                  (n[1] = o),
                  (n[2] = s),
                  (n[3] = a),
                  (n[4] = t))
                : (t = n[4]),
              t
            )
          })(L)
          K[58] !== eC || K[59] !== e_ || K[60] !== Q
            ? ((U = (e) => {
                $.v.error("Failed to update model and reasoning effort", { safe: {}, sensitive: { error: e } })
                let t = Q.get(E.Id),
                  n = en(e)
                    ? e_.formatMessage(
                        {
                          id: "composer.modelSettings.errorConfigValidation",
                          defaultMessage: "Couldn’t update model settings. Check your config.toml.{br}{br}{message}",
                          description:
                            "Error shown when updating model settings fails because the configuration is invalid",
                        },
                        { br: (0, s.createElement)("br"), message: e.message },
                      )
                    : e_.formatMessage({
                        id: "composer.modelSettings.errorGeneric",
                        defaultMessage: "Couldn’t update model settings",
                        description: "Error shown when updating model settings fails for a non-auth reason",
                      })
                en(e)
                  ? t.danger(n, {
                      errorAnalytics: { toastId: "useModelSettings.showModelSettingsUpdateError" },
                      id: "composer.modelSettings.updateError",
                      description: (0, s.createElement)(
                        "div",
                        { className: "mt-4" },
                        (0, s.createElement)(X, { hostId: eC }),
                      ),
                    })
                  : t.danger(n, {
                      errorAnalytics: { toastId: "useModelSettings.showModelSettingsUpdateError" },
                      id: "composer.modelSettings.updateError",
                    })
              }),
              (K[58] = eC),
              (K[59] = e_),
              (K[60] = Q),
              (K[61] = U))
            : (U = K[61])
          let eZ = U
          K[62] !== eK || K[63] !== e || K[64] !== eD || K[65] !== eo || K[66] !== Q || K[67] !== eI || K[68] !== eZ
            ? ((j = async (t, n, l) => {
                ;(0, x.OS)(Q, e, t)
                let o = (0, S.BG)({ conversationId: e, hasConversation: eD, hostId: eo, cwd: eI }),
                  r = { model: t, reasoningEffort: n, serviceTier: l?.threadSettings.serviceTier }
                ;(void 0 !== r.serviceTier && Q.set(S.pu, { hostId: eo, conversationId: e }, null),
                  Q.set(S.EX, o, r),
                  await (async () => {
                    let e
                    try {
                      e = await eK(t, n, l)
                    } catch (e) {
                      throw (eZ(e), e)
                    }
                    if (!e) {
                      let e = Error("No conversation available for next-turn model update")
                      throw (eZ(e), e)
                    }
                  })().finally(() => {
                    Q.get(S.EX, o) === r && Q.set(S.EX, o, null)
                  }))
              }),
              (K[62] = eK),
              (K[63] = e),
              (K[64] = eD),
              (K[65] = eo),
              (K[66] = Q),
              (K[67] = eI),
              (K[68] = eZ),
              (K[69] = j))
            : (j = K[69])
          let eX = j
          K[70] !== eK ||
          K[71] !== eM ||
          K[72] !== eC ||
          K[73] !== ex.profile ||
          K[74] !== eo ||
          K[75] !== eS ||
          K[76] !== eb ||
          K[77] !== eP ||
          K[78] !== et ||
          K[79] !== eY ||
          K[80] !== Q ||
          K[81] !== eZ ||
          K[82] !== ee ||
          K[83] !== Z
            ? ((N = async (e, t, n, l) => {
                let o,
                  r = null
                try {
                  if (
                    "current" === (void 0 === n ? "current" : n) &&
                    (await eK(e, t, void 0 === l ? void 0 : { threadSettings: { serviceTier: l } }))
                  )
                    return !0
                  if (void 0 !== l) return (eZ(Error("No conversation available for model preset update")), !1)
                  if (eP) {
                    let t = B.appServices?.copilot
                    if (null == t) return (eZ(Error("Copilot is unavailable")), !1)
                    return (await (0, q.P)(t.setDefaultModel(e)), await (0, g.IK)(Q), !0)
                  }
                  if (!eb || (!ee && !eS)) return (eZ(Error("Model settings host is unavailable")), !1)
                  if (ee) {
                    let n = Q.get(ea.Wo)
                    if (null == Z || n?.accountId !== Z.accountId || n.userId !== Z.userId)
                      return (eZ(new DOMException("Work account changed", "AbortError")), !1)
                    return (
                      await Q.get(ea.$C).mutateAsync((0, er.N)(await Q.query.fetch(w.a), e, t)),
                      await (0, u.V)(Q, eo).clearPrewarmedThreads(),
                      !0
                    )
                  }
                  r = [...m.Od, eC, eM]
                  let i = { hostId: eC, cwd: eM }
                  ;(await et.cancelQueries({ exact: !0, queryKey: r }),
                    (o = et.getQueryData(r)),
                    $.v.info("Setting default model and reasoning effort", {
                      safe: { newModel: e, newEffort: t, profile: ex.profile },
                    }),
                    et.setQueryData(r, (n) =>
                      null == n ? n : Object.assign(structuredClone(n), { model: e, model_reasoning_effort: t }),
                    ))
                  let a = await (0, u.V)(Q, eC).setDefaultModelConfig(e, t, ex.profile)
                  if (
                    (await (0, u.V)(Q, eC).clearPrewarmedThreads(),
                    eC !== eo && (await (0, u.V)(Q, eo).clearPrewarmedThreads()),
                    a?.status === "okOverridden")
                  )
                    return (
                      et.setQueryData(r, o),
                      Q.set(c.mb, i, { model: e, reasoningEffort: t, profile: ex.profile }),
                      !0
                    )
                  return (Q.set(c.mb, i, null), await eY(), await Q.query.fetch(m.J8, { hostId: eC, cwd: eM }), !0)
                } catch (e) {
                  return (null != r && et.setQueryData(r, o), eZ(e), !1)
                }
              }),
              (K[70] = eK),
              (K[71] = eM),
              (K[72] = eC),
              (K[73] = ex.profile),
              (K[74] = eo),
              (K[75] = eS),
              (K[76] = eb),
              (K[77] = eP),
              (K[78] = et),
              (K[79] = eY),
              (K[80] = Q),
              (K[81] = eZ),
              (K[82] = ee),
              (K[83] = Z),
              (K[84] = N))
            : (N = K[84])
          let eJ = N
          K[85] !== e || K[86] !== eD || K[87] !== eo || K[88] !== Q || K[89] !== eX || K[90] !== eI || K[91] !== eJ
            ? ((z = (t, n, l) => {
                let o = (0, S.BG)({ conversationId: e, hasConversation: eD, hostId: eo, cwd: eI })
                if ("conversation" === o[0] && Q.get(R.D0, o[1])) return eX(t, n).then(eh, eg)
                let r = l?.serviceTier === void 0 ? Q.get(S.EX, o)?.serviceTier : l.serviceTier
                return (0, S.HM)(Q, o, { model: t, reasoningEffort: n, serviceTier: r }, () => eJ(t, n, "current", r))
              }),
              (K[85] = e),
              (K[86] = eD),
              (K[87] = eo),
              (K[88] = Q),
              (K[89] = eX),
              (K[90] = eI),
              (K[91] = eJ),
              (K[92] = z))
            : (z = K[92])
          let e$ = z
          K[93] !== eo || K[94] !== Q || K[95] !== eI || K[96] !== eJ
            ? ((W = (e, t) =>
                (0, S.HM)(Q, ["default", eo, eI], { model: e, reasoningEffort: t }, () => eJ(e, t, "default"))),
              (K[93] = eo),
              (K[94] = Q),
              (K[95] = eI),
              (K[96] = eJ),
              (K[97] = W))
            : (W = K[97])
          let e0 = W
          return (
            K[98] !== ex.model ||
            K[99] !== ek ||
            K[100] !== eo ||
            K[101] !== ef ||
            K[102] !== eG ||
            K[103] !== em ||
            K[104] !== e0 ||
            K[105] !== e$ ||
            K[106] !== eX ||
            K[107] !== ee
              ? ((H = {
                  defaultAdvancedModel: ex.model,
                  hasManagedNewThreadSettings: ek,
                  hostId: eo,
                  isLunaReserveActive: ef,
                  usesAccountPreferences: ee,
                  originalAdvancedModelSettings: em,
                  setDefaultModelAndReasoningEffort: e0,
                  setModelAndReasoningEffortForNextTurn: eX,
                  setModelAndReasoningEffort: e$,
                  modelSettings: eG,
                }),
                (K[98] = ex.model),
                (K[99] = ek),
                (K[100] = eo),
                (K[101] = ef),
                (K[102] = eG),
                (K[103] = em),
                (K[104] = e0),
                (K[105] = e$),
                (K[106] = eX),
                (K[107] = ee),
                (K[108] = H))
              : (H = K[108]),
            H
          )
        })(_, z, N.modelSettings, void 0 !== I && I, void 0 === C || C),
        { isLunaReserveActive: K } = H,
        Q = null == _ && z,
        F = Q && H.hasManagedNewThreadSettings,
        G = H.modelSettings
      if (K) {
        let e
        ;(P[4] !== G ? ((e = { ...G, model: A.qz }), (P[4] = G), (P[5] = e)) : (e = P[5]), (G = e))
      }
      let Y =
        H.originalAdvancedModelSettings?.model ??
        (H.modelSettings.model === A.qz ? H.defaultAdvancedModel : H.modelSettings.model)
      P[6] !== Y ||
      P[7] !== _ ||
      P[8] !== L ||
      P[9] !== K ||
      P[10] !== F ||
      P[11] !== Q ||
      P[12] !== M ||
      P[13] !== H ||
      P[14] !== W
        ? ((a = async (e, t, n) => {
            ;(0, x.OS)(M, _, e)
            let l = K && e === A.qz ? Y : e,
              o = Q && n?.persistAsDefault === !1
            if (
              (n?.serviceTier !== void 0 && M.set(S.pu, { hostId: H.hostId, conversationId: _ }, null),
              Q &&
                (null != L &&
                  n?.serviceTier !== void 0 &&
                  M.set(
                    v.Q5,
                    L.conversationId,
                    null == n.serviceTier || n.serviceTier === (0, eo.Q7)(null) ? "standard" : n.serviceTier,
                  ),
                W((e) => ({
                  ...e,
                  isManuallyChanged: !0,
                  modelSettings: {
                    model: l,
                    profile: H.modelSettings.profile,
                    reasoningEffort: t,
                    usesAccountPreferences: H.usesAccountPreferences,
                  },
                  modelSettingsPersistAsDefault: !o,
                  serviceTier: n?.serviceTier === void 0 ? e.serviceTier : { value: (0, eo.Q7)(n.serviceTier) },
                }))),
              o)
            )
              return (await (0, u.V)(M, H.hostId).clearPrewarmedThreads(), !0)
            let r = H.setModelAndReasoningEffort(l, t, n)
            return (F && (await (0, u.V)(M, H.hostId).clearPrewarmedThreads()), r)
          }),
          (P[6] = Y),
          (P[7] = _),
          (P[8] = L),
          (P[9] = K),
          (P[10] = F),
          (P[11] = Q),
          (P[12] = M),
          (P[13] = H),
          (P[14] = W),
          (P[15] = a))
        : (a = P[15])
      let Z = a
      return (
        P[16] !== Y || P[17] !== K || P[18] !== H
          ? ((y = (e, t, n) => H.setModelAndReasoningEffortForNextTurn(K && e === A.qz ? Y : e, t, n)),
            (P[16] = Y),
            (P[17] = K),
            (P[18] = H),
            (P[19] = y))
          : (y = P[19]),
        P[20] !== G || P[21] !== Z || P[22] !== H || P[23] !== y
          ? ((b = { ...H, modelSettings: G, setModelAndReasoningEffortForNextTurn: y, setModelAndReasoningEffort: Z }),
            (P[20] = G),
            (P[21] = Z),
            (P[22] = H),
            (P[23] = y),
            (P[24] = b))
          : (b = P[24]),
        b
      )
    }
  },
  XyTt(e, t, n) {
    async function l() {
      return (
        await Promise.all([
          n.e(967847),
          n.e(877700),
          n.e(426774),
          n.e(363341),
          n.e(247053),
          n.e(487209),
          n.e(471673),
          n.e(660103),
          n.e(534136),
          n.e(337938),
          n.e(73757),
          n.e(67941),
          n.e(350075),
          n.e(209539),
        ]).then(n.bind(n, "zQB1"))
      ).CreditPurchasePage
    }
    n.d(
      t,
      {},
      {
        At: async function () {
          return (await Promise.all([n.e(426774), n.e(58911)]).then(n.bind(n, "ZaEi"))).openRenewalHeaderAction
        },
        Bh: async function () {
          return (await Promise.all([n.e(800577), n.e(284877)]).then(n.bind(n, "ytA8")))
            .SubscriptionPaymentRecoveryEntrypoint
        },
        Bs: async function () {
          return (
            await Promise.all([
              n.e(967847),
              n.e(877700),
              n.e(426774),
              n.e(363341),
              n.e(247053),
              n.e(487209),
              n.e(471673),
              n.e(660103),
              n.e(534136),
              n.e(337938),
              n.e(73757),
              n.e(67941),
              n.e(350075),
              n.e(928735),
              n.e(719216),
              n.e(51541),
            ]).then(n.bind(n, "mAkj"))
          ).PurchasePage
        },
        Ci: async function () {
          return (await Promise.all([n.e(800577), n.e(486447)]).then(n.bind(n, "FKCB"))).openBeaconSubscriptionRenewal
        },
        Eq: async function () {
          return (
            await Promise.all([
              n.e(157963),
              n.e(673156),
              n.e(967847),
              n.e(877700),
              n.e(836862),
              n.e(487209),
              n.e(471673),
              n.e(660103),
              n.e(534136),
              n.e(337938),
              n.e(306787),
              n.e(826589),
            ]).then(n.bind(n, "GRIK"))
          ).OfferPage
        },
        Gi: async function () {
          let [e, t] = await Promise.all([
            Promise.all([n.e(426774), n.e(247053), n.e(393623), n.e(943025)]).then(n.bind(n, "Rh1G")),
            n.e(451779).then(n.bind(n, "c6ZW")),
          ])
          return {
            DelinquentUpgradeDialog: e.DelinquentUpgradeDialog,
            prepareDelinquentUpgrade: t.prepareDelinquentUpgrade,
          }
        },
        Hm: async function () {
          return (
            await Promise.all([n.e(426774), n.e(247053), n.e(393623), n.e(39324), n.e(908211)]).then(n.bind(n, "pIng"))
          ).GoRetentionOffer
        },
        Hu: async function () {
          return (
            await Promise.all([
              n.e(967847),
              n.e(877700),
              n.e(487209),
              n.e(471673),
              n.e(660103),
              n.e(534136),
              n.e(337938),
              n.e(800577),
              n.e(928735),
              n.e(686904),
              n.e(477975),
              n.e(257362),
              n.e(600911),
            ]).then(n.bind(n, "CBAP"))
          ).CheckoutSuccessPage
        },
        KP: async function () {
          return (
            await Promise.all([
              n.e(967847),
              n.e(877700),
              n.e(363341),
              n.e(247053),
              n.e(487209),
              n.e(471673),
              n.e(660103),
              n.e(534136),
              n.e(337938),
              n.e(73757),
              n.e(67941),
              n.e(118709),
            ]).then(n.bind(n, "eMSV"))
          ).CheckoutPage
        },
        Nb: async function () {
          return (await Promise.all([n.e(247053), n.e(258679)]).then(n.bind(n, "ebvx"))).AddPaymentMethodDialog
        },
        Pv: async function () {
          return (await Promise.all([n.e(800577), n.e(947479)]).then(n.bind(n, "XLOU"))).SubscriptionPaymentAnnouncement
        },
        QA: async function (e = !1) {
          let t = Promise.all([
              n.e(967847),
              n.e(877700),
              n.e(487209),
              n.e(471673),
              n.e(660103),
              n.e(534136),
              n.e(337938),
              n.e(73757),
              n.e(928735),
              n.e(719216),
              n.e(349829),
            ]).then(n.bind(n, "ORmu")),
            o = Promise.all([t, l()]).then(([e]) => e)
          return (await (e ? Promise.race([t, o]) : o)).PricingCheckoutPreparation
        },
        St: async function () {
          return (
            await Promise.all([
              n.e(157963),
              n.e(673156),
              n.e(967847),
              n.e(877700),
              n.e(363341),
              n.e(836862),
              n.e(247053),
              n.e(487209),
              n.e(471673),
              n.e(660103),
              n.e(534136),
              n.e(337938),
              n.e(73757),
              n.e(67941),
              n.e(101797),
            ]).then(n.bind(n, "wAmY"))
          ).PaypalPurchasePage
        },
        VC: async function () {
          return (await Promise.all([n.e(426774), n.e(247053), n.e(393623), n.e(548081)]).then(n.bind(n, "RzoY")))
            .PricingSubscriptionUpdateDialog
        },
        _n: async function () {
          return (await Promise.all([n.e(316290), n.e(835434)]).then(n.bind(n, "aK3F"))).AutoTopOffPaymentMethodField
        },
        am: async function () {
          return (
            await Promise.all([n.e(157963), n.e(673156), n.e(836862), n.e(247053), n.e(981372)]).then(n.bind(n, "Ba0x"))
          ).SubscriptionManagementPage
        },
        c3: async function () {
          return (
            await Promise.all([
              n.e(967847),
              n.e(877700),
              n.e(487209),
              n.e(471673),
              n.e(660103),
              n.e(534136),
              n.e(337938),
              n.e(997661),
            ]).then(n.bind(n, "QKNm"))
          ).ResetPurchasePage
        },
        d3: async function () {
          return (await n.e(684372).then(n.bind(n, "jCCd"))).SubscriptionPlatformDialog
        },
        gI: async function () {
          return Promise.all([n.e(426774), n.e(894119)]).then(n.bind(n, "AZCS"))
        },
        hu: async function () {
          return (await Promise.all([n.e(426774), n.e(482985), n.e(518143)]).then(n.bind(n, "xaC3")))
            .PlanDowngradeDialog
        },
        kP: async function () {
          return (await Promise.all([n.e(800577), n.e(904983)]).then(n.bind(n, "DUmr"))).BusinessSeatTypeDescription
        },
        loadBillingBeaconAction: async function () {
          return (await Promise.all([n.e(800577), n.e(486447)]).then(n.bind(n, "FKCB"))).openBillingBeaconAction
        },
        nw: async function () {
          return (
            await Promise.all([n.e(157963), n.e(673156), n.e(836862), n.e(851321), n.e(429577)]).then(n.bind(n, "vPrB"))
          ).GiftCardRedemptionPage
        },
        q4: l,
        t: async function () {
          return (
            await Promise.all([
              n.e(967847),
              n.e(877700),
              n.e(363341),
              n.e(247053),
              n.e(487209),
              n.e(471673),
              n.e(660103),
              n.e(534136),
              n.e(337938),
              n.e(73757),
              n.e(67941),
              n.e(237876),
            ]).then(n.bind(n, "tZuK"))
          ).CreateWorkspacePage
        },
        vc: async function () {
          return (await Promise.all([n.e(800577), n.e(947479)]).then(n.bind(n, "XLOU"))).PersonalPaymentRecoverySource
        },
        xk: async function () {
          return (
            await Promise.all([n.e(107421), n.e(993374), n.e(961657), n.e(426774), n.e(247053), n.e(664717)]).then(
              n.bind(n, "nUYz"),
            )
          ).ConsumerBillingSettings
        },
        xn: async function () {
          return (
            await Promise.all([
              n.e(967847),
              n.e(877700),
              n.e(487209),
              n.e(471673),
              n.e(660103),
              n.e(534136),
              n.e(464331),
            ]).then(n.bind(n, "sK2C"))
          ).CheckoutVerifyPage
        },
      },
    )
  },
  Eo5f(e, t, n) {
    n.d(t, { X: () => o })
    var l = n.p + "assets/orbit-ringing.02a31cd5e8.wav"
    function o() {
      let e, t
      try {
        e = new Audio(l)
      } catch {
        return () => {}
      }
      let n = () => {
          ;(clearTimeout(t), (e.onended = null), (e.onerror = null), e.pause())
        },
        o = () => {
          try {
            e.play().catch(n)
          } catch {
            n()
          }
        }
      return (
        (e.onended = () => {
          t = setTimeout(o, 3e3)
        }),
        (e.onerror = n),
        o(),
        n
      )
    }
  },
  H7Ld(e, t, n) {
    var l = n("YWcr"),
      o = n("MX6A")
    n.d(
      t,
      {},
      {
        Dy: function (e) {
          return e?.map((e) => e.trim()).find((e) => e.length > 0) ?? null
        },
        KH: function ({ defaultPrompt: e, pluginDisplayName: t, pluginId: n }) {
          let r = `[@${t}](${(0, o.b4)((0, l.vt)(n))})`
          return `${r} ${e?.trim() ?? ""}`
        },
        h0: "deep-research-workflow@openai-curated-remote",
      },
    )
  },
  j44z(e, t, n) {
    var l = n("QosV"),
      o = n("zTeN"),
      r = n("OeLR"),
      i = n("Xvtr"),
      a = n("zd8w"),
      s = n("Dgwo"),
      d = n("tl5a"),
      u = n("wCOm"),
      c = n("EOo5")
    n("njX7")
    var f = n("jRfV"),
      m = n("qcLg"),
      g = n("GaA7"),
      h = n("OWtl"),
      p = n("kfGJ"),
      v = n("OMIV"),
      w = n("rvFo"),
      y = n("fNL0"),
      b = n("B81s"),
      P = n("dPoV"),
      _ = n("Q4dB"),
      I = n("Q3tq"),
      C = n("pXZM")
    let M = (0, o.vU)(
      h.u,
      (
        {
          additionalAvailableModels: e,
          authMethod: t,
          enabledReasoningEfforts: n,
          hostId: l,
          includeUltraReasoningEffort: o = !0,
          limit: a = 100,
          specialty: c,
          teamCatalog: h,
        },
        { get: y, queryClient: C, scope: M },
      ) => {
        let { data: S } = y(b.I2, l, { enabled: !1 }),
          E = null == S ? null : (0, u.Y$)(S.config),
          A = (0, u.cc)(E),
          T = "string" == typeof E?.model_provider ? E.model_provider : null,
          L = "string" == typeof E?.model_catalog_json ? E.model_catalog_json : null,
          x = null != h,
          U = "loading" === h ? null : h,
          R = g.appServices?.daybreakPreferences != null && l === p.fI && "apikey" === t,
          k = R ? y(f.i)?.apiKeySession : void 0,
          D = null != k && y(m.dK, l),
          V = (0, _.o)(l, t, a, R ? (k ?? "unavailable") : void 0),
          j = null == n ? y(I.pN) : new Set([...n, "persistent"]),
          B = y(P.t),
          q = o && y(v.JW, "1186680773")
        return {
          queryKey: x ? ["models", "list", l, "team", h] : [...V, ...(A ? [T] : []), ...(null == L ? [] : [L])],
          enabled: x ? U?.accountId != null && null != U.userId : y(d.Dj).includes(l),
          refetchOnWindowFocus: !0,
          staleTime: w.D.FIVE_MINUTES,
          queryFn: async ({ queryKey: e, signal: t }) => {
            let n = null == C.getQueryData(e) ? "interactive" : "background"
            return (
              A && C.removeQueries({ exact: !0, queryKey: V }),
              (0, s.V)(M, l).sendRequest("model/list", { includeHidden: !0, cursor: null, limit: a }, { priority: n })
            )
          },
          select: ({ data: n, isTeamCatalog: l = !1 }) => ({
            ...(0, i.a)({
              additionalAvailableModels: new Set(e),
              apiKeyDaybreakSupported: D,
              authMethod: t,
              availableModels: B.availableModels,
              defaultModel: B.defaultModel,
              enabledReasoningEfforts: j,
              hasConfiguredModelCatalog: (0, r.bo)(E),
              includeUltraReasoningEffort: q,
              isCustomModelProvider: A,
              models: null == c ? n : n.filter((e) => e.modelSpecialty === c),
              useHiddenModels: B.useHiddenModels,
            }),
            isTeamCatalog: l,
          }),
        }
      },
      { key: (e) => JSON.stringify(e) },
    )
    function S(e, t) {
      return e ?? p.fI
    }
    n.d(
      t,
      {},
      {
        Rt: function (e) {
          let t = e.toLowerCase()
          return t.includes("cyber") || t.includes("daybreak")
        },
        SO: function (e) {
          return "pending" !== e
        },
        SV: M,
        Ym: function (e) {
          let t,
            n,
            r,
            i,
            s = (0, l.c)(16),
            d = (0, a.use)(C.X),
            u = null != (0, a.use)(y.r),
            f = e?.hostId
          s[0] !== u || s[1] !== f ? ((t = S(f, u)), (s[0] = u), (s[1] = f), (s[2] = t)) : (t = s[2])
          let m = t,
            g = (0, c.tn)(m),
            h = e?.enabled !== !1 && (null != d || g?.isLoading !== !0)
          s[3] !== e?.additionalAvailableModels
            ? ((n = Array.from(e?.additionalAvailableModels ?? []).sort()),
              (s[3] = e?.additionalAvailableModels),
              (s[4] = n))
            : (n = s[4])
          let p = g?.authMethod ?? null,
            v = e?.enabledReasoningEfforts,
            w = e?.includeUltraReasoningEffort !== !1,
            b = e?.limit,
            P = e?.specialty
          return (
            s[5] !== m ||
            s[6] !== n ||
            s[7] !== p ||
            s[8] !== v ||
            s[9] !== w ||
            s[10] !== b ||
            s[11] !== P ||
            s[12] !== d
              ? ((r = {
                  additionalAvailableModels: n,
                  authMethod: p,
                  enabledReasoningEfforts: v,
                  hostId: m,
                  includeUltraReasoningEffort: w,
                  limit: b,
                  specialty: P,
                  teamCatalog: d,
                }),
                (s[5] = m),
                (s[6] = n),
                (s[7] = p),
                (s[8] = v),
                (s[9] = w),
                (s[10] = b),
                (s[11] = P),
                (s[12] = d),
                (s[13] = r))
              : (r = s[13]),
            s[14] !== h ? ((i = { enabled: h }), (s[14] = h), (s[15] = i)) : (i = s[15]),
            (0, o._U)(M, r, i)
          )
        },
        _I: S,
      },
    )
  },
  pXZM(e, t, n) {
    let l = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { X: l })
  },
  kXFg(e, t, n) {
    n.d(t, {
      zW: () => I,
      jS: () => x,
      Kj: () => E,
      hW: () => L,
      uO: () => R,
      ml: () => T,
      Yc: () => U,
      VR: () => M,
      RJ: () => C,
      eE: () => S,
      jj: () => A,
    })
    var l = n("SRbQ"),
      o = n("zTeN"),
      r = n("DBCl"),
      i = n("Dgwo"),
      a = n("seW7"),
      s = n("SGsN"),
      d = n("svjy"),
      u = n("JQtI"),
      c = n("TYK1"),
      f = n("jiwy"),
      m = n("ho8L"),
      g = n("Eo5f"),
      h = n("GaA7"),
      p = n("OWtl"),
      v = n("WFY2"),
      w = n("HK0a"),
      y = n("ZG9f"),
      b = n("lICN"),
      P = n("Sd8U")
    class _ extends y.TF {
      source
      delivery
      locator = null
      constructor(e) {
        ;(super(), (this.source = e), (this.delivery = (0, b.Q)(e)))
      }
      async injectContext(e) {
        if (
          null != this.locator &&
          (this.locator.hostId !== e.hostId || this.locator.conversationId !== e.conversationId)
        )
          throw Error("Voice context belongs to another conversation")
        let t = (0, P.Xr)(this.source)
        if (null != t && t !== e.conversationId) throw Error("Voice context belongs to another composer")
        ;((this.locator = e),
          await this.delivery.inject((t) =>
            (0, i.V)(this.source, e.hostId).sendRequest("thread/inject_items", {
              threadId: e.conversationId,
              items: t,
            }),
          ))
      }
    }
    let I = "microphone_permission_denied",
      C = (0, o.vP)(p.u, null)
    async function M(e, { conversationId: t, hostId: n }) {
      let o = { stack: [], error: void 0, hasError: !1 }
      try {
        let r = (0, i.V)(e, n),
          s = (0, l.mS)(o, await r.getThreadListSummary(t), !1)
        if ((0, u.N)(s?.threadStartKind, s?.threadSource)) return !0
        let d = (0, l.mS)(o, await r.getFollowUpContext(t), !1)
        return (
          (0, a.Kv)(e, t, d) ||
          e.get(m.Rr, { hostId: n, threadId: t }) ||
          null != e.query.getData(c.cloudAeonByThreadId$, t) ||
          (await (0, c.F)(e, n, t, d))
        )
      } catch (e) {
        ;((o.error = e), (o.hasError = !0))
      } finally {
        ;(0, l.hk)(o)
      }
    }
    async function S(e, t, n, l, o) {
      ;(0, w.jz)(e, o)
      let i = e.get(C)
      if (null != i && "failed" !== i.phase && "composer_button_new_thread" !== n.source) return
      let a = "composer_button_existing_thread" === n.source && (await M(e, n.locator))
      if ((a && (0, f.qo)(e), e.get(C) !== i)) return
      let s = crypto.randomUUID(),
        d = null == t ? void 0 : new _(t)
      if (
        (e.set(C, {
          sourceComposerScope: t,
          handoffComplete:
            "composer_button_existing_thread" === n.source && "in-window" === n.preferredPresentationSurface,
          launchId: s,
          originPath: l,
          phase: "starting",
          request: n,
          workHomePolicyAcceptance: o,
        }),
        a || null != o)
      ) {
        let t
        t = e.watch((e) => {
          let n = e.get(C)
          n?.launchId !== s || "starting" !== n.phase
            ? t?.()
            : ((!a || e.get(f.VK)) && (0, w.BB)(e, o)) || x(e).catch(() => {})
        })
      }
      if ("composer_button_existing_thread" === n.source && "in-window" === n.preferredPresentationSurface) {
        let t = (0, g.X)()
        e.when((e) => {
          let t = e.get(C)
          return t?.launchId !== s || "starting" !== t.phase
        }).then(t)
      }
      try {
        let t = h.appServices.realtimeVoiceRuntime
        if (null == t) throw Error("Voice chat is unavailable")
        ;((0, w.jz)(e, o), await t.requestRealtimeStart(n, s, d))
      } catch (t) {
        if (e.get(C)?.launchId !== s) return
        throw (
          A(e, "failed", s, (0, r.Rt_)(t)),
          v.v.error("Unable to request realtime voice launch", { safe: {}, sensitive: { error: t } }),
          t
        )
      }
    }
    function E(e, t) {
      e.set(C, (e) =>
        e?.request !== t
          ? e
          : "composer_button_existing_thread" === t.source && "connected" === e.phase
            ? null
            : { ...e, handoffComplete: !0 },
      )
    }
    function A(e, t, n, l) {
      let o = e.get(C)
      if (
        o?.launchId === n &&
        "failed" !== o.phase &&
        "failed" === t &&
        "composer_button_existing_thread" === o.request.source &&
        "in-window" === o.request.preferredPresentationSurface
      ) {
        let t = e.get(d.g),
          n = l === I,
          r = h.appServices.systemPermissions,
          i = e
            .get(s.Id)
            .danger(
              n
                ? t.formatMessage({
                    id: "realtimeVoice.launch.microphonePermissionDeniedTitle",
                    defaultMessage: "Microphone permission denied",
                    description:
                      "Title shown when realtime voice chat cannot start because the operating system denied microphone permission",
                  })
                : t.formatMessage({
                    id: "realtimeVoice.launch.failedTitle",
                    defaultMessage: "Voice chat couldn’t start",
                    description: "Title shown when an optimistic realtime voice launch fails",
                  }),
              {
                id: "realtime-voice-launch-error",
                errorAnalytics: {
                  toastId: n ? "realtimeVoice.launch.microphonePermissionDenied" : "realtimeVoice.launch.failed",
                },
                duration: 1 / 0,
                hasCloseButton: !0,
                description: n
                  ? t.formatMessage({
                      id: "realtimeVoice.launch.microphonePermissionDeniedDescription",
                      defaultMessage: "Allow microphone access in system settings to start a voice chat",
                      description:
                        "Instructions shown when operating-system microphone permission must be enabled before starting realtime voice chat",
                    })
                  : l,
                primaryAction:
                  n && null != r
                    ? {
                        label: t.formatMessage({
                          id: "realtimeVoice.launch.openMicrophoneSettings",
                          defaultMessage: "Open system settings",
                          description:
                            "Button that opens the operating-system microphone privacy settings after microphone permission blocks realtime voice chat",
                        }),
                        onClick: async () => {
                          await r.openMicrophoneSettings().catch(() => {})
                        },
                      }
                    : {
                        label: t.formatMessage({
                          id: "realtimeVoice.launch.retry",
                          defaultMessage: "Try again",
                          description: "Button that retries a failed realtime voice launch",
                        }),
                        onClick: () => {
                          ;(i.close(),
                            S(e, o.sourceComposerScope, o.request, o.originPath, o.workHomePolicyAcceptance).catch(
                              () => {},
                            ))
                        },
                      },
              },
            )
      }
      e.set(C, (e) =>
        null == e || e.launchId !== n
          ? e
          : "idle" === t
            ? "failed" === e.phase
              ? e
              : null
            : "connected" === t && "composer_button_existing_thread" === e.request.source && e.handoffComplete
              ? null
              : { ...e, error: l, phase: t },
      )
    }
    function T(e, t, n) {
      return (
        e?.request.source === "composer_button_existing_thread" &&
        e.request.locator.conversationId === t &&
        e.request.locator.hostId === n
      )
    }
    function L(e, t) {
      e.set(C, (e) => (e?.request === t && "connected" === e.phase && e.handoffComplete ? null : e))
    }
    function x(e) {
      return (
        e.set(C, null),
        h.appServices.realtimeVoiceRuntime?.cancelRealtimeSessionStart().catch((e) => {
          throw (v.v.error("Unable to cancel realtime voice launch", { safe: {}, sensitive: { error: e } }), e)
        }) ?? Promise.resolve()
      )
    }
    function U(e, t, n) {
      return e === t || (null != n && e === (0, r._RT)(n))
    }
    function R(e, t) {
      return "inactive" !== e.phase && "main-thread" === e.preferredPresentationSurface
        ? e.locator.conversationId
        : t?.surface === "main-thread"
          ? t.locator.conversationId
          : null
    }
  },
  CpJm(e, t, n) {
    var l = n("DBCl")
    n.d(
      t,
      {},
      {
        d: function (e) {
          return null != e && "0.0.0" !== e && (0, l.rT6)(e, "0.147.0-alpha.6") >= 0
        },
      },
    )
  },
  KxVC(e, t, n) {
    var l = n("ABep"),
      o = n("QosV"),
      r = n("zTeN"),
      i = n("bVeK"),
      a = n("tZWf"),
      s = n("H2L8"),
      d = n("O68I"),
      u = n("dDkj")
    n.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            n,
            c,
            f,
            m = (0, o.c)(11),
            { className: g, hostId: h, size: p } = e,
            v = (0, r._U)(d.S, h),
            w = (0, u.P)(),
            y = (0, u._)(w)
          m[0] !== p ? ((t = null == p ? a.A : { 16: i.ZEl, 20: i.cfl }[p]), (m[0] = p), (m[1] = t)) : (t = m[1])
          let b = t
          return (
            m[2] !== v || m[3] !== y
              ? ((n = (0, s.uG)(v, y) ?? void 0), (m[2] = v), (m[3] = y), (m[4] = n))
              : (n = m[4]),
            m[5] !== n ? ((c = { color: n }), (m[5] = n), (m[6] = c)) : (c = m[6]),
            m[7] !== b || m[8] !== g || m[9] !== c
              ? ((f = (0, l.jsx)(b, { className: g, style: c })), (m[7] = b), (m[8] = g), (m[9] = c), (m[10] = f))
              : (f = m[10]),
            f
          )
        },
      },
    )
  },
  fnPc(e, t, n) {
    var l = n("QosV"),
      o = n("zTeN"),
      r = n("HZfM"),
      i = n("oYYx"),
      a = n("eFn4"),
      s = n("kx7U"),
      d = n("OWtl"),
      u = n("kfGJ"),
      c = n("fHlE")
    let f = (0, o.vP)(d.u, u.fI)
    function m(e, t) {
      e.set(f, t)
    }
    n.d(
      t,
      {},
      {
        D: function () {
          let e,
            t,
            n,
            g,
            h = (0, l.c)(20),
            p = (0, o.gh)(d.u),
            v = (0, r.Zp)(),
            [w, y] = (0, r.ok)(),
            b = null != (0, r.RQ)("/settings/*"),
            P = (0, r.RQ)("/settings/plugins-settings/hosts/:hostId/plugins/:pluginId"),
            _ = (0, o.Ul)(a.Xr),
            I = (0, o.Ul)(s.u8),
            C = (0, i.g)(I),
            M = (0, o.Ul)(f)
          h[0] !== P?.params.hostId || h[1] !== b || h[2] !== w || h[3] !== M
            ? ((e = P?.params.hostId || (b ? w.get("hostId")?.trim() : null) || M),
              (h[0] = P?.params.hostId),
              (h[1] = b),
              (h[2] = w),
              (h[3] = M),
              (h[4] = e))
            : (e = h[4])
          let S = e,
            E = _ ? C : void 0
          return (
            h[5] !== _ || h[6] !== C || h[7] !== S
              ? ((t = _ ? (0, c.B)(S, C) : u.fI), (h[5] = _), (h[6] = C), (h[7] = S), (h[8] = t))
              : (t = h[8]),
            h[9] !== P || h[10] !== b || h[11] !== v || h[12] !== p || h[13] !== w || h[14] !== y
              ? ((n = (e) => {
                  ;(m(p, e), null != P)
                    ? v(
                        {
                          pathname: "/settings/plugins-settings",
                          search: new URLSearchParams({ hostId: e }).toString(),
                        },
                        { replace: !0 },
                      )
                    : b && w.has("hostId") && y((t) => (t.set("hostId", e), t), { replace: !0 })
                }),
                (h[9] = P),
                (h[10] = b),
                (h[11] = v),
                (h[12] = p),
                (h[13] = w),
                (h[14] = y),
                (h[15] = n))
              : (n = h[15]),
            h[16] !== E || h[17] !== t || h[18] !== n
              ? ((g = { connectedRemoteConnections: E, selectedHostId: t, setSelectedHostId: n }),
                (h[16] = E),
                (h[17] = t),
                (h[18] = n),
                (h[19] = g))
              : (g = h[19]),
            g
          )
        },
        a: m,
      },
    )
  },
  fHlE(e, t, n) {
    var l = n("kfGJ")
    n.d(
      t,
      {},
      {
        B: function (e, t) {
          return null == t || e === l.fI || t.some((t) => t.hostId === e) ? e : l.fI
        },
        j: function (e, t) {
          return e.filter((e) =>
            t === l.fI ? "local" === e.projectKind : "remote" === e.projectKind && e.hostId === t,
          )
        },
      },
    )
  },
  Zt82(e, t, n) {
    function l(e) {
      let t = e.trim(),
        n = t.split(/\s+/).filter(Boolean)
      return n.length <= 3 ? t : n.slice(0, 3).join(" ")
    }
    n.d(
      t,
      {},
      {
        P: function (e, t) {
          if (t && t.trim().length > 0) return l(t)
          if (!e) return null
          let n = e.trim()
          if (!n) return null
          let o = n.split(/[/\\]+/).filter(Boolean)
          return l(o[o.length - 1] ?? n)
        },
      },
    )
  },
  ER5p(e, t, n) {
    var l = n("FQih")
    function o(e, t) {
      return e?.find((e) => e.model === t)
    }
    n.d(
      t,
      {},
      {
        SP: function (e, t) {
          return (0, l.eE)(e) && t.includes(e) ? e : "medium"
        },
        Zw: function ({ userSavedModelString: e, userSavedReasoningEffort: t, listModelsData: n }) {
          let r = e ? o(n?.models, e) : (n?.defaultModel ?? o(n?.models, l.UB)),
            i = r?.supportedReasoningEfforts?.map((e) => e.reasoningEffort),
            a = null != t && null != i && i.includes(t) ? t : r?.defaultReasoningEffort
          return {
            model: r ? r.model : (e ?? l.UB),
            reasoningEffort: a ?? t ?? n?.defaultModel?.defaultReasoningEffort ?? "medium",
            profile: null,
            isLoading: !1,
          }
        },
        bs: o,
      },
    )
  },
  MLC6(e, t, n) {
    var l = n("A8rN"),
      o = n("B09n")
    n.d(
      t,
      {},
      {
        t: async function (e) {
          ;(0, o.openWorkspaceFile)({
            path: e.path,
            cwd: null,
            hostId: e.hostId,
            target: await (async function (e) {
              try {
                return (await (0, l.Ht)({ cwd: null, hostId: e })).preferredTarget
              } catch {
                return
              }
            })(e.hostId),
            line: e.range?.start.line,
            column: e.range?.start.column,
          })
        },
      },
    )
  },
  SGof(e, t, n) {
    var l = n("LLIt"),
      o = n("TFzY")
    n.d(
      t,
      {},
      {
        D: function (e, t) {
          let n = e?.model ?? null,
            r = t?.models.find((e) => e.model === n) ?? t?.models.find((e) => `${e.model}-wm` === n),
            i = o.Ux.safeParse(e?.reasoningEffort)
          return { model: r?.model ?? n, reasoningEffort: i.success ? l.QW[i.data] : (e?.reasoningEffort ?? null) }
        },
        N: function (e, t, n) {
          let r = !(0, o.$)(e, t) && (0, o.$)(e, `${t}-wm`) ? `${t}-wm` : t,
            i = e.modelConfigBySlug?.[r]?.thinkingEfforts?.find((e) => l.QW[e.thinking_effort] === n)?.thinking_effort
          return { model: r, reasoningEffort: i ?? n }
        },
      },
    )
  },
  fNL0(e, t, n) {
    let l = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { r: l })
  },
}
//# sourceMappingURL=963873.bf36d0a6bb.js.map
