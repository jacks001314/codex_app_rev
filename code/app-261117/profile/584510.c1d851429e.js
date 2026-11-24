export const __rspack_esm_ids = [584510]
export const __webpack_modules__ = {
  Ab4H(e, t, s) {
    s.d(t, {
      k2: () => e$,
      S0: () => eU,
      M2: () => eE,
      Ay: () => eD,
      hD: () => eA,
      mr: () => eI,
      Tg: () => eZ,
      gA: () => v,
      cP: () => A,
      Hy: () => W,
      F3: () => Y,
      CH: () => z,
      d2: () => B,
      qw: () => f,
      Vc: () => ts,
      mh: () => _,
      di: () => e7,
      $T: () => O,
      BF: () => e2,
      rd: () => T,
      lq: () => tl,
      m3: () => eJ,
      J8: () => eQ,
      hz: () => eX,
      PY: () => e1,
      Ff: () => L,
      N_: () => U,
      sA: () => ey,
      sB: () => eC,
      LL: () => $,
      Nv: () => td,
      Fl: () => eb,
      LY: () => ej,
      WC: () => eM,
      SF: () => tc,
      Zw: () => E,
      $m: () => e5,
      br: () => g,
      H7: () => F,
      gj: () => eY,
      PK: () => eV,
      tl: () => eG,
      lk: () => M,
      UC: () => D,
      c: () => Z,
      Fb: () => e_,
      xh: () => l,
      jA: () => ta,
      XQ: () => tt,
      v_: () => e0.v,
      uJ: () => i,
      hs: () => a.hs,
      WX: () => eq,
      WD: () => a.WD,
      IY: () => a.IY,
      Hn: () => eT,
      SW: () => e4,
      Cq: () => eF,
      MH: () => e3,
      jM: () => ek,
    })
    var a = s("EdPG")
    function i(e) {
      return (
        e
          ?.filter(
            (e) =>
              "plugin" === e.type &&
              e.plugin_name?.trim() &&
              !e.plugin_id?.endsWith("@created-by-me-remote") &&
              !e.plugin_id?.endsWith("@dev-mode"),
          )
          .slice(0, 10) ?? []
      )
    }
    async function l(e, t) {
      let s,
        a,
        [i, l] = e.split("@"),
        r = "openai-curated-remote" === l ? "GLOBAL" : "workspace-directory" === l ? "WORKSPACE" : null
      if (!i || null == r) return null
      do {
        let e = await t({ name: i, scope: r, pageToken: s })
        for (let t of e.plugins)
          if (t.name === i && t.scope === r) {
            if (null != a && a.id !== t.id) return null
            a = t
          }
        s = e.nextPageToken ?? void 0
      } while (null != s)
      return a ?? null
    }
    var r = s("ABep"),
      o = s("QosV"),
      n = s("zd8w"),
      d = "surface-xo0c_F"
    let c = {
        0: "bg-[var(--profile-usage-level-0)]",
        1: "bg-[var(--profile-usage-level-1)]",
        2: "bg-[var(--profile-usage-level-2)]",
        3: "bg-[var(--profile-usage-level-3)]",
        4: "bg-[var(--profile-usage-level-4)]",
      },
      h = {
        "--profile-usage-level-0": "var(--color-chart-empty)",
        "--profile-usage-level-1": "var(--color-chart-sequential-1)",
        "--profile-usage-level-2": "var(--color-chart-sequential-2)",
        "--profile-usage-level-3": "var(--color-chart-sequential-3)",
        "--profile-usage-level-4": "var(--color-chart-sequential-4)",
      },
      u = {
        "--profile-usage-level-0": "var(--color-token-border-light, var(--border-extra-light, var(--border-light)))",
        "--profile-usage-level-4": "var(--color-chart-sequential-3)",
      }
    function f(e) {
      let t,
        s,
        a,
        i,
        l,
        n = (0, o.c)(17),
        { account: d, avatar: c, displayName: h, layout: u, username: f, usernameTextSizeClassName: p } = e,
        m = void 0 === u ? "default" : u,
        g = void 0 === p ? "text-base" : p,
        x = "inline-fields" === m ? "relative mb-2 flex" : "relative mb-4"
      n[0] !== c || n[1] !== x
        ? ((t = (0, r.jsx)("div", { className: x, children: c })), (n[0] = c), (n[1] = x), (n[2] = t))
        : (t = n[2])
      let v = `flex w-full items-center justify-center text-center text-token-text-primary ${"inline-fields" === m ? "identityHeading-Qvr47s min-h-9" : "heading-lg h-8"}`
      return (
        n[3] !== h
          ? ((s = (0, r.jsx)("span", { className: "block max-w-full min-w-0 truncate px-2", children: h })),
            (n[3] = h),
            (n[4] = s))
          : (s = n[4]),
        n[5] !== v || n[6] !== s
          ? ((a = (0, r.jsx)("div", {
              className: "flex w-full justify-center",
              children: (0, r.jsx)("h1", { className: v, children: s }),
            })),
            (n[5] = v),
            (n[6] = s),
            (n[7] = a))
          : (a = n[7]),
        n[8] !== d || n[9] !== m || n[10] !== f || n[11] !== g
          ? ((i =
              null != f || null != d
                ? (0, r.jsx)("div", {
                    className: `mt-1 flex min-h-7 items-center gap-1.5 font-normal text-token-text-tertiary ${"inline-fields" === m ? "leading-6" : "leading-5"} ${g}`,
                    children:
                      null != f
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("span", { className: "max-w-[240px] min-w-0 truncate", children: f }),
                              null != d
                                ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      (0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        className: "text-token-text-tertiary/50",
                                        children: "\xb7",
                                      }),
                                      d,
                                    ],
                                  })
                                : null,
                            ],
                          })
                        : d,
                  })
                : null),
            (n[8] = d),
            (n[9] = m),
            (n[10] = f),
            (n[11] = g),
            (n[12] = i))
          : (i = n[12]),
        n[13] !== t || n[14] !== a || n[15] !== i
          ? ((l = (0, r.jsxs)(r.Fragment, { children: [t, a, i] })), (n[13] = t), (n[14] = a), (n[15] = i), (n[16] = l))
          : (l = n[16]),
        l
      )
    }
    function p(e) {
      let t,
        s,
        a,
        i = (0, o.c)(7),
        { children: l, secondaryStats: n } = e
      return (
        i[0] !== l
          ? ((t = (0, r.jsx)("div", { className: "flex min-w-0 flex-1 items-center @2xl:contents", children: l })),
            (i[0] = l),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== n
          ? ((s =
              null != n
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        "aria-hidden": "true",
                        className: "mx-3 h-px shrink-0 bg-token-border-default @2xl:hidden",
                      }),
                      (0, r.jsx)("div", { className: "hidden @2xl:contents", children: (0, r.jsx)(g, {}) }),
                      (0, r.jsx)("div", { className: "flex min-w-0 flex-1 items-center @2xl:contents", children: n }),
                    ],
                  })
                : null),
            (i[2] = n),
            (i[3] = s))
          : (s = i[3]),
        i[4] !== t || i[5] !== s
          ? ((a = (0, r.jsx)("section", {
              className:
                "@container flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-token-border-default bg-transparent",
              children: (0, r.jsxs)("div", { className: "flex w-full flex-col @2xl:flex-row", children: [t, s] }),
            })),
            (i[4] = t),
            (i[5] = s),
            (i[6] = a))
          : (a = i[6]),
        a
      )
    }
    function m({
      label: e,
      value: t,
      textSizeClassName: s = "text-base",
      wrapLabel: a = !1,
      renderValue: i = (e) => e,
    }) {
      return (0, r.jsxs)("div", {
        className: `flex min-w-px flex-1 flex-col items-center justify-center overflow-hidden px-3 py-2.5 text-center font-normal ${s}`,
        children: [
          i((0, r.jsx)("div", { className: "w-full truncate leading-5 text-token-text-primary", children: t })),
          (0, r.jsx)("div", {
            className: `w-full leading-5 text-token-text-secondary ${a ? "wrap-anywhere" : "truncate"}`,
            children: e,
          }),
        ],
      })
    }
    function g() {
      let e,
        t = (0, o.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("div", {
              className: "my-3 w-px shrink-0 self-stretch rounded-sm bg-token-border-default",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function x(e) {
      let t,
        s,
        a,
        i,
        l,
        n = (0, o.c)(14),
        { children: d, controls: c, title: h, titleAction: u, titleTextSizeClassName: f } = e,
        p = `font-medium text-token-text-primary ${void 0 === f ? "text-base leading-5" : f}`
      return (
        n[0] !== p || n[1] !== h
          ? ((t = (0, r.jsx)("h2", { className: p, children: h })), (n[0] = p), (n[1] = h), (n[2] = t))
          : (t = n[2]),
        n[3] !== t || n[4] !== u
          ? ((s = (0, r.jsxs)("div", { className: "flex items-center gap-2", children: [t, u] })),
            (n[3] = t),
            (n[4] = u),
            (n[5] = s))
          : (s = n[5]),
        n[6] !== c
          ? ((a = (0, r.jsx)("div", { className: "flex items-center gap-3", children: c })), (n[6] = c), (n[7] = a))
          : (a = n[7]),
        n[8] !== s || n[9] !== a
          ? ((i = (0, r.jsxs)("div", {
              className: "flex items-center justify-between text-base leading-5",
              children: [s, a],
            })),
            (n[8] = s),
            (n[9] = a),
            (n[10] = i))
          : (i = n[10]),
        n[11] !== d || n[12] !== i
          ? ((l = (0, r.jsxs)("section", { className: "group/profile-section flex flex-col gap-4", children: [i, d] })),
            (n[11] = d),
            (n[12] = i),
            (n[13] = l))
          : (l = n[13]),
        l
      )
    }
    function v(e) {
      let t,
        s,
        a,
        i,
        l,
        n,
        c,
        h,
        u,
        f,
        p,
        m = (0, o.c)(128),
        {
          emptyInvocations: g,
          formatNumber: x,
          formatPercent: v,
          formatFastModeUsage: C,
          formatRuns: w,
          insights: k,
          layout: M,
          loadingInvocations: L,
          messages: N,
          onInvocationClick: S,
          renderFeatureValue: _,
          renderInvocationIcon: T,
          renderInvocationTooltip: F,
          renderReasoningEffort: A,
          renderSection: $,
          secondaryTextClassName: U,
          showInsights: D,
          showPlugins: E,
          textSizeClassName: Z,
        } = e,
        I = void 0 === C ? v : C,
        H = void 0 === M ? "columns" : M,
        P = void 0 === U ? "text-token-text-secondary" : U,
        R = void 0 === D || D,
        z = void 0 === E || E,
        B = void 0 === Z ? "text-base" : Z
      m[0] !== $ ? ((t = $ ?? b), (m[0] = $), (m[1] = t)) : (t = m[1])
      let O = t
      if (
        m[2] !== g ||
        m[3] !== I ||
        m[4] !== x ||
        m[5] !== v ||
        m[6] !== w ||
        m[7] !== k.fastModePercent ||
        m[8] !== k.invocations ||
        m[9] !== k.reasoningEffort ||
        m[10] !== k.reasoningEffortPercent ||
        m[11] !== k.skillsExplored ||
        m[12] !== k.totalSkillsUsed ||
        m[13] !== k.totalThreads ||
        m[14] !== H ||
        m[15] !== L ||
        m[16] !== N.ariaLabel ||
        m[17] !== N.fastModeLabel ||
        m[18] !== N.fastModeTooltip ||
        m[19] !== N.insightsTitle ||
        m[20] !== N.mostUsedReasoningLabel ||
        m[21] !== N.mostUsedReasoningTooltip ||
        m[22] !== N.none ||
        m[23] !== N.notUsed ||
        m[24] !== N.pluginsTitle ||
        m[25] !== N.skillsExploredLabel ||
        m[26] !== N.skillsExploredTooltip ||
        m[27] !== N.totalSkillsUsedLabel ||
        m[28] !== N.totalSkillsUsedTooltip ||
        m[29] !== N.totalThreadsLabel ||
        m[30] !== N.totalThreadsTooltip ||
        m[31] !== S ||
        m[32] !== _ ||
        m[33] !== T ||
        m[34] !== F ||
        m[35] !== A ||
        m[36] !== $ ||
        m[37] !== O ||
        m[38] !== P ||
        m[39] !== R ||
        m[40] !== z ||
        m[41] !== B
      ) {
        let e,
          t,
          o,
          f,
          p,
          b,
          C,
          M,
          U = k.invocations
            ?.filter(j)
            .filter((e) => "columns" === H || "plugin" === e.type)
            .slice(0, "stacked" === H ? 10 : void 0),
          D = k.fastModePercent,
          E = k.reasoningEffort,
          Z = k.reasoningEffortPercent,
          W = null != D && 0 !== D,
          Y = null != E && null != Z && 0 !== Z,
          V = null != k.totalSkillsUsed && 0 !== k.totalSkillsUsed,
          q = null == $ ? "gap-10" : ""
        ;((i = N.ariaLabel),
          (l = !R && !(z && null != U)),
          (n = `grid grid-cols-1 ${"columns" === H ? "gap-8 sm:grid-cols-2 sm:gap-10" : q} ${B}`))
        let G = `font-medium text-token-text-primary ${"stacked" === H ? "text-base leading-6" : `leading-5 ${B}`}`
        ;(m[50] !== N.insightsTitle || m[51] !== G
          ? ((e = (0, r.jsx)("h2", { className: G, children: N.insightsTitle })),
            (m[50] = N.insightsTitle),
            (m[51] = G),
            (m[52] = e))
          : (e = m[52]),
          m[53] !== D ||
          m[54] !== I ||
          m[55] !== W ||
          m[56] !== N.fastModeLabel ||
          m[57] !== N.fastModeTooltip ||
          m[58] !== N.notUsed ||
          m[59] !== _ ||
          m[60] !== P ||
          m[61] !== B
            ? ((t =
                void 0 !== D
                  ? (0, r.jsx)(y, {
                      isEmpty: !W,
                      label: N.fastModeLabel,
                      secondaryTextClassName: P,
                      textSizeClassName: B,
                      value: _({ children: null != D && 0 !== D ? I(D) : N.notUsed, tooltip: N.fastModeTooltip }),
                    })
                  : null),
              (m[53] = D),
              (m[54] = I),
              (m[55] = W),
              (m[56] = N.fastModeLabel),
              (m[57] = N.fastModeTooltip),
              (m[58] = N.notUsed),
              (m[59] = _),
              (m[60] = P),
              (m[61] = B),
              (m[62] = t))
            : (t = m[62]),
          m[63] !== v ||
          m[64] !== Y ||
          m[65] !== N.mostUsedReasoningLabel ||
          m[66] !== N.mostUsedReasoningTooltip ||
          m[67] !== N.notUsed ||
          m[68] !== E ||
          m[69] !== Z ||
          m[70] !== _ ||
          m[71] !== A ||
          m[72] !== P ||
          m[73] !== B
            ? ((o =
                void 0 !== E && void 0 !== Z
                  ? (0, r.jsx)(y, {
                      isEmpty: !Y,
                      label: N.mostUsedReasoningLabel,
                      secondaryTextClassName: P,
                      textSizeClassName: B,
                      value: _({
                        children: Y ? (0, r.jsxs)(r.Fragment, { children: [A(E), " \xb7 ", v(Z)] }) : N.notUsed,
                        tooltip: N.mostUsedReasoningTooltip,
                      }),
                    })
                  : null),
              (m[63] = v),
              (m[64] = Y),
              (m[65] = N.mostUsedReasoningLabel),
              (m[66] = N.mostUsedReasoningTooltip),
              (m[67] = N.notUsed),
              (m[68] = E),
              (m[69] = Z),
              (m[70] = _),
              (m[71] = A),
              (m[72] = P),
              (m[73] = B),
              (m[74] = o))
            : (o = m[74]),
          m[75] !== x ||
          m[76] !== k.skillsExplored ||
          m[77] !== N.none ||
          m[78] !== N.skillsExploredLabel ||
          m[79] !== N.skillsExploredTooltip ||
          m[80] !== _ ||
          m[81] !== P ||
          m[82] !== B
            ? ((f =
                null != k.skillsExplored
                  ? (0, r.jsx)(y, {
                      isEmpty: 0 === k.skillsExplored,
                      label: N.skillsExploredLabel,
                      secondaryTextClassName: P,
                      textSizeClassName: B,
                      value: _({
                        children: 0 === k.skillsExplored ? N.none : x(k.skillsExplored),
                        tooltip: N.skillsExploredTooltip,
                      }),
                    })
                  : null),
              (m[75] = x),
              (m[76] = k.skillsExplored),
              (m[77] = N.none),
              (m[78] = N.skillsExploredLabel),
              (m[79] = N.skillsExploredTooltip),
              (m[80] = _),
              (m[81] = P),
              (m[82] = B),
              (m[83] = f))
            : (f = m[83]),
          m[84] !== x ||
          m[85] !== V ||
          m[86] !== k.totalSkillsUsed ||
          m[87] !== N.none ||
          m[88] !== N.totalSkillsUsedLabel ||
          m[89] !== N.totalSkillsUsedTooltip ||
          m[90] !== _ ||
          m[91] !== P ||
          m[92] !== B
            ? ((p =
                null != k.totalSkillsUsed
                  ? (0, r.jsx)(y, {
                      isEmpty: !V,
                      label: N.totalSkillsUsedLabel,
                      secondaryTextClassName: P,
                      textSizeClassName: B,
                      value: _({ children: V ? x(k.totalSkillsUsed) : N.none, tooltip: N.totalSkillsUsedTooltip }),
                    })
                  : null),
              (m[84] = x),
              (m[85] = V),
              (m[86] = k.totalSkillsUsed),
              (m[87] = N.none),
              (m[88] = N.totalSkillsUsedLabel),
              (m[89] = N.totalSkillsUsedTooltip),
              (m[90] = _),
              (m[91] = P),
              (m[92] = B),
              (m[93] = p))
            : (p = m[93]),
          m[94] !== x ||
          m[95] !== k.totalThreads ||
          m[96] !== H ||
          m[97] !== N.none ||
          m[98] !== N.totalThreadsLabel ||
          m[99] !== N.totalThreadsTooltip ||
          m[100] !== _ ||
          m[101] !== P ||
          m[102] !== B
            ? ((b =
                "columns" === H && null != k.totalThreads
                  ? (0, r.jsx)(y, {
                      isEmpty: 0 === k.totalThreads,
                      label: N.totalThreadsLabel,
                      secondaryTextClassName: P,
                      textSizeClassName: B,
                      value: _({
                        children: 0 === k.totalThreads ? N.none : x(k.totalThreads),
                        tooltip: N.totalThreadsTooltip,
                      }),
                    })
                  : null),
              (m[94] = x),
              (m[95] = k.totalThreads),
              (m[96] = H),
              (m[97] = N.none),
              (m[98] = N.totalThreadsLabel),
              (m[99] = N.totalThreadsTooltip),
              (m[100] = _),
              (m[101] = P),
              (m[102] = B),
              (m[103] = b))
            : (b = m[103]),
          m[104] !== t || m[105] !== o || m[106] !== f || m[107] !== p || m[108] !== b
            ? ((C = (0, r.jsxs)("dl", { className: "flex flex-col gap-2", children: [t, o, f, p, b] })),
              (m[104] = t),
              (m[105] = o),
              (m[106] = f),
              (m[107] = p),
              (m[108] = b),
              (m[109] = C))
            : (C = m[109]),
          m[110] !== e || m[111] !== C
            ? ((M = (0, r.jsxs)("div", { className: "flex min-w-0 flex-col gap-4", children: [e, C] })),
              (m[110] = e),
              (m[111] = C),
              (m[112] = M))
            : (M = m[112]),
          m[113] !== O || m[114] !== R || m[115] !== M
            ? ((c = O({ visible: R, children: M })), (m[113] = O), (m[114] = R), (m[115] = M), (m[116] = c))
            : (c = m[116]),
          (a = O),
          (h = z && null != U),
          (u = "stacked" === H ? "order-first" : void 0),
          (s =
            null != U &&
            (0, r.jsxs)("div", {
              className: `flex min-w-0 flex-col gap-4 ${"stacked" === H ? "order-first" : ""}`,
              children: [
                (0, r.jsx)("h2", {
                  className: `font-medium text-token-text-primary ${"stacked" === H ? "text-base leading-6" : `leading-5 ${B}`}`,
                  children: N.pluginsTitle,
                }),
                null != L
                  ? L
                  : 0 === U.length
                    ? (0, r.jsx)("div", {
                        className: `flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-token-border-light leading-5 text-token-text-tertiary ${"stacked" === H ? "px-4 py-6" : ""} ${B}`,
                        children: g,
                      })
                    : (0, r.jsx)("ul", {
                        className: "stacked" === H ? "flex flex-wrap gap-x-4 gap-y-8 pb-6" : "flex flex-col gap-2",
                        children: U.map((e) => {
                          let t = "plugin" === e.type ? e.plugin_name?.trim() : e.skill_name?.trim()
                          if (!t) return null
                          let s = ("skill" === e.type && t.split(":").pop()) || t,
                            a = S ? "button" : "span",
                            i = (0, r.jsx)(a, {
                              type: S ? "button" : void 0,
                              onClick: S ? (t) => S(e, t.currentTarget) : void 0,
                              "aria-label": "stacked" === H ? s : void 0,
                              role: "stacked" !== H || S ? void 0 : "img",
                              tabIndex: "stacked" === H ? 0 : void 0,
                              className:
                                ("stacked" === H
                                  ? "group/plugin flex size-14 shrink-0 outline-none"
                                  : `flex size-6 shrink-0 items-center justify-center rounded-lg border border-token-border-light ${d}`) +
                                (S ? " cursor-interaction" : ""),
                              children: (0, r.jsx)("span", {
                                className:
                                  "stacked" === H
                                    ? `flex size-full items-center justify-center overflow-hidden rounded-2xl border border-token-border-default ${d} transition-transform duration-basic ease-out group-focus-visible/plugin:ring-2 group-focus-visible/plugin:ring-ring motion-safe:group-hover/plugin:-translate-y-1.5 motion-safe:group-focus-visible/plugin:-translate-y-1.5 motion-reduce:transition-none`
                                    : "contents",
                                children: T({ invocation: e, name: t }),
                              }),
                            })
                          return (0, r.jsxs)(
                            "li",
                            {
                              className:
                                "stacked" === H
                                  ? "flex items-start"
                                  : "flex h-6 min-w-0 items-center justify-between gap-3",
                              title: "stacked" === H && null == F ? s : void 0,
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "flex min-w-0 items-center gap-1.5",
                                  children: [
                                    "stacked" === H && null != F ? F({ children: i, name: s }) : i,
                                    "columns" === H
                                      ? (0, r.jsxs)("span", {
                                          className: `min-w-0 truncate leading-5 text-token-text-primary ${B}`,
                                          children: ["plugin" === e.type ? "@" : "$", s],
                                        })
                                      : null,
                                  ],
                                }),
                                "columns" === H
                                  ? (0, r.jsx)("span", {
                                      className: `shrink-0 leading-5 tabular-nums ${P} ${B}`,
                                      children: w(e.usage_count),
                                    })
                                  : null,
                              ],
                            },
                            `${e.type}:${e.plugin_id ?? e.plugin_name ?? ""}:${e.skill_id ?? e.skill_name ?? ""}`,
                          )
                        }),
                      }),
              ],
            })),
          (m[2] = g),
          (m[3] = I),
          (m[4] = x),
          (m[5] = v),
          (m[6] = w),
          (m[7] = k.fastModePercent),
          (m[8] = k.invocations),
          (m[9] = k.reasoningEffort),
          (m[10] = k.reasoningEffortPercent),
          (m[11] = k.skillsExplored),
          (m[12] = k.totalSkillsUsed),
          (m[13] = k.totalThreads),
          (m[14] = H),
          (m[15] = L),
          (m[16] = N.ariaLabel),
          (m[17] = N.fastModeLabel),
          (m[18] = N.fastModeTooltip),
          (m[19] = N.insightsTitle),
          (m[20] = N.mostUsedReasoningLabel),
          (m[21] = N.mostUsedReasoningTooltip),
          (m[22] = N.none),
          (m[23] = N.notUsed),
          (m[24] = N.pluginsTitle),
          (m[25] = N.skillsExploredLabel),
          (m[26] = N.skillsExploredTooltip),
          (m[27] = N.totalSkillsUsedLabel),
          (m[28] = N.totalSkillsUsedTooltip),
          (m[29] = N.totalThreadsLabel),
          (m[30] = N.totalThreadsTooltip),
          (m[31] = S),
          (m[32] = _),
          (m[33] = T),
          (m[34] = F),
          (m[35] = A),
          (m[36] = $),
          (m[37] = O),
          (m[38] = P),
          (m[39] = R),
          (m[40] = z),
          (m[41] = B),
          (m[42] = s),
          (m[43] = a),
          (m[44] = i),
          (m[45] = l),
          (m[46] = n),
          (m[47] = c),
          (m[48] = h),
          (m[49] = u))
      } else ((s = m[42]), (a = m[43]), (i = m[44]), (l = m[45]), (n = m[46]), (c = m[47]), (h = m[48]), (u = m[49]))
      return (
        m[117] !== s || m[118] !== a || m[119] !== h || m[120] !== u
          ? ((f = a({ visible: h, className: u, children: s })),
            (m[117] = s),
            (m[118] = a),
            (m[119] = h),
            (m[120] = u),
            (m[121] = f))
          : (f = m[121]),
        m[122] !== i || m[123] !== l || m[124] !== n || m[125] !== c || m[126] !== f
          ? ((p = (0, r.jsxs)("section", { "aria-label": i, "aria-hidden": l, className: n, children: [c, f] })),
            (m[122] = i),
            (m[123] = l),
            (m[124] = n),
            (m[125] = c),
            (m[126] = f),
            (m[127] = p))
          : (p = m[127]),
        p
      )
    }
    function b(e) {
      let { children: t, visible: s } = e
      return s ? t : null
    }
    function y(e) {
      let t,
        s,
        a,
        i = (0, o.c)(10),
        { isEmpty: l, label: n, secondaryTextClassName: d, textSizeClassName: c, value: h } = e,
        u = `flex h-6 min-w-0 items-center justify-between gap-3 leading-5 ${c}`,
        f = `${d} min-w-0 truncate`
      i[0] !== n || i[1] !== f
        ? ((t = (0, r.jsx)("dt", { className: f, children: n })), (i[0] = n), (i[1] = f), (i[2] = t))
        : (t = i[2])
      let p = `shrink-0 tabular-nums ${l ? "text-token-text-tertiary" : "text-token-text-primary"}`
      return (
        i[3] !== p || i[4] !== h
          ? ((s = (0, r.jsx)("dd", { className: p, children: h })), (i[3] = p), (i[4] = h), (i[5] = s))
          : (s = i[5]),
        i[6] !== u || i[7] !== t || i[8] !== s
          ? ((a = (0, r.jsxs)("div", { className: u, children: [t, s] })),
            (i[6] = u),
            (i[7] = t),
            (i[8] = s),
            (i[9] = a))
          : (a = i[9]),
        a
      )
    }
    function C(e) {
      let t,
        s = (0, o.c)(2),
        { level: a, variant: i } = e,
        l = void 0 === i ? "default" : i,
        n = c[a]
      "barHovered" === l
        ? (n = "bg-[var(--color-chart-sequential-4)]")
        : "emptyBarHovered" === l &&
          (n = "bg-[color-mix(in_srgb,var(--profile-usage-level-4)_14%,var(--profile-usage-level-0))]")
      let d = `pointer-events-none size-full rounded-[4px] cell-C3RWL2 ${n}`
      return (s[0] !== d ? ((t = (0, r.jsx)("div", { className: d })), (s[0] = d), (s[1] = t)) : (t = s[1]), t)
    }
    function j(e) {
      return null != e.usage_count && ("plugin" === e.type ? !!e.plugin_name?.trim() : !!e.skill_name?.trim())
    }
    function w(e) {
      let t,
        s,
        i,
        l,
        d,
        c,
        f = (0, o.c)(15),
        {
          dailyChats: p,
          dailyUsage: m,
          intl: g,
          metric: x,
          preAggregated: v,
          renderTooltip: b,
          todayIso: y,
          tooltipLayout: j,
          view: w,
        } = e,
        M = void 0 === x ? "tokens" : x,
        L = void 0 !== v && v,
        N = void 0 === j ? "inline" : j,
        S = { dailyUsage: m, todayIso: y, aggregation: L && "cumulative" === w ? "last" : "sum" },
        _ = (0, a.D2)({ ...S, preAggregated: L, dailyChats: "activity" === M ? p : void 0, view: w })
      f[0] !== y ? ((t = (0, a.pX)(y)), (f[0] = y), (f[1] = t)) : (t = f[1])
      let T = t,
        F = "daily" === w ? a.z5 : L || "weekly" === w ? a.YY : a.$f,
        A = F(S),
        $ = "activity" === M && null != p ? F({ ...S, dailyUsage: p }) : void 0,
        U = L && "weekly" === w ? new Map(m.map(k)) : void 0,
        [D, E] = (0, n.useState)(null)
      f[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (e, t) => {
            E((s) => (t ? e : s === e ? null : s))
          }),
          (f[2] = s))
        : (s = f[2])
      let Z = s,
        I = (e, t, s) => {
          let a = {
              date: g.formatDate(new Date(`${U?.get(s) ?? s}T00:00:00.000Z`), {
                day: "numeric",
                month: "short",
                timeZone: "UTC",
                year: "daily" !== w || s.slice(0, 4) !== y.slice(0, 4) ? "numeric" : void 0,
              }),
              tokens: g.formatNumber(A[t] ?? 0, { notation: "compact", maximumFractionDigits: 1 }),
            },
            i =
              "stacked" === N
                ? g.formatMessage(
                    {
                      id: "chatgpt.profile.usage.tooltip.summary_multiline",
                      defaultMessage:
                        "{view, select, daily {{date}} weekly {Week of {date}} other {Through week of {date}}}{lineBreak}{metric, select, activity {{chats, plural, one {# chat} other {# chats}}{lineBreak}{tokens} tokens} chats {{chats, plural, one {# chat} other {# chats}}} other {{tokens} tokens}}",
                      description:
                        "Small popup describing a day or week in a ChatGPT profile's activity chart. Show the date or period first, then each count on its own line. For example, combined activity reads 'May 13', then '12 chats', then '4K tokens' on three separate lines. The lineBreak placeholder starts a new line; preserve it between the date and counts and between counts. The metric selector chooses what to show: activity includes both counts, chats includes only the chat count, and other includes only tokens. The UI calls individual messages sent by the user 'chats'; the chats placeholder supplies this count, not the number of entire conversations. Tokens are small pieces of text processed by the AI, not money or credits. The date and tokens placeholders are already formatted for the reader's language; for example, 4K means 4,000. Dates use UTC (the worldwide time reference), not the reader's local time zone. The view selector chooses the period: daily shows the date alone; weekly means the week starting on that date; other means the running total from the start of the chart through the selected week, including earlier weeks. The plural expression chooses the appropriate form of 'chat'; # inserts the number of chats. Preserve placeholders and selector names; translate the wording and use the plural forms appropriate for your language. Keep chats and tokens separate; never add them together.",
                    },
                    { ...a, lineBreak: "\n", chats: "chats" === M ? (A[t] ?? 0) : ($?.[t] ?? 0), metric: M, view: w },
                  )
                : "activity" === M
                  ? g.formatMessage(
                      {
                        id: "chatgpt.profile.usage.tooltip.activity",
                        defaultMessage:
                          "{view, select, daily {{chats, plural, one {# chat} other {# chats}} \xb7 {tokens} tokens on {date}} weekly {{chats, plural, one {# chat} other {# chats}} \xb7 {tokens} tokens on week of {date}} other {{chats, plural, one {# chat} other {# chats}} \xb7 {tokens} tokens through week of {date}}}",
                        description:
                          "Tooltip for the unified profile activity chart, showing separate chat and token counts. chats is a nonnegative chat count, tokens is a localized compact token count, and date is a localized UTC date. view selects daily totals, weekly totals, or running totals from the start of the chart through that week.",
                      },
                      { ...a, chats: $?.[t] ?? 0, view: w },
                    )
                  : "chats" === M
                    ? g.formatMessage(
                        {
                          id: "chatgpt.profile.usage.tooltip.chats",
                          defaultMessage:
                            "{view, select, daily {{count, plural, one {# chat} other {# chats}} on {date}} weekly {{count, plural, one {# chat} other {# chats}} on week of {date}} other {{count, plural, one {# chat} other {# chats}} through week of {date}}}",
                          description:
                            "Tooltip for the profile chat activity chart. count is the nonnegative number of chats, date is a localized UTC date, and view selects daily, weekly, or cumulative totals.",
                        },
                        { count: A[t] ?? 0, date: a.date, view: w },
                      )
                    : "daily" === w
                      ? g.formatMessage(
                          {
                            id: "chatgpt.profile.usage.tooltip.daily",
                            defaultMessage: "{tokens} tokens on {date}",
                            description:
                              "Short tooltip and accessible label for a day in the user's profile Codex token-activity grid. Shown when hovering over a day, including days with no usage. {tokens} is a localized compact token count, possibly zero; {date} is the localized UTC calendar date, including the year for dates outside the current year.",
                          },
                          a,
                        )
                      : "weekly" === w
                        ? g.formatMessage(
                            {
                              id: "chatgpt.profile.usage.tooltip.weekly",
                              defaultMessage: "{tokens} tokens on week of {date}",
                              description:
                                "Short tooltip and accessible label for a column in the user's profile weekly Codex token-activity chart. {tokens} is the localized compact token total for that week, possibly zero; {date} is the localized UTC date and year of the week's first day.",
                            },
                            a,
                          )
                        : g.formatMessage(
                            {
                              id: "chatgpt.profile.usage.tooltip.cumulative",
                              defaultMessage: "{tokens} tokens through week of {date}",
                              description:
                                "Short tooltip and accessible label for a column in the user's profile cumulative Codex token-activity chart. {tokens} is the localized compact running token total from the start of the chart through that week, possibly zero; {date} is the localized UTC date and year of the week's first day. This is a cumulative total, not the total for only that week.",
                            },
                            a,
                          )
          return b({
            activity: "activity" === M && "stacked" === N ? { ...a, turns: $?.[t] ?? 0, view: w } : void 0,
            children: e,
            label: i,
            open: D === `${w}:${t}`,
            onOpenChange: (e) => Z(`${w}:${t}`, e),
          })
        }
      f[3] !== g || f[4] !== M
        ? ((i =
            "activity" === M
              ? g.formatMessage({
                  id: "chatgpt.profile.usage.chart.activity.aria_label",
                  defaultMessage: "Activity",
                  description:
                    "Accessible label for the unified profile chart showing chat and token activity. Daily and weekly views use the stronger of the independently scaled chat and token levels; cumulative accumulates unified weekly activity.",
                })
              : "chats" === M
                ? g.formatMessage({
                    id: "chatgpt.profile.usage.chart.chats.aria_label",
                    defaultMessage: "Chat activity",
                    description:
                      "Accessible label for the profile chart showing daily, weekly, or cumulative chat counts.",
                  })
                : g.formatMessage({
                    id: "chatgpt.profile.usage.chart.aria_label",
                    defaultMessage: "Codex token activity",
                    description:
                      "Accessible label for the colored grid displaying the current user's daily, weekly, or cumulative Codex token activity on their profile page.",
                  })),
          (f[3] = g),
          (f[4] = M),
          (f[5] = i))
        : (i = f[5])
      let H = `repeat(${T}, minmax(1px, 1fr))`
      if (
        (f[6] !== H ? ((l = { gridTemplateColumns: H }), (f[6] = H), (f[7] = l)) : (l = f[7]), f[8] !== g || f[9] !== y)
      ) {
        let e
        ;(f[11] !== g
          ? ((e = (e) =>
              (0, r.jsx)("span", { children: g.formatDate(new Date(e), { month: "short", timeZone: "UTC" }) }, e)),
            (f[11] = g),
            (f[12] = e))
          : (e = f[12]),
          (d = (0, a.rB)(y).map(e)),
          (f[8] = g),
          (f[9] = y),
          (f[10] = d))
      } else d = f[10]
      return (
        f[13] !== d
          ? ((c = (0, r.jsx)("div", {
              className: "flex items-center justify-between text-xs leading-4 text-token-text-tertiary",
              children: d,
            })),
            (f[13] = d),
            (f[14] = c))
          : (c = f[14]),
        (0, r.jsxs)("div", {
          className: "flex flex-col gap-2",
          role: "img",
          "aria-label": i,
          style: "daily" === w ? h : u,
          children: [
            (0, r.jsxs)("div", {
              className: "relative",
              children: [
                (0, r.jsx)("div", {
                  className: "grid grid-flow-col grid-rows-[repeat(7,minmax(1px,1fr))] gap-[3px]",
                  style: l,
                  children: _.map((e, t) => {
                    let s = (0, a.bo)(t, y)
                    if ("daily" === w && s > y) return null
                    let i = Math.floor(t / 7),
                      l = "daily" !== w,
                      o = l && D === `${w}:${i}`,
                      d = "default"
                    l && e > 0 ? (d = o ? "barHovered" : "default") : o && (d = "emptyBarHovered")
                    let c = (0, r.jsx)("div", {
                      className: "aspect-square w-full",
                      children: (0, r.jsx)("div", {
                        className: "size-full animatedCell-TSc30e",
                        style: { animationDelay: `${8 * i + (t % 7) * 12}ms` },
                        children: (0, r.jsx)(C, { level: e, variant: d }),
                      }),
                    })
                    return (0, r.jsx)(n.Fragment, { children: "daily" === w ? I(c, t, s) : c }, `${w}-${t}`)
                  }),
                }),
                "daily" !== w
                  ? (0, r.jsx)("div", {
                      className: "pointer-events-none absolute inset-0 flex",
                      children: A.map((e, t) =>
                        (0, r.jsx)(
                          n.Fragment,
                          {
                            children: I(
                              (0, r.jsx)("div", { className: "pointer-events-auto h-full min-w-px flex-1" }),
                              t,
                              (0, a.bo)(7 * t, y),
                            ),
                          },
                          `${w}:${t}`,
                        ),
                      ),
                    })
                  : null,
              ],
            }),
            c,
          ],
        })
      )
    }
    function k(e) {
      return [(0, a.ej)(e.date), e.date]
    }
    function M({
      activity: e,
      statsFallback: t,
      activityFallback: s,
      intl: a,
      isShowcaseLoading: i = !1,
      renderSection: l = ({ children: e, visible: t }) => (t ? e : null),
      renderStat: o = (e) => (0, r.jsx)(m, { ...e }),
      renderTooltip: d,
      showcase: c,
      showShowcase: h = !0,
      showActivityGraph: u = !0,
      showUsageStatistics: f = !0,
      summary: v,
      todayIso: b,
    }) {
      let [y, C] = (0, n.useState)("daily"),
        j = e?.[y],
        k = [
          {
            label: a.formatMessage({
              id: "profile.stats.lifetimeTokens",
              defaultMessage: "Lifetime tokens",
              description: "Label for lifetime token usage on the profile page",
            }),
            value:
              v?.totalTextTokens == null
                ? "\u2014"
                : a.formatNumber(v?.totalTextTokens, { notation: "compact", maximumFractionDigits: 1 }),
          },
          {
            label: a.formatMessage({
              id: "chatgpt.profile.v2.stats.peak_tokens.label",
              defaultMessage: "Peak tokens",
              description:
                "Short profile statistic label for the highest number of tokens used in one day by a user of Codex or ChatGPT Work.",
            }),
            value:
              v?.peakTokens == null
                ? "\u2014"
                : a.formatNumber(v?.peakTokens, { notation: "compact", maximumFractionDigits: 1 }),
          },
          ...(v?.longestTaskDurationMs != null
            ? [
                {
                  label: a.formatMessage({
                    id: "chatgpt.profile.v2.stats.longest_task.label",
                    defaultMessage: "Longest task",
                    description:
                      "Short profile statistic label for the duration of the user's longest-running agent turn in Codex or ChatGPT Work.",
                  }),
                  value: (function (e, t) {
                    let s = Math.floor(t / 36e5)
                    if (s >= 24) {
                      let t = Math.floor(s / 24),
                        a = s % 24
                      return 0 === a
                        ? e.formatMessage(
                            {
                              id: "profile.stats.durationDays",
                              defaultMessage: "{days}d",
                              description: "Compact longest task duration on a profile, in days",
                            },
                            { days: t },
                          )
                        : e.formatMessage(
                            {
                              id: "profile.stats.durationDaysHours",
                              defaultMessage: "{days}d {hours}h",
                              description: "Compact longest task duration on a profile, in days and hours",
                            },
                            { days: t, hours: a },
                          )
                    }
                    let a = Math.max(0, Math.round(t / 1e3))
                    if (a >= 3600) {
                      let t = Math.round(a / 60),
                        s = Math.floor(t / 60),
                        i = t % 60
                      return 0 === i
                        ? e.formatMessage(
                            {
                              id: "profile.stats.durationHours",
                              defaultMessage: "{hours}h",
                              description: "Formatted profile duration with hours",
                            },
                            { hours: s },
                          )
                        : e.formatMessage(
                            {
                              id: "profile.stats.durationHoursMinutes",
                              defaultMessage: "{hours}h {minutes}m",
                              description: "Formatted profile duration with hours and minutes",
                            },
                            { hours: s, minutes: i },
                          )
                    }
                    if (a >= 60) {
                      let t = Math.floor(a / 60),
                        s = a % 60
                      return 0 === s
                        ? e.formatMessage(
                            {
                              id: "profile.stats.durationMinutes",
                              defaultMessage: "{minutes}m",
                              description: "Formatted profile duration with minutes",
                            },
                            { minutes: t },
                          )
                        : e.formatMessage(
                            {
                              id: "profile.stats.durationMinutesSeconds",
                              defaultMessage: "{minutes}m {seconds}s",
                              description: "Formatted profile duration with minutes and seconds",
                            },
                            { minutes: t, seconds: s },
                          )
                    }
                    return e.formatMessage(
                      {
                        id: "profile.stats.durationSeconds",
                        defaultMessage: "{seconds}s",
                        description: "Formatted profile duration with seconds",
                      },
                      { seconds: a },
                    )
                  })(a, v.longestTaskDurationMs),
                },
              ]
            : []),
          {
            label: a.formatMessage({
              id: "profile.stats.longestStreak",
              defaultMessage: "Longest streak",
              description: "Label for longest usage streak on the profile page",
            }),
            value:
              v?.longestStreakDays == null
                ? "\u2014"
                : a.formatMessage(
                    {
                      id: "chatgpt.profile.v2.stats.days.value",
                      defaultMessage: "{days, plural, one {# day} other {# days}}",
                      description:
                        "Day count on the profile statistics row. The numeric placeholder days is a nonnegative integer.",
                    },
                    { days: v?.longestStreakDays },
                  ),
          },
          {
            label: a.formatMessage({
              id: "profile.stats.currentStreak",
              defaultMessage: "Current streak",
              description: "Label for current usage streak on the profile page",
            }),
            value:
              v?.currentStreakDays == null
                ? "\u2014"
                : a.formatMessage(
                    {
                      id: "chatgpt.profile.v2.stats.days.value",
                      defaultMessage: "{days, plural, one {# day} other {# days}}",
                      description:
                        "Day count on the profile statistics row. The numeric placeholder days is a nonnegative integer.",
                    },
                    { days: v?.currentStreakDays },
                  ),
          },
        ],
        L = k.length > 3 ? Math.ceil(k.length / 2) : k.length
      return (0, r.jsxs)(r.Fragment, {
        children: [
          l({
            visible: f,
            children: (0, r.jsx)(p, {
              secondaryStats:
                null != v && k.length > L
                  ? k
                      .slice(L)
                      .map(({ label: e, value: t }, s) =>
                        (0, r.jsxs)(
                          n.Fragment,
                          {
                            children: [
                              s > 0 ? (0, r.jsx)(g, {}) : null,
                              o({ label: e, value: t, textSizeClassName: "text-sm" }),
                            ],
                          },
                          e,
                        ),
                      )
                  : null,
              children:
                null == v
                  ? t
                  : k
                      .slice(0, L)
                      .map(({ label: e, value: t }, s) =>
                        (0, r.jsxs)(
                          n.Fragment,
                          {
                            children: [
                              s > 0 ? (0, r.jsx)(g, {}) : null,
                              o({ label: e, value: t, textSizeClassName: "text-sm" }),
                            ],
                          },
                          e,
                        ),
                      ),
            }),
          }),
          h && l({ visible: !0, children: c }),
          l({
            visible: u && !i,
            children: (0, r.jsx)(x, {
              titleTextSizeClassName: "text-base leading-6",
              title: a.formatMessage({
                id: "profile.tokenUsage.title",
                defaultMessage: "Token activity",
                description: "Heading above the token usage chart",
              }),
              controls: [
                [
                  "daily",
                  a.formatMessage({
                    id: "chatgpt.profile.v2.activity.period.daily",
                    defaultMessage: "Daily",
                    description:
                      "Profile activity chart button displaying individual days. Other options are Weekly and Cumulative.",
                  }),
                ],
                [
                  "weekly",
                  a.formatMessage({
                    id: "chatgpt.profile.v2.activity.period.weekly",
                    defaultMessage: "Weekly",
                    description:
                      "Profile activity chart button displaying weekly totals. Other options are Daily and Cumulative.",
                  }),
                ],
                [
                  "cumulative",
                  a.formatMessage({
                    id: "chatgpt.profile.v2.activity.period.cumulative",
                    defaultMessage: "Cumulative",
                    description:
                      "Profile token activity chart button displaying running token totals. Other options are Daily and Weekly.",
                  }),
                ],
              ].map(([e, t]) =>
                (0, r.jsx)(
                  "button",
                  {
                    type: "button",
                    "aria-pressed": y === e,
                    className: `cursor-pointer rounded-sm text-sm select-none focus-visible:outline focus-visible:outline-2 ${y === e ? "text-token-text-primary" : "text-token-text-secondary"}`,
                    onClick: () => C(e),
                    children: t,
                  },
                  e,
                ),
              ),
              children:
                null == j
                  ? s
                  : (0, r.jsx)(w, {
                      preAggregated: !0,
                      dailyUsage: j.tokens,
                      intl: a,
                      renderTooltip: d,
                      todayIso: b,
                      tooltipLayout: "stacked",
                      view: y,
                    }),
            }),
          }),
        ],
      })
    }
    function L(e) {
      let t,
        s,
        a,
        i,
        l,
        d,
        c,
        h,
        u,
        f,
        p = (0, o.c)(47),
        {
          intl: m,
          items: g,
          sitesFooter: v,
          skillsFooter: b,
          showSkills: y,
          empty: C,
          editAction: j,
          renderExpandButton: w,
        } = e,
        k = void 0 === y || y,
        [M, L] = (0, n.useState)("all"),
        [_, T] = (0, n.useState)(!1),
        F = k ? M : "site"
      if (p[0] !== F || p[1] !== C || p[2] !== _ || p[3] !== g || p[4] !== v || p[5] !== b) {
        let e, i
        ;(p[9] !== F ? ((e = (e) => "all" === F || e.kind === F), (p[9] = F), (p[10] = e)) : (e = p[10]),
          (a = g.filter(e)),
          p[11] !== F || p[12] !== v || p[13] !== b
            ? ((i =
                "site" === F
                  ? v
                  : "skill" === F
                    ? b
                    : null != v || null != b
                      ? (0, r.jsxs)(r.Fragment, { children: [v, b] })
                      : null),
              (p[11] = F),
              (p[12] = v),
              (p[13] = b),
              (p[14] = i))
            : (i = p[14]),
          (t = i),
          (s = a.length > 0 ? a.slice(0, !_ ? 6 : void 0).map(S) : null != t ? null : C),
          (p[0] = F),
          (p[1] = C),
          (p[2] = _),
          (p[3] = g),
          (p[4] = v),
          (p[5] = b),
          (p[6] = t),
          (p[7] = s),
          (p[8] = a))
      } else ((t = p[6]), (s = p[7]), (a = p[8]))
      let A = s
      if (g.length > 0 && 0 === a.length && null == t) {
        let e,
          t,
          s = "site" === F ? "status" : void 0
        ;(p[15] !== F || p[16] !== m
          ? ((e =
              "site" === F
                ? m.formatMessage({
                    id: "profile.showcase.sites.empty",
                    defaultMessage: "No sites to showcase yet",
                    description: "Empty Sites filter when the profile only has pinned skills",
                  })
                : m.formatMessage({
                    id: "chatgpt.profile.v2.showcase.skills.empty",
                    defaultMessage: "No skills to showcase yet",
                    description:
                      "Empty-state text under the Skills filter on the user's profile Showcase. No published skills are available.",
                  })),
            (p[15] = F),
            (p[16] = m),
            (p[17] = e))
          : (e = p[17]),
          p[18] !== s || p[19] !== e
            ? ((t = (0, r.jsx)("p", {
                className: "col-span-full text-sm text-token-text-secondary",
                role: s,
                children: e,
              })),
              (p[18] = s),
              (p[19] = e),
              (p[20] = t))
            : (t = p[20]),
          (A = t))
      }
      return (
        p[21] !== m
          ? ((i = m.formatMessage({
              id: "chatgpt.profile.v2.showcase.title",
              defaultMessage: "Showcase",
              description: "Heading above the signed-in user's featured creations on their profile.",
            })),
            (p[21] = m),
            (p[22] = i))
          : (i = p[22]),
        p[23] !== j || p[24] !== m || p[25] !== k
          ? ((l =
              null != j &&
              (0, r.jsxs)("span", {
                className:
                  "flex items-center gap-3 text-sm leading-5 text-token-text-tertiary opacity-0 group-focus-within/profile-section:opacity-100 group-hover/profile-section:opacity-100",
                children: [
                  j,
                  k &&
                    (0, r.jsx)("span", {
                      "aria-hidden": !0,
                      children: m.formatMessage({
                        id: "profile.showcase.edit.separator",
                        defaultMessage: "\xb7",
                        description:
                          "Decorative middle dot separating the inline Edit action from the Showcase filters on a profile.",
                      }),
                    }),
                ],
              })),
            (p[23] = j),
            (p[24] = m),
            (p[25] = k),
            (p[26] = l))
          : (l = p[26]),
        p[27] !== M || p[28] !== m || p[29] !== g.length || p[30] !== k
          ? ((d =
              k &&
              g.length > 0 &&
              (0, r.jsx)(r.Fragment, {
                children: [
                  [
                    "all",
                    m.formatMessage({
                      id: "chatgpt.profile.v2.showcase.filter.all",
                      defaultMessage: "All",
                      description: "Profile Showcase filter showing both Sites and Skills. Short button label.",
                    }),
                  ],
                  [
                    "site",
                    m.formatMessage({
                      id: "chatgpt.profile.v2.showcase.filter.sites",
                      defaultMessage: "Sites",
                      description:
                        "Profile Showcase filter showing websites created by the user. Sibling filters are All and Skills.",
                    }),
                  ],
                  [
                    "skill",
                    m.formatMessage({
                      id: "chatgpt.profile.v2.showcase.filter.skills",
                      defaultMessage: "Skills",
                      description:
                        "Profile Showcase filter showing reusable agent skills created by the user. Sibling filters are All and Sites.",
                    }),
                  ],
                ].map((e) => {
                  let [t, s] = e
                  return (0, r.jsx)(
                    "button",
                    {
                      type: "button",
                      "aria-pressed": M === t,
                      className: `cursor-pointer rounded-sm text-sm select-none focus-visible:outline focus-visible:outline-2 ${M === t ? "text-token-text-primary" : "text-token-text-secondary"}`,
                      onClick: () => {
                        ;(L(t), T(!1))
                      },
                      children: s,
                    },
                    t,
                  )
                }),
              })),
            (p[27] = M),
            (p[28] = m),
            (p[29] = g.length),
            (p[30] = k),
            (p[31] = d))
          : (d = p[31]),
        p[32] !== l || p[33] !== d
          ? ((c = (0, r.jsxs)(r.Fragment, { children: [l, d] })), (p[32] = l), (p[33] = d), (p[34] = c))
          : (c = p[34]),
        p[35] !== A || p[36] !== t
          ? ((h = (0, r.jsx)("div", {
              className: "@container",
              children: (0, r.jsxs)("div", {
                className: "grid grid-cols-1 gap-4 @md:grid-cols-2 @2xl:grid-cols-3",
                children: [A, t],
              }),
            })),
            (p[35] = A),
            (p[36] = t),
            (p[37] = h))
          : (h = p[37]),
        p[38] !== _ || p[39] !== w || p[40] !== a.length
          ? ((u =
              a.length > 6 &&
              (0, r.jsx)("div", {
                className: "flex justify-center",
                children: w({ expanded: _, onClick: () => T(N) }),
              })),
            (p[38] = _),
            (p[39] = w),
            (p[40] = a.length),
            (p[41] = u))
          : (u = p[41]),
        p[42] !== i || p[43] !== c || p[44] !== h || p[45] !== u
          ? ((f = (0, r.jsxs)(x, {
              titleTextSizeClassName: "text-base leading-6",
              title: i,
              controls: c,
              children: [h, u],
            })),
            (p[42] = i),
            (p[43] = c),
            (p[44] = h),
            (p[45] = u),
            (p[46] = f))
          : (f = p[46]),
        f
      )
    }
    function N(e) {
      return !e
    }
    function S(e) {
      return (0, r.jsx)(n.Fragment, { children: e.content }, e.id)
    }
    function _(e) {
      let t,
        s = (0, o.c)(2),
        { children: a } = e
      return (
        s[0] !== a
          ? ((t = (0, r.jsx)("div", {
              className: "page-G4NZp3",
              children: (0, r.jsx)("div", { className: "content-YkOWpf", children: a }),
            })),
            (s[0] = a),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function T(e) {
      let t,
        s = (0, o.c)(2),
        { children: a } = e
      return (
        s[0] !== a
          ? ((t = (0, r.jsx)("div", { className: "pt-10", children: a })), (s[0] = a), (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function F(e) {
      let t,
        s = (0, o.c)(2),
        { children: a } = e
      return (
        s[0] !== a
          ? ((t = (0, r.jsx)("span", {
              className: "block text-start text-xs leading-4 font-normal whitespace-pre-line",
              children: a,
            })),
            (s[0] = a),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function A(e) {
      let t,
        s = (0, o.c)(2),
        { children: a } = e
      return (
        s[0] !== a
          ? ((t = (0, r.jsx)("p", {
              className:
                "bio-i8TTOX mt-6 w-full max-w-105 self-center text-center text-sm leading-5 wrap-anywhere whitespace-pre-wrap select-text",
              children: a,
            })),
            (s[0] = a),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function $(e) {
      let t,
        s,
        a,
        i = (0, o.c)(8),
        { artwork: l, children: n, editAction: d } = e
      return (
        i[0] !== l
          ? ((t =
              "string" == typeof l
                ? (0, r.jsx)("img", { className: "h-24 w-32 object-contain", alt: "", src: l, draggable: !1 })
                : l),
            (i[0] = l),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== n
          ? ((s = (0, r.jsx)("p", { className: "text-sm", role: "status", children: n })), (i[2] = n), (i[3] = s))
          : (s = i[3]),
        i[4] !== d || i[5] !== t || i[6] !== s
          ? ((a = (0, r.jsxs)("div", {
              className:
                "showcaseEmptyState-WrrpWI col-span-full flex min-h-64 w-full flex-col items-center justify-center gap-4 rounded-2xl px-6 py-10 text-center select-none",
              children: [t, s, d],
            })),
            (i[4] = d),
            (i[5] = t),
            (i[6] = s),
            (i[7] = a))
          : (a = i[7]),
        a
      )
    }
    function U(e) {
      let t,
        s,
        a,
        i,
        l,
        n,
        d,
        c = (0, o.c)(20)
      c[0] !== e
        ? (({ ref: i, title: l, itemId: s, onClick: a, ...t } = e),
          (c[0] = e),
          (c[1] = t),
          (c[2] = s),
          (c[3] = a),
          (c[4] = i),
          (c[5] = l))
        : ((t = c[1]), (s = c[2]), (a = c[3]), (i = c[4]), (l = c[5]))
      let h = `card-npNRH5 ${"site" === t.kind ? "site-kMkmd8" : "skill-JIpdDK"}`
      return (
        c[6] !== t.description || c[7] !== t.icon || c[8] !== t.kind || c[9] !== t.preview || c[10] !== l
          ? ((n =
              "site" === t.kind
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", { className: "preview-vD5xo_", children: t.preview }),
                      (0, r.jsxs)("div", {
                        className: "titleOverlay-VEMAXO",
                        children: [
                          [0, 1, 2, 3].map((e) =>
                            (0, r.jsx)(
                              "div",
                              { "aria-hidden": !0, className: "titleBlur-kPEApL", children: t.preview },
                              e,
                            ),
                          ),
                          (0, r.jsx)("div", {
                            className: "titleGradient-oVMObV",
                            children: (0, r.jsx)("div", {
                              className: "truncate text-sm text-token-text-primary",
                              children: l,
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("span", { "aria-hidden": !0, className: "skillHover-nULnW4" }),
                      (0, r.jsxs)("div", {
                        className: "absolute inset-0 flex min-w-0 flex-col items-start gap-4 p-4",
                        children: [
                          t.icon,
                          (0, r.jsxs)("div", {
                            className: "flex min-h-0 w-full flex-col gap-1.5 overflow-hidden",
                            children: [
                              (0, r.jsx)("div", {
                                className: "shrink-0 truncate text-sm text-token-text-primary",
                                children: l,
                              }),
                              (0, r.jsx)("div", {
                                className: "line-clamp-2 text-sm text-token-text-secondary",
                                children: t.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })),
            (c[6] = t.description),
            (c[7] = t.icon),
            (c[8] = t.kind),
            (c[9] = t.preview),
            (c[10] = l),
            (c[11] = n))
          : (n = c[11]),
        c[12] !== t.kind || c[13] !== s || c[14] !== a || c[15] !== i || c[16] !== h || c[17] !== n || c[18] !== l
          ? ((d = (0, r.jsx)("button", {
              ref: i,
              className: h,
              title: l,
              type: "button",
              "data-profile-artifact-kind": t.kind,
              "data-profile-artifact-id": s,
              onClick: a,
              children: n,
            })),
            (c[12] = t.kind),
            (c[13] = s),
            (c[14] = a),
            (c[15] = i),
            (c[16] = h),
            (c[17] = n),
            (c[18] = l),
            (c[19] = d))
          : (d = c[19]),
        d
      )
    }
    function D(e) {
      let t,
        s,
        a,
        i = (0, o.c)(12),
        { aspectRatio: l, screenshotSrc: d, thumbnail: c, variant: h, size: u, viewMode: f } = e,
        p = void 0 === l ? "square" : l,
        m = void 0 === h ? "default" : h,
        g = void 0 === u ? "default" : u
      i[0] !== d ? ((t = { src: d, loaded: !1 }), (i[0] = d), (i[1] = t)) : (t = i[1])
      let [x, v] = (0, n.useState)(t)
      x.src !== d && v({ src: d, loaded: !1 })
      let b = !x.loaded && c
      return (
        i[2] !== x.loaded || i[3] !== d
          ? ((s =
              null != d &&
              (0, r.jsx)(
                "img",
                {
                  ref: (e) => {
                    e?.complete && e.naturalWidth > 0 && !x.loaded && v({ src: d, loaded: !0 })
                  },
                  alt: "",
                  loading: "lazy",
                  src: d,
                  "data-loaded": x.loaded,
                  onLoad: () => v({ src: d, loaded: !0 }),
                  onError: () => v({ src: d, loaded: !1 }),
                },
                d,
              )),
            (i[2] = x.loaded),
            (i[3] = d),
            (i[4] = s))
          : (s = i[4]),
        i[5] !== p || i[6] !== g || i[7] !== b || i[8] !== s || i[9] !== m || i[10] !== f
          ? ((a = (0, r.jsxs)("div", {
              className: "preview-mMqh9j",
              "data-view": f,
              "data-aspect": p,
              "data-variant": m,
              "data-size": g,
              children: [b, s],
            })),
            (i[5] = p),
            (i[6] = g),
            (i[7] = b),
            (i[8] = s),
            (i[9] = m),
            (i[10] = f),
            (i[11] = a))
          : (a = i[11]),
        a
      )
    }
    function E(e) {
      let t,
        s,
        a,
        i,
        l,
        d,
        c,
        h,
        u = (0, o.c)(24),
        {
          title: f,
          subtitle: p,
          screenshotSrc: m,
          previewAlt: g,
          fallback: x,
          openButton: v,
          actions: b,
          status: y,
        } = e,
        [C, j] = (0, n.useState)(!1)
      return (
        u[0] !== f
          ? ((t = (0, r.jsx)("div", { className: "title-uCc_jl", children: f })), (u[0] = f), (u[1] = t))
          : (t = u[1]),
        u[2] !== p
          ? ((s = (0, r.jsx)("div", { className: "subtitle-MS2coh", children: p })), (u[2] = p), (u[3] = s))
          : (s = u[3]),
        u[4] !== t || u[5] !== s
          ? ((a = (0, r.jsxs)("header", { className: "header-dpLlpU", children: [t, s] })),
            (u[4] = t),
            (u[5] = s),
            (u[6] = a))
          : (a = u[6]),
        u[7] !== x || u[8] !== C || u[9] !== g || u[10] !== m
          ? ((i = null == m || C ? x : (0, r.jsx)("img", { alt: g, src: m, onError: () => j(!0) })),
            (u[7] = x),
            (u[8] = C),
            (u[9] = g),
            (u[10] = m),
            (u[11] = i))
          : (i = u[11]),
        u[12] !== v
          ? ((l = v && (0, r.jsx)("div", { className: "openButton-mS9XiA", children: v })), (u[12] = v), (u[13] = l))
          : (l = u[13]),
        u[14] !== i || u[15] !== l
          ? ((d = (0, r.jsxs)("div", { className: "preview-KDII9I", children: [i, l] })),
            (u[14] = i),
            (u[15] = l),
            (u[16] = d))
          : (d = u[16]),
        u[17] !== b
          ? ((c = (0, r.jsx)("footer", { className: "actions-Ad8YyS", children: b })), (u[17] = b), (u[18] = c))
          : (c = u[18]),
        u[19] !== y || u[20] !== a || u[21] !== d || u[22] !== c
          ? ((h = (0, r.jsxs)("div", { className: "content-wO1o7g", children: [a, d, y, c] })),
            (u[19] = y),
            (u[20] = a),
            (u[21] = d),
            (u[22] = c),
            (u[23] = h))
          : (h = u[23]),
        h
      )
    }
    function Z(e) {
      let t,
        s,
        a,
        i,
        l,
        n,
        d,
        c,
        h,
        u = (0, o.c)(13)
      return (
        u[0] !== e ? (({ platform: t, ...s } = e), (u[0] = e), (u[1] = t), (u[2] = s)) : ((t = u[1]), (s = u[2])),
        u[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)("rect", { width: "80", height: "50", fill: "var(--color-surface, var(--bg-primary))" })),
            (u[3] = a))
          : (a = u[3]),
        u[4] !== t
          ? ((i =
              "mac" === t
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("rect", {
                        opacity: "0.7",
                        x: "5",
                        y: "5",
                        width: "4",
                        height: "4",
                        rx: "2",
                        fill: "#FF5F57",
                      }),
                      (0, r.jsx)("rect", {
                        opacity: "0.7",
                        x: "11",
                        y: "5",
                        width: "4",
                        height: "4",
                        rx: "2",
                        fill: "#FEBC2E",
                      }),
                      (0, r.jsx)("rect", {
                        opacity: "0.7",
                        x: "17",
                        y: "5",
                        width: "4",
                        height: "4",
                        rx: "2",
                        fill: "#28C840",
                      }),
                    ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("path", {
                        d: "M57.5 7H60.5",
                        stroke: "var(--color-border, var(--border-default))",
                        strokeLinecap: "round",
                      }),
                      (0, r.jsx)("rect", {
                        x: "64",
                        y: "7",
                        width: "2",
                        height: "2",
                        rx: "0.5",
                        fill: "var(--color-border, var(--border-default))",
                      }),
                      (0, r.jsx)("path", {
                        d: "M67.5 5C67.7761 5 68 5.22386 68 5.5V7.5C68 7.77614 67.7761 8 67.5 8H67V6H65V5.5C65 5.22386 65.2239 5 65.5 5H67.5Z",
                        fill: "var(--color-border, var(--border-default))",
                      }),
                      (0, r.jsx)("path", {
                        d: "M74.1464 5.14645C74.3417 4.95118 74.6582 4.95118 74.8535 5.14645C75.0487 5.34171 75.0487 5.65822 74.8535 5.85348L73.707 6.99996L74.8535 8.14645C75.0487 8.34171 75.0487 8.65822 74.8535 8.85348C74.6582 9.04874 74.3417 9.04874 74.1464 8.85348L73 7.70699L71.8535 8.85348C71.6582 9.04874 71.3417 9.04874 71.1464 8.85348C70.9512 8.65822 70.9512 8.34171 71.1464 8.14645L72.2929 6.99996L71.1464 5.85348C70.9512 5.65822 70.9512 5.34171 71.1464 5.14645C71.3417 4.95118 71.6582 4.95118 71.8535 5.14645L73 6.29293L74.1464 5.14645Z",
                        fill: "var(--color-border, var(--border-default))",
                      }),
                    ],
                  })),
            (u[4] = t),
            (u[5] = i))
          : (i = u[5]),
        u[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)("path", {
              d: "M46.6667 30.8485C46.6667 31.8526 45.8526 32.6667 44.8485 32.6667H41.8182C40.814 32.6667 40 31.8526 40 30.8485V26H44.8485C45.8526 26 46.6667 26.814 46.6667 27.8182V30.8485Z",
              fill: "var(--color-text-info, light-dark(var(--blue-500), var(--blue-300)))",
            })),
            (n = (0, r.jsx)("path", {
              d: "M45.3333 19.3359C46.0697 19.3359 46.6667 19.9329 46.6667 20.6693V22.6693C46.6667 23.4057 46.0697 24.0026 45.3333 24.0026H43.3333C42.597 24.0026 42 23.4057 42 22.6693V20.6693C42 19.9329 42.597 19.3359 43.3333 19.3359H45.3333Z",
              fill: "var(--color-text-info, light-dark(var(--blue-500), var(--blue-300)))",
              fillOpacity: "0.78",
            })),
            (d = (0, r.jsx)("path", {
              d: "M36.6667 28C37.4031 28 38 28.597 38 29.3333V31.3333C38 32.0697 37.4031 32.6667 36.6667 32.6667H34.6667C33.9303 32.6667 33.3334 32.0697 33.3334 31.3333V29.3333C33.3334 28.597 33.9303 28 34.6667 28H36.6667Z",
              fill: "var(--color-text-info, light-dark(var(--blue-500), var(--blue-300)))",
              fillOpacity: "0.78",
            })),
            (c = (0, r.jsx)("path", {
              d: "M40 26.0026H35.1516C34.1474 26.0026 33.3334 25.1886 33.3334 24.1844V21.1541C33.3334 20.15 34.1474 19.3359 35.1516 19.3359H38.1819C39.186 19.3359 40 20.15 40 21.1541V26.0026Z",
              fill: "var(--color-text-info, light-dark(var(--blue-500), var(--blue-300)))",
            })),
            (u[6] = l),
            (u[7] = n),
            (u[8] = d),
            (u[9] = c))
          : ((l = u[6]), (n = u[7]), (d = u[8]), (c = u[9])),
        u[10] !== s || u[11] !== i
          ? ((h = (0, r.jsxs)("svg", {
              width: "80",
              height: "50",
              viewBox: "0 0 80 50",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...s,
              children: [a, i, l, n, d, c],
            })),
            (u[10] = s),
            (u[11] = i),
            (u[12] = h))
          : (h = u[12]),
        h
      )
    }
    var I = "inlineField-SfwcKi",
      H = "inlineError-B1i4rH",
      P = "inlineStatus-Zm6oal",
      R = "inlineCount-XCDLzF"
    function z(e) {
      let t,
        s,
        a,
        i,
        l = (0, o.c)(10),
        { header: n, actions: d, children: c } = e
      return (
        l[0] !== d
          ? ((t = (0, r.jsx)("div", { className: "actions-AdZRVl no-drag", children: d })), (l[0] = d), (l[1] = t))
          : (t = l[1]),
        l[2] !== n || l[3] !== t
          ? ((s = (0, r.jsxs)("header", { className: "header-NiZYM1 draggable", children: [n, t] })),
            (l[2] = n),
            (l[3] = t),
            (l[4] = s))
          : (s = l[4]),
        l[5] !== c
          ? ((a = (0, r.jsx)("div", { className: "content-PbxUb1", children: c })), (l[5] = c), (l[6] = a))
          : (a = l[6]),
        l[7] !== s || l[8] !== a
          ? ((i = (0, r.jsxs)(r.Fragment, { children: [s, a] })), (l[7] = s), (l[8] = a), (l[9] = i))
          : (i = l[9]),
        i
      )
    }
    function B(e) {
      let t,
        s,
        a,
        i,
        l = (0, o.c)(10),
        { title: n, description: d, children: c } = e
      return (
        l[0] !== n
          ? ((t = (0, r.jsx)("h2", { className: "sectionTitle-Iv5mHZ", children: n })), (l[0] = n), (l[1] = t))
          : (t = l[1]),
        l[2] !== d
          ? ((s = null != d && (0, r.jsx)("p", { className: "sectionDescription-IxhCRP", children: d })),
            (l[2] = d),
            (l[3] = s))
          : (s = l[3]),
        l[4] !== c
          ? ((a = (0, r.jsx)("div", { className: "surface-QuDOuv", children: c })), (l[4] = c), (l[5] = a))
          : (a = l[5]),
        l[6] !== t || l[7] !== s || l[8] !== a
          ? ((i = (0, r.jsxs)("section", { className: "section-JjsTMq", children: [t, s, a] })),
            (l[6] = t),
            (l[7] = s),
            (l[8] = a),
            (l[9] = i))
          : (i = l[9]),
        i
      )
    }
    function O(e) {
      let t,
        s = (0, o.c)(8),
        { intl: a, divider: i, disabled: l, selected: n, onChange: d, renderPhoto: c, selectedIcon: h } = e,
        u = void 0 === i ? "inset" : i
      if (s[0] !== l || s[1] !== u || s[2] !== a || s[3] !== d || s[4] !== c || s[5] !== n || s[6] !== h) {
        let e = [
          {
            shape: "circle",
            label: a.formatMessage({
              id: "profile.edit.shape.circle",
              defaultMessage: "Circle photo shape",
              description: "Accessible label for the circular profile photo shape",
            }),
          },
          {
            shape: "blossom",
            label: a.formatMessage({
              id: "profile.edit.shape.blossom",
              defaultMessage: "Blossom photo shape",
              description: "Accessible label for the flower-shaped profile photo",
            }),
          },
          {
            shape: "square",
            label: a.formatMessage({
              id: "profile.edit.shape.square",
              defaultMessage: "Rounded square photo shape",
              description: "Accessible label for the rounded square profile photo shape",
            }),
          },
          {
            shape: "oval",
            label: a.formatMessage({
              id: "profile.edit.shape.oval",
              defaultMessage: "Oval photo shape",
              description: "Accessible label for the oval profile photo shape",
            }),
          },
          {
            shape: "scalloped",
            label: a.formatMessage({
              id: "profile.edit.shape.scalloped",
              defaultMessage: "Scalloped photo shape",
              description: "Accessible label for the scalloped profile photo shape",
            }),
          },
        ]
        ;((t = (0, r.jsx)("div", {
          className: "photoShapes-mUuFRd",
          "data-divider": u,
          children: e.map((e) => {
            let { shape: t, label: s } = e
            return (0, r.jsxs)(
              "button",
              {
                type: "button",
                className: "interactive-button photoShape-mvwjD3",
                "aria-label": s,
                "aria-pressed": n === t,
                disabled: l,
                onClick: () => d(t),
                children: [c(t), n === t && (0, r.jsx)("span", { className: "selectedIcon-ZKtMEi", children: h })],
              },
              t,
            )
          }),
        })),
          (s[0] = l),
          (s[1] = u),
          (s[2] = a),
          (s[3] = d),
          (s[4] = c),
          (s[5] = n),
          (s[6] = h),
          (s[7] = t))
      } else t = s[7]
      return t
    }
    function W(e) {
      let t,
        s,
        a = (0, o.c)(6),
        { id: i, label: l, children: n } = e
      return (
        a[0] !== l
          ? ((t = (0, r.jsx)("span", { className: "optionText-Z7AzxH", children: l })), (a[0] = l), (a[1] = t))
          : (t = a[1]),
        a[2] !== n || a[3] !== i || a[4] !== t
          ? ((s = (0, r.jsxs)("label", { htmlFor: i, className: "option-JIigVf", children: [t, n] })),
            (a[2] = n),
            (a[3] = i),
            (a[4] = t),
            (a[5] = s))
          : (s = a[5]),
        s
      )
    }
    function Y(e) {
      let t,
        s,
        a,
        i,
        l,
        d,
        c,
        h = (0, o.c)(28),
        {
          intl: u,
          options: f,
          onChange: p,
          disabled: m,
          activityEnabled: g,
          siteArtifactsEnabled: x,
          isProfileShared: v,
          renderToggle: b,
        } = e,
        y = void 0 !== x && x,
        C = (0, n.useId)()
      if (
        h[0] !== g ||
        h[1] !== m ||
        h[2] !== C ||
        h[3] !== u ||
        h[4] !== v ||
        h[5] !== p ||
        h[6] !== f ||
        h[7] !== b ||
        h[8] !== y
      ) {
        let e = { showSiteArtifacts: !0, ...f },
          o = [
            {
              key: "showUsageStatistics",
              label: u.formatMessage({
                id: "profile.edit.showUsageStatistics",
                defaultMessage: "Show usage statistics",
                description: "Setting for displaying the summary statistics on the profile page",
              }),
            },
            {
              key: "showActivityGraph",
              label: u.formatMessage({
                id: "profile.edit.showActivityGraph",
                defaultMessage: "Show activity graph",
                description: "Setting for displaying the activity graph on the profile page",
              }),
            },
            {
              key: "showTopPlugins",
              label: u.formatMessage({
                id: "profile.edit.showTopPlugins",
                defaultMessage: "Show top plugins",
                description: "Setting for displaying the most used plugins on the profile page",
              }),
            },
            {
              key: "showInsights",
              label: u.formatMessage({
                id: "profile.edit.showInsights",
                defaultMessage: "Show insights",
                description: "Setting for displaying usage insights on the profile page",
              }),
            },
            {
              key: "showSiteArtifacts",
              label: u.formatMessage({
                id: "profile.edit.showSiteArtifacts",
                defaultMessage: "Show Sites by you",
                description: "Setting for displaying sites created by the owner on their workspace profile",
              }),
            },
          ]
        ;((t = B),
          h[14] !== u || h[15] !== v
            ? ((i =
                null == v
                  ? u.formatMessage({
                      id: "profile.edit.displayOptions",
                      defaultMessage: "Display options",
                      description: "Heading for choosing which sections appear on the profile page",
                    })
                  : u.formatMessage({
                      id: "profile.edit.sharedDisplayOptions.title",
                      defaultMessage: "What others see",
                      description:
                        "Heading in the profile editor for choosing which sections other people see on the shared profile. The owner can still see all available sections on their own profile. Applies to public personal profiles and profiles shared within a workspace.",
                    })),
              (h[14] = u),
              (h[15] = v),
              (h[16] = i))
            : (i = h[16]),
          h[17] !== u || h[18] !== v
            ? ((l =
                null == v
                  ? void 0
                  : v
                    ? u.formatMessage({
                        id: "profile.edit.sharedDisplayOptions.description",
                        defaultMessage: "Choose which sections are visible to others",
                        description:
                          "Help text below the What others see heading in the profile editor. These settings control the sections visible to other people viewing a public personal profile or a profile shared within a workspace; they do not hide sections from the owner.",
                      })
                    : u.formatMessage({
                        id: "profile.edit.sharedDisplayOptions.privateDescription",
                        defaultMessage: "Choose which sections are visible to others when you share your profile",
                        description:
                          "Help text below the What others see heading for a private profile. The owner can configure these settings before making their personal profile public or sharing their workspace profile with workspace members. Changing these settings does not change profile visibility or hide sections from the owner.",
                      })),
              (h[17] = u),
              (h[18] = v),
              (h[19] = l))
            : (l = h[19]),
          (s = "options-ls_kGR"),
          (a = o
            .filter((e) => {
              let { key: t } = e
              return "showSiteArtifacts" !== t || y
            })
            .map((t) => {
              let { key: s, label: a } = t
              return (0, r.jsx)(
                W,
                {
                  id: `${C}-${s}`,
                  label: a,
                  children: b({
                    id: `${C}-${s}`,
                    label: a,
                    checked: e[s],
                    disabled: m || ("showActivityGraph" === s && !g),
                    onChange: (t) => p({ ...e, [s]: t }),
                  }),
                },
                s,
              )
            })),
          (h[0] = g),
          (h[1] = m),
          (h[2] = C),
          (h[3] = u),
          (h[4] = v),
          (h[5] = p),
          (h[6] = f),
          (h[7] = b),
          (h[8] = y),
          (h[9] = t),
          (h[10] = s),
          (h[11] = a),
          (h[12] = i),
          (h[13] = l))
      } else ((t = h[9]), (s = h[10]), (a = h[11]), (i = h[12]), (l = h[13]))
      return (
        h[20] !== s || h[21] !== a
          ? ((d = (0, r.jsx)("div", { className: s, children: a })), (h[20] = s), (h[21] = a), (h[22] = d))
          : (d = h[22]),
        h[23] !== t || h[24] !== i || h[25] !== l || h[26] !== d
          ? ((c = (0, r.jsx)(t, { title: i, description: l, children: d })),
            (h[23] = t),
            (h[24] = i),
            (h[25] = l),
            (h[26] = d),
            (h[27] = c))
          : (c = h[27]),
        c
      )
    }
    function V(e) {
      let t,
        s,
        a,
        i,
        l = (0, o.c)(13)
      l[0] !== e ? (({ quiet: s, ...t } = e), (l[0] = e), (l[1] = t), (l[2] = s)) : ((t = l[1]), (s = l[2]))
      let n = void 0 !== s && s,
        d = `inlineInput-RmOkPy ${n ? "quiet-p7Wa7N" : ""}`
      if (t.multiline) {
        let e, s
        if (l[3] !== t) {
          let { multiline: s, ...a } = t
          ;((e = a), (l[3] = t), (l[4] = e))
        } else e = l[4]
        let a = `${d} bio-uCWPG3`
        return (
          l[5] !== e || l[6] !== a
            ? ((s = (0, r.jsx)("textarea", { ...e, rows: 1, className: a })), (l[5] = e), (l[6] = a), (l[7] = s))
            : (s = l[7]),
          s
        )
      }
      if (l[8] !== t) {
        let { multiline: e, ...s } = t
        ;((a = s), (l[8] = t), (l[9] = a))
      } else a = l[9]
      return (
        l[10] !== d || l[11] !== a
          ? ((i = (0, r.jsx)("input", { ...a, className: d })), (l[10] = d), (l[11] = a), (l[12] = i))
          : (i = l[12]),
        i
      )
    }
    var q = "dialog-dBDprv",
      G = "selection-e7tMMo",
      K = "header-OvtVS2",
      X = "title-Ef0kK6",
      J = "description-YPzifa",
      Q = "search-vGpLR_",
      ee = "filters-pyXAFI",
      et = "list-Otk5j4",
      es = "row-TfybjU",
      ea = "rowAction-Shio5C",
      ei = "rowContent-kB5mjt",
      el = "preview-YWJD76",
      er = "details-pwuQ5J",
      eo = "itemTitle-qaF4oo",
      en = "subtitle-SIhHps",
      ed = "audience-ebLt0R",
      ec = "controls-SjqzWj",
      eh = "checkbox-B1V6t4",
      eu = "drag-p9DK5q",
      ef = "empty-CRfy_R",
      ep = "loading-YECKtI",
      em = "actions-mvsKzu",
      eg = "action-PCsWl6",
      ex = "sharingList-D2vCRO",
      ev = "sharingDetails-Z1rjKA"
    function eb(e) {
      let t,
        s = (0, o.c)(8),
        { code: a, maxPins: i, FormattedMessage: l } = e
      if ("profile_pin_limit_reached" === a && null != i) {
        let e, t
        return (
          s[0] !== i ? ((e = { limit: i }), (s[0] = i), (s[1] = e)) : (e = s[1]),
          s[2] !== l || s[3] !== e
            ? ((t = (0, r.jsx)(l, {
                id: "profile.showcase.pinLimitReachedWithLimit",
                defaultMessage: "You can only pin {limit, plural, one {# item} other {# items}}",
                description:
                  "Error in the profile Showcase editor when saving too many pinned sites or skills. The numeric limit is the maximum number of pins returned by the server. Existing saved pins remain unchanged; users must reduce their selection before saving.",
                values: e,
              })),
              (s[2] = l),
              (s[3] = e),
              (s[4] = t))
            : (t = s[4]),
          t
        )
      }
      return (
        s[5] !== l || s[6] !== a
          ? ((t =
              "profile_pin_sharing_failed" === a
                ? (0, r.jsx)(l, {
                    id: "profile.showcase.sharing.failed",
                    defaultMessage: "Some items couldn't be shared. Your showcase hasn't been saved. Try again",
                    description:
                      "Error in the Showcase editor when sharing fails and the showcase selection is not saved. The draft remains available for retry; some items may already have been shared.",
                  })
                : (0, r.jsx)(l, {
                    id: "profile.showcase.saveError",
                    defaultMessage: "Your showcase couldn't be saved. Try again",
                    description:
                      "Error when saving the profile Showcase fails. The current draft is retained for retry.",
                  })),
            (s[5] = l),
            (s[6] = a),
            (s[7] = t))
          : (t = s[7]),
        t
      )
    }
    function ey(e) {
      let t,
        s,
        a,
        i,
        l,
        n,
        d,
        c = (0, o.c)(14)
      c[0] !== e
        ? (({ children: t, color: l, disabled: s, loadingIndicator: a, type: n, ...i } = e),
          (c[0] = e),
          (c[1] = t),
          (c[2] = s),
          (c[3] = a),
          (c[4] = i),
          (c[5] = l),
          (c[6] = n))
        : ((t = c[1]), (s = c[2]), (a = c[3]), (i = c[4]), (l = c[5]), (n = c[6]))
      let h = void 0 === l ? "primary" : l,
        u = void 0 === n ? "button" : n,
        f = s || null != a
      return (
        c[7] !== t || c[8] !== h || c[9] !== a || c[10] !== i || c[11] !== f || c[12] !== u
          ? ((d = (0, r.jsxs)("button", {
              ...i,
              className: eg,
              "data-color": h,
              disabled: f,
              type: u,
              children: [a, t],
            })),
            (c[7] = t),
            (c[8] = h),
            (c[9] = a),
            (c[10] = i),
            (c[11] = f),
            (c[12] = u),
            (c[13] = d))
          : (d = c[13]),
        d
      )
    }
    function eC(e) {
      let t,
        s,
        a,
        i = (0, o.c)(8),
        { children: l, actions: n, onSubmit: d } = e
      return (
        i[0] !== d
          ? ((t = (e) => {
              ;(e.preventDefault(), d())
            }),
            (i[0] = d),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== n ? ((s = (0, r.jsx)("footer", { className: em, children: n })), (i[2] = n), (i[3] = s)) : (s = i[3]),
        i[4] !== l || i[5] !== t || i[6] !== s
          ? ((a = (0, r.jsxs)("form", { className: q, onSubmit: t, children: [l, s] })),
            (i[4] = l),
            (i[5] = t),
            (i[6] = s),
            (i[7] = a))
          : (a = i[7]),
        a
      )
    }
    function ej(e) {
      let t,
        s,
        a,
        i,
        l,
        d,
        c,
        h,
        u,
        f,
        p,
        m,
        g,
        x,
        v,
        b,
        y,
        C,
        j,
        w,
        k,
        M = (0, o.c)(83),
        {
          intl: L,
          FormattedMessage: N,
          titleId: S,
          allowSkills: _,
          selectionLimit: T,
          search: F,
          filter: A,
          selection: $,
          visibleItems: U,
          isSaving: D,
          isLoading: E,
          isError: Z,
          pagination: I,
          onSearchChange: H,
          onFilterChange: P,
          onToggle: R,
          onReorder: z,
          onReorderComplete: B,
          onRetry: O,
          renderList: W,
          ReorderRow: Y,
          icons: V,
          loadingIndicator: q,
        } = e,
        em = (0, n.useId)(),
        eg = (0, n.useId)(),
        [ex, ev] = (0, n.useState)(""),
        eb = (0, n.useRef)(null),
        ey = U.map(ew),
        eC = function (e, t) {
          let s = void 0 === t ? ey : t
          ev(
            L.formatMessage(
              {
                id: "profile.showcase.editor.reordered",
                defaultMessage: "{title} moved to position {position} of {count}. Save to apply your order",
                description:
                  "Screen reader announcement after moving an item in the Showcase editor. Position and count refer to the visible search results.",
              },
              { title: e.title, position: s.indexOf(e.id) + 1, count: s.length },
            ),
          )
        },
        ej = function (e, t) {
          let s = ey.indexOf(e.id),
            a = s + ("ArrowUp" === t ? -1 : 1)
          if (
            ("Home" === t && (a = 0),
            "End" === t && (a = ey.length - 1),
            (a = Math.max(0, Math.min(ey.length - 1, a))) === s)
          )
            return
          let i = [...ey]
          ;(i.splice(s, 1), i.splice(a, 0, e.id), z(i), B(e.kind), eC(e, i))
        }
      M[0] !== N
        ? ((t = (0, r.jsx)(N, {
            id: "profile.showcase.editor.empty",
            defaultMessage: "No sites or skills to showcase yet",
            description: "Empty Showcase editor when no sites or skills are available",
          })),
          (M[0] = N),
          (M[1] = t))
        : (t = M[1])
      let ek = t
      if (F.trim().length > 0) {
        let e
        ;(M[2] !== N
          ? ((e = (0, r.jsx)(N, {
              id: "profile.showcase.editor.noResults",
              defaultMessage: "No items match your search",
              description: "Empty search results in the Showcase editor.",
            })),
            (M[2] = N),
            (M[3] = e))
          : (e = M[3]),
          (ek = e))
      } else if (_ && "site" !== A) {
        if ("skill" === A) {
          let e
          ;(M[6] !== N
            ? ((e = (0, r.jsx)(N, {
                id: "chatgpt.profile.v2.showcase.skills.empty",
                defaultMessage: "No skills to showcase yet",
                description:
                  "Empty-state text under the Skills filter on the user's profile Showcase. No published skills are available.",
              })),
              (M[6] = N),
              (M[7] = e))
            : (e = M[7]),
            (ek = e))
        }
      } else {
        let e
        ;(M[4] !== N
          ? ((e = (0, r.jsx)(N, {
              id: "profile.showcase.sites.empty",
              defaultMessage: "No sites to showcase yet",
              description: "Empty Sites filter when the profile only has pinned skills",
            })),
            (M[4] = N),
            (M[5] = e))
          : (e = M[5]),
          (ek = e))
      }
      ;(M[8] !== N
        ? ((s = (0, r.jsx)(N, {
            id: "profile.showcase.editor.title",
            defaultMessage: "Edit showcase",
            description: "Title of the dialog for selecting and ordering sites and skills on a profile.",
          })),
          (M[8] = N),
          (M[9] = s))
        : (s = M[9]),
        M[10] !== s || M[11] !== S
          ? ((a = (0, r.jsx)("h2", { id: S, className: X, children: s })), (M[10] = s), (M[11] = S), (M[12] = a))
          : (a = M[12]),
        M[13] !== N || M[14] !== _ || M[15] !== T
          ? ((i =
              null != T &&
              (_
                ? (0, r.jsx)(N, {
                    id: "profile.showcase.editor.totalLimitDescription",
                    defaultMessage: "Choose up to {limit} sites and skills. Drag to reorder.",
                    description:
                      "Description of the Showcase editor when both sites and skills are available. The limit is the combined maximum number of selected sites and skills.",
                    values: { limit: T },
                  })
                : (0, r.jsx)(N, {
                    id: "profile.showcase.editor.sitesLimitDescription",
                    defaultMessage: "Choose up to {limit} sites. Drag to reorder.",
                    description:
                      "Description of the Showcase editor when only sites are available. The limit is the maximum number of selected sites.",
                    values: { limit: T },
                  }))),
            (M[13] = N),
            (M[14] = _),
            (M[15] = T),
            (M[16] = i))
          : (i = M[16]),
        M[17] !== i ? ((l = (0, r.jsx)("p", { className: J, children: i })), (M[17] = i), (M[18] = l)) : (l = M[18]),
        M[19] !== a || M[20] !== l
          ? ((d = (0, r.jsxs)("header", { className: K, children: [a, l] })), (M[19] = a), (M[20] = l), (M[21] = d))
          : (d = M[21]),
        M[22] !== N || M[23] !== _
          ? ((c = _
              ? (0, r.jsx)(N, {
                  id: "profile.showcase.editor.searchLabel",
                  defaultMessage: "Search sites and skills",
                  description: "Accessible label for filtering sites and skills in the Showcase editor.",
                })
              : (0, r.jsx)(N, {
                  id: "profile.showcase.editor.searchLabel.sitesOnly",
                  defaultMessage: "Search sites",
                  description:
                    "Accessible label for filtering sites in the Showcase editor when skill pinning is unavailable.",
                })),
            (M[22] = N),
            (M[23] = _),
            (M[24] = c))
          : (c = M[24]),
        M[25] !== em || M[26] !== c
          ? ((h = (0, r.jsx)("label", { className: "sr-only", htmlFor: em, children: c })),
            (M[25] = em),
            (M[26] = c),
            (M[27] = h))
          : (h = M[27]),
        M[28] !== H ? ((u = (e) => H(e.target.value)), (M[28] = H), (M[29] = u)) : (u = M[29]),
        M[30] !== _ || M[31] !== L
          ? ((f = _
              ? L.formatMessage({
                  id: "profile.showcase.editor.searchPlaceholder",
                  defaultMessage: "Search sites and skills",
                  description: "Placeholder for the search field in the Showcase editor.",
                })
              : L.formatMessage({
                  id: "profile.showcase.editor.searchPlaceholder.sitesOnly",
                  defaultMessage: "Search sites",
                  description: "Placeholder for the Showcase editor search field when only sites can be pinned.",
                })),
            (M[30] = _),
            (M[31] = L),
            (M[32] = f))
          : (f = M[32]),
        M[33] !== F || M[34] !== em || M[35] !== u || M[36] !== f
          ? ((p = (0, r.jsx)("input", {
              id: em,
              name: "showcase-search",
              autoComplete: "off",
              value: F,
              onChange: u,
              placeholder: f,
            })),
            (M[33] = F),
            (M[34] = em),
            (M[35] = u),
            (M[36] = f),
            (M[37] = p))
          : (p = M[37]),
        M[38] !== V.clear || M[39] !== L || M[40] !== H || M[41] !== F.length
          ? ((m =
              F.length > 0 &&
              (0, r.jsx)("button", {
                className: "interactive-button",
                type: "button",
                onClick: () => H(""),
                "aria-label": L.formatMessage({
                  id: "skills.pageSearchInput.clear",
                  defaultMessage: "Clear search",
                  description: "Accessible label for clearing a search field",
                }),
                children: V.clear,
              })),
            (M[38] = V.clear),
            (M[39] = L),
            (M[40] = H),
            (M[41] = F.length),
            (M[42] = m))
          : (m = M[42]),
        M[43] !== V.search || M[44] !== h || M[45] !== p || M[46] !== m
          ? ((g = (0, r.jsxs)("div", { className: Q, children: [V.search, h, p, m] })),
            (M[43] = V.search),
            (M[44] = h),
            (M[45] = p),
            (M[46] = m),
            (M[47] = g))
          : (g = M[47]),
        M[48] !== _ || M[49] !== A || M[50] !== L || M[51] !== P
          ? ((x =
              _ &&
              (0, r.jsx)("div", {
                className: ee,
                role: "group",
                "aria-label": L.formatMessage({
                  id: "profile.showcase.editor.filterTabsLabel",
                  defaultMessage: "Showcase item types",
                  description:
                    "Accessible name for tabs that filter the Showcase editor to all items, sites, or skills.",
                }),
                children: [
                  [
                    "all",
                    L.formatMessage({
                      id: "chatgpt.profile.v2.showcase.filter.all",
                      defaultMessage: "All",
                      description: "Profile Showcase filter showing both Sites and Skills. Short button label.",
                    }),
                  ],
                  [
                    "site",
                    L.formatMessage({
                      id: "chatgpt.profile.v2.showcase.filter.sites",
                      defaultMessage: "Sites",
                      description:
                        "Profile Showcase filter showing websites created by the user. Sibling filters are All and Skills.",
                    }),
                  ],
                  [
                    "skill",
                    L.formatMessage({
                      id: "chatgpt.profile.v2.showcase.filter.skills",
                      defaultMessage: "Skills",
                      description:
                        "Profile Showcase filter showing reusable agent skills created by the user. Sibling filters are All and Sites.",
                    }),
                  ],
                ].map((e) => {
                  let [t, s] = e
                  return (0, r.jsx)(
                    "button",
                    {
                      type: "button",
                      className: "interactive-button",
                      "aria-pressed": A === t,
                      onClick: () => P(t),
                      children: s,
                    },
                    t,
                  )
                }),
              })),
            (M[48] = _),
            (M[49] = A),
            (M[50] = L),
            (M[51] = P),
            (M[52] = x))
          : (x = M[52]),
        M[53] !== N
          ? ((v = (0, r.jsx)(N, {
              id: "profile.showcase.editor.reorderInstructions",
              defaultMessage:
                "Drag to reorder, or use the Up and Down arrow keys. Home and End move to the first and last visible positions. Save applies your order",
              description:
                "Keyboard instructions read when a screen reader user focuses an item's reorder handle in the Showcase editor.",
            })),
            (M[53] = N),
            (M[54] = v))
          : (v = M[54]),
        M[55] !== eg || M[56] !== v
          ? ((b = (0, r.jsx)("p", { id: eg, className: "sr-only", children: v })),
            (M[55] = eg),
            (M[56] = v),
            (M[57] = b))
          : (b = M[57]),
        M[58] !== ex
          ? ((y = (0, r.jsx)("span", { className: "sr-only", role: "status", children: ex })),
            (M[58] = ex),
            (M[59] = y))
          : (y = M[59]),
        M[60] !== ek || M[61] !== Z || M[62] !== E || M[63] !== U.length
          ? ((C = !E && !Z && 0 === U.length && (0, r.jsx)("li", { className: ef, children: ek })),
            (M[60] = ek),
            (M[61] = Z),
            (M[62] = E),
            (M[63] = U.length),
            (M[64] = C))
          : (C = M[64]),
        M[65] !== E || M[66] !== I
          ? ((j = !E && (0, r.jsx)("li", { children: I })), (M[65] = E), (M[66] = I), (M[67] = j))
          : (j = M[67]),
        M[68] !== N || M[69] !== _ || M[70] !== Z || M[71] !== E || M[72] !== q || M[73] !== O
          ? ((w =
              (E || Z) &&
              (0, r.jsx)("li", {
                role: "status",
                className: E ? ep : ef,
                children: E
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        q,
                        (0, r.jsx)("span", {
                          className: "sr-only",
                          children: _
                            ? (0, r.jsx)(N, {
                                id: "profile.showcase.loading",
                                defaultMessage: "Loading sites and skills\u2026",
                                description:
                                  "Status while loading available sites and skills in the profile Showcase editor",
                              })
                            : (0, r.jsx)(N, {
                                id: "profile.showcase.loading.sitesOnly",
                                defaultMessage: "Loading sites\u2026",
                                description:
                                  "Status while loading available sites in the profile Showcase editor when skill pinning is unavailable",
                              }),
                        }),
                      ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(N, {
                          id: "profile.showcase.error",
                          defaultMessage: "Some showcase items are temporarily unavailable",
                          description:
                            "Status when available sites or skills could not be loaded in the profile Showcase editor",
                        }),
                        (0, r.jsx)("button", {
                          className: "interactive-button",
                          type: "button",
                          onClick: O,
                          children: (0, r.jsx)(N, {
                            id: "profile.showcase.retrySites",
                            defaultMessage: "Retry",
                            description: "Retry loading sites and skills in the Showcase editor",
                          }),
                        }),
                      ],
                    }),
              })),
            (M[68] = N),
            (M[69] = _),
            (M[70] = Z),
            (M[71] = E),
            (M[72] = q),
            (M[73] = O),
            (M[74] = w))
          : (w = M[74]))
      let eM = W({
        className: et,
        ids: ey,
        filterKey: `${A}:${F}`,
        onReorder: z,
        children: (0, r.jsxs)(r.Fragment, {
          children: [
            !E &&
              U.map((e) => {
                let t = $.includes(e.id),
                  s = D || (!t && (null == T || $.length >= T || !e.selectable)),
                  a = `${eg}-${e.id}`
                return (0, r.jsx)(
                  Y,
                  {
                    id: e.id,
                    onDragEnd: (t) => {
                      let s = eb.current
                      if (((eb.current = null), "pointercancel" === t.type || "touchcancel" === t.type)) {
                        null != s && z(s)
                        return
                      }
                      if (null != s) {
                        let t = new Set(s),
                          a = new Set(ey),
                          i = s.filter((e) => a.has(e))
                        ey.filter((e) => t.has(e)).some((e, t) => e !== i[t]) && B(e.kind)
                      }
                      eC(e)
                    },
                    children: (i) =>
                      (0, r.jsxs)("div", {
                        className: es,
                        "data-disabled": s || void 0,
                        children: [
                          (0, r.jsx)("button", {
                            type: "button",
                            className: `interactive-button ${ea}`,
                            disabled: s,
                            "aria-label": e.title,
                            "aria-describedby": null != e.sharingAudience ? a : void 0,
                            onClick: () => R(e.id),
                          }),
                          (0, r.jsxs)("div", {
                            className: ei,
                            children: [
                              (0, r.jsx)("span", { className: el, children: e.preview }),
                              (0, r.jsxs)("span", {
                                className: er,
                                children: [
                                  (0, r.jsx)("span", {
                                    className: eo,
                                    children: (0, r.jsx)("span", { children: e.title }),
                                  }),
                                  (0, r.jsxs)("span", {
                                    className: en,
                                    children: [
                                      (0, r.jsx)("span", { children: e.subtitle }),
                                      null != e.sharingAudience &&
                                        (0, r.jsx)("span", {
                                          id: a,
                                          className: ed,
                                          children: (0, r.jsx)(N, {
                                            id: "profile.showcase.editor.accessAudience",
                                            defaultMessage:
                                              "\xb7 {accessLevel, select, private {Only you} custom {Selected people} workspace {Your workspace} other {Public}}",
                                            description:
                                              "Short access label after a middle-dot separator in a profile Showcase picker row. Private means only the owner can access the item; custom means specific people or groups have access; workspace means the whole workspace; public means everyone. Selected people includes access granted through selected groups.",
                                            values: {
                                              accessLevel:
                                                "invited" === e.sharingAudience ? "custom" : e.sharingAudience,
                                            },
                                          }),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("span", {
                                className: ec,
                                children: [
                                  (0, r.jsxs)("span", {
                                    className: eh,
                                    children: [
                                      (0, r.jsx)("input", {
                                        type: "checkbox",
                                        name: "showcase-pin",
                                        "aria-label": e.title,
                                        "aria-describedby": null != e.sharingAudience ? a : void 0,
                                        checked: t,
                                        disabled: s,
                                        onChange: () => R(e.id),
                                      }),
                                      t && V.check,
                                    ],
                                  }),
                                  (0, r.jsx)("button", {
                                    className: `interactive-button ${eu}`,
                                    type: "button",
                                    disabled: D,
                                    "aria-label": L.formatMessage(
                                      {
                                        id: "profile.showcase.editor.reorderSite",
                                        defaultMessage: "Reorder {title}",
                                        description:
                                          "Accessible label on the drag handle used to reorder an item in the Showcase editor.",
                                      },
                                      { title: e.title },
                                    ),
                                    "aria-describedby": null != e.sharingAudience ? `${eg} ${a}` : eg,
                                    onPointerDown: (e) => {
                                      ;((eb.current = ey), i(e))
                                    },
                                    onKeyDown: (t) => {
                                      let s = t.key
                                      if ("ArrowUp" !== s && "ArrowDown" !== s && "Home" !== s && "End" !== s) return
                                      ;(t.preventDefault(), ej(e, s))
                                      let a = t.currentTarget
                                      requestAnimationFrame(() => a.scrollIntoView({ block: "nearest" }))
                                    },
                                    children: V.drag,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  },
                  e.id,
                )
              }),
            C,
            j,
            w,
          ],
        }),
      })
      return (
        M[75] !== g || M[76] !== x || M[77] !== b || M[78] !== y || M[79] !== eM || M[80] !== G || M[81] !== d
          ? ((k = (0, r.jsxs)("div", { className: G, children: [d, g, x, b, y, eM] })),
            (M[75] = g),
            (M[76] = x),
            (M[77] = b),
            (M[78] = y),
            (M[79] = eM),
            (M[80] = G),
            (M[81] = d),
            (M[82] = k))
          : (k = M[82]),
        k
      )
    }
    function ew(e) {
      return e.id
    }
    function ek(e, t, s) {
      return e.map((e) => {
        let a = t.indexOf(e)
        return a < 0 ? e : (s[a] ?? e)
      })
    }
    function eM(e) {
      let t,
        s,
        a,
        i,
        l,
        n,
        d,
        c,
        h = (0, o.c)(21),
        { titleId: u, items: f, workspaceOnly: p, FormattedMessage: m } = e,
        g = f.some(eS),
        x = f.some(eN),
        v = g ? (x ? "both" : "sites") : "skills"
      return (
        h[0] !== v ? ((t = { kinds: v }), (h[0] = v), (h[1] = t)) : (t = h[1]),
        h[2] !== m || h[3] !== t
          ? ((s = (0, r.jsx)(m, {
              id: "profile.showcase.sharingTitle",
              defaultMessage:
                "{kinds, select, sites {Your sites will be published} skills {Your skills will be published} other {Your sites and skills will be published}}",
              description: "Title of the confirmation listing showcase items whose sharing must be broadened",
              values: t,
            })),
            (h[2] = m),
            (h[3] = t),
            (h[4] = s))
          : (s = h[4]),
        h[5] !== s || h[6] !== u
          ? ((a = (0, r.jsx)("h2", { id: u, className: X, children: s })), (h[5] = s), (h[6] = u), (h[7] = a))
          : (a = h[7]),
        h[8] !== m || h[9] !== p
          ? ((i = (0, r.jsx)("p", {
              className: J,
              children: p
                ? (0, r.jsx)(m, {
                    id: "profile.showcase.sharingWorkspaceDescription",
                    defaultMessage: "All members of your workspace will be able to access these items",
                    description: "Explains workspace-wide access before publishing selected sites or skills",
                  })
                : (0, r.jsx)(m, {
                    id: "profile.showcase.sharingPublicDescription",
                    defaultMessage: "Anyone will be able to access these sites",
                    description: "Explains public access before publishing selected sites on a personal profile",
                  }),
            })),
            (h[8] = m),
            (h[9] = p),
            (h[10] = i))
          : (i = h[10]),
        h[11] !== a || h[12] !== i
          ? ((l = (0, r.jsxs)("header", { className: K, children: [a, i] })), (h[11] = a), (h[12] = i), (h[13] = l))
          : (l = h[13]),
        h[14] !== f ? ((n = f.map(eL)), (h[14] = f), (h[15] = n)) : (n = h[15]),
        h[16] !== n ? ((d = (0, r.jsx)("ul", { className: ex, children: n })), (h[16] = n), (h[17] = d)) : (d = h[17]),
        h[18] !== l || h[19] !== d
          ? ((c = (0, r.jsxs)("div", { className: G, children: [l, d] })), (h[18] = l), (h[19] = d), (h[20] = c))
          : (c = h[20]),
        c
      )
    }
    function eL(e) {
      return (0, r.jsxs)(
        "li",
        {
          children: [
            (0, r.jsx)("span", { className: el, children: e.preview }),
            (0, r.jsxs)("span", {
              className: ev,
              children: [
                (0, r.jsx)("span", { className: eo, children: e.title }),
                (0, r.jsx)("span", { className: en, children: e.subtitle }),
              ],
            }),
          ],
        },
        e.id,
      )
    }
    function eN(e) {
      return "skill" === e.kind
    }
    function eS(e) {
      return "site" === e.kind
    }
    function e_(e) {
      return "eligible" === e.eligibility || ("requires_sharing" === e.eligibility && null != e.requiredSharingAudience)
    }
    function eT(e, t, s, a) {
      let i = Array.from(new Set([...e, ...a.keys()]))
      return {
        orderedIds: i,
        selectedIds: i.filter((e) => t.includes(e)),
        unavailableAdditionIds: t.filter((e) => {
          let t = a.get(e)
          return !s.has(e) && (null == t || !e_(t))
        }),
        itemsToShare: i.flatMap((e) => {
          let i = a.get(e)
          return null != i && t.includes(e) && !s.has(e) && "requires_sharing" === i.eligibility ? [i] : []
        }),
      }
    }
    function eF(e, t) {
      return e.some((e) => !t?.some((t) => t.id === e.id && t.requiredSharingAudience === e.requiredSharingAudience))
    }
    function eA(e) {
      let t,
        s = (0, o.c)(2),
        { children: a } = e
      return (
        s[0] !== a
          ? ((t = (0, r.jsx)("div", { className: "sections-lL3k1C", children: a })), (s[0] = a), (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function e$(e) {
      let t,
        s,
        a,
        i,
        l,
        n,
        d,
        c = (0, o.c)(20),
        { asset: h, assetPlacement: u, title: f, subtitle: p, actions: m } = e,
        g = void 0 === u ? "above" : u
      c[0] !== h || c[1] !== g
        ? ((t = "above" === g && (0, r.jsx)("div", { className: "asset-hUAgRb", children: h })),
          (c[0] = h),
          (c[1] = g),
          (c[2] = t))
        : (t = c[2])
      let x = "beside" === g && h
      return (
        c[3] !== p
          ? ((s = null == p ? null : (0, r.jsx)("div", { className: "subtitle-j75vib", children: p })),
            (c[3] = p),
            (c[4] = s))
          : (s = c[4]),
        c[5] !== s || c[6] !== f
          ? ((a = (0, r.jsxs)("div", { className: "heading-Z1RU60", children: [f, s] })),
            (c[5] = s),
            (c[6] = f),
            (c[7] = a))
          : (a = c[7]),
        c[8] !== x || c[9] !== a
          ? ((i = (0, r.jsxs)("div", { className: "identity-ExjY5O", children: [x, a] })),
            (c[8] = x),
            (c[9] = a),
            (c[10] = i))
          : (i = c[10]),
        c[11] !== m
          ? ((l = null == m ? null : (0, r.jsx)("div", { className: "actions-A9tWgZ", children: m })),
            (c[11] = m),
            (c[12] = l))
          : (l = c[12]),
        c[13] !== g || c[14] !== i || c[15] !== l
          ? ((n = (0, r.jsxs)("div", { className: "headingRow-zdzVkK", "data-asset-placement": g, children: [i, l] })),
            (c[13] = g),
            (c[14] = i),
            (c[15] = l),
            (c[16] = n))
          : (n = c[16]),
        c[17] !== t || c[18] !== n
          ? ((d = (0, r.jsxs)("header", { className: "header-ZgEwoH", children: [t, n] })),
            (c[17] = t),
            (c[18] = n),
            (c[19] = d))
          : (d = c[19]),
        d
      )
    }
    function eU(e) {
      let t,
        s = (0, o.c)(2),
        { children: a } = e
      return (
        s[0] !== a
          ? ((t = (0, r.jsx)("span", { className: "logo-Hm91Yu", children: a })), (s[0] = a), (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function eD(e) {
      let t,
        s,
        a,
        i,
        l,
        n = (0, o.c)(15),
        { id: d, title: c, count: h, actions: u, inset: f, children: p } = e,
        m = void 0 === f || f
      return (
        n[0] !== h
          ? ((t = null == h ? null : (0, r.jsx)("span", { className: "count-VnPPnH", children: h })),
            (n[0] = h),
            (n[1] = t))
          : (t = n[1]),
        n[2] !== t || n[3] !== c
          ? ((s = (0, r.jsxs)("h2", { className: "sectionTitle-PV6y6g", children: [c, t] })),
            (n[2] = t),
            (n[3] = c),
            (n[4] = s))
          : (s = n[4]),
        n[5] !== u || n[6] !== s
          ? ((a = (0, r.jsxs)("div", {
              className: "sectionHeader-BHMi_K",
              "data-slot": "section-header",
              children: [s, u],
            })),
            (n[5] = u),
            (n[6] = s),
            (n[7] = a))
          : (a = n[7]),
        n[8] !== p || n[9] !== m
          ? ((i = (0, r.jsx)("div", { className: "sectionContent-BSaHNj", "data-inset": m, children: p })),
            (n[8] = p),
            (n[9] = m),
            (n[10] = i))
          : (i = n[10]),
        n[11] !== d || n[12] !== a || n[13] !== i
          ? ((l = (0, r.jsxs)("section", { id: d, className: "section-I3CMSh", children: [a, i] })),
            (n[11] = d),
            (n[12] = a),
            (n[13] = i),
            (n[14] = l))
          : (l = n[14]),
        l
      )
    }
    function eE(e) {
      let t,
        s,
        a,
        i = (0, o.c)(8),
        { align: l, label: n, children: d } = e,
        c = void 0 === l ? "center" : l
      return (
        i[0] !== n ? ((t = (0, r.jsx)("dt", { children: n })), (i[0] = n), (i[1] = t)) : (t = i[1]),
        i[2] !== d ? ((s = (0, r.jsx)("dd", { children: d })), (i[2] = d), (i[3] = s)) : (s = i[3]),
        i[4] !== c || i[5] !== t || i[6] !== s
          ? ((a = (0, r.jsxs)("div", { className: "property-gOo1Lc", "data-align": c, children: [t, s] })),
            (i[4] = c),
            (i[5] = t),
            (i[6] = s),
            (i[7] = a))
          : (a = i[7]),
        a
      )
    }
    function eZ(e) {
      let t,
        s,
        a,
        i,
        l = (0, o.c)(8),
        { background: n, children: d } = e
      return (
        l[0] !== n
          ? ((t = (0, r.jsx)("div", {
              className: "background-p5zgr2",
              style: { backgroundImage: n },
              "aria-hidden": !0,
            })),
            (l[0] = n),
            (l[1] = t))
          : (t = l[1]),
        l[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, r.jsx)("div", { className: "overlay-j7FQ8V" })), (l[2] = s))
          : (s = l[2]),
        l[3] !== d
          ? ((a = (0, r.jsx)("div", { className: "prompts-yG_ltw", children: d })), (l[3] = d), (l[4] = a))
          : (a = l[4]),
        l[5] !== t || l[6] !== a
          ? ((i = (0, r.jsxs)("div", { className: "preview-PdknkJ", children: [t, s, a] })),
            (l[5] = t),
            (l[6] = a),
            (l[7] = i))
          : (i = l[7]),
        i
      )
    }
    function eI(e) {
      let t,
        s,
        a,
        i,
        l,
        n,
        d,
        c,
        h,
        u,
        f,
        p = (0, o.c)(25)
      p[0] !== e
        ? (({ children: s, arrow: t, disabled: a, pending: l, onClick: i, ...n } = e),
          (p[0] = e),
          (p[1] = t),
          (p[2] = s),
          (p[3] = a),
          (p[4] = i),
          (p[5] = l),
          (p[6] = n))
        : ((t = p[1]), (s = p[2]), (a = p[3]), (i = p[4]), (l = p[5]), (n = p[6]))
      let m = l ? -1 : 0
      return (
        p[7] !== a || p[8] !== i || p[9] !== l
          ? ((d = (e) => {
              a || l || i?.(e)
            }),
            (p[7] = a),
            (p[8] = i),
            (p[9] = l),
            (p[10] = d))
          : (d = p[10]),
        p[11] !== s
          ? ((c = (0, r.jsx)("span", { className: "promptText-nfxm4B", children: s })), (p[11] = s), (p[12] = c))
          : (c = p[12]),
        p[13] !== t || p[14] !== a
          ? ((h = a ? null : (0, r.jsx)("span", { className: "arrow-ditBmr", children: t })),
            (p[13] = t),
            (p[14] = a),
            (p[15] = h))
          : (h = p[15]),
        p[16] !== c || p[17] !== h
          ? ((u = (0, r.jsxs)("span", { className: "promptRow-onjes4", children: [c, h] })),
            (p[16] = c),
            (p[17] = h),
            (p[18] = u))
          : (u = p[18]),
        p[19] !== a || p[20] !== n || p[21] !== m || p[22] !== d || p[23] !== u
          ? ((f = (0, r.jsx)("button", {
              ...n,
              type: "button",
              className: "prompt-Gru5u8",
              "aria-disabled": a,
              tabIndex: m,
              onClick: d,
              children: u,
            })),
            (p[19] = a),
            (p[20] = n),
            (p[21] = m),
            (p[22] = d),
            (p[23] = u),
            (p[24] = f))
          : (f = p[24]),
        f
      )
    }
    var eH = "body-pTJjTH",
      eP = "field-R5auo7",
      eR = "label-H1y6rA",
      ez = "help-qat9Hb",
      eB = "input-Vb3WEP",
      eO = "status-hSjbNo",
      eW = "error-k7HvS4"
    function eY(e) {
      let t,
        s,
        a,
        i = (0, o.c)(9),
        { title: l, body: n, footer: d, onSubmit: c } = e
      return (
        i[0] !== l
          ? ((t = (0, r.jsx)("div", { className: "dialogTitle-lNw16Z", children: l })), (i[0] = l), (i[1] = t))
          : (t = i[1]),
        i[2] !== d
          ? ((s = (0, r.jsx)("div", { className: "dialogActions-PY7Cu5", children: d })), (i[2] = d), (i[3] = s))
          : (s = i[3]),
        i[4] !== n || i[5] !== c || i[6] !== t || i[7] !== s
          ? ((a = (0, r.jsxs)("form", { className: "dialog-dW3IMr", onSubmit: c, children: [t, n, s] })),
            (i[4] = n),
            (i[5] = c),
            (i[6] = t),
            (i[7] = s),
            (i[8] = a))
          : (a = i[8]),
        a
      )
    }
    function eV({
      value: e,
      accountId: t,
      isSaving: s,
      isProfileEditing: i = !1,
      showSiteUrlWarning: l,
      defaultOpen: o = !1,
      onClose: d,
      onEditStarted: c,
      onChangeStarted: h,
      onSave: u,
      checkAvailability: f,
      formatSaveError: p,
      intl: m,
      renderDialog: g,
      renderInput: x,
      renderButton: v,
      renderWarning: b,
      renderTrigger: y,
      spinner: C,
    }) {
      let j = (0, n.useId)(),
        w = (0, n.useId)(),
        k = (0, n.useId)(),
        [M, L] = (0, n.useState)(o),
        [N, S] = (0, n.useState)(e),
        [_, T] = (0, n.useState)("idle"),
        [F, A] = (0, n.useState)(null),
        [$, U] = (0, n.useState)(!1),
        D = (0, n.useRef)(!1),
        E = (0, n.useRef)(0),
        Z = (0, n.useRef)(void 0)
      ;(0, n.useEffect)(
        () => () => {
          ;(clearTimeout(Z.current), (E.current += 1))
        },
        [],
      )
      let I = (0, a.o7)(N),
        H = (0, a.WD)(I),
        P = /^[._-]|[._-]$/.test(I),
        R = M && null != t && I !== e && H.ok && !P,
        z = R && "checking" === _,
        B = R && "available" === _ && !s && !$,
        O = I === e || H.ok ? null : eq(H.reason, m)
      async function W(e, t) {
        try {
          let s = await f(e)
          t === E.current && T(s.available ? "available" : "unavailable")
        } catch {
          t === E.current && T("error")
        }
      }
      function Y() {
        !M || $ || s || (clearTimeout(Z.current), (E.current += 1), L(!1), d?.())
      }
      let V = null
      null != O
        ? (V = (0, r.jsx)("span", { className: eW, role: "alert", children: O }))
        : I !== e && P
          ? (V = (0, r.jsx)("span", {
              className: eW,
              role: "alert",
              children: m.formatMessage({
                id: "profile.editUsername.invalidEdge",
                defaultMessage: "Username can't start or end with a period, underscore, or hyphen",
                description:
                  "Inline error in the focused profile username editor when an end user enters punctuation at the beginning or end of a new username. Periods, underscores, and hyphens are allowed between other characters.",
              }),
            }))
          : z
            ? (V = (0, r.jsx)("span", {
                className: "srOnly-LIrXLN",
                role: "status",
                children: m.formatMessage({
                  id: "profile.usernameAvailability.checking",
                  defaultMessage: "Checking username availability\u2026",
                  description: "Status in the username editor while checking whether the entered username is available",
                }),
              }))
            : R && "error" === _
              ? (V = (0, r.jsxs)("span", {
                  className: eW,
                  role: "alert",
                  children: [
                    m.formatMessage({
                      id: "profile.usernameAvailability.checkError",
                      defaultMessage: "Couldn't check username availability. Try again",
                      description: "Error in the username editor when the availability request fails",
                    }),
                    v({
                      type: "button",
                      variant: "ghost",
                      onClick: () => {
                        ;(T("checking"), W(I, ++E.current))
                      },
                      children: m.formatMessage({
                        id: "profile.usernameAvailability.retry",
                        defaultMessage: "Retry",
                        description: "Button to retry a failed username availability check",
                      }),
                    }),
                  ],
                }))
              : R && "unavailable" === _
                ? (V = (0, r.jsx)("span", {
                    className: eW,
                    role: "alert",
                    children: m.formatMessage({
                      id: "profile.usernameAvailability.unavailable",
                      defaultMessage: "Username is not available",
                      description: "Error in the username editor when the entered username is taken",
                    }),
                  }))
                : null != F
                  ? (V = (0, r.jsx)("span", { className: eW, role: "alert", children: F }))
                  : R &&
                    "available" === _ &&
                    (V = (0, r.jsx)("span", {
                      className: "secondary-o8t1_G",
                      role: "status",
                      children: m.formatMessage({
                        id: "profile.usernameAvailability.available",
                        defaultMessage: "Username available",
                        description: "Status in the username editor when the entered username can be used",
                      }),
                    }))
      let q = {
        "aria-label": m.formatMessage({
          id: "profile.editUsername",
          defaultMessage: "Edit username",
          description: "Accessible label for the profile username edit button",
        }),
        onClick: () => {
          ;(M || c?.(), (D.current = !1), S(e), T("idle"), A(null), L(!0))
        },
        children: (0, r.jsxs)(r.Fragment, {
          children: [
            m.formatMessage({
              id: "profile.username.prefix",
              defaultMessage: "@",
              description: "At-sign displayed before a profile username. Preserve the symbol.",
            }),
            e,
          ],
        }),
      }
      return (0, r.jsxs)(r.Fragment, {
        children: [
          y
            ? y(q)
            : (0, r.jsx)("button", {
                ...q,
                type: "button",
                className: "interactive-button trigger-Z1nYM9",
                "data-editing": i,
              }),
          g({
            open: M,
            onOpenChange: (e) => {
              e || Y()
            },
            isSubmitting: $ || s,
            title: m.formatMessage({
              id: "profile.editUsername.title",
              defaultMessage: "Edit username",
              description: "Title of the focused profile username editor",
            }),
            onSubmit: (e) => {
              ;(e.preventDefault(),
                e.stopPropagation(),
                (async function () {
                  if (B) {
                    ;(A(null), U(!0))
                    try {
                      ;(await u(I), L(!1), d?.())
                    } catch (e) {
                      A(p(e))
                    }
                    U(!1)
                  }
                })())
            },
            body: (0, r.jsxs)("div", {
              className: eH,
              children: [
                "" !== e &&
                  b(
                    l
                      ? m.formatMessage({
                          id: "profile.editUsername.changeWarning",
                          defaultMessage:
                            "Your old profile link won't redirect to your new profile. Your site URLs will also change to use your new username. These updates may take some time.",
                          description:
                            "Warning before changing a profile username: the old profile link will not redirect, existing site URLs will change to use the new username, and the updates may take time",
                        })
                      : m.formatMessage({
                          id: "profile.editUsername.changeWarning.workspace",
                          defaultMessage:
                            "Your old profile link won't redirect to your new profile. This update may take some time.",
                          description:
                            "Warning in the Edit username dialog for a workspace member changing their existing profile username. Explains that their old profile link will not redirect and the change may take time to appear.",
                        }),
                  ),
                (0, r.jsxs)("div", {
                  className: eP,
                  children: [
                    (0, r.jsx)("label", {
                      htmlFor: j,
                      className: eR,
                      children: m.formatMessage({
                        id: "profile.usernameInputLabel",
                        defaultMessage: "Username",
                        description: "Accessible label for the editable profile username",
                      }),
                    }),
                    (0, r.jsx)("p", {
                      id: w,
                      className: ez,
                      children: m.formatMessage({
                        id: "profile.usernameHelper",
                        defaultMessage: "Use 3-20 lowercase letters, numbers, periods, underscores, or hyphens",
                        description: "Helper text explaining allowed username characters",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: eB,
                      children: x({
                        id: j,
                        name: "profile-handle",
                        type: "text",
                        role: "textbox",
                        autoFocus: !0,
                        autoCapitalize: "off",
                        autoComplete: "off",
                        ...{
                          "data-1p-ignore": "",
                          "data-lpignore": "true",
                          "data-bwignore": "true",
                          "data-form-type": "other",
                          "data-protonpass-ignore": "true",
                        },
                        spellCheck: !1,
                        value: N,
                        disabled: $ || s,
                        leadingControl: (0, r.jsx)("span", {
                          className: "prefix-rMjIW5",
                          "aria-hidden": !0,
                          children: m.formatMessage({
                            id: "profile.username.prefix",
                            defaultMessage: "@",
                            description: "At-sign displayed before a profile username. Preserve the symbol.",
                          }),
                        }),
                        trailingControl: (0, r.jsx)("span", {
                          className: "spinner-y3N8nK",
                          "aria-hidden": !0,
                          children: z ? C : null,
                        }),
                        "aria-invalid":
                          null != O || (I !== e && P) || (R && ("unavailable" === _ || "error" === _)) || null != F,
                        "aria-describedby": null == V ? w : `${w} ${k}`,
                        onChange: (s) => {
                          let i = (0, a.Dx)((0, a.o7)(s.target.value.toLowerCase()))
                          ;(D.current || i === N || ((D.current = !0), h?.()), S(i), A(null), clearTimeout(Z.current))
                          let l = ++E.current,
                            r = (0, a.o7)(i)
                          null != t && r !== e && (0, a.WD)(r).ok && !/^[._-]|[._-]$/.test(r)
                            ? (T("checking"),
                              (Z.current = setTimeout(() => {
                                W(r, l)
                              }, 400)))
                            : T("idle")
                        },
                      }),
                    }),
                    (0, r.jsx)("div", { id: k, className: eO, children: V }),
                  ],
                }),
              ],
            }),
            footer: n.Children.toArray([
              v({
                type: "button",
                variant: "secondary",
                disabled: $ || s,
                onClick: Y,
                children: m.formatMessage({
                  id: "profile.editUsername.cancel",
                  defaultMessage: "Cancel",
                  description: "Button to discard changes to a profile username",
                }),
              }),
              v({
                type: "submit",
                variant: "primary",
                disabled: !B,
                loading: $,
                children: m.formatMessage({
                  id: "profile.editUsername.change",
                  defaultMessage: "Change username",
                  description: "Button to confirm changing the profile username after checking availability",
                }),
              }),
            ]),
          }),
        ],
      })
    }
    function eq(e, t) {
      switch (e) {
        case "empty":
          return t.formatMessage({
            id: "profile.usernameValidation.empty",
            defaultMessage: "Enter a username",
            description: "Error shown when submitting an empty profile username",
          })
        case "invalidCharacters":
          return t.formatMessage({
            id: "profile.usernameValidation.invalidCharacters",
            defaultMessage: "Use only lowercase letters, numbers, periods, underscores, or hyphens",
            description: "Error shown when a profile username contains unsupported characters",
          })
        case "tooLong":
          return t.formatMessage({
            id: "profile.usernameValidation.tooLong",
            defaultMessage: "Username must be 20 characters or fewer",
            description: "Error shown when a profile username is too long",
          })
        case "tooShort":
          return t.formatMessage({
            id: "profile.usernameValidation.tooShort",
            defaultMessage: "Username must be at least 3 characters long",
            description: "Error shown when a profile username is too short",
          })
      }
    }
    function eG(e) {
      let t,
        s,
        i,
        l,
        d,
        c,
        h,
        u,
        f,
        p,
        m,
        g,
        x,
        v,
        b,
        y,
        C,
        j = (0, o.c)(63),
        {
          blockedSuffix: w,
          value: k,
          disabled: M,
          invalid: L,
          saving: N,
          error: S,
          onChange: _,
          intl: T,
          renderInput: F,
          renderSubmit: A,
          canSave: $,
          onSubmit: U,
        } = e,
        D = (0, n.useId)(),
        E = (0, n.useId)(),
        Z = (0, n.useId)(),
        I = (0, n.useId)(),
        H = (0, n.useId)()
      if (
        (j[0] !== T
          ? ((t = T.formatMessage({
              id: "profile.usernameRecovery.title",
              defaultMessage: "Update your username",
              description: "Title of the page requiring a username change before the user can view their profile",
            })),
            (j[0] = T),
            (j[1] = t))
          : (t = j[1]),
        j[2] !== t || j[3] !== D
          ? ((s = (0, r.jsx)("h1", { id: D, className: "heading-lg", children: t })),
            (j[2] = t),
            (j[3] = D),
            (j[4] = s))
          : (s = j[4]),
        j[5] !== w || j[6] !== T
          ? ((i = T.formatMessage(
              {
                id: "profile.usernameRecovery.description",
                defaultMessage:
                  "Your username can\u2019t end with \u201C{suffix}\u201D. Change it to continue to your profile.",
                description:
                  "Explanation of why a username must be updated. The suffix includes its leading dot, for example .data.",
              },
              { suffix: w },
            )),
            (j[5] = w),
            (j[6] = T),
            (j[7] = i))
          : (i = j[7]),
        j[8] !== E || j[9] !== i
          ? ((l = (0, r.jsx)("p", { id: E, className: "recoveryDescription-SgYPat", children: i })),
            (j[8] = E),
            (j[9] = i),
            (j[10] = l))
          : (l = j[10]),
        j[11] !== s || j[12] !== l
          ? ((d = (0, r.jsxs)("div", { className: "flex flex-col gap-2", children: [s, l] })),
            (j[11] = s),
            (j[12] = l),
            (j[13] = d))
          : (d = j[13]),
        j[14] !== $ || j[15] !== U
          ? ((c = (e) => {
              ;(e.preventDefault(), $ && U())
            }),
            (j[14] = $),
            (j[15] = U),
            (j[16] = c))
          : (c = j[16]),
        j[17] !== T
          ? ((h = T.formatMessage({
              id: "profile.usernameInputLabel",
              defaultMessage: "Username",
              description: "Accessible label for the editable profile username",
            })),
            (j[17] = T),
            (j[18] = h))
          : (h = j[18]),
        j[19] !== Z || j[20] !== h
          ? ((u = (0, r.jsx)("label", { htmlFor: Z, className: eR, children: h })),
            (j[19] = Z),
            (j[20] = h),
            (j[21] = u))
          : (u = j[21]),
        j[22] !== M ||
          j[23] !== S ||
          j[24] !== H ||
          j[25] !== I ||
          j[26] !== Z ||
          j[27] !== L ||
          j[28] !== _ ||
          j[29] !== F ||
          j[30] !== k)
      ) {
        let e
        ;(j[32] !== _ ? ((e = (e) => _((0, a.Dx)(e.target.value))), (j[32] = _), (j[33] = e)) : (e = j[33]),
          (f = F({
            id: Z,
            name: "profile-handle",
            type: "text",
            role: "textbox",
            value: k,
            disabled: M,
            size: "lg",
            variant: "outline",
            invalid: L,
            allowAutofillExtensions: !1,
            autoFocus: !0,
            autoCapitalize: "off",
            autoComplete: "off",
            spellCheck: !1,
            maxLength: 20,
            ...{
              "data-1p-ignore": "",
              "data-lpignore": "true",
              "data-bwignore": "true",
              "data-form-type": "other",
              "data-protonpass-ignore": "true",
            },
            "aria-invalid": L,
            "aria-describedby": null == S ? I : `${H} ${I}`,
            onChange: e,
          })),
          (j[22] = M),
          (j[23] = S),
          (j[24] = H),
          (j[25] = I),
          (j[26] = Z),
          (j[27] = L),
          (j[28] = _),
          (j[29] = F),
          (j[30] = k),
          (j[31] = f))
      } else f = j[31]
      ;(j[34] !== f ? ((p = (0, r.jsx)("div", { className: eB, children: f })), (j[34] = f), (j[35] = p)) : (p = j[35]),
        j[36] !== S || j[37] !== H
          ? ((m = null != S && (0, r.jsx)("div", { id: H, className: `${eO} ${eW}`, role: "alert", children: S })),
            (j[36] = S),
            (j[37] = H),
            (j[38] = m))
          : (m = j[38]),
        j[39] !== T
          ? ((g = T.formatMessage({
              id: "profile.usernameHelper",
              defaultMessage: "Use 3-20 lowercase letters, numbers, periods, underscores, or hyphens",
              description: "Helper text explaining allowed username characters",
            })),
            (j[39] = T),
            (j[40] = g))
          : (g = j[40]),
        j[41] !== I || j[42] !== g
          ? ((x = (0, r.jsx)("p", { id: I, className: ez, children: g })), (j[41] = I), (j[42] = g), (j[43] = x))
          : (x = j[43]),
        j[44] !== p || j[45] !== m || j[46] !== x || j[47] !== u
          ? ((v = (0, r.jsxs)("div", { className: eP, children: [u, p, m, x] })),
            (j[44] = p),
            (j[45] = m),
            (j[46] = x),
            (j[47] = u),
            (j[48] = v))
          : (v = j[48]))
      let P = !$
      return (
        j[49] !== T || j[50] !== A || j[51] !== N || j[52] !== P
          ? ((b = A({
              type: "submit",
              disabled: P,
              disabledTone: "dimmed",
              color: "primary",
              size: "xl",
              pill: !0,
              squircle: !1,
              loading: N,
              children: T.formatMessage({
                id: "profile.usernameRecovery.save",
                defaultMessage: "Save and continue",
                description: "Button to save a new valid username and continue to the profile page",
              }),
            })),
            (j[49] = T),
            (j[50] = A),
            (j[51] = N),
            (j[52] = P),
            (j[53] = b))
          : (b = j[53]),
        j[54] !== E || j[55] !== v || j[56] !== b || j[57] !== c || j[58] !== D
          ? ((y = (0, r.jsxs)("form", {
              className: eH,
              "aria-labelledby": D,
              "aria-describedby": E,
              onSubmit: c,
              children: [v, b],
            })),
            (j[54] = E),
            (j[55] = v),
            (j[56] = b),
            (j[57] = c),
            (j[58] = D),
            (j[59] = y))
          : (y = j[59]),
        j[60] !== y || j[61] !== d
          ? ((C = (0, r.jsxs)("div", {
              className: "mx-auto flex w-full max-w-sm flex-col gap-6 select-none",
              children: [d, y],
            })),
            (j[60] = y),
            (j[61] = d),
            (j[62] = C))
          : (C = j[62]),
        C
      )
    }
    var eK = "secondaryText-phTudW"
    function eX(e) {
      let t,
        s,
        a,
        i,
        l,
        d,
        c,
        h = (0, o.c)(24),
        {
          thumbnailLabel: u,
          thumbnail: f,
          workspaceNotice: p,
          audienceLabel: m,
          audienceOptions: g,
          selectedVisibility: x,
          renderAudienceOption: v,
          feedback: b,
          copyLink: y,
          socialActions: C,
        } = e
      h[0] !== g || h[1] !== x
        ? ((t = () => ({ options: g, visibility: x })), (h[0] = g), (h[1] = x), (h[2] = t))
        : (t = h[2])
      let [j] = (0, n.useState)(t)
      return (
        h[3] !== u
          ? ((s = (0, r.jsx)("h3", { className: "text-sm font-normal", children: u })), (h[3] = u), (h[4] = s))
          : (s = h[4]),
        h[5] !== f
          ? ((a = (0, r.jsx)("div", {
              className: "thumbnail-cI6yBd grid aspect-video place-items-center overflow-hidden rounded-2xl border",
              children: f,
            })),
            (h[5] = f),
            (h[6] = a))
          : (a = h[6]),
        h[7] !== s || h[8] !== a
          ? ((i = (0, r.jsxs)("div", { className: "flex flex-col gap-2", children: [s, a] })),
            (h[7] = s),
            (h[8] = a),
            (h[9] = i))
          : (i = h[9]),
        h[10] !== m || h[11] !== g || h[12] !== j || h[13] !== v || h[14] !== p
          ? ((l =
              null != p
                ? (0, r.jsx)("p", { className: `${eK} text-sm`, children: p })
                : (0, r.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [
                      (0, r.jsx)("h3", { className: "text-sm font-normal", children: m }),
                      null == g
                        ? ["private", "public"].map(v)
                        : (j.options ?? g).map((e) =>
                            "workspace" === e ||
                            ("public" === e && "public" !== j.visibility && j.options?.includes("public_searchable"))
                              ? null
                              : v(e),
                          ),
                    ],
                  })),
            (h[10] = m),
            (h[11] = g),
            (h[12] = j),
            (h[13] = v),
            (h[14] = p),
            (h[15] = l))
          : (l = h[15]),
        h[16] !== y || h[17] !== C
          ? ((d =
              null != y &&
              (0, r.jsxs)("div", {
                className: "linkSection-cUaaMe flex flex-col gap-4 border-t pt-4",
                children: [y, null != C && (0, r.jsx)("div", { className: "flex flex-wrap gap-2", children: C })],
              })),
            (h[16] = y),
            (h[17] = C),
            (h[18] = d))
          : (d = h[18]),
        h[19] !== b || h[20] !== i || h[21] !== l || h[22] !== d
          ? ((c = (0, r.jsxs)("div", { className: "flex flex-col gap-4", children: [i, l, b, d] })),
            (h[19] = b),
            (h[20] = i),
            (h[21] = l),
            (h[22] = d),
            (h[23] = c))
          : (c = h[23]),
        c
      )
    }
    function eJ(e) {
      let t,
        s,
        a,
        i,
        l,
        n = (0, o.c)(14),
        { icon: d, label: c, isPublicSelected: h, description: u, children: f } = e,
        p = `${h ? "publicIcon-fnKSPM" : "privateIcon-ycAVmK"} flex size-7 shrink-0 items-center justify-center rounded-lg`
      return (
        n[0] !== d || n[1] !== p
          ? ((t = (0, r.jsx)("span", { className: p, children: d })), (n[0] = d), (n[1] = p), (n[2] = t))
          : (t = n[2]),
        n[3] !== c ? ((s = (0, r.jsx)("span", { children: c })), (n[3] = c), (n[4] = s)) : (s = n[4]),
        n[5] !== u
          ? ((a = null != u && (0, r.jsx)("span", { className: `${eK} text-xs`, children: u })), (n[5] = u), (n[6] = a))
          : (a = n[6]),
        n[7] !== s || n[8] !== a
          ? ((i = (0, r.jsxs)("span", {
              className: "flex min-w-0 flex-1 flex-col gap-0.5 text-start",
              children: [s, a],
            })),
            (n[7] = s),
            (n[8] = a),
            (n[9] = i))
          : (i = n[9]),
        n[10] !== f || n[11] !== t || n[12] !== i
          ? ((l = (0, r.jsxs)(r.Fragment, { children: [t, i, f] })), (n[10] = f), (n[11] = t), (n[12] = i), (n[13] = l))
          : (l = n[13]),
        l
      )
    }
    function eQ(e) {
      let t,
        s = (0, o.c)(3),
        { id: a, children: i } = e
      return (
        s[0] !== i || s[1] !== a
          ? ((t = (0, r.jsx)("p", { id: a, className: `${eK} mt-2 ms-9 text-xs`, children: i })),
            (s[0] = i),
            (s[1] = a),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function e1(e) {
      let t,
        s,
        a,
        i = (0, o.c)(7),
        { url: l, children: n } = e
      return (
        i[0] !== l ? ((t = l.replace("https://", "")), (i[0] = l), (i[1] = t)) : (t = i[1]),
        i[2] !== t
          ? ((s = (0, r.jsx)("span", { className: "min-w-0 flex-1 truncate text-start select-text", children: t })),
            (i[2] = t),
            (i[3] = s))
          : (s = i[3]),
        i[4] !== n || i[5] !== s
          ? ((a = (0, r.jsxs)(r.Fragment, { children: [s, n] })), (i[4] = n), (i[5] = s), (i[6] = a))
          : (a = i[6]),
        a
      )
    }
    var e0 = s("W2xS")
    function e5(e) {
      let t,
        s,
        a,
        i,
        l,
        n,
        d,
        c,
        h = (0, o.c)(21),
        { icon: u, title: f, description: p, accessibleDescription: m, footer: g, children: x } = e
      return (
        h[0] !== u
          ? ((t = (0, r.jsx)("span", { className: "icon-sLnuy8", children: u })), (h[0] = u), (h[1] = t))
          : (t = h[1]),
        h[2] !== f
          ? ((s = (0, r.jsx)("div", { className: "title-vjsnYv", children: f })), (h[2] = f), (h[3] = s))
          : (s = h[3]),
        h[4] !== p
          ? ((a = p ? (0, r.jsx)("div", { className: "description-pD5OCn", children: p }) : null),
            (h[4] = p),
            (h[5] = a))
          : (a = h[5]),
        h[6] !== s || h[7] !== a
          ? ((i = (0, r.jsxs)("div", { className: "heading-w0sajv", children: [s, a] })),
            (h[6] = s),
            (h[7] = a),
            (h[8] = i))
          : (i = h[8]),
        h[9] !== t || h[10] !== i
          ? ((l = (0, r.jsxs)("header", { className: "header-TwZ9OD", children: [t, i] })),
            (h[9] = t),
            (h[10] = i),
            (h[11] = l))
          : (l = h[11]),
        h[12] !== x
          ? ((n = (0, r.jsx)("div", {
              className: "body-VNIJ5K",
              children: (0, r.jsx)("div", {
                className: "preview-ZDR0IX",
                children: (0, r.jsx)("div", {
                  className: "surface-fK57Yl",
                  children: (0, r.jsx)("div", { className: "scroll-kSr9SK", children: x }),
                }),
              }),
            })),
            (h[12] = x),
            (h[13] = n))
          : (n = h[13]),
        h[14] !== g
          ? ((d = (0, r.jsx)("footer", { className: "footer-j9U2Ml", children: g })), (h[14] = g), (h[15] = d))
          : (d = h[15]),
        h[16] !== m || h[17] !== l || h[18] !== n || h[19] !== d
          ? ((c = (0, r.jsxs)("div", { className: "content-Q6mtRR", children: [m, l, n, d] })),
            (h[16] = m),
            (h[17] = l),
            (h[18] = n),
            (h[19] = d),
            (h[20] = c))
          : (c = h[20]),
        c
      )
    }
    function e2(e) {
      let t,
        s,
        a,
        i,
        l,
        d,
        c,
        h,
        u,
        f,
        p,
        m,
        g,
        x,
        v = (0, o.c)(74),
        {
          field: b,
          value: y,
          maxLength: C,
          isSaving: j,
          onEditStarted: w,
          onChangeStarted: k,
          onSave: M,
          formatSaveError: L,
          intl: N,
        } = e,
        S = (0, n.useId)(),
        [_, T] = (0, n.useState)(null),
        [F, A] = (0, n.useState)(null),
        [$, U] = (0, n.useState)(!1),
        D = (0, n.useRef)(!1),
        E = (0, n.useRef)(!1),
        Z = (0, n.useRef)(!1),
        z = (0, n.useRef)(0),
        B = _?.value ?? y,
        O = "bio" === b && null != _ && B.length > C,
        W = null != _ && "bio" === b && B.length >= 0.8 * C,
        Y = $ && null != _ && null == F
      v[0] !== b || v[1] !== N
        ? ((t =
            "bio" === b
              ? N.formatMessage({
                  id: "profile.bioInputLabel",
                  defaultMessage: "Bio",
                  description: "Label for the personal biography in the profile editor",
                })
              : N.formatMessage({
                  id: "profile.nameInputLabel",
                  defaultMessage: "Display name",
                  description: "Accessible label for the editable profile display name",
                })),
          (v[0] = b),
          (v[1] = N),
          (v[2] = t))
        : (t = v[2])
      let q = t
      v[3] !== _ || v[4] !== b || v[5] !== L || v[6] !== N || v[7] !== j || v[8] !== C || v[9] !== M
        ? ((s = async function () {
            if (D.current || null == _ || E.current || j) return
            let e = _.value.trim()
            if (e === _.initialValue.trim() || ("bio" !== b && "" === e)) {
              ;(T(null), (Z.current = !1), A(null))
              return
            }
            if ("bio" === b && e.length > C) return
            let t = z.current
            ;((E.current = !0), U(!0), A(null))
            try {
              ;(await M(e), D.current || t !== z.current || (T(null), (Z.current = !1)))
            } catch (e) {
              D.current ||
                t !== z.current ||
                A(
                  L(e) ??
                    N.formatMessage({
                      id: "profile.updateError",
                      defaultMessage: "Unable to update profile",
                      description: "Fallback error shown when profile update fails",
                    }),
                )
            }
            ;(U(!1), (E.current = !1))
          }),
          (v[3] = _),
          (v[4] = b),
          (v[5] = L),
          (v[6] = N),
          (v[7] = j),
          (v[8] = C),
          (v[9] = M),
          (v[10] = s))
        : (s = v[10])
      let G = s,
        K = "bio" === b,
        X = null != F || O
      ;(v[11] !== F || v[12] !== S || v[13] !== W || v[14] !== Y
        ? ((a =
            null != F
              ? `${S}-error`
              : [...(Y ? [`${S}-status`] : []), ...(W ? [`${S}-count`] : [])].join(" ") || void 0),
          (v[11] = F),
          (v[12] = S),
          (v[13] = W),
          (v[14] = Y),
          (v[15] = a))
        : (a = v[15]),
        v[16] !== b || v[17] !== N || v[18] !== q
          ? ((i =
              "bio" === b
                ? N.formatMessage({
                    id: "profile.edit.bioPlaceholder",
                    defaultMessage: "A little about you",
                    description: "Placeholder for an empty biography while editing a profile inline",
                  })
                : q),
            (v[16] = b),
            (v[17] = N),
            (v[18] = q),
            (v[19] = i))
          : (i = v[19]),
        v[20] !== _ || v[21] !== j || v[22] !== w || v[23] !== y
          ? ((l = () => {
              j || ((D.current = !1), null == _ && w?.(), T((e) => e ?? { initialValue: y, value: y }))
            }),
            (v[20] = _),
            (v[21] = j),
            (v[22] = w),
            (v[23] = y),
            (v[24] = l))
          : (l = v[24]),
        v[25] !== G ? ((d = () => void G()), (v[25] = G), (v[26] = d)) : (d = v[26]),
        v[27] !== B || v[28] !== _ || v[29] !== b || v[30] !== k || v[31] !== w || v[32] !== y
          ? ((c = (e) => {
              let t = "bio" === b ? e.target.value.replace(/\r\n|[\r\n\u2028\u2029]/g, " ") : e.target.value
              ;(null == _ && ((D.current = !1), w?.()),
                Z.current || t === B || ((Z.current = !0), k?.()),
                (z.current = z.current + 1),
                T({ initialValue: _?.initialValue ?? y, value: t }),
                A(null))
            }),
            (v[27] = B),
            (v[28] = _),
            (v[29] = b),
            (v[30] = k),
            (v[31] = w),
            (v[32] = y),
            (v[33] = c))
          : (c = v[33]),
        v[34] !== j
          ? ((h = (e) => {
              !e.nativeEvent.isComposing &&
                ("Enter" === e.key && (e.preventDefault(), e.currentTarget.blur()),
                "Escape" !== e.key ||
                  j ||
                  (e.preventDefault(),
                  e.stopPropagation(),
                  (z.current = z.current + 1),
                  (D.current = !0),
                  T(null),
                  (Z.current = !1),
                  A(null),
                  e.currentTarget.blur()))
            }),
            (v[34] = j),
            (v[35] = h))
          : (h = v[35]),
        v[36] !== B ||
        v[37] !== b ||
        v[38] !== S ||
        v[39] !== j ||
        v[40] !== q ||
        v[41] !== C ||
        v[42] !== h ||
        v[43] !== K ||
        v[44] !== X ||
        v[45] !== a ||
        v[46] !== i ||
        v[47] !== l ||
        v[48] !== d ||
        v[49] !== c
          ? ((u = {
              id: S,
              name: b,
              value: B,
              maxLength: C,
              readOnly: j,
              autoComplete: "off",
              spellCheck: K,
              "aria-label": q,
              "aria-invalid": X,
              "aria-describedby": a,
              placeholder: i,
              onFocus: l,
              onBlur: d,
              onChange: c,
              onKeyDown: h,
            }),
            (v[36] = B),
            (v[37] = b),
            (v[38] = S),
            (v[39] = j),
            (v[40] = q),
            (v[41] = C),
            (v[42] = h),
            (v[43] = K),
            (v[44] = X),
            (v[45] = a),
            (v[46] = i),
            (v[47] = l),
            (v[48] = d),
            (v[49] = c),
            (v[50] = u))
          : (u = v[50]))
      let J = u
      return (
        v[51] !== _ || v[52] !== b || v[53] !== J
          ? ((f =
              "bio" === b
                ? (0, r.jsx)(V, { ...J, multiline: !0, quiet: null == _ })
                : (0, r.jsx)(V, { ...J, quiet: null == _ })),
            (v[51] = _),
            (v[52] = b),
            (v[53] = J),
            (v[54] = f))
          : (f = v[54]),
        v[55] !== F || v[56] !== S
          ? ((p = null != F && (0, r.jsx)("span", { id: `${S}-error`, className: H, role: "alert", children: F })),
            (v[55] = F),
            (v[56] = S),
            (v[57] = p))
          : (p = v[57]),
        v[58] !== S || v[59] !== N || v[60] !== Y
          ? ((m =
              Y &&
              (0, r.jsx)("span", {
                id: `${S}-status`,
                className: P,
                role: "status",
                children: N.formatMessage({
                  id: "profile.inlineEdit.saving",
                  defaultMessage: "Saving\u2026",
                  description: "Status shown while an inline profile text edit is being saved",
                }),
              })),
            (v[58] = S),
            (v[59] = N),
            (v[60] = Y),
            (v[61] = m))
          : (m = v[61]),
        v[62] !== B || v[63] !== S || v[64] !== N || v[65] !== O || v[66] !== C || v[67] !== W
          ? ((g =
              W &&
              (0, r.jsx)("span", {
                id: `${S}-count`,
                className: `${R} ${O ? H : P}`,
                role: "status",
                children: N.formatMessage(
                  {
                    id: "profile.bioCharacterCount",
                    defaultMessage: "{count, number}/{limit, number} characters",
                    description:
                      "Character count shown near the profile bio limit; count includes spaces, and limit is the maximum allowed length",
                  },
                  { count: B.length, limit: C },
                ),
              })),
            (v[62] = B),
            (v[63] = S),
            (v[64] = N),
            (v[65] = O),
            (v[66] = C),
            (v[67] = W),
            (v[68] = g))
          : (g = v[68]),
        v[69] !== f || v[70] !== p || v[71] !== m || v[72] !== g
          ? ((x = (0, r.jsxs)("span", { className: I, children: [f, p, m, g] })),
            (v[69] = f),
            (v[70] = p),
            (v[71] = m),
            (v[72] = g),
            (v[73] = x))
          : (x = v[73]),
        x
      )
    }
    function e3(e, t) {
      if ("u" < typeof IntersectionObserver) return () => {}
      let s = e.ownerDocument,
        a = new Set(),
        i = new Set(),
        l = !0,
        r = new IntersectionObserver(
          (r) => {
            if (l && "visible" === s.visibilityState)
              for (let s of r) {
                let l = s.target,
                  r = l.getAttribute("data-profile-artifact-kind"),
                  o = l.getAttribute("data-profile-artifact-id")
                if (
                  !s.isIntersecting ||
                  s.intersectionRatio <= 0 ||
                  !l.isConnected ||
                  !e.contains(l) ||
                  !i.has(l) ||
                  ("site" !== r && "skill" !== r) ||
                  null == o ||
                  l.checkVisibility?.({ visibilityProperty: !0, opacityProperty: !0 }) === !1
                )
                  continue
                let n = `${r}:${o}`
                a.has(n) || (a.add(n), t(r))
              }
          },
          { threshold: Number.EPSILON },
        ),
        o = () => {
          if (l && "visible" === s.visibilityState) {
            for (let t of i) e.contains(t) || (r.unobserve(t), i.delete(t))
            for (let t of e.querySelectorAll("button[data-profile-artifact-id]")) i.has(t) || (i.add(t), r.observe(t))
          }
        },
        n = () => {
          ;(r.takeRecords(), r.disconnect(), i.clear(), o())
        },
        d = new MutationObserver(o)
      return (
        d.observe(e, { childList: !0, subtree: !0 }),
        s.addEventListener("visibilitychange", n),
        o(),
        () => {
          ;((l = !1), r.disconnect(), d.disconnect(), s.removeEventListener("visibilitychange", n))
        }
      )
    }
    function e4(e, t) {
      return {
        removedCount: e.filter((e) => !t.includes(e)).length,
        addedCount: t.filter((t) => !e.includes(t)).length,
      }
    }
    let e6 = `radial-gradient(circle at center, transparent 0 ${109.5}px, black 110px ${148}px, transparent 180px)`
    function e7(e) {
      let t,
        s,
        a,
        i,
        l,
        d,
        c,
        h,
        u,
        f,
        p,
        m,
        g,
        x,
        v,
        b,
        y,
        C,
        j,
        w,
        k,
        M,
        L,
        N,
        S,
        _ = (0, o.c)(98),
        {
          source: T,
          intl: F,
          isSavingCrop: A,
          setIsSavingCrop: $,
          onSave: U,
          onSaveError: D,
          renderZoomButton: E,
          cropShape: Z,
          maxOutputSize: I,
          zoomLabel: H,
          cropLabel: P,
          initialCrop: R,
          children: z,
        } = e,
        B = void 0 === Z ? "circle" : Z,
        [O, W] = (0, n.useState)(null),
        [Y, V] = (0, n.useState)(null),
        [q, G] = (0, n.useState)(!1)
      _[0] !== O ? ((t = null == O ? 1 : e9(O.naturalWidth, O.naturalHeight)), (_[0] = O), (_[1] = t)) : (t = _[1])
      let K = t,
        X = null == O ? 1 : O.zoom / K
      _[2] !== O || _[3] !== R
        ? ((s = null == O ? null : e8(O.naturalWidth, O.naturalHeight, R)), (_[2] = O), (_[3] = R), (_[4] = s))
        : (s = _[4])
      let J = s,
        Q =
          null != O &&
          null != J &&
          (Math.abs(O.zoom / J.zoom - 1) > 1e-6 ||
            Math.abs(O.offsetX - J.offsetX) > 1e-6 ||
            Math.abs(O.offsetY - J.offsetY) > 1e-6),
        ee = "square" === B ? -110 : 70
      _[5] !== O || _[6] !== K
        ? ((a = (e) => {
            var t, s
            let a, i
            null != O &&
              W(
                ((t = O),
                (s = K * e),
                (a = (110 - t.offsetX) / t.zoom),
                (i = (110 - t.offsetY) / t.zoom),
                {
                  ...t,
                  offsetX: te(110 - a * s, t.naturalWidth, s),
                  offsetY: te(110 - i * s, t.naturalHeight, s),
                  zoom: s,
                }),
              )
          }),
          (_[5] = O),
          (_[6] = K),
          (_[7] = a))
        : (a = _[7])
      let et = a
      _[8] !== O || _[9] !== A || _[10] !== I || _[11] !== U || _[12] !== D || _[13] !== $ || _[14] !== T
        ? ((i = async () => {
            if (null != O && !A) {
              ;($(!0), G(!1))
              try {
                let e = await (async function (e, t, s) {
                  var a, i, l, r
                  let o = await ((a = e.dataUrl),
                    new Promise((e, t) => {
                      let s = new Image()
                      ;((s.onload = () => {
                        e(s)
                      }),
                        (s.onerror = () => {
                          t(Error("Unable to load profile photo"))
                        }),
                        (s.src = a))
                    })),
                    n = document.createElement("canvas"),
                    d = { x: -t.offsetX / t.zoom, y: -t.offsetY / t.zoom, size: 220 / t.zoom },
                    c = null == s ? 512 : Math.max(1, Math.min(s, Math.round(d.size)))
                  ;((n.height = c), (n.width = c))
                  let h = n.getContext("2d")
                  if (null == h) throw Error("Unable to create profile photo crop canvas")
                  h.drawImage(o, d.x, d.y, d.size, d.size, 0, 0, c, c)
                  let u = ((i = e.contentType), "image/png" === i || "image/webp" === i ? i : "image/jpeg"),
                    f = n.toDataURL(u, 0.92),
                    p = await ((l = n),
                    (r = u),
                    new Promise((e, t) => {
                      l.toBlob(
                        (s) => {
                          null == s ? t(Error("Unable to crop profile photo")) : e(s)
                        },
                        r,
                        0.92,
                      )
                    }))
                  return { photo: new File([p], e.filename, { type: p.type }), previewUrl: f, crop: d }
                })(T, O, I)
                ;($(!1), U(e))
              } catch (e) {
                ;($(!1), G(!0), D?.(e))
              }
            }
          }),
          (_[8] = O),
          (_[9] = A),
          (_[10] = I),
          (_[11] = U),
          (_[12] = D),
          (_[13] = $),
          (_[14] = T),
          (_[15] = i))
        : (i = _[15])
      let es = i
      ;(_[16] === Symbol.for("react.memo_cache_sentinel") ? ((l = { maxWidth: 360 }), (_[16] = l)) : (l = _[16]),
        _[17] !== B || _[18] !== O || _[19] !== T.dataUrl || _[20] !== ee
          ? ((d =
              null == O
                ? null
                : (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    className: "surround-lCv0HD",
                    style: { WebkitMaskImage: "circle" === B ? e6 : void 0, maskImage: "circle" === B ? e6 : void 0 },
                    children: (0, r.jsxs)("div", {
                      className: "surroundImage-PDuWBR",
                      "data-shape": B,
                      style: {
                        height: O.naturalHeight * O.zoom,
                        transform: `translate(${ee + O.offsetX}px, ${ee + O.offsetY}px)`,
                        width: O.naturalWidth * O.zoom,
                      },
                      children: [
                        (0, r.jsx)("img", {
                          src: T.dataUrl,
                          alt: "",
                          className: "blurredImage-OfhdnG",
                          draggable: !1,
                          style: {
                            filter: "blur(2px)",
                            height: "calc(100% + 4px)",
                            transform: "translate(-2px, -2px)",
                            width: "calc(100% + 4px)",
                          },
                        }),
                        (0, r.jsx)("div", { className: "fade-7LIwt1" }),
                      ],
                    }),
                  })),
            (_[17] = B),
            (_[18] = O),
            (_[19] = T.dataUrl),
            (_[20] = ee),
            (_[21] = d))
          : (d = _[21]),
        _[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = { height: 220, width: 220 }), (_[22] = c))
          : (c = _[22]))
      let ea = null == P ? void 0 : 0
      ;(_[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = () => {
            ;(G(!0), W(null))
          }),
          (_[23] = h))
        : (h = _[23]),
        _[24] !== R
          ? ((u = (e) => {
              W(e8(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight, R))
            }),
            (_[24] = R),
            (_[25] = u))
          : (u = _[25]),
        _[26] !== O || _[27] !== A
          ? ((f = (e) => {
              null == O ||
                A ||
                (e.currentTarget.setPointerCapture(e.pointerId),
                V({
                  offsetX: O.offsetX,
                  offsetY: O.offsetY,
                  pointerId: e.pointerId,
                  pointerX: e.clientX,
                  pointerY: e.clientY,
                }))
            }),
            (_[26] = O),
            (_[27] = A),
            (_[28] = f))
          : (f = _[28]),
        _[29] !== Y
          ? ((p = (e) => {
              null == Y ||
                (e.pointerId === Y.pointerId &&
                  W((t) =>
                    null == t
                      ? t
                      : {
                          ...t,
                          offsetX: te(Y.offsetX + e.clientX - Y.pointerX, t.naturalWidth, t.zoom),
                          offsetY: te(Y.offsetY + e.clientY - Y.pointerY, t.naturalHeight, t.zoom),
                        },
                  ))
            }),
            (_[29] = Y),
            (_[30] = p))
          : (p = _[30]),
        _[31] !== Y?.pointerId
          ? ((m = (e) => {
              e.pointerId === Y?.pointerId && V(null)
            }),
            (g = (e) => {
              e.pointerId === Y?.pointerId && V(null)
            }),
            (_[31] = Y?.pointerId),
            (_[32] = m),
            (_[33] = g))
          : ((m = _[32]), (g = _[33])),
        _[34] !== O || _[35] !== A
          ? ((x = (e) => {
              if (null == O || A) return
              let t = e.shiftKey ? 10 : 1,
                s = "ArrowLeft" === e.key ? -t : "ArrowRight" === e.key ? t : 0,
                a = "ArrowUp" === e.key ? -t : "ArrowDown" === e.key ? t : 0
              ;(0 !== s || 0 !== a) &&
                (e.preventDefault(),
                W({
                  ...O,
                  offsetX: te(O.offsetX + s, O.naturalWidth, O.zoom),
                  offsetY: te(O.offsetY + a, O.naturalHeight, O.zoom),
                }))
            }),
            (_[34] = O),
            (_[35] = A),
            (_[36] = x))
          : (x = _[36]),
        _[37] !== O
          ? ((v =
              null == O
                ? void 0
                : {
                    height: O.naturalHeight * O.zoom,
                    transform: `translate(${O.offsetX}px, ${O.offsetY}px)`,
                    width: O.naturalWidth * O.zoom,
                  }),
            (_[37] = O),
            (_[38] = v))
          : (v = _[38]),
        _[39] !== P ||
        _[40] !== T.dataUrl ||
        _[41] !== u ||
        _[42] !== f ||
        _[43] !== p ||
        _[44] !== m ||
        _[45] !== g ||
        _[46] !== x ||
        _[47] !== v ||
        _[48] !== ea
          ? ((b = (0, r.jsx)("img", {
              src: T.dataUrl,
              alt: "",
              "aria-label": P,
              className: "image-MWNWjq",
              draggable: !1,
              tabIndex: ea,
              onError: h,
              onLoad: u,
              onPointerDown: f,
              onPointerMove: p,
              onPointerUp: m,
              onPointerCancel: g,
              onKeyDown: x,
              style: v,
            })),
            (_[39] = P),
            (_[40] = T.dataUrl),
            (_[41] = u),
            (_[42] = f),
            (_[43] = p),
            (_[44] = m),
            (_[45] = g),
            (_[46] = x),
            (_[47] = v),
            (_[48] = ea),
            (_[49] = b))
          : (b = _[49]),
        _[50] !== B || _[51] !== b
          ? ((y = (0, r.jsx)("div", { className: "crop-RlRVlG", "data-shape": B, style: c, children: b })),
            (_[50] = B),
            (_[51] = b),
            (_[52] = y))
          : (y = _[52]),
        _[53] !== y || _[54] !== d
          ? ((C = (0, r.jsxs)("div", { className: "preview-RTT6bb", style: l, children: [d, y] })),
            (_[53] = y),
            (_[54] = d),
            (_[55] = C))
          : (C = _[55]))
      let ei = C
      if (_[56] !== O || _[57] !== F || _[58] !== A || _[59] !== E || _[60] !== et || _[61] !== X) {
        let e
        ;(_[63] !== et || _[64] !== X
          ? ((e = () => et(Math.max(1, X - 0.1))), (_[63] = et), (_[64] = X), (_[65] = e))
          : (e = _[65]),
          (j = E({
            direction: "out",
            label: F.formatMessage({
              id: "profile.photoCrop.zoomOut",
              defaultMessage: "Zoom out",
              description: "Accessible label for the profile picture zoom out button",
            }),
            disabled: null == O || A || X <= 1,
            onClick: e,
          })),
          (_[56] = O),
          (_[57] = F),
          (_[58] = A),
          (_[59] = E),
          (_[60] = et),
          (_[61] = X),
          (_[62] = j))
      } else j = _[62]
      _[66] !== F || _[67] !== H
        ? ((w =
            H ??
            F.formatMessage({
              id: "profile.photoCrop.zoomLabel",
              defaultMessage: "Zoom profile picture",
              description: "Accessible label for the profile picture crop zoom slider",
            })),
          (_[66] = F),
          (_[67] = H),
          (_[68] = w))
        : (w = _[68])
      let el = null == O || A
      if (
        (_[69] !== et
          ? ((k = (e) => {
              et(Number(e.target.value))
            }),
            (_[69] = et),
            (_[70] = k))
          : (k = _[70]),
        _[71] !== w || _[72] !== el || _[73] !== k || _[74] !== X
          ? ((M = (0, r.jsx)("input", {
              name: "zoom",
              type: "range",
              "aria-label": w,
              className: "slider-ZMr1C6",
              disabled: el,
              min: 1,
              max: 3,
              step: 0.01,
              value: X,
              onChange: k,
            })),
            (_[71] = w),
            (_[72] = el),
            (_[73] = k),
            (_[74] = X),
            (_[75] = M))
          : (M = _[75]),
        _[76] !== O || _[77] !== F || _[78] !== A || _[79] !== E || _[80] !== et || _[81] !== X)
      ) {
        let e
        ;(_[83] !== et || _[84] !== X
          ? ((e = () => et(Math.min(3, X + 0.1))), (_[83] = et), (_[84] = X), (_[85] = e))
          : (e = _[85]),
          (L = E({
            direction: "in",
            label: F.formatMessage({
              id: "profile.photoCrop.zoomIn",
              defaultMessage: "Zoom in",
              description: "Accessible label for the profile picture zoom in button",
            }),
            disabled: null == O || A || X >= 3,
            onClick: e,
          })),
          (_[76] = O),
          (_[77] = F),
          (_[78] = A),
          (_[79] = E),
          (_[80] = et),
          (_[81] = X),
          (_[82] = L))
      } else L = _[82]
      _[86] !== j || _[87] !== M || _[88] !== L
        ? ((N = (0, r.jsxs)("div", { className: "zoomControls-TMpwk6", children: [j, M, L] })),
          (_[86] = j),
          (_[87] = M),
          (_[88] = L),
          (_[89] = N))
        : (N = _[89])
      let er = N,
        eo = null != O && !A
      return (
        _[90] !== z || _[91] !== Q || _[92] !== q || _[93] !== ei || _[94] !== es || _[95] !== eo || _[96] !== er
          ? ((S = z({ preview: ei, zoomControls: er, hasCropError: q, hasCropChanges: Q, canSave: eo, saveCrop: es })),
            (_[90] = z),
            (_[91] = Q),
            (_[92] = q),
            (_[93] = ei),
            (_[94] = es),
            (_[95] = eo),
            (_[96] = er),
            (_[97] = S))
          : (S = _[97]),
        S
      )
    }
    function e8(e, t, s) {
      let a = e9(e, t)
      if (null == s)
        return { naturalHeight: t, naturalWidth: e, offsetX: (220 - e * a) / 2, offsetY: (220 - t * a) / 2, zoom: a }
      let i = 220 / Math.min(Math.min(e, t), Math.max(220 / (3 * a), s.size))
      return { naturalHeight: t, naturalWidth: e, offsetX: te(-s.x * i, e, i), offsetY: te(-s.y * i, t, i), zoom: i }
    }
    function e9(e, t) {
      return Math.max(220 / e, 220 / t)
    }
    function te(e, t, s) {
      return Math.min(0, Math.max(220 - t * s, e))
    }
    function tt(e) {
      return new Promise((t, s) => {
        let a = new FileReader()
        ;((a.onerror = () => {
          s(a.error ?? Error("Unable to read profile photo"))
        }),
          (a.onload = () => {
            "string" != typeof a.result
              ? s(Error("Unable to read profile photo"))
              : t({
                  contentType: e.type.trim() || "image/jpeg",
                  dataUrl: a.result,
                  filename: e.name.trim() || "profile-photo.jpg",
                })
          }),
          a.readAsDataURL(e))
      })
    }
    function ts(e) {
      let t,
        s,
        a,
        i,
        l,
        n = (0, o.c)(38),
        {
          field: d,
          value: c,
          formId: h,
          disabled: u,
          inert: f,
          error: p,
          isBioTooLong: m,
          maxLength: g,
          onChange: x,
          onCancel: v,
          intl: b,
          renderInput: y,
        } = e,
        C = `${h}-${d}`,
        j = "bio" === d && c.length >= 0.8 * g
      if (
        n[0] !== u ||
        n[1] !== p ||
        n[2] !== d ||
        n[3] !== h ||
        n[4] !== f ||
        n[5] !== C ||
        n[6] !== b ||
        n[7] !== m ||
        n[8] !== g ||
        n[9] !== v ||
        n[10] !== x ||
        n[11] !== y ||
        n[12] !== j ||
        n[13] !== c
      ) {
        let e,
          a,
          i =
            "bio" === d
              ? b.formatMessage({
                  id: "profile.bioInputLabel",
                  defaultMessage: "Bio",
                  description: "Label for the personal biography in the profile editor",
                })
              : b.formatMessage({
                  id: "profile.nameInputLabel",
                  defaultMessage: "Display name",
                  description: "Accessible label for the editable profile display name",
                })
        ;(n[16] !== d || n[17] !== x
          ? ((e = (e) => x("bio" === d ? e.target.value.replace(/\r\n|[\r\n\u2028\u2029]/g, " ") : e.target.value)),
            (n[16] = d),
            (n[17] = x),
            (n[18] = e))
          : (e = n[18]),
          n[19] !== u || n[20] !== d || n[21] !== v
            ? ((a = (e) => {
                !e.nativeEvent.isComposing &&
                  ("bio" === d && "Enter" === e.key && e.preventDefault(),
                  "Escape" !== e.key || u || (e.preventDefault(), e.stopPropagation(), v()))
              }),
              (n[19] = u),
              (n[20] = d),
              (n[21] = v),
              (n[22] = a))
            : (a = n[22]))
        let l = {
          id: C,
          name: d,
          form: h,
          value: c,
          disabled: u,
          inert: f,
          maxLength: g,
          "aria-label": i,
          "aria-describedby": null != p ? `${C}-error` : j ? `${C}-count` : void 0,
          "aria-invalid": null != p || ("bio" === d && m),
          autoComplete: "off",
          spellCheck: "bio" === d,
          placeholder:
            "bio" === d
              ? b.formatMessage({
                  id: "profile.edit.bioPlaceholder",
                  defaultMessage: "A little about you",
                  description: "Placeholder for an empty biography while editing a profile inline",
                })
              : i,
          onChange: e,
          onKeyDown: a,
        }
        ;((t = I),
          (s = y ? y(l) : "bio" === d ? (0, r.jsx)(V, { ...l, multiline: !0 }) : (0, r.jsx)(V, { ...l })),
          (n[0] = u),
          (n[1] = p),
          (n[2] = d),
          (n[3] = h),
          (n[4] = f),
          (n[5] = C),
          (n[6] = b),
          (n[7] = m),
          (n[8] = g),
          (n[9] = v),
          (n[10] = x),
          (n[11] = y),
          (n[12] = j),
          (n[13] = c),
          (n[14] = t),
          (n[15] = s))
      } else ((t = n[14]), (s = n[15]))
      return (
        n[23] !== p || n[24] !== C
          ? ((a = null != p && (0, r.jsx)("span", { id: `${C}-error`, className: H, role: "alert", children: p })),
            (n[23] = p),
            (n[24] = C),
            (n[25] = a))
          : (a = n[25]),
        n[26] !== C || n[27] !== b || n[28] !== m || n[29] !== g || n[30] !== j || n[31] !== c
          ? ((i =
              j &&
              (0, r.jsx)("span", {
                id: `${C}-count`,
                className: `${R} ${m ? H : P}`,
                role: "status",
                children: b.formatMessage(
                  {
                    id: "profile.bioCharacterCount",
                    defaultMessage: "{count, number}/{limit, number} characters",
                    description:
                      "Character count shown near the profile bio limit; count includes spaces, and limit is the maximum allowed length",
                  },
                  { count: c.length, limit: g },
                ),
              })),
            (n[26] = C),
            (n[27] = b),
            (n[28] = m),
            (n[29] = g),
            (n[30] = j),
            (n[31] = c),
            (n[32] = i))
          : (i = n[32]),
        n[33] !== t || n[34] !== s || n[35] !== a || n[36] !== i
          ? ((l = (0, r.jsxs)("span", { className: t, children: [s, a, i] })),
            (n[33] = t),
            (n[34] = s),
            (n[35] = a),
            (n[36] = i),
            (n[37] = l))
          : (l = n[37]),
        l
      )
    }
    function ta(e, t) {
      switch (t) {
        case "none":
          return e.formatMessage({
            id: "composer.mode.local.reasoning.none.label",
            defaultMessage: "None",
            description: "Reasoning effort label for a given model: none",
          })
        case "minimal":
          return e.formatMessage({
            id: "composer.mode.local.reasoning.minimal.label",
            defaultMessage: "Minimal",
            description: "Reasoning effort label for a given model: minimal",
          })
        case "low":
          return e.formatMessage({
            id: "composer.mode.local.reasoning.low.label.v2",
            defaultMessage: "Light",
            description:
              'Reasoning effort label for a given model: low. "Light" means a low level of computational/reasoning effort, not a short duration. In German, use "Gering" rather than "Kurz".',
          })
        case "medium":
          return e.formatMessage({
            id: "composer.mode.local.reasoning.medium.label",
            defaultMessage: "Medium",
            description:
              "Reasoning effort label for a given model: medium. The adjective modifies reasoning effort and should match the grammatical gender of the localized term for reasoning effort.",
          })
        case "high":
          return e.formatMessage({
            id: "composer.mode.local.reasoning.high.label",
            defaultMessage: "High",
            description:
              "Reasoning effort label for a given model: high. The adjective modifies reasoning effort and should match the grammatical gender of the localized term for reasoning effort.",
          })
        case "xhigh":
          return e.formatMessage({
            id: "composer.mode.local.reasoning.xhigh.label",
            defaultMessage: "Extra High",
            description:
              "Reasoning effort label for a given model: extra high. The adjective modifies reasoning effort and should match the grammatical gender of the localized term for reasoning effort.",
          })
        case "max":
          return e.formatMessage({
            id: "composer.mode.local.reasoning.max.label",
            defaultMessage: "Max",
            description: "Reasoning effort label for a given model: maximum",
          })
        case "ultra":
          return e.formatMessage({
            id: "composer.mode.local.reasoning.ultra.label",
            defaultMessage: "Ultra",
            description: "Reasoning effort label for a given model: ultra",
          })
        case "persistent":
          return e.formatMessage({
            id: "composer.mode.local.reasoning.persistent.label",
            defaultMessage: "Persistent",
            description:
              "Reasoning effort label for a mode that keeps the agent working through automatic continuation until paused or interrupted",
          })
        default:
          return t
      }
    }
    let ti = {
      initial: { height: 0, opacity: 0, overflow: "hidden" },
      animate: { height: "auto", opacity: 1, transitionEnd: { overflow: "visible" } },
      exit: { height: 0, opacity: 0, overflow: "hidden" },
      transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] },
    }
    function tl(e) {
      let t,
        s,
        a = (0, o.c)(11),
        { children: i, className: l, visible: n, animate: d, reducedMotion: c, Presence: h, MotionDiv: u } = e
      if (!(void 0 === d || d)) return n ? i : null
      let f = !n,
        p = !n
      return (
        a[0] !== u || a[1] !== h || a[2] !== i || a[3] !== c || a[4] !== n
          ? ((t = c
              ? n && (0, r.jsx)(T, { children: i })
              : (0, r.jsx)(h, {
                  initial: !1,
                  children: n && (0, r.jsx)(u, { ...ti, children: (0, r.jsx)(T, { children: i }) }),
                })),
            (a[0] = u),
            (a[1] = h),
            (a[2] = i),
            (a[3] = c),
            (a[4] = n),
            (a[5] = t))
          : (t = a[5]),
        a[6] !== l || a[7] !== f || a[8] !== p || a[9] !== t
          ? ((s = (0, r.jsx)("div", { className: l, "aria-hidden": f, inert: p, children: t })),
            (a[6] = l),
            (a[7] = f),
            (a[8] = p),
            (a[9] = t),
            (a[10] = s))
          : (s = a[10]),
        s
      )
    }
    var tr = "artwork-zOzMYH",
      to = "skillName-m71sZ_"
    function tn(e) {
      let t,
        s,
        a,
        i,
        l,
        d,
        c,
        h,
        u,
        f,
        p,
        m,
        g,
        x,
        v,
        b,
        y,
        C,
        j,
        w,
        k,
        M,
        L,
        N,
        S,
        _,
        T,
        F,
        A,
        $,
        U,
        D,
        E,
        Z,
        I,
        H,
        P,
        R,
        z,
        B,
        O,
        W,
        Y,
        V,
        q,
        G,
        K,
        X,
        J,
        Q,
        ee,
        et,
        es,
        ea = (0, o.c)(86),
        { allowSkills: ei, skillName: el, skillIcon: er } = e,
        eo = (0, n.useId)()
      ea[0] !== eo ? ((t = (e) => `url(#${eo}-${e})`), (ea[0] = eo), (ea[1] = t)) : (t = ea[1])
      let en = t,
        ed = en("clip0"),
        ec = en("filter0_d"),
        eh = en("clip1")
      ;(ea[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, r.jsx)("rect", {
            x: "9",
            y: "14.082",
            width: "84",
            height: "56",
            rx: "10",
            transform: "rotate(-10 9 14.082)",
            fill: "var(--profile-illustration-surface)",
          })),
          (ea[2] = s))
        : (s = ea[2]),
        ea[3] !== ei || ea[4] !== el
          ? ((a =
              ei && null == el
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("rect", {
                        x: "23.3394",
                        y: "49.3359",
                        width: "67",
                        height: "6",
                        rx: "3",
                        transform: "rotate(-10 23.3394 49.3359)",
                        fill: "var(--profile-illustration-placeholder)",
                      }),
                      (0, r.jsxs)("g", {
                        children: [
                          (0, r.jsx)("path", {
                            d: "M27.4302 28.3024L29.3305 39.0798C29.32 39.0814 29.3095 39.0839 29.2988 39.0854C28.8763 39.1521 28.4664 39.0967 28.0704 38.9184L23.8479 37.0096C23.51 36.8521 23.2267 36.6302 22.998 36.345C22.777 36.0583 22.6341 35.7341 22.5704 35.3732L21.0025 26.4816C20.943 26.1437 20.96 25.8138 21.0536 25.4927L27.4302 28.3024Z",
                            fill: "#FFD400",
                          }),
                          (0, r.jsx)("path", {
                            d: "M34.7977 21.7115C35.0163 21.9832 35.1565 22.2922 35.2175 22.6383L36.7873 31.5414C36.8523 31.9099 36.8198 32.2762 36.6902 32.6402C36.568 33.0031 36.3621 33.3109 36.0731 33.5635L30.4383 38.5593C30.1177 38.8427 29.7486 39.0164 29.3305 39.081L27.4281 28.2922L34.7733 21.6813C34.7814 21.6914 34.7898 21.7012 34.7977 21.7115Z",
                            fill: "#F75858",
                          }),
                          (0, r.jsx)("path", {
                            d: "M36.7874 31.5417C36.8523 31.9102 36.8199 32.2764 36.6903 32.6405C36.5681 33.0033 36.3621 33.3111 36.0731 33.5638L30.4384 38.5596C30.1178 38.843 29.7487 39.0167 29.3305 39.0813L28.4152 33.8905L35.7604 27.2796C35.7706 27.2875 35.9999 27.0756 35.9999 27.0756L36.7874 31.5417Z",
                            fill: "#8166E1",
                          }),
                          (0, r.jsx)("path", {
                            d: "M28.4173 33.9012L29.3305 39.0805C29.3199 39.0821 29.3094 39.0846 29.2988 39.0861C28.8763 39.1528 28.4663 39.0974 28.0704 38.9191L23.8479 37.0103C23.51 36.8527 23.2267 36.6309 22.998 36.3457C22.777 36.059 22.634 35.7348 22.5704 35.3739L21.7998 31.0039L28.4173 33.9012Z",
                            fill: "#BDAAFF",
                          }),
                          (0, r.jsx)("path", {
                            d: "M21.0537 25.4936C21.0642 25.4574 21.0756 25.4208 21.0881 25.3848C21.2103 25.0221 21.4163 24.7141 21.7052 24.4615L27.3096 19.4947C27.6309 19.2053 28.0036 19.0273 28.4262 18.9606C28.8473 18.8864 29.2559 18.938 29.6517 19.1162L33.9874 21.0742C34.3041 21.2198 34.5653 21.423 34.7726 21.6811L27.4283 28.2919L27.4303 28.3034L21.0537 25.4936Z",
                            fill: "#FFA43D",
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("g", {
                        children: (0, r.jsx)("rect", {
                          x: "29.4189",
                          y: "17.5898",
                          width: "45",
                          height: "6",
                          rx: "3",
                          transform: "rotate(-10 29.4189 17.5898)",
                          fill: "var(--profile-illustration-placeholder)",
                        }),
                      }),
                      (0, r.jsxs)("g", {
                        children: [
                          (0, r.jsxs)("g", {
                            children: [
                              (0, r.jsx)("circle", {
                                cx: "55.2279",
                                cy: "32.0387",
                                r: "9",
                                transform: "rotate(-10 55.2279 32.0387)",
                                fill: "#CDF3FF",
                              }),
                              (0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M53.4916 22.1893C58.93 21.2304 64.1173 24.8626 65.0762 30.3009C66.0351 35.7392 62.4029 40.9265 56.9646 41.8855C51.5263 42.8444 46.339 39.2122 45.38 33.7739C44.4211 28.3355 48.0533 23.1482 53.4916 22.1893ZM52.6166 33.5133C53.5381 37.8972 55.0967 40.184 56.6173 39.9158C58.1379 39.6477 58.8204 36.9658 58.1869 32.5311L52.6166 33.5133ZM47.5868 34.4002C48.3827 36.9884 50.4138 38.9348 52.8989 39.6919C51.9556 38.3233 51.1775 36.3554 50.6489 33.8602L47.5868 34.4002ZM60.1546 32.1841C60.5113 34.7099 60.4523 36.8251 60.0339 38.4338C62.1106 36.8725 63.3541 34.3488 63.2167 31.6442L60.1546 32.1841ZM50.4212 25.6401C48.3447 27.2015 47.1022 29.7261 47.2395 32.4306L50.3016 31.8906C49.9449 29.3646 50.0026 27.2489 50.4212 25.6401ZM53.8389 24.1589C52.3183 24.427 51.6359 27.1089 52.2693 31.5437L57.8396 30.5615C56.9181 26.1775 55.3596 23.8908 53.8389 24.1589ZM57.5562 24.382C58.4998 25.7507 59.2785 27.7187 59.8073 30.2145L62.8695 29.6746C62.0734 27.0859 60.0418 25.1389 57.5562 24.382Z",
                                fill: "#41CEF9",
                              }),
                            ],
                          }),
                          (0, r.jsx)("path", {
                            opacity: "0.5",
                            d: "M47.5781 55.8467C47.0934 55.9322 46.7882 55.7539 46.5477 55.2668L44.4146 50.9307C44.3369 50.76 44.2925 50.6429 44.2701 50.5159C44.206 50.1524 44.444 49.8486 44.8537 49.7764C45.2114 49.7133 45.4731 49.8814 45.6299 50.2643L47.3882 54.2975L47.4171 54.2925L47.751 49.9438C47.7738 49.4995 48.0158 49.2188 48.4544 49.1415C48.8872 49.0652 49.2038 49.2414 49.3782 49.6569L51.1851 53.6281L51.2197 53.6219L51.4915 49.2247C51.5079 48.8113 51.6915 48.5707 52.0435 48.5086C52.4532 48.4364 52.774 48.6357 52.8381 48.9992C52.8604 49.1262 52.8587 49.2514 52.8373 49.4337L52.3238 54.2483C52.268 54.7758 52.027 55.0622 51.5423 55.1477C51.0287 55.2383 50.7131 55.0678 50.4878 54.5661L48.7599 50.9082L48.7311 50.9133L48.3595 54.9473C48.3269 55.4707 48.0743 55.7592 47.5781 55.8467ZM57.0838 54.1706C56.5991 54.2561 56.2939 54.0778 56.0534 53.5907L53.9203 49.2546C53.8426 49.0839 53.7982 48.9668 53.7758 48.8398C53.7117 48.4763 53.9497 48.1725 54.3594 48.1003C54.7171 48.0372 54.9788 48.2053 55.1356 48.5881L56.8939 52.6214L56.9228 52.6163L57.2567 48.2677C57.2795 47.8234 57.5215 47.5427 57.9601 47.4654C58.3929 47.3891 58.7095 47.5653 58.8839 47.9808L60.6908 51.9519L60.7254 51.9458L60.9972 47.5486C61.0136 47.1352 61.1972 46.8946 61.5492 46.8325C61.9589 46.7603 62.2797 46.9596 62.3438 47.3231C62.3661 47.45 62.3644 47.5753 62.343 47.7576L61.8295 52.5722C61.7737 53.0997 61.5327 53.3861 61.048 53.4716C60.5344 53.5621 60.2188 53.3917 59.9935 52.89L58.2657 49.2321L58.2368 49.2372L57.8652 53.2712C57.8326 53.7946 57.58 54.0831 57.0838 54.1706ZM66.5895 52.4945C66.1048 52.58 65.7996 52.4017 65.5591 51.9146L63.426 47.5785C63.3483 47.4078 63.3039 47.2906 63.2815 47.1637C63.2174 46.8002 63.4554 46.4964 63.8651 46.4242C64.2228 46.3611 64.4845 46.5291 64.6413 46.912L66.3996 50.9453L66.4285 50.9402L66.7624 46.5916C66.7852 46.1473 67.0272 45.8666 67.4658 45.7893C67.8986 45.713 68.2152 45.8892 68.3896 46.3047L70.1965 50.2758L70.2311 50.2697L70.5029 45.8725C70.5193 45.4591 70.7029 45.2185 71.0549 45.1564C71.4646 45.0842 71.7854 45.2835 71.8495 45.647C71.8719 45.7739 71.8701 45.8992 71.8487 46.0815L71.3352 50.8961C71.2794 51.4236 71.0384 51.71 70.5537 51.7955C70.0401 51.886 69.7245 51.7156 69.4992 51.2139L67.7714 47.556L67.7425 47.5611L67.3709 51.5951C67.3383 52.1185 67.0857 52.407 66.5895 52.4945Z",
                            fill: "var(--profile-illustration-label)",
                          }),
                        ],
                      }),
                    ],
                  })),
            (ea[3] = ei),
            (ea[4] = el),
            (ea[5] = a))
          : (a = ea[5]),
        ea[6] !== eh || ea[7] !== a
          ? ((i = (0, r.jsxs)("g", { clipPath: eh, children: [s, a] })), (ea[6] = eh), (ea[7] = a), (ea[8] = i))
          : (i = ea[8]),
        ea[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)("rect", {
              x: "8.42077",
              y: "13.6765",
              width: "85",
              height: "57",
              rx: "10.5",
              transform: "rotate(-10 8.42077 13.6765)",
              stroke: "var(--profile-illustration-border)",
            })),
            (ea[9] = l))
          : (l = ea[9]),
        ea[10] !== ec || ea[11] !== i
          ? ((d = (0, r.jsxs)("g", { filter: ec, children: [i, l] })), (ea[10] = ec), (ea[11] = i), (ea[12] = d))
          : (d = ea[12]))
      let eu = en("filter1_d"),
        ef = en("clip2")
      ;(ea[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, r.jsx)("rect", {
            x: "96.4609",
            y: "-0.503906",
            width: "84",
            height: "56",
            rx: "10",
            transform: "rotate(10 96.4609 -0.503906)",
            fill: "var(--profile-illustration-surface)",
          })),
          (h = (0, r.jsx)("g", {
            children: (0, r.jsx)("rect", {
              x: "114.449",
              y: "9.77734",
              width: "45",
              height: "6",
              rx: "3",
              transform: "rotate(10 114.449 9.77734)",
              fill: "var(--profile-illustration-placeholder)",
            }),
          })),
          (u = (0, r.jsxs)("g", {
            children: [
              (0, r.jsxs)("g", {
                children: [
                  (0, r.jsx)("circle", {
                    cx: "133.759",
                    cy: "32.18",
                    r: "9",
                    transform: "rotate(10 133.759 32.18)",
                    fill: "#CDF3FF",
                  }),
                  (0, r.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M135.496 22.3302C140.934 23.2892 144.566 28.4765 143.607 33.9148C142.648 39.3531 137.461 42.9853 132.023 42.0264C126.584 41.0675 122.952 35.8802 123.911 30.4418C124.87 25.0035 130.057 21.3713 135.496 22.3302ZM130.8 32.672C130.167 37.1067 130.849 39.7886 132.37 40.0568C133.891 40.3249 135.449 38.0382 136.371 33.6542L130.8 32.672ZM125.77 31.7851C125.633 34.4895 126.876 37.0132 128.952 38.5746C128.534 36.9659 128.476 34.8506 128.833 32.3251L125.77 31.7851ZM138.338 34.0012C137.81 36.4966 137.031 38.4641 136.087 39.8327C138.573 39.0758 140.604 37.1296 141.4 34.5411L138.338 34.0012ZM131.43 24.5228C128.945 25.2798 126.914 27.2271 126.118 29.8155L129.18 30.3554C129.709 27.8598 130.486 25.8914 131.43 24.5228ZM135.148 24.2998C133.628 24.0317 132.069 26.3185 131.148 30.7024L136.718 31.6846C137.351 27.2499 136.669 24.568 135.148 24.2998ZM138.565 25.7809C138.984 27.3897 139.042 29.5054 138.686 32.0316L141.748 32.5715C141.885 29.8667 140.642 27.3422 138.565 25.7809Z",
                    fill: "#41CEF9",
                  }),
                ],
              }),
              (0, r.jsx)("path", {
                opacity: "0.5",
                d: "M118.428 51.9357C117.943 51.8503 117.717 51.5784 117.658 51.0384L117.136 46.2343C117.122 46.0472 117.12 45.922 117.142 45.795C117.207 45.4315 117.534 45.2275 117.944 45.2997C118.302 45.3628 118.49 45.6102 118.506 46.0236L118.779 50.4151L118.808 50.4201L120.609 46.448C120.782 46.0382 121.106 45.8573 121.544 45.9346C121.977 46.0109 122.215 46.2848 122.236 46.7349L122.576 51.0846L122.611 51.0907L124.37 47.0516C124.527 46.6687 124.782 46.5054 125.134 46.5675C125.543 46.6397 125.777 46.9367 125.712 47.3002C125.69 47.4272 125.646 47.5443 125.563 47.7082L123.434 52.0569C123.201 52.5335 122.877 52.7202 122.392 52.6347C121.878 52.5442 121.64 52.2761 121.6 51.7276L121.227 47.6993L121.198 47.6942L119.47 51.3579C119.26 51.8385 118.924 52.0232 118.428 51.9357ZM127.933 53.6118C127.449 53.5264 127.223 53.2545 127.163 52.7145L126.642 47.9104C126.627 47.7233 126.626 47.5981 126.648 47.4712C126.712 47.1076 127.04 46.9036 127.449 46.9758C127.807 47.0389 127.996 47.2863 128.012 47.6997L128.285 52.0912L128.314 52.0963L130.115 48.1241C130.288 47.7144 130.612 47.5334 131.05 47.6107C131.483 47.687 131.72 47.9609 131.742 48.411L132.082 52.7607L132.116 52.7668L133.876 48.7277C134.032 48.3448 134.287 48.1815 134.639 48.2436C135.049 48.3158 135.282 48.6128 135.218 48.9763C135.196 49.1033 135.151 49.2204 135.069 49.3843L132.94 53.733C132.707 54.2096 132.382 54.3963 131.898 54.3108C131.384 54.2203 131.146 53.9522 131.106 53.4037L130.733 49.3754L130.704 49.3703L128.975 53.034C128.766 53.5147 128.43 53.6993 127.933 53.6118ZM137.439 55.288C136.954 55.2025 136.729 54.9306 136.669 54.3906L136.148 49.5865C136.133 49.3995 136.131 49.2742 136.154 49.1473C136.218 48.7837 136.545 48.5797 136.955 48.6519C137.313 48.715 137.501 48.9624 137.518 49.3758L137.791 53.7673L137.819 53.7724L139.62 49.8002C139.794 49.3905 140.117 49.2095 140.556 49.2868C140.989 49.3631 141.226 49.637 141.248 50.0871L141.587 54.4368L141.622 54.4429L143.381 50.4038C143.538 50.0209 143.793 49.8576 144.145 49.9197C144.555 49.9919 144.788 50.2889 144.724 50.6524C144.701 50.7794 144.657 50.8965 144.575 51.0604L142.445 55.4091C142.212 55.8857 141.888 56.0724 141.403 55.987C140.89 55.8964 140.651 55.6283 140.611 55.0798L140.239 51.0515L140.21 51.0465L138.481 54.7101C138.271 55.1908 137.935 55.3755 137.439 55.288Z",
                fill: "var(--profile-illustration-label)",
              }),
            ],
          })),
          (ea[13] = c),
          (ea[14] = h),
          (ea[15] = u))
        : ((c = ea[13]), (h = ea[14]), (u = ea[15])),
        ea[16] !== ef
          ? ((f = (0, r.jsxs)("g", { clipPath: ef, children: [c, h, u] })), (ea[16] = ef), (ea[17] = f))
          : (f = ea[17]),
        ea[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, r.jsx)("rect", {
              x: "96.0554",
              y: "-1.08313",
              width: "85",
              height: "57",
              rx: "10.5",
              transform: "rotate(10 96.0554 -1.08313)",
              stroke: "var(--profile-illustration-border)",
            })),
            (ea[18] = p))
          : (p = ea[18]),
        ea[19] !== eu || ea[20] !== f
          ? ((m = (0, r.jsxs)("g", { filter: eu, children: [f, p] })), (ea[19] = eu), (ea[20] = f), (ea[21] = m))
          : (m = ea[21]),
        ea[22] !== m || ea[23] !== ed || ea[24] !== d
          ? ((g = (0, r.jsxs)("g", { clipPath: ed, children: [d, m] })),
            (ea[22] = m),
            (ea[23] = ed),
            (ea[24] = d),
            (ea[25] = g))
          : (g = ea[25]))
      let ep = en("filter2_d")
      ;(ea[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = (0, r.jsx)("rect", {
            x: "42",
            y: "3",
            width: "104",
            height: "65",
            rx: "12",
            fill: "var(--profile-illustration-surface)",
          })),
          (v = (0, r.jsx)("rect", {
            x: "41.5",
            y: "2.5",
            width: "105",
            height: "66",
            rx: "12.5",
            stroke: "var(--profile-illustration-border)",
          })),
          (ea[26] = x),
          (ea[27] = v))
        : ((x = ea[26]), (v = ea[27])),
        ea[28] !== er || ea[29] !== el
          ? ((b =
              null != el
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      null != er
                        ? (0, r.jsx)("foreignObject", { x: "50", y: "11", width: "24", height: "24", children: er })
                        : (0, r.jsxs)("g", {
                            children: [
                              (0, r.jsx)("path", {
                                d: "M59.6523 22.4219V34.3604C59.6407 34.3601 59.6289 34.3608 59.6172 34.3604C59.1506 34.352 58.7207 34.2148 58.3291 33.9482L54.1543 31.0977C53.8212 30.8644 53.5588 30.5724 53.3672 30.2227C53.184 29.8728 53.0919 29.4974 53.0918 29.0977V19.248C53.0918 18.8737 53.1726 18.5226 53.334 18.1953L59.6523 22.4219Z",
                                fill: "#FFD400",
                              }),
                              (0, r.jsx)("path", {
                                d: "M68.8164 16.7363C68.9997 17.0697 69.0918 17.4282 69.0918 17.8115V27.6738C69.0918 28.082 68.9875 28.4694 68.7793 28.8359C68.5793 29.2026 68.2997 29.4943 67.9414 29.7109L60.9414 34.0107C60.5433 34.2545 60.1138 34.3711 59.6523 34.3613V22.4102L68.7959 16.6992C68.8027 16.7116 68.8098 16.7238 68.8164 16.7363Z",
                                fill: "#F75858",
                              }),
                              (0, r.jsx)("path", {
                                d: "M69.0918 27.6738C69.0918 28.082 68.9875 28.4694 68.7793 28.8359C68.5793 29.2026 68.2997 29.4943 67.9414 29.7109L60.9414 34.0107C60.5433 34.2545 60.1138 34.3711 59.6523 34.3613V28.6113L68.7959 22.9004C68.8053 22.9108 69.0918 22.7266 69.0918 22.7266V27.6738Z",
                                fill: "#8166E1",
                              }),
                              (0, r.jsx)("path", {
                                d: "M59.6523 28.624V34.3613C59.6407 34.3611 59.6289 34.3617 59.6172 34.3613C59.1506 34.353 58.7207 34.2158 58.3291 33.9492L54.1543 31.0986C53.8212 30.8654 53.5588 30.5734 53.3672 30.2236C53.184 29.8738 53.0919 29.4984 53.0918 29.0986V24.2578L59.6523 28.624Z",
                                fill: "#BDAAFF",
                              }),
                              (0, r.jsx)("path", {
                                d: "M53.334 18.1967C53.3522 18.1598 53.3713 18.1227 53.3916 18.0863C53.5916 17.7198 53.8712 17.428 54.2295 17.2113L61.1914 12.9369C61.5914 12.6869 62.0255 12.5663 62.4922 12.5746C62.9587 12.5747 63.3878 12.7075 63.7793 12.974L68.0664 15.8988C68.379 16.1152 68.6211 16.383 68.7949 16.6996L59.6523 22.4106V22.4233L53.334 18.1967Z",
                                fill: "#FFA43D",
                              }),
                            ],
                          }),
                      (0, r.jsx)("foreignObject", {
                        x: "50",
                        y: "45",
                        width: "88",
                        height: "13",
                        children: (0, r.jsx)("div", { className: to, children: el }),
                      }),
                    ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("g", {
                        children: (0, r.jsx)("rect", {
                          x: "71.5",
                          y: "10",
                          width: "45",
                          height: "6",
                          rx: "3",
                          fill: "var(--profile-illustration-placeholder)",
                        }),
                      }),
                      (0, r.jsxs)("g", {
                        children: [
                          (0, r.jsxs)("g", {
                            children: [
                              (0, r.jsx)("circle", { cx: "94", cy: "35", r: "9", fill: "#CDF3FF" }),
                              (0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M94 25C99.5222 25 104 29.4778 104 35C104 40.5222 99.5222 45 94 45C88.4778 45 84 40.5222 84 35C84 29.4778 88.4778 25 94 25ZM91.1719 36C91.3181 40.4774 92.4559 43 94 43C95.5441 43 96.6819 40.4774 96.8281 36H91.1719ZM86.0645 36C86.3988 38.6871 88.0611 40.9567 90.377 42.1338C89.6856 40.6222 89.2611 38.5491 89.1738 36H86.0645ZM98.8262 36C98.7388 38.5493 98.3135 40.6221 97.6221 42.1338C99.9383 40.9568 101.601 38.6874 101.936 36H98.8262ZM90.377 27.8652C88.0609 29.0423 86.3988 31.3127 86.0645 34H89.1738C89.2612 31.4505 89.6854 29.3769 90.377 27.8652ZM94 27C92.4559 27 91.3181 29.5226 91.1719 34H96.8281C96.6819 29.5226 95.5441 27 94 27ZM97.6221 27.8652C98.3137 29.3769 98.7388 31.4502 98.8262 34H101.936C101.601 31.3124 99.9385 29.0422 97.6221 27.8652Z",
                                fill: "#41CEF9",
                              }),
                            ],
                          }),
                          (0, r.jsx)("path", {
                            opacity: "0.5",
                            d: "M82.332 57.1172C81.8398 57.1172 81.5703 56.8887 81.418 56.3672L80.0703 51.7266C80.0234 51.5449 80 51.4219 80 51.293C80 50.9238 80.2871 50.666 80.7031 50.666C81.0664 50.666 81.2949 50.877 81.3828 51.2812L82.4141 55.5586H82.4434L83.5273 51.334C83.627 50.9004 83.9141 50.666 84.3594 50.666C84.7988 50.666 85.0801 50.8945 85.1797 51.334L86.2695 55.5586H86.3047L87.3359 51.2754C87.4238 50.8711 87.6465 50.666 88.0039 50.666C88.4199 50.666 88.7012 50.918 88.7012 51.2871C88.7012 51.416 88.6777 51.5391 88.625 51.7148L87.2832 56.3672C87.1367 56.877 86.8496 57.1172 86.3574 57.1172C85.8359 57.1172 85.5547 56.8945 85.4199 56.3613L84.3535 52.459H84.3242L83.2578 56.3672C83.1348 56.877 82.8359 57.1172 82.332 57.1172ZM91.9844 57.1172C91.4922 57.1172 91.2227 56.8887 91.0703 56.3672L89.7227 51.7266C89.6758 51.5449 89.6523 51.4219 89.6523 51.293C89.6523 50.9238 89.9395 50.666 90.3555 50.666C90.7188 50.666 90.9473 50.877 91.0352 51.2812L92.0664 55.5586H92.0957L93.1797 51.334C93.2793 50.9004 93.5664 50.666 94.0117 50.666C94.4512 50.666 94.7324 50.8945 94.832 51.334L95.9219 55.5586H95.957L96.9883 51.2754C97.0762 50.8711 97.2988 50.666 97.6562 50.666C98.0723 50.666 98.3535 50.918 98.3535 51.2871C98.3535 51.416 98.3301 51.5391 98.2773 51.7148L96.9355 56.3672C96.7891 56.877 96.502 57.1172 96.0098 57.1172C95.4883 57.1172 95.207 56.8945 95.0723 56.3613L94.0059 52.459H93.9766L92.9102 56.3672C92.7871 56.877 92.4883 57.1172 91.9844 57.1172ZM101.637 57.1172C101.145 57.1172 100.875 56.8887 100.723 56.3672L99.375 51.7266C99.3281 51.5449 99.3047 51.4219 99.3047 51.293C99.3047 50.9238 99.5918 50.666 100.008 50.666C100.371 50.666 100.6 50.877 100.688 51.2812L101.719 55.5586H101.748L102.832 51.334C102.932 50.9004 103.219 50.666 103.664 50.666C104.104 50.666 104.385 50.8945 104.484 51.334L105.574 55.5586H105.609L106.641 51.2754C106.729 50.8711 106.951 50.666 107.309 50.666C107.725 50.666 108.006 50.918 108.006 51.2871C108.006 51.416 107.982 51.5391 107.93 51.7148L106.588 56.3672C106.441 56.877 106.154 57.1172 105.662 57.1172C105.141 57.1172 104.859 56.8945 104.725 56.3613L103.658 52.459H103.629L102.562 56.3672C102.439 56.877 102.141 57.1172 101.637 57.1172Z",
                            fill: "var(--profile-illustration-label)",
                          }),
                        ],
                      }),
                    ],
                  })),
            (ea[28] = er),
            (ea[29] = el),
            (ea[30] = b))
          : (b = ea[30]),
        ea[31] !== ep || ea[32] !== b
          ? ((y = (0, r.jsxs)("g", { filter: ep, children: [x, v, b] })), (ea[31] = ep), (ea[32] = b), (ea[33] = y))
          : (y = ea[33]),
        ea[34] !== g || ea[35] !== y
          ? ((C = (0, r.jsxs)("g", { children: [g, y] })), (ea[34] = g), (ea[35] = y), (ea[36] = C))
          : (C = ea[36]))
      let em = `${eo}-filter0_d`
      ;(ea[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, r.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" })),
          (w = (0, r.jsx)("feColorMatrix", {
            in: "SourceAlpha",
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha",
          })),
          (k = (0, r.jsx)("feMorphology", {
            radius: "2",
            operator: "erode",
            in: "SourceAlpha",
            result: "effect1_dropShadow_5896_79759",
          })),
          (M = (0, r.jsx)("feOffset", { dy: "2" })),
          (L = (0, r.jsx)("feGaussianBlur", { stdDeviation: "3" })),
          (N = (0, r.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" })),
          (S = (0, r.jsx)("feBlend", {
            mode: "normal",
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_5896_79759",
          })),
          (_ = (0, r.jsx)("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_dropShadow_5896_79759",
            result: "shape",
          })),
          (ea[37] = j),
          (ea[38] = w),
          (ea[39] = k),
          (ea[40] = M),
          (ea[41] = L),
          (ea[42] = N),
          (ea[43] = S),
          (ea[44] = _))
        : ((j = ea[37]),
          (w = ea[38]),
          (k = ea[39]),
          (M = ea[40]),
          (L = ea[41]),
          (N = ea[42]),
          (S = ea[43]),
          (_ = ea[44])),
        ea[45] !== em
          ? ((T = (0, r.jsxs)("filter", {
              id: em,
              x: "5",
              y: "-2.50391",
              width: "100.448",
              height: "77.7344",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [j, w, k, M, L, N, S, _],
            })),
            (ea[45] = em),
            (ea[46] = T))
          : (T = ea[46]))
      let eg = `${eo}-filter1_d`
      ;(ea[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = (0, r.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" })),
          (A = (0, r.jsx)("feColorMatrix", {
            in: "SourceAlpha",
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha",
          })),
          ($ = (0, r.jsx)("feMorphology", {
            radius: "2",
            operator: "erode",
            in: "SourceAlpha",
            result: "effect1_dropShadow_5896_79759",
          })),
          (U = (0, r.jsx)("feOffset", { dy: "2" })),
          (D = (0, r.jsx)("feGaussianBlur", { stdDeviation: "3" })),
          (E = (0, r.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" })),
          (Z = (0, r.jsx)("feBlend", {
            mode: "normal",
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_5896_79759",
          })),
          (I = (0, r.jsx)("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_dropShadow_5896_79759",
            result: "shape",
          })),
          (ea[47] = F),
          (ea[48] = A),
          (ea[49] = $),
          (ea[50] = U),
          (ea[51] = D),
          (ea[52] = E),
          (ea[53] = Z),
          (ea[54] = I))
        : ((F = ea[47]),
          (A = ea[48]),
          ($ = ea[49]),
          (U = ea[50]),
          (D = ea[51]),
          (E = ea[52]),
          (Z = ea[53]),
          (I = ea[54])),
        ea[55] !== eg
          ? ((H = (0, r.jsxs)("filter", {
              id: eg,
              x: "82.7363",
              y: "-2.50391",
              width: "100.448",
              height: "77.7344",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [F, A, $, U, D, E, Z, I],
            })),
            (ea[55] = eg),
            (ea[56] = H))
          : (H = ea[56]))
      let ex = `${eo}-filter2_d`
      ;(ea[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = (0, r.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" })),
          (R = (0, r.jsx)("feColorMatrix", {
            in: "SourceAlpha",
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha",
          })),
          (z = (0, r.jsx)("feMorphology", {
            radius: "2",
            operator: "erode",
            in: "SourceAlpha",
            result: "effect1_dropShadow_5896_79759",
          })),
          (B = (0, r.jsx)("feOffset", { dy: "2" })),
          (O = (0, r.jsx)("feGaussianBlur", { stdDeviation: "3" })),
          (W = (0, r.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" })),
          (Y = (0, r.jsx)("feBlend", {
            mode: "normal",
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_5896_79759",
          })),
          (V = (0, r.jsx)("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_dropShadow_5896_79759",
            result: "shape",
          })),
          (ea[57] = P),
          (ea[58] = R),
          (ea[59] = z),
          (ea[60] = B),
          (ea[61] = O),
          (ea[62] = W),
          (ea[63] = Y),
          (ea[64] = V))
        : ((P = ea[57]),
          (R = ea[58]),
          (z = ea[59]),
          (B = ea[60]),
          (O = ea[61]),
          (W = ea[62]),
          (Y = ea[63]),
          (V = ea[64])),
        ea[65] !== ex
          ? ((q = (0, r.jsxs)("filter", {
              id: ex,
              x: "37",
              y: "0",
              width: "114",
              height: "75",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [P, R, z, B, O, W, Y, V],
            })),
            (ea[65] = ex),
            (ea[66] = q))
          : (q = ea[66]))
      let ev = `${eo}-clip0`
      ;(ea[67] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = (0, r.jsx)("rect", {
            width: "188",
            height: "66",
            fill: "var(--profile-illustration-surface)",
            transform: "translate(0 3)",
          })),
          (ea[67] = G))
        : (G = ea[67]),
        ea[68] !== ev
          ? ((K = (0, r.jsx)("clipPath", { id: ev, children: G })), (ea[68] = ev), (ea[69] = K))
          : (K = ea[69]))
      let eb = `${eo}-clip1`
      ;(ea[70] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = (0, r.jsx)("rect", {
            x: "9",
            y: "14.082",
            width: "84",
            height: "56",
            rx: "10",
            transform: "rotate(-10 9 14.082)",
            fill: "var(--profile-illustration-surface)",
          })),
          (ea[70] = X))
        : (X = ea[70]),
        ea[71] !== eb
          ? ((J = (0, r.jsx)("clipPath", { id: eb, children: X })), (ea[71] = eb), (ea[72] = J))
          : (J = ea[72]))
      let ey = `${eo}-clip2`
      return (
        ea[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (0, r.jsx)("rect", {
              x: "96.4609",
              y: "-0.503906",
              width: "84",
              height: "56",
              rx: "10",
              transform: "rotate(10 96.4609 -0.503906)",
              fill: "var(--profile-illustration-surface)",
            })),
            (ea[73] = Q))
          : (Q = ea[73]),
        ea[74] !== ey
          ? ((ee = (0, r.jsx)("clipPath", { id: ey, children: Q })), (ea[74] = ey), (ea[75] = ee))
          : (ee = ea[75]),
        ea[76] !== T || ea[77] !== H || ea[78] !== q || ea[79] !== K || ea[80] !== J || ea[81] !== ee
          ? ((et = (0, r.jsxs)("defs", { children: [T, H, q, K, J, ee] })),
            (ea[76] = T),
            (ea[77] = H),
            (ea[78] = q),
            (ea[79] = K),
            (ea[80] = J),
            (ea[81] = ee),
            (ea[82] = et))
          : (et = ea[82]),
        ea[83] !== C || ea[84] !== et
          ? ((es = (0, r.jsxs)("svg", {
              className: tr,
              focusable: "false",
              width: "188",
              height: "75",
              viewBox: "0 0 188 75",
              fill: "none",
              children: [C, et],
            })),
            (ea[83] = C),
            (ea[84] = et),
            (ea[85] = es))
          : (es = ea[85]),
        es
      )
    }
    function td(e) {
      let t,
        s = (0, o.c)(3),
        { allowSkills: a, skillIcon: i } = e
      return (
        s[0] !== a || s[1] !== i
          ? ((t = (0, r.jsx)("div", {
              className: "container-qQCyoD",
              "aria-hidden": "true",
              children: (0, r.jsx)(tn, { allowSkills: a, skillIcon: i }),
            })),
            (s[0] = a),
            (s[1] = i),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function tc(e) {
      let t,
        s,
        a,
        i,
        l,
        d,
        c,
        h,
        u,
        f,
        p,
        m,
        g,
        x,
        v,
        b,
        y,
        C,
        j,
        w,
        k,
        M,
        L,
        N,
        S,
        _,
        T,
        F,
        A,
        $,
        U,
        D,
        E,
        Z,
        I,
        H,
        P,
        R,
        z,
        B,
        O,
        W,
        Y,
        V,
        q,
        G,
        K,
        X,
        J,
        Q,
        ee,
        et,
        es,
        ea,
        ei,
        el,
        er,
        eo,
        en,
        ed,
        ec,
        eh,
        eu,
        ef = (0, o.c)(139),
        { front: ep, left: em, right: eg, skillName: ex, skillIcon: ev } = e,
        eb = (0, n.useId)()
      if (null == ep) {
        let e
        return (
          ef[0] !== ev || ef[1] !== ex
            ? ((e = (0, r.jsx)(tn, { allowSkills: !0, skillName: ex, skillIcon: ev })),
              (ef[0] = ev),
              (ef[1] = ex),
              (ef[2] = e))
            : (e = ef[2]),
          e
        )
      }
      let ey = null != ep,
        eC = ey ? 52.5 : 66,
        ej = ey ? 65 : 76,
        ew = (66 - eC) / 2,
        ek = (76 - ej) / 2
      ef[3] !== eb ? ((t = (e) => `url(#${eb}-${e})`), (ef[3] = eb), (ef[4] = t)) : (t = ef[4])
      let eM = t,
        eL = ey ? 78 : 91,
        eN = ey ? "0 3 188 78" : "0 0 188 91",
        eS = eM("clip0_5891_79044"),
        e_ = eM("filter0_d_5891_79044"),
        eT = `translate(0 ${ew})`,
        eF = eM("clip1_5891_79044")
      ef[5] !== eC
        ? ((s = (0, r.jsx)("rect", {
            x: "9",
            y: "16.082",
            width: "84",
            height: eC,
            rx: "10",
            transform: "rotate(-10 9 16.082)",
            fill: "var(--profile-illustration-surface)",
          })),
          (ef[5] = eC),
          (ef[6] = s))
        : (s = ef[6])
      let eA = ey ? `translate(9 16.082) scale(${eC / 66}) translate(-9 -16.082)` : void 0
      ;(ef[7] !== ex
        ? ((a =
            null != ex
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("rect", {
                      x: "29.4189",
                      y: "19.5898",
                      width: "45",
                      height: "6",
                      rx: "3",
                      transform: "rotate(-10 29.4189 19.5898)",
                      fill: "var(--profile-illustration-placeholder)",
                    }),
                    (0, r.jsx)("circle", {
                      cx: "56.0965",
                      cy: "38.9645",
                      r: "9",
                      transform: "rotate(-10 56.0965 38.9645)",
                      fill: "#CDF3FF",
                    }),
                    (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M54.3598 29.1151C59.7981 28.1562 64.9854 31.7883 65.9444 37.2267C66.9033 42.665 63.2711 47.8523 57.8328 48.8112C52.3944 49.7702 47.2071 46.138 46.2482 40.6996C45.2893 35.2613 48.9215 30.074 54.3598 29.1151ZM53.4848 40.4391C54.4063 44.823 55.9648 47.1097 57.4855 46.8416C59.0061 46.5735 59.6885 43.8916 59.0551 39.4569L53.4848 40.4391ZM48.4549 41.326C49.2508 43.9142 51.282 45.8606 53.767 46.6177C52.8237 45.2491 52.0457 43.2812 51.5171 40.786L48.4549 41.326ZM61.0228 39.1099C61.3795 41.6356 61.3205 43.7509 60.9021 45.3596C62.9787 43.7983 64.2222 41.2746 64.0849 38.57L61.0228 39.1099ZM51.2893 32.5659C49.2129 34.1273 47.9703 36.6519 48.1076 39.3563L51.1698 38.8164C50.8131 36.2904 50.8708 34.1747 51.2893 32.5659ZM54.7071 31.0847C53.1865 31.3528 52.504 34.0347 53.1375 38.4694L58.7078 37.4873C57.7863 33.1033 56.2277 30.8166 54.7071 31.0847ZM58.4244 31.3078C59.368 32.6765 60.1467 34.6444 60.6755 37.1403L63.7376 36.6004C62.9416 34.0117 60.91 32.0646 58.4244 31.3078Z",
                      fill: "#41CEF9",
                    }),
                    (0, r.jsx)("path", {
                      opacity: "0.5",
                      d: "M48.4462 62.7725C47.9615 62.858 47.6564 62.6797 47.4158 62.1926L45.2828 57.8565C45.2051 57.6858 45.1606 57.5687 45.1383 57.4417C45.0742 57.0782 45.3121 56.7744 45.7218 56.7022C46.0796 56.6391 46.3413 56.8071 46.498 57.19L48.2564 61.2233L48.2852 61.2182L48.6191 56.8696C48.6419 56.4253 48.884 56.1446 49.3225 56.0673C49.7553 55.991 50.072 56.1672 50.2464 56.5827L52.0533 60.5538L52.0879 60.5477L52.3597 56.1505C52.376 55.7371 52.5597 55.4965 52.9117 55.4344C53.3214 55.3622 53.6421 55.5615 53.7062 55.925C53.7286 56.0519 53.7269 56.1772 53.7055 56.3595L53.1919 61.1741C53.1362 61.7016 52.8952 61.988 52.4105 62.0735C51.8969 62.164 51.5813 61.9936 51.356 61.4919L49.6281 57.834L49.5993 57.8391L49.2277 61.8731C49.1951 62.3965 48.9425 62.685 48.4462 62.7725ZM57.9519 61.0964C57.4672 61.1818 57.1621 61.0036 56.9215 60.5165L54.7885 56.1804C54.7108 56.0096 54.6663 55.8925 54.644 55.7656C54.5799 55.4021 54.8178 55.0983 55.2275 55.0261C55.5853 54.963 55.847 55.131 56.0037 55.5139L57.7621 59.5472L57.7909 59.5421L58.1248 55.1935C58.1476 54.7492 58.3897 54.4685 58.8282 54.3912C59.261 54.3149 59.5777 54.4911 59.7521 54.9065L61.559 58.8777L61.5936 58.8716L61.8654 54.4744C61.8817 54.061 62.0654 53.8204 62.4174 53.7583C62.8271 53.6861 63.1478 53.8853 63.2119 54.2489C63.2343 54.3758 63.2326 54.5011 63.2112 54.6833L62.6976 59.498C62.6419 60.0255 62.4009 60.3119 61.9162 60.3974C61.4026 60.4879 61.087 60.3175 60.8617 59.8158L59.1338 56.1579L59.105 56.163L58.7334 60.197C58.7008 60.7204 58.4482 61.0089 57.9519 61.0964ZM67.4576 59.4203C66.9729 59.5057 66.6678 59.3275 66.4272 58.8404L64.2942 54.5043C64.2165 54.3335 64.1721 54.2164 64.1497 54.0895C64.0856 53.7259 64.3235 53.4222 64.7332 53.35C65.091 53.2869 65.3527 53.4549 65.5094 53.8378L67.2678 57.8711L67.2966 57.866L67.6305 53.5174C67.6533 53.0731 67.8954 52.7924 68.3339 52.7151C68.7667 52.6387 69.0834 52.815 69.2578 53.2304L71.0647 57.2016L71.0993 57.1955L71.3711 52.7983C71.3875 52.3849 71.5711 52.1443 71.9231 52.0822C72.3328 52.0099 72.6535 52.2092 72.7176 52.5728C72.74 52.6997 72.7383 52.825 72.7169 53.0072L72.2033 57.8219C72.1476 58.3494 71.9066 58.6358 71.4219 58.7213C70.9083 58.8118 70.5927 58.6414 70.3674 58.1397L68.6395 54.4818L68.6107 54.4869L68.2391 58.5209C68.2065 59.0443 67.9539 59.3328 67.4576 59.4203Z",
                      fill: "var(--profile-illustration-label)",
                    }),
                  ],
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("rect", {
                      x: "23.3394",
                      y: "51.3359",
                      width: "67",
                      height: "6",
                      rx: "3",
                      transform: "rotate(-10 23.3394 51.3359)",
                      fill: "var(--profile-illustration-placeholder)",
                    }),
                    (0, r.jsx)("rect", {
                      x: "25.5967",
                      y: "64.1367",
                      width: "45",
                      height: "6",
                      rx: "3",
                      transform: "rotate(-10 25.5967 64.1367)",
                      fill: "var(--profile-illustration-placeholder)",
                    }),
                    (0, r.jsx)("path", {
                      d: "M27.4302 30.3024L29.3305 41.0798C29.32 41.0814 29.3095 41.0839 29.2988 41.0854C28.8763 41.1521 28.4664 41.0967 28.0704 40.9184L23.8479 39.0096C23.51 38.8521 23.2267 38.6302 22.998 38.345C22.777 38.0583 22.6341 37.7341 22.5704 37.3732L21.0025 28.4816C20.943 28.1437 20.96 27.8138 21.0536 27.4927L27.4302 30.3024Z",
                      fill: "#FFD400",
                    }),
                    (0, r.jsx)("path", {
                      d: "M34.7977 23.7115C35.0163 23.9832 35.1565 24.2922 35.2175 24.6383L36.7873 33.5414C36.8523 33.9099 36.8198 34.2762 36.6902 34.6402C36.568 35.0031 36.3621 35.3109 36.0731 35.5635L30.4383 40.5593C30.1177 40.8427 29.7486 41.0164 29.3305 41.081L27.4281 30.2922L34.7733 23.6813C34.7814 23.6914 34.7898 23.7012 34.7977 23.7115Z",
                      fill: "#F75858",
                    }),
                    (0, r.jsx)("path", {
                      d: "M36.7874 33.5417C36.8523 33.9102 36.8199 34.2764 36.6903 34.6405C36.5681 35.0033 36.3621 35.3111 36.0731 35.5638L30.4384 40.5596C30.1178 40.843 29.7487 41.0167 29.3305 41.0813L28.4152 35.8905L35.7604 29.2796C35.7706 29.2875 35.9999 29.0756 35.9999 29.0756L36.7874 33.5417Z",
                      fill: "#8166E1",
                    }),
                    (0, r.jsx)("path", {
                      d: "M28.4173 35.9012L29.3305 41.0805C29.3199 41.0821 29.3094 41.0846 29.2988 41.0861C28.8763 41.1528 28.4663 41.0974 28.0704 40.9191L23.8479 39.0103C23.51 38.8527 23.2267 38.6309 22.998 38.3457C22.777 38.059 22.634 37.7348 22.5704 37.3739L21.7998 33.0039L28.4173 35.9012Z",
                      fill: "#BDAAFF",
                    }),
                    (0, r.jsx)("path", {
                      d: "M21.0537 27.4936C21.0642 27.4574 21.0756 27.4208 21.0881 27.3848C21.2103 27.0221 21.4163 26.7141 21.7052 26.4615L27.3096 21.4947C27.6309 21.2053 28.0036 21.0273 28.4262 20.9606C28.8473 20.8864 29.2559 20.938 29.6517 21.1162L33.9874 23.0742C34.3041 23.2198 34.5653 23.423 34.7726 23.6811L27.4283 30.2919L27.4303 30.3034L21.0537 27.4936Z",
                      fill: "#FFA43D",
                    }),
                  ],
                })),
          (ef[7] = ex),
          (ef[8] = a))
        : (a = ef[8]),
        ef[9] !== a || ef[10] !== eA
          ? ((i = (0, r.jsx)("g", { transform: eA, children: a })), (ef[9] = a), (ef[10] = eA), (ef[11] = i))
          : (i = ef[11]),
        ef[12] !== em || ef[13] !== eC
          ? ((l = (0, r.jsx)("g", {
              transform: "rotate(-10 9 16.082)",
              children: (0, r.jsx)("svg", { x: "9", y: "16.082", width: "84", height: eC, children: em }),
            })),
            (ef[12] = em),
            (ef[13] = eC),
            (ef[14] = l))
          : (l = ef[14]),
        ef[15] !== i || ef[16] !== l || ef[17] !== eF || ef[18] !== s
          ? ((d = (0, r.jsxs)("g", { clipPath: eF, children: [s, i, l] })),
            (ef[15] = i),
            (ef[16] = l),
            (ef[17] = eF),
            (ef[18] = s),
            (ef[19] = d))
          : (d = ef[19]))
      let e$ = eC + 1
      ;(ef[20] !== e$
        ? ((c = (0, r.jsx)("rect", {
            x: "8.42077",
            y: "15.6765",
            width: "85",
            height: e$,
            rx: "10.5",
            transform: "rotate(-10 8.42077 15.6765)",
            stroke: "var(--profile-illustration-border)",
          })),
          (ef[20] = e$),
          (ef[21] = c))
        : (c = ef[21]),
        ef[22] !== d || ef[23] !== c || ef[24] !== e_ || ef[25] !== eT
          ? ((h = (0, r.jsxs)("g", { filter: e_, transform: eT, children: [d, c] })),
            (ef[22] = d),
            (ef[23] = c),
            (ef[24] = e_),
            (ef[25] = eT),
            (ef[26] = h))
          : (h = ef[26]))
      let eU = eM("filter1_d_5891_79044"),
        eD = `translate(0 ${ew})`,
        eE = eM("clip2_5891_79044")
      ef[27] !== eC
        ? ((u = (0, r.jsx)("rect", {
            x: "96.4609",
            y: "1.49609",
            width: "84",
            height: eC,
            rx: "10",
            transform: "rotate(10 96.4609 1.49609)",
            fill: "var(--profile-illustration-surface)",
          })),
          (ef[27] = eC),
          (ef[28] = u))
        : (u = ef[28])
      let eZ = ey ? `translate(179.185 16.082) scale(${eC / 66}) translate(-179.185 -16.082)` : void 0
      ;(ef[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, r.jsx)("rect", {
            x: "114.448",
            y: "11.7773",
            width: "45",
            height: "6",
            rx: "3",
            transform: "rotate(10 114.448 11.7773)",
            fill: "var(--profile-illustration-placeholder)",
          })),
          (p = (0, r.jsx)("circle", {
            cx: "132.891",
            cy: "39.1058",
            r: "9",
            transform: "rotate(10 132.891 39.1058)",
            fill: "#CDF3FF",
          })),
          (m = (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M134.628 29.256C140.066 30.2149 143.698 35.4022 142.739 40.8406C141.781 46.2789 136.593 49.9111 131.155 48.9522C125.717 47.9932 122.084 42.8059 123.043 37.3676C124.002 31.9293 129.19 28.2971 134.628 29.256ZM129.933 39.5978C129.299 44.0325 129.982 46.7144 131.502 46.9826C133.023 47.2507 134.581 44.9639 135.503 40.58L129.933 39.5978ZM124.903 38.7109C124.765 41.4152 126.008 43.939 128.085 45.5004C127.666 43.8917 127.608 41.7764 127.965 39.2508L124.903 38.7109ZM137.471 40.927C136.942 43.4224 136.163 45.3899 135.22 46.7585C137.705 46.0016 139.737 44.0554 140.533 41.4669L137.471 40.927ZM130.562 31.4486C128.077 32.2056 126.046 34.1529 125.25 36.7413L128.312 37.2812C128.841 34.7856 129.619 32.8172 130.562 31.4486ZM134.281 31.2256C132.76 30.9575 131.201 33.2442 130.28 37.6282L135.85 38.6104C136.484 34.1757 135.801 31.4938 134.281 31.2256ZM137.697 32.7067C138.116 34.3155 138.175 36.4312 137.818 38.9573L140.88 39.4973C141.017 36.7925 139.774 34.268 137.697 32.7067Z",
            fill: "#41CEF9",
          })),
          (g = (0, r.jsx)("path", {
            opacity: "0.5",
            d: "M117.56 58.8615C117.075 58.776 116.85 58.5042 116.79 57.9642L116.269 53.16C116.254 52.973 116.252 52.8478 116.275 52.7208C116.339 52.3573 116.666 52.1533 117.076 52.2255C117.434 52.2886 117.622 52.536 117.639 52.9494L117.911 57.3408L117.94 57.3459L119.741 53.3737C119.915 52.964 120.238 52.7831 120.677 52.8604C121.11 52.9367 121.347 53.2106 121.369 53.6607L121.708 58.0103L121.743 58.0164L123.502 53.9774C123.659 53.5945 123.914 53.4312 124.266 53.4933C124.676 53.5655 124.909 53.8625 124.845 54.226C124.822 54.3529 124.778 54.4701 124.695 54.634L122.566 58.9827C122.333 59.4593 122.009 59.646 121.524 59.5605C121.011 59.47 120.772 59.2018 120.732 58.6533L120.36 54.6251L120.331 54.62L118.602 58.2837C118.392 58.7643 118.056 58.949 117.56 58.8615ZM127.066 60.5376C126.581 60.4522 126.355 60.1803 126.296 59.6403L125.774 54.8362C125.76 54.6491 125.758 54.5239 125.78 54.3969C125.845 54.0334 126.172 53.8294 126.582 53.9016C126.94 53.9647 127.128 54.2121 127.144 54.6255L127.417 59.017L127.446 59.022L129.247 55.0498C129.42 54.6401 129.744 54.4592 130.182 54.5365C130.615 54.6128 130.853 54.8867 130.874 55.3368L131.214 59.6864L131.249 59.6926L133.008 55.6535C133.165 55.2706 133.42 55.1073 133.772 55.1694C134.181 55.2416 134.415 55.5386 134.35 55.9021C134.328 56.0291 134.284 56.1462 134.201 56.3101L132.072 60.6588C131.839 61.1354 131.515 61.3221 131.03 61.2366C130.516 61.1461 130.278 60.878 130.238 60.3295L129.865 56.3012L129.837 56.2961L128.108 59.9598C127.898 60.4404 127.562 60.6251 127.066 60.5376ZM136.571 62.2137C136.087 62.1283 135.861 61.8564 135.801 61.3164L135.28 56.5123C135.266 56.3252 135.264 56.2 135.286 56.073C135.35 55.7095 135.678 55.5055 136.087 55.5777C136.445 55.6408 136.634 55.8882 136.65 56.3016L136.923 60.6931L136.952 60.6982L138.753 56.726C138.926 56.3162 139.25 56.1353 139.688 56.2126C140.121 56.2889 140.358 56.5628 140.38 57.0129L140.72 61.3626L140.754 61.3687L142.514 57.3296C142.67 56.9467 142.925 56.7834 143.277 56.8455C143.687 56.9177 143.92 57.2147 143.856 57.5782C143.834 57.7052 143.789 57.8223 143.707 57.9862L141.578 62.3349C141.345 62.8115 141.02 62.9982 140.536 62.9127C140.022 62.8222 139.784 62.5541 139.744 62.0056L139.371 57.9773L139.342 57.9722L137.613 61.6359C137.404 62.1165 137.068 62.3012 136.571 62.2137Z",
            fill: "var(--profile-illustration-label)",
          })),
          (ef[29] = f),
          (ef[30] = p),
          (ef[31] = m),
          (ef[32] = g))
        : ((f = ef[29]), (p = ef[30]), (m = ef[31]), (g = ef[32])),
        ef[33] !== eZ
          ? ((x = (0, r.jsxs)("g", { transform: eZ, children: [f, p, m, g] })), (ef[33] = eZ), (ef[34] = x))
          : (x = ef[34]),
        ef[35] !== eg || ef[36] !== eC
          ? ((v = (0, r.jsx)("g", {
              transform: "rotate(10 96.4609 1.49609)",
              children: (0, r.jsx)("svg", { x: "96.4609", y: "1.49609", width: "84", height: eC, children: eg }),
            })),
            (ef[35] = eg),
            (ef[36] = eC),
            (ef[37] = v))
          : (v = ef[37]),
        ef[38] !== eE || ef[39] !== u || ef[40] !== x || ef[41] !== v
          ? ((b = (0, r.jsxs)("g", { clipPath: eE, children: [u, x, v] })),
            (ef[38] = eE),
            (ef[39] = u),
            (ef[40] = x),
            (ef[41] = v),
            (ef[42] = b))
          : (b = ef[42]))
      let eI = eC + 1
      ;(ef[43] !== eI
        ? ((y = (0, r.jsx)("rect", {
            x: "96.0554",
            y: "0.916866",
            width: "85",
            height: eI,
            rx: "10.5",
            transform: "rotate(10 96.0554 0.916866)",
            stroke: "var(--profile-illustration-border)",
          })),
          (ef[43] = eI),
          (ef[44] = y))
        : (y = ef[44]),
        ef[45] !== eU || ef[46] !== eD || ef[47] !== b || ef[48] !== y
          ? ((C = (0, r.jsxs)("g", { filter: eU, transform: eD, children: [b, y] })),
            (ef[45] = eU),
            (ef[46] = eD),
            (ef[47] = b),
            (ef[48] = y),
            (ef[49] = C))
          : (C = ef[49]),
        ef[50] !== h || ef[51] !== C || ef[52] !== eS
          ? ((j = (0, r.jsxs)("g", { clipPath: eS, children: [h, C] })),
            (ef[50] = h),
            (ef[51] = C),
            (ef[52] = eS),
            (ef[53] = j))
          : (j = ef[53]))
      let eH = eM("filter2_d_5891_79044"),
        eP = `translate(0 ${ek})`
      ef[54] !== ej
        ? ((w = (0, r.jsx)("rect", {
            x: "42",
            y: "3",
            width: "104",
            height: ej,
            rx: "12",
            fill: "var(--profile-illustration-surface)",
          })),
          (ef[54] = ej),
          (ef[55] = w))
        : (w = ef[55])
      let eR = ej + 1
      ef[56] !== eR
        ? ((k = (0, r.jsx)("rect", {
            x: "41.5",
            y: "2.5",
            width: "105",
            height: eR,
            rx: "12.5",
            stroke: "var(--profile-illustration-border)",
          })),
          (ef[56] = eR),
          (ef[57] = k))
        : (k = ef[57])
      let ez = ey ? `translate(94 3) scale(${ej / 76}) translate(-94 -3)` : void 0
      ;(ef[58] !== ev || ef[59] !== ex
        ? ((M =
            null != ex
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("foreignObject", { x: "50", y: "11", width: "24", height: "24", children: ev }),
                    (0, r.jsx)("foreignObject", {
                      x: "50",
                      y: "45",
                      width: "88",
                      height: "13",
                      children: (0, r.jsx)("div", { className: to, children: ex }),
                    }),
                    (0, r.jsx)("rect", {
                      x: "50.09",
                      y: "63",
                      width: "65",
                      height: "6",
                      rx: "3",
                      fill: "var(--profile-illustration-placeholder)",
                    }),
                  ],
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("rect", {
                      x: "71.5",
                      y: "10",
                      width: "45",
                      height: "6",
                      rx: "3",
                      fill: "var(--profile-illustration-placeholder)",
                    }),
                    (0, r.jsx)("circle", { cx: "94", cy: "40", r: "9", fill: "#CDF3FF" }),
                    (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M94 30C99.5222 30 104 34.4778 104 40C104 45.5222 99.5222 50 94 50C88.4778 50 84 45.5222 84 40C84 34.4778 88.4778 30 94 30ZM91.1719 41C91.3181 45.4774 92.4559 48 94 48C95.5441 48 96.6819 45.4774 96.8281 41H91.1719ZM86.0645 41C86.3988 43.6871 88.0611 45.9567 90.377 47.1338C89.6856 45.6222 89.2611 43.5491 89.1738 41H86.0645ZM98.8262 41C98.7388 43.5493 98.3135 45.6221 97.6221 47.1338C99.9383 45.9568 101.601 43.6874 101.936 41H98.8262ZM90.377 32.8652C88.0609 34.0423 86.3988 36.3127 86.0645 39H89.1738C89.2612 36.4505 89.6854 34.3769 90.377 32.8652ZM94 32C92.4559 32 91.3181 34.5226 91.1719 39H96.8281C96.6819 34.5226 95.5441 32 94 32ZM97.6221 32.8652C98.3137 34.3769 98.7388 36.4502 98.8262 39H101.936C101.601 36.3124 99.9385 34.0422 97.6221 32.8652Z",
                      fill: "#41CEF9",
                    }),
                    (0, r.jsx)("path", {
                      opacity: "0.5",
                      d: "M82.332 62.1172C81.8398 62.1172 81.5703 61.8887 81.418 61.3672L80.0703 56.7266C80.0234 56.5449 80 56.4219 80 56.293C80 55.9238 80.2871 55.666 80.7031 55.666C81.0664 55.666 81.2949 55.877 81.3828 56.2812L82.4141 60.5586H82.4434L83.5273 56.334C83.627 55.9004 83.9141 55.666 84.3594 55.666C84.7988 55.666 85.0801 55.8945 85.1797 56.334L86.2695 60.5586H86.3047L87.3359 56.2754C87.4238 55.8711 87.6465 55.666 88.0039 55.666C88.4199 55.666 88.7012 55.918 88.7012 56.2871C88.7012 56.416 88.6777 56.5391 88.625 56.7148L87.2832 61.3672C87.1367 61.877 86.8496 62.1172 86.3574 62.1172C85.8359 62.1172 85.5547 61.8945 85.4199 61.3613L84.3535 57.459H84.3242L83.2578 61.3672C83.1348 61.877 82.8359 62.1172 82.332 62.1172ZM91.9844 62.1172C91.4922 62.1172 91.2227 61.8887 91.0703 61.3672L89.7227 56.7266C89.6758 56.5449 89.6523 56.4219 89.6523 56.293C89.6523 55.9238 89.9395 55.666 90.3555 55.666C90.7188 55.666 90.9473 55.877 91.0352 56.2812L92.0664 60.5586H92.0957L93.1797 56.334C93.2793 55.9004 93.5664 55.666 94.0117 55.666C94.4512 55.666 94.7324 55.8945 94.832 56.334L95.9219 60.5586H95.957L96.9883 56.2754C97.0762 55.8711 97.2988 55.666 97.6562 55.666C98.0723 55.666 98.3535 55.918 98.3535 56.2871C98.3535 56.416 98.3301 56.5391 98.2773 56.7148L96.9355 61.3672C96.7891 61.877 96.502 62.1172 96.0098 62.1172C95.4883 62.1172 95.207 61.8945 95.0723 61.3613L94.0059 57.459H93.9766L92.9102 61.3672C92.7871 61.877 92.4883 62.1172 91.9844 62.1172ZM101.637 62.1172C101.145 62.1172 100.875 61.8887 100.723 61.3672L99.375 56.7266C99.3281 56.5449 99.3047 56.4219 99.3047 56.293C99.3047 55.9238 99.5918 55.666 100.008 55.666C100.371 55.666 100.6 55.877 100.688 56.2812L101.719 60.5586H101.748L102.832 56.334C102.932 55.9004 103.219 55.666 103.664 55.666C104.104 55.666 104.385 55.8945 104.484 56.334L105.574 60.5586H105.609L106.641 56.2754C106.729 55.8711 106.951 55.666 107.309 55.666C107.725 55.666 108.006 55.918 108.006 56.2871C108.006 56.416 107.982 56.5391 107.93 56.7148L106.588 61.3672C106.441 61.877 106.154 62.1172 105.662 62.1172C105.141 62.1172 104.859 61.8945 104.725 61.3613L103.658 57.459H103.629L102.562 61.3672C102.439 61.877 102.141 62.1172 101.637 62.1172Z",
                      fill: "var(--profile-illustration-label)",
                    }),
                  ],
                })),
          (ef[58] = ev),
          (ef[59] = ex),
          (ef[60] = M))
        : (M = ef[60]),
        ef[61] !== ez || ef[62] !== M
          ? ((L = (0, r.jsx)("g", { transform: ez, children: M })), (ef[61] = ez), (ef[62] = M), (ef[63] = L))
          : (L = ef[63]))
      let eB = eM("front")
      ;(ef[64] !== ep || ef[65] !== ej
        ? ((N = (0, r.jsx)("svg", { x: "42", y: "3", width: "104", height: ej, children: ep })),
          (ef[64] = ep),
          (ef[65] = ej),
          (ef[66] = N))
        : (N = ef[66]),
        ef[67] !== eB || ef[68] !== N
          ? ((S = (0, r.jsx)("g", { clipPath: eB, children: N })), (ef[67] = eB), (ef[68] = N), (ef[69] = S))
          : (S = ef[69]),
        ef[70] !== eH || ef[71] !== eP || ef[72] !== w || ef[73] !== k || ef[74] !== L || ef[75] !== S
          ? ((_ = (0, r.jsxs)("g", { filter: eH, transform: eP, children: [w, k, L, S] })),
            (ef[70] = eH),
            (ef[71] = eP),
            (ef[72] = w),
            (ef[73] = k),
            (ef[74] = L),
            (ef[75] = S),
            (ef[76] = _))
          : (_ = ef[76]))
      let eO = `${eb}-front`
      ;(ef[77] !== ej
        ? ((T = (0, r.jsx)("rect", { x: "42", y: "3", width: "104", height: ej, rx: "12" })),
          (ef[77] = ej),
          (ef[78] = T))
        : (T = ef[78]),
        ef[79] !== eO || ef[80] !== T
          ? ((F = (0, r.jsx)("clipPath", { id: eO, children: T })), (ef[79] = eO), (ef[80] = T), (ef[81] = F))
          : (F = ef[81]))
      let eW = `${eb}-filter0_d_5891_79044`
      ;(ef[82] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = (0, r.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" })),
          ($ = (0, r.jsx)("feColorMatrix", {
            in: "SourceAlpha",
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha",
          })),
          (U = (0, r.jsx)("feMorphology", {
            radius: "2",
            operator: "erode",
            in: "SourceAlpha",
            result: "effect1_dropShadow_5891_79044",
          })),
          (D = (0, r.jsx)("feOffset", { dy: "2" })),
          (E = (0, r.jsx)("feGaussianBlur", { stdDeviation: "3" })),
          (Z = (0, r.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" })),
          (I = (0, r.jsx)("feBlend", {
            mode: "normal",
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_5891_79044",
          })),
          (H = (0, r.jsx)("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_dropShadow_5891_79044",
            result: "shape",
          })),
          (ef[82] = A),
          (ef[83] = $),
          (ef[84] = U),
          (ef[85] = D),
          (ef[86] = E),
          (ef[87] = Z),
          (ef[88] = I),
          (ef[89] = H))
        : ((A = ef[82]),
          ($ = ef[83]),
          (U = ef[84]),
          (D = ef[85]),
          (E = ef[86]),
          (Z = ef[87]),
          (I = ef[88]),
          (H = ef[89])),
        ef[90] !== eW
          ? ((P = (0, r.jsxs)("filter", {
              id: eW,
              x: "5",
              y: "-0.503906",
              width: "102.185",
              height: "87.582",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [A, $, U, D, E, Z, I, H],
            })),
            (ef[90] = eW),
            (ef[91] = P))
          : (P = ef[91]))
      let eY = `${eb}-filter1_d_5891_79044`
      ;(ef[92] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = (0, r.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" })),
          (z = (0, r.jsx)("feColorMatrix", {
            in: "SourceAlpha",
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha",
          })),
          (B = (0, r.jsx)("feMorphology", {
            radius: "2",
            operator: "erode",
            in: "SourceAlpha",
            result: "effect1_dropShadow_5891_79044",
          })),
          (O = (0, r.jsx)("feOffset", { dy: "2" })),
          (W = (0, r.jsx)("feGaussianBlur", { stdDeviation: "3" })),
          (Y = (0, r.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" })),
          (V = (0, r.jsx)("feBlend", {
            mode: "normal",
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_5891_79044",
          })),
          (q = (0, r.jsx)("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_dropShadow_5891_79044",
            result: "shape",
          })),
          (ef[92] = R),
          (ef[93] = z),
          (ef[94] = B),
          (ef[95] = O),
          (ef[96] = W),
          (ef[97] = Y),
          (ef[98] = V),
          (ef[99] = q))
        : ((R = ef[92]),
          (z = ef[93]),
          (B = ef[94]),
          (O = ef[95]),
          (W = ef[96]),
          (Y = ef[97]),
          (V = ef[98]),
          (q = ef[99])),
        ef[100] !== eY
          ? ((G = (0, r.jsxs)("filter", {
              id: eY,
              x: "81",
              y: "-0.503906",
              width: "102.185",
              height: "87.582",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [R, z, B, O, W, Y, V, q],
            })),
            (ef[100] = eY),
            (ef[101] = G))
          : (G = ef[101]))
      let eV = `${eb}-filter2_d_5891_79044`
      ;(ef[102] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = (0, r.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" })),
          (X = (0, r.jsx)("feColorMatrix", {
            in: "SourceAlpha",
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha",
          })),
          (J = (0, r.jsx)("feMorphology", {
            radius: "2",
            operator: "erode",
            in: "SourceAlpha",
            result: "effect1_dropShadow_5891_79044",
          })),
          (Q = (0, r.jsx)("feOffset", { dy: "2" })),
          (ee = (0, r.jsx)("feGaussianBlur", { stdDeviation: "3" })),
          (et = (0, r.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" })),
          (es = (0, r.jsx)("feBlend", {
            mode: "normal",
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_5891_79044",
          })),
          (ea = (0, r.jsx)("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_dropShadow_5891_79044",
            result: "shape",
          })),
          (ef[102] = K),
          (ef[103] = X),
          (ef[104] = J),
          (ef[105] = Q),
          (ef[106] = ee),
          (ef[107] = et),
          (ef[108] = es),
          (ef[109] = ea))
        : ((K = ef[102]),
          (X = ef[103]),
          (J = ef[104]),
          (Q = ef[105]),
          (ee = ef[106]),
          (et = ef[107]),
          (es = ef[108]),
          (ea = ef[109])),
        ef[110] !== eV
          ? ((ei = (0, r.jsxs)("filter", {
              id: eV,
              x: "37",
              y: "0",
              width: "114",
              height: "86",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [K, X, J, Q, ee, et, es, ea],
            })),
            (ef[110] = eV),
            (ef[111] = ei))
          : (ei = ef[111]))
      let eq = `${eb}-clip0_5891_79044`
      ;(ef[112] === Symbol.for("react.memo_cache_sentinel")
        ? ((el = (0, r.jsx)("rect", { width: "188", height: "88", fill: "white", transform: "translate(0 3)" })),
          (ef[112] = el))
        : (el = ef[112]),
        ef[113] !== eq
          ? ((er = (0, r.jsx)("clipPath", { id: eq, children: el })), (ef[113] = eq), (ef[114] = er))
          : (er = ef[114]))
      let eG = `${eb}-clip1_5891_79044`
      ;(ef[115] !== eC
        ? ((eo = (0, r.jsx)("rect", {
            x: "9",
            y: "16.082",
            width: "84",
            height: eC,
            rx: "10",
            transform: "rotate(-10 9 16.082)",
            fill: "white",
          })),
          (ef[115] = eC),
          (ef[116] = eo))
        : (eo = ef[116]),
        ef[117] !== eG || ef[118] !== eo
          ? ((en = (0, r.jsx)("clipPath", { id: eG, children: eo })), (ef[117] = eG), (ef[118] = eo), (ef[119] = en))
          : (en = ef[119]))
      let eK = `${eb}-clip2_5891_79044`
      return (
        ef[120] !== eC
          ? ((ed = (0, r.jsx)("rect", {
              x: "96.4609",
              y: "1.49609",
              width: "84",
              height: eC,
              rx: "10",
              transform: "rotate(10 96.4609 1.49609)",
              fill: "white",
            })),
            (ef[120] = eC),
            (ef[121] = ed))
          : (ed = ef[121]),
        ef[122] !== eK || ef[123] !== ed
          ? ((ec = (0, r.jsx)("clipPath", { id: eK, children: ed })), (ef[122] = eK), (ef[123] = ed), (ef[124] = ec))
          : (ec = ef[124]),
        ef[125] !== F ||
        ef[126] !== P ||
        ef[127] !== G ||
        ef[128] !== ei ||
        ef[129] !== er ||
        ef[130] !== en ||
        ef[131] !== ec
          ? ((eh = (0, r.jsxs)("defs", { children: [F, P, G, ei, er, en, ec] })),
            (ef[125] = F),
            (ef[126] = P),
            (ef[127] = G),
            (ef[128] = ei),
            (ef[129] = er),
            (ef[130] = en),
            (ef[131] = ec),
            (ef[132] = eh))
          : (eh = ef[132]),
        ef[133] !== eL || ef[134] !== eN || ef[135] !== j || ef[136] !== _ || ef[137] !== eh
          ? ((eu = (0, r.jsxs)("svg", {
              className: tr,
              width: "188",
              height: eL,
              viewBox: eN,
              fill: "none",
              focusable: "false",
              children: [j, _, eh],
            })),
            (ef[133] = eL),
            (ef[134] = eN),
            (ef[135] = j),
            (ef[136] = _),
            (ef[137] = eh),
            (ef[138] = eu))
          : (eu = ef[138]),
        eu
      )
    }
  },
}
//# sourceMappingURL=584510.c1d851429e.js.map
