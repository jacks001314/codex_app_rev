export const __rspack_esm_ids = [392429]
export const __webpack_modules__ = {
  NeS9(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsxs)("svg", {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M8.00037 4.14209C8.29009 4.14235 8.52478 4.37769 8.52478 4.66748V7.86279C8.52464 8.0901 8.43446 8.30843 8.2738 8.46924L6.70447 10.0386C6.49954 10.2433 6.16728 10.2432 5.96228 10.0386C5.75731 9.8336 5.75742 9.50142 5.96228 9.29639L7.47498 7.78369V4.66748C7.47498 4.37753 7.71042 4.14209 8.00037 4.14209Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.00037 1.4751C11.604 1.4751 14.5258 4.39683 14.5258 8.00049C14.5258 11.6041 11.604 14.5259 8.00037 14.5259C4.39671 14.5259 1.47498 11.6041 1.47498 8.00049C1.47498 4.39683 4.39671 1.4751 8.00037 1.4751ZM8.00037 2.52588C4.97661 2.52588 2.52576 4.97673 2.52576 8.00049C2.52576 11.0242 4.97661 13.4751 8.00037 13.4751C11.0241 13.4751 13.475 11.0242 13.475 8.00049C13.475 4.97673 11.0241 2.52588 8.00037 2.52588Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  dNkn(e, t, a) {
    var n = a("zTeN"),
      r = a("Oj9r"),
      l = a("tVrA")
    a.d(
      t,
      {},
      {
        F: function (e) {
          let { signal: t, value: a } = e,
            o = (0, n.gh)(r.GD)
          return ((0, l.I)(o, t, a), null)
        },
      },
    )
  },
  tVrA(e, t, a) {
    var n = a("QosV"),
      r = a("zd8w")
    a.d(
      t,
      {},
      {
        I: function (e, t, a) {
          let l,
            o,
            i,
            s,
            d = (0, n.c)(9)
          ;(d[0] !== e || d[1] !== t || d[2] !== a
            ? ((l = () => {
                e.set(t, a)
              }),
              (o = [e, t, a]),
              (d[0] = e),
              (d[1] = t),
              (d[2] = a),
              (d[3] = l),
              (d[4] = o))
            : ((l = d[3]), (o = d[4])),
            (0, r.useLayoutEffect)(l, o),
            d[5] !== e || d[6] !== t
              ? ((i = () => () => {
                  e.set(t, null)
                }),
                (s = [e, t]),
                (d[5] = e),
                (d[6] = t),
                (d[7] = i),
                (d[8] = s))
              : ((i = d[7]), (s = d[8])),
            (0, r.useLayoutEffect)(i, s))
        },
      },
    )
  },
  r5nL(e, t, a) {
    a.d(t, { C: () => c })
    var n = a("ABep"),
      r = a("QosV"),
      l = a("zd8w"),
      o = a("TL6G"),
      i = a("bIvi"),
      s = a("s3wR"),
      d = a("e8Ti")
    function c(e) {
      let t,
        a,
        c,
        u,
        m,
        f,
        h = (0, r.c)(19),
        { children: p, getTarget: g, runCommand: v, onFindOpen: b, onFindStateChange: x } = e,
        [w, y] = (0, l.useState)(null)
      h[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            let e, t
            return (
              (e = 0),
              (t = null),
              {
                startCommand(a, n) {
                  if (
                    "open-find" !== a.type &&
                    "set-find-query" !== a.type &&
                    "find-next" !== a.type &&
                    "find-previous" !== a.type &&
                    "close-find" !== a.type
                  )
                    return
                  let r = ++e
                  return (
                    ("set-find-query" === a.type || "close-find" === a.type) &&
                      (t = { target: n, query: "close-find" === a.type ? "" : a.query }),
                    (a) => {
                      r === e && (y(a ? null : n), a || (t = null))
                    }
                  )
                },
                acceptState: (e, a) =>
                  (!(null != t && (0, s.U)(t.target, e)) || t.query === a.query) && ((t = null), !0),
              }
            )
          }),
          (h[0] = t))
        : (t = h[0])
      let [M] = (0, l.useState)(t)
      h[1] !== M || h[2] !== g || h[3] !== v
        ? ((a = async (e) => {
            let { command: t, ...a } = e,
              n = M.startCommand(t, a),
              r = await (0, d.q)({ ...a, command: t }, v)
            return ((0, s.U)(a, g()) && n?.("accepted" === r), r)
          }),
          (h[1] = M),
          (h[2] = g),
          (h[3] = v),
          (h[4] = a))
        : (a = h[4])
      let j = (0, i.K)(a)
      return (
        h[5] !== j || h[6] !== g || h[7] !== b
          ? ((c = (e) => {
              "open-find" === e.command.type
                ? b?.({ browserTabId: e.browserTabId, conversationId: e.conversationId })
                : (0, s.U)(e, g()) &&
                  ("find-next" === e.command.type || "find-previous" === e.command.type) &&
                  j({ browserTabId: e.browserTabId, conversationId: e.conversationId, command: e.command })
            }),
            (h[5] = j),
            (h[6] = g),
            (h[7] = b),
            (h[8] = c))
          : (c = h[8]),
        (0, o.JX)("browser-sidebar-command", c),
        h[9] !== M || h[10] !== g || h[11] !== x
          ? ((u = (e) => {
              ;(0, s.U)(e, g()) && M.acceptState(e, e.state) && x(e.state)
            }),
            (h[9] = M),
            (h[10] = g),
            (h[11] = x),
            (h[12] = u))
          : (u = h[12]),
        (0, o.JX)("browser-sidebar-find-state", u),
        h[13] !== p || h[14] !== j || h[15] !== w
          ? ((m = p({ runCommand: j, find: { failedTarget: w } })), (h[13] = p), (h[14] = j), (h[15] = w), (h[16] = m))
          : (m = h[16]),
        h[17] !== m ? ((f = (0, n.jsx)(n.Fragment, { children: m })), (h[17] = m), (h[18] = f)) : (f = h[18]),
        f
      )
    }
  },
  NsEU(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("Wf1j"),
      o = a("oyxz"),
      i = a("nMUV"),
      s = a("AXTp"),
      d = a("s3wR")
    function c(e) {
      return e.currentTarget.select()
    }
    a.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            a,
            u,
            m,
            f,
            h,
            p,
            g,
            v,
            b,
            x,
            w,
            y,
            M,
            j,
            C,
            k,
            T = (0, r.c)(63),
            {
              controller: S,
              inputId: A,
              target: F,
              state: B,
              domainControl: _,
              onQueryChange: E,
              onClose: N,
              focusPage: I,
            } = e,
            D = (0, l.A)()
          T[0] !== S.find.failedTarget || T[1] !== F
            ? ((t = (0, d.U)(F, S.find.failedTarget)), (T[0] = S.find.failedTarget), (T[1] = F), (T[2] = t))
            : (t = T[2])
          let P = t
          T[3] !== S || T[4] !== I || T[5] !== N || T[6] !== F
            ? ((a = () => {
                ;(N(), S.runCommand({ ...F, command: { type: "close-find" } }), I())
              }),
              (T[3] = S),
              (T[4] = I),
              (T[5] = N),
              (T[6] = F),
              (T[7] = a))
            : (a = T[7])
          let U = a
          T[8] !== B.query ? ((u = B.query.trim()), (T[8] = B.query), (T[9] = u)) : (u = T[9])
          let z = u.length > 0,
            L = null
          if (P) {
            let e
            ;(T[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(o.A, {
                  id: "codex.threadFindBar.unavailable",
                  defaultMessage: "Couldn’t search this page",
                  description: "Find-in-page error when the browser page is no longer available",
                })),
                (T[10] = e))
              : (e = T[10]),
              (L = e))
          } else if (z && 0 === B.matches) {
            let e
            ;(T[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(o.A, {
                  id: "codex.threadFindBar.noResults",
                  defaultMessage: "0 results",
                  description: "Find-in-thread label when there are no matches",
                })),
                (T[11] = e))
              : (e = T[11]),
              (L = e))
          } else if (z) {
            let e
            ;(T[12] !== B.activeMatchOrdinal || T[13] !== B.matches
              ? ((e = (0, n.jsx)(o.A, {
                  id: "codex.threadFindBar.results",
                  defaultMessage: "{active} / {matches} results",
                  description: "Find-in-thread label showing the active match index",
                  values: { active: B.activeMatchOrdinal, matches: B.matches },
                })),
                (T[12] = B.activeMatchOrdinal),
                (T[13] = B.matches),
                (T[14] = e))
              : (e = T[14]),
              (L = e))
          }
          ;(T[15] !== D
            ? ((m = D.formatMessage({
                id: "codex.threadFindBar.label.browser",
                defaultMessage: "Find in page",
                description: "Accessible label for the browser find input",
              })),
              (T[15] = D),
              (T[16] = m))
            : (m = T[16]),
            T[17] !== D
              ? ((f = D.formatMessage({
                  id: "codex.threadFindBar.placeholder.browser",
                  defaultMessage: "Find in page…",
                  description: "Placeholder for searching within the browser page",
                })),
                (T[17] = D),
                (T[18] = f))
              : (f = T[18]),
            T[19] !== S || T[20] !== E || T[21] !== F
              ? ((h = (e) => {
                  ;(E(e), S.runCommand({ ...F, command: { type: "set-find-query", query: e } }))
                }),
                (T[19] = S),
                (T[20] = E),
                (T[21] = F),
                (T[22] = h))
              : (h = T[22]),
            T[23] !== S || T[24] !== F
              ? ((p = (e) => void S.runCommand({ ...F, command: { type: e ? "find-previous" : "find-next" } })),
                (T[23] = S),
                (T[24] = F),
                (T[25] = p))
              : (p = T[25]),
            T[26] !== U || T[27] !== A || T[28] !== B.query || T[29] !== m || T[30] !== f || T[31] !== h || T[32] !== p
              ? ((g = (0, n.jsx)(i.rV, {
                  id: A,
                  label: m,
                  placeholder: f,
                  value: B.query,
                  onChange: h,
                  onEnter: p,
                  onEscape: U,
                  onFocus: c,
                })),
                (T[26] = U),
                (T[27] = A),
                (T[28] = B.query),
                (T[29] = m),
                (T[30] = f),
                (T[31] = h),
                (T[32] = p),
                (T[33] = g))
              : (g = T[33]))
          let V = B.matches
          ;(T[34] !== D
            ? ((v = D.formatMessage({
                id: "codex.threadFindBar.previousResult",
                defaultMessage: "Previous result",
                description: "Button label to go to the previous find result",
              })),
              (T[34] = D),
              (T[35] = v))
            : (v = T[35]),
            T[36] !== D
              ? ((b = D.formatMessage({
                  id: "codex.threadFindBar.nextResult",
                  defaultMessage: "Next result",
                  description: "Button label to go to the next find result",
                })),
                (T[36] = D),
                (T[37] = b))
              : (b = T[37]),
            T[38] !== S || T[39] !== F
              ? ((x = () => void S.runCommand({ ...F, command: { type: "find-next" } })),
                (w = () => void S.runCommand({ ...F, command: { type: "find-previous" } })),
                (T[38] = S),
                (T[39] = F),
                (T[40] = x),
                (T[41] = w))
              : ((x = T[40]), (w = T[41])),
            T[42] !== z || T[43] !== B.matches || T[44] !== v || T[45] !== b || T[46] !== x || T[47] !== w
              ? ((y = (0, n.jsx)(i.rr, {
                  isVisible: z,
                  matches: V,
                  previousLabel: v,
                  nextLabel: b,
                  onNext: x,
                  onPrevious: w,
                })),
                (T[42] = z),
                (T[43] = B.matches),
                (T[44] = v),
                (T[45] = b),
                (T[46] = x),
                (T[47] = w),
                (T[48] = y))
              : (y = T[48]))
          let q = z || P
          return (
            T[49] !== L || T[50] !== q
              ? ((M = (0, n.jsx)(i.Af, { isVisible: q, label: L })), (T[49] = L), (T[50] = q), (T[51] = M))
              : (M = T[51]),
            T[52] !== D
              ? ((j = D.formatMessage({
                  id: "codex.threadFindBar.close",
                  defaultMessage: "Close find",
                  description: "Button label to close the find bar",
                })),
                (T[52] = D),
                (T[53] = j))
              : (j = T[53]),
            T[54] !== U || T[55] !== j
              ? ((C = (0, n.jsx)(i.$1, { label: j, onClose: U })), (T[54] = U), (T[55] = j), (T[56] = C))
              : (C = T[56]),
            T[57] !== _ || T[58] !== y || T[59] !== M || T[60] !== C || T[61] !== g
              ? ((k = (0, n.jsxs)(s.N, { children: [g, _, y, M, C] })),
                (T[57] = _),
                (T[58] = y),
                (T[59] = M),
                (T[60] = C),
                (T[61] = g),
                (T[62] = k))
              : (k = T[62]),
            k
          )
        },
      },
    )
  },
  e8Ti(e, t, a) {
    var n = a("WFY2")
    a.d(
      t,
      {},
      {
        q: async function (e, t) {
          try {
            return await t(e)
          } catch (t) {
            return (
              n.v.error("Browser page command failed", { safe: { command: e.command.type }, sensitive: { error: t } }),
              "failed"
            )
          }
        },
      },
    )
  },
  s3wR(e, t, a) {
    a.d(
      t,
      {},
      {
        U: function (e, t) {
          return null != e && null != t && e.browserTabId === t.browserTabId && e.conversationId === t.conversationId
        },
      },
    )
  },
  JvtY(e, t, a) {
    var n = a("GaA7")
    a.d(
      t,
      {},
      {
        e: async function (e) {
          let t = n.appServices.browserHost
          return null == t ? "page-unavailable" : t.runPageCommand(e)
        },
      },
    )
  },
  nMUV(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("rPLd"),
      o = a("bWCc"),
      i = a("xv9C"),
      s = a("on57"),
      d = a("ygO2"),
      c = a("HOLv"),
      u = a("JnO7")
    a.d(
      t,
      {},
      {
        $1: function (e) {
          let t,
            a,
            l,
            o = (0, r.c)(5),
            { label: s, onClose: u } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)("div", { className: "ms-2 me-2 h-4 w-px bg-border" })), (o[0] = t))
              : (t = o[0]),
            o[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(c.I, { className: "text-default", "aria-hidden": !1, asset: i.Q })), (o[1] = a))
              : (a = o[1]),
            o[2] !== s || o[3] !== u
              ? ((l = (0, n.jsxs)("div", {
                  className: "col-[3/4] row-[1] flex h-[44px] items-center pe-4",
                  children: [
                    t,
                    (0, n.jsx)(d.$, {
                      className: "-m-0.5 size-6",
                      size: "icon",
                      color: "ghost",
                      uniform: !0,
                      onClick: u,
                      "aria-label": s,
                      children: a,
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
            a,
            l = (0, r.c)(5),
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
              ? ((a = (0, n.jsx)("span", { className: t, children: i })), (l[2] = i), (l[3] = t), (l[4] = a))
              : (a = l[4]),
            a
          )
        },
        rV: function (e) {
          let t,
            a,
            l,
            i,
            s,
            d,
            m = (0, r.c)(24),
            {
              autoFocus: f,
              id: h,
              isLoading: p,
              label: g,
              onChange: v,
              onEnter: b,
              onEscape: x,
              onFocus: w,
              placeholder: y,
              value: M,
            } = e,
            j = void 0 === f || f,
            C = void 0 !== p && p
          ;(m[0] !== C
            ? ((t = C
                ? (0, n.jsx)(u.A, { "aria-hidden": !0, className: "size-4 animate-spin text-default" })
                : (0, n.jsx)(c.I, { className: "text-default", "aria-hidden": !1, asset: o.Y })),
              (m[0] = C),
              (m[1] = t))
            : (t = m[1]),
            m[2] !== h || m[3] !== g
              ? ((a = (0, n.jsx)("label", { className: "sr-only", htmlFor: h, children: g })),
                (m[2] = h),
                (m[3] = g),
                (m[4] = a))
              : (a = m[4]))
          let k = C || void 0
          return (
            m[5] !== v
              ? ((l = (e) => {
                  v(e.target.value)
                }),
                (m[5] = v),
                (m[6] = l))
              : (l = m[6]),
            m[7] !== b || m[8] !== x
              ? ((i = (e) => {
                  if (
                    ("Enter" === e.key || "Escape" === e.key) &&
                    (e.nativeEvent.isComposing || 229 === e.nativeEvent.keyCode)
                  )
                    return void e.stopPropagation()
                  if ("Enter" === e.key) {
                    ;(e.preventDefault(), b(e.shiftKey))
                    return
                  }
                  "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), x())
                }),
                (m[7] = b),
                (m[8] = x),
                (m[9] = i))
              : (i = m[9]),
            m[10] !== j ||
            m[11] !== h ||
            m[12] !== g ||
            m[13] !== w ||
            m[14] !== y ||
            m[15] !== k ||
            m[16] !== l ||
            m[17] !== i ||
            m[18] !== M
              ? ((s = (0, n.jsx)("input", {
                  id: h,
                  type: "text",
                  autoFocus: j,
                  value: M,
                  "aria-busy": k,
                  "aria-label": g,
                  placeholder: y,
                  className:
                    "h-6 min-w-0 flex-1 bg-transparent text-base leading-6 text-default outline-none placeholder:text-tertiary",
                  "data-codex-find-input": !0,
                  onChange: l,
                  onFocus: w,
                  onKeyDown: i,
                })),
                (m[10] = j),
                (m[11] = h),
                (m[12] = g),
                (m[13] = w),
                (m[14] = y),
                (m[15] = k),
                (m[16] = l),
                (m[17] = i),
                (m[18] = M),
                (m[19] = s))
              : (s = m[19]),
            m[20] !== t || m[21] !== a || m[22] !== s
              ? ((d = (0, n.jsxs)("div", {
                  className: "col-[1/2] row-[1] flex h-[44px] min-w-0 items-center gap-2 ps-4",
                  children: [t, a, s],
                })),
                (m[20] = t),
                (m[21] = a),
                (m[22] = s),
                (m[23] = d))
              : (d = m[23]),
            d
          )
        },
        rr: function (e) {
          let t,
            a,
            o,
            i,
            u,
            m,
            f,
            h = (0, r.c)(18),
            { isVisible: p, matches: g, nextLabel: v, onNext: b, onPrevious: x, previousLabel: w } = e,
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
          let M = 0 === g
          ;(h[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(c.I, { "aria-hidden": !1, asset: l.l })), (h[2] = a))
            : (a = h[2]),
            h[3] !== x || h[4] !== w || h[5] !== M
              ? ((o = (0, n.jsx)(d.$, {
                  className: "h-4 w-4 p-0 text-codex-description",
                  size: "icon",
                  color: "ghost",
                  uniform: !0,
                  onClick: x,
                  disabled: M,
                  "aria-label": w,
                  children: a,
                })),
                (h[3] = x),
                (h[4] = w),
                (h[5] = M),
                (h[6] = o))
              : (o = h[6]))
          let j = 0 === g
          return (
            h[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(c.I, { className: "rotate-180", "aria-hidden": !1, asset: l.l })), (h[7] = i))
              : (i = h[7]),
            h[8] !== v || h[9] !== b || h[10] !== j
              ? ((u = (0, n.jsx)(d.$, {
                  className: "h-4 w-4 p-0 text-codex-description",
                  size: "icon",
                  color: "ghost",
                  uniform: !0,
                  onClick: b,
                  disabled: j,
                  "aria-label": v,
                  children: i,
                })),
                (h[8] = v),
                (h[9] = b),
                (h[10] = j),
                (h[11] = u))
              : (u = h[11]),
            h[12] !== o || h[13] !== u
              ? ((m = (0, n.jsxs)("div", { className: "flex items-center gap-3", children: [o, u] })),
                (h[12] = o),
                (h[13] = u),
                (h[14] = m))
              : (m = h[14]),
            h[15] !== t || h[16] !== m
              ? ((f = (0, n.jsx)("div", { className: t, children: m })), (h[15] = t), (h[16] = m), (h[17] = f))
              : (f = h[17]),
            f
          )
        },
      },
    )
  },
  QxH2(e, t, a) {
    var n = a("SKhr")
    function r() {
      return new Promise((e) => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            e()
          })
        })
      })
    }
    a.d(
      t,
      {},
      {
        Cu: function ({
          container: e,
          matchId: t,
          includeShadowRoots: a,
          scrollBehavior: r = "smooth",
          signal: l,
          timeoutMs: o = 1500,
        }) {
          let i = () => (0, n.tk)({ container: e, matchId: t, includeShadowRoots: a })
          if (l?.aborted) return Promise.resolve()
          let s = i()
          return null != s
            ? (s.scrollIntoView({ block: "center", behavior: r }), Promise.resolve())
            : new Promise((e) => {
                let t = null,
                  a = null
                function n(n) {
                  ;(null != t && (window.cancelAnimationFrame(t), (t = null)),
                    null != a && (window.clearTimeout(a), (a = null)),
                    l?.removeEventListener("abort", s),
                    null != n && n.scrollIntoView({ block: "center", behavior: r }),
                    e())
                }
                function s() {
                  n()
                }
                ;(l?.addEventListener("abort", s, { once: !0 }),
                  (a = window.setTimeout(() => {
                    n()
                  }, o)),
                  (t = window.requestAnimationFrame(function e() {
                    if (l?.aborted) return void n()
                    let a = i()
                    null != a ? n(a) : (t = window.requestAnimationFrame(e))
                  })))
              })
        },
        H9: async function (e, t, a) {
          if (!a?.signal?.aborted && null != t) {
            if (null == e) throw Error("Conversation search requested before the turn list was ready")
            ;(await e.scrollToKey(t, void 0, a), a?.signal?.aborted || (await r()))
          }
        },
        JA: r,
        Nh: function (e, t) {
          return e?.querySelector(`[data-content-search-turn-key="${CSS.escape(t)}"]`) ?? null
        },
      },
    )
  },
  AXTp(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("on57")
    a.d(
      t,
      {},
      {
        N: function (e) {
          let t,
            a,
            o = (0, r.c)(5),
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
              ? ((a = (0, n.jsx)("div", { className: t, children: i })), (o[2] = i), (o[3] = t), (o[4] = a))
              : (a = o[4]),
            a
          )
        },
      },
    )
  },
  dZTS(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("zd8w"),
      o = a("ZZ6D"),
      i = a("wD9O"),
      s = a("i7gm"),
      d = a("TNWb")
    function c() {
      return !1
    }
    a.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            a,
            u,
            m,
            f = (0, r.c)(10),
            { children: h } = e,
            p = (0, i.dz)(),
            g = (0, o.a)()
          if ((0, l.useSyncExternalStore)(d.tb, d.zf, c)) return null
          let v = 16 + g.right
          if (
            (f[0] !== v ? ((t = { right: v }), (f[0] = v), (f[1] = t)) : (t = f[1]),
            f[2] !== p ? ((a = { zoom: p }), (f[2] = p), (f[3] = a)) : (a = f[3]),
            f[4] !== h || f[5] !== a
              ? ((u = (0, n.jsx)("div", { className: "max-w-[70vw]", style: a, children: h })),
                (f[4] = h),
                (f[5] = a),
                (f[6] = u))
              : (u = f[6]),
            f[7] !== t || f[8] !== u)
          ) {
            let e = (0, n.jsx)("div", {
              className: "pointer-events-none fixed top-2 z-[55] flex justify-end",
              style: t,
              children: u,
            })
            ;((m = "u" < typeof document ? e : (0, n.jsx)(s.s, { container: document.body, children: e })),
              (f[7] = t),
              (f[8] = u),
              (f[9] = m))
          } else m = f[9]
          return m
        },
      },
    )
  },
  mwa5(e, t, a) {
    a.d(t, { I: () => Q })
    var n = a("ABep"),
      r = a("QosV"),
      l = a("on57"),
      o = a("zTeN"),
      i = a("zd8w"),
      s = a("TwSq"),
      d = a("TNWb"),
      c = a("Oj9r"),
      u = a("r5nL"),
      m = a("NsEU"),
      f = a("JvtY"),
      h = a("slpy"),
      p = a("GzMg"),
      g = a("IMdp"),
      v = a("SqHz"),
      b = a("Gp2Z"),
      x = a("Wf1j"),
      w = a("ygO2"),
      y = a("HOLv")
    function M(e) {
      let t,
        a,
        l,
        i,
        d,
        u,
        m,
        f,
        M,
        j,
        C,
        k,
        T,
        S = (0, r.c)(46),
        { browserController: A } = e,
        F = (0, o.gh)(c.GD),
        B = (0, x.A)(),
        _ = (0, o.Ul)(s.Jz)
      S[0] !== B
        ? ((t = B.formatMessage({
            id: "codex.threadFindBar.fileFilter",
            defaultMessage: "Search file",
            description: "Button label to search the active file preview",
          })),
          (S[0] = B),
          (S[1] = t))
        : (t = S[1])
      let E = t,
        N = (0, o.Ul)(s.l0),
        I = (0, o.Ul)(s.YP),
        D = (0, o.Ul)(s.wo),
        P = (0, o.Ul)(s.sq),
        U = "chatgpt-thread" === F.value.routeKind
      S[2] !== B || S[3] !== U
        ? ((a = U
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
          (S[2] = B),
          (S[3] = U),
          (S[4] = a))
        : (a = S[4])
      let z = a
      S[5] !== B
        ? ((l = B.formatMessage({
            id: "codex.threadFindBar.diffFilter",
            defaultMessage: "Search diffs",
            description: "Button label to scope find results to diffs",
          })),
          (S[5] = B),
          (S[6] = l))
        : (l = S[6])
      let L = l
      S[7] !== B
        ? ((i = B.formatMessage({
            id: "codex.threadFindBar.browserFilter",
            defaultMessage: "Search browser page",
            description: "Button label to scope find results to browser page",
          })),
          (S[7] = B),
          (S[8] = i))
        : (i = S[8])
      let V = i
      S[9] !== A || S[10] !== N || S[11] !== D || S[12] !== P || S[13] !== F
        ? ((d = (e) => {
            if ("browser" === D && "browser" !== e) {
              ;(null != N && A.runCommand({ ...N, command: { type: "close-find" } }),
                (0, s.kB)(F, e),
                (0, s.X0)(F, s.s_))
              return
            }
            ;((0, s.kB)(F, e),
              "browser" === e &&
                P.length > 0 &&
                null != N &&
                A.runCommand({ ...N, command: { type: "set-find-query", query: P } }))
          }),
          (S[9] = A),
          (S[10] = N),
          (S[11] = D),
          (S[12] = P),
          (S[13] = F),
          (S[14] = d))
        : (d = S[14])
      let q = d
      if ("page" === D || (null == I && null == N && null == _)) return null
      let R = "conversation" === D ? "ghostActive" : "ghost"
      S[15] !== q
        ? ((u = () => {
            q("conversation")
          }),
          (S[15] = q),
          (S[16] = u))
        : (u = S[16])
      let O = "conversation" === D
      return (
        S[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(y.I, { "aria-hidden": !1, asset: p._ })), (S[17] = m))
          : (m = S[17]),
        S[18] !== z || S[19] !== R || S[20] !== u || S[21] !== O
          ? ((f = (0, n.jsx)(w.$, {
              className: "-m-0.5 size-6",
              size: "icon",
              color: R,
              uniform: !0,
              onClick: u,
              "aria-pressed": O,
              "aria-label": z,
              children: m,
            })),
            (S[18] = z),
            (S[19] = R),
            (S[20] = u),
            (S[21] = O),
            (S[22] = f))
          : (f = S[22]),
        S[23] !== z || S[24] !== f
          ? ((M = (0, n.jsx)(h.m, { content: z, children: f })), (S[23] = z), (S[24] = f), (S[25] = M))
          : (M = S[25]),
        S[26] !== L || S[27] !== I || S[28] !== D || S[29] !== q
          ? ((j =
              null != I
                ? (0, n.jsx)(h.m, {
                    content: L,
                    children: (0, n.jsx)(w.$, {
                      className: "-m-0.5 size-6",
                      size: "icon",
                      color: "diff" === D ? "ghostActive" : "ghost",
                      uniform: !0,
                      onClick: () => {
                        q("diff")
                      },
                      "aria-pressed": "diff" === D,
                      "aria-label": L,
                      children: (0, n.jsx)(y.I, { "aria-hidden": !1, asset: b.L }),
                    }),
                  })
                : null),
            (S[26] = L),
            (S[27] = I),
            (S[28] = D),
            (S[29] = q),
            (S[30] = j))
          : (j = S[30]),
        S[31] !== D || S[32] !== E || S[33] !== _ || S[34] !== q
          ? ((C =
              null == _
                ? null
                : (0, n.jsx)(h.m, {
                    content: _.title,
                    children: (0, n.jsx)(w.$, {
                      className: "-m-0.5 size-6",
                      size: "icon",
                      color: "file" === D ? "ghostActive" : "ghost",
                      uniform: !0,
                      onClick: () => q("file"),
                      "aria-pressed": "file" === D,
                      "aria-label": E,
                      children: (0, n.jsx)(y.I, { "aria-hidden": !1, asset: g.f }),
                    }),
                  })),
            (S[31] = D),
            (S[32] = E),
            (S[33] = _),
            (S[34] = q),
            (S[35] = C))
          : (C = S[35]),
        S[36] !== V || S[37] !== N || S[38] !== D || S[39] !== q
          ? ((k =
              null == N
                ? null
                : (0, n.jsx)(h.m, {
                    content: V,
                    children: (0, n.jsx)(w.$, {
                      className: "-m-0.5 size-6",
                      size: "icon",
                      color: "browser" === D ? "ghostActive" : "ghost",
                      uniform: !0,
                      onClick: () => {
                        q("browser")
                      },
                      "aria-pressed": "browser" === D,
                      "aria-label": V,
                      children: (0, n.jsx)(y.I, { "aria-hidden": !1, asset: v.b }),
                    }),
                  })),
            (S[36] = V),
            (S[37] = N),
            (S[38] = D),
            (S[39] = q),
            (S[40] = k))
          : (k = S[40]),
        S[41] !== M || S[42] !== j || S[43] !== C || S[44] !== k
          ? ((T = (0, n.jsxs)("div", {
              className: "col-[2/3] row-[1] flex h-[44px] items-center justify-center gap-2",
              children: [M, j, C, k],
            })),
            (S[41] = M),
            (S[42] = j),
            (S[43] = C),
            (S[44] = k),
            (S[45] = T))
          : (T = S[45]),
        T
      )
    }
    function j(e) {
      let t,
        a,
        l,
        i = (0, r.c)(8),
        { children: d } = e,
        m = (0, o.gh)(c.GD)
      return (
        i[0] !== m ? ((t = () => m.get(s.l0)), (i[0] = m), (i[1] = t)) : (t = i[1]),
        i[2] !== m ? ((a = (e) => (0, s.X0)(m, e)), (i[2] = m), (i[3] = a)) : (a = i[3]),
        i[4] !== d || i[5] !== t || i[6] !== a
          ? ((l = (0, n.jsx)(u.C, { getTarget: t, runCommand: f.e, onFindStateChange: a, children: d })),
            (i[4] = d),
            (i[5] = t),
            (i[6] = a),
            (i[7] = l))
          : (l = i[7]),
        l
      )
    }
    function C(e) {
      let t,
        a,
        l,
        i,
        d,
        u,
        f = (0, r.c)(20),
        { controller: h } = e,
        p = (0, o.gh)(c.GD),
        g = (0, o.Ul)(s.l0),
        v = (0, o.Ul)(s.BU),
        b = (0, o.Ul)(s.aL),
        x = (0, o.Ul)(s.wo),
        w = (0, o.Ul)(s.eb),
        y = (0, o.Ul)(s.sq)
      return null != g && w && "browser" === x
        ? (f[0] !== y || f[1] !== b ? ((t = { ...b, query: y }), (f[0] = y), (f[1] = b), (f[2] = t)) : (t = f[2]),
          f[3] !== h ? ((a = (0, n.jsx)(M, { browserController: h })), (f[3] = h), (f[4] = a)) : (a = f[4]),
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
          f[12] !== v ||
          f[13] !== t ||
          f[14] !== a ||
          f[15] !== l ||
          f[16] !== i ||
          f[17] !== d ||
          f[18] !== g
            ? ((u = (0, n.jsx)(m.g, {
                controller: h,
                inputId: v,
                target: g,
                state: t,
                domainControl: a,
                onQueryChange: l,
                onClose: i,
                focusPage: d,
              })),
              (f[11] = h),
              (f[12] = v),
              (f[13] = t),
              (f[14] = a),
              (f[15] = l),
              (f[16] = i),
              (f[17] = d),
              (f[18] = g),
              (f[19] = u))
            : (u = f[19]),
          u)
        : null
    }
    var k = a("nMUV")
    function T() {
      let e,
        t,
        a,
        l = (0, r.c)(7),
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
          ? ((a = (0, n.jsx)(k.$1, { label: e, onClose: t })), (l[4] = e), (l[5] = t), (l[6] = a))
          : (a = l[6]),
        a
      )
    }
    var S = a("AXTp"),
      A = a("ZU27"),
      F = a("gbrq"),
      B = a("nKJ6"),
      _ = a("jDEJ"),
      E = a("TL6G"),
      N = a("XXJV")
    let I = "[data-pierre-editor-surface], [data-editor-search-surface], [data-artifact-search-surface]"
    function D(e) {
      let t,
        a,
        n,
        l,
        u,
        m,
        f,
        h,
        p,
        g = (0, r.c)(37),
        { browserController: v } = e,
        b = (0, o.gh)(c.GD),
        x = (0, o.Ul)(s.l0),
        w = (0, o.Ul)(s.YP),
        y = (0, o.Ul)(A.VZ.tabs$),
        M = (0, o.Ul)(A.VZ.activeTab$),
        j = (0, o.Ul)(A.It.tabs$),
        C = (0, o.Ul)(A.It.activeTab$),
        k = (0, o.Ul)(F.lN),
        T = (0, o.Ul)(F.SZ)
      g[0] !== M || g[1] !== C || g[2] !== y || g[3] !== k || g[4] !== T || g[5] !== j || g[6] !== b
        ? ((a = (function ({ activeTabs: e, browserConversationId: t, openPanels: a, tabs: n }) {
            if (null == t) return null
            for (let n of N.rl) {
              if (!a[n]) continue
              let r = (0, B.getThreadBrowserTabIdFromPanelTab)(e[n])
              if (null != r) return { browserTabId: r, conversationId: t }
            }
            for (let e of N.rl)
              if (a[e])
                for (let a of n[e]) {
                  let e = (0, B.getThreadBrowserTabIdFromPanelTab)(a)
                  if (null != e) return { browserTabId: e, conversationId: t }
                }
            return null
          })({
            activeTabs: { bottom: M, right: C },
            browserConversationId: (t = (0, B.getThreadBrowserConversationId)(b)),
            openPanels: { bottom: k, right: T },
            tabs: { bottom: y, right: j },
          })),
          (g[0] = M),
          (g[1] = C),
          (g[2] = y),
          (g[3] = k),
          (g[4] = T),
          (g[5] = j),
          (g[6] = b),
          (g[7] = t),
          (g[8] = a))
        : ((t = g[7]), (a = g[8]))
      let S = a
      g[9] !== S || g[10] !== b
        ? ((n = () => {
            ;(0, s.nf)(b, S)
          }),
          (g[9] = S),
          (g[10] = b),
          (g[11] = n))
        : (n = g[11])
      let _ = S?.browserTabId,
        I = S?.conversationId
      ;(g[12] !== S || g[13] !== b || g[14] !== _ || g[15] !== I
        ? ((l = [S, _, I, b]), (g[12] = S), (g[13] = b), (g[14] = _), (g[15] = I), (g[16] = l))
        : (l = g[16]),
        (0, i.useEffect)(n, l),
        g[17] !== M ||
        g[18] !== C ||
        g[19] !== v ||
        g[20] !== t ||
        g[21] !== x ||
        g[22] !== w ||
        g[23] !== k ||
        g[24] !== T ||
        g[25] !== b
          ? ((u = function (e) {
              let { selectDefaultTarget: a } = void 0 === e ? {} : e,
                n = void 0 !== a && a,
                r = (0, s._d)(b)
              if (null != r) {
                if (!b.get(s.eb)) {
                  let e = U()
                  null != e && (0, s.aM)(b, e)
                }
                ;(0, s.KE)(b, r)
                return
              }
              if (z()) return
              let l = b.get(s.BU),
                o = (function ({ activeTabs: e, browserConversationId: t, openPanels: a }) {
                  if (null == t) return null
                  let n = document.activeElement
                  if (!(n instanceof HTMLElement)) return null
                  for (let r of N.rl) {
                    if (!a[r]) continue
                    let l = (0, B.getThreadBrowserTabIdFromPanelTab)(e[r])
                    if (
                      null != l &&
                      (("webview" === n.tagName.toLowerCase() &&
                        n.getAttribute("data-browser-sidebar-conversation-id") === t &&
                        (n.getAttribute("data-browser-sidebar-browser-tab-id") ?? l) === l) ||
                        null != n.closest(`[data-app-shell-focus-area="${r}-panel"]`))
                    )
                      return { browserTabId: l, conversationId: t }
                  }
                  return null
                })({
                  activeTabs: { bottom: M, right: C },
                  browserConversationId: t,
                  openPanels: { bottom: k, right: T },
                }),
                i = !n && document.activeElement?.id === l
              if (i && "page" === b.get(s.wo)) return void window.requestAnimationFrame(() => P(l))
              let d = i || n ? void 0 : U(),
                c = b.get(s.uj)
              if (
                (i
                  ? (c = (0, s.x3)({
                      currentDomain: b.get(s.wo),
                      hasDiffSource: null != w,
                      hasBrowserTarget: null != x,
                      hasFileTarget: null != b.get(s.Jz),
                    }))
                  : null != o
                    ? (c = "browser")
                    : "file" === c && null == b.get(s.Jz)
                      ? (c = "conversation")
                      : "diff" === c && null == w && (c = "conversation"),
                null != o && (0, s.nf)(b, o),
                c !== b.get(s.wo) && (0, s.kB)(b, c),
                null != d && ("browser" === c ? (0, s.fX)(b, d) : d !== b.get(s.sq) && (0, s.aM)(b, d)),
                "browser" === c)
              ) {
                let e = d ?? b.get(s.sq),
                  t = o ?? x
                e.length > 0 && null != t && v.runCommand({ ...t, command: { type: "set-find-query", query: e } })
              }
              ;((0, s.uH)(b, { selectDefaultTarget: !i }), window.requestAnimationFrame(() => P(l)))
            }),
            (g[17] = M),
            (g[18] = C),
            (g[19] = v),
            (g[20] = t),
            (g[21] = x),
            (g[22] = w),
            (g[23] = k),
            (g[24] = T),
            (g[25] = b),
            (g[26] = u))
          : (u = g[26]))
      let D = u
      ;(g[27] !== D || g[28] !== b
        ? ((m = () => {
            ;(0, d.zf)() && ("page" === b.get(s.uj) || (b.get(s.eb) && "page" === b.get(s.wo)))
              ? window.requestAnimationFrame(() => {
                  ;(0, d.zf)() || D({ selectDefaultTarget: !0 })
                })
              : D()
          }),
          (g[27] = D),
          (g[28] = b),
          (g[29] = m))
        : (m = g[29]),
        (0, E.JX)("find-in-thread", m),
        g[30] !== v || g[31] !== b
          ? ((f = (e) => {
              if (!(null == (0, s._d)(b) && z(e)) && b.get(s.eb) && !("page" === b.get(s.wo) && (0, d.zf)())) {
                if ("browser" === b.get(s.wo)) {
                  let t = b.get(s.l0)
                  null != t && v.runCommand({ ...t, command: { type: "next" === e ? "find-next" : "find-previous" } })
                  return
                }
                "next" === e ? (0, s.Xl)(b) : (0, s.LD)(b)
              }
            }),
            (g[30] = v),
            (g[31] = b),
            (g[32] = f))
          : (f = g[32]))
      let L = f
      return (
        g[33] !== L
          ? ((h = () => {
              L("next")
            }),
            (g[33] = L),
            (g[34] = h))
          : (h = g[34]),
        (0, E.JX)("find-next-in-thread", h),
        g[35] !== L
          ? ((p = () => {
              L("previous")
            }),
            (g[35] = L),
            (g[36] = p))
          : (p = g[36]),
        (0, E.JX)("find-previous-in-thread", p),
        null
      )
    }
    function P(e) {
      if ((0, d.zf)()) return
      let t = document.getElementById(e)
      t instanceof HTMLInputElement && (t.focus(), t.select())
    }
    function U() {
      let e,
        t = document.activeElement
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
        if (null == t.selectionStart || null == t.selectionEnd) return
        e = t.value.slice(t.selectionStart, t.selectionEnd)
      } else e = window.getSelection?.()?.toString()
      let a = e?.trim()
      if (a) return /[\r\n]/.test(a) ? "" : a
    }
    function z(e) {
      let t = document.activeElement,
        a = t?.closest(I) ?? t?.closest("[data-app-shell-tab-panel-controller]")?.querySelector(I)
      if (null == a || null != a.closest("[inert]")) return !1
      let n = a.closest("[data-app-shell-tab-panel-controller]")?.querySelector("[data-pierre-find-input-id]")
          ?.dataset.pierreFindInputId,
        r = a.querySelector("[data-codex-find-input]") ?? (null == n ? null : document.getElementById(n)),
        l = a.matches("[data-artifact-search-surface]")
          ? a
          : (r ??
            a.querySelector("diffs-container")?.shadowRoot?.querySelector("[data-content]") ??
            a.querySelector(".cm-content"))
      if (null == l) return !1
      let o = (0, _.Z)()
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
    function L() {
      let e,
        t,
        a,
        l,
        i,
        d,
        u = (0, r.c)(30),
        m = (0, o.gh)(c.GD),
        f = (0, o.Ul)(s.BU),
        h = (0, x.A)(),
        p = (0, o.Ul)(s.hj),
        g = (0, o.Ul)(s.wo),
        v = (0, o.Ul)(s.Sp),
        b = (0, o.Ul)(s.sq),
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
      let M = t
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
          (M = e))
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
          (M = t))
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
          (M = t))
      }
      let j = "file" === g ? p.pending : v
      return (
        u[17] !== m
          ? ((a = (e) => {
              ;(0, s.aM)(m, e)
            }),
            (l = (e) => {
              ;(0, s.iz)(m, { shift: e })
            }),
            (i = () => {
              ;(0, s.SY)(m)
            }),
            (u[17] = m),
            (u[18] = a),
            (u[19] = l),
            (u[20] = i))
          : ((a = u[18]), (l = u[19]), (i = u[20])),
        u[21] !== f ||
        u[22] !== M ||
        u[23] !== y ||
        u[24] !== b ||
        u[25] !== j ||
        u[26] !== a ||
        u[27] !== l ||
        u[28] !== i
          ? ((d = (0, n.jsx)(k.rV, {
              id: f,
              isLoading: j,
              label: M,
              placeholder: y,
              value: b,
              onChange: a,
              onEnter: l,
              onEscape: i,
            })),
            (u[21] = f),
            (u[22] = M),
            (u[23] = y),
            (u[24] = b),
            (u[25] = j),
            (u[26] = a),
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
        a,
        l,
        i,
        d = (0, r.c)(14),
        u = (0, o.gh)(c.GD),
        m = (0, x.A)(),
        f = (0, o.Ul)(s.hj),
        h = (0, o.Ul)(s.wo),
        p = (0, o.Ul)(s.JA),
        g = "file" === h ? f.total : (p?.totalMatches ?? 0),
        v = (0, o.Ul)(s.m9)
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
          ? ((a = () => {
              ;(0, s.Xl)(u)
            }),
            (l = () => {
              ;(0, s.LD)(u)
            }),
            (d[4] = u),
            (d[5] = a),
            (d[6] = l))
          : ((a = d[5]), (l = d[6])),
        d[7] !== v || d[8] !== g || d[9] !== e || d[10] !== t || d[11] !== a || d[12] !== l
          ? ((i = (0, n.jsx)(k.rr, {
              isVisible: v,
              matches: g,
              nextLabel: e,
              previousLabel: t,
              onNext: a,
              onPrevious: l,
            })),
            (d[7] = v),
            (d[8] = g),
            (d[9] = e),
            (d[10] = t),
            (d[11] = a),
            (d[12] = l),
            (d[13] = i))
          : (i = d[13]),
        i
      )
    }
    var q = a("dZTS"),
      R = a("yGns")
    function O() {
      let e,
        t = (0, r.c)(7),
        a = (0, o.Ul)(s.hj),
        l = (0, o.Ul)(s.wo),
        i = (0, o.Ul)(s.m9),
        d = (0, o.Ul)(s.Sp),
        c = (0, o.Ul)(s.JA),
        u = (0, o.Ul)(s.e8),
        m = "file" === l ? a.total : c?.totalMatches,
        f = "file" === l ? a.pending : d,
        h = "file" === l ? a.current : (u ?? 0) + 1,
        p = c?.error,
        g = "file" === l ? a.isCapped : c?.isCapped
      return (
        t[0] !== i || t[1] !== f || t[2] !== h || t[3] !== p || t[4] !== g || t[5] !== m
          ? ((e = (0, n.jsx)(R.k, { active: h, error: p, hasQuery: i, isCapped: g, isPending: f, totalMatches: m })),
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
    function G(e) {
      let t,
        a = (0, r.c)(3),
        { children: l, className: c } = e,
        u = (0, o.Ul)(s.eb),
        m = (0, i.useSyncExternalStore)(d.tb, d.zf, K)
      return !u || m
        ? null
        : (a[0] !== l || a[1] !== c
            ? ((t = (0, n.jsx)("div", {
                className: "contents",
                "data-content-search-bar": "true",
                children: (0, n.jsx)(S.N, { className: c, children: l }),
              })),
              (a[0] = l),
              (a[1] = c),
              (a[2] = t))
            : (t = a[2]),
          t)
    }
    function K() {
      return !1
    }
    function H(e) {
      let t,
        a,
        l,
        c,
        u,
        m,
        f = (0, r.c)(10),
        { browserController: h } = e,
        p = (0, o.Ul)(s.wo)
      if ((0, i.useSyncExternalStore)(d.tb, d.zf, J)) return null
      if ("browser" === p) {
        let e
        return (f[0] !== h ? ((e = (0, n.jsx)(C, { controller: h })), (f[0] = h), (f[1] = e)) : (e = f[1]), e)
      }
      return (
        f[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, n.jsx)(L, {})), (f[2] = t)) : (t = f[2]),
        f[3] !== h ? ((a = (0, n.jsx)(M, { browserController: h })), (f[3] = h), (f[4] = a)) : (a = f[4]),
        f[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(V, {})),
            (c = (0, n.jsx)(O, {})),
            (u = (0, n.jsx)(T, {})),
            (f[5] = l),
            (f[6] = c),
            (f[7] = u))
          : ((l = f[5]), (c = f[6]), (u = f[7])),
        f[8] !== a ? ((m = (0, n.jsxs)(G, { children: [t, a, l, c, u] })), (f[8] = a), (f[9] = m)) : (m = f[9]),
        m
      )
    }
    function J() {
      return !1
    }
    let Q = Object.assign(
      function (e) {
        let t,
          a = (0, r.c)(2),
          { children: l } = e
        return (a[0] !== l ? ((t = (0, n.jsx)(n.Fragment, { children: l })), (a[0] = l), (a[1] = t)) : (t = a[1]), t)
      },
      {
        Frame: G,
        PaneOverlay: function (e) {
          let t,
            a,
            i,
            d = (0, r.c)(8),
            { children: u, className: m } = e,
            f = void 0 === m ? "top-0" : m,
            h = (0, o.gh)(c.GD)
          return (
            d[0] !== f
              ? ((t = (0, l.A)("absolute inset-x-0 flex justify-end px-4 py-2", f)), (d[0] = f), (d[1] = t))
              : (t = d[1]),
            d[2] !== h
              ? ((a = (e) => {
                  "Escape" !== e.key ||
                    e.nativeEvent.isComposing ||
                    (e.preventDefault(), e.stopPropagation(), (0, s.SY)(h))
                }),
                (d[2] = h),
                (d[3] = a))
              : (a = d[3]),
            d[4] !== u || d[5] !== t || d[6] !== a
              ? ((i = (0, n.jsx)("div", {
                  className: "pointer-events-none relative z-50 h-0 shrink-0",
                  children: (0, n.jsx)("div", {
                    className: t,
                    "data-content-search-overlay": !0,
                    role: "search",
                    onKeyDown: a,
                    children: u,
                  }),
                })),
                (d[4] = u),
                (d[5] = t),
                (d[6] = a),
                (d[7] = i))
              : (i = d[7]),
            i
          )
        },
        Surface: function () {
          let e,
            t = (0, r.c)(3),
            a = (0, o.Ul)(s.wo),
            l = (0, o.Ul)(s.eb)
          return (
            t[0] !== a || t[1] !== l
              ? ((e = (0, n.jsx)(j, {
                  children: (e) =>
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(D, { browserController: e }),
                        l && "page" !== a
                          ? (0, n.jsx)(q.Q, { children: (0, n.jsx)(H, { browserController: e }) })
                          : null,
                      ],
                    }),
                })),
                (t[0] = a),
                (t[1] = l),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        },
        Controls: H,
        Controller: j,
        Input: L,
        DomainToggle: M,
        Navigation: V,
        ResultLabel: O,
        Close: T,
      },
    )
  },
  yGns(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("Wf1j"),
      o = a("nMUV")
    a.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            a,
            i = (0, r.c)(17),
            { active: s, error: d, hasQuery: c, isCapped: u, isPending: m, totalMatches: f } = e,
            h = (0, l.A)()
          if (!c || m || null == f) {
            let e
            return (
              i[0] !== c ? ((e = (0, n.jsx)(o.Af, { isVisible: c, label: null })), (i[0] = c), (i[1] = e)) : (e = i[1]),
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
            i[15] !== t ? ((a = (0, n.jsx)(o.Af, { isVisible: !0, label: t })), (i[15] = t), (i[16] = a)) : (a = i[16]),
            a
          )
        },
      },
    )
  },
  zjpG(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("on57"),
      o = a("oyxz")
    a.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            a,
            i,
            s = (0, r.c)(5),
            { className: d } = e
          return (
            s[0] !== d ? ((t = (0, l.A)("last:hidden", d)), (s[0] = d), (s[1] = t)) : (t = s[1]),
            s[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(o.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                })),
                (s[2] = a))
              : (a = s[2]),
            s[3] !== t
              ? ((i = (0, n.jsx)("span", { "aria-hidden": !0, className: t, children: a })), (s[3] = t), (s[4] = i))
              : (i = s[4]),
            i
          )
        },
      },
    )
  },
  tWaO(e, t, a) {
    a.d(
      t,
      {},
      {
        w: function (e, t, a = "calendar") {
          let n = new Date(e),
            r = Math.max(1, Math.floor((t.getTime() - n.getTime()) / 6e4))
          if (r < 60) return { unit: "minute", value: r }
          let l = Math.floor(r / 60)
          if (l < 24) return { unit: "hour", value: l }
          let o = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
            i = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
            s = "elapsed" === a ? Math.floor(l / 24) : Math.max(1, Math.round((o.getTime() - i.getTime()) / 864e5))
          return s < 7
            ? { unit: "day", value: s }
            : s < 30
              ? { unit: "week", value: Math.floor(s / 7) }
              : s < 365
                ? { unit: "month", value: Math.floor(s / 30) }
                : { unit: "year", value: Math.floor(s / 365) }
        },
      },
    )
  },
  xs0e(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("Wf1j"),
      o = a("oyxz"),
      i = a("tWaO"),
      s = a("KIKs")
    function d(e) {
      let t,
        a = (0, r.c)(5),
        { dateString: n, now: o, dayBasis: s } = e,
        d = (0, l.A)()
      if (a[0] !== n || a[1] !== s || a[2] !== d || a[3] !== o) {
        t = Symbol.for("react.early_return_sentinel")
        e: {
          let { unit: e, value: a } = (0, i.w)(n, o, s)
          switch (e) {
            case "minute":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactMinutesAgo",
                  defaultMessage: "{value}m",
                  description: "Compact minutes-ago format",
                },
                { value: a },
              )
              break e
            case "hour":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactHoursAgo",
                  defaultMessage: "{value}h",
                  description: "Compact hours-ago format",
                },
                { value: a },
              )
              break e
            case "day":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactDaysAgo",
                  defaultMessage: "{value}d",
                  description: "Compact days-ago format",
                },
                { value: a },
              )
              break e
            case "week":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactWeeksAgo",
                  defaultMessage: "{value}w",
                  description: "Compact weeks-ago format",
                },
                { value: a },
              )
              break e
            case "month":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactMonthsAgo",
                  defaultMessage: "{value}mo",
                  description: "Compact months-ago format",
                },
                { value: a },
              )
              break e
            case "year":
              t = d.formatMessage(
                {
                  id: "wham.formattedRelativeDateTime.compactYearsAgo",
                  defaultMessage: "{value}y",
                  description: "Compact years-ago format",
                },
                { value: a },
              )
              break e
          }
        }
        ;((a[0] = n), (a[1] = s), (a[2] = d), (a[3] = o), (a[4] = t))
      } else t = a[4]
      if (t !== Symbol.for("react.early_return_sentinel")) return t
    }
    function c(e) {
      let t,
        a,
        n = (0, r.c)(17),
        { dateString: o, now: i } = e,
        s = (0, l.A)()
      if (n[0] !== o || n[1] !== i) {
        let e = new Date(o)
        ;((t = Math.floor((i.getTime() - e.getTime()) / 6e4)), (n[0] = o), (n[1] = i), (n[2] = t))
      } else t = n[2]
      let d = -t
      if (d <= 0) {
        let e
        return (
          n[3] !== s
            ? ((e = s.formatRelativeTime(0, "second", { numeric: "auto" })), (n[3] = s), (n[4] = e))
            : (e = n[4]),
          e
        )
      }
      if (d < 60) {
        let e
        return (
          n[5] !== s || n[6] !== d
            ? ((e = s.formatRelativeTime(d, "minute", { numeric: "always" })), (n[5] = s), (n[6] = d), (n[7] = e))
            : (e = n[7]),
          e
        )
      }
      let c = Math.ceil(d / 60)
      if (c < 24) {
        let e
        return (
          n[8] !== s || n[9] !== c
            ? ((e = s.formatRelativeTime(c, "hour", { numeric: "always" })), (n[8] = s), (n[9] = c), (n[10] = e))
            : (e = n[10]),
          e
        )
      }
      let u = Math.ceil(c / 24)
      if (u < 7) {
        let e
        return (
          n[11] !== s || n[12] !== u
            ? ((e = s.formatRelativeTime(u, "day", { numeric: "always" })), (n[11] = s), (n[12] = u), (n[13] = e))
            : (e = n[13]),
          e
        )
      }
      return (
        n[14] !== s || n[15] !== u
          ? ((a = s.formatRelativeTime(Math.ceil(u / 7), "week", { numeric: "always" })),
            (n[14] = s),
            (n[15] = u),
            (n[16] = a))
          : (a = n[16]),
        a
      )
    }
    a.d(
      t,
      {},
      {
        A: function (e) {
          let t,
            a = (0, r.c)(10),
            { dateString: c, format: u, dayBasis: m } = e,
            f = void 0 === m ? "calendar" : m,
            h = (0, l.A)(),
            p = (0, s.wv)()
          if (p.getTime() - new Date(c).getTime() < 6e4) {
            let e
            return (
              a[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(o.A, {
                    id: "wham.formattedRelativeDateTime.justNow",
                    defaultMessage: "just now",
                    description: "Relative timestamp for an event that happened less than a minute ago",
                  })),
                  (a[0] = e))
                : (e = a[0]),
              e
            )
          }
          if ("relative" === (void 0 === u ? "compact" : u)) {
            let e
            if (a[1] !== c || a[2] !== f || a[3] !== h || a[4] !== p) {
              let { unit: t, value: n } = (0, i.w)(c, p, f)
              ;((e = h.formatRelativeTime(-n, t, { numeric: "always", style: "narrow" })),
                (a[1] = c),
                (a[2] = f),
                (a[3] = h),
                (a[4] = p),
                (a[5] = e))
            } else e = a[5]
            return e
          }
          return (
            a[6] !== c || a[7] !== f || a[8] !== p
              ? ((t = (0, n.jsx)(d, { dateString: c, now: p, dayBasis: f })),
                (a[6] = c),
                (a[7] = f),
                (a[8] = p),
                (a[9] = t))
              : (t = a[9]),
            t
          )
        },
        SA: function (e) {
          let t,
            a = (0, r.c)(3),
            { dateString: l } = e,
            o = (0, s.wv)()
          return (
            a[0] !== l || a[1] !== o
              ? ((t = (0, n.jsx)(c, { dateString: l, now: o })), (a[0] = l), (a[1] = o), (a[2] = t))
              : (t = a[2]),
            t
          )
        },
      },
    )
  },
  hEYZ(e, t, a) {
    var n = a("zTeN"),
      r = a("OWtl")
    let l = null,
      o = 0,
      i = new Set(),
      s = (0, n.SZ)(r.u, c, ({ set: e }) => (e(c()), d(() => e(c()))))
    function d(e) {
      return (
        i.add(e),
        () => {
          i.delete(e)
        }
      )
    }
    function c() {
      return o > 0
    }
    function u() {
      for (let e of i) e()
    }
    a.d(
      t,
      {},
      {
        Xf: function (e) {
          l?.(e)
        },
        Yv: c,
        o2: s,
        ou: function (e) {
          return (
            (l = e),
            () => {
              l === e && (l = null)
            }
          )
        },
        vb: d,
        yw: function (e) {
          if (!(e instanceof HTMLElement)) return !0
          let t = e.closest("[contenteditable]")
          return (
            !e.isContentEditable &&
            (null == t || "false" === t.getAttribute("contenteditable")) &&
            null ==
              e.closest(
                'input, textarea, select, [role="slider"], [role="spinbutton"], [role="combobox"], [role="listbox"], [role="grid"], [role="tree"], [role="tablist"], [role="menu"]',
              )
          )
        },
        zq: function () {
          let e = !0
          return (
            (o += 1),
            u(),
            () => {
              e && ((e = !1), (o = Math.max(0, o - 1)), u())
            }
          )
        },
      },
    )
  },
  rHMG(e, t, a) {
    a.d(t, { MarkdownVideoPlayer: () => M })
    var n = a("ABep"),
      r = a("QosV")
    let l = (0, a("nkTT").a)({
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
    var o = a("fK6E"),
      i = a("nhm6"),
      s = a("YAOF"),
      d = a("on57"),
      c = a("zd8w"),
      u = a("Wf1j"),
      m = a("oyxz"),
      f = a("ygO2"),
      h = a("bqtn"),
      p = a("HOLv"),
      g = a("GO7r"),
      v = a("nzx4"),
      b = a("CqQF"),
      x = a("aepO"),
      w = a("S7UD"),
      y = a("HgLj")
    function M(e) {
      let t,
        a,
        s,
        f,
        b,
        M,
        S,
        A,
        F,
        B,
        _,
        E,
        N,
        I,
        D,
        P,
        U,
        z,
        L,
        V,
        q,
        R,
        O,
        G,
        K,
        H,
        J,
        Q,
        $,
        X,
        Y,
        Z,
        W,
        ee,
        et,
        ea,
        en,
        er,
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
        ev,
        eb,
        ex,
        ew,
        ey,
        eM,
        ej,
        eC,
        ek,
        eT,
        eS,
        eA,
        eF,
        eB,
        e_,
        eE,
        eN,
        eI,
        eD,
        eP,
        eU,
        ez,
        eL,
        eV,
        eq,
        eR,
        eO = (0, r.c)(221),
        {
          ref: eG,
          allowWide: eK,
          allowFullscreen: eH,
          className: eJ,
          durationHint: eQ,
          height: e$,
          label: eX,
          onDurationChange: eY,
          onError: eZ,
          onExpand: eW,
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
          sourceUrl: ta,
          title: tn,
          transparentBackground: tr,
          videoStyle: tl,
          width: to,
        } = e,
        ti = void 0 === eH || eH,
        ts = void 0 === eQ ? 0 : eQ,
        td = void 0 === e6 ? "below" : e6,
        tc = void 0 === e7 ? "metadata" : e7,
        tu = void 0 !== tr && tr,
        tm = (0, u.A)(),
        tf = (0, c.useRef)(null),
        th = (0, c.useRef)(null),
        [tp, tg] = (0, c.useState)(null),
        [tv, tb] = (0, c.useState)(!1),
        [tx, tw] = (0, c.useState)(0),
        [ty, tM] = (0, c.useState)(0),
        [tj, tC] = (0, c.useState)(!1),
        [tk, tT] = (0, c.useState)(1),
        [tS, tA] = (0, c.useState)(!1),
        [tF, tB] = (0, c.useState)(1),
        [t_, tE] = (0, c.useState)(!1),
        [tN, tI] = (0, c.useState)(!1),
        [tD, tP] = (0, c.useState)(!1),
        [tU, tz] = (0, c.useState)(!1),
        tL = (0, w.ax)(tt) ? tt : void 0,
        tV = (0, c.useEffectEvent)(eZ)
      ;(eO[0] !== tL || eO[1] !== tV
        ? ((t = () => {
            let e = tf.current
            if (null != e && null != tL) return (0, w.Kr)(e, tL, () => tV(e))
          }),
          (eO[0] = tL),
          (eO[1] = tV),
          (eO[2] = t))
        : (t = eO[2]),
        eO[3] !== tL ? ((a = [tL]), (eO[3] = tL), (eO[4] = a)) : (a = eO[4]),
        (0, c.useEffect)(t, a),
        eO[5] !== tp
          ? ((s = () => {
              if (null == tp) return
              let e = tp.ownerDocument,
                t = () => {
                  ;(tb(e.fullscreenElement === tp), e.fullscreenElement === tp && tf.current?.focus())
                }
              return (e.addEventListener("fullscreenchange", t), () => e.removeEventListener("fullscreenchange", t))
            }),
            (f = [tp]),
            (eO[5] = tp),
            (eO[6] = s),
            (eO[7] = f))
          : ((s = eO[6]), (f = eO[7])),
        (0, c.useEffect)(s, f),
        eO[8] !== tU || eO[9] !== tj || eO[10] !== tp || eO[11] !== td
          ? ((b = () => {
              if (null == tp || "overlay" !== td || !tj || tU) return
              let e = window.setTimeout(() => tP(!0), 2500),
                t = () => {
                  ;(tP(!1), window.clearTimeout(e), (e = window.setTimeout(() => tP(!0), 2500)))
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
            (M = [tp, td, tj, tU]),
            (eO[8] = tU),
            (eO[9] = tj),
            (eO[10] = tp),
            (eO[11] = td),
            (eO[12] = b),
            (eO[13] = M))
          : ((b = eO[12]), (M = eO[13])),
        (0, c.useEffect)(b, M),
        eO[14] !== ts ? ((S = Number.isFinite(ts) ? Math.max(0, ts) : 0), (eO[14] = ts), (eO[15] = S)) : (S = eO[15]))
      let tq = S
      eO[16] !== tx || eO[17] !== tq || eO[18] !== ty || eO[19] !== tm
        ? ((A = tm.formatMessage(
            {
              id: "markdown.video.progress",
              defaultMessage: "{currentTime} / {duration}",
              description: "Current playback time and total video duration",
            },
            { currentTime: T(tx), duration: T(ty || tq) },
          )),
          (eO[16] = tx),
          (eO[17] = tq),
          (eO[18] = ty),
          (eO[19] = tm),
          (eO[20] = A))
        : (A = eO[20])
      let tR = A
      eO[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = () => {
            let e = tf.current
            null != e && (tE(!1), e.paused ? e.play().catch(() => tE(!0)) : e.pause())
          }),
          (eO[21] = F))
        : (F = eO[21])
      let tO = F
      eO[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = (e) => {
            let t = th.current
            if (null == t || t.pointerId !== e.pointerId) return
            th.current = null
            let a = tf.current
            t.wasPlaying && null != a && (tE(!1), a.play().catch(() => tE(!0)))
          }),
          (eO[22] = B))
        : (B = eO[22])
      let tG = B
      eO[23] !== eW || eO[24] !== tp
        ? ((_ = () => {
            null != eW && null != tf.current
              ? eW(tf.current)
              : null == tp ||
                (tE(!1),
                (tp.ownerDocument.fullscreenElement === tp
                  ? tp.ownerDocument.exitFullscreen()
                  : tp.requestFullscreen()
                ).catch(() => tE(!0)))
          }),
          (eO[23] = eW),
          (eO[24] = tp),
          (eO[25] = _))
        : (_ = eO[25])
      let tK = _
      eO[26] !== tm || eO[27] !== tj
        ? ((E = tj
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
          (eO[26] = tm),
          (eO[27] = tj),
          (eO[28] = E))
        : (E = eO[28])
      let tH = E
      eO[29] !== tm || eO[30] !== tv
        ? ((N = tv
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
          (eO[29] = tm),
          (eO[30] = tv),
          (eO[31] = N))
        : (N = eO[31])
      let tJ = N,
        tQ = "overlay" === td && "overlay-k_Dc2T",
        t$ = "overlay" === td ? "relative aspect-video rounded-md" : "bg-surface",
        tX = "overlay" === td && !tu && "bg-media-background",
        tY = "container" === te ? "size-full" : "my-3 w-fit rounded-md shadow-md",
        tZ =
          "content" === te &&
          (eK
            ? "max-h-[var(--markdown-wide-block-max-height)] max-w-full"
            : "max-h-[min(48vh,32rem)] max-w-[min(100%,44rem)]")
      eO[32] !== eJ || eO[33] !== tQ || eO[34] !== t$ || eO[35] !== tX || eO[36] !== tY || eO[37] !== tZ
        ? ((I = (0, d.A)("player-W1zENa", tQ, "flex min-h-0 min-w-0 flex-col overflow-hidden", t$, tX, tY, tZ, eJ)),
          (eO[32] = eJ),
          (eO[33] = tQ),
          (eO[34] = t$),
          (eO[35] = tX),
          (eO[36] = tY),
          (eO[37] = tZ),
          (eO[38] = I))
        : (I = eO[38])
      let tW = "overlay" !== td || tu ? void 0 : "dark",
        t1 = e9 || void 0,
        t0 = (tj && tD && !tU && !t_) || void 0
      ;(eO[39] !== tU || eO[40] !== tK
        ? ((D = (e) => {
            "Escape" !== e.key ||
              tU ||
              e.currentTarget.ownerDocument.fullscreenElement !== e.currentTarget ||
              (e.preventDefault(), e.stopPropagation(), tK())
          }),
          (eO[39] = tU),
          (eO[40] = tK),
          (eO[41] = D))
        : (D = eO[41]),
        eO[42] !== eG
          ? ((P = (0, y.P)((e) => {
              if (((tf.current = e), null != e)) {
                let t = e.duration
                tM(Number.isFinite(t) && t > 0 ? t : 0)
              }
            }, eG)),
            (eO[42] = eG),
            (eO[43] = P))
          : (P = eO[43]))
      let t2 = null == tL ? tt : void 0,
        t3 = "overlay" === td
      ;(eO[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = (e) => {
            ;(" " === e.key || "Enter" === e.key) && (e.preventDefault(), e.repeat || tO())
          }),
          (eO[44] = U))
        : (U = eO[44]),
        eO[45] !== eY
          ? ((z = (e) => {
              let t = e.currentTarget.duration
              ;(tM(Number.isFinite(t) && t > 0 ? t : 0), eY?.(e.currentTarget))
            }),
            (eO[45] = eY),
            (eO[46] = z))
          : (z = eO[46]),
        eO[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (e) => {
              tw(e.currentTarget.currentTime)
            }),
            (V = () => {
              ;(tP(!1), tC(!0), tE(!1))
            }),
            (eO[47] = L),
            (eO[48] = V))
          : ((L = eO[47]), (V = eO[48])),
        eO[49] !== e2 ? ((q = (e) => e2?.(e.currentTarget)), (eO[49] = e2), (eO[50] = q)) : (q = eO[50]),
        eO[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = () => tC(!1)),
            (O = () => tC(!1)),
            (G = (e) => {
              ;(tT(e.currentTarget.volume), tA(e.currentTarget.muted))
            }),
            (K = (e) => tB(e.currentTarget.playbackRate)),
            (eO[51] = R),
            (eO[52] = O),
            (eO[53] = G),
            (eO[54] = K))
          : ((R = eO[51]), (O = eO[52]), (G = eO[53]), (K = eO[54])),
        eO[55] !== eZ ? ((H = (e) => eZ(e.currentTarget)), (eO[55] = eZ), (eO[56] = H)) : (H = eO[56]),
        eO[57] !== e3 ? ((J = (e) => e3?.(e.currentTarget)), (eO[57] = e3), (eO[58] = J)) : (J = eO[58]),
        eO[59] !== e1 ? ((Q = (e) => e1?.(e.currentTarget)), (eO[59] = e1), (eO[60] = Q)) : (Q = eO[60]),
        eO[61] !== e0 ? (($ = (e) => e0?.(e.currentTarget)), (eO[61] = e0), (eO[62] = $)) : ($ = eO[62]),
        eO[63] !== e$ ||
        eO[64] !== eX ||
        eO[65] !== e5 ||
        eO[66] !== tc ||
        eO[67] !== P ||
        eO[68] !== t2 ||
        eO[69] !== t3 ||
        eO[70] !== z ||
        eO[71] !== q ||
        eO[72] !== H ||
        eO[73] !== J ||
        eO[74] !== Q ||
        eO[75] !== $ ||
        eO[76] !== tn ||
        eO[77] !== tl ||
        eO[78] !== to
          ? ((X = (0, n.jsx)("video", {
              ref: P,
              className:
                "block min-h-0 w-full flex-1 cursor-interaction object-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
              src: t2,
              title: tn,
              style: tl,
              width: to,
              height: e$,
              "aria-label": eX,
              tabIndex: 0,
              disablePictureInPicture: t3,
              playsInline: !0,
              poster: e5,
              preload: tc,
              onClick: tO,
              onKeyDown: U,
              onDurationChange: z,
              onTimeUpdate: L,
              onPlay: V,
              onPlaying: q,
              onPause: R,
              onEnded: O,
              onVolumeChange: G,
              onRateChange: K,
              onError: H,
              onResize: J,
              onLoadedMetadata: Q,
              onLoadedData: $,
            })),
            (eO[63] = e$),
            (eO[64] = eX),
            (eO[65] = e5),
            (eO[66] = tc),
            (eO[67] = P),
            (eO[68] = t2),
            (eO[69] = t3),
            (eO[70] = z),
            (eO[71] = q),
            (eO[72] = H),
            (eO[73] = J),
            (eO[74] = Q),
            (eO[75] = $),
            (eO[76] = tn),
            (eO[77] = tl),
            (eO[78] = to),
            (eO[79] = X))
          : (X = eO[79]),
        eO[80] !== tv || eO[81] !== tj || eO[82] !== tH || eO[83] !== tp || eO[84] !== td
          ? ((Y =
              "overlay" !== td || tj
                ? null
                : (0, n.jsx)(C, {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    color: "mediaOverlay",
                    portalContainer: tv ? tp : void 0,
                    label: tH,
                    onClick: tO,
                    children: (0, n.jsx)(p.I, { asset: i.k }),
                  })),
            (eO[80] = tv),
            (eO[81] = tj),
            (eO[82] = tH),
            (eO[83] = tp),
            (eO[84] = td),
            (eO[85] = Y))
          : (Y = eO[85]))
      let t4 = "overlay" === td && tu ? "dark" : void 0,
        t6 =
          "overlay" === td
            ? "absolute inset-x-0 bottom-0 bg-media-background/80 text-media-foreground"
            : "border-t border-subtle"
      eO[86] !== t6
        ? ((Z = (0, d.A)("controls-aun7ma", "@container/video-controls shrink-0 select-none", t6)),
          (eO[86] = t6),
          (eO[87] = Z))
        : (Z = eO[87])
      let t5 = tv ? tp : void 0,
        t7 = tj ? o.F : i.k
      ;(eO[88] !== t7 ? ((W = (0, n.jsx)(p.I, { asset: t7 })), (eO[88] = t7), (eO[89] = W)) : (W = eO[89]),
        eO[90] !== tH || eO[91] !== t5 || eO[92] !== W
          ? ((ee = (0, n.jsx)(C, { portalContainer: t5, label: tH, onClick: tO, children: W })),
            (eO[90] = tH),
            (eO[91] = t5),
            (eO[92] = W),
            (eO[93] = ee))
          : (ee = eO[93]),
        eO[94] !== tm
          ? ((et = tm.formatMessage({
              id: "markdown.video.seek",
              defaultMessage: "Seek in video",
              description: "Accessible label for the video playback timeline",
            })),
            (eO[94] = tm),
            (eO[95] = et))
          : (et = eO[95]))
      let t8 = ty <= 0,
        t9 = ty || 1,
        ae = Math.min(tx, ty)
      ;(eO[96] !== ae ? ((ea = [ae]), (eO[96] = ae), (eO[97] = ea)) : (ea = eO[97]),
        eO[98] !== ty || eO[99] !== td
          ? ((en = (e) => {
              let t = tf.current
              "overlay" === td &&
                ty > 0 &&
                null != t &&
                ("ArrowRight" === e.key || "ArrowLeft" === e.key) &&
                (e.preventDefault(),
                (t.currentTime = Math.max(0, Math.min(ty, t.currentTime + ("ArrowRight" === e.key ? 5 : -5)))),
                tw(t.currentTime))
            }),
            (eO[98] = ty),
            (eO[99] = td),
            (eO[100] = en))
          : (en = eO[100]),
        eO[101] !== ty
          ? ((er = (e) => {
              let t = tf.current
              null == t ||
                ty <= 0 ||
                0 !== e.button ||
                null != th.current ||
                ((th.current = { pointerId: e.pointerId, wasPlaying: !t.paused }), t.pause())
            }),
            (eO[101] = ty),
            (eO[102] = er))
          : (er = eO[102]),
        eO[103] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (e) => {
              let [t] = e,
                a = tf.current
              null != a && null != t && ((a.currentTime = t), tw(a.currentTime))
            }),
            (eO[103] = el))
          : (el = eO[103]),
        eO[104] !== tR ||
        eO[105] !== et ||
        eO[106] !== t8 ||
        eO[107] !== t9 ||
        eO[108] !== ea ||
        eO[109] !== en ||
        eO[110] !== er
          ? ((eo = (0, n.jsx)("span", {
              className: "flex min-w-0 flex-1 @max-xs/video-controls:order-first @max-xs/video-controls:basis-full",
              children: (0, n.jsx)(k, {
                label: et,
                valueText: tR,
                disabled: t8,
                min: 0,
                max: t9,
                step: 0.1,
                value: ea,
                onKeyDown: en,
                onPointerDownCapture: er,
                onPointerUp: tG,
                onPointerCancel: tG,
                onLostPointerCapture: tG,
                onValueChange: el,
              }),
            })),
            (eO[104] = tR),
            (eO[105] = et),
            (eO[106] = t8),
            (eO[107] = t9),
            (eO[108] = ea),
            (eO[109] = en),
            (eO[110] = er),
            (eO[111] = eo))
          : (eo = eO[111]),
        eO[112] !== tR
          ? ((ei = (0, n.jsx)("span", {
              className: "shrink-0 text-xs whitespace-nowrap text-secondary tabular-nums",
              children: tR,
            })),
            (eO[112] = tR),
            (eO[113] = ei))
          : (ei = eO[113]),
        eO[114] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (e) => {
              ;(tP(!1), tz(e))
            }),
            (eO[114] = es))
          : (es = eO[114]))
      let at = tv ? tp : void 0
      ;(eO[115] !== tm
        ? ((ed = tm.formatMessage({
            id: "markdown.video.volume",
            defaultMessage: "Video volume",
            description: "Accessible label for the video volume controls",
          })),
          (eO[115] = tm),
          (eO[116] = ed))
        : (ed = eO[116]),
        eO[117] !== tS || eO[118] !== tk
          ? ((ec = tS || 0 === tk ? (0, n.jsx)(g.sbY, {}) : (0, n.jsx)(g.BOJ, {})),
            (eO[117] = tS),
            (eO[118] = tk),
            (eO[119] = ec))
          : (ec = eO[119]),
        eO[120] !== at || eO[121] !== ed || eO[122] !== ec
          ? ((eu = (0, n.jsx)(v.Wv, {
              asChild: !0,
              children: (0, n.jsx)(C, { portalContainer: at, label: ed, children: ec }),
            })),
            (eO[120] = at),
            (eO[121] = ed),
            (eO[122] = ec),
            (eO[123] = eu))
          : (eu = eO[123]))
      let aa = tv ? tp : void 0
      eO[124] !== tm
        ? ((em = tm.formatMessage({
            id: "markdown.video.volume",
            defaultMessage: "Video volume",
            description: "Accessible label for the video volume controls",
          })),
          (eO[124] = tm),
          (eO[125] = em))
        : (em = eO[125])
      let an = tv ? tp : void 0
      ;(eO[126] !== tm
        ? ((ef = tm.formatMessage({
            id: "markdown.video.mute",
            defaultMessage: "Mute video",
            description: "Accessible label for the video mute toggle",
          })),
          (eO[126] = tm),
          (eO[127] = ef))
        : (ef = eO[127]),
        eO[128] === Symbol.for("react.memo_cache_sentinel")
          ? ((eh = () => {
              let e = tf.current
              null != e && (e.muted = !e.muted)
            }),
            (eO[128] = eh))
          : (eh = eO[128]),
        eO[129] !== tS || eO[130] !== tk
          ? ((ep = tS || 0 === tk ? (0, n.jsx)(g.sbY, {}) : (0, n.jsx)(g.BOJ, {})),
            (eO[129] = tS),
            (eO[130] = tk),
            (eO[131] = ep))
          : (ep = eO[131]),
        eO[132] !== tS || eO[133] !== an || eO[134] !== ef || eO[135] !== ep
          ? ((eg = (0, n.jsx)(C, { portalContainer: an, label: ef, "aria-pressed": tS, onClick: eh, children: ep })),
            (eO[132] = tS),
            (eO[133] = an),
            (eO[134] = ef),
            (eO[135] = ep),
            (eO[136] = eg))
          : (eg = eO[136]),
        eO[137] !== tm
          ? ((ev = tm.formatMessage({
              id: "markdown.video.volume",
              defaultMessage: "Video volume",
              description: "Accessible label for the video volume controls",
            })),
            (eO[137] = tm),
            (eO[138] = ev))
          : (ev = eO[138]),
        eO[139] !== tm || eO[140] !== tS || eO[141] !== tk
          ? ((eb = tm.formatNumber(tS ? 0 : tk, { style: "percent" })),
            (eO[139] = tm),
            (eO[140] = tS),
            (eO[141] = tk),
            (eO[142] = eb))
          : (eb = eO[142]))
      let ar = tS ? 0 : tk
      ;(eO[143] !== ar ? ((ex = [ar]), (eO[143] = ar), (eO[144] = ex)) : (ex = eO[144]),
        eO[145] === Symbol.for("react.memo_cache_sentinel")
          ? ((ew = (e) => {
              let [t] = e,
                a = tf.current
              null != a && null != t && ((a.volume = t), (a.muted = !1))
            }),
            (eO[145] = ew))
          : (ew = eO[145]),
        eO[146] !== ev || eO[147] !== eb || eO[148] !== ex
          ? ((ey = (0, n.jsx)(k, {
              label: ev,
              valueText: eb,
              min: 0,
              max: 1,
              step: 0.01,
              value: ex,
              onValueChange: ew,
            })),
            (eO[146] = ev),
            (eO[147] = eb),
            (eO[148] = ex),
            (eO[149] = ey))
          : (ey = eO[149]),
        eO[150] !== eg || eO[151] !== ey
          ? ((eM = (0, n.jsxs)("span", { className: "flex w-40 items-center gap-2", children: [eg, ey] })),
            (eO[150] = eg),
            (eO[151] = ey),
            (eO[152] = eM))
          : (eM = eO[152]),
        eO[153] !== aa || eO[154] !== em || eO[155] !== eM
          ? ((ej = (0, n.jsx)(v.hl, {
              align: "end",
              side: "top",
              size: "content",
              variant: "menu",
              portalContainer: aa,
              "aria-label": em,
              children: eM,
            })),
            (eO[153] = aa),
            (eO[154] = em),
            (eO[155] = eM),
            (eO[156] = ej))
          : (ej = eO[156]),
        eO[157] !== eu || eO[158] !== ej
          ? ((eC = (0, n.jsxs)(v.AM, { onOpenChange: es, children: [eu, ej] })),
            (eO[157] = eu),
            (eO[158] = ej),
            (eO[159] = eC))
          : (eC = eO[159]))
      let al = tv ? tp : void 0
      eO[160] === Symbol.for("react.memo_cache_sentinel")
        ? ((ek = (e) => {
            ;(tP(!1), tz(e), e || tI(!1))
          }),
          (eO[160] = ek))
        : (ek = eO[160])
      let ao = tv ? tp : void 0
      ;(eO[161] !== tm
        ? ((eT = tm.formatMessage({
            id: "markdown.video.options",
            defaultMessage: "Video options",
            description: "Accessible label for the video playback options menu",
          })),
          (eO[161] = tm),
          (eO[162] = eT))
        : (eT = eO[162]),
        eO[163] === Symbol.for("react.memo_cache_sentinel")
          ? ((eS = (0, n.jsx)(g.l0Y, {})), (eO[163] = eS))
          : (eS = eO[163]),
        eO[164] !== ao || eO[165] !== eT
          ? ((eA = (0, n.jsx)(C, { portalContainer: ao, label: eT, children: eS })),
            (eO[164] = ao),
            (eO[165] = eT),
            (eO[166] = eA))
          : (eA = eO[166]),
        eO[167] !== e4
          ? ((eF =
              null != e4
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(h.ms.Item, {
                        onSelect: () => {
                          ;(tE(!1), e4().catch(() => tE(!0)))
                        },
                        children: (0, n.jsx)(m.A, {
                          id: "markdown.video.saveCopy",
                          defaultMessage: "Save video as…",
                          description: "Menu action to save a local copy of a video",
                        }),
                      }),
                      (0, n.jsx)(h.ms.Separator, {}),
                    ],
                  })
                : null),
            (eO[167] = e4),
            (eO[168] = eF))
          : (eF = eO[168]),
        eO[169] !== tN || eO[170] !== ta
          ? ((eB =
              null != ta
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(h.ms.Item, {
                        onSelect: (e) => {
                          ;(e.preventDefault(), (0, x.E)(ta).then(tI))
                        },
                        children: tN
                          ? (0, n.jsx)(m.A, {
                              id: "markdown.video.linkCopied",
                              defaultMessage: "Link copied",
                              description: "Confirmation that the original video URL was copied",
                            })
                          : (0, n.jsx)(m.A, {
                              id: "markdown.video.copyLink",
                              defaultMessage: "Copy link",
                              description: "Video settings menu action to copy the original video URL",
                            }),
                      }),
                      (0, n.jsx)(h.ms.Separator, {}),
                    ],
                  })
                : null),
            (eO[169] = tN),
            (eO[170] = ta),
            (eO[171] = eB))
          : (eB = eO[171]),
        eO[172] === Symbol.for("react.memo_cache_sentinel")
          ? ((e_ = (0, n.jsx)(h.ms.SectionLabel, {
              children: (0, n.jsx)(m.A, {
                id: "markdown.video.speed",
                defaultMessage: "Playback speed",
                description: "Heading for video playback speed choices",
              }),
            })),
            (eO[172] = e_))
          : (e_ = eO[172]))
      let ai = String(tF)
      return (
        eO[173] === Symbol.for("react.memo_cache_sentinel")
          ? ((eE = (e) => {
              let t = tf.current
              null != t && (t.playbackRate = Number(e))
            }),
            (eN = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(j)),
            (eO[173] = eE),
            (eO[174] = eN))
          : ((eE = eO[173]), (eN = eO[174])),
        eO[175] !== ai
          ? ((eI = (0, n.jsx)(h.ms.RadioGroup, { value: ai, onValueChange: eE, children: eN })),
            (eO[175] = ai),
            (eO[176] = eI))
          : (eI = eO[176]),
        eO[177] !== tp?.ownerDocument || eO[178] !== td
          ? ((eD =
              "overlay" !== td && tp?.ownerDocument.pictureInPictureEnabled
                ? (0, n.jsx)(h.ms.Item, {
                    onSelect: () => {
                      let e = tf.current
                      null == e ||
                        (tE(!1),
                        (e.ownerDocument.pictureInPictureElement === e
                          ? e.ownerDocument.exitPictureInPicture()
                          : e.requestPictureInPicture()
                        ).catch(() => tE(!0)))
                    },
                    children: (0, n.jsx)(m.A, {
                      id: "markdown.video.pictureInPicture",
                      defaultMessage: "Picture in picture",
                      description: "Menu action to toggle picture-in-picture video playback",
                    }),
                  })
                : null),
            (eO[177] = tp?.ownerDocument),
            (eO[178] = td),
            (eO[179] = eD))
          : (eD = eO[179]),
        eO[180] !== al || eO[181] !== eA || eO[182] !== eF || eO[183] !== eB || eO[184] !== eI || eO[185] !== eD
          ? ((eP = (0, n.jsxs)(h.Ab, {
              align: "end",
              side: "top",
              portalContainer: al,
              onOpenChange: ek,
              triggerButton: eA,
              children: [eF, eB, e_, eI, eD],
            })),
            (eO[180] = al),
            (eO[181] = eA),
            (eO[182] = eF),
            (eO[183] = eB),
            (eO[184] = eI),
            (eO[185] = eD),
            (eO[186] = eP))
          : (eP = eO[186]),
        eO[187] !== ti ||
        eO[188] !== tJ ||
        eO[189] !== tm ||
        eO[190] !== tv ||
        eO[191] !== eW ||
        eO[192] !== tp ||
        eO[193] !== tK
          ? ((eU =
              null != eW || (ti && tp?.ownerDocument.fullscreenEnabled)
                ? (0, n.jsx)(C, {
                    portalContainer: tv ? tp : void 0,
                    label:
                      null != eW
                        ? tm.formatMessage({
                            id: "markdown.video.expand",
                            defaultMessage: "Expand video",
                            description: "Button to open a larger video preview in a dialog",
                          })
                        : tJ,
                    onClick: tK,
                    children: tv ? (0, n.jsx)(p.I, { asset: l }) : (0, n.jsx)(g.Zdv, {}),
                  })
                : null),
            (eO[187] = ti),
            (eO[188] = tJ),
            (eO[189] = tm),
            (eO[190] = tv),
            (eO[191] = eW),
            (eO[192] = tp),
            (eO[193] = tK),
            (eO[194] = eU))
          : (eU = eO[194]),
        eO[195] !== eU || eO[196] !== eC || eO[197] !== eP
          ? ((ez = (0, n.jsxs)("span", {
              className: "ms-auto flex shrink-0 items-center gap-1.5",
              children: [eC, eP, eU],
            })),
            (eO[195] = eU),
            (eO[196] = eC),
            (eO[197] = eP),
            (eO[198] = ez))
          : (ez = eO[198]),
        eO[199] !== ez || eO[200] !== ee || eO[201] !== eo || eO[202] !== ei
          ? ((eL = (0, n.jsxs)("span", {
              className:
                "flex h-toolbar-pane flex-wrap items-center gap-x-2 px-2 @max-xs/video-controls:h-auto @max-xs/video-controls:py-1",
              children: [ee, eo, ei, ez],
            })),
            (eO[199] = ez),
            (eO[200] = ee),
            (eO[201] = eo),
            (eO[202] = ei),
            (eO[203] = eL))
          : (eL = eO[203]),
        eO[204] !== t_
          ? ((eV = t_
              ? (0, n.jsx)("span", {
                  role: "status",
                  className: "block px-2 pb-2 text-xs text-secondary",
                  children: (0, n.jsx)(m.A, {
                    id: "markdown.video.actionFailed",
                    defaultMessage: "Could not complete this video action. Try again",
                    description: "Error shown when video playback, saving, fullscreen, or picture in picture fails",
                  }),
                })
              : null),
            (eO[204] = t_),
            (eO[205] = eV))
          : (eV = eO[205]),
        eO[206] !== eL || eO[207] !== eV || eO[208] !== t4 || eO[209] !== Z
          ? ((eq = (0, n.jsxs)("span", { "data-theme": t4, className: Z, children: [eL, eV] })),
            (eO[206] = eL),
            (eO[207] = eV),
            (eO[208] = t4),
            (eO[209] = Z),
            (eO[210] = eq))
          : (eq = eO[210]),
        eO[211] !== e8 ||
        eO[212] !== eq ||
        eO[213] !== I ||
        eO[214] !== tW ||
        eO[215] !== t1 ||
        eO[216] !== t0 ||
        eO[217] !== D ||
        eO[218] !== X ||
        eO[219] !== Y
          ? ((eR = (0, n.jsxs)("span", {
              ref: tg,
              className: I,
              "data-markdown-copy": "exclude",
              "data-theme": tW,
              "aria-busy": t1,
              "data-controls-hidden": t0,
              onKeyDownCapture: D,
              children: [X, e8, Y, eq],
            })),
            (eO[211] = e8),
            (eO[212] = eq),
            (eO[213] = I),
            (eO[214] = tW),
            (eO[215] = t1),
            (eO[216] = t0),
            (eO[217] = D),
            (eO[218] = X),
            (eO[219] = Y),
            (eO[220] = eR))
          : (eR = eO[220]),
        eR
      )
    }
    function j(e) {
      return (0, n.jsx)(
        h.ms.RadioItem,
        {
          value: String(e),
          children: (0, n.jsx)(m.A, {
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
        a,
        l,
        o,
        i,
        s = (0, r.c)(11)
      return (
        s[0] !== e
          ? (({ label: t, portalContainer: a, ...l } = e), (s[0] = e), (s[1] = t), (s[2] = a), (s[3] = l))
          : ((t = s[1]), (a = s[2]), (l = s[3])),
        s[4] !== t || s[5] !== l
          ? ((o = (0, n.jsx)(f.$, { color: "ghostSecondary", size: "toolbar", uniform: !0, "aria-label": t, ...l })),
            (s[4] = t),
            (s[5] = l),
            (s[6] = o))
          : (o = s[6]),
        s[7] !== t || s[8] !== a || s[9] !== o
          ? ((i = (0, n.jsx)(b.m, { tooltipContent: t, portalContainer: a, closeOnTriggerClick: !0, children: o })),
            (s[7] = t),
            (s[8] = a),
            (s[9] = o),
            (s[10] = i))
          : (i = s[10]),
        i
      )
    }
    function k(e) {
      let t,
        a,
        l,
        o,
        i,
        u,
        m,
        f,
        h,
        p,
        g,
        v,
        b,
        x,
        w = (0, r.c)(34)
      w[0] !== e
        ? (({ label: t, min: l, max: o, valueText: i, ...a } = e),
          (w[0] = e),
          (w[1] = t),
          (w[2] = a),
          (w[3] = l),
          (w[4] = o),
          (w[5] = i))
        : ((t = w[1]), (a = w[2]), (l = w[3]), (o = w[4]), (i = w[5]))
      let y = void 0 === l ? 0 : l,
        M = void 0 === o ? 100 : o,
        [j, C] = (0, c.useState)(!1),
        k = (0, c.useRef)(null)
      w[6] !== M || w[7] !== y || w[8] !== a
        ? ((u = (e) => {
            let t = k.current
            if (a.disabled || null == t) return
            let n = e.currentTarget.getBoundingClientRect(),
              r = t.getBoundingClientRect().width
            if (n.width <= r) return
            let l = Math.min(1, Math.max(0, (e.clientX - n.left - r / 2) / (n.width - r)))
            a.onValueChange?.([y + (M - y) * ("rtl" === e.currentTarget.dir ? 1 - l : l)])
          }),
          (w[6] = M),
          (w[7] = y),
          (w[8] = a),
          (w[9] = u))
        : (u = w[9])
      let T = u
      ;(w[10] === Symbol.for("react.memo_cache_sentinel") ? ((m = () => C(!1)), (w[10] = m)) : (m = w[10]),
        w[11] !== a
          ? ((f = (e) => {
              ;(C(!1), a.onKeyDown?.(e))
            }),
            (w[11] = a),
            (w[12] = f))
          : (f = w[12]),
        w[13] !== a.disabled || w[14] !== T
          ? ((h = (e) => {
              ;(e.preventDefault(),
                a.disabled ||
                  0 !== e.button ||
                  (C(!0), k.current?.setPointerCapture(e.pointerId), k.current?.focus({ preventScroll: !0 }), T(e)))
            }),
            (w[13] = a.disabled),
            (w[14] = T),
            (w[15] = h))
          : (h = w[15]),
        w[16] !== T
          ? ((p = (e) => {
              ;(e.preventDefault(), k.current?.hasPointerCapture(e.pointerId) && T(e))
            }),
            (w[16] = T),
            (w[17] = p))
          : (p = w[17]),
        w[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)(s.CC, {
              className: "relative h-0.5 grow rounded-full bg-border",
              children: (0, n.jsx)(s.Q6, { className: "absolute h-full rounded-full bg-text" }),
            })),
            (w[18] = g))
          : (g = w[18]))
      let S = !j && "focus-visible:ring-2 focus-visible:ring-ring"
      return (
        w[19] !== S
          ? ((v = (0, d.A)(
              "block h-4 w-4 cursor-interaction rounded-full border border-default bg-surface-tertiary shadow-md focus:outline-none data-[disabled]:cursor-default",
              S,
            )),
            (w[19] = S),
            (w[20] = v))
          : (v = w[20]),
        w[21] !== t || w[22] !== a.disabled || w[23] !== v || w[24] !== i
          ? ((b = (0, n.jsx)(s.zi, {
              ref: k,
              className: v,
              "aria-label": t,
              "aria-disabled": a.disabled,
              "aria-valuetext": i,
            })),
            (w[21] = t),
            (w[22] = a.disabled),
            (w[23] = v),
            (w[24] = i),
            (w[25] = b))
          : (b = w[25]),
        w[26] !== M || w[27] !== y || w[28] !== a || w[29] !== b || w[30] !== f || w[31] !== h || w[32] !== p
          ? ((x = (0, n.jsxs)(s.bL, {
              className: "relative flex h-6 min-w-0 flex-1 touch-none items-center data-[disabled]:opacity-40",
              min: y,
              max: M,
              onBlur: m,
              ...a,
              onKeyDown: f,
              onPointerDown: h,
              onPointerMove: p,
              children: [g, b],
            })),
            (w[26] = M),
            (w[27] = y),
            (w[28] = a),
            (w[29] = b),
            (w[30] = f),
            (w[31] = h),
            (w[32] = p),
            (w[33] = x))
          : (x = w[33]),
        x
      )
    }
    function T(e) {
      let t = Math.max(0, Math.floor(e))
      return `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`
    }
  },
  sMeo(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("mNg4"),
      o = a("BibS")
    a.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            a = (0, r.c)(2)
          return (
            a[0] !== e
              ? ((t = (0, n.jsx)(o.W, { ...e, content: l.SymbolBrowser })), (a[0] = e), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
      },
    )
  },
  m5G2(e, t, a) {
    var n = a("f4Vb")
    a.d(
      t,
      {},
      {
        J: function ({ axis: e, debounce: t, initialSize: a = !0, onChange: r, target: l }) {
          if (!l || "u" < typeof ResizeObserver) return
          let o = new AbortController(),
            i = null,
            s = null,
            d = a,
            c = new ResizeObserver((a) => {
              a.forEach((a) => {
                let { width: l, height: c } = (0, n.q)(a),
                  u = !1
                if ("width" === e) {
                  let e = (d || null != i) && i !== l
                  ;((i = l), e && (u = !0))
                } else if ("height" === e) {
                  let e = (d || null != s) && s !== c
                  ;((s = c), e && (u = !0))
                } else if ("both" === e) {
                  let e = (d || null != i) && i !== l,
                    t = (d || null != s) && s !== c
                  ;((i = l), (s = c), (e || t) && (u = !0))
                }
                if (((d = !1), u))
                  if (t) {
                    o.abort()
                    let e = (o = new AbortController()).signal
                    requestAnimationFrame(() => {
                      e.aborted || r({ width: l, height: c, previousWidth: i, previousHeight: s }, a)
                    })
                  } else r({ width: l, height: c, previousWidth: i, previousHeight: s }, a)
              })
            })
          return (
            c.observe(l),
            function () {
              try {
                c.disconnect()
              } catch (e) {}
            }
          )
        },
      },
    )
  },
}
//# sourceMappingURL=392429.8e8e66e4ad.js.map
