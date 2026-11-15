export const __rspack_esm_ids = [594560]
export const __webpack_modules__ = {
  r5nL(e, t, n) {
    n.d(t, { C: () => c })
    var r = n("ABep"),
      a = n("QosV"),
      l = n("zd8w"),
      o = n("TL6G"),
      i = n("jDom"),
      s = n("s3wR"),
      d = n("e8Ti")
    function c(e) {
      let t,
        n,
        c,
        u,
        m,
        f,
        h = (0, a.c)(19),
        { children: p, getTarget: g, runCommand: b, onFindOpen: v, onFindStateChange: x } = e,
        [w, y] = (0, l.useState)(null)
      h[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            let e, t
            return (
              (e = 0),
              (t = null),
              {
                startCommand(n, r) {
                  if (
                    "open-find" !== n.type &&
                    "set-find-query" !== n.type &&
                    "find-next" !== n.type &&
                    "find-previous" !== n.type &&
                    "close-find" !== n.type
                  )
                    return
                  let a = ++e
                  return (
                    ("set-find-query" === n.type || "close-find" === n.type) &&
                      (t = { target: r, query: "close-find" === n.type ? "" : n.query }),
                    (n) => {
                      a === e && (y(n ? null : r), n || (t = null))
                    }
                  )
                },
                acceptState: (e, n) =>
                  (!(null != t && (0, s.U)(t.target, e)) || t.query === n.query) && ((t = null), !0),
              }
            )
          }),
          (h[0] = t))
        : (t = h[0])
      let [j] = (0, l.useState)(t)
      h[1] !== j || h[2] !== g || h[3] !== b
        ? ((n = async (e) => {
            let { command: t, ...n } = e,
              r = j.startCommand(t, n),
              a = await (0, d.q)({ ...n, command: t }, b)
            return ((0, s.U)(n, g()) && r?.("accepted" === a), a)
          }),
          (h[1] = j),
          (h[2] = g),
          (h[3] = b),
          (h[4] = n))
        : (n = h[4])
      let M = (0, i.K)(n)
      return (
        h[5] !== M || h[6] !== g || h[7] !== v
          ? ((c = (e) => {
              "open-find" === e.command.type
                ? v?.({ browserTabId: e.browserTabId, conversationId: e.conversationId })
                : (0, s.U)(e, g()) &&
                  ("find-next" === e.command.type || "find-previous" === e.command.type) &&
                  M({ browserTabId: e.browserTabId, conversationId: e.conversationId, command: e.command })
            }),
            (h[5] = M),
            (h[6] = g),
            (h[7] = v),
            (h[8] = c))
          : (c = h[8]),
        (0, o.JX)("browser-sidebar-command", c),
        h[9] !== j || h[10] !== g || h[11] !== x
          ? ((u = (e) => {
              ;(0, s.U)(e, g()) && j.acceptState(e, e.state) && x(e.state)
            }),
            (h[9] = j),
            (h[10] = g),
            (h[11] = x),
            (h[12] = u))
          : (u = h[12]),
        (0, o.JX)("browser-sidebar-find-state", u),
        h[13] !== p || h[14] !== M || h[15] !== w
          ? ((m = p({ runCommand: M, find: { failedTarget: w } })), (h[13] = p), (h[14] = M), (h[15] = w), (h[16] = m))
          : (m = h[16]),
        h[17] !== m ? ((f = (0, r.jsx)(r.Fragment, { children: m })), (h[17] = m), (h[18] = f)) : (f = h[18]),
        f
      )
    }
  },
  NsEU(e, t, n) {
    var r = n("ABep"),
      a = n("QosV"),
      l = n("Wf1j"),
      o = n("oyxz"),
      i = n("nMUV"),
      s = n("AXTp"),
      d = n("s3wR")
    function c(e) {
      return e.currentTarget.select()
    }
    n.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            n,
            u,
            m,
            f,
            h,
            p,
            g,
            b,
            v,
            x,
            w,
            y,
            j,
            M,
            C,
            S,
            k = (0, a.c)(63),
            {
              controller: T,
              inputId: F,
              target: A,
              state: B,
              domainControl: E,
              onQueryChange: _,
              onClose: I,
              focusPage: N,
            } = e,
            P = (0, l.A)()
          k[0] !== T.find.failedTarget || k[1] !== A
            ? ((t = (0, d.U)(A, T.find.failedTarget)), (k[0] = T.find.failedTarget), (k[1] = A), (k[2] = t))
            : (t = k[2])
          let U = t
          k[3] !== T || k[4] !== N || k[5] !== I || k[6] !== A
            ? ((n = () => {
                ;(I(), T.runCommand({ ...A, command: { type: "close-find" } }), N())
              }),
              (k[3] = T),
              (k[4] = N),
              (k[5] = I),
              (k[6] = A),
              (k[7] = n))
            : (n = k[7])
          let D = n
          k[8] !== B.query ? ((u = B.query.trim()), (k[8] = B.query), (k[9] = u)) : (u = k[9])
          let L = u.length > 0,
            z = null
          if (U) {
            let e
            ;(k[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(o.A, {
                  id: "codex.threadFindBar.unavailable",
                  defaultMessage: "Couldn’t search this page",
                  description: "Find-in-page error when the browser page is no longer available",
                })),
                (k[10] = e))
              : (e = k[10]),
              (z = e))
          } else if (L && 0 === B.matches) {
            let e
            ;(k[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(o.A, {
                  id: "codex.threadFindBar.noResults",
                  defaultMessage: "0 results",
                  description: "Find-in-thread label when there are no matches",
                })),
                (k[11] = e))
              : (e = k[11]),
              (z = e))
          } else if (L) {
            let e
            ;(k[12] !== B.activeMatchOrdinal || k[13] !== B.matches
              ? ((e = (0, r.jsx)(o.A, {
                  id: "codex.threadFindBar.results",
                  defaultMessage: "{active} / {matches} results",
                  description: "Find-in-thread label showing the active match index",
                  values: { active: B.activeMatchOrdinal, matches: B.matches },
                })),
                (k[12] = B.activeMatchOrdinal),
                (k[13] = B.matches),
                (k[14] = e))
              : (e = k[14]),
              (z = e))
          }
          ;(k[15] !== P
            ? ((m = P.formatMessage({
                id: "codex.threadFindBar.label.browser",
                defaultMessage: "Find in page",
                description: "Accessible label for the browser find input",
              })),
              (k[15] = P),
              (k[16] = m))
            : (m = k[16]),
            k[17] !== P
              ? ((f = P.formatMessage({
                  id: "codex.threadFindBar.placeholder.browser",
                  defaultMessage: "Find in page…",
                  description: "Placeholder for searching within the browser page",
                })),
                (k[17] = P),
                (k[18] = f))
              : (f = k[18]),
            k[19] !== T || k[20] !== _ || k[21] !== A
              ? ((h = (e) => {
                  ;(_(e), T.runCommand({ ...A, command: { type: "set-find-query", query: e } }))
                }),
                (k[19] = T),
                (k[20] = _),
                (k[21] = A),
                (k[22] = h))
              : (h = k[22]),
            k[23] !== T || k[24] !== A
              ? ((p = (e) => void T.runCommand({ ...A, command: { type: e ? "find-previous" : "find-next" } })),
                (k[23] = T),
                (k[24] = A),
                (k[25] = p))
              : (p = k[25]),
            k[26] !== D || k[27] !== F || k[28] !== B.query || k[29] !== m || k[30] !== f || k[31] !== h || k[32] !== p
              ? ((g = (0, r.jsx)(i.rV, {
                  id: F,
                  label: m,
                  placeholder: f,
                  value: B.query,
                  onChange: h,
                  onEnter: p,
                  onEscape: D,
                  onFocus: c,
                })),
                (k[26] = D),
                (k[27] = F),
                (k[28] = B.query),
                (k[29] = m),
                (k[30] = f),
                (k[31] = h),
                (k[32] = p),
                (k[33] = g))
              : (g = k[33]))
          let V = B.matches
          ;(k[34] !== P
            ? ((b = P.formatMessage({
                id: "codex.threadFindBar.previousResult",
                defaultMessage: "Previous result",
                description: "Button label to go to the previous find result",
              })),
              (k[34] = P),
              (k[35] = b))
            : (b = k[35]),
            k[36] !== P
              ? ((v = P.formatMessage({
                  id: "codex.threadFindBar.nextResult",
                  defaultMessage: "Next result",
                  description: "Button label to go to the next find result",
                })),
                (k[36] = P),
                (k[37] = v))
              : (v = k[37]),
            k[38] !== T || k[39] !== A
              ? ((x = () => void T.runCommand({ ...A, command: { type: "find-next" } })),
                (w = () => void T.runCommand({ ...A, command: { type: "find-previous" } })),
                (k[38] = T),
                (k[39] = A),
                (k[40] = x),
                (k[41] = w))
              : ((x = k[40]), (w = k[41])),
            k[42] !== L || k[43] !== B.matches || k[44] !== b || k[45] !== v || k[46] !== x || k[47] !== w
              ? ((y = (0, r.jsx)(i.rr, {
                  isVisible: L,
                  matches: V,
                  previousLabel: b,
                  nextLabel: v,
                  onNext: x,
                  onPrevious: w,
                })),
                (k[42] = L),
                (k[43] = B.matches),
                (k[44] = b),
                (k[45] = v),
                (k[46] = x),
                (k[47] = w),
                (k[48] = y))
              : (y = k[48]))
          let q = L || U
          return (
            k[49] !== z || k[50] !== q
              ? ((j = (0, r.jsx)(i.Af, { isVisible: q, label: z })), (k[49] = z), (k[50] = q), (k[51] = j))
              : (j = k[51]),
            k[52] !== P
              ? ((M = P.formatMessage({
                  id: "codex.threadFindBar.close",
                  defaultMessage: "Close find",
                  description: "Button label to close the find bar",
                })),
                (k[52] = P),
                (k[53] = M))
              : (M = k[53]),
            k[54] !== D || k[55] !== M
              ? ((C = (0, r.jsx)(i.$1, { label: M, onClose: D })), (k[54] = D), (k[55] = M), (k[56] = C))
              : (C = k[56]),
            k[57] !== E || k[58] !== y || k[59] !== j || k[60] !== C || k[61] !== g
              ? ((S = (0, r.jsxs)(s.N, { children: [g, E, y, j, C] })),
                (k[57] = E),
                (k[58] = y),
                (k[59] = j),
                (k[60] = C),
                (k[61] = g),
                (k[62] = S))
              : (S = k[62]),
            S
          )
        },
      },
    )
  },
  e8Ti(e, t, n) {
    var r = n("WFY2")
    n.d(
      t,
      {},
      {
        q: async function (e, t) {
          try {
            return await t(e)
          } catch (t) {
            return (
              r.v.error("Browser page command failed", { safe: { command: e.command.type }, sensitive: { error: t } }),
              "failed"
            )
          }
        },
      },
    )
  },
  s3wR(e, t, n) {
    n.d(
      t,
      {},
      {
        U: function (e, t) {
          return null != e && null != t && e.browserTabId === t.browserTabId && e.conversationId === t.conversationId
        },
      },
    )
  },
  JvtY(e, t, n) {
    var r = n("GaA7")
    n.d(
      t,
      {},
      {
        e: async function (e) {
          let t = r.appServices.browserHost
          return null == t ? "page-unavailable" : t.runPageCommand(e)
        },
      },
    )
  },
  nMUV(e, t, n) {
    var r = n("ABep"),
      a = n("QosV"),
      l = n("MwZW"),
      o = n("Cj22"),
      i = n("ROI2"),
      s = n("on57"),
      d = n("Sm6l"),
      c = n("HOLv"),
      u = n("JJW2")
    n.d(
      t,
      {},
      {
        $1: function (e) {
          let t,
            n,
            l,
            o = (0, a.c)(5),
            { label: s, onClose: u } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)("div", { className: "ms-2 me-2 h-4 w-px bg-border" })), (o[0] = t))
              : (t = o[0]),
            o[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, r.jsx)(c.I, { className: "text-default", "aria-hidden": !1, asset: i.Q })), (o[1] = n))
              : (n = o[1]),
            o[2] !== s || o[3] !== u
              ? ((l = (0, r.jsxs)("div", {
                  className: "col-[3/4] row-[1] flex h-[44px] items-center pe-4",
                  children: [
                    t,
                    (0, r.jsx)(d.$, {
                      className: "-m-0.5 size-6",
                      size: "icon",
                      color: "ghost",
                      uniform: !0,
                      onClick: u,
                      "aria-label": s,
                      children: n,
                    }),
                  ],
                })),
                (o[2] = s),
                (o[3] = u),
                (o[4] = l))
              : (l = o[4]),
            l
          )
        },
        Af: function (e) {
          let t,
            n,
            l = (0, a.c)(5),
            { isVisible: o, label: i } = e,
            d = o ? "max-h-9 translate-y-0 py-2 opacity-100" : "max-h-0 -translate-y-2 py-0 opacity-0"
          return (
            l[0] !== d
              ? ((t = (0, s.A)(
                  "text-codex-description pointer-events-none col-[1/4] row-[2] min-w-0 px-4 text-end text-base leading-6 transition-[max-height,opacity,padding,translate] duration-basic ease-out",
                  d,
                )),
                (l[0] = d),
                (l[1] = t))
              : (t = l[1]),
            l[2] !== i || l[3] !== t
              ? ((n = (0, r.jsx)("span", { className: t, children: i })), (l[2] = i), (l[3] = t), (l[4] = n))
              : (n = l[4]),
            n
          )
        },
        rV: function (e) {
          let t,
            n,
            l,
            i,
            s,
            d,
            m = (0, a.c)(24),
            {
              autoFocus: f,
              id: h,
              isLoading: p,
              label: g,
              onChange: b,
              onEnter: v,
              onEscape: x,
              onFocus: w,
              placeholder: y,
              value: j,
            } = e,
            M = void 0 === f || f,
            C = void 0 !== p && p
          ;(m[0] !== C
            ? ((t = C
                ? (0, r.jsx)(u.A, { "aria-hidden": !0, className: "size-4 animate-spin text-default" })
                : (0, r.jsx)(c.I, { className: "text-default", "aria-hidden": !1, asset: o.Y })),
              (m[0] = C),
              (m[1] = t))
            : (t = m[1]),
            m[2] !== h || m[3] !== g
              ? ((n = (0, r.jsx)("label", { className: "sr-only", htmlFor: h, children: g })),
                (m[2] = h),
                (m[3] = g),
                (m[4] = n))
              : (n = m[4]))
          let S = C || void 0
          return (
            m[5] !== b
              ? ((l = (e) => {
                  b(e.target.value)
                }),
                (m[5] = b),
                (m[6] = l))
              : (l = m[6]),
            m[7] !== v || m[8] !== x
              ? ((i = (e) => {
                  if (
                    ("Enter" === e.key || "Escape" === e.key) &&
                    (e.nativeEvent.isComposing || 229 === e.nativeEvent.keyCode)
                  )
                    return void e.stopPropagation()
                  if ("Enter" === e.key) {
                    ;(e.preventDefault(), v(e.shiftKey))
                    return
                  }
                  "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), x())
                }),
                (m[7] = v),
                (m[8] = x),
                (m[9] = i))
              : (i = m[9]),
            m[10] !== M ||
            m[11] !== h ||
            m[12] !== g ||
            m[13] !== w ||
            m[14] !== y ||
            m[15] !== S ||
            m[16] !== l ||
            m[17] !== i ||
            m[18] !== j
              ? ((s = (0, r.jsx)("input", {
                  id: h,
                  type: "text",
                  autoFocus: M,
                  value: j,
                  "aria-busy": S,
                  "aria-label": g,
                  placeholder: y,
                  className:
                    "h-6 min-w-0 flex-1 bg-transparent text-base leading-6 text-default outline-none placeholder:text-tertiary",
                  "data-codex-find-input": !0,
                  onChange: l,
                  onFocus: w,
                  onKeyDown: i,
                })),
                (m[10] = M),
                (m[11] = h),
                (m[12] = g),
                (m[13] = w),
                (m[14] = y),
                (m[15] = S),
                (m[16] = l),
                (m[17] = i),
                (m[18] = j),
                (m[19] = s))
              : (s = m[19]),
            m[20] !== t || m[21] !== n || m[22] !== s
              ? ((d = (0, r.jsxs)("div", {
                  className: "col-[1/2] row-[1] flex h-[44px] min-w-0 items-center gap-2 ps-4",
                  children: [t, n, s],
                })),
                (m[20] = t),
                (m[21] = n),
                (m[22] = s),
                (m[23] = d))
              : (d = m[23]),
            d
          )
        },
        rr: function (e) {
          let t,
            n,
            o,
            i,
            u,
            m,
            f,
            h = (0, a.c)(18),
            { isVisible: p, matches: g, nextLabel: b, onNext: v, onPrevious: x, previousLabel: w } = e,
            y = p
              ? "max-h-9 translate-y-0 border-t py-2 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 border-t-0 py-0 opacity-0"
          h[0] !== y
            ? ((t = (0, s.A)(
                "col-[1/4] row-[2] flex min-w-0 items-center border-default px-4 text-base leading-6 transition-[border-width,max-height,opacity,padding,translate] duration-basic ease-out",
                y,
              )),
              (h[0] = y),
              (h[1] = t))
            : (t = h[1])
          let j = 0 === g
          ;(h[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, r.jsx)(c.I, { "aria-hidden": !1, asset: l.l })), (h[2] = n))
            : (n = h[2]),
            h[3] !== x || h[4] !== w || h[5] !== j
              ? ((o = (0, r.jsx)(d.$, {
                  className: "h-4 w-4 p-0 text-codex-description",
                  size: "icon",
                  color: "ghost",
                  uniform: !0,
                  onClick: x,
                  disabled: j,
                  "aria-label": w,
                  children: n,
                })),
                (h[3] = x),
                (h[4] = w),
                (h[5] = j),
                (h[6] = o))
              : (o = h[6]))
          let M = 0 === g
          return (
            h[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, r.jsx)(c.I, { className: "rotate-180", "aria-hidden": !1, asset: l.l })), (h[7] = i))
              : (i = h[7]),
            h[8] !== b || h[9] !== v || h[10] !== M
              ? ((u = (0, r.jsx)(d.$, {
                  className: "h-4 w-4 p-0 text-codex-description",
                  size: "icon",
                  color: "ghost",
                  uniform: !0,
                  onClick: v,
                  disabled: M,
                  "aria-label": b,
                  children: i,
                })),
                (h[8] = b),
                (h[9] = v),
                (h[10] = M),
                (h[11] = u))
              : (u = h[11]),
            h[12] !== o || h[13] !== u
              ? ((m = (0, r.jsxs)("div", { className: "flex items-center gap-3", children: [o, u] })),
                (h[12] = o),
                (h[13] = u),
                (h[14] = m))
              : (m = h[14]),
            h[15] !== t || h[16] !== m
              ? ((f = (0, r.jsx)("div", { className: t, children: m })), (h[15] = t), (h[16] = m), (h[17] = f))
              : (f = h[17]),
            f
          )
        },
      },
    )
  },
  QxH2(e, t, n) {
    var r = n("SKhr")
    function a() {
      return new Promise((e) => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            e()
          })
        })
      })
    }
    n.d(
      t,
      {},
      {
        Cu: function ({
          container: e,
          matchId: t,
          includeShadowRoots: n,
          scrollBehavior: a = "smooth",
          signal: l,
          timeoutMs: o = 1500,
        }) {
          let i = () => (0, r.tk)({ container: e, matchId: t, includeShadowRoots: n })
          if (l?.aborted) return Promise.resolve()
          let s = i()
          return null != s
            ? (s.scrollIntoView({ block: "center", behavior: a }), Promise.resolve())
            : new Promise((e) => {
                let t = null,
                  n = null
                function r(r) {
                  ;(null != t && (window.cancelAnimationFrame(t), (t = null)),
                    null != n && (window.clearTimeout(n), (n = null)),
                    l?.removeEventListener("abort", s),
                    null != r && r.scrollIntoView({ block: "center", behavior: a }),
                    e())
                }
                function s() {
                  r()
                }
                ;(l?.addEventListener("abort", s, { once: !0 }),
                  (n = window.setTimeout(() => {
                    r()
                  }, o)),
                  (t = window.requestAnimationFrame(function e() {
                    if (l?.aborted) return void r()
                    let n = i()
                    null != n ? r(n) : (t = window.requestAnimationFrame(e))
                  })))
              })
        },
        H9: async function (e, t, n) {
          if (!n?.signal?.aborted && null != t) {
            if (null == e) throw Error("Conversation search requested before the turn list was ready")
            ;(await e.scrollToKey(t, void 0, n), n?.signal?.aborted || (await a()))
          }
        },
        JA: a,
        Nh: function (e, t) {
          return e?.querySelector(`[data-content-search-turn-key="${CSS.escape(t)}"]`) ?? null
        },
      },
    )
  },
  AXTp(e, t, n) {
    var r = n("ABep"),
      a = n("QosV"),
      l = n("on57")
    n.d(
      t,
      {},
      {
        N: function (e) {
          let t,
            n,
            o = (0, a.c)(5),
            { children: i, className: s } = e
          return (
            o[0] !== s
              ? ((t = (0, l.A)(
                  "no-drag pointer-events-auto grid w-[340px] max-w-full grid-cols-[minmax(0,1fr)_auto_auto] overflow-hidden rounded-[20px] border-[0.5px] border-default bg-surface-secondary shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.12)]",
                  s,
                )),
                (o[0] = s),
                (o[1] = t))
              : (t = o[1]),
            o[2] !== i || o[3] !== t
              ? ((n = (0, r.jsx)("div", { className: t, children: i })), (o[2] = i), (o[3] = t), (o[4] = n))
              : (n = o[4]),
            n
          )
        },
      },
    )
  },
  dZTS(e, t, n) {
    var r = n("ABep"),
      a = n("QosV"),
      l = n("zd8w"),
      o = n("ZZ6D"),
      i = n("wD9O"),
      s = n("i7gm"),
      d = n("TNWb")
    function c() {
      return !1
    }
    n.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            n,
            u,
            m,
            f = (0, a.c)(10),
            { children: h } = e,
            p = (0, i.dz)(),
            g = (0, o.a)()
          if ((0, l.useSyncExternalStore)(d.tb, d.zf, c)) return null
          let b = 16 + g.right
          if (
            (f[0] !== b ? ((t = { right: b }), (f[0] = b), (f[1] = t)) : (t = f[1]),
            f[2] !== p ? ((n = { zoom: p }), (f[2] = p), (f[3] = n)) : (n = f[3]),
            f[4] !== h || f[5] !== n
              ? ((u = (0, r.jsx)("div", { className: "max-w-[70vw]", style: n, children: h })),
                (f[4] = h),
                (f[5] = n),
                (f[6] = u))
              : (u = f[6]),
            f[7] !== t || f[8] !== u)
          ) {
            let e = (0, r.jsx)("div", {
              className: "pointer-events-none fixed top-2 z-[55] flex justify-end",
              style: t,
              children: u,
            })
            ;((m = "u" < typeof document ? e : (0, r.jsx)(s.s, { container: document.body, children: e })),
              (f[7] = t),
              (f[8] = u),
              (f[9] = m))
          } else m = f[9]
          return m
        },
      },
    )
  },
  mwa5(e, t, n) {
    n.d(t, { I: () => G })
    var r = n("ABep"),
      a = n("QosV"),
      l = n("on57"),
      o = n("zTeN"),
      i = n("zd8w"),
      s = n("TwSq"),
      d = n("TNWb"),
      c = n("Oj9r"),
      u = n("r5nL"),
      m = n("NsEU"),
      f = n("JvtY"),
      h = n("slpy"),
      p = n("tCS5"),
      g = n("uheM"),
      b = n("KjMy"),
      v = n("UJHK"),
      x = n("Wf1j"),
      w = n("Sm6l"),
      y = n("HOLv")
    function j(e) {
      let t,
        n,
        l,
        i,
        d,
        u,
        m,
        f,
        j,
        M,
        C,
        S,
        k,
        T = (0, a.c)(46),
        { browserController: F } = e,
        A = (0, o.gh)(c.GD),
        B = (0, x.A)(),
        E = (0, o.Ul)(s.Jz)
      T[0] !== B
        ? ((t = B.formatMessage({
            id: "codex.threadFindBar.fileFilter",
            defaultMessage: "Search file",
            description: "Button label to search the active file preview",
          })),
          (T[0] = B),
          (T[1] = t))
        : (t = T[1])
      let _ = t,
        I = (0, o.Ul)(s.l0),
        N = (0, o.Ul)(s.YP),
        P = (0, o.Ul)(s.wo),
        U = (0, o.Ul)(s.sq),
        D = "chatgpt-thread" === A.value.routeKind
      T[2] !== B || T[3] !== D
        ? ((n = D
            ? B.formatMessage({
                id: "chatgpt.threadFindBar.chatFilter",
                defaultMessage: "Search chat",
                description: "Button label to scope find results to the ChatGPT chat",
              })
            : B.formatMessage({
                id: "codex.threadFindBar.chatFilter",
                defaultMessage: "Search chat",
                description: "Button label to scope find results to the Codex task",
              })),
          (T[2] = B),
          (T[3] = D),
          (T[4] = n))
        : (n = T[4])
      let L = n
      T[5] !== B
        ? ((l = B.formatMessage({
            id: "codex.threadFindBar.diffFilter",
            defaultMessage: "Search diffs",
            description: "Button label to scope find results to diffs",
          })),
          (T[5] = B),
          (T[6] = l))
        : (l = T[6])
      let z = l
      T[7] !== B
        ? ((i = B.formatMessage({
            id: "codex.threadFindBar.browserFilter",
            defaultMessage: "Search browser page",
            description: "Button label to scope find results to browser page",
          })),
          (T[7] = B),
          (T[8] = i))
        : (i = T[8])
      let V = i
      T[9] !== F || T[10] !== I || T[11] !== P || T[12] !== U || T[13] !== A
        ? ((d = (e) => {
            if ("browser" === P && "browser" !== e) {
              ;(null != I && F.runCommand({ ...I, command: { type: "close-find" } }),
                (0, s.kB)(A, e),
                (0, s.X0)(A, s.s_))
              return
            }
            ;((0, s.kB)(A, e),
              "browser" === e &&
                U.length > 0 &&
                null != I &&
                F.runCommand({ ...I, command: { type: "set-find-query", query: U } }))
          }),
          (T[9] = F),
          (T[10] = I),
          (T[11] = P),
          (T[12] = U),
          (T[13] = A),
          (T[14] = d))
        : (d = T[14])
      let q = d
      if ("page" === P || (null == N && null == I && null == E)) return null
      let R = "conversation" === P ? "ghostActive" : "ghost"
      T[15] !== q
        ? ((u = () => {
            q("conversation")
          }),
          (T[15] = q),
          (T[16] = u))
        : (u = T[16])
      let K = "conversation" === P
      return (
        T[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)(y.I, { "aria-hidden": !1, asset: p._ })), (T[17] = m))
          : (m = T[17]),
        T[18] !== L || T[19] !== R || T[20] !== u || T[21] !== K
          ? ((f = (0, r.jsx)(w.$, {
              className: "-m-0.5 size-6",
              size: "icon",
              color: R,
              uniform: !0,
              onClick: u,
              "aria-pressed": K,
              "aria-label": L,
              children: m,
            })),
            (T[18] = L),
            (T[19] = R),
            (T[20] = u),
            (T[21] = K),
            (T[22] = f))
          : (f = T[22]),
        T[23] !== L || T[24] !== f
          ? ((j = (0, r.jsx)(h.m, { content: L, children: f })), (T[23] = L), (T[24] = f), (T[25] = j))
          : (j = T[25]),
        T[26] !== z || T[27] !== N || T[28] !== P || T[29] !== q
          ? ((M =
              null != N
                ? (0, r.jsx)(h.m, {
                    content: z,
                    children: (0, r.jsx)(w.$, {
                      className: "-m-0.5 size-6",
                      size: "icon",
                      color: "diff" === P ? "ghostActive" : "ghost",
                      uniform: !0,
                      onClick: () => {
                        q("diff")
                      },
                      "aria-pressed": "diff" === P,
                      "aria-label": z,
                      children: (0, r.jsx)(y.I, { "aria-hidden": !1, asset: v.L }),
                    }),
                  })
                : null),
            (T[26] = z),
            (T[27] = N),
            (T[28] = P),
            (T[29] = q),
            (T[30] = M))
          : (M = T[30]),
        T[31] !== P || T[32] !== _ || T[33] !== E || T[34] !== q
          ? ((C =
              null == E
                ? null
                : (0, r.jsx)(h.m, {
                    content: E.title,
                    children: (0, r.jsx)(w.$, {
                      className: "-m-0.5 size-6",
                      size: "icon",
                      color: "file" === P ? "ghostActive" : "ghost",
                      uniform: !0,
                      onClick: () => q("file"),
                      "aria-pressed": "file" === P,
                      "aria-label": _,
                      children: (0, r.jsx)(y.I, { "aria-hidden": !1, asset: g.f }),
                    }),
                  })),
            (T[31] = P),
            (T[32] = _),
            (T[33] = E),
            (T[34] = q),
            (T[35] = C))
          : (C = T[35]),
        T[36] !== V || T[37] !== I || T[38] !== P || T[39] !== q
          ? ((S =
              null == I
                ? null
                : (0, r.jsx)(h.m, {
                    content: V,
                    children: (0, r.jsx)(w.$, {
                      className: "-m-0.5 size-6",
                      size: "icon",
                      color: "browser" === P ? "ghostActive" : "ghost",
                      uniform: !0,
                      onClick: () => {
                        q("browser")
                      },
                      "aria-pressed": "browser" === P,
                      "aria-label": V,
                      children: (0, r.jsx)(y.I, { "aria-hidden": !1, asset: b.b }),
                    }),
                  })),
            (T[36] = V),
            (T[37] = I),
            (T[38] = P),
            (T[39] = q),
            (T[40] = S))
          : (S = T[40]),
        T[41] !== j || T[42] !== M || T[43] !== C || T[44] !== S
          ? ((k = (0, r.jsxs)("div", {
              className: "col-[2/3] row-[1] flex h-[44px] items-center justify-center gap-2",
              children: [j, M, C, S],
            })),
            (T[41] = j),
            (T[42] = M),
            (T[43] = C),
            (T[44] = S),
            (T[45] = k))
          : (k = T[45]),
        k
      )
    }
    function M(e) {
      let t,
        n,
        l,
        i = (0, a.c)(8),
        { children: d } = e,
        m = (0, o.gh)(c.GD)
      return (
        i[0] !== m ? ((t = () => m.get(s.l0)), (i[0] = m), (i[1] = t)) : (t = i[1]),
        i[2] !== m ? ((n = (e) => (0, s.X0)(m, e)), (i[2] = m), (i[3] = n)) : (n = i[3]),
        i[4] !== d || i[5] !== t || i[6] !== n
          ? ((l = (0, r.jsx)(u.C, { getTarget: t, runCommand: f.e, onFindStateChange: n, children: d })),
            (i[4] = d),
            (i[5] = t),
            (i[6] = n),
            (i[7] = l))
          : (l = i[7]),
        l
      )
    }
    function C(e) {
      let t,
        n,
        l,
        i,
        d,
        u,
        f = (0, a.c)(20),
        { controller: h } = e,
        p = (0, o.gh)(c.GD),
        g = (0, o.Ul)(s.l0),
        b = (0, o.Ul)(s.BU),
        v = (0, o.Ul)(s.aL),
        x = (0, o.Ul)(s.wo),
        w = (0, o.Ul)(s.eb),
        y = (0, o.Ul)(s.sq)
      return null != g && w && "browser" === x
        ? (f[0] !== y || f[1] !== v ? ((t = { ...v, query: y }), (f[0] = y), (f[1] = v), (f[2] = t)) : (t = f[2]),
          f[3] !== h ? ((n = (0, r.jsx)(j, { browserController: h })), (f[3] = h), (f[4] = n)) : (n = f[4]),
          f[5] !== p
            ? ((l = (e) => (0, s.fX)(p, e)),
              (i = () => {
                ;((0, s.SY)(p), (0, s.X0)(p, { query: "", matches: 0, activeMatchOrdinal: 0 }))
              }),
              (f[5] = p),
              (f[6] = l),
              (f[7] = i))
            : ((l = f[6]), (i = f[7])),
          f[8] !== p || f[9] !== g ? ((d = () => (0, s.$C)(p, g)), (f[8] = p), (f[9] = g), (f[10] = d)) : (d = f[10]),
          f[11] !== h ||
          f[12] !== b ||
          f[13] !== t ||
          f[14] !== n ||
          f[15] !== l ||
          f[16] !== i ||
          f[17] !== d ||
          f[18] !== g
            ? ((u = (0, r.jsx)(m.g, {
                controller: h,
                inputId: b,
                target: g,
                state: t,
                domainControl: n,
                onQueryChange: l,
                onClose: i,
                focusPage: d,
              })),
              (f[11] = h),
              (f[12] = b),
              (f[13] = t),
              (f[14] = n),
              (f[15] = l),
              (f[16] = i),
              (f[17] = d),
              (f[18] = g),
              (f[19] = u))
            : (u = f[19]),
          u)
        : null
    }
    var S = n("nMUV")
    function k() {
      let e,
        t,
        n,
        l = (0, a.c)(7),
        i = (0, o.gh)(c.GD),
        d = (0, x.A)()
      return (
        l[0] !== d
          ? ((e = d.formatMessage({
              id: "codex.threadFindBar.close",
              defaultMessage: "Close find",
              description: "Button label to close the find bar",
            })),
            (l[0] = d),
            (l[1] = e))
          : (e = l[1]),
        l[2] !== i
          ? ((t = () => {
              ;(0, s.SY)(i)
            }),
            (l[2] = i),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== e || l[5] !== t
          ? ((n = (0, r.jsx)(S.$1, { label: e, onClose: t })), (l[4] = e), (l[5] = t), (l[6] = n))
          : (n = l[6]),
        n
      )
    }
    var T = n("AXTp"),
      F = n("ZU27"),
      A = n("gbrq"),
      B = n("nKJ6"),
      E = n("jDEJ"),
      _ = n("TL6G"),
      I = n("XXJV")
    let N = "[data-pierre-editor-surface], [data-editor-search-surface], [data-artifact-search-surface]"
    function P(e) {
      let t,
        n,
        r,
        l,
        u,
        m,
        f,
        h,
        p,
        g = (0, a.c)(37),
        { browserController: b } = e,
        v = (0, o.gh)(c.GD),
        x = (0, o.Ul)(s.l0),
        w = (0, o.Ul)(s.YP),
        y = (0, o.Ul)(F.VZ.tabs$),
        j = (0, o.Ul)(F.VZ.activeTab$),
        M = (0, o.Ul)(F.It.tabs$),
        C = (0, o.Ul)(F.It.activeTab$),
        S = (0, o.Ul)(A.lN),
        k = (0, o.Ul)(A.SZ)
      g[0] !== j || g[1] !== C || g[2] !== y || g[3] !== S || g[4] !== k || g[5] !== M || g[6] !== v
        ? ((n = (function ({ activeTabs: e, browserConversationId: t, openPanels: n, tabs: r }) {
            if (null == t) return null
            for (let r of I.rl) {
              if (!n[r]) continue
              let a = (0, B.getThreadBrowserTabIdFromPanelTab)(e[r])
              if (null != a) return { browserTabId: a, conversationId: t }
            }
            for (let e of I.rl)
              if (n[e])
                for (let n of r[e]) {
                  let e = (0, B.getThreadBrowserTabIdFromPanelTab)(n)
                  if (null != e) return { browserTabId: e, conversationId: t }
                }
            return null
          })({
            activeTabs: { bottom: j, right: C },
            browserConversationId: (t = (0, B.getThreadBrowserConversationId)(v)),
            openPanels: { bottom: S, right: k },
            tabs: { bottom: y, right: M },
          })),
          (g[0] = j),
          (g[1] = C),
          (g[2] = y),
          (g[3] = S),
          (g[4] = k),
          (g[5] = M),
          (g[6] = v),
          (g[7] = t),
          (g[8] = n))
        : ((t = g[7]), (n = g[8]))
      let T = n
      g[9] !== T || g[10] !== v
        ? ((r = () => {
            ;(0, s.nf)(v, T)
          }),
          (g[9] = T),
          (g[10] = v),
          (g[11] = r))
        : (r = g[11])
      let E = T?.browserTabId,
        N = T?.conversationId
      ;(g[12] !== T || g[13] !== v || g[14] !== E || g[15] !== N
        ? ((l = [T, E, N, v]), (g[12] = T), (g[13] = v), (g[14] = E), (g[15] = N), (g[16] = l))
        : (l = g[16]),
        (0, i.useEffect)(r, l),
        g[17] !== j ||
        g[18] !== C ||
        g[19] !== b ||
        g[20] !== t ||
        g[21] !== x ||
        g[22] !== w ||
        g[23] !== S ||
        g[24] !== k ||
        g[25] !== v
          ? ((u = function (e) {
              let { selectDefaultTarget: n } = void 0 === e ? {} : e,
                r = void 0 !== n && n,
                a = (0, s._d)(v)
              if (null != a) {
                if (!v.get(s.eb)) {
                  let e = D()
                  null != e && (0, s.aM)(v, e)
                }
                ;(0, s.KE)(v, a)
                return
              }
              if (L()) return
              let l = v.get(s.BU),
                o = (function ({ activeTabs: e, browserConversationId: t, openPanels: n }) {
                  if (null == t) return null
                  let r = document.activeElement
                  if (!(r instanceof HTMLElement)) return null
                  for (let a of I.rl) {
                    if (!n[a]) continue
                    let l = (0, B.getThreadBrowserTabIdFromPanelTab)(e[a])
                    if (
                      null != l &&
                      (("webview" === r.tagName.toLowerCase() &&
                        r.getAttribute("data-browser-sidebar-conversation-id") === t &&
                        (r.getAttribute("data-browser-sidebar-browser-tab-id") ?? l) === l) ||
                        null != r.closest(`[data-app-shell-focus-area="${a}-panel"]`))
                    )
                      return { browserTabId: l, conversationId: t }
                  }
                  return null
                })({
                  activeTabs: { bottom: j, right: C },
                  browserConversationId: t,
                  openPanels: { bottom: S, right: k },
                }),
                i = !r && document.activeElement?.id === l
              if (i && "page" === v.get(s.wo)) return void window.requestAnimationFrame(() => U(l))
              let d = i || r ? void 0 : D(),
                c = v.get(s.uj)
              if (
                (i
                  ? (c = (0, s.x3)({
                      currentDomain: v.get(s.wo),
                      hasDiffSource: null != w,
                      hasBrowserTarget: null != x,
                      hasFileTarget: null != v.get(s.Jz),
                    }))
                  : null != o
                    ? (c = "browser")
                    : "file" === c && null == v.get(s.Jz)
                      ? (c = "conversation")
                      : "diff" === c && null == w && (c = "conversation"),
                null != o && (0, s.nf)(v, o),
                c !== v.get(s.wo) && (0, s.kB)(v, c),
                null != d && ("browser" === c ? (0, s.fX)(v, d) : d !== v.get(s.sq) && (0, s.aM)(v, d)),
                "browser" === c)
              ) {
                let e = d ?? v.get(s.sq),
                  t = o ?? x
                e.length > 0 && null != t && b.runCommand({ ...t, command: { type: "set-find-query", query: e } })
              }
              ;((0, s.uH)(v, { selectDefaultTarget: !i }), window.requestAnimationFrame(() => U(l)))
            }),
            (g[17] = j),
            (g[18] = C),
            (g[19] = b),
            (g[20] = t),
            (g[21] = x),
            (g[22] = w),
            (g[23] = S),
            (g[24] = k),
            (g[25] = v),
            (g[26] = u))
          : (u = g[26]))
      let P = u
      ;(g[27] !== P || g[28] !== v
        ? ((m = () => {
            ;(0, d.zf)() && ("page" === v.get(s.uj) || (v.get(s.eb) && "page" === v.get(s.wo)))
              ? window.requestAnimationFrame(() => {
                  ;(0, d.zf)() || P({ selectDefaultTarget: !0 })
                })
              : P()
          }),
          (g[27] = P),
          (g[28] = v),
          (g[29] = m))
        : (m = g[29]),
        (0, _.JX)("find-in-thread", m),
        g[30] !== b || g[31] !== v
          ? ((f = (e) => {
              if (!(null == (0, s._d)(v) && L(e)) && v.get(s.eb) && !("page" === v.get(s.wo) && (0, d.zf)())) {
                if ("browser" === v.get(s.wo)) {
                  let t = v.get(s.l0)
                  null != t && b.runCommand({ ...t, command: { type: "next" === e ? "find-next" : "find-previous" } })
                  return
                }
                "next" === e ? (0, s.Xl)(v) : (0, s.LD)(v)
              }
            }),
            (g[30] = b),
            (g[31] = v),
            (g[32] = f))
          : (f = g[32]))
      let z = f
      return (
        g[33] !== z
          ? ((h = () => {
              z("next")
            }),
            (g[33] = z),
            (g[34] = h))
          : (h = g[34]),
        (0, _.JX)("find-next-in-thread", h),
        g[35] !== z
          ? ((p = () => {
              z("previous")
            }),
            (g[35] = z),
            (g[36] = p))
          : (p = g[36]),
        (0, _.JX)("find-previous-in-thread", p),
        null
      )
    }
    function U(e) {
      if ((0, d.zf)()) return
      let t = document.getElementById(e)
      t instanceof HTMLInputElement && (t.focus(), t.select())
    }
    function D() {
      let e,
        t = document.activeElement
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
        if (null == t.selectionStart || null == t.selectionEnd) return
        e = t.value.slice(t.selectionStart, t.selectionEnd)
      } else e = window.getSelection?.()?.toString()
      let n = e?.trim()
      if (n) return /[\r\n]/.test(n) ? "" : n
    }
    function L(e) {
      let t = document.activeElement,
        n = t?.closest(N) ?? t?.closest("[data-app-shell-tab-panel-controller]")?.querySelector(N)
      if (null == n || null != n.closest("[inert]")) return !1
      let r = n.closest("[data-app-shell-tab-panel-controller]")?.querySelector("[data-pierre-find-input-id]")
          ?.dataset.pierreFindInputId,
        a = n.querySelector("[data-codex-find-input]") ?? (null == r ? null : document.getElementById(r)),
        l = n.matches("[data-artifact-search-surface]")
          ? n
          : (a ??
            n.querySelector("diffs-container")?.shadowRoot?.querySelector("[data-content]") ??
            n.querySelector(".cm-content"))
      if (null == l) return !1
      let o = (0, E.Z)()
      return (
        l.dispatchEvent(
          new KeyboardEvent("keydown", {
            bubbles: !0,
            cancelable: !0,
            composed: !0,
            ctrlKey: !o,
            key: null == e ? "f" : "g",
            metaKey: o,
            shiftKey: "previous" === e,
          }),
        ),
        !0
      )
    }
    function z() {
      let e,
        t,
        n,
        l,
        i,
        d,
        u = (0, a.c)(30),
        m = (0, o.gh)(c.GD),
        f = (0, o.Ul)(s.BU),
        h = (0, x.A)(),
        p = (0, o.Ul)(s.hj),
        g = (0, o.Ul)(s.wo),
        b = (0, o.Ul)(s.Sp),
        v = (0, o.Ul)(s.sq),
        w = "chatgpt-thread" === m.value.routeKind
      u[0] !== g || u[1] !== h || u[2] !== w
        ? ((e =
            "diff" === g
              ? h.formatMessage({
                  id: "codex.threadFindBar.placeholder.review",
                  defaultMessage: "Search diff…",
                  description: "Placeholder for the review find input",
                })
              : w
                ? h.formatMessage({
                    id: "chatgpt.threadFindBar.placeholder",
                    defaultMessage: "Search chat…",
                    description: "Placeholder for the ChatGPT chat find input",
                  })
                : h.formatMessage({
                    id: "codex.threadFindBar.placeholder",
                    defaultMessage: "Search chat…",
                    description: "Placeholder for the task find input",
                  })),
          (u[0] = g),
          (u[1] = h),
          (u[2] = w),
          (u[3] = e))
        : (e = u[3])
      let y = e
      u[4] !== h || u[5] !== w
        ? ((t = w
            ? h.formatMessage({
                id: "chatgpt.threadFindBar.label",
                defaultMessage: "Find in chat",
                description: "Accessible label for the ChatGPT chat find input",
              })
            : h.formatMessage({
                id: "codex.threadFindBar.label",
                defaultMessage: "Find in chat",
                description: "Accessible label for the Codex task find input",
              })),
          (u[4] = h),
          (u[5] = w),
          (u[6] = t))
        : (t = u[6])
      let j = t
      if ("diff" === g) {
        let e
        ;(u[7] !== h
          ? ((e = h.formatMessage({
              id: "codex.threadFindBar.label.diff",
              defaultMessage: "Find in diff",
              description: "Accessible label for finding text within code changes",
            })),
            (u[7] = h),
            (u[8] = e))
          : (e = u[8]),
          (j = e))
      }
      if ("page" === g) {
        let e, t
        ;(u[9] !== h
          ? ((e = h.formatMessage({
              id: "codex.pageFindBar.placeholder",
              defaultMessage: "Find in Page…",
              description: "Placeholder for finding text within the current Page document",
            })),
            (u[9] = h),
            (u[10] = e))
          : (e = u[10]),
          (y = e),
          u[11] !== h
            ? ((t = h.formatMessage({
                id: "codex.pageFindBar.label",
                defaultMessage: "Find in Page",
                description: "Accessible label for finding text within the current Page document",
              })),
              (u[11] = h),
              (u[12] = t))
            : (t = u[12]),
          (j = t))
      }
      if ("file" === g) {
        let e, t
        ;(u[13] !== h
          ? ((e = h.formatMessage({
              id: "textFileEditor.find.placeholder",
              defaultMessage: "Find in file…",
              description: "Placeholder for find in a text file",
            })),
            (u[13] = h),
            (u[14] = e))
          : (e = u[14]),
          (y = e),
          u[15] !== h
            ? ((t = h.formatMessage({
                id: "textFileEditor.find.label",
                defaultMessage: "Find in file",
                description: "Accessible label for find in a text file",
              })),
              (u[15] = h),
              (u[16] = t))
            : (t = u[16]),
          (j = t))
      }
      let M = "file" === g ? p.pending : b
      return (
        u[17] !== m
          ? ((n = (e) => {
              ;(0, s.aM)(m, e)
            }),
            (l = (e) => {
              ;(0, s.iz)(m, { shift: e })
            }),
            (i = () => {
              ;(0, s.SY)(m)
            }),
            (u[17] = m),
            (u[18] = n),
            (u[19] = l),
            (u[20] = i))
          : ((n = u[18]), (l = u[19]), (i = u[20])),
        u[21] !== f ||
        u[22] !== j ||
        u[23] !== y ||
        u[24] !== v ||
        u[25] !== M ||
        u[26] !== n ||
        u[27] !== l ||
        u[28] !== i
          ? ((d = (0, r.jsx)(S.rV, {
              id: f,
              isLoading: M,
              label: j,
              placeholder: y,
              value: v,
              onChange: n,
              onEnter: l,
              onEscape: i,
            })),
            (u[21] = f),
            (u[22] = j),
            (u[23] = y),
            (u[24] = v),
            (u[25] = M),
            (u[26] = n),
            (u[27] = l),
            (u[28] = i),
            (u[29] = d))
          : (d = u[29]),
        d
      )
    }
    function V() {
      let e,
        t,
        n,
        l,
        i,
        d = (0, a.c)(14),
        u = (0, o.gh)(c.GD),
        m = (0, x.A)(),
        f = (0, o.Ul)(s.hj),
        h = (0, o.Ul)(s.wo),
        p = (0, o.Ul)(s.JA),
        g = "file" === h ? f.total : (p?.totalMatches ?? 0),
        b = (0, o.Ul)(s.m9)
      return (
        d[0] !== m
          ? ((e = m.formatMessage({
              id: "codex.threadFindBar.nextResult",
              defaultMessage: "Next result",
              description: "Button label to move to the next find match",
            })),
            (d[0] = m),
            (d[1] = e))
          : (e = d[1]),
        d[2] !== m
          ? ((t = m.formatMessage({
              id: "codex.threadFindBar.previousResult",
              defaultMessage: "Previous result",
              description: "Button label to move to the previous find match",
            })),
            (d[2] = m),
            (d[3] = t))
          : (t = d[3]),
        d[4] !== u
          ? ((n = () => {
              ;(0, s.Xl)(u)
            }),
            (l = () => {
              ;(0, s.LD)(u)
            }),
            (d[4] = u),
            (d[5] = n),
            (d[6] = l))
          : ((n = d[5]), (l = d[6])),
        d[7] !== b || d[8] !== g || d[9] !== e || d[10] !== t || d[11] !== n || d[12] !== l
          ? ((i = (0, r.jsx)(S.rr, {
              isVisible: b,
              matches: g,
              nextLabel: e,
              previousLabel: t,
              onNext: n,
              onPrevious: l,
            })),
            (d[7] = b),
            (d[8] = g),
            (d[9] = e),
            (d[10] = t),
            (d[11] = n),
            (d[12] = l),
            (d[13] = i))
          : (i = d[13]),
        i
      )
    }
    var q = n("dZTS"),
      R = n("yGns")
    function K() {
      let e,
        t = (0, a.c)(7),
        n = (0, o.Ul)(s.hj),
        l = (0, o.Ul)(s.wo),
        i = (0, o.Ul)(s.m9),
        d = (0, o.Ul)(s.Sp),
        c = (0, o.Ul)(s.JA),
        u = (0, o.Ul)(s.e8),
        m = "file" === l ? n.total : c?.totalMatches,
        f = "file" === l ? n.pending : d,
        h = "file" === l ? n.current : (u ?? 0) + 1,
        p = c?.error,
        g = "file" === l ? n.isCapped : c?.isCapped
      return (
        t[0] !== i || t[1] !== f || t[2] !== h || t[3] !== p || t[4] !== g || t[5] !== m
          ? ((e = (0, r.jsx)(R.k, { active: h, error: p, hasQuery: i, isCapped: g, isPending: f, totalMatches: m })),
            (t[0] = i),
            (t[1] = f),
            (t[2] = h),
            (t[3] = p),
            (t[4] = g),
            (t[5] = m),
            (t[6] = e))
          : (e = t[6]),
        e
      )
    }
    function J(e) {
      let t,
        n = (0, a.c)(3),
        { children: l, className: c } = e,
        u = (0, o.Ul)(s.eb),
        m = (0, i.useSyncExternalStore)(d.tb, d.zf, O)
      return !u || m
        ? null
        : (n[0] !== l || n[1] !== c
            ? ((t = (0, r.jsx)("div", {
                className: "contents",
                "data-content-search-bar": "true",
                children: (0, r.jsx)(T.N, { className: c, children: l }),
              })),
              (n[0] = l),
              (n[1] = c),
              (n[2] = t))
            : (t = n[2]),
          t)
    }
    function O() {
      return !1
    }
    function X(e) {
      let t,
        n,
        l,
        c,
        u,
        m,
        f = (0, a.c)(10),
        { browserController: h } = e,
        p = (0, o.Ul)(s.wo)
      if ((0, i.useSyncExternalStore)(d.tb, d.zf, $)) return null
      if ("browser" === p) {
        let e
        return (f[0] !== h ? ((e = (0, r.jsx)(C, { controller: h })), (f[0] = h), (f[1] = e)) : (e = f[1]), e)
      }
      return (
        f[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, r.jsx)(z, {})), (f[2] = t)) : (t = f[2]),
        f[3] !== h ? ((n = (0, r.jsx)(j, { browserController: h })), (f[3] = h), (f[4] = n)) : (n = f[4]),
        f[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(V, {})),
            (c = (0, r.jsx)(K, {})),
            (u = (0, r.jsx)(k, {})),
            (f[5] = l),
            (f[6] = c),
            (f[7] = u))
          : ((l = f[5]), (c = f[6]), (u = f[7])),
        f[8] !== n ? ((m = (0, r.jsxs)(J, { children: [t, n, l, c, u] })), (f[8] = n), (f[9] = m)) : (m = f[9]),
        m
      )
    }
    function $() {
      return !1
    }
    let G = Object.assign(
      function (e) {
        let t,
          n = (0, a.c)(2),
          { children: l } = e
        return (n[0] !== l ? ((t = (0, r.jsx)(r.Fragment, { children: l })), (n[0] = l), (n[1] = t)) : (t = n[1]), t)
      },
      {
        Frame: J,
        PaneOverlay: function (e) {
          let t,
            n,
            i,
            d = (0, a.c)(8),
            { children: u, className: m } = e,
            f = void 0 === m ? "top-0" : m,
            h = (0, o.gh)(c.GD)
          return (
            d[0] !== f
              ? ((t = (0, l.A)("absolute inset-x-0 flex justify-end px-4 py-2", f)), (d[0] = f), (d[1] = t))
              : (t = d[1]),
            d[2] !== h
              ? ((n = (e) => {
                  "Escape" !== e.key ||
                    e.nativeEvent.isComposing ||
                    (e.preventDefault(), e.stopPropagation(), (0, s.SY)(h))
                }),
                (d[2] = h),
                (d[3] = n))
              : (n = d[3]),
            d[4] !== u || d[5] !== t || d[6] !== n
              ? ((i = (0, r.jsx)("div", {
                  className: "pointer-events-none relative z-50 h-0 shrink-0",
                  children: (0, r.jsx)("div", {
                    className: t,
                    "data-content-search-overlay": !0,
                    role: "search",
                    onKeyDown: n,
                    children: u,
                  }),
                })),
                (d[4] = u),
                (d[5] = t),
                (d[6] = n),
                (d[7] = i))
              : (i = d[7]),
            i
          )
        },
        Surface: function () {
          let e,
            t = (0, a.c)(3),
            n = (0, o.Ul)(s.wo),
            l = (0, o.Ul)(s.eb)
          return (
            t[0] !== n || t[1] !== l
              ? ((e = (0, r.jsx)(M, {
                  children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(P, { browserController: e }),
                        l && "page" !== n
                          ? (0, r.jsx)(q.Q, { children: (0, r.jsx)(X, { browserController: e }) })
                          : null,
                      ],
                    }),
                })),
                (t[0] = n),
                (t[1] = l),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        },
        Controls: X,
        Controller: M,
        Input: z,
        DomainToggle: j,
        Navigation: V,
        ResultLabel: K,
        Close: k,
      },
    )
  },
  yGns(e, t, n) {
    var r = n("ABep"),
      a = n("QosV"),
      l = n("Wf1j"),
      o = n("nMUV")
    n.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            n,
            i = (0, a.c)(17),
            { active: s, error: d, hasQuery: c, isCapped: u, isPending: m, totalMatches: f } = e,
            h = (0, l.A)()
          if (!c || m || null == f) {
            let e
            return (
              i[0] !== c ? ((e = (0, r.jsx)(o.Af, { isVisible: c, label: null })), (i[0] = c), (i[1] = e)) : (e = i[1]),
              e
            )
          }
          if ("invalid-regex" === d) {
            let e
            ;(i[2] !== h
              ? ((e = h.formatMessage({
                  id: "chatgpt.threadFindBar.invalidRegex",
                  defaultMessage: "Invalid regular expression",
                  description: "Search error when a regular expression cannot be parsed",
                })),
                (i[2] = h),
                (i[3] = e))
              : (e = i[3]),
              (t = e))
          } else if ("regex-timeout" === d) {
            let e
            ;(i[4] !== h
              ? ((e = h.formatMessage({
                  id: "chatgpt.threadFindBar.regexTimeout",
                  defaultMessage: "Pattern took too long",
                  description: "Search error when a regular expression exceeds its execution time limit",
                })),
                (i[4] = h),
                (i[5] = e))
              : (e = i[5]),
              (t = e))
          } else if ("regex-unavailable" === d) {
            let e
            ;(i[6] !== h
              ? ((e = h.formatMessage({
                  id: "chatgpt.threadFindBar.regexUnavailable",
                  defaultMessage: "Regex search unavailable",
                  description: "Search error when the background regex worker cannot run",
                })),
                (i[6] = h),
                (i[7] = e))
              : (e = i[7]),
              (t = e))
          } else if (0 === f) {
            let e
            ;(i[8] !== h
              ? ((e = h.formatMessage({
                  id: "codex.threadFindBar.noResults",
                  defaultMessage: "0 results",
                  description: "Find-in-thread label when there are no matches",
                })),
                (i[8] = h),
                (i[9] = e))
              : (e = i[9]),
              (t = e))
          } else {
            let e
            ;(i[10] !== s || i[11] !== h || i[12] !== u || i[13] !== f
              ? ((e = h.formatMessage(
                  u
                    ? {
                        id: "codex.threadFindBar.results.capped",
                        defaultMessage: "{active} / {matches}+ results",
                        description: "Find-in-thread label showing the active match index when matches are capped",
                      }
                    : {
                        id: "codex.threadFindBar.results",
                        defaultMessage: "{active} / {matches} results",
                        description: "Find-in-thread label showing the active match index",
                      },
                  { active: s, matches: f },
                )),
                (i[10] = s),
                (i[11] = h),
                (i[12] = u),
                (i[13] = f),
                (i[14] = e))
              : (e = i[14]),
              (t = e))
          }
          return (
            i[15] !== t ? ((n = (0, r.jsx)(o.Af, { isVisible: !0, label: t })), (i[15] = t), (i[16] = n)) : (n = i[16]),
            n
          )
        },
      },
    )
  },
  zjpG(e, t, n) {
    var r = n("ABep"),
      a = n("QosV"),
      l = n("on57"),
      o = n("oyxz")
    n.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            n,
            i,
            s = (0, a.c)(5),
            { className: d } = e
          return (
            s[0] !== d ? ((t = (0, l.A)("last:hidden", d)), (s[0] = d), (s[1] = t)) : (t = s[1]),
            s[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, r.jsx)(o.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                })),
                (s[2] = n))
              : (n = s[2]),
            s[3] !== t
              ? ((i = (0, r.jsx)("span", { "aria-hidden": !0, className: t, children: n })), (s[3] = t), (s[4] = i))
              : (i = s[4]),
            i
          )
        },
      },
    )
  },
  YpJm(e, t, n) {
    n.d(t, { MarkdownVideoPlayer: () => j })
    var r = n("ABep"),
      a = n("QosV"),
      l = n("slpy")
    let o = (0, n("iJY0").a)({
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
    var i = n("E2B1"),
      s = n("XOOh"),
      d = n("YAOF"),
      c = n("on57"),
      u = n("zd8w"),
      m = n("Wf1j"),
      f = n("oyxz"),
      h = n("Sm6l"),
      p = n("bqtn"),
      g = n("HOLv"),
      b = n("bVeK"),
      v = n("nzx4"),
      x = n("aepO"),
      w = n("S7UD"),
      y = n("HgLj")
    function j(e) {
      let t,
        n,
        l,
        d,
        h,
        j,
        T,
        F,
        A,
        B,
        E,
        _,
        I,
        N,
        P,
        U,
        D,
        L,
        z,
        V,
        q,
        R,
        K,
        J,
        O,
        X,
        $,
        G,
        H,
        Q,
        Y,
        W,
        Z,
        ee,
        et,
        en,
        er,
        ea,
        el,
        eo,
        ei,
        es,
        ed,
        ec,
        eu,
        em,
        ef,
        eh,
        ep,
        eg,
        eb,
        ev,
        ex,
        ew,
        ey,
        ej,
        eM,
        eC,
        eS,
        ek,
        eT,
        eF,
        eA,
        eB,
        eE,
        e_,
        eI,
        eN,
        eP,
        eU,
        eD,
        eL,
        ez,
        eV,
        eq,
        eR,
        eK = (0, a.c)(221),
        {
          ref: eJ,
          allowWide: eO,
          allowFullscreen: eX,
          className: e$,
          durationHint: eG,
          height: eH,
          label: eQ,
          onDurationChange: eY,
          onError: eW,
          onExpand: eZ,
          onLoadedMetadata: e1,
          onLoadedData: e0,
          onPlaying: e2,
          onResize: e3,
          onSaveCopy: e4,
          presentation: e6,
          poster: e5,
          preload: e7,
          previewPlaceholder: e8,
          previewLoading: e9,
          sizing: te,
          src: tt,
          sourceUrl: tn,
          title: tr,
          transparentBackground: ta,
          videoStyle: tl,
          width: to,
        } = e,
        ti = void 0 === eX || eX,
        ts = void 0 === eG ? 0 : eG,
        td = void 0 === e6 ? "below" : e6,
        tc = void 0 === e7 ? "metadata" : e7,
        tu = void 0 !== ta && ta,
        tm = (0, m.A)(),
        tf = (0, u.useRef)(null),
        th = (0, u.useRef)(null),
        [tp, tg] = (0, u.useState)(null),
        [tb, tv] = (0, u.useState)(!1),
        [tx, tw] = (0, u.useState)(0),
        [ty, tj] = (0, u.useState)(0),
        [tM, tC] = (0, u.useState)(!1),
        [tS, tk] = (0, u.useState)(1),
        [tT, tF] = (0, u.useState)(!1),
        [tA, tB] = (0, u.useState)(1),
        [tE, t_] = (0, u.useState)(!1),
        [tI, tN] = (0, u.useState)(!1),
        [tP, tU] = (0, u.useState)(!1),
        [tD, tL] = (0, u.useState)(!1),
        tz = (0, w.ax)(tt) ? tt : void 0,
        tV = (0, u.useEffectEvent)(eW)
      ;(eK[0] !== tz || eK[1] !== tV
        ? ((t = () => {
            let e = tf.current
            if (null != e && null != tz) return (0, w.Kr)(e, tz, () => tV(e))
          }),
          (eK[0] = tz),
          (eK[1] = tV),
          (eK[2] = t))
        : (t = eK[2]),
        eK[3] !== tz ? ((n = [tz]), (eK[3] = tz), (eK[4] = n)) : (n = eK[4]),
        (0, u.useEffect)(t, n),
        eK[5] !== tp
          ? ((l = () => {
              if (null == tp) return
              let e = tp.ownerDocument,
                t = () => {
                  ;(tv(e.fullscreenElement === tp), e.fullscreenElement === tp && tf.current?.focus())
                }
              return (e.addEventListener("fullscreenchange", t), () => e.removeEventListener("fullscreenchange", t))
            }),
            (d = [tp]),
            (eK[5] = tp),
            (eK[6] = l),
            (eK[7] = d))
          : ((l = eK[6]), (d = eK[7])),
        (0, u.useEffect)(l, d),
        eK[8] !== tD || eK[9] !== tM || eK[10] !== tp || eK[11] !== td
          ? ((h = () => {
              if (null == tp || "overlay" !== td || !tM || tD) return
              let e = window.setTimeout(() => tU(!0), 2500),
                t = () => {
                  ;(tU(!1), window.clearTimeout(e), (e = window.setTimeout(() => tU(!0), 2500)))
                }
              return (
                tp.addEventListener("pointermove", t),
                tp.addEventListener("pointerdown", t),
                tp.addEventListener("keydown", t),
                () => {
                  ;(window.clearTimeout(e),
                    tp.removeEventListener("pointermove", t),
                    tp.removeEventListener("pointerdown", t),
                    tp.removeEventListener("keydown", t))
                }
              )
            }),
            (j = [tp, td, tM, tD]),
            (eK[8] = tD),
            (eK[9] = tM),
            (eK[10] = tp),
            (eK[11] = td),
            (eK[12] = h),
            (eK[13] = j))
          : ((h = eK[12]), (j = eK[13])),
        (0, u.useEffect)(h, j),
        eK[14] !== ts ? ((T = Number.isFinite(ts) ? Math.max(0, ts) : 0), (eK[14] = ts), (eK[15] = T)) : (T = eK[15]))
      let tq = T
      eK[16] !== tx || eK[17] !== tq || eK[18] !== ty || eK[19] !== tm
        ? ((F = tm.formatMessage(
            {
              id: "markdown.video.progress",
              defaultMessage: "{currentTime} / {duration}",
              description: "Current playback time and total video duration",
            },
            { currentTime: k(tx), duration: k(ty || tq) },
          )),
          (eK[16] = tx),
          (eK[17] = tq),
          (eK[18] = ty),
          (eK[19] = tm),
          (eK[20] = F))
        : (F = eK[20])
      let tR = F
      eK[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = () => {
            let e = tf.current
            null != e && (t_(!1), e.paused ? e.play().catch(() => t_(!0)) : e.pause())
          }),
          (eK[21] = A))
        : (A = eK[21])
      let tK = A
      eK[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = (e) => {
            let t = th.current
            if (null == t || t.pointerId !== e.pointerId) return
            th.current = null
            let n = tf.current
            t.wasPlaying && null != n && (t_(!1), n.play().catch(() => t_(!0)))
          }),
          (eK[22] = B))
        : (B = eK[22])
      let tJ = B
      eK[23] !== eZ || eK[24] !== tp
        ? ((E = () => {
            null != eZ && null != tf.current
              ? eZ(tf.current)
              : null == tp ||
                (t_(!1),
                (tp.ownerDocument.fullscreenElement === tp
                  ? tp.ownerDocument.exitFullscreen()
                  : tp.requestFullscreen()
                ).catch(() => t_(!0)))
          }),
          (eK[23] = eZ),
          (eK[24] = tp),
          (eK[25] = E))
        : (E = eK[25])
      let tO = E
      eK[26] !== tm || eK[27] !== tM
        ? ((_ = tM
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
          (eK[26] = tm),
          (eK[27] = tM),
          (eK[28] = _))
        : (_ = eK[28])
      let tX = _
      eK[29] !== tm || eK[30] !== tb
        ? ((I = tb
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
          (eK[29] = tm),
          (eK[30] = tb),
          (eK[31] = I))
        : (I = eK[31])
      let t$ = I,
        tG = "overlay" === td && "overlay-k_Dc2T",
        tH = "overlay" === td ? "relative aspect-video rounded-md" : "bg-surface",
        tQ = "overlay" === td && !tu && "bg-media-background",
        tY = "container" === te ? "size-full" : "my-3 w-fit rounded-md shadow-md",
        tW =
          "content" === te &&
          (eO
            ? "max-h-[var(--markdown-wide-block-max-height)] max-w-full"
            : "max-h-[min(48vh,32rem)] max-w-[min(100%,44rem)]")
      eK[32] !== e$ || eK[33] !== tG || eK[34] !== tH || eK[35] !== tQ || eK[36] !== tY || eK[37] !== tW
        ? ((N = (0, c.A)("player-W1zENa", tG, "flex min-h-0 min-w-0 flex-col overflow-hidden", tH, tQ, tY, tW, e$)),
          (eK[32] = e$),
          (eK[33] = tG),
          (eK[34] = tH),
          (eK[35] = tQ),
          (eK[36] = tY),
          (eK[37] = tW),
          (eK[38] = N))
        : (N = eK[38])
      let tZ = "overlay" !== td || tu ? void 0 : "dark",
        t1 = e9 || void 0,
        t0 = (tM && tP && !tD && !tE) || void 0
      ;(eK[39] !== tD || eK[40] !== tO
        ? ((P = (e) => {
            "Escape" !== e.key ||
              tD ||
              e.currentTarget.ownerDocument.fullscreenElement !== e.currentTarget ||
              (e.preventDefault(), e.stopPropagation(), tO())
          }),
          (eK[39] = tD),
          (eK[40] = tO),
          (eK[41] = P))
        : (P = eK[41]),
        eK[42] !== eJ
          ? ((U = (0, y.P)((e) => {
              if (((tf.current = e), null != e)) {
                let t = e.duration
                tj(Number.isFinite(t) && t > 0 ? t : 0)
              }
            }, eJ)),
            (eK[42] = eJ),
            (eK[43] = U))
          : (U = eK[43]))
      let t2 = null == tz ? tt : void 0,
        t3 = "overlay" === td
      ;(eK[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = (e) => {
            ;(" " === e.key || "Enter" === e.key) && (e.preventDefault(), e.repeat || tK())
          }),
          (eK[44] = D))
        : (D = eK[44]),
        eK[45] !== eY
          ? ((L = (e) => {
              let t = e.currentTarget.duration
              ;(tj(Number.isFinite(t) && t > 0 ? t : 0), eY?.(e.currentTarget))
            }),
            (eK[45] = eY),
            (eK[46] = L))
          : (L = eK[46]),
        eK[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (e) => {
              tw(e.currentTarget.currentTime)
            }),
            (V = () => {
              ;(tU(!1), tC(!0), t_(!1))
            }),
            (eK[47] = z),
            (eK[48] = V))
          : ((z = eK[47]), (V = eK[48])),
        eK[49] !== e2 ? ((q = (e) => e2?.(e.currentTarget)), (eK[49] = e2), (eK[50] = q)) : (q = eK[50]),
        eK[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = () => tC(!1)),
            (K = () => tC(!1)),
            (J = (e) => {
              ;(tk(e.currentTarget.volume), tF(e.currentTarget.muted))
            }),
            (O = (e) => tB(e.currentTarget.playbackRate)),
            (eK[51] = R),
            (eK[52] = K),
            (eK[53] = J),
            (eK[54] = O))
          : ((R = eK[51]), (K = eK[52]), (J = eK[53]), (O = eK[54])),
        eK[55] !== eW ? ((X = (e) => eW(e.currentTarget)), (eK[55] = eW), (eK[56] = X)) : (X = eK[56]),
        eK[57] !== e3 ? (($ = (e) => e3?.(e.currentTarget)), (eK[57] = e3), (eK[58] = $)) : ($ = eK[58]),
        eK[59] !== e1 ? ((G = (e) => e1?.(e.currentTarget)), (eK[59] = e1), (eK[60] = G)) : (G = eK[60]),
        eK[61] !== e0 ? ((H = (e) => e0?.(e.currentTarget)), (eK[61] = e0), (eK[62] = H)) : (H = eK[62]),
        eK[63] !== eH ||
        eK[64] !== eQ ||
        eK[65] !== e5 ||
        eK[66] !== tc ||
        eK[67] !== U ||
        eK[68] !== t2 ||
        eK[69] !== t3 ||
        eK[70] !== L ||
        eK[71] !== q ||
        eK[72] !== X ||
        eK[73] !== $ ||
        eK[74] !== G ||
        eK[75] !== H ||
        eK[76] !== tr ||
        eK[77] !== tl ||
        eK[78] !== to
          ? ((Q = (0, r.jsx)("video", {
              ref: U,
              className:
                "block min-h-0 w-full flex-1 cursor-interaction object-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
              src: t2,
              title: tr,
              style: tl,
              width: to,
              height: eH,
              "aria-label": eQ,
              tabIndex: 0,
              disablePictureInPicture: t3,
              playsInline: !0,
              poster: e5,
              preload: tc,
              onClick: tK,
              onKeyDown: D,
              onDurationChange: L,
              onTimeUpdate: z,
              onPlay: V,
              onPlaying: q,
              onPause: R,
              onEnded: K,
              onVolumeChange: J,
              onRateChange: O,
              onError: X,
              onResize: $,
              onLoadedMetadata: G,
              onLoadedData: H,
            })),
            (eK[63] = eH),
            (eK[64] = eQ),
            (eK[65] = e5),
            (eK[66] = tc),
            (eK[67] = U),
            (eK[68] = t2),
            (eK[69] = t3),
            (eK[70] = L),
            (eK[71] = q),
            (eK[72] = X),
            (eK[73] = $),
            (eK[74] = G),
            (eK[75] = H),
            (eK[76] = tr),
            (eK[77] = tl),
            (eK[78] = to),
            (eK[79] = Q))
          : (Q = eK[79]),
        eK[80] !== tb || eK[81] !== tM || eK[82] !== tX || eK[83] !== tp || eK[84] !== td
          ? ((Y =
              "overlay" !== td || tM
                ? null
                : (0, r.jsx)(C, {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    color: "mediaOverlay",
                    portalContainer: tb ? tp : void 0,
                    label: tX,
                    onClick: tK,
                    children: (0, r.jsx)(g.I, { asset: s.k }),
                  })),
            (eK[80] = tb),
            (eK[81] = tM),
            (eK[82] = tX),
            (eK[83] = tp),
            (eK[84] = td),
            (eK[85] = Y))
          : (Y = eK[85]))
      let t4 = "overlay" === td && tu ? "dark" : void 0,
        t6 =
          "overlay" === td
            ? "absolute inset-x-0 bottom-0 bg-media-background/80 text-media-foreground"
            : "border-t border-subtle"
      eK[86] !== t6
        ? ((W = (0, c.A)("controls-aun7ma", "@container/video-controls shrink-0 select-none", t6)),
          (eK[86] = t6),
          (eK[87] = W))
        : (W = eK[87])
      let t5 = tb ? tp : void 0,
        t7 = tM ? i.F : s.k
      ;(eK[88] !== t7 ? ((Z = (0, r.jsx)(g.I, { asset: t7 })), (eK[88] = t7), (eK[89] = Z)) : (Z = eK[89]),
        eK[90] !== tX || eK[91] !== t5 || eK[92] !== Z
          ? ((ee = (0, r.jsx)(C, { portalContainer: t5, label: tX, onClick: tK, children: Z })),
            (eK[90] = tX),
            (eK[91] = t5),
            (eK[92] = Z),
            (eK[93] = ee))
          : (ee = eK[93]),
        eK[94] !== tm
          ? ((et = tm.formatMessage({
              id: "markdown.video.seek",
              defaultMessage: "Seek in video",
              description: "Accessible label for the video playback timeline",
            })),
            (eK[94] = tm),
            (eK[95] = et))
          : (et = eK[95]))
      let t8 = ty <= 0,
        t9 = ty || 1,
        ne = Math.min(tx, ty)
      ;(eK[96] !== ne ? ((en = [ne]), (eK[96] = ne), (eK[97] = en)) : (en = eK[97]),
        eK[98] !== ty || eK[99] !== td
          ? ((er = (e) => {
              let t = tf.current
              "overlay" === td &&
                ty > 0 &&
                null != t &&
                ("ArrowRight" === e.key || "ArrowLeft" === e.key) &&
                (e.preventDefault(),
                (t.currentTime = Math.max(0, Math.min(ty, t.currentTime + ("ArrowRight" === e.key ? 5 : -5)))),
                tw(t.currentTime))
            }),
            (eK[98] = ty),
            (eK[99] = td),
            (eK[100] = er))
          : (er = eK[100]),
        eK[101] !== ty
          ? ((ea = (e) => {
              let t = tf.current
              null == t ||
                ty <= 0 ||
                0 !== e.button ||
                null != th.current ||
                ((th.current = { pointerId: e.pointerId, wasPlaying: !t.paused }), t.pause())
            }),
            (eK[101] = ty),
            (eK[102] = ea))
          : (ea = eK[102]),
        eK[103] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (e) => {
              let [t] = e,
                n = tf.current
              null != n && null != t && ((n.currentTime = t), tw(n.currentTime))
            }),
            (eK[103] = el))
          : (el = eK[103]),
        eK[104] !== tR ||
        eK[105] !== et ||
        eK[106] !== t8 ||
        eK[107] !== t9 ||
        eK[108] !== en ||
        eK[109] !== er ||
        eK[110] !== ea
          ? ((eo = (0, r.jsx)("span", {
              className: "flex min-w-0 flex-1 @max-xs/video-controls:order-first @max-xs/video-controls:basis-full",
              children: (0, r.jsx)(S, {
                label: et,
                valueText: tR,
                disabled: t8,
                min: 0,
                max: t9,
                step: 0.1,
                value: en,
                onKeyDown: er,
                onPointerDownCapture: ea,
                onPointerUp: tJ,
                onPointerCancel: tJ,
                onLostPointerCapture: tJ,
                onValueChange: el,
              }),
            })),
            (eK[104] = tR),
            (eK[105] = et),
            (eK[106] = t8),
            (eK[107] = t9),
            (eK[108] = en),
            (eK[109] = er),
            (eK[110] = ea),
            (eK[111] = eo))
          : (eo = eK[111]),
        eK[112] !== tR
          ? ((ei = (0, r.jsx)("span", {
              className: "shrink-0 text-xs whitespace-nowrap text-secondary tabular-nums",
              children: tR,
            })),
            (eK[112] = tR),
            (eK[113] = ei))
          : (ei = eK[113]),
        eK[114] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (e) => {
              ;(tU(!1), tL(e))
            }),
            (eK[114] = es))
          : (es = eK[114]))
      let nt = tb ? tp : void 0
      ;(eK[115] !== tm
        ? ((ed = tm.formatMessage({
            id: "markdown.video.volume",
            defaultMessage: "Video volume",
            description: "Accessible label for the video volume controls",
          })),
          (eK[115] = tm),
          (eK[116] = ed))
        : (ed = eK[116]),
        eK[117] !== tT || eK[118] !== tS
          ? ((ec = tT || 0 === tS ? (0, r.jsx)(b.sbY, {}) : (0, r.jsx)(b.BOJ, {})),
            (eK[117] = tT),
            (eK[118] = tS),
            (eK[119] = ec))
          : (ec = eK[119]),
        eK[120] !== nt || eK[121] !== ed || eK[122] !== ec
          ? ((eu = (0, r.jsx)(v.Wv, {
              asChild: !0,
              children: (0, r.jsx)(C, { portalContainer: nt, label: ed, children: ec }),
            })),
            (eK[120] = nt),
            (eK[121] = ed),
            (eK[122] = ec),
            (eK[123] = eu))
          : (eu = eK[123]))
      let nn = tb ? tp : void 0
      eK[124] !== tm
        ? ((em = tm.formatMessage({
            id: "markdown.video.volume",
            defaultMessage: "Video volume",
            description: "Accessible label for the video volume controls",
          })),
          (eK[124] = tm),
          (eK[125] = em))
        : (em = eK[125])
      let nr = tb ? tp : void 0
      ;(eK[126] !== tm
        ? ((ef = tm.formatMessage({
            id: "markdown.video.mute",
            defaultMessage: "Mute video",
            description: "Accessible label for the video mute toggle",
          })),
          (eK[126] = tm),
          (eK[127] = ef))
        : (ef = eK[127]),
        eK[128] === Symbol.for("react.memo_cache_sentinel")
          ? ((eh = () => {
              let e = tf.current
              null != e && (e.muted = !e.muted)
            }),
            (eK[128] = eh))
          : (eh = eK[128]),
        eK[129] !== tT || eK[130] !== tS
          ? ((ep = tT || 0 === tS ? (0, r.jsx)(b.sbY, {}) : (0, r.jsx)(b.BOJ, {})),
            (eK[129] = tT),
            (eK[130] = tS),
            (eK[131] = ep))
          : (ep = eK[131]),
        eK[132] !== tT || eK[133] !== nr || eK[134] !== ef || eK[135] !== ep
          ? ((eg = (0, r.jsx)(C, { portalContainer: nr, label: ef, "aria-pressed": tT, onClick: eh, children: ep })),
            (eK[132] = tT),
            (eK[133] = nr),
            (eK[134] = ef),
            (eK[135] = ep),
            (eK[136] = eg))
          : (eg = eK[136]),
        eK[137] !== tm
          ? ((eb = tm.formatMessage({
              id: "markdown.video.volume",
              defaultMessage: "Video volume",
              description: "Accessible label for the video volume controls",
            })),
            (eK[137] = tm),
            (eK[138] = eb))
          : (eb = eK[138]),
        eK[139] !== tm || eK[140] !== tT || eK[141] !== tS
          ? ((ev = tm.formatNumber(tT ? 0 : tS, { style: "percent" })),
            (eK[139] = tm),
            (eK[140] = tT),
            (eK[141] = tS),
            (eK[142] = ev))
          : (ev = eK[142]))
      let na = tT ? 0 : tS
      ;(eK[143] !== na ? ((ex = [na]), (eK[143] = na), (eK[144] = ex)) : (ex = eK[144]),
        eK[145] === Symbol.for("react.memo_cache_sentinel")
          ? ((ew = (e) => {
              let [t] = e,
                n = tf.current
              null != n && null != t && ((n.volume = t), (n.muted = !1))
            }),
            (eK[145] = ew))
          : (ew = eK[145]),
        eK[146] !== eb || eK[147] !== ev || eK[148] !== ex
          ? ((ey = (0, r.jsx)(S, {
              label: eb,
              valueText: ev,
              min: 0,
              max: 1,
              step: 0.01,
              value: ex,
              onValueChange: ew,
            })),
            (eK[146] = eb),
            (eK[147] = ev),
            (eK[148] = ex),
            (eK[149] = ey))
          : (ey = eK[149]),
        eK[150] !== eg || eK[151] !== ey
          ? ((ej = (0, r.jsxs)("span", { className: "flex w-40 items-center gap-2", children: [eg, ey] })),
            (eK[150] = eg),
            (eK[151] = ey),
            (eK[152] = ej))
          : (ej = eK[152]),
        eK[153] !== nn || eK[154] !== em || eK[155] !== ej
          ? ((eM = (0, r.jsx)(v.hl, {
              align: "end",
              side: "top",
              size: "content",
              variant: "menu",
              portalContainer: nn,
              "aria-label": em,
              children: ej,
            })),
            (eK[153] = nn),
            (eK[154] = em),
            (eK[155] = ej),
            (eK[156] = eM))
          : (eM = eK[156]),
        eK[157] !== eu || eK[158] !== eM
          ? ((eC = (0, r.jsxs)(v.AM, { onOpenChange: es, children: [eu, eM] })),
            (eK[157] = eu),
            (eK[158] = eM),
            (eK[159] = eC))
          : (eC = eK[159]))
      let nl = tb ? tp : void 0
      eK[160] === Symbol.for("react.memo_cache_sentinel")
        ? ((eS = (e) => {
            ;(tU(!1), tL(e), e || tN(!1))
          }),
          (eK[160] = eS))
        : (eS = eK[160])
      let no = tb ? tp : void 0
      ;(eK[161] !== tm
        ? ((ek = tm.formatMessage({
            id: "markdown.video.options",
            defaultMessage: "Video options",
            description: "Accessible label for the video playback options menu",
          })),
          (eK[161] = tm),
          (eK[162] = ek))
        : (ek = eK[162]),
        eK[163] === Symbol.for("react.memo_cache_sentinel")
          ? ((eT = (0, r.jsx)(b.l0Y, {})), (eK[163] = eT))
          : (eT = eK[163]),
        eK[164] !== no || eK[165] !== ek
          ? ((eF = (0, r.jsx)(C, { portalContainer: no, label: ek, children: eT })),
            (eK[164] = no),
            (eK[165] = ek),
            (eK[166] = eF))
          : (eF = eK[166]),
        eK[167] !== e4
          ? ((eA =
              null != e4
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(p.ms.Item, {
                        onSelect: () => {
                          ;(t_(!1), e4().catch(() => t_(!0)))
                        },
                        children: (0, r.jsx)(f.A, {
                          id: "markdown.video.saveCopy",
                          defaultMessage: "Save video as…",
                          description: "Menu action to save a local copy of a video",
                        }),
                      }),
                      (0, r.jsx)(p.ms.Separator, {}),
                    ],
                  })
                : null),
            (eK[167] = e4),
            (eK[168] = eA))
          : (eA = eK[168]),
        eK[169] !== tI || eK[170] !== tn
          ? ((eB =
              null != tn
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(p.ms.Item, {
                        onSelect: (e) => {
                          ;(e.preventDefault(), (0, x.E)(tn).then(tN))
                        },
                        children: tI
                          ? (0, r.jsx)(f.A, {
                              id: "markdown.video.linkCopied",
                              defaultMessage: "Link copied",
                              description: "Confirmation that the original video URL was copied",
                            })
                          : (0, r.jsx)(f.A, {
                              id: "markdown.video.copyLink",
                              defaultMessage: "Copy link",
                              description: "Video settings menu action to copy the original video URL",
                            }),
                      }),
                      (0, r.jsx)(p.ms.Separator, {}),
                    ],
                  })
                : null),
            (eK[169] = tI),
            (eK[170] = tn),
            (eK[171] = eB))
          : (eB = eK[171]),
        eK[172] === Symbol.for("react.memo_cache_sentinel")
          ? ((eE = (0, r.jsx)(p.ms.SectionLabel, {
              children: (0, r.jsx)(f.A, {
                id: "markdown.video.speed",
                defaultMessage: "Playback speed",
                description: "Heading for video playback speed choices",
              }),
            })),
            (eK[172] = eE))
          : (eE = eK[172]))
      let ni = String(tA)
      return (
        eK[173] === Symbol.for("react.memo_cache_sentinel")
          ? ((e_ = (e) => {
              let t = tf.current
              null != t && (t.playbackRate = Number(e))
            }),
            (eI = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(M)),
            (eK[173] = e_),
            (eK[174] = eI))
          : ((e_ = eK[173]), (eI = eK[174])),
        eK[175] !== ni
          ? ((eN = (0, r.jsx)(p.ms.RadioGroup, { value: ni, onValueChange: e_, children: eI })),
            (eK[175] = ni),
            (eK[176] = eN))
          : (eN = eK[176]),
        eK[177] !== tp || eK[178] !== td
          ? ((eP =
              "overlay" !== td && tp?.ownerDocument.pictureInPictureEnabled
                ? (0, r.jsx)(p.ms.Item, {
                    onSelect: () => {
                      let e = tf.current
                      null == e ||
                        (t_(!1),
                        (e.ownerDocument.pictureInPictureElement === e
                          ? e.ownerDocument.exitPictureInPicture()
                          : e.requestPictureInPicture()
                        ).catch(() => t_(!0)))
                    },
                    children: (0, r.jsx)(f.A, {
                      id: "markdown.video.pictureInPicture",
                      defaultMessage: "Picture in picture",
                      description: "Menu action to toggle picture-in-picture video playback",
                    }),
                  })
                : null),
            (eK[177] = tp),
            (eK[178] = td),
            (eK[179] = eP))
          : (eP = eK[179]),
        eK[180] !== nl || eK[181] !== eF || eK[182] !== eA || eK[183] !== eB || eK[184] !== eN || eK[185] !== eP
          ? ((eU = (0, r.jsxs)(p.Ab, {
              align: "end",
              side: "top",
              portalContainer: nl,
              onOpenChange: eS,
              triggerButton: eF,
              children: [eA, eB, eE, eN, eP],
            })),
            (eK[180] = nl),
            (eK[181] = eF),
            (eK[182] = eA),
            (eK[183] = eB),
            (eK[184] = eN),
            (eK[185] = eP),
            (eK[186] = eU))
          : (eU = eK[186]),
        eK[187] !== ti ||
        eK[188] !== t$ ||
        eK[189] !== tm ||
        eK[190] !== tb ||
        eK[191] !== eZ ||
        eK[192] !== tp ||
        eK[193] !== tO
          ? ((eD =
              null != eZ || (ti && tp?.ownerDocument.fullscreenEnabled)
                ? (0, r.jsx)(C, {
                    portalContainer: tb ? tp : void 0,
                    label:
                      null != eZ
                        ? tm.formatMessage({
                            id: "markdown.video.expand",
                            defaultMessage: "Expand video",
                            description: "Button to open a larger video preview in a dialog",
                          })
                        : t$,
                    onClick: tO,
                    children: tb ? (0, r.jsx)(g.I, { asset: o }) : (0, r.jsx)(b.Zdv, {}),
                  })
                : null),
            (eK[187] = ti),
            (eK[188] = t$),
            (eK[189] = tm),
            (eK[190] = tb),
            (eK[191] = eZ),
            (eK[192] = tp),
            (eK[193] = tO),
            (eK[194] = eD))
          : (eD = eK[194]),
        eK[195] !== eD || eK[196] !== eC || eK[197] !== eU
          ? ((eL = (0, r.jsxs)("span", {
              className: "ms-auto flex shrink-0 items-center gap-1.5",
              children: [eC, eU, eD],
            })),
            (eK[195] = eD),
            (eK[196] = eC),
            (eK[197] = eU),
            (eK[198] = eL))
          : (eL = eK[198]),
        eK[199] !== eL || eK[200] !== ee || eK[201] !== eo || eK[202] !== ei
          ? ((ez = (0, r.jsxs)("span", {
              className:
                "flex h-toolbar-pane flex-wrap items-center gap-x-2 px-2 @max-xs/video-controls:h-auto @max-xs/video-controls:py-1",
              children: [ee, eo, ei, eL],
            })),
            (eK[199] = eL),
            (eK[200] = ee),
            (eK[201] = eo),
            (eK[202] = ei),
            (eK[203] = ez))
          : (ez = eK[203]),
        eK[204] !== tE
          ? ((eV = tE
              ? (0, r.jsx)("span", {
                  role: "status",
                  className: "block px-2 pb-2 text-xs text-secondary",
                  children: (0, r.jsx)(f.A, {
                    id: "markdown.video.actionFailed",
                    defaultMessage: "Could not complete this video action. Try again",
                    description: "Error shown when video playback, saving, fullscreen, or picture in picture fails",
                  }),
                })
              : null),
            (eK[204] = tE),
            (eK[205] = eV))
          : (eV = eK[205]),
        eK[206] !== ez || eK[207] !== eV || eK[208] !== t4 || eK[209] !== W
          ? ((eq = (0, r.jsxs)("span", { "data-theme": t4, className: W, children: [ez, eV] })),
            (eK[206] = ez),
            (eK[207] = eV),
            (eK[208] = t4),
            (eK[209] = W),
            (eK[210] = eq))
          : (eq = eK[210]),
        eK[211] !== e8 ||
        eK[212] !== eq ||
        eK[213] !== N ||
        eK[214] !== tZ ||
        eK[215] !== t1 ||
        eK[216] !== t0 ||
        eK[217] !== P ||
        eK[218] !== Q ||
        eK[219] !== Y
          ? ((eR = (0, r.jsxs)("span", {
              ref: tg,
              className: N,
              "data-markdown-copy": "exclude",
              "data-theme": tZ,
              "aria-busy": t1,
              "data-controls-hidden": t0,
              onKeyDownCapture: P,
              children: [Q, e8, Y, eq],
            })),
            (eK[211] = e8),
            (eK[212] = eq),
            (eK[213] = N),
            (eK[214] = tZ),
            (eK[215] = t1),
            (eK[216] = t0),
            (eK[217] = P),
            (eK[218] = Q),
            (eK[219] = Y),
            (eK[220] = eR))
          : (eR = eK[220]),
        eR
      )
    }
    function M(e) {
      return (0, r.jsx)(
        p.ms.RadioItem,
        {
          value: String(e),
          children: (0, r.jsx)(f.A, {
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
        o,
        i,
        s,
        d = (0, a.c)(11)
      return (
        d[0] !== e
          ? (({ label: t, portalContainer: n, ...o } = e), (d[0] = e), (d[1] = t), (d[2] = n), (d[3] = o))
          : ((t = d[1]), (n = d[2]), (o = d[3])),
        d[4] !== t || d[5] !== o
          ? ((i = (0, r.jsx)(h.$, { color: "ghostSecondary", size: "toolbar", uniform: !0, "aria-label": t, ...o })),
            (d[4] = t),
            (d[5] = o),
            (d[6] = i))
          : (i = d[6]),
        d[7] !== t || d[8] !== n || d[9] !== i
          ? ((s = (0, r.jsx)(l.m, { content: t, portalContainer: n, children: i })),
            (d[7] = t),
            (d[8] = n),
            (d[9] = i),
            (d[10] = s))
          : (s = d[10]),
        s
      )
    }
    function S(e) {
      let t,
        n,
        l,
        o,
        i,
        s,
        m,
        f,
        h,
        p,
        g,
        b,
        v,
        x,
        w = (0, a.c)(34)
      w[0] !== e
        ? (({ label: t, min: l, max: o, valueText: i, ...n } = e),
          (w[0] = e),
          (w[1] = t),
          (w[2] = n),
          (w[3] = l),
          (w[4] = o),
          (w[5] = i))
        : ((t = w[1]), (n = w[2]), (l = w[3]), (o = w[4]), (i = w[5]))
      let y = void 0 === l ? 0 : l,
        j = void 0 === o ? 100 : o,
        [M, C] = (0, u.useState)(!1),
        S = (0, u.useRef)(null)
      w[6] !== j || w[7] !== y || w[8] !== n
        ? ((s = (e) => {
            let t = S.current
            if (n.disabled || null == t) return
            let r = e.currentTarget.getBoundingClientRect(),
              a = t.getBoundingClientRect().width
            if (r.width <= a) return
            let l = Math.min(1, Math.max(0, (e.clientX - r.left - a / 2) / (r.width - a)))
            n.onValueChange?.([y + (j - y) * ("rtl" === e.currentTarget.dir ? 1 - l : l)])
          }),
          (w[6] = j),
          (w[7] = y),
          (w[8] = n),
          (w[9] = s))
        : (s = w[9])
      let k = s
      ;(w[10] === Symbol.for("react.memo_cache_sentinel") ? ((m = () => C(!1)), (w[10] = m)) : (m = w[10]),
        w[11] !== n
          ? ((f = (e) => {
              ;(C(!1), n.onKeyDown?.(e))
            }),
            (w[11] = n),
            (w[12] = f))
          : (f = w[12]),
        w[13] !== n.disabled || w[14] !== k
          ? ((h = (e) => {
              ;(e.preventDefault(),
                n.disabled ||
                  0 !== e.button ||
                  (C(!0), S.current?.setPointerCapture(e.pointerId), S.current?.focus({ preventScroll: !0 }), k(e)))
            }),
            (w[13] = n.disabled),
            (w[14] = k),
            (w[15] = h))
          : (h = w[15]),
        w[16] !== k
          ? ((p = (e) => {
              ;(e.preventDefault(), S.current?.hasPointerCapture(e.pointerId) && k(e))
            }),
            (w[16] = k),
            (w[17] = p))
          : (p = w[17]),
        w[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, r.jsx)(d.CC, {
              className: "relative h-0.5 grow rounded-full bg-border",
              children: (0, r.jsx)(d.Q6, { className: "absolute h-full rounded-full bg-text" }),
            })),
            (w[18] = g))
          : (g = w[18]))
      let T = !M && "focus-visible:ring-2 focus-visible:ring-ring"
      return (
        w[19] !== T
          ? ((b = (0, c.A)(
              "block h-4 w-4 cursor-interaction rounded-full border border-default bg-surface-tertiary shadow-md focus:outline-none data-[disabled]:cursor-default",
              T,
            )),
            (w[19] = T),
            (w[20] = b))
          : (b = w[20]),
        w[21] !== t || w[22] !== n.disabled || w[23] !== b || w[24] !== i
          ? ((v = (0, r.jsx)(d.zi, {
              ref: S,
              className: b,
              "aria-label": t,
              "aria-disabled": n.disabled,
              "aria-valuetext": i,
            })),
            (w[21] = t),
            (w[22] = n.disabled),
            (w[23] = b),
            (w[24] = i),
            (w[25] = v))
          : (v = w[25]),
        w[26] !== j || w[27] !== y || w[28] !== n || w[29] !== v || w[30] !== f || w[31] !== h || w[32] !== p
          ? ((x = (0, r.jsxs)(d.bL, {
              className: "relative flex h-6 min-w-0 flex-1 touch-none items-center data-[disabled]:opacity-40",
              min: y,
              max: j,
              onBlur: m,
              ...n,
              onKeyDown: f,
              onPointerDown: h,
              onPointerMove: p,
              children: [g, v],
            })),
            (w[26] = j),
            (w[27] = y),
            (w[28] = n),
            (w[29] = v),
            (w[30] = f),
            (w[31] = h),
            (w[32] = p),
            (w[33] = x))
          : (x = w[33]),
        x
      )
    }
    function k(e) {
      let t = Math.max(0, Math.floor(e))
      return `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`
    }
  },
  sMeo(e, t, n) {
    var r = n("ABep"),
      a = n("QosV"),
      l = n("WXbs"),
      o = n("BibS")
    n.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            n = (0, a.c)(2)
          return (
            n[0] !== e
              ? ((t = (0, r.jsx)(o.W, { ...e, content: l.SymbolBrowser })), (n[0] = e), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
      },
    )
  },
  dQD8(e, t, n) {
    var r = n("IGZ3")
    let a = { some: 0, all: 1 }
    n.d(
      t,
      {},
      {
        l: function (e, t, { root: n, margin: l, amount: o = "some" } = {}) {
          let i = (0, r.K)(e),
            s = new WeakMap(),
            d = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  let n = s.get(e.target)
                  if (!!n !== e.isIntersecting)
                    if (e.isIntersecting) {
                      let n = t(e.target, e)
                      "function" == typeof n ? s.set(e.target, n) : d.unobserve(e.target)
                    } else "function" == typeof n && (n(e), s.delete(e.target))
                })
              },
              { root: n, rootMargin: l, threshold: "number" == typeof o ? o : a[o] },
            )
          return (i.forEach((e) => d.observe(e)), () => d.disconnect())
        },
      },
    )
  },
  mEbU(e, t, n) {
    var r = n("zd8w"),
      a = n("dQD8")
    n.d(
      t,
      {},
      {
        W: function (e, { root: t, margin: n, amount: l, once: o = !1, initial: i = !1 } = {}) {
          let [s, d] = (0, r.useState)(i)
          return (
            (0, r.useEffect)(() => {
              if (!e.current || (o && s)) return
              let r = { root: (t && t.current) || void 0, margin: n, amount: l }
              return (0, a.l)(e.current, () => (d(!0), o ? void 0 : () => d(!1)), r)
            }, [t, e, n, o, l]),
            s
          )
        },
      },
    )
  },
}
//# sourceMappingURL=594560.b3f5082686.js.map
